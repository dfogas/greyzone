import * as state from '../../client/state'; //
import DocumentTitle from 'react-document-title';
import Html from './html.react';
import Promise from 'bluebird';
import React from 'react';
import Router from 'react-router';
import config from '../config';
import immutable from 'immutable';
import initialState from '../initialstate';
import routes from '../../client/routes';
import stateMerger from '../lib/merger';

export default function render(req, res, userState = {}) {
  const appState = immutable.fromJS(initialState).mergeWith(stateMerger, userState).toJS();
  return renderPage(req, res, appState);
}

function renderPage(req, res, appState) {
  return new Promise((resolve, reject) => {

    // pouziti react-routeru take na serveru
    const router = Router.create({
      routes,
      location: req.originalUrl,
      onError: reject,
      onAbort: (abortReason) => {
        // Some requireAuth higher order component requested redirect.
        if (abortReason.constructor.name === 'Redirect') {
          const {to, params, query} = abortReason;
          const path = router.makePath(to, params, query);
          res.redirect(path);
          resolve();
          return;
        }
        reject(abortReason);
      }
    });

    router.run((Handler, routerState) => {
      const html = loadAppStateThenRenderHtml(Handler, appState);
      const notFound = routerState.routes.some(route => route.name === 'not-found');
      const status = notFound ? 404 : 200;
      console.log('Router runs.');
      res.status(status).send(html);
      resolve();
    });

  });
}

function loadAppStateThenRenderHtml(Handler, appState) {
  state.appState.load(appState);
  return getPageHtml(Handler, appState);
}

function getPageHtml(Handler, appState) {
  const appHtml = `<div id="app">${React.renderToString(<Handler />)}</div>`;
  const appScriptSrc = config.isProduction
    ? '/build/app.js?v=' + config.version
    : config.isStaging
    ? '/build/app.js?v=' + config.version
    : '//localhost:8888/build/app.js';
  const urlServer = config.isProduction ? 'https://www.ghoststruggle.com' : 'http://localhost:8000';

  // Serialize app state for client.
  let scriptHtml = `
    <script>
      (function() {
        window._appState = ${JSON.stringify(appState)}; // ha!
        var app = document.createElement('script'); app.type = 'text/javascript'; app.async = true;
        var src = '${appScriptSrc}';
        // IE<11 and Safari need Intl polyfill.
        if (!window.Intl) src = src.replace('.js', 'intl.js');
        app.src = src;
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(app, s);
      })();
    </script>`;

  if (config.isProduction && config.googleAnalyticsId !== 'UA-XXXXXXX-X')
    scriptHtml += `
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-77300811-1', 'auto');
      ga('send', 'pageview');

    </script>`;

  scriptHtml += `
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.2/TweenMax.min.js"></script>
  `;

  scriptHtml += `
    <script src="/socket.io/socket.io.js"></script>`;

  scriptHtml += `<script>
    var URL_SERVER;
    URL_SERVER = '${urlServer}';
    var socket = io.connect(URL_SERVER);
    </script>`;


  const title = DocumentTitle.rewind();

  return '<!DOCTYPE html>' + React.renderToStaticMarkup(
    <Html
      bodyHtml={appHtml + scriptHtml}
      isProduction={config.isProduction}
      isStaging={config.isStaging}
      title={title}
      version={config.version}
    />
  );
}

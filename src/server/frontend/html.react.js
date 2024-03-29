import Component from '../../client/components/component.react';
import React from 'react';

export default class Html extends Component {

  render() {
    // Only for production. For dev, it's handled by webpack with livereload.
    let linkStyles = (this.props.isProduction || this.props.isStaging) &&
     <link
       href={`/build/app.css?v=${this.props.version}`}
       rel="stylesheet"
       />;

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport" />
          <title>{this.props.title}</title>
          {linkStyles}
        </head>
        <body dangerouslySetInnerHTML={{__html: this.props.bodyHtml}} />
      </html>
    );
  }

}

Html.propTypes = {
  bodyHtml: React.PropTypes.string.isRequired,
  isProduction: React.PropTypes.bool.isRequired,
  isStaging: React.PropTypes.bool.isRequired,
  title: React.PropTypes.string.isRequired,
  version: React.PropTypes.string.isRequired
};

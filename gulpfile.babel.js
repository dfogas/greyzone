import bg from 'gulp-bg';
import eslint from 'gulp-eslint';
import gulp from 'gulp';
import makeWebpackConfig from './webpack/makeconfig';
import mocha from 'gulp-mocha';
// import path from 'path';
import runSequence from 'run-sequence';
import webpackBuild from './webpack/build';
import webpackDevServer from './webpack/devserver';
import yargs from 'yargs';

const args = yargs
  .alias('p', 'production')
  // .alias('d', 'deployment')
  .argv;

gulp.task('env', () => {
  const env = args.production ? 'production' : 'development';
  process.env.NODE_ENV = env; // eslint-disable-line no-undef
});

gulp.task('build-webpack-production', webpackBuild(makeWebpackConfig(false)));
gulp.task('build-webpack-dev', webpackDevServer(makeWebpackConfig(true)));
gulp.task('build-webpack', [args.production
  ? 'build-webpack-production'
  : 'build-webpack-dev'
]);
gulp.task('build', ['build-webpack']);

gulp.task('eslint', () => {
  return gulp.src([
    'gulpfile.babel.js',
    'src/**/*.js',
    'webpack/*.js',
    '!**/__tests__/*.*'
  ])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failOnError());
});

gulp.task('test', (done) => {
  // Run test tasks serially, because it doesn't make sense to build when tests
  // are not passing, and it doesn't make sense to run tests, if lint has failed.
  // Gulp deps aren't helpful, because we want to run tasks without deps as well.
  runSequence('eslint', 'build-webpack-production', done);
});

gulp.task('apitest', () => {
  return gulp.src('./src/test/server/api/*.*', {read: false})
    // gulp-mocha needs filepaths so you can't have any plugins before it
    .pipe(mocha({reporter: 'base'}));
});

gulp.task('lib-server', () => {
  return gulp.src('./src/test/server/lib/*.*', {read: false})
    .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('lib-client', () => {
  return gulp.src('./src/client/lib/test/*.*', {read: false})
    .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('api', (done) => {
  runSequence('env', 'apitest', done);
});

gulp.task('server', ['env', 'build'], bg('node', 'src/server'));

gulp.task('default', (done) => {
  if (args.production)
    runSequence('server', done);
  else
    runSequence('server', done);
});

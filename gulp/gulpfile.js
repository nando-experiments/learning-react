var path   = require('path');
var del    = require('del');
var gulp   = require('gulp');
var $      = require('gulp-load-plugins')();
var bSync  = require('browser-sync').create();
var reload = bSync.reload;

// set variable via $ gulp --type production
var environment   = $.util.env.type || 'development';
var isProduction  = environment === 'production';
var webpackConfig = require('./webpack.config.js').getConfig(environment);

var port = $.util.env.port || 1337;
var src  = './src';
var dist = './dist';

gulp.task('scripts', function() {
  return gulp.src(webpackConfig.entry)
    .pipe($.webpack(webpackConfig))
    .pipe(isProduction ? $.uglify() : $.util.noop())
    .pipe(gulp.dest(dist + '/js/'))
    .pipe($.size({ title : 'js' }));
});

gulp.task('html', function() {
  return gulp.src(src + '/index.html')
    .pipe(gulp.dest(dist))
    .pipe($.size({ title : 'html' }));
});

gulp.task('server', function() {
  bSync.init({
    server: dist,
    port: port
  });
});

// watch styl, html and js file changes
gulp.task('watch', function() {
  gulp.watch(src + '/index.html', ['html']);
  gulp.watch(src + '/scripts/**/*.{js,jsx}', ['scripts']);
  gulp.watch(dist + '/**/*').on('change', reload);
});

gulp.task('clean', function(cb) {
  return del([dist], cb);
});

gulp.task('build', ['clean'], function(){
  gulp.start(['html', 'scripts', 'server', 'watch']);
});

gulp.task('default', ['build']);

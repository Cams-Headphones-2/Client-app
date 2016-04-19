var gulp        = require('gulp'),
    server      = require('gulp-webserver'),
    tap         = require('gulp-tap'),
    fs          = require('fs'),
    browserify  = require('browserify'),
    buffer      = require('gulp-buffer'),
    gutil       = require('gulp-util'),
    uglify      = require('gulp-uglify'),
    gls         = require('gulp-live-server'),
    less        = require('gulp-less'),
    watch       = require('gulp-watch');

gulp.task('less', function(){
  return gulp.src('public/less/bootstrap.less')
    .pipe(less()) // Using gulp-less
    .pipe(gulp.dest('public/stylesheets/'))
});

gulp.task('react', function() {
  return gulp.src('./public/jsx/*.js', {read: false})
    .pipe(tap(function(file) {
      gutil.log('bundling ' + file.path);
      file.contents = browserify(file.path).transform('babelify', {presets: ['es2015', 'react']}).bundle()
    }))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./public/javascripts/components'));
});

gulp.task('watch', function(){
  gulp.watch('public/less/**/*.less', ['less']);
  gulp.watch(['./public/jsx/*.js'], ['react']);
  // Other watchers
});

gulp.task('default', ['watch']);

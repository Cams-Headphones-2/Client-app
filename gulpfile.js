var gulp  = require('gulp');
var less  = require('gulp-less');
var watch = require('gulp-watch');

gulp.task('hello', function(){
  console.log('Gulp, I am thirsty!');
})

gulp.task('less', function(){
  return gulp.src('public/less/bootstrap.less')
    .pipe(less()) // Using gulp-less
    .pipe(gulp.dest('public/stylesheets/'))
});

gulp.task('watch', function(){
  gulp.watch('public/less/**/*.less', ['less']);
  // Other watchers
})

gulp.task('default', ['less', 'watch', 'hello']);

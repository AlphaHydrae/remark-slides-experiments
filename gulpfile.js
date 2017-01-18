var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('serve', function() {
  return connect.server({
    root: 'docs',
    port: process.env.PORT || 3000
  });
});

gulp.task('default', [ 'serve' ]);

'use strict'
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

// --------------------------------------------------------
var f = require('../path');
var type = f.devPath();
// --------------------------------------------------------

function image(device, project) {
  if (device === 'pc') {
    return gulp.src(type.dev + "/images/**/*.+(png|gif|jpg|jpeg|svg)")
      .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        use: [pngquant()]
      }))
      .pipe(gulp.dest(type.dev + "/images"));
  }
}


gulp.task('img:pc', function () {
  return image('pc', type.project);
});

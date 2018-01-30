'use strict'
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var changed = require('gulp-changed');

// --------------------------------------------------------
var f = require('../path');
var type = f.devPath();
// --------------------------------------------------------

gulp.task('img', function () {
    return gulp.src(type.img)
    .pipe(changed(type.dist+"/images/"))
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(type.dist+"/images/"));
});

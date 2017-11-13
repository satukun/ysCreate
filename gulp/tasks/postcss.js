'use strict'
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var notify = require("gulp-notify");
var postcss = require('gulp-postcss');
var csso = require('gulp-csso');
var sassLint = require("gulp-sass-lint");

// --------------------------------------------------------
var f = require('../path');
var type = f.devPath();
// --------------------------------------------------------

var browsers = [
  "last 2 versions", "ie >= 11", "Android >= 4", "ios_saf >= 8"
];

function css(device, type, project) {
    if (device === 'pc') {
      gulp.src("app/" + project + "/**/*.+(scss)")
        .pipe(sassLint({
          options: {
            'merge-default-rules': false
          },
          configFile: '.sass-lint.yml'
        }))
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError())
        .pipe(sass())
        .pipe(postcss([
          require('doiuse')({
            browsers: browsers,
            ignore: ['transforms2d']
           }),
          require('autoprefixer')({ browsers: browsers }),
          require('css-mqpacker')
        ]))
        .pipe(csso())
        .pipe(gulp.dest("app/" + project));
    }
}

gulp.task('postcss:pc', function() {
  return css('pc', 'html', type.project);
});

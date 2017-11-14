'use strict'
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var eslint = require('gulp-eslint');
var htmlhint = require("gulp-htmlhint");
var csslint = require("gulp-csslint");
var sassLint = require("gulp-sass-lint");
var notify = require("gulp-notify");

// --------------------------------------------------------
var f = require('../path');
var type = f.devPath();
// --------------------------------------------------------


function lints(device, type, project) {
    if (device === 'pc') {
        if (type === 'html') {
          gulp.src(type.dev + "/**/*.+(html)")
            .pipe(plumber({
              errorHandler: notify.onError('HTMLでError: <%= error.message %>')
            }))
            .pipe(htmlhint('.htmlhintrc'))
            .pipe(htmlhint.reporter());
        }
        // else if (type === 'css') {
        //   gulp.src(type.dev + "/**/*.+(css)")
        //     .pipe(plumber({
        //       errorHandler: notify.onError('CSSでError: <%= error.message %>')
        //     }))
        //     .pipe(csslint('.csslintrc'))
        //     .pipe(csslint.formatter());
        // }
        // else if (type === 'scss') {
        //   gulp.src(type.dev + "/**/*.+(scss)")
        //     .pipe(plumber({
        //       errorHandler: notify.onError('SCSSでError: <%= error.message %>')
        //     }))
        //     .pipe(sassLint({
        //       options: {
        //         'merge-default-rules': false
        //       },
        //       configFile: '.sass-lint.yml'
        //     }))
        //     .pipe(sassLint.format())
        //     .pipe(sassLint.failOnError());
        // }
        else if (type === 'js') {
          return gulp.src(type.dev + "/**/*.+(js)")
            .pipe(plumber({
              errorHandler: notify.onError('JSでError <%= error.message %>')
            }))
            .pipe(eslint({ useEslintrc: true }))
            .pipe(eslint.format())
            .pipe(eslint.failAfterError())
            .pipe(plumber.stop());
        }
    }
}

gulp.task('lint-html:pc', function() {
  return lints('pc', 'html', type.project);
});

// gulp.task('lint-css:pc', function () {
//   return lints('pc', 'css', type.project);
// });

// gulp.task('lint-scss:pc', function () {
//   return lints('pc', 'scss', type.project);
// });

gulp.task('lint-js:pc', function () {
  return lints('pc', 'js', type.project);
});

'use strict'
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var notify = require("gulp-notify");
var postcss = require('gulp-postcss');
var csso = require('gulp-csso');
var sassLint = require("gulp-sass-lint");
var stylelint = require('stylelint');
var reporter = require('postcss-reporter');
var immutableCss = require('immutable-css');
var cssnext = require('postcss-cssnext');
var changed = require('gulp-changed');


// --------------------------------------------------------
var f = require('../path');
var type = f.devPath();
// --------------------------------------------------------

var browsers = [
  "last 2 versions", "ie >= 9", "Android >= 5", "ios_saf >= 8"
];

function css(device, type, project) {
    if (device === 'pc') {
      gulp.src("app/" + project + "/resource/scss/main.+(scss)")
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
          immutableCss({
            strict: true
          }),
          stylelint('.stylelintrc'),
          reporter({ clearMessages: true }),
          require('doiuse')({
            browsers: browsers,
            ignore: ['transforms2d']
           }),
          require('autoprefixer')({ browsers: browsers }),
          require('css-mqpacker')
        ]))
        .pipe(csso())
        .pipe(gulp.dest("app/" + project + "/resource/css"));
    }
}

gulp.task('postcss:pc', function() {
  return css('pc', 'html', type.project);
});

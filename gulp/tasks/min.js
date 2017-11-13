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
console.log(type.html);
// --------------------------------------------------------

function lints(device, type) {
    if (device === 'pc') {
        if (type === 'html') {
            gulp.src(type.html)
                .pipe(plumber({
                    errorHandler: notify.onError('HTMLでError出てまっせ: <%= error.message %>')
                }))
                .pipe(htmlhint('.htmlhintrc'))
                .pipe(htmlhint.reporter());
        }
    }
}

gulp.task('lint-html:pc', function() {
    return lints('pc', 'html');
});

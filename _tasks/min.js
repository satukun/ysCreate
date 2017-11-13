'use strict'
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var cssmin = require("gulp-cssmin");
var minifyhtml = require("gulp-minify-html");
var prettify = require('gulp-html-prettify');
var uglify = require('gulp-uglify');
var csso = require("gulp-csso");

// --------------------------------------------------------
var f = require('../path');
f = f.func();
// --------------------------------------------------------

function min(device, type) {
    if (device === 'pc') {
        if (type === 'html') {
            return gulp.src(f.path.html)
                .pipe(minifyhtml({ empty: true }))
                .pipe(gulp.dest(f.dir.src))
                // rename必要時開放
                // .pipe(rename({
                //     suffix: '.min'
                // }))
                .pipe(gulp.dest(f.dir.src + '/deploy/' + f.work))
        } else if (type === 'css') {
            return gulp.src(f.path.css)
                .pipe(csso())
                .pipe(gulp.dest(f.dir.src + '/deploy/' + f.work))
                // rename必要時開放
                // .pipe(rename({
                //     suffix: '.min'
                // }))
                // .pipe(gulp.dest(f.dir.src + '/deploy/' + f.work))
        } else {
            return gulp.src(f.path.jsdep)
                .pipe(uglify())
                // rename必要時開放
                // .pipe(rename({
                //     suffix: '.min'
                // }))
                // .pipe(gulp.dest(f.dir.src + '/deploy/' + f.work))
        }
    }
}

gulp.task('min-html:pc', function() {
    return min('pc', 'html');
});

gulp.task('min-css:pc', function() {
    return min('pc', 'css');
});

gulp.task('min-js:pc', function() {
    return min('pc', 'js');
});
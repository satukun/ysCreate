'use strict'
var gulp = require('gulp');
var fs = require("fs");
var del = require('del');
var ejs = require("gulp-ejs");
var changed = require('gulp-changed');
var plumber = require("gulp-plumber");
var notify = require("gulp-notify");
var prettify = require("gulp-html-prettify");
var browser = require("browser-sync");
var replace = require('gulp-replace');
var cache = require('gulp-cached');
var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');

// --------------------------------------------------------
var version = require('../config').version;
var f = require('../path');
var type = f.devPath();
// --------------------------------------------------------

// var mode = process.env.ENV_MODE || 'development';
// var gulp_config_name = '../gulp_' + mode;
// var config = require(gulp_config_name);

function replaceEjs(device) {
    if (device === 'pc') {
      return gulp.src(type.ejs)
            .pipe(changed(type.ejs))
            .pipe(plumber({
                errorHandler: notify.onError('ejsでError出てまっせ: <%= error.message %>')
            }))
            .pipe(ejs({
                site: JSON.parse(fs.readFileSync(f.develop.data + 'site.json'))
            }, { "ext": ".html" }))
            .pipe(prettify({ indent_char: ' ', indent_size: 2 }))
            .pipe(gulp.dest(type.ejs))
            .pipe(browser.reload({
                stream: true
            }))
    }
}

function replaceFile(device) {
    return gulp.src([f.dir.src + '/deploy/' + f.work + '/**/*.+(css|png|gif|jpg|jpeg|svg|woff)', f.path.jsdep])
        .pipe(rev())
        .pipe(gulp.dest(f.dir.dist + '/deploy/' + f.work + '/'))
        .pipe(rev.manifest())
        .pipe(gulp.dest(f.dir.src + '/deploy/' + f.work + '/'))
}

function replaceHtml(device) {
  return gulp.src(type.html)
        .pipe(revReplace({ manifest: manifest }))
        .pipe(gulp.dest(type.html));
}

gulp.task('replaceEjs:pc', function() {
    return replaceEjs('pc');
});

gulp.task('replaceFile:pc', function() {
    return replaceFile('pc');
});

gulp.task('replaceHtml:pc', function() {
    return replaceHtml('pc');
});

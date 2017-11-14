'use strict'
var gulp = require('gulp');
var fs = require("fs");
var del = require('del');
var ejs = require("gulp-ejs");
var changed = require('gulp-changed');
var plumber = require("gulp-plumber");
var notify = require("gulp-notify");
var prettify = require("gulp-html-prettify");
var cache = require('gulp-cached');
// --------------------------------------------------------
var f = require('../path');
var type = f.devPath();
// --------------------------------------------------------
// var jsonData = 'path/to/pages.json';
// var json = JSON.parse(fs.readFileSync(jsonData));

function replaceEjs(device, project) {
  if (device === 'pc') {
    return gulp.src("app/" + project + "/**/*.+(html)")
      .pipe(changed(f.dir.src + '/deploy/' + f.work + '/'))
      .pipe(plumber({
        errorHandler: notify.onError('ejsでError出てまっせ: <%= error.message %>')
      }))
      .pipe(ejs({
        site: JSON.parse(fs.readFileSync(f.develop.data + 'site.json'))
      }, { "ext": ".html" }))
      .pipe(prettify({ indent_char: ' ', indent_size: 2 }))
      .pipe(gulp.dest(f.dir.src + '/deploy/' + f.work + '/'))
      .pipe(browser.reload({
        stream: true
      }))
  }
}
gulp.task('replaceEjs:pc', function () {
  return replaceEjs('pc',type.project);
});

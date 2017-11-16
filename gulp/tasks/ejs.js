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
var rename = require('gulp-rename');
var changed = require('gulp-changed');


// --------------------------------------------------------
var f = require('../path');
var type = f.devPath();
// --------------------------------------------------------
var jsonData = type.dev + "/ejs/pages.json";
var json = JSON.parse(fs.readFileSync(jsonData));

function replaceEjs(device, project) {
  if (device === 'pc') {
    return gulp.src([type.dev + "/ejs/**/*.ejs", "!" + type.dev + "/ejs/**/_*.ejs"])
      .pipe(changed(type.dev))
      .pipe(plumber({
        errorHandler: notify.onError('ejsでError: <%= error.message %>')
      }))
      .pipe(ejs({
        site: json
      }, { "ext": ".html" }))
      .pipe(rename({ extname: '.html' }))
      .pipe(prettify({ indent_char: ' ', indent_size: 2 }))
      .pipe(gulp.dest(type.dev));
  }
}
gulp.task('replaceEjs:pc', function () {
  return replaceEjs('pc', type.project);
});

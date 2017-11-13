'use strict'
var gulp = require("gulp");
var fs = require("fs");
var path = require('path');
var del = require('del');

//Webサーバー、ユーティリティ
var browser = require("browser-sync");
var plumber = require("gulp-plumber");
var notify = require("gulp-notify");
var notifier = require('node-notifier');
var sequence = require('gulp-sequence');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var requireDir = require('require-dir');
requireDir('./gulp/tasks', { recurse: true });

// --------------------------------------------------------
var f = require('./gulp/path');
f = f.func();
// --------------------------------------------------------


/** Run Web server */
gulp.task('server', () => {
    return browser.init(null, {
        port: 4000,
        server: {
            baseDir: f.dir.src + "/deploy/" + f.work
        },
        reloadDelay: 1000
    })
});

gulp.task("copy", function() {
    return gulp.src(
            ['_src/deploy/**/**'], { base: '_src' }
        )
        .pipe(gulp.dest(f.dir.dist));
});

gulp.task("watch", function() {
    gulp.watch(f.path.ejs, ["replaceEjs:pc", 'lint-html:pc']);
    gulp.watch(f.path.ejsCommon, ["replaceEjs:pc", 'lint-html:pc']);
    gulp.watch(f.path.scss, ["css-build:pc", 'lint-css:pc']);
    gulp.watch(f.path.img, ['image']);
    gulp.watch(f.path.sprites, ['image']);
    gulp.watch(f.path.styleguide, ['styleguide:generate', 'styleguide:applystyles']);
    gulp.watch(f.path.ts, ['ts']);
});

gulp.task("prepare", function(callback) {
    return sequence(
        ['replaceEjs:pc'], ['clean:img'], ['img:pc'], ['css-build:pc'], ['ts'], ['lint-html:pc', 'lint-css:pc'],
        callback
    );
});

gulp.task("deploy", function(callback) {
    return sequence(
        ['clean:dist'], ['clean:img'], ['img:pc'], ['min-html:pc', 'min-css:pc'], ['replaceFile:pc'], ['replaceHtml:pc'],
        callback
    );
});

gulp.task("default", function(callback) {
    return sequence(
        ['prepare'], ['server'], ['watch'],
        callback
    );
});

gulp.task("image", function(callback) {
    return sequence(
        ['clean:img'], ['img:pc'],
        callback
    );
});

gulp.task("styleguide", function(callback) {
    return sequence(
        ['styleguide:generate', 'styleguide:applystyles'],
        callback
    );
});

gulp.task('ts', function(callback) {
    return sequence(
        'clean', ['template', 'script:compile'],
        'script:bundle',
        callback
    );
});

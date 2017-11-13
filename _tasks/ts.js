'use strict'
var gulp = require('gulp');
var tsc = require('gulp-typescript');
var tsProject = tsc.createProject('./tsconfig.json');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var rimraf = require('gulp-rimraf');
var browser = require("browser-sync");
var watchify = require('watchify');
// --------------------------------------------------------
var f = require('../path');
f = f.func();
// --------------------------------------------------------


/** Compile TypeScript sources */
gulp.task('script:compile', () => {
    return gulp.src(f.path.ts)
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(f.dir.src + "/deploy/" + work + '/build'));
});

/** Bundle JavaScript sources by Watchify */
gulp.task('script:bundle', () => {
    const b = browserify({
        cache: {},
        packageCache: {},
        debug: true
    });
    const w = watchify(b);
    w.add(f.dir.src + "/deploy/" + work + '/build/app/main.js');
    const bundle = () => {
        return w.bundle()
            .pipe(source('app.js'))
            .pipe(gulp.dest(f.dir.src + "/deploy/" + work + '/assets/scripts'))
            .pipe(browser.reload({
                stream: true
            }));
    };
    w.on('update', bundle);
    return bundle();
});

/** Run Web server */
gulp.task('serve', () => {
    return browser.init(null, {
        port: 6000,
        server: {
            baseDir: f.dir.src + "/deploy/" + work
        },
        reloadDelay: 1000
    })
});


gulp.task('template', () => {
    return gulp.src(f.path.tstemp)
        .pipe(gulp.dest(f.dir.src + "/deploy/" + work + '/assets'))
        .pipe(browser.reload({
            stream: true
        }));
});


gulp.task('watch', () => {
    watch(f.path.ts, () => gulp.start('script:compile'));
    return watch(f.path.tstemp, () => gulp.start('template'));
});


gulp.task('clean', () => {
    return gulp.src(['public/', 'build/'])
        .pipe(rimraf());
});
'use strict'
var gulp = require('gulp');
var styleguide = require('sc5-styleguide');
var sass = require('gulp-sass');
// --------------------------------------------------------
var f = require('../path');
f = f.func();
var outputPath = f.dir.src + '/deploy/' + f.work + '/styleguide';
// --------------------------------------------------------


function generate() {
    return gulp.src(f.dir.src + '/_develop/' + work + '/styleguide/**/*.scss')
        .pipe(styleguide.generate({
            extraHead: [
                '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">',
                '<link rel="stylesheet" href="/css/main.css">',
                '<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>',
                '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>'
            ],
            disableEncapsulation: true,
            title: 'BL Styleguide',
            server: true,
            port: 5000,
            rootPath: outputPath,
            overviewPath: f.dir.src + '/_develop/' + work + '/styleguide/overview.md',
            basicAuth: {
                username: 'broadleaf',
                password: 'test2017'
            },
            // sideNav: true,
            styleVariables: f.dir.src + '/_develop/' + work + '/styleguide/styleguide_variables.scss'
        }))

    .pipe(gulp.dest(outputPath));
};

function applystyles() {
    return gulp.src(f.dir.src + '/_develop/' + work + '/styleguide/**/*.scss')
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(styleguide.applyStyles())
        .pipe(gulp.dest(outputPath));
};

gulp.task('styleguide:generate', function() {
    return generate();
});

gulp.task('styleguide:applystyles', function() {
    return applystyles();
});
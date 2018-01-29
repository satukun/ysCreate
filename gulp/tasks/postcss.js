'use strict'
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var notify = require("gulp-notify");
var postcss = require('gulp-postcss');
var csso = require('gulp-csso');
var stylelint = require('stylelint');
var reporter = require('postcss-reporter');
var immutableCss = require('immutable-css');
var cssnext = require('postcss-cssnext');
var changed = require('gulp-changed');
var sourcemaps = require('gulp-sourcemaps');
var $ = require('gulp-load-plugins')();

// --------------------------------------------------------
var f = require('../path');
var type = f.devPath();
// --------------------------------------------------------

var browsers = [
  "last 2 versions", "ie >= 9", "Android >= 5", "ios_saf >= 8"
];

gulp.task('css', function() {
    return gulp.src(type.css)
    .pipe(changed(type.dist))
    .pipe(plumber({
        errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe($.postcss([
      require('postcss-reporter')({clearMessages: true}),
      require('postcss-import')({
        plugins: [
          require('stylelint')
        ]
      }),
      require('postcss-simple-vars')({silent: true}),
      require('postcss-nested'),
      require('postcss-mixins'),
      require('postcss-extend'),
      require('postcss-custom-media'),
      require('postcss-inline-svg'),
      require('postcss-flexbugs-fixes'),
      require('postcss-will-change'),
      require('postcss-cssnext')({
        browsers: browsers,
      }),
      require('postcss-discard-comments'),
      require('postcss-calc'),
      // require('doiuse')({
      //   ignore: [
      //     'background-img-opts',
      //     'calc',
      //     'flexbox',
      //     'rem',
      //     'text-size-adjust',
      //     'css-appearance'
      //   ]
      // }),
      require('cssnano')({autoprefixer:false}, {discardComments: {removeAll: true}})
    ]))
    .pipe(gulp.dest(type.dist+"/css/"));
});


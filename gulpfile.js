'use strict'
var gulp = require("gulp");
var fs = require("fs");
var path = require('path');
var del = require('del');

//Webサーバー、ユーティリティ
var browserSync = require("browser-sync");
var requireDir = require('require-dir');
var sequence = require('gulp-sequence');
var pug = require("gulp-pug");
var notify = require("gulp-notify");
var plumber = require("gulp-plumber");
var changed = require('gulp-changed');
// requireDir('./gulp/tasks', { recurse: true });

// --------------------------------------------------------
var f = require('./gulp/path');
var type = f.devPath();
// --------------------------------------------------------


/** Run Web server */
gulp.task('server', () => {
    return browserSync.init(null, {
        port: 4000,
        server: {
          baseDir: type.dist
        },
        reloadDelay: 1000
    })
});

gulp.task('reload', () => {
  browserSync.reload();
});

// gulp.task("copy", function() {
//     return gulp.src(
//             ['_src/deploy/**/**'], { base: '_src' }
//         )
//         .pipe(gulp.dest(f.dir.dist));
// });


//pugをhtmlに変換
gulp.task("pug", () => {
  var option = {
      pretty: true
  }
  gulp.src(["app/" + work + "/resource/pug/**/*.pug", "!app/ "+work+"/resource/pug/**/_*.pug"])
      .pipe(changed(type.dist))
      .pipe(plumber({
          errorHandler: notify.onError("Error: <%= error.message %>")
      }))
      .pipe(pug(option))
      .pipe(gulp.dest(type.dist))
});

gulp.task("watch", () => {
  gulp.watch([["app/" + work + "/resource/pug/**/*.pug", "!app/ "+work+"/resource/pug/**/_*.pug"]], ['pug','reload']);
  // gulp.watch(type.ejs, ['replaceEjs:pc','lint-html:pc','bs-reload']);
  // gulp.watch(type.html, ['lint-html:pc','bs-reload']);
  // gulp.watch(type.scss, ['postcss:pc','bs-reload']);
  // gulp.watch(type.js, ['lint-js:pc', 'bs-reload']);
  // gulp.watch(type.img, ['img:pc']);
  // gulp.watch(type.css, ['lint-css:pc','bs-reload']);
  // gulp.watch(type.scss, ['lint-scss:pc','bs-reload']);
});

gulp.task("default", (callback) => {
    return sequence(
      ['server'],
      ['pug'],
      ['watch'],
        callback
    );
});

'use strict'
var gulp = require("gulp");

//Webサーバー、ユーティリティ
var browser = require("browser-sync");
var requireDir = require('require-dir');
var sequence = require('gulp-sequence');
// requireDir('./gulp/tasks', { recurse: true });

// --------------------------------------------------------
var f = require('./gulp/path');
var type = f.devPath();
// --------------------------------------------------------


/** Run Web server */
gulp.task('server', () => {
    return browser.init(null, {
        port: 4000,
        server: {
          baseDir: "app/"+ type.project +"/resource"
        },
        reloadDelay: 1000
    })
});

gulp.task('bs-reload', function () {
  browser.reload();
})

// gulp.task("copy", function() {
//     return gulp.src(
//             ['_src/deploy/**/**'], { base: '_src' }
//         )
//         .pipe(gulp.dest(f.dir.dist));
// });

gulp.task("watch", function() {
  // gulp.watch(type.ejs, ['replaceEjs:pc','lint-html:pc','bs-reload']);
  // gulp.watch(type.html, ['lint-html:pc','bs-reload']);
  // gulp.watch(type.scss, ['postcss:pc','bs-reload']);
  // gulp.watch(type.js, ['lint-js:pc', 'bs-reload']);
  // gulp.watch(type.img, ['img:pc']);
//  gulp.watch(type.css, ['lint-css:pc','bs-reload']);
//  gulp.watch(type.scss, ['lint-scss:pc','bs-reload']);
});

gulp.task("default", function(callback) {
    return sequence(
      ['server'],
        callback
    );
});

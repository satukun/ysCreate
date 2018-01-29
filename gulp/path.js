var project = require('../project.json');

exports.devPath = function () {
  for (var name in project) {
    if (project[name] === true) {
      work = name;
    }
  }
  var type = {
    "img": "app/" + work + "/**/*.+(png|gif|jpg|jpeg|svg)",
    "html": "app/" + work + "/**/*.html",
    "pug": [
      "app/" + work + "/resource/pug/**/*.pug",
      "!app/" + work + "/resource/pug/**/_*.pug"
    ],
    "pugAll": "app/" + work + "/resource/pug/**/*.pug",
    "ejs": [
      "app/" + work + "/resource/ejs/**/*.+(ejs)",
      "!app/" + work + "/resource/ejs/**/_*.+(ejs)"
    ],
    "ejsAll": "app/" + work + "/resource/ejs/**/*.+(ejs)",
    "css": [
      "app/" + work + "/resource/css/**/*.css",
      "!app/" + work + "/resource/css/**/_*.css"
    ],
    "cssAll": "app/" + work + "/resource/**/*.css",
    "scss": "app/" + work + "/**/*.+(scss)",
    "js": "app/" + work + "/**/*.+(js)",
    "dev": "app/" + work + "/resource/",
    "dist": "app/" + work + "/dist/",
    "project": work
  };
  return type;
};


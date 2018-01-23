var project = require('../project.json');

exports.devPath = function() {
  for (var name in project) {
    if (project[name] === true) {
      work = name;
    }
  }
  var type = {
    "img":"app/"+work+"/**/*.+(png|gif|jpg|jpeg|svg)",
    "html":"app/"+work+"/**/*.html",
    "pug": ["app/"+work+"/resource/pug/**/*.pug","!app/"+work+"/resource/pug/**/_*.pug"],
    "ejs": ["app/"+work+"/**/*.+(ejs)","!app/"+work+"/**/_*.+(ejs)"],
    "css": ["app/"+work+"/**/*.+(css)","!app/"+work+"/**/_*.+(css)"],
    "scss": "app/"+work+"/**/*.+(scss)",
    "js": "app/"+work+"/**/*.+(js)",
    "dev": "app/"+work+"/resource/",
    "dist": "app/"+work+"/dist/",
    "project": work
  };
  return type;
};

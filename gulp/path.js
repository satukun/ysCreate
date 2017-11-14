var project = require('../project.json');

exports.devPath = function() {
  for (var name in project) {
    if (project[name] === true) {
      work = name;
    }
  }
  var type = {
    "img":"app/"+work+"/**/*.+(png|gif|jpg|jpeg|svg|woff)",
    "html":"app/"+work+"/**/*.html",
    "ejs": ["app/" + work + "/**/*.+(ejs)","!app / "+work+"/**/_*.+(ejs)"],
    "css":"app/"+work+"/**/*.+(css|scss)",
    "scss": "app/" + work + "/**/*.+(scss)",
    "js": "app/"+work+"/**/*.+(js)",
    "dev": "app/" + work + "/resource/",
    "project":work
  };
  return type;
};

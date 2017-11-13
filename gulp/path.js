var project = require('../project.json');

exports.devPath = function() {

  for (var name in project) {
    if (project[name] === true) {
      work = name;
    }
  }

  var develop = {
    "data": "app/" + work + "/"
  }

  var type = {
    "img":"app/" + work + "/**/*.+(png|gif|jpg|jpeg|svg|woff)",
    "html":"app/" + work + "/**/*.html",
    "ejs":"app/" + work + "/**/*.+(ejs)",
    "css":"app/" + work + "/**/*.+(css|scss)",
    "js":"app/" + work + "/**/*.+(js)"
  };

  return {
    "type":type,
    "develop": develop
  };

};

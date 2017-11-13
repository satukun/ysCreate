var project = require('../project.json');

exports.devPath = function() {
  for (var name in project) {
    if (project[name] === true) {
      work = name;
    }
  }
  var type = {
    "img":"**/*.+(png|gif|jpg|jpeg|svg|woff)",
    "html":"**/*.html",
    "ejs": "**/*.+(ejs)",
    "css":"**/*.+(css|scss)",
    "js": "**/*.+(js)"
  };

  // if (project.object.basetemplate){
  //   type = new start(Object.keys(project.object)[0]);
  // }

  // for (let name in project.object.app) {
  //   if (project.object.app[name] === true) {
  //     console.log(Object.keys(project.object.app));

  //     new start(project.object.app[name]);
  //   }
  // }

  return type;
};

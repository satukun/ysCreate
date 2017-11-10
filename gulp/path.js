    var project = require('../project.json');
    exports.func = function() {
        for (var name in project) {
            if (project[name] === true) {
                work = name;
            }
        }
        var dir = {
            "src": "_src",
            "dist": "_dist",
            "deploy": "deploy"
        }
        var develop = {
            "data": '_src/_develop/' + work + '/'
        }
        var path = {
            "html": [dir.src + "/deploy/" + work + "/**/*.html",
                "!" + dir.src + "/deploy/" + work + "/**/*min.html",
                "!" + dir.src + "/deploy/" + work + "/**/styleguide/**/*.html",
                "!" + dir.src + "/deploy/" + work + "/**/assets/**/*.html"
            ],
            "tstemp": dir.src + "/_develop/" + work + "/**/temp/*.html",
            "jsdep": dir.src + "/deploy/" + work + "/**/*.js",
            "imgdep": [dir.src + "/develop/" + work + "/**/*.+(png|gif|jpg|jpeg|svg|woff)", "!" + dir.src + "/develop/" + work + "/**/sprites/*.png"],
            "scss": dir.src + "/_develop/" + work + "/**/*.scss",
            "styleguide": dir.src + "/_develop/" + work + "/styleguide/**/*.scss",
            "ejs": [dir.src + "/_develop/" + work + "/**/*.ejs", "!" + dir.src + "/_develop/" + work + "/ejs/**/_*.ejs"],
            "ejsCommon": dir.src + "/_develop/" + work + "/ejs/**/_*.ejs",
            "css": [dir.src + "/deploy/" + work + "/**/*.css", "!" + dir.src + "/deploy/" + work + "/**/*min.css", "!" + dir.src + "/**/styleguide/**/*.css"],
            "js": dir.src + "/_develop/" + work + "/**/*.js",
            "ts": dir.src + "/_develop/" + work + "/**/*.ts",
            "img": [dir.src + "/_develop/" + work + "/**/*.+(png|gif|jpg|jpeg|svg|woff)", "!" + dir.src + "/_develop/" + work + "/**/sprites/*.png"],
            "sprites": dir.src + "/_develop/" + work + "/**/sprites/*.png"
        }
        return {
            "work": work,
            "dir": dir,
            "develop": develop,
            "path": path
        };
    };
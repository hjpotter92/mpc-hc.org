/**!
 * make.js, script to build the website for MPC-HC
 * Released under the terms of MIT license
 *
 * https://github.com/mpc-hc/website
 *
 * Copyright (C) 2013 MPC-HC Team
 */

"use strict";

require("shelljs/make");
var fs = require("fs");
var rootDir = __dirname + "/";         // absolute path to project's root
var buildDir = rootDir + "build/";
var buildTarget = buildDir + "website/";
var srcDir = rootDir + "source/";

(function () {
    /*jshint -W108*/
    var SPHINXOPTS = '-d' + ' "' + buildDir + 'doctrees/' + '" "' + srcDir + '" "' + buildTarget + '"';
    /*jshint -W108*/

    //
    // make website
    //
    target.website = function () {
        cd(rootDir);
        echo();
        echo("### Building posts...");
        exec("python -u sphinxblog/gen.py");

        echo();
        echo("### Building site...");
        exec("sphinx-build -b dirhtml" + " " + SPHINXOPTS);

        echo();
        echo("### Removing files we don't need...");

        cd(buildTarget);

        var filesToRemoveFromDist = [
            ".buildinfo",
            "_static/*.css",
            "_static/*.gif",
            "_static/*.js",
            "_static/*.png",
            "_static/404.html",
            "_static/favicon.ico",
            "_static/css/*.css",
            "_static/img/cloudvps.png",
            "_static/js/*.js",
            "genindex",
            "objects.inv",
            "search",
            "searchindex.js"
        ];

        rm("-rf", filesToRemoveFromDist);


        echo();

        exec("grunt");


    };


    //
    // make all
    //
    target.all = function () {
        target.website();
    };


    //
    // make server
    //
    target.server = function () {
        echo();
        echo("### Starting webserver...");
        cd(buildTarget);
        exec("grunt connect");
    };


    //
    // make help
    //
    target.help = function () {
        echo("Available targets:");
        echo("  website  builds the website");
        echo("  server   starts the webserver");
        echo("  help     shows this help message");
    };

}());

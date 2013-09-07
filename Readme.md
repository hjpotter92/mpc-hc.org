[![Dependency Status](https://gemnasium.com/mpc-hc/website.png)](https://gemnasium.com/mpc-hc/website)

Getting started
---------------

* Install [node.js](http://nodejs.org/download/)
* Install the node.js dependencies: `npm install`
* On Windows `set LANG=en_EN.UTF-8` otherwise Jekyll **will fail**
* Run `node make` or `node make website` to build the static site
* Run the webserver to test your changes: `node make server`
  (http://localhost:8000/)

You can run `npm run check` or `npm run lint` to run [JSHint](https://github.com/jshint/jshint)
and [csslint](https://github.com/stubbornella/csslint) for our files.

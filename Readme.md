[![Dependency Status](https://gemnasium.com/mpc-hc/website.png)](https://gemnasium.com/mpc-hc/website)

Getting started
---------------

* Install [Python](http://www.python.org/) (tested with 2.7.3)
* Install [Python setuptools](http://pypi.python.org/pypi/setuptools#files)
* Install [Python pip](http://www.pip-installer.org/en/latest/installing.html#alternative-installation-procedures)
* Install Sphinx: `pip install Sphinx`
* Install [node.js](http://nodejs.org/download/)
* Install grunt: `npm install -g grunt-cli`
* Install the node.js dependencies: `npm install`
* On Windows: `SET PATH=C:\Python27;C:\Python27\Scripts;%PATH%`
* Run `node make` or `node make website` to build the static site
* Run the webserver to test your changes: `node make server` or `grunt connect`
  (http://localhost:8000/)

You can run `npm run check` or `npm run lint` to run [csslint](https://github.com/stubbornella/csslint) for our files.

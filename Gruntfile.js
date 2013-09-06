/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    // Task configuration.

    // Copy files that don't need compilation to build/website/
    copy: {
      dist: {
        files: [
          {dest: 'build/website/', src: '404.html', expand: true, cwd: 'source/_static/'},
          {dest: 'build/website/', src: 'robots.txt', expand: true, cwd: 'source/'},
          {dest: 'build/website/', src: 'version.txt', expand: true, cwd: 'source/'},

          //JS
          {dest: 'build/website/', src: '_static/js/jquery-*.min.js', expand: true, cwd: 'source/'},
          {dest: 'build/website/', src: '_static/js/selectivizr-min.js', expand: true, cwd: 'source/'},

          //CSS
          {dest: 'build/website/', src: '_static/css/font-awesome-ie7.min.css', expand: true, cwd: 'source/'},

          //Fonts
          {dest: 'build/website/', src: '_static/font/**', expand: true, cwd: 'source/'},

          //Images
          {dest: 'build/website/', src: '_static/img/**', expand: true, cwd: 'source/'},
          {dest: 'build/website/', src: 'apple-touch-icon*.png', expand: true, cwd: 'source/_static/'},
          {dest: 'build/website/', src: 'favicon.ico', expand: true, cwd: 'source/_static/'}
        ]
      }
    },

    includereplace: {
      dist: {
        options: {
          globals: {
            MPC_HC_VERSION: '1.6.8.7417',
            MPC_HC_SHORT_VERSION: '1.6.8'
          }
        },
        files: [
          {src: '**/index.html', dest: 'build/website/', expand: true, cwd: 'build/website'},
          {src: '*.txt', dest: 'build/website/', expand: true, cwd: 'build/website'},
        ]
      }
    },


    csslint: {
      src: ['source/_static/css/style.css']
    },

    cssmin: {
      minify: {
        options: {
          keepSpecialComments: 0,
          report: 'min'
        },
        files: {
          'build/website/_static/css/pack.css': ['source/_static/css/bootstrap.css',
                                                 'source/_static/css/font-awesome.css',
                                                 'source/_static/css/jquery.fancybox.css',
                                                 'source/_static/css/jquery.fancybox-thumbs.css',
                                                 'source/_static/css/style.css']
        }
      }
    },

    uglify: {
      options: {
        compress: true,
        mangle: true,
        preserveComments: false,
        report: 'min'
      },
      minify: {
        files: {
          'build/website/_static/js/pack.js': ['source/_static/js/plugins.js',
                                               'source/_static/js/bootstrap.js',
                                               'source/_static/js/jquery.mousewheel.js',
                                               'source/_static/js/jquery.fancybox.js',
                                               'source/_static/js/jquery.fancybox-thumbs.js']
        }
      },
      minifyIE: {
        files: {
          'build/website/_static/js/html5shiv-respond.min.js': ['source/_static/js/html5shiv.js',
                                                                'source/_static/js/respond.js']
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 8000,
          base: 'build/website',
          keepalive: true
        }
      }
    },

    clean: {
      dist: 'build/'
    }

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-include-replace');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task.
  grunt.registerTask('default', ['csslint', 'copy', 'includereplace', 'cssmin', 'uglify']);

};

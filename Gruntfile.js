/*jshint node:true, es3:false*/
(function() {
  'use strict';
  module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt); // Load grunt tasks automatically
    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      jshint: {
        all: ['Gruntfile.js', 'src/**/*.js', 'spec/**/*.js']
      },
      watch: {
        options: {
          spawn: false
        },
        //watches all scripts an rerun hinting and the tests immediately
        scripts: {
          files: ['<%= jshint.all %>'],
          tasks: ['jshint', 'karma:server:run']
        }
      },
      bower: {
        tests: {
          rjsConfig: 'spec/test-main.js',
          options: {
            baseUrl: './'
          }
        }
      },
      bowerVerify: {
        test: {
          tasks: ['bower', 'karma:once']
        }
      },
      karma: {
        options: {
          configFile: 'karma.conf.js'
        },
        //for a single run of test
        once: {
          singleRun: true,
        },
        //for use while developing and in combination with watch task
        server: {
          background: true,
        },
      },
      copy: {
        dist: {
          src: 'src/knockout-select2.js',
          dest: 'dist/knockout-select2.js'
        }
      },
      uglify: {
        dist: {
          files: {
            'dist/knockout-select2.min.js': ['dist/knockout-select2.js']
          }
        }
      },
      nugetpack: {
        dist: {
          src: 'package.nuspec',
          dest: 'dist/nuget/'
        }
      }
    });

    //development
    grunt.registerTask('dev', ['jshint', 'karma:server', 'watch:scripts']);

    //testing
    grunt.registerTask('test', ['jshint', 'karma:once']);
    grunt.registerTask('test:full', ['jshint', 'bowerVerify']);
    
    //build
    grunt.registerTask('build', ['copy', 'uglify']);
    
    //release
    grunt.registerTask('pack', ['nugetpack']);
  };
})();

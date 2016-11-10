module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    connect: {
      options: {
        port: '8000',
      },
      server: {
        options: {
          base: './'
        }
      }
    },

    watch: {
      scss: {
        files: ['./assets/stylesheets/**/*.scss'],
        tasks: ['sass']
      },
      livereload: {
        options: {
          livereload: true
        },
        files: [
          './**/*.html',
          './assets/style.css'
        ]
      }
    },

    sass: {
      build: {
        files : [{
          './assets/style.css': './assets/stylesheets/style.scss'
        }],
        options : {
          style : 'expanded'
          // debugInfo: true
        }
      }
    }

  });

  // Default task
  grunt.registerTask('default', ['connect:server', 'watch']);

  // Plugins
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
};

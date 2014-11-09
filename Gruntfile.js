'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.before_test %>',
        '<%= nodeunit.after_test %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    gorun: {
      basic: {
        src: 'test/fixtures/gostop_basic.go'
      }
    },

    gostop: {
      placeholder: {}
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      test: ['test/tmp/*']
    },

    // Unit tests.
    nodeunit: {
      before_test: ['test/before_test.js'],
      after_test: ['test/after_test.js'],
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-internal');
  grunt.loadNpmTasks('git-grunt-gorun');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  // NOTE: We run the task twice to check for file overwrite issues.
  grunt.registerTask('test', ['jshint', 'clean', 'gorun', 'nodeunit:before_test', 'gostop', 'nodeunit:after_test', 'clean']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['test', 'build-contrib']);

};
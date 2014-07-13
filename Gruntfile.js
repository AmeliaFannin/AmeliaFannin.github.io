// the wrapper
module.exports = function(grunt) {
  // do grunt things here
  // Project config

  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.initConfig({
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: '_sass',
          src: ['*.scss', '!_*.scss'],
          dest: 'css',
          ext: '.css'
        }]
      }
    }
  });


  // default tasks
  grunt.registerTask('default', ['sass']);

};




module.exports = function(grunt) {

    grunt.initConfig({
      connect: {
        server: {
          port: 9002,
          base: './'
        }
      }
    });
    
    grunt.loadNpmTasks('grunt-connect');
    grunt.registerTask('default', ['connect:server']);
};
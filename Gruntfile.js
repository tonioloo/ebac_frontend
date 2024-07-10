module.exports = function(grunt) {
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      less: {
          development: {
              options: {
                  compress: true,
                  yuicompress: true,
                  optimization: 2
              },
              files: {
                  "path/to/result.css": "path/to/source.less"
              }
          }
      },
      uglify: {
          options: {
              mangle: false
          },
          my_target: {
              files: {
                  'path/to/result.min.js': ['path/to/source1.js', 'path/to/source2.js'] 
              }
          }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['less', 'uglify']);
};

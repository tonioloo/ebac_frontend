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
                  "dist/css/result.css": "src/less/source.less"
              }
          }
      },
      uglify: {
          options: {
              mangle: false
          },
          my_target: {
              files: {
                  'dist/js/result.min.js': ['src/js/source1.js', 'src/js/source2.js']
              }
          }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['less', 'uglify']);
};

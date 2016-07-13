module.exports=(grunt)=>{
  grunt.initConfig({
      sass:{
        dist:{
          options:{
            style:'expanded'
          },
          files:{
            'css/main.css':'build/styles/main.scss'
          }
        }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default',['sass']);
};

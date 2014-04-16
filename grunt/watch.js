module.exports = {
    livereload: {
        options: {
            livereload: '<%= express.options.livereload %>'
        },
        files: [
            '<%= yeoman.currentDir %>',
            '<%= yeoman.demo %>/**/*.html',
            '<%= yeoman.demo %>/**/*.js',
            '<%= yeoman.styles %>/{,*/}*.css',
            '<%= yeoman.src %>/{,*/}*.css'
        ],
        tasks: ['build']
    }
};

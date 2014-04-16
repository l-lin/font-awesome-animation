module.exports = {
    options: {
        banner: '<%= yeoman.banner %>'
    },
    dist: {
        files: {
            '<%= yeoman.dist %>/font-awesome-animation.min.css': [
                '<%= yeoman.dist %>/*.css'
            ]
        }
    }
};

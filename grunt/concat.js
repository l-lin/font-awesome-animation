module.exports = {
    options: {
        stripBanners: true,
        banner: '<%= yeoman.banner %>'
    },
    // Copy the source files with the banner in dist folder
    bannerCSS: {
        src: ['<%= yeoman.dist %>/font-awesome-animation.css'],
        dest: '<%= yeoman.dist %>/font-awesome-animation.css'
    }
};

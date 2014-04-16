'use strict';

module.exports = function(grunt) {
    var path = require('path');
    
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);
    
    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'grunt'),
        init: true, //auto grunt.initConfig
        config: {
            pkg: grunt.file.readJSON('package.json'),
            yeoman: {
                // configurable paths
                src: 'src',
                dist: 'dist',
                build: '.tmp',
                demo: 'demo',
                styles: 'styles',
                currentDir: path.resolve(__dirname),
                banner: '/*!\n' +
                    ' * <%= pkg.name %> - v<%= pkg.version %>\n' +
                    ' * https://github.com/<%= pkg.author %>/<%= pkg.name %>\n' +
                    ' * License: MIT\n' +
                    ' */\n'
            }
        }
    });

    /** ---------------------------------------------------- */
    /** ------------- GRUNT TASKS REGISTRATION ------------- */
    /** ---------------------------------------------------- */

    grunt.registerTask('serve', [
        'clean:server',
        'express:livereload',
        'watch:livereload'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'myth',
        'cssmin',
        'concat:bannerCSS'
    ]);

    grunt.registerTask('test', [
        'build'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);
};

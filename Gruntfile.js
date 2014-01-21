// Generated on 2013-11-23 using generator-angular 0.6.0-rc.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        yeoman: {
            // configurable paths
            src: 'src',
            dist: 'dist',
            build: '.tmp',
            banner: '/*!\n' +
                ' * <%= pkg.name %> - v<%= pkg.version %>\n' +
                ' * https://github.com/<%= pkg.author %>/<%= pkg.name %>\n' +
                ' */\n'
        },
        /** ------------- CLEAN TMP FOLDERS ------------- */
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '<%= yeoman.build %>',
                        '<%= yeoman.dist %>/*',
                        '!<%= yeoman.dist %>/.git*'
                    ]
                }]
            },
            server: '<%= yeoman.build %>'
        },
        /** ------------- SOURCE CODES MINIMIZATION ------------- */
        concat: {
            options: {
                stripBanners: true,
                banner: '<%= yeoman.banner %>'
            },
            // Copy the source files with the banner in dist folder
            banner: {
                src: ['<%= yeoman.src %>/font-awesome-animation.css'],
                dest: '<%= yeoman.dist %>/font-awesome-animation.css'
            }
        },
        cssmin: {
            options: {
                banner: '<%= yeoman.banner %>'
            },
            dist: {
                files: {
                    '<%= yeoman.dist %>/font-awesome-animation.min.css': [
                        '<%= yeoman.src %>/*.css'
                    ]
                }
            }
        },
        uglify: {
            options: {
                banner: '<%= yeoman.banner %>'
            },
            dist: {
                files: {
                    '<%= yeoman.dist %>/font-awesome-animation.min.js': [
                        '<%= yeoman.build %>/font-awesome-animation.js'
                    ]
                }
            }
        }
    });

    /** ---------------------------------------------------- */
    /** ------------- GRUNT TASKS REGISTRATION ------------- */
    /** ---------------------------------------------------- */

    grunt.registerTask('build', [
        'clean:dist',
        'cssmin',
        'uglify',
        'concat:banner'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);
};

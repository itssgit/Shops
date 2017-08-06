/**
 * Created by kkaoa on 6/8/2017.
 */
module.exports = function (grunt) {
    var data = require('./bundles.json');

    var js_files = data.scripts.files;
    var js_concat_files = data.scripts.concat_file;
    var css_files = data.styles.files;
    var css_concat_files = data.styles.concat_file;

    grunt.initConfig({

        // define source files and their destinations
        clean: {
            build: {
                src: ['build']
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            js: {
                src: js_files,
                dest: 'build/' + js_concat_files
            },
            css: {
                src: css_files,
                dest: 'build/' + css_concat_files
            }
        },
        uglify: {
            files: {
                src: ['build/' + js_concat_files],  // source files mask
                dest: 'build/',    // destination folder
                expand: true,    // allow dynamic building
                flatten: true,   // remove all unnecessary nesting
                ext: '.min.js'   // replace .js to .min.js
            }
        },
        cssmin: {
            css: {
                src: ['build/' + css_concat_files],
                dest: 'build/',
                expand: true,
                flatten: true,
                ext: '.min.css'
            }
        },
        watch: {
            js: {files: [js_files], tasks: ['uglify']},
            css: {css: [css_files], tasks: ['cssmin']}
        }
    });

// load plugins
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-css');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

// register at least this one task
    grunt.registerTask('default', ['clean', 'concat', 'uglify', 'cssmin']);

};
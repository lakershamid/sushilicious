module.exports = function(grunt){

    "use strict";
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        cssc: {
            build: {
                options: {
                    consolidateViaDeclarations: true,
                    consolidateViaSelectors:    true,
                    consolidateMediaQueries:    true
                },
                files: {
                    'build/css/master.css': 'build/css/master.css'
                }
            }
        },

        cssmin: {
            build: {
                src: 'build/css/master.css',
                dest: 'build/css/master.min.css'
            }
        },

        sass: {
            build: {
                files: {
                    'build/css/master.css': 'assets/sass/master.scss'
                }
            }
        },

        watch: {
            options: {
                livereload: true,
            },
            html: {
                files: ['index.html', 'templates/**/*.html'],
                tasks: ['htmlhint'],
            },
            js: {
                files: ['assets/js/**/*.js'],
                tasks: ['uglify'],
            },
            css: {
                files: ['assets/sass/**/*.scss'],
                tasks: ['build'],
            }
        },

        htmlhint: {
            build: {
                options: {
                    'tag-pair': true,
// Force tags to have a closing pair
                    'tagname-lowercase': true,
// Force tags to be lowercase
                    'attr-lowercase': true,
// Force attribute names to be lowercase e.g. <div id="header"> is invalid
                    'attr-value-double-quotes': true,
// Force attributes to have double quotes rather than single
                    'doctype-first': true,
// Force the DOCTYPE declaration to come first in the document
                    'spec-char-escape': true,
// Force special characters to be escaped
                    'id-unique': true,
// Prevent using the same ID multiple times in a document
                    'head-script-disabled': false,
// Prevent script tags being loaded in the  for performance reasons
                    'style-disabled': true
// Prevent style tags. CSS should be loaded through
                },
                src: ['index.html']
            }
        },

        uglify: {
            build: {
                files: {
                    'build/js/master.min.js': ['assets/js/master.js','assets/js/**/*.js']
                }
            }
        },

        serve: {
            options: {
                port: 8100
            }
        }

    });

    grunt.registerTask('default', []);
    grunt.registerTask('build', ['sass', 'cssc', 'cssmin', 'uglify']);

};
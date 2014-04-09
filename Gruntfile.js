﻿module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            options: {
                curly: true,
                eqnull: true,                
                plusplus: true,
                smarttabs: true,
                strict: true,
                unused: true
            },
            files: {
                src: ['Cactus.js',
                      'src/Input/Keyboard/js/Keyboard.js',
                      'src/Plugin/Sprite/js/Sprite.js',
                      'src/Plugin/Text/js/Text.js']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('default', ['jshint']);
};
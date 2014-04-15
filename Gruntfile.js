module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            files: {
                src: [
                    'Cactus.js',
                    'src/Input/Keyboard/js/Keyboard.js',
                    'src/Plugin/Parallax/js/Parallax.js',
                    'src/Plugin/Sprite/js/Sprite.js',
                    'src/Plugin/Text/js/Text.js'
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('default', ['jshint']);
};

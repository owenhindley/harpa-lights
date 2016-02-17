'use strict()';

var config= {
    port: 3000
};

module.exports = function(grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concurrent: {
            dev: {
                tasks: ['watch', 'http-server:dev'],
                options: {
                    logConcurrentOutput: true,
                    limit: 5
                }
            }
        },

        'http-server': {

            'dev': {

                // the server root directory
                root: "./",

                // the server port
                port: 8080,

                logFn: function(req, res, error) { },

                // the host ip address
                // If specified to, for example, "127.0.0.1" the server will
                // only be available on that ip.
                // Specify "0.0.0.0" to be available everywhere
                host: "0.0.0.0",

                cache: 0,
                showDir : true,
                autoIndex: true,

                // server default file extension
                ext: "html",

                // run in parallel with other tasks
                runInBackground: false

            }
        },

        watch: {
            livereload: {
                files: [
                'js/**/*.js',
                'css/*.css',
                'index.html'
                ],
                options: {
                    livereload: true
                }
            }
        }
    });


    grunt.registerTask('default', function(target){
        grunt.task.run(['concurrent:dev']);
    });
};

'use strict()';

var config= {
	port: 3000
};

module.exports = function(grunt) {

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	// Time how long tasks take. Can help when optimizing build times
	// require('time-grunt')(grunt);

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		nwjs: {
			options: {
				version : "0.12.3",
				platforms: ['osx'],
				buildDir: './App/'
			},
			src: ['./src/**/*']
		},
		watch: {
			all : {
				files : [
					'./src/**/*'
				],
				tasks : ['nwjs']
			},
			livereload: {
				files: [
					'./src/**/*'
				],
				options: {
					livereload: true
				}
			}
		}

		


	});

	grunt.registerTask('default', function(target){
		grunt.task.run(['nwjs', 'watch'])
	});

};

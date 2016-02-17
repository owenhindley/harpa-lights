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
		nodewebkit: {
			options: {
				version : "0.12.2",
				platforms: ['osx', 'win'],
				buildDir: './'
			},
			src: ['../visualiser-creator/**/*']
		},
		watch: {
			all : {
				files : [
					"../visualiser-creator/**/*"
				],
				tasks : ['nodewebkit']
			},
			livereload: {
				files: [
					'src/**/*'
				],
				options: {
					livereload: true
				}
			}
		}

		


	});

	grunt.registerTask('default', function(target){
		grunt.task.run(['nodewebkit', 'watch'])
	});

};

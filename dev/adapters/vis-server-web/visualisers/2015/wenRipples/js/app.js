// window.params = {
// 	gap:.01
// }

var requirejs = require("requirejs");

requirejs(["glMatrix", "Scheduler", "SimpleImageLoader", "alfrid/GLTool", "SceneCube"], function (glMatrix, scheduler, SimpleImageLoader, GLTool, SceneCube) {

	var check = function() {
		this.count = 0;
		this.setup();

	};

	var p = check.prototype;

	p.setup = function() {
		var loader = new SimpleImageLoader();
		loader.load([
			"assets/gold.jpg"
		], this, this._onImageLoaded)

	};

	p._onImageLoaded = function(img) {
		console.log("image loaded", img);
		window.images = img;

		// this.canvas = document.createElement('canvas');
		// document.body.appendChild(this.canvas);
		this.canvas = new Canvas();


		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;

		 GLTool.init(this.canvas);

		this.scene = new SceneCube();

		// scheduler.addEF(this, this.loop, []);

	};


	p.loop = function() {
		console.log("** CALLED SCENE LOOP **");
		this.scene.loop();
	};

	var checkTest = new check();

	return checkTest;
});
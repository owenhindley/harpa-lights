var Canvas = require("canvas");

var ProcessingAdapter = function(width, height) {

	this.canvas = new Canvas();
	this.canvas.width = width;
	this.canvas.height = height;
	this.ctx = this.canvas.getContext("2d");
	this.imageData = this.ctx.getImageData(0,0,width, height);
	

}


var p = ProcessingAdapter.prototype;


p.getCanvas = function() { return this.canvas; };

p.drawFromString = function(base64String){

	var buf = new Buffer(base64String, 'base64'); // Ta-da
	// debugger;

	

};

module.exports = ProcessingAdapter;
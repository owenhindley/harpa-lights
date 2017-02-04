var Canvas = require("canvas");
var Image = Canvas.Image;


var TransitionAnimation = function() {



};

var p = TransitionAnimation.prototype;

p.init = function(width, height) {

	this.canvas = new Canvas();
	this.canvas.width = width;
	this.canvas.height = height;
	this.ctx = this.canvas.getContext("2d");

};
	
p.render = function() {

	var randR, randG, randB;
	for (var x= 0; x < this.canvas.width; x++){
		for (var y=0; y < this.canvas.height; y++){
			randR = Math.floor(Math.random() * 255);
			randG = Math.floor(Math.random() * 255);
			randB = Math.floor(Math.random() * 255);
			this.ctx.fillStyle = "rgb(" + randR + ", " + randG + ", " + randB + ")";
			this.ctx.fillRect(x,y,1,1);
		}
	}

};



module.exports = TransitionAnimation;

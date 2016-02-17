var zmq = require("zmq");
var Canvas = require("canvas");
var Image = Canvas.Image;
var HarpaVisualiserBase = require("../common/HarpaVisualiserBase.js");
var AppConfig = require("../../../common/Config.js");

/*

	Example simple Visualiser class

*/

var HarpaSyphonVisualiser = function() {

	// stores the current volume
	this.currentVolume = 0;

	// stores the current beat envelope / value
	this.currentBeatValue = 0;

	/*
		Communication with Processing (sends raw byte data)
	*/


};

var p = HarpaSyphonVisualiser.prototype = new HarpaVisualiserBase();
 var s = HarpaVisualiserBase.prototype;

p.init = function(frontWidth, frontHeight, sideWidth, sideHeight, aOptions) {
	s.init.call(this, frontWidth, frontHeight, sideWidth, sideHeight, aOptions);


	this.processing_from = zmq.socket("pull");
	this.processing_image = new Image;

	this.processing_from.connect("tcp://127.0.0.1:" + AppConfig.PORT_PROCESSING_IMG_SEND);
	this.processing_from.on('message', function(msg){

		if (msg.length){
			this.processing_image.src = msg;
			try {

				this.combCtx.drawImage(this.processing_image, 0,0,this.processing_image.width, this.processing_image.height);
				this.drawToFaces(this.combinedCanvas);


			} catch(e){
				console.log(e);
			}
		}
	}.bind(this));


};

p.render = function() {


};

p.signal = function(channel, value) {

	// store volume values from channel 1
	if (channel == 1){
		this.currentBeatValue = value;
	}

	// store beat values from channel 2
	if (channel == 2){
		this.currentVolume = value;
	}
};

module.exports = HarpaSyphonVisualiser;
var zmq = require("zmq");
var Canvas = require("canvas");
var Image = Canvas.Image;
var HarpaSyphonVisualiser = require("./HarpaSyphonVisualiser.js");
var AppConfig = require("../../../common/Config.js");
var osc = require("osc-min");
var dgram = require("dgram");


var RESOLUME_OSC_SEND_PORT = 8886;
/*

	Visualiser for working with Resolume

*/

var HarpaResolumeVisualiser = function() {

	// stores the current volume
	this.currentVolume = 0;

	// stores the current beat envelope / value
	this.currentBeatValue = 0;


};

var p = HarpaResolumeVisualiser.prototype = new HarpaSyphonVisualiser();
var s = HarpaSyphonVisualiser.prototype;

p.init = function(frontWidth, frontHeight, sideWidth, sideHeight, aOptions) {
	s.init.call(this, frontWidth, frontHeight, sideWidth, sideHeight, aOptions);

	if (aOptions && aOptions.resolumeTrack){
		this.resolume_control_sock = dgram.createSocket("udp4", function() {});
		this.sendControlMessage("/track" + aOptions.resolumeTrack + "/connect", 1);
	}

};

p.signal = function(channel, value) {

	// store volume values from channel 1
	if (channel == 1){
		this.currentBeatValue = value;
		this.sendControlMessage("/playbackcontroller/tap", [1]);
	}

	// store beat values from channel 2
	if (channel == 2){
		this.currentVolume = value;
	}
};

p.sendControlMessage = function(aAddress, aArgs) {

	// console.log("sending OSC to Resolume : " + aAddress + " " + aArgs);

	var buf;
	buf = osc.toBuffer({
		address : aAddress,
		args : aArgs
	});

	return this.resolume_control_sock.send(buf, 0, buf.length, RESOLUME_OSC_SEND_PORT, "localhost");

};

p.cleanup = function() {

	if (this.resolume_control_sock){
		this.resolume_control_sock.close();
	}
	

};

module.exports = HarpaResolumeVisualiser;
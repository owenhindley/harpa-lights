/*
	
	External process for running a particular visualiser

*/


var AppConfig = require("../common/Config.js");
var VisualiserPostProcessing = require("./js/VisualiserPostProcessing.js");
var zmq = require("zmq");
var NanoTimer = require("NanoTimer");

var visualiser_path = process.argv[2];
console.log("path : ", visualiser_path);

var VisualiserClass = require(visualiser_path);

var visualiser = new VisualiserClass();
var socket_transmit = zmq.socket("push");
var socket_audio_data_in = zmq.socket("sub");

var postProcessing = new VisualiserPostProcessing();

var socket_address = null;

var reScaleVolume = false;
var swopChannels = false;
var beatDecay = false;

/*
	Commands from host process
*/

process.on("message", function(message) {

	// console.log(message);

	switch(message.cmd){

		case "init":



			if (message.options){
				reScaleVolume = message.options.reScaleVolume || false;
				swopChannels = message.options.swopChannels || false;
				beatDecay = message.options.beatDecay || false;
			} else {
				message.options = {};
			}
			

			visualiser.init(message.front.width, message.front.height, message.side.width, message.side.height, message.options);
			postProcessing.init(message.front.width, message.front.height, message.side.width, message.side.height, message.options);

			setupAudio();

		break;

		case "connect":
			socket_address = message.address;
			socket_transmit.bindSync(socket_address);

			postProcessing.fadeIn();
			
		break;

		case "fadeOut":
			postProcessing.fadeOut();
		break;

		case "disconnect":
			socket_transmit.disconnect(socket_address);

		break;

		case "render":
			visualiser.render();
			if (socket_transmit){
				postProcessing.processCanvases(visualiser.faces.front, visualiser.faces.side);
				socket_transmit.send(postProcessing.getBuffer());
			}

		break;

	}

});


var setupAudio = function() {


	/*
		Audio data
	*/

	// this is silly, need to fix this!
	var beatChannel = (swopChannels) ? 2 : 1;
	var volumeChannel = (swopChannels) ? 1 : 2;

	var currentBeatValue = 0;

	if (beatDecay){

		var updateBeatValue = function() {
			currentBeatValue *= 0.9;
			if (visualiser){
				visualiser.signal(beatChannel, currentBeatValue);
			}
		};


		setInterval(updateBeatValue.bind(this), 10);
	}

	var currentVolumeValue = 0;

	if (reScaleVolume){
		var updateVolumeValue = function() {
			if (visualiser){
				// console.log("singalling : " + volumeChannel + ", " + currentVolumeValue * 20000);
				visualiser.signal(volumeChannel, currentVolumeValue * 20000);
			}
		};
		setInterval(updateVolumeValue.bind(this), 20);
	}


	socket_audio_data_in.connect("tcp://127.0.0.1:" + AppConfig.PORT_AUDIO_DATA_PUB);

	socket_audio_data_in.subscribe("tempoBang");
	socket_audio_data_in.subscribe("rmsLevel");
	socket_audio_data_in.subscribe("fft");
	socket_audio_data_in.subscribe("loudnessChange");

	socket_audio_data_in.on("message", function(subject, message) {

		if (visualiser){

			var channel = subject.toString();
			switch(channel){

				case "tempoBang":

					if (beatDecay){
						currentBeatValue = 1;
					} else {
						visualiser.signal(beatChannel, 1);
					}
					
				break;

				case "rmsLevel":
					var volumeLevel = parseFloat(message.toString());
					if (reScaleVolume){
						currentVolumeValue = volumeLevel;
					} else {
						visualiser.signal(volumeChannel, volumeLevel);
					}
				break;

				case "fft":
					visualiser.signal(3, message.toString());
				break;

			}

		}
		

	});


}



/*
	DEBUGGING
*/

if (process.argv.length > 3){
	
	if (process.argv[3].indexOf("debug") != -1){

		var dummyRenderTimer = new NanoTimer();

		visualiser.init(36,9,39,11);
		postProcessing.init(36,9,39,11);
		postProcessing.fadeIn();

		dummyRenderTimer.setInterval(visualiser.render, "", "33m");

				


	}


}


// keep this process alive
process.stdin.resume();
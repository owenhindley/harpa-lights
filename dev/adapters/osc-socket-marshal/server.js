var osc = require('node-osc');
var fs = require("fs");

var jointData = {};

var jointDataHistory = [];
var isRecording = false;
var lastRecordingTime = Date.now();

var isPlayingBack = false;
var playbackData = [];
var playbackIndex = 0;

var oscServer = new osc.Server(12345, '0.0.0.0');
oscServer.on("message", function (msg, rinfo) {
	try {
		if (msg[0].indexOf("/joints/") != -1){
			var address = msg[0].split("/joints/")[1].replace("/", "");
			var position = msg.splice(1, 3);
			jointData[address] = position;
			
			if (address.indexOf("Head") !== -1){
				if (isRecording){

					if (jointDataHistory.length == 0){
						lastRecordingTime = Date.now();
					}

					jointDataHistory.push({
						time : ((Date.now() - lastRecordingTime) / 1000).toPrecision(3),
						data : JSON.parse(JSON.stringify(jointData)) });
				}
			}
			// console.log("joint : " + address + " = " + position);
		}
		
	} catch(e){

	}
	
});





var io = require('socket.io').listen(8082);


io.sockets.on('connection', function (socket) {

	console.log("* Socket connceted *");


	socket.on("getJointData", function(data){
		socket.emit("jointData", jointData);
	});

	socket.on("startRecording", function(data){
		console.log("starting recording");
		jointDataHistory = [];
		isRecording = true;
	});

	socket.on("endRecording", function(data){
		isRecording = false;
		console.log("ending recording");
		fs.writeFile( data.filename + "_" + Date.now() + ".json", JSON.stringify( jointDataHistory ), "utf8", function() {
			console.log("recorded successfully");
			jointDataHistory = [];
		});
	});



});
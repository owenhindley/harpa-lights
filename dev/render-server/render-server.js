var AppConfig = require("../common/Config.js");
var HarpaGameView = require('./views/HarpaGameViewPong.js');

var HarpaScoreView = require('./views/HarpaScoreViewPong.js');
var winston = require('winston');
var io = require('socket.io-client');
var Utils = require('../common/Utils.js').Utils;
var Game = require("../common/GamePong.js").Game;
var Scheduler = require("./scheduler/Scheduler.js");
var http = require('http');
var NanoTimer = require('nanotimer');
var fs = require("fs");
var zmq = require("zmq");
var Canvas = require("canvas");
var Image = Canvas.Image;

var front_patch = require('./patchdata/front-main-patch-3-extended.js');
var side_patch = require('./patchdata/side-patch-1.js');



var INTERFACE_1_IP = "2.0.0.5";

var INTERFACE_2_IP = "2.0.0.6";

// Side facade  (HE: not being used)
var INTERFACE_3_IP = "2.0.0.3";


var SCREENSAVER_SERVER_IP = "tcp://127.0.0.1";

// change between local & remote game servers
//var GAME_SERVER_IP = "http://127.0.0.1";
var GAME_SERVER_IP = "http://" + AppConfig.ips.game_server.url;
//
var active = true;


console.log("**************************************************");
console.log("*                                                *");
console.log("*                  HARPA PONG!                   *");
console.log("*                                                *");
console.log("*                 RENDER SERVER                  *");
console.log("*                                                *");
console.log("*  .-.     .-.     .-.     .-.     .-.     .-.   *");
console.log("*.'   `._.'   `._.'   `._.'   `._.'   `._.'   `._*");
console.log("*                                                *");
console.log("**************************************************");
console.log("*                                                *");
console.log("*               2014 Owen Hindley                *");
console.log("*               github.com/owenhindley           *");
console.log("*                                                *");
console.log("**************************************************");
console.log("");
console.log('Starting...');

winston.add(winston.transports.File, { filename: 'render.log', handleExceptions : false });
winston.info("started renderer");

var scheduler = new Scheduler();

var harpaFaces = {
	"front" : [38,13],
	"side" : [39,9]
};

var gameView = new HarpaGameView();
var gameView2 = new HarpaGameView();

// gameView.init(INTERFACE_1_IP, front_patch.leftFront, front_patch.leftCols, front_patch.leftRows);

// gameView2.init(INTERFACE_3_IP, front_patch.rightFront, front_patch.rightCols, front_patch.rightRows);

gameView.init(INTERFACE_1_IP, front_patch, harpaFaces.front[0], harpaFaces.front[1]);

gameView2.init(INTERFACE_3_IP, front_patch, harpaFaces.front[0], harpaFaces.front[1]);

var scoreView = new HarpaScoreView();
scoreView.init(INTERFACE_2_IP, side_patch, harpaFaces.side[0], harpaFaces.side[1]);

var game = Game.init();

var renderTimer = new NanoTimer();
renderTimer.setInterval(render.bind(this), '', '33m');


winston.info("connecting to game server at " + GAME_SERVER_IP + ":" + AppConfig.ips.game_server.port);


// TODO : replace this with Zero MQ
var gameSocket = io.connect(GAME_SERVER_IP + ':' + AppConfig.ips.game_server.port, {reconnect: true});
var gameMode = "wait";
var waitTime = 0;

gameSocket.on('connect', function(){

	winston.info("conected to game server!");

	// handshake with server
	gameSocket.on('identify', function() {
		winston.info("asked to identify by server");

		gameSocket.emit('remoterenderer', { name : "Harpa Renderer"});
	});

	// game update
	gameSocket.on('render', onGameUpdate);

});

function onGameUpdate(data){

	// deserialise game state into one currently in memory
	gameMode = data.mode;
	game.setFromSerialised(data.data);

	if (gameMode == "wait"){
		waitTime++;

		// if we've been waiting for a long time, override the gameMode to show the screensaver
		if (waitTime > 1000){
			gameMode = "screensaver";
		}
	} else {
		screensaverMode = false;
		waitTime = 0;
	}


}

/*
	Main render loop
*/

function render() {

	if (active){

		// if we're waiting, or in screensaver mode, keep the screensaver server rendering
		if (gameMode == "wait" || gameMode == "screensaver" || scheduler.mode == Scheduler.MODE_SCREENSAVER){
			screensaverMode = true;
			saverSock_to.send("render");
		}

		if (scheduler.mode == Scheduler.MODE_GAME){
			gameView.render(game, gameMode);
			scoreView.render(game, gameMode);
		} else if (scheduler.mode == Scheduler.MODE_SCREENSAVER || scheduler.mode == Scheduler.MODE_EXTERNAL) {
			
			gameView.render(game, "screensaver");
			gameView2.render(game, "screensaver");

			scoreView.render(game, "screensaver");

		} else {

			var mode = (scheduler.mode == Scheduler.MODE_SHIMMER) ? "sleep" : "blackout";
			gameView.render(game, mode);
			gameView2.render(game, mode);
			scoreView.render(game, mode);
		}
	}
};

/*
	Communication with screensaver server (in a separate process or machine)
*/

var saverSock_from = zmq.socket("pull");
var saverSock_to = zmq.socket("push");
var screensaver_image = new Image;

saverSock_from.connect(SCREENSAVER_SERVER_IP + ":" + AppConfig.PORT_SCREENSAVER_IMG_SEND);
saverSock_to.bindSync(SCREENSAVER_SERVER_IP + ":" + AppConfig.PORT_SCREENSAVER_CMD);

saverSock_from.on('message', function(msg){
	
	if (msg.length){
			screensaver_image.src = msg;
		try {
			// draw front face
			gameView.screensaverCtx.drawImage(screensaver_image, harpaFaces.side[0]+1,0, harpaFaces.front[0], harpaFaces.front[1], 0,0, harpaFaces.front[0], harpaFaces.front[1]);
			// draw side face
			scoreView.screensaverCtx.drawImage(screensaver_image, 0,0,harpaFaces.side[0], harpaFaces.side[1], 0,0,harpaFaces.side[0], harpaFaces.side[1]);

		} catch(e){
			console.log(e);
		}
	}
	// console.log(msg.length);
});

/*
	Communication with Processing (sends raw byte data)
*/

var processing_from = zmq.socket("pull");
var processing_image = new Image;



processing_from.connect(SCREENSAVER_SERVER_IP + ":" + AppConfig.PORT_EXTERNAL_IMG_SEND);
processing_from.on('message', function(msg){

	if (msg.length && scheduler.mode == Scheduler.MODE_EXTERNAL){
		processing_image.src = msg;
		try {
			// NOTE - *** JUST DOES FRONT FACADE ***
			// ** FOR LIGHT ORGAN **

			// ** THIS NOW DOES FRONT FACADE SPLIT ON TWO BOXES; YES - HALLDÓR WAS HERE 17. AUGUST 2016 **

			// gameView2.screensaverCtx.drawImage(processing_image, 0,0,processing_image.width*front_patch.leftPercentage, processing_image.height,
			// 	0,0, front_patch.leftCols, front_patch.leftRows);
			// gameView.screensaverCtx.drawImage(processing_image, processing_image.width*front_patch.leftPercentage, 0, processing_image.width, processing_image.height,
			// 	0,0, front_patch.rightCols, front_patch.rightRows);

			gameView.screensaverCtx.drawImage(processing_image, harpaFaces.side[0]+1,0, harpaFaces.front[0], harpaFaces.front[1], 0,0, harpaFaces.front[0], harpaFaces.front[1]);

			gameView2.screensaverCtx.drawImage(processing_image, harpaFaces.side[0]+1,0, harpaFaces.front[0], harpaFaces.front[1], 0,0, harpaFaces.front[0], harpaFaces.front[1]);

			//scoreView.screensaverCtx.drawImage(processing_image, 0,0,harpaFaces.side[0], harpaFaces.side[1], 0,0,harpaFaces.side[0], harpaFaces.side[1]);

			//gameView2.screensaverCtx.drawImage(processing_image, harpaFaces.side[0]+1,0, harpaFaces.front[0], harpaFaces.front[1], 0,0, harpaFaces.front[0], harpaFaces.front[1]);
			//gameView.screensaverCtx.drawImage(processing_image, harpaFaces.side[0]+1,0, harpaFaces.front[0], harpaFaces.front[1], 0,0, harpaFaces.front[0], harpaFaces.front[1]);

			// draw front face
			//gameView.screensaverCtx.drawImage(processing_image, harpaFaces.side[0]+1,0, harpaFaces.front[0], harpaFaces.front[1], 0,0, harpaFaces.front[0], harpaFaces.front[1]);
			// draw side face
			//scoreView.screensaverCtx.drawImage(processing_image, 0,0,harpaFaces.side[0], harpaFaces.side[1], 0,0,harpaFaces.side[0], harpaFaces.side[1]);
		} catch(e){
			console.log(e);
		}
	}
});



/* 
	Global scheduler, manages overall state of lights
	game, blackout, screensaver etc
*/


function updateScheduler() {
	scheduler.update();
}
setInterval(updateScheduler.bind(this), 60 * 1000);
updateScheduler();


// DEBUGGING
//


var server = http.createServer(function(request, response){

	var queryComponents = Utils.parseQueryString(request.url);

	var method = null;
	var responseText = "";

	if (queryComponents["method"]){

		method = queryComponents["method"];
		responseText = "called method : " + method;

		switch(method){

			case "getCanvas":

				responseText = fs.readFileSync("./html/showCanvas.html", "utf8");

			break;

			case "getGameCanvasSource":
				responseText = gameView.canvas.toDataURL();
			break;

			case "getGameCanvasSourceBoth":
				var obj = {
					"one" : gameView.canvas.toDataURL(),
					"two" : gameView2.canvas.toDataURL()
				}
				responseText = JSON.stringify(obj);
			break;

			case "getGameCanvasSource2":
				responseText = gameView2.canvas.toDataURL();
			break;

			case "getScoreCanvasSource":
				responseText = scoreView.canvas.toDataURL();
			break;

			case "stop":
				active = false;
			break;

			case "start":
				active = true;
			break;

			case "blackout":
				gameView.blackout();
				gameView2.blackout();
				scoreView.blackout();
				active = false;
			break;

			case "blind":
				gameView.blind();
				scoreView.blind();
				active = false;
			break;

			case "mode_game":
				scheduler.mode = Scheduler.MODE_GAME;
			break;

			case "mode_shimmer":
				scheduler.mode = Scheduler.MODE_SHIMMER;
			break;

			case "mode_screensaver":
				scheduler.mode = Scheduler.MODE_SCREENSAVER;
			break;

			case "mode_external":
				scheduler.mode = Scheduler.MODE_EXTERNAL;
			break;

		}


	}


	response.writeHead(200, {
		'Content-Type': 'text/html',
		'Access-Control-Allow-Origin' : '*'
	});

	response.end(responseText);


});

server.listen(8088);

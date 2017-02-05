var osc = require("osc-min");
var dgram = require("dgram");
var socketio = require("socket.io");
var http = require("http");

var EventEmitter = require("events").EventEmitter;


function OSCSocketRelay() {

	this.osc_ports = [];
	this.server = null;
	this.io = null;
	this.clients = [];

}

var p = OSCSocketRelay.prototype = new EventEmitter();

p.init = function(aSocketPort){

	this.server = http.createServer(function(req, res){
		res.writeHead(200, {
			'Content-Type': 'text/html',
			'Access-Control-Allow-Origin' : '*'
		});
		res.end("io only");
	});

	this.io = socketio(this.server);
	this.server.listen(aSocketPort);

	this.io.on("connection", function(socket){

		console.log("client connected");
		this.clients.push(socket);

		socket.on("disconnect", function(){
			var index = this.clients.indexOf(socket);
			console.log("client at index " + index + " disconnected");
			if (index > -1){
				this.clients.splice(index, 1);
			}
		}.bind(this));

	}.bind(this));
};


p.addOscPort = function(aOscPort) {

	var port_data = {
		port : aOscPort,
		sock : null
	};

	console.log("*** OSCSocketRelay listening on osc_port " + aOscPort + " ***");

	// Incoming OSC data osc_port

	port_data.sock = dgram.createSocket("udp4", function(msg, rinfo){

		try {

			var dataObj = osc.fromBuffer(msg);
			if (dataObj){
				this.sendToSockets(dataObj.address, dataObj.args);
			}

		} catch(_error) {
			error = _error;
			console.log(error);
			console.log("Invalid OSC packet");
		}


	}.bind(this));

	port_data.sock.bind(port_data.port);

	this.osc_ports.push(port_data);

};

p.sendToSockets = function(address, data){
	try {
		// console.log(address, data);
		this.io.emit(address, data);
	} catch(e){
		console.log(e);
	}
	
};

module.exports = OSCSocketRelay;


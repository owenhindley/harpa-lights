var osc = require("osc-min");
var dgram = require("dgram");
var http = require("http");
var ioClient = require("socket.io-client");
var udp = dgram.createSocket("udp4");

var EventEmitter = require("events").EventEmitter;


function SocketOSCRelay() {

	this.sock = null;

	this.osc_port = null;
	this.bindings = [];

}

var p = SocketOSCRelay.prototype = new EventEmitter();

p.init = function(aServerIP, aServerPort, aOscPort){
	console.log("*** SocketOSCRelay connecting to " + aServerIP + ":" + aServerPort + " ***");
	this.osc_port = aOscPort;

	this.sock = ioClient("http://" + aServerIP + ":" + aServerPort);
	this.sock.on("connect", function(){
		console.log("connected!");
	});
	this.sock.on("data", function(data){
		console.log(data);
		for (var i=0; i < this.bindings.length; i++){
			if (this.bindings[i].buttonId == data.macaddress){
				var transform = this.bindings[i].transform;
				if (!transform){
					transform = function(d) { return d.value; };
				}
				this.sendOSCMessage(this.bindings[i].osc, transform(data));
			}
		}
	}.bind(this));

};

// buttonId = GUID of button that sent the signal
// oscAddress = /the/osc/address that the signal will be sent to
// dataTransfor = a function that takes the {data} object and returns a value
p.addBinding = function(buttonId, oscAddress, dataTransform) {
	this.bindings.push(
		{
			buttonId : buttonId,
			osc : oscAddress,
			transform : dataTransform 
		}
	);
	console.log(this.bindings);
};

p.sendOSCMessage = function(tAddress, tData){
	console.log("sending " + tData + " to " + tAddress + " on port " + this.osc_port);
	var buf;
	buf = osc.toBuffer({
		address: tAddress,
		args: [ tData ]
	});
	return udp.send(buf, 0, buf.length, this.osc_port, "localhost");
};


// p.addOscPort = function(aOscPort) {

// 	var port_data = {
// 		port : aOscPort,
// 		sock : null
// 	};

// 	console.log("*** SocketOSCRelay listening on osc_port " + aOscPort + " ***");

// 	// Incoming OSC data osc_port

// 	port_data.sock = dgram.createSocket("udp4", function(msg, rinfo){

// 		try {

// 			var dataObj = osc.fromBuffer(msg);
// 			if (dataObj){
// 				this.sendToSockets(dataObj.address, dataObj.args);
// 			}

// 		} catch(_error) {
// 			error = _error;
// 			console.log(error);
// 			console.log("Invalid OSC packet");
// 		}


// 	}.bind(this));

// 	port_data.sock.bind(port_data.port);

// 	this.osc_ports.push(port_data);

// };

// p.sendToSockets = function(address, data){
// 	try {
// 		// console.log(address, data);
// 		this.io.emit(address, data);
// 	} catch(e){
// 		console.log(e);
// 	}
	
// };

module.exports = SocketOSCRelay;


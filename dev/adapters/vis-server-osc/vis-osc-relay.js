var OSCSocketRelay = require("./OSCSocketRelay.js");


var RELAY_PORTS = [
	8887
];

var relay = new OSCSocketRelay();
relay.init(88);

for (var i=0; i < RELAY_PORTS.length; i++){

	relay.addOscPort(RELAY_PORTS[i]);
	
}


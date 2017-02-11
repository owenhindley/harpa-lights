var OSCSocketRelay = require("./OSCSocketRelay.js");
var SocketOSCRelay = require("./SocketOSCRelay.js");


var FLIC_SERVER_IP = "192.168.1.92";
// DEBUG
FLIC_SERVER_IP = "localhost";

var RELAY_PORTS = [
	8887
];

var RELAY_SOCKETS_FLIC = [
	{
		buttonId :"mac_address_goes_here",
		address : "/path/to/resolume/param",
		transform : function(d){
			return (d.value == "ButtonDown") ? 1.0 : 0.0;
		}
	},
	{
		buttonId :"test:test:test:test",
		address : "/path/to/resolume/param",
		transform : function(d){
			return (d.value == "ButtonDown") ? 1.0 : 0.0;
		}
	}
];

var relay_pd = new OSCSocketRelay();
relay_pd.init(88);

for (var i=0; i < RELAY_PORTS.length; i++){

	relay_pd.addOscPort(RELAY_PORTS[i]);
	
}

var relay_flic = new SocketOSCRelay();
relay_flic.init(FLIC_SERVER_IP, 80, 7000);

for (var i=0; i < RELAY_SOCKETS_FLIC.length; i++){
	var b = RELAY_SOCKETS_FLIC[i];
	relay_flic.addBinding(b.buttonId, b.address, b.transform);
	
}





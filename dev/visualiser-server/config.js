// Visualiser config

var VisConfig = [
	{ name : "simpleBeatBar", path : "./visualisers/simpleBeatBar/SimpleBeatBar.js", 
		options : { 
			enableBrightness : false, 
			ghostEnabled : true,
			ghostAmount : 0.8
		}},
	{ name : "rainbow", path : "./visualisers/rainbowFFT/RainbowVisualiser.js"},
	{ name : "rainbowShapes", path : "./visualisers/rainbowShapes/RainbowShapes.js"},
	{ name : "perlinShapes", path : "./visualisers/perlinShapes/PerlinShapes.js"}
];


module.exports = VisConfig;


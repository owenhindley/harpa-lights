// Visualiser config

var VisConfig = [

{ name : "Simon_DualProps", path : "./visualisers/syphon/HarpaResolumeVisualiser.js", options : {
		resolumeTrack : 22
}},	
	{ name : "Alexander_ColorSnakes", path : "./visualisers/2016/Alexander/ColorSnakesVisualiser.js", options : { reScaleVolume : true, swopChannels : true, beatDecay : true }},
	


{ name : "Jacob_Fistbumping", path : "./visualisers/syphon/HarpaResolumeVisualiser.js", options : {
		resolumeTrack : 31
}},	

	{ name : "Charlotte_Ambient", path : "./visualisers/syphon/HarpaResolumeVisualiser.js", options : {
		resolumeTrack : 32
}},	


	{ name : "Owen_Signals", path : "./visualisers/2016/Owen/Signals/SignalsVisualiser.js", options : { reScaleVolume : true, swopChannels : true, beatDecay : true }},

	{ name : "Owen_Bird", path : "./visualisers/2016/Owen/Kinect/HarpaKinectBird.js", options : { reScaleVolume : true, swopChannels : true, beatDecay : true }},

	{ name : "Erik_GreenScanners", path : "./visualisers/syphon/HarpaResolumeVisualiser.js", options : {
		resolumeTrack : 5
}},	

	{ name : "Owen_Falling", path : "./visualisers/2016/Owen/Kinect/HarpaKinectFalling.js", options : { reScaleVolume : true, swopChannels : true, beatDecay : true }},

	
	

	{ name : "Morgan_Rain", path : "./visualisers/2016/Morgan/HarpaRainVisualiser.js", options : { reScaleVolume : true, swopChannels : true, beatDecay : true }},
	
	{ name : "Owen_Sprite", path : "./visualisers/2016/Owen/Sprites/SpriteVisualiserTween.js", options : { reScaleVolume : true, swopChannels : true, beatDecay : true }},

	{ name : "Owen_conway01", path : "./visualisers/2015/conway01/ConwayVisualiser01.js", 
		options : { 
			enableBrightness : true,
			brightnessAmount : 0.15, 
			ghostEnabled : true,
			ghostAmount : 0.5
		}},

	{ name : "Jacob_AmbMaggots", path : "./visualisers/syphon/HarpaResolumeVisualiser.js", options : {
		resolumeTrack : 29
	}},


	{ name : "Owen_Walker", path : "./visualisers/2016/Owen/Kinect/HarpaKinectWalker.js", options : { reScaleVolume : true, swopChannels : true, beatDecay : true }},

	{ name : "Simon_MirrorSearchlights", path : "./visualisers/syphon/HarpaResolumeVisualiser.js", options : {
		resolumeTrack : 24
}},	

	{ name : "Jonas_Connect", path : "./visualisers/2016/jonas/Connect.js" },



	{ name : "Owen_simpleBeatBar", path : "./visualisers/2015/simpleBeatBar/SimpleBeatBar.js", 
		options : { 
			enableBrightness : false, 
			ghostEnabled : true,
			ghostAmount : 0.2
		}},
	{ name : "simpleBeatLines", path : "./visualisers/2015/simpleBeatLines/SimpleBeatLinesVisualiser.js"},



{ name : "Simon_GreenSearchlights", path : "./visualisers/syphon/HarpaResolumeVisualiser.js", options : {
		resolumeTrack : 23
}},	
	


	
	{ name : "Liam_Birds", path : "./visualisers/2015/liamBirds/HarpaMeshColorVisualiser.js", options : { 
			enableBrightness : true,
			brightnessAmount : 0.05, 
			ghostEnabled : true,
			ghostAmount : 0.6
		}},
	// { name : "eduConway", path : "./visualisers/2015/eduConway/EduVisualiser.js" },
	{ name : "Jonas_Lines", path : "./visualisers/2016/jonas/Lines.js", options : { 
			enableBrightness : false,
			brightnessAmount : 0.1, 
			ghostEnabled : true,
			ghostAmount : 0.2
		} },

	{ name : "Charlotte_Lines", path : "./visualisers/syphon/HarpaResolumeVisualiser.js", options : {
		resolumeTrack : 34,
		timeout : 60 * 1000
	}},

	//{ name : "Jonas_Lissajious", path : "./visualisers/2016/jonas/Lissajious.js" },

	{ name : "Charlotte_Glitch", path : "./visualisers/syphon/HarpaResolumeVisualiser.js", options : {
		resolumeTrack : 33
}},	


	{ name : "Jonas_Stars", path : "./visualisers/2016/jonas/Stars.js" },

	{ name : "Simon_80sShaft", path : "./visualisers/syphon/HarpaResolumeVisualiser.js", options : {
		resolumeTrack : 21
	}}

	// { name : "rainbow", path : "./visualisers/rainbowFFT/RainbowVisualiser.js"},
	// { name : "rainbowShapes", path : "./visualisers/rainbowShapes/RainbowShapes.js"},
	// { name : "perlinShapes", path : "./visualisers/perlinShapes/PerlinShapes.js"}
];


module.exports = VisConfig;




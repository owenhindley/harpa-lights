// Visualiser config

var VisConfig = [
	{ name : "Alexander_ColorSnakes", path : "./visualisers/2016/Alexander/ColorSnakesVisualiser.js", options : { reScaleVolume : true, swopChannels : true, beatDecay : true }},
	{ name : "Alexander_Emoji", path : "./visualisers/2016/Alexander/HarpaEmojiVisualiser.js", options : { reScaleVolume : true, swopChannels : true, beatDecay : true }},
	{ name : "Alexander_LinesFishes", path : "./visualisers/2016/Alexander/LinesAndFishesVisualiser.js",options : { reScaleVolume : true, swopChannels : true, beatDecay : true }},
	{ name : "Alexander_Ocean", path : "./visualisers/2016/Alexander/OceanVisualiser.js", options : { reScaleVolume : true, swopChannels : true, beatDecay : true, antialias : true }},

	{ name : "Christian_Block", path : "./visualisers/2016/Christian/BlockVisualiser.js", options : { reScaleVolume : true, swopChannels : true, beatDecay : true }},
	{ name : "Christian_Note", path : "./visualisers/2016/Christian/NoteVisualiser.js", options : { reScaleVolume : true, swopChannels : true, beatDecay : true }},
	{ name : "Christian_Smiley", path : "./visualisers/2016/Christian/SmileyVisualiser.js", options : { reScaleVolume : true, swopChannels : true, beatDecay : true }},
	
	{ name : "Morgan_Rain", path : "./visualisers/2016/Morgan/HarpaRainVisualiser.js", options : { reScaleVolume : true, swopChannels : true, beatDecay : true }},
	{ name : "Morgan_Weird", path : "./visualisers/2016/Morgan/HarpaWeirdVisualiser.js", options : { reScaleVolume : true, swopChannels : true, beatDecay : true }},

	{ name : "YiWen_Spinner", path : "./visualisers/2016/YiWen/WenVisualiser2016.js", options : { reScaleVolume : true, swopChannels : true, beatDecay : true }},

	{ name : "Owen_Signals", path : "./visualisers/2016/Owen/Signals/SignalsVisualiser.js", options : { reScaleVolume : true, swopChannels : true, beatDecay : true }},
	{ name : "Owen_Walker", path : "./visualisers/2016/Owen/Kinect/HarpaKinectWalker.js", options : { reScaleVolume : true, swopChannels : true, beatDecay : true }},
	{ name : "Owen_Sprite", path : "./visualisers/2016/Owen/Sprites/SpriteVisualiserTween.js", options : { reScaleVolume : true, swopChannels : true, beatDecay : true }},
	{ name : "Owen_conway01", path : "./visualisers/2015/conway01/ConwayVisualiser01.js", 
		options : { 
			enableBrightness : true,
			brightnessAmount : 0.15, 
			ghostEnabled : true,
			ghostAmount : 0.5
		}},
	{ name : "Owen_conwayVideoMask", path : "./visualisers/2015/conway01/ConwayVideoMask.js", 
		options : { 
			enableBrightness : true,
			brightnessAmount : 0.15, 
			ghostEnabled : true,
			ghostAmount : 0.5
		}},
	{ name : "Owen_simpleBeatBar", path : "./visualisers/2015/simpleBeatBar/SimpleBeatBar.js", 
		options : { 
			enableBrightness : false, 
			ghostEnabled : true,
			ghostAmount : 0.2
		}},
	// { name : "simpleBeatLines", path : "./visualisers/2015/simpleBeatLines/SimpleBeatLinesVisualiser.js"},
	// { name : "rainbow", path : "./visualisers/2015/rainbowFFT/RainbowVisualiser.js"},
	// { name : "rainbowShapes", path : "./visualisers/2015/rainbowShapes/RainbowShapes.js"},
	//{ name : "perlinShapes", path : "./visualisers/2015/perlinShapes/PerlinShapes.js"},
	{ name : "Christian_001", path : "./visualisers/2015/christian/HarpaMSCP001.js", options : { 
			enableBrightness : false, 
			ghostEnabled : true,
			ghostAmount : 0.2
		}},
	{ name : "Christian_002", path : "./visualisers/2015/christian/HarpaMSCP004.js", options : { 
			enableBrightness : false, 
			ghostEnabled : true,
			ghostAmount : 0.8
		}},
	{ name : "Nick_crash_and_burn", path : "./visualisers/2015/crashAndBurn/CrashAndBurn.js", options : { 
			enableBrightness : true,
			brightnessAmount : 0.15, 
			ghostEnabled : true,
			ghostAmount : 0.5
		}},
	{ name : "FIELD_Symbols", path : "./visualisers/2015/symbolRipples/SymbolRipplesVisualiser.js"},
	{ name : "Wen_Ripples", path : "./visualisers/2015/wenRipples2D/WenRipples.js", options : { 
			enableBrightness : true,
			brightnessAmount : 0.05, 
		}},
	{ name : "Wen_RipplesVideoMask", path : "./visualisers/2015/wenRipples2D/WenRipplesVideoMask.js", options : { 
			enableBrightness : true,
			brightnessAmount : 0.05, 
		}},
	{ name : "FIELD_aurora", path : "./visualisers/2015/aurora/AuroraVisualiser.js"},
	{ name : "Owen_simpleVideo", path : "./visualisers/2015/simpleVideoPlayer/SimpleVideoPlayer.js", options : { 
			enableBrightness : true,
			brightnessAmount : 0.08, 
		}},

	{ name : "Liam_Birds", path : "./visualisers/2015/liamBirds/HarpaMeshColorVisualiser.js", options : { 
			enableBrightness : true,
			brightnessAmount : 0.05, 
			ghostEnabled : true,
			ghostAmount : 0.6
		}},
	{ name : "Liam_BirdsvideoMask", path : "./visualisers/2015/liamBirds/HarpaVideoMaskMesh.js",  options : { 
			enableBrightness : true,
			brightnessAmount : 0.1, 
			ghostEnabled : true,
			ghostAmount : 0.6
		}},
	// { name : "eduConway", path : "./visualisers/2015/eduConway/EduVisualiser.js" },
	{ name : "Jonas_Lines", path : "./visualisers/2015/jonas/Lines.js", options : { 
			enableBrightness : false,
			brightnessAmount : 0.1, 
			ghostEnabled : true,
			ghostAmount : 0.2
		} },
	{ name : "Jonas_Lissajious", path : "./visualisers/2015/jonas/Lissajious.js" },
	{ name : "Jonas_Stars", path : "./visualisers/2015/jonas/Stars.js" },
	{ name : "Jonas_LinesVideoMask", path : "./visualisers/2015/jonas/LinesVideoMask.js",
		options : { 
			enableBrightness : true,
			brightnessAmount : 0.15, 
			ghostEnabled : true,
			ghostAmount : 0.5
		}
	 },
	{ name : "Jonas_LissajiousVideoMask", path : "./visualisers/2015/jonas/LissajiousVideoMask.js", options : { 
			enableBrightness : true,
			brightnessAmount : 0.15, 
			ghostEnabled : true,
			ghostAmount : 0.5
		} },
	{ name : "Jonas_StarsVideoMask", path : "./visualisers/2015/jonas/StarsVideoMask.js", options : { 
			enableBrightness : true,
			brightnessAmount : 0.15, 
			ghostEnabled : true,
			ghostAmount : 0.5
		} },
	{ name : "Owen_simpleBeatLinesVideoMask", path : "./visualisers/2015/simpleBeatLines/SimpleBeatVideoMask.js" },
	
	{ name : "ResolumeTrack1", path : "./visualisers/syphon/HarpaResolumeVisualiser.js", options : {
		resolumeTrack : 1
	}},
	{ name : "ResolumeTrack2", path : "./visualisers/syphon/HarpaResolumeVisualiser.js", options : {
		resolumeTrack : 2
	}}
	

	// { name : "rainbow", path : "./visualisers/rainbowFFT/RainbowVisualiser.js"},
	// { name : "rainbowShapes", path : "./visualisers/rainbowShapes/RainbowShapes.js"},
	// { name : "perlinShapes", path : "./visualisers/perlinShapes/PerlinShapes.js"}
];


module.exports = VisConfig;


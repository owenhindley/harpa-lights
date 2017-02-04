// Visualiser config

var VisConfig = [
	{ name : "FIELD_aurora", path : "./visualisers/2015/aurora/AuroraVisualiser.js"},
	{ name : "Morgan_Weird", path : "./visualisers/2016/Morgan/HarpaWeirdVisualiser.js", options : { reScaleVolume : true, swopChannels : true, beatDecay : true }},
	{ name : "Charlotte_Glitch", path : "./visualisers/syphon/HarpaResolumeVisualiser.js", options : {
			resolumeTrack : 33
	}},	
	{ name : "Erik_Fountain", path : "./visualisers/syphon/HarpaResolumeVisualiser.js", options : {
		resolumeTrack : 3
	}},	
	{ name : "Erik_GreenDiver", path : "./visualisers/syphon/HarpaResolumeVisualiser.js", options : {
		resolumeTrack : 2
	}},	
	{ name : "Chris_ParticleStreaks", path : "./visualisers/syphon/HarpaResolumeVisualiser.js", options : {
		resolumeTrack : 7
	}},	
	{ name : "Chris_RedTriangles", path : "./visualisers/syphon/HarpaResolumeVisualiser.js", options : {
		resolumeTrack : 6
	}},	
	{ name : "FIELD_Symbols", path : "./visualisers/2015/symbolRipples/SymbolRipplesVisualiser.js"},
	{ name : "Owen_Falling", path : "./visualisers/2016/Owen/Kinect/HarpaKinectFalling.js", options : { reScaleVolume : true, swopChannels : true, beatDecay : true }},
	{ name : "Charlotte_Ambient", path : "./visualisers/syphon/HarpaResolumeVisualiser.js", options : {
			resolumeTrack : 32
	}},	
	{ name : "YiWen_Spinner", path : "./visualisers/2016/YiWen/WenVisualiser2016.js", options : { reScaleVolume : true, swopChannels : true, beatDecay : true }},
	{ name : "Jacob_PumpingShards", path : "./visualisers/syphon/HarpaResolumeVisualiser.js", options : {
		resolumeTrack : 30
	}},	
	{ name : "Owen_Signals", path : "./visualisers/2016/Owen/Signals/SignalsVisualiser.js", options : { reScaleVolume : true, swopChannels : true, beatDecay : true }},
	{ name : "Jacob_Fistbumping", path : "./visualisers/syphon/HarpaResolumeVisualiser.js", options : {
		resolumeTrack : 31
	}},	
	{ name : "Owen_simpleBeatBar", path : "./visualisers/2015/simpleBeatBar/SimpleBeatBar.js", 
		options : { 
			enableBrightness : false, 
			ghostEnabled : true,
			ghostAmount : 0.2
		}},
	{ name : "Charlotte_Lines", path : "./visualisers/syphon/HarpaResolumeVisualiser.js", options : {
		resolumeTrack : 34
	}},
	{ name : "Liam_Birds", path : "./visualisers/2015/liamBirds/HarpaMeshColorVisualiser.js", options : { 
			enableBrightness : true,
			brightnessAmount : 0.05, 
			ghostEnabled : true,
			ghostAmount : 0.6
	}},
	{ name : "Jacob_AmbMaggots", path : "./visualisers/syphon/HarpaResolumeVisualiser.js", options : {
		resolumeTrack : 29
	}},	
	{ name : "Christian_002", path : "./visualisers/2015/christian/HarpaMSCP004.js", options : { 
			enableBrightness : false, 
			ghostEnabled : true,
			ghostAmount : 0.8
	}},
	{ name : "Simon_NeonArrows", path : "./visualisers/syphon/HarpaResolumeVisualiser.js", options : {
		resolumeTrack : 25
	}},	
	{ name : "Simon_PinkProps", path : "./visualisers/syphon/HarpaResolumeVisualiser.js", options : {
			resolumeTrack : 26
	}},	
	{ name : "Simon_Vulva", path : "./visualisers/syphon/HarpaResolumeVisualiser.js", options : {
			resolumeTrack : 27
	}},	
	{ name : "Nick_crash_and_burn", path : "./visualisers/2015/crashAndBurn/CrashAndBurn.js", options : { 
			enableBrightness : true,
			brightnessAmount : 0.15, 
			ghostEnabled : true,
			ghostAmount : 0.5
	}},
	{ name : "Wen_Ripples", path : "./visualisers/2015/wenRipples2D/WenRipples.js", options : { 
			enableBrightness : true,
			brightnessAmount : 0.05, 
	}},
	{ name : "Erik_PinkSpinner", path : "./visualisers/syphon/HarpaResolumeVisualiser.js", options : {
			resolumeTrack : 4
	}},	
	{ name : "Erik_PurpleGrid", path : "./visualisers/syphon/HarpaResolumeVisualiser.js", options : {
			resolumeTrack : 8
	}},
	{ name : "Simon_DualProps", path : "./visualisers/syphon/HarpaResolumeVisualiser.js", options : {
			resolumeTrack : 22
	}},	
	{ name : "Alexander_ColorSnakes", path : "./visualisers/2016/Alexander/ColorSnakesVisualiser.js", options : { reScaleVolume : true, swopChannels : true, beatDecay : true }},
	{ name : "Alexander_Emoji", path : "./visualisers/2016/Alexander/HarpaEmojiVisualiser.js", options : { reScaleVolume : true, swopChannels : true, beatDecay : true }},
	{ name : "Alexander_LinesFishes", path : "./visualisers/2016/Alexander/LinesAndFishesVisualiser.js", options : { reScaleVolume : true, swopChannels : true, beatDecay : true }},
	{ name : "Alexander_Ocean", path : "./visualisers/2016/Alexander/OceanVisualiser.js", options : { reScaleVolume : true, swopChannels : true, beatDecay : true }},
	{ name : "Jacob_Fistbumping", path : "./visualisers/syphon/HarpaResolumeVisualiser.js", options : {
			resolumeTrack : 31
	}},	

	{ name : "Charlotte_Ambient", path : "./visualisers/syphon/HarpaResolumeVisualiser.js", options : {
		resolumeTrack : 32
	}},
	{ name : "Karl_pixels", path : "./visualisers/syphon/HarpaResolumeVisualiser.js", options : {
				resolumeTrack : 38
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
	{ name : "FIELD_aurora", path : "./visualisers/2015/aurora/AuroraVisualiser.js"},
	{ name : "Morgan_Weird", path : "./visualisers/2016/Morgan/HarpaWeirdVisualiser.js", options : { reScaleVolume : true, swopChannels : true, beatDecay : true }},
	{ name : "Karl_Raindrops", path : "./visualisers/syphon/HarpaResolumeVisualiser.js", options : {
			resolumeTrack : 35
	}},	
	{ name : "YiWen_Spinner", path : "./visualisers/2016/YiWen/WenVisualiser2016.js", options : { reScaleVolume : true, swopChannels : true, beatDecay : true }},
	{ name : "Owen_Walker", path : "./visualisers/2016/Owen/Kinect/HarpaKinectWalker.js", options : { reScaleVolume : true, swopChannels : true, beatDecay : true }},
	{ name : "Simon_MirrorSearchlights", path : "./visualisers/syphon/HarpaResolumeVisualiser.js", options : {
		resolumeTrack : 24
	}},	
	{ name : "Jonas_Connect", path : "./visualisers/2016/jonas/Connect.js", options : { reScaleVolume : true, swopChannels : true } },
	{ name : "Jonas_Lissajious", path : "./visualisers/2016/jonas/Lissajious.js", options : { reScaleVolume : true, swopChannels : true } },
	{ name : "Karl_colours", path : "./visualisers/syphon/HarpaResolumeVisualiser.js", options : {
			resolumeTrack : 36
	}},	
	{ name : "Owen_simpleBeatBar", path : "./visualisers/2015/simpleBeatBar/SimpleBeatBar.js", 
		options : { 
			enableBrightness : false, 
			ghostEnabled : true,
			ghostAmount : 0.2
		}},
	{ name : "simpleBeatLines", path : "./visualisers/2015/simpleBeatLines/SimpleBeatLinesVisualiser.js"},

	{ name : "Karl_starfield", path : "./visualisers/syphon/HarpaResolumeVisualiser.js", options : {
			resolumeTrack : 37
	}},	
	{ name : "Simon_GreenSearchlights", path : "./visualisers/syphon/HarpaResolumeVisualiser.js", options : {
			resolumeTrack : 23
	}},	
	{ name : "Liam_Birds", path : "./visualisers/2015/liamBirds/HarpaMeshColorVisualiser.js", options : { 
			enableBrightness : true,
			brightnessAmount : 0.05, 
			ghostEnabled : true,
			ghostAmount : 0.6
		}},
	{ name : "Jonas_Lines", path : "./visualisers/2016/jonas/Lines.js", options : { 
			enableBrightness : false,
			brightnessAmount : 0.1, 
			ghostEnabled : true,
			ghostAmount : 0.2,
			reScaleVolume : true, 
			swopChannels : true
		} },
	{ name : "Charlotte_Lines", path : "./visualisers/syphon/HarpaResolumeVisualiser.js", options : {
		resolumeTrack : 34
	}},
	{ name : "Charlotte_Glitch", path : "./visualisers/syphon/HarpaResolumeVisualiser.js", options : {
		resolumeTrack : 33
	}},
	{ name : "Jonas_Stars", path : "./visualisers/2016/jonas/Stars.js", options : { reScaleVolume : true, swopChannels : true } },
	{ name : "Simon_80sShaft", path : "./visualisers/syphon/HarpaResolumeVisualiser.js", options : {
		resolumeTrack : 21
	}},

	{ name : "Christian_Blocks", path : "./visualisers/syphon/HarpaResolumeVisualiser.js", options : {
		resolumeTrack : 40
	}},
	{ name : "Christian_Smiley", path : "./visualisers/syphon/HarpaResolumeVisualiser.js", options : {
		resolumeTrack : 41
	}},
	{ name : "Christian_Notes", path : "./visualisers/syphon/HarpaResolumeVisualiser.js", options : {
		resolumeTrack : 42
	}},
	{ name : "Ragnar_HarpaBanen", path : "./visualisers/syphon/HarpaResolumeVisualiser.js", options : {
		resolumeTrack : 28
	}}
];

// 65 !

module.exports = VisConfig;




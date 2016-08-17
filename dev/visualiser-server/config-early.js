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
	{ name : "FIELD_Symbols", path : "./visualisers/2015/symbolRipples/SymbolRipplesVisualiser.js"},
	{ name : "Owen_Falling", path : "./visualisers/2016/Owen/Kinect/HarpaKinectFalling.js", options : { reScaleVolume : true, swopChannels : true, beatDecay : true }},

	{ name : "Charlotte_Ambient", path : "./visualisers/syphon/HarpaResolumeVisualiser.js", options : {
			resolumeTrack : 32,
			timeout : 60 * 1000
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
	}}
];








module.exports = VisConfig;


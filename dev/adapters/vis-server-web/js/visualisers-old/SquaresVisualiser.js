(function(global){

	/*

		Example simple Visualiser class

	*/

	var SquaresVisualiser = function() {

		// stores the current volume
		this.currentVolume = 0;

		// stores the current beat envelope / value
		this.currentBeatValue = 0;

	}

	var p = SquaresVisualiser.prototype = new HarpaVisualiserBase();


	p.render = function() {

		// clear all
		this.frontCtx.clearRect(0,0,this.faces.front.width,this.faces.front.height);
		this.sideCtx.clearRect(0,0,this.faces.side.width,this.faces.side.height);

		this.frontCtx.strokeStyle = "white";
		this.frontCtx.lineWidth = 1;
		this.frontCtx.setLineDash([2,3]);
		this.frontCtx.strokeRect(2.5,2.5,this.faces.front.width-4,this.faces.front.height-4);


	};

	p.signal = function(channel, value) {

		// store volume values from channel 1
		if (channel == 1){
			this.currentVolume = value;
		}

		// store beat values from channel 2
		if (channel == 2){
			this.currentBeatValue = value;
		}
	};


	global.SquaresVisualiser = (global.module || {}).exports = SquaresVisualiser;

})(this);

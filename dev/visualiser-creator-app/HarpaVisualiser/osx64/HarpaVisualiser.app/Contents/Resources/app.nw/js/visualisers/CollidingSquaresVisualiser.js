(function(global){

	// uncomment this when running in Node
	// var SimplexNoise = require("./libs/perlin-noise-simplex.js");

	
	var NUM_SQUARES = 2;
	var MIN_SIZE = 4;
	var MAX_SIZE = 10;

	var SQUARE_SPEED = 1;
	var NOISE_SPEED = 1;
	var NOISE_SCALE = 5;

	var CollidingSquaresVisualiser = function() {

		// stores the current volume
		this.currentVolume = 0;

		// stores the current beat envelope / value
		this.currentBeatValue = 0;

		this.squares = [];
		this.noiseIndex = 0;
		
		this.tempImageData = null;
		this.tempImageData2 = null;

	};

	var p = CollidingSquaresVisualiser.prototype = new HarpaVisualiserBase();
	var s = HarpaVisualiserBase.prototype;

	p.init = function(frontWidth, frontHeight, sideWidth, sideHeight) {
		s.init.call(this, frontWidth, frontHeight, sideWidth, sideHeight);

		this.totalWidth = (this.faces.front.width + this.faces.side.width);
		this.totalHeight = Math.max(this.faces.front.height, this.faces.side.height);

		for (var i=0; i < NUM_SQUARES; i++){
			this.squares.push(this._createSquare(i));
		}

		this.combinedCanvas = document.createElement("canvas");
		this.combinedCanvas.width = this.totalWidth;
		this.combinedCanvas.height = this.totalHeight;
		this.combCtx = this.combinedCanvas.getContext("2d");

		this.revealCanvas = document.createElement("canvas");
		this.revealCanvas.width = this.totalWidth;
		this.revealCanvas.height = this.totalHeight;
		this.revealCtx = this.revealCanvas.getContext("2d");

		this.tempCanvas = document.createElement("canvas");
		this.tempCanvas.width = this.totalWidth;
		this.tempCanvas.height = this.totalHeight;
		this.tempCtx = this.tempCanvas.getContext("2d");

		this.noise = new SimplexNoise();
		this.revealCtx.globalCompositeOperation = "lighten";
		var val = 0;
		for (var x=0; x < this.totalWidth; x++){
			for (var y=0; y < this.totalHeight; y++){
				this.revealCtx.globalAlpha = Math.abs(this.noise.noise3d(x / this.totalWidth * NOISE_SCALE, y / this.totalHeight * NOISE_SCALE, 0.2));
				this.revealCtx.fillStyle = "rgb(255,0,0)";
				this.revealCtx.fillRect(x,y,1,1);
				this.revealCtx.globalAlpha = Math.abs(this.noise.noise3d(x / this.totalWidth * NOISE_SCALE, y / this.totalHeight * NOISE_SCALE, 0.4));
				this.revealCtx.fillStyle = "rgb(0,255,0)";
				this.revealCtx.fillRect(x,y,1,1);
				this.revealCtx.globalAlpha = Math.abs(this.noise.noise3d(x / this.totalWidth * NOISE_SCALE, y / this.totalHeight * NOISE_SCALE, 0.6));
				this.revealCtx.fillStyle = "rgb(0,0,255)";
				this.revealCtx.fillRect(x,y,1,1);
			}
		}

	};

	p._createSquare = function(index) {

		// var direction = index % 2 === 0;
		var direction = true;

		var size = MIN_SIZE + Math.floor(Math.random() * (MAX_SIZE - MIN_SIZE));

		return {
			id : index,
			direction : direction,
			size : size,
			y : Math.floor(0.5 * this.faces.front.height) + (((Math.random() * 2.0) - 1.0) * 0.2 * this.faces.front.height),
			x : (direction ? (0 - (Math.random() * this.totalWidth) - size) : ((this.totalWidth  + (this.totalWidth * Math.random())) + size)),
			speed : SQUARE_SPEED * (0.5 + (Math.random() * 0.5))
		};
	};
	

	p.render = function() {

		this.noiseIndex += NOISE_SPEED;
		this.noiseIndex = this.noiseIndex % 1.0;

		// clear all
		this.frontCtx.clearRect(0,0,this.faces.front.width,this.faces.front.height);
		this.sideCtx.clearRect(0,0,this.faces.side.width,this.faces.side.height);
		this.combCtx.clearRect(0,0,this.totalWidth,this.totalHeight);

		this.combCtx.strokeStyle = "white";
		this.combCtx.lineWidth = 0.1;
		this.combCtx.globalAlpha = 0.5;
		this.combCtx.globalCompositeOperation = "multiply";
		// this.frontCtx.setLineDash([2,3]);
		// this.frontCtx.strokeRect(2.5,2.5,this.faces.front.width-4,this.faces.front.height-4);

		var square;
		for (var i=0; i < NUM_SQUARES; i++){

			square = this.squares[i];

			// movement & bounds checking

			if (square.direction){
				square.x += square.speed;
				if (square.x - square.size/2 > this.totalWidth) {
					this.squares[i] = this._createSquare(i);
				}
			} else {
				square.x -= square.speed;
				if (square.x + square.size/2 < 0) {
					this.squares[i] = this._createSquare(i);
				}
			}
			
			// draw squares
			// this.combCtx.setLineDash([0.1,0.1]);
			this.combCtx.strokeRect(square.x - square.size/2, square.y - square.size/2, square.size * 2.5, square.size);

		}

		// shift noise up
		this.tempCtx.globalCompositeOperation = "source-over";
		this.tempCtx.clearRect(0,0,this.totalWidth, this.totalHeight);
		this.tempCtx.drawImage(this.revealCanvas,0,0);
		this.revealCtx.globalAlpha = 1.0;
		this.revealCtx.clearRect(0,0,this.totalWidth, this.totalHeight);
		this.revealCtx.drawImage(this.tempCanvas, 0,0, this.totalWidth, 1, 0, this.totalHeight-1, this.totalWidth, 1);
		this.revealCtx.drawImage(this.tempCanvas, 0,1, this.totalWidth, this.totalHeight-1, 0, 0, this.totalWidth, this.totalHeight-1);

		this.tempImgData = this.combCtx.getImageData(0,0,this.totalWidth, this.totalHeight);
		this.tempImgData2 = this.combCtx.getImageData(0,0,this.totalWidth, this.totalHeight);

		var idx =0;
		for (var x=0; x < this.totalWidth; x++){
			for (var y=0; y < this.totalHeight; y++){
				idx = (y * this.totalWidth + x) * 4;
				if (this.tempImgData.data[idx+3] > 20){
					this.tempImgData2.data[idx] = 255;
					this.tempImgData2.data[idx+1] = 255;
					this.tempImgData2.data[idx+2] = 0;
					this.tempImgData2.data[idx+3] = 255;
				} else {
					this.tempImgData2.data[idx] = 0;
					this.tempImgData2.data[idx+1] = 0;
					this.tempImgData2.data[idx+2] = 0;
					this.tempImgData2.data[idx+3] = 0;
				}
			}
		}

		this.tempCtx.clearRect(0,0,this.totalWidth, this.totalHeight);
		this.tempCtx.putImageData(this.tempImgData2,0,0);
		this.tempCtx.globalCompositeOperation = "source-in";
		this.tempCtx.drawImage(this.revealCanvas, 0,0);
		// this.tempCtx.fillStyle = "red";
		// this.tempCtx.fillRect(0,0,this.totalWidth, this.totalHeight);
		this.combCtx.globalCompositeOperation = "lighten";
		// this.combCtx.clearRect(0,0,this.totalWidth, this.totalHeight);
		this.combCtx.drawImage(this.tempCanvas, 0,0);
		this.combCtx.globalCompositeOperation = "source-over";

		// temp
		// this.combCtx.drawImage(this.revealCanvas,0,0);

		this.drawToFaces(this.combinedCanvas);

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


	global.CollidingSquaresVisualiser = (global.module || {}).exports = CollidingSquaresVisualiser;

})(this);

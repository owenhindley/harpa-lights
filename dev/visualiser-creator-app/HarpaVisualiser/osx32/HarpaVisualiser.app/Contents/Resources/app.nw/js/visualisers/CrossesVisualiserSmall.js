(function(global){

	/*

		Example simple Visualiser class

	*/

	var SPRITE_CROSS = [
		[
			0,1,0,
			2,1,2,
			0,1,0
		],
		[
			2,0,1,
			0,1,0,
			1,0,2
		],
		[
			0,2,0,
			1,1,1,
			0,2,0
		],
		[
			1,0,2,
			0,1,0,
			2,0,1
		],
		[
			0,1,0,
			2,1,2,
			0,1,0
		]
	];

	var NUM_CROSSES = 4;
	var CROSS_SIZE = 3;
	var CROSS_PADDING = 1;
	var SHIFT_FRAME_COUNT = 5;

	var START_HUE = 315;
	var END_HUE = 203;

	// var START_HUE = 120;
	// var END_HUE = 20;

	var SAT = 50;
	var LIGHTNESS = 50;


	var CrossesVisualiser = function() {

		// stores the current volume
		this.currentVolume = 0;

		// stores the current beat envelope / value
		this.currentBeatValue = 0;

		this.spriteCounter = 0;

		this.crosses = [];



	};

	var p = CrossesVisualiser.prototype = new HarpaVisualiserBase();
	var s = HarpaVisualiserBase.prototype;

	p.init = function(frontWidth, frontHeight, sideWidth, sideHeight) {
		s.init.call(this, frontWidth, frontHeight, sideWidth, sideHeight);

		var cross_spacing = CROSS_SIZE + CROSS_PADDING;
		NUM_CROSSES = Math.floor(this.totalWidth / cross_spacing);
		for (var j=-1; j < 2; j++){
			for (var i=0; i < NUM_CROSSES * 2; i++){
				this.createCross(i * cross_spacing + cross_spacing, Math.floor(0.5 * this.totalHeight) + (j * cross_spacing));
			}
		}
	};

	p.createCross = function(x, y) {

		var direction = this.crosses.length % 2 === 0;

		direction = true;
		this.crosses.push({
			x : x,
			y : y,
			frame : Math.floor(Math.random() * SPRITE_CROSS.length),
			direction : direction,
			moving : false,
			frameCount : 0
		});

	};

	p.render = function() {

		// clear all
		this.frontCtx.clearRect(0,0,this.faces.front.width,this.faces.front.height);
		this.sideCtx.clearRect(0,0,this.faces.side.width,this.faces.side.height);

		this.combCtx.clearRect(0,0,this.totalWidth, this.totalHeight);
		for (var i=0 ; i < this.crosses.length; i++){
			var cross = this.crosses[i];

			if (cross.moving){
				if (cross.frameCount < 100){
					cross.frameCount++;
					this.shiftCross(cross);
				} else {
					cross.moving = false;
				}
				
			}

			// if (cross.moving){
			// 	cross.frameCount++;
			// 	if (cross.frameCount > SHIFT_FRAME_COUNT) {
			// 		this.shiftCross(cross);
			// 	}
			// }

			this.drawCross(cross.x, cross.y, cross.frame);
		}
		

		this.drawToFaces(this.combinedCanvas);

	};

	p.drawCross = function(cx,cy,frame) {

		var sprite = SPRITE_CROSS[frame];

		var idx = 0;

		for (var y = cy-1; y < cy+2; y++){
			for (var x = cx-1; x < cx+2; x++){
				var ref = sprite[idx];
				switch(ref) {
					case 0:
						// do nothing
					break;

					case 1:
						this.combCtx.fillStyle = "white";
						this.combCtx.fillRect(x,y,1,1);
					break;

					case 2:
						this.combCtx.fillStyle = this.getColour(x / this.totalWidth);
						this.combCtx.fillRect(x,y,1,1);
					break;

				}
				idx++;
			}
		}

	};

	p.signal = function(channel, value) {

		// store volume values from channel 1
		if (channel == 1){
			this.currentVolume = value;
		}

		// store beat values from channel 2
		if (channel == 2){
			this.currentBeatValue = value;
			// console.log(value);
			if (value > 0.5){

				for (var i=0; i < 5; i++){

					// pick a random cross to move
					var idx = Math.max(0, Math.floor((Math.random() * this.crosses.length-1)));

					var cross = this.crosses[idx];
					if (!cross.moving){
						cross.frameCount = 0;
						this.shiftCross(cross);
						console.log('hit!');
					} else {
						console.log("miss!");
					}
				}
				
				
			}
		}
	};

	p.shiftCross = function(cross) {
		cross.moving = true;

		if (cross.frameCount % 8 === 0){

			if (cross.direction) {
				cross.frame++;
			} else {
				cross.frame--;
			}

			if (cross.frame == 2){
				// cross.moving = false;
			}

			// cross.moving = false;

			if (cross.frame >= SPRITE_CROSS.length){
				// cross.direction = !cross.direction;
				cross.frame = 0;
				// cross.moving = false;
			}

			if (cross.frame < 0){
				// cross.direction = !cross.direction;
				cross.frame = SPRITE_CROSS.length-1;
				// cross.moving = false;
			}

		}
		
		

	};

	p.getColour = function(alpha) {
		var hue = END_HUE + (START_HUE - END_HUE) * alpha;
		// var col = "hsl(" + Math.floor(hue) + ", " + SAT + ", " + LIGHTNESS + ")";
		// return col;
		var color = tinycolor.fromRatio({ h : (hue/360), s : SAT/100.0, l : LIGHTNESS/100.0});
		return color.toHexString();
	};


	global.CrossesVisualiser = (global.module || {}).exports = CrossesVisualiser;

})(this);

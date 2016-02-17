(function(global){

	/*

		Example simple Visualiser class

	*/

	var SPRITE_FRAMES = SPRITE_LIBRARY.corners_5x5;

	var NUM_CROSSES = 4;
	var CROSS_SIZE = 5;
	var CROS_NEG = 2;
	var CROS_POS = 3;
	var CROSS_PADDING = 1;
	var SHIFT_FRAME_COUNT = 5;

	// var NUM_CROSSES = 4;
	// var CROSS_SIZE = 5;
	// var CROS_NEG = 2;
	// var CROS_POS = 3;
	// var CROSS_PADDING = 1;
	// var SHIFT_FRAME_COUNT = 5;

	var USE_WAVE = false;
	var USE_WHITE = true;
	var USE_TEMPO = true;

	var FRAME_COUNTDOWN_SPEED = 0.2;


	var END_HUE = 60;

	var SAT = 100;
	var LIGHTNESS = 10;


	var SpriteVisualiser = function() {

		// stores the current volume
		this.currentVolume = 0;

		// stores the current beat envelope / value
		this.currentBeatValue = 0;

		this.spriteCounter = 0;

		this.sprites = [];

		this.shootingStars = [];

		this.waveIndex = 0;


	};

	var p = SpriteVisualiser.prototype = new HarpaVisualiserBase();
	var s = HarpaVisualiserBase.prototype;

	p.init = function(frontWidth, frontHeight, sideWidth, sideHeight) {
		s.init.call(this, frontWidth, frontHeight, sideWidth, sideHeight);

		var sprite_spacing = CROSS_SIZE+CROSS_PADDING;
		NUM_CROSSES = Math.floor(this.totalWidth / sprite_spacing);
		for (var j=-2; j < 3; j++){
			for (var i=0; i < NUM_CROSSES * 2; i++){
				this.createShootingStar((i * sprite_spacing) + (i * CROSS_PADDING) - CROSS_SIZE, j * sprite_spacing);
				this.createSprite((i * sprite_spacing) + i * CROSS_PADDING , Math.floor(0.5 * this.totalHeight) + (j * sprite_spacing));
			}
		}

		this.combCtx.globalCompositeOperation = "multiply";

		this.tempCanvas = document.createElement("canvas");
		this.tempCanvas.width = this.totalWidth;
		this.tempCanvas.height = this.totalHeight;
		this.tempCtx = this.tempCanvas.getContext("2d");
	};

	p.createSprite = function(x, y) {

		var direction = this.sprites.length % 2 === 0;

		direction = true;
		this.sprites.push({
			x : x,
			y : y,
			frame : Math.floor(Math.random() * SPRITE_FRAMES.length),
			direction : direction,
			moving : false,
			updateSpeed : 1.0,
			updateCounter : 0.0,
			frameCount : 0,
			white : 0,
		});

	};

	p.createShootingStar = function(x, y) {

		var direction = this.shootingStars.length % 2 === 0;
		var orientation = this.shootingStars.length % 4 === 0;

		this.shootingStars.push({
			x : (orientation ? (direction ? 0 : this.totalWidth * Math.random() * 4.0) : x),
			y : (orientation ? y : (direction ? 0 : this.totalHeight * Math.random() * 4.0)),
			direction : direction,
			orientation : orientation
		});

	};

	p.render = function() {

		// clear all
		this.frontCtx.clearRect(0,0,this.faces.front.width,this.faces.front.height);
		this.sideCtx.clearRect(0,0,this.faces.side.width,this.faces.side.height);

		// this.tempCtx.drawImage(this.combinedCanvas, 0, 0);
		// this.combCtx.globalAlpha = 0.1;
		
		// this.combCtx.globalAlpha = 1.0;
		this.combCtx.clearRect(0,0,this.totalWidth, this.totalHeight);
		// this.combCtx.fillStyle = "black";
		// this.combCtx.fillRect(0,0,this.totalWidth, this.totalHeight);
		// this.combCtx.globalAlpha = 0.2;
		// this.combCtx.drawImage(this.tempCanvas, 0,0);
		// this.combCtx.globalAlpha = 1.0;



		this.waveIndex += 0.5;

		// END_HUE += 1;

		if ( this.waveIndex > this.totalWidth * 1.5){
			this.waveIndex = 0;
		}

		for (var i=0 ; i < this.sprites.length; i++){
			var sprite = this.sprites[i];

			// if (i == 5){
			// 	this.shiftSprite(sprite);
			// }

			if (sprite.moving){

				this.shiftSprite(sprite);

				if (sprite.updateSpeed < 0.1) this.resetSprite(sprite);

				
			} else {

				if (USE_WAVE){
					if (sprite.x < this.waveIndex && (sprite.x > this.waveIndex - 5)){
						// this.resetSprite(sprite);
						this.shiftSprite(sprite);
					}
				}
				

			}


			this.combCtx.globalAlpha = 1.0 - sprite.updateCounter;
			this.drawSprite(sprite.x, sprite.y, sprite.frame, (sprite.x / this.totalWidth), sprite.white);
			this.combCtx.globalAlpha = sprite.updateCounter;
			this.drawSprite(sprite.x, sprite.y, this.getNextFrame(sprite), (sprite.x / this.totalWidth), sprite.white);

			sprite.white *= 0.98;
		}
		
		// for (var i=0; i < this.shootingStars.length; i++){
		// 	var star = this.shootingStars[i];
		// 	this.updateShootingStar(star);
		// 	this.drawStar(star);
		// }

		// this.combCtx.globalCompositeOperation = "lighten";
		// this.combCtx.globalAlpha = 0.99;
		// this.combCtx.drawImage(this.tempCanvas, 0,0);
		// this.combCtx.globalAlpha = 1.0;
		// this.combCtx.globalCompositeOperation = "source-in";

		this.drawToFaces(this.combinedCanvas);



	};

	p.drawSprite = function(cx,cy,frame, alpha, white) {

		var sprite = SPRITE_FRAMES[frame];
		// white = 1.0 - white;
		var idx = 0;

		for (var y = cy-CROS_NEG; y < cy+CROS_POS; y++){
			for (var x = cx-CROS_NEG; x < cx+CROS_POS; x++){
				var ref = sprite[idx];
				switch(ref) {
					case 0:
						// do nothing
					break;

					case 1:
							// this.combCtx.globalAlpha = 0.6 + this.currentBeatValue * 0.4;
						// this.combCtx.globalAlpha = 1.0;
						this.combCtx.fillStyle = this.getColour(END_HUE + (300 * white), 1.0 - alpha, (50 ));
						this.combCtx.fillRect(x,y,1,1);
					break;

					case 2:
						// this.combCtx.globalAlpha = 1.0;
						this.combCtx.fillStyle = this.getColour(END_HUE - 100 + (300 * white), alpha, (50 ));
						this.combCtx.fillRect(x,y,1,1);
					break;

				}
				idx++;
			}
		}

	};

	p.drawStar = function(star) {
		this.combCtx.globalAlpha = this.currentBeatValue;
		this.combCtx.fillStyle = "white";
		this.combCtx.fillRect(star.x, star.y, 1, 1);

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

					// pick a random sprite to move
					var idx = Math.max(0, Math.floor((Math.random() * this.sprites.length-1)));

					var sprite = this.sprites[idx];
					// if (!sprite.moving){
					// 	sprite.frameCount = 0;
					// 	this.shiftSprite(sprite);
					// 	console.log('hit!');
					// } else {
					// 	console.log("miss!");
					// }
					if (USE_WHITE){
						sprite.white = 1.0;
					} 
					if (USE_TEMPO) {
						this.shiftSprite(sprite);
					}
					
				}
				
				
			}
		}
	};

	p.resetSprite = function(sprite) {
		sprite.moving = false;
		sprite.updateCounter = 0.0;
		sprite.updateSpeed = 1.0;
		sprite.frameCount = 0;
	}

	p.shiftSprite = function(sprite) {
		sprite.moving = true;
		sprite.updateCounter += sprite.updateSpeed * FRAME_COUNTDOWN_SPEED;
		sprite.updateCounter = Math.min(1.0, Math.max(0, sprite.updateCounter));
		// console.log(sprite.updateCounter);
		if (sprite.updateCounter >= 1.0){

			sprite.updateSpeed *= 0.8;
			sprite.updateCounter = 0.0;
			

			if (sprite.direction) {
				sprite.frame++;
			} else {
				sprite.frame--;
			}

			if (sprite.frame >= SPRITE_FRAMES.length){
				sprite.frame = 1;
			}

			if (sprite.frame < 0){
				sprite.frame = SPRITE_FRAMES.length-1;
			}

			sprite.frameCount++;

			// console.log("frame ; " + sprite.frame);
		}

	};

	p.getNextFrame = function(sprite){
		var nextFrame = sprite.frame;

		if (sprite.direction){
			nextFrame++;
		} else {
			nextFrame--;
		}
		if (nextFrame >= SPRITE_FRAMES.length){
			nextFrame = 1;
		}

		if (nextFrame < 0){
			nextFrame = SPRITE_FRAMES.length-1;
		}

		// console.log("frame : " + sprite.frame + " nextFrame : " + nextFrame);
		

		return nextFrame;
	};

	p.updateShootingStar = function(star){

		if (star.orientation){

			if (star.direction){
				star.x++;
			} else {
				star.x--;
			}
			if (star.x >= this.totalWidth * 1.5){
				star.x = -5;
			}

			if (star.x < -5){
				star.x = this.totalWidth * 1.5;
			}


		} else {
			if (star.direction){
				star.y++;
			} else {
				star.y--;
			}
			if (star.y >= this.totalHeight * 1.5){
				star.y = -5;
			}

			if (star.y < -5){
				star.y = this.totalHeight * 1.5;
			}
		}

	};

	p.getColour = function(baseHue, alpha, lightness) {
		var hue = baseHue + (alpha * 100);
		hue = hue % 360;
		// var col = "hsl(" + Math.floor(hue) + ", " + SAT + ", " + LIGHTNESS + ")";
		// return col;
		var color = tinycolor.fromRatio({ h : (hue/360), s : SAT/100.0, l : lightness/100.0});
		return color.toHexString();
	};


	global.SpriteVisualiser = (global.module || {}).exports = SpriteVisualiser;

})(this);

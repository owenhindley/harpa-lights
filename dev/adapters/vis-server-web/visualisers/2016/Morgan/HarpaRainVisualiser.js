var HarpaVisualiserBase = require("../../common/HarpaVisualiserBase.js");
var Image = require("canvas").Image;

    var HarpaRainVisualiser = function() {

      // stores the current volume
      this.currentVolume = 0;

      // stores the current beat envelope / value
      this.currentBeatValue = 0;

      this.w = this.h = 36;

      //parameters
      this.total = 500;
      this.accelleration = 0;

      //afterinitial calculations
      this.size = 0;
      this.occupation = 0;
      this.repaintColor = 0;
      this.colors = [];
      this.dots = [];
      this.dotsVel = [];

      this.doItOneTime = true;
      // this.initPalettes();
    }

    var p = HarpaRainVisualiser.prototype = new HarpaVisualiserBase();


    p.randomColor = function(){
      return 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
    }

    // generate some palettes
    p.rgb = function(r,g,b){
       return "rgb(" + r.toString() + "," + g.toString() + "," + b.toString() + ")";
    }

    p.initPalettes = function(){

      //parameters
      this.total = this.w*2;
      this.accelleration = 1;

      //afterinitial calculations
      this.repaintColor = 'rgba(0, 0, 0, .1)';
      this.colors = [];
      this.dots = [];
      this.dotsVel = [];

      var portion = 360/this.total;
      for(var i = 0; i < 360; ++i){
        this.colors[i] = portion * i;

        this.dots[i] = this.h;
        this.dotsVel[i] = 10;
      }

    }

    p.render = function() {

      this.w = this.faces.front.width, this.h = this.faces.front.height;

      if(this.doItOneTime){
        this.initPalettes();
        this.doItOneTime = false;
      }

      this.size = this.occupation = this.w/this.total;

      // console.log("ntm");

      var ctxFront = this.frontCtx;
      var ctxSide = this.sideCtx;

      // console.log(this.size);

      ctxFront.fillStyle = ctxSide.fillStyle = this.repaintColor;
      ctxFront.fillRect(0, 0, this.w, this.h);
      ctxSide.fillRect(0, 0, this.w, this.h);

      for(var i = 0; i < this.total; ++i){
       var currentY = this.dots[i] - 1;
       this.dots[i] += this.dotsVel[i] += (this.currentVolume / 1000)*this.currentBeatValue/2 / this.h;

      //  console.log(this.dotsVel[i]);
      //  console.log(this.currentBeatValue * 1000);

       ctxFront.fillStyle = ctxSide.fillStyle = 'hsl('+ --this.colors[i] + ', 100%, 50%)';
       ctxFront.fillRect( ( this.occupation * i ) , currentY/2, this.size, this.dotsVel[i] + 1);
       ctxSide.fillRect( this.occupation * i  , currentY/2, this.size, this.dotsVel[i] + 1);

       if(this.dots[i] > this.h/100 && Math.random() < 0.1){
         this.dots[i] = this.dotsVel[i] = 0;
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
        }
    };

module.exports = HarpaRainVisualiser;
var HarpaVisualiserBase = require("../../common/HarpaVisualiserBase.js");
var Image = require("canvas").Image;

    var HarpaWeirdVisualiser = function() {
      // stores the current volume
      this.currentVolume = 0;

      // stores the current beat envelope / value
      this.currentBeatValue = 0;

      // public properties - exposed by GUI controls
      this.ShowFPS = false;
      this.PlasmaDensity = 64;
      this.TimeFunction = 2048;
      this.PlasmaFunction = 1 ;
      this.Alpha = 1.;
      this.PaletteIndex = 2;

      // internal properties
      this.paletteoffset = 0;
      this.palettes = [];

      this.initPalettes();
    }

    var p = HarpaWeirdVisualiser.prototype = new HarpaVisualiserBase();

    p.randomColor = function(){
      return 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
    }

    // generate some palettes
    p.rgb = function(r,g,b){
       return "rgb(" + r.toString() + "," + g.toString() + "," + b.toString() + ")";
    }

    p.initPalettes = function(){

      this.palettes = [];

      var palette = [];
      for (var i=0; i<256; i++)
      {
         palette.push(this.rgb(i,i,i));
      }
      this.palettes.push(palette);

      palette = [];
      for (var i=0; i<128; i++)
      {
         palette.push(this.rgb(i*2,i*2,i*2));
      }
      for (var i=0; i<128; i++)
      {
         palette.push(this.rgb(255-(i*2),255-(i*2),255-(i*2)));
      }
      this.palettes.push(palette);

      palette = new Array(256);
      for (var i = 0; i < 64; i++)
      {
         palette[i] = this.rgb(i << 2,255 - ((i << 2) + 1),64);
         palette[i+64] = this.rgb(255,(i << 2) + 1,128);
         palette[i+128] = this.rgb(255 - ((i << 2) + 1),255 - ((i << 2) + 1),192);
         palette[i+192] = this.rgb(0,(i << 2) + 1,255);
      }
      this.palettes.push(palette);

      palette = [];
      for (var i = 0,r,g,b; i < 256; i++)
      {
         r = ~~(128 + 128 * Math.sin(Math.PI * i / 32));
         g = ~~(128 + 128 * Math.sin(Math.PI * i / 64));
         b = ~~(128 + 128 * Math.sin(Math.PI * i / 128));
         palette.push(this.rgb(r,g,b));
      }
      this.palettes.push(palette);

      palette = [];
      for (var i = 0,r,g,b; i < 256; i++)
      {
          r = ~~(Math.sin(0.3 * i) * 64 + 190),
          g = ~~(Math.sin(0.3 * i + 2) * 64 + 190),
          b = ~~(Math.sin(0.3 * i + 4) * 64 + 190);
          palette.push(this.rgb(r,g,b));
      }
      this.palettes.push(palette);

    }


    p.render = function() {

      // console.log("CURRENT BEAT VALUE ||" + this.currentBeatValue)
      // console.log("CURRENT VOLUME VALUE || " + this.currentVolume)
      // console.log("test calcul = ", (Math.floor(this.currentBeatValue*100) + Math.floor(this.currentVolume/1000))%10);

      this.DisturbValue = ( Math.floor(this.currentBeatValue*100) + Math.floor(this.currentVolume/1000) )%5;
      //to prevent the animation of stopping.
      this.DisturbValue = this.DisturbValue == 0 ? 1 : this.DisturbValue;
      this.CycleSpeed = 1 * this.currentVolume < 3000 ? 0 : this.DisturbValue;


      // init context and img data buffer
       var w = this.faces.front.width, h = this.faces.front.height,                      // canvas width and height
           pw = this.PlasmaDensity , ph = (pw * (h/w)),    // plasma source width and height
           ctxFront = this.frontCtx,
           ctxSide = this.sideCtx,
           palette = this.palettes[this.PaletteIndex],
           paletteoffset = this.paletteoffset+=this.CycleSpeed,
           plasmafun = this.PlasmaFunction;

       // scale the plasma source to the canvas width/height
       var vpx = (w/pw), vpy = (h/ph);

       var dist = function dist(a, b, c, d)
       {
          return Math.sqrt((a - c) * (a - c) + (b - d) * (b - d));
       }

       var time = (Date.now() / this.TimeFunction);

       var colour = function colour(x, y)
       {
          switch (plasmafun)
          {
             case 1:
                return ((Math.sin(dist(x + time, y, 128.0 + time, 128.0 + time) / 8.0 + Math.cos(time))
                        + Math.sin(dist(x - time , y, 64.0 + time, 64.0 + time) / 8.0 + Math.cos(time))
                        + Math.sin(dist(x, y + time / 7, 192.0 + time, 64 + time) / 7.0 + Math.cos(time))
                        + Math.sin(dist(x, y, 192.0, 100.0) / 8.0 + time)) + 4 + time) * 32 + Math.cos(time);
                break;
             case 0:
                 //try with this values
                //  return (128 + (128 * Math.sin(x * y)) +
                //          128 + (128 * Math.sin(y * x)) +
                //          128 + (128 * Math.sin(dist(x + time, y - time, w, h) * 0.125)) +
                //          128 + (128 * Math.sin(Math.sqrt(x * x + y * y) * 0.125)) ) * 0.25;
                return (128 + (128 * Math.sin(x * 0.0625)) +
                        128 + (128 * Math.sin(y * 0.03125)) +
                        128 + (128 * Math.sin(dist(x + time, y - time, w, h) * 0.125)) +
                        128 + (128 * Math.sin(Math.sqrt(x * x + y * y) * 0.125)) ) * 0.25;
                break;
          }
       }

       ctxFront.save();
       ctxSide.save();

       ctxFront.globalAlpha = ctxSide.globalAlpha = this.Alpha;

       for (var y=0,x; y<ph; y++)
       {
          for (x=0; x<pw; x++)
          {
             // map plasma pixels to canvas pixels using the virtual pixel size
             ctxFront.fillStyle = ctxSide.fillStyle = palette[(~~colour(x, y) + paletteoffset ) % 256];
             ctxSide.fillRect(x * vpx , y * vpy , vpx, vpx);
             ctxFront.fillRect(x - 15 * vpx , y * vpy , vpx, vpy);

          }
       }
       ctxSide.restore();
       ctxFront.restore();
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

module.exports = HarpaWeirdVisualiser;
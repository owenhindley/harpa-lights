var HarpaVisualiserBase = require("../../common/HarpaVisualiserBase.js");
var net = {
  brehaut : {
    Color : require("./libs/color.js")
  }
};
var Canvas = require("canvas");
var Image = Canvas.Image;
var fs = require("fs");

    // Vars
    var tempo = 123;
    var beatMs = Math.round(1000 / (tempo/60));
    var num64PerLap = 200;

    var currentVolume;

    var emojiImg = new Image();
    var emojiLoaded = false;
    emojiImg.onload = function(evt) {
      console.log('loaded');
      emojiLoaded = true;
    };

    fs.readFile(__dirname + '/emojis-ios.png', function(err, spriteSheet){
      emojiImg.src = spriteSheet;
    });
    

    /*
        Example simple Visualiser class
    */
    var HarpaEomjiVisualiser = function() {

        // stores the current volume
        this.currentVolume = 0;

        // stores the current beat envelope / value
        this.currentBeatValue = 0;

        this.frame = 0;

        this.startTime = null;
        this.time = 0;
        this.lastBeatTime = Date.now();

        this.numBars = 0;
        this.numBeats = 0;
        this.numBeats16 = 0;
        this.numBeats64 = 0;
    }

    var p = HarpaEomjiVisualiser.prototype = new HarpaVisualiserBase();

    p.newEmoji = function(opts) {
      var _this = this;

      // Emoji
      var emojiRows = 32;
      var emojiCols = 30;
      var emojiSize = 32;

      var emojiCanvasSize = Math.min(_this.faces.front.width, _this.faces.front.height);

      var r = Math.floor(Math.random() * emojiRows);
      var c = Math.floor(Math.random() * emojiCols);
      var x = Math.random() * (_this.faces.front.width - _this.faces.front.height);

      return {
        update: function() {
          var emojiX = opts.crazyMode ? Math.random() * (_this.faces.front.width - _this.faces.front.height) : x;
          _this.frontCtx.drawImage(emojiImg, c * emojiSize, r * emojiSize, emojiSize, emojiSize, emojiX, 0, emojiCanvasSize, emojiCanvasSize);

          _this.sideCtx.drawImage(emojiImg, c * emojiSize, r * emojiSize, emojiSize, emojiSize, emojiX, 0, emojiCanvasSize, emojiCanvasSize);
        }
      };
    };

    /**
     * render
     */
    p.render = function() {

        if (this.startTime === null)
            this.startTime = Date.now();
        else
            this.time = Date.now() - this.startTime;

        this.frame++;

        var numBeats = Math.floor(this.time / beatMs);
        var numBeats16 = Math.floor(this.time / (beatMs / 4));
        var numBeats64 = Math.floor(this.time / (beatMs / 16));
        var numBars = Math.floor(numBeats / 4);

        // Front
        this.frontCtx.fillStyle = "black";
        this.sideCtx.fillStyle = "black";
        this.frontCtx.fillRect(0, 0, this.faces.front.width, this.faces.front.height);
        this.sideCtx.fillRect(0, 0, this.faces.front.width, this.faces.front.height);
        

        //this.frontCtx.clearRect(0, 0, this.faces.front.width, this.faces.front.height);
        //this.sideCtx.clearRect(0, 0, this.faces.side.width, this.faces.side.height);

        if (emojiLoaded && (!this.emoji || numBeats > this.numBeats)) {
          this.emoji = this.newEmoji({
            crazyMode: numBars % 24 >= 16
          });
        }

        if (this.emoji) {
          this.emoji.update();
        }

        this.numBeats = numBeats;
        this.numBeats16 = numBeats16;
        this.numBeats64 = numBeats64;
        this.numBars = numBars;
    };

    /**
     * singal
     */
    p.signal = function(channel, value) {

        // store volume values from channel 1
        if (channel == 1) {
            this.currentVolume = value;
        }

        // store beat values from channel 2
        if (channel == 2) {
            this.currentBeatValue = value;

            var now = Date.now();
            var diff = now - this.lastBeatTime;
            barMs = diff * 4;
            tempo = 60 / (barMs / 4000);
            this.lastBeatTime = now;
        }
    };

module.exports = HarpaEomjiVisualiser;
var HarpaVisualiserBase = require("../../common/HarpaVisualiserBase.js");
var net = {
  brehaut : {
    Color : require("./libs/color.js")
  }
};
var Canvas = require("canvas");
var Image = Canvas.Image;
var fs = require("fs");

var Color = net.brehaut.Color;

    // 123 bars / min
    // 2.05 bars / s
    // 1 bar = 0.488 s

    // var bpmInput = document.getElementById('bpmValue');
    var tempo = 120, barMs = 500;

    // function onBpmChange(evt) {
    //   tempo = bpmInput.value;
    //   barMs = Math.round(1000 / (tempo/60));
    // }
    // bpmInput.addEventListener('change', onBpmChange);
    // onBpmChange();

    // Vertical lines
    var vertLineColors = {
      base: Color([240, 230, 20]),
      tint: Color([230, 40, 180])
    };

    var currDot = { side: 'front', x: 0, y: 0 };

    console.log('barMs', barMs);

    /**
     * Returns a random number between min and max
     */
    function getRandomArbitary (min, max) {
        return Math.random() * (max - min) + min;
    }

    /**
     * Returns a random integer between min and max
     * Using Math.round() will give you a non-uniform distribution!
     */
    function getRandomInt (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getSinusAlpha(val) {
      return 0.5 + 0.5 * Math.sin(val);
    }

    /*
        Example simple Visualiser class
    */
    var LinesAndFishesVisualiser = function() {

        // stores the current volume
        this.currentVolume = 0;

        // stores the current beat envelope / value
        this.currentBeatValue = 0;

        this.volumes = [];
        this.beatValues = [];
        this.frame = 0;

        this.startTime = null;
        this.time = 0;
        this.bar = 0;
        this.bar16 = 0;
        this.bar64 = 0;

        this.fishes = [{
            pos: { x: 37, y: 0 },
            velocity: -0.1
        }, {
            pos: { x: 50, y: 0 },
            velocity: -0.1
        }, {
            pos: { x: 55, y: 0 },
            velocity: -0.1
        }, {
            pos: { x: 60, y: 0 },
            velocity: -0.1
        }];

        this.beat = {
            hasHit: false,
            strength: 0,
            matrix: null
        };
    }

    var p = LinesAndFishesVisualiser.prototype = new HarpaVisualiserBase();

    p.getAverageValue = function(arr, numSteps) {
        var slice = arr.slice(-numSteps);
        return slice.reduce(function(a, b) {
            return a + b;
        }, 0) / slice.length;
    }

    p.getDecibel = function(bins) {
        // console.log('bins', bins);
        var total = bins.reduce(function(a, b) {
            return a + b;
        }, []);
        var rms = Math.sqrt(total / bins.length);
        var db = 20 * (Math.log(rms) / Math.log(10));

        return db;
    }

    /**
     * render
     */
    p.render = function() {

        if (this.startTime === null)
            this.startTime = Date.now();
        else
            this.time = Date.now() - this.startTime;

        if (this.frame === 0) {
            this.numBinsPerBarFront = Math.round(128 / this.faces.front.width);
            this.numBinsPerBarSide = Math.round(128 / this.faces.side.width);

            this.beat.matrix = [];

            for (var row = 0; row < this.faces.front.height; row++) {
                this.beat.matrix.push([]);

                for (var col = 0; col < this.faces.front.width; col++) {
                    this.beat.matrix[row].push(0);
                }
            }
        }

        this.frame++;

        // Clear
        this.frontCtx.fillStyle = 'black';
        this.frontCtx.fillRect(0, 0, this.faces.front.width, this.faces.front.height);
        this.sideCtx.fillStyle = 'black';
        this.sideCtx.fillRect(0, 0, this.faces.side.width, this.faces.side.height);


        var numBars = Math.floor(this.time / barMs);
        var numBars16 = Math.floor(this.time / (barMs / 4));
        var numBars64 = Math.floor(this.time / (barMs / 16));

        if (this.beat.hasHit === false && this.currentBeatValue >= 0.6) {
            this.beat.hasHit = true;
            this.beat.strength = 1;
        }
        else {
            if (this.currentBeatValue <= 0.1)
                this.beat.hasHit = false;

            this.beat.strength -= 0.04;
        }

        if (numBars64 > this.bar64) {
            for (var row in this.beat.matrix) {
                this.beat.matrix[row] = this.beat.matrix[row].slice(0, -1);
                this.beat.matrix[row].unshift(this.currentVolume / 20000);
            }


        }

        if (numBars > this.bar) {
          var accentuateMainBeatWith = 1 + 3 * getSinusAlpha(-Math.PI / 2 + numBars / 10);
          for (var row in this.beat.matrix) {
              this.beat.matrix[row][0] *= accentuateMainBeatWith;
          }
        }

        for (var row in this.beat.matrix) {
            for (var col in this.beat.matrix[row]) {
                var opacity = Math.max(0, this.beat.matrix[row][col]);
                var color = Color([255, 255, 255]).setAlpha(opacity);

                this.frontCtx.fillStyle = color.toString();
                this.frontCtx.fillRect(col, row, 1, 1);

                this.sideCtx.fillStyle = color.toString();
                this.sideCtx.fillRect(this.faces.side.width - col, row, 1, 1);

                // Counter-lines
                if (numBars % 96 >= 64) {
                  var counterLineColor = color.setAlpha(Math.pow(opacity, 2));
                  this.frontCtx.fillStyle = counterLineColor.toString();
                  this.sideCtx.fillStyle = counterLineColor.toString();
                  this.frontCtx.fillRect(this.faces.front.width - col, row, 1, 1);
                  this.sideCtx.fillRect(col, row, 1, 1);
                }

                // Vertical lines
                if (numBars % 128 >= 64) {
                  var vertColor = vertLineColors.base.shiftHue(360 * (Math.sin(numBars16 / 40) / 2));
                  vertColor = vertColor.setAlpha(0.3 * Math.max(0, opacity));
                  // vertColor = color;
                  vertColor = vertColor.darkenByAmount(0.25 + 0.25 * Math.sin(numBars16 / 20));

                  if (col % 8 === numBars16 % 8) {
                    this.frontCtx.fillStyle = vertColor.toString();
                    this.frontCtx.fillRect(0, col, this.faces.front.width, 1);
                  }
                  else if (Math.abs(col % 8 - (numBars16 % 8)) === 4) {
                    this.sideCtx.fillStyle = vertColor.toString();
                    this.sideCtx.fillRect(0, this.faces.side.height - col, this.faces.side.width, 1);
                  }
                }
            }
        }

        if (numBars16 % numBars === 0) {
            this.frontCtx.fillStyle = "rgba(" + (numBars16 % 255) + ", " + (255 * Math.sin(0.01 * (numBars64 % 255))) + ", 0, 1)";
            this.frontCtx.fillRect(Math.round(this.faces.front.width / 2), Math.round(this.faces.front.height / 2), 1, 1);
        }

        // 16th dots
        if (numBars > 32 * 4) {

          // Move origin every beat
          var dotMode = numBars % 160 >= 96 ? 'random' : 'shake';
          if ((dotMode === 'shake' && numBars > this.bar) || (dotMode === 'random' && numBars16 > this.bar16)) {
            var side = Math.random() >= 0.5 ? 'side' : 'front';
            currDot = {
              side: side,
              x: getRandomInt(0, this.faces[side].width),
              y: getRandomInt(0, this.faces[side].height)
            };
          }

          var ctx = this[currDot.side + 'Ctx'];
          ctx.fillStyle = 'rgba(255,255,255,' + getSinusAlpha(-Math.PI / 2 + numBars / 10) + ')';

          if (dotMode === 'shake') {
            var shakeXAmount = 1 + (numBars16 % 4 >= 2 ? 1 : 0);
            var shakeX = numBars16 % 2 == 0 ? -shakeXAmount : shakeXAmount;
            ctx.fillRect(currDot.x + shakeX, currDot.y, 2, 2);
          }
          else {
            ctx.fillRect(currDot.x, currDot.y, 2, 2);
          }
        }

        // Fishes
        if (numBars64 > this.bar64 && numBars > 16 * 4) {
            for (var f in this.fishes) {
                var fish = this.fishes[f];
                fish.pos.x += fish.velocity;
                fish.pos.y = (this.faces.front.height * 0.5) + 0.5 * Math.sin(Math.cos(f + numBars16 / 40) * numBars64/20) * this.faces.front.height * Math.sin(numBars / 20);

                this.frontCtx.fillStyle = "rgba(0, 190, 255, 1)";
                this.frontCtx.fillRect(fish.pos.x, fish.pos.y, 1, 1);
                this.frontCtx.fillStyle = "rgba(0, 190, 255, 0.33)";
                this.frontCtx.fillRect(fish.pos.x + 1, fish.pos.y, 1, 1);
                this.frontCtx.fillStyle = "rgba(0, 190, 255, 0.1)";
                this.frontCtx.fillRect(fish.pos.x + 2, fish.pos.y, 1, 1);

                if (fish.pos.x <= 0)
                    fish.pos.x = this.faces.front.width;
            }

            this.frontCtx.fillStyle = "rgba(0,0,0,0)";
            this.frontCtx.lineWidth = 1;
        }

        this.bar = numBars;
        this.bar16 = numBars16;
        this.bar64 = numBars64;
    };

    /**
     * singal
     */
    p.signal = function(channel, value) {

        // store volume values from channel 1
        if (channel == 1) {
            this.currentVolume = value;
            this.volumes.push(value);
            this.volume = this.volumes.slice(0, 100);
            // console.log("volume = " + this.currentVolume);
        }

        // store beat values from channel 2
        if (channel == 2) {
            this.currentBeatValue = value;

            var now = Date.now();
            var diff = now - this.lastBeatTime;
            barMs = diff * 4;
            tempo = 60 / (barMs / 4000);
            this.lastBeatTime = now;
            // console.log("tempo = " + tempo);
            // console.log("barMs = " + barMs);
            // console.log("numBars = " + numBars);
        }
    };

module.exports = LinesAndFishesVisualiser;
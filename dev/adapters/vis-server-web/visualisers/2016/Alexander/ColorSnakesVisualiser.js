var HarpaVisualiserBase = require("../../common/HarpaVisualiserBase.js");
var net = {
  brehaut : {
    Color : require("./libs/color.js")
  }
};
var Canvas = require("canvas");
var Image = Canvas.Image;
var fs = require("fs");


/**
 * Decimal adjustment of a number.
 *
 * @param {String}  type  The type of adjustment.
 * @param {Number}  value The number.
 * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
 * @returns {Number} The adjusted value.
 */
function decimalAdjust(type, value, exp) {
  // If the exp is undefined or zero...
  if (typeof exp === 'undefined' || +exp === 0) {
    return Math[type](value);
  }
  value = +value;
  exp = +exp;
  // If the value is not a number or the exp is not an integer...
  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
    return NaN;
  }
  // Shift
  value = value.toString().split('e');
  value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
  // Shift back
  value = value.toString().split('e');
  return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
}

// Decimal round
if (!Math.round10) {
  Math.round10 = function(value, exp) {
    return decimalAdjust('round', value, exp);
  };
}
// Decimal floor
if (!Math.floor10) {
  Math.floor10 = function(value, exp) {
    return decimalAdjust('floor', value, exp);
  };
}
// Decimal ceil
if (!Math.ceil10) {
  Math.ceil10 = function(value, exp) {
    return decimalAdjust('ceil', value, exp);
  };
}

var Color = net.brehaut.Color;

    // Vars
    var tempo = 123;
    var beatMs = Math.round(1000 / (tempo/60));
    var num64PerLap = 200;

    // var numBeats = 0;
    // var numBeats16 = 0;
    // var numBeats64 = 0;

    var numBars = 0;
    var numBeats = 0;
    var numBackbeats = 0;
    var beatThreshold = 0.6;
    var isInsideBeatThreshold = false;
    var backbeatThreshold = 0.05;
    var isInsideBackbeatThreshold = false;

    var currentVolume;

    var mainColor = Color([255, 255, 255]);
    var currColor = mainColor.shiftHue(0);

    /*
        Example simple Visualiser class
    */
    var ColorSnakesVisualiser = function() {

        // stores the current volume
        this.currentVolume = 0;

        // stores the current beat envelope / value
        this.currentBeatValue = 0;

        this.frame = 0;

        this.startTime = null;
        this.time = 0;

        this.numBars = 0;
        this.numBeats = 0;
        this.numBackbeats = 0;

        this.rings = [];
        this.snakes = [];
        this.beams = [];
    }

    var p = ColorSnakesVisualiser.prototype = new HarpaVisualiserBase();

    p.ring = function(opts) {
        var _this = this;
        var size = 0;
        var color;

        if (opts.isNewBar) {
          mainColor = Color([Math.random() * 255, Math.random() * 255, Math.random() * 255]);
          currColor = mainColor.shiftHue(0);
        }
        else {
          currColor = currColor.darkenByAmount(0.06).desaturateByAmount(0.05).shiftHue(5);
        }

        color = currColor.shiftHue(0);

        return {
            done: false,
            update: function() {
                size += 0.04;
                var bounds = _this.faces.front;
                var radius = size * bounds.width;
                var alpha = opts.isBackbeat
                  ? -(1 - size)
                  : (1 - size * 0.5) * (1 + 0.2 * Math.cos(Date.now() / 10000));

                if (size > 4)
                    this.done = true;

                var ringColor = opts.isBackbeat
                  ? Color([255, 255, 255]).setAlpha(0.15)
                  : color.setAlpha(alpha);

                // Front
                _this.frontCtx.strokeStyle = ringColor.toString();
                _this.frontCtx.beginPath();
                _this.frontCtx.arc(0, bounds.height * 0.4, radius, 0, Math.PI * 2, true);
                _this.frontCtx.closePath();
                _this.frontCtx.stroke();

                // Side
                bounds = _this.faces.side;
                radius = size * bounds.width;
                _this.sideCtx.strokeStyle = ringColor.toString();
                _this.sideCtx.beginPath();
                _this.sideCtx.arc(bounds.width, bounds.height * 0.6, radius, 0, Math.PI * 2, true);
                _this.sideCtx.closePath();
                _this.sideCtx.stroke();
            }
        };
    }

    p.createSnake = function(opts) {
      opts.interval = opts.interval || beatMs / 4;

      var _this = this;
      var length = 8 + Math.round(Math.random() * 4);
      var direction = { x: 1, y: 0 };
      var tiles = [];
      for (var i = 0; i < length; i++) {
        tiles.push({ x: i - length, y: 0 });
      }

      var id = _this.snakes.length;
      var createdAt = _this.time;
      var lastUpdate = _this.time;
      var age = 0;
      var isDying = false;

      var ctx = _this[opts.side + 'Ctx'];
      var face = _this.faces[opts.side];

      function moveSnake() {
        var head = tiles[tiles.length - 1];
        tiles.shift();

        if (Math.random() >= 0.8) {
          changeDirection();
        }

        var newHead = getMovedTile(head, direction);
        tiles.push(newHead);
      }

      function changeDirection() {
        var possibleDirections = getPossibleDirections();
        direction = possibleDirections[Math.floor(Math.random() * possibleDirections.length)];
      }

      function getPossibleDirections() {
        var allDirections = [
          { x: 1, y: 0 },
          { x: -1, y: 0 },
          { x: 0, y: 1 },
          { x: 0, y: -1 }
        ];

        return allDirections.filter(function(dir) {
          var isInverted = (Math.abs(dir.x) > 0 && dir.x === -direction.x)
            || (Math.abs(dir.y) > 0 && dir.y === -direction.y);

          return !isInverted;
        });
      }

      function getMovedTile(pos, move) {
        var newTile = Object.assign({}, pos);
        newTile.x += move.x;
        newTile.y += move.y;

        if (newTile.x < 0)
          newTile.x = face.width;
        if (newTile.x > face.width)
          newTile.x = 0;

        if (newTile.y < 0)
          newTile.y = face.height;
        if (newTile.y > face.height)
          newTile.y = 0;

        return newTile;
      }

      return {
        update: function() {
          var timeSinceUpdate = _this.time - lastUpdate;
          var relVolume = _this.currentVolume / 16000;
          if (timeSinceUpdate * Math.pow(1 + relVolume, 2) >= opts.interval) {
            moveSnake();
            lastUpdate = _this.time;
          }

          age = _this.time - createdAt;
          var ageBeats = age / beatMs;
          var alpha = Math.round10(Math.max(0, 1 - (ageBeats / 10)), -2);

          var snakeColor = Color({ red: 255, green: 255, blue: 255, alpha: alpha });

          for (var i in tiles) {
            if (i == tiles.length - 1)
              ctx.fillStyle = currColor.shiftHue(180).saturateByAmount(1).toString();
            else
              ctx.fillStyle = 'rgba(255,255,255,' + alpha + ')';

            ctx.fillRect(tiles[i].x, tiles[i].y, 1, 1);
          }
        }
      };
    };

    p.createBeam = function() {
      var _this = this;

      var side = Math.random() >= 0.5 ? 'front' : 'side';
      var direction = Math.random() >= 0.5 ? 1 : -1;
      var axis = Math.random() >= 0.5 ? 'x' : 'y';
      var beamLength = 5 + Math.random() * 10;
      var beamStartTime = this.time + 0;
      var beamDuration = 500;

      // axis = 'x';
      // direction = -1;
      // side = 'front';

      var bounds = this.faces[side];

      var startX, startY, endX, endY, beamWidth, beamHeight;

      if (axis === 'x') {
        startX = direction === 1 ? -beamLength : bounds.width + beamLength;
        endX = direction === 1 ? bounds.width + beamLength : -beamLength;
        startY = endY = Math.round(bounds.height / 2);
        beamWidth = beamLength;
        beamHeight = 1;
      }
      else {
        startX = endX = Math.round(bounds.width / 2);
        startY = direction === 1 ? -beamLength : bounds.height + beamLength;
        endY = direction === 1 ? bounds.height + beamLength : -beamLength;
        beamWidth = 1;
        beamHeight = beamLength;
      }

      console.log({
        x: { start: startX, end: endX },
        y: { start: startY, end: endY }
      });

      return {
        done: false,
        update: function() {
          var timeElapsed = _this.time - beamStartTime;
          var distance = timeElapsed / beamDuration;

          if (distance > 2)
            this.done = true;

          _this[side + 'Ctx'].fillStyle = mainColor.shiftHue(90).setAlpha(1 - distance * 0.6).toString();
          _this[side + 'Ctx'].fillRect(
            startX + (direction * Math.abs(endX - startX) * distance),
            startY + (direction * Math.abs(endY - startY) * distance),
            beamWidth,
            beamHeight
          );
        }
      }
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

        // Beats
        if (isInsideBeatThreshold === false && this.currentBeatValue >= beatThreshold) {
          numBeats = this.numBeats + 1;
          isInsideBeatThreshold = true;
          console.log('beat', numBeats);
        }
        else if (this.currentBeatValue < beatThreshold) {
          isInsideBeatThreshold = false;
        }

        if (isInsideBackbeatThreshold === false && this.currentBeatValue < backbeatThreshold) {
          numBackbeats = this.numBackbeats + 1;
          isInsideBackbeatThreshold = true;
          console.log('backbeat', numBackbeats);
        }
        else if (this.currentBeatValue >= beatThreshold) {
          isInsideBackbeatThreshold = false;
        }

        numBars = Math.floor(numBeats / 4);
        var isNewBeat = numBeats > this.numBeats;
        var isNewBackbeat = numBackbeats > this.numBackbeats;
        var isNewBar = isNewBeat && numBeats % 4 === 0;

        // Front
        this.frontCtx.clearRect(0, 0, this.faces.front.width, this.faces.front.height);
        this.sideCtx.clearRect(0, 0, this.faces.side.width, this.faces.side.height);

        this.frontCtx.fillStyle = '#000000';
        this.frontCtx.fillRect(0, 0, this.faces.front.width, this.faces.front.height);

        this.sideCtx.fillStyle = '#000000';
        this.sideCtx.fillRect(0, 0, this.faces.side.width, this.faces.side.height);

        if (!this.rings) {
            this.rings = [this.ring({
              isNewBar: true
            })];
        }

        // Add beat rings
        if (isNewBeat && numBars % 32 >= 16) {
          this.rings.push(this.ring({
            isNewBar: numBeats % 4 === 0
          }));
        }

        if (isNewBackbeat && numBars >= 32 && numBeats % 70 > 45) {
          this.beams.push(this.createBeam());
        }

        this.rings = this.rings.filter(function(ring) {
            return ring.done === false;
        });

        this.rings.forEach(function(ring) {
            ring.update();
        });

        if (numBeats > this.numBeats && numBeats % 4 === 0) {
          if (this.snakes.length >= 20) {
            this.snakes.shift();
          }

          this.snakes.push(this.createSnake({
            interval: (beatMs / (1 + Math.random() * 10)),
            side: Math.random() >= 0.667 ? 'side' : 'front'
          }));
        }

        this.snakes.forEach(function (snake) {
          snake.update();
        });

        this.beams = this.beams.filter(function(beam) {
          return beam.done === false;
        })
        this.beams.forEach(function(beam) {
          beam.update();
        });

        this.numBeats = numBeats;
        this.numBackbeats = numBackbeats;
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
        }
    };

module.exports = ColorSnakesVisualiser;

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

    var currentVolume;

    var numBeats = 0;
    var beatThreshold = 0.5;
    var isInsideBeatThreshold = false;

    var frame = 0;
    var startTime = null;
    var _time = 0;

    var lapDurationBase = 26000;
    var lapDuration = lapDurationBase;

    var _lightning = null;
    var isLightning = false;
    var isRaining = false;
    var rainChangedAt = 0;
    var rainTime = 0;
    var seaLevel = 0.4;

    var sunStrategy = 'normal';

    var sunColor = {
        night: Color([218, 46, 0]),
        day: Color([255, 164, 0])
    };

    function timeOfDay(time) {
        var relTime = 0.5 * (1 - Math.cos(Math.PI * (_time / (lapDuration / 2))));
        return relTime;
    }

    function colorAtTime(daytime, colors) {
        var badWeather = badWeatherAmount();

        return colors.night.blend(colors.day, daytime)
          .desaturateByAmount(badWeather * 0.5)
          .darkenByAmount(badWeather * 0.15);
    }

    function badWeatherAmount() {
      return isRaining
        ? Math.min(1, rainTime / 2000)
        : Math.max(0, 1 - rainTime / 2000);
    }

    function getSunX(time) {
      return (time % lapDuration) / lapDuration;
    }

    function sky(opts) {
        var color = {
            night: Color([1, 20, 31]),
            day: Color([0, 65, 140])
        };

        return {
            update: function(ctx, bounds, time) {
                var skyColor = colorAtTime(timeOfDay(time), color);
                var lightenBy = 0;

                if (isInsideBeatThreshold) {
                    lightenBy = currentVolume / 200000;
                }

                if (_lightning && _lightning.isFlashing) {
                    lightenBy = 0.2;
                }

                skyColor = skyColor.lightenByAmount(lightenBy);
                ctx.fillStyle = skyColor.toString();
                ctx.fillRect(0, 0, bounds.width, bounds.height);
            }
        };
    }

    function sea(opts) {
        var color = {
            night: Color([0, 35, 255]),
            day: Color([0, 100, 255])
        };

        return {
            update: function(ctx, bounds, time) {
                var daytime = timeOfDay(time);
                var baseColor = colorAtTime(timeOfDay(time), color);
                var sunX = getSunX(time);
                var badWeather = badWeatherAmount();
                var currSeaLevel = isRaining
                  ? seaLevel * (1 - 0.2 * Math.sin(time / 600))
                  : seaLevel;

                for (var c = 0; c < bounds.width; c++) {
                    var colHeight = currSeaLevel * bounds.height + Math.sin(-time / 700 + c / 4) * bounds.height * 0.05 * (1 + badWeather);

                    var lingrad = ctx.createLinearGradient(0, bounds.height - colHeight, 0, bounds.height + colHeight);
                    var sunColorAtTime = colorAtTime(daytime, sunColor);
                    var sunBlend = 0.5 * Math.pow(1 - Math.abs(sunX - (c / bounds.width)), 4);
                    var blendColor = baseColor.blend(sunColorAtTime, sunBlend);
                    blendColor.lightenByRatio(daytime * 0.5);
                    // console.log('blend', c, sunX, sunBlend);
                    lingrad.addColorStop(0, blendColor.toString());
                    lingrad.addColorStop(1, baseColor.toString());

                    // ctx.fillStyle = lingrad.toString();
                    ctx.fillStyle = baseColor.toString();
                    ctx.fillRect(c, bounds.height - colHeight, 1, colHeight);
                }
            }
        };
    }

    function sun(opts) {
        return {
            size: opts.size,
            pos: {
                x: 0,
                y: 1
            },
            update: function(ctx, bounds, time) {
                var daytime = timeOfDay(time);

                this.pos.x = getSunX(time);
                this.pos.y = 0.25 + (1 - daytime) * 0.75;

                var beatSizeAmp = isInsideBeatThreshold
                  ? 1 + (0.4 * daytime * (currentVolume / 10000))
                  : 1;

                ctx.fillStyle = colorAtTime(daytime, sunColor).toString();
                ctx.beginPath();
                ctx.arc(
                    this.pos.x * bounds.width,
                    this.pos.y * bounds.height,
                    this.size * Math.min(bounds.width, bounds.height) * beatSizeAmp,
                    0,
                    Math.PI*2,
                    true
                );
                ctx.closePath();
                ctx.fill();
            }
        };
    }

    function cloud(opts) {
        var white = 100 + Math.random() * 100;

        return {
            width: opts.width,
            height: opts.height,
            pos: { x: opts.startX, y: Math.random() * 0.3 },
            velocity: 0.0005 + Math.random() * 0.003,
            color: Color([white, white, white, 0.4 + Math.random() * 0.4]),
            alpha: 0.25 + Math.random() * 0.5,
            update: function(ctx, bounds, time) {
                var daytime = timeOfDay(time);

                this.pos.x += this.velocity;

                // console.log(alpha, daytime, alpha * daytime);

                this.color.setAlpha(this.alpha * daytime);
                console.log(this.color.toCSS());
                ctx.fillStyle = this.color.toString();
                ctx.fillRect(this.pos.x * bounds.width, this.pos.y * bounds.height, opts.width * bounds.width, opts.height * bounds.height);

                if (this.pos.x > 1)
                    this.pos.x = opts.startX;
            }
        };
    }

    function clouds(numClouds) {
        var cloudArr = [];
        for (var i = 0; i < numClouds; i++) {
            cloudArr.push(cloud({
                width: 0.2 + Math.random() * 0.45,
                height: 0.05 + Math.random() * 0.1,
                startX: -(i * 0.4)
            }));
        }

        return {
            update: function(ctx, bounds, time) {
                cloudArr.forEach(function(cloud) {
                    cloud.update(ctx, bounds, time);
                });
            }
        };
    }

    function bird(opts) {
        return {
            color: Color([250, 250, 250]),
            velocity: 0.01 * (1 - Math.random() * 2),
            pos: { x: 0, y: 0 },
            update: function(ctx, bounds, time) {
                var daytime = timeOfDay(time);

                this.pos.x += this.velocity;
                this.pos.y = 0.2 + 0.5 * Math.sin(3 * this.velocity * (time / 80));

                ctx.fillStyle = this.color.darkenByAmount(1 - (0.5 + 0.5 * daytime)).toString();
                ctx.fillRect(this.pos.x * bounds.width, this.pos.y * bounds.height, 1, 1);

                // Don't fly in again when it's raining
                if (isRaining)
                  return;

                if (this.velocity >= 0 && this.pos.x > 1) {
                    this.pos.x = -this.velocity;
                }
                else if (this.velocity < 0 && this.pos.x < 0) {
                    this.pos.x = 1 + this.velocity;
                }
            }
        }
    }

    function birds(numBirds) {
        var birdsArr = [];
        for (var i = 0; i < numBirds; i++) {
            birdsArr.push(bird());
        }

        return {
            update: function(ctx, bounds, time) {
                birdsArr.forEach(function(bird) {
                    bird.update(ctx, bounds, time);
                });
            }
        };
    }

    function rainDrop(opts) {
        var velocity = {
            min: 0.01,
            max: 0.04
        };

        var pos = { x: opts.startX, y: Math.random() * 1.6 };
        var dropVelocity = velocity.min + (Math.random() * (velocity.max - velocity.min));

        function getDropAlpha() {
          return 0.8 * (1 - (dropVelocity / velocity.max));
        }

        var drop = {
            pos: pos,
            origin: Object.assign({}, pos),
            velocity: dropVelocity,
            color: Color([0, 150, 255, getDropAlpha()])
        };

        return {
            wind: opts.wind,
            update: function(ctx, bounds, time) {
                var alpha = badWeatherAmount() * getDropAlpha();

                drop.pos.x += Math.sin(time / 8000) * 0.005;
                drop.pos.y += drop.velocity + drop.velocity * (1 - 0.5 * Math.sin(time / 3000));

                ctx.fillStyle = Color(Object.assign({}, drop.color.toRGB(), { alpha: alpha })).toString();
                ctx.fillRect(drop.pos.x * bounds.width, drop.pos.y * bounds.height, 1, 1);

                if (drop.pos.y > 1.3) {
                    drop.pos.x = drop.origin.x;
                    drop.pos.y = -0.3;
                }
            }
        }
    }

    function rain(opts) {
        var drops = [];
        var wind = 0.01 - Math.random() * 0.02;

        for (var i = 0; i < opts.numDrops; i++) {
            drops.push(rainDrop({
                startX: i / opts.numDrops
            }));
        }

        return {
            update: function(ctx, bounds, time) {
              // if (isRaining) {
                drops.forEach(function(drop) {
                    drop.update(ctx, bounds, time);
                });
              // }
            }
        };
    }

    function flood(opts) {
        var color = {
            night: Color([0, 35, 255]),
            day: Color([0, 100, 255])
        };

        var posA = { x: 0, y: 3 };

        return {
            update: function(ctx, bounds, time) {
                var rgb = colorAtTime(timeOfDay(time), color).toRGB();

                for (var c = 0; c < bounds.width; c++) {
                    var alpha = 0.5 * (1 + Math.sin(-time / 700 + c / 4));
                    ctx.fillStyle = Color(Object.assign({}, rgb, { alpha: alpha })).toString(); //[rgb.red, rgb.green, rgb.blue, alpha]);

                    var y = posA.y + (bounds.height - posA.y) * (c / bounds.width);
                    ctx.fillRect(c, y - (0.5 + 1.5 * c / bounds.width), 1, 10);
                }
            }
        };
    }

    function lightning(opts) {
        var pos = {
            x: 0.25 + Math.random() * 0.5
        };

        var flashTimes = [0, 2, 6];
        var flashStart = _time + 0;

        return {
            isActive: true,
            isFlashing: false,
            side: opts.side,
            update: function(ctx, bounds, time) {
                if (!isRaining)
                    return;

                var flashTimeIndex = Math.floor((time - flashStart) / 50);
                if (flashTimeIndex > flashTimes[flashTimes.length - 1]) {
                    this.isActive = false;
                    this.isFlashing = false;
                    return;
                }

                if (flashTimes.indexOf(flashTimeIndex) >= 0) {
                    this.isFlashing = true;
                    ctx.strokeStyle = Color([150, 200, 250]).toString();
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.moveTo(pos.x * bounds.width, 0);
                    ctx.lineTo(pos.x * bounds.width, bounds.height * 0.75);
                    ctx.closePath();
                    ctx.stroke();
                }
                else {
                    this.isFlashing = false;
                }
            }
        };
    }


    /*
        Example simple Visualiser class
    */
    var OceanVisualiser = function() {

        // stores the current volume
        this.currentVolume = 0;

        // stores the current beat envelope / value
        this.currentBeatValue = 0;

        this.numBeats = 0;

        var seaLevel = 0.4;

        this.front = {
            sky: sky({}),
            sun: sun({ size: 0.3 }),
            rain: rain({ numDrops: 50 }),
            sea: sea(),
            birds: birds(5)
        };

        this.side = {
            sky: sky({}),
            // sea: sea({ level: 0.2 }),
            rain: rain({ numDrops: 50 }),
            flood: flood()
        };
    }

    var p = OceanVisualiser.prototype = new HarpaVisualiserBase();

    var s = HarpaVisualiserBase.prototype;

    p.init = function(frontWidth, frontHeight, sideWidth, sideHeight) {
        s.init(frontWidth, frontHeight, sideWidth, sideHeight);

        this.frontCtx.antialias = "subpixel";
        this.sideCtx.antialias = "subpixel";

    };

    /**
     * render
     */
    p.render = function() {

        if (startTime === null)
            startTime = Date.now();
        else
            _time = Date.now() - startTime;

        frame++;

        lapDuration = lapDurationBase - lapDurationBase * 0.15 * (0.5 * 2 - Math.sin(_time / 1000));

        // Beats
        if (isInsideBeatThreshold === false && this.currentBeatValue >= beatThreshold) {
          numBeats = this.numBeats + 1;
          isInsideBeatThreshold = true;
        }
        else if (this.currentBeatValue < beatThreshold) {
          isInsideBeatThreshold = false;
        }

        var isNewBeat = numBeats > this.numBeats;
        var isNewBar = isNewBeat && numBeats % 4 === 0;
        var numBars = Math.floor(numBeats / 4);

        if (isNewBeat) {
          console.log(numBeats, numBeats % 4);
        }

        if (isNewBar) {
          if (numBars % 9 === 0) {
            isRaining = !isRaining;
            rainChangedAt = _time;
          }
        }

        rainTime = _time - rainChangedAt;

        // Clear
        this.frontCtx.clearRect(0, 0, this.faces.front.width, this.faces.front.height);
        this.sideCtx.clearRect(0, 0, this.faces.side.width, this.faces.side.height);

        // Front
        for (var el in this.front) {
            this.front[el].update(this.frontCtx, this.faces.front, _time);
        }

        for (var el in this.side) {
            this.side[el].update(this.sideCtx, this.faces.side, _time);
        }

        if (numBeats === 2 && !this.front.clouds) {
            // this.front.clouds = clouds(4);
        }

        // Lightning
        if (numBeats % 16 === 0 && !_lightning) {
            _lightning = lightning({
                side: Math.random() >= 0.5 ? 'front' : 'side'
            });
        }
        else if (_lightning) {
            _lightning.update(this[_lightning.side + 'Ctx'], this.faces[_lightning.side], _time);

            if (!_lightning.isActive) {
                _lightning = null;
            }
        }

        this.frontCtx.fillStyle = 'red';
        // this.frontCtx.fillRect(0, this.currentBeatValue * this.faces.side.height, this.faces.side.width, 1);
        // this.frontCtx.fillRect(0, timeOfDay(_time) * this.faces.front.height, this.faces.front.width, 1);
        // console.log(timeOfDay(_time));

        // this.frontCtx.fillStyle = Color([255,255,255,currentVolume / 20000]);
        // this.frontCtx.fillRect(10, 5, 10, 10);

        this.numBeats = numBeats;
    };

    /**
     * singal
     */
    p.signal = function(channel, value) {

        // store volume values from channel 1
        if (channel == 1) {
            this.currentVolume = value;
            currentVolume = value;
        }

        // store beat values from channel 2
        if (channel == 2) {
            this.currentBeatValue = value;
        }
    };

module.exports = OceanVisualiser;
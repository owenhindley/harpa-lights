var HarpaVisualiserBase = require("../../../common/HarpaVisualiserBase.js");
var TWEEN = require("./Tween.js");
var tinycolor = require("./tinycolor.js");

    var LINE_HEIGHT = 1;
    var LINE_SPACING = 1;

    var SAT = 100;
    var BASE_HUE = 170;

    var LINE_SPEED = 1000;

    var SignalsVisualiser = function() {

        // stores the current volume
        this.currentVolume = 0;

        // stores the current beat envelope / value
        this.currentBeatValue = 0;

        this.lines = [];
        this.lineIndex = 0;

    };

    var p = SignalsVisualiser.prototype = new HarpaVisualiserBase();
    var s = HarpaVisualiserBase.prototype;


    p.init = function(frontWidth, frontHeight, sideWidth, sideHeight) {
        s.init.call(this, frontWidth, frontHeight, sideWidth, sideHeight);

        var numLines = Math.floor(this.totalHeight / (LINE_SPACING + LINE_HEIGHT));
        var y = 0;
        for (var i =0; i < numLines; i++){
            this.lines.push({
                y : y,
                index : i,
                value : 0.0,
                fade : 0.0,
                direction : false,
                moving : false
            });
            y += LINE_HEIGHT + LINE_SPACING;
        };
    };

    p.render = function() {

        TWEEN.update();

        this.frontCtx.clearRect(0,0,this.faces.front.width,this.faces.front.height);
        this.sideCtx.clearRect(0,0,this.faces.side.width,this.faces.side.height);
        this.combCtx.clearRect(0,0,this.totalWidth, this.totalHeight);

        for (var i=0; i < this.lines.length; i++){

            var line = this.lines[i];
            var val = 0;
            for (var x=0; x < this.totalWidth; x++){
                val = x / this.totalWidth;

                this.combCtx.save();
                if (!line.direction){
                  this.combCtx.scale(-1,1);
                  this.combCtx.translate(-this.totalWidth, 0);  
                } 
                
                this.combCtx.fillStyle = this.getColour(BASE_HUE + (val * 100), 
                    ((val > line.value) ? 0 : (val / line.value) * 100 * line.fade)
                    );
                this.combCtx.fillRect(x, line.y, 1, LINE_HEIGHT);
                this.combCtx.restore();

            }

        }

        this.drawToFaces(this.combinedCanvas);
    };

    p.fireSignal = function(index, direction){
        var line = this.lines[index];
        line.moving = true;
        var line = this.lines[index];
        line.direction = direction;
        line.value = 0.0;
        
        var tween = new TWEEN.Tween(line).to({ value : 1.0 }, LINE_SPEED).onComplete(function() {
            // line.moving = false;

        }).start();
        line.fade = 1.0;
        var fadeTween = new TWEEN.Tween(line).to({ fade : 0.0 }, LINE_SPEED/2).delay(LINE_SPEED).onComplete(function() {
            line.moving = false;
        }).start();
    };

    p.signal = function(channel, value) {

        // store volume values from channel 1
        if (channel == 1){
            this.currentVolume = value;
        }

        // store beat values from channel 2
        if (channel == 2){
            this.currentBeatValue = value;

            if (value > 0.5){
                var found = false;
                var tries = 0;
                while(!found && tries < 5){
                    var index = Math.floor(Math.random() * this.lines.length-1);
                    // var index = this.lineIndex;
                    // this.lineIndex++;
                    // this.lineIndex = this.lineIndex % this.lines.length;

                    if (this.lines[index] && !this.lines[index].moving){
                        this.fireSignal(index, Math.random() > 0.5);
                        // this.fireSignal(index, false);
                        found = true;
                    }
                    tries++;
                }

            }
        }
    };

    p.getColour = function(baseHue,lightness) {
        var hue = baseHue;
        hue = hue % 360;
        var color = tinycolor.fromRatio({ h : (hue/360), s : SAT/100.0, l : lightness/100.0});
        return color.toHexString();
    };

module.exports = SignalsVisualiser;
var HarpaVisualiserBase = require("../common/HarpaVisualiserBase.js");
//(function(global){

    var HarpaTestVisualiser = function() {};

    var p = HarpaTestVisualiser.prototype = new HarpaVisualiserBase();
    var s = HarpaVisualiserBase.prototype;

    var frame = 0;
    var currentVolume = 0;
    var currentBeatValue = 0;
    var front = {};
    var side = {};
    var phase = 0.0;
    var phase_increment = 0.04;
    var stretch = 0.05;

    p.init = function(frontWidth, frontHeight, sideWidth, sideHeight) {
        s.init.call(this, frontWidth, frontHeight, sideWidth, sideHeight);
        front = {
            width:  frontWidth,
            height: frontHeight,
            face:   this.faces.front,
            ctx:    this.frontCtx,
            p1:     { x:0, y:0, },
            p2:     { x:0, y:0, },
            d1:     { x:0, y:0, },
            d2:     { x:0, y:0, },
        }
        side = {
            width:  sideWidth,
            height: sideHeight,
            face:   this.faces.side,
            ctx:    this.sideCtx,
            p1:     { x:0, y:0, },
            p2:     { x:0, y:0, },
            d1:     { x:0, y:0, },
            d2:     { x:0, y:0, },
        }
    }

    p.render = function(){
        this.frontCtx.save();
        this.sideCtx.save();

        front.ctx.fillStyle = 'black';
        front.ctx.fillRect(0, 0, front.width, front.height);
        side.ctx.fillStyle = 'black';
        side.ctx.fillRect(0, 0, side.width, side.height);
        phase += phase_increment+(currentBeatValue*0.05);

        this.frontCtx.translate(this.faces.front.width/2,this.faces.front.height/2);
        this.frontCtx.scale(1 + currentBeatValue * 3, 1 + currentBeatValue * 3);
        this.frontCtx.translate(this.faces.front.width/-2,this.faces.front.height/-2);

        this.sideCtx.translate(this.faces.front.width/2,this.faces.front.height/2);
        this.sideCtx.scale(3 + currentBeatValue * 3, 3 + currentBeatValue * 3);
        this.sideCtx.translate(this.faces.front.width/-2,this.faces.front.height/-2);

        front.p1.x = (Math.sin(phase*1.000)+1.0) * 7.5;
        front.p1.y = (Math.sin(phase*0.310)+1.0) * 20.0;
        front.p2.x = (Math.cos(phase*1.770)+1.0) * 7.5;
        front.p2.y = (Math.cos(phase*1.865)+1.0) * 4.0;

        for (var row = 0; row < front.height; row++){
            for (var col = 0; col < front.width; col++) {
                front.d1.x = col - front.p1.x;
                front.d1.y = row - front.p1.y;
                front.d2.x = col - front.p2.x;
                front.d2.y = row - front.p2.y;

                var distance = (front.d1.x * front.d1.x) + (front.d1.y * front.d1.y);
                distance *= (front.d2.x * front.d2.x) + (front.d2.y * front.d2.y);
                distance = Math.sqrt(distance);

                var color = (Math.sin(distance * stretch ) + 1.0) * 0.5;
                color *= color*color*color*(currentVolume*0.0001);

                this.frontCtx.fillStyle = "rgba(255,255,255," + color + ")";
                this.frontCtx.fillRect(col,row,1,1);
            }
        }

        side.p1.x = (Math.sin(phase*1.000)+1.0) * 7.5;
        side.p1.y = (Math.sin(phase*0.310)+1.0) * 4.0;
        side.p2.x = (Math.sin(phase*1.770)+1.0) * 7.5;
        side.p2.y = (Math.sin(phase*1.865)+1.0) * 4.0;

        for (var row = 0; row < side.width; row++){
            for (var col = 0; col < side.height; col++) {
                side.d1.x = col - side.p1.x;
                side.d1.y = row - side.p1.y;
                side.d2.x = col - side.p2.x;
                side.d2.y = row - side.p2.y;

                var distance = (side.d1.x * side.d1.x) + (side.d1.y * side.d1.y);
                distance *= (side.d2.x * side.d2.x) + (side.d2.y * side.d2.y);
                distance = Math.sqrt(distance);

                var color = (Math.sin(distance * stretch ) + 1.0) * 0.5;
                color *= color*color*color*(currentVolume*0.0001);

                this.sideCtx.fillStyle = "rgba(255,255,255," + color + ")";
                this.sideCtx.fillRect(col,row,1,1);
            }
        }

        this.sideCtx.restore();
        this.frontCtx.restore();

        frame++;
    }

    p.signal = function(channel, value){
        if (channel == 1){
            this.currentVolume = value;
            currentVolume = this.currentVolume;
            this.beatFlip = !this.beatFlip;
        }
        if (channel == 2){
            this.currentBeatValue = value;
            currentBeatValue = this.currentBeatValue;
        }
    }

    global.HarpaTestVisualiser = (global.module || {}).exports = HarpaTestVisualiser;

    /* helpers */

    function r(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

//})(this);
module.exports = HarpaTestVisualiser
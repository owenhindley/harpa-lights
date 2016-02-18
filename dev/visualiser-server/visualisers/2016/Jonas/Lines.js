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
    var particles = [];
    var velocity = 0.4;

    p.init = function(frontWidth, frontHeight, sideWidth, sideHeight) {
        s.init.call(this, frontWidth, frontHeight, sideWidth, sideHeight);
        front = {
            width:  frontWidth,
            height: frontHeight,
            face:   this.faces.front,
            ctx:    this.frontCtx,
        }
        side = {
            width:  sideWidth,
            height: sideHeight,
            face:   this.faces.side,
            ctx:    this.sideCtx
        }
    }

    Particle = function(width,height,direction,face){
        this.x = 0;
        this.y = 0;
        switch (direction){
            case "up":
                this.x = r(0,face.width);
                this.y = face.height;
            break;
            case "down":
                this.x = r(0,face.width-1);
                this.y = 0;
            break;
            case "left":
                this.x = face.width;
                this.y = face.height-1;
            break;
            case "right":
                this.x = 0;
                this.y = r(0,face.height-1);
            break;
        }
        this.width = width;
        this.height = height;
        this.direction = direction;
        this.face = face;
        this.update = function(){
            switch (this.direction){
                case "up":
                    this.y -= velocity;
                break;
                case "down":
                    this.y += velocity;
                break;
                case "left":
                    this.x -= velocity;
                break;
                case "right":
                    this.x += velocity;
                break;
            }
        }
        this.draw = function(){
            this.face.getContext("2d").fillStyle = 'white';
            this.face.getContext("2d").fillRect(this.x,this.y,this.width,this.height);
        }
    }
    
    p.render = function(){
        front.ctx.fillStyle = 'black';
        front.ctx.fillRect(0, 0, front.width, front.height);
        side.ctx.fillStyle = 'black';
        side.ctx.fillRect(0, 0, side.width, side.height);
        if ((frame % 45) == 0) {
            particles.push(new Particle(1,r(front.height,1),"right",front.face,velocity));
            particles.push(new Particle(r(1,side.width),1,"up",side.face,velocity));
        }
        for (i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }
        frame++;
    }

    p.signal = function(channel, value){
        if (channel == 1){
            this.currentVolume = value;
            currentVolume = this.currentVolume;
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
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
    var velocity = 0.8;

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
        for (var i = 0; i < 20; i++){
            particles.push(new Particle(1,1,"up",front.face,velocity));
            particles.push(new Particle(1,1,"down",side.face,velocity));
        }
    }

    Particle = function(width,height,direction,face,velocity){
        this.width = width;
        this.height = height;
        this.direction = direction;
        this.face = face;
        this.velocity = 0.1 + Math.random()*velocity;
        this.x = r(0,face.width);
        this.y = r(0,face.height);
        this.update = function(){
            switch (this.direction){
                case "up":
                    this.y -= this.velocity;
                    if (this.y < 0){
                        this.x = r(0,face.width);
                        this.y = face.height + 1;
                    }
                break;
                case "down":
                    this.y += this.velocity;
                    if (this.y > face.height){
                        this.x = r(0,face.width);
                        this.y = 0;
                    }
                break;
                case "left":
                    this.x -= this.velocity;
                    if (this.x < 0){
                        this.x = face.width + 1;
                        this.y = r(0,face.height);
                    }
                break;
                case "right":
                    this.x += this.velocity;
                    if (this.x > face.width){
                        this.x = 0;
                        this.y = r(0,face.height);
                    }
                break;
            }
        }
        this.draw = function(){
            if (Math.round((Math.random()*100)) == 1){
                this.face.getContext("2d").fillRect(this.x-(this.width/2), this.y-(this.height/2), this.width*2, this.height*2);
                this.face.getContext("2d").fillStyle = 'white';
            } else {
                this.face.getContext("2d").fillRect(this.x, this.y, this.width, this.height);
                this.face.getContext("2d").fillStyle = 'white';
            }
        }
    }

    p.render = function(){
        front.ctx.fillStyle = 'black';
        front.ctx.fillRect(0, 0, front.width, front.height);
        side.ctx.fillStyle = 'black';
        side.ctx.fillRect(0, 0, side.width, side.height);
        for (i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }
    }

    p.signal = function(channel, value) {
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
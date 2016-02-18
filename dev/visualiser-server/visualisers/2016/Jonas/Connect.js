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
    }; 

    Particle = function() {
        this.r = 1;
        this.x = 0; 
        this.y = 0;
        this.dx = 0.1 - Math.random()*0.4;
        this.dy = 0.1 - Math.random()*0.4;
        this.force = this.r * 7;
        this.repulsion = 0.5;
    }

    p.createParticles = function(num, x, y, rand) {
        for (var i = 0; i < num; i++) {
            var pt = new Particle();
            pt.x = x-rand + Math.random()*(rand*2);
            pt.y = y-rand + Math.random()*(rand*2);
            particles.push(pt);
        }
    }

    p.removeParticles = function(x, y, range) {
        var dx,dy,distance;
        for (var i = 0; i < particles.length; i++) {
            dx = particles[i].x - x;
            dy = particles[i].y - y;
            distance = Math.sqrt(dx*dx + dy*dy);
            if (distance < range) {
                particles.splice(i, 1);
            }
        }
    }

    p.calcParticleDXY = function() {
        for (var i = 0; i < particles.length; i++) { 
            for (var j = 0; j < particles.length; j++) {
                if (i != j) { 
                    dx = particles[i].x - particles[j].x;
                    dy = particles[i].y - particles[j].y;
                    distance = Math.sqrt(dx*dx + dy*dy);
                    if (distance < particles[j].force) {
                        this.frontCtx.beginPath();
                        this.frontCtx.moveTo(particles[i].x,particles[i].y);
                        this.frontCtx.lineTo(particles[j].x,particles[j].y);
                        this.frontCtx.stroke();
                        particles[i].dx += (dx/distance) * particles[j].repulsion * (particles[j].force - distance)/particles[j].force;
                        particles[i].dy += (dy/distance) * particles[j].repulsion * (particles[j].force - distance)/particles[j].force;
                    }
                }
            }
            if (particles[i].x < 0 || particles[i].x > this.faces.front.width ) particles[i].dx *= -0.8;
            if (particles[i].y < 0 || particles[i].y > this.faces.front.height ) particles[i].dy *= -0.8;
            particles[i].dx -= particles[i].dx/100;
            particles[i].dy -= particles[i].dy/100;
        }
    }
        
    p.particleMove = function() {
        for (i = 0; i < particles.length; i++) {
            particles[i].x += particles[i].dx;
            particles[i].y += particles[i].dy;
        }   
    }

    p.render = function(){
        front.ctx.fillStyle = 'black';
        front.ctx.fillRect(0, 0, front.width, front.height);
        side.ctx.fillStyle = 'black';
        side.ctx.fillRect(0, 0, side.width, side.height);
        front.ctx.fillStyle = side.ctx.fillStyle = 'white';
        front.ctx.strokeStyle = side.ctx.strokeStyle = 'white';
        this.particleMove();
        this.calcParticleDXY();
        for (i = 0; i < particles.length; i++) {              
            front.ctx.beginPath();
            front.ctx.arc(particles[i].x, particles[i].y, particles[i].r, 0, Math.PI*2, true);
            front.ctx.fill();        
            side.ctx.beginPath();
            side.ctx.arc(particles[i].x, particles[i].y, particles[i].r, 0, Math.PI*2, true);
            side.ctx.fill();
        }
        if ((frame % 30) == 0) {
            this.removeParticles(0, 0, 20);
            this.createParticles(2, r(1,10), r(1,10), 5);
        }
        frame++;
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
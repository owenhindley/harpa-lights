var HarpaVisualiserBase = require("../../common/HarpaVisualiserBase.js");
//(function(global){

    var HarpaTestVisualiser = function() {};

    var p = HarpaTestVisualiser.prototype = new HarpaVisualiserBase();
    var s = HarpaVisualiserBase.prototype;

    var frame = 0;
    var currentVolume = 0;
    var currentBeatValue = 0;
    var combined = {};
    var particles = [];
    var velocity = 0.4;

    p.init = function(frontWidth, frontHeight, sideWidth, sideHeight) {
        s.init.call(this, frontWidth, frontHeight, sideWidth, sideHeight);
        combined = {
            width:  this.totalWidth,
            height: this.totalHeight
        }
    }; 

    Particle = function() {
        this.r = 1;
        this.x = Math.random()*combined.width; 
        this.y = Math.random()*combined.height;
        this.dx = 0.1 - Math.random()*0.4;
        this.dy = 0.1 - Math.random()*0.4;
        this.force = this.r * 7;
        this.repulsion = 0.3;
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
                        this.combCtx.beginPath();
                        this.combCtx.moveTo(particles[i].x,particles[i].y);
                        this.combCtx.lineTo(particles[j].x,particles[j].y);
                        this.combCtx.stroke();
                        particles[i].dx += (dx/distance) * particles[j].repulsion * (particles[j].force - distance)/particles[j].force;
                        particles[i].dy += (dy/distance) * particles[j].repulsion * (particles[j].force - distance)/particles[j].force;
                    }
                }
            }
        console.log(this.combinedCanvas.width,this.combinedCanvas.height);
            if (particles[i].x < 0 || particles[i].x > this.combinedCanvas.width ) particles[i].dx *= -0.8;
            if (particles[i].y < 0 || particles[i].y > this.combinedCanvas.height ) particles[i].dy *= -0.8;
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
        this.combCtx.fillStyle = 'black';
        this.combCtx.fillRect(0, 0, this.combinedCanvas.width, this.combinedCanvas.height);
        this.particleMove();
        this.calcParticleDXY();
        this.combCtx.fillStyle = 'rgba(255,255,255,0.5)';
        this.combCtx.strokeStyle = 'white';
        if (this.currentBeatValue == 1){
            this.currentBeatValue = 0;
        //if ((frame % 30) == 0) {
            this.combCtx.fillStyle = 'rgba(255,255,255,0.5)';
            this.removeParticles(0, 0, 40);
            this.createParticles(8, r(1,20), r(1,20), 2);
        }
        for (i = 0; i < particles.length; i++) {              
            this.combCtx.beginPath();
            this.combCtx.arc(particles[i].x, particles[i].y, particles[i].r, 0, Math.PI*2, true);
            this.combCtx.fill();        
        }
        this.drawToFaces(this.combinedCanvas);
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
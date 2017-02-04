var HarpaVisualiserBase = require("../../common/HarpaVisualiserBase.js");

    /*

        Example simple Visualiser class

    */

    var BlockVisualiser = function() {

        // stores the current volume
        this.currentVolume = 0;

        // stores the current beat envelope / value
        this.currentBeatValue = 0;

        this.beatHist = [];

        this.counter = 1;
        this.dir = .01;

        // this.scaleDir = 0.01;

        this.blocks = [];
        this.sideBlocks = [];



    }

    var p = BlockVisualiser.prototype = new HarpaVisualiserBase();

    BlockVisualiser.NOTE_HIST_LENGTH = 10;


    p.render = function() {

        this.frontCtx.save();

        // this.frontCtx.globalCompositeOperation = "source-over";
        // this.frontCtx.fillStyle = "black";
        // this.frontCtx.fillRect(0,0,this.faces.front.width,this.faces.front.height);
        this.frontCtx.clearRect(0,0,this.faces.front.width,this.faces.front.height);

        if (this.blocks.length == 0)
            this.blocks = this.createBlocks();


        this.frontCtx.globalCompositeOperation = "difference";
        for (var i=0;i<this.blocks.length;i++){
            // this.frontCtx.fillStyle = 'rgba('+this.blocks[i].color[0]+', '+this.blocks[i].color[1]+', '+this.blocks[i].color[2]+',1)';
            this.frontCtx.fillStyle = "white";
            var xMod = Math.sin(((i-this.blocks.length) / this.blocks.length) * Math.PI) * this.currentBeatValue * 40 / 13;
            var yMod = Math.cos(((i-this.blocks.length) / this.blocks.length) * Math.PI) * this.currentBeatValue * 50 / 13;


            this.blocks[i].scale += this.blocks[i].scaleDir;
            this.blocks[i].x += this.blocks[i].xDir;
            this.blocks[i].y += this.blocks[i].yDir;

            // this.blocks[i].scale = yMod;
            this.frontCtx.save();
            // this.frontCtx.translate(this.blocks[i].x + this.blocks[i].w * .5 , this.blocks[i].y + this.blocks[i].h * .5);
            // // this.frontCtx.translate(this.faces.front.width/2, this.faces.front.height/2);
            
            // this.frontCtx.scale(this.blocks[i].scale + this.beatHist[i * 2], this.blocks[i].scale + this.beatHist[i*2]);
            // this.frontCtx.rotate(this.blocks[i].scale);
            
            
            

            
            // this.frontCtx.fillStyle = 'rgba('+Math.floor(Math.random() * 250)+', '+Math.floor(Math.random() * 255)+', '+Math.floor(Math.random() * 255)+',1.0)';
            this.frontCtx.fillRect(this.blocks[i].w/-2, this.blocks[i].h/-2, this.blocks[i].w, this.blocks[i].h);
            this.frontCtx.restore();
            // console.log(i * 20);

            if (this.blocks[i].scale > 3.8){
                // this.blocks[i].scaleDir = -.05 * Math.random();
                this.blocks[i].scaleDir = -.01;
                // var initScale = .05;
                // this.blocks[i].scale = (this.blocks[i].rowIdx + 1) * initScale + (this.blocks[i].colIdx + 1) * initScale;
            }else if (this.blocks[i].scale < .2)
                // this.blocks[i].scaleDir = .05 * Math.random();
                this.blocks[i].scaleDir = 0.01;

            if (this.blocks[i].x < 0){
                this.blocks[i].xDir = .1;
            }else if (this.blocks[i].x > this.faces.front.width)
                this.blocks[i].xDir = -.2;

            if (this.blocks[i].y < 0){
                this.blocks[i].yDir = .2;
            }else if (this.blocks[i].y > this.faces.front.height)
                this.blocks[i].yDir = -.1;
        }
        
       


        this.frontCtx.globalCompositeOperation = "source-in";

        this.frontCtx.fillStyle = 'purple';
        // this.frontCtx.fillRect(0,0,this.faces.front.width, this.faces.front.height);

        this.frontCtx.restore();

        this.renderSide();

    };

    p.renderSide = function(){

        this.sideCtx.save();

        
        this.sideCtx.fillStyle = "black";
        this.sideCtx.fillRect(0,0,this.faces.side.width,this.faces.side.height);

        if (this.sideBlocks.length == 0)
            this.sideBlocks = this.createSideBlocks();

        
        this.counter += this.dir;
        if (this.counter >= 2)
            this.dir = -.001;
        else if (this.counter <= 1)
            this.dir = .001;
    

        this.sideCtx.globalCompositeOperation = "color";

        for (var i=0;i<this.sideBlocks.length;i++){
            // this.sideCtx.fillStyle = 'rgba('+this.sideBlocks[i].color[0]+', '+this.sideBlocks[i].color[1]+', '+this.sideBlocks[i].color[2]+',1)';
            this.sideCtx.fillStyle = "white";
            var xMod = Math.sin(((i-this.sideBlocks.length) / this.sideBlocks.length) * Math.PI) * this.counter;
            var yMod = Math.cos(((i-this.sideBlocks.length) / this.sideBlocks.length) * Math.PI) * this.currentBeatValue * 50 / 13;


            this.sideBlocks[i].scale += this.sideBlocks[i].scaleDir;
            this.sideBlocks[i].x += this.sideBlocks[i].xDir;
            this.sideBlocks[i].y += this.sideBlocks[i].yDir;

            // this.sideBlocks[i].scale = xMod;
            this.sideCtx.save();
            this.sideCtx.translate(this.sideBlocks[i].x + this.sideBlocks[i].w * .5 , this.sideBlocks[i].y + this.sideBlocks[i].h * .5);
            // this.frontCtx.translate(this.faces.front.width/2, this.faces.front.height/2);
            
            this.sideCtx.scale(this.sideBlocks[i].scale + this.beatHist[i], this.sideBlocks[i].scale + this.beatHist[i]);
            this.sideCtx.rotate(this.sideBlocks[i].scale * 2);
            
            // this.frontCtx.fillStyle = 'rgba('+Math.floor(Math.random() * 250)+', '+Math.floor(Math.random() * 255)+', '+Math.floor(Math.random() * 255)+',1.0)';
            this.sideCtx.fillRect(this.sideBlocks[i].w/-2, this.sideBlocks[i].h/-2, this.sideBlocks[i].w, this.sideBlocks[i].h);
            this.sideCtx.restore();
            // console.log(i * 20);

            if (this.sideBlocks[i].scale > 2.2){
                // this.blocks[i].scaleDir = -.05 * Math.random();
                this.sideBlocks[i].scaleDir = -.01;
                // var initScale = .05;
                // this.blocks[i].scale = (this.blocks[i].rowIdx + 1) * initScale + (this.blocks[i].colIdx + 1) * initScale;
            }else if (this.sideBlocks[i].scale < .05)
                // this.blocks[i].scaleDir = .05 * Math.random();
                this.sideBlocks[i].scaleDir = 0.01;


            if (this.sideBlocks[i].x < 0){
                this.sideBlocks[i].xDir = .1;
            }else if (this.sideBlocks[i].x > this.faces.side.width)
                this.sideBlocks[i].xDir = -.3;

            if (this.sideBlocks[i].y < 0){
                this.sideBlocks[i].yDir = .2;
            }else if (this.sideBlocks[i].y > this.faces.side.height)
                this.sideBlocks[i].yDir = -.1;
        }
        
       


        this.sideCtx.globalCompositeOperation = "source-in";

        this.sideCtx.fillStyle = 'purple';
        // this.frontCtx.fillRect(0,0,this.faces.front.width, this.faces.front.height);

        this.sideCtx.restore();

    };

    p.createBlocks = function(){

        var nrBlocksW = 2;
        var nrBlocksH = 2;
        var blocks = [];

        var blockW = this.faces.front.width / nrBlocksW;
        var blockH = this.faces.front.height / nrBlocksH;
        var rowIdx = 0;
        var colIdx = 0;
        var initScale = .05;
        for (var i=0;i<nrBlocksW;i++){
            for (var q=0;q<nrBlocksH;q++){
                var block = {w: blockW, h: blockH};
                block.x = i * block.w;
                block.y = q * block.h;
                block.rowIdx = i;
                block.colIdx = q;
                block.scale = (i + 1) * initScale + (q + 1) * initScale;
                block.scaleDir = 0.01 * (i+1) + (q + 1) * 0.01;
                block.color = [Math.round(Math.random() * 255), Math.round(Math.random() * 255), Math.round(Math.random() * 255)];
                block.rotate = .2 * block.scale;
                block.xDir = .1;
                block.yDir = .1;

                blocks.push(block);
            }
        }

        return blocks.slice(0);

    };

     p.createSideBlocks = function(){

        var nrBlocksW = 3;
        var nrBlocksH = 2;
        var blocks = [];

        var blockW = this.faces.side.width / nrBlocksW;
        var blockH = this.faces.side.height / nrBlocksH;
        var rowIdx = 0;
        var colIdx = 0;
        var initScale = .05;
        for (var i=0;i<nrBlocksW;i++){
            for (var q=0;q<nrBlocksH;q++){
                var block = {w: blockW, h: blockH};
                block.x = i * block.w;
                block.y = q * block.h;
                block.rowIdx = i;
                block.colIdx = q;
                block.scale = (i + 1) * initScale + (q + 1) * initScale;
                block.scaleDir = 0.01 * (i+1) + (q + 1) * 0.01;
                block.color = [Math.round(Math.random() * 255), Math.round(Math.random() * 255), Math.round(Math.random() * 255)];
                block.rotate = .2 * block.scale;
                block.xDir = .1;
                block.yDir = .1;

                blocks.push(block);
            }
        }

        return blocks.slice(0);

    };

    p.signal = function(channel, value) {

        // store volume values from channel 1
        if (channel == 1){
            this.currentVolume = value;
        }

        // store beat values from channel 2
        if (channel == 2){
            this.currentBeatValue = value;
            this.beatHist.unshift(value);
            if (this.beatHist.length > BlockVisualiser.NOTE_HIST_LENGTH)
                this.beatHist.pop();
        }
    };

module.exports = BlockVisualiser;
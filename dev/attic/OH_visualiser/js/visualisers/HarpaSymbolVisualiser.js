(function(global){

    /*

        Symbol Visualiser

    */

    var HarpaSymbolVisualiser = function() {

        // stores the current volume
        this.currentVolume = 0;

        // stores the current beat envelope / value
        this.currentBeatValue = 0;

        this.updateCounter = 0;



    }

    var p = HarpaSymbolVisualiser.prototype = new HarpaVisualiserBase();
    var s = HarpaVisualiserBase.prototype;

    p.init = function(frontWidth, frontHeight, sideWidth, sideHeight) {
        s.init.call(this, frontWidth, frontHeight, sideWidth, sideHeight);

        this.frontCtx.font = "8pt 'Minecraft 1.0'";
        this.frontCtx.textAlign = "center";

    }



    p.render = function() {

        this.updateCounter++;
        if (this.updateCounter > 5){
            this.updateCounter = 0;
        } else {
            return;
        }

        this.frontCtx.fillStyle = "black";
        this.frontCtx.fillRect(0,0,this.faces.front.width, this.faces.front.height);
        this.frontCtx.save();
        this.frontCtx.scale(2,1);
        this.frontCtx.fillStyle = "white";
        // this.frontCtx.translate(this.faces.front.width/2, this.faces.front.height/2);
        // this.frontCtx.rotate(Math.floor((Math.random() * 4)) * Math.PI);
        // this.frontCtx.translate(-this.faces.front.width/2, -this.faces.front.height/2);
        var character = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 1);
        this.frontCtx.fillText(character, 10 , 12);
        this.frontCtx.restore();

    };

    p.signal = function(channel, value) {

        // store volume values from channel 1
        if (channel == 1){
            this.currentVolume = value;
        }

        // store beat values from channel 2
        if (channel == 2){
            this.currentBeatValue = value;
        }
    };


    global.HarpaSymbolVisualiser = (global.module || {}).exports = HarpaSymbolVisualiser;

})(this);

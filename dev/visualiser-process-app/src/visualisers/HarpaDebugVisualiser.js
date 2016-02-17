  /*

        Example simple Visualiser class

    */

    var HarpaTestVisualiser = function() {

        // stores the current volume
        this.currentVolume = 0;

        // stores the current beat envelope / value
        this.currentBeatValue = 0;

        this.player = document.getElementById('player');

        this.colorIndexA = 0;
        this.colorIndexB = 0;
    }

    var p = HarpaTestVisualiser.prototype = new HarpaVisualiserBase();


    p.render = function() {

        this.colorIndexA++;
        this.colorIndexB++;

        this.colorIndexA = this.colorIndexA % 255;
        this.colorIndexB = this.colorIndexB % 255;

        this.frontCtx.clearRect(0,0,this.faces.front.width,this.faces.front.height);
        this.sideCtx.clearRect(0,0,this.faces.side.width,this.faces.side.height);

        this.frontCtx.fillStyle = "rgb(" + this.colorIndexA + ", 255, 255)";
        this.sideCtx.fillStyle = "rgb(" + this.colorIndexB + ", 255, 255)";

        this.frontCtx.fillRect(0,this.faces.front.width,this.faces.front.height);
        this.sideCtx.fillRect(0,this.faces.side.width,this.faces.side.height);

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

module.exports = HarpaTestVisualiser;
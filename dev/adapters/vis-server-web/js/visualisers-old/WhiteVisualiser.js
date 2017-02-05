(function(global){

    /*

        Example simple Visualiser class

    */

    var HarpaWhiteVisualiser = function() {

        // stores the current volume
        this.currentVolume = 0;

        // stores the current beat envelope / value
        this.currentBeatValue = 0;

        this.player = document.getElementById('player');
    }

    var p = HarpaWhiteVisualiser.prototype = new HarpaVisualiserBase();


    p.render = function() {

       this.drawBeats();
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

    p.drawVideo = function() {

        if (this.player.paused || this.player.ended) return false;

        this.sideCtx.drawImage(this.player, 0, 0, this.faces.side.width, this.faces.side.height);
        this.frontCtx.drawImage(this.player, 0, 0, this.faces.front.width, this.faces.front.height);
    }

    p.drawBeats = function() {

        // ** Volume visualisation **

        // render white on the front

        this.frontCtx.clearRect(0,0,this.faces.front.width,this.faces.front.height);

        this.frontCtx.fillStyle = "white";

        this.frontCtx.fillRect(0,0, this.faces.front.width, this.faces.front.height);

        // render white on the side


        this.sideCtx.clearRect(0,0,this.faces.side.width,this.faces.side.height);

        this.sideCtx.fillStyle = "white";


        this.sideCtx.fillRect(0,0, this.faces.side.width, this.faces.side.height);

    }


    global.HarpaWhiteVisualiser = (global.module || {}).exports = HarpaWhiteVisualiser;

})(this);

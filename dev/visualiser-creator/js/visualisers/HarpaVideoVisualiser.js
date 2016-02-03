(function(global){

    /*

        Example simple Visualiser class

    */

    var HarpaTestVisualiser = function() {

        // stores the current volume
        this.currentVolume = 0;

        // stores the current beat envelope / value
        this.currentBeatValue = 0;

        this.player = document.getElementById('player');
    }

    var p = HarpaTestVisualiser.prototype = new HarpaVisualiserBase();


    p.render = function() {

        if (this.player.paused || this.player.ended) return false;

        this.sideCtx.drawImage(this.player, 0, 0, this.faces.side.width, this.faces.side.height);
        this.frontCtx.drawImage(this.player, 0, 0, this.faces.front.width, this.faces.front.height);

        // See HarpaTestVisualiser.js for example of using beat and volume information
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

    global.HarpaTestVisualiser = (global.module || {}).exports = HarpaTestVisualiser;

})(this);

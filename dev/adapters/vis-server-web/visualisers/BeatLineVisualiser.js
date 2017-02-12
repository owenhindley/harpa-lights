(function(global){


    var LINE_HEIGHT = 1;
    var LINE_SPACING = 1;

    



    var BeatLineVisualiser = function() {

        // stores the current volume
        this.currentVolume = 0;

        // stores the current beat envelope / value
        this.currentBeatValue = 0;

        this.lineIndex = 0;
        this.lineTween = null;
        this.BEAT_INTERVAL = 1000;
        this.lastBeat = Date.now();

    };

    var p = BeatLineVisualiser.prototype = new HarpaVisualiserBase();
    var s = HarpaVisualiserBase.prototype;


    p.init = function(frontWidth, frontHeight, sideWidth, sideHeight) {
        s.init.call(this, frontWidth, frontHeight, sideWidth, sideHeight);

        
    };

    p.render = function() {

        TWEEN.update();

        this.frontCtx.clearRect(0,0,this.faces.front.width,this.faces.front.height);
        this.sideCtx.clearRect(0,0,this.faces.side.width,this.faces.side.height);

        this.combCtx.globalAlpha = 0.1;
        this.combCtx.fillStyle = "black";
        this.combCtx.fillRect(0,0,this.totalWidth, this.totalHeight);

        this.combCtx.globalAlpha = 1.0;
        this.combCtx.fillStyle = "white";
        this.combCtx.fillRect(0, this.lineIndex, this.totalWidth, LINE_HEIGHT);

        this.drawToFaces(this.combinedCanvas);
    };

    p.fireSignal = function(){
       if (this.lineTween){
        this.lineTween.stop();
       }
       this.lineIndex = 0;
       this.lineTween = new TWEEN.Tween(this).to({ lineIndex : this.totalHeight }, this.BEAT_INTERVAL).start();
       this.lastBeat = Date.now();
    };

    p.signal = function(channel, value) {

        // store volume values from channel 2
        if (channel == 2){
            this.currentVolume = value;
        }

        // store beat values from channel 1
        if (channel == 1){
            this.currentBeatValue = value;

            if (value == 1){
                this.BEAT_INTERVAL = Date.now() - this.lastBeat;

                this.fireSignal();

            }
        }
    };

    p.getColour = function(baseHue,lightness) {
        var hue = baseHue;
        hue = hue % 360;
        var color = tinycolor.fromRatio({ h : (hue/360), s : SAT/100.0, l : lightness/100.0});
        return color.toHexString();
    };

 global.BeatLineVisualiser = (global.module || {}).exports = BeatLineVisualiser;

})(this);
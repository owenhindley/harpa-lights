var Canvas = require("canvas");
var HarpaVisualiserBase = require("../common/HarpaVisualiserBase.js");
var HarpaMeshColorVisualiser = require("../liamBirds/HarpaMeshColorVisualiser.js");
var SimpleVideoPlayer = require("../simpleVideoPlayer/SimpleVideoPlayer.js");
var SimpleBeatBar = require("./SimpleBeatLinesVisualiser.js");

    /*

        Example simple Visualiser class

    */

    var HarpaTestVisualiser = function() {  

        // stores the current volume
        this.currentVolume = 0;

        // stores the current beat envelope / value
        this.currentBeatValue = 0;

    }

    var p = HarpaTestVisualiser.prototype = new HarpaVisualiserBase();
    var s = HarpaVisualiserBase.prototype;

    p.init = function(frontWidth, frontHeight, sideWidth, sideHeight) {
        s.init.call(this, frontWidth, frontHeight, sideWidth, sideHeight);

        this.videoPlayer = new SimpleVideoPlayer();
        this.videoPlayer.init(frontWidth, frontHeight, sideWidth, sideHeight);

        this.maskVisualiser = new SimpleBeatBar();
        this.maskVisualiser.init(frontWidth, frontHeight, sideWidth, sideHeight);

        this.maskVisualiser.flagColours = [
            "#FFFFFF",
            "#FFFFFF",
            "#FFFFFF"
        ];

    };

    p.render = function() {

        this.videoPlayer.render();
        this.maskVisualiser.render();

        

        this.frontCtx.globalCompositeOperation = "source-over";
        this.frontCtx.drawImage(this.videoPlayer.faces.front,0,0);
        this.frontCtx.globalCompositeOperation = "multiply";
        this.frontCtx.drawImage(this.maskVisualiser.faces.front,0,0);

        this.frontCtx.globalCompositeOperation = "overlay";
        this.frontCtx.fillStyle = "white";
        this.frontCtx.fillRect(0,0,this.faces.front.width, this.faces.front.height);

        this.sideCtx.globalCompositeOperation = "source-over";
        this.sideCtx.drawImage(this.videoPlayer.faces.side,0,0);
        this.sideCtx.globalCompositeOperation = "multiply";
        this.sideCtx.drawImage(this.maskVisualiser.faces.side,0,0);

        this.sideCtx.globalCompositeOperation = "overlay";
        this.sideCtx.fillStyle = "white";
        this.sideCtx.fillRect(0,0,this.faces.front.width, this.faces.front.height);


        // update beat value
        this.currentBeatValue *= 0.8;

    };

    p.signal = function(channel, value) {


        if (this.maskVisualiser)
            this.maskVisualiser.signal(channel, value);
        

           
        // store beat values from channel 1
        if (channel == 1){
            this.currentBeatValue = value;
        }

        // store volume values from channel 2
        if (channel == 2){
            this.currentVolume = value;
        }
    };


module.exports = HarpaTestVisualiser;
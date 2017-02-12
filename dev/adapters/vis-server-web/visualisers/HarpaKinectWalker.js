(function(global){

    /*

        Example simple Visualiser class

    */

    var UPDATEINTERVAL = 30;
    var PLAYBACK_FRAME_INTERVAL = 20;
    var NUM_WALKERS = 5;

    var DATA_LIST = [
        "walk1"
    ];



    var HarpaKinectWalker = function() {

        // stores the current volume
        this.currentVolume = 0;

        // stores the current beat envelope / value
        this.currentBeatValue = 0;

        this.player = document.getElementById('player');

        if (typeof(io) !== "undefined"){
            this.socket = io("127.0.0.1:8082");
            this.socket.on("jointData", function(jointData){
                this.kinectData = jointData;
            }.bind(this));
        }


        this.lastUpdate = Date.now();

        this.kinectData = {};

        this.recordingFileName = "kinectRecording";

       

    };

    var p = HarpaKinectWalker.prototype = new HarpaVisualiserBase();
    var s = HarpaVisualiserBase.prototype;

    p.init = function(frontWidth, frontHeight, sideWidth, sideHeight) {
        s.init.call(this, frontWidth, frontHeight, sideWidth, sideHeight);

        this.modeXY = true;
        this.blobSize = 0.5;

        this.liveMode = false;

        this.posX = sideWidth * 0.25;
        this.posY = frontHeight/2;

        this.kinectOffSetX = 0;
        this.kinectOffSetY = 0;
        this.kinectOffSetZ = -2;

        this.scaleX = 10;
        this.scaleY = 10;

        this.playbackSrc = DATA_LIST[0];
        this.playbackData = [];
        this.playbackLibrary = {};
        this.playbackIndex = 0;
        this.playbackTime = 0;

        this.activeWalker = 0;
        this.walkerBeats = [];
        for (var i=0; i< NUM_WALKERS; i++){ this.walkerBeats[i] = 0; }

        if (false){
            var gui = new dat.GUI();
            var fr = gui.addFolder("recording");

            fr.add(this, "recordingFileName").name("filename");
            fr.add(this, "startRecording");
            fr.add(this, "stopRecording");

            gui.add(this, "liveMode");

            var fp = gui.addFolder("position");
            fp.add(this, "posX", 0, this.totalWidth);
            fp.add(this, "posY", 0, this.totalHeight);
            fp.add(this, "scaleX", 0, this.totalHeight).step(0.001);
            fp.add(this, "scaleY", 0, this.totalHeight).step(0.001);
            fp.add(this, "modeXY").name("X/Y or Y/Z");
            fp.add(this, "blobSize", 0.1, 2);
            fp.add(this, "kinectOffSetX");
            fp.add(this, "kinectOffSetY");
            fp.add(this, "kinectOffSetZ").step(0.001);
            fp.open();

            var fpl = gui.addFolder("playback");
            fpl.add(this, "playbackSrc", DATA_LIST);
            fpl.add(this, "loadAnimation");
            fpl.add(this, "playbackTime").listen();

        }
        


        var loadList = DATA_LIST.splice(0, DATA_LIST.length);

    
        var loadNextJSON = function() {
            if (loadList.length > 0){
                var toLoad = loadList.pop();
                var rq = new XMLHttpRequest();
                rq.responseType = "json";
                rq.onload = function() {
                    this.playbackLibrary[toLoad] = rq.response;
                    loadNextJSON();
                }.bind(this);
                rq.open("GET", "./visualisers/kinectData/" + toLoad + ".json", true);
                rq.send();
            } else {
                this.loadAnimation();
            }

        }.bind(this);
        loadNextJSON();

    };

    p.loadAnimation = function() {
        if (this.playbackLibrary.hasOwnProperty(this.playbackSrc)){
            this.playbackData = this.playbackLibrary[this.playbackSrc];
            this.playbackTime = 0;
        }
    };

    p.render = function() {

        if (!this.playbackData || this.playbackData.length == 0) return;

        this.combCtx.fillStyle = "black";
        this.combCtx.fillRect(0,0,this.totalWidth, this.totalHeight);

        this.combCtx.fillStyle = "white";
        var pX, pY;
        var offsetX = 0;
        var r,g,b;

        this.combCtx.globalAlpha = 0.2;
        for (var i=0; i < this.totalHeight; i++){
            b = Math.floor(this.currentBeatValue * 55) + Math.floor(i / this.totalHeight * 200);
            g = Math.floor(this.currentBeatValue * 200) + Math.floor(i / this.totalHeight * 55);
            r = Math.floor(this.currentBeatValue * 200) + Math.floor(i / this.totalHeight * 55);
            this.combCtx.fillStyle = "rgb(" + r + ", " + g + ", " + b +")";
            this.combCtx.fillRect(0,i,this.totalWidth, 1);
        }

        this.combCtx.globalAlpha = 1.0;
        for (var i =0; i < NUM_WALKERS; i++){
            var localIndex = Math.floor(this.playbackIndex + (i/NUM_WALKERS) * this.playbackData.length);
            localIndex = localIndex % this.playbackData.length;
            var moveData = this.playbackData[localIndex].data;
            offsetX = (i/NUM_WALKERS) * this.totalWidth;
            var blobSize = this.blobSize + this.walkerBeats[i];
            for (var idx in moveData){
                if (this.modeXY){
                    pX = (((moveData[idx][0] * -1) - this.kinectOffSetX) * this.scaleX) + this.posX + offsetX;
                    pY = (((moveData[idx][1] * -1) - this.kinectOffSetY) * this.scaleY) + this.posY;
                } else {
                    pX = (((moveData[idx][2] * -1) - this.kinectOffSetY) * this.scaleX) + this.posX + offsetX;
                    pY = (((moveData[idx][1] * -1) - this.kinectOffSetZ) * this.scaleY) + this.posY;
                }
                b = Math.floor(this.walkerBeats[i] * 210) + Math.floor(pY / this.totalHeight * 45);
                g = Math.floor(this.walkerBeats[i] * 200) + Math.floor(pY / this.totalHeight * 55);
                r = Math.floor(this.walkerBeats[i] * 210) + Math.floor(pY / this.totalHeight * 45);
                this.combCtx.fillStyle = "rgb(" + r + ", "+ g +", " + b  + ")";
                this.combCtx.beginPath();
                // console.log(pX, pY);
                this.combCtx.ellipse(pX, pY, blobSize, blobSize, 0, Math.PI * 2, 0);
                this.combCtx.fill();
            }

        }
        
       

        this.drawToFaces(this.combinedCanvas);

        var now = Date.now();
        if (this.liveMode){
            
            if ((now - this.lastUpdate) > UPDATEINTERVAL) {
                if (this.socket){
                    this.socket.emit("getJointData", null);
                }
                this.lastUpdate = now;
            }
        } else {
            if ((now - this.lastUpdate) > PLAYBACK_FRAME_INTERVAL){
                if (this.playbackData.length > 0){
                     this.playbackIndex++;
                    this.playbackIndex = this.playbackIndex % this.playbackData.length;
                    this.kinectData = this.playbackData[this.playbackIndex].data;
                    this.playbackTime = this.playbackData[this.playbackIndex].time;
                    this.lastUpdate = now;
                }
               
            }
        }

        for (var i=0; i < NUM_WALKERS; i++){
            this.walkerBeats[i] *= 0.99;
        }
        

    };

    p.signal = function(channel, value) {

        // store volume values from channel 2
        if (channel == 2){
            this.currentVolume = value;
        }

        // store beat values from channel 1
        if (channel == 1){
            this.currentBeatValue = value;
            if (value > 0.5){
                this.activeWalker = Math.floor(Math.random() * NUM_WALKERS);
                this.walkerBeats[this.activeWalker] = 1;
                // console.log(this.activeWalker);
            }
        }
    };

    p.startRecording = function() {

        if (this.socket){
            this.socket.emit("startRecording", null);
        }
    };

    p.stopRecording = function() {
        if (this.socket){
            this.socket.emit("endRecording", { filename : this.recordingFileName });
        }

    };

    p.startPlayback = function() {


    };



    global.HarpaKinectWalker = (global.module || {}).exports = HarpaKinectWalker;

})(this);

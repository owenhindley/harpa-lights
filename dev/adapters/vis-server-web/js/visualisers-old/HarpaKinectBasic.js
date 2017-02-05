(function(global){

    /*

        Example simple Visualiser class

    */

    var UPDATEINTERVAL = 30;
    var PLAYBACK_FRAME_INTERVAL = 20;

    var DATA_LIST = [
        "walk1_1454775253545",
        "bird1_1454775957614",
        "falling_1454775840433",
        "falling2_1454775878062"
    ];



    var HarpaTestVisualiser = function() {

        // stores the current volume
        this.currentVolume = 0;

        // stores the current beat envelope / value
        this.currentBeatValue = 0;

        this.player = document.getElementById('player');

        this.socket = io("127.0.0.1:8082");
        this.socket.on("jointData", function(jointData){
            this.kinectData = jointData;
        }.bind(this));

        this.lastUpdate = Date.now();

        this.kinectData = {};

        this.recordingFileName = "kinectRecording";

       

    };

    var p = HarpaTestVisualiser.prototype = new HarpaVisualiserBase();
    var s = HarpaVisualiserBase.prototype;

    p.init = function(frontWidth, frontHeight, sideWidth, sideHeight) {
        s.init.call(this, frontWidth, frontHeight, sideWidth, sideHeight);

        this.modeXY = true;
        this.blobSize = 0.5;

        this.liveMode = true;

        this.posX = sideWidth + frontWidth/2;
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
                rq.open("GET", "js/visualisers/kinectData/" + toLoad + ".json", true);
                rq.send();
            } else {
                fpl.open();
            }

        }.bind(this);
        loadNextJSON();

    };

    p.loadAnimation = function() {
        if (this.playbackLibrary.hasOwnProperty(this.playbackSrc)){
            this.playbackData = this.playbackLibrary[this.playbackSrc];
            this.playbackTime = 0;
        }
    }

    p.render = function() {

        this.combCtx.fillStyle = "black";
        this.combCtx.fillRect(0,0,this.totalWidth, this.totalHeight);

        this.combCtx.fillStyle = "white";
        var pX, pY;
        // for (var idx in this.kinectData){
        // var idx = "Head";
        // if (this.kinectData.hasOwnProperty("Head"))
        for (var idx in this.kinectData){
            if (this.modeXY){
                pX = (((this.kinectData[idx][0] * -1) - this.kinectOffSetX) * this.scaleX) + this.posX;
                pY = (((this.kinectData[idx][1] * -1) - this.kinectOffSetY) * this.scaleY) + this.posY;
            } else {
                pX = (((this.kinectData[idx][2] * -1) - this.kinectOffSetY) * this.scaleX) + this.posX;
                pY = (((this.kinectData[idx][1] * -1) - this.kinectOffSetZ) * this.scaleY) + this.posY;
            }
            this.combCtx.beginPath();
            // console.log(pX, pY);
            this.combCtx.ellipse(pX, pY, this.blobSize, this.blobSize, 0, Math.PI * 2, 0);
            this.combCtx.fill();
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



    global.HarpaTestVisualiser = (global.module || {}).exports = HarpaTestVisualiser;

})(this);

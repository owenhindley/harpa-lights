var CANVAS_VISUALISER = true;

var audioSource, visualiser;
var tempoSource;
var debugElement, volumeSlider, beatIndicator, beatButton;
var fixturesFront, fixturesSide;
var beatOnFrame = false;

var DEBUG_MODE = false;

var exportCanvas, exportCtx;

var tempCanvasSide, tempSideCtx;
var tempCanvasFront, tempFrontCtx;

var updateIntervalId = -1;

var visualiserLib = [
    new BeatLineVisualiser(),
    new HarpaMSCP004(),
    new HarpaRainVisualiser(),
    new JonasConnectVisualiser(),
    new JonasLinesVisualiser(),
    new SignalsVisualiser(),
    new JonasStarsVisualiser()
];

var visualiser = visualiserLib[0];
var nextVisualiser = visualiserLib[1];
var visualiserIndex = 0;
var crossfade = 0;
var isCrossfading = false;
var relaySocket;

document.addEventListener("DOMContentLoaded", function() {


    tempCanvasSide = document.createElement("canvas");
    tempSideCtx = tempCanvasSide.getContext("2d");
    tempCanvasFront = document.createElement("canvas");
    tempFrontCtx = tempCanvasFront.getContext("2d");

    debugElement = document.getElementById("debugOutput");
    volumeSlider = document.getElementById("rms");
    beatIndicator = document.getElementById("bpm");
    beatButton = document.getElementById("tapTempo");

    beatButton.addEventListener("click", function(){
        beatOnFrame = true;
        beatIndicator.checked = !beatIndicator.checked;
    });

    exportCanvas = document.getElementById("export");
    exportCtx= exportCanvas.getContext("2d");
    exportCanvas.imageSmoothingEnabled = false;

    // this is the number of lights we have to play with on both sides.
    // small, I know.
    var harpaLts = {
        front : {
            width : 37,
            height : 13
        },
        side : {
            width : 39,
            height : 9
        }
    };

    // creates our visualiser.
    /*
        Swop out the class here for yours (inheriting from HarpaVisualiserBase)
        to test
    */
    // visualiser = new SpriteVisualiser();
    // visualiser = new CrossesVisualiser();
    // visualiser = new BlockVisualiser();
    // visualiser = new HarpaWhiteVisualiser();

    for (var i=0; i < visualiserLib.length; i++){
        visualiserLib[i].init(harpaLts.front.width, harpaLts.front.height, harpaLts.side.width, harpaLts.side.height);
    }



    // init with the light dimensions
    
    //
    
    // setup export canvas
    exportCanvas.width = visualiser.faces.front.width + visualiser.faces.side.width;
    exportCanvas.height = Math.max(visualiser.faces.front.height, visualiser.faces.side.height);

    tempCanvasSide.width = visualiser.faces.side.width;
    tempCanvasSide.height = visualiser.faces.side.height;
    tempCanvasFront.width = visualiser.faces.front.width;
    tempCanvasFront.height = visualiser.faces.front.height;

    document.getElementById("sideTextureContainer").appendChild(tempCanvasSide);
    document.getElementById("frontTextureContainer").appendChild(tempCanvasFront);


    fixturesFront = new HarpaCanvasFixtureView();
    fixturesFront.init(harpaLts.front.width, harpaLts.front.height);
    document.getElementById("frontContainer").appendChild(fixturesFront.element);

    fixturesSide = new HarpaCanvasFixtureView();
    fixturesSide.init(harpaLts.side.width, harpaLts.side.height);
    document.getElementById("sideContainer").appendChild(fixturesSide.element);

    // disable fixtures on side panel to match shape of building

    
    for (var i=0; i < harpaLts.side.width; i++){
        for (var j = 0; j < harpaLts.side.height; j++){
            if (j > (2 + Math.floor(i / (i == 1 ? 5 : 6)))){
                fixturesSide.disableFixture(i,j);
            }

        }
    }
  

    // control

    relaySocket = io.connect("http://localhost:88");
    relaySocket.on('connection', function(){
        console.log("socket connected");
    });
    relaySocket.on("/tempo-bang", function(data){
        if (visualiser){ visualiser.signal(1,1); }
        if (nextVisualiser){ nextVisualiser.signal(1,1); }

        try{
            beatIndicator.checked = !beatIndicator.checked;
        } catch(e){

        }
    });
     relaySocket.on("/rms-db", function(data){
        // console.log(data[0].value);
        if (visualiser){ visualiser.signal(2,data[0].value); }
        if (nextVisualiser){ nextVisualiser.signal(2,data[0].value); }

        try {
            volumeSlider.value = data[0].value;
        } catch(e){

        }
    });

    document.body.addEventListener("keyup", function(e){

        if (e.which >= 49 && e.which < 57){
            crossfadeToIndex(e.which - 49);
            return;
        }

        switch(e.which){

            case 68:
            // press 'd' to toggle between debug & not
                toggleDebugMode(); 
            break;
            case 190:
                gotoNextVisualiser();
            break;
            case 188:
                gotoPreviousVisualiser();
            break;

            case 66:
                beatOnFrame = true;
            break;

        }

    });

    // start render cycle (every browser frame)
    window.requestAnimationFrame(render);

     // start update cycle - this is less frequent, every 50ms
    clearInterval(updateIntervalId);
    setInterval(update, 50);

    toggleDebugMode();



});

function toggleDebugMode(){
     if (DEBUG_MODE){
        DEBUG_MODE = false;
        document.getElementById("container").style.display = "none";
        exportCanvas.style.display = "block";
        document.title = "LIVE";
    } else {
        DEBUG_MODE = true;
        document.getElementById("container").style.display = "block";
        exportCanvas.style.display = "none";
        document.title = "DEBUG";
    }
}

function gotoNextVisualiser(){
    visualiserIndex++;
    visualiserIndex = visualiserIndex % visualiserLib.length;
    crossfadeToIndex(visualiserIndex);

}

function gotoPreviousVisualiser(){
    visualiserIndex--;
    if (visualiserIndex < 0) { visualiserIndex = visualiserLib.length-1; }
    crossfadeToIndex(visualiserIndex);
}


function crossfadeToIndex(index){
    if (isCrossfading) return;
    if (index >= visualiserLib.length){
        console.warn("index out of bounds!");
        return;
    }
    console.log("crossfading to " + index);
    crossfade = 0;
    isCrossfading = true;
    nextVisualiser = visualiserLib[index];
    
    var tween = new TWEEN.Tween(this).to({ crossfade : 1.0 }, 1000).onUpdate(function(){
        // crossfade = envelope.value;
        console.log("crossfade = " + crossfade);

    }).onComplete(function(){
        crossfade = 0;
        visualiser = nextVisualiser;
        nextVisualiser = null;
        isCrossfading = false;
    }).start();


}


function render() {

    TWEEN.update();

    // calls the canvases to render

    window.requestAnimationFrame(render);

    visualiser.render();
    if (nextVisualiser) nextVisualiser.render();

    tempSideCtx.globalAlpha = 1.0 - crossfade;
    tempSideCtx.drawImage(visualiser.faces.side,0,0);
    tempFrontCtx.globalAlpha = 1.0 - crossfade;
    tempFrontCtx.drawImage(visualiser.faces.front,0,0);
    
    if (nextVisualiser){
        tempSideCtx.globalAlpha = crossfade;
        tempSideCtx.drawImage(nextVisualiser.faces.side,0,0);
        tempFrontCtx.globalAlpha = crossfade;
        tempFrontCtx.drawImage(nextVisualiser.faces.front,0,0);
    }
    

    if (DEBUG_MODE){
        fixturesFront.render(tempFrontCtx);
        fixturesSide.render(tempSideCtx);
    } else {
        exportCtx.drawImage(tempCanvasSide, 0,0);
        exportCtx.drawImage(tempCanvasFront, visualiser.faces.side.width,0);
    }

   

};

function update() {

    // sends the current tempo data to channel 1
    //
    // this takes the form of a value that rises to 1 every beat, then falls rapidly to 0.

    //console.log(tempoSource.value);
    // var currentBeatEnvelope = tempoSource.value;

    if (beatOnFrame){
        beatOnFrame = false;
        visualiser.signal(1, 1);
    }

    // sends the current volume level
    // to the visualiser as a signal
    // on channel 2.

    var currentVolume = volumeSlider.value;
    //console.log(currentVolume);
    visualiser.signal(2, currentVolume);



};

function debugWrite(msg) {

    debugElement.innerHTML = debugElement.innerHTML += "<br/>" + msg;
}

var CANVAS_VISUALISER = true;

var audioSource, visualiser;
var tempoSource;
var debugElement, volumeSlider, beatIndicator, beatButton;
var fixturesFront, fixturesSide;
var beatOnFrame = false;

var DEBUG_MODE = false;

var exportCanvas, exportCtx;

var updateIntervalId = -1;

document.addEventListener("DOMContentLoaded", function() {

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
    visualiser = new BlockVisualiser();
    // visualiser = new HarpaWhiteVisualiser();

    // init with the light dimensions
    visualiser.init(harpaLts.front.width, harpaLts.front.height, harpaLts.side.width, harpaLts.side.height);
    //
    document.getElementById("sideTextureContainer").appendChild(visualiser.faces.side);
    document.getElementById("frontTextureContainer").appendChild(visualiser.faces.front);

    // setup export canvas
    exportCanvas.width = visualiser.faces.front.width + visualiser.faces.side.width;
    exportCanvas.height = Math.max(visualiser.faces.front.height, visualiser.faces.side.height);

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
  

    document.body.addEventListener("keyup", function(e){
        // press 'd' to toggle between debug & not
        if (e.which == 68){
           toggleDebugMode();
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


function render() {

    // calls the canvases to render

    window.requestAnimationFrame(render);

    visualiser.render();

    if (DEBUG_MODE){
        fixturesFront.render(visualiser.frontCtx);
        fixturesSide.render(visualiser.sideCtx);
    } else {
        exportCtx.drawImage(visualiser.faces.side, 0,0);
        exportCtx.drawImage(visualiser.faces.front, visualiser.faces.side.width,0);
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

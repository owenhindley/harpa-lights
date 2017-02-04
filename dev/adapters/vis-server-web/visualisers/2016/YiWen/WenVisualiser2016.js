var HarpaVisualiserBase = require("../../common/HarpaVisualiserBase.js");

    /*

        Example simple Visualiser class

    */

    var random = function(min, max) { return min + Math.random() * (max - min);    }

    var themes = [
        ['#E6E2AF', '#A7A37E', '#EFECCA', '#046380', '#002F2F'],
        ['#468966', '#FFF0A5', '#FFB03B', '#B64926', '#B64926'],
        ['#FCFFF5', '#D1DBBD', '#91AA9D', '#3E606F', '#193441'],
        ['#FF6138', '#FFFF9D', '#BEEB9F', '#79BD8F', '#00A388'],
        ['#105B63', '#FFFAD5', '#FFD34E', '#DB9E36', '#BD4932'],
        ['#225378', '#1695A3', '#ACF0F2', '#F3FFE2', '#EB7F00'],
        ['#B9121B', '#4C1B1B', '#F6E497', '#FCFAE1', '#BD8D46'],
        ['#7D8A2E', '#C9D787', '#FFFFFF', '#FFC0A9', '#FF8598'],
        ['#7D8A2E', '#C9D787', '#FFFFFF', '#FFC0A9', '#FF8598']
    ]

    var HarpaTestVisualiser = function() {

        // stores the current volume
        this.currentVolume = 0;

        // stores the current beat envelope / value
        this.currentBeatValue = 0;
        this.previousBeatValue = 0;

        this.numSeg = 8;
        
        this.timeFace = 0;
        this.timeSide = 0;
        this.maxVolume = 11501;
        
        this.easingFace = random(.05, .1);
        this.easingSide = random(.05, .1);
        this.rotationFace = 0;
        this.rotationSide = 0;
        this.themeIndex = 0;

        this.reset();
    }

    var p = HarpaTestVisualiser.prototype = new HarpaVisualiserBase();


    p.reset = function() {
        this.colours = [];
        this.randoms = [];


        function getColours(theme, numSeg) {
            var colours = [];
            var index = 0;
            var preIndex = 0;

            while(colours.length<numSeg) {
                do {
                    index = Math.floor(Math.random() * theme.length);
                } while(index == preIndex);    
                colours.push(theme[index]);
                preIndex = index;
            }
            

            return colours;
        }


        console.log(themes[this.themeIndex], this.themeIndex);
        this.colours = getColours(themes[this.themeIndex], this.numSeg);

        this.themeIndex++;
        if(this.themeIndex >= themes.length) {
            this.themeIndex = 0;
        }
    };


    p.render = function() {
        this.rotationFace -= this.rotationFace * this.easingFace;
        this.rotationSide -= this.rotationSide * this.easingSide;

        this.timeFace += .0025 + this.rotationFace;
        this.timeSide -= .0025 + this.rotationSide;

        var cx, cy;

        this.frontCtx.clearRect(0,0,this.faces.front.width,this.faces.front.height);
        cx = this.faces.front.width/2;
        cy = this.faces.front.height/2;
        this.drawCanvas(this.frontCtx, cx, cy, this.timeFace);

        this.sideCtx.clearRect(0,0,this.faces.side.width,this.faces.side.height);
        cx = this.faces.side.width/2;
        cy = this.faces.side.height/3;
        this.drawCanvas(this.sideCtx, cx, cy, this.timeSide);
          
    };


    p.drawCanvas = function(ctx, cx, cy, wheelAngle) {
        var HALF_PI = Math.PI * .5;
        var PI = Math.PI;

        function elasticIn(t) {
            return Math.sin(13.0 * t * HALF_PI) * Math.pow(2.0, 10.0 * (t - 1.0));
        }

        function elasticOut(t) {
          return Math.sin(-13.0 * (t + 1.0) * HALF_PI) * Math.pow(2.0, -10.0 * t) + 1.0;
        }

        function backOut(t) {
          var f = 1.0 - t;
          return 1.0 - (Math.pow(f, 3.0) - f * Math.sin(f * PI));
        }

        function backIn(t) {
          return Math.pow(t, 3.0) - t * Math.sin(t * PI);
        }

        var r = Math.max(cx, cy) *.5 - this.currentBeatValue * 18 + 17;
        function drawArc(ctx, startAngle, angle, fill, offset, rOffset) {
            var x, y;
            ctx.beginPath();
            ctx.fillStyle = fill;
            ctx.moveTo(cx, cy);
            x = Math.cos(startAngle) * r * rOffset + cx;
            y = Math.sin(startAngle) * r * rOffset + cy;
            ctx.lineTo(x, y);
            x = Math.cos(startAngle+angle) * r * rOffset + cx;
            y = Math.sin(startAngle+angle) * r * rOffset + cy;
            ctx.lineTo(x, y);
            // ctx.arc(cx, cy, r, startAngle, angle);
            ctx.lineTo(cx, cy);
            ctx.fill();
            ctx.closePath();    
        }

        var numSeg = this.numSeg;
        var angle = Math.PI * 2.0 / numSeg;
        var startAngle, fillColor;
        var offset = 1.0 - this.currentBeatValue;
        
        for(var i=0; i<numSeg; i++) {
            startAngle = i * angle + wheelAngle;
            // fillColor = "rgba(" + Math.floor(random(0, 255)) + "," + Math.floor(random(0, 255)) + "," + Math.floor(random(0, 255)) + ",1)";
            var grey = 50 + 25 * i;
            fillColor = "rgba(" + grey + "," + grey + "," + grey + ",1)";
            fillColor = this.colours[i];
            drawArc(ctx, startAngle, angle, fillColor, offset, 1);
        }
    };




    p.signal = function(channel, value) {

        // store volume values from channel 1
        if (channel == 1){
            this.currentVolume = value;

            // console.log(this.currentVolume);
            if(value > this.maxVolume) {
                this.maxVolume = value;
                console.log('Max : ', this.maxVolume);
            }
        }

        // store beat values from channel 2
        if (channel == 2){
            this.previousBeatValue = this.currentBeatValue;
            this.currentBeatValue = value;

            // console.log('Beat Diff: ', this.currentBeatValue - this.previousBeatValue);
            var threshold = .5;
            var angle = .2;
            if(this.currentBeatValue - this.previousBeatValue > threshold) {

                this.rotationFace = this.currentBeatValue * angle;
                this.rotationSide = this.currentBeatValue * angle;

                this.reset();
            }
        }
    };

module.exports = HarpaTestVisualiser;
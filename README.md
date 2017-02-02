# The Harpa Lights project

A collection of games, audio visualisers and other adventures for the lights of Harpa ([http://harpa.is](http://harpa.is))

This repository builds on the work done for Harpa PONG+ (see the old repo here: [https://github.com/owenhindley/harpapong](https://github.com/owenhindley/harpapong)).

Project development led by ([Owen Hindley](http://www.owenhindley.co.uk))

Project concept & production by Atli Bollason

## What's in the repo?

This repo contains the following:

* A Render server; takes input from the other modules & sends out DMX
* A 'Screensaver' server for music-driven visualisers
* A number of sound-reactive visualisers contributed by the team
* A PONG game server
* A Breakout game server (work in progress)
* A Queue manager
* A front-end site with a mobile paddle controller & instructional splash page

Currently everything is built for **node v4+**, running on **OSX**. 

Windows users should be able to get up and running, but will have to go their own way when installing some of the more exotic node-modules and their dependencies, namely [node-canvas / Cairo](https://github.com/Automattic/node-canvas/wiki/_pages).

## Why is it here?
Harpa is a public building in Reykjavík, Iceland, and it's the hope of the founders of this project that by publishing what we've done already open-source, it will enable and encourage more artists to get involved with the project and / or submit their own concepts for the lights of this landmark building. More information about calls for projects [here](http://en.harpa.is/harpa/news/harpa-calls-light-based-projects).

## Getting Started / Installation
Getting up & running with the repo depends on what you want to do. See below:

### Creating a music-reactive visualiser
* *Either* download the standalone visualiser [here](https://www.dropbox.com/s/uawi8e6ew071p6d/sonar-visualiser-creator.zip?dl=0) *or* this repository and open up `/dev/visualiser-creator`

* Make sure you're running node 0.12.8. A handy tool for maintaining / obtaining different versions of node in parallel is [nvm](https://github.com/creationix/nvm)
* Run `npm install`
* To run the visualiser tester ( you could even call it a visualiser *visualiser* ) do the following :
	* If you have Grunt installed, use the included `Gruntfile.js` which will run an http-server on `127.0.0.1:8080`. Instructions for installing grunt [here](http://gruntjs.com/using-the-cli)
	* If you'd rather not, you can simply run an HTTP-server from within this folder and view `index.html`
* Replace the included MP3 with one of your own if you wish.
* By default, the audio will play, and the tempo counter will start.
* Clone `visualisers/HarpaTestVisualiser.js`, look at how it works, and create your own.
* We have two channels, normalised 1-0. `1` is volume, `2` is 'beat value', which will peak at 1 on every 'beat'. 
* This simulates the input from the audio analysis code, which will also include FFT data (documentation coming soon)

#### To Submit a Visualiser
If you have push access to the repository, then please just add your custom class to the `dev/visualiser-server/visualisers/[cool name here]/` folder and email Owen to let him know it's up there.

Otherwise please just zip up the creator tool with your code working inside and send it across to Owen who will incorporate it in the final build!

### Running the render-server
You'll only need to do this if you're actually doing an installation in Harpa and need to output DMX.

* Download the repository
* (OSX - install Homebrew [optional, but it's much simpler than installing things manually, see below])
* Install Cairo & its dependencies [here](http://cairographics.org/download/)
* run `npm install` inside the `dev/render-server` folder
* open a web browser, go to `127.0.0.1:8088?method=getCanvas`, and you should see the web debugging view, with the PONG logo running in the background + sparkles.

If you get to this point, it means the render server is up and running, great! 

Blank windows? That's because the render server is set to 'Screensaver Mode' in the Scheduler. Check `render-server/scheduler/Scheduler.js` and ensure that `this.times` has one entry only - `MODE_GAME`. This class allows you to specify games, screensavers etc to run at different times.

In Game mode, you have two classes `HarpaGameViewPong.js` and `HarpaScoreViewPong.js` which maintain a pair of canvases for the large and small facades, respectively. You can go ahead and edit these classes to create your own games, see below.

In Screensaver mode, the render server listens to incoming low-level network connections from the `visualiser-server`, which happens via [zero mq](http://zeromq.org/). 

If you wanted, you could create another application (e.g. written in C++) that implemented the same zeromq interface to take the place of the visualiser server to extend the system further. Go crazy!

### Creating a game for Harpa
The repository comes with two games - PONG and Breakout (all trademarks belong to their respective owners). 

We've run PONG successfully on two occasions, Breakout has yet to be shown publicly.

If you want to create your own game, download the repository, examine `game-server` and `queue-server`, specifically how they transmit the canvas data back to the `render-server`, as this is what you'll need to emulate.

(more detailed instructions coming when I have time)

## Project Credits

The story so far; thanks to all who've contributed:

* Development Lead / Technical co-ordinator : ([Owen Hindley](http://www.owenhindley.co.uk))
* Concept & Production : Atli Bollasson
* Audio Analysis: [Ragnar Hrafnkelsson](http://reactifymusic.com) | @ragnaringi
* [Nick Gains](http://www.nickgains.com) | @nickgains
* [FIELD](http://www.field.io) | @field_io 
* [Yi-Wen Lin](http://blog.bongiovi.tw/) | @yiwen_lin 
* [Jonas Johansson](http://jonasjohansson.se)
* [Christian Persson](http://christianpers.com)
* [Jacob Andersson](http://yousirnejm.com) | @hellotherejacob
* [Liam Viney](http://liamviney.co.uk/) | @liamviney
* [Edu Prats Molner](http://www.jocabola.com/) | @jocabola




let hh;
let hPat;
let hPhrase;
let drums; 
var song;

function preload(){
  song  = loadSound("assets/clap_sample.mp3")
}

function setup() {
  createCanvas(400, 400);
  song.play()
  hPat = ['1','1','1','0']
}

function draw(){
  background(220);
}


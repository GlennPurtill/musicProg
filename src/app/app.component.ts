import { Component } from '@angular/core'
import * as tone from 'tone'
import { attachEmbeddedView } from '@angular/core/src/view';
import { Pattern } from './classes/pattern';
import * as p5 from 'p5';
import { DataPatternsService } from './services/data-patterns.service';
//import { PatternComponent } from './components/pattern/pattern.component';
declare var $: any;

let setVol
let bassLoop;
let arpeggioLoop;
let maxl = 8;
let curAmountCols = 8;
let playstate = false;

var vol = new tone.Volume(-10);
var dist = new tone.Distortion(0.9);
var reverb = new tone.JCReverb(0.9);
var delay = new tone.FeedbackDelay(0.8);
let bassSynth = new tone.FMSynth().chain(delay, reverb, dist, tone.Master);
let arpeggioSynth = new tone.MonoSynth(

  {
    "frequency"  : "C4" ,
    "detune"  : 0 ,
    "oscillator"  : {
      "type"  : "square"
    }  ,
    "filter"  : {
    "Q"  : 6 ,
    "type"  : "lowpass" ,
    "rolloff"  : -24
    }  ,
    "envelope"  : {
    "attack"  : 0.005 ,
    "decay"  : 0.1 ,
    "sustain"  : 0.9 ,
    "release"  : 1
    }  ,
    "filterEnvelope"  : {
    "attack"  : 0.06 ,
    "decay"  : 0.2 ,
    "sustain"  : 0.5 ,
    "release"  : 2 ,
    "baseFrequency"  : 400 ,
    "octaves"  : 4 ,
    "exponent"  : 2
    }
  }
).chain( vol, delay, reverb, dist, tone.Master);

let tempArr = ['C4','D4','E4','F4','G4','A4','B4']
let tempArpeggio = ['','','','','','','','']
let tempArpeggioIndex = 0;
let index = 0;
let counter = 0;
let curCols;
// let maxl;
let pattern;
let flag_raise = true;
let playerc= "multi"
let pat_input;

var ionian_SCALE = [0,2,4,5,7,9,11,12];
var aeolian_SCALE =[0,2,3,5,7,8,10,12];
var romanian_SCALE =[0,2,3,6,7,9,10,12];
var arabian_SCALE =[0,1,4,5,7,8,11,12];
var indian_SCALE =[0,1,3,4,7,8,10,12];
var spanish_SCALE =[0,1,4,5,7,8,10,12];
var oriental_SCALE = [0,1,4,5,6,9,10,12];
var ethiopian_SCALE = [0,2,4,5,7,8,11,12];
var blues_SCALE = [0,3,5,6,7,10,12];
var natural_major_SCALE = [0,2,4,5,7,9,11,12];
var chromatic_SCALE = [0,1,2,3,4,5,6,7,8,9,10,11,12];
var dorian_SCALE = [0,2,3,5,7,9,10,12];
var balinese_SCALE = [0,1,3,7,8,12];
var hungarian_major_SCALE = [0,3,4,6,7,9,10,12];
var hungarian_minor_SCALE = [0,2,3,6,7,8,11,12];
var pentatonic_major_SCALE = [0,2,4,7,9,12];
var pentatonic_minor_SCALE = [0,3,5,7,10,12];
var pentatonic_minor_SCALE =[0,2,4,5,7,8,9,11,12];
var bebop_major_SCALE =[0,2,4,5,7,8,9,11,12];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
<<<<<<< HEAD


  constructor(private patternService: DataPatternsService) {
  }

  after_update_binding_patterns;

  pat_input;
=======
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;
>>>>>>> f4e3ac590998b794d999e0ea51d18a491ac75698
  title = 'musicProg';
  bpm = '1n'
  curBpm = '1n'
  chord1 = '1'
  curActiveC1 = 'chord11'
  chord2 = '1'
  curActiveC2 = 'chord21'
  chord3 = '1'
  curActiveC3 = 'chord31'
  chord4 = '1'
  curActiveC4 = 'chord41'
  chord5 = '1'
  curActiveC5 = 'chord51'
  chord6 = '1'
  curActiveC6 = 'chord61'
  chord7 = '1'
  curActiveC7 = 'chord71'
  chord8 = '1'
  curActiveC8 = 'chord81'
  chord9 = '1'
  curActiveC9 = 'chord91'
  chord10 = '1'
  curActiveC10 = 'chord101'
  chord111 = '1'
  curActiveC11 = 'chord1111'
  chord12 = '1'
  curActiveC12 = 'chord121'
  chord13 = '1'
  curActiveC13 = 'chord131'
  chord14 = '1'
  curActiveC14 = 'chord141'
  chord15 = '1'
  curActiveC15 = 'chord151'
  chord16 = '1'
  curActiveC16 = 'chord161'
  tonicRoot = 'C'
  curTonicRoot = 'C'
  curBlue = ''
  mode = 'ionian'
  curMode = 'ionian'
  // curAmountCols = 8
  scurAmountCols = '8'
  rows_that_need_adding = 0
  newRowInnerHtml = 1
  // octives = 3
  curAmountRows = 7
  rowsNeedAddingButtons = 7

  start = 7
  end = 7
  alreadyDone = 8
  octives = 2

  distortionS = "on"
  reverbS = "on"
  delayS = "on"
  
	ionian = this.makeScale(ionian_SCALE);
	aeolian = this.makeScale(aeolian_SCALE);
	romanian = this.makeScale(romanian_SCALE);
	arabian = this.makeScale(arabian_SCALE);
	indian = this.makeScale(indian_SCALE);
	spanish = this.makeScale(spanish_SCALE);
	oriental = this.makeScale(oriental_SCALE);
	ethiopian = this.makeScale(ethiopian_SCALE);
	blues = this.makeScale(blues_SCALE);
	natural_major = this.makeScale(natural_major_SCALE);
	chromatic = this.makeScale(chromatic_SCALE);
	dorian = this.makeScale(dorian_SCALE);
	balinese = this.makeScale(balinese_SCALE);
	hungarian_major = this.makeScale(hungarian_major_SCALE);
	hungarian_minor = this.makeScale(hungarian_minor_SCALE);
	pentatonic_major = this.makeScale(pentatonic_major_SCALE);
	pentatonic_minor = this.makeScale(pentatonic_minor_SCALE);
	bebop_major = this.makeScale(bebop_major_SCALE);
	
  
  

  check = [true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false]
  
  //  C = ['C4','D4','E4','F4','G4','A4','B4']
  // CSHARP = ['C#4','D#4','F4','F#4','G#4','A#4','C5']
  // D = ['D4','E4','F#4','G4','A4','B4','C#5']
  // DSHARP = ['D#4','F4','G4','G#4','A#4','C5','D5']
  // E = ['E4','F#4','G#4','A4','B4','C#5','D#5']
  // F = ['F4','G4','A4','A#4','C5','D5','E5']
  // FSHARP = ['F#4','G#4','A#4','B4','C#5','D#5','F5']
  // G = ['G4','A4','B4','C5','D5','E5','F#5']
  // GSHARP = ['G#4','A#4','C5','C#5','D#5','F5','G#5']
  // A = ['A4','B4','C#5','D5','E5','F#5','G#5']
  // ASHARP = ['A#4','C5','D5','D#5','F5','G5','A5']
  // B = ['B4','C#5','D#5','E5','F#5','G#5','A#5']
  
  /*ionian = {
    bass: {
      C : ['C2','D2','E2','F2','G2','A2','B2','C3','D3','E3','F3','G3','A3','B3','C4','D4','E4','F4','G4','A4','B4','C5','D5','E5','F5','G5','A5','B5'],
      CSHARP : ['C#2','D#2','F2','F#2','G#2','A#2','C3','C#3','D#3','F3','F#3','G#3','A#3','C4','C#4','D#4','F4','F#4','G#4','A#4','C5','C#5','D#5','F5','F#5','G#5','A#5','C6'],
      D : ['D2','E2','F#2','G2','A2','B2','C#3','D3','E3','F#3','G3','A3','B3','C#4','D4','E4','F#4','G4','A4','B4','C#5','D5','E5','F#5','G5','A5','B5','C#6'],
      DSHARP : ['D#2','F2','G2','G#2','A#2','C3','D3', 'D#3','F3','G3','G#3','A#3','C4','D4', 'D#4','F4','G4','G#4','A#4','C5','D5','D#5','F5','G5','G#5','A#5','C6','D6'],
      E : ['E2','F#2','G#2','A2','B2','C#3','D#3','E3','F#3','G#3','A3','B3','C#4','D#4','E4','F#4','G#4','A4','B4','C#5','D#5','E5','F#5','G#5','A5','B5','C#6','D#6'],
      F : ['F2','G2','A2','A#2','C3','D3','E3','F3','G3','A3','A#3','C4','D4','E4','F4','G4','A4','A#4','C5','D5','E5','F5','G5','A5','A#5','C6','D6','E6'],
      FSHARP : ['F#2','G#2','A#2','B2','C#3','D#3','F3','F#3','G#3','A#3','B3','C#4','D#4','F4','F#4','G#4','A#4','B4','C#5','D#5','F5','F#5','G#5','A#5','B5','C#6','D#6','F6'],
      G : ['G2','A2','B2','C3','D3','E3','F#3','G3','A3','B3','C4','D4','E4','F#4','G4','A4','B4','C5','D5','E5','F#5','G5','A5','B5','C6','D6','E6','F#6'],
      GSHARP : ['G#2','A#2','C3','C#3','D#3','F3','G#3','G#3','A#3','C4','C#4','D#4','F4','G#4','G#4','A#4','C5','C#5','D#5','F5','G#5','G#5','A#5','C6','C#6','D#6','F6','G#6'],
      A : ['A2','B2','C#3','D3','E3','F#3','G#3','A3','B3','C#4','D4','E4','F#4','G#4','A4','B4','C#5','D5','E5','F#5','G#5','A5','B5','C#6','D6','E6','F#6','G#6'],
      ASHARP : ['A#2','C3','D3','D#3','F3','G3','A3','A#3','C4','D4','D#4','F4','G4','A4','A#4','C5','D5','D#5','F5','G5','A5','A#5','C6','D6','D#6','F6','G6','A6'],
      B : ['B2','C#3','D#3','E3','F#3','G#3','A#3','B3','C#4','D#4','E4','F#4','G#4','A#4','B4','C#5','D#5','E5','F#5','G#5','A#5','B5','C#6','D#6','E6','F#6','G#6','A#6']
    },

    arpeggio: {

      C : ['C4','D4','E4','F4','G4','A4','B4','C5','D5','E5','F5','G5','A5','B5','C6','D6','E6','F6','G6','A6','B6','C5','D5','E5','F5','G5','A5','B5'],
      CSHARP : ['C#4','D#4','F4','F#4','G#4','A#4','C5','C#5','D#5','F5','F#5','G#5','A#5','C6','C#6','D#6','F6','F#6','G#6','A#6','C5','C#5','D#5','F5','F#5','G#5','A#5','C6'],
      D : ['D4','E4','F#4','G4','A4','B4','C#5','D5','E5','F#5','G5','A5','B5','C#6','D6','E6','F#6','G6','A6','B6','C#5','D5','E5','F#5','G5','A5','B5','C#6'],
      DSHARP : ['D#4','F4','G4','G#4','A#4','C5','D5', 'D#5','F5','G5','G#5','A#5','C6','D6', 'D#6','F6','G6','G#6','A#6','C5','D5','D#5','F5','G5','G#5','A#5','C6','D6'],
      E : ['E4','F#4','G#4','A4','B4','C#5','D#5','E5','F#5','G#5','A5','B5','C#6','D#6','E6','F#6','G#6','A6','B6','C#5','D#5','E5','F#5','G#5','A5','B5','C#6','D#6'],
      F : ['F4','G4','A4','A#4','C5','D5','E5','F5','G5','A5','A#5','C6','D6','E6','F6','G6','A6','A#6','C5','D5','E5','F5','G5','A5','A#5','C6','D6','E6'],
      FSHARP : ['F#4','G#4','A#4','B4','C#5','D#5','F5','F#5','G#5','A#5','B5','C#6','D#6','F6','F#6','G#6','A#6','B6','C#5','D#5','F5','F#5','G#5','A#5','B5','C#6','D#6','F6'],
      G : ['G4','A4','B4','C5','D5','E5','F#5','G5','A5','B5','C6','D6','E6','F#6','G6','A6','B6','C5','D5','E5','F#5','G5','A5','B5','C6','D6','E6','F#6'],
      GSHARP : ['G#4','A#4','C5','C#5','D#5','F5','G#5','G#5','A#5','C6','C#6','D#6','F6','G#6','G#6','A#6','C5','C#5','D#5','F5','G#5','G#5','A#5','C6','C#6','D#6','F6','G#6'],
      A : ['A4','B4','C#5','D5','E5','F#5','G#5','A5','B5','C#6','D6','E6','F#6','G#6','A6','B6','C#5','D5','E5','F#5','G#5','A5','B5','C#6','D6','E6','F#6','G#6'],
      ASHARP : ['A#4','C5','D5','D#5','F5','G5','A5','A#5','C6','D6','D#6','F6','G6','A6','A#6','C5','D5','D#5','F5','G5','A5','A#5','C6','D6','D#6','F6','G6','A6'],
        B : ['B4','C#5','D#5','E5','F#5','G#5','A#5','B5','C#6','D#6','E6','F#6','G#6','A#6','B6','C#5','D#5','E5','F#5','G#5','A#5','B5','C#6','D#6','E6','F#6','G#6','A#6']
    }

 };*/

 /* aeolian = {
    bass: {
      C : ['C2','D2','E2','F2','G2','A2','B2','C3','D3','E3','F3','G3','A3','B3','C4','D4','E4','F4','G4','A4','B4','C5','D5','E5','F5','G5','A5','B5'],
      CSHARP : ['C#2','D#2','F2','F#2','G#2','A#2','C3','C#3','D#3','F3','F#3','G#3','A#3','C4','C#4','D#4','F4','F#4','G#4','A#4','C5','C#5','D#5','F5','F#5','G#5','A#5','C6'],
      D : ['D2','E2','F#2','G2','A2','B2','C#3','D3','E3','F#3','G3','A3','B3','C#4','D4','E4','F#4','G4','A4','B4','C#5','D5','E5','F#5','G5','A5','B5','C#6'],
      DSHARP : ['D#2','F2','G2','G#2','A#2','C3','D3', 'D#3','F3','G3','G#3','A#3','C4','D4', 'D#4','F4','G4','G#4','A#4','C5','D5','D#5','F5','G5','G#5','A#5','C6','D6'],
      E : ['E2','F#2','G#2','A2','B2','C#3','D#3','E3','F#3','G#3','A3','B3','C#4','D#4','E4','F#4','G#4','A4','B4','C#5','D#5','E5','F#5','G#5','A5','B5','C#6','D#6'],
      F : ['F2','G2','A2','A#2','C3','D3','E3','F3','G3','A3','A#3','C4','D4','E4','F4','G4','A4','A#4','C5','D5','E5','F5','G5','A5','A#5','C6','D6','E6'],
      FSHARP : ['F#2','G#2','A#2','B2','C#3','D#3','F3','F#3','G#3','A#3','B3','C#4','D#4','F4','F#4','G#4','A#4','B4','C#5','D#5','F5','F#5','G#5','A#5','B5','C#6','D#6','F6'],
      G : ['G2','A2','B2','C3','D3','E3','F#3','G3','A3','B3','C4','D4','E4','F#4','G4','A4','B4','C5','D5','E5','F#5','G5','A5','B5','C6','D6','E6','F#6'],
      GSHARP : ['G#2','A#2','C3','C#3','D#3','F3','G#3','G#3','A#3','C4','C#4','D#4','F4','G#4','G#4','A#4','C5','C#5','D#5','F5','G#5','G#5','A#5','C6','C#6','D#6','F6','G#6'],
      A : ['A2','B2','C#3','D3','E3','F#3','G#3','A3','B3','C#4','D4','E4','F#4','G#4','A4','B4','C#5','D5','E5','F#5','G#5','A5','B5','C#6','D6','E6','F#6','G#6'],
      ASHARP : ['A#2','C3','D3','D#3','F3','G3','A3','A#3','C4','D4','D#4','F4','G4','A4','A#4','C5','D5','D#5','F5','G5','A5','A#5','C6','D6','D#6','F6','G6','A6'],
      B : ['B2','C#3','D#3','E3','F#3','G#3','A#3','B3','C#4','D#4','E4','F#4','G#4','A#4','B4','C#5','D#5','E5','F#5','G#5','A#5','B5','C#6','D#6','E6','F#6','G#6','A#6']
    },

    arpeggio: {

      C : ['C4','D4','E4','F4','G4','A4','B4','C5','D5','E5','F5','G5','A5','B5','C6','D6','E6','F6','G6','A6','B6','C5','D5','E5','F5','G5','A5','B5'],
      CSHARP : ['C#4','D#4','F4','F#4','G#4','A#4','C5','C#5','D#5','F5','F#5','G#5','A#5','C6','C#6','D#6','F6','F#6','G#6','A#6','C5','C#5','D#5','F5','F#5','G#5','A#5','C6'],
      D : ['D4','E4','F#4','G4','A4','B4','C#5','D5','E5','F#5','G5','A5','B5','C#6','D6','E6','F#6','G6','A6','B6','C#5','D5','E5','F#5','G5','A5','B5','C#6'],
      DSHARP : ['D#4','F4','G4','G#4','A#4','C5','D5', 'D#5','F5','G5','G#5','A#5','C6','D6', 'D#6','F6','G6','G#6','A#6','C5','D5','D#5','F5','G5','G#5','A#5','C6','D6'],
      E : ['E4','F#4','G#4','A4','B4','C#5','D#5','E5','F#5','G#5','A5','B5','C#6','D#6','E6','F#6','G#6','A6','B6','C#5','D#5','E5','F#5','G#5','A5','B5','C#6','D#6'],
      F : ['F4','G4','A4','A#4','C5','D5','E5','F5','G5','A5','A#5','C6','D6','E6','F6','G6','A6','A#6','C5','D5','E5','F5','G5','A5','A#5','C6','D6','E6'],
      FSHARP : ['F#4','G#4','A#4','B4','C#5','D#5','F5','F#5','G#5','A#5','B5','C#6','D#6','F6','F#6','G#6','A#6','B6','C#5','D#5','F5','F#5','G#5','A#5','B5','C#6','D#6','F6'],
      G : ['G4','A4','B4','C5','D5','E5','F#5','G5','A5','B5','C6','D6','E6','F#6','G6','A6','B6','C5','D5','E5','F#5','G5','A5','B5','C6','D6','E6','F#6'],
      GSHARP : ['G#4','A#4','C5','C#5','D#5','F5','G#5','G#5','A#5','C6','C#6','D#6','F6','G#6','G#6','A#6','C5','C#5','D#5','F5','G#5','G#5','A#5','C6','C#6','D#6','F6','G#6'],
      A : ['A4','B4','C#5','D5','E5','F#5','G#5','A5','B5','C#6','D6','E6','F#6','G#6','A6','B6','C#5','D5','E5','F#5','G#5','A5','B5','C#6','D6','E6','F#6','G#6'],
      ASHARP : ['A#4','C5','D5','D#5','F5','G5','A5','A#5','C6','D6','D#6','F6','G6','A6','A#6','C5','D5','D#5','F5','G5','A5','A#5','C6','D6','D#6','F6','G6','A6'],
        B : ['B4','C#5','D#5','E5','F#5','G#5','A#5','B5','C#6','D#6','E6','F#6','G#6','A#6','B6','C#5','D#5','E5','F#5','G#5','A#5','B5','C#6','D#6','E6','F#6','G#6','A#6']
    }
};*/
  //all_ionian_scales = [this.ionian.C, this.ionian.CSHARP, this.ionian.D, this.ionian.DSHARP, this.ionian.E, this.ionian.F, this.ionian.FSHARP, this.ionian.G, this.ionian.GSHARP, this.ionian.A, this.ionian.ASHARP, this.ionian.B]


  saveBassPattern(){
    this.saveBass();
    //pat_input =  (<HTMLInputElement>document.getElementById("this.com.pat_input")).value;
    console.log(pat_input);
    let len = tempArr.length.toString();
    let myArr: string[];
    myArr = tempArr.slice();
    this.patternService.savePatternFromAppComp(len, myArr);
  }



  changeBPM(val){
    this.bpm = val + "n"
    if(this.curBpm != ''){
      document.getElementById(this.curBpm).style.backgroundColor = '';
    }
    document.getElementById(this.bpm).style.backgroundColor = 'red';
    this.curBpm = val + "n"
	  this.autoupdate();
  }

  chordClicked(chord, num, c){
    
    this[chord] = num
    let curAct = "curActiveC" + c
    console.log(document.getElementById(chord+num))
    if(this[curAct] != ''){
      document.getElementById(this[curAct]).setAttribute("style", "background-color: rgb(0, 0, 0); border: none; color: white; padding: 5px; text-align: center; text-decoration: none; display: inline-block; font-size: 12px; margin: 4px 2px; cursor: pointer; border-radius: 12px; width: 80px;")
    }
    document.getElementById(chord+num).style.backgroundColor = 'red';
    this[curAct] = chord+num
	this.autoupdate();
  }

  here(c) {
    let temp = c.toElement.value.split(',')
    this.chordClicked(temp[0],temp[1],temp[2])
  }

  changeMode(val){
    this.mode = val
    if(this.curMode != ''){
      document.getElementById(this.curMode).style.backgroundColor = '';
    }
    document.getElementById(val).style.backgroundColor = 'red';
    this.curMode = val
	this.autoupdate();
  }

   distortionSwitch(val){
    if(this.distortionS == "off"){
      document.getElementById("distortion").innerHTML="ON";
      document.getElementById("distortion").style.backgroundColor = 'red';
      this.distortionS = "on";
    }
    else{
      document.getElementById("distortion").innerHTML="OFF";
  		document.getElementById("distortion").style.backgroundColor = '';
      this.distortionS = "off";
	   }
	this.autoupdate();
  }



   reverbSwitch(val){
     if(this.reverbS == "off"){
       document.getElementById("reverb").innerHTML="ON";
       document.getElementById("reverb").style.backgroundColor = 'red';
       this.reverbS = "on";
     }
     else{
       document.getElementById("reverb").innerHTML="OFF";
 		   document.getElementById("reverb").style.backgroundColor = '';
       this.reverbS = "off";
 	   }
	this.autoupdate();
  }

   delaySwitch(val){
     if(this.delayS == "off"){
     document.getElementById("delay").innerHTML="ON";
     document.getElementById("delay").style.backgroundColor = 'red';
     this.delayS = "on";
     }
     else{
       document.getElementById("delay").innerHTML="OFF";
 		   document.getElementById("delay").style.backgroundColor = '';
       this.delayS = "off";
 	   }
	this.autoupdate();
   }

  changeTonicRoot(val){
    this.tonicRoot = val
    if(this.curTonicRoot != ''){
      document.getElementById(this.curTonicRoot).style.backgroundColor = '';
    }
    document.getElementById(val).style.backgroundColor = 'red';
    this.curTonicRoot = val
	this.autoupdate();
  }

  temp = []

  addCol(){
    if(curAmountCols < 15){
      curAmountCols++
      this.scurAmountCols = "" + curAmountCols
      console.log("Added Col: " + curAmountCols)
      let x = (curAmountCols-1).toString();
      document.getElementById(x).style.display = "block"
      this.addCertainAmountOfButtons(curAmountCols)
    }
  }

  removeCol(){
    if(curAmountCols > 7){
      document.getElementById(curAmountCols.toString()).style.display = "none"
      curAmountCols--
      this.scurAmountCols = "" +curAmountCols
    }
  }

  addCertainAmountOfButtons(at){
    let counter = 1
    if(this.check[at]==false){
      for(let i = this.start; i < this.end; i++){
        if(counter == 8){
          counter = 1
        }
        let html = ""
        // let element = (<HTMLElement><any>document.createElement("button"));
        if(at==10){
          html = '<button id="chord'+ (at+1).toString() + "1" + (i+1) + '" value="chord'+ (at+1).toString() + ',' + (i+1) + ',' + (at+1).toString() +'"></button>'  // chordClicked('chord16', 2, 16)
        }
        else{
          html = '<button id="chord'+ (at+1).toString() + (i+1) + '" value="chord'+ (at+1).toString() + ',' + (i+1) + ',' + (at+1).toString() +'"></button>'  // chordClicked('chord16', 2, 16)
        }
        
        let foo = document.getElementById(at.toString())
        foo.insertAdjacentHTML('beforeend', html)
        let element = document.getElementById('1')
        if(at == 10){
          element = document.getElementById('chord'+ (at+1).toString() + "1" + (i+1))
        }
        else {
          element = document.getElementById('chord'+ (at+1).toString() + (i+1))
        }
        // // this.rowsNeedAddingButtons++
        element.innerHTML = counter.toString() + "(" + this.octives + ")"
        counter++
        // // this.newRowInnerHtml.toString()
        element.addEventListener("click", this.here.bind(this));
        element.classList.add("col-sm-11")
        element.setAttribute("style", "background-color: rgb(0, 0, 0); border: none; color: white; padding: 5px; text-align: center; text-decoration: none; display: inline-block; font-size: 12px; margin: 4px 2px; cursor: pointer; border-radius: 12px; width: 80px;")
        this.check[at]==true
      }
    }
    }

  addButton(){
    if(this.curAmountRows < 28){
      this.rows_that_need_adding++
      if(this.newRowInnerHtml == 8){
        this.newRowInnerHtml = 1
        this.octives++
      }
      this.curAmountRows++
      this.rowsNeedAddingButtons++
      this.end++
      for(let i = 0; i < curAmountCols+1; i++){
        let html = "here"
        // let element = (<HTMLElement><any>document.createElement("button"));
        if(i==10){
          html = '<button id="chord'+ (i+1).toString() + '1' + this.curAmountRows.toString() + '" value="chord'+ (i+1).toString() + ',' + this.curAmountRows.toString() + ',' + (i+1).toString() +'"></button>'  // chordClicked('chord16', 2, 16)
        }
        else{
          html = '<button id="chord'+ (i+1).toString() + this.curAmountRows.toString() + '" value="chord'+ (i+1).toString() + ',' + this.curAmountRows.toString() + ',' + (i+1).toString() +'"></button>'  // chordClicked('chord16', 2, 16)
        }
        console.log(html)
        let foo = document.getElementById(i.toString())
        foo.insertAdjacentHTML('beforeend', html)
        let element = document.getElementById("chord" + (i+1).toString() + this.curAmountRows.toString());
        if(i==10){
          element = document.getElementById("chord" + (i+1).toString() + "1" + this.curAmountRows.toString());
        }
        else{
          element = document.getElementById("chord" + (i+1).toString() + this.curAmountRows.toString());
        }
        // let element= document.getElementById("chord" + (i+1).toString() + this.curAmountRows.toString());
        element.innerHTML = this.newRowInnerHtml.toString() + "(" + this.octives + ")"
        element.classList.add("col-sm-11")
        element.addEventListener("click", this.here.bind(this));
        element.setAttribute("style", "background-color: rgb(0, 0, 0); border: none; color: white; padding: 5px; text-align: center; text-decoration: none; display: inline-block; font-size: 12px; margin: 4px 2px; cursor: pointer; border-radius: 12px; width: 80px;")
      }
      this.newRowInnerHtml++
    }
  }


playCurrentTrack(){
  this.stop()
  playstate = true;
  	playerc = "single";
  // Get Slider values
  var distSlideVal = parseFloat((<HTMLInputElement>document.getElementById("distSlide")).value);
  var reverbSlideVal = parseFloat((<HTMLInputElement>document.getElementById("reverbSlide")).value);
  var delaySlideVal = parseFloat((<HTMLInputElement>document.getElementById("delaySlide")).value);

	if(this.distortionS == "off"){
		dist.wet.value = 0;
	}
	else{
		dist.wet.value =  (distSlideVal/100);
	}
	if(this.reverbS == "off"){
		reverb.wet.value = 0;
	}
	else{
		reverb.wet.value =  (reverbSlideVal/100);
	}
	if(this.delayS == "off"){
		delay.wet.value = 0;
	}
	else{
		delay.wet.value =  (delaySlideVal/100);
	}
  console.log(this.bpm)
  let arpeggioSpeed = this.bpm
  let x = this.chord1 //num value of button pressed (1..7)
  bassLoop = new tone.Loop(this.firstLoop, this.bpm); // second parameter shoudld be how many notes selected from arpeggaitor
  //arpeggioLoop = new tone.Loop(this.secondLoop, this.bpm); // second parameter shoudld be how many notes selected from arpeggaitor
  tone.Transport.start();
  bassLoop.start(0);
  //arpeggioLoop.start(0);
  //schedule a few notes
  //tone.Transport.schedule(this.secondLoop, 0)

  let s = parseInt(arpeggioSpeed.substring(0, arpeggioSpeed.length-1)) * 2;
  for (let i = 0; i < s; i++){
    let ns = s;
    let k = 4*(i/ns);
    let usi = "0:"+k + ":0"
    tone.Transport.schedule(this.secondLoop, usi);
  }

  //set the transport to repeat
  tone.Transport.loopEnd = '1m'
  tone.Transport.loop = true
  let eleml = (<HTMLInputElement[]><any>document.getElementsByName("value"));
  maxl= parseInt(eleml[0].max);
  pattern = [];
  for (var i = 0; i < maxl; ++i) {// reads pattern input values
    pattern.push(eleml[i].value);

  }

  curCols = parseInt(this.scurAmountCols)
  for (let num = 0; num<curCols; num++){
    let c = (num + 1) + ""
    if(num == 10){
      c = "chord1" + c
    }
    else{
      c = "chord" + c
    }
    let d = "ionian"
    let example = "D"
    //get mode
    let mode = this.mode
    let instrument = 'bass'
    let tr = this.tonicRoot
    tempArr[num] = this[mode][instrument][tr][this[c] - 1] //dynamically changing scale
  }

  for (let num =0 ; num<maxl; num++){
    // let d = (num + 1) + ""
    // var c = "value" + d
    let mode = this.mode
    let instrument = 'arpeggio'
    let tr = this.tonicRoot
    tempArpeggio[num] = this[mode][instrument][tr][pattern[num]-1]
  }

    /*
	var synth = new tone.Synth().chain(delay, reverb, dist, tone.Master);
	if(this.distortionS == "off"){
		dist.wet.value = 0;
	}
	if(this.reverbS == "off"){
		reverb.wet.value = 0;
	}
	if(this.delayS == "off"){
		delay.wet.value = 0;
	}

  let x = this.chord1 //num value of button pressed (1..7)
  let time = 5
  let tempArr = ['C4','D4','E4','F4','G4','A4','B4']
  let index = 0;
  let curCols = curAmountCols++
  this.scurAmountCols = "" + curAmountCols
  let counter = 0
  var loop = new tone.Loop(function(time){ //Tone.Loop creates a looped callback at the specified interval. The callback can be started, stopped and scheduled along the Transport’s timeline.
    synth.triggerAttackRelease(tempArr[index], 0.2, time)
    console.log(index.toString())
    if(this.curBlue!=undefined){
      document.getElementById(this.curBlue).style.backgroundColor= '';
    }
    document.getElementById(index.toString()).style.backgroundColor= 'blue';
    this.curBlue = index.toString()

    index++
    if(index == curCols){
      this.stop()
    }
  }, this.bpm).start(0);
  for (let num = 0; num<curCols+1; num++){
    let c = (num + 1) + ""
    c = "chord" + c
    let d = "ionian"
    let example = "D"
    //get mode
    let mode = this.mode
    let tr = this.tonicRoot
    tempArr[num] = this[mode][tr][this[c] - 1]
    if(num == 7){
      tone.Transport.start();
    }
  }*/
}
	autoupdate(){
		if(playstate == true){
			this.stop();
			this.play();
		}
	}
  play() {
	  this.stop();
	  playstate = true;
// Get Slider values
	playerc= "multi"
  var distSlideVal = parseFloat((<HTMLInputElement>document.getElementById("distSlide")).value);
  var reverbSlideVal = parseFloat((<HTMLInputElement>document.getElementById("reverbSlide")).value);
  var delaySlideVal = parseFloat((<HTMLInputElement>document.getElementById("delaySlide")).value);

	if(this.distortionS == "off"){
		dist.wet.value = 0;
	}
	else{
		dist.wet.value =  (distSlideVal/100);
	}
	if(this.reverbS == "off"){
		reverb.wet.value = 0;
	}
	else{
		reverb.wet.value =  (reverbSlideVal/100);
	}
	if(this.delayS == "off"){
		delay.wet.value = 0;
	}
	else{
		delay.wet.value =  (delaySlideVal/100);
	}
  console.log(this.bpm)
  let arpeggioSpeed = this.bpm
  let x = this.chord1 //num value of button pressed (1..7)
  bassLoop = new tone.Loop(this.firstLoop, this.bpm); // second parameter shoudld be how many notes selected from arpeggaitor
  //arpeggioLoop = new tone.Loop(this.secondLoop, this.bpm); // second parameter shoudld be how many notes selected from arpeggaitor
  tone.Transport.start();
  bassLoop.start(0);
  //arpeggioLoop.start(0);
  //schedule a few notes
  //tone.Transport.schedule(this.secondLoop, 0)
<<<<<<< HEAD

  let s = parseInt(arpeggioSpeed.substring(0, arpeggioSpeed.length-1)) * 8;
=======
  let eleml = (<HTMLInputElement[]><any>document.getElementsByName("value"));
  maxl= parseInt(eleml[0].max);
  let s = parseInt(arpeggioSpeed.substring(0, arpeggioSpeed.length-1)) * maxl;
  console.log(maxl)
>>>>>>> f4e3ac590998b794d999e0ea51d18a491ac75698
  for (let i = 0; i < s; i++){
    let ns = s;
    let k = 4*(i/ns);
    let usi = "0:"+k + ":0"
    tone.Transport.schedule(this.secondLoop, usi);
  }

  //set the transport to repeat
  tone.Transport.loopEnd = '1m'
  tone.Transport.loop = true
  // let eleml = (<HTMLInputElement[]><any>document.getElementsByName("value"));
  // maxl= parseInt(eleml[0].max);
  pattern = [];
  for (var i = 0; i < maxl; ++i) {// reads pattern input values
    pattern.push(eleml[i].value);

  }
  this.saveBass();
  this.saveArpeggio();
  // console.log("chords " + this.chord1 + " " + this.chord2 + " " + this.chord3 + " " + this.chord4 + " " + this.chord5 + " " + this.chord6 + " " + this.chord7 + " " + this.chord8 + " tonic/root: " + this.tonicRoot + " mode: " + this.mode)
}

saveBass(){
  curCols = parseInt(this.scurAmountCols)
  for (let num = 0; num<curCols; num++){
    let c = (num + 1) + ""
    if(num == 10){
      c = "chord1" + c
    }
    else{
      c = "chord" + c
    }
    let mode = this.mode;
    let instrument = 'bass';
    let tr = this.tonicRoot;
    tempArr[num] = this[mode][instrument][tr][this[c] - 1]; //dynamically changing scale
  }
}

saveArpeggio(){
  for (let num =0 ; num<maxl; num++){
    let mode = this.mode;
    let instrument = 'arpeggio';
    let tr = this.tonicRoot;
    tempArpeggio[num] = this[mode][instrument][tr][pattern[num]-1];
  }
}


secondLoop(time){
  //console.log\("tempArpgeggio: "+ tempArpeggio[tempArpeggioIndex])
  arpeggioSynth.triggerAttackRelease(tempArpeggio[tempArpeggioIndex], "30n", time, 0.1)
  tempArpeggioIndex++;
  if(tempArpeggioIndex == maxl){
    tempArpeggioIndex = 0
  }
}



firstLoop(time){
    let currentBeat = tone.Transport.position.split(":");
    // console.log(tempArr)
    bassSynth.triggerAttackRelease(tempArr[index], '6n', time, 1)
    ////console.log\("bass inside first loop", tempArr[index])
    // loopBeat = new tone.Loop(function(){
    //   ////console.log\("arpeggio .. " + tempArpeggio[index])
    //   arpeggioSynth.triggerAttackRelease(tempArpeggio[tempArpeggioIndex], '6n', time, 0.2)
    //   tempArpeggioIndex++;

    //   if(tempArpeggioIndex == 6){
    //     tempArpeggioIndex = 0
    //   }
    // }, this.bpm).start(0);
      // parameters are note, duration, time, velocity(vel in normal range)
    console.log(document.getElementById(index.toString()))
    if(this.curBlue!=undefined){
      document.getElementById(this.curBlue).style.backgroundColor= '';
    }
    document.getElementById(index.toString()).style.backgroundColor= 'blue';
    this.curBlue = index.toString()
    index++
    if(index == curAmountCols){
		//alert(playerc)
		if(playerc == "single"){
			this.stop()
			index = 0
		}
		else{
			index = 0
		}
    }
}

stop() {
	playstate = false;
  for(let i = 0; i < curAmountCols+1; i++){
    document.getElementById(i.toString()).style.backgroundColor= '';
  }
  tempArpeggioIndex = 0
  tone.Transport.cancel()
}


  //--------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------- visual --------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
  ngOnInit(){
			//radio btn handlers
      /*  var step_opt1 = document.getElementById('option-one');
        var step_opt2 = document.getElementById('option-two');
        var step_opt3 = document.getElementById('option-three');
		var step_opt4 = document.getElementById('option-four');
        step_opt1.onclick = step_opt1_handler;
        step_opt2.onclick = step_opt2_handler;
        step_opt3.onclick = step_opt3_handler;
        step_opt4.onclick = step_opt4_handler;	*/


        //particles.js
        this.myStyle = {
          'position': 'fixed',
          'width': '100%',
          'height': '100%',
          'z-index': -1,
          'top': 0,
          'left': 0,
          'right': 0,
          'bottom': 0,
          'background-color' : 'black'
      };

      this.myParams = {
              particles: {
                  number: {
                      value: 50,
                  },
                  color: {
                      value: '#ffffff'
                  },
                  shape: {
                      type: 'triangle',
                  },
          }
       };
  
		var step_opt6 = <HTMLElement>document.getElementById('option-six') as HTMLInputElement;
		step_opt6.checked = true;//default value
		var maxl = 8;
		this.drawing(maxl);
		// audio
		this.distortionSwitch("off");
		this.reverbSwitch("off");
		this.delaySwitch("off");
    this.distSlide();
  }

  // Slider for distortion intensity
  distSlide(){
  //  setVol = p5.createSlider(0, 1, 0, 0);
  }

  	 autodraw() {
		let elem = (<HTMLInputElement[]><any>document.getElementsByName("value"));
		var maxl= parseInt(elem[0].max);
		this.drawing(maxl);
		this.autoupdate();
	}


   valcheck(val) { //this function reduces the value of input if it is greater than acceptable maximum limit
		let elem = (<HTMLInputElement[]><any>document.getElementsByName("value"));
		var maxl= parseInt(elem[0].max);
		for (var i = 0; i < maxl; ++i) {
			while(parseInt(elem[i].value) > maxl){
				// //console.log\(elem);
				let temp = parseInt(elem[i].value) - 1;
				elem[i].value = "" + (temp);
			}

		}
	}


	 drawing(val){ // this function draws the arpeggio pattern on canvas
		var maxl = val;
		var ar8 = [373,326,280,233,186,140,93,47];
		var ar7 = [368,315,263,210,158,105,52];
		var ar6 = [360,300,240,180,120,60];
		var ar5 =[350,280,210,140,70];
		var ar4 =[336,252,168,84];
		var ar3 =[315,210,105];
		const canvas = <HTMLCanvasElement>document.getElementById("myCanvas");
		const ctx = canvas.getContext("2d");
		let elem = (<HTMLInputElement[]><any>document.getElementsByName("value"));
		var pattern = []; // clears the array to prevent the from stacking inputs
		this.valcheck(maxl);

		for (var i = 0; i < maxl; ++i) {// reads pattern input values
				pattern.push(elem[i].value);
		}
//alert("length = "+ pattern.length);
		ctx.clearRect(0, 0, canvas.width, canvas.height);//clears canvas before starting new drawing
		ctx.lineWidth=5;
		ctx.strokeStyle="#892c76";
		// "#42f4bc" aqua color code
		// "#892c76" purple color code
		ctx.fillStyle="#42f4bc";
		ctx.beginPath();
		if(maxl==3){
			for(i=0; i< 3;i++){
				var x = ar3[2-i];
				var y = ar3[pattern[i]-1];
				if(i<2){
					var x1 = ar3[2-(i+1)];
					var y1 = ar3[pattern[i+1]-1];
				}
				ctx.moveTo(x,y);
				ctx.arc(x,y,5,0,2*Math.PI);
				ctx.moveTo(x,y);
				ctx.lineTo(x1,y1);
				ctx.stroke();
				ctx.fill();
			};
			ctx.closePath();
		}
		if(maxl==4){
			for(i=0; i< 4;i++){
				var x = ar4[3-i];
				var y = ar4[pattern[i]-1];
				if(i<3){
					var x1 = ar4[3-(i+1)];
					var y1 = ar4[pattern[i+1]-1];
				}
				ctx.moveTo(x,y);
				ctx.arc(x,y,5,0,2*Math.PI);
				ctx.moveTo(x,y);
				ctx.lineTo(x1,y1);
				ctx.stroke();
				ctx.fill();
			};
			ctx.closePath();
		}
		if(maxl==5){
			for(i=0; i< 5;i++){
				var x = ar5[4-i];
				var y = ar5[pattern[i]-1];
				if(i<4){
					var x1 = ar5[4-(i+1)];
					var y1 = ar5[pattern[i+1]-1];
				}
				ctx.moveTo(x,y);
				ctx.arc(x,y,5,0,2*Math.PI);
				ctx.moveTo(x,y);
				ctx.lineTo(x1,y1);
				ctx.stroke();
				ctx.fill();
			};
			ctx.closePath();
		}
		if(maxl==6){
			for(i=0; i< 6;i++){
				var x = ar6[5-i];
				var y = ar6[pattern[i]-1];
				if(i<5){
					var x1 = ar6[5-(i+1)];
					var y1 = ar6[pattern[i+1]-1];
				}
				ctx.moveTo(x,y);
				ctx.arc(x,y,5,0,2*Math.PI);
				ctx.moveTo(x,y);
				ctx.lineTo(x1,y1);
				ctx.stroke();
				ctx.fill();
			};
			ctx.closePath();
		}
		if(maxl==7){
			for(i=0; i< 7;i++){
				var x = ar7[6-i];
				var y = ar7[pattern[i]-1];
				if(i<6){
					var x1 = ar7[6-(i+1)];
					var y1 = ar7[pattern[i+1]-1];
				}
				ctx.moveTo(x,y);
				ctx.arc(x,y,5,0,2*Math.PI);
				ctx.moveTo(x,y);
				ctx.lineTo(x1,y1);
				ctx.stroke();
				ctx.fill();
			};
			ctx.closePath();
		}
		if(maxl==8){
			for(i=0; i< 8;i++){
				var x = ar8[7-i];
				var y = ar8[pattern[i]-1];
				if(i<7){
					var x1 = ar8[7-(i+1)];
					var y1 = ar8[pattern[i+1]-1];
				}
				ctx.moveTo(x,y);
				ctx.arc(x,y,5,0,2*Math.PI);
				ctx.moveTo(x,y);
				ctx.lineTo(x1,y1);
				ctx.stroke();
				ctx.fill();
			};
			ctx.closePath();
		}

	}

     step_opt1_handler() {
		var maxl=3;
		let elem = (<HTMLInputElement[]><any>document.getElementsByName("value"));
		for (var i = 0; i < elem.length; ++i) {
			elem[i].max = "3";
			if(i >= 3){
				elem[i].style.display = "none";
			}
			else{
				elem[i].style.display = "inline-block";
			}
		}
		this.drawing(maxl);
		this.autoupdate();
    }

	 step_opt2_handler() {
		var maxl=4;
		let elem = (<HTMLInputElement[]><any>document.getElementsByName("value"));
		for (var i = 0; i < elem.length; ++i) {
			elem[i].max = "4";
			if(i >= 4){
				elem[i].style.display = "none";
			}
			else{
				elem[i].style.display = "inline-block";
			}
		}
		this.drawing(maxl);
		this.autoupdate();
    }

	 step_opt3_handler() {
		var maxl=5;
		let elem = (<HTMLInputElement[]><any>document.getElementsByName("value"));
		for (var i = 0; i < elem.length; ++i) {
			elem[i].max = "5";
			if(i >= 5){
				elem[i].style.display = "none";
			}
			else{
				elem[i].style.display = "inline-block";
			}
		}
		this.drawing(maxl);
		this.autoupdate();
    }

	 step_opt4_handler() {
		var maxl=6;
		let elem = (<HTMLInputElement[]><any>document.getElementsByName("value"));
		for (var i = 0; i < elem.length; ++i) {
			elem[i].max = "6";
			if(i >= 6){
				elem[i].style.display = "none";
			}
			else{
				elem[i].style.display = "inline-block";
			}
		}
		this.drawing(maxl);
		this.autoupdate();
    }

	 step_opt5_handler() {
		var maxl=7;
		let elem = (<HTMLInputElement[]><any>document.getElementsByName("value"));
		for (var i = 0; i < elem.length; ++i) {
			elem[i].max = "7";
			if(i >= 7){
				elem[i].style.display = "none";
			}
			else{
				elem[i].style.display = "inline-block";
			}
		}
		this.drawing(maxl);
		this.autoupdate();
    }

	 step_opt6_handler() {
		var maxl=8;
		let elem = (<HTMLInputElement[]><any>document.getElementsByName("value"));
		for (var i = 0; i < elem.length; ++i) {
			elem[i].max = "8";
			elem[i].style.display = "inline-block";
		}
		this.drawing(maxl);
		this.autoupdate();
    }




// --------------------------------------- FFT Visualizer --------------------------------------------------------
/*
function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}
function preload() {
  song = loadSound('acdc.flac');
}
function setup() {
  var cnv = createCanvas(windowWidth, 256);
  cnv.style('block');
  cnv.position(0,0);
  colorMode(HSB);
  button = createButton('toggle');
  button.mousePressed(toggleSong);
  song.play();
  fft = new p5.FFT(0.2, 256);
}
function draw() {
  background(0);
  var spectrum = fft.analyze();
  var w;
  w = windowWidth / spectrum.length;
  for (var i = 0; i < spectrum.length; i++) {
    var amp = spectrum[i];
    var y = map(amp,0,256,height,0);
    stroke(i, 255, 255);
    line(i*w, height, i*w, y);
  }
}*/
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

makeScale(inputScale){
	let keys = ['C', 'CSHARP','D', 'DSHARP','E','F', 'FSHARP','G', 'GSHARP','A', 'ASHARP','B'];
	let bassvalues = [];
	let arpeggiovalues = [];
	for(let i=0; i<12;i++){
		bassvalues.push(this.makeScaleBass(inputScale,i));
		arpeggiovalues.push(this.makeScaleArpeggio(inputScale,i));
	}
	
	let bass = {};
	keys.forEach((key, i) => bass[key] = bassvalues[i]);
	let arp = {};
	keys.forEach((key, i) => arp[key] = arpeggiovalues[i]);
	
	let keys2 =["arpeggio", "bass"];
	let values=[arp,bass];	
	let result1 = {};
	keys2.forEach((key, i) => result1[key] = values[i]);
	return result1;	
}
	
makeScaleBass(inputScale, scaleIndex) {			
	let notes_names = ["C_1", "C#_1", "D_1", "D#_1", "E_1", "F_1", "F#_1", "G_1", "G#_1", "A_1", "A#_1", "B_1",
				"C0", "C#0", "D0", "D#0", "E0", "F0", "F#0", "G0", "G#0", "A0", "A#0", "B0",
                "C1", "C#1", "D1", "D#1", "E1", "F1", "F#1", "G1", "G#1", "A1", "A#1", "B1",
                "C2", "C#2", "D2", "D#2", "E2", "F2", "F#2", "G2", "G#2", "A2", "A#2", "B2",
                "C3", "C#3", "D3", "D#3", "E3", "F3", "F#3", "G3", "G#3", "A3", "A#3", "B3",
                "C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4",
                "C5", "C#5", "D5", "D#5", "E5", "F5", "F#5", "G5", "G#5", "A5", "A#5", "B5",
                "C6", "C#6", "D6", "D#6", "E6", "F6", "F#6", "G6", "G#6", "A6", "A#6", "B6",
                "C7", "C#7", "D7", "D#7", "E7", "F7", "F#7", "G7", "G#7", "A7", "A#7", "B7",
                "C8", "C#8", "D8", "D#8", "E8", "F8", "F#8", "G8", "G#8", "A8", "A#8", "B8",
                "C9", "C#9", "D9", "D#9", "E9", "F9", "F#9", "G9"];

	let startingNote = 36+scaleIndex;  // 36 = C2 
	let myScale = [];
	myScale.push( notes_names[inputScale[0] + startingNote] );
	for(let j=0; j<4; j++){ 
		for(let i=1; i<inputScale.length; i++) {
			myScale.push( notes_names[inputScale[i] + startingNote] );
		}
		startingNote=startingNote+12;
	}
	return myScale;
 }
 
makeScaleArpeggio(inputScale, scaleIndex) {		
	let notes_names = ["C_1", "C#_1", "D_1", "D#_1", "E_1", "F_1", "F#_1", "G_1", "G#_1", "A_1", "A#_1", "B_1",
				"C0", "C#0", "D0", "D#0", "E0", "F0", "F#0", "G0", "G#0", "A0", "A#0", "B0",
                "C1", "C#1", "D1", "D#1", "E1", "F1", "F#1", "G1", "G#1", "A1", "A#1", "B1",
                "C2", "C#2", "D2", "D#2", "E2", "F2", "F#2", "G2", "G#2", "A2", "A#2", "B2",
                "C3", "C#3", "D3", "D#3", "E3", "F3", "F#3", "G3", "G#3", "A3", "A#3", "B3",
                "C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4",
                "C5", "C#5", "D5", "D#5", "E5", "F5", "F#5", "G5", "G#5", "A5", "A#5", "B5",
                "C6", "C#6", "D6", "D#6", "E6", "F6", "F#6", "G6", "G#6", "A6", "A#6", "B6",
                "C7", "C#7", "D7", "D#7", "E7", "F7", "F#7", "G7", "G#7", "A7", "A#7", "B7",
                "C8", "C#8", "D8", "D#8", "E8", "F8", "F#8", "G8", "G#8", "A8", "A#8", "B8",
                "C9", "C#9", "D9", "D#9", "E9", "F9", "F#9", "G9"];

	//var inputScale = [0,2,4,5,7,9,11,12];
	let startingNote = 60+scaleIndex;  // 60 = C4 = middle C
	let myScale = [];
	myScale.push( notes_names[inputScale[0] + startingNote] );
	for(let j=0; j<4; j++){ 
		for(let i=1; i<inputScale.length; i++) {
			myScale.push( notes_names[inputScale[i] + startingNote] );
		}
		startingNote=startingNote+12;
	}
	return myScale;
 }



}

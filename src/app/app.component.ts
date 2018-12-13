import { Component } from '@angular/core'
import * as tone from 'tone'
import { attachEmbeddedView } from '@angular/core/src/view';

let loopBeat;
let bassSynth = new tone.MembraneSynth().toMaster()
let arpeggioSynth = new tone.MonoSynth().toMaster()
let tempArr = ['C4','D4','E4','F4','G4','A4','B4']
let tempArpeggio = ['C6','D6','E6','F6','G6','A6']
let index = 0;
let counter = 0;
let curCols;
let maxl;
let pattern;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  //arpeggio definitions
  ch1 = '1'
  ch2 = '2'
  ch3 = '3'
  ch4 = '4'
  ch5 = '5'
  ch6 = '6'

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
  chord11 = '1'
  curActiveC11 = 'chord111'
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
  curAmountCols = '7'
  rows_that_need_adding = 0
  newRowInnerHtml = 1
  octives = 2
  
  distortionS = "off"
  reverbS = "off"
  delayS = "off"

  ionian = {
    C : ['C4','D4','E4','F4','G4','A4','B4','C4','D4','E4','F4','G4','A4','B4'],
    CSHARP : ['C#4','D#4','F4','F#4','G#4','A#4','C5'],
    D : ['D4','E4','F#4','G4','A4','B4','C#5'],
    DSHARP : ['D#4','F4','G4','G#4','A#4','C5','D5'],
    E : ['E4','F#4','G#4','A4','B4','C#5','D#5'],
    F : ['F4','G4','A4','A#4','C5','D5','E5'],
    FSHARP : ['F#4','G#4','A#4','B4','C#5','D#5','F5'],
    G : ['G4','A4','B4','C5','D5','E5','F#5'],
    GSHARP : ['G#4','A#4','C5','C#5','D#5','F5','G#5'],
    A : ['A4','B4','C#5','D5','E5','F#5','G#5'],
    ASHARP : ['A#4','C5','D5','D#5','F5','G5','A5'],
    B : ['B4','C#5','D#5','E5','F#5','G#5','A#5']
 };

  aeolian = {
    C : ['C4','D4','D#4','F4','G4','G#4','A#4'],
    CSHARP : ['C#4','D#4','E4','F#4','G#4','A4','B4'],
    D : ['D4','E4','F4','G4','A4','A#4','C5'],
    DSHARP : ['D#4','F4','F#4','G#4','A#4','B5','C#5'],
    E : ['E4','F#4','G4','A4','B4','C5','D5'],
    F : ['F4','G4','G#4','A#4','C5','C#5','D#5'],
    FSHARP : ['F#4','G#4','A4','B4','C#5','D5','E5'],
    G : ['G4','A4','A#4','C5','D5','D#5','F5'],
    GSHARP : ['G#4','A#4','B5','C#5','D#5','E5','G5'],
    A : ['A4','B4','C5','D5','E5','F5','G5'],
    ASHARP : ['A#4','C5','C#5','D#5','F5','F#5','G#5'],
    B : ['B4','C#5','D5','E5','F#5','G5','A5']
};

changeBPM(val){
  this.bpm = val + "n"
  if(this.curBpm != ''){
    document.getElementById(this.curBpm).style.backgroundColor = '';
  }
  document.getElementById(this.bpm).style.backgroundColor = 'red';
  this.curBpm = val + "n"

  console.log(this.bpm)
}

chordClicked(chord, num, c){
  this.stop()
  this[chord] = num
  let curAct = "curActiveC" + c
  if(this[curAct] != ''){
    document.getElementById(this[curAct]).style.backgroundColor = '';
  }
  document.getElementById(chord+num).style.backgroundColor = 'red';
  this[curAct] = chord+num
}

changeMode(val){

  this.mode = val
  if(this.curMode != ''){
    document.getElementById(this.curMode).style.backgroundColor = '';
  }
  document.getElementById(val).style.backgroundColor = 'red';
  this.curMode = val
}

changeTonicRoot(val){
  this.tonicRoot = val
  if(this.curTonicRoot != ''){
    document.getElementById(this.curTonicRoot).style.backgroundColor = '';
  }
  document.getElementById(val).style.backgroundColor = 'red';
  this.curTonicRoot = val
}

temp = []

addCol(){
  if(parseInt(this.curAmountCols) < 15){
    let x = parseInt(this.curAmountCols) + 1

    console.log("Added Col: " + x)

    this.curAmountCols = x.toString();
    document.getElementById(this.curAmountCols).style.display = "block"
    this.addCertainAmountOfButtons(x)
  }
}

removeCol(){
  if(parseInt(this.curAmountCols) > 7){
    document.getElementById(this.curAmountCols).style.display = "none"
    let x = parseInt(this.curAmountCols) - 1

    console.log("Removed Col: " + x)

    this.curAmountCols = x.toString();
  }
}

addCertainAmountOfButtons(at){
  let counter = 1
  for(let i = 1; i < this.rows_that_need_adding+1; i++){
    if(counter == 8){
      counter = 1
    }
    let element = (<HTMLElement><any>document.createElement("button"));
    let foo = document.getElementById(at.toString());
    foo.appendChild(element);
    element.innerHTML = counter.toString() + "(" + this.octives + ")"
    counter++
    this.newRowInnerHtml.toString()
    element.classList.add("col-sm-12")
    element.setAttribute("style", "background-color: rgb(78, 78, 78); border: none; color: white; padding: 5px; text-align: center; text-decoration: none; display: inline-block; font-size: 12px; margin: 4px 2px; cursor: pointer; border-radius: 12px; width: 80px;")
  }
}

addButton(){
  this.rows_that_need_adding++
  if(this.newRowInnerHtml == 8){
    this.newRowInnerHtml = 1
    this.octives++
  }
  var element = document.createElement("button");
  element.innerHTML = "hello"
  for(let i = 0; i < parseInt(this.curAmountCols)+1; i++){
    console.log(this.curAmountCols)
    let element = (<HTMLElement><any>document.createElement("button"));
    let foo = document.getElementById(i.toString());
    foo.appendChild(element);
    element.innerHTML = this.newRowInnerHtml.toString() + "(" + this.octives + ")"
    element.classList.add("col-sm-12")
    element.setAttribute("style", "background-color: rgb(78, 78, 78); border: none; color: white; padding: 5px; text-align: center; text-decoration: none; display: inline-block; font-size: 12px; margin: 4px 2px; cursor: pointer; border-radius: 12px; width: 80px;")
  }
  this.newRowInnerHtml++
}

  play() {
    let x = this.chord1 //num value of button pressed (1..7)
    

    loopBeat = new tone.Loop(this.bothTracks, "6n"); // second parameter shoudld be how many notes selected from arpeggaitor
    tone.Transport.start();
    loopBeat.start(0);
    let eleml = (<HTMLInputElement[]><any>document.getElementsByName("value"));
    maxl= parseInt(eleml[0].max);
    pattern = [];
    for (var i = 0; i < maxl; ++i) {// reads pattern input values
      pattern.push(eleml[i].value);	
       
    }
    
    curCols = parseInt(this.curAmountCols) + 1
    console.log("CurCols: " + curCols)
    for (let num = 0; num<curCols+1; num++){
      
      let c = (num + 1) + ""
      c = "chord" + c
      let d = "ionian"
      let example = "D"
      //get mode
      let mode = this.mode
      let tr = this.tonicRoot
      tempArr[num] = this[mode][tr][1] //dynamically changing scale
    }

    for (let num =0 ; num<maxl; num++){
      let d = (num + 1) + ""
      var c = "value" + d
      let mode = this.mode
      let tr = this.tonicRoot
      tempArpeggio[num] = this[mode][tr][pattern[num]-1] 
    }
    
  }



  bothTracks(time){
    let currentBeat = tone.Transport.position.split(":");
    console.log(currentBeat)
    arpeggioSynth.triggerAttackRelease(tempArpeggio[index], '8n', time, 0.2)   // parameters are note, duration, time, velocity(vel in normal range)
    if(this.curBlue!=undefined){
      document.getElementById(this.curBlue).style.backgroundColor= '';
    }
    document.getElementById(index.toString()).style.backgroundColor= 'blue';
    this.curBlue = index.toString()
    index++
    if(index == curCols){
      index = 0
      }
      console.log(counter++);
  }

  

  
  
  stop() {

    for(let i = 0; i<parseInt(this.curAmountCols)+1; i++){

      document.getElementById(i.toString()).style.backgroundColor= '';

    }

    tone.Transport.cancel()

  } 
  
}



import { Component } from '@angular/core'
import * as tone from 'tone'
import { attachEmbeddedView } from '@angular/core/src/view';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
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
  curActiveC11 = 'chord11121'
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
  curAmountCols = 7
  rows_that_need_adding = 0
  newRowInnerHtml = 1
  octives = 3
  curAmountRows = 7
  rowsNeedAddingButtons = 7
  
  start = 7
  end = 7
  alreadyDone = 8

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

  ionian = {
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
  //all_ionian_scales = [this.ionian.C, this.ionian.CSHARP, this.ionian.D, this.ionian.DSHARP, this.ionian.E, this.ionian.F, this.ionian.FSHARP, this.ionian.G, this.ionian.GSHARP, this.ionian.A, this.ionian.ASHARP, this.ionian.B]

  changeBPM(val){
    this.bpm = val + "n"
    if(this.curBpm != ''){
      document.getElementById(this.curBpm).style.backgroundColor = '';
    }
    document.getElementById(this.bpm).style.backgroundColor = 'red';
    this.curBpm = val + "n"
  }

  chordClicked(chord, num, c){
    this.stop()
    this[chord] = num
    let curAct = "curActiveC" + c
    if(this[curAct] != ''){
      document.getElementById(this[curAct]).setAttribute("style", "background-color: rgb(78, 78, 78); border: none; color: white; padding: 5px; text-align: center; text-decoration: none; display: inline-block; font-size: 12px; margin: 4px 2px; cursor: pointer; border-radius: 12px; width: 80px;")
    }
    document.getElementById(chord+num).style.backgroundColor = 'red';
    this[curAct] = chord+num
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
    if(this.curAmountCols < 15){
      this.curAmountCols++
      // console.log("Added Col: " + x)
      let x = this.curAmountCols.toString();
      document.getElementById(x).style.display = "block"
      this.addCertainAmountOfButtons(this.curAmountCols)
    }
  }

  removeCol(){
    if(this.curAmountCols > 7){
      document.getElementById(this.curAmountCols.toString()).style.display = "none"
      this.curAmountCols--
    }
  }

  addCertainAmountOfButtons(at){
    let counter = 1
    if(this.check[at]==false){
      for(let i = this.start; i < this.end; i++){
        if(counter == 8){
          counter = 1
        }
  
        // let element = (<HTMLElement><any>document.createElement("button"));
        let html = '<button id="chord'+ (at+1).toString() + (i+1) + '" value="chord'+ (at+1).toString() + ',' + (i+1) + ',' + (at+1).toString() +'"></button>'  // chordClicked('chord16', 2, 16)
        let foo = document.getElementById(at.toString())
        foo.insertAdjacentHTML('beforeend', html)
        
        let element = document.getElementById('chord'+ (at+1).toString() + (i+1))
        // // this.rowsNeedAddingButtons++
        element.innerHTML = counter.toString() + "(" + this.octives + ")"
        counter++
        // // this.newRowInnerHtml.toString()
        element.addEventListener("click", this.here.bind(this)); 
        element.classList.add("col-sm-11")
        element.setAttribute("style", "background-color: rgb(78, 78, 78); border: none; color: white; padding: 5px; text-align: center; text-decoration: none; display: inline-block; font-size: 12px; margin: 4px 2px; cursor: pointer; border-radius: 12px; width: 80px;")
        this.check[at]==true
      }
    }
    
      console.log(this.check)
    
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
      console.log(this.end)
      for(let i = 0; i < this.curAmountCols+1; i++){
        let html = '<button id="chord'+ (i+1).toString() + this.curAmountRows.toString() + '" value="chord'+ (i+1).toString() + ',' + this.curAmountRows.toString() + ',' + (i+1).toString() +'"></button>'  // chordClicked('chord16', 2, 16)
        let foo = document.getElementById(i.toString())
        foo.insertAdjacentHTML('beforeend', html)
        let element= document.getElementById("chord" + (i+1).toString() + this.curAmountRows.toString());
        element.innerHTML = this.newRowInnerHtml.toString() + "(" + this.octives + ")"
        element.classList.add("col-sm-11")
        element.addEventListener("click", this.here.bind(this)); 
        element.setAttribute("style", "background-color: rgb(78, 78, 78); border: none; color: white; padding: 5px; text-align: center; text-decoration: none; display: inline-block; font-size: 12px; margin: 4px 2px; cursor: pointer; border-radius: 12px; width: 80px;")
      }
      this.newRowInnerHtml++
    }
  }


playCurrentTrack(){
  this.stop()
  let synth = new tone.Synth().toMaster()
  let x = this.chord1 //num value of button pressed (1..7)
  let time = 5
  let tempArr = ['C4','D4','E4','F4','G4','A4','B4']
  let index = 0;
  let curCols = this.curAmountCols++
  console.log("CurCols: " + curCols)
  let counter = 0
  var loop = new tone.Loop(function(time){ //Tone.Loop creates a looped callback at the specified interval. The callback can be started, stopped and scheduled along the Transport’s timeline.
    synth.triggerAttackRelease(tempArr[index], 0.2, time)
    //console.log(this.curBlue)
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
  }
}

  play() {
    let synth = new tone.Synth().toMaster()
    let x = this.chord1 //num value of button pressed (1..7)
    let time = 5
    let tempArr = ['C4','D4','E4','F4','G4','A4','B4']
    let index = 0;
    let curCols = this.curAmountCols++
    let counter = 0
    var loop = new tone.Loop(function(time){ //Tone.Loop creates a looped callback at the specified interval. The callback can be started, stopped and scheduled along the Transport’s timeline.
      synth.triggerAttackRelease(tempArr[index], 0.2, time)
      if(this.curBlue!=undefined){
        document.getElementById(this.curBlue).style.backgroundColor= '';
      }
      document.getElementById(index.toString()).style.backgroundColor= 'blue';
      this.curBlue = index.toString()
      console.log(index)
      index++
      if(index == curCols+1){
        index = 0
      }
    }, this.bpm).start(0);

    for (let num = 0; num<curCols+1; num++){
      let c = (num + 1) + ""
      if(num == 10){
        c+="1"
        console.log(c)
      }
      c = "chord" + c
      let d = "ionian"
      let example = "D"
      //get mode
      let mode = this.mode
      let tr = this.tonicRoot
      tempArr[num] = this[mode][tr][this[c] - 1] //dynamically changing scale
      if(num == curCols){
        tone.Transport.start(); //BPM
        console.log(tempArr)
      }
    }

    // console.log("chords " + this.chord1 + " " + this.chord2 + " " + this.chord3 + " " + this.chord4 + " " + this.chord5 + " " + this.chord6 + " " + this.chord7 + " " + this.chord8 + " tonic/root: " + this.tonicRoot + " mode: " + this.mode)
  }
  stop() {
    // for(let i = 0; i < this.curAmountCols+1; i++){
    //   document.getElementById(i.toString()).style.backgroundColor= '';
    // }
    tone.Transport.cancel()
  }
}

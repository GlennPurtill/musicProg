import { Component } from '@angular/core'
import * as tone from 'tone'

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
  //all_ionian_scales = [this.ionian.C, this.ionian.CSHARP, this.ionian.D, this.ionian.DSHARP, this.ionian.E, this.ionian.F, this.ionian.FSHARP, this.ionian.G, this.ionian.GSHARP, this.ionian.A, this.ionian.ASHARP, this.ionian.B]


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

      console.log(x)
      
      this.curAmountCols = x.toString();
      document.getElementById(this.curAmountCols).style.display = "block"
    }
  }
  
  removeCol(){
    if(parseInt(this.curAmountCols) > 7){
      document.getElementById(this.curAmountCols).style.display = "none"
      let x = parseInt(this.curAmountCols) - 1
      console.log(x)    
      
      this.curAmountCols = x.toString();
    }
  }
  
  play() {
  
    let synth = new tone.Synth().toMaster()
    let x = this.chord1
    let time = 5
    let tempArr = ['C4','D4','E4','F4','G4','A4','B4']
    let index = 0;
    let curCols = parseInt(this.curAmountCols) + 1
    console.log(curCols)
    let counter = 0
    var loop = new tone.Loop(function(time){
      synth.triggerAttackRelease(tempArr[index], 0.2, time)
      console.log(this.curBlue)
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
    console.log(tempArr)
    
    // console.log("chords " + this.chord1 + " " + this.chord2 + " " + this.chord3 + " " + this.chord4 + " " + this.chord5 + " " + this.chord6 + " " + this.chord7 + " " + this.chord8 + " tonic/root: " + this.tonicRoot + " mode: " + this.mode)
  }
  stop() {
    tone.Transport.cancel()
  }

}
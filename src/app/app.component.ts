import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'musicProg';
  chord1 = '1'
  curActiveC1 = ''
  chord2 = '1'
  curActiveC2 = ''
  chord3 = '1'
  curActiveC3 = ''
  chord4 = '1'
  curActiveC4 = ''
  chord5 = '1'
  curActiveC5 = ''
  chord6 = '1'
  curActiveC6 = ''
  chord7 = '1'
  curActiveC7 = ''
  chord8 = '1'
  curActiveC8 = ''
  tonicRoot = 'C'
  curTonicRoot = ''
  mode = 'Ionian'
  C = ['C4','D4','E4','F4','G4','A4','B4']
  CSHARP = ['C#4','D#4','F4','F#4','G#4','A#4','C5']
  D = ['D4','E4','F#4','G4','A4','B4','C#5']
  DSHARP = ['D#4','F4','G4','G#4','A#4','C5','D5']
  E = ['E4','F#4','G#4','A4','B4','C#5','D#5']
  F = ['F4','G4','A4','A#4','C5','D5','E5']
  FSHARP = ['F#4','G#4','A#4','B4','C#5','D#5','F5']
  G = ['G4','A4','B4','C5','D5','E5','F#5']
  GSHARP = ['G#4','A#4','C5','C#5','D#5','F5','G#5']
  A = ['A4','B4','C#5','D5','E5','F#5','G#5']
  ASHARP = ['A#4','C5','D5','D#5','F5','G5','A5']
  B = ['B4','C#5','D#5','E5','F#5','G#5','A#5']
  
  all_scales = [this.C, this.CSHARP, this.D, this.DSHARP, this.E, this.F, this.FSHARP, this.G, this.GSHARP, this.A, this.ASHARP, this.B]


  chordClicked(chord, num){
    switch(chord) {
      case "chord1":
          this.chord1 = num
          if(this.curActiveC1 != ''){
            document.getElementById(this.curActiveC1).style.backgroundColor = '';
          }
          document.getElementById(chord+num).style.backgroundColor = 'red';
          this.curActiveC1 = chord+num
          break
      case "chord2":
          this.chord2 = num 
          if(this.curActiveC2 != ''){
            document.getElementById(this.curActiveC2).style.backgroundColor = '';
          }
          document.getElementById(chord+num).style.backgroundColor = 'red';
          this.curActiveC2 = chord+num
          break
      case "chord3":
          this.chord3 = num 
          if(this.curActiveC3 != ''){
            document.getElementById(this.curActiveC3).style.backgroundColor = '';
          }
          document.getElementById(chord+num).style.backgroundColor = 'red';
          this.curActiveC3 = chord+num
          break
      case "chord4":
          this.chord4 = num
          if(this.curActiveC4 != ''){
            document.getElementById(this.curActiveC4).style.backgroundColor = '';
          }
          document.getElementById(chord+num).style.backgroundColor = 'red';
          this.curActiveC4 = chord+num 
          break
      case "chord5":
          this.chord5 = num 
          if(this.curActiveC5 != ''){
            document.getElementById(this.curActiveC5).style.backgroundColor = '';
          }
          document.getElementById(chord+num).style.backgroundColor = 'red';
          this.curActiveC5 = chord+num
          break
      case "chord6":
          this.chord6 = num 
          if(this.curActiveC6 != ''){
            document.getElementById(this.curActiveC6).style.backgroundColor = '';
          }
          document.getElementById(chord+num).style.backgroundColor = 'red';
          this.curActiveC6 = chord+num
          break
      case "chord7":
          this.chord7 = num 
          if(this.curActiveC7 != ''){
            document.getElementById(this.curActiveC7).style.backgroundColor = '';
          }
          document.getElementById(chord+num).style.backgroundColor = 'red';
          this.curActiveC7 = chord+num
          break
      case "chord8":
          this.chord8 = num 
          if(this.curActiveC8 != ''){
            document.getElementById(this.curActiveC8).style.backgroundColor = '';
          }
          document.getElementById(chord+num).style.backgroundColor = 'red';
          this.curActiveC8 = chord+num
          break
    }
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
  play() {
    
    
    
    let x = this.chord1

  
    let num = 0;
    for (num = 0; num<8; num++){
      let c = (num + 1) + ""
      c = "chord" + c
      let tr = this.tonicRoot
      // console.log(this[tr])
      this.temp[num] = this[tr][this[c] - 1]
      // console.log(this[c])
    } 
    console.log(this.temp)
    

      
    
    // console.log("chords " + this.chord1 + " " + this.chord2 + " " + this.chord3 + " " + this.chord4 + " " + this.chord5 + " " + this.chord6 + " " + this.chord7 + " " + this.chord8 + " tonic/root: " + this.tonicRoot + " mode: " + this.mode)
  }
}
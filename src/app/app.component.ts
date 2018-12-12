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
  
  disto = "off"


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
  
   distortionSwitch(val){
    this.disto = val
    if(this.disto == "on"){
      document.getElementById("distortion").style.backgroundColor = 'red';
	  document.getElementById("nodistortion").style.backgroundColor = '';
    }
    else{
		document.getElementById("distortion").style.backgroundColor = '';
		document.getElementById("nodistortion").style.backgroundColor = 'red';
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
playCurrentTrack(){
  this.stop()
    var dist = new tone.Distortion(0.9).toMaster();
	if(this.disto == "on"){
		var synth = new tone.Synth().connect(dist);
	}
	else{
		var synth = new tone.Synth().toMaster();
	}
  
  let x = this.chord1 //num value of button pressed (1..7)
  let time = 5
  let tempArr = ['C4','D4','E4','F4','G4','A4','B4']
  let index = 0;
  let curCols = parseInt(this.curAmountCols) + 1
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
    //console.log(counter++);
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


}


  play() {

    var dist = new tone.Distortion(0.9).toMaster();
	if(this.disto == "on"){
		var synth = new tone.Synth().connect(dist);
	}
	else{
		var synth = new tone.Synth().toMaster();
	}
	
    let x = this.chord1 //num value of button pressed (1..7)
    let time = 5
    let tempArr = ['C4','D4','E4','F4','G4','A4','B4']
    let index = 0;
	
		//arpeggio
	let eleml = (<HTMLInputElement[]><any>document.getElementsByName("value"));
	var maxl= parseInt(eleml[0].max);
	var pattern = [];
	for (var i = 0; i < maxl; ++i) {// reads pattern input values
		pattern.push(eleml[i].value);	
	}
	
	
    let curCols = parseInt(this.curAmountCols) + 1
    console.log("CurCols: " + curCols)
    let counter = 0
    var loop = new tone.Loop(function(time){ //Tone.Loop creates a looped callback at the specified interval. The callback can be started, stopped and scheduled along the Transport’s timeline.
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
      tempArr[num] = this[mode][tr][this[c] - 1] //dynamically changing scale
      if(num == 7){
        tone.Transport.start(); //BPM
      }
    }
    console.log(tempArr)

    // console.log("chords " + this.chord1 + " " + this.chord2 + " " + this.chord3 + " " + this.chord4 + " " + this.chord5 + " " + this.chord6 + " " + this.chord7 + " " + this.chord8 + " tonic/root: " + this.tonicRoot + " mode: " + this.mode)
  }
  
  
  

  stop() {

    for(let i = 0; i<parseInt(this.curAmountCols)+1; i++){

      document.getElementById(i.toString()).style.backgroundColor= '';

    }

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
		var step_opt4 = <HTMLElement>document.getElementById('option-four') as HTMLInputElement;
		step_opt4.checked = true;//default value
		var maxl = 6;
		this.drawing(maxl);
		// audio 
		this.distortionSwitch("off");
  }
  

  
  	 autodraw() {
		let elem = (<HTMLInputElement[]><any>document.getElementsByName("value"));
		var maxl= parseInt(elem[0].max);
		this.drawing(maxl);
	}
	
	
   valcheck(val) { //this function reduces the value of input if it is greater than acceptable maximum limit
		let elem = (<HTMLInputElement[]><any>document.getElementsByName("value"));
		var maxl= parseInt(elem[0].max);
		for (var i = 0; i < maxl; ++i) {
			while(parseInt(elem[i].value) > maxl){
				console.log(elem);
				let temp = parseInt(elem[i].value) - 1;
				elem[i].value = "" + (temp);	
			}
	
		}
	}
	
	
	 drawing(val){ // this function draws the arpeggio pattern on canvas
		var maxl = val;
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
    }
	
	 step_opt4_handler() {
		var maxl=6;
		let elem = (<HTMLInputElement[]><any>document.getElementsByName("value"));
		for (var i = 0; i < elem.length; ++i) {
			elem[i].max = "6";	
			elem[i].style.display = "inline-block";
		}
		this.drawing(maxl);
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

  
}

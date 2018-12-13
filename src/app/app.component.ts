import { Component } from '@angular/core'
import * as tone from 'tone'
import { attachEmbeddedView } from '@angular/core/src/view';

let loopBeat;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {
 


  play() {

    let bassSynth = new tone.PluckSynth().toMaster()
    let synth2 = new tone.FMSynth().toMaster()
   
    

    var loopBeat = new tone.Loop(bass,  "8n").start();

    tone.Transport.start()
    loopBeat.start(0);



    function bass(time){ //Tone.Loop creates a looped callback at the specified interval. The callback can be started, stopped and scheduled along the Transport’s timeline.
      let currentBeat = tone.Transport.position.split(":")
      if(currentBeat[0] == 0 || currentBeat[0] == 1){
        console.log("bass")
        bassSynth.triggerAttackRelease("D3", "4n", time , 1)
      }
      if(currentBeat[0] == 2 || currentBeat[0] == 3){
        console.log("count2")
        bassSynth.triggerAttackRelease("C3", "4n", time , 1)
      }
      if(currentBeat[0] == 0){
       

        if (currentBeat[1] == 0){
          synth2.triggerAttackRelease("D5", "4n", time, 1)
        }
        if (currentBeat[1] == 1){
          synth2.triggerAttackRelease("D6", "4n", time, 1)
        }
        if (currentBeat[1] == 2){
          synth2.triggerAttackRelease("A5", "4n", time, 1)
        }
        if (currentBeat[1] == 3){
          synth2.triggerAttackRelease("G5", "4n", time, 1)
        }
        
        
      }

      if(currentBeat[0] == 1){
        if (currentBeat[1] == 0){
          synth2.triggerAttackRelease("G6", "4n", time, 1)
        }
        if (currentBeat[1] == 1){
          synth2.triggerAttackRelease("A5", "4n", time, 1)
        }
        if (currentBeat[1] == 2){
          synth2.triggerAttackRelease("F#6", "4n", time, 1)
        }
        if (currentBeat[1] == 3){
          synth2.triggerAttackRelease("A5", "4n", time, 1)
        }
      }
      
      console.log(tone.Transport.position)
      
    }

  }
  


  stop() {


    tone.Transport.cancel()

  }

  
}

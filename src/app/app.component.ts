import { Component } from '@angular/core'
import * as tone from 'tone'
import { attachEmbeddedView } from '@angular/core/src/view';

let loopBeat;
let bassSynth = new tone.MembraneSynth().toMaster()

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  play() {
    console.log("HEL")
    loopBeat = new tone.loop(bassTrack, '4n')
    tone.Transport.start()
    loopBeat.start(0)
    

    function bassTrack(time){
      bassSynth.triggerAttackRelease('c1', '8n', time, 1)
      console.log(time)
    }
    

    
  }

  
  
  stop() {

    tone.Transport.cancel()

  } 
  
}
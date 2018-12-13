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
    
    


    
  }

  
  
  stop() {

    tone.Transport.cancel()

  } 
  
}



import { Component, OnInit } from '@angular/core';
import { DataPatternsService } from '../../services/data-patterns.service';
import { Pattern } from '../../classes/pattern';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-pattern',
  templateUrl: './pattern.component.html',
  styleUrls: ['./pattern.component.css']
})
export class PatternComponent implements OnInit {
  
  public patternText: string;
  public patterns: Pattern[]; 
  public apc: AppComponent;
   
  constructor(private service: DataPatternsService, private com: AppComponent) { 
    this.apc = com;
  }
  ngOnInit() {
    console.log("before");
    this.patterns = this.service.getPatternsMapping();
    this.patternText = ""
  }

  newPattern(ev){
    this.service.setTitleFromPatComponent(ev.target.value);
    this.patternText = ev.target.value;
  }
}


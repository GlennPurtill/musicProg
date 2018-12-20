// controls input for pattern

import { Component, OnInit } from '@angular/core';
import { DataPatternsService } from '../../services/data-patterns.service';

@Component({
  selector: 'app-pattern',
  templateUrl: './pattern.component.html',
  styleUrls: ['./pattern.component.css']
})
export class PatternComponent implements OnInit {
  

  public patternText: string;

  constructor(private service: DataPatternsService) {
    this.patternText = '';
  }

  ngOnInit() {
  }

  private addPattern(): void {
    this.service.addPattern("8", "Verse", ["C4","A4","F4","G4","C4","A4","F4","G4"]);
    // this.service.setNewTitle(this.patternText);
    // this.service.setNewLenAndStructure();
    this.patternText = '';
  }
}


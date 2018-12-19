import { Component, OnInit } from '@angular/core';
import { DataPatternsService } from '../../services/data-patterns.service';
import { Pattern } from '../../classes/pattern';

@Component({
  selector: 'app-pattern',
  templateUrl: './pattern.component.html',
  styleUrls: ['./pattern.component.css']
})
export class PatternComponent implements OnInit {
  
  public patternText: string;
  public patterns: Pattern[]; 
   
  constructor(private service: DataPatternsService) { 
    this.patternText = ''
  }
  ngOnInit() {

    this.service.getPatternsMapping().subscribe((patterns) => {
      this.patterns = patterns;
    });

  }
  
}


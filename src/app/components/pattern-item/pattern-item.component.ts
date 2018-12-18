
import { Component, OnInit, Input } from '@angular/core';
import { Pattern } from '../../classes/pattern';
import { DataPatternsService } from '../../services/data-patterns.service';

@Component({
  selector: 'app-pattern-item',
  templateUrl: './pattern-item.component.html',
  styleUrls: ['./pattern-item.component.css'],
  providers:  [ DataPatternsService ]
})
export class PatternItemComponent implements OnInit {

  @Input()
  private pattern: Pattern;

  constructor(private patternService: DataPatternsService) { }

  ngOnInit() {
  }

  private removePattern(): void {
    this.patternService.removePattern(this.pattern.id);
  }

}
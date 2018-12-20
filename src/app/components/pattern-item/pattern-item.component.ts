import { Component, OnInit, Input } from '@angular/core';
import { DataPatternsService } from '../../services/data-patterns.service';
import { Pattern } from '../../classes/pattern';


@Component({
  selector: 'app-pattern-item',
  templateUrl: './pattern-item.component.html',
  styleUrls: ['./pattern-item.component.css']
})
export class PatternItemComponent implements OnInit {

  @Input()
  private pattern: Pattern;

  constructor(private service: DataPatternsService) { }

  ngOnInit() {
  }

  private removePattern(): void {
    this.service.removePattern(this.pattern.id);
  }

  public loadPattern() : void{
    console.log("loadPattern");
  }

}

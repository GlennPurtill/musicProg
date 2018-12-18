import { Component, OnInit } from '@angular/core';
import { DataPatternsService } from '../../services/data-patterns.service';
import { Pattern } from '../../classes/pattern';

@Component({
  selector: 'app-pattern',
  templateUrl: './pattern.component.html',
  styleUrls: ['./pattern.component.css']
  //providers:  [ DataPatternsService ]
})
export class PatternComponent implements OnInit {
  
  public patternText: string;
   
  // constructor(private service: DataPatternsService) { 
  //   this.patternText = ''
  // }
  ngOnInit() {
    //this.patterns = this.service.getPatterns();
    // this.service.getPatterns().subscribe((posts) => {
    //   this.posts = posts
    // });   
  }
  // private addPattern(): void {
  //   this.service.addPattern(this.patternText);
  //   this.patternText = '';
  // }
}

interface Post{
  id:number, 
  title:string, 
  body:string,
  userId:number
}
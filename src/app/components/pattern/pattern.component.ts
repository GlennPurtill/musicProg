import { Component, OnInit } from '@angular/core';
import { DataPatternsService } from '../../services/data-patterns.service';


@Component({
  selector: 'app-pattern',
  templateUrl: './pattern.component.html',
  styleUrls: ['./pattern.component.css'],
  providers:  [ DataPatternsService ]
})
export class PatternComponent implements OnInit {
  
  pattern_name = 'PATTERN A'

  patterns: Pattern[];
  //selected_pattern: Pattern;

  posts: Post[]
   
  constructor(private service: DataPatternsService) { 

  }

  ngOnInit() {
    //this.patterns = this.service.getPatterns();
    this.service.getPosts().subscribe((posts) => {
      this.posts = posts
    });

   
  }

  //selectPattern(pattern: Pattern) { this.selected_pattern = pattern; }

}


interface Pattern{
  length: number,
  title: string,   
  structure: string[] // i.e. ['C4', 'D4', 'E4', ...]
}

interface Post{
  id:number, 
  title:string, 
  body:string,
  userId:number
}
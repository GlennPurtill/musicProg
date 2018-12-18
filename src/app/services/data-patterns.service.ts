import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Pattern } from '../classes/pattern';

let length; 
  let title; 
  let structure;
  let id; 

@Injectable({
  providedIn: 'root'
})
export class DataPatternsService {

  
  pattern_name = 'PATTERN A';
  
  private nextId: number;

   
  constructor(private service: DataPatternsService) { 
    let patterns = this.getPatterns();
    if (patterns.length == 0){
      this.nextId = 0;
    } else{
      let maxId = patterns[patterns.length - 1].id;
      this.nextId = maxId + 1;
    }
  }


  // getPatterns(){
  //   return this.http.get(".../assets/mydata.json").pipe(map(res => res.json()));
  // }

  public addPattern(text: string): void {
    
    let pattern = new Pattern(id, length, title, structure);
    let patterns = this.getPatterns();
    patterns.push(pattern);

    this.setLocalStoragePatterns(patterns);
    
  }

  public getPatterns(): Pattern[]{
    let localStorageItem = JSON.parse(localStorage.getItem('patterns'));
    return localStorageItem == null ? [] : localStorageItem.patterns;
  }

  public removePattern(id: number): void {
    let patterns = this.getPatterns();
    patterns = patterns.filter((pattern)=> pattern.title != title);
    this.setLocalStoragePatterns(patterns);
  }

  // helper function 
  private setLocalStoragePatterns(patterns: Pattern[]): void{
    localStorage.setItem('patterns', JSON.stringify({ patterns: patterns }))
  }
  

 
}

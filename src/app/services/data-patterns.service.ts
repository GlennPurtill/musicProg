import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Pattern } from '../classes/pattern';



@Injectable({
  providedIn: 'root'
})
export class DataPatternsService {

  length: number; 
  title: string; 
  structure: string[];
  id: number; 
  
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


  public addPattern(myPattern: Pattern): void {
    console.log("inside addPattern")

    let pattern = myPattern;
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
    patterns = patterns.filter((pattern)=> pattern.title != this.title);
    this.setLocalStoragePatterns(patterns);
  }

  // helper function 
  private setLocalStoragePatterns(patterns: Pattern[]): void{
        console.log("inside setLocalStoragePatterns")
    localStorage.setItem('patterns', JSON.stringify({ patterns: patterns }))

  }

  public getPatternsMapping(){
    let localStorageItem = JSON.parse(localStorage.getItem('patterns'));
    return localStorageItem.patterns.map(res => res.json());
  }

  public savePatternFromExternal(title: string, structure: string[]){
    console.log("inside savePatternFromExternal")
    this.title = title;
    this.structure = structure;
    this.id = this.id + 1;
    this.length = structure.length
    let pattern = new Pattern(this.id, this.length, this.title, this.structure);
    this.addPattern(pattern);
    

  }
  

 
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Pattern } from '../classes/pattern';



@Injectable({
  providedIn: 'root'
})
export class DataPatternsService {
  
  private nextId: number;
  
  constructor(private service: DataPatternsService) { 
    // examplePatterns = [
    //   new Pattern(0, "8", "Intro", ["C4","A4","F4","G4","C4","A4","F4","G4"]),
    //   new Pattern(1, "8", "Verse", ["A4","E4","F4","G4","A4","G4","F4","G4"]),
    //   new Pattern(2, "8", "Chorus", ["C4","C4","F4","G4","A4","F4","G4","D4"])
    // ];
    let patterns = this.getPatterns();
    if(patterns.length == 0){
      this.nextId = 0;
    } else {
      let maxId = patterns[patterns.length - 1].id;
      this.nextId = maxId + 1;
    }
  }

  public addPattern(length: string, title: string, structure: string[]): void {
    // let patterns = this.getPatterns();
    // patterns.push(myPattern);
    // this.setLocalStoragePatterns(patterns);
    let pattern = new Pattern(this.nextId, length, title, structure);
    let patterns = this.getPatterns();
    patterns.push(pattern);
    this.setLocalStoragePatterns(patterns);
    this.nextId++;
  }

  public getPatterns(): Pattern[]{
    let localStorageItem = JSON.parse(localStorage.getItem('patterns'));
    return localStorageItem == null ? [] : localStorageItem.patterns;
  }

  public removePattern(id: number): void {
    let patterns = this.getPatterns();
    patterns = patterns.filter((pattern)=> pattern.id != id);
    this.setLocalStoragePatterns(patterns);
  }

  private setLocalStoragePatterns(patterns: Pattern[]): void{
    localStorage.setItem('patterns', JSON.stringify({ patterns: patterns }))
  }


  public setNewTitle(title: string){

  }

  //called from somewhere else
  public setNewLenAndStructure(){
    
  }

  // public savePatternFromAppComp(title:string, length: string, structure: string[]){
  //   this.structure = structure;
  //   this.id = this.id + 1;
  //   this.length = length
  //   this.title = this.title;
  //   let pattern = new Pattern(this.id, this.length, this.title, this.structure);
  //   this.addPattern(pattern);
  // }
 
}

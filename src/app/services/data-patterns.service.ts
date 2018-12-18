import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataPatternsService {

  constructor(public http: Http) { 
    console.log("Data Service Connected")

  }

  getPosts(){
    return this.http.get("http://jsonplaceholder.typicode.com/posts").pipe(map(res => res.json()));
  }

 
}

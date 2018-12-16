import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface myData {
  obj: Object
}

@Injectable({
  providedIn: 'root'
})
export class DrumsoundsService {

  constructor(private http: HttpClient) {
    
   }

  getData(){
    return this.http.get('/api/bass_sample.mp3')
  }
}

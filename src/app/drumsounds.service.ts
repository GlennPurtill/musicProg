import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';

interface myData {
  obj: Object
}
// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'audio/mpeg',
//   })
// };

@Injectable({
  providedIn: 'root'
})
export class DrumsoundsService {

  constructor(private http: HttpClient) {
    
   }
   
   
  getData(){
    return this.http.get('/api/bass_sample.mp3', {
      headers: new HttpHeaders().set('Content-Type', 'audio/mpeg')
    })
    .pipe(
      tap( // Log the result or error
        data => console.log('/api/bass_sample.mp3', data)
      )
    );
  }
}

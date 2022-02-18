import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap ,catchError ,map } from 'rxjs/operators'
import { HttpClient, HttpHeaders } from '@angular/common/http'

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'Application/json',
    'Access-Control-Allow-Origin': '*',
   
    "Access-Control-Allow-Methods" : "GET,HEAD,OPTIONS,POST,PUT",
    "Access-Control-Allow-Headers": '*'
  
  },

  
  )
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  public BASE_URL = "https://betterimdbot.herokuapp.com/"

  constructor(private http: HttpClient) { }

  getMovies() : Observable<any> {
    
    const formData = new FormData()

    formData.append("q" , "avenger");

   return this.http.post<any[]>(this.BASE_URL,formData,httpOptions).pipe(
      tap(d => console.log(d)),
      map(e => console.log(e))
     
    );



  }


}

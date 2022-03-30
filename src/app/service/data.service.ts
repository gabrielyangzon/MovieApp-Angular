import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap ,catchError ,map } from 'rxjs/operators'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Movie , IMdb } from '../models/movie';

import {config} from '../../../config'


import movies from '../service/movies.json'

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'Application/json',
    'Access-Control-Allow-Origin': '*',
    "Access-Control-Allow-Methods" : "GET,HEAD,OPTIONS,POST,PUT",
    "Access-Control-Allow-Headers": '*',
    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
		'X-RapidAPI-Key': config.key 
  
  },)
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public BASE_URL_ACTOR = "https://imdb8.p.rapidapi.com/actor"
  public BASE_URL_TITLE = "https://imdb8.p.rapidapi.com/title/"

  Movies : Movie[] = movies.movies;

  constructor(private http: HttpClient) { }


  getMoviesByTitle(q : string) : Observable<any> {
    
    

   return this.http.get<IMdb[]>(this.BASE_URL_TITLE + "find?q="+q,httpOptions).pipe(
     
     catchError(this.handleError<IMdb[]>('getAllProduction',[]))
    );



  }

  getMoviesFromJson() : Observable<Movie[]> {
      return of(this.Movies)
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}

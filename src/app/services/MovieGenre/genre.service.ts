import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  private apiKey = 'bdf03cd8c98226dcd4a6d1bdc22adc5e';
  private apiUrl = `https://api.themoviedb.org/3/genre/movie/list`;

  constructor(private http:HttpClient) { }

  getGenres():Observable<any[]>{
    const url=`${this.apiUrl}?api_key=${this.apiKey}`;
    return this.http.get<any[]>(url).
    pipe(map((res:any)=>res.genres), 
    catchError(this.handleError));
  }

  private handleError(error:any){
    console.error('Api Error:',error);
    return throwError('Something bad happenend; please retry');
  }
}

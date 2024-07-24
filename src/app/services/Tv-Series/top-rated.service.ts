import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopRatedService {

  private apiKey='bdf03cd8c98226dcd4a6d1bdc22adc5e';
  private apiUrl='https://api.themoviedb.org/3/tv/top_rated';
  constructor(private http:HttpClient) { }

  getTopSeries():Observable<any[]>{
    const URL=`${this.apiUrl}?api_key=${this.apiKey}`;
    return this.http.get<any[]>(URL).pipe(
      map((res:any)=>res.results),
      catchError(this.handleError)
    )
  }

  private handleError(error: any) {
    console.error("Api Error", error);
    return throwError('something bad happened:please try again later');
  }
}
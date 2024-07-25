import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsPageApiService {

  private apiKey:string='bdf03cd8c98226dcd4a6d1bdc22adc5e';
  private apiUrl:string='https://api.themoviedb.org/3/movie';
  constructor(private http:HttpClient) { }

  getDetailsMovie(movieId:string):Observable<any>{
    const URL=`${this.apiUrl}/${movieId}?api_key=${this.apiKey}`;
    return this.http.get<any>(URL).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error:any)
  {
    console.error('api error',error);
    return throwError('something bad happened:please try again');
  }
}

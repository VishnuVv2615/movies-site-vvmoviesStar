import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewsApiService {

  private apiKey='bdf03cd8c98226dcd4a6d1bdc22adc5e';
  private apiUr='https://api.themoviedb.org/3/movie'

  constructor(private http:HttpClient) { }

  getReviews(movieId:string):Observable<any>{
    const Url=`${this.apiUr}/${movieId}/reviews?api_key=${this.apiKey}`;
    return this.http.get<any>(Url).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error:any)
  {
    console.error('api error',error);
    return throwError('something bad happened:please try again');
  }
}

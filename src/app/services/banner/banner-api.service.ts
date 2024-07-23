import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannerApiService {

  private apiKey='bdf03cd8c98226dcd4a6d1bdc22adc5e';
  private apiUrl='https://api.themoviedb.org/3/movie/now_playing';
  constructor(private http:HttpClient) { }

  getBannerData():Observable<any[]>{
    const Url=`${this.apiUrl}?api_key=${this.apiKey}`;
    return this.http.get<any[]>(Url).pipe(
      map((res:any)=>res.results),
      catchError(this.handleError)
    );
  }
  private handleError(error:any)
  {
    console.error('api error',error);
    return throwError('something bad happened:please try again');
  }

}

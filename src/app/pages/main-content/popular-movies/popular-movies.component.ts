import { Component, OnInit } from '@angular/core';
import { PopularGenreService } from '../../../services/popular/popular-genre.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popular-movies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popular-movies.component.html',
  styleUrl: './popular-movies.component.css'
})
export class PopularMoviesComponent implements OnInit {

  popularMovies:any[]=[];
  constructor(private popularMovie:PopularGenreService){}

  ngOnInit(): void {
    this.getPopularMovies();
  }

  getPopularMovies(){
    this.popularMovie.getPopularGenre().
    subscribe((data)=>{
      this.popularMovies=data;
    }),
    (error:HttpErrorResponse)=>{
      console.error("Api Fetching Error",error);
    }
  }
}

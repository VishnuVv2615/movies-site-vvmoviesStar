import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PopularService } from '../../../../services/Tv-Series/popular.service';
import { PopularGenreService } from '../../../../services/popular/popular-genre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popular-movies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popular-movies.component.html',
  styleUrl: './popular-movies.component.css'
})
export class PopularMoviesComponent implements OnInit {

  popularMovies: any[] = [];
  displayedMovies: any[] = [];
  itemsToShow: number = 8;
  showMoreButton: boolean = true;
  showAll: boolean = false;

  constructor(private popularMovie: PopularGenreService,private route:Router) { }

  ngOnInit(): void {
    this.getPopularMovies();
  }

  getPopularMovies() {
    this.popularMovie.getPopularGenre().
      subscribe((data) => {
        this.popularMovies = data;
        this.displayedMovies = this.popularMovies.slice(0, this.itemsToShow);
        this.showMoreButton = this.popularMovies.length > this.itemsToShow;
      }),
      (error: HttpErrorResponse) => {
        console.error("Api Fetching Error", error);
      }
  }

  updatedMovies() {
    this.displayedMovies = this.showAll ? this.popularMovies : this.popularMovies.slice(0, this.itemsToShow);
  }

  toggleShowMore() {
    this.showAll = !this.showAll;
    this.updatedMovies();
    this.showMoreButton = !this.showAll || (this.showAll && this.popularMovies.length > this.itemsToShow)
  }
  getToMovieDetails(movieId:string){
    this.route.navigate(['/movie',movieId
    ])
  }
}

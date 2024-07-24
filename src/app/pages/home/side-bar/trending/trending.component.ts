import { Component, OnInit } from '@angular/core';
import { AllTrendsService } from '../../../../services/trending/all-trends.service';
import { MoviesTrendsService } from '../../../../services/trending/movies-trends.service';
import { PeopleService } from '../../../../services/trending/people.service';
import { TvTrendsService } from '../../../../services/trending/tv-trends.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trending',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.css'
})
export class TrendingComponent implements OnInit {

  allTrends: any[] = [];
  moviesTrends: any[] = [];
  peopleTrends: any[] = [];
  tvTrends: any[] = [];
  filteredAlltrends: any[] = [];
  showAllTrends: boolean = false;
  showAllMovieTrends: boolean = false;
  showAllPeople: boolean = false;
  showAllTvTrends: boolean = false;
  AlliconClass: string = 'fa-solid fa-angle-down';
  MovieiconClass: string = 'fa-solid fa-angle-down';
  PeopleiconClass: string = 'fa-solid fa-angle-down';
  TviconClass: string = 'fa-solid fa-angle-down';


  constructor(private allTrend: AllTrendsService, private movietren: MoviesTrendsService, private peopleTre: PeopleService, private tvTre: TvTrendsService) { }

  ngOnInit(): void {
    this.getAllTrend();
    this.getMovieTrend();
    this.getPeopleTrend();
    this.getTvTrend();
  }

  getAllTrend() {
    this.allTrend.getAllTrends().subscribe(
      (data) => {
        this.allTrends = data;
        this.filteredAlltrends = this.allTrends.filter(trend => trend.title);
        console.log("Fetched Data", this.allTrends)
      }
    ),
      (error: HttpErrorResponse) => {
        console.error("Api Fetching Error", error)
      }
  }
  getMovieTrend() {
    this.movietren.getTrendMovies().subscribe(
      (data) => {
        this.moviesTrends = data;
      }
    ),
      (error: HttpErrorResponse) => {
        console.error("Api Fetching Error", error)
      }
  }
  getPeopleTrend() {
    this.peopleTre.getTrendPeople().subscribe(
      (data) => {
        this.peopleTrends = data;
        console.log(this.peopleTrends);

      }
    ),
      (error: HttpErrorResponse) => {
        console.error("Api Fetching Error", error)
      }
  }
  getTvTrend() {
    this.tvTre.getTrendTv().subscribe(
      (data) => {
        this.tvTrends = data;
        console.log(this.tvTrends);

      }
    ),
      (error: HttpErrorResponse) => {
        console.error("Api Fetching Error", error)
      }
  }

  toggleAllTrends() {
    this.showAllTrends = !this.showAllTrends;
    this.AlliconClass = this.showAllTrends ? 'fa-solid fa-angle-up' : 'fa-solid fa-angle-down';
  }
  toggleMovieTrends() {
    this.showAllMovieTrends = !this.showAllMovieTrends;
    this.MovieiconClass = this.showAllMovieTrends ? 'fa-solid fa-angle-up' : 'fa-solid fa-angle-down';
  }
  togglePeopleTrends() {
    this.showAllPeople = !this.showAllPeople;
    this.PeopleiconClass = this.showAllPeople ? 'fa-solid fa-angle-up' : 'fa-solid fa-angle-down';
  }
  toggleTvTrends() {
    this.showAllTvTrends = !this.showAllTvTrends;
    this.TviconClass = this.showAllTvTrends ? 'fa-solid fa-angle-up' : 'fa-solid fa-angle-down';
  }
}

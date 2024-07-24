import { Component, OnInit } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { NowPlayingComponent } from './Movies-list/now-playing/now-playing.component';
import { PopularMoviesComponent } from './Movies-list/popular-movies/popular-movies.component';
import { TopRatedComponent } from './Movies-list/top-rated/top-rated.component';
import { CommonModule } from '@angular/common';
import { AirOntodayComponent } from './Tv-series/air-ontoday/air-ontoday.component';


@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    BannerComponent,
    NowPlayingComponent,
    PopularMoviesComponent,
    TopRatedComponent,CommonModule,
    AirOntodayComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent implements OnInit {

  loading:boolean=true;

  ngOnInit(): void {
    setTimeout(()=>{
      this.loading=false;
    },3000)
  }

}

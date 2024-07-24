import { Component, OnInit } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { CommonModule } from '@angular/common';
import { NowPlayingComponent } from './now-playing/now-playing.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [BannerComponent,
    PopularMoviesComponent,
    TopRatedComponent,
    CommonModule,
    NowPlayingComponent
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

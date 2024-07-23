import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [BannerComponent,
    PopularMoviesComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {

}

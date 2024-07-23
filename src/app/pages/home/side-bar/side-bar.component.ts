import { Component } from '@angular/core';
import { GenreComponent } from './genre/genre.component';
import { TvGenreComponent } from './tv-genre/tv-genre.component';
import { CommonModule } from '@angular/common';
import { PopularGenreComponent } from './popular-genre/popular-genre.component';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [GenreComponent,
    TvGenreComponent,
    CommonModule,
    PopularGenreComponent
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

}

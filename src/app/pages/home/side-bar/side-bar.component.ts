import { Component } from '@angular/core';
import { GenreComponent } from './genre/genre.component';
import { TvGenreComponent } from './tv-genre/tv-genre.component';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [GenreComponent,
    TvGenreComponent
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

}

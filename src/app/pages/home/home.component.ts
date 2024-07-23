import { Component } from '@angular/core';
import { GenreComponent } from './side-bar/genre/genre.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MainContentComponent } from '../main-content/main-content.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SideBarComponent,
    MainContentComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

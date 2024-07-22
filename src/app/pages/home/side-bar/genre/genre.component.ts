import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GenreService } from '../../../../services/MovieGenre/genre.service';

@Component({
  selector: 'app-genre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './genre.component.html',
  styleUrl: './genre.component.css'
})
export class GenreComponent implements OnInit {

  genres:any[]=[];
  showGenres:boolean=false;
  iconClass:string='fa-solid fa-angle-down'

  constructor(private genreSer:GenreService){}

  ngOnInit(): void {
    this.fetchGenre();
  }

  fetchGenre(){
    this.genreSer.getGenres()
    .subscribe((data)=>{
      this.genres= data;
      console.log('fetched',this.genres);
    }),
    (error:HttpErrorResponse)=>{
      console.error('Error Fetcing Data',error);
    }
    
  }
  toggleGenres(){
    this.showGenres=!this.showGenres;
    this.iconClass=this.showGenres ? 'fa-solid fa-angle-up':'fa-solid fa-angle-down'
  }

}

import { Component, OnInit } from '@angular/core';
import { TvGenreService } from '../../../../services/TvGenre/tv-genre.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tv-genre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tv-genre.component.html',
  styleUrl: './tv-genre.component.css'
})
export class TvGenreComponent implements OnInit{

  tvGenres:any[]=[];
  showTvGenre:boolean=false;
  iconClass:string='fa-solid fa-angle-down';

  constructor(private tvGen:TvGenreService){}
ngOnInit(): void {
  this.fetchTvGenre();
}

fetchTvGenre(){
  this.tvGen.getGenres().
  subscribe(
    (data)=>{
      this.tvGenres=data;
      console.log("fetched data",this.tvGenres);
    }
  ),
  (error:HttpErrorResponse)=>
  {
    console.error("Fetching Data Error",error);
  }
}

toggleGenre(){
  this.showTvGenre=!this.showTvGenre;
  this.iconClass=this.showTvGenre? 'fa-solid fa-angle-up' : 'fa-solid fa-angle-down'
}
}

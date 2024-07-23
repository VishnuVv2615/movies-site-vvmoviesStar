import { Component, OnInit } from '@angular/core';
import { PopularGenreService } from '../../../../services/popular/popular-genre.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popular-genre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popular-genre.component.html',
  styleUrl: './popular-genre.component.css'
})
export class PopularGenreComponent implements OnInit {

  popularGenre:any[]=[];
  showPopular:boolean=false;
  iconClass:string='fa-solid fa-angle-down';

  constructor(private popGen:PopularGenreService){}

  ngOnInit(): void {
    this.getPopGenre();
  }

  getPopGenre(){
    this.popGen.getPopularGenre().
    subscribe((data)=>{
      this.popularGenre=data;
      console.log('Fetched data',this.popularGenre);
    }),
    (err:HttpErrorResponse)=>{
      console.error('Api fetching Error',err);
    }
    
  }

  togglePop(){
    this.showPopular=!this.showPopular;
    this.iconClass=this.showPopular ? 'fa-solid fa-angle-up' : 'fa-solid fa-angle-down'
  }
}

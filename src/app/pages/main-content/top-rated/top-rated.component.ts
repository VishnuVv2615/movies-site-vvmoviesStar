import { Component, OnInit } from '@angular/core';
import { TopRatedService } from '../../../services/TopRated/top-rated.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-rated',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-rated.component.html',
  styleUrl: './top-rated.component.css'
})
export class TopRatedComponent implements OnInit {

  topRatedMovies:any[]=[];
  displayedMovies:any[]=[];
  moviesShow:number=8;
  showMore:boolean=true;
  showAllMovies:boolean=false;

  constructor(private topRate:TopRatedService){}

  ngOnInit(): void {
    this.getTopRatedMovies();
  }

  getTopRatedMovies(){
    this.topRate.getTopRated().subscribe(
      (data)=>{
        this.topRatedMovies=data;
        this.displayedMovies=this.topRatedMovies.slice(0,this.moviesShow);
        this.showMore=this.topRatedMovies.length >this.moviesShow;
        console.log('api fetched data',this.topRatedMovies)
      }
    ),
    (error:HttpErrorResponse)=>{
      console.error("Api Fetching Error",error);
    }
  }

  updatedMovies(){
    this.displayedMovies=this.showAllMovies ? this.topRatedMovies : this.topRatedMovies.slice(0,this.moviesShow);
  }

  toggleShowMovies(){
    this.showAllMovies=!this.showAllMovies;
    this.updatedMovies();
    this.showMore=!this.showAllMovies ||(this.showAllMovies && this.topRatedMovies.length > this.moviesShow);
  }
}

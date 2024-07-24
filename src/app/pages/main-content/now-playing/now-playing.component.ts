import { Component, OnInit } from '@angular/core';
import { BannerApiService } from '../../../services/banner/banner-api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-now-playing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './now-playing.component.html',
  styleUrl: './now-playing.component.css'
})
export class NowPlayingComponent implements OnInit {

  nowPlayMovies:any[]=[];
  displayedMovies:any[]=[];
  itemsToShow:number=8;
  showMoreBtn:boolean=true;
  showAllMovies=false;

  constructor(private apiSer:BannerApiService){}

  ngOnInit(): void {
    this.getNowPlayMovies();
  }

  getNowPlayMovies(){
    this.apiSer.getBannerData().subscribe(
      (data)=>{
        this.nowPlayMovies=data;
        this.displayedMovies=this.nowPlayMovies.slice(0,this.itemsToShow);
        this.showMoreBtn=this.nowPlayMovies.length > this.itemsToShow;
      }
    ),
    (error:HttpErrorResponse)=>{
      console.error("api Fetching Error",error);
    }
  }

  updatedMovies(){
    this.displayedMovies=this.showAllMovies ? this.nowPlayMovies : this.nowPlayMovies.slice(0,this.itemsToShow);
  }

  toggleMovies(){
    this.showAllMovies=!this.showAllMovies;
    this.updatedMovies();
    this.showMoreBtn=!this.showAllMovies || (this.showAllMovies && this.nowPlayMovies.length > this.itemsToShow)
  }
}

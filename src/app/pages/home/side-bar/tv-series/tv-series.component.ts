import { Component, OnInit } from '@angular/core';
import { AirTodayService } from '../../../../services/Tv-Series/air-today.service';
import { OnTheAirService } from '../../../../services/Tv-Series/on-the-air.service';
import { PopularService } from '../../../../services/Tv-Series/popular.service';
import { TopRatedService } from '../../../../services/Tv-Series/top-rated.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tv-series',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tv-series.component.html',
  styleUrl: './tv-series.component.css'
})
export class TvSeriesComponent implements OnInit{

  airOnToday:any[]=[];
  onTheAir:any[]=[];
  popularSeries:any[]=[];
  topRated:any[]=[];
  showAirOnToday:boolean=false;
  showOnTheAir:boolean=false;
  showPopular:boolean=false;
  showTopRated:boolean=false;
  airOnIcon:string='fa-solid fa-angle-down';
  onTheAirIcon:string='fa-solid fa-angle-down';
  popularIcon:string='fa-solid fa-angle-down';
  topRateIcon:string='fa-solid fa-angle-down';

  constructor(private airSer:AirTodayService,private ontheSer:OnTheAirService,private popSer:PopularService,private topSer:TopRatedService){}


  ngOnInit(): void {
    this.getAirToday();
    this.getOnTheAir();
    this.getPopularTvSeries();
    this.getTopRated();
  }

  getAirToday(){
    this.airSer.getAirTodaySeries().subscribe(
      (data)=>{
        this.airOnToday=data;
      }
    ),
    (error:HttpErrorResponse)=>{
      console.error('api fetching Error',error)
    }
  }

  getOnTheAir(){
    this.ontheSer.getOnTheAirSeries().subscribe(
      (data)=>{
        this.onTheAir=data;
      }
    ),
    (error:HttpErrorResponse)=>{
      console.error('api fetching Error',error)
    }
  }
  getPopularTvSeries(){
    this.popSer.getPopularSeries().subscribe(
      (data)=>{
        this.popularSeries=data;
      }
    ),
    (error:HttpErrorResponse)=>{
      console.error('api fetching Error',error)
    }
  }
  getTopRated(){
    this.topSer.getTopSeries().subscribe(
      (data)=>{
        this.topRated=data;
      }
    ),
    (error:HttpErrorResponse)=>{
      console.error('api fetching Error',error)
    }
  }

  toggleAirOn(){
    this.showAirOnToday=!this.showAirOnToday;
    this.airOnIcon=this.showAirOnToday ? 'fa-solid fa-angle-up' : 'fa-solid fa-angle-down';
  }
  toggleOnTheAir(){
    this.showOnTheAir=!this.showOnTheAir;
    this.onTheAirIcon=this.showOnTheAir ? 'fa-solid fa-angle-up' : 'fa-solid fa-angle-down';
  }
  togglePopular(){
    this.showPopular=!this.showPopular;
    this.popularIcon=this.showPopular ? 'fa-solid fa-angle-up' : 'fa-solid fa-angle-down';
  }
  toggleTopRated(){
    this.showTopRated=!this.showTopRated;
    this.topRateIcon=this.showTopRated ? 'fa-solid fa-angle-up' : 'fa-solid fa-angle-down';
  }

}

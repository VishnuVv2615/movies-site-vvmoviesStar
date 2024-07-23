import { Component, OnInit } from '@angular/core';
import { BannerApiService } from '../../../services/banner/banner-api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent implements OnInit {
  bannerData:any[]=[];

  constructor(private bannerSer:BannerApiService){}

  ngOnInit(): void {
    this.getBannerDetails();
  }

  getBannerDetails(){
    this.bannerSer.getBannerData()
    .subscribe((data)=>{
      console.log(data);
      this.bannerData=data;
    })
    ,(error:HttpErrorResponse)=>{
      console.log("api fetching error",error);
      
    }
  }

}

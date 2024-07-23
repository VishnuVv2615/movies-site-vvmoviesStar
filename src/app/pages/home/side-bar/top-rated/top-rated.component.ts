import { Component, OnInit } from '@angular/core';
import { TopRatedService } from '../../../../services/TopRated/top-rated.service';
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

  topRated:any[]=[];
  showTopRated:boolean=false;
  iconClass:string='fa-solid fa-angle-down';

  constructor(private topRate:TopRatedService){}

  ngOnInit(): void {
    this.getTopRate();
  }

  getTopRate(){
    this.topRate.getTopRated().subscribe((data)=>{
      this.topRated=data;
console.log("fetched data",this.topRated);
    }),
    (error:HttpErrorResponse)=>{
      console.error('Error Fetching',error);
    }
  }
  toggleTopRate(){
    this.showTopRated=!this.showTopRated;
    this.iconClass= this.showTopRated ? 'fa-solid fa-angle-up' : 'fa-solid fa-angle-down'
  }
}

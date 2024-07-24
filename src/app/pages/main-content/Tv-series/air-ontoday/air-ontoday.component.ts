import { Component, OnInit } from '@angular/core';
import { AirTodayService } from '../../../../services/Tv-Series/air-today.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-air-ontoday',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './air-ontoday.component.html',
  styleUrl: './air-ontoday.component.css'
})
export class AirOntodayComponent implements OnInit {

  airOnTdy: any[] = [];
  displayedItems: any[] = [];
  itemShow: number = 8;
  showMorebtn: boolean = true;
  showAll: boolean = false;

  constructor(private airOnSer: AirTodayService) { }

  ngOnInit(): void {
    this.getAirTodaySeries();
  }

  getAirTodaySeries() {
    this.airOnSer.getAirTodaySeries().subscribe(
      (data) => {
        this.airOnTdy = data;
        this.displayedItems = this.airOnTdy.slice(0, this.itemShow);
        this.showMorebtn = this.airOnTdy.length > this.itemShow;
      }
    ),
      (error: HttpErrorResponse) => {
        console.error("api fetching Errror", error)
      }
  }

  updatedSeries(){
    this.displayedItems=this.showAll ? this.airOnTdy : this.airOnTdy.slice(0,this.itemShow);
  }

  toggleSeries(){
    this.showAll=!this.showAll;
    this.updatedSeries();
    this.showMorebtn=!this.showAll ||(this.showAll && this.airOnTdy.length > this.itemShow)
  }

}

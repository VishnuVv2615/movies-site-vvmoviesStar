import { Component, OnInit } from '@angular/core';
import { DetailsPageApiService } from '../../../services/details/details-page-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReviewsComponent } from '../reviews/reviews.component';

@Component({
  selector: 'app-details-page',
  standalone: true,
  imports: [CommonModule,ReviewsComponent],
  templateUrl: './details-page.component.html',
  styleUrl: './details-page.component.css'
})
export class DetailsPageComponent implements OnInit {

  movieDetails:any;
  loading:boolean=true;
  releaseYear:string='';
  duration:string='';
  voteAvg:string='';
  backDropImage:string='';

  constructor(private detailsSer:DetailsPageApiService, private router:ActivatedRoute){}

ngOnInit(): void {
  this.router.paramMap.subscribe(params=>{
    const movieId=params.get('id');
    if(movieId)
    {
      this.detailsSer.getDetailsMovie(movieId).subscribe(data=>{
        this.movieDetails=data;
        this.releaseYear=this.getReleaseYear(data.release_date);  
        this.duration=this.getDuration(data.runtime);
        this.voteAvg=this.getAvgVote(data.vote_average);
        this.backDropImage=`https://image.tmdb.org/t/p/original${data.backdrop_path}`;
        console.log("fetched data",this.movieDetails)
      })
    }
  });

  setTimeout(()=>{
    this.loading=false;
  },3000)
}

getReleaseYear(date:string):string{
  const year=new Date(date).getFullYear();
  return year.toString();
}

getDuration(minutes:number):string{
  const hours=Math.floor(minutes/60);
  const mins=minutes % 60;
  return `${hours}h ${mins}m`
}

getAvgVote(avg:number):string{
  const avgVote=Math.round(avg);
  return avgVote.toString();
}

}

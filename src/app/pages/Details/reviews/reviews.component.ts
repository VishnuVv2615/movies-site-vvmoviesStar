import { Component, OnInit } from '@angular/core';
import { ReviewsApiService } from '../../../services/Reviews/reviews-api.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent implements OnInit {

  reviews:any;
  default_image:string='assets/images/profile.png'
  constructor(private apiServ:ReviewsApiService ,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      const movieId=params.get('id');
      if(movieId)
      {
        this.apiServ.getReviews(movieId).subscribe(
          data=>{
            this.reviews=data;
            console.log('Fetched',this.reviews)
          }
        )
      }
    })
  }

  getAvatarPath(avatarPath:string):string{
    console.log('Avatar Path:', avatarPath);

    if(!avatarPath)
    {
      console.log('Using default image:', this.default_image);

      return this.default_image;
    }
    if(avatarPath.startsWith('/https')){
      return avatarPath.substring(1);
    }
return `https://image.tmdb.org/t/p/w500${avatarPath}` 
 }

toggleContent(review:any){
  review.expanded=!review.expanded;
}

}

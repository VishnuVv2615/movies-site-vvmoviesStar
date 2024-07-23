import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularGenreComponent } from './popular-genre.component';

describe('PopularGenreComponent', () => {
  let component: PopularGenreComponent;
  let fixture: ComponentFixture<PopularGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularGenreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopularGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

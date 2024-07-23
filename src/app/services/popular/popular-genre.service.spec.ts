import { TestBed } from '@angular/core/testing';

import { PopularGenreService } from './popular-genre.service';

describe('PopularGenreService', () => {
  let service: PopularGenreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopularGenreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

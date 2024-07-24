import { TestBed } from '@angular/core/testing';

import { MoviesTrendsService } from './movies-trends.service';

describe('MoviesTrendsService', () => {
  let service: MoviesTrendsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesTrendsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

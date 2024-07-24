import { TestBed } from '@angular/core/testing';

import { TvTrendsService } from './tv-trends.service';

describe('TvTrendsService', () => {
  let service: TvTrendsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvTrendsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

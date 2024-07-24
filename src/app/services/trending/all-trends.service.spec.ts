import { TestBed } from '@angular/core/testing';

import { AllTrendsService } from './all-trends.service';

describe('AllTrendsService', () => {
  let service: AllTrendsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllTrendsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

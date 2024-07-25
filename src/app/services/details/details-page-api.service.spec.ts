import { TestBed } from '@angular/core/testing';

import { DetailsPageApiService } from './details-page-api.service';

describe('DetailsPageApiService', () => {
  let service: DetailsPageApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsPageApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

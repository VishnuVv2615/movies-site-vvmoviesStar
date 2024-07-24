import { TestBed } from '@angular/core/testing';

import { OnTheAirService } from './on-the-air.service';

describe('OnTheAirService', () => {
  let service: OnTheAirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnTheAirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

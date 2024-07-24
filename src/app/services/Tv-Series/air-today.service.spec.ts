import { TestBed } from '@angular/core/testing';

import { AirTodayService } from './air-today.service';

describe('AirTodayService', () => {
  let service: AirTodayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirTodayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

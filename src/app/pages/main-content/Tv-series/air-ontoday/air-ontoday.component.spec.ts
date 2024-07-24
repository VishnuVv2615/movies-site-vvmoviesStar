import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirOntodayComponent } from './air-ontoday.component';

describe('AirOntodayComponent', () => {
  let component: AirOntodayComponent;
  let fixture: ComponentFixture<AirOntodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirOntodayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AirOntodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientLabtestComponent } from './patient-labtest.component';

describe('PatientLabtestComponent', () => {
  let component: PatientLabtestComponent;
  let fixture: ComponentFixture<PatientLabtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientLabtestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientLabtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

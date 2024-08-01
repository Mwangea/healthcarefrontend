import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientMedicalRecorComponent } from './patient-medical-recor.component';

describe('PatientMedicalRecorComponent', () => {
  let component: PatientMedicalRecorComponent;
  let fixture: ComponentFixture<PatientMedicalRecorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientMedicalRecorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientMedicalRecorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

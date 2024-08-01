import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientMedicineInventoryComponent } from './patient-medicine-inventory.component';

describe('PatientMedicineInventoryComponent', () => {
  let component: PatientMedicineInventoryComponent;
  let fixture: ComponentFixture<PatientMedicineInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientMedicineInventoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientMedicineInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

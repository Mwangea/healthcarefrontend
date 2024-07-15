import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalConfirmationDialogComponent } from './medical-confirmation-dialog.component';

describe('MedicalConfirmationDialogComponent', () => {
  let component: MedicalConfirmationDialogComponent;
  let fixture: ComponentFixture<MedicalConfirmationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicalConfirmationDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicalConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorConfirmationDialogComponent } from './doctor-confirmation-dialog.component';

describe('DoctorConfirmationDialogComponent', () => {
  let component: DoctorConfirmationDialogComponent;
  let fixture: ComponentFixture<DoctorConfirmationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorConfirmationDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

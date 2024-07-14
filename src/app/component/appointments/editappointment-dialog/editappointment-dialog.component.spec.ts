import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditappointmentDialogComponent } from './editappointment-dialog.component';

describe('EditappointmentDialogComponent', () => {
  let component: EditappointmentDialogComponent;
  let fixture: ComponentFixture<EditappointmentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditappointmentDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditappointmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

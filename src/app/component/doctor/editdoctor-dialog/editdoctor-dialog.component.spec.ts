import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdoctorDialogComponent } from './editdoctor-dialog.component';

describe('EditdoctorDialogComponent', () => {
  let component: EditdoctorDialogComponent;
  let fixture: ComponentFixture<EditdoctorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditdoctorDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditdoctorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalDialogComponent } from './medical-dialog.component';

describe('MedicalDialogComponent', () => {
  let component: MedicalDialogComponent;
  let fixture: ComponentFixture<MedicalDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicalDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

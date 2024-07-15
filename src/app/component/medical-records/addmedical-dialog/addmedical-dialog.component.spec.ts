import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmedicalDialogComponent } from './addmedical-dialog.component';

describe('AddmedicalDialogComponent', () => {
  let component: AddmedicalDialogComponent;
  let fixture: ComponentFixture<AddmedicalDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddmedicalDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddmedicalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

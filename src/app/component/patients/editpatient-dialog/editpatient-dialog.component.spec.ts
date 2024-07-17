import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpatientDialogComponent } from './editpatient-dialog.component';

describe('EditpatientDialogComponent', () => {
  let component: EditpatientDialogComponent;
  let fixture: ComponentFixture<EditpatientDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditpatientDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditpatientDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditlabtestDialogComponent } from './editlabtest-dialog.component';

describe('EditlabtestDialogComponent', () => {
  let component: EditlabtestDialogComponent;
  let fixture: ComponentFixture<EditlabtestDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditlabtestDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditlabtestDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

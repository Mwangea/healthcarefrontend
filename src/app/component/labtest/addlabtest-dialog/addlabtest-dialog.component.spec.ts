import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlabtestDialogComponent } from './addlabtest-dialog.component';

describe('AddlabtestDialogComponent', () => {
  let component: AddlabtestDialogComponent;
  let fixture: ComponentFixture<AddlabtestDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddlabtestDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddlabtestDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

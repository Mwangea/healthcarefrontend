import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagelabtestDialogComponent } from './messagelabtest-dialog.component';

describe('MessagelabtestDialogComponent', () => {
  let component: MessagelabtestDialogComponent;
  let fixture: ComponentFixture<MessagelabtestDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessagelabtestDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessagelabtestDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

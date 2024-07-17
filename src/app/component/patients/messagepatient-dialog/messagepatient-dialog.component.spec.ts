import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagepatientDialogComponent } from './messagepatient-dialog.component';

describe('MessagepatientDialogComponent', () => {
  let component: MessagepatientDialogComponent;
  let fixture: ComponentFixture<MessagepatientDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessagepatientDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessagepatientDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

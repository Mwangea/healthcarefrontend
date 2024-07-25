import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationInvoiceDialogComponent } from './confirmation-invoice-dialog.component';

describe('ConfirmationInvoiceDialogComponent', () => {
  let component: ConfirmationInvoiceDialogComponent;
  let fixture: ComponentFixture<ConfirmationInvoiceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmationInvoiceDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmationInvoiceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

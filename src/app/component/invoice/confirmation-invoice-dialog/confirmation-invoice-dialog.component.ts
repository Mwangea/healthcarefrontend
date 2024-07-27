import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-invoice-dialog',
  templateUrl: './confirmation-invoice-dialog.component.html',
  styleUrl: './confirmation-invoice-dialog.component.scss'
})
export class ConfirmationInvoiceDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmationInvoiceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }


}

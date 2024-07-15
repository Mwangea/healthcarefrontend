import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-medical-confirmation-dialog',
  templateUrl: './medical-confirmation-dialog.component.html',
  styleUrl: './medical-confirmation-dialog.component.scss'
})
export class MedicalConfirmationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<MedicalConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }

}

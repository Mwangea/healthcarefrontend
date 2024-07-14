import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-doctor-confirmation-dialog',
  templateUrl: './doctor-confirmation-dialog.component.html',
  styleUrl: './doctor-confirmation-dialog.component.scss'
})
export class DoctorConfirmationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DoctorConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}

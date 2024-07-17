import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-messagepatient-dialog',
  templateUrl: './messagepatient-dialog.component.html',
  styleUrl: './messagepatient-dialog.component.scss'
})
export class MessagepatientDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<MessagepatientDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }

}

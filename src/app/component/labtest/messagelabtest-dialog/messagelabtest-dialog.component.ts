import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-messagelabtest-dialog',
  templateUrl: './messagelabtest-dialog.component.html',
  styleUrl: './messagelabtest-dialog.component.scss'
})
export class MessagelabtestDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<MessagelabtestDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }

}

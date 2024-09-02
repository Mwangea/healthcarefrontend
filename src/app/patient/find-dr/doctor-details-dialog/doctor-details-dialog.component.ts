import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-doctor-details-dialog',
  templateUrl: './doctor-details-dialog.component.html',
  styleUrl: './doctor-details-dialog.component.scss'
})
export class DoctorDetailsDialogComponent {
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

}

import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DoctorService } from '../../../_service/doctor.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editdoctor-dialog',
  templateUrl: './editdoctor-dialog.component.html',
  styleUrls: ['./editdoctor-dialog.component.scss']
})
export class EditdoctorDialogComponent {
  doctorForm: FormGroup;
  specialties: string[] = ['Cardiology', 'Dermatology', 'Neurology', 'Pediatrics', 'Radiology'];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditdoctorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private doctorService: DoctorService,
    private snackBar: MatSnackBar
  ) {
    this.doctorForm = this.fb.group({
      username: [data.doctor.username, Validators.required],
      email: [data.doctor.email, [Validators.required, Validators.email]],
      specialty: [data.doctor.specialty, Validators.required]
    });
  }

  save(): void {
    if (this.doctorForm.valid) {
      const doctorData = this.doctorForm.value;
      const doctorId = this.data.doctor.id; // Ensure the ID is included
      this.doctorService.UpdateDoctor(doctorId, doctorData).subscribe(
        () => {
          this.dialogRef.close(true);
          this.snackBar.open('Doctor updated successfully', 'Close', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
          });
        },
        error => {
          console.error('Error updating doctor:', error);
          this.snackBar.open('Failed to update doctor', 'Close', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
          });
        }
      );
    }
  }

  close(): void {
    this.dialogRef.close();
  }

}

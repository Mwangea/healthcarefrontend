import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../../_service/user.service';

@Component({
  selector: 'app-patient-dialog',
  templateUrl: './patient-dialog.component.html',
  styleUrl: './patient-dialog.component.scss'
})
export class PatientDialogComponent {

  addPatientForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<PatientDialogComponent>,
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.addPatientForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      bloodGroup: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      joinedDate: ['', Validators.required]
    });
  }



  onSubmit(): void {
    if (this.addPatientForm.valid) {
      this.userService.addPatient(this.addPatientForm.value).subscribe(() => {
        this.dialogRef.close(true);
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}


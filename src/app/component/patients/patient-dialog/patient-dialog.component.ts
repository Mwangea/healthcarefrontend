import { patientService } from './../../../_service/patient.service';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../_service/user.service';
import { ToastrService } from 'ngx-toastr';
//import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-patient-dialog',
  templateUrl: './patient-dialog.component.html',
  styleUrls: ['./patient-dialog.component.scss']
})
export class PatientDialogComponent {
  addPatientForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private patientService: patientService,
    private toastr : ToastrService,
    public dialogRef: MatDialogRef<PatientDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.addPatientForm = this.fb.group({
      //Pat_fname: ['', Validators.required],
      Username: ['', Validators.required],
      //Pat_lname: ['', Validators.required],
      Pat_dob: ['', Validators.required],
      Pat_age: ['', Validators.required],
      Pat_number: ['', Validators.required],
      Pat_addr: ['', Validators.required],
      Pat_phone: ['', Validators.required],
      Pat_type: ['', Validators.required],
      Pat_date_joined: ['', Validators.required],
      Pat_ailment: ['', Validators.required],
      Pat_discharge_status: ['', Validators.required],
      Pat_blood_group: ['', Validators.required],
      Gender: ['', Validators.required]
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.addPatientForm.valid) {
      this.patientService.addPatient(this.addPatientForm.value).subscribe({
        next: (response) => {
          this.toastr.success('Patient created successfully!');
          this.dialogRef.close(response);
        },
        error: (error) => {
          this.toastr.error('Failed to create patient.');
        }
      });
    }
  }
}

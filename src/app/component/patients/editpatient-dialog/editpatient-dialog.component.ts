import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { patientService } from '../../../_service/patient.service';

@Component({
  selector: 'app-editpatient-dialog',
  templateUrl: './editpatient-dialog.component.html',
  styleUrl: './editpatient-dialog.component.scss'
})
export class EditpatientDialogComponent {
  patientForm: FormGroup;
  bloodGroups: string[] = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  patientTypes: string[] = ['In-Patient', 'Out-Patient'];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditpatientDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toastr: ToastrService,
    private Service: patientService
  ) {this.patientForm = this.fb.group({
    username: [data.patient.Username || '', Validators.required],
    pat_dob: [data.patient.pat_dob || '', Validators.required],
    pat_age: [data.patient.pat_age || '', Validators.required],
    pat_number: [data.patient.pat_number || '', Validators.required],
    pat_addr: [data.patient.pat_addr || '', Validators.required],
    pat_phone: [data.patient.pat_phone || '', Validators.required],
    pat_type: [data.patient.pat_type || '', Validators.required],
    pat_date_joined: [data.patient.pat_date_joined || '', Validators.required],
    pat_ailment: [data.patient.pat_ailment || '', Validators.required],
    pat_discharge_status: [data.patient.pat_discharge_status || '', Validators.required],
    pat_blood_group: [data.patient.pat_blood_group || '', Validators.required],
    gender: [data.patient.Gender || '', Validators.required]
  });
}

ngOnInit(): void {
  console.log('Form initialized with data:', this.patientForm.value);
}

save(): void {
  if (this.patientForm.valid) {
    const patientData = this.patientForm.value;
    const patientId = this.data.patient.pat_id; // Ensure patient ID is correctly retrieved
    if (patientId) {
      this.Service.updatePatient(patientId, patientData).subscribe(() => {
        this.dialogRef.close(true);
        this.toastr.success('Patient updated successfully', 'Success');
      },
      (error) => {
        this.toastr.error('Failed to update patient', 'Error');
      });
    } else {
      this.toastr.warning('Please fill out all required fields', 'Warning');
    }
  }
}

close(): void {
  this.dialogRef.close();
}

}

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
      Username: [data.patient.Username || '', Validators.required],
      pat_dob: [data.patient.Pat_dob || '', Validators.required],
      pat_age: [data.patient.Pat_age || '', Validators.required],
      pat_number: [data.patient.Pat_number || '', Validators.required],
      pat_addr: [data.patient.Pat_addr || '', Validators.required],
      pat_phone: [data.patient.Pat_phone || '', Validators.required],
      pat_type: [data.patient.Pat_type || '', Validators.required],
      pat_date_joined: [data.patient.Pat_date_joined || '', Validators.required],
      pat_ailment: [data.patient.Pat_ailment || '', Validators.required],
      pat_discharge_status: [data.patient.Pat_discharge_status || '', Validators.required],
      pat_blood_group: [data.patient.Pat_blood_group || '', Validators.required],
      Gender: [data.patient.Gender || '', Validators.required]
  });
}

ngOnInit(): void {
  console.log('Form initialized with data:', this.patientForm.value);
}

save(): void {
  if (this.patientForm.valid) {
    const patientData = this.patientForm.value;
    if (this.data.patient) {
      this.Service.updatePatient(this.data.patient.Pat_id, patientData).subscribe(() => {
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

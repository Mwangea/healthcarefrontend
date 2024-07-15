import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { medicalService } from '../../../_service/medical.service';

@Component({
  selector: 'app-medical-dialog',
  templateUrl: './medical-dialog.component.html',
  styleUrls: ['./medical-dialog.component.scss']
})
export class MedicalDialogComponent {
  medicalRecordForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<MedicalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toastr: ToastrService,
    private service: medicalService
  ) {
    this.medicalRecordForm = this.fb.group({
      date: [data.date || '', Validators.required],
      diagnosis: [data.diagnosis || '', Validators.required],
      treatment: [data.treatment || '', Validators.required],
      notes: [data.notes || '', Validators.required],
    });
  }

  save(): void {
    if (this.medicalRecordForm.valid) {
      const formData = this.medicalRecordForm.value;
      if (this.data.medicalRecordId) {
        this.service.updateMedicalRecord(this.data.medicalRecordId, formData).subscribe(
          () => {
            this.dialogRef.close(true);
            this.toastr.success('Medical record updated successfully', 'Success');
          },
          (error) => {
            this.toastr.error('Failed to update medical record', 'Error');
            console.error('Error updating medical record:', error);
          }
        );
      }
    } else {
      this.toastr.warning('Please fill out all required fields', 'Warning');
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}

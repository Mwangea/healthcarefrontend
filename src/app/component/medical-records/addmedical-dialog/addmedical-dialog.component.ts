import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { medicalService } from '../../../_service/medical.service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../../_service/user.service';
import { patientService } from '../../../_service/patient.service';

@Component({
  selector: 'app-addmedical-dialog',
  templateUrl: './addmedical-dialog.component.html',
  styleUrl: './addmedical-dialog.component.scss'
})
export class AddmedicalDialogComponent {
  medicalRecordForm: FormGroup;
  patients: any[] = [];

  constructor(
    private fb: FormBuilder,
    private service: medicalService,
    private toastr : ToastrService,
    private patient: patientService,
    public dialogRef: MatDialogRef<AddmedicalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){
    this.medicalRecordForm = this.fb.group({
      patientUsername:['', Validators.required],
      date:['', Validators.required],
      diagnosis: ['', Validators.required],
      treatment:['', Validators.required],
      notes: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadPatient();
    };

    loadPatient(): void{
      this.patient.Getall().subscribe(
        (data) => {
          this.patients = data;
        },
        (error) => console.error('Error retrieving users:', error)
      )
    }



  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.medicalRecordForm.valid) {
      this.service.addMedicalRecord(this.medicalRecordForm.value).subscribe({
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

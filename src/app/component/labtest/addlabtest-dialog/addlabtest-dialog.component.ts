import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { labtestService } from '../../../_service/labtest.service';
import { ToastrService } from 'ngx-toastr';
import { patientService } from '../../../_service/patient.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-addlabtest-dialog',
  templateUrl: './addlabtest-dialog.component.html',
  styleUrl: './addlabtest-dialog.component.scss'
})
export class AddlabtestDialogComponent {
  labtestForm: FormGroup;
  patients: any[] = [];

  constructor(
    private fb: FormBuilder,
    private service: labtestService,
    private toastr : ToastrService,
    private patient: patientService,
    public dialogRef: MatDialogRef<AddlabtestDialogComponent>,
    private datePipe: DatePipe,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){
    this.labtestForm = this.fb.group({
      LabPatientName:['', Validators.required],
      LabPatAilment:['', Validators.required],
      LabPatTests: ['', Validators.required],
      LabPatResults:['', Validators.required],
      LabDateRec: ['', Validators.required]
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
    if (this.labtestForm.valid) {
      const formValues = this.labtestForm.value;
      formValues.LabDateRec = this.datePipe.transform(formValues.LabDateRec, 'yyyy-MM-dd');

      this.service.addLabTest(formValues).subscribe({
        next: (response) => {
          this.toastr.success('LabTest created successfully!');
          this.dialogRef.close(response);
        },
        error: (error) => {
          this.toastr.error('Failed to create lab test.');
          console.error('Error:', error); // Log the error for debugging
        }
      });
    }
  }

}

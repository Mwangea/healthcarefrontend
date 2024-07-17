import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { labtestService } from '../../../_service/labtest.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-editlabtest-dialog',
  templateUrl: './editlabtest-dialog.component.html',
  styleUrl: './editlabtest-dialog.component.scss'
})
export class EditlabtestDialogComponent {
  labtestForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditlabtestDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toastr: ToastrService,
    private service: labtestService,
    private datePipe: DatePipe,
  ) {
    this.labtestForm = this.fb.group({
     // LabPatientName:['', Validators.required],
     LabPatAilment: [data.LabPatAilment, Validators.required],
     LabPatTests: [data.LabPatTests, Validators.required],
     LabPatResults: [data.LabPatResults, Validators.required],
     LabDateRec: [new Date(data.LabDateRec), Validators.required]
    });
  }

  save(): void {
    if (this.labtestForm.valid) {
      const formData = this.labtestForm.value;
      formData.LabDateRec = this.datePipe.transform(formData.LabDateRec, 'yyyy-MM-dd');

      if (this.data.id) {
        this.service.updateLabTest(this.data.id, formData).subscribe(
          () => {
            this.dialogRef.close(true);
            this.toastr.success('Labtest updated successfully', 'Success');
          },
          (error) => {
            this.toastr.error('Failed to update labtest', 'Error');
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

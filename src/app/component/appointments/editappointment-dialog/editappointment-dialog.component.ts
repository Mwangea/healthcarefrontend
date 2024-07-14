import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { appointmentService } from '../../../_service/appointment.service';
import { AppointmentDialogComponent } from '../appointment-dialog/appointment-dialog.component';
import { ToastrService } from 'ngx-toastr';
import { error } from 'console';

@Component({
  selector: 'app-editappointment-dialog',
  templateUrl: './editappointment-dialog.component.html',
  styleUrl: './editappointment-dialog.component.scss'
})
export class EditappointmentDialogComponent {
  appointmentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditappointmentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toastr: ToastrService,
    private appointmentService: appointmentService
  ) {
    this.appointmentForm = this.fb.group({
      time: [data.appointment ? data.appointment.time : '', Validators.required],
      patientName: [data.appointment ? data.appointment.patientName : '', Validators.required],
      doctorName: [data.appointment ? data.appointment.doctorName : '', Validators.required],
      date: [data.appointment ? data.appointment.date : '', Validators.required],
      status: [data.appointment ? data.appointment.status : '', Validators.required],
      notes: [data.appointment ? data.appointment.notes : '']
    });
  }

  save(): void {
    if (this.appointmentForm.valid) {
      const appointmentData = this.appointmentForm.value;
      if (this.data.appointment) {
        this.appointmentService.updateAppointment(this.data.appointment.id, appointmentData).subscribe(() => {
          this.dialogRef.close(true);
          this.toastr.success('Appointment updated successfully', 'Success');
        },
        (error) => {
          this.toastr.error('Failed to update appointment', 'Error');
        }
      );
      }else {
        this.toastr.warning('Please fill out all required fields', 'Warning');
      }
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}

import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { appointmentService } from '../../../_service/appointment.service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../../_service/user.service';

@Component({
  selector: 'app-appointment-dialog',
  templateUrl: './appointment-dialog.component.html',
  styleUrl: './appointment-dialog.component.scss'
})
export class AppointmentDialogComponent {

  addAppointmentForm: FormGroup;
  role: string = '';
  doctors: any[] = [];
  patients: any[] = [];

  constructor(
    private fb: FormBuilder,
    private service:appointmentService,
    private toastr: ToastrService,
    private userService: UserService,
    public dialogRef: MatDialogRef<AppointmentDialogComponent>,
   @Inject(MAT_DIALOG_DATA) public data: any) {

    this.addAppointmentForm = this.fb.group({
      PatientUsername: ['', Validators.required],
      DoctorUsername: ['', Validators.required],
      DateOnly: ['', Validators.required],
      TimeOnly: ['', Validators.required],
      Notes: ['']
    });
   }

   ngOnInit(): void {
    this.role = this.userService.getUserRole();
    if (this.role === 'Doctor') {
      const currentUsername = this.data.currentUsername;
      this.addAppointmentForm.patchValue({ DoctorUsername: currentUsername });
      this.addAppointmentForm.get('DoctorUsername')?.disable();
      this.loadPatients();
    } else if (this.role === 'Admin') {
      this.loadDoctors();
      this.loadPatients();
    }
  }


  loadDoctors(): void {
    this.service.getDoctors().subscribe(
      (data) => {
        this.doctors = data;
      },
      (error) => {
        console.error('Error fetching doctors:', error);
      }
    );
  }

  loadPatients(): void {
    this.service.getPatients().subscribe(
      (data) => {
        this.patients = data;
      },
      (error) => {
        console.error('Error fetching patients:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.addAppointmentForm.valid) {
      const appointmentData = {
        PatientUsername: this.addAppointmentForm.get('PatientUsername')?.value,
        DoctorUsername: this.role === 'Doctor' ? this.data.currentUsername : this.addAppointmentForm.get('DoctorUsername')?.value,
        DateOnly: this.addAppointmentForm.get('DateOnly')?.value,
        TimeOnly: this.addAppointmentForm.get('TimeOnly')?.value,
        Notes: this.addAppointmentForm.get('Notes')?.value
      };

      this.service.createAppointment(appointmentData).subscribe(
        (response) => {
          this.toastr.success('Appointment created successfully.');
          this.dialogRef.close(true);
        },
        (error) => {
          console.error('Error creating appointment:', error);
          if (error.error && error.error.errors) {
            for (const key in error.error.errors) {
              if (error.error.errors.hasOwnProperty(key)) {
                this.toastr.error(`${key}: ${error.error.errors[key].join(', ')}`);
              }
            }
          } else {
            this.toastr.error('Failed to create appointment. ' + (error.error?.title || ''));
          }
        }
      );
    } else {
      this.toastr.error('Please fill in all required fields.');
    }
  }

   onCancel() {
    this.dialogRef.close();
  }

}

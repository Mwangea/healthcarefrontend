import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { appointmentService } from '../../_service/appointment.service';
//import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-patient-appointment',
  templateUrl: './patient-appointment.component.html',
  styleUrls: ['./patient-appointment.component.scss']
})
export class PatientAppointmentComponent implements OnInit {
  appointmentForm: FormGroup;
  doctors = [
    { id: 1, name: 'Dr. John Doe' },
    { id: 2, name: 'Dr. Jane Smith' },
    // Add more doctors as needed
  ];

  constructor(private fb: FormBuilder, private appointmentService: appointmentService) {
    this.appointmentForm = this.fb.group({
      doctorId: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      reason: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      this.appointmentService.requestAppointment(this.appointmentForm.value).subscribe(
        response => {
          console.log('Appointment requested successfully', response);
        },
        error => {
          console.error('Error requesting appointment', error);
        }
      );
    }
  }
}

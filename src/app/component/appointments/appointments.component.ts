import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

interface Appointment {
  // Define your appointment details here
}
@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
  animations:[
    trigger('expandAnimation', [
      state('collapsed', style({ height: '0px', overflow: 'hidden' })),
      state('expanded', style({ height: '*', overflow: 'visible' })),
      transition('collapsed <=> expanded', animate('200ms ease-in-out')),
    ]),
  ],
})
export class AppointmentsComponent {

  appointments: Appointment[] = []; // Array to store appointments
  showAppointments = false;

  addAppointment() {
    // Implement logic to add a new appointment to the appointments array
    this.showAppointments = true; // Show appointments after adding
  }

  toggleAppointments() {
    this.showAppointments = !this.showAppointments;
  }

}

import { doctor, medicine } from './../../_model/user.model';
import { Component, OnInit } from '@angular/core';
import { appointment } from '../../_model/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  appointment: appointment[] = [];
  doctors: doctor[]=[];
  medicine: medicine[]=[];
  activityOverView= {
    appointments: 0,
    newPatients: 0,
    medicinesSold: 0,
    labTests: 0
  }

}


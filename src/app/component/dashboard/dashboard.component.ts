import { doctor, medicine } from './../../_model/user.model';
import { Component, OnInit } from '@angular/core';
import { appointment } from '../../_model/user.model';
import { appointmentService } from '../../_service/appointment.service';
import { DoctorService } from '../../_service/doctor.service';
import { medicineService } from '../../_service/medicine.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent  {

}


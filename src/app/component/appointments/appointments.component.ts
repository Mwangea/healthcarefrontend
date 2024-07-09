//import { UserService } from 'src/app/services/user.service';
import { appointment } from './../../_model/user.model';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
//import { UserService } from '../../_service/user.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { appointmentService } from '../../_service/appointment.service';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../../_service/user.service';


@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],

})
export class AppointmentsComponent implements OnInit{

  appointmentList!: appointment[];
  displayedColumns:string[] = ["id","patientId","doctorId","appointmentDate","status","notes","action"];
  datasource:any;
  role: string = '';
  doctorId: string | undefined;

  constructor(private service:appointmentService, private userService: UserService){}

  ngOnInit(): void {
    this.role = this.userService.getUserRole();
    if (this.role === 'Doctor') {
      const token = localStorage.getItem('token');
      if (token) {
        const decodedToken = this.userService.decodeToken(token);
        this.doctorId = decodedToken.sub;
        this.LoadDoctorAppointments(this.doctorId);
      } else {
        console.error('Token not found in localStorage.');
      }
    } else if (this.role === 'Admin') {
      this.LoadAllAppointments();
    } else {
      console.error('Invalid role:', this.role);
    }
  }

  LoadDoctorAppointments(doctorId: string | undefined) {
    if (doctorId) {
      this.service.GetAppointmentsByDoctor(doctorId).subscribe(
        item => {
          this.appointmentList = item;
          this.datasource = new MatTableDataSource<appointment>(this.appointmentList);
        },
        error => {
          console.error('Error loading doctor appointments:', error);
        }
      );
    } else {
      console.error('Doctor ID is undefined.');
    }
  }


  LoadAllAppointments() {
    this.service.GetAllAppointments().subscribe(
      item => {
        this.appointmentList = item;
        this.datasource = new MatTableDataSource<appointment>(this.appointmentList);
      },
      error => {
        console.error('Error loading all appointments:', error);
      }
    );
  }

}


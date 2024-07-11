import { MatDialog } from '@angular/material/dialog';
import { appointment } from './../../_model/user.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { appointmentService } from '../../_service/appointment.service';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../../_service/user.service';
import { AppointmentDialogComponent } from './appointment-dialog/appointment-dialog.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
})
export class AppointmentsComponent implements OnInit {

  appointmentList!: appointment[];
  displayedColumns: string[] = ["time", "patientName", "doctorName", "date", "status", "notes", "action"];
  datasource: any;
  role: string = '';
  doctorId: string | undefined;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: appointmentService, private userService: UserService, public dialog: MatDialog) {}

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

  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
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

  createAppointment(): void {
    const dialogRef = this.dialog.open(AppointmentDialogComponent, {
      width: '500px',
      data: { currentUsername: this.userService.getCurrentUsername() }
    });

    dialogRef.afterClosed().subscribe(response => {
      if (response) {
        this.LoadAllAppointments();
      }
    });
  }
}

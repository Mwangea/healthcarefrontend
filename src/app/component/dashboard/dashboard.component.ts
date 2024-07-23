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
export class DashboardComponent implements OnInit {
  appointment: appointment[] = [];
  doctors: doctor[]=[];
  medicine: medicine[]=[];
  transformedMedicines: any[] = [];
  activityOverView= {
    appointments: 0,
    newPatients: 0,
    medicinesSold: 0,
    labTests: 0
  };

  constructor(
    private appointmentService: appointmentService,
    private doctorService: DoctorService,
    private medicineService: medicineService
  ){}

  ngOnInit(): void {
    this.fetchActivityOverview();
    this.fetchAppointments();
    this.fetchDoctors();
    this.fetchMedicines();
  }


  fetchActivityOverview(): void {
    this.activityOverView = {
      appointments: 100,
      newPatients: 50,
      medicinesSold: 500,
      labTests: 100
    };
  }

  fetchAppointments(): void {
    this.appointmentService.GetAllAppointments().subscribe(
      (data: appointment[]) => {
        this.appointment = data;
        this.activityOverView.appointments = data.length;
      },
      error => console.error('Error fetching appointments', error)
    );
  }

  fetchDoctors(): void {
    this.doctorService.GetAllDoctors().subscribe(
      (data: doctor[]) => {
        this.doctors = data;
      },
      error => console.error('Error fetching doctors', error)
    );
  }

  fetchMedicines(): void {
    this.medicineService.GetAllMedicines().subscribe(
      (data: medicine[]) => {
        this.medicine = data;
        this.activityOverView.medicinesSold = data.reduce((sum, medicine) => sum + medicine.sold, 0);
        this.transformMedicinesData();
      },
      error => console.error('Error fetching medicines', error)
    );
  }

  transformMedicinesData(): void {
    this.transformedMedicines = this.medicine.map(medicine => ({
      name: medicine.ProductName,
      value: medicine.sold
    }));
  }
}


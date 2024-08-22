import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  appointments: number = 100;
  newPatients: number = 50;
  medicinesSold: number = 500;
  labTests: number = 100;

  newAppointments: any[] = [
    { time: '9:30 AM', date: '05/12/2022', patientName: 'Elizabeth Polson', patientAvatar: 'assets/images/avatar-icon.png', doctor: 'Dr. John' },
    { time: '9:30 AM', date: '05/12/2022', patientName: 'John David', patientAvatar: 'assets/images/avatar-icon.png', doctor: 'Dr. Joel' },
    { time: '10:30 AM', date: '05/12/2022', patientName: 'Krishav Rajan', patientAvatar: 'assets/images/avatar-icon.png', doctor: 'Dr. Joel' },
    { time: '11:00 AM', date: '05/12/2022', patientName: 'Sumanth Trison', patientAvatar: 'assets/images/avatar-icon.png', doctor: 'Dr. John' },
    { time: '11:30 AM', date: '05/12/2022', patientName: 'ES Subramani', patientAvatar: 'assets/images/avatar-icon.png', doctor: 'Dr. John' },
  ];

  educationContent: any[] = [
    { title: '4 Nutritions to Take Daily', author: 'Dr. Joel Rubinfien', authorAvatar: 'assets/images/doctor-img01.png' },
    { title: '5 Healthy Lifestyle Tips', author: 'Dr. John Paul', authorAvatar: 'assets/images/doctor-img02.png' },
    { title: 'Do\'s and Don\'ts in Hospital', author: 'Dr. Joel Rubinfien', authorAvatar: 'assets/images/doctor-img03.png' },
    { title: 'Healthy Habits to Follow', author: 'Dr. John Paul', authorAvatar: 'assets/images/doctor-img01.png' }
  ];

  patientFees: any[] = [
    { name: 'ES Subramani', avatar: 'assets/images/avatar-icon.png', pending: true },
    { name: 'Elizabeth Polson', avatar: 'assets/images/avatar-icon.png', pending: true },
    { name: 'Sumanth Trison', avatar: 'assets/images/avatar-icon.png', pending: true },
    { name: 'Krishav Rajan', avatar: 'assets/images/avatar-icon.png', pending: false },
  ];

  ngOnInit() {
    this.createMedicinesChart();
  }

  createMedicinesChart() {
    const ctx = document.getElementById('medicinesChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Paracetamol', 'Vitamin Tablets', 'Antacid Tablets', 'Others'],
        datasets: [{
          data: [40, 25, 15, 20],
          backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384', '#4BC0C0'],
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
          }
        }
      }
    });
  }
}

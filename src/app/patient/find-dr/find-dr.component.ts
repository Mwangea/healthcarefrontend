import { Component } from '@angular/core';
import { DoctorDetailsDialogComponent } from './doctor-details-dialog/doctor-details-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-find-dr',
  templateUrl: './find-dr.component.html',
  styleUrl: './find-dr.component.scss'
})
export class FindDrComponent {

  doctors = [
    { id: 1, name: 'Dr. Alice Smith', profession: 'Cardiologist', ratings: 4.5, availability: 'Available', imageUrl: 'assets/images/doctor-img01.png' },
    { id: 2, name: 'Dr. Bob Johnson', profession: 'Dermatologist', ratings: 4.7, availability: 'Not Available', imageUrl: 'assets/images/doctor-img02.png' },
    { id: 3, name: 'Dr. Charlie Brown', profession: 'Orthopedic Surgeon', ratings: 4.3, availability: 'Available', imageUrl: 'assets/images/doctor-img03.png' },
    { id: 4, name: 'Dr. Diana Green', profession: 'Pediatrician', ratings: 4.9, availability: 'Available', imageUrl: 'assets/images/doctor-img01.png' },
    { id: 5, name: 'Dr. Emily White', profession: 'Neurologist', ratings: 4.6, availability: 'Available', imageUrl: 'assets/images/doctor-img02.png' },
    { id: 6, name: 'Dr. Frank Black', profession: 'Oncologist', ratings: 4.2, availability: 'Not Available', imageUrl: 'assets/images/doctor-img03.png' },
    { id: 7, name: 'Dr. Grace Lee', profession: 'Gynecologist', ratings: 4.8, availability: 'Available', imageUrl: 'assets/images/doctor-img01.png' },
    { id: 8, name: 'Dr. Henry Taylor', profession: 'Urologist', ratings: 4.4, availability: 'Available', imageUrl: 'assets/images/doctor-img02.png' },
    { id: 9, name: 'Dr. Ivy Adams', profession: 'Endocrinologist', ratings: 4.5, availability: 'Available', imageUrl: 'assets/images/doctor-img03.png' },
    { id: 10, name: 'Dr. Jack Wilson', profession: 'Rheumatologist', ratings: 4.6, availability: 'Available', imageUrl: 'assets/images/doctor-img01.png' },
    { id: 11, name: 'Dr. Jack Wilson', profession: 'Rheumatologist', ratings: 4.6, availability: 'Available', imageUrl: 'assets/images/doctor-img01.png' },
    { id: 12, name: 'Dr. Jack Wilson', profession: 'Rheumatologist', ratings: 4.6, availability: 'Available', imageUrl: 'assets/images/doctor-img01.png' }

  ];

  filteredDoctors = [...this.doctors];
  searchQuery: string = '';

  constructor(public dialog: MatDialog) {}

  openDoctorDetails(doctor: any): void {
    this.dialog.open(DoctorDetailsDialogComponent, {
      width: '400px',
      data: doctor
    });
  }

  onSearchChange(): void {
    this.filteredDoctors = this.doctors.filter(doctor =>
      doctor.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      doctor.profession.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

}

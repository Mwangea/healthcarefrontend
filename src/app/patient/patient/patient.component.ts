import { Component } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.scss'
})
export class PatientComponent {
  services = [
    { title: 'Cancer Care', description: 'World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.', number: '1', color: 'blue' },
    { title: 'Labor & Delivery', description: 'World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.', number: '2', color: 'purple' },
    { title: 'Heart & Vascular', description: 'World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.', number: '3', color: 'green' },
    { title: 'Mental Health', description: 'World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.', number: '4', color: 'yellow' },
    { title: 'Neurology', description: 'World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.', number: '5', color: 'cyan' },
    { title: 'Burn Treatment', description: 'World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.', number: '6', color: 'orange' },
  ];
  doctors = [
    {
      name: 'Dr. John Doe',
      avgRating: 4.5,
      totalRating: 120,
      photo: 'assets/images/doctor-img01.png',
      specialization: 'Cardiologist'
    },
    {
      name: 'Dr. Jane Smith',
      avgRating: 4.7,
      totalRating: 95,
      photo: 'assets/images/doctor-img02.png',
      specialization: 'Dermatologist'
    },
    {
      name: 'Dr. Jane Smith',
      avgRating: 4.7,
      totalRating: 95,
      photo: 'assets/images/doctor-img03.png',
      specialization: 'Neurology'
    },
  ];

}

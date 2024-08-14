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
      name: 'Dr. Malik Abdallah',
      avgRating: 4.8,
      totalRating: 172,
      photo: 'assets/images/doctor-img01.png',
      specialization: 'Surgeon',
      location: 'At Medicare Hospital, Nairobi.'
    },
    {
      name: 'Dr. Swaleh Mahmud',
      avgRating: 4.9,
      totalRating: 272,
      photo: 'assets/images/doctor-img02.png',
      specialization: 'Neurologist',
      location: 'At Medicare Hospital, Nairobi.'
    },
    {
      name: 'Dr. Salim Marijan',
      avgRating: 4.7,
      totalRating: 372,
      photo: 'assets/images/doctor-img03.png',
      specialization: 'Dermatologist',
      location: 'At Medicare Hospital, Nairobi.'
    }
  ];

}

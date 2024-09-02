import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit{


  hospitalInfo = {
    name: 'City Medical Center',
    description: `City Medical Center is a leading healthcare facility dedicated to providing high-quality medical services and patient care.
      Our hospital is equipped with state-of-the-art technology and staffed by a team of highly qualified professionals who are committed to delivering exceptional healthcare.
      We offer a wide range of medical services, including emergency care, specialized treatments, diagnostic services, and outpatient care.`,
    services: [
      'Emergency Care',
      'General Medicine',
      'Surgical Services',
      'Pediatric Care',
      'Cardiology',
      'Orthopedics',
      'Laboratory Services',
      'Radiology',
      'Physiotherapy'
    ],
    vision: `To be the most trusted and innovative healthcare provider, recognized for excellence in patient care, research, and education.`,
    mission: `To provide compassionate, high-quality, and accessible healthcare services that improve the well-being of our community.`,
    values: [
      'Integrity',
      'Compassion',
      'Excellence',
      'Innovation',
      'Collaboration'
    ],
    contact: {
      phone: '+123 456 7890',
      email: 'contact@citymedicalcenter.com',
      address: '123 Health Street, Medical City, HC 12345'
    }
  };

  constructor() { }

  ngOnInit(): void { }

}

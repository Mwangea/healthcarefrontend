import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';



@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.scss'
})
export class PatientComponent implements OnInit, OnDestroy {
  isBrowser: boolean;


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

  faqItems = [
    {
      question: "What is your medical care?",
      content:
        "One Medical was founded on a better model of care, designed around patients' needs to provide a higher level of quality and affordable service. We achieve this through innovative design, excellent customer service, and the efficient use of technology."
    },
    {
      question: "What happens if I need to go to a hospital?",
      content:
        "If you need to go to a hospital, our team will coordinate with the hospital to ensure a seamless transfer of your care. We strive to provide continuous support during your hospital stay and after discharge."
    },
    {
      question: "Can I visit your medical office?",
      content:
        "Yes, you can visit our medical office. We offer in-person consultations as well as virtual appointments to cater to your convenience and preference."
    },
    {
      question: "Do you provide urgent care?",
      content:
        "Yes, we provide urgent care services. Our medical team is available to handle urgent healthcare needs with timely and efficient care."
    },
    {
      question: "Do you provide urgent care?",
      content:
        "Yes, we provide urgent care services. Our medical team is available to handle urgent healthcare needs with timely and efficient care."
    },
    {
      question: "Do you provide urgent care?",
      content:
        "Yes, we provide urgent care services. Our medical team is available to handle urgent healthcare needs with timely and efficient care."
    },
    {
      question: "Can I visit your medical office?",
      content:
        "Yes, you can visit our medical office. We offer in-person consultations as well as virtual appointments to cater to your convenience and preference."
    },
  ];

  testimonials = [
    {
      photo: 'assets/images/avatar-icon.png',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.',
      name: 'John Doe',
      position: 'Software Engineer'
    },
    {
      photo: 'assets/images/avatar-icon.png',
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      name: 'Jane Smith',
      position: 'Doctor'
    },
    {
      photo: 'assets/images/avatar-icon.png',
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      name: 'Michael Johnson',
      position: 'Teacher'
    },
    {
      photo: 'assets/images/avatar-icon.png',
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      name: 'Michael Johnson',
      position: 'Teacher'
    },
    {
      photo: 'assets/images/avatar-icon.png',
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      name: 'Michael Johnson',
      position: 'Teacher'
    },
    {
      photo: 'assets/images/avatar-icon.png',
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      name: 'Michael Johnson',
      position: 'Teacher'
    },


  ]


  selectedQuestionIndex: number | null = null;

  translateX = 0;
  currentIndex = 0;
  interval: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.startCarousel();
    }
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  startCarousel() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    this.updateTranslateX();
  }

  updateTranslateX() {
    const cardWidth = 300; // Adjust this value based on your card width
    const gap = 20; // Adjust this value based on the gap between cards
    this.translateX = -(this.currentIndex * (cardWidth + gap));
  }


  toggleQuestion(index: number): void {
    this.selectedQuestionIndex = this.selectedQuestionIndex === index ? null : index;
  }


}

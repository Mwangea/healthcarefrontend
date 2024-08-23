import { Component } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

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
    { name: 'Musa Mwangea', review: 'I have taken medical services from them. They treat so well and they are providing the best medical services.' },
    { name: 'John Doe', review: 'Excellent service and professional staff. Highly recommended!' },
    { name: 'Jane Smith', review: 'They offer outstanding medical care. I am very satisfied with their services.' },
    { name: 'Alice Johnson', review: 'The doctors are very attentive and the facilities are top-notch.' },
    { name: 'Michael Brown', review: 'I felt very comfortable during my visits. The staff is friendly and helpful.' },
    { name: 'Emily Davis', review: 'Great experience! They really care about their patients.' },
    { name: 'David Wilson', review: 'The best medical service I’ve ever received. Highly recommended!' },
    { name: 'Sophia Martinez', review: 'Very professional and caring. I felt well taken care of.' },
    { name: 'James Taylor', review: 'Fantastic medical services. The doctors are very knowledgeable and kind.' },
    { name: 'Olivia Anderson', review: 'I had a great experience with their medical team. Highly satisfied!' },
    { name: 'Isabella Thomas', review: 'Very thorough and compassionate care. I would recommend them to anyone.' }
  ];


  swiperConfig: SwiperConfigInterface = {
    pagination: true,
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  };

  selectedQuestionIndex: number | null = null;

  toggleQuestion(index: number): void {
    this.selectedQuestionIndex = this.selectedQuestionIndex === index ? null : index;
  }


}

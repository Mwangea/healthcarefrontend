import { Component } from '@angular/core';

interface Service {
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  year: number = new Date().getFullYear();
  logo = '../../assets/images/logo.png';

  title = 'Medical Services';
  subtitle = 'Our Center offers you and your family the complete range of healthcare services.';
  services: Service[] = [
    {
      title: 'FAMILY CARE',
      description: 'Our doctors, nurses, and clinic staff work together to provide friendly, personalized care to all members of your family, from birth to age 100+.'
    },
    {
      title: 'URGENT CARE',
      description: 'From walk-in care, same-day appointments to online visits with OnCare, we\'ll take good care of you if you are experiencing an emergency.'
    },
    {
      title: 'PEDIATRIC',
      description: 'Our care team has earned a reputation for providing expert care to kids, including treating many complex conditions. If your child needs an exam...'
    },
    {
      title: 'LAB SERVICES',
      description: 'We can help you know what to expect before, during and after your test. Use this information, and always follow the directions your physician\'s office gives.'
    },
    {
      title: 'SURGERY',
      description: 'With pioneering medical research achievements, education programs defining the future of healthcare, and wide-ranging community benefit activities.'
    },
    {
      title: 'PALLIATIVE CARE',
      description: 'Palliative care is active comprehensive care of the physical, psychological, emotional, and spiritual needs of patients who have chronic, debilitating...'
    },
    {
      title: 'DENTAL CARE',
      description: 'We offer a full range of dental services from routine check-ups to specialized treatments for all age groups.'
    },
    {
      title: 'MENTAL HEALTH',
      description: 'Our mental health services are designed to provide support and treatment for various psychological conditions and emotional challenges.'
    },
    {
      title: 'REHABILITATION',
      description: 'Our rehabilitation services focus on helping patients recover and regain independence after injury or illness.'
    }
  ];

  socialLinks = [
    { path: 'https://www.twitter.com/@_mwangea', icon: 'Twitter' },
    { path: 'https://www.github.com/mwangea', icon: 'Github' },
    { path: 'https://www.linkedin.com/mwangea', icon: 'linkedIn' },
    { path: 'https://www.discord.com/mwangea', icon: 'discord' }
  ];

  quickLinkSections = [
    {
      title: 'Quick Links',
      links: [
        { path: '/home', display: 'Home' },
        { path: '/services', display: 'Services' },
        { path: '/', display: 'About us' },
        { path: '/', display: 'Blog' }
      ]
    },
    {
      title: 'I want to',
      links: [
        { path: '/find-a-doctor', display: 'Find a doctor' },
        { path: '/', display: 'Request an Appointment' },
        { path: '/', display: 'Find a location' },
        { path: '/', display: 'Get opinion' }
      ]
    },
    {
      title: 'Support',
      links: [
        { path: '/', display: 'Donate' },
        { path: '/contact', display: 'Contact us' }
      ]
    }
  ];

}

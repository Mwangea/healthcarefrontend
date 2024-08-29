import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  year: number = new Date().getFullYear();
  logo = '../../assets/images/logo.png';
  contactForm!: FormGroup;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.initForm();
    emailjs.init("gHckLSZDDoENoDMm3"); // Replace with your EmailJS user ID service_t0zf2gm
  }

  private initForm(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      const formData = this.contactForm.value;

      emailjs.send("service_t0zf2gm", "template_s2zeqgu", {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: "mwangework@gmail.com"
      }).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          this.isSubmitting = false;
          this.snackBar.open('Message sent successfully!', 'Close', { duration: 3000 });
          this.contactForm.reset();
        },
        (error) => {
          console.log('FAILED...', error);
          this.isSubmitting = false;
          this.snackBar.open('Error sending message. Please try again.', 'Close', { duration: 3000 });
        }
      );
    } else {
      this.snackBar.open('Please fill out all fields correctly.', 'Close', { duration: 3000 });
    }
  }

  getErrorMessage(field: string): string {
    const control = this.contactForm.get(field);
    if (control?.hasError('required')) {
      return 'This field is required';
    }
    if (control?.hasError('email')) {
      return 'Please enter a valid email address';
    }
    if (control?.hasError('minlength')) {
      const error = control.getError('minlength');
      return `Minimum length is ${error.requiredLength} characters`;
    }
    return '';
  }

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

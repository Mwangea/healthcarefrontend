//import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { UserService } from '../_services/user.service';
import { ToastrService } from 'ngx-toastr';
import { SettingsService } from '../../_service/settings.service';
import { UserService } from '../../_service/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  updateForm!: FormGroup;
  currentUserRole!: string;
  specialties: string[] = ['Cardiology', 'Dermatology', 'Neurology', 'Oncology']; // Example specialties

  constructor(
    private fb: FormBuilder,
    private service: SettingsService,
    private toastr: ToastrService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      specialty: [''], // Specialty dropdown
      // Add other fields as needed
    });

    this.currentUserRole = this.userService.getUserRole();
    this.populateForm();
  }

  populateForm(): void {
    const currentUsername = this.userService.getCurrentUsername();
    console.log('Fetching profile for:', currentUsername);
    if (this.currentUserRole === 'doctor') {
      this.userService.getDoctorProfile(currentUsername).subscribe(
        (data) => {
          console.log('Doctor Profile Data:', data);
          this.updateForm.patchValue(data); // Assuming API returns doctor profile data
        },
        (error) => {
          console.error('Failed to fetch doctor profile:', error);
          this.toastr.error('Failed to fetch doctor profile');
        }
      );
    } else if (this.currentUserRole === 'admin') {
      this.userService.getAdminProfile(currentUsername).subscribe(
        (data) => {
          console.log('Admin Profile Data:', data);
          this.updateForm.patchValue(data); // Assuming API returns admin profile data
        },
        (error) => {
          console.error('Failed to fetch admin profile:', error);
          this.toastr.error('Failed to fetch admin profile');
        }
      );
    }
  }

  onSubmit(): void {
    if (this.updateForm.valid) {
      const profileData = this.updateForm.value;
      console.log('Submitting form with data:', profileData);
      if (this.currentUserRole === 'doctor') {
        this.service.updateDoctorProfile(profileData).subscribe(
          () => {
            console.log('Doctor profile updated successfully');
            this.toastr.success('Profile updated successfully');
          },
          (error) => {
            this.toastr.error('Failed to update profile');
          }
        );
      } else if (this.currentUserRole === 'admin') {
        this.service.updateAdminProfile(profileData).subscribe(
          () => {
            this.toastr.success('Profile updated successfully');
          },
          (error) => {
            this.toastr.error('Failed to update profile');
          }
        );
      }
    }
  }

  deleteProfile(): void {
    if (confirm('Are you sure you want to delete your account?')) {
      if (this.currentUserRole === 'doctor') {
        this.service.deleteDoctorProfile().subscribe(
          () => {
            this.toastr.success('Account deleted successfully');
            this.userService.logout(); // Optional: Redirect to login or register
          },
          (error) => {
            this.toastr.error('Failed to delete account');
          }
        );
      } else if (this.currentUserRole === 'admin') {
        this.service.deleteAdminProfile().subscribe(
          () => {
            this.toastr.success('Account deleted successfully');
            this.userService.logout(); // Optional: Redirect to login or register
          },
          (error) => {
            this.toastr.error('Failed to delete account');
          }
        );
      }
    }
  }

}

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
  specialties: string[] = ['Cardiology', 'Dermatology', 'Neurology', 'Oncology'];

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
      specialty: [''],
    });

    this.currentUserRole = this.userService.getUserRole();
    this.populateForm();
  }

  populateForm(): void {
    const currentUsername = this.userService.getCurrentUsername();
    //console.log('Current Username:', currentUsername);
    if (this.currentUserRole === 'Doctor') {
      this.userService.getDoctorProfile(currentUsername).subscribe(
        (data) => {
          this.updateForm.patchValue(data);
        },
        (error) => {
         // console.error('Failed to fetch doctor profile:', error);
          this.toastr.error('Failed to fetch doctor profile');
        }
      );
    } else if (this.currentUserRole === 'Admin') {
      this.userService.getAdminProfile(currentUsername).subscribe(
        (data) => {
          this.updateForm.patchValue(data);
        },
        (error) => {
          //console.error('Failed to fetch admin profile:', error);
          this.toastr.error('Failed to fetch admin profile');
        }
      );
    }
  }

  onSubmit(): void {
    if (this.updateForm.valid) {
      const profileData = this.updateForm.value;
      if (this.currentUserRole === 'Doctor') {
        this.service.updateDoctorProfile(profileData).subscribe(
          () => {
            this.toastr.success('Doctor profile updated successfully');
          },
          (error) => {
            this.toastr.error('Failed to update doctor profile');
           // console.error('Update Doctor Profile Error:', error);
          }
        );
      } else if (this.currentUserRole === 'Admin') {
        this.service.updateAdminProfile(profileData).subscribe(
          () => {
            this.toastr.success('Admin profile updated successfully');
          },
          (error) => {
            this.toastr.error('Failed to update admin profile');
            //console.error('Update Admin Profile Error:', error);
          }
        );
      }
    }
  }

  deleteProfile(): void {
    if (confirm('Are you sure you want to delete your account?')) {
      if (this.currentUserRole === 'Doctor') {
        this.service.deleteDoctorProfile().subscribe(
          () => {
            this.toastr.success('Doctor account deleted successfully');
            this.userService.logout();
          },
          (error) => {
            this.toastr.error('Failed to delete doctor account');
           // console.error('Delete Doctor Profile Error:', error);
          }
        );
      } else if (this.currentUserRole === 'Admin') {
        this.service.deleteAdminProfile().subscribe(
          () => {
            this.toastr.success('Admin account deleted successfully');
            this.userService.logout(); // Optional: Redirect to login or register
          },
          (error) => {
            this.toastr.error('Failed to delete admin account');
           // console.error('Delete Admin Profile Error:', error);
          }
        );
      }
    }
  }
}

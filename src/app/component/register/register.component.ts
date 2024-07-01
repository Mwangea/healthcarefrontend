import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../_service/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { doctorRegister } from '../../_model/user.model';

@Component({
  selector: 'app-register',
  //imports: [MaterialModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {


  specialties: string[] = ['Cardiology', 'Dermatology', 'Neurology', 'Pediatrics', 'Radiology'];
  constructor(private builder: FormBuilder, private service: UserService, private toastr: ToastrService, private router: Router) {

  }

  _response: any;

    _regform=this.builder.group({
      Username: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
      Email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
      Password: this.builder.control('', Validators.required),
      ConfirmPassword: this.builder.control('', Validators.required),
      Specialty:this.builder.control('', Validators.required),
    })

    proceedregister() {
      if (this._regform.valid) {
        let _obj: doctorRegister = {
          Username: this._regform.value.Username as string,
          Password: this._regform.value.Password as string,
          Email: this._regform.value.Email as string,
          Specialty: this._regform.value.Specialty as string
        }
       // console.log('Data being sent to backend:', _obj);

        this.service.Doctorregistration(_obj).subscribe(item => {
          this._response = item;
          //console.log('Response from backend:', this._response);
          if (this._response.message === 'Registration Successful') {
            this.toastr.success('Registration successful!', 'Success');
            this.router.navigateByUrl('/login');
          } else {
            this.toastr.error('Registration failed');
          }
        }
        );
      }
    }

}

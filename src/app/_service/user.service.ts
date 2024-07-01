import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoginForm, doctorRegister } from '../_model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  baseUrl = environment.apiUrl;

  Doctorregistration(_data: doctorRegister) {
    return this.http.post(`${this.baseUrl}doctor/register`, _data);
  }

  proceedlogin(_data: LoginForm) {
    let loginEndpoint: string = '';

    if (_data.role === 'admin') {
      loginEndpoint = `${this.baseUrl}admin/login`;
    } else if (_data.role === 'doctor') {
      loginEndpoint = `${this.baseUrl}doctor/login`;
    } else {

      throw new Error(`Role '${_data.role}' is not supported.`);
    }

    return this.http.post(loginEndpoint, _data);
  }

  decodeToken(token: string): any {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  }

  getUserRole(): string {
    if (typeof localStorage !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        const decodedToken = this.decodeToken(token);
        if (decodedToken) {
          return decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
        }
      }
    }
    return '';
  }


}

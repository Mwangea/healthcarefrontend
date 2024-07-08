import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { patient } from '../_model/user.model';

@Injectable({
  providedIn: 'root'
})
export class patientService {

  baseUrl = environment.apiUrl;

  constructor(private http:HttpClient) {}

  addPatient(patient: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<any>(`${this.baseUrl}patient`, patient, { headers });
  }

  getPatients(): Observable<patient[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<patient[]>(`${this.baseUrl}patient`, { headers });
  }
}



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { medicalRecord } from '../_model/user.model';

@Injectable({
  providedIn: 'root'
})
export class medicalService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  GetAllMedicalRecords(): Observable<medicalRecord[]> {
    return this.http.get<medicalRecord[]>(`${this.baseUrl}medicalrecords`);
  }

  deleteMedicalRecord(medicalRecordId: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}medicalrecords/${medicalRecordId}`);
  }

  updateMedicalRecord(medicalRecordId: string, data: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}medicalrecords/${medicalRecordId}`, data);
  }

  addMedicalRecord(medicalData:any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}medicalrecords`, medicalData);
  }
}

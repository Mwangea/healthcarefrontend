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


  Getall(){
    return this.http.get<patient[]>(`${this.baseUrl}patient`);
  }

  addPatient(_data:patient){
    return this.http.post(`${this.baseUrl}patient`,_data);
  }

  updatePatient(Pat_id:string, patientData:any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}patient/${Pat_id}`, patientData);
  }

  deletePatient(pat_id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}patient/${pat_id}`);
  }

}



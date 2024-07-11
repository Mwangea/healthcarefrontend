//import { appointment } from './../_model/user.model';
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { appointment } from "../_model/user.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})

export class appointmentService {
  constructor( private http:HttpClient){}

  baseUrl = environment.apiUrl;

  GetAllAppointments(){
  return this.http.get<appointment[]>(`${this.baseUrl}appointments`);
}

GetAppointmentsByDoctor(doctorId:string){
  return this.http.get<appointment[]>(`${this.baseUrl}appointments/doctor/${doctorId}`);
}

createAppointment(appointmentData: any): Observable<any> {
  return this.http.post<any>(`${this.baseUrl}appointments`, appointmentData);
}

getDoctors(): Observable<any[]> {
  return this.http.get<any[]>(`${this.baseUrl}admin/doctors`);
}

getPatients(): Observable<any[]> {
  return this.http.get<any[]>(`${this.baseUrl}patient`);
}

}

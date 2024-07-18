import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Admin, doctor } from "../_model/user.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})

export class SettingsService {

  baseUrl = environment.apiUrl ;

  constructor(private http:HttpClient){}

  updateDoctorProfile(profileData: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}user/doctor/profile`, profileData);
  }

  deleteDoctorProfile(): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}user/doctor/profile`);
  }


  updateAdminProfile(profileData: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}user/admin/profile`, profileData);
  }


  deleteAdminProfile(): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}user/admin/profile`);
  }
}

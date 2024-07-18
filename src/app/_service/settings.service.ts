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

  // Delete doctor profile
  deleteDoctorProfile(): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}user/doctor/profile`);
  }

  // Update admin profile
  updateAdminProfile(profileData: Admin): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}user/admin/profile`, profileData);
  }

  // Delete admin profile
  deleteAdminProfile(): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}user/admin/profile`);
  }
}

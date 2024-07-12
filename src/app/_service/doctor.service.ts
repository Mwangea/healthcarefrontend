import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { doctor } from "../_model/user.model";

@Injectable({
  providedIn: "root"
})

export class DoctorService {

  baseUrl = environment.apiUrl ;

  constructor(private http:HttpClient){}

  GetAllDoctors(){
    return this.http.get<doctor[]>(`${this.baseUrl}admin/doctors`);
  }

  GetDoctorById(doctorId:string){
    return this.http.get<doctor>(`${this.baseUrl}doctors/${doctorId}`);
  }


  UpdateDoctor(_data:doctor){
    return this.http.put(`${this.baseUrl}doctors`,_data);
  }

  DeleteDoctor(doctorId:string){
    return this.http.delete(`${this.baseUrl}doctors/${doctorId}`);
  }

  
}

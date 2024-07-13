import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { appointment, medicalRecord, medicine } from "../_model/user.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})


export class medicalService {

  constructor(private http: HttpClient){}
  baseUrl = environment.apiUrl;


  GetAllMedicalRecords(){
    return this.http.get<medicalRecord[]>(`${this.baseUrl}medicalrecords`);
  }


}

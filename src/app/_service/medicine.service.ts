import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { appointment, medicine } from "../_model/user.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})

export class medicineService {

  constructor(private http: HttpClient){}
  baseUrl = environment.apiUrl;

  GetAllMedicines(){
    return this.http.get<medicine[]>(`${this.baseUrl}medicine`);
  }

  GetMedicineById(Id:string){
    return this.http.get<medicine>(`${this.baseUrl}medicine/${Id}`);
  }
}

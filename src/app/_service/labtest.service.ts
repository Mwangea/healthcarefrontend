import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { appointment, labtest } from "../_model/user.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})

export class labtestService {
  constructor( private http:HttpClient){}

  baseUrl = environment.apiUrl;

  GetAllLabTest(){
    return this.http.get<labtest[]>(`${this.baseUrl}labtests`);
  }


}

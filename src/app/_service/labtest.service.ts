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

  addLabTest(labtestData:any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}labtests`, labtestData);
  }

  updateLabTest(labtestId:string, labtestData:any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}labtests/${labtestId}`, labtestData);
  }

  deleteLabTest(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}labtests/${id}`);
  }



}

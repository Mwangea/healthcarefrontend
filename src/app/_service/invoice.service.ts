import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { appointment, invoice, labtest } from "../_model/user.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})

export class invoiceService {
  constructor( private http:HttpClient){}

  baseUrl = environment.apiUrl;

  GetAllInvoice(){
    return this.http.get<invoice[]>(`${this.baseUrl}invoice`);
  }

  addInvoice(invoiceData:any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}invoice`, invoiceData);
  }

  updateInvoice(id:string, invoiceData:any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}invoice/${id}`, invoiceData);
  }

  deleteInvoice(id: string): Observable<any> {
    console.log('Calling deleteInvoice with invoice_id:', id); // Debugging
    return this.http.delete<any>(`${this.baseUrl}invoice/${id}`);
  }

  downloadInvoice(invoiceId: number): Observable<Blob> {
    return this.http.get(`${this.baseUrl}invoice/${invoiceId}/download`, { responseType: 'blob' });
  }

  getDoctors(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}admin/doctors`);
  }

  GetInvoicesByDoctor(doctorId: string){
    return this.http.get<invoice[]>(`${this.baseUrl}invoice/doctor/${doctorId}`);
  }

  getPatients(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}patients`);
  }
}

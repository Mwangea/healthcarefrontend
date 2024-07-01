import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DoctorComponent } from './component/doctor/doctor.component';
import { MedicalRecordsComponent } from './component/medical-records/medical-records.component';
import { MedicineInventoryComponent } from './component/medicine-inventory/medicine-inventory.component';
import { PatientsComponent } from './component/patients/patients.component';
import { InvoiceComponent } from './component/invoice/invoice.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'doctors', component:DoctorComponent},
  {path: 'medical-records', component:MedicalRecordsComponent},
  {path: 'medicine-inventory', component:MedicineInventoryComponent},
  {path: 'patients', component:PatientsComponent},
  {path: 'invoice', component:InvoiceComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

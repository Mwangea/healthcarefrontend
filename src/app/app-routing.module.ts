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
import { AppointmentsComponent } from './component/appointments/appointments.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path: 'dashboard', component:DashboardComponent, canActivate: [AuthGuard]},
  {path: 'doctors', component:DoctorComponent, canActivate: [AuthGuard]},
  {path: 'medical-records', component:MedicalRecordsComponent, canActivate: [AuthGuard]},
  {path: 'medicine-inventory', component:MedicineInventoryComponent, canActivate: [AuthGuard]},
  {path: 'patients', component:PatientsComponent, canActivate: [AuthGuard]},
  {path: 'invoice', component:InvoiceComponent, canActivate: [AuthGuard]},
  {path:'appointments', component:AppointmentsComponent, canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

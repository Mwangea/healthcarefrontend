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
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LabtestComponent } from './component/labtest/labtest.component';
import { SettingsComponent } from './component/settings/settings.component';
import { PatientComponent } from './patient/patient/patient.component';
import { PatientMedicineInventoryComponent } from './patient/patient-medicine-inventory/patient-medicine-inventory.component';
import { PatientMedicalRecordComponent } from './patient/patient-medical-record/patient-medical-recor.component';
import { ServicesComponent } from './patient/services/services.component';
import { ContactComponent } from './patient/contact/contact.component';
import { FindDrComponent } from './patient/find-dr/find-dr.component';
import { PatientLayoutComponent } from './patient-layout/patient-layout.component';
import { PatientAppointmentComponent } from './patient/patient-appointment/patient-appointment.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'main',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'doctors', component: DoctorComponent },
      { path: 'medical-records', component: MedicalRecordsComponent },
      { path: 'medicine-inventory', component: MedicineInventoryComponent },
      { path: 'patients', component: PatientsComponent },
      { path: 'invoice', component: InvoiceComponent },
      { path: 'appointments', component: AppointmentsComponent },
      { path: 'lab-test', component: LabtestComponent },
      { path: 'settings', component: SettingsComponent },
    ]
  },
  { path: 'patient',
    component: PatientLayoutComponent,
    children: [
      { path: 'home', component: PatientComponent },
      { path:'medicine-inventory', component: PatientMedicineInventoryComponent },
      { path:'medical-records', component: PatientMedicalRecordComponent },
      { path:'services', component: ServicesComponent},
      { path:'contact', component: ContactComponent},
      { path: 'doctor', component: FindDrComponent},
      { path:'appointment', component: PatientAppointmentComponent}
    ]
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

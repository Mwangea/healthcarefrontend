import { library } from './../../node_modules/@fortawesome/fontawesome-svg-core/index.d';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { BodyComponent } from './component/body/body.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PatientsComponent } from './component/patients/patients.component';
import { MedicalRecordsComponent } from './component/medical-records/medical-records.component';
import { MedicineInventoryComponent } from './component/medicine-inventory/medicine-inventory.component';
import { InvoiceComponent } from './component/invoice/invoice.component';
import { DoctorComponent } from './component/doctor/doctor.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { HeaderComponent } from './component/header/header.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LabtestComponent } from './component/labtest/labtest.component';
import { PatientDialogComponent } from './component/patients/patient-dialog/patient-dialog.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AppointmentsComponent } from './component/appointments/appointments.component';
import { MatTableModule } from '@angular/material/table';
import { tokenInterceptor } from './_service/httpinterceptor.interceptor';
import { AppointmentDialogComponent } from './component/appointments/appointment-dialog/appointment-dialog.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SettingsComponent } from './component/settings/settings.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from './component/appointments/confirmation-dialog/confirmation-dialog.component';
import { EditappointmentDialogComponent } from './component/appointments/editappointment-dialog/editappointment-dialog.component';
import { EditdoctorDialogComponent } from './component/doctor/editdoctor-dialog/editdoctor-dialog.component';
import { DoctorDialogComponent } from './component/doctor/doctor-dialog/doctor-dialog.component';
import { DoctorConfirmationDialogComponent } from './component/doctor/doctor-confirmation-dialog/doctor-confirmation-dialog.component';
//import { AppointmentDialogComponent } from './appointments/appointment-dialog/appointment-dialog.component';
//import { AuthInterceptor } from './auth.interceptor';
//import { AuthInterceptor } from './auth.interceptor';
//import { UserService } from './_service/user.service';
//import { AuthInterceptor } from './auth.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SidenavComponent,
    BodyComponent,
    DashboardComponent,
    PatientsComponent,
    MedicalRecordsComponent,
    MedicineInventoryComponent,
    InvoiceComponent,
    DoctorComponent,
    HeaderComponent,
    MainLayoutComponent,
    LabtestComponent,
    PatientDialogComponent,
    AppointmentsComponent,
    AppointmentDialogComponent,
    SettingsComponent,
    ConfirmationDialogComponent,
    EditappointmentDialogComponent,
    EditdoctorDialogComponent,
    DoctorDialogComponent,
    DoctorConfirmationDialogComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterLink,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FontAwesomeModule,
    OverlayModule,
    CdkMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    MatTableModule,
    NgxPaginationModule,
    MatSnackBarModule




  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch(), withInterceptors([tokenInterceptor])),
    //provideHttpClient(withInterceptors([tokenInterceptor])),
    provideToastr({closeButton: true}),



  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

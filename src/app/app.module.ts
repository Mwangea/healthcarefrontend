import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OverlayModule } from '@angular/cdk/overlay';
import { provideHttpClient, withFetch, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { NgxPaginationModule } from 'ngx-pagination';
import { CdkMenuModule } from '@angular/cdk/menu';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';

import { SidenavComponent } from './component/sidenav/sidenav.component';
import { BodyComponent } from './component/body/body.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PatientsComponent } from './component/patients/patients.component';
import { MedicalRecordsComponent } from './component/medical-records/medical-records.component';
import { MedicineInventoryComponent } from './component/medicine-inventory/medicine-inventory.component';
import { InvoiceComponent } from './component/invoice/invoice.component';
import { DoctorComponent } from './component/doctor/doctor.component';
import { HeaderComponent } from './component/header/header.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LabtestComponent } from './component/labtest/labtest.component';
import { PatientDialogComponent } from './component/patients/patient-dialog/patient-dialog.component';
import { AppointmentsComponent } from './component/appointments/appointments.component';
import { AppointmentDialogComponent } from './component/appointments/appointment-dialog/appointment-dialog.component';
import { SettingsComponent } from './component/settings/settings.component';
import { ConfirmationDialogComponent } from './component/appointments/confirmation-dialog/confirmation-dialog.component';
import { EditappointmentDialogComponent } from './component/appointments/editappointment-dialog/editappointment-dialog.component';
import { EditdoctorDialogComponent } from './component/doctor/editdoctor-dialog/editdoctor-dialog.component';
import { DoctorDialogComponent } from './component/doctor/doctor-dialog/doctor-dialog.component';
import { DoctorConfirmationDialogComponent } from './component/doctor/doctor-confirmation-dialog/doctor-confirmation-dialog.component';
import { MedicalConfirmationDialogComponent } from './component/medical-records/medical-confirmation-dialog/medical-confirmation-dialog.component';
import { MedicalDialogComponent } from './component/medical-records/medical-dialog/medical-dialog.component';
import { AddmedicalDialogComponent } from './component/medical-records/addmedical-dialog/addmedical-dialog.component';
import { AddlabtestDialogComponent } from './component/labtest/addlabtest-dialog/addlabtest-dialog.component';
import { EditlabtestDialogComponent } from './component/labtest/editlabtest-dialog/editlabtest-dialog.component';
import { MessagelabtestDialogComponent } from './component/labtest/messagelabtest-dialog/messagelabtest-dialog.component';
import { MessagepatientDialogComponent } from './component/patients/messagepatient-dialog/messagepatient-dialog.component';
import { EditpatientDialogComponent } from './component/patients/editpatient-dialog/editpatient-dialog.component';
import { AddInvoiceDialogComponent } from './component/invoice/add-invoice-dialog/add-invoice-dialog.component';
import { EditInvoiceDialogComponent } from './component/invoice/edit-invoice-dialog/edit-invoice-dialog.component';
import { ConfirmationInvoiceDialogComponent } from './component/invoice/confirmation-invoice-dialog/confirmation-invoice-dialog.component';
import { PatientLayoutComponent } from './patient-layout/patient-layout.component';
import { PatientMedicineInventoryComponent } from './patient/patient-medicine-inventory/patient-medicine-inventory.component';
import { PatientMedicalRecordComponent } from './patient/patient-medical-record/patient-medical-recor.component';
import { PatientComponent } from './patient/patient/patient.component';
import { ServicesComponent } from './patient/services/services.component';
import { ContactComponent } from './patient/contact/contact.component';
import { FindDrComponent } from './patient/find-dr/find-dr.component';
import { PatientheaderComponent } from './patient/patientheader/patientheader.component';
import { PatientAppointmentComponent } from './patient/patient-appointment/patient-appointment.component';
import { AboutComponent } from './patient/about/about.component';

import { tokenInterceptor } from './_service/httpinterceptor.interceptor';

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
        MedicalConfirmationDialogComponent,
        MedicalDialogComponent,
        AddmedicalDialogComponent,
        AddlabtestDialogComponent,
        EditlabtestDialogComponent,
        MessagelabtestDialogComponent,
        MessagepatientDialogComponent,
        EditpatientDialogComponent,
        AddInvoiceDialogComponent,
        EditInvoiceDialogComponent,
        ConfirmationInvoiceDialogComponent,
        PatientLayoutComponent,
        PatientMedicineInventoryComponent,
        PatientMedicalRecordComponent,
        PatientComponent,
        ServicesComponent,
        ContactComponent,
        FindDrComponent,
        PatientheaderComponent,
        PatientAppointmentComponent,
        AboutComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MaterialModule,
        ReactiveFormsModule,
        CommonModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        FontAwesomeModule,
        OverlayModule,
        CdkMenuModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTableModule,
        NgxPaginationModule,
        MatSnackBarModule,
        NgxChartsModule,
        MatListModule,
        CarouselModule.forRoot(),
    ],
    providers: [
        provideClientHydration(),
        provideAnimations(),
        provideHttpClient(withFetch(), withInterceptors([tokenInterceptor])),
        provideToastr({ closeButton: true }),
        DatePipe,
        provideHttpClient(withInterceptorsFromDi()),
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

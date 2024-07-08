//import { patient } from './../../_model/user.model';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
//import { PatientService } from '../../_service/patient.service'; // Ensure this path is correct
//import { Patient } from '../../models/patient.model'; // Ensure this path is correct
import { PatientDialogComponent } from './patient-dialog/patient-dialog.component';
import { patientService } from '../../_service/patient.service';
import { patient } from '../../_model/user.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'] // Ensure correct file extension
})
export class PatientsComponent implements OnInit {
  patients: patient[] = [];
  displayedColumns: string[]=["Pat_id","Pat_fname","Pat_lname","Pat_age","Gender","Pat_blood_group","Pat_phone","Pat_type","actions"];
  dataSource = new MatTableDataSource<patient>();
  searchTerm: string = '';
  filterDate: Date = new Date();

  constructor(private patientService: patientService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadPatients();
  }

  loadPatients(): void {
    this.patientService.getPatients().subscribe(
      (patients: patient[]) => {
        this.patients = patients;
        this.dataSource.data = this.patients; // Update MatTableDataSource with fetched data
        console.log("Patients data:", this.patients);
      },
      error => {
        console.error('Error loading patients:', error);
      }
    );
  }

  editPatient(id: number): void {
    // Implement edit functionality if needed
  }

  viewPatientDetails(id: number): void {
    // Implement view details functionality if needed
  }

  deletePatient(id: number): void {
    // Implement delete functionality if needed
  }

  addPatient(): void {
    const dialogRef = this.dialog.open(PatientDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadPatients();
      }
    });
  }
}

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
  styleUrls: ['./patients.component.scss'] 
})
export class PatientsComponent implements OnInit {
  patientList!: patient[];
  displayedColumns: string[]=["Pat_id","Pat_fname","Pat_lname","Pat_age","Gender","Pat_blood_group","Pat_phone","Pat_type","action"];
  dataSource: any;
  //searchTerm: string = '';
  //filterDate: Date = new Date();

  constructor(private patientService: patientService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadPatients();
  }

  loadPatients(): void {
    this.patientService.Getall().subscribe(item => {
    this.patientList = item;
    this.dataSource = new MatTableDataSource<patient>(this.patientList);
    console.log(this.patientList);
  })
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

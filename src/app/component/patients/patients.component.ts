//import { patient } from './../../_model/user.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
//import { PatientService } from '../../_service/patient.service'; // Ensure this path is correct
//import { Patient } from '../../models/patient.model'; // Ensure this path is correct
import { PatientDialogComponent } from './patient-dialog/patient-dialog.component';
import { patientService } from '../../_service/patient.service';
import { patient } from '../../_model/user.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
  patientList!: patient[];
  displayedColumns: string[]=["username","pat_age","gender","pat_blood_group","pat_phone","pat_type","action"];
  dataSource: any;
  //searchTerm: string = '';
  //filterDate: Date = new Date();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private patientService: patientService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadPatients();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  loadPatients() {
    this.patientService.Getall().subscribe(
      item => {
        this.patientList = item;
        this.dataSource = new MatTableDataSource<patient>(this.patientList);
      },
      error => {
        console.error('Error loading all appointments:', error);
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

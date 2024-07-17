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
import { MessagepatientDialogComponent } from './messagepatient-dialog/messagepatient-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditpatientDialogComponent } from './editpatient-dialog/editpatient-dialog.component';
//import { EditPatientDialogComponent } from './editpatient-dialog/editpatient-dialog.component';
//import { EditpatientDialogComponent } from './editpatient-dialog/editpatient-dialog.component';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
  patientList!: patient[];
  displayedColumns: string[]=["username","pat_age","gender","pat_blood_group","pat_phone","pat_type","action"];
  dataSource!: MatTableDataSource<patient>;
  //searchTerm: string = '';
  //filterDate: Date = new Date();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private patientService: patientService, public dialog: MatDialog, private snackBar: MatSnackBar) {}

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

  editPatient(patient: patient): void {
    console.log('Editing patient:', patient);
    const dialogRef = this.dialog.open(EditpatientDialogComponent, {
      width: '500px',
      data: { patient: patient }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadPatients();
      }
    });
  }

  viewPatientDetails(id: number): void {
    // Implement view details functionality if needed
  }

  deletepatient(pat_id: string): void {
    const dialogRef = this.dialog.open(MessagepatientDialogComponent, {
      width: '350px',
      data: { message: 'Are you sure you want to delete patient?' }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.patientService.deletePatient(pat_id).subscribe(
          () => {
            this.snackBar.open('Deleted successfully', 'Close', {
              duration: 3000,
              horizontalPosition: 'right',
              verticalPosition: 'top'
            });
            this.patientList = this.patientList.filter(record => record.pat_id !== pat_id);
            this.dataSource.data = this.patientList;
          },
          (error) => {
            console.error('Error deleting patient:', error);
          }
        );
      }
    });
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

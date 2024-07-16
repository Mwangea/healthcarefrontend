import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { medicalService } from '../../_service/medical.service';
import { MedicalDialogComponent } from './medical-dialog/medical-dialog.component';
import { MedicalConfirmationDialogComponent } from './medical-confirmation-dialog/medical-confirmation-dialog.component';
import { medicalRecord } from '../../_model/user.model';
import { AddmedicalDialogComponent } from './addmedical-dialog/addmedical-dialog.component';

@Component({
  selector: 'app-medical-records',
  templateUrl: './medical-records.component.html',
  styleUrls: ['./medical-records.component.scss']
})
export class MedicalRecordsComponent {
  medicalList!: medicalRecord[];
  displayedColumns: string[] = ['patientName', 'date', 'diagnosis', 'treatment', 'notes', 'action'];
  dataSource!: MatTableDataSource<medicalRecord>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service: medicalService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadAllMedicalRecords();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  loadAllMedicalRecords(): void {
    this.service.GetAllMedicalRecords().subscribe(
      (records) => {
        this.medicalList = records;
        this.dataSource = new MatTableDataSource<medicalRecord>(this.medicalList);
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.error('Error loading all medical records:', error);
      }
    );
  }

  deleteMedicalRecord(medicalRecordId: string): void {
    const dialogRef = this.dialog.open(MedicalConfirmationDialogComponent, {
      width: '350px',
      data: { message: 'Are you sure you want to delete this medical record?' }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.service.deleteMedicalRecord(medicalRecordId).subscribe(
          () => {
            this.snackBar.open('Deleted successfully', 'Close', {
              duration: 3000,
              horizontalPosition: 'right',
              verticalPosition: 'top'
            });
            this.medicalList = this.medicalList.filter(record => record.medicalRecordId !== medicalRecordId);
            this.dataSource.data = this.medicalList;
          },
          (error) => {
            console.error('Error deleting medical record:', error);
          }
        );
      }
    });
  }

  editMedicalRecord(medicalRecord: medicalRecord): void {
    const dialogRef = this.dialog.open(MedicalDialogComponent, {
      width: '500px',
      data: medicalRecord
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadAllMedicalRecords();
      }
    });
  }

  addMedical(): void{
    const dialogRef = this.dialog.open(AddmedicalDialogComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadAllMedicalRecords();
      }
    });
  }
}

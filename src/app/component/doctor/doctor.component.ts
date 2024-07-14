import { Component, OnInit, ViewChild } from '@angular/core';
import { doctor } from '../../_model/user.model';
import { MatPaginator } from '@angular/material/paginator';
import { DoctorService } from '../../_service/doctor.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DoctorConfirmationDialogComponent } from './doctor-confirmation-dialog/doctor-confirmation-dialog.component';
import { EditdoctorDialogComponent } from './editdoctor-dialog/editdoctor-dialog.component';
import { UserService } from '../../_service/user.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.scss'
})
export class DoctorComponent implements OnInit {

  doctorList!: doctor[];
  displayedColumns: string[] = ["username","email","specialty", "action"];
  datasource: any;
  currentRole: string = '';


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private doctorService: DoctorService, public dialog: MatDialog, private snackBar: MatSnackBar, private userService : UserService) {}

  ngOnInit(): void {
    this.loadDoctors();
    this.currentRole = this.userService.getUserRole();
  }

  loadDoctors(): void {
    this.doctorService.GetAllDoctors().subscribe(
      item => {
        this.doctorList = item;
        this.datasource = new MatTableDataSource<doctor>(this.doctorList);
        this.datasource.paginator = this.paginator;
      },
      error => {
        console.error('Error loading doctors:', error);
      }
    );
  }
  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
  }


  editDoctor(doctor: doctor): void {
    if (this.currentRole === 'Admin') {
      const dialogRef = this.dialog.open(EditdoctorDialogComponent, {
        width: '500px',
        data: { doctor }
      });

      dialogRef.afterClosed().subscribe(response => {
        if (response) {
          this.loadDoctors();
        }
      });
    } else {
      this.snackBar.open('Only admins can edit doctors.', 'Close', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
    }
  }



  deleteDoctor(doctorId: string): void {
    const dialogRef = this.dialog.open(DoctorConfirmationDialogComponent, {
      width: '350px',
      data: { message: 'Are you sure you want to delete Doctor?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.doctorService.DeleteDoctor(doctorId).subscribe(() => {
          this.snackBar.open('Deleted successfully', 'Close', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
          });
          // Update the appointment list and datasource after deletion
          this.doctorList = this.doctorList.filter(doctor => doctor.id !== doctorId);
          this.datasource = new MatTableDataSource<doctor>(this.doctorList);
          this.datasource.paginator = this.paginator;
        }, error => {
          console.error('Error deleting appointment:', error);
        });
      }
    });
  }


}

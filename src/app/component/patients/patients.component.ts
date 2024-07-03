import { Component } from '@angular/core';
import { UserService } from '../../_service/user.service';
import { PatientDialogComponent } from './patient-dialog/patient-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.scss'
})
export class PatientsComponent {

  patients: any[] = [];
  searchTerm: string = '';
  filterDate: Date = new Date();

  constructor(private userService: UserService, public dialog: MatDialog){}


 /* ngOnInit(): void {
    this.fetchPatients();
  }

  fetchPatients(): void {
    this.userService.getPatients().subscribe(data => {
      this.patients = data;
    });
  }

  deletePatient(id: number): void {
    this.userService.deletePatient(id).subscribe(() => {
      this.fetchPatients();
    });
  }

  searchPatients(): any[] {
    return this.patients.filter(patient =>
      patient.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  } */
/*
  filterByDate(): any[] {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(this.filterDate.getDate() - 7);

    return this.patients.filter(patient => {
      const joinedDate = new Date(patient.joinedDate);
      return joinedDate >= oneWeekAgo && joinedDate <= this.filterDate;
    });
  }

  getFilteredPatients(): any[] {
    let filteredPatients = this.searchPatients();

    if (this.filterDate) {
      filteredPatients = this.filterByDate();
    }

    return filteredPatients;
  }

  addPatient(): void {
    const dialogRef = this.dialog.open(PatientDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.fetchPatients();
      }
    });
  }

  editPatient(id: number): void {

  }

  viewPatientDetails(id: number): void {

  }

*/
addPatient(): void {
  const dialogRef = this.dialog.open(PatientDialogComponent, {
    width: '400px'
  });

 
}

}

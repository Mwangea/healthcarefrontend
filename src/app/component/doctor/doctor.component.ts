import { Component, OnInit, ViewChild } from '@angular/core';
import { doctor } from '../../_model/user.model';
import { MatPaginator } from '@angular/material/paginator';
import { DoctorService } from '../../_service/doctor.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.scss'
})
export class DoctorComponent implements OnInit {

  doctorList!: doctor[];
  displayedColumns: string[] = ["username","email","specialty", "action"];
  datasource: any;


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private doctorService: DoctorService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadDoctors();
  }

  loadDoctors(): void {
    this.doctorService.GetAllDoctors().subscribe(
      item => {
        this.doctorList = item;
        this.datasource = new MatTableDataSource<doctor>(this.doctorList);
      },
      error => {
        console.error('Error loading doctors:', error);
      }
    );
  }
  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
  }


}

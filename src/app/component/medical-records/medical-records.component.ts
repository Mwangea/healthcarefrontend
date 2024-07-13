import { Component, ViewChild } from '@angular/core';
import { medicalRecord } from '../../_model/user.model';
import { MatPaginator } from '@angular/material/paginator';
import { medicalService } from '../../_service/medical.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-medical-records',
  templateUrl: './medical-records.component.html',
  styleUrl: './medical-records.component.scss'
})
export class MedicalRecordsComponent {

  medicalList!: medicalRecord[];
  displayedColumns: string[] = ["patientName","date","diagnosis","treatment","notes","action"];
  dataSource: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public service: medicalService, ){}

  ngOnInit(): void {
    this.LoadAllMedicalRecord();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }



  LoadAllMedicalRecord(){
    this.service.GetAllMedicalRecords().subscribe(
      item => {
        this.medicalList = item;
        this.dataSource = new MatTableDataSource<medicalRecord>(this.medicalList);
      },
      error => {
        console.error('Error loading all medical Records:', error);
      }
    )
  }

}

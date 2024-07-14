import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { labtestService } from '../../_service/labtest.service';
import { labtest } from '../../_model/user.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-labtest',
  templateUrl: './labtest.component.html',
  styleUrl: './labtest.component.scss'
})
export class LabtestComponent {

  labtestList!: labtest[];
  displayedColumns: string[] = ["patientName","labPatTests","labPatAilment","labPatResults","labDateRec","action"];
  dataSource: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public service: labtestService, ){}

  ngOnInit(): void {
    this.LoadAllLabTest();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  LoadAllLabTest(){
    this.service.GetAllLabTest().subscribe(
      item => {
        this.labtestList = item;
        this.dataSource = new MatTableDataSource<labtest>(this.labtestList);
      },
      error => {
        console.error('Error loading all medical Records:', error);
      }
    )
  }

}

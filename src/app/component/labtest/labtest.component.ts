import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { labtestService } from '../../_service/labtest.service';
import { labtest } from '../../_model/user.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddlabtestDialogComponent } from './addlabtest-dialog/addlabtest-dialog.component';
import { EditlabtestDialogComponent } from './editlabtest-dialog/editlabtest-dialog.component';
import { MessagelabtestDialogComponent } from './messagelabtest-dialog/messagelabtest-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-labtest',
  templateUrl: './labtest.component.html',
  styleUrl: './labtest.component.scss'
})
export class LabtestComponent {

  labtestList!: labtest[];
  displayedColumns: string[] = ["patientName","labPatTests","labPatAilment","labPatResults","labDateRec","action"];
  dataSource!: MatTableDataSource<labtest>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

    constructor(public service: labtestService, private dialog:MatDialog, private snackBar: MatSnackBar){}

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

  addLabTest(): void{
    const dialogRef = this.dialog.open(AddlabtestDialogComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.LoadAllLabTest();
      }
    });
  }

  editLabTest(labtest: labtest): void {
    const dialogRef = this.dialog.open(EditlabtestDialogComponent, {
      width: '500px',
      data: labtest
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.LoadAllLabTest();
      }
    });
  }

  deletelabtest(id: string): void {
    console.log('Delete button clicked for labtestId:', id);  // Debugging
    const dialogRef = this.dialog.open(MessagelabtestDialogComponent, {
      width: '350px',
      data: { message: 'Are you sure you want to delete this Lab Test?' }
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog result:', result);  // Debugging
      if (result) {
        this.service.deleteLabTest(id).subscribe(
          () => {
            this.snackBar.open('Deleted successfully', 'Close', {
              duration: 3000,
              horizontalPosition: 'right',
              verticalPosition: 'top'
            });
            this.labtestList = this.labtestList.filter(record => record.id !== id);
            this.dataSource.data = this.labtestList;
          },
          (error) => {
            console.error('Error deleting lab test:', error);
          }
        );
      }
    });
  }


}

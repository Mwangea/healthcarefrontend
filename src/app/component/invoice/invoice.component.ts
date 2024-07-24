import { Component, ViewChild } from '@angular/core';
import { invoice } from '../../_model/user.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { invoiceService } from '../../_service/invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss'
})
export class InvoiceComponent {

  invoiceList!: invoice[];
  displayedColumns: string[] = ['patientName', 'doctorUsername', 'date', 'invoiceNumber', 'total', 'action'];
  dataSource!: MatTableDataSource<invoice>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public service: invoiceService, private dialog:MatDialog, private snackBar: MatSnackBar){}

  ngOnInit(): void {
    this.LoadInvoice();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  LoadInvoice(){
    this.service.GetAllInvoice().subscribe(
      item => {
        this.invoiceList = item;
        this.dataSource = new MatTableDataSource<invoice>(this.invoiceList);
      },
      error => {
        console.error('Error loading  invoice Records:', error);
      }
    )
  }

}

//import { invoice } from './../../_model/user.model';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { invoice } from '../../_model/user.model';
import { invoiceService } from '../../_service/invoice.service';
import { AddInvoiceDialogComponent } from './add-invoice-dialog/add-invoice-dialog.component';
import { UserService } from '../../_service/user.service';
import { ConfirmationInvoiceDialogComponent } from './confirmation-invoice-dialog/confirmation-invoice-dialog.component';
import { EditInvoiceDialogComponent } from './edit-invoice-dialog/edit-invoice-dialog.component';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit, AfterViewInit {

  invoiceList!: invoice[];
  displayedColumns: string[] = ['patientName', 'doctorUsername', 'date', 'invoiceNumber', 'total', 'action'];
  dataSource!: MatTableDataSource<invoice>;
  role: string = '';
  doctorId: string | undefined;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service: invoiceService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.role = this.userService.getUserRole();

    if (this.role === 'Doctor') {
      const token = localStorage.getItem('token');
      if (token) {
        const decodedToken = this.userService.decodeToken(token);
        this.doctorId = decodedToken.sub;
        if (this.doctorId) {
          this.loadInvoicesForDoctor(this.doctorId);
        } else {
          console.error('Doctor ID is undefined in token.');
        }
      } else {
        console.error('Token not found in localStorage.');
      }
    } else if (this.role === 'Admin') {
      this.loadAllInvoices();
    } else {
      console.error('Invalid role:', this.role);
    }
  }

  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
    }
  }

  loadInvoicesForDoctor(doctorId: string) {
    this.service.GetInvoicesByDoctor(doctorId).subscribe(
      item => {
        this.invoiceList = item;
        this.dataSource = new MatTableDataSource<invoice>(this.invoiceList);
        this.dataSource.paginator = this.paginator;
      },
      error => {
        console.error('Error loading doctor invoices:', error);
      }
    );
  }

  loadAllInvoices() {
    this.service.GetAllInvoice().subscribe(
      (invoices) => {
        this.invoiceList = invoices;
        this.dataSource = new MatTableDataSource<invoice>(this.invoiceList);
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.error('Error loading all invoices:', error);
      }
    );
  }

  openInvoiceDialog(): void {
    const dialogRef = this.dialog.open(AddInvoiceDialogComponent, {
      width: '600px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.createInvoice(result);
      }
    });
  }

  createInvoice(invoiceData: any): void {
    this.service.addInvoice(invoiceData).subscribe(
      () => {
        this.snackBar.open('Invoice created successfully', 'Close', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        });
        if (this.role === 'Doctor') {
          if (this.doctorId) {
            this.loadInvoicesForDoctor(this.doctorId); // Refresh only if doctor
          }
        } else {
          this.loadAllInvoices(); // Refresh if admin
        }
      },
      (error) => {
        console.error('Error creating invoice', error);
        this.snackBar.open('Error creating invoice', 'Close', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        });
      }
    );
  }

  editInvoice(invoice: invoice): void {
    const dialogRef = this.dialog.open(EditInvoiceDialogComponent, {
      width: '500px',
      data: {invoice}
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadAllInvoices();
      }
    });
  }

  deleteInvoice(id: string): void {
    console.log('Delete button clicked for invoiceId:', id);  // Debugging
    const dialogRef = this.dialog.open(ConfirmationInvoiceDialogComponent, {
      width: '350px',
      data: { message: 'Are you sure you want to delete this Invoice?' }
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog result:', result);  // Debugging
      if (result) {
        this.service.deleteInvoice(id).subscribe(
          () => {
            this.snackBar.open('Deleted successfully', 'Close', {
              duration: 3000,
              horizontalPosition: 'right',
              verticalPosition: 'top'
            });
            this.invoiceList = this.invoiceList.filter(record => record.invoice_id !== id);
            this.dataSource.data = this.invoiceList;
          },
          (error) => {
            console.error('Error deleting invoice:', error);
          }
        );
      }
    });
  }

  downloadInvoice(invoiceId: number): void {
    this.service.downloadInvoice(invoiceId).subscribe(
      (blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `invoice-${invoiceId}.pdf`;
        a.click();
        window.URL.revokeObjectURL(url);
      },
      (error) => {
        console.error('Error downloading invoice:', error);
        this.snackBar.open('Error downloading invoice', 'Close', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        });
      }
    );
  }
}

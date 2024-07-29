import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { patientService } from '../../../_service/patient.service';
import { invoiceService } from '../../../_service/invoice.service';
import { UserService } from '../../../_service/user.service';
import { invoice } from '../../../_model/user.model';

@Component({
  selector: 'app-edit-invoice-dialog',
  templateUrl: './edit-invoice-dialog.component.html',
  styleUrls: ['./edit-invoice-dialog.component.scss']
})
export class EditInvoiceDialogComponent implements OnInit {
  invoiceForm: FormGroup;
  doctors: any[] = [];
  patients: any[] = [];
  currentUserRole!: string;
  loggedInDoctorUsername!: string;

  constructor(
    private fb: FormBuilder,
    private patientService: patientService,
    private userService: UserService,
    private invoiceService: invoiceService,
    private dialogRef: MatDialogRef<EditInvoiceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { invoice: invoice },
    private snackBar: MatSnackBar
  ) {
    this.invoiceForm = this.fb.group({
      invoiceId: [data.invoice.invoice_id, Validators.required],
      patientUsername: [data.invoice.patientId, Validators.required],
      doctorUsername: [{ value: data.invoice.doctorId, disabled: true }, Validators.required],
      date: [data.invoice.date, Validators.required],
      services: this.fb.array([]),
      charges: this.fb.array([]),
      paymentMethod: [data.invoice.paymentMethod, Validators.required],
      paymentDate: [data.invoice.paymentDate, Validators.required],
      amountPaid: [data.invoice.amountPaid, Validators.required],
      subtotal: [data.invoice.subtotal],
      tax: [data.invoice.tax],
      total: [data.invoice.total]
    });
  }

  ngOnInit(): void {
    this.getCurrentUserRole();
    this.fetchPatients();
    this.populateServices();
    this.populateCharges();
  }

  get services() {
    return this.invoiceForm.get('services') as FormArray;
  }

  get charges() {
    return this.invoiceForm.get('charges') as FormArray;
  }

  getCurrentUserRole() {
    this.currentUserRole = this.userService.getUserRole();
    if (this.currentUserRole === 'Doctor') {
      this.loggedInDoctorUsername = this.userService.getCurrentUsername();
      this.invoiceForm.get('doctorUsername')?.setValue(this.loggedInDoctorUsername);
      this.invoiceForm.get('doctorUsername')?.disable();
    }
  }

  fetchPatients() {
    this.patientService.Getall().subscribe({
      next: (data) => this.patients = data,
      error: (err) => console.error(err)
    });
  }

  populateServices() {
    const servicesArray = this.invoiceForm.get('services') as FormArray;
    this.data.invoice.services.forEach((service: any) => {
      servicesArray.push(this.fb.group({
        description: [service.description, Validators.required],
        code: [service.code, Validators.required],
        quantity: [service.quantity, Validators.required],
        unitPrice: [service.unitPrice, Validators.required],
        total: [service.total]
      }));
    });
  }

  populateCharges() {
    const chargesArray = this.invoiceForm.get('charges') as FormArray;
    this.data.invoice.charges.forEach((charge: any) => {
      chargesArray.push(this.fb.group({
        description: [charge.description, Validators.required],
        code: [charge.code, Validators.required],
        quantity: [charge.quantity, Validators.required],
        unitPrice: [charge.unitPrice, Validators.required],
        total: [charge.total]
      }));
    });
  }

  addService() {
    this.services.push(this.fb.group({
      description: ['', Validators.required],
      code: ['', Validators.required],
      quantity: ['', Validators.required],
      unitPrice: ['', Validators.required],
      total: ['']
    }));
  }

  removeService(index: number) {
    this.services.removeAt(index);
  }

  addCharge() {
    this.charges.push(this.fb.group({
      description: ['', Validators.required],
      code: ['', Validators.required],
      quantity: ['', Validators.required],
      unitPrice: ['', Validators.required],
      total: ['']
    }));
  }

  removeCharge(index: number) {
    this.charges.removeAt(index);
  }

  calculateTotals() {
    let subtotal = 0;
    this.services.controls.forEach(service => {
      const serviceTotal = service.get('quantity')?.value * service.get('unitPrice')?.value;
      service.get('total')?.setValue(serviceTotal, { emitEvent: false });
      subtotal += serviceTotal;
    });
    this.charges.controls.forEach(charge => {
      const chargeTotal = charge.get('quantity')?.value * charge.get('unitPrice')?.value;
      charge.get('total')?.setValue(chargeTotal, { emitEvent: false });
      subtotal += chargeTotal;
    });
    const tax = subtotal * 0.1;  // Assuming 10% tax
    const total = subtotal + tax;
    this.invoiceForm.get('subtotal')?.setValue(subtotal, { emitEvent: false });
    this.invoiceForm.get('tax')?.setValue(tax, { emitEvent: false });
    this.invoiceForm.get('total')?.setValue(total, { emitEvent: false });
  }

  save() {
    if (this.invoiceForm.valid) {
      const updatedInvoice = this.invoiceForm.getRawValue();
      const invoiceId = this.invoiceForm.get('invoiceId')?.value;

      if (invoiceId) {
        this.invoiceService.updateInvoice(invoiceId, updatedInvoice).subscribe({
          next: () => {
            this.snackBar.open('Invoice updated successfully', 'Close', { duration: 3000 });
            this.dialogRef.close(true);
          },
          error: (err) => console.error(err)
        });
      } else {
        console.error('Invoice ID is missing.');
      }
    }
  }

  close() {
    this.dialogRef.close();
  }
}

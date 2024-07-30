import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { patientService } from '../../../_service/patient.service';
import { invoiceService } from '../../../_service/invoice.service';
import { UserService } from '../../../_service/user.service';
import { ToastrService } from 'ngx-toastr';
import { formatDate } from '@angular/common';

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
    private toastr: ToastrService,
    private invoiceService: invoiceService,
    private dialogRef: MatDialogRef<EditInvoiceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.invoiceForm = this.fb.group({
      patientUsername: ['', Validators.required],
      doctorUsername: ['', Validators.required],
      date: ['', Validators.required],
      services: this.fb.array([]),
      charges: this.fb.array([]),
      paymentMethod: ['', Validators.required],
      paymentDate: ['', Validators.required],
      amountPaid: ['', Validators.required],
      subtotal: [{ value: 0, disabled: true }],
      tax: [{ value: 0, disabled: true }],
      total: [{ value: 0, disabled: true }]
    });

    this.invoiceForm.valueChanges.subscribe(() => {
      this.calculateTotals();
    });
  }

  get services(): FormArray {
    return this.invoiceForm.get('services') as FormArray;
  }

  get charges(): FormArray {
    return this.invoiceForm.get('charges') as FormArray;
  }

  ngOnInit(): void {
    this.currentUserRole = this.userService.getUserRole();
    this.loggedInDoctorUsername = this.userService.getCurrentUsername();
    this.loadPatients();
    this.loadDoctors();
    this.prefillDoctorUsername();
    this.prefillForm(this.data.invoice);
  }

  loadDoctors(): void {
    if (this.currentUserRole === 'Admin') {
      this.invoiceService.getDoctors().subscribe(
        (data) => {
          this.doctors = data;
          this.invoiceForm.get('doctorUsername')?.enable();
        },
        (error) => console.error('Error fetching doctors:', error)
      );
    } else if (this.currentUserRole === 'Doctor') {
      this.userService.getDoctorProfile(this.loggedInDoctorUsername).subscribe(
        (data) => {
          this.doctors = [data];
          this.invoiceForm.get('doctorUsername')?.setValue(data.username);
          this.invoiceForm.get('doctorUsername')?.disable();
        },
        (error) => console.error('Error fetching doctor profile:', error)
      );
    }
  }

  loadPatients(): void {
    this.patientService.Getall().subscribe(
      (data) => {
        this.patients = data;
      },
      (error) => console.error('Error retrieving patients:', error)
    );
  }

  prefillDoctorUsername(): void {
    if (this.currentUserRole === 'Doctor') {
      this.invoiceForm.get('doctorUsername')?.setValue(this.loggedInDoctorUsername);
    }
  }

  prefillForm(invoice: any): void {
    this.invoiceForm.patchValue({
      patientUsername: invoice.patientUsername,
      doctorUsername: invoice.doctorUsername,
      date: invoice.date,
      paymentMethod: invoice.paymentMethod,
      paymentDate: invoice.paymentDate,
      amountPaid: invoice.amountPaid,
      subtotal: invoice.subtotal,
      tax: invoice.tax,
      total: invoice.total
    });

    this.setServices(invoice.services);
    this.setCharges(invoice.charges);
  }

  setServices(services: any[]): void {
    const serviceArray = this.invoiceForm.get('services') as FormArray;
    services.forEach(service => {
      serviceArray.push(this.fb.group({
        description: [service.description, Validators.required],
        code: [service.code, Validators.required],
        quantity: [service.quantity, [Validators.required, Validators.min(1)]],
        unitPrice: [service.unitPrice, [Validators.required, Validators.min(0)]],
        total: [{ value: service.total, disabled: true }]
      }));
    });
  }

  setCharges(charges: any[]): void {
    const chargeArray = this.invoiceForm.get('charges') as FormArray;
    charges.forEach(charge => {
      chargeArray.push(this.fb.group({
        description: [charge.description, Validators.required],
        code: [charge.code, Validators.required],
        quantity: [charge.quantity, [Validators.required, Validators.min(1)]],
        unitPrice: [charge.unitPrice, [Validators.required, Validators.min(0)]],
        total: [{ value: charge.total, disabled: true }]
      }));
    });
  }

  formatDateForSubmission(date: Date | string): string {
    return formatDate(date, 'dd/MM/yyyy', 'en-GB');
  }

  onSave(): void {
    if (this.invoiceForm.valid) {
      const formValue = this.invoiceForm.getRawValue();
      const formattedDate = this.formatDateForSubmission(formValue.date);
      const formattedPaymentDate = this.formatDateForSubmission(formValue.paymentDate);

      const invoiceData = {
        ...formValue,
        date: formattedDate,
        paymentDate: formattedPaymentDate,
        id: this.data.invoice.id // Include the ID for editing
      };

      this.invoiceService.updateInvoice(this.data.invoice.id, invoiceData).subscribe(
        () => {
          this.toastr.success('Invoice updated successfully');
          this.dialogRef.close(invoiceData);
        },
        (error) => {
          console.error('Error updating invoice:', error);
          this.toastr.error('Failed to update invoice');
        }
      );
    }
  }

  addService(): void {
    this.services.push(this.fb.group({
      description: ['', Validators.required],
      code: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      unitPrice: [0, [Validators.required, Validators.min(0)]],
      total: [{ value: 0, disabled: true }]
    }));
  }

  removeService(index: number): void {
    this.services.removeAt(index);
    this.calculateTotals();
  }

  addCharge(): void {
    this.charges.push(this.fb.group({
      description: ['', Validators.required],
      code: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      unitPrice: [0, [Validators.required, Validators.min(0)]],
      total: [{ value: 0, disabled: true }]
    }));
  }

  removeCharge(index: number): void {
    this.charges.removeAt(index);
    this.calculateTotals();
  }

  calculateTotals(): void {
    let subtotal = 0;

    this.services.controls.forEach(service => {
      const quantity = service.get('quantity')!.value;
      const unitPrice = service.get('unitPrice')!.value;
      const total = quantity * unitPrice;
      service.get('total')!.setValue(total, { emitEvent: false });
      subtotal += total;
    });

    this.charges.controls.forEach(charge => {
      const quantity = charge.get('quantity')!.value;
      const unitPrice = charge.get('unitPrice')!.value;
      const total = quantity * unitPrice;
      charge.get('total')!.setValue(total, { emitEvent: false });
      subtotal += total;
    });

    const tax = subtotal * 0.04; // Assuming a 4% tax rate
    const total = subtotal + tax;

    this.invoiceForm.get('subtotal')!.setValue(subtotal, { emitEvent: false });
    this.invoiceForm.get('tax')!.setValue(tax, { emitEvent: false });
    this.invoiceForm.get('total')!.setValue(total, { emitEvent: false });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}

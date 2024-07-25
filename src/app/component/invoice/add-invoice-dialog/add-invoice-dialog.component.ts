import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { patientService } from '../../../_service/patient.service';
import { invoiceService } from '../../../_service/invoice.service';
import { UserService } from '../../../_service/user.service';
import { ToastrService } from 'ngx-toastr';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-add-invoice-dialog',
  templateUrl: './add-invoice-dialog.component.html',
  styleUrls: ['./add-invoice-dialog.component.scss']
})
export class AddInvoiceDialogComponent implements OnInit {
  invoiceForm: FormGroup;
  doctors: any[] = []; // This should be an array
  patients: any[] = [];
  currentUserRole!: string;
  loggedInDoctorUsername!: string;

  constructor(
    private fb: FormBuilder,
    private patientService: patientService,
    private userService: UserService,
    private toastr: ToastrService,
    private invoiceService: invoiceService,
    private dialogRef: MatDialogRef<AddInvoiceDialogComponent>,
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
          this.doctors = [data]; // Make sure it's an array
          this.invoiceForm.get('doctorUsername')?.setValue(data.username);
          this.invoiceForm.get('doctorUsername')?.disable(); // Optionally disable if desired
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

  formatDateForSubmission(date: Date | string): string {
    return formatDate(date, 'dd/MM/yyyy', 'en-GB');
  }

  onCreate(): void {
    if (this.invoiceForm.valid) {
      const formValue = this.invoiceForm.getRawValue();
      const formattedDate = this.formatDateForSubmission(formValue.date);
      const formattedPaymentDate = this.formatDateForSubmission(formValue.paymentDate);

      const invoiceData = {
        ...formValue,
        date: formattedDate,
        paymentDate: formattedPaymentDate
      };

      this.dialogRef.close(invoiceData);
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

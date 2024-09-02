import { Component, OnInit } from '@angular/core';

interface Medicine {
  productName: string;
  type: string;
  pricePerPack: number;
  stock: number;
  expiryDate: string;
  manufacturer: string;
  imageUrl: string;
}

@Component({
  selector: 'app-patient-medicine-inventory',
  templateUrl: './patient-medicine-inventory.component.html',
  styleUrls: ['./patient-medicine-inventory.component.scss']
})
export class PatientMedicineInventoryComponent implements OnInit {

  medicineList: Medicine[] = [];

  constructor() {}

  ngOnInit(): void {
    this.loadDummyMedicines();
  }

  loadDummyMedicines() {
    this.medicineList = [
      {
        productName: 'Paracetamol',
        type: 'Tablet',
        pricePerPack: 5.00,
        stock: 150,
        expiryDate: '2025-12-31',
        manufacturer: 'Pharma Inc.',
        imageUrl: 'assets/images/paracetamol.jpg'
      },
      {
        productName: 'Amoxicillin',
        type: 'Capsule',
        pricePerPack: 12.50,
        stock: 80,
        expiryDate: '2024-06-30',
        manufacturer: 'MedLife',
        imageUrl: 'assets/images/Amoxicillin.jpeg'
      },
      {
        productName: 'Ibuprofen',
        type: 'Tablet',
        pricePerPack: 8.75,
        stock: 200,
        expiryDate: '2026-03-15',
        manufacturer: 'HealthCo',
        imageUrl: 'assets/images/paracetamol.jpg'
      },
      {
        productName: 'Cough Syrup',
        type: 'Liquid',
        pricePerPack: 7.50,
        stock: 50,
        expiryDate: '2023-11-01',
        manufacturer: 'Wellness Pharma',
        imageUrl: 'assets/images/Amoxicillin.jpeg'
      },
      {
        productName: 'Aspirin',
        type: 'Tablet',
        pricePerPack: 6.00,
        stock: 120,
        expiryDate: '2025-01-20',
        manufacturer: 'CareMed',
        imageUrl: 'assets/images/paracetamol.jpg'
      },
      {
        productName: 'Loratadine',
        type: 'Tablet',
        pricePerPack: 9.50,
        stock: 90,
        expiryDate: '2024-08-22',
        manufacturer: 'Pharma Plus',
        imageUrl: 'assets/images/Amoxicillin.jpeg'
      },
      {
        productName: 'Azithromycin',
        type: 'Tablet',
        pricePerPack: 15.00,
        stock: 70,
        expiryDate: '2023-12-15',
        manufacturer: 'BioMed',
        imageUrl: 'assets/images/paracetamol.jpg'
      },
      {
        productName: 'Metformin',
        type: 'Tablet',
        pricePerPack: 10.00,
        stock: 130,
        expiryDate: '2025-05-10',
        manufacturer: 'HealthPlus',
        imageUrl: 'assets/images/Amoxicillin.jpeg'
      },
      {
        productName: 'Cetirizine',
        type: 'Tablet',
        pricePerPack: 8.00,
        stock: 160,
        expiryDate: '2024-09-18',
        manufacturer: 'MediCare',
        imageUrl: 'assets/images/paracetamol.jpg'
      },
      {
        productName: 'Cefalexin',
        type: 'Capsule',
        pricePerPack: 11.50,
        stock: 60,
        expiryDate: '2023-10-25',
        manufacturer: 'PharmaGlobal',
        imageUrl: 'assets/images/Amoxicillin.jpeg'
      },
      {
        productName: 'Cefalexin',
        type: 'Capsule',
        pricePerPack: 11.50,
        stock: 60,
        expiryDate: '2023-10-25',
        manufacturer: 'PharmaGlobal',
        imageUrl: 'assets/images/Amoxicillin.jpeg'
      },
      {
        productName: 'Cefalexin',
        type: 'Capsule',
        pricePerPack: 11.50,
        stock: 60,
        expiryDate: '2023-10-25',
        manufacturer: 'PharmaGlobal',
        imageUrl: 'assets/images/Amoxicillin.jpeg'
      }
    ];
  }

  onPurchase(medicine: Medicine) {
    alert(`You have purchased ${medicine.productName}.`);
    // Implement further purchase logic here
  }

}

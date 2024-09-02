import { Component, OnInit } from '@angular/core';

interface MedicalRecord {
  recordId: number;
  date: string;
  description: string;
  doctorName: string;
  notes: string;
}

@Component({
  selector: 'app-patient-medical-records',
  templateUrl: './patient-medical-recor.component.html',
  styleUrls: ['./patient-medical-recor.component.scss']
})
export class PatientMedicalRecorComponent implements OnInit {

  medicalRecords: MedicalRecord[] = [];

  ngOnInit(): void {
    this.loadMedicalRecords();
  }

  loadMedicalRecords() {
    this.medicalRecords = [
      {
        recordId: 1,
        date: '2024-01-10',
        description: 'Routine check-up',
        doctorName: 'Dr. John Doe',
        notes: 'Patient is in good health.'
      },
      {
        recordId: 2,
        date: '2024-02-05',
        description: 'Follow-up on blood tests',
        doctorName: 'Dr. Jane Smith',
        notes: 'No significant changes, continue current treatment.'
      },
      {
        recordId: 3,
        date: '2024-03-15',
        description: 'Consultation for headaches',
        doctorName: 'Dr. Emily Davis',
        notes: 'Prescribed medication for migraines.'
      },
      {
        recordId: 4,
        date: '2024-04-20',
        description: 'Annual physical examination',
        doctorName: 'Dr. Michael Brown',
        notes: 'All vital signs are normal. Recommend regular exercise and balanced diet.'
      },
      {
        recordId: 5,
        date: '2024-05-12',
        description: 'Visit for back pain',
        doctorName: 'Dr. Sarah Wilson',
        notes: 'Advised physical therapy and prescribed pain relief medication.'
      },
      {
        recordId: 6,
        date: '2024-06-25',
        description: 'Skin rash evaluation',
        doctorName: 'Dr. Robert Lee',
        notes: 'Diagnosed with eczema. Recommended topical ointment and avoidance of irritants.'
      }

      // Add more records as needed
    ];
  }
}

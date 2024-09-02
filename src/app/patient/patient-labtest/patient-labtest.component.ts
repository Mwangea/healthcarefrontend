import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-labtest',
  templateUrl: './patient-labtest.component.html',
  styleUrl: './patient-labtest.component.scss'
})
export class PatientLabtestComponent implements OnInit{
  labTests = [
    {
      name: 'Complete Blood Count (CBC)',
      description: 'A complete blood count (CBC) is a test that evaluates the cells that make up your blood. It measures various components, including red blood cells, white blood cells, and platelets.',
      price: '$50',
      duration: '1 hour',
      resultTime: '24-48 hours'
    },
    {
      name: 'Basic Metabolic Panel (BMP)',
      description: 'The BMP test measures glucose, calcium, and electrolytes, providing information about your heart, kidney, and bone health.',
      price: '$45',
      duration: '30 minutes',
      resultTime: '24 hours'
    },
    {
      name: 'Lipid Panel',
      description: 'A lipid panel measures the levels of cholesterol and triglycerides in your blood, helping assess your risk of heart disease.',
      price: '$55',
      duration: '30 minutes',
      resultTime: '24-48 hours'
    },
    {
      name: 'Thyroid Stimulating Hormone (TSH)',
      description: 'The TSH test measures the level of thyroid-stimulating hormone in your blood, which helps evaluate thyroid function.',
      price: '$40',
      duration: '30 minutes',
      resultTime: '24 hours'
    },
    {
      name: 'Hemoglobin A1c (HbA1c)',
      description: 'The HbA1c test measures your average blood sugar levels over the past 2-3 months, aiding in the management of diabetes.',
      price: '$50',
      duration: '30 minutes',
      resultTime: '24-48 hours'
    },
    {
      name: 'Prostate-Specific Antigen (PSA)',
      description: 'The PSA test measures the level of prostate-specific antigen in your blood, helping screen for prostate problems.',
      price: '$60',
      duration: '30 minutes',
      resultTime: '24 hours'
    },
    {
      name: 'Vitamin D Test',
      description: 'This test measures the level of vitamin D in your blood, which is essential for bone health and immune function.',
      price: '$55',
      duration: '30 minutes',
      resultTime: '24-48 hours'
    },
    {
      name: 'Hepatitis B Surface Antigen Test',
      description: 'This test detects the presence of hepatitis B virus in your blood, helping diagnose hepatitis B infection.',
      price: '$65',
      duration: '30 minutes',
      resultTime: '24-48 hours'
    },
    {
      name: 'HIV Test',
      description: 'The HIV test detects the presence of HIV antibodies or antigens in your blood, helping diagnose HIV infection.',
      price: '$70',
      duration: '30 minutes',
      resultTime: '24-48 hours'
    },
    {
      name: 'Urinalysis',
      description: 'A urinalysis examines your urine for signs of disorders or diseases such as kidney disease or diabetes.',
      price: '$40',
      duration: '30 minutes',
      resultTime: '24 hours'
    }
  ];

  patientLabRecords = [
    {
      testName: 'Complete Blood Count (CBC)',
      testDate: '2024-08-20',
      result: 'Normal',
      comments: 'All parameters are within normal range.'
    },
    {
      testName: 'Basic Metabolic Panel (BMP)',
      testDate: '2024-08-15',
      result: 'Slightly High',
      comments: 'Elevated glucose level; further testing recommended.'
    },
    {
      testName: 'Lipid Panel',
      testDate: '2024-08-10',
      result: 'Normal',
      comments: 'Cholesterol levels are within normal range.'
    },
  ];

  constructor() { }

  ngOnInit(): void { }

}

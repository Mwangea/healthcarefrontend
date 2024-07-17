export interface doctorRegister{
  Username: string,
  Password: string,
  Email: string,
  Specialty: string
}

export interface LoginForm {
  Username: string;
  Password: string;
  role: 'admin' | 'doctor';
}

export interface patient {
  Pat_fname: string;
  Pat_lname: string;
  Pat_age: number;
  Gender: string;
  Pat_blood_group: string;
  Pat_phone: string;
  Pat_type: string;
  Pat_id: number;
}

export interface appointment {

  id:string;
  patientId: string;
  doctorId: string;
  appointmentDate: number;
  status: string;
  notes:string;
}

export interface doctor{
  id:string;
  Username: string;
  Email: string;
  Specialty: string
}

export interface medicine {
 ProductName: string;
 Type: string;
 PricePerPack:number;
 Stock: number;
 ExpiryDate: number;
 Manufacturer: string;
}

export interface medicalRecord{
  medicalRecordId: string;
  patientUsername: string;
  date: number;
  diagnosis: string;
  treatment: string;
  notes: string;
}


export interface labtest{
  id: string;
  LabPatientName: string;
  LabPatAilment : string;
  LabPatTests: string;
  LabPatResults: string;
  LabDateRec: string;
}



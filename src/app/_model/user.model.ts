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

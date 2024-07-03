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

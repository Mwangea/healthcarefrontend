import { faHome } from "@fortawesome/free-solid-svg-icons";

export const navBarData = [
  {
    routeLink: 'dashboard',
    icon: 'dashboard',
    label: 'Dashboard',
    role: ['Admin', 'Doctor']
  },
  {
    routeLink: 'patients',
    icon: 'people',
    label: 'Patients',
    role: ['Admin', 'Doctor']
  },
  {
    routeLink: 'appointments',
    icon: 'event',
    label: 'Appointments',
    role: ['Admin', 'Doctor']
  },
  {
    routeLink: 'doctors',
    icon: 'medical_services',
    label: 'Doctors',
    role: ['Admin']
  },

  {
    routeLink: 'medicine-inventory',
    icon: 'inventory',
    label: 'Medicine Inventory',
    role: ['Admin', 'Doctor']
  },{
    routeLink: 'medical-records',
    icon: 'assignment',
    label: 'Medical Record',
    role: ['Admin', 'Doctor']
  },
  {
    routeLink: 'invoice',
    icon: 'receipt',
    label: 'Invoice',
    role: ['Admin', 'Doctor'],
    marginBottom: '100px'
  },
  {
    routeLink: 'logout',
    icon: 'logout',
    label: 'Logout',
    role: ['Admin', 'Doctor'],
   // marginBottom: '100px'
  }
];

import { faHome } from "@fortawesome/free-solid-svg-icons";

export const navBarData = [
  {
    routeLink: 'dashboard',
    icon: faHome,
    label: 'Dashboard',
    role: ['Admin', 'Doctor']
  },
  {
    routeLink: 'doctors',
    icon: 'fa fa-user-md',
    label: 'Doctors',
    role: ['Admin']
  },
  {
    routeLink: 'patients',
    icon: 'fa fa-users',
    label: 'Patients',
    role: ['Admin', 'Doctor']
  },
  {
    routeLink: 'medicine-inventory',
    icon: 'fa fa-users',
    label: 'Medicine Inventory',
    role: ['Admin', 'Doctor']
  },{
    routeLink: 'medical-records',
    icon: 'fa fa-users',
    label: 'Medical Record',
    role: ['Admin', 'Doctor']
  },{
    routeLink: 'invoice',
    icon: 'fa fa-users',
    label: 'Invoice',
    role: ['Admin', 'Doctor']
  },
];

import { faHome } from "@fortawesome/free-solid-svg-icons";

export const navBarData = [
  {
    routeLink: 'dashboard',
    icon: 'dashboard',
    label: 'Dashboard',
    roles: ['Admin', 'Doctor']
  },
  {
    routeLink: 'patients',
    icon: 'people',
    label: 'Patients',
    roles: ['Admin', 'Doctor']
  },
  {
    routeLink: 'appointments',
    icon: 'event',
    label: 'Appointments',
    roles: ['Admin', 'Doctor']
  },
  {
    routeLink: 'doctors',
    icon: 'medical_services',
    label: 'Doctors',
    roles: ['Admin']
  },

  {
    routeLink: 'medicine-inventory',
    icon: 'inventory',
    label: 'Medicine Inventory',
    roles: ['Admin', 'Doctor']
  },{
    routeLink: 'medical-records',
    icon: 'assignment',
    label: 'Medical Record',
    roles: ['Admin', 'Doctor']
  },
  {
    routeLink: 'invoice',
    icon: 'receipt',
    label: 'Invoice',
    roles: ['Admin', 'Doctor'],
    //marginBottom: '100px'
  },
  {
    routeLink: 'settings',
    icon: 'settings',
    label: 'Settings',
    roles: ['Admin', 'Doctor'],
    marginBottom: '70px'
  },
 /*
{
  routeLink: 'logout',
  icon: 'exit_to_app',
  label: 'Logout',
  roles: ['Admin', 'Doctor'],
}
*/

];

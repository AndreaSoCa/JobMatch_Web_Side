import { Pages } from "../../types";

export const customerPages: Pages[] = [
  {
    name: 'Hire',
    path: '/customer/hire'
  },
  {
    name: 'Available Services',
    path: '/customer/available-services'
  },
  {
    name: 'Payments',
    path: '/customer/payments'
  }
];

export const workerPages: Pages[] = [
  {
    name: 'Active services',
    path: '/worker/active-services'
  },
  {
    name: 'Abilites',
    path: '/worker/abilities'
  },
  {
    name: 'Payments',
    path: '/worker/payments'
  }
];
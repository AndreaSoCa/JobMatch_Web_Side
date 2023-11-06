// REGISTER
export type ModelToRegister = {
  email: string;
  password: string;
  phone_number: string;
  name: string;
  last_name: string;
  address: string;
  typeOfUser: string;
};

// LOGIN
export type LoginType = {
  email: string;
  password: string;
};

// USER
export interface User {
  email: string;
  phone_number: string;
  password: string;
  address: string;
  user_name: string;
  user_last_name: string;
}

export interface TokenUser extends User {
  token: string;
}

// WORKER
export interface Worker {
  email: string;
  phone_number: string;
  password: string;
  worker_address: string;
  worker_name: string;
  worker_last_name: string;
}

export interface TokenWorker extends Worker {
  token: string;
}

// NAVBAR
export type NavBarProps = {
  userType: 'customer' | 'worker';
}

// PRINCIPAL SCREEN
export type CardPrincipal = {
  title: string;
  description: string;
  path_url: string;
  path_image: string;
}

export type Pages = {
  name: string;
  path: string;
}

//WORKER CARDS
export type WorkProps = {
  work_id: string;
  work_name: string;
  work_description: string;
  work_amount: number;
  path_image: string;
}
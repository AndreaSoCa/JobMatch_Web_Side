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
  worker_amount: number;
  work_image: string;
}

//JOB OFFERED
export type TJobOfferedCreate = {
  worker_email: string;
  worker_phone_number: string;
  cost_per_service: number;
  work_id: number;
}

// USER STORE
export type TLoginResponse = {
  token: string;
  user: TUserDataResponse;
} 

export type TUserDataResponse = {
  email: string;
  id: number | null;
  phone_number: string;
  last_name: string;
  name: string;
  address: string;
}

// WORK CREATE
export interface IWorkCreateData {
  work_name: string,
  work_description: string,
  worker_amount: number,
}

export interface IWorkWithId extends IWorkCreateData {
  work_id: number;
}

export type JobOfferedData = {
  cost_per_service: number;
  job_offered_id: number;
  signed: boolean;
  work_id: number;
  worker_email: string;
  worker_phone_number: string;
  work_name: string;
  work_description: string;
};

// WORKER EDIT PROFILE
export type TWorkerProfile = {
  worker_name: string;
  worker_last_name: string;
  profile_image: string;
  worker_address: string;
  identification_image: string;
  password: string;
  email: string;
  phone_number: string;
};

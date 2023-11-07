import CONSTANTS from "../Constants"
import { TWorkerProfile } from "../types"

interface Worker {
    email: string
    password: string
    phone_number: string
    worker_name: string
    worker_last_name: string
    worker_address: string
}

/**
 * @param worker: Worker
 */
export const registerWorker = async (worker: Worker) => {
    try {
        const response = await fetch(`${CONSTANTS.BASE_URL}${CONSTANTS.WORKER_REGISTER}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(worker),
        });
  
        if (!response.ok) {
            throw new Error('Error al realizar la solicitud POST');
          }
        console.log('Solicitud POST exitosa');
      } catch (error) {
        console.error('Error en la solicitud POST:', error);
        throw error;
      }
};

export const updateWorker = async (worker: TWorkerProfile) => {
  try {
    const response = await fetch(`${CONSTANTS.BASE_URL}${CONSTANTS.WORKER_EDIT}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(worker),
    });

    if (!response.ok) {
      throw new Error('Error al realizar la solicitud PUT');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error en la solicitud PUT:', error);
    throw error;
  }
};


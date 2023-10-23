import CONSTANTS from "../Constants"

interface Worker {
    email: string
    password: string
    phone_number: string
    worker_name: string
    worker_last_name: string
    worker_address: string
}

type Login = {
  email: string;
  password: string;
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

export const loginWorker = async (loginData: Login) => {
  try {
      const response = await fetch(`${CONSTANTS.BASE_URL}${CONSTANTS.WORKER_LOGIN}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
          throw new Error('Error al realizar la solicitud POST');
        }
        const data = await response.json();
        if (data.message == "invalid worker email or password."){
          throw new Error('Trabajador no válido');
        }
        console.log(data);
        return data;
    } catch (error) {
      console.error('Error en la solicitud POST:', error);
      throw error;
    }
};

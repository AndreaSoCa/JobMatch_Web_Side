import CONSTANTS from "../Constants"

interface User {
    email: string
    phone_number: string
    user_name: string
    password: string
    user_last_name: string
    address: string
}

type Login = {
  email: string;
  password: string;
}

/**
 * @param user: User
 */
export const registerUser = async (user: User) => {
    try {
        const response = await fetch(`${CONSTANTS.BASE_URL}${CONSTANTS.USER_REGISTER}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
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

export const loginUser = async (loginData: Login) => {
  try {
      const response = await fetch(`${CONSTANTS.BASE_URL}${CONSTANTS.USER_LOGIN}`, {
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
        if (data.message == "invalid user email or password."){
          throw new Error('Usuario no válido');
        }
        console.log(data);
        return data;
    } catch (error) {
      console.error('Error en la solicitud POST:', error);
      throw error;
    }
};
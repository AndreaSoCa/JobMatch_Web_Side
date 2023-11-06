import CONSTANTS from "../Constants";
import { LoginType } from "../types";

export const login = async (loginData: LoginType, typeRegister: "user" | "worker" | "") => {
  let url = "";
  if (typeRegister == "user") {
    url = `${CONSTANTS.BASE_URL}${CONSTANTS.USER_LOGIN}`
  } else if (typeRegister == "worker") {
    url = `${CONSTANTS.BASE_URL}${CONSTANTS.WORKER_LOGIN}`
  } 
  try {
      const response = await fetch(url, {
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
        if (data.message == "invalid email or password."){
          throw new Error('Usuario no válido');
        }
        console.log(data);
        return data;
    } catch (error) {
      console.error('Error en la solicitud POST:', error);
      throw error;
    }
};

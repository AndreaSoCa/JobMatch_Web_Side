import CONSTANTS from "../Constants";
import { TJobOfferedCreate } from "../types";

export const getJobOfferedByWorkerEmail = async (email: string) => {
  try {
    const response = await fetch(`${CONSTANTS.BASE_URL}${CONSTANTS.GET_JOB_OFFERED_BY_WORKER}/${email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return null;
    }
    return response.json();
  } catch (error) {
    console.error("Error en la solicitud GET:", error);
    return null;
  }
};

export const addJobOffered = async (jobOfferedData: TJobOfferedCreate) => {
  console.log('jobOfferedDa', jobOfferedData);
  try {
    const response = await fetch(`${CONSTANTS.BASE_URL}${CONSTANTS.ADD_JOB_OFFERED}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jobOfferedData),
    });
    
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('No se pudo agregar el trabajo ofrecido.');
    }
  } catch (error) {
    console.error('Error al agregar el trabajo ofrecido:', error);
    throw error;
  }
};

export const deleteJobOffered = async (jobOfferedId: number) => {
  try {
    const response = await fetch(`${CONSTANTS.BASE_URL}${CONSTANTS.DELETE_JOB_OFFERED}/${jobOfferedId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return null;
    }
    return true;
  } catch (error) {
    console.error("Error en la solicitud GET:", error);
    return false;
  }
};
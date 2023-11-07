import CONSTANTS from "../Constants";
import { IWorkCreateData, WorkProps } from "../types";

export const getWorks = async () => {
  try {
    const response = await fetch(`${CONSTANTS.BASE_URL}${CONSTANTS.WORK_ALL}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return null;
    }
    return response.json();
    console.log(response.json());
    console.log("Solicitud GET exitosa");
  } catch (error) {
    console.error("Error en la solicitud GET:", error);
    return null;
  }
};

export const getWorkById = async (workId: number | null) => {
  if (!workId) {
    throw new Error("workId null");
  }
  try {
    const response = await fetch(
      `${CONSTANTS.BASE_URL}${CONSTANTS.WORK_ID}/${workId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      return null;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en la solicitud GET:", error);
    return null;
  }
};

export const updateWork = async (workData: WorkProps) => {
  try {
    console.log(workData);
    const response = await fetch(
      `${CONSTANTS.BASE_URL}${CONSTANTS.UPDATE_WORK}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(workData),
      }
    );

    if (!response.ok) {
      return false;
    }

    console.log("Solicitud POST exitosa");
    return true;
  } catch (error) {
    console.error("Error en la solicitud POST:", error);
    return false;
  }
};

export const addWork = async (workData: IWorkCreateData) => {
  try {
    console.log(workData);
    const response = await fetch(`${CONSTANTS.BASE_URL}${CONSTANTS.CREATE_WORK}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(workData),
    });

    if (!response.ok) {
      return false;
    }

    const addedWork = await response.json();
    return addedWork;
  } catch (error) {
    console.error("Error en la solicitud POST:", error);
    return null;
  }
};

import CONSTANTS from "../Constants";

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


export const getWorkById = async (workId: string) => {
  try {
    const response = await fetch(`${CONSTANTS.BASE_URL}${CONSTANTS.WORK_ID}/${workId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return null;
    }
    const data = await response.json();
    console.log("Solicitud GET exitosa");
    return data;
  } catch (error) {
    console.error("Error en la solicitud GET:", error);
    return null;
  }
};
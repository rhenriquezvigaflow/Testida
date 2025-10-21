const URL_PLANTAS_BY_USER_AND_EMPRESA =
  "https://izqb2sb0sl.execute-api.us-east-1.amazonaws.com/default/plantas/get-plantas-by-user-and-empresa";
const URL_EVENTOS_ALARMAS =
  "https://izqb2sb0sl.execute-api.us-east-1.amazonaws.com/default/alarmas/get-eventos-alarmas-by-plantas";

const headers = {
  "Content-Type": "application/json",
  "X-Api-Key": process.env.REACT_APP_API_KEY
};

export async function getPlantasByUserAndEmpresa(idUsuario, idEmpresa) {
  try {
    const response = await fetch(URL_PLANTAS_BY_USER_AND_EMPRESA, {
      method: "POST",
      headers,
      body: JSON.stringify({ idUsuario, idEmpresa })
    });
    if (!response.ok) {
      return {
        status: "error",
        message: "Error al obtener plantas"
      };
    }
    const data = await response.json();

    if (data.length === 0) {
      return {
        status: "error",
        message: "No se encontraron plantas"
      };
    }

    return {
      status: "success",
      data: data,
      message: "Plantas obtenidas correctamente"
    };
  } catch (error) {
    return {
      status: "error",
      message: "Error al obtener plantas"
    };
  }
}

export async function getEventosAlarmasByPlantas(inPlantas, monthAndYear) {
  try {
    const response = await fetch(URL_EVENTOS_ALARMAS, {
      method: "POST",
      headers,
      body: JSON.stringify({ inPlantas, monthAndYear })
    });
    if (!response.ok) {
      return {
        status: "error",
        message: "Error al obtener eventos de alarmas"
      };
    }
    const data = await response.json();

    if (!data.result || data.result.length === 0) {
      return {
        status: "success",
        data: [],
        total: 0
      };
    }

    return {
      status: "success",
      data: data.result,
      total: data.result.length
    };
  } catch (error) {
    return {
      status: "error",
      message: "Error al obtener eventos de alarmas"
    };
  }
}

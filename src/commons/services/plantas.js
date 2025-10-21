const URL =
  "https://izqb2sb0sl.execute-api.us-east-1.amazonaws.com/default/usuarios/get-plantas-grouped-by-empresas";

export async function getPlantasByEmpresa() {
  const controller = new AbortController();

  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": process.env.REACT_APP_API_KEY
      }
    });

    if (!response.ok) {
      return {
        status: "error",
        data: null,
        message: "Ha ocurrido un error al obtener las plantas"
      };
    }

    const json = await response.json();

    return {
      status: "success",
      data: json,
      message: "Plantas obtenidas correctamente"
    };
  } catch (error) {
    return {
      status: "error",
      data: null,
      message: "Ha ocurrido un error al obtener las plantas"
    };
  }
}

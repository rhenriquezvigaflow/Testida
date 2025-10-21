let controller = null;

export const getPlantasEstados = async ({ idPlanta, idEstado }) => {
  if (controller) {
    controller.abort();
  }

  controller = new AbortController();
  const { signal } = controller;

  try {
    const response = await fetch(
      "https://izqb2sb0sl.execute-api.us-east-1.amazonaws.com/default/estados/plantas-estados",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": process.env.REACT_APP_API_KEY
        },
        body: JSON.stringify({ idPlanta, idEstado }),
        signal
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Error desconocido");
    }

    return data;
  } catch (err) {
    if (err.name === "AbortError") {
      return null;
    }
    throw new Error(err.message);
  } finally {
    controller = null;
  }
};

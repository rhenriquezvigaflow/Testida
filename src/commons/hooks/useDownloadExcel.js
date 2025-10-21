import { useState } from "react";
import { exportExcel } from "../lib/excel";

export function useDownloadExcel() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const download = async ({ apiUrl, requestParams }) => {
    setLoading(true);
    setError(null); // Reiniciar el error antes de hacer la llamada

    try {
      // Realizar la solicitud a la API utilizando fetch
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": process.env.REACT_APP_API_KEY
        },
        body: JSON.stringify(requestParams)
      });

      if (!response.ok) {
        setError("Error al realizar la solicitud al servidor.");
        return;
      }

      const data = await response.json();

      // Validar si los datos no están vacíos o son válidos
      if (!data.statusCode === 200 || !data.body) {
        setError("Los datos recibidos no son válidos o están vacíos.");
        return;
      }

      const calculos = JSON.parse(data.body);

      // Utilizar el helper para generar el archivo Excel
      if (calculos) exportExcel(calculos, "calculos-diarios");
      else setError("No hay datos para exportar.");
    } catch (error) {
      setError(`Error al descargar el archivo Excel: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return {
    error,
    loading,
    download
  };
}

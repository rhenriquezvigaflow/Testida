import { useCallback } from "react";

const URL =
  "https://izqb2sb0sl.execute-api.us-east-1.amazonaws.com/default/usuarios/get_id_plantas_by_client_user";

export function useGetIdPlantasByClientUser() {
  const getIdPlantasByClientUser = useCallback(async (idUser) => {
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": process.env.REACT_APP_API_KEY
        },
        body: JSON.stringify({ idUsuario: idUser })
      });

      const json = await response.json();

      return json;
    } catch (error) {
      console.error(error);
    }
  }, []);

  return { getIdPlantasByClientUser };
}

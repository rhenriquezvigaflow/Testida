import { useEffect, useState } from "react";
import { getPlantasByUserAndEmpresa } from "../services/api";

export function useGetPlantas(idUsuario, idEmpresa) {
  const [plantas, setPlantas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);

    const getPlantas = async () => {
      setLoading(true);
      const result = await getPlantasByUserAndEmpresa(idUsuario, idEmpresa);

      if (result.status === "success") {
        setPlantas(result.data);
      } else {
        setError(result.message);
      }

      setLoading(false);
    };

    getPlantas();
  }, [idUsuario, idEmpresa]);

  return {
    plantas,
    loadingPlantas: loading,
    errorPlantas: error
  };
}

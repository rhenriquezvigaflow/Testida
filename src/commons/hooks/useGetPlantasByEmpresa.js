import { useEffect, useState } from "react";
import { getPlantasByEmpresa } from "../services/plantas";

export function useGetPlantasByEmpresa() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      const { status, data, message } = await getPlantasByEmpresa();

      if (status === "success") {
        setData(data);
        setError(null);
      }

      if (status === "error") {
        setData([]);
        setError(message);
      }

      setLoading(false);
    }

    fetchData();
  }, []);

  return {
    empresas: data,
    loading,
    error
  };
}

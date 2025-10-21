import { useEffect, useState } from "react";
import { getEventosAlarmasByPlantas } from "../services/api";

export function useGetEventosAlarmas(inPlantas, monthAndYear) {
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getEventosAlarmas = async () => {
      if (!inPlantas) {
        setEventos([]);
        return;
      }

      setLoading(true);
      setError(null);

      const result = await getEventosAlarmasByPlantas(inPlantas, monthAndYear);

      if (result.status === "success") {
        setEventos(result.data);
      } else {
        setError(result.message);
        setEventos([]);
      }
      setLoading(false);
    };

    getEventosAlarmas();
  }, [inPlantas, monthAndYear]);

  return {
    eventosAlarmas: eventos,
    loadingEventos: loading,
    errorEventos: error
  };
}

import { useCallback, useState } from "react";
import { getPlcRecordsByColumn } from "../services/getPlcRecordsByColumn";

export function useGetPlcRecordsByColumn(yMin, yMax) {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPlcRecordsByColumn = useCallback(
    async ({
      idPlanta,
      column,
      fechaInicio,
      fechaFin,
      recordsAmount = 100
    }) => {
      setLoading(true);
      setError(null);
      setRecords([]);

      try {
        const data = await getPlcRecordsByColumn({
          idPlanta,
          column,
          fechaInicio,
          fechaFin,
          recordsAmount
        });
        setRecords(data);
      } catch (error) {
        setError(error);

        setRecords([]);
      } finally {
        setLoading(false);
      }
    },
    [yMin, yMax]
  );

  return { records, loading, error, fetchPlcRecordsByColumn };
}

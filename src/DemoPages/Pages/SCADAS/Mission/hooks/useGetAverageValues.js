import { useState } from "react";
import { URL_GET_AVG_VALUES as key } from "../lib/constants";
import { simpleAverageFetcher } from "../lib/fetcher";

export function useGetAverageValues() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData(idPlanta, startDate, endDate) {
    setLoading(true);
    try {
      const data = await simpleAverageFetcher(
        key,
        idPlanta,
        startDate,
        endDate
      );
      setData({
        averageValues: data.averageValues,
        limits: data.limits
      });
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return {
    data,
    loading,
    error,
    fetchData
  };
}

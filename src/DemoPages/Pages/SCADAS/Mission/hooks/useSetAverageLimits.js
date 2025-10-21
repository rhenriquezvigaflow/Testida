import { useState } from "react";
import { URL_SET_AVG_LIMITS as key } from "../lib/constants";
import { limitsFetcher } from "../lib/fetcher";

export function useSetAverageLimits() {
  const [message, setMessage] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function updateLimits(idPlanta, limits) {
    setLoading(true);
    try {
      const data = await limitsFetcher(key, idPlanta, limits);
      setMessage({ message: data.message });
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return {
    message,
    loadingLimits: loading,
    error,
    updateLimits
  };
}

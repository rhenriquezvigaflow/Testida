import useSWR from "swr";
import { URL_GET_PLANTAS_VISIBLES, fetcherPlantas } from "../lib/utils";

export function usePlantasVisibles() {
  const { data, error, isLoading } = useSWR(
    URL_GET_PLANTAS_VISIBLES,
    fetcherPlantas,
    {
      refreshInterval: 0
    }
  );

  return {
    plantas: data || [],
    loadingPlantas: isLoading,
    errorPlantas: error
  };
}

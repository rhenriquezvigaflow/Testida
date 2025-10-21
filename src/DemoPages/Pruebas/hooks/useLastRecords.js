import useSWR from "swr";
import { URL_GET_LAST_RECORDS, fetcher } from "../lib/utils";

export function useLastRecords({ id }) {
  // Si no hay id, no se realiza la solicitud
  const shouldFetch = id !== null && id !== undefined && id !== "";

  const { data, error, isLoading } = useSWR(
    shouldFetch ? [URL_GET_LAST_RECORDS, id] : null,
    shouldFetch ? ([url, id]) => fetcher({ url, id }) : null
  );

  return {
    records: shouldFetch && data ? data : [],
    loading: shouldFetch && isLoading,
    error
  };
}

const URL_GET_LAST_RECORDS =
  "https://izqb2sb0sl.execute-api.us-east-1.amazonaws.com/default/records/get-latest-records-by-id-planta";
const URL_GET_PLANTAS_VISIBLES =
  "https://izqb2sb0sl.execute-api.us-east-1.amazonaws.com/default/records/get-plantas-visibles";

const fetcher = ({ url, id }) =>
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": process.env.REACT_APP_API_KEY
    },
    body: JSON.stringify({ id })
  }).then((res) => {
    if (!res.ok) {
      throw Error("Error al obtener los datos");
    }
    return res.json();
  });

const fetcherPlantas = (url) =>
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": process.env.REACT_APP_API_KEY
    }
  }).then((res) => {
    if (!res.ok) {
      throw Error("Error al obtener los datos");
    }
    return res.json();
  });

export {
  URL_GET_LAST_RECORDS,
  URL_GET_PLANTAS_VISIBLES,
  fetcher,
  fetcherPlantas
};

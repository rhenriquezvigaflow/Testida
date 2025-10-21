import { getData, saveData } from "./indexed-db";
import { formatDate } from "./utils";

// buscar datos faltantes en el cache
function findMissingRanges(startDate, endDate, cachedRanges) {
  const missingRanges = [];
  let currentStart = new Date(startDate);

  cachedRanges.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

  for (const range of cachedRanges) {
    if (new Date(range.startDate) > currentStart) {
      missingRanges.push({
        startDate: currentStart,
        endDate: new Date(new Date(range.startDate).getTime() - 1)
      });
    }

    currentStart =
      new Date(range.endDate).getTime() > currentStart
        ? new Date(range.endDate)
        : currentStart;
  }

  if (currentStart < new Date(endDate)) {
    missingRanges.push({ start: currentStart, end: new Date(endDate) });
  }

  return missingRanges;
}

// fetcher personalizado para integrar con IndexedDB y detectar datos faltantes en los rangos de fechas
export async function averageFetcher(url, startDate, endDate) {
  const cachedData = await getData(startDate, endDate);

  if (cachedData.length > 0) {
    const missingRanges = findMissingRanges(startDate, endDate, cachedData);

    // Si no faltan rangos, simplemente devolvemos los datos almacenados
    if (missingRanges.length === 0) {
      return cachedData.flatMap((entry) => entry.data);
    }

    let fetchedData = [];

    // Si faltan rangos, hacemos fetch solo de los rangos faltantes
    for (const range of missingRanges) {
      const res = await fetch(`${url}?`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          startDate: formatDate(range.startDate),
          endDate: formatDate(range.endDate)
        })
      });
      const newData = await res.json();

      fetchedData = fetchedData.concat(newData);

      // Guardamos los nuevos datos obtenidos en IndexedDB
      await saveData(
        `${formatDate(range.startDate)}_${formatDate(range.endDate)}`,
        newData,
        range.startDate,
        range.endDate
      );
    }

    // Combinamos los datos almacenados con los recién obtenidos
    const combinedData = cachedData
      .flatMap((entry) => entry.data)
      .concat(fetchedData);

    return combinedData;
  }

  // Si no había datos en cache, hacemos el fetch completo
  const controller = new AbortController();
  const { signal } = controller;

  try {
    const res = await fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ startDate, endDate }),
      signal
    });

    if (!res.ok) {
      throw new Error("Error al obtener los datos, por favor intenta de nuevo");
    }

    const data = await res.json();

    // Guardamos los datos obtenidos en IndexedDB
    await saveData(`${startDate}_${endDate}`, data, startDate, endDate);

    return data;
  } catch (error) {
    throw new Error("Error al obtener los datos, por favor intenta de nuevo");
  }
}

export async function simpleAverageFetcher(url, idPlanta, startDate, endDate) {
  const controller = new AbortController();
  const { signal } = controller;

  try {
    const res = await fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": process.env.REACT_APP_API_KEY
      },
      body: JSON.stringify({ idPlanta, startDate, endDate }),
      signal
    });

    if (!res.ok) {
      throw new Error("Error al obtener los datos, por favor intenta de nuevo");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error("Error al obtener los datos, por favor intenta de nuevo");
  }
}

export async function limitsFetcher(url, idPlanta, limits) {
  const controller = new AbortController();
  const { signal } = controller;

  try {
    const res = await fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": process.env.REACT_APP_API_KEY
      },
      body: JSON.stringify({ idPlanta, limits }),
      signal
    });

    if (!res.ok) {
      throw new Error("Error al obtener los datos, por favor intenta de nuevo");
    }

    const message = await res.json();

    return message;
  } catch (error) {
    throw new Error("Error al obtener los datos, por favor intenta de nuevo");
  }
}

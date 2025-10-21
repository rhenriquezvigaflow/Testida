import { openDB } from "idb";

const dbPromise = openDB("swr-avg-cache", 1, {
  upgrade(db) {
    db.createObjectStore("avg-cache", { keyPath: "dateRange" });
  }
});

// guardar datos en IndexedDB
export async function saveData(key, data, startDate, endDate) {
  const db = await dbPromise;

  // añade 00:00:00 a startDate y 23:59:59 a endDate antes de guardar
  const formatedStartDate = new Date(startDate);
  formatedStartDate.setHours(0, 0, 0, 0);
  const formatedEndDate = new Date(endDate);
  formatedEndDate.setHours(23, 59, 59, 999);

  const cachedData = {
    dateRange: key,
    data,
    formatedStartDate,
    formatedEndDate
  };

  await db.put("avg-cache", cachedData);
}

// obtener datos de IndexedDB
export async function getData(startDate, endDate) {
  const db = await dbPromise;
  const cachedData = await db.getAll("avg-cache");

  function withTime(date) {
    return new Date(date).getTime();
  }

  return cachedData
    .filter(
      (entry) => !(entry.startDate > endDate || entry.endDate < startDate)
    )
    .map((entry) => {
      // Ajustamos los rangos si es necesario
      const adjustedStart =
        withTime(entry.startDate) < withTime(startDate)
          ? startDate
          : entry.startDate;
      const adjustedEnd =
        withTime(entry.endDate) > withTime(endDate) ? endDate : entry.endDate;

      return {
        ...entry,
        startDate: adjustedStart,
        endDate: adjustedEnd
      };
    });
}

const URL =
  "https://izqb2sb0sl.execute-api.us-east-1.amazonaws.com/default/records/get-records-by-column";

async function getPlcRecordsByColumn({
  idPlanta,
  column,
  fechaInicio,
  fechaFin,
  recordsAmount = 100
}) {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": process.env.REACT_APP_API_KEY
      },
      body: JSON.stringify({
        idPlanta,
        column,
        fechaInicio,
        fechaFin,
        recordsAmount
      })
    });

    if (!response.ok) {
      throw new Error("Failed to fetch records");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching records:", error);
    throw error;
  }
}

export { getPlcRecordsByColumn };

export function addDecimal(num) {
  return (~~num).toLocaleString("es-CL");
}

export function formatDateToISO(date) {
  return date.toISOString().split("T")[0];
}

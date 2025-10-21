function formatearFecha(fecha) {
  const auxFecha = new Date(fecha);
  const year =
    auxFecha.getUTCFullYear() < 2099
      ? String(auxFecha.getUTCFullYear()).substring(2, 4)
      : String(auxFecha.getUTCFullYear()).substring(1, 4);
  const month =
    auxFecha.getMonth() + 1 < 10
      ? `0${String(auxFecha.getMonth() + 1)}`
      : String(auxFecha.getMonth() + 1);
  const day =
    auxFecha.getDate() < 10
      ? `0${String(auxFecha.getDate())}`
      : String(auxFecha.getDate());
  const hour =
    auxFecha.getHours() < 10
      ? `0${String(auxFecha.getHours())}`
      : String(auxFecha.getHours());
  const minute =
    auxFecha.getMinutes() < 10
      ? `0${String(auxFecha.getMinutes())}`
      : String(auxFecha.getMinutes());
  return `${hour}:${minute} ${day}/${month}/${year}`;
}

export default formatearFecha;

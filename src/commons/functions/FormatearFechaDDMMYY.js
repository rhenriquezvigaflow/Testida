function formatearFechaDDMMYY(fecha) {
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
  return `${day}/${month}/${year}`;
}

export default formatearFechaDDMMYY;

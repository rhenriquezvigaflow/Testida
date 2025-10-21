import { utils, writeFile } from "xlsx";

export function exportExcel(data, fileName) {
  if (!data || data.length === 0) {
    console.error("No hay datos para exportar.");
    return;
  }

  // Crear un libro de trabajo (workbook) y una hoja (worksheet)
  const worksheet = utils.json_to_sheet(data);
  worksheet["!cols"] = Array.from(
    { length: Object.keys(data[0]).length },
    () => ({ wch: 21 })
  );
  const workbook = utils.book_new();

  // Añadir la hoja al libro
  utils.book_append_sheet(workbook, worksheet, "Calculos Diarios");

  // Generar y descargar el archivo Excel
  writeFile(workbook, `${fileName}.xlsx`);
}

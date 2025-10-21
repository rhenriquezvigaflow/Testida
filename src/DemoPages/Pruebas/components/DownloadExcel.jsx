import React from "react";
import { utils, writeFile } from "xlsx";
import { DownloadIcon } from "../../../commons/components/DownloadIcon";

export function DownloadExcel({ records, classes }) {
  const handleDownload = () => {
    if (!records || records.length === 0) return;

    const idPlanta = records[0].id_planta;
    const recordsWithoutId = records.map(({ id, ...record }) => record);

    // Crear un libro de trabajo (workbook) y una hoja (worksheet)
    const worksheet = utils.json_to_sheet(recordsWithoutId);
    const workbook = utils.book_new();

    utils.book_append_sheet(workbook, worksheet, "Records");

    // Generar y descargar el archivo Excel
    writeFile(workbook, `registros-planta-${idPlanta}.xlsx`);
  };

  return (
    <button
      className={classes}
      style={{
        display: "flex",
        alignItems: "center",
        gap: ".5rem",
        paddingInline: "1rem",
        paddingBlock: "2.75px",
        alignSelf: "flex-end"
      }}
      color="#3474E0"
      variant="outlined"
      onClick={handleDownload}
      disabled={!records || records.length === 0}>
      Descargar Excel
      <DownloadIcon />
    </button>
  );
}

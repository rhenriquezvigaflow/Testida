import React from "react";
import { utils, writeFile } from "xlsx";
import { DownloadIcon } from "./DownloadIcon";

export function DownloadExcel({ data, fileName, classes }) {
  const handleDownload = () => {
    if (!data || data.length === 0) return;

    // Crear un libro de trabajo (workbook) y una hoja (worksheet)
    const worksheet = utils.json_to_sheet(data);
    const workbook = utils.book_new();

    utils.book_append_sheet(workbook, worksheet, "Promedios");

    // Generar y descargar el archivo Excel
    writeFile(workbook, `${fileName}.xlsx`);
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
      disabled={!data || data.length === 0}>
      Descargar Excel
      <DownloadIcon />
    </button>
  );
}

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import React, { useContext, useMemo, useState } from "react";
import DatePicker from "react-widgets/DatePicker";
import UseContext from "../../../Layout/AppMain/UserContext";
import { useGetEventosAlarmas } from "./hooks/useGetEventosAlarmas";
import { useGetPlantas } from "./hooks/useGetPlantas";
import "react-widgets/styles.css";
import { Box, Button, ButtonGroup, InputBase, styled } from "@material-ui/core";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from "@tanstack/react-table";

import "./table.css";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import * as XLSX from "xlsx";
import { CheckIcon, HourglassIcon, XIcon } from "./icons";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3)
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  }
}));

// Columnas para la tabla - ajustadas a la respuesta real de la API
const columns = [
  {
    id: "fecha_registro",
    accessorKey: "fecha_registro",
    header: "Fecha de Registro",
    cell: ({ row }) => {
      const fecha = row.original.fecha_registro;
      if (!fecha) return "";
      try {
        const date = new Date(fecha);
        return new Intl.DateTimeFormat("es-ES", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit"
        }).format(date);
      } catch {
        return fecha;
      }
    }
  },
  {
    id: "id_planta",
    accessorKey: "id_planta",
    header: "Planta",
    cell: ({ row, table }) => {
      const plantas = table.options.meta && table.options.meta.plantas;
      if (!plantas) return row.original.id_planta;

      const planta = plantas.find(
        (p) => p.id_planta === row.original.id_planta
      );
      return planta ? planta.nombre_planta : row.original.id_planta;
    }
  },
  {
    id: "descripcion",
    accessorKey: "descripcion",
    header: "Descripcion"
  },
  {
    id: "estado_alarma",
    accessorKey: "estado_alarma",
    header: "Estado de Alarma",
    cell: ({ row }) => {
      const estado = (row.original.estado_alarma || "").toLowerCase();
      let color = "#e0e0e0";
      let bg = "#f5f5f5";
      let icon = null;
      let texto = "";
      if (estado === "mitigada") {
        color = "#219653";
        bg = "#d4f5df";
        icon = (
          <CheckIcon
            style={{
              color: color,
              marginRight: 6,
              fontSize: 16,
              display: "flex",
              alignItems: "center"
            }}
          />
        );
        texto = "Mitigada";
      } else if (estado === "reportada") {
        color = "#b36b00";
        bg = "#fff3cd";
        icon = (
          <XIcon
            style={{
              color: color,
              marginRight: 6,
              fontSize: 16,
              display: "flex",
              alignItems: "center"
            }}
          />
        );
        texto = "Reportada";
      } else if (estado === "procesando") {
        color = "#2f80ed";
        bg = "#e3f0ff";
        icon = (
          <HourglassIcon
            style={{
              color: color,
              marginRight: 6,
              fontSize: 16,
              display: "flex",
              alignItems: "center"
            }}
          />
        );
        texto = "Procesando";
      } else {
        texto = row.original.estado_alarma || "-";
      }
      return (
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20,
            border: `2px solid ${color}`,
            background: bg,
            color: color,
            fontWeight: 700,
            padding: "2px 16px",
            fontSize: 14,
            minWidth: 120,
            textAlign: "center"
          }}>
          {icon}
          <span style={{ width: "100%", textAlign: "center" }}>{texto}</span>
        </span>
      );
    }
  }
];

export function MonitoreoAlarmas() {
  const user = useContext(UseContext);
  const { id_user: idUsuario, id_empresa: idEmpresa } = user;

  const [selectedPlanta, setSelectedPlanta] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { plantas, loadingPlantas } = useGetPlantas(idUsuario, idEmpresa);

  const monthAndYear = selectedDate
    ? `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, "0")}`
    : null;

  const inPlantas = useMemo(() => {
    if (!selectedPlanta) return null;
    if (selectedPlanta === "todas") return plantas.map((p) => p.id_planta);
    return [selectedPlanta];
  }, [selectedPlanta, plantas]);

  const showTodasOption =
    idEmpresa === 333 || (idEmpresa !== 0 && idEmpresa !== 1);

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10
  });

  const { eventosAlarmas, loadingEventos, errorEventos } = useGetEventosAlarmas(
    inPlantas,
    monthAndYear
  );

  const [sorting, setSorting] = useState([]);

  const table = useReactTable({
    data: eventosAlarmas || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    state: {
      pagination,
      sorting
    },
    meta: {
      plantas
    }
  });

  function handleExportExcel() {
    if (!eventosAlarmas || eventosAlarmas.length === 0) return;
    // Mapear los datos para mostrar nombre de planta y formatear headers
    const plantaMap = {};
    (plantas || []).forEach((p) => {
      plantaMap[p.id_planta] = p.nombre_planta;
    });
    const dataExport = eventosAlarmas.map((ev) => ({
      "Planta": plantaMap[ev.id_planta] || ev.id_planta,
      "Descripción": ev.descripcion,
      "Fecha de Registro": ev.fecha_registro,
      "Estado de Alarma": ev.estado_alarma
    }));
    // Crear hoja y ajustar ancho de columnas
    const worksheet = XLSX.utils.json_to_sheet(dataExport);
    worksheet["!cols"] = [
      { wch: 24 }, // Planta
      { wch: 30 }, // Descripción
      { wch: 22 }, // Fecha de Registro
      { wch: 20 } // Estado de Alarma
    ];
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "EventosAlarmas");
    XLSX.writeFile(workbook, "eventos_alarmas.xlsx");
  }

  return (
    <section style={{ padding: 24 }}>
      <h1
        style={{ color: "#303D48" }}
        className="card-header-title font-size-lg font-weight-bold text-uppercase">
        Monitoreo de Alarmas
      </h1>
      <div>
        <Breadcrumb className="Breadcrumb">
          <BreadcrumbItem>IdA</BreadcrumbItem>
          <BreadcrumbItem>Alarmas</BreadcrumbItem>
          <BreadcrumbItem active>Monitoreo</BreadcrumbItem>
        </Breadcrumb>
      </div>

      {/* Sección de filtros principales */}
      <div
        style={{
          display: "flex",
          gap: 16,
          alignItems: "flex-end",
          marginBottom: 24
        }}>
        <FormControl style={{ minWidth: 200 }}>
          <InputLabel shrink>Planta</InputLabel>
          <Select
            value={selectedPlanta}
            onChange={(e) => setSelectedPlanta(e.target.value)}
            input={<BootstrapInput />}
            disabled={loadingPlantas}>
            <MenuItem value="">
              <em>Seleccione una planta</em>
            </MenuItem>
            {showTodasOption && (
              <MenuItem value="todas">Todas las plantas</MenuItem>
            )}
            {plantas.map((planta) => (
              <MenuItem
                key={planta.id_planta}
                value={planta.id_planta}>
                {planta.nombre_planta}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <DatePicker
          containerClassName="date-picker-widg"
          value={selectedDate}
          onChange={setSelectedDate}
          calendarProps={{
            views: ["year", "decade", "century"],
            min: new Date(2023, 0, 1),
            max: new Date()
          }}
          valueFormat={{ month: "numeric", year: "numeric" }}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ minWidth: 180, height: 42.5 }}
          onClick={handleExportExcel}
          disabled={!eventosAlarmas || eventosAlarmas.length === 0}>
          Descargar Excel
        </Button>
      </div>

      <section className="table-container">
        <table className="custom-table">
          <thead className="custom-table-header">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                className="custom-table-header-row"
                key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    className="custom-table-header-cell"
                    key={header.id}
                    style={{ fontWeight: "bolder" }}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="custom-table-body">
            {table.getRowModel().rows.length > 0 ? (
              table.getRowModel().rows.map((row) => (
                <tr
                  className="custom-table-row"
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <td
                      className="custom-table-cell"
                      key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : loadingEventos ? (
              <tr className="custom-table-row">
                <td
                  className="custom-table-cell"
                  colSpan={columns.length}>
                  Cargando...
                </td>
              </tr>
            ) : errorEventos ? (
              <tr className="custom-table-row">
                <td
                  className="custom-table-cell"
                  colSpan={columns.length}>
                  Error al obtener los registros
                </td>
              </tr>
            ) : (
              <tr className="custom-table-row">
                <td
                  className="custom-table-cell"
                  colSpan={columns.length}>
                  Elige una planta para ver sus registros
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>

      {/* Sección de paginación */}
      <div
        style={{
          paddingBlock: "3px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
        <FormControl
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px"
          }}>
          <span>Mostrar</span>
          <Select
            input={<BootstrapInput />}
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}>
            {[10, 20, 30, 50].map((size) => (
              <MenuItem
                key={size}
                value={size}>
                {size}
              </MenuItem>
            ))}
          </Select>
          <span> por página</span>
        </FormControl>

        <Box style={{ marginTop: "5px" }}>
          <ButtonGroup>
            <Button
              onClick={() => table.firstPage()}
              disabled={!table.getCanPreviousPage()}>
              {"<<"}
            </Button>
            <Button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}>
              {"<"}
            </Button>
            <Button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}>
              {">"}
            </Button>
            <Button
              onClick={() => table.lastPage()}
              disabled={!table.getCanNextPage()}>
              {">>"}
            </Button>
          </ButtonGroup>
          <p
            variant="body2"
            style={{ marginInline: "auto", width: "fit-content" }}>
            Página {table.getState().pagination.pageIndex + 1} de{" "}
            {table.getPageCount()}
          </p>
        </Box>
      </div>
    </section>
  );
}

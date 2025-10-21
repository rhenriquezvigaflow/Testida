import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  makeStyles
} from "@material-ui/core";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from "@tanstack/react-table";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "reactstrap";
import { useLastRecords } from "../hooks/useLastRecords";
import { usePlantasVisibles } from "../hooks/usePlantasVisibles";
import { columns } from "../lib/table/columns";
import { DownloadExcel } from "./DownloadExcel";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    minHeight: "100dvh"
  },
  pagination: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "-10px"
  },
  buttonsPag: {
    display: "flex",
    gap: ".5rem"
  },
  control: {
    display: "flex",
    justifyContent: "space-between",
    gap: "1rem",
    alignItems: "center",
    padding: "1rem",
    backgroundColor: "white",
    borderRadius: "5px",
    boxShadow:
      "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)"
  },
  table: {
    minWidth: 650,
    width: "100%"
  },
  td: {
    padding: "6px 16px",
    whiteSpace: "nowrap",
    textAlign: "center"
  },
  plantForm: {
    width: "fit-content",
    display: "grid",
    gridTemplateRows: "auto auto",
    gap: "3px"
  },
  secondRow: {
    gridRowStart: 2
  },
  select: {
    padding: "3px",
    borderRadius: "3px",
    border: "0.5px solid #A8A8A8",
    "&:focus": {
      outline: "0.5px solid #3474E0"
    }
  },
  button: {
    paddingInline: "1.7rem",
    borderRadius: "3px",
    backgroundColor: "#3474E0",
    color: "white",
    border: "none",
    transition: "background-color 150ms",
    "&:hover": {
      backgroundColor: "#1A4C8C"
    },
    "&:active": {
      backgroundColor: "#1A4C8C"
    },
    "&:disabled": {
      cursor: "not-allowed",
      opacity: "0.5"
    }
  }
});

export default function Registros() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 15
  });
  const [columnVisibility, setColumnVisibility] = useState({});
  const [sorting, setSorting] = useState([]);
  const [id, setId] = useState(null);
  const { records, loading, error } = useLastRecords({ id });
  const { plantas, loadingPlantas, errorPlantas } = usePlantasVisibles();
  const { register, handleSubmit } = useForm();
  const classes = useStyles();

  const onSubmitId = (data) => setId(data.id);

  const table = useReactTable({
    data: records || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    state: {
      pagination,
      sorting,
      columnVisibility
    }
  });

  return (
    <section className={classes.root}>
      <h1
        style={{
          fontSize: "1.1rem",
          color: "#303d48",
          fontWeight: 700
        }}>
        Registros
      </h1>
      <section className={classes.control}>
        <form
          onSubmit={handleSubmit(onSubmitId)}
          className={classes.plantForm}>
          <label
            htmlFor="id"
            style={{ margin: 0 }}>
            Planta
          </label>
          <select
            name="id"
            {...register("id")}
            disabled={loadingPlantas}
            className={`${classes.secondRow} ${classes.select}`}>
            {plantas.length > 0 ? (
              plantas.map((planta) => (
                <option
                  key={planta.id}
                  value={planta.id}>
                  {planta.nombre}
                </option>
              ))
            ) : loadingPlantas ? (
              <option
                value=""
                disabled>
                Cargando...
              </option>
            ) : errorPlantas ? (
              <option
                value=""
                disabled>
                Error al obtener las plantas
              </option>
            ) : (
              <option
                value=""
                disabled>
                No hay plantas disponibles
              </option>
            )}
          </select>
          <button
            disabled={loading}
            type="submit"
            className={`${classes.secondRow} ${classes.button}`}>
            Buscar
          </button>
        </form>
        <DownloadExcel
          records={records}
          classes={classes.button}
        />
      </section>
      <section className={classes.pagination}>
        {/* muestra el numero de la página actual y el total de páginas */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: ".5rem"
          }}>
          Página{" "}
          <strong>
            {pagination.pageIndex + 1} de {table.getPageCount()}
          </strong>
        </div>
        <section className={classes.buttonsPag}>
          <Button
            variant="info"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}>
            Anterior
          </Button>
          <Button
            variant="info"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}>
            Siguiente
          </Button>
        </section>
      </section>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="records table">
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableCell
                    key={header.id}
                    style={{ fontWeight: "bolder" }}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.length > 0 ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      className={classes.td}
                      key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : loading ? (
              <TableRow>
                <TableCell colSpan={columns.length}>Cargando...</TableCell>
              </TableRow>
            ) : error ? (
              <TableRow>
                <TableCell colSpan={columns.length}>
                  Error al obtener los registros
                </TableCell>
              </TableRow>
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length}>
                  Elige una planta para ver sus registros
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
}

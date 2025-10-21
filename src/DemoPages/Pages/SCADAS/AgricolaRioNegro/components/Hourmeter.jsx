import { Grid } from "@material-ui/core";
import React from "react";
import DatePicker2 from "react-widgets/DatePicker";
import { Button } from "reactstrap";
import Loader from "../../../../../commons/components/Loader";

export default function Hourmeter({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  onClickBuscarDatos,
  exportarDatosScada,
  loadingExport
}) {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-end">
      <Grid item>
        <div className="date-range font-size-md">
          <div className="date-text font-weight-bold">Fecha Inicio</div>

          <DatePicker2
            value={startDate}
            onChange={(cambio) => {
              setStartDate(cambio);
            }}
            valueFormat={{ month: "numeric", year: "numeric", day: "numeric" }}
            calendarProps={{
              min: new Date("2022-09-01 00:00:00"),
              max: new Date(),
              views: ["month"]
            }}
            messages={{
              dateButton: "Seleccionar fecha",
              moveBack: "",
              moveForward: "",
              moveToday: "Hoy"
            }}
          />
        </div>
        <div className="date-range font-size-md">
          <div className="date-text font-weight-bold">Fecha Fin</div>

          <DatePicker2
            value={endDate}
            onChange={(cambio) => {
              const fechaHoy = new Date();
              if (
                cambio.toLocaleDateString("en-US") !==
                fechaHoy.toLocaleDateString("en-US")
              ) {
                cambio.setHours(23);
                cambio.setMinutes(59);
                cambio.setSeconds(59);
              } else {
                cambio.setHours(fechaHoy.getHours());
                cambio.setMinutes(fechaHoy.getMinutes());
                cambio.setSeconds(fechaHoy.getSeconds());
              }
              setEndDate(cambio);
            }}
            valueFormat={{ month: "numeric", year: "numeric", day: "numeric" }}
            calendarProps={{
              min: new Date(2020, 2, 1),
              max: new Date(),
              views: ["month"]
            }}
            messages={{
              dateButton: "Seleccionar fecha",
              moveBack: "",
              moveForward: "",
              moveToday: "Hoy"
            }}
          />
        </div>
      </Grid>

      <Grid item>
        <div className="titles">
          <Button
            onClick={() => {
              onClickBuscarDatos();
            }}
            style={{ marginBottom: "4px" }}
            color="info">
            Buscar datos
          </Button>
        </div>
      </Grid>
      <Grid item>
        <div className="titles">
          <Button
            onClick={() => {
              if (loadingExport) return;
              exportarDatosScada();
            }}
            style={{
              marginBottom: "4px",
              cursor: loadingExport ? "not-allowed" : "pointer"
            }}
            color="info">
            {loadingExport ? (
              <div style={{ paddingInline: "37.8px", paddingBlock: "4.8px" }}>
                <Loader />
              </div>
            ) : (
              "Exportar datos"
            )}
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}

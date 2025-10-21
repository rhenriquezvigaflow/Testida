import { CircularProgress, Grid } from "@material-ui/core";
import IconoOpciones from "@material-ui/icons/Settings";
import React from "react";
import { CardBody, CardHeader } from "reactstrap";
import { AreaChartData } from "../../../../../commons/components/AreaChartData";
import GraficoEstadosLeyenda from "../../../../../commons/components/GraficoEstadosLeyenda";
import Timeline from "../../Timeline";

export default function MonitoredValue({
  titulo,
  loadingDatosVariable,
  variableSeleccionada,
  categoricalGraph,
  setShowModalRangoGrafico,
  startDate,
  endDate,
  datosGraficoMonitoreoCategoricos,
  datosGraficoMonitoreoContinuos,
  timelineDecimal,
  timelineYMin,
  timelineYMax,
  user,
  idPlanta,
  selected
}) {
  return (
    <>
      <CardHeader className="card-header-tab">
        <Grid
          container
          justifyContent="space-between"
          alignItems="center">
          <div
            id="refGraficos"
            className="card-header-title font-size-md font-weight-bold">
            {titulo}
            {loadingDatosVariable && (
              <CircularProgress
                size={25}
                style={{ margin: "0px 10px", color: "#2f4554" }}
              />
            )}
          </div>
          {variableSeleccionada &&
            !categoricalGraph &&
            Number(user.perfil) !== 7 && (
              <IconoOpciones
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setShowModalRangoGrafico(true);
                }}
              />
            )}
        </Grid>
      </CardHeader>
      <CardBody className="card-body-tab">
        {variableSeleccionada ? (
          categoricalGraph ? (
            <GraficoEstadosLeyenda
              data={datosGraficoMonitoreoCategoricos}
              fechaInicio={startDate}
              fechaFin={endDate}
            />
          ) : (
            <AreaChartData
              idPlanta={idPlanta}
              column={selected}
              fechaInicio={startDate}
              fechaFin={endDate}
              nombre={titulo}
              yMax={timelineYMax}
              yMin={timelineYMin}
            />
          )
        ) : (
          "No se ha seleccionado ninguna tarjeta o dispositivo"
        )}
      </CardBody>
    </>
  );
}

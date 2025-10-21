import React from "react";
import { CardBody, CardHeader } from "reactstrap";
import BarGraph from "../../BarGraph";

export default function PlantOperation({
  startDate,
  endDate,
  datosFuncionamientoPlanta
}) {
  return (
    <>
      <CardHeader className="card-header-tab">
        <div className="card-header-title font-size-md font-weight-bold">
          Funcionamiento de la Planta
        </div>
      </CardHeader>
      <CardBody className="card-body-tab">
        <BarGraph
          data={datosFuncionamientoPlanta}
          fecha={startDate}
          fechaFin={endDate}
        />
      </CardBody>
    </>
  );
}

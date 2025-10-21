import React, { useState } from "react";

import NormalizacionDow from "../../NormalizacionDow/normalizaciondow";

const NormalizacionPlantas = (props) => {
  const [plantaSeleccionada, setPlantaSeleccionada] = useState({
    id: -1,
    nombre: ""
  });
  // fetch para traer todas las plantas con id, nombre, si normaliza y ultimos datos de normalizacion

  useState();

  return (
    <>
      <NormalizacionDow
        idPlanta={10}
        nombrePlanta={"Santa Teresa"}
      />
    </>
  );
};

export default NormalizacionPlantas;

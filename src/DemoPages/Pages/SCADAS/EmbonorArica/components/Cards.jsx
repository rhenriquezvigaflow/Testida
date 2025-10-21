import { Grid } from "@material-ui/core";
import React from "react";
import Tarjetita from "../../Tarjetita";

export default function Cards({
  estadoRoD1,
  selected,
  umbrales,
  datosScada,
  isVibotReset,
  loadGraficoParametros
}) {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      lg={12}>
      <Tarjetita
        name="Estado R.O"
        value={estadoRoD1}
        selected={selected}
        number={1}
        clickMe={() => {}}
        size="medium-tarjeta"
        isVibotReset={isVibotReset}
      />
    </Grid>
  );
}

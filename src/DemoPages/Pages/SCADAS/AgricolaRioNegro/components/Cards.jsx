import { Grid } from "@material-ui/core";
import React from "react";
import Tarjetita from "../../Tarjetita";

/*
  Estado RO 
  Presión de Osmosis d9 - bar
  Presion de Rechazo d10 - bar
  Caudal de Alimentación d11 - m3/h 
  Caudal de Permeado d12 - m3/h
  Caudal de Rechazo d13  - m3/h
  E.C de Alimentación d14 - uS/cm
  E.C de Producto d15 - uS/cm
  Temperatura alimentación d16 - °C
*/

export default function Cards({
  estadoRoD1,
  selected,
  umbrales,
  datosScada,
  isVibotReset,
  clickMe
}) {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      lg={12}>
      <Tarjetita
        name="Recuperación RO"
        value={datosScada.d0}
        selected={selected}
        max={umbrales.ma0}
        min={umbrales.mi0}
        number={0}
        unit="%"
        clickMe={clickMe}
        size="medium-tarjeta"
        isVibotReset={isVibotReset}
      />
      <Tarjetita
        name="Estado RO"
        value={estadoRoD1}
        selected={selected}
        number={1}
        clickMe={() => {}}
        size="medium-tarjeta"
        isVibotReset={isVibotReset}
      />
      <Tarjetita
        name="pH de Alimentación"
        value={datosScada.d5}
        selected={selected}
        number={5}
        max={umbrales.ma5}
        min={umbrales.mi5}
        clickMe={clickMe}
        size="medium-tarjeta"
        unit="pH"
        isVibotReset={isVibotReset}
      />
      <Tarjetita
        name="Presión de Osmosis"
        value={datosScada.d9}
        selected={selected}
        max={umbrales.ma9}
        min={umbrales.mi9}
        number={9}
        unit="bar"
        clickMe={clickMe}
        size="medium-tarjeta"
        isVibotReset={isVibotReset}
      />
      <Tarjetita
        name="Presión de Rechazo"
        value={datosScada.d10}
        selected={selected}
        max={umbrales.ma10}
        min={umbrales.mi10}
        number={10}
        unit="bar"
        clickMe={clickMe}
        size="medium-tarjeta"
        isVibotReset={isVibotReset}
      />
      <Tarjetita
        name="Caudal de Alimentación"
        value={datosScada.d11}
        selected={selected}
        max={umbrales.ma11}
        min={umbrales.mi11}
        number={11}
        unit="m3/h"
        clickMe={clickMe}
        size="medium-tarjeta"
        isVibotReset={isVibotReset}
      />
      <Tarjetita
        name="Caudal de Permeado"
        value={datosScada.d12}
        selected={selected}
        max={umbrales.ma12}
        min={umbrales.mi12}
        number={12}
        unit="m3/h"
        clickMe={clickMe}
        size="medium-tarjeta"
        isVibotReset={isVibotReset}
      />
      <Tarjetita
        name="Caudal de Rechazo"
        value={datosScada.d13}
        selected={selected}
        max={umbrales.ma13}
        min={umbrales.mi13}
        number={13}
        unit="m3/h"
        clickMe={clickMe}
        size="medium-tarjeta"
        isVibotReset={isVibotReset}
      />
      <Tarjetita
        name="E.C de Alimentación"
        value={datosScada.d14}
        selected={selected}
        max={umbrales.ma14}
        min={umbrales.mi14}
        number={14}
        unit="uS/cm"
        clickMe={clickMe}
        size="medium-tarjeta"
        isVibotReset={isVibotReset}
      />
      <Tarjetita
        name="E.C de Producto"
        value={datosScada.d15}
        selected={selected}
        max={umbrales.ma15}
        min={umbrales.mi15}
        number={15}
        unit="uS/cm"
        clickMe={clickMe}
        size="medium-tarjeta"
        isVibotReset={isVibotReset}
      />
      <Tarjetita
        name="Temperatura alimentación"
        value={datosScada.d16}
        selected={selected}
        max={umbrales.ma16}
        min={umbrales.mi16}
        number={16}
        unit="°C"
        clickMe={clickMe}
        size="medium-tarjeta"
        isVibotReset={isVibotReset}
      />
      <Tarjetita
        name="Diferencial Filtro F-006"
        value={datosScada.d17}
        selected={selected}
        max={umbrales.ma17}
        min={umbrales.mi17}
        number={17}
        unit="Bar"
        clickMe={clickMe}
        size="medium-tarjeta"
        isVibotReset={isVibotReset}
      />
    </Grid>
  );
}

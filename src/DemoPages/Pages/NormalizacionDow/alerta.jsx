import React from "react";

import "react-datepicker/dist/react-datepicker.css";
import "../../../commons/styles/pages.styles.css";
import "../../../commons/styles/react-widgets-styles.css";
import "./normalizacion.css";
import { Grid } from "@material-ui/core";

const Alerta = (props) => {
  const openModal = () => {
    props.openModal(true);
  };

  return (
    props.show && (
      <div className={`box-alerta ${props.color}-color`}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center">
          <Grid
            item
            lg={12}>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center">
              <Grid
                item
                lg={12}
                md={12}
                xs={12}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center">
                  <Grid
                    item
                    lg={1}
                    md={1}
                    xs={1}>
                    <i className="icono-alerta pe-7s-attention" />
                  </Grid>
                  <Grid
                    item
                    lg={11}
                    md={11}
                    xs={11}>
                    {props.datoActual ? (
                      <span>
                        {`Valor de flujo permeado normalizado ${props.valor} ${props.unidad} en límite ${
                          props.color === "warning" ? "preventivo" : "crítico"
                        } el ${props.fecha}. Considere una limpieza CIP.`}
                      </span>
                    ) : (
                      <span>
                        {`${props.mensajeAlerta} el ${props.fecha}. Considere una limpieza CIP.`}
                      </span>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* <Grid item lg={2} md = {12} xs = {12}> 
            <Grid item>
              <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              >
                <Grid item> 
                  <button className="button-realizar-accion" onClick={openModal}>
                    Realizar acción
                  </button>
                </Grid>
            </Grid>
            </Grid>
          </Grid> */}
        </Grid>
      </div>
    )
  );
};

export default Alerta;

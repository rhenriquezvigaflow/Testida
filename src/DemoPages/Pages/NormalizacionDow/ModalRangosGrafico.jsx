import { Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
/* import campana from "./campana.png"; */
import { FormGroup, Input } from "reactstrap";
import "./popup.css";

const ModalRangosGrafico = ({
  rangosData,
  onGuardar,
  mostrar,
  onHide,
  codSelec
}) => {
  const [show, setShow] = useState(false);

  const [flujoMin, setFlujoMin] = useState(null);
  const [flujoMax, setFlujoMax] = useState(null);
  const [pasoSalesMin, setPasoSalesMin] = useState(null);
  const [pasoSalesMax, setPasoSalesMax] = useState(null);
  const [recSalesMin, setRecSalesMin] = useState(null);
  const [recSalesMax, setRecSalesMax] = useState(null);
  const [diffpMin, setDiffpMin] = useState(null);
  const [diffpMax, setDiffpMax] = useState(null);

  useEffect(() => {
    setShow(mostrar);
  }, [mostrar]);

  useEffect(() => {
    setFlujoMin(rangosData.min_flujo_permeado_norm);
    setFlujoMax(rangosData.max_flujo_permeado_norm);
    setPasoSalesMin(rangosData.min_paso_sales);
    setPasoSalesMax(rangosData.max_paso_sales);
    setRecSalesMin(rangosData.min_rechazo_sales);
    setRecSalesMax(rangosData.max_rechazo_sales);
    setDiffpMin(rangosData.min_diffp);
    setDiffpMax(rangosData.max_diffp);
  }, [rangosData]);

  const ModalHide = () => {
    setShow(false);
    onHide(false);
  };

  const onChangeValue = (event, set) => {
    if (!isNaN(event.target.value)) set(event.target.value);
  };

  const onClickGuardar = () => {
    onGuardar({
      ...rangosData,
      min_flujo_permeado_norm: flujoMin,
      max_flujo_permeado_norm: flujoMax,
      min_paso_sales: pasoSalesMin,
      max_paso_sales: pasoSalesMax,
      min_rechazo_sales: recSalesMin,
      max_rechazo_sales: recSalesMax,
      min_diffp: diffpMin,
      max_diffp: diffpMax
    });
  };

  const getTitulo = (cod) => {
    const titulos = {
      flujo: "Flujo Permeado Normalizado",
      sales: "Paso y Rechazo de Sales",
      diffp: "Diferencial de presión"
    };

    return titulos[cod] || "-";
  };

  return (
    <Modal
      className="modal-position"
      show={show}
      onHide={ModalHide}>
      <div>
        <i
          className="modal-icono pe-7s-close-circle"
          onClick={ModalHide}
        />
      </div>
      <div className="modal-settings">
        <div align="center" />
        <div
          align="center"
          className="modal-title">
          {`Asignar rangos para el gráfico de ${getTitulo(codSelec)}`}
        </div>
        <div
          align="center"
          className="modal-subtitle">
          {/* <hr /> */}
        </div>
        <div style={{ padding: "0rem 5.5rem" }}>
          {codSelec === "flujo" ? (
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}>
              <Grid item>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center">
                  <Grid
                    item
                    lg={7}
                    md={7}
                    xs={7}>
                    Mínimo
                  </Grid>
                  <Grid
                    item
                    lg={5}
                    md={5}
                    xs={5}>
                    <div className="inputwidth">
                      <Input
                        type="numeric"
                        name="minimo"
                        id="minimoFlujo"
                        value={flujoMin}
                        onChange={(e) => onChangeValue(e, setFlujoMin)}
                      />
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center">
                  <Grid
                    item
                    lg={7}
                    md={7}
                    xs={7}>
                    Máximo
                  </Grid>
                  <Grid
                    item
                    lg={5}
                    md={5}
                    xs={5}>
                    <div className="inputwidth">
                      <Input
                        type="numeric"
                        name="maximo"
                        id="maximoFlujo"
                        value={flujoMax}
                        onChange={(e) => onChangeValue(e, setFlujoMax)}
                      />
                    </div>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <div align="center">
                  <input
                    style={{ padding: "0rem 5rem 0rem 2rem" }}
                    type="submit"
                    value="Guardar"
                    onClick={onClickGuardar}
                  />
                </div>
              </Grid>
            </Grid>
          ) : codSelec === "diffp" ? (
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}>
              <Grid item>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center">
                  <Grid
                    item
                    lg={7}
                    md={7}
                    xs={7}>
                    Mínimo
                  </Grid>
                  <Grid
                    item
                    lg={5}
                    md={5}
                    xs={5}>
                    <div className="inputwidth">
                      <Input
                        type="numeric"
                        name="minimo"
                        id="minDiffp"
                        value={diffpMin}
                        onChange={(e) => onChangeValue(e, setDiffpMin)}
                      />
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center">
                  <Grid
                    item
                    lg={7}
                    md={7}
                    xs={7}>
                    Máximo
                  </Grid>
                  <Grid
                    item
                    lg={5}
                    md={5}
                    xs={5}>
                    <div className="inputwidth">
                      <Input
                        type="numeric"
                        name="maximo"
                        id="maximoDiffp"
                        value={diffpMax}
                        onChange={(e) => onChangeValue(e, setDiffpMax)}
                      />
                    </div>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <div align="center">
                  <input
                    style={{ padding: "0rem 5rem 0rem 2rem" }}
                    type="submit"
                    value="Guardar"
                    onClick={onClickGuardar}
                  />
                </div>
              </Grid>
            </Grid>
          ) : codSelec === "sales" ? (
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}>
              <Grid item>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center">
                  <Grid
                    item
                    lg={7}
                    md={7}
                    xs={7}>
                    Mín. Paso de sales
                  </Grid>
                  <Grid
                    item
                    lg={5}
                    md={5}
                    xs={5}>
                    <div className="inputwidth">
                      <Input
                        type="numeric"
                        name="minimo"
                        id="minpasosales"
                        value={pasoSalesMin}
                        onChange={(e) => onChangeValue(e, setPasoSalesMin)}
                      />
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center">
                  <Grid
                    item
                    lg={7}
                    md={7}
                    xs={7}>
                    Máx. Paso de sales
                  </Grid>
                  <Grid
                    item
                    lg={5}
                    md={5}
                    xs={5}>
                    <div className="inputwidth">
                      <Input
                        type="numeric"
                        name="maximo"
                        id="maxpasosales"
                        value={pasoSalesMax}
                        onChange={(e) => onChangeValue(e, setPasoSalesMax)}
                      />
                    </div>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center">
                  <Grid
                    item
                    lg={7}
                    md={7}
                    xs={7}>
                    Mín. Rechazo de sales
                  </Grid>
                  <Grid
                    item
                    lg={5}
                    md={5}
                    xs={5}>
                    <div className="inputwidth">
                      <Input
                        type="numeric"
                        name="minimo"
                        id="minrecsales"
                        value={recSalesMin}
                        onChange={(e) => onChangeValue(e, setRecSalesMin)}
                      />
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center">
                  <Grid
                    item
                    lg={7}
                    md={7}
                    xs={7}>
                    Máx. Rechazo de sales
                  </Grid>
                  <Grid
                    item
                    lg={5}
                    md={5}
                    xs={5}>
                    <div className="inputwidth">
                      <Input
                        type="numeric"
                        name="maximo"
                        id="maxrecsales"
                        value={recSalesMax}
                        onChange={(e) => onChangeValue(e, setRecSalesMax)}
                      />
                    </div>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <div align="center">
                  <input
                    style={{ padding: "0rem 5rem 0rem 2rem" }}
                    type="submit"
                    value="Guardar"
                    onClick={onClickGuardar}
                  />
                </div>
              </Grid>
            </Grid>
          ) : (
            <></>
          )}
        </div>
      </div>
    </Modal>
  );
};
export default ModalRangosGrafico;

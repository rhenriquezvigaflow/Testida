import { Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
/* import campana from "./campana.png"; */
import { FormGroup, Input } from "reactstrap";
import "./popup.css";

const ModalLimites = ({ limitesData, onGuardar, mostrar, onHide }) => {
  const [show, setShow] = useState(false);
  const [permeado10, setPermeado10] = useState(0);
  const [permeado15, setPermeado15] = useState(0);
  const [deltaP20, setDeltaP20] = useState(0);

  useEffect(() => {
    setShow(mostrar);
  }, [mostrar]);

  useEffect(() => {
    setPermeado10(limitesData.permeado_10);
    setPermeado15(limitesData.permeado_15);
    setDeltaP20(limitesData.delta_p_20);
  }, [limitesData]);

  const ModalHide = () => {
    setShow(false);
    onHide(false);
  };

  const onChangeValue = (event, set) => {
    if (!isNaN(event.target.value)) set(event.target.value);
  };

  const onClickGuardar = () => {
    onGuardar({
      ...limitesData,
      permeado_15: permeado15,
      permeado_10: permeado10,
      delta_p_20: deltaP20
    });
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
        <div align="center">
          {/* <img
            width={25}
            style={{ marginBottom: 5, marginLeft: 5, marginRight: 10 }}
            src={campana}
            alt=""
          /> */}
        </div>
        <div
          align="center"
          className="modal-title">
          Asignar Límites de Normalización
        </div>
        <div
          align="center"
          className="modal-subtitle">
          {/* <hr /> */}
        </div>
        <div style={{ padding: "0rem 5.5rem" }}>
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
                  Límite permeado 10%
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
                      id="exampleEmail"
                      value={permeado10}
                      onChange={(e) => onChangeValue(e, setPermeado10)}
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
                  Límite permeado 15%
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
                      id="exampleEmail"
                      value={permeado15}
                      onChange={(e) => onChangeValue(e, setPermeado15)}
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
                  {"Límite ΔP>20%"}
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
                      id="exampleEmail"
                      value={deltaP20}
                      onChange={(e) => onChangeValue(e, setDeltaP20)}
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
        </div>
      </div>
    </Modal>
  );
};
export default ModalLimites;

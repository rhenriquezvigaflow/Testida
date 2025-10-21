import { Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FormGroup, Input } from "reactstrap";
import campana from "./campana.png";

const CustomModal = (props) => {
  useEffect(() => {
    showModal();
  }, [props.data]);

  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  const [unit, setUnit] = useState("");

  const showModal = () => {
    if (props.data) {
      setMinValue(props.data.min);
      setMaxValue(props.data.max);
      setName(props.data.name);
      setUnit(props.data.unit);
      setShow(true);
    }
  };

  const ModalHide = () => {
    setShow(false);
  };

  const minOnChange = (event) => {
    if (!isNaN(event.target.value)) setMinValue(event.target.value);
  };

  const maxOnChange = (event) => {
    if (!isNaN(event.target.value)) setMaxValue(event.target.value);
  };

  const onClickSaveAlarm = () => {
    const dataSave = {
      min: minValue,
      max: maxValue
    };
    props.onClickSaveAlarm(dataSave);
    ModalHide();
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
          <img
            width={25}
            style={{ marginBottom: 5, marginLeft: 5, marginRight: 10 }}
            src={campana}
            alt=""
          />
        </div>
        <div
          align="center"
          className="modal-title">
          Asignar Alarmas de Límites
        </div>
        <div
          align="center"
          className="modal-subtitle">
          {name}
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
                Mínimo permitido
                <div className="inputwidth">
                  <Input
                    type="numeric"
                    name="minimo"
                    id="exampleEmail"
                    value={minValue}
                    onChange={minOnChange}
                  />
                </div>
                {unit}
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center">
                Máximo permitido
                <div className="inputwidth2">
                  <Input
                    type="numeric"
                    name="maximo"
                    id="exampleEmail"
                    value={maxValue}
                    onChange={maxOnChange}
                  />
                </div>
                {unit}
              </Grid>
            </Grid>
            <Grid item>
              <div align="center">
                <input
                  style={{ padding: "0rem 5rem 0rem 2rem" }}
                  type="submit"
                  value="Guardar"
                  onClick={onClickSaveAlarm}
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </Modal>
  );
};
export default CustomModal;

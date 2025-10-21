import { Modal } from "react-bootstrap";

import { Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import "../../../commons/styles/ReactTable.css";
import "./normalizacion.css";
import Combobox from "react-widgets/Combobox";
import DatePicker from "react-widgets/DatePicker";
import UseContext from "../../../Layout/AppMain/UserContext";
import formatearFechaDDMMYY from "../../../commons/functions/FormatearFechaDDMMYY";
import apis from "../../../config/apiStore";

const ModalAlertaLimite = (props) => {
  const [show, setShow] = useState(false);

  const [fechaNuevaMantencion, setfechaNuevaMantencion] = useState(new Date());
  const [tipoMantencion, setTipoMantencion] = useState({
    id: 1,
    name: "Limpieza CIP"
  });

  const [showRealizarAccion, setShowRealizarAccion] = useState(true);
  const [showInsertarMantencion, setShowInsertarMantencion] = useState(false);
  const [showConfirmarMantencion, setShowConfirmarMantencion] = useState(false);

  const user = React.useContext(UseContext);

  const insertMantencionMembranas = () => {
    const formData = new FormData();
    formData.append("id_planta", props.planta.id);
    formData.append("id_tipo_mantencion", tipoMantencion.id);
    formData.append("fecha", fechaNuevaMantencion.toLocaleDateString("en-US"));
    fetch(apis.insertMantencionMembranas, {
      method: "POST",
      headers: {
        "Id-User": user.id_user,
        "Token": user.token
      },
      body: formData,
      credentials: "include"
    })
      .then((resp) => {
        resp.json();
      })
      .then((json) => {
        //console.log("Mantencion ingresada")
        props.actualizaMembranas();
        hideModal();
      })
      .catch(() => {
        //console.log("Error inesperado al ingresar mantencion membrana")
        hideModal();
      });
  };

  const hideModal = () => {
    setShow(false);
    props.handleShow(false);

    // Retrasa setear estado ya que el cierre del modal tambien tiene un retraso y el seteo de estados modifica la vista del modal antes de cerrarlo
    setTimeout(() => {
      setShowRealizarAccion(true);
      setShowInsertarMantencion(false);
      setShowConfirmarMantencion(false);
      setfechaNuevaMantencion(new Date());
      setTipoMantencion({ id: 1, name: "Limpieza CIP" });
    }, 500);
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <Modal
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      dialogClassName="modal-width">
      <br />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center">
        <Grid item>
          <div className={`modal-cirle ${props.color}-color`}>
            <i className="modal-icono-alerta pe-7s-attention" />
          </div>
        </Grid>
        <Grid item>
          <div className="font-weight-bold">Alerta</div>
        </Grid>
        <Grid item>
          <div className="font-weight-bold">
            {`Normalización de membranas planta ${props.planta.nombre}`}
          </div>
        </Grid>
      </Grid>
      <div>
        <hr width={"30%"} />
      </div>
      {showRealizarAccion && (
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center">
          <Grid item>
            {props.datoActual ? (
              <div>
                {"Valor de flujo permeado normalizado "}
                <span style={{ color: "rgb(56,118,225)" }}>
                  {`${props.valor} ${props.unidad}`}
                </span>
                {` en límite ${
                  props.color == "warning"
                    ? "preventivo "
                    : `crítico  el ${props.fecha}.`
                }`}
              </div>
            ) : (
              <div>{`${props.mensajeAlerta} el ${props.fecha}.`}</div>
            )}
          </Grid>
          <Grid item>{"Considere una limpieza CIP."}</Grid>
          <br />
          <Grid item>
            <Button
              onClick={() => {
                setShowInsertarMantencion(true);
                setShowRealizarAccion(false);
              }}
              color="info"
              style={{
                padding: "10px 25px",
                fontWeight: "500",
                fontSize: "14.5px"
              }}>
              Realizar Acción
            </Button>
          </Grid>
          <Grid item>
            <button
              onClick={hideModal}
              color="info"
              style={{
                padding: "10px 25px",
                fontWeight: "500",
                fontSize: "14.5px",
                backgroundColor: "#ffffff00",
                borderColor: "#ffffff00"
              }}>
              Ignorar
            </button>
          </Grid>
        </Grid>
      )}

      {showInsertarMantencion && (
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center">
          <Grid item>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={1}>
              <Grid item>
                <Combobox
                  style={{ width: "180px" }}
                  data={[
                    { id: 1, name: "Limpieza CIP" },
                    { id: 2, name: "Cambio membrana" },
                    { id: 3, name: "Limpieza CIP ejecutado por cliente" },
                    { id: 4, name: "Cambio membrana ejecutado por cliente" }
                  ]}
                  dataKey="id"
                  textField="name"
                  messages={{ openCombobox: "" }}
                  value={tipoMantencion}
                  onChange={(value) => {
                    setTipoMantencion(value);
                  }}
                />
              </Grid>
              <Grid item>
                <DatePicker
                  style={{ width: "180px" }}
                  value={fechaNuevaMantencion}
                  onChange={(fechaSeleccionada) => {
                    setfechaNuevaMantencion(fechaSeleccionada);
                  }}
                  valueFormat={{
                    month: "numeric",
                    year: "numeric",
                    day: "numeric"
                  }}
                  calendarProps={{ views: ["month"], max: new Date() }}
                  messages={{
                    dateButton: "Seleccionar fecha",
                    moveBack: "",
                    moveForward: "",
                    moveToday: "Hoy"
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <br />
          <Grid item>
            <Grid item>
              <Button
                onClick={() => {
                  setShowInsertarMantencion(false);
                  setShowConfirmarMantencion(true);
                }}
                color="info"
                style={{
                  padding: "10px 25px",
                  fontWeight: "500",
                  fontSize: "14.5px"
                }}>
                Confirmar
              </Button>
            </Grid>
            <Grid item>
              <button
                onClick={hideModal}
                color="info"
                style={{
                  padding: "10px 25px",
                  fontWeight: "500",
                  fontSize: "14.5px",
                  backgroundColor: "#ffffff00",
                  borderColor: "#ffffff00"
                }}>
                Cancelar
              </button>
            </Grid>
          </Grid>
        </Grid>
      )}

      {showConfirmarMantencion && (
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center">
          {/* <br/> */}
          <Grid item>
            <div className="font-weight-bold">
              {"¿Confirma la acción "}
              <span style={{ color: "rgb(56,118,225)" }}>
                {tipoMantencion.name}
              </span>
              {" el día "}
              <span style={{ color: "rgb(56,118,225)" }}>
                {formatearFechaDDMMYY(fechaNuevaMantencion)}
              </span>
              {"?"}
            </div>
          </Grid>
          <Grid item>
            <span style={{ color: "#717171", fontStyle: "italic" }}>
              Posteriormente esta acción no podrá deshacerse
            </span>
          </Grid>
          <br />
          <Grid item>
            <Button
              onClick={insertMantencionMembranas}
              color="info"
              style={{
                padding: "10px 25px",
                fontWeight: "500",
                fontSize: "14.5px"
              }}>
              Confirmar
            </Button>
          </Grid>
          <Grid item>
            <button
              onClick={() => {
                setShowInsertarMantencion(true);
                setShowConfirmarMantencion(false);
              }}
              color="info"
              style={{
                padding: "10px 25px",
                fontWeight: "500",
                fontSize: "14.5px",
                backgroundColor: "#ffffff00",
                borderColor: "#ffffff00"
              }}>
              Volver atrás
            </button>
          </Grid>
        </Grid>
      )}

      <br />
    </Modal>
  );
};

export default ModalAlertaLimite;

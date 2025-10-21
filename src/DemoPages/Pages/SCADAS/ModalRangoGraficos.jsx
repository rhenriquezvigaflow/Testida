import { Grid } from "@material-ui/core";
import React, { useState, useEffect, useContext } from "react";
import { Modal } from "react-bootstrap";
/* import campana from "./campana.png"; */
import { Input } from "reactstrap";
import "./popup.css";
import UseContext from "../../../Layout/AppMain/UserContext";
import apis from "../../../config/apiStore";

const ModalRangoGraficos = ({
  idPlanta,
  idVar,
  onGuardar,
  mostrar,
  onHide,
  nombreVar,
  onChangeRangos
}) => {
  const user = useContext(UseContext);
  const [show, setShow] = useState(false);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  useEffect(() => {
    setShow(mostrar);
  }, [mostrar]);

  const ModalHide = () => {
    setShow(false);
    onHide(false);
  };

  const onChangeValue = (event, set) => {
    if (!isNaN(event.target.value)) set(event.target.value);
  };

  const onClickGuardar = () => {
    updateRangosGrafico(idPlanta, idVar, min, max);
  };

  const getRangosGrafico = async (idPlanta, idVar) => {
    const datosBody = new FormData();
    datosBody.append("id_planta", idPlanta);
    datosBody.append("id_variable", idVar);

    const response = await fetch(apis.getLimitesPlcGrafico, {
      method: "POST",
      headers: {
        "Id-User": user.id_user,
        "Token": user.token
      },
      body: datosBody
    });

    const json = await response.json();

    if (json.length > 0) {
      const resMin = json[0].min || 0;
      const resMax = json[0].max || 0;
      setMin(resMin);
      setMax(resMax);
      onChangeRangos({ min: resMin, max: resMax });
    }
  };

  const updateRangosGrafico = async (idPlanta, idVar, minVal, maxVal) => {
    const datosBody = new FormData();
    datosBody.append("id_planta", idPlanta);
    datosBody.append("id_variable", idVar);
    datosBody.append("min", minVal);
    datosBody.append("max", maxVal);

    const response = await fetch(apis.updateLimitesPlcGrafico, {
      method: "POST",
      headers: {
        "Id-User": user.id_user,
        "Token": user.token
      },
      body: datosBody
    });

    const json = await response.json();

    onGuardar(json);
    onChangeRangos({ min: minVal, max: maxVal });
  };

  useEffect(() => {
    if (idVar !== -1 && idVar !== null) getRangosGrafico(idPlanta, idVar);
  }, [idVar]);

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
          Rango de visualización de datos
        </div>
        <div
          align="center"
          className="modal-subtitle">
          {nombreVar}
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
                      id="exampleEmail"
                      value={min}
                      onChange={(e) => onChangeValue(e, setMin)}
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
                      id="exampleEmail"
                      value={max}
                      onChange={(e) => onChangeValue(e, setMax)}
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
export default ModalRangoGraficos;

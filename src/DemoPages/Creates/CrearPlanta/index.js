import { Grid } from "@material-ui/core";
import React, { useEffect, Fragment, useState } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Combobox from "react-widgets/Combobox";
import SweetAlert from "sweetalert-react";
import UseContext from "../../../Layout/AppMain/UserContext";
import ValidarInput from "../../../commons/functions/ValidarInput";

import "../../../commons/styles/react-widgets-styles.css";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Input,
  Label
} from "reactstrap";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import apis from "../../../config/apiStore";
import "../../../commons/styles/pages.styles.css";

const CrearPlanta = () => {
  const auxDatosCrearPlanta = {
    idPlanta: "",
    nombrePlanta: "",
    nombreEmpresa: ""
  };
  const auxValidacionCrearPlanta = {
    idPlanta: true,
    nombrePlanta: true,
    nombreEmpresa: true
  };
  const [empresa, setEmpresa] = useState({ id: 0, nombre: "Otra" });
  const [datosCrearPlanta, setDatosCrearPlanta] = useState(auxDatosCrearPlanta);
  const [validacionCrearPlanta, setValidacionCrearPlanta] = useState(
    auxValidacionCrearPlanta
  );
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
    text: "",
    type: ""
  });
  const user = React.useContext(UseContext);

  const handleEmpresa = (empresa) => {
    setEmpresa(empresa);
  };

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setDatosCrearPlanta({ ...datosCrearPlanta, [name]: value });
  };

  const handleValidarInput = (event) => {
    const { name, value, type } = event.target;
    if (name === "nombreEmpresa") {
      if (Number(empresa.id) === 0) {
        setValidacionCrearPlanta({
          ...validacionCrearPlanta,
          [name]: ValidarInput(value, type, 1)
        });
      } else {
        setValidacionCrearPlanta({ ...validacionCrearPlanta, [name]: false });
      }
    } else {
      setValidacionCrearPlanta({
        ...validacionCrearPlanta,
        [name]: ValidarInput(value, type, 1)
      });
    }
  };

  const insertarPlanta = () => {
    if (
      validacionCrearPlanta.idPlanta ||
      validacionCrearPlanta.nombrePlanta ||
      (validacionCrearPlanta.nombreEmpresa && Number(empresa.id) === 0)
    ) {
      setAlert({
        show: true,
        text: "Debe ingresar todos los campos y en el formato correcto",
        type: "warning"
      });
    } else {
      const formData = new FormData();
      formData.append("id_planta", datosCrearPlanta.idPlanta);
      formData.append("nombre_planta", datosCrearPlanta.nombrePlanta);
      formData.append("id_empresa", empresa.id);
      fetch(apis.insertarPlanta, {
        method: "POST",
        headers: {
          "Id-User": user.id_user,
          "Token": user.token
        },
        body: formData,
        credentials: "include"
      })
        .then((res) => {
          if (!res.ok) {
            throw Error(res.status);
          }
          return res.json();
        })
        .then((json) => {
          if (json.status) {
            setAlert({
              show: true,
              text: json.message,
              type: "success"
            });
            setDatosCrearPlanta(auxDatosCrearPlanta);
            setValidacionCrearPlanta(auxValidacionCrearPlanta);
            setEmpresa({ id: 0, nombre: "Otra" });
          } else {
            setAlert({
              show: true,
              text: json.message,
              type: "error"
            });
          }
        })
        .catch((error) => {
          console.log("Error", error);
          setAlert({
            show: true,
            text: `Error al ingresar datos. ${error}`,
            type: "error"
          });
        });
    }
  };

  return (
    <Fragment>
      <SweetAlert
        title="Atención"
        confirmButtonColor="#353a40"
        confirmButtonText="Aceptar"
        show={alert.show}
        type={alert.type}
        text={alert.text}
        button="Coolio"
        onConfirm={() => setAlert({ show: false, text: "", type: "" })}
      />
      <ReactCSSTransitionGroup
        component="div"
        transitionName="TabsAnimation"
        transitionAppear={true}
        transitionAppearTimeout={0}
        transitionEnter={false}
        transitionLeave={false}>
        <Container fluid>
          <h1
            style={{ marginBottom: "10px", color: "#303D48" }}
            className="card-header-title font-size-lg font-weight-bold text-uppercase">
            Crear Planta
          </h1>
          <div>
            <Breadcrumb className="Breadcrumb">
              <BreadcrumbItem>
                <a /* href="#" */>IdA</a>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <a /* href="#" */>Gestionar Plantas</a>
              </BreadcrumbItem>
              <BreadcrumbItem active>Crear Planta</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <Card className="main-card mb-3">
            <CardHeader>
              <div
                style={{ color: "#303D48" }}
                className="card-header-title font-size-md font-weight-bold">
                Añadir una nueva planta
              </div>
            </CardHeader>
            <CardBody>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center">
                <Grid
                  item
                  xs={12}
                  md={2}
                  lg={2}>
                  <Label>ID</Label>
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={10}
                  lg={10}>
                  <Input
                    type="number"
                    name="idPlanta"
                    id="id"
                    placeholder="ID"
                    value={datosCrearPlanta.idPlanta}
                    onChange={handleChangeInput}
                    onBlur={handleValidarInput}
                  />
                  <div style={{ color: "red", marginLeft: "5px" }}>
                    {validacionCrearPlanta["idPlanta"]}
                  </div>
                </Grid>
              </Grid>
              <br />
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center">
                <Grid
                  item
                  xs={12}
                  md={2}
                  lg={2}>
                  <Label>Planta</Label>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={10}
                  lg={10}>
                  <Input
                    type="text"
                    name="nombrePlanta"
                    id="nombrePlanta"
                    value={datosCrearPlanta.nombrePlanta}
                    placeholder="Nombre Planta"
                    onChange={handleChangeInput}
                    onBlur={handleValidarInput}
                  />
                  <div style={{ color: "red", marginLeft: "5px" }}>
                    {validacionCrearPlanta["nombrePlanta"]}
                  </div>
                </Grid>
              </Grid>
              <br />
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center">
                <Grid
                  item
                  xs={12}
                  md={2}
                  lg={2}>
                  <Label>Empresa</Label>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={10}
                  lg={10}>
                  <Combobox
                    data={[
                      { id: 2, nombre: "Santa Teresa" },
                      { id: 3, nombre: "Sealand" },
                      { id: 4, nombre: "Lader" }
                    ]}
                    textField="nombre"
                    dataKey="id"
                    value={empresa}
                    onChange={(value) => {
                      handleEmpresa(value);
                    }}
                    messages={{ openCombobox: "" }}
                  />
                </Grid>
                {/* <Grid item xs = {12} md = {5} lg = {5} style={{paddingLeft:"5px"}}>
                  <Input
                    type="text"
                    name="nombreEmpresa"
                    id="nombreEmpresa"
                    value={datosCrearPlanta.nombreEmpresa}
                    placeholder="Nombre Empresa"
                    disabled ={Number(empresa.id)!==0}
                    onChange = {handleChangeInput}
                    onBlur = {handleValidarInput}
                  />
                </Grid> */}
                <div style={{ color: "red", marginLeft: "5px" }}>
                  {validacionCrearPlanta["nombreEmpresa"]}
                </div>
              </Grid>

              <br />
              <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center">
                <Grid item>
                  <Button
                    color="info"
                    onClick={insertarPlanta}>
                    Confirmar
                  </Button>
                </Grid>
              </Grid>
            </CardBody>
          </Card>
        </Container>
      </ReactCSSTransitionGroup>
    </Fragment>
  );
};

export default CrearPlanta;

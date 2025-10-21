import React, { useEffect, useState } from "react";
import Timeline from "../Timeline.js";
import "../popup.css";
import "react-datepicker/dist/react-datepicker.css";
import BarGraph from "../BarGraph";

import BarGraphLader from "../Lader/BarGraphLader";
import Tarjetita from "../Tarjetita.js";

import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import "../../../../commons/styles/pages.styles.css";
import DatePicker2 from "react-widgets/DatePicker";
import { Button, Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import UseContext from "../../../../Layout/AppMain/UserContext";
import apis from "../../../../config/apiStore";
import CustomModal from "../Modal";
import "../../../../commons/styles/react-widgets-styles.css";
import { CircularProgress, Grid } from "@material-ui/core";
import SweetAlert from "sweetalert-react/lib/SweetAlert";
import formatearFechaDDMMYY from "../../../../commons/functions/FormatearFechaDDMMYY";
import sumarDias from "../../../../commons/functions/sumarDias";
import ScadaAdquim from "./ScadaAdquim";

import IconoOpciones from "@material-ui/icons/Settings";
import ModalRangoGraficos from "../ModalRangoGraficos.jsx";
import { initialDatosScada, initialUmbrales } from "./constants.js";

const Adquim = ({ idPlanta = 14 }) => {
  const user = React.useContext(UseContext);
  const [modalData, setModalData] = useState();
  const [idAlarma, setIdAlarma] = useState();
  const [categoricalGraph, setCategoricalGraph] = useState(true);
  const [variableSeleccionada, setVariableSeleccionada] = useState(false);
  const [datosFuncionamientoPlanta, setDatosFuncionamientoPlanta] = useState(
    []
  );
  const [
    datosGraficoMonitoreoCategoricos,
    setDatosGraficoMonitoreoCategoricos
  ] = useState({ id: 0, data: [] });
  const [datosGraficoMonitoreoContinuos, setDatosGraficoMonitoreoContinuos] =
    useState([]);
  const [startDate, setStartDate] = useState(sumarDias(new Date(), -13));
  const [endDate, setEndDate] = useState(new Date());
  const [titulo, setTitulo] = useState("Variable Monitoreada");
  const [selected, setSelected] = useState(-1);
  const [timelineYMin, settimelineYMin] = useState(null);
  const [timelineYMax, settimelineYMax] = useState(null);
  const [timelineDecimal, settimelineDecimal] = useState(null);
  const [umbrales, setUmbrales] = useState(initialUmbrales);
  const [datosScada, setDatosScada] = useState(initialDatosScada);
  const [iscon, setiscon] = useState(-1);
  const [loading, setLoading] = useState(true);
  const listaIdAlarmas = Array.from({ length: 21 }, (_, i) => i).filter(
    (n) => n !== 15
  );
  const [datosAlarmas, setDatosAlarmas] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [showModalRangoGrafico, setShowModalRangoGrafico] = useState(false);
  const [showAlertRangos, setShowAlertRangos] = useState(false);
  const [alertRangos, setAlertRangos] = useState({
    message: "",
    ok: false,
    code: 0
  });

  const [loadingDatosVariable, setLoadingDatosVariable] = useState(false);

  // Estandarizable
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 500) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 500) {
      setShowScroll(false);
    }
  };

  window.addEventListener("scroll", checkScrollTop);
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const estadosDispositivo = {
    0: "OFF",
    1: "ON",
    2: "OFF"
  };

  const getEstadoDispositivo = (id) => estadosDispositivo[Number(id)] || "-";

  const unidadesPorId = {
    1: "pH",
    2: "%",
    3: "%",
    5: "bar",
    6: "bar",
    7: "m³/hr",
    8: "m³/hr",
    9: "µS/cm",
    10: "µS/cm"
  };

  const onClickAlarma = (id, nombre) => {
    if (Number(user.perfil) === 5 || Number(user.perfil) === 2) {
      const min = umbrales[`mi${id.toString()}`];
      const max = umbrales[`ma${id.toString()}`];
      const unit = unidadesPorId[Number(id)] || "";

      setIdAlarma(id);

      setModalData({
        name: nombre,
        min: min,
        max: max,
        unit: unit
      });
    }
  };

  const insertarVisita = ({ signal }) => {
    const datosBody = new FormData();
    datosBody.append("id_tipo_visita", 2);
    datosBody.append("id_usuario", user.id_user);
    datosBody.append("id_planta", idPlanta);

    fetch(apis.insertarVisita, {
      method: "POST",
      headers: {
        "Id-User": user.id_user,
        "Token": user.token
      },
      body: datosBody,
      signal: signal
    });
  };

  const [loadingExport, setLoadingExport] = useState(false);

  // Estandarizable
  const exportarDatosScada = ({ signal }) => {
    setLoadingExport(true);
    const fileName = `Adquim-${formatearFechaDDMMYY(startDate)}-${formatearFechaDDMMYY(endDate)}.xls`;
    const uri = `${apis.exportData}?id_planta=${idPlanta}&&fechainicio=${startDate.toLocaleDateString("en-US")}&&fechafin=${endDate.toLocaleDateString("en-US")}`;
    fetch(uri, {
      method: "GET",
      headers: {
        "Id-User": user.id_user,
        "Token": user.token
      },
      credentials: "include",
      signal: signal
    })
      .then((resp) => {
        if (!resp.ok) {
          throw Error(resp.status);
        }
        return resp.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url.trim();
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.log("Error => ", error);
      })
      .finally(() => {
        setLoadingExport(false);
      });
  };

  // Estandariable
  const loadScada = ({ signal }) => {
    const formData = new FormData();
    formData.append("idPlanta", idPlanta);
    fetch(apis.loadScada, {
      method: "POST",
      headers: {
        "Id-User": user.id_user,
        "Token": user.token
      },
      body: formData,
      credentials: "include",
      signal: signal
    })
      .then((res) => {
        if (!res.ok) {
          throw Error(res.status);
        }
        return res.json();
      })
      .then((json) => {
        console.log(json);
        json.forEach((datos) => {
          setLoading(false);
          setDatosScada({
            conexion: datos.con,
            estadoRO: datos.d1,
            PT009: datos.d2,
            AE016: datos.d3,
            tkAlimentacion: datos.d4,
            PT017: datos.d5,
            PT021: datos.d6,
            FE006: datos.d7,
            FE008: datos.d8,
            AE005: datos.d9,
            AE007: datos.d10,
            P002: datos.d11,
            P003: datos.d12,
            temperatura: datos.d13,
            AE009: datos.d14,
            tkProductoBajo: datos.d15,
            tkProductoAlto: datos.d16,
            P007: datos.d17,
            P001A: datos.d18,
            P001B: datos.d19,
            P005: datos.d20,
            caudalRechazo: datos.d7 - datos.d8
          });
        });
      })
      .catch((error) => console.log("Error", error));
  };

  // Estandarizable
  const getEPO = (id) => {
    try {
      const EPO = [
        "Parada brusca",
        "Falla osmosis",
        "Deshabilitado",
        "Detenida",
        "Inicio flushing",
        "Espera pre tratamiento",
        "Flushing inicial",
        "Cambio a producción",
        "Producción",
        "Inicio flushing intermedio",
        "Flushing intermedio",
        "Cambio a flushing final",
        "Flushing final",
        "Espera pretratamiento detenido",
        "Cambio a deteción",
        "Cambio a producción"
      ];
      return EPO[id];
    } catch (e) {
      return "Estado desconocido";
    }
  };

  // Estandarizable
  const getStringConection = (id) => {
    try {
      const stringConection = ["Desconectada", "En línea"];
      return stringConection[id];
    } catch (e) {
      return "";
    }
  };

  // Estandarizable
  const loadFuncionamientoPlanta = (id, signal) => {
    const formData = new FormData();
    formData.append("id_planta", idPlanta);
    formData.append("id_purificador", id);
    formData.append("fecha", startDate.toLocaleDateString("en-US"));
    formData.append(
      "fechaFin",
      `${endDate.toLocaleDateString("en-US")} ${endDate.toLocaleTimeString("en-US")}`
    );
    fetch(apis.obtainGraphWithMult, {
      method: "POST",
      headers: {
        "Id-User": user.id_user,
        "Token": user.token
      },
      body: formData,
      signal: signal
    })
      .then((res) => res.json())
      .then((json) => {
        //console.log("Funcionamiento planta=>", json);
        setDatosFuncionamientoPlanta(json);
      });
  };

  // Estandarizable => se necesita definir bien como se hereda tipo de grafico (variable continuo/discreto)
  const loadGraficoParametros = ({ id, nombre, categorical, signal }) => {
    setLoadingDatosVariable(true);
    setSelected(id);
    setCategoricalGraph(categorical);
    document
      .getElementById("refGraficos")
      .scrollIntoView({ behavior: "smooth", block: "center" });

    const formData = new FormData();
    formData.append("id_planta", idPlanta);
    formData.append("id_purificador", id);
    formData.append("fecha", new Date(startDate).toLocaleDateString("en-US"));
    formData.append(
      "fechaFin",
      `${endDate.toLocaleDateString("en-US")} ${endDate.toLocaleTimeString("en-US")}`
    );

    fetch(apis.obtainGraphWithMult, {
      method: "POST",
      headers: {
        "Id-User": user.id_user,
        "Token": user.token
      },
      body: formData,
      signal: signal
    })
      .then((res) => res.json())
      .then((json) => {
        if (categorical) {
          const object = { id: 0, data: [], nombre: nombre };
          object.id = id;
          object.data = json;
          setDatosGraficoMonitoreoCategoricos(object);
        } else {
          setDatosGraficoMonitoreoContinuos(json);
        }
        setTitulo(nombre);
        setVariableSeleccionada(true);
        setLoadingDatosVariable(false);
      });
  };

  // Estandarizable
  const getAlarm = ({ signal }) => {
    const formData = new FormData();
    formData.append("idPlanta", idPlanta);
    fetch(apis.getAlarm, {
      method: "POST",
      headers: {
        "Id-User": user.id_user,
        "Token": user.token
      },
      body: formData,
      signal: signal
    })
      .then((res) => {
        if (!res.ok) {
          throw Error(res.status);
        }
        return res.json();
      })
      .then((json) => {
        if (json.length > 0) {
          setUmbrales(json[0]);
        }
      });
  };

  // Estandarizable
  const ModalSaveAlarm = ({ dataSave, signal }) => {
    //console.log(dataSave);
    if (
      Number(dataSave.max) - Number(dataSave.min) !== 0 ||
      (Number(dataSave.max) === 0 && Number(dataSave.min) === 0)
    ) {
      const formData = new FormData();
      formData.append("idPlanta", idPlanta);
      formData.append("id_user", user.id_user);
      fetch(apis.setScadaAlarm, {
        method: "POST",
        headers: {
          Id: idAlarma,
          Max: dataSave.max,
          Min: dataSave.min,
          "Id-User": user.id_user,
          "Token": user.token
        },
        body: formData,
        signal: signal
      })
        .then((res) => {
          if (Number(res.status) === 201) {
            getAlarm({ signal });
          } else {
            console.log("Datos no actualizados");
          }
        })
        .catch((e) => console.log("error", e));
    } else {
      setShowAlert(true);
    }
  };

  // Estandarizable
  const dateHandleChange = (fechaInicio, fechaFin) => {
    loadFuncionamientoPlanta(1);
    loadGraficoParametros(selected, titulo, categoricalGraph);
  };

  const onRangosGuardados = (res) => {
    if (res.ok) {
      loadGraficoParametros(selected, titulo, categoricalGraph);
    }
    setShowModalRangoGrafico(false);
    setShowAlertRangos(true);
    setAlertRangos(res);
  };

  const onChangeRangos = (rangos) => {
    settimelineYMin(rangos.min || null);
    settimelineYMax(rangos.max || null);
  };

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    insertarVisita({ signal });
    loadScada({ signal });
    loadFuncionamientoPlanta(1, signal);
    getAlarm({ signal });

    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (umbrales !== undefined) {
      const listaDatosAlarmas = [];
      listaIdAlarmas.forEach((idItem) => {
        const min = umbrales[`mi${idItem.toString()}`];
        const max = umbrales[`ma${idItem.toString()}`];
        listaDatosAlarmas.push({
          id: idItem,
          min: min,
          max: max
        });
      });
      setDatosAlarmas(listaDatosAlarmas);
    }
  }, [umbrales]);

  return (
    <>
      <h1
        style={{
          /* marginBottom:"10px", marginLeft:"10px" ,  */ color: "#303D48"
        }}
        className="card-header-title font-size-lg font-weight-bold text-uppercase">
        Planta Adquim
      </h1>
      <div>
        <Breadcrumb /* style={{marginLeft:"10px"}} */ className="Breadcrumb">
          <BreadcrumbItem>IdA</BreadcrumbItem>
          <BreadcrumbItem>Plantas</BreadcrumbItem>
          <BreadcrumbItem>Adquim</BreadcrumbItem>
          <BreadcrumbItem active>SCADA</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        lg={12}>
        <Tarjetita
          name="P. Entrada Pre-tratamiento"
          value={datosScada.PT009 / 10}
          selected={Number(selected)}
          number={2}
          unit="bar"
          clickMe={loadGraficoParametros}
          size="medium-tarjeta">
          {" "}
        </Tarjetita>
        <Tarjetita
          name="ORP Osmosis"
          value={datosScada.AE016 / 10}
          selected={Number(selected)}
          max={umbrales.ma3}
          min={umbrales.mi3}
          number={3}
          unit="mV"
          clickMe={loadGraficoParametros}
          size="medium-tarjeta">
          {" "}
        </Tarjetita>
        <Tarjetita
          number={5}
          name="Presion Osmosis"
          value={datosScada.PT017 / 10}
          selected={Number(selected)}
          max={umbrales.ma5}
          min={umbrales.mi5}
          unit="bar"
          clickMe={loadGraficoParametros}
          size="medium-tarjeta">
          {" "}
        </Tarjetita>
        <Tarjetita
          number={6}
          name="Presión Rechazo"
          value={datosScada.PT021 / 10}
          selected={Number(selected)}
          max={umbrales.ma6}
          min={umbrales.mi6}
          unit="bar"
          clickMe={loadGraficoParametros}
          size="medium-tarjeta">
          {" "}
        </Tarjetita>
        <Tarjetita
          number={7}
          name="Caudal Alimentación"
          value={datosScada.FE006 / 10}
          selected={Number(selected)}
          max={umbrales.ma7}
          min={umbrales.mi7}
          unit="m³/hr"
          clickMe={loadGraficoParametros}
          size="medium-tarjeta">
          {" "}
        </Tarjetita>
        <Tarjetita
          number={8}
          name="Caudal Permeado"
          value={datosScada.FE008 / 10}
          selected={Number(selected)}
          max={umbrales.ma8}
          min={umbrales.mi8}
          unit="m³/hr"
          clickMe={loadGraficoParametros}
          size="medium-tarjeta">
          {" "}
        </Tarjetita>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        clickMe={loadGraficoParametros}
        size="medium-tarjeta">
        <Tarjetita
          number={9}
          name="E.C. Alimentación"
          value={datosScada.AE005 / 10}
          selected={Number(selected)}
          max={umbrales.ma9}
          min={umbrales.mi9}
          unit="μS/cm"
          clickMe={loadGraficoParametros}
          size="medium-tarjeta">
          {" "}
        </Tarjetita>
        <Tarjetita
          number={10}
          name="E.C. Producto"
          value={datosScada.AE007 / 10}
          selected={Number(selected)}
          max={umbrales.ma10}
          min={umbrales.mi10}
          unit="μS/cm"
          clickMe={loadGraficoParametros}
          size="medium-tarjeta">
          {" "}
        </Tarjetita>
        <Tarjetita
          number={13}
          name="Temperatura"
          value={datosScada.temperatura / 10}
          selected={Number(selected)}
          max={umbrales.ma13}
          min={umbrales.mi13}
          unit="°C"
          clickMe={loadGraficoParametros}
          size="medium-tarjeta">
          {" "}
        </Tarjetita>
        <Tarjetita
          number={11}
          name="Hipoclorito"
          value={getEstadoDispositivo(datosScada.P002)}
          selected={Number(selected)}
          clickMe={loadGraficoParametros}
          size="medium-tarjeta"
          categorical={true}
        />
        <Tarjetita
          number={12}
          name="Metabisulfito"
          value={getEstadoDispositivo(datosScada.P003)}
          selected={Number(selected)}
          clickMe={loadGraficoParametros}
          size="medium-tarjeta"
          categorical={true}
        />
        <Tarjetita
          number={17}
          name="Hidróxido de Sodio"
          value={getEstadoDispositivo(datosScada.P007)}
          selected={Number(selected)}
          clickMe={loadGraficoParametros}
          size="medium-tarjeta"
          categorical={true}
        />
      </Grid>

      <Card className="mb-3">
        <ScadaAdquim
          datosScada={datosScada}
          datosAlarmas={datosAlarmas}
          loading={loading}
          selected={Number(selected)}
          loadGrafico={loadGraficoParametros}
          onClickAlarma={onClickAlarma}
        />
      </Card>

      <Card className="mb-3">
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-end">
          <Grid item>
            <div className="date-range font-size-md">
              <div className="date-text font-weight-bold">Fecha Inicio</div>

              <DatePicker2
                value={startDate}
                onChange={(cambio) => {
                  setStartDate(cambio);
                }}
                valueFormat={{
                  month: "numeric",
                  year: "numeric",
                  day: "numeric"
                }}
                calendarProps={{
                  min: new Date(2020, 2, 1),
                  max: new Date(),
                  views: ["month"]
                }}
                messages={{
                  dateButton: "Seleccionar fecha",
                  moveBack: "",
                  moveForward: "",
                  moveToday: "Hoy"
                }}
              />
            </div>
            <div className="date-range font-size-md">
              <div className="date-text font-weight-bold">Fecha Fin</div>

              <DatePicker2
                value={endDate}
                onChange={(cambio) => {
                  const fechaHoy = new Date();
                  if (
                    cambio.toLocaleDateString("en-US") !==
                    fechaHoy.toLocaleDateString("en-US")
                  ) {
                    cambio.setHours(23);
                    cambio.setMinutes(59);
                    cambio.setSeconds(59);
                  } else {
                    cambio.setHours(fechaHoy.getHours());
                    cambio.setMinutes(fechaHoy.getMinutes());
                    cambio.setSeconds(fechaHoy.getSeconds());
                  }
                  setEndDate(cambio);
                }}
                valueFormat={{
                  month: "numeric",
                  year: "numeric",
                  day: "numeric"
                }}
                calendarProps={{
                  min: new Date(2020, 2, 1),
                  max: new Date(),
                  views: ["month"]
                }}
                messages={{
                  dateButton: "Seleccionar fecha",
                  moveBack: "",
                  moveForward: "",
                  moveToday: "Hoy"
                }}
              />
            </div>
          </Grid>
          <Grid item>
            <div className="titles">
              <Button
                onClick={() => {
                  dateHandleChange(startDate, endDate);
                }}
                style={{ marginBottom: "4px" }}
                color="info">
                Buscar datos
              </Button>
            </div>
          </Grid>
          <Grid item>
            <div className="titles">
              <Button
                onClick={() => {
                  exportarDatosScada();
                }}
                style={{ marginBottom: "4px" }}
                color="info"
                disabled={loadingExport}>
                Exportar datos
              </Button>
            </div>
          </Grid>
        </Grid>
      </Card>

      <Card className="mb-3">
        <CardHeader className="card-header-tab">
          <Grid
            container
            justifyContent="space-between"
            alignItems="center">
            <div
              id="refGraficos"
              className="card-header-title font-size-md font-weight-bold">
              {titulo}
              {loadingDatosVariable && (
                <CircularProgress
                  size={25}
                  style={{ margin: "0px 10px", color: "#2f4554" }}
                />
              )}
            </div>
            {variableSeleccionada &&
              !categoricalGraph &&
              Number(user.perfil) !== 7 && (
                <IconoOpciones
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setShowModalRangoGrafico(true);
                  }}
                />
              )}
          </Grid>
        </CardHeader>
        <CardBody className="card-body-tab">
          {variableSeleccionada ? (
            categoricalGraph ? (
              <BarGraphLader
                data={datosGraficoMonitoreoCategoricos}
                fechaInicio={startDate}
                fechaFin={endDate}
              />
            ) : (
              <Timeline
                nombre={titulo}
                data={datosGraficoMonitoreoContinuos}
                decimal={timelineDecimal}
                yMin={timelineYMin}
                yMax={timelineYMax}
              />
            )
          ) : (
            "No se ha seleccionado ninguna tarjeta o dispositivo"
          )}
        </CardBody>
      </Card>

      <Card className="mb-3">
        <CardHeader className="card-header-tab">
          <div className="card-header-title font-size-md font-weight-bold">
            Funcionamiento de la planta
          </div>
        </CardHeader>
        <CardBody className="card-body-tab">
          <BarGraph
            data={datosFuncionamientoPlanta}
            fecha={startDate}
            fechaFin={endDate}
          />
        </CardBody>
      </Card>

      <div
        className="scrollTop"
        onClick={scrollTop}
        style={{ display: showScroll ? "flex" : "none" }}>
        <Row>
          <Col>
            <i
              className="color-icono pe-7s-angle-up"
              style={{
                fontSize: "50px",
                fontWeight: "500",
                borderRadius: "50px",
                marginRight: "30px"
              }}
            />
          </Col>
        </Row>
      </div>

      <CustomModal
        data={modalData}
        onClickSaveAlarm={ModalSaveAlarm}
      />

      <SweetAlert
        title="Atención"
        confirmButtonColor="#353a40"
        confirmButtonText="Aceptar"
        show={showAlert}
        text={"El valor mínimo y máximo no puede ser el mismo"}
        button="Coolio"
        onConfirm={() => setShowAlert(false)}
      />

      <ModalRangoGraficos
        mostrar={showModalRangoGrafico}
        onGuardar={(res) => {
          onRangosGuardados(res);
        }}
        onHide={setShowModalRangoGrafico}
        nombreVar={titulo}
        idPlanta={idPlanta}
        idVar={selected}
        onChangeRangos={onChangeRangos}
      />

      <SweetAlert
        title="Actualización de datos"
        confirmButtonColor="#353a40"
        confirmButtonText="Aceptar"
        show={showAlertRangos}
        text={alertRangos.message}
        button="Coolio"
        onConfirm={() => setShowAlertRangos(false)}
      />
    </>
  );
};

export default Adquim;

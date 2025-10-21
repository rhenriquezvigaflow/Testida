import React, { useEffect, Fragment, useState } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Timeline from "../Timeline.js";
import ScadaSantaTeresa from "./ScadaSantaTeresa";
import "../popup.css";
import "react-datepicker/dist/react-datepicker.css";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import BarGraph from "../BarGraph";
import Tarjetita from "../Tarjetita.js";
import "../../../../commons/styles/pages.styles.css";
import DatePicker2 from "react-widgets/DatePicker";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row
} from "reactstrap";
import UseContext from "../../../../Layout/AppMain/UserContext";
import apis from "../../../../config/apiStore";
import CustomModal from "../Modal";
import "../../../../commons/styles/react-widgets-styles.css";
import { Grid } from "@material-ui/core";
import SweetAlert from "sweetalert-react/lib/SweetAlert";
import formatearFechaDDMMYY from "../../../../commons/functions/FormatearFechaDDMMYY";
import sumarDias from "../../../../commons/functions/sumarDias";

import { alarmasDemo, dataScadaDemo, getVariableDemo } from "./responses";

function SantaTeresa() {
  const [modalData, setmodalData] = useState();
  const [id_alarm, setid_alarm] = useState();
  const user = React.useContext(UseContext);
  const [barGraphData, setbarGraphData] = useState([]);
  const [timelineData, settimelineData] = useState([]);
  const [startDate, setStartDate] = useState(new Date("2023-03-06 00:00:00"));
  const [endDate, setEndDate] = useState(new Date("2023-03-13 23:59:59"));
  //
  const [titulo, settitulo] = useState("Variable Monitoreada");
  const [selected, setselected] = useState(-1);
  const [timelineYMax, settimelineYMax] = useState(null);
  const [timelineDecimal, settimelineDecimal] = useState(null);
  const [umbrales, setumbrales] = useState({
    mi0: "0",
    ma0: "0",
    mi1: "10",
    ma1: "100",
    mi2: "0",
    ma2: "0",
    mi3: "12",
    ma3: "23",
    mi4: "0",
    ma4: "0",
    mi5: "0",
    ma5: "0",
    mi6: "0",
    ma6: "0",
    mi7: "0",
    ma7: "0",
    mi8: "0",
    ma8: "0",
    mi9: "0",
    ma9: "0",
    mi10: "0",
    ma10: "0",
    mi11: "0",
    ma11: "0",
    mi12: "3",
    ma12: "4",
    mi13: "10",
    ma13: "40",
    mi14: "0",
    ma14: "0",
    mi15: "0",
    ma15: "0",
    mi16: "0",
    ma16: "0",
    mi17: "0",
    ma17: "0",
    mi18: "0",
    ma18: "0",
    mi19: "0",
    ma19: "0",
    mi20: "0",
    ma20: "0"
  });
  const [DP0, setDP0] = useState("-"); //data 0
  const [EPO, setEPO] = useState("-"); //data 1 //estado de la planta
  const [PT203, setPT203] = useState("-"); // data 2 /10
  const [PT239, setPT239] = useState("-"); // data 3 /10
  const [PT219, setPT219] = useState("-"); //data 4 /10
  const [PT223, setPT223] = useState("-"); //data 5 /10
  const [PT234, setPT234] = useState("-"); //data 6 /10
  const [FIT215, setFIT215] = useState("-"); // data 7 /10
  const [FIT227, setFIT227] = useState("-"); // data 8 /10
  const [AE217, setAE217] = useState("-"); //data 9
  const [AE228, setAE228] = useState("-"); //data 10
  const [AE235, setAE235] = useState("-"); // data 11
  const [RPRO, setRPRO] = useState("-"); //data 12 /10
  const [TE230, setTE230] = useState("-"); //data 13
  const [DP1, setDP1] = useState("-"); //data 14
  const [LSL302, setLSL302] = useState("-"); //data 15
  const [P002, setP002] = useState("-"); //data 16
  const [P003, setP003] = useState("-"); //data 17
  const [P004, setP004] = useState("-"); //data 18
  const [LSL306, setLSL306] = useState("-"); //cambiar el 1 por el 20
  const [iscon, setiscon] = useState(-1);
  const [con, setcon] = useState("Consultando");
  const [loading, setLoading] = useState(false);
  const listaIdAlarmas = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 20];
  const [datosAlarmas, setDatosAlarmas] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

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

  useEffect(() => {
    loadScada();
    getAlarm();
    loadBarGraph(startDate, endDate);
    /* loadTimeline(12, "Recuperacion RO"); */
    const interval = setInterval(() => {
      loadScada();
    }, 600000);
    return () => clearInterval(interval);
  }, []);

  const exportDataOnClick = () => {
    const fileName = `Demo-${formatearFechaDDMMYY(startDate)}-${formatearFechaDDMMYY(endDate)}.xls`;
    const uri = `${apis.exportData}?id_planta=10&&fechainicio=${startDate.toLocaleDateString("en-US")}&&fechafin=${endDate.toLocaleDateString("en-US")}`;
    fetch(uri, {
      method: "GET",
      headers: {
        "Id-User": user.id_user,
        "Token": user.token
      },
      credentials: "include"
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
      .catch(() => {});

    /*     window.location.href =
      apis.exportData+"?fechainicio=" +
      startDate.toLocaleDateString("en-US") + 
      "&&fechafin=" + 
      endDate.toLocaleDateString("en-US");
  } */
  };
  const loadScada = () => {
    dataScadaDemo.map((x) => {
      setDP0(x.d0); //data 0
      setEPO(Number(x.d1)); //data 1 //estado de la planta
      setPT203(x.d2); // data 2 /10
      setPT239(x.d3); // data 3 /10
      setPT219(x.d4); //data 4 /10
      setPT223(x.d5); //data 5 /10
      setPT234(x.d6); //data 6 /10
      setFIT215(x.d7); // data 7 /10
      setFIT227(x.d8); // data 8 /10
      setAE217(x.d9); //data 9
      setAE228(x.d10); //data 10
      setAE235(x.d11); // data 11
      setRPRO(x.d12); //data 12 /10
      setTE230(x.d13); //data 13
      setDP1(x.d14); //data 14
      setLSL302(Number(x.d15)); //data 15
      setP002(Number(x.d16)); //data 16
      setP003(Number(x.d17)); //data 17
      setP004(Number(x.d18)); //data 18
      setLSL306(Number(x.d19)); //cambiar el 1 por el 20
      setiscon(x.con);
      setcon(getStringConection(Number(x.con)));
      setEPO(getEPO(Number(x.d1)));
    });
  };

  const getStringConection = (id) => {
    try {
      const stringConection = ["Desconectada", "En línea"];
      return stringConection[id];
    } catch (e) {
      return "";
    }
  };

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

  const loadTimeline = (id, nombre) => {
    document
      .getElementById("refGraficos")
      .scrollIntoView({ behavior: "smooth", block: "center" });
    if (
      Number(id) === 9 ||
      Number(id) === 10 ||
      Number(id) === 11 ||
      Number(id) === 1
    )
      settimelineDecimal(false);
    else settimelineDecimal(true);
    let yMax;
    if (id === 0) yMax = 2;
    else yMax = null;
    setselected(id);

    settimelineYMax(yMax);
    settimelineData(getVariableDemo(id));
    settitulo(nombre);
  };

  const loadBarGraph = () => {
    setbarGraphData(getVariableDemo(1));
  };

  const getAlarm = () => {
    setumbrales(alarmasDemo[0]);
  };

  const ModalNotification = (id, nombre) => {
    if (
      Number(user.perfil) === 1 ||
      Number(user.perfil) === 5 ||
      Number(user.perfil) === 2
    ) {
      const min = umbrales[`mi${id.toString()}`];
      const max = umbrales[`ma${id.toString()}`];
      let unit = "";
      switch (Number(id)) {
        case 1:
          unit = "";
          break;
        case 0:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 14:
          unit = "bar";
          break;
        case 7:
        case 8:
          unit = "m³/hr";
          break;
        case 9:
        case 10:
        case 11:
          unit = "µS/cm";
          break;
        case 12:
          unit = "%";
          break;
        case 13:
          unit = "ºC";
          break;
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
          break;
        default:
        //console.log("ningun caso");
      }

      setid_alarm(id);

      setmodalData({
        name: nombre,
        min: min,
        max: max,
        unit: unit
      });
    }
  };

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

  const cardStylefs = {
    padding: "0.1vw",
    paddingBottom: "0.2vw"
  };

  const cardStyle = {
    paddingLeft: "4px",
    paddingRight: "4px"
  };

  return (
    <Fragment>
      <h1
        style={{ marginBottom: "10px", marginLeft: "10px", color: "#303D48" }}
        className="card-header-title font-size-lg font-weight-bold text-uppercase">
        Planta Demo
      </h1>
      <div>
        <Breadcrumb
          style={{ marginLeft: "10px" }}
          className="Breadcrumb">
          <BreadcrumbItem>
            <a /* href="#" */>IdA</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a /* href="#" */>Scadas</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Demo</BreadcrumbItem>
        </Breadcrumb>
      </div>

      {/* <Col sm="12" md="6" lg="4" xl="3" style={cardStyle}>
            <Card
              className={
                "widget-chart widget-chart2  mb-3 px-3 card-btm-border card-shadow-primary" +
                (iscon
                  ? " border-success"
                  : " border-warning")
              }
              style={{
                background: "#ffffff",
                margin: "0px",
                minWidth:"260px",
                minHeight: "160px"
              }}
            >
              <div className="widget-chat-wrapper-outer align-items-center">
                <div className="widget-chart-content">
                  <div className="widget-title opacity-5 text-uppercase">
                    Conectividad
                  </div>
                  <hr />
                  <div className="widget-numbers mt-3 fsize-4 mb-0 w-100">
                    <div className="widget-chart-flex align-items-center">
                      <div>{con}</div>
                      <div className="ml-auto">
                        <div
                          style={{
                            marginBottom: 39,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Col> */}

      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        lg={12}
        style={{ padding: "0px 15px" }}>
        <Tarjetita
          name="Estado R.O"
          value={EPO}
          selected={Number(selected)}
          number={1}
          clickMe={loadTimeline}
          size="medium-tarjeta">
          {" "}
        </Tarjetita>
        <Tarjetita
          name="Recuperación RO"
          value={RPRO}
          selected={Number(selected)}
          max={umbrales.ma12}
          min={umbrales.mi12}
          number={12}
          unit="%"
          clickMe={loadTimeline}
          size="medium-tarjeta">
          {" "}
        </Tarjetita>
        <Tarjetita
          number={0}
          name="Δ P PRE-Tratamiento"
          value={DP0}
          selected={Number(selected)}
          max={umbrales.ma0}
          min={umbrales.mi0}
          unit="bar"
          clickMe={loadTimeline}
          size="medium-tarjeta">
          {" "}
        </Tarjetita>
        <Tarjetita
          number={14}
          name="Δ P F. Cartucho"
          value={DP1}
          selected={Number(selected)}
          max={umbrales.ma14}
          min={umbrales.mi14}
          unit="bar"
          clickMe={loadTimeline}
          size="medium-tarjeta">
          {" "}
        </Tarjetita>
        <Tarjetita
          number={5}
          name="Presion ósmosis"
          value={PT223}
          selected={Number(selected)}
          max={umbrales.ma5}
          min={umbrales.mi5}
          unit="bar"
          clickMe={loadTimeline}
          size="medium-tarjeta">
          {" "}
        </Tarjetita>
        <Tarjetita
          number={7}
          name="Caudal Alimentación"
          value={FIT215}
          selected={Number(selected)}
          max={umbrales.ma7}
          min={umbrales.mi7}
          unit="m³/hr"
          clickMe={loadTimeline}
          size="medium-tarjeta">
          {" "}
        </Tarjetita>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ padding: "0px 15px" }}
        size="medium-tarjeta">
        <Tarjetita
          number={20}
          name="Caudal Producto"
          value={FIT215 - FIT227 === 0 ? 0 : (FIT215 - FIT227).toFixed(1)}
          selected={Number(selected)}
          max={umbrales.ma20}
          min={umbrales.mi20}
          unit="m³/hr"
          clickMe={loadTimeline}
          size="medium-tarjeta">
          {" "}
        </Tarjetita>
        <Tarjetita
          number={8}
          name="Caudal Rechazo"
          value={FIT227}
          selected={Number(selected)}
          max={umbrales.ma8}
          min={umbrales.mi8}
          unit="m³/hr"
          clickMe={loadTimeline}
          size="medium-tarjeta">
          {" "}
        </Tarjetita>
        <Tarjetita
          number={9}
          name="E. C. Alimentación"
          value={AE217}
          selected={Number(selected)}
          max={umbrales.ma9}
          min={umbrales.mi9}
          unit="µS/cm"
          clickMe={loadTimeline}
          size="medium-tarjeta">
          {" "}
        </Tarjetita>
        <Tarjetita
          number={10}
          name="E. C. Producto"
          value={AE228}
          selected={Number(selected)}
          max={umbrales.ma10}
          min={umbrales.mi10}
          unit="µS/cm"
          clickMe={loadTimeline}
          size="medium-tarjeta"
        />
        <Tarjetita
          number={11}
          name="E. C. Mezcla"
          value={AE235}
          selected={Number(selected)}
          max={umbrales.ma11}
          min={umbrales.mi11}
          unit="µS/cm"
          clickMe={loadTimeline}
          size="medium-tarjeta"
        />
      </Grid>
      {/* <Row>

        </Row> */}
      <CustomModal
        data={modalData}
        onClickSaveAlarm={() => {}}
      />
      <ReactCSSTransitionGroup
        component="div"
        transitionName="TabsAnimation"
        transitionAppear={true}
        transitionAppearTimeout={0}
        transitionEnter={false}
        transitionLeave={false}>
        <div>
          <Container fluid>
            <div>
              <Row>
                <Col
                  sm="12"
                  md="12"
                  lg="12"
                  xl="12">
                  <Card className="mb-3">
                    <CardBody className="card-body-tab">
                      <ScadaSantaTeresa
                        pt203={PT203}
                        pt239={PT239}
                        pt219={PT219}
                        pt223={PT223}
                        pt234={PT234}
                        fit215={FIT215}
                        fit227={FIT227}
                        ae217={AE217}
                        ae228={AE228}
                        ae235={AE235}
                        rpro={RPRO}
                        te230={TE230}
                        dp0={DP0}
                        dp1={DP1}
                        lsl302={LSL302}
                        p002={P002}
                        p003={P003}
                        p004={P004}
                        con={iscon}
                        datosAlarmas={datosAlarmas}
                        loading={loading}
                        loadgraphs={loadTimeline}
                        notificacion={ModalNotification}
                        selected={selected}
                        umbrales={umbrales}
                      />
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col
                  sm="12"
                  md="12"
                  lg="12">
                  <Card className="mb-3">
                    <Grid
                      container
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="flex-end">
                      <Grid item>
                        icker
                        <div className="date-range font-size-md">
                          <div className="date-text font-weight-bold">
                            Fecha Inicio
                          </div>

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
                            disabled
                          />
                        </div>
                        <div className="date-range font-size-md">
                          <div className="date-text font-weight-bold">
                            Fecha Fin
                          </div>

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
                            disabled
                          />
                        </div>
                      </Grid>
                      <Grid item>
                        <div className="titles">
                          <Button
                            onClick={() => {}}
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
                              exportDataOnClick();
                            }}
                            style={{ marginBottom: "4px" }}
                            color="info">
                            Exportar datos
                          </Button>
                        </div>
                      </Grid>
                    </Grid>
                  </Card>
                </Col>
              </Row>

              <Row>
                <Col
                  sm="12"
                  md="12"
                  lg="12">
                  <Card className="mb-3">
                    <CardHeader className="card-header-tab">
                      <div
                        id="refGraficos"
                        className="card-header-title font-size-md font-weight-bold">
                        {titulo}
                      </div>
                    </CardHeader>
                    <CardBody className="card-body-tab">
                      <Timeline
                        nombre={titulo}
                        data={timelineData}
                        decimal={timelineDecimal}
                        yMax={timelineYMax}
                      />
                    </CardBody>
                  </Card>
                </Col>
              </Row>

              <Row>
                <Col
                  sm="12"
                  md="12"
                  lg="12">
                  <Card className="mb-3">
                    <CardHeader className="card-header-tab">
                      <div className="card-header-title font-size-md font-weight-bold">
                        Funcionamiento de la planta
                      </div>
                    </CardHeader>
                    <CardBody className="card-body-tab">
                      <BarGraph
                        data={barGraphData}
                        fecha={startDate}
                        fechaFin={endDate}
                      />
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </ReactCSSTransitionGroup>
      <Col
        sm="12"
        md="12"
        lg="12"
        xs="12">
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
      </Col>

      <SweetAlert
        title="Atención"
        confirmButtonColor="#353a40"
        confirmButtonText="Aceptar"
        show={showAlert}
        text={"El valor mínimo y máximo no puede ser el mismo"}
        button="Coolio"
        onConfirm={() => setShowAlert(false)}
      />
    </Fragment>
  );
}
export default SantaTeresa;

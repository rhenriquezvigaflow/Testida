import React, { Component, Fragment } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import DatePicker from "react-datepicker";
import DatePicker2 from "react-widgets/DatePicker";
import UseContext from "../../../../Layout/AppMain/UserContext.js";
import Tarjetita from "../Tarjetita.js";
import "react-datepicker/dist/react-datepicker.css";
import "../../../../commons/styles/react-widgets-styles.css";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import apis from "../../../../config/apiStore.js";
import BarGraph from "../BarGraph";
import CustomModal from "../Modal";
import Tarjetitafs from "../Tarjetitafs.js";
import Timeline from "../Timeline.js";
import Fullscreen from "./Fullscreen";
import Scada from "./Scada";
import "../../../../commons/styles/pages.styles.css";
import { Grid } from "@material-ui/core";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row
} from "reactstrap";
import formatearFechaDDMMYY from "../../../../commons/functions/FormatearFechaDDMMYY";
import sumarDias from "../../../../commons/functions/sumarDias";

const cardStylefs = {
  padding: "0.1vw",
  paddingBottom: "0.2vw"
};

export default class Sealand extends Component {
  controller = new AbortController();

  componentDidMount() {
    const { signal } = this.controller;
    this.load(signal);
    this.getAlarm(signal);
    this.loadgraphactivity(this.state.startDate, this.state.endDate, signal);
    /* this.loadgraphs(21, "Recuperación"); */
    this.interval = setInterval(() => {
      this.load(signal);
      this.loadgraphactivity(this.state.startDate, this.state.endDate, signal);
    }, 60000);
    window.addEventListener("scroll", this.checkScrollTop);
  }

  componentWillUnmount() {
    this.controller.abort();
    clearInterval(this.interval);
    window.addEventListener("scroll", this.checkScrollTop);
  }

  onClick() {
    const fileName = `Sealand-${formatearFechaDDMMYY(this.state.startDate)}-${formatearFechaDDMMYY(this.state.endDate)}.xls`;
    const uri = `${apis.exportData}?id_planta=11&&fechainicio=${this.state.startDate.toLocaleDateString("en-US")}&&fechafin=${this.state.endDate.toLocaleDateString("en-US")}`;
    fetch(uri, {
      method: "GET",
      headers: {
        "Id-User": this.context.id_user,
        "Token": this.context.token
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

    /* window.location.href =
      apis.exportData +
      "?id_planta=11&&fechainicio=" +
      this.state.startDate.toLocaleDateString("en-US") + 
      "&&fechafin=" + 
      this.state.endDate.toLocaleDateString("en-US"); */
  }

  loadgraphactivity(fechaInicio, fechaFin, signal) {
    const formData = new FormData();
    formData.append("fecha", fechaInicio.toLocaleDateString("en-US"));
    formData.append(
      "fechaFin",
      `${fechaFin.toLocaleDateString("en-US")} ${fechaFin.toLocaleTimeString("en-US")}`
    );
    formData.append("id_planta", 11);
    fetch(apis.obtainGraph, {
      method: "POST",
      headers: {
        "id-purificador": 12,
        "Id-User": this.context.id_user,
        "Token": this.context.token
      },
      body: formData,
      signal: signal
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          barGraphData: json
        });
      });
  }

  load(signal) {
    const formData = new FormData();
    formData.append("idPlanta", 11);
    fetch(apis.loadScada, {
      method: "POST",
      headers: {
        "Id-User": this.context.id_user,
        "Token": this.context.token
      },
      body: formData,
      credentials: "include",
      signal: signal
    })
      .then((res) => res.json())
      .then((json) => {
        // eslint-disable-next-line array-callback-return
        json.map((x) => {
          this.setState({
            DP0: x.d0 / 10 > 6550 ? 0 : x.d0 / 10, //data 0
            DP1: x.d1 / 10, // data 1
            AE106: x.d2, // data 2
            TT106: x.d3 / 10, // datxa 3
            PT114: x.d4 / 10, // data 4
            PT118: x.d5 / 10, // data 5
            PTxxx: x.d6 / 10, // data 6
            FIT133: x.d7 / 10, // data 7
            AE129: x.d8 / 10, // data 8
            FIT107: x.d9 / 10, // data 9
            AE130: x.d10 / 10, // data 10
            AE131: x.d11 / 10, // data 11
            Ep0: x.d12, // data 12
            AE311: x.d13 / 10, //data 13
            AE307: x.d14 / 10, //data 14
            AE309: x.d15 / 10, //data 15
            AE310: x.d16 / 10, //data 16
            AE313: x.d17 / 10, //data 17
            AE312: x.d18 / 10, // data 18
            iscon: x.con
          });
          this.setState({
            con: this.getStringConection(Number(x.con)),
            EPO: this.getEPO(Number(x.d12))
          });
        });
      });
  }

  getStringConection(id) {
    try {
      const stringConection = ["DESCONECTADO", "EN LÍNEA"];
      return stringConection[id];
    } catch (e) {
      return "";
    }
  }

  getEPO(id) {
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
  }

  notificacion(id, nombre) {
    if (Number(this.context.perfil) === 5) {
      const min = this.state.umbrales[`mi${id.toString()}`];
      const max = this.state.umbrales[`ma${id.toString()}`];
      let unit = "";

      switch (Number(id)) {
        case 0:
        case 1:
        case 4:
        case 5:
        case 6:
          unit = "bar";
          break;
        case 2:
        case 8:
        case 10:
        case 11:
        case 14:
        case 16:
          unit = "µS/cm";
          break;
        case 3:
          unit = "ºC";
          break;
        case 7:
        case 9:
          unit = "m³/hr";
          break;
        case 12:
          unit = "%";
          break;
        case 13:
          unit = "NTU";
          break;
        case 15:
        case 17:
        case 18:
          unit = "pH";
          break;
        case 19:
        case 20:
          break;
        default:
          console.error("ningun caso");
      }

      this.setState({
        id_alarm: id
      });

      this.setState({
        modalData: {
          name: nombre,
          min: min,
          max: max,
          unit: unit
        }
      });
    }
  }

  loadgraphs(id, nombre, fechaInicio, fechaFin, signal) {
    this.setState({
      id_actual: id,
      nombre_actual: nombre,
      selected: id
    });

    const formData = new FormData();
    if (fechaInicio !== undefined) {
      formData.append("fecha", fechaInicio.toLocaleDateString("en-US"));
    } else {
      formData.append(
        "fecha",
        this.state.startDate.toLocaleDateString("en-US")
      );
    }
    if (fechaFin !== undefined) {
      formData.append("fechaFin", fechaFin.toLocaleDateString("en-US"));
    } else {
      formData.append(
        "fechaFin",
        this.state.endDate.toLocaleDateString("en-US")
      );
    }
    formData.append("id_planta", 11);
    fetch(apis.obtainGraph, {
      method: "POST",
      headers: {
        "id-purificador": id,
        "Id-User": this.context.id_user,
        "Token": this.context.token
      },
      body: formData,
      signal: signal
    })
      .then((res) => res.json())
      .then((json) => {
        let yMax;
        if (id === 9) yMax = 150;
        else if (id === 0) yMax = 5;
        else yMax = null;
        this.setState({
          timelineYMax: yMax,
          titulo: nombre,
          timelineData: json
        });
      });
  }

  getAlarm(signal) {
    const formData = new FormData();
    formData.append("idPlanta", 11);
    fetch(apis.getAlarm, {
      method: "POST",
      headers: {
        "Id-User": this.context.id_user,
        "Token": this.context.token
      },
      body: formData,
      signal: signal
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          umbrales: json[0]
        });
      });
  }

  ModalSaveAlarm(dataSave, signal) {
    const formData = new FormData();
    formData.append("id_user", this.state.id_user);
    fetch(apis.setAlarmSealand, {
      method: "POST",
      headers: {
        Id: this.state.id_alarm,
        Max: dataSave.max,
        Min: dataSave.min,
        "Id-User": this.context.id_user,
        "Token": this.context.token
      },
      body: formData,
      signal: signal
    });
    setTimeout(() => {
      this.getAlarm(signal);
    }, 800);
  }

  dateHandleChange(fechaInicio, fechaFin) {
    /* this.setState({
      startDate: fechaInicio,
      endDate: fechaFin
    }); */
    if (this.state.id_actual && this.state.id_actual !== -1) {
      setTimeout(() => {
        this.loadgraphs(
          this.state.id_actual,
          this.state.nombre_actual,
          fechaInicio,
          fechaFin
        );
        this.loadgraphactivity(fechaInicio, fechaFin);
      }, 800);
    }
    setTimeout(() => {
      this.loadgraphactivity(fechaInicio, fechaFin);
    }, 800);
  }

  checkScrollTop = () => {
    if (!this.state.showScroll && window.pageYOffset > 500) {
      this.setState({ showScroll: true });
    } else if (this.state.showScroll && window.pageYOffset <= 500) {
      this.setState({ showScroll: false });
    }
  };

  scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  constructor(props) {
    super(props);
    this.dateHandleChange = this.dateHandleChange.bind(this);
    this.ModalSaveAlarm = this.ModalSaveAlarm.bind(this);
    this.loadgraphs = this.loadgraphs.bind(this);
    this.notificacion = this.notificacion.bind(this);

    this.state = {
      showScroll: false,
      perfil: -1,
      id_user: 0,
      startDate: sumarDias(new Date(), -13),
      endDate: new Date(),
      titulo: "Variable Monitoreada",
      unit: "",
      timelineDecimal: true,
      selected: -1,
      DP0: "", //data 0
      DP1: "", // data 1
      AE106: "", // data 2
      TT106: "", // data 3
      PT114: "", // data 4
      PT118: "", // data 5
      PTxxx: "", // data 6
      FIT133: "", // data 7
      AE129: "", // data 8
      FIT107: "", // data 9
      AE130: "", // data 10
      AE131: "", // data 11
      EPO: "", // data 12
      AE311: "", // data 13
      AE307: "", // data 14
      AE309: "", // data 15
      AE310: "", // data 16
      AE313: "", // data 17
      AE312: "", // data 18
      barGraphData: [],
      timelineData: [],
      timelineYMax: 0,
      id_actual: -1,
      con: "Consultando",
      umbrales: {
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
      }
    };
  }

  render() {
    return (
      <Fragment>
        <h1
          style={{ marginBottom: "10px", marginLeft: "10px", color: "#303D48" }}
          className="card-header-title font-size-lg font-weight-bold text-uppercase">
          Planta Sealand
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
            <BreadcrumbItem active>Sealand</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <CustomModal
          data={this.state.modalData}
          onClickSaveAlarm={this.ModalSaveAlarm}
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
                {/* <Fullscreen>
                  <Row>
                    <Col style={cardStylefs}>
                      <Card>
                        <div
                          style={{
                            fontSize: "1.3vw",
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "0.2vw",
                          }}
                        >
                          Planta Sealand
                        </div>
                      </Card>
                    </Col>
                  </Row>

                  <Row>
                    <Tarjetitafs
                      name="Conectividad"
                      value={this.state.con}
                      number={100}
                      selected={this.state.selected}
                      clickMe={() => {}}
                    >
                      {" "}
                    </Tarjetitafs>
                    <Tarjetitafs
                      name="Estado OR"
                      value={this.state.EPO}
                      number={12}
                      selected={this.state.selected}
                      clickMe={this.loadgraphs}
                    >
                      {" "}
                    </Tarjetitafs>
                    <Tarjetitafs
                      name="ΔP AG PLUS"
                      value={this.state.DP0}
                      unit="Bar"
                      number={0}
                      selected={this.state.selected}
                      clickMe={this.loadgraphs}
                    >
                      {" "}
                    </Tarjetitafs>

                    <Tarjetitafs
                      name="Presión Entrada Membranas"
                      value={this.state.PT118}
                      unit="Bar"
                      number={5}
                      selected={this.state.selected}
                      clickMe={this.loadgraphs}
                    >
                      {" "}
                    </Tarjetitafs>

                    <Tarjetitafs
                      name="Conductividad de Salida OR"
                      value={this.state.AE129}
                      unit="mS"
                      number={8}
                      selected={this.state.selected}
                      clickMe={this.loadgraphs}
                    >
                      {" "}
                    </Tarjetitafs>

                    <Tarjetitafs
                      name="Caudal Producto"
                      value={this.state.FIT107}
                      unit="m³/h"
                      number={9}
                      selected={this.state.selected}
                      clickMe={this.loadgraphs}
                    >
                      {" "}
                    </Tarjetitafs>

                    <Tarjetitafs
                      name="Turbidez"
                      value={this.state.AE311}
                      unit="NTU"
                      number={13}
                      selected={this.state.selected}
                      clickMe={this.loadgraphs}
                    >
                      {" "}
                    </Tarjetitafs>

                    <Tarjetitafs
                      name="Conductividad Mezcla"
                      value={this.state.AE307}
                      unit="µS/cm"
                      number={14}
                      selected={this.state.selected}
                      clickMe={this.loadgraphs}
                    >
                      {" "}
                    </Tarjetitafs>

                    <Tarjetitafs
                      name="Conductividad Agua R. Sala 1"
                      value={this.state.AE309}
                      unit="µS/cm"
                      number={15}
                      selected={this.state.selected}
                      clickMe={this.loadgraphs}
                    >
                      {" "}
                    </Tarjetitafs>

                    <Tarjetitafs
                      name="Conductividad Agua R. Sala 2"
                      value={this.state.AE310}
                      unit="µS/cm"
                      number={16}
                      selected={this.state.selected}
                      clickMe={this.loadgraphs}
                    >
                      {" "}
                    </Tarjetitafs>

                    <Tarjetitafs
                      name="pH Agua Reconstituida Sala 2"
                      value={this.state.AE313}
                      unit="pH"
                      number={17}
                      selected={this.state.selected}
                      clickMe={this.loadgraphs}
                    >
                      {" "}
                    </Tarjetitafs>
                    <Tarjetitafs
                      name="pH Agua Reconstituida Sala 2"
                      value={this.state.AE313}
                      unit="pH"
                      number={18}
                      selected={this.state.selected}
                      clickMe={this.loadgraphs}
                    >
                      {" "}
                    </Tarjetitafs>
                  </Row>
                  <Row>
                    <Col sm="6" md="6" lg="6" xl="6" style={cardStylefs}>
                      <Card>
                        <Scada
                          TT106={this.state.TT106}
                          DP1={this.state.DP1}
                          PT114={this.state.PT114}
                          PT118={this.state.PT118}
                          FIT107={this.state.FIT107}
                          FIT133={this.state.FIT133}
                          AE129={this.state.AE129}
                          AE131={this.state.AE131}
                          AE130={this.state.AE130}
                          DP0={this.state.DP0}
                          PTxxx={this.state.PTxxx}
                          AE307={this.state.AE307}
                          AE311={this.state.AE311}
                          AE106={this.state.AE106}
                          AE309={this.state.AE309}
                          AE313={this.state.AE313}
                          AE312={this.state.AE312}
                          AE310={this.state.AE310}
                          umbrales={this.state.umbrales}
                          selected={this.state.selected}
                          notificacion={this.notificacion}
                          loadgraphs={this.loadgraphs}
                        />
                      </Card>
                    </Col>
                    <Col sm="6" md="6" lg="6" style={cardStylefs}>
                      <Card className="mb-3">
                        <CardHeader className="card-header-tab">
                          <Col>
                            <div className="modal-title font-size-md header-card-padding text-uppercase font-weight-bold">
                              {this.state.titulo}
                            </div>
                          </Col>
                        </CardHeader>
                        <CardBody className="card-body-tab">
                          <Timeline
                            nombre={this.state.titulo}
                            data={this.state.timelineData}
                            decimal={this.state.timelineDecimal}
                          />
                        </CardBody>
                      </Card>
                      <Card>
                        <CardHeader className="card-header-tab">
                          <Col>
                            <div className="modal-title font-size-md header-card-padding text-uppercase font-weight-bold">
                              Funcionamiento de la planta
                            </div>
                          </Col>
                        </CardHeader>
                        <CardBody className="card-body-tab">
                          <BarGraph
                            data={this.state.barGraphData}
                            fecha={this.state.startDate}
                          />
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Fullscreen> */}

                <Grid
                  container
                  direction="row"
                  justifyContent="space-evenly"
                  alignItems="center"
                  lg={12}>
                  {/* <Tarjetita
                    name="Conectividad"
                    value={this.state.con}
                    number={100}
                    selected={this.state.selected}
                    clickMe={() => {}}
                  /> */}
                  <Tarjetita
                    name="Estado OR"
                    value={this.state.EPO}
                    number={12}
                    selected={this.state.selected}
                    clickMe={this.loadgraphs}
                    size="medium-tarjeta"
                  />
                  <Tarjetita
                    name="ΔP AG PLUS"
                    value={this.state.DP0}
                    unit="Bar"
                    number={0}
                    selected={this.state.selected}
                    clickMe={this.loadgraphs}
                    size="medium-tarjeta"
                  />

                  <Tarjetita
                    name="P Entrada Membranas"
                    value={this.state.PT118}
                    unit="Bar"
                    number={5}
                    selected={this.state.selected}
                    clickMe={this.loadgraphs}
                    size="medium-tarjeta"
                  />

                  <Tarjetita
                    name="Conductividad de Salida OR"
                    value={this.state.AE129}
                    unit="µS/cm"
                    number={8}
                    selected={this.state.selected}
                    clickMe={this.loadgraphs}
                    size="medium-tarjeta"
                  />

                  <Tarjetita
                    name="Caudal Producto"
                    value={this.state.FIT107}
                    unit="m³/h"
                    number={9}
                    selected={this.state.selected}
                    clickMe={this.loadgraphs}
                    size="medium-tarjeta"
                  />

                  <Tarjetita
                    name="Cloro libre Producto"
                    value={this.state.AE130}
                    unit="ppm"
                    number={10}
                    selected={this.state.selected}
                    clickMe={this.loadgraphs}
                    size="medium-tarjeta"
                  />
                </Grid>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-evenly"
                  alignItems="center"
                  lg={12}>
                  <Tarjetita
                    name="Turbidez"
                    value={this.state.AE311}
                    unit="NTU"
                    number={13}
                    selected={this.state.selected}
                    clickMe={this.loadgraphs}
                    size="medium-tarjeta"
                  />

                  <Tarjetita
                    name="Conductividad Mezcla"
                    value={this.state.AE307}
                    unit="µS/cm"
                    number={14}
                    selected={this.state.selected}
                    clickMe={this.loadgraphs}
                    size="medium-tarjeta"
                  />

                  <Tarjetita
                    name="Conductividad Agua Sala 1"
                    value={this.state.AE309}
                    unit="µS/cm"
                    number={15}
                    selected={this.state.selected}
                    clickMe={this.loadgraphs}
                    size="medium-tarjeta"
                  />

                  <Tarjetita
                    name="Conductividad Agua Sala 2"
                    value={this.state.AE310}
                    unit="µS/cm"
                    number={16}
                    selected={this.state.selected}
                    clickMe={this.loadgraphs}
                    size="medium-tarjeta"
                  />

                  <Tarjetita
                    name="pH Agua Sala 2"
                    value={this.state.AE313}
                    unit="pH"
                    number={17}
                    selected={this.state.selected}
                    clickMe={this.loadgraphs}
                    size="medium-tarjeta"
                  />

                  <Tarjetita
                    name="pH Agua Sala 2"
                    value={this.state.AE313}
                    unit="pH"
                    number={18}
                    selected={this.state.selected}
                    clickMe={this.loadgraphs}
                    size="medium-tarjeta"
                  />
                </Grid>
                <Row>
                  <Col
                    sm="12"
                    md="12"
                    lg="12"
                    xl="12">
                    <Card className="mb-3">
                      <svg>
                        <style>
                          {
                            ".stw{opacity:.0;fill:#3574e0;enable-background:new;cursor: pointer;}.pointer{cursor: pointer; hover {fill: #DA4567;}}.stb{opacity:.15;fill:#3574e0;enable-background:new;cursor: pointer;}.st0{fill:none;stroke:#35ace8;stroke-width:4;stroke-miterlimit:10}.sts{fill:#adc7f5;cursor: pointer;}.st1{fill:#fff}.st2{fill:#3574e0}.st4{fill:#00e098}.st6{fill:#35ace8}.st10{fill:#323e48}.st10b{fill:#323e48;cursor: pointer;}.st11{fill:#00a19b}.st26{fill:none;stroke:#323e48;stroke-width:4;stroke-miterlimit:10}.st27{fill:none;stroke:#e1eafa;stroke-width:4;stroke-miterlimit:10}.st38{fill:none;stroke:#323e48;stroke-width:4;stroke-miterlimit:10}.st38{opacity:.6;stroke:#ccc;stroke-width:2}.st39{fill:#f2f2f2}.st45{fill:#a2a8ad}.st46{fill:none;stroke:#fff;stroke-width:2;stroke-miterlimit:10}.st47{fill:#ccc}.st48,.st59{stroke-miterlimit:10}.st48{opacity:.5;fill:none;stroke:#b3b3b3;stroke-width:.5}.st59{fill:#fff;stroke:#35ace8;stroke-width:4}.st63{font-family:&apos;Sarabun-Regular&apos;}.st64{font-size:11px}.st65{font-size:14px}.st66{fill:#606060}.st67{font-size:17px}.st68{font-family:&apos;PTSans-Regular&apos;}.campana{fill:#3474E0;}.campana:hover{fill:#7c7c7c;}.campanaVacia{fill:#c2c2c1;}.campanaVacia:hover{fill:#7c7c7c;}.campanaDesconectada{fill:#c2c2c1;}"
                          }
                        </style>
                        <g>
                          <image
                            width={234}
                            height={121}
                            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOoAAAB5CAYAAAA3Zr2jAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABHhJREFUeNrs2nlPG0cYwOFdHxhD IJCkVyJV/f5fq0qqpjlIQsDGV2eld8Kw2PjAqKr0PNIr23jtP5B+mtn11tV26grYh8W+w6uLx1qw sJdAF61YHwy3tybQPJ3isdOKFtg80jzzYtYG23tgBc1RduO4fjz2xAo7R9qEOUszLWYWM18Va71i Fc2BHqQZpDlMM4zHgVhh50ibMG/SjNOMYsbxt2kR7GLVilpG2o8oj9KcpDlN8zyeH0XA3TjWOSts dk7ahDhJc53me5pvxVzG38dx/J1Y21vfHOkw4nyR5lWan9K8THOW5llrVQXWy1veJsSriPMizcc0 H2Iu4thxK/AfoZbb3UFE+nOa12nepPktXp+nOY7VtitU2DrUmyLUT2nep3kXu9ROdfci02zV1rcX q2mzcv6a5o+YN7GqPo/385cKFTbfAueLSKPY+l7E4jeMlnLIk3iez2sX7RW1H+eg5xHq7xHq69gG H0ekvcqFJNg21Hasp0Wkk1hpL+MxX1z6saK2LyINY+V8FdvdX+L5aWx5yyu+wG6xDqK3OiJtAv0c 56xfiljvrKhVcY56GCvnaWyBm8dnEXA/jhEp7B5rt+ioCbG52vsydrLLFsS63PrW1e3NDfm30zx5 u+sCEjxOXd1e0e1Ha83CeBIL4lG15FeVTusL8hY434nUL+J0Tgr7i7VcGMsbiw6qJTcUdZZ8QXlA LVJ40lg7xeK48hbdzpovESc8fbCrFsdqXajAf7PCLl0chQr/A0IFoQJCBaECQgWECkIFhAoIFYQK CBWECggVECoIFRAqIFQQKiBUQKggVECoIFRAqIBQQaiAUAGhglABoYJQAaECQgWhAkIFhApCBYQK CBWECggVhAoIFRAqCBUQKiBUECogVBAqIFRAqCBUQKiAUEGogFABoYJQAaGCUAGhAkIFoQJCBYQK QgWECkIFhAoIFYQKCBUQKggVECogVBAqIFQQKiBUQKggVECogFBBqIBQQaiAUIGHLYrZKNTFkgGe LtB5q7d5u7vOikjnxQgWnm4FzZ1Ni5m3m+ut+GBz8KSYafGFtsuwn1Bn0dZNmnGaUTy/F2uvFeks Dmw+cJXme5rr+JJ+sQrX/s/w6O1ubq3p7Fuay+huXMR6b0XNK+koPnSR5lOa8zSDOGYQnxEq7G4e i2LT2tfo7GOaz/F61F5Ve60t7ySKbiJ9n+YszTC+fBzP+xGqWGH3c9PcWhPoXzH/RHtX8f582da3 DLUp/CjNQbzfbH9fpDmOUG1/4XHb3klseT+keZvmzzR/p/kSvU2rFReT8tb3Oqruxt9v4vVZxCtU 2E+oV7HdbQJ9F7vYr61z1HsralXdXky6LF7n5fkkzWF8Jl/5FStsF2m5KOZz1Hw9qL3trZatqOVP M/n1tNgKH8Zq2nWOCo8+R51FkOUvLKNYTWdV63fUZbHVsWJ2I+R+TE+ksPdY2/cslDcaVdWarWtd BFuOSGG/sc6r5XcCVpuEWr5Xt54D+z1nXbSeV9uEustxwO7BrvSvAAMAH9xIixJpzQQAAAAASUVO RK5CYII="
                            transform="translate(35 32.638)"
                            overflow="visible"
                            opacity={0.2}
                          />
                          <path
                            /* className="st1" */
                            fill="#ffffff"
                            d="M256.2 151.5H47.4c-3.4 0-6.1-2.8-6.1-6.1V49.7c0-3.4 2.8-6.1 6.1-6.1h208.7c3.4 0 6.1 2.8 6.1 6.1v95.6c.1 3.4-2.7 6.2-6 6.2z"
                            transform="translate(0 -5)"
                          />
                          <g>
                            <text
                              transform="translate(65.498 77.731)"
                              className="st66 st63 st67">
                              {"Conectividad de Planta"}
                            </text>
                          </g>
                          <text
                            transform="translate(109.29 128.21)"
                            className="st66 st63 st67">
                            {this.state.con}
                          </text>
                        </g>
                        <g>
                          <image
                            width={37}
                            height={37}
                            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAACXBIWXMAAAqcAAAKnAH00t8SAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA51JREFUeNrMmAtT2kAUhbObRKD4 oFrty3b6/39Wa20tiFoeiSGPLjPndo7X3RBg7NSZM2CAu1/u3tcmiv7DP/OCNpp/DWUCrz6oZltA sweMxau810A1AW0FaHaEiT0SsBqqSLWCrNsWSzoCCYzFbw6gHl5TgEUEUkArknzW6jXTAUjD9J1e OQ2dDp0GgEvxmxIwuVPmtITW/z8CrgSc12tJB6BYwRw7nTiNoCNcZ6gcIDPot9MD3udQQWBNFyje sgN4Yw1zBr1xOnc6BeDQA7UAyL3T1GnidEuQC3iOk2IjVIyFBlj4wuk9SaCOyVMGUI/w1HrxOwCN AD+F7cajIBRvWw9xs/bMR6fPTp+cPuCaLNTD9w3uugCYeOsU2ywh0FBcVSozW6G0ly6dvgDsHYAO KcgtQVUI6GNIgBJ8fwXoggK/DkFxtqVYdH2Xb+GpS3jpTC0UUybLHVcA6CMuLa5beHAOZYD7662Q pxIYOwLUBcAuAHSCz1NV2bmix7CT4LOGMu4BsXYHsJy9lWzYOoE6Rwy9Rgzx3RtPvRMI9l6F369g a31zY2TnnIBNEigDCUGNYGxEQAlt86bWJFncRzg8kj3J3ANso2mLKQnIIcCkQPpiqEvPZJsDwB1R 5qZk09hA05W7EyPSShhom2Zulc2+svvEpg1UcvZYQjB2zxmM4VKy+cSu3WGge/Fh0jec8cxTeSrv Ln/aph5lmjYonhql6uquXm053moYtpmriv4MikdWmYkyVN8FVd5Kd/WOHpJGnaEuzaiir9iu9Rio yMBCzUJLXO8C1tB4LPbmqprPPG3mWZ3iu8rxI5mHpih2PRp9E/K22RAGc9i6xSgzBeCSPNVEZDxq qew91VhTdVDweUbH0AwQP6GvTldOvwCWce+LA0C6ruh6ZZQ3apWtK4ofBvrm9B2vP3Cd+17U5im9 Hb6tKQmiUJmVUfxMAHQFD10DbIx4zfU8FXcomDxjWZoAJPZKmjTlwDDHgjKb3wDmGjATxJfE08YZ nY89BTLQUmbmWPAW3V6OWTLK1FROJFEE7AZZN4Vdb4lJNtSXkq6JZzJsyxjDXhuULgH3NHXmodLS du6r6cjUKCjx1BAjTY9OMw3F11KNvkva6jLUHUzH/ug7svc9x3ZDR3cBYxWhE8wu3duqgI9VidB1 q1aJUKq+2ezzLCE0a+ms5Gt60uBa1ulx0D7Pp3yw+gleHWj4L/okL+rwJG/rx41/BBgAenK7ODSx b6MAAAAASUVORK5CYII="
                            transform="translate(66.073 102.711) scale(1.0482)"
                            overflow="visible"
                            opacity={0.15}
                          />
                          <path
                            className="st48"
                            d="M59.9 96.2L245.7 96.2"
                          />
                          <circle
                            className="st1"
                            cx={85.5}
                            cy={122.2}
                            r={12.1}
                          />
                          <circle
                            fill={
                              Number(this.state.iscon) === 0
                                ? "#B4002B"
                                : "rgb(0, 205, 152)"
                            }
                            cx={85.5}
                            cy={122.1}
                            r={8.9}
                          />
                        </g>
                      </svg>
                      <Scada
                        TT106={this.state.TT106}
                        DP1={this.state.DP1}
                        PT114={this.state.PT114}
                        PT118={this.state.PT118}
                        FIT107={this.state.FIT107}
                        FIT133={this.state.FIT133}
                        AE129={this.state.AE129}
                        AE131={this.state.AE131}
                        AE130={this.state.AE130}
                        DP0={this.state.DP0}
                        PTxxx={this.state.PTxxx}
                        AE307={this.state.AE307}
                        AE311={this.state.AE311}
                        AE106={this.state.AE106}
                        AE309={this.state.AE309}
                        AE313={this.state.AE313}
                        AE312={this.state.AE312}
                        AE310={this.state.AE310}
                        umbrales={this.state.umbrales}
                        selected={this.state.selected}
                        notificacion={this.notificacion}
                        loadgraphs={this.loadgraphs}
                      />
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
                          <div className="date-range font-size-md">
                            <div className="date-text font-weight-bold">
                              Fecha Inicio
                            </div>
                            <DatePicker2
                              value={this.state.startDate}
                              onChange={(cambio) => {
                                this.setState({ startDate: cambio });
                                /* this.dateHandleChange(cambio, this.state.endDate); */
                              }}
                              valueFormat={{
                                month: "numeric",
                                year: "numeric",
                                day: "numeric"
                              }}
                              calendarProps={{
                                min: new Date(2020, 4, 1),
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
                            <div className="date-text font-weight-bold">
                              Fecha Fin
                            </div>
                            <DatePicker2
                              value={this.state.endDate}
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
                                this.setState({ endDate: cambio });
                                /* this.dateHandleChange(this.state.startDate, cambio); */
                              }}
                              valueFormat={{
                                month: "numeric",
                                year: "numeric",
                                day: "numeric"
                              }}
                              calendarProps={{
                                min: new Date(2020, 4, 1),
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
                              style={{ marginBottom: "4px" }}
                              onClick={() => {
                                this.dateHandleChange(
                                  this.state.startDate,
                                  this.state.endDate
                                );
                              }}
                              color="info">
                              Buscar datos
                            </Button>
                          </div>
                        </Grid>
                        <Grid item>
                          <div className="titles">
                            <Button
                              style={{ marginBottom: "4px" }}
                              onClick={() => {
                                this.onClick();
                              }}
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
                      <CardHeader
                        className="card-header-tab"
                        title="prueba">
                        <div className="card-header-title font-size-md font-weight-bold">
                          {this.state.titulo}
                        </div>
                      </CardHeader>
                      <CardBody className="card-body-tab">
                        <AreaChartData
                          idPlanta={this.state.idPlanta}
                          column={`d${this.state.selected}`}
                          fechaInicio={this.state.startDate}
                          fechaFin={this.state.endDate}
                          nombre={this.state.titulo}
                          yMax={this.state.timelineYMax}
                          yMin={this.state.timelineYMin}
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
                          data={this.state.barGraphData}
                          fecha={this.state.startDate}
                          fechaFin={this.state.endDate}
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
            onClick={this.scrollTop}
            style={{ display: this.state.showScroll ? "flex" : "none" }}>
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
      </Fragment>
    );
  }
}
Sealand.contextType = UseContext;

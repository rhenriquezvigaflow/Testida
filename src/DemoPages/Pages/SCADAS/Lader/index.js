/* eslint-disable array-callback-return */
import * as React from "react";
import DatePicker from "react-datepicker";
import Timeline from "../Timeline.js";
import BarGraphLader from "./BarGraphLader";
import Scada from "./Scada";
import Scada2 from "./Scada2";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  UncontrolledTooltip
} from "reactstrap";
import UseContext from "../../../../Layout/AppMain/UserContext";
import apis from "../../../../config/apiStore";
import CustomModal from "../Modal";
import ModalSwitch from "../ModalSwitch";
import help from "../help.png";
import "../../../../commons/styles/pages.styles.css";
import DatePicker2 from "react-widgets/DatePicker";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import SweetAlert from "sweetalert-react/lib/SweetAlert";
import "../../../../commons/styles/react-widgets-styles.css";
import { CircularProgress, Grid } from "@material-ui/core";
import IconoOpciones from "@material-ui/icons/Settings";
import Loader from "../../../../commons/components/Loader.jsx";
import formatearFechaDDMMYY from "../../../../commons/functions/FormatearFechaDDMMYY";
import sumarDias from "../../../../commons/functions/sumarDias";
import ModalRangoGraficos from "../ModalRangoGraficos.jsx";

function Lader({ idPlanta = 12 }) {
  const [selected, setSelected] = useState(null);
  const user = React.useContext(UseContext);
  const [timelineData, setTimelineData] = useState([]);
  const [startDate, setStartDate] = useState(sumarDias(new Date(), -13));
  const [endDate, setEndDate] = useState(new Date());
  const [con, setCon] = useState("");
  const [barGraphData, setBarGraphData] = useState({ id: 0, data: [] });
  const [funcionamientoPlantaData, setFuncionamientoPlantaData] = useState({
    id: 0,
    data: []
  });
  const listaIdAlarmas = [0];
  const [datosAlarmas, setDatosAlarmas] = useState([]);

  /*
  initVar:0 no se ha seleccionado ningun dispositivo
          1: variable de tipo timeline
          2: variable de tipo BarGraph
  */
  const [initVar, setInitVar] = useState(0);
  const [dataScada, setScadaData] = useState({
    con: "-",
    d0: "-",
    d1: "-",
    d2: "-",
    d3: "-",
    d4: "-"
  });
  const [umbrales, setumbrales] = useState({
    mi0: "0",
    ma0: "0",
    mi1: "0",
    ma1: "0",
    mi2: "0",
    ma2: "0",
    mi3: "0",
    ma3: "0",
    mi4: "0",
    ma4: "0"
  });
  const [modalData, setModalData] = useState();
  const [modalSwitchData, setModalSwitchData] = useState();
  const [idAlarm, setIdAlarm] = useState();
  const [loadingDatosVariable, setLoadingDatosVariable] = useState(false);
  const [timelineYMin, settimelineYMin] = useState(null);
  const [timelineYMax, settimelineYMax] = useState(null);
  const [showModalRangoGrafico, setShowModalRangoGrafico] = useState(false);
  const [showAlertRangos, setShowAlertRangos] = useState(false);
  const [alertRangos, setAlertRangos] = useState({
    message: "",
    ok: false,
    code: 0
  });

  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 250) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 250) {
      setShowScroll(false);
    }
  };
  window.addEventListener("scroll", checkScrollTop);
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const select = (x) => {
    if (x !== 0) {
      setSelected(x);
      loadBarGraphLader(startDate, endDate, x);
    } else {
      setSelected(x);
      loadTimeline(startDate, endDate);
    }
    document
      .getElementById("refGraficos")
      .scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const ModalNotification = (id) => {
    if (Number(user.perfil) === 5 || Number(user.perfil) === 2) {
      setIdAlarm(id);
      if (id === 0)
        setModalData({
          name: getNameById(id),
          min: umbrales[`mi${id.toString()}`],
          max: umbrales[`ma${id.toString()}`],
          unit: "%"
        });
      else
        setModalSwitchData({
          name: getNameById(id),
          isToggleOn:
            Number(umbrales[`mi${id.toString()}`]) === 1 ? true : false
        });
    }
  };

  const onRangosGuardados = (res) => {
    if (res.ok) {
      select(selected);
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
    if (umbrales !== undefined) {
      const listaDatosAlarmas = [];
      for (let i = 0; i < listaIdAlarmas.length; i++) {
        listaDatosAlarmas.push({
          id: listaIdAlarmas[i],
          min: umbrales[`mi${(listaIdAlarmas[i] % 20).toString()}`],
          max: umbrales[`ma${(listaIdAlarmas[i] % 20).toString()}`]
        });
      }
      setDatosAlarmas(listaDatosAlarmas);
    }
  }, [umbrales]);

  const getAlarm = (signal) => {
    const formData = new FormData();
    formData.append("idPlanta", idPlanta);
    fetch(apis.getAlarm, {
      headers: {
        "Id-User": user.id_user,
        "Token": user.token
      },
      method: "POST",
      body: formData,
      signal: signal
    })
      .then((res) => res.json())
      .then((json) => {
        setumbrales(json[0]);
      });
  };

  /* const dateHandleChange = (date) => {
    setStartDate(date);
    if (selected) loadTimeline(date);
    loadBarGraphLader(date, selected);
  }; */

  const dateHandleChange = (fechaInicio, fechaFin) => {
    /* setStartDate(fechaInicio);
    setEndDate(fechaFin); */
    if (selected !== null) {
      if (Number(selected) !== 0) {
        loadBarGraphLader(fechaInicio, fechaFin, selected);
      } else {
        loadTimeline(fechaInicio, fechaFin);
      }
    }
    document.getElementById("refGraficos").scrollIntoView();
  };

  const getNameById = (id) => {
    switch (id) {
      case 0:
        return "Nivel Estanque Acumulación";
      case 1:
        return "Estado Bomba Recirculación";
      case 2:
        return "Estado Equipo UV";
      case 3:
        return "Estado Presostato de Bomba Impulsión";
      default:
        return "";
    }
  };

  const [loadingExport, setLoadingExport] = useState(false);

  const exportDataOnClick = () => {
    setLoadingExport(true);
    const fileName = `LaderEnergy-${formatearFechaDDMMYY(startDate)}-${formatearFechaDDMMYY(endDate)}.xls`;
    const uri = `${apis.exportData}?id_planta=${idPlanta}&&fechainicio=${startDate.toLocaleDateString("en-US")}&&fechafin=${endDate.toLocaleDateString("en-US")}`;
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
      .catch(() => {})
      .finally(() => {
        setLoadingExport(false);
      });
    /*     window.location.href =
    apis.exportData +
    "?id_planta=12&&fechainicio=" +
    startDate.toLocaleDateString("en-US") + 
    "&&fechafin=" + 
    endDate.toLocaleDateString("en-US"); */
  };

  const getStringConection = (id) => {
    try {
      const stringConection = ["Desconectada", "En línea"];
      return stringConection[id];
    } catch (e) {
      return "";
    }
  };

  const insertarVisita = (signal) => {
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

  const loadScada = (signal) => {
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
      .then((res) => res.json())
      .then((json) => {
        json.map((x) => {
          setScadaData(x);
          setCon(getStringConection(Number(x.con)));
        });
      });
  };

  const loadTimeline = (fechaInicio, fechaFin, signal) => {
    setLoadingDatosVariable(true);
    const formData = new FormData();
    /* if (inDate == null){
      formData.append("fecha", new Date(startDate).toLocaleDateString("en-US"));
    }
    else {
      formData.append("fecha", new Date(inDate).toLocaleDateString("en-US"));
    } */
    formData.append("fecha", new Date(fechaInicio).toLocaleDateString("en-US"));
    formData.append("fechaFin", new Date(fechaFin).toLocaleDateString("en-US"));
    formData.append("id_planta", idPlanta);
    formData.append("id_purificador", 0);

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
        setLoadingDatosVariable(false);
        //
        setInitVar(1);
        setTimelineData(json);
      });
  };

  const loadBarGraphLader = (fechaInicio, fechaFin, select, signal) => {
    setLoadingDatosVariable(true);
    let idSelected;
    if (select == null) idSelected = selected;
    else idSelected = select;
    const formData = new FormData();
    /* if (inDate == null){
      formData.append("fecha", new Date(startDate).toLocaleDateString("en-US"));
    }
    else{
      formData.append("fecha", new Date(inDate).toLocaleDateString("en-US"));
    } */
    formData.append("id_planta", idPlanta);
    formData.append("id_purificador", idSelected);
    formData.append("fecha", new Date(fechaInicio).toLocaleDateString("en-US"));
    formData.append(
      "fechaFin",
      `${new Date(fechaFin).toLocaleDateString("en-US")} ${fechaFin.toLocaleTimeString("en-US")}`
    );
    const object = { id: 0, data: [], nombre: "" };
    object.id = idSelected;
    object.nombre = getNameById(idSelected);

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
        setLoadingDatosVariable(false);
        setInitVar(2);
        object.data = json;
        setBarGraphData(object);
      });
  };

  const loadFuncionamientoPlanta = (signal) => {
    let idSelected;
    const formData = new FormData();
    formData.append("fecha", new Date(startDate).toLocaleDateString("en-US"));
    formData.append("id_planta", idPlanta);
    formData.append("id_purificador", 1);
    formData.append(
      "fechaFin",
      `${new Date(endDate).toLocaleDateString("en-US")} ${new Date(endDate).toLocaleTimeString("en-US")}`
    );
    const object = { id: 0, data: [], nombre: "" };
    object.id = idSelected;
    object.nombre = getNameById(idSelected);

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
        object.data = json;
        setFuncionamientoPlantaData(object);
      });
  };

  const ModalSaveAlarm = (dataSave, signal) => {
    const formData = new FormData();
    let header;
    formData.append("id_user", 0);
    formData.append("idPlanta", idPlanta);
    if (idAlarm === 0)
      header = {
        Id: idAlarm,
        Max: dataSave.max,
        Min: dataSave.min,
        "Id-User": user.id_user,
        "Token": user.token
      };
    else
      header = {
        Id: idAlarm,
        Max: dataSave.isToggleOn === true ? 1 : 0,
        Min: dataSave.isToggleOn === true ? 1 : 0,
        "Id-User": user.id_user,
        "Token": user.token
      };

    fetch(apis.setScadaAlarm, {
      method: "POST",
      headers: header,
      body: formData,
      signal: signal
    })
      .then((res) => {
        if (Number(res.status) === 201) {
          getAlarm();
          console.log("Datos actualizados");
        } else {
          console.log("Datos no actualizados");
        }
      })
      .catch((error) => console.log(error, "Error inesperado"));

    /* setTimeout(() => {
      getAlarm();
    }, 800); */
  };

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    insertarVisita(signal);
    loadScada(signal);
    loadFuncionamientoPlanta(signal);
    getAlarm(signal);

    const interval = setInterval(() => {
      loadScada(signal);
      getAlarm(signal);
    }, 600000);

    return () => {
      clearInterval(interval);
      controller.abort();
    };
  }, []);

  return (
    <div>
      <CustomModal
        data={modalData}
        onClickSaveAlarm={ModalSaveAlarm}
      />
      <ModalSwitch
        data={modalSwitchData}
        onClickSaveAlarm={ModalSaveAlarm}
      />

      <h1
        style={{ marginBottom: "10px", color: "#303D48" }}
        className="card-header-title font-size-lg font-weight-bold text-uppercase">
        Planta Lader Energy
      </h1>
      <div>
        <Breadcrumb className="Breadcrumb">
          <BreadcrumbItem>
            <a /* href="#" */>IdA</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a /* href="#" */>Scadas</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Lader Energy</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Row>
        <Col
          sm="12"
          md="12"
          lg="12"
          xl="12">
          <Card className="mb-3">
            {/* <Scada
              d0={dataScada.d0 / 10}
              d1={Number(dataScada.d1)}
              d2={Number(dataScada.d2)}
              d3={Number(dataScada.d3)}
              d4={Number(dataScada.d4)}
              selected={selected}
              notificacion={ModalNotification}
              select={select}
            /> */}

            <Scada2
              data={dataScada}
              selected={selected}
              datosAlarmas={datosAlarmas}
              notificacion={ModalNotification}
              select={select}
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
                  <div className="date-text font-weight-bold">Fecha Inicio</div>
                  <DatePicker2
                    value={startDate}
                    onChange={(cambio) => {
                      setStartDate(cambio);
                      /* dateHandleChange(cambio, endDate); */
                    }}
                    valueFormat={{
                      month: "numeric",
                      year: "numeric",
                      day: "numeric"
                    }}
                    calendarProps={{
                      min: new Date(2020, 9, 1),
                      max: new Date(),
                      views: [/* "year" */ "month"]
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
                      /* dateHandleChange(startDate, cambio); */
                    }}
                    valueFormat={{
                      month: "numeric",
                      year: "numeric",
                      day: "numeric"
                    }}
                    calendarProps={{
                      min: new Date(2020, 9, 1),
                      max: new Date(),
                      views: [/* "year" */ "month"]
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
                      loadFuncionamientoPlanta();
                    }}
                    style={{ marginBottom: "4px" }}
                    color="info">
                    Buscar datos
                  </Button>
                </div>
              </Grid>
              <Grid item>
                <Button
                  onClick={() => {
                    if (loadingExport) return;
                    exportDataOnClick();
                  }}
                  style={{
                    marginBottom: "4px",
                    cursor: loadingExport ? "not-allowed" : "pointer"
                  }}
                  color="info">
                  {loadingExport ? (
                    <div
                      style={{
                        paddingInline: "37.8px",
                        paddingBlock: "4.8px"
                      }}>
                      <Loader />
                    </div>
                  ) : (
                    "Exportar datos"
                  )}
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Col>
      </Row>
      {initVar === 1 || initVar === 0 ? (
        <Row id="refGraficos">
          <Col>
            <Card className="mb-3">
              <div>
                <div
                  className="modal-title2"
                  style={{
                    paddingTop: 20,
                    paddingLeft: 20,
                    paddingRight: 20
                  }}>
                  <h2 className="card-header-title font-size-md font-weight-bold">
                    <Grid
                      container
                      justifyContent="space-between"
                      alignItems="center">
                      <div
                        id="refGraficos"
                        className="card-header-title font-size-md font-weight-bold">
                        {"Variable Monitoreada  "}
                        <img
                          width={15}
                          style={{
                            marginBottom: 5,
                            marginLeft: 5,
                            marginRight: 10
                          }}
                          id="optimo"
                          src={help}
                          alt=""
                        />
                        <UncontrolledTooltip
                          placement="bottom"
                          target="optimo">
                          Presiona una tarjeta o dispositivo para mostrar un
                          gráfico
                        </UncontrolledTooltip>
                        {loadingDatosVariable && (
                          <CircularProgress
                            size={25}
                            style={{ margin: "0px 10px", color: "#2f4554" }}
                          />
                        )}
                      </div>
                      {selected !== null &&
                        selected == 0 &&
                        Number(user.perfil) !== 7 && (
                          <IconoOpciones
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              setShowModalRangoGrafico(true);
                            }}
                          />
                        )}
                    </Grid>
                  </h2>
                  <div>
                    {selected === 0 ? "Nivel Estanque Acumulación [%]" : ""}
                  </div>
                </div>
                <hr />
                <CardBody className="card-body-tab">
                  {initVar === 0 ? (
                    "No se ha seleccionado ninguna tarjeta o dispositivo"
                  ) : (
                    <Timeline
                      nombre={"Nivel Estanque Acumulación [%]"}
                      data={timelineData}
                      decimal={false}
                      yMin={timelineYMin}
                      yMax={timelineYMax}
                    />
                  )}
                </CardBody>
              </div>
            </Card>
          </Col>
        </Row>
      ) : (
        <Row id="refGraficos">
          <Col>
            <Card className="mb-3">
              <div
                className="modal-title2"
                style={{
                  paddingTop: 20,
                  paddingLeft: 20
                }}>
                <h2 className="card-header-title font-size-md font-weight-bold">
                  <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center">
                    <div
                      id="refGraficos"
                      className="card-header-title font-size-md font-weight-bold">
                      {"Estado de dispositivo  "}
                      <img
                        width={15}
                        style={{
                          marginBottom: 5,
                          marginLeft: 5,
                          marginRight: 10
                        }}
                        id="optimo"
                        src={help}
                        alt=""
                      />
                      <UncontrolledTooltip
                        placement="bottom"
                        target="optimo">
                        Presiona una tarjeta o dispositivo para mostrar un
                        gráfico
                      </UncontrolledTooltip>
                      {loadingDatosVariable && (
                        <CircularProgress
                          size={25}
                          style={{ margin: "0px 10px", color: "#2f4554" }}
                        />
                      )}
                    </div>
                  </Grid>
                </h2>
                <div style={{ paddingTop: 5 }}>{barGraphData.nombre}</div>
              </div>
              <hr />
              <CardBody className="card-body-tab">
                <BarGraphLader
                  data={barGraphData}
                  fechaInicio={startDate}
                  fechaFin={endDate}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      )}
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

      <Row>
        <Col>
          <Card className="mb-3">
            <CardHeader style={{ padding: "0.75rem 1.25rem" }}>
              <div className="card-header-title modal-title2 font-size-md font-weight-bold">
                Funcionamiento de la Planta{" "}
              </div>
            </CardHeader>
            <CardBody className="card-body-tab">
              <BarGraphLader
                data={funcionamientoPlantaData}
                fechaInicio={startDate}
                fechaFin={endDate}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>

      <ModalRangoGraficos
        mostrar={showModalRangoGrafico}
        onGuardar={(res) => {
          onRangosGuardados(res);
        }}
        onHide={setShowModalRangoGrafico}
        nombreVar={""}
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
    </div>
  );
}
export default Lader;

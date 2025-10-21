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
import { CircularProgress, Grid } from "@material-ui/core";
import IconoOpciones from "@material-ui/icons/Settings";
import SweetAlert from "sweetalert-react/lib/SweetAlert";
import { AreaChartData } from "../../../../commons/components/AreaChartData.jsx";
import Loader from "../../../../commons/components/Loader.jsx";
import SnackbarResetVibot from "../../../../commons/components/SnackbarResetVibot.js";
import formatearFechaDDMMYY from "../../../../commons/functions/FormatearFechaDDMMYY";
import sumarDias from "../../../../commons/functions/sumarDias";
import { useAbortController } from "../../../../commons/hooks/useAbortController.js";
import useVibotOnReset from "../../../../commons/hooks/useVibotOnReset.js";
import ModalRangoGraficos from "../ModalRangoGraficos.jsx";

function SantaTeresa({ idPlanta = 10 }) {
  const [modalData, setmodalData] = useState();
  const [id_alarm, setid_alarm] = useState();
  const user = React.useContext(UseContext);
  const [barGraphData, setbarGraphData] = useState([]);
  const [timelineData, settimelineData] = useState([]);
  const [startDate, setStartDate] = useState(sumarDias(new Date(), -13));
  const [endDate, setEndDate] = useState(new Date());
  //
  const [titulo, settitulo] = useState("Variable Monitoreada");
  const [selected, setselected] = useState(0);
  const [timelineYMax, settimelineYMax] = useState(null);
  const [timelineYMin, settimelineYMin] = useState(null);
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
  const [datosScada, setDatosScada] = useState([]);
  const listaIdAlarmas = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 20];
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
  const [variableSeleccionada, setVariableSeleccionada] = useState(false);
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

  const onRangosGuardados = (res) => {
    if (res.ok && variableSeleccionada) {
      loadTimeline(selected, titulo);
    }
    setShowModalRangoGrafico(false);
    setShowAlertRangos(true);
    setAlertRangos(res);
  };

  const onChangeRangos = (rangos) => {
    settimelineYMin(rangos.min || null);
    settimelineYMax(rangos.max || null);
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

  const [loadingExport, setLoadingExport] = useState(false);

  const createAbortController = useAbortController();

  const exportDataOnClick = () => {
    const controller = createAbortController();
    const { signal } = controller;

    setLoadingExport(true);
    const fileName = `SantaTeresa-${formatearFechaDDMMYY(startDate)}-${formatearFechaDDMMYY(endDate)}.xls`;
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
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });

    /*     window.location.href =
      apis.exportData+"?fechainicio=" +
      startDate.toLocaleDateString("en-US") + 
      "&&fechafin=" + 
      endDate.toLocaleDateString("en-US");
  } */
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
      .then((res) => {
        if (!res.ok) {
          throw Error(res.status);
        }
        return res.json();
      })
      .then((json) => {
        setDatosScada(json[0]);

        json.map((x) => {
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
        });
      })
      .catch(/* console.log("bien") */);
  };

  const getStringConection = (id) => {
    try {
      const stringConection = ["Desconectada", "En línea"];
      return stringConection[id];
    } catch (e) {
      return "";
    }
  };

  const loadTimeline = (id, nombre, signal) => {
    // Validar que el id sea válido (entre 0 y 20)
    if (id < 0 || id > 20) {
      console.warn(`ID inválido: ${id}. Debe estar entre 0 y 20.`);
      return;
    }

    setLoadingDatosVariable(true);
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

    const formData = new FormData();
    formData.append("fecha", new Date(startDate).toLocaleDateString("en-US"));
    formData.append("fechaFin", new Date(endDate).toLocaleDateString("en-US"));
    formData.append("id_planta", idPlanta);
    formData.append("id_purificador", id);
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
        settimelineYMax(yMax);
        settimelineData(json);
        settitulo(nombre);
        setVariableSeleccionada(true);
        setLoadingDatosVariable(false);
      });
  };

  const loadBarGraph = (startDate, endDate, signal) => {
    const formData = new FormData();
    formData.append("fecha", startDate.toLocaleDateString("en-US"));
    formData.append(
      "fechaFin",
      `${endDate.toLocaleDateString("en-US")} ${endDate.toLocaleTimeString("en-US")}`
    );
    formData.append("id_planta", idPlanta);
    formData.append("id_purificador", 1);
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
        setbarGraphData(json);
      });
  };

  const getAlarm = (signal) => {
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
      .then((res) => res.json())
      .then((json) => {
        setumbrales(json[0]);
      });
  };

  const dateHandleChange = (fechaInicio, fechaFin) => {
    if (selected >= 0) {
      if (
        Number(selected) === 9 ||
        Number(selected) === 10 ||
        Number(selected) === 11 ||
        Number(selected) === 1
      )
        settimelineDecimal(false);
      else settimelineDecimal(true);
      let yMax;
      if (selected === 0) yMax = 2;
      else yMax = null;
      //setselected( id);

      const formData = new FormData();
      formData.append(
        "fecha",
        new Date(fechaInicio).toLocaleDateString("en-US")
      );
      formData.append(
        "fechaFin",
        new Date(fechaFin).toLocaleDateString("en-US")
      );
      formData.append("id_planta", idPlanta);
      formData.append("id_purificador", selected);
      fetch(apis.obtainGraphWithMult, {
        method: "POST",
        headers: {
          "Id-User": user.id_user,
          "Token": user.token
        },
        body: formData
      })
        .then((res) => res.json())
        .then((json) => {
          settimelineYMax(yMax);
          settimelineData(json);
          setVariableSeleccionada(true);
        });

      const formDataBar = new FormData();
      formDataBar.append("fecha", fechaInicio.toLocaleDateString("en-US"));
      formDataBar.append("fechaFin", fechaFin.toLocaleDateString("en-US"));
      formDataBar.append("id_planta", idPlanta);
      formDataBar.append("id_purificador", 1);
      fetch(apis.obtainGraphWithMult, {
        method: "POST",
        headers: {
          "Id-User": user.id_user,
          "Token": user.token
        },
        body: formDataBar
      })
        .then((res) => res.json())
        .then((json) => {
          setbarGraphData(json);
        });

      ///////////////////////////////
    } else {
      const formData = new FormData();
      formData.append("fecha", fechaInicio.toLocaleDateString("en-US"));
      formData.append(
        "fechaFin",
        `${fechaFin.toLocaleDateString("en-US")} ${fechaFin.toLocaleTimeString("en-US")}`
      );
      formData.append("id_planta", idPlanta);
      formData.append("id_purificador", 1);
      fetch(apis.obtainGraphWithMult, {
        method: "POST",
        headers: {
          "Id-User": user.id_user,
          "Token": user.token
        },
        body: formData
      })
        .then((res) => res.json())
        .then((json) => {
          setbarGraphData(json);
        });
    }
  };
  const ModalNotification = (id, nombre) => {
    if (Number(user.perfil) === 5 || Number(user.perfil) === 2) {
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

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    insertarVisita(signal);
    loadScada(signal);
    getAlarm(signal);
    loadBarGraph(startDate, endDate, signal);

    // Asegurar que selected tenga un valor válido al inicializar
    if (selected < 0) {
      setselected(0);
    }

    const interval = setInterval(() => {
      loadScada(signal);
    }, 600000);

    return () => {
      clearInterval(interval);
      controller.abort();
    };
  }, []);

  const ModalSaveAlarm = (dataSave, signal) => {
    if (
      Number(dataSave.max) - Number(dataSave.min) !== 0 ||
      (Number(dataSave.max) === 0 && Number(dataSave.min) === 0)
    ) {
      const formData = new FormData();
      formData.append("id_user", user.id_user);
      fetch(apis.setAlarm, {
        method: "POST",
        headers: {
          Id: id_alarm,
          Max: dataSave.max,
          Min: dataSave.min,
          "Id-User": user.id_user,
          "Token": user.token
        },
        body: formData,
        signal: signal
      });
      setTimeout(() => {
        getAlarm();
      }, 800);
    } else {
      setShowAlert(true);
    }
  };

  // vibot on reset
  const { estadoRoD1, isVibotReset } = useVibotOnReset(datosScada);

  return (
    <Fragment>
      {isVibotReset && <SnackbarResetVibot />}
      <h1
        style={{ marginBottom: "10px", marginLeft: "10px", color: "#303D48" }}
        className="card-header-title font-size-lg font-weight-bold text-uppercase">
        Planta Santa Teresa
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
          <BreadcrumbItem active>Santa Teresa</BreadcrumbItem>
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
          value={estadoRoD1}
          selected={Number(selected)}
          number={1}
          clickMe={loadTimeline}
          size="medium-tarjeta"
          isVibotReset={isVibotReset}>
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
          size="medium-tarjeta"
          isVibotReset={isVibotReset}>
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
          size="medium-tarjeta"
          isVibotReset={isVibotReset}>
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
          size="medium-tarjeta"
          isVibotReset={isVibotReset}>
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
          size="medium-tarjeta"
          isVibotReset={isVibotReset}>
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
          size="medium-tarjeta"
          isVibotReset={isVibotReset}>
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
          size="medium-tarjeta"
          isVibotReset={isVibotReset}>
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
          size="medium-tarjeta"
          isVibotReset={isVibotReset}>
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
          size="medium-tarjeta"
          isVibotReset={isVibotReset}>
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
          isVibotReset={isVibotReset}
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
          isVibotReset={isVibotReset}
        />
      </Grid>
      {/* <Row>

      </Row> */}
      <CustomModal
        data={modalData}
        onClickSaveAlarm={ModalSaveAlarm}
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
              {/*                 <Fullscreen>
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
                        Planta SantaTeresa
                      </div>
                    </Card>
                  </Col>
                </Row>

                <Row>
                  <Tarjetitafs
                    name="Estado R.O"
                    value={EPO}
                    selected={Number(selected)}
                    number={1}
                    clickMe={loadTimeline}
                  >
                    {" "}
                  </Tarjetitafs>
                  <Tarjetitafs
                    name="Conectividad"
                    value={con}
                    selected={999}
                    number={9999}
                  >
                    {" "}
                  </Tarjetitafs>
                  <Tarjetitafs
                    name="Recuperación RO"
                    value={RPRO}
                    selected={Number(selected)}
                    max={umbrales.ma12}
                    min={umbrales.mi12}
                    number={12}
                    unit="%"
                    clickMe={loadTimeline}
                  >
                    {" "}
                  </Tarjetitafs>
                  <Tarjetitafs
                    number={0}
                    name="Δ P PRE-Tratamiento"
                    value={DP0}
                    selected={Number(selected)}
                    max={umbrales.ma0}
                    min={umbrales.mi0}
                    unit="bar"
                    clickMe={loadTimeline}
                  >
                    {" "}
                  </Tarjetitafs>
                  <Tarjetitafs
                    number={14}
                    name="Δ P F. Cartucho"
                    value={DP1}
                    selected={Number(selected)}
                    max={umbrales.ma14}
                    min={umbrales.mi14}
                    unit="[bar]"
                    clickMe={loadTimeline}
                  >
                    {" "}
                  </Tarjetitafs>
                  <Tarjetitafs
                    number={5}
                    name="Presion ósmosis"
                    value={PT223}
                    selected={Number(selected)}
                    max={umbrales.ma5}
                    min={umbrales.mi5}
                    unit="[bar]"
                    clickMe={loadTimeline}
                  >
                    {" "}
                  </Tarjetitafs>
                  <Tarjetitafs
                    number={7}
                    name="Caudal Alimentación"
                    value={FIT215}
                    selected={Number(selected)}
                    max={umbrales.ma7}
                    min={umbrales.mi7}
                    unit="[m³/hr]"
                    clickMe={loadTimeline}
                  />
                  <Tarjetitafs
                    number={20}
                    name="Caudal Producto"
                    value={
                      FIT215 - FIT227 === 0
                        ? 0
                        : (FIT215 - FIT227).toFixed(1)
                    }
                    selected={Number(selected)}
                    max={umbrales.ma20}
                    min={umbrales.mi20}
                    unit="[m³/hr]"
                    clickMe={loadTimeline}
                  >
                    {" "}
                  </Tarjetitafs>
                  <Tarjetitafs
                    number={8}
                    name="Caudal Rechazo"
                    value={FIT227}
                    selected={Number(selected)}
                    max={umbrales.ma8}
                    min={umbrales.mi8}
                    unit="[m³/hr]"
                    clickMe={loadTimeline}
                  >
                    {" "}
                  </Tarjetitafs>
                  <Tarjetitafs
                    number={9}
                    name="E. C. Alimentación"
                    value={AE217}
                    selected={Number(selected)}
                    max={umbrales.ma9}
                    min={umbrales.mi9}
                    unit="[µS/cm]"
                    clickMe={loadTimeline}
                  >
                    {" "}
                  </Tarjetitafs>
                  <Tarjetitafs
                    number={10}
                    name="E. C. Producto"
                    value={AE228}
                    selected={Number(selected)}
                    max={umbrales.ma10}
                    min={umbrales.mi10}
                    unit="[µS/cm]"
                    clickMe={loadTimeline}
                  >
                    {" "}
                  </Tarjetitafs>
                  <Tarjetitafs
                    number={11}
                    name="E. C. Mezcla"
                    value={AE235}
                    selected={Number(selected)}
                    max={umbrales.ma11}
                    min={umbrales.mi11}
                    unit="[µS/cm]"
                    clickMe={loadTimeline}
                  >
                    {" "}
                  </Tarjetitafs>
                </Row>

                <Row>
                  <Col sm="6" md="6" lg="6" xl="6" style={cardStylefs}>
                    <Card>
                      <Scada
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
                        loadgraph={loadTimeline}
                        notificacion={ModalNotification}
                        selected={selected}
                        umbrales={umbrales}
                      />
                    </Card>
                  </Col>
                  <Col sm="6" md="6" lg="6" style={cardStylefs}>
                    <Card className="mb-3">
                      <CardHeader className="card-header-tab">
                        <Col>
                          <div className="modal-title font-size-md header-card-padding text-uppercase font-weight-bold">
                            {titulo}
                          </div>
                        </Col>
                      </CardHeader>
                      <CardBody className="card-body-tab">
                          <Timeline
                          nombre={titulo}
                          data={timelineData}
                          decimal={timelineDecimal}
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
                          data={barGraphData}
                          fecha={startDate}
                        />
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Fullscreen> */}

              <Row>
                <Col
                  sm="12"
                  md="12"
                  lg="12"
                  xl="12">
                  <Card className="mb-3">
                    {/* <CardHeader className="card-header-tab">
                      <div className="modal-title font-size-md header-card-padding text-uppercase font-weight-bold">
                        funcionamiento actual
                      </div>
                    </CardHeader> */}
                    <CardBody className="card-body-tab">
                      {/* <Scada
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
                        loadgraphs={loadTimeline}
                        notificacion={ModalNotification}
                        selected={selected}
                        umbrales={umbrales}
                      /> */}

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
                        <div className="date-range font-size-md">
                          <div className="date-text font-weight-bold">
                            Fecha Inicio
                          </div>

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
                              /* dateHandleChange(startDate, cambio); */
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
                        {variableSeleccionada && Number(user.perfil) !== 7 && (
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
                      {!loadingDatosVariable ? (
                        variableSeleccionada ? (
                          <AreaChartData
                            idPlanta={idPlanta}
                            column={`d${selected}`}
                            fechaInicio={startDate}
                            fechaFin={endDate}
                            nombre={titulo}
                            yMax={timelineYMax}
                            yMin={timelineYMin}
                          />
                        ) : (
                          "No se ha seleccionado ninguna tarjeta o dispositivo"
                        )
                      ) : (
                        <CircularProgress
                          size={25}
                          style={{ margin: "0px 10px", color: "#2f4554" }}
                        />
                      )}
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
    </Fragment>
  );
}

export default SantaTeresa;

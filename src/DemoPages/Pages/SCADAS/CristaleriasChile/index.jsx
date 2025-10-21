import React, { useEffect, useState } from "react";
import Timeline from "../Timeline.js";
import "../popup.css";
import "react-datepicker/dist/react-datepicker.css";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import BarGraph from "../BarGraph";
import Tarjetita from "../Tarjetita.js";
import "../../../../commons/styles/pages.styles.css";
import DatePicker2 from "react-widgets/DatePicker";
import { Button, Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import UseContext from "../../../../Layoutout/AppMain/UserContext";
import apis from "../../../../config/apiStore";
import CustomModal from "../Modal";
import "../../../../commons/styles/react-widgets-styles.css";
import { Grid } from "@material-ui/core";
import SweetAlert from "sweetalert-react/lib/SweetAlert";
import Loader from "../../../../commons/components/Loader.jsx";
import formatearFechaDDMMYY from "../../../../commons/functions/FormatearFechaDDMMYY";
import sumarDias from "../../../../commons/functions/sumarDias";
import ScadaCristaleriasChile from "./ScadaCristaleriasChile";

const CristaleriasChile = () => {
  const [modalData, setModalData] = useState();
  const [idAlarma, setIdAlarma] = useState();
  const user = React.useContext(UseContext);
  const [categoricalGraph, setCategoricalGraph] = useState(false);
  const [datosFuncionamientoPlanta, setDatosFuncionamientoPlanta] = useState(
    []
  );
  const [datosGraficoMonitoreo, setDatosGraficoMonitoreo] = useState([]);
  const [startDate, setStartDate] = useState(sumarDias(new Date(), -13));
  const [endDate, setEndDate] = useState(new Date());
  const [titulo, setTitulo] = useState("Variable Monitoreada");
  const [selected, setSelected] = useState(-1);
  const [timelineYMax, settimelineYMax] = useState(null);
  const [timelineDecimal, settimelineDecimal] = useState(null);
  const [umbrales, setUmbrales] = useState({
    mi0: "0",
    ma0: "0",
    mi1: "0",
    ma1: "0",
    mi2: "0",
    ma2: "0",
    mi3: "0",
    ma3: "0",
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
    mi12: "0",
    ma12: "0",
    mi13: "0",
    ma13: "0",
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

  const [datosScada, setDatosScada] = useState({
    conexion: "Consultando",
    estadoRO: "-", // d0
    AE016: "-", // d1
    LT001: "-", // d2
    LT002: "-", // d3
    F001: "-", // d4
    PT010: "-", // d5
    PT013: "-", // d6
    FIT006: "-", // d7
    FIT015: "-", // d8
    AE005: "-", // d9
    AE012: "-", // d10
    P009A: "-", // d11
    P009B: "-", // d12
    TT01: "-", // d13
    UV001: "-", // d14
    PSH017: "-", // d15
    LSL001: "-", // d16
    LSL002: "-", // d17
    LSL003: "-", // d18
    LSL004: "-" // d19
  });

  const [iscon, setiscon] = useState(-1);
  /* const [con,setcon]=useState("Consultando"); */
  const [loading, setLoading] = useState(true);
  const listaIdAlarmas = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20
  ];
  const [datosAlarmas, setDatosAlarmas] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

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

  //  Estandarizable
  const getEstadoDispositivo = (id) => {
    switch (Number(id)) {
      case 0:
        return "OFF";
      case 1:
        return "ON";
      case 2:
        return "OFF";
      default:
        return "-";
    }
  };

  // Estandarizable => cambio de unidades
  const onClickAlarma = (id, nombre) => {
    if (Number(user.perfil) === 5 || Number(user.perfil) === 2) {
      const min = umbrales[`mi${id.toString()}`];
      const max = umbrales[`ma${id.toString()}`];
      let unit = "";
      switch (Number(id)) {
        case 1:
          unit = "pH";
          break;
        case 2:
        case 3:
          unit = "%";
          break;
        case 5:
        case 6:
          unit = "bar";
          break;
        case 7:
        case 8:
          unit = "m³/hr";
          break;
        case 9:
        case 10:
          unit = "µS/cm";
          break;
        default:
          unit = "";
          break;
      }

      setIdAlarma(id);

      setModalData({
        name: nombre,
        min: min,
        max: max,
        unit: unit
      });
    }
  };

  // Estandarizable
  const [loadingExport, setLoadingExport] = useState(false);

  const exportarDatosScada = () => {
    setLoadingExport(true);
    const fileName = `CristaleriasChile-${formatearFechaDDMMYY(startDate)}-${formatearFechaDDMMYY(endDate)}.xls`;
    const uri = `${apis.exportData}?id_planta=13&&fechainicio=${startDate.toLocaleDateString("en-US")}&&fechafin=${endDate.toLocaleDateString("en-US")}`;
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
      .catch((error) => {
        console.log("Error => ", error);
      })
      .finally(() => {
        setLoadingExport(false);
      });
  };

  // Estandariable
  const loadScada = (signal) => {
    const formData = new FormData();
    formData.append("idPlanta", 13);
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
        json.map((datos) => {
          setLoading(false);
          setDatosScada({
            conexion: datos.con,
            estadoRO: datos.d0,
            AE016: datos.d1,
            LT001: datos.d2,
            LT002: datos.d3,
            F001: datos.d4,
            PT010: datos.d5,
            PT013: datos.d6,
            FIT006: datos.d7,
            FIT015: datos.d8,
            AE005: datos.d9,
            AE012: datos.d10,
            P009A: datos.d11,
            P009B: datos.d12,
            TT01: datos.d13,
            UV001: datos.d14,
            PSH017: datos.d15,
            LSL001: datos.d16,
            LSL002: datos.d17,
            LSL003: datos.d18,
            LSL004: datos.d19
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
  const loadFuncionamientoPlanta = (signal) => {
    const formData = new FormData();
    formData.append("id_planta", 13);
    formData.append("fecha", startDate.toLocaleDateString("en-US"));
    formData.append(
      "fechaFin",
      `${endDate.toLocaleDateString("en-US")} ${endDate.toLocaleTimeString("en-US")}`
    );
    fetch(apis.obtainGraph, {
      method: "POST",
      headers: {
        "Id-purificador": 0,
        "Id-User": user.id_user,
        "Token": user.token
      },
      body: formData,
      signal: signal
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("Funcionamiento planta=>", json);
        setDatosFuncionamientoPlanta(json);
      });
  };

  // Estandarizable => se necesita definir bien como se hereda tipo de grafico (variable continuo/discreto)
  const loadGraficoParametros = (id, nombre, categorical, signal) => {
    setSelected(id);
    setCategoricalGraph(categorical);
    document
      .getElementById("refGraficos")
      .scrollIntoView({ behavior: "smooth", block: "center" });

    const formData = new FormData();
    formData.append("id_planta", 13);
    formData.append("fecha", new Date(startDate).toLocaleDateString("en-US"));
    formData.append(
      "fechaFin",
      `${endDate.toLocaleDateString("en-US")} ${endDate.toLocaleTimeString("en-US")}`
    );
    fetch(apis.obtainGraph, {
      method: "POST",
      headers: {
        "Id-purificador": id,
        "Id-User": user.id_user,
        "Token": user.token
      },
      body: formData,
      signal: signal
    })
      .then((res) => res.json())
      .then((json) => {
        setDatosGraficoMonitoreo(json);
        setTitulo(nombre);
      });
  };

  // Estandarizable
  const getAlarm = (signal) => {
    const formData = new FormData();
    formData.append("idPlanta", 13);
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
        if (json[0] > 0) {
          setUmbrales(json[0]);
        }
      });
  };

  // Estandarizable
  const ModalSaveAlarm = (dataSave, signal) => {
    if (
      Number(dataSave.max) - Number(dataSave.min) !== 0 ||
      (Number(dataSave.max) === 0 && Number(dataSave.min) === 0)
    ) {
      const formData = new FormData();
      formData.append("idPlanta", 13);
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
      }).then((res) => {
        if (Number(res.status) === 201) {
          getAlarm();
        } else {
          console.log("Datos no actualizados");
        }
      });
    } else {
      setShowAlert(true);
    }
  };

  // Estandarizable
  const dateHandleChange = (fechaInicio, fechaFin) => {
    loadFuncionamientoPlanta();
    loadGraficoParametros(selected, titulo);
  };

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    loadScada(signal);
    loadFuncionamientoPlanta(signal);
    getAlarm(signal);

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
        Planta Cristalerías Chile
      </h1>
      <div>
        <Breadcrumb /* style={{marginLeft:"10px"}} */ className="Breadcrumb">
          <BreadcrumbItem>IdA</BreadcrumbItem>
          <BreadcrumbItem>Plantas</BreadcrumbItem>
          <BreadcrumbItem>Cristalerías Chile</BreadcrumbItem>
          <BreadcrumbItem active>SCADA</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        lg={12}
        /*  style={{padding:"0px 15px"}} */
      >
        <Tarjetita
          name="Estado R.O"
          value={getEPO(datosScada.estadoRO)}
          selected={Number(selected)}
          number={0}
          clickMe={loadGraficoParametros}
          size="medium-tarjeta">
          {" "}
        </Tarjetita>
        <Tarjetita
          name="Presión Ósmosis"
          value={datosScada.PT010}
          selected={Number(selected)}
          max={umbrales.ma5}
          min={umbrales.mi5}
          number={5}
          unit="bar"
          clickMe={loadGraficoParametros}
          size="medium-tarjeta">
          {" "}
        </Tarjetita>
        <Tarjetita
          number={6}
          name="Presión Rechazo"
          value={datosScada.PT013}
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
          value={datosScada.FIT006}
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
          value={datosScada.FIT015}
          selected={Number(selected)}
          max={umbrales.ma8}
          min={umbrales.mi8}
          unit="m³/hr"
          clickMe={loadGraficoParametros}
          size="medium-tarjeta">
          {" "}
        </Tarjetita>
        <Tarjetita
          number={9}
          name="E.C. Alimentación"
          value={datosScada.AE005}
          selected={Number(selected)}
          max={umbrales.ma9}
          min={umbrales.mi9}
          unit="μS/cm"
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
          number={10}
          name="E.C. Producto"
          value={datosScada.AE012}
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
          value={datosScada.TT01}
          selected={Number(selected)}
          max={umbrales.ma13}
          min={umbrales.mi13}
          unit="°C"
          clickMe={loadGraficoParametros}
          size="medium-tarjeta">
          {" "}
        </Tarjetita>
        <Tarjetita
          number={16}
          name="Hipoclorito"
          value={getEstadoDispositivo(datosScada.LSL001)}
          selected={Number(selected)}
          clickMe={loadGraficoParametros}
          size="medium-tarjeta">
          {" "}
        </Tarjetita>
        <Tarjetita
          number={17}
          name="Metabisulfito"
          value={getEstadoDispositivo(datosScada.LSL002)}
          selected={Number(selected)}
          clickMe={loadGraficoParametros}
          size="medium-tarjeta"
        />
        <Tarjetita
          number={18}
          name="Antiincrustante"
          value={getEstadoDispositivo(datosScada.LSL003)}
          selected={Number(selected)}
          clickMe={loadGraficoParametros}
          size="medium-tarjeta"
        />
        <Tarjetita
          number={19}
          name="Hidróxido de Sodio"
          value={getEstadoDispositivo(datosScada.LSL004)}
          selected={Number(selected)}
          clickMe={loadGraficoParametros}
          size="medium-tarjeta"
        />
      </Grid>

      <Card className="mb-3">
        <ScadaCristaleriasChile
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
                  if (loadingExport) return;
                  exportarDatosScada();
                }}
                style={{
                  marginBottom: "4px",
                  cursor: loadingExport ? "not-allowed" : "pointer"
                }}
                color="info">
                {loadingExport ? (
                  <div
                    style={{ paddingInline: "37.8px", paddingBlock: "4.8px" }}>
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

      <Card className="mb-3">
        <CardHeader className="card-header-tab">
          <div
            id="refGraficos"
            className="card-header-title font-size-md font-weight-bold">
            {titulo}
          </div>
        </CardHeader>
        <CardBody className="card-body-tab">
          {categoricalGraph ? (
            <BarGraph
              data={datosGraficoMonitoreo}
              fecha={startDate}
              fechaFin={endDate}
            />
          ) : (
            <Timeline
              nombre={titulo}
              data={datosGraficoMonitoreo}
              decimal={timelineDecimal}
              yMax={timelineYMax}
            />
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
    </>
  );
};

export default CristaleriasChile;

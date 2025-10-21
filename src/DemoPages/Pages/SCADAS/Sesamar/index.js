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
import ScadaSesamar from "./ScadaSesamar";

import { getEPO } from "../../../../commons/scada/scada";

import IconoOpciones from "@material-ui/icons/Settings";
import { AreaChartData } from "../../../../commons/components/AreaChartData.jsx";
import ModalRangoGraficos from "../ModalRangoGraficos.jsx";

const Sesamar = ({ idPlanta = 41 }) => {
  const [modalData, setModalData] = useState();
  const [idAlarma, setIdAlarma] = useState();
  const user = React.useContext(UseContext);
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
    d0: "-", // d0
    d1: "-", // d1
    d2: "-", // d2
    d3: "-", // d3
    d4: "-", // d4
    d5: "-", // d5
    d6: "-", // d6
    d7: "-", // d7
    d8: "-", // d8
    d9: "-", // d9
    d10: "-", // d10
    d11: "-", // d11
    d12: "-", // d12
    d13: "-", // d13
    d14: "-", // d14
    d15: "-", // d15
    d16: "-", // d16
    d17: "-", //d17
    d18: "-", //18
    d19: "-", // d19
    d20: "-" // d20
  });

  const [loading, setLoading] = useState(true);
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

  // Estandarizable => cambio de unidades
  const onClickAlarma = (id, nombre) => {
    if (Number(user.perfil) === 5 || Number(user.perfil) === 2) {
      const min = umbrales[`mi${id.toString()}`];
      const max = umbrales[`ma${id.toString()}`];
      let unit = "";
      switch (
        Number(id) //Ñ
      ) {
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

  // Estandarizable
  const exportarDatosScada = (signal) => {
    const fileName = `Sesamar-${formatearFechaDDMMYY(startDate)}-${formatearFechaDDMMYY(endDate)}.xls`;
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
      });
  };

  // Estandariable
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
        setLoading(false);
        if (json.length > 0) {
          setDatosScada({
            conexion: json[0].con,
            d0: json[0].d0,
            d1: (Number(json[0].d1) * 0.1).toFixed(1),
            d2: (Number(json[0].d2) * 0.1).toFixed(1),
            d3: (Number(json[0].d3) * 0.1).toFixed(1),
            d4: (Number(json[0].d4) * 0.1).toFixed(1),
            d5: (Number(json[0].d5) * 0.1).toFixed(1),
            d6: (Number(json[0].d6) * 0.1).toFixed(1),
            d7: (Number(json[0].d7) * 0.1).toFixed(1),
            d8: (Number(json[0].d8) * 0.1).toFixed(1),
            d9: (Number(json[0].d9) * 0.1).toFixed(1),
            d10: (Number(json[0].d10) * 0.1).toFixed(1),
            d11: (Number(json[0].d11) * 0.1).toFixed(1),
            d12: (Number(json[0].d12) * 0.1).toFixed(1),
            d13: (Number(json[0].d13) * 0.1).toFixed(1),
            d14: (Number(json[0].d14) * 0.1).toFixed(1),
            d15: (Number(json[0].d15) * 0.1).toFixed(1),
            d16: (Number(json[0].d16) * 0.1).toFixed(1),
            d17: json[0].d17,
            d18: (Number(json[0].d18) * 0.1).toFixed(1),
            d19: json[0].d19,
            d20: json[0].d20
          });
        } else {
          setDatosScada({ ...datosScada, conexion: 2 });
        }
      })
      .catch((error) => console.log("Error", error));
  };

  // Estandarizable
  const loadFuncionamientoPlanta = async (id, signal) => {
    const formData = new FormData();
    formData.append("id_planta", idPlanta);
    formData.append("id_purificador", id);
    formData.append("fecha", startDate.toLocaleDateString("en-US"));
    formData.append(
      "fechaFin",
      `${endDate.toLocaleDateString("en-US")} ${endDate.toLocaleTimeString("en-US")}`
    );
    const res = await fetch(apis.obtainGraphWithMult, {
      method: "POST",
      headers: {
        "Id-User": user.id_user,
        "Token": user.token
      },
      body: formData,
      signal: signal
    });

    if (!res.ok) throw new Error(res.text);
    const json = await res.json();
    return json;
  };

  // Estandarizable => se necesita definir bien como se hereda tipo de grafico (variable continuo/discreto)
  const loadGraficoParametros = (id, nombre, categorical, signal) => {
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
  const ModalSaveAlarm = (dataSave, signal) => {
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
            getAlarm();
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
  const onClickBuscarDatos = () => {
    const res = loadFuncionamientoPlanta(0);
    res.then((json) => setDatosFuncionamientoPlanta(json));

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

    insertarVisita(signal);
    loadScada(signal);

    const res = loadFuncionamientoPlanta(0, signal);
    res.then((json) => setDatosFuncionamientoPlanta(json));

    getAlarm(signal);

    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (umbrales !== undefined) {
      const listaDatosAlarmas = [];
      const listaIdAlarmas = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
      ];
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
        style={{ color: "#303D48" }}
        className="card-header-title font-size-lg font-weight-bold text-uppercase">
        Planta Sesamar
      </h1>
      <div>
        <Breadcrumb>
          <BreadcrumbItem>IdA</BreadcrumbItem>
          <BreadcrumbItem>Plantas</BreadcrumbItem>
          <BreadcrumbItem>Sesamar</BreadcrumbItem>
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
          name="Estado R.O"
          value={getEPO(datosScada.d0)}
          selected={Number(selected)}
          number={0}
          clickMe={() => {}}
          size="medium-tarjeta">
          {" "}
        </Tarjetita>
        <Tarjetita
          number={1}
          name="Presión Alimentación"
          value={datosScada.d1}
          selected={Number(selected)}
          max={umbrales.ma1}
          min={umbrales.mi1}
          unit="bar"
          clickMe={loadGraficoParametros}
          size="medium-tarjeta">
          {" "}
        </Tarjetita>
        <Tarjetita
          number={2}
          name="P. Entrada Ag plus"
          value={datosScada.d2}
          selected={Number(selected)}
          max={umbrales.ma2}
          min={umbrales.mi2}
          unit="bar"
          clickMe={loadGraficoParametros}
          size="medium-tarjeta">
          {" "}
        </Tarjetita>
        <Tarjetita
          number={3}
          name="Presión Salida F-002"
          value={datosScada.d3}
          selected={Number(selected)}
          max={umbrales.ma3}
          min={umbrales.mi3}
          unit="bar"
          clickMe={loadGraficoParametros}
          size="medium-tarjeta">
          {" "}
        </Tarjetita>
        <Tarjetita
          number={4}
          name="Presión Salida F-003"
          value={datosScada.d4}
          selected={Number(selected)}
          max={umbrales.ma4}
          min={umbrales.mi4}
          unit="bar"
          clickMe={loadGraficoParametros}
          size="medium-tarjeta">
          {" "}
        </Tarjetita>
        <Tarjetita
          number={5}
          name="Presión Salida F-004"
          value={datosScada.d5}
          selected={Number(selected)}
          max={umbrales.ma5}
          min={umbrales.mi5}
          unit="bar"
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
          number={6}
          name="Presión Salida F-005"
          value={datosScada.d6}
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
          name="Presión Salida F-006"
          value={datosScada.d7}
          selected={Number(selected)}
          max={umbrales.ma7}
          min={umbrales.mi7}
          unit="bar"
          clickMe={loadGraficoParametros}
          size="medium-tarjeta">
          {" "}
        </Tarjetita>
        <Tarjetita
          number={8}
          name="P. Global Salida Filtros Ag Plus"
          value={datosScada.d8}
          selected={Number(selected)}
          max={umbrales.ma8}
          min={umbrales.mi8}
          unit="bar"
          clickMe={loadGraficoParametros}
          size="medium-tarjeta">
          {" "}
        </Tarjetita>
        <Tarjetita
          number={14}
          name="P. Global Salida Filtros GAC"
          value={datosScada.d14}
          selected={Number(selected)}
          max={umbrales.ma14}
          min={umbrales.mi14}
          unit="bar"
          clickMe={loadGraficoParametros}
          size="medium-tarjeta">
          {" "}
        </Tarjetita>
        <Tarjetita
          number={15}
          name="Flujo de Producto"
          value={datosScada.d15}
          selected={Number(selected)}
          max={umbrales.mi15}
          min={umbrales.mi15}
          unit="l/s"
          clickMe={loadGraficoParametros}
          size="medium-tarjeta">
          {" "}
        </Tarjetita>
        <Tarjetita
          number={18}
          name="Nivel Estanque TK-002"
          value={datosScada.d18}
          selected={Number(selected)}
          max={umbrales.mi18}
          min={umbrales.mi18}
          unit="%"
          clickMe={loadGraficoParametros}
          size="medium-tarjeta">
          {" "}
        </Tarjetita>
      </Grid>

      <Card className="mb-3">
        <ScadaSesamar
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
                  onClickBuscarDatos();
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
                color="info">
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
              <AreaChartData
                idPlanta={idPlanta}
                column={`d${selected}`}
                fechaInicio={startDate}
                fechaFin={endDate}
                nombre={titulo}
                yMax={timelineYMax}
                yMin={timelineYMin}
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
            {"Funcionamiento de la Planta"}
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

export default Sesamar;

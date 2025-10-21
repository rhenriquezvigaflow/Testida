import React, { useEffect, useState } from "react";
import { Breadcrumb, BreadcrumbItem, Card, Col, Row } from "reactstrap";
import SweetAlert from "sweetalert-react/lib/SweetAlert";
import UseContext from "../../../../Layout/AppMain/UserContext";
import SnackbarResetVibot from "../../../../commons/components/SnackbarResetVibot";
import formatearFechaDDMMYY from "../../../../commons/functions/FormatearFechaDDMMYY";
import sumarDias from "../../../../commons/functions/sumarDias";
import { useAbortController } from "../../../../commons/hooks/useAbortController";
import useVibotOnReset from "../../../../commons/hooks/useVibotOnReset";
import apis from "../../../../config/apiStore";
import CustomModal from "../Modal";
import ModalRangoGraficos from "../ModalRangoGraficos";
import Cards from "./components/Cards";
import Hourmeter from "./components/Hourmeter";
import MonitoredValue from "./components/MonitoredValue";
import PlantOperation from "./components/PlantOperation";
import ScadaAgricolaRioNegro from "./components/ScadaAgricolaRioNegro";

export default function AgricolaRioNegro() {
  const idPlanta = 90;
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
  const [timelineYMax, settimelineYMax] = useState(null);
  const [timelineYMin, settimelineYMin] = useState(null);
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
          unit = "";
          break;
        case 2:
        case 3:
          unit = "";
          break;
        case 5:
        case 6:
          unit = "";
          break;
        case 7:
        case 8:
          unit = "";
          break;
        case 9:
        case 10:
          unit = "";
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
  const [loadingExport, setLoadingExport] = useState(false);
  const createAbortController = useAbortController();

  const exportarDatosScada = () => {
    const controller = createAbortController();
    const { signal } = controller;

    setLoadingExport(true);
    const fileName = `AgricolaRioNegro-${formatearFechaDDMMYY(startDate)}-${formatearFechaDDMMYY(endDate)}.xls`;
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
      .finally(() => setLoadingExport(false));
  };

  // Estandariable
  const loadScada = (signal) => {
    const formData = new FormData();
    formData.append("idPlanta", idPlanta);
    fetch(apis.loadScadaWithMult, {
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
        setLoading(false);
        if (json.length > 0) {
          setDatosScada(json[0]);
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
        /* "Id-purificador": id, */
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
        /* "Id-purificador": id, */
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
          console.log("DATOS=>", object);
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
    const funcionamiento = loadFuncionamientoPlanta(1);
    funcionamiento.then((json) => setDatosFuncionamientoPlanta(json));
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
    const funcionamiento = loadFuncionamientoPlanta(1, signal);
    funcionamiento.then((json) => setDatosFuncionamientoPlanta(json));
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

  // vibot on reset
  const { estadoRoD1, isVibotReset } = useVibotOnReset(datosScada);

  return (
    <>
      {/* vibot on reset */}
      {isVibotReset && <SnackbarResetVibot />}
      {/* Title */}
      <h1
        style={{ color: "#303d48" }}
        className="card-header-title font-size-lg font-weight-bold text-uppercase">
        Planta Agrícola Río Negro
      </h1>
      <Breadcrumb>
        <BreadcrumbItem>IdA</BreadcrumbItem>
        <BreadcrumbItem>Plantas</BreadcrumbItem>
        <BreadcrumbItem>Agrícola Río Negro</BreadcrumbItem>
        <BreadcrumbItem active>SCADA</BreadcrumbItem>
      </Breadcrumb>

      {/* Tarjetas */}
      <Cards
        estadoRoD1={estadoRoD1}
        selected={selected}
        umbrales={umbrales}
        datosScada={datosScada}
        isVibotReset={isVibotReset}
        clickMe={loadGraficoParametros}
      />

      {/* Scada */}
      <Card className="mb-3">
        <ScadaAgricolaRioNegro
          scada={datosScada}
          datosAlarmas={datosAlarmas}
          loading={loading}
          selected={selected}
          loadGrafico={loadGraficoParametros}
          onClickAlarma={onClickAlarma}
        />
      </Card>

      {/* Horometro Picker */}
      <Card className="mb-3">
        <Hourmeter
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          onClickBuscarDatos={onClickBuscarDatos}
          exportarDatosScada={exportarDatosScada}
          loadingExport={loadingExport}
        />
      </Card>

      {/* Variable Monitoreada */}
      <Card className="mb-3">
        <MonitoredValue
          titulo={titulo}
          loadingDatosVariable={loadingDatosVariable}
          variableSeleccionada={variableSeleccionada}
          categoricalGraph={categoricalGraph}
          setShowModalRangoGrafico={setShowModalRangoGrafico}
          startDate={startDate}
          endDate={endDate}
          datosGraficoMonitoreoCategoricos={datosGraficoMonitoreoCategoricos}
          datosGraficoMonitoreoContinuos={datosGraficoMonitoreoContinuos}
          timelineDecimal={timelineDecimal}
          timelineYMin={timelineYMin}
          timelineYMax={timelineYMax}
          user
        />
      </Card>

      {/* Funcionamiento de la planta */}
      <Card className="mb-3">
        <PlantOperation
          datosFuncionamientoPlanta={datosFuncionamientoPlanta}
          startDate={startDate}
          endDate={endDate}
        />
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
}

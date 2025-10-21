import * as React from "react";
import "../../../../commons/styles/pages.styles.css";
import BarGraphLader from "../Lader/BarGraphLader";
import Timeline from "../Timeline.js";
import Scada from "./Scada";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import Loader from "react-loaders";
import DatePicker2 from "react-widgets/DatePicker";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import {
  Button,
  Card,
  CardBody,
  Col,
  Row,
  UncontrolledTooltip
} from "reactstrap";
import SweetAlert from "sweetalert-react";
import UseContext from "../../../../Layout/AppMain/UserContext";
import apis from "../../../../config/apiStore";
import CustomModal from "../Modal";
import Tarjetita from "../Tarjetita.js";
import help from "../help.png";
import "../../../../commons/styles/react-widgets-styles.css";
import { CircularProgress, Grid } from "@material-ui/core";
import { SignalCellular3BarRounded } from "@material-ui/icons";
import formatearFechaDDMMYY from "../../../../commons/functions/FormatearFechaDDMMYY";
import sumarDias from "../../../../commons/functions/sumarDias";

function Bresler() {
  const user = React.useContext(UseContext);
  const [selected, setSelected] = useState(null);
  /*
  initVar:0 no se ha seleccionado ningun dispositivo
          1: variable de tipo timeline
          2: variable de tipo BarGraph
  */
  const [initVar, setInitVar] = useState(0);
  const [timelineData, setTimelineData] = useState([]);
  const [timelineDecimal, setTimelineDecimal] = useState(false);
  const [startDate, setStartDate] = useState(sumarDias(new Date(), -13));
  const [endDate, setEndDate] = useState(new Date());
  const [barGraphData, setBarGraphData] = useState({ id: 0, data: [] });
  //valores de ls variables.
  const [dataScada, setScadaData] = useState(0);
  const [dataScada1, setScadaData1] = useState(0);
  const [dataScada2, setScadaData2] = useState(0);
  //nombre de las variables
  const [nameScada, setNameScada] = useState(0);
  const [nameScada1, setNameScada1] = useState(0);
  const [nameScada2, setNameScada2] = useState(0);
  //multiplicadores
  const [multScada, setMultScada] = useState(0);
  const [multScada1, setMultScada1] = useState(0);
  const [multScada2, setMultScada2] = useState(0);
  //unidades
  const [unitScada, setUnitScada] = useState(0);
  const [unitScada1, setUnitScada1] = useState(0);
  const [unitScada2, setUnitScada2] = useState(0);

  const [timeLineName, setTimeLineName] = useState();
  const [modalData, setModalData] = useState();
  const [idAlarm, setIdAlarm] = useState();
  const listaIdAlarmas = [
    32, 33, 34, 36, 37, 38, 39, 40, 42, 41, 43, 44, 45, 46, 47, 48, 49, 50, 51,
    52, 53, 54, 55, 56
  ];
  const [datosAlarmas, setDatosAlarmas] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingDatosVariable, setLoadingDatosVariable] = useState(false);

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

  const getNameById = (id) => {
    const name =
      Number.parseInt(id / 20) === 2
        ? nameScada2
        : Number.parseInt(id / 20) === 1
          ? nameScada1
          : nameScada;
    return name[`d${(id % 20).toString()}`];
  };
  //array de id de variables visibles de tarjetas
  const tarjeta = [56, 43, 39, 44, 46, 32, 37, 33];

  const ModalNotification = (id) => {
    if (Number(user.perfil) !== 5) return 0;

    const umbral =
      Number.parseInt(id / 20) === 2
        ? umbrales2
        : Number.parseInt(id / 20) === 1
          ? umbrales1
          : umbrales;
    const localUnit =
      Number.parseInt(id / 20) === 2
        ? unitScada2
        : Number.parseInt(id / 20) === 1
          ? unitScada1
          : unitScada;

    setIdAlarm(id);
    setModalData({
      name: getNameById(id),
      min: umbral[`mi${(id % 20).toString()}`],
      max: umbral[`ma${(id % 20).toString()}`],
      unit: localUnit[`d${(id % 20).toString()}`]
    });
  };

  const [umbrales, setumbrales] = useState();
  const [umbrales1, setumbrales1] = useState();
  const [umbrales2, setumbrales2] = useState();

  const dateHandleChange = (fechaInicio, fechaFin) => {
    /* setStartDate(fechaInicio);
    setEndDate(fechaFin); */
    if (selected !== null) {
      if (Number(selected) < 20) {
        select(
          17,
          0,
          selected,
          nameScada[`d${selected.toString()}`] +
            (unitScada[`d${selected}`] == null
              ? ""
              : ` [${unitScada[`d${selected}`]}]`),
          multScada[`d${selected.toString()}`],
          fechaInicio,
          fechaFin
        );
      } else if (Number(selected) < 40) {
        select(
          18,
          20,
          selected,
          nameScada1[`d${(selected - 20).toString()}`] +
            (unitScada1[`d${selected - 20}`] == null
              ? ""
              : ` [${unitScada1[`d${selected - 20}`]}]`),
          multScada1[`d${(selected - 20).toString()}`],
          fechaInicio,
          fechaFin
        );
      } else {
        select(
          19,
          40,
          selected,
          nameScada2[`d${(selected - 40).toString()}`] +
            (unitScada2[`d${selected - 40}`] == null
              ? ""
              : ` [${unitScada2[`d${selected - 40}`]}]`),
          multScada2[`d${(selected - 40).toString()}`],
          fechaInicio,
          fechaFin
        );
      }
    }
  };
  async function getAlarm(signal) {
    const plantIds = [17, 18, 19];
    const setters = [setumbrales, setumbrales1, setumbrales2];

    const fetchPromises = plantIds.map(async (id, index) => {
      const formData = new FormData();
      formData.append("idPlanta", id);

      try {
        const res = await fetch(apis.getAlarm, {
          method: "POST",
          headers: {
            "Id-User": user.id_user,
            "Token": user.token
          },
          body: formData,
          signal: signal
        });
        const json = await res.json();

        setters[index](json[0]);
      } catch (error) {
        throw new Error(
          `Error al intentar conseguir la data de la planta ${id}: `,
          error
        );
      }
    });

    await Promise.all(fetchPromises);
  }

  const insertarVisita = (signal) => {
    const datosBody = new FormData();
    datosBody.append("id_tipo_visita", 2);
    datosBody.append("id_usuario", user.id_user);
    datosBody.append("id_planta", 17);

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

  const exportDataOnClick = () => {
    setLoadingExport(true);
    const fileName = `Bresler-${formatearFechaDDMMYY(startDate)}-${formatearFechaDDMMYY(endDate)}.xls`;
    const uri = `${apis.multiExportData}?fechainicio=${startDate.toLocaleDateString("en-US")}&&fechafin=${endDate.toLocaleDateString("en-US")}`;
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
        console.error(`Error al intentar exportar los datos: `, error);
      })
      .finally(() => {
        setLoadingExport(false);
      });

    /* window.location.href =
    apis.multiExportData+"?fechainicio=" +
    startDate.toLocaleDateString("en-US") + 
    "&&fechafin=" + 
    endDate.toLocaleDateString("en-US"); */
  };

  const loadApi = (id, action, endpoint, signal) => {
    const formData = new FormData();
    formData.append("idPlanta", id);
    return fetch(apis.apiUrl + endpoint, {
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
        if (Array.isArray(json))
          json.map((x) => {
            action(x);
            return 0;
          });
        else action(json);
      })
      .catch((error) => {
        console.error(
          `Error fetching data for plant ${id} from endpoint ${endpoint}: `,
          error
        );
      });
  };

  const loadScada = async () => {
    const plantIds = [17, 18, 19];
    const actions = [setScadaData, setScadaData1, setScadaData2];
    const endpoints = ["loadScada", "getVar", "getMult", "getUnit"];

    const fetchPromises = [];

    for (let i = 0; i < plantIds.length; i++) {
      for (let j = 0; j < endpoints.length; j++) {
        fetchPromises.push(loadApi(plantIds[i], actions[i], endpoints[j]));
      }
    }

    await Promise.all(fetchPromises);
  };

  const loadTimeline = (
    fechaInicio,
    select,
    idPlanta,
    nameVar,
    mult,
    idSelected,
    fechaFin,
    signal
  ) => {
    setLoadingDatosVariable(true);
    const decimal = [46, 55, 49, 43, 41, 47, 56, 45, 36, 34, 54];
    const isWithDecimal = decimal.includes(Number(idSelected));
    setTimelineDecimal(isWithDecimal);
    const formData = new FormData();
    formData.append(
      "fecha",
      new Date(
        fechaInicio == null ? startDate : fechaInicio
      ).toLocaleDateString("en-US")
    );
    formData.append(
      "fechaFin",
      new Date(fechaFin == null ? endDate : fechaFin).toLocaleDateString(
        "en-US"
      )
    );
    formData.append("id_planta", idPlanta);
    fetch(apis.obtainGraph, {
      method: "POST",
      headers: {
        "Id-purificador": select,
        "Id-User": user.id_user,
        "Token": user.token
      },
      body: formData,
      signal: signal
    })
      .then((res) => res.json())
      .then((json) => {
        //
        setLoadingDatosVariable(false);
        const modifiedjson = json.map((item) => {
          const modifiedItem = Object.assign({}, item);
          modifiedItem.d *= mult;
          return modifiedItem;
        });
        setInitVar(1);
        setTimeLineName(nameVar);
        setTimelineData(modifiedjson);
        document
          .getElementById("refGraficos")
          .scrollIntoView({ behavior: "smooth", block: "center" });
      });
  };

  const loadBarGraphLader = (
    fechaInicio,
    select,
    idPlanta,
    nameVar,
    fechaFin,
    signal
  ) => {
    let idSelected;
    idSelected = select == null ? selected : select;
    const formData = new FormData();
    formData.append(
      "fecha",
      new Date(
        fechaInicio == null ? startDate : fechaInicio
      ).toLocaleDateString("en-US")
    );
    formData.append(
      "fechaFin",
      new Date(fechaFin == null ? endDate : fechaFin).toLocaleDateString(
        "en-US"
      )
    );
    formData.append("id_planta", idPlanta);
    const object = { id: 0, data: [], nombre: "" };
    object.id = idSelected;
    object.nombre = nameVar;

    fetch(apis.obtainGraph, {
      method: "POST",
      headers: {
        "Id-purificador": idSelected,
        "Id-User": user.id_user,
        "Token": user.token
      },
      body: formData,
      signal: signal
    })
      .then((res) => res.json())
      .then((json) => {
        setInitVar(3);
        object.data = json;
        setBarGraphData(object);
        document
          .getElementById("refGraficos")
          .scrollIntoView({ behavior: "smooth", block: "center" });
      });
  };

  const getst = (x) => {
    const dictionary = [
      "Detenido",
      "Funcionando",
      "Moviendose",
      "Falla",
      "Bloqueada"
    ];
    try {
      return dictionary[Number(x)];
    } catch (error) {
      return "No definido";
    }
  };
  const selectScada = (id) => {
    if (Number(id) < 20)
      select(
        17,
        0,
        id,
        nameScada[`d${id.toString()}`] +
          (unitScada[`d${id}`] == null ? "" : ` [${unitScada[`d${id}`]}]`),
        multScada[`d${id.toString()}`],
        startDate,
        endDate
      );
    else if (Number(id) < 40)
      select(
        18,
        20,
        id,
        nameScada1[`d${(id - 20).toString()}`] +
          (unitScada1[`d${id - 20}`] == null
            ? ""
            : ` [${unitScada1[`d${id - 20}`]}]`),
        multScada1[`d${(id - 20).toString()}`],
        startDate,
        endDate
      );
    else {
      select(
        19,
        40,
        id,
        nameScada2[`d${(id - 40).toString()}`] +
          (unitScada2[`d${id - 40}`] == null
            ? ""
            : ` [${unitScada2[`d${id - 40}`]}]`),
        multScada2[`d${(id - 40).toString()}`],
        startDate,
        endDate
      );
    }
  };

  const select = (
    idPlanta,
    firstIndex,
    idSelected,
    nameVar,
    mult,
    fechaInicio,
    fechaFin
  ) => {
    setSelected(idSelected);
    if (Number(mult) === 0)
      loadBarGraphLader(
        fechaInicio,
        idSelected - firstIndex,
        idPlanta,
        nameVar,
        fechaFin
      );
    else {
      loadTimeline(
        fechaInicio,
        idSelected - firstIndex,
        idPlanta,
        nameVar,
        mult,
        idSelected,
        fechaFin
      );
    }
  };

  const ModalSaveAlarm = (dataSave, signal) => {
    if (
      Number(dataSave.max) - Number(dataSave.min) !== 0 ||
      (Number(dataSave.max) === 0 && Number(dataSave.min) === 0)
    ) {
      const formData = new FormData();
      formData.append("id_user", 0);
      formData.append(
        "idPlanta",
        Number.parseInt(idAlarm / 20) === 0
          ? 17
          : Number.parseInt(idAlarm / 20) === 1
            ? 18
            : 19
      );

      fetch(apis.setScadaAlarm, {
        method: "POST",
        headers: {
          Id: idAlarm % 20,
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

  /*   const seleccionaMes = () => {
    return (
      <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-end"
    >
      <Grid item>
        <div style={{marginLeft:"0px"}} className="date-range font-size-md">
          <div className="date-text font-weight-bold">Seleccionar mes de operación</div>
            <DatePicker2
              className="font-weight-normal"
              value={startDate}
              onChange={(cambio) => {
                dateHandleChange(cambio);
              }}
              valueFormat={{ month: "numeric", year: "numeric" }}
              calendarProps={{min: new Date(2020,3,1), max: new Date(), views: ["year"] }}
              messages={{dateButton: "Seleccionar fecha", moveBack:"", moveForward:"", moveToday:"Hoy"}}
            />
        </div>
      </Grid>
      <Grid item>
        <div className="titles">
          <Button
            style = {{marginBottom:"4px"}}
            onClick={() => {
              exportDataOnClick();
            }}
            color="info"
          >
            Exportar datos
          </Button>
        </div>
      </Grid>
    </Grid>
    )

  } */

  /*   function PrintCards(props) {
    const { data, name, mult, unit, firstIndex } = props;
    const selectCard = (x) => {
      select(
        data.id_planta,
        firstIndex,
        x,
        name["d" + (x - firstIndex).toString()] +
          (unit["d" + (x - firstIndex)] == null
            ? ""
            : " [" + unit["d" + (x - firstIndex)] + "]"),
        mult["d" + (x - firstIndex).toString()]
      );
    };

    if (data === 0 || name === 0 || mult === 0){
      setLoading(true);
      return <></>;
    }

    else{
      setLoading(false);
      return (
        <Row>
          {Object.keys(data).map((x, index) => {
            if (
              x[0] === "d" &&
              name[x] !== null &&
              tarjeta.includes(firstIndex + Number(x.replace("d", "")))
            ) {
              return (
                <Tarjetita
                  key={index}
                  name={name[x]}
                  value={
                    Number(mult[x]) === 0
                      ? getst(data[x])
                      : Number(data[x] * mult[x]).toFixed(2)
                  }
                  unit={unit == null ? null : unit[x]}
                  number={Number(x.replace("d", "")) + firstIndex}
                  selected={selected}
                  clickMe={selectCard}
                />
              );
            } else return "";
          })}
        </Row>
      );
    }
  } */

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    insertarVisita(signal);
    loadScada(signal);
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

  useEffect(() => {
    if (
      umbrales !== undefined &&
      umbrales1 !== undefined &&
      umbrales2 !== undefined
    ) {
      const listaDatosAlarmas = [];
      for (let i = 0; i < listaIdAlarmas.length; i++) {
        const umbral =
          Number.parseInt(listaIdAlarmas[i] / 20) === 2
            ? umbrales2
            : Number.parseInt(listaIdAlarmas[i] / 20) === 1
              ? umbrales1
              : umbrales;
        listaDatosAlarmas.push({
          id: listaIdAlarmas[i],
          min: umbral[`mi${(listaIdAlarmas[i] % 20).toString()}`],
          max: umbral[`ma${(listaIdAlarmas[i] % 20).toString()}`]
        });
      }
      setDatosAlarmas(listaDatosAlarmas);
    }
  }, [umbrales, umbrales1, umbrales2]);

  return (
    <div>
      <h1
        style={{ marginBottom: "10px", color: "#303D48" }}
        className="card-header-title font-size-lg font-weight-bold text-uppercase">
        Planta Bresler
      </h1>
      <div>
        <Breadcrumb className="Breadcrumb">
          <BreadcrumbItem>
            <a /* href="#" */>IdA</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a /* href="#" */>Scadas</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Bresler</BreadcrumbItem>
        </Breadcrumb>
      </div>
      {loading && (
        <div
          style={{ marginBottom: "15px" }}
          className="text-center">
          <Loader
            type="ball-pulse"
            color="#c2c2c1"
          />
        </div>
      )}
      <SweetAlert
        title="Atención"
        confirmButtonColor="#353a40"
        confirmButtonText="Aceptar"
        show={showAlert}
        text={"El valor mínimo y máximo no puede ser el mismo"}
        button="Coolio"
        onConfirm={() => setShowAlert(false)}
      />
      <CustomModal
        data={modalData}
        onClickSaveAlarm={ModalSaveAlarm}
      />

      {/* <PrintCards
        data={dataScada}
        name={nameScada}
        mult={multScada}
        unit={unitScada}
        firstIndex={0}
      /> */}
      {/* <PrintCards
        data={dataScada1}
        name={nameScada1}
        mult={multScada1}
        unit={unitScada1}
        firstIndex={20}
      />
      <PrintCards
        data={dataScada2}
        name={nameScada2}
        mult={multScada2}
        unit={unitScada2}
        firstIndex={40}
      /> */}

      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        lg={12}
        /* style={{padding:"0px 15px"}} */
      >
        <Tarjetita
          name="P Estanque Reactor"
          value={(dataScada1["d12"] * multScada1["d12"]).toFixed(2)}
          unit={unitScada1["d12"]}
          number={32}
          selected={selected}
          clickMe={() => selectScada(32)}
          size="medium-tarjeta"
        />

        <Tarjetita
          name="P Succión Bombas Perm."
          value={(dataScada1["d13"] * multScada1["d13"]).toFixed(2)}
          unit={unitScada1["d13"]}
          number={33}
          selected={selected}
          clickMe={() => selectScada(33)}
          size="medium-tarjeta"
        />

        <Tarjetita
          name="Nivel Estanque Acondicionador"
          value={(dataScada1["d17"] * multScada1["d17"]).toFixed(2)}
          unit={unitScada1["d17"]}
          number={37}
          selected={selected}
          clickMe={() => selectScada(37)}
          size="medium-tarjeta"
        />

        <Tarjetita
          name="Nivel Estanque Aireador"
          value={(dataScada1["d19"] * multScada1["d19"]).toFixed(2)}
          unit={unitScada1["d19"]}
          number={39}
          selected={selected}
          clickMe={() => selectScada(39)}
          size="medium-tarjeta"
        />

        <Tarjetita
          name="Caudal Permeado"
          value={(dataScada2["d3"] * multScada2["d3"]).toFixed(2)}
          unit={unitScada2["d3"]}
          number={43}
          selected={selected}
          clickMe={() => selectScada(43)}
          size="medium-tarjeta"
        />

        <Tarjetita
          name="Caudal Aireación"
          value={(dataScada2["d4"] * multScada2["d4"]).toFixed(2)}
          unit={unitScada2["d4"]}
          number={44}
          selected={selected}
          clickMe={() => selectScada(44)}
          size="medium-tarjeta"
        />
      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        lg={12}
        style={{ padding: "0px 15px" }}>
        <Tarjetita
          name="PH Estanque Acondicionador"
          value={(dataScada2["d6"] * multScada2["d6"]).toFixed(2)}
          unit={unitScada2["d6"]}
          number={46}
          selected={selected}
          clickMe={() => selectScada(46)}
          size="medium-tarjeta"
        />

        <Tarjetita
          name="TMP Calculado"
          value={(dataScada2["d16"] * multScada2["d16"]).toFixed(2)}
          unit={unitScada2["d16"]}
          number={56}
          selected={selected}
          clickMe={() => selectScada(56)}
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
            <Scada
              selected={selected}
              data={dataScada}
              mult={multScada}
              data1={dataScada1}
              mult1={multScada1}
              data2={dataScada2}
              mult2={multScada2}
              loading={loading}
              datosAlarmas={datosAlarmas}
              clickscada={selectScada}
              selectAlarm={ModalNotification}
            />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col
          sm="12"
          md="12"
          lg="12"
          xl="12">
          <Card className="mb-3" />
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
                      /* dateHandleChange(cambio, endDate); */
                      setStartDate(cambio);
                    }}
                    valueFormat={{
                      month: "numeric",
                      year: "numeric",
                      day: "numeric"
                    }}
                    calendarProps={{
                      min: new Date(2020, 3, 1),
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
                      /* dateHandleChange(startDate, cambio); */
                      setEndDate(cambio);
                    }}
                    valueFormat={{
                      month: "numeric",
                      year: "numeric",
                      day: "numeric"
                    }}
                    calendarProps={{
                      min: new Date(2020, 3, 1),
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
                      dateHandleChange(startDate, endDate);
                    }}
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
      <Row id="refGraficos">
        <Col>
          <Card className="mb-3">
            {initVar === 1 || initVar === 0 ? (
              <div>
                <div
                  className="modal-title2"
                  style={{
                    paddingTop: 20,
                    paddingLeft: 20
                  }}>
                  <h2 className="card-header-title font-size-md font-weight-bold">
                    Variable Monitoreada{" "}
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
                      Presiona una tarjeta o dispositivo para mostrar un gráfico
                    </UncontrolledTooltip>
                  </h2>

                  {/* {seleccionaMes()} */}
                  <div>{timeLineName}</div>
                </div>

                <hr />
                <CardBody className="card-body-tab">
                  {initVar === 0 ? (
                    "No se ha seleccionado ninguna tarjeta o dispositivo"
                  ) : (
                    <Timeline
                      nombre={timeLineName}
                      data={timelineData}
                      decimal={timelineDecimal}
                    />
                  )}
                </CardBody>
              </div>
            ) : (
              <div>
                <div
                  className="modal-title2"
                  style={{
                    paddingTop: 20,
                    paddingLeft: 20
                  }}>
                  <h2 className="card-header-title font-size-md font-weight-bold">
                    Estado de dispositivo{" "}
                    <img
                      width={15}
                      style={{
                        marginBottom: 5,
                        marginLeft: 5,
                        marginRight: 10
                      }}
                      id="optimo2"
                      src={help}
                      alt=""
                    />
                    <UncontrolledTooltip
                      placement="bottom"
                      target="optimo2">
                      Presiona una tarjeta o dispositivo para mostrar un gráfico
                    </UncontrolledTooltip>
                  </h2>
                  {/* {seleccionaMes()} */}
                  <div>{barGraphData.nombre}</div>
                </div>

                <hr />
                <CardBody className="card-body-tab">
                  <BarGraphLader
                    data={barGraphData}
                    fechaInicio={startDate}
                    fechaFin={endDate}
                  />
                </CardBody>
              </div>
            )}
          </Card>
        </Col>
      </Row>

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
    </div>
  );
}
export default Bresler;

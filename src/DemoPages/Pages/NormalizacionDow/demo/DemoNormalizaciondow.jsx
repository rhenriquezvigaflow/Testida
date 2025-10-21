import React, { useEffect, useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import TarjetaNormalizacion from "../tarjetaNormalizacion";
import "../../../../commons/styles/pages.styles.css";
import { Button, Card, CardBody, CardHeader } from "reactstrap";
import "../../../../commons/styles/react-widgets-styles.css";
import { Grid } from "@material-ui/core";
import IconoMantenciones from "@material-ui/icons/Build";
import IconoCampana from "@material-ui/icons/NotificationsActive";
import SweetAlert from "sweetalert-react/lib/SweetAlert";
import UseContext from "../../../../Layout/AppMain/UserContext";
import formatearFechaDDMMYY from "../../../../commons/functions/FormatearFechaDDMMYY";
import ModalLimites from "../ModalLimites";
import Alerta from "../alerta";
import GraficoNormalizacion from "../graficoNormalizacion";
import ModalAlertaLimite from "../modalAlertaLimite";
import ModalInsertarMantencion from "./DemoModalInsertarMantencion";
import ModalNormalizacion from "./DemoModalNormalizacion";
import {
  datosNormalizados,
  limitesNormalizacion,
  mantencionMembranas,
  ultimaAlarmaNormalizacion
} from "./datademo";

const DemoNormalizacionDow = (props) => {
  const auxAlarma = {
    descripcion: "",
    estado: "",
    falarma: "",
    fecha_plan: "",
    ialarma: "",
    id: "",
    id_alerta: "",
    id_planta: "",
    id_user: "",
    plan: "",
    reportado: ""
  };
  const [datosNormalizacion, setDatosNormalizacion] = useState([]);
  const [mostrarModalTabla, setMostrarModalTabla] = useState(false);
  const [ultimoDatoNormalizacion, setUltimoDatoNormalizacion] = useState({
    "calc_feed_brine_avg": 0,
    "conductividad_alimen": 0,
    "conductividad_permeado": 0,
    "dias_operacion": 0,
    "diffP": 0,
    "fecha": "0",
    "feed_brine_osmotic_p": 0,
    "flujo_alimen": 0,
    "flujo_concentrado": 0,
    "flujo_permeado": 0,
    "flujo_permeado_norm": 0,
    "id": 0,
    "lim_diffP_20": 0,
    "lim_permeado_10": 0,
    "lim_permeado_15": 0,
    "ndp": 0,
    "norm_perm_salt_passage": 0,
    "norm_perm_salt_rejection": 0,
    "presion_alimen": 0,
    "presion_concentrado": 0,
    "presion_osmotica_perm": 0,
    "recuperacion": 0,
    "tcf": 0,
    "tds_calc_alimen": 0,
    "tds_calc_perm": 0,
    "temperatura_alimen": 0
  });
  const [ultimoCambioMembrana, setUltimoCambioMembrana] = useState("-");
  const [ultimoCIP, setUltimoCIP] = useState("-");
  const [datosFlujoPermeado, setDatosFlujoPermeado] = useState([]);
  const [datosCaidaPresion, setDatosCaidaPresion] = useState([]);
  const [datosPasoSales, setDatosPasoSales] = useState([]);
  const [datosRechazoSales, setDatosRechazoSales] = useState([]);
  const [xaxisAnnotationsMembranas, setXaxisAnnotationsMembranas] = useState(
    []
  );
  const [posSeleccionDatosGraficos, setPosSeleccionDatosGraficos] = useState(0);
  const [showModalLimites, setShowModalLimites] = useState(false);
  const [tipoAlertaFlujoPermeado, setTipoAlertaFlujoPermeado] = useState("");
  const [ultimaAlarmaLimite, setUltimaAlarmaLimite] = useState(auxAlarma);
  const [limites, setLimites] = useState({
    id: 1,
    id_planta: 10,
    permeado_10: 64.7,
    permeado_15: 61,
    delta_p_20: 2
  });
  const [showModalUpdateLimites, setShowModalUpdateLimites] = useState(false);
  const [showAlertLimites, setShowAlertLimites] = useState(false);
  const [alertLimites, setAlertLimites] = useState({
    message: "",
    ok: false,
    code: 0
  });
  const [showModalInsertarMantencion, setShowModalInsertarMantencion] =
    useState(false);
  const usuarioAuth = React.useContext(UseContext);

  const getYaxisPermeado = () => {
    const yAxis = {
      style: {
        fontSize: "12px"
      },
      labels: {
        formatter: (val) => val.toFixed(1)
      }
    };

    if (Number(props.idPlanta) === 14) {
      yAxis["min"] = 5;
      yAxis["max"] = 15;
    }
    return yAxis;
  };

  const getYaxisSales = () => {
    const yAxis = [
      {
        labels: {
          style: {
            colors: ["#00A99D"],
            fontSize: "12px"
          },
          formatter: (val) => `${(val * 100).toFixed(1)}%`
        }
      },
      {
        max: 1,
        opposite: true,
        labels: {
          style: {
            colors: ["#3474E0"],
            fontSize: "12px"
          },
          formatter: (val) => `${(val * 100).toFixed(0)}%`
        }
      }
    ];

    switch (props.idPlanta) {
      case 10:
        yAxis[0]["max"] = 0.112;
        yAxis[1]["min"] = 0.88;
        break;
      case 14:
        yAxis[0]["max"] = 0.1;
        yAxis[1]["min"] = 0.6;
        break;
      case 3:
        yAxis[0]["max"] = 0.2;
        yAxis[1]["min"] = 0.95;
        break;
      default:
        yAxis[0]["max"] = 0.1;
        yAxis[1]["min"] = 0.8;
        break;
    }

    return yAxis;
  };

  const opcionesFlujoPermeado = {
    tooltip: {
      y: {
        formatter: (valor) => {
          return valor.toFixed(1);
        }
      }
    },
    grid: {
      padding: {
        top: 20,
        right: 20,
        bottom: 0,
        left: 20
      }
    },
    colors: ["#3474E0"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100]
      }
    },
    xaxis: {
      tooltip: {
        enabled: false
      },
      labels: {
        format: "dd/MM/yy"
      },
      type: "datetime"
    },
    yaxis: getYaxisPermeado(),
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 1.5
    },
    annotations: {
      xaxis: xaxisAnnotationsMembranas,
      yaxis: [
        {
          y: limites.permeado_10,
          borderColor: "#FBB03B",
          strokeDashArray: 2
        },
        {
          y: limites.permeado_15,
          borderColor: "#F44016",
          strokeDashArray: 2
        }
      ]
    }
  };

  const opcionesDiffPresion = {
    grid: {
      padding: {
        top: 20,
        right: 20,
        bottom: 0,
        left: 20
      }
    },
    colors: ["#3474E0"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100]
      }
    },
    xaxis: {
      tooltip: {
        enabled: false
      },
      labels: {
        format: "dd/MM/yy"
      },
      type: "datetime"
    },
    yaxis: {
      min: 0,
      max: props.idPlanta === 21 ? 1 : 4,
      style: {
        fontSize: "12px"
      },
      labels: {
        formatter: (val) => val.toFixed(1)
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 1.5
    },
    annotations: {
      yaxis: [
        {
          y: limites.delta_p_20,
          borderColor: "#F44016",
          strokeDashArray: 2
        }
      ]
    }
  };

  const opcionesSales = {
    grid: {
      padding: {
        top: 20,
        right: 20,
        bottom: 0,
        left: 20
      }
    },
    colors: ["#00A99D", "#3474E0"],
    legend: { show: false },
    xaxis: {
      tooltip: {
        enabled: false
      },
      labels: {
        format: "dd/MM/yy"
      },
      type: "datetime"
    },
    yaxis: getYaxisSales(),
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 1.5
    }
  };

  const seriesFlujoPermeado = [
    {
      name: "Flujo Permeado",
      data: datosFlujoPermeado
    }
  ];

  const seriesCaidaPresion = [
    {
      name: "Caida Presión",
      data: datosCaidaPresion
    }
  ];

  const seriesSales = [
    {
      name: "Paso de Sales Normalizado",
      data: datosPasoSales
    },
    {
      name: "Rechazo de Sales Normalizado",
      data: datosRechazoSales
    }
  ];

  const openModalLimites = (open) => {
    setShowModalLimites(open);
  };

  const getMantencionMembranas = () => {
    const json = mantencionMembranas;
    // Setea ultimo dato de cada mantencion
    let ultimoCIP = "-";
    let ultimoCambio = "-";
    const annotationsXaxis = [];
    json.forEach((mantencion) => {
      if (Number(mantencion.tipo) === 1) {
        if (ultimoCIP == "-") {
          ultimoCIP = new Date(mantencion.fecha);
        } else {
          if (new Date(mantencion.fecha) > ultimoCIP) {
            ultimoCIP = new Date(mantencion.fecha);
          }
        }
      } else {
        if (ultimoCambio == "-") {
          ultimoCambio = new Date(mantencion.fecha);
        } else {
          if (new Date(mantencion.fecha) > ultimoCambio) {
            ultimoCambio = new Date(mantencion.fecha);
          }
        }
      }

      annotationsXaxis.push({
        x: new Date(mantencion.fecha).getTime(),
        borderColor: "#3474E0",
        label: {
          show: true,
          text: (mantencion.tipo == 1 ? "Limpieza " : "") + mantencion.nombre,
          borderColor: "#ffffff",
          style: {
            color: "#ffffff",
            background: "#3474E0"
          }
        }
      });
    });
    setUltimoCIP(ultimoCIP);
    setUltimoCambioMembrana(ultimoCambio);
    setXaxisAnnotationsMembranas(annotationsXaxis);
  };

  const updateLimites = () => {
    const json = limitesNormalizacion;

    setLimites(json[0]);

    setShowAlertLimites(true);
    setAlertLimites(json);
  };

  const handleActualizaMantencion = () => {
    getMantencionMembranas();
    getUltimaAlarma();
  };

  const getLimitesNormalizacion = async () => {
    return limitesNormalizacion;
  };

  const getUltimaAlarma = () => {
    const json = ultimaAlarmaNormalizacion;
    if (json.length) {
      setUltimaAlarmaLimite(json[0]);
    } else {
      setUltimaAlarmaLimite(auxAlarma);
    }
  };

  const getRegistrosNormalizados = (lim) => {
    const json = datosNormalizados;
    if (json.length > 0) {
      const listaFlujoPermeado = [];
      const listaCaidaPresion = [];
      const listaPasoSales = [];
      const listaRechazoSales = [];
      json.forEach((registro) => {
        if (registro !== null) {
          const fechaRegistro = new Date(registro.fecha);
          const milisegundosFechaRegistro = fechaRegistro.getTime();
          if (
            registro.flujo_permeado_norm != "" &&
            registro.flujo_permeado_norm > (props.idPlanta == 10 ? 4 : 0)
          ) {
            const auxDato = [
              milisegundosFechaRegistro,
              registro.flujo_permeado_norm
            ];
            listaFlujoPermeado.push(auxDato);
          }

          const auxCaidaPresion = [milisegundosFechaRegistro, registro.diffP];
          listaCaidaPresion.push(auxCaidaPresion);

          if (
            registro.norm_perm_salt_passage != "" &&
            registro.norm_perm_salt_rejection != ""
          ) {
            const auxPasoSales = [
              milisegundosFechaRegistro,
              registro.norm_perm_salt_passage
            ];
            listaPasoSales.push(auxPasoSales);

            const auxRechazoSales = [
              milisegundosFechaRegistro,
              registro.norm_perm_salt_rejection
            ];
            listaRechazoSales.push(auxRechazoSales);
          }
        }
      });
      setDatosPasoSales(listaPasoSales);
      setDatosRechazoSales(listaRechazoSales);
      setDatosCaidaPresion(listaCaidaPresion);
      setDatosFlujoPermeado(listaFlujoPermeado);
      setUltimoDatoNormalizacion(json[json.length - 1]);
      setDatosNormalizacion(json);

      if (Number(lim.id) !== 0) {
        if (props.idPlanta === 14) {
          setTipoAlertaFlujoPermeado("");
        } else if (
          json[json.length - 1].flujo_permeado_norm <= lim.permeado_10 &&
          json[json.length - 1].flujo_permeado_norm > lim.permeado_15
        ) {
          setTipoAlertaFlujoPermeado("warning");
          setShowModalLimites(true);
        } else if (
          json[json.length - 1].flujo_permeado_norm <= lim.permeado_15
        ) {
          setTipoAlertaFlujoPermeado("critical");
          setShowModalLimites(true);
        } else {
          setTipoAlertaFlujoPermeado("");
        }
      }
    }
  };

  const getEstadoFlujoPermeado = () => {
    if (String(tipoAlertaFlujoPermeado) !== "") {
      return true;
    } else {
      return false;
    }
  };

  const onHandleActualizarData = () => {
    getRegistrosNormalizados(limites);
  };

  const scrollGrafico = (ref) => {
    document
      .getElementById(ref)
      .scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const onClickMostrarModal = (id) => {
    setPosSeleccionDatosGraficos(id);
    setMostrarModalTabla(true);
  };

  const onClickHide = (show) => {
    /* setMostrarModalTabla(show); */
  };

  useEffect(() => {
    getMantencionMembranas();
    getUltimaAlarma();

    const json = getLimitesNormalizacion();

    if (json.length > 0) {
      setLimites(json[0]);
      getRegistrosNormalizados(json[0]);
    } else {
      getRegistrosNormalizados(limites);
    }
  }, []);

  const actualizarLimites = (datos) => {
    updateLimites(props.idPlanta, datos);
    setShowModalUpdateLimites(false);
  };

  return (
    <>
      <h1
        style={{ marginBottom: "10px", marginLeft: "10px", color: "#303D48" }}
        className="card-header-title font-size-lg font-weight-bold text-uppercase">
        Normalización
      </h1>
      <div>
        <Breadcrumb
          style={{ marginLeft: "10px" }}
          className="Breadcrumb">
          <BreadcrumbItem>IdA</BreadcrumbItem>
          <BreadcrumbItem>Plantas</BreadcrumbItem>
          <BreadcrumbItem>{props.nombrePlanta}</BreadcrumbItem>
          <BreadcrumbItem>Normalización</BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          lg={12}
          style={{ padding: "0px 15px" }}>
          <TarjetaNormalizacion
            name="Flujo Permeado Normalizado"
            value={Number(ultimoDatoNormalizacion.flujo_permeado_norm).toFixed(
              1
            )}
            unit="m³/h"
            clickMe={scrollGrafico}
            clickType={"ref_graph"}
            idRef="graficoFlujoPermeado"
            size="medium-tarjeta"
            color={tipoAlertaFlujoPermeado}
          />
          <TarjetaNormalizacion
            name="Paso de Sales Normalizado"
            unit="%"
            value={(
              ultimoDatoNormalizacion.norm_perm_salt_passage * 100
            ).toFixed(1)}
            clickMe={scrollGrafico}
            clickType={"ref_graph"}
            idRef="graficoSales"
            size="medium-tarjeta"
          />
          <TarjetaNormalizacion
            name="Rechazo de Sales Normalizado"
            unit="%"
            value={(
              ultimoDatoNormalizacion.norm_perm_salt_rejection * 100
            ).toFixed(1)}
            clickMe={scrollGrafico}
            clickType={"ref_graph"}
            idRef="graficoSales"
            size="medium-tarjeta"
          />
          <TarjetaNormalizacion
            style={{}}
            name="Diferencial de Presión"
            unit="bar"
            value={ultimoDatoNormalizacion.diffP.toFixed(1)}
            clickMe={scrollGrafico}
            clickType={"ref_graph"}
            idRef="graficoDiffPresion"
            size="medium-tarjeta"
          />
          <TarjetaNormalizacion
            name="Última limpieza CIP"
            value={
              ultimoCIP === "-" ? ultimoCIP : formatearFechaDDMMYY(ultimoCIP)
            }
            number={1}
            size="medium-tarjeta"
          />
          <TarjetaNormalizacion
            name="Último cambio de membrana"
            value={
              ultimoCambioMembrana === "-"
                ? ultimoCambioMembrana
                : formatearFechaDDMMYY(ultimoCambioMembrana)
            }
            number={1}
            size="medium-tarjeta"
          />
        </Grid>
      </div>

      <Alerta
        openModal={openModalLimites}
        color={
          tipoAlertaFlujoPermeado != ""
            ? tipoAlertaFlujoPermeado
            : ultimaAlarmaLimite.id != ""
              ? Number(ultimaAlarmaLimite.id_alerta) === 41
                ? "warning"
                : "critical"
              : ""
        }
        show={
          (getEstadoFlujoPermeado() || ultimaAlarmaLimite.id != "") &&
          props.idPlanta !== 14
            ? true
            : false
        }
        valor={Number(ultimoDatoNormalizacion.flujo_permeado_norm).toFixed(1)}
        unidad={"m³/h"}
        datoActual={tipoAlertaFlujoPermeado != "" ? true : false}
        mensajeAlerta={ultimaAlarmaLimite.descripcion}
        fecha={
          tipoAlertaFlujoPermeado != ""
            ? formatearFechaDDMMYY(ultimoDatoNormalizacion.fecha)
            : formatearFechaDDMMYY(ultimaAlarmaLimite.ialarma)
        }
      />

      <div>
        <Grid
          container
          style={{ padding: "0px 15px" }}
          spacing={3}>
          <Grid
            item
            xs={12}
            md={12}
            lg={12}>
            <Card>
              <CardHeader style={{ padding: "0.75rem 1.25rem" }}>
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center">
                  <Grid item>
                    <div className="card-header-title font-size-md font-weight-bold">
                      Flujo de Permeado Normalizado (m³/h)
                    </div>
                  </Grid>

                  <Grid item>
                    <Grid
                      container
                      alignItems="center">
                      <IconoMantenciones
                        style={{ cursor: "pointer", margin: "0px 10px" }}
                        onClick={() => {
                          setShowModalInsertarMantencion(true);
                        }}
                      />
                      <IconoCampana
                        style={{ cursor: "pointer" }}
                        onClick={() => setShowModalUpdateLimites(true)}
                      />
                      <Button
                        style={{ margin: "0px 0px 0px 15px" }}
                        onClick={() => onClickMostrarModal(0)}
                        color="info">
                        Ver tabla
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </CardHeader>
              <CardBody>
                <div id="graficoFlujoPermeado">
                  <GraficoNormalizacion
                    opciones={opcionesFlujoPermeado}
                    series={seriesFlujoPermeado}
                    type="area"
                  />
                </div>
              </CardBody>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            lg={6}>
            <Card>
              <CardHeader style={{ padding: "0.75rem 1.25rem" }}>
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center">
                  <Grid item>
                    <div className="card-header-title font-size-md font-weight-bold">
                      Paso y Rechazo de Sales (%)
                    </div>
                  </Grid>

                  <Grid item>
                    <Grid
                      container
                      alignItems="center">
                      {/* <IconoCampana style={{cursor:"pointer"}} onClick={()=>setShowModalUpdateLimites(true)}/> */}
                      <Button
                        style={{ margin: "0px 0px 0px 15px" }}
                        onClick={() => onClickMostrarModal(1)}
                        color="info">
                        Ver tabla
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </CardHeader>
              <CardBody>
                <div id="graficoSales">
                  <GraficoNormalizacion
                    opciones={opcionesSales}
                    series={seriesSales}
                    type="line"
                  />
                </div>
              </CardBody>
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            md={12}
            lg={6}>
            <Card>
              <CardHeader style={{ padding: "0.75rem 1.25rem" }}>
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center">
                  <Grid item>
                    <div className="card-header-title font-size-md font-weight-bold">
                      Diferencial de Presión (bar)
                    </div>
                  </Grid>

                  <Grid item>
                    <Grid
                      container
                      alignItems="center">
                      <IconoCampana
                        style={{ cursor: "pointer" }}
                        onClick={() => setShowModalUpdateLimites(true)}
                      />
                      <Button
                        style={{ margin: "0px 0px 0px 15px" }}
                        onClick={() => onClickMostrarModal(2)}
                        color="info">
                        Ver tabla
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </CardHeader>
              <CardBody>
                <div id="graficoDiffPresion">
                  <GraficoNormalizacion
                    opciones={opcionesDiffPresion}
                    series={seriesCaidaPresion}
                    type="area"
                  />
                </div>
              </CardBody>
            </Card>
          </Grid>
        </Grid>
        <ModalNormalizacion
          planta={{ id: props.idPlanta, nombre: props.nombrePlanta }}
          data={datosNormalizacion}
          show={mostrarModalTabla}
          posSeleccionDatosGraficos={posSeleccionDatosGraficos}
          onClickHide={onClickHide}
          ultimoDato={ultimoDatoNormalizacion}
          actualizarData={onHandleActualizarData}
        />

        <ModalAlertaLimite
          show={false /* showModalLimites && !mostrarModalTabla ?true:false */}
          planta={{ id: props.idPlanta, nombre: props.nombrePlanta }}
          handleShow={setShowModalLimites}
          actualizaMembranas={handleActualizaMantencion}
          color={
            tipoAlertaFlujoPermeado != ""
              ? tipoAlertaFlujoPermeado
              : ultimaAlarmaLimite.id != ""
                ? Number(ultimaAlarmaLimite.id_alerta) === 41
                  ? "warning"
                  : "critical"
                : ""
          }
          valor={Number(ultimoDatoNormalizacion.flujo_permeado_norm).toFixed(1)}
          unidad={"m³/h"}
          datoActual={tipoAlertaFlujoPermeado != "" ? true : false}
          mensajeAlerta={ultimaAlarmaLimite.descripcion}
          fecha={
            tipoAlertaFlujoPermeado != ""
              ? formatearFechaDDMMYY(ultimoDatoNormalizacion.fecha)
              : formatearFechaDDMMYY(ultimaAlarmaLimite.ialarma)
          }
        />
      </div>

      <ModalLimites
        mostrar={showModalUpdateLimites}
        limitesData={limites}
        onGuardar={(datos) => actualizarLimites(datos)}
        onHide={setShowModalUpdateLimites}
      />

      <ModalInsertarMantencion
        planta={{ id: props.idPlanta, nombre: props.nombrePlanta }}
        handleShow={setShowModalInsertarMantencion}
        actualizaMembranas={handleActualizaMantencion}
        show={showModalInsertarMantencion}
      />

      <SweetAlert
        title="Actualización de datos"
        confirmButtonColor="#353a40"
        confirmButtonText="Aceptar"
        show={showAlertLimites}
        text={alertLimites.message}
        button="Coolio"
        onConfirm={() => setShowAlertLimites(false)}
      />
    </>
  );
};

export default DemoNormalizacionDow;

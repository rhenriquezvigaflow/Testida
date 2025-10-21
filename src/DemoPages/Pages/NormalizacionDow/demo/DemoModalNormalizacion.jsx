import { Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import ReactTable from "react-table";
import { Button } from "reactstrap";
import "../../../../commons/styles/ReactTable.css";
import "../normalizacion.css";
import UseContext from "../../../../Layout/AppMain/UserContext";
import formatearFechaDDMMYY from "../../../../commons/functions/FormatearFechaDDMMYY";
import apis from "../../../../config/apiStore";

const ModalNormalizacion = (props) => {
  const objSeleccion = {
    id: ""
  };

  const [show, setShow] = useState(false);
  const [datosNormalizacion, setDatosNormalizacion] = useState([]);
  const [guardarCambios, setGuardarCambios] = useState(false);
  const [posSeleccionDatosGraficos, setPosSeleccionDatosGraficos] = useState(0);
  const [cambiarParametros, setCambiarParametros] = useState(false);

  const [seleccionFlujoPermeado] = useState([]);
  const [seleccionSales] = useState([]);

  const [selectFlujoPermTCF, setSelectFlujoPermTCF] = useState(objSeleccion);
  const [selectFlujoPermNDP, setSelectFlujoPermNDP] = useState(objSeleccion);

  const [selectSalesFlujoPerm, setSelectSalesFlujoPerm] =
    useState(objSeleccion);
  const [selectSalesTDSCalcAli, setSelectSalesTDSCalcAli] =
    useState(objSeleccion);
  const [selectSalesCalcFeedBrane, setSelectSalesCalcFeedBrane] =
    useState(objSeleccion);

  const user = React.useContext(UseContext);

  const listaSeleccionGrafico = [
    {
      id: 0,
      nombre: "Flujo de permeado normalizado (m³/h)",
      configColumnas: columnasFlujoPermeado
    },
    {
      id: 1,
      nombre: "Paso y Rechazo de Sales (%)",
      configColumnas: columnasSales
    },
    {
      id: -1,
      nombre: "Diferencial de Presión (bar)",
      configColumnas: columnasDiffPresion
    }
  ];

  const celdaStyle = {
    justifyContent: "center",
    whiteSpace: "unset",
    /* display: "flex", */
    lineHeight: "1.3"
  };

  const onClickSetVarSelected = (idPadre, row, codJson) => {
    switch (idPadre) {
      case 22:
        switch (codJson) {
          case "tcf":
            setSelectFlujoPermTCF(row);
            break;
          case "ndp":
            setSelectFlujoPermNDP(row);
            break;
        }
        break;
      case 23:
        switch (codJson) {
          case "flujo_permeado":
            setSelectSalesFlujoPerm(row);
            break;
          case "tds_calc_alimen":
            setSelectSalesTDSCalcAli(row);
            break;
          case "calc_feed_brine_avg":
            setSelectSalesCalcFeedBrane(row);
            break;
        }
        break;
    }
  };

  const getCellStyle = (idPadre, row, seleccion, datoSeleccionado, codJson) => {
    switch (getSeleccion(row, seleccion, codJson)) {
      case "selec":
        if (cambiarParametros) {
          return (
            <div
              className={`box-seleccionar box-seleccion${
                Number(datoSeleccionado.id) === Number(row.id)
                  ? " ultimo-color"
                  : ""
              }`}
              onClick={() => onClickSetVarSelected(idPadre, row, codJson)}>
              {Number(row[codJson]).toFixed(2)}
            </div>
          );
        } else {
          return (
            <div className="box-seleccion">
              {Number(row[codJson]).toFixed(2)}
            </div>
          );
        }
        break;
      case "ultimoSelec":
        if (cambiarParametros) {
          if (true) {
            return (
              <div className="box-seleccion">
                {Number(row[codJson]).toFixed(2)}
              </div>
            );
          } else {
            return (
              <div className="box-seleccion ultimo-color">
                {Number(row[codJson]).toFixed(2)}
              </div>
            );
          }
        } else {
          return (
            <div className="box-seleccion ultimo-color">
              <i className={"modal-icono-lock-blue pe-7s-lock"} />
              {Number(row[codJson]).toFixed(2)}
            </div>
          );
        }
        break;
      default:
        if (cambiarParametros) {
          return (
            <div
              className={`box-seleccionar${
                Number(datoSeleccionado.id) === Number(row.id)
                  ? " box-seleccion ultimo-color"
                  : ""
              }`}
              onClick={() => onClickSetVarSelected(idPadre, row, codJson)}>
              {Number(row[codJson]).toFixed(2)}
            </div>
          );
        } else {
          return <div>{Number(row[codJson]).toFixed(2)}</div>;
        }
        break;
    }
  };

  const getSeleccion = (row, datosSelec, codJson) => {
    let datoSeleccion = "noSelec";
    for (let i = 0; i < datosSelec.length; i++) {
      if (codJson == datosSelec[i].codJsonHijo) {
        if (Number(datosSelec[i].idDatosNorm) === Number(row.id)) {
          if (datosSelec[i].ultimo) {
            datoSeleccion = "ultimoSelec";
            break;
          } else {
            datoSeleccion = "selec";
            break;
          }
        }
      }
    }
    return datoSeleccion;
  };

  const columnasFlujoPermeado = [
    {
      columns: [
        {
          accessor: "id",
          show: false
        },
        {
          Header: () => <div className="headerTableModal">Fecha</div>,
          accessor: "fecha",
          filterable: false,
          show: true,
          style: celdaStyle,
          Cell: ({ value }) => formatearFechaDDMMYY(value)
        },
        {
          Header: () => (
            <div className="headerTableModal">
              Flujo de <br /> permeado
            </div>
          ),
          accessor: "flujo_permeado",
          filterable: false,
          show: true,
          style: celdaStyle,
          Cell: ({ value }) => Number(value).toFixed(2)
        },
        {
          Header: () => (
            <div className="headerTableModal">
              Temperatura <br /> factor de corrección
            </div>
          ),
          accessor: "tcf",
          filterable: false,
          show: true,
          style: celdaStyle,
          minWidth: 160,
          Cell: ({ row }) =>
            getCellStyle(
              22,
              row,
              seleccionFlujoPermeado,
              selectFlujoPermTCF,
              "tcf"
            )
        },
        {
          Header: () => (
            <div className="headerTableModal">
              Presión <br /> neta
            </div>
          ),
          accessor: "ndp",
          filterable: false,
          show: true,
          style: celdaStyle,
          minWidth: 140,
          Cell: ({ row }) =>
            getCellStyle(
              22,
              row,
              seleccionFlujoPermeado,
              selectFlujoPermNDP,
              "ndp"
            )
        },
        {
          Header: () => (
            <div className="headerTableModal">
              Flujo permeado <br /> normalizado
            </div>
          ),
          accessor: "flujo_permeado_norm",
          filterable: false,
          show: true,
          style: celdaStyle,
          minWidth: 140,
          Cell: ({ value }) => Number(value).toFixed(2)
        },
        {
          Header: () => (
            <div className="headerTableModal">
              Límite <br /> permeado 10%
            </div>
          ),
          accessor: "lim_permeado_10",
          filterable: false,
          show: true,
          style: celdaStyle,
          minWidth: 140,
          Cell: ({ value }) => Number(value).toFixed(2)
        },
        {
          Header: () => (
            <div className="headerTableModal">
              Límite <br /> permeado 15%
            </div>
          ),
          accessor: "lim_permeado_15",
          filterable: false,
          show: true,
          style: celdaStyle,
          minWidth: 140,
          Cell: ({ value }) => Number(value).toFixed(2)
        }
      ]
    }
  ];

  const columnasDiffPresion = [
    {
      columns: [
        {
          accessor: "id",
          show: false
        },
        {
          Header: () => <div className="headerTableModal">Fecha</div>,
          accessor: "fecha",
          filterable: false,
          show: true,
          style: celdaStyle,
          Cell: ({ value }) => formatearFechaDDMMYY(value)
        },
        {
          Header: () => (
            <div className="headerTableModal">
              Presión <br /> alimentación
            </div>
          ),
          accessor: "presion_alimen",
          filterable: false,
          show: true,
          style: celdaStyle,
          Cell: ({ value }) => Number(value).toFixed(2)
        },
        {
          Header: () => (
            <div className="headerTableModal">
              Presión <br /> concentrado
            </div>
          ),
          accessor: "presion_concentrado",
          filterable: false,
          show: true,
          style: celdaStyle,
          minWidth: 160,
          Cell: ({ value }) => Number(value).toFixed(2)
        },
        {
          Header: () => (
            <div className="headerTableModal">
              Diferencial <br /> de presión
            </div>
          ),
          accessor: "diffP",
          filterable: false,
          show: true,
          style: celdaStyle,
          Cell: ({ value }) => Number(value).toFixed(2)
        },
        {
          Header: () => (
            <div className="headerTableModal">
              Límite <br /> {"ΔP>20%"}
            </div>
          ),
          accessor: "lim_diffP_20",
          filterable: false,
          show: true,
          style: celdaStyle,
          minWidth: 140,
          Cell: ({ value }) => Number(value).toFixed(2)
        }
      ]
    }
  ];

  const columnasSales = [
    {
      columns: [
        {
          accessor: "id",
          show: false
        },
        {
          Header: () => <div className="headerTableModal">Fecha</div>,
          accessor: "fecha",
          filterable: false,
          show: true,
          style: celdaStyle,
          Cell: ({ value }) => formatearFechaDDMMYY(value)
        },
        {
          Header: () => (
            <div className="headerTableModal">
              Flujo de <br /> permeado
            </div>
          ),
          accessor: "flujo_permeado",
          filterable: false,
          show: true,
          style: celdaStyle,
          minWidth: 140,
          Cell: ({ row }) =>
            getCellStyle(
              23,
              row,
              seleccionSales,
              selectSalesFlujoPerm,
              "flujo_permeado"
            )
        },
        {
          Header: () => (
            <div className="headerTableModal">
              TDS calculado <br /> alimentación
            </div>
          ),
          accessor: "tds_calc_alimen",
          filterable: false,
          show: true,
          style: celdaStyle,
          minWidth: 160,
          Cell: ({ row }) =>
            getCellStyle(
              23,
              row,
              seleccionSales,
              selectSalesTDSCalcAli,
              "tds_calc_alimen"
            )
        },
        {
          Header: () => (
            <div className="headerTableModal">
              Alimentación <br /> salmuera conc. prom.
            </div>
          ),
          accessor: "calc_feed_brine_avg",
          filterable: false,
          show: true,
          style: celdaStyle,
          minWidth: 180,
          Cell: ({ row }) =>
            getCellStyle(
              23,
              row,
              seleccionSales,
              selectSalesCalcFeedBrane,
              "calc_feed_brine_avg"
            )
        },
        {
          Header: () => (
            <div className="headerTableModal">
              Paso de sales <br /> normalizado
            </div>
          ),
          accessor: "norm_perm_salt_passage",
          filterable: false,
          show: true,
          style: celdaStyle,
          minWidth: 140,
          Cell: ({ value }) => Number(value).toFixed(2)
        },
        {
          Header: () => (
            <div className="headerTableModal">
              Rechazo de sales <br /> normalizado
            </div>
          ),
          accessor: "norm_perm_salt_rejection",
          filterable: false,
          show: true,
          style: celdaStyle,
          minWidth: 140,
          Cell: ({ value }) => Number(value).toFixed(2)
        }
      ]
    }
  ];

  useEffect(() => {
    setPosSeleccionDatosGraficos(props.posSeleccionDatosGraficos);
  }, [props.posSeleccionDatosGraficos]);

  useEffect(() => {
    if (props.show) {
      showModal();
    }
  }, [props.show]);

  useEffect(() => {
    setDatosNormalizacion(props.data);
  }, [props.data]);

  const showModal = () => {
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
    props.onClickHide(false);
    onClickCancelarCambioParametros();
  };

  const onClickArrow = (sumaId) => {
    if (sumaId) {
      if (
        Number(posSeleccionDatosGraficos) <
        listaSeleccionGrafico.length - 1
      ) {
        setPosSeleccionDatosGraficos(posSeleccionDatosGraficos + 1);
      }
    } else {
      if (Number(posSeleccionDatosGraficos) > 0) {
        setPosSeleccionDatosGraficos(posSeleccionDatosGraficos - 1);
      }
    }
  };

  const exportarDatosNormDow = () => {
    const fileName = `${props.planta.nombre}_Normalizacion_Dow.xls`;
    const uri = `${apis.exportarDatosNormDow}?id_planta=${props.planta.id}`;
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
  };

  const onClickCambiarParametros = () => {
    setCambiarParametros(true);
  };

  const onClickCancelarCambioParametros = () => {
    setCambiarParametros(false);
    setGuardarCambios(false);
    setSelectFlujoPermTCF(objSeleccion);
    setSelectFlujoPermNDP(objSeleccion);
    setSelectSalesFlujoPerm(objSeleccion);
    setSelectSalesTDSCalcAli(objSeleccion);
    setSelectSalesCalcFeedBrane(objSeleccion);
  };

  const onClickConfirmarCambioParametros = () => {};

  return (
    <Modal
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={hideModal}>
      <div
        style={{
          paddingTop: "10px",
          paddingBottom: "10px"
        }}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          className="modal-padding-titulo-cerrar">
          <div
            align="left"
            className="card-header-title font-size-md font-weight-bold" /* "modal-title" */
          >
            {`Planta ${props.planta.nombre} / Normalización de Membranas`}
          </div>
          <i
            className="modal-icono-close pe-7s-close-circle"
            onClick={hideModal}
          />
        </Grid>
      </div>
      <hr style={{ margin: "0px 0px 20px 0px" }} />

      <div className="modal-padding">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          /* style = {{padding: "0.5rem 2.5rem"}} */
        >
          <Grid
            item
            lg={6}
            md={12}
            xs={12}
            sm={12}>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center">
              <i
                className={`pe-7s-angle-left modal-icono-arrow${
                  Number(
                    listaSeleccionGrafico[posSeleccionDatosGraficos].id
                  ) === 0
                    ? "-disabled"
                    : ""
                }`}
                onClick={() => {
                  onClickArrow(false);
                }}
              />
              <Grid
                item
                lg={6}>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center">
                  <Grid
                    item
                    lg={12}
                    md={12}
                    xs={12}>
                    <div>Tabla de datos</div>
                  </Grid>
                  <Grid
                    item
                    lg={12}
                    md={12}
                    xs={12}>
                    <div className="font-weight-bold">
                      {listaSeleccionGrafico[posSeleccionDatosGraficos].nombre}
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <i
                className={`pe-7s-angle-right modal-icono-arrow${
                  Number(
                    listaSeleccionGrafico[posSeleccionDatosGraficos].id
                  ) === -1
                    ? "-disabled"
                    : ""
                }`}
                onClick={() => {
                  onClickArrow(true);
                }}
              />
            </Grid>
          </Grid>

          <Grid
            item
            lg={6}>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={3}>
              <Grid item>
                {!cambiarParametros && (
                  <Button
                    color="info"
                    onClick={onClickCambiarParametros}
                    style={{ width: "200px" }}>
                    <i className={"modal-icono-lock pe-7s-lock"} />
                    {/* <Ionicon fontSize="13px" color="#fff" icon={"md-lock"}/> */}
                    Cambiar parámetros
                  </Button>
                )}

                {cambiarParametros && (
                  <Button
                    onClick={() => setGuardarCambios(true)}
                    color="info"
                    style={{
                      backgroundColor: "#3474E0",
                      borderColor: "#3474E0",
                      width: "200px"
                    }}>
                    <div style={{ alignItems: "center" }}>
                      <i className={"modal-icono-lock pe-7s-lock"} />
                      {/* <Ionicon fontSize="13px" color="#fff" icon={"md-lock"}/> */}
                      Guardar Cambios
                    </div>
                  </Button>
                )}
              </Grid>
              <Grid item>
                <Button
                  style={{ width: "200px" }}
                  onClick={exportarDatosNormDow}
                  color="info">
                  Descargar datos
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {guardarCambios && (
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            className="box-confirmar">
            <Grid
              item
              lg={6}>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center">
                <Grid
                  item
                  lg={12}>
                  <div>
                    ¿Está seguro que desea modificar los parámetros
                    seleccionados?
                  </div>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              lg={6}>
              <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                spacing={3}>
                <Grid item>
                  <button
                    onClick={onClickCancelarCambioParametros}
                    className="button-confirmar">
                    Confirmar
                  </button>

                  <button
                    onClick={onClickCancelarCambioParametros}
                    className="button-cancelar">
                    Cancelar
                  </button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
        <ReactTable
          style={{ marginTop: "20px" }}
          className="-striped -highlight -hide-paging"
          NoDataComponent={() => null}
          resizable={false}
          showPageSizeOptions={false}
          pageSize={31}
          minRows={1}
          previousText="Página Anterior"
          nextText="Página Siguiente"
          pageText="Página"
          ofText="de"
          rowsText="Filas"
          defaultSorted={[
            {
              id: "fecha",
              desc: true
            }
          ]}
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) == filter.value
          }
          columns={
            Number(listaSeleccionGrafico[posSeleccionDatosGraficos].id) === 0
              ? columnasFlujoPermeado
              : Number(listaSeleccionGrafico[posSeleccionDatosGraficos].id) ===
                  1
                ? columnasSales
                : columnasDiffPresion
          }
          data={datosNormalizacion}
        />
      </div>
    </Modal>
  );
};
export default ModalNormalizacion;

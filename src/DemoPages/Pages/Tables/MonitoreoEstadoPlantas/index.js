import React, { useEffect, useState, useContext } from "react";

import "react-datepicker/dist/react-datepicker.css";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

import ReactTable from "react-table";
import "../../../../commons/styles/ReactTable.css";
import "../table.css";
import { Grid } from "@material-ui/core";
import UseContext from "../../../../Layout/AppMain/UserContext";
import KpiCard from "../../../../commons/components/KpiCard";
import apis from "../../../../config/apiStore";

const MonitoreoEstadoPlantas = () => {
  const user = useContext(UseContext);

  const [columnasPlantas, setColumnasPlantas] = useState([]);
  const [contadores, setContadores] = useState({});
  const celdaStyle = {
    justifyContent: "flex-start",
    whiteSpace: "unset",
    lineHeight: "1.3"
  };

  const greencircleStyle = {
    padding: 8,
    margin: 0,
    display: "inline-block",
    backgroundColor: "#21b573",
    borderRadius: "50%",
    width: 1,
    height: 1
  };

  const redcircleStyle = {
    padding: 8,
    margin: 0,
    display: "inline-block",
    backgroundColor: "#d9534f",
    borderRadius: "50%",
    width: 1,
    height: 1
  };

  const orangecircleStyle = {
    padding: 8,
    margin: 0,
    display: "inline-block",
    backgroundColor: "#f0ad4e",
    borderRadius: "50%",
    width: 1,
    height: 1
  };

  const bluecircleStyle = {
    padding: 8,
    margin: 0,
    display: "inline-block",
    backgroundColor: "#3474e0",
    borderRadius: "50%",
    width: 1,
    height: 1
  };

  const blackcircleStyle = {
    padding: 8,
    margin: 0,
    display: "inline-block",
    backgroundColor: "#55595c",
    borderRadius: "50%",
    width: 1,
    height: 1
  };

  const columnas = [
    {
      columns: [
        {
          accessor: "planta_id",
          show: false
        },
        {
          Header: () => <div className="headerTableModal">Planta</div>,
          accessor: "planta_nombre",
          filterable: false,
          show: true,
          style: celdaStyle
        },
        {
          Header: () => <div className="headerTableModal">Estado</div>,
          accessor: "con_estado",
          filterable: false,
          show: true,
          style: celdaStyle,
          Cell: ({ value }) =>
            Number(value) === 0 ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  float: "left",
                  marginLeft: "5%"
                }}>
                <div style={blackcircleStyle} />
                <div style={{ marginLeft: "6px" }}>{"Desconectada"}</div>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  float: "left",
                  marginLeft: "5%"
                }}>
                <div style={bluecircleStyle} />
                <div style={{ marginLeft: "6px" }}>{"Enviando datos"}</div>
              </div>
            )
        },
        {
          Header: () => <div className="headerTableModal">Alerta</div>,
          accessor: "norm_tipo_limite",
          filterable: false,
          show: true,
          style: celdaStyle,
          Cell: ({ value }) =>
            value === "Alerta preventiva" ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  float: "left",
                  marginLeft: "5%"
                }}>
                <div style={orangecircleStyle} />
                <div style={{ marginLeft: "6px" }}>{value}</div>
              </div>
            ) : value === "Alerta crítica" ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  float: "left",
                  marginLeft: "5%"
                }}>
                <div style={redcircleStyle} />
                <div style={{ marginLeft: "6px" }}>{value}</div>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  float: "left",
                  marginLeft: "5%"
                }}>
                <div style={greencircleStyle} />
                <div style={{ marginLeft: "6px" }}>{value}</div>
              </div>
            )
        }
      ]
    }
  ];

  const getEstadoPlantas = async () => {
    const headers = { "Id-User": user.id_user, "Token": user.token };
    const res = await fetch(apis.getEstadoPlantas, {
      method: "GET",
      headers: headers,
      credentials: "include"
    });
    const json = await res.json();

    const filteredPlants = json.filter(
      (plant) =>
        plant.planta_nombre !== "Lader" && plant.planta_nombre !== "SESAMAR"
    );

    setContadores({
      conectadas: filteredPlants.filter((e) => Number(e.con_estado) === 1)
        .length,
      desconectadas: filteredPlants.filter((e) => Number(e.con_estado) === 0)
        .length,
      preventivas: filteredPlants.filter(
        (e) => e.norm_tipo_limite === "Alerta preventiva"
      ).length,
      criticas: filteredPlants.filter(
        (e) => e.norm_tipo_limite === "Alerta crítica"
      ).length
    });

    setColumnasPlantas(filteredPlants);
  };

  useEffect(() => {
    getEstadoPlantas();
  }, []);

  return (
    <>
      <h1
        style={{ marginBottom: "10px", marginLeft: "10px", color: "#303D48" }}
        className="card-header-title font-size-lg font-weight-bold text-uppercase">
        Monitoreo Plantas
      </h1>
      <div>
        <Breadcrumb
          style={{ marginLeft: "10px" }}
          className="Breadcrumb">
          <BreadcrumbItem>IdA</BreadcrumbItem>
          <BreadcrumbItem>Estado Plantas</BreadcrumbItem>
        </Breadcrumb>
      </div>

      <Grid
        container
        spacing={3}
        justifyContent="space-between">
        <Grid
          item
          xs={12}
          md={6}
          lg={3}>
          <KpiCard
            name="Plantas conectadas"
            value={
              Object.keys(contadores).length > 0 ? contadores.conectadas : "-"
            }
            size="medium-tarjeta"
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={3}>
          <KpiCard
            name="Plantas desconectadas"
            value={
              Object.keys(contadores).length > 0
                ? contadores.desconectadas
                : "-"
            }
            size="medium-tarjeta"
            color="disconnect"
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={3}>
          <KpiCard
            name="Plantas en alerta crítica"
            value={
              Object.keys(contadores).length > 0 ? contadores.criticas : "-"
            }
            size="medium-tarjeta"
            color="critical"
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={3}>
          <KpiCard
            name="Plantas en alerta preventiva"
            value={
              Object.keys(contadores).length > 0 ? contadores.preventivas : "-"
            }
            size="medium-tarjeta"
            color="warning"
          />
        </Grid>
      </Grid>

      <ReactTable
        style={{ marginTop: "20px" }}
        className="-striped -highlight -hide-paging"
        NoDataComponent={() => null}
        resizable={false}
        showPageSizeOptions={false}
        minRows={1}
        pageSize={30}
        previousText="Página Anterior"
        nextText="Página Siguiente"
        pageText="Página"
        ofText="de"
        rowsText="Filas"
        defaultSorted={[
          {
            id: "planta_nombre",
            desc: false
          }
        ]}
        defaultFilterMethod={(filter, row) =>
          String(row[filter.id]) === filter.value
        }
        columns={columnas}
        data={columnasPlantas}
      />
    </>
  );
};

export default MonitoreoEstadoPlantas;

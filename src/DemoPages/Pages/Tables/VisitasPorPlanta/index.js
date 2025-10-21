import React, { useEffect, useState, useContext } from "react";

import "react-datepicker/dist/react-datepicker.css";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

import ReactTable from "react-table";
import "../../../../commons/styles/ReactTable.css";
import "../table.css";
import UseContext from "../../../../Layout/AppMain/UserContext";
import apis from "../../../../config/apiStore";

const VisitasPorPlanta = () => {
  const user = useContext(UseContext);

  const [columnasPlantas, setColumnasPlantas] = useState([]);
  const celdaStyle = {
    justifyContent: "flex-start",
    whiteSpace: "unset",
    lineHeight: "1.3"
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
          Header: () => <div className="headerTableModal">Última conexión</div>,
          accessor: "fecha_ultima_visita",
          filterable: false,
          show: true,
          style: {
            justifyContent: "center",
            whiteSpace: "unset",
            lineHeight: "1.3"
          },
          Cell: ({ value }) => (value ? value : "-")
        }
      ]
    }
  ];

  const getVisitasPlantas = async () => {
    const headers = { "Id-User": user.id_user, "Token": user.token };
    const res = await fetch(apis.getVisitasPorPlanta, {
      method: "GET",
      headers: headers,
      credentials: "include"
    });
    const json = await res.json();

    setColumnasPlantas(json);
  };

  useEffect(() => {
    getVisitasPlantas();
  }, []);

  return (
    <>
      <h1
        style={{ marginBottom: "10px", marginLeft: "10px", color: "#303D48" }}
        className="card-header-title font-size-lg font-weight-bold text-uppercase">
        Visitas por Planta
      </h1>
      <div>
        <Breadcrumb
          style={{ marginLeft: "10px" }}
          className="Breadcrumb">
          <BreadcrumbItem>IdA</BreadcrumbItem>
          <BreadcrumbItem>Visitas por Planta</BreadcrumbItem>
        </Breadcrumb>
      </div>

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
          String(row[filter.id]) == filter.value
        }
        columns={columnas}
        data={columnasPlantas}
      />
    </>
  );
};

export default VisitasPorPlanta;

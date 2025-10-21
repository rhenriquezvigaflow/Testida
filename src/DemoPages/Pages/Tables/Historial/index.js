import React, { Fragment } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Card, CardBody, Col, Row } from "reactstrap";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import UseContext from "../../../../Layout/AppMain/UserContext";
import apis from "../../../../config/apiStore";
import "../../../../commons/styles/pages.styles.css";
import ReactTable from "react-table";
import "../../../../commons/styles/ReactTable.css";
import formatearFecha from "../../../../commons/functions/FormatearFecha";

const celdaStyle = {
  whiteSpace: "unset",
  display: "flex",
  lineHeight: "1.3"
};

export default class Historial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id_user: 0,
      perfil: 2,
      loaded: false,
      show: false,
      selection: 0
    };
  }

  componentDidMount() {
    this.load();
  }

  load() {
    fetch(apis.listLog, {
      headers: { "Id-User": this.context.id_user, "Token": this.context.token }
    })
      .then((res) => res.json())
      .then((json) => {
        for (let i = 0; i < json.length; i++) {
          if (json[i].fecha != null) {
            json[i].fecha = formatearFecha(json[i].fecha);
          }
        }
        this.setState({
          items: json,
          loaded: true
        });
      });
  }

  render() {
    const defaultSorted = [
      {
        dataField: "name",
        order: "desc"
      }
    ];

    const columns2 = [
      {
        accessor: "id",
        Header: () => <div className="headerTable">Id</div>,
        show: false,
        style: celdaStyle,
        minWidth: 30
      },
      {
        accessor: "usuario",
        Header: () => <div className="headerTable">Usuario</div>,
        show: true,
        style: celdaStyle,
        minWidth: 80
      },
      {
        accessor: "fecha",
        Header: () => <div className="headerTable">Fecha</div>,
        filterable: false,
        show: true,
        style: celdaStyle,
        minWidth: 80
      },
      {
        accessor: "log",
        Header: () => <div className="headerTable">Detalle</div>,
        filterable: false,
        show: true,
        style: {
          whiteSpace: "unset",
          display: "flex",
          lineHeight: "1.3"
        },
        minWidth: 325
      }
    ];

    /*     let columns = [
      {
        dataField: "id",
        text: " ID",
        sort: true,
        filter: textFilter(),
      },
      {
        dataField: "usuario",
        text: "id_user",
        sort: true,
        filter: textFilter(),
      },
      {
        dataField: "fecha",
        text: "Fecha",
        sort: true,
        align: "center",
      },
      {
        dataField: "log",
        text: "Detalle",
        sort: true,
        align: "center",
      },
    ]; */

    if (!this.state.loaded) return <p>Cargando...</p>;
    else
      return (
        <Fragment>
          <ReactCSSTransitionGroup
            component="div"
            transitionName="TabsAnimation"
            transitionAppear={true}
            transitionAppearTimeout={0}
            transitionEnter={false}
            transitionLeave={false}>
            <Row>
              <Col md="12">
                <h1
                  style={{ marginBottom: "10px", color: "#303D48" }}
                  className="card-header-title font-size-lg font-weight-bold text-uppercase">
                  Historial de Cambios
                </h1>
                <div>
                  <Breadcrumb className="Breadcrumb">
                    <BreadcrumbItem>
                      <a /* href="#" */>IdA</a>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                      <a /* href="#" */>Usuarios</a>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Historial de Cambios</BreadcrumbItem>
                  </Breadcrumb>
                </div>
                <Card className="main-card mb-3">
                  <CardBody>
                    {/* <div className="table-responsive">
                      <BootstrapTable
                        bootstrap4
                        keyField="id"
                        data={this.state.items}
                        columns={columns}
                        filter={filterFactory()}
                        defaultSorted={defaultSorted}
                      />
                    </div> */}

                    <ReactTable
                      NoDataComponent={() => null}
                      resizable={false}
                      showPageSizeOptions={false}
                      pageSize={50}
                      minRows={1}
                      previousText="Página Anterior"
                      nextText="Página Siguiente"
                      pageText="Página"
                      ofText="de"
                      rowsText="Filas"
                      defaultFilterMethod={(filter, row) =>
                        String(row[filter.id]) === filter.value
                      }
                      data={this.state.items}
                      columns={columns2}
                      className="-striped -highlight -hide-paging"
                    />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </ReactCSSTransitionGroup>
        </Fragment>
      );
  }
}
Historial.contextType = UseContext;

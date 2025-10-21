import React, { Fragment } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Typeahead } from "react-bootstrap-typeahead";
import {
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledButtonDropdown
} from "reactstrap";
import { Button, Form, FormGroup, Label } from "reactstrap";
import SweetAlert from "sweetalert-react";
import UseContext from "../../../../Layout/AppMain/UserContext.js";
import apis from "../../../../config/apiStore.js";
import "../../../../commons/styles/pages.styles.css";
import ReactTable from "react-table";
import "../../../../commons/styles/ReactTable.css";
import Switch from "@material-ui/core/Switch";
import { makeStyles } from "@material-ui/core/styles";
import { Breadcrumb } from "react-bootstrap";
import options2 from "./datos2.js";

const useStyles = makeStyles((theme) => ({
  /* switch_track: {
        backgroundColor: "red",
    }, */
  switch_base: {
    /* color: "red", */
    "&.Mui-checked": {
      color: "#3474E0"
    },
    "&.Mui-checked + .MuiSwitch-track": {
      backgroundColor: "#3474E0"
    }
  }
}));

export default class Usuarios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      show: false,
      show1: false,
      showBloquear: false,
      edit: false,
      msj: "",
      typemsj: "warning",
      title: "Atención",
      selection: -1,
      plantaSeleccionada: {},
      plantas: [],
      bloquear: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangePlanta = this.onChangePlanta.bind(this);
  }

  styled() {
    return useStyles();
  }

  editar(id, name) {
    this.setState({
      Id: id,
      edit: true,
      name: name
    });
  }

  async bloquear(id, bloqueo) {
    const datosBody = new FormData();
    datosBody.append("usuario_id", this.state.id);
    datosBody.append("bloquear", this.state.bloquear);
    const res = await fetch(apis.bloquearUsuario, {
      method: "POST",
      headers: {
        "Id-User": this.context.id_user,
        "Token": this.context.token
      },
      body: datosBody
    });

    const json = await res.json();

    if (json.ok) this.load();
    this.setState({
      showBloquear: false
    });
  }

  handleChange(selectedOptions, e) {
    if (selectedOptions.length > 0) {
      this.setState({
        selection: selectedOptions[0]["id"]
      });
    } else {
      this.setState({
        selection: -1
      });
    }
  }

  onChangePlanta(selectedOptions, e) {
    if (selectedOptions.length > 0) {
      this.setState({
        plantaSeleccionada: selectedOptions[0]
      });
    } else {
      this.setState({
        plantaSeleccionada: {}
      });
    }
  }

  async getPlantas() {
    const res = await fetch(apis.getPlantas, {
      method: "GET",
      headers: {
        "Id-User": this.context.id_user,
        "Token": this.context.token
      }
    });

    const json = await res.json();
    this.setState({
      plantas: json
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (
      this.state.selection === -1 ||
      Object.keys(this.state.plantaSeleccionada).length === 0
    ) {
      this.setState({
        msj: "Hay campos que faltan por completar",
        show1: true
      });
      return;
    }
    const url = `${apis.updateUser}?id=${this.state.Id}&perfil=${this.state.selection}&id_planta=${this.state.plantaSeleccionada.id}&id_empresa=${this.state.plantaSeleccionada.id_empresa}`;
    //POST request
    fetch(url, {
      method: "GET", //Request Type
      //post body
      headers: {
        //Header Defination
        "Content-Type": "multipart/form-data",
        "Id-User": this.context.id_user,
        "Token": this.context.token
      }
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        this.setState({
          msj: "El perfil se ha modificado éxito",
          title: "Enhorabuena",
          typemsj: "success"
        });

        this.load();

        this.setState({
          show1: true,
          edit: false
        });
      })
      //If response is not in json then in error
      .catch((error) => {
        this.setState({
          msj: "Ha habido un problema al procesar la solicitud, revise su conexión a internet o intente más tarde",
          title: "Error",
          typemsj: "error"
        });

        this.setState({
          show1: true
        });
      });
  }

  restablecer(id) {
    const url = `${apis.resetPassword}?id=${id}`;
    fetch(url, {
      method: "GET", //Request Type
      headers: {
        "Content-Type": "multipart/form-data",
        "Id-User": this.context.id_user,
        "Token": this.context.token
      }
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        this.setState({
          msj: "Se ha enviado un correo al usuario para reestablecer la contraseña",
          title: "Enhorabuena",
          typemsj: "success"
        });
        this.setState({
          show1: true,
          edit: false
        });
      })
      .catch((error) => {
        this.setState({
          msj: "Ha habido un problema al procesar la solicitud, revise su conexión a internet o intente más tarde",
          title: "Error",
          typemsj: "error"
        });

        this.setState({
          show1: true
        });
      });
  }

  delete() {
    this.setState({ show: false });
    const datosBody = new FormData();
    datosBody.append("user_id", Number(this.state.id));
    fetch(apis.deleteUser, {
      method: "POST",
      body: datosBody,
      headers: {
        "Id-User": this.context.id_user,
        "Token": this.context.token
      }
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.ok) {
          const items = this.state.items.filter(
            (item) => item.id !== this.state.id
          );
          this.setState({ items: items, show: false });
        }
      });
  }

  informar(id, setear) {
    this.setState({ show: false });
    const formData = new FormData();
    formData.append("id", id);
    formData.append("id_user", this.state.id_user);

    if (Number(setear === 0)) formData.append("alertar", 0);
    else formData.append("alertar", 1);
    fetch(apis.informar, {
      headers: { "Id-User": this.context.id_user, "Token": this.context.token },
      method: "POST",
      body: formData
    })
      .then((res) => res.json())
      .then((json) => {
        const items = this.state.items;
        //Find index of specific object using findIndex method.
        const objIndex = items.findIndex((obj) => obj.id === id);

        if (Number(setear) === 1) items[objIndex].alertar = "1";
        else items[objIndex].alertar = "0";

        this.setState({ items: items });
      });
  }

  componentDidMount() {
    this.getPlantas();
    this.load();
  }

  load() {
    fetch(apis.listUser, {
      headers: { "Id-User": this.context.id_user, "Token": this.context.token }
    })
      .then((res) => res.json())
      .then((json) => {
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
        show: false
      },
      {
        accessor: "name",
        Header: () => <div className="headerTable">Nombre</div>,
        className: "cellTable",
        minWidth: 80
      },
      {
        accessor: "email",
        Header: () => <div className="headerTable">Email</div>,
        className: "cellTable",
        minWidth: 80
      },
      {
        accessor: "profile",
        Header: () => <div className="headerTable">Perfil</div>,
        className: "cellTable",
        minWidth: 80
      },
      {
        accessor: "planta",
        Header: () => <div className="headerTable">Planta alertar</div>,
        className: "cellTable"
      },
      {
        accessor: "bloqueado",
        Header: () => <div className="headerTable">Estado</div>,
        className: "cellTable",
        Cell: ({ row }) => (
          <>{Number(row.bloqueado) === 0 ? "Activo" : "Bloqueado"}</>
        )
      },
      {
        accessor: "alertar",
        Header: () => <div className="headerTable">Alertar</div>,
        className: "cellTable",
        minWidth: 40,
        Cell: ({ row }) => (
          <Switch
            classes={{
              /* track: this.styled().switch_track, */
              switchBase: this.styled().switch_base
            }}
            checked={Number(row.alertar) === 1}
            onChange={() =>
              this.informar(row.id, Number(row.alertar) === 1 ? 0 : 1)
            }
          />
        )
      },

      {
        accessor: "actions",
        Header: () => <div className="headerTable">Acciones</div>,
        className: "cellTable",
        minWidth: 40,
        Cell: ({ row }) => (
          <div style={{ position: "absolute" }}>
            <div className="d-block w-100 text-center">
              <UncontrolledButtonDropdown>
                <DropdownToggle
                  caret
                  className="btn-icon btn-icon-only btn btn-link"
                  color="link">
                  {/* <i className="lnr-menu-circle btn-icon-wrapper" /> */}
                </DropdownToggle>
                <DropdownMenu
                  right
                  className="rm-pointers dropdown-menu-hover-link">
                  <DropdownItem
                    onClick={() =>
                      this.setState({
                        showBloquear: true,
                        id: row.id,
                        bloquear: Number(row.bloqueado) === 0 ? 1 : 0
                      })
                    }>
                    {/* <i className="dropdown-icon lnr-file-empty"> </i> */}
                    <span>
                      {Number(row.bloqueado) === 0
                        ? "Bloquear usuario"
                        : "Desbloquear usuario"}
                    </span>
                  </DropdownItem>

                  <DropdownItem divider />

                  <DropdownItem onClick={() => this.editar(row.id, row.name)}>
                    {/* <i className="dropdown-icon lnr-file-empty"> </i> */}
                    <span>Editar accesos</span>
                  </DropdownItem>

                  {/* <DropdownItem onClick={() => this.restablecer(row.id)}>
                    <span>Reestablecer Contraseña</span>
                  </DropdownItem> */}
                  <DropdownItem divider />
                  <DropdownItem
                    onClick={() => this.setState({ show: true, id: row.id })}>
                    {/* <i className="dropdown-icon lnr-picture"> </i> */}
                    <span>Eliminar</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledButtonDropdown>
            </div>
          </div>
        )
      }
    ];

    /* const columns = [
      {
        dataField: "id",
        text: " ID",
        sort: true,
        filter: textFilter(),
      },
      {
        dataField: "name",
        text: "Nombre",
        sort: true,
        filter: textFilter(),
      },
      {
        dataField: "email",
        text: "Email",
        sort: true,
        align: "center",
        filter: textFilter(),
      },
      {
        dataField: "profile",
        text: "Perfil",
        sort: true,
        align: "center",
      },
      {
        dataField: "planta",
        text: "Recibir alerta de",
        sort: true,
        align: "center",
      },
      {
        dataField: "alertar",
        text: "Alertar",
        isDummyField: true,
        align: "center",
        formatter: (cellContent, row) => {
          return Number(row.alertar) === 1 ? (
            <img
              width={40}
              style={{ padding: 10 }}
              src={si}
              alt=""
              onClick={() => this.informar(row.id, 0)}
            />
          ) : (
            <img
              width={40}
              style={{ padding: 10 }}
              src={no}
              alt=""
              onClick={() => this.informar(row.id, 1)}
            />
          );
        },
      },

      {
        dataField: "actions",
        isDummyField: true,
        align: "center",
        text: "Acciones",
        formatter: (cellContent, row) => {
          return (
            <div>
              <div className="d-block w-100 text-center">
                <UncontrolledButtonDropdown>
                  <DropdownToggle
                    caret
                    className="btn-icon btn-icon-only btn btn-link"
                    color="link"
                  >
                    <i className="lnr-menu-circle btn-icon-wrapper" />
                  </DropdownToggle>
                  <DropdownMenu
                    right
                    className="rm-pointers dropdown-menu-hover-link"
                  >
                    <DropdownItem onClick={() => this.editar(row.id, row.name)}>
                      <i className="dropdown-icon lnr-file-empty"> </i>
                      <span>Editar Perfil</span>
                    </DropdownItem>

                    <DropdownItem onClick={() => this.restablecer(row.id)}>
                      <i className="dropdown-icon lnr-file-empty"> </i>
                      <span>Reestablecer Contraseña</span>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem
                      onClick={() => this.setState({ show: true, id: row.id })}
                    >
                      <i className="dropdown-icon lnr-picture"> </i>
                      <span>Eliminar</span>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledButtonDropdown>
              </div>
            </div>
          );
        },
      },
    ]; */

    if (!this.state.loaded) return <p>Cargando...</p>;

    return (
      <Fragment>
        <SweetAlert
          title="Alerta"
          confirmButtonColor="#3f3f3f"
          confirmButtonText="Confirmar"
          cancelButtonText="Cancelar"
          show={this.state.show}
          type="warning"
          text={"Está a un paso de eliminar al usuario seleccionado"}
          button="Coolio"
          showCancelButton
          onConfirm={() => this.delete()}
          onCancel={() => this.setState({ show: false })}
        />
        <SweetAlert
          title={this.state.title}
          confirmButtonColor="#3f3f3f"
          confirmButtonText="Aceptar"
          show={this.state.show1}
          type={this.state.typemsj}
          text={this.state.msj}
          button="Coolio"
          onConfirm={() => this.setState({ show1: false })}
        />
        <SweetAlert
          title="Alerta"
          confirmButtonColor="#3f3f3f"
          confirmButtonText="Confirmar"
          cancelButtonText="Cancelar"
          show={this.state.showBloquear}
          type="warning"
          text={"Está a un paso de cambiar el bloqueo del usuario seleccionado"}
          button="Coolio"
          showCancelButton
          onConfirm={() => this.bloquear()}
          onCancel={() => this.setState({ showBloquear: false })}
        />

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
                Administrar Usuarios
              </h1>
              <div>
                <Breadcrumb className="Breadcrumb">
                  <BreadcrumbItem>
                    <a /* href="#" */>IdA</a>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <a /* href="#" */>Usuarios</a>
                  </BreadcrumbItem>
                  <BreadcrumbItem active>Administrar Usuarios</BreadcrumbItem>
                </Breadcrumb>
              </div>
              <Card className="main-card mb-3">
                <CardHeader>
                  <div
                    style={{ color: "#303D48" }}
                    className="card-header-title font-size-md font-weight-bold">
                    Lista de Usuarios
                  </div>
                </CardHeader>
                {!this.state.edit ? (
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
                      /* defaultFilterMethod={(filter, row) =>
                          String(row[filter.id]) === filter.value
                        } */
                      data={this.state.items}
                      columns={columns2}
                      className="-striped -highlight -hide-paging"
                    />
                  </CardBody>
                ) : (
                  <CardBody>
                    <CardTitle>
                      Modificar acceso de {this.state.name}{" "}
                    </CardTitle>
                    <Form onSubmit={this.handleSubmit}>
                      <FormGroup row>
                        <Label
                          for="exampleSelect"
                          sm={2}>
                          Perfil
                        </Label>
                        <Col sm={10}>
                          <Typeahead
                            id="id"
                            name="perfil"
                            labelKey="name"
                            multiple={false}
                            options={options2}
                            placeholder="Elija el perfil"
                            onChange={this.handleChange}
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label
                          for="exampleSelect"
                          sm={2}>
                          Planta
                        </Label>
                        <Col sm={10}>
                          <Typeahead
                            id="id"
                            name="id"
                            labelKey="nombre"
                            multiple={false}
                            options={this.state.plantas}
                            placeholder="Seleccione planta"
                            onChange={this.onChangePlanta}
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Col sm={{ size: 8, offset: 2 }}>
                            <Button
                              type="button"
                              style={{
                                color: "#fff",
                                backgroundColor: "#2f4554"
                              }}
                              onClick={() => this.setState({ edit: false })}>
                              Atras
                            </Button>
                          </Col>
                          <Col>
                            <Button
                              type="submit"
                              style={{
                                color: "#fff",
                                backgroundColor: "#2f4554"
                              }}>
                              Confirmar
                            </Button>
                          </Col>
                        </Row>
                      </FormGroup>
                    </Form>
                  </CardBody>
                )}
              </Card>
            </Col>
          </Row>
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}
Usuarios.contextType = UseContext;

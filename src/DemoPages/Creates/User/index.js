import React, { Fragment } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import { Breadcrumb, BreadcrumbItem, Container } from "reactstrap";

import "../../../commons/styles/pages.styles.css";
import { CreateUser } from "./CreateUser";
import { UserForm } from "./context/UserForm";

const User = () => {
  return (
    <Fragment>
      <ReactCSSTransitionGroup
        component="div"
        transitionName="TabsAnimation"
        transitionAppear={true}
        transitionAppearTimeout={0}
        transitionEnter={false}
        transitionLeave={false}>
        <Container fluid>
          <h1
            style={{ marginBottom: "10px", color: "#303D48" }}
            className="card-header-title font-size-lg font-weight-bold text-uppercase">
            Crear usuario
          </h1>
          <div>
            <Breadcrumb className="Breadcrumb">
              <BreadcrumbItem>
                <a>IdA</a>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <a>Usuarios</a>
              </BreadcrumbItem>
              <BreadcrumbItem active>Crear Usuario</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <UserForm>
            <CreateUser />
          </UserForm>
        </Container>
      </ReactCSSTransitionGroup>
    </Fragment>
  );
};

export default User;

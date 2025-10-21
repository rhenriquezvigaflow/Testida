import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// Forms

import CrearPlanta from "./CrearPlanta";
import User from "./User/";

// Layout

import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";
// Theme Options

import ThemeOptions from "../../Layout/ThemeOptions/";

const Creates = ({ match }) => (
  <Fragment>
    <ThemeOptions />
    <AppHeader />
    <div className="app-main">
      <AppSidebar />
      <div className="app-main__outer">
        <div className="app-main__inner">
          {/* Form Elements */}
          <Route
            path={`${match.url}/user`}
            component={User}
          />
          <Route
            path={`${match.url}/planta`}
            component={CrearPlanta}
          />
        </div>
      </div>
    </div>
  </Fragment>
);

export default Creates;

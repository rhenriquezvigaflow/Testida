import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import Historial from "./Historial";
import MonitoreoEstadoPlantas from "./MonitoreoEstadoPlantas";
// Tables
import Usuarios from "./Usuarios";
import VisitasPorPlanta from "./VisitasPorPlanta";

// Layout

import AppHeader from "../../../Layout/AppHeader";
import AppSidebar from "../../../Layout/AppSidebar";

// Theme Options

import ThemeOptions from "../../../Layout/ThemeOptions";

const Tables = ({ match }) => (
  <Fragment>
    <ThemeOptions />
    <AppHeader />
    <div className="app-main">
      <AppSidebar />
      <div className="app-main__outer">
        <div className="app-main__inner">
          {/* Tables */}
          <Route
            path={`${match.url}/usuarios`}
            component={Usuarios}
          />
          <Route
            path={`${match.url}/historial`}
            component={Historial}
          />
          <Route
            path={`${match.url}/visitas-plantas`}
            component={VisitasPorPlanta}
          />
          <Route
            path={`${match.url}/monitoreo-plantas`}
            component={MonitoreoEstadoPlantas}
          />
        </div>
        {/* <AppFooter/> */}
      </div>
    </div>
  </Fragment>
);

export default Tables;

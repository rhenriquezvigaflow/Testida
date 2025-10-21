import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import AppHeader from "../../../Layout/AppHeader";
import AppSidebar from "../../../Layout/AppSidebar";
import ThemeOptions from "../../../Layout/ThemeOptions";
import { MonitoreoAlarmas } from "./monitoreo-alarmas";

const Alarmas = ({ match }) => {
  return (
    <Fragment>
      <ThemeOptions />
      <AppHeader />
      <div className="app-main">
        <AppSidebar />
        <div className="app-main__outer">
          <div className="app-main__inner">
            <Route
              path={`${match.url}/monitoreo`}
              component={MonitoreoAlarmas}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Alarmas;

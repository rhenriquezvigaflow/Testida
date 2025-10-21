import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import AppHeader from "../../../Layout/AppHeader/";
import AppSidebar from "../../../Layout/AppSidebar/";
import ThemeOptions from "../../../Layout/ThemeOptions/";
import { ParametrosElectricos } from "./parametros-electricos";

export default function ParametrosElectricosRoute({ match }) {
  return (
    <Fragment>
      <ThemeOptions />
      <AppHeader />
      <div className="app-main">
        <AppSidebar />
        <div className="app-main__outer">
          <div className="app-main__inner">
            <Route
              path={`${match.url}/mission-ro-1`}
              render={() => (
                <ParametrosElectricos
                  idPlanta={23}
                  nombrePlanta={"SCADA Terranova 1"}
                />
              )}
            />
            <Route
              path={`${match.url}/mission-ro-2`}
              render={() => (
                <ParametrosElectricos
                  idPlanta={70}
                  nombrePlanta={"SCADA Terranova 2"}
                />
              )}
            />
            <Route
              path={`${match.url}/mission-ro-3`}
              render={() => (
                <ParametrosElectricos
                  idPlanta={70}
                  nombrePlanta={"SCADA Terranova 3"}
                />
              )}
            />
            <Route
              path={`${match.url}/mission-ro-4`}
              render={() => (
                <ParametrosElectricos
                  idPlanta={70}
                  nombrePlanta={"SCADA Terranova 4"}
                />
              )}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

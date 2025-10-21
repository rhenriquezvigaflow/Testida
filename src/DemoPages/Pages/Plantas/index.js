import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import NormalizacionPlantas from "./normalizacionPlantas";
// Layout

import AppHeader from "../../../Layout/AppHeader";
import AppSidebar from "../../../Layout/AppSidebar";

// Theme Options
import ThemeOptions from "../../../Layout/ThemeOptions";

const Plantas = ({ match }) => (
  <Fragment>
    <ThemeOptions />
    <AppHeader />
    <div className="app-main">
      <AppSidebar />
      <div className="app-main__outer">
        <div className="app-main__inner">
          <Route
            path={`${match.url}`}
            render={() => <NormalizacionPlantas />}
          />
        </div>
      </div>
    </div>
  </Fragment>
);

export default Plantas;

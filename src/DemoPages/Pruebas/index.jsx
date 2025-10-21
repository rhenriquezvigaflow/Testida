import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import AppHeader from "../../Layout/AppHeader";
import AppSidebar from "../../Layout/AppSidebar";
import ThemeOptions from "../../Layout/ThemeOptions";
import Registros from "./components/Registros";

export default function Pruebas({ match }) {
  return (
    <Fragment>
      <ThemeOptions />
      <AppHeader />
      <section className="app-main">
        <AppSidebar />
        <section className="app-main__outer">
          <section className="app-main__inner">
            <Route
              path={`${match.url}/registros`}
              component={Registros}
            />
          </section>
        </section>
      </section>
    </Fragment>
  );
}

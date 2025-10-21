import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import NormalizacionDow from "../NormalizacionDow/normalizaciondow";

import AppHeader from "../../../Layout/AppHeader/";
import AppSidebar from "../../../Layout/AppSidebar/";

import ThemeOptions from "../../../Layout/ThemeOptions/";
import DemoNormalizacionDow from "./demo/DemoNormalizaciondow";

const Normalizacion = ({ match }) => (
  <Fragment>
    <ThemeOptions />
    <AppHeader />
    <div className="app-main">
      <AppSidebar />
      <div className="app-main__outer">
        <div className="app-main__inner">
          <Route
            path={`${match.url}/santa-teresa`}
            render={() => (
              <NormalizacionDow
                idPlanta={10}
                nombrePlanta={"Santa Teresa"}
              />
            )}
          />
          <Route
            path={`${match.url}/adquim`}
            render={() => (
              <NormalizacionDow
                idPlanta={14}
                nombrePlanta={"Adquim"}
              />
            )}
          />
          <Route
            path={`${match.url}/iloca`}
            render={() => (
              <NormalizacionDow
                idPlanta={21}
                nombrePlanta={"Iloca"}
              />
            )}
          />
          <Route
            path={`${match.url}/sesamar`}
            render={() => (
              <NormalizacionDow
                idPlanta={41}
                nombrePlanta={"Sesamar"}
              />
            )}
          />
          <Route
            path={`${match.url}/sealand`}
            render={() => (
              <NormalizacionDow
                idPlanta={11}
                nombrePlanta={"Sealand"}
              />
            )}
          />
          <Route
            path={`${match.url}/nano-concon/01`}
            render={() => (
              <NormalizacionDow
                idPlanta={5}
                nombrePlanta={"Nano Con Con (01)"}
              />
            )}
          />
          <Route
            path={`${match.url}/nano-concon/02`}
            render={() => (
              <NormalizacionDow
                idPlanta={25}
                nombrePlanta={"Nano Con Con (02)"}
              />
            )}
          />
          <Route
            path={`${match.url}/aqua-chile-ctp`}
            render={() => (
              <NormalizacionDow
                idPlanta={26}
                nombrePlanta={"Aqua Chile CTP"}
              />
            )}
          />
          <Route
            path={`${match.url}/aqua-chile-rh-orvf-8188`}
            render={() => (
              <NormalizacionDow
                idPlanta={27}
                nombrePlanta={"Aqua Chile Río Hollemberg"}
              />
            )}
          />
          <Route
            path={`${match.url}/mowi`}
            render={() => (
              <NormalizacionDow
                idPlanta={100}
                nombrePlanta={"Mowi"}
              />
            )}
          />
          <Route
            path={`${match.url}/ko-andina-antofagasta`}
            render={() => (
              <NormalizacionDow
                idPlanta={42}
                nombrePlanta={"KO Andina Antofagasta"}
              />
            )}
          />
          <Route
            path={`${match.url}/aguas-andinas-sidp`}
            render={() => (
              <NormalizacionDow
                idPlanta={38}
                nombrePlanta={"Aguas Andinas Santa Inés de Patagüilla"}
              />
            )}
          />
          <Route
            path={`${match.url}/embonor-talca`}
            render={() => (
              <NormalizacionDow
                idPlanta={28}
                nombrePlanta={"Embonor Talca"}
              />
            )}
          />
          <Route
            path={`${match.url}/embonor-arica`}
            render={() => (
              <NormalizacionDow
                idPlanta={81}
                nombrePlanta={"Embonor Arica"}
              />
            )}
          />
          <Route
            path={`${match.url}/aqua-chile-rh-orvf-8156`}
            render={() => (
              <NormalizacionDow
                idPlanta={29}
                nombrePlanta={"Aqua Chile R.H. ORVF 8156"}
              />
            )}
          />
          <Route
            path={`${match.url}/mission-ro-1`}
            render={() => (
              <NormalizacionDow
                idPlanta={23}
                nombrePlanta={"Mission 01"}
              />
            )}
          />
          <Route
            path={`${match.url}/mission-ro-2`}
            render={() => (
              <NormalizacionDow
                idPlanta={70}
                nombrePlanta={"Mission 02"}
              />
            )}
          />
          <Route
            path={`${match.url}/mission-ro-3`}
            render={() => (
              <NormalizacionDow
                idPlanta={70}
                nombrePlanta={"Mission 03"}
              />
            )}
          />
          <Route
            path={`${match.url}/mission-ro-4`}
            render={() => (
              <NormalizacionDow
                idPlanta={70}
                nombrePlanta={"Mission 04"}
              />
            )}
          />
          <Route
            path={`${match.url}/clariant/01`}
            render={() => (
              <NormalizacionDow
                idPlanta={60}
                nombrePlanta={"Clariant 01"}
              />
            )}
          />
          <Route
            path={`${match.url}/clariant/02`}
            render={() => (
              <NormalizacionDow
                idPlanta={6}
                nombrePlanta={"Clariant 02"}
              />
            )}
          />
          <Route
            path={`${match.url}/agricola-rio-negro`}
            render={() => (
              <NormalizacionDow
                idPlanta={90}
                nombrePlanta="Agrícola Río Negro"
              />
            )}
          />
          <Route
            path={`${match.url}/chanchamayo`}
            render={() => (
              <NormalizacionDow
                idPlanta={150}
                nombrePlanta="Chanchamayo"
              />
            )}
          />
          <Route
            path={`${match.url}/chanchamayo-02`}
            render={() => (
              <NormalizacionDow
                idPlanta={151}
                nombrePlanta="Chanchamayo 2"
              />
            )}
          />

          <Route
            path={`${match.url}/demo-normalizacion`}
            render={() => (
              <DemoNormalizacionDow
                idPlanta={28}
                nombrePlanta={"Demo Normalizacion"}
              />
            )}
          />
        </div>
      </div>
    </div>
  </Fragment>
);

export default Normalizacion;

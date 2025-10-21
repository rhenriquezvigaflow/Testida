import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import Adquim from "./Adquim";
import AgricolaRioNegro from "./AgricolaRioNegro";
// import MineraTeck from './MineraTeck';
import AguasAndinasSIDP from "./AguasAndinasSIDP";
import AquaChileCTP from "./AquaChileCTP";
import AquaChileRH from "./AquaChileRH";
import AquaChileRH_ORVF8156 from "./AquaChileRH_ORVF8156";
import Bresler from "./Bresler";
import Chanchamayo from "./Chanchamayo";
import Clariant from "./Clariant";
import EmbonorArica from "./EmbonorArica";
import EmbonorTalca from "./EmbonorTalca";
import Iloca from "./Iloca";
import KoAndinaAntofagasta from "./KoAndinaAntofagasta";
import Mission from "./Mission";
import Mission2 from "./Mission2";
import Mowi from "./Mowi";
import NanoConcon from "./NanoConcon";
import SantaTeresa from "./SantaTeresa/";
// DASHBOARDS
import Sealand2 from "./Sealand2/";

import DemoSantaTeresa from "./DemoSantaTeresa";

// Layout
import AppHeader from "../../../Layout/AppHeader/";
import AppSidebar from "../../../Layout/AppSidebar/";
// Theme Options
import ThemeOptions from "../../../Layout/ThemeOptions/";
import Chanchamayo2 from "./Chanchamayo2";
import { MbrEnap } from "./MbrEnap";
import { Mission3 } from "./Mission3";
import { Mission4 } from "./Mission4";

const SCADAS = ({ match }) => {
  return (
    <Fragment>
      <ThemeOptions />
      <AppHeader />
      <div className="app-main">
        <AppSidebar />
        <div className="app-main__outer">
          <div className="app-main__inner">
            <Route
              path={`${match.url}/sealand`}
              component={Sealand2}
            />
            <Route
              path={`${match.url}/santa-teresa`}
              component={SantaTeresa}
            />
            <Route
              path={`${match.url}/bresler`}
              component={Bresler}
            />
            <Route
              path={`${match.url}/adquim`}
              component={Adquim}
            />
            <Route
              path={`${match.url}/iloca`}
              component={Iloca}
            />
            <Route
              path={`${match.url}/nano-concon`}
              component={NanoConcon}
            />
            <Route
              path={`${match.url}/mowi`}
              component={Mowi}
            />
            <Route
              path={`${match.url}/aqua-chile-ctp`}
              component={AquaChileCTP}
            />
            <Route
              path={`${match.url}/aqua-chile-rh-orvf-8188`}
              component={AquaChileRH}
            />
            <Route
              path={`${match.url}/ko-andina-antofagasta`}
              component={KoAndinaAntofagasta}
            />
            <Route
              path={`${match.url}/aguas-andinas-sidp`}
              component={AguasAndinasSIDP}
            />
            <Route
              path={`${match.url}/embonor-talca`}
              component={EmbonorTalca}
            />
            <Route
              path={`${match.url}/embonor-arica`}
              component={EmbonorArica}
            />
            <Route
              path={`${match.url}/aqua-chile-rh-orvf-8156`}
              component={AquaChileRH_ORVF8156}
            />
            <Route
              path={`${match.url}/mission-etapa-1-ro-1`}
              component={Mission}
            />
            <Route
              path={`${match.url}/mission-etapa-1-ro-2`}
              component={Mission2}
            />
            <Route
              path={`${match.url}/mission-etapa-1-ro-3`}
              component={Mission3}
            />
            <Route
              path={`${match.url}/mission-etapa-1-ro-4`}
              component={Mission4}
            />
            <Route
              path={`${match.url}/clariant`}
              component={Clariant}
            />
            <Route
              path={`${match.url}/agricola-rio-negro`}
              component={AgricolaRioNegro}
            />
            <Route
              path={`${match.url}/mbr-enap`}
              component={MbrEnap}
            />
            <Route
              path={`${match.url}/chanchamayo`}
              component={Chanchamayo}
            />
            <Route
              path={`${match.url}/chanchamayo-02`}
              component={Chanchamayo2}
            />
            <Route
              path={`${match.url}/demo-scada`}
              component={DemoSantaTeresa}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SCADAS;

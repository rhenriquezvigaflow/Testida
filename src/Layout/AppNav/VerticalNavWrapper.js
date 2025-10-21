import React, { Fragment, useContext, useEffect, useState } from "react";
import MetisMenu from "react-metismenu";
import { withRouter } from "react-router-dom";
import getWithExpiry from "../../commons/functions/GetSession";
import { useGetIdPlantasByClientUser } from "../../commons/hooks/useGetIdPlantasByClientUser";
import UserContext from "../AppMain/UserContext";

import LoaderFallback from "../../commons/components/LoaderFallback";
import {
  MainNav,
  MainNavCreador,
  MainNavNorm,
  NavAdquim,
  NavAgricolaRioNegro,
  NavAguasAndinasSIDP,
  NavAlarmas,
  NavAquaChileCTP,
  NavAquaChileRH,
  NavBresler,
  NavChanchamayo,
  NavClariant,
  NavDemo,
  NavDemoSeccion,
  NavEmbonorArica,
  NavEmbonorTalca,
  NavIloca,
  NavKoAndinaAntofagasta,
  NavMbrEnap,
  NavMission,
  NavMonitoreoPlantas,
  NavMowi,
  NavNanoConcon,
  NavSantaTeresa,
  NavSealand,
  NavVisitas,
  PruebasNav
} from "./NavItems";

const navComponents = {
  1: MainNav,
  2: NavSantaTeresa,
  3: NavSealand,
  5: NavBresler,
  7: NavAdquim,
  8: NavIloca,
  13: NavMowi,
  16: NavAguasAndinasSIDP,
  19: NavNanoConcon,
  14: NavAquaChileCTP,
  27: NavAquaChileRH,
  28: NavKoAndinaAntofagasta,
  29: NavEmbonorTalca,
  30: NavAquaChileRH,
  31: NavMission,
  60: NavClariant,
  80: NavEmbonorArica,
  90: NavAgricolaRioNegro,
  120: NavMbrEnap,
  150: NavChanchamayo,
  999: NavDemo
};

function Nav({ location }) {
  const usuario = useContext(UserContext);

  const { getIdPlantasByClientUser } = useGetIdPlantasByClientUser();

  // Estado para almacenar el menú
  const [menuContent, setMenuContent] = useState(MainNav);
  const [isLoading, setIsLoading] = useState(false);

  // Función para obtener el contenido del menú
  useEffect(() => {
    if (!usuario) return;

    const fetchMenuContent = async () => {
      setIsLoading(true); // Activar estado de carga
      getWithExpiry("tokenIda");
      const tokenData = JSON.parse(localStorage.getItem("tokenIda"));
      const idEmpresa = tokenData ? tokenData.id_empresa : -1;

      if (idEmpresa === "333") {
        const routes = await getIdPlantasByClientUser(usuario.id_user);
        const navComponentsClientes = routes.routes;
        setMenuContent(navComponentsClientes);
      } else {
        setMenuContent(navComponents[idEmpresa] || MainNav);
      }
      setIsLoading(false); // Desactivar estado de carga
    };

    fetchMenuContent();
  }, [getIdPlantasByClientUser, usuario]);

  if (isLoading) {
    return <LoaderFallback />; // Mostrar loader mientras se carga el menú
  }

  return (
    <Fragment>
      <h5 className="app-sidebar__heading">Menu</h5>
      {[1, 5, 7].includes(Number(usuario.perfil)) ? (
        <MetisMenu
          content={MainNavNorm}
          activeLinkFromLocation
          className="vertical-nav-menu"
          iconNamePrefix=""
          classNameStateIcon="pe-7s-angle-down"
        />
      ) : (
        <MetisMenu
          content={menuContent}
          activeLinkFromLocation
          className="vertical-nav-menu"
          iconNamePrefix=""
          classNameStateIcon="pe-7s-angle-down"
        />
      )}
      {[1, 2, 3, 5].includes(Number(usuario.perfil)) && (
        <MetisMenu
          content={NavAlarmas}
          activeLinkFromLocation
          className="vertical-nav-menu"
          iconNamePrefix=""
          classNameStateIcon="pe-7s-angle-down"
        />
      )}
      {[5].includes(Number(usuario.perfil)) && (
        <MetisMenu
          content={MainNavCreador}
          activeLinkFromLocation
          className="vertical-nav-menu"
          iconNamePrefix=""
          classNameStateIcon="pe-7s-angle-down"
        />
      )}
      {[1, 5].includes(Number(usuario.perfil)) && (
        <MetisMenu
          content={NavDemoSeccion}
          activeLinkFromLocation
          className="vertical-nav-menu"
          iconNamePrefix=""
          classNameStateIcon="pe-7s-angle-down"
        />
      )}
      {[1, 5].includes(Number(usuario.perfil)) && (
        <MetisMenu
          content={NavMonitoreoPlantas}
          activeLinkFromLocation
          className="vertical-nav-menu"
          iconNamePrefix=""
          classNameStateIcon="pe-7s-angle-down"
        />
      )}
      {[1, 5].includes(Number(usuario.perfil)) && (
        <MetisMenu
          content={NavVisitas}
          activeLinkFromLocation
          className="vertical-nav-menu"
          iconNamePrefix=""
          classNameStateIcon="pe-7s-angle-down"
        />
      )}
      {[1, 5].includes(Number(usuario.perfil)) && (
        <MetisMenu
          content={PruebasNav}
          activeLinkFromLocation
          className="vertical-nav-menu"
          iconNamePrefix=""
          classNameStateIcon="pe-7s-angle-down"
        />
      )}
    </Fragment>
  );
}

export default withRouter(Nav);

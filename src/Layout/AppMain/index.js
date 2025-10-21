import React, {
  Suspense,
  lazy,
  Fragment,
  useEffect,
  useCallback,
  useState
} from "react";
import { Redirect, Route } from "react-router-dom";

import "../../config/apiStore";
import "../../config/url";
import { ToastContainer } from "react-toastify";
import ParametrosElectricosRoute from "../../DemoPages/Pages/ParametrosElectricos";
import Login from "../../DemoPages/UserPages/Login/index";
import LoaderFallback from "../../commons/components/LoaderFallback";
import { useGetIdPlantasByClientUser } from "../../commons/hooks/useGetIdPlantasByClientUser";
import UseContext from "./UserContext";
import { empresaRutaMap } from "./constants";
import useToken from "./useToken";

const UserPages = lazy(() => import("../../DemoPages/UserPages"));
const SCADAS = lazy(() => import("../../DemoPages/Pages/SCADAS"));
const Tables = lazy(() => import("../../DemoPages/Pages/Tables"));
const Creates = lazy(() => import("../../DemoPages/Creates"));
const Normalizacion = lazy(
  () => import("../../DemoPages/Pages/NormalizacionDow")
);
const Pruebas = lazy(() => import("../../DemoPages/Pruebas"));
const Alarmas = lazy(() => import("../../DemoPages/Pages/Alarmas"));

function AppMain() {
  const { token, setToken, estadoToken } = useToken();
  const { getIdPlantasByClientUser } = useGetIdPlantasByClientUser();
  const [redirectTo, setRedirectTo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getRutaScada = useCallback(() => {
    if (!token) return;

    const idEmpresa = token.id_empresa;
    return empresaRutaMap[Number(idEmpresa)] || "santa-teresa";
  }, [token]);

  useEffect(() => {
    const handleRedirect = async () => {
      if (!token) return;

      if (token.id_empresa === "333") {
        setIsLoading(true);
        try {
          const routes = await getIdPlantasByClientUser(token.id_user);
          const routeToRedirect = routes.routes[0].content[0].content[0].to;
          setRedirectTo(routeToRedirect.slice(2));
        } catch (error) {
          console.error("Error fetching routes:", error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    handleRedirect();
  }, [getIdPlantasByClientUser, token]);

  if (!token || !estadoToken) return <Login setToken={setToken} />;

  if (isLoading) {
    return <LoaderFallback />;
  }

  return (
    <UseContext.Provider value={token}>
      <Fragment>
        {/* SCADAS */}
        <Suspense fallback={<LoaderFallback />}>
          <Route
            path="/SCADAS"
            component={SCADAS}
          />
        </Suspense>

        {/* SCADAS */}
        <Suspense fallback={<LoaderFallback />}>
          <Route
            path="/normalizacion"
            component={Normalizacion}
          />
        </Suspense>

        {/* Alarmas */}
        <Suspense fallback={<LoaderFallback />}>
          <Route
            path="/alarmas"
            component={Alarmas}
          />
        </Suspense>

        {/* Creates */}
        <Suspense fallback={<LoaderFallback />}>
          <Route
            path="/creates"
            component={Creates}
          />
        </Suspense>

        {/* Tables */}
        <Suspense fallback={<LoaderFallback />}>
          <Route
            path="/tables"
            component={Tables}
          />
        </Suspense>

        {/* Pages */}
        <Suspense fallback={<LoaderFallback loaderType="line-scale-party" />}>
          <Route
            path="/pages"
            component={UserPages}
          />
        </Suspense>

        {/* Pruebas */}
        <Suspense fallback={<LoaderFallback />}>
          <Route
            path="/pruebas"
            component={Pruebas}
          />
        </Suspense>

        <Suspense fallback={<LoaderFallback />}>
          <Route
            path="/parametros-electricos"
            component={ParametrosElectricosRoute}
          />
        </Suspense>

        {/* Applications */}
        <Route
          exact
          path="/"
          render={() => {
            if (token.id_empresa === "333") {
              if (redirectTo) {
                return <Redirect to={`${redirectTo}`} />;
              }
              return <LoaderFallback />;
            }

            if (token.perfil === "5") {
              return <Redirect to="/tables/monitoreo-plantas" />;
            }

            return <Redirect to={`/SCADAS/${getRutaScada()}`} />;
          }}
        />
        <ToastContainer />
      </Fragment>
    </UseContext.Provider>
  );
}

export default AppMain;

import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import setWithExpiry from "../../commons/functions/SetSession";
import apis from "../../config/apiStore";

export default function useToken() {
  const history = useHistory();
  const [token, setToken] = useState(() => {
    const tokenIda = localStorage.getItem("tokenIda");
    if (tokenIda) return JSON.parse(tokenIda);
    return null;
  });
  const [estadoToken, setEstadoToken] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    async function getTokenResponse(token) {
      const formData = new FormData();
      formData.append("id_user", token.id_user);
      formData.append("token", token.token);

      try {
        const resp = await fetch(apis.getTokenResponse, {
          method: "POST",
          body: formData,
          credentials: "include",
          signal
        });

        if (!resp.ok) {
          throw new Error(resp.status);
        }

        const json = await resp.json();

        if (String(json.estado) === "1") {
          setEstadoToken(true);
        } else {
          setEstadoToken(false);
          setRedirect();
        }
      } catch (error) {
        setEstadoToken(false);
        setRedirect();
      }
    }

    if (token) {
      getTokenResponse(token);
    }

    return () => {
      controller.abort();
    };
  }, [token]);

  function setRedirect() {
    setToken(null);
    localStorage.removeItem("tokenIda");
    history.push("/login");
  }

  const saveToken = (userToken) => {
    if (userToken === null) {
      localStorage.clear();
      if (token !== null) setToken(null);
    } else {
      setWithExpiry("tokenIda", userToken, 1800000);
      if (token !== userToken) setToken(userToken);
    }
  };

  return {
    setToken: saveToken,
    token,
    estadoToken
  };
}

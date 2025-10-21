import * as React from "react";
import { useState } from "react";
import { Card } from "reactstrap";
import "./tarjetita.css";
import { Grid } from "@material-ui/core";
import { CircularProgress } from "@material-ui/core";
import { useEffect } from "react";
import { useRef } from "react";

function Tarjetita(props) {
  const { isVibotReset } = props;

  const findBreak = (name) => {
    let cuenta = 0;
    const posArray = [];
    let posicion = name.indexOf(" ");
    while (posicion !== -1) {
      posArray.push(posicion);
      cuenta++;
      posicion = name.indexOf(" ", posicion + 1);
    }
    if (cuenta === 0) return null;
    return posArray[Number.parseInt(cuenta / 2)];
  };

  const putBreak1 = (name) => {
    const replacePos = findBreak(name);
    if (replacePos === null) return name;
    return name.substring(0, replacePos);
  };

  const putBreak2 = (name) => {
    const replacePos = findBreak(name);
    if (replacePos === null) return "";
    return name.substring(replacePos + 1, name.length);
  };

  const [name1] = useState(putBreak1(props.name));
  const [name2] = useState(putBreak2(props.name));

  const controllerRef = useRef(null);

  const loadGraph = () => {
    if (controllerRef.current) controllerRef.current.abort();

    controllerRef.current = new AbortController();
    const { signal } = controllerRef.current;
    const decimal = props.decimal || false;
    props.clickMe(props.number, props.name, props.categorical, decimal, signal);
  };

  useEffect(() => {
    return () => {
      if (controllerRef.current) controllerRef.current.abort();
    };
  }, []);

  const getType = (cadena) => {
    const valoresAceptados = "^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$";
    if (String(cadena).match(valoresAceptados)) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <Grid
      item
      xs={12}
      sm={4}
      md={4}
      lg={2}
      style={{
        paddingLeft: "4px",
        paddingRight: "4px",
        pointerEvents: props.noEvents ? "none" : "auto"
      }}>
      <Card
        className={`widget-chart widget-chart2 card-btm-border mb-3 px-3 card-shadow-primary${
          typeof props.max === "undefined" ||
          (Number(props.value) <= Number(props.max) &&
            Number(props.value) >= Number(props.min)) ||
          Number(props.max) === Number(props.min)
            ? " border-success"
            : " border-warning"
        }${
          props.selected === props.number
            ? " colorTarjetaSelec"
            : " colorTarjeta"
        } ${props.size}`}
        onClick={() => {
          loadGraph();
        }}>
        <div className="widget-chat-wrapper-outer align-items-center">
          <div className="widget-chart-content">
            <div
              className={`widget-title fsize-0 font-weight-bold opacity-10 ${props.size}-title`}
              style={{ padding: "0px 15px" }}>
              {`${name1} `}
              {<br />}
              {name2}
            </div>
            <hr />
            {/* datos a condicionar */}
            <div
              style={{ overflow: "hidden" }}
              className={`widget-numbers mt-3 mb-0 w-100 ${getType(props.value) ? "fsize-1" : "fsize-0"}`}>
              {isVibotReset || !props.value ? (
                <CircularProgress size={30} />
              ) : (
                <>
                  {props.name.includes("Volumen")
                    ? props.value
                    : String(props.value).replace(".", ",")}{" "}
                  <span
                    className="fsize-1"
                    style={{
                      /* fontSize: "24px", */
                      padding: "3px",
                      fontWeight: "400",
                      overflow: "hidden",
                      display: "inline-block"
                    }}>
                    {props.unit}
                  </span>
                </>
              )}
            </div>
            <div className="ml-auto">
              <div
                style={{
                  marginBottom: 5
                }}
              />
            </div>
          </div>
        </div>
      </Card>
    </Grid>
  );
}
export default Tarjetita;

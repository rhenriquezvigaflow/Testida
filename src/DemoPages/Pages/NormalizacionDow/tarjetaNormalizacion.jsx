import * as React from "react";
import { useState } from "react";
import { Card } from "reactstrap";
import "./normalizacion.css";
import { Grid } from "@material-ui/core";

function TarjetaNormalizacion(props) {
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

  const cardStyle = {
    paddingLeft: "4px",
    paddingRight: "4px"
  };

  const refGraph = () => {
    props.clickMe(props.idRef);
  };

  const getColor = () => {
    switch (props.color) {
      case "warning":
        return " border-warning ";
      case "critical":
        return " border-danger ";
      default:
        return " border-success ";
    }
  };

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
      sm="12"
      md="4"
      lg="2"
      style={cardStyle}>
      <Card
        className={`widget-chart widget-chart2 card-btm-border mb-3 px-3 card-shadow-primary${props.idRef == undefined ? " noEvents" : " cursor-pointer"}${getColor()}${props.size}`}
        onClick={() => {
          refGraph();
        }}>
        <div className="widget-chat-wrapper-outer align-items-center">
          <div className="widget-chart-content">
            <div
              className={`widget-title fsize-0 font-weight-bold opacity-10 ${props.size}-title`}
              style={{ padding: "0px 15px" }}>
              {`${name1} `}
              {/* <br/> */}
              {name2}
            </div>
            <hr />
            <div
              style={{ paddingTop: getType(props.value) ? "8px" : "0px" }}
              className={`widget-numbers mt-3 mb-0 w-100 ${getType(props.value) ? "fsize-1" : "fsize-3"}`}>
              {props.value}{" "}
              <span
                className="fsize-1"
                style={{
                  /* fontSize: "24px", */
                  padding: "3px",
                  fontWeight: "400"
                }}>
                {props.unit}
              </span>
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
export default TarjetaNormalizacion;

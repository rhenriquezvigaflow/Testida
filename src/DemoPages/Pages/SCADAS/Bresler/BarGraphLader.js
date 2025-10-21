import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import "react-datepicker/dist/react-datepicker.css";

// eslint-disable-next-line no-extend-native
Array.prototype.move = function (from, to) {
  this.splice(to, 0, this.splice(from, 1)[0]);
  return this;
};

const BarGraphLader = (props) => {
  let estado_actual;
  let objeto;
  let objeto_anterior;
  let last_index;
  let index;

  const labels = {
    enabled: false
  };
  const markers = {
    size: 0
  };

  const tooltips = {
    x: {
      format: "dd/MM/yy HH:mm"
    }
  };

  const [series2, setSeries2] = useState({
    data: []
  });
  const [infoData, setInfoData] = useState(false);

  const [options, setOptions] = useState();

  const diff_minutes = (dt2, dt1) => {
    let diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60;
    return Math.abs(Math.round(diff));
  };

  const fixNoConectionData = (data, d = "20") => {
    const n = data.length;
    let j = 0;

    for (let i = 0; i + 1 < n + j; i++) {
      if (
        diff_minutes(new Date(data[i].fecha), new Date(data[i + 1].fecha)) > 15
      ) {
        objeto = {};
        objeto.d = d;
        objeto.fecha = new Date(
          new Date(data[i].fecha).getTime() + 10 * 60000
        ).toString("yyyy-MM-dd HH:mm:ss");
        data.splice(i + 1, 0, objeto);
        i++;
        j++;
      }
    }
    return data;
  };

  useEffect(() => {
    loadgraphactivity(props.data.data, props.data.id);
  }, [props.data]);

  const poblar_estado = (item) => {
    index++;
    if (index === last_index) {
      if (estado_actual === Number(item.d)) {
        objeto.y[1] = new Date(item.fecha).getTime();
        return objeto;
      } else return null;
    }

    if (estado_actual === Number(item.d)) {
      estado_actual = Number(item.d);
      return null;
    }

    if (estado_actual !== Number(item.d) || estado_actual === -1) {
      if (estado_actual !== -1) {
        objeto.y[1] = new Date(item.fecha).getTime();
        objeto_anterior = objeto;
      }
      objeto = {}; //
      objeto.y = []; //
      objeto.y[0] = new Date(item.fecha).getTime(); //

      switch (Number(item.d)) {
        case 4:
          objeto.x = "Bloqueado";
          objeto.fillColor = "#ff9900";
          break;
        case 3:
          objeto.x = "Falla";
          objeto.fillColor = "#FBC43B";
          break;
        case 1:
          objeto.x = "Funcionando";
          objeto.fillColor = "#00E098";
          break;
        case 2:
          objeto.x = "Moviéndose";
          objeto.fillColor = "#535BD5";
          break;
        case 0:
          objeto.x = "Detenido";
          objeto.fillColor = "#ff2f3e";
          break;
        default:
          objeto.x = "Sin conexión";
          objeto.fillColor = "#a5a8ad";
          break;
      }

      estado_actual = Number(item.d);
      if (index > 1) return objeto_anterior;
      else return null;
    }
  };

  const loadgraphactivity = (datax, id) => {
    objeto = {};
    objeto_anterior = {};

    setInfoData(false);

    estado_actual = -1;
    if (datax.length !== 0) {
      let data2 = [];
      data2 = fixNoConectionData(datax);
      last_index = 0;
      last_index = Number(data2.length);
      if (Number(last_index) > 2) {
        index = 0;
        let datitos = [];
        datitos = data2.map((x) => poblar_estado(x, id));
        let filtered = [];
        filtered = datitos.filter((el) => el != null);
        let found;
        let pos = 0;
        if (filtered.length > 4) {
          const fecha_inicial = filtered[0].y[0];
          found = filtered.findIndex((element) => element.x === "Funcionando");
          datitos.length = 0;
          if (found >= 0) {
            filtered.move(found, pos);
            pos++;
          }
          found = filtered.findIndex((element) => element.x === "Moviéndose");
          if (found >= 0) {
            filtered.move(found, pos);
            pos++;
          }
          found = filtered.findIndex((element) => element.x === "Detenido");
          if (found >= 0) {
            filtered.move(found, pos);
            pos++;
          }
          found = filtered.findIndex((element) => element.x === "Bloqueado");
          if (found >= 0) {
            filtered.move(found, pos);
            pos++;
          }
          found = filtered.findIndex((element) => element.x === "Falla");
          if (found >= 0) {
            filtered.move(found, pos);
            pos++;
          }
          found = filtered.findIndex((element) => element.x === "Sin conexión");
          if (found >= 0) {
            filtered.move(found, pos);
            pos++;
          }
        }
        setSeries2([{ data: filtered }]);
      } else setSeries2([{ data: [] }]);

      setOptions({
        dataLabels: labels,
        //stroke: strokes,
        markers: markers,
        tooltip: tooltips,
        chart: {
          animations: {
            enabled: false
          },
          type: "rangeBar"
        },
        plotOptions: {
          bar: {
            horizontal: true,
            distributed: false,
            dataLabels: {
              hideOverflowingLabels: false
            }
          }
        },
        xaxis: {
          labels: {
            datetimeUTC: false
          },
          type: "datetime",
          min: fecha_inicial
        },
        grid: {
          row: {
            colors: ["#f3f4f5", "#fff"],
            opacity: 1
          }
        }
      });
      setInfoData(true);
    } else setInfoData(false);

    // });
  };

  return infoData ? (
    <Chart
      options={options}
      series={series2}
      type="rangeBar"
      height="200"
    />
  ) : (
    "No se han encontrado registros en las fechas seleccionadas"
  );
};

export default BarGraphLader;

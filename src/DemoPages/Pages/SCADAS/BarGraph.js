import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import "react-datepicker/dist/react-datepicker.css";

// eslint-disable-next-line no-extend-native
Array.prototype.move = function (from, to) {
  this.splice(to, 0, this.splice(from, 1)[0]);
  return this;
};

const BarGraph = (props) => {
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

  const [options, setOptions] = useState({
    dataLabels: labels,
    //stroke: strokes,
    markers: markers,
    tooltip: tooltips,
    chart: {
      height: 100,
      type: "rangeBar"
    },
    plotOptions: {
      bar: {
        horizontal: true,
        distributed: true,
        dataLabels: {
          hideOverflowingLabels: true
        }
      }
    },
    xaxis: {
      type: "datetime",
      labels: {
        datetimeUTC: true
      },
      min: new Date(props.fecha).getTime(),
      max: new Date(props.fechaFin).getTime()
    },

    grid: {
      row: {
        colors: ["#f3f4f5", "#fff"],
        opacity: 1
      }
    }
  });

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
        //objeto.fecha=new Date(data[i].fecha).getTime();
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
    loadgraphactivity(props.data);
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
        case 1:
          objeto.x = "Falla";
          objeto.fillColor = "#FF4560";

          //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
          break;
        case 7:
        case 8:
        case 4:
        case 6:
        case 9:
        case 10:
        case 11:
        case 12:
        case 15:
          objeto.x = "En funcionamiento";
          objeto.fillColor = "#00E396";

          //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
          break;

        case 0:
        case 2:
        case 3:
        case 5:
        case 13:
        case 14:
          objeto.x = "Planta detenida";
          objeto.fillColor = "#FEB019";

          //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
          break;
        default:
          objeto.x = "Sin conexión";
          objeto.fillColor = "#a5a8ad";

          //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
          break;
      }
      estado_actual = Number(item.d);
      if (index > 1) return objeto_anterior;
      else return null;
    }
  };

  const getUniqueListBy = (arr, key) => {
    return [...new Map(arr.map((item) => [item[key], item])).values()];
  };

  const loadgraphactivity = (datanf) => {
    // El grafico no muestra la desconexion de la planta si no han llegado datos, por esto,
    // se agrega desconexion hasta la fecha actual desde el ultimo dato si es que es de hace 1/4 hora o más

    if (datanf.length == 0) {
      const datoDesconectadoInicio = {
        d: "20",
        fecha: props.fecha.toString()
      };
      datanf.push(datoDesconectadoInicio);

      const datoDesconectadoFin = {
        d: "20",
        fecha: props.fechaFin.toString()
      };
      datanf.push(datoDesconectadoFin);
    } else {
      const ultimoDato = datanf[datanf.length - 1];
      const primerDato = datanf[0];
      if (
        diff_minutes(new Date(props.fechaFin), new Date(ultimoDato.fecha)) > 15
      ) {
        const datoDesconectadoInicio = {
          d: "20",
          fecha: props.fechaFin.toString()
        };
        datanf.push(datoDesconectadoInicio);
      }
      if (
        diff_minutes(new Date(primerDato.fecha), new Date(props.fecha)) > 15
      ) {
        const datoDesconectadoFin = {
          d: "20",
          fecha: props.fecha.toString()
        };
        datanf.unshift(datoDesconectadoFin);
      }
    }

    objeto = {};
    objeto_anterior = {};

    setInfoData(false);
    const datax = getUniqueListBy(datanf, "fecha");
    estado_actual = -1;
    if (datax.length !== 0) {
      let data2 = [];
      data2 = fixNoConectionData(datax);
      last_index = 0;
      last_index = Number(data2.length);
      if (Number(last_index) > 2) {
        index = 0;
        let datitos = [];
        datitos = data2.map((x) => poblar_estado(x));
        let filtered = [];
        filtered = datitos.filter((el) => el != null);
        let pos = 0;
        let found = filtered.findIndex(
          (element) => element.x === "En funcionamiento"
        );
        datitos.length = 0;
        if (found >= 0) {
          filtered.move(found, pos);
          pos++;
        }
        found = filtered.findIndex(
          (element) => element.x === "Planta detenida"
        );
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

        setSeries2([{ data: filtered }]);
      } else setSeries2([{ data: [] }]);

      setOptions({
        dataLabels: labels,
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
          min: new Date(props.fecha).getTime(),
          max: new Date(props.fechaFin).getTime()
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
    <ReactApexChart
      options={options}
      series={series2}
      type="rangeBar"
      height="200"
    />
  ) : (
    "No se han encontrado registros en las fechas seleccionadas"
  );
};

export default BarGraph;

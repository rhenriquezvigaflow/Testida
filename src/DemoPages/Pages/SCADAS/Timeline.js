import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import "./popup.css";
import "react-datepicker/dist/react-datepicker.css";
import "./timeline.css";

const Timeline = (props) => {
  const animations = {
    enabled: false
  };

  const labels = {
    enabled: false
  };

  const strokes = {
    curve: "smooth",
    width: "0"
  };

  const markers = {
    size: 1,
    strokeWidth: 0
  };

  const tooltips = {
    x: {
      format: "dd/MM/yy HH:mm"
    }
  };
  const yaxiss = {
    min: 0,

    labels: {
      minWidth: 1,
      formatter: (val) => val.toFixed(2)
    }
  };

  const [datos, setDatos] = useState([
    {
      name: "",
      data: ""
    }
  ]);

  const [options, setOptions] = useState({
    yaxis: yaxiss,
    dataLabels: labels,
    stroke: strokes,
    markers: markers,
    tooltip: tooltips,
    colors: ["#0000FF"],
    chart: {
      height: 350,
      id: "tt",
      group: "social",
      type: "area",
      animations: animations
    },
    xaxis: {
      labels: {
        datetimeUTC: false
      },
      type: "datetime",
      categories: ""
    }
  });
  const [infoData, setInfoData] = useState(false);

  const diff_minutes = (dt2, dt1) => {
    let diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60;
    return Math.abs(Math.round(diff));
  };
  let objeto;

  useEffect(() => {
    loadGraph(props.nombre, props.data);
  }, [props.data]);

  const getUniqueListBy = (arr, key) => {
    return [...new Map(arr.map((item) => [item[key], item])).values()];
  };

  const loadGraph = (nombre, datax) => {
    let gstrokes;
    let gyaxis;
    gstrokes = {
      curve: "stepline",
      width: "0"
    };
    setInfoData(false);

    datax = getUniqueListBy(datax, "fecha");

    if (props.decimal) {
      gyaxis = {
        /* min: -1, */

        labels: {
          minWidth: 1,
          formatter: (val) => val.toFixed(2)
        }
      };
    } else {
      gyaxis = {
        /* min: -1, */

        labels: {
          minWidth: 1,
          formatter: (val) => val.toFixed(0)
        }
      };
    }
    if (props.yMax !== null) {
      if (props.yMax > 0) gyaxis.max = Number(props.yMax);
    }

    if (props.yMin !== null) {
      if (props.yMin > 0) gyaxis.min = Number(props.yMin);
    }

    if (datax.length !== 0) {
      const data = datax; /* fixNoConectionData(datax, null); */

      setOptions({
        yaxis: gyaxis,
        dataLabels: labels,
        stroke: gstrokes,
        markers: markers,
        tooltip: tooltips,
        colors: ["#3474E0"],
        chart: {
          height: 350,
          id: "tt",
          group: "social",
          type: "area",
          animations: animations
        },
        xaxis: {
          labels: {
            datetimeUTC: false
          },
          type: "datetime",
          categories: data.map((x) => x.fecha)
        }
      });

      setDatos([
        {
          name: nombre,
          data: data.map((x) => Number(x.d).toFixed(2))
        }
      ]);
      setInfoData(true);
    } else {
      setInfoData(false);
      setDatos([
        {
          name: nombre,
          data: []
        }
      ]);
    }
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

  return infoData ? (
    <Chart
      options={options}
      series={datos}
      width="100%"
      height="300"
    />
  ) : (
    "No se han encontrado registros en las fechas seleccionadas"
  );
};
export default Timeline;

import React, { Component, useEffect, useRef, useState } from "react";
import Chart from "react-apexcharts";
//marca

const GraficoNormalizacion = (props) => {
  const [datosNormalizacion, setDatosNormalizacion] = useState([]);
  const [yaxisAnnotations, setYaxisAnnotations] = useState([]);

  const chartRef = useRef(null);

  const { fileName } = props;

  const downloadHandlers = {
    png: (chart) => {
      chart.dataURI().then((uri) => {
        const link = document.createElement("a");
        link.href = uri.imgURI;
        link.download = `${fileName}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    },
    svg: (chart) => {
      chart.dataURI().then((uri) => {
        const link = document.createElement("a");
        link.href = uri.svgURI;
        link.download = `${fileName}.svg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    },
    csv: (chart) => {
      const csv = chart.getCSV();
      const blob = new Blob([csv], { type: "text/csv" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `${fileName}.csv`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const chartOptions = {
    ...props.opciones,
    chart: {
      ...props.opciones.chart,
      toolbar: {
        export: {
          csv: {
            filename: `${fileName}`
          },
          svg: {
            filename: `${fileName}`
          },
          png: {
            filename: `${fileName}`
          }
        },
        events: {
          exportcsv: () => downloadImage("csv"),
          exportsvg: () => downloadImage("svg"),
          exportpng: () => downloadImage("png")
        }
      }
    }
  };

  function downloadImage(format) {
    const chart = chartRef.current.chart;
    downloadHandlers[format](chart);
  }

  useEffect(() => {
    setYaxisAnnotations(props.yaxisAnnotations);
  }, [props.yaxisAnnotations]);

  return (
    <>
      <Chart
        options={chartOptions}
        series={props.series}
        type={props.type}
        height="350"
        width="100%"
        ref={chartRef}
      />
    </>
  );
};

export default GraficoNormalizacion;

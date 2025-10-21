import { DateTime } from "luxon";
import React, { useEffect, useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import { useGetPlcRecordsByColumn } from "../hooks/useGetPlcRecordsByColumn";
import Loader from "./Loader";

const formatDate = (date) => {
  return DateTime.fromJSDate(date).toFormat("yyyy-MM-dd");
};

export function AreaChartData({
  idPlanta,
  column,
  nombre,
  yMax,
  yMin,
  fechaInicio,
  fechaFin
}) {
  const { records, loading, error, fetchPlcRecordsByColumn } =
    useGetPlcRecordsByColumn(yMin, yMax);

  const state = useMemo(() => {
    const yMinParsed = Number(yMin);
    const yMaxParsed = Number(yMax);
    const yMinNum = Number.isNaN(yMinParsed) ? undefined : yMinParsed;
    const yMaxNum = Number.isNaN(yMaxParsed) ? undefined : yMaxParsed;

    // Verificar si ambos límites están en 0 o no están definidos
    const bothLimitsZeroOrUndefined =
      (yMinNum === 0 && yMaxNum === 0) ||
      (yMinNum === undefined && yMaxNum === undefined);

    return {
      series: [
        {
          name: nombre,
          data: records
        }
      ],
      options: {
        chart: {
          type: "line",
          animations: {
            enabled: false
          },
          height: 350,
          zoom: { enabled: true },
          toolbar: {
            show: true,
            tools: {
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: true,
              reset: true
            }
          }
        },

        markers: {
          size: 3.5,
          strokeWidth: 1
        },
        tooltip: {
          x: {
            formatter: (val) =>
              DateTime.fromMillis(val * 1000).toFormat("yyyy-MM-dd HH:mm")
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 1,
          curve: "smooth"
        },
        xaxis: {
          type: "datetime",
          labels: {
            datetimeUTC: false,
            formatter: (val) => {
              return DateTime.fromMillis(val * 1000).toFormat("dd LLL");
            }
          },
          rangePadding: "both"
        },
        yaxis: {
          min: yMinNum === 0 ? undefined : yMinNum,
          max: yMaxNum === 0 ? undefined : yMaxNum,
          labels: {
            minWidth: 1,
            formatter: (val) => val.toFixed(2)
          }
        }
      },
      bothLimitsZeroOrUndefined
    };
  }, [records, nombre, yMin, yMax]);

  useEffect(() => {
    const formattedFechaInicio = formatDate(fechaInicio);
    const formattedFechaFin = formatDate(fechaFin);

    fetchPlcRecordsByColumn({
      idPlanta,
      column,
      fechaInicio: formattedFechaInicio,
      fechaFin: formattedFechaFin
    });
  }, [fetchPlcRecordsByColumn, idPlanta, column, fechaInicio, fechaFin]);

  // Mostrar mensaje cuando no hay datos
  if (!loading && !error && (!records || records.length === 0)) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "350px",
          fontSize: "16px",
          color: "#666",
          textAlign: "center"
        }}>
        No se encontraron datos en las fechas seleccionadas
      </div>
    );
  }

  return (
    <div>
      {loading && (
        <section
          style={{
            paddingInlineStart: "10px"
          }}>
          <Loader />
        </section>
      )}
      {error && <div>Error: {error.message}</div>}
      {!loading && !error && records && records.length > 0 && (
        <ReactApexChart
          options={state.options}
          series={state.series}
          height={350}
        />
      )}
    </div>
  );
}

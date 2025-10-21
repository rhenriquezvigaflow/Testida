import React, { useState, useMemo } from "react";
import "../../../commons/styles/react-widgets-styles.css";
import DatePicker2 from "react-widgets/DatePicker";
import { Button, Card } from "reactstrap";
import { AreaChartData } from "../../../commons/components/AreaChartData.jsx";
import sumarDias from "../../../commons/functions/sumarDias";
import { BombaElectrica } from "./components/icons";
import BarGraph from "../SCADAS/BarGraph";

const styles = {
  pageTitle: {
    color: "#303D48",
    marginBottom: "10px",
    marginLeft: "10px"
  },
  breadcrumb: {
    marginLeft: "10px",
    marginBottom: "20px"
  },
  breadcrumbNav: {
    fontSize: "14px",
    color: "#6c757d"
  },
  breadcrumbLink: {
    color: "#333",
    textDecoration: "none",
    fontWeight: "normal"
  },
  breadcrumbSeparator: {
    margin: "0 8px",
    color: "#6c757d"
  },
  breadcrumbActive: {
    color: "#6c757d",
    fontWeight: "bold"
  },
  sectionTitle: {
    color: "#6c757d",
    fontSize: "16px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "30px"
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    marginBottom: "40px"
  },
  mainCard: {
    minHeight: "80px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    padding: "20px",
    backgroundColor: "#fff",
    borderLeft: "4px solid #007bff",
    flex: "1 1 300px",
    cursor: "pointer",
    transition: "all 0.2s ease"
  },
  mainCardHover: {
    backgroundColor: "#e3f2fd",
    transform: "scale(1.02)",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
  },
  mainCardSelected: {
    backgroundColor: "#bbdefb",
    borderLeft: "4px solid #2196f3"
  },
  metricLabelContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  },
  metricLabel: {
    fontSize: "14px",
    color: "#333",
    fontWeight: "600",
    margin: "0",
    lineHeight: "1.2"
  },
  metricSubLabel: {
    fontSize: "14px",
    color: "#333",
    fontWeight: "600",
    margin: "0",
    lineHeight: "1.2"
  },
  metricValueContainer: {
    display: "flex",
    alignItems: "baseline",
    textAlign: "right"
  },
  metricValue: {
    fontSize: "36px",
    fontWeight: "300",
    color: "#333",
    lineHeight: "1",
    margin: "0"
  },
  metricUnit: {
    fontSize: "16px",
    color: "#6c757d",
    marginLeft: "8px",
    fontWeight: "500"
  },
  pumpContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "30px",
    marginBottom: "40px",
    maxWidth: "1400px",
    margin: "0 auto 40px auto"
  },
  pumpCard: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "0",
    backgroundColor: "transparent",
    width: "100%",
    minHeight: "280px",
    marginBottom: "20px",
    cursor: "pointer",
    transition: "transform 0.2s ease"
  },
  pumpCardSelected: {
    transform: "scale(1.02)",
    opacity: "0.9"
  },
  pumpIconContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginRight: "10px",
    minWidth: "80px",
    maxWidth: "80px",
    justifyContent: "flex-start"
  },
  pumpIcon: {
    transform: "scale(0.6)"
  },
  pumpLabel: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    margin: "0",
    marginRight: "10px"
  },
  pumpMetricsContainer: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    minHeight: "240px"
  },
  pumpMetricRow: {
    backgroundColor: "#f8f9fa",
    boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
    borderRadius: "5px",
    padding: "14px 18px",
    display: "flex",
    gap: "12px",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    transition: "all 0.2s ease",
    minHeight: "55px",
    flex: "1"
  },
  pumpMetricRowHover: {
    backgroundColor: "#e3f2fd",
    transform: "scale(1.02)",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
  },
  pumpMetricRowSelected: {
    backgroundColor: "#bbdefb",
    borderLeft: "4px solid #2196f3"
  },
  pumpMetricLabel: {
    fontSize: "13px",
    color: "#007bff",
    fontWeight: "600",
    margin: "0"
  },
  pumpMetricValueContainer: {
    display: "flex",
    alignItems: "baseline"
  },
  pumpMetricValue: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333",
    margin: "0"
  },
  pumpMetricUnit: {
    fontSize: "13px",
    color: "#6c757d",
    marginLeft: "4px"
  },
  statusBadge: {
    color: "white",
    padding: "4px 12px",
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: "600",
    border: "none"
  },
  totalizadorSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "800px",
    margin: "0 auto",
    marginBottom: "20px"
  },
  totalizadorContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center"
  },
  totalizadorCard: {
    minHeight: "80px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    padding: "20px",
    backgroundColor: "#fff",
    borderLeft: "4px solid #007bff",
    flex: "1 1 300px",
    minWidth: "300px"
  },
  totalizadorLabelContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  },
  totalizadorLabel: {
    fontSize: "14px",
    color: "#333",
    fontWeight: "600",
    margin: "0",
    lineHeight: "1.2"
  },
  totalizadorSubLabel: {
    fontSize: "14px",
    color: "#333",
    fontWeight: "600",
    margin: "0",
    lineHeight: "1.2"
  },
  totalizadorValueContainer: {
    display: "flex",
    alignItems: "baseline",
    textAlign: "right"
  },
  totalizadorValue: {
    fontSize: "36px",
    fontWeight: "300",
    color: "#333",
    lineHeight: "1",
    margin: "0"
  },
  totalizadorUnit: {
    fontSize: "16px",
    color: "#6c757d",
    marginLeft: "8px",
    fontWeight: "500"
  },
  dateRangeCard: {
    padding: "20px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    borderRadius: "8px"
  },
  dateRange: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px"
  },
  dateText: {
    fontSize: "14px",
    color: "#333",
    fontWeight: "600"
  },
  chartCard: {
    padding: "20px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    backgroundColor: "#fff"
  },
  variableMonitoreada: {
    textAlign: "center",
    fontSize: "16px",
    color: "#666",
    fontStyle: "italic",
    marginBottom: "20px"
  }
};

export function ParametrosElectricos({ idPlanta = 23, nombrePlanta = "SCADA Terranova 1" }) {
  // CSS para media queries responsivas
  const responsiveCSS = `
    .pump-container-responsive {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 30px;
      margin-bottom: 40px;
      max-width: 1400px;
      margin: 0 auto 40px auto;
    }
    
    @media (max-width: 1400px) and (min-width: 768px) {
      .pump-container-responsive {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    @media (max-width: 767px) {
      .pump-container-responsive {
        grid-template-columns: 1fr;
      }
    }
  `;

  const [startDate, setStartDate] = useState(sumarDias(new Date(), -6));
  const [endDate, setEndDate] = useState(new Date());
  const [variableSeleccionada, setVariableSeleccionada] = useState({
    column: null,
    title: null
  });
  const [hoveredMetric, setHoveredMetric] = useState(null);
  const [hoveredAnalyzer, setHoveredAnalyzer] = useState(null);

  // Datos hardcodeados para BarGraph cuando se selecciona estado
  const mockBarGraphData = useMemo(() => {
    const getMockDataForBomba = (bombaId) => {
      const startTime = new Date(startDate);
      const endTime = new Date(endDate);
      const mockData = [];
      
      // Definir secuencias de estados para cada bomba
      let secuenciaEstados;
      if (bombaId === "P-200") {
        secuenciaEstados = [
          { estado: "7", duracionHoras: 12 },   // En funcionamiento 12h
          { estado: "0", duracionHoras: 3 },    // Planta detenida 3h
          { estado: "7", duracionHoras: 16 },   // En funcionamiento 16h
          { estado: "0", duracionHoras: 2 },    // Planta detenida 2h
          { estado: "7", duracionHoras: 8 }     // En funcionamiento 8h
        ];
      } else if (bombaId === "P-201") {
        secuenciaEstados = [
          { estado: "1", duracionHoras: 4 },    // Falla 4h
          { estado: "0", duracionHoras: 8 },    // Planta detenida 8h
          { estado: "7", duracionHoras: 6 },    // En funcionamiento 6h
          { estado: "0", duracionHoras: 12 },   // Planta detenida 12h
          { estado: "7", duracionHoras: 4 }     // En funcionamiento 4h
        ];
      } else if (bombaId === "P-202") {
        secuenciaEstados = [
          { estado: "0", duracionHoras: 10 },   // Planta detenida 10h
          { estado: "1", duracionHoras: 3 },    // Falla 3h
          { estado: "0", duracionHoras: 14 },   // Planta detenida 14h
          { estado: "7", duracionHoras: 5 },    // En funcionamiento 5h
          { estado: "0", duracionHoras: 6 }     // Planta detenida 6h
        ];
      } else { // P-203
        secuenciaEstados = [
          { estado: "7", duracionHoras: 18 },   // En funcionamiento 18h
          { estado: "0", duracionHoras: 2 },    // Planta detenida 2h
          { estado: "7", duracionHoras: 20 },   // En funcionamiento 20h
          { estado: "0", duracionHoras: 1 },    // Planta detenida 1h
          { estado: "7", duracionHoras: 10 }    // En funcionamiento 10h
        ];
      }
      
      let currentTime = new Date(startTime);
      let secuenciaIndex = 0;
      
      while (currentTime < endTime && secuenciaIndex < secuenciaEstados.length) {
        const { estado, duracionHoras } = secuenciaEstados[secuenciaIndex];
        const duracionMs = duracionHoras * 60 * 60 * 1000;
        const finSegmento = new Date(currentTime.getTime() + duracionMs);
        
        // Generar puntos cada 15 minutos para el mismo estado
        const intervaloPuntos = 15 * 60 * 1000; // 15 minutos
        let puntoTime = new Date(currentTime);
        
        while (puntoTime < finSegmento && puntoTime < endTime) {
          mockData.push({
            d: estado,
            fecha: puntoTime.toISOString()
          });
          puntoTime = new Date(puntoTime.getTime() + intervaloPuntos);
        }
        
        currentTime = finSegmento;
        secuenciaIndex++;
      }
      
      return mockData;
    };

    return {
      "P-200": getMockDataForBomba("P-200"),
      "P-201": getMockDataForBomba("P-201"),
      "P-202": getMockDataForBomba("P-202"),
      "P-203": getMockDataForBomba("P-203")
    };
  }, [startDate, endDate]);

  const analizadorData = {
    potenciaActiva: 100,
    potenciaReactiva: 100,
    energia: 100
  };

  const bombasData = [
    {
      id: "P-200",
      title: "P-200",
      potencia: { value: 0.0, column: "d4" },
      frecuencia: { value: 0.0, column: "d5" },
      corriente: { value: 0.0, column: "d6" },
      estado: { value: "En Funcionamiento", column: "d7" },
      color: "#28a745",
      horasFuncionamiento: 5,
      contadorArranques: 4
    },
    {
      id: "P-201",
      title: "P-201",
      potencia: { value: 0.0, column: "d8" },
      frecuencia: { value: 0.0, column: "d9" },
      corriente: { value: 0.0, column: "d10" },
      estado: { value: "En Falla", column: "d11" },
      color: "#dc3545",
      horasFuncionamiento: 0,
      contadorArranques: 0
    },
    {
      id: "P-202",
      title: "P-202",
      potencia: { value: 0.0, column: "d12" },
      frecuencia: { value: 0.0, column: "d13" },
      corriente: { value: 0.0, column: "d14" },
      estado: { value: "En Falla", column: "d15" },
      color: "#dc3545",
      horasFuncionamiento: 0,
      contadorArranques: 0
    },
    {
      id: "P-203",
      title: "P-203",
      potencia: { value: 0.0, column: "d16" },
      frecuencia: { value: 0.0, column: "d17" },
      corriente: { value: 0.0, column: "d18" },
      estado: { value: "En Funcionamiento", column: "d19" },
      color: "#28a745",
      horasFuncionamiento: 12,
      contadorArranques: 8
    }
  ];

  // Obtener datos del totalizador de la bomba seleccionada
  const bombaActual = bombasData.find(
    (bomba) => bomba.title === variableSeleccionada.title
  );

  const totalizadorData = {
    horasFuncionamiento: bombaActual ? bombaActual.horasFuncionamiento : 0,
    contadorArranques: bombaActual ? bombaActual.contadorArranques : 0
  };

  // Función para manejar el clic en una bomba
  const handleVariableClick = (column, title) => {
    setVariableSeleccionada({
      column,
      title
    });
  };

  // Función para buscar datos
  const onClickBuscarDatos = () => {
    // Aquí puedes agregar la lógica para buscar datos según las fechas seleccionadas
    console.log("Buscando datos desde:", startDate, "hasta:", endDate);
    // La búsqueda de datos no afecta la variable seleccionada
    if (variableSeleccionada.column) {
      console.log(
        "Actualizando gráfico para la variable:",
        variableSeleccionada.title
      );
    }
  };

  return (
    <section>
      <style>{responsiveCSS}</style>
      <section>
        <h1
          className="card-header-title font-size-lg font-weight-bold text-uppercase"
          style={styles.pageTitle}>
          PARÁMETROS ELÉCTRICOS
        </h1>

        {/* Breadcrumb */}
        <nav style={styles.breadcrumb}>
          <div style={styles.breadcrumbNav}>
            <span style={styles.breadcrumbLink}>IdA</span>
            <span style={styles.breadcrumbSeparator}>/</span>
            <span style={styles.breadcrumbLink}>Plantas</span>
            <span style={styles.breadcrumbSeparator}>/</span>
            <span style={styles.breadcrumbLink}>Blueberries</span>
            <span style={styles.breadcrumbSeparator}>/</span>
            <span style={styles.breadcrumbLink}>{nombrePlanta}</span>
            <span style={styles.breadcrumbSeparator}>/</span>
            <span style={styles.breadcrumbActive}>Parámetros Eléctricos</span>
          </div>
        </nav>
      </section>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)"
        }}>
        {/* Título de la página */}

        {/* Analizador de Red */}
        <div>
          <h2 style={styles.sectionTitle}>Analizador de Red</h2>
          <div style={styles.container}>
            <div
              style={{
                ...styles.mainCard,
                ...(hoveredAnalyzer === "potencia-activa"
                  ? styles.mainCardHover
                  : {}),
                ...(variableSeleccionada.column === "d0"
                  ? styles.mainCardSelected
                  : {})
              }}
              onClick={() => {
                handleVariableClick("d0", "Potencia Activa");
              }}
              onMouseEnter={() => setHoveredAnalyzer("potencia-activa")}
              onMouseLeave={() => setHoveredAnalyzer(null)}>
              <div style={styles.metricLabelContainer}>
                <p style={styles.metricLabel}>Potencia</p>
                <p style={styles.metricSubLabel}>Activa</p>
              </div>
              <div style={styles.metricValueContainer}>
                <span style={styles.metricValue}>
                  {analizadorData.potenciaActiva}
                </span>
                <span style={styles.metricUnit}>KW</span>
              </div>
            </div>

            <div
              style={{
                ...styles.mainCard,
                ...(hoveredAnalyzer === "potencia-reactiva"
                  ? styles.mainCardHover
                  : {}),
                ...(variableSeleccionada.column === "d1"
                  ? styles.mainCardSelected
                  : {})
              }}
              onClick={() => {
                handleVariableClick("d1", "Potencia Reactiva");
              }}
              onMouseEnter={() => setHoveredAnalyzer("potencia-reactiva")}
              onMouseLeave={() => setHoveredAnalyzer(null)}>
              <div style={styles.metricLabelContainer}>
                <p style={styles.metricLabel}>Potencia</p>
                <p style={styles.metricSubLabel}>Reactiva</p>
              </div>
              <div style={styles.metricValueContainer}>
                <span style={styles.metricValue}>
                  {analizadorData.potenciaReactiva}
                </span>
                <span style={styles.metricUnit}>KVAR</span>
              </div>
            </div>

            <div
              style={{
                ...styles.mainCard,
                ...(hoveredAnalyzer === "energia" ? styles.mainCardHover : {}),
                ...(variableSeleccionada.column === "d2"
                  ? styles.mainCardSelected
                  : {})
              }}
              onClick={() => {
                handleVariableClick("d2", "Energía");
              }}
              onMouseEnter={() => setHoveredAnalyzer("energia")}
              onMouseLeave={() => setHoveredAnalyzer(null)}>
              <div style={styles.metricLabelContainer}>
                <p style={styles.metricLabel}>Energía</p>
              </div>
              <div style={styles.metricValueContainer}>
                <span style={styles.metricValue}>{analizadorData.energia}</span>
                <span style={styles.metricUnit}>KVA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Parámetros Bombas */}
        <div>
          <h2 style={styles.sectionTitle}>Parámetros Bombas</h2>
          <div className="pump-container-responsive">
            {bombasData.map((bomba, index) => (
              <div
                key={bomba.id}
                style={{ display: "flex" }}>
                {/* Icono y etiqueta de la bomba */}
                <div style={styles.pumpIconContainer}>
                  <div style={styles.pumpIcon}>
                    <BombaElectrica circleColor={bomba.color} />
                  </div>
                  <p style={styles.pumpLabel}>{bomba.id}</p>
                </div>

                {/* Métricas */}
                <div style={styles.pumpMetricsContainer}>
                  {/* Potencia */}
                  <div
                    style={{
                      ...styles.pumpMetricRow,
                      ...(hoveredMetric === `${bomba.id}-potencia`
                        ? styles.pumpMetricRowHover
                        : {}),
                      ...(variableSeleccionada.column === bomba.potencia.column
                        ? styles.pumpMetricRowSelected
                        : {})
                    }}
                    onClick={() =>
                      handleVariableClick(
                        bomba.potencia.column,
                        `${bomba.title} - Potencia`
                      )
                    }
                    onMouseEnter={() =>
                      setHoveredMetric(`${bomba.id}-potencia`)
                    }
                    onMouseLeave={() => setHoveredMetric(null)}>
                    <span style={styles.pumpMetricLabel}>Potencia</span>
                    <div style={styles.pumpMetricValueContainer}>
                      <span style={styles.pumpMetricValue}>
                        {bomba.potencia.value.toFixed(2)}
                      </span>
                      <span style={styles.pumpMetricUnit}>kW</span>
                    </div>
                  </div>

                  {/* Frecuencia */}
                  <div
                    style={{
                      ...styles.pumpMetricRow,
                      ...(hoveredMetric === `${bomba.id}-frecuencia`
                        ? styles.pumpMetricRowHover
                        : {}),
                      ...(variableSeleccionada.column ===
                      bomba.frecuencia.column
                        ? styles.pumpMetricRowSelected
                        : {})
                    }}
                    onClick={() =>
                      handleVariableClick(
                        bomba.frecuencia.column,
                        `${bomba.title} - Frecuencia`
                      )
                    }
                    onMouseEnter={() =>
                      setHoveredMetric(`${bomba.id}-frecuencia`)
                    }
                    onMouseLeave={() => setHoveredMetric(null)}>
                    <span style={styles.pumpMetricLabel}>Frecuencia</span>
                    <div style={styles.pumpMetricValueContainer}>
                      <span style={styles.pumpMetricValue}>
                        {bomba.frecuencia.value.toFixed(2)}
                      </span>
                      <span style={styles.pumpMetricUnit}>Hz</span>
                    </div>
                  </div>

                  {/* Corriente */}
                  <div
                    style={{
                      ...styles.pumpMetricRow,
                      ...(hoveredMetric === `${bomba.id}-corriente`
                        ? styles.pumpMetricRowHover
                        : {}),
                      ...(variableSeleccionada.column === bomba.corriente.column
                        ? styles.pumpMetricRowSelected
                        : {})
                    }}
                    onClick={() =>
                      handleVariableClick(
                        bomba.corriente.column,
                        `${bomba.title} - Corriente`
                      )
                    }
                    onMouseEnter={() =>
                      setHoveredMetric(`${bomba.id}-corriente`)
                    }
                    onMouseLeave={() => setHoveredMetric(null)}>
                    <span style={styles.pumpMetricLabel}>Corriente</span>
                    <div style={styles.pumpMetricValueContainer}>
                      <span style={styles.pumpMetricValue}>
                        {bomba.corriente.value.toFixed(2)}
                      </span>
                      <span style={styles.pumpMetricUnit}>A</span>
                    </div>
                  </div>

                  {/* Estado */}
                  <div
                    style={{
                      ...styles.pumpMetricRow,
                      ...(hoveredMetric === `${bomba.id}-estado`
                        ? styles.pumpMetricRowHover
                        : {}),
                      ...(variableSeleccionada.column === bomba.estado.column
                        ? styles.pumpMetricRowSelected
                        : {})
                    }}
                    onClick={() =>
                      handleVariableClick(
                        bomba.estado.column,
                        `${bomba.title} - Estado`
                      )
                    }
                    onMouseEnter={() => setHoveredMetric(`${bomba.id}-estado`)}
                    onMouseLeave={() => setHoveredMetric(null)}>
                    <span style={styles.pumpMetricLabel}>Estado</span>
                    <span
                      style={{
                        ...styles.statusBadge,
                        backgroundColor: bomba.color
                      }}>
                      {bomba.estado.value}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Totalizador Bomba P-200 */}
        <div style={styles.totalizadorSection}>
          <h2 style={styles.sectionTitle}>Totalizador Bomba P-200</h2>
          <div style={styles.totalizadorContainer}>
            <div
              style={{
                ...styles.totalizadorCard,
                ...(hoveredMetric === "horas-funcionamiento"
                  ? {
                      ...styles.totalizadorCard,
                      backgroundColor: "#e3f2fd",
                      transform: "scale(1.02)",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
                    }
                  : {}),
                ...(variableSeleccionada.column === "d3"
                  ? {
                      ...styles.totalizadorCard,
                      backgroundColor: "#bbdefb",
                      borderLeft: "4px solid #2196f3"
                    }
                  : {}),
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
              onClick={() =>
                handleVariableClick("d3", "P-200 - Horas Funcionamiento")
              }
              onMouseEnter={() => setHoveredMetric("horas-funcionamiento")}
              onMouseLeave={() => setHoveredMetric(null)}>
              <div style={styles.totalizadorLabelContainer}>
                <p style={styles.totalizadorLabel}>Horas</p>
                <p style={styles.totalizadorSubLabel}>Funcionamiento</p>
              </div>
              <div style={styles.totalizadorValueContainer}>
                <span style={styles.totalizadorValue}>
                  {bombasData[0].horasFuncionamiento}
                </span>
                <span style={styles.totalizadorUnit}>hrs</span>
              </div>
            </div>

            <div
              style={{
                ...styles.totalizadorCard,
                ...(hoveredMetric === "contador-arranques"
                  ? {
                      ...styles.totalizadorCard,
                      backgroundColor: "#e3f2fd",
                      transform: "scale(1.02)",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
                    }
                  : {}),
                ...(variableSeleccionada.column === "d20"
                  ? {
                      ...styles.totalizadorCard,
                      backgroundColor: "#bbdefb",
                      borderLeft: "4px solid #2196f3"
                    }
                  : {}),
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
              onClick={() =>
                handleVariableClick("d20", "P-200 - Contador Arranques")
              }
              onMouseEnter={() => setHoveredMetric("contador-arranques")}
              onMouseLeave={() => setHoveredMetric(null)}>
              <div style={styles.totalizadorLabelContainer}>
                <p style={styles.totalizadorLabel}>Contador</p>
                <p style={styles.totalizadorSubLabel}>Arranques</p>
              </div>
              <div style={styles.totalizadorValueContainer}>
                <span style={styles.totalizadorValue}>
                  {bombasData[0].contadorArranques.toString().padStart(2, "0")}
                </span>
                <span style={styles.totalizadorUnit}>veces</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de Selección de Fechas y Grafico de la Variable Monitoreada */}
      </div>

      <section
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 30,
          gap: 30,
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)"
        }}>
        {/* Sección de Selección de Fechas */}
        <div style={styles.dateRangeSection}>
          <Card style={styles.dateRangeCard}>
            <section
              style={{
                display: "flex",
                flexDirection: "row",
                rowGap: 20,
                columnGap: 40,
                flexWrap: "wrap"
              }}>
              <section
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                  flexWrap: "wrap"
                }}>
                {/* Fecha Inicio */}
                <section>
                  <div style={styles.dateRange}>
                    <div style={styles.dateText}>Fecha Inicio</div>
                    <DatePicker2
                      value={startDate}
                      onChange={(cambio) => {
                        setStartDate(cambio);
                      }}
                      valueFormat={{
                        month: "numeric",
                        year: "numeric",
                        day: "numeric"
                      }}
                      calendarProps={{
                        min: new Date("2022-09-01 00:00:00"),
                        max: new Date(),
                        views: ["month"]
                      }}
                      messages={{
                        dateButton: "Seleccionar fecha",
                        moveBack: "",
                        moveForward: "",
                        moveToday: "Hoy"
                      }}
                    />
                  </div>
                </section>
                {/* Fecha Fin */}
                <section>
                  <div style={styles.dateRange}>
                    <div style={styles.dateText}>Fecha Fin</div>
                    <DatePicker2
                      value={endDate}
                      onChange={(cambio) => {
                        const fechaHoy = new Date();
                        if (
                          cambio.toLocaleDateString("en-US") !==
                          fechaHoy.toLocaleDateString("en-US")
                        ) {
                          cambio.setHours(23);
                          cambio.setMinutes(59);
                          cambio.setSeconds(59);
                        } else {
                          cambio.setHours(fechaHoy.getHours());
                          cambio.setMinutes(fechaHoy.getMinutes());
                          cambio.setSeconds(fechaHoy.getSeconds());
                        }
                        setEndDate(cambio);
                      }}
                      valueFormat={{
                        month: "numeric",
                        year: "numeric",
                        day: "numeric"
                      }}
                      calendarProps={{
                        min: new Date(2020, 2, 1),
                        max: new Date(),
                        views: ["month"]
                      }}
                      messages={{
                        dateButton: "Seleccionar fecha",
                        moveBack: "",
                        moveForward: "",
                        moveToday: "Hoy"
                      }}
                    />
                  </div>
                </section>
              </section>
              <section
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "20px",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                {/* Botón Buscar Datos */}
                <section>
                  <div>
                    <Button
                      onClick={() => {
                        onClickBuscarDatos();
                      }}
                      color="info">
                      Buscar datos
                    </Button>
                  </div>
                </section>
                {/* Botón Exportar Datos */}
                <section>
                  <div>
                    <Button
                      onClick={() => {
                        // Función para exportar datos
                        console.log("Exportar datos");
                      }}
                      color="info">
                      Exportar datos
                    </Button>
                  </div>
                </section>
              </section>
            </section>
          </Card>
        </div>

        {/* Sección de Variable Monitoreada */}
        <div style={styles.chartSection}>
          <div style={styles.variableMonitoreada}>
            {variableSeleccionada.column
              ? `Variable Monitoreada: ${variableSeleccionada.title}`
              : "No se ha seleccionado ninguna tarjeta o dispositivo"}
          </div>

          {variableSeleccionada.column && (
            <div style={styles.chartCard}>
              {variableSeleccionada.title && variableSeleccionada.title.includes("Estado") ? (
                // Mostrar BarGraph para estados
                <BarGraph
                  data={mockBarGraphData[variableSeleccionada.title.split(" - ")[0]]}
                  fecha={startDate}
                  fechaFin={endDate}
                />
              ) : (
                // Mostrar AreaChartData para otros parámetros
                <AreaChartData
                  idPlanta={idPlanta}
                  column={variableSeleccionada.column}
                  nombre={variableSeleccionada.title}
                  yMax={0}
                  yMin={0}
                  fechaInicio={startDate}
                  fechaFin={endDate}
                />
              )}
            </div>
          )}
        </div>
      </section>
    </section>
  );
}

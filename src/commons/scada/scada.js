export const getScaledValue = (value, decimals) => {
  if (!Number.isNaN(Number(value))) {
    return Number(value)
      .toFixed(decimals ? decimals : 0)
      .replace(".", ",");
  }

  return value;
};

export const getColor = (x) => {
  const colors = [
    "#B4002B", //detenida id => 0
    "#00CD98", //funcionando id => 1
    "#3574E0", //moviendose id => 2
    "#FBCE19", // falla id => 3
    "#FF6B00", // bloqueada id => 4
    "#b7b7b7" // ??
  ];
  return colors[Number(x)] || "#b7b7b7";
};

export const getTarjetaClass = (id, selected) => {
  if (selected === id) {
    return "tarjetaSeleccionada";
  } else {
    return "tarjeta";
  }
};

export const getConexion = (id) => {
  switch (Number(id)) {
    case 0:
      return "DESCONECTADO";
    case 1:
      return "EN LINEA";
    case 2:
      return "APAGADO";
    default:
      return "CONSULTANDO";
  }
};

export const getColorConexion = (id) => {
  switch (Number(id)) {
    case 0:
      return "#B4002B";
    case 1:
      return "#00CD98";
    case 2:
      return "#0f0f0f";
    default:
      return "#b7b7b7";
  }
};

export const getEstadoNivelBajo = (id) => {
  switch (Number(id)) {
    case 0:
      return "OFF";
    case 1:
      return "ON";
    case 2:
      return "OFF";
    default:
      return "-";
  }
};

export const getColorNivelBajo = (id) => {
  switch (Number(id)) {
    case 0:
      return "#B4002B";
    case 1:
      return "#00CD98";
    case 2:
      return "#FBCE19";
    default:
      return "#b7b7b7";
  }
};

export const getEstadoNivelAlto = (id) => {
  switch (Number(id)) {
    case 0:
      return "ON";
    case 1:
      return "OFF";
    default:
      return "-";
  }
};

export const getColorNivelAlto = (id) => {
  switch (Number(id)) {
    case 0:
      return "#00CD98";
    case 1:
      return "#B4002B";
    default:
      return "#b7b7b7";
  }
};

export const getTemaAlarma = (id, loading, datosAlarmas) => {
  if (loading) return "campanaDesconectada";

  for (let i = 0; i < datosAlarmas.length; i++) {
    if (Number(id) === Number(datosAlarmas[i].id)) {
      return Number(datosAlarmas[i].min) !== Number(datosAlarmas[i].max)
        ? "campana"
        : "campanaVacia";
    }
  }

  return null;
};

export const getEPO = (id) => {
  // Funcionando :
  //  - Inicio flushing
  //  - Flushing inicial
  //  - Cambio a producción
  //  - Producción
  //  - Inicio flushing intermedio
  //  - Flushing intermedio
  //  - Cambio a flushing final
  //  - Flushing final
  try {
    const EPO = [
      "Parada brusca",
      "Falla osmosis",
      "Deshabilitado",
      "Detenida",
      "Inicio flushing",
      "Espera pre tratamiento",
      "Flushing inicial",
      "Cambio a producción",
      "Producción",
      "Inicio flushing intermedio",
      "Flushing intermedio",
      "Cambio a flushing final",
      "Flushing final",
      "Espera pretratamiento detenido",
      "Cambio a deteción",
      "En retrolavado"
    ];
    return EPO[id];
  } catch (e) {
    return "Estado desconocido";
  }
};

/* export const getEstadoDispositivo = (id) => {
  switch(Number(id)){
    case 0:
      return "OFF";
    case 1:
      return "ON";
    case 2:
      return "OFF";
    default:
      return "-"; 
  }
};

export const getStringConection=(id)=> {
  try {
    const stringConection = ["Desconectada", "En línea"];
    return stringConection[id];
  } catch (e) {
    return "";
  }
};

export const loadFuncionamientoPlanta = (id,inicio,fin) => {
  let formData = new FormData();
  formData.append("id_planta", id);
  formData.append("fecha", inicio.toLocaleDateString("en-US"));
  formData.append("fechaFin", fin.toLocaleDateString("en-US") + " " + fin.toLocaleTimeString("en-US"));
  fetch(apis.obtainGraph, {
    method: "POST",
    headers: {
      "Id-purificador": 1,
      "Id-User": user.id_user,
      "Token": user.token,
    },
    body: formData,
  })
    .then((res) => res.json())
    .then((json) => {
        return json;
    });
}; */

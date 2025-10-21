function ValidarInput(input, tipo, min = 1, max = "") {
  if (!input) {
    return "Se requiere ingresar el campo";
  } else {
    let regExp = new RegExp(
      `^[áéíóúÁÉÍÓÚñÑ0-9a-zA-Z ]{${String(min)},${String(max)}}$` /* "^[0-9a-zA-Záéíóú´ÁÉÍÓÚñÑ-]{"+ String(min)+","+String(max)+"}$" */
    );
    switch (String(tipo)) {
      case "email":
        regExp = new RegExp(/\S+@\S+\.\S+/);
        break;
      case "number":
        regExp = new RegExp(`^[0-9]{${String(min)},${String(max)}}$`);
        break;
      case "text":
        break;
      default: //texto
        break;
    }

    const validacion = regExp.test(input);

    if (validacion) {
      return "";
    } else {
      return "Formato incorrecto";
    }
  }
}

export default ValidarInput;

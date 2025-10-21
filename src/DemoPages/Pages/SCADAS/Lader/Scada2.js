import React, { useState, useEffect } from "react";
import { getColorConexion, getConexion } from "../../../../commons/scada/scada";

function Scada2(props) {
  const { data, selected, datosAlarmas } = props;
  const trasladoLeyenda = 957;
  const trasladoTituloLeyenda = trasladoLeyenda - 9;
  const trasladoElementosLeyenda = trasladoLeyenda + 25.964;
  const trasladoCirculosLeyenda = trasladoLeyenda + 7.99;
  const trasladoSombraLeyenda = trasladoLeyenda - 33.154;
  const trasladoCuadroLeyenda = trasladoLeyenda - 784;

  const trasladoConectividad = -117;
  const trasladoTituloConectividad = trasladoConectividad + 2.5;
  const trasladoCirculoConectividad = trasladoConectividad + 23.10475;
  const trasladoFondoCircConectividad = trasladoConectividad + 2;
  const trasladoTextoConectividad = trasladoConectividad + 46.793;
  const trasladoSombraConectividad = trasladoConectividad - 27.538;
  const trasladoCuadroConectividad = trasladoConectividad - 62.11;
  const trasladoLineaConectividad = trasladoConectividad - 65;

  const getColor = (x) => {
    const colors = [
      "#B4002B", //detenida id => 0
      "#00CD98", //funcionando id => 1
      "#3574E0", //moviendose id => 2
      "#FBCE19", // falla id => 3
      "#FF6B00", // bloqueada id => 4
      "#b7b7b7" // ??
    ];
    try {
      return colors[Number(x)];
    } catch (err) {
      console.error(err);
      return "#3574e0";
    }
  };

  const getTemaAlarma = (id) => {
    for (let i = 0; i < datosAlarmas.length; i++) {
      if (id === datosAlarmas[i].id) {
        if (datosAlarmas[i].min !== datosAlarmas[i].max) {
          return "campana";
        } else {
          return "campanaVacia";
        }
      }
    }
  };

  //const [connection, setconnection] = useState("CARGANDO");
  const [recirculacionColour, setRecirculacionColour] = useState(getColor(5));
  const [uVColour, setUVColour] = useState(getColor(5));
  const [presostatoColour, setPresostatoColour] = useState(getColor(5));
  const [nivelEstanque, setNivelEstanque] = useState("-");
  //const nivelEstanque = data.d0 / 10;

  const getColordispositivo = (id) => {
    return Number(id) === Number(selected) ? "#E3ECFB" : "#323E48";
  };

  const getColorVariable = (id) => {
    return Number(id) === Number(selected) ? 0.15 : 0;
  };

  const update = () => {
    if (
      data.d0 === "-" &&
      data.d1 === "-" &&
      data.d2 === "-" &&
      data.d3 === "-" &&
      data.d4 === "-"
    ) {
      setNivelEstanque("-");
      return 0;
    }
    setRecirculacionColour(getColor(data.d1));
    setUVColour(getColor(data.d2));
    setPresostatoColour(getColor(data.d3));
    setNivelEstanque(String(data.d0 / 10));
    /* switch (Number(data.d3)) {
      case 0:
        setPresostatoColour("#ff2f3e");
        setPresostatoText("OFF");
        break;
      case 1:
        setPresostatoColour("#00E098");
        setPresostatoText("ON");
        break;
      case 2:
        setPresostatoColour("#FBC43B");
        setPresostatoText("Falla");
        break;
      default:
        setPresostatoColour("#3574e0");
        setPresostatoText("");
        break;
    } */
  };

  const select = (x) => {
    props.select(x);
  };

  const notificacion = (x) => {
    props.notificacion(x, "");
  };

  useEffect(() => {
    update();
  });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="-179 0 1429.5  780"
      xmlSpace="preserve"
      {...props}>
      <style>
        {
          ".stw{opacity:.0;fill:#3574e0;enable-background:new;cursor: pointer;}.pointer{cursor: pointer; hover {fill: #DA4567;}}.stb{opacity:.15;fill:#3574e0;enable-background:new;cursor: pointer;}.st0{fill:none;stroke:#35ace8;stroke-width:4;stroke-miterlimit:10}.sts{fill:#adc7f5;cursor: pointer;}.st1{fill:#fff}.st2{fill:#3574e0}.st4{fill:#00e098}.st6{fill:#35ace8}.st10{fill:#323e48}.st10b{fill:#323e48;cursor: pointer;}.st11{fill:#00a19b}.st26{fill:none;stroke:#323e48;stroke-width:4;stroke-miterlimit:10}.st27{fill:none;stroke:#e1eafa;stroke-width:4;stroke-miterlimit:10}.st38{fill:none;stroke:#323e48;stroke-width:4;stroke-miterlimit:10}.st38{opacity:.6;stroke:#ccc;stroke-width:2}.st39{fill:#f2f2f2}.st45{fill:#a2a8ad}.st46{fill:none;stroke:#fff;stroke-width:2;stroke-miterlimit:10}.st47{fill:#ccc}.st48,.st59{stroke-miterlimit:10}.st48{opacity:.5;fill:none;stroke:#b3b3b3;stroke-width:.5}.st59{fill:#fff;stroke:#35ace8;stroke-width:4}.st63{font-family:&apos;Sarabun-Regular&apos;}.st64{font-size:11px}.st65{font-size:14px}.st66{fill:#606060}.st67{font-size:17px}.st68{font-family:&apos;PTSans-Regular&apos;}.campana{fill:#3474E0;}.campana:hover{fill:#7c7c7c;}.campanaVacia{fill:#c2c2c1;}.campanaVacia:hover{fill:#7c7c7c;}.campanaDesconexion{fill:#000000}.pointer2{cursor: pointer;}"
        }
      </style>
      <path
        fill="none"
        stroke="#35ACE8"
        strokeWidth={4}
        strokeMiterlimit={10}
        d="M644.6 332.3h-12.2c-4.6 0-8.3 3.7-8.4 8.3l-.3 73.9"
      />
      <path
        fill="none"
        stroke="#35ACE8"
        strokeWidth={4}
        strokeMiterlimit={10}
        d="M321.4 416.5v-77c0-4 3.2-7.2 7.2-7.2h504.1c5.1 0 9.3 4.2 9.3 9.3V546"
      />
      <path
        fill="none"
        stroke="#35ACE8"
        strokeWidth={4}
        strokeMiterlimit={10}
        d="M265.6 358.3h314.6c4.7 0 8.5 3.7 8.7 8.4l.7 48.8"
      />
      <image
        overflow="visible"
        opacity={0.3}
        width={344}
        height={295}
        xlinkHref="data:image/png;base64,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"
        transform="matrix(.48 0 0 .48 527.729 266.64)"
      />
      <path
        fill="#FFF"
        d="M589.5 274.7h-47.1c-3.5 0-6.3 2.8-6.3 6.3v104.3c0 3.5 2.8 6.3 6.3 6.3H598c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.4 3.5-1.4H676c3.5 0 6.3-2.8 6.3-6.3V280.9c0-3.5-2.8-6.3-6.3-6.3h-86.5z"
      />
      {/* Estanque */}
      <g
        onClick={() => {
          select(0);
        }}
        className="pointer">
        <path
          opacity={getColorVariable(4)}
          fill={"#3574e0"}
          d="M536.2 281H682.3000000000001V384.6H536.2z"
        />
        <text transform="translate(562.768 322.604)">
          <tspan
            x={0}
            y={0}
            className="st2 st63 st65 pointer2">
            {"Nivel Estanque"}
          </tspan>
          <tspan
            x={5.2}
            y={17}
            className="st2 st63 st65 pointer2">
            {"Acumulaci\xF3n"}
          </tspan>
        </text>
        <text
          transform="translate(613.904 368.923)"
          className="st66 st63 st67">
          {nivelEstanque}
        </text>
        <text
          transform="translate(652.166 368.527)"
          className="st66 st68 st65">
          {"%"}
        </text>
        <text
          transform="translate(590.044 302.211)"
          className="st66 st63 st64 pointer2">
          {"TK-002"}
        </text>
      </g>
      <path
        fill="none"
        stroke="#35ACE8"
        strokeWidth={4}
        strokeMiterlimit={10}
        d="M604 613.1L604 560.5"
      />
      <path
        fill="none"
        stroke="#35ACE8"
        strokeWidth={4}
        strokeMiterlimit={10}
        d="M456.6 687.5H314c-5.2 0-9.3-4.2-9.3-9.3v-58.7M165.6 358.3h112.2c4.6 0 8.3 3.7 8.4 8.3l.3 50.9"
      />
      <path
        fill="#35ACE8"
        d="M454.5 693.5c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.4-.8.6-1.3.6z"
      />
      <path
        fill="#FFF"
        d="M454.5 681.7c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.6.5-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c1-1.2.9-2.9-.1-3.9l-4.5-4.5c-.6-.6-1.3-.9-2.1-.9z"
      />
      <path
        fill="#35ACE8"
        d="M603.8 616.7c-.5 0-.9-.2-1.3-.5l-.1-.1-4.5-4.5c-.5-.5-.7-1.3-.4-2 .3-.7 1-1.2 1.7-1.2h9c.8 0 1.4.5 1.7 1.2.3.7.1 1.5-.4 2l-4.5 4.5c-.3.4-.7.6-1.2.6z"
      />
      <path
        fill="#FFF"
        d="M608.2 609.5c.8 0 1.2.9.6 1.5l-4.5 4.5c-.2.2-.4.2-.6.2s-.5-.1-.7-.2l-4.5-4.5c-.5-.5-.2-1.5.6-1.5h9.1m0-2h-9c-1.2 0-2.2.7-2.7 1.8-.4 1.1-.2 2.3.6 3.1l4.5 4.5.1.1.1.1c.5.4 1.2.7 1.9.7.8 0 1.5-.3 2-.8l4.5-4.5c.8-.8 1.1-2.1.6-3.1-.4-1.3-1.4-1.9-2.6-1.9z"
      />
      <path
        fill="none"
        stroke="#35ACE8"
        strokeWidth={4}
        strokeMiterlimit={10}
        d="M305 626.5L305 560.5"
      />
      <path
        fill="none"
        stroke="#35ACE8"
        strokeWidth={4}
        strokeMiterlimit={10}
        d="M842 664.5L842 633.9"
      />
      <path
        fill="#35ACE8"
        d="M304.8 616.7c-.5 0-.9-.2-1.3-.5l-.1-.1-4.5-4.5c-.5-.5-.7-1.3-.4-2 .3-.7 1-1.2 1.7-1.2h9c.8 0 1.4.5 1.7 1.2.3.7.1 1.5-.4 2l-4.5 4.5c-.3.4-.7.6-1.2.6z"
      />
      <path
        fill="#FFF"
        d="M309.2 609.5c.8 0 1.2.9.6 1.5l-4.5 4.5c-.2.2-.4.2-.6.2-.2 0-.5-.1-.7-.2l-4.5-4.5c-.5-.5-.2-1.5.6-1.5h9.1m0-2h-9c-1.2 0-2.2.7-2.7 1.8-.4 1.1-.2 2.3.6 3.1l4.5 4.5.1.1.1.1c.5.4 1.2.7 1.9.7.8 0 1.5-.3 2-.8l4.5-4.5c.8-.8 1.1-2.1.6-3.1-.4-1.3-1.4-1.9-2.6-1.9z"
      />
      <path
        fill="#35ACE8"
        d="M837.3 634.5c-.8 0-1.4-.5-1.7-1.2-.3-.7-.1-1.5.4-2l4.5-4.5c.3-.3.8-.5 1.3-.5s.9.2 1.3.5l.1.1 4.5 4.5c.5.5.7 1.3.4 2-.3.7-1 1.2-1.7 1.2h-9.1z"
      />
      <path
        fill="#FFF"
        d="M841.7 627.2c.2 0 .5.1.7.2l4.5 4.5c.6.5.2 1.5-.6 1.5h-9c-.8 0-1.2-.9-.6-1.5l4.5-4.5c.1-.1.3-.2.5-.2m0-2c-.8 0-1.5.3-2 .8l-4.5 4.5c-.8.8-1.1 2.1-.6 3.1.4 1.1 1.5 1.8 2.7 1.8h9c1.2 0 2.2-.7 2.7-1.8.4-1.1.2-2.3-.6-3.1l-4.5-4.5-.1-.1-.1-.1c-.6-.3-1.3-.6-2-.6z"
      />
      <path
        fill="#35ACE8"
        d="M286.8 424.7c-.5 0-.9-.2-1.3-.5l-.1-.1-4.5-4.5c-.5-.5-.7-1.3-.4-2 .3-.7 1-1.2 1.7-1.2h9c.8 0 1.4.5 1.7 1.2.3.7.1 1.5-.4 2l-4.5 4.5c-.3.4-.7.6-1.2.6z"
      />
      <path
        fill="#FFF"
        d="M291.2 417.5c.8 0 1.2.9.6 1.5l-4.5 4.5c-.2.2-.4.2-.6.2-.2 0-.5-.1-.7-.2l-4.5-4.5c-.5-.5-.2-1.5.6-1.5h9.1m0-2h-9c-1.2 0-2.2.7-2.7 1.8-.4 1.1-.2 2.3.6 3.1l4.5 4.5.1.1.1.1c.5.4 1.2.7 1.9.7.8 0 1.5-.3 2-.8l4.5-4.5c.8-.8 1.1-2.1.6-3.1-.4-1.3-1.4-1.9-2.6-1.9z"
      />
      <path
        fill="#35ACE8"
        d="M321.8 424.7c-.5 0-.9-.2-1.3-.5l-.1-.1-4.5-4.5c-.5-.5-.7-1.3-.4-2 .3-.7 1-1.2 1.7-1.2h9c.8 0 1.4.5 1.7 1.2.3.7.1 1.5-.4 2l-4.5 4.5c-.3.4-.7.6-1.2.6z"
      />
      <path
        fill="#FFF"
        d="M326.2 417.5c.8 0 1.2.9.6 1.5l-4.5 4.5c-.2.2-.4.2-.6.2-.2 0-.5-.1-.7-.2l-4.5-4.5c-.5-.5-.2-1.5.6-1.5h9.1m0-2h-9c-1.2 0-2.2.7-2.7 1.8-.4 1.1-.2 2.3.6 3.1l4.5 4.5.1.1.1.1c.5.4 1.2.7 1.9.7.8 0 1.5-.3 2-.8l4.5-4.5c.8-.8 1.1-2.1.6-3.1-.4-1.3-1.4-1.9-2.6-1.9z"
      />
      <path
        fill="none"
        stroke="#35ACE8"
        strokeWidth={4}
        strokeMiterlimit={10}
        d="M403.6 673.5v-28.3c0-4.8 3.9-8.7 8.7-8.7h182c5.2 0 9.3-4.2 9.3-9.3v-8.7"
      />
      <path
        fill="#35ACE8"
        d="M403.8 681.7c-.5 0-.9-.2-1.3-.5l-.1-.1-4.5-4.5c-.5-.5-.7-1.3-.4-2 .3-.7 1-1.2 1.7-1.2h9c.8 0 1.4.5 1.7 1.2.3.7.1 1.5-.4 2l-4.5 4.5c-.3.4-.7.6-1.2.6z"
      />
      <path
        fill="#FFF"
        d="M408.2 674.5c.8 0 1.2.9.6 1.5l-4.5 4.5c-.2.2-.4.2-.6.2-.2 0-.5-.1-.7-.2l-4.5-4.5c-.5-.5-.2-1.5.6-1.5h9.1m0-2h-9c-1.2 0-2.2.7-2.7 1.8-.4 1.1-.2 2.3.6 3.1l4.5 4.5.1.1.1.1c.5.4 1.2.7 1.9.7.8 0 1.5-.3 2-.8l4.5-4.5c.8-.8 1.1-2.1.6-3.1-.4-1.3-1.4-1.9-2.6-1.9z"
      />
      <path
        fill="none"
        stroke="#35ACE8"
        strokeWidth={4}
        strokeMiterlimit={10}
        d="M507.6 663.5L892.3 663.5"
      />
      <path
        fill="#35ACE8"
        d="M565.5 669.9c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.4-.8.6-1.3.6z"
      />
      <path
        fill="#FFF"
        d="M565.5 658.2c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.7.5-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c1-1.2.9-2.9-.1-3.9l-4.5-4.5c-.6-.6-1.3-.9-2.1-.9z"
      />
      <path
        fill="#35ACE8"
        d="M890.5 669.9c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.4-.8.6-1.3.6z"
      />
      <path
        fill="#FFF"
        d="M890.5 658.2c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.7.5-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c1-1.2.9-2.9-.1-3.9l-4.5-4.5c-.6-.6-1.3-.9-2.1-.9z"
      />
      <path
        fill="#35ACE8"
        d="M589.8 422.7c-.5 0-.9-.2-1.3-.5l-.1-.1-4.5-4.5c-.5-.5-.7-1.3-.4-2 .3-.7 1-1.2 1.7-1.2h9c.8 0 1.4.5 1.7 1.2.3.7.1 1.5-.4 2l-4.5 4.5c-.3.4-.7.6-1.2.6z"
      />
      <path
        fill="#FFF"
        d="M594.2 415.5c.8 0 1.2.9.6 1.5l-4.5 4.5c-.2.2-.4.2-.6.2s-.5-.1-.7-.2l-4.5-4.5c-.5-.5-.2-1.5.6-1.5h9.1m0-2h-9c-1.2 0-2.2.7-2.7 1.8-.4 1.1-.2 2.3.6 3.1l4.5 4.5.1.1.1.1c.5.4 1.2.7 1.9.7.8 0 1.5-.3 2-.8l4.5-4.5c.8-.8 1.1-2.1.6-3.1-.4-1.3-1.4-1.9-2.6-1.9z"
      />
      <path
        fill="#35ACE8"
        d="M623.8 422.7c-.5 0-.9-.2-1.3-.5l-.1-.1-4.5-4.5c-.5-.5-.7-1.3-.4-2 .3-.7 1-1.2 1.7-1.2h9c.8 0 1.4.5 1.7 1.2.3.7.1 1.5-.4 2l-4.5 4.5c-.3.4-.7.6-1.2.6z"
      />
      <path
        fill="#FFF"
        d="M628.2 415.5c.8 0 1.2.9.6 1.5l-4.5 4.5c-.2.2-.4.2-.6.2s-.5-.1-.7-.2l-4.5-4.5c-.5-.5-.2-1.5.6-1.5h9.1m0-2h-9c-1.2 0-2.2.7-2.7 1.8-.4 1.1-.2 2.3.6 3.1l4.5 4.5.1.1.1.1c.5.4 1.2.7 1.9.7.8 0 1.5-.3 2-.8l4.5-4.5c.8-.8 1.1-2.1.6-3.1-.4-1.3-1.4-1.9-2.6-1.9z"
      />
      <image
        overflow="visible"
        opacity={0.2}
        width={289}
        height={178}
        xlinkHref="data:image/png;base64,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 gg=="
        transform={`translate(${String(trasladoSombraLeyenda)} 37.673) scale(.9944)`}
      />
      <path //33.154 - 66.308
        fill="#FFF"
        d="M1030.1 207.4H766.9c-3.4 0-6.1-2.8-6.1-6.1V49.7c0-3.4 2.8-6.1 6.1-6.1h263.2c3.4 0 6.1 2.8 6.1 6.1v151.5c0 3.4-2.7 6.2-6.1 6.2z"
        transform={`translate(${String(trasladoCuadroLeyenda)} 1) scale(.9944)`}
      />
      <image
        overflow="visible"
        opacity={0.2}
        width={234}
        height={122}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAAB8CAYAAABqtVxXAAAACXBIWXMAAAs6AAALOgFkf1cNAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABItJREFUeNrs22tPG0cUgOFds5hL CST0Xqmt+v9/VtWLktA2CTfjW2ekM2RY1kCMXaXS80hHJo7xB6Q3Z9ZsmgYA2Lx2jde3fmywMcuY jQVbR9r/Glg/1H6wj8b7WHSjKtJRb2xbeN5WXfRm2ZsnB1tHuhOzG9PFiBbWi7XEOYuZxuM8ZlG9 7o5uRaxli+ZAx2n20xzEY569iFi0sN5mzYHepJmkuUpzHV9PqnibfrTdilh3ItQc6Rdpjqs5iud3 q7Bd08LTr1nLVs2hXqb5UM15PDcZuq4dCrbEmkM9SfNlzFdpTuO5w3hN1/gQCtYJ9qaK9V2as5i3 0WATW7c+Qt8JtmzXLo69Ocxv0/wQ811EWwe7U21Y4HGLOO6WYPNG/TvN6zR/xMm1ra5lJ/WWHQp2 N7braYT6S5qf0nwfm/ZFBL1bXcMCT9+05Ro2b9CL2LAv41KzrYK+idct4vll98Bx+DS26o9pfo5t +yre1HaF9YMt0U4j2uPoatQ7Kl/Gn8u2vd2w7UCwufivI9Rv4jict2v/E2JgvWjncVodR0/T6oh8 Fpv3Ip6/s2Hbaso17FGUf9J8/HS4fvNGsLB2sGVh7kRHeYNexWXnq2huv+nd8zB0DVtukthr7v7+ dVx9s6MwrK+twu3isSzJF/F4GA3Wv4m5F159NO6a+3c2OQbDZsOteys3KfUX5O3NSUObctSsvm9Y rLCdaOvbgLvq6/ahDTv0RiKF/zbclf/BxrUofJ7hDi5KwcL/iGBBsIBgQbCAYAHBgmABwQKCBcEC ggUEC4IFBAsIFgQLCBYQLAgWECwgWBAsIFhAsCBYQLCAYEGwgGABwYJgAcECggXBAoIFBAuCBQQL CBYECwgWECwIFhAsIFgQLCBYQLAgWECwgGBBsIBgAcGCYAHBAoIFwQKCBQQLggUECwgWBAsIFhAs CBYQLCBYECwgWECwIFhAsIBgQbCAYAHBgmABwQKCBcECggUEC4IFBAsIFgQLCBYEC3xGltU8Kdjy 4kU1Sz9H2Krc2Xxglk8JNn/zrJryzQs/V9j4Ri195dZuYqZVc7fRdisqn8Y3TdJcx+O0er2jNGxu s5ZQr9JcxlzHc/P6iNwNHIVn8eKLNO/TfEhznmY/TZtmN81OfA08L9ZFr7d/4vE8FuWsPtl2K47C k3iDHOu7eIMS7Di+T7Cwme16XbVWeruoNmw5Fi+73nadx4vyi/9K82eaowg0v/FJhFuCFS2sf+26 jEvNfAQ+S/Nbmt/TvI5Nexl/v+gfifvBnscb7MXxdxb/ArxMcxDHYsHC84JdRJAX0VuO9dcI9n1c 086aFR861W9wGRu2jefKvwDHNixsNNhZ9JU36ps41b6JBdk/Eg9+6DSPa9hiGhv3bZrDauuWWEUL nx5ruYadxzXseVy/lg+d6uPwraHYRjE5ynFs1IOY8oHTSKiwkXDL718nzcdf60xiu967cWlVdKNq ut60jsOwsWCHblSaVs8vH9uw9d+1VbitWGFr0S57G3XwfuLHwmt78QLbj7dpVty//ykRCha2H+yD /hVgAMKZSX0/J0HJAAAAAElFTkSuQmCC"
        transform={`translate(${String(trasladoSombraConectividad)} 37.673) scale(.9918)`}
      />
      <path
        fill="#FFF"
        d="M256.1 151.5H47.3c-3.4 0-6.1-2.8-6.1-6.1V49.7c0-3.4 2.8-6.1 6.1-6.1H256c3.4 0 6.1 2.8 6.1 6.1v95.6c.1 3.4-2.7 6.2-6 6.2z"
        transform={`translate(${String(trasladoCuadroConectividad)} 1) scale(.9918)`}
      />
      <circle
        fill="#B4002B"
        cx={trasladoCirculosLeyenda}
        cy={178.8}
        r={8}
      />
      <circle
        fill="#00CD98"
        cx={trasladoCirculosLeyenda}
        cy={101.2}
        r={8}
      />
      <circle
        fill="#3574E0"
        cx={trasladoCirculosLeyenda}
        cy={120.6}
        r={8}
      />
      <circle
        fill="#FBCE19"
        cx={trasladoCirculosLeyenda}
        cy={140}
        r={8}
      />
      <circle
        fill="#FF6B00"
        cx={trasladoCirculosLeyenda}
        cy={159.5}
        r={8}
      />
      <g>
        <text
          transform={`translate(${String(trasladoElementosLeyenda)} 105.95)`}
          className="st10">
          {"Funcionando"}
        </text>
        <text
          transform={`translate(${String(trasladoElementosLeyenda)} 125.95)`}
          className="st10">
          {"Movi\xE9ndose"}
        </text>
        <text
          transform={`translate(${String(trasladoElementosLeyenda)} 145.95)`}
          className="st10">
          {"Falla"}
        </text>
        <text
          transform={`translate(${String(trasladoElementosLeyenda)} 165.95)`}
          className="st10">
          {"Bloqueada"}
        </text>
        <text
          transform={`translate(${String(trasladoElementosLeyenda)} 185.95)`}
          className="st10">
          {"Detenida"}
        </text>
      </g>
      <text
        transform={`translate(${String(trasladoTituloConectividad)} 77.766)`}
        className="st66 st63 st67">
        {"Conectividad de Planta"}
      </text>
      <text
        transform={`translate(${String(trasladoTextoConectividad)} 128.246)`}
        className="st66 st63 st67">
        {getConexion(Number(data.con))}
      </text>
      <image
        overflow="visible"
        opacity={0.15}
        width={37}
        height={38}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAnCAYAAABjYToLAAAACXBIWXMAAArrAAAK6wGCiw1aAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7tJREFUeNrsWAtP2zAYTGI3pZRX YcDGJu3//6+NwhilhSYlSRPPQefq9Ml5FaFJ0yqd3Obhnu972kHw//OPfMIPnsf8DWJhw+gjZoaS DN9JiBF5SEkEnvHdxCShmoiiURE5R6S0qGg0GAP67f3oAaQkoREhxqjwTAVsLQqLHN8djEfVwYo5 MiERqolMgCnGGAih0BaEXoENxowIlrQIM0QxRyoShGoyxxanQP39UBArQCaxWAMvQEbY+kyre5qv fm5scQQiM4sLi08W57g2xTPOlDmI1URWFkuLBeCIJlAxl0Ghe6jFpGoyVxafLa7x/aKBmFNsTaQe LO7pt/IESysxdvQYZpqB0Dfgq8UlFDuCiUd4xzl+barU4tniyeIMC3i0OBCB4vytvmZ0T7VOYLYb i+/AF6h1AlJjikpDfpaDEKt6hEWUuF8ATjEvMVZrBLVOoc4NKXaF687ptUiyFZl0AoViPDPGMy44 NhQIb6p1KRZjlTMQu4Y5L3HNKaBpQTLza5HjSsxdwMRLjAmRa1TMqXUA2R2xSzLfFPc15TlfreR7 BoQMonEJf1uA3Ab3K91iRuVJEecgxeZTPcqYIvNOoVqKOc+QBzl4Wk3pHN8l0xOKvljUxj41loOJ k/SxcIk3k0ctSdWVnzEUOiQHVuQzwYCypvDnMeaaiMDY+WrUkccUOe+IVqTe0cMpQZBdYhdA0YDV Rj2fH9qthL5ms+uPDPVQ1T6daMucxtNdmC5ihsqEy945ZedqT0KVaIly6tW4mewkViDpbaifKihD m4Eq8ZyvSBkp5s553rY+3a0qpV5q7SG3D6kU8z0Da5DbEdMNk5RUYFMqHUskxYmojVFDR2xEQc9A YoVuY4HxhRb8VshVRxFXVJp8OSdqIVMJn3JNY12CflvMLX5Y3Fr8AtmdaqrHjohzWSzyWdiwVSuF kztStUJ3IHILYnPqarM+ivl2RzKfVWJHtCUyzsETuMIjuldH5qdHrcL5rRqQAHnvGFFDyOYqxM4o gVJPMN8dSN2D0AP8NsF7VZPzN+WxV6x6TP5VUYQdi0bQeIJnATJzqPcoWx2Oct1xGFIJYrwDWkOJ mdi+KUo3GZnSqfYA060EsZKzv+6RqQPaXvEmwzmzbIdYsYzy4IqQiMRaypKke5aRrYi4jLZlU9qM jChw2A02RCbF+0VbFRnaT0WiDRoToZEnhXBAZFQby7YCvs9pj++UR3ui1Ve0S4IRKu11qNKVRvjQ JWxIulUDGfNRB3c+wk1NQTDk4O6PAAMARPfYDfGZmygAAAAASUVORK5CYII="
        transform={`translate(${String(trasladoFondoCircConectividad)} 100.746) scale(1.0206)`}
      />
      <circle
        fill="#FFF"
        cx={trasladoCirculoConectividad}
        cy={122.2}
        r={12.1}
      />
      <circle
        fill={getColorConexion(Number(data.con))}
        cx={trasladoCirculoConectividad}
        cy={122.1}
        r={8.9}
      />{" "}
      {/* COnectividad planta */}
      <text
        transform={`translate(${trasladoTituloLeyenda} 77.766)`}
        className="st66 st63 st67">
        {"Funcionamiento de dispositivos"}
      </text>
      <path
        opacity={0.5}
        fill="none"
        stroke="#B3B3B3"
        strokeWidth={0.5}
        strokeMiterlimit={10}
        d="M59.8 96.2L245.6 96.2"
        transform={`translate(${String(trasladoLineaConectividad)} 1)`}
      />
      <path
        fill="#3574E0"
        d="M545.4 434.5H667.4V532.2H545.4z"
      />
      <path
        fill="none"
        stroke="#323E48"
        strokeWidth={4}
        strokeMiterlimit={10}
        d="M667.2 417.5v111.2c0 1.7-.9 3.1-1.9 3.1H547.5c-1.1 0-1.9-1.4-1.9-3.1V417.5"
      />
      <g>
        <text
          transform="translate(525.465 550.03)"
          className="st66 st63 st64">
          {"Estanque Acumulaci\xF3n - TK-002"}
        </text>
      </g>
      <path
        fill="#3574E0"
        d="M246.8 434.5H368.8V532.2H246.8z"
      />
      <path
        fill="none"
        stroke="#323E48"
        strokeWidth={4}
        strokeMiterlimit={10}
        d="M366.7 417.5v111.2c0 1.7-.9 3.1-1.9 3.1H247c-1.1 0-1.9-1.4-1.9-3.1V417.5"
      />
      <g>
        <text
          transform="translate(259.899 550.03)"
          className="st66 st63 st64">
          {"Estanque - TK-001"}
        </text>
      </g>
      <g>
        <text
          transform="translate(823.387 619.45)"
          className="st66 st63 st64">
          {"UV-001"}
        </text>
      </g>
      <g>
        <text
          transform="translate(198.879 532.688)"
          className="st66 st63 st64">
          {"PT-201"}
        </text>
      </g>
      <g>
        <text
          transform="translate(428.486 711.243)"
          className="st66 st63 st64">
          {"Bomba Recirculaci\xF3n"}
        </text>
      </g>
      <path
        fill="#F2F2F2"
        d="M158.4 380.6H70.7c-3.8 0-7-3.2-7-7v-30.9c0-3.9 3.1-7 7-7h87.7c3.9 0 7 3.1 7 7v30.9c0 3.8-3.2 7-7 7z"
      />
      <g>
        <text transform="translate(101.294 355.363)">
          <tspan
            x={0}
            y={0}
            className="st66 st63 st64">
            {"Agua"}
          </tspan>
          <tspan
            x={-20.2}
            y={14.4}
            className="st66 st63 st64">
            {"Alimentaci\xF3n"}
          </tspan>
        </text>
      </g>
      <path
        fill="#F2F2F2"
        d="M1000.3 685.2h-87.7c-3.8 0-7-3.2-7-7v-30.9c0-3.9 3.2-7 7-7h87.7c3.9 0 7 3.1 7 7v30.9c0 3.9-3.1 7-7 7z"
      />
      <g>
        <text transform="translate(943.228 660.017)">
          <tspan
            x={0}
            y={0}
            className="st66 st63 st64">
            {"Agua"}
          </tspan>
          <tspan
            x={-9.9}
            y={14.4}
            className="st66 st63 st64">
            {"Producto"}
          </tspan>
        </text>
      </g>
      {/* Bomba recirculacion */}
      <g
        className="pointer"
        onClick={() => {
          select(1);
        }}>
        <path
          fill={getColordispositivo(1)} /* "#761234"  */
          d="M500.8 659.1h-17.4c-1.1-.3-2.3-.4-3.4-.4-8.1 0-14.6 6.6-14.6 14.6 0 4.1 1.7 7.7 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6H494c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.7c0-1.5-1.2-2.6-2.7-2.6z"
        />
        <image
          overflow="visible"
          opacity={0.15}
          width={71}
          height={72}
          xlinkHref="data:image/png;base64,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"
          transform="matrix(.48 0 0 .48 462.569 656.52)"
        />
        <circle
          fill="#FFF"
          cx={479.7}
          cy={673.7}
          r={10.9}
        />
        <circle
          fill={recirculacionColour} /* "#00E098" */
          cx={479.7}
          cy={673.6}
          r={8}
        />
      </g>
      {/* UV-001*/}
      <g
        className="pointer"
        onClick={() => {
          select(2);
        }}>
        <path
          fill={getColordispositivo(2)}
          d="M855.9 524c0-1.5-1.2-2.8-2.8-2.8h-21.4c-1.5 0-2.8 1.2-2.8 2.8h-2c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h2v50.5l6.2 15v6.1h-5.4c-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6h24.6c.9 0 1.6-.7 1.6-1.6 0-.9-.7-1.6-1.6-1.6h-4.6v-6.1l6.2-15V527h1.2c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-1.2z"
        />
        <ellipse
          fill={getColordispositivo(2)}
          cx={854.5}
          cy={564.3}
          rx={14.9}
          ry={15.4}
        />
        <image
          overflow="visible"
          opacity={0.15}
          width={71}
          height={72}
          xlinkHref="data:image/png;base64,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"
          transform="matrix(.48 0 0 .48 837.586 546.97)"
        />
        <circle
          fill="#FFF"
          cx={854.5}
          cy={564.3}
          r={10.9}
        />
        <circle
          fill={uVColour} /* "#00E098" */
          cx={854.5}
          cy={564.2}
          r={8}
        />
      </g>
      {/* PT-201 PRESOSTATO */}
      <g
        className="pointer"
        onClick={() => {
          select(3);
        }}>
        <ellipse
          fill={getColordispositivo(3)}
          cx={216.5}
          cy={502}
          rx={14.9}
          ry={15.4}
        />
        <image
          overflow="visible"
          opacity={0.15}
          width={71}
          height={72}
          xlinkHref="data:image/png;base64,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"
          transform="matrix(.48 0 0 .48 199.529 484.68)"
        />
        <circle
          fill="#FFF"
          cx={216.5}
          cy={502}
          r={10.9}
        />
        <circle
          fill={presostatoColour}
          cx={216.5}
          cy={501.9}
          r={8}
        />
      </g>
      {/* TK-002 */}
      <g
        className={getTemaAlarma(0)}
        onClick={() => {
          notificacion(0);
        }}>
        <path d="M559.1 357.9c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .5-1.9 1.2-2.5 2.3z" />
        <path d="M557.4 356.9c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.6-3.7 3.1zM568.7 355.6c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M569.3 353.7c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.4 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.5-3.7-3.1zM570.2 362.9v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.4.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.7-.9-1.3-.9-2.1zM565.2 370.3c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>
    </svg>
  );
}

export default Scada2;

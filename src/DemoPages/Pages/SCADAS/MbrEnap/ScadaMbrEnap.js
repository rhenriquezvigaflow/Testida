import React from "react";
import {
  getColor,
  getColorConexion,
  getConexion,
  getScaledValue,
  getTarjetaClass,
  getTemaAlarma
} from "../../../../commons/scada/scada";

export function ScadaMbrEnap({
  datosScada,
  datosAlarmas,
  loading,
  selected,
  loadGrafico,
  onClickAlarma
}) {
  const {
    d0, // scale
    d1, // scale
    d2, // scale
    d3, // scale
    d4, // scale
    d5, // scale
    d6, // scale
    d7, // scale
    d8, // scale
    d9, // getColor
    d10, // getColor
    d11, // getColor
    d12, // getColor
    d13, // getColor
    d14, // getColor
    d15, // getColor
    d16, // getColor (P-004 y P-005),
    d18 // getColor (P-006 y P-007)
  } = datosScada;

  const estadoConexion = getConexion(datosScada.con);
  const colorConexion = getColorConexion(datosScada.con);
  const nivelEstanqueBiologico = getScaledValue(d0, 2);
  const phEstanqueBiologico = getScaledValue(d1, 2);
  const sensorOxigenoEstanqueBiologico = getScaledValue(d2, 2);
  const caudalAlimentacionBiologico = getScaledValue(d3, 2);
  const nivelEstanqueMBR = getScaledValue(d4, 2);
  const presionPermeadoMBR = getScaledValue(d5, 2);
  const presionEstanqueMBR = getScaledValue(d6, 2);
  const caudalPermeadoMBR = getScaledValue(d7, 2);
  const TMP = getScaledValue(d8, 2);
  const estadoBW001yBW002 = getColor(d9);
  const estadoBW003yBW004 = getColor(d10);
  const estadoBW005yBW006 = getColor(d11);
  const estadoVX001 = getColor(d12);
  const estadoVX002 = getColor(d13);
  const estadoVX003 = getColor(d14);
  const estadoVX004 = getColor(d15);
  const estadoBombasPermeado = getColor(d16);
  const estadoBombaMBBR = getColor(d18);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      id="Capa_1"
      x={0}
      y={0}
      style={{
        enableBackground: "new 0 0 1429.5 1845.1"
      }}
      viewBox="0 0 1429.5 1845.1">
      <style>
        {
          '.st0{fill:none;stroke:#00aeed;stroke-width:4;stroke-miterlimit:10}.st1{fill:#00aeed}.st2{fill:#fff}.st3{fill:none;stroke:#859fed;stroke-width:2;stroke-miterlimit:10}.st5{fill:#00cd98}.st6{fill:#3574e0}.st7{fill:#fbc43b}.st9{fill:#666}.st10{font-family:"ArialMT"}.st11{font-size:14px}.st12{fill:#606060}.st13{font-family:"Arial-BoldMT"}.st14{font-size:17px}.st16{fill:none;stroke:#323e48;stroke-width:4;stroke-miterlimit:10}.st17{opacity:.82}.st19{fill:#859fed}.st20{fill:#323e48}.st21,.st22{fill:none;stroke-miterlimit:10}.st21{stroke:#323e48;stroke-width:2}.st22{stroke:#6190ad}.st23{font-size:11px}.st24{fill:#2f3e49}.st25{opacity:.15;fill:#0e76e7;enable-background:new}.st26{font-size:10px}.st27{fill:none;stroke:#35ace8;stroke-width:4;stroke-miterlimit:10}.st28{fill:#02cd98}.st29{fill:none;stroke:#fff;stroke-width:2;stroke-miterlimit:10}.st31{enable-background:new}.st33{font-size:9px}.st34{fill:#0e76e7}.st35{font-size:16px}.st36{font-size:13px}.st37{fill:#fff;stroke:#35ace8;stroke-width:4;stroke-miterlimit:10}.tarjeta{fill:#ffffff}.tarjetaSeleccionada{fill:#3574e0;opacity:.15;}.campana{fill:#3474E0;}.campana:hover{fill:#7c7c7c;}.campanaVacia{fill:#c2c2c1;}.campanaVacia:hover{fill:#7c7c7c;}.campanaDesconectada{fill:#c2c2c1;}'
        }
      </style>
      <path
        d="M1212.5 815.9h22c5.3 0 9.6 4.3 9.6 9.6V1096c0 5.1-4.1 9.2-9.2 9.2H67.2c-3.9 0-7.1 3.2-7.1 7.1v295.2c0 4.9 4 8.9 8.9 8.9h203.8"
        className="st0"
      />
      <path
        d="M268.7 1422.7c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        className="st1"
      />
      <path
        d="M268.7 1411c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st2"
      />
      <path
        d="M242.2 1304h-16.3c-2.8 0-5-2.3-5-5.1v-90c0-3.5 2.8-6.3 6.3-6.3h15"
        className="st3"
      />
      <image
        xlinkHref="data:image/png;base64,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 TkSuQmCC"
        width={289}
        height={179}
        style={{
          overflow: "visible",
          opacity: 0.2,
          enableBackground: "new"
        }}
        transform="translate(1102.81 57.758) scale(.9831)"
      />
      <path
        d="M1376.2 227.4H1113c-3.4 0-6.1-2.7-6.1-6.1V69.7c0-3.4 2.7-6.1 6.1-6.1h263.2c3.4 0 6.1 2.7 6.1 6.1v151.5c0 3.4-2.7 6.2-6.1 6.2z"
        className="st2"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAAB/CAYAAADRs0+fAAAACXBIWXMAAAuIAAALiAHljilJAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABOdJREFUeNrs2wlPG1cUgNEZe8xi QkLSdG/V//+/oqppEiAQNhvsvmnvix6DA+MlNFHOka5AEAYJ6fN9YztVBQAAAABfuHqD16n9OWFl 85hHC7iMVsCwuYB7x1yvEW53Bhve6vCthFtG286sb8zLxjYoYm1nGJM/t4lhtc2bw70pZrYg6JUC LrdsG2qTZpRmq/jYxPccqaH/5q2KcK9jJmmu0kw7Mc+6F2mWCHhQxLqdZjfNOGY3vtYUW1rA0G/7 ziLWNtzLNOdpztJcRMiTCLvqRtwn4EER706avTT7aZ6meRbzJCIeFUdq98Pw8AbO2zfH24Z7muYw zUl8fhbfm3fviR8KOG/eJjZsG+rzNC/TfB8fn0fMe7Gdy4CBhzdwPja3G/dDmuM0r9O8SfM2Opwv uifuE3Adm7XdsAdpfkzzS5pf4/PvIuBxEbAjNCy3gadFwEfFqXZY3X5y69YWbnrEO4ww92Lb/pTm jzS/p/k5vrYfx+umCBjoF3J+Ausqjssv4sQ7ingnnXvhvIHnfTZwDjgfn3+IDfxbbOCDeKTYcv8L Kx2h58UWzrej+dh8GVu5vRc+j5Cv8/eX2cDtEflZHJlfxryI7bvoZSSg3zG6PErnV3PyRn5f/feE 1mF8fhZLcnbfEbp8i2T5JNY4NvF+zF4cnUeVl49gnZDLN0XVsYkPqttPEm93T7l9NnDewqO4wE5M fhNHvuBAvLCSuvNxFo2NI9xxsSibsrNBjwsvehdWsyBc8cL6IQ+KhZnfNLVdLMuyyV6v137qPy4M uhcDNhLxpxbmnfdYDJa8qGDhcUO+t7m+G7h70UrE8Cj3xPdG7C2P8BUTMAgYEDAgYBAwIGBAwICA QcCAgAEBg4ABAQMCBgQMAgYEDAgYEDAIGBAwIGAQMCBgQMCAgEHAgIABAQMCBgEDAgYEDAIGBAwI GBAwCBgQMCBgEDAgYEDAgIBBwICAAQEDAgYBAwIGBAwCBgQMCBgQMAgYEDAgYEDAIGBAwICAQcCA gAEBAwIGAQMCBgQMCBgEDAgYEDAIGBAwIGBAwCBgQMCAgEHAgIABAQMCBgEDAgYEDAgYvt2A5/5k 8L+ZrxLw/J4BPk+o7cw6U60TcL7ITTFChs8Tb9vXdZppTNncR03Pi+Zw2wtNYqbxC9qv1/FgUPv7 w1rxluFeFTMpevu4OJse4c7iB9sLXKQ5T3MWH8dphnExAcP6AV9HsLmz0/h4UWziWZ8NnFd1fkS4 jAu9L2Y7/s12hOxZbVjv6DyN1k7SHMecRHtX0eL8oYDnsU3zve8kHhHaCx2meRvbdxC/cCeulQO2 iWH5eGfR03k09ibNuzRHaT5E2HkD//szD23gfO87iUeANt69CLaOR4Q26t00o/haLWBYOeC8LP9K 8yo+vouAe2/g7k11DvgofqaOr7XH6KcRcFPcBwsY1gv47zSv0/wZAZ9GwL2fxMqV5yexLooj8k0E 3V74SdwDlwEDywVcFUfoi1iWh9HYcUQ9LY/PfTdwDrjq/JJ8pN6J4/Ows32FDP3jLZflJI7M5bPQ +fg8K3+mb2T5dd5hxLoV4W4V8To+w2aO0fmlpPI14Pzk1UoBlxHnkJsi3IHNCxuPuHzX462jc7Vi bHV1+11XtWMzbPw4XYZ87/8/WCW47jG5XvN6wN374UVB3/GPAAMAMEVsg6O1COYAAAAASUVORK5C YII="
        width={240}
        height={127}
        style={{
          overflow: "visible",
          opacity: 0.2,
          enableBackground: "new"
        }}
        transform="translate(38.766 57.688) scale(.9543)"
      />
      <path
        d="M256.2 171.5H47.4c-3.4 0-6.1-2.7-6.1-6.1V69.7c0-3.4 2.7-6.1 6.1-6.1h208.7c3.4 0 6.1 2.7 6.1 6.1v95.6c.1 3.3-2.6 6.1-6 6.2.1 0 0 0 0 0z"
        className="st2"
      />
      <circle
        cx={1143}
        cy={198.8}
        r={8}
        style={{
          fill: "#e33f09"
        }}
      />
      <circle
        cx={1143}
        cy={121.2}
        r={8}
        className="st5"
      />
      <circle
        cx={1143}
        cy={140.6}
        r={8}
        className="st6"
      />
      <circle
        cx={1143}
        cy={160}
        r={8}
        className="st7"
      />
      <circle
        cx={1143}
        cy={179.5}
        r={8}
        style={{
          fill: "#ff6200"
        }}
      />
      <text
        className="st9 st10 st11"
        transform="translate(1160.93 125.91)">
        {"Funcionando"}
      </text>
      <text
        className="st9 st10 st11"
        transform="translate(1160.93 145.91)">
        {"Movi\xE9ndose"}
      </text>
      <text
        className="st9 st10 st11"
        transform="translate(1160.93 165.91)">
        {"Falla"}
      </text>
      <text
        className="st9 st10 st11"
        transform="translate(1160.93 185.91)">
        {"Bloqueada"}
      </text>
      <text
        className="st9 st10 st11"
        transform="translate(1160.93 205.91)">
        {"Detenida"}
      </text>
      <text
        className="st12 st13 st11"
        transform="translate(75.5 97.73)">
        {"Conectividad de Planta"}
      </text>
      <text
        className="st12 st13 st14"
        transform="translate(109.29 148.21)">
        {estadoConexion}
      </text>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAArCAYAAAAKasrDAAAACXBIWXMAAAv+AAAL/gFBkBnlAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA8hJREFUeNrsmOlym0AQhGFZhCXb sZ3ER873f7AcdnxJCF1IQJZUT6ozWXFITn6Jqi6QZQ0fc+0sQXA4DsfhOBz/9Aj/o71qF4P2BaHC BshqV1j7AmCGPrMYpla5C6x9AbD6HOEs1wxYQgVdV6RGyHAHOAazAIpJFt+FuHENtoFyfC4U8Dbv 9gI0BBhBCXTkNIQGgBTAHFo5LaH6ek3wBaVBtUuIQ4KzgKihjqFT6MRpRF4sATeHZlCGzyt8vwZo oCFtj7AKXEJQF0qv8N2AAFeAmjql0LPTBH8X+CUg/8hL28N7EtLaS+dOl9AVzq+dzrYAzgE4BtwD NIaMKpyyKyCHdoDw1RDXTu+dPjjdAFI8KHkoObiCMnjtiTx9gv8NPFX+6/e2Y3gtee+N0zunz06f cP0W4CP8HxeJVO8SDyFeHuJsVaUX7E3bMbTsvUtAfYRucONjgjMUNmkpOYEN6KErwC+gHKBlW4i5 OATwHN66BuQ1PHqKqraeRi2Q0icj1exz5OcE5wX1y9B26H0c3gsAXuF8Tq0lpofSgKFabSrKuQUK 5wkFk1FFF7YlvCEAjwByhmqVXDpp8BzbilQDHlHvy6gDiL05vBjYjo2Ze98rSAoiboDbBjpALuZk 85TyWLwdmg45KGttAihJ9KTFc02QUngJbI3ogQds0zR4L1DTSkwGYrpR2HNN5we3BOqzG5gejdqo 0WrfaVzbNT67bYCVR6Wa5foePnuFZ06sugAGtBqsaXRae4z2hRObPrtVkwf1UxT44Yq6/YLaRNkR cJvNOWmhIU2LsZKedIGeNcWY1AeyUtHIlb2UVpEl22xbSSQ/eKabQClahKXEjloeWD/sBKuIzIcZ 7vV7Low6VrC0mQGN9olnD+IDKykS4rka5tHp3umb0xen75gRp+zFLoC6b8VKZktqlCpFJN9SgNw5 3QLsKz6PaStQtAHqzbjeMFkVAd5ermnEks3SjAZWAZPzHaBTHhTaQuwD9DXXwOOtnIZUybcUcPcA q0P7A3oA/FxXse3YGgranaVqa7kBSIZpZEhLVkDhnRHkLbz2CKU0wRR99iSSTyFutISxkMIpSX+G iWRIC35AYZ5R1QrYhGbAv+C67ur4vUqu9hprGH+mccnnwSU8lFGbmqptJwP23rjLjzaqP+a46Rjj ErefkFIgpxVoTo1+tWXp3PndDBdHTL0xIbBYjWEFQeaetwm8Eu0NGKixKPK0HT2O8ZK5IeCy4W3X 3m9YjRpUI7VhMp48LjyeqtqmoX2GzrDh7appmGSCLmBy/BRgADHv2TcwzW3nAAAAAElFTkSuQmCC"
        width={39}
        height={42}
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        transform="translate(67.53 122.785) scale(.9203)"
      />
      <circle
        cx={85.5}
        cy={142.2}
        r={12.1}
        className="st2"
      />
      <circle
        cx={85.5}
        cy={142.1}
        r={8.9}
        fill={colorConexion}
      />
      <text
        className="st12 st13 st11"
        transform="translate(1134.97 97.73)">
        {"Funcionamiento de dispositivos"}
      </text>
      <path
        d="M59.9 116.2h185.8"
        style={{
          opacity: 0.5,
          fill: "none",
          stroke: "#b3b3b3",
          strokeWidth: 0.5,
          strokeMiterlimit: 10,
          enableBackground: "new"
        }}
      />
      <path
        d="M622.4 801.1h592v117.7h-592z"
        className="st6"
      />
      <path
        d="M1214.2 784.1v131.2c0 1.7-.9 3.1-1.9 3.1H624.5c-1.1 0-1.9-1.4-1.9-3.1V784.1"
        className="st16"
      />
      <g className="st17">
        <path
          d="M809.7 876.2c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6 0 1.4 1.2 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM809.7 883.3c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6 0 1.4 1.2 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM809.7 890.4c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6 0 1.5 1.2 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM809.7 897.6c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6 0 1.4 1.2 2.6 2.6 2.6zm0-3.6c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM809.7 904.7c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6 0 1.4 1.2 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM799.6 876.2c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6 0 1.4 1.1 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM799.6 883.3c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6 0 1.4 1.1 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM799.6 890.4c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6 0 1.5 1.1 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM799.6 897.6c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6 0 1.4 1.1 2.6 2.6 2.6zm0-3.6c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM799.6 904.7c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6 0 1.4 1.1 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z"
          className="st2"
        />
      </g>
      <g className="st17">
        <path
          d="M654.1 876.2c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6 0 1.4 1.2 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM654.1 883.3c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6 0 1.4 1.2 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM654.1 890.4c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6 0 1.5 1.2 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM654.1 897.6c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6 0 1.4 1.2 2.6 2.6 2.6zm0-3.6c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM654.1 904.7c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6 0 1.4 1.2 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM643.5 876.2c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6 0 1.4 1.1 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM643.5 883.3c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6 0 1.4 1.1 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM643.5 890.4c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6 0 1.5 1.1 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM643.5 897.6c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6 0 1.4 1.1 2.6 2.6 2.6zm0-3.6c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM643.5 904.7c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6 0 1.4 1.1 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z"
          className="st2"
        />
      </g>
      <path
        d="M627.8 912.1h581.3"
        style={{
          fill: "none",
          stroke: "#00e098",
          strokeWidth: 3,
          strokeMiterlimit: 10
        }}
      />
      <path
        d="M885.3 881.3v-37.7c0-3.3-2.6-5.9-5.9-5.9h-7.7"
        className="st3"
      />
      <path
        d="M872.8 844.4c1 0 1.9-.8 1.9-1.9v-9c0-1-.8-1.9-1.9-1.9-.5 0-1 .2-1.3.5l-4.5 4.5c-.7.7-.7 1.8-.1 2.6l.1.1 4.5 4.5c.4.5.8.6 1.3.6z"
        className="st19"
      />
      <path
        d="M872.8 832.7c.5 0 .9.4.9 1v9c0 .6-.5.9-.9.9-.2 0-.4-.1-.6-.3l-4.5-4.5c-.3-.4-.3-1 0-1.3l4.5-4.5c.2-.2.4-.3.6-.3m0-2c-.8 0-1.5.3-2 .9l-4.5 4.5c-1.1 1-1.1 2.7-.2 3.9l.1.1.1.1 4.5 4.5c.5.5 1.2.8 2 .8 1.6 0 2.9-1.3 2.9-2.9v-9c0-1.6-1.3-2.9-2.9-2.9z"
        className="st6"
      />
      <path
        d="M856.9 878.5V414.9c0-4.9-4-8.8-8.8-8.8H630.3"
        className="st3"
      />
      <path
        d="M877.4 893.3v-24.5c0-.8.6-1.4 1.4-1.4h13.1c.5 0 1 .4 1 1v25h-15.5z"
        className="st20"
      />
      <path
        d="M873.9 895.2v-4.8c0-.5.4-.9.9-.9h20.9c.5 0 .9.4.9.9v4.8c0 .5-.4.9-.9.9h-20.9c-.6-.1-.9-.4-.9-.9z"
        className="st20"
      />
      <path
        d="M876.3 892.5v-6.1c0-.4.3-.7.7-.7h16.2c.4 0 .7.3.7.7v6.1c0 .4-.3.7-.7.7H877c-.3.1-.7-.3-.7-.7zM882.3 871.9V867c0-.6.5-1.1 1.1-1.1h3.7c.6 0 1.1.5 1.1 1.1v4.8c0 .6-.5 1.1-1.1 1.1h-3.7c-.7 0-1.1-.4-1.1-1z"
        className="st20"
      />
      <circle
        cx={857.2}
        cy={883.7}
        r={4.6}
        className="st21"
      />
      <path
        d="M857.2 888.4v7.6M857.2 871.4v7.7M860.5 880.5l5.4-5.5M848.5 892.4l5.5-5.4M860.5 887l5.4 5.4M848.5 875l5.5 5.5M861.9 883.7h7.7M844.9 883.7h7.7"
        className="st21"
      />
      <path
        d="M726.3 891.3v-47.7c0-3.3-2.6-5.9-5.9-5.9h-7.7"
        className="st3"
      />
      <path
        d="M713.8 844.4c1 0 1.9-.8 1.9-1.9v-9c0-1-.8-1.9-1.9-1.9-.5 0-1 .2-1.3.5l-4.5 4.5c-.7.7-.7 1.8-.1 2.6l.1.1 4.5 4.5c.4.5.8.6 1.3.6z"
        className="st19"
      />
      <path
        d="M713.8 832.7c.5 0 .9.4.9 1v9c0 .6-.5.9-.9.9-.2 0-.4-.1-.6-.3l-4.5-4.5c-.3-.4-.3-1 0-1.3l4.5-4.5c.2-.2.4-.3.6-.3m0-2c-.8 0-1.5.3-2 .9l-4.5 4.5c-1.1 1-1.1 2.7-.2 3.9l.1.1.1.1 4.5 4.5c.5.5 1.2.8 2 .8 1.6 0 2.9-1.3 2.9-2.9v-9c0-1.6-1.3-2.9-2.9-2.9z"
        className="st6"
      />
      <path
        d="M696.9 878.5V519.7c0-4.2-3.4-7.6-7.6-7.6h-159"
        className="st3"
      />
      <path
        d="M717.8 893.3v-24.5c0-.8.6-1.4 1.4-1.4h13.1c.5 0 1 .4 1 1v25h-15.5z"
        className="st20"
      />
      <path
        d="M714.2 895.2v-4.8c0-.5.4-.9.9-.9H736c.5 0 .9.4.9.9v4.8c0 .5-.4.9-.9.9h-20.9c-.5-.1-.9-.4-.9-.9z"
        className="st20"
      />
      <path
        d="M716.7 892.5v-6.1c0-.4.3-.7.7-.7h16.2c.4 0 .7.3.7.7v6.1c0 .4-.3.7-.7.7h-16.2c-.4.1-.7-.3-.7-.7zM722.6 871.9V867c0-.6.5-1.1 1.1-1.1h3.7c.6 0 1.1.5 1.1 1.1v4.8c0 .6-.5 1.1-1.1 1.1h-3.7c-.6 0-1.1-.4-1.1-1z"
        className="st20"
      />
      <circle
        cx={696.6}
        cy={883.7}
        r={4.6}
        className="st21"
      />
      <path
        d="M696.6 888.4v7.6M696.6 871.4v7.7M699.9 880.5l5.4-5.5M687.9 892.4l5.4-5.4M699.9 887l5.4 5.4M687.9 875l5.4 5.5M701.2 883.7h7.7M684.3 883.7h7.7"
        className="st21"
      />
      <path
        d="M99.4 801.1h162v117.7h-162z"
        className="st6"
      />
      <path
        d="M261.2 784.1v131.2c0 1.7-.9 3.1-1.9 3.1H101.5c-1.1 0-1.9-1.4-1.9-3.1V784.1"
        className="st16"
      />
      <path
        d="M524.8 409.8h34c5.3 0 9.6 4.3 9.6 9.6v80"
        className="st3"
      />
      <path
        d="M561.7 500.3c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
        className="st19"
      />
      <path
        d="M573.4 500.3c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
        className="st2"
      />
      <path
        d="M625 305.7h34c5.3 0 9.6 4.3 9.6 9.6v80"
        className="st3"
      />
      <path
        d="M661.8 396.2c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
        className="st19"
      />
      <path
        d="M673.5 396.2c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
        className="st2"
      />
      <path
        d="M532.9 430.4h-18.6c-.8 0-1.5-.7-1.5-1.5v-3.3c0-.8.7-1.5 1.5-1.5h18.6c.8 0 1.5.7 1.5 1.5v3.3c0 .8-.7 1.5-1.5 1.5zM534.1 420.1h-22.3c-.8 0-1.4-.6-1.4-1.4V404c0-.8.6-1.4 1.4-1.4h22.3c.8 0 1.4.6 1.4 1.4v14.7c0 .8-.6 1.4-1.4 1.4z"
        className="st20"
      />
      <path
        d="M513.5 406.9h18.9M513.5 411.4h18.9M513.5 415.9h18.9"
        className="st22"
      />
      <path
        d="M501.5 422.6V399c0-.8.7-1.5 1.5-1.5h7.8c.8 0 1.5.7 1.5 1.5v23.5c0 .8-.7 1.5-1.5 1.5H503c-.8.1-1.5-.6-1.5-1.4zM530.8 425.9h-14.4l1.8-6.3H529z"
        className="st20"
      />
      <text
        className="st12 st10 st23"
        transform="translate(503.538 447.374)">
        {"BW-003"}
      </text>
      <path
        d="M533.6 529.5H515c-.8 0-1.5-.7-1.5-1.5v-3.3c0-.8.7-1.5 1.5-1.5h18.6c.8 0 1.5.7 1.5 1.5v3.3c0 .8-.7 1.5-1.5 1.5zM534.8 519.2h-22.3c-.8 0-1.4-.6-1.4-1.4v-14.7c0-.8.6-1.4 1.4-1.4h22.3c.8 0 1.4.6 1.4 1.4v14.7c0 .8-.6 1.4-1.4 1.4z"
        className="st20"
      />
      <path
        d="M514.2 506h18.9M514.2 510.5h18.9M514.2 515h18.9"
        className="st22"
      />
      <path
        d="M502.2 521.7v-23.6c0-.8.7-1.5 1.5-1.5h7.8c.8 0 1.5.7 1.5 1.5v23.6c0 .8-.7 1.5-1.5 1.5h-7.8c-.8 0-1.5-.7-1.5-1.5zM531.5 525h-14.4l1.8-6.3h10.8z"
        className="st20"
      />
      <text
        className="st12 st10 st23"
        transform="translate(504.222 546.48)">
        {"BW-004"}
      </text>
      <path
        d="M633.1 325.7h-18.6c-.8 0-1.5-.7-1.5-1.5v-3.3c0-.8.7-1.5 1.5-1.5h18.6c.8 0 1.5.7 1.5 1.5v3.3c0 .9-.7 1.5-1.5 1.5zM634.2 315.5h-22.3c-.8 0-1.4-.6-1.4-1.4v-14.7c0-.8.6-1.4 1.4-1.4h22.3c.8 0 1.4.6 1.4 1.4v14.7c.1.8-.6 1.4-1.4 1.4z"
        className="st20"
      />
      <path
        d="M613.6 302.2h18.9M613.6 306.7h18.9M613.6 311.2h18.9"
        className="st22"
      />
      <path
        d="M601.7 317.9v-23.5c0-.8.7-1.5 1.5-1.5h7.8c.8 0 1.5.7 1.5 1.5v23.5c0 .8-.7 1.5-1.5 1.5h-7.8c-.8 0-1.5-.6-1.5-1.5zM631 321.2h-14.4l1.8-6.3h10.8z"
        className="st20"
      />
      <text
        className="st12 st10 st23"
        transform="translate(603.704 342.74)">
        {"BW-001"}
      </text>
      <path
        d="M633.7 424.8h-18.6c-.8 0-1.5-.7-1.5-1.5V420c0-.8.7-1.5 1.5-1.5h18.6c.8 0 1.5.7 1.5 1.5v3.3c0 .9-.6 1.5-1.5 1.5zM634.9 414.6h-22.3c-.8 0-1.4-.6-1.4-1.4v-14.7c0-.8.6-1.4 1.4-1.4h22.3c.8 0 1.4.6 1.4 1.4v14.7c.1.8-.6 1.4-1.4 1.4z"
        className="st20"
      />
      <path
        d="M614.3 401.3h18.9M614.3 405.8h18.9M614.3 410.3h18.9"
        className="st22"
      />
      <path
        d="M602.4 417v-23.5c0-.8.7-1.5 1.5-1.5h7.8c.8 0 1.5.7 1.5 1.5V417c0 .8-.7 1.5-1.5 1.5h-7.8c-.8 0-1.5-.6-1.5-1.5zM631.6 420.3h-14.4l1.8-6.3h10.8z"
        className="st20"
      />
      <text
        className="st12 st10 st23"
        transform="translate(604.388 441.845)">
        {"BW-002"}
      </text>
      <path
        d="M561.2 747h74c5.3 0 9.6 4.3 9.6 9.6v30"
        className="st0"
      />
      <path
        d="M638 787.4c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
        className="st1"
      />
      <path
        d="M649.7 787.4c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
        className="st2"
      />
      <path
        d="M161.9 889V771.5"
        className="st0"
      />
      <path
        d="M239.5 761.6c0 1-.8 1.9-1.9 1.9h-9c-1 0-1.9-.8-1.9-1.9 0-.5.2-1 .5-1.3l4.5-4.5c.7-.7 1.8-.7 2.6-.1l.1.1 4.5 4.5c.5.4.6.8.6 1.3z"
        className="st1"
      />
      <path
        d="M227.8 761.6c0-.2.1-.4.3-.6l4.5-4.5c.3-.3.9-.3 1.3 0l4.5 4.5c.2.2.3.4.3.6 0 .4-.3.9-.9.9h-9c-.6 0-1-.4-1-.9m-2 0c0 1.6 1.3 2.9 2.9 2.9h9c1.6 0 2.9-1.3 2.9-2.9 0-.8-.3-1.5-.8-2l-4.5-4.5-.1-.1-.1-.1c-1.2-.9-2.9-.9-3.9.2l-4.5 4.5c-.6.5-.9 1.2-.9 2z"
        className="st2"
      />
      <path
        d="M232.6 889V764.5M162.5 764.6v-8c0-5.3 4.3-9.6 9.6-9.6h369"
        className="st0"
      />
      <path
        d="M168.8 768.6c0 1-.8 1.9-1.9 1.9h-9c-1 0-1.9-.8-1.9-1.9 0-.5.2-1 .5-1.3l4.5-4.5c.7-.7 1.8-.7 2.6-.1l.1.1 4.5 4.5c.5.4.6.8.6 1.3z"
        className="st1"
      />
      <path
        d="M157.1 768.6c0-.2.1-.4.3-.6l4.5-4.5c.3-.3.9-.3 1.3 0l4.5 4.5c.2.2.3.4.3.6 0 .4-.3.9-.9.9h-9c-.6 0-1-.4-1-.9m-2 0c0 1.6 1.3 2.9 2.9 2.9h9c1.6 0 2.9-1.3 2.9-2.9 0-.8-.3-1.5-.8-2l-4.5-4.5-.1-.1-.1-.1c-1.2-.9-2.9-.9-3.9.2l-4.5 4.5c-.6.5-.9 1.2-.9 2z"
        className="st2"
      />
      <path
        d="M573.9 756.2h-28.5c-.8 0-1.4-.6-1.4-1.4v-15.4c0-.5.4-1 1-1h28.9v17.8z"
        className="st20"
      />
      <path
        d="M569.2 757.9H562c-.4 0-.7-.3-.7-.7v-20.3c0-.4.3-.7.7-.7h7.2c.4 0 .7.3.7.7v20.3c0 .3-.3.7-.7.7zM581.9 757.9h-7.2c-.4 0-.7-.3-.7-.7v-20.3c0-.4.3-.7.7-.7h7.2c.4 0 .7.3.7.7v20.3c0 .3-.3.7-.7.7zM547.7 757.9h-7.2c-.4 0-.7-.3-.7-.7v-20.3c0-.4.3-.7.7-.7h7.2c.4 0 .7.3.7.7v20.3c0 .3-.3.7-.7.7z"
        className="st20"
      />
      <text
        className="st12 st10 st23"
        transform="translate(97.719 943.41)">
        {"ESTANQUE PRODUCTO MBBR"}
      </text>
      <text
        className="st12 st10 st23"
        transform="translate(826.21 943.41)">
        {"TK-001 ESTANQUE BIOL\xD3GICO"}
      </text>
      <text
        className="st12 st10 st23"
        transform="translate(546.842 773.757)">
        {"F-001"}
      </text>
      <path
        d="M314.6 984.6h34c5.3 0 9.6-4.3 9.6-9.6V759"
        className="st0"
      />
      <path
        d="M352.4 761.6c0 1 .8 1.9 1.9 1.9h9c1 0 1.9-.8 1.9-1.9 0-.5-.2-1-.5-1.3l-4.5-4.5c-.7-.7-1.8-.7-2.6-.1l-.1.1-4.5 4.5c-.5.4-.6.8-.6 1.3z"
        className="st1"
      />
      <path
        d="M364.1 761.6c0 .5-.4.9-1 .9h-9c-.6 0-.9-.5-.9-.9 0-.2.1-.4.3-.6l4.5-4.5c.4-.3 1-.3 1.3 0l4.5 4.5c.2.2.3.4.3.6m2 0c0-.8-.3-1.5-.9-2l-4.5-4.5c-1-1.1-2.7-1.1-3.9-.2l-.1.1-.1.1-4.5 4.5c-.5.5-.8 1.2-.8 2 0 1.6 1.3 2.9 2.9 2.9h9c1.6 0 2.9-1.3 2.9-2.9z"
        className="st2"
      />
      <path
        d="M322 980.1h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
        className="st24"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA6RJREFUeNrsmOtS2zAQhSNbjgkN SaEtLW2n7/9epTeuAXJxcGxX6pxlDoucyCnQ/sAzZwiOrXxe7a6O3Ou9HC/Hvz3MM4zZ/A+Ahv6G AJttgc0jgLGSNYAhPRkgA7FSgjSAqKGKPtexoGZLOIHxsk4ZyRKkgK2cSmgFVTGgdgs4AfMwfacd pwHkP+cE6SFunZZOBWmJ8wJbt+Wn2QLOAswDDZ32nEbQK6ddfG/w4x5m7jRVmhHsSk195wgyXA6Q sdOB0xtonyBzAiwAc+105XTpdOE0wbkprinxW/cgbcec6wPAw7xzOnL64PQesGN838c9AjgHjAc7 czp1OqHrZCZLgmtiABkuw/S9djp0+kwSwD1ck1E0fK4tEKkJrhshRTKC42KpYwC5v1kUwB6m86PT F+gTgDl6qariJSDHGEPSIFGVviK4P23KRuYeT+0hACV6Rzg/VBXco2gMEFmp9D7BSZVzZVebADl6 IcAjiKd2B1OWqGmTqbakhCLrp/4GkspeSRRtRP7x9EpxeL1FPg5VVEwAUC+FNeBmyMsLquwMkaza clBHLwPAEEAHqmJzXJMG+ir/n9LyN8ADj6ERUkBSJEUU73JlXQQzasojGnATXJvb4YfexTicmykH aVORCGCOwYY0YD+QczHrfqLW8D6NlSrA1ggalYN6zc0JLnkkw5EGcvjB4CZgPnmZs4HBuqzpZs3v tU5hzMHdve5iOCPGXOsP7Zr9QxPwc9JMy4CfM5FQ8jfkEx+AJhFPWNJSNYcK6lV1h2jKmPzAoVXk zh/GAspif00WaaG8XNMRriCfOMd48tBNjFngaSjIjYjGqGirWoguHF7uKuVuxCNe0TJXbnIzHIma nvYGYGfKHLAxsIG+KNFYAU68oTeu59CEjOu9XEwjzEKouWaBFURXekUzcEtr7zUe8qfTMfQDoFNc d5eH6V9sNUPbSl2ZS9qTyAycAugr9B3nJpj6kvIwyvJLYi+QKxl5OY6KTPuAmjlP7Qz3+0j9cvoG neD8QudfTJHIIbszQ3apRGSuYJX2yZWI9WoCRXZOe5IT3Dtt6wg2srHW9EO815ConMGK8Z4koYcr qGovoQnu5V1dpduV6bi4s3nIyS4NoV3lrBu1J5mpfbH00lL3v2037iZQ0Tm0Q9aJq1tXchFYMqu2 9b3ruxkTqOZ1TqehKFbqvYwGax7z5VEbbBKwUE2gRz7p260QaKi5t70j7D3H+8G2MUyk1Yo+fgsw AB9IteUeJvRmAAAAAElFTkSuQmCC"
        width={39}
        height={39}
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        transform="translate(283.276 976.802) scale(.8974)"
      />
      <circle
        cx={301.1}
        cy={994.6}
        r={10.9}
        className="st2"
      />
      <circle
        cx={301.1}
        cy={994.4}
        r={8}
        className="st25"
      />
      <text
        className="st12 st10 st23"
        transform="translate(286.558 1034.291)">
        {"P-008"}
      </text>
      <path
        d="M272.1 1015.1c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        className="st1"
      />
      <path
        d="M272.1 1003.4c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st2"
      />
      <path
        d="M234.6 1008.2h34.6"
        className="st0"
      />
      <path
        d="M247.3 1023.5H81.8c-2.6 0-4.6-2.1-4.6-4.6v-23.2c0-2.6 2.1-4.6 4.6-4.6h165.5c2.6 0 4.6 2.1 4.6 4.6v23.2c0 2.6-2.1 4.6-4.6 4.6z"
        className="st20"
      />
      <text
        className="st2 st10 st26"
        transform="translate(87.876 1011.255)">
        {"AGUA DE ALIMENTACI\xD3N PEAS"}
      </text>
      <path
        d="M279.1 1414h612v161.7h-612z"
        className="st6"
      />
      <path
        d="M890.9 1396.9v175.2c0 1.7-.9 3.1-1.9 3.1H281.2c-1.1 0-1.9-1.4-1.9-3.1v-175.2"
        className="st16"
      />
      <text
        className="st12 st10 st23"
        transform="translate(471.483 1600.214)">
        {"TK-002 ESTANQUE MBR"}
      </text>
      <path
        d="M312.3 1303.3v236.8c0 3.3 2.6 5.9 5.9 5.9H336"
        className="st3"
      />
      <path
        d="M334.8 1539.3c-1 0-1.9.8-1.9 1.9v9c0 1 .8 1.9 1.9 1.9.5 0 1-.2 1.3-.5l4.5-4.5c.7-.7.7-1.8.1-2.6l-.1-.1-4.5-4.5c-.4-.5-.8-.6-1.3-.6z"
        className="st19"
      />
      <path
        d="M334.8 1551c-.5 0-.9-.4-.9-1v-9c0-.6.5-.9.9-.9.2 0 .4.1.6.3l4.5 4.5c.3.4.3 1 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3m0 2c.8 0 1.5-.3 2-.9l4.5-4.5c1.1-1 1.1-2.7.2-3.9l-.1-.1-.1-.1-4.5-4.5c-.5-.5-1.2-.8-2-.8-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9z"
        className="st6"
      />
      <path
        d="M355.3 1514.7h20.9c2.1 0 3.7-1.7 3.7-3.7v-25.9"
        className="st0"
      />
      <path
        d="M373.1 1484.2c0 1 .8 1.9 1.9 1.9h9c1 0 1.9-.8 1.9-1.9 0-.5-.2-1-.5-1.3l-4.5-4.5c-.7-.7-1.8-.7-2.6-.1l-.1.1-4.5 4.5c-.5.4-.6.8-.6 1.3z"
        className="st1"
      />
      <path
        d="M384.8 1484.2c0 .5-.4.9-1 .9h-9c-.6 0-.9-.5-.9-.9 0-.2.1-.4.3-.6l4.5-4.5c.4-.3 1-.3 1.3 0l4.5 4.5c.2.2.3.4.3.6m2 0c0-.8-.3-1.5-.9-2l-4.5-4.5c-1-1.1-2.7-1.1-3.9-.2l-.1.1-.1.1-4.5 4.5c-.5.5-.8 1.2-.8 2 0 1.6 1.3 2.9 2.9 2.9h9c1.6 0 2.9-1.3 2.9-2.9z"
        className="st6"
      />
      <path
        d="M1162.5 1462.6h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
        className="st24"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7ZJREFUeNrsWGtz2jAQxLaMSYEC TdMmff7/39V30ryA8LJBPWVWM8tFgDBJ8yWe2TEYc16v7k4rNRovx8tx0JE8e4AN8fhsAX/Y/02Q yTik6rpVJG2A9JMR9IRS+pwRWX+sFCyd7VMQTBQhByPIcc6ItCOwFFQKK1zfSjQ5QDUmVQhaQEFE U5AoBQvBXDDD5wWuV7gnOPTmAHJNEHolaAu6gPt+hN8TPNwRmwrGgjvCFL+VpOpaIZma5AoQcYT6 gjeA+/wavxX4TwXVHKGR4FZwA9zi2gT3lpqkqamcI9ATvBW8B96BZA+KhggOBdeCS8EF0ETcMZ61 RtLsWRA5hs+pdCL4IPgk+Cg4BUGvYE5DvMBwDqHcBd3XpNbkc9Dn5U4Fk8DQdgTHgjPBF8FXEHQK Dkg9Qy2mQq4NgB7itBDXqqr2iB7ilIa2DzKO1GfgDKQ7UNgoVTzJNuBz1JPjKueCWZo91Gsi+AAE zzDEp8jFHhTJqVlzRS7xWxPnFCQWKJI75KGv7Hs1TaR6Bg/vIs9OQPIE37vUWrIN/TVVs44nd4dq vgaGIOyUTMwO9bg4WhhC31aOoaYf1pxmEH1YxGLybajOednGc3yKJCZCvYyqt4NAfZXo28jpGSul GagFUh3V4KMJNkjBgoJ1KdF3kdvkfAzlZBGIdT+CaWSDNghwRG9aBAqijtkwhEwRDL51EgCbg6Yy A0nAXsU6qNCzHgzfczpy7QttjFmwgQAr8nTeJi3JJnGlxpBqqNmjoultjXAa+YYlzaceMyK6qqEa v/A8MIvYmCFmglOyTCPycwtlOnfFs2RivU+c0EsvWMlYgt4yjcnLDUHyQdAI5Tw59og+3pws10a7 ZdWCpwSREcg5P/cX/bBQ64+1NrFBuSnFugJuIMCMhzmL6FW6H+bUuHW70cvKVUC1Cci5l/wt+CH4 LviJa0Pcd08yq7nuzWji1wrpyuTF0hjDyeS+4XwOFSdUfDY7oM9ZajUlgQnNyEp5x3KuyDn1foH0 iNWLMaw24IpHlG8V8sk/fKAsf0b3cZFdEtE/RG6m24zZo7F6/8YVOVcP7aNw2rTW0ARvqTCuqCNM eWj3XXZaasYlfefF0BWcDlswn6MVFcgYag3xebKtVdVxIanyiU3aVfAux3u6hOx+qXKTF+2l2rc5 eOsjIYecEdmcrFOqtt98ZZdqj2br/swhm0e69aSB3a1E5fBqw06Xfcrttyhfpxp49B7hY+2wJlt2 WTXBvXZZH3sLeFtMWyfYPwEGAAQCty9cTYZPAAAAAElFTkSuQmCC"
        width={39}
        height={39}
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        transform="translate(1123.806 1459.32) scale(.8974)"
      />
      <circle
        cx={1141.7}
        cy={1477.1}
        r={10.9}
        className="st2"
      />
      <circle
        cx={1141.7}
        cy={1476.9}
        r={8}
        className="st25"
      />
      <text
        className="st12 st10 st23"
        transform="translate(1127.088 1516.81)">
        {"P-005"}
      </text>
      <path
        d="M1162.5 1364.1h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
        className="st24"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA6ZJREFUeNrsWGlz2jAUtGzZhCMp pEmTptf//109pmlpQjiKAxhXntmX2byRsQVk+iWe2ZEx5rF6l1aKotfr9fq/l3lhu9VYAv+doCFE OwgGET4GwViRixXRUmGrPr8YQSaU0GgVSSFVELaEnUTNAV4TQhVShwxIgQT2KxIbhzWwwrgBdhI1 B5CzINRx6Dr0HXq474BkDBIVqUeHvw5LIMeztYfo02X3JFf9+QkInTq8IQzwPCOCOcjNgCnGOZ4L 0UiTtAeQq4gNHS4cLjGOQLIPLxoQrDy2AKl7hzvCBM+X8PQzknaPsHZA7tzhyuHG4T3u34JgTxGU 8E5Bauxwqzwt1zOSNrBaM3hnCEKfHD47fHC4hgdP4eGU/miNMM/h6XO818V7pq4N2QByKQyeIaQ3 IPcF95fwXhcTSagPFvDMGTCg92J8vyFIKzJtPZjAWA9eegevfcR4hecS2oTCJl7pwLMnVOWGikiq WwqmMcS6EXcwcyF4DWIXCPkA71iVUxGF2gLi3TVIzZGfU9wvpfW0CbEUh1TuCMVwgXFIVZvSKsJr b0SNW74r4K05KnsM3MPOalcVG0/+ncBLQyT5CPnUVZ4zNYtBSZ5le5KXp5QiYiuOW+afFMgAhthg RjlnWkqwhFYiaficm085bFv2wBQ/7oFkHwYzte6G6ERexwVWFZiJA4okpUrsBHiuafIJQUs3b7UZ NVMulljJq3gP4aHfK5tmsOvSQrNQ495SnlrPVunEskksaHkuBkTLiUxakUwSo228qCfMWnGjBG3Z xoOylsqCvwC46xcB3iyViM09+lDsNRLkxV46/gMwIy3HM28TUhGxIsPmtIKs2JYN8KCokQm6/YTE gfXs5tpEY0b2HmA/57U4CZBbiZL5urHyJqmuwITcAsR+Ofxw+IbxN4jmkt9JC2I+0WpVxzcqhHoX J8SWFAUm993hJ8TsHO8WbT0YecIXq7wqKA/1Di6nXBNFfUvkvuJ+jO+X3B1sQL8S3TYluVTg2Qyh GSmlnCDEG1Iu1Xt/iCSHdkkTLdsWSURkVvAEV7fk0x0R7JNaLmlyMyI4BrExfr+gjhC0aSqVF7ki hbD8KaucVBF8pDBPVLvykgvduPvEQ4Zw9mjj3vMo6w3lo272uVqVtoecLGgha6n1ZNR2tATj4lkp 6POag48+dikcW6N0fAdItQLhmKdbkefYLfYcYEaePW/jydaxzgdNDeE6FRN0iHnsI2DTIEyD9eM/ AQYApFerhLtt+hwAAAAASUVORK5CYII="
        width={39}
        height={39}
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        transform="translate(1123.806 1360.84) scale(.8974)"
      />
      <circle
        cx={1141.7}
        cy={1378.6}
        r={10.9}
        className="st2"
      />
      <circle
        cx={1141.7}
        cy={1378.4}
        r={8}
        className="st25"
      />
      <text
        className="st12 st10 st23"
        transform="translate(1127.088 1418.33)">
        {"P-004"}
      </text>
      <path
        d="M1120.5 1492.3h-14.3c-2.8 0-5-2.3-5-5v-88.4c0-3.5 2.8-6.3 6.3-6.3h13M1170.4 1368.4h14.3c2.8 0 5 2.3 5 5v88.4c0 3.5-2.8 6.3-6.3 6.3h-13"
        className="st27"
      />
      {/* Estado Bomba Permeado */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(16, "Estado Bombas Permeado", true)}>
        <circle
          cx={1142.4}
          cy={1438.6}
          r={14.6}
          className="st24"
        />
        <circle
          cx={1142.4}
          cy={1438.6}
          r={10.9}
          className="st2"
        />
        <circle
          cx={1142.4}
          cy={1438.4}
          r={8}
          className="st28"
          style={{ fill: estadoBombasPermeado }}
        />
      </g>
      <path
        d="M1189.8 1417.9h113.4c4.4 0 8 3.6 8 8V1561"
        className="st0"
      />
      <path
        d="M1368.7 1603.8h-119.1c-2.6 0-4.6-2.1-4.6-4.6V1576c0-2.6 2.1-4.6 4.6-4.6h119.1c2.6 0 4.6 2.1 4.6 4.6v23.2c.1 2.5-2 4.6-4.6 4.6z"
        className="st20"
      />
      <text
        className="st2 st10 st26"
        transform="translate(1258.678 1591.495)">
        {"PERMEADO CLIENTE"}
      </text>
      <path
        d="M1304.8 1558.7c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
        className="st1"
      />
      <path
        d="M1316.5 1558.7c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
        className="st2"
      />
      <path
        d="M1320.1 1505.2v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6h-14.8c-.9 0-1.6-.7-1.6-1.6zM1316.2 1490l-4.6 7.9c-.3.5-1 .5-1.3 0l-4.6-7.9c-.3-.5.1-1.2.7-1.2h9.2c.5 0 .9.7.6 1.2z"
        className="st20"
      />
      <path
        d="m1305.6 1505.6 4.6-7.9c.3-.5 1-.5 1.3 0l4.6 7.9c.3.5-.1 1.2-.7 1.2h-9.2c-.5 0-.9-.7-.6-1.2z"
        className="st20"
      />
      <path
        d="M1321.1 1497.8h-10"
        className="st16"
      />
      <path
        d="M1329.1 1488.8v18M1328.1 1497.8h-8"
        className="st29"
      />
      <path
        d="M871.8 1546v-320.9c0-2.1 1.7-3.7 3.7-3.7h26.9"
        style={{
          fill: "none",
          stroke: "#489d8d",
          strokeWidth: 3,
          strokeMiterlimit: 10
        }}
      />
      <path
        d="M843.9 1546v-30.4c0-.8.6-1.4 1.4-1.4h16.5c.5 0 1 .4 1 1v30.8h-18.9z"
        className="st20"
      />
      <path
        d="M839.5 1548.5v-6.3c0-.5.4-.9.9-.9h37.2c.5 0 .9.4.9.9v6.3c0 .5-.4.9-.9.9h-37.2c-.5-.1-.9-.4-.9-.9z"
        className="st20"
      />
      <path
        d="M842.6 1545.2v-7.8c0-.4.3-.7.7-.7h20.2c.4 0 .7.3.7.7v7.8c0 .4-.3.7-.7.7h-20.2c-.4 0-.7-.3-.7-.7zM849.8 1520v-6.4c0-.6.5-1.1 1.1-1.1h5c.6 0 1.1.5 1.1 1.1v6.4c0 .6-.5 1.1-1.1 1.1h-5c-.6-.1-1.1-.5-1.1-1.1zM1067.4 1238.1H919.5c-2.6 0-4.6-2.1-4.6-4.6v-23.2c0-2.6 2.1-4.6 4.6-4.6h147.9c2.6 0 4.6 2.1 4.6 4.6v23.2c.1 2.5-2 4.6-4.6 4.6z"
        className="st20"
      />
      <text
        className="st31"
        transform="translate(944.85 1219.818)">
        <tspan
          x={0}
          y={0}
          className="st2 st10 st26">
          {"RECIRCULACI\xD3N DE"}
        </tspan>
        <tspan
          x={1.4}
          y={12}
          className="st2 st10 st26">
          {"LODO A BIOL\xD3GICO"}
        </tspan>
      </text>
      <path
        d="M902.5 1228.1c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        style={{
          fill: "#489d8d"
        }}
      />
      <path
        d="M902.5 1216.4c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st2"
      />
      <path
        d="M175 1203.1h14.3c2.8 0 5 2.3 5 5v88.4c0 3.5-2.8 6.3-6.3 6.3h-13M194.4 1252.5h26"
        className="st3"
      />
      <path
        d="M172.5 1221.4h-58.6c-.8 0-1.5-.7-1.5-1.5v-3.3c0-.8.7-1.5 1.5-1.5h58.6c.8 0 1.5.7 1.5 1.5v3.3c0 .8-.7 1.5-1.5 1.5zM173.7 1211.1h-62.3c-.8 0-1.4-.6-1.4-1.4V1195c0-.8.6-1.4 1.4-1.4h62.3c.8 0 1.4.6 1.4 1.4v14.7c0 .8-.6 1.4-1.4 1.4z"
        className="st20"
      />
      <path
        d="M113.1 1197.9H172M113.1 1202.4H172M113.1 1206.9H172"
        className="st22"
      />
      <path
        d="M101.2 1213.6V1190c0-.8.7-1.5 1.5-1.5h7.8c.8 0 1.5.7 1.5 1.5v23.6c0 .8-.7 1.5-1.5 1.5h-7.8c-.9 0-1.5-.7-1.5-1.5zM170.4 1216.9H116l1.8-6.3h50.8z"
        className="st20"
      />
      <text
        className="st12 st10 st23"
        transform="translate(123.162 1238.38)">
        {"BW-005"}
      </text>
      <path
        d="M173.2 1320.5h-58.6c-.8 0-1.5-.7-1.5-1.5v-3.3c0-.8.7-1.5 1.5-1.5h58.6c.8 0 1.5.7 1.5 1.5v3.3c0 .8-.7 1.5-1.5 1.5zM174.4 1310.3h-62.3c-.8 0-1.4-.6-1.4-1.4v-14.7c0-.8.6-1.4 1.4-1.4h62.3c.8 0 1.4.6 1.4 1.4v14.7c0 .7-.6 1.4-1.4 1.4z"
        className="st20"
      />
      <path
        d="M113.8 1297h58.9M113.8 1301.5h58.9M113.8 1306h58.9"
        className="st22"
      />
      <path
        d="M101.8 1312.7v-23.6c0-.8.7-1.5 1.5-1.5h7.8c.8 0 1.5.7 1.5 1.5v23.6c0 .8-.7 1.5-1.5 1.5h-7.8c-.8 0-1.5-.7-1.5-1.5zM171.1 1316h-54.4l1.8-6.3h50.8z"
        className="st20"
      />
      <text
        className="st12 st10 st23"
        transform="translate(123.846 1337.486)">
        {"BW-006"}
      </text>
      <path
        d="M778.1 1446.5v82M711.4 1202.6h62.3c2.4 0 4.4 2 4.4 4.4v224.7M258.9 1202.6h440.8M763.9 1446.8v81.7"
        className="st3"
      />
      <path
        d="M713.7 1304h45.9c2.4 0 4.4 2 4.4 4.4v123.3M258.9 1304h438.8"
        className="st3"
      />
      <path
        d="M379.4 1476.9v-28c0-5.3-.3-9.6 8-9.6H1088"
        className="st0"
      />
      <path
        d="M769.6 1528.1c0-1-.8-1.9-1.9-1.9h-9c-1 0-1.9.8-1.9 1.9 0 .5.2 1 .5 1.3l4.5 4.5c.7.7 1.8.7 2.6.1l.1-.1 4.5-4.5c.5-.4.6-.8.6-1.3z"
        className="st19"
      />
      <path
        d="M757.9 1528.1c0-.5.4-.9 1-.9h9c.6 0 .9.5.9.9 0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-1 .3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6m-2 0c0 .8.3 1.5.9 2l4.5 4.5c1 1.1 2.7 1.1 3.9.2l.1-.1.1-.1 4.5-4.5c.5-.5.8-1.2.8-2 0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9z"
        className="st6"
      />
      <path
        d="M784.4 1528.1c0-1-.8-1.9-1.9-1.9h-9c-1 0-1.9.8-1.9 1.9 0 .5.2 1 .5 1.3l4.5 4.5c.7.7 1.8.7 2.6.1l.1-.1 4.5-4.5c.5-.4.6-.8.6-1.3z"
        className="st19"
      />
      <path
        d="M772.7 1528.1c0-.5.4-.9 1-.9h9c.6 0 .9.5.9.9 0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-1 .3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6m-2 0c0 .8.3 1.5.9 2l4.5 4.5c1 1.1 2.7 1.1 3.9.2l.1-.1.1-.1 4.5-4.5c.5-.5.8-1.2.8-2 0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9z"
        className="st6"
      />
      <text
        className="st12 st10 st33"
        transform="translate(690.681 1222.45)">
        {"VX-003"}
      </text>
      <text
        className="st12 st10 st33"
        transform="translate(690.681 1321.69)">
        {"VX-004"}
      </text>
      <path
        d="M806.4 1392.7h-69.7c-2.6 0-4.6-2.1-4.6-4.6v-23.2c0-2.6 2.1-4.6 4.6-4.6h69.7c2.6 0 4.6 2.1 4.6 4.6v23.2c0 2.5-2 4.6-4.6 4.6z"
        className="st20"
      />
      <text
        className="st31"
        transform="translate(754.734 1374.445)">
        <tspan
          x={0}
          y={0}
          className="st2 st10 st26">
          {"PURGA"}
        </tspan>
        <tspan
          x={-8.1}
          y={12}
          className="st2 st10 st26">
          {"DE LODOS"}
        </tspan>
      </text>
      <path
        d="M1088.5 1445.1c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        className="st1"
      />
      <path
        d="M1088.5 1433.4c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st2"
      />
      {/* Estado BW 001 y BW 002 */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(9, "Estado BW 001 y BW 002", true)}>
        <circle
          cx={623.1}
          cy={369.4}
          r={14.6}
          className="st24"
        />
        <circle
          cx={623.1}
          cy={369.4}
          r={10.9}
          className="st2"
        />
        <circle
          cx={623.1}
          cy={369.2}
          r={8}
          className="st28"
          style={{ fill: estadoBW001yBW002 }}
        />
      </g>

      {/* Estado BW 003 y BW 0004 */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(10, "Estado BW 003 y BW 0004", true)}>
        <circle
          cx={522.9}
          cy={473.1}
          r={14.6}
          className="st24"
        />
        <circle
          cx={522.9}
          cy={473.1}
          r={10.9}
          className="st2"
        />
        <circle
          cx={522.9}
          cy={472.9}
          r={8}
          className="st28"
          style={{ fill: estadoBW003yBW004 }}
        />
      </g>
      <path
        d="M713.1 1193.6h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM697.9 1197.5l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st20"
      />
      <path
        d="m713.5 1208.1-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st20"
      />
      <path
        d="M705.7 1192.6v10"
        className="st16"
      />
      <path
        d="M696.7 1184.6h18M705.7 1185.6v8"
        className="st29"
      />

      {/* Estado Valvula Sopladores VX-003 */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() =>
          loadGrafico(14, "Estado Valvula Sopladores VX-003", true)
        }>
        <circle
          cx={705.7}
          cy={1167.4}
          r={14.6}
          className="st24"
        />
        <circle
          cx={705.7}
          cy={1167.4}
          r={10.9}
          className="st2"
        />
        <circle
          cx={705.7}
          cy={1167.2}
          r={8}
          className="st28"
          style={{ fill: estadoVX003 }}
        />
      </g>
      <path
        d="M713.1 1294.1h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM697.9 1298l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st20"
      />
      <path
        d="m713.5 1308.6-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st20"
      />
      <path
        d="M705.7 1293.1v10"
        className="st16"
      />
      <path
        d="M696.7 1285.1h18M705.7 1286.1v8"
        className="st29"
      />
      {/* Estado Valvula Sopladores VX-004 */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() =>
          loadGrafico(15, "Estado Valvula Sopladores VX-004", true)
        }>
        <circle
          cx={705.7}
          cy={1267.9}
          r={14.6}
          className="st24"
        />
        <circle
          cx={705.7}
          cy={1267.9}
          r={10.9}
          className="st2"
        />
        <circle
          cx={705.7}
          cy={1267.7}
          r={8}
          className="st28"
          style={{ fill: estadoVX004 }}
        />
      </g>
      <text
        className="st2 st10 st23"
        transform="translate(842.287 1565.914)">
        {"P-003"}
      </text>
      <path
        d="M343.8 1518.6h29.8v28.5h-29.8z"
        className="st20"
      />
      <path
        d="M348.1 1512.7h21.2v39.3h-21.2z"
        className="st7"
      />
      <path
        d="M363.6 1514.6v35.4M360.5 1514.6v35.4M357.3 1514.6v35.4M354.2 1514.6v35.4M351 1514.6v35.4M366.8 1514.6v35.4"
        className="st22"
      />
      <text
        className="st2 st10 st23"
        transform="translate(338.506 1565.914)">
        {"MBR-01"}
      </text>
      <path
        d="M462.7 1514.7h20.9c2.1 0 3.7-1.7 3.7-3.7v-60.9"
        className="st0"
      />
      <path
        d="M480.5 1450.2c0 1 .8 1.9 1.9 1.9h9c1 0 1.9-.8 1.9-1.9 0-.5-.2-1-.5-1.3l-4.5-4.5c-.7-.7-1.8-.7-2.6-.1l-.1.1-4.5 4.5c-.5.4-.6.8-.6 1.3z"
        className="st1"
      />
      <path
        d="M492.2 1450.2c0 .5-.4.9-1 .9h-9c-.6 0-.9-.5-.9-.9 0-.2.1-.4.3-.6l4.5-4.5c.4-.3 1-.3 1.3 0l4.5 4.5c.2.2.3.4.3.6m2 0c0-.8-.3-1.5-.9-2l-4.5-4.5c-1-1.1-2.7-1.1-3.9-.2l-.1.1-.1.1-4.5 4.5c-.5.5-.8 1.2-.8 2 0 1.6 1.3 2.9 2.9 2.9h9c1.6 0 2.9-1.3 2.9-2.9z"
        className="st6"
      />
      <path
        d="M451.2 1518.6H481v28.5h-29.8z"
        className="st20"
      />
      <path
        d="M455.5 1512.7h21.2v39.3h-21.2z"
        className="st7"
      />
      <path
        d="M471 1514.6v35.4M467.9 1514.6v35.4M464.7 1514.6v35.4M461.6 1514.6v35.4M458.4 1514.6v35.4M474.2 1514.6v35.4"
        className="st22"
      />
      <text
        className="st2 st10 st23"
        transform="translate(446.544 1565.914)">
        {"MBR-02"}
      </text>
      <path
        d="M574.4 1514.7h20.9c2.1 0 3.7-1.7 3.7-3.7v-60.9"
        className="st0"
      />
      <path
        d="M592.3 1450.2c0 1 .8 1.9 1.9 1.9h9c1 0 1.9-.8 1.9-1.9 0-.5-.2-1-.5-1.3l-4.5-4.5c-.7-.7-1.8-.7-2.6-.1l-.1.1-4.5 4.5c-.5.4-.6.8-.6 1.3z"
        className="st1"
      />
      <path
        d="M604 1450.2c0 .5-.4.9-1 .9h-9c-.6 0-.9-.5-.9-.9 0-.2.1-.4.3-.6l4.5-4.5c.4-.3 1-.3 1.3 0l4.5 4.5c.2.2.3.4.3.6m2 0c0-.8-.3-1.5-.9-2l-4.5-4.5c-1-1.1-2.7-1.1-3.9-.2l-.1.1-.1.1-4.5 4.5c-.5.5-.8 1.2-.8 2 0 1.6 1.3 2.9 2.9 2.9h9c1.6 0 2.9-1.3 2.9-2.9z"
        className="st6"
      />
      <path
        d="M562.9 1518.6h29.8v28.5h-29.8z"
        className="st20"
      />
      <path
        d="M567.2 1512.7h21.2v39.3h-21.2z"
        className="st7"
      />
      <path
        d="M582.7 1514.6v35.4M579.6 1514.6v35.4M576.4 1514.6v35.4M573.3 1514.6v35.4M570.1 1514.6v35.4M585.9 1514.6v35.4"
        className="st22"
      />
      <text
        className="st2 st10 st23"
        transform="translate(558.259 1565.914)">
        {"MBR-03"}
      </text>
      <path
        d="M686.5 1514.7h20.9c2.1 0 3.7-1.7 3.7-3.7v-60.9"
        className="st0"
      />
      <path
        d="M704.3 1450.2c0 1 .8 1.9 1.9 1.9h9c1 0 1.9-.8 1.9-1.9 0-.5-.2-1-.5-1.3l-4.5-4.5c-.7-.7-1.8-.7-2.6-.1l-.1.1-4.5 4.5c-.5.4-.6.8-.6 1.3z"
        className="st1"
      />
      <path
        d="M716 1450.2c0 .5-.4.9-1 .9h-9c-.6 0-.9-.5-.9-.9 0-.2.1-.4.3-.6l4.5-4.5c.4-.3 1-.3 1.3 0l4.5 4.5c.2.2.3.4.3.6m2 0c0-.8-.3-1.5-.9-2l-4.5-4.5c-1-1.1-2.7-1.1-3.9-.2l-.1.1-.1.1-4.5 4.5c-.5.5-.8 1.2-.8 2 0 1.6 1.3 2.9 2.9 2.9h9c1.6 0 2.9-1.3 2.9-2.9z"
        className="st6"
      />
      <path
        d="M674.9 1518.6h29.8v28.5h-29.8z"
        className="st20"
      />
      <path
        d="M679.2 1512.7h21.2v39.3h-21.2z"
        className="st7"
      />
      <path
        d="M694.8 1514.6v35.4M691.6 1514.6v35.4M688.5 1514.6v35.4M685.3 1514.6v35.4M682.1 1514.6v35.4M697.9 1514.6v35.4"
        className="st22"
      />
      <text
        className="st2 st10 st23"
        transform="translate(669.657 1565.914)">
        {"MBR-04"}
      </text>

      {/* Estado Bomba Recirculacion Lodos */}
      <g
      /* style={{ cursor: "pointer" }}
        onClick={() =>
          loadGrafico(17, "Estado Bomba Recirculacion Lodos", true)
        } */
      >
        <circle
          cx={839}
          cy={1529.8}
          r={14.6}
          className="st24"
        />
        <circle
          cx={839}
          cy={1529.8}
          r={10.9}
          className="st2"
        />
        <circle
          cx={839}
          cy={1529.6}
          r={8}
          className="st28"
          style={{ fill: "#dfeafc" }}
        />
      </g>
      <text
        className="st2 st10 st23"
        transform="translate(205.959 909.1)">
        {"P-007"}
      </text>
      <text
        className="st2 st10 st23"
        transform="translate(133.702 909.1)">
        {"P-006"}
      </text>
      <path
        d="M205.7 891.4V861c0-.8.6-1.4 1.4-1.4h16.5c.5 0 1 .4 1 1v30.8h-18.9z"
        className="st20"
      />
      <path
        d="M201.3 893.9v-6.3c0-.5.4-.9.9-.9h37.2c.5 0 .9.4.9.9v6.3c0 .5-.4.9-.9.9h-37.2c-.5-.1-.9-.4-.9-.9z"
        className="st20"
      />
      <path
        d="M204.3 890.6v-7.8c0-.4.3-.7.7-.7h20.2c.4 0 .7.3.7.7v7.8c0 .4-.3.7-.7.7H205c-.4 0-.7-.3-.7-.7zM211.6 865.4V859c0-.6.5-1.1 1.1-1.1h5c.6 0 1.1.5 1.1 1.1v6.4c0 .6-.5 1.1-1.1 1.1h-5c-.7-.1-1.1-.5-1.1-1.1z"
        className="st20"
      />
      {/* Estado Bombas sumergibles MBBR */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(18, "Estado Bombas sumergibles MBBR", true)}>
        <circle
          cx={183.8}
          cy={875.2}
          r={14.6}
          className="st24"
        />
        <circle
          cx={183.8}
          cy={875.2}
          r={10.9}
          className="st2"
        />
        <circle
          cx={183.8}
          cy={875}
          r={8}
          className="st28"
          style={{ fill: estadoBombaMBBR }}
        />
      </g>
      <path
        d="M135.5 891.4V861c0-.8.6-1.4 1.4-1.4h16.5c.5 0 1 .4 1 1v30.8h-18.9z"
        className="st20"
      />
      <path
        d="M131.1 893.9v-6.3c0-.5.4-.9.9-.9h37.2c.5 0 .9.4.9.9v6.3c0 .5-.4.9-.9.9H132c-.5-.1-.9-.4-.9-.9z"
        className="st20"
      />
      <path
        d="M134.1 890.6v-7.8c0-.4.3-.7.7-.7H155c.4 0 .7.3.7.7v7.8c0 .4-.3.7-.7.7h-20.2c-.3 0-.7-.3-.7-.7zM141.4 865.4V859c0-.6.5-1.1 1.1-1.1h5c.6 0 1.1.5 1.1 1.1v6.4c0 .6-.5 1.1-1.1 1.1h-5c-.6-.1-1.1-.5-1.1-1.1z"
        className="st20"
      />
      <image
        xlinkHref="data:image/png;base64,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 OY+wvCAeAAAAAElFTkSuQmCC"
        width={177}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(878.242 645)"
      />
      {/* Sensor de Oxígeno Estanque Biológico */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() =>
          loadGrafico(2, "Sensor de Oxígeno Estanque Biológico", false)
        }>
        <path
          d="M947.5 654.5h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3V660.8c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
          className="st2"
        />
        <path
          d="M888.2 661.9h157.1v99.8H888.2z"
          className={getTarjetaClass(2, selected)}
        />
        <text
          className="st31"
          transform="translate(908.673 706.55)">
          <tspan
            x={0}
            y={0}
            className="st34 st10 st11">
            {"Sensor de Ox\xEDgeno "}
          </tspan>
          <tspan
            x={0.4}
            y={16.8}
            className="st34 st10 st11">
            {"Estanque Biol\xF3gico"}
          </tspan>
        </text>
        {/* Alarma Sensor Oxigeno Estanque Biologico */}
        <g
          className={`${getTemaAlarma(2, loading, datosAlarmas)} cursorPointer`}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(2, "Sensor Oxigeno Estanque Biologico");
          }}>
          <path d="M910.6 738.2c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
          <path d="M908.9 737.2c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM920.2 735.9c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z" />
          <path d="M920.8 734c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM921.6 743.2v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM916.6 750.6c.9 0 1.7-.8 1.7-1.7H915c.1.9.7 1.6 1.6 1.7z" />
        </g>
        <text
          className="st12 st10 st35"
          transform="translate(947.874 749.328)">
          {sensorOxigenoEstanqueBiologico}
        </text>
        <text
          className="st12 st10 st36"
          transform="translate(1008.642 748.928)">
          {"ppm"}
        </text>
        <text
          className="st12 st10 st23"
          transform="translate(954.148 681.552)">
          {"AE-001"}
        </text>
      </g>
      <image
        xlinkHref="data:image/png;base64,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 OY+wvCAeAAAAAElFTkSuQmCC"
        width={177}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(1047.242 645)"
      />
      {/* ph Estanque Biológico */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(1, "ph Estanque Biológico", false)}>
        <path
          d="M1116.5 654.5h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3V660.8c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
          className="st2"
        />
        <path
          d="M1057.2 661.9h157.1v99.8h-157.1z"
          className={getTarjetaClass(2, selected)}
        />
        <text
          className="st31"
          transform="translate(1097.509 706.55)">
          <tspan
            x={0}
            y={0}
            className="st34 st10 st11">
            {"pH Estanque "}
          </tspan>
          <tspan
            x={12.1}
            y={16.8}
            className="st34 st10 st11">
            {"Biol\xF3gico"}
          </tspan>
        </text>
        {/* Alarma ph Estanque Biológico */}
        <g
          className={`${getTemaAlarma(2, loading, datosAlarmas)} cursorPointer`}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(2, "ph Estanque Biológico");
          }}>
          <path d="M1079.6 738.2c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
          <path d="M1077.9 737.2c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM1089.2 735.9c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z" />
          <path d="M1089.8 734c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM1090.6 743.2v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1085.6 750.6c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z" />
        </g>
        <text
          className="st12 st10 st35"
          transform="translate(1116.865 749.328)">
          {phEstanqueBiologico}
        </text>
        <text
          className="st12 st10 st36"
          transform="translate(1177.633 748.928)">
          {"pH"}
        </text>
        <text
          className="st12 st10 st23"
          transform="translate(1123.139 681.552)">
          {"AE-002"}
        </text>
      </g>
      <g className="st17">
        <path
          d="M951.3 876.2c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6 0 1.4 1.1 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM951.3 883.3c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6 0 1.4 1.1 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM951.3 890.4c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6 0 1.5 1.1 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM951.3 897.6c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6 0 1.4 1.1 2.6 2.6 2.6zm0-3.6c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM951.3 904.7c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6 0 1.4 1.1 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM961.3 876.2c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6 0 1.4 1.2 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM961.3 883.3c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6 0 1.4 1.2 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM961.3 890.4c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6 0 1.5 1.2 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM961.3 897.6c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6 0 1.4 1.2 2.6 2.6 2.6zm0-3.6c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM961.3 904.7c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6 0 1.4 1.2 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z"
          className="st2"
        />
      </g>
      <g className="st17">
        <path
          d="M991.9 876.2c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6 0 1.4 1.2 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM991.9 883.3c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6 0 1.4 1.2 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM991.9 890.4c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6 0 1.5 1.2 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM991.9 897.6c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6 0 1.4 1.2 2.6 2.6 2.6zm0-3.6c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM991.9 904.7c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6 0 1.4 1.2 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM1001.9 876.2c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6 0 1.4 1.2 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM1001.9 883.3c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6 0 1.4 1.2 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM1001.9 890.4c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6 0 1.5 1.2 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM1001.9 897.6c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6 0 1.4 1.2 2.6 2.6 2.6zm0-3.6c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM1001.9 904.7c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6 0 1.4 1.2 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z"
          className="st2"
        />
      </g>
      <g className="st17">
        <path
          d="M1032.5 876.2c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6s-2.6 1.2-2.6 2.6c0 1.4 1.2 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM1032.5 883.3c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6s-2.6 1.2-2.6 2.6c0 1.4 1.2 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM1032.5 890.4c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6s-2.6 1.2-2.6 2.6c0 1.5 1.2 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM1032.5 897.6c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6s-2.6 1.2-2.6 2.6c0 1.4 1.2 2.6 2.6 2.6zm0-3.6c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM1032.5 904.7c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6s-2.6 1.2-2.6 2.6c0 1.4 1.2 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM1042.5 876.2c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6s-2.6 1.2-2.6 2.6c0 1.4 1.2 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM1042.5 883.3c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6s-2.6 1.2-2.6 2.6c0 1.4 1.2 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM1042.5 890.4c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6s-2.6 1.2-2.6 2.6c0 1.5 1.2 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM1042.5 897.6c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6s-2.6 1.2-2.6 2.6c0 1.4 1.2 2.6 2.6 2.6zm0-3.6c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM1042.5 904.7c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6s-2.6 1.2-2.6 2.6c0 1.4 1.2 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z"
          className="st2"
        />
      </g>
      <g className="st17">
        <path
          d="M1127 876.2c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6s-2.6 1.2-2.6 2.6c0 1.4 1.2 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM1127 883.3c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6s-2.6 1.2-2.6 2.6c0 1.4 1.2 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM1127 890.4c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6s-2.6 1.2-2.6 2.6c0 1.5 1.2 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM1127 897.6c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6s-2.6 1.2-2.6 2.6c0 1.4 1.2 2.6 2.6 2.6zm0-3.6c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM1127 904.7c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6s-2.6 1.2-2.6 2.6c0 1.4 1.2 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM1137.1 876.2c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6-.1 1.4 1.1 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM1137.1 883.3c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6-.1 1.4 1.1 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM1137.1 890.4c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6-.1 1.5 1.1 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM1137.1 897.6c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6-.1 1.4 1.1 2.6 2.6 2.6zm0-3.6c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM1137.1 904.7c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6-.1 1.4 1.1 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z"
          className="st2"
        />
      </g>
      <g className="st17">
        <path
          d="M1160.6 876.2c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6s-2.6 1.2-2.6 2.6c0 1.4 1.2 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM1160.6 883.3c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6s-2.6 1.2-2.6 2.6c0 1.4 1.2 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM1160.6 890.4c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6s-2.6 1.2-2.6 2.6c0 1.5 1.2 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM1160.6 897.6c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6s-2.6 1.2-2.6 2.6c0 1.4 1.2 2.6 2.6 2.6zm0-3.6c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM1160.6 904.7c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6s-2.6 1.2-2.6 2.6c0 1.4 1.2 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM1170.6 876.2c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6 0 1.4 1.2 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM1170.6 883.3c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6 0 1.4 1.2 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM1170.6 890.4c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6 0 1.5 1.2 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM1170.6 897.6c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6 0 1.4 1.2 2.6 2.6 2.6zm0-3.6c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM1170.6 904.7c1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6-1.4 0-2.6 1.2-2.6 2.6 0 1.4 1.2 2.6 2.6 2.6zm0-3.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z"
          className="st2"
        />
      </g>
      <path
        d="M1237.8 1030.1c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
        className="st1"
      />
      <path
        d="M1249.5 1030.1c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
        className="st2"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACNCAYAAAAXU/AtAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABwpJREFUeNrsm4ty2kgQRREIsGM7 r339//8lsWNs3jArVXXX3nQ0SICdddA5VV1gB8ZV4tC601IGA4DfmOKNrQP9Iv1q8YoD70ViOEfe dIrY5RHiFuF5/B3AqRKnUJ1FLjuK6zWUKuSxQGI4QV6vfSj/XavIZYu8LugoVGmPUWgiBRwTGVzY XVXb8LgTmbMSly3yDu01dY2rmliNrVTkoiUjAwLH7uuibqzWUpsgcqPEZYu8Luq0qquqrq2u7Hdt EgPkosNe5F1ZLaSWJrLTKHGZybzeeScm601Vt1I3JrJLrHGCDgxtHdijw9bErWWdV/Vc1ayqJ3Eq it/agYf2Zu+8tawfqvpoVT9/b7+/Msk9G9OBoYvILrB337lJ+2iNcSJn9Did0Fz8g8A6TRjZIvVi d1V9qupPq88m8Z39u8YIxmrQdfLgGzbvvrW8D9YUS5E3TiiKnMCaf13gd9Zta4H/quofk/iTCDwh A8ORMUIFXll0eDTfxubQXjZ3G5lOJJU4J3ApHfjWosMfJvHfQeBxyCsIDF03cVvbqM1N3on5s5Ns 7LUyx/a5DHxoA/feJP4sdSubODZwcGwHTibwxjzzzuux4tly8cxcLINjrRGiNEGvTeI7KZ9ETGVh ZsBw6iSilM67NGlvrStPg8DFoQgRY4TOgOMcWCcQZF84dRoxsp89NryzuhbHykHmim8ZOmbR0IX1 Ktx40O0qHEAXgd0Zvco7lRqHPVa8gSyVDaf9okHkWMPwGmIDnMoweFZKc8x13oMRomlTl7v7jLkv nEquYbY595P9x/wRZIXXlrrINMls+z528QGZF15J3MHgyPvLhx0XBHgLMeOsDgzwJneAAAgMgMAA CAwIDIDAAAgMgMCAwAAIDIDAAAgMCAyAwAAIDAgMgMAACAyAwIDAAAgMgMAACAwIDIDAAAgMgMCA wAAIDIDAgMAACAyAwAAIDAgMgMAACAyAwIDAAAgMgMAACAwIDIDAAAgMCAyAwAAIDIDAgMAACAyA wAAIDAgMgMAACAyAwIDAAAgMgMCAwAAIDIDAAAgMCAyAwAAIDIDAgMAACAyAwIDAHAJAYAAEBkBg QGAABAZAYAAEBgQGQGAABAZAYEBgAAQGQGBAYAAEBkBgAAQGBAZ4GyR5TMcInMKbAV5b1FZZz+nA 6Zw/AnBGx03nCJwyBfBaXdhrb3XQubJloX1YbN+wcF+FLl646/RV2ujVTirnWmoSOGUW3jaU/4Hh C3+Yv7O4xYnC9nmvkUTa2quN1FYedw3dOKnAyT6AFBb1xdZVrUL5e/fy4RU9EThWF5FTJuf18UyW xJ2d+eWOLcWxtfmnAh+MELHzrm3BRVXPUmN7ff2aUU86sQo7tIrPc1/kFI5v6nkkU4G3JutTqLm5 d1DisiH7qrwrE3ZW1WNVNyJvvejU1hhesLwqpcs6sirlcSiV21fEjLdtyHx9iRTq2tKkfbD6bs49 2795lPhpU9e0iVOBF7LwdZD3pkHg4oIFdjlLOw51Taz85zJ0az2mup9YS2dZh6zXh06cMgLfV/Wl qm/m3JM5uO7SgWOoXlsbn5moKu9zzwQupPO6uFf2pb6251ci80iORZJuqzlvYY9LyXvbLqOjCxN4 IxGi7rxfTeJ7c2/RcGw6RYiVCeynSZe3XvDOPrhJjwT2qODyvqvqVmprx2RvEg8zZ7S55DzfUyy6 bFguuAOvpFk+HOjAqS1CJOkYG+sO/kHs5JtyYx+inzaLC55ERIGnIm/9Rf4omw2PAVP50u9CHHu0 +m6PM9mw9EHgOIXRYYHvt3zP9dRwXDpNIfyDW4Uu4lllKqfLYQ82cYXEBxe4lvdD2C377PI6TGqW coq8l3qwD0rX6EMHjnE1TrzmDce1MVqVBxbfNWS4pWxcShmhFR3moJcUIVxg7Z4rybg39jqPXXMT 9V4y3rcg8Eo2c5ecgVNG4njNYd0wfRi0deA4o4vjH7+AUWbmn5co8CCMzzwDzyS/6gWepcWLiR2L tb3Os90XEfh72KhserCJS5ksHK/66ngxO5kpO+SUgQg8DNWHK3A6RtMcvJBOodOFuQk8FYGfROCv VjE+xPzbpwsah+632TeI3ypwlLdoyMfFoD+XjgdhlKanuI1I7FlXO7CPHT3/anR4bsi+Bz+wC59K 5C6zZymPWDwXE/pyI4/Og3ehNjJpmFlGVoHnsrN+HPx4lUmnF328uy91eH6WwIcWL3p2wIvMqc6n D0uT00eMhWx+54P/5r4aG/os71Gynivwi/7h3/hAFw2nOp2b+81OPh/fhYy8bNhh73t6PF8s38Hp cWIkkxm9J2Ikewi9B+LQPa6AwL9cYhXZS+9Ka7oLbY+8CPwWJxT6WDTsqDuNhgCB/0+R42z86P9p Cwj8Vo8n4gIAwIXwrwADAHiEJwvChJekAAAAAElFTkSuQmCC"
        width={176}
        height={141}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(331.242 583)"
      />
      {/* Caudal Alimentación Biológico */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(3, "Caudal Alimentación Biológico", false)}>
        <path
          d="M399.9 592.9h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3V599.2c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
          className="st2"
        />
        <path
          d="M340.6 600.3h157.1v99.8H340.6z"
          className={`${getTarjetaClass(3, selected)} st25`}
        />
        <text
          className="st31"
          transform="translate(357.132 644.973)">
          <tspan
            x={0}
            y={0}
            className="st34 st10 st11">
            {"Caudal Alimentaci\xF3n "}
          </tspan>
          <tspan
            x={35.8}
            y={16.8}
            className="st34 st10 st11">
            {"Biol\xF3gico"}
          </tspan>
        </text>
        {/* Alarma Caudal Alimentacion Biológico */}
        <g
          className={`${getTemaAlarma(3, loading, datosAlarmas)} cursorPointer`}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(3, "Caudal Alimentacion Biológico");
          }}>
          <path d="M363 676.7c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
          <path d="M361.3 675.7c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM372.6 674.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z" />
          <path d="M373.2 672.5c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM374 681.7v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM369 689.1c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z" />
        </g>
        <text
          className="st12 st10 st35"
          transform="translate(400.22 687.75)">
          {caudalAlimentacionBiologico}
        </text>
        <text
          className="st12 st10 st36"
          transform="translate(457.987 687.35)">
          {"m"}
        </text>
        <text
          className="st12 st10 st36"
          transform="matrix(.583 0 0 .583 468.816 683.022)">
          {"3"}
        </text>
        <text
          className="st12 st10 st36"
          transform="translate(473.031 687.35)">
          {"/h"}
        </text>
        <text
          className="st12 st10 st23"
          transform="translate(404.493 619.975)">
          {"FIT-001"}
        </text>
      </g>

      {/* Estado Sopladores MBR */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(11, "Estado Sopladores MBR", true)}>
        <circle
          cx={142}
          cy={1264.9}
          r={14.6}
          className="st24"
        />
        <circle
          cx={142}
          cy={1264.9}
          r={10.9}
          className="st2"
        />
        <circle
          cx={142}
          cy={1264.7}
          r={8}
          className="st28"
          style={{ fill: estadoBW005yBW006 }}
        />
      </g>
      <circle
        cx={417.6}
        cy={746.4}
        r={9.2}
        className="st37"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACNCAYAAAAXU/AtAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABw1JREFUeNrsm4lym1gQRQEhW5bt JJPM8v//lzixJWtBEgya6p5cP78HkuUsFudUdaHxgmvgcOnXkCwDeMPkv9l+YHg0P1O8vON3kRhO lbc5VuzySHHzSCEvvIbETVAHiVweIW4hW61QZoBj5PWqg/KvdYpc9sibi7QjqzLYqsi0FHBsy+DC 7traBtudyByVuOyRV8Udt3UhNbby7+c9PTJAE0lfF3VjVUltTOZa0rjpEziU18WdtHUldWk1liSm lYBjWofaBHVxV20tpVbm0zbSG/cmsMvr4t5Y3bZ13dbUvndp+/FWggSGQxLYU1XlfWxr3tbM3NPW tJHfa1ICa/KWJufUpP0g9c5knkoKp3phgCzR+3q/u25rYeJ+k1DMIgu8vE9gT98LSd4/2vrU1p+2 dYk9hcugD0ZiOGTy4L3v2pL33pwbm0MquS/sGpW4TPS+pQh8awL/1dY/tv1oAl/L1TLKmAvD4W2E Crwyga/Nu9y+V5nca/u8zZ6O1jpbiAtL2HeWuPv0/dsk/igJfCE9MOkLxy7iPIE9DH3R5j2xVxms sZKLuDCBb0xgbyM+mcC3EvdlxpM5OD6BfQpRSduwsX74waSeiGMakge1EL6Iu7HEfW/li7gJEwg4 cRKxM0Ezk3khA4JJ9v2ZQ3RIkGohVGIfo02lrrLvI7QR0wd4IbX54/JOxKtLaU9jzxn+S+EySMzY Q4yx7NB36ldF6ikcwCHo1KuUGsvnWEAmW4hUEo+CHYbvQCAwnCJxkai8z7Gi46qIvYEW2yHywmsn 8sFuFa+9Q4ATxM2O9ax4wZWRITL8RLE7fSsOvCIAfksKDgEgMAACAyAwIDAAAgMgMAACAwIDIDAA AgMgMCAwAAIDIDAgMAACAyAwAAIDAgMgMAACAyAwIDAAAgMgMAACAwIDIDAAAgMCAyAwAAIDIDAg MAACAyAwAAIDAgMgMAACAyAwIDAAAgMgMCAwAAIDIDAAAgMCAyAwAAIDIDAgMAACAyAwAAIDAgMg MAACAwIDIDAAAgMgMCAwAAIDIDAAAgMCAyAwAAIDIDAgMAACAyAwIDAAAgMgMAACAwIDIDAAAgMg MCAwAAIDIDAgMIcAEBgAgQEQGBAY4O0L3FhlsgV40wkcSo3Y8KPp9a14wQ4QF36EqKFrB3lWHLDT 2qo5ducALxT5YNfKjrRVeXdSdVD5gA94/oonbujC1pFqIuEZFbixk6E728u6bWsTqa1VMdBpRn6i 0E1HqzY0gTUct5FSmZ8dvzKx01rkrdpat7Vqa2nblfxuGQicD0TgsA4Ruem42w2pNWsCgd0xrUoC cxck8f/7KBPy+tWwNmkf25pbTeX3JiJwPgCBVdhC/r/1c+o4NIlbZmqdMQSB3bW1OablYVl1JPGz HljTt7Id7Hc2a+ubyTu2n9+awOPIyTvXlkFlHVmVsi2kUne2Wo7xTra7yElqzlziWoJy79lX8+zB nHuUNN5GUjiZwC7wUuSdiLz7WF+0dWVfG515AufS6xd23MZWF1b+32WQ1hoO4bqiCm6VmjTnLHCT EHjv2ee2vtjnuTmoAienEGELoQJfys+6vDci9aijHzyn1sGT18Wd2EV8ZZ8nIrMmsUu5kTubryn0 Vpnq94Yi8IPJ+9nSeGauVcFx6R2jqcB+q/S2YWV/6NrEdoGLM28hcmkVXN6pXcheW5O5Dha3dcea Ym4nSfu93cAEDu/2X60e7NisD20htLHe2EF1KbXZvrYTFUubc2wjQoEvRd7btj4EAm7tZ/TCr+xk zO3E3NvJmonE6wEIHE5gtuKaX9gzO0Zz+/omdUzKntVhFaSyCzyR9C0HsojLpX1wgffyvjf5ltIG 3ETWDCs7IZ4wd7a9l1vluutknekiTlsrv0Mt5K6kF3XdJ7DuOLVaXFjylrICD+U99wS+EIFngcA+ M59GFr33Ju0XqztJ4cVAWogmsebayqK2kotZj0fWt4iLSdwEfbGKWyR633NMYh2feQ88C2aW2uNe 289ldtweTeA7WWnf2dfm0oLsgknEuQvcBKPF2Hix91Fyl8QqcGFXRTi4P/enbzpG0z5YxV2LwHMT eJwQ+C6SvuGt8pzHaLF+uOtdiOzYBA7/wM5OYh2RdiiPjrNglBY+7qykxbqPCLywhck3q3tJ8FVk hDYEgcMkTj1iT1IecZXo5yG0DF29cJE9fwllI4vcG5vS6OzcW4tZMHlYZU8fYgztddXmgM8nCdy3 83xgBzyP3Op0EbK0pPWHPzrBWcqCbxksVIYo71Gynirwq//xN3yw80j/tpOkvZSFbhMZFVXZ05nx kOV9ld4OTmsn9MWecEoTew9ilz1/wwp5EfiXSaxvqRXZ8/FiapU9lGkDAr8hkVOjxaP/vRcg8K86 ln3/IoPUhTeVzAAAAGfGvwIMAG6eFL84W6X1AAAAAElFTkSuQmCC"
        width={176}
        height={141}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(905.242 1289)"
      />
      {/* Presión Permeado MBR */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(5, "Presión Permeado MBR", false)}>
        <path
          d="M974.3 1298.8h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
          className="st2"
        />
        <path
          d="M915 1306.2h157.1v99.8H915z"
          className={getTarjetaClass(5, selected)}
        />
        <text
          className="st31"
          transform="translate(972.006 1350.843)">
          <tspan
            x={0}
            y={0}
            className="st34 st10 st11">
            {"Presi\xF3n"}
          </tspan>
          <tspan
            x={-26.1}
            y={16.8}
            className="st34 st10 st11">
            {"Permeado MBR"}
          </tspan>
        </text>
        {/* Alarma Presion Permeado MBR */}
        <g
          className={`${getTemaAlarma(5, loading, datosAlarmas)} cursorPointer`}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(5, "Presion Permeado MBR");
          }}>
          <path d="M937.4 1382.5c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
          <path d="M935.7 1381.5c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM947 1380.2c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z" />
          <path d="M947.6 1378.3c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM948.4 1387.5v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM943.4 1394.9c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z" />
        </g>
        <text
          className="st12 st10 st35"
          transform="translate(974.625 1393.62)">
          {presionPermeadoMBR}
        </text>
        <text
          className="st12 st10 st36"
          transform="translate(1031.392 1393.22)">
          {"mbar"}
        </text>
        <text
          className="st12 st10 st23"
          transform="translate(980.898 1325.844)">
          {"PT-002"}
        </text>
      </g>
      <circle
        cx={993.5}
        cy={1439.3}
        r={9.2}
        className="st37"
      />
      <image
        xlinkHref="data:image/png;base64,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 kKunkwAAAABJRU5ErkJggg=="
        width={180}
        height={122}
        style={{
          overflow: "visible",
          opacity: 0.2
        }}
        transform="translate(900.738 1462.496)"
      />
      {/* Presion Estanque MBR */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(6, "Presion Estanque MBR", false)}>
        <path
          d="M965.4 1575.3h-42.1c-3.5 0-6.3-2.8-6.3-6.3v-33.2c0-.8-.3-1.6-.8-2.2l-5.3-6.5c-1.1-1.4-1-3.3.1-4.6l5.1-5.5c.6-.7.9-1.5.9-2.4v-36.9c0-3.5 2.8-6.3 6.3-6.3h142.5c3.5 0 6.3 2.8 6.3 6.3v91.3c0 3.5-2.8 6.3-6.2 6.3H965.4z"
          className="st2"
        />
        <path
          d="M923.1 1471.4h143.8v103.9H923.1z"
          className={getTarjetaClass(6, selected)}
        />
        <text
          className="st31"
          transform="translate(970.485 1519.14)">
          <tspan
            x={0}
            y={0}
            className="st34 st10 st11">
            {"Presi\xF3n "}
          </tspan>
          <tspan
            x={-23.3}
            y={16.8}
            className="st34 st10 st11">
            {"Estanque MBR"}
          </tspan>
        </text>
        {/* Alarma Presión Estanque MBR */}
        <g
          className={`${getTemaAlarma(6, loading, datosAlarmas)} cursorPointer`}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(6, "Presión Estanque MBR");
          }}>
          <path d="M937.2 1549.8c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
          <path d="M935.5 1548.8c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM946.8 1547.5c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z" />
          <path d="M947.4 1545.6c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM948.2 1554.8v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM943.2 1562.2c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z" />
        </g>
        <text
          className="st12 st10 st35"
          transform="translate(975.03 1560.918)">
          {presionEstanqueMBR}
        </text>
        <text
          className="st12 st10 st36"
          transform="translate(1028.234 1560.518)">
          {"mbar"}
        </text>
        <text
          className="st12 st10 st23"
          transform="translate(975.542 1495.143)">
          {"PT-007"}
        </text>
      </g>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAB7CAYAAADt/7tyAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABSpJREFUeNrsmotuGlcURecF2CZO 6jZS///7qrTxA2MGmNs70rnK9vE8MbFIu5Z0NMaDx5K92Ox7hywD+AXJL+Qa8P8knPqD1RkERVz4 cJnzGc/RY464cEZJu47hPeLmbgp3zJEX3pmqjYjqv+5N4GqCtIVNKZMep/PUB5hbAVTQdo4yTU8S j4rrhW2ft5CpbEoRl/oAU8VVaVtRD3H2Mgdz6NiXvNVI0iZhVzZXNisRuKT3wgniJmlbUes4uzgv Njvn0Bt5qwFpS5OzFfUmzlrmxuRdSurmCAsTBQ6StLXJ+hznKc7GRp8bpiZuStuVSXob57c4X+J8 tsfXdl5Tl8SFKTsIQdI2SftgIbkwf0KPuMGLq7sHpVSEtUn7h83vJvBaKkNJ4sIMgVNNaNN2a0n7 3XwqRWy/YAtDietrwtpEbaX9M87XOHdxPtn5pasKyAtjNSFITdha2l6LtOlcLYu1o7gV+jquF/ez Je1Xk/dO6sLCVQXEhbG6oIn7bHW0svNaH7b2ddrhaoYWZ0VPx/1iwt5Z+t5KJ0FcmNtzk7gp/IKI /Ggp3FVFw9DiTPduV3bxtdWDW5kkboG4cIK4e3Gwtt2Ee3Mt1VC9X5CP7SqovMvs9T7udfZjP/fK nlMgLJywQCvt8d68SpO2Whdd0qq4fmHlb/Om9E0X83fQCv4XMJO0S+Bvci2dtJ07Vn2J6zuv/4xC KXJz8wFOSdzcBWOZvf4oQeU804AdTMp84tBrYS5dHhXunX7wYwTFxF+SkarwARJnA+GYzRV36JUC 8DMkHn0XL2a8CgA+ojZMgt0AuFSZsyGhERd+SRAXEBcAcQEQFxAXAHEBEBcQFwBxARAXAHEBcQEQ FwBxAXEBEBcAcQFxARAXAHEBEBcQFwBxARAXEBcAcQEQFxAXAHEBEBcAcQFxARAXAHEBcQEQFwBx AXEBEBcAcQEQFxAXAHEBEBcQFwBxARAXEBcAcQEQFwBxAXEBEBcAcQFxARAXAHEBcQEQFwBxARAX EBcAcQEQFxAXAHEBEBcAcQFxARAXAHEBcQEQFwBxAXEBEBcAcQEQFy6WIMcgj0fF9T8Q+FvCT5S0 V9BzJe5JvwRgpl+jYVkgK1xQ4nb5FqaK23eBxh2pEnCuepC8SnPskPaVY9XIhfVCfvQXFcgLJ8ib XDrI8eC+lxx7JXzVkbKZSJsusLep5et2SknunP8FzJC2EVFbl3Y2tXh27EnfzsRtnLS1XfAlzlYm /ezCiYvAMCSspu3eOZVm5+RtxsQN7tVQm7DPcZ7iPMZZm6yZPWdhyYu4MFfc2tx6kGk925h3tasM YShx9dWwswu3wn6PcyPStuevRdwCcWGiuE2HuN/i/GOePdr3d5K6YUhc7bZ7s35jF75y0m5M3KUk bo64MHE3Ib2jb82vv+P8ZccHSd2DW6C9ETeYdMGJ+ySpmqRtXw2fROaSBRrMXJgdRdwnS9pvJu69 iduVuGFKx31xNeBo33u02rByHZeeC1P6rQ/HVBfubR6kKhymLs4akS8XaRtJ21QdlnaNgpoAM+vC sWcDYGOzlcVZM9Zx/QItt4v6Mr0SabtqAgJDX+J2raV0y/Ul+7Ed1pm2Q4Jp2pYmaGW1II2XFnFh jrh9N7n22es7aG/Sdkww3SUoReJSHvdVBMSFIXG9vP5jBU3XgmyOYOl84VLY919khVMlbrK3H+TS tVYYEjObILDfMWAHAc6509C18zCaqNkMgd97DYBsIE0nfcqw5G8HFyYuwH+XfwUYAIQl6kE0Szm1 AAAAAElFTkSuQmCC"
        width={173}
        height={122}
        style={{
          overflow: "visible",
          opacity: 0.2
        }}
        transform="translate(907.738 1578.496)"
      />
      {/* TMP */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(8, "TMP", false)}>
        <path
          d="M1072.1 1648.2v36.9c0 3.5-2.8 6.3-6.3 6.3H923.3c-3.5 0-6.3-2.8-6.3-6.3v-91.3c0-3.5 2.8-6.3 6.2-6.3h142.6c3.5 0 6.3 2.8 6.3 6.3V1648.2z"
          className="st2"
        />
        <path
          d="M923 1587.5h143.8v103.9H923z"
          className={getTarjetaClass(8, selected)}
        />
        <text
          className="st34 st10 st11"
          transform="translate(981.32 1641.22)">
          {"TMP"}
        </text>
        {/* Alarma TMP */}
        <g
          className={`${getTemaAlarma(8, loading, datosAlarmas)} cursorPointer`}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(8, "TMP");
          }}>
          <path d="M937.1 1665.9c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
          <path d="M935.4 1664.9c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM946.7 1663.6c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z" />
          <path d="M947.3 1661.7c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM948.1 1670.9v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM943.1 1678.3c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z" />
        </g>
        <text
          className="st12 st10 st35"
          transform="translate(974.906 1676.998)">
          {TMP}
        </text>
        <text
          className="st12 st10 st36"
          transform="translate(1028.111 1676.598)">
          {"mbar"}
        </text>
        <text
          className="st12 st10 st23"
          transform="translate(955.418 1611.222)">
          {"PT-007 -  PT-002"}
        </text>
      </g>
      <image
        xlinkHref="data:image/png;base64,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 FXPpsm6ZAAAAAElFTkSuQmCC"
        width={176}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(1193.242 1253)"
      />
      {/* Caudal Permeado MBR */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(7, "Caudal Permeado MBR", false)}>
        <path
          d="M1262 1262.6h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3H1262z"
          className="st2"
        />
        <path
          d="M1202.7 1270h157.1v99.8h-157.1z"
          className={getTarjetaClass(7, selected)}
        />
        <text
          className="st31"
          transform="translate(1261.324 1314.671)">
          <tspan
            x={0}
            y={0}
            className="st34 st10 st11">
            {"Caudal"}
          </tspan>
          <tspan
            x={-27.6}
            y={16.8}
            className="st34 st10 st11">
            {"Permeado MBR"}
          </tspan>
        </text>
        {/* Alarma Caudal Permeado MBR */}
        <g
          className={`${getTemaAlarma(7, loading, datosAlarmas)} cursorPointer`}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(7, "Caudal Permeado MBR");
          }}>
          <path d="M1225.1 1346.3c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
          <path d="M1223.4 1345.3c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM1234.7 1344c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z" />
          <path d="M1235.3 1342.1c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM1236.1 1351.3v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1231.1 1358.7c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z" />
        </g>
        <text
          className="st12 st10 st35"
          transform="translate(1262.39 1357.449)">
          {caudalPermeadoMBR}
        </text>
        <text
          className="st12 st10 st36"
          transform="translate(1320.158 1357.049)">
          {"m"}
        </text>
        <text
          className="st12 st10 st36"
          transform="matrix(.583 0 0 .583 1330.987 1352.72)">
          {"3"}
        </text>
        <text
          className="st12 st10 st36"
          transform="translate(1335.202 1357.049)">
          {"/h"}
        </text>
        <text
          className="st12 st10 st23"
          transform="translate(1266.665 1289.673)">
          {"FIT-002"}
        </text>
      </g>
      <circle
        cx={1281.7}
        cy={1418.1}
        r={9.2}
        className="st37"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALUAAAB7CAYAAAAyscFtAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB0ZJREFUeNrsnQtT4lgQRm9CQMHR dWdf///37cwqisojkE1quou2vYG8XOPsOVVdQQphyjl+9L3EdBKGIwkA5yne+wWSnt+TIDb0ELp4 D9mTlo+zR1sIDW3FLlyFyLETWUOhq0rNMXX3ecEB6oTWOpjjwd3XS+ykocxaE6nM3E6d3LQjcKrd UIn3pnI5Hlx1kjtrILRKXNWsrKkrFTyW1kiN1D6lrcg7U1s55lKd25GsRmibzFOR+TJSTcQGqBN6 U9ba1Ubc23VN7OxESk9E5ouyFmVdSX2R41xKxZ6YNoSkBi+ibTlU6JeynqRWcpzI/UEeV/RNap/Q lyLwdVm/mLoWuecivaY1SQ3nkjoXoTdG5qXUzLzjByf0oancWSShE7n/QqStBP4q9VtZv5Z1K/fP TRuSBbb4oD6tvdRrkXopAakepW5BqTInfaTWlL6QlL4Rof+U+l3EvnZJTU8NTXvqrZH6RtpbFfpg Fou52RlJmoqd1SwSJ6aXVqn/KOsvOVqpZ26hSEpDXVr7nvrJrMsSEXrrFo4TI3unnjpxOx4L009/ lZTWpLZvGSwSoeliUZN464TOReKqx36Uo7a1uy4LRds2pKanvhR5b9xC8UZakwt5bOzDF6QGL3Vh dkF0URhE6BezaFyIW7NIW9ur/bBiz8NxW28hNaeXho699cEIvZeEvjIbD74DSNu4FZPapvXULBpt 6dtCXUoDnBJbXTnll29r7XqtaNN+eLFTswi053vEzvlAamiKbttNXNWdUxSaCh1L6lh/7U9qip2Z h9DQlLrwHMyvtME/AIHhvSUf1LO05YuGSLsC0De1w5ChmZ4RGeCjW5R3SWqAT7cKBUBqAKQGQGoA pAZAakBqAKQGQGoApAZAakBqAKQGQGoApAZAakBqAKQGQGoApAZAakBqfgTwwSQtCqnhp5GbpIZP KbMfQHvqQpFIDaOX2l5hV2samk1VRmoYZbsxMSLr7E6dJKAzhRqLjdTw0RsVscnKOnh2EV5fiL3R 1AqkhrGk9ExE1mG0OoD2SkSPTYGLkvHzhRGIHZO6Gpj1EH4MN6qGHFXTvKqBR3ZeeXQKLlLDR4tt h2bNjdArqefwY9BRJXU1em4vMu/C63HPSA2j2vmYmKSuWo5bkflZUrqSeiMi50bsaFojNXyk0CHS fuzC26m3KrVP60OIzFdEahjDDkhhWpBFOI553ojQL0buremv9+E4wg6pYVRpbbf1LsNxzPPGtCFV PZmWxKb2q7RGahhbWute9RdJ5luR+VF2Qx7l65dw/LTx4J8MYCxpnRqxq1bkSuTW0lHPds/6jcMk NYxt0WjFVrkvQ7MRzyQ1jFJuX6cm4sZ+MZAaRkFhjoX0yHup3Ox06FZeEd5+klggNYwN3XfemZ0P 3c7zW3q7U4IjNYwhpTWd83Dco6627lZm1+MhHLf0NuHtJ4tIDaMSWluLnaTxSiS+K+sfqfuyliL2 2qU1UsNo2w5N6Ecj9LeyvkstRXhtQ/bmF4OeGkaT0prUW+mdV5LKldB/m7qT9Naz9nInNUkNoxHb 9tIvktJLSeZvUtp+PIbXH5EfQuQsPaSGj5Zat+02RmrbS3uh10boIvakSA1jaD/yyI7HUmTWv37R E5lObuchNYyln85NT60LRS0VehPpo0lqGO3Oh27nWbH9X734v1Es6p4UqWFMaW0/TdyckLk49cRI DWPZAdFdkNwIbs/3aCQ0UsOYEtu2IvsaoRuB1DDGdqQ4txhEavisMneSG6nhpwOpAakBkBoAqQGQ GgCpAakBkBoAqQGQGgCpAakBkBoAqQGQGgCpAakBkBoAqQGQGgCpAZAakBoAqQHGI3Wnyz0BfLak LpAe/iOKiHODST3IBfsAWgRlb7/SBkL7awMjNQwt9qDhmUXaiSLUXzP4ECkWm9BH5JhTvQTPIi/m r+q+M8ed+VofV5Hw/wQt8BdXz13VXWy96CK1FVunkNoZHHaoTCaPnRipkRua9NDq1yZSWxOesdFy RVup/QTSrYhcDTlfSc2N0DO5jdTQRmpNZ3VLS0c0r53UrcZjZJFFoZ9rZ4c1LsqayvdUL3phpEZo aCq2jphbi1934teDuPZsUvvs3MQ2Sa0TSHWs7qVJ6OrFriJSIzY0WSDGpNYZ5EtJ7bVbv3VaKBY1 Uj8YeTWhn0TqmSQ3UkNXqSuXqnHN36XuRXQ/snkQqbX9eJTFYJD7K9GvpbeekdTQUWofnPeS2Peu BRm0/aikTo2oe/N2sZB2ZGp2P1gsQpNFYiw4n8za7UG+js0iD12l1hfdGUELs1pdGaGziNQA5+S2 88h1K8/OJF+HFrPIz0kdE9veVqmnNSlNUsO5pLY7IHanbRte71PnbWU+J6CKmoq4WpmptKaXRmpo IrXfQs7Nbf+hSzGE1MEJm0aKPhqG6q9j534cIr8MvaWOyZ1E7gPouxsSO5mu81l6ScfH0m7A0O1I 6JrMfaR+j+8HxAYAgP8d/wowAI8CP/RAOw4CAAAAAElFTkSuQmCC"
        width={180}
        height={122}
        style={{
          overflow: "visible",
          opacity: 0.2
        }}
        transform="translate(430.02 804.07)"
      />
      {/* Nivel Estanque Biológico */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(0, "Nivel Estanque Biológico", false)}>
        <path
          d="M545.3 813h42.1c3.5 0 6.3 2.8 6.3 6.3v33.2c0 .8.3 1.6.8 2.2l5.3 6.5c1.1 1.4 1 3.3-.1 4.6l-5.1 5.5c-.6.7-.9 1.5-.9 2.4v36.9c0 3.5-2.8 6.3-6.3 6.3H444.9c-3.5 0-6.3-2.8-6.3-6.3v-91.3c0-3.5 2.8-6.3 6.2-6.3h100.5z"
          className="st2"
        />
        <path
          d="M444.6 813h143.8v103.9H444.6z"
          className={getTarjetaClass(0, selected)}
        />
        <text
          className="st31"
          transform="translate(500.13 856.754)">
          <tspan
            x={0}
            y={0}
            className="st34 st10 st11">
            {"Nivel "}
          </tspan>
          <tspan
            x={-44.4}
            y={16.8}
            className="st34 st10 st11">
            {"Estanque Biol\xF3gico"}
          </tspan>
        </text>
        {/* Alarma Nivel Estanque Biológico */}
        <g
          className={`${getTemaAlarma(0, loading, datosAlarmas)} cursorPointer`}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(0, "Nivel Estanque Biológico");
          }}>
          <path d="M458.7 891.4c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
          <path d="M457 890.4c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM468.3 889.1c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z" />
          <path d="M468.9 887.2c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM469.7 896.4v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM464.7 903.8c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z" />
        </g>
        <text
          className="st12 st10 st35"
          transform="translate(496.498 902.531)">
          {nivelEstanqueBiologico}
        </text>
        <text
          className="st12 st10 st36"
          transform="translate(564.703 902.131)">
          {"%"}
        </text>
        <text
          className="st12 st10 st23"
          transform="translate(497.01 836.755)">
          {"LT-001"}
        </text>
      </g>
      <text
        className="st2 st10 st23"
        transform="translate(871.004 906.607)">
        {"P-002"}
      </text>
      <text
        className="st2 st10 st23"
        transform="translate(710.747 906.607)">
        {"P-001"}
      </text>
      <path
        d="M1332.1 1011.7H1157c-2.6 0-4.6-2.1-4.6-4.6v-23.2c0-2.6 2.1-4.6 4.6-4.6h175.1c2.6 0 4.6 2.1 4.6 4.6v23.2c.1 2.5-2 4.6-4.6 4.6z"
        className="st20"
      />
      <text
        className="st2 st10 st26"
        transform="translate(1161.646 999.407)">
        {"REBALSE HACIA ESTANQUE MBR"}
      </text>
      <path
        d="M257.9 1193.6h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM242.7 1197.5l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st20"
      />
      <path
        d="m258.3 1208.1-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st20"
      />
      <path
        d="M250.5 1192.6v10"
        className="st16"
      />
      <path
        d="M241.5 1184.6h18M250.5 1185.6v8"
        className="st29"
      />
      <text
        className="st12 st10 st33"
        transform="translate(236.172 1222.45)">
        {"VX-001"}
      </text>
      <text
        className="st12 st10 st33"
        transform="translate(236.172 1321.69)">
        {"VX-002"}
      </text>

      {/* Estado Valvula Sopladores VX-001*/}
      <g
        style={{ cursor: "pointer" }}
        onClick={() =>
          loadGrafico(12, "Estado Valvula Sopladores VX-001", true)
        }>
        <circle
          cx={250.5}
          cy={1167.4}
          r={14.6}
          className="st24"
        />
        <circle
          cx={250.5}
          cy={1167.4}
          r={10.9}
          className="st2"
        />
        <circle
          cx={250.5}
          cy={1167.2}
          r={8}
          className="st28"
          style={{ fill: estadoVX001 }}
        />
      </g>
      <path
        d="M257.9 1294.1h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM242.7 1298l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st20"
      />
      <path
        d="m258.3 1308.6-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st20"
      />
      <path
        d="M250.5 1293.1v10"
        className="st16"
      />
      <path
        d="M241.5 1285.1h18M250.5 1286.1v8"
        className="st29"
      />

      {/* Estado Valvula Sopladores VX-002 */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() =>
          loadGrafico(13, "Estado Valvula Sopladores VX-002", true)
        }>
        <circle
          cx={250.5}
          cy={1267.9}
          r={14.6}
          className="st24"
        />
        <circle
          cx={250.5}
          cy={1267.9}
          r={10.9}
          className="st2"
        />
        <circle
          cx={250.5}
          cy={1267.7}
          r={8}
          className="st28"
          style={{ fill: estadoVX002 }}
        />
      </g>
      <text
        className="st12 st10 st33"
        transform="translate(1272.008 1501.053)">
        {"VX-005"}
      </text>
      <image
        xlinkHref="data:image/png;base64,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 /hVgALtKVHvCZHonAAAAAElFTkSuQmCC"
        width={180}
        height={122}
        style={{
          overflow: "visible",
          opacity: 0.2
        }}
        transform="translate(91.738 1462.496)"
      />
      {/* Nivel Estanque MBR */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(4, "Nivel Estanque MBR", false)}>
        <path
          d="M207.1 1575.3h42.1c3.5 0 6.3-2.8 6.3-6.3v-33.2c0-.8.3-1.6.8-2.2l5.3-6.5c1.1-1.4 1-3.3-.1-4.6l-5.1-5.5c-.6-.7-.9-1.5-.9-2.4v-36.9c0-3.5-2.8-6.3-6.3-6.3H106.7c-3.5 0-6.3 2.8-6.3 6.3v91.3c0 3.5 2.8 6.3 6.2 6.3h100.5z"
          className="st2"
        />
        <path
          d="M105.5 1471.4h143.8v103.9H105.5z"
          className={getTarjetaClass(4, selected)}
        />
        <text
          className="st31"
          transform="translate(163.96 1515.14)">
          <tspan
            x={0}
            y={0}
            className="st34 st10 st11">
            {"Nivel "}
          </tspan>
          <tspan
            x={-31.5}
            y={16.8}
            className="st34 st10 st11">
            {"Estanque MBR"}
          </tspan>
        </text>
        {/* Alarma Nivel Estanque MBR */}
        <g
          className={`${getTemaAlarma(4, loading, datosAlarmas)} cursorPointer`}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(4, "Nivel Estanque MBR");
          }}>
          <path d="M122.5 1549.8c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
          <path d="M120.8 1548.8c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM132.1 1547.5c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z" />
          <path d="M132.7 1545.6c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM133.5 1554.8v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM128.5 1562.2c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z" />
        </g>
        <text
          className="st12 st10 st35"
          transform="translate(160.329 1560.918)">
          {nivelEstanqueMBR}
        </text>
        <text
          className="st12 st10 st36"
          transform="translate(228.534 1560.518)">
          {"%"}
        </text>
        <text
          className="st12 st10 st23"
          transform="translate(160.841 1495.143)">
          {"LT-002"}
        </text>
      </g>
      <path
        d="M322.3 1312.4v214.2c0 1.9 1 3.3 2.3 3.3H336M322.3 1203.3v93.3"
        className="st3"
      />
      <path
        d="M334.8 1523.2c-1 0-1.9.8-1.9 1.9v9c0 1 .8 1.9 1.9 1.9.5 0 1-.2 1.3-.5l4.5-4.5c.7-.7.7-1.8.1-2.6l-.1-.1-4.5-4.5c-.4-.5-.8-.6-1.3-.6z"
        className="st19"
      />
      <path
        d="M334.8 1534.9c-.5 0-.9-.4-.9-1v-9c0-.6.5-.9.9-.9.2 0 .4.1.6.3l4.5 4.5c.3.4.3 1 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3m0 2c.8 0 1.5-.3 2-.9l4.5-4.5c1.1-1 1.1-2.7.2-3.9l-.1-.1-.1-.1-4.5-4.5c-.5-.5-1.2-.8-2-.8-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9z"
        className="st6"
      />
      <path
        d="M321.3 1296.2c4.4 0 7.9 3.5 7.9 7.9s-3.5 7.9-7.9 7.9M427.2 1446.9v79.7c0 1.9 1 3.3 2.3 3.3h11.3M427.2 1312.4v119.7M427.2 1203.3v93.3"
        className="st3"
      />
      <path
        d="M439.6 1523.2c-1 0-1.9.8-1.9 1.9v9c0 1 .8 1.9 1.9 1.9.5 0 1-.2 1.3-.5l4.5-4.5c.7-.7.7-1.8.1-2.6l-.1-.1-4.5-4.5c-.4-.5-.8-.6-1.3-.6z"
        className="st19"
      />
      <path
        d="M439.6 1534.9c-.5 0-.9-.4-.9-1v-9c0-.6.5-.9.9-.9.2 0 .4.1.6.3l4.5 4.5c.3.4.3 1 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3m0 2c.8 0 1.5-.3 2-.9l4.5-4.5c1.1-1 1.1-2.7.2-3.9l-.1-.1-.1-.1-4.5-4.5c-.5-.5-1.2-.8-2-.8-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9z"
        className="st6"
      />
      <path
        d="M426.2 1296.2c4.4 0 7.9 3.5 7.9 7.9s-3.5 7.9-7.9 7.9M426.2 1431.7c4.4 0 7.9 3.5 7.9 7.9s-3.5 7.9-7.9 7.9"
        className="st3"
      />
      <path
        d="M328.6 1252.4c0-1-.8-1.9-1.9-1.9h-9c-1 0-1.9.8-1.9 1.9 0 .5.2 1 .5 1.3l4.5 4.5c.7.7 1.8.7 2.6.1l.1-.1 4.5-4.5c.5-.4.6-.8.6-1.3z"
        className="st19"
      />
      <path
        d="M316.9 1252.4c0-.5.4-.9 1-.9h9c.6 0 .9.5.9.9 0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-1 .3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6m-2 0c0 .8.3 1.5.9 2l4.5 4.5c1 1.1 2.7 1.1 3.9.2l.1-.1.1-.1 4.5-4.5c.5-.5.8-1.2.8-2 0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9z"
        className="st2"
      />
      <path
        d="M433.2 1252.4c0-1-.8-1.9-1.9-1.9h-9c-1 0-1.9.8-1.9 1.9 0 .5.2 1 .5 1.3l4.5 4.5c.7.7 1.8.7 2.6.1l.1-.1 4.5-4.5c.5-.4.6-.8.6-1.3z"
        className="st19"
      />
      <path
        d="M421.5 1252.4c0-.5.4-.9 1-.9h9c.6 0 .9.5.9.9 0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-1 .3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6m-2 0c0 .8.3 1.5.9 2l4.5 4.5c1 1.1 2.7 1.1 3.9.2l.1-.1.1-.1 4.5-4.5c.5-.5.8-1.2.8-2 0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9z"
        className="st2"
      />
      <path
        d="M416.4 1446.9v93.3c0 3.3 2.6 5.9 5.9 5.9H440M416.4 1303.3v129"
        className="st3"
      />
      <path
        d="M438.9 1539.3c-1 0-1.9.8-1.9 1.9v9c0 1 .8 1.9 1.9 1.9.5 0 1-.2 1.3-.5l4.5-4.5c.7-.7.7-1.8.1-2.6l-.1-.1-4.5-4.5c-.4-.5-.8-.6-1.3-.6z"
        className="st19"
      />
      <path
        d="M438.9 1551c-.5 0-.9-.4-.9-1v-9c0-.6.5-.9.9-.9.2 0 .4.1.6.3l4.5 4.5c.3.4.3 1 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3m0 2c.8 0 1.5-.3 2-.9l4.5-4.5c1.1-1 1.1-2.7.2-3.9l-.1-.1-.1-.1-4.5-4.5c-.5-.5-1.2-.8-2-.8-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9z"
        className="st6"
      />
      <path
        d="M415.4 1431.7c4.4 0 7.9 3.5 7.9 7.9s-3.5 7.9-7.9 7.9M539.7 1446.9v79.7c0 1.9 1 3.3 2.3 3.3h11.3M539.7 1312.4v119.7M539.7 1203.3v93.3"
        className="st3"
      />
      <path
        d="M552.2 1523.2c-1 0-1.9.8-1.9 1.9v9c0 1 .8 1.9 1.9 1.9.5 0 1-.2 1.3-.5l4.5-4.5c.7-.7.7-1.8.1-2.6l-.1-.1-4.5-4.5c-.4-.5-.8-.6-1.3-.6z"
        className="st19"
      />
      <path
        d="M552.2 1534.9c-.5 0-.9-.4-.9-1v-9c0-.6.5-.9.9-.9.2 0 .4.1.6.3l4.5 4.5c.3.4.3 1 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3m0 2c.8 0 1.5-.3 2-.9l4.5-4.5c1.1-1 1.1-2.7.2-3.9l-.1-.1-.1-.1-4.5-4.5c-.5-.5-1.2-.8-2-.8-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9z"
        className="st6"
      />
      <path
        d="M538.7 1296.2c4.4 0 7.9 3.5 7.9 7.9s-3.5 7.9-7.9 7.9M538.7 1431.7c4.4 0 7.9 3.5 7.9 7.9s-3.5 7.9-7.9 7.9"
        className="st3"
      />
      <path
        d="M545.7 1252.4c0-1-.8-1.9-1.9-1.9h-9c-1 0-1.9.8-1.9 1.9 0 .5.2 1 .5 1.3l4.5 4.5c.7.7 1.8.7 2.6.1l.1-.1 4.5-4.5c.5-.4.6-.8.6-1.3z"
        className="st19"
      />
      <path
        d="M534 1252.4c0-.5.4-.9 1-.9h9c.6 0 .9.5.9.9 0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-1 .3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6m-2 0c0 .8.3 1.5.9 2l4.5 4.5c1 1.1 2.7 1.1 3.9.2l.1-.1.1-.1 4.5-4.5c.5-.5.8-1.2.8-2 0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9z"
        className="st2"
      />
      <path
        d="M529 1446.9v93.3c0 3.3 2.6 5.9 5.9 5.9h17.7M529 1303.3v129"
        className="st3"
      />
      <path
        d="M551.4 1539.3c-1 0-1.9.8-1.9 1.9v9c0 1 .8 1.9 1.9 1.9.5 0 1-.2 1.3-.5l4.5-4.5c.7-.7.7-1.8.1-2.6l-.1-.1-4.5-4.5c-.4-.5-.8-.6-1.3-.6z"
        className="st19"
      />
      <path
        d="M551.4 1551c-.5 0-.9-.4-.9-1v-9c0-.6.5-.9.9-.9.2 0 .4.1.6.3l4.5 4.5c.3.4.3 1 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3m0 2c.8 0 1.5-.3 2-.9l4.5-4.5c1.1-1 1.1-2.7.2-3.9l-.1-.1-.1-.1-4.5-4.5c-.5-.5-1.2-.8-2-.8-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9z"
        className="st6"
      />
      <path
        d="M528 1431.7c4.4 0 7.9 3.5 7.9 7.9s-3.5 7.9-7.9 7.9M651.3 1446.9v79.7c0 1.9 1 3.3 2.3 3.3h11.3M651.3 1312.4v119.7M651.3 1203.3v93.3"
        className="st3"
      />
      <path
        d="M663.7 1523.2c-1 0-1.9.8-1.9 1.9v9c0 1 .8 1.9 1.9 1.9.5 0 1-.2 1.3-.5l4.5-4.5c.7-.7.7-1.8.1-2.6l-.1-.1-4.5-4.5c-.4-.5-.8-.6-1.3-.6z"
        className="st19"
      />
      <path
        d="M663.7 1534.9c-.5 0-.9-.4-.9-1v-9c0-.6.5-.9.9-.9.2 0 .4.1.6.3l4.5 4.5c.3.4.3 1 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3m0 2c.8 0 1.5-.3 2-.9l4.5-4.5c1.1-1 1.1-2.7.2-3.9l-.1-.1-.1-.1-4.5-4.5c-.5-.5-1.2-.8-2-.8-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9z"
        className="st6"
      />
      <path
        d="M650.3 1296.2c4.4 0 7.9 3.5 7.9 7.9s-3.5 7.9-7.9 7.9M650.3 1431.7c4.4 0 7.9 3.5 7.9 7.9s-3.5 7.9-7.9 7.9"
        className="st3"
      />
      <path
        d="M657.3 1252.4c0-1-.8-1.9-1.9-1.9h-9c-1 0-1.9.8-1.9 1.9 0 .5.2 1 .5 1.3l4.5 4.5c.7.7 1.8.7 2.6.1l.1-.1 4.5-4.5c.5-.4.6-.8.6-1.3z"
        className="st19"
      />
      <path
        d="M645.6 1252.4c0-.5.4-.9 1-.9h9c.6 0 .9.5.9.9 0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-1 .3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6m-2 0c0 .8.3 1.5.9 2l4.5 4.5c1 1.1 2.7 1.1 3.9.2l.1-.1.1-.1 4.5-4.5c.5-.5.8-1.2.8-2 0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9z"
        className="st2"
      />
      <path
        d="M640.5 1446.9v93.3c0 3.3 2.6 5.9 5.9 5.9h17.7M640.5 1303.3v129"
        className="st3"
      />
      <path
        d="M663 1539.3c-1 0-1.9.8-1.9 1.9v9c0 1 .8 1.9 1.9 1.9.5 0 1-.2 1.3-.5l4.5-4.5c.7-.7.7-1.8.1-2.6l-.1-.1-4.5-4.5c-.4-.5-.8-.6-1.3-.6z"
        className="st19"
      />
      <path
        d="M663 1551c-.5 0-.9-.4-.9-1v-9c0-.6.5-.9.9-.9.2 0 .4.1.6.3l4.5 4.5c.3.4.3 1 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3m0 2c.8 0 1.5-.3 2-.9l4.5-4.5c1.1-1 1.1-2.7.2-3.9l-.1-.1-.1-.1-4.5-4.5c-.5-.5-1.2-.8-2-.8-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9z"
        className="st6"
      />
      <path
        d="M639.5 1431.7c4.4 0 7.9 3.5 7.9 7.9s-3.5 7.9-7.9 7.9M762.9 1431.4c4.4 0 8 3.5 8 7.9s-3.6 7.9-8 7.9M777.1 1431.4c4.5 0 8.1 3.5 8.1 7.9s-3.6 7.9-8.1 7.9"
        className="st3"
      />
    </svg>
  );
}

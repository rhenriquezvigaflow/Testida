import React from "react";
import {
  getColorConexion,
  getConexion,
  getScaledValue,
  getTarjetaClass,
  getTemaAlarma
} from "../../../../../commons/scada/scada";
import "./ScadaEmbonorArica.css";

export default function ScadaEmbonorArica({
  scada,
  datosAlarmas,
  loading,
  selected,
  loadGrafico,
  onClickAlarma
}) {
  const estadoConexion = scada !== null && getConexion(scada.con);
  const nivelTk01 = scada !== null ? null : getScaledValue(scada.d0, 1);
  const nivelTk03 = scada !== null ? null : getScaledValue(scada.d2, 1);
  const nivelTk05yTk06 = scada !== null ? null : getScaledValue(scada.d3, 1);
  const nivelTk09 = scada !== null ? null : getScaledValue(scada.d4, 1);
  const presionOsmosis = scada !== null && getScaledValue(scada.d5, 1);
  const presionRechazo = scada !== null ? null : getScaledValue(scada.d6, 1);
  const caudalAlimentacion = scada !== null && getScaledValue(scada.d7, 1);
  const caudalPermeado = scada !== null && getScaledValue(scada.d8, 1);
  const ecAlimentacion = scada !== null && getScaledValue(scada.d9, 1);
  const conductividadProducto = scada !== null && getScaledValue(scada.d11, 1);
  const phProducto = scada !== null && getScaledValue(scada.d12, 1);
  const temperaturaTk06 = scada !== null ? null : getScaledValue(scada.d13, 1);
  const nivelTk11 = scada !== null ? null : getScaledValue(scada.d14, 1);
  const caudalAblandadores = scada !== null && getScaledValue(scada.d15, 1);
  const caudalPermeadoOr1 =
    scada !== null ? null : getScaledValue(scada.d16, 1);
  const caudalRechazoOr1 = scada !== null ? null : getScaledValue(scada.d17, 1);
  const caudalPermeadoOr2 =
    scada !== null ? null : getScaledValue(scada.d18, 1);
  const caudalRechazoOr2 = scada !== null ? null : getScaledValue(scada.d19, 1);
  const conductividadEstanque =
    scada !== null ? null : getScaledValue(scada.d20, 1);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      id="Capa_1"
      x={0}
      y={0}
      style={{
        enableBackground: "new 0 0 1429.5 2620.6"
      }}
      viewBox="0 0 1429.5 2620.6">
      <style>
        {
          '.st0{fill:none;stroke:#00aeed;stroke-width:4;stroke-miterlimit:10}.st1{fill:#0e76e7}.st3{fill:#fff}.st6{fill:#3574e0}.st11{fill:none;stroke:#2f3e49;stroke-width:4;stroke-miterlimit:10}.st12{fill:#2f3e49}.st13{fill:#00aeed}.st14{fill:#fff;enable-background:new}.st15{fill:#323e48}.st16,.st17,.st21,.st22{fill:none;stroke:#323e48;stroke-width:4;stroke-miterlimit:10}.st17,.st21,.st22{stroke:#fff;stroke-width:2}.st21,.st22{stroke:#35ace8;stroke-width:4}.st22{fill:#fff}.st26{fill:#666}.st27{font-family:"ArialMT"}.st28{font-size:14px}.st29{fill:#606060}.st30{font-family:"Arial-BoldMT"}.st31{font-size:17px}.st36{fill:none;stroke:#2f3e49;stroke-width:3;stroke-miterlimit:10}.st40{font-size:10px}.st41{fill:#00b7ab}.st43{font-size:9px}.st44{fill:#008ba3}.st45{fill:#4c627d}.st46{enable-background:new}.st47{font-size:16px}.st48{font-size:13px}.st49{font-size:11px}.st50{fill:none;stroke:#008ba3;stroke-width:3;stroke-miterlimit:10};.tarjeta{fill:#ffffff}.tarjetaSeleccionada{fill:#3574e0;opacity:.15}.cursorPointer{cursor:pointer}.cursorNormal{cursor:default}.campana{fill:#3474E0;}.campana:hover{fill:#7c7c7c;}.campanaVacia{fill:#c2c2c1;}.campanaVacia:hover{fill:#7c7c7c;}.campanaDesconectada{fill:#c2c2c1;}'
        }
      </style>
      <path
        d="M715.5 1320.3H509.3M980.4 1339.7V1442c0 2.4 2 4.4 4.4 4.4h14"
        className="st0"
      />
      <path
        d="M964 1241.7h124.8v97.7H964z"
        className="st1"
      />
      <image
        xlinkHref="data:image/png;base64,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"
        width={289}
        height={179}
        style={{
          overflow: "visible",
          opacity: 0.2,
          enableBackground: "new"
        }}
        transform="translate(1102.81 37.758) scale(.9831)"
      />
      <path
        d="M1376.2 207.4H1113c-3.4 0-6.1-2.7-6.1-6.1V49.7c0-3.4 2.7-6.1 6.1-6.1h263.2c3.4 0 6.1 2.7 6.1 6.1v151.5c0 3.4-2.7 6.2-6.1 6.2z"
        className="st3"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAAB/CAYAAADRs0+fAAAACXBIWXMAAAuIAAALiAHljilJAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABM5JREFUeNrs2wtPG0cUgNFd/CIQ aGjTqA9V/f8/rE0jQmgCJjV+dVa90wyLgfXajZB6jnTliLpbqdLHnV07VQUAAAAAz1y9x+vU/ndC b+uYrxZwGa2AYX8Bd4653iHcPAcbYga6h1tG28yqa8x1z3AHEW771SaGfpu3mWXEu4jX1Yag7xhu Ee9BEWvz743SjGNG8TMRQ7/Nu4iZp7mNmUfUVRHy1gGX8TahTtIcpnmR5ijmMELOETtKQ/eAl0W0 n2Om8TqLkBfx/tU2AZfxjiPUl2lO0nwTc5rmOP7ZqHi/iKH79p0V4V6l+ZDmY5rr+NnGe+KuAY8i 0CbWb9O8TvN9mu/SnEXQR/G+gXChc8SrIuCbiPcyzbs052neF++fte+Jh0/EWxXb9zji/THNTzFv 4mcncaQeVl8eaAHdA87H50+xffOpto4jdp7yodeTGzg/tJrE0TkH/GuaXyLgs/iPTaq7D7KAp60i zHls2OtoKj9TynHP4jU/qW4aWw8f2b75+DyMOE/iyPxDmp9j3hTbt318FjE8vYXXrYjz7WgVP5tG 1FdxxJ6VbXW5B84BN1v2VUT8OiZv33Hr6Cxe6H6MLiPOm3ceR+rLOFJfVP881LqJrfzoBm5v4fwQ 6zh+Q5zGkfoo4h6JF3bexOUSPI0FeVZ9+aRnUrxn+dAGbn8tMt8Hj+MCefJvCl/ggN2UD4yraOtF RPsy/pzjvfMpz0GHDbzpW1jl0+ZavLC3kHNno9bS3PgJz8EWF970lxeEC/uPuC62bXvqbQOuN0Rc V/4GEvzXEZen342NHewQL/D1Qu4VMPCMCRgEDAgYEDAIGBAwIGBAwCBgQMCAgEHAgIABAQMCBgED AgYEDAgYBAwIGBAwCBgQMCBgQMAgYEDAgIABAYOAAQEDAgYBAwIGBAwIGAQMCBgQMAgYEDAgYEDA IGBAwICAAQGDgAEBAwIGAQMCBgQMCBgEDAgYEDAgYBAwIGBAwCBgQMCAgAEBg4ABAQMCBgQMAgYE DAgYBAwIGBAwIGAQMCBgQMAgYEDAgIABAYOAAQEDAgYEDP+/gNcxVfEKPPOA1xsibg+wf01bq9b0 2sDlhZbFrIQMe492XbS2SDOPKZv713CLgJdxoduYRXHRuhignzLcprFZmr/idR4/X3UNuNy8i7jI 5zQ3aabxehjRDmObCxh2Czi31vR1HTON9ubt4/TwkfveOv68jN8GzQWu0nyMOUkziouN0wwEDDvf 884j3qaxyzR/Rnc30eGyPEY/tYHXxTqfxkUv0ryK7VvFb4tJXKsu4ge2u/fNt6nN1j2PuYiItw64 PJPP4qLNxY4j2HVs5dOIeVB9eSgmYOgXcG7t9zS/pXkXm3jaCnj9WMDlZ775oldxZB4W8V7GUXpS 3AcLGPodn1dFwE24f6R5m+ZDBDyvejzEyvfAN0Wg8wj6PDbyuNjA4oV+GzjfA08j2mbep/lU3X2I 9eQGbkecn4y1N/JRHJ/z9i0/VxYydIt3U2v5CXT5AOtOvNtEluMcxLYdR7jjiDc/gfZZMOx+jG4i zp//3hb3vr0Dzu/NEQ+KrSte2N8mLr/1WH5Z6l68fY65dXGfW28IV8Cwn+P0urr/deX1piCrHhE/ FKyAYfeAHwr6nr8FGAA+c26nR+X3kQAAAABJRU5ErkJggg=="
        width={240}
        height={127}
        style={{
          overflow: "visible",
          opacity: 0.2,
          enableBackground: "new"
        }}
        transform="translate(38.766 37.688) scale(.9543)"
      />
      <path
        d="M256.2 151.5H47.4c-3.4 0-6.1-2.7-6.1-6.1V49.7c0-3.4 2.7-6.1 6.1-6.1h208.7c3.4 0 6.1 2.7 6.1 6.1v95.6c.1 3.3-2.6 6.1-6 6.2.1 0 0 0 0 0z"
        className="st3"
      />
      <circle
        cx={1143}
        cy={178.8}
        r={8}
        style={{
          fill: "#e33f09"
        }}
      />
      <circle
        cx={1143}
        cy={101.2}
        r={8}
        style={{
          fill: "#00cd98"
        }}
      />
      <circle
        cx={1143}
        cy={120.6}
        r={8}
        className="st6"
      />
      <circle
        cx={1143}
        cy={140}
        r={8}
        style={{
          fill: "#fbc43b"
        }}
      />
      <circle
        cx={1143}
        cy={159.5}
        r={8}
        style={{
          fill: "#ff6200"
        }}
      />
      <text
        className="st26 st27 st28"
        transform="translate(1160.929 105.91)">
        {"Funcionando"}
      </text>
      <text
        className="st26 st27 st28"
        transform="translate(1160.929 125.91)">
        {"Movi\xE9ndose"}
      </text>
      <text
        className="st26 st27 st28"
        transform="translate(1160.929 145.91)">
        {"Falla"}
      </text>
      <text
        className="st26 st27 st28"
        transform="translate(1160.929 165.91)">
        {"Bloqueada"}
      </text>
      <text
        className="st26 st27 st28"
        transform="translate(1160.929 185.91)">
        {"Detenida"}
      </text>
      <text
        className="st29 st30 st28"
        transform="translate(75.5 77.73)">
        {"Conectividad de Planta"}
      </text>
      <text
        className="st29 st30 st31"
        transform="translate(109.29 128.21)">
        {estadoConexion}
      </text>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAArCAYAAAAKasrDAAAACXBIWXMAAAv+AAAL/gFBkBnlAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA79JREFUeNrsmH1Tm0AQxjm4BDUv tdZ07Ezb7//FWmvjS2ISTYBAD+fZzuPOEQ5q/SvMPANBXH63t7u3RxQdj+NxPI7Hfz3MO9qr+hi0 bwwVOuDqPQANnY3nN8OwOsHaNwCLIX1tCKpU0rDVWwEaD1gCO7UG+B0T4B4qIPnNwI2gtgecQCUA GjqdQCl+C2T98hzaQRmUE+ye4Ko+gNpjA8CcOo2cxtAIoAMCrKG2Tk+kDe4JLHv2FaTtOK0JPHQG oA/QR5yngNSANdTa6dFp5bTAdX3/GbA7ite/kLaD9wRuBJgLp5nTJXSB+yM8pwEFrNat0x0gRTrT gwA57gaY0inAvkBXTp8BOIV32YMZvFR7cOl0j4GMcZ3iXZzde0ky28F7KYxeAOy701dcz+ilKQYe 42U5IMWL53hO4td6srwMAWzz3jfoCjE4pgRJVJkp8PcJoFI8d4LnMsrynLM6BJBj7xzxdkXTOwP4 iaqDEU1dCaiUpt/g/Tmmf4XzliBN2xTz9I7gqUvE3IzibqQ8Z5SNimqnUdn6jNh8QAJJCTKHPMjT a+GdMTz4CWAcS8MGuIiA+G9SwAt4je0tMdgsBFCmQTw4odoncAMq4m3hEpG9M0BMYW9ChV6SzNiA DLbwkGTdCMbThphrC5mKIE9hS+yeqqXSa1i3TjE1AilGOKRRxh0bX9+SyQlk2WbcsUGwFOxdwQ6B WpVEhh8K7YCrpo6j51GpftHb1MYBRkpV6XOq+FUPWLa5p3ZM7HJTGwxY0Jr6TBW/YGMd4ErqEbce uwcBtesZbkPiih8CyZ7LVZcjq8gT7hdtHqyUQV7sl2iP1oDOWjxZqS4lV93NAqvIEgPfsT0bMOoC /7Shdume1l+xIV1M065O4LaAW8DOHbTAfQZ8SevQDZKlAjtUtdA0bDF5wyRhsgLYb+in0w+nG3hS vPiShEng8hSrzVKi6pYvO/fUC8qe5BEQNdi10y+cr9FlP1Jsl22Avq8GXLTjA9vLXCXChuBuCeoG mpP3Mk6SUEDfVwTuTDTUlrJ+Re3UHEDivTmAH/DcluMvZE8iWcnZZ2lgexiVVn5CHY48I9Cyq7sH 1C31gAz3agEIBeRys6bszuClBeB0f1gRIHtzgfOa6l/uW51sYPWP1Ka69ACeQdzPRSqDnxTUjjbw 3oLfpRvhPQp/9kjp08fQ013rbGYovZP7J8Cm7zMJ9XFWtWJGNRt5A1TZ1Hj06ed0AefvNnFD+18S aKVi7dC3w94NZ9MHS9OwcdIQpYrvxkbjjwADAC/F2R8PRf/AAAAAAElFTkSuQmCC"
        width={39}
        height={42}
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        transform="translate(67.53 102.785) scale(.9203)"
      />
      <circle
        cx={85.5}
        cy={122.2}
        r={12.1}
        className="st3"
      />
      <circle
        cx={85.5}
        cy={122.1}
        r={8.9}
        style={{
          fill: getColorConexion(scada.con)
        }}
      />
      <text
        className="st29 st30 st28"
        transform="translate(1134.969 77.73)">
        {"Funcionamiento de dispositivos"}
      </text>
      <path
        d="M59.9 96.2h185.8"
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
        d="M480.9 818.5h-33.1c-3.8 0-6.9 3.1-6.9 6.9V977c0 3.5 2.8 6.3 6.3 6.3h33.7"
        className="st0"
      />
      <path
        d="M406 821.2c0-27.5-27.6-50-72.7-50s-72.7 22.5-72.7 50h.6c-.3 1.4-.6 2.8-.6 4.4v89.3c0 14.4 15.7 26.4 35.4 28.1v14.6h24.1v-14.3h24.1v14.3h24.1V943c20.7-.8 37.3-13.1 37.3-28.1v-89.3c0-1.4-.3-3.1-.6-4.4h1z"
        style={{
          opacity: 0.07,
          fill: "#323e48"
        }}
      />
      <path
        d="M247.7 841.9c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        className="st13"
      />
      <path
        d="M247.7 830.2c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st3"
      />
      <path
        d="M214.6 835h30.2"
        className="st0"
      />
      <path
        d="M313.3 820.1h41.8M355.4 905.1h-17.8c-2.8 0-5-2.3-5-5v-50.4M308.8 850.6h47.1M366.7 850.6H410c2.8 0 5 2.3 5 5v13.1"
        className="st21"
      />
      <path
        d="M366.7 819.1H410c2.8 0 5 2.3 5 5v33.4M298.6 851.1h-23.3c-2.8 0-5-2.3-5-5v-21.7c0-2 1.6-3.7 3.7-3.7h24.7"
        className="st21"
      />
      <path
        d="M211.3 851.2H80.2c-2.6 0-4.6-2.1-4.6-4.6v-23.2c0-2.6 2.1-4.6 4.6-4.6h131.1c2.6 0 4.6 2.1 4.6 4.6v23.2c.1 2.6-2 4.6-4.6 4.6z"
        className="st1"
      />
      <text
        className="st3 st30 st40"
        transform="translate(98.62 838.953)">
        {"OSMOSIS INVERSA"}
      </text>
      <path
        d="M195.2 1314.7h-115c-2.6 0-4.6-2.1-4.6-4.6v-23.2c0-2.6 2.1-4.6 4.6-4.6h115.1c2.6 0 4.6 2.1 4.6 4.6v23.2c0 2.5-2.1 4.6-4.7 4.6z"
        className="st15"
      />
      <text
        className="st3 st30 st40"
        transform="translate(104.406 1302.414)">
        {"PRODUCCI\xD3N"}
      </text>
      <path
        d="M413.1 881h3.7v11h-3.7z"
        className="st15"
      />
      <path
        d="M422.1 875c.7.8.7 2 0 2.8l-5.6 5.6c-.8.7-2 .7-2.8 0l-5.6-5.6c-.7-.8-.7-2 0-2.8"
        className="st15"
      />
      <path
        d="m420.8 867.8-4.5 4.5-.1.1c-.8.6-1.9.6-2.6-.1l-4.5-4.5c-.7-.8-.7-2 .1-2.7.4-.3.8-.5 1.3-.5h9c1 0 1.9.9 1.9 1.9 0 .5-.2 1-.6 1.3z"
        className="st13"
      />
      <path
        d="M409.7 866.5c0-.5.4-.9.9-.9h9.1c.5 0 .9.4.9.9 0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6m-2 0c0 .8.3 1.5.9 2l4.5 4.5c1.1 1.1 2.7 1.1 3.9.2l.1-.1.1-.1 4.5-4.5c.5-.5.8-1.3.8-2 0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9z"
        className="st3"
      />
      <path
        d="M311.7 810.9h-14.8c-.9 0-1.6-.2-1.6-.4v-3.7c0-.2.7-.4 1.6-.4h14.8c.9 0 1.6.2 1.6.4v3.7c0 .2-.7.4-1.6.4zM296.5 814.8l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st15"
      />
      <path
        d="m312.1 825.4-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st15"
      />
      <path
        d="M304.3 809.9v10"
        className="st16"
      />
      <path
        d="M370.2 810.9h-14.8c-.9 0-1.6-.2-1.6-.4v-3.7c0-.2.7-.4 1.6-.4h14.8c.9 0 1.6.2 1.6.4v3.7c0 .2-.7.4-1.6.4zM355 814.8l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st15"
      />
      <path
        d="m370.6 825.4-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st15"
      />
      <path
        d="M362.8 809.9v10"
        className="st16"
      />
      <path
        d="M311.7 840.6h-14.8c-.9 0-1.6-.2-1.6-.4v-3.7c0-.2.7-.4 1.6-.4h14.8c.9 0 1.6.2 1.6.4v3.7c0 .2-.7.4-1.6.4zM296.5 844.5l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st15"
      />
      <path
        d="m312.1 855.1-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st15"
      />
      <path
        d="M304.3 839.6v10"
        className="st16"
      />
      <path
        d="M370.2 840.6h-14.8c-.9 0-1.6-.2-1.6-.4v-3.7c0-.2.7-.4 1.6-.4h14.8c.9 0 1.6.2 1.6.4v3.7c0 .2-.7.4-1.6.4zM355 844.5l7.9 4.6c.5.3.5 1 0 1.3L355 855c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st15"
      />
      <path
        d="m370.6 855.1-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st15"
      />
      <path
        d="M362.8 839.6v10"
        className="st16"
      />
      <path
        d="M529.4 825.7v46c0 2 1.6 3.5 3.5 3.5H566"
        style={{
          opacity: 0.6,
          fill: "none",
          stroke: "#cbcbcb",
          strokeWidth: 2,
          strokeMiterlimit: 10,
          enableBackground: "new"
        }}
      />
      <path
        d="M534.2 830.9c0 .9-.7 1.6-1.6 1.6h-6.3c-.9 0-1.6-.7-1.6-1.6 0-.4.2-.8.5-1.1l3.1-3.1c.6-.6 1.5-.6 2.2-.1l3.2 3.2c.3.3.5.7.5 1.1z"
        style={{
          fill: "#cbcbcb"
        }}
      />
      <path
        d="M525.6 830.9c0-.2.1-.3.2-.4l3.1-3.1c.2-.2.6-.2.9 0l3.1 3.1c.1.1.2.3.2.4 0 .3-.2.6-.6.6h-6.3c-.3 0-.6-.3-.6-.6m-2 0c0 1.4 1.2 2.6 2.6 2.6h6.3c1.4 0 2.6-1.2 2.6-2.6 0-.7-.3-1.3-.8-1.8l-3.1-3.1-.1-.1-.1-.1c-1.1-.9-2.6-.8-3.5.2l-3.1 3.1c-.5.5-.8 1.1-.8 1.8z"
        className="st3"
      />
      <path
        d="M563.4 875.2h15.2c1 0 1.8.8 1.8 1.8v34.2"
        className="st11"
      />
      <path
        d="M574.3 881.2h-9.9c-.6 0-1.1-.5-1.1-1.1v-9.9c0-.6.5-1.1 1.1-1.1h9.9c.6 0 1.1.5 1.1 1.1v9.9c0 .6-.5 1.1-1.1 1.1z"
        className="st12"
      />
      <path
        d="M565.1 891.2h33.8v38.7h-33.8z"
        className="st41"
      />
      <path
        d="M565.1 891.2v37.2c0 .7.4 1.3.8 1.3H598c.5 0 .8-.6.8-1.3v-37.2"
        className="st11"
      />
      <text
        className="st27 st43"
        style={{
          fill: "#7c7c7c"
        }}
        transform="translate(539.245 947.626)">
        {"ANTIINCRUSTANTE"}
      </text>
      <path
        d="M497.3 818.5h405.1"
        className="st0"
      />
      <path
        d="M496.4 809.5h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM481.2 813.4l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7V814c0-.5.7-.9 1.2-.6z"
        className="st15"
      />
      <path
        d="m496.8 824-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st15"
      />
      <path
        d="M489 808.5v10"
        className="st16"
      />
      <path
        d="M480 800.5h18M489 801.5v8"
        className="st17"
      />
      <path
        d="M872.3 797.8c0-6.7-7.8-12.1-17.5-12.1s-17.5 5.5-17.5 12.1h.1c-.1.4-.1.7-.1 1.1v37.6c0 3.5 3.4 6.4 7.6 6.8v6.2h5.2v-6.1h9v6.1h5.2v-6.2c4.5-.2 8-3.2 8-6.8v-37.6c0-.3-.1-.7-.1-1.1h.1z"
        className="st15"
      />
      <path
        d="M496.3 983.3H1321c3.6 0 6.4-2.9 6.4-6.4v-172"
        className="st0"
      />
      <path
        d="M496.4 973.3h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM481.2 977.2l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st15"
      />
      <path
        d="m496.8 987.8-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st15"
      />
      <path
        d="M489 972.3v10"
        className="st16"
      />
      <path
        d="M480 964.3h18M489 965.3v8"
        className="st17"
      />
      <path
        d="M900.6 826.1c-1 0-1.9-.9-1.9-1.9v-9c0-1.1.9-1.9 1.9-1.9.5 0 .9.2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.4-.8.6-1.3.6z"
        className="st13"
      />
      <path
        d="M900.6 813.4c.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.5.3-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.7 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.8-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st3"
      />
      <path
        d="M1239.7 795.8h100.4c4.2 0 7.6 3.4 7.6 7.6v362.3c0 3.7-3 6.7-6.7 6.7h-306.9c-3.5 0-6.4 2.9-6.4 6.4v44.2M1108.4 822.8h-26.3c-2.8 0-5-2.2-5-5v-21H942.9M1077.7 796.8h30.4"
        className="st0"
      />
      <path
        d="M1191.7 890.7h14.8c.9 0 1.6-.7 1.6-1.6v-14.8c0-.9-.7-1.6-1.6-1.6h-14.8c-.9 0-1.6.7-1.6 1.6v14.8c0 .9.7 1.6 1.6 1.6zM1206.9 894.6l-7.9 4.6c-.5.3-.5 1 0 1.3l7.9 4.6c.5.3 1.2-.1 1.2-.7v-9.2c0-.5-.7-.9-1.2-.6z"
        className="st15"
      />
      <path
        d="m1191.3 905.2 7.9-4.6c.5-.3.5-1 0-1.3l-7.9-4.6c-.5-.3-1.2.1-1.2.7v9.2c0 .5.7.9 1.2.6z"
        className="st15"
      />
      <path
        d="M1199.1 889.7v10"
        className="st16"
      />
      <path
        d="M1208.1 881.7h-18M1199.1 882.7v8"
        className="st17"
      />
      <path
        d="M1232.5 829.8V893c0 3.8-3.1 6.8-6.8 6.8H1212M1187 857.7h-14.3c-3.5 0-6.3 2.8-6.3 6.3v35.9h20.6"
        className="st0"
      />
      <path
        d="M1171.6 899.7h-34.3c-5.2 0-9.4 4.2-9.4 9.4v29.3"
        className="st0"
      />
      <path
        d="M1134.7 939.1c0-1-.8-1.9-1.9-1.9h-9c-1 0-1.9.8-1.9 1.9 0 .5.2 1 .5 1.3l4.5 4.5c.7.7 1.8.7 2.6.1l.1-.1 4.5-4.5c.5-.4.6-.8.6-1.3z"
        className="st13"
      />
      <path
        d="M1123 939.1c0-.5.4-.9 1-.9h9c.6 0 .9.5.9.9 0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-1 .3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6m-2 0c0 .8.3 1.5.9 2l4.5 4.5c1 1.1 2.7 1.1 3.9.2l.1-.1.1-.1 4.5-4.5c.5-.5.8-1.2.8-2 0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9z"
        className="st3"
      />
      <path
        d="M1232.4 857.7h-20.9M1239.7 823.4h26.4c2.8 0 5-2.2 5-5v-21"
        className="st0"
      />
      <path
        d="M1240.2 809.7h-132c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.8 3.8-6 3.8z"
        className="st12"
      />
      <path
        d="M1241.5 809.7h-133c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.9-.2.9z"
        className="st1"
      />
      <path
        d="M1240.2 834.8h-132c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8V831c0 2.1-2.8 3.8-6 3.8z"
        className="st12"
      />
      <path
        d="M1241.5 834.8h-133c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.9-.2.9z"
        className="st1"
      />
      <path
        d="M1125.9 954.6h3.7v11h-3.7z"
        className="st15"
      />
      <path
        d="M1134.9 948.6c.7.8.7 2 0 2.8l-5.6 5.6c-.8.7-2 .7-2.8 0l-5.6-5.6c-.7-.8-.7-2 0-2.8M1206.5 849h-14.8c-.9 0-1.6-.2-1.6-.4v-3.7c0-.2.7-.4 1.6-.4h14.8c.9 0 1.6.2 1.6.4v3.7c0 .2-.7.4-1.6.4zM1191.3 852.9l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st15"
      />
      <path
        d="m1206.9 863.5-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st15"
      />
      <path
        d="M1199.1 848v10"
        className="st16"
      />
      <path
        d="M947.2 792.1h-17.4c-1.1-.3-2.3-.4-3.4-.4-8 0-14.6 6.5-14.6 14.5v.1c0 3.9 1.5 7.6 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.7-2.7 4.2-6.4 4.2-10.3 0-1.4-.2-2.8-.6-4.2h6.8c1.5 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
        className="st12"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAuCAYAAACxkOBzAAAACXBIWXMAAA3+AAAN/gEmzVBtAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA9lJREFUeNrsmQlz2jAQhWVbXCHk aELa9Pr//6vTTnokLRCCDbZVkXnbed0KY2zSTDt45o2DcTafVqvdlWLM4Tpch+tw/XNX9Ax/wzU1 ZP8C4DaHuOeCjbbcXRto+wSQ8nNMnxlWqza03RMoK4YS+lm+W4OUFaqEtnsETSALdSB5LgC5V4H7 ij4XAWi3L1j2ZAKwrlef1MMzi3cLAK6VQpnXEsohFwK2ewC1ABp4HXkde41wHwK6g3dzwK0h50oL gs9DHrZ7AO0Bcg147vUC9zM8O8JgIoJ98Jp5TaAfXlMoBrSER2NYPfVdwKzBLrxeel15jQF9gu97 AdgpIG+9vkEdiu+UFuTj4rQNF1NMU3/qden12uuN1zWgzwE7AITE7BJTfg/Y0HuOQF0TWEP5U6Z/ BA++8nrr9R7QVxjEEO/JAiuVdwX0GO8lgCtoMf4Ctg292iGvjgH4DsDXGMBILa6IUtMKAxnCTg/v yHcZtKDFFjWJ2QTGh4jVMTx7jfslTWsX7+ui0CXJYBxC5AEhco9FmIl3bYPEr0NgjGm/xLSOaFFJ FTMEG9M9ps8rWnjfoT6e5btmAw6BPuLsDMAXBDpQhSAKDNwpJxSYjTPoBDMnduImMZso2BPErSyS gfoD2xofWVCSWYaqmPwWRk08a2FoSNWKK1WyBTQELFWwR+qSrcjUMBqp9o/Lax+xKat5F9CQExJq gKwGNTsYjlQ2SFRnZTf0r6ZF0Ym1ndi0u5xpf7lAYx7qb2vDisFSVZcV9aTllh1AlW23occt2VZc 05ChEedI3ikqzIJ60iLkkR1Al6Q/nBDvaFRgU1Vp5ni2JM+7GjZLmiUZ/By2UzwvmrSIjmp3Ckjp RSfItwNVDKKKHW6purA59bQzAPNsubaw0o9K9epRaLlA+oloWnMqsTPYukOZncB+RtsclzRMMYna d3U35NlSrW5eRNyErwf82euT10evGzTjU7z36N1kxxxoamy5S5U1csoaGUFKGDHoB9y/4Ls5hULt MHDKWzJ9E+oFjGrxTqmp7tBgC+pVp5h6gV3rK+w+qOa70YaRu/0ZTXsOgBnijrsw7lnld+eAugPg DTx6i8GmKnXtnA20dxf0eakATgOwhlLfnDaNd7S4puTVos25AacdmXZHsOzZEe3BNGxGm8YZdE/n B0vt1Tbns3qRSVPTo9OYQaDVc2qflVIxyFTlcroatjlM3nQYx22eVWddhrIF9wG56gfKUKPU9uS7 KqWxdAUrN5woVjZC+zim33RwHAcGZAJAZaBVfPL/KUQVNqv+r7AV8in/ARI1zDD/1/VTgAEA4PWy OeqTTq0AAAAASUVORK5CYII="
        width={42}
        height={44}
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        transform="translate(909.29 788.854) scale(.7921)"
      />
      <circle
        cx={926.4}
        cy={806.6}
        r={10.9}
        className="st3"
      />
      <circle
        cx={926.4}
        cy={806.4}
        r={8}
        className="st14"
      />
      <text
        className="st29 st27 st40"
        transform="translate(915.788 843.344)">
        {"P-03"}
      </text>
      <path
        d="M1088.6 1225.4v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1v-111.2"
        className="st11"
      />
      <text
        className="st29 st27 st40"
        transform="translate(1014.205 1362.867)">
        {"TK-05"}
      </text>
      <path
        d="M1021.5 1222.5c0-1 .9-1.9 1.9-1.9h9c1.1 0 1.9.9 1.9 1.9 0 .5-.2.9-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.4-.3-.6-.8-.6-1.3z"
        className="st13"
      />
      <path
        d="M1033.2 1222.5c0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.5.4-.9.9-.9h9c.5 0 1 .3 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .7.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.8.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
        className="st3"
      />
      <path
        d="M1143.5 1405.8v12.7c0 3-2.4 5.4-5.4 5.4h-93.2"
        className="st0"
      />
      <path
        d="M1049.2 1419.2h-17.4c-1.1-.3-2.3-.4-3.4-.4-8 0-14.6 6.5-14.6 14.5v.1c0 3.9 1.5 7.6 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.7-2.7 4.2-6.4 4.2-10.3 0-1.4-.2-2.8-.6-4.2h6.8c1.5 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
        className="st12"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAuCAYAAACxkOBzAAAACXBIWXMAAA3+AAAN/gEmzVBtAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA9BJREFUeNrsmAlvGjEQhddec4WE kCZN7/7/H9ZDbdoc3BtgXW/0JnodGbprQJEqVnqiYl3nYzyeeXaWHZ/jc3yOz/E55GNeYH6fOpk7 MGCdYPiXgDWRT6OAPakxtNszJMtC/L4CKhV0qUD9oWA5cpaUY+4cMgS7BuCaVJI2Qrs9gBoF2FZy BFzBrIKW0CO0gtYq0n4fsBq0BbBu0AmpF9TBewOYCq4ImgfN8Dkn8KWKst8FVoO2AdQPGkDnUB/Q bYytorcA3Jg0CpoCfgHoTAO7PYBW0TsNGgZdQZdBrwDexzhDsDNA3kG30D3mzWLAbsell4hWYNdB 74PeBr3Bd+eUChnSQFJgBNBfQTe0Ajn9zYLzNzUNckxcgV4A7mPQp6APAL9AxLuUsyVyco5lf8CK nGGco2hK5ZDyZlxiVB0mH2DZ3wH0M6J7RVFtq2ogm2yO/3+GqPImlIpRELBxO0Z1SMv/kdJgiPcd jLeqg63wQ3o0JsP3BVWIGX5Y7cjqzpRTrlZL/RppcI1/D2n5ucYyrFNNQ/K52nwTpMcIG26Od5lL iGoLIGeAvQLkJZWrLpUrbWwEuEUBKBHBCW26UwTFSe1tmrOcr6eAG0IDWvpWBFTPJcAZ5usjAJzH nO/PudQ0slJbB5HJ3RbQbXN2KI+580nOG1szolmkvp4gGrzsOkfruDVLKyZ+okVzPTPaBlHVkRAv 0KXlshEPW3d+dmx57EfbxA5mlCW0DZY++WkC65ViXjTlfOWpa2mf+9epwiaArsmLFuSS1uoU0AS2 pHlFKwJ+GmdrQmYKtEB3mZInLSJ/oM7cYsgf8cMXFAA25LWbAk/MRmSEbjMGdI9KV52VW6sWO8Vc E9VqfYrrKsmTTtAO7/B5Ti3WoEL4LSdc+eHib6W93pMZl9V6Wqm84aGQy5ej8tWh+miVcckip1l2 VdJiK0/7PegLPm8AvpBUyBPqIRsagW4pU+LVxtEbSPJyHAH9GvQDJ4cxxj/tg7wh5La6m6mStlIR LOj8Jcb7VoFyVB8wVg6Q3jWshZy3cjRhY80WT04KPUoPTxtqhnG/g34C8hsc1wjzr7h+u8QiLm5/ St8tKWKXgOVTAMMuaKykwQ3A7/DuUTcGl9BpdFXw5EdntLzibXuU014dx6X03VMJnOL9kmts6pVn 7CZG3BJfcMidQYc2H6/KghqLvjNYxlp4qvEwGw6R/7o+4jMYXx/xNVIZ8wW7XiabyA2itnk2YvVi RqiWIdrV0m27k93kbX1EGy/jDnFNb7bcepsaBqnWZfK+zbJJLIX/3/NHgAEALW2u6wKqo9AAAAAA SUVORK5CYII="
        width={42}
        height={44}
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        transform="translate(1011.28 1415.905) scale(.7921)"
      />
      <circle
        cx={1028.4}
        cy={1433.7}
        r={10.9}
        className="st3"
      />
      <circle
        cx={1028.4}
        cy={1433.5}
        r={8}
        className="st14"
      />
      <text
        className="st29 st27 st40"
        transform="translate(1016.777 1472.395)">
        {"P-05"}
      </text>
      <path
        d="M786.6 997.2H665.8c-5.4 0-9.8-4.4-9.8-9.8v-8.3c0-5.4 4.4-9.8 9.8-9.8h120.9c5.4 0 9.8 4.4 9.8 9.8v8.3c-.1 5.4-4.5 9.8-9.9 9.8z"
        className="st15"
      />
      <path
        d="M675.5 972.7h101.3v21.1H675.5z"
        className="st41"
      />
      <text
        className="st29 st27 st40"
        transform="translate(710.432 1014.165)">
        {"UV-01"}
      </text>
      <path
        d="M1000.6 1453.6c-1 0-1.9-.9-1.9-1.9v-9c0-1.1.9-1.9 1.9-1.9.5 0 .9.2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.4-.8.6-1.3.6z"
        className="st13"
      />
      <path
        d="M1000.6 1440.9c.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.5.3-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.7 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.8-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st3"
      />
      <path
        d="M1150 1405.1c0 1-.9 1.9-1.9 1.9h-9c-1.1 0-1.9-.9-1.9-1.9 0-.5.2-.9.5-1.3l4.5-4.5c.7-.7 1.8-.7 2.6-.1l.1.1 4.5 4.5c.4.3.6.8.6 1.3z"
        className="st13"
      />
      <path
        d="M1137.3 1405.1c0-.2.1-.4.3-.6l4.5-4.5c.4-.3.9-.3 1.3 0l4.5 4.5c.2.2.3.4.3.6 0 .5-.4.9-.9.9h-9c-.5 0-1-.3-1-.9m-2 0c0 1.6 1.3 2.9 2.9 2.9h9c1.6 0 2.9-1.3 2.9-2.9 0-.7-.3-1.5-.8-2l-4.5-4.5-.1-.1-.1-.1c-1.2-.9-2.8-.9-3.9.2l-4.5 4.5c-.6.5-.9 1.2-.9 2z"
        className="st3"
      />
      <path
        d="M1141.7 1369.2v-166c0-2.1-1.7-3.8-3.8-3.8h-74.2c-2.1 0-3.8 1.7-3.8 3.8v19.2"
        className="st0"
      />
      <path
        d="M1157.4 1392.4h-90.9c-5.4 0-9.8-4.4-9.8-9.8v-8.3c0-5.4 4.4-9.8 9.8-9.8h90.9c5.4 0 9.8 4.4 9.8 9.8v8.3c0 5.4-4.4 9.8-9.8 9.8z"
        className="st15"
      />
      <path
        d="M1076.3 1367.9h71.3v21.1h-71.3z"
        className="st41"
      />
      <text
        className="st29 st27 st40"
        transform="translate(1096.717 1408.03)">
        {"UV-02"}
      </text>
      <path
        d="M1053.6 1222.5c0-1 .9-1.9 1.9-1.9h9c1.1 0 1.9.9 1.9 1.9 0 .5-.2.9-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.4-.3-.6-.8-.6-1.3z"
        className="st13"
      />
      <path
        d="M1065.3 1222.5c0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.5.4-.9.9-.9h9c.5 0 1 .3 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .7.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.8.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
        className="st3"
      />
      <path
        d="M999.6 1230.2v-52c0-2.1-1.7-3.8-3.8-3.8H741.6c-2.1 0-3.8 1.7-3.8 3.8v44.2"
        style={{
          fill: "none",
          stroke: "#008ba3",
          strokeWidth: 4,
          strokeMiterlimit: 10
        }}
      />
      <path
        d="M731.5 1222.5c0-1 .9-1.9 1.9-1.9h9c1.1 0 1.9.9 1.9 1.9 0 .5-.2.9-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.4-.3-.6-.8-.6-1.3z"
        className="st44"
      />
      <path
        d="M743.2 1222.5c0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.5.4-.9.9-.9h9c.5 0 1 .3 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .7.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.8.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
        className="st3"
      />
      <path
        d="M732.6 1339.7V1442c0 2.4 2 4.4 4.4 4.4h14"
        className="st0"
      />
      <path
        d="M716.2 1241.7H841v97.7H716.2z"
        className="st1"
      />
      <path
        d="M840.8 1225.4v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1v-111.2"
        className="st11"
      />
      <text
        className="st29 st27 st40"
        transform="translate(766.37 1362.867)">
        {"TK-06"}
      </text>
      <path
        d="M895.7 1405.8v12.7c0 3-2.4 5.4-5.4 5.4h-93.2"
        className="st0"
      />
      <path
        d="M801.4 1419.2H784c-1.1-.3-2.3-.4-3.4-.4-8 0-14.6 6.5-14.6 14.5v.1c0 3.9 1.5 7.6 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.7-2.7 4.2-6.4 4.2-10.3 0-1.4-.2-2.8-.6-4.2h6.8c1.5 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
        className="st12"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAuCAYAAACxkOBzAAAACXBIWXMAAA3+AAAN/gEmzVBtAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA9ZJREFUeNrsmQlT2zAQhW1ZzgVJ uUpbevz//9UbShsCOR1blTtvmcciiO04w0wnnnnjkDjyl6f1aldE0f7YH/tjf+yPXR7xC4zvmg5m dwxYxQz3ErBx4BwrYEeqDW1bhmQZiD8vFHARgHe7gmXnBC6BLM6Grivhcjrn9HexCdq2ACouWqij JNARwNZemdcKyvDemsCDwLYF0BIk9ep69bwGpD6AU3yvBFpCM685zguCXz8FbFsA7QDy0Gvk9Qoq Xx8AOMX1K4CVgLfQBOcp3l/C7VwD2xZASweHXsder73OvE7x9xCfi7MZ3JwC8o/Xb6h8Pfa6o/vl TWF1jKZwdAjAN14XXm+9zgE7wjUd3HBNzt4A8MrrEjNgMbZMfUH3dk3DwCJGy6k/AeBH6AIOHyEM umRKjlCYw8ExQuYQ1yUE6eihqwUbeqD6ACpdfO/1CbDvEAZDuJqqbJAjLkfQIbkaUbbIcF0h924S swm5ekzT/wHnc0AMMP0J5WJZCHoA7NE1DoALOC+xvcZnlWBD+VRi9RRwEqdnmNYDmlajYB3l5IRc XwPwFvE8QZisJHZtA1clBEaI1zPE6Ak52qV0pQsbF1iaczg6QWa4wg8W19d1wiAUr0PE7DHOPPXy VG+aKYHvU57mOE45jEwNZw3lVoENDW5rjCthlVIci7o01r8fZio6GgXy6wBTdUBPvVUxWqVaM1T4 dGh5tlQcRXWcjQNOSC3QpemqChoaX1dtj8YyW6xgWm20SPGmmKl66KKZ69Bii96Kl1Zd4z6oukxN 0IJWmCXSDVdJTaD1uFzj5jSeMxUh5XVOq8yMyrq5qkVdDciCIBekR+M1cZYLkRvoDu8tA448N2ZO szTDOFLbzhVsraqLB5dlcUx16JBWnKhCh8uzNKXldYzXMxhz/8OTmk0h50WdvjoqN7rAg+lUH7bA jy6X2J9eX6HvXteYNakNimSLnJgQNHeyOmz4Kc9UZTUh0G9en3G+pK7hPqySmjk2Cqxo/BmDSccq jeCSHkwpvDXoF68fcPUW1+d1qy6n+qIMNx1ToZGrEu+IlmJLRQvHafn9XwQs03+nQBs1jBG1G0tq 7iRLiGOngOUugGHnyt0r6BrvzSh3N2rF2d2CimVHrYoAXFMr3lONYEb7BZL6xpQCp5QCH+TspkWH 7hw6yAgDVY31KZ0ZNSsSClPKq3oxKNrYn40DTaRV4Glg+4iX1pVSRpB5aPtom0opDuwgGnLbPFHq OZU1isDmnNvFzvdze7ImsKCEFokiUIPsdJs+fmbXO65QIFXaTG77fwpxw1T4/x1/BRgAeDqoiH3s SSgAAAAASUVORK5CYII="
        width={42}
        height={44}
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        transform="translate(763.444 1415.905) scale(.7921)"
      />
      <circle
        cx={780.6}
        cy={1433.7}
        r={10.9}
        className="st3"
      />
      <circle
        cx={780.6}
        cy={1433.5}
        r={8}
        className="st14"
      />
      <text
        className="st29 st27 st40"
        transform="translate(768.942 1472.395)">
        {"P-06"}
      </text>
      <path
        d="M752.8 1453.6c-1 0-1.9-.9-1.9-1.9v-9c0-1.1.9-1.9 1.9-1.9.5 0 .9.2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.4-.8.6-1.3.6z"
        className="st13"
      />
      <path
        d="M752.8 1440.9c.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.5.3-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.7 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.8-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st3"
      />
      <path
        d="M902.2 1405.1c0 1-.9 1.9-1.9 1.9h-9c-1.1 0-1.9-.9-1.9-1.9 0-.5.2-.9.5-1.3l4.5-4.5c.7-.7 1.8-.7 2.6-.1l.1.1 4.5 4.5c.4.3.6.8.6 1.3z"
        className="st13"
      />
      <path
        d="M889.5 1405.1c0-.2.1-.4.3-.6l4.5-4.5c.4-.3.9-.3 1.3 0l4.5 4.5c.2.2.3.4.3.6 0 .5-.4.9-.9.9h-9c-.5 0-1-.3-1-.9m-2 0c0 1.6 1.3 2.9 2.9 2.9h9c1.6 0 2.9-1.3 2.9-2.9 0-.7-.3-1.5-.8-2l-4.5-4.5-.1-.1-.1-.1c-1.2-.9-2.8-.9-3.9.2l-4.5 4.5c-.6.5-.9 1.2-.9 2z"
        className="st3"
      />
      <path
        d="M893.9 1369.2v-166c0-2.1-1.7-3.8-3.8-3.8h-64.2c-2.1 0-3.8 1.7-3.8 3.8v19.2"
        className="st0"
      />
      <path
        d="M909.6 1392.4h-90.9c-5.4 0-9.8-4.4-9.8-9.8v-8.3c0-5.4 4.4-9.8 9.8-9.8h90.9c5.4 0 9.8 4.4 9.8 9.8v8.3c0 5.4-4.4 9.8-9.8 9.8z"
        className="st15"
      />
      <path
        d="M828.5 1367.9h71.3v21.1h-71.3z"
        className="st41"
      />
      <text
        className="st29 st27 st40"
        transform="translate(848.883 1408.03)">
        {"UV-03"}
      </text>
      <path
        d="M815.8 1222.5c0-1 .9-1.9 1.9-1.9h9c1.1 0 1.9.9 1.9 1.9 0 .5-.2.9-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.4-.3-.6-.8-.6-1.3z"
        className="st13"
      />
      <path
        d="M827.5 1222.5c0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.5.4-.9.9-.9h9c.5 0 1 .3 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .7.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.8.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
        className="st3"
      />
      <path
        d="M1005.2 1220c0 1-.9 1.9-1.9 1.9h-9c-1.1 0-1.9-.9-1.9-1.9 0-.5.2-.9.5-1.3l4.5-4.5c.7-.7 1.8-.7 2.6-.1l.1.1 4.5 4.5c.4.3.6.8.6 1.3z"
        className="st44"
      />
      <path
        d="M993.5 1220c0-.2.1-.4.3-.6l4.5-4.5c.4-.3.9-.3 1.3 0l4.5 4.5c.2.2.3.4.3.6 0 .5-.4.9-.9.9h-9c-.5 0-1-.3-1-.9m-2 0c0 1.6 1.3 2.9 2.9 2.9h9c1.6 0 2.9-1.3 2.9-2.9 0-.7-.3-1.5-.8-2l-4.5-4.5-.1-.1-.1-.1c-1.2-.9-2.8-.9-3.9.2l-4.5 4.5c-.6.5-.9 1.2-.9 2z"
        className="st3"
      />
      <path
        d="M914.6 1187.4h-91.5c-2.6 0-4.6-2.1-4.6-4.6v-17.6c0-2.6 2.1-4.6 4.6-4.6h91.5c2.6 0 4.6 2.1 4.6 4.6v17.6c0 2.6-2.1 4.6-4.6 4.6z"
        className="st44"
      />
      <text
        className="st3 st27 st40"
        transform="translate(847.745 1177.674)">
        {"CHILLER"}
      </text>
      <path
        d="M493.7 1320.8h-20.6"
        className="st0"
      />
      <path
        d="M431.1 1293.7h17.4c1.1-.3 2.2-.4 3.4-.4 8.1 0 14.6 6.5 14.6 14.6 0 4.1-1.7 7.8-4.3 10.4l4.1 9c.3.7-.1 1.6-.7 1.6h-27.7c-.6 0-.9-.9-.6-1.6l4.1-9.1c-2.6-2.6-4.2-6.3-4.2-10.3 0-1.5.2-2.9.6-4.2H431c-1.4 0-2.6-1.2-2.6-2.7v-4.6c0-1.5 1.2-2.7 2.7-2.7z"
        className="st12"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA8BJREFUeNrsmAtTm0AUhVkgL2PU qG3tw/r//1bbsdWm1RgTSELYLplzOyd3IAtkbGc6zcwZUGD59t69jyUI/v/+wZ95ofHkaKG/BmeU +KfhGsGaA6FCggrpbw2Tq2MtSHOApQQmcorpyIAFzAbKcMxJeyFNS2sJSKEe1IUE1AJm5bR2WtL5 mqArLRm3ACue6Tj1nQZOQ6djHAcAjfGyFaAWTnMcC6X4/xoWzWkZNIZjsOLlR04jpzOnMY6ngBwQ nIA9Oz1Bjzg+49qSXL4DGLcAGwLm0umN02ucjwE8gGVzBVdA/XSaQMX5A64leNcOYNxgjXVgsTGA 3kPv8PcZ4PoYN4fbUoL74XRH90V4h8V9HNF74Th3xbDIidMrpw9ON04fAXeJa0cIilAFRGGZmdM5 3D9U9+kI3gLXsZy4s1hPF05XTteAu4Zrz3BdotVQBGYAPIZkAhFZd62Cw+6DM2qt9WGZwkJvyaVX AD6mKA0VnKQYSTcd3JPDlQvSkgBNXGO9yVo7pSC4gnvHAOvTS8tKmKxbSdwbWotTrMcp0s0S10vh eK1FmK3AnQPwglzZA1hUAWbUNQsvLDDeuVqvMVwcxDXSRxcL+ASWGqtFXQWmu5OQoriPiY2gobL+ 1u2hx60RLDOggUZqlmGNMmjUmDLpPsTW/z1eHbgu4I6oAvgs5ktPEeXOmMbi8Uzo6c14EC7wsWqX 2jSi3NWYkutey5UBm4ZQQUmQBHu6EeuDsypzSz+me7LgAEA9bq675nBPWy0PSy+WogylyPibkgF9 QJbKmlSOFVWHnTF9ltsALEHCnCFRJhg0o4axzi/HM2uaLE94p3yFnplK4Z6rTP5MgJsagFZ5IsWY M+rtEuqQvV1JTpZbYJAHtD1jJM6Osn5Y0v7rBkA6lEfq6Z7wjhW37lHDfq5bklKMKvSBaoHEWisA TNFs3jp9gb4Bco57t89GnmQZlOQkzuTabVbttgQqpaXBYJ9x/h3WS3lPETVInrpWslUy6slkUyOB NMeLCxfeO30F1CcA3sFqC7Za3T2EACwwiMHDK2q/L2mD0yN387OyZu/hxlvlTk5P3g0OR18Gkwe0 uBOyyEXJ7iugScwJboKgmmBiM9Vk2iabal1ne7RfHQHqBBrieqQsnNCamwJ0RnvYtbZa0LBo68jt AFI6lgH1ZAyXUYWRdjyhLwBZVTls0+7oTxIdaqF0JFsVuWWbmco63eZbSdXHnLL2x1JQ5S/9Iadu O1VV8O1LfwLz5UCzp5EI/tTHwyZjtfr0+kuAAQD8xKsEKGHyXgAAAABJRU5ErkJggg=="
        width={39}
        height={39}
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        transform="matrix(-.8974 0 0 .8974 469.808 1290.417)"
      />
      <circle
        cx={451.9}
        cy={1308.2}
        r={10.9}
        className="st3"
      />
      <circle
        cx={451.9}
        cy={1308}
        r={8}
        className="st14"
      />
      <text
        className="st29 st27 st40"
        transform="translate(438.17 1345.906)">
        {"P-07B"}
      </text>
      <path
        d="M431.1 1365.4h17.4c1.1-.3 2.2-.4 3.4-.4 8.1 0 14.6 6.5 14.6 14.6 0 4.1-1.7 7.8-4.3 10.4l4.1 9c.3.7-.1 1.6-.7 1.6h-27.7c-.6 0-.9-.9-.6-1.6l4.1-9.1c-2.6-2.6-4.2-6.3-4.2-10.3 0-1.5.2-2.9.6-4.2H431c-1.4 0-2.6-1.2-2.6-2.7v-4.6c0-1.5 1.2-2.7 2.7-2.7z"
        className="st12"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA8BJREFUeNrsmAtTm0AUhVkgL2PU qG3tw/r//1bbsdWm1RgTSELYLplzOyd3IAtkbGc6zcwZUGD59t69jyUI/v/+wZ95ofHkaKG/BmeU +KfhGsGaA6FCggrpbw2Tq2MtSHOApQQmcorpyIAFzAbKcMxJeyFNS2sJSKEe1IUE1AJm5bR2WtL5 mqArLRm3ACue6Tj1nQZOQ6djHAcAjfGyFaAWTnMcC6X4/xoWzWkZNIZjsOLlR04jpzOnMY6ngBwQ nIA9Oz1Bjzg+49qSXL4DGLcAGwLm0umN02ucjwE8gGVzBVdA/XSaQMX5A64leNcOYNxgjXVgsTGA 3kPv8PcZ4PoYN4fbUoL74XRH90V4h8V9HNF74Th3xbDIidMrpw9ON04fAXeJa0cIilAFRGGZmdM5 3D9U9+kI3gLXsZy4s1hPF05XTteAu4Zrz3BdotVQBGYAPIZkAhFZd62Cw+6DM2qt9WGZwkJvyaVX AD6mKA0VnKQYSTcd3JPDlQvSkgBNXGO9yVo7pSC4gnvHAOvTS8tKmKxbSdwbWotTrMcp0s0S10vh eK1FmK3AnQPwglzZA1hUAWbUNQsvLDDeuVqvMVwcxDXSRxcL+ASWGqtFXQWmu5OQoriPiY2gobL+ 1u2hx60RLDOggUZqlmGNMmjUmDLpPsTW/z1eHbgu4I6oAvgs5ktPEeXOmMbi8Uzo6c14EC7wsWqX 2jSi3NWYkutey5UBm4ZQQUmQBHu6EeuDsypzSz+me7LgAEA9bq675nBPWy0PSy+WogylyPibkgF9 QJbKmlSOFVWHnTF9ltsALEHCnCFRJhg0o4axzi/HM2uaLE94p3yFnplK4Z6rTP5MgJsagFZ5IsWY M+rtEuqQvV1JTpZbYJAHtD1jJM6Osn5Y0v7rBkA6lEfq6Z7wjhW37lHDfq5bklKMKvSBaoHEWisA TNFs3jp9gb4Bco57t89GnmQZlOQkzuTabVbttgQqpaXBYJ9x/h3WS3lPETVInrpWslUy6slkUyOB NMeLCxfeO30F1CcA3sFqC7Za3T2EACwwiMHDK2q/L2mD0yN387OyZu/hxlvlTk5P3g0OR18Gkwe0 uBOyyEXJ7iugScwJboKgmmBiM9Vk2iabal1ne7RfHQHqBBrieqQsnNCamwJ0RnvYtbZa0LBo68jt AFI6lgH1ZAyXUYWRdjyhLwBZVTls0+7oTxIdaqF0JFsVuWWbmco63eZbSdXHnLL2x1JQ5S/9Iadu O1VV8O1LfwLz5UCzp5EI/tTHwyZjtfr0+kuAAQD8xKsEKGHyXgAAAABJRU5ErkJggg=="
        width={39}
        height={39}
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        transform="matrix(-.8974 0 0 .8974 469.808 1362.16)"
      />
      <circle
        cx={451.9}
        cy={1379.9}
        r={10.9}
        className="st3"
      />
      <circle
        cx={451.9}
        cy={1379.7}
        r={8}
        className="st14"
      />
      <text
        className="st29 st27 st40"
        transform="translate(437.895 1417.65)">
        {"P-07C"}
      </text>
      <path
        d="M431.1 1221.9h17.4c1.1-.3 2.2-.4 3.4-.4 8.1 0 14.6 6.5 14.6 14.6 0 4.1-1.7 7.8-4.3 10.4l4.1 9c.3.7-.1 1.6-.7 1.6h-27.7c-.6 0-.9-.9-.6-1.6l4.1-9.1c-2.6-2.6-4.2-6.3-4.2-10.3 0-1.5.2-2.9.6-4.2H431c-1.4 0-2.6-1.2-2.6-2.7v-4.6c0-1.5 1.2-2.7 2.7-2.7z"
        className="st12"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA8BJREFUeNrsmAtTm0AUhVkgL2PU qG3tw/r//1bbsdWm1RgTSELYLplzOyd3IAtkbGc6zcwZUGD59t69jyUI/v/+wZ95ofHkaKG/BmeU +KfhGsGaA6FCggrpbw2Tq2MtSHOApQQmcorpyIAFzAbKcMxJeyFNS2sJSKEe1IUE1AJm5bR2WtL5 mqArLRm3ACue6Tj1nQZOQ6djHAcAjfGyFaAWTnMcC6X4/xoWzWkZNIZjsOLlR04jpzOnMY6ngBwQ nIA9Oz1Bjzg+49qSXL4DGLcAGwLm0umN02ucjwE8gGVzBVdA/XSaQMX5A64leNcOYNxgjXVgsTGA 3kPv8PcZ4PoYN4fbUoL74XRH90V4h8V9HNF74Th3xbDIidMrpw9ON04fAXeJa0cIilAFRGGZmdM5 3D9U9+kI3gLXsZy4s1hPF05XTteAu4Zrz3BdotVQBGYAPIZkAhFZd62Cw+6DM2qt9WGZwkJvyaVX AD6mKA0VnKQYSTcd3JPDlQvSkgBNXGO9yVo7pSC4gnvHAOvTS8tKmKxbSdwbWotTrMcp0s0S10vh eK1FmK3AnQPwglzZA1hUAWbUNQsvLDDeuVqvMVwcxDXSRxcL+ASWGqtFXQWmu5OQoriPiY2gobL+ 1u2hx60RLDOggUZqlmGNMmjUmDLpPsTW/z1eHbgu4I6oAvgs5ktPEeXOmMbi8Uzo6c14EC7wsWqX 2jSi3NWYkutey5UBm4ZQQUmQBHu6EeuDsypzSz+me7LgAEA9bq675nBPWy0PSy+WogylyPibkgF9 QJbKmlSOFVWHnTF9ltsALEHCnCFRJhg0o4axzi/HM2uaLE94p3yFnplK4Z6rTP5MgJsagFZ5IsWY M+rtEuqQvV1JTpZbYJAHtD1jJM6Osn5Y0v7rBkA6lEfq6Z7wjhW37lHDfq5bklKMKvSBaoHEWisA TNFs3jp9gb4Bco57t89GnmQZlOQkzuTabVbttgQqpaXBYJ9x/h3WS3lPETVInrpWslUy6slkUyOB NMeLCxfeO30F1CcA3sFqC7Za3T2EACwwiMHDK2q/L2mD0yN387OyZu/hxlvlTk5P3g0OR18Gkwe0 uBOyyEXJ7iugScwJboKgmmBiM9Vk2iabal1ne7RfHQHqBBrieqQsnNCamwJ0RnvYtbZa0LBo68jt AFI6lgH1ZAyXUYWRdjyhLwBZVTls0+7oTxIdaqF0JFsVuWWbmco63eZbSdXHnLL2x1JQ5S/9Iadu O1VV8O1LfwLz5UCzp5EI/tTHwyZjtfr0+kuAAQD8xKsEKGHyXgAAAABJRU5ErkJggg=="
        width={39}
        height={39}
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        transform="matrix(-.8974 0 0 .8974 469.808 1218.672)"
      />
      <circle
        cx={451.9}
        cy={1236.4}
        r={10.9}
        className="st3"
      />
      <circle
        cx={451.9}
        cy={1236.2}
        r={8}
        className="st14"
      />
      <text
        className="st29 st27 st40"
        transform="translate(438.17 1274.162)">
        {"P-07A"}
      </text>
      <path
        d="M473.1 1390.6h14.3c2.8 0 5-2.3 5-5v-128.4c0-3.5-2.8-6.3-6.3-6.3h-13"
        className="st21"
      />
      <path
        d="M403.8 1298.8h20.6"
        className="st0"
      />
      <path
        d="M424.4 1226.9H410c-2.8 0-5 2.3-5 5v132.4c0 3.5 2.8 6.3 6.3 6.3h13"
        className="st21"
      />
      <path
        d="M408.1 1298.8H213.9"
        className="st0"
      />
      <path
        d="M507.9 1326.4c1 0 1.9-.8 1.9-1.9v-9c0-1-.8-1.9-1.9-1.9-.5 0-1 .2-1.3.5l-4.5 4.5c-.7.7-.7 1.8-.1 2.6l.1.1 4.5 4.5c.4.5.8.6 1.3.6z"
        className="st13"
      />
      <path
        d="M507.9 1314.7c.5 0 .9.4.9 1v9c0 .6-.5.9-.9.9-.2 0-.4-.1-.6-.3l-4.5-4.5c-.3-.4-.3-1 0-1.3l4.5-4.5c.2-.2.4-.3.6-.3m0-2c-.8 0-1.5.3-2 .9l-4.5 4.5c-1.1 1-1.1 2.7-.2 3.9l.1.1.1.1 4.5 4.5c.5.5 1.2.8 2 .8 1.6 0 2.9-1.3 2.9-2.9v-9c0-1.6-1.3-2.9-2.9-2.9z"
        className="st3"
      />
      <path
        d="M380.7 1305.3c1 0 1.9-.8 1.9-1.9v-9c0-1-.8-1.9-1.9-1.9-.5 0-1 .2-1.3.5l-4.5 4.5c-.7.7-.7 1.8-.1 2.6l.1.1 4.5 4.5c.4.5.8.6 1.3.6z"
        className="st13"
      />
      <path
        d="M380.7 1293.6c.5 0 .9.4.9 1v9c0 .6-.5.9-.9.9-.2 0-.4-.1-.6-.3l-4.5-4.5c-.3-.4-.3-1 0-1.3l4.5-4.5c.2-.2.4-.3.6-.3m0-2c-.8 0-1.5.3-2 .9l-4.5 4.5c-1.1 1-1.1 2.7-.2 3.9l.1.1.1.1 4.5 4.5c.5.5 1.2.8 2 .8 1.6 0 2.9-1.3 2.9-2.9v-9c0-1.6-1.3-2.9-2.9-2.9z"
        className="st3"
      />
      <path
        d="M330.9 1278.8c0-6.7-7.8-12.1-17.5-12.1s-17.5 5.5-17.5 12.1h.1c-.1.4-.1.7-.1 1.1v37.6c0 3.5 3.4 6.4 7.6 6.8v6.2h5.2v-6.1h9v6.1h5.2v-6.2c4.5-.2 8-3.2 8-6.8v-37.6c0-.3-.1-.7-.1-1.1h.1zM286.6 1278.8c0-6.7-7.8-12.1-17.5-12.1s-17.5 5.5-17.5 12.1h.1c-.1.4-.1.7-.1 1.1v37.6c0 3.5 3.4 6.4 7.6 6.8v6.2h5.2v-6.1h9v6.1h5.2v-6.2c4.5-.2 8-3.2 8-6.8v-37.6c0-.3-.1-.7-.1-1.1h.1z"
        className="st15"
      />
      <path
        d="M233.4 1308.7H217c-.7 0-1.4-.6-1.4-1.4V1290c0-.7.6-1.4 1.4-1.4h16.4c.7 0 1.4.6 1.4 1.4v17.4c-.1.7-.7 1.3-1.4 1.3z"
        className="st45"
      />
      <path
        d="M220.6 1312.3c0 1.1-1.3 1.7-2.1.9l-1.1-1.1v-.1l-11.7-11.8c-.9-.9-.9-2.4 0-3.2l11.7-11.8v-.1l1.1-1.1c.8-.8 2.1-.2 2.1.9v27.4z"
        className="st45"
      />
      <path
        d="M974 1787.8v114.3c0 2.4 2 4.4 4.4 4.4h14"
        className="st0"
      />
      <path
        d="M957.6 1689.8h124.8v97.7H957.6z"
        className="st1"
      />
      <path
        d="M1117.1 1863v15.7c0 3-2.4 5.4-5.4 5.4h-93.2"
        className="st0"
      />
      <path
        d="M1042.8 1879.3h-17.4c-1.1-.3-2.3-.4-3.4-.4-8 0-14.6 6.5-14.6 14.5v.1c0 3.9 1.5 7.6 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.7-2.7 4.2-6.4 4.2-10.3 0-1.4-.2-2.8-.6-4.2h6.8c1.5 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
        className="st12"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAsCAYAAAD8WEF4AAAACXBIWXMAAA3+AAAN/gEmzVBtAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA8lJREFUeNrsmAlT2zAQhS0fCQmh HCnQlmn//w+DnhQSyEFsY1XuvGVeF9n1EXrMxDM7CiajfHqSdp8UBLtn9+ye3fPfPeYv9G//JVhD bRWs7QJvtgxpPLD8d1EBa5tAmy0qGRJciIgqYLktFLB9KVijAEu4GG2CzwIeAOwRkVMr72UA3uUR bwGUIUvAoYoE/w8AlCE2iJTe5QrUbgOWQQVyhNh3MUE7IuAAMA+AXLpYoV3Te1H8mcLxFkCHgDpw cURxCOAxwWYAKyHvXdy5mKO9J/CUls0TcNxz6geAKcGmLs5cnLp47eIYAxjhexaqrQFVAt66+I64 Qcj6TvVyiHtspgFADgH41sU7tGdQ9xWUZ9gNlBXYb/jeCAKEpKhki/I3bZdlwNN/AEVLwA8u3uPz KQYxxvdi2mAp1mep7glA9zGgEIOSNZvh71awrCpP/xFUvABoGW8AMaHNpVNXioFO0M8e+rUATGlQ kodN3EHVCBATQJ1DzQuAnqq1GlI+l6Q/BOCABlMAcEWZYkF5uBGs8WSAPUzfFHDnaKd4PwZIRKpy eY3ofxFlClnLM2SJW6zxxy4bLKKceoAdP63Y/UlNlYyUCDmW1Amt4zEVFNNmGeh0xXn1GJtpAsWl zJoGXiKB0ntUTLigMOyzKWqrrMR+Q1Bfn1ympQrKeo7ZIIUN1yuryx2PKT0xqGkIGnjKdlLVV9hC Aa3ugBJ+oixiX/fm7Svs2KGpedf3qfS0YYdOCvKhuccldYELyOdy/AIetgQVyBT5b02elH+gLazu NyURnsxM2GJKLNVrqe0LxAo/krVQ2dIAefBrEiGncttJ2RSdLVBl5vCiPmBb01/hMTbiccXXsrqt XJelY8kaHc/gQcW4sGmpyhCW7GJGA5+hvEqpXdLysgHV5Ta51njOXANdGtVptfCoKTNUKnnt4ouL K8RniHCHAf30tVGPnKhPs5GCLDyZI1XTPscpoQT96OIS7VdS92njRi0B63KuVcfsjLzpBoAy5feY 8msFekmqLshxFW1cF2+UguwcW8CcDoIzmBzxDDGpztlkBuBSyU8EulSgnQ6MgcoKSxpAShtlSk5s 5IHlbHKDpXANtecYdKYzStyh0gic3AEI/EYBiBsbkntiZcVo31H6kxNCqnNs1+sj35VRQj5X3NhI edKQUlZKa3iFeKA8naurpF53XabmnishLzqgTOErBpm6Osopizy7PurjlKrcV6jOV2FNNeT0Vvzu JnEbt4hVF8hV/tbWRPCSV55V0E36tnU3hn/imt50TIWNnh8CDACFMrHMpsxXUwAAAABJRU5ErkJg gg=="
        width={42}
        height={44}
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        transform="translate(1004.884 1876.047) scale(.7921)"
      />
      <circle
        cx={1022}
        cy={1893.8}
        r={10.9}
        className="st3"
      />
      <circle
        cx={1022}
        cy={1893.6}
        r={8}
        className="st14"
      />
      <text
        className="st29 st27 st40"
        transform="translate(1011.382 1931.537)">
        {"P-14"}
      </text>
      <path
        d="M994.2 1913.7c-1 0-1.9-.9-1.9-1.9v-9c0-1.1.9-1.9 1.9-1.9.5 0 .9.2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.4-.8.6-1.3.6z"
        className="st13"
      />
      <path
        d="M994.2 1901c.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.5.3-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.7 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.8-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st3"
      />
      <path
        d="M1123.6 1862.2c0 1-.9 1.9-1.9 1.9h-9c-1.1 0-1.9-.9-1.9-1.9 0-.5.2-.9.5-1.3l4.5-4.5c.7-.7 1.8-.7 2.6-.1l.1.1 4.5 4.5c.4.3.6.8.6 1.3z"
        className="st13"
      />
      <path
        d="M1110.9 1862.2c0-.2.1-.4.3-.6l4.5-4.5c.4-.3.9-.3 1.3 0l4.5 4.5c.2.2.3.4.3.6 0 .5-.4.9-.9.9h-9c-.5 0-1-.3-1-.9m-2 0c0 1.6 1.3 2.9 2.9 2.9h9c1.6 0 2.9-1.3 2.9-2.9 0-.7-.3-1.5-.8-2l-4.5-4.5-.1-.1-.1-.1c-1.2-.9-2.8-.9-3.9.2l-4.5 4.5c-.6.5-.9 1.2-.9 2z"
        className="st3"
      />
      <path
        d="M1115.3 1826.3v-175c0-2.1-1.7-3.8-3.8-3.8h-62.2c-2.1 0-3.8 1.7-3.8 3.8v19.2"
        className="st0"
      />
      <path
        d="M1131.1 1849.6h-90.9c-5.4 0-9.8-4.4-9.8-9.8v-8.3c0-5.4 4.4-9.8 9.8-9.8h90.9c5.4 0 9.8 4.4 9.8 9.8v8.3c-.1 5.4-4.5 9.8-9.8 9.8z"
        className="st15"
      />
      <path
        d="M1050 1825.1h71.3v21.1H1050z"
        className="st41"
      />
      <text
        className="st29 st27 st40"
        transform="translate(1071.322 1864.172)">
        {"UV-04"}
      </text>
      <path
        d="M892 1648.6h97.4c2.1 0 3.9 1.7 3.9 3.9v18"
        className="st0"
      />
      <path
        d="M1038.8 1664.4c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
        className="st13"
      />
      <path
        d="M1050.5 1664.4c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
        className="st3"
      />
      <path
        d="M987.1 1665.4c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
        className="st13"
      />
      <path
        d="M998.8 1665.4c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
        className="st3"
      />
      <path
        d="M1082.2 1774.7h53.2M1314.4 1752.2h-132.9"
        className="st0"
      />
      <path
        d="M1185.7 1747.5h-17.4c-1.1-.3-2.3-.4-3.4-.4-8 0-14.6 6.5-14.6 14.5v.1c0 3.9 1.5 7.6 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.7-2.7 4.2-6.4 4.2-10.3 0-1.4-.2-2.8-.6-4.2h6.8c1.5 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
        className="st12"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAuCAYAAACxkOBzAAAACXBIWXMAAA3+AAAN/gEmzVBtAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA71JREFUeNrsmQtP2zAUhRPXaUu3 0rLBxp7//3/tJQSslLakr9Szp3Onw61Dk5QKTaqloyCIrr9c2/dhkuQ4juM4juO/G+kL2HdNjdkD A1ZxhnsJ2DTyTBWwI9WGts8MKTJQqv6+UcCbCLw7FGwMsAVZPPmdAoAFaUN6Eto+A6hABluZV5uU 4fcGkwe4tdfKawmt8Ls1QUeB7TOAtgDW8Trx6kEnkAA7gC2gB68czwXBF2XAdk9QC9AA1fc69RpA fUB3aZ4ANfeaeU2gezwfIPH2FrDdE7QDoAD5xuvC6xw/DwHcJc8uARRgx14jr9/QCKs0w1wMXBtW L30Gjw4Aeen1Ac8AfOb1mmA3AAienQI2QF6r91KKECua2zX1rKWlPwfkF0hgB/B6Gx8nB0z26wQr cErvGRXWZP/Wgk0VaBsThMnee332+ornJXm1gxXQ0WAByKBX8Kp8EEeLFfR37rrbwJBXZZ8GuE8A /Qiv9ikSGEoMAiyRokvv8DbJSes6sDrwZwQbwN7BuxeRZW2pLObwsZaSh6H9+YDoMIbu+aDZBntV tkDYk28BLAdKPNqmw6ILGxepG9YADfZuceh6emVswwQg4WoIyGEE1FRYKakXOE6fUnTIaHVKDcaG jq39yCF5ZLyiTUnRXbWX27RNKu1ZvYQcX3uA7NGpt+pAVbHNcVvqiagt0/CAZfj6Lk3QiuzROqum q7YtW6ZBQkiVcVPDm3u1WXVgXUl2idWi+9gUOV11mQYGJbtIBSWZpniiZdllf0PZakU1bsHvmQqG ZGwoFUqZN0N8nNMEVb3M3pRadg4tyAH/7NX1LBciU8oyM6TGZQ1gAZWCnGvcGaAf2apTG7AXJC3e oQ49QxjLyAH2iQ6XbeX4cLE3BnBOqfYvbKtBi839VgfhS8dZow4IS/otAQ2QN15XXj+gK9S6UwZu 7Rm6rCpMUgWou9kV7U3pFm4B99Pru9cv1AZjqrpqwaY77glkFFSzrlXkWFCDOMGS3xDoN/LqCB+z 4DBma4SXhJZxCWOWttJadQADSsUtKlp4n47gRQEuA23UMHJvlFPJJ1FigskElrsAhmXvSkl4jX26 tfxNWnFHUSGhYlm8PSfYIbXiHYoM2rNSZN/hoE2pHd+CbZLP9SHjEq+nqrETVeRsKK7mKrHkdNlR RG5nGhcfaaQo33V9lKimcam0UvdfW9dH+1RK+obQqJBmSko9p6BiBZE7xM132Z2sKQltsSShAd2h r+nTHfG4LKokVSAP9T+FJvZcchwvPP4IMABNwKs+PTa9uwAAAABJRU5ErkJggg=="
        width={42}
        height={44}
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        transform="translate(1147.802 1744.234) scale(.7921)"
      />
      <circle
        cx={1164.9}
        cy={1762}
        r={10.9}
        className="st3"
      />
      <circle
        cx={1164.9}
        cy={1761.8}
        r={8}
        className="st14"
      />
      <text
        className="st29 st27 st40"
        transform="translate(1154.3 1799.724)">
        {"P-15"}
      </text>
      <path
        d="M1137.1 1781.9c-1 0-1.9-.9-1.9-1.9v-9c0-1.1.9-1.9 1.9-1.9.5 0 .9.2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.4-.8.6-1.3.6z"
        className="st13"
      />
      <path
        d="M1137.1 1769.2c.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.5.3-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.7 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.8-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st3"
      />
      <path
        d="M1082.2 1673.5v111.2c0 1.7-.6 3.1-1.2 3.1H959c-.7 0-1.2-1.4-1.2-3.1v-111.2"
        className="st11"
      />
      <text
        className="st29 st27 st40"
        transform="translate(1006.81 1810.009)">
        {"TK-11"}
      </text>
      <path
        d="M1306.2 1741.3h16.4c.7 0 1.4.6 1.4 1.4v17.4c0 .7-.6 1.4-1.4 1.4h-16.4c-.7 0-1.4-.6-1.4-1.4v-17.4c0-.8.6-1.4 1.4-1.4z"
        className="st45"
      />
      <path
        d="M1318.9 1737.6c0-1.1 1.3-1.7 2.1-.9l1.1 1.1 11.7 11.8c.9.9.9 2.4 0 3.2l-11.7 11.8-1.1 1.1c-.8.8-2.1.2-2.1-.9v-27.2z"
        className="st45"
      />
      <path
        d="M341.9 517.4h-17.4c-1.1-.3-2.3-.4-3.4-.4-8 0-14.6 6.5-14.6 14.5v.1c0 3.9 1.5 7.6 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.7-2.7 4.2-6.4 4.2-10.3 0-1.4-.2-2.8-.6-4.2h6.8c1.5 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
        className="st12"
      />
      <path
        d="M295.3 551.4c-1 0-1.9-.9-1.9-1.9v-9c0-1.1.9-1.9 1.9-1.9.5 0 .9.2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.4-.8.6-1.3.6z"
        className="st13"
      />
      <path
        d="M295.3 538.7c.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.5.3-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.7 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.8-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st3"
      />
      <path
        d="M248.9 543.5h43.5"
        className="st0"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAsCAYAAAD8WEF4AAAACXBIWXMAAA3+AAAN/gEmzVBtAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA8dJREFUeNrsmQFT2kAQhbnkQIzQ qFVrrf3/P6y2dbRIFRACIdeL89Z53TkkibFOZ8jMmwMmbr/s7e29XDud3bW7dtfuKi/zDvFd02D2 jQGrJMO9B6zZAGsCcK4JtH0DSAGMaNSgIW2Fti2AMmQExaSI7itB1l4FxJ+LbdC2BVCRwHWhHkaL 3w2AcmhFygEu8EFg2wKoZLKE2/PaJ/UJ2gCmhMu8Fl5zjKWWBB4Eti2AWkAmXgOvodcHjAeA7uHe HKAl5JQ08XrE7xmg1xrYtgDaB1Tqdez1EToEdKJgFwArAX9DY4z3gDfI9LopbKhG9wB65HXqdQ6d AjwlWCkDmf4HAP7yusV9XcSVK0NJPC3OpjUrNZogg2deX7wuvS7w/Ril0KeaLZAxKYN7/P0Q5WLp Pkc1Xgt20/QPMeWfvb5CF8jsIWXVUmbXVLeHVNtSKrpjrAFubAtZPQXsJXSOshigTCz1WgeYFf4+ oY7BmV9QuaykFGzDNsW1egbAT2r69zH9Ee1islvpPmwo4zMsvgnqeiHZrZtZblVDwJ4A8gSZHlC7 igP+wKldjTM6Qx2PEF9mZlW3DAztUH1ApQA+ItC+yti2rtJB5oaIl+JzAljZstd1FphMp4ZNaZHs UfsxFevfUcxE1TLHMlEDo2Ip8AGgE6rBWDmtbW5NYnZpy9axTKdi0FDNdskH9Kk9Vc1oKCHs1myo 3qOGfZYDxiqbpuHrktmgTl1Ydj+O+qV7wfnXjVsE9FfsqEZAR4Y5R6vJMOa009SF13FXyio+Jymq CMlBc/KjYuvmBF1UhOUHY5+bqSQ8x4saTNUKoDPaZabKi1YFLmiW5OGniD0nb1DU3cEcTdWCXNMY Y4rOIJtBTy260NSvlBm/hx4AnlF5dWyD2pLMinkeYQc7IEMi98eBFsQvi7zF3iHWHZnwjEshbthi uH316CUxUrCFgsvVtAtoab6vvb5D14B+wL1PMeKaPTDUc/XZAINx51iqhTlBCQnoldc3r59eN3iI R+40tuYC69DKnSOgpT1+SQuPjY2lB5Ju8ojMjQD3A7rF73PdDWzDJi7/4JQynhPAmAx4QiXiaIHO cO8dAG8wjkL12mSB6ZazoO/aj6bK23JmGVY6yhjfJ9S3i9ecG+hy0F1iTrU4IE9q6a2VN5UZnR3M 6NBjyf31teezIWPTJTfG0v5WHmwZ2LGW6hjJtXWYbJQnNQGLZ8m0mw0eg8eggWnr5Dt03BmpN4vQ Oxi7thCge8tj+k1ntC8d1bsNn//Z/ymYGvErHSD/t9cfAQYAk4y2xOo9wskAAAAASUVORK5CYII="
        width={42}
        height={44}
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        transform="translate(304.025 514.081) scale(.7921)"
      />
      <circle
        cx={321.1}
        cy={531.9}
        r={10.9}
        className="st3"
      />
      <circle
        cx={321.1}
        cy={531.7}
        r={8}
        className="st14"
      />
      <text
        className="st29 st27 st40"
        transform="translate(310.524 568.571)">
        {"P-01"}
      </text>
      <path
        d="M348.9 520.6h15.6c4.6 0 8.4-3.8 8.4-8.4V395c0-4.6 3.8-8.4 8.4-8.4h107.3c4.6 0 8.4 3.8 8.4 8.4v20.1c0 4.6 3.8 8.4 8.4 8.4h8.6"
        className="st0"
      />
      <path
        d="M517.2 429.4c-1 0-1.9-.9-1.9-1.9v-9c0-1.1.9-1.9 1.9-1.9.5 0 .9.2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.4-.8.6-1.3.6z"
        className="st13"
      />
      <path
        d="M517.2 417.7c.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.5.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.7 0 1.5-.3 2-.8l4.5-3.5.1-.1.1-.1c.9-1.2.9-2.8-.2-3.9l-4.5-5.5c-.5-.6-1.2-.9-2-.9z"
        className="st3"
      />
      <path
        d="M406.2 425.1h-3c-11 .4-10.3-9-10.3-9s-.1-8.7 0-19.3v-11"
        className="st0"
      />
      <path
        d="M409.2 431.8c-1 0-1.9-.9-1.9-1.9v-9c0-1.1.9-1.9 1.9-1.9.5 0 .9.2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.4-.8.6-1.3.6z"
        className="st13"
      />
      <path
        d="M409.2 420.1c.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.5.3-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.7 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.8-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st3"
      />
      <path
        d="M487.4 500.3v-50c.4-11-9-10.3-9-10.3h-13.3M595.1 500.3v-50c.4-11-10-10.3-10-10.3h-13.3"
        className="st0"
      />
      <path
        d="M589 503.3c0-1 .9-1.9 1.9-1.9h9c1.1 0 1.9.9 1.9 1.9 0 .5-.2.9-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.4-.3-.6-.8-.6-1.3z"
        className="st13"
      />
      <path
        d="M600.7 503.3c0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.5.4-.9.9-.9h9c.5 0 1 .3 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .7.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.8.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
        className="st3"
      />
      <path
        d="M452.1 495.5c10.6-4 14.6-3.2 14.6-14.6v-50.2c.1-5.8-4.8-10.5-10.8-10.5h-25.6c-6 .1-11 4.8-11.1 10.5v50.2c0 11.4 4 10.6 14.6 14.6l1.7 3.2c.8 1.9 1.9 3.5 4.2 3.5h7.1c2-.2 2.6-1.2 3.7-3.5l1.6-3.2zM450.9 418.2H435c-1.3 0-2.4-1.1-2.4-2.4v-9.9c0-1.3 1.1-2.4 2.4-2.4h15.9c1.3 0 2.4 1.1 2.4 2.4v9.9c0 1.3-1.1 2.4-2.4 2.4z"
        className="st45"
      />
      <path
        d="M426.9 500.8v-13.3c0-.8.6-1.4 1.4-1.4h13.3c1.2 0 1.8 1.5 1 2.3l-13.3 13.3c-.9.9-2.4.3-2.4-.9z"
        className="st45"
      />
      <path
        d="M458.4 500.8v-13.3c0-.8-.6-1.4-1.4-1.4h-13.3c-1.2 0-1.8 1.5-1 2.3l13.3 13.3c1 .9 2.4.3 2.4-.9zM558.4 495.5c10.6-4 14.6-3.2 14.6-14.6v-50.2c.1-5.8-4.8-10.5-10.8-10.5h-25.6c-6 .1-11 4.8-11.1 10.5v50.2c0 11.4 4 10.6 14.6 14.6l1.7 3.2c.8 1.9 1.9 3.5 4.2 3.5h7.1c2-.2 2.6-1.2 3.7-3.5l1.6-3.2zM557.2 418.2h-15.9c-1.3 0-2.4-1.1-2.4-2.4v-9.9c0-1.3 1.1-2.4 2.4-2.4h15.9c1.3 0 2.4 1.1 2.4 2.4v9.9c0 1.3-1.1 2.4-2.4 2.4z"
        className="st45"
      />
      <path
        d="M533.2 500.8v-13.3c0-.8.6-1.4 1.4-1.4h13.3c1.2 0 1.8 1.5 1 2.3l-13.3 13.3c-1 .9-2.4.3-2.4-.9z"
        className="st45"
      />
      <path
        d="M564.7 500.8v-13.3c0-.8-.6-1.4-1.4-1.4H550c-1.2 0-1.8 1.5-1 2.3l13.3 13.3c.9.9 2.4.3 2.4-.9z"
        className="st45"
      />
      <path
        d="M75 386.6h69.5c4.7 0 8.5 3.8 8.5 8.5v38.3"
        className="st0"
      />
      <path
        d="M126 452h124.8v97.7H126z"
        className="st1"
      />
      <path
        d="M250.6 435.7v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1V435.7"
        className="st11"
      />
      <text
        className="st29 st27 st40"
        transform="translate(171.233 572.162)">
        {"TK-01"}
      </text>
      <path
        d="M487.4 508.1v26c0 2.2 1.8 4 4 4H647c4.2 0 7.6-3.4 7.6-7.6V397.3c0-4.8 3.9-8.6 8.6-8.6h50.9c4.7 0 8.5 3.8 8.5 8.5v38.3"
        className="st0"
      />
      <path
        d="M716 438.5c0-1 .9-1.9 1.9-1.9h9c1.1 0 1.9.9 1.9 1.9 0 .5-.2.9-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.4-.3-.6-.8-.6-1.3z"
        className="st13"
      />
      <path
        d="M727.7 438.5c0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.5.4-.9.9-.9h9c.5 0 1 .3 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .7.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.8.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
        className="st3"
      />
      <path
        d="M481.3 503.3c0-1 .9-1.9 1.9-1.9h9c1.1 0 1.9.9 1.9 1.9 0 .5-.2.9-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.4-.3-.6-.8-.6-1.3z"
        className="st13"
      />
      <path
        d="M493 503.3c0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.5.4-.9.9-.9h9c.5 0 1 .3 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .7.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.8.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
        className="st3"
      />
      <path
        d="M146.7 433.4c0-1 .9-1.9 1.9-1.9h9c1.1 0 1.9.9 1.9 1.9 0 .5-.2.9-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.4-.3-.6-.8-.6-1.3z"
        className="st13"
      />
      <path
        d="M158.4 433.4c0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.5.4-.9.9-.9h9c.5 0 1 .3 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .7.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.8.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
        className="st3"
      />
      <path
        d="M934.6 553.1h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
        className="st12"
      />
      <path
        d="M863.6 549.6c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        className="st13"
      />
      <path
        d="M863.6 537.9c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st3"
      />
      <path
        d="M822.1 542.8h38.6"
        className="st0"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA8ZJREFUeNrsWGtP2zAUjR33RWlh ZWywMWn//2/BXqwDCk1okiaZg46lw5XbOC0bX6h0lLZKbo7v89hR9PZ5+7zuR/1Dm821xvf6tQkq QiQIMrnOhM0LENOCoCaitQeVh/CLe5DJNIgFFHmwAkoC/7+VqNnDa45Mz6IP9IAY9zQvXlsUQI7r GijbPGp2JGdAZGAxsjggDIlkBVKZxaNFiusK/+VE1JufZgdyzmMNmUOLI8LEYgzijuAKxJYWD8A9 fjvChfBm3ZUgkxuAREPoxOIUmFkcg/QAtksQTEBsYXFj8QfXOywkhUcjSdLsENaG3DuLDxbnFp8s zizeg+AYYdYgmMNLDcFbi7nFNS0kpoLKZWsyHarVIKxTkLuw+AKcwZtT3NPDMxVyzIV5AU8fiftc VfP1yYshHnTkhsixExBqiH21+GzxES89RH4aClOFHFvh+QnI9eG9mqqaC6Zs86ASuTcCiVOE9QLk zuEVzr1YNOoSCxziHq5yV+GuunMuGBPgvRirHSPHTuGxM4R6Bq8MKWRyAMREPKb8XKGa74EHpELh 8tIEzNaYKveYKveEqnZIIZPkaiKlREEkKK6mqn8jSn14tQm3Mh1ai+t5M1TxEfW83gZycpy6nHML ngITqn5DI7QygdU7QGJPyOiYCkIHzHUlwt0DoRHgFvrMng6sYEdwDIxo9uqOooMXbsQMl4tVukVw KiEIhpRvRuRWVzGrhALSPl2pAw1JBaN38FzUIlyVT9XoAAPc4UvqUfU+Ut5js/QpcB1ooCDZlJGu KzuSrEXzZq3odOKzxesWI24MuW6/JJmUeYyGes0Ry8QEKUSEWqu4IoKu4y/Q8RNqqGUASfZcQTJs KewVbMsEhtgZW0Ay3WKKHMCGQmW3RWUt5JeztwBRFq9Pz8UtjTqiduB61oCGPjdqX4HJfMtIdjW6 8LvFN4sri18QsCl5sYo79C1NRI2nSdcbdnGOGEehIfcDxC7xfQ6vZpTXUdxhS6oE2DtMxoUxp3Cm pKgbNf0TxC7hwWt475G9F5KDslAeSBS4HduSlPJUiNGIZH9Ke5JreI3JpVILdtk0OTJ8pLEWL52R iBiScimxuITunUNezfF7KUIbvCfhtuHaQ0IyPkXruRHbTunBjMJ8ByzwbIL8LDwb+U5D3icefCqH N+6R6HuPIJSA8MrTS3c+m/EJByPI9sXRR7RhXOY03kpxTrPX4ZHacnhkPIdHkafa10S6aptA+5xu RRuO3fSGA8xaCIGg+b3vAaZquW4TIf/9CFhtsbuzdvwrwAA9IbLgvCxaSwAAAABJRU5ErkJggg=="
        width={39}
        height={39}
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        transform="translate(895.868 549.847) scale(.8974)"
      />
      <circle
        cx={913.7}
        cy={567.6}
        r={10.9}
        className="st3"
      />
      <circle
        cx={913.7}
        cy={567.4}
        r={8}
        className="st14"
      />
      <text
        className="st29 st27 st40"
        transform="translate(899.93 604.337)">
        {"P-02B"}
      </text>
      <path
        d="M934.6 474.6h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
        className="st12"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA6lJREFUeNrsmHtXm0AQxbOwJBJj jLGt2uf3/1y1T6tVEiNCCN3k3PHcTnkseKz/yDn3kAQy/HZmZ3aWweDleDme9zBPaFPOJfSsgEaJ Dw3YCfixgAFBBeq7BtqosxeoeYTHAlLoZOnMkAVpDUBWI6jp6TWGipxG0BDfLe7ZACxTyqGizaO2 J5wFzJ7T2GnfaYLPMa6FePg9dOu0IqUEK6ADDWl7wEUENnWaOR3hPAXsHgALgls6JU43UELQGYX/ L0jbE24CqNdOJzgfA3KCeyweKoALp2unS6dfOF9hILfw6D+QtkdYJ4DZgr2DzpxeOR3i+og8uPXO HQB/A04GMqTMF6+taV62AnIJiRDWLcQbpw9On3A+BfQB5mCE/20ozCvcM8dUGOO+gMoPZ/YO2hfQ ImxThPMtwD46vcdvh5h/Ebxn6MFreGyCe2LyXkFZzQnTCihwIXlvBpgzCu8J5uM+Hsp1kIv0UJUi A/A7yuw7SpidF30BRwCYUWKcYt7NcG1ED65a7qR2Bvgtp7l5gwRKKKs3TYA89zTgHGBzhHVMcEEN nCHPlrCVIXvniADP3xADGFjP5Bhh/kxh7AifYwprULMycVcT0vIXw+YBzU0e6G4lCjxKjMUfxzAm Bn3g6towXiL3ILb1YC/wMCqAMUa5X2HQdGw0ZG6HtHZH9NvDvUFLb8dNwVA1BWFPOD5z42Eqrjd6 0DQ0pHXNqe9Rql6xrLleC1iqGia9nKigqj94BKS2vdHdd9AyOlkFcixXKSnvAVlW2M1U21WwVwNP QykK6ALifo6N+npN4FIU6xQOyFQT25rFJS32S1Xxlwpy0wLJcNLhSBuWUMuV84Ctp8EUBm7QMl3S KmJpoLYqE5Ut6WwS2LrCoBeAznkbEHbYIEmt4nLDnYtu17l94nksA/3p9NXp3OkLvl8D8iFhQo+C qndxvIMzCogzs6BwSkiXgLgA1Dn0DVFZYBDSzQzCDgW2VKEToDV5iIHuKZwyf7cQP8hznwF6ges6 xF4tf0kPXqoF/572Gse0aRqq+zIK7RUgvwNUQrvSCeIDyDUxV+HMYVQ8M6/Y1QlgqgBl03SJ325V o9ppV1dSMZYOmAETPHSKTmesNkNFRagTKlUrXK8s/F0Xek4UyeiYNuxxRfNaqJVIt/dZ09LZdbE3 NRkt+4yoovTwepvXbJBql8w+3YhpeIFU9YZLNx1P/vKoCrStDSsb9OQvME1DQ1r3IvO/vcDsYq/X a+A/AgwA/eqzvg9QswoAAAAASUVORK5CYII="
        width={39}
        height={39}
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        transform="translate(895.868 471.368) scale(.8974)"
      />
      <circle
        cx={913.7}
        cy={489.1}
        r={10.9}
        className="st3"
      />
      <circle
        cx={913.7}
        cy={488.9}
        r={8}
        className="st14"
      />
      <text
        className="st29 st27 st40"
        transform="translate(899.93 525.858)">
        {"P-02A"}
      </text>
      <path
        d="M892.5 582.8h-14.3c-2.8 0-5-2.3-5-5v-68.4c0-3.5 2.8-6.3 6.3-6.3h13M944.5 478.1h14.3c2.8 0 5 2.3 5 5v68.4c0 3.5-2.8 6.3-6.3 6.3h-13M1055.3 540.8h-25.4c-2.8 0-5-2.3-5-5v-33.4c0-3.5 2.8-6.3 6.3-6.3h24.2"
        className="st21"
      />
      <path
        d="M965.1 518h60.2"
        className="st0"
      />
      <path
        d="M697.2 452H822v97.7H697.2z"
        className="st1"
      />
      <path
        d="M821.8 435.7v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1V435.7"
        className="st11"
      />
      <text
        className="st29 st27 st40"
        transform="translate(742.432 571.162)">
        {"TK-03"}
      </text>
      <path
        d="M1229 511.2h-151.1c-2.6 0-4.6-2.1-4.6-4.6v-23.2c0-2.6 2.1-4.6 4.6-4.6H1229c2.6 0 4.6 2.1 4.6 4.6v23.2c0 2.5-2.1 4.6-4.6 4.6z"
        className="st1"
      />
      <text
        className="st3 st30 st40"
        transform="translate(1107.958 498.865)">
        {"OSMOSIS INVERSA"}
      </text>
      <path
        d="M1229 557h-151.1c-2.6 0-4.6-2.1-4.6-4.6v-23.2c0-2.6 2.1-4.6 4.6-4.6H1229c2.6 0 4.6 2.1 4.6 4.6v23.2c0 2.5-2.1 4.6-4.6 4.6z"
        className="st41"
      />
      <text
        className="st3 st30 st40"
        transform="translate(1111.41 544.68)">
        {"ABLANDADORES"}
      </text>
      <path
        d="M1053.1 502.4c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        className="st13"
      />
      <path
        d="M1053.1 490.7c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st3"
      />
      <path
        d="M1053.1 546.9c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        className="st13"
      />
      <path
        d="M1053.1 535.2c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st3"
      />
      {/* nivel estanque tk-01 */}
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACNCAYAAAAXU/AtAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABxdJREFUeNrsm4lynFYQRQExo8Vr nMT//4GxJWubfV6gqrvquvWAWaLYgnOquhhtTBnOXPo1uCgA3jDlb7ovGD/pV0lX9vw9EsMp8qZT xS6P/L0y87pEXjhD4hSqyGw7qQ8QV6vq2EaZAYbk9drLdh++NyhxOfB9F/TCXl9kqgoi01LAIS3D XmrX1Na2XvrzTpHrgdR1Sdvfm4WqpbokRmDI9bgpiLuxWsvrjf28t6WoexLYxZ03dWl1ZeVfu8xD SQzQJ+/KatHU0mplQpeSyC8krjPiViKvS/su1I2IPLffvRCBSWDoS2BvE1zeVtjnph6tnqzKTM9c DAns6Ts3Sd839Unqo33PJZ6HFCaB4ZAE3lrCrkzeh6bum7ozp6oegVNO4DIk8NwkbYX9o6m/mvpi rz9aEl93CEz6QlcKR4GXlratvLcWijPzJ4VFXZK+uLeFqIPArbh/N/W1qT8tid+LwN5CME6DY3rg jQj8w3ybS9/rPfJWphSaytlFXCX9byvoB0ngrybyZ0nguIgjfWEohXURtzKBo7yezgtZ0G2Ln2fE vS3ETBZwH03aL5bALrBPIioWcHDEQk7nv+vQNmwllR9sUffcMSTonULMJIVvrGX4IHVjP+9avCEw 9E0ivJ/1FtSTd2nS/rCQdLnr4NlPLUTZkcK1JPG11ZXUXHpfpIVje+ELaTt31irEUW3XkCDbQuSS WO+4xbtwfqcOeeEUiV3IffHzDTOvXnm7FnHx4Z1KZK7Cgo2xGZyLPmMTQ3JWvLxJpr6lamDnZU8V 9LtwBn1B2fWg2IuwrE54s6Jg1guvK3RZHPhsTTWwM9IV/m+Jj/Kv4pjBb5S+R1/dERjeWiIjMIxr hAGAwAAIDIDAgMAACAyAwAAIDAgMgMAACAyAwIDAAAgMgMCAwAAIDIDAAAgMCAyAwAAIDIDAgMAA CAyAwAAIDAgMgMAACAwIDIDAAAgMgMCAwAAIDIDAAAgMCAyAwAAIDIDAgMAACAyAwIDAAAgMgMAA CAwIDIDAAAgMgMCAwAAIDIDAAAgMCAyAwAAIDAgMgMAACAyAwIDAAAgMgMAACAwIDIDAAAgMCMwh AAQGQGAABAYEBkBgAAQGQGBAYAAEBkBgAAQGBAZAYAAEBgQGQGAABAZAYBgRSbbpGIFT+GOA1xZ1 UNZzE/jkNwE4I3HTOQIfvUOAM1PYa2/VG5b1ATvUHe0zO56q0OUrJM8Upd2H2kl1uZZyAqfMJ8F3 tJXSN6he4WS+VXHLE4VNExY5ibStWxuprWx3mTROKnCyE5DCTneyw1VTa9n63+7l5JUTETjWoSLn QqKY4NUsiTs788ndWtrWPdsEgXtbCE3erex0YfXU1Lum5vb77e9cTCSJVdjKKr7u+iDnRN33tGRp QgJvzbHHUM8mc6/EuR54L8m7sh21O7wP8rY7vhSByxGLWwRZL6xq2VZSfQsUvWRqixZlHntLkUTg pTl2Z/WjqQcLzKW0Ei8WdXXHos3Td2E7bnd4E+R1meuRJ3ApE5vK/r0zq7mVf12HtNZQyPV669Dz qchjFjh1CHzb1D9NfTeRH83B9aEJrAnh6dt+Eq7sBLm87Sfj2hK47ukHx9Q6ePK6uFd2DK7t9ZXI fCHHIgVx13bCtLzf61qwjFngjbQQbVB+M4lvzb2FHJuDBdYEvrcTUtibtVK/txM3kwQecwtRSqvg 8t7YcfDa2jHZ23GpQp/n4j5LW/ZkrxcisbcVUxF4G8LyrieB01ALEXvghZyInZ2ABzt5l5I21Ynj pLco8KXI+6Gpz7LY8AS9lA/9TuR9lKS5t2P5EBYs25ELHBe0+uF+kmNyb8dqGRZxxdAiLonApUjt Qj/YCZrLYmas7UMUeCYCt/J+ysi3katTIT3ek4nrC5XbsFhZTETgXLuqEi/kKrXMtA+DLUScz6WQ InNpHXLyjj2B5yKwpqfOyXVas5FW7NZ6vO9ymTxotT3CBI4S68JWZ8DZ3ncogYuQAjvpVWpJ3lzv O8Yk1vGZ98CanCuppbUXczsWa0nfb1KawL6P3qH9SAXWmXjXHd/O+Xg98Cb78CnRWeeYJw9dYzTt g3XhpXeRfJF7KQI/BoE1ffVSuZvIGC3XD++L/M2d3mNRH7hz31G82zSVW8dFGKXpJW4jEvtCTRN4 Iwl8a3UXEnzT0ftO6dZy16313mNQHxn3xURahr5euAqXt51IvJApjQr8LCvr+9D35hYpU3qo56wH m+oz36Sc2MEuOy51Pn3wMaPf+CllCvFs0vrsdxXknUrbMOTXUdS/6o3f8IEuM5e6nQj8JFOaUiY4 3iMvMyvsKcv7n/R3cHo74Qs7fUbCJzVFWF2vi/5nXAGB/3eJVWQdL1Zhhd33Pw0AgX+LCYVuy8yK +qDRECDwrxQ5PtTOf4xF4NEcT8QFAICR8K8AAwAIdTqZA0NPugAAAABJRU5ErkJggg=="
        width={176}
        height={141}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(163.753 284)"
      />
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(0, "Nivel Estanque TK-01", false)}>
        <path
          d="M232.2 294h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3V300.3c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
          className="st3"
        />
        <path
          d="M172.9 301.4H330v99.8H172.9z"
          className={`${getTarjetaClass(0, selected)} st14`}
        />
        <text
          className="st46"
          transform="translate(238.134 346.076)">
          <tspan
            x={0}
            y={0}
            className="st1 st27 st28">
            {"Nivel"}
          </tspan>
          <tspan
            x={-35}
            y={16.8}
            className="st1 st27 st28">
            {"Estanque TK-01"}
          </tspan>
        </text>
        <g
          className={`${getTemaAlarma(0, loading, datosAlarmas)} cursorPointer`}
          onClick={() => {
            onClickAlarma(0, "Nivel Estanque TK-01");
          }}>
          <path
            d="M195.3 377.8c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st6"
          />
          <path
            d="M193.6 376.8c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM204.9 375.5c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st6"
          />
          <path
            d="M205.5 373.6c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM206.3 382.8v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM201.3 390.2c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st6"
          />
        </g>
        <text
          className="st29 st27 st47"
          transform="translate(232.577 388.853)">
          {nivelTk01}
        </text>
        <text
          className="st29 st27 st48"
          transform="translate(300.345 388.453)">
          {"%"}
        </text>
        <text
          className="st29 st27 st49"
          transform="translate(236.851 321.078)">
          {"TK-01"}
        </text>
      </g>

      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACNCAYAAAAXU/AtAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAByBJREFUeNrsmwtX2loQRpMQQdG+ 7vP//7+2FgEVBHKTu2bq1/EkBKytkr3XmhXKI13rsDNnZoJZBvCGyV/pueD0qX6XdHnH55EYjpG3 Olbs/MD36VEDeeFYiasQWeLYStlTXo9CjkV4LkdiOEBej50cd+G5vRLnPV4rJEYWpTwugtCUFNCn ZNhJbC028lhfbxW57JF1XdgmzuoY29GjFJHzPTUyILBmXpf2QWJtx41FZ0lRdsjrGddFPU/EuIfE APvkbaS9T0Rhr2/bMnFXBnZ5J3Vc1HFpcWXHqT3vEntJQQaGfRnYywSX966O2zqWdSzsOLLno/yd GVgzb2nyurQfJN7bc1N7z9jeTwaGvhl4Y/KuTN5G3Js6Zha+o0d5tcFLCuzZd2xlQiPqpzr+qONP O340iadSSpShkUNiSGXhKPC9CdzI+8129TORNzZ0eZvAWvuWJmUj6DsT+O86/q3jL5NYBT6jBoYj auCHIPCl7eiFvW8TGrqtPf9d4q4SIiXwPxYq8CQ0cWRf2JeFtYnzEmJqzhX2+kNo6FbyWmcTpxn4 QurfT5Z9NQNfyBQiF4GRGLoauV3IsFHelTVyc6uNtURtbeJSJYQ3ce+kgftoxysrH0qZPjCBgL6T iEqysCdAl3dhjdxlx5Cgs4RQic8t006zx/GZjtDKjFvJcFwtrMnP5dURbRwQPLnbW4Zs2XYTYxLC y4a27AvQV2IvKdo8axsQ/J+Fy5YtP2bi+PuHUeKkCAzHUCS8UudSmbe1hMiy7l+fxR/uIC8cS2rX TznWmSSLHv9JjqzwC6U+yLfiiBNniAwvJG52aKIsep4Q4DWUGUdnYIBX2wECIDAAAgMgMCAwAAID IDAAAgMCAyAwAAIDIDAgMAACAyAwIDAAAgMgMAACAwIDIDAAAgMgMCAwAAIDIDAAAgMCAyAwAAID AgMgMAACAyAwIDAAAgMgMAACAwIDIDAAAgMgMCAwAAIDIDAgMAACAyAwAAIDAgMgMAACAyAwIDAA AgMgMAACAwIDIDAAAgMCAyAwAAIDIDAgMAACAyAwAAIDAgMgMAACAwKzBIDAAAgMgMCAwAAIDIDA AAgMCAyAwAAIDIDAgMAACAyAwIDAAAgMgMAACAwIDPDGBa4sMjkC/GqqhI9HZeAqITViw88UtWpx 7VklRNUSAC8pcm/fyj0n2ckxxtCFzl9gqxyysG2OdbpWtiyinnCTiK1F8QJf5lsVN3+GsEPtNypx advimsr8ZP1KeSIPV0NzwgeLdR2rEP7ZnXx5+UAEjtFX5KqlORnablYFgVN+rcW/bcjE389RJk6s mbc5yX0dd3UsJc7s/c17RgPJxCpsYREfd13IVcuWWQ2wLKsk+W1N2GWIO3Nv3ZGJn5QQVZDXTzyv 46aOS5G3uTImdo7ihOVVKV3WkUUpx0JCP1slksNOSjEtyeKXVJ24xL4O7tl1Hd/Mtbk9twoSV6kS QlGBm6tgYSe9CPJeJgTOT1hgl7O0dWhibOH/LhPTnZhtNqE0061SM80pC1y1CNx49rmOL/Z4YQ6q wJ1TCK1/mw/d2pUwCfIuByZwLpnXxT23i1qPLvMorIf2FF6WeWmmW2VbvTcUgW9M3s+Wjefm4Dqs S68SYmUf9m3S5W0W/J19aeMBCeylgss7tYv4yuLSntsFiSuRdyX9xELiNtR724EJ7Lv93DLvtcWN rc2qbwlRhQW/l+3Qi+2FfVnnsm3ua2BOSeCJyPu+jg+2Tl4CTGXHcoE1IXg/MbMvay4SrwYgcJzA bMQ1v7B9jRaytsk1aSsh/Itbhbr43k46ke2yGEATl0v54AI3WfejdMxaz05tfQpbuwcTdCEZ5qvF TLbKVdeXdaJN3C77cVR7Z2vhu5Je1Lt9AmdhPqePXeCxlA6jhLynnoHHIvBcBNYZ5pWJPrJFX5u8 M5PW67yvkoVvB1JCVC0910aSwFouZl2PbF8TF7vmeGPDb2CULfPPUxQ4C+Mzr4GvwrxSGzPvEVxg 37muRd7PkoEXUgNvwyTi1AVO3fWN48Vet5Lb6hTtoosQQ7gDp2M0rYPvJPOqwEurjS/svS7wXAT+ Itn3JlH/nvoYLeVZ128hskMycCoT54n6OM+Gc+s4C6O0Vah5tX6bSwYuQwaeSf07M3mXoVEZyo2M 1PCg7RZ7K+UBJ28rE4byQx6dB+s2t0kIfGVlhpcQOoGYSYe9DBOMU5//9ikpskMu3vKZ/1E+sMXO w/amv6LyGfnCsu/EZK+yx5sXt9nTe/1DlvcgWZ8r8E/9j9/wQueJ5kNvVNxmj3NgF1h/GHWf/fhr q+1AxmYvQskSHH3RximNS+q/ixiJwPE3EJvs6WwTeZ/RoMDzphM+Jx5Jo6dTGs3U24S4yIvAv725 0yYvTmlSf6LFX30j8KsUOUscU3/NjbgI/CbXFHEBAOAE+E+AAQCyjj5dqxc3bAAAAABJRU5ErkJg gg=="
        width={176}
        height={141}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(733.753 284)"
      />
      {/* Nivel TK-03 */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(2, "Nivel Estanque TK-03", true)}>
        <path
          d="M802.6 294h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3V300.3c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
          className="st3"
        />
        <path
          d="M743.3 301.4h157.1v99.8H743.3z"
          className="st14"
        />
        <text
          className="st46"
          transform="translate(808.533 346.076)">
          <tspan
            x={0}
            y={0}
            className="st1 st27 st28">
            {"Nivel"}
          </tspan>
          <tspan
            x={-35}
            y={16.8}
            className="st1 st27 st28">
            {"Estanque TK-03"}
          </tspan>
        </text>
        {/* Alarma nivel tk-03 */}
        <g
          className={`${getTemaAlarma(2, loading, datosAlarmas)} cursorPointer`}
          onClick={() => {
            onClickAlarma(2, "Nivel Estanque TK-03");
          }}>
          <path
            d="M765.7 377.8c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st6"
          />
          <path
            d="M764 376.8c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM775.3 375.5c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st6"
          />
          <path
            d="M775.9 373.6c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM776.7 382.8v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM771.7 390.2c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st6"
          />
        </g>
        <text
          className="st29 st27 st47"
          transform="translate(802.976 388.853)">
          {nivelTk03}
        </text>
        <text
          className="st29 st27 st48"
          transform="translate(870.744 388.453)">
          {"%"}
        </text>
        <text
          className="st29 st27 st49"
          transform="translate(807.25 321.078)">
          {"TK-03"}
        </text>
      </g>
      <path
        d="M626.8 2265.8h102.4c2.1 0 3.8-1.7 3.8-3.8v-98c0-2.6 2.1-4.7 4.7-4.7h11.8"
        className="st50"
      />
      <path
        d="M748.4 2153.5c-1 0-1.9.9-1.9 1.9v9c0 1.1.9 1.9 1.9 1.9.5 0 .9-.2 1.3-.5l4.5-4.5c.7-.7.7-1.8.1-2.6l-.1-.1-4.5-4.5c-.3-.4-.8-.6-1.3-.6z"
        className="st44"
      />
      <path
        d="M748.4 2165.2c-.6 0-.9-.5-.9-1v-9c0-.5.4-.9.9-.9.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3m0 2c.8 0 1.5-.3 2-.9l4.5-4.5c1.1-1.1 1.1-2.7.2-3.9l-.1-.1-.1-.1-4.5-4.5c-.5-.5-1.3-.8-2-.8-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9z"
        className="st3"
      />
      <path
        d="M720.8 2265.8h112.4c2.1 0 3.8-1.7 3.8-3.8v-98c0-2.6 2.1-4.7 4.7-4.7h11.8"
        className="st50"
      />
      <path
        d="M852.4 2153.5c-1 0-1.9.9-1.9 1.9v9c0 1.1.9 1.9 1.9 1.9.5 0 .9-.2 1.3-.5l4.5-4.5c.7-.7.7-1.8.1-2.6l-.1-.1-4.5-4.5c-.3-.4-.8-.6-1.3-.6z"
        className="st44"
      />
      <path
        d="M852.4 2165.2c-.6 0-.9-.5-.9-1v-9c0-.5.4-.9.9-.9.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3m0 2c.8 0 1.5-.3 2-.9l4.5-4.5c1.1-1.1 1.1-2.7.2-3.9l-.1-.1-.1-.1-4.5-4.5c-.5-.5-1.3-.8-2-.8-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9z"
        className="st3"
      />
      <path
        d="M457.2 2130.9c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        className="st13"
      />
      <path
        d="M457.2 2119.2c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st3"
      />
      <path
        d="M204.1 2237.1h226.4c3.1 0 5.5-2.5 5.5-5.5v-104c0-1.8 1.4-3.2 3.2-3.2h20.5"
        className="st0"
      />
      <path
        d="M211.3 2253.9H80.2c-2.6 0-4.6-2.1-4.6-4.6V2226c0-2.6 2.1-4.6 4.6-4.6h131.1c2.6 0 4.6 2.1 4.6 4.6v23.2c.1 2.6-2 4.7-4.6 4.7z"
        className="st41"
      />
      <text
        className="st3 st30 st40"
        transform="translate(101.772 2241.563)">
        {"ABLANDADORES"}
      </text>
      <path
        d="M565 2236.7h28.1c3.7 0 6.7-3 6.7-6.7v-118.1c0-5.3 4.3-9.5 9.5-9.5h218.2c4.6 0 8.4 3.8 8.4 8.4v20.1c0 4.6 3.8 8.4 8.4 8.4h8.6M480.2 2215.8v17c0 2.2 1.8 4 4 4h67.5"
        className="st0"
      />
      <path
        d="M853.2 2145.2c-1 0-1.9-.9-1.9-1.9v-9c0-1.1.9-1.9 1.9-1.9.5 0 .9.2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.4-.8.6-1.3.6z"
        className="st13"
      />
      <path
        d="M853.2 2133.5c.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.5.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.7 0 1.5-.3 2-.8l4.5-3.5.1-.1.1-.1c.9-1.2.9-2.8-.2-3.9l-4.5-5.5c-.5-.6-1.2-.9-2-.9z"
        className="st3"
      />
      <path
        d="M745.2 2140.9h-3c-11 .4-10.3-9-10.3-9s-.1-8.7 0-19.3v-11"
        className="st0"
      />
      <path
        d="M748.2 2147.6c-1 0-1.9-.9-1.9-1.9v-9c0-1.1.9-1.9 1.9-1.9.5 0 .9.2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.4-.8.6-1.3.6z"
        className="st13"
      />
      <path
        d="M748.2 2135.9c.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.5.3-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.7 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.8-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st3"
      />
      <path
        d="M830.4 2233.8H956c4.2 0 7.6-3.4 7.6-7.6V2134c0-4.8 3.9-8.6 8.6-8.6h40.9M640.7 2140.9h-3c-11 .4-10.3-9-10.3-9s-.1-8.7 0-19.3v-11"
        className="st0"
      />
      <path
        d="M643.7 2147.6c-1 0-1.9-.9-1.9-1.9v-9c0-1.1.9-1.9 1.9-1.9.5 0 .9.2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.4-.8.6-1.3.6z"
        className="st13"
      />
      <path
        d="M643.7 2135.9c.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.5.3-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.7 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.8-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st3"
      />
      <path
        d="M677.9 2216.8v13c0 2.2 1.8 4 4 4h199.6"
        className="st0"
      />
      <path
        d="M565 2227.1h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6H565c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM549.8 2231l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st15"
      />
      <path
        d="m565.4 2241.6-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st15"
      />
      <path
        d="M557.6 2226.1v10"
        className="st16"
      />
      <path
        d="M548.6 2218.1h18M557.6 2219.1v8"
        className="st17"
      />
      <path
        d="M516 2196.9h3.7v11H516z"
        className="st15"
      />
      <path
        d="M525 2190.9c.7.8.7 2 0 2.8l-5.6 5.6c-.8.7-2 .7-2.8 0l-5.6-5.6c-.7-.8-.7-2 0-2.8"
        className="st15"
      />
      <path
        d="M496.9 2150.4h17c2.2 0 4 1.8 4 4v30.5"
        className="st36"
      />
      <path
        d="M511.6 2182.1c0-1 .9-1.9 1.9-1.9h9c1.1 0 1.9.9 1.9 1.9 0 .5-.2.9-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.4-.3-.6-.8-.6-1.3z"
        className="st15"
      />
      <path
        d="M523.3 2182.1c0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.5.4-.9.9-.9h9c.5 0 1 .3 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .7.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.8.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
        className="st3"
      />
      <path
        d="M713.8 2196.9h3.7v11h-3.7z"
        className="st15"
      />
      <path
        d="M722.8 2190.9c.7.8.7 2 0 2.8l-5.6 5.6c-.8.7-2 .7-2.8 0l-5.6-5.6c-.7-.8-.7-2 0-2.8"
        className="st15"
      />
      <path
        d="M694.7 2150.4h17c2.2 0 4 1.8 4 4v30.5"
        className="st36"
      />
      <path
        d="M709.4 2182.1c0-1 .9-1.9 1.9-1.9h9c1.1 0 1.9.9 1.9 1.9 0 .5-.2.9-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.4-.3-.6-.8-.6-1.3z"
        className="st15"
      />
      <path
        d="M721.1 2182.1c0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.5.4-.9.9-.9h9c.5 0 1 .3 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .7.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.8.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
        className="st3"
      />
      <path
        d="M647.3 2159.4h-17c-2.2 0-4 1.8-4 4v147.7"
        className="st50"
      />
      <path
        d="M643.7 2153.5c-1 0-1.9.9-1.9 1.9v9c0 1.1.9 1.9 1.9 1.9.5 0 .9-.2 1.3-.5l4.5-4.5c.7-.7.7-1.8.1-2.6l-.1-.1-4.5-4.5c-.3-.4-.8-.6-1.3-.6z"
        className="st44"
      />
      <path
        d="M643.7 2165.2c-.6 0-.9-.5-.9-1v-9c0-.5.4-.9.9-.9.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3m0 2c.8 0 1.5-.3 2-.9l4.5-4.5c1.1-1.1 1.1-2.7.2-3.9l-.1-.1-.1-.1-4.5-4.5c-.5-.5-1.3-.8-2-.8-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9z"
        className="st3"
      />
      <path
        d="M816.4 2196.9h3.7v11h-3.7z"
        className="st15"
      />
      <path
        d="M825.4 2190.9c.7.8.7 2 0 2.8l-5.6 5.6c-.8.7-2 .7-2.8 0l-5.6-5.6c-.7-.8-.7-2 0-2.8"
        className="st15"
      />
      <path
        d="M797.3 2150.4h17c2.2 0 4 1.8 4 4v30.5"
        className="st36"
      />
      <path
        d="M812 2182.1c0-1 .9-1.9 1.9-1.9h9c1.1 0 1.9.9 1.9 1.9 0 .5-.2.9-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.4-.3-.6-.8-.6-1.3z"
        className="st15"
      />
      <path
        d="M823.7 2182.1c0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.5.4-.9.9-.9h9c.5 0 1 .3 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .7.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.8.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
        className="st3"
      />
      <path
        d="M921.3 2196.9h3.7v11h-3.7z"
        className="st15"
      />
      <path
        d="M930.3 2190.9c.7.8.7 2 0 2.8l-5.6 5.6c-.8.7-2 .7-2.8 0l-5.6-5.6c-.7-.8-.7-2 0-2.8"
        className="st15"
      />
      <path
        d="M902.2 2150.4h17c2.2 0 4 1.8 4 4v30.5"
        className="st36"
      />
      <path
        d="M916.9 2182.1c0-1 .9-1.9 1.9-1.9h9c1.1 0 1.9.9 1.9 1.9 0 .5-.2.9-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.4-.3-.6-.8-.6-1.3z"
        className="st15"
      />
      <path
        d="M928.6 2182.1c0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.5.4-.9.9-.9h9c.5 0 1 .3 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .7.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.8.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
        className="st3"
      />
      <path
        d="M490.4 2211.2c10.6-4 14.6-3.2 14.6-14.6v-50.2c.1-5.8-4.8-10.5-10.8-10.5h-25.6c-6 .1-11 4.8-11.1 10.5v50.2c0 11.4 4 10.6 14.6 14.6l1.7 3.2c.8 1.9 1.9 3.5 4.2 3.5h7.1c2-.2 2.6-1.2 3.7-3.5l1.6-3.2zM489.2 2133.9h-15.9c-1.3 0-2.4-1.1-2.4-2.4v-9.9c0-1.3 1.1-2.4 2.4-2.4h15.9c1.3 0 2.4 1.1 2.4 2.4v9.9c0 1.3-1.1 2.4-2.4 2.4z"
        className="st45"
      />
      <path
        d="M465.2 2216.5v-13.3c0-.8.6-1.4 1.4-1.4h13.3c1.2 0 1.8 1.5 1 2.3l-13.3 13.3c-1 .9-2.4.3-2.4-.9z"
        className="st45"
      />
      <path
        d="M496.7 2216.5v-13.3c0-.8-.6-1.4-1.4-1.4H482c-1.2 0-1.8 1.5-1 2.3l13.3 13.3c.9.9 2.4.3 2.4-.9zM686.6 2211.2c10.6-4 14.6-3.2 14.6-14.6v-50.2c.1-5.8-4.8-10.5-10.8-10.5h-25.6c-6 .1-11 4.8-11.1 10.5v50.2c0 11.4 4 10.6 14.6 14.6l1.7 3.2c.8 1.9 1.9 3.5 4.2 3.5h7.1c2-.2 2.6-1.2 3.7-3.5l1.6-3.2zM685.3 2133.9h-15.9c-1.3 0-2.4-1.1-2.4-2.4v-9.9c0-1.3 1.1-2.4 2.4-2.4h15.9c1.3 0 2.4 1.1 2.4 2.4v9.9c.1 1.3-1 2.4-2.4 2.4z"
        className="st45"
      />
      <path
        d="M661.3 2216.5v-13.3c0-.8.6-1.4 1.4-1.4H676c1.2 0 1.8 1.5 1 2.3l-13.3 13.3c-.9.9-2.4.3-2.4-.9z"
        className="st45"
      />
      <path
        d="M692.9 2216.5v-13.3c0-.8-.6-1.4-1.4-1.4h-13.3c-1.2 0-1.8 1.5-1 2.3l13.3 13.3c.9.9 2.4.3 2.4-.9zM791 2211.2c10.6-4 14.6-3.2 14.6-14.6v-50.2c.1-5.8-4.8-10.5-10.8-10.5h-25.6c-6 .1-11 4.8-11.1 10.5v50.2c0 11.4 4 10.6 14.6 14.6l1.7 3.2c.8 1.9 1.9 3.5 4.2 3.5h7.1c2-.2 2.6-1.2 3.7-3.5l1.6-3.2zM789.8 2133.9h-15.9c-1.3 0-2.4-1.1-2.4-2.4v-9.9c0-1.3 1.1-2.4 2.4-2.4h15.9c1.3 0 2.4 1.1 2.4 2.4v9.9c0 1.3-1.1 2.4-2.4 2.4z"
        className="st45"
      />
      <path
        d="M765.8 2216.5v-13.3c0-.8.6-1.4 1.4-1.4h13.3c1.2 0 1.8 1.5 1 2.3l-13.3 13.3c-.9.9-2.4.3-2.4-.9z"
        className="st45"
      />
      <path
        d="M797.3 2216.5v-13.3c0-.8-.6-1.4-1.4-1.4h-13.3c-1.2 0-1.8 1.5-1 2.3l13.3 13.3c1 .9 2.4.3 2.4-.9zM894.3 2211.2c10.6-4 14.6-3.2 14.6-14.6v-50.2c.1-5.8-4.8-10.5-10.8-10.5h-25.6c-6 .1-11 4.8-11.1 10.5v50.2c0 11.4 4 10.6 14.6 14.6l1.7 3.2c.8 1.9 1.9 3.5 4.2 3.5h7.1c2-.2 2.6-1.2 3.7-3.5l1.6-3.2zM893.1 2133.9h-15.9c-1.3 0-2.4-1.1-2.4-2.4v-9.9c0-1.3 1.1-2.4 2.4-2.4h15.9c1.3 0 2.4 1.1 2.4 2.4v9.9c0 1.3-1.1 2.4-2.4 2.4z"
        className="st45"
      />
      <path
        d="M869.1 2216.5v-13.3c0-.8.6-1.4 1.4-1.4h13.3c1.2 0 1.8 1.5 1 2.3l-13.3 13.3c-1 .9-2.4.3-2.4-.9z"
        className="st45"
      />
      <path
        d="M900.6 2216.5v-13.3c0-.8-.6-1.4-1.4-1.4h-13.3c-1.2 0-1.8 1.5-1 2.3l13.3 13.3c.9.9 2.4.3 2.4-.9z"
        className="st45"
      />
      <path
        d="M782.6 2217.9v15.9M885.1 2217.9v15.9"
        className="st0"
      />
      <path
        d="M694.8 2240.1c-1 0-1.9-.9-1.9-1.9v-9c0-1.1.9-1.9 1.9-1.9.5 0 .9.2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.4-.8.6-1.3.6z"
        className="st13"
      />
      <path
        d="M694.8 2228.4c.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.5.3-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.7 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.8-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st3"
      />
      <path
        d="M799.2 2240.1c-1 0-1.9-.9-1.9-1.9v-9c0-1.1.9-1.9 1.9-1.9.5 0 .9.2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.4-.8.6-1.3.6z"
        className="st13"
      />
      <path
        d="M799.2 2228.4c.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.5.3-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.7 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.8-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st3"
      />
      <path
        d="M902.5 2240.1c-1 0-1.9-.9-1.9-1.9v-9c0-1.1.9-1.9 1.9-1.9.5 0 .9.2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.4-.8.6-1.3.6z"
        className="st13"
      />
      <path
        d="M902.5 2228.4c.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.5.3-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.7 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.8-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st3"
      />
      <path
        d="M642.9 2346.1c5.9-.3 6.5-4.2 6.5-8.9v-19.3c0-.4-.1-.9-.1-1.4h.1c0-8.8-10.2-15.9-23-15.9s-23 7.2-23 15.9h.1c-.1.5-.1.9-.1 1.4v19.3c0 4.6.5 8.4 6 8.9h33.5z"
        className="st15"
      />
      <text
        className="st29 st27 st43"
        transform="translate(608.133 2361.983)">
        {"SALERO"}
      </text>
      <path
        d="M1036.1 2216.8v13c0 2.2 1.8 4 4 4h51c3.9 0 7 3.1 7 7v103.1"
        className="st0"
      />
      <path
        d="M1072 2196.9h3.7v11h-3.7z"
        className="st15"
      />
      <path
        d="M1081 2190.9c.7.8.7 2 0 2.8l-5.6 5.6c-.8.7-2 .7-2.8 0l-5.6-5.6c-.7-.8-.7-2 0-2.8"
        className="st15"
      />
      <path
        d="M1052.9 2150.4h17c2.2 0 4 1.8 4 4v30.5"
        className="st36"
      />
      <path
        d="M1067.6 2182.1c0-1 .9-1.9 1.9-1.9h9c1.1 0 1.9.9 1.9 1.9 0 .5-.2.9-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.4-.3-.6-.8-.6-1.3z"
        className="st15"
      />
      <path
        d="M1079.3 2182.1c0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.5.4-.9.9-.9h9c.5 0 1 .3 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .7.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.8.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
        className="st3"
      />
      <path
        d="M1005.6 2159.4h-17c-2.2 0-4 1.8-4 4v137.7"
        className="st50"
      />
      <path
        d="M1001.9 2153.5c-1 0-1.9.9-1.9 1.9v9c0 1.1.9 1.9 1.9 1.9.5 0 .9-.2 1.3-.5l4.5-4.5c.7-.7.7-1.8.1-2.6l-.1-.1-4.5-4.5c-.3-.4-.8-.6-1.3-.6z"
        className="st44"
      />
      <path
        d="M1001.9 2165.2c-.6 0-.9-.5-.9-1v-9c0-.5.4-.9.9-.9.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3m0 2c.8 0 1.5-.3 2-.9l4.5-4.5c1.1-1.1 1.1-2.7.2-3.9l-.1-.1-.1-.1-4.5-4.5c-.5-.5-1.3-.8-2-.8-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9z"
        className="st3"
      />
      <path
        d="M1044.8 2211.2c10.6-4 14.6-3.2 14.6-14.6v-50.2c.1-5.8-4.8-10.5-10.8-10.5H1023c-6 .1-11 4.8-11.1 10.5v50.2c0 11.4 4 10.6 14.6 14.6l1.7 3.2c.8 1.9 1.9 3.5 4.2 3.5h7.1c2-.2 2.6-1.2 3.7-3.5l1.6-3.2zM1043.6 2133.9h-15.9c-1.3 0-2.4-1.1-2.4-2.4v-9.9c0-1.3 1.1-2.4 2.4-2.4h15.9c1.3 0 2.4 1.1 2.4 2.4v9.9c0 1.3-1.1 2.4-2.4 2.4z"
        className="st45"
      />
      <path
        d="M1019.6 2216.5v-13.3c0-.8.6-1.4 1.4-1.4h13.3c1.2 0 1.8 1.5 1 2.3l-13.3 13.3c-1 .9-2.4.3-2.4-.9z"
        className="st45"
      />
      <path
        d="M1051.1 2216.5v-13.3c0-.8-.6-1.4-1.4-1.4h-13.3c-1.2 0-1.8 1.5-1 2.3l13.3 13.3c.9.9 2.4.3 2.4-.9z"
        className="st45"
      />
      <path
        d="M1001.1 2336.1c5.9-.3 6.5-4.2 6.5-8.9v-19.3c0-.4-.1-.9-.1-1.4h.1c0-8.8-10.2-15.9-23-15.9s-23 7.2-23 15.9h.1c-.1.5-.1.9-.1 1.4v19.3c0 4.6.5 8.4 6 8.9h33.5z"
        className="st15"
      />
      <text
        className="st29 st27 st43"
        transform="translate(966.358 2351.983)">
        {"SALERO"}
      </text>
      <path
        d="M1012.4 2130.9c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        className="st13"
      />
      <path
        d="M1012.4 2119.2c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st3"
      />
      <path
        d="M1091.9 2342.7c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
        className="st13"
      />
      <path
        d="M1103.6 2342.7c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
        className="st3"
      />
      <path
        d="M1206.8 2450.7h44M1330 2428.2h-33.2"
        className="st0"
      />
      <path
        d="M1301.1 2423.5h-17.4c-1.1-.3-2.3-.4-3.4-.4-8 0-14.6 6.5-14.6 14.5v.1c0 3.9 1.5 7.6 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.7-2.7 4.2-6.4 4.2-10.3 0-1.4-.2-2.8-.6-4.2h6.8c1.5 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
        className="st12"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAuCAYAAACxkOBzAAAACXBIWXMAAA3+AAAN/gEmzVBtAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA9RJREFUeNrsmetS2zAQha1YSciF W4FSWqbv/2ClHVpIKAm526rcOcsctjK2nLT0RzRzxiaYzafV7motkmQ/9mM/9qMY5h/bd9sYs38Z sMoZ7q08ayquLgDoYqDtjiH5vqU+c0qJuq+EtjsAFZiWUqqAC5AcKu4z9XMltN0BqCE4C7UhS8AC WGjjtcY1I+WvAdstQcWLBVjHq+t1AHUhAc4Bt/Jaei1wXQJc4EuB7ZagKUALuAF06DXEfQ+TSAEh kDOvJ2jqNSf4NYXHC2C7JWgHQAXgidep1zvcH3n1MZEWwc4A+Oj10+sB1wk+NwBONLDdIkbbAD0G 4HuvS68LrzN8PkAopIjJFcEWkCOvO+gez5lApYiCDYEewKMF2AevT14fASywfXhfPLvGck/hzRFN Sp5zVDnk+jtBm4SBheEBlr3w6LXXZwBf4vMhJmQJYkPePQWoPJfiO7hiZPi72rDaqxbGi5g897oC 7DU8e47fcXJx6dpgokOK6ZQms6REXJFnTWzMSlL14ZVzhMAVrhdIrj7FKtdZWdYu7LQV6JwqhFSJ 5/prGxR+CYETwF4EkkqW36gdTDKcd7oEoAtUCEm8EWysJeliEkxCoIslPEbcneF6RB7lnUv3ELpn yJGox4E4biMkosJAww4AdwLjhxSjIdCy1ZKE6tGmMgjEu0loGeoMhu1j9kNa9jqgIZuyC3Zpm+Z4 bvHDdeLVqLLVxex7BJpGgupujRuh4KRbkdWAjerOKga0KpFNyFYr+X+G3rncNrBiiPtRbuvyBi+E LmB3QzZd3a7LBUBlu1ygYM9pp8noC0wEaIZJr1R/y9uti/Esw3KbxzuNfElWw8Pam0vYmEFzcsBz 52Ujl4thH1Uv2kfCtVSihN5wc/KoNOMT2Jxgy12qcIjqZ9mz3OLdY4M4UE2LVVuqCXh0TrbGsPdA q/UCNm1QYriQd6iA69qoszsjb8qyTwD43eur143XN68fgH4BnEbUwLJXG91Z5aon3agEks7qUYF+ AewtvDzF81lTz5adtLhASVupyjEjyDHC55Y8Kl69wzNzenmMjtlEJdmUPJqr1xXuwjrqLYATdIwl v4VKQWNgXSDRFgS6JoARYA8rYCeqdx3j759o+RvBhoDXAXh5a72jVq+tYCU0nqhcTfHzjErWH/Xa NIxZ/U4mlUFOY3qBExmepAAvaENZqu3b7QI21D6GzrpsSTnL1VnXRp15ubJGZpvzWRM47jQlJ4ih 2qtVCrmrw+TXDpBNoEa7krPaWofKuzr5Nq/YMxXdXO2T713/A8Q0qNv78ebjlwADAMXmvWhgwQZg AAAAAElFTkSuQmCC"
        width={42}
        height={44}
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        transform="translate(1263.182 2420.256) scale(.7921)"
      />
      <circle
        cx={1280.3}
        cy={2438}
        r={10.9}
        className="st3"
      />
      <circle
        cx={1280.3}
        cy={2437.8}
        r={8}
        className="st14"
      />
      <text
        className="st29 st27 st40"
        transform="translate(1270.68 2475.746)">
        {"P-08"}
      </text>
      <path
        d="M1252.5 2457.9c-1 0-1.9-.9-1.9-1.9v-9c0-1.1.9-1.9 1.9-1.9.5 0 .9.2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.4-.8.6-1.3.6z"
        className="st13"
      />
      <path
        d="M1252.5 2445.2c.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.5.3-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.7 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.8-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st3"
      />
      <path
        d="M1080 2366h133.8v97.7H1080z"
        className="st1"
      />
      <path
        d="M1213.6 2349.7v111.2c0 1.7-.6 3.1-1.2 3.1h-131c-.7 0-1.2-1.4-1.2-3.1v-111.2"
        className="st11"
      />
      <text
        className="st29 st27 st40"
        transform="translate(1134.158 2486.233)">
        {"TK-04"}
      </text>
      <path
        d="M1331.8 2418.2h16.4c.7 0 1.4.6 1.4 1.4v17.4c0 .7-.6 1.4-1.4 1.4h-16.4c-.7 0-1.4-.6-1.4-1.4v-17.4c.1-.8.7-1.4 1.4-1.4z"
        className="st45"
      />
      <path
        d="M1344.6 2414.6c0-1.1 1.3-1.7 2.1-.9l1.1 1.1v.1l11.7 11.8c.9.9.9 2.4 0 3.2l-11.7 11.8-1.1 1.1c-.8.8-2.1.2-2.1-.9v-27.3z"
        className="st45"
      />
      <image
        xlinkHref="data:image/png;base64,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"
        width={176}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(1125.753 2203)"
      />
      {/* Nivel Estanque TK-04 (TK-09) */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(4, "Nivel Estanque TK-04", false)}>
        <path
          d="M1194.6 2212.4h-53.1c-3.5 0-6.3 2.8-6.3 6.3V2321c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
          className="st3"
        />
        <path
          d="M1135.3 2219.8h157.1v99.8h-157.1z"
          className="st14"
        />
        <text
          className="st46"
          transform="translate(1200.459 2264.46)">
          <tspan
            x={0}
            y={0}
            className="st1 st27 st28">
            {"Nivel"}
          </tspan>
          <tspan
            x={-35}
            y={16.8}
            className="st1 st27 st28">
            {"Estanque TK-04"}
          </tspan>
        </text>
        {/* Alarma nivel estanque TK-04 */}
        <g
          className={`${getTemaAlarma(4, loading, datosAlarmas)} cursorPointer`}
          onClick={() => {
            onClickAlarma(4, "Nivel Estanque TK-04");
          }}>
          <path
            d="M1157.6 2296.1c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st6"
          />
          <path
            d="M1155.9 2295.1c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM1167.2 2293.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st6"
          />
          <path
            d="M1167.8 2291.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM1168.6 2301.1v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1163.6 2308.5c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st6"
          />
        </g>
        <text
          className="st29 st27 st47"
          transform="translate(1194.902 2307.238)">
          {nivelTk09}
        </text>
        <text
          className="st29 st27 st48"
          transform="translate(1262.67 2306.838)">
          {"%"}
        </text>
        <text
          className="st29 st27 st49"
          transform="translate(1201.176 2239.463)">
          {"TK-09"}
        </text>
      </g>
      <image
        xlinkHref="data:image/png;base64,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"
        width={176}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(664.753 659)"
      />

      {/* Caudal de Alimentación */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(7, "Caudal de Alimentación", false)}>
        <path
          d="M733.7 668.6h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3V674.9c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
          className="st3"
        />
        <path
          d="M674.4 676h157.1v99.8H674.4z"
          className="st14"
        />
        <text
          className="st46"
          transform="translate(732.953 720.65)">
          <tspan
            x={0}
            y={0}
            className="st1 st27 st28">
            {"Caudal"}
          </tspan>
          <tspan
            x={-27.6}
            y={16.8}
            className="st1 st27 st28">
            {"de Alimentaci\xF3n"}
          </tspan>
        </text>
        {/* Alarma Caudal de Alimentación */}
        <g
          className={`${getTemaAlarma(7, loading, datosAlarmas)} cursorPointer`}
          onClick={() => onClickAlarma(7, "Caudal de Alimentación")}>
          <path
            d="M696.8 752.3c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st6"
          />
          <path
            d="M695.1 751.3c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM706.4 750c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st6"
          />
          <path
            d="M707 748.1c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM707.8 757.3v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM702.8 764.7c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st6"
          />
        </g>
        <text
          className="st29 st27 st47"
          transform="translate(734.02 763.428)">
          {caudalAlimentacion}
        </text>
        <text
          className="st29 st27 st48"
          transform="translate(794.787 763.028)">
          {"m"}
        </text>
        <text
          className="st29 st27 st48"
          transform="matrix(.583 0 0 .583 805.616 758.699)">
          {"3"}
        </text>
        <text
          className="st29 st27 st48"
          transform="translate(809.83 763.028)">
          {"/h"}
        </text>
        <text
          className="st29 st27 st49"
          transform="translate(743.293 695.652)">
          {"FIT218"}
        </text>
      </g>

      <image
        xlinkHref="data:image/png;base64,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"
        width={177}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(494.753 659)"
      />
      {/* E.C de Alimentación */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(9, "EC de Alimentación", false)}>
        <path
          d="M564 668.6h-53c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3V674.9c0-3.5-2.8-6.3-6.3-6.3H564z"
          className="st3"
        />
        <path
          d="M504.7 676h157.1v99.8H504.7z"
          className="st14"
        />
        <text
          className="st46"
          transform="translate(573.84 720.65)">
          <tspan
            x={0}
            y={0}
            className="st1 st27 st28">
            {"E.C"}
          </tspan>
          <tspan
            x={-38.1}
            y={16.8}
            className="st1 st27 st28">
            {"de Alimentaci\xF3n"}
          </tspan>
        </text>
        {/* Alarma E.C de Alimentación */}
        <g
          className={`${getTemaAlarma(9, loading, datosAlarmas)} cursorPointer`}
          onClick={() => onClickAlarma(9, "E.C de Alimentación")}>
          <path
            d="M527.1 752.3c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st6"
          />
          <path
            d="M525.4 751.3c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM536.7 750c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st6"
          />
          <path
            d="M537.3 748.1c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM538.1 757.3v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM533.1 764.7c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st6"
          />
        </g>
        <text
          className="st29 st27 st47"
          transform="translate(564.393 763.428)">
          {ecAlimentacion}
        </text>
        <text
          className="st29 st27 st48"
          transform="translate(616.16 763.028)">
          {"\xB5S/cm"}
        </text>
        <text
          className="st29 st27 st49"
          transform="translate(570.667 695.652)">
          {"AI230"}
        </text>
      </g>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACMCAYAAADcDyOIAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABvNJREFUeNrsm4lym1gQRQGhxUvi LLP8//dNxnFsLZYQYqCq3+RW5wGSJadsOKeqS5Zs4RgdmvsakiQA75j0jWwDxkv1u+RLO96HxHAJ eatTxc5PEDeNFPLCpSSuXB0lcn6kuJk8anmZAU6VN9TBVXitU+K04/VUpJ1Y5e5RRSZSwEsiQxC2 rGtvVUqp0Ed14NR12+ZnpnXNpKZWQey0JyMDxDJu5cTduSrs+0mbxHlHBw6dthF2UdeV1EJEzl2c ADg2OhxM3EbUbV3PdW2knk3kpE3iPCJuJvLOTdhbqw/2eOMkDt2aDgzHduAQDQqTtBF2VdeT1UQ8 8ou7qkvg0H2nJmkj7Cerz/bYiHxtgmseRlw4VuSQe0P3DfI+mFcT97MaOaId2C/aZibpRxP3z7r+ qOtLXXcm9lyyMBMJOHXyEARuosLS5F2Il6Vk5PC1duXWCBHiw7V12y8m8N8m8ScTeOEEJj7AsTFC Bd6YwNfmU2LSbqV25uahK0IkIvDM8u8HE/arSfyXCDyXDEz3hZcs4kIHVnnDayurtTlZeMfaIkQu GfjGJL6zKPFZBJ65KQQdGE7pwGEK8SwuFibsoxsW+GlXZ4TIkp+z34UdHbeubuz7EyYQcMYkYi8e 7k3e4NdV36Agd9L5hVyIEnOrhdU8+XlRw4/QAI7lIO4Et66cY9PIWb41QvhOHCTOZUO5HBGMz+Ac UvEwOObLd19ttlXXpeSum3i4mQcuhXdq4ppjzLP/M3B2xBHSdhslwKW7sW+evdOt7AUbTxAZXjlS HH2/edYjLFMF+J3d9+TmyPQA3ltHRmAY1goQAIEBEBgAgQGBARAYAIEBEBgQGACBARAYAIEBgQEQ GACBAYEBEBgAgQEQGBAYAIEBEBgAgQGBARAYAIEBEBgQGACBARAYEBgAgQEQGACBAYEBEBgAgQEQ GBAYAIEBEBgAgQGBARAYAIEBgQEQGACBARAYEBgAgQEQGACBAYEBEBgAgQEQGBAYAIEBEBgQGACB ARAYAIEBgQEQGACBARAYEBgAgQEQGBCYXQAIDIDAAAgMCAyAwAAIDIDAgMAACAyAwAAIDAgMgMAA CAwIDIDAAAgMgMCAwABvg0oeq1MErtybAV5b1F5Zz+nA1Tm/BOCMjludI3DVUgCv1YVDHaw6nct7 NnRwG/M1dqHTC3adsUrrnSqlvGe/dOW8ZUdWsrG9VSFf7+WXVCNcDKZnCF11nDbHRswxX3uR+ReJ c3mSus4bNryra2v1bLWQ906cwOlIBPbVJ3LVkvPGFs0qJ3BwLLi1scetvR4kPsT2Ud7R0gvZ8Lqu pdW1vK+wrzP50NKRiJvJ361fx/ZDV75rO02OYaEWBH42t57Es5XJvI104aQtQuhGC9vwyjb8w+Sd 2s8135/b86ylEw0tMqisE6tcHjOprqy3lzNcLO8NPVKoa8GzxrHvVg/2fGXf27kuXHUt4rStb2xD DxIbKjsqVvba1D7AIXfgVKY2me2HqdXMKjzPXbcOO7x0OW8np0g9TR4GLrAeoKX97Rvruo28/9T1 r0i8iQjcGyH2JunaNjIzSSvbWCPvrXTgSUceHFJ0CJ03iNscwFdWC6uZdOXUyeuz3kY6TNGyWBny uKyUDrw0aRt5v5nMKvBJEaK0N61lkVbJ0fJocWIuH1Y28AiRSlQI8l7bgRxqb6+H/RIE3ssieCU5 b2n7WE+T5QiysHpWyBk9nO2/twhc9UWI2JERpAwfQrPTb6TbTCO5Lx24wHOR90Ndn0TCIHLYLwd3 mny09cSDLFrWbrEyVIH9BEKHBRuR+MllYD07HTWFUAl92F46efORLOJSiQ9B4EbeO7di3kq8CgJv Rd6ms9zb4w/7oILAxYg6sB8YbF200njVGq3yjl9QRn5RyMVTyb6TiLxD78AzEfhJYoDm24X9fOlW 2feW8+6lC69HEiGqlrP9XtYIO7fALdvyb5vAlbR4L/DOjY6yluw7xE6s47OQgcNpbi0dY2NiX4nA GxH4mwkcOvAy0mkOA59AxMaLKnLZMV7sFdiPOvyRkiW/Du6HfvVNx2iag/Wq0VYi1seIwI/Wce/d rNPn36GP0domErH7bF50M0/saCntQzxEpB3LpePEjdL0UufOCXwbiRBLkTh03tgiZWz3RvRdWu/c D/kLcksyksjQlYUzd5or3CL3Ovk5O9eRpI7PNiLvPhnn3X3VEa4l5wrct/F0ZDs9TeK3AIZFrl6h DPumSOI3q4xZ3pNEvYTAr/IPeKc7PI1kN738rlcnda7uLx+XCfdVXyTbwXlxInPTGb0yqVedSrdY Q14EfjPTiTQyoYmNi3SFnSAvAr+lbpy654lbYScJ/7cQgd/R/kx7VtoAAADvlP8EGABqvhg/u4lo WgAAAABJRU5ErkJggg=="
        width={176}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(937.753 639)"
      />
      {/* Presión de Osmosis */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(5, "Presión de Osmosis", false)}>
        <path
          d="M1006.4 648.6h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3V654.9c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
          className="st3"
        />
        <path
          d="M947.1 656h157.1v99.8H947.1z"
          className="st14"
        />
        <text
          className="st46"
          transform="translate(1004.136 700.65)">
          <tspan
            x={0}
            y={0}
            className="st1 st27 st28">
            {"Presi\xF3n"}
          </tspan>
          <tspan
            x={-13.2}
            y={16.8}
            className="st1 st27 st28">
            {"de Osmosis"}
          </tspan>
        </text>
        {/* Alarma Presión de Osmosis */}
        <g
          className={`${getTemaAlarma(5, loading, datosAlarmas)} cursorPointer`}
          onClick={() => onClickAlarma(5, "Presión de Osmosis")}>
          <path
            d="M969.5 732.3c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st6"
          />
          <path
            d="M967.8 731.3c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM979.1 730c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st6"
          />
          <path
            d="M979.7 728.1c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM980.5 737.3v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM975.5 744.7c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st6"
          />
        </g>
        <text
          className="st29 st27 st47"
          transform="translate(1006.755 743.428)">
          {presionOsmosis}
        </text>
        <text
          className="st29 st27 st48"
          transform="translate(1067.522 743.028)">
          {"bar"}
        </text>
        <text
          className="st29 st27 st49"
          transform="translate(1013.029 675.652)">
          {"PT222"}
        </text>
        <path
          d="M936.3 990.8c-1 0-1.9-.9-1.9-1.9v-9c0-1.1.9-1.9 1.9-1.9.5 0 .9.2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.4-.8.6-1.3.6z"
          className="st13"
        />
        <path
          d="M936.3 978.1c.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.5.3-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.7 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.8-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
          className="st3"
        />
        <path
          d="M1334.5 807.8c0 1-.9 1.9-1.9 1.9h-9c-1.1 0-1.9-.9-1.9-1.9 0-.5.2-.9.5-1.3l4.5-4.5c.7-.7 1.8-.7 2.6-.1l.1.1 4.5 4.5c.4.3.6.8.6 1.3z"
          className="st13"
        />
        <path
          d="M1321.8 807.8c0-.2.1-.4.3-.6l4.5-4.5c.4-.3.9-.3 1.3 0l4.5 4.5c.2.2.3.4.3.6 0 .5-.4.9-.9.9h-9c-.5 0-1-.3-1-.9m-2 0c0 1.6 1.3 2.9 2.9 2.9h9c1.6 0 2.9-1.3 2.9-2.9 0-.7-.3-1.5-.8-2l-4.5-4.5-.1-.1-.1-.1c-1.2-.9-2.8-.9-3.9.2l-4.5 4.5c-.6.5-.9 1.2-.9 2z"
          className="st3"
        />
      </g>
      <circle
        cx={1024.2}
        cy={796.5}
        r={9.2}
        className="st22"
      />
      <image
        xlinkHref="data:image/png;base64,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 TkSuQmCC"
        width={179}
        height={122}
        style={{
          overflow: "visible",
          opacity: 0.2
        }}
        transform="translate(1154.249 1226.496)"
      />
      {/* Nivel Estanques TK-05 y TK-06 */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(3, "Nivel Estanques TK-05 y TK-06", false)}>
        <path
          d="M1218 1339.4h-42.1c-3.5 0-6.3-2.8-6.3-6.3v-33.2c0-.8-.3-1.6-.8-2.2l-5.3-6.5c-1.1-1.4-1-3.3.1-4.6l5.1-5.5c.6-.7.9-1.5.9-2.4v-36.9c0-3.5 2.8-6.3 6.3-6.3h142.5c3.5 0 6.3 2.8 6.3 6.3v91.3c0 3.5-2.8 6.3-6.2 6.3H1218z"
          className="st3"
        />
        <path
          d="M1174.8 1235.5h143.8v103.9h-143.8z"
          className="st14"
        />
        <text
          className="st46"
          transform="translate(1194.42 1283.19)">
          <tspan
            x={0}
            y={0}
            className="st1 st27 st28">
            {"Nivel Estanques"}
          </tspan>
          <tspan
            x={5.1}
            y={16.8}
            className="st1 st27 st28">
            {"TK-05 y TK-06"}
          </tspan>
        </text>
        {/* Alarma Nivel Estanques TK-05 y TK-06 */}
        <g
          className={`${getTemaAlarma(3, loading, datosAlarmas)} cursorPointer`}
          onClick={() => onClickAlarma(3, "Nivel Estanques TK-05 y TK-06")}>
          <path
            d="M1188.9 1313.9c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st6"
          />
          <path
            d="M1187.2 1312.9c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM1198.5 1311.6c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st6"
          />
          <path
            d="M1199.1 1309.7c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM1199.9 1318.9v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1194.9 1326.3c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st6"
          />
        </g>
        <text
          className="st29 st27 st47"
          transform="translate(1224.984 1324.967)">
          {nivelTk05yTk06}
        </text>
        <text
          className="st29 st27 st49"
          transform="translate(1228.798 1259.191)">
          {"AE015"}
        </text>
        <text
          className="st29 st27 st48"
          transform="translate(1286.9 1324.966)">
          {"%"}
        </text>
      </g>
      <circle
        cx={1128.4}
        cy={901.7}
        r={9.2}
        className="st22"
      />
      <circle
        cx={751.9}
        cy={818.4}
        r={9.2}
        className="st22"
      />
      <image
        xlinkHref="data:image/png;base64,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 BgA4WTuHiGGQdAAAAABJRU5ErkJggg=="
        width={176}
        height={141}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(519.753 1160)"
      />
      {/* Temperatura Estanque TK-06 */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(13, "Temperatura Estanque TK-06", false)}>
        <path
          d="M588.7 1170h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
          className="st3"
        />
        <path
          d="M529.4 1177.4h157.1v99.8H529.4z"
          className="st14"
        />
        <text
          className="st46"
          transform="translate(570.063 1222.045)">
          <tspan
            x={0}
            y={0}
            className="st1 st27 st28">
            {"Temperatura"}
          </tspan>
          <tspan
            x={-10.5}
            y={16.8}
            className="st1 st27 st28">
            {"Estanque TK-06"}
          </tspan>
        </text>
        {/* Alarma Temperatura Estanque TK-06 */}
        <g
          className={`${getTemaAlarma(13, loading, datosAlarmas)} cursorPointer`}
          onClick={() => {
            onClickAlarma(13, "Temperatura Estanque TK-06");
          }}>
          <path
            d="M551.8 1253.7c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st6"
          />
          <path
            d="M550.1 1252.7c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM561.4 1251.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st6"
          />
          <path
            d="M562 1249.5c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM562.8 1258.7v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM557.8 1266.1c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st6"
          />
        </g>
        <text
          className="st29 st27 st47"
          transform="translate(589.02 1264.823)">
          {temperaturaTk06}
        </text>
        <text
          className="st29 st27 st48"
          transform="translate(649.787 1264.423)">
          {"C\xB0"}
        </text>
        <text
          className="st29 st27 st49"
          transform="translate(598.293 1197.047)">
          {"TK-06"}
        </text>
      </g>
      <circle
        cx={606.9}
        cy={1319.8}
        r={9.2}
        className="st22"
      />
      <circle
        cx={583.2}
        cy={818.4}
        r={9.2}
        className="st22"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACMCAYAAADcDyOIAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABwtJREFUeNrsm4lym1gQRQEhW94m Ts1S8//fN9ls2VqBQVPdNdedB0JeUjacU9UlWbFx8nRo7muULAP4wOTv5BgwXZpfJV/e83NIDK8h b3Oq2OUJ4uaJQl54LYmbUINELgfIe6hCHrWizACnyutVh/LXekUuj8jros6kSqtZEJlIAc+JDC5s 1dY+PFYic1Li8oi8Lu28rbNQKnJ+JCMDpDJuI6LurLZSO5O5lm7cHBNY5S1N1kVbF1KHr89N7DLE CYCh0aE2QV3cdVsrqbU5tU9k46TAeRD4zIS9autG6spePzOJPUrQgWFoB/auqvI+tLVs6168ysPP aqRIduBCYsPCZL1t67PVrUjsXXjWkYUBukTW3Ltp69HE/W5elYmcXJtjSYF1oqDd98bE/bOtP9r6 3SS+NsHnIQcjMQydPHj23Vjn/WHOzc0jldw3do1KXPbk3yjwQd6/TeTPJvBFEJj4AENjhAq8NoGv zLvc/mxrcm/s+T57OlrrFLgMAt9a5z3I+5cJfCMdmE0cPHcT5x3YI6lv2jwTe5Vhn9UZIYowfbgS iT9LeYQoQ/5FYhjagX0KsZXYsLM8fGfueZOM066jEaK0M8KnENdWN/L8LHFmIDCcMomoTNDMZH40 ty5N3jjpyvsiRIwRfgPjPPt/FryQA5/JBALgVGrzx+V1t86tvEHOEjH1vy5chq6ZJ7rwPFF6F25G 14VnolOvUio6FjtvMkKkPnWW+ixE1wd6AJ4rcdFReXbkQ2PFgLMj9ckzhIW37MiDXSsGHDDL+Pwv /Bpxs1ObZPHCXwLw1mL3+lYMlBXgXcL4CxAYAIEBEBgQGACBARAYAIEBgQEQGACBARAYEBgAgQEQ GBAYAIEBEBgAgQGBARAYAIEBEBgQGACBARAYAIEBgQEQGACBAYEBEBgAgQEQGBAYAIEBEBgAgQGB ARAYAIEBEBgQGACBARAYEBgAgQEQGACBAYEBEBgAgQEQGBAYAIEBEBgAgQGBARAYAIEBgQEQGACB ARAYEBgAgQEQGACBAYEBEBgAgQEQGBAYAIEBEBgQGACBARAYAIEBgQEQGACBARAYEBgAgQEQGACB AYEBEBgAgQGBAUYgcGOVySPAh+7AUWrEhrfmqG/FMw6AuPAWokbXBnlWDDhobdWcenCAZ4o82LWy p9uqvJVUHSqf8ILnr/SmTV3YuqOaRPNMCtzYm6EHPMi6b2uXqL1VMdFpRv4CoZuemDY16uDaXpzz 55VI/NMalh0LXMuBtm1t2lq3tbLHtfxsGQTOJyJwrGMiNz1XuinFsiYIXAXH1vZ8Y69HiZ+sY9kh r58RG5P2oa2l1aX83EIEzicgsApbyL9bn6fWoemIZl17jKlMFrxRbsUvr0eTeWuNtE504p8ycDzo 2uS9b+u7yTu379+bwPPEmzfWyKCyzqxKeSykUo2hlvWt5LFKvEHNyCX2NdlZo1yaY9/a+mHOPZiD HiliF+7swC7wSuRdiLw7O0Mu7LXZyDtwLlm/sHWbW51Z+ddl6Na+4HFPsZXuom9QPXKB9QSt7N++ FoH/aeuLPb83B7eyPp1TiBghVOBz+V6X91qknvXkwTFFB++8Lu7CTuILe76w10tZE5V3KzlvJXsK FzmV9cY8KqtCBz503q8m8Vdz79H+fD8kQuiZ4QL7pdJjw2HB79q6MrFd4GLkESKXqODyXtqJ7OWx yk94F3gvm5SHnqznkWLsWTi113qUq/03e7yz17ddJ3fZMdrQ1u5SVvaLHkzeC7l0FiOfRESBz0Xe m7ZuRUIX2dfFc97KhL2zTuOXyGXoMmMWuEmM0HZhv7WUdVlKBk6uS9nxCzRGaFd2gRfSfcuJbOJy iQ8u8EHeT7YmKxn/XNv3uMAbkfebXR51s+IC7ybUgVPjWo1Wq8SVqT4msLb31MbOW73nvDLk36l0 4DMR+F5igObbhX1/Za/di7xf7PG7/PwUIkSTkLiSK75ubreJ6UN2bBOXkrgJuVjFLTqy7xg7sY7P PAP7qOdROsbKxL4QgVcisO+yvQMvpdNUYRIxZoHjeLHqGS8evZXcJ7EKXNhZEQf3Y7/7pmM0zcEu 7UY2aQchf0sIfGcd96tsUu4T+XfsY7SuiUTf5yCyUztwPGMqexPrhLRTuXWchVHaRi5z2yDwdSJC LEVi77wPYZMylRsZWcf0K3VrffCn0YbmlmwikaEvCxfZ00/o7bKnA/lLixkziV6PYXy2yo7cZZqQ vH2uZS8V+NjB84ktep643Ok806c0c1mbXdjgrWXqMFV5TxL1NQR+k7/AB13wPJHd9Pa73p3UO07x 9nE1cXlfLdvBy+KEbu5m2dM7k3rXqQqbNeRF4HcznVCZ42ix6dhhZ8iLwO+pG+fh6yzssLOM/1eI wB9oPfMjO20AAIAPyr8CDADVPRCglSr6TQAAAABJRU5ErkJggg=="
        width={176}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(1209.753 639)"
      />
      {/* Caudal de Permeado */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(8, "Caudal de Permeado", false)}>
        <path
          d="M1278.7 648.6h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3V654.9c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
          className="st3"
        />
        <path
          d="M1219.4 656h157.1v99.8h-157.1z"
          className="st14"
        />
        <text
          className="st46"
          transform="translate(1277.947 700.65)">
          <tspan
            x={0}
            y={0}
            className="st1 st27 st28">
            {"Caudal"}
          </tspan>
          <tspan
            x={-19.8}
            y={16.8}
            className="st1 st27 st28">
            {"de Permeado"}
          </tspan>
        </text>
        {/* Alarma Caudal de Permeado */}
        <g
          className={`${getTemaAlarma(8, loading, datosAlarmas)} cursorPointer`}
          onClick={() => onClickAlarma(8, "Caudal de Permeado")}>
          <path
            d="M1241.8 732.3c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st6"
          />
          <path
            d="M1240.1 731.3c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM1251.4 730c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st6"
          />
          <path
            d="M1252 728.1c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM1252.8 737.3v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1247.8 744.7c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st6"
          />
        </g>
        <text
          className="st29 st27 st47"
          transform="translate(1279.014 743.428)">
          {caudalPermeado}
        </text>
        <text
          className="st29 st27 st48"
          transform="translate(1336.782 743.028)">
          {"m"}
        </text>
        <text
          className="st29 st27 st48"
          transform="matrix(.583 0 0 .583 1347.61 738.698)">
          {"3"}
        </text>
        <text
          className="st29 st27 st48"
          transform="translate(1351.825 743.028)">
          {"/h"}
        </text>
        <text
          className="st29 st27 st49"
          transform="translate(1261.288 675.652)">
          {"FIT218 - FIT227"}
        </text>
      </g>
      <circle
        cx={1298.4}
        cy={796.5}
        r={9.2}
        className="st22"
      />
      <path
        d="M433.3 905.1h-64.4"
        className="st0"
      />
      <path
        d="M429.1 911.3c-1 0-1.9-.9-1.9-1.9v-9c0-1.1.9-1.9 1.9-1.9.5 0 .9.2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.4-.8.6-1.3.6z"
        className="st13"
      />
      <path
        d="M429.1 899.6c.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.5.3-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.7 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.8-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st3"
      />
      <path
        d="M370.2 894.8h-14.8c-.9 0-1.6-.2-1.6-.4v-3.7c0-.2.7-.4 1.6-.4h14.8c.9 0 1.6.2 1.6.4v3.7c0 .2-.7.4-1.6.4zM355 898.7l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st15"
      />
      <path
        d="m370.6 909.3-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st15"
      />
      <path
        d="M362.8 893.8v10"
        className="st16"
      />
      <path
        d="M353.9 1300.5v270.4c0 4.5-3.7 8.2-8.2 8.2h-63.6c-4.7 0-8.6 3.9-8.6 8.6v259.7"
        className="st0"
      />
      <path
        d="M279.8 1846.1c0-1-.8-1.9-1.9-1.9h-9c-1 0-1.9.8-1.9 1.9 0 .5.2 1 .5 1.3l4.5 4.5c.7.7 1.8.7 2.6.1l.1-.1 4.5-4.5c.5-.4.6-.8.6-1.3z"
        className="st13"
      />
      <path
        d="M268.1 1846.1c0-.5.4-.9 1-.9h9c.6 0 .9.5.9.9 0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-1 .3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6m-2 0c0 .8.3 1.5.9 2l4.5 4.5c1 1.1 2.7 1.1 3.9.2l.1-.1.1-.1 4.5-4.5c.5-.5.8-1.2.8-2 0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9z"
        className="st3"
      />
      <path
        d="M381.6 1647.6h49.1M209.1 1861.7H333c3.3 0 6-2.7 6-6v-204.3c0-2 1.6-3.7 3.7-3.7h28.7"
        className="st21"
      />
      <path
        d="M384.5 1637.6h-14.8c-.9 0-1.6-.2-1.6-.4v-3.7c0-.2.7-.4 1.6-.4h14.8c.9 0 1.6.2 1.6.4v3.7c0 .3-.7.4-1.6.4zM369.3 1641.5l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st15"
      />
      <path
        d="m384.9 1652.1-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st15"
      />
      <path
        d="M377.1 1636.6v10"
        className="st16"
      />
      <path
        d="M429.4 1654.4c-1 0-1.9-.9-1.9-1.9v-9c0-1.1.9-1.9 1.9-1.9.5 0 .9.2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.4-.8.6-1.3.6z"
        className="st13"
      />
      <path
        d="M429.4 1642.7c.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.5.3-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.7 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.8-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st3"
      />
      <path
        d="M429.4 1870.6c-1 0-1.9-.9-1.9-1.9v-9c0-1.1.9-1.9 1.9-1.9.5 0 .9.2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.4-.8.6-1.3.6z"
        className="st13"
      />
      <path
        d="M429.4 1858.9c.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.5.3-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.7 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.8-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st3"
      />
      <path
        d="M406.7 1647.7v210.4c0 3.5 2.8 6.3 6.3 6.3h13"
        className="st21"
      />
      <path
        d="M633.6 1894.4h-26.3c-2.8 0-5-2.2-5-5v-21h-44.2M602.9 1868.4h30.4M677.7 1901.4v95.9"
        className="st0"
      />
      <path
        d="M684 1996.7c0-1-.8-1.9-1.9-1.9h-9c-1 0-1.9.8-1.9 1.9 0 .5.2 1 .5 1.3l4.5 4.5c.7.7 1.8.7 2.6.1l.1-.1 4.5-4.5c.5-.4.6-.8.6-1.3z"
        className="st13"
      />
      <path
        d="M672.3 1996.7c0-.5.4-.9 1-.9h9c.6 0 .9.5.9.9 0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-1 .3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6m-2 0c0 .8.3 1.5.9 2l4.5 4.5c1 1.1 2.7 1.1 3.9.2l.1-.1.1-.1 4.5-4.5c.5-.5.8-1.2.8-2 0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9z"
        className="st3"
      />
      <path
        d="M764.9 1895h26.4c2.8 0 5-2.2 5-5v-21"
        className="st0"
      />
      <path
        d="M765.4 1881.3h-132c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.8 3.8-6 3.8z"
        className="st12"
      />
      <path
        d="M766.7 1881.3h-133c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.9-.2.9z"
        className="st1"
      />
      <path
        d="M765.4 1906.4h-132c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.8 3.8-6 3.8z"
        className="st12"
      />
      <path
        d="M766.7 1906.4h-133c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.9-.2.9z"
        className="st1"
      />
      <path
        d="M675.2 2012.2h3.7v11h-3.7z"
        className="st15"
      />
      <path
        d="M684.2 2006.2c.7.8.7 2 0 2.8l-5.6 5.6c-.8.7-2 .7-2.8 0l-5.6-5.6c-.7-.8-.7-2 0-2.8"
        className="st15"
      />
      <path
        d="M567 1897H449.4c-2.6 0-4.6-2.1-4.6-4.6V1842c0-2.6 2.1-4.6 4.6-4.6H567c2.6 0 4.6 2.1 4.6 4.6v50.4c0 2.5-2.1 4.6-4.6 4.6z"
        className="st44"
      />
      <text
        className="st46"
        transform="translate(487.85 1857.495)">
        <tspan
          x={0}
          y={0}
          className="st3 st30 st40">
          {"PLANTA  "}
        </tspan>
        <tspan
          x={-12.8}
          y={14}
          className="st3 st30 st40">
          {"BENEDICTINO"}
        </tspan>
        <tspan
          x={-6.7}
          y={28}
          className="st3 st30 st40">
          {"20 METROS"}
        </tspan>
      </text>
      <image
        xlinkHref="data:image/png;base64,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"
        width={180}
        height={122}
        style={{
          overflow: "visible",
          opacity: 0.2
        }}
        transform="translate(475.249 1909.496)"
      />
      {/* Caudal de Rechazo OR2 */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(19, "Caudal de Rechazo OR2", false)}>
        <path
          d="M590.5 1918.4h42.1c3.5 0 6.3 2.8 6.3 6.3v33.2c0 .8.3 1.6.8 2.2l5.3 6.5c1.1 1.4 1 3.3-.1 4.6l-5.1 5.5c-.6.7-.9 1.5-.9 2.4v36.9c0 3.5-2.8 6.3-6.3 6.3H490.1c-3.5 0-6.3-2.8-6.3-6.3v-91.3c0-3.5 2.8-6.3 6.2-6.3h100.5z"
          className="st3"
        />
        <path
          d="M489.8 1918.4h143.8v103.9H489.8z"
          className="st14"
        />
        <text
          className="st46"
          transform="translate(538.746 1966.155)">
          <tspan
            x={0}
            y={0}
            className="st1 st27 st28">
            {"Caudal"}
          </tspan>
          <tspan
            x={-31.5}
            y={16.8}
            className="st1 st27 st28">
            {"de Rechazo OR2"}
          </tspan>
        </text>
        {/* Alarma Caudal de Rechazo OR2 */}
        <g
          className={`${getTemaAlarma(19, loading, datosAlarmas)} cursorPointer`}
          onClick={() => {
            onClickAlarma(19, "Caudal de Rechazo OR2");
          }}>
          <path
            d="M503.9 1996.8c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st6"
          />
          <path
            d="M502.2 1995.8c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM513.5 1994.5c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st6"
          />
          <path
            d="M514.1 1992.6c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM514.9 2001.8v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM509.9 2009.2c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st6"
          />
        </g>
        <text
          className="st29 st27 st47"
          transform="translate(541.739 2007.933)">
          {caudalRechazoOr2}
        </text>
        <text
          className="st29 st27 st48"
          transform="translate(593.944 2007.533)">
          {"m"}
        </text>
        <text
          className="st29 st27 st48"
          transform="matrix(.583 0 0 .583 604.773 2003.204)">
          {"3"}
        </text>
        <text
          className="st29 st27 st48"
          transform="translate(608.988 2007.533)">
          {"/h"}
        </text>
        <text
          className="st29 st27 st49"
          transform="translate(533.251 1942.157)">
          {"Benedictino"}
        </text>
      </g>
      <circle
        cx={677.5}
        cy={1970.3}
        r={9.2}
        className="st22"
      />
      <path
        d="M633.6 1674.7h-26.3c-2.8 0-5-2.2-5-5v-21h-44.2M771.4 1648.7h156c4.1 0 7.4 3.3 7.4 7.4v206.4c0 3.2-2.6 5.9-5.9 5.9H771.4M602.9 1648.7h30.4M677.7 1681.7v96.9"
        className="st0"
      />
      <path
        d="M684 1778c0-1-.8-1.9-1.9-1.9h-9c-1 0-1.9.8-1.9 1.9 0 .5.2 1 .5 1.3l4.5 4.5c.7.7 1.8.7 2.6.1l.1-.1 4.5-4.5c.5-.4.6-.8.6-1.3z"
        className="st13"
      />
      <path
        d="M672.3 1778c0-.5.4-.9 1-.9h9c.6 0 .9.5.9.9 0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-1 .3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6m-2 0c0 .8.3 1.5.9 2l4.5 4.5c1 1.1 2.7 1.1 3.9.2l.1-.1.1-.1 4.5-4.5c.5-.5.8-1.2.8-2 0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9z"
        className="st3"
      />
      <path
        d="M764.9 1675.3h26.4c2.8 0 5-2.2 5-5v-21"
        className="st0"
      />
      <path
        d="M765.4 1661.6h-132c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.8 3.8-6 3.8z"
        className="st12"
      />
      <path
        d="M766.7 1661.6h-133c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.9-.2.9z"
        className="st1"
      />
      <path
        d="M765.4 1686.7h-132c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.8 3.8-6 3.8z"
        className="st12"
      />
      <path
        d="M766.7 1686.7h-133c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.9-.2.9z"
        className="st1"
      />
      <path
        d="M675.2 1793.5h3.7v11h-3.7z"
        className="st15"
      />
      <path
        d="M684.2 1787.5c.7.8.7 2 0 2.8l-5.6 5.6c-.8.7-2 .7-2.8 0l-5.6-5.6c-.7-.8-.7-2 0-2.8"
        className="st15"
      />
      <image
        xlinkHref="data:image/png;base64,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 1Z03ch4mEhIAAAAASUVORK5CYII="
        width={177}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(744.753 1489)"
      />
      {/* Caudal de Permeado OR1 */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(16, "Caudal de Permeado OR1", false)}>
        <path
          d="M814.1 1498.3H761c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
          className="st3"
        />
        <path
          d="M754.8 1505.7h157.1v99.8H754.8z"
          className="st14"
        />
        <text
          className="st46"
          transform="translate(813.344 1550.4)">
          <tspan
            x={0}
            y={0}
            className="st1 st27 st28">
            {"Caudal"}
          </tspan>
          <tspan
            x={-36.2}
            y={16.8}
            className="st1 st27 st28">
            {"de Permeado OR1"}
          </tspan>
        </text>
        {/* Alarma de Caudal de Permeado OR1 */}
        <g
          className={`${getTemaAlarma(16, loading, datosAlarmas)} cursorPointer`}
          onClick={() => {
            onClickAlarma(16, "Caudal de Permeado OR1");
          }}>
          <path
            d="M777.1 1582.1c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st6"
          />
          <path
            d="M775.4 1581.1c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM786.7 1579.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st6"
          />
          <path
            d="M787.3 1577.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM788.1 1587.1v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM783.1 1594.5c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st6"
          />
        </g>
        <text
          className="st29 st27 st47"
          transform="translate(814.41 1593.178)">
          {caudalPermeadoOr1}
        </text>
        <text
          className="st29 st27 st48"
          transform="translate(875.178 1592.778)">
          {"m"}
        </text>
        <text
          className="st29 st27 st48"
          transform="matrix(.583 0 0 .583 886.007 1588.449)">
          {"3"}
        </text>
        <text
          className="st29 st27 st48"
          transform="translate(890.222 1592.778)">
          {"/h"}
        </text>
        <text
          className="st29 st27 st49"
          transform="translate(806.684 1525.403)">
          {"Benedictino"}
        </text>
      </g>
      <circle
        cx={832.3}
        cy={1648.1}
        r={9.2}
        className="st22"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALUAAAB7CAYAAAAyscFtAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB3FJREFUeNrsnYty2kgQRUcCbOM4 yW728f//t5XEawcMRpZWquperscjLAkcJsk5VV3YgEMqOTR3RrI6BICfjOLMPw+/Ls1b/cHzIwVG ashO9GLgc4ro+QVSw4kETt02byW1P1aK2PHXdGw4phvXInH89eTOPX+lO3c1M4FnUmUkOJEExsQK lberJ6m6p4MfJbV24pk9p6uF1FzkjsVGajgktQrdSVy1tZOqzKGnqR17/orQncAXbV22dWV1afct IrGRGoZKrUI/trVtayPlHlZTxO7r1KU91sl73dY7qxv7/soe845dIDMMlNuldqE7iddtrdr6Jo1y I8+f3KmLhNBLE/mj1AcRe5GQGrnh0E5HY116Zx26E/q+rTvzqUwsIvX7SfHDpb40eTuJP7X1h9Vv JvrSxE9FEIA+uWuRemPd+daa5EwEjhePxVip492OhUn9zrpzJ/XfVp9M9KVEkIIIAgOjh3fqLno8 WJe+NueCCP9oVdl9YajYcacupVNfmdTeqf8yqf+UCKKdmugBQyKIduoHc8yF3knGXtvjj+bXpPiR 6tSduO8tcvwuESSWmjwNY3K1Sq1Ca76+jNZskxeKujd9Id36xkTWWiZeFKlhiNS1STwXoVchvbtW jo22fQvFeI96magrWa0iM4xdLPqisIqcugzPt4vL8PyUjElSewRRsV1u/0iYS5X8P8FI/ICKHqW+ CP1HrEPUrZvXpI53Lsoohuihcr1vxq4HTOzUZeRZXOWU2KG7HXGnTnXtMvFCCA1TiDuvnv1Z9rhV HCN1SLxg0fMXATi17Cfxqxz5rgLIUuQxUr/5XwBgQDw5Wuqj8gzAuWE7DpAaAKkBkBoAqQGQGpAa AKkBkBoAqQGQGpAaAKkBkBoAqQGQGpAaAKkBkBoAqQGQGn50TvLL3kgNucjcVyGMvFQCUkNO3dkv PaaXuBvtKFJDDlL3XZR00sUikRpyiBwu8ZDL+hZIDblHjr5BtH499IuxYiM1nDt2aJf2qRU+kHbS qIw5/7Zw5uihczt9GG1X7+22m7PYDTzq5sJ0A5B8bF3v+DmkhnPLHU+D8wnLd1arsB8957PKD07B RWrIYddDJyy/N6nvpUtvwvNBofGI5wapIbdO7SMOtVPrgNBDUtdIDTkJ7dk4ntv50UR2obdWj5at Y7mf5WukhhwiSBPl6p1JvJFSweOujdSQldQh7Lf2LmwHpDJxXey1LRhXEkm29jNPUednnxqy6thz EfudLRo/WBz5YHl7GfZDapPTlunUkFO3bqJ87QdivFTo+LyQ/+MHnRpyEjve5tMx4odGPD8DqSFX knvQQ0BqyEVg33N+svLFolZqOw+pIVuhXWqX2Xc9uvoW7XrsROwXciM15CC1d2jfn3aRu3M/btv6 177+Fomd7NZIDbnkZu/QDyZvJ/LXtr5Y3Yb9CU5biSEvsjdSQy5dupIufW8SdzJ/ttuvJvU60amJ H5Bdl35KdGkX+rN0ao0fFZkafoQs/dDTpW/t/nUUPWp2PyBHsXX7bi2d+lYWifeWpfUU1GT0QGo4 p8zxNt5W4sd92P/myyihkRrOjcYPz9QrE9trnRC698ALUkMO3bqWhaKeanrot14OgtRw7p2POsrV 25D+TZc6ii1IDVnnape6Mol34eV5HnUYeHITUkMOctfh+clMWvVrC0OkhpyjiApey/ejQGrILYo0 iew8uEsjNeTctSeD1PDTgdSA1ABIDYDUAEgNgNSA1ABIDYDUAEgNgNSA1ABIDYDUAEgNgNSA1ABI DYDUAEgNgNQASA1IDfCDSp26Og7A96Lp8fBNOnVzzAsBfC+nSkSGzAQ/Oh2UA1q/X3lSb4kncMp4 8doFIk+WqVPXDE5dZpUuDmO7cR1eXra3jjxrEm+EQcwTHTceWRBf3V2v8F7ImwOxYQixwFXkVZVo oqMWjvMDL+gzODZWD/L1RVsze4GZSV3w/wUDOnU8EHQTlc960dnjozt16qNBhdYxYN1Mu0sTOZjc c5HaxUZwSGXoEPm1FrdWYT+RaxslgslS+wvru8iHn3dTR2/aupLIUpngC5McqWHIwrAWv1bh5XTb QfPHx3Rq/WjY2It2U0evpUM3YT/IcSlSl0gNr0it0XYT9iObP1vdmm8+4XY3JYLM5QWL8Hz810be SQtZDO6sg9+Y1BpBQtSxAZpE9NhFfn1p6x8T+9+E1KOGGfVlav14mInwlXXoO4kjfbkaIOXWk6zX VhZvuw791eT2CLJNdOpmitS1dNutSOodXHPQtUm9iKQORBCIokcI6ZHNaxH7ziqVqY9aKOpi0cXW jw2XemlCpxaKyAx9nVo3IlzsB9n5iHc/9EBMM1XqOPukdkRWJvNFokvTqeFQp9Yt49Qsct2jrsLE I9bFgfsLk7U0cecisd/OZOcjIDW8InUIL48m+sKxirrz6K28IeIVCblncqvbeOXIPxt+PamDSK35 OnXOx1HnFBUDH48FLwJHEWG65G969mcx8nmx5HRlOEXODuGEpzIXJ3o+UsMxkeQkMjsz/o0hE6lP xn8CDADp0lubDjj7XQAAAABJRU5ErkJggg=="
        width={180}
        height={122}
        style={{
          overflow: "visible",
          opacity: 0.2
        }}
        transform="translate(475.249 1689.496)"
      />
      {/* Caudal de Rechazo OR1 */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(17, "Caudal de Rechazo OR1", false)}>
        <path
          d="M590.5 1698.7h42.1c3.5 0 6.3 2.8 6.3 6.3v33.2c0 .8.3 1.6.8 2.2l5.3 6.5c1.1 1.4 1 3.3-.1 4.6l-5.1 5.5c-.6.7-.9 1.5-.9 2.4v36.9c0 3.5-2.8 6.3-6.3 6.3H490.1c-3.5 0-6.3-2.8-6.3-6.3V1705c0-3.5 2.8-6.3 6.2-6.3h100.5z"
          className="st3"
        />
        <path
          d="M489.8 1698.7h143.8v103.9H489.8z"
          className="st14"
        />
        <text
          className="st46"
          transform="translate(538.746 1746.432)">
          <tspan
            x={0}
            y={0}
            className="st1 st27 st28">
            {"Caudal"}
          </tspan>
          <tspan
            x={-31.5}
            y={16.8}
            className="st1 st27 st28">
            {"de Rechazo OR1"}
          </tspan>
        </text>
        {/* Alarma de Caudal de Rechazo OR1 */}
        <g
          className={`${getTemaAlarma(17, loading, datosAlarmas)} cursorPointer`}
          onClick={() => {
            onClickAlarma(17, "Caudal de Rechazo OR1");
          }}>
          <path
            d="M503.9 1777.1c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st6"
          />
          <path
            d="M502.2 1776.1c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM513.5 1774.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st6"
          />
          <path
            d="M514.1 1772.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM514.9 1782.1v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM509.9 1789.5c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st6"
          />
        </g>
        <text
          className="st29 st27 st47"
          transform="translate(541.739 1788.21)">
          {caudalRechazoOr1}
        </text>
        <text
          className="st29 st27 st48"
          transform="translate(593.944 1787.81)">
          {"m"}
        </text>
        <text
          className="st29 st27 st48"
          transform="matrix(.583 0 0 .583 604.773 1783.48)">
          {"3"}
        </text>
        <text
          className="st29 st27 st48"
          transform="translate(608.988 1787.81)">
          {"/h"}
        </text>
        <text
          className="st29 st27 st49"
          transform="translate(534.251 1722.434)">
          {"Benedictino"}
        </text>
      </g>
      <circle
        cx={677.5}
        cy={1750.6}
        r={9.2}
        className="st22"
      />
      <path
        d="M567 1678H449.4c-2.6 0-4.6-2.1-4.6-4.6V1623c0-2.6 2.1-4.6 4.6-4.6H567c2.6 0 4.6 2.1 4.6 4.6v50.4c0 2.5-2.1 4.6-4.6 4.6z"
        className="st44"
      />
      <text
        className="st46"
        transform="translate(464.512 1638.514)">
        <tspan
          x={0}
          y={0}
          className="st3 st30 st40">
          {"PLANTA OSMOSIS"}
        </tspan>
        <tspan
          x={21.1}
          y={14}
          className="st3 st30 st40">
          {"ORVF-833 "}
        </tspan>
        <tspan
          x={10.6}
          y={28}
          className="st3 st30 st40">
          {"BENEDICTINO"}
        </tspan>
      </text>
      <image
        xlinkHref="data:image/png;base64,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 l80EoQAAAABJRU5ErkJggg=="
        width={177}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(744.753 1709)"
      />
      {/* Caudal de Permeado OR2 */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(18, "Caudal de Permeado OR2", false)}>
        <path
          d="M814.1 1718H761c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
          className="st3"
        />
        <path
          d="M754.8 1725.4h157.1v99.8H754.8z"
          className="st14"
        />
        <text
          className="st46"
          transform="translate(813.344 1770.124)">
          <tspan
            x={0}
            y={0}
            className="st1 st27 st28">
            {"Caudal"}
          </tspan>
          <tspan
            x={-36.2}
            y={16.8}
            className="st1 st27 st28">
            {"de Permeado OR2"}
          </tspan>
        </text>
        {/* Alarma de Caudal de Permeado OR2 */}
        <g
          className={`${getTemaAlarma(18, loading, datosAlarmas)} cursorPointer`}
          onClick={() => {
            onClickAlarma(18, "Caudal de Permeado OR2");
          }}>
          <path
            d="M777.1 1801.8c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st6"
          />
          <path
            d="M775.4 1800.8c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM786.7 1799.5c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st6"
          />
          <path
            d="M787.3 1797.6c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM788.1 1806.8v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM783.1 1814.2c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st6"
          />
        </g>
        <text
          className="st29 st27 st47"
          transform="translate(814.41 1812.901)">
          {caudalPermeadoOr2}
        </text>
        <text
          className="st29 st27 st48"
          transform="translate(875.178 1812.502)">
          {"m"}
        </text>
        <text
          className="st29 st27 st48"
          transform="matrix(.583 0 0 .583 886.007 1808.172)">
          {"3"}
        </text>
        <text
          className="st29 st27 st48"
          transform="translate(890.222 1812.502)">
          {"/h"}
        </text>
        <text
          className="st29 st27 st49"
          transform="translate(807.684 1745.126)">
          {"Benedictino"}
        </text>
      </g>
      <circle
        cx={832.3}
        cy={1867.8}
        r={9.2}
        className="st22"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACMCAYAAADcDyOIAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABwpJREFUeNrsmwtz2lYQRu8VAmOb uMmk7fT//73mgeMHT6GKmb3tl/UVCHDSWDpnZgdMZJGIo097VyQEgDdM/J9/H2BP/TMEjB2eA1wi b32q1LHjNloh8zPApRLXIm2dee1kgdOfFfa8yFQkheEV0nf/uMtUer01kcsOqTuyKuWxdBLTUsC5 LYPKu5WqrLzoRwWOkrhJ2HFTV01NpJLQBQLDBQLvTNSN1bqplT1uzKeqLYkPJfBIxJ02dWN1LTKP M+0EQFeRk7xbE3bZ1KKpZ6tlS4/cKrBP3iuTdtbUXVPv7PmtST227SL9MJzR99ZO3qemHqxG5lLd sshrFVjTd2rCfpB6byJfSytRMJWAM6YOqe9dWeLuxZ2bV4Vt6xd1VVsCa++r6Xtn4v7Z1O9NfbTX bm0bBIZLBN6YwI9N3VtojiSdN25hFzWFD7UQExP4nQm8l/cve3yPwPCKCbw0gW/Mp1rEXsqibitJ 3LqISwk8sTZhZsJ+NHn/MKFzAgOcuohLAt9Y21qbrAuT+tHai9zE62ALMTFBby2F70zkDy6BR9Kv IDGcspBLAk8leVe2mPuWGRbolf5gC6ESTy2JbzM1kdUiAsM5Alfi4cbknVkiT8N/49qDCRwzKZwm EWNJYy3dMeLCuSJXIm+655BzLNum+haiLYl9jaTof+HSxZze8R1LyzAOL+/4atjWh24lx3D8izx8 Kw0uxXvlw7EI+W9D1kEWX23ElgJ4bWImPI+OZ4szdh4QGX6gxCGc8NWE4oiwTBbgZ6bvyeFYcOzg jSUyAkO/VoAACAyAwAAIDAgMgMAACAyAwIDAAAgMgMAACAwIDIDAAAgMCAyAwAAIDIDAgMAACAyA wAAIDAgMgMAACAyAwIDAAAgMgMCAwAAIDIDAAAgMCAyAwAAIDIDAgMAACAyAwAAIDAgMgMAACAwI DIDAAAgMgMCAwAAIDIDAAAgMCAyAwAAIDIDAgMAACAyAwIDAAAgMgMAACAwIDIDAAAgMgMCAwAAI DIDAgMAcAkBgAAQGQGBAYAAEBkBgAAQGBAZAYAAEBkBgQGAABAZAYEBgAAQGQGAABAYEDqG2CvII 8LOpMz6encB1lx0CnCmqd6uTX8UZZwDiwo8Wue4qctFhZzurWh5rpIYfIOuug3PfUR5I2/TLVaZ2 bps40A8hvsKHOHSBd86zrVV6rjK/OG6lvBAz4qadbZpa22OqrSR4HJjE8Uyh6wMt2hAFTp4lv/a1 kkqu+dD895iVB3acxN3vaGm1sJo2NbJtSxM5vmIyvQWBfR0TuT63z+vhVCFIsm7FrWephb2+PpDE LwT26buyHT019WB13dTYtt/a88L103EA4hZy4urz6I5B3XLJ3LkPZQgi+2ORQnJhbt1bfWvq0URe OYnrXAvhD/DWfmlp8u53ODd5S9tuLTKPXDvR15ZBZR1ZlfJYZE7m4MTdZnq9yqVL3XOJvWfP5tiX pj439dV8ezS5VeDQJYHTjhe2k7m1DSrvswk8EYFjzwVOcpZ24o7t3z+Rn8vMiaxXtbWrjYi863kS 6wmqV/knEfjvpj6Zc9/Ms3XmJD/aQuiZMZaed21v+E4SOKVQ7GkKa9swEnGndgyu7fnUXk/HQ4+p ridSv7d0fV41AIFrJ/BSPJtbAn+yFH7IJPDBFkLPjpTAKV1r+xDSm93KBzYSgfuawFFahSTvTVMz qa29fmXbRTluK7miPdij7/OyKdPT6YOe1M92LJLE80wLkT25c1MIHW3odKGSuL+31LlyPXBfF3Je 4CuRd38lei9JOnOL251czR7t2M3lEvnUkjJDmUCsJIWf3Mm9sD/fntJCBNl5dJfAtKibirzlQHrg KO1DEngv728iYZpfzmybJPBS5P0idS+XyVXPBc4t4ipJ4XSFWrgR2kbSNxxbxGnEB/vl3MJu3EHe PifwRAR+cP1s6nHTrLySMdFX6+8+W7WttPuewNoHJ4k3mcVtdWxxWx7pU5LEerYsnbhFeHkjo48L OR2fpR74wdJXB+8LWeCqwDom+mTP07xzKdOIegAC+164cuPFnLidE9i/QZSzxQurydvnu286RtM+ OEm7kl5uL+Rdi8BfpX2YZ9qHvk8h2iYSuRs7nebiZcc3SYLuQv4W6hBuHQc3SlvJpW7tBJ65FkJ7 4HvpfZ8kfSu56g3t1nLbrfWjx6E88WyJstO+twyHeuEifP/tvI20V4/WH09EYJ1C6PhMW4ddGNaX euojPXInygvetHYf7FAOfsxc8vxdpaktcnUO7L8QlRYrQ7gD11Xikyl/lb/IGzvoMdO/+SnNyK0f Nm6FvRm4vK/a28Fl7YQu7kbh+9Gi/48BusqukReBf5XpRAztY8W6ZZUdkBeBf6U0ju5nvwgOpC4C v6XjGY+stgEAAN4o/wgwAPeYKo0RzLhCAAAAAElFTkSuQmCC"
        width={176}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(1154.753 1585)"
      />
      {/* Conductividad Estanque TK-11 */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(20, "Conductividad Estanque TK-11", false)}>
        <path
          d="M1223.4 1594.3h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
          className="st3"
        />
        <path
          d="M1164.1 1601.7h157.1v99.8h-157.1z"
          className="st14"
        />
        <text
          className="st46"
          transform="translate(1200.453 1646.373)">
          <tspan
            x={0}
            y={0}
            className="st1 st27 st28">
            {"Conductividad"}
          </tspan>
          <tspan
            x={-6.2}
            y={16.8}
            className="st1 st27 st28">
            {"Estanque TK-11"}
          </tspan>
        </text>
        {/* Alarma Conductividad Estanque TK-11 */}
        <g
          className={`${getTemaAlarma(20, loading, datosAlarmas)} cursorPointer`}
          onClick={() => {
            onClickAlarma(20, "Conductividad Estanque TK-11");
          }}>
          <path
            d="M1186.4 1678.1c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st6"
          />
          <path
            d="M1184.7 1677.1c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM1196 1675.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st6"
          />
          <path
            d="M1196.6 1673.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM1197.4 1683.1v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1192.4 1690.5c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st6"
          />
        </g>
        <text
          className="st29 st27 st47"
          transform="translate(1223.699 1689.15)">
          {conductividadEstanque}
        </text>
        <text
          className="st29 st27 st48"
          transform="translate(1271.466 1688.75)">
          {"\xB5S/cm"}
        </text>
        <text
          className="st29 st27 st49"
          transform="translate(1217.972 1621.375)">
          {"Benedictino"}
        </text>
      </g>
      <circle
        cx={1243}
        cy={1749.8}
        r={9.2}
        className="st22"
      />
      <image
        xlinkHref="data:image/png;base64,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 uq4AAAAASUVORK5CYII="
        width={180}
        height={122}
        style={{
          overflow: "visible",
          opacity: 0.2
        }}
        transform="translate(938.249 840.496)"
      />
      {/* Presion de Rechazo */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(6, "Presion de Rechazo", false)}>
        <path
          d="M1053.7 849.5h42.1c3.5 0 6.3 2.8 6.3 6.3V889c0 .8.3 1.6.8 2.2l5.3 6.5c1.1 1.4 1 3.3-.1 4.6l-5.1 5.5c-.6.7-.9 1.5-.9 2.4v36.9c0 3.5-2.8 6.3-6.3 6.3H953.3c-3.5 0-6.3-2.8-6.3-6.3v-91.3c0-3.5 2.8-6.3 6.2-6.3h100.5z"
          className="st3"
        />
        <path
          d="M953 849.5h143.8v103.9H953z"
          className="st14"
        />
        <text
          className="st46"
          transform="translate(999.509 897.232)">
          <tspan
            x={0}
            y={0}
            className="st1 st27 st28">
            {"Presi\xF3n"}
          </tspan>
          <tspan
            x={-13.6}
            y={16.8}
            className="st1 st27 st28">
            {"de Rechazo"}
          </tspan>
        </text>
        {/* Alarma Presion de Rechazo */}
        <g
          className={`${getTemaAlarma(6, loading, datosAlarmas)} cursorPointer`}
          onClick={() => onClickAlarma(6, "Presión de Rechazo")}>
          <path
            d="M967.1 927.9c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st6"
          />
          <path
            d="M965.4 926.9c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM976.7 925.6c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st6"
          />
          <path
            d="M977.3 923.7c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM978.1 932.9v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM973.1 940.3c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st6"
          />
        </g>
        <text
          className="st29 st27 st47"
          transform="translate(1003.224 939.009)">
          {presionRechazo}
        </text>
        <text
          className="st29 st27 st48"
          transform="translate(1065.14 939.009)">
          {"bar"}
        </text>
        <text
          className="st29 st27 st49"
          transform="translate(1006.642 875.223)">
          {"PT000"}
        </text>
      </g>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACMCAYAAADcDyOIAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABwNJREFUeNrsmolyozgQQCVMbGfi zLXX///fHInHjk/QylWtmd6OwPiYbALvVXUZYxsS8Wi6Bc4BvGH8//x7gAPhJQT0HZYBLpE3nCq1 7/gdHS7zHuBSiYOSNmTWnSxw+qyQ5SITniwMV8i+h9c6E2l9Y0YuO2TdkYpShZaYkgLOLRm0vHuJ Sr1a0Y8K7FXGTdLexBjHmMjrjcTIZGIEhlMFrpWwWxWbGDvxqWrKxG0ZuJDPD9JOY7yTuJX3Y/k8 JzFAF5FT5t0paVcxniTWss411cNlS/YtRdKDsLMY72PcS9wZiT31MJxR9wbJvDuRdRljEeOHKlOt vLUWOZeBU+lwI5Ie5P0Y41OMz7J8L9l4onbErAScOutQq9JhJeI+iFcjJWylsrVvEtg2bjr7HqT9 S+KPGB9k/URER2C4ROCNZN+5OHcj36tMY1fJ735KXLbUvknge8m+f8b4RyT+JAJPycBwRYHvlLw7 Wb9WtXChmjnXJnAuA38Wif9uERjg1CZOC6zlXUk9vFC9VtHWxNkGLtXAd5KFP4jIKWamBqaBg1Mb uVTfboy8SzVZMDEC+y4lRGrixu7XFNrMxJ18PkJguGAmolIe7sSrO/d8urbIXembbmRYiSfu13xw OiPGSmDEhXNFTslvrzxru2Gmp2tDaTJn0124Um0svR81nRUAZ5QS9lGFsiXzZkuI3JNmhZJ5ZKQt mH2AK2Bds24VruXpx+KEDXvHY5TwMjJ3dq3osEHnuFUMLyOuOzVJFhfuBOB3i93qW9FRVoBXScEQ AAIDIDAAAgMCAyAwAAIDIDAgMAACAyAwAAIDAgMgMAACAwIDIDAAAgMgMCAwAAIDIDAAAgMCAyAw AAIDIDAgMAACAyAwIDAAAgMgMAACAwIDIDAAAgMgMCAwAAIDIDAAAgMCAyAwAAIDAgMgMAACAyAw IDAAAgMgMAACAwIDIDAAAgMgMCAwAAIDIDAgMAACAyAwAAIDAgMgMAACAyAwIDAAAgMgMAACAwID IDAAAgMCAyAwAAIDIDAgMAACAyAwAAIDAgMgMAACAwIzBIDAAAgMgMCAwABvX+Ag4dQrwEsTMj6e nYFDlw0CnCnqWW4VZ5wBiAsvmXHDuQKnjdQSQb3mAuASWYNxrDa+ZSmPbLBSsTfv0w78wA+Ev8JB HHLZoMWtMlFnEmWwAgc5ELmN7WJsTexE6EJlco+4R4UOLVloqAKn5LhToR3bZ0T+OWblkY0eNrSJ sY6xivEkMYkxku+WsuyvlJXeksC5CA3/f9Mlc0glWDDLtXimHVvJ8lrWJ5Hr3DiVmZ3UKvNuRNhF jHmM+xhT9bvDhm+UwH4AAmtZi0zYEzk09BR1ps4LAxI4/e/Js4NjP1QsReZNJgs31sD6rNjKBg4b eowxi3Ervwmy48P7sQhcGIn7WjIkcUcSpboKlUbkYLJNrQ7G3vQV9UBKipBJlCuR9nuMbzEeJGEu JRNvTRYOTRlY178bteFbVTbUssFDZn4nAtsywvdUYC1vKVefsYlSndD2qrZv6SeqLl13j2rfNCZb I/CXGF9F4oV8tm0qI5oE3itJb1RmCWr9vRK7NGVEnwVO8o6lnJrKiXwrB2QiY6azsL5U6n5ibTJM 1XOB9RVGN29J4EfJwF9E5rmM07ZrCZFL7SMlb1o3VyXFJHPp7GsJkbLvWP7vdzIOMzmhZ0Zir8Yt XdFSrbeQeJLPGg9Sj2cfUgZeS7kwF4kfJH6oDFzleoWyYQdJYN1Z66x8J/JO1WWzMJdN31OBU/a9 lXF4H+Oj6ph3qrQqTMm1MAdorpqVbVu33dMGrjIn91Kd2At5n8Y1ndzuWAnhTH3izHTHUmXesZqF GEITlwSeyBgcsu4HVQ7o2naqBF4reb+peFRZZtNzgZtq4H2mvFq1TKOFY9No6QuVvG5NA5IOhm5Y Rhl5h5CBZ0rAJHDKJrcyLlVDk9K5UelhBm6SeJdpbvdmutEdE9hKbHe0MeI21b59FNir2YepCPyk skWS931G4Llk3a8i8TdZt5DfpwMWBiCwnVrUftlbyaHtpC47ztfVImnl8hP3fS4dmmYhJibzpqvT U4vA31X58JApH/o+C5ErJXIP8OQeGnOnCqx34mVwvfv1AM9Q7rzZK0qaidioy366BKZueiYZOgms a+BHVfsuVfbVTcrQbi3nZO10Ipcn7kgv971kOFYL2yf1tMBtsxB6+mztjtzrH4C8bY65awl8bCd+ QIPvM5e+yszSTN3zeeC16bK37vnc79CeSrv4/y1fyx/yxgbdu/yzrOm2qH7ASc+r6w57N3B5r1rX wflNnXf/fbBHz8549/z56r3psJEXgV9FY+dd82OVuQ57aA0bAr+RbOzc82nF0NBxAwK/6vH0R7pt AACAN8q/AgwAq40co/iYjekAAAAASUVORK5CYII="
        width={176}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(935.753 1489)"
      />
      {/* Nivel Estanque TK-11 */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(14, "Nivel Estanque TK-11", false)}>
        <path
          d="M1004.6 1498.3h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
          className="st3"
        />
        <path
          d="M945.3 1505.7h157.1v99.8H945.3z"
          className="st14"
        />
        <text
          className="st46"
          transform="translate(1010.484 1550.4)">
          <tspan
            x={0}
            y={0}
            className="st1 st27 st28">
            {"Nivel"}
          </tspan>
          <tspan
            x={-35}
            y={16.8}
            className="st1 st27 st28">
            {"Estanque TK-11"}
          </tspan>
        </text>
        {/* Alarma Nivel Estanque TK-11 */}
        <g
          className={`${getTemaAlarma(14, loading, datosAlarmas)} cursorPointer`}
          onClick={() => onClickAlarma(14, "Nivel Estanque TK-11")}>
          <path
            d="M967.7 1582.1c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st6"
          />
          <path
            d="M966 1581.1c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM977.3 1579.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st6"
          />
          <path
            d="M977.9 1577.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM978.7 1587.1v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM973.7 1594.5c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st6"
          />
        </g>
        <text
          className="st29 st27 st47"
          transform="translate(1004.927 1593.178)">
          {nivelTk11}
        </text>
        <text
          className="st29 st27 st48"
          transform="translate(1072.695 1592.778)">
          {"%"}
        </text>
        <text
          className="st29 st27 st49"
          transform="translate(1011.201 1525.402)">
          {"TK-11"}
        </text>
      </g>
      <image
        xlinkHref="data:image/png;base64,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"
        width={176}
        height={141}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(243.753 2077)"
      />
      {/* Caudal a Ablandadores */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(15, "Caudal a Ablandadores", false)}>
        <path
          d="M312.4 2086.9h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3H321c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
          className="st3"
        />
        <path
          d="M253.1 2094.3h157.1v99.8H253.1z"
          className="st14"
        />
        <text
          className="st46"
          transform="translate(311.71 2139.01)">
          <tspan
            x={0}
            y={0}
            className="st1 st27 st28">
            {"Caudal"}
          </tspan>
          <tspan
            x={-26.9}
            y={16.8}
            className="st1 st27 st28">
            {"a Ablandadores"}
          </tspan>
        </text>
        {/* Alarma Caudal a Ablandadores */}
        <g
          className={`${getTemaAlarma(15, loading, datosAlarmas)} cursorPointer`}
          onClick={() => onClickAlarma(15, "Caudal a Ablandadores")}>
          <path
            d="M275.5 2170.7c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st6"
          />
          <path
            d="M273.8 2169.7c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM285.1 2168.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st6"
          />
          <path
            d="M285.7 2166.5c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM286.5 2175.7v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM281.5 2183.1c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st6"
          />
        </g>
        <text
          className="st29 st27 st47"
          transform="translate(312.777 2181.787)">
          {caudalAblandadores}
        </text>
        <text
          className="st29 st27 st48"
          transform="translate(373.545 2181.387)">
          {"m"}
        </text>
        <text
          className="st29 st27 st48"
          transform="matrix(.583 0 0 .583 384.374 2177.058)">
          {"3"}
        </text>
        <text
          className="st29 st27 st48"
          transform="translate(388.589 2181.387)">
          {"/h"}
        </text>
        <text
          className="st29 st27 st49"
          transform="translate(318.051 2114.011)">
          {"FIT250"}
        </text>
      </g>
      <circle
        cx={330.6}
        cy={2236.7}
        r={9.2}
        className="st22"
      />
      <image
        xlinkHref="data:image/png;base64,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"
        width={176}
        height={141}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(979.753 1012)"
      />
      {/* pH de Producto */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(12, "pH de Producto", false)}>
        <path
          d="M1048.2 1021.9h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
          className="st3"
        />
        <path
          d="M988.9 1029.3H1146v99.8H988.9z"
          className="st14"
        />
        <text
          className="st46"
          transform="translate(1060.697 1074.018)">
          <tspan
            x={0}
            y={0}
            className="st1 st27 st28">
            {"pH"}
          </tspan>
          <tspan
            x={-28.8}
            y={16.8}
            className="st1 st27 st28">
            {"de Producto"}
          </tspan>
        </text>
        {/* Alarma pH de Producto */}
        <g
          className={`${getTemaAlarma(12, loading, datosAlarmas)} cursorPointer`}
          onClick={() => onClickAlarma(10, "pH de Producto")}>
          <path
            d="M1011.3 1105.7c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st6"
          />
          <path
            d="M1009.6 1104.7c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM1020.9 1103.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st6"
          />
          <path
            d="M1021.5 1101.5c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM1022.3 1110.7v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1017.3 1118.1c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st6"
          />
        </g>
        <text
          className="st29 st27 st47"
          transform="translate(1048.53 1116.795)">
          {phProducto}
        </text>
        <text
          className="st29 st27 st48"
          transform="translate(1117.297 1116.395)">
          {"pH"}
        </text>
        <text
          className="st29 st27 st49"
          transform="translate(1056.803 1049.02)">
          {"AI233"}
        </text>
      </g>
      <circle
        cx={1067.9}
        cy={1174.4}
        r={9.2}
        className="st22"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACNCAYAAAAXU/AtAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB0FJREFUeNrsmwlzm0gQRhmEJFuy 19lkj////3LJlmXdLKS+SXVaAzqsJGt4r6oLnaPy8Gi6B5xlAG+Y8D8dC/pB+TukCy3fR2K4VN7y ErHDmZ+zWxvIC6+RuHSRucevEtiKmptt7l4LSAxnyhtjb7Z787w8JnI4Qe7cxMBEoW3uhKakgFNL Bivsroqttjas4AcUJ2TdKOzQxMg8tiKHIzUyIHDmMm8Ud6NYKzZ6favvJCUuWuTNTaathR1XcaO4 1fPxCRIDZCfIu6piWcWLYqnXgt5PStyWgXO9P5awU8WdYiKZo8QxU5OB4VgGtmVDlLeW9rmKuYmY EEuJXvqxipbsG+WdSNgHxbsq/qjiXu+NlaELMjCckYFjjbtWtq3lfaxiJqcGrla232vNwLmpecfK urW0HxTvq/hTEk+Vhb3AZF9oy8KlKx/q7PskeSdyL5gsbSPYsYqWxm2k0uFeAv9Vxb9V/C2JH4zA Q2pguLAGXhuBp/IumPJibSL3dXDRUvtGge+UcWuB/5HEH0wGHrsmjuwLp2RhWwO/KPNGebcqKxYq LRZybOPdahJ44AR+kMQfJPJ7CRx/1K4H08DBOY3cRp5ZeW1JcdPQYzWWEDEDD/XlqcqI2MDFZu7e lQ+sAcM5AscyYms8jNn4Xt7dJs7wJ2fgeMHiRpl2asIuobH6AK+phQem5r1V3GQ/LtEWWfpKb+OF DC/x2IW9EjdAXniFwJk54/srvUXWfJHsWxlRuNN96irc0P1AHNAPisBwLrGWtc75SDn2vQZONV3+ 7rM8MWCOvHAFeb1vTXc8NvqVH/mB0CArwsKvkProYkB+7QEBLhQ35dpR8l/xIwBXzMgnCUzGhTdB zhQAAgMgMAACAwIDIDAAAgMgMCAwAAIDIDAAAgMCAyAwAAIDAgMgMAACAyAwIDAAAgMgMAACAwID IDAAAgMgMCAwAAIDIDAgMAACAyAwAAIDAgMgMAACAyAwIDAAAgMgMAACAwIDIDAAAgMCAyAwAAID IDAgMAACAyAwAAIDAgMgMAACAyAwIDAAAgMgMCAwAAIDIDAAAgMCAyAwAAIDIDAgMAACAyAwAAID AgMgMAACAwIDIDAAAgMgMCAwAAIDIDAAAgMCAyAwAAIDAjMFgMAACAyAwIDA3ygVmdkCvOkM7KVG bPjZHPUtv2AAxIWfIap37STP8hMG3SvKcwcHuFDkk10rWrKtlXdnYu8i9HSyw5V3XN+F3SeiTCTP pMCldogdrJZ1W8XGbDfmef3+QN8LPRS3dH93eIWwfS3PSpcct4mwMh/MX9EwaBS4lnVdxUqx1LZ+ bajPD0wpEnoisD1oUwdwOKGnyM49XXa0Ods5x1bGsZgwdy4Tfx+jOEHeWtpFFXPF1Mi71Rh9EDiY viFoax8H11OEI/WdP03ueyRy/Puia7Wwzy5e5N66JRMf1MBxMmPJsNRgT1XMJO9YO6f+zI0RuOvy BiPpwEVhXm9bW7f13dacNn1/0YeSwroWBf5SxdcqHuXcs8nG20QWbs3Aax0Fcw16W8VIO3GjrOwF Dh2VNzMZNwpb6Ew00jbGINEblOZ0afuJtTtV2kzTZYHLBoFrzz5W8UmP53LQCty4CuGPiijwk7Lu 0GTeWt4783rXBY4xMOKOFTc6uOPzkRE5uFrPlmVLza89VTbVe30R+FHyflQ2fpJrazcvR5fRbAYe 6nNBry/1QxPtsKInAsfsOzTiTlRW2YgTPTTlxF5yrjSnz6anmGsn2Xpv1zOBbbL8Knm/yLOF5u2k EiJzTdzS7YS1Jn+qHTgycoeONnJWYJt9JzoL3VfxRxUPmrM7zd9YwmemUVloJz2qp/iq53O3o7os sF+B8f3W3MzRXK9vmuakaOkOt2bnla5btPIOOt7EpQSO2fde4r5zZcBGZUWc343rJ+rs8lkxM6fK VdvO6mgTt89+XK590VzEs5I9qPfHBE7VwlmiVrENi5e3ixk4S2TgWwn8TnNi18hXEnyk78Yz10zS xjrvs8nCi56UEGXDosHWNLVrczDb+ciONXE+C6dqlcLUvanat6t1cG4kHkngJ7dmuTJZZOoEnivz Rnk/mgw8Nxl851Yiui5w6ZYWU8uLRy8lt9UpmTtKcidvV6X1B2SqkVtI1pXLvgsn8MoJ/Mlk38dE /dv1ZbSUZ233QmTnZOBUJg5usJD16x6I1Fqwv9y5dt10FLg0GXhm6t+Z5H12jUpfLmSkViWaLrE3 UpwxeFOZ0LcbeWImTt14sjECT8z8rs0KxMx02Fbe5DJRT+Q99vhVArcNHrL+3UEVssN7GOzSYxQ4 XqUszTLRIju81t9nec+S9bUCX/WH3/hkh0QTYtfO5yofBtnhWufSlR+7niyb/RQKpuBiif3dY00r NVl2eA/ENjtc20ReBP4tp73UcqNfH2/6zxb+RetK3TVcZ4XC3hscGkqNsqcrDQj8RuYydV8I/92N wJ2ZU8QFAIAO8J8AAwDVDTe40ER75AAAAABJRU5ErkJggg=="
        width={176}
        height={141}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(1149.753 1012)"
      />
      {/* Conectividad de Producto */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(11, "Conductividad de Producto", false)}>
        <path
          d="M1218.8 1021.9h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
          className="st3"
        />
        <path
          d="M1159.5 1029.3h157.1v99.8h-157.1z"
          className="st14"
        />
        <text
          className="st46"
          transform="translate(1195.911 1074.018)">
          <tspan
            x={0}
            y={0}
            className="st1 st27 st28">
            {"Conductividad"}
          </tspan>
          <tspan
            x={6.6}
            y={16.8}
            className="st1 st27 st28">
            {"de Producto"}
          </tspan>
        </text>
        {/* Alarma Conductividad de Producto */}
        <g
          className={`${getTemaAlarma(11, loading, datosAlarmas)} cursorPointer`}
          onClick={() => {
            onClickAlarma(11, "Conductividad de Producto");
          }}>
          <path
            d="M1181.9 1105.7c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st6"
          />
          <path
            d="M1180.2 1104.7c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM1191.5 1103.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st6"
          />
          <path
            d="M1192.1 1101.5c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM1192.9 1110.7v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1187.9 1118.1c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st6"
          />
        </g>
        <text
          className="st29 st27 st47"
          transform="translate(1219.158 1116.795)">
          {conductividadProducto}
        </text>
        <text
          className="st29 st27 st48"
          transform="translate(1266.925 1116.395)">
          {"\xB5S/cm"}
        </text>
        <text
          className="st29 st27 st49"
          transform="translate(1227.43 1049.02)">
          {"AI234"}
        </text>
      </g>
      <circle
        cx={1238.5}
        cy={1174.4}
        r={9.2}
        className="st22"
      />
      <text
        className="st29 st27 st40"
        transform="translate(452.293 568.487)">
        {"AG PLUS 3672"}
      </text>
      <text
        className="st29 st27 st40"
        transform="translate(429.025 519.24)">
        {"FIS-01"}
      </text>
      <text
        className="st29 st27 st40"
        transform="translate(535.83 519.24)">
        {"FIS-02"}
      </text>
      <text transform="translate(835.455 867.266)">
        <tspan
          x={0}
          y={0}
          className="st29 st27 st43">
          {"FILTROS"}
        </tspan>
        <tspan
          x={-10.8}
          y={10.8}
          className="st29 st27 st43">
          {"SEDIMENTOS"}
        </tspan>
        <tspan
          x={5.8}
          y={21.6}
          className="st29 st27 st43">
          {"FIZ-01"}
        </tspan>
      </text>
      <text transform="translate(464.238 2275.087)">
        <tspan
          x={0}
          y={0}
          className="st29 st27 st43">
          {"FILTRO"}
        </tspan>
        <tspan
          x={-7.5}
          y={12}
          className="st29 st27 st43">
          {"ARSENICO"}
        </tspan>
      </text>
      <text transform="translate(751.64 2284.087)">
        <tspan
          x={0}
          y={0}
          className="st29 st27 st43">
          {"ABLANDADOR"}
        </tspan>
        <tspan
          x={21}
          y={12}
          className="st29 st27 st43">
          {"4272"}
        </tspan>
      </text>
      <text transform="translate(1005.119 2275.087)">
        <tspan
          x={0}
          y={0}
          className="st29 st27 st43">
          {"ABLANDADOR"}
        </tspan>
        <tspan
          x={21}
          y={12}
          className="st29 st27 st43">
          {"3272"}
        </tspan>
      </text>
      <text
        className="st29 st27 st40"
        transform="translate(661.327 2252.676)">
        {"FIS-04"}
      </text>
      <text
        className="st29 st27 st40"
        transform="translate(465.153 2252.676)">
        {"FIS-04"}
      </text>
      <text
        className="st29 st27 st40"
        transform="translate(765.78 2252.676)">
        {"FIS-05"}
      </text>
      <text
        className="st29 st27 st40"
        transform="translate(870.744 2252.676)">
        {"FIS-06"}
      </text>
      <text
        className="st29 st27 st40"
        transform="translate(1019.78 2252.676)">
        {"FIS-08"}
      </text>
      <path
        d="M211.3 1878.5H80.2c-2.6 0-4.6-2.1-4.6-4.6v-23.2c0-2.6 2.1-4.6 4.6-4.6h131.1c2.6 0 4.6 2.1 4.6 4.6v23.2c.1 2.5-2 4.6-4.6 4.6z"
        className="st44"
      />
      <text
        className="st3 st30 st40"
        transform="translate(109.826 1866.227)">
        {"BENEDICTINO"}
      </text>
    </svg>
  );
}

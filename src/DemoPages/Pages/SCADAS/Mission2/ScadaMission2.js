import React from "react";
import {
  getColor,
  getColorConexion,
  getConexion,
  getScaledValue,
  getTarjetaClass,
  getTemaAlarma
} from "../../../../commons/scada/scada";
const ScadaMission = (props) => {
  const {
    datosScada,
    datosAlarmas,
    loading,
    selected,
    loadGrafico,
    onClickAlarma
  } = props;

  const estadoConexion = datosScada !== null && getConexion(datosScada.con);
  const ORP = datosScada !== null && getScaledValue(datosScada.d0, 1);
  const recuperacionRO =
    datosScada !== null && getScaledValue(datosScada.d2, 1);
  const diferencialPrimeraEtapa =
    datosScada !== null && getScaledValue(datosScada.d3, 1);
  const diferencialSegundaEtapa =
    datosScada !== null && getScaledValue(datosScada.d4, 1);
  const presionOsmosis =
    datosScada !== null && getScaledValue(datosScada.d5, 1);
  const presionRechazo =
    datosScada !== null && getScaledValue(datosScada.d6, 1);
  const caudalAlimentacion =
    datosScada !== null && getScaledValue(datosScada.d7, 1);
  const caudalPermeado =
    datosScada !== null && getScaledValue(datosScada.d8, 1);
  const conductividadAlimentacion =
    datosScada !== null && getScaledValue(datosScada.d9, 1);
  const conductividadPermeado =
    datosScada !== null && getScaledValue(datosScada.d10, 1);
  const diferencialFiltroF001 =
    datosScada !== null && getScaledValue(datosScada.d11, 1);
  const diferencialFiltroF002 =
    datosScada !== null && getScaledValue(datosScada.d12, 1);
  const temperaturaAlimentacion =
    datosScada !== null && getScaledValue(datosScada.d13, 1);
  const diferencialFiltroF003 =
    datosScada !== null && getScaledValue(datosScada.d14, 1);
  const diferencialFiltroF004 =
    datosScada !== null && getScaledValue(datosScada.d15, 1);
  const colorEstadoBombaAltaPresion =
    datosScada !== null && getColor(datosScada.d16);
  const diferencialFiltrosHighFlow =
    datosScada !== null && getScaledValue(datosScada.d17, 1);
  const phMezcla = datosScada !== null && getScaledValue(datosScada.d18, 1);
  const conductividadMezcla =
    datosScada !== null && getScaledValue(datosScada.d19, 1);
  const caudalMezcla = datosScada !== null && getScaledValue(datosScada.d20, 1);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      id="Capa_1"
      x={0}
      y={0}
      style={{
        enableBackground: "new 0 0 1429.5 2137.7"
      }}
      viewBox="0 0 1429.5 2137.7"
      {...props}>
      <style>
        {
          '.st0,.st1{fill:none;stroke:#008ba3;stroke-width:4;stroke-miterlimit:10}.st1{stroke:#00aeed}.st2{fill:#fff}.st10{opacity:7.000000e-02;fill:#323e48}.st11{fill:#2f3e49}.st12{fill:#00aeed}.st13,.st14{opacity:.15;fill:#0e76e7;enable-background:new}.st14{opacity:.6;fill:none;stroke:#cbcbcb;stroke-width:2;stroke-miterlimit:10}.st15{fill:#cbcbcb}.st16{fill:none;stroke:#2f3e49;stroke-width:4;stroke-miterlimit:10}.st17{fill:#00a39b}.st18{fill:none;stroke:#35ace8;stroke-width:4;stroke-miterlimit:10}.st19{fill:#0e76e7}.st20{fill:#323e48}.st21,.st22,.st23,.st24,.st25{fill:none;stroke:#323e48;stroke-width:4;stroke-miterlimit:10}.st22,.st23,.st24,.st25{stroke:#fff;stroke-width:2}.st23,.st24,.st25{stroke:#2f3e49;stroke-width:3}.st24,.st25{fill:#fff;stroke:#35ace8;stroke-width:4}.st25{stroke:#008ba3}.st28{fill:#666}.st29{font-family:"ArialMT"}.st30{font-size:14px}.st31{fill:#606060}.st32{font-family:"Arial-BoldMT"}.st33{font-size:17px}.st34{font-size:11px}.st35{fill:#7c7c7c}.st36{font-size:9px}.st37{enable-background:new}.st38{font-size:16px}.st39{font-size:13px}.st40{fill:#c6c6c6}.st41{font-size:10px}.tarjeta{fill:#fff;}.tarjetaSeleccionada{fill:#3574e0;opacity:.15;}.campana{fill:#3474E0;}.campana:hover{fill:#7c7c7c;}.campanaVacia{fill:#c2c2c1;}.campanaVacia:hover{fill:#7c7c7c;}.campanaDesconectada{fill:#c2c2c1;}'
        }
      </style>
      <path
        d="M291.4 1469.9v94c0 5.5 4.5 10 10 10h88.1c5.5 0 10.1 4.4 10.1 9.9v77"
        className="st0"
      />
      <path
        d="M1018.4 1049.6h88.6c6.4 0 11.6 5.2 11.6 11.6v213.3c0 6-4.9 10.9-10.9 10.9h-985c-6.7 0-12.2 5.5-12.2 12.2v163.1c0 5.4 4.3 9.7 9.7 9.7h232.9"
        className="st1"
      />
      <image
        xlinkHref="data:image/png;base64,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 K8AALq6IB7eT8MoAAAAASUVORK5CYII="
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
        transform="translate(38.766 37.688) scale(.9543)"
      />
      <path
        d="M256.2 151.5H47.4c-3.4 0-6.1-2.7-6.1-6.1V49.7c0-3.4 2.7-6.1 6.1-6.1h208.7c3.4 0 6.1 2.7 6.1 6.1v95.6c.1 3.3-2.6 6.1-6 6.2.1 0 0 0 0 0z"
        className="st2"
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
        style={{
          fill: "#007bff"
        }}
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
        className="st28 st29 st30"
        transform="translate(1160.929 105.91)">
        {"Funcionando"}
      </text>
      <text
        className="st28 st29 st30"
        transform="translate(1160.929 125.91)">
        {"Movi\xE9ndose"}
      </text>
      <text
        className="st28 st29 st30"
        transform="translate(1160.929 145.91)">
        {"Falla"}
      </text>
      <text
        className="st28 st29 st30"
        transform="translate(1160.929 165.91)">
        {"Bloqueada"}
      </text>
      <text
        className="st28 st29 st30"
        transform="translate(1160.929 185.91)">
        {"Detenida"}
      </text>
      <text
        className="st31 st32 st30"
        transform="translate(75.5 77.73)">
        {"Conectividad de Planta"}
      </text>
      <text
        className="st31 st32 st33"
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
        className="st2"
      />
      <circle
        cx={85.5}
        cy={122.1}
        r={8.9}
        style={{
          fill: getColorConexion(datosScada.con)
        }}
      />
      <text
        className="st31 st32 st30"
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
        d="M418.6 371.6v129.3c0 14.4 17.9 26.4 40.3 28.1v14.6h17.5v-14.3h41.5v14.3h17.5V529c23.6-.8 42.5-13.1 42.5-28.1V367.2c0-27.5-28.1-50-79.5-50s-79.8 22.5-79.8 50v4.4z"
        className="st10"
      />
      <path
        d="M332 461.3h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7V464c0-1.5-1.2-2.7-2.7-2.7z"
        className="st11"
      />
      <path
        d="M261 457.8c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        className="st12"
      />
      <path
        d="M261 446.1c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9L263 445c-.5-.6-1.2-.9-2-.9z"
        className="st2"
      />
      <path
        d="M229.5 450.9h28.6"
        className="st1"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7NJREFUeNrsmOtS2zAQhS3ZjpuQ QAilBdpp3/+1eqMtlJBwcWLHdmXmaOZ0x4rkUOAPnjljE+LNp11pd6Uoer1er5e91BPZY7sN9GKA SkheErAXsPoPYFo86w7AWtybUFD1SI+1MDGU0LMWcJXRBvcKn9UhoGpHOIYaGGW4t0rxuQJECRVG a/p7Q7BO0GRHuBQwQ6OR0Z7RGM9v8H8NiBYsN7o3usM9B2wB2EpMid6ADDcARAu0b3RoNIUmgB0Q YA6wG6Ol0QK6wecrgFpv/gOZ7AA3BMjM6B10bHRkdADADO8wYAs3N/pjdIn7HLAKHo0kZNIDLsEP t3BvjU6NPhidGZ0Q4AgDUfDKGmG1gBc0kIFYUIWci0mP1ZohrDPAfYI+Gr1HqMcIv1wka3hxQVNh SL9fC1nAJiTEHNoDhPMMcJ/xfIT5OMQCickrFSDH0B4NIsI0kCvbvuf0oMxzAxg+hLfOEN5TzEEb 2rQjDzYiFfEASlrh92LBqNA5GNPcm8GDJwCznhvhO3FHJYlooFxpSkDdiJWd43+1K8Ry7qWUVqaA OgLsPi2KxAHXUDm0VwWvz6ApzV/r4crnQU1J2aaWKeW9Cc05F5ysVjGAMwxsDDtj2OIoPDjJF2L2 4B6MTTpGq3s0JjzwDHYyikLMnZH2GNSU/4aAtInY5zmfXZtbE7IVy+mgPb2ddjQFqRip6lkypX3t sqF7GlQBDarv4krhbbe0xxBn90q0SPVjWnmysREJems303QA2pZphRxlWyVpVPXwXk0VpqAqspGD D/FgCbg2qd5CNuuXZDQ0vBXV51wMuhSDbnRAGGw5arP8NTL+EpBrEXafrUo0sbewa3vDtRxwEjja FYy1cFfQPnJYTOGNHYtHes52NnPYWsD+istcREU7CsyHKaWbTKSbSKxOubh4oC3Ub6PvRt+MfqCJ XeI71otN7EkvUceWMhEZX6aLmnZvG/KabQxar/0C3FfcfwL6jrqZYA9GjpA1BFKKvq6gRXBP8/cS MK3HvgDw3OW90D1Jg5dW+CFNjWYOw8foSiaiL+R37Ry+hAfPoQsXXMgi4faoEPPLTvZrbIAOO3Z1 cnALfNdunK4oIxRinxy8cZd103Y3I9p6WnELxoBrR3N6iygUIvH3PllQHTu8lLqcIW3aM+pyZKrK aeO+Esm5s3T2KfaqA9R6NBXHHtydcL0thbx1fZezmWhLy9TVOvGKr5/68GgbaMgZYfMcx2+u95XH puwDn/0IWAXk097XXwEGAEMfpjer24J5AAAAAElFTkSuQmCC"
        width={39}
        height={39}
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        transform="translate(293.273 457.98) scale(.8974)"
      />
      <circle
        cx={311.1}
        cy={475.7}
        r={10.9}
        className="st2"
      />
      <circle
        cx={311.1}
        cy={475.5}
        r={8}
        className="st13"
      />
      <text
        className="st31 st29 st34"
        transform="translate(296.555 515.47)">
        {"P-102"}
      </text>
      <path
        d="M332 382.8h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
        className="st11"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7NJREFUeNrsmOtS2zAQhS3ZjpuQ QAilBdpp3/+1eqMtlJBwcWLHdmXmaOZ0x4rkUOAPnjljE+LNp11pd6Uoer1er5e91BPZY7sN9GKA SkheErAXsPoPYFo86w7AWtybUFD1SI+1MDGU0LMWcJXRBvcKn9UhoGpHOIYaGGW4t0rxuQJECRVG a/p7Q7BO0GRHuBQwQ6OR0Z7RGM9v8H8NiBYsN7o3usM9B2wB2EpMid6ADDcARAu0b3RoNIUmgB0Q YA6wG6Ol0QK6wecrgFpv/gOZ7AA3BMjM6B10bHRkdADADO8wYAs3N/pjdIn7HLAKHo0kZNIDLsEP t3BvjU6NPhidGZ0Q4AgDUfDKGmG1gBc0kIFYUIWci0mP1ZohrDPAfYI+Gr1HqMcIv1wka3hxQVNh SL9fC1nAJiTEHNoDhPMMcJ/xfIT5OMQCickrFSDH0B4NIsI0kCvbvuf0oMxzAxg+hLfOEN5TzEEb 2rQjDzYiFfEASlrh92LBqNA5GNPcm8GDJwCznhvhO3FHJYlooFxpSkDdiJWd43+1K8Ry7qWUVqaA OgLsPi2KxAHXUDm0VwWvz6ApzV/r4crnQU1J2aaWKeW9Cc05F5ysVjGAMwxsDDtj2OIoPDjJF2L2 4B6MTTpGq3s0JjzwDHYyikLMnZH2GNSU/4aAtInY5zmfXZtbE7IVy+mgPb2ddjQFqRip6lkypX3t sqF7GlQBDarv4krhbbe0xxBn90q0SPVjWnmysREJems303QA2pZphRxlWyVpVPXwXk0VpqAqspGD D/FgCbg2qd5CNuuXZDQ0vBXV51wMuhSDbnRAGGw5arP8NTL+EpBrEXafrUo0sbewa3vDtRxwEjja FYy1cFfQPnJYTOGNHYtHes52NnPYWsD+istcREU7CsyHKaWbTKSbSKxOubh4oC3Ub6PvRt+MfqCJ XeI71otN7EkvUceWMhEZX6aLmnZvG/KabQxar/0C3FfcfwL6jrqZYA9GjpA1BFKKvq6gRXBP8/cS MK3HvgDw3OW90D1Jg5dW+CFNjWYOw8foSiaiL+R37Ry+hAfPoQsXXMgi4faoEPPLTvZrbIAOO3Z1 cnALfNdunK4oIxRinxy8cZd103Y3I9p6WnELxoBrR3N6iygUIvH3PllQHTu8lLqcIW3aM+pyZKrK aeO+Esm5s3T2KfaqA9R6NBXHHtydcL0thbx1fZezmWhLy9TVOvGKr5/68GgbaMgZYfMcx2+u95XH puwDn/0IWAXk097XXwEGAEMfpjer24J5AAAAAElFTkSuQmCC"
        width={39}
        height={39}
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        transform="translate(293.273 379.5) scale(.8974)"
      />
      <circle
        cx={311.1}
        cy={397.3}
        r={10.9}
        className="st2"
      />
      <circle
        cx={311.1}
        cy={397.1}
        r={8}
        className="st13"
      />
      <text
        className="st31 st29 st34"
        transform="translate(296.555 436.99)">
        {"P-101"}
      </text>
      <path
        d="M381 440.8v92"
        className="st14"
      />
      <path
        d="M385.8 446.1c0 .9-.7 1.6-1.6 1.6h-6.3c-.9 0-1.6-.7-1.6-1.6 0-.4.2-.8.5-1.1l3.1-3.1c.6-.6 1.5-.6 2.2-.1l3.2 3.2c.3.3.5.7.5 1.1z"
        className="st15"
      />
      <path
        d="M377.2 446.1c0-.2.1-.3.2-.4l3.1-3.1c.2-.2.6-.2.9 0l3.1 3.1c.1.1.2.3.2.4 0 .3-.2.6-.6.6h-6.3c-.3 0-.6-.3-.6-.6m-2 0c0 1.4 1.2 2.6 2.6 2.6h6.3c1.4 0 2.6-1.2 2.6-2.6 0-.7-.3-1.3-.8-1.8l-3.1-3.1-.1-.1-.1-.1c-1.1-.9-2.6-.8-3.5.2l-3.1 3.1c-.5.5-.8 1.1-.8 1.8z"
        className="st2"
      />
      <path
        d="M384 543.9h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
        className="st16"
      />
      <path
        d="M373.5 552.9h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
        className="st11"
      />
      <path
        d="M343.5 564.6h38.8v40h-38.8z"
        className="st17"
      />
      <path
        d="M382.3 557.9v45.2c0 .7-.4 1.3-.8 1.3h-37.1c-.5 0-.8-.6-.8-1.3v-45.2"
        className="st16"
      />
      <path
        d="M289.9 491h-14.3c-2.8 0-5-2.3-5-5v-68.4c0-3.5 2.8-6.3 6.3-6.3h13M341.9 387.1h14.3c2.8 0 5 2.3 5 5v68.4c0 3.5-2.8 6.3-6.3 6.3h-13"
        className="st18"
      />
      <path
        d="M418.6 439.1c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        className="st12"
      />
      <path
        d="M418.6 427.4c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st2"
      />
      <path
        d="M362.5 432.2h53.2"
        className="st1"
      />
      <path
        d="M99.4 378.9h124.8v97.7H99.4z"
        className="st19"
      />
      <path
        d="M224.1 362.5v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1V362.5"
        className="st16"
      />
      <text
        className="st31 st29 st34"
        transform="translate(101.984 499.673)">
        {"TK-001 ALIMENTACI\xD3N"}
      </text>
      <path
        d="M472.6 385h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM457.4 388.9l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st20"
      />
      <path
        d="m473 399.5-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st20"
      />
      <path
        d="M465.2 384v10"
        className="st21"
      />
      <path
        d="M456.2 376h18M465.2 377v8"
        className="st22"
      />
      <path
        d="M480.2 394.3h41.1M516.3 595.3h-10.8c-2.8 0-5-2.3-5-5v-95.4M449.5 493.3h-13.3c-2.8 0-5-2.3-5-5V387.9"
        className="st18"
      />
      <text
        className="st35 st29 st36"
        transform="translate(449.813 414.11)">
        {"VX-101"}
      </text>
      <path
        d="M544.6 385h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM529.4 388.9l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st20"
      />
      <path
        d="m545 399.5-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st20"
      />
      <path
        d="M537.2 384v10"
        className="st21"
      />
      <path
        d="M528.2 376h18M537.2 377v8"
        className="st22"
      />
      <text
        className="st35 st29 st36"
        transform="translate(521.863 414.11)">
        {"VX-102"}
      </text>
      <path
        d="M472.6 484.2h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM457.4 488.1l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st20"
      />
      <path
        d="m473 498.7-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st20"
      />
      <path
        d="M465.2 483.2v10"
        className="st21"
      />
      <path
        d="M456.2 475.2h18M465.2 476.2v8"
        className="st22"
      />
      <path
        d="M480.2 493.5h41.1"
        className="st18"
      />
      <text
        className="st35 st29 st36"
        transform="translate(449.813 513.326)">
        {"VX-103"}
      </text>
      <path
        d="M544.6 484.2h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM529.4 488.1l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st20"
      />
      <path
        d="m545 498.7-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st20"
      />
      <path
        d="M537.2 483.2v10"
        className="st21"
      />
      <path
        d="M528.2 475.2h18M537.2 476.2v8"
        className="st22"
      />
      <text
        className="st35 st29 st36"
        transform="translate(521.863 513.326)">
        {"VX-104"}
      </text>
      <path
        d="M536.6 586h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM521.4 589.9l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st20"
      />
      <path
        d="m537 600.5-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st20"
      />
      <path
        d="M529.2 585v10"
        className="st21"
      />
      <path
        d="M520.2 577h18M529.2 578v8"
        className="st22"
      />
      <text
        className="st35 st29 st36"
        transform="translate(513.863 615.09)">
        {"VX-105"}
      </text>
      <path
        d="M551.6 491.8h13.3c2.8 0 5 2.3 5 5v53.1c0 4 6.2 7.2 10.2 7.2h583.7"
        className="st23"
      />
      <path
        d="M551.6 393.3h13.3c2.8 0 5 2.3 5 5v100.4"
        className="st23"
      />
      <path
        d="M601.3 371.6v129.3c0 14.4 17.9 26.4 40.3 28.1v14.6h17.5v-14.3h41.5v14.3h17.5V529c23.6-.8 42.5-13.1 42.5-28.1V367.2c0-27.5-28.1-50-79.5-50s-79.8 22.5-79.8 50v4.4z"
        className="st10"
      />
      <path
        d="M655.3 385h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM640.1 388.9l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st20"
      />
      <path
        d="m655.7 399.5-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st20"
      />
      <path
        d="M647.9 384v10"
        className="st21"
      />
      <path
        d="M638.9 376h18M647.9 377v8"
        className="st22"
      />
      <path
        d="M632.3 394.8H619c-2.8 0-5-2.3-5-5v-91M662.9 394.3h41.2M697.1 595.3h-8.8c-2.8 0-5-2.3-5-5v-95.4"
        className="st18"
      />
      <path
        d="M632.3 493.3H619c-2.8 0-5-2.3-5-5V387.9"
        className="st18"
      />
      <text
        className="st35 st29 st36"
        transform="translate(632.577 414.11)">
        {"VX-106"}
      </text>
      <path
        d="M727.4 385h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM712.2 388.9l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st20"
      />
      <path
        d="m727.8 399.5-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st20"
      />
      <path
        d="M720 384v10"
        className="st21"
      />
      <path
        d="M711 376h18M720 377v8"
        className="st22"
      />
      <text
        className="st35 st29 st36"
        transform="translate(704.626 414.11)">
        {"VX-107"}
      </text>
      <path
        d="M655.3 484.2h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM640.1 488.1l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st20"
      />
      <path
        d="m655.7 498.7-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st20"
      />
      <path
        d="M647.9 483.2v10"
        className="st21"
      />
      <path
        d="M638.9 475.2h18M647.9 476.2v8"
        className="st22"
      />
      <path
        d="M662.9 493.5h41.2"
        className="st18"
      />
      <text
        className="st35 st29 st36"
        transform="translate(632.577 513.326)">
        {"VX-108"}
      </text>
      <path
        d="M727.4 484.2h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM712.2 488.1l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st20"
      />
      <path
        d="m727.8 498.7-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st20"
      />
      <path
        d="M720 483.2v10"
        className="st21"
      />
      <path
        d="M711 475.2h18M720 476.2v8"
        className="st22"
      />
      <text
        className="st35 st29 st36"
        transform="translate(704.626 513.326)">
        {"VX-109"}
      </text>
      <path
        d="M718.4 586h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM703.2 589.9l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st20"
      />
      <path
        d="m718.8 600.5-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st20"
      />
      <path
        d="M711 585v10"
        className="st21"
      />
      <path
        d="M702 577h18M711 578v8"
        className="st22"
      />
      <text
        className="st35 st29 st36"
        transform="translate(695.626 615.09)">
        {"VX-110"}
      </text>
      <path
        d="M734.4 491.8h13.3c2.8 0 5 2.3 5 5v59.4"
        className="st23"
      />
      <path
        d="M734.4 393.3h13.3c2.8 0 5 2.3 5 5v100.4"
        className="st23"
      />
      <path
        d="M723.8 595.3h7.4c4.1 0 7.4 3.3 7.4 7.4v50.6"
        className="st18"
      />
      <path
        d="M939.4 367.2c0-27.5-28.1-50-79.5-50s-79.8 22.5-79.8 50V500.9c0 14.4 17.9 26.4 40.3 28.1v14.6h17.5v-14.3h41.5v14.3h17.5V529c23.6-.8 42.5-13.1 42.5-28.1V367.2z"
        className="st10"
      />
      <path
        d="M834.1 385h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM818.9 388.9l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st20"
      />
      <path
        d="m834.5 399.5-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st20"
      />
      <path
        d="M826.7 384v10"
        className="st21"
      />
      <path
        d="M817.7 376h18M826.7 377v8"
        className="st22"
      />
      <path
        d="M811.4 394.8H794c-.5 0-1-.4-1-1v-95.6M841.7 394.3h41.1M875.8 595.3H867c-2.8 0-5-2.3-5-5v-95.4"
        className="st18"
      />
      <path
        d="M811 493.3h-13.3c-2.8 0-4.7-2.3-4.7-5v-98.4"
        className="st18"
      />
      <text
        className="st35 st29 st36"
        transform="translate(811.34 414.11)">
        {"VX-111"}
      </text>
      <path
        d="M906.1 385h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM890.9 388.9l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st20"
      />
      <path
        d="m906.5 399.5-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st20"
      />
      <path
        d="M898.7 384v10"
        className="st21"
      />
      <path
        d="M889.7 376h18M898.7 377v8"
        className="st22"
      />
      <text
        className="st35 st29 st36"
        transform="translate(883.39 414.11)">
        {"VX-112"}
      </text>
      <path
        d="M834.1 484.2h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM818.9 488.1l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st20"
      />
      <path
        d="m834.5 498.7-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st20"
      />
      <path
        d="M826.7 483.2v10"
        className="st21"
      />
      <path
        d="M817.7 475.2h18M826.7 476.2v8"
        className="st22"
      />
      <path
        d="M841.7 493.5h41.1"
        className="st18"
      />
      <text
        className="st35 st29 st36"
        transform="translate(811.34 513.326)">
        {"VX-113"}
      </text>
      <path
        d="M906.1 484.2h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM890.9 488.1l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st20"
      />
      <path
        d="m906.5 498.7-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st20"
      />
      <path
        d="M898.7 483.2v10"
        className="st21"
      />
      <path
        d="M889.7 475.2h18M898.7 476.2v8"
        className="st22"
      />
      <text
        className="st35 st29 st36"
        transform="translate(883.39 513.326)">
        {"VX-114"}
      </text>
      <path
        d="M897.1 586h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM881.9 589.9l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st20"
      />
      <path
        d="m897.5 600.5-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st20"
      />
      <path
        d="M889.7 585v10"
        className="st21"
      />
      <path
        d="M880.7 577h18M889.7 578v8"
        className="st22"
      />
      <text
        className="st35 st29 st36"
        transform="translate(874.39 615.09)">
        {"VX-115"}
      </text>
      <path
        d="M913.1 491.8h13.3c2.8 0 5 2.3 5 5v59.4"
        className="st23"
      />
      <path
        d="M913.1 393.3h13.3c2.8 0 5 2.3 5 5v100.4"
        className="st23"
      />
      <path
        d="M902.4 595.3h8.4c4.1 0 7.4 3.3 7.4 7.4v50.6"
        className="st18"
      />
      <text
        className="st31 st29 st34"
        transform="translate(486.128 349.87)">
        {"F-101"}
      </text>
      <text
        className="st31 st29 st34"
        transform="translate(669.141 349.87)">
        {"F-102"}
      </text>
      <path
        d="M1116.1 367.2c0-27.5-28.1-50-79.5-50s-79.8 22.5-79.8 50V500.9c0 14.4 17.9 26.4 40.3 28.1v14.6h17.5v-14.3h41.5v14.3h17.5V529c23.6-.8 42.5-13.1 42.5-28.1V367.2z"
        className="st10"
      />
      <path
        d="M1010.9 385h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM995.7 388.9l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st20"
      />
      <path
        d="m1011.3 399.5-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st20"
      />
      <path
        d="M1003.5 384v10"
        className="st21"
      />
      <path
        d="M994.5 376h18M1003.5 377v8"
        className="st22"
      />
      <path
        d="M987.8 394.8h-13.3c-2.8 0-5-2.3-5-5l1.3-79.7c.1-6.2-4.9-11.3-14.1-11.3H744.1l-306.2 1c-3.7 0-6.7 3-6.7 6.7v83.2c0 2.8 2.3 5 5 5h13.3M1018.5 394.3h41.1M1052.6 595.3h-8.8c-2.8 0-5-2.3-5-5v-95.4"
        className="st18"
      />
      <path
        d="M987.8 493.3h-13.3c-2.8 0-5-2.3-5-5V387.9"
        className="st18"
      />
      <text
        className="st35 st29 st36"
        transform="translate(988.106 414.11)">
        {"VX-116"}
      </text>
      <path
        d="M1082.9 385h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM1067.7 388.9l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st20"
      />
      <path
        d="m1083.3 399.5-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st20"
      />
      <path
        d="M1075.5 384v10"
        className="st21"
      />
      <path
        d="M1066.5 376h18M1075.5 377v8"
        className="st22"
      />
      <text
        className="st35 st29 st36"
        transform="translate(1060.155 414.11)">
        {"VX-117"}
      </text>
      <path
        d="M1010.9 484.2h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM995.7 488.1l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st20"
      />
      <path
        d="m1011.3 498.7-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st20"
      />
      <path
        d="M1003.5 483.2v10"
        className="st21"
      />
      <path
        d="M994.5 475.2h18M1003.5 476.2v8"
        className="st22"
      />
      <path
        d="M1018.5 493.5h41.1"
        className="st18"
      />
      <text
        className="st35 st29 st36"
        transform="translate(988.106 513.326)">
        {"VX-118"}
      </text>
      <path
        d="M1082.9 484.2h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM1067.7 488.1l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st20"
      />
      <path
        d="m1083.3 498.7-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st20"
      />
      <path
        d="M1075.5 483.2v10"
        className="st21"
      />
      <path
        d="M1066.5 475.2h18M1075.5 476.2v8"
        className="st22"
      />
      <text
        className="st35 st29 st36"
        transform="translate(1060.155 513.326)">
        {"VX-119"}
      </text>
      <path
        d="M1072.9 586h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM1057.7 589.9l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st20"
      />
      <path
        d="m1073.3 600.5-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st20"
      />
      <path
        d="M1065.5 585v10"
        className="st21"
      />
      <path
        d="M1056.5 577h18M1065.5 578v8"
        className="st22"
      />
      <text
        className="st35 st29 st36"
        transform="translate(1050.155 615.09)">
        {"VX-120"}
      </text>
      <path
        d="M1089.9 491.8h13.3c2.8 0 5 2.3 5 5v59.4"
        className="st23"
      />
      <path
        d="M1089.9 393.3h13.3c2.8 0 5 2.3 5 5v100.4"
        className="st23"
      />
      <path
        d="M1078.3 595.3h9.4c4.1 0 7.4 3.3 7.4 7.4v50.6"
        className="st18"
      />
      <text
        className="st31 st29 st34"
        transform="translate(1024.67 349.87)">
        {"F-104"}
      </text>
      <text
        className="st31 st29 st34"
        transform="translate(847.905 349.87)">
        {"F-103"}
      </text>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACMCAYAAADcDyOIAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABupJREFUeNrsm4ty2kgQRUdCgGNw nId39///L1vJ+sVLoJW2erI37ZEQ2NgOOqeqyzyVquFw1T0iIQAAwNuQsQQnX9PmfuUeq1gmBH6P a5nJmmZufSsRt3L3AYHffA1zu51LeYF3UvE+ifwMCpbgxVJ3ZFXI7VxaiEbWrVVpf4NLZUDgV5c3 N1nHVhOrsT0eBW6E3dS1ttpYbUnitxc4G7i8UdoPVhdWYxG4kXVptbDKTeattBVDk7h6TYGzPdP2 kATObf3GJutlXXOpS5M6NzkbUR/rurcq7H5mcpci8ZDkzVpkrl5S4NR07R8b2sA2EnlndV3VdS01 t+dGlrBLE/cfSefYLy8H3E6kdmZ6i1z0FDdrmbDzhMxDaB3isDa1lqGR91NdX6w+1/XRnosCNy3D rcmuAheW1CsZ7obSSqiwu2N2aYoep0mdsP2k3bZldK6pHAXW1mFusjbi3tT11W63CXxp74t984Ul 81JaiXMVOHVBZyc7NKV8ibdyRmptrYo98uaSEn7CHjuRsz098rn1vnFom1v6frW6sQS+Sgg8t8em VrF3vrfn12feC1eJ9FVx165iWxXa1qTYI28UNS62TtnTHhKfs8DaPlxL+/DF9cBxiFuKvBNZz+b9 dybwaiDDnLYNpYm6cjs0C7u/lvc9WZeiY3uokIWeuQl7Jh/G2LUTQ0vgmbULn6yuW3YhtG2YSPo2 730YYALH1iDujS9sHe6sRuKQH+6qrgTWCXtqH9C1+4A+yjAykd54KAkc936nbvvsyrUJug88llbM r+2jJZDfEz7nBI59b0zfKO8PW5uRe622HMkE9pdFJ3KK+2y93Y2cImOPp23EuW+r+V2ImKQxTX17 pZeS/RA8lQReSvqe+y5E5WTcyBbjD1u/6KW/9L51qZxsITRh4gI3Av9R11+JIWUysB5Y18gPt7F0 LtBTpr/0fCHDShmGcUVO24Ao8MIEvrR1CbYeK6m1tGNVVw/cNWU3Ev/pBB67D+vcBfZf9JHs1MTb qa3FLDEgT1267MIwftyjQ1xMYJU3PvZg9WjruvF+FT0HuDik6KQ9d6fKcx/gQku7lSfKX6WswtML P1H2nUvdc7+AUbnetjRZC5G3EfbWzVmFW7+9LYRuFcVLpVcyqMzs+aIlbYZA1lKhYz1U/CoM78ft fieiFA9Lk9fvdPmt2tC1C+F/qDKVQcX/2moykN2HPi1F6PEF1jTOEok0NHZy5lbH4iA8kU2C1NXe nwJnHUOKDirj0O8q3FBFfs5rhxwAhdti7OPZf2FQtKRJlhhUtHL3mhD470mvIf854ucH71ne0p5V wQ1eXVtGbb8+y/gQ4ETzRN7n7J4f0OMhK7zmTNHLt/yIb0ig54UTpe/BbuU9DwjwXhL56AQGeJcT IAACAyAwAAIDAgMgMAACAyAwIDAAAgMgMAACAwIDIDAAAgMCAyAwAAIDIDAgMAACAyAwAAIDAgMg MAACAyAwIDAAAgMgMCAwAAIDIDAAAgMCAyAwAAIDIDAgMAACAyAwAAIDAgMgMAACAwIDIDAAAgMg MCAwAAIDIDAAAgMCAyAwAAIDIDAgMAACAyAwIDAAAgMgMAACAwIDIDAAAgMgMCAwAAIDIDAgMEsA CAyAwAAIDAgMgMAACAyAwIDAAAgMgMAACAwIDIDAAAgMCAyAwAAIDIDAgMAhVFZB/gL81gnspUZs ODV7fcuPOADiwilE9a718izvcdCdVXXowQGOFLm3a0VH2qq8W6mdq4x1hxcQdpeoKhGeSYErE1EP 1sha1rVJVGmVs5sBzxRYw7FMlMrsw/aXBNYndyLvuq5VXcu6FvZ3Ke8tnMAkMhwynG3FMa21BObW JfHPYxQt8sZvw8qkfajr3upS3nchAmcIDAcKHF1bmWNaMSzXHUn8pAfW9F3bAZqD3dX1w+Qd2+tL E3gsAiMvHCLxToKy8ey7eXZrzj1IGpeJFG5N4CjwQuS9EHmbWH+s64M9NiKB4YjhzQvcePatrr/t 9r05qAK37kL4FkIFnspro7xzkXokCYzAcKzAtybvN0vjO3Nt7frg1hbCN9YLk3MkbcPS/qGZiR0F zpEXjhTYn+2/W92awKu+LYQ21huTNUqpzfbM2oeJ9MDsRMChOxBV+H+3aymbBXcm7709Hnciqq4E Tk2Ha5fKUeALSd+CIQ6eMcTtwq/btQtL3UeTN6bv3hbCH7htWny05C2sRgl5ERn2JbCfuWIrsRaZ NyJv8pJyl2iZtAYjKRU3b+l9ERj6CqxJXIqw8a+2DlU4ULRMRFahc9c2ICw8tx/u+i1EOCaB/Wuy RJG28JK7EqkflFV95AwHiBxoGeCELUXoStxwAvGQF15SYoDh8K8AAwAbBXFyKQH3lQAAAABJRU5E rkJggg=="
        width={176}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(471.242 667)"
      />
      {/* Diferencial Filtro F001 */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(11, "Diferencial Filtro F001", false)}>
        <path
          d="M578.5 797.6h53.1c3.5 0 6.3-2.8 6.3-6.3V689c0-3.5-2.8-6.3-6.3-6.3h-61.7c-1.2 0-2.4-.4-3.4-1.2l-.4-.3c-6.5-6.5-6.5-6.5-12.9.2-1 .9-2.2 1.3-3.5 1.3H487c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h91.5z"
          className="st2"
        />
        <path
          d="M480.8 689.8h157.1v99.8H480.8z"
          className={getTarjetaClass(11, selected)}
        />
        <text
          className="st37"
          transform="translate(527.558 734.47)">
          <tspan
            x={0}
            y={0}
            className="st19 st29 st30">
            {"Diferencial"}
          </tspan>
          <tspan
            x={0}
            y={16.8}
            className="st19 st29 st30">
            {"Filtro F001"}
          </tspan>
        </text>
        {/* Alarma Diferencial Filtro F001 */}
        <g
          className={`${getTemaAlarma(11, loading, datosAlarmas)} cursorPointer`}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(11, "Diferencial Filtro F001");
          }}>
          <path
            d="M503.2 766.1c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st5"
          />
          <path
            d="M501.5 765.1c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM512.8 763.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st5"
          />
          <path
            d="M513.4 761.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM514.2 771.1v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM509.2 778.5c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st5"
          />
        </g>
        <text
          className="st31 st29 st38"
          transform="translate(540.442 777.248)">
          {diferencialFiltroF001}
        </text>
        <text
          className="st31 st29 st39"
          transform="translate(601.21 776.848)">
          {"bar"}
        </text>
        <text
          className="st31 st29 st34"
          transform="translate(523.716 709.473)">
          {"PT103 - PT105"}
        </text>
      </g>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACMCAYAAADcDyOIAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABw1JREFUeNrsmgtTGlkQRu88EBTU bMxu/v//y1ayauQ1MjtT1Tf57NwZBtRomHOqukAEUrkemq8bQgAAgLch4whe/Uzbn2t3W80xIfB7 PMtMzjRz51uLuLX7GRD4zc8wt+u5lBd4JxV/piM/g5IjeLGuW1iVcj2XCNHK+mhV2WWGxAj81vLm JuvE6sxqYrdHgVtht01trLZWAYnfXuBs5PJGac+tZlYTEbiVdWW1tMvcbq8kVoxN4vp3CpztmbbH JHBu5zcxWS+aWkhdmNSFdd+26z40dS9ViMhjlLhOzAkHiV0eKG6WqDHJqwNbIfLOm7ps6lpqYb+L Aq9M2tumvknkiBJv7X47t60YSweuO7Yz9XMEzlzH8VN2npB5DNEhDmtTiwytvB+a+mj1V1NX9rso 8FLkndljY1ZuO/NahruxZGIVdtezpek8i3LghJ0npuxSJu18JJEinodGh4XJ2or7qakbu54S+E46 89RqZp15ZTHjUf6Ip553VVzdzlSysel9RyoHDCma9c7clD0RsbM9GfnUsm8c2hbWfW+sPlkHvnQC r0zgOOSdW06e2+0PJnD8451iFq4T3fdRNjS6pdm4ATf5rlQOmLBL6RQzN2lHkUsXJ8YwvGl8uJb4 8NFl4NwOf+02FHHwuxSB15KFT3mY09hQibhxQ7OUTU1m96kP7cDxDzWTTrOwA49Ttkocu/XYOvDc 4sIHq2u3hYgCbyU2TOWx1xYhfA4+9Q68k3OJ8n63s7gTpzL3WI0UvwicdXSZKzvoD/b2qH+kqRN4 DB047n6nbn0WX9znci5xD1y5KBa3F1He1QgihM++Me+u7QzubMidipt+wMv6BE6tiBYmbJvv/rbL OGXP7T6ly8HZCQusW4gzFwfOZUDzHUSH4FLkvxR5/SqtPlF5Nf9uTeD2hfyfnWF84avk+sL+IXHZ sXUo5I8Th5RW3s9N/WMSdwkcRiCwzgd+uD1zGxptDLnr4LELb4cMLCcWI1TguCOf27lk4eeHP2ur jZxP6IsQPuNdWse9MXk/2/VriRBjGuJCx2pR14td30YLiQ7uV0Zj+CBDh7jYgefmUhzaYiaOVbqG 0Ctw4dZE1yLxjXTgC1ml5WE8n8xliVVj6sMdfxb+w6CdnfPOxYZT/gCjdtm2su4aY8PW8vCtvMOn Nl2dEaLrM/4rGeaurDPPRrSB2Cfyvo/X9fbazqsO3R+hnrrAQTLuxH6uTN6+LVc2tAPrtBwX7nO7 fiHDSjmC7cOQSBEGvIC77jem7z4EJ3Ah8s7C008p/TzhG0Rd7lkVTWRdNHMT9iSxfRgr2Qvdf6xf S9U5ohS3ykQ8DakIke2ZsifuHyjCOL/M815eAKf2f897Zolex/KOt8PUgFI4cZEXfudMkSQf8GQp WREWXkPccKhj+QFDyti+vA7va0jOjhF436sE4E3JB8oK8EcJDIDAAAgMgMCAwAAIDIDAAAgMCAyA wAAIDAgMgMAACAyAwIDAAAgMgMAACAwIDIDAAAgMgMCAwAAIDIDAgMAACAyAwAAIDAgMgMAACAyA wIDAAAgMgMAACAwIDIDAAAgMCAyAwAAIDIDAgMAACAyAwAAIDAgMgMAACAyAwIDAAAgMgMCAwAAI DIDAAAgMCAyAwAAIDIDAgMAACAyAwIDAAAgMgMAACAwIDIDAAAgMgMCAwAAIDIDAAAgMCAyAwAAI DAgMgMAACAyAwIDAAAgMgMAACAxjE7i2CnIJ8Ed3YC81YsNrs9e3/IgnQFx4DVG9a4M8ywc86c6q PvTJAY4UebBrZU+3VXkfpXauMs4dXkDYXaLqRPNMClybiPpkraxVU9tEVVY52wx4psDaHKtEqcy+ 2T7pwPrLnci7aWrd1KqppV2u5LGlE5iODIcMZ4/imNZGGuaj68Q/nqPskDe+GtYm7fem7q0u5HEz EThDYDhQ4Oja2hzTis1y09OJf8nA2n039gTtk9019c3kndj9KxN4IgIjLxwi8U4aZevZV/Ps1pz7 Lt24SnThzg4cBV6KvDORt23rD02d220FHRiOGN68wK1nX5r6167fm4MqcOcWwkcIFXgq943yLkTq QjowAsOxAt+avF+sG9+ZaxuXgzsjhA/WS5OzkNiwsn9obmJHgXPkhSMF9u/2X61uTeD10AihwXpr skYpNWzPLT6cSQZmEwGHbiDq8HPbtZJlwZ3Je2+3x01E3deBU9PhxnXlKPBMum/JEAfPGOJ24em6 dmld98Hkjd13b4TwT9w1LT5Y5y2tioS8iAz7OrCfuWKU2IjMW5E3+ZFyn2iZRINCSsXNO7IvAsNQ gbUTVyJsvNToUIcDRctEZBU6d7EBYeG5ebjvuxDhmA7s75Mlim4LL7mVSH2hrB4iZzhA5EBkgFeM FKGv44ZXEA954SUlBhgP/wswAKRyf22z7hlLAAAAAElFTkSuQmCC"
        width={176}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(650.242 667)"
      />
      {/* Diferencial Filtro F002 */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(12, "Diferencial Filtro F002", false)}>
        <path
          d="M757.7 797.6h53.1c3.5 0 6.3-2.8 6.3-6.3V689c0-3.5-2.8-6.3-6.3-6.3h-61.7c-1.2 0-2.4-.4-3.4-1.2l-.4-.3c-6.5-6.5-6.5-6.5-12.9.2-1 .9-2.2 1.3-3.5 1.3h-62.7c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h91.5z"
          className="st2"
        />
        <path
          d="M660 689.8h157.1v99.8H660z"
          className={getTarjetaClass(12, selected)}
        />
        <text
          className="st37"
          transform="translate(706.783 734.47)">
          <tspan
            x={0}
            y={0}
            className="st19 st29 st30">
            {"Diferencial"}
          </tspan>
          <tspan
            x={0}
            y={16.8}
            className="st19 st29 st30">
            {"Filtro F002"}
          </tspan>
        </text>
        {/* Alarma Diferencial Filtro F002 */}
        <g
          className={`${getTemaAlarma(12, loading, datosAlarmas)} cursorPointer`}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(12, "Diferencial Filtro F002");
          }}>
          <path
            d="M682.4 766.1c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st5"
          />
          <path
            d="M680.7 765.1c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM692 763.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st5"
          />
          <path
            d="M692.6 761.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM693.4 771.1v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM688.4 778.5c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st5"
          />
        </g>
        <text
          className="st31 st29 st38"
          transform="translate(719.668 777.248)">
          {diferencialFiltroF002}
        </text>
        <text
          className="st31 st29 st39"
          transform="translate(780.435 776.848)">
          {"bar"}
        </text>
        <text
          className="st31 st29 st34"
          transform="translate(702.941 709.473)">
          {"PT103 - PT107"}
        </text>
      </g>
      <image
        xlinkHref="data:image/png;base64,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 RK5CYII="
        width={177}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(828.242 667)"
      />
      {/* Diferencial Filtro F003 */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(14, "Diferencial Filtro F003", false)}>
        <path
          d="M935.9 797.6H989c3.5 0 6.3-2.8 6.3-6.3V689c0-3.5-2.8-6.3-6.3-6.3h-61.7c-1.2 0-2.4-.4-3.4-1.2l-.4-.3c-6.5-6.5-6.5-6.5-12.9.2-1 .9-2.2 1.3-3.5 1.3h-62.7c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h91.5z"
          className="st2"
        />
        <path
          d="M838.2 689.8h157.1v99.8H838.2z"
          className={getTarjetaClass(14, selected)}
        />
        <text
          className="st37"
          transform="translate(885.009 734.47)">
          <tspan
            x={0}
            y={0}
            className="st19 st29 st30">
            {"Diferencial"}
          </tspan>
          <tspan
            x={0}
            y={16.8}
            className="st19 st29 st30">
            {"Filtro F003"}
          </tspan>
        </text>
        {/* Alarma Diferencial Filtro F003 */}
        <g
          className={`${getTemaAlarma(14, loading, datosAlarmas)} cursorPointer`}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(14, "Diferencial Filtro F003", true, true);
          }}>
          <path
            d="M860.6 766.1c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st5"
          />
          <path
            d="M858.9 765.1c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM870.2 763.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st5"
          />
          <path
            d="M870.8 761.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM871.6 771.1v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM866.6 778.5c.9 0 1.7-.8 1.7-1.7H865c.1.9.7 1.6 1.6 1.7z"
            className="st5"
          />
        </g>
        <text
          className="st31 st29 st38"
          transform="translate(897.893 777.248)">
          {diferencialFiltroF003}
        </text>
        <text
          className="st31 st29 st39"
          transform="translate(958.66 776.848)">
          {"bar"}
        </text>
        <text
          className="st31 st29 st34"
          transform="translate(880.167 709.473)">
          {"PT103 - PT109"}
        </text>
      </g>
      <image
        xlinkHref="data:image/png;base64,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 AElFTkSuQmCC"
        width={176}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(1007.242 667)"
      />
      {/* Diferencial Filtro F004 */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(15, "Diferencial Filtro F004", false)}>
        <path
          d="M1114.2 797.6h53.1c3.5 0 6.3-2.8 6.3-6.3V689c0-3.5-2.8-6.3-6.3-6.3h-61.7c-1.2 0-2.4-.4-3.4-1.2l-.4-.3c-6.5-6.5-6.5-6.5-12.9.2-1 .9-2.2 1.3-3.5 1.3h-62.7c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h91.5z"
          className="st2"
        />
        <path
          d="M1016.5 689.8h157.1v99.8h-157.1z"
          className={getTarjetaClass(15, selected)}
        />
        <text
          className="st37"
          transform="translate(1063.234 734.47)">
          <tspan
            x={0}
            y={0}
            className="st19 st29 st30">
            {"Diferencial"}
          </tspan>
          <tspan
            x={0}
            y={16.8}
            className="st19 st29 st30">
            {"Filtro F004"}
          </tspan>
        </text>
        {/* Alarma Diferencial Filtro F004 */}
        <g
          className={`${getTemaAlarma(15, loading, datosAlarmas)} cursorPointer`}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(15, "Diferencial Filtro F004");
          }}>
          <path
            d="M1038.9 766.1c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st5"
          />
          <path
            d="M1037.2 765.1c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM1048.5 763.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st5"
          />
          <path
            d="M1049.1 761.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM1049.9 771.1v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1044.9 778.5c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st5"
          />
        </g>
        <text
          className="st31 st29 st38"
          transform="translate(1076.118 777.248)">
          {diferencialFiltroF004}
        </text>
        <text
          className="st31 st29 st39"
          transform="translate(1136.885 776.848)">
          {"bar"}
        </text>
        <text
          className="st31 st29 st34"
          transform="translate(1055.392 709.473)">
          {"PT103 - PT1011"}
        </text>
      </g>
      <path
        d="M1252.8 572.3H1173c-2.6 0-4.6-2.1-4.6-4.6v-23.2c0-2.6 2.1-4.6 4.6-4.6h79.8c2.6 0 4.6 2.1 4.6 4.6v23.2c.1 2.5-2 4.6-4.6 4.6z"
        className="st20"
      />
      <text
        className="st40 st29 st41"
        transform="translate(1188.154 560.01)">
        {"A TK-003"}
      </text>
      <path
        d="M1157.4 563.3c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        className="st11"
      />
      <path
        d="M1157.4 551.6c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st2"
      />
      <path
        d="M543 595.3h7.4c4.1 0 7.4 3.3 7.4 7.4v43.6c0 4.9 4 8.9 8.9 8.9h619.5c6.8 0 12.2 5.5 12.2 12.2v157.2c0 6.7-5.4 12.1-12.1 12.1H121.6c-6.1 0-11.1 5-11.1 11.1V1058c0 6.1 4.9 11 11 11h257.9"
        className="st1"
      />
      <image
        xlinkHref="data:image/png;base64,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 FXPpsm6ZAAAAAElFTkSuQmCC"
        width={176}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(125.242 904)"
      />
      {/* ORP */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(0, "ORP", false)}>
        <path
          d="M194 913.6h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3V919.9c0-3.5-2.8-6.3-6.3-6.3H194z"
          className="st2"
        />
        <path
          d="M134.7 921h157.1v99.8H134.7z"
          className={getTarjetaClass(0, selected)}
        />
        <text
          className="st19 st29 st30"
          transform="translate(200.255 971.638)">
          {"ORP"}
        </text>
        {/* Alarma ORP */}
        <g
          className={`${getTemaAlarma(0, loading, datosAlarmas)} cursorPointer`}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(0, "ORP");
          }}>
          <path
            d="M157 997.3c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st5"
          />
          <path
            d="M155.3 996.3c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM166.6 995c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st5"
          />
          <path
            d="M167.2 993.1c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM168 1002.3v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM163 1009.7c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st5"
          />
        </g>
        <text
          className="st31 st29 st38"
          transform="translate(194.308 1008.416)">
          {ORP}
        </text>
        <text
          className="st31 st29 st39"
          transform="translate(258.075 1008.016)">
          {"mV"}
        </text>
        <text
          className="st31 st29 st34"
          transform="translate(198.582 940.64)">
          {"AE119"}
        </text>
      </g>
      <circle
        cx={213.6}
        cy={1069}
        r={9.2}
        className="st24"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACMCAYAAADcDyOIAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABwxJREFUeNrsmwlz4kYQRiUx5vCR 2JWj8v9/X9ZeH9ggkCYi1V3bbs+AIPbGlt6r6oJlbbFIT61vWmxRAHxhyk+yDRgv8WfJV+75PSSG 95A3Hit2OELcMlHIC+8lcXTVS+TQQ95dVebRlpcZ4Fh5tVpX+tpekcMBeVXUiakgNXEiEynglMig wjZdbd1jY2ROShwOyKvSnnU1dWVFLg9kZIBUxo1G1I1UbWojMremG8dDAlt5g8g672phavfnmYgd XJwA6BsdWhFUxV119WJqJU5tE9k4KXDpBJ6KsBddXZm6kNenIrFGCTow9O3A2lWtvMuunrp6NF6V 7ndtpEh24MrEhrnIet3VjdS1kVi78CSThQFyItvcu+7qWcT9Ll6FRE5uxbGkwHaiYLvvlYj7R1e/ d/WbSHwpgp+5HIzE0HfyoNl3LZ33Xpw7E4+s5Lqwi1bisCf/eoF38v4lIt+IwAsnMPEB+sYIK/BK BL4Q70r5u1rkXsvzbfF6tJYVODiBr6Xz7uT9UwS+Mh2YRRycuojTDqyRVBdtmom1gltnZSNE5aYP F0biG1MaIYLLv0gMfTuwTiFqExs2kocfxD1tkn7adTBCBDkjdApxKXVlnk8TZwYCwzGTiEYELUTm Z3HrXOT1k65yX4TwMUJvYMyKH7Pgudnw1EwgAI6lFX9UXnVrJqUNcpKIqf924eC6ZpnowmeJsnfh JnRdOBE79QqmvGO+8yYjROpbZ6nvQuS+0ANwqsRVpsriwJfGqh5nR+qbZwgLH9mRe7tW9dhgUfD9 X/g54hbHNsnqP74JwEeLvde3qqesAJ8Sxl+AwAAIDIDAgMAACAyAwAAIDAgMgMAACAyAwIDAAAgM gMCAwAAIDIDAAAgMCAyAwAAIDIDAgMAACAyAwAAIDAgMgMAACAwIDIDAAAgMgMCAwAAIDIDAAAgM CAyAwAAIDIDAgMAACAyAwIDAAAgMgMAACAwIDIDAAAgMgMCAwAAIDIDAAAgMCAyAwAAIDAgMgMAA CAyAwIDAAAgMgMAACAwIDIDAAAgMgMCAwAAIDIDAgMAACAyAwAAIDAgMgMAACAyAwIDAAAgMgMAA CAwIDIDAAAgMCAwwAIGjVGEeAb50B/ZSIzZ8NAd9q07YAOLCR4jqXevlWdVjo61UPHbjACeK3Nu1 sKfbWnkbU62rcuQ7vXyHgzZ2YdtMxUTzTAoc5UDYDe5k3Xa1SdRWqhrxNKM8Uei4J6aNjda5tjXO 6fPGSPxmH4bMDm7Nhuqu1l2tunqRx5X53eAELkckcKpiZh/EPVe6McWy6ARunGMreb6W173Er/Zj yMirZ8RapF129SR1bn5vbgQuRyKwlbVKVJk4maPbvzFzuRyDyDHRKGvjl9azyFxLI20TnfhNBvYb XYm8j119F3nP5Oe3IvCZOXDlwMUtjLgTqSA1MSdzZbpxkVlT2Etkk7hUxoFLrPtjI43ySRy76+pe nFuKgxopfBfOdmAV+MXIOzfybuQMWchrkxF04NLJG+SzT12pzLYbe3FrVxsj89A7sT1BG/nsKyPw 3119k+eP4mBtBM5OIXyEsALPzM+qvJdG6om7tA5ZYJV3Kp9/Llemhey3WeKktmsKu57Q0rzXOImH PiprXAfedd5bkfhW3HuWv9/2iRD2zFCB9VKpsWG38x+6unAHqxpBhNDuO5XPfi4n8q6u5LFxa4PC LVSe5WA9yuPSSLzJrLqHKLFfaz2bq/2dPD7I63VmIZecQrSutZfmIKxlh19Ix5maDDz0SYQKrN13 Ifvhl66ujYAaBaYiezQnvh6kezlAPuvVAxc4JkZoG7fesif3k8nAyStTyLyBjRG2K6vAc9N9w4gW cSrwTATedd1fEyvm2nThaGKXdphbqTvpMk/ShTe5S+WAF3FbJ7GNVqvMKK3Y14GjC8v2jbTVT93q u8yMj4begS/NQmNlYsKLGTdGeX1pMt43qVt5bWkEHksHtjlYr/ibzOI2uz/CgYzi36h24laZ7DtU gUszfZiLwNp918XrubmOHFsz5/zuBL4zEWK971I5QIGLzGixcePFXreS90lsBa5kJ1cuNozh7puf Qsxc561Nzn0wAke3yr7LxIc6N+scQZTI3dg5OBcPPc+YRg5em5B2TLeOCzOJsLc6t2bRu5RsvJD9 qx3YZuB7J+/a5byiGN+t5dyt9d7fRuubW4qRRIZDWdjeQfMCnxc/Zue6iPO35JcmeoxlfNYnUhTH nMDhxDeL7oDGkQkc3SXOzjN1SjMV0e0Ex66y12ahMsbOW7zH5w3/9z/gi+7wMpHf7M0fO160gtvV 9ZhuH394roPTF3W6sJuY6YxW6RbBqS/vjLXzIvAnW9j5r1eWidV27n8aAAJ/mm5cFG9Hi7n/sIi8 CPyp92fZY7UNAADwBflHgAEAnzEXb8+MdZkAAAAASUVORK5CYII="
        width={176}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(518.242 904)"
      />
      {/* Conductividad de Alimentación */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(9, "Conductividad de Alimentación", false)}>
        <path
          d="M587.3 913.6h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3V919.9c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
          className="st2"
        />
        <path
          d="M528 921h157.1v99.8H528z"
          className={getTarjetaClass(9, selected)}
        />
        <text
          className="st37"
          transform="translate(564.38 965.638)">
          <tspan
            x={0}
            y={0}
            className="st19 st29 st30">
            {"Conductividad"}
          </tspan>
          <tspan
            x={-5.4}
            y={16.8}
            className="st19 st29 st30">
            {"de Alimentaci\xF3n"}
          </tspan>
        </text>
        {/* Alarma Conductividad Alimentación */}
        <g
          className={`${getTemaAlarma(9, loading, datosAlarmas)} cursorPointer`}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(9, "Conductividad Alimentación");
          }}>
          <path
            d="M550.4 997.3c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st5"
          />
          <path
            d="M548.7 996.3c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM560 995c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st5"
          />
          <path
            d="M560.6 993.1c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM561.4 1002.3v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM556.4 1009.7c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st5"
          />
        </g>
        <text
          className="st31 st29 st38"
          transform="translate(587.625 1008.416)">
          {conductividadAlimentacion}
        </text>
        <text
          className="st31 st29 st39"
          transform="translate(642.393 1008.016)">
          {"dS/m"}
        </text>
        <text
          className="st31 st29 st34"
          transform="translate(593.9 940.64)">
          {"AE118"}
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
        transform="translate(688.242 904)"
      />
      {/* Temperatura de Alimentación */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(13, "Temperatura de Alimentación", false)}>
        <path
          d="M757.6 913.6h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3V919.9c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
          className="st2"
        />
        <path
          d="M698.3 921h157.1v99.8H698.3z"
          className={getTarjetaClass(13, selected)}
        />
        <text
          className="st37"
          transform="translate(738.965 965.638)">
          <tspan
            x={0}
            y={0}
            className="st19 st29 st30">
            {"Temperatura"}
          </tspan>
          <tspan
            x={-9.7}
            y={16.8}
            className="st19 st29 st30">
            {"de Alimentaci\xF3n"}
          </tspan>
        </text>
        {/* Alarma Temperatura de Alimentación */}
        <g
          className={`${getTemaAlarma(13, loading, datosAlarmas)} cursorPointer`}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(13, "Temperatura de Alimentación");
          }}>
          <path
            d="M720.7 997.3c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st5"
          />
          <path
            d="M719 996.3c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM730.3 995c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st5"
          />
          <path
            d="M730.9 993.1c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM731.7 1002.3v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM726.7 1009.7c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st5"
          />
        </g>
        <text
          className="st31 st29 st38"
          transform="translate(757.92 1008.416)">
          {temperaturaAlimentacion}
        </text>
        <text
          className="st31 st29 st39"
          transform="translate(824.688 1008.016)">
          {"\xB0C"}
        </text>
        <text
          className="st31 st29 st34"
          transform="translate(764.195 940.64)">
          {"TT117"}
        </text>
      </g>
      <path
        d="M167.6 1082.5v52"
        className="st14"
      />
      <path
        d="M172.5 1087.8c0 .9-.7 1.6-1.6 1.6h-6.3c-.9 0-1.6-.7-1.6-1.6 0-.4.2-.8.5-1.1l3.1-3.1c.6-.6 1.5-.6 2.2-.1l3.2 3.2c.3.3.5.7.5 1.1z"
        className="st15"
      />
      <path
        d="M163.9 1087.8c0-.2.1-.3.2-.4l3.1-3.1c.2-.2.6-.2.9 0l3.1 3.1c.1.1.2.3.2.4 0 .3-.2.6-.6.6h-6.3c-.3 0-.6-.3-.6-.6m-2 0c0 1.4 1.2 2.6 2.6 2.6h6.3c1.4 0 2.6-1.2 2.6-2.6 0-.7-.3-1.3-.8-1.8l-3.1-3.1-.1-.1-.1-.1c-1.1-.9-2.6-.8-3.5.2l-3.1 3.1c-.5.5-.8 1.1-.8 1.8z"
        className="st2"
      />
      <path
        d="M170.7 1145.6h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
        className="st16"
      />
      <path
        d="M160.2 1154.6h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
        className="st11"
      />
      <path
        d="M130.2 1166.3H169v40h-38.8z"
        className="st17"
      />
      <path
        d="M169 1159.6v45.2c0 .7-.4 1.3-.8 1.3h-37.1c-.5 0-.8-.6-.8-1.3v-45.2"
        className="st16"
      />
      <path
        d="M252.5 1082.5v52"
        className="st14"
      />
      <path
        d="M247.7 1087.8c0 .9.7 1.6 1.6 1.6h6.3c.9 0 1.6-.7 1.6-1.6 0-.4-.2-.8-.5-1.1l-3.1-3.1c-.6-.6-1.5-.6-2.2-.1l-3.2 3.2c-.3.3-.5.7-.5 1.1z"
        className="st15"
      />
      <path
        d="M256.3 1087.8c0 .3-.3.6-.6.6h-6.3c-.4 0-.6-.3-.6-.6 0-.1.1-.3.2-.4l3.1-3.1c.3-.2.7-.2.9 0l3.1 3.1c.1.1.2.2.2.4m2 0c0-.7-.3-1.3-.8-1.8l-3.1-3.1c-.9-1-2.4-1.1-3.5-.2l-.1.1-.1.1-3.1 3.1c-.5.5-.8 1.1-.8 1.8 0 1.4 1.2 2.6 2.6 2.6h6.3c1.4 0 2.6-1.2 2.6-2.6z"
        className="st2"
      />
      <path
        d="M249.5 1145.6h15.2c1 0 1.8.8 1.8 1.8v39.2"
        className="st16"
      />
      <path
        d="M260 1154.6h-14c-.8 0-1.5-.7-1.5-1.5v-14c0-.8.7-1.5 1.5-1.5h14c.8 0 1.5.7 1.5 1.5v14c0 .8-.7 1.5-1.5 1.5z"
        className="st11"
      />
      <path
        d="M251.2 1166.3H290v40h-38.8z"
        className="st17"
      />
      <path
        d="M251.2 1159.6v45.2c0 .7.4 1.3.8 1.3h37.1c.5 0 .8-.6.8-1.3v-45.2"
        className="st16"
      />
      <path
        d="M420.4 1050.3c0-6.7-7.8-12.1-17.5-12.1s-17.5 5.5-17.5 12.1h.1c-.1.4-.1.7-.1 1.1v37.6c0 3.5 3.4 6.4 7.6 6.8v6.2h5.2v-6.1h9v6.1h5.2v-6.2c4.5-.2 8-3.2 8-6.8v-37.6c0-.3-.1-.7-.1-1.1h.1zM505.9 1059.8h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM490.7 1063.7l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st20"
      />
      <path
        d="m506.3 1074.3-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st20"
      />
      <path
        d="M498.5 1058.8v10"
        className="st21"
      />
      <path
        d="M489.5 1050.8h18M498.5 1051.8v8"
        className="st22"
      />
      <path
        d="M425.7 1069h59.2M511.5 1069.6h403"
        className="st1"
      />
      <circle
        cx={777.3}
        cy={1069}
        r={9.2}
        className="st24"
      />
      <path
        d="M987.9 1093.1h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
        className="st11"
      />
      <path
        d="M913.9 1076.6c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        className="st12"
      />
      <path
        d="M913.9 1064.9c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st2"
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
        transform="translate(949.199 1089.837) scale(.8974)"
      />
      <circle
        cx={967.1}
        cy={1107.6}
        r={10.9}
        className="st2"
      />
      <circle
        cx={967.1}
        cy={1107.4}
        r={8}
        className="st13"
      />
      <text
        className="st31 st29 st34"
        transform="translate(952.48 1147.327)">
        {"P-104"}
      </text>
      <path
        d="M987.9 994.6h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
        className="st11"
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
        transform="translate(949.199 991.358) scale(.8974)"
      />
      <circle
        cx={967.1}
        cy={1009.1}
        r={10.9}
        className="st2"
      />
      <circle
        cx={967.1}
        cy={1008.9}
        r={8}
        className="st13"
      />
      <text
        className="st31 st29 st34"
        transform="translate(952.48 1048.847)">
        {"P-103"}
      </text>
      <path
        d="M945.9 1122.8h-14.3c-2.8 0-5-2.3-5-5v-88.4c0-3.5 2.8-6.3 6.3-6.3h13M997.8 999h14.3c2.8 0 5 2.3 5 5v88.4c0 3.5-2.8 6.3-6.3 6.3h-13"
        className="st18"
      />
      <path
        d="M1064.2 1065.7v168.4c0 3.5-2.8 6.3-6.3 6.3h-13"
        className="st23"
      />
      <path
        d="M1039.9 1231.7h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM1024.7 1235.6l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st20"
      />
      <path
        d="m1040.3 1246.2-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st20"
      />
      <path
        d="M1032.5 1230.7v10"
        className="st21"
      />
      <path
        d="M1023.5 1222.7h18M1032.5 1223.7v8"
        className="st22"
      />
      <path
        d="M951.3 1257.2h-69.8c-2.6 0-4.6-2.1-4.6-4.6v-23.2c0-2.6 2.1-4.6 4.6-4.6h69.8c2.6 0 4.6 2.1 4.6 4.6v23.2c0 2.5-2 4.6-4.6 4.6z"
        className="st20"
      />
      <text
        className="st40 st29 st41"
        transform="translate(889.8 1244.933)">
        {"DESDE CIP"}
      </text>
      <path
        d="M959.2 1241.4h60.2"
        className="st23"
      />
      <path
        d="M983.9 1247.7c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        className="st20"
      />
      <path
        d="M983.9 1236c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st2"
      />
      <path
        d="M1070.8 1064.8c0 1-.8 1.9-1.9 1.9h-9c-1 0-1.9-.8-1.9-1.9 0-.5.2-1 .5-1.3l4.5-4.5c.7-.7 1.8-.7 2.6-.1l.1.1 4.5 4.5c.5.4.6.8.6 1.3z"
        className="st20"
      />
      <path
        d="M1059.1 1064.8c0-.2.1-.4.3-.6l4.5-4.5c.3-.3.9-.3 1.3 0l4.5 4.5c.2.2.3.4.3.6 0 .4-.3.9-.9.9h-9c-.6 0-1-.4-1-.9m-2 0c0 1.6 1.3 2.9 2.9 2.9h9c1.6 0 2.9-1.3 2.9-2.9 0-.8-.3-1.5-.8-2l-4.5-4.5-.1-.1-.1-.1c-1.2-.9-2.9-.9-3.9.2l-4.5 4.5c-.6.5-.9 1.2-.9 2z"
        className="st2"
      />
      <path
        d="M515 1470.8h679.9"
        className="st1"
      />
      <image
        xlinkHref="data:image/png;base64,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 4wAAAABJRU5ErkJggg=="
        width={176}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(203.242 1306)"
      />
      {/* Presión de Osmósis */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(5, "Presión de Osmósis", false)}>
        <path
          d="M271.7 1315.4h-53.1c-3.5 0-6.3 2.8-6.3 6.3V1424c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
          className="st2"
        />
        <path
          d="M212.4 1322.8h157.1v99.8H212.4z"
          className={getTarjetaClass(5, selected)}
        />
        <text
          className="st37"
          transform="translate(269.375 1367.462)">
          <tspan
            x={0}
            y={0}
            className="st19 st29 st30">
            {"Presi\xF3n"}
          </tspan>
          <tspan
            x={-13.2}
            y={16.8}
            className="st19 st29 st30">
            {"de Osmosis"}
          </tspan>
        </text>
        {/* Alarma Presión de Osmósis */}
        <g
          className={`${getTemaAlarma(5, loading, datosAlarmas)} cursorPointer`}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(5, "Presión de Osmósis");
          }}>
          <path
            d="M234.7 1399.1c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st5"
          />
          <path
            d="M233 1398.1c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM244.3 1396.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st5"
          />
          <path
            d="M244.9 1394.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM245.7 1404.1v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM240.7 1411.5c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st5"
          />
        </g>
        <text
          className="st31 st29 st38"
          transform="translate(271.994 1410.24)">
          {presionOsmosis}
        </text>
        <text
          className="st31 st29 st39"
          transform="translate(332.762 1409.84)">
          {"bar"}
        </text>
        <text
          className="st31 st29 st34"
          transform="translate(278.268 1342.464)">
          {"PT123"}
        </text>
      </g>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACMCAYAAADcDyOIAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABtNJREFUeNrsmwtT21YQRiVZfhCg JdPH9P//vTaBJBg/pVt5Zm/zzXKvbAtCiXXOzI5BseX4+mi1uxJFAfATU76TfcC4CW8hX9nzOiSG 15A3nCt1ecZzykQgL7yWxEGkDYltgwSOolbyqOFlBhiSfQ+PbSLi9mxGro/IG0WdSNQWEycyJQUM KRlU3r1FI49e9JMELp240y5mLlTk8kiNDJATuBVhtxKbLnbmUpPLxPUReWuTddHFlcTh97mJXbty AuBUkWPm3Ym0qy6eLNa2rcjVw3VPzTsxeQ/CXndxK3Ft22cmcSwlyMBwTt0bLPPuTNZlF49dfJPE 6OVtVeRUBq6kbFiYrHddfLS4E4ljFp5kamGAvqlDK6XDysR9MK8mImwj2brMCawTBc2+tybuH138 3sVvJvGNCT51dTASw7kCbyz7fjXnpva8xjV2jb3uP4nrnvrXC3yQ9y8T+aMJfOUEpnyAlwh8LfLu bPtaauFKmrmiT+DaCXxnmfcg758m8K1kYJo4GNrEqcAq78rq4cfi+9Sr6mviyoTAC2ngtA7+KCVE 7epfJIZTG7lY326cvEvXZ82K59OuoyVEbS+OU4gbi1v5OXVkIDCcM4loxMOduRanXAvn2LNBQd8c uC6+X8CYF99nwQvZ8UwmEABDRI7u7M2zuWTdafF8yqVn+lC7rFkmsvA0EXoVbkLWhVcoJfQ2BY1U 5k2WEKm7zlL3QuRu6AEYgnfNu9V701h1xo7LglkvvI3MJ7tWnbDDouD+X3gbcYtzk2T1wjcB+NFi 9/pWnSgrwLuE8RcgMAACAyAwIDAAAgMgMAACAwIDIDAAAgMgMCAwAAIDIDAgMAACAyAwAAIDAgMg MAACAyAwIDAAAgMgMAACAwIDIDAAAgMCAyAwAAIDIDAgMAACAyAwAAIDAgMgMAACAyAwIDAAAgMg MCAwAAIDIDAAAgMCAyAwAAIDIDAgMAACAyAwAAIDAgMgMAACAwIDIDAAAgMgMCAwAAIDIDAAAgMC AyAwAAIDIDAgMAACAyAwIDAAAgMgMAACAwIDIDAAAgMgMCAwAAIDIDAAAgMCAyAwAAIDAgNcgMDB opBHgLcmJHwcnIHDKTsEGCjqILeqAUcA4sJbZtwwVOC4k9YiuAD4EVk4512Susd+3Ukj0booR77w 5Qu/tLFL631KuRZyWbmWDaUT97CDfRe7ROwtqhFPM8oBQoeeU+YYUc/6XGsS2Tj4DOyPirjDbReb LtZdrOxxLa+tncDliARORcisQcicKsdWkgUn8N4cWzvHNrY9Stym1qnOyBuPio3tcNnFo8UHed1C BC5HIrDKWiWidM8NmZ6i7TlFjqVRiwKvza1v4tnS3NsksnC2Bg6Jo2JpO34weaf2/L0JPJUvrrxw cQsRd2JRW0zkYK4S8raytnrabBJfThiBxHFNdubZwbF7iwf7fWn/tnVZOBzLwFHglci7EHkPb/rU xZVtm4wgA5dO3to++8xFlLnK1HpbF3113qVn4MY+/8qy7kHev7v4JBKvEgKfVEKowHN5bpT3RqSe uFPrJQsc5Z3Z51/YmenK1m3uzkqaabSXeJK6bysSj0Hg4ASOJcSDyfuPyawCn1RC6JERBY6nykLq la9dXMuXNUnUf5cocMy+M/vsH+xAPsStParEUeCd9BO+1nuShqXJNSsXOj5rZG20VL3PCByOlRCF 2/FapGzkja4t48wk21z6JCIKHLPvla3DL13c2drE0c8He05l67k1UQ/CfrEv6cESwfLYafKCJxCt TLpWIvE3VwPv5OA+OoUoXBmhWTkKvJAsU4+oiYsCz03gQ9b9VcoBrW0XIvBa5P0s8UWyzGYEAucG Br68Wsk4bdvXH/TNgVON3ca+rJnrvsvE+GgMGfhGBIyLHUuFK1ubRnqJe6vvPkmj8jjSDKx18L6n wW36Sqv6SI3i32jrxK0yte+lClzK9GFhAsfsuxF5f0kI/NWybmxSPtu2RzlN7i+8iQsZz9rMaNFf Ti5OFVh3rgJXttCVKxvGcPXNTyHmLvPGuflTj8D3Uj48JMqHMUwhchOJ1MWds27m6TtiGvvy2oS0 Y7p0XMgkYiOn/b00vUsZMUaBtQb+IrVvrkkZ46Xl3OX13rWoz3gD/XkMJcOxWlhPc17gvimEjs+0 dGiL8d3UE05wrXipwMd2Xo5s4f1de9qI6JTGz4HXrsveHuuwRyrxWdT/93/gJ13wMlG/6cUfvTqp V5y0u94h7+vVdTC8qYuN3USmM3plUgVvXJfNX7gg8Ltp7PztlWVmXKQddoG8CPzesnFRPB8thky3 DQj8rtezPNJpAwAA/KT8K8AAJRQJnWTxgoYAAAAASUVORK5CYII="
        width={176}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(372.242 1306)"
      />
      {/* Recuperación RO */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(2, "Recuperación RO", false)}>
        <path
          d="M441.1 1315.4H388c-3.5 0-6.3 2.8-6.3 6.3V1424c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
          className="st2"
        />
        <path
          d="M381.8 1322.8h157.1v99.8H381.8z"
          className={getTarjetaClass(2, selected)}
        />
        <text
          className="st37"
          transform="translate(419.322 1361.462)">
          <tspan
            x={0}
            y={0}
            className="st19 st29 st30">
            {"Recuperaci\xF3n"}
          </tspan>
          <tspan
            x={32.7}
            y={16.8}
            className="st19 st29 st30">
            {"RO"}
          </tspan>
        </text>
        {/* Alarma Recuperacón RO */}
        <g
          className={`${getTemaAlarma(2, loading, datosAlarmas)} cursorPointer`}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(2, "Recuperacón RO");
          }}>
          <path
            d="M404.1 1399.1c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st5"
          />
          <path
            d="M402.4 1398.1c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM413.7 1396.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st5"
          />
          <path
            d="M414.3 1394.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM415.1 1404.1v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM410.1 1411.5c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st5"
          />
        </g>
        <text
          className="st31 st29 st38"
          transform="translate(441.4 1410.24)">
          {recuperacionRO}
        </text>
        <text
          className="st31 st29 st39"
          transform="translate(506.167 1409.84)">
          {"%"}
        </text>
      </g>
      <circle
        cx={291.3}
        cy={1470.9}
        r={9.2}
        className="st24"
      />
      <path
        d="M505.2 1481.3h-142c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h142c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.8 3.8-6 3.8z"
        className="st11"
      />
      <path
        d="M506.5 1481.3h-143c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l143.2 19.8c.6.3.5.9-.2.9z"
        className="st19"
      />
      <path
        d="M505.2 1506.4h-142c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h142c3.3 0 6 1.7 6 3.8v13.1c0 2.2-2.8 3.8-6 3.8z"
        className="st11"
      />
      <path
        d="M506.5 1506.4h-143c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l143.2 19.8c.6.3.5.9-.2.9z"
        className="st19"
      />
      <path
        d="M505.2 1531.5h-142c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h142c3.3 0 6 1.7 6 3.8v13.2c0 2.1-2.8 3.7-6 3.7z"
        className="st11"
      />
      <path
        d="M506.5 1531.5h-143c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l143.1 20c.7.1.6.7-.1.7z"
        className="st19"
      />
      <path
        d="M505.2 1556.6h-142c-3.3 0-6-1.7-6-3.8v-13c0-2 2.7-3.8 6-3.8h142c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.8 3.7-6 3.7z"
        className="st11"
      />
      <path
        d="M506.5 1556.6h-143c-3.4 0-6.3-1.7-6.3-3.8v-13c0-2 2.8-3.8 6.3-3.8l143.2 19.8c.6.3.5.8-.2.8z"
        className="st19"
      />
      <path
        d="M353.4 1547.3h-16.3c-2.8 0-5-2.2-5-5v-71.5M332.7 1495.8h20.4M514.7 1547.9h16.4c2.8 0 5-2.2 5-5v-70.7M535.4 1495.8H515M332.7 1521.8h20.4M535.4 1521.8H515M506.5 1717.4v52.1"
        className="st1"
      />
      <path
        d="M611.1 1644.3h-132c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.8 3.8-6 3.8z"
        className="st11"
      />
      <path
        d="M612.4 1644.3h-133c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.9-.2.9z"
        className="st19"
      />
      <path
        d="M611.1 1669.4h-132c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.2-2.8 3.8-6 3.8z"
        className="st11"
      />
      <path
        d="M612.4 1669.4h-133c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.9-.2.9z"
        className="st19"
      />
      <path
        d="M611.1 1694.5h-132c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.2c0 2.1-2.8 3.7-6 3.7z"
        className="st11"
      />
      <path
        d="M612.4 1694.5h-133c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.1 20c.7.1.6.7-.1.7z"
        className="st19"
      />
      <path
        d="M611.1 1719.6h-132c-3.3 0-6-1.7-6-3.8v-13c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.8 3.7-6 3.7z"
        className="st11"
      />
      <path
        d="M612.4 1719.6h-133c-3.4 0-6.3-1.7-6.3-3.8v-13c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.8-.2.8z"
        className="st19"
      />
      <path
        d="M469.3 1710.3H453c-2.8 0-5-2.2-5-5v-72.5M448.6 1658.8H469M620.6 1710.9H637c2.8 0 5-2.2 5-5v-67.7c0-2.5-2-4.4-4.4-4.4h-17M641.3 1658.8h-20.4M448.6 1684.8H469M641.3 1684.8h-20.4M642 1636.3v-165.4"
        className="st1"
      />
      <path
        d="M683.4 1761.5h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM668.2 1765.4l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st20"
      />
      <path
        d="m683.8 1776-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st20"
      />
      <path
        d="M676 1760.5v10"
        className="st21"
      />
      <path
        d="M667 1752.5h18M676 1753.5v8"
        className="st22"
      />
      <path
        d="M683.4 1816.7h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM668.2 1820.6l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st20"
      />
      <path
        d="m683.8 1831.2-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st20"
      />
      <path
        d="M676 1815.7v10"
        className="st21"
      />
      <path
        d="M667 1807.7h18M676 1808.7v8"
        className="st22"
      />
      <path
        d="M723.8 1886.6h124.8v97.7H723.8z"
        className="st19"
      />
      <path
        d="M848.5 1870.3v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1v-111.2"
        className="st16"
      />
      <text
        className="st31 st29 st34"
        transform="translate(766.381 2007.45)">
        {"TK-003"}
      </text>
      <path
        d="M642.3 1771.9v47.2c0 3.8 3.1 6.8 6.8 6.8h13.7M687.9 1770.7h14.3c3.5 0 6.3 2.8 6.3 6.3v48.9h-20.6"
        className="st1"
      />
      <path
        d="M703.3 1825.7h54c5.3 0 9.6 4.3 9.6 9.6v29"
        className="st1"
      />
      <path
        d="M760.1 1865.2c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
        className="st12"
      />
      <path
        d="M771.8 1865.2c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
        className="st2"
      />
      <path
        d="M1108.2 1886.6H1233v97.7h-124.8z"
        className="st19"
      />
      <path
        d="M1232.8 1870.3v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1v-111.2"
        className="st16"
      />
      <text
        className="st31 st29 st34"
        transform="translate(1150.745 2007.45)">
        {"TK-002"}
      </text>
      <circle
        cx={293.1}
        cy={1544.6}
        r={9.2}
        className="st25"
      />
      <path
        d="M512.4 1770.7h150.9"
        className="st1"
      />
      <path
        d="M399.7 1658.7v102c0 5.5 4.5 10 10 10h89.7"
        className="st0"
      />
      <circle
        cx={401.4}
        cy={1707.4}
        r={9.2}
        className="st25"
      />
      <path
        d="M963.2 1472.1v151.4c0 3.5-2.8 6.3-6.3 6.3h-13"
        className="st23"
      />
      <path
        d="M938.9 1621.1h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM923.7 1625l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st20"
      />
      <path
        d="m939.3 1635.6-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st20"
      />
      <path
        d="M931.5 1620.1v10"
        className="st21"
      />
      <path
        d="M922.5 1612.1h18M931.5 1613.1v8"
        className="st22"
      />
      <path
        d="M803 1646.6h69.8c2.6 0 4.6-2.1 4.6-4.6v-23.2c0-2.6-2.1-4.6-4.6-4.6H803c-2.6 0-4.6 2.1-4.6 4.6v23.2c-.1 2.5 2 4.6 4.6 4.6z"
        className="st20"
      />
      <text
        className="st40 st29 st41"
        transform="translate(812.52 1634.285)">
        {"HACIA CIP"}
      </text>
      <path
        d="M889.1 1630.7h29.4"
        className="st23"
      />
      <path
        d="M887.4 1624.4c1 0 1.9.8 1.9 1.9v9c0 1-.8 1.9-1.9 1.9-.5 0-1-.2-1.3-.5l-4.5-4.5c-.7-.7-.7-1.8-.1-2.6l.1-.1 4.5-4.5c.4-.5.8-.6 1.3-.6z"
        className="st20"
      />
      <path
        d="M887.4 1636.1c-.2 0-.4-.1-.6-.3l-4.5-4.5c-.3-.3-.3-.9 0-1.3l4.5-4.5c.2-.2.4-.3.6-.3.4 0 .9.3.9.9v9c0 .6-.4 1-.9 1m0 2c1.6 0 2.9-1.3 2.9-2.9v-9c0-1.6-1.3-2.9-2.9-2.9-.8 0-1.5.3-2 .8l-4.5 4.5-.1.1-.1.1c-.9 1.2-.9 2.9.2 3.9l4.5 4.5c.5.6 1.2.9 2 .9z"
        className="st2"
      />
      <image
        xlinkHref="data:image/png;base64,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"
        width={177}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(621.242 1306)"
      />
      {/* Caudal de Permeado */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(8, "Caudal de Permeado", false)}>
        <path
          d="M690.5 1315.6h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3H782c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
          className="st2"
        />
        <path
          d="M631.2 1323h157.1v99.8H631.2z"
          className={getTarjetaClass(8, selected)}
        />
        <text
          className="st37"
          transform="translate(689.8 1367.639)">
          <tspan
            x={0}
            y={0}
            className="st19 st29 st30">
            {"Caudal"}
          </tspan>
          <tspan
            x={-19.8}
            y={16.8}
            className="st19 st29 st30">
            {"de Permeado"}
          </tspan>
        </text>
        {/* Alarma Caudal de Permeado */}
        <g
          className={`${getTemaAlarma(8, loading, datosAlarmas)} cursorPointer`}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(8, "Caudal de Permeado");
          }}>
          <path
            d="M653.6 1399.3c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st5"
          />
          <path
            d="M651.9 1398.3c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM663.2 1397c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st5"
          />
          <path
            d="M663.8 1395.1c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM664.6 1404.3v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM659.6 1411.7c.9 0 1.7-.8 1.7-1.7H658c.1.9.7 1.6 1.6 1.7z"
            className="st5"
          />
        </g>
        <text
          className="st31 st29 st38"
          transform="translate(690.867 1410.416)">
          {caudalPermeado}
        </text>
        <text
          className="st31 st29 st39"
          transform="translate(757.634 1410.016)">
          {"l/s"}
        </text>
        <text
          className="st31 st29 st34"
          transform="translate(697.14 1342.64)">
          {"FE126"}
        </text>
      </g>
      <circle
        cx={710.2}
        cy={1471}
        r={9.2}
        className="st24"
      />
      <image
        xlinkHref="data:image/png;base64,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 WgAAAABJRU5ErkJggg=="
        width={176}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(791.242 1306)"
      />
      {/* Conductividad de Permeado */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(10, "Conductividad de Permeado", false)}>
        <path
          d="M859.8 1315.6h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
          className="st2"
        />
        <path
          d="M800.5 1323h157.1v99.8H800.5z"
          className={getTarjetaClass(10, selected)}
        />
        <text
          className="st37"
          transform="translate(836.938 1367.639)">
          <tspan
            x={0}
            y={0}
            className="st19 st29 st30">
            {"Conductividad"}
          </tspan>
          <tspan
            x={2.3}
            y={16.8}
            className="st19 st29 st30">
            {"de Permeado"}
          </tspan>
        </text>
        {/* Alarma Conductividad de Permeado */}
        <g
          className={`${getTemaAlarma(10, loading, datosAlarmas)} cursorPointer`}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(10, "Conductividad de Permeado");
          }}>
          <path
            d="M822.9 1399.3c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st5"
          />
          <path
            d="M821.2 1398.3c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM832.5 1397c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st5"
          />
          <path
            d="M833.1 1395.1c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM833.9 1404.3v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM828.9 1411.7c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st5"
          />
        </g>
        <text
          className="st31 st29 st38"
          transform="translate(860.184 1410.416)">
          {conductividadPermeado}
        </text>
        <text
          className="st31 st29 st39"
          transform="translate(915.952 1410.016)">
          {"dS/m"}
        </text>
        <text
          className="st31 st29 st34"
          transform="translate(866.458 1342.64)">
          {"AE127"}
        </text>
      </g>
      <circle
        cx={879.5}
        cy={1471}
        r={9.2}
        className="st24"
      />
      <circle
        cx={558.3}
        cy={627.1}
        r={9.2}
        className="st24"
      />
      <circle
        cx={738.6}
        cy={627.1}
        r={9.2}
        className="st24"
      />
      <circle
        cx={918.3}
        cy={627.1}
        r={9.2}
        className="st24"
      />
      <circle
        cx={1095}
        cy={627.1}
        r={9.2}
        className="st24"
      />
      <circle
        cx={607}
        cy={1069}
        r={9.2}
        className="st24"
      />
      <path
        d="m1195.4 1248.4 3 618.2M1198.4 824.3v395.5"
        className="st1"
      />
      <path
        d="M1192.1 1864.2c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
        className="st12"
      />
      <path
        d="M1203.8 1864.2c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
        className="st2"
      />
      <path
        d="M1184.2 1148c0-2.2 1.8-4.2 4.2-4.2h19.8c2.2 0 4.2 1.8 4.2 4.2 0 1.1-.4 2.2-1.1 2.9l-9.9 9.9c-1.5 1.5-4 1.5-5.7.2l-.2-.2-9.9-9.9c-1.2-.9-1.4-1.8-1.4-2.9z"
        style={{
          fill: "#00aeed",
          stroke: "#fff",
          strokeWidth: 4,
          strokeMiterlimit: 10
        }}
      />
      <path
        d="M1207.6 1241.4v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6h-14.8c-.9 0-1.6-.7-1.6-1.6zM1203.7 1226.2l-4.6 7.9c-.3.5-1 .5-1.3 0l-4.6-7.9c-.3-.5.1-1.2.7-1.2h9.2c.5 0 .9.7.6 1.2z"
        className="st20"
      />
      <path
        d="m1193.1 1241.8 4.6-7.9c.3-.5 1-.5 1.3 0l4.6 7.9c.3.5-.1 1.2-.7 1.2h-9.2c-.5 0-.9-.7-.6-1.2z"
        className="st20"
      />
      <path
        d="M1208.6 1234h-10"
        className="st21"
      />
      <path
        d="M1216.6 1225v18M1215.6 1234h-8"
        className="st22"
      />
      <text
        className="st35 st29 st36"
        transform="translate(331.983 623.756)">
        {"HIPOCLORITO"}
      </text>
      <text
        className="st35 st29 st36"
        transform="translate(113.802 1225.967)">
        {"METABISULFITO"}
      </text>
      <text
        className="st35 st29 st36"
        transform="translate(228.332 1225.967)">
        {"ANTIINCRUSTANTE"}
      </text>
      <path
        d="M362.1 1069.3v-43c0-4.5 3.6-8.1 8.1-8.1h62.2c4.5 0 8.1 3.6 8.1 8.1v43"
        className="st1"
      />
      <image
        xlinkHref="data:image/png;base64,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 MP4TYAD21iGmqI8mZAAAAABJRU5ErkJggg=="
        width={176}
        height={141}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(313.056 857.882)"
      />
      {/* Diferencial Filtros High Flow */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(17, "Diferencial Filtros High Flow", false)}>
        <path
          d="M382.1 867.7H329c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3V874c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
          className="st2"
        />
        <path
          d="M322.8 875.1h157.1v99.8H322.8z"
          className={getTarjetaClass(17, selected)}
        />
        <text
          className="st37"
          transform="translate(370.514 919.771)">
          <tspan
            x={0}
            y={0}
            className="st19 st29 st30">
            {"Diferencial"}
          </tspan>
          <tspan
            x={-19.1}
            y={16.8}
            className="st19 st29 st30">
            {"Filtros High Flow"}
          </tspan>
        </text>
        {/* Alarma Diferencial Filtros High Flow */}
        <g
          className={`${getTemaAlarma(17, loading, datosAlarmas)} cursorPointer`}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(17, "Diferencial Filtros High Flow");
          }}>
          <path
            d="M345.2 951.4c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st5"
          />
          <path
            d="M343.5 950.4c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM354.8 949.1c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st5"
          />
          <path
            d="M355.4 947.2c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM356.2 956.4v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM351.2 963.8c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st5"
          />
        </g>
        <text
          className="st31 st29 st38"
          transform="translate(382.467 962.548)">
          {diferencialFiltrosHighFlow}
        </text>
        <text
          className="st31 st29 st39"
          transform="translate(443.234 962.149)">
          {"bar"}
        </text>
        <text
          className="st31 st29 st34"
          transform="translate(365.74 894.773)">
          {"PT133 - PT120"}
        </text>
      </g>
      <circle
        cx={401.8}
        cy={1017.2}
        r={9.2}
        className="st24"
      />
      {/* Estado Bomba Alta Presón */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(16, "Estado Bomba Alta Presón", true)}>
        <circle
          cx={967.8}
          cy={1069.1}
          r={14.6}
          className="st11"
        />
        <circle
          cx={967.8}
          cy={1069.1}
          r={10.9}
          className="st2"
        />
        <circle
          cx={967.8}
          cy={1068.9}
          r={8}
          style={{
            fill: colorEstadoBombaAltaPresion
          }}
        />
      </g>
      <image
        xlinkHref="data:image/png;base64,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 RK5CYII="
        width={180}
        height={122}
        style={{
          overflow: "visible",
          opacity: 0.2
        }}
        transform="translate(100.73 1484.51)"
      />
      {/* Diferencial Segunda Etapa */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(3, "Diferencial Segunda Etapa", false)}>
        <path
          d="M216.3 1493.8h42.1c3.5 0 6.3 2.8 6.3 6.3v33.2c0 .8.3 1.6.8 2.2l5.3 6.5c1.1 1.4 1 3.3-.1 4.6l-5.1 5.5c-.6.7-.9 1.5-.9 2.4v36.9c0 3.5-2.8 6.3-6.3 6.3H115.9c-3.5 0-6.3-2.8-6.3-6.3v-91.3c0-3.5 2.8-6.3 6.2-6.3h100.5z"
          className="st2"
        />
        <path
          d="M115.6 1493.8h143.8v103.9H115.6z"
          className={getTarjetaClass(3, selected)}
        />
        <text
          className="st37"
          transform="translate(153.625 1541.562)">
          <tspan
            x={0}
            y={0}
            className="st19 st29 st30">
            {"Diferencial"}
          </tspan>
          <tspan
            x={-11.7}
            y={16.8}
            className="st19 st29 st30">
            {"Primera Etapa"}
          </tspan>
        </text>
        {/* Alarma Diferencial Primera Etapa */}
        <g
          className={`${getTemaAlarma(3, loading, datosAlarmas)} cursorPointer`}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(3, "Diferencial Primera Etapa");
          }}>
          <path
            d="M129.7 1572.2c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st5"
          />
          <path
            d="M128 1571.2c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM139.3 1569.9c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st5"
          />
          <path
            d="M139.9 1568c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM140.7 1577.2v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM135.7 1584.6c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st5"
          />
        </g>
        <text
          className="st31 st29 st38"
          transform="translate(167.504 1583.34)">
          {diferencialPrimeraEtapa}
        </text>
        <text
          className="st31 st29 st39"
          transform="translate(223.709 1582.94)">
          {"bar"}
        </text>
        <text
          className="st31 st29 st34"
          transform="translate(148.016 1517.564)">
          {"PT123 - PT129"}
        </text>
      </g>
      <image
        xlinkHref="data:image/png;base64,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"
        width={180}
        height={122}
        style={{
          overflow: "visible",
          opacity: 0.2
        }}
        transform="translate(208.316 1658.67)"
      />
      {/* Diferencial Segunda Etapa */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(4, "Diferencial Segunda Etapa", false)}>
        <path
          d="M324.5 1667.6h42.1c3.5 0 6.3 2.8 6.3 6.3v33.2c0 .8.3 1.6.8 2.2l5.3 6.5c1.1 1.4 1 3.3-.1 4.6l-5.1 5.5c-.6.7-.9 1.5-.9 2.4v36.9c0 3.5-2.8 6.3-6.3 6.3H224.1c-3.5 0-6.3-2.8-6.3-6.3v-91.3c0-3.5 2.8-6.3 6.2-6.3h100.5z"
          className="st2"
        />
        <path
          d="M223.8 1667.6h143.8v103.9H223.8z"
          className={getTarjetaClass(4, selected)}
        />
        <text
          className="st37"
          transform="translate(261.82 1715.294)">
          <tspan
            x={0}
            y={0}
            className="st19 st29 st30">
            {"Diferencial"}
          </tspan>
          <tspan
            x={-15.2}
            y={16.8}
            className="st19 st29 st30">
            {"Segunda Etapa"}
          </tspan>
        </text>
        {/* Alarma Diferencial Segunda Etapa */}
        <g
          className={`${getTemaAlarma(4, loading, datosAlarmas)} cursorPointer`}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(4, "Diferencial Segunda Etapa");
          }}>
          <path
            d="M237.9 1746c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st5"
          />
          <path
            d="M236.2 1745c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM247.5 1743.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st5"
          />
          <path
            d="M248.1 1741.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM248.9 1751v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM243.9 1758.4c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st5"
          />
        </g>
        <text
          className="st31 st29 st38"
          transform="translate(275.698 1757.072)">
          {diferencialSegundaEtapa}
        </text>
        <text
          className="st31 st29 st39"
          transform="translate(331.903 1756.671)">
          {"bar"}
        </text>
        <text
          className="st31 st29 st34"
          transform="translate(256.21 1691.296)">
          {"PT129 - PT130"}
        </text>
      </g>
      <circle
        cx={507.5}
        cy={1769.4}
        r={9.2}
        className="st24"
      />
      <path
        d="M407.3 1556v66.8c0 6.1 4.9 11.1 11.1 11.1l50.7.1"
        className="st1"
      />
      <circle
        cx={403.2}
        cy={1600.6}
        r={9.2}
        className="st24"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACMCAYAAADcDyOIAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABuxJREFUeNrsm4tu20YQRZcPWbIl N3aSFv3/70sR1y+9KLEkMJtej5cSJVtxIp4DDPRmgM3R8M5SDgEAAD6GjCU4+Zq2j2v3XM0yIfCv uJaZrGnm1rcWcWv3GBD4w9cwt/u5lBd4KxUf05HfQMkSvFvXLaxKuZ9LhGhl3VhVdhtcVwYE/uny 5ibryOrCamTPR4FbYddNrazWVhs68ccKnCHvD2kvrSZWIxG4lXVhNbfKTeaNxIqhSVz/LIGzPZP2 0ATObf1GJutVUzOpK5M6NzlbUZ+berQq7XFmclci8ZDkzTpkrt9L4CyR9/y0PcSBrRB5p01dN/VJ amavFdZhFybuv9KdY15eDDhOpHZmeotc9vgPyzom7Dwh81CiQxzWxhYZWnlvmvpsddvUH/ZaFLiN DPcmuwpcWqdeynA3lCihwm6P2aUpe5wmc5mqC1n0omO76Jy7chRYo8PMZG3F/drUF7vfJfCVfS7m 5ol15oVEiXMVOHVBZys7NJV8iTdyRuqMVuUeeQs5VV64UpGzPRn5HLNvHNpm1n2/WH21DnydEHhm z42tYnZ+tNdXZ56F60T3VXFXrmKsCl1rUu6Rt5Qucemm7LGcBvOBRAkVWOPDJ4kPn10GjkPcQuTV NW0//2ACLwcyzGlsqEzUpduhmdvjlXzu1bqUPbaHLmVIiTW15+N+Z4wSQ+zAU4sLN1afOnYhJu4M Frtv+9mnAXbgGA3i3vjc1uHBqhCP/HBX7+rAqQn7xk6Lt3Y/Shy7cNGRhc9V4PjlHrvts2sXE3Qf eCTZeWSvT034Z+tAfk/4nDtwzL2x+0Z572xtCvdejRzJDuwvi17IKa4V908ZUm7kFDlyOTg7c4Gz RLyK3dTHK72U7AfhsXTghXTfc9+FqJ2Ma9livLP1i176S+8b15WTESLvELiV928T+VY6zci1+yEI rDNC14BbuFi1Da8vPU9kWKnCMK7IaQyIAs9N4Ctbl2DrsZRaSRyrd2Vgn/GuZcpu5f1LpuyJ6zRD iBCpXRrdkSk7thcztzUZY0TltoyG8OMeHeJiB1Z543NPVs+2rmvvWNmxwHp6nIrEt1Izafd5GNaV uSwhZOoCT5AIkbnXouxb13XP/QJG7bJtZbKWIm8rrF70uUjsdu2NELpVNE0MKjN34DAggVMi77rE 3tWJ6zC8H7f7nYhKPKxM3pnsdI1dJMt2baP5GDGSaXsSXv7SKuY9n/XCwAROfWmzHe+vnehD/j3w VtyZOMfifvkocZZ/JXC2Z0jxpZmvCPxlR/YO780GvG7lHteKrmhWdnQTn+90C2hX3oPTyn+OeJ9S rmUdc8XOU7+XOJXzAE41T/RqkHnP7jDU3//Cx80UvXzLj/iGBLownKj7HuxW3vOAAL9KRz66AwP8 khMgAAIDIDAAAgMCAyAwAAIDIDAgMAACAyAwAAIDAgMgMAACAwIDIDAAAgMgMCAwAAIDIDAAAgMC AyAwAAIDIDAgMAACAyAwIDAAAgMgMAACAwIDIDAAAgMgMCAwAAIDIDAAAgMCAyAwAAIDAgMgMAAC AyAwIDAAAgMgMAACAwIDIDAAAgMgMCAwAAIDIDAgMAACAyAwAAIDAgMgMAACAyAwIDAAAgMgMCAw SwAIDIDAAAgMCAyAwAAIDIDAgMAACAyAwAAIDAgMgMAACAwIDIDAAAgMgMCAwCHUVkFuAX7rDuyl Rmw4NXt9y484AOLCKUT1rvXyLO9x0K1VfejBAY4Uubdr5Y5uq/JupLauMtYd3kHYbaLqRPNMClyb iHqwVtaqqXWiKquc3Qx4o8DaHKtEqcy+2b7owPriVuRdNbVsatHU3G4X8tnSCUxHhkOGs404prWS hrlxnfjHMcoOeeO3YWnSPjX1aHUln5uIwBkCw4ECR9eW5phWbJarHZ34VQbW7ruyA7QHe2jqzuQd 2fsrE3gkAiMvHCLxVhpl69l38+zenHuSblwlunBnB44Cz0XeicjbtvXnpi7tuYIODEcMb17g1rNv Tf1j9x/NQRW4cxfCRwgVeCzvjfLOROpCOjACw7EC35u836wbP5hrK5eDOyOED9Zzk7OQ2LCwf2hq YkeBc+SFIwX2Z/vvVvcm8LJvhNBgvTZZo5QatqcWHy4kA7MTAYfuQNTh/92uhWwWPJi8j/Z83Imo d3Xg1HS4cl05CjyR7lsyxMEbhrhteLldO7eu+2zyxu67N0L4A3dNi8/WeUurIiEvIsO+Duxnrhgl ViLzWuRNXlLeJVom0aCQUnHzjuyLwNBXYO3ElQgbbzU61OFA0TIRWYXOXWxAWHhrHt71W4hwTAf2 78kSRbeF99yVSP2grO4jZzhA5EBkgBNGirCr44YTiIe88J4SAwyH/wQYAJFbcVWfQODfAAAAAElF TkSuQmCC"
        width={176}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(418.242 1785)"
      />
      {/* Presión de Rechazo */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(6, "Presión de Rechazo", false)}>
        <path
          d="M525.5 1915.6h53.1c3.5 0 6.3-2.8 6.3-6.3V1807c0-3.5-2.8-6.3-6.3-6.3h-61.7c-1.2 0-2.4-.4-3.4-1.2l-.4-.3c-6.5-6.5-6.5-6.5-12.9.2-1 .9-2.2 1.3-3.5 1.3H434c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h91.5z"
          className="st2"
        />
        <path
          d="M427.8 1807.8h157.1v99.8H427.8z"
          className={getTarjetaClass(6, selected)}
        />
        <text
          className="st37"
          transform="translate(484.784 1852.452)">
          <tspan
            x={0}
            y={0}
            className="st19 st29 st30">
            {"Presi\xF3n"}
          </tspan>
          <tspan
            x={-13.6}
            y={16.8}
            className="st19 st29 st30">
            {"de Rechazo"}
          </tspan>
        </text>
        {/* Alarma Presión de Rechazo */}
        <g
          className={`${getTemaAlarma(6, loading, datosAlarmas)} cursorPointer`}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(6, "Presión de Rechazo");
          }}>
          <path
            d="M450.1 1884.1c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st5"
          />
          <path
            d="M448.4 1883.1c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM459.7 1881.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st5"
          />
          <path
            d="M460.3 1879.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM461.1 1889.1v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM456.1 1896.5c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st5"
          />
        </g>
        <text
          className="st31 st29 st38"
          transform="translate(487.403 1895.23)">
          {presionRechazo}
        </text>
        <text
          className="st31 st29 st39"
          transform="translate(548.17 1894.83)">
          {"bar"}
        </text>
        <text
          className="st31 st29 st34"
          transform="translate(493.676 1827.454)">
          {"PT130"}
        </text>
      </g>
      <image
        xlinkHref="data:image/png;base64,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 YII="
        width={180}
        height={122}
        style={{
          overflow: "visible",
          opacity: 0.2
        }}
        transform="translate(1008.738 1489.496)"
      />
      {/* pH de Mezcla */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(18, "pH de Mezcla", false)}>
        <path
          d="M1124.5 1498.4h42.1c3.5 0 6.3 2.8 6.3 6.3v33.2c0 .8.3 1.6.8 2.2l5.3 6.5c1.1 1.4 1 3.3-.1 4.6l-5.1 5.5c-.6.7-.9 1.5-.9 2.4v36.9c0 3.5-2.8 6.3-6.3 6.3h-142.5c-3.5 0-6.3-2.8-6.3-6.3v-91.3c0-3.5 2.8-6.3 6.2-6.3h100.5z"
          className="st2"
        />
        <path
          d="M1023.8 1498.4h143.8v103.9h-143.8z"
          className={getTarjetaClass(18, selected)}
        />
        <text
          className="st37"
          transform="translate(1085.046 1546.083)">
          <tspan
            x={0}
            y={0}
            className="st19 st29 st30">
            {"pH"}
          </tspan>
          <tspan
            x={-23}
            y={16.8}
            className="st19 st29 st30">
            {"de Mezcla"}
          </tspan>
        </text>
        {/* Alarma pH de Mezcla */}
        <g
          className={`${getTemaAlarma(18, loading, datosAlarmas)} cursorPointer`}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(18, "pH de Mezcla");
          }}>
          <path
            d="M1037.9 1576.8c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st5"
          />
          <path
            d="M1036.2 1575.8c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM1047.5 1574.5c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st5"
          />
          <path
            d="M1048.1 1572.6c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM1048.9 1581.8v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1043.9 1589.2c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st5"
          />
        </g>
        <text
          className="st31 st29 st38"
          transform="translate(1073.975 1587.86)">
          {phMezcla}
        </text>
        <text
          className="st31 st29 st34"
          transform="translate(1079.79 1522.085)">
          {"AE115"}
        </text>
        <text
          className="st31 st29 st39"
          transform="translate(1139.614 1587.86)">
          {"pH"}
        </text>
      </g>
      <circle
        cx={1198.5}
        cy={1549.2}
        r={9.2}
        className="st24"
      />
      <image
        xlinkHref="data:image/png;base64,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"
        width={180}
        height={122}
        style={{
          overflow: "visible",
          opacity: 0.2
        }}
        transform="translate(1008.738 1605.496)"
      />
      {/* Conductividad de Mezcla */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(19, "Conductividad de Mezcla", false)}>
        <path
          d="M1124.5 1614.3h42.1c3.5 0 6.3 2.8 6.3 6.3v33.2c0 .8.3 1.6.8 2.2l5.3 6.5c1.1 1.4 1 3.3-.1 4.6l-5.1 5.5c-.6.7-.9 1.5-.9 2.4v36.9c0 3.5-2.8 6.3-6.3 6.3h-142.5c-3.5 0-6.3-2.8-6.3-6.3v-91.3c0-3.5 2.8-6.3 6.2-6.3h100.5z"
          className="st2"
        />
        <path
          d="M1023.8 1614.3h143.8v103.9h-143.8z"
          className={getTarjetaClass(19, selected)}
        />
        <text
          className="st37"
          transform="translate(1051.343 1662.04)">
          <tspan
            x={0}
            y={0}
            className="st19 st29 st30">
            {"Conductividad"}
          </tspan>
          <tspan
            x={12.5}
            y={16.8}
            className="st19 st29 st30">
            {"de Mezcla"}
          </tspan>
        </text>
        {/* Alarma Conductividad de Mezcla */}
        <g
          className={`${getTemaAlarma(19, loading, datosAlarmas)} cursorPointer`}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(19, "Conductividad de Mezcla");
          }}>
          <path
            d="M1037.9 1692.7c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st5"
          />
          <path
            d="M1036.2 1691.7c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM1047.5 1690.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st5"
          />
          <path
            d="M1048.1 1688.5c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM1048.9 1697.7v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1043.9 1705.1c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st5"
          />
        </g>
        <text
          className="st31 st29 st38"
          transform="translate(1075.685 1703.817)">
          {conductividadMezcla}
        </text>
        <text
          className="st31 st29 st39"
          transform="translate(1125.89 1703.417)">
          {"dS/m"}
        </text>
        <text
          className="st31 st29 st34"
          transform="translate(1079.368 1638.041)">
          {"AE114"}
        </text>
      </g>
      <circle
        cx={1198.5}
        cy={1665.2}
        r={9.2}
        className="st24"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALUAAAB7CAYAAAAyscFtAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB4FJREFUeNrsnQtT4lgQRm9CBN+z 7k7V/v/ft+v4QB4ikk1qu4umvcHcgFNXPaeqCxUUa+bw0bk3pkMA+GIUmfwM+H7UH/WDqyPIi9SQ lexVgsz2tkBqOKK8dUTm+qOkLlyV7rZAbDhAaJV5427rQ8QueghdSo1M6ed6Py0JpLYUVuRXUxtX yWJXe4S2MrePOzFVSY2M1LQk0LfVCE7mdVMvptby9TBE7OqdhFaZJ1KnUhMj94g+Gwb0z1bmVVPP TS2lVlJhiNjVHqFHIm4r8XlTF6bOReyxSesCmaGH3LbleBGZF03Nm5pJzTuSvR4idXApPRGBr5r6 o6kfTV3L52dyv01rkhr6JLWm9EqS+ampaVMP4lMROYgshkhtVzlGpu24EKH/kvpT5L4wbciIpIbE pNa2o03lx6buxadRpOdOEjuW1L71uBCJW6H/bupnUzdNXcr9Y9d+IDbsE1qlXkvrMZOEPhPvapPi K3PguDm0p/ZSX0tC/xSxb0wLcuLaD6SGfS1ITOozcbEWibXHXshjXiSxi0g700vqsqOn/iEy30hq X4n0SA1DpH4VYU+N0CuRfCr11HHMNuhA0a5NT+SVdCEtx5UplbpEakiQWg8WJ8ZB219fmoWIExO0 g3vqwok9Drvr1Gdhu16tr7ISmWHAwWJpWg67XHzqFiGSloyryMpHCG+3xjW1xyG+s1jyfwWJYm9c Yvuym3tJodmV1L7H9ud8jIz4bLzAkDbEn09kQ7KKCH2Q1CGS3vuKPhpS6ApNe55RLDiDc66zty4T fgnSGI4tduzU5q53/97ulQN+GTZZ4KNEL47hWdlDXtoL+N3pfZBzrFpAbgl9MEgNn6XnRmr4viA1 IDUAUgMgNQBSAyA1IDUAUgMgNQBSAyA1IDUAUgMgNQBSAyA1IDUAUgMgNQBSw7eESyTAl5K572Xu kBo+VTr7y48lXyYaqSEXqf0w2tjFInulNVJDLi2Hn6xsr4WedFlfpIYcWg47Ea6VWSdW6IiMsZH7 XbGRGnJoO+woFhXaTlnWkSy9xK74d4UMWo8ybIdmtTK3g4yupdrBRu3ELp1ZboeF6mzFGqkhN7k1 qf2IQx07Z+cpro3UdYhMFEBqyKX9OHFSt6PD51JLKTso1Cb2TlojNeQitk/qZxF5YUpbEE1sLzZS QxZC1+Ht6PBLkVelnpuycqvYO8ONkBpySeogUuvcck3rufTVUzlonMqB4yJsN2w2JDXkJnVwvfVp 2E7BtWPDdbzzOOzOLN8Z78w6NeQktl8JsWvWulZtp+FGzwshqSG3NqQOu1NwY6PD/Zb5jtgkNXwW 4WNTvKI7ikgNOaCbKBspXYdeR0ofE914QWrITeyNkXklqx92nfo57C7lReVGasgppV9l1aNdh7ZL ebpdrkt5q7C7XU5SQ7ZthxW6Ffmhqfum7uTjadhum7+Ejh1FpIZc2g5tORaSyq3Mv5q6ldtWbD1j 79m0IG/O/UBqyCGpte3QHcRHkfrWlEo9D9sTm+ipIUt86zETee9E5n8lqR/C7mmoa9oPyDWlfVLP TFLfye192J7zYftplvQg235al/GeTU+tJzA9mpWP2AEiqx+QldCxA0U93XQWdk837frLF5IasmxB Ypsu9q9dVn2FRmrItQ15cbV+r+VAasg5sf35H51/i4jU8JlWQzbutu6T0EgNn+EAchBIDV8OpAak BkBqAKQGQGoApAakBkBqAKQGQGoApAakBkBqAKQGQGoApAakBkBqAKQGQGoApAZAakBqAKQGGIS9 oE3vKzMhNeQk8MFXZUJqyD2dDxK8fOfVc9RXEEBiYtdD3CsHPnGN6HBEkf0VT+2o5pAarOWRREZw GCqzXovaX5P61Qne+8Cx7Hnk2eeawYgNQ4SOTRBYh8TpAZbqnSf2r561u22rkO8pEBsSpFZ/VORn V7GxGElSxxp0/wpahe2QGf24NIlfGMEB+oSlCryQ0klcSyN2clrHktq+JajMOgRd66ypkTzJWj4u ndQIDiFysGcn3Lbi6sxErSdxbBm2U7k2KWld7XlrsAPQZ/JkD0Zo/cXG8vkIqaGH1LbtWIjI7WTb dlTzfege13xQT127V9Jcnrh9wlP5no0Ify5Sn7gWBKFh38GhnW47FaH/Cf/PIm89exTvVOpNSFhK rjqE1leSDkB/EHlLuV/fNlqpJyL1yAmN2OCP0/wcchuYtyL2L/na/BhJXZsVDCv1kzyuMAndfu0y InWJ0LBH7I2TemHa2nsR+s4k9col9aD2o3btx9K0Ffq1uTzpubQjE/k5HCxCn4PEV9N+6ALEkzg1 lduZ3PdiUnrw6oc+sZWyMKscKyP1qUnpiqSGhKRem7Rehu1y3tytfBy0Tt11sLg2v4yVemIOEH1K k9TQldRd+x9200WX8ZJ76feks6sYulxXuTox95UdKY3USB1La7tTbbfF7fZ4ctvRRzq9TxO4NAJb ke39KT8fvpfUwUjtz8Z7dbe2DT5aUneltq3YujQSQx/JYyfKxWoQxYDHFU52UhkO7bO7WpUPlbpv Hw4wpCU5WGTLiH9jyETqo/GfAAMAiopQRAVODy0AAAAASUVORK5CYII="
        width={180}
        height={122}
        style={{
          overflow: "visible",
          opacity: 0.2
        }}
        transform="translate(1008.738 1720.496)"
      />
      {/* Caudal de Mezcla */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(20, "Caudal de Mezcla", false)}>
        <path
          d="M1124.5 1729.7h42.1c3.5 0 6.3 2.8 6.3 6.3v33.2c0 .8.3 1.6.8 2.2l5.3 6.5c1.1 1.4 1 3.3-.1 4.6l-5.1 5.5c-.6.7-.9 1.5-.9 2.4v36.9c0 3.5-2.8 6.3-6.3 6.3h-142.5c-3.5 0-6.3-2.8-6.3-6.3V1736c0-3.5 2.8-6.3 6.2-6.3h100.5z"
          className="st2"
        />
        <path
          d="M1023.8 1729.7h143.8v103.9h-143.8z"
          className={getTarjetaClass(20, selected)}
        />
        <text
          className="st37"
          transform="translate(1072.692 1777.39)">
          <tspan
            x={0}
            y={0}
            className="st19 st29 st30">
            {"Caudal"}
          </tspan>
          <tspan
            x={-9.7}
            y={16.8}
            className="st19 st29 st30">
            {"de Mezcla"}
          </tspan>
        </text>
        {/* Alarma Caudal de Mezcla */}
        <g
          className={`${getTemaAlarma(20, loading, datosAlarmas)} cursorPointer`}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(20, "Caudal de Mezcla");
          }}>
          <path
            d="M1037.9 1808.1c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st5"
          />
          <path
            d="M1036.2 1807.1c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM1047.5 1805.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st5"
          />
          <path
            d="M1048.1 1803.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM1048.9 1813.1v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1043.9 1820.5c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st5"
          />
        </g>
        <text
          className="st31 st29 st38"
          transform="translate(1075.685 1819.167)">
          {caudalMezcla}
        </text>
        <text
          className="st31 st29 st39"
          transform="translate(1143.232 1818.767)">
          {"l/s"}
        </text>
        <text
          className="st31 st29 st34"
          transform="translate(1056.197 1753.391)">
          {"FE112 + FE126"}
        </text>
      </g>
      <circle
        cx={1198.5}
        cy={1781.5}
        r={9.2}
        className="st24"
      />
      <path
        d="M1168.5 1477.2c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        className="st12"
      />
      <path
        d="M1168.5 1465.5c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st2"
      />
      <path
        d="M670.3 1477.5c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        className="st12"
      />
      <path
        d="M670.3 1465.8c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st2"
      />
      <path
        d="M1136.4 830.3c1 0 1.9.8 1.9 1.9v9c0 1-.8 1.9-1.9 1.9-.5 0-1-.2-1.3-.5l-4.5-4.5c-.7-.7-.7-1.8-.1-2.6l.1-.1 4.5-4.5c.4-.5.8-.6 1.3-.6z"
        className="st12"
      />
      <path
        d="M1136.4 842c-.2 0-.4-.1-.6-.3l-4.5-4.5c-.3-.3-.3-.9 0-1.3l4.5-4.5c.2-.2.4-.3.6-.3.4 0 .9.3.9.9v9c0 .6-.4 1-.9 1m0 2c1.6 0 2.9-1.3 2.9-2.9v-9c0-1.6-1.3-2.9-2.9-2.9-.8 0-1.5.3-2 .8l-4.5 4.5-.1.1-.1.1c-.9 1.2-.9 2.9.2 3.9l4.5 4.5c.5.6 1.2.9 2 .9z"
        className="st2"
      />
      <path
        d="M720 830.3c1 0 1.9.8 1.9 1.9v9c0 1-.8 1.9-1.9 1.9-.5 0-1-.2-1.3-.5l-4.5-4.5c-.7-.7-.7-1.8-.1-2.6l.1-.1 4.5-4.5c.4-.5.8-.6 1.3-.6z"
        className="st12"
      />
      <path
        d="M720 842c-.2 0-.4-.1-.6-.3l-4.5-4.5c-.3-.3-.3-.9 0-1.3l4.5-4.5c.2-.2.4-.3.6-.3.4 0 .9.3.9.9v9c0 .6-.4 1-.9 1m0 2c1.6 0 2.9-1.3 2.9-2.9v-9c0-1.6-1.3-2.9-2.9-2.9-.8 0-1.5.3-2 .8l-4.5 4.5-.1.1-.1.1c-.9 1.2-.9 2.9.2 3.9l4.5 4.5c.5.6 1.2.9 2 .9z"
        className="st2"
      />
      <path
        d="M302.9 1075c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        className="st12"
      />
      <path
        d="M302.9 1063.3c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st2"
      />
      <path
        d="M632 1279c1 0 1.9.8 1.9 1.9v9c0 1-.8 1.9-1.9 1.9-.5 0-1-.2-1.3-.5l-4.5-4.5c-.7-.7-.7-1.8-.1-2.6l.1-.1 4.5-4.5c.4-.5.8-.6 1.3-.6z"
        className="st12"
      />
      <path
        d="M632 1290.7c-.2 0-.4-.1-.6-.3l-4.5-4.5c-.3-.3-.3-.9 0-1.3l4.5-4.5c.2-.2.4-.3.6-.3.4 0 .9.3.9.9v9c0 .6-.4 1-.9 1m0 2c1.6 0 2.9-1.3 2.9-2.9v-9c0-1.6-1.3-2.9-2.9-2.9-.8 0-1.5.3-2 .8l-4.5 4.5-.1.1-.1.1c-.9 1.2-.9 2.9.2 3.9l4.5 4.5c.5.6 1.2.9 2 .9z"
        className="st2"
      />
      <image
        xlinkHref="data:image/png;base64,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"
        width={180}
        height={122}
        style={{
          overflow: "visible",
          opacity: 0.2
        }}
        transform="translate(1208.738 679.496)"
      />
      {/* Caudal de Alimentación */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(7, "Caudal de Alimentación", false)}>
        <path
          d="M1272.9 792.4h-42.1c-3.5 0-6.3-2.8-6.3-6.3v-33.2c0-.8-.3-1.6-.8-2.2l-5.3-6.5c-1.1-1.4-1-3.3.1-4.6l5.1-5.5c.6-.7.9-1.5.9-2.4v-36.9c0-3.5 2.8-6.3 6.3-6.3h142.5c3.5 0 6.3 2.8 6.3 6.3v91.3c0 3.5-2.8 6.3-6.2 6.3h-100.5z"
          className="st2"
        />
        <path
          d="M1230.7 688.5h143.8v103.9h-143.8z"
          className={getTarjetaClass(7, selected)}
        />
        <text
          className="st37"
          transform="translate(1281.572 736.244)">
          <tspan
            x={0}
            y={0}
            className="st19 st29 st30">
            {"Caudal"}
          </tspan>
          <tspan
            x={-27.6}
            y={16.8}
            className="st19 st29 st30">
            {"de Alimentaci\xF3n"}
          </tspan>
        </text>
        {/* Alarma Caudal de Alimentación */}
        <g
          className={`${getTemaAlarma(7, loading, datosAlarmas)} cursorPointer`}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(7, "Caudal de Alimentación");
          }}>
          <path
            d="M1244.7 766.9c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st5"
          />
          <path
            d="M1243 765.9c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM1254.3 764.6c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st5"
          />
          <path
            d="M1254.9 762.7c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM1255.7 771.9v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1250.7 779.3c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st5"
          />
        </g>
        <text
          className="st31 st29 st38"
          transform="translate(1282.564 778.02)">
          {caudalAlimentacion}
        </text>
        <text
          className="st31 st29 st39"
          transform="translate(1346.77 777.62)">
          {"l/s"}
        </text>
        <text
          className="st31 st29 st34"
          transform="translate(1286.077 712.245)">
          {"FE116"}
        </text>
      </g>
      <circle
        cx={1198.4}
        cy={740.5}
        r={9.2}
        className="st24"
      />
    </svg>
  );
};

export default ScadaMission;

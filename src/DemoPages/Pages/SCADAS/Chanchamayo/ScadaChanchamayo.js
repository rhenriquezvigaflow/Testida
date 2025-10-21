import React from "react";

import {
  getColor,
  getColorConexion,
  getConexion,
  getScaledValue,
  getTarjetaClass,
  getTemaAlarma
} from "../../../../commons/scada/scada";

export const ScadaChanchamayo = ({
  datosScada,
  datosAlarmas,
  loading,
  selected,
  loadGrafico,
  onClickAlarma
}) => {
  const estadoConexion = getConexion(datosScada.con);
  const colorConexion = getColorConexion(datosScada.con);

  const ORP = getScaledValue(datosScada.d0, 2);
  const recuperacionRO = getScaledValue(datosScada.d2, 2);
  const diferencialPresionPrimeraEtapa = getScaledValue(datosScada.d3, 2);
  const diferencialPresionSegundaEtapa = getScaledValue(datosScada.d4, 2);
  const presionOsmosis = getScaledValue(datosScada.d5, 2);
  const presionRechazo = getScaledValue(datosScada.d6, 2);
  const caudalAlimentacionRO = getScaledValue(datosScada.d7, 2);
  const caudalPermeado = getScaledValue(datosScada.d8, 2);
  const conductividadAlimentacion = getScaledValue(datosScada.d9, 2);
  const conductividadPermeado = getScaledValue(datosScada.d10, 2);
  const diferencialPresionPretratamiento = getScaledValue(datosScada.d11, 2);

  const estadoBombaAlta = getColor(datosScada.d12);

  const temperaturaAlimentacion = getScaledValue(datosScada.d13, 1);
  const caudalAlimentacion = getScaledValue(datosScada.d14, 2);
  const caudalMezcla = getScaledValue(datosScada.d15, 2);
  const caudalRecirculacion = getScaledValue(datosScada.d16, 2);
  const diferencialPresionFiltrosHighFlow = getScaledValue(datosScada.d17, 2);
  const conductividadProductoFinal = getScaledValue(datosScada.d18, 2);
  const caudalProductoFinal = getScaledValue(datosScada.d19, 2);
  const caudalRechazo = getScaledValue(datosScada.d20, 2);

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
      viewBox="0 0 1429.5 2137.7">
      <style>
        {
          '.st0,.st1{fill:none;stroke:#008ba3;stroke-width:4;stroke-miterlimit:10}.st1{stroke:#00aeed}.st2{fill:#fff}.st5{fill:#3574e0}.st8{fill:#666}.st9{font-family:"ArialMT"}.st10{font-size:14px}.st11{fill:#606060}.st12{font-family:"Arial-BoldMT"}.st13{font-size:17px}.st16{opacity:7.000000e-02;fill:#323e48}.st17{fill:#2f3e49}.st18{fill:#00aeed}.st19{opacity:.15;fill:#0e76e7;enable-background:new}.st20{font-size:11px}.st21{opacity:.6;fill:none;stroke:#cbcbcb;stroke-width:2;stroke-miterlimit:10;enable-background:new}.st22{fill:#cbcbcb}.st23{fill:none;stroke:#2f3e49;stroke-width:4;stroke-miterlimit:10}.st24{fill:#00a39b}.st25{fill:none;stroke:#35ace8;stroke-width:4;stroke-miterlimit:10}.st26{fill:#0e76e7}.st27{fill:#323e48}.st28,.st29{fill:none;stroke:#323e48;stroke-width:4;stroke-miterlimit:10}.st29{stroke:#fff;stroke-width:2}.st30{fill:#7c7c7c}.st31{font-size:9px}.st32{fill:none;stroke:#2f3e49;stroke-width:3;stroke-miterlimit:10}.st33{fill:#c6c6c6}.st34{font-size:10px}.st35{enable-background:new}.st36{font-size:16px}.st37{font-size:13px}.st38,.st39,.st40{fill:#fff;stroke:#35ace8;stroke-width:4;stroke-miterlimit:10}.st39,.st40{stroke:#008ba3}.st40{fill:#00aeed;stroke:#fff}.tarjeta{fill:#ffffff}.tarjetaSeleccionada{fill:#3574e0;opacity:.15;}.campana{fill:#3474E0;}.campana:hover{fill:#7c7c7c;}.campanaVacia{fill:#c2c2c1;}.campanaVacia:hover{fill:#7c7c7c;}.campanaDesconectada{fill:#c2c2c1;}'
        }
      </style>
      <path
        d="M311.4 1469.9v94c0 5.5 4.5 10 10 10h88.1c5.5 0 10.1 4.4 10.1 9.9v77"
        className="st0"
      />
      <path
        d="M1248.4 1049.6h38.6c6.4 0 11.6 5.2 11.6 11.6v213.3c0 6-4.9 10.9-10.9 10.9h-1095c-6.7 0-12.2 5.5-12.2 12.2v163.1c0 5.4 4.3 9.7 9.7 9.7h182.9"
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
        className="st2"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAAB/CAYAAADRs0+fAAAACXBIWXMAAAuIAAALiAHljilJAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABN9JREFUeNrs2wlvE1cUgFFv2TBN gK7q9v//WCWKoNl3L30j3RduhiSdsU3aKudIV1OgGAnp831jD4MBAAAAvAzD//jrwUuy/DeCG6ar gGG9gJd9Yh6uGW57bGJYffPmgBddQh6uEe4oXUfpx+KF1QNexMxT0MvHQu4bW451XGbSmvprQP+j 8zxmVuY2rvMU9XLVgPPWbULdKrNdZqfMbsx2/LxNDP037zyibea6zGVcb+Ln5inmO5MeAY8i0Cba vTLTMq/LfBPXvYh48sh9MfBwwIvYtk2wV2XOy5yUOYv/rjG37487BTxK8e5GrAdl3pZ5F9eDCHo3 XnM8uP/pNPD0fW/dvE2wp2U+ljmMOYqOlhH63T3xPwVct+g4tus0ov2hzI8x35d5E5s4Bwx0i3ie NnDdvu/LfIimRumYvUjRL7ts4BrwTkT6XZlfyvwW1xrwNP6fSboPBrofoW/iuHwcJ91p9LRI98f3 Pp2edNi+9fjc3OPuR8A/l/m9zK/x4/3B5w+yxu5/oVfE+UOs61iIO9HTMu6LL9K98CyiHnY5QtdP nncj1G/j6PxTXN/FO8V22r7ufaFfwMt0lH6V+rmKI/VxXM8j4mGXe+Aa4iTeEaYRcfMO8faBe19f IcHqIdcHOMbpSN1E23ygdRBhb6dff3QDtx+RzF8hvUqTv/8dCxdWlp9qHA4+f1W7H1O/5cnPWnTe wPnJq/oQRz0yjwe+94VNqa3Vr2334rqT4r0LeNQh3vYmrn9A+/ln8cJmNnH95qcuzXrKbT9j0eu5 5cf+9ZF44esdqfOy/OIzplGPcAePxAt8vU385JIcrfjCwPOG/GDE/ukf/I8JGAQMCBgQMAgYEDAg YEDAIGBAwICAQcCAgAEBAwIGAQMCBgQMCBgEDAgYEDAIGBAwIGBAwCBgQMCAgAEBg4ABAQMCBgED AgYEDAgYBAwIGBAwCBgQMCBgQMAgYEDAgIABAYOAAQEDAgYBAwIGBAwIGAQMCBgQMCBgEDAgYEDA IGBAwICAAQGDgAEBAwIGBAwCBgQMCBgEDAgYEDAgYBAwIGBAwCBgQMCAgAEBg4ABAQMCBgQMLzvg pb82eDbL1vQOOP/mxQMDbF7ta55m0Y541ONdoL7YLGae/pClzQwbD/c25iaus/binHTcvov4zc2L XJe5iqkv3LwRjMsM/f3D2gHPoq2msYuYy/i5WV6Yk44vOI/f3LzQWZmTMqdlXsdrLOI69vcPa6mb 9zwaO47eziPi23T6fTTgZWsDz1LAzYsdlTkssxfbt/n1rRSwTQz91NbqsmzC/Ss6O4zucsCdjtB5 pV/FO8KnMn+meG9jE287RsPax+d53KZ+LPM+5lMEfRFx333u1OUeuAZ8EZt3J2IdRNRHEfBOCljE 0H8D14CvItom3j/iepg2cKcPsfIxehbvCqcp0ttY62/KTNMG9nAIrHeEvo5g62n3QzpC5w+xOm/g QQR7kVb9ZWzfaRynJ60jtC0M3eMdpIBvY1mexNG5mbMI+973wZOOL75olZ/viZuj81bavsKF9Y7R 9cR7mabGe++prD6xDSPQUYS/lcLN8QoY1jtG5+cu2g9w3Hsaq29sOeJR+vHQ0Rk2epRuB/vgE4+r xDZ8IljxwmYirhat7TwYbCA40cLzxvzgvzX4W4ABAO1HZHHk5T39AAAAAElFTkSuQmCC"
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
        className="st5"
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
        className="st8 st9 st10"
        transform="translate(1160.93 105.91)">
        {"Funcionando"}
      </text>
      <text
        className="st8 st9 st10"
        transform="translate(1160.93 125.91)">
        {"Movi\xE9ndose"}
      </text>
      <text
        className="st8 st9 st10"
        transform="translate(1160.93 145.91)">
        {"Falla"}
      </text>
      <text
        className="st8 st9 st10"
        transform="translate(1160.93 165.91)">
        {"Bloqueada"}
      </text>
      <text
        className="st8 st9 st10"
        transform="translate(1160.93 185.91)">
        {"Detenida"}
      </text>
      <text
        className="st11 st12 st10"
        transform="translate(75.5 77.73)">
        {"Conectividad de Planta"}
      </text>
      <text
        className="st11 st12 st13"
        transform="translate(109.29 128.21)">
        {estadoConexion}
      </text>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAqCAYAAADBNhlmAAAACXBIWXMAAAv+AAAL/gFBkBnlAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA75JREFUeNrsmOtO20AQhb2bdRLA uVSFQqu27/9iLSiohFyJ48TuujqDTod14oWi/omlIwMx48+zM2fHSZLTcTpOx+l418O8Q6xQzAr6 L4A2EjAK1vwDMIs4+ixHCaCSfm4Na94IJnJeHcghriGwPbTDuaKzXBM8XGQ5cIZqmBTqevUgR5D1 zQtSTj/vALZT2X4ToGRMwM6gC+jcq4+4Fjfcem28nqA1zgJrCfYFpItYVktZ6wNo4DUiDQDZJcAa ZAUtoLnXEqAbqAjVpYtcWsna0OuD10foEr+PAB4CrMFmXo9eD5CAWmSWa7KKAdRwNdC112ecrwA6 JECpwRyZWhDcvVdGoIbgWEcBDS1tF8tXZ+rG65vXV0Be4e8Zlj+lm26hNTL2QKWQIS53Ond31Qaw E8heDfUdkDfI3gDXpPgfi5vsoA2uyXBdD2dDDyGN8+yZrmXXSvbGyFYN+AXnT6i9c8BpHxTP6xFY h8pmj+xKI+Xkl4mLWN4LAF4C6ho/j/EZ39iobY5N3CpzfkLzTHFeA/JPk7VZYoe6yqhzpWuHyvua 9uMOrUZCu0qJrD0gnnS2E9txLayFAYfI2IhqqQsA07B1GgXKPlog1hixucnyGMCUdoyBgnMH4EKg AtmjmBnOLx7YRhh0FwH6CJ4eyVzbmD2K21VxE3sgSKhZXAAsBjBR/2NpuHCqyRoBm4IZ1QRvHXZD MUzTbNd0sI/tyXT3vF9GHjrmnsYvvZMcBWRLyJVeA8pwOxrFRDlBNmawUlPFnoZNcft1ADIWToaI FSaaFc2JzzHtkWAlBZNAc0wmS5rj/nrqlnAyPMygOe6xwTWthgXJoADKljSFwZ6RD6aBtzsePks8 zAYPJ7F+QY/4e84TdqdlB7PFyLtHN2A5oZlOsrulB51iJpx4/fT64XWHrW5Fy1x1WtqAVV7o1MtR oiZh7voiMLROAHQHwFsAz3Bd0QYwCfieocnEqhrmhiqo1jZUv7KkAiaQE3y21E3iWhR2RZawxlP2 aM8s6bNMbYMJYPVEfQuwewDP8flWu4JrYQ0lTb1PCMYT8xZPPg5M1YmyqBkAJ4Cb4vcFOUIZ807C HShLtqQ6K2jpQiNYQs2xpBoUJ1iQB25Dxu9aGmxJ2eB6k+w90ou7ZFDqc0cv7isCXdF7ca6yF/3i zpCVApTa6pMFsfXwTrQJQBVszBowdiIxynL4+5mUrIdHJt3dhdp9Dn6J9JqRySgAS03TCXwFp7e5 StVadehruNfOdE3zIUOHSqQMWFhyaBr6LcAAPsjVFTbGlHAAAAAASUVORK5CYII="
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
          fill: colorConexion
        }}
      />
      <text
        className="st11 st12 st10"
        transform="translate(1134.97 77.73)">
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
        d="M651.2 367.2c0-27.5-41.4-50-92.8-50s-92.8 22.5-92.8 50h.7c-.4 1.4-.7 2.8-.7 4.4v129.3c0 14.4 17.9 26.4 40.3 28.1v14.6h27.5v-14.3h47.5v14.3h27.5V529c23.6-.8 42.5-13.1 42.5-28.1V371.6c0-1.4-.4-3.1-.7-4.4h1z"
        className="st16"
      />
      <path
        d="M342 461.3h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7V464c0-1.5-1.2-2.7-2.7-2.7z"
        className="st17"
      />
      <path
        d="M271 457.8c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        className="st18"
      />
      <path
        d="M271 446.1c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9L273 445c-.5-.6-1.2-.9-2-.9z"
        className="st2"
      />
      <path
        d="M219.5 450.9h48.6"
        className="st1"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA69JREFUeNrsmHtP2zAUxWPHfRfa 8RADse37f66xaWMDCiWQpkk9Rzp3OrpL2iTQbX8Q6Sh9xf35Xt+HHUVv19v1by/zl8b1/wOgoXsV oO8CbF4JTMvWAFZpb4DyrCXFdBdYASmCNnT3dPevDWgUVKleUD/I4XVMgCVUHrSGckhga0HNC+AY ahA0goZ4L5AbQK2CUqWMYBn09+VeANcH0CToIOgQ91JjQFr8aQn3HPRIWgY94fMVJhFpSNcRbgCI Eupd0HHQCV7PgqawZAw3poApoe6D7oJugxZ4/wjQTEO6jpYbA6SEeh90HnSG93MADghQLLgE3E3Q NTSg9RppSNcijVhMaAg3ngZdBH0IugTkMaw6wUQsrcEUlroH4Ez9LqoIGN/GguLa0jpHsNzHoE8A PIOLxXpORXEGyDlNQqzHkc6RbVxD60nEjjDzU1jsErqAe6f4jcMzkcqDOtIdvuMol4Ap2rjYAnAM CwjgOSx5AvARfmfJbZ7cJznSUQpaUQCVSgBaQm5cw7Un7p0A8ASQp3DrAazSV1WEATm5G7LcE63L GwRRH+CFa2E9WX8zrMEjiliGs1uKgbzu4RkZb05BMyQLG9syeidY4DM1YK8Grq52cxUaYemM8VrK pd0FyAM7KmdTaKzgTIcGw5F3+mp9mm2ApqbuDqERRWFM66pr2YwrxjJRQ5fozsXRYHFHsKqlVNm8 bAP0WxrOnX1cw8tTUv6jiuwC5AEKaI2KkFFft2kJ6ivG5j6xYEi7ZRBOsDkV/AR6pn5OylPTi8FW pExBNrKgJ8AE2f4Bhf8Jn3PD2dQja6oijxhbj9eo1G2op0uQ9RfI+HOkm56arF70vsJyMt4DxpS+ MG1Ti71ycQK4n6gkh9SYyu+dqsVVbpXecIHGVUrcEt+txYJxy21lTMm1TynHVkT7hqBycqnAlVDf gq6gr0E/YNFU3By3yFl638vJeaOiPSeoTK21BcF9CfqM+3dYMcEzxa5uRqeEHDNbUnmTjkTW0hFt mnrk+oI6lwe49RpWuwLsHb7PuuxJvPoTQ9DP+NM7AM5quuUVBdkt3Cn7khtMPNVpy7VIrBEe5rWm +7m52pOwBTlNLWhXt6CUlXEObGtBTtoMmNLamgKOO2uj9iQJ7Y0592XqWKTTyYIOEket2ID2Grp5 lYllBLqi/UftyULXow/d13GX42hHZ1XaKdS5TL6Ps5mqSsFpx1b0h16lo72fbtWBbuvt9Jng3s8H d22MduXVRtcvAQYADZa3qaVESocAAAAASUVORK5CYII="
        width={39}
        height={39}
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        transform="translate(303.273 457.98) scale(.8974)"
      />
      <circle
        cx={321.1}
        cy={475.7}
        r={10.9}
        className="st2"
      />
      <circle
        cx={321.1}
        cy={475.5}
        r={8}
        className="st19"
      />
      <text
        className="st11 st9 st20"
        transform="translate(306.556 515.47)">
        {"P-102"}
      </text>
      <path
        d="M342 382.8h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
        className="st17"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA8RJREFUeNrsWH9T2kAQzSUHRBGw WFtr25l+/69lf1qqogQhkqSXmbfO6zYJd2DrPzLzJqDheLe7b/floujl9fJ63pf5x+vW1wrvq+cm aAiRIsjkggjbJyIWK4IxEa0aUDYQfvIIMpkaiYKhCJZAQeC/txK1e0ZNyPQc+kAPSHBP/cMbhwcg x3UDFF0RtXuQsyAycDhwOCSkRLIEqbXDvcMS1xX+lhPRv+rT7khOIlaTOXKYEEYOQxAXgisQWzjc Abf4LIQfVDSrUIJMbgASNaETh1Ng6nAM0gOsX4BgBmJzhyuHX7jeYCNLRDRiknbHtNbkXjm8cXjn cO5w5vAaBIdIcwyCOaJUE7x2mDlc0kYSElTOrckGqtUirWOQ++DwEThDNMe4p4fvlKgxSfMckZ6o +0TVfPVOsZBLUWMnIFQT++Tw3uEtfvQI9WmplkrU2ArfH4FcH9GrSNUsmMIGRK8HtU5Qb+eI4Huk eapqL1GNusAGU9zDKheFi7pzEYz1jF6C3Q5RY6eI2BlSPUVUUkqZHgIJEU+oPldQ8y1wh1KoI26s 52xNSLnHpNwTUm1KKdPkKiJllCAyiKtW9U9kqY+obmxga5GeN4WKJ9Tzei3k9EiVmpMNj4ERqd/K CLUB6h2gsEe06JAEEXvMdqPS3QOhA0A2+rheHKBgITgEDmj2+pBr66tWzfA/Nht7GE6jDEFK9WZV bYWaWaMckLZtURywkHYw8Q6Ri7YYV6P/H3suwB2+oKFe7Wrl1draJ1ZcX74LPJBtWpOvKwJJVqp5 s1cUn/i4+dhjERlD0u0XZJPWDYv6Rk2IrdUEYdtV+ai4JILS8efo+Jk0VJX2bdEraDZn5BMz2nTp Y7c4xbLYHJbpGlPkEGo2UHZb6XA22H7JenMQZfP6ONC7GnVE7UB61oCGPjfqJoHpeluT7ap94VeH Lw6fHX7AwMosLpPAvhUTUdvQpKuWpzghxlmoyX0DsQu8nyGqUjZbCZoOA2FUdJiMpDGndC7JUddu +juIXSCCl4jePdVgaT2bKQvljkyBPLEtyCmPlRmNyPYv6ZnkElFjckv2gqEPTUKGjzQ26kenZCJS ci4FNpfRvTPYqxk+Lzi1IZaf24a0h4xs/BKt50o9duoIrinNN8Ac381Qn/rRM9iBNJmHJpfDD+6R 6nv3IJSB8Kqhl+58NtNkHKwi21dHH1HLuMxpvBXqnGavwyPTcXhkGw6Poga1b4h02TWB9j3dilqO 3eKWA8xKuaCt8/spDjDNlmuXCfnvR8CmY+2dvONvAQYAMt6s5o5cdDAAAAAASUVORK5CYII="
        width={39}
        height={39}
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        transform="translate(303.273 379.5) scale(.8974)"
      />
      <circle
        cx={321.1}
        cy={397.3}
        r={10.9}
        className="st2"
      />
      <circle
        cx={321.1}
        cy={397.1}
        r={8}
        className="st19"
      />
      <text
        className="st11 st9 st20"
        transform="translate(306.556 436.99)">
        {"P-101"}
      </text>
      <path
        d="M403 440.8v92"
        className="st21"
      />
      <path
        d="M407.8 446.1c0 .9-.7 1.6-1.6 1.6h-6.3c-.9 0-1.6-.7-1.6-1.6 0-.4.2-.8.5-1.1l3.1-3.1c.6-.6 1.5-.6 2.2-.1l3.2 3.2c.3.3.5.7.5 1.1z"
        className="st22"
      />
      <path
        d="M399.2 446.1c0-.2.1-.3.2-.4l3.1-3.1c.2-.2.6-.2.9 0l3.1 3.1c.1.1.2.3.2.4 0 .3-.2.6-.6.6h-6.3c-.3 0-.6-.3-.6-.6m-2 0c0 1.4 1.2 2.6 2.6 2.6h6.3c1.4 0 2.6-1.2 2.6-2.6 0-.7-.3-1.3-.8-1.8l-3.1-3.1-.1-.1-.1-.1c-1.1-.9-2.6-.8-3.5.2l-3.1 3.1c-.5.5-.8 1.1-.8 1.8z"
        className="st2"
      />
      <path
        d="M406 543.9h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
        className="st23"
      />
      <path
        d="M395.5 552.9h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
        className="st17"
      />
      <path
        d="M365.5 564.6h38.8v40h-38.8z"
        className="st24"
      />
      <path
        d="M404.3 557.9v45.2c0 .7-.4 1.3-.8 1.3h-37.1c-.5 0-.8-.6-.8-1.3v-45.2"
        className="st23"
      />
      <path
        d="M299.9 491h-14.3c-2.8 0-5-2.3-5-5v-68.4c0-3.5 2.8-6.3 6.3-6.3h13M351.9 387.1h14.3c2.8 0 5 2.3 5 5v68.4c0 3.5-2.8 6.3-6.3 6.3h-13"
        className="st25"
      />
      <path
        d="M475.6 439.1c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        className="st18"
      />
      <path
        d="M475.6 427.4c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st2"
      />
      <path
        d="M372.5 432.2h100.2"
        className="st1"
      />
      <path
        d="M89.4 378.9h124.8v97.7H89.4z"
        className="st26"
      />
      <path
        d="M214.1 362.5v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1V362.5"
        className="st23"
      />
      <text
        className="st11 st9 st20"
        transform="translate(91.985 499.673)">
        {"TK-001 ALIMENTACI\xD3N"}
      </text>
      <path
        d="M529.6 385h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM514.4 388.9l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st27"
      />
      <path
        d="m530 399.5-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st27"
      />
      <path
        d="M522.2 384v10"
        className="st28"
      />
      <path
        d="M513.2 376h18M522.2 377v8"
        className="st29"
      />
      <path
        d="M537.2 394.3h47.1M576.3 595.3h-10.8c-2.8 0-5-2.3-5-5v-95.4M506.5 493.3h-13.3c-2.8 0-5-2.3-5-5V387.9"
        className="st25"
      />
      <text
        className="st30 st9 st31"
        transform="translate(506.813 414.11)">
        {"VX-101"}
      </text>
      <path
        d="M607.6 385h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM592.4 388.9l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st27"
      />
      <path
        d="m608 399.5-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st27"
      />
      <path
        d="M600.2 384v10"
        className="st28"
      />
      <path
        d="M591.2 376h18M600.2 377v8"
        className="st29"
      />
      <text
        className="st30 st9 st31"
        transform="translate(584.863 414.11)">
        {"VX-102"}
      </text>
      <path
        d="M529.6 484.2h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM514.4 488.1l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st27"
      />
      <path
        d="m530 498.7-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st27"
      />
      <path
        d="M522.2 483.2v10"
        className="st28"
      />
      <path
        d="M513.2 475.2h18M522.2 476.2v8"
        className="st29"
      />
      <path
        d="M537.2 493.5h47.1"
        className="st25"
      />
      <text
        className="st30 st9 st31"
        transform="translate(506.813 513.326)">
        {"VX-103"}
      </text>
      <path
        d="M607.6 484.2h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM592.4 488.1l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st27"
      />
      <path
        d="m608 498.7-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st27"
      />
      <path
        d="M600.2 483.2v10"
        className="st28"
      />
      <path
        d="M591.2 475.2h18M600.2 476.2v8"
        className="st29"
      />
      <text
        className="st30 st9 st31"
        transform="translate(584.863 513.326)">
        {"VX-104"}
      </text>
      <path
        d="M596.6 586h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM581.4 589.9l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st27"
      />
      <path
        d="m597 600.5-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st27"
      />
      <path
        d="M589.2 585v10"
        className="st28"
      />
      <path
        d="M580.2 577h18M589.2 578v8"
        className="st29"
      />
      <text
        className="st30 st9 st31"
        transform="translate(573.863 615.09)">
        {"VX-105"}
      </text>
      <path
        d="M614.6 491.8h13.3c2.8 0 5 2.3 5 5v53.1c0 4 3.2 7.2 7.2 7.2h525.7"
        className="st32"
      />
      <path
        d="M614.6 393.3h13.3c2.8 0 5 2.3 5 5v100.4"
        className="st32"
      />
      <path
        d="M857 367.2c0-27.5-41.4-50-92.8-50s-92.8 22.5-92.8 50h.7c-.4 1.4-.7 2.8-.7 4.4v129.3c0 14.4 17.9 26.4 40.3 28.1v14.6h27.5v-14.3h47.5v14.3h27.5V529c23.6-.8 42.5-13.1 42.5-28.1V371.6c0-1.4-.4-3.1-.7-4.4h1z"
        className="st16"
      />
      <path
        d="M735.3 385h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM720.1 388.9l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st27"
      />
      <path
        d="m735.7 399.5-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st27"
      />
      <path
        d="M727.9 384v10"
        className="st28"
      />
      <path
        d="M718.9 376h18M727.9 377v8"
        className="st29"
      />
      <path
        d="M712.3 394.8H699c-2.8 0-5-2.3-5-5v-91M742.9 394.3h47.2M780.1 595.3h-8.8c-2.8 0-5-2.3-5-5v-95.4"
        className="st25"
      />
      <path
        d="M712.3 493.3H699c-2.8 0-5-2.3-5-5V387.9"
        className="st25"
      />
      <text
        className="st30 st9 st31"
        transform="translate(712.577 414.11)">
        {"VX-106"}
      </text>
      <path
        d="M813.4 385h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM798.2 388.9l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st27"
      />
      <path
        d="m813.8 399.5-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st27"
      />
      <path
        d="M806 384v10"
        className="st28"
      />
      <path
        d="M797 376h18M806 377v8"
        className="st29"
      />
      <text
        className="st30 st9 st31"
        transform="translate(790.627 414.11)">
        {"VX-107"}
      </text>
      <path
        d="M735.3 484.2h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM720.1 488.1l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st27"
      />
      <path
        d="m735.7 498.7-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st27"
      />
      <path
        d="M727.9 483.2v10"
        className="st28"
      />
      <path
        d="M718.9 475.2h18M727.9 476.2v8"
        className="st29"
      />
      <path
        d="M742.9 493.5h47.2"
        className="st25"
      />
      <text
        className="st30 st9 st31"
        transform="translate(712.577 513.326)">
        {"VX-108"}
      </text>
      <path
        d="M813.4 484.2h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM798.2 488.1l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st27"
      />
      <path
        d="m813.8 498.7-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st27"
      />
      <path
        d="M806 483.2v10"
        className="st28"
      />
      <path
        d="M797 475.2h18M806 476.2v8"
        className="st29"
      />
      <text
        className="st30 st9 st31"
        transform="translate(790.627 513.326)">
        {"VX-109"}
      </text>
      <path
        d="M801.4 586h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM786.2 589.9l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st27"
      />
      <path
        d="m801.8 600.5-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st27"
      />
      <path
        d="M794 585v10"
        className="st28"
      />
      <path
        d="M785 577h18M794 578v8"
        className="st29"
      />
      <text
        className="st30 st9 st31"
        transform="translate(778.627 615.09)">
        {"VX-110"}
      </text>
      <path
        d="M820.4 491.8h13.3c2.8 0 5 2.3 5 5v59.4"
        className="st32"
      />
      <path
        d="M820.4 393.3h13.3c2.8 0 5 2.3 5 5v100.4"
        className="st32"
      />
      <path
        d="M806.8 595.3h7.4c4.1 0 7.4 3.3 7.4 7.4v50.6"
        className="st25"
      />
      <path
        d="M1061.7 367.2c0-27.5-41.4-50-92.8-50s-92.8 22.5-92.8 50h.7c-.4 1.4-.7 2.8-.7 4.4v129.3c0 14.4 17.9 26.4 40.3 28.1v14.6h27.5v-14.3h47.5v14.3h27.5V529c23.6-.8 42.5-13.1 42.5-28.1V371.6c0-1.4-.4-3.1-.7-4.4h1z"
        className="st16"
      />
      <path
        d="M940.1 385h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM924.9 388.9l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st27"
      />
      <path
        d="m940.5 399.5-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st27"
      />
      <path
        d="M932.7 384v10"
        className="st28"
      />
      <path
        d="M923.7 376h18M932.7 377v8"
        className="st29"
      />
      <path
        d="M917.4 394.8H900c-.5 0-1-.4-1-1v-90.6c0-2.5-2-4.4-4.4-4.4h-48.5l-351.2 1c-3.7 0-6.7 3-6.7 6.7v83.2c0 2.8 2.3 5 5 5h13.3M947.7 394.3h47.1M984.8 595.3H976c-2.8 0-5-2.3-5-5v-95.4"
        className="st25"
      />
      <path
        d="M917 493.3h-13.3c-2.8 0-5-2.3-5-5V387.9"
        className="st25"
      />
      <text
        className="st30 st9 st31"
        transform="translate(917.34 414.11)">
        {"VX-111"}
      </text>
      <path
        d="M1018.1 385h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM1002.9 388.9l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st27"
      />
      <path
        d="m1018.5 399.5-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st27"
      />
      <path
        d="M1010.7 384v10"
        className="st28"
      />
      <path
        d="M1001.7 376h18M1010.7 377v8"
        className="st29"
      />
      <text
        className="st30 st9 st31"
        transform="translate(995.39 414.11)">
        {"VX-112"}
      </text>
      <path
        d="M940.1 484.2h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM924.9 488.1l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st27"
      />
      <path
        d="m940.5 498.7-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st27"
      />
      <path
        d="M932.7 483.2v10"
        className="st28"
      />
      <path
        d="M923.7 475.2h18M932.7 476.2v8"
        className="st29"
      />
      <path
        d="M947.7 493.5h47.1"
        className="st25"
      />
      <text
        className="st30 st9 st31"
        transform="translate(917.34 513.326)">
        {"VX-113"}
      </text>
      <path
        d="M1018.1 484.2h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM1002.9 488.1l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st27"
      />
      <path
        d="m1018.5 498.7-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st27"
      />
      <path
        d="M1010.7 483.2v10"
        className="st28"
      />
      <path
        d="M1001.7 475.2h18M1010.7 476.2v8"
        className="st29"
      />
      <text
        className="st30 st9 st31"
        transform="translate(995.39 513.326)">
        {"VX-114"}
      </text>
      <path
        d="M1006.1 586h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM990.9 589.9l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st27"
      />
      <path
        d="m1006.5 600.5-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st27"
      />
      <path
        d="M998.7 585v10"
        className="st28"
      />
      <path
        d="M989.7 577h18M998.7 578v8"
        className="st29"
      />
      <text
        className="st30 st9 st31"
        transform="translate(983.39 615.09)">
        {"VX-115"}
      </text>
      <path
        d="M1025.1 491.8h13.3c2.8 0 5 2.3 5 5v59.4"
        className="st32"
      />
      <path
        d="M1025.1 393.3h13.3c2.8 0 5 2.3 5 5v100.4"
        className="st32"
      />
      <path
        d="M1011.4 595.3h8.4c4.1 0 7.4 3.3 7.4 7.4v50.6"
        className="st25"
      />
      <text
        className="st11 st9 st20"
        transform="translate(546.128 349.87)">
        {"F-101"}
      </text>
      <text
        className="st11 st9 st20"
        transform="translate(752.142 349.87)">
        {"F-102"}
      </text>
      <text
        className="st11 st9 st20"
        transform="translate(956.905 349.87)">
        {"F-103"}
      </text>
      <path
        d="M1248.8 572.3H1179c-2.6 0-4.6-2.1-4.6-4.6v-23.2c0-2.6 2.1-4.6 4.6-4.6h69.8c2.6 0 4.6 2.1 4.6 4.6v23.2c.1 2.5-2 4.6-4.6 4.6z"
        className="st27"
      />
      <text
        className="st33 st9 st34"
        transform="translate(1192.154 560.01)">
        {"A TK-003"}
      </text>
      <path
        d="M1159.4 563.3c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        className="st17"
      />
      <path
        d="M1159.4 551.6c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st2"
      />
      <path
        d="M90.3 1069h699.1M603 595.3h7.4c4.1 0 7.4 3.3 7.4 7.4v43.6c0 4.9 4 8.9 8.9 8.9h676.5c6.8 0 12.2 5.5 12.2 12.2v157.2c0 6.7-5.4 12.1-12.1 12.1H101.6c-6.1 0-11.1 5-11.1 11.1V1058"
        className="st1"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACMCAYAAADcDyOIAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABwNJREFUeNrsmolu21YQRUmKsuTI rp2lRf//+1KktR1rtV5JYCa5njxSopc4Ec8BBlosMcjT0fDOo4oCAADehpIlePU1bR+n8FximRD4 V1zLUta0DOubRNwUHgMCv/kaVna/kooC76X8MR35GdQswYt13YlVLfcriRCtrA9WO7stkRiB31re ymSdWp1ZTe15F7gVdtvUxmprVSDx2wpcIu83ac+t5lZTEbiVdWW1tNvKnt9JrBibxOlnClwecX8s Ale2flOT9V1TF1LvTOqJdd+26943dSc1EZHHKHHKzAmDxK4HdpzclF2OTNwixIZW3kVTl01dSV3Y 31zglUl709S/Ejlc4q29bh92K8bSgVPH7kx6jsBlOF3GKbsKQo8lOviwNrPI0Mp73dQHq/dN/WF/ c4GXIu/c3utZue3MaxnuxpKJVdh9zy5N51rUA3KeTtm1TNlVphOXJy6wRocLk7UV91NTH+1+TuBb 6cwzq7l15pXFjAf5EE8976q4ujuzkx2b3jNSfSDjdU3Y3jnqsF00BoE9+/rQdmHd96PVJ+vAl0Hg lQnsQ9655eSFPX9vAvuHd4pZOGW674Ps0OguzSYMuNmzUn2g82qn8UElTtl1kd+4P3WBNT5cSXz4 EDJwZYu/Dmvn63kpAq8lC5/yMKexYSfi+g7NUnZqSntNOqYD57aHfEi5sMW+tMfnIvEkM+CNpQMv LC5cW12FXQgXeCuxYSbvvbIIEXPwqXfgvayLy/vV1uLWvNKmmOR96VAH9tgwkw/ovdW1PV6YwGfS hU99mItf7lnYPru023P7m+4D7+SMpo3B5V2NIELE7Ot5d21rcGtD7kzcjANe2SVwrvt6xntv2e5P y3nXkvFc4DFsq8VdiLOOeDXLdJA4BM8kQqwk8+ngkk5UXs2/WxO4/SL/Z2voX3yVXL/Y3ySujzhF evdt5f3bbn1I0c36sXRg/ZLXmeH2LAy3ThUGY+3C22MGlhOLESqw75EvbF3K4vvFn7XVRtanNwOr wN4htAP/ZYOKduBJMY6LGmUmSsStxa6hNoWI5msct4zGcCFDhzjvwAs7K/nQ5pnYqw4N4agIMQ9D ygeLEN6B5/LBjfGCRu7CTtUz0MaLQXtb532IDad8ASOFbLuz7uqxYWt5+EbmLN3tKvsiRFE83vvV afky1ELC9tiuyOVELg/sxOjzydYsFd2XUE9d4EIy7tQe70xe38XxTYJpx1mtcxtNT3F+tei8+PHX VmOKD4ciRe754sDzZaYrjYm9+ePyzovHVynjPBEbRKozH0TMd1P5FsQrcJMQH8ZK+UKvH+Ov+sow R9TiWN+V3pTLwPG0GH8DoY+rYpy/SPsVvgCn9n+vemaJXs+qI7eMug6GuPCzZoos1YCMV9It4JXF LYY2x+qZ/wjAzxqSyyEC03Hht6BiCQCBARAYAIEBgQEQGACBARAYEBgAgQEQGACBAYEBEBgAgQGB ARAYAIEBEBgQGACBARAYAIEBgQEQGACBARAYEBgAgQEQGBAYAIEBEBgAgQGBARAYAIEBEBgQGACB ARAYAIEBgQEQGACBAYEBEBgAgQEQGBAYAIEBEBgAgQGBARAYAIEBEBgQGACBARAYEBgAgQEQGACB AYEBEBgAgQEQGBAYAIEBEBgAgQGBARAYAIEBgQEQGACBARAYEBgAgQEQGACBAYEBEBgAgQGBWQJA YAAEBkBgQGCA31/gZFXILcBv3YGj1IgNr81B36onHABx4TVEja4d5Vl1xEH3VmnowQGeKPLRrtU9 3VblfZDahypZd3gBYfeZSpnmmRU4mYh6sFbWXVPbTO2sKnYz4JkCa3PcZUpljs32UQfWP+5F3k1T 66ZWTS3tdiXvrYPAdGQYMpw9iGNaG2mYD6ETfztG3SGvfxvWJu3Xpu6s3sn75iJwicAwUGB3bW2O aXmz3PR04h8ysHbfjR2gPdhtU/+avFN7/c4EnorAyAtDJN5Lo2w9+2Ke3ZhzX6Ub7zJduLMDu8BL kXcu8rZt/b6pc3tuQgeGJwxvUeDWs89N/WP378xBFbhzFyJGCBV4Jq91eS9E6ol0YASGpwp8Y/J+ tm58a65tQg7ujBAxWC9NzonEhpX9QwsT2wWukBeeKHA823+xujGB18dGCA3WW5PVpdSwvbD4cCYZ mJ0IGLoDkYrvu10r2Sy4NXnv7HnfiUh9HTg3HW5CV3aB59J9a4Y4eMYQty8eb9curevem7zefQ9G iHjgrmnx3jpvbTXJyIvIcKgDx5nLo8RGZN6KvNlLyn2ilRINJlIqbtWRfREYjhVYO/FOhPVbjQ6p GChaKSKr0FWIDQgLz83Dfb+FKJ7SgeNrykzRbeEldyVyPyhLx8hZDBC5IDLAK0aKoq/jFq8gHvLC S0oMMB7+F2AAuqV/ATu4Vd0AAAAASUVORK5CYII="
        width={176}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(1115.348 668.513)"
      />
      {/* Caudal Alimentación */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(14, "Caudal Alimentación", false)}>
        <path
          d="M1222.7 799.1h53.1c3.5 0 6.3-2.8 6.3-6.3V690.5c0-3.5-2.8-6.3-6.3-6.3h-61.7c-1.2 0-2.4-.4-3.4-1.2l-.4-.3c-6.5-6.5-6.5-6.5-12.9.2-1 .9-2.2 1.3-3.5 1.3h-62.7c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h91.5z"
          className="st2"
        />
        <path
          d="M1125 691.2h157.1V791H1125z"
          className={getTarjetaClass(14, selected)}
        />
        <text
          className="st35"
          transform="translate(1183.605 735.931)">
          <tspan
            x={0}
            y={0}
            className="st26 st9 st10">
            {"Caudal"}
          </tspan>
          <tspan
            x={-27.6}
            y={16.8}
            className="st26 st9 st10">
            {"de Alimentaci\xF3n"}
          </tspan>
        </text>
        {/* Alarma Caudal Alimentación */}
        <g
          className={`${getTemaAlarma(14, loading, datosAlarmas)} cursorPointer`}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(14, "Caudal Alimentación");
          }}>
          <path d="M1147.4 767.6c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
          <path d="M1145.7 766.6c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM1157 765.3c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z" />
          <path d="M1157.6 763.4c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM1158.4 772.6v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1153.4 780c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z" />
        </g>
        <text
          className="st11 st9 st36"
          transform="translate(1184.672 778.709)">
          {caudalAlimentacion}
        </text>
        <text
          className="st11 st9 st37"
          transform="translate(1256.44 778.308)">
          {"l/s"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(1188.946 710.933)">
          {"FE101"}
        </text>
      </g>
      <circle
        cx={1203.7}
        cy={654.2}
        r={9.2}
        className="st38"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACMCAYAAADcDyOIAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABuZJREFUeNrsmwtTo0gURnklGqOu U7O7tf//982Mj8S8CGGh6vbsZ9sdSWJ0hXOqbhEZ0tY0h8u9DSYJwBcm/eTvA7TUHyFg2uEzwCny 1odKnXY8RiMJ/AxwqsS1SFsH9h0ssPu3zD5ngUjJwvAO2bfd7gLh9kczctEh6+YWhWwLT2JKCji2 ZFB5txaVbH3R3xQ4lYzrhB01cdHEWMIJnSEwnCDwToTdSKybKM2nKpaJ92XgXMS9bOLKYiIyjwLl BEBXkV3mLUXaZRMLi5XtS2L1cBEQVzPvhUl73cRtEzf2eWpSj+y4lHoYjqh7a8u8pcn63MS8iZmU qb68OxW5iJQPLvtemrDfJO5M5ImUEhmrEnDEqsNOSoeliftgiTMXYSvJ1mlMYK19Nfvemrh/N/Fn E99t39SOQWA4VeC1Zd8nS4wjO67yGrvKvvdb4n0lxNgEvjGBW3n/se0dAsMZBJ6KvKXtX0ktnEkz F23iXAYe29VwbcJ+N3n/MqFDAgMc2sSpwCrv0urhuVeqRps4v4QYm6BTy8K3JvI3LwPnMjASwyGN nKtv1568z+accyzUa+0tIVTiS8vE00CMTWBWIODYlYhKPCzFrYm5p/K+utMXnnj+Q4yRhcvGGm4d OEdcOEFkd/feRvwaJS8fmKmrtV9CxDKxH7kE9S+8RymRR1wLZd5oCaFZOE3efpGHt9LgVNI3HMv2 eZZ1HBxZ4SNl7uxbdsTACSLDmcRNDk2UWccBAT5L7L0JM2OO4CuDwIDAAAgMgMCAwAAIDIDAAAgM CAyAwAAIDIDAgMAACAyAwIDAAAgMgMAACAwIDIDAAAgMgMCAwAAIDIDAAAgMCAyAwAAIDAgMgMAA CAyAwIDAAAgMgMAACAwIDIDAAAgMgMCAwAAIDIDAgMAACAyAwAAIDAgMgMAACAyAwIDAAAgMgMAA CAwIDIDAAAgMCAyAwAAIDIDAgMAACAyAwAAIDAgMgMAACAyAwIDAAAgMgMCAwAAIDIDAAAgMCAyA wAAIDIDAgMAACAyAwAAIDAgMgMAACAwIDNADgWuLRLYAH00d8PGoDFwHpEZseE9R64hrJ5UQdSQA zilyZ9+KNwbZydaPoQudnul2OVRhY47tda2ITKAOuA1EZZGd6WR+RXHTE4StBypyLS5VEddU5ldz VMiO1Lsa2gFLi00Tay/cd3dy8tKBCOxHV5HrDn1FPRBxVeCQXxvxr/Iy8e8xisDAmnnbQVZNLJt4 lhjZ8e0x+UAysQqbWfif913IOvm7SInmPvc9E+s8VCbssxdLc2+zJxO/KiFqT1438KyJpyamIm97 ZVzYGFmP5VUpnay5RSHbTEK/Wwfmt5J5rrwYSn+hrjnP7pt4MNdmtm/tSVyHSghFBW6vgrkNOvHk nQYETnsssJOzsHloY2zhfi4Cqzt+ttHSrJRbpfYXu55n4joicOvZjyZ+2ue5OagC712F0AzRfmlh V8KFJ+/zwAROJfM6cS/totatkzn35kN7Cq333G3S/VyKxH3OwjGBn0zeH5aNZ+bgxrs7dSoh1vZl d5t08raTfmMnbTwggV2p4OS9sov42mJq+3aexLXIuzZh/XpvISLHmpY+C+zu9jPLvPcWTzY3664l RO1N+Epuh67YntvJupTb5lsNTJ8EvhB5b5v4w+bJZc8ruWM5gbeSced2Yh6l1pvLiSpjJ6uHKxBu bkq5sOfSc81lbqvQfMRKCHfi1l5dvLJBL+R2mQ2giUulfHACt1n3TjrmjdSzVzY/mc1dKRnm0bLM L9s+yq1yNQCBQyteWlotbS70rrTtUkL4g1feZyfwWEqHPCBv3zPwWASeicC6hnltouc26Rs77tHE /WW1npN4JmOUXsPS1wzs91xbSQKbSE+QvNXEJYG1ytpbryu8ZaO05wIn3vKZq4GvvfVKF9ojOIHX Ut/9lE773qQOddu7Hte/oVp4563E6BJjp0fJsTpFu+jMiyE8gdNlNK2Dl5I1VeBnq40nduzO9qvA fvZdRBq4vi6jhTzb9y5EckgGDmXiNFAfp8lwHh0n3lLa2qt5tX6bSQZWgeeWbV2H/ZC8Xqwfwhrw vlWJ0GP1g99Giw0eKxOG8iKPrgfrbW4bEPjaygwtIRbSxD3JyoP/uHRob/id9FJTceIvSgc22al3 e9O3qEpZJptYmZHZce6dkkXy8lm/Zt4qGe7rqUf/n4vP+sVfeKLTQPOhDyoWyX/rwE5gfTFqlbx8 26rqedN2Vgqm4OiL1l+lcZK69yJyEVizdOi9B/7S5cQGBU5bnXDrxLk0erpKo5l6aG+dIfAXae60 yfNXaUJ/osVffSPw/1LkJLAN/TU34iLwl5xTxAUAgB7wrwADAI9aJfziaQ67AAAAAElFTkSuQmCC"
        width={176}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(323.348 904.513)"
      />
      {/* Conductividad Alimentación */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(9, "Conductividad Alimentación", false)}>
        <path
          d="M392.3 913.6h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3V919.9c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
          className="st2"
        />
        <path
          d="M333 921h157.1v99.8H333z"
          className={getTarjetaClass(9, selected)}
        />
        <text
          className="st35"
          transform="translate(369.38 965.638)">
          <tspan
            x={0}
            y={0}
            className="st26 st9 st10">
            {"Conductividad"}
          </tspan>
          <tspan
            x={-5.4}
            y={16.8}
            className="st26 st9 st10">
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
          <path d="M355.4 997.3c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
          <path d="M353.7 996.3c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM365 995c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z" />
          <path d="M365.6 993.1c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM366.4 1002.3v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM361.4 1009.7c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z" />
        </g>
        <text
          className="st11 st9 st36"
          transform="translate(392.625 1008.416)">
          {conductividadAlimentacion}
        </text>
        <text
          className="st11 st9 st37"
          transform="translate(448.393 1008.016)">
          {"dS/m"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(396.9 940.64)">
          {"AE101"}
        </text>
      </g>
      <image
        xlinkHref="data:image/png;base64,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 l80EoQAAAABJRU5ErkJggg=="
        width={177}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(141.348 904.513)"
      />
      {/* Temperatura Alimentación */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(13, "Temperatura Alimentación", false)}>
        <path
          d="M210.6 913.6h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3V919.9c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
          className="st2"
        />
        <path
          d="M151.3 921h157.1v99.8H151.3z"
          className={getTarjetaClass(13, selected)}
        />
        <text
          className="st35"
          transform="translate(192.01 965.638)">
          <tspan
            x={0}
            y={0}
            className="st26 st9 st10">
            {"Temperatura"}
          </tspan>
          <tspan
            x={-9.7}
            y={16.8}
            className="st26 st9 st10">
            {"de Alimentaci\xF3n"}
          </tspan>
        </text>
        {/* Alarma Temperatua Alimentación */}
        <g
          className={`${getTemaAlarma(13, loading, datosAlarmas)} cursorPointer`}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(13, "Temperatua Alimentación");
          }}>
          <path d="M173.7 997.3c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
          <path d="M172 996.3c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM183.3 995c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z" />
          <path d="M183.9 993.1c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM184.7 1002.3v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM179.7 1009.7c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z" />
        </g>
        <text
          className="st11 st9 st36"
          transform="translate(210.966 1008.416)">
          {temperaturaAlimentacion}
        </text>
        <text
          className="st11 st9 st37"
          transform="translate(277.734 1008.016)">
          {"\xB0C"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(215.24 940.64)">
          {"TT103"}
        </text>
      </g>
      <path
        d="M186.7 1082.5v52"
        className="st21"
      />
      <path
        d="M191.6 1087.8c0 .9-.7 1.6-1.6 1.6h-6.3c-.9 0-1.6-.7-1.6-1.6 0-.4.2-.8.5-1.1l3.1-3.1c.6-.6 1.5-.6 2.2-.1l3.2 3.2c.3.3.5.7.5 1.1z"
        className="st22"
      />
      <path
        d="M183 1087.8c0-.2.1-.3.2-.4l3.1-3.1c.2-.2.6-.2.9 0l3.1 3.1c.1.1.2.3.2.4 0 .3-.2.6-.6.6h-6.3c-.3 0-.6-.3-.6-.6m-2 0c0 1.4 1.2 2.6 2.6 2.6h6.3c1.4 0 2.6-1.2 2.6-2.6 0-.7-.3-1.3-.8-1.8l-3.1-3.1-.1-.1-.1-.1c-1.1-.9-2.6-.8-3.5.2l-3.1 3.1c-.5.5-.8 1.1-.8 1.8z"
        className="st2"
      />
      <path
        d="M189.8 1145.6h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
        className="st23"
      />
      <path
        d="M179.3 1154.6h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
        className="st17"
      />
      <path
        d="M149.3 1166.3h38.8v40h-38.8z"
        className="st24"
      />
      <path
        d="M188.1 1159.6v45.2c0 .7-.4 1.3-.8 1.3h-37.1c-.5 0-.8-.6-.8-1.3v-45.2"
        className="st23"
      />
      <path
        d="M638.7 1082.5v52"
        className="st21"
      />
      <path
        d="M633.9 1087.8c0 .9.7 1.6 1.6 1.6h6.3c.9 0 1.6-.7 1.6-1.6 0-.4-.2-.8-.5-1.1l-3.1-3.1c-.6-.6-1.5-.6-2.2-.1l-3.2 3.2c-.3.3-.5.7-.5 1.1z"
        className="st22"
      />
      <path
        d="M642.5 1087.8c0 .3-.3.6-.6.6h-6.3c-.4 0-.6-.3-.6-.6 0-.1.1-.3.2-.4l3.1-3.1c.3-.2.7-.2.9 0l3.1 3.1c.1.1.2.2.2.4m2 0c0-.7-.3-1.3-.8-1.8l-3.1-3.1c-.9-1-2.4-1.1-3.5-.2l-.1.1-.1.1-3.1 3.1c-.5.5-.8 1.1-.8 1.8 0 1.4 1.2 2.6 2.6 2.6h6.3c1.4 0 2.6-1.2 2.6-2.6z"
        className="st2"
      />
      <path
        d="M635.7 1145.6h15.2c1 0 1.8.8 1.8 1.8v39.2"
        className="st23"
      />
      <path
        d="M646.2 1154.6h-14c-.8 0-1.5-.7-1.5-1.5v-14c0-.8.7-1.5 1.5-1.5h14c.8 0 1.5.7 1.5 1.5v14c0 .8-.7 1.5-1.5 1.5z"
        className="st17"
      />
      <path
        d="M637.4 1166.3h38.8v40h-38.8z"
        className="st24"
      />
      <path
        d="M637.4 1159.6v45.2c0 .7.4 1.3.8 1.3h37.1c.5 0 .8-.6.8-1.3v-45.2"
        className="st23"
      />
      <path
        d="M830.4 1050.3c0-6.7-7.8-12.1-17.5-12.1s-17.5 5.5-17.5 12.1h.1c-.1.4-.1.7-.1 1.1v37.6c0 3.5 3.4 6.4 7.6 6.8v6.2h5.2v-6.1h9v6.1h5.2v-6.2c4.5-.2 8-3.2 8-6.8v-37.6c0-.3-.1-.7-.1-1.1h.1z"
        className="st27"
      />
      <path
        d="M835.7 1069h310.4"
        className="st1"
      />
      <circle
        cx={230.2}
        cy={1069}
        r={9.2}
        className="st38"
      />
      <path
        d="M1217.9 1093.1h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
        className="st17"
      />
      <path
        d="M1143.9 1075.6c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        className="st18"
      />
      <path
        d="M1143.9 1063.9c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st2"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA8pJREFUeNrsmHlv2kAQxb1rGwIh CQltmvSQ+v2/Vs80bcjBEWzs7bp6E72MFnxA80dVpBFgzPjnt3N5o+j/6x9/mRfy6bo6S/YMZQKA bhfgZA9g2mwAxhFU2QbU7KiYVRbDWMmSrKDPjmDdPhVkpQQo9daDvxTHRMkKag3L6HNBwBsVTTrC xfhvBdX3NiDr43iMC1YwK9jS2yOsgs0J1oUgk45wAnbobeTtGHaEYwfw7QBWAc29PXib4X1OwLlS 07UF1HADwIy9vfI28XaG70f4nQEXALvzduvtxtsU3+8BulJJ5JoCMlwKdY4B9cbbpbcLb6+9nQLw AOeWWMolACu4X96uvf2ASbw6nOvaAOqE6GNJJwD7AHsLwBMscT8Qg3OodQOlR3ReRJntsNzVdV1T BS2WdgiVzgH2Ee+XWGJWz1ApyQE5xk2MKAwiymjO7FpALr4J7vaI1HsPuHdQ7xg3kFItZEVylely 7ZwyW7JbstokDdVL4fgESXGhYm8MuJ6qgRJLCdXIhJY1pwSSDF/ieLkN0ASSYwjACaDOsayinKii +7FTXUd+XwNG4vIn3ntQcl2XJLq0HALmDJCn+D6gLmJr2mlM0OJvrMpTj9ulrVliS/E3hMMTCvSD QGtr04UG8DtUsSlqN3LKxVk6h3SLbcrVxbXEpLTGHsWn+DO2wQgVk6MBxRsrZ1rAhepronwZXsI2 hTohi1sqV5eMG2Os7sUDZ6kqftdR3qlZsSC/z4YFW+OEHeQoohnNdeUOkOyXx65noHaLYhF1gQy1 aUFj0iowJjVRrqQhNqNZcUWgT5C2wdIWNDI9YESSea4tpACuaYCdo4MscIwBa4eFkhSc0zw3RcEe UTZH1EmiQDfhniw3fA9/ctML1YufHG/KLl23+qh/g0AdtCoedXIx3Axt7crbF2+fvX3HrDgD5J/4 j1uUA35ASqnx2wAUJxeDPUIphvuE9ysoueTnlLhBjYoCatrAY2WhgDgJlhQiGq5S7xuOz3D+U0wn DWpVRHE4I+UiQEjyTNCrD1XDl4F1ifNuMfJ/rYFr/EwSqYvw8+4KF51iTuQhIqH/ZpQUU3omucKY dUdzYNHmqU6rmGOpXGCeu4aCAsgKZqS0VIEpPnPJ0oW6VZPn+Espo2XCGdGzRmiJH2mZZ1T7eMwv dGcyHRu7paGhR7B9NdMZVUulI0nnyDa0uM6bRyawccTlJ9YDZ6C9relzQb+7fe1umcAOl1G7XGZD i3Ntd7d22WE1WzYvTc3Y5v72/uAmH6ZhRWg8osXRy706zY2/BRgAUS2lBKuTz+YAAAAASUVORK5C YII="
        width={39}
        height={39}
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        transform="translate(1179.199 1089.837) scale(.8974)"
      />
      <circle
        cx={1197.1}
        cy={1107.6}
        r={10.9}
        className="st2"
      />
      <circle
        cx={1197.1}
        cy={1107.4}
        r={8}
        className="st19"
      />
      <text
        className="st11 st9 st20"
        transform="translate(1182.48 1147.327)">
        {"P-107"}
      </text>
      <path
        d="M1217.9 994.6h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
        className="st17"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA79JREFUeNrsmHtTm0AUxVkgL2PU RNvah/X7f622Y6u11RgTSELYLs65neOdxSyk1X9k5gxRYPntfe1douj1eD1e9jD/cUw5W+hFAY0S HxqwEbD5B2AxgcX0twYq1TkI1OxoMQFKnFI6M2QFtIEKnEvSk6BmB6sJTKUe1IUE1gJo5bR2WtLv NYHXWjRtCVc913HqOw2chk77OA8Am+KFK4AtnOY4V8rx/zUsW1JItAJkuApgz2nkdOQ0xvkQoAMC FLh7pzvoFud7XFuS+x9Bpi3hhgA6cXrn9Ba/x4AewMKlAqzAfjtdQ9XvG1zL8K5HkGnDmOvAcmNA fYQ+4O8jAPYxdgkX5gT4y+mS7kvwDov7ONO3AnJtS2GZA6c3Tp+czp0+A/AE1/aQKLFKkspCM6cJ QmGo7tOZ/QAdakFxbRVfx06nTmcAPIObj3BdsthQZhaA3IdkEglZea0Sxm4DNCr2+rBQZan35N5T QO9T9sYKUMqPlKIO7inh1gVpSZAmDYw/ib1DSoxTuHoMuD692LfcSRxLcd9QbE4Rn1OUoiWu1wJy 7CWYtQBOAHlMbu0BLqmBM+qahTcWGG+i4jeFu6M0sLR0EdQHsNhYBXodnO5qYsruPiY3gobKCw8h EAe4OIGFBjTYSM02Dlg2jRpTJt6H2At/xwsF7AJwj1aKbZbblnwJ1daUxuLxTBzQ2/FA3BSkqtVq 08xyN2Q814Ms6IM2DcEiT+JET3QxNgTQqgov/Zzu6aIdIPW4pe6+4yfAuNmUXi7HkpVjZdh4Bo0C Jm0JbEU9YqHHDLHgBnAZiuoMxTTDwAU1nSFHiWfWNGGe9KOlLg6YsSz2c1Xx7wlyEwBplUdyjDmj 3jCjTjuomynJggsMdIOWaYzi2lGeiD3bCd00SGdzSz3hHd6x4m1A0qIf7HrKjVHNQaTaJ7HaChBT NKwXTt+gHwCd496HZ5OAghp5ahZXfO1Cq3ZxApZTmDDcV/z+CSvmvEdJGhZYvbaydQrq6WSjJMk1 x8srd145fQfYF0BewnoLtl6TPYlALDCQwQArauVPaNPUI9fzsxLDV3DphXItl66gTRNnZQHzRxTw GVnm2LOri2gicwK8RqJdY3Iz1ajapht3vS73aD88AtgBNMT1RFk6oxicAnZGe+S1tl7TLwvGk9Ed gEqnM6CejgELWomktc/oS0NRt3Q2XeyNBzSl8tPxZLhVGe3bINWu622/zdR9QPK1TpYSrXyOj0eh rVhdk2Cf4/PbthpptnRJz/YBs8l4rT4D/xFgANTNqwTLNER5AAAAAElFTkSuQmCC"
        width={39}
        height={39}
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        transform="translate(1179.199 991.358) scale(.8974)"
      />
      <circle
        cx={1197.1}
        cy={1009.1}
        r={10.9}
        className="st2"
      />
      <circle
        cx={1197.1}
        cy={1008.9}
        r={8}
        className="st19"
      />
      <text
        className="st11 st9 st20"
        transform="translate(1182.48 1048.848)">
        {"P-106"}
      </text>
      <path
        d="M1175.9 1122.8h-14.3c-2.8 0-5-2.3-5-5v-88.4c0-3.5 2.8-6.3 6.3-6.3h13M1227.8 999h14.3c2.8 0 5 2.3 5 5v88.4c0 3.5-2.8 6.3-6.3 6.3h-13"
        className="st25"
      />
      <path
        d="M1274.2 1065.7v148.4c0 3.5-2.8 6.3-6.3 6.3h-13"
        className="st32"
      />
      <path
        d="M1249.9 1211.7h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM1234.7 1215.6l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st27"
      />
      <path
        d="m1250.3 1226.2-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st27"
      />
      <path
        d="M1242.5 1210.7v10"
        className="st28"
      />
      <path
        d="M1233.5 1202.7h18M1242.5 1203.7v8"
        className="st29"
      />
      <path
        d="M1161.3 1237.2h-69.8c-2.6 0-4.6-2.1-4.6-4.6v-23.2c0-2.6 2.1-4.6 4.6-4.6h69.8c2.6 0 4.6 2.1 4.6 4.6v23.2c0 2.5-2 4.6-4.6 4.6z"
        className="st27"
      />
      <text
        className="st33 st9 st34"
        transform="translate(1099.8 1224.933)">
        {"DESDE CIP"}
      </text>
      <path
        d="M1169.2 1221.4h60.2"
        className="st32"
      />
      <path
        d="M1193.9 1227.7c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        className="st27"
      />
      <path
        d="M1193.9 1216c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st2"
      />
      <path
        d="M1280.8 1064.8c0 1-.8 1.9-1.9 1.9h-9c-1 0-1.9-.8-1.9-1.9 0-.5.2-1 .5-1.3l4.5-4.5c.7-.7 1.8-.7 2.6-.1l.1.1 4.5 4.5c.5.4.6.8.6 1.3z"
        className="st27"
      />
      <path
        d="M1269.1 1064.8c0-.2.1-.4.3-.6l4.5-4.5c.3-.3.9-.3 1.3 0l4.5 4.5c.2.2.3.4.3.6 0 .4-.3.9-.9.9h-9c-.6 0-1-.4-1-.9m-2 0c0 1.6 1.3 2.9 2.9 2.9h9c1.6 0 2.9-1.3 2.9-2.9 0-.8-.3-1.5-.8-2l-4.5-4.5-.1-.1-.1-.1c-1.2-.9-2.9-.9-3.9.2l-4.5 4.5c-.6.5-.9 1.2-.9 2z"
        className="st2"
      />
      <path
        d="M535 1470.8h778.9"
        className="st1"
      />
      <image
        xlinkHref="data:image/png;base64,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 rkJggg=="
        width={177}
        height={141}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(222.348 1305.513)"
      />
      {/* Presión de Osmosis */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(5, "Presión de Osmosis", false)}>
        <path
          d="M291.7 1315.4h-53.1c-3.5 0-6.3 2.8-6.3 6.3V1424c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
          className="st2"
        />
        <path
          d="M232.4 1322.8h157.1v99.8H232.4z"
          className={getTarjetaClass(5, selected)}
        />
        <text
          className="st35"
          transform="translate(289.376 1367.462)">
          <tspan
            x={0}
            y={0}
            className="st26 st9 st10">
            {"Presi\xF3n"}
          </tspan>
          <tspan
            x={-13.2}
            y={16.8}
            className="st26 st9 st10">
            {"de Osmosis"}
          </tspan>
        </text>
        {/* Alarma Presión de Osmosis */}
        <g
          className={`${getTemaAlarma(5, loading, datosAlarmas)} cursorPointer`}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(5, "Presión de Osmosis");
          }}>
          <path d="M254.7 1399.1c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
          <path d="M253 1398.1c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM264.3 1396.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z" />
          <path d="M264.9 1394.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM265.7 1404.1v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM260.7 1411.5c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z" />
        </g>
        <text
          className="st11 st9 st36"
          transform="translate(291.994 1410.24)">
          {presionOsmosis}
        </text>
        <text
          className="st11 st9 st37"
          transform="translate(352.762 1409.84)">
          {"bar"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(298.268 1342.464)">
          {"PT105"}
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
        transform="translate(392.348 1305.513)"
      />
      {/* Recuperación RO */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(2, "Recuperación RO", false)}>
        <path
          d="M461.1 1315.4H408c-3.5 0-6.3 2.8-6.3 6.3V1424c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
          className="st2"
        />
        <path
          d="M401.8 1322.8h157.1v99.8H401.8z"
          className={getTarjetaClass(2, selected)}
        />
        <text
          className="st35"
          transform="translate(439.322 1361.462)">
          <tspan
            x={0}
            y={0}
            className="st26 st9 st10">
            {"Recuperaci\xF3n"}
          </tspan>
          <tspan
            x={32.7}
            y={16.8}
            className="st26 st9 st10">
            {"RO"}
          </tspan>
        </text>
        {/* Alarma Recuperación RO */}
        <g
          className={`${getTemaAlarma(2, loading, datosAlarmas)} cursorPointer`}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(2, "Recuperación RO");
          }}>
          <path d="M424.1 1399.1c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
          <path d="M422.4 1398.1c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM433.7 1396.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z" />
          <path d="M434.3 1394.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM435.1 1404.1v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM430.1 1411.5c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z" />
        </g>
        <text
          className="st11 st9 st36"
          transform="translate(461.4 1410.24)">
          {recuperacionRO}
        </text>
        <text
          className="st11 st9 st37"
          transform="translate(526.167 1409.84)">
          {"%"}
        </text>
      </g>
      <circle
        cx={311.3}
        cy={1470.9}
        r={9.2}
        className="st38"
      />
      <path
        d="M525.2 1481.3h-142c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h142c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.8 3.8-6 3.8z"
        className="st17"
      />
      <path
        d="M526.5 1481.3h-143c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l143.2 19.8c.6.3.5.9-.2.9z"
        className="st26"
      />
      <path
        d="M525.2 1506.4h-142c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h142c3.3 0 6 1.7 6 3.8v13.1c0 2.2-2.8 3.8-6 3.8z"
        className="st17"
      />
      <path
        d="M526.5 1506.4h-143c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l143.2 19.8c.6.3.5.9-.2.9z"
        className="st26"
      />
      <path
        d="M525.2 1531.5h-142c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h142c3.3 0 6 1.7 6 3.8v13.2c0 2.1-2.8 3.7-6 3.7z"
        className="st17"
      />
      <path
        d="M526.5 1531.5h-143c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l143.1 20c.7.1.6.7-.1.7z"
        className="st26"
      />
      <path
        d="M525.2 1556.6h-142c-3.3 0-6-1.7-6-3.8v-13c0-2 2.7-3.8 6-3.8h142c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.8 3.7-6 3.7z"
        className="st17"
      />
      <path
        d="M526.5 1556.6h-143c-3.4 0-6.3-1.7-6.3-3.8v-13c0-2 2.8-3.8 6.3-3.8l143.2 19.8c.6.3.5.8-.2.8z"
        className="st26"
      />
      <path
        d="M373.4 1547.3h-16.3c-2.8 0-5-2.2-5-5v-71.5M352.7 1495.8h20.4M534.7 1547.9h16.4c2.8 0 5-2.2 5-5v-70.7M555.4 1495.8H535M352.7 1521.8h20.4M555.4 1521.8H535M526.5 1717.4v52.1"
        className="st1"
      />
      <path
        d="M631.1 1644.3h-132c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.8 3.8-6 3.8z"
        className="st17"
      />
      <path
        d="M632.4 1644.3h-133c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.9-.2.9z"
        className="st26"
      />
      <path
        d="M631.1 1669.4h-132c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.2-2.8 3.8-6 3.8z"
        className="st17"
      />
      <path
        d="M632.4 1669.4h-133c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.9-.2.9z"
        className="st26"
      />
      <path
        d="M631.1 1694.5h-132c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.2c0 2.1-2.8 3.7-6 3.7z"
        className="st17"
      />
      <path
        d="M632.4 1694.5h-133c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.1 20c.7.1.6.7-.1.7z"
        className="st26"
      />
      <path
        d="M631.1 1719.6h-132c-3.3 0-6-1.7-6-3.8v-13c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.8 3.7-6 3.7z"
        className="st17"
      />
      <path
        d="M632.4 1719.6h-133c-3.4 0-6.3-1.7-6.3-3.8v-13c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.8-.2.8z"
        className="st26"
      />
      <path
        d="M489.3 1710.3H473c-2.8 0-5-2.2-5-5v-72.5M468.6 1658.8H489M640.6 1710.9H657c2.8 0 5-2.2 5-5v-67.7c0-2.5-2-4.4-4.4-4.4h-17M661.3 1658.8h-20.4M468.6 1684.8H489M661.3 1684.8h-20.4M662 1636.3v-165.4"
        className="st1"
      />
      <path
        d="M681.4 1761.5h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM666.2 1765.4l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st27"
      />
      <path
        d="m681.8 1776-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st27"
      />
      <path
        d="M674 1760.5v10"
        className="st28"
      />
      <path
        d="M665 1752.5h18M674 1753.5v8"
        className="st29"
      />
      <path
        d="M681.4 1816.7h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM666.2 1820.6l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st27"
      />
      <path
        d="m681.8 1831.2-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st27"
      />
      <path
        d="M674 1815.7v10"
        className="st28"
      />
      <path
        d="M665 1807.7h18M674 1808.7v8"
        className="st29"
      />
      <path
        d="M822.8 1886.6h124.8v97.7H822.8z"
        className="st26"
      />
      <path
        d="M947.5 1870.3v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1v-111.2"
        className="st23"
      />
      <text
        className="st11 st9 st20"
        transform="translate(865.382 2007.45)">
        {"TK-003"}
      </text>
      <path
        d="M640.3 1771.9v47.2c0 3.8 3.1 6.8 6.8 6.8h13.7M685.9 1770.7h14.3c3.5 0 6.3 2.8 6.3 6.3v48.9h-20.6"
        className="st1"
      />
      <path
        d="M701.3 1825.7h136c5.3 0 9.6 4.3 9.6 9.6v29"
        className="st1"
      />
      <path
        d="M840.1 1865.2c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
        className="st18"
      />
      <path
        d="M851.8 1865.2c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
        className="st2"
      />
      <path
        d="M1225.2 1886.6H1350v97.7h-124.8z"
        className="st26"
      />
      <path
        d="M1349.8 1870.3v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1v-111.2"
        className="st23"
      />
      <text
        className="st11 st9 st20"
        transform="translate(1267.744 2007.45)">
        {"TK-002"}
      </text>
      <circle
        cx={313.1}
        cy={1544.6}
        r={9.2}
        className="st39"
      />
      <path
        d="M532.4 1770.7h128.9"
        className="st1"
      />
      <path
        d="M419.7 1658.7v102c0 5.5 4.5 10 10 10h89.7"
        className="st0"
      />
      <circle
        cx={421.4}
        cy={1707.4}
        r={9.2}
        className="st39"
      />
      <path
        d="M1063.9 1472.1v111.4"
        className="st32"
      />
      <path
        d="M1028.8 1678.3h69.8c2.6 0 4.6-2.1 4.6-4.6v-23.2c0-2.6-2.1-4.6-4.6-4.6h-69.8c-2.6 0-4.6 2.1-4.6 4.6v23.2c0 2.5 2 4.6 4.6 4.6z"
        className="st27"
      />
      <text
        className="st33 st9 st34"
        transform="translate(1038.34 1665.973)">
        {"HACIA CIP"}
      </text>
      <path
        d="M1063.9 1606.9v29.4"
        className="st32"
      />
      <path
        d="M1057.6 1630.8c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
        className="st27"
      />
      <path
        d="M1069.3 1630.8c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
        className="st2"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACMCAYAAADcDyOIAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABvpJREFUeNrsm4tS20gQRWds2ZgA ee3r/79vkyW8jC0baaWq7srNMBIyJiFI51R12RiQC+n4qqclQgB4w8RX/n0Ap/7ZAsYBzwGOlbc+ ROo4UFytkPka4CUkrkXaOvPaQQL792b2fJapSArDC6Vv+1hlyl/PJnIxIHXnUoWUSkxLAce0DC7p g9Xeyr9ORe8VOEriurSLppZNndjjwmqeJDECw3MEdnl3VtumSqlg3z8ogWf2/VbaVVPvrE7t66V9 PycxwFCRK0ndVtxNU/dNra1SryoVuehJ38IkbYU9b+p9UxdWZ4nEkX4Yjuh795a8rbh3Td00dW0e pm1G7BM4SOuwMElbeT829ampz/b8wtL4RPphphLwnKmDC7yxxL2y0JxL4j5IT1yrxEXPwk3Tt5X2 L6s/mvpgr5+Y6AgMzxXYe99W4Fs7uy+l7y2lJ97LRKKzhUjbhwtL3z+b+sck/mQCr0hgeIEELq19 uBZ5S2kp1ib47KlFnE4f0gT+bBL/3SMwwKESewKvE3nvTOhVeDzx6m0hPIG9Bz6zFP5gInudJz0w Czg4JoEXIu9t+D7xOgndI9veBPbZr4/QzpPyXmWOwHCkwO7hLnwf03ryFpn0ddfqrgsZqcQn4fs8 2C9mLEVgxIXnSuyLsqX45uJ2XWd41ELETBuhV+H8cZH5VND/wjECB/FonjymtyvEvkVc7k4z3fA8 s2GmD3AscUB1Mhuw4dynAGHhZ0gcDnVsNmDDuTcA+FVihz6hZ0d+SgBeldlAWQHelMAACAyAwAAI DAgMgMAACAyAwIDAAAgMgMCAwAAIDIDAAAgMCAyAwAAIDIDAgMAACAyAwAAIDAgMgMAACAwIDIDA AAgMgMCAwAAIDIDAAAgMCAyAwAAIDIDAgMAACAyAwIDAAAgMgMAACAwIDIDAAAgMgMCAwAAIDIDA AAgMCAyAwAAIDAgMgMAACAyAwIDAAAgMgMAACAwIDIDAAAgMCAyAwAAIDIDAgMAACAyAwAAIDAgM gMAACAyAwIDAAAgMgMCAwAAIDIDAAAgMCAyAwAAIDIDAMDWBa6sgjwBvOoFTqREbfnuBaxIZXpEn A3M2IHErqzopgJcUNZV1UGAWPbarvA9SVVJxojs9/oSDOFVx1beDgrKQDcVkQ62s+6Z28riTr9vv z+334gTFrZO/Ox4hbD1RkeskHB86wrJT6KJjoy5wK2vZ1NZqY4/tawv7+bm0InEiAuuHNh4gct2R PmFi7VmdCLwT17z2EpQPXR/yYoC8rbTrpm6tzkTevW1jCgLHpGZJPSWyylklp8wqeT72JE4FLs0x r3sJy52k8aPeuOhYtHnL0G7krqmbpq5M3hM7OO3PrETgOGJxQ0baws4+c3k+62mp0vasShLmIXOg xi5xKnDr2LX5dmsib2U/Vek+6Uvg0jbQbuhbU6dNLe3g7OwNU4HjiAVWcQs7Cy1sn/hzFXnWcbAe kvVEKeuKfdL7jTWJ9UykArfyfm3q0p7fWYiWHSncKfBeBL6x1F1I8rZvdi6vj11gT19P26X97auk lonIMdPr6ZpCT5XbZIE85hTWv83P9u5aK+8XkXgtKVwNHaNpAvsBifb6xjb8zg5iMRGBvV1weU9t H5zZh/mdlYusa4PKDtJW2jKt9YCeb4wS63prY2f7azvj/ycClyJw9dQUIt2oHoTSdvhZcqDSVflY Bfb0XZmsF1bvm/ogCert1lwWu6Ushq8z/d46SeGxClxnXNvLGcnXXNeyX8okgXtbiCBthB88T+Wt vYHKO5/AIi4V+NQ+xBcm7idZcHhPu5L962Hgi+FLS5hv9vWNpPDYBe4bGmxl6nUvLVY5dBGX64VV aBfYFy05eceawDNZvK1E4I+2T+6ll91aQi9tX+7sZ65M3K9WLvGN/P6uK21GmMC6uN3LmUqr9wNd PLFCrDMLu0L6uyHzz7FI7Iu4hfTAF9LDelps7Pm5CRxMTJ/mtOL+KwJfycgo7fXGPIFIw7JKRO66 IheGJnBu3LEPj4f3Y5W2a4w2lz54nSzA9BSYE/jSxP1i8l5K+5BbwI11jNY1kUjvs6mfaqWKgbO6 GH68ShTDdO6BiJleOL2sno7GbhKBS0lgF9flzc06q4nImwvM3M08nfuhOOAT0tUmTOVGHhdYb2xK b3LS2blectdB/ZUs3FTeKSzchrYUYegHuHjmG9VyUKe0s7WdqDK9mwp8mplC3FkS6+y3DD/esDLV 2yqfRfFab/yGd3QMj6+U6ezcJzU6B/YLQ5vQfaNKFfhHgV8ucJhwWlQhf+O/p3B6JW4vY6FdmM4V t19ySoTj+mKdUGil90Kkxb9oIfBv1RerzDEReIr3/SLwG0zjrtn4FP/zAoFHuE8RFwAARsD/AgwA avkOUhfAuEMAAAAASUVORK5CYII="
        width={176}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(671.348 1306.513)"
      />
      {/* Caudal de Permeado */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(8, "Caudal de Permeado", false)}>
        <path
          d="M740.5 1315.6h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3H832c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
          className="st2"
        />
        <path
          d="M681.2 1323h157.1v99.8H681.2z"
          className={getTarjetaClass(8, selected)}
        />
        <text
          className="st35"
          transform="translate(739.8 1367.639)">
          <tspan
            x={0}
            y={0}
            className="st26 st9 st10">
            {"Caudal"}
          </tspan>
          <tspan
            x={-19.8}
            y={16.8}
            className="st26 st9 st10">
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
          <path d="M703.6 1399.3c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
          <path d="M701.9 1398.3c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM713.2 1397c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z" />
          <path d="M713.8 1395.1c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM714.6 1404.3v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM709.6 1411.7c.9 0 1.7-.8 1.7-1.7H708c.1.9.7 1.6 1.6 1.7z" />
        </g>
        <text
          className="st11 st9 st36"
          transform="translate(740.867 1410.416)">
          {caudalPermeado}
        </text>
        <text
          className="st11 st9 st37"
          transform="translate(808.635 1410.016)">
          {"l/s"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(705.14 1342.64)">
          {"FERO - FE105 - FE103"}
        </text>
      </g>
      <circle
        cx={760.2}
        cy={1471}
        r={9.2}
        className="st38"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACMCAYAAADcDyOIAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABw9JREFUeNrsm4luo1gQRcHGduIs ne5ZNP//fdOdPV7xG5DqzdxUHuCl05nAOVKJKImxAseXqgfJMoBPTP7BrweoCe8tYN7yGiSGnyVv OFTqfM+f564y9zXAqRIHkTYkvnewwCrsKFE5EsNPSt96u0tU/H5jIhcd8taijq0Ktx2LyLQUcGzL oPJupUorL3qnwFHeKOnEalrVzLYTETnv6JEB2gTemagbq3VVK9tuzKeyKYmLjuSN0p5bzW0bRR43 SAywj8hR3q0Ju6xqUdWL1bKhR+5M4Ji8tagXVV1WdV3VlX09t59NpJUggeHQvjc4eZ+rerSKwRga hrw3Avv0nVja1sJ+reqbbb/Y986llRghLhyx6hD73pUlbi3unV3dYyj6oa7saiFG9v2pSXpt8v5Z 1e/29bW0EgUrEnCCwBsT+Kmq+6rOLEBjOm/cYJdrCjcJPDY559Y2fDV5/6rqN0vhC5O8kE8LAsMx Cbw0gefmUxCxlzLUbSWJW1sITeBLE/abyftHVTfSB49pIeCEIS4KPLeWNJisC5P6ydqLpGepIW7k hri5DHFfTN4o8NQNcUgMhwxyUeAzSd6VDXMPdpU/S8xaeVsLEVchYgrrMtqFiTt3AucIDEcKXIqH G5M3rnSdZf/dd2hN4LxhJUJvZMyy1zczdMeIC8eKXIq8M5N2lr2+adbYpvoeOHMrCnobOdbYFf0v nDrMRccmUkX2+o6vtg/R01C07Nw/yOMf6kk9oQZwKP4hMR+OqQfH/u2BRx07Tz06iazwHvhAHCVS N2n/oW+QkbrwjhIfFJijPWUF+BXpe3A4jjh28MkSGYGhXxMgAAIDIDAAAgMCAyAwAAIDIDAgMAAC AyAwAAIDAgMgMAACAwIDIDAAAgMgMCAwAAIDIDAAAgMCAyAwAAIDIDAgMAACAyAwIDAAAgMgMAAC AwIDIDAAAgMgMCAwAAIDIDAAAgMCAyAwAAIDAgMgMAACAyAwIDAAAgMgMAACAwIDIDAAAgMgMCAw AAIDIDAgMAACAyAwAAIDAgMgMAACAyAwIDAAAgMgMCAwhwAQGACBARAYEBgAgQEQGACBAYEBEBgA gQEQGBAYAIEBEBgQGACBARAYAIGhRwTZhkMEDu7FAO8taqespybw0W8CcELihlMEPniHACemcKyd VWtYFnvsUHe0S+x4iELn75Q8Q5R256qUanItpAQOiU9C3NFWSt9g9E4n9P8ubnB/c36CsGHAIgeR tnZrI7WVbZlI46ACxxMS3E5L2eGqqrVs42t3cgLzAQicu783PyCdUyGRDfBqFsSd0nyKbi1tGz3b OIFbWwhN3q3sdGH1XNVFVVP7/fp3xgNI4lxmhty2+nXu5ol8D3F3LS1ZGJDAW3PsydWLydwqcaoH 3knyrmxH9Q4fnLz1jmcicJ/lzUXSsatCvt+1LOkvmdqieZn73lIEEXhpjt1Z3Vf1aIG5lFbizVBX NAxtMX0XtuN6h3Mnb5S56HECa/KORNi6Jvb3T6Si1L612DX0emvX86nIfRY4NAh8W9XfVf0wkZ/M wfW+CawJEdO3/iSc2QmK8tafjHNL4CLRG/Yxfcci7szqTI7DTIQeu4FPxV3bCdOK/V7TwNJngTfS QtRB+d0kvjX3FnJs9hZYE/jBTkhmb1ZLfWknbiIJ3McWwrcOExF3blchrSjfRK5KejyXdvxiW/Zs Xy9E4thWhAElsIblXUsCh64WwvfACzkRpZ2ARzt5M0mb0QlLSp9FYE3fuX2Ir6q6ruqLHa9LO04z +dCXIu+TJM2DHctHN7Bsey6wH2j1w/0sx+TBjtXSDXFZ1xAXROBcpI5CP8rlsqnn67PAMX2vTNwb 1wZc2dWpkJWaeHLuZVC5dcPKYiACp9pVlXghV6llon3obCH8+lxwKTKV1iElb98SOEsk8LmJeiOT 8lLWM3Xg3Ugrdms93g+5TO41bfcwgb3EOtjqGnCy9+1K4MylQCm9SiHJm+p9+zjIjUTiqQn86HrY mMILayWm9tq1pO93KU3g2AO3Ltr3VGBdE2+649u4Pl50vMnOfUpG2etF/L62Dv7DmBrkvLgraRUu 7XeiwE9OYE1fvVSWA1lGS/XDuyx9c6f1WBR77jzuqOs2ap8l1rVgvdWpt0HjjKAJvJEEvrW6c73v pqH3HdKt5aZb663HoDgw7rMBtAz7DHR6mdvKWuZCVmlU4BeZrB9c35saUob0UM9JDzYVJ75JPrCD nWdvHy1VieMyY7zxk8sqxItJG/vmlZN3KG1Dl18HUXzUG3/iA50nWqtSBH6WVZpcVnBWbrVig7w/ r7+D49sJ/3yELjFmbrpeZ+3PuAIC/3KJU0+pxYEvy94+X536TwNA4A89fv654DzRaoR9l4YAgT9S ZP/fKfxjLAL35ngiLgAA9IR/BBgAgC0f3AD3ONAAAAAASUVORK5CYII="
        width={176}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(841.348 1306.513)"
      />
      {/* Conductividad Permeado */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(10, "Conductividad Permeado", false)}>
        <path
          d="M909.8 1315.6h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
          className="st2"
        />
        <path
          d="M850.5 1323h157.1v99.8H850.5z"
          className={getTarjetaClass(10, selected)}
        />
        <text
          className="st35"
          transform="translate(886.939 1367.639)">
          <tspan
            x={0}
            y={0}
            className="st26 st9 st10">
            {"Conductividad"}
          </tspan>
          <tspan
            x={2.3}
            y={16.8}
            className="st26 st9 st10">
            {"de Permeado"}
          </tspan>
        </text>
        {/* Alarma Conductividad Permeado */}
        <g
          className={`${getTemaAlarma(10, loading, datosAlarmas)} cursorPointer`}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(10, "Conductividad Permeado");
          }}>
          <path d="M872.9 1399.3c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
          <path d="M871.2 1398.3c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM882.5 1397c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z" />
          <path d="M883.1 1395.1c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM883.9 1404.3v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM878.9 1411.7c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z" />
        </g>
        <text
          className="st11 st9 st36"
          transform="translate(910.185 1410.416)">
          {conductividadPermeado}
        </text>
        <text
          className="st11 st9 st37"
          transform="translate(965.952 1410.016)">
          {"dS/m"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(915.458 1342.64)">
          {"AE105"}
        </text>
      </g>
      <circle
        cx={929.5}
        cy={1471}
        r={9.2}
        className="st38"
      />
      <circle
        cx={412.6}
        cy={1069}
        r={9.2}
        className="st38"
      />
      <circle
        cx={593.5}
        cy={1069}
        r={9.2}
        className="st38"
      />
      <circle
        cx={1028.3}
        cy={1069}
        r={9.2}
        className="st38"
      />
      <path
        d="M1315.4 978.4v888.2M1315.4 764.3v185.5"
        className="st1"
      />
      <path
        d="M1309.1 1864.2c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
        className="st18"
      />
      <path
        d="M1320.8 1864.2c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
        className="st2"
      />
      <path
        d="M1301.2 878c0-2.2 1.8-4.2 4.2-4.2h19.8c2.2 0 4.2 1.8 4.2 4.2 0 1.1-.4 2.2-1.1 2.9l-9.9 9.9c-1.5 1.5-4 1.5-5.7.2l-.2-.2-9.9-9.9c-1.2-.9-1.4-1.8-1.4-2.9z"
        className="st40"
      />
      <path
        d="M1324.6 971.4v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6h-14.8c-.9 0-1.6-.7-1.6-1.6zM1320.7 956.2l-4.6 7.9c-.3.5-1 .5-1.3 0l-4.6-7.9c-.3-.5.1-1.2.7-1.2h9.2c.5 0 .9.7.6 1.2z"
        className="st27"
      />
      <path
        d="m1310.1 971.8 4.6-7.9c.3-.5 1-.5 1.3 0l4.6 7.9c.3.5-.1 1.2-.7 1.2h-9.2c-.5 0-.9-.7-.6-1.2z"
        className="st27"
      />
      <path
        d="M1325.6 964h-10"
        className="st28"
      />
      <path
        d="M1333.6 955v18M1332.6 964h-8"
        className="st29"
      />
      <text
        className="st30 st9 st31"
        transform="translate(353.983 623.756)">
        {"HIPOCLORITO"}
      </text>
      <text
        className="st30 st9 st31"
        transform="translate(125.687 1225.967)">
        {"TK-METABISULFITO"}
      </text>
      <text
        className="st30 st9 st31"
        transform="translate(607.542 1225.967)">
        {"TK-ANTINCRUSTANTE"}
      </text>
      <path
        d="M772.1 1069.3v-43c0-4.5 3.6-8.1 8.1-8.1h62.2c4.5 0 8.1 3.6 8.1 8.1v43"
        className="st1"
      />
      <image
        xlinkHref="data:image/png;base64,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 MuzyP1nDAAAAAElFTkSuQmCC"
        width={176}
        height={141}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(723.056 857.882)"
      />
      {/* Diferencial Presión Filtros High Flow */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() =>
          loadGrafico(17, "Diferencial Presión Filtros High Flow", false)
        }>
        <path
          d="M792.1 867.7H739c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3V874c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
          className="st2"
        />
        <path
          d="M732.8 875.1h157.1v99.8H732.8z"
          className={getTarjetaClass(17, selected)}
        />
        <text
          className="st35"
          transform="translate(754.835 919.771)">
          <tspan
            x={0}
            y={0}
            className="st26 st9 st10">
            {"Diferencial Presi\xF3n"}
          </tspan>
          <tspan
            x={6.6}
            y={16.8}
            className="st26 st9 st10">
            {"Filtros High Flow"}
          </tspan>
        </text>
        {/* Alarma Diferencial Presión Filtros High Flow */}
        <g
          className={`${getTemaAlarma(17, loading, datosAlarmas)} cursorPointer`}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(17, "Diferencial Presión Filtros High Flow");
          }}>
          <path d="M755.2 951.4c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
          <path d="M753.5 950.4c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM764.8 949.1c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z" />
          <path d="M765.4 947.2c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM766.2 956.4v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM761.2 963.8c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z" />
        </g>
        <text
          className="st11 st9 st36"
          transform="translate(792.467 962.548)">
          {diferencialPresionFiltrosHighFlow}
        </text>
        <text
          className="st11 st9 st37"
          transform="translate(853.235 962.148)">
          {"bar"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(775.741 894.773)">
          {"PT103 - PT104"}
        </text>
      </g>
      <circle
        cx={811.8}
        cy={1017.2}
        r={9.2}
        className="st38"
      />
      {/* Estado Bomba Alta */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(12, "Estado Bomba Alta", true)}>
        <circle
          cx={1197.8}
          cy={1069.1}
          r={14.6}
          className="st17"
        />
        <circle
          cx={1197.8}
          cy={1069.1}
          r={10.9}
          className="st2"
        />
        <circle
          cx={1197.8}
          cy={1068.9}
          r={8}
          style={{
            fill: estadoBombaAlta
          }}
        />
      </g>
      <image
        xlinkHref="data:image/png;base64,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"
        width={180}
        height={122}
        style={{
          overflow: "visible",
          opacity: 0.2
        }}
        transform="translate(120.844 1485.01)"
      />
      {/* Diferencial Presión Primera Etapa */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() =>
          loadGrafico(3, "Diferencial Presión Primera Etapa", false)
        }>
        <path
          d="M236.3 1493.8h42.1c3.5 0 6.3 2.8 6.3 6.3v33.2c0 .8.3 1.6.8 2.2l5.3 6.5c1.1 1.4 1 3.3-.1 4.6l-5.1 5.5c-.6.7-.9 1.5-.9 2.4v36.9c0 3.5-2.8 6.3-6.3 6.3H135.9c-3.5 0-6.3-2.8-6.3-6.3v-91.3c0-3.5 2.8-6.3 6.2-6.3h100.5z"
          className="st2"
        />
        <path
          d="M135.6 1493.8h143.8v103.9H135.6z"
          className={getTarjetaClass(3, selected)}
        />
        <text
          className="st35"
          transform="translate(147.946 1541.562)">
          <tspan
            x={0}
            y={0}
            className="st26 st9 st10">
            {"Diferencial Presi\xF3n"}
          </tspan>
          <tspan
            x={14}
            y={16.8}
            className="st26 st9 st10">
            {"Primera Etapa"}
          </tspan>
        </text>
        {/* Alarma Diferencial Presión Primera Etapa */}
        <g
          className={`${getTemaAlarma(3, loading, datosAlarmas)} cursorPointer`}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(3, "Diferencial Presión Primera Etapa");
          }}>
          <path d="M149.7 1572.2c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
          <path d="M148 1571.2c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM159.3 1569.9c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z" />
          <path d="M159.9 1568c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM160.7 1577.2v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM155.7 1584.6c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z" />
        </g>
        <text
          className="st11 st9 st36"
          transform="translate(187.504 1583.34)">
          {diferencialPresionPrimeraEtapa}
        </text>
        <text
          className="st11 st9 st37"
          transform="translate(243.71 1582.94)">
          {"bar"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(170.017 1517.564)">
          {"PT105 - PT106"}
        </text>
      </g>
      <image
        xlinkHref="data:image/png;base64,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 EU6e+vi4EAAAAABJRU5ErkJggg=="
        width={180}
        height={121}
        style={{
          overflow: "visible",
          opacity: 0.2
        }}
        transform="translate(228.844 1659.01)"
      />
      {/* Diferencial Presión Segunda Etapa */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() =>
          loadGrafico(4, "Diferencial Presión Segunda Etapa", false)
        }>
        <path
          d="M344.5 1667.6h42.1c3.5 0 6.3 2.8 6.3 6.3v33.2c0 .8.3 1.6.8 2.2l5.3 6.5c1.1 1.4 1 3.3-.1 4.6l-5.1 5.5c-.6.7-.9 1.5-.9 2.4v36.9c0 3.5-2.8 6.3-6.3 6.3H244.1c-3.5 0-6.3-2.8-6.3-6.3v-91.3c0-3.5 2.8-6.3 6.2-6.3h100.5z"
          className="st2"
        />
        <path
          d="M243.8 1667.6h143.8v103.9H243.8z"
          className={getTarjetaClass(4, selected)}
        />
        <text
          className="st35"
          transform="translate(256.14 1715.294)">
          <tspan
            x={0}
            y={0}
            className="st26 st9 st10">
            {"Diferencial Presi\xF3n"}
          </tspan>
          <tspan
            x={10.5}
            y={16.8}
            className="st26 st9 st10">
            {"Segunda Etapa"}
          </tspan>
        </text>
        {/* Alarma Diferencial Presión Segunda Etapa */}
        <g
          className={`${getTemaAlarma(4, loading, datosAlarmas)} cursorPointer`}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(4, "Diferencial Presión Segunda Etapa");
          }}>
          <path d="M257.9 1746c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
          <path d="M256.2 1745c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM267.5 1743.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z" />
          <path d="M268.1 1741.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM268.9 1751v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM263.9 1758.4c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z" />
        </g>
        <text
          className="st11 st9 st36"
          transform="translate(295.699 1757.072)">
          {diferencialPresionSegundaEtapa}
        </text>
        <text
          className="st11 st9 st37"
          transform="translate(351.904 1756.671)">
          {"bar"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(277.21 1691.296)">
          {"PT106 - PT107"}
        </text>
      </g>
      <circle
        cx={527.5}
        cy={1769.4}
        r={9.2}
        className="st38"
      />
      <path
        d="M427.3 1556v66.8c0 6.1 4.9 11.1 11.1 11.1l50.7.1"
        className="st1"
      />
      <circle
        cx={423.2}
        cy={1600.6}
        r={9.2}
        className="st38"
      />
      <image
        xlinkHref="data:image/png;base64,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"
        width={176}
        height={141}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(438.348 1784.513)"
      />
      {/* Presión de Rechazo */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(6, "Presión de Rechazo", false)}>
        <path
          d="M545.5 1915.6h53.1c3.5 0 6.3-2.8 6.3-6.3V1807c0-3.5-2.8-6.3-6.3-6.3h-61.7c-1.2 0-2.4-.4-3.4-1.2l-.4-.3c-6.5-6.5-6.5-6.5-12.9.2-1 .9-2.2 1.3-3.5 1.3H454c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h91.5z"
          className="st2"
        />
        <path
          d="M447.8 1807.8h157.1v99.8H447.8z"
          className={getTarjetaClass(6, selected)}
        />
        <text
          className="st35"
          transform="translate(504.785 1852.452)">
          <tspan
            x={0}
            y={0}
            className="st26 st9 st10">
            {"Presi\xF3n"}
          </tspan>
          <tspan
            x={-13.6}
            y={16.8}
            className="st26 st9 st10">
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
          <path d="M470.1 1884.1c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
          <path d="M468.4 1883.1c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM479.7 1881.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z" />
          <path d="M480.3 1879.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM481.1 1889.1v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM476.1 1896.5c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z" />
        </g>
        <text
          className="st11 st9 st36"
          transform="translate(507.403 1895.23)">
          {presionRechazo}
        </text>
        <text
          className="st11 st9 st37"
          transform="translate(568.17 1894.83)">
          {"bar"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(514.677 1827.454)">
          {"PT107"}
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
        transform="translate(1125.738 1555.496)"
      />
      {/* Conductividad Producto Final */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(18, "Conductividad Producto Final", false)}>
        <path
          d="M1241.5 1564.3h42.1c3.5 0 6.3 2.8 6.3 6.3v33.2c0 .8.3 1.6.8 2.2l5.3 6.5c1.1 1.4 1 3.3-.1 4.6l-5.1 5.5c-.6.7-.9 1.5-.9 2.4v36.9c0 3.5-2.8 6.3-6.3 6.3h-142.5c-3.5 0-6.3-2.8-6.3-6.3v-91.3c0-3.5 2.8-6.3 6.2-6.3h100.5z"
          className="st2"
        />
        <path
          d="M1140.8 1564.3h143.8v103.9h-143.8z"
          className={getTarjetaClass(18, selected)}
        />
        <text
          className="st35"
          transform="translate(1168.343 1612.04)">
          <tspan
            x={0}
            y={0}
            className="st26 st9 st10">
            {"Conductividad"}
          </tspan>
          <tspan
            x={-0.8}
            y={16.8}
            className="st26 st9 st10">
            {"Producto Final"}
          </tspan>
        </text>
        {/* Alarma Conductividad Producto Final */}
        <g
          className={`${getTemaAlarma(18, loading, datosAlarmas)} cursorPointer`}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(18, "Conductividad Producto Final");
          }}>
          <path d="M1154.9 1642.7c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
          <path d="M1153.2 1641.7c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM1164.5 1640.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z" />
          <path d="M1165.1 1638.5c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM1165.9 1647.7v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1160.9 1655.1c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z" />
        </g>
        <text
          className="st11 st9 st36"
          transform="translate(1192.685 1653.816)">
          {conductividadProductoFinal}
        </text>
        <text
          className="st11 st9 st37"
          transform="translate(1243.89 1653.417)">
          {"dS/m"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(1196.368 1588.041)">
          {"AE106"}
        </text>
      </g>
      <circle
        cx={1315.5}
        cy={1615.2}
        r={9.2}
        className="st38"
      />
      <image
        xlinkHref="data:image/png;base64,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 TrFPyn8CDABbxjfZdHS2oQAAAABJRU5ErkJggg=="
        width={180}
        height={122}
        style={{
          overflow: "visible",
          opacity: 0.2
        }}
        transform="translate(1125.738 1680.496)"
      />
      {/* Caudal Producto Final */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(19, "Caudal Producto Final", false)}>
        <path
          d="M1241.5 1689.7h42.1c3.5 0 6.3 2.8 6.3 6.3v33.2c0 .8.3 1.6.8 2.2l5.3 6.5c1.1 1.4 1 3.3-.1 4.6l-5.1 5.5c-.6.7-.9 1.5-.9 2.4v36.9c0 3.5-2.8 6.3-6.3 6.3h-142.5c-3.5 0-6.3-2.8-6.3-6.3V1696c0-3.5 2.8-6.3 6.2-6.3h100.5z"
          className="st2"
        />
        <path
          d="M1140.8 1689.7h143.8v103.9h-143.8z"
          className={getTarjetaClass(19, selected)}
        />
        <text
          className="st35"
          transform="translate(1189.692 1737.39)">
          <tspan
            x={0}
            y={0}
            className="st26 st9 st10">
            {"Caudal"}
          </tspan>
          <tspan
            x={-23}
            y={16.8}
            className="st26 st9 st10">
            {"Producto Final"}
          </tspan>
        </text>
        {/* Alarma Caudal Producto Final */}
        <g
          className={`${getTemaAlarma(19, loading, datosAlarmas)} cursorPointer`}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(19, "Caudal Producto Final");
          }}>
          <path d="M1154.9 1768.1c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
          <path d="M1153.2 1767.1c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM1164.5 1765.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z" />
          <path d="M1165.1 1763.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM1165.9 1773.1v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1160.9 1780.5c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z" />
        </g>
        <text
          className="st11 st9 st36"
          transform="translate(1192.685 1779.167)">
          {caudalProductoFinal}
        </text>
        <text
          className="st11 st9 st37"
          transform="translate(1257.89 1778.767)">
          {"l/s"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(1196.197 1713.391)">
          {"FE104"}
        </text>
      </g>
      <circle
        cx={1315.5}
        cy={1741.5}
        r={9.2}
        className="st38"
      />
      <image
        xlinkHref="data:image/png;base64,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 TrFPyn8CDABbxjfZdHS2oQAAAABJRU5ErkJggg=="
        width={180}
        height={122}
        style={{
          overflow: "visible",
          opacity: 0.2
        }}
        transform="translate(1125.738 1311.505)"
      />
      {/* Caudal de Mezcla */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(15, "Caudal de Mezcla", false)}>
        <path
          d="M1241.5 1320.7h42.1c3.5 0 6.3 2.8 6.3 6.3v33.2c0 .8.3 1.6.8 2.2l5.3 6.5c1.1 1.4 1 3.3-.1 4.6l-5.1 5.5c-.6.7-.9 1.5-.9 2.4v36.9c0 3.5-2.8 6.3-6.3 6.3h-142.5c-3.5 0-6.3-2.8-6.3-6.3V1327c0-3.5 2.8-6.3 6.2-6.3h100.5z"
          className="st2"
        />
        <path
          d="M1140.8 1320.7h143.8v103.9h-143.8z"
          className={getTarjetaClass(15, selected)}
        />
        <text
          className="st35"
          transform="translate(1189.692 1368.399)">
          <tspan
            x={0}
            y={0}
            className="st26 st9 st10">
            {"Caudal"}
          </tspan>
          <tspan
            x={-9.7}
            y={16.8}
            className="st26 st9 st10">
            {"de Mezcla"}
          </tspan>
        </text>
        {/* Alarma Caudal de Mezcla */}
        <g
          className={`${getTemaAlarma(15, loading, datosAlarmas)} cursorPointer`}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(15, "Caudal de Mezcla");
          }}>
          <path d="M1154.9 1399.1c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
          <path d="M1153.2 1398.1c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM1164.5 1396.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z" />
          <path d="M1165.1 1394.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM1165.9 1404.1v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1160.9 1411.5c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z" />
        </g>
        <text
          className="st11 st9 st36"
          transform="translate(1192.685 1410.176)">
          {caudalMezcla}
        </text>
        <text
          className="st11 st9 st37"
          transform="translate(1260.89 1409.776)">
          {"l/s"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(1197.197 1344.4)">
          {"FE102"}
        </text>
      </g>
      <circle
        cx={1315.5}
        cy={1372.5}
        r={9.2}
        className="st38"
      />
      <path
        d="M1287.5 1477.2c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        className="st18"
      />
      <path
        d="M1287.5 1465.5c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st2"
      />
      <path
        d="M690.3 1477.5c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        className="st18"
      />
      <path
        d="M690.3 1465.8c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st2"
      />
      <path
        d="M1116.4 830.3c1 0 1.9.8 1.9 1.9v9c0 1-.8 1.9-1.9 1.9-.5 0-1-.2-1.3-.5l-4.5-4.5c-.7-.7-.7-1.8-.1-2.6l.1-.1 4.5-4.5c.4-.5.8-.6 1.3-.6z"
        className="st18"
      />
      <path
        d="M1116.4 842c-.2 0-.4-.1-.6-.3l-4.5-4.5c-.3-.3-.3-.9 0-1.3l4.5-4.5c.2-.2.4-.3.6-.3.4 0 .9.3.9.9v9c0 .6-.4 1-.9 1m0 2c1.6 0 2.9-1.3 2.9-2.9v-9c0-1.6-1.3-2.9-2.9-2.9-.8 0-1.5.3-2 .8l-4.5 4.5-.1.1-.1.1c-.9 1.2-.9 2.9.2 3.9l4.5 4.5c.5.6 1.2.9 2 .9z"
        className="st2"
      />
      <path
        d="M1116.4 1279c1 0 1.9.8 1.9 1.9v9c0 1-.8 1.9-1.9 1.9-.5 0-1-.2-1.3-.5l-4.5-4.5c-.7-.7-.7-1.8-.1-2.6l.1-.1 4.5-4.5c.4-.5.8-.6 1.3-.6z"
        className="st18"
      />
      <path
        d="M1116.4 1290.7c-.2 0-.4-.1-.6-.3l-4.5-4.5c-.3-.3-.3-.9 0-1.3l4.5-4.5c.2-.2.4-.3.6-.3.4 0 .9.3.9.9v9c0 .6-.4 1-.9 1m0 2c1.6 0 2.9-1.3 2.9-2.9v-9c0-1.6-1.3-2.9-2.9-2.9-.8 0-1.5.3-2 .8l-4.5 4.5-.1.1-.1.1c-.9 1.2-.9 2.9.2 3.9l4.5 4.5c.5.6 1.2.9 2 .9z"
        className="st2"
      />
      <path
        d="M630 830.3c1 0 1.9.8 1.9 1.9v9c0 1-.8 1.9-1.9 1.9-.5 0-1-.2-1.3-.5l-4.5-4.5c-.7-.7-.7-1.8-.1-2.6l.1-.1 4.5-4.5c.4-.5.8-.6 1.3-.6z"
        className="st18"
      />
      <path
        d="M630 842c-.2 0-.4-.1-.6-.3l-4.5-4.5c-.3-.3-.3-.9 0-1.3l4.5-4.5c.2-.2.4-.3.6-.3.4 0 .9.3.9.9v9c0 .6-.4 1-.9 1m0 2c1.6 0 2.9-1.3 2.9-2.9v-9c0-1.6-1.3-2.9-2.9-2.9-.8 0-1.5.3-2 .8l-4.5 4.5-.1.1-.1.1c-.9 1.2-.9 2.9.2 3.9l4.5 4.5c.5.6 1.2.9 2 .9z"
        className="st2"
      />
      <path
        d="M698.5 1075c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        className="st18"
      />
      <path
        d="M698.5 1063.3c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st2"
      />
      <path
        d="M630 1279c1 0 1.9.8 1.9 1.9v9c0 1-.8 1.9-1.9 1.9-.5 0-1-.2-1.3-.5l-4.5-4.5c-.7-.7-.7-1.8-.1-2.6l.1-.1 4.5-4.5c.4-.5.8-.6 1.3-.6z"
        className="st18"
      />
      <path
        d="M630 1290.7c-.2 0-.4-.1-.6-.3l-4.5-4.5c-.3-.3-.3-.9 0-1.3l4.5-4.5c.2-.2.4-.3.6-.3.4 0 .9.3.9.9v9c0 .6-.4 1-.9 1m0 2c1.6 0 2.9-1.3 2.9-2.9v-9c0-1.6-1.3-2.9-2.9-2.9-.8 0-1.5.3-2 .8l-4.5 4.5-.1.1-.1.1c-.9 1.2-.9 2.9.2 3.9l4.5 4.5c.5.6 1.2.9 2 .9z"
        className="st2"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACMCAYAAADcDyOIAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABxBJREFUeNrsm4ly2kgURSUQBmPH WWap+f/vy+IFzCp6pKr3Zq47LYQgTmLpnKpXIsSIcuvo6nVLzjKAN0z+iz8PUBNeW8D8yGeQGH6U vKGr1PmJ/59HlUWvAS6VOIi0IfFeZ4FV2FGiciSGH5S+9faQKH+/MZGLFnlrUcdWRbQdi8i0FHBu y6Dy7qVKq1j0VoFdXpd0YnVV1dS2ExE5b+mRAY4JfDBRd1bbqja23ZlPZVMSFy3J69JeW81t6yKP GyQGOEVkl3dvwq6rWlX1bLVu6JFbE9iTtxb1pqrbqu6qemev5/Z/E2klSGDo2veGSN5lVU9WHoyh YZL3ncBx+k4sbWthP1b1ybbv7b1raSVGiAtnrDp437uxxK3Fvberu4diPKkr21qIkb1/ZZLembx/ V/Wnvb6TVqJgRQIuEHhnAi+qeqhqZgHq6byLJna5pnCTwGOTc25tw0eT95+q/rAUvjHJCzlbEBjO SeC1CTw3n4KIvZZJ3V6S+GgLoQl8a8J+Mnn/quqD9MFjWgi4YBLnAs+tJQ0m68qkXlh7kfQsNYkb RZO4uUzi3pu8LvBVNIlDYugykXOBZ5K8G5vMPdpVfpaYa+XHWghfhfAU1mW0GxN3HgmcIzCcKXAp Hu5MXl/pmmX/33c4msB5w0qE3siYZi9vZuiOERfOFbkUeacm7TR7edOssU2Ne+AsWlHQ28he46jo f+HSyZw7NpEqspd3fLV9cE9DcWTn8YM88UM9qSfUALoSPyQWh2PqwbH/euBRy85Tj04iK7wGcSCO EqmbtL/rF2SkLryixJ0Cc3SirAA/I307h+OIsYM3lsgIDP2aAQIgMAACAyAwIDAAAgMgMAACAwID IDAAAgMgMCAwAAIDIDAgMAACAyAwAAIDAgMgMAACAyAwIDAAAgMgMAACAwIDIDAAAgMCAyAwAAID IDAgMAACAyAwAAIDAgMgMAACAyAwIDAAAgMgMCAwAAIDIDAAAgMCAyAwAAIDIDAgMAACAyAwAAID AgMgMAACAwIDIDAAAgMgMCAwAAIDIDAAAgMCAyAwAAIDAjMEgMAACAyAwIDAAAgMgMAACAwIDIDA AAgMgMCAwAAIDIDAgMAACAyAwAAIDD0iyDZ0EThEHwZ4bVFbZb00gc/+EoALEjdcInDnHQJcmMJe B6ujYVmcsEPd0SGx4yEKnb9S8gxR2kNUpVSTayElcEicCb6jvZR+weiVDujvLm6Ifuf8QmGHenUL Im3t1k5qL9sykcZBBfYDEqKdlrLDTVVb2fpnD3IA8wEInEe/b94hncORsBjS1SyIO6X55G6tbeue 7SKBj7YQmrx72enKalnVTVVX9vP1z4wHkMS5zBly2+rrPJpP5B17vKG1ZSrw3hxbRPVsMh+VONUD HyR5N7ajeoePkbz1jqcicJ/lzUXScVSFvD9KfDY09Ht7CYpUz9f3liLIOKzNsXurh6qeLDDX0kp8 N6krGiZtnr4r23G9w3kkr8tc9DiBNXlHImxdE/v9J1Lj6IQOLb3eVhJGD9Kh5wKHBoG/VfW5qq8m 8sIc3J6awDrQnr71mTCzA+Ty1mfGtSVwkegN+5i+YxF3ajWTcZiK0HEa61VtawdsLa1Z06VyCALv pIWog/KLSfzN3HOB910E1gR+tAOS2ZfVUt/agZtIAvexhYhbh4mIO7erkJbL5xLnMqfYyXxieaTf 85YiDCiBNSzvjyRwaGsh4rRYSZKUNshPdvCmDWmT91RgTd+5ncTvqrqr6r2N162Nk4+NC7yLDtKj pc29/dsl3gxA4HgFZi9XpaWNh4/RQnrgUlqro5M4TYxcpHahn+RyOZak6XsCu8Cevu9M3A+y9LO1 969tfEY2dlsZu3u7PH618gmLC7wbQAKn5gVbaaueE1elZFtVnLA+F+T1Wvq8okHeviVwlkjgaxP1 g8yU1zIpuzHRXWBPF788fokmKy7wEFqI0CCxTmx1DTjZ+7YlcBYNYim9SpGYbWc9FTjLXq77FnYC X8syz7NMxHwh3ucILvAqmmV/FoEf5FK5jZbTsgEIHKKlxdQd38b18aLlSw7RWTLKXi7i97V1iE/G 1EQuFtflfbZ0ntnP69zhWyJ9HxP9b9+X0VL98CFRoW0sihN37jtqu43aZ4l1LVhvdeptUE/aJoG1 /30weZeJicrQno1IPaxz0l3JomPcZwNoGU6Z0Ollbh8tkS2sB55KC7ExUR9F3EV2wp2mgcjb9vps gdt2nA9ssPPs++cXVGK/o9S0CrGUWiFvN1kvEfiHf/EbHug80VqVIvAye3mHMsgEeB0tue0SExU4 o7+D89uJ+PkIfS4ivhOnzzw0PecKCPxTJU49paYrNXG7USbERV4E/qXjFz8XHK/QaLsRBrrSgMBv ROTUX6fwx7EI3JvxRFwAAOgB/wowAFjrI9vMUx8zAAAAAElFTkSuQmCC"
        width={176}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(505.348 904.513)"
      />
      {/* Caudal de Alimentación RO */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(7, "Caudal de Alimentación RO", false)}>
        <path
          d="M573.9 913.6h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3V919.9c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
          className="st2"
        />
        <path
          d="M514.6 921h157.1v99.8H514.6z"
          className={getTarjetaClass(7, selected)}
        />
        <text
          className="st35"
          transform="translate(573.217 965.638)">
          <tspan
            x={0}
            y={0}
            className="st26 st9 st10">
            {"Caudal"}
          </tspan>
          <tspan
            x={-40.1}
            y={16.8}
            className="st26 st9 st10">
            {"de Alimentaci\xF3n RO"}
          </tspan>
        </text>
        {/* Alarma Caudal de Alimentación RO */}
        <g
          className={`${getTemaAlarma(7, loading, datosAlarmas)} cursorPointer`}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(7, "Caudal de Alimentación RO");
          }}>
          <path d="M537 997.3c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
          <path d="M535.3 996.3c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM546.6 995c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z" />
          <path d="M547.2 993.1c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM548 1002.3v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM543 1009.7c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z" />
        </g>
        <text
          className="st11 st9 st36"
          transform="translate(574.284 1008.416)">
          {caudalAlimentacionRO}
        </text>
        <text
          className="st11 st9 st37"
          transform="translate(646.052 1008.016)">
          {"l/s"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(580.558 940.64)">
          {"FERO"}
        </text>
      </g>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACMCAYAAADcDyOIAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABtlJREFUeNrsm4tS20gQRTWybCAG llR2t/b/vy+bBPzAL1krV/Vkb5oZI9s8gnVOVZeMIk+K0VGreySKAuADE975+wA7mrcQMHT4DHCK vM2hUoeOx2gUiZ8BTpW4EWmbxL6DBY7/VtrnMhGBLAwvkH13220i4v5sRq46ZN2BRSXbyklMSQHH lgwq78ailq0X/VmBg2TcKOywjYs2RhJR6BKB4QSBtyLsSmLZxtp8qnOZeF8GHoi4l218srgSmYeJ cgKgq8gx865F2sc25hYL21fk6uEqIa5m3guT9rqN2zZu7PPYpB7acYF6GI6oexvLvGuTddbGtI2J lKle3q2KXGXKh5h9L03YzxJ3JvKVlBIlqxJwxKrDVkqHRxP3hyXOgQhbS7YOOYG19tXse2vi/t3G n218sX1jOwaB4VSBl5Z9HywxDu242jV2tX3vp8T7SoiRCXxjAu/k/ce2dwgMryDwWORd2/6F1MKl NHPZJi5m4JFdDdcm7BeT9y8TOiUwwKFNnAqs8j5aPTx1pWq2ifMlxMgEHVsWvjWRP7sMPJCBkRgO aeRifbt08s7MuehYqtfaW0KoxJeWiceJGJnArEDAsSsRtXi4FreuzD2V98mdvnLi+YcYQ4uYjTXi OvAAceEEkePde5Pxa1j8+sBMXW18CZHLxD4GEtS/8BKlxCDjWirzZksIzcKheP5FHt5Kg1MJzzhW 7vOs7Dg4ssJbytzZt/KIgQtEhlcStzg0UZYdBwR4L7H3JsySOYKPDAIDAgMgMAACAwIDIDAAAgMg MCAwAAIDIDAAAgMCAyAwAAIDAgMgMAACAyAwIDAAAgMgMAACAwIDIDAAAgMgMCAwAAIDIDAgMAAC AyAwAAIDAgMgMAACAyAwIDAAAgMgMAACAwIDIDAAAgMCAyAwAAIDIDAgMAACAyAwAAIDAgMgMAAC AyAwIDAAAgMgMCAwAAIDIDAAAgMCAyAwAAIDIDAgMAACAyAwAAIDAgMgMAACAwIDIDAAAgMgMCAw AAIDIDAAAgMCAyAwAAIDIDAgMAACAyAwIDDAGQjcWBSyBXhrmoSPR2XgJiE1YsNLitpkXDuphGgy AfCaInf2rXpmkK1sffRZ6PBKt8o+C5tzbK9rVWYSdcBNImqL8pVO6O8ubuN+53CisH3tNxpxqc64 pjI/mb/KnRC9GnYDri1WbSxdxO9u5QSGHggc3O8bDsjOTaY56dvdrHECp/xaiX+1y8Q/x6gSA2vm 3Q2yaOOxjZnE0I7fHTPoQSYO0jME2+rn4PqJ0KG+2yZKtL6I3Ejyq03YmYtHc2+1JxM/KSEaJ28c eNLGQxtjkXd3ZVzYGOWZyxtE0oGLSvaXie82ieSwlVJMSzJ/kpozlzjOQ/Tsexs/zLWJ7Vs6iZtU CaGowLurYGqDXjl5xwmBwxnKW0jGjcJWNhcj28YYiMgpeaOwWprprVIzzTkL3GQE3nn2tY1/7fPU HFSB965C6ETvvjS3K+HCyTvrkcAxBiLuhcWlXdjx55GIXLqkUIu0CynN9FaZq/f6IvCDyfvVsvHE HFy5eelUQizty5WdkCjvbsJv7MSNeiJwzL5DEfeTXcQacZKjxEEalbXNaewnphJzV+/VPRM43u0n lnm/WzzY3Cy7lhCNm/CFZJJYbE/tZF3aiaoSnfk5CqzZdyfvtV3It238YfN1bfMU71hR4LUkhNhP 3NvJmojEyx4I7FdgNuJavLDjHE1t/zo3J7kSIp68pauLFzao3i7LM27iUgLH7Htj4t7ZvMRmQ+9O pc1dKsN8s7iXW+Vy38k60yZuW/y6VPtoczGXed10KSH84LX7HAUeSekwSMh7bhm4SGTgKxP1zrLG QkqAldyhosALaVK+SZ33TbLwvCclRJPpuTYyfyu5mHU+iueaOL9G5x9sLKULLzO17znWwaVIPDKB 4zLPXBqxpW2v7ZgocFzN+W7ifhWB7+VWuXLLaUUPBE499fXLi50eJefqFO2iSxfn/gQuOIm1kfPi Rnnnlp0v7fja9k9MYJ99HxL177kvo6U82/cuRHFIBk5l4pCoj0PRj3cgUmvB+rhz5eq36R6Btf69 N3lnrlHpy4OM1OJB7hF7luqAwXNlQp9e5ImZ2N/q1k7guEYeSwhd57yXDlvlTS4T9UTe5z6fJPC+ wUPPJjsUT99fqN1S0HTPKkTqWX+f5T1I1lMFftH/+ANPdEg0ILpuPiv+f0IZL/CN1Mi65LZONCpw RH0Hx5cT/v0IfS/CP4nTdx782ibyIvC7SJx6S01XaXy5USfERV4Eftf58+8F+xWa1J9o8VffCPxb ipxaG0/9NTfiIvCHnE/EBQCAM+A/AQYAkPcYVROZLCUAAAAASUVORK5CYII="
        width={176}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(940.348 904.513)"
      />
      {/* ORP */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(0, "ORP", false)}>
        <path
          d="M1009 913.6h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3V919.9c0-3.5-2.8-6.3-6.3-6.3H1009z"
          className="st2"
        />
        <path
          d="M949.7 921h157.1v99.8H949.7z"
          className={getTarjetaClass(0, selected)}
        />
        <text
          className="st26 st9 st10"
          transform="translate(1015.31 972.638)">
          {"ORP"}
        </text>
        {/* Alarma ORP */}
        <g
          className={`${getTemaAlarma(0, loading, datosAlarmas)} cursorPointer`}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(0, "ORP");
          }}>
          <path d="M972.1 997.3c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
          <path d="M970.4 996.3c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM981.7 995c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z" />
          <path d="M982.3 993.1c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM983.1 1002.3v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM978.1 1009.7c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z" />
        </g>
        <text
          className="st11 st9 st36"
          transform="translate(1009.362 1008.416)">
          {ORP}
        </text>
        <text
          className="st11 st9 st37"
          transform="translate(1071.13 1008.016)">
          {"mV"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(1013.636 940.64)">
          {"AE104"}
        </text>
      </g>
      <text
        className="st11 st9 st31"
        transform="translate(1226.988 1239.97)">
        {"VX-117"}
      </text>
      <text
        className="st11 st9 st31"
        transform="translate(1276.072 968.233)">
        {"VX-116"}
      </text>
      <text
        className="st11 st9 st31"
        transform="translate(659.418 1788.23)">
        {"VX-119"}
      </text>
      <image
        xlinkHref="data:image/png;base64,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 DAAASAcFAZSpQAAAAABJRU5ErkJggg=="
        width={176}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(720.348 1672.513)"
      />
      {/* Caudal de Rechazo */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(20, "Caudal de Rechazo", false)}>
        <path
          d="M789.4 1682.2h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3H798c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
          className="st2"
        />
        <path
          d="M730.1 1689.6h157.1v99.8H730.1z"
          className={getTarjetaClass(20, selected)}
        />
        <text
          className="st35"
          transform="translate(788.717 1734.27)">
          <tspan
            x={0}
            y={0}
            className="st26 st9 st10">
            {"Caudal"}
          </tspan>
          <tspan
            x={-15.2}
            y={16.8}
            className="st26 st9 st10">
            {"de Rechazo"}
          </tspan>
        </text>
        {/* Alarma Caudal de Rechazo */}
        <g
          className={`${getTemaAlarma(20, loading, datosAlarmas)} cursorPointer`}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(20, "Caudal de Rechazo");
          }}>
          <path d="M752.5 1765.9c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
          <path d="M750.8 1764.9c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM762.1 1763.6c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z" />
          <path d="M762.7 1761.7c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM763.5 1770.9v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM758.5 1778.3c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z" />
        </g>
        <text
          className="st11 st9 st36"
          transform="translate(789.784 1777.048)">
          {caudalRechazo}
        </text>
        <text
          className="st11 st9 st37"
          transform="translate(860.551 1776.648)">
          {"l/s"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(794.058 1709.272)">
          {"FE105"}
        </text>
      </g>
      <circle
        cx={808.6}
        cy={1825.4}
        r={9.2}
        className="st38"
      />
      <path
        d="M685.9 1954.8h63.2c5.9 0 10.7-4.8 10.7-10.7v-118.8M90.6 1022.3v922.6c0 5.5 4.5 10 10 10h560.3"
        className="st1"
      />
      <path
        d="M1072.7 1602.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6h-14.8c-.9 0-1.6-.7-1.6-1.6zM1068.8 1587.4l-4.6 7.9c-.3.5-1 .5-1.3 0l-4.6-7.9c-.3-.5.1-1.2.7-1.2h9.2c.5 0 .9.7.6 1.2z"
        className="st27"
      />
      <path
        d="m1058.2 1603 4.6-7.9c.3-.5 1-.5 1.3 0l4.6 7.9c.3.5-.1 1.2-.7 1.2h-9.2c-.5 0-.9-.7-.6-1.2z"
        className="st27"
      />
      <path
        d="M1073.7 1595.2h-10"
        className="st28"
      />
      <path
        d="M1081.7 1586.2v18M1080.7 1595.2h-8"
        className="st29"
      />
      <text
        className="st11 st9 st31"
        transform="translate(1023.116 1599.473)">
        {"VX-118"}
      </text>
      <path
        d="M681.4 1945.2h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM666.2 1949.1l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st27"
      />
      <path
        d="m681.8 1959.7-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st27"
      />
      <path
        d="M674 1944.2v10"
        className="st28"
      />
      <path
        d="M665 1936.2h18M674 1937.2v8"
        className="st29"
      />
      <image
        xlinkHref="data:image/png;base64,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"
        width={176}
        height={141}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(222.348 1790.513)"
      />
      {/* Caudal Recirculación */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(16, "Caudal Recirculación", false)}>
        <path
          d="M291 1800.4h-53.1c-3.5 0-6.3 2.8-6.3 6.3V1909c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3H291z"
          className="st2"
        />
        <path
          d="M231.7 1807.8h157.1v99.8H231.7z"
          className={getTarjetaClass(16, selected)}
        />
        <text
          className="st35"
          transform="translate(290.256 1852.452)">
          <tspan
            x={0}
            y={0}
            className="st26 st9 st10">
            {"Caudal"}
          </tspan>
          <tspan
            x={-29.6}
            y={16.8}
            className="st26 st9 st10">
            {"de Recirculaci\xF3n"}
          </tspan>
        </text>
        {/* Alarma Caudal Recirculación */}
        <g
          className={`${getTemaAlarma(16, loading, datosAlarmas)} cursorPointer`}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(16, "Caudal Recirculación");
          }}>
          <path d="M254.1 1884.1c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
          <path d="M252.4 1883.1c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM263.7 1881.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z" />
          <path d="M264.3 1879.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM265.1 1889.1v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM260.1 1896.5c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z" />
        </g>
        <text
          className="st11 st9 st36"
          transform="translate(291.322 1895.23)">
          {caudalRecirculacion}
        </text>
        <text
          className="st11 st9 st37"
          transform="translate(362.09 1894.83)">
          {"l/s"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(296.596 1827.454)">
          {"FE103"}
        </text>
      </g>
      <circle
        cx={310.2}
        cy={1953.7}
        r={9.2}
        className="st38"
      />
      <image
        xlinkHref="data:image/png;base64,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"
        width={180}
        height={122}
        style={{
          overflow: "visible",
          opacity: 0.2
        }}
        transform="translate(1113.844 378.01)"
      />
      {/* Diferencial Presión Pretratamiento */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() =>
          loadGrafico(11, "Diferencial Presión Pretratamiento", false)
        }>
        <path
          d="M1177.8 491.2h-42.1c-3.5 0-6.3-2.8-6.3-6.3v-33.2c0-.8-.3-1.6-.8-2.2l-5.3-6.5c-1.1-1.4-1-3.3.1-4.6l5.1-5.5c.6-.7.9-1.5.9-2.4v-36.9c0-3.5 2.8-6.3 6.3-6.3h142.5c3.5 0 6.3 2.8 6.3 6.3v91.3c0 3.5-2.8 6.3-6.2 6.3h-100.5z"
          className="st2"
        />
        <path
          d="M1134.6 387.3h143.8v103.9h-143.8z"
          className={getTarjetaClass(11, selected)}
        />
        <text
          className="st35"
          transform="translate(1146.906 434.991)">
          <tspan
            x={0}
            y={0}
            className="st26 st9 st10">
            {"Diferencial Presi\xF3n"}
          </tspan>
          <tspan
            x={12.8}
            y={16.8}
            className="st26 st9 st10">
            {"Pretratamiento"}
          </tspan>
        </text>
        {/* Alarma Diferencial Presión Pretratamiento */}
        <g
          className={`${getTemaAlarma(11, loading, datosAlarmas)} cursorPointer`}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(11, "Diferencial Presión Pretratamiento");
          }}>
          <path d="M1148.6 465.7c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
          <path d="M1146.9 464.7c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM1158.2 463.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z" />
          <path d="M1158.8 461.5c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM1159.6 470.7v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1154.6 478.1c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z" />
        </g>
        <text
          className="st11 st9 st36"
          transform="translate(1186.464 476.769)">
          {diferencialPresionPretratamiento}
        </text>
        <text
          className="st11 st9 st37"
          transform="translate(1247.67 476.369)">
          {"bar"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(1170.977 410.993)">
          {"PT101 - PT102"}
        </text>
      </g>
      <path
        d="M76.5 878c0-2.2 1.8-4.2 4.2-4.2h19.8c2.2 0 4.2 1.8 4.2 4.2 0 1.1-.4 2.2-1.1 2.9l-9.9 9.9c-1.5 1.5-4 1.5-5.7.2l-.2-.2-9.9-9.9c-1.2-.9-1.4-1.8-1.4-2.9zM104.6 1128.7c0 2.2-1.8 4.2-4.2 4.2H80.7c-2.2 0-4.2-1.8-4.2-4.2 0-1.1.4-2.2 1.1-2.9l9.9-9.9c1.5-1.5 4-1.5 5.7-.2l.2.2 9.9 9.9c1.1.9 1.3 1.8 1.3 2.9z"
        className="st40"
      />
      <path
        d="M96.8 1711.5c0 1-.8 1.9-1.9 1.9h-9c-1 0-1.9-.8-1.9-1.9 0-.5.2-1 .5-1.3l4.5-4.5c.7-.7 1.8-.7 2.6-.1l.1.1 4.5 4.5c.5.4.6.8.6 1.3z"
        className="st18"
      />
      <path
        d="M85.1 1711.5c0-.2.1-.4.3-.6l4.5-4.5c.3-.3.9-.3 1.3 0l4.5 4.5c.2.2.3.4.3.6 0 .4-.3.9-.9.9h-9c-.6 0-1-.4-1-.9m-2 0c0 1.6 1.3 2.9 2.9 2.9h9c1.6 0 2.9-1.3 2.9-2.9 0-.8-.3-1.5-.8-2l-4.5-4.5-.1-.1-.1-.1c-1.2-.9-2.9-.9-3.9.2l-4.5 4.5c-.6.5-.9 1.2-.9 2z"
        className="st2"
      />
      <path
        d="M753.4 1865.2c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
        className="st18"
      />
      <path
        d="M765.1 1865.2c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
        className="st2"
      />
      <path
        d="M1094.3 653.6v-81.3c9 0 16.4-7.3 16.4-16.2s-7.5-16.2-16.4-16.2V275.2c0-4.2-3.4-7.7-7.7-7.7h-53.8l-586.2 1.7c-6.4 0-11.6 5.2-11.6 11.6v149.7"
        className="st25"
      />
      <circle
        cx={1094.3}
        cy={441.9}
        r={9.2}
        className="st38"
      />
    </svg>
  );
};

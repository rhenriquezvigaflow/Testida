import React from "react";
import {
  getColor,
  getColorConexion,
  getConexion,
  getScaledValue,
  getTarjetaClass,
  getTemaAlarma
} from "../../../../../commons/scada/scada";

export default function ScadaAgricolaRioNegro({
  scada,
  datosAlarmas,
  loading,
  selected,
  loadGrafico,
  onClickAlarma
}) {
  const colorConexion = scada !== null && getColorConexion(scada.con);
  const estadoConexion = scada !== null && getConexion(scada.con);

  const recuperacionRO = scada !== null && getScaledValue(scada.d0, 1);
  const presionAlimentacion = scada !== null && getScaledValue(scada.d2, 1);
  const diferencialPretratamiento =
    scada !== null && getScaledValue(scada.d3, 1);
  const sensorORP = scada !== null && getScaledValue(scada.d4, 1);
  const phAlimentacion = scada !== null && getScaledValue(scada.d5, 1);
  const estadoBombaAntiincrustante =
    scada !== null && getScaledValue(scada.d6, 1);
  const estadoBombaHipoclorito = scada !== null && getScaledValue(scada.d7, 1);
  const presionEntradaBombaAlta = scada !== null && getScaledValue(scada.d8, 1);
  const presionOsmosis = scada !== null && getScaledValue(scada.d9, 1);
  const presionRechazo = scada !== null && getScaledValue(scada.d10, 1);
  const caudalAlimentacion = scada !== null && getScaledValue(scada.d11, 1);
  const caudalPermeado = scada !== null && getScaledValue(scada.d12, 1);
  const caudalRechazo = scada !== null && getScaledValue(scada.d13, 1);
  const conductividadAlimentacion =
    scada !== null && getScaledValue(scada.d14, 1);
  const conductividadPermeado = scada !== null && getScaledValue(scada.d15, 1);
  const temperaturaAlimentacion =
    scada !== null && getScaledValue(scada.d16, 1);
  const diferencialFiltro = scada !== null && getScaledValue(scada.d17, 1);
  const presionInteretapa = scada !== null && getScaledValue(scada.d18, 1);
  const diferencialPrimeraEtapa =
    scada !== null && getScaledValue(scada.d19, 1);
  const diferencialSegundaEtapa =
    scada !== null && getScaledValue(scada.d20, 1);

  return (
    <svg
      id="Capa_1"
      style={{
        enableBackground: "new 0 0 1429.5 2305.5"
      }}
      viewBox="0 0 1429.5 2305.5"
      x={0}
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      y={0}>
      <style>
        {
          '.tarjeta{fill:#ffffff}.tarjetaSeleccionada{fill:#3574e0;opacity:.15;}.st0{fill:none;stroke:#323e48;stroke-width:4;stroke-miterlimit:10}.st1{fill:#fff;}.st4{fill:#3574e0}.st7{fill:#666}.st8{font-family:"ArialMT"}.st9{font-size:14px}.st10{fill:#606060}.st11{font-family:"Arial-BoldMT"}.st12{font-size:17px}.st15,.st16{fill:none;stroke:#00aeed;stroke-width:4;stroke-miterlimit:10}.st16{stroke:#35ace8}.st17{fill:#0e76e7}.st18{opacity:7.000000e-02;fill:#323e48}.st19{fill:#00aeed}.st20{fill:#323e48}.st21{opacity:.6;fill:none;stroke:#cbcbcb;stroke-width:2;stroke-miterlimit:10;enable-background:new}.st22{fill:#cbcbcb}.st23{fill:none;stroke:#2f3e49;stroke-width:4;stroke-miterlimit:10}.st24{fill:#2f3e49}.st25{fill:#00b7ab}.st26{fill:none;stroke:#fff;stroke-width:2;stroke-miterlimit:10}.st27{opacity:.15;fill:#fff;enable-background:new;cursor:pointer;}.st28,.st33{fill:none;stroke:#008ba3;stroke-width:4;stroke-miterlimit:10}.st33{fill:#fff;stroke:#35ace8}.st49{font-size:10px}.st50{fill:none;stroke:#7da4c2;stroke-width:2;stroke-miterlimit:10}.st50,.st51{enable-background:new}.st52{font-size:16px}.st53{font-size:13px}.st54{font-size:11px}.st55{fill:#fff;stroke:#323e48;stroke-width:4;stroke-miterlimit:10}.st56{font-size:9px}.st57{fill:#00b7ab;enable-background:new}.st58{fill:#fff;stroke:#008ba3;stroke-width:4;stroke-miterlimit:10}'
        }
      </style>
      <path
        className="st0"
        d="M501.9 1176.3H335.6c-2.8 0-5-2.3-5-5V632.9M614.9 1337v-58.3c0-2.8 2.3-5 5-5h108.4c3.5 0 6.3 2.8 6.3 6.3v57"
      />
      <image
        height={179}
        style={{
          overflow: "visible",
          opacity: 0.2,
          enableBackground: "new"
        }}
        transform="translate(1102.81 37.758) scale(.9831)"
        width={289}
        xlinkHref="data:image/png;base64,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 QmCC"
      />
      <path
        className="st1"
        d="M1376.2 207.4H1113c-3.4 0-6.1-2.7-6.1-6.1V49.7c0-3.4 2.7-6.1 6.1-6.1h263.2c3.4 0 6.1 2.7 6.1 6.1v151.5c0 3.4-2.7 6.2-6.1 6.2z"
      />
      <image
        height={127}
        style={{
          overflow: "visible",
          opacity: 0.2,
          enableBackground: "new"
        }}
        transform="translate(38.766 37.688) scale(.9543)"
        width={240}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAAB/CAYAAADRs0+fAAAACXBIWXMAAAuIAAALiAHljilJAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABMpJREFUeNrs2wtvG1UQgNHd+NUm TWihVDyE+P8/DErVR2hTp7iObe7C3GbiGLx+UFXiHGnkKphFQvoyd9du0wAAAADAF6498rVa/0th b6uYzxZwjlbAcLyAe8XcHhhunZMNMQP9w83RdrPsE3N7QLiDCHf91SaG/TZvN4uI9yZelxuC/mS4 Y7wnKdbu3x2VGceM4mcihv02703MvMzHmHlE3aSQdw44x9uFOinzoMzDMqcxDyLkGrGjNPQPeJGi /RAzjddZhHwT71/uEnCOdxyhPipzXuarmIsyZ/HPRun9Iob+23eWwr0q86bM2zLv42f37ol3CXgU gXaxfl3maZlvy3xT5kkEfRrvGwgXeke8TAFfR7yXZV6UeVnmVXr/LN8TD3vE26Ttexbxfl/mh5hn 8bPzOFIPm9sHWkD/gOvx+V1s33qqbeOIXefTQ68+G7g+tJrE0bkG/HOZnyLgJ/EfmzR3H2QB2y0j zHls2PfRVH2mVOOexWt9Ut0Ot2zfenweRpzncWT+rsyPMc/S9l0/PosYtm/h1VrE9Xa0iZ9NI+qr OGLPalt974FrwN2WfRwRP42p23e8dnQWL/Q/RueI6+adx5H6Mo7Ur5u/H2pdx1Zu+9wDrz/EOovf EBdxpD6NuEfihYM3cV6CF7EgnzS3n/RM0nsWwy3hNingQfxmmKSpvyl8gQMOkx8YN9HWw4j2Ufy5 xvvpNvWkx0XzFs7fwspPm1vxwtFCrp2N1pbmvU94Tna88Ka/vCBcOH7Ebdq269PuGnC7IeK28TeQ 4L+OOJ9+7zV2cmC8wOcLea+AgS+UgEHAgIABAYOAAQEDAgYEDAIGBAwIGAQMCBgQMCBgEDAgYEDA gIBBwICAAQGDgAEBAwIGBAwCBgQMCBgQMAgYEDAgYBAwIGBAwICAQcCAgAEBg4ABAQMCBgQMAgYE DAgYEDAIGBAwIGAQMCBgQMCAgEHAgIABAQMCBgEDAgYEDAIGBAwIGBAwCBgQMCBgQMAgYEDAgIBB wICAAQEDAgYBAwIGBAwCBgQMCBgQMAgYEDAgYEDA8P8MeBXTpFfgCw94tSHi9QGOr2truTZ7beB8 oUWapZDh6NGuUms3ZeYxubm/DHcMeBEX+hhzky7apgH2k8PtGpuV+SNe5/HzZd+A8+a9iYt8KHNd ZhqvDyLaYWx0AcNhAdfWur7ex0yjvXk+Tg+33Pe28edF/DboLnBV5m3MeZlRXGxcZiBgOPiedx7x do1dlvk9uruODhe10T4beJXW+TQu+rrM49i+Tfy2mMT12hQ/sNu9b71N7bbuy5jXEfHOAecz+Swu 2l3sLIJdxVa+iJgHze2DMQHDfgHX1n4t80uZF7GJp2sBr4ZbLtisXfQqjszDFO9lHKUn6T5YwLDf 8XmZAu7C/a3M8zJvIuB6D9z0PUIv0z3wdQp0HkG/jI08ThtYvLDfBq73wNOItptXZd41dx9ibd3A 6xHXJ2PrG/k0js91++bPloUM/Rrb1Fp9Ap0fYOXvXuwUWI1zENt2HOGOI976BNpnwXD4MbqLuH7+ +zHd++4dcH1/jXiQtq544XibOH/rMX9Z6k68+x5x23Sf224IV8BwnOP0qrn/deVVc4R71H8LVsBw eMD/FPQdfwowAECzbKmRR44bAAAAAElFTkSuQmCC"
      />
      <path
        className="st1"
        d="M256.2 151.5H47.4c-3.4 0-6.1-2.7-6.1-6.1V49.7c0-3.4 2.7-6.1 6.1-6.1h208.7c3.4 0 6.1 2.7 6.1 6.1v95.6c.1 3.3-2.6 6.1-6 6.2.1 0 0 0 0 0z"
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
        className="st4"
        cx={1143}
        cy={120.6}
        r={8}
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
        className="st7 st8 st9"
        transform="translate(1160.93 105.91)">
        {"Funcionando"}
      </text>
      <text
        className="st7 st8 st9"
        transform="translate(1160.93 125.91)">
        {"Movi\xE9ndose"}
      </text>
      <text
        className="st7 st8 st9"
        transform="translate(1160.93 145.91)">
        {"Falla"}
      </text>
      <text
        className="st7 st8 st9"
        transform="translate(1160.93 165.91)">
        {"Bloqueada"}
      </text>
      <text
        className="st7 st8 st9"
        transform="translate(1160.93 185.91)">
        {"Detenida"}
      </text>
      <text
        className="st10 st11 st9"
        transform="translate(75.502 77.73)">
        {"Conectividad de Planta"}
      </text>
      {/* Estado de conexion */}
      <text
        className="st10 st11 st12"
        transform="translate(109.292 128.21)">
        {estadoConexion}
      </text>
      <image
        height={42}
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        transform="translate(67.53 102.785) scale(.9203)"
        width={39}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAArCAYAAAAKasrDAAAACXBIWXMAAAv+AAAL/gFBkBnlAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA8RJREFUeNrsmOtS2zAQhS1fYkKA pEAL03b6/i/WQlpKSoJtsBOrMnN25swiO3aS9lc8c8YJF+nzWe1q5SA4XsfreB2vf3qZ/zie3WXA +IBQpgPS7gobHwAsxGcthhHVQ2HjA4CFUKTuRoFtoJpA622QZgc4BovwkInTCIoJ0gJq7VSR1gS7 IWC7D6APrAE6cTqFxk4pgCNM2AC9Or1ABe6lB7YmVweF2BCcgDUwE6dzpwvoHD8bEWAJqMzpGVrh ewF4gZWrHgLI6yyGQxMAXSpNnc7gKgPmgFo6PTktnB4JNMPfSJhl/fYGNJgwBcAHp49On5xucL9y mrUAFoARuF9w+xHfI5Xx4qKNB4Q2QVgvAPTZ6SvuN3DwAmtxREmyRhhzOLggp+VhjEqYSlyMe4Y3 JveuAPQNagCv4d4EfxeRgxtKlCkeYkLJlRCUJI1ktYl3cK8BvAXYF3y+BHxKZYbroECeAkyyfIS5 xOEcGV7hf4K459pLMPiUHLxFqCW0PLHeSWISF/EAa7RZn3+wRnMAvzkZ96h9EWXuDOG8BqisJQlV 2LHVcTWwFMoXgEnCLAFZdjloPNkrpWWGLOa1FNPkbWNx+TjBg1UYb0YPO0boX7rW4LbCfK7WUxuc b9eSJZNiDBnzzPPAps+gkYIUsFStqWCHoi9b5Zi2yRHt5Z0h4Um5KUhUSM0eTUekGo2ESpTp66BW ONC1IWMbX5YGW9p0qzoN6evsHnBWjbf2dDVvc4c9B5N+rqTuY62qfl8wXbxlTB637nLQegZaq2pf cDHtCai765LGzKj9KsnN1hD7BpOeboWeLsMEFYV924lOolGizj1TC8Y9YiUM23YSBsypZZJtaUJ1 cNQSFetZKgVtbwvaRVYAFwdt1LNZCKnMpFQHE1ULjYLi5FpTJJqH+42+8M7pO+4PcLSQ5dMHMFAn t4Q2/kQ5Zj3Zzu1WBoAG5B76Ac3hYkYudjqoD1VtR8xAubWhvk4ngjQFczgmkHM4uiS4ui+gaQk5 h5XrWalOcgy3gHt30BxhfsDvM8riXmcSPlxXmHBFYTYYTBY9t/wR/b5ULf9P6IGcyxVcb8BAnS1C cq2iiacEmCrAVypRC8rcJ/yvhHaj62o8YFsK6OxaU8nIMZG0S+xggElfVR1d4s5t/jv3hhzc9XsU TgZxcKzKjzjNWVwolXRY8r7+2LVN6novw+cSowq07L28nb1rEPZ9gWk8b7ZC6uMi1Y7pPb1uectl D/mG1XgKue4Z2/Z237vCg71+63qz2vWW1W65t15/BRgA1yfTWZesn7oAAAAASUVORK5CYII="
      />
      <circle
        className="st1"
        cx={85.5}
        cy={122.2}
        r={12.1}
      />
      {/* Color de estado  conexion */}
      <circle
        cx={85.5}
        cy={122.1}
        r={8.9}
        style={{
          fill: colorConexion
        }}
      />
      <text
        className="st10 st11 st9"
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
        className="st15"
        d="M104.9 526.6v116.7c0 3.3 2.7 5.9 6 5.9h30.8"
      />
      <path
        className="st16"
        d="M180.6 688.3h-24.3c-2.8 0-5-2.3-5-5v-68.4c0-3.5 2.8-6.3 6.3-6.3h23M212.6 583.6h24.3c2.8 0 5 2.3 5 5V657c0 3.5-2.8 6.3-6.3 6.3h-23"
      />
      <path
        className="st15"
        d="M241.8 626.6h210.1"
      />
      <path
        className="st18"
        d="M611.4 569.8c0-27.5-28.4-50-79.8-50s-78.8 22.5-78.8 50h.7c-.4 1.4-.7 2.8-.7 4.4v109.3c0 14.4 17.9 26.4 40.3 28.1v14.6h27.5v-14.3H541v14.3h27.5v-14.6c23.6-.8 42.5-13.1 42.5-28.1V574.2c0-1.4-.4-3.1-.7-4.4h1.1z"
      />
      <path
        className="st19"
        d="M452.4 633c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st1"
        d="M452.4 621.3c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st16"
        d="M512.3 596.9h42.2M555.5 787.9h-18.8c-2.8 0-5-2.3-5-5V677.5M497.7 675.9h-23.3c-2.8 0-5-2.3-5-5v-80.4"
      />
      <text
        className="st10 st8 st49"
        transform="translate(484.981 617.72)">
        {"VX-001"}
      </text>
      <text
        className="st10 st8 st49"
        transform="translate(545.03 617.72)">
        {"VX-002"}
      </text>
      <path
        className="st20"
        d="M510.7 666.9h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM495.5 670.8l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st20"
        d="m511.1 681.4-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st0"
        d="M503.3 665.9v10"
      />
      <path
        className="st26"
        d="M494.3 657.9h18M503.3 658.9v8"
      />
      <path
        className="st16"
        d="M512.3 676.1h42.2"
      />
      <text
        className="st10 st8 st49"
        transform="translate(484.981 696.936)">
        {"VX-003"}
      </text>
      <text
        className="st10 st8 st49"
        transform="translate(545.03 696.936)">
        {"VX-004"}
      </text>
      <text
        className="st10 st8 st49"
        transform="translate(543.03 808.7)">
        {"VX-005"}
      </text>
      <path
        className="st50"
        d="M569.8 674.4h23.3c2.8 0 5 2.3 5 5v68.5c0 2.8 2.2 5 5 5h712.4c2.2 0 3.9 1.8 3.9 3.9v29"
      />
      <path
        className="st50"
        d="M569.8 595.9h23.3c2.8 0 5 2.3 5 5v80.4"
      />
      <path
        className="st16"
        d="M566.1 787.9h37.4c4.1 0 7.4 3.3 7.4 7.4v36.6c0 4.9 4 8.9 8.9 8.9H809"
      />
      <path
        className="st18"
        d="M784.1 569.8c0-27.5-28.4-50-79.8-50s-79.8 22.5-79.8 50h.7c-.4 1.4-.7 2.8-.7 4.4v109.3c0 14.4 17.9 26.4 40.3 28.1v14.6h27.5v-14.3h21.5v14.3h27.5v-14.6c23.6-.8 42.5-13.1 42.5-28.1V574.2c0-1.4-.4-3.1-.7-4.4h1z"
      />
      <path
        className="st16"
        d="M670.4 597.4h-23.3c-2.8 0-5-2.3-5-5v-101M675.6 596.9h57.1M728.2 787.9h-18.8c-2.8 0-5-2.3-5-5V677.5"
      />
      <path
        className="st16"
        d="M670.4 675.9h-23.3c-2.8 0-5-2.3-5-5v-80.4"
      />
      <text
        className="st10 st8 st49"
        transform="translate(656.745 617.72)">
        {"VX-006"}
      </text>
      <text
        className="st10 st8 st49"
        transform="translate(718.795 617.72)">
        {"VX-007"}
      </text>
      <path
        className="st16"
        d="M675.6 676.1h57.1"
      />
      <text
        className="st10 st8 st49"
        transform="translate(656.745 696.936)">
        {"VX-008"}
      </text>
      <text
        className="st10 st8 st49"
        transform="translate(718.795 696.936)">
        {"VX-009"}
      </text>
      <path
        className="st20"
        d="M741.5 778.6h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6V777c0 .9-.7 1.6-1.6 1.6zM726.3 782.5l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st20"
        d="m741.9 793.1-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st0"
        d="M734.1 777.6v10"
      />
      <path
        className="st26"
        d="M725.1 769.6h18M734.1 770.6v8"
      />
      <text
        className="st10 st8 st49"
        transform="translate(715.795 808.7)">
        {"VX-010"}
      </text>
      <path
        className="st50"
        d="M742.5 674.4h23.3c2.8 0 5 2.3 5 5v73.4"
      />
      <path
        className="st50"
        d="M742.5 595.9h23.3c2.8 0 5 2.3 5 5v80.4"
      />
      <path
        className="st16"
        d="M742.9 787.9h37.4c4.1 0 7.4 3.3 7.4 7.4v36.6c0 4.9 4 8.9 8.9 8.9h171.6"
      />
      <path
        className="st18"
        d="M955.9 569.8c0-27.5-28.4-50-79.8-50s-79.8 22.5-79.8 50h.7c-.4 1.4-.7 2.8-.7 4.4v109.3c0 14.4 17.9 26.4 40.3 28.1v14.6h27.5v-14.3h21.5v14.3H913v-14.6c23.6-.8 42.5-13.1 42.5-28.1V574.2c0-1.4-.4-3.1-.7-4.4h1.1z"
      />
      <path
        className="st16"
        d="M841.5 597.4h-27.4c-.5 0-1-.4-1-1V495.9c0-2.5-2-4.4-4.4-4.4h-44.5l-289.2 1c-.7 0-5.7 3-5.7 6.7v93.2c0 2.8 2.3 5 5 5h23.3M851.1 596.9h54.3M900 787.9h-18.8c-2.8 0-5-2.3-5-5V677.5"
      />
      <path
        className="st16"
        d="M841.2 675.9h-23.3c-2.8 0-5-2.3-5-5v-80.4"
      />
      <text
        className="st10 st8 st49"
        transform="translate(828.508 617.72)">
        {"VX-011"}
      </text>
      <text
        className="st10 st8 st49"
        transform="translate(891.335 617.72)">
        {"VX-012"}
      </text>
      <path
        className="st16"
        d="M851.1 676.1h54.3"
      />
      <text
        className="st10 st8 st49"
        transform="translate(828.508 696.936)">
        {"VX-013"}
      </text>
      <text
        className="st10 st8 st49"
        transform="translate(891.334 696.936)">
        {"VX-014"}
      </text>
      <text
        className="st10 st8 st49"
        transform="translate(887.558 808.7)">
        {"VX-015"}
      </text>
      <path
        className="st50"
        d="M914.3 674.4h23.3c2.8 0 5 2.3 5 5v73.4"
      />
      <path
        className="st50"
        d="M914.3 595.9h23.3c2.8 0 5 2.3 5 5v80.4"
      />
      <g className="st51">
        <path
          className="st20"
          d="M1317.6 790.7h3.7v11h-3.7z"
        />
        <path
          className="st20"
          d="M1326.5 784.7c.7.7.7 2 0 2.8l-5.6 5.6c-.7.7-2 .7-2.8 0l-5.6-5.6c-.7-.7-.7-2 0-2.8"
        />
      </g>
      <path
        className="st16"
        d="M909.5 787.9h37.4c4.1 0 7.4 3.3 7.4 7.4v36.6c0 4.9 4 8.9 8.9 8.9h193.9"
      />
      <text
        className="st10 st8 st49"
        transform="translate(517.592 552.48)">
        {"F-001"}
      </text>
      <text
        className="st10 st8 st49"
        transform="translate(693.606 552.48)">
        {"F-002"}
      </text>
      <text
        className="st10 st8 st49"
        transform="translate(862.37 552.48)">
        {"F-003"}
      </text>
      <path
        className="st20"
        d="M510.7 587.6h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6V586c0 .9-.7 1.6-1.6 1.6zM495.5 591.5l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st20"
        d="m511.1 602.1-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st0"
        d="M503.3 586.6v10"
      />
      <path
        className="st26"
        d="M494.3 578.6h18M503.3 579.6v8"
      />
      <path
        className="st20"
        d="M570.8 587.6H556c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6V586c0 .9-.7 1.6-1.6 1.6zM555.6 591.5l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st20"
        d="m571.2 602.1-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st0"
        d="M563.4 586.6v10"
      />
      <path
        className="st26"
        d="M554.4 578.6h18M563.4 579.6v8"
      />
      <path
        className="st20"
        d="M570.8 666.9H556c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM555.6 670.8l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st20"
        d="m571.2 681.4-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st0"
        d="M563.4 665.9v10"
      />
      <path
        className="st26"
        d="M554.4 657.9h18M563.4 658.9v8"
      />
      <path
        className="st20"
        d="M568.8 778.6H554c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6V777c0 .9-.7 1.6-1.6 1.6zM553.6 782.5l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st20"
        d="m569.2 793.1-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st0"
        d="M561.4 777.6v10"
      />
      <path
        className="st26"
        d="M552.4 769.6h18M561.4 770.6v8"
      />
      <path
        className="st20"
        d="M682.5 587.6h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6V586c0 .9-.7 1.6-1.6 1.6zM667.3 591.5l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st20"
        d="m682.9 602.1-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st0"
        d="M675.1 586.6v10"
      />
      <path
        className="st26"
        d="M666.1 578.6h18M675.1 579.6v8"
      />
      <path
        className="st20"
        d="M744.5 587.6h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6V586c0 .9-.7 1.6-1.6 1.6zM729.3 591.5l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st20"
        d="m744.9 602.1-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st0"
        d="M737.1 586.6v10"
      />
      <path
        className="st26"
        d="M728.1 578.6h18M737.1 579.6v8"
      />
      <path
        className="st20"
        d="M744.5 666.9h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM729.3 670.8l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st20"
        d="m744.9 681.4-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st0"
        d="M737.1 665.9v10"
      />
      <path
        className="st26"
        d="M728.1 657.9h18M737.1 658.9v8"
      />
      <path
        className="st20"
        d="M854.3 587.6h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6V586c0 .9-.7 1.6-1.6 1.6zM839.1 591.5l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st20"
        d="m854.7 602.1-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st0"
        d="M846.9 586.6v10"
      />
      <path
        className="st26"
        d="M837.9 578.6h18M846.9 579.6v8"
      />
      <path
        className="st20"
        d="M916.7 587.6h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6V586c0 .9-.7 1.6-1.6 1.6zM901.5 591.5l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st20"
        d="m917.1 602.1-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st0"
        d="M909.3 586.6v10"
      />
      <path
        className="st26"
        d="M900.3 578.6h18M909.3 579.6v8"
      />
      <path
        className="st20"
        d="M916.7 666.9h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM901.5 670.8l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st20"
        d="m917.1 681.4-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st0"
        d="M909.3 665.9v10"
      />
      <path
        className="st26"
        d="M900.3 657.9h18M909.3 658.9v8"
      />
      <path
        className="st20"
        d="M913.3 778.6h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6V777c0 .9-.7 1.6-1.6 1.6zM898.1 782.5l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st20"
        d="m913.7 793.1-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st0"
        d="M905.9 777.6v10"
      />
      <path
        className="st26"
        d="M896.9 769.6h18M905.9 770.6v8"
      />
      <path
        className="st20"
        d="M682.5 666.9h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM667.3 670.8l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st20"
        d="m682.9 681.4-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st0"
        d="M675.1 665.9v10"
      />
      <path
        className="st26"
        d="M666.1 657.9h18M675.1 658.9v8"
      />
      <path
        className="st20"
        d="M854.3 666.9h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM839.1 670.8l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st20"
        d="m854.7 681.4-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st0"
        d="M846.9 665.9v10"
      />
      <path
        className="st26"
        d="M837.9 657.9h18M846.9 658.9v8"
      />
      <path
        className="st18"
        d="M1128.8 569.8c0-27.5-28.4-50-79.8-50s-79.8 22.5-79.8 50h.7c-.4 1.4-.7 2.8-.7 4.4v109.3c0 14.4 17.9 26.4 40.3 28.1v14.6h27.5v-14.3h21.5v14.3h27.5v-14.6c23.6-.8 42.5-13.1 42.5-28.1V574.2c0-1.4-.4-3.1-.7-4.4h1z"
      />
      <path
        className="st16"
        d="M1015.1 597.4h-23.3c-2.8 0-5-2.3-5-5v-101M1020.2 596.9h57.1M1072.9 787.9h-18.8c-2.8 0-5-2.3-5-5V677.5"
      />
      <path
        className="st16"
        d="M1015.1 675.9h-23.3c-2.8 0-5-2.3-5-5v-80.4"
      />
      <text
        className="st10 st8 st49"
        transform="translate(1001.41 617.72)">
        {"VX-016"}
      </text>
      <text
        className="st10 st8 st49"
        transform="translate(1063.46 617.72)">
        {"VX-017"}
      </text>
      <path
        className="st16"
        d="M1020.2 676.1h57.1"
      />
      <text
        className="st10 st8 st49"
        transform="translate(1001.41 696.936)">
        {"VX-018"}
      </text>
      <text
        className="st10 st8 st49"
        transform="translate(1063.46 696.936)">
        {"VX-019"}
      </text>
      <path
        className="st20"
        d="M1086.2 778.6h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6V777c0 .9-.7 1.6-1.6 1.6zM1071 782.5l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st20"
        d="m1086.6 793.1-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st0"
        d="M1078.8 777.6v10"
      />
      <path
        className="st26"
        d="M1069.8 769.6h18M1078.8 770.6v8"
      />
      <text
        className="st10 st8 st49"
        transform="translate(1060.46 808.7)">
        {"VX-020"}
      </text>
      <path
        className="st50"
        d="M1087.2 674.4h23.3c2.8 0 5 2.3 5 5v73.4"
      />
      <path
        className="st50"
        d="M1087.2 595.9h23.3c2.8 0 5 2.3 5 5v80.4"
      />
      <path
        className="st16"
        d="M1087.6 787.9h37.4c4.1 0 7.4 3.3 7.4 7.4v36.6c0 4.9 4 8.9 8.9 8.9h171.6"
      />
      <path
        className="st18"
        d="M1300.5 569.8c0-27.5-28.4-50-79.8-50s-79.8 22.5-79.8 50h.7c-.4 1.4-.7 2.8-.7 4.4v109.3c0 14.4 17.9 26.4 40.3 28.1v14.6h27.5v-14.3h21.5v14.3h27.5v-14.6c23.6-.8 42.5-13.1 42.5-28.1V574.2c0-1.4-.4-3.1-.7-4.4h1z"
      />
      <path
        className="st16"
        d="M1186.2 597.4h-27.4c-.5 0-1-.4-1-1v-97.5c0-4.1-3.3-7.5-7.5-7.5H786.7M1195.8 596.9h54.2M1244.7 787.9h-18.8c-2.8 0-5-2.3-5-5V677.5"
      />
      <path
        className="st16"
        d="M1185.9 675.9h-23.3c-2.8 0-5-2.3-5-5v-80.4"
      />
      <text
        className="st10 st8 st49"
        transform="translate(1173.173 617.72)">
        {"VX-021"}
      </text>
      <text
        className="st10 st8 st49"
        transform="translate(1236 617.72)">
        {"VX-022"}
      </text>
      <path
        className="st16"
        d="M1195.8 676.1h54.2"
      />
      <text
        className="st10 st8 st49"
        transform="translate(1173.173 696.936)">
        {"VX-023"}
      </text>
      <text
        className="st10 st8 st49"
        transform="translate(1235.999 696.936)">
        {"VX-024"}
      </text>
      <text
        className="st10 st8 st49"
        transform="translate(1232.223 808.7)">
        {"VX-025"}
      </text>
      <path
        className="st50"
        d="M1259 674.4h23.3c2.8 0 5 2.3 5 5v73.4"
      />
      <path
        className="st50"
        d="M1259 595.9h23.3c2.8 0 5 2.3 5 5v80.4"
      />
      <text
        className="st10 st8 st49"
        transform="translate(1038.27 552.48)">
        {"F-004"}
      </text>
      <text
        className="st10 st8 st49"
        transform="translate(1207.034 552.48)">
        {"F-005"}
      </text>
      <path
        className="st20"
        d="M1027.2 587.6h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6V586c0 .9-.7 1.6-1.6 1.6zM1012 591.5l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st20"
        d="m1027.6 602.1-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st0"
        d="M1019.8 586.6v10"
      />
      <path
        className="st26"
        d="M1010.8 578.6h18M1019.8 579.6v8"
      />
      <path
        className="st20"
        d="M1089.2 587.6h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6V586c0 .9-.7 1.6-1.6 1.6zM1074 591.5l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st20"
        d="m1089.6 602.1-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st0"
        d="M1081.8 586.6v10"
      />
      <path
        className="st26"
        d="M1072.8 578.6h18M1081.8 579.6v8"
      />
      <path
        className="st20"
        d="M1089.2 666.9h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM1074 670.8l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st20"
        d="m1089.6 681.4-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st0"
        d="M1081.8 665.9v10"
      />
      <path
        className="st26"
        d="M1072.8 657.9h18M1081.8 658.9v8"
      />
      <path
        className="st20"
        d="M1198.9 587.6h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6V586c0 .9-.7 1.6-1.6 1.6zM1183.7 591.5l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st20"
        d="m1199.3 602.1-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st0"
        d="M1191.5 586.6v10"
      />
      <path
        className="st26"
        d="M1182.5 578.6h18M1191.5 579.6v8"
      />
      <path
        className="st20"
        d="M1261.3 587.6h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6V586c0 .9-.7 1.6-1.6 1.6zM1246.1 591.5l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st20"
        d="m1261.7 602.1-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st0"
        d="M1253.9 586.6v10"
      />
      <path
        className="st26"
        d="M1244.9 578.6h18M1253.9 579.6v8"
      />
      <path
        className="st20"
        d="M1261.3 666.9h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM1246.1 670.8l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st20"
        d="m1261.7 681.4-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st0"
        d="M1253.9 665.9v10"
      />
      <path
        className="st26"
        d="M1244.9 657.9h18M1253.9 658.9v8"
      />
      <path
        className="st20"
        d="M1027.2 666.9h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM1012 670.8l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st20"
        d="m1027.6 681.4-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st0"
        d="M1019.8 665.9v10"
      />
      <path
        className="st26"
        d="M1010.8 657.9h18M1019.8 658.9v8"
      />
      <path
        className="st20"
        d="M1198.9 666.9h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM1183.7 670.8l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st20"
        d="m1199.3 681.4-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st0"
        d="M1191.5 665.9v10"
      />
      <path
        className="st26"
        d="M1182.5 657.9h18M1191.5 658.9v8"
      />
      <path
        className="st16"
        d="M1254.2 787.9h37.4c4.1 0 7.4 3.3 7.4 7.4v36.6c0 4.9 4 8.9 8.9 8.9h31.4c6.2 0 11.1 5 11.1 11.1v159.7c0 4.4-3.6 8.1-8.1 8.1H511c-4.3 0-7.8 3.5-7.8 7.8v301.2c0 4.3 3.5 7.8 7.8 7.8h162.3"
      />
      <path
        className="st16"
        d="M663.1 1471.6h-26.3c-4.6 0-8.3-3.6-8.3-8.1v-118.4c0-5 4.1-9.1 9.3-9.1h25.4M684.4 1471.6h26.3c4.6 0 8.3-3.6 8.3-8.1v-118.4c0-5-4.1-9.1-9.3-9.1h-25.4"
      />
      <text
        className="st10 st8 st49"
        transform="translate(661.732 1514.44)">
        {"F-006"}
      </text>
      <image
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(243.402 469)"
        width={176}
        xlinkHref="data:image/png;base64,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 APB5+FeAAQA5KiagFZE+wgAAAABJRU5ErkJggg=="
      />
      {/* Presion de Alimentacion */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(2, "Presión de Alimentación", false)}>
        <path
          className="st1"
          d="M312.1 478.1H259c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3V484.4c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
        />
        <path
          className={`${getTarjetaClass(2, selected)} s27`}
          d="M252.8 485.5h157.1v99.8H252.8z"
        />
        <text
          className="st51"
          transform="translate(309.861 530.185)">
          <tspan
            className="st17 st8 st9"
            x={0}
            y={0}>
            {"Presi\xF3n"}
          </tspan>
          <tspan
            className="st17 st8 st9"
            x={-26.1}
            y={16.8}>
            {"de Alimentaci\xF3n"}
          </tspan>
        </text>
        {/* Alarma Presion de Alimentacion */}
        <g
          className={`${getTemaAlarma(2, loading, datosAlarmas)} cursorPointer`}
          onClick={() => onClickAlarma(2, "Presión de Alimentación")}>
          <path
            className="st4"
            d="M275.2 561.9c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
          />
          <path
            className="st4"
            d="M273.5 560.9c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM284.8 559.6c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
          />
          <path
            className="st4"
            d="M285.4 557.7c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM286.2 566.9v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM281.2 574.3c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
          />
        </g>
        <text
          className="st10 st8 st52"
          transform="translate(312.48 572.962)">
          {presionAlimentacion}
        </text>
        <text
          className="st10 st8 st53"
          transform="translate(373.247 572.562)">
          {"bar"}
        </text>
        <text
          className="st10 st8 st54"
          transform="translate(317.753 505.187)">
          {"PT-001"}
        </text>
      </g>
      <circle
        className="st33"
        cx={331.3}
        cy={626.7}
        r={9.2}
      />
      <image
        height={141}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(586.402 1116.76)"
        width={176}
        xlinkHref="data:image/png;base64,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"
      />
      {/* Diferencial Filtro F-006 */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(17, "Diferencial Filtro F-006", false)}>
        <path
          className="st1"
          d="M655.6 1126.8h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
        />
        <path
          className={`${getTarjetaClass(17, selected)} s27`}
          d="M596.3 1134.2h157.1v99.8H596.3z"
        />
        <text
          className="st51"
          transform="translate(643.962 1175.837)">
          <tspan
            className="st17 st8 st9"
            x={0}
            y={0}>
            {"Diferencial"}
          </tspan>
          <tspan
            className="st17 st8 st9"
            x={-2.7}
            y={16.8}>
            {"Filtro F-006"}
          </tspan>
        </text>
        {/* Alarma Diferencial Filtro F-006 */}
        <g
          className={`${getTemaAlarma(17, loading, datosAlarmas)} cursorPointer`}
          onClick={() => onClickAlarma(17, "Diferencial Filtro F-006")}>
          <path
            className="st4"
            d="M618.7 1210.5c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
          />
          <path
            className="st4"
            d="M617 1209.5c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM628.3 1208.2c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
          />
          <path
            className="st4"
            d="M628.9 1206.3c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM629.7 1215.5v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM624.7 1222.9c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
          />
        </g>
        <text
          className="st10 st8 st52"
          transform="translate(655.914 1221.614)">
          {diferencialFiltro}
        </text>
        <text
          className="st10 st8 st53"
          transform="translate(716.682 1221.215)">
          {"bar"}
        </text>
        <text
          className="st10 st8 st54"
          transform="translate(661.188 1153.84)">
          {"F-006"}
        </text>
      </g>
      <circle
        className="st55"
        cx={674.8}
        cy={1273.6}
        r={9.2}
      />
      <path
        className="st16"
        d="M628.5 1396.9H719"
      />
      <path
        className="st24"
        d="M690.3 1316.6c0-8-7.4-14.5-16.6-14.5-9.2 0-16.6 6.5-16.6 14.5h.2c-.1.4-.2.8-.2 1.3v26.5c0 4.2 3.2 7.7 7.2 8.1v7.4h4.9v-7.4h8.5v7.4h4.9v-7.4c4.3-.3 7.6-3.8 7.6-8.2v-26.5c0-.4-.1-.9-.2-1.3l.3.1zM690.3 1384.9c0-8-7.4-14.5-16.6-14.5-9.2 0-16.6 6.5-16.6 14.5h.2c-.1.4-.2.8-.2 1.3v26.5c0 4.2 3.2 7.7 7.2 8.1v7.4h4.9v-7.4h8.5v7.4h4.9v-7.4c4.3-.3 7.6-3.8 7.6-8.2v-26.5c0-.4-.1-.9-.2-1.3l.3.1zM690.3 1452.2c0-8-7.4-14.5-16.6-14.5-9.2 0-16.6 6.5-16.6 14.5h.2c-.1.4-.2.8-.2 1.3v26.5c0 4.2 3.2 7.7 7.2 8.1v7.4h4.9v-7.4h8.5v7.4h4.9v-7.4c4.3-.3 7.6-3.8 7.6-8.2v-26.5c0-.4-.1-.9-.2-1.3h.3v.1z"
      />
      <image
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(831.402 1178)"
        width={176}
        xlinkHref="data:image/png;base64,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"
      />
      {/* Sensor ORP */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(4, "Sensor ORP", false)}>
        <path
          className="st1"
          d="M900.3 1187.4h-53.1c-3.5 0-6.3 2.8-6.3 6.3V1296c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
        />
        <path
          className={`${getTarjetaClass(4, selected)} s27`}
          d="M841 1194.8h157.1v99.8H841z"
        />
        <text
          className="st51"
          transform="translate(899.573 1239.462)">
          <tspan
            className="st17 st8 st9"
            x={0}
            y={0}>
            {"Sensor"}
          </tspan>
          <tspan
            className="st17 st8 st9"
            x={7}
            y={16.8}>
            {"ORP"}
          </tspan>
        </text>
        {/* Alarma Sensor ORP */}
        <g
          className={`${getTemaAlarma(4, loading, datosAlarmas)} cursorPointer`}
          onClick={() => onClickAlarma(4, "Sensor ORP")}>
          <path
            className="st4"
            d="M863.4 1271.1c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
          />
          <path
            className="st4"
            d="M861.7 1270.1c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM873 1268.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
          />
          <path
            className="st4"
            d="M873.6 1266.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM874.4 1276.1v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM869.4 1283.5c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
          />
        </g>
        <text
          className="st10 st8 st52"
          transform="translate(900.636 1282.24)">
          {sensorORP}
        </text>
        <text
          className="st10 st8 st53"
          transform="translate(961.404 1281.84)">
          {"mV"}
        </text>
        <text
          className="st10 st8 st54"
          transform="translate(905.91 1214.464)">
          {"AT-004"}
        </text>
      </g>
      <image
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(1014.402 1178)"
        width={176}
        xlinkHref="data:image/png;base64,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"
      />
      {/* Presion de entrada bomba alta */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(8, "Presión de entrada Bomba alta", false)}>
        <path
          className="st1"
          d="M1083.6 1187.4h-53.1c-3.5 0-6.3 2.8-6.3 6.3V1296c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
        />
        <path
          className={`${getTarjetaClass(8, selected)} s27`}
          d="M1024.3 1194.8h157.1v99.8h-157.1z"
        />
        <text
          className="st51"
          transform="translate(1045.905 1239.462)">
          <tspan
            className="st17 st8 st9"
            x={0}
            y={0}>
            {"Presi\xF3n de entrada"}
          </tspan>
          <tspan
            className="st17 st8 st9"
            x={23.7}
            y={16.8}>
            {"Bomba alta"}
          </tspan>
        </text>
        {/* Alarma Presion de entrada Bomba alta */}
        <g
          className={`${getTemaAlarma(8, loading, datosAlarmas)} cursorPointer`}
          onClick={() => onClickAlarma(8, "Presión de entrada Bomba alta")}>
          <path
            className="st4"
            d="M1046.7 1271.1c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
          />
          <path
            className="st4"
            d="M1045 1270.1c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM1056.3 1268.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
          />
          <path
            className="st4"
            d="M1056.9 1266.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM1057.7 1276.1v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1052.7 1283.5c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
          />
        </g>
        <text
          className="st10 st8 st52"
          transform="translate(1083.94 1282.24)">
          {presionEntradaBombaAlta}
        </text>
        <text
          className="st10 st8 st53"
          transform="translate(1144.708 1281.84)">
          {"bar"}
        </text>
        <text
          className="st10 st8 st54"
          transform="translate(1089.215 1214.464)">
          {"PT-003"}
        </text>
      </g>
      <image
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(700.886 864.21)"
        width={176}
        xlinkHref="data:image/png;base64,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 AADwa/lPgAEAJtYs1+LznPMAAAAASUVORK5CYII="
      />
      {/* pH de Alimentacion */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(5, "pH de Alimentación", false)}>
        <path
          className="st1"
          d="M769.7 873.5h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3V879.8c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
        />
        <path
          className={`${getTarjetaClass(5, selected)} s27`}
          d="M710.4 880.9h157.1v99.8H710.4z"
        />
        <text
          className="st51"
          transform="translate(782.193 925.592)">
          <tspan
            className="st17 st8 st9"
            x={0}
            y={0}>
            {"pH"}
          </tspan>
          <tspan
            className="st17 st8 st9"
            x={-40.9}
            y={16.8}>
            {"de Alimentaci\xF3n"}
          </tspan>
        </text>
        {/* Alarma Presion de Alimentacion */}
        <g
          className={`${getTemaAlarma(5, loading, datosAlarmas)} cursorPointer`}
          onClick={() => onClickAlarma(5, "pH de Alimentación")}>
          <path
            className="st4"
            d="M732.8 957.3c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
          />
          <path
            className="st4"
            d="M731.1 956.3c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM742.4 955c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
          />
          <path
            className="st4"
            d="M743 953.1c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM743.8 962.3v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM738.8 969.7c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
          />
        </g>
        <text
          className="st10 st8 st52"
          transform="translate(770.025 968.37)">
          {phAlimentacion}
        </text>
        <text
          className="st10 st8 st53"
          transform="translate(830.793 967.97)">
          {"pH"}
        </text>
        <text
          className="st10 st8 st54"
          transform="translate(775.299 900.593)">
          {"AE-002"}
        </text>
      </g>
      <circle
        className="st33"
        cx={788.9}
        cy={1022.7}
        r={9.2}
      />
      <path
        className="st21"
        d="M392.8 637.5v93"
      />
      <path
        className="st22"
        d="M397.7 642.7c0 .9-.7 1.6-1.6 1.6h-6.3c-.9 0-1.6-.7-1.6-1.6 0-.4.2-.8.5-1.1l3.1-3.1c.6-.6 1.5-.6 2.2-.1l3.2 3.2c.3.3.5.7.5 1.1z"
      />
      <path
        className="st1"
        d="M389.1 642.7c0-.2.1-.3.2-.4l3.1-3.1c.2-.2.6-.2.9 0l3.1 3.1c.1.1.2.3.2.4 0 .3-.2.6-.6.6h-6.3c-.3 0-.6-.3-.6-.6m-2 0c0 1.4 1.2 2.6 2.6 2.6h6.3c1.4 0 2.6-1.2 2.6-2.6 0-.7-.3-1.3-.8-1.8l-3.1-3.1-.1-.1-.1-.1c-1.1-.9-2.6-.8-3.5.2l-3.1 3.1c-.5.5-.8 1.1-.8 1.8z"
      />
      <text
        className="st10 st8 st56"
        transform="translate(363.31 806.19)">
        {"Hipoclorito"}
      </text>
      <text
        className="st10 st8 st49"
        transform="translate(409.903 745.56)">
        {"P-007"}
      </text>
      <path
        className="st23"
        d="M391.5 733.7h-15.2c-1 0-1.8.8-1.8 1.8v34.2"
      />
      <path
        className="st24"
        d="M384.8 743.9h16.6c.9 0 1.8-.8 1.8-1.8v-16.9c0-1-.8-1.8-1.8-1.8h-16.6c-.9 0-1.8.8-1.8 1.8v16.9c0 1 .8 1.8 1.8 1.8z"
      />
      {/* Hipoclorito */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(7, "Hipoclorito", false)}>
        <circle
          className="st24"
          cx={402.2}
          cy={725}
          r={12.7}
        />
        <circle
          className="st1"
          cx={402.2}
          cy={725}
          r={9.5}
        />
        <circle
          cx={402.2}
          cy={725}
          r={7}
          fill={getColor(estadoBombaHipoclorito)}
        />
      </g>
      <path
        className="st25"
        d="M368.1 751.8h33.8v38.7h-33.8z"
      />
      <path
        className="st23"
        d="M401.9 751.8V789c0 .7-.4 1.3-.8 1.3H369c-.5 0-.8-.6-.8-1.3v-37.2"
      />
      <path
        className="st21"
        d="M1132.4 1029.1v43"
      />
      <path
        className="st22"
        d="M1137.3 1034.4c0 .9-.7 1.6-1.6 1.6h-6.3c-.9 0-1.6-.7-1.6-1.6 0-.4.2-.8.5-1.1l3.1-3.1c.6-.6 1.5-.6 2.2-.1l3.2 3.2c.3.3.5.7.5 1.1z"
      />
      <path
        className="st1"
        d="M1128.7 1034.4c0-.2.1-.3.2-.4l3.1-3.1c.2-.2.6-.2.9 0l3.1 3.1c.1.1.2.3.2.4 0 .3-.2.6-.6.6h-6.3c-.3 0-.6-.3-.6-.6m-2 0c0 1.4 1.2 2.6 2.6 2.6h6.3c1.4 0 2.6-1.2 2.6-2.6 0-.7-.3-1.3-.8-1.8l-3.1-3.1-.1-.1-.1-.1c-1.1-.9-2.6-.8-3.5.2l-3.1 3.1c-.5.5-.8 1.1-.8 1.8z"
      />
      <text
        className="st10 st8 st56"
        transform="translate(1094.381 1147.82)">
        {"Antiincrustante"}
      </text>
      <text
        className="st10 st8 st49"
        transform="translate(1149.483 1087.19)">
        {"P-009"}
      </text>
      <path
        className="st23"
        d="M1131.1 1075.3h-15.2c-1 0-1.8.8-1.8 1.8v34.2"
      />
      <path
        className="st24"
        d="M1124.4 1085.6h16.6c.9 0 1.8-.8 1.8-1.8v-16.9c0-1-.8-1.8-1.8-1.8h-16.6c-.9 0-1.8.8-1.8 1.8v16.9c0 .9.8 1.8 1.8 1.8z"
      />
      {/* Antiincrustante */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(6, "Antiincrustante", false)}>
        <circle
          className="st24"
          cx={1141.8}
          cy={1066.6}
          r={12.7}
        />
        <circle
          className="st1"
          cx={1141.8}
          cy={1066.6}
          r={9.5}
        />
        <circle
          cx={1141.8}
          cy={1066.6}
          r={7}
          fill={getColor(estadoBombaAntiincrustante)}
        />
      </g>
      <path
        className="st25"
        d="M1107.7 1093.4h33.8v38.7h-33.8z"
      />
      <path
        className="st23"
        d="M1141.5 1093.4v37.2c0 .7-.4 1.3-.8 1.3h-32.1c-.5 0-.8-.6-.8-1.3v-37.2"
      />
      <path
        className="st21"
        d="M1043.9 1029.1v43"
      />
      <path
        className="st22"
        d="M1048.8 1034.4c0 .9-.7 1.6-1.6 1.6h-6.3c-.9 0-1.6-.7-1.6-1.6 0-.4.2-.8.5-1.1l3.1-3.1c.6-.6 1.5-.6 2.2-.1l3.2 3.2c.3.3.5.7.5 1.1z"
      />
      <path
        className="st1"
        d="M1040.2 1034.4c0-.2.1-.3.2-.4l3.1-3.1c.2-.2.6-.2.9 0l3.1 3.1c.1.1.2.3.2.4 0 .3-.2.6-.6.6h-6.3c-.3 0-.6-.3-.6-.6m-2 0c0 1.4 1.2 2.6 2.6 2.6h6.3c1.4 0 2.6-1.2 2.6-2.6 0-.7-.3-1.3-.8-1.8l-3.1-3.1-.1-.1-.1-.1c-1.1-.9-2.6-.8-3.5.2l-3.1 3.1c-.5.5-.8 1.1-.8 1.8z"
      />
      <text
        className="st10 st8 st56"
        transform="translate(1019.893 1147.82)">
        {"Bisulfito"}
      </text>
      <path
        className="st23"
        d="M1042.6 1075.3h-15.2c-1 0-1.8.8-1.8 1.8v34.2"
      />
      <path
        className="st24"
        d="M1035.9 1085.6h16.6c.9 0 1.8-.8 1.8-1.8v-16.9c0-1-.8-1.8-1.8-1.8h-16.6c-.9 0-1.8.8-1.8 1.8v16.9c0 .9.8 1.8 1.8 1.8z"
      />
      <path
        className="st25"
        d="M1019.2 1093.4h33.8v38.7h-33.8z"
      />
      <path
        className="st23"
        d="M1053 1093.4v37.2c0 .7-.4 1.3-.8 1.3h-32.1c-.5 0-.8-.6-.8-1.3v-37.2"
      />
      <image
        height={141}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(874.056 861.868)"
        width={177}
        xlinkHref="data:image/png;base64,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"
      />
      {/* Temperatura de Alimentacion */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(16, "Temperatura de Alimentación", false)}>
        <path
          className="st1"
          d="M943.4 871.7h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3H952c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3V878c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
        />
        <path
          className={`${getTarjetaClass(16, selected)} s27`}
          d="M884.1 879.1h157.1v99.8H884.1z"
        />
        <text
          className="st51"
          transform="translate(924.834 923.806)">
          <tspan
            className="st17 st8 st9"
            x={0}
            y={0}>
            {"Temperatura"}
          </tspan>
          <tspan
            className="st17 st8 st9"
            x={-9.7}
            y={16.8}>
            {"de Alimentaci\xF3n"}
          </tspan>
        </text>
        {/* Alarma Temperatura de Alimentacion */}
        <g
          className={`${getTemaAlarma(16, loading, datosAlarmas)} cursorPointer`}
          onClick={() => onClickAlarma(16, "Temperatura de Alimentación")}>
          <path
            className="st4"
            d="M906.5 955.5c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
          />
          <path
            className="st4"
            d="M904.8 954.5c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM916.1 953.2c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
          />
          <path
            className="st4"
            d="M916.7 951.3c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM917.5 960.5V959c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM912.5 967.9c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
          />
        </g>
        <text
          className="st10 st8 st52"
          transform="translate(943.79 966.583)">
          {temperaturaAlimentacion}
        </text>
        <text
          className="st10 st8 st53"
          transform="translate(1004.558 966.183)">
          {"C\xB0"}
        </text>
        <text
          className="st10 st8 st54"
          transform="translate(948.064 898.808)">
          {"TT-003"}
        </text>
      </g>
      <circle
        className="st33"
        cx={961.6}
        cy={1020.9}
        r={9.2}
      />
      <image
        height={141}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(1138.026 861.735)"
        width={176}
        xlinkHref="data:image/png;base64,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 AABGyN8CDAAYEUKkrC0j1gAAAABJRU5ErkJggg=="
      />
      {/* Caudal de Alimentación */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(11, "Caudal de Alimentación", false)}>
        <path
          className="st1"
          d="M1206.6 871.7h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3V878c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
        />
        <path
          className={`${getTarjetaClass(11, selected)} s27`}
          d="M1147.3 879.1h157.1v99.8h-157.1z"
        />
        <text
          className="st51"
          transform="translate(1205.86 923.806)">
          <tspan
            className="st17 st8 st9"
            x={0}
            y={0}>
            {"Caudal"}
          </tspan>
          <tspan
            className="st17 st8 st9"
            x={-27.6}
            y={16.8}>
            {"de Alimentaci\xF3n"}
          </tspan>
        </text>
        {/* Caudal de Alimentación */}
        <g
          className={`${getTemaAlarma(11, loading, datosAlarmas)} cursorPointer`}
          onClick={() => onClickAlarma(11, "pH de Alimentación")}>
          <path
            className="st4"
            d="M1169.7 955.5c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
          />
          <path
            className="st4"
            d="M1168 954.5c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM1179.3 953.2c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
          />
          <path
            className="st4"
            d="M1179.9 951.3c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM1180.7 960.5V959c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1175.7 967.9c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
          />
        </g>
        <text
          className="st10 st8 st52"
          transform="translate(1206.927 966.583)">
          {caudalAlimentacion}
        </text>
        <text
          className="st10 st8 st53"
          transform="translate(1257.694 966.183)">
          {"m"}
        </text>
        <text
          className="st10 st8 st53"
          transform="matrix(.583 0 0 .583 1268.523 961.854)">
          {"3"}
        </text>
        <text
          className="st10 st8 st53"
          transform="translate(1272.738 966.183)">
          {"/h"}
        </text>
        <text
          className="st10 st8 st54"
          transform="translate(1211.2 898.808)">
          {"FIT-001"}
        </text>
      </g>
      <circle
        className="st33"
        cx={1226.3}
        cy={1020.9}
        r={9.2}
      />
      <image
        height={141}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(526.183 862.454)"
        width={176}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALEAAACOCAYAAAB+Bem9AAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB11JREFUeNrsm4FTm1gQh4FgNGrt 9Xo39///f1e1VaMxAQ5mdqe/7j0C0dyp8H0zO8QEX+rjY9m30CwD+ODk73QsmAfNMQYpjygrEsOb yF2+QNxctjkSw5FkbRLyNseSOE9EkXgPkeFQgV3S2l7X8n4zVuZypLxFiIVFEaSmxICxJUIj4nZR 9WwHRS4HBHZpy0SciMiLnmyMxLCvdHCBdxZbi53EoMjlgMAq7GkbyzbObLu090uRnToZxkrs2baL Z4tNG0+2fTZ/diJ7UuQ+iT27npisqzbOJVYm86mI7iIjL4yphWvJvi7vuo0H264lKW57Fn5Jif2X VOBO2k9tXFlc2s8rycqllBRkYhjKxFpGdBn30aS9a+N7Gz8kIWaJxV4zRuLCJF6ZtL+18XsbXyw6 mS/s89MgMfLCkMwq8cYkdoFX5l6R2F87GEmJ81BKeP37ycT9o40/2/hqUn8KEseaGJGhr5RogsSe hS/Np8L2qWSBV4nMuYqcqol9QbcMmbiT+C8T+YtIvMx+ttyyREkBEEuKJpGJf5jAC/t8J4u9Z+la 5GPLCa+Jz6xsuDJxv5rMKrG22qiH4RCJK5PzMQisdbIv9LR50PRl4lhOlDbwuYnsi7vPlpkvTXIW dfASibVcWIqc27DI6/y7F892Q92JLPv1Bof3h1fZzzbbRfazzdZXDwMMUUvZUMjrtSXMS/PsNPv1 foTeSW5U4jyx1YzsMvsNj3izA4HhUFzcXAQ+y/59H2K5p2RNlhOp0kKflVhIWl8kBkZkOLRT4R56 slwmEuVi39V+321nlTi+5gk2eC15opmgibIMibI3WRYHfGFKXBZxcAyZ9z0x2Zco80Mk7qt3ERf+ q+ycDSTNbGwmRlJ4q2w8WuBDygmAt8rIg0kVieGjSo3EMB2QGJAYAIkBkBiQGACJAZAYAIkBiQGQ GACJAZAYkBgAiQGQGACJAYkBkBgAiQGQGJAYAIkBkBgAiQGJAZAYAIkBkBiQGACJAZAYAIkBiQGQ GACJAZAYkBgAiQGQGACJAYkBkBgAiQGQGJAYAIkBkBgAiQGJAZAYAIkBkBiQGACJAZAYAIkBiQGQ GACJAZAYkBgAiQGQGACJAYkBkBgAiQGQGJAYAIkBkBgAiQGJAZAYAIkBkBiQGACJAZAYAIkBiQGQ GACJAZAYkBgAiQGQGACJAYkB3ormpRI3zB28I2mb12Ti5tBBAV4g7b44Sjlx8MAAr8zAo30rBoSt w+v6pWcLwMgEWYdQv5qU8OWIs6BKhH5JbifDnETOw/YY2aeZqcDuUefVLkT0LTlXpbyZh51qGWwr 8SyvPZPXRzqgH03g/AVSN4ntXK9mtXimfm1s665ViaycpTJxHLgKgz6GWNiApcl8zOz03iUuRGJ9 3QS5xyxe6hmK3IhrlTnWObW26F4/icxR5F6JdVJV4G7Ahzbu27hrY2W/1+131sbJTCRWaT0WYVsk MnYWZNUkUSfKs2aGEm/MsR8S9yb0k7m46zvhy55s4RL74J28tyawZ+CNSLyYuMRR4NLiJGxVZi3R NDlU4fKp9Z+LPPUaWUXciWedY9dt3LTx3UR+tM99jkaXE1XIwt3gp7Z/Y59dJjJxPmGJVeDub17a 339qsbQo5XfiwdpKreeXS79k7oZqvwlKXIvEaxP3m8W1ZeS1zE/yarWvnHCJ7yTbusDdGXJhB08z 8dSz8ML+3lMT+Nzm4dyiNpFPpLRoZD43ofZ7kPpv74GaQSZem2s3JvGN/byWTDxYE6fKiSe5RDb2 3qOdMSvJzkXPan1KIi8kC69M2u5qdGXhV6eVTbaf2LXMpR+oO8sydyayHqjdxDNx7IBVcmXyuvjW HLsz3/QEz/Zl4ihxbhPrQvqXPdgB9EvoIiHxVDNxaX/3SgR+CHWbx4n9XhXWFt8ty9wEkZ+GVuET lFn7w3qVurc5GTUv5cDgW6mTtQDX+i9VSkw5Ey9F4s8i8bPUvF5q5TZvT7I4vpaa70Yk3shCbw6Z OMvS7dwniU3Iws0hEqu4TWiFrGU1XvRk4SlKrIu6M5NY20AbiUfbxyVeW9btxP3b4rqn7qvksjl1 iVN37LYi7m5fLbxP4tjXVIl9cbMIGThPHPSpdid8YfewR+Ar26ewg+C13jeROLaRnhNttjlInIlr fY837L0ZVI74Mm3S+0HRO1VTFXdfh2Ip8sa2mWddlXgttbCXEreSyX2cufSJU4u8VOLse/hntMQ6 eC4r7Zc8LzAFiTPJxvFGxTassC+knKikVXkrcR9q4bhwmdOzFH3Pk4yah/KAL4kPCWUzkjiWFfGy txOJ7617s5R9XW6/dR9vqc7lJseYEiM79CQuj/Blc5vs1EM7Veje+E2gwvbVUuNRWnLbmdTB/6lX 5Vv/Az7ohOcJqbXX6d2bXD7zunmOt5n/l1oPXtex0IeC9EGgPKy6Y9sIgZH43XQttHMRe+dNaCGN ahsBEr/FHKrMWZC47/8kIjASv1uZ9b1Ucx95kfjDzinyAgDABPlHgAEAxL5SgRldHakAAAAASUVO RK5CYII="
      />
      {/* Conductividad de Alimentación */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(14, "Conductividad de Alimentación", false)}>
        <path
          className="st1"
          d="M594.7 872.3h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3V878.6c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
        />
        <path
          className={`${getTarjetaClass(14, selected)} s27`}
          d="M535.4 879.7h157.1v99.8H535.4z"
        />
        <text
          className="st51"
          transform="translate(571.844 924.392)">
          <tspan
            className="st17 st8 st9"
            x={0}
            y={0}>
            {"Conductividad"}
          </tspan>
          <tspan
            className="st17 st8 st9"
            x={-5.4}
            y={16.8}>
            {"de Alimentaci\xF3n"}
          </tspan>
        </text>
        {/* Alarma Conductividad de Alimentación */}
        <g
          className={`${getTemaAlarma(14, loading, datosAlarmas)} cursorPointer`}
          onClick={() => onClickAlarma(14, "Conductividad de Alimentación")}>
          <path
            className="st4"
            d="M557.8 956.1c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
          />
          <path
            className="st4"
            d="M556.1 955.1c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM567.4 953.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
          />
          <path
            className="st4"
            d="M568 951.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM568.8 961.1v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM563.8 968.5c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
          />
        </g>
        <text
          className="st10 st8 st52"
          transform="translate(595.09 967.17)">
          {conductividadAlimentacion}
        </text>
        <text
          className="st10 st8 st53"
          transform="translate(642.857 966.77)">
          {"\xB5S/cm"}
        </text>
        <text
          className="st10 st8 st54"
          transform="translate(599.363 899.394)">
          {"AT-001"}
        </text>
      </g>
      <circle
        className="st33"
        cx={614.4}
        cy={1021.5}
        r={9.2}
      />
      <path
        className="st28"
        d="M532.6 1713.3v94c0 5.5 4.5 10 10 10h88.1c5.5 0 10.1 4.4 10.1 9.9v132"
      />
      <path
        className="st15"
        d="M264.7 1713.8h339.6M694.7 1336.3h500.6l56 .1c5 0 9.1 4.1 9.1 9.1v180.8c0 5.7-4.6 10.3-10.3 10.3H98.9c-5.5 0-10 4.5-10 10v180.1c0 3.9 3.2 7.1 7.1 7.1h62.7M604.6 1790.7h-26.3c-2.8 0-5-2.2-5-5v-71.5M573.9 1739.2h30.4M745.9 1791.3h26.4c2.8 0 5-2.2 5-5v-70.7M776.6 1739.2h-30.4M573.9 1765.2h30.4M776.6 1765.2h-30.4M747.7 2015.8v52.1M720.5 2008.7h-26.3c-2.8 0-5-2.2-5-5v-72.5M689.8 1957.2h30.4M851.8 2009.3h26.4c2.8 0 5-2.2 5-5v-67.7c0-2.5-2-4.4-4.4-4.4h-27M882.5 1957.2h-30.4M689.8 1983.2h30.4M882.5 1983.2h-30.4M883.2 1934.8v-220.5M883.5 2070.3v37.2c0 3.8 3.1 6.8 6.8 6.8H910M924.1 2069.2h19.3c3.5 0 6.3 2.8 6.3 6.3v31.9c0 3.8-3.1 6.9-6.9 6.9h-18.7"
      />
      <path
        className="st15"
        d="M942.1 2069.2h114c5.3 0 9.6 4.3 9.6 9.6v29"
      />
      <path
        className="st19"
        d="M1059 2108.6c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
      />
      <path
        className="st1"
        d="M1070.7 2108.6c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <circle
        className="st58"
        cx={534.3}
        cy={1783.1}
        r={9.2}
      />
      <path
        className="st15"
        d="M753.6 2069.2h156.9"
      />
      <path
        className="st28"
        d="M640.9 1957.2v102c0 5.5 4.5 10 10 10h89.7"
      />
      <circle
        className="st58"
        cx={642.6}
        cy={2015.8}
        r={9.2}
      />
      <image
        height={122}
        style={{
          overflow: "visible",
          opacity: 0.2
        }}
        transform="translate(341.898 1723.496)"
        width={180}
        xlinkHref="data:image/png;base64,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 SUVORK5CYII="
      />
      {/* Diferencial Primera Etapa */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(19, "Diferencial Primera Etapa", false)}>
        <path
          className="st1"
          d="M457.5 1732.3h42.1c3.5 0 6.3 2.8 6.3 6.3v33.2c0 .8.3 1.6.8 2.2l5.3 6.5c1.1 1.4 1 3.3-.1 4.6l-5.1 5.5c-.6.7-.9 1.5-.9 2.4v36.9c0 3.5-2.8 6.3-6.3 6.3H357.1c-3.5 0-6.3-2.8-6.3-6.3v-91.3c0-3.5 2.8-6.3 6.2-6.3h100.5z"
        />
        <path
          className={`${getTarjetaClass(19, selected)} s27`}
          d="M356.8 1732.3h143.8v103.9H356.8z"
        />
        <text
          className="st51"
          transform="translate(394.826 1768.018)">
          <tspan
            className="st17 st8 st9"
            x={0}
            y={0}>
            {"Diferencial"}
          </tspan>
          <tspan
            className="st17 st8 st9"
            x={-11.7}
            y={16.8}>
            {"Primera Etapa"}
          </tspan>
        </text>
        {/* Alarma Diferencial Primera Etapa */}
        <g
          className={`${getTemaAlarma(19, loading, datosAlarmas)} cursorPointer`}
          onClick={() => onClickAlarma(19, "Diferencial Primera Etapa")}>
          <path
            className="st4"
            d="M370.9 1810.7c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
          />
          <path
            className="st4"
            d="M369.2 1809.7c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM380.5 1808.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
          />
          <path
            className="st4"
            d="M381.1 1806.5c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM381.9 1815.7v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM376.9 1823.1c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
          />
        </g>
        <text
          className="st10 st8 st52"
          transform="translate(408.705 1821.795)">
          {diferencialPrimeraEtapa}
        </text>
        <text
          className="st10 st8 st53"
          transform="translate(464.91 1821.395)">
          {"bar"}
        </text>
      </g>
      <image
        height={121}
        style={{
          overflow: "visible",
          opacity: 0.2
        }}
        transform="translate(449.898 1957.496)"
        width={180}
        xlinkHref="data:image/png;base64,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 VP8+Hc7nmMsAAAAASUVORK5CYII="
      />
      {/* Diferencial Segunda Etapa */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(20, "Diferencial Segunda Etapa", false)}>
        <path
          className="st1"
          d="M565.7 1966h42.1c3.5 0 6.3 2.8 6.3 6.3v33.2c0 .8.3 1.6.8 2.2l5.3 6.5c1.1 1.4 1 3.3-.1 4.6l-5.1 5.5c-.6.7-.9 1.5-.9 2.4v36.9c0 3.5-2.8 6.3-6.3 6.3H465.3c-3.5 0-6.3-2.8-6.3-6.3v-91.3c0-3.5 2.8-6.3 6.2-6.3h100.5z"
        />
        <path
          className={`${getTarjetaClass(5, selected)} s27`}
          d="M465 1966h143.8v103.9H465z"
        />
        <text
          className="st51"
          transform="translate(503.02 2004.75)">
          <tspan
            className="st17 st8 st9"
            x={0}
            y={0}>
            {"Diferencial"}
          </tspan>
          <tspan
            className="st17 st8 st9"
            x={-15.2}
            y={16.8}>
            {"Segunda Etapa"}
          </tspan>
        </text>
        {/* Alarma Diferencial Segunda Etapa */}
        <g
          className={`${getTemaAlarma(20, loading, datosAlarmas)} cursorPointer`}
          onClick={() => onClickAlarma(20, "Diferencial Segunda Etapa")}>
          <path
            className="st4"
            d="M479.1 2044.4c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
          />
          <path
            className="st4"
            d="M477.4 2043.4c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM488.7 2042.1c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
          />
          <path
            className="st4"
            d="M489.3 2040.2c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM490.1 2049.4v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM485.1 2056.8c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
          />
        </g>
        <text
          className="st10 st8 st52"
          transform="translate(516.9 2055.527)">
          {diferencialSegundaEtapa}
        </text>
        <text
          className="st10 st8 st53"
          transform="translate(573.105 2055.127)">
          {"bar"}
        </text>
      </g>
      <circle
        className="st33"
        cx={748.7}
        cy={2067.8}
        r={9.2}
      />
      <path
        className="st15"
        d="M648.5 1799.4v121.8c0 6.1 4.9 11.1 11.1 11.1l60.7.1"
      />
      <circle
        className="st33"
        cx={644.4}
        cy={1899.1}
        r={9.2}
      />
      <image
        height={141}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(659.402 2083)"
        width={176}
        xlinkHref="data:image/png;base64,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"
      />
      {/* Presion de Rechazo */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(10, "Presión de Rechazo", false)}>
        <path
          className="st1"
          d="M766.7 2214.1h53.1c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-61.7c-1.2 0-2.4-.4-3.4-1.2l-.4-.3c-6.5-6.5-6.5-6.5-12.9.2-1 .9-2.2 1.3-3.5 1.3h-62.7c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h91.5z"
        />
        <path
          className={`${getTarjetaClass(10, selected)} s27`}
          d="M669 2106.2h157.1v99.8H669z"
        />
        <text
          className="st51"
          transform="translate(725.986 2150.907)">
          <tspan
            className="st17 st8 st9"
            x={0}
            y={0}>
            {"Presi\xF3n"}
          </tspan>
          <tspan
            className="st17 st8 st9"
            x={-13.6}
            y={16.8}>
            {"de Rechazo"}
          </tspan>
        </text>
        {/* Alarma de Presion de Rechazo */}
        <g
          className={`${getTemaAlarma(10, loading, datosAlarmas)} cursorPointer`}
          onClick={() => onClickAlarma(10, "Presión de Rechazo")}>
          <path
            className="st4"
            d="M691.3 2182.6c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
          />
          <path
            className="st4"
            d="M689.6 2181.6c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM700.9 2180.3c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
          />
          <path
            className="st4"
            d="M701.5 2178.4c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM702.3 2187.6v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM697.3 2195c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
          />
        </g>
        <text
          className="st10 st8 st52"
          transform="translate(728.604 2193.684)">
          {presionRechazo}
        </text>
        <text
          className="st10 st8 st53"
          transform="translate(789.372 2193.284)">
          {"bar"}
        </text>
        <text
          className="st10 st8 st54"
          transform="translate(731.878 2125.909)">
          {"PT-006"}
        </text>
      </g>
      <image
        height={122}
        style={{
          overflow: "visible",
          opacity: 0.2
        }}
        transform="translate(448.898 1840.496)"
        width={180}
        xlinkHref="data:image/png;base64,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 AAAAAElFTkSuQmCC"
      />
      {/* Presion Interetapa */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(18, "Presión Interetapa", false)}>
        <path
          className="st1"
          d="M564.3 1849.3h42.1c3.5 0 6.3 2.8 6.3 6.3v33.2c0 .8.3 1.6.8 2.2l5.3 6.5c1.1 1.4 1 3.3-.1 4.6l-5.1 5.5c-.6.7-.9 1.5-.9 2.4v36.9c0 3.5-2.8 6.3-6.3 6.3H463.9c-3.5 0-6.3-2.8-6.3-6.3v-91.3c0-3.5 2.8-6.3 6.2-6.3h100.5z"
        />
        <path
          className={`${getTarjetaClass(18, selected)} s27`}
          d="M463.6 1849.3h143.8v103.9H463.6z"
        />
        <text
          className="st51"
          transform="translate(510.945 1897.003)">
          <tspan
            className="st17 st8 st9"
            x={0}
            y={0}>
            {"Presi\xF3n"}
          </tspan>
          <tspan
            className="st17 st8 st9"
            x={-7.8}
            y={16.8}>
            {"Interetapa"}
          </tspan>
        </text>
        {/* Alarma de Presion Interetapa */}
        <g
          className={`${getTemaAlarma(18, loading, datosAlarmas)} cursorPointer`}
          onClick={() => onClickAlarma(18, "Presión Interetapa")}>
          <path
            className="st4"
            d="M477.7 1927.7c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
          />
          <path
            className="st4"
            d="M476 1926.7c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM487.3 1925.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
          />
          <path
            className="st4"
            d="M487.9 1923.5c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM488.7 1932.7v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM483.7 1940.1c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
          />
        </g>
        <text
          className="st10 st8 st52"
          transform="translate(515.49 1938.78)">
          {presionInteretapa}
        </text>
        <text
          className="st10 st8 st53"
          transform="translate(567.695 1938.38)">
          {"bar"}
        </text>
        <text
          className="st10 st8 st54"
          transform="translate(518.003 1873.005)">
          {"PT-005"}
        </text>
      </g>
      <path
        className="st20"
        d="M909.8 2104.2h14.8c.9 0 1.6-.2 1.6-.4v-3.7c0-.2-.7-.4-1.6-.4h-14.8c-.9 0-1.6.2-1.6.4v3.7c0 .2.7.4 1.6.4zM925 2108.1l-7.9 4.6c-.5.3-.5 1 0 1.3l7.9 4.6c.5.3 1.2-.1 1.2-.7v-9.2c0-.5-.7-.9-1.2-.6z"
      />
      <path
        className="st20"
        d="m909.4 2118.7 7.9-4.6c.5-.3.5-1 0-1.3l-7.9-4.6c-.5-.3-1.2.1-1.2.7v9.2c0 .5.7.9 1.2.6z"
      />
      <path
        className="st0"
        d="M917.2 2103.2v10"
      />
      <path
        className="st20"
        d="M924.6 2059.9h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM909.4 2063.8l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st20"
        d="m925 2074.4-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st0"
        d="M917.2 2058.9v10"
      />
      <path
        className="st26"
        d="M908.2 2050.9h18M917.2 2051.9v8"
      />
      <path
        className="st15"
        d="M746.2 1714.2h499.9c2.8 0 5 2.3 5 5v44.9"
      />
      <path
        className="st24"
        d="M746.4 1724.7h-142c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h142c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.8 3.8-6 3.8z"
      />
      <path
        className="st17"
        d="M747.7 1724.7h-143c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l143.2 19.8c.6.3.5.9-.2.9z"
      />
      <path
        className="st24"
        d="M746.4 1749.8h-142c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h142c3.3 0 6 1.7 6 3.8v13.1c0 2.2-2.8 3.8-6 3.8z"
      />
      <path
        className="st17"
        d="M747.7 1749.8h-143c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l143.2 19.8c.6.3.5.9-.2.9z"
      />
      <path
        className="st24"
        d="M746.4 1774.9h-142c-3.3 0-6-1.7-6-3.8V1758c0-2 2.7-3.8 6-3.8h142c3.3 0 6 1.7 6 3.8v13.2c0 2.1-2.8 3.7-6 3.7z"
      />
      <path
        className="st17"
        d="M747.7 1774.9h-143c-3.4 0-6.3-1.7-6.3-3.8V1758c0-2 2.8-3.8 6.3-3.8l143.1 20c.7.1.6.7-.1.7z"
      />
      <path
        className="st24"
        d="M746.4 1800h-142c-3.3 0-6-1.7-6-3.8v-13c0-2 2.7-3.8 6-3.8h142c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.8 3.7-6 3.7z"
      />
      <path
        className="st17"
        d="M747.7 1800h-143c-3.4 0-6.3-1.7-6.3-3.8v-13c0-2 2.8-3.8 6.3-3.8l143.2 19.8c.6.3.5.8-.2.8z"
      />
      <path
        className="st24"
        d="M852.3 1942.7h-132c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.8 3.8-6 3.8z"
      />
      <path
        className="st17"
        d="M853.6 1942.7h-133c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.9-.2.9z"
      />
      <path
        className="st24"
        d="M852.3 1967.8h-132c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.2-2.8 3.8-6 3.8z"
      />
      <path
        className="st17"
        d="M853.6 1967.8h-133c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.9-.2.9z"
      />
      <path
        className="st24"
        d="M852.3 1992.9h-132c-3.3 0-6-1.7-6-3.8V1976c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.2c0 2.1-2.8 3.7-6 3.7z"
      />
      <path
        className="st17"
        d="M853.6 1992.9h-133c-3.4 0-6.3-1.7-6.3-3.8V1976c0-2 2.8-3.8 6.3-3.8l133.1 20c.7.1.6.7-.1.7z"
      />
      <path
        className="st24"
        d="M852.3 2018h-132c-3.3 0-6-1.7-6-3.8v-13c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.8 3.7-6 3.7z"
      />
      <path
        className="st17"
        d="M853.6 2018h-133c-3.4 0-6.3-1.7-6.3-3.8v-13c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.8-.2.8z"
      />
      <image
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(927.402 1909)"
        width={177}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALIAAACNCAYAAAATpiAQAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB0tJREFUeNrsnI1y2mYQRSUhwDFx kqbN9P2fr01qO/7BYPgqprvt9ebTDw6xU+mcmR2Ig0UrDqu7C5OiABgB5U9yDID0UhKWHb+HzHAq idNz5C6PeEwZqgj3Ab5X5iTypszPWqkHSKxVZQqZ4RTdeJ+pZLe9HboeKPFMqg63LjRRA54bJVzc XVOP4XYnUrfKXPdIXIm0c6tlUwur2qrqydAAbSK7xAdxt01tQm1F6NbOXA+U+CDvWVNvmjq32zOT eS6dGYHhGLQTu7jrpu6aurda28+LLpm7OnIlEh/kXTV10dS7pt6K0ItMV0ZoGNKRk8SIBxP3tqmv VrPgUgoyt4occ/HcOu9B3PdN/WL1waQ+N9HnLVkZoEtm78hb67wHia+bujSvZpnH6gCY+qKFx4qF yXqQ9mNTn5r6ze6/N8GXEi/YYMCxIu9M5EM3vmnqyq7080z8UJlbo0WuG3useCci/24yfzCRz6Qj IzIcI3LKiLwyn0r5Ox38Hk3mUrtyV0f2WLEykQ+R4leT+VOHyADHDnseLVaWAkoZANcy9D3IFqM3 I8dtxbkJ6zJ/tPpgT7yUYY9BD44d+FzkB+nEjyEzn1u31g3Zvisjx2ixkK58Eco3Fws5OCLDc0T2 zZd34rWJe2Hu6XYsO4vlokUlXdlzsu6QdY/MxgJOES9czn3x36p3Ja4ti6dr3qovWqjM+onesnj6 id5c3h18GALfQykSzyUJLIN3dbjyZ0Uui/wXhFxmrVmokm0FnEDmnG/z0DSrIv8tzFR1vENy33ab 9RwQ4LkduQpCz4r2b1qWuQjR9wRly4GQF36U1F3etWbhIQcvkBdeSepiiHfVd75jAH5kRx5MNeCA BdLCK8td9AnO7hdGASIDIgMgMgAiAyAyIDIAIgMgMgAiAyIDIDIAIgMgMiAyACIDIDIAIgMiAyAy ACIDIDIAIgMiAyAyACIDIDIgMgAiAyAyACIDIgMgMgAiAyAyIDIAIgMgMgAiAyAyIDIAIgMgMgAi AyIDIDIAIgMgMiAyACIDIDIAIgMiAyAyACIDIDIgMqcAEBkAkQEQGQCRAZEBEBkAkQEQGRAZAJEB EBkAkQGRARAZAJEBEBkQGQCRARAZAJEBEBkQGQCRARAZAJEBkQEQGQCRARAZEBkAkQEQGeAJSW6T /HmQyPGXEucTXkjaZzlXPfOJEnLDC3XhQVJXRx4UeeElO3Ma2jyrgQfbW9GR4UfKu8/UrsW/XpFz AutBd+FnSA2n7L7u2KPVrkPmf92rOyZDF3cr9SiFyP9QnjATTrkT74LEB982Vtvg3DfULQffhwM+ WK3t1g9e2ws5K6a3yiu/Q+zUM9xMCXVtI56txbuNdOeszHXLgffhwPdN3UqdN7WwFy2JyOUJu9T/ QeRcpZ7//9Qz0ExtK+GuuWd3wbX7IHM2BdQteUXfIS7x16aum3rb1NLE9f+I2v5cTUDkKG6VqVx3 Tj1DzZSETqFpbq0D35hjh7oy51xmTwG7oSJrNl6LxJfWiVXiw8HfNDXPdOWxRolS4pRXbTWT81Bl hIxDcxxo4ouURi6zunZvnn1p6nNTf5lzX61Lr7tyct3yBDvJxrf27lhanHCJD393YSIvpCuPtSOX GYnnVgupuZ2LFLqzRjYdZDYyTEeZ04glLkKEvbdOfBD4j6b+tPvXJrJGiyKen3pAbrmzg9WhE9+0 iFyOXORKJD68uc/sHLyx+2eZ81G0DDR39gL6YLOVgWbsIqeMyH7l/ywie0d+CAPfoI6sIlfyguzl MnCQeyUizzIZcYwie5Rwic9tbvB6tJ8vZavjV7mNDDQ39iLd2FVvHV6ssWfleIXyWezaZNZocS8d OQ1Zv6WwEtmGadzfPbci8TKIPNbNhYrs3dglfm/lXXVl52ouWXkbBudLi2xXJrPnwO3IRU6ZjKzb sZtQt/IG3w/dWuT2e5uQZzw3n4nE9USGPRXZu/E7ma7XEhtWdn5mEsfupON8sa6jOXBtj5tCR1aR Y+S6D5Fr03elqjveMUX4xZhndLDJSTzmjlwHkW8k73p0uLDHzGQ49sHZJ/PPGZGn0pFzMncNwfuu g9YDnkxbuW4zZsXT/XHVsq4a47BX2xv5XC5/KvKtiFzbOfQ9qXdjL10x+Yu3n4jImpX30nXbVpJp aEZuyzJl6MrbIPBYNxVd67dFuAR6+cASRX4wka8kUlzaY29DN57Sd1javqCWMuchHduR2y4DSbYX ZTG9j6QLEdkz3UPIdz7MrWRzsZch2T8hvZKtxTqTA4timh9Z57pv73moj3wivV+OPEp0Ca3fAozD yp0JqmtJ3VrchTiyLno+fp2IxF2uDe4yp+pWUxE55mX/dM93y77R0fWby64xxNd1j8U0PtEbKjMC vpLMMxFaa1Z8+8netnj6HdvdxCWmk/5EmbkSobWqMCjHL5APmsgBkV+6O5cib9yrpzCJD57IAZFf S+iuc8u/GYLIozqnCAwAAADwc/K3AAMA6Sg8dfHc/rgAAAAASUVORK5CYII="
      />
      {/* Caudal de Rechazo */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(13, "Caudal de Rechazo", false)}>
        <path
          className="st1"
          d="M996.7 1918.4h-53.1c-3.5 0-6.3 2.8-6.3 6.3V2027c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
        />
        <path
          className={`${getTarjetaClass(13, selected)} s27`}
          d="M937.4 1925.8h157.1v99.8H937.4z"
        />
        <text
          className="st51"
          transform="translate(995.947 1970.45)">
          <tspan
            className="st17 st8 st9"
            x={0}
            y={0}>
            {"Caudal"}
          </tspan>
          <tspan
            className="st17 st8 st9"
            x={-15.2}
            y={16.8}>
            {"de Rechazo"}
          </tspan>
        </text>
        <g
          className={`${getTemaAlarma(13, loading, datosAlarmas)} cursorPointer`}
          onClick={() => onClickAlarma(13, "Caudal de Rechazo")}>
          <path
            className="st4"
            d="M959.7 2002.1c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
          />
          <path
            className="st4"
            d="M958 2001.1c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM969.3 1999.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
          />
          <path
            className="st4"
            d="M969.9 1997.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM970.7 2007.1v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM965.7 2014.5c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
          />
        </g>
        <text
          className="st10 st8 st52"
          transform="translate(997.013 2013.227)">
          {caudalRechazo}
        </text>
        <text
          className="st10 st8 st53"
          transform="translate(1057.78 2012.826)">
          {"m"}
        </text>
        <text
          className="st10 st8 st53"
          transform="matrix(.583 0 0 .583 1068.61 2008.497)">
          {"3"}
        </text>
        <text
          className="st10 st8 st53"
          transform="translate(1072.825 2012.826)">
          {"/h"}
        </text>
        <text
          className="st10 st8 st54"
          transform="translate(1001.287 1945.451)">
          {"FIT-002"}
        </text>
      </g>
      <circle
        className="st33"
        cx={1014.9}
        cy={2068.2}
        r={9.2}
      />
      <path
        className="st20"
        d="M1064.1 2123.8h3.7v11h-3.7z"
      />
      <path
        className="st20"
        d="M1058.8 2117.8c-.7.8-.7 2 0 2.8l5.6 5.6c.8.7 2 .7 2.8 0l5.6-5.6c.7-.8.7-2 0-2.8"
      />

      <path
        className="st19"
        d="M1244.9 1761.9c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
      />
      <path
        className="st1"
        d="M1256.6 1761.9c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <image
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(872.402 1557)"
        width={176}
        xlinkHref="data:image/png;base64,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"
      />
      {/* Caudal de Permeado */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(12, "Caudal de Permeado", false)}>
        <path
          className="st1"
          d="M941.1 1566.2H888c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
        />
        <path
          className={`${getTarjetaClass(12, selected)} s27`}
          d="M881.8 1573.6h157.1v99.8H881.8z"
        />
        <text
          className="st51"
          transform="translate(940.402 1609.294)">
          <tspan
            className="st17 st8 st9"
            x={0}
            y={0}>
            {"Caudal"}
          </tspan>
          <tspan
            className="st17 st8 st9"
            x={-19.8}
            y={16.8}>
            {"de Permeado"}
          </tspan>
        </text>
        {/* Alarma de Caudal de Permeado */}
        <g
          className={`${getTemaAlarma(12, loading, datosAlarmas)} cursorPointer`}
          onClick={() => onClickAlarma(12, "Caudal de Permeado")}>
          <path
            className="st4"
            d="M904.2 1650c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
          />
          <path
            className="st4"
            d="M902.5 1649c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM913.8 1647.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
          />
          <path
            className="st4"
            d="M914.4 1645.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM915.2 1655v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM910.2 1662.4c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
          />
        </g>
        <text
          className="st10 st8 st52"
          transform="translate(941.47 1661.071)">
          {caudalPermeado}
        </text>
        <text
          className="st10 st8 st53"
          transform="translate(999.237 1660.671)">
          {"m"}
        </text>
        <text
          className="st10 st8 st53"
          transform="matrix(.583 0 0 .583 1010.066 1656.342)">
          {"3"}
        </text>
        <text
          className="st10 st8 st53"
          transform="translate(1014.28 1660.671)">
          {"/h"}
        </text>
      </g>
      <circle
        className="st33"
        cx={960.3}
        cy={1714.1}
        r={9.2}
      />
      <image
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(1046 1556.936)"
        width={176}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACMCAYAAADcDyOIAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABuJJREFUeNrsmg1zomYURgHRmJhk s7Ntp///57XTrBs1fiKFmXvbJ28AQbPJBs6ZuRNjFCd4eLjvhSgC+MTEH/x+gPy9BIxbPAa4RN68 q9hpS3G1oorfAS6VOA+qlchpi8RN7HFSUTEpDBfK63UMyp9rlDhukbojq1R+poHEtBRwbsvgwmZF HawyKRW6VQLHkrgu7Lioq6ImUi50gsBwhsCevCruLqi9/T2qkzhtSOCRiDst6sbqWmQeV7QTAG1b h6OJW4q6LWpT1FpqYyJHdRKnFeJq8l6ZtLdF3Rd1Z49nJvXYXhfTD0PHBPbWYG+SlsKuilpYjcSl cHGXNwms6Ts1Yb9KPZjI19JKJEwloKPI3vd6+rq8cwvOUfBabTkqE1h7X03fexP3j6J+K+qbPTez 1yAwnDt5cIHLVmFp8k7Fy0x6ZH+sqdzYQkxM4DsTuJT3T/v5gMBwYRuhAq9N4Bs780cm7VZqZ54d m1qISBJ4Ym3CrQn7zeT93YSuEhig6yLOE1jl9edWVs/m2T70rKmFmJigM0vhexP5a5DAPkpjAQdd E9inEBtxcW/CPsmwoGqt1dhCqMRTS+JZRU2C1SICQ9dJxEE8PJi8Pum6lrN81TWH/94YV6SwTyLG ksZaPgceIS6cyVHO3lMJy2ngWG2bGrYQdUkc1kiK/hfOJRYPUwlMrTB9NWzzpkvJcXT6Rh7uSoNL Cb0KwzGJqu+GzCOJ76YjJEZWeKc0DsPz5Hg2OWPjESLDT24pWt+akJwQlskCvGf6dg7HhH0HnyyR ERj6tQIEQGAABAZAYEBgAAQGQGAABAYEBkBgAAQGQGBAYAAEBkBgQGAABAZAYAAEBgQGQGAABAZA YEBgAAQGQGAABAYEBkBgAAQGBAZAYAAEBkBgQGAABAZAYAAEBgQGQGAABAZAYEBgAAQGQGBAYAAE BkBgAAQGBAZAYAAEBkBgQGAABAZAYAAEBgQGQGAABAYEBkBgAAQGQGBAYAAEBkBgAAQGBAZAYAAE BgRmFwACAyAwAAIDAgMgMAACAyAwIDAAAgMgMAACAwIDIDAAAgMCAyAwAAIDIDD0iFx+5ggMv7Ko J2XtInC4QYCPStz8LVqI/JKjBKCjY2UdrRpdSzpuFHHhZwh7lMqsjhUSv0rltMWGww84tj06BkD8 RqfMIQus4h6k9lYHEfqVxGnNzswrNroPPsCPlHyAi8H4TKHzhp5viAIfA1m3RW2sysc7e14FfkEq G4uDo8Ll3dnGdONTee8oEDgeiMBhnRI5py178X968u7NqWerldWzPd8ocVpzVPiGd7LxpdWNvG9v jxP50uKBiJvI/62Pw/2Q15wym3q8IUwZPCT35tdTUT/s55O55hL72f9V25rW9CQHOTLKo2FhGy/l Hdvryr9f2e9JTRL1rWVQWUdWqfxMpOqC4RC0ZllFuuQ9l1g925qopV//WH2330uJ1xakrRI4kg3v 7M2lvHNpG3L70JU9N7YvsM8JHMvUJrH9MLaaWPnvacV+CFsyraaFSp8T2PeHh+STyfuXSLwQgQ9d Wgg9Mhb2BY3s7zv7wFtJ4FFDP9in1sGT18UtD+Brq6nVRFJZvyxtydZyetzIF5QNQOC8QeDvJu/f FppL2T9ZVatV10Jk9qZnWaR527C2D7sxgVN5TZ9biFhaBZf3xg5kr73J7PslrggEb8mW0udtm06T PZ0+HGXy4GusHybxXFqITbCIi04lsCbGRqT0L6Hc6EzSZlzR98U9F/hK5L0r6sH21b1IPBGBd8GX NJcFy+rUabLnE4hwUKAH99qcO9S1V3UtRLiK1nHHMpA3HcgiLpb2wQUu5f0iEvq4cWavSSwM/DQ5 t4R5lKSp+6KGsogLW6t19HIW3LhP0oYPyRpWjGPpfUcV8vY9gSci8CLoZ9f2/NQE9j7vyYT1lfZj IPCQEljP9H6239csbhuv+qYNH3SsEHgXjI6Smt63j0ms4zPvgRfR/0P3tSzOVOBMFsOPVjoqWgWz znwAAoe9cBaMF7OKqUznBK5bNSbR68F936++6RhN++C1nOq20mKFCazjSE/euSzihjKFqJtIVF3Y aTUXT1seMZksSEJph3LpOApGaXqt3i+3u6hhD7yWUZEv3hYygQhX2UO7tFx3af3kfkjP6F2igbQM Tb1wIqc57eE8gXUKkYncK/u7Lvr2A1m8tWkpoq4HcHrmB+bBlzqkHR9XnPJ0KL+MXs+B9U6rdVR/ p9XQ7krL3+LLgMuSeBS9vKw8lkWuH9yHYKWt90FwXzUCf7jE4c09emFHr25mXVbYgMDvOZ2ou60y qlhZD+XOMwT+ZGncNJnpvMIGBP4V9yfiAgBAD/hXgAEA2ZoZ31X39lYAAAAASUVORK5CYII="
      />
      {/* Conductividad de Permeado */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(15, "Conductividad de Permeado", false)}>
        <path
          className="st1"
          d="M1114.5 1566.2h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
        />
        <path
          className="st27"
          d="M1055.2 1573.6h157.1v99.8h-157.1z"
        />
        <text
          className="st51"
          transform="translate(1091.572 1618.294)">
          <tspan
            className="st17 st8 st9"
            x={0}
            y={0}>
            {"Conductividad"}
          </tspan>
          <tspan
            className="st17 st8 st9"
            x={2.3}
            y={16.8}>
            {"de Permeado"}
          </tspan>
        </text>
        {/* Alarma de Conductividad de Permeado */}
        <g
          className={`${getTemaAlarma(15, loading, datosAlarmas)} cursorPointer`}
          onClick={() => onClickAlarma(15, "Conductividad de Permeado")}>
          <path
            className="st4"
            d="M1077.6 1650c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
          />
          <path
            className="st4"
            d="M1075.9 1649c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM1087.2 1647.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
          />
          <path
            className="st4"
            d="M1087.8 1645.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM1088.6 1655v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1083.6 1662.4c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
          />
        </g>
        <text
          className="st10 st8 st52"
          transform="translate(1114.819 1661.071)">
          {conductividadPermeado}
        </text>
        <text
          className="st10 st8 st53"
          transform="translate(1162.586 1660.671)">
          {"\xB5S/cm"}
        </text>
        <text
          className="st10 st8 st54"
          transform="translate(1119.092 1593.296)">
          {"AT-005"}
        </text>
      </g>
      <circle
        className="st33"
        cx={1134.2}
        cy={1714.1}
        r={9.2}
      />
      <image
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(341.402 1556)"
        width={177}
        xlinkHref="data:image/png;base64,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 AADvl38FGABjuTWdPYmSxwAAAABJRU5ErkJggg=="
      />
      <path
        className="st1"
        d="M410.7 1565.3h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
      />
      {/* Presion de Osmosis */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(9, "Presión de Osmosis", false)}>
        <path
          className={`${getTarjetaClass(9, selected)} s27`}
          d="M351.4 1572.7h157.1v99.8H351.4z"
        />
        <text
          className="st51"
          transform="translate(408.387 1617.372)">
          <tspan
            className="st17 st8 st9"
            x={0}
            y={0}>
            {"Presi\xF3n"}
          </tspan>
          <tspan
            className="st17 st8 st9"
            x={-13.2}
            y={16.8}>
            {"de Osmosis"}
          </tspan>
        </text>
        {/* Alarma de Presion de Osmosis */}
        <g
          className={`${getTemaAlarma(9, loading, datosAlarmas)} cursorPointer`}
          onClick={() => onClickAlarma(9, "Presión de Osmosis")}>
          <path
            className="st4"
            d="M373.7 1649c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
          />
          <path
            className="st4"
            d="M372 1648c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM383.3 1646.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
          />
          <path
            className="st4"
            d="M383.9 1644.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM384.7 1654v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM379.7 1661.4c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
          />
        </g>
        <text
          className="st10 st8 st52"
          transform="translate(411.005 1660.15)">
          {presionOsmosis}
        </text>
        <text
          className="st10 st8 st53"
          transform="translate(471.773 1659.75)">
          {"bar"}
        </text>
        <text
          className="st10 st8 st54"
          transform="translate(416.28 1592.374)">
          {"PT-004"}
        </text>
      </g>
      <circle
        className="st33"
        cx={429.9}
        cy={1713.9}
        r={9.2}
      />
      <image
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(242.402 863)"
        width={176}
        xlinkHref="data:image/png;base64,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 TkSuQmCC"
      />
      {/* Diferencial Pretratamiento */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(3, "Diferencial Pretratamiento", false)}>
        <path
          className="st1"
          d="M311.3 872.3h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3V878.6c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
        />
        <path
          className={`${getTarjetaClass(3, selected)} s27`}
          d="M252 879.7h157.1v99.8H252z"
        />
        <text
          className="st51"
          transform="translate(299.714 914.392)">
          <tspan
            className="st17 st8 st9"
            x={0}
            y={0}>
            {"Diferencial"}
          </tspan>
          <tspan
            className="st17 st8 st9"
            x={-12.8}
            y={16.8}>
            {"Pretratamiento"}
          </tspan>
        </text>
        {/* Alarma Diferencial Pretratamiento */}
        <g
          className={`${getTemaAlarma(3, loading, datosAlarmas)} cursorPointer`}
          onClick={() => onClickAlarma(3, "Diferencial Pretratamiento")}>
          <path
            className="st4"
            d="M274.4 956.1c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
          />
          <path
            className="st4"
            d="M272.7 955.1c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM284 953.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
          />
          <path
            className="st4"
            d="M284.6 951.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM285.4 961.1v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM280.4 968.5c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
          />
        </g>
        <text
          className="st10 st8 st52"
          transform="translate(311.667 967.17)">
          {diferencialPretratamiento}
        </text>
        <text
          className="st10 st8 st53"
          transform="translate(372.434 966.77)">
          {"bar"}
        </text>
        <path
          className="st17"
          d="M87.8 430.4h124.8v97.7H87.8z"
        />
        <path
          className="st23"
          d="M212.4 414.1v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1V414.1"
        />
        <text
          className="st10 st8 st49"
          transform="translate(132.982 549.612)">
          {"TK-001"}
        </text>
      </g>
      <image
        height={141}
        style={{
          overflow: "visible",
          opacity: 0.3,
          display: "none"
        }}
        transform="translate(64.402 263)"
        width={176}
        xlinkHref="data:image/png;base64,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"
      />
      {/* Nivel Estanque TK-001 - Recuperacion RO */}
      <g
        style={{ cursor: "pointer", display: "none" }}
        onClick={() => loadGrafico(0, "Nivel Estanque TK-001", false)}>
        <path
          className="st1"
          d="M133.4 272.9H80.3c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3H142c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3V279.2c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
        />
        <path
          className={`${getTarjetaClass(0, selected)} s27`}
          d="M74.1 280.3h157.1v99.8H74.1z"
        />
        <text
          className="st51"
          transform="translate(139.349 324.968)">
          <tspan
            className="st17 st8 st9"
            x={0}
            y={0}>
            {"Nivel"}
          </tspan>
          <tspan
            className="st17 st8 st9"
            x={-38.9}
            y={16.8}>
            {"Estanque TK-001"}
          </tspan>
        </text>
        {/* Alarma Nivel Estanque TK-001 */}
        <g
          className={`${getTemaAlarma(0, loading, datosAlarmas)} cursorPointer`}
          onClick={() => onClickAlarma(0, "Nivel Estanque TK-001")}>
          <path
            className="st4"
            d="M96.5 356.6c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
          />
          <path
            className="st4"
            d="M94.8 355.6c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM106.1 354.3c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
          />
          <path
            className="st4"
            d="M106.7 352.4c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM107.5 361.6v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM102.5 369c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
          />
        </g>
        <text
          className="st10 st8 st52"
          transform="translate(133.792 367.746)">
          {recuperacionRO}
        </text>
        <text
          className="st10 st8 st53"
          transform="translate(201.56 367.346)">
          {"%"}
        </text>
        <text
          className="st10 st8 st54"
          transform="translate(138.065 299.97)">
          {"TK-001"}
        </text>
      </g>
      <path
        className="st19"
        d="M139.7 655.1c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st1"
        d="M139.7 643.4c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st24"
        d="M212.6 658.6h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
      />
      <image
        height={39}
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        transform="translate(173.94 655.341) scale(.8974)"
        width={39}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7lJREFUeNrsmOty2jAQhS1bhgBJ IKSd3tv3f6522qZJ0xDCzQa7UuYsc7qVg0xo8yeeOWNg7OXTrna1UpI8X8/Xoy7z5AYC9oz6XkNy 1f8b0ATEtmsFWQeg/xmgfz9tUKKAKqUoUHMgMOuU4+6VEaSH2TitSRtIwx4E0BCUgB1BXagDyAQg pdNKqSDgRo/aPeFyqOfUdzp2OoH6gM3xjsDNne6cZpD/vgBogYH8lUh2T7guQE6dzpzG0IggGXAO qFunidMN5L9PYbugsG8h7R5h9eEbAOal02unV/g8BnQPzyX44yW85+F+OV06XeGe4/cZPF23BRS4 DMb6gPNQ75zeO73F9zN4sEe21xRi77FrPHeKqWBVvazhyfvfbIsaZ/HH3vALwH1y+ghA78EhBsBJ UiHMS3hpBBsDPJcSlGgLG+tBi3k3QBjFex7uA8I8QrJ08XyqPNLH+wOaAhkNQJKlpLlobIT3JLxd hG8MIO+1N4A9B9wRwemVJAdUTs9U5FnJ8AUljLEtMlfCe45wSmKcEVxHwXHZSKmAC9wKYDdIHsns BeZuY4iN8qAAngDoHJ4cImRdPJM1wOl1usZ7Q0wNSZq+miKbNCLEUloEcKgm+kNwSaCByGhO9+D9 Y9g6Ilv3kUgjQ9whYye469GaCFtycdni5THX9mIA9Yj7lIWWPGdaFH1OPhtoMrYeTyP6OzaUN4y0 DZy+m4Adw65uuuqGDrg+QLvGtkMtVx0DyAaknyuhtar6+0LqXnGjWy/7wOjYiLRMC2qTlspoTKhr BSYryIpWEe4Pozy4wcsLFNUpNAdkqUa+66oAIV3OnLSiQd8PJjbEJQCnqpeTFikGUntOWjDpEacE ue0LbUsP3mJJ+klLXIcikTeUHQmteE5arxu0X9eqJ1zLO1nLusWlpkMdiQnsgXkHt1at/y0a1m9O X6DvAJ1Rs/AgYGgTzru4UMdSBTKzoASTxuBSwX3FbxM8V8p0yZL9rzpQfgqaX0tqpWb4c++hC4L7 jPsFps4f3muzJ5H5syDPVTA2o72GbJpk0U8bkuwKUD6sPyi0K51sNrLiJ5Qs7L2lCtuIGomcBsKA EyQZJ8dU1dVW285a1bCCgGXST+AV3hfzZogTZErbzTsq+qXadrZeS01DRnfpZKGn+sNU1T5JFoEq 6ISh0nD7LPac2Wmg08kDbVNoPV+rY48g3GPOZpIAaOh0ywTqIidBteuE6zHHb029nWnYl+izwagz wkMdYO76nDT1e09xBBxTDaKv3wIMAJadtz/91gOpAAAAAElFTkSuQmCC"
      />
      <circle
        className="st1"
        cx={191.8}
        cy={673.1}
        r={10.9}
      />
      <circle
        className="st27"
        cx={191.8}
        cy={672.9}
        r={8}
      />
      <text
        className="st10 st8 st49"
        transform="translate(178.559 709.83)">
        {"P-002"}
      </text>
      <path
        className="st24"
        d="M212.6 580.1h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
      />
      <image
        height={39}
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        transform="translate(173.94 576.862) scale(.8974)"
        width={39}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA6tJREFUeNrsmOtS2zAQhSNbwcGE JkApZdpp3/+5epuStIRcyMWxVYU5O3PYyolsCv1DZs4QEkf+vNLuHqnTeX29vv7vy7zQuK7tQPYZ oIwCDMG5lwQ0pKQG0BFU1QTU/AOwhJRCCV1TAaTE+5I+qw6BtgXUUF0lAZWIbaENvd/iu2ofqH0C 3O63R1DPK8ffHj6TsUuArZTWXgVAyzpI2xJuF6UMUH2vN9Cp14nXMa7pAGIHtPCaQzP8f4/vNhTR R5C2JVwPYEOvC9IQkDmi2MHNlwC6g3573XpNvKYAlYg+grQtprUHiHOvd17XXu/x/gyRzGsiKHAj rxuKdEL3KiiJogAlW1NEJQfIDuoj9IEA+3gIXoNrRHGKyJ3hIeU6Q6VI4B4+sw1KSRdwA69LQH32 +oQovlXRS+mmBSAH0ClFz1Cml6oMudgISsaeYGqvACjRu8L6yymDDa2lCpA5wHo0tZzla5UwxkZG L6W1dwGga4inNqNCbVQnsYCy9ABbTL1k9pwSpoydYpneY0zhOab4ErADRDZTC96okpGoVlgiajOs y1+QjFPsi6AJJIcAngHsnNacTGsS6E5GVYMuoHP8fkjrUsaSWShtRPRSShApynpAi+tMRN/nLiQd SIp7Rgn28LBJRJKkNNiJ6hYcuSYmQx6c2+WRhosBNIEn5iy0am01cU9GOaDgWMmB9WeUa7GktAFY jJcMuqt9EXQBw+nIHrmnWHmyYlqPxk1qwJwqsiX5uY2ySW1BK+ogBVQqSHcoguKEpeHfK5tUUNWP geQxt4EO8td4ScSAFVmmORr+FKCrwJMfGo/hlnjYOcZb0nhRvZgjeA+wCXSHkpNRDdQlR7e7SsHN ySPOcA/uxS5tkGlSajIqN9zeTMCyO7WOxdUs0N52nvC71xf8HQNUenGVRoCFimuX6mBaE6mK7BOv N4EbAeor9BNmdoFryyYRDLkbo5aBBiooYgI2JUctcLvo/UD0prh2G+tmdKIslF1iRzJFjxbbJetR 1t2K1twYUN8AOlJwVeymyam97Row4oLXuOkEkRnWuOUCSTHDtWOsvxvATShByqZ7EoYs1LSuCHCk 7DzvNQqVtbdqV7dQ0XNtThaM2nqyXeqTcuWseU+ypL2xuOclFelKnd00bvQh89Cl0pMFSg/X0g0l De8/yhBc27MZE8jokNMxBKgzXO/gartQW6tkak64Dh3BadfybKdbIdCQv+vUnBO6lzgf3OeUOwdO VaPt2R8BBgA0KqoDzBFWgwAAAABJRU5ErkJggg=="
      />
      <circle
        className="st1"
        cx={191.8}
        cy={594.6}
        r={10.9}
      />
      <circle
        className="st27"
        cx={191.8}
        cy={594.4}
        r={8}
      />
      <text
        className="st10 st8 st49"
        transform="translate(178.559 631.351)">
        {"P-001"}
      </text>
      <circle
        className="st55"
        cx={330.5}
        cy={1021.5}
        r={9.2}
      />
      <path
        className="st19"
        d="M1344.3 870.9c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
      />
      <path
        className="st1"
        d="M1356 870.9c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <path
        className="st19"
        d="M496.9 1039.9c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
      />
      <path
        className="st1"
        d="M508.6 1039.9c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <path
        className="st19"
        d="M1254.2 1379.5c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
      />
      <path
        className="st1"
        d="M1265.9 1379.5c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <path
        className="st16"
        d="M201.4 1775h-24.3c-2.8 0-5-2.3-5-5v-68.4c0-3.5 2.8-6.3 6.3-6.3h23M233.3 1671.1h24.3c2.8 0 5 2.3 5 5v68.4c0 3.5-2.8 6.3-6.3 6.3h-23"
      />
      <path
        className="st24"
        d="M233.4 1745.2H216c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
      />
      <image
        height={39}
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        transform="translate(194.713 1741.974) scale(.8974)"
        width={39}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA79JREFUeNrsmAlT2zAQhS1b5Cbl KvSg/P//1dKDUpIQEpzYsSszb5nHjpzIBqadTjPzxgFs8Wl3tXpyFP3//OMf88pjVt9L6I8CGrru AmwEbF4AjBWrnxmooO9lKKh5ZsRiUqIk9xTQhlR4oF8MkKNlAdOB9nC1+LsA5k6Z0xrXDL8T4NqI 2pZwCZ7tQgNSH7+TsXOA3SulBJxjIpGGtC3hqij1nIZO+04HTm+cxk4jQO7h/jVgFk5z6BbXO8Cu KKJPIG1LuD7ADp3eQsf4eYxIdvCsRO8OYBOnG6df+D7F31Lc/wTStkhrDxAV0DunD07vnc4IsA/A EpGRCM4Ad0X3cb1GBBkEaBRgFyk8AtSF0yenj06nSPUQk0jon3EUJ7hvn2rV1LWj0BQnqKkBBq9g zgF4AdhjRKWHe3kVb1BnY4CNcB8vpEwtmGIXILcTHb0zpPYc11MsEkltohp1gef7AOPIZSiBlFZ2 HgIYUTPWtXdGdXcCuCHB6ZoqqYalkZeAWdLKvkWtpoA0NqD2YqSsD8BDQJ0gmrxqLW13DKe3wogW zxyTvoa6+H9VZAsbED1pLQNqLUe47lNafXA+d2ORvj5KZowMjFSJPIwVN+x9MqBuyEkNXJ3jkUUn dalr83GsOKDNSIpl5xgimpIKGzCOb0yp7T21h/NkvRE0ntlaNeOuJ3ImEM7XIZIaqxbFDQdjaxU3 jJxe1T7zavReHAcMwt6tUH6utZVXO4f2iY/3xFseZLMpnX5FetJQW0ROwDKPR3wcMw6Y4YYs0xL7 6UJ1/Q35uV0fAcsx0ZQsl550GQfMuMDsluj0M1zFy61r0rMtpWxiFxhLxst4wjYAkN3IHP7tBs1a HEmimrvZMpaUyoL84YS2OTGvDxNKGvpBaTU9qEPOJfZES0cto+2tgvrhdOn0xekbTOycIIskACzy 9Cxp0FZFy7fieYHd18BdwsROUUpSNkERrOuJOnUCk9NhaA0wWVxTREngPkMcvZQPUaGGdUMLxZJd yhGVW7ibA2VGY0rvPUFWruU7IL/WwJWhiyQie7TCQJLGFdn4azicEfZqOdVJF+BFJtbqCgtOUpvx eSQ0gqU6gKeU1pSi8pNsU48ASwKUg9MU1xmeX/LCYMAmbxb0G4UO2bABOR32h4ZKYUWnuwWg5ACf 1e1KTV99aOOQkFXqEjR7Om72vHDWlNLaRt/23UzkAU3Imvls/8ajYpfxeM7rNw3qO3cYjyvyvYp7 1ReYpqaxb3NJwVbtpV8Bmy1jP9c//p2f3wIMAJhZr8nhAav3AAAAAElFTkSuQmCC"
      />
      <circle
        className="st1"
        cx={212.6}
        cy={1759.7}
        r={10.9}
      />
      <circle
        className="st27"
        cx={212.6}
        cy={1759.5}
        r={8}
      />
      <text
        className="st10 st8 st49"
        transform="translate(199.33 1799.464)">
        {"P-004"}
      </text>
      <path
        className="st24"
        d="M233.4 1666.8H216c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
      />
      <image
        height={39}
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        transform="translate(194.713 1663.495) scale(.8974)"
        width={39}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA6hJREFUeNrsmOty2jAQhSVfSAiQ 5k5v077/c7WdZFqShgTwjaDKM2c7pzsy2E5o/oSZMwYsy59Wu6uVjHn7vH1e92P32KdcHfSqgFaJ PxqwE7B9AbCIwCL6rYFqbdTV7QtQA9VKvGK68hQ/QWtcN0ruJQGtgqo18DqABgRpAFB5lUoVgTda 1PaEq1+eAmjodeQ19hrh+wHuG1it8Mq8ll4rKMP/JdoErZn0hBsQ1DuvU68TfJ/gngBWgFl4PXo9 eN3j+gjYHO2MhkyeAVfDnHtdeU29LrzOvI5xf4BnSwKce/32mkF3UARQoyGTjj6XYkpra116ffD6 BE1hyWO0YQsWmN45gH5SuwR9G0A6hkw65LcEvjWB5T56ffH6CsBLgI/QLqaUwtN8hnZjamdUVFd4 p2trQZnaEaxUW+sz4GrI93hxDX9IVnGUZsYkGURCgVSRZIpt0tJ6sbLeFBb8hGm+wJQdYmolD3KS HlA6GpCFC4psCRjJlzZp6X/iexNYagqrXVFgDOnFoeUuJkWwkvimRPYcbpDLDCQtrSeAxwA6h05o Wgf0cg2n12mH5zK4zBmywohyaLkrikOAE0CdKkdPG+B0VSPB5vDcCH1O0NdQ9WWjDgEyRCcTSsYH gbW3zbIa0RJ5CMlAE0prJmrpg9LRkVrOZN21HZZNqxK/rOdpYLA2alHbxWrtFbBUlVp9ilkGtYH7 rSzYBN4FzAQCR9eKoftbAbnI3FA9t1ZlknkGpAv0+0/1HW150CiwAvlJxGWS6wglA19TrVipgtZ1 sWAJqCVKpAWyPheemw6QT1REZFCO39zfzrWYO1sFMv6KUo3d4TYuALdEP1IbZhj0U9tyiy2YoZMa 8BbZf0wryLYA03A51Yd3qBHnAC7YdeIO6SHesv+I1IphVICJv/FAa7Abr+/QNQa+ICtu4pbVjGlI rnqLyRGvgyAnN7lVcD9QxN6jjfhhawuG4HU0rikSS0xVoYKrnspfBPcN1xtAyxT/Dbq2exKByOAr EVW+S9prcHWTqnY5Qc4Ada2mNtepK2mZ8Q1GVdD/khvlpVx+ya5OLC1ZQNreQjP8fsDg1312dZy0 DaAcAS/gOzPUi6NA2S97EvHBOa4PtEcudZLuunG3gR1eChjZvA8Dxasjv8wJdEUb96pp497nZMEG jj9SqnBSqoBMYFljrXed0fQ9m2k6QIoDJ1yuIQXt7fCoCbTNGWFIez/AtFsK0qYq6b8dYHbpr9cx 8B8BBgBdeanXWqiMcwAAAABJRU5ErkJggg=="
      />
      <circle
        className="st1"
        cx={212.6}
        cy={1681.3}
        r={10.9}
      />
      <circle
        className="st27"
        cx={212.6}
        cy={1681.1}
        r={8}
      />
      <text
        className="st10 st8 st49"
        transform="translate(199.33 1720.984)">
        {"P-003"}
      </text>
      <path
        className="st19"
        d="M162.4 1739.8c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st1"
        d="M162.4 1728.1c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <circle
        className="st33"
        cx={919.5}
        cy={1336}
        r={9.2}
      />
      <circle
        className="st33"
        cx={1102.8}
        cy={1336}
        r={9.2}
      />
      <path
        className="st17"
        d="M1187.9 1784.3h124.8v97.7h-124.8z"
      />
      <path
        className="st23"
        d="M1312.5 1768v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1V1768"
      />
      <text
        className="st10 st8 st49"
        transform="translate(1218.128 1903.517)">
        {"TK PERMEADO"}
      </text>
      <path
        className="st20"
        d="M1258 778.6h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6V777c0 .9-.7 1.6-1.6 1.6zM1242.8 782.5l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st20"
        d="m1258.4 793.1-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st0"
        d="M1250.6 777.6v10"
      />
      <path
        className="st26"
        d="M1241.6 769.6h18M1250.6 770.6v8"
      />
    </svg>
  );
}

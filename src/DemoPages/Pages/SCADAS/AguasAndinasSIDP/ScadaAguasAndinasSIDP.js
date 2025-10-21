import * as React from "react";
import {
  getColor,
  getColorConexion,
  getConexion,
  getScaledValue,
  getTarjetaClass,
  getTemaAlarma
} from "../../../../commons/scada/scada";

const ScadaAguasAndinasSIDP = (props) => {
  const {
    datosScada,
    datosAlarmas,
    loading,
    selected,
    loadGrafico,
    onClickAlarma
  } = props;

  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1429.5 2591.06"
      {...props}>
      <style>
        {
          ".tarjeta{fill:#ffffff}.tarjetaSeleccionada{fill:#3574e0;opacity:.15}.cursorPointer{cursor:pointer}.cursorNormal{cursor:default}.campana{fill:#3474E0;}.campana:hover{fill:#7c7c7c;}.campanaVacia{fill:#c2c2c1;}.campanaVacia:hover{fill:#7c7c7c;}.campanaDesconectada{fill:#c2c2c1;}"
        }
      </style>
      <defs>
        <clipPath id="a">
          <path
            fill="none"
            d="M1102.81 37.76h284.12v175.98h-284.12z"
          />
        </clipPath>
        <clipPath id="b">
          <path
            fill="none"
            d="M1102.81 37.76h284.12v175.97h-284.12z"
          />
        </clipPath>
        <clipPath id="c">
          <path
            fill="none"
            d="M38.77 37.69H267.8v121.2H38.77z"
          />
        </clipPath>
        <clipPath id="d">
          <path
            fill="none"
            d="M38.77 37.69H267.8v121.2H38.77z"
          />
        </clipPath>
        <clipPath id="e">
          <path
            fill="none"
            d="M1160.93 93.9h80.95v16.56h-80.95z"
          />
        </clipPath>
        <clipPath id="f">
          <path
            fill="none"
            d="M1160.93 113.9h75.49v16.56h-75.49z"
          />
        </clipPath>
        <clipPath id="g">
          <path
            fill="none"
            d="M1160.93 133.9h30.34v16.56h-30.34z"
          />
        </clipPath>
        <clipPath id="h">
          <path
            fill="none"
            d="M1160.93 153.9h66.95v16.56h-66.95z"
          />
        </clipPath>
        <clipPath id="i">
          <path
            fill="none"
            d="M1160.93 173.9h56.04v16.56h-56.04z"
          />
        </clipPath>
        <clipPath id="j">
          <path
            fill="none"
            d="M75.5 65.72h154.03V83H75.5z"
          />
        </clipPath>
        <clipPath id="k">
          <path
            fill="none"
            d="M109.29 113.63h67.06v20.98h-67.06z"
          />
        </clipPath>
        <clipPath id="l">
          <path
            fill="none"
            d="M176.35 113.63h12.21v20.98h-12.21z"
          />
        </clipPath>
        <clipPath id="m">
          <path
            fill="none"
            d="M67.53 102.82h35.89v38.59H67.53z"
          />
        </clipPath>
        <clipPath id="n">
          <path
            fill="none"
            d="M67.53 102.82h35.89v38.58H67.53z"
          />
        </clipPath>
        <clipPath id="o">
          <path
            fill="none"
            d="M1134.97 65.72h213.91V83h-213.91z"
          />
        </clipPath>
        <clipPath id="p">
          <path
            fill="none"
            d="M59.9 95.95h185.8v.5H59.9z"
          />
        </clipPath>
        <clipPath id="q">
          <path
            fill="none"
            d="M76.6 605.14h89.26v13.02H76.6z"
          />
        </clipPath>
        <clipPath id="r">
          <path
            fill="none"
            d="M1295.86 2541.84h79.86v13.01h-79.86z"
          />
        </clipPath>
        <clipPath id="s">
          <path
            fill="none"
            d="M444.95 2011.7h45.03v13.01h-45.03z"
          />
        </clipPath>
        <clipPath id="t">
          <path
            fill="none"
            d="M272.7 526.22h32.92v35.11H272.7z"
          />
        </clipPath>
        <clipPath id="u">
          <path
            fill="none"
            d="M272.7 526.22h32.92v35.11H272.7z"
          />
        </clipPath>
        <clipPath id="v">
          <path
            fill="none"
            d="M272.71 526.22h32.92v35.11h-32.92z"
          />
        </clipPath>
        <clipPath id="x">
          <path
            fill="none"
            d="M281.6 535.9h16v16h-16z"
          />
        </clipPath>
        <clipPath id="y">
          <path
            fill="none"
            d="M275.03 574.4h36.71v13.01h-36.71z"
          />
        </clipPath>
        <clipPath id="z">
          <path
            fill="none"
            d="M272.7 443.69h32.92v35.11H272.7z"
          />
        </clipPath>
        <clipPath id="A">
          <path
            fill="none"
            d="M272.7 443.69h32.92v35.11H272.7z"
          />
        </clipPath>
        <clipPath id="B">
          <path
            fill="none"
            d="M272.71 443.69h32.92v35.11h-32.92z"
          />
        </clipPath>
        <clipPath id="C">
          <path
            fill="none"
            d="M281.6 453.4h16v16h-16z"
          />
        </clipPath>
        <clipPath id="D">
          <path
            fill="none"
            d="M275.03 491.87h29.35v13.02h-29.35z"
          />
        </clipPath>
        <clipPath id="E">
          <path
            fill="none"
            d="M272.7 611.73h32.92v35.11H272.7z"
          />
        </clipPath>
        <clipPath id="F">
          <path
            fill="none"
            d="M272.7 611.73h32.92v35.11H272.7z"
          />
        </clipPath>
        <clipPath id="G">
          <path
            fill="none"
            d="M272.71 611.73h32.92v35.11h-32.92z"
          />
        </clipPath>
        <clipPath id="H">
          <path
            fill="none"
            d="M281.6 621.4h16v16h-16z"
          />
        </clipPath>
        <clipPath id="I">
          <path
            fill="none"
            d="M187.16 1276.41h32.92v35.11h-32.92z"
          />
        </clipPath>
        <clipPath id="J">
          <path
            fill="none"
            d="M187.16 1276.41h32.92v35.11h-32.92z"
          />
        </clipPath>
        <clipPath id="K">
          <path
            fill="none"
            d="M187.16 1276.41h32.92v35.11h-32.92z"
          />
        </clipPath>
        <clipPath id="L">
          <path
            fill="none"
            d="M196.06 1286.08h16v16h-16z"
          />
        </clipPath>
        <clipPath id="M">
          <path
            fill="none"
            d="M187.16 1408.45h32.92v35.11h-32.92z"
          />
        </clipPath>
        <clipPath id="N">
          <path
            fill="none"
            d="M187.16 1408.45h32.92v35.11h-32.92z"
          />
        </clipPath>
        <clipPath id="O">
          <path
            fill="none"
            d="M187.16 1408.44h32.92v35.11h-32.92z"
          />
        </clipPath>
        <clipPath id="P">
          <path
            fill="none"
            d="M196.06 1418.12h16v16h-16z"
          />
        </clipPath>
        <clipPath id="Q">
          <path
            fill="none"
            d="M275.03 659.91h36.69v13.01h-36.69z"
          />
        </clipPath>
        <clipPath id="R">
          <path
            fill="none"
            d="M185.65 1323.8h36.71v13.01h-36.71z"
          />
        </clipPath>
        <clipPath id="S">
          <path
            fill="none"
            d="M240.32 2049.82h32.92v35.11h-32.92z"
          />
        </clipPath>
        <clipPath id="T">
          <path
            fill="none"
            d="M240.32 2049.82h32.92v35.11h-32.92z"
          />
        </clipPath>
        <clipPath id="U">
          <path
            fill="none"
            d="M240.32 2049.82h32.92v35.11h-32.92z"
          />
        </clipPath>
        <clipPath id="V">
          <path
            fill="none"
            d="M248.3 2059.5h16v16h-16z"
          />
        </clipPath>
        <clipPath id="W">
          <path
            fill="none"
            d="M245.44 2098h29.35v13.01h-29.35z"
          />
        </clipPath>
        <clipPath id="X">
          <path
            fill="none"
            d="M185.65 1455.35h36.69v13.01h-36.69z"
          />
        </clipPath>
        <clipPath id="Y">
          <path
            fill="none"
            d="M1130.2 2001.98h191.32v118.53H1130.2z"
          />
        </clipPath>
        <clipPath id="Z">
          <path
            transform="rotate(-89.8 1225.784 2061.228)"
            fill="none"
            d="M1166.91 1965.8h117.9v190.9h-117.9z"
          />
        </clipPath>
        <clipPath id="aa">
          <path
            transform="rotate(-89.8 1225.794 2061.228)"
            fill="none"
            d="M1166.91 1965.8h117.9v190.9h-117.9z"
          />
        </clipPath>
        <clipPath id="ac">
          <path
            fill="none"
            d="M1153.38 2011.21h138.63v97.57h-138.63z"
          />
        </clipPath>
        <clipPath id="ad">
          <path
            fill="none"
            d="M1214.58 2040.19h20.28v15.45h-20.28z"
          />
        </clipPath>
        <clipPath id="ae">
          <path
            fill="none"
            d="M1204.1 2055.7h41.23v15.52h-41.23z"
          />
        </clipPath>
        <clipPath id="af">
          <path
            fill="none"
            d="M1209.11 2082.73h31.21v19.03h-31.21z"
          />
        </clipPath>
        <clipPath id="ag">
          <path
            fill="none"
            d="M1265.45 2083.48h16.67v15.43h-16.67z"
          />
        </clipPath>
        <clipPath id="ah">
          <path
            fill="none"
            d="M1208.17 2022.24h33.09v13.13h-33.09z"
          />
        </clipPath>
        <clipPath id="ai">
          <path
            fill="none"
            d="M806.29 1894.44h192.47v118.53H806.29z"
          />
        </clipPath>
        <clipPath id="aj">
          <path
            transform="rotate(-89.8 902.437 1953.668)"
            fill="none"
            d="M843.58 1857.68h117.9v192.05h-117.9z"
          />
        </clipPath>
        <clipPath id="ak">
          <path
            transform="rotate(-89.8 902.437 1953.668)"
            fill="none"
            d="M843.58 1857.68h117.9v192.05h-117.9z"
          />
        </clipPath>
        <clipPath id="al">
          <path
            fill="none"
            d="M830.66 1903.61h138.63v97.57H830.66z"
          />
        </clipPath>
        <clipPath id="am">
          <path
            fill="none"
            d="M875.38 1934.7h59.32v15.58h-59.32z"
          />
        </clipPath>
        <clipPath id="an">
          <path
            fill="none"
            d="M884.43 1950.2h41.23v15.52h-41.23z"
          />
        </clipPath>
        <clipPath id="ao">
          <path
            fill="none"
            d="M884.42 1975.19h31.21v19.03h-31.21z"
          />
        </clipPath>
        <clipPath id="ap">
          <path
            fill="none"
            d="M928.6 1975.94h28.96v15.48H928.6z"
          />
        </clipPath>
        <clipPath id="aq">
          <path
            fill="none"
            d="M887.6 1914.71h34.89v13.13H887.6z"
          />
        </clipPath>
        <clipPath id="ar">
          <path
            fill="none"
            d="M1240.37 452.54h33.03v13.01h-33.03z"
          />
        </clipPath>
        <clipPath id="as">
          <path
            fill="none"
            d="M1240.37 609h33.03v13.01h-33.03z"
          />
        </clipPath>
        <clipPath id="at">
          <path
            fill="none"
            d="M1176.42 1667.77h33.03v13.01h-33.03z"
          />
        </clipPath>
        <clipPath id="au">
          <path
            fill="none"
            d="M660.19 1865.63h33.03v13.01h-33.03z"
          />
        </clipPath>
        <clipPath id="av">
          <path
            fill="none"
            d="M97.99 2072.93h33.03v13.01H97.99z"
          />
        </clipPath>
        <clipPath id="aw">
          <path
            fill="none"
            d="M598.83 666.82h56.27v13.01h-56.27z"
          />
        </clipPath>
        <clipPath id="ax">
          <path
            fill="none"
            d="M719.98 666.82h51.96v13.01h-51.96z"
          />
        </clipPath>
        <clipPath id="ay">
          <path
            fill="none"
            d="M1324.65 1137.81h61.75v13.01h-61.75z"
          />
        </clipPath>
        <clipPath id="az">
          <path
            fill="none"
            d="M1117.67 1137.81h92.95v13.01h-92.95z"
          />
        </clipPath>
        <clipPath id="aA">
          <path
            fill="none"
            d="M978.36 1137.81h76.44v13.01h-76.44z"
          />
        </clipPath>
        <clipPath id="aB">
          <path
            fill="none"
            d="M516.1 1150.97h157.99v142.67H516.1z"
          />
        </clipPath>
        <clipPath id="aC">
          <path
            fill="none"
            d="M516.11 1150.97H674.1v142.67H516.11z"
          />
        </clipPath>
        <clipPath id="aE">
          <path
            fill="none"
            d="M528.33 1170.3h138.1v99.8h-138.1z"
          />
        </clipPath>
        <clipPath id="aF">
          <path
            fill="none"
            d="M537.7 1204.99h125.73v15.38H537.7z"
          />
        </clipPath>
        <clipPath id="aG">
          <path
            fill="none"
            d="M552.43 1220.59h91.77v15.38h-91.77z"
          />
        </clipPath>
        <clipPath id="aH">
          <path
            fill="none"
            d="M577.29 1247.73h40.04v18.93h-40.04z"
          />
        </clipPath>
        <clipPath id="aI">
          <path
            fill="none"
            d="M563.41 1186.86H638v13.01h-74.59z"
          />
        </clipPath>
        <clipPath id="aJ">
          <path
            fill="none"
            d="M635.54 1249.91h18.97v15.38h-18.97z"
          />
        </clipPath>
        <clipPath id="aK">
          <path
            fill="none"
            d="M845.89 1700.63h157.99v142.67H845.89z"
          />
        </clipPath>
        <clipPath id="aL">
          <path
            fill="none"
            d="M845.89 1700.63h157.99v142.67H845.89z"
          />
        </clipPath>
        <clipPath id="aM">
          <path
            fill="none"
            d="M845.89 1700.63h157.99v142.67H845.89z"
          />
        </clipPath>
        <clipPath id="aO">
          <path
            fill="none"
            d="M853.61 1724.18h138.1v99.8h-138.1z"
          />
        </clipPath>
        <clipPath id="aP">
          <path
            fill="none"
            d="M858.55 1754.66h125.73v15.38H858.55z"
          />
        </clipPath>
        <clipPath id="aQ">
          <path
            fill="none"
            d="M872.13 1770.26h97.58v15.38h-97.58z"
          />
        </clipPath>
        <clipPath id="aR">
          <path
            fill="none"
            d="M907.08 1797.39h40.04v18.92h-40.04z"
          />
        </clipPath>
        <clipPath id="aS">
          <path
            fill="none"
            d="M883.99 1736.8h74.59v13.01h-74.59z"
          />
        </clipPath>
        <clipPath id="aT">
          <path
            fill="none"
            d="M960.32 1799.58h18.97v15.38h-18.97z"
          />
        </clipPath>
        <clipPath id="aU">
          <path
            fill="none"
            d="M1007.67 1229.97h157.99v142.67h-157.99z"
          />
        </clipPath>
        <clipPath id="aV">
          <path
            fill="none"
            d="M1007.67 1229.97h157.99v142.67h-157.99z"
          />
        </clipPath>
        <clipPath id="aW">
          <path
            fill="none"
            d="M1019.9 1249.35H1158v99.8h-138.1z"
          />
        </clipPath>
        <clipPath id="aX">
          <path
            fill="none"
            d="M1056.21 1291.41h72.26v15.37h-72.26z"
          />
        </clipPath>
        <clipPath id="aY">
          <path
            fill="none"
            d="M1068.86 1326.73h40.03v18.93h-40.03z"
          />
        </clipPath>
        <clipPath id="aZ">
          <path
            fill="none"
            d="M1077.46 1265.86h33.05v13.02h-33.05z"
          />
        </clipPath>
        <clipPath id="ba">
          <path
            fill="none"
            d="M1127.1 1328.92h16.62v15.37h-16.62z"
          />
        </clipPath>
        <clipPath id="bb">
          <path
            fill="none"
            d="M1176.42 1229.97h157.99v142.67h-157.99z"
          />
        </clipPath>
        <clipPath id="bc">
          <path
            fill="none"
            d="M1176.42 1229.97h157.99v142.67h-157.99z"
          />
        </clipPath>
        <clipPath id="bd">
          <path
            fill="none"
            d="M1188.6 1249.35h138.1v99.8h-138.1z"
          />
        </clipPath>
        <clipPath id="be">
          <path
            fill="none"
            d="M1220.2 1291.41h77.31v15.37h-77.31z"
          />
        </clipPath>
        <clipPath id="bf">
          <path
            fill="none"
            d="M1233.68 1326.73h40.04v18.93h-40.04z"
          />
        </clipPath>
        <clipPath id="bg">
          <path
            fill="none"
            d="M1240.36 1265.86h33.04v13.02h-33.04z"
          />
        </clipPath>
        <clipPath id="bh">
          <path
            fill="none"
            d="M1283.1 1328.92h36.84v15.37h-36.84z"
          />
        </clipPath>
        <clipPath id="bi">
          <path
            fill="none"
            d="M1127.1 2257.48h194.42v118.53H1127.1z"
          />
        </clipPath>
        <clipPath id="bj">
          <path
            transform="rotate(-89.79 1224.43 2316.779)"
            fill="none"
            d="M1165.36 2219.75h117.9v193.99h-117.9z"
          />
        </clipPath>
        <clipPath id="bk">
          <path
            transform="rotate(-89.79 1224.446 2316.784)"
            fill="none"
            d="M1165.36 2219.75h117.9v193.99h-117.9z"
          />
        </clipPath>
        <clipPath id="bl">
          <path
            fill="none"
            d="M1153.37 2266.7h138.64v97.57h-138.64z"
          />
        </clipPath>
        <clipPath id="bm">
          <path
            fill="none"
            d="M1183.14 2295.32h82.44v15.66h-82.44z"
          />
        </clipPath>
        <clipPath id="bn">
          <path
            fill="none"
            d="M1203.74 2310.83h41.23v15.52h-41.23z"
          />
        </clipPath>
        <clipPath id="bo">
          <path
            fill="none"
            d="M1205.29 2338.23h31.2v19.03h-31.2z"
          />
        </clipPath>
        <clipPath id="bp">
          <path
            fill="none"
            d="M1246.53 2338.98h36.9v15.5h-36.9z"
          />
        </clipPath>
        <clipPath id="bq">
          <path
            fill="none"
            d="M1207.81 2277.38h33.09v13.13h-33.09z"
          />
        </clipPath>
        <clipPath id="br">
          <path
            fill="none"
            d="M372.35 295.48h157.99v142.67H372.35z"
          />
        </clipPath>
        <clipPath id="bs">
          <path
            fill="none"
            d="M372.35 295.48h157.99v142.67H372.35z"
          />
        </clipPath>
        <clipPath id="bt">
          <path
            fill="none"
            d="M372.35 295.48h157.99v142.67H372.35z"
          />
        </clipPath>
        <clipPath id="bu">
          <path
            fill="none"
            d="M384.6 314.8h138.1v99.8H384.6z"
          />
        </clipPath>
        <clipPath id="bv">
          <path
            fill="none"
            d="M411.13 346.26h91.78v15.37h-91.78z"
          />
        </clipPath>
        <clipPath id="bw">
          <path
            fill="none"
            d="M415.52 361.86h85.26v15.37h-85.26z"
          />
        </clipPath>
        <clipPath id="bx">
          <path
            fill="none"
            d="M433.54 392.24h40.04v18.92h-40.04z"
          />
        </clipPath>
        <clipPath id="by">
          <path
            fill="none"
            d="M440.27 328.12h32.41v13.02h-32.41z"
          />
        </clipPath>
        <clipPath id="bz">
          <path
            fill="none"
            d="M491.78 394.42h18.97v15.38h-18.97z"
          />
        </clipPath>
        <clipPath id="bA">
          <path
            fill="none"
            d="M375.89 475.66h157.99v142.67H375.89z"
          />
        </clipPath>
        <clipPath id="bB">
          <path
            fill="none"
            d="M375.89 475.66h157.99v142.67H375.89z"
          />
        </clipPath>
        <clipPath id="bC">
          <path
            fill="none"
            d="M375.89 475.66h157.99v142.67H375.89z"
          />
        </clipPath>
        <clipPath id="bD">
          <path
            fill="none"
            d="M383.6 499.2h138.1V599H383.6z"
          />
        </clipPath>
        <clipPath id="bE">
          <path
            fill="none"
            d="M415 529.69h83.83v15.37H415z"
          />
        </clipPath>
        <clipPath id="bF">
          <path
            fill="none"
            d="M393.26 545.29h119.22v15.37H393.26z"
          />
        </clipPath>
        <clipPath id="bG">
          <path
            fill="none"
            d="M437.08 572.42h40.04v18.93h-40.04z"
          />
        </clipPath>
        <clipPath id="bH">
          <path
            fill="none"
            d="M439.32 511.56h33.04v13.01h-33.04z"
          />
        </clipPath>
        <clipPath id="bI">
          <path
            fill="none"
            d="M487.1 574.61h25.29v15.37H487.1z"
          />
        </clipPath>
        <clipPath id="bJ">
          <path
            fill="none"
            d="M1119.33 784.87h157.99v142.67h-157.99z"
          />
        </clipPath>
        <clipPath id="bK">
          <path
            fill="none"
            d="M1119.33 784.87h157.99v142.67h-157.99z"
          />
        </clipPath>
        <clipPath id="bL">
          <path
            fill="none"
            d="M1131.5 804.19h138.1v99.8h-138.1z"
          />
        </clipPath>
        <clipPath id="bM">
          <path
            fill="none"
            d="M1160.92 835.65H1238v15.38h-77.08z"
          />
        </clipPath>
        <clipPath id="bN">
          <path
            fill="none"
            d="M1176.42 851.25h50.56v15.38h-50.56z"
          />
        </clipPath>
        <clipPath id="bO">
          <path
            fill="none"
            d="M1180.52 881.63h40.04v18.93h-40.04z"
          />
        </clipPath>
        <clipPath id="bP">
          <path
            fill="none"
            d="M1184.43 817.52h33.04v13.01h-33.04z"
          />
        </clipPath>
        <clipPath id="bQ">
          <path
            fill="none"
            d="M1238.77 883.82h19.5v15.37h-19.5z"
          />
        </clipPath>
        <clipPath id="bR">
          <path
            fill="none"
            d="M646.73 963.49h157.99v142.66H646.73z"
          />
        </clipPath>
        <clipPath id="bS">
          <path
            fill="none"
            d="M646.73 963.49h157.99v142.67H646.73z"
          />
        </clipPath>
        <clipPath id="bT">
          <path
            fill="none"
            d="M646.73 963.49h157.99v142.67H646.73z"
          />
        </clipPath>
        <clipPath id="bU">
          <path
            fill="none"
            d="M654.45 987.03h138.1v99.8h-138.1z"
          />
        </clipPath>
        <clipPath id="bV">
          <path
            fill="none"
            d="M693.61 1013.05h72.98v15.38h-72.98z"
          />
        </clipPath>
        <clipPath id="bW">
          <path
            fill="none"
            d="M707.91 1060.25h40.04v18.92h-40.04z"
          />
        </clipPath>
        <clipPath id="bX">
          <path
            fill="none"
            d="M766.16 1062.43h14.59v15.38h-14.59z"
          />
        </clipPath>
        <clipPath id="bY">
          <path
            fill="none"
            d="M805.45 784.87h157.99v142.67H805.45z"
          />
        </clipPath>
        <clipPath id="bZ">
          <path
            fill="none"
            d="M805.45 784.87h157.99v142.67H805.45z"
          />
        </clipPath>
        <clipPath id="ca">
          <path
            fill="none"
            d="M817.69 804.19h138.1v99.8h-138.1z"
          />
        </clipPath>
        <clipPath id="cb">
          <path
            fill="none"
            d="M854.24 835.65h62.88v15.38h-62.88z"
          />
        </clipPath>
        <clipPath id="cc">
          <path
            fill="none"
            d="M847.22 851.25h74.45v15.38h-74.45z"
          />
        </clipPath>
        <clipPath id="cd">
          <path
            fill="none"
            d="M866.64 881.63h40.04v18.93h-40.04z"
          />
        </clipPath>
        <clipPath id="ce">
          <path
            fill="none"
            d="M870.56 817.52h34.85v13.01h-34.85z"
          />
        </clipPath>
        <clipPath id="cf">
          <path
            fill="none"
            d="M924.88 883.82h18.97v15.37h-18.97z"
          />
        </clipPath>
        <clipPath id="cg">
          <path
            fill="none"
            d="M449.24 704.14h157.99v142.67H449.24z"
          />
        </clipPath>
        <clipPath id="ch">
          <path
            fill="none"
            d="M449.24 704.14h157.99v142.67H449.24z"
          />
        </clipPath>
        <clipPath id="ci">
          <path
            fill="none"
            d="M461.5 723.46h138.1v99.8H461.5z"
          />
        </clipPath>
        <clipPath id="cj">
          <path
            fill="none"
            d="M500.47 743.48h65.03v15.38h-65.03z"
          />
        </clipPath>
        <clipPath id="ck">
          <path
            fill="none"
            d="M489.63 759.08h86.69v15.38h-86.69z"
          />
        </clipPath>
        <clipPath id="cl">
          <path
            fill="none"
            d="M510.43 793.92h40.04v18.92h-40.04z"
          />
        </clipPath>
        <clipPath id="cm">
          <path
            fill="none"
            d="M568.67 796.1h18.97v15.38h-18.97z"
          />
        </clipPath>
        <clipPath id="cn">
          <path
            fill="none"
            d="M371.21 1401.96H529.2v142.67H371.21z"
          />
        </clipPath>
        <clipPath id="co">
          <path
            fill="none"
            d="M371.21 1401.96H529.2v142.67H371.21z"
          />
        </clipPath>
        <clipPath id="cp">
          <path
            fill="none"
            d="M371.21 1401.96H529.2v142.67H371.21z"
          />
        </clipPath>
        <clipPath id="cq">
          <path
            fill="none"
            d="M378.9 1425.5H517v99.8H378.9z"
          />
        </clipPath>
        <clipPath id="cr">
          <path
            fill="none"
            d="M417.13 1452.74h62.15v15.38h-62.15z"
          />
        </clipPath>
        <clipPath id="cs">
          <path
            fill="none"
            d="M421.45 1468.34h50.56v15.38h-50.56z"
          />
        </clipPath>
        <clipPath id="ct">
          <path
            fill="none"
            d="M432.4 1498.72h40.04v18.93H432.4z"
          />
        </clipPath>
        <clipPath id="cu">
          <path
            fill="none"
            d="M432 1434.61h32.41v13.01H432z"
          />
        </clipPath>
        <clipPath id="cv">
          <path
            fill="none"
            d="M489.63 1500.91h18.97v15.37h-18.97z"
          />
        </clipPath>
        <clipPath id="cw">
          <path
            fill="none"
            d="M663.66 1406.24h175.45v139.71H663.66z"
          />
        </clipPath>
        <clipPath id="cx">
          <path
            fill="none"
            d="M663.66 1406.24h175.45v139.71H663.66z"
          />
        </clipPath>
        <clipPath id="cy">
          <path
            fill="none"
            d="M663.66 1406.24h175.45v139.71H663.66z"
          />
        </clipPath>
        <clipPath id="cz">
          <path
            fill="none"
            d="M680.48 1416.18h131.3v115.74h-131.3z"
          />
        </clipPath>
        <clipPath id="cA">
          <path
            fill="none"
            d="M706.76 1455.09h77.32v15.38h-77.32z"
          />
        </clipPath>
        <clipPath id="cB">
          <path
            fill="none"
            d="M726.36 1470.69h40.47v15.38h-40.47z"
          />
        </clipPath>
        <clipPath id="cC">
          <path
            fill="none"
            d="M729.07 1499.77h40.04v18.93h-40.04z"
          />
        </clipPath>
        <clipPath id="cD">
          <path
            fill="none"
            d="M730.28 1430.63h32.41v13.01h-32.41z"
          />
        </clipPath>
        <clipPath id="cE">
          <path
            fill="none"
            d="M784.39 1502.64h18.97v15.38h-18.97z"
          />
        </clipPath>
        <clipPath id="cF">
          <path
            fill="none"
            d="M1016.82 1495.36h157.99v142.67h-157.99z"
          />
        </clipPath>
        <clipPath id="cG">
          <path
            fill="none"
            d="M1016.82 1495.36h157.99v142.67h-157.99z"
          />
        </clipPath>
        <clipPath id="cH">
          <path
            fill="none"
            d="M1016.82 1495.36h157.99v142.67h-157.99z"
          />
        </clipPath>
        <clipPath id="cI">
          <path
            fill="none"
            d="M1028.99 1514.78h138.1v99.8h-138.1z"
          />
        </clipPath>
        <clipPath id="cJ">
          <path
            fill="none"
            d="M1068.62 1546.14h62.15v15.38h-62.15z"
          />
        </clipPath>
        <clipPath id="cK">
          <path
            fill="none"
            d="M1074.5 1561.74h51.31v15.38h-51.31z"
          />
        </clipPath>
        <clipPath id="cL">
          <path
            fill="none"
            d="M1078.01 1592.12h40.04v18.93h-40.04z"
          />
        </clipPath>
        <clipPath id="cM">
          <path
            fill="none"
            d="M1083.49 1528.01h32.41v13.01h-32.41z"
          />
        </clipPath>
        <clipPath id="cN">
          <path
            fill="none"
            d="M1136.26 1594.31h18.97v15.38h-18.97z"
          />
        </clipPath>
        <clipPath id="cO">
          <path
            fill="none"
            d="M191.43 964.7h157.99v142.67H191.43z"
          />
        </clipPath>
        <clipPath id="cP">
          <path
            fill="none"
            d="M191.43 964.7h157.99v142.67H191.43z"
          />
        </clipPath>
        <clipPath id="cQ">
          <path
            fill="none"
            d="M191.43 964.7h157.99v142.67H191.43z"
          />
        </clipPath>
        <clipPath id="cR">
          <path
            fill="none"
            d="M199.1 988.25h138.1v99.8H199.1z"
          />
        </clipPath>
        <clipPath id="cS">
          <path
            fill="none"
            d="M237.65 1022.52h74.45v30.98h-74.45z"
          />
        </clipPath>
        <clipPath id="cT">
          <path
            fill="none"
            d="M253.17 1022.52h43.36v15.38h-43.36z"
          />
        </clipPath>
        <clipPath id="cU">
          <path
            fill="none"
            d="M237.65 1038.12h74.45v15.38h-74.45z"
          />
        </clipPath>
        <clipPath id="cV">
          <path
            fill="none"
            d="M244.18 1061.46h40.04v18.92h-40.04z"
          />
        </clipPath>
        <clipPath id="cW">
          <path
            fill="none"
            d="M258.68 1004.39h33.04v13.01h-33.04z"
          />
        </clipPath>
        <clipPath id="cX">
          <path
            fill="none"
            d="M291.21 1063.64h36.84v15.38h-36.84z"
          />
        </clipPath>
        <clipPath id="cY">
          <path
            fill="none"
            d="M756.65 521.98h25.07v13.01h-25.07z"
          />
        </clipPath>
        <clipPath id="cZ">
          <path
            fill="none"
            d="M845.02 521.98h25.07v13.01h-25.07z"
          />
        </clipPath>
        <clipPath id="da">
          <path
            fill="none"
            d="M928.62 521.98h25.07v13.01h-25.07z"
          />
        </clipPath>
        <clipPath id="db">
          <path
            fill="none"
            d="M1012.22 521.98h25.07v13.01h-25.07z"
          />
        </clipPath>
        <clipPath id="dc">
          <path
            fill="none"
            d="M1095.82 521.98h25.07v13.01h-25.07z"
          />
        </clipPath>
        <clipPath id="dd">
          <path
            fill="none"
            d="M1130.2 2127.19h191.32v118.53H1130.2z"
          />
        </clipPath>
        <clipPath id="de">
          <path
            transform="rotate(-89.8 1225.782 2186.427)"
            fill="none"
            d="M1166.91 2091h117.9v190.9h-117.9z"
          />
        </clipPath>
        <clipPath id="df">
          <path
            transform="rotate(-89.8 1225.788 2186.432)"
            fill="none"
            d="M1166.91 2091h117.9v190.9h-117.9z"
          />
        </clipPath>
        <clipPath id="dg">
          <path
            fill="none"
            d="M1153.37 2136.41h138.64v97.57h-138.64z"
          />
        </clipPath>
        <clipPath id="dh">
          <path
            fill="none"
            d="M1182.78 2165.39h83.88v15.66h-83.88z"
          />
        </clipPath>
        <clipPath id="di">
          <path
            fill="none"
            d="M1179.9 2180.9h89.63v15.68h-89.63z"
          />
        </clipPath>
        <clipPath id="dj">
          <path
            fill="none"
            d="M1209.11 2207.94h31.21v19.03h-31.21z"
          />
        </clipPath>
        <clipPath id="dk">
          <path
            fill="none"
            d="M1258.82 2208.69h25.34v15.46h-25.34z"
          />
        </clipPath>
        <clipPath id="dl">
          <path
            fill="none"
            d="M1208.17 2147.45h33.09v13.13h-33.09z"
          />
        </clipPath>
        <clipPath id="dm">
          <path
            fill="none"
            d="M1020.21 1939.72h18.22v31.14h-18.22z"
          />
        </clipPath>
        <clipPath id="dn">
          <path
            fill="none"
            d="M1305.8 419.82h18.22v31.14h-18.22z"
          />
        </clipPath>
        <image
          id="w"
          width={45}
          height={48}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAwCAYAAACFUvPfAAAACXBIWXMAAA8SAAAPEgEhm/IzAAAFMUlEQVRoQ+2Ze3MaNxTFfwJj/I7rJm2Spv3+Hyxt6rSuHTu8Fhb1j6uDLvIuLDHxtDO+MxqxrFZ7dHTuQxBijPzfrLdtwH/RXkA/l72Afi57Af1cdrBtwDYLIWiOCMQY47LhfnQNIKjFGBfFeN2LYBNSWHhqcgkh9IuvYtHbRfGiBA4MYDl0I6gnM806uNDQlrDGoJ7Rc730eUkHwLAf0DIBKUEfYcD6ZB9aAnXq52QprEmrzfYBWkx5vfawuXsY6ANggAEHAzwHFml8DSxCCI98osn2ARrsxWJyAAxTO8BAD4DD1IMBrlKvNgOmIYQKW0Qr+/sALRn0MWCnwFnqh8AFBvY43QcDPMHATlP7CjwAo3Qt+XwX0JGs2SMM7CXwKl2/xcA3gZ4Bd8DY3RPQGS22FXRIQvPXGEg51YAM9gL4AfgZeJc+v8ZAn6ZxYEyOyKDvgb+Ac+A2ffcFGKc4P8OYDzHG5VbQLSFIkpDDSRaXwE8Y4PfAVfo8BE5SDwZinPobDOBhmquP7d4cY3yKOexKJltBt1ggv+AI0/CPwC/AB+DX1Iv1Q5rlUWE7cZ/GXmCLUxbVAmqcc3YCXaRWfRbDZ2RwH4DfUnuPMX+Rxg5Zjx5HGIOXmAOekhemMNgnh8YKqIOrG7pYCVxALjEZSMfvgDfYQs7JzKlBdlzVHYrp8hPtRMB2YYrJqdbgLib9+qxXgn6N6VmAz8gO6gGBAR5gOq3Sd5q7wpi/w1g+wZxWz+/MtM96evEZOWpcpfaKHKfb3qGFRNYXNcWev8Bit5LTatG7gg5k0xYPsYmPMaCnGDvSZ+2e9yYClN57aeyxe1YRpeeeD50OASmVzrEHlZJPMFbPMT0rxHnAkFksCyl9X7vrPrboN6mdpaZdHcQY606gnfmXqammGPCYlS7WthgtonzfmnN0Nc+K4vSQ9eSwK2j1bYD1rn4IoZs8nJWsKIoI7K4se2vTvL8fgN4ujgg5LC1dU/BfkDOXr866LkIHgwW5XFWZusqGsFv0gAzETzxKbYKFqyrdPyCHxk0mMAJcYfNMyPXJnF3TeDKxvMBkUKV2jyWDr+R6QgVOF/lpXp1mZuQMKNA6MNRA3DqpOzVD3nZt2QKbWLWxAEsiTRViaV5yXh4VmWXNGYHYheleCGEZY4wJv45TFXCNxea/gd+xGD3AZDEnl6QqlHQmPHTXktkYK1E/Ax9TP8JKV/lMBRx0AV1a6YwjTCK3wD/kAgmMnSZtaxf8cevBzaGDwQNu52KMyxBCp+jRtMXayoC9SJlMRb70eZ7643RPxVYPAzNJvRi9xlj+AzvJ3JIloiBQdwFdmtfeEmNDSaZPDoMVVvjck2tlH8d15OqlMdfAJ0xmnzDJ3ZEjUg0QY+yk6QhrDilpqBbRSfomXUt7E/IB9wyTjQc9wUAvMC1fA3+m/jMG+CHNv/DHvi6gS1N40nZVmBOJZZ3/vmDl5VvamR5jwO4xZm8wSdym50fkULeynUGnFa9WHUKYueuK7Jh3GNgbjGWdxJWOtRtKTmL2q2s6vUT/q0CnX019rG46nYcQVK6qDtFh95j1UlWOqLPfFNudCQZyjMuGMcba/SobsdfHTqC7WCq+VI35M9/VpucwdiU5OfiqfokxrkkDOjLdxdJuqNLzFZ8SSZvNWY/7HnAjuH2DLhuubzMxudr+TYPhGxyxzUoHlYUQNjLdtP3b7Mmgy9/6Gmwrc97cjgE0/tS7N3l8qxVV5KPP39URoRlAE1NPtb2BdoBLR9xosfhLrov9Cx6oNMf2mUVqAAAAAElFTkSuQmCC"
        />
        <image
          id="ab"
          width={164}
          height={147}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAACTCAYAAAAAyrJUAAAACXBIWXMAAAsSAAALEgHS3X78AAAKTklEQVR4Xu2bbW/bOhJGD+3ETm6TdHH3BVjs//9tC+wWvW3z6sQy98NwTEpxKmvr3I7d5wCEZVmWLOpoZkglKefMe5JSmo1tI46XnPNmbJspnI1tcADe13hxUqT3jpBCTEHpVIRCQopQvHsNqUHNyfPdmi9PrAnfXUhgPraBOGq6kc/DCakIedqMCTmJyaPslFLCJPP2DAzX9b6C+JXIwKa0XFrrQMYy+U7xfiRCptLOMAnnTfMfkFGE/NVwGTuqnFDlzEBOKW3g9cT6/ytkK+BZeT0vzQVttxWni0fARBVwXZovZ0xQbxveyJyjQqaUkofXkq6H8vn7ZWkL+lFSg5rTxuVyITvgBSvlOuBpsM5T+WZX2h4Vkq2HgEU7l++iWV4AvwEfyvtzJOSvwjBCroEVJuILcFdeH8v2HbD+0RqylWsBXFLl+wsm5xVwjYl5Tk3V+x5DHCceIWeYkM+YjA+YiJ8xQW+bbTYppc2uP8yYIovXjedUIS+Bf2FC3gAfy/oFVcjzV3sSp8QuIR+A+7J8gUXHJTWKZizzdjnnVbuzKUKCHfSMfs34Oybmx9Ku6Qu5eL0bcUJ01Om+DRYNH7BMucKi5LJ89lzW+UDH0/uWfYRcYF9eYLJdY+L9E/gH8Dfg72XZU/YlFk03aJR96iTqVA/l9QlL0Q9Yxvxctnui1pYvwDql5LKuc855HyEdD8tnmJw+sLmhirpLyItdOxMnwwtVSJdzQZ2jdgGvMDnvsRT+hEXI57KfBOwlpI+ivH68oI6or4C/Nu2KKqSHcAl52riQPmrOmGw++F2X9ffUqPmASbkuy9tpnH2EhBodF1Qhr7Ho6IOZG0zIy7LNHKsv9OjwtFnSf0SYyzqfIvRIeE31o52rbtteQvrG/lRmie3Uo+QFdYDjc5I+qFH9ePqcUetHFxJq5LykBimfo95O/1ADVkoppSlCev3Y1pDLZp0/tZlTZcxo2ufUaQeu/tpRZ2O8Leg/3Wvl3UbJfYVs/5JnPmi7ZBweUJwuHnigRrvWCc+YbQYdijlJSCc1r20bCto+x/aBjThdZrweJwwD1jn9iNlm1d53t0I2D6x7RSb1gO2fDyVq6m6NH/44zUP+Gvgo27Np17x3Wn9otvXt10CWLCIUElKEQkKKUEhIEQoJKUIhIUUoJKQIxRQhfd6ofTozZWJdiFGmCCnEuyMhRSgkpAiFhBShkJAiFBJShEJCilBISBEKCSlCISFFKCSkCIWEFKGQkCIUElKEQkKKUEhIEQoJKUIhIUUoJKQIhYQUoZCQIhQSUoRCQopQSEgRCgkpQiEhRSgkpAiFhBShkJAiFBJShEJCilBISBEKCSlCISFFKCSkCIWEFKGQkCIUElKEQkKKUEhIEQoJKUIhIUUoJKQIhYQUoZCQIhQSUoRCQopQSEgRCgkpQiEhRSgkpAiFhBShkJAiFBJShEJCilBISBEKCSlCISFFKCSkCIWEFKGQkCIUElKEQkKKUEhIEQoJKUIhIUUoJKQIhYQUoZCQIhQSUoRCQopQSEgRCgkpQiEhRSgkpAiFhBShkJAiFBJShEJCilBMETIDG6AD1k0T4mBMEVKId0dCilBISBEKCSlCISFFKCSkCIWEFKE484Wcc/bFdoOUUgJS89lwLrK3/Q4S4tQZBjZ/n7Hrn4D5oM2obsyBBdBthRwhs1u8TBWza5rvd8PpROFD31hjN/KxkKjn4n3U7Whr4GXw6gFt2xf7COlSeXRsWyukS+mftVH1mGlvqPZcfHnshtuU11boNuv458fMUMjWlbdkdFfafeR9hNy1c99xa7ofYPjjDh1Zfia7zmXshhvrh2Pvn7f6xNswSnb0HWm33VtI6Ju+Ap6AR+C5tLfMP1X2jXBjEfRUaMcgHrw6zAv344UqZKJm3u139xES6kHWmIyPwANwD9wBF8AHaud7EdsB58OdHRlz+lGuLcan4v3YXrzu7c2Pghmvz+mJGrDuME/uy/sVJqbfyJMjJNSOdNufqEJ+waS7oErbYRdyw+kIOStt3iy3teBbeOHelj1tDX5qQm4wP24xR76U9hX4hgn6RBWzFXKvQY3jnbimpukVdoBLaoT0C3ROlfiYcSF9uuKMvpSLt78K1GjQ1uCezk5BSA88HvFcyDaDenugRk93aEvOeTxC5pwfU0rn2IVw8/3C3GMXa1Xa78AVJugFJuVYBPnZdPRTctvAhEvY+Z6V90vs3OaYYC6s35Btat5Qa26Xs+P1BcmD5uvmxKajlmodNU3fYuf9H+AP4FN5vaWOPV5yzo/tzkaFbGjryHZg86Wsn1PrhwuOR0i/s4ci+vIC63CX8QK74ZbU/vPPPZpumtZRI8aKfv+5kEMJ2/fRB0Ubap/5uXrd+IRJ+Ac1XXs/+ECnx6iQ5UkN9Ac1D9SUfI4dvE3fS2oUid6hYxFySU3NXppclVcXtO1HF9LTstdS/uo3stdRO4v7Zl30CLlLSE/Xz8BnTMb/YsHrjjq46aVs2EPIgneSF+h+wdbYD/K74Rt2kbwdk5C7pIQaCReYhB9Lu8ZkvKGm8WX5nk93rLHocIddjG/YxfJZCo+YsFvGYxTyGTu/R6wPvlLP/5Z+6eLnumVfIaHeye3Epk+K+91+S621zjkOIXel7FbOJSbFEhPSI90jFjFvy2e/YYLOqJnkhXohPlMjxAN9IXel62NJ2R6gvKTzwa6fm5+rj67boDZjMKgbFTLnnFNKw47yHQ5H3T4A8EGPF/6RmZKyP1BTzj0m4QdMxGtM0Dkmot+knzAhvai/p442XVo43pTd/tbWB58Ed0E9Yrbn5328ZVTIwvCgmTq6fG6ad16iRsroHfpWhGyFTNjNdUmV6QET8qa8rrDaco71hUfAf2Op+hMWIb28cRmHA5tji5BOK6Q3H9i5lG16X+ecvVzZsq+QUDqoREyoB1s1y/4oCKqQU47xMxiLkC7MGf1OzZhYHikfsCjpQrajzG/UCeLhKPMtIX1d9Bsa6m9uB3MuJNTzzJSpsV0yUj7YtX5vUko+1dG2doJ87ADRI0A7D+l15A0m35I6uLnGxJxRC/sVNrr0qRCf+mhrxyeOmw3fYTjPOMYhold7N7uMbRocEzI6K+w8/I73c8yYkGtMyBdMwlmz/IyNMlf0n+c+UweH372gR8BBf/8PC5lz3jRzla2ArwrWN4gurKcWF80ntp+oz/CX1KdTvp2n5a9UQT1qutzHkpK/RywhgVf//tAIug+hhcw5e4dvUkpeK/vocY5J6fOQnt798zUWFV1if1y2neqY1lUhiSfkkDyhMC0XOTyDJ1Y+sev1oj998f700aY/ucjN+2HfHMX5v8WUa70PhxjUbEfWh/5xESjnt31L/8/O/P2M+scVYP3hf2bmgxevFzPWVSfXV4fgEBHShcwppclSTkzvfzqesgcRsv3Ns8ErVAFdzO36Yf9EP/8xpl7vMQ4hpEeKjNVZU39k9AvSRv+8QyA/1554g+99j+jnP8bY+U3ih1O2EIck+qS0+MWQkCIU/wMzkuM574x8eQAAAABJRU5ErkJggg=="
        />
        <image
          id="aD"
          width={165}
          height={149}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAACVCAYAAAA5UTp3AAAACXBIWXMAAAuIAAALiAHljilJAAAKR0lEQVR4Xu2b2XbjuBVFNzR4KFd1VyovGf7/37KS7qSrypNsScgDcAyIlk267W5fqc5eC8sUxUEiNy7uBeWUc+Y1pJRmY9uYH5ec83ZsmyGLsQ0m8DqrjRmQXhspjXlrPPSacFhKE45X55QudMxzvFehMx/bwPzQvIuUjpTmTRmtvlNKiSLvjGL9pr61rO0GOKnL1G22lAi6ABLmmMns3uNtXScPAO5zznfw4BP5GfFGI2XOOaeUMrvzkam2GXBGkfKkrtMHmddmKY+bfVIqeD24UGXcatuU0vqpfHNUyooOpg8wo+y7BM6B09r64ylSmuNGTsiPLbCuTXKuKD6su22eFPOl0khIyXhW2znwgRYtZ1jKH4WhlBvgHrijyXlD8eGmvt7UtncUfYk0M1qEPAc+UUS8qH8/1fXKPxe87PjmMNlS7rekvKdExlVdvgWuum1uaKng3rxyqjSKfEtKZPwEfAY+Al8oYv5c/57QhJx6fHO4KLWbUSS7o4h4U5cvgW+0+qKXt887H5gqjaQ8oUXJz8BPwD8pcv6lrj+lVeZTj28Olw27kfIOuK5tBXylBCsVOiqaJeN6cLxxaWrV1Bc3J5RoqaH7C0XGLxRJz7CUPxKSUlOGK4qQV3VZ89j9urvatnX9DlOk0fzjjBIlf6ZExb8Bfwf+QRHyrxQhT+t2c8oHnnIOc7ioqu6joKKl5rBP2M01JeImpXRe993knNcwTRiFZuWUS4p4qrw/1faRIqMi6ZxysinnMIfLjFZNQ5NSKd/H+loFsWZtTimiPgzfKaWUc85ThOmrbuWUFzQZP1Mi52ceS7nBz8aPHUmpHFFFjDy4re9/o+SX32s7o8h6QyuAgGlRTE9mFCGVS36i5JCKkh9pT3dOaTmGn40fN72UEuueNrpeUIbsj3VZjizYrcgfKvMpUg6f4KgHaMJcBY3a8PGipTx+dI91z/XgRM70rZdR+zwsp5TSVCnVJFwvoaTtZ+c1y9+X/uY46ad69Lqnf7rXBy4586i9JIqlwV8tzwZ/d/IDc/Tkrgk50AupSHnCbtQc7jMppxT7Tp5phdBQTLCcPwLD+90L2Y+u/eyNhFwO9gdgUf+dIfe/b6vrFGI1raMDzGhTQotB0z4Ph8IcOxKv/wlbH6SW7Hqx7dqmvr+i/OZyo52NCYWlNOGwlCYcltKEw1KacFhKEw5LacLxkslzY/4I9PBlllLa8sLHjMb8KVhKEw5LacJhKU04LKUJh6U04bCUJhyW0oTDUppwWEoTDktpwmEpTTgspQmHpTThsJQmHJbShMNSmnBYShMOS2nCYSlNOCylCYelNOGwlCYcltKEw1KacFhKEw5LacJhKU04LKUJh6U04bCUJhyW0oTDUppwWEoTDktpwmEpTTgspQmHpTThsJQmHJbShMNSmnBYShMOS2nCYSlNOCylCYelNOGwlCYcltKEw1KacFhKEw5LacJhKU04LKUJh6U04bCUJhyW0oTDUppwWEoTDktpwmEpTTgspQmHpTThsJQmHJbShMNSmnBYShMOS2nCYSlNOCylCYelNOGwlCYcltKEw1KacFhKEw5LacJhKU04LKUJh6U04bCUJhyLsQ2M+YPZquWcM5AdKU04LKUJh6U04bCUJhyW0oTDUppwWEoTjkXOebtnfQY2tX2gzSVJ4nvgrq7LgzYk7Vl3TOz7zj3H/v2h3fv+u2r5nuKRPJt1bV7fB1imlGbAZsrk+T7p+uU1TWDJK3qRD523lmtM5kMh0YJT/7r3QX6sKRKuu/YomE2Rsj/wvpPp4DrxjN1eM3bx3/pmvzX95+u/S38TnkOddBhFpl6f6Oy7JkMZeyHV5E2/b4aXS6kDafi+YzdKDi/wlCg5dlMj8Xs+axr8fer9Q2bfd+hH16GgvSvDkThPlVIHuwdWwC1wU1tvfn/CY7jYzzE10h37dRC9ZM9FyD6/TAzSwpzzJCll+poSGVfANXAFfK9/z4DzbvtEicL7oueQ+cj7Eeij3YzfL5quZX8DDx1J2H+ve1rguqL4cl1f37Ir5zBSThq+oV3M4cmugK+U4yxovWJTX2u/55j6Gd4LdbK+YtRyYrxTKZkf5ubHMqL0IymU73RHkfCW4sdX4BstiOm9OwZCwnQh+ouqiKmoeQmcUqIlNAmX3T7PsRx5/73Z0uSbU65ZL+aYlPc8zst1EzPT8u7IyIk+6knKPnip3VC8kUMP1J+u7ZdSv2sDSCndAieUk17XfZZ13aruckk54WfKvOYJRdQl8SPBlE6j7ysZl5ROeEq5yH0EhcfDtEYYCbqh3BDlWc8RXdpt16AIek2JjJfAb8D/gP/Uv99pMs5zzjcMGI2UOeecUlLeoCh5SznxknKiNUW+NSW3PKXcxEOQciyvW7DbyRZ1WdFOUVQRFHbzLAl5TenESnEULfppkX1Ev35DKTc0Ka8pfvxW23d2c0sFtR1GpaxIyBWl5/Y5JLSTfaVEEAl5CFKOfT5Jqc52ClwAnyijgq6FhJ2xW30qyVc+tarthmlSjnWa92ZY6Gwpwl3SpPwG/AL8l3YdNIw/YqqUyhv6YSnThqQLyok0dC+6v9EZywnnFBE/UMT8APxEuaAXlE6o4fyEIrmmz9aUCHFFuzmKFIqcKhCeYuz9CAwLnRVNvG91WZFSnVEF8SMmSVOHcPWGvldoOFI0OKMNY4oc0RnL2ZYUKSXkR8pFvqNES0XQD5TvP6ONKveUCPEd+JVyYxRBFCnGcsqxnPe9GUZKaE5o+vCG8r1vaEURPDFKvUQaRcd+KkM9RDmChmsVA5oWiszY8K38+Lw2SXlLiZhn3foPtB8ZKCL8mxItfqVES90cvb93COuIfv1gN1LKC035rOuyRlV59OR1f4mUiRI0tyklKCdIlBOfUi6uhsI+7zyEnv4c57RC54wyZCsKaDpMQ/oFTUrNxUnKX2hDuZL8O4qczzHWad4bFbiScka555rymdE6n6bXoEXXR7xESth9tKaoqbxow+6PMQ5FyrHPt6FV3P2E75xyM7ReeeSc3cljJfeqQq9pN2lNkfQ5xtKL92aflJqrvKd0aAmaaQ8dNpqXHJKeWD+ZlNLpyCbRL+oYZ7ROpsr7J0o+eUqZmz2jVeMzWqRcAf+iVaOau5OQuW53tOybhxzjpZFyH2OR5tBZ0aKBhh9FA6UtZxTZzmmRUkP0V1o1qopUv67SaGM63kLKsSmL14Xi90fVsSKgJr9V2CmCqvqWwMoZL2mFjyru/rFc9JzxT+fVUj7x7xQP1KdBB0uX92xTSnpysaEIN6dERwm4pE0JqfL8RhP5DrjPOT905FSrRtN4tZRjPJXMHhqdPHp0uKU9vVlQIueCNiWi5P+KEhH1eud6HMv1eUteXegcO/WfmR5e0qpHNVWU/Q8y+ufBuWsPry3j07xayrHh51gufv2efRMqfvr1vYD9tpZxAm8xfI/lREdxE/Rzvj2d8Knfg84pu4394MIMeHWkNOatOfSJbXOEWEoTDktpwmEpTTj+D0wgrIi4TcNhAAAAAElFTkSuQmCC"
        />
        <image
          id="aN"
          width={165}
          height={149}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
      <path
        d="M1022.71 1980.61a8.43 8.43 0 0 1-8.15-8.14v-38.6a8.14 8.14 0 0 1 8.15-8.14 9 9 0 0 1 5.57 2.14l19.3 19.3a8.48 8.48 0 0 1 .43 11.15l-.43.43-19.3 19.29a6.89 6.89 0 0 1-5.57 2.57"
        fill="#00aeed"
      />
      <path
        d="M1022.71 1930.44a3.7 3.7 0 0 1 2.57 1.29l19.3 19.3a4.52 4.52 0 0 1 0 5.57l-19.3 19.3a3.68 3.68 0 0 1-2.57 1.28 3.84 3.84 0 0 1-3.86-3.86v-38.59c0-2.14 1.28-4.29 3.86-4.29m0-8.57a12.44 12.44 0 0 0-12.44 12.43v38.6a12.44 12.44 0 0 0 12.44 12.43 12.7 12.7 0 0 0 8.57-3.43l19.3-19.3.43-.42.43-.43c3.86-5.15 3.86-12-.86-16.73l-19.3-19.29a10.76 10.76 0 0 0-8.57-3.86"
        fill="#fff"
      />
      <path
        d="M1022.71 1930.44a3.7 3.7 0 0 1 2.57 1.29l19.3 19.3a4.52 4.52 0 0 1 0 5.57l-19.3 19.3a3.68 3.68 0 0 1-2.57 1.28 3.84 3.84 0 0 1-3.86-3.86v-38.59c0-2.14 1.28-4.29 3.86-4.29m0-8.57a12.44 12.44 0 0 0-12.44 12.43v38.6a12.44 12.44 0 0 0 12.44 12.43 12.7 12.7 0 0 0 8.57-3.43l19.3-19.3.43-.42.43-.43c3.86-5.15 3.86-12-.86-16.73l-19.3-19.29a10.76 10.76 0 0 0-8.57-3.86Z"
        fill="none"
        stroke="#dfecef"
        strokeMiterlimit={10}
      />
      <path
        d="M1177.08 1651.48H985.55a5 5 0 0 1-5-5V1502.1M898.7 550.2v-92a5 5 0 0 0-5-5h-48.4a5 5 0 0 1-5-5L848 435v-47.35M981.8 550.2v-92a5 5 0 0 0-5-5h-48.4a5 5 0 0 1-5-5l6.1-13.2v-47.35M1061.3 550.2v-92a5 5 0 0 0-5-5h-48.4a5 5 0 0 1-5-5l10.89-13.2v-47.35"
        fill="none"
        stroke="#35ace8"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <path
        d="M1147.7 550.2v-91.4a5 5 0 0 0-5-5h-33.8a5 5 0 0 1-5-5l6.55-13.8v-42.15a5 5 0 0 0-5-5H770.59c-4.44 0-5.39 2.2-5.39 5v41.85l-8.5 1.2v13.2a5 5 0 0 0 5 5H810a5 5 0 0 1 5 5v91.3h388.7"
        fill="none"
        stroke="#35ace8"
        strokeLinejoin="round"
        strokeWidth={4}
      />
      <path
        d="M645.33 584.83h-15.2a1.79 1.79 0 0 0-1.8 1.8v39.2"
        fill="none"
        stroke="#2f3e49"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <path
        d="M634.83 593.83h14a1.54 1.54 0 0 0 1.5-1.5v-14a1.54 1.54 0 0 0-1.5-1.5h-14a1.54 1.54 0 0 0-1.5 1.5v14a1.54 1.54 0 0 0 1.5 1.5"
        fill="#2f3e49"
      />
      <path
        d="M439.3 945h-391a5 5 0 0 0-5 5v428.6a5 5 0 0 0 5 5h10.9"
        fill="none"
        stroke="#35ace8"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <path
        d="M873.2 1492.05h-16.4a5 5 0 0 1-5-5v-102.3H267.9"
        fill="none"
        stroke="#00aeed"
        strokeLinejoin="round"
        strokeWidth={4}
      />
      <path
        d="M996.58 1384.7h332.92a5 5 0 0 1 5 5v454.05a5 5 0 0 1-5 5H703"
        fill="none"
        stroke="#00aeed"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <path
        d="M937.4 960.29v156.19h25.3l48.6.2c5.5 0 10-4.1 10-9.2v-9.2"
        fill="none"
        stroke="#cbcbcb"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="m932.9 960.79 3.2-3.2a1.67 1.67 0 0 1 2.2.1l3.1 3.1a1.61 1.61 0 0 1 .5 1.1 1.58 1.58 0 0 1-1.6 1.6H934a1.58 1.58 0 0 1-1.6-1.6 1.61 1.61 0 0 1 .5-1.1"
        fill="#cbcbcb"
      />
      <path
        d="M941 961.89a.65.65 0 0 1-.6.6h-6.3a.58.58 0 0 1-.6-.6.52.52 0 0 1 .2-.4l3.1-3.1a.75.75 0 0 1 .9 0l3.1 3.1a.52.52 0 0 1 .2.4m2 0a2.5 2.5 0 0 0-.8-1.8l-3.1-3.1a2.51 2.51 0 0 0-3.5-.2l-.1.1-.1.1-3.1 3.1a2.74 2.74 0 0 0-.8 2.3 2.61 2.61 0 0 0 2.7 2.1h6.1a2.67 2.67 0 0 0 2.7-2.6"
        fill="#fff"
      />
      <path
        d="M1092.5 960.29v156.19h25.3l48.6.2c5.5 0 10-4.1 10-9.2v-9.2"
        fill="none"
        stroke="#cbcbcb"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="m1088.1 960.79 3.2-3.2a1.67 1.67 0 0 1 2.2.1l3.1 3.1a1.61 1.61 0 0 1 .5 1.1 1.58 1.58 0 0 1-1.6 1.6h-6.3a1.58 1.58 0 0 1-1.6-1.6 1.61 1.61 0 0 1 .5-1.1"
        fill="#cbcbcb"
      />
      <path
        d="M1096.2 961.89a.65.65 0 0 1-.6.6h-6.3a.58.58 0 0 1-.6-.6.52.52 0 0 1 .2-.4l3.1-3.1a.75.75 0 0 1 .9 0l3.1 3.1a.52.52 0 0 1 .2.4m2 0a2.5 2.5 0 0 0-.8-1.8l-3.1-3.1a2.51 2.51 0 0 0-3.5-.2l-.1.1-.1.1-3.1 3.1a2.74 2.74 0 0 0-.8 2.3 2.61 2.61 0 0 0 2.7 2.1h6.1a2.67 2.67 0 0 0 2.7-2.6"
        fill="#fff"
      />
      <path
        d="M1280.1 960.29v156.19h25.3l48.6.2c5.5 0 10-4.1 10-9.2v-9.2"
        fill="none"
        stroke="#cbcbcb"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="m1275.6 960.79 3.2-3.2a1.67 1.67 0 0 1 2.2.1l3.1 3.1a1.61 1.61 0 0 1 .5 1.1 1.58 1.58 0 0 1-1.6 1.6h-6.3a1.58 1.58 0 0 1-1.6-1.6 1.61 1.61 0 0 1 .5-1.1"
        fill="#cbcbcb"
      />
      <path
        d="M1283.7 961.89a.65.65 0 0 1-.6.6h-6.3a.58.58 0 0 1-.6-.6.52.52 0 0 1 .2-.4l3.1-3.1a.75.75 0 0 1 .9 0l3.1 3.1a.52.52 0 0 1 .2.4m2 0a2.5 2.5 0 0 0-.8-1.8l-3.1-3.1a2.51 2.51 0 0 0-3.5-.2l-.1.1-.1.1-3.1 3.1a2.74 2.74 0 0 0-.8 2.3 2.61 2.61 0 0 0 2.7 2.1h6.1a2.67 2.67 0 0 0 2.7-2.6"
        fill="#fff"
      />
      <g
        clipPath="url(#a)"
        opacity={0.2}
        style={{
          isolation: "isolate"
        }}>
        <g clipPath="url(#b)">
          <image
            width={289}
            height={179}
            transform="matrix(.98 0 0 .98 1102.81 37.76)"
            xlinkHref="data:image/png;base64,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"
          />
        </g>
      </g>
      <path
        d="M1376.2 207.4H1113a6.06 6.06 0 0 1-6.1-6.1V49.7a6.06 6.06 0 0 1 6.1-6.1h263.2a6.06 6.06 0 0 1 6.1 6.1v151.5a6.15 6.15 0 0 1-6.1 6.2"
        fill="#fff"
      />
      <g
        clipPath="url(#c)"
        opacity={0.2}
        style={{
          isolation: "isolate"
        }}>
        <g clipPath="url(#d)">
          <image
            width={240}
            height={127}
            transform="matrix(.95 0 0 .95 38.77 37.69)"
            xlinkHref="data:image/png;base64,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"
          />
        </g>
      </g>
      <path
        d="M256.2 151.5H47.4a6.06 6.06 0 0 1-6.1-6.1V49.7a6.06 6.06 0 0 1 6.1-6.1h208.7a6.06 6.06 0 0 1 6.1 6.1v95.6a6.12 6.12 0 0 1-6 6.2"
        fill="#fff"
      />
      <path
        d="M1143 170.8a8 8 0 1 1-8 8 8 8 0 0 1 8-8"
        fill="#b4002b"
      />
      <path
        d="M1143 93.2a8 8 0 1 1-8 8 8 8 0 0 1 8-8"
        fill="#00cd98"
      />
      <path
        d="M1143 112.6a8 8 0 1 1-8 8 8 8 0 0 1 8-8"
        fill="#3574e0"
      />
      <path
        d="M1143 132a8 8 0 1 1-8 8 8 8 0 0 1 8-8"
        fill="#fbc43b"
      />
      <path
        d="M1143 151.5a8 8 0 1 1-8 8 8 8 0 0 1 8-8"
        fill="#ff6200"
      />
      <g
        clipPath="url(#e)"
        style={{
          isolation: "isolate"
        }}>
        <text
          transform="translate(1160.93 105.91)"
          fontSize={14}
          fill="#666">
          {"Funcionando"}
        </text>
      </g>
      <g
        clipPath="url(#f)"
        style={{
          isolation: "isolate"
        }}>
        <text
          transform="translate(1160.93 125.91)"
          fontSize={14}
          fill="#666">
          {"Movi\xE9ndose"}
        </text>
      </g>
      <g
        clipPath="url(#g)"
        style={{
          isolation: "isolate"
        }}>
        <text
          transform="translate(1160.93 145.91)"
          fontSize={14}
          fill="#666">
          {"Falla"}
        </text>
      </g>
      <g
        clipPath="url(#h)"
        style={{
          isolation: "isolate"
        }}>
        <text
          transform="translate(1160.93 165.91)"
          fontSize={14}
          fill="#666">
          {"Bloqueada"}
        </text>
      </g>
      <g
        clipPath="url(#i)"
        style={{
          isolation: "isolate"
        }}>
        <text
          transform="translate(1160.93 185.91)"
          fontSize={14}
          fill="#666">
          {"Detenida"}
        </text>
      </g>
      <g
        clipPath="url(#j)"
        style={{
          isolation: "isolate"
        }}>
        <text
          transform="translate(75.5 77.73)"
          fontSize={14}
          fill="#606060">
          {"Conectividad de Planta"}
        </text>
      </g>
      <g>
        <text
          transform="translate(109.29 128.21)"
          fontSize={17}
          fill="#606060">
          {getConexion(datosScada.con)}
        </text>
      </g>
      <g
        clipPath="url(#m)"
        opacity={0.15}
        style={{
          isolation: "isolate"
        }}>
        <g clipPath="url(#n)">
          <image
            width={40}
            height={43}
            transform="matrix(.9 0 0 .9 67.53 102.82)"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAArCAYAAAAKasrDAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAE8klEQVRYR+2YbW8bRRSFn7HXcRKnaVIoFCoB4v//KyRKKW0T20n8Pnw492RmFyfeKEjwIVcaje2dvXPm3Ndxyjnzf5bBoQX/tbwAfK68AHyuvAB8rjSHFhySlNIAyLlKqCmlhA6fYvhZrgY55xzvE+vu11jfkwDGxolKcs67B5YbVP28dZDOukz7MMATAYa02EkpbarfatYsNWs5pZQR6HtgFeiuFUiHSl1KKT1gPo8RMIzZn2tzbWPexedNzAa5QiBblrC1nsxg+A0Upo6BI+AkxhECbta2MdYIzDLGOn4/AnZhiV1FRj+AXZ9JKTXAGClugNcI5DnwCoEc+nUKuAVwA8xjvovfvSZRQPvdwwAtQfkIATgDThHQd8AEuAAu49lRvObNVwjYVTXm8fsVAgbho5W5c2+AyGxHCNgrxNgx8DMC9U2M81jniNwik06BL8Bf8f4UsXob+jexR3KAwANRXKeTnPMupTREbI0Rg5fAj8Ab4D3wHfA9AneKgA/QpjtkzhnwLfAWgfwTuEbsfQE+w31+vENymMEAO6Swd442eoc2+yXmt4jJY3SQRAmQJfLVecyTWGeAPkxCAbPKOW9TOPwhaShReo6AvAd+RSB/Qky+QZuOKD5oBjfI3xaIybPQd0WJZKeeNbCMfDnoA3CEGDlFpzd774EfkN9dIL8aIjYcxaBNB5SDNhQgAwR6g9icIZaHsWbYF+AxMss58r83MTtqT9Hmzn072mXLbmLgK+SXxHxNYbU+RC8G7X9nlFRixibV3FCi1tWkVbcpQG32EcqJzqH2zVE871WLE1pnE5u910jpmKIn0Qa2r51rEIizeH6JfPECAZ0gRhfAtg9AaEfxGcWsJxSzOmo38X0Y8wAxVpvdzxt0yFehc0L7wLlJe/o5iins8A0lOt0Q2IxD5FNmruGfXY1B1bpHlFbM+dX7uL6v+zIIpXupwSWKGVNn1FKv9ezRUMjw83vpA9CnrFmtGdoHsCtdRmsgtU5os73XibvitOF+zrMHtNnpvmvpPqv1OKq7vWLqA9CKXAluUe5aoBJWK62lxURH1uhd67uh6LXOTJ9ajBaukYIpSgnXKOM7sToBP2TiGuyWAmyOGoWvSO8MgVzFul4+mNGJbhGwGuCEEn02c13mah12k27z+hmBNMDbWLOD/j5oE99RzLGI39Y8bGa/XwN042ATu8OudbrJyM2+a2P8tgOIu0JGLI0Ra64iORRexPolYnAcc31hMrA56gV/p/SBH4CPCKQJWeace/lgogC5Qab4jEA5j9n3XOjrCgLtdmuKXMTjU+ibhv4lsHnKxT2hjRZIoZlsKO26b2knlM57QPsyZPe4Qmx9QAz+BvwRn+exj+8ovQDWPjhHG49RSbJJnXbcUbvl38a8ROBmKGI/IlBfkbm/0GbP+bUXwC1tcTSPKQw5It0u+eppgA6GGcVFPlGa1Duq3OeNerX8cVE3kB1icoYAOBKniI36YjWibOi04oM4XTmC3VV3k3uvhtUgHY1LSj6bUjacULoU35mhJOY7SqVwkvZ3+50D0tKr5a+lTrYr5CIbtMk81gxpXz1d1lwhNtX3BbDKOa+A+7/y4nMChgf/PNon9b0Zgen2jXUL5b83NntGzjkveESeyuA+sWkcFL6TuGd0VXDT4arjJP6o/BsMQknUg84wwG65q//FelT+BmvWQvb3uP02AAAAAElFTkSuQmCC"
          />
        </g>
      </g>
      <path
        d="M85.5 110.1a12.1 12.1 0 1 1-12.1 12.1 12.1 12.1 0 0 1 12.1-12.1"
        fill="#fff"
      />
      <path
        d="M85.5 113.2a8.9 8.9 0 1 1-8.9 8.9 8.9 8.9 0 0 1 8.9-8.9"
        fill={getColorConexion(datosScada.con)}
      />
      <g
        clipPath="url(#o)"
        style={{
          isolation: "isolate"
        }}>
        <text
          transform="translate(1134.97 77.73)"
          fontSize={14}
          fill="#606060"
          fontWeight={700}>
          {"Funcionamiento de dispositivos"}
        </text>
      </g>
      <g
        clipPath="url(#p)"
        opacity={0.5}
        style={{
          isolation: "isolate"
        }}>
        <path
          fill="none"
          stroke="#b3b3b3"
          strokeMiterlimit={10}
          strokeWidth={0.5}
          d="M59.9 96.2h185.8"
        />
      </g>
      <path
        d="M33.3 425.5h57.5a8.49 8.49 0 0 1 8.5 8.5v38.3"
        fill="none"
        stroke="#00aeed"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <path
        fill="#0e76e7"
        d="M62.3 486.9h124.8v97.7H62.3z"
      />
      <path
        d="M186.9 470.6v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1V470.6"
        fill="none"
        stroke="#2f3e49"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <path
        d="M92.7 475.4a2 2 0 0 1 1.9-1.9h9a1.9 1.9 0 0 1 1.9 1.9 2.11 2.11 0 0 1-.5 1.3l-4.5 4.5a2 2 0 0 1-2.6.1l-.1-.1-4.5-4.5a1.61 1.61 0 0 1-.6-1.3"
        fill="#00aeed"
      />
      <path
        d="M104.4 475.4a.86.86 0 0 1-.3.6l-4.5 4.5a1.05 1.05 0 0 1-1.3 0l-4.5-4.5a.86.86 0 0 1-.3-.6.9.9 0 0 1 .9-.9h9a.92.92 0 0 1 1 .9m2 0a2.9 2.9 0 0 0-2.9-2.9h-9a2.9 2.9 0 0 0-2.9 2.9 3 3 0 0 0 .8 2l4.5 4.5.1.1.1.1a2.91 2.91 0 0 0 3.9-.2l4.5-4.5a2.52 2.52 0 0 0 .9-2"
        fill="#fff"
      />
      <g
        clipPath="url(#q)"
        style={{
          isolation: "isolate"
        }}>
        <text
          transform="translate(76.6 614.58)"
          fontSize={11}
          fill="#606060">
          {"TK"}
          <tspan
            x={14.06}
            y={0}
            letterSpacing="-.05em"
          />
          <tspan
            x={16.51}
            y={0}>
            {"AGU"}
          </tspan>
          <tspan
            x={40.34}
            y={0}
            letterSpacing="-.05em">
            {"A"}
          </tspan>
          <tspan
            x={47.08}
            y={0}
            xmlSpace="preserve">
            {" CRUDA"}
          </tspan>
        </text>
      </g>
      <path
        fill="#0e76e7"
        d="M1272 2423.59h124.8v97.7H1272z"
      />
      <path
        d="M1396.6 2407.29v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1v-111.2"
        fill="none"
        stroke="#2f3e49"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <g>
        <text
          transform="translate(1295.86 2551.28)"
          fontSize={11}
          fill="#606060">
          {"TK PRODUCTO"}
        </text>
      </g>
      <path
        fill="#0e76e7"
        d="M398.6 1893.5h124.8v97.7H398.6z"
      />
      <path
        d="M523.2 1877.2v111.2c0 1.7-.6 3.1-1.2 3.1H400c-.7 0-1.2-1.4-1.2-3.1v-111.2"
        fill="none"
        stroke="#2f3e49"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <g
        clipPath="url(#s)"
        style={{
          isolation: "isolate"
        }}>
        <text
          transform="translate(444.95 2021.14)"
          fontSize={11}
          fill="#606060">
          {"TK2- CIP"}
        </text>
      </g>
      <path
        d="M310.4 529.6H293a13.17 13.17 0 0 0-3.4-.4 14.6 14.6 0 0 0-14.6 14.5v.1a14.6 14.6 0 0 0 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1a14.52 14.52 0 0 0 4.2-10.3 15.23 15.23 0 0 0-.6-4.2h6.8a2.61 2.61 0 0 0 2.6-2.7v-4.6a2.69 2.69 0 0 0-2.7-2.7"
        fill="#2f3e49"
      />
      <path
        d="M263.8 563.6a2 2 0 0 1-1.9-1.9v-9a1.9 1.9 0 0 1 1.9-1.9 2.11 2.11 0 0 1 1.3.5l4.5 4.5a2 2 0 0 1 .1 2.6l-.1.1-4.5 4.5a1.61 1.61 0 0 1-1.3.6"
        fill="#00aeed"
      />
      <path
        d="M263.8 551.9a.86.86 0 0 1 .6.3l4.5 4.5a1.05 1.05 0 0 1 0 1.3l-4.5 4.5a.86.86 0 0 1-.6.3.9.9 0 0 1-.9-.9v-9a.92.92 0 0 1 .9-1m0-2a2.9 2.9 0 0 0-2.9 2.9v9a2.9 2.9 0 0 0 2.9 2.9 3 3 0 0 0 2-.8l4.5-4.5.1-.1.1-.1a2.91 2.91 0 0 0-.2-3.9l-4.5-4.5a2.52 2.52 0 0 0-2-.9"
        fill="#fff"
      />
      <path
        fill="none"
        stroke="#00aeed"
        strokeMiterlimit={10}
        strokeWidth={4}
        d="M236.3 556.7h28"
      />
      <g
        clipPath="url(#t)"
        opacity={0.15}
        style={{
          isolation: "isolate"
        }}>
        <g clipPath="url(#u)">
          <g clipPath="url(#v)">
            <use
              transform="matrix(.73 0 0 .73 272.71 526.22)"
              xlinkHref="#w"
            />
          </g>
        </g>
      </g>
      <path
        d="M289.6 533.2a10.9 10.9 0 1 1-10.9 10.9 10.9 10.9 0 0 1 10.9-10.9"
        fill="#fff"
      />
      <g
        clipPath="url(#x)"
        opacity={0.15}
        style={{
          isolation: "isolate"
        }}>
        <path
          d="M289.6 535.9a8 8 0 1 1-8 8 8 8 0 0 1 8-8"
          fill="#0e76e7"
        />
      </g>
      <g
        clipPath="url(#y)"
        style={{
          isolation: "isolate"
        }}>
        <text
          transform="translate(275.03 583.84)"
          fontSize={11}
          fill="#606060">
          {"P-001A"}
        </text>
      </g>
      <path
        d="M310.4 447.1H293a13.17 13.17 0 0 0-3.4-.4 14.6 14.6 0 0 0-14.6 14.5v.1a14.6 14.6 0 0 0 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1a14.52 14.52 0 0 0 4.2-10.3 15.23 15.23 0 0 0-.6-4.2h6.8a2.61 2.61 0 0 0 2.6-2.7v-4.6a2.69 2.69 0 0 0-2.7-2.7"
        fill="#2f3e49"
      />
      <g
        clipPath="url(#z)"
        opacity={0.15}
        style={{
          isolation: "isolate"
        }}>
        <g clipPath="url(#A)">
          <g clipPath="url(#B)">
            <use
              transform="matrix(.73 0 0 .73 272.71 443.69)"
              xlinkHref="#w"
            />
          </g>
        </g>
      </g>
      <path
        d="M289.6 450.7a10.9 10.9 0 1 1-10.9 10.9 10.9 10.9 0 0 1 10.9-10.9"
        fill="#fff"
      />
      <g
        clipPath="url(#C)"
        opacity={0.15}
        style={{
          isolation: "isolate"
        }}>
        <path
          d="M289.6 453.4a8 8 0 1 1-8 8 8 8 0 0 1 8-8"
          fill="#0e76e7"
        />
      </g>
      <g
        clipPath="url(#D)"
        style={{
          isolation: "isolate"
        }}>
        <text
          transform="translate(275.03 501.31)"
          fontSize={11}
          fill="#606060">
          {"P-009"}
        </text>
      </g>
      <path
        d="M310.4 615.1H293a13.17 13.17 0 0 0-3.4-.4 14.6 14.6 0 0 0-14.6 14.5v.1a14.6 14.6 0 0 0 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1a14.52 14.52 0 0 0 4.2-10.3 15.23 15.23 0 0 0-.6-4.2h6.8a2.61 2.61 0 0 0 2.6-2.7v-4.6a2.69 2.69 0 0 0-2.7-2.7"
        fill="#2f3e49"
      />
      <g
        clipPath="url(#E)"
        opacity={0.15}
        style={{
          isolation: "isolate"
        }}>
        <g clipPath="url(#F)">
          <g clipPath="url(#G)">
            <use
              transform="matrix(.73 0 0 .73 272.71 611.73)"
              xlinkHref="#w"
            />
          </g>
        </g>
      </g>
      <path
        d="M289.6 618.7a10.9 10.9 0 1 1-10.9 10.9 10.9 10.9 0 0 1 10.9-10.9"
        fill="#fff"
      />
      <g
        clipPath="url(#H)"
        opacity={0.15}
        style={{
          isolation: "isolate"
        }}>
        <path
          d="M289.6 621.4a8 8 0 1 1-8 8 8 8 0 0 1 8-8"
          fill="#0e76e7"
        />
      </g>
      <path
        d="M224.86 1279.78h-17.4a13.17 13.17 0 0 0-3.4-.4 14.6 14.6 0 0 0-14.6 14.5v.1a14.6 14.6 0 0 0 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1a14.52 14.52 0 0 0 4.2-10.3 15.23 15.23 0 0 0-.6-4.2H225a2.61 2.61 0 0 0 2.6-2.7v-4.6a2.69 2.69 0 0 0-2.7-2.7"
        fill="#2f3e49"
      />
      <g
        clipPath="url(#I)"
        opacity={0.15}
        style={{
          isolation: "isolate"
        }}>
        <g clipPath="url(#J)">
          <g clipPath="url(#K)">
            <use
              transform="matrix(.73 0 0 .73 187.16 1276.41)"
              xlinkHref="#w"
            />
          </g>
        </g>
      </g>
      <path
        d="M204.06 1283.38a10.9 10.9 0 1 1-10.9 10.9 10.9 10.9 0 0 1 10.9-10.9"
        fill="#fff"
      />
      <g
        clipPath="url(#L)"
        opacity={0.15}
        style={{
          isolation: "isolate"
        }}>
        <path
          d="M204.06 1286.08a8 8 0 1 1-8 8 8 8 0 0 1 8-8"
          fill="#0e76e7"
        />
      </g>
      <path
        d="M224.86 1411.82h-17.4a13.17 13.17 0 0 0-3.4-.4 14.6 14.6 0 0 0-14.6 14.5v.1a14.6 14.6 0 0 0 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1a14.52 14.52 0 0 0 4.2-10.3 15.23 15.23 0 0 0-.6-4.2H225a2.61 2.61 0 0 0 2.6-2.7v-4.6a2.69 2.69 0 0 0-2.7-2.7"
        fill="#2f3e49"
      />
      <g
        clipPath="url(#M)"
        opacity={0.15}
        style={{
          isolation: "isolate"
        }}>
        <g clipPath="url(#N)">
          <g clipPath="url(#O)">
            <use
              transform="matrix(.73 0 0 .73 187.16 1408.44)"
              xlinkHref="#w"
            />
          </g>
        </g>
      </g>
      <path
        d="M204.06 1415.42a10.9 10.9 0 1 1-10.9 10.9 10.9 10.9 0 0 1 10.9-10.9"
        fill="#fff"
      />
      <g
        clipPath="url(#P)"
        opacity={0.15}
        style={{
          isolation: "isolate"
        }}>
        <path
          d="M204.06 1418.12a8 8 0 1 1-8 8 8 8 0 0 1 8-8"
          fill="#0e76e7"
        />
      </g>
      <g
        clipPath="url(#Q)"
        style={{
          isolation: "isolate"
        }}>
        <text
          transform="translate(275.03 669.35)"
          fontSize={11}
          fill="#606060">
          {"P-001B"}
        </text>
      </g>
      <g
        clipPath="url(#R)"
        style={{
          isolation: "isolate"
        }}>
        <text
          transform="translate(185.65 1333.24)"
          fontSize={11}
          fill="#606060">
          {"P-006A"}
        </text>
      </g>
      <path
        d="M235.5 2053.2a2.69 2.69 0 0 0-2.7 2.7v4.6a2.61 2.61 0 0 0 2.6 2.7h6.8a15.23 15.23 0 0 0-.6 4.2 14.52 14.52 0 0 0 4.2 10.3l-4.1 9.1c-.3.7 0 1.6.6 1.6H270c.6 0 1-.9.7-1.6l-4.1-9a14.6 14.6 0 0 0 4.3-10.4v-.1a14.6 14.6 0 0 0-14.6-14.5 13.17 13.17 0 0 0-3.4.4Z"
        fill="#2f3e49"
      />
      <g
        clipPath="url(#S)"
        opacity={0.15}
        style={{
          isolation: "isolate"
        }}>
        <g clipPath="url(#T)">
          <g clipPath="url(#U)">
            <image
              width={45}
              height={48}
              transform="matrix(-.73 0 0 .73 273.24 2049.82)"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAwCAYAAACFUvPfAAAACXBIWXMAAAsSAAALEgHS3X78AAAFMUlEQVRoQ+2Ze3MaNxTFfwJj/I7rJm2Spv3+Hyxt6rSuHTu8Fhb1j6uDLvIuLDHxtDO+MxqxrFZ7dHTuQxBijPzfrLdtwH/RXkA/l72Afi57Af1cdrBtwDYLIWiOCMQY47LhfnQNIKjFGBfFeN2LYBNSWHhqcgkh9IuvYtHbRfGiBA4MYDl0I6gnM806uNDQlrDGoJ7Rc730eUkHwLAf0DIBKUEfYcD6ZB9aAnXq52QprEmrzfYBWkx5vfawuXsY6ANggAEHAzwHFml8DSxCCI98osn2ARrsxWJyAAxTO8BAD4DD1IMBrlKvNgOmIYQKW0Qr+/sALRn0MWCnwFnqh8AFBvY43QcDPMHATlP7CjwAo3Qt+XwX0JGs2SMM7CXwKl2/xcA3gZ4Bd8DY3RPQGS22FXRIQvPXGEg51YAM9gL4AfgZeJc+v8ZAn6ZxYEyOyKDvgb+Ac+A2ffcFGKc4P8OYDzHG5VbQLSFIkpDDSRaXwE8Y4PfAVfo8BE5SDwZinPobDOBhmquP7d4cY3yKOexKJltBt1ggv+AI0/CPwC/AB+DX1Iv1Q5rlUWE7cZ/GXmCLUxbVAmqcc3YCXaRWfRbDZ2RwH4DfUnuPMX+Rxg5Zjx5HGIOXmAOekhemMNgnh8YKqIOrG7pYCVxALjEZSMfvgDfYQs7JzKlBdlzVHYrp8hPtRMB2YYrJqdbgLib9+qxXgn6N6VmAz8gO6gGBAR5gOq3Sd5q7wpi/w1g+wZxWz+/MtM96evEZOWpcpfaKHKfb3qGFRNYXNcWev8Bit5LTatG7gg5k0xYPsYmPMaCnGDvSZ+2e9yYClN57aeyxe1YRpeeeD50OASmVzrEHlZJPMFbPMT0rxHnAkFksCyl9X7vrPrboN6mdpaZdHcQY606gnfmXqammGPCYlS7WthgtonzfmnN0Nc+K4vSQ9eSwK2j1bYD1rn4IoZs8nJWsKIoI7K4se2vTvL8fgN4ujgg5LC1dU/BfkDOXr866LkIHgwW5XFWZusqGsFv0gAzETzxKbYKFqyrdPyCHxk0mMAJcYfNMyPXJnF3TeDKxvMBkUKV2jyWDr+R6QgVOF/lpXp1mZuQMKNA6MNRA3DqpOzVD3nZt2QKbWLWxAEsiTRViaV5yXh4VmWXNGYHYheleCGEZY4wJv45TFXCNxea/gd+xGD3AZDEnl6QqlHQmPHTXktkYK1E/Ax9TP8JKV/lMBRx0AV1a6YwjTCK3wD/kAgmMnSZtaxf8cevBzaGDwQNu52KMyxBCp+jRtMXayoC9SJlMRb70eZ7643RPxVYPAzNJvRi9xlj+AzvJ3JIloiBQdwFdmtfeEmNDSaZPDoMVVvjck2tlH8d15OqlMdfAJ0xmnzDJ3ZEjUg0QY+yk6QhrDilpqBbRSfomXUt7E/IB9wyTjQc9wUAvMC1fA3+m/jMG+CHNv/DHvi6gS1N40nZVmBOJZZ3/vmDl5VvamR5jwO4xZm8wSdym50fkULeynUGnFa9WHUKYueuK7Jh3GNgbjGWdxJWOtRtKTmL2q2s6vUT/q0CnX019rG46nYcQVK6qDtFh95j1UlWOqLPfFNudCQZyjMuGMcba/SobsdfHTqC7WCq+VI35M9/VpucwdiU5OfiqfokxrkkDOjLdxdJuqNLzFZ8SSZvNWY/7HnAjuH2DLhuubzMxudr+TYPhGxyxzUoHlYUQNjLdtP3b7Mmgy9/6Gmwrc97cjgE0/tS7N3l8qxVV5KPP39URoRlAE1NPtb2BdoBLR9xosfhLrov9Cx6oNMf2mUVqAAAAAElFTkSuQmCC"
            />
          </g>
        </g>
      </g>
      <path
        d="M256.3 2056.8a10.9 10.9 0 1 1-10.9 10.9 10.9 10.9 0 0 1 10.9-10.9"
        fill="#fff"
      />
      <g
        clipPath="url(#V)"
        opacity={0.15}
        style={{
          isolation: "isolate"
        }}>
        <path
          d="M256.3 2059.5a8 8 0 1 1-8 8 8 8 0 0 1 8-8"
          fill="#0e76e7"
        />
      </g>
      <g
        clipPath="url(#W)"
        style={{
          isolation: "isolate"
        }}>
        <text
          transform="translate(245.44 2107.44)"
          fontSize={11}
          fill="#606060">
          {"P-008"}
        </text>
      </g>
      <g
        clipPath="url(#X)"
        style={{
          isolation: "isolate"
        }}>
        <text
          transform="translate(185.65 1464.79)"
          fontSize={11}
          fill="#606060">
          {"P-006B"}
        </text>
      </g>
      <g
        clipPath="url(#Y)"
        opacity={0.3}
        style={{
          isolation: "isolate"
        }}>
        <g clipPath="url(#Z)">
          <g clipPath="url(#aa)">
            <use
              transform="matrix(0 -.72 1.3 0 1130.2 2119.88)"
              xlinkHref="#ab"
            />
          </g>
        </g>
      </g>
      <path
        d="m1146.1 2079.8-.1 22.1a6.25 6.25 0 0 0 6.2 6.3h.1l140.8.5a6.25 6.25 0 0 0 6.3-6.2v-.1l.1-30.7a5.43 5.43 0 0 1 1.2-3.4l.3-.4c6.5-6.5 6.5-6.5-.2-12.9a5.08 5.08 0 0 1-1.3-3.5l.1-33.7a6.25 6.25 0 0 0-6.2-6.3h-.1l-140.8-.5a6.25 6.25 0 0 0-6.3 6.2v.1Z"
        fill="#fff"
      />

      {/* pH Mezcla */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(16, "pH Mezcla", false)}>
        <g>
          <path
            className={getTarjetaClass(16, selected)}
            d="m1153.456 2108.456.34-97.099 138.298.483-.338 97.1z"
          />
        </g>
        <g
          clipPath="url(#ad)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="rotate(.2 -587057.73 348979.72)"
            fontSize={13}
            fill="#0e76e7">
            {"pH "}
          </text>
        </g>
        <g
          clipPath="url(#ae)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="rotate(.2 -591506.248 345988.045)"
            fontSize={13}
            fill="#0e76e7">
            {"Mezcla"}
          </text>
        </g>
        <g
          clipPath="url(#af)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="rotate(.2 -599986.375 347438.108)"
            fontSize={16}
            fill="#606060">
            {getScaledValue(datosScada.d16, 1)}
          </text>
        </g>
        <g
          clipPath="url(#ag)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="rotate(.2 -599436.819 363574.538)"
            fontSize={13}
            fill="#606060">
            {"pH"}
          </text>
        </g>
        <g
          clipPath="url(#ah)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="rotate(.2 -581428.756 347139.293)"
            fontSize={11}
            fill="#606060">
            {"AE007"}
          </text>
        </g>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(16, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(16, "pH Mezcla");
        }}>
        <path d="M1164 2085.9a4.81 4.81 0 0 0-.6 3.3c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a4.68 4.68 0 0 1 .5-2.6 3.51 3.51 0 0 1 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2a4.35 4.35 0 0 0-2.5 2.3" />
        <path d="M1162.34 2084.9a7 7 0 0 0-.8 4.7c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a6 6 0 0 1 .7-3.9 5.5 5.5 0 0 1 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2a6.31 6.31 0 0 0-3.7 3.1M1173.64 2083.6c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3a3.51 3.51 0 0 1 1.9 1.7 4 4 0 0 1 .5 2.6c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a4.81 4.81 0 0 0-.6-3.3 6.14 6.14 0 0 0-2.5-2.3" />
        <path d="M1174.24 2081.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3a5.87 5.87 0 0 1 3 2.6 6 6 0 0 1 .7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a7 7 0 0 0-.8-4.7 8 8 0 0 0-3.7-3.1M1175 2090.9v-1.5a4.93 4.93 0 0 0-3.8-4.8v-.6a.9.9 0 0 0-.9-.9h-.5a.9.9 0 0 0-.9.9v.6a4.73 4.73 0 0 0-3.8 4.8v1.5a3.77 3.77 0 0 1-.7 2.1 1.61 1.61 0 0 0-.3.9v.1a1.58 1.58 0 0 0 1.6 1.6h8.9a1.58 1.58 0 0 0 1.6-1.6v-.1a1.61 1.61 0 0 0-.3-.9 2.88 2.88 0 0 1-.9-2.1M1170 2098.4a1.75 1.75 0 0 0 1.7-1.7h-3.3a1.73 1.73 0 0 0 1.6 1.7" />
      </g>

      {/* Fin pH Mezcla */}

      <g
        clipPath="url(#ai)"
        opacity={0.3}
        style={{
          isolation: "isolate"
        }}>
        <g clipPath="url(#aj)">
          <g clipPath="url(#ak)">
            <use
              transform="matrix(0 -.72 1.31 0 806.29 2012.34)"
              xlinkHref="#ab"
            />
          </g>
        </g>
      </g>
      <path
        d="m823.3 1972.3-.1 22.1a6.25 6.25 0 0 0 6.2 6.3h.1l140.8.5a6.25 6.25 0 0 0 6.3-6.2v-.1l.1-30.7a5.43 5.43 0 0 1 1.2-3.4l.3-.4c6.5-6.5 6.5-6.5-.2-12.9a5.08 5.08 0 0 1-1.3-3.5l.1-33.7a6.25 6.25 0 0 0-6.2-6.3h-.1l-140.8-.5a6.25 6.25 0 0 0-6.3 6.2v.1Z"
        fill="#fff"
      />

      {/* Caudal de Mezcla */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(14, "Caudal de Mezcla", false)}>
        <g>
          <path
            className={getTarjetaClass(14, selected)}
            d="m830.71 2000.829.34-97.1 138.299.483-.34 97.1z"
          />
        </g>
        <g
          clipPath="url(#am)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="rotate(.2 -557006.697 251756.297)"
            fontSize={13}
            fill="#0e76e7">
            {"Caudal de"}
          </text>
        </g>
        <g
          clipPath="url(#an)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="rotate(.2 -561445.46 254353.819)"
            fontSize={13}
            fill="#0e76e7">
            {"Mezcla"}
          </text>
        </g>
        <g
          clipPath="url(#ao)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="rotate(.2 -569340.81 254367.599)"
            fontSize={16}
            fill="#606060">
            {getScaledValue(datosScada.d14, 1)}
          </text>
        </g>
        <g>
          <text
            transform="rotate(.2 -568797.33 267023.314)"
            fontSize={13}
            fill="#606060">
            {"m3/h"}
          </text>
        </g>
        <g
          clipPath="url(#aq)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="rotate(.2 -550781.141 255243.346)"
            fontSize={11}
            fill="#606060">
            {"FIT002"}
          </text>
        </g>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(14, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(14, "Caudal de Mezcla");
        }}>
        <path d="M848.14 1979.12a4.81 4.81 0 0 0-.6 3.3c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a4.68 4.68 0 0 1 .5-2.6 3.51 3.51 0 0 1 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2a4.35 4.35 0 0 0-2.5 2.3" />
        <path d="M846.44 1978.12a7 7 0 0 0-.8 4.7c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a6 6 0 0 1 .7-3.9 5.5 5.5 0 0 1 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2a6.31 6.31 0 0 0-3.7 3.1M857.74 1976.82c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3a3.51 3.51 0 0 1 1.9 1.7 4 4 0 0 1 .5 2.6c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a4.81 4.81 0 0 0-.6-3.3 6.14 6.14 0 0 0-2.5-2.3" />
        <path d="M858.34 1975c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3a5.87 5.87 0 0 1 3 2.6 6 6 0 0 1 .7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a7 7 0 0 0-.8-4.7 8 8 0 0 0-3.7-3.1M859.24 1984.12v-1.5a4.93 4.93 0 0 0-3.8-4.8v-.6a.9.9 0 0 0-.9-.9H854a.9.9 0 0 0-.9.9v.6a4.73 4.73 0 0 0-3.8 4.8v1.5a3.77 3.77 0 0 1-.7 2.1 1.61 1.61 0 0 0-.3.9v.1a1.58 1.58 0 0 0 1.6 1.6h8.9a1.58 1.58 0 0 0 1.6-1.6v-.1a1.61 1.61 0 0 0-.3-.9 2.88 2.88 0 0 1-.9-2.1M854.24 1991.62a1.75 1.75 0 0 0 1.7-1.7h-3.3a1.73 1.73 0 0 0 1.6 1.7" />
      </g>

      {/* Fin Caudal de Mezcla */}

      <path
        d="M876.7 1398.15v-13.1c0-2.1 2.7-3.8 6-3.8h104c3.3 0 6 1.8 6 3.8v13.1c0 2.1-2.7 3.8-6 3.8h-104c-3.2 0-6-1.7-6-3.8"
        fill="#2f3e49"
      />
      <path
        d="m881.2 1401.05 105.2-19.8c3.5 0 6.3 1.8 6.3 3.8v13.1c0 2.1-2.9 3.8-6.3 3.8h-105c-.7 0-.8-.6-.2-.9"
        fill="#0e76e7"
      />
      <path
        d="M876.7 1423.25v-13.1c0-2.1 2.7-3.8 6-3.8h104c3.3 0 6 1.8 6 3.8v13.1c0 2.1-2.7 3.8-6 3.8h-104c-3.2 0-6-1.7-6-3.8"
        fill="#2f3e49"
      />
      <path
        d="m881.2 1426.15 105.2-19.8c3.5 0 6.3 1.8 6.3 3.8v13.1c0 2.1-2.9 3.8-6.3 3.8h-105c-.7 0-.8-.6-.2-.9"
        fill="#0e76e7"
      />
      <path
        d="M876.7 1448.35v-13.1c0-2.1 2.7-3.8 6-3.8h104c3.3 0 6 1.8 6 3.8v13.1c0 2.1-2.7 3.8-6 3.8h-104c-3.2 0-6-1.6-6-3.8"
        fill="#2f3e49"
      />
      <path
        d="m881.2 1451.25 105.2-19.8c3.5 0 6.3 1.8 6.3 3.8v13.1c0 2.1-2.9 3.8-6.3 3.8h-105c-.7 0-.8-.6-.2-.9"
        fill="#0e76e7"
      />
      <path
        d="M876.7 1473.55v-13.2c0-2.1 2.7-3.8 6-3.8h104c3.3 0 6 1.8 6 3.8v13.1c0 2.1-2.7 3.8-6 3.8h-104c-3.2 0-6-1.6-6-3.7"
        fill="#2f3e49"
      />
      <path
        d="m881.3 1476.55 105.1-20c3.5 0 6.3 1.8 6.3 3.8v13.1c0 2.1-2.9 3.8-6.3 3.8h-105c-.7 0-.8-.6-.1-.7"
        fill="#0e76e7"
      />
      <path
        d="M876.7 1498.65v-13.1c0-2.1 2.7-3.8 6-3.8h104c3.3 0 6 1.8 6 3.8v13c0 2.1-2.7 3.8-6 3.8h-104c-3.2 0-6-1.6-6-3.7"
        fill="#2f3e49"
      />
      <path
        d="m881.2 1501.55 105.2-19.8c3.5 0 6.3 1.8 6.3 3.8v13c0 2.1-2.9 3.8-6.3 3.8h-105c-.7 0-.8-.5-.2-.8"
        fill="#0e76e7"
      />
      <path
        d="M1017.8 1384.7v103.65a5 5 0 0 1-5 5h-16.3M997.47 1416.7h20.4M996.8 1441.3h20.4M873.2 1414.11h-20.4M873.2 1384.7h-26.35M872.9 1438.2h-20.4M996.8 1466.9h20.4M872.9 1467.3h-20.4"
        fill="none"
        stroke="#00aeed"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <g
        clipPath="url(#ar)"
        style={{
          isolation: "isolate"
        }}>
        <text
          transform="translate(1240.37 461.98)"
          fontSize={11}
          fill="#606060">
          {"VX003"}
        </text>
      </g>
      <path
        d="M1264 427.7h-14.8a1.58 1.58 0 0 1-1.6-1.6v-14.8a1.58 1.58 0 0 1 1.6-1.6h14.8a1.58 1.58 0 0 1 1.6 1.6v14.8a1.58 1.58 0 0 1-1.6 1.6M1248.8 431.6l7.9 4.6a.71.71 0 0 1 .3 1l-.3.3-7.9 4.6a.8.8 0 0 1-1.1-.3c-.1-.1-.1-.2-.1-.4v-9.2c.1-.4.5-.8.9-.7a.37.37 0 0 1 .3.1"
        fill="#323e48"
      />
      <path
        d="m1264.4 442.2-7.9-4.6a.71.71 0 0 1-.3-1l.3-.3 7.9-4.6a.8.8 0 0 1 1.1.3c.1.1.1.2.1.4v9.2c-.1.4-.5.8-.9.7a.37.37 0 0 1-.3-.1"
        fill="#323e48"
      />
      <path
        fill="none"
        stroke="#323e48"
        strokeMiterlimit={10}
        strokeWidth={4}
        d="M1256.6 426.7v10"
      />
      <path
        fill="none"
        stroke="#fff"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M1247.6 418.7h18M1256.6 419.7v8"
      />
      <g
        clipPath="url(#as)"
        style={{
          isolation: "isolate"
        }}>
        <text
          transform="translate(1240.37 618.44)"
          fontSize={11}
          fill="#606060">
          {"VX002"}
        </text>
      </g>
      <path
        d="M1264 584.1h-14.8a1.58 1.58 0 0 1-1.6-1.6v-14.8a1.58 1.58 0 0 1 1.6-1.6h14.8a1.58 1.58 0 0 1 1.6 1.6v14.8a1.58 1.58 0 0 1-1.6 1.6M1248.8 588l7.9 4.6a.71.71 0 0 1 .3 1l-.3.3-7.9 4.6a.8.8 0 0 1-1.1-.3c-.1-.1-.1-.2-.1-.4v-9.2c.1-.4.5-.8.9-.7a.37.37 0 0 1 .3.1"
        fill="#323e48"
      />
      <path
        d="m1264.4 598.6-7.9-4.6a.71.71 0 0 1-.3-1l.3-.3 7.9-4.6a.8.8 0 0 1 1.1.3c.1.1.1.2.1.4v9.2c-.1.4-.5.8-.9.7a.37.37 0 0 1-.3-.1"
        fill="#323e48"
      />
      <path
        fill="none"
        stroke="#323e48"
        strokeMiterlimit={10}
        strokeWidth={4}
        d="M1256.6 583.1v10"
      />
      <path
        fill="none"
        stroke="#fff"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M1247.6 575.1h18M1256.6 576.1v8"
      />
      <g
        clipPath="url(#at)"
        style={{
          isolation: "isolate"
        }}>
        <text
          transform="translate(1176.42 1677.21)"
          fontSize={11}
          fill="#606060">
          {"VX001"}
        </text>
      </g>
      <path
        d="M1200.06 1642.88h-14.8a1.58 1.58 0 0 1-1.6-1.6v-14.8a1.58 1.58 0 0 1 1.6-1.6h14.8a1.58 1.58 0 0 1 1.6 1.6v14.8a1.58 1.58 0 0 1-1.6 1.6M1184.86 1646.78l7.9 4.6a.71.71 0 0 1 .3 1l-.3.3-7.9 4.6a.8.8 0 0 1-1.1-.3c-.1-.1-.1-.2-.1-.4v-9.2c.1-.4.5-.8.9-.7a.37.37 0 0 1 .3.1"
        fill="#323e48"
      />
      <path
        d="m1200.46 1657.38-7.9-4.6a.71.71 0 0 1-.3-1l.3-.3 7.9-4.6a.8.8 0 0 1 1.1.3c.1.1.1.2.1.4v9.2c-.1.4-.5.8-.9.7a.37.37 0 0 1-.3-.1"
        fill="#323e48"
      />
      <path
        fill="none"
        stroke="#323e48"
        strokeMiterlimit={10}
        strokeWidth={4}
        d="M1192.66 1641.88v10"
      />
      <path
        fill="none"
        stroke="#fff"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M1183.66 1633.88h18M1192.66 1634.88v8"
      />
      <g
        clipPath="url(#au)"
        style={{
          isolation: "isolate"
        }}>
        <text
          transform="translate(660.19 1875.07)"
          fontSize={11}
          fill="#606060">
          {"VX004"}
        </text>
      </g>
      <path
        d="M683.85 1840.76h-14.8a1.58 1.58 0 0 1-1.6-1.6v-14.8a1.58 1.58 0 0 1 1.6-1.6h14.8a1.58 1.58 0 0 1 1.6 1.6v14.8a1.58 1.58 0 0 1-1.6 1.6M668.65 1844.66l7.9 4.6a.71.71 0 0 1 .3 1l-.3.3-7.9 4.6a.8.8 0 0 1-1.1-.3c-.1-.1-.1-.2-.1-.4v-9.2c.1-.4.5-.8.9-.7a.37.37 0 0 1 .3.1"
        fill="#323e48"
      />
      <path
        d="m684.25 1855.26-7.9-4.6a.71.71 0 0 1-.3-1l.3-.3 7.9-4.6a.8.8 0 0 1 1.1.3c.1.1.1.2.1.4v9.2c-.1.4-.5.8-.9.7a.37.37 0 0 1-.3-.1"
        fill="#323e48"
      />
      <path
        fill="none"
        stroke="#323e48"
        strokeMiterlimit={10}
        strokeWidth={4}
        d="M676.45 1839.76v10"
      />
      <path
        fill="none"
        stroke="#fff"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M667.45 1831.76h18M676.45 1832.76v8"
      />
      <g
        clipPath="url(#av)"
        style={{
          isolation: "isolate"
        }}>
        <text
          transform="translate(97.99 2082.37)"
          fontSize={11}
          fill="#606060">
          {"VX005"}
        </text>
      </g>
      <path
        d="M121.61 2048.1h-14.8a1.58 1.58 0 0 1-1.6-1.6v-14.8a1.58 1.58 0 0 1 1.6-1.6h14.8a1.58 1.58 0 0 1 1.6 1.6v14.8a1.58 1.58 0 0 1-1.6 1.6M106.41 2052l7.9 4.6a.71.71 0 0 1 .3 1l-.3.3-7.9 4.6a.8.8 0 0 1-1.1-.3c-.1-.1-.1-.2-.1-.4v-9.2c.1-.4.5-.8.9-.7a.37.37 0 0 1 .3.1"
        fill="#323e48"
      />
      <path
        d="m122 2062.6-7.9-4.6a.71.71 0 0 1-.3-1l.3-.3 7.9-4.6a.8.8 0 0 1 1.1.3c.1.1.1.2.1.4v9.2c-.1.4-.5.8-.9.7a.37.37 0 0 1-.3-.1"
        fill="#323e48"
      />
      <path
        fill="none"
        stroke="#323e48"
        strokeMiterlimit={10}
        strokeWidth={4}
        d="M114.21 2047.1v10"
      />
      <path
        fill="none"
        stroke="#fff"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M105.21 2039.1h18M114.21 2040.1v8"
      />
      <path
        d="M597.3 915.09c0-10.8-12.6-19.6-28.3-19.6s-28.3 8.9-28.3 19.6h.2a5 5 0 0 0-.2 1.8v60.8c0 5.7 5.5 10.4 12.3 11v10h8.4v-9.9H576v9.9h8.4v-10c7.3-.3 12.9-5.2 12.9-11v-60.8c0-.5-.2-1.1-.2-1.8ZM520.1 915.09c0-10.8-12.6-19.6-28.3-19.6s-28.3 8.9-28.3 19.6h.2a5 5 0 0 0-.2 1.8v60.8c0 5.7 5.5 10.4 12.3 11v10h8.4v-9.9h14.6v9.9h8.4v-10c7.3-.3 12.9-5.2 12.9-11v-60.8c0-.5-.2-1.1-.2-1.8Z"
        fill="#323e48"
      />
      <path
        d="M698.9 468.8v172.4h9.9l35.8.2c5.5 0 10-4.1 10-9.2V623M555 468.8v172.4h25.3l48.6.2c5.5 0 10-4.1 10-9.2V623"
        fill="none"
        stroke="#cbcbcb"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <g
        clipPath="url(#aw)"
        style={{
          isolation: "isolate"
        }}>
        <text
          transform="translate(598.83 676.26)"
          fontSize={11}
          fill="#606060">
          {"Coagulante"}
        </text>
      </g>
      <g
        clipPath="url(#ax)"
        style={{
          isolation: "isolate"
        }}>
        <text
          transform="translate(719.98 676.26)"
          fontSize={11}
          fill="#606060">
          {"Hipoclorito"}
        </text>
      </g>
      <g
        clipPath="url(#ay)"
        style={{
          isolation: "isolate"
        }}>
        <text
          transform="translate(1324.65 1147.24)"
          fontSize={11}
          fill="#606060">
          {"Metabisulfito"}
        </text>
      </g>
      <g
        clipPath="url(#az)"
        style={{
          isolation: "isolate"
        }}>
        <text
          transform="translate(1117.67 1147.24)"
          fontSize={11}
          fill="#606060">
          {"Hidroxido de Sodio"}
        </text>
      </g>
      <g
        clipPath="url(#aA)"
        style={{
          isolation: "isolate"
        }}>
        <text
          transform="translate(978.37 1147.24)"
          fontSize={11}
          fill="#606060">
          {"Anti Incrustante"}
        </text>
      </g>
      <path
        d="M615.83 625.83v-39.2a1.79 1.79 0 0 0-1.8-1.8h-15.2"
        fill="none"
        stroke="#2f3e49"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <path
        d="M610.83 592.33v-14a1.54 1.54 0 0 0-1.5-1.5h-14a1.54 1.54 0 0 0-1.5 1.5v14a1.54 1.54 0 0 0 1.5 1.5h14a1.54 1.54 0 0 0 1.5-1.5"
        fill="#2f3e49"
      />
      <path
        fill="#00a39b"
        d="M602.6 615.1h38.8v40h-38.8z"
      />
      <path
        d="M641.3 608.4v45.2c0 .7-.3 1.3-.8 1.3h-37.1c-.4 0-.8-.6-.8-1.3v-45.2M763.72 584.83h-15.2a1.79 1.79 0 0 0-1.8 1.8v39.2"
        fill="none"
        stroke="#2f3e49"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <path
        d="M753.22 593.83h14a1.54 1.54 0 0 0 1.5-1.5v-14a1.54 1.54 0 0 0-1.5-1.5h-14a1.54 1.54 0 0 0-1.5 1.5v14a1.54 1.54 0 0 0 1.5 1.5"
        fill="#2f3e49"
      />
      <path
        d="M734.22 625.83v-39.2a1.79 1.79 0 0 0-1.8-1.8h-15.2"
        fill="none"
        stroke="#2f3e49"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <path
        d="M729.22 592.33v-14a1.54 1.54 0 0 0-1.5-1.5h-14a1.54 1.54 0 0 0-1.5 1.5v14a1.54 1.54 0 0 0 1.5 1.5h14a1.54 1.54 0 0 0 1.5-1.5"
        fill="#2f3e49"
      />
      <path
        fill="#00a39b"
        d="M720.99 615.1h38.8v40h-38.8z"
      />
      <path
        d="M759.7 608.4v45.2c0 .7-.3 1.3-.8 1.3h-37.1c-.4 0-.8-.6-.8-1.3v-45.2M1035.47 1051.65h-15.2a1.79 1.79 0 0 0-1.8 1.8v39.2"
        fill="none"
        stroke="#2f3e49"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <path
        d="M1025 1060.65h14a1.54 1.54 0 0 0 1.5-1.5v-14a1.54 1.54 0 0 0-1.5-1.5h-14a1.54 1.54 0 0 0-1.5 1.5v14a1.54 1.54 0 0 0 1.5 1.5"
        fill="#2f3e49"
      />
      <path
        d="M1006 1092.65v-39.2a1.79 1.79 0 0 0-1.8-1.8H989"
        fill="none"
        stroke="#2f3e49"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <path
        d="M1001 1059.15v-14a1.54 1.54 0 0 0-1.5-1.5h-14a1.54 1.54 0 0 0-1.5 1.5v14a1.54 1.54 0 0 0 1.5 1.5h14a1.54 1.54 0 0 0 1.5-1.5"
        fill="#2f3e49"
      />
      <path
        fill="#00a39b"
        d="M992.74 1081.92h38.8v40h-38.8z"
      />
      <path
        d="M1031.44 1075.22v45.2c0 .7-.3 1.3-.8 1.3h-37.1c-.4 0-.8-.6-.8-1.3v-45.2M1184.18 1051.65H1169a1.79 1.79 0 0 0-1.8 1.8v39.2"
        fill="none"
        stroke="#2f3e49"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <path
        d="M1173.68 1060.65h14a1.54 1.54 0 0 0 1.5-1.5v-14a1.54 1.54 0 0 0-1.5-1.5h-14a1.54 1.54 0 0 0-1.5 1.5v14a1.54 1.54 0 0 0 1.5 1.5"
        fill="#2f3e49"
      />
      <path
        d="M1154.68 1092.65v-39.2a1.79 1.79 0 0 0-1.8-1.8h-15.2"
        fill="none"
        stroke="#2f3e49"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <path
        d="M1149.68 1059.15v-14a1.54 1.54 0 0 0-1.5-1.5h-14a1.54 1.54 0 0 0-1.5 1.5v14a1.54 1.54 0 0 0 1.5 1.5h14a1.54 1.54 0 0 0 1.5-1.5"
        fill="#2f3e49"
      />
      <path
        fill="#00a39b"
        d="M1141.45 1081.92h38.8v40h-38.8z"
      />
      <path
        d="M1180.16 1075.22v45.2c0 .7-.3 1.3-.8 1.3h-37.1c-.4 0-.8-.6-.8-1.3v-45.2M1378.17 1051.65H1363a1.79 1.79 0 0 0-1.8 1.8v39.2"
        fill="none"
        stroke="#2f3e49"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <path
        d="M1367.67 1060.65h14a1.54 1.54 0 0 0 1.5-1.5v-14a1.54 1.54 0 0 0-1.5-1.5h-14a1.54 1.54 0 0 0-1.5 1.5v14a1.54 1.54 0 0 0 1.5 1.5"
        fill="#2f3e49"
      />
      <path
        d="M1348.67 1092.65v-39.2a1.79 1.79 0 0 0-1.8-1.8h-15.2"
        fill="none"
        stroke="#2f3e49"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <path
        d="M1343.67 1059.15v-14a1.54 1.54 0 0 0-1.5-1.5h-14a1.54 1.54 0 0 0-1.5 1.5v14a1.54 1.54 0 0 0 1.5 1.5h14a1.54 1.54 0 0 0 1.5-1.5"
        fill="#2f3e49"
      />
      <path
        fill="#00a39b"
        d="M1335.45 1081.92h38.8v40h-38.8z"
      />
      <path
        d="M1374.15 1075.22v45.2c0 .7-.3 1.3-.8 1.3h-37.1c-.4 0-.8-.6-.8-1.3v-45.2"
        fill="none"
        stroke="#2f3e49"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <path
        d="M321.8 453.1h31.1a5 5 0 0 1 5 5v157.3a5 5 0 0 1-5 5h-31.6M368.45 947v-77.2a5 5 0 0 1 5-5l270.72 1.9h31.6a5 5 0 0 1 5 5v78.15M178.1 1434.5H147a5 5 0 0 1-5-5v-129.1a5 5 0 0 1 5-5h31.6M1098.44 1664.78V1685a5 5 0 0 1-5 5H848.09a5 5 0 0 1-5-5v-232.45M1208.2 1652.18h64.58M231.8 1282.6h31.1a5 5 0 0 1 5 5v122.7a5 5 0 0 1-5 5h-31.6"
        fill="none"
        stroke="#35ace8"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <path
        d="M354.1 453.4h359.3a5 5 0 0 0 5-5v-55.55a5 5 0 0 1 5-5h51.25"
        fill="none"
        stroke="#00aeed"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <path
        d="M1239.9 594h-31.1a5 5 0 0 1-5-5V438.7a5 5 0 0 1 5-5h31.6M266.3 627.8h-31.1a5 5 0 0 1-5-5V467.4a5 5 0 0 1 5-5h31.6"
        fill="none"
        stroke="#35ace8"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <path
        d="M1275.1 594h116.6a8.49 8.49 0 0 1 8.5 8.5v339.59a5 5 0 0 1-5 5H617.9"
        fill="none"
        stroke="#00aeed"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <g
        clipPath="url(#aB)"
        opacity={0.3}
        style={{
          isolation: "isolate"
        }}>
        <g clipPath="url(#aC)">
          <use
            transform="matrix(.96 0 0 .96 516.11 1150.97)"
            xlinkHref="#aD"
          />
        </g>
      </g>
      <path
        d="M577.63 1162.9h-43.1a6.25 6.25 0 0 0-6.3 6.2v102.4a6.25 6.25 0 0 0 6.2 6.3h51.8a5.43 5.43 0 0 1 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2a5.08 5.08 0 0 1 3.5-1.3h53.7a6.25 6.25 0 0 0 6.3-6.2v-102.4a6.25 6.25 0 0 0-6.2-6.3h-82.6Z"
        fill="#fff"
      />

      {/* Diferencial de Presión Primera Entrada */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() =>
          loadGrafico(4, "Diferencial de Presión Primera Entrada", false)
        }>
        <g>
          <path
            className={getTarjetaClass(4, selected)}
            d="M528.33 1170.3h138.1v99.8h-138.1z"
          />
        </g>
        <g
          clipPath="url(#aF)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(537.7 1216.15)"
            fontSize={13}
            fill="#0e76e7">
            {"Diferencial de presi\xF3n"}
          </text>
        </g>
        <g
          clipPath="url(#aG)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(552.43 1231.75)"
            fontSize={13}
            fill="#0e76e7">
            {"primera entrada"}
          </text>
        </g>
        <g
          clipPath="url(#aH)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(577.29 1261.46)"
            fontSize={16}
            fill="#606060">
            {getScaledValue(datosScada.d4, 1)}
          </text>
        </g>
        <g
          clipPath="url(#aI)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(563.41 1196.3)"
            fontSize={11}
            fill="#606060">
            {"PT018 - PT019"}
          </text>
        </g>
        <g
          clipPath="url(#aJ)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(635.54 1261.07)"
            fontSize={13}
            fill="#606060">
            {"bar"}
          </text>
        </g>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(4, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(4, "Diferencial de Presión Primera Entrada");
        }}>
        <path d="M540.33 1250.3a4.81 4.81 0 0 0-.6 3.3c0 .09.2.2.3.2l.6-.11c.1 0 .2-.19.2-.29a4 4 0 0 1 .5-2.6 3.51 3.51 0 0 1 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.61c0-.19-.2-.19-.4-.19a5.58 5.58 0 0 0-2.5 2.3" />
        <path d="M538.63 1249.3a7 7 0 0 0-.8 4.7c0 .1.2.19.3.19l.6-.09c.1 0 .2-.2.2-.3a6 6 0 0 1 .7-3.9 5.47 5.47 0 0 1 3-2.6c.1-.11.2-.2.2-.31l-.2-.59c0-.1-.2-.21-.3-.21a8 8 0 0 0-3.7 3.11M550 1248c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3a3.51 3.51 0 0 1 1.9 1.7 4 4 0 0 1 .5 2.6c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a4.81 4.81 0 0 0-.6-3.3 6.84 6.84 0 0 0-2.5-2.3" />
        <path d="M550.63 1246.2c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3a5.87 5.87 0 0 1 3 2.6 6 6 0 0 1 .7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a7 7 0 0 0-.8-4.7 8.48 8.48 0 0 0-3.7-3.1M551.53 1255.3v-1.5a4.93 4.93 0 0 0-3.8-4.8v-.6a.9.9 0 0 0-.9-.9h-.5a.9.9 0 0 0-.9.9v.6a4.73 4.73 0 0 0-3.8 4.8v1.5a3.77 3.77 0 0 1-.7 2.1 1.59 1.59 0 0 0-.3.9v.1a1.58 1.58 0 0 0 1.6 1.6h8.9a1.58 1.58 0 0 0 1.6-1.6v-.1a1.59 1.59 0 0 0-.3-.9 2.72 2.72 0 0 1-.9-2.1M546.53 1262.8a1.75 1.75 0 0 0 1.7-1.7h-3.3a1.6 1.6 0 0 0 1.6 1.7" />
      </g>

      {/* Fin Diferencial de Presión Primera Entrada */}

      <path
        d="M450.61 1383.6v-73.7a5 5 0 0 1 5-5h385a5 5 0 0 1 5 5v145.19"
        fill="none"
        stroke="#0c88a5"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <g
        clipPath="url(#aK)"
        opacity={0.3}
        style={{
          isolation: "isolate"
        }}>
        <g clipPath="url(#aL)">
          <g clipPath="url(#aM)">
            <use
              transform="rotate(180 501.94 921.65) scale(.96)"
              xlinkHref="#aN"
            />
          </g>
        </g>
      </g>
      <path
        d="M942.41 1831.38h43.1a6.25 6.25 0 0 0 6.3-6.2v-102.4a6.25 6.25 0 0 0-6.2-6.3h-51.8a5.43 5.43 0 0 1-3.4-1.2l-.4-.3c-6.5-6.5-6.5-6.5-12.9.2a5.08 5.08 0 0 1-3.5 1.3h-53.7a6.25 6.25 0 0 0-6.3 6.2v102.4a6.25 6.25 0 0 0 6.2 6.3h82.6Z"
        fill="#fff"
      />

      {/* Diferencial de Presión Segunda Entrada */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() =>
          loadGrafico(11, "Diferencial de Presión Segunda Entrada", false)
        }>
        <g>
          <path
            className={getTarjetaClass(11, selected)}
            d="M853.61 1724.18h138.1v99.8h-138.1z"
          />
        </g>
        <g
          clipPath="url(#aP)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(858.55 1765.81)"
            fontSize={13}
            fill="#0e76e7">
            {"Diferencial de presi\xF3n"}
          </text>
        </g>
        <g
          clipPath="url(#aQ)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(872.13 1781.41)"
            fontSize={13}
            fill="#0e76e7">
            {"segunda entrada"}
          </text>
        </g>
        <g
          clipPath="url(#aR)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(907.08 1811.12)"
            fontSize={16}
            fill="#606060">
            {getScaledValue(datosScada.d11, 1)}
          </text>
        </g>
        <g
          clipPath="url(#aS)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(883.99 1746.23)"
            fontSize={11}
            fill="#606060">
            {"PT019 - PT024"}
          </text>
        </g>
        <g
          clipPath="url(#aT)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(960.32 1810.73)"
            fontSize={13}
            fill="#606060">
            {"bar"}
          </text>
        </g>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(11, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(11, "Diferencial de Presión Segunda Entrada");
        }}>
        <path d="M870.06 1800a4.81 4.81 0 0 0-.6 3.3c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a4 4 0 0 1 .5-2.6 3.51 3.51 0 0 1 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2a5.58 5.58 0 0 0-2.5 2.3" />
        <path d="M868.36 1799a7 7 0 0 0-.8 4.7c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a6 6 0 0 1 .7-3.9 5.5 5.5 0 0 1 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2a8 8 0 0 0-3.7 3.1M879.76 1797.66c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3a3.51 3.51 0 0 1 1.9 1.7 4 4 0 0 1 .5 2.6c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a4.81 4.81 0 0 0-.6-3.3 6.84 6.84 0 0 0-2.5-2.3" />
        <path d="M880.36 1795.86c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3a5.87 5.87 0 0 1 3 2.6 6 6 0 0 1 .7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a7 7 0 0 0-.8-4.7 8.48 8.48 0 0 0-3.7-3.1M881.26 1805v-1.5a4.93 4.93 0 0 0-3.8-4.8v-.6a.9.9 0 0 0-.9-.9h-.5a.9.9 0 0 0-.9.9v.6a4.73 4.73 0 0 0-3.8 4.8v1.5a3.77 3.77 0 0 1-.7 2.1 1.61 1.61 0 0 0-.3.9v.1a1.58 1.58 0 0 0 1.6 1.6h8.9a1.58 1.58 0 0 0 1.6-1.6v-.1a1.61 1.61 0 0 0-.3-.9 2.72 2.72 0 0 1-.9-2.1M876.26 1812.46a1.75 1.75 0 0 0 1.7-1.7h-3.3a1.6 1.6 0 0 0 1.6 1.7" />
      </g>

      {/* Fin Diferencial de Presión Segunda Entrada */}

      <g
        clipPath="url(#aU)"
        opacity={0.3}
        style={{
          isolation: "isolate"
        }}>
        <g clipPath="url(#aV)">
          <use
            transform="matrix(.96 0 0 .96 1007.67 1229.97)"
            xlinkHref="#aD"
          />
        </g>
      </g>
      <path
        d="M1069.2 1242h-43.1a6.25 6.25 0 0 0-6.3 6.2v102.4a6.25 6.25 0 0 0 6.2 6.3h51.8a5.43 5.43 0 0 1 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2a5.08 5.08 0 0 1 3.5-1.3h53.7a6.25 6.25 0 0 0 6.3-6.2v-102.4a6.25 6.25 0 0 0-6.2-6.3h-82.6Z"
        fill="#fff"
      />

      {/* pH Producto */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(12, "pH Producto", false)}>
        <g>
          <path
            className={getTarjetaClass(12, selected)}
            d="M1019.9 1249.35H1158v99.8h-138.1z"
          />
        </g>
        <g
          clipPath="url(#aX)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(1056.21 1302.56)"
            fontSize={13}
            fill="#0e76e7">
            {"pH Producto"}
          </text>
        </g>
        <g
          clipPath="url(#aY)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(1068.86 1340.46)"
            fontSize={16}
            fill="#606060">
            {getScaledValue(datosScada.d12, 1)}
          </text>
        </g>
        <g
          clipPath="url(#aZ)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(1077.48 1275.3)"
            fontSize={11}
            fill="#606060">
            {"AE005"}
          </text>
        </g>
        <g
          clipPath="url(#ba)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(1127.1 1340.07)"
            fontSize={13}
            fill="#606060">
            {"pH"}
          </text>
        </g>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(12, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(12, "pH Producto");
        }}>
        <path d="M1031.9 1329.35a4.81 4.81 0 0 0-.6 3.3c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a4 4 0 0 1 .5-2.6 3.51 3.51 0 0 1 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2a5.58 5.58 0 0 0-2.5 2.3" />
        <path d="M1030.2 1328.35a7 7 0 0 0-.8 4.7c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a6 6 0 0 1 .7-3.9 5.5 5.5 0 0 1 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2a8 8 0 0 0-3.7 3.1M1041.6 1327.05c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3a3.51 3.51 0 0 1 1.9 1.7 4 4 0 0 1 .5 2.6c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a4.81 4.81 0 0 0-.6-3.3 6.84 6.84 0 0 0-2.5-2.3" />
        <path d="M1042.2 1325.25c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3a5.87 5.87 0 0 1 3 2.6 6 6 0 0 1 .7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a7 7 0 0 0-.8-4.7 8.48 8.48 0 0 0-3.7-3.1M1043.1 1334.35v-1.5a4.93 4.93 0 0 0-3.8-4.8v-.6a.9.9 0 0 0-.9-.9h-.5a.9.9 0 0 0-.9.9v.6a4.73 4.73 0 0 0-3.8 4.8v1.5a3.77 3.77 0 0 1-.7 2.1 1.61 1.61 0 0 0-.3.9v.1a1.58 1.58 0 0 0 1.6 1.6h8.9a1.58 1.58 0 0 0 1.6-1.6v-.1a1.61 1.61 0 0 0-.3-.9 2.72 2.72 0 0 1-.9-2.1M1038.1 1341.85a1.75 1.75 0 0 0 1.7-1.7h-3.3a1.6 1.6 0 0 0 1.6 1.7" />
      </g>

      {/* Fin pH Producto */}

      <path
        d="M1086.7 1373.2a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2"
        fill="#fff"
      />
      <circle
        cx={1086.7}
        cy={1382.4}
        r={9.2}
        transform="rotate(-45 1086.705 1382.392)"
        fill="none"
        stroke="#35ace8"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <g
        clipPath="url(#bb)"
        opacity={0.3}
        style={{
          isolation: "isolate"
        }}>
        <g clipPath="url(#bc)">
          <use
            transform="matrix(.96 0 0 .96 1176.42 1229.97)"
            xlinkHref="#aD"
          />
        </g>
      </g>
      <path
        d="M1237.9 1242h-43.1a6.25 6.25 0 0 0-6.3 6.2v102.4a6.25 6.25 0 0 0 6.2 6.3h51.8a5.43 5.43 0 0 1 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2a5.08 5.08 0 0 1 3.5-1.3h53.7a6.25 6.25 0 0 0 6.3-6.2v-102.4a6.25 6.25 0 0 0-6.2-6.3h-82.6Z"
        fill="#fff"
      />

      {/* E.C. Producto */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(10, "E.C. Producto", false)}>
        <g>
          <path
            className={getTarjetaClass(10, selected)}
            d="M1188.6 1249.35h138.1v99.8h-138.1z"
          />
        </g>
        <g
          clipPath="url(#be)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(1220.2 1302.56)"
            fontSize={13}
            fill="#0e76e7">
            {"E.C Producto"}
          </text>
        </g>
        <g
          clipPath="url(#bf)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(1233.68 1340.46)"
            fontSize={16}
            fill="#606060">
            {getScaledValue(datosScada.d10, 1)}
          </text>
        </g>
        <g
          clipPath="url(#bg)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(1240.37 1275.3)"
            fontSize={11}
            fill="#606060">
            {"AE004"}
          </text>
        </g>
        <g
          clipPath="url(#bh)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(1283.1 1340.07)"
            fontSize={13}
            fill="#606060">
            {"uS/cm"}
          </text>
        </g>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(10, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(10, "E.C. Producto");
        }}>
        <path d="M1200.6 1329.35a4.81 4.81 0 0 0-.6 3.3c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a4 4 0 0 1 .5-2.6 3.51 3.51 0 0 1 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2a5.58 5.58 0 0 0-2.5 2.3" />
        <path d="M1198.9 1328.35a7 7 0 0 0-.8 4.7c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a6 6 0 0 1 .7-3.9 5.5 5.5 0 0 1 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2a8 8 0 0 0-3.7 3.1M1210.3 1327.05c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3a3.51 3.51 0 0 1 1.9 1.7 4 4 0 0 1 .5 2.6c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a4.81 4.81 0 0 0-.6-3.3 6.84 6.84 0 0 0-2.5-2.3" />
        <path d="M1210.9 1325.25c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3a5.87 5.87 0 0 1 3 2.6 6 6 0 0 1 .7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a7 7 0 0 0-.8-4.7 8.48 8.48 0 0 0-3.7-3.1M1211.8 1334.35v-1.5a4.93 4.93 0 0 0-3.8-4.8v-.6a.9.9 0 0 0-.9-.9h-.5a.9.9 0 0 0-.9.9v.6a4.73 4.73 0 0 0-3.8 4.8v1.5a3.77 3.77 0 0 1-.7 2.1 1.61 1.61 0 0 0-.3.9v.1a1.58 1.58 0 0 0 1.6 1.6h8.9a1.58 1.58 0 0 0 1.6-1.6v-.1a1.61 1.61 0 0 0-.3-.9 2.72 2.72 0 0 1-.9-2.1M1206.8 1341.85a1.75 1.75 0 0 0 1.7-1.7h-3.3a1.6 1.6 0 0 0 1.6 1.7" />
      </g>

      {/* Fin E.C. Producto */}

      <path
        d="M1255.4 1373.2a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2"
        fill="#fff"
      />
      <path
        d="M1255.4 1373.2a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2Z"
        fill="none"
        stroke="#35ace8"
        strokeMiterlimit={10}
        strokeWidth={4}
      />

      <path
        d="M1335.4 1445.2a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2"
        fill="#fff"
      />
      <path
        d="M1335.4 1445.2a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2Z"
        fill="none"
        stroke="#35ace8"
        strokeMiterlimit={10}
        strokeWidth={4}
      />

      <g
        clipPath="url(#bi)"
        opacity={0.3}
        style={{
          isolation: "isolate"
        }}>
        <g clipPath="url(#bj)">
          <g clipPath="url(#bk)">
            <use
              transform="matrix(0 -.72 1.32 0 1127.1 2375.38)"
              xlinkHref="#ab"
            />
          </g>
        </g>
      </g>
      <path
        d="m1146.1 2335.39-.1 22.1a6.25 6.25 0 0 0 6.2 6.3h.1l140.8.5a6.25 6.25 0 0 0 6.3-6.2v-.1l.1-30.7a5.43 5.43 0 0 1 1.2-3.4l.3-.4c6.5-6.5 6.5-6.5-.2-12.9a5.08 5.08 0 0 1-1.3-3.5l.1-33.7a6.25 6.25 0 0 0-6.2-6.3h-.1l-140.8-.5a6.25 6.25 0 0 0-6.3 6.2v.1Z"
        fill="#fff"
      />

      {/* Conductividad Mezcla */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(15, "Conductividad Mezcla", false)}>
        <g>
          <path
            className={getTarjetaClass(15, selected)}
            d="m1153.455 2363.968.339-97.1 138.299.484-.339 97.1z"
          />
        </g>
        <g
          clipPath="url(#bm)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="rotate(.2 -660165.602 340100.403)"
            fontSize={13}
            fill="#0e76e7">
            {"Conductividad"}
          </text>
        </g>
        <g
          clipPath="url(#bn)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="rotate(.2 -664598.58 346012.483)"
            fontSize={13}
            fill="#0e76e7">
            {"Mezcla"}
          </text>
        </g>
        <g>
          <text
            transform="rotate(.2 -673183.574 346468.645)"
            fontSize={16}
            fill="#606060">
            {getScaledValue(datosScada.d15, 1)}
          </text>
        </g>
        <g
          clipPath="url(#bp)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="rotate(.2 -672641.558 358284.977)"
            fontSize={13}
            fill="#606060">
            {"uS/cm"}
          </text>
        </g>
        <g
          clipPath="url(#bq)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="rotate(.2 -654521.087 347163.73)"
            fontSize={11}
            fill="#606060">
            {"AE006"}
          </text>
        </g>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(15, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(15, "Conductividad Mezcla");
        }}>
        <path d="M1165.1 2341.41a4.81 4.81 0 0 0-.6 3.3c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a4.68 4.68 0 0 1 .5-2.6 3.51 3.51 0 0 1 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2a4.35 4.35 0 0 0-2.5 2.3" />
        <path d="M1163.4 2340.41a7 7 0 0 0-.8 4.7c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a6 6 0 0 1 .7-3.9 5.5 5.5 0 0 1 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2a6.31 6.31 0 0 0-3.7 3.1M1174.7 2339.11c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3a3.51 3.51 0 0 1 1.9 1.7 4 4 0 0 1 .5 2.6c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a4.81 4.81 0 0 0-.6-3.3 6.14 6.14 0 0 0-2.5-2.3" />
        <path d="M1175.3 2337.31c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3a5.87 5.87 0 0 1 3 2.6 6 6 0 0 1 .7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a7 7 0 0 0-.8-4.7 8 8 0 0 0-3.7-3.1M1176.1 2346.41v-1.5a4.93 4.93 0 0 0-3.8-4.8v-.6a.9.9 0 0 0-.9-.9h-.5a.9.9 0 0 0-.9.9v.6a4.73 4.73 0 0 0-3.8 4.8v1.5a3.77 3.77 0 0 1-.7 2.1 1.61 1.61 0 0 0-.3.9v.1a1.58 1.58 0 0 0 1.6 1.6h8.9a1.58 1.58 0 0 0 1.6-1.6v-.1a1.61 1.61 0 0 0-.3-.9 2.88 2.88 0 0 1-.9-2.1M1171.1 2353.91a1.75 1.75 0 0 0 1.7-1.7h-3.3a1.73 1.73 0 0 0 1.6 1.7" />
      </g>

      {/* Fin Conductividad Mezcla */}

      <g
        clipPath="url(#br)"
        opacity={0.3}
        style={{
          isolation: "isolate"
        }}>
        <g clipPath="url(#bs)">
          <g clipPath="url(#bt)">
            <use
              transform="matrix(.96 0 0 .96 372.35 295.48)"
              xlinkHref="#aD"
            />
          </g>
        </g>
      </g>
      <path
        d="M433.9 307.4h-43.1a6.25 6.25 0 0 0-6.3 6.2V416a6.25 6.25 0 0 0 6.2 6.3h51.8a5.43 5.43 0 0 1 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2a5.08 5.08 0 0 1 3.5-1.3h53.7a6.25 6.25 0 0 0 6.3-6.2V313.7a6.25 6.25 0 0 0-6.2-6.3h-82.6Z"
        fill="#fff"
      />

      {/* Presión Entrada Pretratamiento */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(2, "Presión Entrada Pretratamiento", false)}>
        <g>
          <path
            className={getTarjetaClass(2, selected)}
            d="M384.6 314.8h138.1v99.8H384.6z"
          />
        </g>
        <g
          clipPath="url(#bv)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(411.13 357.41)"
            fontSize={13}
            fill="#0e76e7">
            {"Presi\xF3n entrada"}
          </text>
        </g>
        <g
          clipPath="url(#bw)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(415.52 373.01)"
            fontSize={13}
            fill="#0e76e7">
            {"Pretratamiento"}
          </text>
        </g>
        <g
          clipPath="url(#bx)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(433.54 405.97)"
            fontSize={16}
            fill="#606060">
            {getScaledValue(datosScada.d2, 1)}
          </text>
        </g>
        <g
          clipPath="url(#by)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(440.27 337.56)"
            fontSize={11}
            fill="#606060">
            {"PT001"}
          </text>
        </g>
        <g
          clipPath="url(#bz)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(491.78 405.58)"
            fontSize={13}
            fill="#606060">
            {"bar"}
          </text>
        </g>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(2, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(2, "Presión Entrada Pretratamiento");
        }}>
        <path d="M396.6 394.8a4.81 4.81 0 0 0-.6 3.3c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a4 4 0 0 1 .5-2.6 3.51 3.51 0 0 1 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2a5.58 5.58 0 0 0-2.5 2.3" />
        <path d="M394.9 393.8a7 7 0 0 0-.8 4.7c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a6 6 0 0 1 .7-3.9 5.5 5.5 0 0 1 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2a8 8 0 0 0-3.7 3.1M406.3 392.5c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3a3.51 3.51 0 0 1 1.9 1.7 4 4 0 0 1 .5 2.6c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a4.81 4.81 0 0 0-.6-3.3 6.84 6.84 0 0 0-2.5-2.3" />
        <path d="M406.9 390.7c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3a5.87 5.87 0 0 1 3 2.6 6 6 0 0 1 .7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a7 7 0 0 0-.8-4.7 8.48 8.48 0 0 0-3.7-3.1M407.8 399.8v-1.5a4.93 4.93 0 0 0-3.8-4.8v-.6a.9.9 0 0 0-.9-.9h-.5a.9.9 0 0 0-.9.9v.6a4.73 4.73 0 0 0-3.8 4.8v1.5a3.77 3.77 0 0 1-.7 2.1 1.61 1.61 0 0 0-.3.9v.1a1.58 1.58 0 0 0 1.6 1.6h8.9a1.58 1.58 0 0 0 1.6-1.6v-.1a1.61 1.61 0 0 0-.3-.9 2.72 2.72 0 0 1-.9-2.1M402.8 407.3a1.75 1.75 0 0 0 1.7-1.7h-3.3a1.6 1.6 0 0 0 1.6 1.7" />
      </g>

      {/* Fin Presión Entrada Pretratamiento */}

      <g
        clipPath="url(#bA)"
        opacity={0.3}
        style={{
          isolation: "isolate"
        }}>
        <g clipPath="url(#bB)">
          <g clipPath="url(#bC)">
            <use
              transform="matrix(-.96 0 0 -.96 533.88 618.33)"
              xlinkHref="#aN"
            />
          </g>
        </g>
      </g>
      <path
        d="M472.4 606.4h43.1a6.25 6.25 0 0 0 6.3-6.2V497.8a6.25 6.25 0 0 0-6.2-6.3h-51.8a5.43 5.43 0 0 1-3.4-1.2l-.4-.3c-6.5-6.5-6.5-6.5-12.9.2a5.08 5.08 0 0 1-3.5 1.3h-53.7a6.25 6.25 0 0 0-6.3 6.2v102.4a6.25 6.25 0 0 0 6.2 6.3h82.6Z"
        fill="#fff"
      />

      {/* Concentración Nitratos Alimentación */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() =>
          loadGrafico(18, "Concentración Nitratos Alimentación", false)
        }>
        <g>
          <path
            className={getTarjetaClass(18, selected)}
            d="M383.6 499.2h138.1V599H383.6z"
          />
        </g>
        <g
          clipPath="url(#bE)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(415 540.84)"
            fontSize={13}
            fill="#0e76e7">
            {"Concentraci\xF3n"}
          </text>
        </g>
        <g
          clipPath="url(#bF)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(393.26 556.44)"
            fontSize={13}
            fill="#0e76e7">
            {"Nitratos"}
            <tspan
              x={44.79}
              y={0}
              letterSpacing="-.05em"
            />
            <tspan
              x={47.7}
              y={0}>
              {"Alimentac\xF3n"}
            </tspan>
          </text>
        </g>
        <g
          clipPath="url(#bG)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(437.08 586.15)"
            fontSize={16}
            fill="#606060">
            {getScaledValue(datosScada.d18, 1)}
          </text>
        </g>
        <g
          clipPath="url(#bH)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(439.34 520.99)"
            fontSize={11}
            fill="#606060">
            {"AE009"}
          </text>
        </g>
        <g
          clipPath="url(#bI)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(487.1 585.76)"
            fontSize={13}
            fill="#606060">
            {"ppm"}
          </text>
        </g>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(18, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(18, "Concentración Nitratos Alimentación");
        }}>
        <path d="M400.1 575a4.81 4.81 0 0 0-.6 3.3c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a4 4 0 0 1 .5-2.6 3.51 3.51 0 0 1 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2a5.58 5.58 0 0 0-2.5 2.3" />
        <path d="M398.4 574a7 7 0 0 0-.8 4.7c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a6 6 0 0 1 .7-3.9 5.5 5.5 0 0 1 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2a8 8 0 0 0-3.7 3.1M409.8 572.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3a3.51 3.51 0 0 1 1.9 1.7 4 4 0 0 1 .5 2.6c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a4.81 4.81 0 0 0-.6-3.3 6.84 6.84 0 0 0-2.5-2.3" />
        <path d="M410.4 570.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3a5.87 5.87 0 0 1 3 2.6 6 6 0 0 1 .7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a7 7 0 0 0-.8-4.7 8.48 8.48 0 0 0-3.7-3.1M411.3 580v-1.5a4.93 4.93 0 0 0-3.8-4.8v-.6a.9.9 0 0 0-.9-.9h-.5a.9.9 0 0 0-.9.9v.6a4.73 4.73 0 0 0-3.8 4.8v1.5a3.77 3.77 0 0 1-.7 2.1 1.61 1.61 0 0 0-.3.9v.1a1.58 1.58 0 0 0 1.6 1.6h8.9a1.58 1.58 0 0 0 1.6-1.6v-.1a1.61 1.61 0 0 0-.3-.9 2.72 2.72 0 0 1-.9-2.1M406.3 587.5a1.75 1.75 0 0 0 1.7-1.7h-3.3a1.6 1.6 0 0 0 1.6 1.7" />
      </g>

      {/* Fin Concentración Nitratos Alimentación */}

      <path
        d="M453.6 446.4a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2"
        fill="#fff"
      />
      <path
        d="M453.6 446.4a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2Z"
        fill="none"
        stroke="#35ace8"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <g
        clipPath="url(#bJ)"
        opacity={0.3}
        style={{
          isolation: "isolate"
        }}>
        <g clipPath="url(#bK)">
          <use
            transform="matrix(.96 0 0 .96 1119.33 784.87)"
            xlinkHref="#aD"
          />
        </g>
      </g>
      <path
        d="M1180.8 796.79h-43.1a6.25 6.25 0 0 0-6.3 6.2v102.4a6.25 6.25 0 0 0 6.2 6.3h51.8a5.43 5.43 0 0 1 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2a5.08 5.08 0 0 1 3.5-1.3h53.7a6.25 6.25 0 0 0 6.3-6.2v-102.4a6.25 6.25 0 0 0-6.2-6.3h-82.6Z"
        fill="#fff"
      />

      {/* ORP Entrada Ósmosis */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(3, "ORP Entrada Ósmosis", false)}>
        <g>
          <path
            className={getTarjetaClass(3, selected)}
            d="M1131.5 804.2h138.1V904h-138.1z"
          />
        </g>
        <g
          clipPath="url(#bM)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(1160.92 846.81)"
            fontSize={13}
            fill="#0e76e7">
            {"OR"}
            <tspan
              x={19.5}
              y={0}
              letterSpacing="-.02em">
              {"P"}
            </tspan>
            <tspan
              x={27.94}
              y={0}
              xmlSpace="preserve">
              {" Entrada"}
            </tspan>
          </text>
        </g>
        <g
          clipPath="url(#bN)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(1176.42 862.41)"
            fontSize={13}
            fill="#0e76e7">
            {"Osmosis"}
          </text>
        </g>
        <g
          clipPath="url(#bO)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(1180.52 895.36)"
            fontSize={16}
            fill="#606060">
            {getScaledValue(datosScada.d3, 1)}
          </text>
        </g>
        <g
          clipPath="url(#bP)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(1184.44 826.96)"
            fontSize={11}
            fill="#606060">
            {"AE001"}
          </text>
        </g>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(3, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(3, "ORP Entrada Ósmosis");
        }}>
        <path d="M1143.5 884.19a4.81 4.81 0 0 0-.6 3.3c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a4 4 0 0 1 .5-2.6 3.51 3.51 0 0 1 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2a5.58 5.58 0 0 0-2.5 2.3" />
        <path d="M1141.8 883.19a7 7 0 0 0-.8 4.7c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a6 6 0 0 1 .7-3.9 5.5 5.5 0 0 1 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2a8 8 0 0 0-3.7 3.1M1153.2 881.89c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3a3.51 3.51 0 0 1 1.9 1.7 4 4 0 0 1 .5 2.6c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a4.81 4.81 0 0 0-.6-3.3 6.84 6.84 0 0 0-2.5-2.3" />
        <path d="M1153.8 880.09c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3a5.87 5.87 0 0 1 3 2.6 6 6 0 0 1 .7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a7 7 0 0 0-.8-4.7 8.48 8.48 0 0 0-3.7-3.1M1154.7 889.19v-1.5a4.93 4.93 0 0 0-3.8-4.8v-.6a.9.9 0 0 0-.9-.9h-.5a.9.9 0 0 0-.9.9v.6a4.73 4.73 0 0 0-3.8 4.8v1.5a3.77 3.77 0 0 1-.7 2.1 1.61 1.61 0 0 0-.3.9v.1a1.58 1.58 0 0 0 1.6 1.6h8.9a1.58 1.58 0 0 0 1.6-1.6v-.1a1.61 1.61 0 0 0-.3-.9 2.72 2.72 0 0 1-.9-2.1M1149.7 896.69a1.75 1.75 0 0 0 1.7-1.7h-3.3a1.6 1.6 0 0 0 1.6 1.7" />
      </g>

      {/* Fin ORP Entrada Ósmosis */}

      <g
        clipPath="url(#bQ)"
        style={{
          isolation: "isolate"
        }}>
        <text
          transform="translate(1238.77 894.97)"
          fontSize={13}
          fill="#606060">
          {"mV"}
        </text>
      </g>
      <path
        d="M1200.6 935.79a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2"
        fill="#fff"
      />
      <path
        d="M1200.6 935.79a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2Z"
        fill="none"
        stroke="#35ace8"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <g
        clipPath="url(#bR)"
        opacity={0.3}
        style={{
          isolation: "isolate"
        }}>
        <g clipPath="url(#bS)">
          <g clipPath="url(#bT)">
            <use
              transform="matrix(-.96 0 0 -.96 804.71 1106.15)"
              xlinkHref="#aN"
            />
          </g>
        </g>
      </g>
      <path
        d="M743.25 1094.23h43.1a6.25 6.25 0 0 0 6.3-6.2v-102.4a6.25 6.25 0 0 0-6.2-6.3h-51.8a5.43 5.43 0 0 1-3.4-1.2l-.4-.3c-6.5-6.5-6.5-6.5-12.9.2a5.08 5.08 0 0 1-3.5 1.3h-53.7a6.25 6.25 0 0 0-6.3 6.2v102.4a6.25 6.25 0 0 0 6.2 6.3h82.6Z"
        fill="#fff"
      />

      {/* Temperatura */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(13, "Temperatura", false)}>
        <g>
          <path
            className={getTarjetaClass(13, selected)}
            d="M654.45 987.03h138.1v99.8h-138.1z"
          />
        </g>
        <g
          clipPath="url(#bV)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(693.61 1024.21)"
            fontSize={13}
            fill="#0e76e7">
            <tspan letterSpacing="-.11em">{"T"}</tspan>
            <tspan
              x={6.51}
              y={0}>
              {"emperatura"}
            </tspan>
          </text>
        </g>
        <g
          clipPath="url(#bW)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(707.91 1073.98)"
            fontSize={16}
            fill="#606060">
            {getScaledValue(datosScada.d13, 1)}
          </text>
        </g>
        <g
          clipPath="url(#bX)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(766.16 1073.59)"
            fontSize={13}
            fill="#606060">
            {"C\xB0"}
          </text>
        </g>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(13, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(13, "Temperatura");
        }}>
        <path d="M670.89 1062.81a4.81 4.81 0 0 0-.6 3.3c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a4 4 0 0 1 .5-2.6 3.51 3.51 0 0 1 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2a5.58 5.58 0 0 0-2.5 2.3" />
        <path d="M669.19 1061.81a7 7 0 0 0-.8 4.7c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a6 6 0 0 1 .7-3.9 5.5 5.5 0 0 1 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2a8 8 0 0 0-3.7 3.1M680.59 1060.51c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3a3.51 3.51 0 0 1 1.9 1.7 4 4 0 0 1 .5 2.6c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a4.81 4.81 0 0 0-.6-3.3 6.84 6.84 0 0 0-2.5-2.3" />
        <path d="M681.19 1058.71c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3a5.87 5.87 0 0 1 3 2.6 6 6 0 0 1 .7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a7 7 0 0 0-.8-4.7 8.48 8.48 0 0 0-3.7-3.1M682.09 1067.81v-1.5a4.93 4.93 0 0 0-3.8-4.8v-.6a.9.9 0 0 0-.9-.9h-.5a.9.9 0 0 0-.9.9v.6a4.73 4.73 0 0 0-3.8 4.8v1.5a3.77 3.77 0 0 1-.7 2.1 1.61 1.61 0 0 0-.3.9v.1a1.58 1.58 0 0 0 1.6 1.6h8.9a1.58 1.58 0 0 0 1.6-1.6v-.1a1.61 1.61 0 0 0-.3-.9 2.72 2.72 0 0 1-.9-2.1M677.09 1075.31a1.75 1.75 0 0 0 1.7-1.7h-3.3a1.6 1.6 0 0 0 1.6 1.7" />
      </g>

      {/* Fin Temperatura */}

      <path
        d="M884.6 935.79a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2"
        fill="#fff"
      />
      <path
        d="M884.6 935.79a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2Z"
        fill="none"
        stroke="#35ace8"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <path
        d="M530.5 857.54a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2"
        fill="#fff"
      />
      <circle
        cx={530.5}
        cy={866.74}
        r={9.2}
        transform="rotate(-67.5 530.498 866.742)"
        fill="none"
        stroke="#35ace8"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <g
        clipPath="url(#bY)"
        opacity={0.3}
        style={{
          isolation: "isolate"
        }}>
        <g clipPath="url(#bZ)">
          <use
            transform="matrix(.96 0 0 .96 805.45 784.87)"
            xlinkHref="#aD"
          />
        </g>
      </g>
      <path
        d="M867 796.79h-43.1a6.25 6.25 0 0 0-6.3 6.2v102.4a6.25 6.25 0 0 0 6.2 6.3h51.8a5.43 5.43 0 0 1 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2a5.08 5.08 0 0 1 3.5-1.3h53.7a6.25 6.25 0 0 0 6.3-6.2v-102.4a6.25 6.25 0 0 0-6.2-6.3H867Z"
        fill="#fff"
      />

      {/* Caudal de Alimentación */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(7, "Caudal de Alimentación", false)}>
        <g>
          <path
            className={getTarjetaClass(7, selected)}
            d="M817.69 804.2h138.1V904h-138.1z"
          />
        </g>
        <g
          clipPath="url(#cb)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(854.24 846.81)"
            fontSize={13}
            fill="#0e76e7">
            {"Caudal de "}
          </text>
        </g>
        <g
          clipPath="url(#cc)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(847.24 862.41)"
            fontSize={13}
            fill="#0e76e7">
            {"Alimentaci\xF3n"}
          </text>
        </g>
        <g
          clipPath="url(#cd)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(866.63 895.36)"
            fontSize={16}
            fill="#606060">
            {getScaledValue(datosScada.d7, 1)}
          </text>
        </g>
        <g
          clipPath="url(#ce)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(870.56 826.96)"
            fontSize={11}
            fill="#606060">
            {"FIT001"}
          </text>
        </g>
        <g>
          <text
            transform="translate(914.88 894.97)"
            fontSize={13}
            fill="#606060">
            {"m3/h"}
          </text>
        </g>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(7, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(7, "Caudal de Alimentación");
        }}>
        <path d="M829.69 884.19a4.81 4.81 0 0 0-.6 3.3c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a4 4 0 0 1 .5-2.6 3.51 3.51 0 0 1 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2a5.58 5.58 0 0 0-2.5 2.3" />
        <path d="M828 883.19a7 7 0 0 0-.8 4.7c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a6 6 0 0 1 .7-3.9 5.5 5.5 0 0 1 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2a8 8 0 0 0-3.7 3.1M839.39 881.89c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3a3.51 3.51 0 0 1 1.9 1.7 4 4 0 0 1 .5 2.6c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a4.81 4.81 0 0 0-.6-3.3 6.84 6.84 0 0 0-2.5-2.3" />
        <path d="M840 880.09c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3a5.87 5.87 0 0 1 3 2.6 6 6 0 0 1 .7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a7 7 0 0 0-.8-4.7 8.48 8.48 0 0 0-3.7-3.1M840.89 889.19v-1.5a4.93 4.93 0 0 0-3.8-4.8v-.6a.9.9 0 0 0-.9-.9h-.5a.9.9 0 0 0-.9.9v.6a4.73 4.73 0 0 0-3.8 4.8v1.5a3.77 3.77 0 0 1-.7 2.1 1.61 1.61 0 0 0-.3.9v.1a1.58 1.58 0 0 0 1.6 1.6h8.9a1.58 1.58 0 0 0 1.6-1.6v-.1a1.61 1.61 0 0 0-.3-.9 2.72 2.72 0 0 1-.9-2.1M835.89 896.69a1.75 1.75 0 0 0 1.7-1.7h-3.3a1.6 1.6 0 0 0 1.6 1.7" />
      </g>

      {/* Fin Caudal de Alimentación */}

      <path
        d="M727.94 935.79a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2"
        fill="#fff"
      />
      <path
        d="M727.94 935.79a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2Z"
        fill="none"
        stroke="#35ace8"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <g
        clipPath="url(#cg)"
        opacity={0.3}
        style={{
          isolation: "isolate"
        }}>
        <g clipPath="url(#ch)">
          <use
            transform="matrix(.96 0 0 .96 449.24 704.14)"
            xlinkHref="#aD"
          />
        </g>
      </g>
      <path
        d="M510.8 716.06h-43.1a6.25 6.25 0 0 0-6.3 6.2v102.4a6.25 6.25 0 0 0 6.2 6.3h51.8a5.43 5.43 0 0 1 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2a5.08 5.08 0 0 1 3.5-1.3h53.7a6.25 6.25 0 0 0 6.3-6.2v-102.4a6.25 6.25 0 0 0-6.2-6.3h-82.6Z"
        fill="#fff"
      />

      {/* Diferencial Presión Filtros */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(17, "Diferencial Presión Filtros", false)}>
        <g>
          <path
            className={getTarjetaClass(17, selected)}
            d="M461.5 723.46h138.1v99.8H461.5z"
          />
        </g>
        <g
          clipPath="url(#cj)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(500.47 754.64)"
            fontSize={13}
            fill="#0e76e7">
            {"Diferencial "}
          </text>
        </g>
        <g
          clipPath="url(#ck)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(489.63 770.24)"
            fontSize={13}
            fill="#0e76e7">
            <tspan xmlSpace="preserve">{" Presi\xF3n Filtros"}</tspan>
          </text>
        </g>
        <g
          clipPath="url(#cl)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(510.43 807.65)"
            fontSize={16}
            fill="#606060">
            {getScaledValue(datosScada.d17, 1)}
          </text>
        </g>
        <g
          clipPath="url(#cm)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(568.67 807.26)"
            fontSize={13}
            fill="#606060">
            {"bar"}
          </text>
        </g>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(17, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(17, "Diferencial Presión Filtros");
        }}>
        <path d="M473.5 796.48a4.81 4.81 0 0 0-.6 3.3c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a4 4 0 0 1 .5-2.6 3.51 3.51 0 0 1 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2a5.58 5.58 0 0 0-2.5 2.3" />
        <path d="M471.8 795.48a7 7 0 0 0-.8 4.7c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a6 6 0 0 1 .7-3.9 5.5 5.5 0 0 1 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2a8 8 0 0 0-3.7 3.1M483.2 794.18c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3a3.51 3.51 0 0 1 1.9 1.7 4 4 0 0 1 .5 2.6c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a4.81 4.81 0 0 0-.6-3.3 6.84 6.84 0 0 0-2.5-2.3" />
        <path d="M483.8 792.38c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3a5.87 5.87 0 0 1 3 2.6 6 6 0 0 1 .7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a7 7 0 0 0-.8-4.7 8.48 8.48 0 0 0-3.7-3.1M484.7 801.48V800a4.93 4.93 0 0 0-3.8-4.8v-.6a.9.9 0 0 0-.9-.9h-.5a.9.9 0 0 0-.9.9v.6a4.73 4.73 0 0 0-3.8 4.8v1.5a3.77 3.77 0 0 1-.7 2.1 1.61 1.61 0 0 0-.3.9v.1a1.58 1.58 0 0 0 1.6 1.6h8.9a1.58 1.58 0 0 0 1.6-1.6v-.1a1.61 1.61 0 0 0-.3-.9 2.72 2.72 0 0 1-.9-2.1M479.7 809a1.75 1.75 0 0 0 1.7-1.7h-3.3a1.6 1.6 0 0 0 1.6 1.7" />
      </g>

      {/* Fin Diferencial Presión Filtros */}

      <g
        clipPath="url(#cn)"
        opacity={0.3}
        style={{
          isolation: "isolate"
        }}>
        <g clipPath="url(#co)">
          <g clipPath="url(#cp)">
            <use
              transform="matrix(-.96 0 0 -.96 529.2 1544.63)"
              xlinkHref="#aN"
            />
          </g>
        </g>
      </g>
      <path
        d="M467.7 1532.7h43.1a6.25 6.25 0 0 0 6.3-6.2v-102.4a6.25 6.25 0 0 0-6.2-6.3h-51.8a5.43 5.43 0 0 1-3.4-1.2l-.4-.3c-6.5-6.5-6.5-6.5-12.9.2a5.08 5.08 0 0 1-3.5 1.3h-53.7a6.25 6.25 0 0 0-6.3 6.2v102.4a6.25 6.25 0 0 0 6.2 6.3h82.6Z"
        fill="#fff"
      />

      {/* Presión Ósmosis */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(5, "Presión Ósmosis", false)}>
        <g>
          <path
            className={getTarjetaClass(5, selected)}
            d="M378.9 1425.5H517v99.8H378.9z"
          />
        </g>
        <g
          clipPath="url(#cr)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(417.13 1463.9)"
            fontSize={13}
            fill="#0e76e7">
            {"Presi\xF3n de"}
          </text>
        </g>
        <g
          clipPath="url(#cs)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(421.45 1479.5)"
            fontSize={13}
            fill="#0e76e7">
            {"Osmosis"}
          </text>
        </g>
        <g
          clipPath="url(#ct)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(432.4 1512.45)"
            fontSize={16}
            fill="#606060">
            {getScaledValue(datosScada.d5, 1)}
          </text>
        </g>
        <g
          clipPath="url(#cu)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(432 1444.05)"
            fontSize={11}
            fill="#606060">
            {"PT018"}
          </text>
        </g>
        <g
          clipPath="url(#cv)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(489.63 1512.06)"
            fontSize={13}
            fill="#606060">
            {"bar"}
          </text>
        </g>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(5, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(5, "Presión Ósmosis");
        }}>
        <path d="M395.4 1501.3a4.81 4.81 0 0 0-.6 3.3c0 .09.2.2.3.2l.6-.11c.1 0 .2-.19.2-.29a4 4 0 0 1 .5-2.6 3.51 3.51 0 0 1 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.61c0-.19-.2-.19-.4-.19a5.58 5.58 0 0 0-2.5 2.3" />
        <path d="M393.7 1500.3a7 7 0 0 0-.8 4.7c0 .1.2.19.3.19l.6-.09c.1 0 .2-.2.2-.3a6 6 0 0 1 .7-3.9 5.47 5.47 0 0 1 3-2.6c.1-.11.2-.2.2-.31l-.2-.59c0-.1-.2-.21-.3-.21a8 8 0 0 0-3.7 3.11M405.1 1499c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3a3.51 3.51 0 0 1 1.9 1.7 4 4 0 0 1 .5 2.6c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a4.81 4.81 0 0 0-.6-3.3 6.84 6.84 0 0 0-2.5-2.3" />
        <path d="M405.7 1497.2c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3a5.87 5.87 0 0 1 3 2.6 6 6 0 0 1 .7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a7 7 0 0 0-.8-4.7 8.48 8.48 0 0 0-3.7-3.1M406.6 1506.3v-1.5a4.93 4.93 0 0 0-3.8-4.8v-.6a.9.9 0 0 0-.9-.9h-.5a.9.9 0 0 0-.9.9v.6a4.73 4.73 0 0 0-3.8 4.8v1.5a3.77 3.77 0 0 1-.7 2.1 1.59 1.59 0 0 0-.3.9v.1a1.58 1.58 0 0 0 1.6 1.6h8.9a1.58 1.58 0 0 0 1.6-1.6v-.1a1.59 1.59 0 0 0-.3-.9 2.72 2.72 0 0 1-.9-2.1M401.6 1513.8a1.75 1.75 0 0 0 1.7-1.7H400a1.6 1.6 0 0 0 1.6 1.7" />
      </g>

      {/* Fin Presión Ósmosis */}

      <g
        clipPath="url(#cw)"
        opacity={0.3}
        style={{
          isolation: "isolate"
        }}>
        <g clipPath="url(#cx)">
          <g clipPath="url(#cy)">
            <use
              transform="matrix(0 -.85 1.18 0 663.66 1545.95)"
              xlinkHref="#aN"
            />
          </g>
        </g>
      </g>
      <path
        d="M673.08 1482.62v43.1a6.25 6.25 0 0 0 6.2 6.3h133.9a6.25 6.25 0 0 0 6.3-6.2V1474a5.43 5.43 0 0 1 1.2-3.4l.3-.4c6.5-6.5 6.5-6.5-.2-12.9a5.08 5.08 0 0 1-1.3-3.5v-31.34a6.25 6.25 0 0 0-6.2-6.3h-133.9a6.25 6.25 0 0 0-6.3 6.2v60.24Z"
        fill="#fff"
      />

      {/* Presión entre Etapas */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(19, "Presión entre Etapas", false)}>
        <g>
          <path
            className={getTarjetaClass(19, selected)}
            d="M680.48 1416.18h131.29v115.73H680.48z"
          />
        </g>
        <g
          clipPath="url(#cA)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(706.76 1466.25)"
            fontSize={13}
            fill="#0e76e7">
            {"Presi\xF3n entre"}
          </text>
        </g>
        <g
          clipPath="url(#cB)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(726.36 1481.85)"
            fontSize={13}
            fill="#0e76e7">
            {"Etapas"}
          </text>
        </g>
        <g
          clipPath="url(#cC)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(729.07 1513.5)"
            fontSize={16}
            fill="#606060">
            {getScaledValue(datosScada.d19, 1)}
          </text>
        </g>
        <g
          clipPath="url(#cD)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(730.28 1440.07)"
            fontSize={11}
            fill="#606060">
            {"PT019"}
          </text>
        </g>
        <g
          clipPath="url(#cE)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(784.39 1513.8)"
            fontSize={13}
            fill="#606060">
            {"bar"}
          </text>
        </g>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(19, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(19, "Presión entre Etapas");
        }}>
        <path d="M689.33 1501.69a4.81 4.81 0 0 0-.6 3.3c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a4 4 0 0 1 .5-2.6 3.51 3.51 0 0 1 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2a5.58 5.58 0 0 0-2.5 2.3" />
        <path d="M687.63 1500.69a7 7 0 0 0-.8 4.7c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a6 6 0 0 1 .7-3.9 5.5 5.5 0 0 1 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2a8 8 0 0 0-3.7 3.1M699 1499.39c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3a3.51 3.51 0 0 1 1.9 1.7 4 4 0 0 1 .5 2.6c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a4.81 4.81 0 0 0-.6-3.3 6.84 6.84 0 0 0-2.5-2.3" />
        <path d="M699.63 1497.59c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3a5.87 5.87 0 0 1 3 2.6 6 6 0 0 1 .7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a7 7 0 0 0-.8-4.7 8.48 8.48 0 0 0-3.7-3.1M700.53 1506.69v-1.5a4.93 4.93 0 0 0-3.8-4.8v-.6a.9.9 0 0 0-.9-.9h-.5a.9.9 0 0 0-.9.9v.6a4.73 4.73 0 0 0-3.8 4.8v1.5a3.77 3.77 0 0 1-.7 2.1 1.61 1.61 0 0 0-.3.9v.1a1.58 1.58 0 0 0 1.6 1.6h8.9a1.58 1.58 0 0 0 1.6-1.6v-.1a1.61 1.61 0 0 0-.3-.9 2.72 2.72 0 0 1-.9-2.1M695.53 1514.19a1.75 1.75 0 0 0 1.7-1.7h-3.3a1.6 1.6 0 0 0 1.6 1.7" />
      </g>

      {/* Fin Presión Entre Etapas */}

      {/* Caudal de Permeado */}

      <g transform="translate(495 -10)">
        <g
          clipPath="url(#cw)"
          opacity={0.3}
          style={{
            isolation: "isolate"
          }}>
          <g clipPath="url(#cx)">
            <g clipPath="url(#cy)">
              <use
                transform="matrix(0 -.85 1.18 0 663.66 1545.95)"
                xlinkHref="#aN"
              />
            </g>
          </g>
        </g>
        <path
          d="M673.08 1482.62v43.1a6.25 6.25 0 0 0 6.2 6.3h133.9a6.25 6.25 0 0 0 6.3-6.2V1474a5.43 5.43 0 0 1 1.2-3.4l.3-.4c6.5-6.5 6.5-6.5-.2-12.9a5.08 5.08 0 0 1-1.3-3.5v-31.34a6.25 6.25 0 0 0-6.2-6.3h-133.9a6.25 6.25 0 0 0-6.3 6.2v60.24Z"
          fill="#fff"
        />

        {/* Tarjeta */}
        <g
          className="cursorPointer"
          onClick={() => loadGrafico(8, "Caudal de Permeado", false)}>
          <g>
            <path
              className={getTarjetaClass(8, selected)}
              d="M680.48 1416.18h131.29v115.73H680.48z"
            />
          </g>
          <g
            clipPath="url(#cA)"
            style={{
              isolation: "isolate"
            }}>
            <text
              transform="translate(716.76 1466.25)"
              fontSize={13}
              fill="#0e76e7">
              {"Caudal de"}
            </text>
          </g>
          <g>
            <text
              transform="translate(716.36 1481.85)"
              fontSize={13}
              fill="#0e76e7">
              {"Permeado"}
            </text>
          </g>
          <g
            clipPath="url(#cC)"
            style={{
              isolation: "isolate"
            }}>
            <text
              transform="translate(729.07 1513.5)"
              fontSize={16}
              fill="#606060">
              {getScaledValue(datosScada.d8, 1)}
            </text>
          </g>
          <g>
            <text
              transform="translate(700.28 1440.07)"
              fontSize={11}
              fill="#606060">
              {"(FIT-001)-(FIT-003)"}
            </text>
          </g>
          <g>
            <text
              transform="translate(774.39 1513.8)"
              fontSize={13}
              fill="#606060">
              {"m3/h"}
            </text>
          </g>
        </g>

        {/* Campana */}
        <g
          className={`${getTemaAlarma(8, loading, datosAlarmas)} cursorPointer`}
          onClick={() => {
            onClickAlarma(8, "Caudal de Permeado");
          }}>
          <path d="M689.33 1501.69a4.81 4.81 0 0 0-.6 3.3c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a4 4 0 0 1 .5-2.6 3.51 3.51 0 0 1 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2a5.58 5.58 0 0 0-2.5 2.3" />
          <path d="M687.63 1500.69a7 7 0 0 0-.8 4.7c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a6 6 0 0 1 .7-3.9 5.5 5.5 0 0 1 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2a8 8 0 0 0-3.7 3.1M699 1499.39c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3a3.51 3.51 0 0 1 1.9 1.7 4 4 0 0 1 .5 2.6c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a4.81 4.81 0 0 0-.6-3.3 6.84 6.84 0 0 0-2.5-2.3" />
          <path d="M699.63 1497.59c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3a5.87 5.87 0 0 1 3 2.6 6 6 0 0 1 .7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a7 7 0 0 0-.8-4.7 8.48 8.48 0 0 0-3.7-3.1M700.53 1506.69v-1.5a4.93 4.93 0 0 0-3.8-4.8v-.6a.9.9 0 0 0-.9-.9h-.5a.9.9 0 0 0-.9.9v.6a4.73 4.73 0 0 0-3.8 4.8v1.5a3.77 3.77 0 0 1-.7 2.1 1.61 1.61 0 0 0-.3.9v.1a1.58 1.58 0 0 0 1.6 1.6h8.9a1.58 1.58 0 0 0 1.6-1.6v-.1a1.61 1.61 0 0 0-.3-.9 2.72 2.72 0 0 1-.9-2.1M695.53 1514.19a1.75 1.75 0 0 0 1.7-1.7h-3.3a1.6 1.6 0 0 0 1.6 1.7" />
        </g>
      </g>

      {/* Fin Caudal de Permeado */}

      <path
        d="M450.2 1375.3a9.2 9.2 0 1 1-9.2 9.2 9.19 9.19 0 0 1 9.2-9.2"
        fill="#fff"
      />
      <path
        d="M450.2 1375.3a9.2 9.2 0 1 1-9.2 9.2 9.19 9.19 0 0 1 9.2-9.2Z"
        fill="none"
        stroke="#35ace8"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <path
        d="M924.88 1680.83a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2"
        fill="#fff"
      />
      <circle
        cx={924.88}
        cy={1690.03}
        r={9.2}
        transform="rotate(-80.78 924.943 1690.058)"
        fill="none"
        stroke="#35ace8"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <path
        d="M847.24 1443.35a9.2 9.2 0 1 1-9.2 9.2 9.19 9.19 0 0 1 9.2-9.2"
        fill="#fff"
      />
      <circle
        cx={847.24}
        cy={1452.55}
        r={9.2}
        transform="rotate(-67.5 847.242 1452.545)"
        fill="none"
        stroke="#35ace8"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <g
        clipPath="url(#cF)"
        opacity={0.3}
        style={{
          isolation: "isolate"
        }}>
        <g clipPath="url(#cG)">
          <g clipPath="url(#cH)">
            <use
              transform="matrix(.96 0 0 .96 1016.82 1495.36)"
              xlinkHref="#aD"
            />
          </g>
        </g>
      </g>
      <path
        d="M1078.29 1507.38h-43.1a6.25 6.25 0 0 0-6.3 6.2V1616a6.25 6.25 0 0 0 6.2 6.3h51.8a5.43 5.43 0 0 1 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2a5.08 5.08 0 0 1 3.5-1.3h53.7a6.25 6.25 0 0 0 6.3-6.2v-102.4a6.25 6.25 0 0 0-6.2-6.3h-82.6Z"
        fill="#fff"
      />

      {/* Presión de Rechazo */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(6, "Presión de Rechazo", false)}>
        <g>
          <path
            className={getTarjetaClass(6, selected)}
            d="M1028.99 1514.78h138.1v99.8h-138.1z"
          />
        </g>
        <g
          clipPath="url(#cJ)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(1068.62 1557.3)"
            fontSize={13}
            fill="#0e76e7">
            {"Presi\xF3n de"}
          </text>
        </g>
        <g
          clipPath="url(#cK)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(1074.5 1572.9)"
            fontSize={13}
            fill="#0e76e7">
            {"Rechazo"}
          </text>
        </g>
        <g
          clipPath="url(#cL)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(1078.01 1605.85)"
            fontSize={16}
            fill="#606060">
            {getScaledValue(datosScada.d6, 1)}
          </text>
        </g>
        <g
          clipPath="url(#cM)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(1083.49 1537.45)"
            fontSize={11}
            fill="#606060">
            {"PT024"}
          </text>
        </g>
        <g
          clipPath="url(#cN)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(1136.26 1605.46)"
            fontSize={13}
            fill="#606060">
            {"bar"}
          </text>
        </g>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(6, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(6, "Presión de Rechazo");
        }}>
        <path d="M1041.05 1594.72a4.81 4.81 0 0 0-.6 3.3c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a4 4 0 0 1 .5-2.6 3.51 3.51 0 0 1 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2a5.58 5.58 0 0 0-2.5 2.3" />
        <path d="M1039.35 1593.72a7 7 0 0 0-.8 4.7c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a6 6 0 0 1 .7-3.9 5.5 5.5 0 0 1 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2a8 8 0 0 0-3.7 3.1M1050.75 1592.42c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3a3.51 3.51 0 0 1 1.9 1.7 4 4 0 0 1 .5 2.6c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a4.81 4.81 0 0 0-.6-3.3 6.84 6.84 0 0 0-2.5-2.3" />
        <path d="M1051.35 1590.62c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3a5.87 5.87 0 0 1 3 2.6 6 6 0 0 1 .7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a7 7 0 0 0-.8-4.7 8.48 8.48 0 0 0-3.7-3.1M1052.25 1599.72v-1.5a4.93 4.93 0 0 0-3.8-4.8v-.6a.9.9 0 0 0-.9-.9h-.5a.9.9 0 0 0-.9.9v.6a4.73 4.73 0 0 0-3.8 4.8v1.5a3.77 3.77 0 0 1-.7 2.1 1.61 1.61 0 0 0-.3.9v.1a1.58 1.58 0 0 0 1.6 1.6h8.9a1.58 1.58 0 0 0 1.6-1.6v-.1a1.61 1.61 0 0 0-.3-.9 2.72 2.72 0 0 1-.9-2.1M1047.25 1607.22a1.75 1.75 0 0 0 1.7-1.7h-3.3a1.6 1.6 0 0 0 1.6 1.7" />
      </g>
      {/* Fin Presión de Rechazo */}

      <path
        d="M1098.56 1646.38a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2"
        fill="#fff"
      />
      <path
        d="M1098.56 1646.38a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2Z"
        fill="none"
        stroke="#35ace8"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <g
        clipPath="url(#cO)"
        opacity={0.3}
        style={{
          isolation: "isolate"
        }}>
        <g clipPath="url(#cP)">
          <g clipPath="url(#cQ)">
            <use
              transform="matrix(-.96 0 0 -.96 349.42 1107.37)"
              xlinkHref="#aN"
            />
          </g>
        </g>
      </g>
      <path
        d="M287.9 1095.45H331a6.25 6.25 0 0 0 6.3-6.2v-102.4a6.25 6.25 0 0 0-6.2-6.3h-51.8a5.43 5.43 0 0 1-3.4-1.2l-.4-.3c-6.5-6.5-6.5-6.5-12.9.2a5.08 5.08 0 0 1-3.5 1.3h-53.7a6.25 6.25 0 0 0-6.3 6.2v102.4a6.25 6.25 0 0 0 6.2 6.3h82.6Z"
        fill="#fff"
      />

      {/* E.C. de Alimentación */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(9, "E.C. de Alimentación", false)}>
        <g>
          <path
            className={getTarjetaClass(9, selected)}
            d="M199.1 988.25h138.1v99.8H199.1z"
          />
        </g>
        <g
          clipPath="url(#cS)"
          style={{
            isolation: "isolate"
          }}>
          <g
            clipPath="url(#cT)"
            style={{
              isolation: "isolate"
            }}>
            <text
              transform="translate(253.17 1033.68)"
              fontSize={13}
              fill="#0e76e7">
              {"E.C de "}
            </text>
          </g>
          <g
            clipPath="url(#cU)"
            style={{
              isolation: "isolate"
            }}>
            <text
              transform="translate(237.67 1049.27)"
              fontSize={13}
              fill="#0e76e7">
              {"Alimentaci\xF3n"}
            </text>
          </g>
        </g>
        <g
          clipPath="url(#cV)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(244.18 1075.19)"
            fontSize={16}
            fill="#606060">
            {getScaledValue(datosScada.d9, 0)}
          </text>
        </g>
        <g>
          <text
            transform="translate(291.21 1074.8)"
            fontSize={13}
            fill="#606060">
            {"uS/cm"}
          </text>
        </g>
        <g
          clipPath="url(#cW)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="translate(258.7 1013.83)"
            fontSize={11}
            fill="#606060">
            {"AE003"}
          </text>
        </g>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(9, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(9, "E.C. de Alimentación");
        }}>
        <path d="M210.76 1064a4.81 4.81 0 0 0-.6 3.3c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a4 4 0 0 1 .5-2.6 3.51 3.51 0 0 1 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2a5.58 5.58 0 0 0-2.5 2.3" />
        <path d="M209.06 1063a7 7 0 0 0-.8 4.7c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a6 6 0 0 1 .7-3.9 5.5 5.5 0 0 1 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2a8 8 0 0 0-3.7 3.1M220.46 1061.72c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3a3.51 3.51 0 0 1 1.9 1.7 4 4 0 0 1 .5 2.6c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a4.81 4.81 0 0 0-.6-3.3 6.84 6.84 0 0 0-2.5-2.3" />
        <path d="M221.06 1059.92c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3a5.87 5.87 0 0 1 3 2.6 6 6 0 0 1 .7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a7 7 0 0 0-.8-4.7 8.48 8.48 0 0 0-3.7-3.1M222 1069v-1.5a4.93 4.93 0 0 0-3.8-4.8v-.6a.9.9 0 0 0-.9-.9h-.5a.9.9 0 0 0-.9.9v.6a4.73 4.73 0 0 0-3.8 4.8v1.5a3.77 3.77 0 0 1-.7 2.1 1.61 1.61 0 0 0-.3.9v.1a1.58 1.58 0 0 0 1.6 1.6h8.9a1.58 1.58 0 0 0 1.6-1.6v-.1a1.61 1.61 0 0 0-.3-.9 2.72 2.72 0 0 1-.9-2.1M217 1076.52a1.75 1.75 0 0 0 1.7-1.7h-3.3a1.6 1.6 0 0 0 1.6 1.7" />
      </g>

      {/* Fin E.C. de Alimentación */}

      <path
        d="M323.47 935.79a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2"
        fill="#fff"
      />
      <circle
        cx={323.47}
        cy={944.99}
        r={9.2}
        transform="rotate(-22.5 323.47 944.992)"
        fill="none"
        stroke="#35ace8"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <path
        fill="none"
        stroke="#00aeed"
        strokeMiterlimit={10}
        strokeWidth={4}
        d="M224.7 556.7h-33"
      />
      <path
        d="M776.9 507c12.5-4.9 17.1-3.9 17.1-18v-61.9a12.85 12.85 0 0 0-12.7-13h-30a13.24 13.24 0 0 0-13 13V489c0 14.1 4.7 13.1 17.1 18v3.9c0 2.2 2.2 4.3 4.9 4.3h12.3a4.71 4.71 0 0 0 4.3-4.3Z"
        fill="#323e48"
      />
      <path
        fill="#0e76e7"
        d="M738.3 430H794v59.9h-55.7z"
      />
      <g
        clipPath="url(#cY)"
        style={{
          isolation: "isolate"
        }}>
        <text
          transform="translate(756.64 531.41)"
          fontSize={11}
          fill="#606060">
          {"F001"}
        </text>
      </g>
      <path
        d="M865.2 507c12.5-4.9 17.1-3.9 17.1-18v-61.9a12.85 12.85 0 0 0-12.7-13h-30a13.24 13.24 0 0 0-13 13V489c0 14.1 4.7 13.1 17.1 18v3.9c0 2.2 2.2 4.3 4.9 4.3h12.3a4.71 4.71 0 0 0 4.3-4.3Z"
        fill="#323e48"
      />
      <path
        fill="#0e76e7"
        d="M826.6 430h55.7v59.9h-55.7z"
      />
      <g
        clipPath="url(#cZ)"
        style={{
          isolation: "isolate"
        }}>
        <text
          transform="translate(845.02 531.41)"
          fontSize={11}
          fill="#606060">
          {"F002"}
        </text>
      </g>
      <path
        d="M948.8 507c12.5-4.9 17.1-3.9 17.1-18v-61.9a12.85 12.85 0 0 0-12.7-13h-30a13.24 13.24 0 0 0-13 13V489c0 14.1 4.7 13.1 17.1 18v3.9c0 2.2 2.2 4.3 4.9 4.3h12.3a4.71 4.71 0 0 0 4.3-4.3Z"
        fill="#323e48"
      />
      <path
        fill="#0e76e7"
        d="M910.2 430h55.7v59.9h-55.7z"
      />
      <g
        clipPath="url(#da)"
        style={{
          isolation: "isolate"
        }}>
        <text
          transform="translate(928.62 531.41)"
          fontSize={11}
          fill="#606060">
          {"F003"}
        </text>
      </g>
      <path
        d="M1032.4 507c12.5-4.9 17.1-3.9 17.1-18v-61.9a12.85 12.85 0 0 0-12.7-13h-30a13.24 13.24 0 0 0-13 13V489c0 14.1 4.7 13.1 17.1 18v3.9c0 2.2 2.2 4.3 4.9 4.3h12.3a4.71 4.71 0 0 0 4.3-4.3Z"
        fill="#323e48"
      />
      <path
        fill="#0e76e7"
        d="M993.8 430h55.7v59.9h-55.7z"
      />
      <g
        clipPath="url(#db)"
        style={{
          isolation: "isolate"
        }}>
        <text
          transform="translate(1012.22 531.41)"
          fontSize={11}
          fill="#606060">
          {"F004"}
        </text>
      </g>
      <path
        d="M1116 507c12.5-4.9 17.1-3.9 17.1-18v-61.9a12.85 12.85 0 0 0-12.7-13h-30a13.24 13.24 0 0 0-13 13V489c0 14.1 4.7 13.1 17.1 18v3.9c0 2.2 2.2 4.3 4.9 4.3h12.3a4.71 4.71 0 0 0 4.3-4.3Z"
        fill="#323e48"
      />
      <path
        fill="#0e76e7"
        d="M1077.4 430h55.7v59.9h-55.7z"
      />
      <g
        clipPath="url(#dc)"
        style={{
          isolation: "isolate"
        }}>
        <text
          transform="translate(1095.82 531.41)"
          fontSize={11}
          fill="#606060">
          {"F005"}
        </text>
      </g>
      <path
        d="m694.5 469.2 3.2-3.2a1.67 1.67 0 0 1 2.2.1l3.1 3.1a1.61 1.61 0 0 1 .5 1.1 1.58 1.58 0 0 1-1.6 1.6h-6.3a1.58 1.58 0 0 1-1.6-1.6 1.61 1.61 0 0 1 .5-1.1"
        fill="#cbcbcb"
      />
      <path
        d="M702.6 470.3a.65.65 0 0 1-.6.6h-6.3a.58.58 0 0 1-.6-.6.52.52 0 0 1 .2-.4l3.1-3.1a.75.75 0 0 1 .9 0l3.1 3.1a.52.52 0 0 1 .2.4m2 0a2.5 2.5 0 0 0-.8-1.8l-3.1-3.1a2.51 2.51 0 0 0-3.5-.2l-.1.1-.1.1-3.1 3.1a2.74 2.74 0 0 0-.8 2.3 2.61 2.61 0 0 0 2.7 2.1h6.1a2.67 2.67 0 0 0 2.7-2.6"
        fill="#fff"
      />
      <path
        d="m550.5 469.2 3.2-3.2a1.67 1.67 0 0 1 2.2.1l3.1 3.1a1.61 1.61 0 0 1 .5 1.1 1.58 1.58 0 0 1-1.6 1.6h-6.3a1.58 1.58 0 0 1-1.6-1.6 1.61 1.61 0 0 1 .5-1.1"
        fill="#cbcbcb"
      />
      <path
        d="M558.6 470.3a.65.65 0 0 1-.6.6h-6.3a.58.58 0 0 1-.6-.6.52.52 0 0 1 .2-.4l3.1-3.1a.75.75 0 0 1 .9 0l3.1 3.1a.52.52 0 0 1 .2.4m2 0a2.5 2.5 0 0 0-.8-1.8l-3.1-3.1a2.51 2.51 0 0 0-3.5-.2l-.1.1-.1.1-3.1 3.1a2.74 2.74 0 0 0-.8 2.3 2.61 2.61 0 0 0 2.7 2.1h6.1a2.67 2.67 0 0 0 2.7-2.6"
        fill="#fff"
      />
      <path
        fill="none"
        stroke="#35ace8"
        strokeMiterlimit={10}
        strokeWidth={4}
        d="M1334.5 1836.69v559.3"
      />
      <path
        d="M1334.5 2052a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2"
        fill="#fff"
      />
      <circle
        cx={1334.5}
        cy={2061.2}
        r={9.2}
        transform="rotate(-67.5 1334.5 2061.199)"
        fill="none"
        stroke="#35ace8"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <path
        d="M1334.5 2307.59a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2"
        fill="#fff"
      />
      <circle
        cx={1334.5}
        cy={2316.79}
        r={9.2}
        transform="rotate(-67.5 1334.498 2316.793)"
        fill="none"
        stroke="#35ace8"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <g
        clipPath="url(#dd)"
        opacity={0.3}
        style={{
          isolation: "isolate"
        }}>
        <g clipPath="url(#de)">
          <g clipPath="url(#df)">
            <use
              transform="matrix(0 -.72 1.3 0 1130.2 2245.08)"
              xlinkHref="#ab"
            />
          </g>
        </g>
      </g>
      <path
        d="m1146.1 2205.1-.1 22.1a6.25 6.25 0 0 0 6.2 6.3h.1l140.8.5a6.25 6.25 0 0 0 6.3-6.2v-.1l.1-30.7a5.43 5.43 0 0 1 1.2-3.4l.3-.4c6.5-6.5 6.5-6.5-.2-12.9a5.08 5.08 0 0 1-1.3-3.5l.1-33.7a6.25 6.25 0 0 0-6.2-6.3h-.1l-140.8-.5a6.25 6.25 0 0 0-6.3 6.2v.1Z"
        fill="#fff"
      />

      {/* Concentración Nitratos Mezcla */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(20, "Concentración Nitratos Mezcla", false)}>
        <g>
          <path
            className={getTarjetaClass(20, selected)}
            d="m1153.456 2233.664.339-97.1 138.299.483-.34 97.1z"
          />
        </g>
        <g
          clipPath="url(#dh)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="rotate(.2 -622943.616 339932.306)"
            fontSize={13}
            fill="#0e76e7">
            {"Concentraci\xF3n"}
          </text>
        </g>
        <g
          clipPath="url(#di)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="rotate(.2 -627388.335 339117.868)"
            fontSize={13}
            fill="#0e76e7">
            {"Nitratos Mezcla"}
          </text>
        </g>
        <g
          clipPath="url(#dj)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="rotate(.2 -635853.496 347500.708)"
            fontSize={16}
            fill="#606060">
            {getScaledValue(datosScada.d20, 1)}
          </text>
        </g>
        <g>
          <text
            transform="rotate(.2 -635307.25 361740.65)"
            fontSize={13}
            fill="#606060">
            {"ppm"}
          </text>
        </g>
        <g
          clipPath="url(#dl)"
          style={{
            isolation: "isolate"
          }}>
          <text
            transform="rotate(.2 -617298.742 347201.898)"
            fontSize={11}
            fill="#606060">
            {"AE010"}
          </text>
        </g>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(20, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(20, "Concentración Nitratos Mezcla");
        }}>
        <path d="M1165.05 2211.8a4.81 4.81 0 0 0-.6 3.3c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a4.68 4.68 0 0 1 .5-2.6 3.51 3.51 0 0 1 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2a4.35 4.35 0 0 0-2.5 2.3" />
        <path d="M1163.35 2210.8a7 7 0 0 0-.8 4.7c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a6 6 0 0 1 .7-3.9 5.5 5.5 0 0 1 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2a6.31 6.31 0 0 0-3.7 3.1M1174.65 2209.5c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3a3.51 3.51 0 0 1 1.9 1.7 4 4 0 0 1 .5 2.6c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a4.81 4.81 0 0 0-.6-3.3 6.14 6.14 0 0 0-2.5-2.3" />
        <path d="M1175.25 2207.7c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3a5.87 5.87 0 0 1 3 2.6 6 6 0 0 1 .7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a7 7 0 0 0-.8-4.7 8 8 0 0 0-3.7-3.1M1176.05 2216.8v-1.5a4.93 4.93 0 0 0-3.8-4.8v-.6a.9.9 0 0 0-.9-.9h-.5a.9.9 0 0 0-.9.9v.6a4.73 4.73 0 0 0-3.8 4.8v1.5a3.77 3.77 0 0 1-.7 2.1 1.61 1.61 0 0 0-.3.9v.1a1.58 1.58 0 0 0 1.6 1.6h8.9a1.58 1.58 0 0 0 1.6-1.6v-.1a1.61 1.61 0 0 0-.3-.9 2.88 2.88 0 0 1-.9-2.1M1171.05 2224.3a1.75 1.75 0 0 0 1.7-1.7h-3.3a1.73 1.73 0 0 0 1.6 1.7" />
      </g>

      {/* Fin Concentración Nitratos Mezcla */}

      <path
        d="M1334.5 2177.3a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2"
        fill="#fff"
      />
      <circle
        cx={1334.5}
        cy={2186.5}
        r={9.2}
        transform="rotate(-67.5 1334.502 2186.497)"
        fill="none"
        stroke="#35ace8"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <path
        fill="none"
        stroke="#35ace8"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M651.7 1850.7H468.1v24.8M465.2 2034.8v30.9H280.9"
      />
      <path
        fill="none"
        stroke="#35ace8"
        strokeMiterlimit={10}
        strokeWidth={4}
        d="M225 2057.3h-89.5"
      />
      <path
        fill="none"
        stroke="#35ace8"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M171.7 2057.3v-206.6H445v26.5M93.7 2057.36H67.1V1389.2"
      />
      <path
        fill="none"
        stroke="#35ace8"
        strokeMiterlimit={10}
        strokeWidth={4}
        d="M141.9 1383.6H48.3"
      />
      <path
        d="M728.8 394.65a2 2 0 0 1-1.9-1.9v-9a1.9 1.9 0 0 1 1.9-1.9 2.11 2.11 0 0 1 1.3.5l4.5 4.5a2 2 0 0 1 .1 2.6l-.1.1-4.5 4.5a1.61 1.61 0 0 1-1.3.6"
        fill="#00aeed"
      />
      <path
        d="M728.8 383a.86.86 0 0 1 .6.3l4.5 4.5a1.05 1.05 0 0 1 0 1.3l-4.5 4.5a.86.86 0 0 1-.6.3.9.9 0 0 1-.9-.9v-9a.92.92 0 0 1 .9-1m0-2a2.9 2.9 0 0 0-2.9 2.9v9a2.9 2.9 0 0 0 2.9 2.9 3 3 0 0 0 2-.8l4.5-4.5.1-.1.1-.1a2.91 2.91 0 0 0-.2-3.9l-4.5-4.5a2.52 2.52 0 0 0-2-.9"
        fill="#fff"
      />
      <path
        d="M759.85 399a2 2 0 0 1 1.9-1.9h9a1.9 1.9 0 0 1 1.9 1.9 2.11 2.11 0 0 1-.5 1.3l-4.5 4.5a2 2 0 0 1-2.6.1l-.1-.1-4.5-4.5a1.61 1.61 0 0 1-.6-1.3"
        fill="#00aeed"
      />
      <path
        d="M771.55 399a.86.86 0 0 1-.3.6l-4.5 4.5a1.05 1.05 0 0 1-1.3 0l-4.5-4.5a.86.86 0 0 1-.3-.6.9.9 0 0 1 .9-.9h9a.92.92 0 0 1 1 .9m2 0a2.9 2.9 0 0 0-2.9-2.9h-9a2.9 2.9 0 0 0-2.9 2.9 3 3 0 0 0 .8 2l4.5 4.5.1.1.1.1a2.91 2.91 0 0 0 3.9-.2l4.5-4.5a2.52 2.52 0 0 0 .9-2"
        fill="#fff"
      />
      <path
        d="M841.43 399a2 2 0 0 1 1.9-1.9h9a1.9 1.9 0 0 1 1.9 1.9 2.11 2.11 0 0 1-.5 1.3l-4.5 4.5a2 2 0 0 1-2.6.1l-.1-.1-4.5-4.5a1.61 1.61 0 0 1-.6-1.3"
        fill="#00aeed"
      />
      <path
        d="M853.13 399a.86.86 0 0 1-.3.6l-4.5 4.5a1.05 1.05 0 0 1-1.3 0l-4.5-4.5a.86.86 0 0 1-.3-.6.9.9 0 0 1 .9-.9h9a.92.92 0 0 1 1 .9m2 0a2.9 2.9 0 0 0-2.9-2.9h-9a2.9 2.9 0 0 0-2.9 2.9 3 3 0 0 0 .8 2l4.5 4.5.1.1.1.1a2.91 2.91 0 0 0 3.9-.2l4.5-4.5a2.52 2.52 0 0 0 .9-2"
        fill="#fff"
      />
      <path
        d="M923.5 399a2 2 0 0 1 1.9-1.9h9a1.9 1.9 0 0 1 1.9 1.9 2.11 2.11 0 0 1-.5 1.3l-4.5 4.5a2 2 0 0 1-2.6.1l-.1-.1-4.5-4.5a1.61 1.61 0 0 1-.6-1.3"
        fill="#00aeed"
      />
      <path
        d="M935.2 399a.86.86 0 0 1-.3.6l-4.5 4.5a1.05 1.05 0 0 1-1.3 0l-4.5-4.5a.86.86 0 0 1-.3-.6.9.9 0 0 1 .9-.9h9a.92.92 0 0 1 1 .9m2 0a2.9 2.9 0 0 0-2.9-2.9h-9a2.9 2.9 0 0 0-2.9 2.9 3 3 0 0 0 .8 2l4.5 4.5.1.1.1.1a2.91 2.91 0 0 0 3.9-.2l4.5-4.5a2.52 2.52 0 0 0 .9-2"
        fill="#fff"
      />
      <path
        d="M1008 399a2 2 0 0 1 1.9-1.9h9a1.9 1.9 0 0 1 1.9 1.9 2.11 2.11 0 0 1-.5 1.3l-4.5 4.5a2 2 0 0 1-2.6.1l-.1-.1-4.5-4.5a1.61 1.61 0 0 1-.6-1.3"
        fill="#00aeed"
      />
      <path
        d="M1019.65 399a.86.86 0 0 1-.3.6l-4.5 4.5a1.05 1.05 0 0 1-1.3 0l-4.5-4.5a.86.86 0 0 1-.3-.6.9.9 0 0 1 .9-.9h9a.92.92 0 0 1 1 .9m2 0a2.9 2.9 0 0 0-2.9-2.9h-9a2.9 2.9 0 0 0-2.9 2.9 3 3 0 0 0 .8 2l4.5 4.5.1.1.1.1a2.91 2.91 0 0 0 3.9-.2l4.5-4.5a2.52 2.52 0 0 0 .9-2"
        fill="#fff"
      />
      <path
        d="M1104 399a2 2 0 0 1 1.9-1.9h9a1.9 1.9 0 0 1 1.9 1.9 2.11 2.11 0 0 1-.5 1.3l-4.5 4.5a2 2 0 0 1-2.6.1l-.1-.1-4.5-4.5a1.61 1.61 0 0 1-.6-1.3"
        fill="#00aeed"
      />
      <path
        d="M1115.67 399a.86.86 0 0 1-.3.6l-4.5 4.5a1.05 1.05 0 0 1-1.3 0l-4.5-4.5a.86.86 0 0 1-.3-.6.9.9 0 0 1 .9-.9h9a.92.92 0 0 1 1 .9m2 0a2.9 2.9 0 0 0-2.9-2.9h-9a2.9 2.9 0 0 0-2.9 2.9 3 3 0 0 0 .8 2l4.5 4.5.1.1.1.1a2.91 2.91 0 0 0 3.9-.2l4.5-4.5a2.52 2.52 0 0 0 .9-2"
        fill="#fff"
      />
      <path
        d="M818.35 394.65a2 2 0 0 1-1.9-1.9v-9a1.9 1.9 0 0 1 1.9-1.9 2.11 2.11 0 0 1 1.3.5l4.5 4.5a2 2 0 0 1 .1 2.6l-.1.1-4.5 4.5a1.61 1.61 0 0 1-1.3.6"
        fill="#00aeed"
      />
      <path
        d="M818.35 383a.86.86 0 0 1 .6.3l4.5 4.5a1.05 1.05 0 0 1 0 1.3l-4.5 4.5a.86.86 0 0 1-.6.3.9.9 0 0 1-.9-.9v-9a.92.92 0 0 1 .9-1m0-2a2.9 2.9 0 0 0-2.9 2.9v9a2.9 2.9 0 0 0 2.9 2.9 3 3 0 0 0 2-.8l4.5-4.5.1-.1.1-.1a2.91 2.91 0 0 0-.2-3.9l-4.5-4.5a2.52 2.52 0 0 0-2-.9"
        fill="#fff"
      />
      <path
        d="M896.15 394.65a2 2 0 0 1-1.9-1.9v-9a1.9 1.9 0 0 1 1.9-1.9 2.11 2.11 0 0 1 1.3.5l4.5 4.5a2 2 0 0 1 .1 2.6l-.1.1-4.5 4.5a1.61 1.61 0 0 1-1.3.6"
        fill="#00aeed"
      />
      <path
        d="M896.15 383a.86.86 0 0 1 .6.3l4.5 4.5a1.05 1.05 0 0 1 0 1.3l-4.5 4.5a.86.86 0 0 1-.6.3.9.9 0 0 1-.9-.9v-9a.92.92 0 0 1 .9-1m0-2a2.9 2.9 0 0 0-2.9 2.9v9a2.9 2.9 0 0 0 2.9 2.9 3 3 0 0 0 2-.8l4.5-4.5.1-.1.1-.1a2.91 2.91 0 0 0-.2-3.9l-4.5-4.5a2.52 2.52 0 0 0-2-.9"
        fill="#fff"
      />
      <path
        d="M973.05 394.65a2 2 0 0 1-1.9-1.9v-9a1.9 1.9 0 0 1 1.9-1.9 2.11 2.11 0 0 1 1.3.5l4.5 4.5a2 2 0 0 1 .1 2.6l-.1.1-4.5 4.5a1.61 1.61 0 0 1-1.3.6"
        fill="#00aeed"
      />
      <path
        d="M973.05 383a.86.86 0 0 1 .6.3l4.5 4.5a1.05 1.05 0 0 1 0 1.3l-4.5 4.5a.86.86 0 0 1-.6.3.9.9 0 0 1-.9-.9v-9a.92.92 0 0 1 .9-1m0-2a2.9 2.9 0 0 0-2.9 2.9v9a2.9 2.9 0 0 0 2.9 2.9 3 3 0 0 0 2-.8l4.5-4.5.1-.1.1-.1a2.91 2.91 0 0 0-.2-3.9l-4.5-4.5a2.52 2.52 0 0 0-2-.9"
        fill="#fff"
      />
      <path
        d="M1064.85 394.65a2 2 0 0 1-1.9-1.9v-9a1.9 1.9 0 0 1 1.9-1.9 2.11 2.11 0 0 1 1.3.5l4.5 4.5a2 2 0 0 1 .1 2.6l-.1.1-4.5 4.5a1.61 1.61 0 0 1-1.3.6"
        fill="#00aeed"
      />
      <path
        d="M1064.85 383a.86.86 0 0 1 .6.3l4.5 4.5a1.05 1.05 0 0 1 0 1.3l-4.5 4.5a.86.86 0 0 1-.6.3.9.9 0 0 1-.9-.9v-9a.92.92 0 0 1 .9-1m0-2a2.9 2.9 0 0 0-2.9 2.9v9a2.9 2.9 0 0 0 2.9 2.9 3 3 0 0 0 2-.8l4.5-4.5.1-.1.1-.1a2.91 2.91 0 0 0-.2-3.9l-4.5-4.5a2.52 2.52 0 0 0-2-.9"
        fill="#fff"
      />
      <path
        d="M620.8 459.7a2 2 0 0 1-1.9-1.9v-9a1.9 1.9 0 0 1 1.9-1.9 2.11 2.11 0 0 1 1.3.5l4.5 4.5a2 2 0 0 1 .1 2.6l-.1.1-4.5 4.5a1.61 1.61 0 0 1-1.3.6"
        fill="#00aeed"
      />
      <path
        d="M620.8 448a.86.86 0 0 1 .6.3l4.5 4.5a1.05 1.05 0 0 1 0 1.3l-4.5 4.5a.86.86 0 0 1-.6.3.9.9 0 0 1-.9-.9v-9a.92.92 0 0 1 .9-1m0-2a2.9 2.9 0 0 0-2.9 2.9v9a2.9 2.9 0 0 0 2.9 2.9 3 3 0 0 0 2-.8l4.5-4.5.1-.1.1-.1a2.91 2.91 0 0 0-.2-3.9l-4.5-4.5a2.52 2.52 0 0 0-2-.9"
        fill="#fff"
      />
      <path
        d="M808.8 499.5a2 2 0 0 1 1.9-1.9h9a1.9 1.9 0 0 1 1.9 1.9 2.11 2.11 0 0 1-.5 1.3l-4.5 4.5a2 2 0 0 1-2.6.1l-.1-.1-4.5-4.5a1.61 1.61 0 0 1-.6-1.3"
        fill="#00aeed"
      />
      <path
        d="M820.5 499.5a.86.86 0 0 1-.3.6l-4.5 4.5a1.05 1.05 0 0 1-1.3 0l-4.5-4.5a.86.86 0 0 1-.3-.6.9.9 0 0 1 .9-.9h9a.92.92 0 0 1 1 .9m2 0a2.9 2.9 0 0 0-2.9-2.9h-9a2.9 2.9 0 0 0-2.9 2.9 3 3 0 0 0 .8 2l4.5 4.5.1.1.1.1a2.91 2.91 0 0 0 3.9-.2l4.5-4.5a2.52 2.52 0 0 0 .9-2"
        fill="#fff"
      />
      <path
        d="M938.5 556.7a2 2 0 0 1-1.9-1.9v-9a1.9 1.9 0 0 1 1.9-1.9 2.11 2.11 0 0 1 1.3.5l4.5 4.5a2 2 0 0 1 .1 2.6l-.1.1-4.5 4.5a1.61 1.61 0 0 1-1.3.6"
        fill="#00aeed"
      />
      <path
        d="M938.5 545a.86.86 0 0 1 .6.3l4.5 4.5a1.05 1.05 0 0 1 0 1.3l-4.5 4.5a.86.86 0 0 1-.6.3.9.9 0 0 1-.9-.9v-9a.92.92 0 0 1 .9-1m0-2a2.9 2.9 0 0 0-2.9 2.9v9a2.9 2.9 0 0 0 2.9 2.9 3 3 0 0 0 2-.8l4.5-4.5.1-.1.1-.1a2.91 2.91 0 0 0-.2-3.9l-4.5-4.5a2.52 2.52 0 0 0-2-.9"
        fill="#fff"
      />
      <path
        d="M845.5 556.7a2 2 0 0 1-1.9-1.9v-9a1.9 1.9 0 0 1 1.9-1.9 2.11 2.11 0 0 1 1.3.5l4.5 4.5a2 2 0 0 1 .1 2.6l-.1.1-4.5 4.5a1.61 1.61 0 0 1-1.3.6"
        fill="#00aeed"
      />
      <path
        d="M845.5 545a.86.86 0 0 1 .6.3l4.5 4.5a1.05 1.05 0 0 1 0 1.3l-4.5 4.5a.86.86 0 0 1-.6.3.9.9 0 0 1-.9-.9v-9a.92.92 0 0 1 .9-1m0-2a2.9 2.9 0 0 0-2.9 2.9v9a2.9 2.9 0 0 0 2.9 2.9 3 3 0 0 0 2-.8l4.5-4.5.1-.1.1-.1a2.91 2.91 0 0 0-.2-3.9l-4.5-4.5a2.52 2.52 0 0 0-2-.9"
        fill="#fff"
      />
      <path
        d="M1103.1 556.7a2 2 0 0 1-1.9-1.9v-9a1.9 1.9 0 0 1 1.9-1.9 2.11 2.11 0 0 1 1.3.5l4.5 4.5a2 2 0 0 1 .1 2.6l-.1.1-4.5 4.5a1.61 1.61 0 0 1-1.3.6"
        fill="#00aeed"
      />
      <path
        d="M1103.1 545a.86.86 0 0 1 .6.3l4.5 4.5a1.05 1.05 0 0 1 0 1.3l-4.5 4.5a.86.86 0 0 1-.6.3.9.9 0 0 1-.9-.9v-9a.92.92 0 0 1 .9-1m0-2a2.9 2.9 0 0 0-2.9 2.9v9a2.9 2.9 0 0 0 2.9 2.9 3 3 0 0 0 2-.8l4.5-4.5.1-.1.1-.1a2.91 2.91 0 0 0-.2-3.9l-4.5-4.5a2.52 2.52 0 0 0-2-.9"
        fill="#fff"
      />
      <path
        d="M1182.2 556.7a2 2 0 0 1-1.9-1.9v-9a1.9 1.9 0 0 1 1.9-1.9 2.11 2.11 0 0 1 1.3.5l4.5 4.5a2 2 0 0 1 .1 2.6l-.1.1-4.5 4.5a1.61 1.61 0 0 1-1.3.6"
        fill="#00aeed"
      />
      <path
        d="M1182.2 545a.86.86 0 0 1 .6.3l4.5 4.5a1.05 1.05 0 0 1 0 1.3l-4.5 4.5a.86.86 0 0 1-.6.3.9.9 0 0 1-.9-.9v-9a.92.92 0 0 1 .9-1m0-2a2.9 2.9 0 0 0-2.9 2.9v9a2.9 2.9 0 0 0 2.9 2.9 3 3 0 0 0 2-.8l4.5-4.5.1-.1.1-.1a2.91 2.91 0 0 0-.2-3.9l-4.5-4.5a2.52 2.52 0 0 0-2-.9"
        fill="#fff"
      />
      <path
        d="M1214.8 599.7a2 2 0 0 1-1.9-1.9v-9a1.9 1.9 0 0 1 1.9-1.9 2.11 2.11 0 0 1 1.3.5l4.5 4.5a2 2 0 0 1 .1 2.6l-.1.1-4.5 4.5a1.61 1.61 0 0 1-1.3.6"
        fill="#00aeed"
      />
      <path
        d="M1214.8 588a.86.86 0 0 1 .6.3l4.5 4.5a1.05 1.05 0 0 1 0 1.3l-4.5 4.5a.86.86 0 0 1-.6.3.9.9 0 0 1-.9-.9v-9a.92.92 0 0 1 .9-1m0-2a2.9 2.9 0 0 0-2.9 2.9v9a2.9 2.9 0 0 0 2.9 2.9 3 3 0 0 0 2-.8l4.5-4.5.1-.1.1-.1a2.91 2.91 0 0 0-.2-3.9l-4.5-4.5a2.52 2.52 0 0 0-2-.9"
        fill="#fff"
      />
      <path
        d="M1316.1 599.7a2 2 0 0 1-1.9-1.9v-9a1.9 1.9 0 0 1 1.9-1.9 2.11 2.11 0 0 1 1.3.5l4.5 4.5a2 2 0 0 1 .1 2.6l-.1.1-4.5 4.5a1.61 1.61 0 0 1-1.3.6"
        fill="#00aeed"
      />
      <path
        d="M1316.1 588a.86.86 0 0 1 .6.3l4.5 4.5a1.05 1.05 0 0 1 0 1.3l-4.5 4.5a.86.86 0 0 1-.6.3.9.9 0 0 1-.9-.9v-9a.92.92 0 0 1 .9-1m0-2a2.9 2.9 0 0 0-2.9 2.9v9a2.9 2.9 0 0 0 2.9 2.9 3 3 0 0 0 2-.8l4.5-4.5.1-.1.1-.1a2.91 2.91 0 0 0-.2-3.9l-4.5-4.5a2.52 2.52 0 0 0-2-.9"
        fill="#fff"
      />
      <path
        d="M1393.9 809.39a2 2 0 0 1 1.9-1.9h9a1.9 1.9 0 0 1 1.9 1.9 2.11 2.11 0 0 1-.5 1.3l-4.5 4.5a2 2 0 0 1-2.6.1l-.1-.1-4.5-4.5a1.61 1.61 0 0 1-.6-1.3"
        fill="#00aeed"
      />
      <path
        d="M1405.6 809.39a.86.86 0 0 1-.3.6l-4.5 4.5a1.05 1.05 0 0 1-1.3 0L1395 810a.86.86 0 0 1-.3-.6.9.9 0 0 1 .9-.9h9a.92.92 0 0 1 1 .9m2 0a2.9 2.9 0 0 0-2.9-2.9h-9a2.9 2.9 0 0 0-2.9 2.9 3 3 0 0 0 .8 2l4.5 4.5.1.1.1.1a2.91 2.91 0 0 0 3.9-.2l4.5-4.5a2.52 2.52 0 0 0 .9-2"
        fill="#fff"
      />
      <path
        d="M1332 940.79a2 2 0 0 1 1.9 1.9v9a1.9 1.9 0 0 1-1.9 1.9 2.11 2.11 0 0 1-1.3-.5l-4.5-4.5a2 2 0 0 1-.1-2.6l.1-.1 4.5-4.5a1.61 1.61 0 0 1 1.3-.6"
        fill="#00aeed"
      />
      <path
        d="M1332 952.49a.86.86 0 0 1-.6-.3l-4.5-4.5a1.05 1.05 0 0 1 0-1.3l4.5-4.5a.86.86 0 0 1 .6-.3.9.9 0 0 1 .9.9v9a.92.92 0 0 1-.9 1m0 2a2.9 2.9 0 0 0 2.9-2.9v-9a2.9 2.9 0 0 0-2.9-2.9 3 3 0 0 0-2 .8l-4.5 4.5-.1.1-.1.1a2.91 2.91 0 0 0 .2 3.9l4.5 4.5a2.52 2.52 0 0 0 2 .9"
        fill="#fff"
      />
      <path
        d="M1043.2 940.79a2 2 0 0 1 1.9 1.9v9a1.9 1.9 0 0 1-1.9 1.9 2.11 2.11 0 0 1-1.3-.5l-4.5-4.5a2 2 0 0 1-.1-2.6l.1-.1 4.5-4.5a1.61 1.61 0 0 1 1.3-.6"
        fill="#00aeed"
      />
      <path
        d="M1043.2 952.49a.86.86 0 0 1-.6-.3l-4.5-4.5a1.05 1.05 0 0 1 0-1.3l4.5-4.5a.86.86 0 0 1 .6-.3.9.9 0 0 1 .9.9v9a.92.92 0 0 1-.9 1m0 2a2.9 2.9 0 0 0 2.9-2.9v-9a2.9 2.9 0 0 0-2.9-2.9 3 3 0 0 0-2 .8l-4.5 4.5-.1.1-.1.1a2.91 2.91 0 0 0 .2 3.9l4.5 4.5a2.52 2.52 0 0 0 2 .9"
        fill="#fff"
      />
      <path
        d="M808.5 940.79a2 2 0 0 1 1.9 1.9v9a1.9 1.9 0 0 1-1.9 1.9 2.11 2.11 0 0 1-1.3-.5l-4.5-4.5a2 2 0 0 1-.1-2.6l.1-.1 4.5-4.5a1.61 1.61 0 0 1 1.3-.6"
        fill="#00aeed"
      />
      <path
        d="M808.5 952.49a.86.86 0 0 1-.6-.3l-4.5-4.5a1.05 1.05 0 0 1 0-1.3l4.5-4.5a.86.86 0 0 1 .6-.3.9.9 0 0 1 .9.9v9a.92.92 0 0 1-.9 1m0 2a2.9 2.9 0 0 0 2.9-2.9v-9a2.9 2.9 0 0 0-2.9-2.9 3 3 0 0 0-2 .8L802 945l-.1.1-.1.1a2.91 2.91 0 0 0 .2 3.9l4.5 4.5a2.52 2.52 0 0 0 2 .9"
        fill="#fff"
      />
      <path
        d="M171.75 938.19a2 2 0 0 1 1.9 1.9v9a1.9 1.9 0 0 1-1.9 1.9 2.11 2.11 0 0 1-1.3-.5L166 946a2 2 0 0 1-.1-2.6l.1-.1 4.5-4.5a1.61 1.61 0 0 1 1.3-.6"
        fill="#00aeed"
      />
      <path
        d="M171.75 949.89a.86.86 0 0 1-.6-.3l-4.5-4.5a1.05 1.05 0 0 1 0-1.3l4.5-4.5a.86.86 0 0 1 .6-.3.9.9 0 0 1 .9.9v9a.92.92 0 0 1-.9 1m0 2a2.9 2.9 0 0 0 2.9-2.9v-9a2.9 2.9 0 0 0-2.9-2.9 3 3 0 0 0-2 .8l-4.5 4.5-.1.1-.1.1a2.91 2.91 0 0 0 .2 3.9l4.5 4.5a2.52 2.52 0 0 0 2 .9"
        fill="#fff"
      />
      <path
        d="M37 989.79a2 2 0 0 1 1.9-1.9h9a1.9 1.9 0 0 1 1.9 1.9 2.11 2.11 0 0 1-.5 1.3l-4.5 4.5a2 2 0 0 1-2.6.1l-.1-.1-4.5-4.5a1.61 1.61 0 0 1-.6-1.3"
        fill="#00aeed"
      />
      <path
        d="M48.7 989.79a.86.86 0 0 1-.3.6l-4.5 4.5a1.05 1.05 0 0 1-1.3 0l-4.5-4.5a.86.86 0 0 1-.3-.6.9.9 0 0 1 .9-.9h9a.92.92 0 0 1 1 .9m2 0a2.9 2.9 0 0 0-2.9-2.9h-9a2.9 2.9 0 0 0-2.9 2.9 3 3 0 0 0 .8 2l4.5 4.5.1.1.1.1a2.91 2.91 0 0 0 3.9-.2l4.5-4.5a2.52 2.52 0 0 0 .9-2"
        fill="#fff"
      />
      <path
        d="M37 1262.1a2 2 0 0 1 1.9-1.9h9a1.9 1.9 0 0 1 1.9 1.9 2.11 2.11 0 0 1-.5 1.3l-4.5 4.5a2 2 0 0 1-2.6.1l-.1-.1-4.5-4.5a1.61 1.61 0 0 1-.6-1.3"
        fill="#00aeed"
      />
      <path
        d="M48.7 1262.1a.86.86 0 0 1-.3.6l-4.5 4.5a1.05 1.05 0 0 1-1.3 0l-4.5-4.5a.86.86 0 0 1-.3-.6.9.9 0 0 1 .9-.9h9a.92.92 0 0 1 1 .9m2 0a2.9 2.9 0 0 0-2.9-2.9h-9a2.9 2.9 0 0 0-2.9 2.9 3 3 0 0 0 .8 2l4.5 4.5.1.1.1.1a2.91 2.91 0 0 0 3.9-.2l4.5-4.5a2.52 2.52 0 0 0 .9-2"
        fill="#fff"
      />
      <path
        d="M106.3 1390a2 2 0 0 1-1.9-1.9v-9a1.9 1.9 0 0 1 1.9-1.9 2.11 2.11 0 0 1 1.3.5l4.5 4.5a2 2 0 0 1 .1 2.6l-.1.1-4.5 4.5a1.61 1.61 0 0 1-1.3.6"
        fill="#00aeed"
      />
      <path
        d="M106.3 1378.3a.86.86 0 0 1 .6.3l4.5 4.5a1.05 1.05 0 0 1 0 1.3l-4.5 4.5a.86.86 0 0 1-.6.3.9.9 0 0 1-.9-.9v-9a.92.92 0 0 1 .9-1m0-2a2.9 2.9 0 0 0-2.9 2.89v9a2.9 2.9 0 0 0 2.9 2.91 3 3 0 0 0 2-.8l4.5-4.5.1-.11.1-.09a2.93 2.93 0 0 0-.2-3.91l-4.5-4.5a2.54 2.54 0 0 0-2-.89"
        fill="#fff"
      />
      <path
        d="M359.87 1390a2 2 0 0 1-1.9-1.9v-9a1.9 1.9 0 0 1 1.9-1.9 2.11 2.11 0 0 1 1.3.5l4.5 4.5a2 2 0 0 1 .1 2.6l-.1.1-4.5 4.5a1.61 1.61 0 0 1-1.3.6"
        fill="#00aeed"
      />
      <path
        d="M359.87 1378.3a.86.86 0 0 1 .6.3l4.5 4.5a1.05 1.05 0 0 1 0 1.3l-4.5 4.5a.86.86 0 0 1-.6.3.9.9 0 0 1-.9-.9v-9a.92.92 0 0 1 .9-1m0-2a2.9 2.9 0 0 0-2.9 2.89v9a2.9 2.9 0 0 0 2.9 2.91 3 3 0 0 0 2-.8l4.5-4.5.1-.11.1-.09a2.93 2.93 0 0 0-.2-3.91l-4.5-4.5a2.54 2.54 0 0 0-2-.89"
        fill="#fff"
      />
      <path
        d="M608.25 1390a2 2 0 0 1-1.9-1.9v-9a1.9 1.9 0 0 1 1.9-1.9 2.11 2.11 0 0 1 1.3.5l4.5 4.5a2 2 0 0 1 .1 2.6l-.1.1-4.5 4.5a1.61 1.61 0 0 1-1.3.6"
        fill="#00aeed"
      />
      <path
        d="M608.25 1378.3a.86.86 0 0 1 .6.3l4.5 4.5a1.05 1.05 0 0 1 0 1.3l-4.5 4.5a.86.86 0 0 1-.6.3.9.9 0 0 1-.9-.9v-9a.92.92 0 0 1 .9-1m0-2a2.9 2.9 0 0 0-2.9 2.89v9a2.9 2.9 0 0 0 2.9 2.91 3 3 0 0 0 2-.8l4.5-4.5.1-.11.1-.09a2.93 2.93 0 0 0-.2-3.91l-4.5-4.5a2.54 2.54 0 0 0-2-.89"
        fill="#fff"
      />
      <path
        d="M817.24 1390.8a2 2 0 0 1-1.9-1.9v-9a1.91 1.91 0 0 1 1.9-1.91 2.11 2.11 0 0 1 1.3.5l4.5 4.5a2 2 0 0 1 .1 2.61l-.1.09-4.5 4.5a1.59 1.59 0 0 1-1.3.61"
        fill="#00aeed"
      />
      <path
        d="M817.24 1379.1a.86.86 0 0 1 .6.3l4.5 4.5a1.05 1.05 0 0 1 0 1.3l-4.5 4.5a.86.86 0 0 1-.6.3.9.9 0 0 1-.9-.9v-9a.92.92 0 0 1 .9-1m0-2a2.9 2.9 0 0 0-2.9 2.9v9a2.9 2.9 0 0 0 2.9 2.9 3 3 0 0 0 2-.8l4.5-4.5.1-.1.1-.1a2.91 2.91 0 0 0-.2-3.9l-4.5-4.5a2.52 2.52 0 0 0-2-.9"
        fill="#fff"
      />
      <path
        d="M462.1 1874a2 2 0 0 1 1.9-1.9h9a1.9 1.9 0 0 1 1.9 1.9 2.11 2.11 0 0 1-.5 1.3l-4.5 4.5a2 2 0 0 1-2.6.1l-.1-.1-4.5-4.5a1.61 1.61 0 0 1-.6-1.3"
        fill="#00aeed"
      />
      <path
        d="M473.8 1874a.86.86 0 0 1-.3.6l-4.5 4.5a1.05 1.05 0 0 1-1.3 0l-4.5-4.5a.86.86 0 0 1-.3-.6.9.9 0 0 1 .9-.9h9a.92.92 0 0 1 1 .9m2 0a2.9 2.9 0 0 0-2.9-2.9h-9a2.9 2.9 0 0 0-2.9 2.9 3 3 0 0 0 .8 2l4.5 4.5.1.1.1.1a2.91 2.91 0 0 0 3.9-.2l4.5-4.5a2.52 2.52 0 0 0 .9-2"
        fill="#fff"
      />
      <path
        d="M1328.2 2393.69a2 2 0 0 1 1.9-1.9h9a1.9 1.9 0 0 1 1.9 1.9 2.11 2.11 0 0 1-.5 1.3l-4.5 4.5a2 2 0 0 1-2.6.1l-.1-.1-4.5-4.5a1.61 1.61 0 0 1-.6-1.3"
        fill="#00aeed"
      />
      <path
        d="M1339.9 2393.69a.86.86 0 0 1-.3.6l-4.5 4.5a1.05 1.05 0 0 1-1.3 0l-4.5-4.5a.86.86 0 0 1-.3-.6.9.9 0 0 1 .9-.9h9a.92.92 0 0 1 1 .9m2 0a2.9 2.9 0 0 0-2.9-2.9h-9a2.9 2.9 0 0 0-2.9 2.9 3 3 0 0 0 .8 2l4.5 4.5.1.1.1.1a2.91 2.91 0 0 0 3.9-.2l4.5-4.5a2.52 2.52 0 0 0 .9-2"
        fill="#fff"
      />
      <path
        d="M438.7 1874a2 2 0 0 1 1.9-1.9h9a1.9 1.9 0 0 1 1.9 1.9 2.11 2.11 0 0 1-.5 1.3l-4.5 4.5a2 2 0 0 1-2.6.1l-.1-.1-4.5-4.5a1.61 1.61 0 0 1-.6-1.3"
        fill="#00aeed"
      />
      <path
        d="M450.4 1874a.86.86 0 0 1-.3.6l-4.5 4.5a1.05 1.05 0 0 1-1.3 0l-4.5-4.5a.86.86 0 0 1-.3-.6.9.9 0 0 1 .9-.9h9a.92.92 0 0 1 1 .9m2 0a2.9 2.9 0 0 0-2.9-2.9h-9a2.9 2.9 0 0 0-2.9 2.9 3 3 0 0 0 .8 2l4.5 4.5.1.1.1.1a2.91 2.91 0 0 0 3.9-.2l4.5-4.5a2.52 2.52 0 0 0 .9-2"
        fill="#fff"
      />
      <path
        d="M426.3 2059.4a2 2 0 0 1 1.9 1.9v9a1.9 1.9 0 0 1-1.9 1.9 2.11 2.11 0 0 1-1.3-.5l-4.5-4.5a2 2 0 0 1-.1-2.6l.1-.1 4.5-4.5a1.61 1.61 0 0 1 1.3-.6"
        fill="#00aeed"
      />
      <path
        d="M426.3 2071.1a.86.86 0 0 1-.6-.3l-4.5-4.5a1.05 1.05 0 0 1 0-1.3l4.5-4.5a.86.86 0 0 1 .6-.3.9.9 0 0 1 .9.9v9a.92.92 0 0 1-.9 1m0 2a2.9 2.9 0 0 0 2.9-2.9v-9a2.9 2.9 0 0 0-2.9-2.9 3 3 0 0 0-2 .8l-4.5 4.5-.1.1-.1.1a2.91 2.91 0 0 0 .2 3.9l4.5 4.5a2.52 2.52 0 0 0 2 .9"
        fill="#fff"
      />
      <path
        d="M285.8 2059.4a2 2 0 0 1 1.9 1.9v9a1.9 1.9 0 0 1-1.9 1.9 2.11 2.11 0 0 1-1.3-.5l-4.5-4.5a2 2 0 0 1-.1-2.6l.1-.1 4.5-4.5a1.61 1.61 0 0 1 1.3-.6"
        fill="#00aeed"
      />
      <path
        d="M285.8 2071.1a.86.86 0 0 1-.6-.3l-4.5-4.5a1.05 1.05 0 0 1 0-1.3l4.5-4.5a.86.86 0 0 1 .6-.3.9.9 0 0 1 .9.9v9a.92.92 0 0 1-.9 1m0 2a2.9 2.9 0 0 0 2.9-2.9v-9a2.9 2.9 0 0 0-2.9-2.9 3 3 0 0 0-2 .8l-4.5 4.5-.1.1-.1.1a2.91 2.91 0 0 0 .2 3.9l4.5 4.5a2.52 2.52 0 0 0 2 .9"
        fill="#fff"
      />
      <path
        d="M200.9 2050.5a2 2 0 0 1 1.9 1.9v9a1.9 1.9 0 0 1-1.9 1.9 2.11 2.11 0 0 1-1.3-.5l-4.5-4.5a2 2 0 0 1-.1-2.6l.1-.1 4.5-4.5a1.61 1.61 0 0 1 1.3-.6"
        fill="#00aeed"
      />
      <path
        d="M200.9 2062.2a.86.86 0 0 1-.6-.3l-4.5-4.5a1.05 1.05 0 0 1 0-1.3l4.5-4.5a.86.86 0 0 1 .6-.3.9.9 0 0 1 .9.9v9a.92.92 0 0 1-.9 1m0 2a2.9 2.9 0 0 0 2.9-2.9v-9a2.9 2.9 0 0 0-2.9-2.9 3 3 0 0 0-2 .8l-4.5 4.5-.1.1-.1.1a2.91 2.91 0 0 0 .2 3.9l4.5 4.5a2.52 2.52 0 0 0 2 .9"
        fill="#fff"
      />
      <path
        d="M178 1993.4a2 2 0 0 1-1.9 1.9h-9a1.9 1.9 0 0 1-1.9-1.9 2.11 2.11 0 0 1 .5-1.3l4.5-4.5a2 2 0 0 1 2.6-.1l.1.1 4.5 4.5a1.61 1.61 0 0 1 .6 1.3"
        fill="#00aeed"
      />
      <path
        d="M166.3 1993.4a.86.86 0 0 1 .3-.6l4.5-4.5a1.05 1.05 0 0 1 1.3 0l4.5 4.5a.86.86 0 0 1 .3.6.9.9 0 0 1-.9.9h-9a.92.92 0 0 1-1-.9m-2 0a2.9 2.9 0 0 0 2.9 2.9h9a2.9 2.9 0 0 0 2.9-2.9 3 3 0 0 0-.8-2l-4.5-4.5-.1-.1-.1-.1a2.91 2.91 0 0 0-3.9.2l-4.5 4.5a2.52 2.52 0 0 0-.9 2"
        fill="#fff"
      />
      <path
        d="M225.8 1857a2 2 0 0 1-1.9-1.9v-9a1.9 1.9 0 0 1 1.9-1.9 2.11 2.11 0 0 1 1.3.5l4.5 4.5a2 2 0 0 1 .1 2.6l-.1.1-4.5 4.5a1.61 1.61 0 0 1-1.3.6"
        fill="#00aeed"
      />
      <path
        d="M225.8 1845.3a.86.86 0 0 1 .6.3l4.5 4.5a1.05 1.05 0 0 1 0 1.3l-4.5 4.5a.86.86 0 0 1-.6.3.9.9 0 0 1-.9-.9v-9a.92.92 0 0 1 .9-1m0-2a2.9 2.9 0 0 0-2.9 2.9v9a2.9 2.9 0 0 0 2.9 2.9 3 3 0 0 0 2-.8l4.5-4.5.1-.1.1-.1a2.91 2.91 0 0 0-.2-3.9l-4.5-4.5a2.52 2.52 0 0 0-2-.9"
        fill="#fff"
      />
      <path
        d="M1089.25 1841.7a2 2 0 0 1 1.9 1.9v9a1.9 1.9 0 0 1-1.9 1.9 2.11 2.11 0 0 1-1.3-.5l-4.5-4.5a2 2 0 0 1-.1-2.6l.1-.1 4.5-4.5a1.61 1.61 0 0 1 1.3-.6"
        fill="#00aeed"
      />
      <path
        d="M1089.25 1853.4a.86.86 0 0 1-.6-.3l-4.5-4.5a1.05 1.05 0 0 1 0-1.3l4.5-4.5a.86.86 0 0 1 .6-.3.9.9 0 0 1 .9.9v9a.92.92 0 0 1-.9 1m0 2a2.9 2.9 0 0 0 2.9-2.9v-9a2.9 2.9 0 0 0-2.9-2.9 3 3 0 0 0-2 .8l-4.5 4.5-.1.1-.1.1a2.91 2.91 0 0 0 .2 3.9l4.5 4.5a2.52 2.52 0 0 0 2 .9"
        fill="#fff"
      />
      <path
        d="M1328.2 1550.3a2 2 0 0 1 1.9-1.9h9a1.9 1.9 0 0 1 1.9 1.9 2.13 2.13 0 0 1-.5 1.3l-4.5 4.5a2 2 0 0 1-2.6.09l-.1-.09-4.5-4.5a1.61 1.61 0 0 1-.6-1.3"
        fill="#00aeed"
      />
      <path
        d="M1339.9 1550.3a.88.88 0 0 1-.3.6l-4.5 4.5a1.08 1.08 0 0 1-1.3 0l-4.5-4.5a.88.88 0 0 1-.3-.6.9.9 0 0 1 .9-.9h9a.91.91 0 0 1 1 .9m2 0a2.9 2.9 0 0 0-2.9-2.9h-9a2.9 2.9 0 0 0-2.9 2.9 3 3 0 0 0 .8 2l4.5 4.5.1.1.1.1a2.91 2.91 0 0 0 3.9-.2l4.5-4.5a2.52 2.52 0 0 0 .9-2"
        fill="#fff"
      />
      <path
        d="M1328.2 2010.7a2 2 0 0 1 1.9-1.9h9a1.9 1.9 0 0 1 1.9 1.9 2.11 2.11 0 0 1-.5 1.3l-4.5 4.5a2 2 0 0 1-2.6.1l-.1-.1-4.5-4.5a1.61 1.61 0 0 1-.6-1.3"
        fill="#00aeed"
      />
      <path
        d="M1339.9 2010.8a.86.86 0 0 1-.3.6l-4.5 4.5a1.05 1.05 0 0 1-1.3 0l-4.5-4.5a.86.86 0 0 1-.3-.6.9.9 0 0 1 .9-.9h9a.92.92 0 0 1 1 .9m2 0a2.9 2.9 0 0 0-2.9-2.9h-9a2.9 2.9 0 0 0-2.9 2.9 3 3 0 0 0 .8 2l4.5 4.5.1.1.1.1a2.91 2.91 0 0 0 3.9-.2l4.5-4.5a2.52 2.52 0 0 0 .9-2"
        fill="#fff"
      />
      <path
        d="M1328.2 2255.29a2 2 0 0 1 1.9-1.9h9a1.9 1.9 0 0 1 1.9 1.9 2.11 2.11 0 0 1-.5 1.3l-4.5 4.5a2 2 0 0 1-2.6.1l-.1-.1-4.5-4.5a1.61 1.61 0 0 1-.6-1.3"
        fill="#00aeed"
      />
      <path
        d="M1339.9 2255.29a.86.86 0 0 1-.3.6l-4.5 4.5a1.05 1.05 0 0 1-1.3 0l-4.5-4.5a.86.86 0 0 1-.3-.6.9.9 0 0 1 .9-.9h9a.92.92 0 0 1 1 .9m2 0a2.9 2.9 0 0 0-2.9-2.9h-9a2.9 2.9 0 0 0-2.9 2.9 3 3 0 0 0 .8 2l4.5 4.5.1.1.1.1a2.91 2.91 0 0 0 3.9-.2l4.5-4.5a2.52 2.52 0 0 0 .9-2"
        fill="#fff"
      />
      <path
        d="M73.4 1393.32a2 2 0 0 1-1.9 1.9h-9a1.9 1.9 0 0 1-1.9-1.9 2.11 2.11 0 0 1 .5-1.3l4.5-4.5a2 2 0 0 1 2.6-.1l.1.1 4.5 4.5a1.61 1.61 0 0 1 .6 1.3"
        fill="#00aeed"
      />
      <path
        d="M61.7 1393.32a.86.86 0 0 1 .3-.6l4.5-4.5a1.05 1.05 0 0 1 1.3 0l4.5 4.5a.86.86 0 0 1 .3.6.9.9 0 0 1-.9.9h-9a.92.92 0 0 1-1-.9m-2 0a2.9 2.9 0 0 0 2.9 2.9h9a2.9 2.9 0 0 0 2.9-2.9 3 3 0 0 0-.8-2l-4.5-4.5-.1-.1-.1-.1a2.91 2.91 0 0 0-3.9.2l-4.5 4.5a2.52 2.52 0 0 0-.9 2"
        fill="#fff"
      />
      <path
        d="M73.4 1579.75a2 2 0 0 1-1.9 1.9h-9a1.9 1.9 0 0 1-1.9-1.9 2.11 2.11 0 0 1 .5-1.3l4.5-4.5a2 2 0 0 1 2.6-.1l.1.1 4.5 4.5a1.61 1.61 0 0 1 .6 1.3"
        fill="#00aeed"
      />
      <path
        d="M61.7 1579.75a.86.86 0 0 1 .3-.6l4.5-4.5a1.05 1.05 0 0 1 1.3 0l4.5 4.5a.86.86 0 0 1 .3.6.9.9 0 0 1-.9.9h-9a.92.92 0 0 1-1-.9m-2 0a2.9 2.9 0 0 0 2.9 2.9h9a2.9 2.9 0 0 0 2.9-2.9 3 3 0 0 0-.8-2l-4.5-4.5-.1-.1-.1-.1a2.91 2.91 0 0 0-3.9.2l-4.5 4.5a2.52 2.52 0 0 0-.9 2"
        fill="#fff"
      />
      <path
        d="M1026.1 556.7a2 2 0 0 1-1.9-1.9v-9a1.9 1.9 0 0 1 1.9-1.9 2.11 2.11 0 0 1 1.3.5l4.5 4.5a2 2 0 0 1 .1 2.6l-.1.1-4.5 4.5a1.61 1.61 0 0 1-1.3.6"
        fill="#00aeed"
      />
      <path
        d="M1026.1 545a.86.86 0 0 1 .6.3l4.5 4.5a1.05 1.05 0 0 1 0 1.3l-4.5 4.5a.86.86 0 0 1-.6.3.9.9 0 0 1-.9-.9v-9a.92.92 0 0 1 .9-1m0-2a2.9 2.9 0 0 0-2.9 2.9v9a2.9 2.9 0 0 0 2.9 2.9 3 3 0 0 0 2-.8l4.5-4.5.1-.1.1-.1a2.91 2.91 0 0 0-.2-3.9l-4.5-4.5a2.52 2.52 0 0 0-2-.9"
        fill="#fff"
      />
      <path
        d="M892.4 499.5a2 2 0 0 1 1.9-1.9h9a1.9 1.9 0 0 1 1.9 1.9 2.11 2.11 0 0 1-.5 1.3l-4.5 4.5a2 2 0 0 1-2.6.1l-.1-.1-4.5-4.5a1.61 1.61 0 0 1-.6-1.3"
        fill="#00aeed"
      />
      <path
        d="M904.1 499.5a.86.86 0 0 1-.3.6l-4.5 4.5a1.05 1.05 0 0 1-1.3 0l-4.5-4.5a.86.86 0 0 1-.3-.6.9.9 0 0 1 .9-.9h9a.92.92 0 0 1 1 .9m2 0a2.9 2.9 0 0 0-2.9-2.9h-9a2.9 2.9 0 0 0-2.9 2.9 3 3 0 0 0 .8 2l4.5 4.5.1.1.1.1a2.91 2.91 0 0 0 3.9-.2l4.5-4.5a2.52 2.52 0 0 0 .9-2"
        fill="#fff"
      />
      <path
        d="M975.5 499.5a2 2 0 0 1 1.9-1.9h9a1.9 1.9 0 0 1 1.9 1.9 2.11 2.11 0 0 1-.5 1.3l-4.5 4.5a2 2 0 0 1-2.6.1l-.1-.1-4.5-4.5a1.61 1.61 0 0 1-.6-1.3"
        fill="#00aeed"
      />
      <path
        d="M987.2 499.5a.86.86 0 0 1-.3.6l-4.5 4.5a1.05 1.05 0 0 1-1.3 0l-4.5-4.5a.86.86 0 0 1-.3-.6.9.9 0 0 1 .9-.9h9a.92.92 0 0 1 1 .9m2 0a2.9 2.9 0 0 0-2.9-2.9h-9a2.9 2.9 0 0 0-2.9 2.9 3 3 0 0 0 .8 2l4.5 4.5.1.1.1.1a2.91 2.91 0 0 0 3.9-.2l4.5-4.5a2.52 2.52 0 0 0 .9-2"
        fill="#fff"
      />
      <path
        d="M1055 499.5a2 2 0 0 1 1.9-1.9h9a1.9 1.9 0 0 1 1.9 1.9 2.11 2.11 0 0 1-.5 1.3l-4.5 4.5a2 2 0 0 1-2.6.1l-.1-.1-4.5-4.5a1.61 1.61 0 0 1-.6-1.3"
        fill="#00aeed"
      />
      <path
        d="M1066.7 499.5a.86.86 0 0 1-.3.6l-4.5 4.5a1.05 1.05 0 0 1-1.3 0l-4.5-4.5a.86.86 0 0 1-.3-.6.9.9 0 0 1 .9-.9h9a.92.92 0 0 1 1 .9m2 0a2.9 2.9 0 0 0-2.9-2.9h-9a2.9 2.9 0 0 0-2.9 2.9 3 3 0 0 0 .8 2l4.5 4.5.1.1.1.1a2.91 2.91 0 0 0 3.9-.2l4.5-4.5a2.52 2.52 0 0 0 .9-2"
        fill="#fff"
      />
      <path
        d="M1141.4 499.5a2 2 0 0 1 1.9-1.9h9a1.9 1.9 0 0 1 1.9 1.9 2.11 2.11 0 0 1-.5 1.3l-4.5 4.5a2 2 0 0 1-2.6.1l-.1-.1-4.5-4.5a1.61 1.61 0 0 1-.6-1.3"
        fill="#00aeed"
      />
      <path
        d="M1153.1 499.5a.86.86 0 0 1-.3.6l-4.5 4.5a1.05 1.05 0 0 1-1.3 0l-4.5-4.5a.86.86 0 0 1-.3-.6.9.9 0 0 1 .9-.9h9a.92.92 0 0 1 1 .9m2 0a2.9 2.9 0 0 0-2.9-2.9h-9a2.9 2.9 0 0 0-2.9 2.9 3 3 0 0 0 .8 2l4.5 4.5.1.1.1.1a2.91 2.91 0 0 0 3.9-.2l4.5-4.5a2.52 2.52 0 0 0 .9-2"
        fill="#fff"
      />
      <path
        fill="none"
        stroke="#35ace8"
        strokeMiterlimit={10}
        strokeWidth={4}
        d="M1041.58 1953.7h291.72"
      />
      <path
        d="M1163.8 1960a2 2 0 0 1-1.9-1.9v-9a1.9 1.9 0 0 1 1.9-1.9 2.11 2.11 0 0 1 1.3.5l4.5 4.5a2 2 0 0 1 .1 2.6l-.1.1-4.5 4.5a1.61 1.61 0 0 1-1.3.6"
        fill="#00aeed"
      />
      <path
        d="M1163.8 1948.3a.86.86 0 0 1 .6.3l4.5 4.5a1.05 1.05 0 0 1 0 1.3l-4.5 4.5a.86.86 0 0 1-.6.3.9.9 0 0 1-.9-.9v-9a.92.92 0 0 1 .9-1m0-2a2.9 2.9 0 0 0-2.9 2.9v9a2.9 2.9 0 0 0 2.9 2.9 3 3 0 0 0 2-.8l4.5-4.5.1-.1.1-.1a2.91 2.91 0 0 0-.2-3.9l-4.5-4.5a2.52 2.52 0 0 0-2-.9"
        fill="#fff"
      />
      <path
        fill="none"
        stroke="#35ace8"
        strokeMiterlimit={10}
        strokeWidth={4}
        d="M1274.44 433.7h28.45"
      />
      <path
        fill="#606060"
        d="M1286.68 1667.46v-10.2l-8.9-14.1h22.8l-8.9 14.1v10.2h-5z"
      />
      <g
        clipPath="url(#dm)"
        style={{
          isolation: "isolate"
        }}>
        <text
          transform="translate(1020.21 1961.36)"
          fontSize={25.23}
          fill="#fff"
          fontWeight={700}>
          {"B"}
        </text>
      </g>
      <path
        d="M1308.29 460.72a8.43 8.43 0 0 1-8.14-8.15V414a8.14 8.14 0 0 1 8.14-8.15 9.08 9.08 0 0 1 5.58 2.14l19.29 19.3a8.46 8.46 0 0 1 .43 11.15l-.43.43-19.29 19.3a6.93 6.93 0 0 1-5.58 2.57"
        fill="#00aeed"
      />
      <path
        d="M1308.29 410.55a3.74 3.74 0 0 1 2.58 1.28l19.29 19.3a4.49 4.49 0 0 1 0 5.57l-19.29 19.3a3.72 3.72 0 0 1-2.58 1.29 3.85 3.85 0 0 1-3.86-3.86v-38.6c0-2.14 1.29-4.28 3.86-4.28m0-8.58a12.44 12.44 0 0 0-12.43 12.44V453a12.44 12.44 0 0 0 12.43 12.43 12.71 12.71 0 0 0 8.58-3.43l19.3-19.29.43-.43.42-.43c3.86-5.15 3.86-12-.85-16.72l-19.3-19.3a10.81 10.81 0 0 0-8.58-3.86"
        fill="#fff"
      />
      <path
        d="M1308.29 410.55a3.74 3.74 0 0 1 2.58 1.28l19.29 19.3a4.49 4.49 0 0 1 0 5.57l-19.29 19.3a3.72 3.72 0 0 1-2.58 1.29 3.85 3.85 0 0 1-3.86-3.86v-38.6c0-2.14 1.29-4.28 3.86-4.28m0-8.58a12.44 12.44 0 0 0-12.43 12.44V453a12.44 12.44 0 0 0 12.43 12.43 12.71 12.71 0 0 0 8.58-3.43l19.3-19.29.43-.43.42-.43c3.86-5.15 3.86-12-.85-16.72l-19.3-19.3a10.81 10.81 0 0 0-8.58-3.83Z"
        fill="none"
        stroke="#dfecef"
        strokeMiterlimit={10}
      />
      <g
        clipPath="url(#dn)"
        style={{
          isolation: "isolate"
        }}>
        <text
          transform="translate(1305.8 441.46)"
          fontSize={25.23}
          fill="#fff"
          fontWeight={700}>
          {"B"}
        </text>
      </g>
      <path
        d="M595.13 1295.7a9.2 9.2 0 1 1-9.2 9.2 9.19 9.19 0 0 1 9.2-9.2"
        fill="#fff"
      />
      <circle
        cx={595.13}
        cy={1304.9}
        r={9.2}
        transform="rotate(-67.5 595.137 1304.898)"
        fill="none"
        stroke="#0c88a5"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <path
        d="M1306.71 1948.42a8.43 8.43 0 0 1 8.14-8.15h38.6a8.15 8.15 0 0 1 8.15 8.15 9 9 0 0 1-2.15 5.57l-19.3 19.3a8.47 8.47 0 0 1-11.14.43l-.43-.43-19.3-19.3a6.89 6.89 0 0 1-2.57-5.57"
        fill="#00aeed"
      />
      <path
        d="M1356.88 1948.42a3.7 3.7 0 0 1-1.29 2.57l-19.29 19.3a4.53 4.53 0 0 1-5.58 0l-19.3-19.3a3.72 3.72 0 0 1-1.28-2.57 3.84 3.84 0 0 1 3.86-3.86h38.59c2.14 0 4.29 1.29 4.29 3.86m8.57 0A12.44 12.44 0 0 0 1353 1936h-38.59a12.45 12.45 0 0 0-12.44 12.44 12.75 12.75 0 0 0 3.43 8.57l19.3 19.3.43.43.42.43c5.15 3.86 12 3.86 16.73-.86l19.3-19.3a10.78 10.78 0 0 0 3.85-8.57"
        fill="#fff"
      />
      <path
        d="M1356.88 1948.42a3.7 3.7 0 0 1-1.29 2.57l-19.29 19.3a4.53 4.53 0 0 1-5.58 0l-19.3-19.3a3.72 3.72 0 0 1-1.28-2.57 3.84 3.84 0 0 1 3.86-3.86h38.59c2.14 0 4.29 1.29 4.29 3.86m8.57 0A12.44 12.44 0 0 0 1353 1936h-38.59a12.45 12.45 0 0 0-12.44 12.44 12.75 12.75 0 0 0 3.43 8.57l19.3 19.3.43.43.42.43c5.15 3.86 12 3.86 16.73-.86l19.3-19.3a10.78 10.78 0 0 0 3.87-8.59Z"
        fill="none"
        stroke="#dfecef"
        strokeMiterlimit={10}
      />
    </svg>
  );
};
export default ScadaAguasAndinasSIDP;

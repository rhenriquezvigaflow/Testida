/* import * as React from "react"
import {
  getColor,
  getColorConexion,
  getConexion,
  getScaledValue,
  getTarjetaClass,
  getTemaAlarma
 } from "../../../../commons/scada/scada"; */

// const ScadaMineraTeck = (props) => {
//   const {datosScada, datosAlarmas, loading, selected, loadGrafico, onClickAlarma} = props

//   return (
//     <svg
//       data-name="Layer 1"
//       xmlns="http://www.w3.org/2000/svg"
//       xmlnsXlink="http://www.w3.org/1999/xlink"
//       viewBox="240 -50 1493.58 1683.42"
//       {...props}
//     >
//       <style>
//         {
//           ".tarjeta{fill:#ffffff}.tarjetaSeleccionada{fill:#3574e0;opacity:.15}.cursorPointer{cursor:pointer}.cursorNormal{cursor:default}.campana{fill:#3474E0;}.campana:hover{fill:#7c7c7c;}.campanaVacia{fill:#c2c2c1;}.campanaVacia:hover{fill:#7c7c7c;}.campanaDesconectada{fill:#c2c2c1;}"
//         }
//       </style>
//       <defs>
//         <clipPath id="a" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M1102.81 37.76h284.12v175.98h-284.12z" />
//         </clipPath>
//         <clipPath id="b" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M1102.81 37.76h284.12v175.97h-284.12z" />
//         </clipPath>
//         <clipPath id="c" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M38.77 37.69H267.8v121.2H38.77z" />
//         </clipPath>
//         <clipPath id="d" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M38.77 37.69H267.8v121.2H38.77z" />
//         </clipPath>
//         <clipPath id="e" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M1160.93 93.9h80.95v16.56h-80.95z" />
//         </clipPath>
//         <clipPath id="f" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M1160.93 113.9h75.49v16.56h-75.49z" />
//         </clipPath>
//         <clipPath id="g" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M1160.93 133.9h30.34v16.56h-30.34z" />
//         </clipPath>
//         <clipPath id="h" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M1160.93 153.9h66.95v16.56h-66.95z" />
//         </clipPath>
//         <clipPath id="i" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M1160.93 173.9h56.04v16.56h-56.04z" />
//         </clipPath>
//         <clipPath id="j" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M75.5 65.72h154.03V83H75.5z" />
//         </clipPath>
//         <clipPath id="k" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M109.29 113.63h67.06v20.98h-67.06z" />
//         </clipPath>
//         <clipPath id="l" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M176.35 113.63h12.21v20.98h-12.21z" />
//         </clipPath>
//         <clipPath id="m" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M67.53 102.82h35.89v38.59H67.53z" />
//         </clipPath>
//         <clipPath id="n" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M67.53 102.82h35.89v38.58H67.53z" />
//         </clipPath>
//         <clipPath id="o" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M1134.97 65.72h213.91V83h-213.91z" />
//         </clipPath>
//         <clipPath id="p" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M59.9 95.95h185.8v.5H59.9z" />
//         </clipPath>
//         <clipPath id="q" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M241.38 513.06h32.92v35.11h-32.92z" />
//         </clipPath>
//         <clipPath id="r" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M241.38 513.06h32.92v35.11h-32.92z" />
//         </clipPath>
//         <clipPath id="s" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M241.38 513.06h32.92v35.11h-32.92z" />
//         </clipPath>
//         <clipPath id="u" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M250.27 522.74h16v16h-16z" />
//         </clipPath>
//         <clipPath id="v" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M319.21 1097.37h32.92v35.11h-32.92z" />
//         </clipPath>
//         <clipPath id="w" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M319.21 1097.38h32.92v35.11h-32.92z" />
//         </clipPath>
//         <clipPath id="x" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M319.21 1097.37h32.92v35.11h-32.92z" />
//         </clipPath>
//         <clipPath id="y" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M328.1 1107.05h16v16h-16z" />
//         </clipPath>
//         <clipPath id="z" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M288.83 1491.13h32.92v35.11h-32.92z" />
//         </clipPath>
//         <clipPath id="A" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M288.83 1491.13h32.92v35.11h-32.92z" />
//         </clipPath>
//         <clipPath id="B" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M288.83 1491.13h32.92v35.11h-32.92z" />
//         </clipPath>
//         <clipPath id="C" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M297.72 1500.81h16v16h-16z" />
//         </clipPath>
//         <clipPath id="D" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M1149.92 1514.63h32.92v35.11h-32.92z" />
//         </clipPath>
//         <clipPath id="E" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M1149.92 1514.63h32.92v35.11h-32.92z" />
//         </clipPath>
//         <clipPath id="F" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M1149.92 1514.63h32.92v35.11h-32.92z" />
//         </clipPath>
//         <clipPath id="G" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M1158.82 1524.31h16v16h-16z" />
//         </clipPath>
//         <clipPath id="H" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M840.31 597.02h13.01v33.03h-13.01z" />
//         </clipPath>
//         <clipPath id="I" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M59.38 1133.1h33.03v13.01H59.38z" />
//         </clipPath>
//         <clipPath id="J" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M545.43 1514.77h33.03v13.01h-33.03z" />
//         </clipPath>
//         <clipPath id="K" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M740.92 1548.78h33.03v13.01h-33.03z" />
//         </clipPath>
//         <clipPath id="L" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M328.77 367.07h157.99v142.67H328.77z" />
//         </clipPath>
//         <clipPath id="M" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M328.77 367.07h157.99v142.67H328.77z" />
//         </clipPath>
//         <clipPath id="N" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M328.77 367.07h157.99v142.67H328.77z" />
//         </clipPath>
//         <clipPath id="P" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M341.03 386.39h138.1v99.8h-138.1z" />
//         </clipPath>
//         <clipPath id="Q" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M389.96 463.83H430v18.92h-40.04z" />
//         </clipPath>
//         <clipPath id="R" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M448.21 466.01h18.97v15.38h-18.97z" />
//         </clipPath>
//         <clipPath id="S" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M459.85 630.95h138.1v99.8h-138.1z" />
//         </clipPath>
//         <clipPath id="T" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M490.77 678.01h85.26v15.37h-85.26z" />
//         </clipPath>
//         <clipPath id="U" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M664.54 630.95h138.1v99.8h-138.1z" />
//         </clipPath>
//         <clipPath id="V" transform="translate(278.1 -37.69)">
//           <path
//             fill="none"
//             d="m-19.61 1093.45 222.48-15V935.78l-222.48 15v142.67z"
//           />
//         </clipPath>
//         <clipPath id="W" transform="translate(278.1 -37.69)">
//           <path
//             fill="none"
//             d="m-19.61 1093.45 222.48-15V935.78l-222.48 15v142.67z"
//           />
//         </clipPath>
//         <clipPath id="X" transform="translate(278.1 -37.69)">
//           <path
//             fill="none"
//             d="m-19.61 1093.45 222.48-15V935.78l-222.48 15v142.67z"
//           />
//         </clipPath>
//         <clipPath id="Y" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M57.14 955.1h138.1v99.8H57.14z" />
//         </clipPath>
//         <clipPath id="Z" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M88.05 1002.16h85.26v15.37H88.05z" />
//         </clipPath>
//         <clipPath id="aa" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M106.07 1032.54h40.04v18.92h-40.04z" />
//         </clipPath>
//         <clipPath id="ab" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M164.32 1034.72h18.97v15.38h-18.97z" />
//         </clipPath>
//         <clipPath id="ac" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M207.68 935.78h157.99v142.67H207.68z" />
//         </clipPath>
//         <clipPath id="ad" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M207.68 935.78h157.99v142.67H207.68z" />
//         </clipPath>
//         <clipPath id="ae" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M207.68 935.78h157.99v142.67H207.68z" />
//         </clipPath>
//         <clipPath id="af" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M219.93 955.1h138.1v99.8h-138.1z" />
//         </clipPath>
//         <clipPath id="ag" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M250.85 1002.16h85.26v15.37h-85.26z" />
//         </clipPath>
//         <clipPath id="ah" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M268.87 1032.54h40.04v18.92h-40.04z" />
//         </clipPath>
//         <clipPath id="ai" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M327.12 1034.72h18.97v15.38h-18.97z" />
//         </clipPath>
//         <clipPath id="aj" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M382.93 933.67h157.99v142.67H382.93z" />
//         </clipPath>
//         <clipPath id="ak" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M382.93 933.67h157.99v142.67H382.93z" />
//         </clipPath>
//         <clipPath id="al" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M382.93 933.67h157.99v142.67H382.93z" />
//         </clipPath>
//         <clipPath id="am" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M395.18 952.99h138.1v99.8h-138.1z" />
//         </clipPath>
//         <clipPath id="an" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M444.12 1030.43h40.04v18.92h-40.04z" />
//         </clipPath>
//         <clipPath id="ao" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M502.36 1032.61h18.97v15.38h-18.97z" />
//         </clipPath>
//         <clipPath id="ap" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M533.28 933.67h157.99v142.67H533.28z" />
//         </clipPath>
//         <clipPath id="aq" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M533.28 933.67h157.99v142.67H533.28z" />
//         </clipPath>
//         <clipPath id="ar" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M533.28 933.67h157.99v142.67H533.28z" />
//         </clipPath>
//         <clipPath id="as" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M545.53 952.99h138.1v99.8h-138.1z" />
//         </clipPath>
//         <clipPath id="at" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M594.47 1021.75h40.04v18.92h-40.04z" />
//         </clipPath>
//         <clipPath id="au" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M652.72 1023.93h18.97v15.38h-18.97z" />
//         </clipPath>
//         <clipPath id="av" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M745.82 386.39h138.1v99.8h-138.1z" />
//         </clipPath>
//         <clipPath id="aw" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M794.76 463.83h40.04v18.92h-40.04z" />
//         </clipPath>
//         <clipPath id="ax" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M853.01 466.01h18.97v15.38h-18.97z" />
//         </clipPath>
//         <clipPath id="ay" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M887.28 780.79h138.1v99.8h-138.1z" />
//         </clipPath>
//         <clipPath id="az" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M936.22 858.23h40.04v18.92h-40.04z" />
//         </clipPath>
//         <clipPath id="aA" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M950.52 367.07h157.99v142.67H950.52z" />
//         </clipPath>
//         <clipPath id="aB" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M950.52 367.07h157.99v142.67H950.52z" />
//         </clipPath>
//         <clipPath id="aC" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M950.52 367.07h157.99v142.67H950.52z" />
//         </clipPath>
//         <clipPath id="aD" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M962.77 386.39h138.1v99.8h-138.1z" />
//         </clipPath>
//         <clipPath id="aE" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M1011.7 463.83h40.04v18.92h-40.04z" />
//         </clipPath>
//         <clipPath id="aF" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M1069.95 466.01h18.97v15.38h-18.97z" />
//         </clipPath>
//         <clipPath id="aG" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M1135.85 368.69h157.99v142.67h-157.99z" />
//         </clipPath>
//         <clipPath id="aH" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M1135.85 368.69h157.99v142.67h-157.99z" />
//         </clipPath>
//         <clipPath id="aI" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M1135.85 368.69h157.99v142.67h-157.99z" />
//         </clipPath>
//         <clipPath id="aJ" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M1148.1 388.01h138.1v99.8h-138.1z" />
//         </clipPath>
//         <clipPath id="aK" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M689.86 1320.4H871.1v124.83H689.86z" />
//         </clipPath>
//         <clipPath id="aL" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M689.86 1320.4H871.1v124.83H689.86z" />
//         </clipPath>
//         <clipPath id="aN" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M720.05 1318.29h131.3v115.74h-131.3z" />
//         </clipPath>
//         <clipPath id="aO" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M747.04 1358.74h77.32v15.38h-77.32z" />
//         </clipPath>
//         <clipPath id="aP" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M575.83 584.94h25.07v13.01h-25.07z" />
//         </clipPath>
//         <clipPath id="aQ" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M665.15 584.94h25.07v13.01h-25.07z" />
//         </clipPath>
//         <clipPath id="aR" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M787.82 941.78h157.99v142.67H787.82z" />
//         </clipPath>
//         <clipPath id="aS" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M787.82 941.78h157.99v142.67H787.82z" />
//         </clipPath>
//         <clipPath id="aT" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M787.82 941.78h157.99v142.67H787.82z" />
//         </clipPath>
//         <clipPath id="aU" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M800.08 961.1h138.1v99.8h-138.1z" />
//         </clipPath>
//         <clipPath id="aV" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M830.99 1008.16h85.26v15.37h-85.26z" />
//         </clipPath>
//         <clipPath id="aW" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M849.01 1038.54h40.04v18.92h-40.04z" />
//         </clipPath>
//         <clipPath id="aX" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M991.83 945.86h157.99v142.67H991.83z" />
//         </clipPath>
//         <clipPath id="aY" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M991.83 945.86h157.99v142.67H991.83z" />
//         </clipPath>
//         <clipPath id="aZ" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M991.83 945.86h157.99v142.67H991.83z" />
//         </clipPath>
//         <clipPath id="ba" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M1004.08 965.18h138.1v99.8h-138.1z" />
//         </clipPath>
//         <clipPath id="bb" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M1035 1012.24h85.26v15.37H1035z" />
//         </clipPath>
//         <clipPath id="bc" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M1053.02 1042.62h40.04v18.92h-40.04z" />
//         </clipPath>
//         <clipPath id="bd" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M944.36 1117.82h157.99v142.67H944.36z" />
//         </clipPath>
//         <clipPath id="be" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M944.36 1117.82h157.99v142.67H944.36z" />
//         </clipPath>
//         <clipPath id="bf" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M944.36 1117.82h157.99v142.67H944.36z" />
//         </clipPath>
//         <clipPath id="bg" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M951.99 1141.37h138.1v99.8h-138.1z" />
//         </clipPath>
//         <clipPath id="bh" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M1110.56 1117.82h157.99v142.67h-157.99z" />
//         </clipPath>
//         <clipPath id="bi" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M1110.56 1117.82h157.99v142.67h-157.99z" />
//         </clipPath>
//         <clipPath id="bj" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M1110.56 1117.82h157.99v142.67h-157.99z" />
//         </clipPath>
//         <clipPath id="bk" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M1118.2 1141.37h138.1v99.8h-138.1z" />
//         </clipPath>
//         <clipPath id="bl" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M697.57 1117.82h157.99v142.67H697.57z" />
//         </clipPath>
//         <clipPath id="bm" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M697.57 1117.82h157.99v142.67H697.57z" />
//         </clipPath>
//         <clipPath id="bn" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M697.57 1117.82h157.99v142.67H697.57z" />
//         </clipPath>
//         <clipPath id="bo" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M705.21 1141.37h138.1v99.8h-138.1z" />
//         </clipPath>
//         <clipPath id="bp" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M868.84 1369.68h157.99v142.67H868.84z" />
//         </clipPath>
//         <clipPath id="bq" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M868.84 1369.68h157.99v142.67H868.84z" />
//         </clipPath>
//         <clipPath id="br" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M868.84 1369.68h157.99v142.67H868.84z" />
//         </clipPath>
//         <clipPath id="bs" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M881.09 1389h138.1v99.8h-138.1z" />
//         </clipPath>
//         <clipPath id="bt" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M912.01 1436.06h85.26v15.37h-85.26z" />
//         </clipPath>
//         <clipPath id="bu" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M930.02 1466.44h40.04v18.92h-40.04z" />
//         </clipPath>
//         <clipPath id="bv" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M1352.14 1098.86h32.92v35.11h-32.92z" />
//         </clipPath>
//         <clipPath id="bw" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M1352.14 1098.86h32.92v35.11h-32.92z" />
//         </clipPath>
//         <clipPath id="bx" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M1352.14 1098.86h32.92v35.11h-32.92z" />
//         </clipPath>
//         <clipPath id="by" transform="translate(278.1 -37.69)">
//           <path fill="none" d="M1361.03 1108.54h16v16h-16z" />
//         </clipPath>
//         <image
//           id="t"
//           width={45}
//           height={48}
//           xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAwCAYAAACFUvPfAAAACXBIWXMAAA8SAAAPEgEhm/IzAAAFMUlEQVRoQ+2Ze3MaNxTFfwJj/I7rJm2Spv3+Hyxt6rSuHTu8Fhb1j6uDLvIuLDHxtDO+MxqxrFZ7dHTuQxBijPzfrLdtwH/RXkA/l72Afi57Af1cdrBtwDYLIWiOCMQY47LhfnQNIKjFGBfFeN2LYBNSWHhqcgkh9IuvYtHbRfGiBA4MYDl0I6gnM806uNDQlrDGoJ7Rc730eUkHwLAf0DIBKUEfYcD6ZB9aAnXq52QprEmrzfYBWkx5vfawuXsY6ANggAEHAzwHFml8DSxCCI98osn2ARrsxWJyAAxTO8BAD4DD1IMBrlKvNgOmIYQKW0Qr+/sALRn0MWCnwFnqh8AFBvY43QcDPMHATlP7CjwAo3Qt+XwX0JGs2SMM7CXwKl2/xcA3gZ4Bd8DY3RPQGS22FXRIQvPXGEg51YAM9gL4AfgZeJc+v8ZAn6ZxYEyOyKDvgb+Ac+A2ffcFGKc4P8OYDzHG5VbQLSFIkpDDSRaXwE8Y4PfAVfo8BE5SDwZinPobDOBhmquP7d4cY3yKOexKJltBt1ggv+AI0/CPwC/AB+DX1Iv1Q5rlUWE7cZ/GXmCLUxbVAmqcc3YCXaRWfRbDZ2RwH4DfUnuPMX+Rxg5Zjx5HGIOXmAOekhemMNgnh8YKqIOrG7pYCVxALjEZSMfvgDfYQs7JzKlBdlzVHYrp8hPtRMB2YYrJqdbgLib9+qxXgn6N6VmAz8gO6gGBAR5gOq3Sd5q7wpi/w1g+wZxWz+/MtM96evEZOWpcpfaKHKfb3qGFRNYXNcWev8Bit5LTatG7gg5k0xYPsYmPMaCnGDvSZ+2e9yYClN57aeyxe1YRpeeeD50OASmVzrEHlZJPMFbPMT0rxHnAkFksCyl9X7vrPrboN6mdpaZdHcQY606gnfmXqammGPCYlS7WthgtonzfmnN0Nc+K4vSQ9eSwK2j1bYD1rn4IoZs8nJWsKIoI7K4se2vTvL8fgN4ujgg5LC1dU/BfkDOXr866LkIHgwW5XFWZusqGsFv0gAzETzxKbYKFqyrdPyCHxk0mMAJcYfNMyPXJnF3TeDKxvMBkUKV2jyWDr+R6QgVOF/lpXp1mZuQMKNA6MNRA3DqpOzVD3nZt2QKbWLWxAEsiTRViaV5yXh4VmWXNGYHYheleCGEZY4wJv45TFXCNxea/gd+xGD3AZDEnl6QqlHQmPHTXktkYK1E/Ax9TP8JKV/lMBRx0AV1a6YwjTCK3wD/kAgmMnSZtaxf8cevBzaGDwQNu52KMyxBCp+jRtMXayoC9SJlMRb70eZ7643RPxVYPAzNJvRi9xlj+AzvJ3JIloiBQdwFdmtfeEmNDSaZPDoMVVvjck2tlH8d15OqlMdfAJ0xmnzDJ3ZEjUg0QY+yk6QhrDilpqBbRSfomXUt7E/IB9wyTjQc9wUAvMC1fA3+m/jMG+CHNv/DHvi6gS1N40nZVmBOJZZ3/vmDl5VvamR5jwO4xZm8wSdym50fkULeynUGnFa9WHUKYueuK7Jh3GNgbjGWdxJWOtRtKTmL2q2s6vUT/q0CnX019rG46nYcQVK6qDtFh95j1UlWOqLPfFNudCQZyjMuGMcba/SobsdfHTqC7WCq+VI35M9/VpucwdiU5OfiqfokxrkkDOjLdxdJuqNLzFZ8SSZvNWY/7HnAjuH2DLhuubzMxudr+TYPhGxyxzUoHlYUQNjLdtP3b7Mmgy9/6Gmwrc97cjgE0/tS7N3l8qxVV5KPP39URoRlAE1NPtb2BdoBLR9xosfhLrov9Cx6oNMf2mUVqAAAAAElFTkSuQmCC"
//         />
//         <image
//           id="O"
//           width={165}
//           height={149}
//           xlinkHref="data:image/png;base64,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"
//         />
//         <image
//           id="aM"
//           width={165}
//           height={149}
//           xlinkHref="data:image/png;base64,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"
//         />
//       </defs>
//       <rect
//         x={326.47}
//         y={1259.47}
//         width={567.65}
//         height={317.35}
//         rx={13.15}
//         fill="#f3f3f3"
//       />
//       <path
//         d="M1019.02 1496.15H971.1a5 5 0 0 1-5-5v-11.9l3.42-244.63h-60.36l-1.17-57.11"
//         fill="none"
//         stroke="#35ace8"
//         strokeLinejoin="round"
//         strokeWidth={4}
//       />
//       <path
//         fill="none"
//         stroke="#00aeed"
//         strokeLinejoin="round"
//         strokeWidth={4}
//         d="M1381.52 1484.92h172.72"
//       />
//       <path
//         d="M593.28 492.41v152.63h4.18l48.6.2c5.5 0 10-4.1 10-9.2v-9.2"
//         fill="none"
//         stroke="#cbcbcb"
//         strokeMiterlimit={10}
//         strokeWidth={2}
//       />
//       <path
//         d="m588.78 492.81 3.2-3.2a1.67 1.67 0 0 1 2.2.1l3.1 3.1a1.61 1.61 0 0 1 .5 1.1 1.58 1.58 0 0 1-1.6 1.6h-6.3a1.58 1.58 0 0 1-1.6-1.6 1.61 1.61 0 0 1 .5-1.1"
//         fill="#cbcbcb"
//       />
//       <path
//         d="M596.88 493.91a.65.65 0 0 1-.6.6h-6.3a.58.58 0 0 1-.6-.6.52.52 0 0 1 .2-.4l3.1-3.1a.75.75 0 0 1 .9 0l3.1 3.1a.52.52 0 0 1 .2.4m2 0a2.5 2.5 0 0 0-.8-1.8l-3.1-3.1a2.51 2.51 0 0 0-3.5-.2l-.1.1-.1.1-3.1 3.1a2.74 2.74 0 0 0-.8 2.3 2.61 2.61 0 0 0 2.7 2.1h6.1a2.67 2.67 0 0 0 2.7-2.6"
//         fill="#fff"
//       />
//       <path
//         d="M1243.6 492.41v147.81h4.18l48.6.2c5.5 0 10-4.1 10-9.2v-9.2"
//         fill="none"
//         stroke="#cbcbcb"
//         strokeMiterlimit={10}
//         strokeWidth={2}
//       />
//       <path
//         d="m1239.1 492.81 3.2-3.2a1.67 1.67 0 0 1 2.2.1l3.1 3.1a1.61 1.61 0 0 1 .5 1.1 1.58 1.58 0 0 1-1.6 1.6h-6.3a1.58 1.58 0 0 1-1.6-1.6 1.61 1.61 0 0 1 .5-1.1"
//         fill="#cbcbcb"
//       />
//       <path
//         d="M1247.2 493.91a.65.65 0 0 1-.6.6h-6.3a.58.58 0 0 1-.6-.6.52.52 0 0 1 .2-.4l3.1-3.1a.75.75 0 0 1 .9 0l3.1 3.1a.52.52 0 0 1 .2.4m2 0a2.5 2.5 0 0 0-.8-1.8l-3.1-3.1a2.51 2.51 0 0 0-3.5-.2l-.1.1-.1.1-3.1 3.1a2.74 2.74 0 0 0-.8 2.3 2.61 2.61 0 0 0 2.7 2.1h6.1a2.67 2.67 0 0 0 2.7-2.6"
//         fill="#fff"
//       />
//       <path
//         d="M662.48 588.66h-15.2a1.79 1.79 0 0 0-1.8 1.8v39.2"
//         fill="none"
//         stroke="#2f3e49"
//         strokeMiterlimit={10}
//         strokeWidth={4}
//       />
//       <path
//         d="M651.98 597.66h14a1.54 1.54 0 0 0 1.5-1.5v-14a1.54 1.54 0 0 0-1.5-1.5h-14a1.54 1.54 0 0 0-1.5 1.5v14a1.54 1.54 0 0 0 1.5 1.5"
//         fill="#2f3e49"
//       />
//       <g
//         clipPath="url(#a)"
//         opacity={0.2}
//         style={{
//           isolation: "isolate",
//         }}
//       >
//         <g clipPath="url(#b)">
//           <image
//             width={289}
//             height={179}
//             transform="matrix(.98 0 0 .98 1380.91 .07)"
//             xlinkHref="data:image/png;base64,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"
//           />
//         </g>
//       </g>
//       <path
//         d="M1654.3 169.71h-263.2a6.06 6.06 0 0 1-6.1-6.1V12.01a6.06 6.06 0 0 1 6.1-6.1h263.2a6.06 6.06 0 0 1 6.1 6.1v151.5a6.15 6.15 0 0 1-6.1 6.2"
//         fill="#fff"
//       />
//       <g
//         clipPath="url(#c)"
//         opacity={0.2}
//         style={{
//           isolation: "isolate",
//         }}
//       >
//         <g clipPath="url(#d)">
//           <image
//             width={240}
//             height={127}
//             transform="translate(316.86) scale(.95)"
//             xlinkHref="data:image/png;base64,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"
//           />
//         </g>
//       </g>
//       <path
//         d="M534.3 113.81H325.5a6.06 6.06 0 0 1-6.1-6.1v-95.7a6.06 6.06 0 0 1 6.1-6.1h208.7a6.06 6.06 0 0 1 6.1 6.1v95.6a6.12 6.12 0 0 1-6 6.2"
//         fill="#fff"
//       />
//       <path d="M1421.1 133.11a8 8 0 1 1-8 8 8 8 0 0 1 8-8" fill="#b4002b" />
//       <path d="M1421.1 55.51a8 8 0 1 1-8 8 8 8 0 0 1 8-8" fill="#00cd98" />
//       <path d="M1421.1 74.91a8 8 0 1 1-8 8 8 8 0 0 1 8-8" fill="#3574e0" />
//       <path d="M1421.1 94.31a8 8 0 1 1-8 8 8 8 0 0 1 8-8" fill="#fbc43b" />
//       <path d="M1421.1 113.81a8 8 0 1 1-8 8 8 8 0 0 1 8-8" fill="#ff6200" />
//       <g
//         clipPath="url(#e)"
//         style={{
//           isolation: "isolate",
//         }}
//       >
//         <text
//           transform="translate(1439.03 68.22)"
//           fontSize={14}
//           fill="#666"

//         >
//           {"Funcionando"}
//         </text>
//       </g>
//       <g
//         clipPath="url(#f)"
//         style={{
//           isolation: "isolate",
//         }}
//       >
//         <text
//           transform="translate(1439.03 88.22)"
//           fontSize={14}
//           fill="#666"

//         >
//           {"Movi\xE9ndose"}
//         </text>
//       </g>
//       <g
//         clipPath="url(#g)"
//         style={{
//           isolation: "isolate",
//         }}
//       >
//         <text
//           transform="translate(1439.03 108.22)"
//           fontSize={14}
//           fill="#666"

//         >
//           {"Falla"}
//         </text>
//       </g>
//       <g
//         clipPath="url(#h)"
//         style={{
//           isolation: "isolate",
//         }}
//       >
//         <text
//           transform="translate(1439.03 128.22)"
//           fontSize={14}
//           fill="#666"

//         >
//           {"Bloqueada"}
//         </text>
//       </g>
//       <g
//         clipPath="url(#i)"
//         style={{
//           isolation: "isolate",
//         }}
//       >
//         <text
//           transform="translate(1439.03 148.22)"
//           fontSize={14}
//           fill="#666"

//         >
//           {"Detenida"}
//         </text>
//       </g>
//       <g
//         clipPath="url(#j)"
//         style={{
//           isolation: "isolate",
//         }}
//       >
//         <text
//           transform="translate(353.6 40.04)"
//           fontSize="14px"
//           fill="#606060"
//         >
//           {"Conectividad de Planta"}
//         </text>
//       </g>
//       <g
//       >
//         <text
//           transform="translate(387.39 90.52)"
//           fontSize={16}
//           fill="#606060"
//         >
//           {getConexion(datosScada.con)}
//         </text>
//       </g>
//       <g
//         clipPath="url(#m)"
//         opacity={0.15}
//         style={{
//           isolation: "isolate",
//         }}
//       >
//         <g clipPath="url(#n)">
//           <image
//             width={40}
//             height={43}
//             transform="matrix(.9 0 0 .9 345.63 65.13)"
//             xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAArCAYAAAAKasrDAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAE8klEQVRYR+2YbW8bRRSFn7HXcRKnaVIoFCoB4v//KyRKKW0T20n8Pnw492RmFyfeKEjwIVcaje2dvXPm3Ndxyjnzf5bBoQX/tbwAfK68AHyuvAB8rjSHFhySlNIAyLlKqCmlhA6fYvhZrgY55xzvE+vu11jfkwDGxolKcs67B5YbVP28dZDOukz7MMATAYa02EkpbarfatYsNWs5pZQR6HtgFeiuFUiHSl1KKT1gPo8RMIzZn2tzbWPexedNzAa5QiBblrC1nsxg+A0Upo6BI+AkxhECbta2MdYIzDLGOn4/AnZhiV1FRj+AXZ9JKTXAGClugNcI5DnwCoEc+nUKuAVwA8xjvovfvSZRQPvdwwAtQfkIATgDThHQd8AEuAAu49lRvObNVwjYVTXm8fsVAgbho5W5c2+AyGxHCNgrxNgx8DMC9U2M81jniNwik06BL8Bf8f4UsXob+jexR3KAwANRXKeTnPMupTREbI0Rg5fAj8Ab4D3wHfA9AneKgA/QpjtkzhnwLfAWgfwTuEbsfQE+w31+vENymMEAO6Swd442eoc2+yXmt4jJY3SQRAmQJfLVecyTWGeAPkxCAbPKOW9TOPwhaShReo6AvAd+RSB/Qky+QZuOKD5oBjfI3xaIybPQd0WJZKeeNbCMfDnoA3CEGDlFpzd774EfkN9dIL8aIjYcxaBNB5SDNhQgAwR6g9icIZaHsWbYF+AxMss58r83MTtqT9Hmzn072mXLbmLgK+SXxHxNYbU+RC8G7X9nlFRixibV3FCi1tWkVbcpQG32EcqJzqH2zVE871WLE1pnE5u910jpmKIn0Qa2r51rEIizeH6JfPECAZ0gRhfAtg9AaEfxGcWsJxSzOmo38X0Y8wAxVpvdzxt0yFehc0L7wLlJe/o5iins8A0lOt0Q2IxD5FNmruGfXY1B1bpHlFbM+dX7uL6v+zIIpXupwSWKGVNn1FKv9ezRUMjw83vpA9CnrFmtGdoHsCtdRmsgtU5os73XibvitOF+zrMHtNnpvmvpPqv1OKq7vWLqA9CKXAluUe5aoBJWK62lxURH1uhd67uh6LXOTJ9ajBaukYIpSgnXKOM7sToBP2TiGuyWAmyOGoWvSO8MgVzFul4+mNGJbhGwGuCEEn02c13mah12k27z+hmBNMDbWLOD/j5oE99RzLGI39Y8bGa/XwN042ATu8OudbrJyM2+a2P8tgOIu0JGLI0Ra64iORRexPolYnAcc31hMrA56gV/p/SBH4CPCKQJWeace/lgogC5Qab4jEA5j9n3XOjrCgLtdmuKXMTjU+ibhv4lsHnKxT2hjRZIoZlsKO26b2knlM57QPsyZPe4Qmx9QAz+BvwRn+exj+8ovQDWPjhHG49RSbJJnXbcUbvl38a8ROBmKGI/IlBfkbm/0GbP+bUXwC1tcTSPKQw5It0u+eppgA6GGcVFPlGa1Duq3OeNerX8cVE3kB1icoYAOBKniI36YjWibOi04oM4XTmC3VV3k3uvhtUgHY1LSj6bUjacULoU35mhJOY7SqVwkvZ3+50D0tKr5a+lTrYr5CIbtMk81gxpXz1d1lwhNtX3BbDKOa+A+7/y4nMChgf/PNon9b0Zgen2jXUL5b83NntGzjkveESeyuA+sWkcFL6TuGd0VXDT4arjJP6o/BsMQknUg84wwG65q//FelT+BmvWQvb3uP02AAAAAElFTkSuQmCC"
//           />
//         </g>
//       </g>
//       <path
//         d="M363.6 72.41a12.1 12.1 0 1 1-12.1 12.1 12.1 12.1 0 0 1 12.1-12.1"
//         fill="#fff"
//       />
//       <path
//         d="M363.6 75.51a8.9 8.9 0 1 1-8.9 8.9 8.9 8.9 0 0 1 8.9-8.9"
//         fill={getColorConexion(datosScada.con)}
//       />
//       <g
//         clipPath="url(#o)"
//         style={{
//           isolation: "isolate",
//         }}
//       >
//         <text
//           transform="translate(1413.07 40.04)"
//           fontSize={14}
//           fill="#606060"
//           fontWeight={700}
//         >
//           {"Funcionamiento de dispositivos"}
//         </text>
//       </g>
//       <g
//         clipPath="url(#p)"
//         opacity={0.5}
//         style={{
//           isolation: "isolate",
//         }}
//       >
//         <path
//           fill="none"
//           stroke="#b3b3b3"
//           strokeMiterlimit={10}
//           strokeWidth={0.5}
//           d="M338 58.51h185.8"
//         />
//       </g>
//       <path
//         d="M311.4 387.81h57.5a8.49 8.49 0 0 1 8.5 8.5v38.3"
//         fill="none"
//         stroke="#00aeed"
//         strokeMiterlimit={10}
//         strokeWidth={4}
//       />
//       <path fill="#0e76e7" d="M340.4 449.21h124.8v97.7H340.4z" />
//       <path
//         d="M465 432.91v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1v-111.2"
//         fill="none"
//         stroke="#2f3e49"
//         strokeMiterlimit={10}
//         strokeWidth={4}
//       />
//       <path fill="#0e76e7" d="M1336.05 1467.78h72.38v67.13h-72.38z" />
//       <path
//         d="M1408.24 1451.48v80.63c0 1.7-.6 3.1-1.2 3.1h-69.59c-.7 0-1.2-1.4-1.2-3.1v-80.63"
//         fill="none"
//         stroke="#2f3e49"
//         strokeMiterlimit={10}
//         strokeWidth={4}
//       />
//       <path
//         d="M370.8 437.71a2 2 0 0 1 1.9-1.9h9a1.9 1.9 0 0 1 1.9 1.9 2.11 2.11 0 0 1-.5 1.3l-4.5 4.5a2 2 0 0 1-2.6.1l-.1-.1-4.5-4.5a1.61 1.61 0 0 1-.6-1.3"
//         fill="#00aeed"
//       />
//       <path
//         d="M382.5 437.71a.86.86 0 0 1-.3.6l-4.5 4.5a1.05 1.05 0 0 1-1.3 0l-4.5-4.5a.86.86 0 0 1-.3-.6.9.9 0 0 1 .9-.9h9a.92.92 0 0 1 1 .9m2 0a2.9 2.9 0 0 0-2.9-2.9h-9a2.9 2.9 0 0 0-2.9 2.9 3 3 0 0 0 .8 2l4.5 4.5.1.1.1.1a2.91 2.91 0 0 0 3.9-.2l4.5-4.5a2.52 2.52 0 0 0 .9-2"
//         fill="#fff"
//       />
//       <text
//         transform="translate(388.73 576.89)"
//         fontSize={11}
//         fill="#606060"

//         style={{
//           isolation: "isolate",
//         }}
//       >
//         {"TK"}
//         <tspan x={14.06} y={0} xmlSpace="preserve" letterSpacing="-.05em">
//           {" 01"}
//         </tspan>
//         <tspan letterSpacing="-.05em">
//           <tspan x={-26.95} y={13.2}>
//             {"Agua Alimentaci\xF3n"}
//           </tspan>
//         </tspan>
//       </text>
//       <path
//         d="M557.17 478.75h-17.4a13.17 13.17 0 0 0-3.4-.4 14.6 14.6 0 0 0-14.6 14.5v.1a14.6 14.6 0 0 0 4.33 10.36l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1a14.52 14.52 0 0 0 4.2-10.3 15.23 15.23 0 0 0-.6-4.2h6.8a2.61 2.61 0 0 0 2.6-2.7v-4.6a2.69 2.69 0 0 0-2.7-2.7"
//         fill="#2f3e49"
//       />
//       <g
//         clipPath="url(#q)"
//         opacity={0.15}
//         style={{
//           isolation: "isolate",
//         }}
//       >
//         <g clipPath="url(#r)">
//           <g clipPath="url(#s)">
//             <use transform="matrix(.73 0 0 .73 519.47 475.37)" xlinkHref="#t" />
//           </g>
//         </g>
//       </g>
//       <path
//         d="M536.37 482.31a10.9 10.9 0 1 1-10.9 10.9 10.9 10.9 0 0 1 10.9-10.9"
//         fill="#fff"
//       />
//       <g
//         clipPath="url(#u)"
//         opacity={0.15}
//         style={{
//           isolation: "isolate",
//         }}
//       >
//         <path d="M536.37 485.05a8 8 0 1 1-8 8 8 8 0 0 1 8-8" fill="#0e76e7" />
//       </g>
//       <text
//         transform="translate(521.8 532.99)"
//         fontSize={11}
//         fill="#606060"

//         style={{
//           isolation: "isolate",
//         }}
//       >
//         {"P-001"}
//       </text>
//       <path
//         d="M635 1063.07h-17.4a13.17 13.17 0 0 0-3.4-.4 14.6 14.6 0 0 0-14.6 14.5v.1a14.6 14.6 0 0 0 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1a14.52 14.52 0 0 0 4.2-10.3 15.23 15.23 0 0 0-.6-4.2h6.8a2.61 2.61 0 0 0 2.6-2.7v-4.6a2.69 2.69 0 0 0-2.7-2.7"
//         fill="#2f3e49"
//       />
//       <g
//         clipPath="url(#v)"
//         opacity={0.15}
//         style={{
//           isolation: "isolate",
//         }}
//       >
//         <g clipPath="url(#w)">
//           <g clipPath="url(#x)">
//             <use transform="matrix(.73 0 0 .73 597.3 1059.68)" xlinkHref="#t" />
//           </g>
//         </g>
//       </g>
//       <path
//         d="M614.2 1066.67a10.9 10.9 0 1 1-10.9 10.9 10.9 10.9 0 0 1 10.9-10.9"
//         fill="#fff"
//       />
//       <g
//         clipPath="url(#y)"
//         opacity={0.15}
//         style={{
//           isolation: "isolate",
//         }}
//       >
//         <path d="M614.2 1069.37a8 8 0 1 1-8 8 8 8 0 0 1 8-8" fill="#0e76e7" />
//       </g>
//       <text
//         transform="translate(599.62 1117.3)"
//         fontSize={11}
//         fill="#606060"

//         style={{
//           isolation: "isolate",
//         }}
//       >
//         {"P-006"}
//       </text>
//       <path
//         d="M604.62 1456.82h-17.4a13.17 13.17 0 0 0-3.4-.4 14.6 14.6 0 0 0-14.6 14.5v.1a14.6 14.6 0 0 0 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1a14.52 14.52 0 0 0 4.2-10.3 15.23 15.23 0 0 0-.6-4.2h6.8a2.61 2.61 0 0 0 2.6-2.7v-4.6a2.69 2.69 0 0 0-2.7-2.7"
//         fill="#2f3e49"
//       />
//       <g
//         clipPath="url(#z)"
//         opacity={0.15}
//         style={{
//           isolation: "isolate",
//         }}
//       >
//         <g clipPath="url(#A)">
//           <g clipPath="url(#B)">
//             <use transform="matrix(.73 0 0 .73 566.92 1453.44)" xlinkHref="#t" />
//           </g>
//         </g>
//       </g>
//       <path
//         d="M583.82 1460.42a10.9 10.9 0 1 1-10.9 10.9 10.9 10.9 0 0 1 10.9-10.9"
//         fill="#fff"
//       />
//       <g
//         clipPath="url(#C)"
//         opacity={0.15}
//         style={{
//           isolation: "isolate",
//         }}
//       >
//         <path d="M583.82 1463.12a8 8 0 1 1-8 8 8 8 0 0 1 8-8" fill="#0e76e7" />
//       </g>
//       <text
//         transform="translate(569.25 1511.06)"
//         fontSize={11}
//         fill="#606060"

//         style={{
//           isolation: "isolate",
//         }}
//       >
//         {"P-007"}
//       </text>
//       <path
//         d="M1465.72 1480.31h-17.4a13.17 13.17 0 0 0-3.4-.4 14.6 14.6 0 0 0-14.6 14.5v.1a14.6 14.6 0 0 0 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1a14.52 14.52 0 0 0 4.2-10.3 15.23 15.23 0 0 0-.6-4.2h6.8a2.61 2.61 0 0 0 2.6-2.7v-4.6a2.69 2.69 0 0 0-2.7-2.7"
//         fill="#2f3e49"
//       />
//       <g
//         clipPath="url(#D)"
//         opacity={0.15}
//         style={{
//           isolation: "isolate",
//         }}
//       >
//         <g clipPath="url(#E)">
//           <g clipPath="url(#F)">
//             <use transform="matrix(.73 0 0 .73 1428.02 1476.94)" xlinkHref="#t" />
//           </g>
//         </g>
//       </g>
//       <path
//         d="M1444.92 1483.92a10.9 10.9 0 1 1-10.9 10.9 10.9 10.9 0 0 1 10.9-10.9"
//         fill="#fff"
//       />
//       <g
//         clipPath="url(#G)"
//         opacity={0.15}
//         style={{
//           isolation: "isolate",
//         }}
//       >
//         <path d="M1444.92 1486.62a8 8 0 1 1-8 8 8 8 0 0 1 8-8" fill="#0e76e7" />
//       </g>
//       <text
//         transform="translate(1430.34 1534.56)"
//         fontSize={11}
//         fill="#606060"

//         style={{
//           isolation: "isolate",
//         }}
//       >
//         {"P-010"}
//       </text>
//       <g
//         clipPath="url(#H)"
//         style={{
//           isolation: "isolate",
//         }}
//       >
//         <text
//           transform="rotate(90 281.32 840.66)"
//           fontSize={11}
//           fill="#606060"

//         >
//           {"VX0110"}
//         </text>
//       </g>
//       <path
//         d="M1156.32 582.96v-14.8a1.58 1.58 0 0 1 1.6-1.6h14.8a1.58 1.58 0 0 1 1.6 1.6v14.8a1.58 1.58 0 0 1-1.6 1.6h-14.8a1.58 1.58 0 0 1-1.6-1.6M1152.42 567.76l-4.6 7.9a.71.71 0 0 1-1 .3l-.3-.3-4.6-7.9a.8.8 0 0 1 .3-1.1c.1-.1.2-.1.4-.1h9.2c.4.1.8.5.7.9a.37.37 0 0 1-.1.3"
//         fill="#323e48"
//       />
//       <path
//         d="m1141.82 583.36 4.6-7.9a.71.71 0 0 1 1-.3l.3.3 4.6 7.9a.8.8 0 0 1-.3 1.1c-.1.1-.2.1-.4.1h-9.2c-.4-.1-.8-.5-.7-.9a.37.37 0 0 1 .1-.3"
//         fill="#323e48"
//       />
//       <path
//         fill="none"
//         stroke="#323e48"
//         strokeMiterlimit={10}
//         strokeWidth={4}
//         d="M1157.32 575.56h-10"
//       />
//       <path
//         fill="none"
//         stroke="#fff"
//         strokeMiterlimit={10}
//         strokeWidth={2}
//         d="M1165.32 566.56v18M1164.32 575.56h-8"
//       />
//       <g
//         clipPath="url(#I)"
//         style={{
//           isolation: "isolate",
//         }}
//       >
//         <text
//           transform="translate(337.48 1104.85)"
//           fontSize={11}
//           fill="#606060"

//         >
//           {"VX0110"}
//         </text>
//       </g>
//       <path
//         d="M361.1 1070.51h-14.79a1.58 1.58 0 0 1-1.6-1.6v-14.8a1.58 1.58 0 0 1 1.6-1.6h14.79a1.58 1.58 0 0 1 1.6 1.6v14.8a1.58 1.58 0 0 1-1.6 1.6M345.91 1074.41l7.9 4.6a.71.71 0 0 1 .3 1l-.3.3-7.9 4.6a.8.8 0 0 1-1.1-.3c-.1-.1-.1-.2-.1-.4v-9.2c.1-.4.5-.8.9-.7a.37.37 0 0 1 .3.1"
//         fill="#323e48"
//       />
//       <path
//         d="m361.51 1085.01-7.9-4.6a.71.71 0 0 1-.3-1l.3-.3 7.9-4.6a.8.8 0 0 1 1.1.3c.1.1.1.2.1.4v9.2c-.1.4-.5.8-.9.7a.37.37 0 0 1-.3-.1"
//         fill="#323e48"
//       />
//       <path
//         fill="none"
//         stroke="#323e48"
//         strokeMiterlimit={10}
//         strokeWidth={4}
//         d="M353.7 1069.51v10"
//       />
//       <path
//         fill="none"
//         stroke="#fff"
//         strokeMiterlimit={10}
//         strokeWidth={2}
//         d="M344.7 1061.51h18M353.7 1062.51v8"
//       />
//       <g
//         clipPath="url(#J)"
//         style={{
//           isolation: "isolate",
//         }}
//       >
//         <text
//           transform="translate(823.53 1486.52)"
//           fontSize={11}
//           fill="#606060"

//         >
//           {"VX115"}
//         </text>
//       </g>
//       <path
//         d="M847.16 1452.19h-14.8a1.58 1.58 0 0 1-1.6-1.6v-14.8a1.58 1.58 0 0 1 1.6-1.6h14.8a1.58 1.58 0 0 1 1.6 1.6v14.8a1.58 1.58 0 0 1-1.6 1.6M831.96 1456.08l7.9 4.61a.71.71 0 0 1 .3 1l-.3.3-7.9 4.59a.79.79 0 0 1-1.1-.29c-.1-.1-.1-.21-.1-.4v-9.2c.1-.4.5-.8.9-.7a.39.39 0 0 1 .3.09"
//         fill="#323e48"
//       />
//       <path
//         d="m847.56 1466.69-7.9-4.6a.71.71 0 0 1-.3-1l.3-.3 7.9-4.6a.8.8 0 0 1 1.1.3c.1.1.1.2.1.4v9.2c-.1.4-.5.8-.9.7a.37.37 0 0 1-.3-.1"
//         fill="#323e48"
//       />
//       <path
//         fill="none"
//         stroke="#323e48"
//         strokeMiterlimit={10}
//         strokeWidth={4}
//         d="M839.75 1451.18v10"
//       />
//       <path
//         fill="none"
//         stroke="#fff"
//         strokeMiterlimit={10}
//         strokeWidth={2}
//         d="M830.75 1443.18h18M839.75 1444.18v8"
//       />
//       <g
//         clipPath="url(#K)"
//         style={{
//           isolation: "isolate",
//         }}
//       >
//         <text
//           transform="translate(1019.02 1520.53)"
//           fontSize={11}
//           fill="#606060"

//         >
//           {"VX126"}
//         </text>
//       </g>
//       <path
//         d="M1042.65 1486.19h-14.8a1.58 1.58 0 0 1-1.6-1.6v-14.8a1.58 1.58 0 0 1 1.6-1.6h14.8a1.58 1.58 0 0 1 1.6 1.6v14.8a1.58 1.58 0 0 1-1.6 1.6M1027.45 1490.09l7.9 4.6a.71.71 0 0 1 .3 1l-.3.3-7.9 4.6a.8.8 0 0 1-1.1-.3c-.1-.1-.1-.2-.1-.4v-9.2c.1-.4.5-.8.9-.7a.37.37 0 0 1 .3.1"
//         fill="#323e48"
//       />
//       <path
//         d="m1043.1 1500.69-7.9-4.6a.71.71 0 0 1-.3-1l.3-.3 7.9-4.6a.8.8 0 0 1 1.1.3c.1.1.1.2.1.4v9.2c-.1.4-.5.8-.9.7a.37.37 0 0 1-.3-.1"
//         fill="#323e48"
//       />
//       <path
//         fill="none"
//         stroke="#323e48"
//         strokeMiterlimit={10}
//         strokeWidth={4}
//         d="M1035.24 1485.19v10"
//       />
//       <path
//         fill="none"
//         stroke="#fff"
//         strokeMiterlimit={10}
//         strokeWidth={2}
//         d="M1026.24 1477.19h18M1035.24 1478.19v8"
//       />
//       <path
//         d="M514.27 1055.49c0-10.8-12.6-19.6-28.3-19.6s-28.3 8.9-28.3 19.6h.2a5 5 0 0 0-.2 1.8v60.8c0 5.7 5.5 10.4 12.3 11v10h8.4v-9.9h14.6v9.9h8.4v-10c7.3-.3 12.9-5.2 12.9-11v-60.78c0-.5-.2-1.1-.2-1.8Z"
//         fill="#323e48"
//       />
//       <text
//         transform="translate(611.02 680.09)"
//         fontSize={11}
//         fill="#606060"

//         style={{
//           isolation: "isolate",
//         }}
//       >
//         {"Hipoclorito"}
//       </text>
//       <path
//         d="M632.98 629.66v-39.2a1.79 1.79 0 0 0-1.8-1.8h-15.2"
//         fill="none"
//         stroke="#2f3e49"
//         strokeMiterlimit={10}
//         strokeWidth={4}
//       />
//       <path
//         d="M627.98 596.16v-14a1.54 1.54 0 0 0-1.5-1.5h-14a1.54 1.54 0 0 0-1.5 1.5v14a1.54 1.54 0 0 0 1.5 1.5h14a1.54 1.54 0 0 0 1.5-1.5"
//         fill="#2f3e49"
//       />
//       <path fill="#00a39b" d="M619.76 618.94h38.8v40h-38.8z" />
//       <path
//         d="M658.46 612.24v45.2c0 .7-.3 1.3-.8 1.3h-37.1c-.4 0-.8-.6-.8-1.3v-45.2"
//         fill="none"
//         stroke="#2f3e49"
//         strokeMiterlimit={10}
//         strokeWidth={4}
//       />

//       <path
//         d="M568.22 483.99h434.74v.32h635.14a8.49 8.49 0 0 1 8.5 8.5v227.73a5 5 0 0 1-5 5H300.32v351.6h37.16"
//         fill="none"
//         stroke="#00aeed"
//         strokeLinejoin="round"
//         strokeWidth={4}
//       />
//       <g
//         clipPath="url(#L)"
//         opacity={0.3}
//         style={{
//           isolation: "isolate",
//         }}
//       >
//         <g clipPath="url(#M)">
//           <g clipPath="url(#N)">
//             <use transform="matrix(.96 0 0 .96 606.87 329.38)" xlinkHref="#O" />
//           </g>
//         </g>
//       </g>
//       <path
//         d="M668.43 341.31h-43.1a6.25 6.25 0 0 0-6.3 6.2v102.4a6.25 6.25 0 0 0 6.2 6.3h51.8a5.43 5.43 0 0 1 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2a5.08 5.08 0 0 1 3.5-1.3h53.7a6.25 6.25 0 0 0 6.3-6.2V347.6a6.25 6.25 0 0 0-6.2-6.3h-82.6Z"
//         fill="#fff"
//       />

//       {/* Presión Pre Pretratamiento */}
//         {/* Tarjeta */}
//         <g
//           className="cursorPointer"
//           onClick={()=>loadGrafico(2,"Presión Pre Pretratamiento",false)}
//         >
//           <g
//             /* clipPath="url(#P)"
//             opacity={0.15}
//             style={{
//               isolation: "isolate",
//             }} */
//           >
//             <path className={getTarjetaClass(2,selected)} d="M619.12 348.7h138.1v99.8h-138.1z" />
//           </g>
//           <text
//             transform="translate(668.41 391.67)"
//             fontSize={13}
//             fill="#0e76e7"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"Presi\xF3n"}
//           </text>
//           <text
//             transform="translate(637.37 406.91)"
//             fontSize={13}
//             fill="#0e76e7"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             <tspan xmlSpace="preserve">{" Pre Pretratamiento"}</tspan>
//           </text>
//           <g
//             clipPath="url(#Q)"
//             style={{
//               isolation: "isolate",
//             }}
//           >
//             <text
//               transform="translate(668.06 439.87)"
//               fontSize={16}
//               fill="#606060"

//             >
//               {getScaledValue(datosScada.d2,1)}
//             </text>
//           </g>
//           <text
//             transform="translate(674.79 371.47)"
//             fontSize={11}
//             fill="#606060"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"PT011"}
//           </text>
//           <g
//             clipPath="url(#R)"
//             style={{
//               isolation: "isolate",
//             }}
//           >
//             <text
//               transform="translate(726.31 439.48)"
//               fontSize={13}
//               fill="#606060"

//             >
//               {"bar"}
//             </text>
//           </g>
//         </g>

//         {/* Campana */}
//         <g
//           className = {`${getTemaAlarma(2,loading,datosAlarmas)} cursorPointer`}
//           onClick={() => {onClickAlarma(2,"Presión Pre Pretratamiento")}}
//         >
//           <path
//             d="M631.1 428.7a4.81 4.81 0 0 0-.6 3.3c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a4 4 0 0 1 .5-2.6 3.51 3.51 0 0 1 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2a5.58 5.58 0 0 0-2.5 2.3"
//           />
//           <path
//             d="M629.43 427.7a7 7 0 0 0-.8 4.7c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a6 6 0 0 1 .7-3.9 5.5 5.5 0 0 1 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2a8 8 0 0 0-3.7 3.1M640.83 426.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3a3.51 3.51 0 0 1 1.9 1.7 4 4 0 0 1 .5 2.6c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a4.81 4.81 0 0 0-.6-3.3 6.84 6.84 0 0 0-2.5-2.3"
//           />
//           <path
//             d="M641.43 424.6c-.1-.09-.3 0-.3.21l-.2.59c-.1.11 0 .3.2.3a5.84 5.84 0 0 1 3 2.61 5.93 5.93 0 0 1 .7 3.89c0 .11.1.31.2.31l.6.09c.1 0 .3-.09.3-.2a7 7 0 0 0-.8-4.7 8.55 8.55 0 0 0-3.7-3.1M642.33 433.7v-1.5a4.93 4.93 0 0 0-3.8-4.8v-.6a.9.9 0 0 0-.9-.9h-.53a.9.9 0 0 0-.9.9v.6a4.73 4.73 0 0 0-3.8 4.8v1.5a3.77 3.77 0 0 1-.7 2.1 1.61 1.61 0 0 0-.3.9v.1a1.58 1.58 0 0 0 1.6 1.6h8.9a1.58 1.58 0 0 0 1.6-1.6v-.1a1.61 1.61 0 0 0-.3-.9 2.72 2.72 0 0 1-.9-2.1M637.33 441.2a1.75 1.75 0 0 0 1.7-1.7h-3.3a1.6 1.6 0 0 0 1.6 1.7"
//           />
//         </g>

//       {/* Fin Presión Pre Pretratamiento */}

//       <path
//         d="M687.58 475.15a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2"
//         fill="#fff"
//       />
//       <path
//         d="M687.58 475.15a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2Z"
//         fill="none"
//         stroke="#35ace8"
//         strokeMiterlimit={10}
//         strokeWidth={4}
//       />
//       <use
//         transform="matrix(.96 0 0 .96 725.41 574.67)"
//         xlinkHref="#O"
//         opacity={0.3}
//         style={{
//           isolation: "isolate",
//         }}
//       />
//       <path
//         d="M787.25 585.86h-43.1a6.25 6.25 0 0 0-6.3 6.2v102.4a6.25 6.25 0 0 0 6.2 6.3h51.8a5.43 5.43 0 0 1 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2a5.08 5.08 0 0 1 3.5-1.3h53.7a6.25 6.25 0 0 0 6.3-6.2v-102.4a6.25 6.25 0 0 0-6.2-6.3h-82.6Z"
//         fill="#fff"
//       />

//       {/* E.C. Alimentación */}
//         {/* Tarjeta */}
//         <g
//           className="cursorPointer"
//           onClick={()=>loadGrafico(9,"E.C. Alimentación",false)}
//         >
//           <g
//             /* clipPath="url(#S)"
//             opacity={0.15}
//             style={{
//               isolation: "isolate",
//             }} */
//           >
//             <path className={getTarjetaClass(9,selected)} d="M737.95 593.26h138.1v99.8h-138.1z" />
//           </g>
//           <text
//             transform="translate(795.97 636.22)"
//             fontSize={13}
//             fill="#0e76e7"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"E.C"}
//           </text>
//           <g
//             clipPath="url(#T)"
//             style={{
//               isolation: "isolate",
//             }}
//           >
//             <text
//               transform="translate(768.15 651.47)"
//               fontSize={13}
//               fill="#0e76e7"

//             >
//               {"Alimientaci\xF3n"}
//             </text>
//           </g>
//           <text
//             transform="translate(786.78 682.96)"
//             fontSize={16}
//             fill="#606060"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {getScaledValue(datosScada.d9,0)}
//           </text>
//           <text
//             transform="translate(789.08 616.02)"
//             fontSize={11}
//             fill="#606060"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"AIT018"}
//           </text>
//           <text
//             transform="translate(832.47 682.03)"
//             fontSize={13}
//             fill="#606060"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"uS/cm"}
//           </text>
//         </g>

//         {/* Campana */}
//         <g
//           className = {`${getTemaAlarma(9,loading,datosAlarmas)} cursorPointer`}
//           onClick={() => {onClickAlarma(9,"E.C. Alimentación")}}
//         >
//           <path
//             d="M749.95 671.31a4.81 4.81 0 0 0-.6 3.3c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a4 4 0 0 1 .5-2.6 3.51 3.51 0 0 1 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2a5.58 5.58 0 0 0-2.5 2.3"
//           />
//           <path
//             d="M748.25 670.31a7 7 0 0 0-.8 4.7c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a6 6 0 0 1 .7-3.9 5.5 5.5 0 0 1 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2a8 8 0 0 0-3.7 3.1M759.65 668.96c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3a3.51 3.51 0 0 1 1.9 1.7 4 4 0 0 1 .5 2.6c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a4.81 4.81 0 0 0-.6-3.3 6.84 6.84 0 0 0-2.5-2.3"
//           />
//           <path
//             d="M760.25 667.16c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3a5.87 5.87 0 0 1 3 2.6 6 6 0 0 1 .7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a7 7 0 0 0-.8-4.7 8.48 8.48 0 0 0-3.7-3.1M761.15 676.31v-1.5a4.93 4.93 0 0 0-3.8-4.8v-.6a.9.9 0 0 0-.9-.9h-.5a.9.9 0 0 0-.9.9v.6a4.73 4.73 0 0 0-3.8 4.8v1.5a3.77 3.77 0 0 1-.7 2.1 1.61 1.61 0 0 0-.3.9v.1a1.58 1.58 0 0 0 1.6 1.6h8.9a1.58 1.58 0 0 0 1.6-1.6v-.1a1.61 1.61 0 0 0-.3-.9 2.72 2.72 0 0 1-.9-2.1M756.15 683.76a1.75 1.75 0 0 0 1.7-1.7h-3.3a1.6 1.6 0 0 0 1.6 1.7"
//           />
//         </g>

//       {/* Fin E.C. Alimentación */}

//       <path
//         d="M806.41 717.71a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2"
//         fill="#fff"
//       />
//       <path
//         d="M806.41 717.71a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2Z"
//         fill="none"
//         stroke="#35ace8"
//         strokeMiterlimit={10}
//         strokeWidth={4}
//       />
//       <use
//         transform="matrix(.96 0 0 .96 932.1 576.67)"
//         xlinkHref="#O"
//         opacity={0.3}
//         style={{
//           isolation: "isolate",
//         }}
//       />
//       <path
//         d="M991.94 585.86h-43.1a6.25 6.25 0 0 0-6.3 6.2v102.4a6.25 6.25 0 0 0 6.2 6.3h51.8a5.43 5.43 0 0 1 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2a5.08 5.08 0 0 1 3.5-1.3h53.7a6.25 6.25 0 0 0 6.3-6.2v-102.4a6.25 6.25 0 0 0-6.2-6.3h-82.6Z"
//         fill="#fff"
//       />

//       {/* Temperatura */}
//         {/* Tarjeta */}
//         <g
//           className="cursorPointer"
//           onClick={()=>loadGrafico(13,"Temperatura",false)}
//         >
//           <g
//             /* clipPath="url(#U)"
//             opacity={0.15}
//             style={{
//               isolation: "isolate",
//             }} */
//           >
//             <path className={getTarjetaClass(13,selected)} d="M942.64 593.26h138.1v99.8h-138.1z" />
//           </g>
//           <text
//             transform="translate(973.56 648)"
//             fontSize={13}
//             fill="#0e76e7"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"Temperatura"}
//           </text>
//           <text
//             transform="translate(992.6 684.42)"
//             fontSize={16}
//             fill="#606060"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {getScaledValue(datosScada.d13,1)}
//           </text>
//           <text
//             transform="translate(998.31 616.02)"
//             fontSize={11}
//             fill="#606060"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"TT042"}
//           </text>
//           <text
//             transform="translate(1058.82 684.03)"
//             fontSize={13}
//             fill="#606060"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"C\xB0"}
//           </text>
//         </g>

//         {/* Campana */}
//         <g
//           className = {`${getTemaAlarma(13,loading,datosAlarmas)} cursorPointer`}
//           onClick={() => {onClickAlarma(13,"Temperatura")}}
//         >
//           <path
//             d="M954.64 673.31a4.81 4.81 0 0 0-.6 3.3c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a4 4 0 0 1 .5-2.6 3.51 3.51 0 0 1 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2a5.58 5.58 0 0 0-2.5 2.3"
//           />
//           <path
//             d="M952.94 672.31a7 7 0 0 0-.8 4.7c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a6 6 0 0 1 .7-3.9 5.5 5.5 0 0 1 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2a8 8 0 0 0-3.7 3.1M964.34 670.96c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3a3.51 3.51 0 0 1 1.9 1.7 4 4 0 0 1 .5 2.6c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a4.81 4.81 0 0 0-.6-3.3 6.84 6.84 0 0 0-2.5-2.3"
//           />
//           <path
//             d="M964.94 669.16c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3a5.87 5.87 0 0 1 3 2.6 6 6 0 0 1 .7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a7 7 0 0 0-.8-4.7 8.48 8.48 0 0 0-3.7-3.1M965.84 678.31v-1.5a4.93 4.93 0 0 0-3.8-4.8v-.6a.9.9 0 0 0-.9-.9h-.5a.9.9 0 0 0-.9.9v.6a4.73 4.73 0 0 0-3.8 4.8v1.5a3.77 3.77 0 0 1-.7 2.1 1.61 1.61 0 0 0-.3.9v.1a1.58 1.58 0 0 0 1.6 1.6h8.9a1.58 1.58 0 0 0 1.6-1.6v-.1a1.61 1.61 0 0 0-.3-.9 2.72 2.72 0 0 1-.9-2.1M960.84 685.76a1.75 1.75 0 0 0 1.7-1.7h-3.3a1.6 1.6 0 0 0 1.6 1.7"
//           />
//         </g>

//       {/* Fin Temperatura */}

//       <path
//         d="M1011.1 717.71a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2"
//         fill="#fff"
//       />
//       <path
//         d="M1011.1 717.71a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2Z"
//         fill="none"
//         stroke="#35ace8"
//         strokeMiterlimit={10}
//         strokeWidth={4}
//       />
//       <g
//         clipPath="url(#V)"
//         opacity={0.3}
//         style={{
//           isolation: "isolate",
//         }}
//       >
//         <g clipPath="url(#W)">
//           <g clipPath="url(#X)">
//             <use transform="matrix(.96 0 0 .96 322.69 898.09)" xlinkHref="#O" />
//           </g>
//         </g>
//       </g>
//       <path
//         d="M384.54 910.01h-43.1a6.25 6.25 0 0 0-6.3 6.2v102.4a6.25 6.25 0 0 0 6.2 6.3h51.76a5.43 5.43 0 0 1 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2a5.08 5.08 0 0 1 3.5-1.3H467a6.25 6.25 0 0 0 6.3-6.2v-102.4a6.25 6.25 0 0 0-6.2-6.3h-82.6Z"
//         fill="#fff"
//       />

//       {/* Presión Pre Filtro */}
//         {/* Tarjeta */}
//         <g
//           className="cursorPointer"
//           onClick={()=>loadGrafico(11,"Presión Pre Filtro",false)}
//         >
//           <g
//             /* clipPath="url(#Y)"
//             opacity={0.15}
//             style={{
//               isolation: "isolate",
//             }} */
//           >
//             <path className={getTarjetaClass(11,selected)} d="M335.23 917.41h138.1v99.8h-138.1z" />
//           </g>
//           <text
//             transform="translate(384.92 958.59)"
//             fontSize={13}
//             fill="#0e76e7"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"Presi\xF3n"}
//           </text>
//           <g
//             clipPath="url(#Z)"
//             style={{
//               isolation: "isolate",
//             }}
//           >
//             <text
//               transform="translate(380.24 973.84)"
//               fontSize={13}
//               fill="#0e76e7"

//             >
//               {"Pre-Filtro"}
//             </text>
//           </g>
//           <g
//             clipPath="url(#aa)"
//             style={{
//               isolation: "isolate",
//             }}
//           >
//             <text
//               transform="translate(384.17 1008.58)"
//               fontSize={16}
//               fill="#606060"

//             >
//               {getScaledValue(datosScada.d11,1)}
//             </text>
//           </g>
//           <text
//             transform="translate(390.76 938.39)"
//             fontSize={11}
//             fill="#606060"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"PT014"}
//           </text>
//           <g
//             clipPath="url(#ab)"
//             style={{
//               isolation: "isolate",
//             }}
//           >
//             <text
//               transform="translate(442.42 1008.19)"
//               fontSize={13}
//               fill="#606060"

//             >
//               {"bar"}
//             </text>
//           </g>
//         </g>

//         {/* Campana */}
//         <g
//           className = {`${getTemaAlarma(11,loading,datosAlarmas)} cursorPointer`}
//           onClick={() => {onClickAlarma(11,"Presión Pre Filtro")}}
//         >
//           <path
//             d="M347.24 997.41a4.81 4.81 0 0 0-.6 3.3c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a4 4 0 0 1 .5-2.6 3.51 3.51 0 0 1 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2a5.58 5.58 0 0 0-2.5 2.3"
//           />
//           <path
//             d="M345.54 996.41a7 7 0 0 0-.8 4.7c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a6 6 0 0 1 .7-3.9 5.5 5.5 0 0 1 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2a8 8 0 0 0-3.7 3.1M356.94 995.11c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3a3.51 3.51 0 0 1 1.9 1.7 4 4 0 0 1 .5 2.6c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a4.81 4.81 0 0 0-.6-3.3 6.84 6.84 0 0 0-2.5-2.3"
//           />
//           <path
//             d="M357.54 993.31c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3a5.87 5.87 0 0 1 3 2.6 6 6 0 0 1 .7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a7 7 0 0 0-.8-4.7 8.48 8.48 0 0 0-3.7-3.1M358.44 1002.41v-1.5a4.93 4.93 0 0 0-3.8-4.8v-.6a.9.9 0 0 0-.9-.9h-.5a.9.9 0 0 0-.9.9v.6a4.73 4.73 0 0 0-3.8 4.8v1.5a3.77 3.77 0 0 1-.7 2.1 1.61 1.61 0 0 0-.3.9v.1a1.58 1.58 0 0 0 1.6 1.6h8.9a1.58 1.58 0 0 0 1.6-1.6v-.1a1.61 1.61 0 0 0-.3-.9 2.72 2.72 0 0 1-.9-2.1M353.44 1009.91a1.75 1.75 0 0 0 1.7-1.7h-3.3a1.6 1.6 0 0 0 1.6 1.7"
//           />
//         </g>

//       {/* Fin Presión Pre Filtro */}

//       <g
//         clipPath="url(#ac)"
//         opacity={0.3}
//         style={{
//           isolation: "isolate",
//         }}
//       >
//         <g clipPath="url(#ad)">
//           <g clipPath="url(#ae)">
//             <use transform="matrix(.96 0 0 .96 485.78 898.09)" xlinkHref="#O" />
//           </g>
//         </g>
//       </g>
//       <path
//         d="M547.33 910.01h-43.1a6.25 6.25 0 0 0-6.3 6.2v102.4a6.25 6.25 0 0 0 6.2 6.3h51.8a5.43 5.43 0 0 1 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2a5.08 5.08 0 0 1 3.5-1.3h53.7a6.25 6.25 0 0 0 6.3-6.2v-102.4a6.25 6.25 0 0 0-6.2-6.3h-82.6Z"
//         fill="#fff"
//       />

//       {/* Presión Post Filtro */}
//         {/* Tarjeta */}
//         <g
//           className="cursorPointer"
//           onClick={()=>loadGrafico(12,"Presión Post Filtro",false)}
//         >
//           <g
//             /* clipPath="url(#af)"
//             opacity={0.15}
//             style={{
//               isolation: "isolate",
//             }} */
//           >
//             <path className={getTarjetaClass(12,selected)} d="M498.03 917.41h138.1v99.8h-138.1z" />
//           </g>
//           <text
//             transform="translate(550.9 960.38)"
//             fontSize={13}
//             fill="#0e76e7"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"Presi\xF3n"}
//           </text>
//           <g
//             clipPath="url(#ag)"
//             style={{
//               isolation: "isolate",
//             }}
//           >
//             <text
//               transform="translate(543.33 975.62)"
//               fontSize={13}
//               fill="#0e76e7"

//             >
//               {"Post-Filtro"}
//             </text>
//           </g>
//           <g
//             clipPath="url(#ah)"
//             style={{
//               isolation: "isolate",
//             }}
//           >
//             <text
//               transform="translate(546.96 1008.58)"
//               fontSize={16}
//               fill="#606060"

//             >
//               {getScaledValue(datosScada.d12,1)}
//             </text>
//           </g>
//           <text
//             transform="translate(556.74 940.17)"
//             fontSize={11}
//             fill="#606060"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"PT023"}
//           </text>
//           <g
//             clipPath="url(#ai)"
//             style={{
//               isolation: "isolate",
//             }}
//           >
//             <text
//               transform="translate(605.21 1008.19)"
//               fontSize={13}
//               fill="#606060"

//             >
//               {"bar"}
//             </text>
//           </g>
//         </g>

//         {/* Campana */}
//         <g
//           className = {`${getTemaAlarma(12,loading,datosAlarmas)} cursorPointer`}
//           onClick={() => {onClickAlarma(12,"Presión Post Filtro")}}
//         >
//           <path
//             d="M510.03 997.41a4.81 4.81 0 0 0-.6 3.3c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a4 4 0 0 1 .5-2.6 3.51 3.51 0 0 1 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2a5.58 5.58 0 0 0-2.5 2.3"
//           />
//           <path
//             d="M508.33 996.41a7 7 0 0 0-.8 4.7c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a6 6 0 0 1 .7-3.9 5.5 5.5 0 0 1 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2a8 8 0 0 0-3.7 3.1M519.73 995.11c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3a3.51 3.51 0 0 1 1.9 1.7 4 4 0 0 1 .5 2.6c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a4.81 4.81 0 0 0-.6-3.3 6.84 6.84 0 0 0-2.5-2.3"
//           />
//           <path
//             d="M520.33 993.31c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3a5.87 5.87 0 0 1 3 2.6 6 6 0 0 1 .7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a7 7 0 0 0-.8-4.7 8.48 8.48 0 0 0-3.7-3.1M521.23 1002.41v-1.5a4.93 4.93 0 0 0-3.8-4.8v-.6a.9.9 0 0 0-.9-.9h-.5a.9.9 0 0 0-.9.9v.6a4.73 4.73 0 0 0-3.8 4.8v1.5a3.77 3.77 0 0 1-.7 2.1 1.61 1.61 0 0 0-.3.9v.1a1.58 1.58 0 0 0 1.6 1.6h8.9a1.58 1.58 0 0 0 1.6-1.6v-.1a1.61 1.61 0 0 0-.3-.9 2.72 2.72 0 0 1-.9-2.1M516.23 1009.91a1.75 1.75 0 0 0 1.7-1.7h-3.3a1.6 1.6 0 0 0 1.6 1.7"
//           />
//         </g>

//       {/* Fin Presión Post Filtro */}

//       <g
//         clipPath="url(#aj)"
//         opacity={0.3}
//         style={{
//           isolation: "isolate",
//         }}
//       >
//         <g clipPath="url(#ak)">
//           <g clipPath="url(#al)">
//             <use transform="matrix(.96 0 0 .96 661.03 895.98)" xlinkHref="#O" />
//           </g>
//         </g>
//       </g>
//       <path
//         d="M722.58 907.9h-43.1a6.25 6.25 0 0 0-6.3 6.2v102.4a6.25 6.25 0 0 0 6.2 6.3h51.8a5.43 5.43 0 0 1 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2a5.08 5.08 0 0 1 3.5-1.3h53.72a6.25 6.25 0 0 0 6.3-6.2V914.2a6.25 6.25 0 0 0-6.2-6.3h-82.6Z"
//         fill="#fff"
//       />

//       {/* Presión Ósmosis */}
//         {/* Tarjeta */}
//         <g
//           className="cursorPointer"
//           onClick={()=>loadGrafico(5,"Presión Ósmosis",false)}
//         >
//           <g
//             /* clipPath="url(#am)"
//             opacity={0.15}
//             style={{
//               isolation: "isolate",
//             }} */
//           >
//             <path className={getTarjetaClass(5,selected)} d="M673.28 915.3h138.1v99.8h-138.1z" />
//           </g>
//           <text
//             transform="translate(722.57 958.26)"
//             fontSize={13}
//             fill="#0e76e7"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"Presi\xF3n"}
//           </text>
//           <text
//             transform="translate(718.01 973.51)"
//             fontSize={13}
//             fill="#0e76e7"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"Osmosis"}
//           </text>
//           <g
//             clipPath="url(#an)"
//             style={{
//               isolation: "isolate",
//             }}
//           >
//             <text
//               transform="translate(722.21 1006.46)"
//               fontSize={16}
//               fill="#606060"

//             >
//               {getScaledValue(datosScada.d5,1)}
//             </text>
//           </g>
//           <text
//             transform="translate(728.95 938.06)"
//             fontSize={11}
//             fill="#606060"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"PT024"}
//           </text>
//           <g
//             clipPath="url(#ao)"
//             style={{
//               isolation: "isolate",
//             }}
//           >
//             <text
//               transform="translate(780.46 1006.07)"
//               fontSize={13}
//               fill="#606060"

//             >
//               {"bar"}
//             </text>
//           </g>
//         </g>

//         {/* Campana */}
//         <g
//           className = {`${getTemaAlarma(5,loading,datosAlarmas)} cursorPointer`}
//           onClick={() => {onClickAlarma(5,"Presión Ósmosis")}}
//         >
//           <path
//             d="M685.28 995.31a4.81 4.81 0 0 0-.6 3.3c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a4 4 0 0 1 .5-2.6 3.51 3.51 0 0 1 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2a5.58 5.58 0 0 0-2.5 2.3"
//           />
//           <path
//             d="M683.58 994.31a7 7 0 0 0-.8 4.7c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a6 6 0 0 1 .7-3.9 5.5 5.5 0 0 1 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2a8 8 0 0 0-3.7 3.1M694.98 993c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3a3.51 3.51 0 0 1 1.9 1.7 4 4 0 0 1 .5 2.6c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a4.81 4.81 0 0 0-.6-3.3 6.84 6.84 0 0 0-2.5-2.3"
//           />
//           <path
//             d="M695.58 991.2c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3a5.87 5.87 0 0 1 3 2.6 6 6 0 0 1 .7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a7 7 0 0 0-.8-4.7 8.48 8.48 0 0 0-3.7-3.1M696.48 1000.31v-1.5a4.93 4.93 0 0 0-3.8-4.8v-.6a.9.9 0 0 0-.9-.9h-.5a.9.9 0 0 0-.9.9v.6a4.73 4.73 0 0 0-3.8 4.8v1.5a3.77 3.77 0 0 1-.7 2.1 1.61 1.61 0 0 0-.3.9v.1a1.58 1.58 0 0 0 1.6 1.6h8.92a1.58 1.58 0 0 0 1.6-1.6v-.1a1.61 1.61 0 0 0-.3-.9 2.72 2.72 0 0 1-.9-2.1M691.48 1007.8a1.75 1.75 0 0 0 1.7-1.7h-3.3a1.6 1.6 0 0 0 1.6 1.7"
//           />
//         </g>

//       {/* Fin Presión Ósmosis */}

//       <g
//         clipPath="url(#ap)"
//         opacity={0.3}
//         style={{
//           isolation: "isolate",
//         }}
//       >
//         <g clipPath="url(#aq)">
//           <g clipPath="url(#ar)">
//             <use transform="matrix(.96 0 0 .96 811.38 895.98)" xlinkHref="#O" />
//           </g>
//         </g>
//       </g>
//       <path
//         d="M872.93 907.9h-43.1a6.25 6.25 0 0 0-6.3 6.2v102.4a6.25 6.25 0 0 0 6.2 6.3h51.8a5.43 5.43 0 0 1 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2a5.08 5.08 0 0 1 3.5-1.3h53.7a6.25 6.25 0 0 0 6.3-6.2V914.2a6.25 6.25 0 0 0-6.2-6.3h-82.6Z"
//         fill="#fff"
//       />

//       {/* Recuperación RO */}
//         {/* Tarjeta */}
//         <g
//           className="cursorPointer"
//           onClick={()=>loadGrafico(0,"Recuperación RO",false)}
//         >
//           <g
//             /* clipPath="url(#as)"
//             opacity={0.15}
//             style={{
//               isolation: "isolate",
//             }} */
//           >
//             <path className={getTarjetaClass(0,selected)} d="M823.63 915.3h138.1v99.8h-138.1z" />
//           </g>
//           <text
//             transform="translate(840.59 959.75)"
//             fontSize={13}
//             fill="#0e76e7"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"Recuperaci\xF3n RO"}
//           </text>
//           <g
//             clipPath="url(#at)"
//             style={{
//               isolation: "isolate",
//             }}
//           >
//             <text
//               transform="translate(872.56 997.79)"
//               fontSize={16}
//               fill="#606060"

//             >
//               {getScaledValue(datosScada.d0,1)}
//             </text>
//           </g>
//           <g
//             clipPath="url(#au)"
//             style={{
//               isolation: "isolate",
//             }}
//           >
//             <text
//               transform="translate(930.81 997.4)"
//               fontSize={13}
//               fill="#606060"

//             >
//               {"%"}
//             </text>
//           </g>
//         </g>

//         {/* Campana */}
//         <g
//           className = {`${getTemaAlarma(0,loading,datosAlarmas)} cursorPointer`}
//           onClick={() => {onClickAlarma(0,"Recuperación RO")}}
//         >
//           <path
//             d="M835.63 986.63a4.81 4.81 0 0 0-.6 3.3c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a4 4 0 0 1 .5-2.6 3.51 3.51 0 0 1 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2a5.58 5.58 0 0 0-2.5 2.3"
//           />
//           <path
//             d="M833.93 985.63a7 7 0 0 0-.8 4.7c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a6 6 0 0 1 .7-3.9 5.5 5.5 0 0 1 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2a8 8 0 0 0-3.7 3.1M845.33 984.31c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3a3.51 3.51 0 0 1 1.9 1.7 4 4 0 0 1 .5 2.6c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a4.81 4.81 0 0 0-.6-3.3 6.84 6.84 0 0 0-2.5-2.3"
//           />
//           <path
//             d="M845.93 982.53c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3a5.87 5.87 0 0 1 3 2.6 6 6 0 0 1 .7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a7 7 0 0 0-.8-4.7 8.48 8.48 0 0 0-3.7-3.1M846.83 991.63v-1.5a4.93 4.93 0 0 0-3.8-4.8v-.6a.9.9 0 0 0-.9-.9h-.5a.9.9 0 0 0-.9.9v.6a4.73 4.73 0 0 0-3.8 4.8v1.5a3.77 3.77 0 0 1-.7 2.1 1.61 1.61 0 0 0-.3.9v.1a1.58 1.58 0 0 0 1.6 1.6h8.9a1.58 1.58 0 0 0 1.6-1.6v-.1a1.61 1.61 0 0 0-.3-.9 2.72 2.72 0 0 1-.9-2.1M841.83 999.13a1.75 1.75 0 0 0 1.7-1.7h-3.3a1.6 1.6 0 0 0 1.6 1.7"
//           />
//         </g>

//       {/* Fin Recuperación RO */}

//       <use
//         transform="matrix(.96 0 0 .96 1011.67 329.38)"
//         xlinkHref="#O"
//         opacity={0.3}
//         style={{
//           isolation: "isolate",
//         }}
//       />
//       <path
//         d="M1073.22 341.31h-43.12a6.25 6.25 0 0 0-6.3 6.2v102.4a6.25 6.25 0 0 0 6.2 6.3h51.8a5.43 5.43 0 0 1 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2a5.08 5.08 0 0 1 3.5-1.3h53.7a6.25 6.25 0 0 0 6.3-6.2V347.6a6.25 6.25 0 0 0-6.2-6.3h-82.6Z"
//         fill="#fff"
//       />

//       {/* Presión Post Pretratamiento */}
//         {/* Tarjeta */}
//         <g
//           className="cursorPointer"
//           onClick={()=>loadGrafico(3,"Presión Post Pretratamiento",false)}
//         >
//           <g
//             /* clipPath="url(#av)"
//             opacity={0.15}
//             style={{
//               isolation: "isolate",
//             }} */
//           >
//             <path className={getTarjetaClass(3,selected)} d="M1023.92 348.7h138.1v99.8h-138.1z" />
//           </g>
//           <text
//             transform="translate(1072.23 391.31)"
//             fontSize={13}
//             fill="#0e76e7"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"Presi\xF3n"}
//           </text>
//           <text
//             transform="translate(1039.02 406.91)"
//             fontSize={13}
//             fill="#0e76e7"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"Post Pretratamiento"}
//           </text>
//           <g
//             clipPath="url(#aw)"
//             style={{
//               isolation: "isolate",
//             }}
//           >
//             <text
//               transform="translate(1072.86 439.87)"
//               fontSize={16}
//               fill="#606060"

//             >
//               {getScaledValue(datosScada.d3,1)}
//             </text>
//           </g>
//           <text
//             transform="translate(1079.59 371.47)"
//             fontSize={11}
//             fill="#606060"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"PT013"}
//           </text>
//           <g
//             clipPath="url(#ax)"
//             style={{
//               isolation: "isolate",
//             }}
//           >
//             <text
//               transform="translate(1131.1 439.48)"
//               fontSize={13}
//               fill="#606060"

//             >
//               {"bar"}
//             </text>
//           </g>
//         </g>

//         {/* Campana */}
//         <g
//           className = {`${getTemaAlarma(3,loading,datosAlarmas)} cursorPointer`}
//           onClick={() => {onClickAlarma(3,"Presión Post Pretratamiento")}}
//         >
//           <path
//             d="M1035.92 428.7a4.81 4.81 0 0 0-.6 3.3c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a4 4 0 0 1 .5-2.6 3.51 3.51 0 0 1 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2a5.58 5.58 0 0 0-2.5 2.3"
//           />
//           <path
//             d="M1034.22 427.7a7 7 0 0 0-.8 4.7c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a6 6 0 0 1 .7-3.9 5.5 5.5 0 0 1 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2a8 8 0 0 0-3.7 3.1M1045.62 426.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3a3.51 3.51 0 0 1 1.9 1.7 4 4 0 0 1 .5 2.6c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a4.81 4.81 0 0 0-.6-3.3 6.84 6.84 0 0 0-2.5-2.3"
//           />
//           <path
//             d="M1046.22 424.6c-.1-.09-.3 0-.3.21l-.2.59c-.1.11 0 .3.2.3a5.84 5.84 0 0 1 3 2.61 5.93 5.93 0 0 1 .7 3.89c0 .11.1.31.2.31l.6.09c.1 0 .3-.09.3-.2a7 7 0 0 0-.8-4.7 8.55 8.55 0 0 0-3.7-3.1M1047.1 433.7v-1.5a4.93 4.93 0 0 0-3.8-4.8v-.6a.9.9 0 0 0-.9-.9h-.5a.9.9 0 0 0-.9.9v.6a4.73 4.73 0 0 0-3.8 4.8v1.5a3.77 3.77 0 0 1-.7 2.1 1.61 1.61 0 0 0-.3.9v.1a1.58 1.58 0 0 0 1.6 1.6h8.9a1.58 1.58 0 0 0 1.6-1.6v-.1a1.61 1.61 0 0 0-.3-.9 2.72 2.72 0 0 1-.9-2.1M1042.1 441.2a1.75 1.75 0 0 0 1.7-1.7h-3.3a1.6 1.6 0 0 0 1.6 1.7"
//           />
//         </g>

//       {/* Fin Presión Post Pretratamiento */}

//       <use
//         transform="matrix(.96 0 0 .96 1153.13 723.78)"
//         xlinkHref="#O"
//         opacity={0.3}
//         style={{
//           isolation: "isolate",
//         }}
//       />
//       <path
//         d="M1214.68 735.7h-43.1a6.25 6.25 0 0 0-6.3 6.2v102.41a6.25 6.25 0 0 0 6.2 6.3h51.8a5.43 5.43 0 0 1 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2a5.08 5.08 0 0 1 3.5-1.3h53.7a6.25 6.25 0 0 0 6.3-6.2V742a6.25 6.25 0 0 0-6.2-6.3h-82.6Z"
//         fill="#fff"
//       />

//       {/* Caudal de Mezcla */}
//         {/* Tarjeta */}
//         <g
//           className="cursorPointer"
//           onClick={()=>loadGrafico(18,"Caudal de Mezcla",false)}
//         >
//           <g
//             /* clipPath="url(#ay)"
//             opacity={0.15}
//             style={{
//               isolation: "isolate",
//             }} */
//           >
//             <path className={getTarjetaClass(18,selected)} d="M1165.38 743.1h138.1v99.8h-138.1z" />
//           </g>
//           <text
//             transform="translate(1205.93 785.71)"
//             fontSize={13}
//             fill="#0e76e7"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"Caudal de"}
//           </text>
//           <text
//             transform="translate(1214.97 801.31)"
//             fontSize={13}
//             fill="#0e76e7"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"Mezcla"}
//           </text>
//           <g
//             clipPath="url(#az)"
//             style={{
//               isolation: "isolate",
//             }}
//           >
//             <text
//               transform="translate(1214.31 834.27)"
//               fontSize={16}
//               fill="#606060"

//             >
//               {getScaledValue(datosScada.d18,1)}
//             </text>
//           </g>
//           <text
//             transform="translate(1218.14 765.86)"
//             fontSize={11}
//             fill="#606060"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"FIT019"}
//           </text>
//           <text
//             transform="translate(1267.03 833.88)"
//             fontSize={13}
//             fill="#606060"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"m3/h"}
//           </text>
//         </g>

//         {/* Campana */}
//         <g
//           className = {`${getTemaAlarma(18,loading,datosAlarmas)} cursorPointer`}
//           onClick={() => {onClickAlarma(18,"Caudal de Mezcla")}}
//         >
//           <path
//             d="M1177.38 823.1a4.81 4.81 0 0 0-.6 3.3c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a4 4 0 0 1 .5-2.6 3.51 3.51 0 0 1 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2a5.58 5.58 0 0 0-2.5 2.3"
//           />
//           <path
//             d="M1175.68 822.1a7 7 0 0 0-.8 4.7c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a6 6 0 0 1 .7-3.9 5.5 5.5 0 0 1 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2a8 8 0 0 0-3.7 3.1M1187.1 820.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3a3.51 3.51 0 0 1 1.9 1.7 4 4 0 0 1 .5 2.6c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a4.81 4.81 0 0 0-.6-3.3 6.84 6.84 0 0 0-2.5-2.3"
//           />
//           <path
//             d="M1187.68 819c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3a5.87 5.87 0 0 1 3 2.6 6 6 0 0 1 .7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a7 7 0 0 0-.8-4.7 8.48 8.48 0 0 0-3.7-3.1M1188.58 828.1v-1.5a4.93 4.93 0 0 0-3.8-4.8v-.6a.9.9 0 0 0-.9-.9h-.5a.9.9 0 0 0-.9.9v.6a4.73 4.73 0 0 0-3.8 4.8v1.5a3.77 3.77 0 0 1-.7 2.1 1.61 1.61 0 0 0-.3.9v.1a1.58 1.58 0 0 0 1.6 1.6h8.9a1.58 1.58 0 0 0 1.6-1.6v-.1a1.61 1.61 0 0 0-.3-.9 2.72 2.72 0 0 1-.9-2.1M1183.58 835.6a1.75 1.75 0 0 0 1.7-1.7h-3.3a1.6 1.6 0 0 0 1.6 1.7"
//           />
//         </g>

//       {/* Fin Caudal de Mezcla */}

//       <path
//         d="M1094.41 474.45a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2"
//         fill="#fff"
//       />
//       <path
//         d="M1094.41 474.45a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2Z"
//         fill="none"
//         stroke="#35ace8"
//         strokeMiterlimit={10}
//         strokeWidth={4}
//       />
//       <g
//         clipPath="url(#aA)"
//         opacity={0.3}
//         style={{
//           isolation: "isolate",
//         }}
//       >
//         <g clipPath="url(#aB)">
//           <g clipPath="url(#aC)">
//             <use transform="matrix(.96 0 0 .96 1228.61 329.38)" xlinkHref="#O" />
//           </g>
//         </g>
//       </g>
//       <path
//         d="M1290.17 341.31h-43.07a6.25 6.25 0 0 0-6.3 6.2v102.4a6.25 6.25 0 0 0 6.2 6.3h51.8a5.43 5.43 0 0 1 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2a5.08 5.08 0 0 1 3.5-1.3h53.7a6.25 6.25 0 0 0 6.3-6.2V347.6a6.25 6.25 0 0 0-6.2-6.3h-82.6Z"
//         fill="#fff"
//       />

//       {/* ORP Alimentación */}
//         {/* Tarjeta */}
//         <g
//           className="cursorPointer"
//           onClick={()=>loadGrafico(4,"ORP Alimentación",false)}
//         >
//           <g
//             /* clipPath="url(#aD)"
//             opacity={0.15}
//             style={{
//               isolation: "isolate",
//             }} */
//           >
//             <path className={getTarjetaClass(4,selected)} d="M1240.87 348.7h138.1v99.8h-138.1z" />
//           </g>
//           <text
//             transform="translate(1296.53 391.31)"
//             fontSize={13}
//             fill="#0e76e7"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"ORP"}
//           </text>
//           <text
//             transform="translate(1273 406.91)"
//             fontSize={13}
//             fill="#0e76e7"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"Alimentaci\xF3n"}
//           </text>
//           <g
//             clipPath="url(#aE)"
//             style={{
//               isolation: "isolate",
//             }}
//           >
//             <text
//               transform="translate(1289.8 439.87)"
//               fontSize={16}
//               fill="#606060"

//             >
//               {getScaledValue(datosScada.d4,1)}
//             </text>
//           </g>
//           <text
//             transform="translate(1292.95 371.47)"
//             fontSize={11}
//             fill="#606060"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"AIT015"}
//           </text>
//           <g
//             clipPath="url(#aF)"
//             style={{
//               isolation: "isolate",
//             }}
//           >
//             <text
//               transform="translate(1348.05 439.48)"
//               fontSize={13}
//               fill="#606060"

//             >
//               {"mV"}
//             </text>
//           </g>
//         </g>

//         {/* Campana */}
//         <g
//           className = {`${getTemaAlarma(4,loading,datosAlarmas)} cursorPointer`}
//           onClick={() => {onClickAlarma(4,"ORP Alimentación")}}
//         >
//           <path
//             d="M1252.87 428.7a4.81 4.81 0 0 0-.6 3.3c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a4 4 0 0 1 .5-2.6 3.51 3.51 0 0 1 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2a5.58 5.58 0 0 0-2.5 2.3"
//           />
//           <path
//             d="M1251.17 427.7a7 7 0 0 0-.8 4.7c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a6 6 0 0 1 .7-3.9 5.5 5.5 0 0 1 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2a8 8 0 0 0-3.7 3.1M1262.57 426.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3a3.51 3.51 0 0 1 1.9 1.7 4 4 0 0 1 .5 2.6c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a4.81 4.81 0 0 0-.6-3.3 6.84 6.84 0 0 0-2.5-2.3"
//           />
//           <path
//             d="M1263.17 424.6c-.1-.09-.3 0-.3.21l-.2.59c-.1.11 0 .3.2.3a5.84 5.84 0 0 1 3 2.61 5.93 5.93 0 0 1 .7 3.89c0 .11.1.31.2.31l.6.09c.1 0 .3-.09.3-.2a7 7 0 0 0-.8-4.7 8.55 8.55 0 0 0-3.7-3.1M1264.1 433.7v-1.5a4.93 4.93 0 0 0-3.8-4.8v-.6a.9.9 0 0 0-.9-.9h-.5a.9.9 0 0 0-.9.9v.6a4.73 4.73 0 0 0-3.8 4.8v1.5a3.77 3.77 0 0 1-.7 2.1 1.61 1.61 0 0 0-.3.9v.1a1.58 1.58 0 0 0 1.6 1.6h8.9a1.58 1.58 0 0 0 1.6-1.6v-.1a1.61 1.61 0 0 0-.3-.9 2.72 2.72 0 0 1-.9-2.1M1259.1 441.2a1.75 1.75 0 0 0 1.7-1.7h-3.3a1.6 1.6 0 0 0 1.6 1.7"
//           />
//         </g>

//       {/* Fin ORP Alimentación */}

//       <path
//         d="M1309.33 473.15a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2"
//         fill="#fff"
//       />
//       <path
//         d="M1309.33 473.15a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2Z"
//         fill="none"
//         stroke="#35ace8"
//         strokeMiterlimit={10}
//         strokeWidth={4}
//       />
//       <g
//         clipPath="url(#aG)"
//         opacity={0.3}
//         style={{
//           isolation: "isolate",
//         }}
//       >
//         <g clipPath="url(#aH)">
//           <g clipPath="url(#aI)">
//             <use transform="matrix(.96 0 0 .96 1413.95 331)" xlinkHref="#O" />
//           </g>
//         </g>
//       </g>
//       <path
//         d="M1475.5 342.92h-43.1a6.25 6.25 0 0 0-6.3 6.2v102.4a6.25 6.25 0 0 0 6.2 6.3h51.8a5.43 5.43 0 0 1 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2a5.08 5.08 0 0 1 3.5-1.3h53.7a6.25 6.25 0 0 0 6.3-6.2v-102.4a6.25 6.25 0 0 0-6.2-6.3h-82.6Z"
//         fill="#fff"
//       />

//       {/* Caudal de Alimentación */}
//         {/* Tarjeta */}
//         <g
//           className="cursorPointer"
//           onClick={()=>loadGrafico(7,"Caudal de Alimentación",false)}
//         >
//           <g
//             /* clipPath="url(#aJ)"
//             opacity={0.15}
//             style={{
//               isolation: "isolate",
//             }} */
//           >
//             <path className={getTarjetaClass(7,selected)} d="M1426.2 350.32h138.1v99.8h-138.1z" />
//           </g>
//           <text
//             transform="translate(1470.89 392.93)"
//             fontSize={13}
//             fill="#0e76e7"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"Caudal de"}
//           </text>
//           <text
//             transform="translate(1462.89 408.53)"
//             fontSize={13}
//             fill="#0e76e7"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"Alimentaci\xF3n"}
//           </text>
//           <text
//             transform="translate(1474.96 441.48)"
//             fontSize={16}
//             fill="#606060"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {getScaledValue(datosScada.d7,1)}
//           </text>
//           <text
//             transform="translate(1481.87 373.08)"
//             fontSize={11}
//             fill="#606060"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"FIT017"}
//           </text>
//           <text
//             transform="translate(1525.85 441.09)"
//             fontSize={13}
//             fill="#606060"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"m3/h"}
//           </text>
//         </g>

//         {/* Campana */}
//         <g
//           className = {`${getTemaAlarma(7,loading,datosAlarmas)} cursorPointer`}
//           onClick={() => {onClickAlarma(7,"Caudal de Alimentación")}}
//         >
//           <path
//             d="M1438.2 430.31a4.81 4.81 0 0 0-.6 3.3c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a4 4 0 0 1 .5-2.6 3.51 3.51 0 0 1 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2a5.58 5.58 0 0 0-2.5 2.3"
//           />
//           <path
//             d="M1436.5 429.31a7 7 0 0 0-.8 4.7c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a6 6 0 0 1 .7-3.9 5.5 5.5 0 0 1 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2a8 8 0 0 0-3.7 3.1M1447.9 428.02c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3a3.51 3.51 0 0 1 1.9 1.7 4 4 0 0 1 .5 2.6c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a4.81 4.81 0 0 0-.6-3.3 6.84 6.84 0 0 0-2.5-2.3"
//           />
//           <path
//             d="M1448.5 426.22c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3a5.87 5.87 0 0 1 3 2.6 6 6 0 0 1 .7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a7 7 0 0 0-.8-4.7 8.48 8.48 0 0 0-3.7-3.1M1449.4 435.31v-1.5a4.93 4.93 0 0 0-3.8-4.8v-.6a.9.9 0 0 0-.9-.9h-.5a.9.9 0 0 0-.9.9v.6a4.73 4.73 0 0 0-3.8 4.8v1.5a3.77 3.77 0 0 1-.7 2.1 1.61 1.61 0 0 0-.3.9v.1a1.58 1.58 0 0 0 1.6 1.6h8.9a1.58 1.58 0 0 0 1.6-1.6v-.1a1.61 1.61 0 0 0-.3-.9 2.72 2.72 0 0 1-.9-2.1M1444.4 442.82a1.75 1.75 0 0 0 1.7-1.7h-3.3a1.6 1.6 0 0 0 1.6 1.7"
//           />
//         </g>

//       {/* Fin Caudal de Alimentación */}

//       <path
//         d="M1494.66 474.77a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2"
//         fill="#fff"
//       />
//       <path
//         d="M1494.66 474.77a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2Z"
//         fill="none"
//         stroke="#35ace8"
//         strokeMiterlimit={10}
//         strokeWidth={4}
//       />
//       <g
//         clipPath="url(#aK)"
//         opacity={0.3}
//         style={{
//           isolation: "isolate",
//         }}
//       >
//         <g clipPath="url(#aL)">
//           <use
//             transform="matrix(0 .76 -1.22 0 1149.19 1282.71)"
//             xlinkHref="#aM"
//           />
//         </g>
//       </g>
//       <path
//         d="M1136.84 1329.91v-43.1a6.25 6.25 0 0 0-6.2-6.3H996.75a6.25 6.25 0 0 0-6.3 6.2v51.8a5.43 5.43 0 0 1-1.2 3.4l-.3.4c-6.5 6.5-6.5 6.5.2 12.9a5.08 5.08 0 0 1 1.3 3.5v31.33a6.25 6.25 0 0 0 6.2 6.3h133.89a6.25 6.25 0 0 0 6.3-6.2v-60.23Z"
//         fill="#fff"
//       />

//       {/* Presión de Concentrado */}
//         {/* Tarjeta */}
//         <g
//           className="cursorPointer"
//           onClick={()=>loadGrafico(6,"Presión de Concentrado",false)}
//         >
//           <g
//             /* clipPath="url(#aN)"
//             opacity={0.15}
//             style={{
//               isolation: "isolate",
//             }} */
//           >
//             <path className={getTarjetaClass(6,selected)} d="M998.15 1280.61h131.29v115.73H998.15z" />
//           </g>
//           <g
//             clipPath="url(#aO)"
//             style={{
//               isolation: "isolate",
//             }}
//           >
//             <text
//               transform="translate(1032.39 1332.21)"
//               fontSize={13}
//               fill="#0e76e7"

//             >
//               {"Presi\xF3n de"}
//             </text>
//           </g>
//           <text
//             transform="translate(1026.25 1351.71)"
//             fontSize={13}
//             fill="#0e76e7"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"Concentrado"}
//           </text>
//           <text
//             transform="translate(1040.23 1383.83)"
//             fontSize={16}
//             fill="#606060"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {getScaledValue(datosScada.d6,1)}
//           </text>
//           <text
//             transform="translate(1047.26 1307.49)"
//             fontSize={11}
//             fill="#606060"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"PT033"}
//           </text>
//           <text
//             transform="translate(1095.47 1383.03)"
//             fontSize={13}
//             fill="#606060"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"bar"}
//           </text>
//         </g>

//         {/* Campana */}
//         <g
//           className = {`${getTemaAlarma(6,loading,datosAlarmas)} cursorPointer`}
//           onClick={() => {onClickAlarma(6,"Presión de Concentrado")}}
//         >
//           <path
//             d="M1008.23 1370.57a4.81 4.81 0 0 0-.6 3.3c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a4 4 0 0 1 .5-2.6 3.51 3.51 0 0 1 1.9-1.7c.1-.1.2-.19.2-.3l-.2-.6c0-.2-.2-.2-.4-.2a5.58 5.58 0 0 0-2.5 2.3"
//           />
//           <path
//             d="M1006.53 1369.57a7 7 0 0 0-.8 4.7c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a6 6 0 0 1 .7-3.9 5.5 5.5 0 0 1 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2a8 8 0 0 0-3.7 3.1M1017.93 1368.31c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3a3.51 3.51 0 0 1 1.9 1.7 4 4 0 0 1 .5 2.6c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a4.81 4.81 0 0 0-.6-3.3 6.84 6.84 0 0 0-2.5-2.3"
//           />
//           <path
//             d="M1018.53 1366.47c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3a5.87 5.87 0 0 1 3 2.6 6 6 0 0 1 .7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a7 7 0 0 0-.8-4.7 8.48 8.48 0 0 0-3.7-3.1M1019.43 1375.57v-1.5a4.93 4.93 0 0 0-3.8-4.8v-.6a.9.9 0 0 0-.9-.9h-.5a.9.9 0 0 0-.9.9v.6a4.73 4.73 0 0 0-3.8 4.8v1.5a3.77 3.77 0 0 1-.7 2.1 1.61 1.61 0 0 0-.3.9v.1a1.58 1.58 0 0 0 1.6 1.6h8.9a1.58 1.58 0 0 0 1.6-1.6v-.1a1.61 1.61 0 0 0-.3-.9 2.72 2.72 0 0 1-.9-2.1M1014.43 1383.07a1.75 1.75 0 0 0 1.7-1.7h-3.3a1.6 1.6 0 0 0 1.6 1.7"
//           />
//         </g>

//       {/* Fin Presión de Concentrado */}

//       <path
//         d="M826.1 1176.21h-16.4a5 5 0 0 1-5-5v-102.29"
//         fill="none"
//         stroke="#00aeed"
//         strokeLinejoin="round"
//         strokeWidth={4}
//       />
//       <path
//         fill="none"
//         stroke="#00aeed"
//         strokeMiterlimit={10}
//         strokeWidth={4}
//         d="M944.09 1068.86h747.46"
//       />
//       <path
//         d="M829.56 1082.31v-13.1c0-2.1 2.7-3.8 6-3.8h98.65c3.3 0 6 1.8 6 3.8v13.1c0 2.1-2.7 3.8-6 3.8h-98.65c-3.2 0-6-1.7-6-3.8"
//         fill="#2f3e49"
//       />
//       <path
//         d="m834.1 1085.21 99.85-19.8c3.5 0 6.3 1.8 6.3 3.8v13.1c0 2.1-2.9 3.8-6.3 3.8h-99.69c-.7 0-.8-.6-.2-.9"
//         fill="#0e76e7"
//       />
//       <path
//         d="M829.56 1107.41v-13.1c0-2.1 2.7-3.8 6-3.8h98.65c3.3 0 6 1.8 6 3.8v13.1c0 2.1-2.7 3.8-6 3.8h-98.65c-3.2 0-6-1.7-6-3.8"
//         fill="#2f3e49"
//       />
//       <path
//         d="m834.1 1110.31 99.85-19.8c3.5 0 6.3 1.8 6.3 3.8v13.1c0 2.1-2.9 3.8-6.3 3.8h-99.69c-.7 0-.8-.6-.2-.9"
//         fill="#0e76e7"
//       />
//       <path
//         d="M829.56 1132.51v-13.1c0-2.1 2.7-3.8 6-3.8h98.65c3.3 0 6 1.8 6 3.8v13.1c0 2.1-2.7 3.8-6 3.8h-98.65c-3.2 0-6-1.6-6-3.8"
//         fill="#2f3e49"
//       />
//       <path
//         d="m834.1 1135.41 99.85-19.8c3.5 0 6.3 1.8 6.3 3.8v13.1c0 2.1-2.9 3.8-6.3 3.8h-99.69c-.7 0-.8-.6-.2-.9"
//         fill="#0e76e7"
//       />
//       <path
//         d="M829.56 1157.71v-13.2c0-2.1 2.7-3.8 6-3.8h98.65c3.3 0 6 1.8 6 3.8v13.1c0 2.1-2.7 3.8-6 3.8h-98.65c-3.2 0-6-1.6-6-3.7"
//         fill="#2f3e49"
//       />
//       <path
//         d="m834.16 1160.71 99.75-20c3.5 0 6.3 1.8 6.3 3.8v13.1c0 2.1-2.9 3.8-6.3 3.8h-99.65c-.7 0-.8-.6-.1-.7"
//         fill="#0e76e7"
//       />
//       <path
//         d="M829.56 1182.81v-13.1c0-2.1 2.7-3.8 6-3.8h98.65c3.3 0 6 1.8 6 3.8v13c0 2.1-2.7 3.8-6 3.8h-98.65c-3.2 0-6-1.6-6-3.7"
//         fill="#2f3e49"
//       />
//       <path
//         d="m834.1 1185.71 99.85-19.8c3.5 0 6.3 1.8 6.3 3.8v13c0 2.1-2.9 3.8-6.3 3.8h-99.69c-.7 0-.8-.5-.2-.8"
//         fill="#0e76e7"
//       />
//       <path
//         d="M965.31 1068.86v103.65a5 5 0 0 1-5 5h-16.3M944.97 1100.86h20.4M944.3 1125.46h20.4M826.06 1098.27h-20.4M826.06 1068.86H645.53M825.76 1122.36h-20.4M944.3 1151.06h20.4M825.76 1151.46h-20.4M515.39 524.66h-38.58"
//         fill="none"
//         stroke="#00aeed"
//         strokeMiterlimit={10}
//         strokeWidth={4}
//       />
//       <path
//         d="M879.24 528.61c12.5-4.9 17.1-3.9 17.1-18v-61.9a12.85 12.85 0 0 0-12.7-13h-30a13.24 13.24 0 0 0-13 13v61.9c0 14.1 4.7 13.1 17.1 18v3.9c0 2.2 2.2 4.3 4.9 4.3h12.3a4.71 4.71 0 0 0 4.3-4.3Z"
//         fill="#323e48"
//       />
//       <path fill="#0e76e7" d="M840.64 451.61h55.7v59.9h-55.7z" />
//       <g
//         clipPath="url(#aP)"
//         style={{
//           isolation: "isolate",
//         }}
//       >
//         <text
//           transform="translate(853.92 556.69)"
//           fontSize={11}
//           fill="#606060"

//         >
//           {"F001"}
//         </text>
//       </g>
//       <path
//         d="M968.57 528.61c12.5-4.9 17.1-3.9 17.1-18v-61.9a12.85 12.85 0 0 0-12.7-13h-30a13.24 13.24 0 0 0-13 13v61.9c0 14.1 4.7 13.1 17.1 18v3.9c0 2.2 2.2 4.3 4.9 4.3h12.3a4.71 4.71 0 0 0 4.3-4.3Z"
//         fill="#323e48"
//       />
//       <path fill="#0e76e7" d="M929.96 451.61h55.7v59.9h-55.7z" />
//       <g
//         clipPath="url(#aQ)"
//         style={{
//           isolation: "isolate",
//         }}
//       >
//         <text
//           transform="translate(943.25 556.69)"
//           fontSize={11}
//           fill="#606060"

//         >
//           {"F002"}
//         </text>
//       </g>
//       <path
//         d="M1312.81 583.85h-15.2a1.79 1.79 0 0 0-1.8 1.8v39.2"
//         fill="none"
//         stroke="#2f3e49"
//         strokeMiterlimit={10}
//         strokeWidth={4}
//       />
//       <path
//         d="M1302.31 592.85h14a1.54 1.54 0 0 0 1.5-1.5v-14.04a1.54 1.54 0 0 0-1.5-1.5h-14a1.54 1.54 0 0 0-1.5 1.5v14a1.54 1.54 0 0 0 1.5 1.5"
//         fill="#2f3e49"
//       />
//       <text
//         transform="translate(1261.34 675.28)"
//         fontSize={11}
//         fill="#606060"

//         style={{
//           isolation: "isolate",
//         }}
//       >
//         {"Metasulfito"}
//       </text>
//       <path
//         d="M1283.31 624.85v-39.2a1.79 1.79 0 0 0-1.8-1.8h-15.2"
//         fill="none"
//         stroke="#2f3e49"
//         strokeMiterlimit={10}
//         strokeWidth={4}
//       />
//       <path
//         d="M1278.31 591.31v-14a1.54 1.54 0 0 0-1.5-1.5h-14a1.54 1.54 0 0 0-1.5 1.5v14a1.54 1.54 0 0 0 1.5 1.5h14a1.54 1.54 0 0 0 1.5-1.5"
//         fill="#2f3e49"
//       />
//       <path fill="#00a39b" d="M1270.08 614.12h38.8v40h-38.8z" />
//       <path
//         d="M1308.78 607.42v45.2c0 .7-.3 1.3-.8 1.3h-37.1c-.4 0-.8-.6-.8-1.3v-45.2"
//         fill="none"
//         stroke="#2f3e49"
//         strokeMiterlimit={10}
//         strokeWidth={4}
//       />
//       <path
//         d="M1441.75 492.41v147.81h4.18l48.6.2c5.5 0 10-4.1 10-9.2v-9.2"
//         fill="none"
//         stroke="#cbcbcb"
//         strokeMiterlimit={10}
//         strokeWidth={2}
//       />
//       <path
//         d="m1437.25 492.81 3.2-3.2a1.67 1.67 0 0 1 2.2.1l3.1 3.1a1.61 1.61 0 0 1 .5 1.1 1.58 1.58 0 0 1-1.6 1.6h-6.3a1.58 1.58 0 0 1-1.6-1.6 1.61 1.61 0 0 1 .5-1.1"
//         fill="#cbcbcb"
//       />
//       <path
//         d="M1445.35 493.91a.65.65 0 0 1-.6.6h-6.3a.58.58 0 0 1-.6-.6.52.52 0 0 1 .2-.4l3.1-3.1a.75.75 0 0 1 .9 0l3.1 3.1a.52.52 0 0 1 .2.4m2 0a2.5 2.5 0 0 0-.8-1.8l-3.1-3.1a2.51 2.51 0 0 0-3.5-.2l-.1.1-.1.1-3.1 3.1a2.74 2.74 0 0 0-.8 2.3 2.61 2.61 0 0 0 2.7 2.1h6.1a2.67 2.67 0 0 0 2.7-2.6"
//         fill="#fff"
//       />
//       <path
//         d="M1510.95 583.85h-15.2a1.79 1.79 0 0 0-1.8 1.8v39.2"
//         fill="none"
//         stroke="#2f3e49"
//         strokeMiterlimit={10}
//         strokeWidth={4}
//       />
//       <path
//         d="M1500.45 592.85h14a1.54 1.54 0 0 0 1.5-1.5v-14.04a1.54 1.54 0 0 0-1.5-1.5h-14a1.54 1.54 0 0 0-1.5 1.5v14a1.54 1.54 0 0 0 1.5 1.5"
//         fill="#2f3e49"
//       />
//       <text
//         transform="translate(1449.55 675.28)"
//         fontSize={11}
//         fill="#606060"

//         style={{
//           isolation: "isolate",
//         }}
//       >
//         {"Anti Incrustante"}
//       </text>
//       <path
//         d="M1481.45 624.85v-39.2a1.79 1.79 0 0 0-1.8-1.8h-15.2"
//         fill="none"
//         stroke="#2f3e49"
//         strokeMiterlimit={10}
//         strokeWidth={4}
//       />
//       <path
//         d="M1476.45 591.31v-14a1.54 1.54 0 0 0-1.5-1.5h-14a1.54 1.54 0 0 0-1.5 1.5v14a1.54 1.54 0 0 0 1.5 1.5h14a1.54 1.54 0 0 0 1.5-1.5"
//         fill="#2f3e49"
//       />
//       <path fill="#00a39b" d="M1468.22 614.12h38.8v40h-38.8z" />
//       <path
//         d="M1506.93 607.42v45.2c0 .7-.3 1.3-.8 1.3h-37.1c-.4 0-.8-.6-.8-1.3v-45.2"
//         fill="none"
//         stroke="#2f3e49"
//         strokeMiterlimit={10}
//         strokeWidth={4}
//       />
//       <path
//         fill="none"
//         stroke="#35ace8"
//         strokeLinejoin="round"
//         strokeWidth={4}
//         d="M1146.36 556.08v-72.11M1146.36 712V592.36"
//       />
//       <path
//         d="M743.02 1060.16a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2"
//         fill="#fff"
//       />
//       <path
//         d="M743.02 1060.16a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2Z"
//         fill="none"
//         stroke="#35ace8"
//         strokeMiterlimit={10}
//         strokeWidth={4}
//       />
//       <g
//         clipPath="url(#aR)"
//         opacity={0.3}
//         style={{
//           isolation: "isolate",
//         }}
//       >
//         <g clipPath="url(#aS)">
//           <g clipPath="url(#aT)">
//             <use transform="matrix(.96 0 0 .96 1065.92 904.09)" xlinkHref="#O" />
//           </g>
//         </g>
//       </g>
//       <path
//         d="M1127.48 916.01h-43.1a6.25 6.25 0 0 0-6.3 6.2v102.4a6.25 6.25 0 0 0 6.2 6.3h51.82a5.43 5.43 0 0 1 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2a5.08 5.08 0 0 1 3.5-1.3h53.7a6.25 6.25 0 0 0 6.3-6.2v-102.4a6.25 6.25 0 0 0-6.2-6.3h-82.6Z"
//         fill="#fff"
//       />

//       {/* E.C. Permeado */}
//         {/* Tarjeta */}
//         <g
//           className="cursorPointer"
//           onClick={()=>loadGrafico(10,"E.C. Permeado",false)}
//         >
//           <g
//             /* clipPath="url(#aU)"
//             opacity={0.15}
//             style={{
//               isolation: "isolate",
//             }} */
//           >
//             <path className={getTarjetaClass(10,selected)} d="M1078.17 923.41h138.1v99.8h-138.1z" />
//           </g>
//           <text
//             transform="translate(1140.83 966.38)"
//             fontSize={13}
//             fill="#0e76e7"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"E.C"}
//           </text>
//           <g
//             clipPath="url(#aV)"
//             style={{
//               isolation: "isolate",
//             }}
//           >
//             <text
//               transform="translate(1121.68 981.62)"
//               fontSize={13}
//               fill="#0e76e7"

//             >
//               {"Permeado"}
//             </text>
//           </g>
//           <g
//             clipPath="url(#aW)"
//             style={{
//               isolation: "isolate",
//             }}
//           >
//             <text
//               transform="translate(1127.11 1014.58)"
//               fontSize={16}
//               fill="#606060"

//             >
//               {getScaledValue(datosScada.d10,1)}
//             </text>
//           </g>
//           <text
//             transform="translate(1133.94 946.17)"
//             fontSize={11}
//             fill="#606060"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"AIT029"}
//           </text>
//           <text
//             transform="translate(1174.13 1014.19)"
//             fontSize={13}
//             fill="#606060"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"uS/cm"}
//           </text>
//         </g>

//         {/* Campana */}
//         <g
//           className = {`${getTemaAlarma(10,loading,datosAlarmas)} cursorPointer`}
//           onClick={() => {onClickAlarma(10,"E.C. Permeado")}}
//         >
//           <path
//             d="M1090.18 1003.41a4.81 4.81 0 0 0-.6 3.3c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a4 4 0 0 1 .5-2.6 3.51 3.51 0 0 1 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2a5.58 5.58 0 0 0-2.5 2.3"
//           />
//           <path
//             d="M1088.48 1002.41a7 7 0 0 0-.8 4.7c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a6 6 0 0 1 .7-3.9 5.5 5.5 0 0 1 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2a8 8 0 0 0-3.7 3.1M1099.88 1001.11c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3a3.51 3.51 0 0 1 1.9 1.7 4 4 0 0 1 .5 2.6c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a4.81 4.81 0 0 0-.6-3.3 6.84 6.84 0 0 0-2.5-2.3"
//           />
//           <path
//             d="M1100.48 999.31c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3a5.87 5.87 0 0 1 3 2.6 6 6 0 0 1 .7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a7 7 0 0 0-.8-4.7 8.48 8.48 0 0 0-3.7-3.1M1101.38 1008.41v-1.5a4.93 4.93 0 0 0-3.8-4.8v-.6a.9.9 0 0 0-.9-.9h-.5a.9.9 0 0 0-.9.9v.6a4.73 4.73 0 0 0-3.8 4.8v1.5a3.77 3.77 0 0 1-.7 2.1 1.61 1.61 0 0 0-.3.9v.1a1.58 1.58 0 0 0 1.6 1.6h8.9a1.58 1.58 0 0 0 1.6-1.6v-.1a1.61 1.61 0 0 0-.3-.9 2.72 2.72 0 0 1-.9-2.1M1096.38 1015.91a1.75 1.75 0 0 0 1.7-1.7h-3.3a1.6 1.6 0 0 0 1.6 1.7"
//           />
//         </g>

//       {/* Fin E.C. Permeado */}

//       <path
//         d="M1146.63 1060.16a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2"
//         fill="#fff"
//       />
//       <path
//         d="M1146.63 1060.16a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2Z"
//         fill="none"
//         stroke="#35ace8"
//         strokeMiterlimit={10}
//         strokeWidth={4}
//       />
//       <path
//         d="M1052.78 1060.16a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2"
//         fill="#fff"
//       />
//       <path
//         d="M1052.78 1060.16a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2Z"
//         fill="none"
//         stroke="#35ace8"
//         strokeMiterlimit={10}
//         strokeWidth={4}
//       />
//       <path
//         d="M966.65 1342.6a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2"
//         fill="#fff"
//       />
//       <path
//         d="M966.65 1342.6a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2Z"
//         fill="none"
//         stroke="#35ace8"
//         strokeMiterlimit={10}
//         strokeWidth={4}
//       />
//       <g
//         clipPath="url(#aX)"
//         opacity={0.3}
//         style={{
//           isolation: "isolate",
//         }}
//       >
//         <g clipPath="url(#aY)">
//           <g clipPath="url(#aZ)">
//             <use transform="matrix(.96 0 0 .96 1269.93 908.17)" xlinkHref="#O" />
//           </g>
//         </g>
//       </g>
//       <path
//         d="M1331.48 920.1h-43.1a6.25 6.25 0 0 0-6.3 6.2v102.4a6.25 6.25 0 0 0 6.2 6.3h51.82a5.43 5.43 0 0 1 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2a5.08 5.08 0 0 1 3.5-1.3h53.7a6.25 6.25 0 0 0 6.3-6.2V926.4a6.25 6.25 0 0 0-6.2-6.3h-82.6Z"
//         fill="#fff"
//       />

//       {/* pH Mezcla */}
//         {/* Tarjeta */}
//         <g
//           className="cursorPointer"
//           onClick={()=>loadGrafico(19,"pH Mezcla",false)}
//         >
//           <g
//             /* clipPath="url(#ba)"
//             opacity={0.15}
//             style={{
//               isolation: "isolate",
//             }} */
//           >
//             <path className={getTarjetaClass(19,selected)} d="M1282.18 927.5h138.1v99.8h-138.1z" />
//           </g>
//           <text
//             transform="translate(1343.73 970.46)"
//             fontSize={13}
//             fill="#0e76e7"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"pH"}
//           </text>
//           <g
//             clipPath="url(#bb)"
//             style={{
//               isolation: "isolate",
//             }}
//           >
//             <text
//               transform="translate(1333.47 985.7)"
//               fontSize={13}
//               fill="#0e76e7"

//             >
//               {"Mezcla"}
//             </text>
//           </g>
//           <g
//             clipPath="url(#bc)"
//             style={{
//               isolation: "isolate",
//             }}
//           >
//             <text
//               transform="translate(1331.12 1018.66)"
//               fontSize={16}
//               fill="#606060"

//             >
//               {getScaledValue(datosScada.d19,1)}
//             </text>
//           </g>
//           <text
//             transform="translate(1337.85 950.26)"
//             fontSize={11}
//             fill="#606060"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"AIT030"}
//           </text>
//           <text
//             transform="translate(1390.68 1018.27)"
//             fontSize={13}
//             fill="#606060"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"pH"}
//           </text>
//         </g>

//         {/* Campana */}
//         <g
//           className = {`${getTemaAlarma(19,loading,datosAlarmas)} cursorPointer`}
//           onClick={() => {onClickAlarma(19,"pH Mezcla")}}
//         >
//           <path
//             d="M1294.18 1007.5a4.81 4.81 0 0 0-.6 3.3c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a4 4 0 0 1 .5-2.6 3.51 3.51 0 0 1 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2a5.58 5.58 0 0 0-2.5 2.3"
//           />
//           <path
//             d="M1292.48 1006.5a7 7 0 0 0-.8 4.7c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a6 6 0 0 1 .7-3.9 5.5 5.5 0 0 1 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2a8 8 0 0 0-3.7 3.1M1303.88 1005.2c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3a3.51 3.51 0 0 1 1.9 1.7 4 4 0 0 1 .5 2.6c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a4.81 4.81 0 0 0-.6-3.3 6.84 6.84 0 0 0-2.5-2.3"
//           />
//           <path
//             d="M1304.48 1003.4c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3a5.87 5.87 0 0 1 3 2.6 6 6 0 0 1 .7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a7 7 0 0 0-.8-4.7 8.48 8.48 0 0 0-3.7-3.1M1305.38 1012.5v-1.5a4.93 4.93 0 0 0-3.8-4.8v-.6a.9.9 0 0 0-.9-.9h-.5a.9.9 0 0 0-.9.9v.6a4.73 4.73 0 0 0-3.8 4.8v1.5a3.77 3.77 0 0 1-.7 2.1 1.61 1.61 0 0 0-.3.9v.1a1.58 1.58 0 0 0 1.6 1.6h8.9a1.58 1.58 0 0 0 1.6-1.6v-.1a1.61 1.61 0 0 0-.3-.9 2.72 2.72 0 0 1-.9-2.1M1300.38 1020a1.75 1.75 0 0 0 1.7-1.7h-3.3a1.6 1.6 0 0 0 1.6 1.7"
//           />
//         </g>

//       {/* Fin pH Mezcla */}

//       {/* E.C. de Mezcla */}
//         {/* Tarjeta */}
//         <g
//           className="cursorPointer"
//           onClick={()=>loadGrafico(16,"E.C. de Mezcla",false)}
//           transform="translate(170 0)"
//         >
//           <g
//             clipPath="url(#aX)"
//             opacity={0.3}
//             style={{
//               isolation: "isolate",
//             }}
//           >
//             <g clipPath="url(#aY)">
//               <g clipPath="url(#aZ)">
//                 <use transform="matrix(.96 0 0 .96 1269.93 908.17)" xlinkHref="#O" />
//               </g>
//             </g>
//           </g>

//           <path
//             d="M1331.48 920.1h-43.1a6.25 6.25 0 0 0-6.3 6.2v102.4a6.25 6.25 0 0 0 6.2 6.3h51.82a5.43 5.43 0 0 1 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2a5.08 5.08 0 0 1 3.5-1.3h53.7a6.25 6.25 0 0 0 6.3-6.2V926.4a6.25 6.25 0 0 0-6.2-6.3h-82.6Z"
//             fill="#fff"
//           />
//           <g>
//             <path className={getTarjetaClass(16,selected)} d="M1282.18 927.5h138.1v99.8h-138.1z" />
//           </g>
//           <text
//             transform="translate(1343.73 970.46)"
//             fontSize={13}
//             fill="#0e76e7"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"E.C."}
//           </text>
//           <g
//             clipPath="url(#bb)"
//             style={{
//               isolation: "isolate",
//             }}
//           >
//             <text
//               transform="translate(1333.47 985.7)"
//               fontSize={13}
//               fill="#0e76e7"

//             >
//               {"Mezcla"}
//             </text>
//           </g>
//           <g>
//             <text
//               transform="translate(1324.12 1018.66)"
//               fontSize={16}
//               fill="#606060"

//             >
//               {getScaledValue(datosScada.d16,1)}
//             </text>
//           </g>
//           <text
//             transform="translate(1337.85 950.26)"
//             fontSize={11}
//             fill="#606060"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"AIT-031"}
//           </text>
//           <text
//             transform="translate(1378.68 1018.27)"
//             fontSize={13}
//             fill="#606060"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"uS/cm"}
//           </text>
//         </g>

//         {/* Campana */}
//         <g
//           className = {`${getTemaAlarma(16,loading,datosAlarmas)} cursorPointer`}
//           onClick={() => {onClickAlarma(16,"E.C. de Mezcla")}}
//           transform="translate(170 0)"
//         >
//           <path
//             d="M1294.18 1007.5a4.81 4.81 0 0 0-.6 3.3c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a4 4 0 0 1 .5-2.6 3.51 3.51 0 0 1 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2a5.58 5.58 0 0 0-2.5 2.3"
//           />
//           <path
//             d="M1292.48 1006.5a7 7 0 0 0-.8 4.7c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a6 6 0 0 1 .7-3.9 5.5 5.5 0 0 1 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2a8 8 0 0 0-3.7 3.1M1303.88 1005.2c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3a3.51 3.51 0 0 1 1.9 1.7 4 4 0 0 1 .5 2.6c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a4.81 4.81 0 0 0-.6-3.3 6.84 6.84 0 0 0-2.5-2.3"
//           />
//           <path
//             d="M1304.48 1003.4c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3a5.87 5.87 0 0 1 3 2.6 6 6 0 0 1 .7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a7 7 0 0 0-.8-4.7 8.48 8.48 0 0 0-3.7-3.1M1305.38 1012.5v-1.5a4.93 4.93 0 0 0-3.8-4.8v-.6a.9.9 0 0 0-.9-.9h-.5a.9.9 0 0 0-.9.9v.6a4.73 4.73 0 0 0-3.8 4.8v1.5a3.77 3.77 0 0 1-.7 2.1 1.61 1.61 0 0 0-.3.9v.1a1.58 1.58 0 0 0 1.6 1.6h8.9a1.58 1.58 0 0 0 1.6-1.6v-.1a1.61 1.61 0 0 0-.3-.9 2.72 2.72 0 0 1-.9-2.1M1300.38 1020a1.75 1.75 0 0 0 1.7-1.7h-3.3a1.6 1.6 0 0 0 1.6 1.7"
//           />
//         </g>

//       {/* Fin E.C. de Mezcla */}

//       <g
//         clipPath="url(#bd)"
//         opacity={0.3}
//         style={{
//           isolation: "isolate",
//         }}
//       >
//         <g clipPath="url(#be)">
//           <g clipPath="url(#bf)">
//             <use
//               transform="rotate(180 690.22 611.4) scale(.96)"
//               xlinkHref="#aM"
//             />
//           </g>
//         </g>
//       </g>
//       <path
//         d="M1318.89 1210.87h43.1a6.25 6.25 0 0 0 6.3-6.2v-102.36a6.25 6.25 0 0 0-6.2-6.3h-51.8a5.43 5.43 0 0 1-3.4-1.2l-.4-.3c-6.5-6.5-6.5-6.5-12.9.2a5.08 5.08 0 0 1-3.5 1.3h-53.7a6.25 6.25 0 0 0-6.3 6.2v102.4a6.25 6.25 0 0 0 6.2 6.3h82.6Z"
//         fill="#fff"
//       />

//       {/* ORP Mezcla */}
//         {/* Tarjeta */}
//         <g
//           className="cursorPointer"
//           onClick={()=>loadGrafico(20,"ORP Mezcla",false)}
//         >
//           <g
//             /* clipPath="url(#bg)"
//             opacity={0.15}
//             style={{
//               isolation: "isolate",
//             }} */
//           >
//             <path className={getTarjetaClass(20,selected)} d="M1230.09 1103.67h138.1v99.8h-138.1z" />
//           </g>
//           <text
//             transform="translate(1285.56 1145.95)"
//             fontSize={13}
//             fill="#0e76e7"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"ORP"}
//           </text>
//           <text
//             transform="translate(1278.71 1161.2)"
//             fontSize={13}
//             fill="#0e76e7"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"Mezcla"}
//           </text>
//           <text
//             transform="translate(1278.71 1190.61)"
//             fontSize={16}
//             fill="#606060"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {getScaledValue(datosScada.d20,1)}
//           </text>
//           <text
//             transform="translate(1281.25 1122.21)"
//             fontSize={11}
//             fill="#606060"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"AIT045"}
//           </text>
//           <text
//             transform="translate(1340.95 1190.22)"
//             fontSize={13}
//             fill="#606060"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"mV"}
//           </text>
//         </g>

//         {/* Campana */}
//         <g
//           className = {`${getTemaAlarma(20,loading,datosAlarmas)} cursorPointer`}
//           onClick={() => {onClickAlarma(20,"ORP Mezcla")}}
//         >
//           <path
//             d="M1246.71 1179.45a4.81 4.81 0 0 0-.6 3.3c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a4 4 0 0 1 .5-2.6 3.51 3.51 0 0 1 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2a5.58 5.58 0 0 0-2.5 2.3"
//           />
//           <path
//             d="M1245.01 1178.45a7 7 0 0 0-.8 4.7c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a6 6 0 0 1 .7-3.9 5.5 5.5 0 0 1 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2a8 8 0 0 0-3.7 3.1M1256.41 1177.15c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3a3.51 3.51 0 0 1 1.9 1.7 4 4 0 0 1 .5 2.6c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a4.81 4.81 0 0 0-.6-3.3 6.84 6.84 0 0 0-2.5-2.3"
//           />
//           <path
//             d="M1257.01 1175.31c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3a5.87 5.87 0 0 1 3 2.6 6 6 0 0 1 .7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a7 7 0 0 0-.8-4.7 8.48 8.48 0 0 0-3.7-3.1M1257.91 1184.45v-1.5a4.93 4.93 0 0 0-3.8-4.8v-.6a.9.9 0 0 0-.9-.9h-.5a.9.9 0 0 0-.9.9v.6a4.73 4.73 0 0 0-3.8 4.8v1.5a3.77 3.77 0 0 1-.7 2.1 1.61 1.61 0 0 0-.3.9v.1a1.58 1.58 0 0 0 1.6 1.6h8.9a1.58 1.58 0 0 0 1.6-1.6v-.1a1.61 1.61 0 0 0-.3-.9 2.72 2.72 0 0 1-.9-2.1M1252.91 1191.95a1.75 1.75 0 0 0 1.7-1.7h-3.3a1.6 1.6 0 0 0 1.6 1.7"
//           />
//         </g>

//       {/* Fin ORP Mezcla */}

//       <g
//         clipPath="url(#bh)"
//         opacity={0.3}
//         style={{
//           isolation: "isolate",
//         }}
//       >
//         <g clipPath="url(#bi)">
//           <g clipPath="url(#bj)">
//             <use
//               transform="rotate(180 773.325 611.4) scale(.96)"
//               xlinkHref="#aM"
//             />
//           </g>
//         </g>
//       </g>
//       <path
//         d="M1485.1 1210.87h43.1a6.25 6.25 0 0 0 6.3-6.2v-102.36a6.25 6.25 0 0 0-6.2-6.3h-51.8a5.43 5.43 0 0 1-3.4-1.2l-.4-.3c-6.5-6.5-6.5-6.5-12.9.2a5.08 5.08 0 0 1-3.5 1.3h-53.7a6.25 6.25 0 0 0-6.3 6.2v102.4a6.25 6.25 0 0 0 6.2 6.3h82.6Z"
//         fill="#fff"
//       />

//       {/* Caudal Producto Final */}
//         {/* Tarjeta */}
//         <g
//           className="cursorPointer"
//           onClick={()=>loadGrafico(17,"Caudal Producto Final",false)}
//         >
//           <g
//             /* clipPath="url(#bk)"
//             opacity={0.15}
//             style={{
//               isolation: "isolate",
//             }} */
//           >
//             <path className={getTarjetaClass(17,selected)} d="M1396.3 1103.67h138.1v99.8h-138.1z" />
//           </g>
//           <text
//             transform="translate(1444.92 1190.61)"
//             fontSize={16}
//             fill="#606060"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {getScaledValue(datosScada.d17,1)}
//           </text>
//           <text
//             transform="translate(1500.15 1190.22)"
//             fontSize={13}
//             fill="#606060"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"m3/h"}
//           </text>
//           <text
//             transform="translate(1416.1 1148.67)"
//             fontSize={13}
//             fill="#0e76e7"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"Caudal Producto"}
//             <tspan x={34.33} y={15.6}>
//               {"Final"}
//             </tspan>
//           </text>
//           <text
//             transform="translate(1404.15 1123.95)"
//             fontSize={11}
//             fill="#606060"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"FIT017-FIT034 + FIT 019"}
//           </text>
//         </g>

//         {/* Campana */}
//         <g
//           className = {`${getTemaAlarma(17,loading,datosAlarmas)} cursorPointer`}
//           onClick={() => {onClickAlarma(17,"Caudal Producto Final")}}
//         >
//           <path
//             d="M1412.92 1179.45a4.81 4.81 0 0 0-.6 3.3c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a4 4 0 0 1 .5-2.6 3.51 3.51 0 0 1 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2a5.58 5.58 0 0 0-2.5 2.3"
//           />
//           <path
//             d="M1411.22 1178.45a7 7 0 0 0-.8 4.7c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a6 6 0 0 1 .7-3.9 5.5 5.5 0 0 1 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2a8 8 0 0 0-3.7 3.1M1422.62 1177.15c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3a3.51 3.51 0 0 1 1.9 1.7 4 4 0 0 1 .5 2.6c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a4.81 4.81 0 0 0-.6-3.3 6.84 6.84 0 0 0-2.5-2.3"
//           />
//           <path
//             d="M1423.22 1175.31c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3a5.87 5.87 0 0 1 3 2.6 6 6 0 0 1 .7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a7 7 0 0 0-.8-4.7 8.48 8.48 0 0 0-3.7-3.1M1424.1 1184.45v-1.5a4.93 4.93 0 0 0-3.8-4.8v-.6a.9.9 0 0 0-.9-.9h-.5a.9.9 0 0 0-.9.9v.6a4.73 4.73 0 0 0-3.8 4.8v1.5a3.77 3.77 0 0 1-.7 2.1 1.61 1.61 0 0 0-.3.9v.1a1.58 1.58 0 0 0 1.6 1.6h8.9a1.58 1.58 0 0 0 1.6-1.6v-.1a1.61 1.61 0 0 0-.3-.9 2.72 2.72 0 0 1-.9-2.1M1419.1 1191.95a1.75 1.75 0 0 0 1.7-1.7h-3.3a1.6 1.6 0 0 0 1.6 1.7"
//           />
//         </g>

//       {/* Fin Caudal Producto Final */}

//       <g
//         clipPath="url(#bl)"
//         opacity={0.3}
//         style={{
//           isolation: "isolate",
//         }}
//       >
//         <g clipPath="url(#bm)">
//           <g clipPath="url(#bn)">
//             <use
//               transform="rotate(180 566.83 611.4) scale(.96)"
//               xlinkHref="#aM"
//             />
//           </g>
//         </g>
//       </g>
//       <path
//         d="M1072.1 1210.87h43.1a6.25 6.25 0 0 0 6.3-6.2v-102.36a6.25 6.25 0 0 0-6.2-6.3h-51.8a5.43 5.43 0 0 1-3.4-1.2l-.4-.3c-6.5-6.5-6.5-6.5-12.9.2a5.08 5.08 0 0 1-3.5 1.3h-53.7a6.25 6.25 0 0 0-6.3 6.2v102.4a6.25 6.25 0 0 0 6.2 6.3h82.6Z"
//         fill="#fff"
//       />

//       {/* Caudal de Permeado */}
//         {/* Tarjeta */}
//         <g
//           className="cursorPointer"
//           onClick={()=>loadGrafico(8,"Caudal de Permeado",false)}
//         >
//           <g
//             /* clipPath="url(#bo)"
//             opacity={0.15}
//             style={{
//               isolation: "isolate",
//             }} */
//           >
//             <path className={getTarjetaClass(8,selected)} d="M983.3 1103.67h138.1v99.8H983.3z" />
//           </g>
//           <text
//             transform="translate(1031.93 1190.61)"
//             fontSize={16}
//             fill="#606060"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {getScaledValue(datosScada.d8,1)}
//           </text>
//           <text
//             transform="translate(1085.16 1190.22)"
//             fontSize={13}
//             fill="#606060"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"m3/h"}
//           </text>
//           <text
//             transform="translate(1023.15 1148.67)"
//             fontSize={13}
//             fill="#0e76e7"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"Caudal de"}
//             <tspan x={-0.36} y={15.6}>
//               {"Permeado"}
//             </tspan>
//           </text>
//           <text
//             transform="translate(1019.38 1123.95)"
//             fontSize={11}
//             fill="#606060"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"FIT017-FIT034"}
//           </text>
//         </g>

//         {/* Campana */}
//         <g
//           className = {`${getTemaAlarma(8,loading,datosAlarmas)} cursorPointer`}
//           onClick={() => {onClickAlarma(8,"Caudal de Permeado")}}
//         >
//           <path
//             d="M999.92 1179.45a4.81 4.81 0 0 0-.6 3.3c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a4 4 0 0 1 .5-2.6 3.51 3.51 0 0 1 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2a5.58 5.58 0 0 0-2.5 2.3"
//           />
//           <path
//             d="M998.22 1178.45a7 7 0 0 0-.8 4.7c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a6 6 0 0 1 .7-3.9 5.5 5.5 0 0 1 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2a8 8 0 0 0-3.7 3.1M1009.62 1177.15c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3a3.51 3.51 0 0 1 1.9 1.7 4 4 0 0 1 .5 2.6c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a4.81 4.81 0 0 0-.6-3.3 6.84 6.84 0 0 0-2.5-2.3"
//           />
//           <path
//             d="M1010.22 1175.31c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3a5.87 5.87 0 0 1 3 2.6 6 6 0 0 1 .7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a7 7 0 0 0-.8-4.7 8.48 8.48 0 0 0-3.7-3.1M1011.1 1184.45v-1.5a4.93 4.93 0 0 0-3.8-4.8v-.6a.9.9 0 0 0-.9-.9h-.5a.9.9 0 0 0-.9.9v.6a4.73 4.73 0 0 0-3.8 4.8v1.5a3.77 3.77 0 0 1-.7 2.1 1.61 1.61 0 0 0-.3.9v.1a1.58 1.58 0 0 0 1.6 1.6h8.9a1.58 1.58 0 0 0 1.6-1.6v-.1a1.61 1.61 0 0 0-.3-.9 2.72 2.72 0 0 1-.9-2.1M1006.1 1191.95a1.75 1.75 0 0 0 1.7-1.7h-3.3a1.6 1.6 0 0 0 1.6 1.7"
//           />
//         </g>

//       {/* Fin Caudal de Permeado */}

//       <path
//         d="M1299.19 1060.16a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2"
//         fill="#fff"
//       />
//       <path
//         d="M1299.19 1060.16a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2Z"
//         fill="none"
//         stroke="#35ace8"
//         strokeMiterlimit={10}
//         strokeWidth={4}
//       />
//       <path
//         d="M1351.23 1060.16a9.2 9.2 0 1 1-9.2 9.2 9.19 9.19 0 0 1 9.2-9.2"
//         fill="#fff"
//       />
//       <path
//         d="M1351.23 1060.16a9.2 9.2 0 1 1-9.2 9.2 9.19 9.19 0 0 1 9.2-9.2Z"
//         fill="none"
//         stroke="#35ace8"
//         strokeMiterlimit={10}
//         strokeWidth={4}
//       />
//       {/* nUEVO */}
//       <path
//         d="M1516.26 1060.16a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2"
//         fill="#fff"
//       />
//       <path
//         d="M1516.26 1060.16a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2Z"
//         fill="none"
//         stroke="#35ace8"
//         strokeMiterlimit={10}
//         strokeWidth={4}
//       />
//       <path
//         d="M1466.26 1060.16a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2"
//         fill="#fff"
//       />
//       <path
//         d="M1466.26 1060.16a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2Z"
//         fill="none"
//         stroke="#35ace8"
//         strokeMiterlimit={10}
//         strokeWidth={4}
//       />
//       <g
//         clipPath="url(#bp)"
//         opacity={0.3}
//         style={{
//           isolation: "isolate",
//         }}
//       >
//         <g clipPath="url(#bq)">
//           <g clipPath="url(#br)">
//             <use transform="matrix(.96 0 0 .96 1146.93 1331.99)" xlinkHref="#O" />
//           </g>
//         </g>
//       </g>
//       <path
//         d="M1208.49 1343.92h-43.1a6.25 6.25 0 0 0-6.3 6.2v102.4a6.25 6.25 0 0 0 6.2 6.3h51.81a5.43 5.43 0 0 1 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2a5.08 5.08 0 0 1 3.5-1.3h53.7a6.25 6.25 0 0 0 6.3-6.2v-102.4a6.25 6.25 0 0 0-6.2-6.3h-82.6Z"
//         fill="#fff"
//       />

//       {/* Caudal de Concentrado */}
//         {/* Tarjeta */}
//         <g
//           className="cursorPointer"
//           onClick={()=>loadGrafico(14,"Caudal de Concentrado",false)}
//         >
//           <g
//             /* clipPath="url(#bs)"
//             opacity={0.15}
//             style={{
//               isolation: "isolate",
//             }} */
//           >
//             <path className={getTarjetaClass(14,selected)} d="M1159.18 1351.32h138.1v99.8h-138.1z" />
//           </g>
//           <text
//             transform="translate(1204.02 1394.28)"
//             fontSize={13}
//             fill="#0e76e7"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"Caudal de"}
//           </text>
//           <g
//             clipPath="url(#bt)"
//             style={{
//               isolation: "isolate",
//             }}
//           >
//             <text
//               transform="translate(1196.44 1409.53)"
//               fontSize={13}
//               fill="#0e76e7"

//             >
//               {"Concentrado"}
//             </text>
//           </g>
//           <g
//             clipPath="url(#bu)"
//             style={{
//               isolation: "isolate",
//             }}
//           >
//             <text
//               transform="translate(1208.12 1442.48)"
//               fontSize={16}
//               fill="#606060"

//             >
//               {getScaledValue(datosScada.d14,1)}
//             </text>
//           </g>
//           <text
//             transform="translate(1219.29 1374.08)"
//             fontSize={11}
//             fill="#606060"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"FIT34"}
//           </text>
//           <text
//             transform="translate(1263.12 1442.09)"
//             fontSize={13}
//             fill="#606060"

//             style={{
//               isolation: "isolate",
//             }}
//           >
//             {"m3/h"}
//           </text>
//         </g>

//         {/* Campana */}
//         <g
//           className = {`${getTemaAlarma(14,loading,datosAlarmas)} cursorPointer`}
//           onClick={() => {onClickAlarma(14,"Caudal de Concentrado")}}
//         >
//           <path
//             d="M1171.19 1431.31a4.81 4.81 0 0 0-.6 3.3c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a4 4 0 0 1 .5-2.6 3.51 3.51 0 0 1 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2a5.58 5.58 0 0 0-2.5 2.3"
//           />
//           <path
//             d="M1169.49 1430.31a7 7 0 0 0-.8 4.7c0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3a6 6 0 0 1 .7-3.9 5.5 5.5 0 0 1 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2a8 8 0 0 0-3.7 3.1M1180.89 1429.02c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3a3.51 3.51 0 0 1 1.9 1.7 4 4 0 0 1 .5 2.6c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a4.81 4.81 0 0 0-.6-3.3 6.84 6.84 0 0 0-2.5-2.3"
//           />
//           <path
//             d="M1181.49 1427.22c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3a5.87 5.87 0 0 1 3 2.6 6 6 0 0 1 .7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2a7 7 0 0 0-.8-4.7 8.48 8.48 0 0 0-3.7-3.1M1182.39 1436.31v-1.5a4.93 4.93 0 0 0-3.8-4.8v-.6a.9.9 0 0 0-.9-.9h-.5a.9.9 0 0 0-.9.9v.6a4.73 4.73 0 0 0-3.8 4.8v1.5a3.77 3.77 0 0 1-.7 2.1 1.61 1.61 0 0 0-.3.9v.1a1.58 1.58 0 0 0 1.6 1.6h8.9a1.58 1.58 0 0 0 1.6-1.6v-.1a1.61 1.61 0 0 0-.3-.9 2.72 2.72 0 0 1-.9-2.1M1177.39 1443.82a1.75 1.75 0 0 0 1.7-1.7h-3.3a1.6 1.6 0 0 0 1.6 1.7"
//           />
//         </g>

//       {/* Fin Caudal de Concentrado */}

//       <path
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         stroke="#35ace8"
//         strokeMiterlimit="10"
//         strokeWidth="4"
//         d="M1323.56 1496.15L1056.33 1496.15"
//       />
//       <path
//         d="M1230.29 1488.31a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2"
//         fill="#fff"
//       />
//       <path
//         d="M1230.29 1488.31a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2Z"
//         fill="none"
//         stroke="#35ace8"
//         strokeMiterlimit={10}
//         strokeWidth={4}
//       />
//       <path
//         fill="none"
//         stroke="#00aeed"
//         strokeLinejoin="round"
//         strokeWidth={4}
//         d="M375.73 1077.73h67.69M521.8 1077.73h73.41"
//       />
//       <path
//         d="M406.69 1069.36a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2"
//         fill="#fff"
//       />
//       <path
//         d="M406.69 1069.36a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2Z"
//         fill="none"
//         stroke="#35ace8"
//         strokeMiterlimit={10}
//         strokeWidth={4}
//       />
//       <path
//         d="M572.68 1069.36a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2"
//         fill="#fff"
//       />
//       <path
//         d="M572.68 1069.36a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2Z"
//         fill="none"
//         stroke="#35ace8"
//         strokeMiterlimit={10}
//         strokeWidth={4}
//       />
//       <path
//         fill="none"
//         stroke="#00aeed"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={4}
//         d="M1146.36 741.82v132.84h117v194.7"
//       />
//       <path
//         d="M1234.34 863.55a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2"
//         fill="#fff"
//         stroke="#00aeed"
//         strokeLinejoin="round"
//         strokeWidth={4}
//       />
//       <path
//         d="M1234.34 863.55a9.2 9.2 0 1 1-9.2 9.2 9.2 9.2 0 0 1 9.2-9.2Z"
//         fill="#fff"
//         stroke="#00aeed"
//         strokeLinejoin="round"
//         strokeWidth={4}
//       />
//       <text
//         transform="translate(1566.53 1152.89)"
//         fontSize={11}
//         fill="#606060"

//         style={{
//           isolation: "isolate",
//         }}
//       >
//         {"TK"}
//         <tspan x={14.06} y={0} xmlSpace="preserve" letterSpacing="-.05em">
//           {" 02"}
//         </tspan>
//         <tspan letterSpacing="-.05em">
//           <tspan x={-15.63} y={13.2}>
//             {"Agua Potable"}
//           </tspan>
//         </tspan>
//       </text>
//       <text
//         transform="translate(1354.54 1553.32)"
//         fontSize={11}
//         fill="#606060"

//         style={{
//           isolation: "isolate",
//         }}
//       >
//         {"TK"}
//         <tspan x={14.06} y={0} xmlSpace="preserve" letterSpacing="-.05em">
//           {" 03"}
//         </tspan>
//         <tspan letterSpacing="-.05em">
//           <tspan x={-27.26} y={13.2}>
//             {"Agua Concentrado"}
//           </tspan>
//         </tspan>
//       </text>

//       <path
//         fill="none"
//         stroke="#35ace8"
//         strokeLinejoin="round"
//         strokeWidth={4}
//         d="M1045.98 1438.47h87.8v57.68"
//       />
//       <path
//         d="M1042.61 1431a1 1 0 0 0 0-2h-16.83a1 1 0 1 0 0 2h7.32v7.22l-6.45-3.76a.37.37 0 0 0-.3-.1c-.4-.1-.8.3-.9.7v9.2c0 .2 0 .3.1.4a.8.8 0 0 0 1.1.3l7.45-4.34 7.42 4.32a.37.37 0 0 0 .3.1c.4.1.8-.3.9-.7v-9.2c0-.2 0-.3-.1-.4a.8.8 0 0 0-1.1-.3l-6.42 3.74V1431Z"
//         fill="#323e48"
//       />
//       <path
//         fill="none"
//         stroke="#35ace8"
//         strokeLinejoin="round"
//         strokeWidth={4}
//         d="M1019.01 1439.02h-51.26"
//       />
//       <path
//         d="M766.48 490.31a2 2 0 0 1-1.9-1.9v-9a1.91 1.91 0 0 1 1.9-1.9 2.06 2.06 0 0 1 1.3.5l4.5 4.5a2 2 0 0 1 .1 2.6l-.1.1-4.5 4.5a1.61 1.61 0 0 1-1.3.6"
//         fill="#00aeed"
//       />
//       <path
//         d="M766.48 478.57a.82.82 0 0 1 .6.3l4.5 4.5a1 1 0 0 1 0 1.3l-4.5 4.5a.85.85 0 0 1-.6.3.9.9 0 0 1-.9-.9v-9a.93.93 0 0 1 .84-1h.06m0-2a2.91 2.91 0 0 0-2.9 2.89v9a2.91 2.91 0 0 0 2.89 2.91 3 3 0 0 0 2-.8l4.5-4.5.1-.11.1-.09a2.92 2.92 0 0 0-.2-3.91l-4.5-4.5a2.54 2.54 0 0 0-2-.89"
//         fill="#fff"
//       />
//       <path
//         d="M1040.1 489.95a2 2 0 0 1-1.9-1.9v-9a1.9 1.9 0 0 1 1.9-1.9 2.08 2.08 0 0 1 1.3.5l4.5 4.5a2 2 0 0 1 .1 2.6l-.1.1-4.5 4.5a1.64 1.64 0 0 1-1.3.6"
//         fill="#00aeed"
//       />
//       <path
//         d="M1040.1 478.25a.83.83 0 0 1 .6.3l4.5 4.5a1.05 1.05 0 0 1 0 1.3l-4.5 4.5a.91.91 0 0 1-.6.3.9.9 0 0 1-.9-.9v-9a.92.92 0 0 1 .83-1h.07m0-2a2.89 2.89 0 0 0-2.9 2.89v9a2.9 2.9 0 0 0 2.89 2.91 3 3 0 0 0 2-.8l4.5-4.5.1-.11.1-.09a2.94 2.94 0 0 0-.2-3.91l-4.5-4.5a2.53 2.53 0 0 0-2-.89"
//         fill="#fff"
//       />
//       <path
//         d="M1213.1 488.65a2 2 0 0 1-1.9-1.9v-9a1.9 1.9 0 0 1 1.9-1.9 2.21 2.21 0 0 1 1.3.5l4.5 4.5a2 2 0 0 1 .1 2.6l-.1.1-4.5 4.5a1.58 1.58 0 0 1-1.3.6"
//         fill="#00aeed"
//       />
//       <path
//         d="M1213.1 476.95a.91.91 0 0 1 .6.3l4.5 4.5a1.05 1.05 0 0 1 0 1.3l-4.5 4.5a.83.83 0 0 1-.6.3.9.9 0 0 1-.9-.9v-9a.91.91 0 0 1 .83-1h.07m0-2a2.9 2.9 0 0 0-2.9 2.89v9a2.89 2.89 0 0 0 2.89 2.91 3 3 0 0 0 2-.8l4.5-4.5.1-.11.1-.09a2.94 2.94 0 0 0-.2-3.91l-4.5-4.5a2.55 2.55 0 0 0-2-.89"
//         fill="#fff"
//       />
//       <path
//         d="M1552.02 1491.31a2 2 0 0 1-1.9-1.9v-9a1.91 1.91 0 0 1 1.9-1.9 2.21 2.21 0 0 1 1.3.5l4.5 4.5a2 2 0 0 1 .1 2.6l-.1.1-4.5 4.5a1.58 1.58 0 0 1-1.3.6"
//         fill="#00aeed"
//       />
//       <path
//         d="M1552.02 1479.57a.91.91 0 0 1 .6.3l4.5 4.5a1.05 1.05 0 0 1 0 1.3l-4.5 4.5a.83.83 0 0 1-.6.3.9.9 0 0 1-.9-.9v-9a.91.91 0 0 1 .83-1h.07m0-2a2.9 2.9 0 0 0-2.9 2.89v9a2.89 2.89 0 0 0 2.89 2.91 3 3 0 0 0 2-.8l4.5-4.5.1-.11.1-.09a2.94 2.94 0 0 0-.2-3.91l-4.5-4.5a2.55 2.55 0 0 0-2-.89"
//         fill="#fff"
//       />
//       <path
//         d="M1140.17 509.31a2 2 0 0 1 1.9-1.9h9a1.91 1.91 0 0 1 1.9 1.9 2.18 2.18 0 0 1-.5 1.3l-4.5 4.5a2 2 0 0 1-2.6.1l-.1-.1-4.5-4.5a1.56 1.56 0 0 1-.6-1.3"
//         fill="#00aeed"
//       />
//       <path
//         d="M1151.87 509.31a.89.89 0 0 1-.3.6l-4.5 4.5a1.05 1.05 0 0 1-1.3 0l-4.5-4.5a.82.82 0 0 1-.3-.6.9.9 0 0 1 .9-.9h9a.92.92 0 0 1 1 .84.13.13 0 0 0 0 .06m2 0a2.91 2.91 0 0 0-2.89-2.9h-9a2.9 2.9 0 0 0-2.88 2.9 3 3 0 0 0 .8 2l4.5 4.5.11.1.09.1a2.92 2.92 0 0 0 3.91-.2l4.5-4.5a2.54 2.54 0 0 0 .89-2"
//         fill="#fff"
//       />
//       <path fill="#0e76e7" d="M1547.65 1062.81h72.38v67.13h-72.38z" />
//       <path
//         d="M1619.84 1046.51v80.62c0 1.7-.6 3.1-1.2 3.1h-69.54c-.7 0-1.2-1.4-1.2-3.1v-80.62"
//         fill="none"
//         stroke="#2f3e49"
//         strokeMiterlimit={10}
//         strokeWidth={4}
//       />
//       <path
//         d="M615.15 1461.17H772.1a8.49 8.49 0 0 0 8.5-8.5v-106a8.49 8.49 0 0 0-8.5-8.5H496.28a8.49 8.49 0 0 0-8.5 8.5v38.3"
//         fill="none"
//         stroke="#00aeed"
//         strokeMiterlimit={10}
//         strokeWidth={4}
//       />
//       <path
//         d="M827.43 1460.38H789.1a8.49 8.49 0 0 1-8.5-8.5v-57.5"
//         fill="none"
//         stroke="#00aeed"
//         strokeMiterlimit={10}
//         strokeWidth={4}
//       />
//       <path fill="#0e76e7" d="M396.54 1399.53h124.8v97.7h-124.8z" />
//       <path
//         d="M521.1 1383.23v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1v-111.2"
//         fill="none"
//         stroke="#2f3e49"
//         strokeMiterlimit={10}
//         strokeWidth={4}
//       />
//       <path
//         d="M481.25 1388.03a2 2 0 0 1 1.9-1.9h9a1.9 1.9 0 0 1 1.9 1.9 2.11 2.11 0 0 1-.5 1.3l-4.5 4.5a2 2 0 0 1-2.6.1l-.1-.1-4.5-4.5a1.61 1.61 0 0 1-.6-1.3"
//         fill="#00aeed"
//       />
//       <path
//         d="M492.95 1388.03a.86.86 0 0 1-.3.6l-4.5 4.5a1.05 1.05 0 0 1-1.3 0l-4.5-4.5a.86.86 0 0 1-.3-.6.9.9 0 0 1 .9-.9h9a.92.92 0 0 1 1 .9m2 0a2.9 2.9 0 0 0-2.9-2.9h-9a2.9 2.9 0 0 0-2.9 2.9 3 3 0 0 0 .8 2l4.5 4.5.1.1.1.1a2.91 2.91 0 0 0 3.9-.2l4.5-4.5a2.52 2.52 0 0 0 .9-2"
//         fill="#fff"
//       />
//       <text
//         transform="translate(441.82 1527.21)"
//         fontSize={11}
//         fill="#606060"

//         style={{
//           isolation: "isolate",
//         }}
//       >
//         {"TK"}
//         <tspan x={14.06} y={0} letterSpacing="-.05em">
//           {"-CIP"}
//         </tspan>
//         <tspan letterSpacing="-.05em">
//           <tspan x={-23.9} y={13.2}>
//             {"Agua Alimentaci\xF3n"}
//           </tspan>
//         </tspan>
//       </text>
//       <text
//         transform="translate(358.27 1305.37)"
//         fontSize={11}
//         fill="#606060"

//         style={{
//           isolation: "isolate",
//         }}
//       >
//         {"Retorno Rechazo"}
//       </text>
//       <text
//         transform="translate(453.84 1309.05)"
//         fontSize={11}
//         fill="#606060"

//         style={{
//           isolation: "isolate",
//         }}
//       >
//         {"Retorno Permeado"}
//       </text>

//       <path
//         fill="none"
//         stroke="#00aeed"
//         strokeMiterlimit={10}
//         strokeWidth={4}
//         d="M856.55 1459.17h17.57"
//       />
//       <path
//         d="M872.9 1465.2a2 2 0 0 1-1.9-1.9v-9a1.9 1.9 0 0 1 1.9-1.9 2.11 2.11 0 0 1 1.3.5l4.5 4.5a2 2 0 0 1 .1 2.6l-.1.1-4.5 4.5a1.61 1.61 0 0 1-1.3.6"
//         fill="#00aeed"
//       />
//       <path
//         d="M872.9 1453.5a.86.86 0 0 1 .6.3l4.5 4.5a1.05 1.05 0 0 1 0 1.3l-4.5 4.5a.86.86 0 0 1-.6.3.9.9 0 0 1-.9-.9v-9a.92.92 0 0 1 .9-1m0-2a2.9 2.9 0 0 0-2.9 2.9v9a2.9 2.9 0 0 0 2.9 2.9 3 3 0 0 0 2-.8l4.5-4.5.1-.1.1-.1a2.91 2.91 0 0 0-.2-3.9l-4.5-4.5a2.52 2.52 0 0 0-2-.9"
//         fill="#fff"
//       />
//       <path
//         fill="none"
//         stroke="#cbcbcb"
//         strokeMiterlimit={10}
//         strokeWidth={2}
//         d="M415.25 1386.94v-77.89"
//       />
//       <path
//         d="m419.75 1386.54-3.2 3.2a1.67 1.67 0 0 1-2.2-.1l-3.1-3.1a1.61 1.61 0 0 1-.5-1.1 1.58 1.58 0 0 1 1.6-1.6h6.3a1.58 1.58 0 0 1 1.6 1.6 1.61 1.61 0 0 1-.5 1.1"
//         fill="#cbcbcb"
//       />
//       <path
//         d="M411.65 1385.44a.65.65 0 0 1 .6-.6h6.3a.58.58 0 0 1 .6.6.52.52 0 0 1-.2.4l-3.1 3.1a.75.75 0 0 1-.9 0l-3.1-3.1a.52.52 0 0 1-.2-.4m-2 0a2.5 2.5 0 0 0 .8 1.8l3.1 3.1a2.51 2.51 0 0 0 3.5.2l.1-.1.1-.1 3.1-3.1a2.74 2.74 0 0 0 .8-2.3 2.61 2.61 0 0 0-2.7-2.1h-6.1a2.67 2.67 0 0 0-2.7 2.6"
//         fill="#fff"
//       />
//       <path
//         fill="none"
//         stroke="#cbcbcb"
//         strokeMiterlimit={10}
//         strokeWidth={2}
//         d="M469.78 1386.94v-73.09"
//       />
//       <path
//         d="m474.28 1386.54-3.2 3.2a1.67 1.67 0 0 1-2.2-.1l-3.1-3.1a1.61 1.61 0 0 1-.5-1.1 1.58 1.58 0 0 1 1.6-1.6h6.3a1.58 1.58 0 0 1 1.6 1.6 1.61 1.61 0 0 1-.5 1.1"
//         fill="#cbcbcb"
//       />
//       <path
//         d="M466.18 1385.44a.65.65 0 0 1 .6-.6h6.32a.58.58 0 0 1 .6.6.52.52 0 0 1-.2.4l-3.1 3.1a.75.75 0 0 1-.9 0l-3.1-3.1a.52.52 0 0 1-.2-.4m-2 0a2.5 2.5 0 0 0 .8 1.8l3.1 3.1a2.51 2.51 0 0 0 3.5.2l.1-.1.1-.1 3.1-3.1a2.74 2.74 0 0 0 .8-2.3 2.61 2.61 0 0 0-2.7-2.1h-6.1a2.67 2.67 0 0 0-2.7 2.6"
//         fill="#fff"
//       />
//       <path
//         d="M1667.93 1064.55h-17.4a13.17 13.17 0 0 0-3.4-.4 14.6 14.6 0 0 0-14.6 14.5v.1a14.6 14.6 0 0 0 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.67c.6 0 .9-.9.6-1.6l-4.1-9.1a14.52 14.52 0 0 0 4.2-10.3 15.23 15.23 0 0 0-.6-4.2h6.8a2.61 2.61 0 0 0 2.6-2.7v-4.6a2.69 2.69 0 0 0-2.7-2.7"
//         fill="#2f3e49"
//       />
//       <g
//         clipPath="url(#bv)"
//         opacity={0.15}
//         style={{
//           isolation: "isolate",
//         }}
//       >
//         <g clipPath="url(#bw)">
//           <g clipPath="url(#bx)">
//             <use transform="matrix(.73 0 0 .73 1630.23 1061.17)" xlinkHref="#t" />
//           </g>
//         </g>
//       </g>
//       <path
//         d="M1647.1 1068.15a10.9 10.9 0 1 1-10.9 10.9 10.9 10.9 0 0 1 10.9-10.9"
//         fill="#fff"
//       />
//       <g
//         clipPath="url(#by)"
//         opacity={0.15}
//         style={{
//           isolation: "isolate",
//         }}
//       >
//         <path d="M1647.1 1070.85a8 8 0 1 1-8 8 8 8 0 0 1 8-8" fill="#0e76e7" />
//       </g>
//       <text
//         transform="translate(1632.56 1118.79)"
//         fontSize={11}
//         fill="#606060"

//         style={{
//           isolation: "isolate",
//         }}
//       >
//         {"P-008"}
//       </text>
//       <path
//         d="M1686.23 1075.66a2 2 0 0 1-1.9-1.9v-9a1.9 1.9 0 0 1 1.9-1.9 2.17 2.17 0 0 1 1.3.5l4.5 4.5a2 2 0 0 1 .1 2.6l-.1.1-4.5 4.5a1.61 1.61 0 0 1-1.3.6"
//         fill="#00aeed"
//       />
//       <path
//         d="M1686.23 1063.96a.91.91 0 0 1 .6.3l4.5 4.5a1.05 1.05 0 0 1 0 1.3l-4.5 4.5a.83.83 0 0 1-.6.3.9.9 0 0 1-.9-.9v-9a.91.91 0 0 1 .83-1h.07m0-2a2.89 2.89 0 0 0-2.9 2.89v9a2.9 2.9 0 0 0 2.89 2.91 3 3 0 0 0 2-.8l4.5-4.5.1-.11.1-.09a2.94 2.94 0 0 0-.2-3.91l-4.5-4.5a2.57 2.57 0 0 0-2-.89"
//         fill="#fff"
//       />
//     </svg>
//   )
// }
// export default ScadaMineraTeck;

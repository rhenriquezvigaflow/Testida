import React from "react";
const Scada = (props) => {
  const loadgraphs = (id, text) => {
    props.loadgraphs(id, text);
  };

  const notificacion = (id, text) => {
    props.notificacion(id, text);
  };

  return (
    <svg
      id="Capa_1"
      x="0px"
      y="0px"
      viewBox="0 0 1758.7 1783.6"
      xmlSpace="preserve">
      <style>
        {
          ".st0{fill:none;stroke:#666;stroke-width:3;stroke-miterlimit:10}.st1{fill:#f2f2f2}.st2{fill:none;stroke:#35ace8;stroke-width:4;stroke-miterlimit:10}.st3{fill:#35ace8}.st4{fill:gray}.st5{fill:#b8bfd4}.st6{fill:#fff;stroke:#dcdede;stroke-width:.25;stroke-miterlimit:10}.st7{fill:#3574e0}.st8,.st9{stroke-miterlimit:10}.st8{fill:none;stroke:gray;stroke-width:6}.st9{stroke:#ccc}.st10,.st9{fill:none}.st11{fill:#3a4f8f}.st12{font-family:&apos;Montserrat-Bold&apos;}.st13{font-size:13px}.st14{fill:none;stroke:#93a0c2;stroke-width:4;stroke-miterlimit:10}.st15{fill:#93a0c2}.st17{fill:#fbb03b}.st18{fill:#f15a24}.st19{fill:#666}.st20{font-family:&apos;Montserrat-Regular&apos;}.st21{font-size:14px}.st22{font-family:&apos;Montserrat-SemiBold&apos;}.st23{font-size:12px}.st24{fill:#fff}.st25{font-size:13.7412px}.st26,.st27{fill:none;stroke:none;stroke-width:3;stroke-miterlimit:10}.st27{stroke:gray;stroke-width:2}.st30{font-family:&apos;Montserrat-Medium&apos;}.st31{font-size:10px}.st32{fill:#4d4d4d}.st33{fill:#44d11d}.st35{fill:#ff2626}.st36{fill:none;stroke:#383e7a;stroke-width:4;stroke-miterlimit:10}.st37{fill:#a8a8a8}.st38{fill:#f2f2f2;stroke:#f15a24;stroke-width:3;stroke-miterlimit:10}"
        }
      </style>
      <path
        className="st0"
        d="M1592.7 1239.5L1592.7 1280"
      />
      <path
        className="st0"
        d="M1592.7 1447.5L1592.7 1488"
      />
      <path
        className="st0"
        d="M1267.7 485.5L1267.7 534"
      />
      <image
        width={168}
        height={101}
        xlinkHref="data:image/png;base64,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"
        transform="translate(1182 510)"
        overflow="visible"
        opacity={0.4}
      />
      <path
        onClick={() => {
          loadgraphs(3, "Temperatura Entrada Planta");
        }}
        className={
          (props.TT106 <= Number(props.umbrales.ma3) &&
          Number(props.TT106) >= Number(props.umbrales.mi3)
            ? " st1"
            : " st38") + (props.selected === 3 ? " st37" : "")
        }
        d="M1191.4 529.2c0-.8.7-1.5 1.5-1.5h66.3l8.4-8 8.7 8h62.7c.8 0 1.5.7 1.5 1.5v70.7c0 .8-.7 1.5-1.5 1.5h-146.1c-.8 0-1.5-.7-1.5-1.5v-70.7z"
      />
      <path
        className="st2"
        d="M979 750H168.5c-9.7 0-17.5 7.8-17.5 17.5V1235c0 6.6 5.4 12 12 12h917.5c3.6 0 6.5 2.9 6.5 6.5v15.5M501.3 210.2h36.3c4.6 0 8.3 3.6 8.3 8.1V283c0 5-4.1 9-9.3 9h-35.4"
      />
      <path
        className="st2"
        d="M545.9 254.4L593 254.4"
      />
      <path
        className="st2"
        d="M163 277.9L261 277.9"
      />
      <path
        className="st2"
        d="M409 277.9L445 277.9"
      />
      <path
        className="st3"
        d="M594.9 247.6l5.7 5.7c.4.4.4 1.1 0 1.6l-5.7 5.7c-.7.7-1.9.2-1.9-.8v-11.4c0-1 1.2-1.5 1.9-.8z"
      />
      <path
        className="st2"
        d="M503 319.9h-36.3c-4.6 0-8.3-3.7-8.3-8.3v-66.2c0-5.1 4.1-9.3 9.3-9.3H503M711 361.9h-26.3c-4.6 0-8.3-3.7-8.3-8.3v-26.4"
      />
      <path
        className="st4"
        d="M512.1 246.6h-32.7c-.7 0-1.2-1.1-.8-1.9l5.2-11.4c.2-.4.5-.6.8-.6h22.2c.3 0 .6.2.8.6l5.2 11.4c.5.8.1 1.9-.7 1.9zM520.2 216.8h-25.7V205h25.7c1.7 0 3.1 1.4 3.1 3.1v5.5c.1 1.8-1.3 3.2-3.1 3.2z"
      />
      <circle
        className="st5"
        cx={495.7}
        cy={221.8}
        r={17.3}
      />
      <circle
        className="st6"
        cx={495.7}
        cy={221.8}
        r={12.1}
      />
      <path
        className="st4"
        d="M512.1 327.6h-32.7c-.7 0-1.2-1.1-.8-1.9l5.2-11.4c.2-.4.5-.6.8-.6h22.2c.3 0 .6.2.8.6l5.2 11.4c.5.8.1 1.9-.7 1.9zM520.2 297.8h-25.7V286h25.7c1.7 0 3.1 1.4 3.1 3.1v5.5c.1 1.8-1.3 3.2-3.1 3.2z"
      />
      <circle
        className="st5"
        cx={495.7}
        cy={302.8}
        r={17.3}
      />
      <circle
        className="st6"
        cx={495.7}
        cy={302.8}
        r={12.1}
      />
      <path
        className="st7"
        d="M271 222H427V320H271z"
      />
      <path
        className="st8"
        d="M426.6 203v113c0 1.9-1.2 3.5-2.7 3.5H273.8c-1.5 0-2.7-1.6-2.7-3.5V203"
      />
      <path
        className="st9"
        d="M288 237.9L300.9 237.9"
      />
      <path
        className="st9"
        d="M288 247.4L300.9 247.4"
      />
      <path
        className="st9"
        d="M288 236.9L300.9 236.9"
      />
      <path
        className="st9"
        d="M288 246.4L300.9 246.4"
      />
      <path
        className="st9"
        d="M287.9 255.9L300.9 255.9"
      />
      <path
        className="st9"
        d="M287.9 265.4L300.9 265.4"
      />
      <path
        className="st9"
        d="M287.9 274.9L300.9 274.9"
      />
      <path
        className="st9"
        d="M288 284.4L300.9 284.4"
      />
      <path
        className="st9"
        d="M288 295.9L301 295.9"
      />
      <path
        className="st9"
        d="M288 305.4L301 305.4"
      />
      <path
        className="st10"
        d="M267 338H431.6V370H267z"
      />
      <text transform="translate(315.836 347.646)">
        <tspan
          x={0}
          y={0}
          className="st11 st12 st13">
          {"ESTAQUE"}
        </tspan>
        <tspan
          x={-21.8}
          y={15}
          className="st11 st12 st13">
          {"ALIMENTACI\xD3N"}
        </tspan>
      </text>
      <path
        className="st2"
        d="M1203.1 1385.4L1269.1 1385.4"
      />
      <path
        className="st3"
        d="M1270 1378.6l5.7 5.7c.4.4.4 1.1 0 1.6l-5.7 5.7c-.7.7-1.9.2-1.9-.8v-11.4c0-1 1.2-1.5 1.9-.8z"
      />
      <path
        className="st7"
        d="M1054 1295H1210V1393H1054z"
      />
      <path
        className="st8"
        d="M1209.6 1276v113c0 1.9-1.2 3.5-2.7 3.5h-150.1c-1.5 0-2.7-1.6-2.7-3.5v-113"
      />
      <path
        className="st9"
        d="M1071 1310.9L1083.9 1310.9"
      />
      <path
        className="st9"
        d="M1071 1320.4L1083.9 1320.4"
      />
      <path
        className="st9"
        d="M1071 1309.9L1083.9 1309.9"
      />
      <path
        className="st9"
        d="M1071 1319.4L1083.9 1319.4"
      />
      <path
        className="st9"
        d="M1070.9 1328.9L1083.9 1328.9"
      />
      <path
        className="st9"
        d="M1070.9 1338.4L1083.9 1338.4"
      />
      <path
        className="st9"
        d="M1070.9 1347.9L1083.9 1347.9"
      />
      <path
        className="st9"
        d="M1071 1357.4L1083.9 1357.4"
      />
      <path
        className="st9"
        d="M1071 1368.9L1084 1368.9"
      />
      <path
        className="st9"
        d="M1071 1378.4L1084 1378.4"
      />
      <path
        className="st10"
        d="M1088 1410H1175V1442H1088z"
      />
      <text transform="translate(1092.637 1419.646)">
        <tspan
          x={0}
          y={0}
          className="st11 st12 st13">
          {"ESTANQUE "}
        </tspan>
        <tspan
          x={9.5}
          y={15}
          className="st11 st12 st13">
          {"MEZCLA"}
        </tspan>
      </text>
      <path
        className="st3"
        d="M445.9 271.6l5.7 5.7c.4.4.4 1.1 0 1.6l-5.7 5.7c-.7.7-1.9.2-1.9-.8v-11.4c0-1 1.2-1.5 1.9-.8z"
      />
      <path
        className="st2"
        d="M872.3 362.3h14.3c4.6 0 8.3 3.7 8.3 8.3V394M873 361.9h-26.3c-4.6 0-8.3-3.7-8.3-8.3v-26.4M1026.3 362.3h14.3c4.6 0 8.3 3.7 8.3 8.3V394M1027 361.9h-26.3c-4.6 0-8.3-3.7-8.3-8.3v-26.4"
      />
      <path
        className="st14"
        d="M1048 290.9v-47.4c0-4.3-2.8-7.7-6.2-7.7h-30.7"
      />
      <path
        className="st15"
        d="M1054.5 288.9l-5.7 5.7c-.4.4-1.1.4-1.6 0l-5.7-5.7c-.7-.7-.2-1.9.8-1.9h11.4c1 0 1.5 1.2.8 1.9z"
      />
      <path
        className="st14"
        d="M1048 289.9v-17.4c0-4.3-2.8-7.7-6.2-7.7h-30.7"
      />
      <path
        className="st8"
        d="M1048.1 325.2L1048.1 310.1"
      />
      <path
        className="st4"
        d="M1056.4 304c1 1 1 2.6 0 3.6l-6.5 7.3c-1 1-2.6 1-3.6 0l-7.3-7.3c-1-1-1-2.6 0-3.6"
      />
      <path
        className="st14"
        d="M896 290.9v-47.4c0-4.3-2.8-7.7-6.2-7.7h-30.7"
      />
      <path
        className="st15"
        d="M902.5 288.9l-5.7 5.7c-.4.4-1.1.4-1.6 0l-5.7-5.7c-.7-.7-.2-1.9.8-1.9h11.4c1 0 1.5 1.2.8 1.9z"
      />
      <path
        className="st14"
        d="M896 289.9v-17.4c0-4.3-2.8-7.7-6.2-7.7h-30.7"
      />
      <path
        className="st8"
        d="M896.1 325.2L896.1 310.1"
      />
      <path
        className="st4"
        d="M904.4 304c1 1 1 2.6 0 3.6l-6.5 7.3c-1 1-2.6 1-3.6 0l-7.3-7.3c-1-1-1-2.6 0-3.6"
      />
      <path
        className="st14"
        d="M733 290.9v-47.4c0-4.3-2.8-7.7-6.2-7.7h-30.7"
      />
      <path
        className="st15"
        d="M739.5 288.9l-5.7 5.7c-.4.4-1.1.4-1.6 0l-5.7-5.7c-.7-.7-.2-1.9.8-1.9h11.4c1 0 1.5 1.2.8 1.9z"
      />
      <path
        className="st14"
        d="M733 289.9v-17.4c0-4.3-2.8-7.7-6.2-7.7h-30.7"
      />
      <path
        className="st2"
        d="M658 277.9h-40.3c-4.6 0-8.3-3.7-8.3-8.3V242.4c0-5.1 4.1-9.3 9.3-9.3H658M972 277.9h-36.3c-4.6 0-8.3-3.7-8.3-8.3V242.4c0-5.1 4.1-9.3 9.3-9.3H972"
      />
      <path
        className="st2"
        d="M609.3 250.2v-80.8c0-5.1 4.1-9.3 9.3-9.3h301.5c3.8 0 6.9 3.1 6.9 6.9l.2 102.1"
      />
      <path
        className="st2"
        d="M818 277.9h-41.3c-4.6 0-8.3-3.7-8.3-8.3V242.4c0-5.1 4.1-9.3 9.3-9.3H818"
      />
      <path
        className="st2"
        d="M768 160L768.3 267.1"
      />
      <path
        className="st4"
        d="M690.6 327.4h-28.1c-.8 0-1.3-.8-.8-1.4l5.6-8.5c.2-.3.5-.4.8-.4H685c.3 0 .7.2.8.4l5.6 8.5c.5.6 0 1.4-.8 1.4z"
      />
      <path
        className="st5"
        d="M676.4 319.5c-18.8 0-34.2-10.8-34.2-28.4v-69.5c0-17.6 15.4-28.4 34.2-28.4 18.8 0 34.2 10.8 34.2 28.4V291c.1 17.6-15.3 28.5-34.2 28.5z"
      />
      <path
        className="st7"
        d="M642.3 222.1H710.5999999999999V291.6H642.3z"
      />
      <path
        className="st4"
        d="M851.9 327.4h-28.1c-.8 0-1.3-.8-.8-1.4l5.6-8.5c.2-.3.5-.4.8-.4h16.8c.3 0 .7.2.8.4l5.6 8.5c.5.6.1 1.4-.7 1.4z"
      />
      <path
        className="st5"
        d="M837.8 319.5c-18.8 0-34.2-10.8-34.2-28.4v-69.5c0-17.6 15.4-28.4 34.2-28.4 18.8 0 34.2 10.8 34.2 28.4V291c.1 17.6-15.3 28.5-34.2 28.5z"
      />
      <path
        className="st7"
        d="M803.7 222.1H872V291.6H803.7z"
      />
      <path
        className="st4"
        d="M1005.8 327.4h-28.1c-.8 0-1.3-.8-.8-1.4l5.6-8.5c.2-.3.5-.4.8-.4h16.8c.3 0 .7.2.8.4l5.6 8.5c.5.6.1 1.4-.7 1.4z"
      />
      <path
        className="st5"
        d="M991.7 319.5c-18.8 0-34.2-10.8-34.2-28.4v-69.5c0-17.6 15.4-28.4 34.2-28.4 18.8 0 34.2 10.8 34.2 28.4V291c.1 17.6-15.3 28.5-34.2 28.5z"
      />
      <path
        className="st7"
        d="M957.6 222.1H1025.9V291.6H957.6z"
      />
      <path
        className="st8"
        d="M733.1 325.2L733.1 310.1"
      />
      <path
        className="st4"
        d="M741.4 304c1 1 1 2.6 0 3.6l-6.5 7.3c-1 1-2.6 1-3.6 0l-7.3-7.3c-1-1-1-2.6 0-3.6"
      />
      <path
        className="st14"
        d="M1201.2 720.9v-17.4c0-4.3 2.8-7.7 6.2-7.7h10.7c4.5 0 8.1 3.6 8.1 8.1V776"
      />
      <path
        className="st15"
        d="M1194.7 718.9l5.7 5.7c.4.4 1.1.4 1.6 0l5.7-5.7c.7-.7.2-1.9-.8-1.9h-11.4c-1 0-1.5 1.2-.8 1.9z"
      />
      <path
        className="st8"
        d="M1201 754.2L1201 739.1"
      />
      <path
        className="st4"
        d="M1192.7 733c-1 1-1 2.6 0 3.6l6.5 7.3c1 1 2.6 1 3.6 0l7.3-7.3c1-1 1-2.6 0-3.6"
      />
      <path
        className="st2"
        d="M1081 775L1314 775"
      />
      <path
        className="st2"
        d="M1263 854.9h-16.3c-4.6 0-8.3-3.7-8.3-8.3V704.4c0-5.1 4.1-9.3 9.3-9.3h15.4M1289.3 854.9h16.3c4.6 0 8.3-3.7 8.3-8.3V704.4c0-5.1-4.1-9.3-9.3-9.3h-15.4"
      />
      <path
        className="st5"
        d="M1298 666.1c0-8-9.4-14.5-21-14.5s-21 6.5-21 14.5h.2c-.1.4-.2.8-.2 1.3v36.5c0 4.2 4 7.7 9.1 8.1v7.4h6.2V712h10.7v7.4h6.2V712c5.4-.3 9.6-3.8 9.6-8.2v-36.5c0-.4-.1-.9-.2-1.3h.4zM1298 744.4c0-8-9.4-14.5-21-14.5s-21 6.5-21 14.5h.2c-.1.4-.2.8-.2 1.3v36.5c0 4.2 4 7.7 9.1 8.1v7.4h6.2v-7.4h10.7v7.4h6.2v-7.4c5.4-.3 9.6-3.8 9.6-8.2v-36.5c0-.4-.1-.9-.2-1.3h.4zM1298 821.7c0-8-9.4-14.5-21-14.5s-21 6.5-21 14.5h.2c-.1.4-.2.8-.2 1.3v36.5c0 4.2 4 7.7 9.1 8.1v7.4h6.2v-7.4h10.7v7.4h6.2v-7.4c5.4-.3 9.6-3.8 9.6-8.2v-36.5c0-.4-.1-.9-.2-1.3h.4z"
      />
      <linearGradient
        id="SVGID_1_"
        gradientUnits="userSpaceOnUse"
        x1={7283.001}
        y1={17273.1055}
        x2={7283.001}
        y2={17221.1055}
        gradientTransform="matrix(0 -1 -1 0 18524.107 8182.106)">
        <stop
          offset={0}
          stopColor="#fbb03b"
        />
        <stop
          offset={1}
          stopColor="#f15a24"
        />
      </linearGradient>
      <path
        fill="url(#SVGID_1_)"
        d="M1251 895.1H1303V903.1H1251z"
      />
      <path
        className="st17"
        d="M1249.2 892.6l-5.7 5.7c-.4.4-.4 1.1 0 1.6l5.7 5.7c.7.7 1.9.2 1.9-.8v-11.4c0-1-1.2-1.5-1.9-.8z"
      />
      <path
        className="st18"
        d="M1303.8 905.6l5.7-5.7c.4-.4.4-1.1 0-1.6l-5.7-5.7c-.7-.7-1.9-.2-1.9.8v11.4c0 1 1.2 1.5 1.9.8z"
      />
      <image
        width={168}
        height={101}
        xlinkHref="data:image/png;base64,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"
        transform="translate(1193 907)"
        overflow="visible"
        opacity={0.4}
      />
      <path
        className={
          (props.DP1 <= Number(props.umbrales.ma1) &&
          Number(props.DP1) >= Number(props.umbrales.mi1)
            ? " st1"
            : " st38") + (props.selected === 1 ? " st37" : "")
        }
        onClick={() => {
          loadgraphs(1, "Dif. Presión Filtros Cartucho");
        }}
        d="M1202.4 926.2c0-.8.7-1.5 1.5-1.5h66.3l8.4-8 8.7 8h62.7c.8 0 1.5.7 1.5 1.5v70.7c0 .8-.7 1.5-1.5 1.5h-146.1c-.8 0-1.5-.7-1.5-1.5v-70.7z"
      />
      <path
        className="st10"
        d="M1274.6 974H1306V989H1274.6z"
      />
      <text
        transform="translate(1274.633 984.388)"
        className="st19 st20 st21">
        {"Bar"}
      </text>
      <path
        className="st10"
        d="M1215 936H1339V970.4H1215z"
      />
      <text transform="translate(1238.109 944.918)">
        <tspan
          x={0}
          y={0}
          className="st11 st22 st23">
          {"Dif. Presi\xF3n"}
        </tspan>
        <tspan
          x={-12.9}
          y={15}
          className="st11 st22 st23">
          {"Filtros Cartucho"}
        </tspan>
      </text>
      <path
        className="st24"
        d="M1265.3 988h-48.7c-1.5 0-2.7-1.2-2.7-2.7v-11.7c0-1.5 1.2-2.7 2.7-2.7h48.7c1.5 0 2.7 1.2 2.7 2.7v11.7c0 1.5-1.2 2.7-2.7 2.7z"
      />
      <path
        className="st10"
        d="M1218 974H1265V989H1218z"
      />
      <text
        transform="translate(1218 984.388)"
        className="st19 st20 st21">
        {props.DP1}
      </text>
      <g
        onClick={() => {
          notificacion(1, "Dif. Presión Filtros Cartucho");
        }}>
        <path
          className="st11"
          d="M1318 975c-.6 1.1-.8 2.3-.6 3.4 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z"
        />
        <path
          className="st11"
          d="M1316.3 974c-.9 1.5-1.1 3.2-.8 4.8 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-4 .7-1.3 1.8-2.2 3.1-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-3 1.6-3.8 3.1zM1327.8 972.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.4s-1.5-1.7-2.5-2.2z"
        />
        <path
          className="st11"
          d="M1328.4 970.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.4 1.4 3.1 2.6.7 1.3.9 2.7.7 4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.3-.8-4.8-1-1.4-2.3-2.5-3.8-3.1zM1329.3 980.1v-1.5c0-2.5-1.6-4.4-3.9-4.9v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.4.5-3.9 2.4-3.9 4.9v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h9.1c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1324.2 987.7c.9 0 1.7-.8 1.7-1.7h-3.4c.1.9.8 1.7 1.7 1.7z"
        />
      </g>
      <path
        className="st0"
        d="M1105.6 945L1105.6 775"
      />
      <image
        width={168}
        height={102}
        xlinkHref="data:image/png;base64,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 gg=="
        transform="translate(1021 874)"
        overflow="visible"
        opacity={0.4}
      />
      <path
        onClick={() => {
          loadgraphs(4, "Presión Succión Bombas");
        }}
        className={
          (props.PT114 <= Number(props.umbrales.ma4) &&
          Number(props.PT114) >= Number(props.umbrales.mi4)
            ? " st1"
            : " st38") + (props.selected === 4 ? " st37" : "")
        }
        d="M1030.4 894.2c0-.8.7-1.5 1.5-1.5h66.3l8.4-9 8.7 9h62.7c.8 0 1.5.7 1.5 1.5v70.7c0 .8-.7 1.5-1.5 1.5h-146.1c-.8 0-1.5-.7-1.5-1.5v-70.7z"
      />
      <path
        className="st24"
        d="M1093.3 956h-48.7c-1.5 0-2.7-1.2-2.7-2.7v-11.7c0-1.5 1.2-2.7 2.7-2.7h48.7c1.5 0 2.7 1.2 2.7 2.7v11.7c0 1.5-1.2 2.7-2.7 2.7z"
      />
      <path
        className="st10"
        d="M1046 942H1093V957H1046z"
      />
      <text
        transform="translate(1046 952.388)"
        className="st19 st20 st21">
        {props.PT114}
      </text>
      <path
        className="st10"
        d="M1102.6 942H1134V957H1102.6z"
      />
      <text
        transform="translate(1102.633 952.388)"
        className="st19 st20 st21">
        {"Bar"}
      </text>
      <path
        className="st10"
        d="M1043 903H1167V937.4H1043z"
      />
      <text transform="translate(1080.688 911.918)">
        <tspan
          x={0}
          y={0}
          className="st11 st22 st23">
          {"Presi\xF3n"}
        </tspan>
        <tspan
          x={-29.4}
          y={15}
          className="st11 st22 st23">
          {"Succi\xF3n Bombas"}
        </tspan>
      </text>
      <g
        onClick={() => {
          notificacion(4, "Presión Succión Bombas");
        }}>
        <path
          className="st11"
          d="M1146 943c-.6 1.1-.8 2.3-.6 3.4 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z"
        />
        <path
          className="st11"
          d="M1144.3 942c-.9 1.5-1.1 3.2-.8 4.8 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-4 .7-1.3 1.8-2.2 3.1-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-3 1.6-3.8 3.1zM1155.8 940.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.4s-1.5-1.7-2.5-2.2z"
        />
        <path
          className="st11"
          d="M1156.4 938.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.4 1.4 3.1 2.6.7 1.3.9 2.7.7 4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.3-.8-4.8-1-1.4-2.3-2.5-3.8-3.1zM1157.3 948.1v-1.5c0-2.5-1.6-4.4-3.9-4.9v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.4.5-3.9 2.4-3.9 4.9v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h9.1c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1152.2 955.7c.9 0 1.7-.8 1.7-1.7h-3.4c.1.9.8 1.7 1.7 1.7z"
        />
      </g>
      <circle
        className="st19"
        cx={1105}
        cy={775}
        r={4}
      />
      <path
        className="st0"
        d="M952.6 750.1L952.6 683"
      />
      <image
        width={168}
        height={99}
        xlinkHref="data:image/png;base64,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 rkJggg=="
        transform="translate(870 602)"
        overflow="visible"
        opacity={0.4}
      />
      <path
        className={
          (props.PT118 <= Number(props.umbrales.ma5) &&
          Number(props.PT118) >= Number(props.umbrales.mi5)
            ? " st1"
            : " st38") + (props.selected === 5 ? " st37" : "")
        }
        onClick={() => {
          loadgraphs(5, "Presión Entrada Membranas");
        }}
        d="M1028.6 682.5c0 .8-.7 1.5-1.5 1.5h-66.3l-8.4 7.9-8.7-7.9H881c-.8 0-1.5-.7-1.5-1.5v-69.4c0-.8.7-1.5 1.5-1.5h146.1c.8 0 1.5.7 1.5 1.5v69.4z"
      />
      <path
        className="st24"
        d="M942.3 673.8h-48.7c-1.5 0-2.7-1.2-2.7-2.7v-11.4c0-1.5 1.2-2.7 2.7-2.7h48.7c1.5 0 2.7 1.2 2.7 2.7v11.4c0 1.5-1.2 2.7-2.7 2.7z"
      />
      <path
        className="st10"
        d="M895 660.1H942V674.8000000000001H895z"
      />
      <text
        transform="matrix(1.0188 0 0 1 895 670.284)"
        className="st19 st20 st25">
        {props.PT118}
      </text>
      <path
        className="st10"
        d="M951.6 660.1H983V674.8000000000001H951.6z"
      />
      <text
        transform="matrix(1.0188 0 0 1 951.633 670.284)"
        className="st19 st20 st25">
        {"Bar"}
      </text>
      <path
        className="st10"
        d="M887 621.8H1024V655.5H887z"
      />
      <text transform="translate(931.188 630.726)">
        <tspan
          x={0}
          y={0}
          className="st11 st22 st23">
          {"Presi\xF3n"}
        </tspan>
        <tspan
          x={-38}
          y={15}
          className="st11 st22 st23">
          {"Entrada Membrana"}
        </tspan>
      </text>
      <g
        onClick={() => {
          notificacion(5, "Presión Entrada Membrana");
        }}>
        <path
          className="st11"
          d="M995 661.1c-.6 1.1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.7.5-2.5s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z"
        />
        <path
          className="st11"
          d="M993.3 660.1c-.9 1.5-1.1 3.2-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.1 3.1-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-3 1.6-3.8 3.1zM1004.8 658.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z"
        />
        <path
          className="st11"
          d="M1005.4 657c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.4 1.4 3.1 2.6.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.6-3.8-3.1zM1006.3 666.1v-1.5c0-2.5-1.6-4.3-3.9-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.4.5-3.9 2.4-3.9 4.8v1.5c0 .7-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .8.7 1.5 1.6 1.5h9.1c.9 0 1.6-.7 1.6-1.5v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1001.2 673.5c.9 0 1.7-.7 1.7-1.6h-3.4c.1.9.8 1.6 1.7 1.6z"
        />
      </g>
      <ellipse
        className="st19"
        cx={952}
        cy={750.1}
        rx={4}
        ry={3.9}
      />
      <path
        className="st2"
        d="M710.3 362.3h14.3c4.6 0 8.3 3.7 8.3 8.3v19.1c0 3.5 2.8 6.3 6.3 6.3H1488c5 0 9 4 9 9v359.7c0 5.1-4.1 9.3-9.3 9.3h-155.4"
      />
      <path
        className="st3"
        d="M1331.1 780.6l-5.7-5.7c-.4-.4-.4-1.1 0-1.6l5.7-5.7c.7-.7 1.9-.2 1.9.8v11.4c0 1-1.2 1.5-1.9.8z"
      />
      <image
        width={163}
        height={101}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKMAAABlCAYAAAAh3VMpAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABeZJREFUeNrsmotu20YQRZcUJVt+ JHELtP//gUn81JtiyWK2vR3vkgqcGO7qHGBAWbQokDq6s7tUCAAfhOqdXwfnQ/crpKpOeAyQE7E7 VdBqYl/cX7vnEBFOEbITAY/u+Vc0EyLWiaqcnACpVDza42OikilZZUSM4s2sGqmZSEnbhlQrjhK2 fR2kWqujyJpNRk3EYd+8r4XVhW3nIikyQkrGKN2+r11fW9vu7LmDvKYbkzEm4iDdZV/Lvq6slibl 3F5Lu4ZUez6YdIOE675WVnUiPZMy6mRlZik4yHfb1yerW5PyQlp2hZCI6FLxYCIOAj719WiuBGnf sVVX8fU+GWtp0QsTb5Dw975+6+uLCbm0/TNm1+DSrrV2vDYR762TBmnde3tc2zY7m44yXoiMg4h/ mJSDkNcmYyOTGUDG2KIHGV9MxIXtj217Y9v92NKOn7xom/5iIv7Z111fNzaeREZIyTgI92yBFkzO lT3nQyzbpuPOOIGJ6RiFvDMpY6tGRkjJuBYRtybhlUx+k8O7xk0+/BpjFHJprflGJjRL28+MGnQm vZcx4ta8WToRaxdif6djajYdJB0badkLWepZIiNkZGxkjHgp7jSJFZgw1qa1Veuao78LMw//XWtE RIhtOlir9nft/J27amwCk2PsPnWNjODSMefHpCPNCSL6tKwyKQqQc+OkGyP1RBrmDoCAEE5wZyzY TpYR4N1BRkBGAGQEZARARkBGAGQEZARARkBGAGQEZARARkBGAGQEZARARgBkBGQEQEZARgBkBGQE QEZARgBkBGQEQEZARgBkBGQEQEZARgBkBEBGQEYAZARkBEBGQEYAZARkBEBGQEYAZARkBEBGQEYA ZARARkBGAGQEZARARkBGAGSEMmXsrIJsAT5EMnYJQZEUpoLMPz/qTvMDEo7VOVG98YM6Fwm7TIhl aSYEPEq1bhvrrR/Q/13C6gfkK3no433ROim0msyF60S8g9W+r51sG2n11RkIWWWqy5x7N9FdShMx mDN7q4NUKyGWvQaNHKxyidiKhBurdV+rvub2usUZyKji1Ymq3P96CceSoitUxrXVxoJr58TsUiHY ZKK2tYNuRcDnvh5NwGD7BylnhYpYyba285zZNdPtzH0Z/TDn4DqMT4lS2rae7+DMkznzYn9vzZnW fSn/Of8mMVZUGTd2sIe+rkXEwfRl4cno03ButZCai5S16y5RwJ2rvUh5LCghVcaNifi9r3sTc+WE fHXeqQlMPOBWDF86EYc3unTJWKqMMQXnds6Xdj2W9vjCXQcVcSvDm7UkxM61rNJk3FmIDSJ+FSHX cu6vvojNxAFX1ppnIuLwJlf2QTSFJ2Nsz3OT7so6xI3VtUgZr0XnvszPrlRI365LWNpp7dxikA0i fjOPYjoeZCUmO5vWNh1ljAvjrb3Bo30AcydjaUs8UcbGusKlyXfb16e+Ptv2xiRdmLg6iI/j7Hsb 6jzal3mTSIgSJjC+K6xMyEeRUc/7ONamvd2VtO6YirE1+bFSKDQZo4xLk3EQ8M4ubJwxXtt1mblr 9SDJ8N3+fs60q5Jm1IfEBHgl592KiJNt2j/XiulzGSOlljZKbNOajJ9llhgv8q3JGmXcWiI8mIhf MzK2hSWj+hInwTsZluzcjHpyAqMHDDIG2lkKzJyIJctYJcaMKuKL/X1r+6KMcTYZU/GbPdY2vS9o AtONDPemFr9HZewSsRsPmlrsLX2xW1v1ys2MVyKjT8ZnadNxzKhrbofClnZS7Xpq0T+cmozxgJVr 31U4n9t/QVr1NlFxgH4j4+hjYvD+JGnqW1UI5d6r7pxLIfyEX+3kWvG5/ECidu1Ghy0v4d91WD+b Xkltwuu7EKX+iqc74XH22/+W5AhnJKS27IWsLFwk1hl3ImCU0I8TS/9JGUL94pYd23YjKwu6zKVr bXvZtmckIun2zpOa2q0s6KTO//6zdeNuRETGnyqkiukndLq8cc6/ikfGd752lXvsl8aQEBk/xDVE QgAAeAN/CTAAFcqbPXMyejoAAAAASUVORK5CYII="
        transform="translate(248 1132)"
        overflow="visible"
        opacity={0.4}
      />
      <path
        onClick={() => {
          loadgraphs(21, "Recuperación");
        }}
        className={`st1${props.selected === 21 ? " st37" : ""}`}
        d="M399.9 1217.2h-60.6l-7.6 6.8-8.3-6.8h-64.2c-.8 0-1.5-.7-1.5-1.5v-73.1c0-.8.7-1.5 1.5-1.5h140.7c.8 0 1.5.7 1.5 1.5v73.1c0 .8-.7 1.5-1.5 1.5z"
      />
      <path
        className="st26"
        d="M399.9 1217.2h-60.6l-7.6 6.8-8.3-6.8h-64.2c-.8 0-1.5-.7-1.5-1.5v-73.1c0-.8.7-1.5 1.5-1.5h140.7c.8 0 1.5.7 1.5 1.5v73.1c0 .8-.7 1.5-1.5 1.5z"
      />
      <path
        className="st24"
        d="M337.3 1206h-66.7c-1.5 0-2.7-1.2-2.7-2.7v-11.7c0-1.5 1.2-2.7 2.7-2.7h66.7c1.5 0 2.7 1.2 2.7 2.7v11.7c0 1.5-1.2 2.7-2.7 2.7z"
      />
      <path
        className="st10"
        d="M277.6 1192H327V1207H277.6z"
      />
      <text
        transform="translate(277.633 1202.388)"
        className="st19 st20 st21">
        {Number(props.FIT107) === 0
          ? "0"
          : (
              (props.FIT107 * 100) /
              (Number(props.FIT133) + Number(props.FIT107))
            ).toFixed(3)}
      </text>
      <path
        className="st10"
        d="M345 1192H371V1207H345z"
      />
      <text
        transform="translate(345 1202.388)"
        className="st19 st20 st21">
        {"%"}
      </text>
      <path
        className="st10"
        d="M263 1161.4H403V1182H263z"
      />
      <text
        transform="translate(288.45 1170.342)"
        className="st11 st22 st23">
        {"Recuperaci\xF3n"}
      </text>
      <path
        className="st11"
        d="M373 1194c-.6 1.1-.8 2.3-.6 3.4 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z"
      />
      <path
        className="st11"
        d="M371.3 1193c-.9 1.5-1.1 3.2-.8 4.8 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-4 .7-1.3 1.8-2.2 3.1-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-3 1.6-3.8 3.1zM382.8 1191.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.4s-1.5-1.7-2.5-2.2z"
      />
      <path
        className="st11"
        d="M383.4 1189.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.4 1.4 3.1 2.6.7 1.3.9 2.7.7 4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.3-.8-4.8-1-1.4-2.3-2.5-3.8-3.1zM384.3 1199.1v-1.5c0-2.5-1.6-4.4-3.9-4.9v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.4.5-3.9 2.4-3.9 4.9v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h9.1c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM379.2 1206.7c.9 0 1.7-.8 1.7-1.7h-3.4c.1.9.8 1.7 1.7 1.7z"
      />
      <path
        className="st0"
        d="M331.3 1222L331.3 1246"
      />
      <ellipse
        className="st19"
        cx={331}
        cy={1246}
        rx={4}
        ry={4}
      />
      <path
        className="st0"
        d="M579.7 1085.5L579.7 1176"
      />
      <image
        width={182}
        height={101}
        xlinkHref="data:image/png;base64,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 QpBdkLyu5QAAAABJRU5ErkJggg=="
        transform="translate(487 1132)"
        overflow="visible"
        opacity={0.4}
      />
      <path
        className={
          (props.AE129 <= Number(props.umbrales.ma8) &&
          Number(props.AE129) >= Number(props.umbrales.mi8)
            ? " st1"
            : " st38") + (props.selected === 8 ? " st37" : "")
        }
        onClick={() => {
          loadgraphs(8, "Conductividad Producto");
        }}
        d="M658.4 1217.2h-70.6l-7.6 6.8-8.3-6.8h-74.2c-.8 0-1.5-.7-1.5-1.5v-73.1c0-.8.7-1.5 1.5-1.5h160.7c.8 0 1.5.7 1.5 1.5v73.1c0 .8-.7 1.5-1.5 1.5z"
      />
      <path
        className="st24"
        d="M564.3 1206h-55.7c-1.5 0-2.7-1.2-2.7-2.7v-11.7c0-1.5 1.2-2.7 2.7-2.7h55.7c1.5 0 2.7 1.2 2.7 2.7v11.7c0 1.5-1.2 2.7-2.7 2.7z"
      />
      <path
        className="st10"
        d="M515.6 1192H567V1207H515.6z"
      />
      <text
        transform="translate(515.633 1202.388)"
        className="st19 st20 st21">
        {props.AE129}
      </text>
      <path
        className="st10"
        d="M571.6 1192H624V1207H571.6z"
      />
      <text
        transform="translate(571.633 1202.388)"
        className="st19 st20 st21">
        {"µS/cm"}
      </text>
      <path
        className="st10"
        d="M503 1152.4H653V1180.5H503z"
      />
      <text transform="translate(530.798 1161.342)">
        <tspan
          x={0}
          y={0}
          className="st11 st22 st23">
          {"Conductividad "}
        </tspan>
        <tspan
          x={17.3}
          y={15}
          className="st11 st22 st23">
          {"Producto"}
        </tspan>
      </text>
      <g
        onClick={() => {
          notificacion(8, "Conductividad Producto");
        }}>
        <path
          className="st11"
          d="M636 1194c-.6 1.1-.8 2.3-.6 3.4 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z"
        />
        <path
          className="st11"
          d="M634.3 1193c-.9 1.5-1.1 3.2-.8 4.8 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-4 .7-1.3 1.8-2.2 3.1-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-3 1.6-3.8 3.1zM645.8 1191.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.4-.6-1-1.5-1.7-2.5-2.2z"
        />
        <path
          className="st11"
          d="M646.4 1189.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.4 1.4 3.1 2.6.7 1.3.9 2.7.7 4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.3-.8-4.8-1-1.4-2.3-2.5-3.8-3.1zM647.3 1199.1v-1.5c0-2.5-1.6-4.4-3.9-4.9v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.4.5-3.9 2.4-3.9 4.9v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h9.1c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM642.2 1206.7c.9 0 1.7-.8 1.7-1.7h-3.4c.1.9.8 1.7 1.7 1.7z"
        />
      </g>
      <path
        className="st0"
        d="M579.3 1222L579.3 1246"
      />
      <ellipse
        className="st19"
        cx={579}
        cy={1246}
        rx={4}
        ry={4}
      />
      <image
        width={182}
        height={101}
        xlinkHref="data:image/png;base64,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 QpBdkLyu5QAAAABJRU5ErkJggg=="
        transform="translate(487 1032)"
        overflow="visible"
        opacity={0.4}
      />
      <path
        className={
          (props.FIT107 <= Number(props.umbrales.ma9) &&
          Number(props.FIT107) >= Number(props.umbrales.mi9)
            ? " st1"
            : " st38") + (props.selected === 9 ? " st37" : "")
        }
        onClick={() => {
          loadgraphs(9, "Caudal Producto");
        }}
        d="M658.4 1117.2h-70.6l-7.6 6.8-8.3-6.8h-74.2c-.8 0-1.5-.7-1.5-1.5v-73.1c0-.8.7-1.5 1.5-1.5h160.7c.8 0 1.5.7 1.5 1.5v73.1c0 .8-.7 1.5-1.5 1.5z"
      />
      <path
        className="st26"
        d="M658.4 1117.2h-70.6l-7.6 6.8-8.3-6.8h-74.2c-.8 0-1.5-.7-1.5-1.5v-73.1c0-.8.7-1.5 1.5-1.5h160.7c.8 0 1.5.7 1.5 1.5v73.1c0 .8-.7 1.5-1.5 1.5zM658.4 1217.2h-70.6l-7.6 6.8-8.3-6.8h-74.2c-.8 0-1.5-.7-1.5-1.5v-73.1c0-.8.7-1.5 1.5-1.5h160.7c.8 0 1.5.7 1.5 1.5v73.1c0 .8-.7 1.5-1.5 1.5z"
      />
      <path
        className="st24"
        d="M568.3 1106h-55.7c-1.5 0-2.7-1.2-2.7-2.7v-11.7c0-1.5 1.2-2.7 2.7-2.7h55.7c1.5 0 2.7 1.2 2.7 2.7v11.7c0 1.5-1.2 2.7-2.7 2.7z"
      />
      <path
        className="st10"
        d="M519.6 1092H571V1107H519.6z"
      />
      <text
        transform="translate(519.633 1102.388)"
        className="st19 st20 st21">
        {props.FIT107}
      </text>
      <path
        className="st10"
        d="M575.6 1092H628V1107H575.6z"
      />
      <text
        transform="translate(575.633 1102.388)"
        className="st19 st20 st21">
        {"m3/h"}
      </text>
      <path
        className="st10"
        d="M503 1052.4H653V1080.5H503z"
      />
      <text transform="translate(555.662 1061.342)">
        <tspan
          x={0}
          y={0}
          className="st11 st22 st23">
          {"Caudal"}
        </tspan>
        <tspan
          x={-7.6}
          y={15}
          className="st11 st22 st23">
          {"Producto"}
        </tspan>
      </text>
      <g
        onClick={() => {
          notificacion(9, "Caudal Producto");
        }}>
        <path
          className="st11"
          d="M636 1094c-.6 1.1-.8 2.3-.6 3.4 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z"
        />
        <path
          className="st11"
          d="M634.3 1093c-.9 1.5-1.1 3.2-.8 4.8 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-4 .7-1.3 1.8-2.2 3.1-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-3 1.6-3.8 3.1zM645.8 1091.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.4-.6-1-1.5-1.7-2.5-2.2z"
        />
        <path
          className="st11"
          d="M646.4 1089.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.4 1.4 3.1 2.6.7 1.3.9 2.7.7 4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.3-.8-4.8-1-1.4-2.3-2.5-3.8-3.1zM647.3 1099.1v-1.5c0-2.5-1.6-4.4-3.9-4.9v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.4.5-3.9 2.4-3.9 4.9v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h9.1c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM642.2 1106.7c.9 0 1.7-.8 1.7-1.7h-3.4c.1.9.8 1.7 1.7 1.7z"
        />
      </g>
      <image
        width={173}
        height={101}
        xlinkHref="data:image/png;base64,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 gg=="
        transform="translate(458 1359)"
        overflow="visible"
        opacity={0.4}
      />
      <path
        className={
          (props.AE131 <= Number(props.umbrales.ma11) &&
          Number(props.AE131) >= Number(props.umbrales.mi11)
            ? " st1"
            : " st38") + (props.selected === 11 ? " st37" : "")
        }
        onClick={() => {
          loadgraphs(11, "pH Salida Producto");
        }}
        d="M467.4 1378.2c0-.8.7-1.5 1.5-1.5h66.3l8.4-8 8.7 8H620c.8 0 1.5.7 1.5 1.5v70.7c0 .8-.7 1.5-1.5 1.5H468.9c-.8 0-1.5-.7-1.5-1.5v-70.7z"
      />
      <path
        className="st24"
        d="M530.3 1439h-48.7c-1.5 0-2.7-1.2-2.7-2.7v-11.7c0-1.5 1.2-2.7 2.7-2.7h48.7c1.5 0 2.7 1.2 2.7 2.7v11.7c0 1.5-1.2 2.7-2.7 2.7z"
      />
      <path
        className="st10"
        d="M483 1425H530V1440H483z"
      />
      <text
        transform="translate(483 1435.388)"
        className="st19 st20 st21">
        {props.AE131}
      </text>
      <path
        className="st10"
        d="M539.6 1425H571V1440H539.6z"
      />
      <text
        transform="translate(539.633 1435.388)"
        className="st19 st20 st21">
        {"pH"}
      </text>
      <path
        className="st10"
        d="M475 1386H612V1420.4H475z"
      />
      <text transform="translate(513.02 1394.918)">
        <tspan
          x={0}
          y={0}
          className="st11 st22 st23">
          {"pH Salida"}
        </tspan>
        <tspan
          x={0.6}
          y={15}
          className="st11 st22 st23">
          {"Producto"}
        </tspan>
      </text>
      <g
        onClick={() => {
          notificacion(11, "pH Salida Producto");
        }}>
        <path
          className="st11"
          d="M583 1426c-.6 1.1-.8 2.3-.6 3.4 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z"
        />
        <path
          className="st11"
          d="M581.3 1425c-.9 1.5-1.1 3.2-.8 4.8 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-4 .7-1.3 1.8-2.2 3.1-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-3 1.6-3.8 3.1zM592.8 1423.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.4-.6-1-1.5-1.7-2.5-2.2z"
        />
        <path
          className="st11"
          d="M593.4 1421.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.4 1.4 3.1 2.6.7 1.3.9 2.7.7 4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.3-.8-4.8-1-1.4-2.3-2.5-3.8-3.1zM594.3 1431.1v-1.5c0-2.5-1.6-4.4-3.9-4.9v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.4.5-3.9 2.4-3.9 4.9v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h9.1c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM589.2 1438.7c.9 0 1.7-.8 1.7-1.7h-3.4c.1.9.8 1.7 1.7 1.7z"
        />
      </g>
      <path
        className="st0"
        d="M543.7 1311L543.7 1371"
      />
      <path
        className="st0"
        d="M543.7 1247L543.7 1284"
      />
      <circle
        className="st19"
        cx={543.7}
        cy={1247.5}
        r={4}
      />
      <image
        width={172}
        height={101}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKwAAABlCAYAAADQ1gikAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABfFJREFUeNrsmg1v4kYURW3jACFk k22q9v//wFa7myzh067d3lFvJmNjSKKs8DnSEwQMEcPx850ZsgwAAD6GnCH48DGsGSKE/VXGLrcx zDtEra0AYT9tzArdL+x+HklaqcJ9Ou4bKRmCs7vqJFEu7CGqHGkR9jNkLSTnldVUY1no2FbMfVPb pnZWGdJ+jrD5yGWdquZNXet2qucyddRW1nVTz7otJO3eYsLYpa0/Qth8wP0xCFtovK4k6KKpm6aW up3ruUxStqL+VD1F4iLtf587T4hbnytsHk0wUjPjMU2wJpGst03dqb7osamO30nUx6a+W3SYSNqd unAVrSaMUVo/aSuNeeeJXA64BMaVRwKPIQpMNFYzRYBW1vumfmvqq+4vTdituup3HT/Tc620q6Y2 6rKHkWZaF9RXU7ySY1L2XP4Km/2WVpPEMs6lyhs+o0eBpTpqK+vvJu1SYrqwtybsTK9/UpfdmrDV yPKqL/sddPLu7ST2can7hM0TeS1MMLxLxMs4lyxsGIup5Fuqoz5Y3XcIe2MTs5B5H9Vlt/YFjSHL xsIGMXcai41utzY5fRWXyo4vyPNaGOyFdYuraBnnUqOBC+tx4E6dNXTXO8l4pdds9fd1NIa3JuzG suxYJl8eBfb6/BtNSFeqItGFk8LGE4ypfUFfVLca+JnFg3xkHfZGY3GvCuMSrxJcWwwIr7tT541z 7Jg6bG0xYKOxaE/iH9n/y4JVFAvCROxVhy2iL2ihL+RB3eTectnUhL30DjuxWLTQ5X+psbixFYIw ngeLT0HaG5N1PcJI4F0zrFM/S9ZvdrKHmBCuPoVuOyddfglc2ATjD8trN9nL3Z1LFtZXCcJmwdwi 0tzk9J2uic0DZhYJ1pbTfGlrLML6LuBPyerLgRuNUYhMnasEeccl8NYmGX/ajHg+ImGLSMBpVHE8 qrOXvzGYWpfdZS93vMa0rOXCrnXF8YnqSo/FzbAzEnhHiTvDvWR9sFgwBmHjaDCJlvjKnmW+uDv3 LduMTdhnk3UjURc2qU/GzbLjiykiacOkYWmTsOvoMnjJmwh5dnwzJU9EKz++krRVFAPGsmHgKwQ7 y6wbW1FxWYuoGf7bZVOrBFnUGcrs9Y89rkcmbErcYz/gzuxSVkSCjvE3BC5saZl1HkWrOF5lfZEg 1U1Su11hb/zSI0FfRMg6TvbsyDFj/+1AZUt/8Q5qvIua9026hkw8ip5L4pjI3+HYfKTCZifEquxU YfOOS2GqG8P7y37pn39otHoxMejrqn2XOySFt84FjjXIwcIC/JIgLCAsAMICICwgLADCAiAsICwA wgIgLCAsAMICICwgLADCAiAsICwAwgIgLCAsAMICICwgLADCAiAsICwAwgIgLCAsAMICICwgLADC AiAsICwAwgIgLCAsAMICICwgLADCAiAsICwAwgIgLCAsAMICICwgLADCAiAsICwAwgIgLCAsAMIC vLuwtaqPmuGDMxniVvKY8oQ3r6MaKjZASsQun3opB/6DKnrzyqol57uAgcK6O3WHY2cJG8t5aGpv tYtiBdLCkCt1JXfcpUNC4qPC1glRD6r2H2xU66audOxewiIrnNJhW2+e5VLwame+VV1Roezpqi5q +8arpp6amunYnV6fIyycmGH3cupRTq1M3l2HtC+ErU262i7/W50J7Zv+aGquYzYSF2HhXGE38uqb 3HqSa1uLCXWcAMqOlh2667O96VTHtGfCQsJOEBbOEPYgYVeS9S85FqSNu2xnhvWM4W8YMutWbXyu x4qMzQc4jcomXmtriH/LtZXc26diQdkTioOwpWXWn01dW3ct6LBwRoetrMt65OwSNhsi7FYvzqKQ PFV3JQ7AW2PBzuZJK6vtEGF9neygF2VR+77Sa7y7BhAXjomamiuFNf2wvLVVHYZEAl8lyKIzYS1R U7IiLJwibCxtvCl1SKwSdEqWWxWJyokC8I7RIN6uTW3bHu2KeULePHoc4L26bp0N/DHMMfH6MirS wntHhK7n3iQdosJHigtwOfwjwAD6LiQZq9HuSAAAAABJRU5ErkJggg=="
        transform="translate(458 1261)"
        overflow="visible"
        opacity={0.4}
      />
      <path
        onClick={() => {
          loadgraphs(10, "Cloro Libre Producto");
        }}
        className={
          (props.AE130 <= Number(props.umbrales.ma10) &&
          Number(props.AE130) >= Number(props.umbrales.mi10)
            ? " st1"
            : " st38") + (props.selected === 10 ? " st37" : "")
        }
        d="M468.7 1276.8h65.6l7.6-6.8 8.3 6.8h69.2c.8 0 1.5.7 1.5 1.5v73.1c0 .8-.7 1.5-1.5 1.5H468.7c-.8 0-1.5-.7-1.5-1.5v-73.1c0-.8.7-1.5 1.5-1.5z"
      />
      <path
        className="st26"
        d="M469.7 1276.8h65.6l7.6-6.8 8.3 6.8h69.2c.8 0 1.5.7 1.5 1.5v73.1c0 .8-.7 1.5-1.5 1.5H469.7c-.8 0-1.5-.7-1.5-1.5v-73.1c0-.8.7-1.5 1.5-1.5zM469.7 1375.8h65.6l7.6-6.8 8.3 6.8h69.2c.8 0 1.5.7 1.5 1.5v73.1c0 .8-.7 1.5-1.5 1.5H469.7c-.8 0-1.5-.7-1.5-1.5v-73.1c0-.8.7-1.5 1.5-1.5z"
      />
      <path
        className="st24"
        d="M534.3 1343h-55.7c-1.5 0-2.7-1.2-2.7-2.7v-11.7c0-1.5 1.2-2.7 2.7-2.7h55.7c1.5 0 2.7 1.2 2.7 2.7v11.7c0 1.5-1.2 2.7-2.7 2.7z"
      />
      <path
        className="st10"
        d="M485.6 1329H537V1344H485.6z"
      />
      <text
        transform="translate(485.633 1339.388)"
        className="st19 st20 st21">
        {props.AE130}
      </text>
      <path
        className="st10"
        d="M541.6 1329H585V1344H541.6z"
      />
      <text
        transform="translate(541.633 1339.388)"
        className="st19 st20 st21">
        {"ppm"}
      </text>
      <path
        className="st10"
        d="M469 1289.4H619V1317.5H469z"
      />
      <text transform="translate(508.793 1298.342)">
        <tspan
          x={0}
          y={0}
          className="st11 st22 st23">
          {"Cloro Libre"}
        </tspan>
        <tspan
          x={5.3}
          y={15}
          className="st11 st22 st23">
          {"Producto"}
        </tspan>
      </text>
      <g
        onClick={() => {
          notificacion(10, "Cloro Libre Producto");
        }}>
        <path
          className="st11"
          d="M596 1331c-.6 1.1-.8 2.3-.6 3.4 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z"
        />
        <path
          className="st11"
          d="M594.3 1330c-.9 1.5-1.1 3.2-.8 4.8 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-4 .7-1.3 1.8-2.2 3.1-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-3 1.6-3.8 3.1zM605.8 1328.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.4-.6-1-1.5-1.7-2.5-2.2z"
        />
        <path
          className="st11"
          d="M606.4 1326.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.4 1.4 3.1 2.6.7 1.3.9 2.7.7 4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.3-.8-4.8-1-1.4-2.3-2.5-3.8-3.1zM607.3 1336.1v-1.5c0-2.5-1.6-4.4-3.9-4.9v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.4.5-3.9 2.4-3.9 4.9v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h9.1c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM602.2 1343.7c.9 0 1.7-.8 1.7-1.7h-3.4c.1.9.8 1.7 1.7 1.7z"
        />
      </g>
      <path
        className="st3"
        d="M1093.6 1270.9l-5.7 5.7c-.4.4-1.1.4-1.6 0l-5.7-5.7c-.7-.7-.2-1.9.8-1.9h11.4c1 0 1.5 1.2.8 1.9z"
      />
      <path
        className="st15"
        d="M224.5 915.9l-5.7 5.7c-.4.4-1.1.4-1.6 0l-5.7-5.7c-.7-.7-.2-1.9.8-1.9h11.4c1 0 1.5 1.2.8 1.9z"
      />
      <image
        width={180}
        height={96}
        xlinkHref="data:image/png;base64,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"
        transform="translate(1114 177)"
        overflow="visible"
        opacity={0.4}
      />
      <path
        onClick={() => {
          loadgraphs(0, "Dif. Presión Filtros AG Plus");
        }}
        className={
          (props.DP0 <= Number(props.umbrales.ma0) &&
          Number(props.DP0) >= Number(props.umbrales.mi0)
            ? " st1"
            : " st38") + (props.selected === 0 ? " st37" : "")
        }
        d="M1132.6 263.1c-.8 0-1.5-.7-1.5-1.5v-28.3l-8-8.4 8-8.7v-27.7c0-.8.7-1.5 1.5-1.5h150.7c.8 0 1.5.7 1.5 1.5v73.1c0 .8-.7 1.5-1.5 1.5h-150.7z"
      />
      <path
        className="st26"
        d="M1132.6 263.1c-.8 0-1.5-.7-1.5-1.5v-28.3l-8-8.4 8-8.7v-27.7c0-.8.7-1.5 1.5-1.5h150.7c.8 0 1.5.7 1.5 1.5v73.1c0 .8-.7 1.5-1.5 1.5h-150.7z"
      />
      <path
        className="st27"
        d="M931 161L932 161"
      />
      <path
        fill="none"
        stroke="gray"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeDasharray="1.9769,2.9653"
        d="M935 161L1101.5 161"
      />
      <path
        className="st27"
        d="M1103 161L1104 161"
      />
      <linearGradient
        id="SVGID_2_"
        gradientUnits="userSpaceOnUse"
        x1={1102}
        y1={382}
        x2={1102}
        y2={172}>
        <stop
          offset={0}
          stopColor="#fbb03b"
        />
        <stop
          offset={1}
          stopColor="#f15a24"
        />
      </linearGradient>
      <path
        fill="url(#SVGID_2_)"
        d="M1098 172H1106V382H1098z"
      />
      <path
        className="st17"
        d="M1108.5 383.9l-5.7 5.7c-.4.4-1.1.4-1.6 0l-5.7-5.7c-.7-.7-.2-1.9.8-1.9h11.4c1 0 1.5 1.2.8 1.9z"
      />
      <path
        className="st18"
        d="M1095.5 170.3l5.7-5.7c.4-.4 1.1-.4 1.6 0l5.7 5.7c.7.7.2 1.9-.8 1.9h-11.4c-1 0-1.5-1.2-.8-1.9z"
      />
      <path
        className="st24"
        d="M1196.3 252h-48.7c-1.5 0-2.7-1.2-2.7-2.7v-11.7c0-1.5 1.2-2.7 2.7-2.7h48.7c1.5 0 2.7 1.2 2.7 2.7v11.7c0 1.5-1.2 2.7-2.7 2.7z"
      />
      <path
        className="st10"
        d="M1149 238H1196V253H1149z"
      />
      <text
        transform="translate(1149 248.388)"
        className="st19 st20 st21">
        {props.DP0}
      </text>
      <path
        className="st10"
        d="M1205.6 238H1237V253H1205.6z"
      />
      <text
        transform="translate(1205.633 248.388)"
        className="st19 st20 st21">
        {"Bar"}
      </text>
      <path
        className="st10"
        d="M1146 198H1270V232.4H1146z"
      />
      <text transform="translate(1170.915 206.918)">
        <tspan
          x={0}
          y={0}
          className="st11 st22 st23">
          {"Dif. Presi\xF3n"}
        </tspan>
        <tspan
          x={-10}
          y={15}
          className="st11 st22 st23">
          {"Filtros AG Plus"}
        </tspan>
      </text>
      <path
        className="st10"
        d="M618 172H742V189H618z"
      />
      <text
        transform="translate(631.88 180.918)"
        className="st11 st22 st23">
        {"Filtro AG Plus 1"}
      </text>
      <path
        className="st10"
        d="M776 172H900V189H776z"
      />
      <text
        transform="translate(788.675 180.918)"
        className="st11 st22 st23">
        {"Filtro AG Plus 2"}
      </text>
      <path
        className="st10"
        d="M931 172H1055V189H931z"
      />
      <text
        transform="translate(943.675 180.918)"
        className="st11 st22 st23">
        {"Filtro AG Plus 3"}
      </text>
      <g
        onClick={() => {
          notificacion(0, "Dif. Presión AG Plus");
        }}>
        <path
          className="st11"
          d="M1250.3 241c-.6 1.1-.8 2.3-.6 3.4 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z"
        />
        <path
          className="st11"
          d="M1248.6 240c-.9 1.5-1.1 3.2-.8 4.8 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-4s1.8-2.2 3.1-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-3 1.6-3.8 3.1zM1260.1 238.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.4-.5-1-1.4-1.7-2.5-2.2z"
        />
        <path
          className="st11"
          d="M1260.7 236.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.4 1.4 3.1 2.6s.9 2.7.7 4c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.3-.8-4.8s-2.3-2.6-3.8-3.1zM1261.7 246.1v-1.5c0-2.5-1.6-4.4-3.9-4.9v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.4.5-3.9 2.4-3.9 4.9v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h9.1c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.7-.5-.9-1.3-.9-2.1zM1256.6 253.7c.9 0 1.7-.8 1.7-1.7h-3.4c0 .9.7 1.7 1.7 1.7z"
        />
      </g>
      <path
        className="st0"
        d="M208.3 280L208.3 140"
      />
      <circle
        className="st19"
        cx={208}
        cy={278}
        r={4}
      />
      <path
        className="st2"
        d="M1018.3 817.9h36.3c4.6 0 8.3-3.7 8.3-8.3v-66.2c0-5.1-4.1-9.3-9.3-9.3h-35.4"
      />
      <path
        className="st2"
        d="M1026 707.2h-36.3c-4.6 0-8.3 3.7-8.3 8.3v66.2c0 5.1 4.1 9.3 9.3 9.3h35.4"
      />
      <path
        className="st4"
        d="M1010.2 744.6h32.7c.7 0 1.2-1.1.8-1.9l-5.2-11.4c-.2-.4-.5-.6-.8-.6h-22.2c-.3 0-.6.2-.8.6l-5.2 11.4c-.5.8-.1 1.9.7 1.9zM1002.1 714.8h25.7V703h-25.7c-1.7 0-3.1 1.4-3.1 3.1v5.5c-.1 1.8 1.3 3.2 3.1 3.2z"
      />
      <circle
        className="st5"
        cx={1026.6}
        cy={719.8}
        r={17.3}
      />
      <circle
        className="st6"
        cx={1026.6}
        cy={719.8}
        r={12.1}
      />
      <path
        className="st4"
        d="M1010.2 825.6h32.7c.7 0 1.2-1.1.8-1.9l-5.2-11.4c-.2-.4-.5-.6-.8-.6h-22.2c-.3 0-.6.2-.8.6l-5.2 11.4c-.5.8-.1 1.9.7 1.9zM1002.1 795.8h25.7V784h-25.7c-1.7 0-3.1 1.4-3.1 3.1v5.5c-.1 1.8 1.3 3.2 3.1 3.2z"
      />
      <circle
        className="st5"
        cx={1026.6}
        cy={800.8}
        r={17.3}
      />
      <circle
        className="st6"
        cx={1026.6}
        cy={800.8}
        r={12.1}
      />
      <path
        className="st10"
        d="M965 836H1089V870.4H965z"
      />
      <text transform="translate(981.767 845.659)">
        <tspan
          x={0}
          y={0}
          className="st11 st12 st13">
          {"Bombas Alta "}
        </tspan>
        <tspan
          x={18.4}
          y={15}
          className="st11 st12 st13">
          {"Presi\xF3n"}
        </tspan>
      </text>
      <path
        className="st0"
        d="M332.7 975L332.7 1025"
      />
      <image
        width={168}
        height={101}
        xlinkHref="data:image/png;base64,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"
        transform="translate(247 1001)"
        overflow="visible"
        opacity={0.4}
      />
      <path
        className={
          (props.FIT133 <= Number(props.umbrales.ma7) &&
          Number(props.FIT133) >= Number(props.umbrales.mi7)
            ? " st1"
            : " st38") + (props.selected === 7 ? " st37" : "")
        }
        onClick={() => {
          loadgraphs(7, "Caudal de Rechazo");
        }}
        d="M256.4 1020.2c0-.8.7-1.5 1.5-1.5h66.3l8.4-8 8.7 8H404c.8 0 1.5.7 1.5 1.5v70.7c0 .8-.7 1.5-1.5 1.5H257.9c-.8 0-1.5-.7-1.5-1.5v-70.7z"
      />
      <path
        className="st24"
        d="M319.3 1081h-48.7c-1.5 0-2.7-1.2-2.7-2.7v-11.7c0-1.5 1.2-2.7 2.7-2.7h48.7c1.5 0 2.7 1.2 2.7 2.7v11.7c0 1.5-1.2 2.7-2.7 2.7z"
      />
      <path
        className="st10"
        d="M272 1067H319V1082H272z"
      />
      <text
        transform="translate(272 1077.388)"
        className="st19 st20 st21">
        {props.FIT133}
      </text>
      <path
        className="st10"
        d="M328.6 1067H374V1082H328.6z"
      />
      <text
        transform="translate(328.633 1077.388)"
        className="st19 st20 st21">
        {"m3/h"}
      </text>
      <path
        className="st10"
        d="M264 1028H401V1062.4H264z"
      />
      <text transform="translate(310.162 1036.918)">
        <tspan
          x={0}
          y={0}
          className="st11 st22 st23">
          {"Caudal "}
        </tspan>
        <tspan
          x={-14.9}
          y={15}
          className="st11 st22 st23">
          {"de Rechazo"}
        </tspan>
      </text>
      <g
        onClick={() => {
          notificacion(7, "Caudal de Rechazo");
        }}>
        <path
          className="st11"
          d="M377 1068c-.6 1.1-.8 2.3-.6 3.4 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z"
        />
        <path
          className="st11"
          d="M375.3 1067c-.9 1.5-1.1 3.2-.8 4.8 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-4 .7-1.3 1.8-2.2 3.1-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-3 1.6-3.8 3.1zM386.8 1065.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.4s-1.5-1.7-2.5-2.2z"
        />
        <path
          className="st11"
          d="M387.4 1063.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.4 1.4 3.1 2.6.7 1.3.9 2.7.7 4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.3-.8-4.8-1-1.4-2.3-2.5-3.8-3.1zM388.3 1073.1v-1.5c0-2.5-1.6-4.4-3.9-4.9v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.4.5-3.9 2.4-3.9 4.9v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h9.1c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM383.2 1080.7c.9 0 1.7-.8 1.7-1.7h-3.4c.1.9.8 1.7 1.7 1.7z"
        />
      </g>
      <path
        className="st2"
        d="M622.9 822.9h132.4c4.3 0 7.7-2.8 7.7-6.2v-46.9M251 764.3v22.4c0 4.3 2.8 7.7 6.2 7.7h46.9"
      />
      <path
        className="st14"
        d="M218 918v-23.5c0-3.1 2.5-5.5 5.5-5.5h122.8c4.3 0 7.7-2.8 7.7-6.2v-72.9"
      />
      <path
        className="st4"
        d="M594.6 830.6h32.7c.7 0 1.2-1.1.8-1.9l-5.2-11.4c-.2-.4-.5-.6-.8-.6h-22.2c-.3 0-.6.2-.8.6l-5.2 11.4c-.5.8-.1 1.9.7 1.9zM586.5 800.8h25.7V789h-25.7c-1.7 0-3.1 1.4-3.1 3.1v5.5c-.1 1.8 1.3 3.2 3.1 3.2z"
      />
      <circle
        className="st5"
        cx={611}
        cy={805.8}
        r={17.3}
      />
      <circle
        className="st6"
        cx={611}
        cy={805.8}
        r={12.1}
      />
      <path
        className="st24"
        d="M684.7 732h155.1c4 0 7.3 3.1 7.3 7v24.3c0 3.8-3.3 7-7.3 7l-155.2-36.9c-.9-.3-.7-1.4.1-1.4z"
      />
      <path
        className="st5"
        d="M841.3 770h-155c-4 0-7.3-3.1-7.3-7v-24.3c0-3.8 3.3-7 7.3-7l155.2 36.9c.8.3.6 1.4-.2 1.4z"
      />
      <path
        className="st27"
        d="M839.8 770H686c-3.8 0-7-3.1-7-7v-24.3c0-3.8 3.1-7 7-7h153.8c3.8 0 7 3.1 7 7V763c0 3.9-3.2 7-7 7z"
      />
      <path
        className="st27"
        d="M685 732L843 769"
      />
      <path
        className="st24"
        d="M275.7 775h155.1c4 0 7.3 3.1 7.3 7v24.3c0 3.8-3.3 7-7.3 7l-155.2-36.9c-.9-.3-.7-1.4.1-1.4z"
      />
      <path
        className="st5"
        d="M432.3 813h-155c-4 0-7.3-3.1-7.3-7v-24.3c0-3.8 3.3-7 7.3-7l155.2 36.9c.8.3.6 1.4-.2 1.4z"
      />
      <path
        className="st27"
        d="M430.8 813H277c-3.8 0-7-3.1-7-7v-24.3c0-3.8 3.1-7 7-7h153.8c3.8 0 7 3.1 7 7V806c0 3.9-3.2 7-7 7z"
      />
      <path
        className="st27"
        d="M276 775L434 812"
      />

      <path
        className="st2"
        d="M454 794.4L584 794.4"
      />
      <path
        className="st3"
        d="M452.1 800.6l-5.7-5.7c-.4-.4-.4-1.1 0-1.6l5.7-5.7c.7-.7 1.9-.2 1.9.8v11.4c0 1-1.2 1.5-1.9.8z"
      />
      <path
        className="st8"
        d="M218.1 949.2L218.1 934.1"
      />
      <path
        className="st4"
        d="M226.4 928c1 1 1 2.6 0 3.6l-6.5 7.3c-1 1-2.6 1-3.6 0l-7.3-7.3c-1-1-1-2.6 0-3.6"
      />
      <path
        className="st3"
        d="M244.4 764.1l5.7-5.7c.4-.4 1.1-.4 1.6 0l5.7 5.7c.7.7.2 1.9-.8 1.9h-11.4c-1 0-1.5-1.2-.8-1.9z"
      />
      <path
        className="st0"
        d="M332.7 887L332.7 937"
      />
      <circle
        className="st19"
        cx={333}
        cy={889}
        r={4}
      />
      <path
        className="st10"
        d="M687 711H840V745.4H687z"
      />
      <text
        transform="translate(689.94 720.659)"
        className="st11 st12 st13">
        {"Etapa 1 OR"}
      </text>
      <path
        className="st10"
        d="M278 728H431V762.4H278z"
      />
      <text
        transform="translate(279.653 737.659)"
        className="st11 st12 st13">
        {"Etapa 2 OR"}
      </text>
      <path
        className="st10"
        d="M537 840H684V869.4H537z"
      />
      <text
        transform="translate(555.985 849.645)"
        className="st11 st12 st13">
        {"Bomba booster"}
      </text>
      <image
        width={168}
        height={101}
        xlinkHref="data:image/png;base64,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"
        transform="translate(247 904)"
        overflow="visible"
        opacity={0.4}
      />
      <path
        onClick={() => {
          loadgraphs(6, "Presión Rechazo");
        }}
        className={
          (props.PTxxx <= Number(props.umbrales.ma6) &&
          Number(props.PTxxx) >= Number(props.umbrales.mi6)
            ? " st1"
            : " st38") + (props.selected === 6 ? " st37" : "")
        }
        d="M256.4 923.2c0-.8.7-1.5 1.5-1.5h66.3l8.4-8 8.7 8H404c.8 0 1.5.7 1.5 1.5v70.7c0 .8-.7 1.5-1.5 1.5H257.9c-.8 0-1.5-.7-1.5-1.5v-70.7z"
      />
      <path
        className="st24"
        d="M319.3 984h-48.7c-1.5 0-2.7-1.2-2.7-2.7v-11.7c0-1.5 1.2-2.7 2.7-2.7h48.7c1.5 0 2.7 1.2 2.7 2.7v11.7c0 1.5-1.2 2.7-2.7 2.7z"
      />
      <path
        className="st10"
        d="M272 970H319V985H272z"
      />
      <text
        transform="translate(272 980.388)"
        className="st19 st20 st21">
        {props.PTxxx}
      </text>
      <path
        className="st10"
        d="M328.6 970H360V985H328.6z"
      />
      <text
        transform="translate(328.633 980.388)"
        className="st19 st20 st21">
        {"Bar"}
      </text>
      <path
        className="st10"
        d="M264 931H401V965.4H264z"
      />
      <text transform="translate(308.188 939.918)">
        <tspan
          x={0}
          y={0}
          className="st11 st22 st23">
          {"Presi\xF3n"}
        </tspan>
        <tspan
          x={-3}
          y={15}
          className="st11 st22 st23">
          {"Rechazo"}
        </tspan>
      </text>
      <g
        onClick={() => {
          notificacion(6, "Presión Rechazo");
        }}>
        <path
          className="st11"
          d="M372 971c-.6 1.1-.8 2.3-.6 3.4 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z"
        />
        <path
          className="st11"
          d="M370.3 970c-.9 1.5-1.1 3.2-.8 4.8 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-4 .7-1.3 1.8-2.2 3.1-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-3 1.6-3.8 3.1zM381.8 968.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.4s-1.5-1.7-2.5-2.2z"
        />
        <path
          className="st11"
          d="M382.4 966.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.4 1.4 3.1 2.6.7 1.3.9 2.7.7 4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.3-.8-4.8-1-1.4-2.3-2.5-3.8-3.1zM383.3 976.1v-1.5c0-2.5-1.6-4.4-3.9-4.9v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.4.5-3.9 2.4-3.9 4.9v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h9.1c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM378.2 983.7c.9 0 1.7-.8 1.7-1.7h-3.4c.1.9.8 1.7 1.7 1.7z"
        />
      </g>
      <path
        className="st0"
        d="M964.7 1158.5L964.7 1249"
      />
      <image
        width={182}
        height={101}
        xlinkHref="data:image/png;base64,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 QpBdkLyu5QAAAABJRU5ErkJggg=="
        transform="translate(872 1076)"
        overflow="visible"
        opacity={0.4}
      />
      <path
        className={
          (props.AE307 <= Number(props.umbrales.ma14) &&
          Number(props.AE307) >= Number(props.umbrales.mi14)
            ? " st1"
            : " st38") + (props.selected === 14 ? " st37" : "")
        }
        onClick={() => {
          loadgraphs(14, "Conductividad Mezcla");
        }}
        d="M1043.4 1161.2h-70.6l-7.6 6.8-8.3-6.8h-74.2c-.8 0-1.5-.7-1.5-1.5v-73.1c0-.8.7-1.5 1.5-1.5h160.7c.8 0 1.5.7 1.5 1.5v73.1c0 .8-.7 1.5-1.5 1.5z"
      />
      <path
        className="st26"
        d="M1043.4 1161.2h-70.6l-7.6 6.8-8.3-6.8h-74.2c-.8 0-1.5-.7-1.5-1.5v-73.1c0-.8.7-1.5 1.5-1.5h160.7c.8 0 1.5.7 1.5 1.5v73.1c0 .8-.7 1.5-1.5 1.5z"
      />
      <path
        className="st24"
        d="M949.3 1150h-55.7c-1.5 0-2.7-1.2-2.7-2.7v-11.7c0-1.5 1.2-2.7 2.7-2.7h55.7c1.5 0 2.7 1.2 2.7 2.7v11.7c0 1.5-1.2 2.7-2.7 2.7z"
      />
      <path
        className="st10"
        d="M900.6 1136H952V1151H900.6z"
      />
      <text
        transform="translate(900.633 1146.388)"
        className="st19 st20 st21">
        {props.AE307}
      </text>
      <path
        className="st10"
        d="M956.6 1136H1009V1151H956.6z"
      />
      <text
        transform="translate(956.633 1146.388)"
        className="st19 st20 st21">
        {"µS/cm"}
      </text>
      <path
        className="st10"
        d="M888 1096.4H1038V1124.5H888z"
      />
      <text transform="translate(915.798 1105.342)">
        <tspan
          x={0}
          y={0}
          className="st11 st22 st23">
          {"Conductividad "}
        </tspan>
        <tspan
          x={24.9}
          y={15}
          className="st11 st22 st23">
          {"Mezcla"}
        </tspan>
      </text>
      <g
        onClick={() => {
          notificacion(14, "Conductividad Mezcla");
        }}>
        <path
          className="st11"
          d="M1021 1138c-.6 1.1-.8 2.3-.6 3.4 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z"
        />
        <path
          className="st11"
          d="M1019.3 1137c-.9 1.5-1.1 3.2-.8 4.8 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-4 .7-1.3 1.8-2.2 3.1-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-3 1.6-3.8 3.1zM1030.8 1135.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.4s-1.5-1.7-2.5-2.2z"
        />
        <path
          className="st11"
          d="M1031.4 1133.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.4 1.4 3.1 2.6.7 1.3.9 2.7.7 4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.3-.8-4.8-1-1.4-2.3-2.5-3.8-3.1zM1032.3 1143.1v-1.5c0-2.5-1.6-4.4-3.9-4.9v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.4.5-3.9 2.4-3.9 4.9v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h9.1c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1027.2 1150.7c.9 0 1.7-.8 1.7-1.7h-3.4c.1.9.8 1.7 1.7 1.7z"
        />
      </g>
      <circle
        className="st19"
        cx={964}
        cy={1247}
        r={4}
      />
      <path
        className="st0"
        d="M1416.2 773.6v-67.4c0-4.3 2.8-7.7 6.2-7.7h14.8"
      />
      <path
        className="st10"
        d="M1413 677.5H1475V686.5H1413z"
      />
      <text
        transform="translate(1416.775 684.92)"
        className="st19 st30 st31">
        {"BISULFITO"}
      </text>
      <g>
        <path
          className="st32"
          d="M1432.5 754.2l28.3-.3c1.1 0 1.9-.9 1.9-2l-.6-47c0-1.1-.9-1.9-2-1.9l-28.3.3c-1.1 0-1.9.9-1.9 2l.6 47c0 1 .9 1.9 2 1.9z"
        />
        <path
          className="st5"
          d="M1432.2 696.9l.1 6.9c0 .6.5 1.1 1.1 1.1l6.6-.1c.6 0 1.1-.5 1.1-1.1l-.1-6.9c0-.6-.5-1.1-1.1-1.1l-6.6.1c-.6 0-1.1.5-1.1 1.1z"
        />
        <path
          className="st5"
          d="M1428.3 703.6v2.7c0 .6.5 1.1 1.1 1.1l33.8-.4c.6 0 1.1-.5 1.1-1.1v-2.7c0-.6-.5-1.1-1.1-1.1l-33.8.4c-.6 0-1.1.5-1.1 1.1z"
        />
      </g>
      <circle
        className="st19"
        cx={1416}
        cy={773}
        r={4}
      />
      <path
        className="st0"
        d="M1396.2 775.4v17.4c0 4.3-2.8 7.7-6.2 7.7h-14.8"
      />
      <path
        className="st10"
        d="M1339 871.5H1441V880.5H1339z"
      />
      <text
        transform="translate(1340.936 878.92)"
        className="st19 st30 st31">
        {"ANTIINCRUSTANTE"}
      </text>
      <g>
        <path
          className="st32"
          d="M1374.2 857h28.3c1.1 0 2-.9 2-2v-47c0-1.1-.9-2-2-2h-28.3c-1.1 0-2 .9-2 2v47c0 1.1.9 2 2 2z"
        />
        <path
          className="st5"
          d="M1374.5 799.8v6.9c0 .6.5 1.1 1.1 1.1h6.6c.6 0 1.1-.5 1.1-1.1v-6.9c0-.6-.5-1.1-1.1-1.1h-6.6c-.6-.1-1.1.4-1.1 1.1z"
        />
        <path
          className="st5"
          d="M1370.5 806.4v2.7c0 .6.5 1.1 1.1 1.1h33.8c.6 0 1.1-.5 1.1-1.1v-2.7c0-.6-.5-1.1-1.1-1.1h-33.8c-.6 0-1.1.5-1.1 1.1z"
        />
      </g>
      <circle
        className="st19"
        cx={1396}
        cy={774}
        r={4}
      />
      <path
        className="st3"
        d="M258.9 271.6l5.7 5.7c.4.4.4 1.1 0 1.6l-5.7 5.7c-.7.7-1.9.2-1.9-.8v-11.4c0-1 1.2-1.5 1.9-.8z"
      />
      <g>
        <image
          width={182}
          height={101}
          xlinkHref="data:image/png;base64,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 QpBdkLyu5QAAAABJRU5ErkJggg=="
          transform="translate(115 94)"
          overflow="visible"
          opacity={0.4}
        />
        <path
          className={
            (props.AE311 <= Number(props.umbrales.ma13) &&
            Number(props.AE311) >= Number(props.umbrales.mi13)
              ? " st1"
              : " st38") + (props.selected === 13 ? " st37" : "")
          }
          onClick={() => {
            loadgraphs(13, "Turbidez");
          }}
          d="M286.4 179.2h-70.6l-7.6 6.8-8.3-6.8h-74.2c-.8 0-1.5-.7-1.5-1.5v-73.1c0-.8.7-1.5 1.5-1.5h160.7c.8 0 1.5.7 1.5 1.5v73.1c0 .8-.7 1.5-1.5 1.5z"
        />
      </g>
      <g>
        <path
          className="st26"
          d="M287.4 179.2h-70.6l-7.6 6.8-8.3-6.8h-74.2c-.8 0-1.5-.7-1.5-1.5v-73.1c0-.8.7-1.5 1.5-1.5h160.7c.8 0 1.5.7 1.5 1.5v73.1c0 .8-.7 1.5-1.5 1.5z"
        />
      </g>
      <path
        className="st24"
        d="M196.3 168h-55.7c-1.5 0-2.7-1.2-2.7-2.7v-11.7c0-1.5 1.2-2.7 2.7-2.7h55.7c1.5 0 2.7 1.2 2.7 2.7v11.7c0 1.5-1.2 2.7-2.7 2.7z"
      />
      <path
        className="st10"
        d="M147.6 154H199V169H147.6z"
      />
      <text
        transform="translate(147.633 164.388)"
        className="st19 st20 st21">
        {props.AE311}
      </text>
      <path
        className="st10"
        d="M206.6 154H259V169H206.6z"
      />
      <text
        transform="translate(206.633 164.388)"
        className="st19 st20 st21">
        {"NTU"}
      </text>
      <g>
        <path
          className="st10"
          d="M131 125.4H281V142H131z"
        />
        <text
          transform="translate(177.836 134.342)"
          className="st11 st22 st23">
          {"Turbidez"}
        </text>
      </g>
      <g
        onClick={() => {
          notificacion(13, "Turbidez");
        }}>
        <path
          className="st11"
          d="M264 156c-.6 1.1-.8 2.3-.6 3.4 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z"
        />
        <path
          className="st11"
          d="M262.3 155c-.9 1.5-1.1 3.2-.8 4.8 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-4 .7-1.3 1.8-2.2 3.1-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-3 1.6-3.8 3.1zM273.8 153.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.4-.6-1-1.5-1.7-2.5-2.2z"
        />
        <path
          className="st11"
          d="M274.4 151.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.4 1.4 3.1 2.6.7 1.3.9 2.7.7 4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.3-.8-4.8-1-1.4-2.3-2.5-3.8-3.1zM275.3 161.1v-1.5c0-2.5-1.6-4.4-3.9-4.9v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.4.5-3.9 2.4-3.9 4.9v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h9.1c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM270.2 168.7c.9 0 1.7-.8 1.7-1.7h-3.4c.1.9.8 1.7 1.7 1.7z"
        />
      </g>
      <g>
        <path
          className="st19"
          d="M775.5 1254.9h2.1v-16.6h-2.1c-1.7 0-3.1 1.4-3.1 3.1v10.4c-.1 1.7 1.3 3.1 3.1 3.1z"
        />
        <path
          transform="rotate(-180 809.48 1246.89)"
          className="st19"
          d="M774.7 1241.2H844.2V1252.6000000000001H774.7z"
        />
        <path
          transform="rotate(90 825.397 1256.43)"
          className="st19"
          d="M817 1250.9H833.8V1261.9H817z"
        />
        <path
          className="st19"
          d="M843.9 1239.1h-2.1v16.6h2.1c1.7 0 3.1-1.4 3.1-3.1v-10.4c0-1.7-1.4-3.1-3.1-3.1zM833.7 1263.6v-2.1h-16.6v2.1c0 1.7 1.4 3.1 3.1 3.1h10.4c1.7.1 3.1-1.3 3.1-3.1z"
        />
      </g>
      <circle
        className="st3"
        cx={163}
        cy={278}
        r={4}
      />
      <path
        className="st3"
        d="M1080.1 782.6l-5.7-5.7c-.4-.4-.4-1.1 0-1.6l5.7-5.7c.7-.7 1.9-.2 1.9.8v11.4c0 1-1.2 1.5-1.9.8z"
      />
      <path
        className="st0"
        d="M1267.7 397.5L1267.7 461"
      />
      <g
        onClick={() => {
          loadgraphs(2, "Conductividad Entrada Planta");
        }}>
        <image
          width={168}
          height={101}
          xlinkHref="data:image/png;base64,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"
          transform="translate(1182 410)"
          overflow="visible"
          opacity={0.4}
        />
        <path
          className={
            (props.AE106 <= Number(props.umbrales.ma2) &&
            Number(props.AE106) >= Number(props.umbrales.mi2)
              ? " st1"
              : " st38") + (props.selected === 2 ? " st37" : "")
          }
          d="M1191.4 429.2c0-.8.7-1.5 1.5-1.5h66.3l8.4-8 8.7 8h62.7c.8 0 1.5.7 1.5 1.5v70.7c0 .8-.7 1.5-1.5 1.5h-146.1c-.8 0-1.5-.7-1.5-1.5v-70.7z"
        />
      </g>
      <g>
        <path
          className="st26"
          d="M1191.4 429.2c0-.8.7-1.5 1.5-1.5h66.3l8.4-8 8.7 8h62.7c.8 0 1.5.7 1.5 1.5v70.7c0 .8-.7 1.5-1.5 1.5h-146.1c-.8 0-1.5-.7-1.5-1.5v-70.7z"
        />
      </g>
      <g>
        <path
          className="st26"
          d="M1191.4 529.2c0-.8.7-1.5 1.5-1.5h66.3l8.4-8 8.7 8h62.7c.8 0 1.5.7 1.5 1.5v70.7c0 .8-.7 1.5-1.5 1.5h-146.1c-.8 0-1.5-.7-1.5-1.5v-70.7z"
        />
      </g>
      <g>
        <path
          className="st26"
          d="M1202.4 925.2c0-.8.7-1.5 1.5-1.5h66.3l8.4-8 8.7 8h62.7c.8 0 1.5.7 1.5 1.5v70.7c0 .8-.7 1.5-1.5 1.5h-146.1c-.8 0-1.5-.7-1.5-1.5v-70.7z"
        />
      </g>
      <g>
        <path
          className="st26"
          d="M1031.4 893.2c0-.8.7-1.5 1.5-1.5h66.3l8.4-8 8.7 8h62.7c.8 0 1.5.7 1.5 1.5v70.7c0 .8-.7 1.5-1.5 1.5h-146.1c-.8 0-1.5-.7-1.5-1.5v-70.7z"
        />
      </g>
      <path
        className="st24"
        d="M1254.3 490h-48.7c-1.5 0-2.7-1.2-2.7-2.7v-11.7c0-1.5 1.2-2.7 2.7-2.7h48.7c1.5 0 2.7 1.2 2.7 2.7v11.7c0 1.5-1.2 2.7-2.7 2.7z"
      />
      <path
        className="st10"
        d="M1207 476H1254V491H1207z"
      />
      <text
        transform="translate(1207 486.388)"
        className="st19 st20 st21">
        {props.AE106}
      </text>
      <path
        className="st10"
        d="M1263.6 476H1295V491H1263.6z"
      />
      <text
        transform="translate(1263.633 486.388)"
        className="st19 st20 st21">
        {"µS/cm"}
      </text>
      <g>
        <path
          className="st10"
          d="M1199 438H1336V472.4H1199z"
        />
        <text transform="translate(1220.298 446.918)">
          <tspan
            x={0}
            y={0}
            className="st11 st22 st23">
            {"Conductividad "}
          </tspan>
          <tspan
            x={-1}
            y={15}
            className="st11 st22 st23">
            {"Entrada Planta"}
          </tspan>
        </text>
      </g>
      <g
        onClick={() => {
          notificacion(2, "Conductividad Entrada planta");
        }}>
        <path
          className="st11"
          d="M1307 477c-.6 1.1-.8 2.3-.6 3.4 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z"
        />
        <path
          className="st11"
          d="M1305.3 476c-.9 1.5-1.1 3.2-.8 4.8 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-4s1.8-2.2 3.1-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-3 1.6-3.8 3.1zM1316.8 474.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.4s-1.5-1.7-2.5-2.2z"
        />
        <path
          className="st11"
          d="M1317.4 472.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.4 1.4 3.1 2.6s.9 2.7.7 4c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.3-.8-4.8-1-1.4-2.3-2.5-3.8-3.1zM1318.3 482.1v-1.5c0-2.5-1.6-4.4-3.9-4.9v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.4.5-3.9 2.4-3.9 4.9v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h9.1c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1313.2 489.7c.9 0 1.7-.8 1.7-1.7h-3.4c.1.9.8 1.7 1.7 1.7z"
        />
      </g>
      <path
        className="st24"
        d="M1254.3 590h-48.7c-1.5 0-2.7-1.2-2.7-2.7v-11.7c0-1.5 1.2-2.7 2.7-2.7h48.7c1.5 0 2.7 1.2 2.7 2.7v11.7c0 1.5-1.2 2.7-2.7 2.7z"
      />
      <path
        className="st10"
        d="M1207 576H1254V591H1207z"
      />
      <text
        transform="translate(1207 586.388)"
        className="st19 st20 st21">
        {props.TT106}
      </text>
      <path
        className="st10"
        d="M1263.6 576H1295V591H1263.6z"
      />
      <text
        transform="translate(1263.633 586.388)"
        className="st19 st20 st21">
        {"\xB0c"}
      </text>
      <g>
        <path
          className="st10"
          d="M1199 538H1336V572.4H1199z"
        />
        <text transform="translate(1225.536 546.918)">
          <tspan
            x={0}
            y={0}
            className="st11 st22 st23">
            {"Temperatura"}
          </tspan>
          <tspan
            x={-6.3}
            y={15}
            className="st11 st22 st23">
            {"Entrada Planta"}
          </tspan>
        </text>
      </g>
      <g
        onClick={() => {
          notificacion(3, "Temperatura Entrada Planta");
        }}>
        <path
          className="st11"
          d="M1307 577c-.6 1.1-.8 2.3-.6 3.4 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z"
        />
        <path
          className="st11"
          d="M1305.3 576c-.9 1.5-1.1 3.2-.8 4.8 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-4 .7-1.3 1.8-2.2 3.1-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-3 1.6-3.8 3.1zM1316.8 574.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.4s-1.5-1.7-2.5-2.2z"
        />
        <path
          className="st11"
          d="M1317.4 572.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.4 1.4 3.1 2.6.7 1.3.9 2.7.7 4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.3-.8-4.8-1-1.4-2.3-2.5-3.8-3.1zM1318.3 582.1v-1.5c0-2.5-1.6-4.4-3.9-4.9v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.4.5-3.9 2.4-3.9 4.9v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h9.1c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1313.2 589.7c.9 0 1.7-.8 1.7-1.7h-3.4c.1.9.8 1.7 1.7 1.7z"
        />
      </g>
      <circle
        className="st19"
        cx={1267.7}
        cy={396}
        r={4}
      />

      <g>
        <path
          className="st26"
          d="M1470.6 358.8c0 .8-.7 1.5-1.5 1.5h-66.3l-8.4 8-8.7-8H1323c-.8 0-1.5-.7-1.5-1.5v-70.7c0-.8.7-1.5 1.5-1.5h146.1c.8 0 1.5.7 1.5 1.5v70.7z"
        />
      </g>
      <g>
        <path
          className="st26"
          d="M1028.6 682.8c0 .8-.7 1.5-1.5 1.5h-66.3l-8.4 8-8.7-8H881c-.8 0-1.5-.7-1.5-1.5v-70.7c0-.8.7-1.5 1.5-1.5h146.1c.8 0 1.5.7 1.5 1.5v70.7z"
        />
      </g>

      <g>
        <path
          className="st26"
          d="M256.4 923.2c0-.8.7-1.5 1.5-1.5h66.3l8.4-8 8.7 8H404c.8 0 1.5.7 1.5 1.5v70.7c0 .8-.7 1.5-1.5 1.5H257.9c-.8 0-1.5-.7-1.5-1.5v-70.7z"
        />
      </g>
      <g>
        <path
          className="st26"
          d="M256.4 1020.2c0-.8.7-1.5 1.5-1.5h66.3l8.4-8 8.7 8H404c.8 0 1.5.7 1.5 1.5v70.7c0 .8-.7 1.5-1.5 1.5H257.9c-.8 0-1.5-.7-1.5-1.5v-70.7z"
        />
      </g>
      <path
        className="st24"
        d="M507.3 951h-48.7c-1.5 0-2.7-1.2-2.7-2.7v-11.7c0-1.5 1.2-2.7 2.7-2.7h48.7c1.5 0 2.7 1.2 2.7 2.7v11.7c0 1.5-1.2 2.7-2.7 2.7z"
      />
      <path
        className="st10"
        d="M460 937H507V952H460z"
      />
      <path
        className="st2"
        d="M1356 1512.9h-58.3c-4.6 0-8.3-3.7-8.3-8.3v-186.2c0-5.1 4.1-9.3 9.3-9.3h55.4"
      />
      <path
        className="st2"
        d="M1354.3 1279L1658.7 1279"
      />
      <g>
        <path
          className="st4"
          d="M1383.9 1314.6h-32.7c-.7 0-1.2-1.1-.8-1.9l5.2-11.4c.2-.4.5-.6.8-.6h22.2c.3 0 .6.2.8.6l5.2 11.4c.4.8 0 1.9-.7 1.9zM1392 1284.8h-25.7V1273h25.7c1.7 0 3.1 1.4 3.1 3.1v5.5c0 1.8-1.4 3.2-3.1 3.2z"
        />
        <circle
          className="st5"
          cx={1367.4}
          cy={1289.8}
          r={17.3}
        />
        <circle
          className="st6"
          cx={1367.4}
          cy={1289.8}
          r={12.1}
        />
      </g>
      <path
        className="st0"
        d="M1411.7 1239.5L1411.7 1280"
      />
      <g>
        <image
          width={182}
          height={101}
          xlinkHref="data:image/png;base64,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 QpBdkLyu5QAAAABJRU5ErkJggg=="
          transform="translate(1319 1157)"
          overflow="visible"
          opacity={0.4}
        />
        <path
          className={
            (props.AE309 <= Number(props.umbrales.ma15) &&
            Number(props.AE309) >= Number(props.umbrales.mi15)
              ? " st1"
              : " st38") + (props.selected === 15 ? " st37" : "")
          }
          onClick={() => {
            loadgraphs(15, "Conductividad Reconstituida Sala 1");
          }}
          d="M1490.4 1242.2h-70.6l-7.6 6.8-8.3-6.8h-74.2c-.8 0-1.5-.7-1.5-1.5v-73.1c0-.8.7-1.5 1.5-1.5h160.7c.8 0 1.5.7 1.5 1.5v73.1c0 .8-.7 1.5-1.5 1.5z"
        />
      </g>
      <g>
        <path
          className="st26"
          d="M1490.4 1242.2h-70.6l-7.6 6.8-8.3-6.8h-74.2c-.8 0-1.5-.7-1.5-1.5v-73.1c0-.8.7-1.5 1.5-1.5h160.7c.8 0 1.5.7 1.5 1.5v73.1c0 .8-.7 1.5-1.5 1.5z"
        />
      </g>
      <path
        className="st24"
        d="M1396.3 1231h-55.7c-1.5 0-2.7-1.2-2.7-2.7v-11.7c0-1.5 1.2-2.7 2.7-2.7h55.7c1.5 0 2.7 1.2 2.7 2.7v11.7c0 1.5-1.2 2.7-2.7 2.7z"
      />
      <path
        className="st10"
        d="M1347.6 1217H1399V1232H1347.6z"
      />
      <text
        transform="translate(1347.633 1227.388)"
        className="st19 st20 st21">
        {props.AE309}
      </text>
      <path
        className="st10"
        d="M1403.6 1217H1456V1232H1403.6z"
      />
      <text
        transform="translate(1403.633 1227.388)"
        className="st19 st20 st21">
        {"µS/cm"}
      </text>
      <g>
        <path
          className="st10"
          d="M1335 1177.4H1485V1205.5H1335z"
        />
        <text transform="translate(1344.007 1186.342)">
          <tspan
            x={0}
            y={0}
            className="st11 st22 st23">
            {"Conductividad Agua "}
          </tspan>
          <tspan
            x={1.7}
            y={15}
            className="st11 st22 st23">
            {"Reconstituida Sala 1"}
          </tspan>
        </text>
      </g>
      <g
        onClick={() => {
          notificacion(15, "Conductividad Reconstituida Sala 1");
        }}>
        <path
          className="st11"
          d="M1468 1219c-.6 1.1-.8 2.3-.6 3.4 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z"
        />
        <path
          className="st11"
          d="M1466.3 1218c-.9 1.5-1.1 3.2-.8 4.8 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-4 .7-1.3 1.8-2.2 3.1-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-3 1.6-3.8 3.1zM1477.8 1216.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.4s-1.5-1.7-2.5-2.2z"
        />
        <path
          className="st11"
          d="M1478.4 1214.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.4 1.4 3.1 2.6.7 1.3.9 2.7.7 4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.3-.8-4.8-1-1.4-2.3-2.5-3.8-3.1zM1479.3 1224.1v-1.5c0-2.5-1.6-4.4-3.9-4.9v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.4.5-3.9 2.4-3.9 4.9v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h9.1c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1474.2 1231.7c.9 0 1.7-.8 1.7-1.7h-3.4c.1.9.8 1.7 1.7 1.7z"
        />
      </g>
      <g>
        <image
          width={182}
          height={101}
          xlinkHref="data:image/png;base64,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 QpBdkLyu5QAAAABJRU5ErkJggg=="
          transform="translate(1500 1156)"
          overflow="visible"
          opacity={0.4}
        />
        <path
          className={
            (props.AE313 <= Number(props.umbrales.ma17) &&
            Number(props.AE313) >= Number(props.umbrales.mi17)
              ? " st1"
              : " st38") + (props.selected === 17 ? " st37" : "")
          }
          onClick={() => {
            loadgraphs(17, "pH Agua Reconstituida Sala 1");
          }}
          d="M1671.4 1241.2h-70.6l-7.6 6.8-8.3-6.8h-74.2c-.8 0-1.5-.7-1.5-1.5v-73.1c0-.8.7-1.5 1.5-1.5h160.7c.8 0 1.5.7 1.5 1.5v73.1c0 .8-.7 1.5-1.5 1.5z"
        />
      </g>
      <g>
        <path
          className="st26"
          d="M1671.4 1241.2h-70.6l-7.6 6.8-8.3-6.8h-74.2c-.8 0-1.5-.7-1.5-1.5v-73.1c0-.8.7-1.5 1.5-1.5h160.7c.8 0 1.5.7 1.5 1.5v73.1c0 .8-.7 1.5-1.5 1.5z"
        />
      </g>
      <path
        className="st24"
        d="M1577.3 1230h-55.7c-1.5 0-2.7-1.2-2.7-2.7v-11.7c0-1.5 1.2-2.7 2.7-2.7h55.7c1.5 0 2.7 1.2 2.7 2.7v11.7c0 1.5-1.2 2.7-2.7 2.7z"
      />
      <path
        className="st10"
        d="M1528.6 1216H1580V1231H1528.6z"
      />
      <text
        transform="translate(1528.633 1226.388)"
        className="st19 st20 st21">
        {props.AE313}
      </text>
      <path
        className="st10"
        d="M1584.6 1216H1637V1231H1584.6z"
      />
      <text
        transform="translate(1584.633 1226.388)"
        className="st19 st20 st21">
        {"pH"}
      </text>
      <g>
        <path
          className="st10"
          d="M1516 1176.4H1666V1204.5H1516z"
        />
        <text transform="translate(1563.082 1185.342)">
          <tspan
            x={0}
            y={0}
            className="st11 st22 st23">
            {"pH Agua"}
          </tspan>
          <tspan
            x={-36.4}
            y={15}
            className="st11 st22 st23">
            {"Reconstituida Sala 1"}
          </tspan>
        </text>
      </g>
      <g
        onClick={() => {
          notificacion(17, "pH Agua Reconstituida Sala 1");
        }}>
        <path
          className="st11"
          d="M1649 1218c-.6 1.1-.8 2.3-.6 3.4 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z"
        />
        <path
          className="st11"
          d="M1647.3 1217c-.9 1.5-1.1 3.2-.8 4.8 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-4 .7-1.3 1.8-2.2 3.1-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-3 1.6-3.8 3.1zM1658.8 1215.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.4s-1.5-1.7-2.5-2.2z"
        />
        <path
          className="st11"
          d="M1659.4 1213.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.4 1.4 3.1 2.6.7 1.3.9 2.7.7 4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.3-.8-4.8-1-1.4-2.3-2.5-3.8-3.1zM1660.3 1223.1v-1.5c0-2.5-1.6-4.4-3.9-4.9v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.4.5-3.9 2.4-3.9 4.9v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h9.1c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1655.2 1230.7c.9 0 1.7-.8 1.7-1.7h-3.4c.1.9.8 1.7 1.7 1.7z"
        />
      </g>
      <g>
        <image
          width={182}
          height={101}
          xlinkHref="data:image/png;base64,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 QpBdkLyu5QAAAABJRU5ErkJggg=="
          transform="translate(1500 1366)"
          overflow="visible"
          opacity={0.4}
        />
        <path
          className={
            (props.AE312 <= Number(props.umbrales.ma18) &&
            Number(props.AE312) >= Number(props.umbrales.mi18)
              ? " st1"
              : " st38") + (props.selected === 18 ? " st37" : "")
          }
          onClick={() => {
            loadgraphs(18, "pH Agua Reconstituida Sala 2");
          }}
          d="M1671.4 1451.2h-70.6l-7.6 6.8-8.3-6.8h-74.2c-.8 0-1.5-.7-1.5-1.5v-73.1c0-.8.7-1.5 1.5-1.5h160.7c.8 0 1.5.7 1.5 1.5v73.1c0 .8-.7 1.5-1.5 1.5z"
        />
      </g>
      <g>
        <path
          className="st26"
          d="M1671.4 1451.2h-70.6l-7.6 6.8-8.3-6.8h-74.2c-.8 0-1.5-.7-1.5-1.5v-73.1c0-.8.7-1.5 1.5-1.5h160.7c.8 0 1.5.7 1.5 1.5v73.1c0 .8-.7 1.5-1.5 1.5z"
        />
      </g>
      <path
        className="st24"
        d="M1577.3 1440h-55.7c-1.5 0-2.7-1.2-2.7-2.7v-11.7c0-1.5 1.2-2.7 2.7-2.7h55.7c1.5 0 2.7 1.2 2.7 2.7v11.7c0 1.5-1.2 2.7-2.7 2.7z"
      />
      <path
        className="st10"
        d="M1528.6 1426H1580V1441H1528.6z"
      />
      <text
        transform="translate(1528.633 1436.388)"
        className="st19 st20 st21">
        {props.AE312}
      </text>
      <path
        className="st10"
        d="M1584.6 1426H1637V1441H1584.6z"
      />
      <text
        transform="translate(1584.633 1436.388)"
        className="st19 st20 st21">
        {"pH"}
      </text>
      <g>
        <path
          className="st10"
          d="M1516 1386.4H1666V1414.5H1516z"
        />
        <text transform="translate(1563.082 1395.342)">
          <tspan
            x={0}
            y={0}
            className="st11 st22 st23">
            {"pH Agua "}
          </tspan>
          <tspan
            x={-37.6}
            y={15}
            className="st11 st22 st23">
            {"Reconstituida Sala 2"}
          </tspan>
        </text>
      </g>
      <g
        onClick={() => {
          notificacion(18, "pH Agua Reconstituida Sala 2");
        }}>
        <path
          className="st11"
          d="M1649 1428c-.6 1.1-.8 2.3-.6 3.4 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z"
        />
        <path
          className="st11"
          d="M1647.3 1427c-.9 1.5-1.1 3.2-.8 4.8 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-4 .7-1.3 1.8-2.2 3.1-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-3 1.6-3.8 3.1zM1658.8 1425.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.4s-1.5-1.7-2.5-2.2z"
        />
        <path
          className="st11"
          d="M1659.4 1423.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.4 1.4 3.1 2.6.7 1.3.9 2.7.7 4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.3-.8-4.8-1-1.4-2.3-2.5-3.8-3.1zM1660.3 1433.1v-1.5c0-2.5-1.6-4.4-3.9-4.9v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.4.5-3.9 2.4-3.9 4.9v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h9.1c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1655.2 1440.7c.9 0 1.7-.8 1.7-1.7h-3.4c.1.9.8 1.7 1.7 1.7z"
        />
      </g>
      <circle
        className="st19"
        cx={1411}
        cy={1278}
        r={4}
      />
      <g>
        <path
          className="st10"
          d="M1323 1326H1421V1352.4H1323z"
        />
        <text transform="translate(1335.88 1335.645)">
          <tspan
            x={0}
            y={0}
            className="st11 st12 st13">
            {"Bomba de "}
          </tspan>
          <tspan
            x={-10.9}
            y={15}
            className="st11 st12 st13">
            {"Re-impulsi\xF3n"}
          </tspan>
        </text>
      </g>
      <g>
        <path
          className="st10"
          d="M683 1575H781V1601.4H683z"
        />
        <text transform="translate(686.15 1584.645)">
          <tspan
            x={0}
            y={0}
            className="st11 st12 st13">
            {"Bomba Agua "}
          </tspan>
          <tspan
            x={14.4}
            y={15}
            className="st11 st12 st13">
            {"de Mar A"}
          </tspan>
        </text>
      </g>
      <g>
        <path
          className="st10"
          d="M683 1677H781V1703.4H683z"
        />
        <text transform="translate(686.15 1686.645)">
          <tspan
            x={0}
            y={0}
            className="st11 st12 st13">
            {"Bomba Agua "}
          </tspan>
          <tspan
            x={14.4}
            y={15}
            className="st11 st12 st13">
            {"de Mar B"}
          </tspan>
        </text>
      </g>
      <path
        className="st3"
        d="M1658.6 1272.6l5.7 5.7c.4.4.4 1.1 0 1.6l-5.7 5.7c-.7.7-1.9.2-1.9-.8v-11.4c0-1 1.2-1.5 1.9-.8z"
      />
      <path
        className="st2"
        d="M1354.3 1487L1658.7 1487"
      />
      <g>
        <path
          className="st4"
          d="M1383.9 1522.6h-32.7c-.7 0-1.2-1.1-.8-1.9l5.2-11.4c.2-.4.5-.6.8-.6h22.2c.3 0 .6.2.8.6l5.2 11.4c.4.8 0 1.9-.7 1.9zM1392 1492.8h-25.7V1481h25.7c1.7 0 3.1 1.4 3.1 3.1v5.5c0 1.8-1.4 3.2-3.1 3.2z"
        />
        <circle
          className="st5"
          cx={1367.4}
          cy={1497.8}
          r={17.3}
        />
        <circle
          className="st6"
          cx={1367.4}
          cy={1497.8}
          r={12.1}
        />
      </g>
      <path
        className="st0"
        d="M1411.7 1447.5L1411.7 1488"
      />
      <g>
        <image
          width={182}
          height={101}
          xlinkHref="data:image/png;base64,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 QpBdkLyu5QAAAABJRU5ErkJggg=="
          transform="translate(1319 1365)"
          overflow="visible"
          opacity={0.4}
        />
        <path
          className={
            (props.AE310 <= Number(props.umbrales.ma16) &&
            Number(props.AE310) >= Number(props.umbrales.mi16)
              ? " st1"
              : " st38") + (props.selected === 16 ? " st37" : "")
          }
          onClick={() => {
            loadgraphs(16, "Conductividad Reconstituida Sala 2");
          }}
          d="M1490.4 1450.2h-70.6l-7.6 6.8-8.3-6.8h-74.2c-.8 0-1.5-.7-1.5-1.5v-73.1c0-.8.7-1.5 1.5-1.5h160.7c.8 0 1.5.7 1.5 1.5v73.1c0 .8-.7 1.5-1.5 1.5z"
        />
      </g>
      <g>
        <path
          className="st26"
          d="M1490.4 1450.2h-70.6l-7.6 6.8-8.3-6.8h-74.2c-.8 0-1.5-.7-1.5-1.5v-73.1c0-.8.7-1.5 1.5-1.5h160.7c.8 0 1.5.7 1.5 1.5v73.1c0 .8-.7 1.5-1.5 1.5z"
        />
      </g>
      <path
        className="st24"
        d="M1396.3 1439h-55.7c-1.5 0-2.7-1.2-2.7-2.7v-11.7c0-1.5 1.2-2.7 2.7-2.7h55.7c1.5 0 2.7 1.2 2.7 2.7v11.7c0 1.5-1.2 2.7-2.7 2.7z"
      />
      <path
        className="st10"
        d="M1347.6 1425H1399V1440H1347.6z"
      />
      <text
        transform="translate(1347.633 1435.388)"
        className="st19 st20 st21">
        {props.AE310}
      </text>
      <path
        className="st10"
        d="M1403.6 1425H1456V1440H1403.6z"
      />
      <text
        transform="translate(1403.633 1435.388)"
        className="st19 st20 st21">
        {"µS/cm"}
      </text>
      <g>
        <path
          className="st10"
          d="M1335 1385.4H1485V1413.5H1335z"
        />
        <text transform="translate(1344.007 1394.342)">
          <tspan
            x={0}
            y={0}
            className="st11 st22 st23">
            {"Conductividad Agua "}
          </tspan>
          <tspan
            x={0.5}
            y={15}
            className="st11 st22 st23">
            {"Reconstituida Sala 2"}
          </tspan>
        </text>
      </g>
      <g
        onClick={() => {
          notificacion(16, "Conductividad Reconstituida Sala 2");
        }}>
        <path
          className="st11"
          d="M1468 1427c-.6 1.1-.8 2.3-.6 3.4 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z"
        />
        <path
          className="st11"
          d="M1466.3 1426c-.9 1.5-1.1 3.2-.8 4.8 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-4 .7-1.3 1.8-2.2 3.1-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-3 1.6-3.8 3.1zM1477.8 1424.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.4s-1.5-1.7-2.5-2.2z"
        />
        <path
          className="st11"
          d="M1478.4 1422.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.4 1.4 3.1 2.6.7 1.3.9 2.7.7 4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.3-.8-4.8-1-1.4-2.3-2.5-3.8-3.1zM1479.3 1432.1v-1.5c0-2.5-1.6-4.4-3.9-4.9v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.4.5-3.9 2.4-3.9 4.9v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h9.1c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1474.2 1439.7c.9 0 1.7-.8 1.7-1.7h-3.4c.1.9.8 1.7 1.7 1.7z"
        />
      </g>
      <circle
        className="st19"
        cx={1411}
        cy={1486}
        r={4}
      />
      <circle
        className="st19"
        cx={1593}
        cy={1278}
        r={4}
      />
      <circle
        className="st19"
        cx={1593}
        cy={1486}
        r={4}
      />
      <g>
        <path
          className="st10"
          d="M1323 1534H1421V1560.4H1323z"
        />
        <text transform="translate(1335.88 1543.645)">
          <tspan
            x={0}
            y={0}
            className="st11 st12 st13">
            {"Bomba de "}
          </tspan>
          <tspan
            x={-10.9}
            y={15}
            className="st11 st12 st13">
            {"Re-impulsi\xF3n"}
          </tspan>
        </text>
      </g>
      <path
        className="st3"
        d="M1658.6 1480.6l5.7 5.7c.4.4.4 1.1 0 1.6l-5.7 5.7c-.7.7-1.9.2-1.9-.8v-11.4c0-1 1.2-1.5 1.9-.8z"
      />
      <path
        className="st36"
        d="M737.3 1530.2h46.3c4.6 0 8.3 3.6 8.3 8.1v84.7c0 5-4.1 9-9.3 9h-45.4"
      />
      <path
        className="st36"
        d="M826 1265.3V1570c0 5-4.1 9-9.3 9h-25.4"
      />
      <path
        className="st36"
        d="M625 1607.9L661 1607.9"
      />
      <path
        className="st36"
        d="M739 1659.9h-56.3c-4.6 0-8.3-3.7-8.3-8.3V1565.4c0-5.1 4.1-9.3 9.3-9.3H739"
      />
      <g>
        <path
          className="st4"
          d="M748.1 1566.6h-32.7c-.7 0-1.2-1.1-.8-1.9l5.2-11.4c.2-.4.5-.6.8-.6h22.2c.3 0 .6.2.8.6l5.2 11.4c.5.8.1 1.9-.7 1.9zM756.2 1536.8h-25.7V1525h25.7c1.7 0 3.1 1.4 3.1 3.1v5.5c.1 1.8-1.3 3.2-3.1 3.2z"
        />
        <circle
          className="st5"
          cx={731.7}
          cy={1541.8}
          r={17.3}
        />
        <circle
          className="st6"
          cx={731.7}
          cy={1541.8}
          r={12.1}
        />
      </g>
      <g>
        <path
          className="st4"
          d="M748.1 1667.6h-32.7c-.7 0-1.2-1.1-.8-1.9l5.2-11.4c.2-.4.5-.6.8-.6h22.2c.3 0 .6.2.8.6l5.2 11.4c.5.8.1 1.9-.7 1.9zM756.2 1637.8h-25.7V1626h25.7c1.7 0 3.1 1.4 3.1 3.1v5.5c.1 1.8-1.3 3.2-3.1 3.2z"
        />
        <circle
          className="st5"
          cx={731.7}
          cy={1642.8}
          r={17.3}
        />
        <circle
          className="st6"
          cx={731.7}
          cy={1642.8}
          r={12.1}
        />
      </g>
      <path
        d="M661.9 1601.6l5.7 5.7c.4.4.4 1.1 0 1.6l-5.7 5.7c-.7.7-1.9.2-1.9-.8v-11.4c0-1 1.2-1.5 1.9-.8z"
        fill="#383e7a"
      />
      <g>
        <path
          fill="#2e3192"
          d="M468 1520H624V1618H468z"
        />
        <path
          className="st8"
          d="M623.6 1501v113c0 1.9-1.2 3.5-2.7 3.5H470.8c-1.5 0-2.7-1.6-2.7-3.5v-113"
        />
        <path
          className="st9"
          d="M485 1535.9L497.9 1535.9"
        />
        <path
          className="st9"
          d="M485 1545.4L497.9 1545.4"
        />
        <path
          className="st9"
          d="M485 1534.9L497.9 1534.9"
        />
        <path
          className="st9"
          d="M485 1544.4L497.9 1544.4"
        />
        <path
          className="st9"
          d="M484.9 1553.9L497.9 1553.9"
        />
        <path
          className="st9"
          d="M484.9 1563.4L497.9 1563.4"
        />
        <path
          className="st9"
          d="M484.9 1572.9L497.9 1572.9"
        />
        <path
          className="st9"
          d="M485 1582.4L497.9 1582.4"
        />
        <path
          className="st9"
          d="M485 1593.9L498 1593.9"
        />
        <path
          className="st9"
          d="M485 1603.4L498 1603.4"
        />
        <path
          className="st10"
          d="M489 1635H601V1667H489z"
        />
        <text transform="translate(506.137 1644.646)">
          <tspan
            x={0}
            y={0}
            className="st11 st12 st13">
            {"ESTANQUE "}
          </tspan>
          <tspan
            x={-12.2}
            y={15}
            className="st11 st12 st13">
            {"AGUA DE MAR"}
          </tspan>
        </text>
      </g>
      <g>
        <path
          className="st26"
          d="M859.6 1393.1c-.8 0-1.5-.7-1.5-1.5v-28.3l-8-8.4 8-8.7v-27.7c0-.8.7-1.5 1.5-1.5h160.7c.8 0 1.5.7 1.5 1.5v73.1c0 .8-.7 1.5-1.5 1.5H859.6z"
        />
      </g>
      <path
        className="st24"
        d="M925.3 1382h-55.7c-1.5 0-2.7-1.2-2.7-2.7v-11.7c0-1.5 1.2-2.7 2.7-2.7h55.7c1.5 0 2.7 1.2 2.7 2.7v11.7c0 1.5-1.2 2.7-2.7 2.7z"
      />
      <path
        className="st10"
        d="M876.6 1368H928V1383H876.6z"
      />
    </svg>
  );
};
export default Scada;

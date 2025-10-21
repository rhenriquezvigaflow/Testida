import * as React from "react";
import {
  getColor,
  getColorConexion,
  getConexion,
  getScaledValue,
  getTarjetaClass,
  getTemaAlarma
} from "../../../../commons/scada/scada";

const ScadaAquaChileCTP = (props) => {
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
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x={0}
      y={0}
      viewBox="0 0 1429.5 1713"
      style={{
        enableBackground: "new 0 0 1429.5 1713"
      }}
      xmlSpace="preserve"
      {...props}>
      <style>
        {
          ".st0{fill:#323e48}.st1{fill:#fff}.st2{fill:none;stroke:#00aeed;stroke-width:4;stroke-miterlimit:10}.st3{opacity:7.000000e-02;fill:#323e48;enable-background:new}.st4{fill:#2f3e49}.st5{fill:#00aeed}.st6{opacity:.15;fill:#0e76e7;enable-background:new}.st7{fill:#606060}.st9{font-size:11px}.st11{fill:#cbcbcb}.st12{fill:none;stroke:#2f3e49;stroke-width:4;stroke-miterlimit:10}.st13{fill:#00a39b}.st14{fill:none;stroke:#35ace8;stroke-width:4;stroke-miterlimit:10}.st15{fill:#0e76e7}.st16,.st17,.st18{fill:none;stroke:#323e48;stroke-width:4;stroke-miterlimit:10}.st17,.st18{stroke:#fff;stroke-width:2}.st18{stroke:#b3b3b3}.st19{enable-background:new}.st20{fill:#ccc}.st21{font-size:16px}.st22{font-size:13px}.st23,.st25{fill:#fff;stroke:#35ace8;stroke-width:4;stroke-miterlimit:10}.st25{fill:none;stroke:#2f3e49;stroke-width:3.59}.st26{font-size:12px}.st27{font-size:14px}.st28,.st29{fill:none;stroke:#323e48;stroke-width:3.0963;stroke-miterlimit:10}.st29{stroke:#cbcbcb;stroke-width:2}.st35{fill:#666}.tarjeta{fill:#ffffff}.tarjetaSeleccionada{fill:#3574e0;opacity:.15}.cursorPointer{cursor:pointer}.cursorNormal{cursor:default}.campana{fill:#3474E0;}.campana:hover{fill:#7c7c7c;}.campanaVacia{fill:#c2c2c1;}.campanaVacia:hover{fill:#7c7c7c;}.campanaDesconectada{fill:#c2c2c1;}"
        }
      </style>
      <path
        className="st0"
        d="M696.8 1312.9H646c-6.6 0-12-5.4-12-12v-15.7c0-6.6 5.4-12 12-12h50.8c6.6 0 12 5.4 12 12v15.7c0 6.6-5.4 12-12 12z"
      />
      <ellipse
        className="st1"
        cx={654}
        cy={1293.1}
        rx={15.5}
        ry={16.4}
      />
      <ellipse
        className="st1"
        cx={688.9}
        cy={1293.1}
        rx={15.5}
        ry={16.4}
      />
      <path
        className="st2"
        d="M374 946.4v-77"
      />
      <path
        className="st3"
        d="M705.8 546.8c0-27.5-41.4-50-92.8-50s-92.8 22.5-92.8 50h.7c-.4 1.4-.7 2.8-.7 4.4v129.3c0 14.4 17.9 26.4 40.3 28.1v14.6H588v-14.3h47.5v14.3H663v-14.6c23.6-.8 42.5-13.1 42.5-28.1V551.2c0-1.4-.4-3.1-.7-4.4h1z"
      />
      <path
        className="st4"
        d="M284 538.1h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
      />
      <path
        className="st5"
        d="M213.1 534.6c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st1"
        d="M213.1 522.9c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st2"
        d="M182.6 527.7h27.6"
      />
      <circle
        className="st1"
        cx={263.2}
        cy={552.6}
        r={10.9}
      />
      <circle
        className="st6"
        cx={263.2}
        cy={552.4}
        r={8}
      />
      <text
        transform="translate(249.979 592.344)"
        className="st7 st8 st9">
        {"P002"}
      </text>
      <path
        className="st4"
        d="M284 459.6h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
      />
      <circle
        className="st1"
        cx={263.2}
        cy={474.1}
        r={10.9}
      />
      <circle
        className="st6"
        cx={263.2}
        cy={473.9}
        r={8}
      />
      <text
        transform="translate(249.979 513.865)"
        className="st7 st8 st9">
        {"P001"}
      </text>
      <path
        style={{
          opacity: 0.6,
          fill: "none",
          stroke: "#cbcbcb",
          strokeWidth: 2,
          strokeMiterlimit: 10,
          enableBackground: "new"
        }}
        d="M369 517.7v32"
      />
      <path
        className="st11"
        d="M373.8 522.9c0 .9-.7 1.6-1.6 1.6h-6.3c-.9 0-1.6-.7-1.6-1.6 0-.4.2-.8.5-1.1l3.1-3.1c.6-.6 1.5-.6 2.2-.1l3.2 3.2c.3.3.5.7.5 1.1z"
      />
      <path
        className="st1"
        d="M365.2 522.9c0-.2.1-.3.2-.4l3.1-3.1c.2-.2.6-.2.9 0l3.1 3.1c.1.1.2.3.2.4 0 .3-.2.6-.6.6h-6.3c-.3 0-.6-.3-.6-.6m-2 0c0 1.4 1.2 2.6 2.6 2.6h6.3c1.4 0 2.6-1.2 2.6-2.6 0-.7-.3-1.3-.8-1.8l-3.1-3.1-.1-.1-.1-.1c-1.1-.9-2.6-.8-3.5.2l-3.1 3.1c-.5.5-.8 1.1-.8 1.8z"
      />
      <text
        transform="translate(331.74 642.415)"
        className="st7 st8 st9">
        {"CLORO"}
      </text>
      <path
        className="st12"
        d="M372 560.7h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
      />
      <path
        className="st4"
        d="M361.5 569.7h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
      />
      <path
        className="st13"
        d="M331.5 581.4h38.8v40h-38.8z"
      />
      <path
        className="st12"
        d="M370.3 574.7v45.2c0 .7-.4 1.3-.8 1.3h-37.1c-.5 0-.8-.6-.8-1.3v-45.2"
      />
      <path
        className="st14"
        d="M242 567.8h-14.3c-2.8 0-5-2.3-5-5v-68.4c0-3.5 2.8-6.3 6.3-6.3h13M294 463.9h14.3c2.8 0 5 2.3 5 5v68.4c0 3.5-2.8 6.3-6.3 6.3h-13"
      />
      <path
        className="st5"
        d="M484.7 515.9c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st1"
        d="M484.7 504.2c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st2"
        d="M314.6 509h165.2"
      />
      <path
        className="st15"
        d="M48.5 455.7h124.8v97.7H48.5z"
      />
      <path
        className="st12"
        d="M173.2 439.4v111.2c0 1.7-.6 3.1-1.2 3.1H50c-.7 0-1.2-1.4-1.2-3.1V439.4"
      />
      <text
        transform="translate(50.035 576.546)"
        className="st7 st8 st9">
        {"TK-001 ALIMENTACI\xD3N"}
      </text>
      <path
        className="st0"
        d="M577 562.7h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6H577c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM561.8 566.6l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st0"
        d="m577.4 577.2-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st16"
        d="M569.6 561.7v10"
      />
      <path
        className="st17"
        d="M560.6 553.7h18M569.6 554.7v8"
      />
      <path
        className="st14"
        d="M584.6 571.9h47.2M631.8 772.9H613c-2.8 0-5-2.3-5-5v-95.4"
      />
      <text
        transform="translate(551.316 592.7)"
        className="st7 st8 st9">
        {"VX-006"}
      </text>
      <path
        className="st0"
        d="M655.1 562.7h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM639.9 566.6l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st0"
        d="m655.5 577.2-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st16"
        d="M647.7 561.7v10"
      />
      <path
        className="st17"
        d="M638.7 553.7h18M647.7 554.7v8"
      />
      <text
        transform="translate(629.367 592.7)"
        className="st7 st8 st9">
        {"VX-007"}
      </text>
      <path
        className="st0"
        d="M577 661.9h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6H577c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM561.8 665.8l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st0"
        d="m577.4 676.4-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st16"
        d="M569.6 660.9v10"
      />
      <path
        className="st17"
        d="M560.6 652.9h18M569.6 653.9v8"
      />
      <path
        className="st14"
        d="M584.6 671.1h47.2"
      />
      <text
        transform="translate(551.316 691.916)"
        className="st7 st8 st9">
        {"VX-008"}
      </text>
      <path
        className="st0"
        d="M655.1 661.9h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM639.9 665.8l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st0"
        d="m655.5 676.4-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st16"
        d="M647.7 660.9v10"
      />
      <path
        className="st17"
        d="M638.7 652.9h18M647.7 653.9v8"
      />
      <text
        transform="translate(629.367 691.916)"
        className="st7 st8 st9">
        {"VX-009"}
      </text>
      <path
        className="st0"
        d="M663.1 763.6h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6V762c0 .9-.7 1.6-1.6 1.6zM647.9 767.5l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st0"
        d="m663.5 778.1-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st16"
        d="M655.7 762.6v10"
      />
      <path
        className="st17"
        d="M646.7 754.6h18M655.7 755.6v8"
      />
      <text
        transform="translate(637.372 793.68)"
        className="st7 st8 st9">
        {"VX-010"}
      </text>
      <path
        className="st18"
        d="M662.1 669.4h13.3c2.8 0 5 2.3 5 5v46.4"
      />
      <path
        className="st18"
        d="M662.1 571h13.3c2.8 0 5 2.3 5 5v100.4"
      />
      <g className="st19">
        <path
          className="st20"
          d="M678.5 718h3.7v11h-3.7z"
        />
        <path
          className="st20"
          d="M687.5 712c.7.7.7 2 0 2.8l-5.6 5.6c-.7.7-2 .7-2.8 0l-5.6-5.6c-.7-.7-.7-2 0-2.8"
        />
      </g>
      <path
        className="st3"
        d="M705.8 239.2c0-27.5-41.4-50-92.8-50s-92.8 22.5-92.8 50h.7c-.4 1.4-.7 2.8-.7 4.4v129.3c0 14.4 17.9 26.4 40.3 28.1v14.6H588v-14.3h47.5v14.3H663V401c23.6-.8 42.5-13.1 42.5-28.1V243.6c0-1.4-.4-3.1-.7-4.4h1z"
      />
      <path
        className="st0"
        d="M577.2 256.1h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM562 260l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st0"
        d="m577.6 270.6-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st16"
        d="M569.8 255.1v10"
      />
      <path
        className="st17"
        d="M560.8 247.1h18M569.8 248.1v8"
      />
      <path
        className="st14"
        d="M584.8 265.3H632M632 466.3h-18.8c-2.8 0-5-2.3-5-5v-95.4"
      />
      <text
        transform="translate(551.457 286.103)"
        className="st7 st8 st9">
        {"VX-001"}
      </text>
      <path
        className="st0"
        d="M655.3 256.1h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM640.1 260l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st0"
        d="m655.7 270.6-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st16"
        d="M647.9 255.1v10"
      />
      <path
        className="st17"
        d="M638.9 247.1h18M647.9 248.1v8"
      />
      <text
        transform="translate(629.508 286.103)"
        className="st7 st8 st9">
        {"VX-002"}
      </text>
      <path
        className="st0"
        d="M577.2 355.3h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM562 359.2l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st0"
        d="m577.6 369.8-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st16"
        d="M569.8 354.3v10"
      />
      <path
        className="st17"
        d="M560.8 346.3h18M569.8 347.3v8"
      />
      <path
        className="st14"
        d="M584.8 364.5H632"
      />
      <text
        transform="translate(551.457 385.319)"
        className="st7 st8 st9">
        {"VX-003"}
      </text>
      <path
        className="st0"
        d="M655.3 355.3h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM640.1 359.2l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st0"
        d="m655.7 369.8-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st16"
        d="M647.9 354.3v10"
      />
      <path
        className="st17"
        d="M638.9 346.3h18M647.9 347.3v8"
      />
      <text
        transform="translate(629.508 385.319)"
        className="st7 st8 st9">
        {"VX-004"}
      </text>
      <path
        className="st0"
        d="M663.3 457h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM648.1 460.9l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st0"
        d="m663.7 471.5-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st16"
        d="M655.9 456v10"
      />
      <path
        className="st17"
        d="M646.9 448h18M655.9 449v8"
      />
      <text
        transform="translate(637.513 487.083)"
        className="st7 st8 st9">
        {"VX-005"}
      </text>
      <path
        className="st18"
        d="M662.3 362.8h13.3c2.8 0 5 2.3 5 5v46.4"
      />
      <path
        className="st18"
        d="M662.3 264.4h13.3c2.8 0 5 2.3 5 5v100.4"
      />
      <g className="st19">
        <path
          className="st20"
          d="M678.7 411.4h3.7v11h-3.7z"
        />
        <path
          className="st20"
          d="M687.6 405.4c.7.7.7 2 0 2.8l-5.6 5.6c-.7.7-2 .7-2.8 0l-5.6-5.6c-.7-.7-.7-2 0-2.8"
        />
      </g>
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={161}
        height={143}
        xlinkHref="data:image/png;base64,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 AAMAz9xZBCvOUD0AAAAASUVORK5CYII="
        transform="matrix(.979 0 0 .979 325.03 354.08)"
      />
      <path
        className="st1"
        d="M384.1 363.3H341c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V369.6c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Presión de Entrada */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(0, "Presión de Entrada", false)}>
        <path
          className={getTarjetaClass(0, selected)}
          d="M334.8 370.7h138.1v99.8H334.8z"
        />

        <text
          transform="translate(386.408 456.01)"
          className="st7 st8 st21">
          {getScaledValue(datosScada.d0, 1)}
        </text>
        <text
          transform="translate(437.533 455.615)"
          className="st7 st8 st22">
          {" Bar"}
        </text>
        <text
          transform="translate(388.74 391.052)"
          className="st7 st8 st9">
          {"PT003"}
        </text>
        <text
          transform="translate(372.466 411.532)"
          className="st15 st8 st22">
          {"Presi\xF3n de"}
        </text>
        <text
          transform="translate(377.875 427.132)"
          className="st15 st8 st22">
          {" Entrada"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(0, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(0, "Presión de Entrada");
        }}>
        <path d="M350.5 443.9c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M348.8 442.9c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM360.1 441.6c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M360.7 439.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM361.6 448.9v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM356.6 456.4c.9 0 1.7-.8 1.7-1.7H355c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presión de Entrada */}

      <circle
        className="st23"
        cx={403.7}
        cy={509.9}
        r={9.2}
      />
      <text
        transform="translate(591.484 527.46)"
        className="st7 st8 st9">
        {"FIS-02"}
      </text>
      <text
        transform="translate(591.483 220.863)"
        className="st7 st8 st9">
        {"FIS-01"}
      </text>
      <path
        className="st4"
        d="M911 1109.3H779c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.7 3.8-6 3.8z"
      />
      <path
        className="st15"
        d="M912.3 1109.3h-133c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.7.3.5.9-.2.9z"
      />
      <path
        className="st14"
        d="M548.8 669.5h-46.3c-2.8 0-5-2.3-5-5V271c0-2.7 2.2-5 5-5h46.3M498.1 572.2h51.3M497 364.2h51.3M806.8 466.2v299.6c0 2.7-2.2 5.1-5 5.1H679.4"
      />
      <circle
        className="st23"
        cx={806.1}
        cy={722.9}
        r={9.2}
      />
      <path
        className="st14"
        d="M280.9 1417.9H69.6c-4.3 0-7.8-3.5-7.8-7.8V831.9c0-4.3 3.5-7.8 7.8-7.8H1379c4.5 0 8.1-3.7 8.1-8.1V472.2c0-4.5-3.7-8.1-8.1-8.1H805.8"
      />
      <path
        className="st5"
        d="M1380.9 645.9c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
      />
      <path
        className="st1"
        d="M1392.6 645.9c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <circle
        className="st23"
        cx={1142.7}
        cy={465.6}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={161}
        height={143}
        xlinkHref="data:image/png;base64,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 umZduAAAAABJRU5ErkJggg=="
        transform="matrix(.979 0 0 .979 1065.364 309.08)"
      />
      <path
        className="st1"
        d="M1124.4 318.3h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V324.6c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* E.C. de Alimentación */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(9, "E.C. de Alimentación", false)}>
        <path
          className={getTarjetaClass(9, selected)}
          d="M1075.1 325.7h138.1v99.8h-138.1z"
        />

        <text
          transform="translate(1119.553 410.886)"
          className="st7 st8"
          style={{
            fontSize: 15
          }}>
          {getScaledValue(datosScada.d9, 1)}
        </text>
        <text
          transform="translate(1128.867 345.927)"
          className="st7 st8 st9">
          {"AE009"}
        </text>
        <text
          transform="translate(1125.544 366.407)"
          className="st15 st8 st22">
          {"E.C. de"}
        </text>
        <text
          transform="translate(1111.044 382.007)"
          className="st15 st8 st22">
          {"Alimentaci\xF3n"}
        </text>
        <text
          transform="translate(1165.684 410.49)"
          className="st7 st8 st22">
          {" mS/cm"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(9, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(9, "E.C. de Alimentación");
        }}>
        <path d="M1089.6 398.8c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M1087.9 397.8c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM1099.2 396.5c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M1099.8 394.7c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM1100.7 403.8v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1095.7 411.3c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin E.C. de Alimentación */}

      <circle
        className="st23"
        cx={1315.8}
        cy={465.6}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={161}
        height={143}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKMAAACRCAYAAACv3ggmAAAACXBIWXMAAAthAAALYQFbeSumAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB2hJREFUeNrsmwlz2kgQRiUxgE0c J7vJ7v//f7u5fGBzSSu2eiqf26MDh7gs6b2qLhlwJCMefYyULAN4I+RvfH8wHKpf3UE4s3TICC+W NH+hhPmJr8E0ZKtaXu+UMpwoYu5+zhteg+nKWLUIWJ1DxtxFIZHLNkfGycoYJSxlW8rjTiHDiSLO XAQTcebkhOnJqPId6ti7bdklZDhRxOPvzy0WFvG50JIdEXS8A4lmxCjfro6txc5iL7Imhewr40wE vJC4rGNpEez3vIyIOI0+cS8iPtbxINtYMfeSRZ8JGXqKGEzEo3zv6riSWJmYcynbyDgtGUsn4r3F nbRwfsA5KTP6rHhhIn6o46Ntj/FeMmSQ3hERpyFlJeV5Y5nwto4bcyJWSz/c5F7s0CFiHE5iVjyK 90cdn+v4ZD9fm6QXLaUapiFjzIo3VjHn5oEfag6p7NhHxmCGr0y8o4B/1fG3CfnByjUyIuOjleYr cya31/xAs09lx64yrSVaZfxkQn62x6nMSJkef8+oyzqxX4wuFCbi1p5fWwnf2O8e+vSMvkRrZryy THgU8E+T8qP9ATpRM7xMKzNWJthG+sSDPb63HnJlP69lqClP7Rnn0jOurG+8NimvLVbZzzVHLg1O b6KOfeDCRCstI96bL+/Mn4X5lGzlmjJjlj1f6I7Z0celLO3MMq7CTFHIOKAU9tw24cgye7r8pysu nT2jXn+O64zLRMwlCoaXScqocu0bPFkkBtzOzOizo/aOwckX5ABcm54eeULKNk9Cgyf/Z8ei40D+ Dh29SaLIuFsHml3p8iVZilM7bTtI3mfHMOlMmRKzKXHlTTL2gVIMp8rZW6xTUzFLN9A3OzZ588sy th0UKaHNjV5+FD13jGzw20t3wbmBtwIyAjICICMgIwAyAjICICMgIwAyAjICICMgIwAyAjICICMg IwAyAiAjICMAMgIyAiAjICMAMgIyAiAjICMAMgIyAiAjICMAMgIyAiAjADICMgIgIyAjADICMgIg IyAjADICMgIgIyAjADICMgIgIwAyAjICICMgIwAyAjICICMgIwAyAjICICMgIwAyAjICICMgIwAy AiAjICMAMgIyAiAjICMAMgIyAiAjICMAMgIyAiAjICMAMgIgIyAjADICMgIgIyAjwG+UseJUwVuQ sUJWOCPVOcp01bAzRISzJKpTynRTAKRc8Qms05eiZUddEiIknJLAXpwZU8KVdRzcNnVA5JxuKa5a 3Km6fAk9zI7yHWNfx862e3vOHyAfoZD5a/ZOI8iC3plDIoE9m0O6ZCydhMfYWuwkgmXZfIQnOvXl yl8oXzViGUtJUruG2DspnxB6WH4QCR/reJA4Pr6w/eR2EC9lPgIZ8wY58w7hqpZ+fExTcuk82ThP NpLADk3noiszalY87nRdx30ddxarOhYiYsyQxQhkzGVbiJQa1QtWH8YiZZXIihvnx509jolr19De 9cqM0fZo+nHnt3X8qONdHUv7oEop1zORMR+4hFHEmXzJNPKWkuXjkGjmxyBjKZ//oznyQ+LWImbI nfyb3pmxdMY/2E6/WUaMIh4sBV/WMbcPbjbgzJg7EeMXLEjMJPJENdH+SYe9vZzXagQiaoneiiPf 6/i3jq/my61V1U0iM3bKWLn0u7Wd3VqPuJCMuLHXoozBlbUhiziz9zS397y07cKeq+S96vnSQW8r GWEnspYDH2r85Oxl/FLHPybjjZXrx0TfWJ0qYxQuiGyl/QH3lo4v7UMag4yFZMWFfQEvrCKs5PFc hrdKRHy0WPdo4sck49rK9I1lxS+2vbHXtlIdTh5g9EDaO1Vy0o8HurKsMeTM2JQVl/ZFu3KxEyEL 1zetE038WjLkfgQDTfybD+LIowwwvm/UMp1sVULHAUv5oKL5sS+K2fLGPqylG2CGnhmDiXZp2fB9 HR8sYpZL9c5rGfL8h/EgMo5hkNEeObYj+mW8l2m6dXjpkxl9g9rUIyxaSnQ+YBljiT6uHFyLVLEM X9nrMzsnOk1+s/jueqbtyGTUaVrXozVi73xoe9+hZyouXZ+gaXnupswhL3prqZ6JjCuT8c4t5l47 GXXF4auFyriRnvEw8H4xS6wzHtwAl7ry0riSEE78BqSuyhTZ08XuVHkempDxvcQp+lL6Ph1Obhtk /C7LGt9N4s6eaYAiejdKeX/+mnRnJQg9D15lT6866DXrInt+lWKo+CsssW+MPc9G+qJ7y3gX0jP6 Mh37RV3WGEuJ9nJWTjovYNm1o/DCg6qU+YB7xK6+0ZcZjTjALSUzbrKfV6lupDw/SNkawxpjkxdZ 9guXP8MLD6xSZgMvy11Car/jr9XH4U3XXR9kivQijmF9sU/ZTm3PLmPTAccmo+8fSyfjVrJi7Jfj ordOkX6hu8zGdxvZ2f5PVHhrf9AblNHfNKpXWeK1+NwNdjtZwtl3LWnAuDLYaw018cqM3iyht8uV id6yRMTXzYxjpmqYGnUVQWX0t5BliEhmfI2ln9T5KxOTJSDjb5eyTyYFAAAAAIAz8Z8AAwD1MXVA JavHBQAAAABJRU5ErkJggg=="
        transform="matrix(.979 0 0 .979 1237.697 310.08)"
      />
      <path
        className="st1"
        d="M1296.8 319.3h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V325.6c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Temperatura */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(13, "Temperatura", false)}>
        <path
          className={getTarjetaClass(13, selected)}
          d="M1247.5 326.7h138.1v99.8h-138.1z"
        />

        <text
          transform="translate(1301.863 410.886)"
          className="st7 st8 st21">
          {getScaledValue(datosScada.d13, 1)}
        </text>
        <text
          transform="translate(1300.176 345.927)"
          className="st7 st8 st9">
          {"TT009"}
        </text>
        <text
          transform="translate(1282.353 374.002)"
          className="st15 st8 st22">
          {"Temperatura"}
        </text>
        <text
          transform="translate(1353.993 410.49)"
          className="st7 st8 st22">
          {" \xB0C"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(13, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(13, "Temperatura");
        }}>
        <path d="M1265.9 398.8c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M1264.2 397.8c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM1275.5 396.5c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M1276.1 394.7c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM1277 403.8v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1272 411.3c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Temperatura */}

      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={161}
        height={143}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKMAAACRCAYAAACv3ggmAAAACXBIWXMAAAthAAALYQFbeSumAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB3ZJREFUeNrsmwtzolgQRgEhJk4y r92t/f//b3Y2iYlGo7BY1bf2s+fy8LUb8JyqLnCiIHLo231hkgQAAAA+KOlAtgnDoDrlw/kFpENG OErS/AQJ0wYBkRHpmgSszjmkphLhdRYRFCGvV0Rdlu511SZkfqSIWUN4WeG6ZKxEwli0Zsj8QBGD dLnExCJ3QlJLXlcdqCJu6thabCRUyuoYGVXEIGBRx43F1F4XJmXWo66E8ckYRNsJ+G6xqmNtkTkp f9lGfqCIQcLbOu7qmNny1v49CBkbrpFx3M2KiriT762OZR0LW76JA1Eh854ihmH4xgS8t3iw5ScR smm4RsZxyxiG5CDiax0vdcwtSWVuOE+8kH0z48Q2eGfyfanjWx1fbf3BJJ1KdkxoZq6qcdnK0Lww CZ/MiYnLoCHSPplRJQpD9NRkfDAR/6jjd1v/ItmxoLO+ahlDVnyyBFVIFty45qYUP6o+mXEiMu6E +1zHdxPxzzp+swx53yAjQ/T1yfhiIt7Ye7SWDBGkbM2MaaReLEzGmcn41WQM2TEmY4KMVyVjKTIG ETMTbiXNzMLe825/79XAJA0yhprxqw3R3+31vb0nR8arlXFj4hUi4ps0Mr6vCO85qJsOw/StCPng YibFKvXi9QkZpnZyO++liHhvfty6hJVqE9Mlo07rFCLkXfLrPOPUUvOEjHjVdWNoVtbihzpSJP/e udMbJAdN7eik91TkKxp2gIjXRSlOFS2u5G70TA6d2vEZMk/i96czbztcDaFP0GcVNHzCypxrVdYi oe+sfYftsyB14nVzqitpdoYdIh+cxZWsx8aSjg0iJCQ9nIg5tPe+7Mgd8FQOtHmSNHjSmriyE6xn qIazOpIdsGGASw7jRw/TAGeT8JRhGuAiICMgIwAyAjICICMgIwAyAjICICMgIwAyAjICICMgIwAy AjICICMAMgIyAiAjICMAMgIyAiAjICMAMgIyAiAjICMAMgIyAiAjICMAMgIgIyAjADICMgIgIyAj ADICMgIgIyAjADICMgIgIyAjADICICMgIwAyAjICICMgIwAyAjICICMgIwAyAjICICMgIwAyAjIC ICMAMgIyAiAjICMAMgIyAiAjICMAMgIyAiAjICMAMgIyAiAjADICMgIgIyAjwJllrCwA/jcZkRDO RatL2Qkb9AFwkpQM03BJ2Q5KWFlP+aqOHSWICh2udCa0vGVDfoNlQ1SyBGiSruqSs09mVBm3LlRI 6kcErCLJq82Vvc/mPXagG9xYvMv6xu1MJU85R1cnovclth6VMj9gB0HCdR0ri7WIuXWZNh1Jlkwb 1k+tpcYoo09YMVd8lkz6yJhERNxt9K2OpcTu9W0dE/lMduYT+RFkTN161zFVkeVYmr2qZQRdN3ji k1d5aGYsxfa17eDVYm5xJ9spbX1y4In7yCL6yCyaLrSqofEb29ysfv9SklZw5EVi93phf1tHyrpG Gf1wspWsuLQNP9fxaCIWdjLCVXETOWFDF3FixzNx62mkCdTZhW2kiN+ORMgqMkSHhLUT8G+LR/Pl xYRcyXDdOzN641e2sbmIGMTb2pcI/5a7kzk0IVNpxIKAhR2XLicNmXErF/HGLVXMIQ/ZVaSUCzLO TcQfdfxl688RGfdGjD4149bJ+GzCaUYMV8PM/jaRzJgOMDPqkBzE2x3X1Orjqb0OF14mDZueGK2f OmumAc8l6jEvzIVHE/GHyPhqv4Vmxs4GxtcDYUdL+0wuGXFlO/kUyYzZAGX09WFh8k3tGGcWd5Hj rdxvtbSTs7DfaCWZoRz4cF1FEtbalXJhqP7pMuMmUkt3NjCJ1DnvtqNwokqXLWeWNWKZcWgdtc+K t3Z8OxkfJDZyzEFGrZvmElrE++w4hk56IyNBKOee3XJp79n45qVPzajm+yF3K03Ns2SJQor7dMCZ MdSLN3ZsOxHv6/hSxzcZdmcytRVKlnCBPllmeJKucuk6yjFkRk1Ya/kNFnIRLtuyYt95Rs2O/koI Mk5luMpb6sWhZsY7yYovbo713v4eZFxKzRSGqL8lOy4HnhljMy5+wlsnu7Ve3rRdhPkBO/Y1jk75 5DK/OEn2J72HKmMqXXSoFz/LVR7iISLjXET8KdMbr21TGwMV0WdHfxdGbx1vk5YHa/IDvkDpOkYt WjNXJ2Yt0yVDkzG3rP8iIr7JUPQ5ImOYh/0pw7SvmYYqY9N0VOnc8A/WdDZs+ZFfonTDdTbwhqWr bixEoo2b7lpGasZQLz5azCPTGkOf2mma6vF3nXrPGuRHXg1Vsv8ghL8XPfSndVJXOxZuuHmXaYy5 DeMTN9U1jzQu725aJxmZjD5h+fnIs8nYVTMMdUjukyFLaThUxtdk/05UKZJqJxmK+ZBRx/jcZ9XD k+TcMnbtLB3RDx1k1IbDT/Dq3ajKTW+EBwN8RhzrQ8gnHVP+0b7QB/xxUxHNN2+rZP8pJZXVd5Jj F/FstRH0+60yiTB7kEeE3biuskz4f0LIeMEu269rNi1dJiUbIuPF6PNwrYoJyPif/XbpKV0kIOOl fz9EBBgq/wgwAEtXe1wMaZWBAAAAAElFTkSuQmCC"
        transform="matrix(.979 0 0 -.979 1002.704 621.389)"
      />
      <path
        className="st1"
        d="M1099.2 612.1h45.1c3.5 0 6.3-2.8 6.3-6.3V503.5c0-3.5-2.8-6.3-6.3-6.3h-53.7c-1.3 0-2.5-.4-3.5-1.3-6.4-6.7-6.4-6.7-12.9-.2l-.4.3c-1 .8-2.2 1.2-3.4 1.2h-51.7c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h80.5z"
      />

      {/* Caudal de Alimentación */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(7, "Caudal de Alimentación", false)}>
        <path
          className={getTarjetaClass(7, selected)}
          d="M1012.5 504.9h138.1v99.8h-138.1z"
        />
        <text
          transform="translate(1061.907 592.144)"
          className="st7 st8 st21">
          {getScaledValue(datosScada.d7, 1)}
        </text>
        <text
          transform="translate(1064.364 524.48)"
          className="st7 st8 st9">
          {"FIT008"}
        </text>
        <text
          transform="translate(1110.744 592.083)"
          className="st7 st8 st22">
          {"m3/h"}
        </text>
        <text
          transform="translate(1052.829 545.062)"
          className="st15 st8 st22">
          {"Caudal de"}
        </text>
        <text
          transform="translate(1042.995 561.769)"
          className="st15 st8 st22">
          {" Alimentaci\xF3n"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(7, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(7, "Caudal de Alimentación");
        }}>
        <path d="M1027 581.1c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M1025.3 580.1c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9.7-1.3 1.8-2.2 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM1036.6 578.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M1037.2 577c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM1038.1 586.1v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1033.1 593.6c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Caudal de Alimentación */}

      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={161}
        height={143}
        xlinkHref="data:image/png;base64,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"
        transform="matrix(.979 0 0 -.979 93.926 1576.45)"
      />
      <path
        className="st1"
        d="M190.4 1567.2h45.1c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-53.7c-1.3 0-2.5-.4-3.5-1.3-6.4-6.7-6.4-6.7-12.9-.2l-.4.3c-1 .8-2.2 1.2-3.4 1.2h-51.7c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h80.5z"
      />

      {/* ORP Alimentación */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(14, "ORP Alimentación", false)}>
        <path
          className={getTarjetaClass(14, selected)}
          d="M103.7 1460h138.1v99.8H103.7z"
        />
        <text
          transform="translate(154.757 1547.205)"
          className="st7 st8 st21">
          {getScaledValue(datosScada.d14, 1)}
        </text>
        <text
          transform="translate(158.45 1479.54)"
          className="st7 st8 st9">
          {"AE018"}
        </text>
        <text
          transform="translate(209.59 1546.144)"
          className="st7 st8 st22">
          {"mV"}
        </text>
        <text
          transform="translate(160.988 1500.123)"
          className="st15 st8 st22">
          {"ORP"}
        </text>
        <text
          transform="translate(136.295 1516.83)"
          className="st15 st8 st22">
          {" Alimentaci\xF3n"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(14, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(14, "ORP Alimentación");
        }}>
        <path d="M117.9 1536.2c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M116.2 1535.2c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM127.5 1533.9c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M128.1 1532.1c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM129 1541.2v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM124 1548.7c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin ORP Alimentación */}

      <circle
        className="st23"
        cx={172.8}
        cy={1418.2}
        r={9.2}
      />
      <circle
        className="st23"
        cx={1080.4}
        cy={465.5}
        r={9.2}
      />
      <path
        className="st5"
        d="M865.5 471.4c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st1"
        d="M865.5 459.7c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st0"
        d="M322 1395.3c0-6.7-7.8-12.1-17.5-12.1s-17.5 5.5-17.5 12.1h.1c-.1.3-.1.7-.1 1.1v37.6c0 3.5 3.4 6.4 7.6 6.8v6.2h5.2v-6.1h9v6.1h5.2v-6.2c4.5-.2 8-3.2 8-6.8v-37.6c0-.3-.1-.7 0-1.1z"
      />
      <path
        className="st14"
        d="M329.9 1417.7H349"
      />
      <path
        className="st0"
        d="M368.4 1408.5h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM353.2 1412.4l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st0"
        d="m368.8 1423-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st16"
        d="M361 1407.5v10"
      />
      <path
        className="st17"
        d="M352 1399.5h18M361 1400.5v8"
      />
      <path
        className="st4"
        d="M508.4 1385.9H491c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
      />
      <circle
        className="st1"
        cx={487.6}
        cy={1400.4}
        r={10.9}
      />
      <circle
        className="st6"
        cx={487.6}
        cy={1400.2}
        r={8}
      />
      <text
        transform="translate(474.457 1440.106)"
        className="st7 st8 st9">
        {"P005"}
      </text>
      <path
        className="st14"
        d="M373.3 1418.4h94.3"
      />
      <circle
        className="st23"
        cx={409.4}
        cy={1419.6}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={160}
        height={143}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAACRCAYAAABAHGMYAAAACXBIWXMAAAthAAALYQFbeSumAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB2RJREFUeNrsm4lym1gQRQGhxXac ZCaZ+f//S028RtbOQFV36qbzEEj2TAI6p6oLLTYy6NDLk5xlAAAA8BuR/+b7g+FQveaXyzcWDhHh LEHLMwXMW8RDRITre/9sEfNEFHIbERHRtwfbahyVsTxBwkK2k7CNQpIlL6/cuoBN7MPWn2uVsY+I UcDSYiq3JxaU7MstwXuJncVWbsdseZKIhcTE5JvXMbPtwh5zKfNEZkTCccvopdcF3FisJQqT0rPi TzKWPXrCQjJgI95VHTd1XFssTMypZEV6xssRspJM6AK+1LGs45s5sTIXNvbzeRS6S8RCRFyYgLd1 vLe4NRmvJCsWZMSLyogHyYZrEfDREpQ7kSWGmM6MqCV2Yju8Nvn+qONP234wGa+sVJcdgwuMT0gX cWuZzyX05FTIz+xlgPkhK3aJWJiECxGxkfDvOj6LjNcm4jTRJyLkuJdqKinLTUl+ruPefJjYz+1C HGJWLDsknEhveGPSfarjL5Pxkz12kxARCS9HRhXxyXwp7TnPlD64bETG71mx7JiYyyBikxE/moCf LdoyIj3i5UzNKqJKuJGecWmxsgS37+oRY3/oSzaNiO9MvA8m5EcRccbUfNEZcSdzgkrY9IsPsroS 54jOHlEXsOeSFX1yvjUxb0JjSka8vIzow4j3hFvLju6HV0wVsdCs2FdEz4pzk85jISV5mli6gcvg YO99ZZlxkXDEJYyfwh0VMQvlWWWciXjTxM5Zurm87Ojvt7dyM9mqM5O2ZFUe6Q8zyYoa8fNlJLxs ulyZdLiS+y93vUAs1UXCbIYTiB60fUOrdYmmz87zLL1QzYQMqaR1LM4SMW+xnRIMfTNjr1WU4gzj KcXQV8KsS8BTS3NMu8gIfSTs2p5VmgHeup88uTQD/KcgIiAiACICIgIgIiAiACICIgIgIiAiACIC IgIgIiAiACICIgIgIiAiACICIgIgIiAiACICIgIgIiAiACICIgIgIiAiACICIgIgIgAiAiICICIg IgAiAiICICIgIgAiAiICICIgIgAiAiICICIgIgAiAiICICIgIgAiAiICICIgIgAiAiICICIgIgAi AiICICIgIgAiAiAiICIAIgIiAiAiICIAIgIiAiAiICIAIgIiAiAiICIAIgIiAiAiICIAIgIiAvwa EStOEfwuGbEKt6vwOLLCKVSvKc1Vy30khGNedG3PKs1kQjhHxl5tXt/SjIRwroy9hCx6ytfEvo5D S1TIiXjBF41OR4oOAV20vcXOYp+QEBkRUaXbizuphFWdkhFVxEbAbQiVEhkvU0AVz13YiS+7lgT2 Q/Yse7yI73Bjsapjbbf1hXL7vXxEJ1qPKX/lGzbm/nofkpW7sk64kizT5ZGTpiK6gC91LCWu65jZ m1TZ/uKblg9cxLxFyPyEZn1MIqaGD5dwbY6oJy/mziZRQY+KqNlwL4Y3O3y2eKzjpo65lXcXtrT7 fd+woUhYyHEV4bn8yEVcjbSXTs0RW3HkyRx5svvLhIw/nIdjpVl7w5XtrNnxg0g4sZ01f8Sijml4 04Yqogo4SUQhEc+Zxk7K1lh66VS230myahz5WsddHffmy7M9tzZXemXEKizZbEXERyvHUcJ3JuJs 4CLq36ziTe3YphalRRWO79hgtxUhxyTjXkR0RxoJv9Txj8n4aM+tEwPLSaW52cE3ezNmQcLmBW5F xIlkinyAImo2dPHmdnwLOc5ZaEViK7O2C3jVt2EfaEY8iCNeNe9Nwi8m5ZM9twkZ8fs56Ds1+4u4 ZJX0BE9Wqr00TxJ94tAkzO3cuIRXdowe1yadX3i5vCEu3zcJbdi3I8qKqUHl2crxvUl4J6V5Ixkx 65sRMxGxsB3lMq57lnywN2ouPeJkoJNzLmW5NNEWJl/Tfry3uA0XXy7n5EUGOm3YXcZt2+Q4wKn5 kFhZWcrxP8mAmzr2XsOKZ8TcdqCP7+Sqdwm9VE1aJsqhinht0jUCfpQJcGWP+/KVnxPNCN6sP4XJ cegZsUpUzW3LMl/qAsz6ZsQ4CUY5t3L1z6SBbyvLQ86IV5INtcy+2OO+hLWVHslL0leTUUUcU0aM 5XmX/byQvekzqJU9XzR+JLOTHnGaWNbIsuEuaudhWl6YcM9yhfsV76sFnhGXlgHvrFm/k4zoyxfJ dbSBShjXEnXFYB8EPLp0VZ7w4ofEFVAEAdvK8dAyombFeaLMeB+YEvFRMuKD3dceaSxTc6yautKS +oZWduyYyxNfXEf2Qpr01EdhQ0T//sLOT/xyh5/sjbQmhYjoi/4PYTF3lciGY/jcOeVG1ZIBW4+3 PPNK0J2P7bPl2CvGRemNDCVXQUQf4J57Tstj+QLEq/+vqXzli6buj+HbN7lk+xi6wD9PLN/o1OiL 2almfUxUJz7+JiJmI7ua247NZayy9CdNSxnU8rCethYBW9fOLkDEk0sRdA8vhQwwGvEjvvhF0LFL +KY9EfSXMRVxGYP/6UHE/2WabvvkqDoSgIhvnh3bzl/b9AiI+EvOGwICAMCZ/CvAAFnRaJLfMFN2 AAAAAElFTkSuQmCC"
        transform="matrix(.979 0 0 -.979 331.701 1577.535)"
      />
      <path
        className="st1"
        d="M427.7 1568.3h45.1c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-53.7c-1.3 0-2.5-.4-3.5-1.3-6.4-6.7-6.4-6.7-12.9-.2l-.4.3c-1 .8-2.2 1.2-3.4 1.2h-51.7c-3.5 0-6.3 2.8-6.3 6.3V1562c0 3.5 2.8 6.3 6.3 6.3h80.5z"
      />

      {/* Presión Salida Filtros High Flow */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() =>
          loadGrafico(4, "Presión Salida Filtros High Flow", false)
        }>
        <path
          className={getTarjetaClass(4, selected)}
          d="M341 1461.1h138.1v99.8H341z"
        />
        <text
          transform="translate(392.236 1548.298)"
          className="st7 st8 st21">
          {getScaledValue(datosScada.d4, 1)}
        </text>
        <text
          transform="translate(393.507 1480.633)"
          className="st7 st8 st9">
          {"PT025"}
        </text>
        <text
          transform="translate(448.068 1548.237)"
          className="st7 st8 st22">
          {"Bar"}
        </text>
        <text
          transform="translate(346.492 1502.913)"
          className="st15 st8 st22">
          {" Presi\xF3n Salida Filtros"}
        </text>
        <text
          transform="translate(379.008 1520.34)"
          className="st15 st8 st22">
          {" High Flow"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(4, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(4, "Presión Salida Filtros High Flow");
        }}>
        <path d="M354.3 1537.2c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M352.6 1536.2c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM363.9 1534.9c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M364.5 1533.1c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM365.4 1542.2v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM360.4 1549.7c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presión Salida Filtros High Flow */}

      <path
        className="st0"
        d="M640.1 1293.7h13.1c-2-.3-3.6-1.2-4.8-2.8-1.2-1.6-1.7-3.4-1.3-5.4.7-3.7 4-5.8 6.8-5.8v13.1c.3-2 1.2-3.6 2.8-4.8 1.6-1.2 3.4-1.7 5.3-1.3 3.7.7 5.9 4 5.8 6.9h-13.1c2 .3 3.6 1.2 4.8 2.8 1.2 1.6 1.7 3.4 1.3 5.3-.6 3.7-3.9 5.9-6.9 5.8v-13.1c-.3 2-1.2 3.6-2.8 4.8-1.6 1.2-3.4 1.7-5.4 1.3-3.6-.6-5.7-3.9-5.6-6.8zM674.9 1293.7H688c-2-.3-3.6-1.2-4.8-2.8-1.2-1.6-1.7-3.4-1.3-5.4.7-3.7 4-5.8 6.8-5.8v13.1c.3-2 1.2-3.6 2.8-4.8 1.6-1.2 3.4-1.7 5.3-1.3 3.7.7 5.9 4 5.8 6.9h-13.1c2 .3 3.6 1.2 4.8 2.8 1.2 1.6 1.7 3.4 1.3 5.3-.6 3.7-3.9 5.9-6.9 5.8v-13.1c-.3 2-1.2 3.6-2.8 4.8-1.6 1.2-3.4 1.7-5.4 1.3-3.5-.6-5.7-3.9-5.6-6.8z"
      />
      <path
        className="st14"
        d="M514.8 1389.9H625"
      />
      <path
        className="st5"
        d="M625.7 1396.2c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st1"
        d="M625.7 1384.5c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <circle
        className="st23"
        cx={546.4}
        cy={1390.9}
        r={9.2}
      />
      <circle
        className="st23"
        cx={806.1}
        cy={586.2}
        r={9.2}
      />
      <path
        className="st5"
        d="M55.6 1113.2c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
      />
      <path
        className="st1"
        d="M67.3 1113.2c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <path
        className="st5"
        d="M420.5 818.1c1 0 1.9.8 1.9 1.9v9c0 1-.8 1.9-1.9 1.9-.5 0-1-.2-1.3-.5l-4.5-4.5c-.7-.7-.7-1.8-.1-2.6l.1-.1 4.5-4.5c.4-.5.8-.6 1.3-.6z"
      />
      <path
        className="st1"
        d="M420.5 829.8c-.2 0-.4-.1-.6-.3l-4.5-4.5c-.3-.3-.3-.9 0-1.3l4.5-4.5c.2-.2.4-.3.6-.3.4 0 .9.3.9.9v9c0 .6-.4 1-.9 1m0 2c1.6 0 2.9-1.3 2.9-2.9v-9c0-1.6-1.3-2.9-2.9-2.9-.8 0-1.5.3-2 .8l-4.5 4.5-.1.1-.1.1c-.9 1.2-.9 2.9.2 3.9l4.5 4.5c.5.6 1.2.9 2 .9z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={161}
        height={143}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKMAAACRCAYAAACv3ggmAAAACXBIWXMAAAthAAALYQFbeSumAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB1lJREFUeNrsm41S4lgQRnNDUNRR d92tef8H3B0HFUSEZJOtvjWf7Q0k/kyZ5JyqLhhAKODwdd+bTJYBAADAFyV80vMEPtpJUR3596fL GOTvkREZU/+u+sgZ3iFhaBESEZGykkr9O0nR88VyETCXCnKJkIhYuoq3HUzJoqeIsWZShV3q/TBN GVXAndXeShOyfI+MKmHzN3OrE6vCSRmYHyeXiFHCvUm4tXqWy717fG8ZVcQo4MLq3C5VyhnterKp uBMRH+va2GUMqa0IGXzLPiZjnA+jiKcm4EVd36ya62cm5VxeGBmnI2KUMaZgI+HK6t4F1DaxuOks o6biwgS8rusPu7yy284kHXO30oZxi1hZ4jUyPpmED3UtzYmZJKEuavZdk1FXzYWk4mVdf9b1d11/ 2fVLu+8UGSfboqOMGxFxIY75RU0pflRdZPSpeGFp2Ej43erGbrtwMtKmp5WOUcZHa83n5k2Q++Ki RoU82qZ1AZJq0TeWjN9NzCgjbXq6bboUGc/Nhdyka1r32upRVtfqSNU3GWObjkLemIxXrk2zmp7e 1k5MvzMnYmzbd5aYuuuy6zMz+i2dM0vAK6truX5mj0PGaQoZ9xe1NW9MwEvZddFRLtdFTHFk8RLb dJH92l88dxW3dU5la4cWPc1FTPzuS2vF3pETCSwd5VoXMCGRjoWk42mi2l4EpiOjijVv8WTuUvGF b123drRd6+HA2Ptj5dnrs3lgGkS5YidVT9SbWVtgdT0C46XUSy8gIk6PkPBF1xxtYfVibZEfkdC3 61SlHgvTFjMccSUcitYuyXhI1IxERMIsfaJ1OJCcL8Irf8eLBbZwoGfr7jR0vuUXgIjQNSF7rYC6 Wg7wXknDRyYjwKeAjICMAMgIyAiAjICMAMgIyAiAjICMAMgIyAiAjICMAMgIyAiAjADICMgIgIyA jADICMgIgIyAjADICMgIgIyAjADICMgIgIyAjADICICMgIwAyAjICICMgIwAyAjICICMgIwAyAjI CICMgIwAyAiAjICMAMgIyAiAjICMAMgIyAiAjICMAMgIyAiAjICMAMgIyAiAjADICMgIgIyAjADI CMgIgIyAjADICMgIgIyAjADICMgIgIwAyAjICICMgIwAyAjICICMMAUZKz4q+KrJWCEovNGZ6iNk bHsyxIQP8SF/g4hNlVKICMec6eRJ3lG++IR7qzIhJAkJ3p/ygCu9k1GfMIq4k9ofkBIxpyegF2/v yt//YnFcdHyBKN/W6skun6129lyN3GHEH3h455c1hSSMgfXcUvtEQv5/vejxAs8m4KauR6lGzNO6 ZvJ34QO+vK8mYXDv7dj7qxISjrVjaGhpYEVXNi689qk5sjjyIaqI8cnXda2kzuqa2xcTH59/YKJ8 BQlj5e721Pt79Ys/UEMX0Mv4bI40XjxYrcyZGFxt6ZgVHWxXGZsnva/rrq5lXeci4t4S0rfrMFAZ vYS5pX8ulXpvunr081PZZ3U5EBm9J4/myE+rpfnyYPdtLUE7JaP/hauMK3viW0nEzB7T3L+w23L3 ZQ5xLgwiYKzCVZ6Ykys3tO9krt4nUqEaQTLGFv1kwjWO/KjrX7tcmoxre0z8LDono36wO2nRdybd iX0RUcRvIuMsIWMYmJCahnN7vyeW/vH6XNLSi7htWfDt2trUwJNxJ4F1b4H1j9WtebN+SzJWYnzp kjGmQmzNG7P+QiQdi4wq4sK6wbnVwsScy+KtlCSMw/vaLfae25JhoDKWTsY4yi0lHW/tNt+mX/wg +2ztPLm2VNoTr+yFL9yXEwbaqnVOLOz9LEzAJv0v7fLCbjt1c/PWDfH3Msg/ujZVjkzGrb3HlQi5 lDa9cTJmXWdGnQcyETJucWgsLy01Tuw5ZwOfGYPMiCf23hr5ruq6ltomFnEb92X8tBZ1LzNTTMcx rKx1gbaVuXElP8KV6wzJmbnoYL62n7YZYSEzVOG2QLKBJqOX8ZvJGAfxjVXsCME+E11N3lr9tNtW Mj/uRySjLnR1GzCWzsyt3aDoGMWZzI6pWJ4nVpipPbihSKmLF03Ga5kB40x46WRcWyLe2sz0Q2Rc u3QYapuuDqSjHq3TIy+7xA+w6iOjf8GQ2PIpWvbfhpaIqZkxtx/aqcmoi5HYiqKMuX0ea9na+GFS Lt0+2z4b11lPqT3VVPmDAb1nxrbzF3Xl2LYJPPQjLzNJx02i/TzIllaQTd87ScdlIhX32bhOv6tc yy6z1xv8/shU9hYZ2/5Yk7LMxnM8OrXpvcten51UypjiZ8YHEfJeBvhtS0pkI5KyapHv6GxcvPEX EK8fEzAMXMpYhZuHniUZz9xqOu616XFZ3dIY+v5i1+6Z9f3BFe988WrEMup78CcX67H6uJ2le69P 2cuzVcYs4iEZ39SSoNuCJm73zLNfR2Z0X9WfbqenTI1tTvy0+Qi6t+xZonK3qtSTJPj/Qsj4aZ9V 7rZ+8iPbHPw3DGT8LSnpF3BtJ9UCMv4WKQ9tcQAAAACMgf8EGAAjHUDmbo9PzgAAAABJRU5ErkJg gg=="
        transform="matrix(.979 0 0 .979 467.586 1235.142)"
      />
      <path
        className="st1"
        d="M526.7 1244.4h-43.1c-3.5 0-6.3 2.8-6.3 6.3V1353c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Presión de Salida P-005 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(11, "Presión de Salida P-005", false)}>
        <path
          className={getTarjetaClass(11, selected)}
          d="M477.4 1251.8h138.1v99.8H477.4z"
        />
        <text
          transform="translate(527.252 1336.077)"
          className="st7 st8 st21">
          {getScaledValue(datosScada.d11, 1)}
        </text>
        <text
          transform="translate(581.378 1335.681)"
          className="st7 st8 st22">
          {" Bar"}
        </text>
        <text
          transform="translate(531.584 1271.118)"
          className="st7 st8 st9">
          {"PT014"}
        </text>
        <text
          transform="translate(516.253 1290.49)"
          className="st15 st8 st22">
          {"Presi\xF3n de"}
        </text>
        <text
          transform="translate(505.16 1307.198)"
          className="st15 st8 st22">
          {" Salida P-005"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(11, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(11, "Presión de Salida P-005");
        }}>
        <path d="M492.3 1324c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M490.6 1323c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM501.9 1321.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M502.5 1319.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM503.4 1329v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM498.4 1336.5c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presión de Salida P-005 */}

      <path
        className="st15"
        d="M222.3 965.5h80v87.7h-80z"
      />
      <path
        className="st25"
        d="M302.1 950.9v99.8c0 1.5-.5 2.8-1.1 2.8h-77.5c-.6 0-1.1-1.3-1.1-2.8v-99.8"
      />
      <path
        className="st15"
        d="M335.5 965.5h80v87.7h-80z"
      />
      <path
        className="st25"
        d="M415.3 950.9v99.8c0 1.5-.5 2.8-1.1 2.8h-77.5c-.6 0-1.1-1.3-1.1-2.8v-99.8"
      />
      <text
        transform="translate(232.588 1074.553)"
        className="st7 st8 st26">
        {"TK03 - CIP"}
      </text>
      <text
        transform="translate(345.841 1074.553)"
        className="st7 st8 st26">
        {"TK04 -CIP "}
      </text>
      <path
        className="st4"
        d="M491.4 1008.9H474c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
      />
      <circle
        className="st1"
        cx={470.6}
        cy={1023.4}
        r={10.9}
      />
      <circle
        className="st6"
        cx={470.6}
        cy={1023.2}
        r={8}
      />
      <text
        transform="translate(457.457 1063.106)"
        className="st7 st8 st9">
        {"P006"}
      </text>
      <path
        className="st0"
        d="M552.4 1002.9h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM537.2 1006.8l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st0"
        d="m552.8 1017.4-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st16"
        d="M545 1001.9v10"
      />
      <path
        className="st17"
        d="M536 993.9h18M545 994.9v8"
      />
      <path
        className="st14"
        d="M500.8 1013.1H531M307.9 1036.1h22.2M514.6 1014v-61.4"
      />
      <path
        className="st5"
        d="m267.8 949.3-4.5 4.5-.1.1c-.8.6-1.9.6-2.6-.1l-4.5-4.5c-.3-.3-.5-.8-.5-1.3 0-1.1.9-1.9 1.9-1.9h9c1.1 0 1.9.9 1.9 1.9 0 .5-.1.9-.6 1.3z"
      />
      <path
        className="st1"
        d="M256.7 948c0-.5.4-.9 1-.9h9c.6 0 .9.5.9.9 0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-1 .3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6m-2 0c0 .8.3 1.5.9 2l4.5 4.5c1 1.1 2.7 1.1 3.9.2l.1-.1.1-.1 4.5-4.5c.5-.5.8-1.2.8-2 0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9z"
      />
      <path
        className="st4"
        d="M506.8 934.6v11.9c0 .7-.1 1.3-.3 1.3h-2.4c-.1 0-.3-.6-.3-1.3v-11.9c0-.7.1-1.3.3-1.3h2.4c.2.1.3.6.3 1.3zM510 946.9l3.7-6.4c.2-.4.8-.4 1 0l3.7 6.4c.2.4-.1 1-.6 1h-7.4c-.3 0-.7-.6-.4-1z"
      />
      <path
        className="st4"
        d="m518.5 934.3-3.7 6.4c-.2.4-.8.4-1 0l-3.7-6.4c-.2-.4.1-1 .6-1h7.4c.4.1.7.6.4 1z"
      />
      <path
        className="st14"
        d="M514.6 928v-58.1"
      />
      <path
        className="st5"
        d="m380 949.4-4.5 4.5-.1.1c-.8.6-1.9.6-2.6-.1l-4.5-4.5c-.3-.3-.5-.8-.5-1.3 0-1.1.9-1.9 1.9-1.9h9c1.1 0 1.9.9 1.9 1.9 0 .5-.1.9-.6 1.3z"
      />
      <path
        className="st1"
        d="M368.9 948.1c0-.5.4-.9 1-.9h9c.6 0 .9.5.9.9 0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-1 .3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6m-2 0c0 .8.3 1.5.9 2l4.5 4.5c1 1.1 2.7 1.1 3.9.2l.1-.1.1-.1 4.5-4.5c.5-.5.8-1.2.8-2 0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9z"
      />
      <path
        className="st0"
        d="M929 860.5h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6H929c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM913.8 864.4l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7V865c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st0"
        d="m929.4 875-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st16"
        d="M921.6 859.5v10"
      />
      <path
        className="st17"
        d="M912.6 851.5h18M921.6 852.5v8"
      />
      <path
        className="st15"
        d="M1273.5 955.8h124.8v97.7h-124.8z"
      />
      <path
        className="st12"
        d="M1398.2 939.2v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1V939.2"
      />
      <text
        transform="translate(1287.009 1074.553)"
        className="st7 st8 st26">
        {"TK-02 PERMEADO"}
      </text>
      <path
        className="st5"
        d="M1317 935.3c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
      />
      <path
        className="st1"
        d="M1328.7 935.3c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <path
        className="st14"
        d="M1247.9 1051.8v40.5c0 3.5-2.9 6.4-6.4 6.4H921.6M1248 870.6v183"
      />
      <path
        className="st5"
        d="M949.1 1104.9c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st1"
        d="M949.1 1093.2c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st4"
        d="M911 1138H779c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.7 3.8-6 3.8z"
      />
      <path
        className="st15"
        d="M912.3 1138h-133c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.7.3.5.9-.2.9z"
      />
      <path
        className="st2"
        d="M921.5 1129.8h7.4c2.8 0 5-2.3 5-5v-26"
      />
      <path
        className="st14"
        d="M768.5 1097.8h-12.6"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={161}
        height={143}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKMAAACRCAYAAACv3ggmAAAACXBIWXMAAAthAAALYQFbeSumAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB1RJREFUeNrsmw9zmlgURwFBjWmS bqfd7//9djdtbYwKCAsz9+3+8nwoJG2mwDkzdzQklUAO98+DRhEAAAD8psS/4DNiTuusqHtu+2Uy xvJvkREZQ1/XQ+VMXylh7AkZBb6GeYqpMUjKdKCISeA1uSAozE/ESkK/vipkOlDENhYWqbxfyPcB EUuLk8RVIdMBIjoBM4ulvE8tkkDphvmI6AQsmjjaaxu5CFl1CZkOFLEVcG1xY7Gy7alkSGScl4yV yVaaeK2Ie4uDeeCEjLqE7COjE3Fl8t028cGifb8xOZdSspFxXpN0JVmwle+5iV0TP5p4kgSVBwac XjJqVsxMxla+hyY+2uuDSbmx76feUAPzKNEuKx5NxFbArTgRe+U8OG1fklEHlqUJd2cifrb4o4l7 k3QtpZqpep4yHiwjbs2XzDzQMu4PM1czYyyZ0ZVoJ+OnJr408acJ+VFkzLylHpinjN8sgcVSwnOL wn428XvHazK6Er02Ge8tG342Gb+YjB9MWGSc7yTtJugnc2Fh23Mr3c8y0CxkmOmdGReBzPhgQn6y cJlRZWR4md8A4zLjUkQ8yiDjhpnMBI37yKglOpElHTdJ31mGdAPMvYm6lAEGGee3tFOaaAvb5kS8 M29uZKBZSAXtNcBomc5kaWcjSzob27aWX4RJep4yLqQPLAKOrMSlYCvXlRlDpdoJ6Ra53Wt2bScw eRk1AS29UGfSQMKKrw0wUXR+PzoTKZfRy9uAupyDjPPCTcx6p873JHTL2H8MsU4u7CDUP+oDEaGn dRBxvkLGAV+uOfOCpOcOkgsRM7Ag44UE1kvEkIx9MhsDCkRXKuoQn+I+mfFaKqY0w0/1JHml8QCv zZjxW2RERHgX+G8CgIwAyAjICICMgIwAyAjICICMgIwAyAjICICMgIwAyAjICICMAMgIyAiAjICM AMgIyAiAjICMAMgIyAiAjICMAMgIyAiAjICMAMgIgIyAjADICMgIgIyAjADICMgIgIyAjADICMgI gIyAjADICICMgIwAyAjICICMgIwAyAjICICMgIwAyAjICICMgIwAyAjICICMAMgIyAiAjICMAMgI yAiAjICMAMgIyAiAjICMAMgIyAiAjADICMgIgIyAjADICMgIgIyAjADvKGPNqYLfQcYaWeEnUv+M Ml1L+NsA3pyohpTpSuSrLAAuJa064E5vGUOZr5I4Weg2MiOERKwCngySsUtCJ2LphS8mpXveElYd yetSEvvPlfTKTtwHFha5xVG2OSlbsWOLKRK/8Y81BxFPkrSKQJQdmbK+JqOaXpqAbewtDhZr+Zxa sm08IQljO7a4p5x1QMKpVozaS1q5uOE8Odp2V1GD5yHtUfcLyYbPTewsnprYNLE0AdtfJpMMGY1c ytiLxNseOj7/ar8UU5qSXUZUR57Elb0IeeoagNMeJbqUjNjuYNvE9yZum1jZH6myDNnKuJA/0FjL ti+hi4W8Dx2bPz1q71R526cio2bFoznyTWJr256lvTuFhpq0RzNaiPE/bAcbEfFkxt94Mo5RRL2I VMCFnSuNRaAKdPVOZaCJH3uG9GXMJWF9beLvJh5FSF/GekhmjKRfzEXGtVeanahOxjQgYzwyITUb Zna8Llb2momoXb1TLuUpD6xAjF3G2pNRE9Y/TfxlQm6tXB/kHJxdjOmVHfm9gMsKrjTntpO7gIzJ BGTMRMAbqwgbuyCdlAsZcEqpJG7Qe/Z6ptIrU2OX8eTJuLM27tGEfJTMmMtEXfcp037zXdrJ1n6p tpO+tx3dXsiMYxMxlvKcmXQbO8b2ovtg729FyERamoOd+CfLEq6RD/VM1YQyo1tt2dlxf7fY2td7 Of5qaJnWRju2D3J/LL0Stibi8kKZHqOMqR3T2mS8t3iwyE1IlVF76630Sy4zHDqyw1SWdY52jG6a doOLO/aiKyv2kTGSVJxLH1l4PcJKRExG3i+GZLw1ET/KiXXraGvLoifb9mQZ4avFN69nmqKMlQxq Rzk/Bznm4lp7kg5IxZHt6CRXwt4kzGTC7BJxLFLq8OJnxp0s5O5tmy/jVkR8tFc/M1YjL9P+Yv4p sILgBCwCfXL9mmlad3yKzhfDU5kokxEPLaHMqNlxI4OIi52sLqR2wg+2zYn4aFnyR6CBn8qTT6Hb gV33pKNL1SAdeBVU3o5LryzHI5cxNMQso/9vaWnpcVPjjf1cGSjT3wNZ8RRN6xG82ivZdXS+wH92 H/q1MobSciw7moqEURRe9A6tDVbSpvhlWqfJrUzS/rJOFE3rXnXXLc/et0DTV14FKmWXgGOX0kUZ vXx8rhDpNt40rXchdlLaezXwE+gfo0AG7H2s6Rt/gXqiMuox+M/mFSLdSlYQ6ujlgrcry1MW8ZKM g0l/0S80lRIUR+f36k+SHfUedR2dP/tZdDTxMNHs9Z4lWx+c0NDeSJc4qolNzsj4G52nJDp/kKJr mWMqT+cg4wiypD+8dT1UC8j4LlJeWuIAAAAAmAr/CjAAG0VKiAU1IOsAAAAASUVORK5CYII="
        transform="matrix(.979 0 0 .979 763.588 943.142)"
      />
      <path
        className="st1"
        d="M822.7 952.4h-43.1c-3.5 0-6.3 2.8-6.3 6.3V1061c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V958.7c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Recuperación RO */}
      {/* Tarjeta */}
      <g
      /* className="cursorPointer"
          onClick={()=>loadGrafico(20,"Recuperación RO",false)} */
      >
        <path
          className={getTarjetaClass(20, selected)}
          d="M773.4 958.8h138.1v99.8H773.4z"
        />
        <text
          transform="translate(828.255 1042.077)"
          className="st7 st8 st21">
          {getScaledValue(
            datosScada.d7 > 0 ? (datosScada.d8 / datosScada.d7) * 100 : 0,
            1
          )}
        </text>
        <text
          transform="translate(879.38 1041.681)"
          className="st7 st8 st22">
          {" %"}
        </text>
        <text
          transform="translate(795.256 994.49)"
          className="st15 st8 st22">
          {"Recuperaci\xF3n RO"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(20, loading, datosAlarmas)}`}
        /* onClick={() => {onClickAlarma(20,"Recuperación RO")}} */
      >
        <path d="M790.3 1030c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M788.6 1029c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM799.9 1027.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M800.5 1025.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM801.4 1035v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM796.4 1042.5c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Recuperación RO */}

      <path
        className="st14"
        d="M558.3 1014h16.4c4.1 0 7.4 3.3 7.4 7.4v67.6c0 4.9 4 8.9 8.9 8.9h85.9l57.8-.1H756.9v27c0 2.7 2.2 5 5 5h6.3"
      />
      <circle
        className="st23"
        cx={684.4}
        cy={1096.7}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={160}
        height={143}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAACRCAYAAABAHGMYAAAACXBIWXMAAAthAAALYQFbeSumAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB2VJREFUeNrsmwtzm1gMRgHjxImT Nt3X//99O7PNO45fsHhW6n5RL2A7zW4x58xoSHACxTnWlQTNMgAAAPiJyD/oODlv7Wioe77/UBHz li0iImKd2N8rZ/kOATW6pIRxCanbel8hywMl9CgkctnmiDhqEXdRybaS7+suGcsDJFT5dr83CaFi wngl3MW2iY1tPfy1pIzlgRKWFtMmziymst9/jlpxfMuxCri2WMnXm/Cz9SEiRgl34p03MWviwrYz EXISlmkYTzZ0CXfyLZt4tVjY1n3Yytf1PiJqPegS7uS7bOLKYm7hMvqSjYjjyoiVZMKlyffcxFNw ImvrqPsyYmEHKS0T7iT81MRNE58trm3/TLIijcv4asNNkPDBnPGSrW5pYjozombDiWTDK5PwtyZ+ beKLyXhlr+vyTI04Dqog4otJODdvJmHp3sjvfFui91maVcRrk28n4h+2vbH9iEhGXFo2vLIV0iX0 2nEljUthcrZmxDzRpJxLbXhj2fB3iy8i4lnGTBER/5GwtNfW1qy82LK9tH1bGef0NiuT0KhcS434 iyzPVy01IoynWdmaZDPxamUCPlo82fexedmrRvSZ4cyyosuoMbesOWV8M0oZXcSpLMdraVrmlsjO Q/n2bXnuE9HvmkztIBcywvHweaJ3SCzL41yet9IbrFsc0RHfm7twZYuAUUa9m3IeQu+u0KiMV0Qd WLsbs4QnUcJ8n665yN7OEl3IaZAvda8ZEcdBLrViIT50ufLdqtm1NLcJmXrQgU4ZUp4ULa7Eh2Py feaIqUe/UuIh4LglTHkz6fDmDcUeJ+iLjGwILUJ2ufFmf3HkyciE0OdHdkhyKt5hPBLCMcv1u0RE OPgIQY/OiAAfAiICIgIgIiAiACICIgIgIiAiACICIgIgIiAiACICIgIgIiAiACICIgIgIiAiACIC IgIgIiAiACICIgIgIiAiACICIgIgIiAiACICICIgIgAiAiICICIgIgAiAiICICIgIgAiAiICICIg IgAiAiICICIgIgAiAiICICIgIgAiAiICICIgIgAiAiICICIgIgAiAiICICIAIgIiAiAiICIAIgIi AiAiICIAIgIiAiAiICIAIgIiAiAiICIAIgIiAiAiICIAIgIiZjVvFfyMGREx4Rhn6jZ3iiMP1vY9 wFE+FAearOIhIBzizdEiRukq2VclXic7QlfyOmppbhNwa1GFAOgSrytx1fsszX6QnXybREQpyYpI WEnCitHmSV3uIaGKuG5iJbEWKSdN5Nnpzibz/6OIH5CEUUD1ZS2ubFMylh1vlh7cD7hs4rWJhW1f bd/UBKxtW5yYgLldW36AmHXP9pRE9ITlnrgjC3HEhVQRv70f5R6p1kXcHfCliecmnizmTZybeJUJ OQki5gMWMJMsn4dou75YlFeyPaWpg/77K8t2K3PEPfF4MX9WkhU7M2JXNny1gz428dDEVRMzE6+2 E5wFEfOBi1jIdiLZvpDXIlXIElre1CdSS0cJXcSlOXIn8WBJS2XcyvvRKWIm2dBPsLAD3jdxaZlw Iin50kQswx8pH2gWVAEndl0aE6mL85ABt6HBWyeK9qFnxjqIuDZHXMS/mvjaxK0582weea3YmxFj i701i13EO8l8tbzmcqZEHJqMuWS9qcWZXZ9vp1IT50FCL86XUluvREwde9UDlbBOXLOLeG8i/mnb e3NnIRlRV4a9uuaNnGQq2aC2/S+WflMi5gMW0TOei3dhcWnbWVgBtJ5eSk29SNRImxMTcSN9xLP5 cGsZ8WvIiJuwIvQuzWr7KlEXbezET1YvXiSW5iHWiLoklyLh3K7z2rZz2z8NdfLSxPOG7jHUSOvw xxiqiKlewrtl7yPuLR7D9X83wikP6IiWYQnyDulRMsRURBzyspyHbHhpAn5q4kay2yo0bKvwh7iz P8SDZYRFV+c44BpxK13zq3wQtWteBAmzfTOiniiXDJiqG89DNhxy16wZ0UWcm4if5U315ffCrru2 fd7Q3Umx/hBqpPUJdM91omtWGTW0SdkmRly9S3OWmIHF2eJZ6CTbOuZ8YCJ6o6IZ8SkMal/sNRfR SxWtj26lWH8NxXo1YAFjL1GFKYHeVdmEkU19aI0YT7oNTYzbP9ljvpYNUETPihdS5y2kFnoyEaf2 nixtWfbxxa3FYxhfnNIDI3VibrrJvr/P3PkETnnAJ6CWeZmfLMpXDHB22FcnltnbW1VLaUgebNku RURfmm9loBvrw1N6QCT1pFYVvu69o1QeeDIVUqXMs2EOsFMSxlniJHR5lXTIPq5QEV+kY9S7Cksp 1k/xAeOux7x6P3TlkfarkCn58hN4YzUrxidK1lIfzhJzVb3P6tl00zZDO5GMmMqQe3/QyneevD5h Ef064v1iHfD7tCDOEeNSfqoSdol41FIE/fViIdOBs+zf237eqMUmbpW9vc/Mg8OI+MNk1AamkJGV ZoPYMfL0OiJ+SBNThBFP6umbKB8SIuKHZkfdn/r/3giIiP+JkPuMMgAAAACGxt8CDABzFWCX4VMp 9QAAAABJRU5ErkJggg=="
        transform="matrix(.979 0 0 .979 606.742 943.142)"
      />
      <path
        className="st1"
        d="M665.3 952.4h-43.1c-3.5 0-6.3 2.8-6.3 6.3V1061c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V958.7c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Presión Ósmosis */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(5, "Presión Ósmosis", false)}>
        <path
          className={getTarjetaClass(5, selected)}
          d="M616 959.8h138.1v99.8H616z"
        />
        <text
          transform="translate(664.919 1044.077)"
          className="st7 st8 st21">
          {getScaledValue(datosScada.d5, 1)}
        </text>
        <text
          transform="translate(716.044 1043.681)"
          className="st7 st8 st22">
          {" Bar"}
        </text>
        <text
          transform="translate(670.25 979.118)"
          className="st7 st8 st9">
          {"PT015"}
        </text>
        <text
          transform="translate(666.073 998.49)"
          className="st15 st8 st22">
          {"Presi\xF3n"}
        </text>
        <text
          transform="translate(657.741 1015.198)"
          className="st15 st8 st22">
          {" Osmosis"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(5, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(5, "Presión Ósmosis");
        }}>
        <path d="M630 1032c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M628.3 1031c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM639.6 1029.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M640.2 1027.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM641.1 1037v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM636.1 1044.5c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presión Ósmosis */}

      <path
        className="st5"
        d="M735.6 1103.8c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st1"
        d="M735.6 1092.1c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st5"
        d="M576 1054.7c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
      />
      <path
        className="st1"
        d="M587.7 1054.7c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <path
        className="st14"
        d="M653.1 1316.4v66.1c0 4.1-3.3 7.4-7.4 7.4h-12.4M653.1 1098.9v168.5"
      />
      <path
        className="st5"
        d="M462.7 1424.9c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st1"
        d="M462.7 1413.2c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st5"
        d="M659.7 1185.1c0 1-.8 1.9-1.9 1.9h-9c-1 0-1.9-.8-1.9-1.9 0-.5.2-1 .5-1.3l4.5-4.5c.7-.7 1.8-.7 2.6-.1l.1.1 4.5 4.5c.5.4.6.8.6 1.3z"
      />
      <path
        className="st1"
        d="M648 1185.1c0-.2.1-.4.3-.6l4.5-4.5c.3-.3.9-.3 1.3 0l4.5 4.5c.2.2.3.4.3.6 0 .4-.3.9-.9.9h-9c-.6 0-1-.4-1-.9m-2 0c0 1.6 1.3 2.9 2.9 2.9h9c1.6 0 2.9-1.3 2.9-2.9 0-.8-.3-1.5-.8-2l-4.5-4.5-.1-.1-.1-.1c-1.2-.9-2.9-.9-3.9.2l-4.5 4.5c-.6.5-.9 1.2-.9 2z"
      />
      <circle
        className="st23"
        cx={1000.9}
        cy={1098.8}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={161}
        height={143}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKMAAACRCAYAAACv3ggmAAAACXBIWXMAAAthAAALYQFbeSumAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB3lJREFUeNrsmw9zokgQR/lnNDGb 3b29q/v+3+/ukqyJGgXmsKrn9rezA4LRq4DvVXVhiELAR/f0QJIEAAAAPijpmT+fckqvFtfy+qIy pvI5ZIQuGd0QMdMTJFQZsyNywnWJ6Je1iOj6SpkOFNHLl9trjS4hkXR62S9c76OWqETM+piQRU8R VcLcPucjl4gJiYjXMTb08h2itOVefk5EypNkTCXzHWSbNXFjy7m8nkm2TCjbVyekl6w0AXcWb7bM bH0t4g6SUUtzbuIdBFw0cdfErcXCfldIdkTG65Kxkkx4EHDbxKaJtS239t59V2NzLDNqRpybhPdN PNjyUyBkHmlyYNpSOinFXsQXi5ugYjp7X3QMWfTIiplt9Nbk+9LEV1t+FiF9dswYM15VZqwlKx5E fG1i1cSTJTEvYiUNzUllOpOsuLSM+FsTfzTxzV4/mIzzQEay43VM5TgZK/qs+GTVMhcRS2lsVEjX JWM4VpzZhpeWCb+ZjH+ajJ+tfC9seykyXp2MlTUqG5Px1rxJ5He+mfEddjqkTMdkfLAS/btkRy/j PFKmkfF6ZPSZ8c6cSYPS7ZuZwtZrsnLHynSsefkkQn5tKdN009fZTXvxvIilCbiyZncljuQxN/qW 6bkJtzQhfdxb+AYmizQwMG38+K+UZFRaFvSO+GHcTKpnFnbUx7ppf7dFhbyT8NM6c+mcGCteX5as pVmpbXwYOhLeHOmVGduyo7/7EsZMUm9Geb5KGf33PbOsqK7onTq9bXxUxrQlO6qQXj69L83TO6C3 jQupqLOOrJj2HTMmkWmarEVARLxeYq6omFmLK6EvLuuxk6RlQ23SwnUL2ceX1tR6bCdtG0NAOOZM MkTIbOAOEgSEE8TsNXzL3mk+YsLZ3MgGmE1zAudscs6SGQEuAjICMgIgIyAjADICMgIgIyAjADIC MgIgIyAjADICMgIgIyAjADICICMgIwAyAjICICMgIwAyAjICICMgIwAyAjICICMgIwAyAjICICMA MgIyAiAjICMAMgIyAiAjICMAMgIyAiAjICMAMgIyAiAjADICMgIgIyAjADICMgIgIyAjADICMgIg IyAjADICMgIgIyAjADICICMgIwAyAjICICMgIwAyAjICICMgIwAyAjICICMgIwAyAiAjICMAMgIy AiAjICPABWR0nCL4SJnRBa9dsB5hYahD7yrTruVnRIQuLwZ5kw002iEiDBBykC9Zz43WkXCRHQLE hnO9pMx6bMjLVwURExPIhvWR6J0Zw7KsIpYWe3ldDtkZTDoL1i2++Khaktd/r4seO/Ab3lm8WexE zMN20ome7DRYXqSTHLmM6sneYiee7ILkFS3ZRcdOvMWlbHhjsbbltom5ZVgvcHqGL/CjyRg7pvQS g/iRTtX4oVvoiY83EbIKhOyUMcyK3vKDeK9NvDSxspjbNpy8Dr+8sUqZylAmjSxd5DjDpq4OllMY W8dmWLwnW/PjRTx5lcSlQvaSsW0na9vB9yaemriVzx/es7Cf84FZ5KNnw9wEzCVUzLCa6IVcR5q+ sQsZ6yt8ed6YgI8Wz+bLi/1uF/QZ7j0yHjZ8Z+LNRMSNrMvlSxqzjF7AwmJmUchFp8fmgqGNjp90 EF+NXMjwb9eeYm0y/tPEX7Z8snWhjL3LdBoMSt8s3c6lHKuI95YppyCjZkQv4TyIGxEzC8ZOZdDo +VAxx1yy22R8ExkPWfFvE9LLuLb3lMEF6fpmxtpOoJdRM0IlY4Rlh4xjzYoq4sKOb2mV4VakzOXi 1fH1WqJtzDRFGV+sPD9aZnx8T2aMtew+A2Zy4ncm6LN9QfNAxrFnxdxkW9jxHbL/J4t7E3MhTZvv Jjd2XlYSr9JV7rs6ypF20mWkyfXjxe+2bivHHq0MxZEdqowqVik7vrUv5UYyZxYRcSxSZpIZbyQj PjTxJZiquLMLMAvOiW/yni1ebP2YZXQtU1fawOxk6u81qAydWbFPZlQhtWPcS1qei4hFR1Ycs4z3 JuOrnFw/Vp7bsZUyZnqKdJTricqo2VEnu7fJzzdIymMzCkXPP6KKzD/uZBCv5TlrEXAsMsbK9FIG 4ZuIjJl9EX7G4VHGTM/y2V0g45hLdBJxIrwLozMJR59jKAbsPJxDy+3kZkfm3sYoYyqZfm7leG1X u5YhldFnxmfJjL5U+zHjvmvSd4QyhkLWwZxqbH619biLgX+AC1JzeFdijN1z7IIJs+MuuNr9YH0Z kXElQvrxYliip/ToXTh+dEn7Y4adx1uceEVU0lVP6V50Gumqy+Tnp1AqkfHOZE2DBmaV/LjzsJZp nSrIilO7V+06Xh+lOGGHXeum8mBEItM1VfLrI1FeOn/Xyb/3LSjj4UMC+pjdlJ7gcT0kPauMSY8N uwkIGY6TY8/p+ZmE2KR37M5LmUz7IWR3gitnkTGZ4JXddYwuiT/JtA2msvR3e+kqq2T6T8Of5bjS BPp215lEHpnKantah3/LQMaLCJkmvz7bGGaIOvn1eUZERMaLdtrhOhcZbyaIiIz/l5Tv7iDhBzmn 4GMO5gEAAJLkXwEGAHJvaIa1YdTbAAAAAElFTkSuQmCC"
        transform="matrix(.979 0 0 -.979 984.69 1256.873)"
      />
      <path
        className="st1"
        d="M1081.2 1247.6h45.1c3.5 0 6.3-2.8 6.3-6.3V1139c0-3.5-2.8-6.3-6.3-6.3h-53.7c-1.3 0-2.5-.4-3.5-1.3-6.4-6.7-6.4-6.7-12.9-.2l-.4.3c-1 .8-2.2 1.2-3.4 1.2h-51.7c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h80.5z"
      />

      {/* pH Permeado */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(15, "pH Permeado", false)}>
        <path
          className={getTarjetaClass(15, selected)}
          d="M994.5 1140.4h138.1v99.8H994.5z"
        />
        <text
          transform="translate(1046.8 1227.629)"
          className="st7 st8 st21">
          {getScaledValue(datosScada.d15, 1)}
        </text>
        <text
          transform="translate(1047.253 1159.963)"
          className="st7 st8 st9">
          {"AE010"}
        </text>
        <text
          transform="translate(1103.632 1227.568)"
          className="st7 st8 st22">
          {"pH"}
        </text>
        <text
          transform="translate(1024.713 1191.25)"
          className="st15 st8 st22">
          {" pH Permeado"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(15, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(15, "pH Permeado");
        }}>
        <path d="M1010.9 1216.6c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M1009.2 1215.6c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM1020.5 1214.3c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M1021.1 1212.5c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM1022 1221.6v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1017 1229.1c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin pH Permeado */}

      <circle
        className="st23"
        cx={1156.9}
        cy={1098.8}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={160}
        height={143}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAACRCAYAAABAHGMYAAAACXBIWXMAAAthAAALYQFbeSumAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABz9JREFUeNrsmwtz2lYQRiUhIHZw 3CZ9/P/f12md2BjbCFBFZjf9sr5CwonTSDpnZoeHsWTBYR9XcpYBAADAT0T+StvIeWsnRd3x+NVE zFtuERER9XHdV8z8GwTUyMJ9mK6QdeL+oUvI8kwJPQqLeB8ZkbA28Tx6Zcf8TAmPws1ORIGIkxbR 5ds3sbPYWxzkNfVLMqJL6LIdf2fexMJibs+VIiP94jQzoUtXNbENt5WU6GcylmdKeJRu2cSbJi4s lhYLeR0STk9Gz4Iu30MTj3Kb28+SZbpPRixEwqOAl02sJC4tPDvOTkzTMN6M6JnwyeS7t7gLTmSp El12ZEMfREoT7ZgBr5r4xeLaHq9M0nnoFRFxOmXZs+Ex+61NwE/mRCElWYeY3GXsU5pdxKNob02+ 90381sQHkfHCZC1lx4g4nSFlJyXZJVxaYtLX7EXGzh4xTskLE3Fl4h0l/LOJ35v4tYl3Up6Znqcp 4t5E3DRxaz74vLCTsr0NQn7eRldpzkNZXllJ9oz4h91PiUhGnN7E7CJeWEl2CR/t+Y3d34pfnaU5 D8s1LuI7y4LvLT6E0sywMu1hxWeF3CTcWM94a7f32X9LfftzS7Mv27iMV1air03MOKwg4rTQReyZ SPggflyaQ3OZI75kxbJFwlia59InXobQ9cSSiXmyIh6kJzxYPxg9WYZk9cWTPhmxEBmXifD1w+QO YBIUJl9ut37WTR3xFZUy+/r6hM++9V2+KWQjc4l4ai9nYp4s8VoEdWURXHmWrIqODUcZZ2FnUT4y 4XQljFU05Uxrsip67CBr2UHcIBIi4ylf2pJV3iZil1CpC2IBsoQPfV3JixcYn9owMkLX6svJJFec IeCpHQF0uZF3jd0A/zuICIgIgIiAiACICIgIgIiAiACICIgIgIiAiACICIgIgIiAiACICIgIgIiA iACICIgIgIiAiACICIgIgIiAiACICIgIgIiAiACICICIgIgAiAiICICIgIgAiAiICICIgIgAiAiI CICIgIgAiAiICICIgIgAiAiICICIgIgAiAiICICIgIgAiAiICICIgIgAiAiICICIAIgIiAiAiICI AIgIiAiAiICIAIgIiAiAiICIAIgIiAiAiICIAIgIiAiAiICIAIgIiAiAiICIAD+PiLVF12sAfkhG rEP0lRSmTf29RTwEEQ9ICD2T1iGRxDpFjC/2DR1jL3GQoDxD9OeQiLNETAnosQsRpawp18jXkrhS rnz53bLHDlzAymIrUYmUM3vtmCfx/LV7pYGXYZdtF5ypxJVkdix7ZsS9iffUxIPEoz23MAFrEzL/ xg/tZxQwt+PLe4pZJwQcY7XQbFiJJ4/iyVNIXPv4PpQ9Gs2dZMDjRjdN3Dextnhj26lNyFnIivkI BMztmPLwfOoYU6sKbTGWadizYSWOrM0TDxeySswXvTKi7+DRNnjXxKcmVk1cNDG31+9ExFnLBzZE CQuJmdzPW45Pp0StKIfw/FhE1PbNk9XRj48Wt+bMxhzaSlbs7BHrxA5cxONO3gYJKxNzKSIOVcJc BrlCjmdmX1yNInGcsUnfhZI0lsEuilhZxtuYI39b/GOP1yapvxe9e8RM3rQqiLiU3/V0vJLno4hD EzJmwYXE0m7nFjM5PpVwK/1SHO46lzMGNqRER25NwL9Mxo+WFR8kI351/GWPnWjtL0U0L8cPtpO3 9iHNJVMUAxdRJTz2wpcWF/Z4L8ebSQbcSrO+kaY9yjgWEbV925gPNyaji7iW0nzoK2KW2EkRBpG9 fdvvLRtetmTEoUmofWFpEl7Y8R2P88puvT1ZyPu4l5UFH+ju7HaTyAiHkWVEP/a1ZcVPFrf2fjy+ tDTHgeVBljF2tuG1ZMNFS2keoogzy3YLkfBdE9cWT/bcG3kfdyJh/CBcRs+K+5H0iSpiJZVgLZNz /BLW564jaq9YyeNd6AmWIRsWA+4P20S8MhHXMgE+2s90aNuYeB+tPN2YjHci4nZEA4sOteqFxlNX JeiTEeNkpA25T0lzkXDWImE+MBG1NHtGvM7+W8j3fmgVRFybeN4j6dS4GUlprltaOF0lqLLnZ99a h7TyTPPjN6AMyxvFgAeUlIiFDCqrMHj4ou3KXpPZG+8rCy7hTeiRttnzCwGGvp5Yhzau7RxzawUo z7Q/k97Gd9q2wDv0MyqFrB0uEuVGVwtUxI30hjct/eFYJIxVM7WYHxfwk8dcnrkz7Rlz2clYBNS/ X5dwUmUltibaI65lSIlnFfZ9PpiBZ8a205ytlC+03++fkm8MQnpm3GVfX1WylYwYp+YnWbrZWDy1 LeSOKCOmMmTvL1r5jTuvRyxiJpkx9j96ylPPrniW9PU0PasyRglPifiiMgT9hhfvGX1Zx1cLChFx HybGKktfEArfISNOidT/XPiqQVyuqrP2K5KRkIz4XXvGuLzTdhkY/z6BiD9MyDistV0QC4j46kKe WsoAAAAAGCL/CjAAv41K0g+3qgwAAAAASUVORK5CYII="
        transform="matrix(.979 0 0 .979 922.742 943.142)"
      />
      <path
        className="st1"
        d="M981.3 952.4h-43.1c-3.5 0-6.3 2.8-6.3 6.3V1061c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V958.7c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* E.C Permeado */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(10, "E.C Permeado", false)}>
        <path
          className={getTarjetaClass(10, selected)}
          d="M932 959.8h138.1v99.8H932z"
        />
        <text
          transform="translate(974.919 1044.077)"
          className="st7 st8 st21">
          {getScaledValue(datosScada.d10, 1)}{" "}
        </text>
        <text
          transform="translate(1018.044 1043.681)"
          className="st7 st8 st27">
          {" uS/cm"}
        </text>
        <text
          transform="translate(986.25 979.118)"
          className="st7 st8 st9">
          {"AE020"}
        </text>
        <text
          transform="translate(960.364 1007.198)"
          className="st15 st8 st22">
          {" E.C Permeado"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(10, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(10, "E.C Permeado");
        }}>
        <path d="M948 1032c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M946.3 1031c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM957.6 1029.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M958.2 1027.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM959.1 1037v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM954.1 1044.5c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin E.C Permeado */}

      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={160}
        height={143}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAACRCAYAAABAHGMYAAAACXBIWXMAAAthAAALYQFbeSumAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB0pJREFUeNrsmgtzm1YQRgGhh+XY TjNJ////a+skimVJSILCzG776foiYTluA5wzsyMZ22Dw0T4uJAkAAAD8QqTvtJ+USzsqqo7b3kXE VH4fEREx9nXVVcz8DQKmgYxJ5GsYp5QanYTMr5Awi7xmZ+SE8UlYSujXrTLmV0jYxMQil/cT+T4g 4cHiKNEqY/5KCV2+qcVM3ucWWaRcw3gkdPn2dezstYlCZCxDGfMrJGzkW1jcWMxtey6ZERHHJWJp oh1MukbCjcXWPHAZk1DGriK6hHMT77aODxbN+6WJOZMyjYjjmphLyX6NeM91rOv4UceTJKciMsxc FFGz4dREbMR7qOOjvT6YkEv7fh4MMDCOsuzZcGcSNvKtxIk0KOEnU/UlEXU4mZlsdybhZ4vf6rg3 QRdSnpmexyni1jLhynyZmgdausPB5WxGTCUjell2ET/V8aWO303GjyLiNFjOgXGK+M2SVyplu7DY 289mLmQXEb0sL0zEe8uCn03ELybiB5MVEcc7Mfuk/GQuTGx7YeX6WYaXiQwunUUMM+KDyfjJwjOi isigMr5hxTPiTCTcydDig8vU5EwviahlOZNlG5+Y7ywz+rByb5LOZFhBxPEt3xxMsoltcwnvzJsb GV4mUjmrLlOzl+apLN8sZdlmadsW8kcwMY9TxIn0ffuII3Nx6aR9O5cRY+XZZfQFbH+dth0ARiOi Jp9ZEOpMHklWadd1RF1LdCFnyemtPV2yQcRx4ZOx3oELPYndBv7Hk+zCzmP9oj7cEHvqBgnHK2Ma 8eWSM8klEZMzO84iO2Y4QcS25HVWwjYRu2Q0hhG4VElf41OaXWk95Rh+qifZG0wHuDZTpteKiITw rvBYPyAiACICIgIgIiAiACICIgIgIiAiACICIgIgIiAiACICIgIgIiAiACICIgIgIiAiACICIgIg IiAiACICIgIgIiAiACICIgIgIgAiAiICICIgIgAiAiICICIgIgAiAiICICIgIgAiAiICICIgIgAi AiICICIgIgAiAiICICIgIgAiAiICICIgIgAiAiICICIgIgAiAiAiICIAIgIiAiAiICIAIgIiAiAi ICIAIgIiAiAiICIAIgIiAiAiICIAIgIiAiAiICIAIgIinlBxueD/FrFCVPiJVG8tzZVEuA3g6iT1 2tJcinilBcC5hFVF3OkkYizjlRJHC91GRoSYhGXEk84itgnoEh6CCKWkXI9bwLIlcZ1LYFXe4QC+ s71FYbGTbS5kI3ZqMUTSN/6jxiDhURLWPhKHWIbMOxzAf+lg8jWxsdhaLGRflWTadEACpnZuaUcx q4iAQ60UVZCwCnHDPdnZdq+kJ9ch71jn95IFn+tYWzzVsaxjZvI1f8hUMmPScyHTILJge+z8qkDC czGkadgzoTryJK5sRMZjOOxeyojaF3ombHa+quN7Hbd1zO0fVFpmbEScyD+nr6U6FNBjIu9j5xZO idorlcH2oYio2XBnjnyTWNm2Z2npjlqeL2XEUjKim/7Ddr4UCY9m+k0gYh8l1A+QyjexD67GJJL9 23qlQ6Rh73tmDEUsJFl9rePPOh5FxlDEqmtGTKQ/LETERVCOXVIXMY+ImPZMRs2CUztfj7m9TkXS tl6pkJJURFYa+i5iFYioyeqvOv4wGVdWordyDToNK/5DYe33bODluLAD3EVEzAYg4lTku7FKsLQP ows5kWHmIBXEh7rnoEc6BKWp7yIeAxHX1ro9moyPkhELmZyrS6U5bLQPdqG1P6rsgm/sILdnMmLf JEylJE9NuKWdY/OB+2Dvb0XGTNqYrV30J8sO3rTHeqRyQBnRV1XWdt7fLVb29UbOv3xNadamOrWd +D9KPwErk3B2pjT3UcTczmlhIt5bPFgUJqOKqL30SvojzwjblqwwlKWbnZ2jT80+pPi578Ns2FXE RNJvIX3jPugJ5iJh1vP+MCbirUn4US6qr5MtLHsebduTZYKvFt+CHmmIIpYylO3k+mzlnPdtLUn+ yvSb2EGO8gnYmIBTmSTbJOyLkDqohBlxLYu0G9sWirgSCR/tNcyIZc9Lc7hQf4ysFLh8+0hfXL12 ataDHpOXC925TI5ZjweUWEbUrLiUocNjLasIuV3srW1zCR8tO/6INOtDeYIpdouv7R5zEqsC+RX2 l8FBD0EpTnsuYmxgmSX/3qbScuPT4Y393CFSmr9HsuExGdZjdFVQpqvk5eJ9eMcpuUbEWCpO5SBD ETBJ4gvasbW/UlqTsDTr1LiSiTlcukmSYd17bruNefG2Zv4G+1XINvn6LqTHITl9BG4vwi2DqVnv LqylnJ9t1geSEWMZstOHLf8JB68GKqKeQ/hs3V6Em8tKQZWcLmZ7KR6yhOdE7Ez+jn/MUMpOmry8 936UrKj3nKvk5bOb+5aGHQaWsf7rMq0PQWhoL6TLGOXAJmRE/EWuVZa8fCiibSljKE/ZIOIvnh3D Qa3tgVhAxHcX8twyBgAAAEAf+VuAAQD+O0aLT+hzdwAAAABJRU5ErkJggg=="
        transform="matrix(.979 0 0 .979 1079.742 942.142)"
      />
      <path
        className="st1"
        d="M1138.3 951.4h-43.1c-3.5 0-6.3 2.8-6.3 6.3V1060c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V957.7c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Caudal de Permeado */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(17, "Caudal de Permeado", false)}>
        <path
          className={getTarjetaClass(17, selected)}
          d="M1089 958.8h138.1v99.8H1089z"
        />
        <text
          transform="translate(1138.919 1043.077)"
          className="st7 st8 st21">
          {getScaledValue(datosScada.d8, 1)}
        </text>
        <text
          transform="translate(1185.044 1042.681)"
          className="st7 st8 st22">
          {" m3/h"}
        </text>
        <text
          transform="translate(1143.25 978.118)"
          className="st7 st8 st9">
          {"FIT017"}
        </text>
        <text
          transform="translate(1094.114 1007.198)"
          className="st15 st8 st22">
          {" Caudal de Permeado"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(8, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(8, "Caudal de Permeado");
        }}>
        <path d="M1105 1031c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M1103.3 1030c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM1114.6 1028.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M1115.2 1026.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM1116.1 1036v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1111.1 1043.5c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Caudal de Permeado */}

      <circle
        className="st23"
        cx={1061.9}
        cy={1098.8}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.2,
          enableBackground: "new"
        }}
        width={176}
        height={118}
        xlinkHref="data:image/png;base64,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"
        transform="matrix(-.9076 0 0 .9915 932.5 1159.9)"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.26
        }}
        width={174}
        height={122}
        xlinkHref="data:image/png;base64,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 yElkAAAAAElFTkSuQmCC"
        transform="translate(773.496 1155.296)"
      />
      <path
        className="st1"
        d="M833 1164.6h100c3.2 0 5.8 2.8 5.8 6.3v91.3c0 3.5-2.7 6.3-5.8 6.3H794.4c-3.2 0-5.8-2.9-5.8-6.3v-36.9c0-.9-.3-1.8-.8-2.4l-4.7-5.5c-1-1.3-1.1-3.3-.1-4.6l4.9-6.5c.5-.6.7-1.4.7-2.2v-33.2c0-3.5 2.7-6.3 5.8-6.3H833z"
      />

      {/* Presión de Rechazo */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(6, "Presión de Rechazo", false)}>
        <path
          className={getTarjetaClass(6, selected)}
          d="M794.5 1164.6h137.4v103.9H794.5z"
        />
        <text
          transform="translate(842.066 1255.12)"
          className="st7 st8 st21">
          {getScaledValue(datosScada.d6, 1)}
        </text>
        <text
          transform="translate(847.519 1187.455)"
          className="st7 st8 st9">
          {"PT021"}
        </text>
        <text
          transform="translate(897.898 1255.058)"
          className="st7 st8 st22">
          {"Bar"}
        </text>
        <text
          transform="translate(833.69 1208.037)"
          className="st15 st8 st22">
          {"Presi\xF3n de"}
        </text>
        <text
          transform="translate(834.594 1224.745)"
          className="st15 st8 st22">
          {" Rechazo"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(6, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(6, "Presión de Rechazo");
        }}>
        <path d="M809.2 1244c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M807.5 1243c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM818.8 1241.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M819.4 1239.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM820.3 1249v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM815.3 1256.5c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presión de Rechazo */}

      <path
        className="st5"
        d="M750.5 1361.3c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
      />
      <path
        className="st1"
        d="M762.2 1361.3c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <path
        className="st14"
        d="M690.7 1267.4V1250c0-4.1 3.3-7.4 7.4-7.4h57.6"
      />
      <path
        className="st5"
        d="M684 1261.8c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
      />
      <path
        className="st1"
        d="M695.7 1261.8c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <path
        className="st0"
        d="M811.1 1512.2h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM795.9 1516.1l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st0"
        d="m811.5 1526.7-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st16"
        d="M803.7 1511.2v10"
      />
      <path
        className="st17"
        d="M794.7 1503.2h18M803.7 1504.2v8"
      />
      <path
        className="st14"
        d="M788.8 1523.2h-24.4c-4.1 0-7.4-3.3-7.4-7.4v-51.1l-.1-4.8v-362.1M816.9 1522.9h24.4c4.1 0 7.4 3.3 7.4 7.4v61.1"
      />
      <path
        className="st14"
        d="M793.1 1590.5H696c-4.1 0-7.4-3.3-7.4-7.4v-265.2"
      />
      <circle
        className="st23"
        cx={756.9}
        cy={1214.8}
        r={9.2}
      />
      <circle
        className="st23"
        cx={688.9}
        cy={1510.8}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.2,
          enableBackground: "new"
        }}
        width={177}
        height={129}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALMAAACPCAYAAACxrOolAAAACXBIWXMAAA1hAAANYQE8JGIuAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAByhJREFUeNrsnWlv20YURUmakpzY sZ046YL2Q///72oaZPEqyVpJdQa9Uz0zWrjI7jg9B7hgKlsm0Bw93RnKYZIAAAAAPAnpMz0HYBur 55Y5NUdkhkPLvDqE2HkDicMxM1IjNnQRuJpO0zrfI3KQ1Qt8VElmxAZoKnJhUrosdWwtdL5H5NSI 3Fd6OuZ6nAkNTUUO8i5c5kraVeh9kznT93h5j11eu7zSn4PQGUJDQ5ELiTx1mbg8yKOZhC4ONZnt RO5J3BOXM5cLHd9I6h7TGVrIHEQeu9wp9y4jyT3Xc8omUuc7RA7Vwov81uWDculyrscHyAwtuvJC 0nqJr12+aTCmRvjGuxy7OrOV2U/k9y4/u/yk/w4y54gMDYQuNHm9zKdyKK106IVZGLaezLYr26n8 q8sfLr9L6Hfqz32zswGwj1KZm8l8ocqaS9ylSdlkOm+bzGHhd6xXz7kEDlXjQjLbzgxQZzLbztzX 4zP15VsJPpR/yybTOa/Rl73Ev7j8pnzQAvA4We85A7SpGqfGo1JSj5Vpst6yS9tO5tCXe5q+Z6oa lxL7olIxANrUjb5Zb/kJ/KDJfKXjSEIvu+5mpMnj/eUT5XXy/R4zQFMy404pad+ZYXlSWY+Vdabz viuA1cvYmXmcS9nQhU1XlwfJ+ipz47VYtkfmNOHzGPA0Ige3bAMI6Zl3/qyrzFWh7aTmE3NwSKGD sLmRuLHISY1vTpEXnknmbEOdrX5vJ5kBnlroZMu7fuMBiswQk9RJlwaAzBBb7WgtNDLDDwMyAzID IDMAMgMgMyAzADIDIDMAMgMgMyAzADIDIDMAMgMyAyAzADIDIDMAMgMyAyAzADIDIDMgMwAyAyAz ADIDIDMgM8BzkSIz/AgS80/awg8jcqt/PR+ZISaRs0qQGV6kxOE2auGuUyG17weIzBBLtQi3uPb3 AXyVPL4T8FGdKY3MEIPMVmR/S+ttt7beKXTO/0uIoGJ4DweS+K3Lpct7l6HLxGXuUiT/3Du71HNX TGaItWL0NY3Pksc3hT9V7egle251zWSGWGrGQCL7qTw2CZN5aabzatN0RmaIpWqEzvymUjXuXEYu U1M3SvP8FTJDbDIfmd58YUS+U3ceS+gwoQs6M8S+EDyW0OfqzZeS+8x05417z0xmiFHmM1WKqTrz g44+M5eFqsaj7ozMENtCsKcJfCaZx6oat6ZyTCV0ajszNQNiknlT3Xgjsf0xXEjZeBEFmSHWuuEX g6fqy5fqz+cSur+pNyMzxCx02K4Ln9cYmAVghszwEqvHkUlV4n+rBjJDbITPXyy1ozHXDsYsWV8J 3HjRBJkhJrykhYT1OxYj7WLcKHYno0gqW3PIDDFN5JUk9VPY7y3fu1y7fJPM93q8KjOTGaKTuVCV 8ML6PeUrly/KNyPzPFlfNKFmQJQi+4k7kbRe3r9c/nT5KKH9dB4zmeGlLPpmpitfazqHvjypiMxk hihFLrS4G0rizy6fdLxS7QgVo0gefzYDmSEqmRdG5hsJfCWxN4n8HcgMMe1gjFUvvmoif5HQ91sq BjJDlBVjkaw/IXet3Oqx2T6RkRliETpc7Zto8TdUwq9LLbZVC2SGGKdz2F8eJutfl7K/KlVuWvQh M8Qmc7iEHRaBk0q1KHfVC2SG2BaBKzN9q1nV+UHIDLFQmsVgkWzZS0ZmeIlTelWnWiAzvASZG4PM ELPYyAz/T5AZkBkAmQGQGQCZAZkBkBkAmQGQGQCZAZkBkBkAmQGQGZAZAJkBkBkAmQGQGZAZAJkB kBkAmQGZAZAZAJkBkBkAmQGZAZAZAJkBkBmQGeC/YVU5IjO8WJFb35inicydXzEANWUuuwidtXy1 rJAbDiCwvXFlUUlj37Iar5TWd8wEqDEsvbj+tsL+3tkzZb5B6L3kNaZyuK9xseFtAKCLzPae2V7i abK+Z3ZwLukqc/VkcxN/op5L6nLE3wkcQGQv8YPLWMepHu80mW298D/M311+5DJU/J9fSeISmaEl pUSeyqsblyuXa5c7CT3X95R1pc53FPNwsrFO4E947jLQ9wz0/JS/G2ix8FtI2lvlRsehhuiiaW/O KyexbwFz/dB7vWK+upxo0bjQhEZmaEPwa6yJ/EV+XRuZ5003G/IdfSaczJ/gtUtfX/cnujAyZwgN DXcwSi30RpL5k8tHCX2rid2oYtStGfc6YV/SzlQ7kBnayhyG5Uj14rOm840GaLUvt14AhqOVOTOv Ji/yqcuxkTlBaKghcvWd/8HU2KuKzAfdZw4lPbwdBKGn6s5905kRGZrWjLAlN5LQdhejsci7pmkQ NJOwfU3ikAEVAw5QNcKwnEjscB1jmbS4OJfu+VoQOkgdcqQgMrQVujRrs5BOV5nTGl+vSp0xkeHA lcN+5qesdOyDyVwVOqUjwxMIvelTmclTyFyVGuCppO5E+kzPAdgl8kH4W4ABAEJboVLcJ/INAAAA AElFTkSuQmCC"
        transform="matrix(.8302 0 0 .907 523.15 1448.9)"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.26
        }}
        width={170}
        height={133}
        xlinkHref="data:image/png;base64,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 m4AAAAAASUVORK5CYII="
        transform="translate(505.496 1444.296)"
      />
      <path
        className="st1"
        d="M616.2 1453.6h38.5c3.1 0 5.8 2.8 5.8 6.3v41.2c0 .8.3 1.6.7 2.2l4.9 6.5c1 1.3.9 3.3-.1 4.6l-4.7 5.5c-.5.6-.8 1.5-.8 2.4v39.9c0 3.4-2.6 6.3-5.8 6.3H520.1c-3.1 0-5.8-2.8-5.8-6.3v-102.3c0-3.5 2.6-6.3 5.8-6.3h96.1z"
      />

      {/* Presión de Salida HPB-001 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(12, "Presión de Salida HPB-001", false)}>
        <path
          className={getTarjetaClass(12, selected)}
          d="M523.1 1453.6h129.8v114.9H523.1z"
        />
        <text
          transform="translate(571.066 1549.12)"
          className="st7 st8 st21">
          {getScaledValue(datosScada.d12, 1)}
        </text>
        <text
          transform="translate(573.508 1482.455)"
          className="st7 st8 st9">
          {"PT038"}
        </text>
        <text
          transform="translate(623.898 1548.058)"
          className="st7 st8 st22">
          {"Bar"}
        </text>
        <text
          transform="translate(558.637 1503.037)"
          className="st15 st8 st22">
          {"Presi\xF3n de"}
        </text>
        <text
          transform="translate(541.657 1519.745)"
          className="st15 st8 st22">
          {" Salida HPB-001"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(12, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(12, "Presión de Salida HPB-001");
        }}>
        <path d="M537.2 1540c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M535.5 1539c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM546.8 1537.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M547.4 1535.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM548.3 1545v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM543.3 1552.5c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presión de Salida HPB-001 */}

      <path
        className="st5"
        d="M738.7 1596.2c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st1"
        d="M738.7 1584.5c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st0"
        d="M811.6 1595.9h-13.8c-.9 0-1.6-.7-1.6-1.6v-6.8c0-.9.7-1.6 1.6-1.6h13.8c.9 0 1.6.7 1.6 1.6v6.8c0 .9-.7 1.6-1.6 1.6z"
      />
      <path
        className="st28"
        d="M796.5 1578.6h16.3M804.3 1579.2v8.4"
      />
      <path
        className="st14"
        d="M816.3 1590.6h211.1c4.1 0 7.4 3.3 7.4 7.4v24.4"
      />
      <path
        className="st5"
        d="M842.3 1565.3c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
      />
      <path
        className="st1"
        d="M854 1565.3c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <path
        className="st5"
        d="M1028.3 1625c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
      />
      <path
        className="st1"
        d="M1040 1625c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <path
        className="st0"
        d="M1032.7 1643.9h3.7v11h-3.7z"
      />
      <path
        className="st0"
        d="M1041.7 1637.9c.7.7.7 2 0 2.8l-5.6 5.6c-.7.7-2 .7-2.8 0l-5.6-5.6c-.7-.7-.7-2 0-2.8"
      />
      <text
        transform="translate(528.36 1032.674)"
        className="st7 st8 st9">
        {"VX-012"}
      </text>
      <text
        transform="translate(786.835 1541.643)"
        className="st7 st8 st9">
        {"VX-014"}
      </text>
      <text
        transform="translate(343.331 1381.139)"
        className="st7 st8 st9">
        {"VX-011"}
      </text>
      <text
        transform="translate(902.334 894.665)"
        className="st7 st8 st9">
        {"VX-013"}
      </text>
      <path
        className="st14"
        d="M905.8 870H271.7l-4.4.2c-2.8 0-5.1 2.3-5.1 5.1v72.3M1323.2 936.9v-60.5c0-3.5-2.9-6.4-6.4-6.4H937.2"
      />
      <path
        className="st5"
        d="M1079.5 863.3c1 0 1.9.8 1.9 1.9v9c0 1-.8 1.9-1.9 1.9-.5 0-1-.2-1.3-.5l-4.5-4.5c-.7-.7-.7-1.8-.1-2.6l.1-.1 4.5-4.5c.4-.5.8-.6 1.3-.6z"
      />
      <path
        className="st1"
        d="M1079.5 875c-.2 0-.4-.1-.6-.3l-4.5-4.5c-.3-.3-.3-.9 0-1.3l4.5-4.5c.2-.2.4-.3.6-.3.4 0 .9.3.9.9v9c0 .6-.4 1-.9 1m0 2c1.6 0 2.9-1.3 2.9-2.9v-9c0-1.6-1.3-2.9-2.9-2.9-.8 0-1.5.3-2 .8l-4.5 4.5-.1.1-.1.1c-.9 1.2-.9 2.9.2 3.9l4.5 4.5c.5.6 1.2.9 2 .9z"
      />
      <path
        className="st5"
        d="M765.1 863.3c1 0 1.9.8 1.9 1.9v9c0 1-.8 1.9-1.9 1.9-.5 0-1-.2-1.3-.5l-4.5-4.5c-.7-.7-.7-1.8-.1-2.6l.1-.1 4.5-4.5c.4-.5.8-.6 1.3-.6z"
      />
      <path
        className="st1"
        d="M765.1 875c-.2 0-.4-.1-.6-.3l-4.5-4.5c-.3-.3-.3-.9 0-1.3l4.5-4.5c.2-.2.4-.3.6-.3.4 0 .9.3.9.9v9c0 .6-.4 1-.9 1m0 2c1.6 0 2.9-1.3 2.9-2.9v-9c0-1.6-1.3-2.9-2.9-2.9-.8 0-1.5.3-2 .8l-4.5 4.5-.1.1-.1.1c-.9 1.2-.9 2.9.2 3.9l4.5 4.5c.5.6 1.2.9 2 .9z"
      />
      <path
        className="st5"
        d="m1242.3 912.5 4.5-4.5.1-.1c.8-.6 1.9-.6 2.6.1l4.5 4.5c.3.3.5.8.5 1.3 0 1.1-.9 1.9-1.9 1.9h-9c-1.1 0-1.9-.9-1.9-1.9 0-.5.1-.9.6-1.3z"
      />
      <path
        className="st1"
        d="M1253.4 913.8c0 .5-.4.9-1 .9h-9c-.6 0-.9-.5-.9-.9 0-.2.1-.4.3-.6l4.5-4.5c.4-.3 1-.3 1.3 0l4.5 4.5c.2.2.3.4.3.6m2 0c0-.8-.3-1.5-.9-2l-4.5-4.5c-1-1.1-2.7-1.1-3.9-.2l-.1.1-.1.1-4.5 4.5c-.5.5-.8 1.2-.8 2 0 1.6 1.3 2.9 2.9 2.9h9c1.6 0 2.9-1.3 2.9-2.9z"
      />
      <text
        transform="translate(80.12 1230.335)"
        className="st7 st8 st9">
        {"BISULFITO"}
      </text>
      <path
        className="st12"
        d="M129.4 1150.6h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
      />
      <path
        className="st4"
        d="M118.9 1159.6h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
      />
      <path
        className="st13"
        d="M88.9 1171.3h38.8v40H88.9z"
      />
      <path
        className="st12"
        d="M127.7 1164.6v45.2c0 .7-.4 1.3-.8 1.3H89.8c-.5 0-.8-.6-.8-1.3v-45.2"
      />
      <path
        className="st29"
        d="M137 1148.6h10.5c2.5 0 4.5 2 4.5 4.5v248.3"
      />
      <path
        className="st11"
        d="M147.1 1401.7c0-.9.7-1.6 1.6-1.6h6.3c.9 0 1.6.7 1.6 1.6 0 .4-.2.8-.5 1.1l-3.1 3.1c-.6.6-1.5.6-2.2.1l-3.2-3.2c-.3-.3-.5-.7-.5-1.1z"
      />
      <path
        className="st1"
        d="M155.7 1401.7c0 .2-.1.3-.2.4l-3.1 3.1c-.2.2-.6.2-.9 0l-3.1-3.1c-.1-.1-.2-.3-.2-.4 0-.3.2-.6.6-.6h6.3c.3 0 .6.3.6.6m2 0c0-1.4-1.2-2.6-2.6-2.6h-6.3c-1.4 0-2.6 1.2-2.6 2.6 0 .7.3 1.3.8 1.8l3.1 3.1.1.1.1.1c1.1.9 2.6.8 3.5-.2l3.1-3.1c.5-.5.8-1.1.8-1.8z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.2,
          enableBackground: "new"
        }}
        width={289}
        height={178}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAACyCAYAAADiWhJ8AAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABY9JREFUeNrs21tvWkcUgNFzwMYx zs1pm6ZVq6r//2dFVVWnaRLHxhcMdCbdE4/HBxs3TSLVa0lbBAw85OHTngN0HcBX0n/h1wH/b6vP FZK+uhUgYF2AVpvGaJOQ9M2MmgiJEYhOic0ypn589W8CVAenzFaacXXfNgSUyCyaKTFaG6J18Shx GUd0tmMmMdvxeAmRTQjub3hKaOZpzqvJ9y9iVlWMPtpas/mMqvA8SDON2UuzG49NqgiJD9zvAOXY nKU5SXOcZhZzEo/P4zWLmwJU4pM3n50IzuM0+2mepnmS5lHE6EEEqg6QEMH9iU+5vYiNZxbxeRfz Js3bNEfxt3kVrGsB6qtjV47PwzTP0jxP832a79J8E0F6uCZAwP2yjK2mBOh9ROdVmoNoybi7eh3o 4/WgdgMqR6/d2HZyeH6O+SHNt/H4NN7YEQwEaBFbUNmA3sTy8rCKT7kWVC5OXwlQvf1M4uj1LKLz S5pf0/xYvelObD/jzidhcN+PYiVC5RpQ7sSjaMkytqP8+Gkcwz5+MtYewerjVz5uvUjzU8yL2H52 q6OXT8BAgNoITaMRywjPYRzL3sf9sgldOYKNmgDlC8/5us/zOHo9jccnzeYjPiBCJULb1bErxyhf jC7Xg17H38+jGx82oH7gCDaNFepJd/nJ1253+R2gkf9zoDkBlVNR+VLik+7y0/PywdWV5rRHsHIR eieCM41b13yATWNUvricg7PXXf3azrjuR30Np++ufwlxUr2o/ARDfIB18alPU9tNR9oT17WjVP3b r/o3X6PONR/gbhHqb2vI6JYXiw7wX4RosCWjDd8A4FNDdI1Ps4CvRoAAAQIECECAAAECECBAgAAE CBAgAAECBAhAgAABAhAgQIAABAgQIECAAAQIECAAAQIECECAAAECECBAgAAECBAgAAECBAhAgAAB AhAgQIAAAQIQIECAAAQIECAAAQIECECAAAECECBAgAAECBAgAAECBAgQIAABAgQIQIAAAQIQIECA AAQIECAAAQIECECAAAECECBAgAAECBAgQIAABAgQIAABAgQIQIAAAQIQIECAAAQIECAAAQIECECA AAECBAhAgAABAhAgQIAABAgQIAABAgQIQIAAAQIQIECAAAQIECAAAQIECBAgAAECBAhAgAABAhAg QIAABAgQIAABAgQIQIAAAQIQIECAAAHyXwAIECBAAAIECBCAAAECBCBAgAABCBAgQAACBAgQgAAB AgQgQIAAAQIEIECAAAEIECBAAAIECBCAAAECBCBAgAABfFKAVs0twGcN0GpgRAj4YhtQjs0yZhGz bIIEsInVTe0YDTwpB+cizTxuF1WQbEPAJuoFpp7Vug2obD45OudpTmPOIkY2IWCTjWdRLTLnMW1D PtiKO33cX8QTT9IcpzmKyfen8fwunt/7vwYGNp8SntyNWcxpPLaol5itZvupA/Q+zduY/TQ78dx8 OxYhYCA+y4hNXmAOox+HscicRZyW9QbUrk7n8eL8wldpnqXZi+NajtNuvG4kQMDA9pMXmDdpDqIh r9O8izBdVMewVRugZQRoFm/wR8RnHI/vx1Fsu9qCAEo/5tGPHJ3fYg4iQLP4+3LoCFYXbBYbUDlu zWONehpBmggQsCZA+QT1V5rf07yMAB1WG9Bq6AhWB+g0itXHsew4ivY4jmCT5ggmRHC/49MuMO+i GTk+f3b/XAM67y6vE63aAJU3KdeBuupIdhRvNo2taEuAgIEA5X6cRYQOY/IHWiddcwF6XTj6iMs4 QjOJ6OzEv7fj737ICgwdw4a+S3jRbj83bS59E6ISo3G1+dh6gHURKl9ELLerNj63HZ36JjSjgccA hiJUB2ft78E2CUnfBAngLiHqujU/37prUAQIuEuAbvS3AAMA4axiSwVYINAAAAAASUVORK5CYII="
        transform="translate(1104.538 38.516) scale(.9944)"
      />
      <path
        className="st1"
        d="M1378.9 208.3h-263.2c-3.4 0-6.1-2.8-6.1-6.1V50.6c0-3.4 2.8-6.1 6.1-6.1h263.2c3.4 0 6.1 2.8 6.1 6.1v151.5c0 3.4-2.7 6.2-6.1 6.2z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.2,
          enableBackground: "new"
        }}
        width={234}
        height={122}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAAB8CAYAAABqtVxXAAAACXBIWXMAAAs6AAALOgFkf1cNAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABI5JREFUeNrs2+1PW2UYwOFzaMvL gOGcOo0a/f//LD8YlzDGkNe2cHyOuR9yc2gZ0LJMc13JnUpt92HJz/t5Sm0aAGD92i/0HmC5bt3x temxFS6sNdYuRdutEmw7mI3Bo2hh9VBvYroFAT862BpmnXHMKB7r87YtPD/UeZnr9Hi9IN5b4yV/ aN2gfZyTMptltspsx+NmPG/TwvOCrZFOy1ylmcbz8wj3zjF5vCTWjYi1j3OnzG6ZvTL78fgqoh2l aG1aeDjUZrBZ+zgvypyVOY3Hfs4j3rp1lwbbps26FXF+U+ZNmW/LvC1zEOFuDbYs8Lhw63a9jEBP yhyX+VjmKB5PI+Y7R+NFwY5ie+5GpO/K/FjmpzLfx3N7cTwWLKwW7GkE+6HM+zjRjuK1+cOofx/H D2zX1xHor2V+K/NzmR9i2+7Ga0aChScHm4/E5ynY/ViWTUQ9S3fZbhhsk+6u23H07QP9pczv8fhd hDzcroKFxwdbo53FXfUsutqK19S7bb7L9q9vhxt2I0LcjtrfpuPwu7RdJ2m7NoKFJwWbj7vzOAZv plhP4057HP9co729w7YLjsS7sWXrh04H6e46tllhLZu2Lr82Nm4f6GF0t5eunu1wwy7asvVXOjvp vwLj9AcAq0Xbpt724mj8Ok64O4Ogb4+0w2DrN5smaUaND5lgnWpv9duDm2lRbqcFubEs2Cp/eWKU V7K/Y3jxcCfpJJs/2G03lrx5eK9txAovFuvwf7DJ0w43KfD1xLso4law8PVHu/CuCvxHCBYECwgW BAsIFhAsCBYQLCBYECwgWECwIFhAsIBgQbCAYAHBgmABwQKCBcECggUEC4IFBAsIFgQLCBYQLAgW ECwgWBAsIFhAsCBYQLCAYEGwgGABwYJgAcECggXBAoIFBAuCBQQLCBYECwgWECwIFhAsIFgQLCBY QLAgWECwgGBBsIBgAcGCYAHBAoIFwQKCBQQLggUECwgWBAsIFhAsCBYQLCBYECwgWECwIFhAsIBg QbCAYOH/r0vzpGC7z70ZWKubJdM9FGwNtH/hdcy9NwJr26i5tXmZWcx82N34gTfXN12VmcZsOUbD iwQ7j8Yu00wH0XbLgq1vPI05i583y7TxmtbfNazlGDyLvvrO/i5zEt1dxL+7rlt2UbDz2Kr9G4/L fCjzJrZrFzFv2rSwlu16HU31gR6VOYzmjiPgabqW3m7Y4b31Kl5cgz1Iwb5KwdqysHqwV7FVD2P6 cD+VOU/B3tuwXdqwF/GG9+neOo3n9tJzrWjh2bHW3i4j2L63P8r8GdGeRsw3y47EN+lI3P8Bowhy Hkfk/mi8Gxt2JFZY+f6aN2x/mv0r5mNs2HyH7YYbNl+Cz9LPV7Fd98vslJkMjsTChadt1+Ed9iyi PYpYT2LzzptH/FpnvuCM/SlirdvVh06werj5VzrnEe55xDpLx+Huoc3YRpCjiHoSoU7SUViwsJ57 bI121tz/0sSdL048dJRtU5gbaau2jQ+b4CWiXfSVxG4YZfOZaJsFG1Ws8DJ32m7wc9M8MzxbFb7M tl3qHwEGAL+YWH80skl/AAAAAElFTkSuQmCC"
        transform="translate(39.685 38.516) scale(.9918)"
      />
      <path
        className="st1"
        d="M258.9 152.4H50.1c-3.4 0-6.1-2.8-6.1-6.1V50.6c0-3.4 2.8-6.1 6.1-6.1h208.7c3.4 0 6.1 2.8 6.1 6.1v95.6c.1 3.4-2.7 6.2-6 6.2z"
      />
      <circle
        cx={1145.7}
        cy={179.7}
        r={8}
        style={{
          fill: "rgb(180, 0, 43)"
        }}
      />
      <circle
        cx={1145.7}
        cy={102.1}
        r={8}
        style={{
          fill: "#00cd98"
        }}
      />
      <circle
        cx={1145.7}
        cy={121.5}
        r={8}
        style={{
          fill: "#3574e0"
        }}
      />
      <circle
        cx={1145.7}
        cy={140.9}
        r={8}
        style={{
          fill: "#fbc43b"
        }}
      />
      <circle
        cx={1145.7}
        cy={160.4}
        r={8}
        style={{
          fill: "#ff6200"
        }}
      />
      <text
        transform="translate(1163.657 106.793)"
        className="st35 st8 st27">
        {"Funcionando"}
      </text>
      <text
        transform="translate(1163.657 126.793)"
        className="st35 st8 st27">
        {"Movi\xE9ndose"}
      </text>
      <text
        transform="translate(1163.657 146.793)"
        className="st35 st8 st27">
        {"Falla"}
      </text>
      <text
        transform="translate(1163.657 166.793)"
        className="st35 st8 st27">
        {"Bloqueada"}
      </text>
      <text
        transform="translate(1163.657 186.793)"
        className="st35 st8 st27">
        {"Detenida"}
      </text>
      <text
        transform="translate(78.224 78.61)"
        className="st7 st36 st27">
        {"Conectividad de Planta"}
      </text>
      <text
        transform="translate(112.017 129.089)"
        className="st7 st36"
        style={{
          fontSize: 17
        }}>
        {getConexion(datosScada.con)}
      </text>
      <image
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        width={37}
        height={38}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAnCAYAAABjYToLAAAACXBIWXMAAArrAAAK6wGCiw1aAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7pJREFUeNrsmHFP2zAQxes4aSkt rLBuCKFN+/6fC9gGhUKhpSFNPEd6Nz0OO0kp2x/TIj2lhdT55Z3vfE6v9//4Rw7zh8dwfxvMRM4x MLctpNkBKMFZPoegKoJyAdjokb4RSGSV5LoKKkmVAm2EMx2hNFA/IIv/iVMbr2eogDYRSLetYzGg fWgEDSABqwFyr7XXk9cK5zVANwrylXtpR6iMgMZeh14fvCY413B7BFYAYun1AC287gG5BvgzhfoF XNoSPoNrBgCqQY69pl6fvD7ibwcAswRWO/QImDuvG+ieYAXSaefSFrcYqoY48TqFTghsHADL4VgN cut17fXTa4bvqSolrs0xnuwZwjcByFevL15n+H4Mt4a41mKMEmES1/gBxhgzUZlbcbY2gWm3TgH1 DWBTzLUhrrNUzzgrDyFJErm+gqs5ZWwVC6VRYRxick8BdkZuTXCzPtUxXVwHCPEA48m4BnPrEeFe UyI0zjGLG44I7DOA6s9HcJKdMoHKnxKQUYW3hpojMR4B99u1tGXSj+DMFDpGWPaVCyYyJWTODPD5 ADcvkBQzZKrAWfz/hWMcRkt16xBwRwTVb3Aq9KA9/GZIxVdq4EFgzCqJDGZVQR1TEc06QukHtvit JMAIUJIUGa+3aaSoSjgzwAxx7reEL3YkNOcySoo9lRxy/2C7oueayNIStUsfl5B72n3DT9I1FO/R 7W5lca+hySsDldntcD/5fRnoMFwbGENtqDo/B1qVrgfXrwJj8biFBkwCTyMDFYF+KqciWL3BpYL6 tBWqvnQYBVf+EBg/mSzC3KbI2lZ1CKtTHa10HNKbSQv0pF1LI7Zzd7BAZZ6j8o+QTQktX027pJLc l/5sjoo/x/grvVbalrYnRe3irqCvi2Fgm1ZRi81QN1iG6r7s3OvC6woPvqJp8grMBHZElgpjpgqs IZCKHOJJvka4bgD0HTrHeQbovKtjJrAaGOVSSdlb0K4oV6GroX7AoQsAXcIt2Qfw5He2w7YuUdU/ pQfSyaKzjsGuAHcNzRDCJZWixtaaNwYb3GSh5lWBGz+ojiOl1rqg5JkDRsBuI1CurVF0an9oVC+/ xMAT1TYzWA6wB7VLuqPtHGdj1WX71gu45hTYnKC4nzKq3CwJZBHY/JZv2YlXkeq9wk2GVEa4trHb T0o5JUt0DTZbLPb8EiWl1wUZJQSXEJ2thdoNNb672KaVMaofs6pH032ai7ztaQTa5f2YiRRiE1gJ qsBOu9P7sfd8o2gimd3b5oWdHL8EGAAr3tUd/00Y+gAAAABJRU5ErkJggg=="
        transform="translate(69.31 103.59) scale(1.0206)"
      />
      <circle
        className="st1"
        cx={88.2}
        cy={123.1}
        r={12.1}
      />

      <circle
        cx={88.2}
        cy={123}
        r={8.9}
        style={{
          fill: getColorConexion(datosScada.con)
        }}
      />
      <text
        transform="translate(1137.693 78.61)"
        className="st7 st36 st27">
        {"Funcionamiento de dispositivos"}
      </text>
      <path
        style={{
          opacity: 0.5,
          fill: "none",
          stroke: "#b3b3b3",
          strokeWidth: 0.5,
          strokeMiterlimit: 10,
          enableBackground: "new"
        }}
        d="M62.6 97.1h185.8"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.2,
          enableBackground: "new"
        }}
        width={176}
        height={118}
        xlinkHref="data:image/png;base64,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"
        transform="matrix(-.9076 0 0 .9915 977.268 531.702)"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.26
        }}
        width={174}
        height={122}
        xlinkHref="data:image/png;base64,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 rkJggg=="
        transform="translate(818.496 527.296)"
      />
      <path
        className="st1"
        d="M877.8 536.4h100c3.2 0 5.8 2.8 5.8 6.3V634c0 3.5-2.7 6.3-5.8 6.3H839.2c-3.2 0-5.8-2.9-5.8-6.3v-36.9c0-.9-.3-1.8-.8-2.4l-4.7-5.5c-1-1.3-1.1-3.3-.1-4.6l4.9-6.5c.5-.6.7-1.4.7-2.2v-33.2c0-3.5 2.7-6.3 5.8-6.3h38.6z"
      />

      {/* Diferencial de Presión F-002 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(19, "Diferencial de Presión F-002", false)}>
        <path
          className={getTarjetaClass(19, selected)}
          d="M839.3 536.4h137.4v103.9H839.3z"
        />
        <text
          transform="translate(886.834 626.921)"
          className="st7 st8 st21">
          {/* {getScaledValue(datosScada.d19,1)} */}
          {getScaledValue(datosScada.d0 - datosScada.d3, 1)}
        </text>
        <text
          transform="translate(871.636 559.256)"
          className="st7 st8 st9">
          {"PT003 - PT026"}
        </text>
        <text
          transform="translate(942.666 626.86)"
          className="st7 st8 st22">
          {"Bar"}
        </text>
        <text
          transform="translate(868.108 579.839)"
          className="st19">
          <tspan
            x={0}
            y={0}
            className="st15 st8 st22">
            {"Diferencial de"}
          </tspan>
          <tspan
            x={0}
            y={15.6}
            className="st15 st8 st22">
            {"Presi\xF3n F-002"}
          </tspan>
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(19, loading, datosAlarmas)}`}
        /* onClick={() => {onClickAlarma(19,"Diferencial de Presión F-002")}} */
      >
        <path d="M854 615.8c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M852.3 614.8c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM863.6 613.5c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M864.2 611.7c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM865.1 620.8v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM860.1 628.3c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Diferencial de Presión F-002 */}

      <image
        style={{
          overflow: "visible",
          opacity: 0.2,
          enableBackground: "new"
        }}
        width={176}
        height={118}
        xlinkHref="data:image/png;base64,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"
        transform="matrix(-.9076 0 0 .9915 975.737 666.509)"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.26
        }}
        width={175}
        height={122}
        xlinkHref="data:image/png;base64,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"
        transform="translate(816.496 662.296)"
      />
      <path
        className="st1"
        d="M876.2 671.2h100c3.2 0 5.8 2.8 5.8 6.3v91.3c0 3.5-2.7 6.3-5.8 6.3H837.6c-3.2 0-5.8-2.9-5.8-6.3v-36.9c0-.9-.3-1.8-.8-2.4l-4.7-5.5c-1-1.3-1.1-3.3-.1-4.6l4.9-6.5c.5-.6.7-1.4.7-2.2v-33.2c0-3.5 2.7-6.3 5.8-6.3h38.6z"
      />

      {/* Presión de Salida F-002 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(3, "Presión de Salida F-002", false)}>
        <path
          className={getTarjetaClass(3, selected)}
          d="M837.7 671.2h137.4v103.9H837.7z"
        />
        <text
          transform="translate(885.303 761.728)"
          className="st7 st8 st21">
          {getScaledValue(datosScada.d3, 1)}
        </text>
        <text
          transform="translate(888.24 694.063)"
          className="st7 st8 st9">
          {"PT026"}
        </text>
        <text
          transform="translate(941.136 761.666)"
          className="st7 st8 st22">
          {"Bar"}
        </text>
        <text
          transform="translate(873.369 714.646)"
          className="st19">
          <tspan
            x={0}
            y={0}
            className="st15 st8 st22">
            {"Presi\xF3n de"}
          </tspan>
          <tspan
            x={-5.8}
            y={15.6}
            className="st15 st8 st22">
            {"Salida F-002"}
          </tspan>
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(3, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(3, "Presión de Salida F-002");
        }}>
        <path d="M852.4 750.6c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M850.7 749.6c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM862 748.3c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M862.6 746.5c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM863.5 755.6v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM858.5 763.1c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presión de Salida F-002 */}

      <path
        className="st14"
        d="M422.5 1039.8h29.2"
      />
      <text
        transform="translate(197.732 1230.335)"
        className="st19">
        <tspan
          x={0}
          y={0}
          className="st7 st8 st9">
          {"ANTI"}
        </tspan>
        <tspan
          x={-26.6}
          y={13.2}
          className="st7 st8 st9">
          {"INCRUSTANTE"}
        </tspan>
      </text>
      <path
        className="st12"
        d="M232.5 1150.6h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
      />
      <path
        className="st4"
        d="M222 1159.6h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
      />
      <path
        className="st13"
        d="M192 1171.3h38.8v40H192z"
      />
      <path
        className="st12"
        d="M230.8 1164.6v45.2c0 .7-.4 1.3-.8 1.3h-37.1c-.5 0-.8-.6-.8-1.3v-45.2"
      />
      <path
        className="st29"
        d="M240.1 1148.6h10.5c2.5 0 4.5 2 4.5 4.5v248.3"
      />
      <path
        className="st11"
        d="M250.6 1401.7c0-.9.7-1.6 1.6-1.6h6.3c.9 0 1.6.7 1.6 1.6 0 .4-.2.8-.5 1.1l-3.1 3.1c-.6.6-1.5.6-2.2.1l-3.2-3.2c-.3-.3-.5-.7-.5-1.1z"
      />
      <path
        className="st1"
        d="M259.1 1401.7c0 .2-.1.3-.2.4l-3.1 3.1c-.2.2-.6.2-.9 0l-3.1-3.1c-.1-.1-.2-.3-.2-.4 0-.3.2-.6.6-.6h6.3c.4 0 .6.3.6.6m2 0c0-1.4-1.2-2.6-2.6-2.6h-6.3c-1.4 0-2.6 1.2-2.6 2.6 0 .7.3 1.3.8 1.8l3.1 3.1.1.1.1.1c1.1.9 2.6.8 3.5-.2l3.1-3.1c.6-.5.8-1.1.8-1.8z"
      />
      <path
        className="st14"
        d="M673.2 466.3H717c2.8 0 5-2.3 5-5V213.8c0-2.8 2.3-5 5.1-5h74.6c2.7 0 5.1 2.2 5.1 5v261.4"
      />
      <circle
        className="st23"
        cx={806}
        cy={244.8}
        r={9.2}
      />
      <circle
        className="st23"
        cx={806}
        cy={380.6}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.2,
          enableBackground: "new"
        }}
        width={176}
        height={118}
        xlinkHref="data:image/png;base64,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"
        transform="matrix(-.9076 0 0 .9915 976.737 321.702)"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.26
        }}
        width={175}
        height={122}
        xlinkHref="data:image/png;base64,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 fwUYAB+geUWTAdJ4AAAAAElFTkSuQmCC"
        transform="translate(817.496 317.296)"
      />
      <path
        className="st1"
        d="M877.2 326.4h100c3.2 0 5.8 2.8 5.8 6.3V424c0 3.5-2.7 6.3-5.8 6.3H838.6c-3.2 0-5.8-2.9-5.8-6.3v-36.9c0-.9-.3-1.8-.8-2.4l-4.7-5.5c-1-1.3-1.1-3.3-.1-4.6l4.9-6.5c.5-.6.7-1.4.7-2.2v-33.2c0-3.5 2.7-6.3 5.8-6.3h38.6z"
      />

      {/* Diferencial de Presión F-001 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(18, "Diferencial de Presión F-001", false)}>
        <path
          className={getTarjetaClass(18, selected)}
          d="M838.7 326.4h137.4v103.9H838.7z"
        />

        <text
          transform="translate(886.303 416.921)"
          className="st7 st8 st21">
          {/* {getScaledValue(datosScada.d18,1)} */}
          {getScaledValue(datosScada.d0 - datosScada.d2, 1)}
        </text>
        <text
          transform="translate(871.106 349.256)"
          className="st7 st8 st9">
          {"PT003 - PT007"}
        </text>
        <text
          transform="translate(942.136 416.86)"
          className="st7 st8 st22">
          {"Bar"}
        </text>
        <text
          transform="translate(867.577 369.839)"
          className="st19">
          <tspan
            x={0}
            y={0}
            className="st15 st8 st22">
            {"Diferencial de"}
          </tspan>
          <tspan
            x={0}
            y={15.6}
            className="st15 st8 st22">
            {"Presi\xF3n F-001"}
          </tspan>
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(18, loading, datosAlarmas)}`}
        /* onClick={() => {onClickAlarma(18,"Diferencial de Presión F-001")}} */
      >
        <path d="M853.4 405.8c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M851.7 404.8c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM863 403.5c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M863.6 401.7c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM864.5 410.8v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM859.5 418.3c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Diferencial de Presión F-001*/}

      <image
        style={{
          overflow: "visible",
          opacity: 0.2,
          enableBackground: "new"
        }}
        width={176}
        height={118}
        xlinkHref="data:image/png;base64,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"
        transform="matrix(-.9076 0 0 .9915 976.737 187.509)"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.26
        }}
        width={175}
        height={122}
        xlinkHref="data:image/png;base64,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"
        transform="translate(817.496 183.296)"
      />
      <path
        className="st1"
        d="M877.2 192.2h100c3.2 0 5.8 2.8 5.8 6.3v91.3c0 3.5-2.7 6.3-5.8 6.3H838.6c-3.2 0-5.8-2.9-5.8-6.3v-36.9c0-.9-.3-1.8-.8-2.4l-4.7-5.5c-1-1.3-1.1-3.3-.1-4.6l4.9-6.5c.5-.6.7-1.4.7-2.2v-33.2c0-3.5 2.7-6.3 5.8-6.3h38.6z"
      />

      {/*  Presión Salida F-001 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(2, "Presión Salida F-001", false)}>
        <path
          className={getTarjetaClass(2, selected)}
          d="M838.7 192.2h137.4v103.9H838.7z"
        />

        <text
          transform="translate(886.303 282.728)"
          className="st7 st8 st21">
          {getScaledValue(datosScada.d2, 1)}
        </text>
        <text
          transform="translate(889.24 215.063)"
          className="st7 st8 st9">
          {"PT007"}
        </text>
        <text
          transform="translate(942.136 282.666)"
          className="st7 st8 st22">
          {"Bar"}
        </text>
        <text
          transform="translate(874.369 235.646)"
          className="st19">
          <tspan
            x={0}
            y={0}
            className="st15 st8 st22">
            {"Presi\xF3n de"}
          </tspan>
          <tspan
            x={-5.8}
            y={15.6}
            className="st15 st8 st22">
            {"Salida F-001"}
          </tspan>
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(2, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(2, "Presión Salida F-001");
        }}>
        <path d="M853.4 271.6c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M851.7 270.6c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM863 269.3c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M863.6 267.5c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM864.5 276.6v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM859.5 284.1c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presión Salida F-001 */}

      <circle
        className="st23"
        cx={953.9}
        cy={1590.8}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={160}
        height={143}
        xlinkHref="data:image/png;base64,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"
        transform="matrix(.979 0 0 .979 876.25 1437.635)"
      />
      <path
        className="st1"
        d="M934.8 1446.9h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Caudal de Rechazo */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(8, "Caudal de Rechazo", false)}>
        <path
          className={getTarjetaClass(8, selected)}
          d="M885.5 1454.3h138.1v99.8H885.5z"
        />
        <text
          transform="translate(936.053 1542.116)"
          className="st7 st8 st21">
          {getScaledValue(datosScada.d7 - datosScada.d8, 1)}
        </text>
        <text
          transform="translate(919.506 1474.45)"
          className="st7 st8 st9">
          {"FIT008 - FIT017"}
        </text>
        <text
          transform="translate(986.886 1542.054)"
          className="st7 st8 st22">
          {"m3/h"}
        </text>
        <text
          transform="translate(928.677 1495.033)"
          className="st15 st8 st22">
          {"Caudal de"}
        </text>
        <text
          transform="translate(927.581 1511.74)"
          className="st15 st8 st22">
          {" Rechazo"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(17, loading, datosAlarmas)}`}
        /* onClick={() => {onClickAlarma(17,"Caudal de Rechazo")}} */
      >
        <path d="M902.2 1531c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M900.5 1530c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM911.8 1528.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M912.4 1526.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM913.3 1536v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM908.3 1543.5c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Caudal de Rechazo */}

      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={161}
        height={143}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKMAAACRCAYAAACv3ggmAAAACXBIWXMAAAthAAALYQFbeSumAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB5ZJREFUeNrsmwlzm1YURtkky1sT J+30//+/JnFs2dqhaOa+9vP1A4GtLMA5M3eQFVsYfLjLgyQJAAC8JP3NPw+GQ/Wr5EmREToK2VnS 4o0SntrCtEWsIhJW55QxbYhMXiPktGX0UToxq3PI6MXL7XXYZkhJNhT5Dvb6IK/LU0KmPUXMLY4S z2wbIhch/Wcj5ngFTFwm3JuAO3u9k/dKEbZ3ZlQRg3RziwuJmQiZugyJjNPoD4OIx9jWsZHYipRJ k5BFDxFnJuFlHVcSlybk3L4vo1RPTspSsuFRvHUdzxKriAuvhOySGUN5npt8N3Xc1vGHxbW9fxHJ jmTG6fSKeyfiYx0PkqBiQ86Lzyo6TM65ZcWFifehjrs6PtXx0b6+luyYM8hMTsaDyHgUcVnHvSSo tGGg6ZwZtUSH8nxrAv5Zx191fLavb+zf5zJZJ5EMCeMTUmXcmIwP5sNMRPTDjLpRNcmYRvrFC5Hx zmT827Z39j4yTlNELdNHGZ+sbQsiHqR8r2WYObhyfTIz5pIZQ7/4wUr0Z8uOdy2ZkTI9DSFVxivx 4CDZ8slilfy/DHjQ7HiqZ9QyHXrGWxPyo8SN/fssYfF76gOMiri2/vG7SbqQVZetudEpM+oid5Dx 0oQME/WNxbVrVsmM05Ix9I0zJ+KNrLaoiHrH7uQA4++6FDJRX7oIU/RMZKRXnF6pzmRY8Z4sktc3 RzrLmLilHV30not8s4YdIOP0ZAzbQrzQO3WtIsZkTCP9Xpa8vi9dyNexByUQcRqkrq3zruTOm1jC +q9vzDpkxtRJqTtseqwMpillmsQfrMmS+OOGL1zL3rEzRIS+jrSSddhB24ciILR50+ZRbxmb+gMk hD5SdsqO2Zl2gJjwbjeyHjtIkA7OLOy7MyPADwEZARkBkBGQEQAZARkBkBGQEQAZARkBkBGQEQAZ ARkBkBGQEQAZAZARkBEAGQEZAZARkBEAGQEZAZARkBEAGQEZAZARkBEAGQEZAZARABkBGQGQEZAR ABkBGQGQEZARABkBGQGQEZARABkBGQGQEQAZARkBkBGQEQAZARkBkBGQEQAZARkBkBGQEQAZARkB kBGQEQAZAZARkBEAGQEZAZARkBEAGQEZAZARkBEAGQEZAZARkBEAGQGQEZARABkBGQGQEcYmY8Vp gt8pM1ayrVreA+jj01nKdEXWhA5exBJVoztZhw9v+mFEhC5V1MdZyvQxSoveO4LJCdmWvHqVaS9Z eeJrsiVUPfzplBljcoVsuJc4SJQuY8J0M6GKV7Y4EvOsKjqW5vChO4utbYOcpfv+dGQnO/0B2WOM MgZX9rLdiysHl7ReSHlKxlJ2sLXYSGxF0EyybTpCId8i59iHvnA8vnruGjzxyesFRQfT9yLiuo7n Op5su6pjYZ+T2s+MScbUXWAxEdMevdPYBj2V8SCOrCyeLdYi5SGSIU/KqLbvRMRlHY91PNRxKSIe dzCvIxcZ04GLGCITITMnpwpZRbJFGVmJGEOW1OM4SNJ6Fj8ezZcnk3NjLvWSMXGZcWMfFkT8XsdV HTMR8Sjmhcnos2M6cBEL2eZyjNmJ1qZsGPiGLqTv+Q5Smo/i3dfxtY5v9vrB3lcZqy4y6jdomQ4y 3ltpVhGPWfPaMmPh/lBDFDGU5iDeTGJu21yONXFZwg97eylRfuAbwwStJXppyepLHf+YkEHGtZyH V5N1W2b0w8vKsuLclebwC1xZZiwGXqo1I+Z2vHM7toXE3M5PLseoF+/Gzs1a/gihke+07jYAEWP9 4tLk+2pCfjE5l+aQlulOA0zidhR6xlxOfilpOZTt+UhkzKQsBwkvLfvf2LGGtiRkyUpE1EHvSbLC OtIzDVXGxC3n6HE/WgW9t8z43d7ftB1/0XFKCn1jKlPzTrLltWSLomGiTgcmYyjPFybeUcLbOj7Y 9kaqQS7nZO2GvEeLsPqwlVJdDlTCmCM7mS2e5LjDEPPsjj3pkxkrV3p8xtTSvZASPTYZFybdUb6P ItXapAxLW5WdkyeXGbSBfx6ZjLoEuHNCxpZ2dsnrOzGdy7SfqpNIwzqXpr5teBmijIXIeCtX+EqE vBQZNzLk6UQZeqb1wGVsElIr6C55eXNkK8fc2p4UHXdcRnYcroLCZcSsw8LwkGScm3C3TsRw5V+J jGuR8avFvcmoSxtDljG2JKXDrkrpn2WokpZnGIqeOy4jQmaRtcUhL3jr0k4hk3TIhCvXqF+5zBjW Yb/JssaD9IuN62wjWG/0a6xl0zLOW2X0O01lx3pXYsiL3G3rjBspM3qlh575KlKmHyQjPso0vUte 35sdm5BezKTrhVe8YadeyiQi4RhkDBdX4UTcy0rC0nrKXAaYlQi5jEzRh2Rc/22japm0qz7HWrxj 50lExmQEMvrj0F5I766E+/Rzt7SzkSlyJY186KXG+FR82wPWnY+1+AG/QDqik50m8QdGdzLAhMHN 36P1j9gN/a5L36HmzSUJTk/XqUzYIWaygqBLYD7GLuJZ+yM4fZ70NmEWWUXQhwbKSCAhMp5dSP94 WepKVelekw2R8adI6c9j1SAmIONPO3dph6kSkPGXnDtEBACAM/CvAAMArmqEUVfvl/oAAAAASUVO RK5CYII="
        transform="matrix(.979 0 0 -.979 1145.69 1255.873)"
      />
      <path
        className="st1"
        d="M1242.2 1246.6h45.1c3.5 0 6.3-2.8 6.3-6.3V1138c0-3.5-2.8-6.3-6.3-6.3h-53.7c-1.3 0-2.5-.4-3.5-1.3-6.4-6.7-6.4-6.7-12.9-.2l-.4.3c-1 .8-2.2 1.2-3.4 1.2h-51.7c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h80.5z"
      />

      {/* ORP Permeado */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(16, "ORP Permeado", false)}>
        <path
          className={getTarjetaClass(16, selected)}
          d="M1155.5 1139.4h138.1v99.8h-138.1z"
        />
        <text
          transform="translate(1207.8 1226.629)"
          className="st7 st8 st21">
          {getScaledValue(datosScada.d16, 1)}
        </text>
        <text
          transform="translate(1208.253 1158.963)"
          className="st7 st8 st9">
          {"AE019"}
        </text>
        <text
          transform="translate(1264.632 1226.568)"
          className="st7 st8 st22">
          {"mV"}
        </text>
        <text
          transform="translate(1185.713 1190.25)"
          className="st15 st8 st22">
          {" ORP Permeado"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(16, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(16, "ORP Permeado");
        }}>
        <path d="M1171.9 1215.6c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M1170.2 1214.6c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM1181.5 1213.3c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M1182.1 1211.5c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM1183 1220.6v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1178 1228.1c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin ORP Permeado */}

      <circle
        className="st23"
        cx={1222.9}
        cy={1097.8}
        r={9.2}
      />
    </svg>
  );
};

export default ScadaAquaChileCTP;

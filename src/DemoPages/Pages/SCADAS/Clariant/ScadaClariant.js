import * as React from "react";
import {
  getColor,
  getColorConexion,
  getConexion,
  getScaledValue,
  getTarjetaClass,
  getTemaAlarma
} from "../../../../commons/scada/scada";

const ScadaClariant = (props) => {
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
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      id="Capa_1"
      x={0}
      y={0}
      style={{
        enableBackground: "new 0 0 1429.5 1692.1"
      }}
      viewBox="0 0 1429.5 1692.1"
      {...props}>
      <style>
        {
          ".st0,.st1{fill:none;stroke:#2f3e49;stroke-width:4;stroke-miterlimit:10}.st1{stroke:#35ace8}.st2{fill:#fff}.st4{fill:#00cd98}.st5{fill:#3574e0}.st8{fill:#666}.st10{font-size:14px}.st11{fill:#606060}.st16{fill:none;stroke:#00aeed;stroke-width:4;stroke-miterlimit:10}.st17{fill:#0e76e7}.st18{fill:#00aeed}.st19{enable-background:new}.st20{font-size:11px}.st21{fill:#323e48}.st22,.st23,.st24{fill:none;stroke:#323e48;stroke-width:4;stroke-miterlimit:10}.st23,.st24{stroke:#fff;stroke-width:2}.st24{opacity:.6;stroke:#cbcbcb;enable-background:new}.st25{fill:#cbcbcb}.st26{font-size:10px}.st27{fill:#2f3e49}.st28{fill:#00a39b}.st29{opacity:.15;fill:#0e76e7;enable-background:new}.st30{font-size:13px}.st31{font-size:16px}.st32,.st33{fill:#fff;stroke:#2f3e49;stroke-width:4;stroke-miterlimit:10}.st33{stroke:#35ace8}.tarjeta{fill:#ffffff}.tarjetaSeleccionada{fill:#3574e0;opacity:.15}.cursorPointer{cursor:pointer}.cursorNormal{cursor:default}.campana{fill:#3474E0;}.campana:hover{fill:#7c7c7c;}.campanaVacia{fill:#c2c2c1;}.campanaVacia:hover{fill:#7c7c7c;}.campanaDesconectada{fill:#c2c2c1;}"
        }
      </style>
      <path
        d="M261.3 453.5v-23c0-4.5 3.6-8.1 8.1-8.1h560.2c4.5 0 8.1 3.6 8.1 8.1v179"
        className="st0"
      />
      <path
        d="M513.6 455.2H225.4"
        className="st1"
      />
      <image
        xlinkHref="data:image/png;base64,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 gg=="
        width={289}
        height={178}
        style={{
          overflow: "visible",
          opacity: 0.2,
          enableBackground: "new"
        }}
        transform="translate(1101.812 37.638) scale(.9944)"
      />
      <path
        d="M1376.2 207.4H1113c-3.4 0-6.1-2.8-6.1-6.1V49.7c0-3.4 2.8-6.1 6.1-6.1h263.2c3.4 0 6.1 2.8 6.1 6.1v151.5c0 3.4-2.7 6.2-6.1 6.2z"
        className="st2"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAAB8CAYAAABqtVxXAAAACXBIWXMAAAs6AAALOgFkf1cNAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABKhJREFUeNrs2mtPG0cUgOGxvRgK 5EJpm6qRqv7/39VWVUhDIdyMYd3Z9kwYtraxwSSK+jzSkSHYfHtzZpdNCfhqDD7z54D7Zs8V3qB6 FSxsLtjZqvEOVgy1P8NewMD6W7XE2lZfz5aF+1BswyrQUW+Gti08Won0tjdtL+KVgq03aRMzjtmO 1yZ+PrRpYe3N2gV5E3NdzTT+rcTb1r+gWRBrCXErAv0mz26e/Tx78f12Fa1YYb1r1tsIdJLnIs95 vF7GlHhTHW2zZLNuVZG+jjmI1xd5duI9I9ezsPZ16zSi7EI9y3MScxyvZ/H+aX1d2yy4bm1ii77K 812eH/K8iddv87yMn/eDBVa7fu2OvVexVU/zfMhzlOddXHIOe9ey/7w2C7brOI6+XZw/5fk5z9s8 P+Y5jK1bgnUkhvU2bVsdibtgP0awB3GqHVZR1zeiZvOOxKO4Pn0R27UL9ZeI9k0ciXfT3Y0nd4ph /Q1bgpzEsfgglmQTkU7iWvYqjsXd+wfNguNwCfYwturb2LTfx3bdSXc3nFy7wvpbttx4ukl3N3JL rOWYfBIxT+J9n65h64ciRtWR+FUciw+ra9fd3lFYrLB+sKmKttwLamOrHsf17FF8XZZjO+9IXP85 p/5Tzm66uzPcCBUebdA71Q4i1v1Ykq9jOe6l+888DObddKqjHVdT/hewWWGz6t7KMw/lWYd7N3aH C+ovD04sehRRrLC5bVt66z9V2KTen00XBfvQAJsPd96yvHeiHa74S0QKny/afnNLNyzw5cNN8xal YOErIlgQLCBYECwgWECwIFhAsIBgQbCAYAHBgmABwQKCBcECggUEC4IFBAsIFgQLCBYQLAgWECwg WBAsIFhAsCBYQLCAYEGwgGABwYJgAcECggXBAoIFBAuCBQQLCBYECwgWECwIFhAsIFgQLCBYQLAg WECwgGBBsIBgAcGCYAHBAoIFwQKCBQQLggUECwgWBAsIFhAsCBYQLCBYECwgWECwIFhAsIBgQbCA YAHBgmABwQKCBcECgoX/h1nv9cFgZwsGeN5Qy7Tz2hs+8KHb+GArXHjWUNvo7SbPNF5veu2lZsmH ywevY6ZVwIMYYHOxlt4mea6qcNvy5mbOZi2xdh+6zHMR0329E1u5df0LGwu27u0sz8c85/H9dbUo /7NhyzH4OiI9zXOc50Oe/Tyj+PlWfG3LwtO36zR6O4nWuvkrwp3UR+Om+uCg9wsue8HuxVbtPrwd wSbRwqNjTdVR+Dw6+zNeTyLismFndbD9a9eriPV9hLoVP+t+wcsqWMdieFq05UTbbdOjPL/m+T3a O40WS7BLj8TlF4zi3y+j/BcRbJPcfIKnxFr3dhbb9Y88v0WwZ3EkXrhhU+9MXTboNAJ+Fxt3XF3D ChaefiSur2HfxzXsRfysXbZhy7E4ReFtVN4Fu5v+vVPcRMwD17Hw6FhTuv9XmYt0d5f4otqun4Jd FNogghzF9es4jsHjiNV2hc0di0u05ZmHSbr/3EObVtiMJdoS7qj6fmizwsY2bf3wxG1vq7b9KNMD 0c4bscLmo03pgceAV4lOoPDlAl472Ke8H1g/1oX+FmAAN+xcPURU2mQAAAAASUVORK5CYII="
        width={234}
        height={122}
        style={{
          overflow: "visible",
          opacity: 0.2,
          enableBackground: "new"
        }}
        transform="translate(36.959 37.638) scale(.9918)"
      />
      <path
        d="M256.2 151.5H47.4c-3.4 0-6.1-2.8-6.1-6.1V49.7c0-3.4 2.8-6.1 6.1-6.1h208.7c3.4 0 6.1 2.8 6.1 6.1v95.6c.1 3.4-2.7 6.2-6 6.2z"
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
        className="st4"
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
        transform="translate(1160.93 105.915)">
        {"Funcionando"}
      </text>
      <text
        className="st8 st9 st10"
        transform="translate(1160.93 125.915)">
        {"Movi\xE9ndose"}
      </text>
      <text
        className="st8 st9 st10"
        transform="translate(1160.93 145.915)">
        {"Falla"}
      </text>
      <text
        className="st8 st9 st10"
        transform="translate(1160.93 165.915)">
        {"Bloqueada"}
      </text>
      <text
        className="st8 st9 st10"
        transform="translate(1160.93 185.915)">
        {"Detenida"}
      </text>
      <text
        className="st11 st12 st10"
        transform="translate(75.498 77.731)">
        {"Conectividad de Planta"}
      </text>
      <text
        className="st11 st12"
        style={{
          fontSize: 17
        }}
        transform="translate(109.29 128.21)">
        {getConexion(datosScada.con)}
      </text>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAnCAYAAACIVoEIAAAACXBIWXMAAArrAAAK6wGCiw1aAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7VJREFUeNrsmIlu2kAURT2eMVsg oaFtklaV+v+/1YW2KVkAsxnsjqv7osurV6JGqlSkK4yxx8dvt4Pg/+cf/pi/vE720lCm5LsIKmsD aJ4BE2Lb0LYGypUqqKzOiuZEGJFVCumCOcyBlJICgv3j41oAMUx+XkcpIosJUOK1gxLoQGBZkWub WKoIpuc1gIZefa8u/jcEtPFaQyt8b732CvDIaq4hkFUw59AYGmE/Q20BsSA9es3x34YAj9zpalwm botgjRzk0mvi9drrDX7n+89wHEOtAPHgde/102vmFWP/EuBHieAaxFAEK1x4vfW69rqBGGqgoHZk qXvAvIK7H+Fuo+LqUGUpsZKDy4awzHuvD9AN9o1hJY6pDDHD1poAPrf4HW5AZ+jvrHUVQJbcNoaV cqiPgLrG/iHAOfsylX3niLs+jhvhuB3AdxT4gauJpQ4umpv9yusdwMRKIwKylM3iji4u1sNaFv/3 sH8JrSjoS2NK0r+PC18ifq5gsQlirK8sZAoquiO3BoAJEW+SAI8Ayy12cDVW0lAT5bJOCVCggjii tB9jO0bw3yLG5gBNXEU8SZCPqB4xkKMMbdKaHNx5RnBjWPxozaqYiqhYDqEBZZlt2BE0GBfhEXWE jkCFBTBGtZUuTuoroLBFQ9d1T8B6WPcoe8OaRSwF6ikwVXAOIBwGJqiJhyKXvsgnrBhjM+rgPBNl z7iebin7onXDihPlJKm6WzVutBlxGSahFsTr7mXdsODEgKB2GDFW0EYt0AYopTlK5qwYksK511B6 jN3jLmKah2TUSBq6U99kAoAlqvgDimYM0H1ZQw7orja0wD0WuUAKW5okwhooCQOZGGSUucP2knpf amsaskwKXaonHUplQ+2kyOLsshg3dYth76vXJ3zPCOxga9KfW05E31Ydl5ZkK89UApRDfPf67PUF 29KQkzJL6equf5uSx6hEZZYkiEyeP7ymsM4UcFO48MlK+bq2wdOvoQrs1CiiEyOhErKmWVzm828A 0dPBhjPaVQQox4OYX4I6pSTQ06dV43AM98wI6gGQCyozT7XP1WRNijvngJasXOBCY+r00lQZirN3 BhjZtyC3NXrEyqhAblWt2cDs5/TM11NQXOeWOH5O1llRNT+qd6ZFZ7c0yvRonJEZq6PGXrmBNUGs yV3cGVpD6ZGDS4TUrEgV0br3CRk/Up3yLqGoqIZUw6x638BQWcmbl6zs5cYp76fK6pZWVtCMgzqY 577JK3p7ZypenAVt3uj9EmAAVGPAlKf0B2IAAAAASUVORK5CYII="
        width={37}
        height={38}
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        transform="translate(66.583 102.711) scale(1.0206)"
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
        className="st11 st12 st10"
        transform="translate(1134.967 77.731)">
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
        d="M56 306.3h56.5c4.7 0 8.5 3.8 8.5 8.5v38.3"
        className="st16"
      />
      <path
        d="M88 367.7h124.8v97.7H88z"
        className="st17"
      />
      <path
        d="M212.6 351.4v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1V351.4"
        className="st0"
      />
      <path
        d="M114.4 356.2c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
        className="st18"
      />
      <path
        d="M126.1 356.2c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
        className="st2"
      />
      <text
        className="st19"
        transform="translate(110.92 488.535)">
        <tspan
          x={0}
          y={0}
          className="st11 st9 st20">
          {"ESTANQUE DE"}
        </tspan>
        <tspan
          x={-1.8}
          y={13.2}
          className="st11 st9 st20">
          {"ALIMENTACI\xD3N"}
        </tspan>
      </text>
      <path
        d="M549.2 836.9c0-6.7-7.8-12.1-17.5-12.1s-17.5 5.5-17.5 12.1h.1c-.1.3-.1.7-.1 1.1v37.6c0 3.5 3.4 6.4 7.6 6.8v6.2h5.2v-6.1h9v6.1h5.2v-6.2c4.5-.2 8-3.2 8-6.8V838c0-.3-.1-.7-.1-1.1h.1zM458.5 868.9h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM443.3 872.8l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st21"
      />
      <path
        d="m458.9 883.4-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st21"
      />
      <path
        d="M451.1 867.9v10"
        className="st22"
      />
      <path
        d="M442.1 859.9h18M451.1 860.9v8"
        className="st23"
      />
      <path
        d="M464.2 878.8h43.9M403.9 878.8h33.9"
        className="st16"
      />
      <text
        className="st11 st9 st20"
        transform="translate(428.651 905.05)">
        {"VX-101A"}
      </text>
      <text
        className="st11 st9 st20"
        transform="translate(513.64 905.05)">
        {"F-005A"}
      </text>
      <path
        d="M284.3 462.3v41"
        className="st24"
      />
      <path
        d="M289.2 467.6c0 .9-.7 1.6-1.6 1.6h-6.3c-.9 0-1.6-.7-1.6-1.6 0-.4.2-.8.5-1.1l3.1-3.1c.6-.6 1.5-.6 2.2-.1l3.2 3.2c.3.3.5.7.5 1.1z"
        className="st25"
      />
      <path
        d="M280.6 467.6c0-.2.1-.3.2-.4l3.1-3.1c.2-.2.6-.2.9 0l3.1 3.1c.1.1.2.3.2.4 0 .3-.2.6-.6.6h-6.3c-.3 0-.6-.3-.6-.6m-2 0c0 1.4 1.2 2.6 2.6 2.6h6.3c1.4 0 2.6-1.2 2.6-2.6 0-.7-.3-1.3-.8-1.8l-3.1-3.1-.1-.1-.1-.1c-1.1-.9-2.6-.8-3.5.2l-3.1 3.1c-.5.5-.8 1.1-.8 1.8z"
        className="st2"
      />
      <text
        className="st11 st9 st26"
        transform="translate(231.04 592.009)">
        {"HIPOCLORITO"}
      </text>
      <path
        d="M287.4 512.3h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
        className="st0"
      />
      <path
        d="M276.9 521.3h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
        className="st27"
      />
      <path
        d="M246.9 533h38.8v40h-38.8z"
        className="st28"
      />
      <path
        d="M285.7 526.3v45.2c0 .7-.4 1.3-.8 1.3h-37.1c-.5 0-.8-.6-.8-1.3v-45.2"
        className="st0"
      />
      <text
        className="st11 st9 st26"
        transform="translate(599.42 592.009)">
        {"METABISULFITO"}
      </text>
      <path
        d="M660.7 512.3h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
        className="st0"
      />
      <path
        d="M650.2 521.3h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
        className="st27"
      />
      <path
        d="M620.2 533H659v40h-38.8z"
        className="st28"
      />
      <path
        d="M659 526.3v45.2c0 .7-.4 1.3-.8 1.3h-37.1c-.5 0-.8-.6-.8-1.3v-45.2"
        className="st0"
      />
      <path
        d="M367.8 501.6c0-7.8-9.2-14.3-20.6-14.3-11.4 0-20.6 6.4-20.6 14.3h.2c-.1.4-.2.8-.2 1.3v55.8c0 4.1 4 7.5 9 8v7.3h6.1v-7.2h10.5v7.2h6.1v-7.3c5.2-.2 9.4-3.7 9.4-8v-55.8c0-.4-.1-.9-.2-1.3h.3z"
        className="st21"
      />
      <text
        className="st11 st9 st20"
        transform="translate(332.791 592.009)">
        {"F-001"}
      </text>
      <path
        d="M347.2 455.2v26.2"
        className="st1"
      />
      <path
        d="M340.9 479.1c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
        className="st18"
      />
      <path
        d="M352.6 479.1c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
        className="st2"
      />
      <path
        d="M393.5 579v-68.4c0-3.5-2.8-6.3-6.3-6.3h-14"
        className="st1"
      />
      <path
        d="M387.7 581.9c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
        className="st18"
      />
      <path
        d="M399.4 581.9c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
        className="st2"
      />
      <path
        d="M1260.6 610.3H414.1M394.1 590v15.3c0 2.8 2.3 5 5 5h18.4"
        className="st1"
      />
      <path
        d="M458.7 501.6c0-7.8-9.2-14.3-20.6-14.3-11.4 0-20.6 6.4-20.6 14.3h.2c-.1.4-.2.8-.2 1.3v55.8c0 4.1 4 7.5 9 8v7.3h6.1v-7.2h10.5v7.2h6.1v-7.3c5.2-.2 9.4-3.7 9.4-8v-55.8c0-.4-.1-.9-.2-1.3h.3z"
        className="st21"
      />
      <text
        className="st11 st9 st20"
        transform="translate(423.712 592.009)">
        {"F-002"}
      </text>
      <path
        d="M438.1 455.2v26.2"
        className="st1"
      />
      <path
        d="M431.8 479.1c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
        className="st18"
      />
      <path
        d="M443.5 479.1c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
        className="st2"
      />
      <path
        d="M484.4 579v-68.4c0-3.5-2.8-6.3-6.3-6.3h-14"
        className="st1"
      />
      <path
        d="M478.6 581.9c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
        className="st18"
      />
      <path
        d="M490.3 581.9c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
        className="st2"
      />
      <path
        d="M485 590v15.3c0 2.8 2.3 5 5 5h18.4"
        className="st1"
      />
      <path
        d="M549.6 501.6c0-7.8-9.2-14.3-20.6-14.3-11.4 0-20.6 6.4-20.6 14.3h.2c-.1.4-.2.8-.2 1.3v55.8c0 4.1 4 7.5 9 8v7.3h6.1v-7.2H534v7.2h6.1v-7.3c5.2-.2 9.4-3.7 9.4-8v-55.8c0-.4-.1-.9-.2-1.3h.3z"
        className="st21"
      />
      <text
        className="st11 st9 st20"
        transform="translate(514.632 592.009)">
        {"F-003"}
      </text>
      <path
        d="M522.7 479.1c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
        className="st18"
      />
      <path
        d="M534.4 479.1c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
        className="st2"
      />
      <path
        d="M575.4 579v-68.4c0-3.5-2.8-6.3-6.3-6.3h-14"
        className="st1"
      />
      <path
        d="M569.6 581.9c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
        className="st18"
      />
      <path
        d="M581.3 581.9c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
        className="st2"
      />
      <path
        d="M575.9 590v15.3c0 2.8 2.3 5 5 5h18.4M528.7 475.6v-15.3c0-2.8-2.3-5-5-5h-18.4"
        className="st1"
      />
      <path
        d="M688.5 595.9v-77.4c0-3.5-2.8-6.3-6.3-6.3h-13"
        className="st24"
      />
      <path
        d="M683.7 598.6c0-.9.7-1.6 1.6-1.6h6.3c.9 0 1.6.7 1.6 1.6 0 .4-.2.8-.5 1.1l-3.1 3.1c-.6.6-1.5.6-2.2.1l-3.2-3.2c-.3-.3-.5-.7-.5-1.1z"
        className="st25"
      />
      <path
        d="M692.3 598.6c0 .2-.1.3-.2.4l-3.1 3.1c-.2.2-.6.2-.9 0L685 599c-.1-.1-.2-.3-.2-.4 0-.3.2-.6.6-.6h6.3c.3 0 .6.3.6.6m2 0c0-1.4-1.2-2.6-2.6-2.6h-6.3c-1.4 0-2.6 1.2-2.6 2.6 0 .7.3 1.3.8 1.8l3.1 3.1.1.1.1.1c1.1.9 2.6.8 3.5-.2l3.1-3.1c.5-.5.8-1.1.8-1.8z"
        className="st2"
      />
      <text
        className="st11 st9 st26"
        transform="translate(705.572 592.009)">
        {"ANTIINCRUSTANTE"}
      </text>
      <path
        d="M771.9 512.3h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
        className="st0"
      />
      <path
        d="M761.4 521.3h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
        className="st27"
      />
      <path
        d="M731.4 533h38.8v40h-38.8z"
        className="st28"
      />
      <path
        d="M770.2 526.3v45.2c0 .7-.4 1.3-.8 1.3h-37.1c-.5 0-.8-.6-.8-1.3v-45.2"
        className="st0"
      />
      <path
        d="M807.7 595.9v-77.4c0-3.5-2.8-6.3-6.3-6.3h-21"
        className="st24"
      />
      <path
        d="M802.8 598.6c0-.9.7-1.6 1.6-1.6h6.3c.9 0 1.6.7 1.6 1.6 0 .4-.2.8-.5 1.1l-3.1 3.1c-.6.6-1.5.6-2.2.1l-3.2-3.2c-.3-.3-.5-.7-.5-1.1z"
        className="st25"
      />
      <path
        d="M811.4 598.6c0 .2-.1.3-.2.4l-3.1 3.1c-.2.2-.6.2-.9 0l-3.1-3.1c-.1-.1-.2-.3-.2-.4 0-.3.2-.6.6-.6h6.3c.3 0 .6.3.6.6m2 0c0-1.4-1.2-2.6-2.6-2.6h-6.3c-1.4 0-2.6 1.2-2.6 2.6 0 .7.3 1.3.8 1.8l3.1 3.1.1.1.1.1c1.1.9 2.6.8 3.5-.2l3.1-3.1c.5-.5.8-1.1.8-1.8z"
        className="st2"
      />
      <image
        xlinkHref="data:image/png;base64,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 lU1nM/QAAAAASUVORK5CYII="
        width={176}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(440.79 262.188)"
      />
      <path
        d="M509.3 271.8h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3V278.1c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
        className="st2"
      />

      {/* Diferencial de Pretratamiento */}
      {/* Tarjeta */}

      <g
        className="cursorPointer"
        onClick={() =>
          loadGrafico(3, "Diferencial de Pretratamiento", false, true)
        }>
        <path
          d="M450 279.2h157.1V379H450z"
          className={getTarjetaClass(3, selected)}
        />
        <text
          className="st19"
          transform="translate(500.099 323.934)">
          <tspan
            x={0}
            y={0}
            className="st17 st9 st30">
            {"Diferencial"}
          </tspan>
          <tspan
            x={-21}
            y={15.6}
            className="st17 st9 st30">
            {"de Pretratamiento"}
          </tspan>
        </text>

        <text
          className="st11 st9 st31"
          transform="translate(509.69 366.711)">
          {getScaledValue(datosScada.d3, 1)}
        </text>
        <text
          className="st11 st9 st30"
          transform="translate(570.457 366.311)">
          {"bar"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(493.964 298.935)">
          {"PT001 - PT002"}
        </text>
      </g>
      {/* campana de alarma */}
      <g
        className={`${getTemaAlarma(3, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(3, "Diferencial de Pretratamiento");
        }}>
        <path d="M472.4 355.6c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
        <path d="M470.7 354.6c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM482 353.3c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z" />
        <path d="M482.6 351.4c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM483.4 360.6v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM478.4 368c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z" />
      </g>

      <circle
        cx={529}
        cy={421.3}
        r={9.2}
        className="st32"
      />
      <image
        xlinkHref="data:image/png;base64,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 RK5CYII="
        width={176}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(851.935 445.803)"
      />
      <path
        d="M920.4 454.9h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3H929c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3V461.2c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
        className="st2"
      />

      {/* Temperatura de alimentacion */}
      <g
        className="cursorPointer"
        onClick={() =>
          loadGrafico(17, "Temperatura de alimentación", false, true)
        }>
        <path
          d="M861.1 462.3h157.1v99.8H861.1z"
          className={getTarjetaClass(17, selected)}
        />
        <text
          className="st19"
          transform="translate(904.695 506.955)">
          <tspan
            x={0}
            y={0}
            className="st17 st9 st30">
            {"Temperatura"}
          </tspan>
          <tspan
            x={-9}
            y={15.6}
            className="st17 st9 st30">
            {"de Alimentaci\xF3n"}
          </tspan>
        </text>
        <text
          className="st11 st9 st31"
          transform="translate(920.789 549.733)">
          {getScaledValue(datosScada.d17, 1)}
        </text>
        <text
          className="st11 st9 st30"
          transform="translate(987.556 549.333)">
          {"\xB0C"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(925.063 481.957)">
          {"TT004"}
        </text>
      </g>
      {/* campana de alerta */}

      <g
        className={`${getTemaAlarma(7, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(7, "Temperatura de alimentación");
        }}>
        <path d="M883.5 538.6c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
        <path d="M881.8 537.6c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM893.1 536.3c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z" />
        <path d="M893.7 534.4c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM894.5 543.6v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM889.5 551c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z" />
      </g>

      <circle
        cx={940.1}
        cy={610.4}
        r={9.2}
        className="st33"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACNCAYAAAAXU/AtAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABx1JREFUeNrsmwlzm0gQRgeM5Cvn ZrP//wduYseXbs1CVXfly3g4JK2dGN6r6kKJZVSBp4+ehoQA8IYp/tB9wfiJv0u6ouP3kRiOkTce K3Zx4PuKzOsCeeEEiWNSIbNtpRogblqlVSHbVGaAPnm99rLdJ3/XK3ExQF4X9qylykRkWgoY0jLs pXZ1bW3rpT9vFbnqkFfFbd43y1Rl1SYxAkOux42JuBurtbze2M87W4qqR97m5/O6zq0upOZWswFJ DNAl78pqUdfSamVCF5LIzySuOtoGl/eyrqu6rut6Z9sr+/tze08lEpPA0JfA3ia4vI2wT3U9WD1a FZmeuTeBvW2YWdI2wn6o62Ndn+z1e5E4TWESGIYk8NYSdmXy3td1V9etOVV2CBxzAusk4UzSt5H1 c11/1/WX1QdLY0/hWSaBkRhyKZwKvLS0beS9sdCcmT8xWdRF6YtbW4iyReCvdf1T1xf787tMAjNO g0N64I0I/MOu6nPpe71H3sqUQlO5VWDvf69E4C8m8NeMwLqII32hL4V1EbcygVN5PZ0XsqDbhl9n xNkWQgXWHviztQ+awBcs4OCIhZzOf9dJ27CVVL63Rd1Ti2OdLURl/e2lTCDeyyLu2n5eBWbAcPgk wvtZn2J58i5N2h/mmMudehbbphCawrPwc/57KZOHy/BzFnxG6wBH9sLqzs5ahevwc1R7EfJTrmcJ XGTaCE9hF9l3lLsLx8INjpHY3dmHX2+YeXXKm+uBQ3j+4E7f8w+kL5yCOlYlATnLrLHU01h27PiQ p8+QFw4l94RjGbofFHvmWzngQwKywisLXYSBz9aUR3xAoOeFF5T4oMAsB8oK8Brpe3A4lhw7eGOJ jMAwrhEGAAIDIDAAAgMCAyAwAAIDIDAgMAACAyAwAAIDAgMgMAACAwIDIDAAAgMgMCAwAAIDIDAA AgMCAyAwAAIDIDAgMAACAyAwIDAAAgMgMAACAwIDIDAAAgMgMCAwAAIDIDAAAgMCAyAwAAIDAgMg MAACAyAwIDAAAgMgMAACAwIDIDAAAgMgMCAwAAIDIDAgMAACAyAwAAIDAgMgMAACAyAwIDAAAgMg MCAwhwAQGACBARAYEBgAgQEQGACBAYEBEBgAgQEQGBAYAIEBEBgQGACBARAYAIFhRETZxkMEjskv A7y0qL2ynprAR38IwAmJG08R+OAdApyYwl57q86wrAbsUHe0z+x4qkIXL5A8U5R2n9ROqs21mBM4 Zr4JvqOtlH5A+QIn862KWxwpbJywyFGkbdzaSG1lu8ukcVSBo52AmOx0Jztc1bWWrf/uXk5eMRGB 0xoqci4kwgSvZlHc2ZlP7tbStu7ZJhG4s4XQ5N3KThdWj3Vd1zW39zfvOZtIEquwpVX6uu2LnBN1 39GSxQkJvDXHHpJ6Mpk7Jc71wHtJ3pXtqNnhXSJvs+NzEbgYsbghkfXMqpJtKdW1QNFLprZoqcxj bymiCLw0x26tftR1b4G5lFbi2aKualm0efoubMfNDq8SeV3mauQJXMjEprR/78xqbuV/rpK01lDI 9XrrpOdTkccscGwR+Kauf+v6biI/mIProQmsCeHp23wTLuwEubzNN+PSErjq6AfH1Dp48rq4F3YM Lu31hch8JsciJuKu7YRpeb/XtmAZs8AbaSGaoPxmEt+Yews5NoMF1gS+sxMS7MMaqd/ZiZtJAo+5 hSikVXB5r+w4eG3tmOztuJRJn+fiPklb9mivFyKxtxVTEXibhOVtRwLHvhYi7YEXciJ2dgLu7eSd S9qUR46T3qLA5yLv+7o+yWLDE/RcvvQ7kfdBkubOjuV9smDZjlzgdEGrX+5HOSZ3dqyWySIu9C3i oghciNQu9L2doLksZsbaPqQCz0TgRt6PGfk2cnUK0uM9mri+ULlJFiuLiQica1dV4oVcpZaZ9qG3 hUjnczFJkbm0Djl5x57AcxFY01Pn5Dqt2UgrdmM93ne5TA5abY8wgVOJdWGrM+Bs79uXwCFJgZ30 KpUkb673HWMS6/jMe2BNzpXU0tqLuR2LtaTvNylNYN9H59B+pALrTLztjm/rfLzq+ZB98i3RWeeY Jw9tYzTtg3XhpXeRfJF7LgI/JAJr+uqlcjeRMVquH96H/M2dzmNRDdy57yi92zSVW8chGaXpJW4j EvtCTRN4Iwl8Y3WbJPimpfed0q3ltlvrncegOjDuw0Rahq5euEwubzuReCFTGhX4SVbWd0nfm1uk TOmhnpMebKpO/JBiYge7aLnU+fTBx4x+46eQKcSTSeuz31Ui71Tahj6/DqL6XR/8hg90kbnU7UTg R5nSFDLB8R55mVlhT1ne/6W/g+PbCV/Y6TMSPqkJyep6HbqfcQUEfnWJVWQdL5bJCrvrfxoAAv8R EwrdFpkV9aDRECDw7xQ5faid/xiLwKM5nogLAAAj4T8BBgBN+jrCU3goTwAAAABJRU5ErkJggg=="
        width={176}
        height={141}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(1023.51 444.9)"
      />
      <path
        d="M1092 454.9h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3V461.2c0-3.5-2.8-6.3-6.3-6.3H1092z"
        className="st2"
      />

      {/* PH de alimentacion */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(18, "pH alimentación", false, true)}>
        <path
          d="M1032.7 462.3h157.1v99.8h-157.1z"
          className={getTarjetaClass(18, selected)}
        />
        <text
          className="st19"
          transform="translate(1105.173 506.955)">
          <tspan
            x={0}
            y={0}
            className="st17 st9 st30">
            {"pH"}
          </tspan>
          <tspan
            x={-37.9}
            y={15.6}
            className="st17 st9 st30">
            {"de Alimentaci\xF3n"}
          </tspan>
        </text>

        <text
          className="st11 st9 st31"
          transform="translate(1092.366 549.733)">
          {getScaledValue(datosScada.d18, 1)}
        </text>
        <text
          className="st11 st9 st30"
          transform="translate(1159.134 549.333)">
          {"pH"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(1096.64 481.957)">
          {"AE002"}
        </text>
      </g>
      {/* Camapana de alerta */}
      <g
        className={`${getTemaAlarma(18, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(18, "pH alimentación");
        }}>
        <path d="M1055.1 538.6c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
        <path d="M1053.4 537.6c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM1064.7 536.3c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z" />
        <path d="M1065.3 534.4c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM1066.1 543.6v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1061.1 551c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z" />
      </g>
      <image
        xlinkHref="data:image/png;base64,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 RK5CYII="
        width={176}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(1195.09 445.803)"
      />
      <path
        d="M1263.6 454.9h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3V461.2c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
        className="st2"
      />

      {/* sensor ORP */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(4, "Sensor ORP", false, true)}>
        <path
          d="M1204.3 462.3h157.1v99.8h-157.1z"
          className={getTarjetaClass(4, selected)}
        />
        <text
          className="st19"
          transform="translate(1264.465 506.955)">
          <tspan
            x={0}
            y={0}
            className="st17 st9 st30">
            {"Sensor"}
          </tspan>
          <tspan
            x={6.5}
            y={15.6}
            className="st17 st9 st30">
            {"ORP"}
          </tspan>
        </text>

        <text
          className="st11 st9 st31"
          transform="translate(1263.943 549.733)">
          {getScaledValue(datosScada.d4, 1)}
        </text>
        <text
          className="st11 st9 st30"
          transform="translate(1329.71 549.333)">
          {"mV"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(1268.217 481.957)">
          {"AE001"}
        </text>
      </g>
      {/* Alarma */}
      <g
        className={`${getTemaAlarma(4, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(4, "Sensor ORP");
        }}>
        <path d="M1226.7 538.6c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
        <path d="M1225 537.6c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM1236.3 536.3c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z" />
        <path d="M1236.9 534.4c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM1237.7 543.6v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1232.7 551c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z" />
      </g>
      <circle
        cx={1112.9}
        cy={610.4}
        r={9.2}
        className="st33"
      />
      <path
        d="M555.2 878.8h32.3"
        className="st1"
      />
      <path
        d="M637.8 848.5h-17.4c-1.1-.3-2.3-.4-3.4-.4-8 0-14.6 6.5-14.6 14.5v.1c0 3.9 1.5 7.6 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6H631c.6 0 .9-.9.6-1.6l-4.1-9.1c2.7-2.7 4.2-6.4 4.2-10.3 0-1.4-.2-2.8-.6-4.2h6.8c1.5 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
        className="st27"
      />
      <g />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAuCAYAAACxkOBzAAAACXBIWXMAAA3+AAAN/gEmzVBtAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA8VJREFUeNrsmOtS2zAQhSVbcW6k oaG00Mv0/d+LlmmhQKCmuRi7MnN25nSjJJZJ6J94ZscYm+Xz0Wp1LGMOx+E4HIfjcOzzsHvOzfkr df7vsAxoA/krBVvFwNsdQ0okdJb7VSBKdb1XWFYxBVyqIiHYGu5JRdkU2u5IzRrK+ej4yBAdhCPY Gm6JWNDPhQIP1rZ7IWhCkD3E0MfARx/XGZ4rATj3MfPx6OMPYo57DL0C7HYA2gXcyMcbH2PECOBd KP8EqBoy93Hv4wHn3wQvSq8AuxeCipI13ImPUx/vfEx8HONeLwBbQ975uPXxy8cNrlPcNyFg94Ia zaDoW0Ce+/jo4wzgxwFlF1BPYK/x3BE9Z9SkawXLs76DmhwD9LOPLzifA3aEZ7hmC9SrlMEEpTNA TkugJXWQ5wnqWqraBcwJlKxBvwL2PamaUTcQgCXKQep6gHz8QtItngAcBWuoVrWq9dB/AugZ1DpC rTrVZ6V99QDYRT4BnaNMZBIK8LNQrmWtDqFePZk+APKUhrVHEIlaWlPqy6z6DF3hHvV8h98Voq6L VFValcByBzgmRTOaLFYtuSbwEksoKZNuRC88h7omVlmBPUIZTNANxjSjOwC1W1ZMmagl9ekxRka6 iMNzRWw3SFVvlUVAZnNGQ28begrJmWEe9Gnl45e2hoaiiVGxKvEQ0VeKJi0mraPcHZqY/7x40jCh IUclZqVH9ek2DH1TIZI1bi0Kdl3ihJImZnd2U39VVDGw/AdlwJfqpTH24P7LOVfyJREJeQUSq6et XdUCUkAL8rhFCDqJVLUgM5KTtZsHrF1TAQpagmfkb5ckQNVGWW1EpnBQufoHZcN88uUwo5cXARb0 8lGui2HnSDiFH73F6tWnlmN0j1yTiy2j5Jsi/0zBVmnLL1fpiV0yJZkCrAK1WVJ9ihGv4a58XPr4 hvgBcAY2acu+qM2IC+RiXyqABdVmrkAvEJfwB/fkC8qmypoN67xVSmowGeoF2b8cw34bAP3u4ycM TU5zwMTWrKE2I3XrlBeVWtZfACKKfNo8QrkbwF3S8N/h/lLtJ0R/1vC3/yMpWkA1AZjAQQ2VXZQX zenZayh8BbUfUCYrXcVFghqlkKGFgtUKfbLYwBfulIz2A3WBlR7bdkdG+wM2NgPEkEA7CnZJzT8H uOwZLGj4V5bctubDBkx5SltGXfqZ3VipltZ1W0jBPa9d7HUZtWuobV6i+m4Z2KBrtDm3y11EXr4T pfw6AxMC3Msu4iZouyF3teX8qjvf23JXW64Px6sffwUYAIQ+tfk89EsGAAAAAElFTkSuQmCC"
        width={42}
        height={44}
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        transform="translate(599.914 845.17) scale(.7921)"
      />
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(14, "Estado Bomba Alta presión 1", true)}>
        <circle
          cx={617}
          cy={863}
          r={10.9}
          className="st2"
        />
        <circle
          cx={617}
          cy={862.8}
          r={8}
          fill={getColor(datosScada.d14)}
        />

        <text
          className="st11 st9 st20"
          transform="translate(602.412 905.05)">
          {"P-004A"}
        </text>
      </g>

      <path
        d="M590 885.5c-1 0-1.9-.9-1.9-1.9v-9c0-1.1.9-1.9 1.9-1.9.5 0 .9.2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.6-.8.6-1.3.6z"
        className="st18"
      />
      <path
        d="M590 873.8c.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.5.3-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.7 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.8-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st2"
      />
      <path
        d="M505.5 885.5c-1 0-1.9-.9-1.9-1.9v-9c0-1.1.9-1.9 1.9-1.9.5 0 .9.2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.6-.8.6-1.3.6z"
        className="st18"
      />
      <path
        d="M505.5 873.8c.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.5.3-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.7 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.8-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st2"
      />
      <path
        d="M818.7 853.2h-173M1033.2 853.2h-63.7"
        className="st16"
      />
      <path
        d="M960.4 867.6h-132c-3.3 0-6-2.1-6-4.8v-16.6c0-2.6 2.7-4.8 6-4.8h132c3.3 0 6 2.1 6 4.8v16.6c0 2.7-2.7 4.8-6 4.8z"
        className="st27"
      />
      <path
        d="M961.7 867.6h-133c-3.4 0-6.3-2.1-6.3-4.8v-16.6c0-2.6 2.8-4.8 6.3-4.8l133.2 25.3c.7.2.5.9-.2.9z"
        className="st17"
      />
      <path
        d="M960.4 904.7h-132c-3.3 0-6-2.1-6-4.8v-16.6c0-2.6 2.7-4.8 6-4.8h132c3.3 0 6 2.1 6 4.8v16.6c0 2.7-2.7 4.8-6 4.8z"
        className="st27"
      />
      <path
        d="M961.7 904.7h-133c-3.4 0-6.3-2.1-6.3-4.8v-16.6c0-2.6 2.8-4.8 6.3-4.8l133.2 25.3c.7.2.5.9-.2.9z"
        className="st17"
      />
      <path
        d="M817.7 891.7h-20.4c-2.8 0-5-3.2-5-7.1v-30.8M969.4 891.4h16.4c2.8 0 5-3.2 5-7.1v-30.8"
        className="st16"
      />
      <path
        d="M812.2 859.4c-1 0-1.9-.9-1.9-1.9v-9c0-1.1.9-1.9 1.9-1.9.5 0 .9.2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.6-.8.6-1.3.6z"
        className="st18"
      />
      <path
        d="M812.2 847.7c.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.5.3-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.7 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.8-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st2"
      />
      <path
        d="M854.6 1029.4h-13.3c-2.8 0-5-2.3-5-5V910"
        className="st1"
      />
      <path
        d="M854.6 1081h-13.3c-2.8 0-5-2.3-5-5v-86.4"
        className="st1"
      />
      <path
        d="M874.9 1020.8h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM859.7 1024.7l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st21"
      />
      <path
        d="m875.3 1035.3-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st21"
      />
      <path
        d="M867.5 1019.8v10"
        className="st22"
      />
      <path
        d="M858.5 1011.8h18M867.5 1012.8v8"
        className="st23"
      />
      <path
        d="M899.7 1127.3h3.7v11h-3.7z"
        className="st21"
      />
      <path
        d="M908.7 1121.3c.7.8.7 2 0 2.8l-5.6 5.6c-.8.7-2 .7-2.8 0l-5.6-5.6c-.7-.8-.7-2 0-2.8"
        className="st21"
      />
      <path
        d="m907.5 1111.5-4.5 4.5-.1.1c-.8.6-1.9.6-2.6-.1l-4.5-4.5c-.7-.8-.7-2 .1-2.7.4-.3.8-.5 1.3-.5h9c1 0 1.9.9 1.9 1.9 0 .5-.2 1-.6 1.3z"
        className="st18"
      />
      <path
        d="M896.4 1110.2c0-.5.4-.9.9-.9h9.1c.5 0 .9.4.9.9 0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6m-2 0c0 .8.3 1.5.9 2l4.5 4.5c1.1 1.1 2.7 1.1 3.9.2l.1-.1.1-.1 4.5-4.5c.5-.5.8-1.3.8-2 0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9z"
        className="st2"
      />
      <path
        d="M880 1029.3h12c5.5 0 10 4.5 10 10v67"
        className="st16"
      />
      <path
        d="M874.1 1086.6h-14c-1.1 0-2-.9-2-2v-7.3c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v7.3c0 1.1-.9 2-2 2z"
        className="st21"
      />
      <path
        d="M867.1 1068.1v10.9M875.8 1068.1h-17.4"
        className="st22"
      />
      <path
        d="M880 1081h22"
        className="st16"
      />
      <image
        xlinkHref="data:image/png;base64,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 AAAAAElFTkSuQmCC"
        width={176}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(808.51 698.9)"
      />
      <path
        d="M877.2 708.2h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3V714.5c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
        className="st2"
      />

      {/* Recuperacion de RO1 */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(0, "Recuperaci\xF3n de RO1", false, true)}>
        <path
          d="M817.9 715.6H975v99.8H817.9z"
          className={getTarjetaClass(0, selected)}
        />
        <text
          className="st19"
          transform="translate(858.516 754.293)">
          <tspan
            x={0}
            y={0}
            className="st17 st9 st30">
            {"Recuperaci\xF3n"}
          </tspan>
          <tspan
            x={17.7}
            y={15.6}
            className="st17 st9 st30">
            {"de RO1"}
          </tspan>
        </text>
        <text
          className="st11 st9 st31"
          transform="translate(877.507 803.07)">
          {getScaledValue(datosScada.d0, 1)}
        </text>
        <text
          className="st11 st9 st30"
          transform="translate(942.275 802.67)">
          {"%"}
        </text>
      </g>
      {/* Alarma */}
      <g
        className={`${getTemaAlarma(0, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(0, "Recuperaci\xF3n de RO1");
        }}>
        <path d="M840.2 792c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
        <path d="M838.5 791c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM849.8 789.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z" />
        <path d="M850.4 787.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM851.2 797v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM846.2 804.4c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z" />
      </g>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALMAAACNCAYAAAD8ZEsuAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABxFJREFUeNrsm4tum0oURQETJ3aS Nu2t7v//31Wbl53gF1yQzlS7JwPGj7QprCUdmTgOqHixOTNMkwRgIKR/+O8BlOp3yZj22AY4h8jV MYKnPT+Tymf9NsC5ha4i29UpMqeuMivdJp3h3KlcWlVue6/U+R6RG2En8prb60TETpEZziBzJQLv rLb2Wspra+uR9xD5QmpqlVtlEZkRG47pkYPIW6tNXWurjXm1c2ndS2YV+bKuq7pmVlf23oUkdMZ3 AydQSvoGiYu6Xq2a7ZWIn8YSOu9I5dykndd1U9etvV7be1NpOzJSGU4c8IW2YmUCL+ta1PUsfnX2 zl0yX1gKN/J+rutLXXe2fWO/m5rM9M5waq8cUrkwkZ/qepB2NnEDw8qncx7pdbXFuDJxG4m/WX2t 65NL5wyR4QShQ4uxtlRu0vje/ErtM1sZEO5ifXNbMk8iyfxPXf+a0Hf2/iUyw5llfrFUvjIPS0vs lVUYEGY+ndsGgBOZvZhbv3xnQn+zluMWmeGMrYbKPDMHd66HfrHtiaX03p45cwPAmaXwjbUXdybz DTLDmWXemFMhkVfSP4e2VmfR0raeuU3oC5E6iH3t2gwGgHCO2YyNiVqZyAsLzblMOLQ93/gpc2z9 hRc6SD11lSMynKlvDiKHZxuhLltSubPN8APBTGrSUcgMp8ocWoY8+fVpcwhSfabRW+Y0ktZp8naR URopgGPpE5peZPWu6vMYuk1YloLCuUhbgjRz1bkGKDvioCQxvLfYXevn065o77tDgD8ldi8HWe0G HzmZDwpRZIa/radulRyZYTAgMyAzADIDIDMAMgMyAyAzADIDIDMAMgMyAyAzADIDIDMgMwAyAyAz ADIDIDMgMwAyAyAzADIDMgMgMwAyAyAzADIDMgMgMwAyAyAzIDMAMgMgMwAyAyAzIDMAMgMgMwAy AzIDIDMAMgMgMwAyAzIDIDMAMgMgMyAzADIDIDMAMgMgMyAzADIDIDMAMgMyAyAzADIDIDMAMgMy AyAzADIDIDMgMwAyAyAzADIDIDMgMwAyAyAzADIDMgMgMwAyAyAzADIDMgMgMwAyAyAzADIDMgMg M8DhVPJayc+9ZPZ/VHE+4TeK2yntuZL56AMBnCB2r0DNeu4wQWD4Q8lcWu0N0bznTnWH5SEHGCjp O/aFY5Y45ljZ17m8h8S7lgq/S9/xC/7IJz49Ue4Kkd+I3NTWamO1ldpFhP4pdt4xWlSRw47XVuHn zLUrQxdaL9y2izjtKXHVsT3GtqIUiRvHVlLBuZ1I36vNUJG3suNXV7l9dmsypwOW2UucudfUjT/S HhLH2rcxSh3+zSE0G7deXL2K1Ns2obtkDiIXtsNFXU91zezvSjvARV2TEcgcamLiTqQyea/vGGQn X8zOpc6YhFaZ1+Za49mj1XNdSxN6Le3Gm74533OVrGznz7bjuclb2e+uBi6zJrIKm1tdSIU7VSaJ HbuV7lxPqL3hzvWFYxA6JnPj2ve6ftT1YP69mHObyEXfKnMpMheWyI8mbkjkwg7QvDd1t9shCp2K yEHeS6lwHqZycYdzEpM4tG7Fnr5wLCJX0gm8WjLf1/WfCf1o6VzIOeo9m6EyL+1Lmkhr0Qh+bV/k 0JNZZc7tXASB53Ye5lYzO0d6TioROQgc+sJlpCfcuNvoGIQuJZlDgD6Y0N9N7pDM27YpujwyQNEp kpWd8Mx+Hxr0R/viLm0f2QhkDqk8FZFv6rqt65O9himkKzkvpUudhYw/nm17KUJvIlNQQxY56Wht n6RvVpl7J3PivoAg6E7knrlUHpvMM0vkRuLPcqLX9t5W2q/SifxkqfNgX9STvf8yQpl9z6zpHLt7 bSLJ3NkzJzLtsZHbgF41Uxn0xEROByi0T+Yg8xc7J4XIuLKLXVuzpcl7b33gD9tWmdcRmYeeyomb ptRnGoWEhE7LRck7DhLS2U9ohzlmnZZKBiqylzkIHdoMnTYqpCf+ZOk9MTFDHxh6QB2pP0WmnsY0 AIz1zjpY3rqZnoMeZ3uh/aPGLNJaDPnJX/i36bRcaDVeRORCbo+L5Nf5eB2hf5dkDn3zGPvlWKuh YzZdMqEOtk5X5j2uGp0j9QKPYT2GyqxC+1ugPmC6dTKHqcx7KR3YFB394Ngeb7etvdh7cecH3gaq SCsxlgVGfr5ZF8Boj7e0WY6Z9MyF9MxhhL4QkddJfBHN2Kj2eJecInPbQQ5dXDM0qcuW/i4M9OZu ALiWkfnC9dmdI/QRinz03Sg/w4HHditMXWLoADnM9ui0ZSWia3+9bhGZ/wBxJDmn4KgLuWyROTw1 1WlLfSCwdhKPcbD37ikDx/fQqRsY+pV0sSknv/4CkZH5w5w/XVWna519mpctyQ7I/OFS2ie2H1OU h47QAZk/QlK3DZqRGAAAAODv4n8BBgCtqUQv8yxvWgAAAABJRU5ErkJggg=="
        width={178}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(635.07 699.198)"
      />
      <path
        d="M700.5 708.2h-50.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3H797c3.5 0 6.3-2.8 6.3-6.3V714.5c0-3.5-2.8-6.3-6.3-6.3h-96.5z"
        className="st2"
      />

      {/* Presion de osmosis 01 */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(6, "Presi\xF3n de Osmosis 01", false, true)}>
        <path
          d="M644.2 715.6h159.1v99.8H644.2z"
          className={getTarjetaClass(6, selected)}
        />
        <text
          className="st19"
          transform="translate(702.443 755.178)">
          <tspan
            x={0}
            y={0}
            className="st17 st9 st30">
            {"Presi\xF3n"}
          </tspan>
          <tspan
            x={-21.3}
            y={15.6}
            className="st17 st9 st30">
            {"de Osmosis 01"}
          </tspan>
        </text>
        <text
          className="st11 st9 st31"
          transform="translate(699.207 800.497)">
          {getScaledValue(datosScada.d6, 1)}
        </text>
        <text
          className="st11 st34 st30"
          transform="translate(758.473 800.102)">
          {"bar"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(707.53 733.332)">
          {"PT-004A"}
        </text>
      </g>
      {/* Alarma */}
      <g
        className={`${getTemaAlarma(6, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(6, "Presi\xF3n de Osmosis 01");
        }}>
        <path d="M669.3 789.4c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M667.6 788.4c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM678.9 787.1c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M679.5 785.3c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM680.4 794.4v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM675.4 801.9c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>
      <circle
        cx={720.8}
        cy={852.3}
        r={9.2}
        className="st33"
      />
      <circle
        cx={836.2}
        cy={991.7}
        r={9.2}
        className="st33"
      />
      <image
        xlinkHref="data:image/png;base64,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 LDPKLMx/AgwAnFlaHmUg5J4AAAAASUVORK5CYII="
        width={185}
        height={117}
        style={{
          overflow: "visible",
          opacity: 0.2
        }}
        transform="translate(634.129 934.737)"
      />
      <path
        d="M735.7 939.7h62.1c3.4 0 6.3 2.8 6.3 6.3v33.2c0 .8.3 1.6.8 2.2l5.3 6.5c1.1 1.3 1 3.3-.1 4.6L805 998c-.6.6-.9 1.5-.9 2.4v36.9c0 3.4-2.8 6.3-6.3 6.3H645.3c-3.4 0-6.3-2.8-6.3-6.3V946c0-3.5 2.8-6.3 6.3-6.3h90.4z"
        className="st2"
      />
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(8, "Presión de rechazo 01", false, true)}>
        <path
          d="M645.3 939.7h153.8v103.9H645.3z"
          className={getTarjetaClass(8, selected)}
        />
        <text
          className="st19"
          transform="translate(700.802 980.455)">
          <tspan
            x={0}
            y={0}
            className="st17 st9 st30">
            {"Presi\xF3n"}
          </tspan>
          <tspan
            x={-21.7}
            y={15.6}
            className="st17 st9 st30">
            {"de Rechazo 01"}
          </tspan>
        </text>
        <text
          className="st11 st9 st31"
          transform="translate(700.56 1026.227)">
          {getScaledValue(datosScada.d8, 1)}
        </text>
        <text
          className="st11 st34 st30"
          transform="translate(759.253 1025.832)">
          {"bar"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(701.881 958.455)">
          {"PT-005A"}
        </text>
      </g>
      {/* Alarma */}
      <g
        className={`${getTemaAlarma(8, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(8, "Presión de rechazo 01");
        }}>
        <path d="M663.1 1015.2c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.1-2.5 2.2z" />
        <path d="M661.4 1014.2c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-2.9 1.5-3.7 3zM672.7 1012.9c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.7-2.5-2.2z" />
        <path d="M673.3 1011c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.3-2.3-2.4-3.7-3zM674.1 1020.2v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.7-.9-1.3-.9-2.1zM669.1 1027.6c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.8 1.7 1.6 1.7z" />
      </g>
      <path
        d="M549.2 1318.7c0-6.7-7.8-12.1-17.5-12.1s-17.5 5.5-17.5 12.1h.1c-.1.3-.1.7-.1 1.1v37.6c0 3.5 3.4 6.4 7.6 6.8v6.2h5.2v-6.1h9v6.1h5.2v-6.2c4.5-.2 8-3.2 8-6.8v-37.6c0-.3-.1-.7-.1-1.1h.1zM458.5 1350.7h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM443.3 1354.6l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st21"
      />
      <path
        d="m458.9 1365.2-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st21"
      />
      <path
        d="M451.1 1349.7v10"
        className="st22"
      />
      <path
        d="M442.1 1341.7h18M451.1 1342.7v8"
        className="st23"
      />
      <path
        d="M464.2 1360.6h43.9M413.9 1360.6h23.9"
        className="st16"
      />
      <text
        className="st11 st9 st20"
        transform="translate(428.651 1386.857)">
        {"VX-101B"}
      </text>
      <text
        className="st11 st9 st20"
        transform="translate(513.64 1386.858)">
        {"F-005B"}
      </text>
      <path
        d="M555.2 1360.6h32.3"
        className="st1"
      />
      <path
        d="M637.8 1330.3h-17.4c-1.1-.3-2.3-.4-3.4-.4-8 0-14.6 6.5-14.6 14.5v.1c0 3.9 1.5 7.6 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6H631c.6 0 .9-.9.6-1.6l-4.1-9.1c2.7-2.7 4.2-6.4 4.2-10.3 0-1.4-.2-2.8-.6-4.2h6.8c1.5 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
        className="st27"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAsCAYAAAD8WEF4AAAACXBIWXMAAA3+AAAN/gEmzVBtAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA8NJREFUeNrsmOtS2zAQhSVbcW6k SUNpoZfp+79XW6aFAoGa5mLsyszZmdONklgmaf/EMzvG2Cyfj1arYxlzPI7H8Tgex+OQhz1wbs5f qfN/h2VAG8hfKdgqBt7uGVIiobPcrwJRquuDwrKKKeBSFQnB1nBPKsqm0HZPatZQzkfHR4boIBzB 1nArxJJ+LhR4sLbdC0ETguwhhj4GPvq4zvBcCcCFj7mPRx+/EQvcY+g1YLcH0C7gRj5e+RgjRgDv QvknQNWQuY97Hw84/yJ4UXoN2L0QVJSs4U59nPl442PqY4J7vQBsDXnn49bHTx83uE5x34SA3Qtq NIOirwF54eO9j3OATwLKLqGewF7juRN6zqhJ1wqWZ30HNTkG6Ecfn3C+AOwIz3DNFqhXKYMpSmeA nJZAS+ogzxPUtVS1C5hTKFmDfgbsW1I1o24gACuUg9T1APn4haRbPAE4CtZQrWpV66H/ANBzqHWC WnWqz0r76gGwi3wCukCZyCQU4GehXMtaHUK9ejK9A+QZDWuPIBK1tKbUl1n1ObrCPer5Dr8rRF0X qaq0KoHlDjAhRTOaLFYtuSbwEisoKZNuRC+8gLomVlmBPUEZTNENxjSjOwC1O1ZMmagl9ekxRka6 iMNzRWw3SFVvlUVAZnNGQ28begrJmWEe9Gnl45e2hoaiiVGxKvEQ0VeKJi0mraPcHZqYf7140jCh IUclZqVH9em2DH1TIZINbi0KdlPihJImZn92U39VVDGw/AdlwJfqpTH24P7LOdfyJREJeQUSq6et XdUCUkAL8rhFCDqJVLUgM5KTtVsErF1TAQpagufkb1ckQNVGWW1EZnBQufoHZcN88uUwp5cXAZb0 8lGui2EXSDiDH73F6tWnlmN0j9yQiy2j5Jsh/1zBVmnLL1fpiV0yJZkCrAK1WVJ9ihGv4a58XPr4 ivgOcAY2acu+qM2IC+RiXyqABdVmrkC/IC7hD+7JF5RNlTVb1nmrlNRgMtRLsn85hv02APrNxw8Y mpzmgImtWUNtRurWKS8qtay/AEQU+bR5hHI3gLuk4b/D/ZXaT4j+rOFv/0dStIBqAjCFgxoquygv mtOz11D4Cmo/oEzWuoqLBDVKIUMLBasV+mSxgS/cGRntB+oCaz227Y6M9gdsbAaIIYF2FOyKmn8O cNkzWNLwry25bc2HDZjylLaMuvQzu7FSLa2btpCCe1772OsyatdQ27xE9d0ysEHXaHNun7uIvHwn SvlNBiYEeJBdxG3Qdkvuasf5n+5878pd7bjeePwRYACDSrX5qfEquAAAAABJRU5ErkJggg=="
        width={42}
        height={44}
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        transform="translate(599.914 1326.977) scale(.7921)"
      />
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(20, "Estado Bomba Alta presión 2", true)}>
        <circle
          cx={617}
          cy={1344.8}
          r={10.9}
          className="st2"
        />
        <circle
          cx={617}
          cy={1344.6}
          r={8}
          fill={getColor(datosScada.d20)}
        />
        <text
          className="st11 st9 st20"
          transform="translate(602.412 1386.857)">
          {"P-004B"}
        </text>
      </g>
      <path
        d="M590 1367.3c-1 0-1.9-.9-1.9-1.9v-9c0-1.1.9-1.9 1.9-1.9.5 0 .9.2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.6-.8.6-1.3.6z"
        className="st18"
      />
      <path
        d="M590 1355.6c.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.5.3-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.7 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.8-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st2"
      />
      <path
        d="M505.5 1367.3c-1 0-1.9-.9-1.9-1.9v-9c0-1.1.9-1.9 1.9-1.9.5 0 .9.2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.6-.8.6-1.3.6z"
        className="st18"
      />
      <path
        d="M505.5 1355.6c.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.5.3-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.7 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.8-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st2"
      />
      <path
        d="M818.7 1335h-173M1023.2 1335h-53.7"
        className="st16"
      />
      <path
        d="M960.4 1349.5h-132c-3.3 0-6-2.1-6-4.8V1328c0-2.6 2.7-4.8 6-4.8h132c3.3 0 6 2.1 6 4.8v16.6c0 2.7-2.7 4.9-6 4.9z"
        className="st27"
      />
      <path
        d="M961.7 1349.5h-133c-3.4 0-6.3-2.1-6.3-4.8V1328c0-2.6 2.8-4.8 6.3-4.8l133.2 25.3c.7.2.5 1-.2 1z"
        className="st17"
      />
      <path
        d="M960.4 1386.5h-132c-3.3 0-6-2.1-6-4.8v-16.6c0-2.6 2.7-4.8 6-4.8h132c3.3 0 6 2.1 6 4.8v16.6c0 2.7-2.7 4.8-6 4.8z"
        className="st27"
      />
      <path
        d="M961.7 1386.5h-133c-3.4 0-6.3-2.1-6.3-4.8v-16.6c0-2.6 2.8-4.8 6.3-4.8l133.2 25.3c.7.2.5.9-.2.9z"
        className="st17"
      />
      <path
        d="M817.7 1373.5h-20.4c-2.8 0-5-3.2-5-7.1v-31.8M969.4 1373.2h16.4c2.8 0 5-3.2 5-7.1v-30.8"
        className="st16"
      />
      <path
        d="M812.2 1341.2c-1 0-1.9-.9-1.9-1.9v-9c0-1.1.9-1.9 1.9-1.9.5 0 .9.2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.6-.8.6-1.3.6z"
        className="st18"
      />
      <path
        d="M812.2 1329.5c.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.5.3-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.7 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.8-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st2"
      />
      <path
        d="M854.6 1511.3h-13.3c-2.8 0-5-2.3-5-5v-114.4"
        className="st1"
      />
      <path
        d="M854.6 1562.8h-13.3c-2.8 0-5-2.3-5-5v-86.4"
        className="st1"
      />
      <path
        d="M874.9 1502.6h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM859.7 1506.5l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st21"
      />
      <path
        d="m875.3 1517.1-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st21"
      />
      <path
        d="M867.5 1501.6v10"
        className="st22"
      />
      <path
        d="M858.5 1493.6h18M867.5 1494.6v8"
        className="st23"
      />
      <path
        d="M899.7 1609.1h3.7v11h-3.7z"
        className="st21"
      />
      <path
        d="M908.7 1603.1c.7.8.7 2 0 2.8l-5.6 5.6c-.8.7-2 .7-2.8 0l-5.6-5.6c-.7-.8-.7-2 0-2.8"
        className="st21"
      />
      <path
        d="m907.5 1593.3-4.5 4.5-.1.1c-.8.6-1.9.6-2.6-.1l-4.5-4.5c-.7-.8-.7-2 .1-2.7.4-.3.8-.5 1.3-.5h9c1 0 1.9.9 1.9 1.9 0 .5-.2 1-.6 1.3z"
        className="st18"
      />
      <path
        d="M896.4 1592c0-.5.4-.9.9-.9h9.1c.5 0 .9.4.9.9 0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6m-2 0c0 .8.3 1.5.9 2l4.5 4.5c1.1 1.1 2.7 1.1 3.9.2l.1-.1.1-.1 4.5-4.5c.5-.5.8-1.3.8-2 0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9z"
        className="st2"
      />
      <path
        d="M880 1511.1h12c5.5 0 10 4.5 10 10v67"
        className="st16"
      />
      <path
        d="M874.1 1568.4h-14c-1.1 0-2-.9-2-2v-7.3c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v7.3c0 1.1-.9 2-2 2z"
        className="st21"
      />
      <path
        d="M867.1 1549.9v10.9M875.8 1549.9h-17.4"
        className="st22"
      />
      <path
        d="M880 1562.8h22"
        className="st16"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACMCAYAAADcDyOIAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABw1JREFUeNrsmwtzm0YURncRkmXL dpNJ2+n//3ttE79kPZC0hZm7zZf1gjFy0gbOmbmDLBM0Xg6f7i7EOYCfGP8f/3uAhvAjBPQ9XgOc I294q9S+5z5aLvMzwLkSB5E2ZN57s8Dxd4W9LjLlSWF4h/RttqdMxfdbE7nskbozq1K2ZSIxLQUM bRlU3oPU0SoV/VWBvSRuFHZe10VdC6kodIHAcIbAJxO1strXtbNtZT4d25K4K4FnIu6yriurS5F5 nmknAPqKHOU9mLDbujZ1PVttW3rkVoHT5L0waa/ruq3rxl6vTOq57efph2FA3xsSedd1PVrNzKXQ MslrFVjTd2nCfpT6YCJfSitRsCoBA1YdYt+7s8RtxL0zrwrbN53UHdsSWHtfTd9bE/f3un6t65O9 t7J9EBjOEbgygZ/qurfQnEk6V8nEzmsKd7UQCxP4xgRu5P3Dth8QGN4xgbcm8JX5FETsrUzqDpLE rZO4mMALaxOuTdhPJu9vJnROYIC3TuKiwFfWtgaTdWNSP1l7kVvx6mwhFiboylL41kT+mCTwTPoV JIa3TOSiwEtJ3p1N5h4yiwX6Td/ZQqjES0viVaYWMltEYBgi8FE8rEzea0vkpfu6XNuZwD6TwnEl Yi5prKUHRlwYKvJR5I33HHKOZdvUtIVoS+K0ZlL0v3DuZE7v+M6lZZi7l3d8NWxD161k715/kIen 0uBcUq/ScCxc/mnI4GTy1YZvKYD3xmfC89Xl2WLAwR0iw3eU2Lk3PJpQvCIsKwvwI9P3zeFYMHbw kyUyAsO4ZoAACAyAwAAIDAgMgMAACAyAwIDAAAgMgMAACAwIDIDAAAgMCAyAwAAIDIDAgMAACAyA wAAIDAgMgMAACAyAwIDAAAgMgMCAwAAIDIDAAAgMCAyAwAAIDIDAgMAACAyAwAAIDAgMgMAACAwI DIDAAAgMgMCAwAAIDIDAAAgMCAyAwAAIDIDAgMAACAyAwIDAAAgMgMAACAwIDIDAAAgMgMCAwAAI DIDAgMAMASAwAAIDIDAgMAACAyAwAAIDAgMgMAACAyAwIDAAAgMgMCAwAAIDIDAAAgMCOxesnGwB fjQh4+PgBA59DggwUNTUrV5+FQOuAMSF7y1y6Cty0eNgJ6sg2zd9CEAPWU+Zyjn3DWVH2jZ1lDok 2/ghfuInwp95Eqcu8CnxLHVNZX4xbqW84VsOWtW1l6qkiiTJPeJ2jkHoaNGmmr4Hq8anXVLRs2OS xP+OWdly4Gj/3g60qetZ6sKkbfad22ufnDw/AYFzFVr+9jC0zxvZikLOs624tbbtxt7fdyTxC4Gd pG+8IpqDPdX1WNe9yTuz/Zp9FvazT3pqPwFxi0ylF3FomVOkvd7YRQ6JY0GSt5H1oa47c+zefFub gypxyLUQ6QDH9N3YQZqDf0nkbQ58ae+VcgLHKq+XbWHjMLO/vZTXKrLKe5KxPcpX5zH5ihxzSxGS kDxISDaOfa7rL3Pt3oJzkwjsuhJY+9+dXBlLS9pC5G3EvrL353YCc63E2JK3EFnn9vdrlTIWLnPC 9pk5xaGlzxv7xK2S9kEF/tMkfrTf7TMXeafAcaCf7SSVdvKi2M2VcWMCX8g+RZJUYxQ4yruwC3tp 43Bp46MXtJdeL06GtzKn2CZ93nHEAocWx1TgO5P474zAvVqItAfeSJKcROom3q+lhUgFHmsCx/Rd 2N99ZeNwbRf0KhmTKHAl32hrOzFPVs/S52VTZqQJrIsEcZ71ID1wbCG2MjahzyROE8Mn78XWYSXp eyFfm7MRr0REgWP6Xto43Nb1iwx0Zb/TlivOJ57sxMTJyoON5yaTMmNegUiXaDeyAvFk2zguu0yL 1dlCaArvkytG434pX5fp5GXMCVzaRXtpyfvBBnsr65crG58o8Nb2ubevxs+2vZOJym7EArf1wIek tUpL14GzY1J2XC3HTOTv7MBzEbfsmMCNPYGvpQ3QgY/tVRQ4pu8X6fE+JwJPKYFzElcic5Ws0vS6 ldyWxLlZ9EyqbQ10jAJ7WX1YWtLGRfeNfBXe2O9nNm5b63u/iLxxqWgtaXMY6SQutCwWnNy3d33T ZcWTONg7gXNJ7OWDfEZaP+LWoWsVYiOtw1aStk3gO2kd7iS9p7AKkWsl9GGd3g/w9BW4Lfpdi7RT uHXsZCVi7r5dy92JwCv39Xa7rps/SD3KCoTe73duWreWc7fUe9/QKQd8mE9EHmvL8FovnD49pSsN basQ68wMu5rA5K1PS+GGXLzlmR8ekhMbJiJw+lyD3lVay9Ji3FcnwLHl2Lv2J62mKPFZX4swrB/W 28qlrM603YmrMjPsKcr77n0dDJc4fbhn5l4+0JPOto9uOk+hIfBPMH5ehM2th+dm3PwfQwT+X4qc W5XhP8ci8GjGE3EBAGAE/CPAABjTJx6M8wTrAAAAAElFTkSuQmCC"
        width={176}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(808.51 1180.9)"
      />
      <path
        d="M877.2 1190h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
        className="st2"
      />
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(5, "Recuperaci\xF3n de RO2", false, true)}>
        <path
          d="M817.9 1197.4H975v99.8H817.9z"
          className={getTarjetaClass(5, selected)}
        />
        <text
          className="st19"
          transform="translate(858.516 1236.101)">
          <tspan
            x={0}
            y={0}
            className="st17 st9 st30">
            {"Recuperaci\xF3n"}
          </tspan>
          <tspan
            x={17.7}
            y={15.6}
            className="st17 st9 st30">
            {"de RO2"}
          </tspan>
        </text>

        <text
          className="st11 st9 st31"
          transform="translate(877.507 1284.879)">
          {getScaledValue(datosScada.d5, 1)}
        </text>
        <text
          className="st11 st9 st30"
          transform="translate(942.275 1284.479)">
          {"%"}
        </text>
      </g>
      {/* Alarma */}
      <g
        className={`${getTemaAlarma(5, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(5, "Recuperaci\xF3n de RO2");
        }}>
        <path d="M840.2 1273.8c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
        <path d="M838.5 1272.8c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM849.8 1271.5c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z" />
        <path d="M850.4 1269.6c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM851.2 1278.8v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM846.2 1286.2c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z" />
      </g>
      <image
        xlinkHref="data:image/png;base64,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"
        width={178}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(634.51 1180.9)"
      />
      <path
        d="M700.5 1190h-50.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3H797c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-96.5z"
        className="st2"
      />

      {/* Presion de osmosis 02 */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(7, "Presi\xF3n de Osmosis 02", false, true)}>
        <path
          d="M644.2 1197.4h159.1v99.8H644.2z"
          className={getTarjetaClass(7, selected)}
        />
        <text
          className="st19"
          transform="translate(702.443 1236.986)">
          <tspan
            x={0}
            y={0}
            className="st17 st9 st30">
            {"Presi\xF3n"}
          </tspan>
          <tspan
            x={-21.3}
            y={15.6}
            className="st17 st9 st30">
            {"de Osmosis 02"}
          </tspan>
        </text>

        <text
          className="st11 st9 st31"
          transform="translate(699.207 1282.305)">
          {getScaledValue(datosScada.d7, 1)}
        </text>
        <text
          className="st11 st34 st30"
          transform="translate(758.473 1281.91)">
          {"bar"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(707.53 1215.14)">
          {"PT-004B"}
        </text>
      </g>
      {/* Alarma */}
      <g
        className={`${getTemaAlarma(7, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(7, "Presi\xF3n de Osmosis 02");
        }}>
        <path d="M669.3 1271.2c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M667.6 1270.2c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9.7-1.3 1.8-2.2 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM678.9 1268.9c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M679.5 1267.1c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM680.4 1276.2v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM675.4 1283.7c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>
      <circle
        cx={720.8}
        cy={1334.1}
        r={9.2}
        className="st33"
      />
      <circle
        cx={836.2}
        cy={1473.5}
        r={9.2}
        className="st33"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAAB1CAYAAAASh0CTAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABh9JREFUeNrsnW1T20YURleyiE2A JDRt2mk6/dL//5s6ZdIESAgvbrANlt294dnxdmuDZJBhmXNm7ljIQsy0x8/clWLdwjWncACbZ37f ExQN3y+SbYBNyT1Pth9M8rC/1HYZVYHosAHBrWZRhZ9by16tEDyIXam29NpTITp0LXitmvq61ut0 HdGrFYL3JPbA13ZUff0OiQ5dJ7gJPfE1imos4es2olcrBDeZX/ra8/VG9Ur7+jqmpEeHDnrwmSQ2 wS99Xfg6Uw21b9JG9DTJTdwXknnf1ztfP6v2Jf0gSnOAhyak+FhSn/o6Uh1HYseiN5I87sH7ktkE /1313tePSA6PIPkXdRF9vR968zpqbeZt2pVKvbe1J79I8D98/ebrra9d/bESyaFDyWdK6n/k4kDv XaldGWt7uk6Sb0ny0Kq8l+C/at92svAE6KI3D2m+GyX4WP25tS/nkv2qaZKnlwy31Zbsq0V5G/Xj YdGJ4NC16HUUwhMtPIOHadgWt4leJYvO0JPv6GR7+jQtu3wI0KXkRdSD70Y+7iQutmpX4jR/oT5o oO1wI4heHDZBELx3i4+N79WUyYnTO52x3Nz8gU2LHnzsJU628rFccuL4BAXtCTwB2e/lZHnHpwi5 4akle2sn6a/h2YPkgOQASA6A5ABIDoDkAEgOgOSA5ABIDoDkAEgOgOQASA6A5ABIDkgOgOQASA6A 5ABIDoDkAEgOgOSA5ABIDvBorPWoOCSHXORe+6GfSA65pHf6SPHGE8KRHHISPDyMv6/tRvNkkRxy WDeGMT82XzaMVgljVbbcHXOsKv4bQiYpbglu8zxtONYP7mb0oc35tAlwYaZnKCSH7BacW0rx1+5m IqHNmLVpcDbm8NotxhwuHV6L5JCD6PEQ5XdKcBtka6MPp4nk01R0JIcckjz05NaL/yS5J0rxMIJ8 lsjuwiuSQy6Lz9Cy7EvsIHcd/RwLX5PkkFOaGz2l+W4k8VRpHpJ9nCxEvyc7kkNubcsgEngqua0/ v1CvfinRpyQ55C76TDKb1Ke+TlS2/U3Hfk9ybgZBzgtRa11eq0+31x19AP4ztRnJIVfRe1qMmuzb bnG7v3LJHVAkh2cPkkNuhEWnXUEJV1ZG7ubKSrg5FK6uIDlkK3h8VeVci81zLTjHLrkLiuSQo+Am sl0u/Orr2NeRr88SfZRITpJDtoJ/8fXJ1wdfHyX5WSQ57QpkJfhcfXZoUU4k+IGvvyT6Z8k/Ickh R2ZaZIYbP4eS+0+9Hmp//E9vHUkOOS40h0rsD5L7QIl+4hb/9Db+AgWSQzaiT9Vrn2mh+VGif1Jv PnT/v6pCkkNWSR5alXNJfSjZT+4SHMkhhwVnfFXlQr33V6X6sm8HOSSHHBedoSe/lNiW3t/c4ttB 9SrBkRxyS/Mrt7h9H74cMYuORXJ4FqJPo/Yk/U4nkkP2C9C5u+XRE0gOzynV521+Ccnh2YPkgOQA SA6A5ABIDoDkAEgOgOSA5ABIDoDkAEgOgOQASA6A5ABIDkgOgOQASA6A5ABIDoDkAEgOgOSA5ABI DoDkAEgO8BQkX+vpoQAdsraT5ZITrf0caICO5L6Xk+WST0r6RP/aNXyiP0AHyT2Tg+mUicY+VisE D7NZxtoOshc6vuD/AWwgvetbfGwsehVtx1O2bLLWUGXTtnajY3tIDhuQvJaLI7eY+BZPfQuiN0ry NMVHOpnNS7TBoG989XX8VL9TIjp0nOLBRfPwRC6eys1RmzSvkhNfRye2ibevfA10zESJ3pfkXH6E LghT3SZKcBPcRoz/LSdP5eh10wVolXyC4hnmNtr5hd4ba9+epK+QHDqUPExgHirBTfADOXkWJXnr hWfckw/1qQkJbuOe95EcHkFyS+4j1bH23TlqfFWShz9wFfXbdqJL/SFrXV6qXelFktObw0P14i66 qhLGjF8ovc8k+KUcnTU9cbHk50ISbym1t6PqJwtPBIeHFj3tKkZRjdWL167FdfJixb5CIleqLb32 3OISIoJDl6LXbnGd/NqteSPotlYj7C8j4UsSHB4h0WeR2LOktbmX5On7heNuJzxOjz5PtltTdHQs wEPLvjb/CjAA+jM23AwLU5YAAAAASUVORK5CYII="
        width={185}
        height={117}
        style={{
          overflow: "visible",
          opacity: 0.2
        }}
        transform="translate(634.51 1416.9)"
      />
      <path
        d="M735.7 1421.5h62.1c3.4 0 6.3 2.8 6.3 6.3v33.2c0 .8.3 1.6.8 2.2l5.3 6.5c1.1 1.3 1 3.3-.1 4.6l-5.1 5.5c-.6.6-.9 1.5-.9 2.4v36.9c0 3.4-2.8 6.3-6.3 6.3H645.3c-3.4 0-6.3-2.8-6.3-6.3v-91.3c0-3.5 2.8-6.3 6.3-6.3h90.4z"
        className="st2"
      />
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(9, "Presi\xF3n de Rechazo 02", false, true)}>
        <path
          d="M645.3 1421.5h153.8v103.9H645.3z"
          className={getTarjetaClass(9, selected)}
        />
        <text
          className="st19"
          transform="translate(700.802 1462.263)">
          <tspan
            x={0}
            y={0}
            className="st17 st9 st30">
            {"Presi\xF3n"}
          </tspan>
          <tspan
            x={-21.7}
            y={15.6}
            className="st17 st9 st30">
            {"de Rechazo 02"}
          </tspan>
        </text>
        <text
          className="st11 st9 st31"
          transform="translate(700.56 1508.035)">
          {getScaledValue(datosScada.d9, 1)}
        </text>
        <text
          className="st11 st34 st30"
          transform="translate(759.253 1507.64)">
          {"bar"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(701.881 1440.263)">
          {"PT-005B"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(846.005 1533.065)">
          {"VX-103B"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(846.005 1050.242)">
          {"VX-103A"}
        </text>
      </g>
      {/* Alarma */}
      <g
        className={`${getTemaAlarma(9, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(9, "Presión de rechazo 02");
        }}>
        <path d="M663.1 1497c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.1-2.5 2.2z" />
        <path d="M661.4 1496c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-2.9 1.5-3.7 3zM672.7 1494.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.7-2.5-2.2z" />
        <path d="M673.3 1492.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.3-2.3-2.4-3.7-3zM674.1 1502v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.7-.9-1.3-.9-2.1zM669.1 1509.4c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.8 1.7 1.6 1.7z" />
      </g>
      <path
        d="M1251.5 1119.5h124.8v97.7h-124.8z"
        className="st17"
      />
      <path
        d="M1376.2 1103.2v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1v-111.2"
        className="st0"
      />
      <text
        className="st19"
        transform="translate(1306.901 1240.361)">
        <tspan
          x={0}
          y={0}
          className="st11 st9 st20">
          {"TK"}
        </tspan>
        <tspan
          x={-24.4}
          y={13.2}
          className="st11 st9 st20">
          {"PERMEADO"}
        </tspan>
      </text>
      <path
        d="M1292.3 625.3h-20c-2.8 0-5.1-2.3-5.1-5.1v-20c0-2.8 2.3-5.1 5.1-5.1h20c2.8 0 5.1 2.3 5.1 5.1v20c0 2.8-2.3 5.1-5.1 5.1z"
        className="st21"
      />
      <circle
        cx={1282.3}
        cy={610.2}
        r={10.9}
        className="st2"
      />
      <circle
        cx={1282.3}
        cy={610.2}
        r={8}
        className="st29"
      />
      <path
        d="M1016.8 853.2h14.3c2.8 0 5 2.3 5 5v470.4c0 3.5-2.8 6.3-6.3 6.3h-13M1288.5 1100v-16.4c0-2.8-3.2-5-7.1-5h-242.8"
        className="st16"
      />
      <path
        d="m1294.2 1098.5-4.5 4.5-.1.1c-.8.6-1.9.6-2.6-.1l-4.5-4.5c-.7-.8-.7-2 .1-2.7.4-.3.8-.5 1.3-.5h9c1 0 1.9.9 1.9 1.9 0 .5-.2 1-.6 1.3z"
        className="st18"
      />
      <path
        d="M1283.1 1097.2c0-.5.4-.9.9-.9h9.1c.5 0 .9.4.9.9 0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6m-2 0c0 .8.3 1.5.9 2l4.5 4.5c1.1 1.1 2.7 1.1 3.9.2l.1-.1.1-.1 4.5-4.5c.5-.5.8-1.3.8-2 0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9z"
        className="st2"
      />
      <path
        d="M415.2 1360.6h-11.3c-2.8 0-5-2.3-5-5.1V885.1c0-3.5 2.8-6.3 6.3-6.3"
        className="st1"
      />
      <path
        d="M396.4 1120.1H113.9c-2.8 0-5-2.3-5-5v-429c0-2.8 2.3-5 5-5h1241.4c3.3 0 6-2.7 6-6v-58.8c0-3.3-2.7-6-6-6h-51.1"
        className="st16"
      />

      {/* Indicador antiincrustante */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(14, "Estado Bomba Antiincrustante", true)}>
        <image
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA6BJREFUeNrMmHlPGzEQxWNvks1F CSGKUFHFH/3+n6knvYBQArnYw/VKb6qXwd5sUiE10lM2sGv/PLZnnte0jv+Ymv+512i07n6jrjWI U1CNAdsHgIgsfdsAUKWSdBBY+0CQBM908J1A8qkACq+cVEBlEyjTAEY6rSBSr55XH98pwAw6qgCe vbZeG2iLv+UE5g4F4oh00PnAa+T1BjrB3zq4t+ok81p7Lb0eSdXvFYFFoUwNTDXyrtcQAGOvc9Ip AFPcX6LDFSB+e829br3u8PsJEctiUO2aaeoiCmdeM68LqLqeAnCogDICuvf65fVDRXJB0/sCKgQk 0zQEzFuvd9AlgCaIWk9NWY4ILBGRc7ovUTvRqTTxAoij00NDM4C897oCnHTSB0xCU18Q1CkiLPcZ tQsL+t2KAVk8PEB0LgB0Bc0CMFblmYJ2YJd2YUE7UNZRQXnLMRBHJ8XIJgC6RGRmgOyjI0swhoAS laNMYME/4nqrctROhGRn9QA0BcRMTVNKHZnAGnQqocraWmNBz6EFoDIekA1MVx/zPwHUhGC6NTB6 6i3lMNmtU+iMdujOtFs1GonQCFBjtWbsHphYPhOoMQY4phzW5vZsYMpSyspD2tpJoJi2GpaeDg1U Mv2QgP62a9XDnKFTtVPsEXaFI9VFpIfQILAEjK2pYckRUYlFyarBdskx2NiU/RcfG7CeJXmYvXZh z0cbNrEnz9juL+qZDTyYq4y61zI0gJLEKNaE7UjBtc0qtyd1aAWrsEQj2RHRclRKMpi1JyTEBdre 6sFaVXlzevABFftRjaYJFMNIlmaPxN4oD1V7R35mDZg7mKsp8kaqKruNmDwdmTU6r/zRDdq8pwjt 1LIkcLzhBNmj+lWXHJ1ahwyzAMhXr0/QN0RqqacsiZy5YicMGzkQOuV1xKQ9AOYaIB8BdgPQLS3q lgaq89xO+ZZSGaycQGS9zGFhrwHyweszLO09Vfoy5hidsqELZa62tEvOqR5JaXFqAYunrqbnCyLz HaAMU2vyOWcYZa6WtNjFQozICcgxSPz0LZn8n5imOe2uInDkDgK1yG46ul4hOrfKQgyoHQaXI9Ac 0VqQS4wmWtPAOrSpUo+gE2VPBCijKZME+ASQTZMEaw6o1B2q1D1l5GVzSNnZAGyjDH1wmg55HWMi tqRNqYAdH++6LHCed//ysqHuvZBVr2OM2hSlShOuaQ089oVVa4+3Dp5KXwOo6fNHv9L7I8AAy/uZ vjvDDGsAAAAASUVORK5CYII="
          width={36}
          height={36}
          style={{
            overflow: "visible",
            opacity: 0.2
          }}
          transform="translate(752.51 533.9)"
        />
        <circle
          cx={770.3}
          cy={551.8}
          r={11.3}
          className="st2"
        />
        <circle
          cx={770.3}
          cy={551.8}
          r={8}
          fill={getColor(datosScada.d14)}
        />
        <circle
          cx={337.6}
          cy={1120.1}
          r={9.2}
          className="st33"
        />
        <circle
          cx={166.8}
          cy={1120.1}
          r={9.2}
          className="st33"
        />
      </g>

      {/* Fin Indicador antiincrustante */}
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALMAAACNCAYAAAD8ZEsuAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABvtJREFUeNrsmwlz2kgQRnUBPrCT 7G7+/y+M4xBsLBBoRVX31ufZ0cGVOOi9qi7JQogwerS6R0qSAADAxyI9w/tShhHOQN2yfnaZ0xaB ERkuIXQodn0OmdOOyBh7uAA7ETgWB8vs2zOL/d+5reeyPZa1AY7JyLXIvI+tLGvZ3lqGFD3ZOLN9 NCYmdC6iUz/DOepkl3cfVRMbW1a2ra0UaZU5CUSeNjELYmKRITScUeSdCbyPdRNvTZS2vrZ9t22N YtGSlVXk2ybumri35a3FxPbJKTXgDCWGZ2SXeNXEaxMvttT9t4eUGZnJemMCPzbxyZYPJvZMSo6M rAwnzl5sLSOXJu/PJhbmaBaIX8fq56IlK+f22l7meROfm/i7ib9s/cEkn7bUzgCHCL0LsvKyiWfz z6/82hTuYrMbbWVGLpnZZf6nia8m9SfLzlP55VBqwLElRm1N3trKi4Uly4nUyV43e1OovtVdZUYu jZ+XGV9M5q8m99xeL8jMcKaaeW0lhifKxMQtTXJvCF3opC8zZ9IAusxzy8afrdT4YqUGMsMlZJ6a TxuTeGnZepm8n0XbtdXModBeasxkRmNuEj+SmeECMm/MORf51SS+Nwe9rI3OoBVBrZwG2dkbQS85 biJBAwjnkHknIleWPD1uzT/t0bK+MkNRoV3qSRB+V5DmD84xo+Eihzfqpsn7aeDoc0FDbmf3BQ8d wanos0BFkDj1UQqtAtJwRqMY+EFDAuBUobMBSbTVuezAD0Ng+BVSx6qDXu+yAQdMEBd+s9iDHKTW hY+emQeDzPAnNYidkiMzXA3IDMgMgMwAyAyAzIDMAMgMgMwAyAyAzIDMAMgMgMwAyAzIDIDMAMgM gMwAyAzIDIDMAMgMgMyAzADIDIDMAMgMgMyAzADIDIDMAMgMyAyAzADIDIDMAMgMyAyAzADIDIDM gMwAyAyAzADIDIDMgMwAyAyAzADIDMgMgMwAyAyAzADIDMgMgMwAyAyAzIDMAMgMgMwAyAyAzIDM AMgMgMwAyAzIDIDMAMgMgMwAyAzIDIDMAMgMgMyAzADIDIDMAMgMgMyAzADIDIDMAMgMgMyAzADI DHA4tSxr+XuQzOGbasYTfqG4ndKeKzMf/UEAJ4g9KKFmAw+YIDD8hsycdKwfJHPfASlD4BI1sTq2 C6KOvOc/io4DJy0HDA++G2kjmV7gZI5ZZndq2xGh1O+SatHxy9CDVxYbi0q2+/7pyAROW5bHZqIx i10Hru0dW1uEzsWydGdm9jfogcsgpnYCPTOnF8hYH1HmthiStdtKtbE21joeW3PN/XqTKEXs7TEy V3LwVROvTSwtZnbC9vtMROZ0BBL7d81tPZPtWYvQMYl3QabRjDOmXqQOZN579lNiadveTOgqMk5R mfXAlb15L/JLE4sm5k3c2EmrbH1iJ/baZVaJcxs7XxayPevp0MPSrZJLqMo9RpnXJu6PJp6a+G7r LnRndi46apeN/Rpc5DvJyP4LunaZ00BmlXcaxETGQsej7qkJtTasRii0jo3LvDCZv4nQnp19jA4q M1TmH3aiXOR9tr4ficxpIPPEftQz+/53tvSY2hhmInPYf7zZGK6CunATnKx6hDKvrLz4bjJ/M7lf ZIxiJdk7mX1jmJmXdhIT2/5mH+aZurjyMkPr4YnJOrPvf28xt/BSYWrjkgaX0NIyzIv0Hy+Sdcq+ JudKS4y6pRp4NqkXp2bmStK+z1qs7YPuJAsVVzyboZk5F5lvTOKHJh6b+CSlwlzGxmXWk7S0K90P O0ne5KxaZK6vXOYk6NNK6dOWQRN4cAOYiMypbK8ks8xE5DyQORmBzLcm817kzzYmpch4b2OUSRJ4 DbLNd1tfyMkam8yJ+KYVQawUK7uycl9mTuzNsUw9kUYoi2Tka8zO3vxNJDM/SlZ9E6EfTPjcBr+0 /Z6lsXmSS6gfYx2pCa89KydBk1wl8Rsnvb1E0VOUx2Y48mAa6pqn5JKOBvBO6t2VlAl+iby18d21 NDVPUmroPOo2OGljIDZ1uQ1md3qvVsWALlPvCIY3CcZy1y+R7+7Z+TWSkb0M+9kj85OUGC+Slcc2 kxHL0ruId4PukBYHFOh+8FOeSbiW2rkILoFrqfNegjJjJ7NCzxIqchlkobE+jdj3lGYnxYG/mrpF 4HQkg50m8bt2m2DGwufgXeZSuvOFTMmtIo3NWJ8brwesnyxz3wekIxv8NGm/Pe1lhk/N5baPZ+1X ifDhGf4Hz4nfvfjd/4AruBSqzH4HS6cta3mtlEZvjHf7LkrBEByF9g7hw1ll8n7+XV+rkoHP5sLx nTqcpzHMkv8/Ghp75HMbzBYBMn+oMcyS+EP7Wj4MnmYCZP4IY9l2E4n/AIzMVzWmSAwAACPiXwEG AGleQWequxu2AAAAAElFTkSuQmCC"
        width={178}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(250.91 965.608)"
      />
      <path
        d="M316.4 974.6h-50.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3H328c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h64.7c3.5 0 6.3-2.8 6.3-6.3V980.9c0-3.5-2.8-6.3-6.3-6.3h-96.5z"
        className="st2"
      />

      {/* Conductividad de alimentación */}
      <g
        className="cursorPointer"
        onClick={() =>
          loadGrafico(12, "Conductividad de  alimentación", false, true)
        }>
        <path
          d="M260.1 982h159.1v99.8H260.1z"
          className={getTarjetaClass(12, selected)}
        />
        <text
          className="st19"
          transform="translate(299.128 1021.588)">
          <tspan
            x={0}
            y={0}
            className="st17 st9 st30">
            {"Conductividad"}
          </tspan>
          <tspan
            x={-5.1}
            y={15.6}
            className="st17 st9 st30">
            {"de Alimentaci\xF3n"}
          </tspan>
        </text>
        <text
          className="st11 st9 st31"
          transform="translate(315.047 1066.907)">
          {getScaledValue(datosScada.d12, 1)}
        </text>
        <text
          className="st11 st34 st30"
          transform="translate(374.313 1066.511)">
          {"\xB5S/cm"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(323.369 999.741)">
          {"AE-003"}
        </text>
      </g>
      {/* Alarma */}
      <g
        className={`${getTemaAlarma(12, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(12, "Conductividad de alimentación");
        }}>
        <path d="M285.1 1055.8c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M283.4 1054.8c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9.7-1.3 1.8-2.2 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM294.7 1053.5c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M295.3 1051.7c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM296.2 1060.8v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM291.2 1068.3c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALMAAACNCAYAAAD8ZEsuAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABw9JREFUeNrsmglzm0gQRmcAHb6S 7Pn/f+Am8SXLOoCFqp715zGDkC17HXivqgt0oarRU9Pd4BwAAHwu/Ak+51lGOAF1Yv/kMnt5LyLD R8pcD5XbD5S4jUyeyxAZ3knoQ5GkOCB5FkUePY6zNsApJC6bqGQborcMKQ5k49zeE2Imz2UdGRqp 4bWlhUq7b2Jn2xBB7DoldF9mzk3eeRMLiblFbpGqpwGOqZFDJm4l3lo8NrGx/SB3NTQzeyknCpP2 rInzJi4szkzqWZShAV4rdcjIO5F43cTKYh2VI74rOxeJEiMzkZcm8FeLL01cmtwL+3xOZoY3ZueQ lYPID03cimN+SDNYJEQOJUabha+a+NbEn038ZvuX9tosUTsDHNv47U3mVuQ7S6ILc7HuaAhf1M6p BlBLjCuTuJX57yZ+t+fOpXZGZniLzJXI3JYVN+ZeLqLvoqawGlJmaGZeWhZuS4w/mvjLtt+k1Iib QIDX1MylNXsrc6uw13ZSQ4eGMLf3+1Rm1tlykHkh2fmrSRxkvrDMXCAznFDmMxE5lB33VnrMo6FD NbQBLKQJPDN5ryy+kJnhxKXGXhq+WkqOW3NvGcms10Nqldl3yKwjujBjDmKH7RyZ4QTTjHDVL/i4 s4x8YUlz6Z7GwckeravMiGvnQrazaFsgM5xI6nCtIlyU0wt0s0jkzusahy5na5ZO3Z/BJAPeSigV cvf8FgpNnnmUlf0QmV1HtvYDAuCtmdkPSJq+w8vaueGXobuERWB4z0yt5e6gpJkNPCDAR4r8qrM/ NwjBZ8zIfWd/j8wwRtmRGcYJMgMyAyAzADIDIDMgMwAyAyAzADIDIDMgMwAyAyAzADIDMgMgMwAy AyAzADIDMgMgMwAyAyAzIDMAMgMgMwAyAyAzIDMAMgMgMwAyAzIDIDMAMgMgMwAyAzIDIDMAMgMg MyAzADIDIDMAMgMgMyAzADIDIDMAMgMyAyAzADIDIDMAMgMyAyAzADIDIDMgMwAyAyAzADIDIDMg MwAyAyAzADIDMgMgMwAyAyAzADIDMgMgMwAyAyAzIDMAMgMgMwAyAyAzIDMAMgMgMwAyAyAzIDMA MgMgM4CrLY6WuY62AB8lax2JO8jB7A1fguTwEXJXQ4XOBhzMJf4lZG44tbgqcNjGETv3337R9WSU ffVApeyH17xsp4R/hx9y6hlYY2++leKdiv5i3YqekiLIu7fYyX6IbGKNpO/Y968Qm7Pcy/UoxbNt tN2Jf1WqzC3kYD4hcjjopolHi418tpIf1E9A5r44lLHrjoThJtyL1OJQaa4Fz9aRbypz1SdzV1be y8HbAz80sbKY2/v3dozsHU69n1XirCdSQndJnCrdju7iRzLB2FvSbP26k1iZf5uO7HywZtasvDGJ 24PeNnEhIrdfvBSZx5qZY5Fzi0K2YT9LrEUscdlRspUHGp2x18ul+dbKe93ET9u23t2b0Nu+UqNI HDj8S9Z2oPaAP5qYicgXInM+0szspSfIRN6ZxVwiPJdHQtdSE5aythpaE5Z9Tc6IZd6LzDdN/NPE d5P6zpLqRtZokMxh4VXma3nvzr7wvImF/YBjzcyalUNGDvK2f+Qzi6XFwl7T0itubrQm7KoLy766 cKQlRi292YMlz58m9A97/NCRmd2haYYW448mcy41cnvQK/sR5yMvM2KZZyJy+2e+tDPUpUUQcS5r VkdnutB73FusROptIjuPXeaqI4HeSqkRZ+aDZUadkDlkmFLk1qxcRKM5P0KZs0jmc5P4i8VXKRf2 Un6FGfxW1i70Hze21SZnG2XneuQiu8Q0Yy1/9rA+j4fWpkh8UahhvDwOcq8ikfMJNH8q88LOSpcm 8TfptoOM5ya9jxqbG2luNOvcyzHimnAq2blMjOe6zlr10NGciwSuZT9MN+IO3o80M7tEmXFmmfk2 KhM2FpcmfWY/wNqkvbam5ofFzygzh0awmoDIdUcTqCPhXaI5Tq5J0fMllXs5d94OGEONMTtnUXZe msyrKHuEU+SVvSeTPiNMhL5Ll34T1YPxaXQqF1DUs1rE1f7h4NmqGPCvKd3LCymZm9ZVPxeN5uYm 4Fqy8UbKsD6ZQ1xLVt5EnfqU5szOpS8qxTcduWMzc6rkqNzLy7ZTuLnId2ToWXQK3EaNy5WUGaV7 uvB0LaGNTaoenNq9Gqm7MwedpYoj6hp97BM/+BTEztzzu7n0/pUwsbiQ8dw+mmTcyUjuceIZua+G dseuRfGKL+qSekqLH99rq1JvTNSlyZzJNOPRPc2Y15QWgzw7iuL//PJfmLKjvtN7WXT+XkWliI7w EPkd6kE4ft10Bl3IpEPHlt6l7wuf4tQCmT+50M49H9113WjUdbsnIiPzp510aKb2UT8RB2UFMv8S UqfWdcojN2Qe4XoiMQAATIh/BRgAKlstfmWnq3MAAAAASUVORK5CYII="
        width={178}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(78.692 965.608)"
      />
      <path
        d="M144.1 974.6H94c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h64.7c3.5 0 6.3-2.8 6.3-6.3V980.9c0-3.5-2.8-6.3-6.3-6.3h-96.5z"
        className="st2"
      />

      {/* Caudal de alimentacion */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(10, "Caudal de  alimentación", false, true)}>
        <path
          d="M87.8 982h159.1v99.8H87.8z"
          className={getTarjetaClass(10, selected)}
        />
        <text
          className="st19"
          transform="translate(147.506 1021.588)">
          <tspan
            x={0}
            y={0}
            className="st17 st9 st30">
            {"Caudal"}
          </tspan>
          <tspan
            x={-25.7}
            y={15.6}
            className="st17 st9 st30">
            {"de Alimentaci\xF3n"}
          </tspan>
        </text>
        <text
          className="st11 st9 st31"
          transform="translate(142.83 1066.907)">
          {getScaledValue(datosScada.d10, 1)}
        </text>
        <text
          className="st11 st34 st30"
          transform="translate(202.095 1066.511)">
          {"m\xB3/h"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(151.151 999.741)">
          {"FIT-001"}
        </text>
      </g>
      {/* Alarma */}
      <g
        className={`${getTemaAlarma(10, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(10, "Caudal de alimentación");
        }}>
        <path d="M112.9 1055.8c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M111.2 1054.8c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9.7-1.3 1.8-2.2 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM122.5 1053.5c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M123.1 1051.7c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM124 1060.8v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM119 1068.3c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>
      <circle
        cx={1257.6}
        cy={1078.7}
        r={9.2}
        className="st33"
      />
      <image
        xlinkHref="data:image/png;base64,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"
        width={178}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(1169.414 924.2)"
      />
      <path
        d="M1234.9 933.2h-50.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h64.7c3.5 0 6.3-2.8 6.3-6.3V939.5c0-3.5-2.8-6.3-6.3-6.3h-96.5z"
        className="st2"
      />

      {/* Caudal de productoo */}

      <g
        className="cursorPointer"
        onClick={() => loadGrafico(11, "Caudal de producto", false, true)}>
        <path
          d="M1178.6 940.6h159.1v99.8h-159.1z"
          className={getTarjetaClass(11, selected)}
        />
        <text
          className="st19"
          transform="translate(1238.227 980.18)">
          <tspan
            x={0}
            y={0}
            className="st17 st9 st30">
            {"Caudal"}
          </tspan>
          <tspan
            x={-14.5}
            y={15.6}
            className="st17 st9 st30">
            {"de Producto"}
          </tspan>
        </text>
        <text
          className="st11 st9 st31"
          transform="translate(1233.551 1025.498)">
          {getScaledValue(datosScada.d11, 1)}
        </text>
        <text
          className="st11 st34 st30"
          transform="translate(1292.817 1025.103)">
          {"m\xB3/h"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(1217.873 958.333)">
          {"FIT001 - FIT002"}
        </text>
      </g>
      <g
        className={`${getTemaAlarma(11, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(11, "Caudal de producto");
        }}>
        <path d="M1203.6 1014.4c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M1201.9 1013.4c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9.7-1.3 1.8-2.2 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM1213.2 1012.1c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M1213.8 1010.3c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM1214.7 1019.4v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1209.7 1026.9c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>
      <path
        d="M491.8 876.8v-64c0-4.5 3.6-8.1 8.1-8.1h62.2c4.5 0 8.1 3.6 8.1 8.1v64"
        className="st0"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALIAAACNCAYAAAATpiAQAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABzlJREFUeNrsmwtzm1YQRi9XSJYf eTRN2///99pp7FjCWJKBos7e+vM1T9lOXDhnZgcLJ1cTOCy7C3EOAADeB8k7WwfmS/WjBUwG/Azw EomrsYKnIwXWcA2fAV4qcxXFIKHTgQIf8fazb4iErAwvlDhEGUXY1ylzMkDiEAuLVLZpJDOlBpxa SgRxizoeLAoJFXtURk4kAwdxVw0RxPaIDCeIHDKxCryP4mD7XZvMfaVFyMTLOs7qWNdxYXFu+1b2 e98gM8CQkqI0UY/C7uq4ryOv4862watDm8xph8A+kviyjqs6Plhc2b61/Zm0oREE6MvIWk7sTNys jm0dt+ZgItIf5HOnyFpSpCbpuYn7i8QnEzpk5kVLrQzQJXQQ+WCZODOBb+RO7xoawCcy92Xk1DLu pYn7pY7fLILMFyZyishw4qSisFr4KPLGJF5bcqxEdG0Ae0WOywoV+dc6/qjj9zq+2r5LMjK8oLzQ jJybyOfmZhXVzaHx8/b3/pM5bZBYm7yViXwlGfmriPxZMvKCZg9OzMoqskq8t4Yvs8hNaD8mI6dR Rv5o4n6RCKXFUkSm0YMxGTnUyQcZHASJQ738PRoqPEuYQ0uLC8vKH6O4kitowcQCThS5svp3YftC Jv5gSTQMFJbiWdJXWuiTvKWVF+fucX6sc+S1e3woQlkBLykvvAh9LrEWieMnyYMyspYXK/f4QCRe OI2uEoCxlOLjUpzTbdrVhw15IKIyrzoERmQ4NSMnUQKN3+tZiMTxZOzf8sK3TCzaFtWFEySGVyB2 yDe4Fwv8rBfzDYu6hoUXrv31TQSGtxa81zU/8mpBXPiREjs3cBLmBy7alK0B3lJgN8Yzf8IXOYSG nyB4p3N+ZHoHeJd4DgEgMgAiAyAyACIDIgMgMgAiAyAyIDIAIgMgMgAiAyIDIDIAIgMgMiAyACID IDIAIgMgMiAyACIDIDIAIgMiAyAyACIDIDIgMgAiAyAyACIDIgMgMgAiAyAyACIDIgMgMgAiAyAy IDIAIgMgMgAiAyIDIDIAIgMgMiAyACIDIDIAIgMiAyAyACIDIDIAIgMiAyAyACIDIDIgMgAiAyAy ACIDIgMgMgAiAyAyIDIAIgMgMgAiAyAyIDIAIgMgMgAiAyIDIDIAIgMgMiAyACIDvB+RKwsnW4BJ ZOSqRXSAt6Tqc86PXASB4a2FPckzP3DhOAB+dAauxohcNQhc1lHYNg7EhrfKyupfr2u+Q+JSJD7G g0UhYpOp4TXFLRu8a0qcz7J02rF4KQIf6thbHCKhF44xXvJKt9I5i1xGzj2Ie+pc2SRz2iFxKQvt LO4tdib1yiROZIvA/ceh6mmo5yZyGUnb5NohEvkJaUeaL6JF7+rIJNby98uGzJzMROQ4+oSuaKSf /DtD0jyIZ+rane3vlDkdcIXsbLFNHbd1fK/joo6lnajCMvMiysrJTAT20V3JR1InPT1IVw04h6lE KUnzThy7tdiKzKHEeNb8pT318fEqyG2x46LXJvFKJD6KfmZr+ZbMNLVSQqVdWKSy9RJdZVtXEz31 UqOKkmZImEeJ/7a4ts9b83A/NCNXdpK0tLi3hW6snAgSP9jvLk3kpZ3IKWfkRKY93o7f0mJlET6n DcdBm5l9FF0NzZQzciEuZZYwjxL/KTJvROSHsaWFipzJSQqZOAjeJHIyYZETycRB4OMFfm6xlgs+ ZGkXJYe9Hb9cbpv3cqKKGYhcdYh8bRL/ZQl0K8enaCrB+sZvoUbOpGwIJUcm9fKZnLQpTy+CyKGE CBIfj8GVxMGkDsclabiFZpZptlIH7rpunxOdVpRRL7Y1r65N4u8isjZ7bkhGdlGdnEjJEa6ejWXj tWRrP/HJRSzymUj8oY7Pdmw+iswrEXkfnawbaWyyvtvnxCcWe5labKOLPDfRH9rKrr6MHMsYbo2h AVSJ59LsJVJWBJGPEn8SGcPcPZRdXsqxzAQ+ZpxvknnaTthcmr245Mrd01ly5zFJB3xZ0VDPhNvA UmrjRYPEU8/IKxF5E9W7ue1fm8jhTnZr4obO/Fsk8pwysnoVkuShpQnufOciHfCFZcPVs49GTr6l Np5iZtaxW6iRN+5xeJ9LE6ciF+5xHv/NQkdMWTQrrWYgclwrF9FYsu29npMycluX6d3zBwBTf5qn 4zetk3O5Be5kohNn5NxEvpFMfCPN3lymFm0TjKYHRIPm6unIK6iQxiWWdy6PpF00gtN3Afb2OZdm WGvkXEZMocnbyMQi7srn9si67ZF973FIT/gy/XkOpURXrezl9qc1XsjIOrUoRPLMfq/N4WEmTd6Q UsONvZDTF35xFZ3cOZ2ApOFWqMP9rXs+R9aXsHLX/mbX3N6Cq17jZMDrZOaFe/q4einNsM7gtTPX 9yz4HzeI/G5kjl8i0gdE+ui/GNORAyL/jGlG2+ucrqETn8ubboj8P83OXZOc0R05IPJ7Pq4IDAAA E+QfAQYApJ48R8J5938AAAAASUVORK5CYII="
        width={177}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(442.51 648.832)"
      />
      <path
        d="M511.9 658.2h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3V664.5c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
        className="st2"
      />

      {/* Diferencial de microfiltracion */}

      <g
        className="cursorPointer"
        onClick={() =>
          loadGrafico(15, "Diferencial Microfiltración", false, true)
        }>
        <path
          d="M452.6 665.6h157.1v99.8H452.6z"
          className={getTarjetaClass(15, selected)}
        />
        <text
          className="st19"
          transform="translate(500.29 710.247)">
          <tspan
            x={0}
            y={0}
            className="st17 st9 st10">
            {"Diferencial"}
          </tspan>
          <tspan
            x={-10.1}
            y={16.8}
            className="st17 st9 st10">
            {"Microfiltraci\xF3n"}
          </tspan>
        </text>
        <text
          className="st11 st9 st31"
          transform="translate(512.244 753.025)">
          {getScaledValue(datosScada.d15, 1)}
        </text>
        <text
          className="st11 st9 st30"
          transform="translate(573.011 752.625)">
          {"bar"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(492.517 685.25)">
          {"PT002 - PT003A"}
        </text>
      </g>
      {/* ALARMA */}
      <g
        className={`${getTemaAlarma(15, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(15, "Diferencial Microfiltración");
        }}>
        <path d="M475 741.9c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
        <path d="M473.3 740.9c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM484.6 739.6c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z" />
        <path d="M485.2 737.7c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM486 746.9v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM481 754.3c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z" />
      </g>
      <circle
        cx={531.6}
        cy={803.7}
        r={9.2}
        className="st32"
      />
      <path
        d="M491.8 1358.5v-64c0-4.5 3.6-8.1 8.1-8.1h62.2c4.5 0 8.1 3.6 8.1 8.1v64"
        className="st0"
      />
      <image
        xlinkHref="data:image/png;base64,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 YII="
        width={177}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(442.51 1130.562)"
      />
      <path
        d="M511.9 1139.9h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
        className="st2"
      />

      {/* Diferencial de microfiltracion F005B */}

      <g
        className="cursorPointer"
        onClick={() =>
          loadGrafico(16, "Diferencial Microfiltración", false, true)
        }>
        <path
          d="M452.6 1147.3h157.1v99.8H452.6z"
          className={getTarjetaClass(16, selected)}
        />
        <text
          className="st19"
          transform="translate(500.29 1191.977)">
          <tspan
            x={0}
            y={0}
            className="st17 st9 st10">
            {"Diferencial"}
          </tspan>
          <tspan
            x={-10.1}
            y={16.8}
            className="st17 st9 st10">
            {"Microfiltraci\xF3n"}
          </tspan>
        </text>
        <text
          className="st11 st9 st31"
          transform="translate(512.244 1234.755)">
          {getScaledValue(datosScada.d16, 1)}
        </text>
        <text
          className="st11 st9 st30"
          transform="translate(573.011 1234.355)">
          {"bar"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(493.517 1166.98)">
          {"PT002 - PT003B"}
        </text>
      </g>
      <g
        className={`${getTemaAlarma(16, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(16, "Diferencial Microfiltración");
        }}>
        <path d="M475 1223.7c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
        <path d="M473.3 1222.7c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM484.6 1221.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z" />
        <path d="M485.2 1219.5c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM486 1228.7v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM481 1236.1c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z" />
      </g>
      <circle
        cx={531.6}
        cy={1285.4}
        r={9.2}
        className="st32"
      />
      <image
        xlinkHref="data:image/png;base64,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 /wowAKeXNZNuekbIAAAAAElFTkSuQmCC"
        width={178}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        transform="translate(999.065 924.145)"
      />
      <path
        d="M1064.8 933.5h-50.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h64.7c3.5 0 6.3-2.8 6.3-6.3V939.8c0-3.5-2.8-6.3-6.3-6.3h-96.5z"
        className="st2"
      />

      <g
        className="cursorPointer"
        onClick={() =>
          loadGrafico(13, "Conductividad de permeado ", false, true)
        }>
        <path
          d="M1008.5 940.9h159.1v99.8h-159.1z"
          className={getTarjetaClass(13, selected)}
        />
        <text
          className="st19"
          transform="translate(1047.612 980.423)">
          <tspan
            x={0}
            y={0}
            className="st17 st9 st30">
            {"Conductividad"}
          </tspan>
          <tspan
            x={2.2}
            y={15.6}
            className="st17 st9 st30">
            {"de Permeado"}
          </tspan>
        </text>

        <text
          className="st11 st9 st31"
          transform="translate(1063.53 1025.742)">
          {getScaledValue(datosScada.d13, 1)}
        </text>
        <text
          className="st11 st34 st30"
          transform="translate(1122.797 1025.346)">
          {"\xB5S/cm"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(1069.853 958.577)">
          {"AE-004"}
        </text>
      </g>
      <g
        className={`${getTemaAlarma(13, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(13, "Conductividad de permeado");
        }}>
        <path d="M1033.6 1014.7c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M1031.9 1013.7c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9.7-1.3 1.8-2.2 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM1043.2 1012.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M1043.8 1010.6c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM1044.7 1019.7v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1039.7 1027.2c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>
      <circle
        cx={1085.2}
        cy={1077.5}
        r={9.2}
        className="st33"
      />
    </svg>
  );
};
export default ScadaClariant;

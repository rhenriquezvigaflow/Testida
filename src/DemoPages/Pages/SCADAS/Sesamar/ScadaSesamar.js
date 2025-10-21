import * as React from "react";
import {
  getColor,
  getColorConexion,
  getConexion,
  getScaledValue,
  getTarjetaClass,
  getTemaAlarma
} from "../../../../commons/scada/scada";

const ScadaSesamar = (props) => {
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
      viewBox="0 0 1429.5 1731.6"
      style={{
        enableBackground: "new 0 0 1429.5 1731.6"
      }}
      xmlSpace="preserve"
      {...props}>
      <style>
        {
          ".st0,.st1{fill:none;stroke:#35ace8;stroke-width:4;stroke-miterlimit:10}.st1{stroke:#00aeed}.st2{fill:#fff}.st8{fill:#666}.st10{font-size:14px}.st11{fill:#606060}.st13{font-size:17px}.st14{fill:#00e098}.st16{fill:#0e76e7}.st17{fill:none;stroke:#2f3e49;stroke-width:4;stroke-miterlimit:10}.st18{fill:#2f3e49}.st19{fill:#00aeed}.st20{font-size:11px}.st21,.st22{enable-background:new}.st22{opacity:.15;fill:#0e76e7}.st23{font-size:13px}.st25{font-size:15px}.st26,.st27{fill:#fff;stroke:#35ace8;stroke-width:4;stroke-miterlimit:10}.st27{opacity:.6;fill:none;stroke:#cbcbcb;stroke-width:2;enable-background:new}.st28{fill:#cbcbcb}.st29{fill:#00a39b}.st30{fill:#323e48}.st31,.st32{fill:none;stroke:#323e48;stroke-width:4;stroke-miterlimit:10}.st32{stroke:#fff;stroke-width:2}.st33{opacity:.6;enable-background:new}.st34{font-size:10px}.tarjeta{fill:#ffffff}.tarjetaSeleccionada{fill:#3574e0;opacity:.15}.cursorPointer{cursor:pointer}.cursorNormal{cursor:default}.campana{fill:#3474E0;}.campana:hover{fill:#7c7c7c;}.campanaVacia{fill:#c2c2c1;}.campanaVacia:hover{fill:#7c7c7c;}.campanaDesconectada{fill:#c2c2c1;}"
        }
      </style>
      <path
        className="st0"
        d="M275.3 899h1018.4c5.3 0 9.5 4.4 9.3 9.6l-1.7 42.7c0 5.8-4.7 10.4-10.5 10.4H64c-9.9 0-17.8 8-17.8 17.8v448.3c0 2.8 2.3 5 5 5l13.3.2h998.8c2.9 0 5.3 2.4 5.3 5.3V1561c0 2.7 2.2 4.9 4.9 4.9h93.7"
      />
      <path
        className="st0"
        d="M301.8 642.4h1055.7c3.9 0 7.1 3.2 7 7.1l-2 322.3c0 5.8-4.7 10.4-10.5 10.4H72.2c-4.3 0-7.9 3.5-7.9 7.9v285.3c0 2.8 2.3 5 5 5h13.3"
      />
      <path
        className="st1"
        d="M674.6 402.8H369.3"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.2,
          enableBackground: "new"
        }}
        width={289}
        height={178}
        xlinkHref="data:image/png;base64,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 gg=="
        transform="translate(1101.812 37.638) scale(.9944)"
      />
      <path
        className="st2"
        d="M1376.2 207.4H1113c-3.4 0-6.1-2.8-6.1-6.1V49.7c0-3.4 2.8-6.1 6.1-6.1h263.2c3.4 0 6.1 2.8 6.1 6.1v151.5c0 3.4-2.7 6.2-6.1 6.2z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.2,
          enableBackground: "new"
        }}
        width={234}
        height={122}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAAB8CAYAAABqtVxXAAAACXBIWXMAAAs6AAALOgFkf1cNAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABKhJREFUeNrs2mtPG0cUgOGxvRgK 5EJpm6qRqv7/39VWVUhDIdyMYd3Z9kwYtraxwSSK+jzSkSHYfHtzZpdNCfhqDD7z54D7Zs8V3qB6 FSxsLtjZqvEOVgy1P8NewMD6W7XE2lZfz5aF+1BswyrQUW+Gti08Won0tjdtL+KVgq03aRMzjtmO 1yZ+PrRpYe3N2gV5E3NdzTT+rcTb1r+gWRBrCXErAv0mz26e/Tx78f12Fa1YYb1r1tsIdJLnIs95 vF7GlHhTHW2zZLNuVZG+jjmI1xd5duI9I9ezsPZ16zSi7EI9y3MScxyvZ/H+aX1d2yy4bm1ii77K 812eH/K8iddv87yMn/eDBVa7fu2OvVexVU/zfMhzlOddXHIOe9ey/7w2C7brOI6+XZw/5fk5z9s8 P+Y5jK1bgnUkhvU2bVsdibtgP0awB3GqHVZR1zeiZvOOxKO4Pn0R27UL9ZeI9k0ciXfT3Y0nd4ph /Q1bgpzEsfgglmQTkU7iWvYqjsXd+wfNguNwCfYwturb2LTfx3bdSXc3nFy7wvpbttx4ukl3N3JL rOWYfBIxT+J9n65h64ciRtWR+FUciw+ra9fd3lFYrLB+sKmKttwLamOrHsf17FF8XZZjO+9IXP85 p/5Tzm66uzPcCBUebdA71Q4i1v1Ykq9jOe6l+888DObddKqjHVdT/hewWWGz6t7KMw/lWYd7N3aH C+ovD04sehRRrLC5bVt66z9V2KTen00XBfvQAJsPd96yvHeiHa74S0QKny/afnNLNyzw5cNN8xal YOErIlgQLCBYECwgWECwIFhAsIBgQbCAYAHBgmABwQKCBcECggUEC4IFBAsIFgQLCBYQLAgWECwg WBAsIFhAsCBYQLCAYEGwgGABwYJgAcECggXBAoIFBAuCBQQLCBYECwgWECwIFhAsIFgQLCBYQLAg WECwgGBBsIBgAcGCYAHBAoIFwQKCBQQLggUECwgWBAsIFhAsCBYQLCBYECwgWECwIFhAsIBgQbCA YAHBgmABwQKCBcECgoX/h1nv9cFgZwsGeN5Qy7Tz2hs+8KHb+GArXHjWUNvo7SbPNF5veu2lZsmH ywevY6ZVwIMYYHOxlt4mea6qcNvy5mbOZi2xdh+6zHMR0329E1u5df0LGwu27u0sz8c85/H9dbUo /7NhyzH4OiI9zXOc50Oe/Tyj+PlWfG3LwtO36zR6O4nWuvkrwp3UR+Om+uCg9wsue8HuxVbtPrwd wSbRwqNjTdVR+Dw6+zNeTyLismFndbD9a9eriPV9hLoVP+t+wcsqWMdieFq05UTbbdOjPL/m+T3a O40WS7BLj8TlF4zi3y+j/BcRbJPcfIKnxFr3dhbb9Y88v0WwZ3EkXrhhU+9MXTboNAJ+Fxt3XF3D ChaefiSur2HfxzXsRfysXbZhy7E4ReFtVN4Fu5v+vVPcRMwD17Hw6FhTuv9XmYt0d5f4otqun4Jd FNogghzF9es4jsHjiNV2hc0di0u05ZmHSbr/3EObVtiMJdoS7qj6fmizwsY2bf3wxG1vq7b9KNMD 0c4bscLmo03pgceAV4lOoPDlAl472Ke8H1g/1oX+FmAAN+xcPURU2mQAAAAASUVORK5CYII="
        transform="translate(36.959 37.638) scale(.9918)"
      />
      <path
        className="st2"
        d="M256.2 151.5H47.4c-3.4 0-6.1-2.8-6.1-6.1V49.7c0-3.4 2.8-6.1 6.1-6.1h208.7c3.4 0 6.1 2.8 6.1 6.1v95.6c.1 3.4-2.7 6.2-6 6.2z"
      />
      <circle
        cx={1143}
        cy={178.8}
        r={8}
        style={{
          fill: "#B4002B"
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
          fill: "#3574e0"
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
        transform="translate(1160.93 105.915)"
        className="st8 st9 st10">
        {"Funcionando"}
      </text>
      <text
        transform="translate(1160.93 125.915)"
        className="st8 st9 st10">
        {"Movi\xE9ndose"}
      </text>
      <text
        transform="translate(1160.93 145.915)"
        className="st8 st9 st10">
        {"Falla"}
      </text>
      <text
        transform="translate(1160.93 165.915)"
        className="st8 st9 st10">
        {"Bloqueada"}
      </text>
      <text
        transform="translate(1160.93 185.915)"
        className="st8 st9 st10">
        {"Detenida"}
      </text>
      <text
        transform="translate(75.498 77.731)"
        className="st11 st12 st10">
        {"Conectividad de Planta"}
      </text>
      <text
        transform="translate(109.29 128.21)"
        className="st11 st12 st13">
        {getConexion(datosScada.conexion)}
      </text>
      <image
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        width={37}
        height={38}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAnCAYAAACIVoEIAAAACXBIWXMAAArrAAAK6wGCiw1aAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7VJREFUeNrsmIlu2kAURT2eMVsg oaFtklaV+v+/1YW2KVkAsxnsjqv7osurV6JGqlSkK4yxx8dvt4Pg/+cf/pi/vE720lCm5LsIKmsD aJ4BE2Lb0LYGypUqqKzOiuZEGJFVCumCOcyBlJICgv3j41oAMUx+XkcpIosJUOK1gxLoQGBZkWub WKoIpuc1gIZefa8u/jcEtPFaQyt8b732CvDIaq4hkFUw59AYGmE/Q20BsSA9es3x34YAj9zpalwm botgjRzk0mvi9drrDX7n+89wHEOtAPHgde/102vmFWP/EuBHieAaxFAEK1x4vfW69rqBGGqgoHZk qXvAvIK7H+Fuo+LqUGUpsZKDy4awzHuvD9AN9o1hJY6pDDHD1poAPrf4HW5AZ+jvrHUVQJbcNoaV cqiPgLrG/iHAOfsylX3niLs+jhvhuB3AdxT4gauJpQ4umpv9yusdwMRKIwKylM3iji4u1sNaFv/3 sH8JrSjoS2NK0r+PC18ifq5gsQlirK8sZAoquiO3BoAJEW+SAI8Ayy12cDVW0lAT5bJOCVCggjii tB9jO0bw3yLG5gBNXEU8SZCPqB4xkKMMbdKaHNx5RnBjWPxozaqYiqhYDqEBZZlt2BE0GBfhEXWE jkCFBTBGtZUuTuoroLBFQ9d1T8B6WPcoe8OaRSwF6ikwVXAOIBwGJqiJhyKXvsgnrBhjM+rgPBNl z7iebin7onXDihPlJKm6WzVutBlxGSahFsTr7mXdsODEgKB2GDFW0EYt0AYopTlK5qwYksK511B6 jN3jLmKah2TUSBq6U99kAoAlqvgDimYM0H1ZQw7orja0wD0WuUAKW5okwhooCQOZGGSUucP2knpf amsaskwKXaonHUplQ+2kyOLsshg3dYth76vXJ3zPCOxga9KfW05E31Ydl5ZkK89UApRDfPf67PUF 29KQkzJL6equf5uSx6hEZZYkiEyeP7ymsM4UcFO48MlK+bq2wdOvoQrs1CiiEyOhErKmWVzm828A 0dPBhjPaVQQox4OYX4I6pSTQ06dV43AM98wI6gGQCyozT7XP1WRNijvngJasXOBCY+r00lQZirN3 BhjZtyC3NXrEyqhAblWt2cDs5/TM11NQXOeWOH5O1llRNT+qd6ZFZ7c0yvRonJEZq6PGXrmBNUGs yV3cGVpD6ZGDS4TUrEgV0br3CRk/Up3yLqGoqIZUw6x638BQWcmbl6zs5cYp76fK6pZWVtCMgzqY 577JK3p7ZypenAVt3uj9EmAAVGPAlKf0B2IAAAAASUVORK5CYII="
        transform="translate(66.583 102.711) scale(1.0206)"
      />
      <circle
        className="st2"
        cx={85.5}
        cy={122.2}
        r={12.1}
      />

      <circle
        fill={getColorConexion(datosScada.conexion)}
        cx={85.5}
        cy={122.1}
        r={8.9}
      />

      <text
        transform="translate(1134.967 77.731)"
        className="st11 st12 st10">
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
        d="M59.9 96.2h185.8"
      />
      <path
        className="st1"
        d="M43.9 326.1h134.2c4.7 0 8.5 3.8 8.5 8.5v58.3"
      />
      <path
        className="st16"
        d="M133.6 407.6h124.8v97.7H133.6z"
      />
      <path
        className="st17"
        d="M258.2 391.3v111.2c0 1.7-.6 3.1-1.2 3.1H135c-.7 0-1.2-1.4-1.2-3.1V391.3"
      />
      <path
        className="st18"
        d="M362.9 397h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
      />
      <path
        className="st19"
        d="M315.3 434c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st2"
        d="M315.3 422.3c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <text
        transform="translate(150.121 528.404)"
        className="st11 st9 st20">
        {"TK - AGUA CRUDA"}
      </text>
      <path
        className="st1"
        d="M263.9 427.1h48.5"
      />
      <path
        className="st19"
        d="M180.1 396.1c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
      />
      <path
        className="st2"
        d="M191.8 396.1c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <path
        className="st18"
        d="M714.7 394.6c0-6.7-7.8-12.1-17.5-12.1s-17.5 5.5-17.5 12.1h.1c-.1.3-.1-.3-.1.1v45.6c0 3.5 3.4 6.4 7.6 6.8v6.2h5.2v-6.1h9v6.1h5.2V447c4.5-.2 8-3.2 8-6.8v-45.6c-.1-.3-.1.3-.2 0h.2z"
      />
      <text
        transform="translate(677.243 473.085)"
        className="st21">
        <tspan
          x={0}
          y={0}
          className="st11 st9 st20">
          {"Filtro de"}
        </tspan>
        <tspan
          x={6.1}
          y={12}
          className="st11 st9 st20">
          {"Disco"}
        </tspan>
      </text>
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={157}
        height={140}
        xlinkHref="data:image/png;base64,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 BwAAjn8EGAD3ax0Egfa5VwAAAABJRU5ErkJggg=="
        transform="translate(375.09 253.504)"
      />
      <path
        className="st2"
        d="M434.1 263.1H391c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V269.4c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Presión Alimentación Planta */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(1, "Presión Alimentación Planta", false)}>
        <path
          className={getTarjetaClass(1, selected)}
          d="M384.8 270.5h138.1v99.8H384.8z"
        />
        <text
          transform="translate(432.988 310.096)"
          className="st21">
          <tspan
            x={0}
            y={0}
            className="st16 st9 st23">
            {"Presi\xF3n"}
          </tspan>
          <tspan
            x={-35.4}
            y={15.6}
            className="st16 st9 st23">
            {"Alimentaci\xF3n Planta"}
          </tspan>
        </text>

        <text
          transform="translate(435.68 355.415)"
          className="st11 st9 st13">
          {getScaledValue(datosScada.d1, 1)}
        </text>
        <text
          transform="translate(474.805 355.02)"
          className="st11 st24 st25">
          {"Bar"}
        </text>
        <text
          transform="translate(436.992 290.456)"
          className="st11 st9 st20">
          {"PT-003"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(1, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(1, "Presión Alimentación Planta");
        }}>
        <path d="M409.7 341.3c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M408 340.3c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM419.3 339c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M419.9 337.2c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM420.8 346.3v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM415.8 353.8c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>
      {/* Fin Presión Alimentación Planta */}

      <circle
        className="st26"
        cx={452.8}
        cy={402.5}
        r={9.2}
      />

      {/* Bomba Alimentación */}

      <g
        className="cursorPointer"
        onClick={() => loadGrafico(20, "Estado Bomba Alimentación", true)}>
        <image
          style={{
            overflow: "visible",
            opacity: 0.15,
            enableBackground: "new"
          }}
          width={39}
          height={39}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA8RJREFUeNrsmHlv2kAQxb1rG8KR hIQ2TXpI/f5fq2eaNuTgtLG36+pN9DJasA20/SdII8CY8c9v5/JG0cvr5fV/X+Yf+XS7OksODGUC gG4f4OQAYNpsAMYRVNkG1OypmFUWw1jJkqygz45g3SEVZKUEKPXWgb8Ux0TJCmoNy+hzQcAbFU12 hIvx3wqq661H1sXxGBesYFawhbclrILNCdaFIJMd4QRs4G3o7QR2jGNH8O0AVgHNvD16m+J9RsC5 UtO1BdRwPcCMvL3yNvZ2ju/H+J0B5wC793bn7dbbBN8fALpSSeSaAjJcCnVOAPXG25W3S2+vvZ0B 8AjnlljKBQAruF/ebrz9gEm8Opzr2gDqhOhiSccA+wB7C8BTLHE3EIMzqHULpYd0XkSZ7bDc1XVd UwUtlrYPlS4A9hHvV1hiVs9QKckBOcJNDCkMIspozuxaQC6+Ce72mNR7D7h3UO8EN5BSLWRFcpXp cu2cMluyW7LaJA3VS+H4FElxqWJvBLiOqoESSwnVyISWNacEkgxf4Hi5DdAEkqMPwDGgLrCsopyo ovuxU11Hfl8DRuLyJ947UHJdlyS6tAwAcw7IM3zvURexNe00JmjxN1LlqcPt0tYssaX468PhKQX6 UaC1telCPfjtq9gUtRs55eIsnUO6xTbl6uJaYlJaY4fiU/wZ22CEislRj+KNlTMt4EL1NVG+DC9h m0KdkMUtlatLxo0xVvfigbNUFX/XUd6pWbEgv8+GBVvjhB3kKKIZzXXlHpDsl8euZ6B2i2IRdYEM tWlOY9IqMCY1Ua6kITajWXFFoE+QtsHSFjQyPWJEknmuLaQArmmAnaGDzHGMAWuHhZIUnNE8N0HB HlI2R9RJokA34Z4sN/wAf3LTc9WLnxxvyi5dt7qof71AHbQqHnVyMdwUbe3a2xdvn719x6w4BeSf +I9blAN+QEqp8dsAFCcXgy2hFMN9wvs1lFzwc0rcoEZFATVt4LGyUECcBAsKEQ1XqfcNx6c4/ymm kwa1KqI4nJJyESAkecbo1QPV8GVgXeC8O4z8X2vgGj+TROoi/Ly7wkUnmBN5iEjovxklxYSeSa4x Zt3THFi0earTKuZYKheY526goACyghkpLVVggs9csnShbtXkOf5SymiZcIb0rBFa4iUt85RqH4/5 he5MZsfGbmlo6BBsV810RtVS6UjSObINLW7nzSMT2Dji8hPrgTPQ3tb0uaDf3aF2t0xgh8uoXS6z ocW5trtb++ywmi2bl6ZmbHN/e39wkw/TsCI0HtF+CzAA78akAr65l7cAAAAASUVORK5CYII="
          transform="translate(324.204 393.744) scale(.8974)"
        />
        <circle
          className="st2"
          cx={342.1}
          cy={411.5}
          r={10.9}
        />
        <circle
          fill={getColor(datosScada.d20)}
          cx={342.1}
          cy={411.3}
          r={8}
        />
        <text
          transform="translate(323.737 451.234)"
          className="st21">
          <tspan
            x={0}
            y={0}
            className="st11 st9 st20">
            {"Bomba"}
          </tspan>
          <tspan
            x={-14.1}
            y={12}
            className="st11 st9 st20">
            {"Alimentaci\xF3n"}
          </tspan>
        </text>
      </g>

      {/* Fin Bomba Alimentación */}

      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={157}
        height={140}
        xlinkHref="data:image/png;base64,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 5Bs9+X/JkAAAAABJRU5ErkJggg=="
        transform="translate(732.51 254.9)"
      />
      <path
        className="st2"
        d="M791.6 263.9h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V270.2c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Presión entrada Alimentación Ag Plus  */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() =>
          loadGrafico(2, "P. Entrada Alimentación Ag Plus", false)
        }>
        <path
          className={getTarjetaClass(2, selected)}
          d="M742.3 271.3h138.1v99.8H742.3z"
        />
        <text
          transform="translate(766.581 310.894)"
          className="st21">
          <tspan
            x={0}
            y={0}
            className="st16 st9 st23">
            {"Presi\xF3n entrada"}
          </tspan>
          <tspan
            x={-15.5}
            y={15.6}
            className="st16 st9 st23">
            {"Alimentaci\xF3n Ag Plus"}
          </tspan>
        </text>

        <text
          transform="translate(793.124 356.213)"
          className="st11 st9 st13">
          {getScaledValue(datosScada.d2, 1)}
        </text>
        <text
          transform="translate(832.25 355.817)"
          className="st11 st24 st25">
          {"Bar"}
        </text>
        <text
          transform="translate(794.437 291.254)"
          className="st11 st9 st20">
          {"PT-006"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(2, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(2, "P. EntradaAlimentación Ag Plus");
        }}>
        <path d="M767.2 342.1c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M765.5 341.1c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM776.8 339.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M777.4 338c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM778.3 347.1v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM773.3 354.6c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presión entrada Alimentación Ag Plus */}

      <path
        className="st27"
        d="M583.1 409.1v17"
      />
      <path
        className="st28"
        d="M587.9 414.3c0 .9-.7 1.6-1.6 1.6H580c-.9 0-1.6-.7-1.6-1.6 0-.4.2-.8.5-1.1l3.1-3.1c.6-.6 1.5-.6 2.2-.1l3.2 3.2c.3.3.5.7.5 1.1z"
      />
      <path
        className="st2"
        d="M579.3 414.3c0-.2.1-.3.2-.4l3.1-3.1c.2-.2.6-.2.9 0l3.1 3.1c.1.1.2.3.2.4 0 .3-.2.6-.6.6h-6.3c-.3 0-.6-.3-.6-.6m-2 0c0 1.4 1.2 2.6 2.6 2.6h6.3c1.4 0 2.6-1.2 2.6-2.6 0-.7-.3-1.3-.8-1.8l-3.1-3.1-.1-.1-.1-.1c-1.1-.9-2.6-.8-3.5.2l-3.1 3.1c-.5.5-.8 1.1-.8 1.8z"
      />
      <text
        transform="translate(539.784 514.775)"
        className="st11 st9 st20">
        {"Hipoclorito"}
      </text>
      <path
        className="st17"
        d="M586.1 435.1h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
      />
      <path
        className="st18"
        d="M575.6 444.1h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
      />
      <path
        className="st29"
        d="M545.6 455.8h38.8v40h-38.8z"
      />
      <path
        className="st17"
        d="M584.4 449.1v45.2c0 .7-.4 1.3-.8 1.3h-37.1c-.5 0-.8-.6-.8-1.3v-45.2"
      />
      <path
        className="st30"
        d="M172.1 736.8h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM156.9 740.7l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st30"
        d="m172.5 751.3-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st31"
        d="M164.7 735.8v10"
      />
      <path
        className="st32"
        d="M155.7 727.8h18M164.7 728.8v8"
      />
      <path
        className="st0"
        d="M151.4 746.6h-13.3c-2.8 0-5-2.3-5-5V569.7c0-5.5 4.5-10 10-10h757.5c5.7 0 10.3-4.6 10.3-10.3l-1.4-136.3c-.1-5.9-4.9-10.7-10.8-10.6l-93.7.3h-85.5M178 746.1h35.9"
      />
      <path
        className="st30"
        d="M242.3 843.5h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM227.1 847.4l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7V848c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st30"
        d="m242.7 858-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st31"
        d="M234.9 842.5v10"
      />
      <path
        className="st32"
        d="M225.9 834.5h18M234.9 835.5v8"
      />
      <path
        className="st30"
        d="M252.5 733.3c0-6.7-7.8-12.1-17.5-12.1s-17.5 5.5-17.5 12.1h.1c-.1.3-.1.7-.1 1.1V772c0 3.5 3.4 6.4 7.6 6.8v6.2h5.2v-6.1h9v6.1h5.2v-6.2c4.5-.2 8-3.2 8-6.8v-37.6c0-.3-.1-.7-.1-1.1h.1z"
      />
      <path
        className="st0"
        d="M256.3 746.6h42.3c2.8 0 5-2.3 5-5v-99.4M222.3 852.2H201c-2.8 0-5-2.3-5-5V746.8"
      />
      <path
        className="st27"
        d="M257.4 770.6h19.3v12.6"
      />
      <g className="st33">
        <path
          className="st28"
          d="M274.8 786.3h3.7v11h-3.7z"
        />
        <path
          className="st28"
          d="M283.7 780.2c.7.7.7 2 0 2.8l-5.6 5.6c-.7.7-2 .7-2.8 0l-5.6-5.6c-.7-.7-.7-2 0-2.8"
        />
      </g>
      <text
        transform="translate(221.213 800.747)"
        className="st21">
        <tspan
          x={0}
          y={0}
          className="st11 st9 st34">
          {"F-002"}
        </tspan>
        <tspan
          x={-2.8}
          y={11}
          className="st11 st9 st34">
          {"AgPlus"}
        </tspan>
      </text>
      <text
        transform="translate(217.275 875.447)"
        className="st11 st9 st20">
        {"VX-011"}
      </text>
      <text
        transform="translate(145.405 766.91)"
        className="st11 st9 st20">
        {"VX-001"}
      </text>
      <circle
        className="st26"
        cx={279}
        cy={746.1}
        r={9.2}
      />
      <path
        className="st30"
        d="M385 734h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6H385c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM369.8 737.9l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st30"
        d="m385.4 748.5-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st31"
        d="M377.6 733v10"
      />
      <path
        className="st32"
        d="M368.6 725h18M377.6 726v8"
      />
      <path
        className="st0"
        d="M364.3 743.8H351c-2.8 0-5-2.3-5-5v-46.4M390.9 743.2h35.9"
      />
      <path
        className="st30"
        d="M455.2 840.6h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6V839c0 .9-.7 1.6-1.6 1.6zM440 844.5l7.9 4.6c.5.3.5 1 0 1.3L440 855c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st30"
        d="m455.6 855.1-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st31"
        d="M447.8 839.6v10"
      />
      <path
        className="st32"
        d="M438.8 831.6h18M447.8 832.6v8"
      />
      <path
        className="st30"
        d="M465.4 733.3c0-6.7-7.8-12.1-17.5-12.1s-17.5 5.5-17.5 12.1h.1c-.1.3-.1.7-.1 1.1V772c0 3.5 3.4 6.4 7.6 6.8v6.2h5.2v-6.1h9v6.1h5.2v-6.2c4.5-.2 8-3.2 8-6.8v-37.6c0-.3-.1-.7-.1-1.1h.1z"
      />
      <path
        className="st0"
        d="M469.3 743.8h42.3c2.8 0 5-2.3 5-5v-95.4M435.2 849.4h-21.3c-2.8 0-5-2.3-5-5V744"
      />
      <path
        className="st27"
        d="M470.3 767.8h19.3v12.5"
      />
      <g className="st33">
        <path
          className="st28"
          d="M487.7 783.4h3.7v11h-3.7z"
        />
        <path
          className="st28"
          d="M496.6 777.4c.7.7.7 2 0 2.8l-5.6 5.6c-.7.7-2 .7-2.8 0l-5.6-5.6c-.7-.7-.7-2 0-2.8"
        />
      </g>
      <text
        transform="translate(430.18 872.583)"
        className="st11 st9 st20">
        {"VX-012"}
      </text>
      <text
        transform="translate(358.31 764.045)"
        className="st11 st9 st20">
        {"VX-002"}
      </text>
      <circle
        className="st26"
        cx={491.9}
        cy={743.2}
        r={9.2}
      />
      <path
        className="st30"
        d="M600.7 732.9h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM585.5 736.8l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st30"
        d="m601.1 747.4-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st31"
        d="M593.3 731.9v10"
      />
      <path
        className="st32"
        d="M584.3 723.9h18M593.3 724.9v8"
      />
      <path
        className="st0"
        d="M579.9 742.7h-13.3c-2.8 0-5-2.3-5-5v-46.4M606.5 742.2h35.9"
      />
      <path
        className="st30"
        d="M670.9 839.5h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM655.7 843.4l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7V844c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st30"
        d="m671.3 854-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st31"
        d="M663.5 838.5v10"
      />
      <path
        className="st32"
        d="M654.5 830.5h18M663.5 831.5v8"
      />
      <path
        className="st30"
        d="M681.1 733.3c0-6.7-7.8-12.1-17.5-12.1s-17.5 5.5-17.5 12.1h.1c-.1.3-.1.7-.1 1.1V772c0 3.5 3.4 6.4 7.6 6.8v6.2h5.2v-6.1h9v6.1h5.2v-6.2c4.5-.2 8-3.2 8-6.8v-37.6c0-.3-.1-.7-.1-1.1h.1z"
      />
      <path
        className="st0"
        d="M684.9 742.7h42.3c2.8 0 5-2.3 5-5v-95.4M650.8 848.3h-21.3c-2.8 0-5-2.3-5-5V742.9"
      />
      <path
        className="st27"
        d="M685.9 766.7h19.4v12.6"
      />
      <g className="st33">
        <path
          className="st28"
          d="M703.3 782.3h3.7v11h-3.7z"
        />
        <path
          className="st28"
          d="M712.3 776.3c.7.7.7 2 0 2.8l-5.6 5.6c-.7.7-2 .7-2.8 0l-5.6-5.6c-.7-.7-.7-2 0-2.8"
        />
      </g>
      <text
        transform="translate(645.816 871.52)"
        className="st11 st9 st20">
        {"VX-013"}
      </text>
      <text
        transform="translate(573.947 762.983)"
        className="st11 st9 st20">
        {"VX-003"}
      </text>
      <circle
        className="st26"
        cx={707.6}
        cy={742.2}
        r={9.2}
      />
      <path
        className="st30"
        d="M817.7 733.6h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6V732c0 .9-.7 1.6-1.6 1.6zM802.5 737.5l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st30"
        d="m818.1 748.1-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st31"
        d="M810.3 732.6v10"
      />
      <path
        className="st32"
        d="M801.3 724.6h18M810.3 725.6v8"
      />
      <path
        className="st0"
        d="M797 743.4h-13.3c-2.8 0-5-2.3-5-5V692M823.5 742.8h35.9"
      />
      <path
        className="st30"
        d="M887.9 840.2h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM872.7 844.1l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st30"
        d="m888.3 854.7-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st31"
        d="M880.5 839.2v10"
      />
      <path
        className="st32"
        d="M871.5 831.2h18M880.5 832.2v8"
      />
      <path
        className="st30"
        d="M898.1 733.3c0-6.7-7.8-12.1-17.5-12.1s-17.5 5.5-17.5 12.1h.1c-.1.3-.1.7-.1 1.1V772c0 3.5 3.4 6.4 7.6 6.8v6.2h5.2v-6.1h9v6.1h5.2v-6.2c4.5-.2 8-3.2 8-6.8v-37.6c0-.3-.1-.7-.1-1.1h.1z"
      />
      <path
        className="st0"
        d="M901.9 743.4h42.3c2.8 0 5-2.3 5-5V643M867.8 849h-21.3c-2.8 0-5-2.3-5-5V743.6"
      />
      <path
        className="st27"
        d="M903 767.4h19.3v12.5"
      />
      <g className="st33">
        <path
          className="st28"
          d="M920.4 783h3.7v11h-3.7z"
        />
        <path
          className="st28"
          d="M929.3 777c.7.7.7 2 0 2.8l-5.6 5.6c-.7.7-2 .7-2.8 0l-5.6-5.6c-.7-.7-.7-2 0-2.8"
        />
      </g>
      <text
        transform="translate(862.827 872.188)"
        className="st11 st9 st20">
        {"VX-014"}
      </text>
      <text
        transform="translate(790.958 763.65)"
        className="st11 st9 st20">
        {"VX-004"}
      </text>
      <circle
        className="st26"
        cx={924.6}
        cy={742.8}
        r={9.2}
      />
      <path
        className="st30"
        d="M1033.3 732.5h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM1018.1 736.4l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7V737c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st30"
        d="m1033.7 747-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st31"
        d="M1025.9 731.5v10"
      />
      <path
        className="st32"
        d="M1016.9 723.5h18M1025.9 724.5v8"
      />
      <path
        className="st0"
        d="M1012.6 742.3h-13.3c-2.8 0-5-2.3-5-5v-46.4l-860.8.3M1039.2 741.8h35.9"
      />
      <path
        className="st30"
        d="M1103.5 839.1h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM1088.3 843l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st30"
        d="m1103.9 853.6-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st31"
        d="M1096.1 838.1v10"
      />
      <path
        className="st32"
        d="M1087.1 830.1h18M1096.1 831.1v8"
      />
      <path
        className="st30"
        d="M1113.7 733.3c0-6.7-7.8-12.1-17.5-12.1s-17.5 5.5-17.5 12.1h.1c-.1.3-.1.7-.1 1.1V772c0 3.5 3.4 6.4 7.6 6.8v6.2h5.2v-6.1h9v6.1h5.2v-6.2c4.5-.2 8-3.2 8-6.8v-37.6c0-.3-.1-.7-.1-1.1h.1z"
      />
      <path
        className="st0"
        d="M1117.5 742.3h42.3c2.8 0 5-2.3 5-5v-94.4M1083.5 847.9h-21.3c-2.8 0-5-2.3-5-5V742.5"
      />
      <path
        className="st27"
        d="M1118.6 766.3h19.3v12.6"
      />
      <g className="st33">
        <path
          className="st28"
          d="M1136 781.9h3.7v11h-3.7z"
        />
        <path
          className="st28"
          d="M1144.9 775.9c.7.7.7 2 0 2.8l-5.6 5.6c-.7.7-2 .7-2.8 0l-5.6-5.6c-.7-.7-.7-2 0-2.8"
        />
      </g>
      <text
        transform="translate(1078.464 871.125)"
        className="st11 st9 st20">
        {"VX-015"}
      </text>
      <text
        transform="translate(1006.595 762.588)"
        className="st11 st9 st20">
        {"VX-005"}
      </text>
      <circle
        className="st26"
        cx={1140.2}
        cy={741.8}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={157}
        height={140}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAACNCAYAAABGx8NOAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABu9JREFUeNrsm4lym1gQRdkky7Kd feb/PzCJ41U7DEz1m1y3Hwh5lFSAc6q6hJYgg456eShJAgAwFdIz/duUUzkpqpbtXyJeKq9HOsRr 267OJV4qkcljGdJNXr5j0UrRQ8rMRS63aSQbwrSEO9RRym2IzlJcHMlyQbZCYma3uTxP6Z1WeVXB 9nXs7DZEkLBqk684Il1uojWxqOPCYi4CZh39H4yzpwsZrpFsW8fGxc6eP7wl4+UiXBNXFkuRcOYy H4xfQM10jXTrOlZ1PFnk9tjG9XpVl3ia6QqT67KOmzre1fHetq/t8bnLemS88We9kO12Jlcj24PF TBJQKeKVfcTz2a6R7EMdnyw+moRLl/UYMKYzVGi2a4T7Ya7kTs5SpEtVvqKjt5tLtmvE+1LH33V8 tvvX9mazliEDxilekKoR77mOe0tCM3tdyIY7GTrKLvFi/d2lZLzPJt5flvVunHhkvOn0eAcrs89O up30fCvbzu31Sd8eb26l9MpK60eT74uV3GvEm7R4IeOpdM39Ryu/oQ3bxLzwpTZJfq7bzWS4uHYD xnsRr0heXtGA8ZfbIJ6X7sYS1UIGT+3//yu3bcOFltsL29EyEhe2Dyba6Uy1oY8rRLrgQ1hm86sd rRkvjQwYesViZjubJy8XkJlopylg+Ky9E3phIe8jns9WKl+e/FzXK+R+zjQ7SVIRMHfhL6VmkaRW dU21aST7+W0fML2Ml0Ykiwn3iqyn3YgGSY8k1bvXz058g6SlNMN0S25MwqOOZD2zHcD/FfNNGQ/g rCAeIB4gHgDiAeIBIB4gHgDiAeIBIB4gHiAeAOIB4gEgHiAeAOIB4gEgHiAeAOIB4gHiASAeIB4A 4gHiASAeIB4A4gHiASAeIB4gHgDiAeIBIB4gHgDiAeIBIB4gHgDiAeIB4gEgHiAeAOIB4gEgHiAe AOIB4gEgHiAeIB4A4gHiASAeIB4A4gHiASAeIB4A4gHiAeIBIB4gHgDiAeIBIB4gHgDiAeIBIB4g HiAeAOIB4gEgHiAeAOIB4gEgHiAeAOIB4gHiASAeIB7ALxevcrcAp1B1uZOduBMfgFjeh15eZD12 nhzZMQJOU7rYY2VfJ7KWnanFpcQh8jjZb3rCtfnhI+bVvxQdKTSItpc4uO3S5G1uU4uxkJ45I4yt vAY/DhE/SnlNtFIW8mDaIt2ujm0dG4nm/ryOXDJnNjLh2m6PiVb1aa4HLp53Q2Nnse+qiEVHtgs7 bkRb1fFcx5PFhUnXvHZm+0l7fkhDEC9E1uO4KtfjjG0IqyJ93N4kC14823YTa3tOq2KneOFJzXYb 2+ljHfd13NWxkH+3l8yXDVg8/bsziVxuUxdVJAtoLxzrgauByxfECwnpybwI8Wi+rO01h7ZyW7RM Jmp02PkPka6yHa8s+xWu3KYDli63CJk8RC6thT9fvhfeuX6nHIl4eqxrE63x4lsd3y0xPZoXGzsP 0XJbdNTwrdv53D6Yyp5rzF6aeDPJDkMUT6Ur7FjndmwXtj2zY8/d+drLF1V74G1Lr1ONQDx1487E +1rHbR0P5sZGyu1R8XTnIaMVktFCpmt2fGPiLSQjZAOcbsPfG6Sb2TFd2vFd2fZCMlwWKTsrqRAr 961v7XUGWGZDRl9LNby1jBeynop3co8Xdp7LiQ4p9sE+EM142QjEC1muEe3avlwbu92bfHPJ7OF8 rOzb/yDxFGm0h1xqtY/dtvT/d5Lxtu4LdzTjJWK2NtIHKbH3kgXmLuOdYx3sd4uXiXgL+1I1sn0Q ebb2+EIm+p2c/DtrSW47ep1yBBPtQVqLtVvteJIv3K5vxvNvFORLIgPHo/Q+WoqHuIjsxQvZ7p1M aNq3XcqAFSa7Oyk1303Aeyk5u2TYV3l8NTy49d21nKfNW9bx/Jt400P5nUnkrswOMeOlrr9rMtt7 WZfaSGm5EvF0+PpqTfY3u68lZ6iltu0yqsqnC8k62ZddfW3Rw/AqssxSOOGGmu18jzezTL502W4j zfQyIt6tSKfLCtrjjWFB2V+jP7jQ6/mdw1TRc5oJO0rFdC/cUK9WhL87l3K7cuV1Lb3t0gQt7TUP JtqtSHcfmWrHchXDR5m84YpNcWKqTZOXPwgYyyWyRLLe1pWNnZTZO+nxwnT3ZPLdS6bTifYwggXk toSUJK+vzPQ6xuLEN/P305YPcajEyoaKd5m8vE6t61khnvtMdQOXri0x9aY40xunI/lGV64/8dO8 rlkmbllh7ZZeDsk4f694lmMp/qQ/5g/BD1R+mtcF9TIy1e1GLN3Z+xt4PeUmyctfp+TJ61/hlG5t 6+AGCaRDvDcPHPq7PL9s5MvySf/vgBMMfQX056xtgRUQ77edJ4QDAIAI/wgwAAUGLdmyuaEgAAAA AElFTkSuQmCC"
        transform="translate(199.754 590.54)"
      />
      <path
        className="st2"
        d="M258.6 599.8h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V606.1c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Presión Salida F-002 / AgPlus */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(3, "Presión Salida F-002", false)}>
        <path
          className={getTarjetaClass(3, selected)}
          d="M209.3 607.2h138.1V707H209.3z"
        />
        <text
          transform="translate(237.542 646.82)"
          className="st21">
          <tspan
            x={0}
            y={0}
            className="st16 st9 st23">
            {"Presi\xF3n Salida"}
          </tspan>
          <tspan
            x={-1.1}
            y={15.6}
            className="st16 st9 st23">
            {"F-002 / AgPlus"}
          </tspan>
        </text>

        <text
          transform="translate(260.108 692.138)"
          className="st11 st9 st13">
          {getScaledValue(datosScada.d3, 1)}
        </text>
        <text
          transform="translate(299.233 691.743)"
          className="st11 st24 st25">
          {"Bar"}
        </text>
        <text
          transform="translate(261.42 627.179)"
          className="st11 st9 st20">
          {"PT-009"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(3, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(3, "Presión Salida F-002");
        }}>
        <path d="M234.2 678c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M232.5 677c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM243.8 675.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M244.4 673.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM245.3 683v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM240.3 690.5c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presión SalidaF-002 / AgPlus*/}

      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={158}
        height={140}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAACNCAYAAACpBahwAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB1pJREFUeNrsmglzm0gQRodDkhXL cbKb3f3/v2+P2I6sAyRYVNVT+TweDqVUlQDvVXWBZAksePR0DzgHADA3kht+N+Fwzoa65/XN5Utk iXjIF3tdXyNjfqV0qciXtIgI8xKwtqhkfVBGzAeI56XTyGQdCecpnhfOxzl43ZsF84Hi5SbcZbmw ZR5IyDA8n6G2DqQ7NVHa8mTveRlbBcx7xFPhlhZ3TazsPS9iEgiIfNMWrw6kKyyOFoV8vlXAvCfj ZSbYRbh1E/dNfLDwEmoGRLr5DLdnEe7QxE7Cu1CIgIPkc4F4K5Pto8VjExsT8c6yYS6ZDwGnL5/P ehe59k1sLZ7Nm0Q+6yMJBcxbsp4fcpcm3kMTn5r4vYnfbH1jf1uJfCnnZ/Ly+VqvtKz32sRLE0/m SybZThuRXvlc0GRo1rtI92cTf9j6o2U/lY+ud/pZzwvoh9ytibc28WqpBUtpQN5lv7yj0VhE5LuI 91cTXyz7hfIx7M5r2D2YfGtzoDbhDjYcH0zS0r7TWvPpZHJMvs8m4BeT0MtHzTfPhsNLpuIV1nD4 GnBnn8kk+3VmPl+7qXwbE/CTxKP9bSnTLcg3jymXyjLfnXnixfP13ybSjCZ93a5Osfiaz0+xbCTu Lda28wz5ZiOek7rONxelZbmNeLESN8I7YXXbsKvy+ezn5/l8eKuXNBuzHXr9uT6JI37ud5AbscwX 1n3LlvBWZ4g3K5Jg+PVJaiG++DtfmWQ+1ydfOPRmIqHeTtOHDHiwYH6ZL/bASRYRrtOPNJLx9NEp lTCPbNRR580y84XLtCVC8d5ImLZsNGZ20rJRxAPn4s95drqRDjQcyaBPOnetL+mADSMi9PnRVX4l PyrftTsCGOzI0GEX4ObwCBQgHyAfAPIB8gEgHyAfAPIB8gEgHyAfAPIB8gEgHyAfAPIB8gHyASAf IB8A8gHyASAfIB8A8gHyASAfIB8A8gHyASAfIB8A8gHyAfIBIB8gHwDyAfIBIB8gHwDyAfIBIB8g HwDyAfIBIB8gHyAfAPIB8gEgHyAfAPIB8gEgHyAfAPIB8gEgHyAfAPIB8gEgHyAfIB8A8gHyASAf IB8A8gHyASAfIB8A8gHyASAfIB8A8gHyAfIBIB8gHwDyAfIBIB/MSL46WAL8lMxXBxLWSAk/4M1V 8tXXbAxmK1cduDHIkbRFNN1YZdG2A2QE9aYa6kXaY3MlcbYIZYT5iqbChb5ULSLWoXx1IJ7Kdmqi tOVZljUSzn6obUtO50DI6CiZd2xcxSuaONrSi3iJTAROLKZCcqPMMFX5VLhSopD1U1eCygds9Ghx aGJvy8vrlYmXmIRTkS/pWQ6RrZ5wg+YdOQV+7AM/VL6qT75QwFKke21iK7GW71a2nl5xon51+XyE v6ntAovVP7EucOz1nROZTubGTvx4tdhHBHw39OYDrN7Zhl+aeG7iQxNLOwlny4C5ZL8xyqf/d9oR KmUsw52DGijWnNUjF7CSUfEi2bcmnsyNZ3vtBSy6ht68I62WkvUu4n21jLewE3AyOe9EvnSE8sXE y+w3aWTyGyv5npYqJ4lS3quumYIYSa3nh9qLG/818Y8tn0zAnX1GG9S6q+ZzQbNxNPmeTTLNeAfL iP79scvnxcvtAltarGQ9lxLDBZngJI2Zb86KlsK7Hrl8JxkVv4l8f1uSerG/FZFhtzPzVUHNt7OT sRDxjibexuRbiHzJCOVLgoy3st+1tjJjbbGSGjeRC9V3eb7ofpX1o2TBasTihfWeyvcsAn619/aS +QYPu052UNgOUhGvkGx4bydkKvL5rHdn0l0urgeLwt7zF1tqB1NPhC9RvkkBfpAMcB75sFsFbuzl Nz9LbO13d150eYfhiX05Ca5yn/XuZchdBMPumIbeUL6VZbnL7/vYxKMd5EeZv1qJfP4kbO3AP0kB vg2yn9Z+Y+x060C+owioHe++r97rajicfSm2U9+EqHj5SLOeyueH3KXJ92DybYP5q400WVVQF3+1 4SdWeJdu3HeEYt2uTscd5Bgdh2T6vGeHXrg6km4XQQGeBuKNbej13ezS5NpYttuJfHsT8oN9tpLG 68mk+zci35iH3bqj4z25t3c3ypbJ5foa+fTD52CHpZyoLDIHNkZ0Lm9hw+pWxNvLhKqfZG+Tz8eL 1D6FXMRjn3Ruu6d7cu/v69Y/mvnCWW0VMIlIN1bxkpbsFw4jXrIH9/0Oj9bAWu89iby9tc9Ip1za HrlrfZDg2mE3TLmJNCOJm87ttLD20zm6MpDPN1qZ1Hx6F+glEK+QbODcNO71xp7pvPouTn7lzsLX ScuJHLOIZ/f28SC91fhqWW/pvt/pKN3be5w7131vcyritSWoweQ32nEyoau6itQ0Oue5lHm+cNrh EGTNs5vmM483+S35r/TP/GIC1pFG6+DePkShtyK18ztPWLyb1zvw/rgk7v3DBmF3X7v3T7EM7vY4 yDC0EUnd28epkkiWvKrb4wDDtRL2TUEgHfL9lGOFdAAA0MH/AgwAc3dPBiQsWAQAAAAASUVORK5C YII="
        transform="translate(412.754 590.54)"
      />
      <path
        className="st2"
        d="M472.1 599.8H429c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V606.1c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Presión Salida F-003 / AgPlus */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(4, "Presión Salida F-003", false)}>
        <path
          className={getTarjetaClass(4, selected)}
          d="M422.8 607.2h138.1V707H422.8z"
        />
        <text
          transform="translate(449.988 646.82)"
          className="st21">
          <tspan
            x={0}
            y={0}
            className="st16 st9 st23">
            {"Presi\xF3n Salida"}
          </tspan>
          <tspan
            x={-1.1}
            y={15.6}
            className="st16 st9 st23">
            {"F-003 / AgPlus"}
          </tspan>
        </text>

        <text
          transform="translate(473.654 692.138)"
          className="st11 st9 st13">
          {getScaledValue(datosScada.d4, 1)}
        </text>
        <text
          transform="translate(512.78 691.743)"
          className="st11 st24 st25">
          {"Bar"}
        </text>
        <text
          transform="translate(474.967 627.179)"
          className="st11 st9 st20">
          {"PT-011"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(4, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(4, "Presión Salida F-003");
        }}>
        <path d="M447.7 678c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M446 677c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM457.3 675.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M457.9 673.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM458.8 683v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM453.8 690.5c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presión Salida F-003 / AgPlus */}

      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={157}
        height={140}
        xlinkHref="data:image/png;base64,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"
        transform="translate(629.557 589.245)"
      />
      <path
        className="st2"
        d="M688.8 598.8h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V605.1c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Presión Salida F-004 / AgPlus */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(5, "Presión Salida F-004", false)}>
        <path
          className={getTarjetaClass(5, selected)}
          d="M639.5 606.2h138.1V706H639.5z"
        />
        <text
          transform="translate(664.634 646.82)"
          className="st21">
          <tspan
            x={0}
            y={0}
            className="st16 st9 st23">
            {"Presi\xF3n Salida"}
          </tspan>
          <tspan
            x={-1.1}
            y={15.6}
            className="st16 st9 st23">
            {"F-004 / AgPlus"}
          </tspan>
        </text>

        <text
          transform="translate(690.291 691.076)"
          className="st11 st9 st13">
          {getScaledValue(datosScada.d5, 1)}
        </text>
        <text
          transform="translate(729.417 690.68)"
          className="st11 st24 st25">
          {" Bar"}
        </text>
        <text
          transform="translate(691.604 626.117)"
          className="st11 st9 st20">
          {"PT-013"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(5, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(5, "Presión Salida F-004");
        }}>
        <path d="M664.4 677c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M662.7 676c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM674 674.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M674.6 672.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM675.5 682v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM670.5 689.5c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin  Presión Salida F-004 / AgPlus */}

      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={158}
        height={140}
        xlinkHref="data:image/png;base64,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 JwQu2AAAAABJRU5ErkJggg=="
        transform="translate(844.374 589.848)"
      />
      <path
        className="st2"
        d="M903.8 599.5h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V605.8c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Presión Salida F-005 / AgPlus */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(6, "Presión Salida F-005 ", false)}>
        <path
          className={getTarjetaClass(6, selected)}
          d="M854.5 606.9h138.1v99.8H854.5z"
        />
        <text
          transform="translate(881.423 646.82)"
          className="st21">
          <tspan
            x={0}
            y={0}
            className="st16 st9 st23">
            {"Presi\xF3n Salida"}
          </tspan>
          <tspan
            x={-1.1}
            y={15.6}
            className="st16 st9 st23">
            {"F-005 / AgPlus"}
          </tspan>
        </text>

        <text
          transform="translate(905.302 691.743)"
          className="st11 st9 st13">
          {getScaledValue(datosScada.d6, 1)}
        </text>
        <text
          transform="translate(944.428 691.347)"
          className="st11 st24 st25">
          {"Bar"}
        </text>
        <text
          transform="translate(906.615 626.784)"
          className="st11 st9 st20">
          {"PT-015"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(6, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(6, "Presión Salida F-005");
        }}>
        <path d="M879.4 677.7c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M877.7 676.7c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM889 675.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M889.6 673.6c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM890.5 682.7v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM885.5 690.2c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presión Salida F-005 / AgPlus */}

      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={157}
        height={140}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAACNCAYAAABGx8NOAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABrJJREFUeNrsmglzm1YURtlkybKd OJ0u///3tXGzyNpAUNS5b/rlzgOk2k4CnDNzR7Zsg4HDXR5KEgCAuZD+ZNuB8dB8T2HSnr9FvvlK 11wrZHGlcGkkkG7e8jUuLhKwuFC6TF41YhLCPKQLUbsI7/UKOCSeSpZLFBa5E5DSO5/SepbrZFG5 11QkjMpXXCBdkO3GxUIEjMmHeNMUz0tXWhwlSvtZLdmvuUQ8lW5hoq3auJVYOQEpufMpsSG7nQU7 tLFvYyeRmYBVpPfrFC+Vfq4wudZt3LXxILE2ARcWGRlvFhmvlkx3MNGe29i08VUqoP9bLb2d4ql0 Z7nu23hs44PFe5EvZL2cjDcLAU9OvLN0X9r4ZC7kriQH4dI+8TTb5ZLt3rXxSxu/tfGrff3esuDS ZTzkm3aZDRnvaCX2nOU+W+tVuKxYiaipylcMlNllRLw/TL5HE28VKbWIN91yq+LtTLy1uFTZzw4W R3OjvqTHy0wmFe+DCfe7iHcvGY9sN6/hImS80G4lVn5Dz/csg2fZN1z4Mqs93p3Jp33eo5TaIuFJ xlwynk61e3FI+721JKTcJaVmKOPlLuvdWYa7t8Hi3t7T5RQm2nlMtqFvy+39UnzQpbYw4foVj851 vNRlvRsTcCUbXkUmWpgHuYkXpAs+LCXTdT3Z+jfr9WW8MGAUyX9rdRphw3nMaJg0qQhYOE9ij1P1 75quHi9xNdk/OsuS7g8LwLzkywZ86Bw4sws2nnZsECDpkGzQkewFGwZIOzwZJHuFHQF0eZL+H/EQ C96MjFMAiAeIB4B4gHgAiAeIB4B4gHgAiAeIB4gHgHiAeACIB4gHgHiAeACIB4gHgHiAeIB4AIgH iAeAeIB4AIgHiAeAeIB4AIgHiAeIB4B4gHgAiAeIB4B4gHgAiAeIB4B4gHiAeACIB4gHgHiAeACI B4gHgHiAeACIB4gHiAeAeIB4AIgHiAeAeIB4AIgHiAeAeIB4gHgAiAeIB4B4gHgAiAeIB4B4gHgA iAeIB4gHgHiAeACIB4gHgHiAeACIB4gHiMcpAMQDxANAPEA8gLcWr7EA+OEZr0FMuMKT5iXiNR0B 0HR48uKMFzZUWyAeXJqYeh0pOkpnE5HuZFFHYqpDSvqKGWGKstUdMShh0bHRsIHKooxEZSJmr3SR xiBceqVozUQF1ERUOU8qcaOOlONO8cIvhI0eLQ5t7NvY2euyjdx+t3AXJZ2AeLFoOo6tibxOrSfW YwjSHcSLvXxfRuT75hz1ZbyTbeC8oW0bz21sLFYi3VLES0cuXjiGLBJpx83VuPPWDJSeKUyqISnt xYmNORIS09F+p45kvmiPV7tst7MNfmnjUxu3Il1p4i1cZhhraQ2S5RaFRfha2wqf3U4uqkhfPPbS q8d6NMG+tvG3ufHZvt9K5jvFbry+jKfZ7izdWsprbTt+tuy3kKwwxoyXOunO5+XGRS0SaultXK8T WpNSXqsJZL7G9XchKQXx/mzjyeTbmJR67L3DhWa9yol3I5kuSHcnGS8bcdZLRbqFHevKsnuIlb2v x6rSHSJ98F5EjPU7Y51kfcY7y/axjb9Mwo2dAz3ui8ULG9/aBcmkvG5tZ2u5GPmIS23IdoVIdz62 e4sHk+vWzkvoaWtpskNL8iz9zlbkK7v6nZHJd3L9v7ZhoeR+deJdVWqryESnDeXaLsQiUmrHVm6D eCHbBenetfHoSuat9LS13JzhAmhsXL8zVvGayFJK6W64jQkXbrq99LlN33DRVW5T2aGKp6WnGPlw oeItTbwg3c5OcCiZob1I7aTu3V3/ZHf+F9doHyeS8bS9KF17sXPn66Kp1i8Q+u9937eQqa9vuWGs Ge9BepW9nOB7u+kyOx+hwQ7SPUmTHcQ7Ria8sWa8xi0glzJIHd2xdt5kRc/O6ojpQTxdZsg6Mt2Y xEtdj3fr1qQOUla8eFvJdh9dxttE1rTGLl5Mvsq9Dq5fFgM7rCMDR2ZG+yl2zE8r/FS7dQuhup4Z xEsl48XKbF9/N/YnGbFn+Xp8g2uWxYU7qUXEmGxTeUQW5NPHPrqQvnE9nva8ny28dEd3YZJkWo/Q uh4PXvzplGtqfDLy0jrU6/knECqeTrUnWVLQZZSdk3cqma6v9CbX3FTFC3bYOOmmchf7CNNbyGxL t453lP5PJ7qpSneVYK8l3pv8Ez+xeNpAH2Waz5JvF5BLN9FVEy2vr9rbwHDPl8sU75/V+rJcT2yQ QLwfJJ//mJSf4Juk/9O3gHgvFjDpEC824QHivcm5SgemOwAAgJZ/BBgAK7YZbdCUAo8AAAAASUVO RK5CYII="
        transform="translate(1061.373 588.848)"
      />
      <path
        className="st2"
        d="M1120.4 598.4h-43.1c-3.5 0-6.3 2.8-6.3 6.3V707c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V604.7c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Presión Salida F-006 / AgPlus */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(7, "Presión Salida F-006", false)}>
        <path
          className={getTarjetaClass(7, selected)}
          d="M1071.1 605.8h138.1v99.8h-138.1z"
        />
        <text
          transform="translate(1096.07 646.82)"
          className="st21">
          <tspan
            x={0}
            y={0}
            className="st16 st9 st23">
            {"Presi\xF3n Salida"}
          </tspan>
          <tspan
            x={-1.1}
            y={15.6}
            className="st16 st9 st23">
            {"F-006 / AgPlus"}
          </tspan>
        </text>

        <text
          transform="translate(1121.94 690.68)"
          className="st11 st9 st13">
          {getScaledValue(datosScada.d7, 1)}
        </text>
        <text
          transform="translate(1161.065 690.285)"
          className="st11 st24 st25">
          {" Bar"}
        </text>
        <text
          transform="translate(1123.252 625.721)"
          className="st11 st9 st20">
          {"PT-017"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(7, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(7, "Presión Salida F-006");
        }}>
        <path d="M1096 676.6c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M1094.3 675.6c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM1105.6 674.3c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M1106.2 672.5c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM1107.1 681.6v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1102.1 689.1c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presión Salida F-006 / AgPlus */}

      <circle
        className="st26"
        cx={1300}
        cy={641.6}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={158}
        height={140}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAACMCAYAAACNmxDrAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABx1JREFUeNrsmwtz2kYURrVCgA2J k6Zp+///X9LEAfMGVXTuTr/e7Aphu00kzpm5Iz/w2oij+1jkogD4AYSfbB3oB/X/LUxo+Vnku03p 6ucIWV0pXEgE0t2ufLWLzgJWVwhXylHDSwjDly7GyUX82kUBqwvSBZFtZFG5owpI6b2N0hpFOzZx cMejSJiVr7ogXZTq/LhxExOJsUUUMlzoAaH/4sVMFwXbW+wk9ibhSbJffW3Gi5ltanEvcScCVq7s wnBL7MnEisJtmlhbbCy29pgiJ1+VEa500s2amDfxtok3FnMnX8yOZLzhZryYxVS6VRPLJhZ2jAlo kxk8kuL5nm5i2e0s2nuLX5p4ZxLOTEzt9xBuuAKqeFuR7tGS0FiST2rirbtkvLFJNTfRfm3io0WU b26PGbs+D/mGO8nGQeKc0Z6a+CYejFxm1EHjeCnjxWw3NotVvD+a+N0+fp8RjzI73HKbE+9eXDpK Kd7LtBt0rSrRkwUnXiyzH5r4zeT76DIew8XtDRex1Kp08etx4NiagAe3xdKa8bS/e7Dy+sGy3QcT b2aP8/0d8g03450kq9056daWBRcWq1zvnxOvkh5vZoPEg8n2YPFWGsoRE+1NTrYjJ92DJaqZuOGr YbLUBldqp7ZA3E6JEReeyiSDbLc13ZbS020SbkxcUuqU8XzWiwJG2XTjeERvd3PiBcl+4xY/slts XTaQ9a0ylW1UcJPALVM6TyrxRT3xQ+ff5bZMTLTBLaoL54RDutshJDwpnRu5O5eCWltk5NPMVxb5 26EAEVMytvpRXrEgokGbK0Vxxc3B5RULFsgHmeR0tRvlM6xGQHhOBuwkHv9PAf/5SAyAeIB4AIgH iAeAeIB4AIgHiAeAeIB4gHgAiAeIB4B4gHgAiAeIB4B4gHgAiAeIB4gHgHiAeACIB4gHgHiAeACI B4gHgHiAeIB4AIgHiAeAeIB4AIgHiAeAeIB4AIgHiAeIB4B4gHgAiAeIB4B4gHgAiAeIB4B4gHiA eACIB4gHgHiAeACIB4gHgHiAeACIB4gHiAeAeIB4AIgHiAeAeIB4AIgHiAeIxykAxAPEA0A8QDwA xAPEA0A8QDwAxAPEA8QD+GnEqy0KOQL8kIxXZ8QEyLmS9aS8YgGEg0uVsbMbZYdFfQB0yXB1V/Hq hHCnJo529IGIkEpQnfwoM9KdRLpzHCzi52RCREslqGMmOX2XBavMwicRbt/EzmLvJKwGKl145RI0 RPFUNk1OPkmdUvJVGelOTrptExuLrQg4kswZBixceKZoQ9ySaktMW4uYpFS8f1FlUuhRFlw3sXIx s58NtvBIXpzQc/F8dBGwbumTh9KK1E68gySk6MjaYmPuHHLyVS02722B84LLJr5ZnKWbiHRjE6/s sXgqWikZXD/OXVhtzXWu1+m7eNGPs2QL82JhsbSvx8yXKrdZ8Q4i3pMt/LWJuUlX2uPOi09FvNBD 4Qon2ciikmMpUbS0Jye5yg+JhrvvpVcr4s6S0tmNL038aY4szJm1tGStGa+2F0AX3pjBj03cm2Qq 3TwhXuiheFGqyjL42C6wiXxeuezoX4h4sfphTE/+qcfixb/5lBDvLN0nkS9mvd1LSu2TiTd20i2t 7E4lK/RRvCCZLgp3ZxfavX18JxJq5osy7eVC3SR6nX2u5PR0G+Ug/X+shp8sYtbTPq++VGp9ud1I 6Snte3uR8X4AGS9ISY3SnS+oNxIHe64nucgK12Sv7bwsJVaJRrvPvV7tMp5WxK+W8R7tPGzMFc30 rRlPT2hpJzSe6CjjwsrsnZSh0MPJ1os3FeneNvHeZa04WMVtJC05cQB7lKs+yrftuXj692pF3Nrz e5IhIz5nLbPFpVKrVhe2eCEneS+WTxPlp4/DRZAyG8U7S/dOmuSt9G3xYivc+XiUJvuLfb4Q8fYD yXi1DE07yfa6pbJt6+9y4hVubE6V39h4V5mJtq8ZbyLiLaRUbmXP6t6Jt5bJ7rOFTnirAZTaOiOf f5NBB6pj2/OtOkwwdWLTsHLbDKGn4hVuGyX2eHFLYCVDwtoy29yJ9+Qmu8+S8ZZSqo+5fqdn4vle 79iyhZS9yKoOv8yP0aWLPr9jodsp2uetE5nuycpv7PMK6e98mf3qyuyhrd/p+YTbdudS9nlWV+zd BNf/hR5OsTnxdEtFS8bOifdo4mnGW5lkcaiImU4nO9/rDOUttNxbhBefY3XlL8mV077fIKD7eXrH xd7tZ84yw8VKptilZEy/cz+UmwXqCz3gRaoX/MJaXrQhnNCQKBlH6WtXxT8byX47xW8abwcs3VWC vZZ4r/4H/GQnMiR6F92lnxTpDeRd8f3bZMeCO7Uv9jiQLrs6dPgbBooif2MA/x6AeC+edkNiivc3 CfiJbijTK+L94Ox36X683GQHiPdq5ym8dKIDAIBb4i8BBgCAeFUFZNSGJgAAAABJRU5ErkJggg=="
        transform="translate(1221.51 485.9)"
      />
      <path
        className="st2"
        d="M1280.9 495.6h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V501.9c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Presión Global Salida filtros Ag Plus */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(8, "Presión Global Salida Filtros", false)}>
        <path
          className={getTarjetaClass(8, selected)}
          d="M1231.6 503h138.1v99.8h-138.1z"
        />
        <text
          transform="translate(1239.283 542.575)"
          className="st21">
          <tspan
            x={0}
            y={0}
            className="st16 st9 st23">
            {"Presi\xF3n Global Salida"}
          </tspan>
          <tspan
            x={22.8}
            y={15.6}
            className="st16 st9 st23">
            {"filtros Ag Plus"}
          </tspan>
        </text>

        <text
          transform="translate(1282.444 587.894)"
          className="st11 st9 st13">
          {getScaledValue(datosScada.d8, 1)}
        </text>
        <text
          transform="translate(1321.57 587.499)"
          className="st11 st24 st25">
          {" Bar"}
        </text>
        <text
          transform="translate(1283.756 522.935)"
          className="st11 st9 st20">
          {"PT-019"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(8, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(8, "Presión Global Salida Filtros");
        }}>
        <path d="M1256.5 573.8c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M1254.8 572.8c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM1266.1 571.5c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M1266.7 569.7c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM1267.6 578.8v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1262.6 586.3c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presión Global Salida filtros Ag Plus */}

      <path
        className="st0"
        d="M247.2 853.1h13.3c2.8 0 5 2.3 5 5v36.5c0 2.2 1.8 4 4 4h9"
      />
      <path
        className="st19"
        d="M126.8 623.7c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
      />
      <path
        className="st2"
        d="M138.5 623.7c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <circle
        className="st26"
        cx={810.3}
        cy={403.2}
        r={9.2}
      />
      <path
        className="st19"
        d="M1357.2 810.5c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
      />
      <path
        className="st2"
        d="M1368.9 810.5c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <path
        className="st0"
        d="M460.7 849.7H474c2.8 0 5 2.3 5 5v42.5M675.7 849.7H689c2.8 0 5 2.3 5 5v42.5M892.8 849.7h13.3c2.8 0 5 2.3 5 5v42.5M1108.4 849.7h13.3c2.8 0 5 2.3 5 5v42.5"
      />
      <path
        className="st30"
        d="M104.1 1271.9H89.3c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM88.9 1275.8l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st30"
        d="m104.5 1286.4-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st31"
        d="M96.7 1270.9v10"
      />
      <path
        className="st32"
        d="M87.7 1262.9h18M96.7 1263.9v8"
      />
      <path
        className="st0"
        d="M110 1281.2h35.9"
      />
      <path
        className="st30"
        d="M174.3 1378.6h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM159.1 1382.5l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st30"
        d="m174.7 1393.1-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st31"
        d="M166.9 1377.6v10"
      />
      <path
        className="st32"
        d="M157.9 1369.6h18M166.9 1370.6v8"
      />
      <path
        className="st30"
        d="M184.5 1266.7c0-6.7-7.8-12.1-17.5-12.1s-17.5 5.5-17.5 12.1h.1c-.1.3-.1.7-.1 1.1v37.6c0 3.5 3.4 6.4 7.6 6.8v6.2h5.2v-6.1h9v6.1h5.2v-6.2c4.5-.2 8-3.2 8-6.8v-37.6c0-.3-.1-.7-.1-1.1h.1z"
      />
      <path
        className="st0"
        d="M188.3 1281.7h42.3c2.8 0 5-2.3 5-5v-99.3l1044.5.1c3.9 0 7 3.1 7 7v60.7M154.3 1387.3H133c-2.8 0-5-2.3-5-5v-100.4"
      />
      <path
        className="st27"
        d="M189.4 1305.7h19.3v12.6"
      />
      <g className="st33">
        <path
          className="st28"
          d="M206.8 1321.4h3.7v11h-3.7z"
        />
        <path
          className="st28"
          d="M215.7 1315.3c.7.7.7 2 0 2.8l-5.6 5.6c-.7.7-2 .7-2.8 0l-5.6-5.6c-.7-.7-.7-2 0-2.8"
        />
      </g>
      <text
        transform="translate(149.274 1410.554)"
        className="st11 st9 st20">
        {"VX-016"}
      </text>
      <text
        transform="translate(77.404 1302.016)"
        className="st11 st9 st20">
        {"VX-006"}
      </text>
      <circle
        className="st26"
        cx={211}
        cy={1281.2}
        r={9.2}
      />
      <path
        className="st30"
        d="M307 1269.1h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6H307c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM291.8 1273l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st30"
        d="m307.4 1283.6-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st31"
        d="M299.6 1268.1v10"
      />
      <path
        className="st32"
        d="M290.6 1260.1h18M299.6 1261.1v8"
      />
      <path
        className="st0"
        d="M286.3 1278.9H273c-2.8 0-5-2.3-5-5v-46.4M312.9 1278.3h35.9"
      />
      <path
        className="st30"
        d="M377.2 1375.7h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM362 1379.6l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st30"
        d="m377.6 1390.2-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st31"
        d="M369.8 1374.7v10"
      />
      <path
        className="st32"
        d="M360.8 1366.7h18M369.8 1367.7v8"
      />
      <path
        className="st30"
        d="M387.4 1266.7c0-6.7-7.8-12.1-17.5-12.1s-17.5 5.5-17.5 12.1h.1c-.1.3-.1.7-.1 1.1v37.6c0 3.5 3.4 6.4 7.6 6.8v6.2h5.2v-6.1h9v6.1h5.2v-6.2c4.5-.2 8-3.2 8-6.8v-37.6c0-.3-.1-.7-.1-1.1h.1z"
      />
      <path
        className="st0"
        d="M391.3 1278.9h42.3c2.8 0 5-2.3 5-5v-95.4M357.2 1384.5h-21.3c-2.8 0-5-2.3-5-5v-100.4"
      />
      <path
        className="st27"
        d="M392.3 1302.9h19.3v12.5"
      />
      <g className="st33">
        <path
          className="st28"
          d="M409.7 1318.5h3.7v11h-3.7z"
        />
        <path
          className="st28"
          d="M418.6 1312.5c.7.7.7 2 0 2.8l-5.6 5.6c-.7.7-2 .7-2.8 0l-5.6-5.6c-.7-.7-.7-2 0-2.8"
        />
      </g>
      <text
        transform="translate(352.179 1407.69)"
        className="st11 st9 st20">
        {"VX-017"}
      </text>
      <text
        transform="translate(280.309 1299.152)"
        className="st11 st9 st20">
        {"VX-007"}
      </text>
      <circle
        className="st26"
        cx={413.9}
        cy={1278.3}
        r={9.2}
      />
      <path
        className="st30"
        d="M510.7 1268h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM495.5 1271.9l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st30"
        d="m511.1 1282.5-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st31"
        d="M503.3 1267v10"
      />
      <path
        className="st32"
        d="M494.3 1259h18M503.3 1260v8"
      />
      <path
        className="st0"
        d="M489.9 1277.8h-13.3c-2.8 0-5-2.3-5-5v-46.4M516.5 1277.3h35.9"
      />
      <path
        className="st30"
        d="M580.9 1374.6h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM565.7 1378.5l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st30"
        d="m581.3 1389.1-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st31"
        d="M573.5 1373.6v10"
      />
      <path
        className="st32"
        d="M564.5 1365.6h18M573.5 1366.6v8"
      />
      <path
        className="st30"
        d="M591.1 1266.7c0-6.7-7.8-12.1-17.5-12.1s-17.5 5.5-17.5 12.1h.1c-.1.3-.1.7-.1 1.1v37.6c0 3.5 3.4 6.4 7.6 6.8v6.2h5.2v-6.1h9v6.1h5.2v-6.2c4.5-.2 8-3.2 8-6.8v-37.6c0-.3-.1-.7-.1-1.1h.1z"
      />
      <path
        className="st0"
        d="M594.9 1277.8h42.3c2.8 0 5-2.3 5-5v-95.4M560.8 1383.4h-21.3c-2.8 0-5-2.3-5-5V1278"
      />
      <path
        className="st27"
        d="M595.9 1301.8h19.4v12.6"
      />
      <g className="st33">
        <path
          className="st28"
          d="M613.3 1317.4h3.7v11h-3.7z"
        />
        <path
          className="st28"
          d="M622.3 1311.4c.7.7.7 2 0 2.8l-5.6 5.6c-.7.7-2 .7-2.8 0l-5.6-5.6c-.7-.7-.7-2 0-2.8"
        />
      </g>
      <text
        transform="translate(555.815 1406.627)"
        className="st11 st9 st20">
        {"VX-018"}
      </text>
      <text
        transform="translate(483.946 1298.09)"
        className="st11 st9 st20">
        {"VX-008"}
      </text>
      <circle
        className="st26"
        cx={617.6}
        cy={1277.3}
        r={9.2}
      />
      <path
        className="st30"
        d="M712.7 1268.7h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM697.5 1272.6l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st30"
        d="m713.1 1283.2-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st31"
        d="M705.3 1267.7v10"
      />
      <path
        className="st32"
        d="M696.3 1259.7h18M705.3 1260.7v8"
      />
      <path
        className="st0"
        d="M692 1278.5h-13.3c-2.8 0-5-2.3-5-5v-46.4M718.5 1277.9h35.9"
      />
      <path
        className="st30"
        d="M782.9 1375.3h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM767.7 1379.2l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st30"
        d="m783.3 1389.8-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st31"
        d="M775.5 1374.3v10"
      />
      <path
        className="st32"
        d="M766.5 1366.3h18M775.5 1367.3v8"
      />
      <path
        className="st30"
        d="M793.1 1266.7c0-6.7-7.8-12.1-17.5-12.1s-17.5 5.5-17.5 12.1h.1c-.1.3-.1.7-.1 1.1v37.6c0 3.5 3.4 6.4 7.6 6.8v6.2h5.2v-6.1h9v6.1h5.2v-6.2c4.5-.2 8-3.2 8-6.8v-37.6c0-.3-.1-.7-.1-1.1h.1z"
      />
      <path
        className="st0"
        d="M796.9 1278.5h42.3c2.8 0 5-2.3 5-5v-95.4M762.8 1384.1h-21.3c-2.8 0-5-2.3-5-5v-100.4"
      />
      <path
        className="st27"
        d="M798 1302.5h19.3v12.5"
      />
      <g className="st33">
        <path
          className="st28"
          d="M815.4 1318.1h3.7v11h-3.7z"
        />
        <path
          className="st28"
          d="M824.3 1312.1c.7.7.7 2 0 2.8l-5.6 5.6c-.7.7-2 .7-2.8 0l-5.6-5.6c-.7-.7-.7-2 0-2.8"
        />
      </g>
      <text
        transform="translate(757.827 1407.295)"
        className="st11 st9 st20">
        {"VX-019"}
      </text>
      <text
        transform="translate(685.957 1298.757)"
        className="st11 st9 st20">
        {"VX-009"}
      </text>
      <circle
        className="st26"
        cx={819.6}
        cy={1277.9}
        r={9.2}
      />
      <path
        className="st30"
        d="M913.3 1267.6h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM898.1 1271.5l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st30"
        d="m913.7 1282.1-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st31"
        d="M905.9 1266.6v10"
      />
      <path
        className="st32"
        d="M896.9 1258.6h18M905.9 1259.6v8"
      />
      <path
        className="st0"
        d="M892.6 1277.4h-13.3c-2.8 0-5-2.3-5-5v-45.2l-808.8.2M919.2 1276.9h35.9"
      />
      <path
        className="st30"
        d="M983.5 1374.2h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM968.3 1378.1l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st30"
        d="m983.9 1388.7-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st31"
        d="M976.1 1373.2v10"
      />
      <path
        className="st32"
        d="M967.1 1365.2h18M976.1 1366.2v8"
      />
      <path
        className="st30"
        d="M993.7 1266.7c0-6.7-7.8-12.1-17.5-12.1s-17.5 5.5-17.5 12.1h.1c-.1.3-.1.7-.1 1.1v37.6c0 3.5 3.4 6.4 7.6 6.8v6.2h5.2v-6.1h9v6.1h5.2v-6.2c4.5-.2 8-3.2 8-6.8v-37.6c0-.3-.1-.7-.1-1.1h.1z"
      />
      <path
        className="st0"
        d="M997.5 1277.4h42.3c2.8 0 5-2.3 5-5V1175M963.5 1383h-21.3c-2.8 0-5-2.3-5-5v-100.4"
      />
      <path
        className="st27"
        d="M998.6 1301.4h19.3v12.6"
      />
      <g className="st33">
        <path
          className="st28"
          d="M1016 1317h3.7v11h-3.7z"
        />
        <path
          className="st28"
          d="M1024.9 1311c.7.7.7 2 0 2.8l-5.6 5.6c-.7.7-2 .7-2.8 0l-5.6-5.6c-.7-.7-.7-2 0-2.8"
        />
      </g>
      <text
        transform="translate(958.463 1406.232)"
        className="st11 st9 st20">
        {"VX-020"}
      </text>
      <text
        transform="translate(886.594 1297.695)"
        className="st11 st9 st20">
        {"VX-010"}
      </text>
      <circle
        className="st26"
        cx={1020.2}
        cy={1276.9}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={157}
        height={140}
        xlinkHref="data:image/png;base64,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"
        transform="translate(131.51 1109.9)"
      />
      <path
        className="st2"
        d="M190.1 1119.2H147c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Presión Salida F-007 / GAC */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(9, "Presión Salida F-007", false)}>
        <path
          className={getTarjetaClass(9, selected)}
          d="M140.8 1126.6h138.1v99.8H140.8z"
        />
        <text
          transform="translate(167.528 1167.541)"
          className="st21">
          <tspan
            x={0}
            y={0}
            className="st16 st9 st23">
            {"Presi\xF3n Salida"}
          </tspan>
          <tspan
            x={5.4}
            y={15.6}
            className="st16 st9 st23">
            {"F-007 / GAC"}
          </tspan>
        </text>

        <text
          transform="translate(191.66 1211.478)"
          className="st11 st9 st13">
          {getScaledValue(datosScada.d9, 1)}
        </text>
        <text
          transform="translate(230.786 1211.082)"
          className="st11 st24 st25">
          {"Bar"}
        </text>
        <text
          transform="translate(192.973 1146.519)"
          className="st11 st9 st20">
          {"PT-021"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(9, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(9, "Presión SalidaF-007");
        }}>
        <path d="M165.7 1197.4c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M164 1196.4c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM175.3 1195.1c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M175.9 1193.3c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM176.8 1202.4v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM171.8 1209.9c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presión Salida F-007 / GAC */}

      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={157}
        height={140}
        xlinkHref="data:image/png;base64,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"
        transform="translate(334.51 1109.9)"
      />
      <path
        className="st2"
        d="M393.7 1119.2h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Presión Salida F-008 / GAC */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(10, "Presión Salida F-008", false)}>
        <path
          className={getTarjetaClass(10, selected)}
          d="M344.4 1126.6h138.1v99.8H344.4z"
        />
        <text
          transform="translate(370.93 1167.541)"
          className="st21">
          <tspan
            x={0}
            y={0}
            className="st16 st9 st23">
            {"Presi\xF3n Salida"}
          </tspan>
          <tspan
            x={5.4}
            y={15.6}
            className="st16 st9 st23">
            {"F-008 / GAC"}
          </tspan>
        </text>
        <text
          transform="translate(395.207 1211.478)"
          className="st11 st9 st13">
          {getScaledValue(datosScada.d10, 1)}
        </text>
        <text
          transform="translate(434.333 1211.082)"
          className="st11 st24 st25">
          {"Bar"}
        </text>
        <text
          transform="translate(396.52 1146.519)"
          className="st11 st9 st20">
          {"PT-023"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(10, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(10, "Presión Salida F-008");
        }}>
        <path d="M369.3 1197.4c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M367.6 1196.4c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM378.9 1195.1c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M379.5 1193.3c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM380.4 1202.4v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM375.4 1209.9c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presión Salida F-008 / GAC */}

      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={157}
        height={140}
        xlinkHref="data:image/png;base64,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 AGD8LcAA77YSiPQbvpsAAAAASUVORK5CYII="
        transform="translate(539.51 1108.9)"
      />
      <path
        className="st2"
        d="M598.3 1118.1h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Presión Salida F-009 / GAC */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(11, "Presión Salida F-009", false)}>
        <path
          className={getTarjetaClass(11, selected)}
          d="M549 1125.5h138.1v99.8H549z"
        />
        <text
          transform="translate(574.266 1167.541)"
          className="st21">
          <tspan
            x={0}
            y={0}
            className="st16 st9 st23">
            {"Presi\xF3n Salida"}
          </tspan>
          <tspan
            x={5.4}
            y={15.6}
            className="st16 st9 st23">
            {"F-009 / GAC"}
          </tspan>
        </text>

        <text
          transform="translate(599.844 1210.415)"
          className="st11 st9 st13">
          {getScaledValue(datosScada.d11, 1)}
        </text>
        <text
          transform="translate(638.97 1210.02)"
          className="st11 st24 st25">
          {" Bar"}
        </text>
        <text
          transform="translate(601.157 1145.456)"
          className="st11 st9 st20">
          {"PT-025"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(11, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(11, "Presión Salida F-009");
        }}>
        <path d="M573.9 1196.3c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M572.2 1195.3c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM583.5 1194c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M584.1 1192.2c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM585 1201.3v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM580 1208.8c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presión Salida F-009 / GAC */}

      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={157}
        height={141}
        xlinkHref="data:image/png;base64,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 YAB89TVx+rkHDQAAAABJRU5ErkJggg=="
        transform="translate(741.51 1108.9)"
      />
      <path
        className="st2"
        d="M800.3 1118.8h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Presión Salida F-010 / GAC */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(12, "Presión Salida F-010", false)}>
        <path
          className={getTarjetaClass(12, selected)}
          d="M751 1126.2h138.1v99.8H751z"
        />
        <text
          transform="translate(777.669 1167.541)"
          className="st21">
          <tspan
            x={0}
            y={0}
            className="st16 st9 st23">
            {"Presi\xF3n Salida"}
          </tspan>
          <tspan
            x={5.4}
            y={15.6}
            className="st16 st9 st23">
            {"F-010 / GAC"}
          </tspan>
        </text>

        <text
          transform="translate(801.855 1211.083)"
          className="st11 st9 st13">
          {getScaledValue(datosScada.d12, 1)}
        </text>
        <text
          transform="translate(840.98 1210.687)"
          className="st11 st24 st25">
          {"Bar"}
        </text>
        <text
          transform="translate(803.168 1146.123)"
          className="st11 st9 st20">
          {"PT-027"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(12, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(12, "Presión Salida F-010");
        }}>
        <path d="M775.9 1197c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M774.2 1196c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM785.5 1194.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M786.1 1192.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM787 1202v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM782 1209.5c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presión Salida F-010 / GAC  */}

      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={157}
        height={141}
        xlinkHref="data:image/png;base64,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 gg=="
        transform="translate(942.51 1107.9)"
      />
      <path
        className="st2"
        d="M1001 1117.7h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V1124c0-3.5-2.8-6.3-6.3-6.3H1001z"
      />

      {/* Presión Salida F-011 / GAC */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(13, "Presión Salida F-011", false)}>
        <path
          className={getTarjetaClass(13, selected)}
          d="M951.7 1125.1h138.1v99.8H951.7z"
        />
        <text
          transform="translate(978.271 1167.541)"
          className="st21">
          <tspan
            x={0}
            y={0}
            className="st16 st9 st23">
            {"Presi\xF3n Salida"}
          </tspan>
          <tspan
            x={5.4}
            y={15.6}
            className="st16 st9 st23">
            {"F-011 / GAC"}
          </tspan>
        </text>

        <text
          transform="translate(1002.492 1210.02)"
          className="st11 st9 st13">
          {getScaledValue(datosScada.d13, 1)}
        </text>
        <text
          transform="translate(1041.618 1209.625)"
          className="st11 st24 st25">
          {" Bar"}
        </text>
        <text
          transform="translate(1003.805 1145.061)"
          className="st11 st9 st20">
          {"PT-029"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(13, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(13, "Presión Salida F-011");
        }}>
        <path d="M976.6 1195.9c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M974.9 1194.9c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM986.2 1193.6c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M986.8 1191.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM987.7 1200.9v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM982.7 1208.4c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin  Presión Salida F-011 / GAC */}

      <circle
        className="st26"
        cx={1165}
        cy={1176.7}
        r={9.2}
      />
      <path
        className="st0"
        d="M179.2 1388.2h13.3c2.8 0 5 2.3 5 5v38.5"
      />
      <path
        className="st19"
        d="M1280.8 1247.4c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
      />
      <path
        className="st2"
        d="M1292.5 1247.4c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <path
        className="st19"
        d="M205.4 1426.6c1 0 1.9.8 1.9 1.9v9c0 1-.8 1.9-1.9 1.9-.5 0-1-.2-1.3-.5l-4.5-4.5c-.7-.7-.7-1.8-.1-2.6l.1-.1 4.5-4.5c.4-.5.8-.6 1.3-.6z"
      />
      <path
        className="st2"
        d="M205.4 1438.3c-.2 0-.4-.1-.6-.3l-4.5-4.5c-.3-.3-.3-.9 0-1.3l4.5-4.5c.2-.2.4-.3.6-.3.4 0 .9.3.9.9v9c0 .6-.4 1-.9 1m0 2c1.6 0 2.9-1.3 2.9-2.9v-9c0-1.6-1.3-2.9-2.9-2.9-.8 0-1.5.3-2 .8l-4.5 4.5-.1.1-.1.1c-.9 1.2-.9 2.9.2 3.9l4.5 4.5c.5.6 1.2.9 2 .9z"
      />
      <path
        className="st0"
        d="M382.7 1384.8H396c2.8 0 5 2.3 5 5v42.5M585.7 1384.8H599c2.8 0 5 2.3 5 5v42.5M787.8 1384.8h13.3c2.8 0 5 2.3 5 5v42.5M988.4 1384.8h13.3c2.8 0 5 2.3 5 5v42.5"
      />
      <path
        className="st16"
        d="M1261.5 1265.9h124.8v97.7h-124.8z"
      />
      <path
        className="st17"
        d="M1386.2 1249.6v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1v-111.2"
      />
      <text
        transform="translate(1266.08 1386.75)"
        className="st11 st9 st20">
        {"TK - AGUA PRODUCTO"}
      </text>
      <path
        className="st27"
        d="M1198.3 1185.8v32"
      />
      <path
        className="st28"
        d="M1203.2 1191.1c0 .9-.7 1.6-1.6 1.6h-6.3c-.9 0-1.6-.7-1.6-1.6 0-.4.2-.8.5-1.1l3.1-3.1c.6-.6 1.5-.6 2.2-.1l3.2 3.2c.3.3.5.7.5 1.1z"
      />
      <path
        className="st2"
        d="M1194.6 1191.1c0-.2.1-.3.2-.4l3.1-3.1c.2-.2.6-.2.9 0l3.1 3.1c.1.1.2.3.2.4 0 .3-.2.6-.6.6h-6.3c-.3 0-.6-.3-.6-.6m-2 0c0 1.4 1.2 2.6 2.6 2.6h6.3c1.4 0 2.6-1.2 2.6-2.6 0-.7-.3-1.3-.8-1.8l-3.1-3.1-.1-.1-.1-.1c-1.1-.9-2.6-.8-3.5.2l-3.1 3.1c-.5.5-.8 1.1-.8 1.8z"
      />
      <text
        transform="translate(1154.045 1308.496)"
        className="st11 st9 st20">
        {"Hipoclorito"}
      </text>
      <path
        className="st17"
        d="M1201.4 1228.8h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
      />
      <path
        className="st18"
        d="M1190.9 1237.8h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
      />
      <path
        className="st29"
        d="M1160.9 1249.5h38.8v40h-38.8z"
      />
      <path
        className="st17"
        d="M1199.7 1242.8v45.2c0 .7-.4 1.3-.8 1.3h-37.1c-.5 0-.8-.6-.8-1.3v-45.2"
      />
      <path
        className="st16"
        d="M1259.3 1506.2h124.8v97.7h-124.8z"
      />
      <path
        className="st17"
        d="M1383.9 1489.8V1601c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1v-111.2"
      />
      <text
        transform="translate(1275.83 1626.969)"
        className="st11 st9 st20">
        {"TK - AGUA RETRO"}
      </text>

      {/* Bomba Retrolavado */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(17, "Estado Bomba Retrolavado", true)}>
        <path
          className="st18"
          d="M1173.7 1561.5h17.4c1.1-.3 2.2-.4 3.4-.4 8.1 0 14.6 6.5 14.6 14.6 0 4.1-1.7 7.8-4.3 10.4l4.1 9c.3.7-.1 1.6-.7 1.6h-27.7c-.6 0-.9-.9-.6-1.6l4.1-9.1c-2.6-2.6-4.2-6.3-4.2-10.3 0-1.5.2-2.9.6-4.2h-6.8c-1.4 0-2.6-1.2-2.6-2.7v-4.6c0-1.5 1.2-2.7 2.7-2.7z"
        />
        <image
          style={{
            overflow: "visible",
            opacity: 0.15,
            enableBackground: "new"
          }}
          width={39}
          height={39}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7lJREFUeNrsmOtS2zAQhS1LqYOB EqCUMu207/9cvU0JLSEXcnFsVemc7ZxZ5PhCmx+dZuYMIXHkzyvt7pGS5P/rH3+ZA4zpnzOY+8NQ RgHG4PwhAQ0prQH0BFV1BTXPBEtJFkrpmgogJd6X9FnVBrQPoIYaKAmoRGwLbej9Ft9VTaCuJ9zu dy+gYVCOv0N8JuOWAFsprYMKgJb7IF0PuF2UMkCdBL2EToOOg45wTQKIHdAiaA7N8P8jvttQRJ9A uh5wQ4CNgi5JI0DmiGKCmy8B9AD9CLoPmgRNASoRfQLpOk7rEBAXQa+DboLe4P05IpnXRFDgxkG3 FOmU7lVQErUClGy1iEoOkB3UO+gtAZ7gIXgNrhHFKSJ3joeU6wyVIoGTz/YCcikZAO4s6ApQH4Le I4qvVPQs3bQA5Bl0StEzlOmlKkO+bQQlY48xtdcAlOhdY/3llMGG1lIFyBxgQ5pazvK1SphfUXQt omdp7V0C6Abiqc2oUBvVSRygHD3AFlMvmT2nhCnlt01TLNN7hCm8wBRfAfYMkc3UgjcqG1PVCktE bYZ1+R2ScQq51jX0V0kOATwH2AWtOZnWNNKZjKoGA0Dn+P2I1qWMZWn6E9cQPUsJIkVZD+hwnWnR UrkLSQeS4p5Rgv1+2LQhSSwNdqy6BUeui8mQB+d2+SIC1whoIk/MWejU2urinIxyQLVjpXvWn1Gu xZFsB7A2XrLWWdVF0EcMpyd75J9r5ZXdqh03jYB5VWRL8nMbZZP6glbUQQpIdxHfFEFxwtLwH5VN Kqjqt4HkMbeRDhIdL20YsCLLNEfDnwJ0FXnyJkCGW+Jh5xhvSeO16sUcwUeATaAHlJyMaqAuObrd VQpuTh5xhntsVBS9bZlpUmoyKjfc3kzEDXu1jsXVLNDedp7wS9BH/L0D6Jq3AbYBLFZcB1QHbU2k KrJPvN4EbgyoT9A3mNkFrpVpTmzL4qrdjVHLQAMVFDEBm5KjFrhd9L4ielNcyxWi0Q9yoiyUXWJH MkWPFtsl61HW3YrW3B2gPgN0rOCqtpsmr/a2a8CIC17jphNEZlTjlgskxQzX3mH93QJuQglSdt2T MGShpnVFgGNl53mvUaisvVe7uoWKnu9zsmDU1pPt0gkpV86a9yRL2huLe15Ska709HY9+oiZhwGV nixSeriWbihpeP9R1sH1OZsxkYyOOR1DgDrD9Q5ubxfqY5dMzQlX0xGcdi1/7XQrBhrzd0nNOaE/ xPngPqecNJyqdrJnNjnMq7e5/SnAAPGxrgOPgSD9AAAAAElFTkSuQmCC"
          transform="translate(1176.671 1558.277) scale(.8974)"
        />
        <circle
          className="st2"
          cx={1194.5}
          cy={1576}
          r={10.9}
        />
        <circle
          fill={getColor(datosScada.d17)}
          cx={1194.5}
          cy={1575.8}
          r={8}
        />
        <text
          transform="translate(1177.204 1613.767)"
          className="st21">
          <tspan
            x={0}
            y={0}
            className="st11 st9 st20">
            {"Bomba"}
          </tspan>
          <tspan
            x={-12.2}
            y={12}
            className="st11 st9 st20">
            {"Retrolavado"}
          </tspan>
        </text>
      </g>

      {/* Fin Bomba Retrolavado */}

      <path
        className="st1"
        d="M1220.1 1593.3h31.5"
      />
      <path
        className="st19"
        d="M1220.6 1587c1 0 1.9.8 1.9 1.9v9c0 1-.8 1.9-1.9 1.9-.5 0-1-.2-1.3-.5l-4.5-4.5c-.7-.7-.7-1.8-.1-2.6l.1-.1 4.5-4.5c.4-.5.8-.6 1.3-.6z"
      />
      <path
        className="st2"
        d="M1220.6 1598.7c-.2 0-.4-.1-.6-.3l-4.5-4.5c-.3-.3-.3-.9 0-1.3l4.5-4.5c.2-.2.4-.3.6-.3.4 0 .9.3.9.9v9c0 .6-.4 1-.9 1m0 2c1.6 0 2.9-1.3 2.9-2.9v-9c0-1.6-1.3-2.9-2.9-2.9-.8 0-1.5.3-2 .8l-4.5 4.5-.1.1-.1.1c-.9 1.2-.9 2.9.2 3.9l4.5 4.5c.5.6 1.2.9 2 .9z"
      />
      <path
        className="st0"
        d="m1230.5 1178.1-1 249c0 2.8 2.2 5 5 5h13.2"
      />
      <path
        className="st30"
        d="M1267.7 1422.1h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM1252.5 1426l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st30"
        d="m1268.1 1436.6-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st31"
        d="M1260.3 1421.1v10"
      />
      <path
        className="st32"
        d="M1251.3 1413.1h18M1260.3 1414.1v8"
      />
      <text
        transform="translate(1242.677 1454.083)"
        className="st11 st9 st20">
        {"VX-021"}
      </text>
      <path
        className="st0"
        d="M1273.6 1432.6h11.3c2.8 0 5 2.3 5 5v42.5"
      />
      <path
        className="st19"
        d="M1283.6 1481.5c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
      />
      <path
        className="st2"
        d="M1295.3 1481.5c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <path
        className="st19"
        d="M58.1 1192c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
      />
      <path
        className="st2"
        d="M69.8 1192c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <path
        className="st19"
        d="M52.4 1354.1c0 1-.8 1.9-1.9 1.9h-9c-1 0-1.9-.8-1.9-1.9 0-.5.2-1 .5-1.3l4.5-4.5c.7-.7 1.8-.7 2.6-.1l.1.1 4.5 4.5c.5.4.6.8.6 1.3z"
      />
      <path
        className="st2"
        d="M40.7 1354.1c0-.2.1-.4.3-.6l4.5-4.5c.3-.3.9-.3 1.3 0l4.5 4.5c.2.2.3.4.3.6 0 .4-.3.9-.9.9h-9c-.6 0-1-.4-1-.9m-2 0c0 1.6 1.3 2.9 2.9 2.9h9c1.6 0 2.9-1.3 2.9-2.9 0-.8-.3-1.5-.8-2l-4.5-4.5-.1-.1-.1-.1c-1.2-.9-2.9-.9-3.9.2l-4.5 4.5c-.6.5-.9 1.2-.9 2z"
      />
      <path
        className="st19"
        d="M284.4 892.7c1 0 1.9.8 1.9 1.9v9c0 1-.8 1.9-1.9 1.9-.5 0-1-.2-1.3-.5l-4.5-4.5c-.7-.7-.7-1.8-.1-2.6l.1-.1 4.5-4.5c.4-.5.8-.6 1.3-.6z"
      />
      <path
        className="st2"
        d="M284.4 904.4c-.2 0-.4-.1-.6-.3l-4.5-4.5c-.3-.3-.3-.9 0-1.3l4.5-4.5c.2-.2.4-.3.6-.3.4 0 .9.3.9.9v9c0 .6-.4 1-.9 1m0 2c1.6 0 2.9-1.3 2.9-2.9v-9c0-1.6-1.3-2.9-2.9-2.9-.8 0-1.5.3-2 .8l-4.5 4.5-.1.1-.1.1c-.9 1.2-.9 2.9.2 3.9l4.5 4.5c.5.6 1.2.9 2 .9z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={166}
        height={250}
        xlinkHref="data:image/png;base64,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 QmCC"
        transform="translate(1089.556 914.33)"
      />
      <path
        className="st2"
        d="M1148.9 923.4h-43.1c-3.5 0-6.3 2.8-6.3 6.3V1142c0 3.5 2.8 6.3 6.3 6.3h51.6c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.1 1-.9 2.2-1.4 3.5-1.4h61.7c3.4 0 6.3-2.8 6.3-6.3V929.7c0-3.4-2.8-6.3-6.3-6.3h-90.4z"
      />

      {/* Presión Global Salida Filtros GAC  */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() =>
          loadGrafico(14, "Presión Global Salida Filtros GAC", false)
        }>
        <path
          className={getTarjetaClass(14, selected)}
          d="M 1099.5 1037.6 h 146.4 v 103.8 h -146.4 z"
        />
        <text
          transform="translate(1110.788 1075.385)"
          className="st21">
          <tspan
            x={0}
            y={0}
            className="st16 st9 st23">
            {"Presi\xF3n Global Salida"}
          </tspan>
          <tspan
            x={31.1}
            y={15.6}
            className="st16 st9 st23">
            {"filtros GAC"}
          </tspan>
        </text>

        <text
          transform="translate(1155.038 1122.704)"
          className="st11 st9 st13">
          {getScaledValue(datosScada.d14, 1)}
        </text>
        <text
          transform="translate(1196.304 1122.308)"
          className="st11 st24 st25">
          {"Bar"}
        </text>
        <text
          transform="translate(1155.038 1056.637)"
          className="st11 st9 st20">
          {"PT-032"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(14, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(14, "Presión Global Salida Filtros GAC");
        }}>
        <path d="M1119.1 1112.6c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-1.9 1.1-2.5 2.2z" />
        <path d="M1117.4 1111.6c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9.7-1.3 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM1128.7 1110.3c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.7-2.5-2.2z" />
        <path d="M1129.3 1108.5c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.3-2.4-3.7-3zM1130.2 1117.6v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1125.2 1125.1c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presión Global Salida FIltros GAC */}

      {/* Flujo de Producto */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(15, "Flujo de Producto", false)}>
        <path
          className={getTarjetaClass(15, selected)}
          d="M 1100 1035 z M 1245.9 1035.4 h -146.4 V 931.5 h 146.4"
        />
        <text
          transform="translate(1147.731 972.385)"
          className="st21">
          <tspan
            x={0}
            y={0}
            className="st16 st9 st10">
            {"Flujo de"}
          </tspan>
          <tspan
            x={-3.1}
            y={16.8}
            className="st16 st9 st10">
            {"Producto"}
          </tspan>
        </text>

        <text
          transform="translate(1156.038 1020.704)"
          className="st11 st9 st13">
          {getScaledValue(datosScada.d15, 1)}
        </text>
        <text
          transform="translate(1200.304 1020.308)"
          className="st11 st24 st25">
          {"l/s"}
        </text>
        <text
          transform="translate(1153.038 953.538)"
          className="st11 st9 st20">
          {"FIT-033"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(15, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(15, "Flujo de Producto");
        }}>
        <path d="M1119.1 1009.6c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M1117.4 1008.6c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9.7-1.3 1.8-2.2 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM1128.7 1007.3c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M1129.3 1005.5c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM1130.2 1014.6v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1125.2 1022.1c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Flujo de Producto */}

      <path
        style={{
          opacity: 0.5,
          fill: "none",
          stroke: "#b2b2b2",
          strokeWidth: 0.5,
          strokeMiterlimit: 10,
          enableBackground: "new"
        }}
        d="M1110.6 1036.4h124"
      />

      <path
        className="st19"
        d="M409.9 1426.6c1 0 1.9.8 1.9 1.9v9c0 1-.8 1.9-1.9 1.9-.5 0-1-.2-1.3-.5l-4.5-4.5c-.7-.7-.7-1.8-.1-2.6l.1-.1 4.5-4.5c.4-.5.8-.6 1.3-.6z"
      />
      <path
        className="st2"
        d="M409.9 1438.3c-.2 0-.4-.1-.6-.3l-4.5-4.5c-.3-.3-.3-.9 0-1.3l4.5-4.5c.2-.2.4-.3.6-.3.4 0 .9.3.9.9v9c0 .6-.4 1-.9 1m0 2c1.6 0 2.9-1.3 2.9-2.9v-9c0-1.6-1.3-2.9-2.9-2.9-.8 0-1.5.3-2 .8l-4.5 4.5-.1.1-.1.1c-.9 1.2-.9 2.9.2 3.9l4.5 4.5c.5.6 1.2.9 2 .9z"
      />
      <path
        className="st19"
        d="M611.9 1427.3c1 0 1.9.8 1.9 1.9v9c0 1-.8 1.9-1.9 1.9-.5 0-1-.2-1.3-.5l-4.5-4.5c-.7-.7-.7-1.8-.1-2.6l.1-.1 4.5-4.5c.4-.5.8-.6 1.3-.6z"
      />
      <path
        className="st2"
        d="M611.9 1439c-.2 0-.4-.1-.6-.3l-4.5-4.5c-.3-.3-.3-.9 0-1.3l4.5-4.5c.2-.2.4-.3.6-.3.4 0 .9.3.9.9v9c0 .6-.4 1-.9 1m0 2c1.6 0 2.9-1.3 2.9-2.9v-9c0-1.6-1.3-2.9-2.9-2.9-.8 0-1.5.3-2 .8l-4.5 4.5-.1.1-.1.1c-.9 1.2-.9 2.9.2 3.9l4.5 4.5c.5.6 1.2.9 2 .9z"
      />
      <path
        className="st19"
        d="M814.4 1427.3c1 0 1.9.8 1.9 1.9v9c0 1-.8 1.9-1.9 1.9-.5 0-1-.2-1.3-.5l-4.5-4.5c-.7-.7-.7-1.8-.1-2.6l.1-.1 4.5-4.5c.4-.5.8-.6 1.3-.6z"
      />
      <path
        className="st2"
        d="M814.4 1439c-.2 0-.4-.1-.6-.3l-4.5-4.5c-.3-.3-.3-.9 0-1.3l4.5-4.5c.2-.2.4-.3.6-.3.4 0 .9.3.9.9v9c0 .6-.4 1-.9 1m0 2c1.6 0 2.9-1.3 2.9-2.9v-9c0-1.6-1.3-2.9-2.9-2.9-.8 0-1.5.3-2 .8l-4.5 4.5-.1.1-.1.1c-.9 1.2-.9 2.9.2 3.9l4.5 4.5c.5.6 1.2.9 2 .9z"
      />
      <path
        className="st19"
        d="M1014.2 1427.3c1 0 1.9.8 1.9 1.9v9c0 1-.8 1.9-1.9 1.9-.5 0-1-.2-1.3-.5l-4.5-4.5c-.7-.7-.7-1.8-.1-2.6l.1-.1 4.5-4.5c.4-.5.8-.6 1.3-.6z"
      />
      <path
        className="st2"
        d="M1014.2 1439c-.2 0-.4-.1-.6-.3l-4.5-4.5c-.3-.3-.3-.9 0-1.3l4.5-4.5c.2-.2.4-.3.6-.3.4 0 .9.3.9.9v9c0 .6-.4 1-.9 1m0 2c1.6 0 2.9-1.3 2.9-2.9v-9c0-1.6-1.3-2.9-2.9-2.9-.8 0-1.5.3-2 .8l-4.5 4.5-.1.1-.1.1c-.9 1.2-.9 2.9.2 3.9l4.5 4.5c.5.6 1.2.9 2 .9z"
      />
      <path
        className="st19"
        d="M487 892.8c1 0 1.9.8 1.9 1.9v9c0 1-.8 1.9-1.9 1.9-.5 0-1-.2-1.3-.5l-4.5-4.5c-.7-.7-.7-1.8-.1-2.6l.1-.1 4.5-4.5c.4-.5.8-.6 1.3-.6z"
      />
      <path
        className="st2"
        d="M487 904.5c-.2 0-.4-.1-.6-.3l-4.5-4.5c-.3-.3-.3-.9 0-1.3l4.5-4.5c.2-.2.4-.3.6-.3.4 0 .9.3.9.9v9c0 .6-.4 1-.9 1m0 2c1.6 0 2.9-1.3 2.9-2.9v-9c0-1.6-1.3-2.9-2.9-2.9-.8 0-1.5.3-2 .8l-4.5 4.5-.1.1-.1.1c-.9 1.2-.9 2.9.2 3.9l4.5 4.5c.5.6 1.2.9 2 .9z"
      />
      <path
        className="st19"
        d="M702.8 892.9c1 0 1.9.8 1.9 1.9v9c0 1-.8 1.9-1.9 1.9-.5 0-1-.2-1.3-.5l-4.5-4.5c-.7-.7-.7-1.8-.1-2.6l.1-.1 4.5-4.5c.4-.5.8-.6 1.3-.6z"
      />
      <path
        className="st2"
        d="M702.8 904.6c-.2 0-.4-.1-.6-.3l-4.5-4.5c-.3-.3-.3-.9 0-1.3l4.5-4.5c.2-.2.4-.3.6-.3.4 0 .9.3.9.9v9c0 .6-.4 1-.9 1m0 2c1.6 0 2.9-1.3 2.9-2.9v-9c0-1.6-1.3-2.9-2.9-2.9-.8 0-1.5.3-2 .8l-4.5 4.5-.1.1-.1.1c-.9 1.2-.9 2.9.2 3.9l4.5 4.5c.5.6 1.2.9 2 .9z"
      />
      <path
        className="st19"
        d="M919.3 892.9c1 0 1.9.8 1.9 1.9v9c0 1-.8 1.9-1.9 1.9-.5 0-1-.2-1.3-.5l-4.5-4.5c-.7-.7-.7-1.8-.1-2.6l.1-.1 4.5-4.5c.4-.5.8-.6 1.3-.6z"
      />
      <path
        className="st2"
        d="M919.3 904.6c-.2 0-.4-.1-.6-.3l-4.5-4.5c-.3-.3-.3-.9 0-1.3l4.5-4.5c.2-.2.4-.3.6-.3.4 0 .9.3.9.9v9c0 .6-.4 1-.9 1m0 2c1.6 0 2.9-1.3 2.9-2.9v-9c0-1.6-1.3-2.9-2.9-2.9-.8 0-1.5.3-2 .8l-4.5 4.5-.1.1-.1.1c-.9 1.2-.9 2.9.2 3.9l4.5 4.5c.5.6 1.2.9 2 .9z"
      />
      <path
        className="st19"
        d="M1135.2 893c1 0 1.9.8 1.9 1.9v9c0 1-.8 1.9-1.9 1.9-.5 0-1-.2-1.3-.5l-4.5-4.5c-.7-.7-.7-1.8-.1-2.6l.1-.1 4.5-4.5c.4-.5.8-.6 1.3-.6z"
      />
      <path
        className="st2"
        d="M1135.2 904.7c-.2 0-.4-.1-.6-.3l-4.5-4.5c-.3-.3-.3-.9 0-1.3l4.5-4.5c.2-.2.4-.3.6-.3.4 0 .9.3.9.9v9c0 .6-.4 1-.9 1m0 2c1.6 0 2.9-1.3 2.9-2.9v-9c0-1.6-1.3-2.9-2.9-2.9-.8 0-1.5.3-2 .8l-4.5 4.5-.1.1-.1.1c-.9 1.2-.9 2.9.2 3.9l4.5 4.5c.5.6 1.2.9 2 .9z"
      />

      {/* TK - AGUA RETRO */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(19, "Estado Estanque Agua Retro", true)}>
        <image
          style={{
            overflow: "visible",
            opacity: 0.15,
            enableBackground: "new"
          }}
          width={39}
          height={39}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7BJREFUeNrsmOtS2zAQhS3bwcFA CVBKmXba93+u0nZKaAm5kIsjqwpzduawlRPZlPzoNDNnCIkjf15pd4+UJP9f//jL7Glc13Wg/BWg jAIMwbl9AhpS2gDoCKpuA2r+AlhKyqCUrqkBYvHe0mf1LtCugBqqpySgErE1tKL3a3xXbwPNXwC3 +e0B1Pcq8bePz2RsC7CF0tKrAqhtgsw7wm2iVADq2OsNdOJ15HWIaxJAbIBmXlNogv8f8d2KIvoM Mu8I1wfYwOuCNABkiSgmuPkcQA/QL697r5HXGKAS0WeQeYdp7QPi3Oud17XXe7w/QyTLhggK3NDr liKd0r0qSqIoQMnWDFEpAbKB+gh9IMBjPASvwSWiOEbkzvCQcp2hUiRwT5/lLUpJD3CnXpeA+uz1 CVF8q6KX0U0rQJ5CJxQ9Q5luVRlysRGUjD3C1F4BUKJ3hfVXUgYbWks1IEuA9WlqOcuXKmFMHhm9 jNbeBYCuIZ7aggq1UZ0kB1ROD7DG1EtmTylhbOwUy/QeYgrPMcWXgD1FZAu14I0qGalqhRZRm2Bd /oRknGpbBE0gOQTwDGDntOZkWtNAdzKqGvQAXeL3A1qXMpbMgs0jopdRgkhR1gPmuM5E9H3uQtKB pLgXlGBPD5tGJElGgx2pbsGRa2My5MG5XR5ouBhAE3hizsJcra027skoBxQcK92x/oxyLTkpawEW 4yWD7mpbBF3AcDqyR+4lVp6smNazcdMGMKeKrCU/t1I2qStoTR2kgqyCdLsiKE5YGv6jskkVVf0Y SB5zHeggf4yXRgxYk2WaouGPAboIPPmu8RhujoedYrw5jRfVizmCjwAbQQ8oOQXVQF1ydLurFdyU POIE9+Be7LIWmSalpqByw+3NBCy7U+tYXM0M7W3jCb95fcHfO4BKL66zCLBQce1RHcwaIlWTfeL1 JnBDQN1AP2BmZ7jWtolgyN0YtQw0UEURE7AxOWqB20TvO6I3xrXrWDejE2Wm7BI7kjF6tNguWY+y 7ha05u4A9RWgQwVXx26anNrbLgEjLniJm44QmUGDW66QFBNce4f1dwu4ESWIbbsnYchKTeuCAIfK zvNeo1JZe692dTMVPdflZMGorSfbpWNSqZw170nmtDcW9zynIl2rs5vWjT5kHnpUeopA6eFauqKk 4f2HDcF1PZsxgYwOOR1DgDrD9Q6usQt1tUqm4YRr1xGcdi2vdroVAg35u6ThnNDt43xwm1NOdpyq RtuzLNnfq5O5/S3AAFxfqwWBYna5AAAAAElFTkSuQmCC"
          transform="translate(1340.438 1558.277) scale(.8974)"
        />
        <circle
          className="st2"
          cx={1358.3}
          cy={1576}
          r={10.9}
        />
        <circle
          fill={getColor(datosScada.d19)}
          cx={1358.3}
          cy={1575.8}
          r={8}
        />
      </g>
      {/* Fin TK - AGUA RETRO */}

      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={157}
        height={140}
        xlinkHref="data:image/png;base64,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"
        transform="translate(1245.51 1109.9)"
      />
      <path
        className="st2"
        d="M1304.2 1119.2h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Nivel Estanque TK-002 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(18, "Nivel Estanque TK-002", false)}>
        <path
          className={getTarjetaClass(18, selected)}
          d="M1254.9 1126.6H1393v99.8h-138.1z"
        />
        <text
          transform="translate(1281.395 1166.16)"
          className="st21">
          <tspan
            x={0}
            y={0}
            className="st16 st9 st23">
            {"Nivel Estanque"}
          </tspan>
          <tspan
            x={22.4}
            y={15.6}
            className="st16 st9 st23">
            {"TK-002"}
          </tspan>
        </text>

        <text
          transform="translate(1316.767 1210.478)"
          className="st11 st9 st13">
          {getScaledValue(datosScada.d18, 1)}
        </text>
        <text
          transform="translate(1344.892 1211.082)"
          className="st11 st24 st25">
          {" %"}
        </text>
        <text
          transform="translate(1307.08 1146.519)"
          className="st11 st9 st20">
          {"LT-001"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(18, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(18, "Nivel Estanque TK-002");
        }}>
        <path d="M1279.8 1197.4c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M1278.1 1196.4c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM1289.4 1195.1c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M1290 1193.3c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM1290.9 1202.4v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1285.9 1209.9c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Nivel Estanque TK-002 */}

      <text
        transform="translate(433.658 800.747)"
        className="st21">
        <tspan
          x={0}
          y={0}
          className="st11 st9 st34">
          {"F-003"}
        </tspan>
        <tspan
          x={-2.8}
          y={11}
          className="st11 st9 st34">
          {"AgPlus"}
        </tspan>
      </text>

      <text
        transform="translate(648.305 800.747)"
        className="st21">
        <tspan
          x={0}
          y={0}
          className="st11 st9 st34">
          {"F-004"}
        </tspan>
        <tspan
          x={-2.8}
          y={11}
          className="st11 st9 st34">
          {"AgPlus"}
        </tspan>
      </text>

      <text
        transform="translate(865.094 800.747)"
        className="st21">
        <tspan
          x={0}
          y={0}
          className="st11 st9 st34">
          {"F-005"}
        </tspan>
        <tspan
          x={-2.8}
          y={11}
          className="st11 st9 st34">
          {"AgPlus"}
        </tspan>
      </text>

      <text
        transform="translate(1079.74 800.747)"
        className="st21">
        <tspan
          x={0}
          y={0}
          className="st11 st9 st34">
          {"F-006"}
        </tspan>
        <tspan
          x={-2.8}
          y={11}
          className="st11 st9 st34">
          {"AgPlus"}
        </tspan>
      </text>

      <text
        transform="translate(153.198 1334.468)"
        className="st21">
        <tspan
          x={0}
          y={0}
          className="st11 st9 st34">
          {"F-007"}
        </tspan>
        <tspan
          x={2.2}
          y={11}
          className="st11 st9 st34">
          {"GAC"}
        </tspan>
      </text>

      <text
        transform="translate(356.6 1334.468)"
        className="st21">
        <tspan
          x={0}
          y={0}
          className="st11 st9 st34">
          {"F-008"}
        </tspan>
        <tspan
          x={2.2}
          y={11}
          className="st11 st9 st34">
          {"GAC"}
        </tspan>
      </text>

      <text
        transform="translate(559.937 1334.468)"
        className="st21">
        <tspan
          x={0}
          y={0}
          className="st11 st9 st34">
          {"F-009"}
        </tspan>
        <tspan
          x={2.2}
          y={11}
          className="st11 st9 st34">
          {"GAC"}
        </tspan>
      </text>

      <text
        transform="translate(763.34 1334.468)"
        className="st21">
        <tspan
          x={0}
          y={0}
          className="st11 st9 st34">
          {"F-010"}
        </tspan>
        <tspan
          x={2.2}
          y={11}
          className="st11 st9 st34">
          {"GAC"}
        </tspan>
      </text>

      <text
        transform="translate(963.942 1334.468)"
        className="st21">
        <tspan
          x={0}
          y={0}
          className="st11 st9 st34">
          {"F-011"}
        </tspan>
        <tspan
          x={2.2}
          y={11}
          className="st11 st9 st34">
          {"GAC"}
        </tspan>
      </text>
    </svg>
  );
};

export default ScadaSesamar;

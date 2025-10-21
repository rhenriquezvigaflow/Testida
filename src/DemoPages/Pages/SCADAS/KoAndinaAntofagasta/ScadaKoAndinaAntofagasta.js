import * as React from "react";
import {
  getColor,
  getColorConexion,
  getConexion,
  getScaledValue,
  getTarjetaClass,
  getTemaAlarma
} from "../../../../commons/scada/scada";

const ScadaKoAndinaAntofagasta = (props) => {
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
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x={0}
      y={0}
      viewBox="0 0 1429.5 2375.3"
      style={{
        enableBackground: "new 0 0 1429.5 2375.3"
      }}
      xmlSpace="preserve"
      {...props}>
      <style>
        {
          ".st0{fill:none;stroke:#00aeed;stroke-width:4;stroke-miterlimit:10}.st1{fill:#fff}.st2{opacity:.15;enable-background:new}.st2,.st3{fill:#0e76e7}.st5{font-size:13px}.st6{fill:#606060}.st7{font-size:16px}.st8{font-size:11px}.st10,.st9{fill:none;stroke:#35ace8;stroke-width:4;stroke-miterlimit:10}.st10{stroke:#cbcbcb;stroke-width:2}.st11{fill:#cbcbcb}.st12{fill:#00aeed}.st13,.st14{fill:none;stroke-miterlimit:10}.st13{stroke:#00aeed;stroke-width:4;stroke-linejoin:round}.st14{stroke:#35ace8;stroke-width:4.14}.st17{fill:#3574e0}.st20{fill:#666}.st21{font-size:14px}.st23{font-size:17px}.st24{fill:#00e098}.st26{fill:none;stroke:#2f3e49;stroke-width:4;stroke-miterlimit:10}.st27{fill:#323e48}.st28,.st29,.st30{fill:none;stroke:#323e48;stroke-width:4;stroke-miterlimit:10}.st29,.st30{stroke:#fff;stroke-width:2}.st30{stroke:#a2aae0}.st31{fill:#a2aae0}.st32{fill:#fff;stroke:#35ace8;stroke-width:4;stroke-miterlimit:10}.st33{fill:#2f3e49}.st34,.st35{fill:#fff;stroke:#35ace8;stroke-width:4.0003;stroke-miterlimit:10.0005}.st35{stroke-width:4.0002;stroke-miterlimit:10.0006}.st36{fill:#02cd98;stroke:#fff;stroke-width:3;stroke-miterlimit:10}.st38{fill:#00a39b}.st39{fill:#fff;stroke:#35ace8;stroke-width:4.0001;stroke-miterlimit:10.0002}.st40{enable-background:new}.tarjeta{fill:#ffffff}.tarjetaSeleccionada{fill:#3574e0;opacity:.15}.cursorPointer{cursor:pointer}.cursorNormal{cursor:default}.campana{fill:#3474E0;}.campana:hover{fill:#7c7c7c;}.campanaVacia{fill:#c2c2c1;}.campanaVacia:hover{fill:#7c7c7c;}.campanaDesconectada{fill:#c2c2c1;}"
        }
      </style>
      <path
        className="st0"
        d="M992.3 461v-23c0-2.8-2.2-5-5-5H857.8M869.9 434v27M899.4 433.7v27M928.9 433.7v27M958.4 433.7v27"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={162}
        height={144}
        xlinkHref="data:image/png;base64,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"
        transform="translate(583.67 1537.813) scale(.9698)"
      />
      <path
        className="st1"
        d="M644.6 1547.1h-45.1c-3.5 0-6.3 2.8-6.3 6.2V1655.7c0 3.5 2.8 6.3 6.2 6.3H653.2c1.3 0 2.5.4 3.5 1.3 6.4 6.7 6.4 6.7 12.9.2l.4-.3c1-.8 2.2-1.2 3.4-1.2h51.7c3.5 0 6.3-2.8 6.3-6.2V1553.4c0-3.5-2.8-6.3-6.2-6.3h-80.6z"
      />

      {/* E.C. Permeado */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(10, "E.C. Permeado", false)}>
        <path
          className={getTarjetaClass(10, selected)}
          d="M593.2 1554.5h138.1v99.8H593.2z"
        />
        <text
          transform="translate(652.824 1599.18)"
          className="st3 st5">
          {"E.C"}
        </text>
        <text
          transform="translate(633.67 1614.78)"
          className="st3 st5">
          {"Permeado"}
        </text>
        <text
          transform="translate(640.725 1640.932)"
          className="st6 st7">
          {getScaledValue(datosScada.d10, 1)}
        </text>
        <text
          transform="translate(647.154 1579.433)"
          className="st6 st8">
          {"AE005"}
        </text>
        <text
          transform="translate(681.27 1640.848)"
          className="st6 st5">
          {"uS/cm"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(10, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(10, "E.C. Permeado");
        }}>
        <path d="M609.3 1631.2c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5s1.1-1.3 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
        <path d="M607.6 1630.2c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-2.9 1.6-3.7 3zM618.9 1628.9c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-.9-1.5-1.7-2.5-2.2z" />
        <path d="M619.5 1627.1c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.2.5 2.3 1.4 3 2.5.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM620.4 1636.2v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM615.4 1643.7c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin E.C. Permeado */}

      <path
        className="st9"
        d="M176.6 1696.1h344.1"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={161}
        height={143}
        xlinkHref="data:image/png;base64,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"
        transform="translate(201.417 1044.233) scale(.9762)"
      />
      <path
        className="st1"
        d="M262.3 1053.5h-45.1c-3.5 0-6.3 2.8-6.3 6.2V1162.1c0 3.5 2.8 6.3 6.2 6.3H270.9c1.3 0 2.5.4 3.5 1.3 6.4 6.7 6.4 6.7 12.9.2l.4-.3c1-.8 2.2-1.2 3.4-1.2h51.7c3.5 0 6.3-2.8 6.3-6.2V1059.8c0-3.5-2.8-6.3-6.2-6.3h-80.6z"
      />

      {/* Temperatura */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(13, "Temperatura", false)}>
        <path
          className={getTarjetaClass(13, selected)}
          d="M210.9 1060.9H349v99.8H210.9z"
        />
        <text
          transform="translate(244.208 1103.94)"
          className="st3 st5">
          {"Temperatura"}
        </text>
        <text
          transform="translate(265.127 1147.237)"
          className="st6 st7">
          {getScaledValue(datosScada.d13, 1)}
        </text>
        <text
          transform="translate(264.801 1085.587)"
          className="st6 st8">
          {"TT001"}
        </text>
        <text
          transform="translate(321.431 1147.237)"
          className="st6 st5">
          {"C\xB0"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(13, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(13, "Temperatura");
        }}>
        <path d="M227.1 1137.6c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5s1.1-1.3 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
        <path d="M225.4 1136.6c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-2.9 1.6-3.7 3zM236.7 1135.3c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-.9-1.5-1.7-2.5-2.2z" />
        <path d="M237.3 1133.5c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.2.5 2.3 1.4 3 2.5.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM238.2 1142.6v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM233.2 1150.1c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Temperatura */}

      <path
        className="st10"
        d="M1061.8 851v9.2c0 5.1 4.5 9.2 10 9.2l62.2-.2"
      />
      <path
        className="st11"
        d="m1132.5 865 3.2 3.2c.5.7.5 1.6-.1 2.2l-3.1 3.1c-.3.3-.7.5-1.1.5-.9 0-1.6-.7-1.6-1.6v-6.3c0-.9.7-1.6 1.6-1.6.4 0 .8.2 1.1.5z"
      />
      <path
        className="st1"
        d="M1131.4 873.1c-.3 0-.6-.3-.6-.6v-6.3c0-.4.3-.6.6-.6.2 0 .3.1.4.2l3.1 3.1c.2.3.2.6 0 .9l-3.1 3.1c-.1.1-.2.2-.4.2m0 2c.7 0 1.3-.3 1.8-.8l3.1-3.1c1-.9 1.1-2.5.2-3.5l-.1-.1-.1-.1-3.1-3.1c-.5-.5-1.1-.8-1.8-.8-1.4 0-2.6 1.2-2.6 2.6v6.3c0 1.4 1.2 2.6 2.6 2.6z"
      />
      <path
        className="st0"
        d="M1241.1 879.9V766.5c0-4.7 3.8-8.5 8.5-8.5h50.2M1214.4 905.1l-59.5-.3c-4.7 0-8.5-3.8-8.5-8.5V687.7"
      />
      <path
        className="st12"
        d="m1247.1 884.3-4.5 4.5-.1.1c-.8.6-1.9.6-2.6-.1l-4.5-4.5c-.3-.4-.5-.8-.5-1.3 0-1 .8-1.9 1.9-1.9h9c1 0 1.9.9 1.9 1.9 0 .5-.2 1-.6 1.3z"
      />
      <path
        className="st1"
        d="M1236 883c0-.6.5-.9 1-.9h9c.5 0 .9.4.9.9 0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6m-2 0c0 .8.3 1.5.9 2l4.5 4.5c1.1 1.1 2.7 1.1 3.9.2l.1-.1.1-.1 4.5-4.5c.5-.5.8-1.3.8-2 0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9z"
      />
      <path
        className="st0"
        d="M992.3 447.7h89.5c4.7 0 8.5 3.8 8.5 8.5v40.9"
      />
      <path
        className="st13"
        d="M1046.4 630.7h-6.8c-4.7 0-8.5-3.8-8.5-8.5v-63.6H845.6"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={161}
        height={143}
        xlinkHref="solicitudscadaida/48088BE4.png"
        transform="rotate(180 2501.464 610.849) scale(.9762)"
      />
      <path
        className="st1"
        d="M4942 1212.5h45.1c3.5 0 6.3-2.8 6.3-6.2V1103.9c0-3.5-2.8-6.3-6.2-6.3H4933.4c-1.3 0-2.5-.4-3.5-1.3-6.4-6.7-6.4-6.7-12.9-.2l-.4.3c-1 .8-2.2 1.2-3.4 1.2h-51.7c-3.5 0-6.3 2.8-6.3 6.2V1206.2c0 3.5 2.8 6.3 6.2 6.3h80.6z"
      />
      <path
        className="st2"
        d="M4855.3 1105.3h138.1v99.8h-138.1z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={161}
        height={143}
        xlinkHref="solicitudscadaida/48088BE5.png"
        transform="rotate(180 2756.818 1314.284) scale(.9762)"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={161}
        height={143}
        xlinkHref="solicitudscadaida/48088BE6.png"
        transform="rotate(180 2652.352 1314.197) scale(.9762)"
      />
      <path
        className="st14"
        d="M5224.8 2466.1V2438c0-5.5 4.5-10 10-10h190.7c5.5 0 10 4.5 10 10v29.3"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.2,
          enableBackground: "new"
        }}
        width={289}
        height={179}
        xlinkHref="data:image/png;base64,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 gg=="
        transform="translate(1102.81 37.758) scale(.9831)"
      />
      <path
        className="st1"
        d="M1376.2 207.4H1113c-3.4 0-6.1-2.7-6.1-6.1V49.7c0-3.4 2.7-6.1 6.1-6.1h263.2c3.4 0 6.1 2.7 6.1 6.1v151.5c0 3.4-2.7 6.2-6.1 6.2z"
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
        className="st1"
        d="M256.2 151.5H47.4c-3.4 0-6.1-2.8-6.1-6.1V49.7c0-3.4 2.8-6.1 6.1-6.1h208.7c3.4 0 6.1 2.8 6.1 6.1v95.6c.1 3.4-2.7 6.2-6 6.2z"
      />
      <circle
        cx={1143}
        cy={178.8}
        r={8}
        style={{
          fill: "#b4002b" //Ñ
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
        className="st17"
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
        transform="translate(1160.93 105.91)"
        className="st20 st21">
        {"Funcionando"}
      </text>
      <text
        transform="translate(1160.93 125.91)"
        className="st20 st21">
        {"Movi\xE9ndose"}
      </text>
      <text
        transform="translate(1160.93 145.91)"
        className="st20 st21">
        {"Falla"}
      </text>
      <text
        transform="translate(1160.93 165.91)"
        className="st20 st21">
        {"Bloqueada"}
      </text>
      <text
        transform="translate(1160.93 185.91)"
        className="st20 st21">
        {"Detenida"}
      </text>
      <text
        transform="translate(75.5 77.73)"
        className="st6 st21">
        {"Conectividad de Planta"}
      </text>
      <text
        transform="translate(109.29 128.21)"
        className="st6 st23">
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
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAnCAYAAACIVoEIAAAACXBIWXMAAArrAAAK6wGCiw1aAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7VJREFUeNrsmIlu2kAURT2eMVsg oaFtklaV+v+/1YW2KVkAsxnsjqv7osurV6JGqlSkK4yxx8dvt4Pg/+cf/pi/vE720lCm5LsIKmsD aJ4BE2Lb0LYGypUqqKzOiuZEGJFVCumCOcyBlJICgv3j41oAMUx+XkcpIosJUOK1gxLoQGBZkWub WKoIpuc1gIZefa8u/jcEtPFaQyt8b732CvDIaq4hkFUw59AYGmE/Q20BsSA9es3x34YAj9zpalwm botgjRzk0mvi9drrDX7n+89wHEOtAPHgde/102vmFWP/EuBHieAaxFAEK1x4vfW69rqBGGqgoHZk qXvAvIK7H+Fuo+LqUGUpsZKDy4awzHuvD9AN9o1hJY6pDDHD1poAPrf4HW5AZ+jvrHUVQJbcNoaV cqiPgLrG/iHAOfsylX3niLs+jhvhuB3AdxT4gauJpQ4umpv9yusdwMRKIwKylM3iji4u1sNaFv/3 sH8JrSjoS2NK0r+PC18ifq5gsQlirK8sZAoquiO3BoAJEW+SAI8Ayy12cDVW0lAT5bJOCVCggjii tB9jO0bw3yLG5gBNXEU8SZCPqB4xkKMMbdKaHNx5RnBjWPxozaqYiqhYDqEBZZlt2BE0GBfhEXWE jkCFBTBGtZUuTuoroLBFQ9d1T8B6WPcoe8OaRSwF6ikwVXAOIBwGJqiJhyKXvsgnrBhjM+rgPBNl z7iebin7onXDihPlJKm6WzVutBlxGSahFsTr7mXdsODEgKB2GDFW0EYt0AYopTlK5qwYksK511B6 jN3jLmKah2TUSBq6U99kAoAlqvgDimYM0H1ZQw7orja0wD0WuUAKW5okwhooCQOZGGSUucP2knpf amsaskwKXaonHUplQ+2kyOLsshg3dYth76vXJ3zPCOxga9KfW05E31Ydl5ZkK89UApRDfPf67PUF 29KQkzJL6equf5uSx6hEZZYkiEyeP7ymsM4UcFO48MlK+bq2wdOvoQrs1CiiEyOhErKmWVzm828A 0dPBhjPaVQQox4OYX4I6pSTQ06dV43AM98wI6gGQCyozT7XP1WRNijvngJasXOBCY+r00lQZirN3 BhjZtyC3NXrEyqhAblWt2cDs5/TM11NQXOeWOH5O1llRNT+qd6ZFZ7c0yvRonJEZq6PGXrmBNUGs yV3cGVpD6ZGDS4TUrEgV0br3CRk/Up3yLqGoqIZUw6x638BQWcmbl6zs5cYp76fK6pZWVtCMgzqY 577JK3p7ZypenAVt3uj9EmAAVGPAlKf0B2IAAAAASUVORK5CYII="
        transform="translate(66.583 102.711) scale(1.0206)"
      />
      <circle
        className="st1"
        cx={85.5}
        cy={122.2}
        r={12.1}
      />

      <circle
        style={{
          fill: getColorConexion(datosScada.con)
        }}
        cx={85.5}
        cy={122.1}
        r={8.9}
      />

      <text
        transform="translate(1134.97 77.73)"
        className="st6 st21">
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
        className="st0"
        d="M33.3 425.5h57.5c4.7 0 8.5 3.8 8.5 8.5v38.3"
      />
      <path
        className="st3"
        d="M62.3 486.9h124.8v97.7H62.3z"
      />
      <path
        className="st26"
        d="M186.9 470.6v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1V470.6"
      />
      <path
        className="st12"
        d="M230.6 586.3c-1 0-1.9-.9-1.9-1.9v-9c0-1.1.9-1.9 1.9-1.9.5 0 .9.2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.4-.8.6-1.3.6z"
      />
      <path
        className="st1"
        d="M230.6 574.6c.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.5.3-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.7 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.8-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st0"
        d="M194.2 579.4h33.5"
      />
      <path
        className="st12"
        d="M92.7 475.4c0-1 .9-1.9 1.9-1.9h9c1.1 0 1.9.9 1.9 1.9 0 .5-.2.9-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.4-.3-.6-.8-.6-1.3z"
      />
      <path
        className="st1"
        d="M104.4 475.4c0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.5.4-.9.9-.9h9c.5 0 1 .3 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .7.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.8.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <text
        transform="translate(241.827 606.544)"
        className="st6 st8">
        {"P-001"}
      </text>
      <text
        transform="translate(126.77 1745.96)"
        className="st6 st8">
        {"P-008"}
      </text>
      <text
        transform="translate(994.437 2240.374)"
        className="st6 st8">
        {"P-010"}
      </text>
      <text
        transform="translate(1230.17 953.919)"
        className="st6 st8">
        {"P-009"}
      </text>
      <text
        transform="translate(1230.37 1260.285)"
        className="st6 st8">
        {"P-005"}
      </text>
      <text
        transform="translate(777.008 588.884)"
        className="st6 st8">
        {"VN101"}
      </text>
      <text
        transform="translate(742.377 812.599)"
        className="st6 st8">
        {"VN102"}
      </text>
      <text
        transform="translate(4887.243 1151.064)"
        className="st3 st5">
        {"T"}
      </text>
      <text
        transform="translate(4893.743 1151.064)"
        className="st3 st5">
        {"emperatura"}
      </text>
      <path
        className="st3"
        d="M4871 1178.3c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-2 1.3-2.5 2.3z"
      />
      <path
        className="st3"
        d="M4869.3 1177.3c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.6-2.9 1.7-3.7 3.1zM4880.6 1176c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.8-2.5-2.3z"
      />
      <path
        className="st3"
        d="M4881.2 1174.2c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6s.9 2.6.7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-.9-1.3-2.2-2.4-3.7-3.1zM4882.1 1183.3v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM4877.1 1190.8c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z"
      />
      <text
        transform="translate(4903.273 1188.384)"
        className="st6 st7">
        {"000.0"}
      </text>
      <text
        transform="translate(4965.163 1187.994)"
        className="st6 st5">
        {"\xB0C"}
      </text>
      <text
        transform="translate(4910.644 1129.224)"
        className="st6 st8">
        {"TT206"}
      </text>
      <path
        className="st0"
        d="M284.6 557.2h166.5"
      />
      <path
        className="st27"
        d="M797.9 549.1h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM782.7 553l7.9 4.6c.4.2.5.7.3 1l-.3.3-7.9 4.6c-.4.2-.9.1-1.1-.3-.1-.1-.1-.2-.1-.4v-9.2c.1-.4.5-.8.9-.7.1 0 .2 0 .3.1z"
      />
      <path
        className="st27"
        d="m798.3 563.6-7.9-4.6c-.4-.2-.5-.7-.3-1l.3-.3 7.9-4.6c.4-.2.9-.1 1.1.3.1.1.1.2.1.4v9.2c-.1.4-.5.8-.9.7-.1 0-.2 0-.3-.1z"
      />
      <path
        className="st28"
        d="M790.5 548.1v10"
      />
      <path
        className="st29"
        d="M781.5 540.1h18M790.5 541.1v8"
      />
      <path
        className="st10"
        d="M626.2 545.8V283.7H165.1"
      />
      <path
        className="st11"
        d="M621.4 541.5c0-.9.7-1.6 1.6-1.6h6.3c.9 0 1.6.7 1.6 1.6 0 .4-.2.8-.5 1.1l-3.1 3.1c-.6.6-1.5.6-2.2.1l-3.2-3.2c-.3-.3-.5-.7-.5-1.1z"
      />
      <path
        className="st1"
        d="M630 541.5c0 .2-.1.3-.2.4l-3.1 3.1c-.3.2-.6.2-.9 0l-3.1-3.1c-.1-.1-.2-.2-.2-.4 0-.3.2-.6.6-.6h6.3c.3 0 .6.3.6.6m2 0c0-1.4-1.2-2.6-2.6-2.6h-6.3c-1.4 0-2.6 1.2-2.6 2.6 0 .7.3 1.3.8 1.8l3.1 3.1.1.1.1.1c1 .9 2.6.8 3.5-.2l3.1-3.1c.5-.5.8-1.1.8-1.8z"
      />
      <path
        className="st30"
        d="M777.5 787.8h54.7V576.7"
      />
      <path
        className="st31"
        d="m827.9 573 3.2-3.2c.7-.5 1.6-.5 2.2.1l3.1 3.1c.3.3.5.7.5 1.1 0 .9-.7 1.6-1.6 1.6H829c-.9 0-1.6-.7-1.6-1.6 0-.4.2-.8.5-1.1z"
      />
      <path
        className="st1"
        d="M836 574.1c0 .3-.3.6-.6.6h-6.3c-.4 0-.6-.3-.6-.6 0-.2.1-.3.2-.4l3.1-3.1c.3-.2.6-.2.9 0l3.1 3.1c.1.1.2.2.2.4m2 0c0-.7-.3-1.3-.8-1.8l-3.1-3.1c-.9-1-2.5-1.1-3.5-.2l-.1.1-.1.1-3.1 3.1c-.5.5-.8 1.1-.8 1.8 0 1.4 1.2 2.6 2.6 2.6h6.3c1.4 0 2.6-1.2 2.6-2.6z"
      />
      <path
        className="st31"
        d="m488.5 989.2 3.2 3.2c.5.7.5 1.6-.1 2.2l-3.1 3.1c-.3.3-.7.5-1.1.5-.9 0-1.6-.7-1.6-1.6v-6.3c0-.9.7-1.6 1.6-1.6.4 0 .8.2 1.1.5z"
      />
      <path
        className="st1"
        d="M487.4 997.3c-.3 0-.6-.3-.6-.6v-6.3c0-.4.3-.6.6-.6.2 0 .3.1.4.2l3.1 3.1c.2.3.2.6 0 .9l-3.1 3.1c-.1.1-.2.2-.4.2m0 2c.7 0 1.3-.3 1.8-.8l3.1-3.1c1-.9 1.1-2.5.2-3.5l-.1-.1-.1-.1-3.1-3.1c-.5-.5-1.1-.8-1.8-.8-1.4 0-2.6 1.2-2.6 2.6v6.3c0 1.4 1.2 2.6 2.6 2.6z"
      />
      <path
        className="st30"
        d="M298.5 787.9h-32v130H113M739.9 787.9H338.8"
      />
      <path
        className="st9"
        d="M6479.7 2207.8H5167.2c-5.5 0-10 4.5-10 10v238.6c0 5.4 4.4 9.8 9.8 9.8h139.8"
      />
      <path
        className="st13"
        d="M857.8 433h-6.9c-2.8 0-5 2.2-5 5v120.6H808"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={165}
        height={149}
        xlinkHref="data:image/png;base64,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"
        transform="translate(5356.838 2051.724) scale(.9407)"
      />
      <path
        className="st1"
        d="M5414.9 2061.2h-43.1c-3.5 0-6.3 2.8-6.3 6.2V2169.8c0 3.5 2.8 6.3 6.2 6.3H5423.5c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.2V2067.5c0-3.5-2.8-6.3-6.2-6.3h-82.6z"
      />
      <path
        className="st2"
        d="M5365.6 2068.6h138.1v99.8h-138.1z"
      />
      <text
        transform="translate(5412.851 2108.241)"
        className="st3 st5">
        {"E.C. de"}
      </text>
      <text
        transform="translate(5399.131 2125.041)"
        className="st3 st5">
        {"Alimentaci\xF3n"}
      </text>
      <path
        className="st3"
        d="M5381.7 2142.4c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-2 1.3-2.5 2.3z"
      />
      <path
        className="st3"
        d="M5380 2141.4c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.6-2.9 1.7-3.7 3.1zM5391.3 2140.1c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.8-2.5-2.3z"
      />
      <path
        className="st3"
        d="M5391.9 2138.3c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-.9-1.4-2.2-2.5-3.7-3.1zM5392.8 2147.4v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM5387.8 2154.9c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z"
      />
      <text
        transform="translate(5406.661 2153.551)"
        className="st6 st7">
        {"00.00"}
      </text>
      <text
        transform="translate(5452.933 2153.161)"
        className="st6 st5">
        {"\xB5S/cm"}
      </text>
      <text
        transform="translate(5419.831 2088.392)"
        className="st6 st8">
        {"AE201"}
      </text>
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={165}
        height={149}
        xlinkHref="data:image/png;base64,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"
        transform="translate(640.135 386.217) scale(.9575)"
      />
      <path
        className="st1"
        d="M701.6 398.2h-43.1c-3.5 0-6.3 2.8-6.3 6.2V506.8c0 3.5 2.8 6.3 6.2 6.3H710.2c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.2V404.5c0-3.5-2.8-6.3-6.2-6.3h-82.6z"
      />

      {/* pH Entrada UF */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(12, "pH Entrada UF", false)}>
        <path
          className={getTarjetaClass(12, selected)}
          d="M652.3 405.6h138.1v99.8H652.3z"
        />
        <text
          transform="translate(713.033 448.397)"
          className="st3 st5">
          {"pH"}
        </text>
        <text
          transform="translate(688.105 465.196)"
          className="st3 st5">
          {"Entrada UF"}
        </text>
        <text
          transform="translate(701.322 491.706)"
          className="st6 st7">
          {getScaledValue(datosScada.d12, 1)}
        </text>
        <text
          transform="translate(704.836 429.548)"
          className="st6 st8">
          {"AE001"}
        </text>
        <text
          transform="translate(761.57 491.316)"
          className="st6 st5">
          {"pH"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(12, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(12, "pH Entrada UF");
        }}>
        <path d="M664.4 482c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-2 1.3-2.5 2.3z" />
        <path d="M662.7 481c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.6-2.9 1.7-3.7 3.1zM674 479.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.8-2.5-2.3z" />
        <path d="M674.6 477.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6s.9 2.6.7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-.9-1.4-2.2-2.5-3.7-3.1zM675.5 487v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM670.5 494.5c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin pH Entrada UF */}

      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={165}
        height={149}
        xlinkHref="data:image/png;base64,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"
        transform="translate(400.089 318.034) scale(.9575)"
      />
      <path
        className="st1"
        d="M461.6 330h-43.1c-3.5 0-6.3 2.8-6.3 6.2V438.6c0 3.5 2.8 6.3 6.2 6.3H470.2c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.2V336.3c0-3.5-2.8-6.3-6.2-6.3h-82.6z"
      />

      {/* Diferencial de Presión F-001 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(16, "Diferencial de Presión F-001", false)}>
        <path
          className={getTarjetaClass(16, selected)}
          d="M412.3 337.4h138.1v99.8H412.3z"
        />
        <text
          transform="translate(443.502 381.214)"
          className="st3 st5">
          {"Diferencial de"}
        </text>
        <text
          transform="translate(442.42 396.814)"
          className="st3 st5">
          {"Presi\xF3n F-001"}
        </text>
        <text
          transform="translate(463.225 422.523)"
          className="st6 st7">
          {getScaledValue(datosScada.d16, 1)}
        </text>
        <text
          transform="translate(468.877 363.365)"
          className="st6 st8">
          {"F-001"}
        </text>
        <text
          transform="translate(517.524 423.133)"
          className="st6 st5">
          {"bar"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(16, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(16, "Diferencial de Presión F-001");
        }}>
        <path d="M424.3 413.4c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .5-2 1.3-2.5 2.3z" />
        <path d="M422.6 412.4c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.8 1.7-3.7 3.1zM434 411.1c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.8-2.5-2.3z" />
        <path d="M434.6 409.3c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6s.9 2.6.7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.4-2.2-2.5-3.7-3.1zM435.5 418.4v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM430.5 425.9c.9 0 1.7-.8 1.7-1.7h-3.3c-.1.9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Diferencial de Presión F-001 */}

      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={165}
        height={149}
        xlinkHref="data:image/png;base64,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"
        transform="rotate(180 219.347 365.166) scale(.9575)"
      />
      <path
        className="st1"
        d="M378.6 718.9h43.1c3.5 0 6.3-2.8 6.3-6.2V610.3c0-3.5-2.8-6.3-6.2-6.3H370c-1.2 0-2.4-.4-3.4-1.2l-.4-.3c-6.5-6.5-6.5-6.5-12.9.2-1 .9-2.2 1.3-3.5 1.3h-53.7c-3.5 0-6.3 2.8-6.3 6.2V712.6c0 3.5 2.8 6.3 6.2 6.3h82.6z"
      />

      {/* Presión Pre UF */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(2, "Presión Pre UF", false)}>
        <path
          className={getTarjetaClass(2, selected)}
          d="M289.8 611.7h138.1v99.8H289.8z"
        />
        <text
          transform="translate(338.166 648.844)"
          className="st3 st5">
          {"Presi\xF3n "}
        </text>
        <text
          transform="translate(341.466 664.444)"
          className="st3 st5">
          {"Pre UF"}
        </text>
        <text
          transform="translate(341.991 690.153)"
          className="st6 st7">
          {getScaledValue(datosScada.d2, 1)}
        </text>
        <text
          transform="translate(345.806 630.995)"
          className="st6 st8">
          {"PT001"}
        </text>
        <text
          transform="translate(395.142 690.763)"
          className="st6 st5">
          {"bar"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(2, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(2, "Presión Pre UF");
        }}>
        <path d="M301.9 681c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .5-2 1.3-2.5 2.3z" />
        <path d="M300.2 680c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.8 1.7-3.7 3.1zM311.6 678.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.8-2.5-2.3z" />
        <path d="M312.2 676.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6s.9 2.6.7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.4-2.2-2.5-3.7-3.1zM313.1 686v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM308.1 693.5c.9 0 1.7-.8 1.7-1.7h-3.3c-.1.9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presión Pre UF */}

      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={165}
        height={149}
        xlinkHref="data:image/png;base64,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"
        transform="rotate(180 341.047 365.166) scale(.9575)"
      />
      <path
        className="st1"
        d="M622 718.9h43.1c3.5 0 6.3-2.8 6.3-6.2V610.3c0-3.5-2.8-6.3-6.2-6.3H613.4c-1.2 0-2.4-.4-3.4-1.2l-.4-.3c-6.5-6.5-6.5-6.5-12.9.2-1 .9-2.2 1.3-3.5 1.3h-53.7c-3.5 0-6.3 2.8-6.3 6.2V712.6c0 3.5 2.8 6.3 6.2 6.3H622z"
      />

      {/* Presión Post UF */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(3, "Presión Post UF", false)}>
        <path
          className={getTarjetaClass(3, selected)}
          d="M533.2 611.7h138.1v99.8H533.2z"
        />
        <text
          transform="translate(581.566 648.844)"
          className="st3 st5">
          {"Presi\xF3n "}
        </text>
        <text
          transform="translate(581.966 664.444)"
          className="st3 st5">
          {"Post UF"}
        </text>
        <text
          transform="translate(585.391 690.153)"
          className="st6 st7">
          {getScaledValue(datosScada.d3, 1)}
        </text>
        <text
          transform="translate(589.206 630.995)"
          className="st6 st8">
          {"PT002"}
        </text>
        <text
          transform="translate(638.542 690.763)"
          className="st6 st5">
          {"bar"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(3, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(3, "Presión Post UF");
        }}>
        <path d="M545.3 681c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .5-2 1.3-2.5 2.3z" />
        <path d="M543.6 680c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.8 1.7-3.7 3.1zM555 678.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.8-2.5-2.3z" />
        <path d="M555.6 676.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6s.9 2.6.7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.4-2.2-2.5-3.7-3.1zM556.5 686v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM551.5 693.5c.9 0 1.7-.8 1.7-1.7h-3.3c-.1.9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presión Post UF */}

      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={165}
        height={149}
        xlinkHref="data:image/png;base64,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"
        transform="rotate(180 288.597 473.296) scale(.9575)"
      />
      <path
        className="st1"
        d="M517.1 935.1h43.1c3.5 0 6.3-2.8 6.3-6.2V826.5c0-3.5-2.8-6.3-6.2-6.3H508.5c-1.2 0-2.4-.4-3.4-1.2l-.4-.3c-6.5-6.5-6.5-6.5-12.9.2-1 .9-2.2 1.3-3.5 1.3h-53.7c-3.5 0-6.3 2.8-6.3 6.2V928.8c0 3.5 2.8 6.3 6.2 6.3h82.6z"
      />

      {/* Presión Aire UF */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(20, "Presión Aire UF", false)}>
        <path
          className={getTarjetaClass(20, selected)}
          d="M428.3 827.9h138.1v99.8H428.3z"
        />
        <text
          transform="translate(476.666 865.105)"
          className="st3 st5">
          {"Presi\xF3n "}
        </text>
        <text
          transform="translate(478.466 880.705)"
          className="st3 st5">
          {"Aire UF"}
        </text>
        <text
          transform="translate(480.491 906.414)"
          className="st6 st7">
          {getScaledValue(datosScada.d20, 1)}
        </text>
        <text
          transform="translate(484.306 847.256)"
          className="st6 st8">
          {"PT005"}
        </text>
        <text
          transform="translate(533.642 907.024)"
          className="st6 st5">
          {"bar"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(20, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(20, "Presión Aire UF");
        }}>
        <path d="M440.4 897.3c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .5-2 1.3-2.5 2.3z" />
        <path d="M438.7 896.3c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.8 1.7-3.7 3.1zM450.1 895c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.8-2.5-2.3z" />
        <path d="M450.7 893.2c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6s.9 2.6.7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.4-2.2-2.5-3.7-3.1zM451.6 902.3v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM446.6 909.8c.9 0 1.7-.8 1.7-1.7H445c-.1.9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presión Aire UF */}

      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={165}
        height={149}
        xlinkHref="data:image/png;base64,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"
        transform="translate(1011.38 281.387) scale(.9575)"
      />
      <path
        className="st1"
        d="M1072.9 293.4h-43.1c-3.5 0-6.3 2.8-6.3 6.2V402c0 3.5 2.8 6.3 6.2 6.3H1081.5c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.2V299.7c0-3.5-2.8-6.3-6.2-6.3h-82.6z"
      />

      {/* TM UF */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(15, "TM UF", false)}>
        <path
          className={getTarjetaClass(15, selected)}
          d="M1023.6 300.8h138.1v99.8h-138.1z"
        />
        <text
          transform="translate(1085.97 344.567)"
          className="st3 st5">
          {"TM"}
        </text>
        <text
          transform="translate(1086.69 361.366)"
          className="st3 st5">
          {"UF"}
        </text>
        <text
          transform="translate(1075.335 386.876)"
          className="st6 st7">
          {getScaledValue(datosScada.d15, 1)}
        </text>
        <text
          transform="translate(1058.058 324.718)"
          className="st6 st8">
          {"PT002 - PT003"}
        </text>
        <text
          transform="translate(1129.207 387.433)"
          className="st6 st5">
          {"bar"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(15, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(15, "TM UF");
        }}>
        <path d="M1035.7 376.8c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-2 1.3-2.5 2.3z" />
        <path d="M1034 375.8c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.6-2.9 1.7-3.7 3.1zM1045.3 374.5c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.8-2.5-2.3z" />
        <path d="M1045.9 372.7c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6s.9 2.6.7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-.9-1.4-2.2-2.5-3.7-3.1zM1046.8 381.8v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM1041.8 389.3c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin TM UF */}

      <circle
        className="st32"
        cx={5433.4}
        cy={2208.1}
        r={9.2}
      />
      <circle
        className="st32"
        cx={4779.3}
        cy={1216.9}
        r={9.2}
      />
      <circle
        className="st32"
        cx={5224.6}
        cy={2209.1}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={162}
        height={144}
        xlinkHref="solicitudscadaida/693C2E0F.png"
        transform="translate(5147.536 2049.681) scale(.9694)"
      />
      <path
        className="st1"
        d="M5206.5 2058.9h-43.1c-3.5 0-6.3 2.8-6.3 6.2V2167.5c0 3.5 2.8 6.3 6.2 6.3H5215.1c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.2V2065.2c0-3.5-2.8-6.3-6.2-6.3h-82.6z"
      />
      <path
        className="st2"
        d="M5157.2 2066.3h138.1v99.8h-138.1z"
      />
      <text
        transform="translate(5213.11 2108.891)"
        className="st3 st5">
        {"OR"}
      </text>
      <text
        transform="translate(5232.61 2108.891)"
        className="st3 st5">
        {"P"}
      </text>
      <text
        transform="translate(5189.88 2125.69)"
        className="st3 st5">
        {"Alimentaci\xF3n"}
      </text>
      <path
        className="st3"
        d="M5173.6 2141.1c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-2 1.3-2.5 2.3z"
      />
      <path
        className="st3"
        d="M5171.9 2140.1c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.6-2.9 1.7-3.7 3.1zM5183.1 2138.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.5-1-1.4-1.8-2.5-2.3z"
      />
      <path
        className="st3"
        d="M5183.7 2137c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-.9-1.4-2.1-2.4-3.7-3.1zM5184.7 2146.1v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.6 1.6-1.5v-.2c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM5179.7 2153.6c.9 0 1.7-.8 1.7-1.7h-3.3c-.1.9.6 1.7 1.6 1.7z"
      />
      <text
        transform="translate(5205.5 2153.21)"
        className="st6 st7">
        {"000.0"}
      </text>
      <text
        transform="translate(5261.76 2151.821)"
        className="st6 st5">
        {"mV"}
      </text>
      <text
        transform="translate(5210.58 2089.052)"
        className="st6 st8">
        {"AE202"}
      </text>
      <path
        className="st27"
        d="M5348.3 2460.5c0-6.7-7.8-12.1-17.5-12.1s-17.5 5.5-17.5 12.1h.1c-.1.4-.1.7-.1 1.1v37.6c0 3.5 3.4 6.4 7.6 6.8v6.2h5.2v-6.1h9v6.1h5.2v-6.2c4.5-.2 8-3.2 8-6.8v-37.6c0-.3-.1-.7 0-1.1z"
      />
      <circle
        className="st32"
        cx={5330.2}
        cy={2429}
        r={9.2}
      />
      <path
        className="st1"
        d="M5453.7 2619.1h45.1c3.5 0 6.3-2.8 6.3-6.2V2510.5c0-3.5-2.8-6.3-6.2-6.3H5445.1c-1.3 0-2.5-.4-3.5-1.3-6.4-6.7-6.4-6.7-12.9-.2l-.4.3c-1 .8-2.2 1.2-3.4 1.2h-51.7c-3.5 0-6.3 2.8-6.3 6.2V2612.8c0 3.5 2.8 6.3 6.2 6.3h80.6z"
      />
      <path
        className="st2"
        d="M5367 2511.9h138.1v99.8H5367z"
      />
      <text
        transform="translate(5413.119 2555.742)"
        className="st3 st5">
        {"Presi\xF3n"}
      </text>
      <text
        transform="translate(5402.649 2572.542)"
        className="st3 st5">
        {"Post Filtros"}
      </text>
      <path
        className="st3"
        d="M5383.1 2586.9c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-2 1.3-2.5 2.3z"
      />
      <path
        className="st3"
        d="M5381.4 2585.9c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.6-2.9 1.7-3.7 3.1zM5392.7 2584.6c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.8-2.5-2.3z"
      />
      <path
        className="st3"
        d="M5393.3 2582.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-.9-1.4-2.2-2.5-3.7-3.1zM5394.2 2591.9v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM5389.2 2599.4c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z"
      />
      <text
        transform="translate(5419.019 2598.051)"
        className="st6 st7">
        {"0.00"}
      </text>
      <text
        transform="translate(5472.29 2596.661)"
        className="st6 st5">
        {"bar"}
      </text>
      <text
        transform="translate(5419.359 2535.894)"
        className="st6 st8">
        {"PT0"}
      </text>
      <text
        transform="translate(5439.529 2535.894)"
        className="st6 st8">
        {"1"}
      </text>
      <text
        transform="translate(5444.839 2535.894)"
        className="st6 st8">
        {"1"}
      </text>
      <image
        style={{
          overflow: "visible",
          opacity: 0.2,
          enableBackground: "new"
        }}
        width={174}
        height={142}
        xlinkHref="solicitudscadaida/693C2E28.png"
        transform="translate(5244.76 2270.424) scale(.9839)"
      />
      <path
        className="st1"
        d="M5310.9 2279.7h-51.1c-3.5 0-6.3 2.8-6.3 6.2V2388.3c0 3.5 2.8 6.3 6.2 6.3H5319.5c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h61.7c3.5 0 6.3-2.8 6.3-6.2V2286c0-3.5-2.8-6.3-6.2-6.3h-90.6z"
      />
      <path
        className="st2"
        d="M5253.6 2287.1h154.1v99.8h-154.1z"
      />
      <text
        transform="translate(5267.359 2325.741)"
        className="st3 st5">
        {"Diferencial de Presi\xF3n"}
      </text>
      <path
        className="st3"
        d="M5277.7 2360.9c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-2 1.3-2.5 2.3z"
      />
      <path
        className="st3"
        d="M5276 2359.9c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.6-2.9 1.7-3.7 3.1zM5287.3 2358.6c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.8-2.5-2.3z"
      />
      <path
        className="st3"
        d="M5287.9 2356.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-.9-1.4-2.2-2.5-3.7-3.1zM5288.8 2365.9v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM5283.8 2373.4c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z"
      />
      <text
        transform="translate(5313.679 2372.051)"
        className="st6 st7">
        {"0.00"}
      </text>
      <text
        transform="translate(5366.949 2371.661)"
        className="st6 st5">
        {"bar"}
      </text>
      <text
        transform="translate(5309.739 2306.891)"
        className="st6 st8">
        {"DPP012"}
      </text>
      <text
        transform="translate(5281.099 2343.741)"
        className="st3 st5">
        {"Filtros Cartuchos"}
      </text>
      <path
        className="st9"
        d="M5354 2466.6h162.3"
      />
      <circle
        className="st32"
        cx={5435.7}
        cy={2466}
        r={9.2}
      />
      <path
        className="st33"
        d="M5566.6 2436h-17.4c-1.1-.3-2.3-.4-3.4-.4-8 0-14.6 6.5-14.6 14.5v.1c0 3.9 1.5 7.6 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.7-2.7 4.2-6.4 4.2-10.3 0-1.4-.2-2.8-.6-4.2h6.8c1.5 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        width={45}
        height={48}
        xlinkHref="solicitudscadaida/693C2E2A.png"
        transform="translate(5528.926 2432.661) scale(.7315)"
      />
      <circle
        className="st1"
        cx={5545.8}
        cy={2450.5}
        r={10.9}
      />
      <circle
        className="st2"
        cx={5545.8}
        cy={2450.3}
        r={8}
      />
      <text
        transform="translate(5531.249 2490.281)"
        className="st6 st8">
        {"P-002"}
      </text>
      <path
        className="st12"
        d="M5518.8 2473c-1 0-1.9-.9-1.9-1.9v-9c0-1.1.9-1.9 1.9-1.9.5 0 .9.2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.6-.8.6-1.3.6z"
      />
      <path
        className="st1"
        d="M5518.8 2461.3c.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.5.3-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.7 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.8-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st0"
        d="M6006.6 2439.7h296.2"
      />
      <path
        className="st33"
        d="M5997.1 2453.6h-132c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.8 3.8-6 3.8z"
      />
      <path
        className="st3"
        d="M5998.4 2453.6h-133c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.9-.2.9z"
      />
      <path
        className="st33"
        d="M5997.1 2478.7h-132c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.8 3.8-6 3.8z"
      />
      <path
        className="st3"
        d="M5998.4 2478.7h-133c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.9-.2.9z"
      />
      <path
        className="st33"
        d="M5997.1 2503.8h-132c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.2-2.8 3.8-6 3.8z"
      />
      <path
        className="st3"
        d="M5998.4 2503.8h-133c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.9-.2.9z"
      />
      <path
        className="st33"
        d="M5997.1 2528.9h-132c-3.3 0-6-1.7-6-3.8V2512c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.2c0 2.1-2.8 3.7-6 3.7z"
      />
      <path
        className="st3"
        d="M5998.4 2528.9h-133c-3.4 0-6.3-1.7-6.3-3.8V2512c0-2 2.8-3.8 6.3-3.8l133.1 20c.7.1.6.7-.1.7z"
      />
      <path
        className="st33"
        d="M5997.1 2554h-132c-3.3 0-6-1.7-6-3.8v-13c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.8 3.7-6 3.7z"
      />
      <path
        className="st3"
        d="M5998.4 2554h-133c-3.4 0-6.3-1.7-6.3-3.8v-13c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.8-.2.8z"
      />
      <path
        className="st0"
        d="M5855.3 2544.7H5839c-2.8 0-5-2.2-5-5v-99h-259.2M5834.9 2468.2h20.4M5834.6 2493.2h20.4M6006.6 2545.3h16.4c2.8 0 5-2.2 5-5v-99M6027 2468.2h-20.4M6027.3 2493.2h-20.4M5834.6 2519.2h20.4M6027.3 2519.2h-20.4"
      />
      <circle
        className="st32"
        cx={5618.7}
        cy={2442.8}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={162}
        height={145}
        xlinkHref="solicitudscadaida/693C2E2B.png"
        transform="translate(5540.855 2285.081) scale(.9664)"
      />
      <path
        className="st1"
        d="M5599.6 2294.5h-43.1c-3.5 0-6.3 2.8-6.3 6.2V2403.1c0 3.5 2.8 6.3 6.2 6.3H5608.2c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.2V2300.8c0-3.5-2.8-6.3-6.2-6.3h-82.6z"
      />
      <path
        className="st2"
        d="M5550.3 2301.9h138.1v99.8h-138.1z"
      />
      <text
        transform="translate(5595.986 2348.57)"
        className="st3 st5">
        {"Presi\xF3n  "}
      </text>
      <text
        transform="translate(5594.586 2364.17)"
        className="st3 st5">
        {"Osmosis"}
      </text>
      <path
        className="st3"
        d="M5566.4 2375.7c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-2 1.3-2.5 2.3z"
      />
      <path
        className="st3"
        d="M5564.7 2374.7c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.6-2.9 1.7-3.7 3.1zM5576 2373.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.3z"
      />
      <path
        className="st3"
        d="M5576.6 2371.6c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-.9-1.3-2.2-2.4-3.7-3.1zM5577.5 2380.7v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM5572.5 2388.2c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z"
      />
      <text
        transform="translate(5603.269 2386.891)"
        className="st6 st7">
        {"0.00"}
      </text>
      <text
        transform="translate(5657.628 2385.501)"
        className="st6 st5">
        {"bar"}
      </text>
      <text
        transform="translate(5603.72 2327.73)"
        className="st6 st8">
        {"PT017"}
      </text>
      <circle
        className="st32"
        cx={6094.7}
        cy={2440}
        r={9.2}
      />
      <circle
        className="st32"
        cx={6254.7}
        cy={2440}
        r={9.2}
      />
      <path
        className="st3"
        d="M6366.8 2501.1h124.8v97.7h-124.8z"
      />
      <path
        className="st26"
        d="M6491.4 2484.8V2596c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1v-111.2"
      />
      <path
        className="st12"
        d="M6445.2 2489.6c0-1 .9-1.9 1.9-1.9h9c1.1 0 1.9.9 1.9 1.9 0 .5-.2.9-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.4-.3-.6-.8-.6-1.3z"
      />
      <path
        className="st1"
        d="M6456.9 2489.6c0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.5.4-.9.9-.9h9c.5 0 1 .3 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .7.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.8.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <path
        className="st0"
        d="M6015.8 2546.6v160c0 5.5 4.5 10 10 10h22"
      />
      <path
        className="st27"
        d="M6070.5 2708.1h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM6055.3 2712l7.9 4.6c.4.2.5.7.3 1l-.3.3-7.9 4.6c-.4.2-.9.1-1.1-.3-.1-.1-.1-.2-.1-.4v-9.2c.1-.4.5-.8.9-.7.1 0 .2 0 .3.1z"
      />
      <path
        className="st27"
        d="m6070.9 2722.6-7.9-4.6c-.4-.2-.5-.7-.3-1l.3-.3 7.9-4.6c.4-.2.9-.1 1.1.3.1.1.1.2.1.4v9.2c-.1.4-.5.8-.9.7-.1 0-.2 0-.3-.1z"
      />
      <path
        className="st28"
        d="M6063.1 2707.1v10"
      />
      <path
        className="st29"
        d="M6054.1 2699.1h18M6063.1 2700.1v8"
      />
      <path
        className="st27"
        d="M6137.4 2569.7h3.7v11h-3.7zM6134.5 2838.1c.7.8.7 2 0 2.8l-5.6 5.6c-.8.7-2 .7-2.8 0l-5.6-5.6c-.7-.8-.7-2 0-2.8"
      />
      <path
        className="st12"
        d="m6133.3 2828.3-4.5 4.5-.1.1c-.8.6-1.9.6-2.6-.1l-4.5-4.5c-.7-.8-.7-2 .1-2.7.4-.3.8-.5 1.3-.5h9c1 0 1.9.9 1.9 1.9 0 .5-.2 1-.6 1.3z"
      />
      <path
        className="st1"
        d="M6122.2 2827c0-.5.4-.9.9-.9h9.1c.5 0 .9.4.9.9 0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6m-2 0c0 .8.3 1.5.9 2l4.5 4.5c1.1 1.1 2.7 1.1 3.9.2l.1-.1.1-.1 4.5-4.5c.5-.5.8-1.3.8-2 0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9z"
      />
      <circle
        className="st32"
        cx={6015.2}
        cy={2636.5}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.2,
          enableBackground: "new"
        }}
        width={183}
        height={125}
        xlinkHref="solicitudscadaida/693C2E3D.png"
        transform="translate(5821.737 2574.563) scale(.9795)"
      />
      <path
        className="st1"
        d="M5937.2 2583.8h42.1c3.5 0 6.3 2.8 6.3 6.3v33.2c0 .8.3 1.6.8 2.2l5.3 6.5c1.1 1.4 1 3.3-.1 4.6l-5.1 5.5c-.6.7-.9 1.5-.9 2.4v36.9c0 3.5-2.8 6.3-6.3 6.3h-142.5c-3.5 0-6.3-2.8-6.3-6.3v-91.3c0-3.5 2.8-6.3 6.2-6.3h100.5z"
      />
      <path
        className="st2"
        d="M5836.8 2583.8h143.8v103.9h-143.8z"
      />
      <text
        transform="translate(5875.959 2628.604)"
        className="st3 st5">
        {"Presi\xF3n de"}
      </text>
      <text
        transform="translate(5881.379 2646.404)"
        className="st3 st5">
        {"Rechazo"}
      </text>
      <path
        className="st17"
        d="M5853.6 2662.2c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
      />
      <path
        className="st17"
        d="M5851.9 2661.2c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM5863.2 2659.9c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
      />
      <path
        className="st17"
        d="M5863.8 2658c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM5864.6 2667.2v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM5859.6 2674.6c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
      />
      <text
        transform="translate(5891.099 2673.381)"
        className="st6 st7">
        {"00.0"}
      </text>
      <text
        transform="translate(5944.689 2671.981)"
        className="st6 st5">
        {"bar"}
      </text>
      <text
        transform="translate(5890.829 2609.606)"
        className="st6 st8">
        {"PT025"}
      </text>
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={166}
        height={149}
        xlinkHref="solicitudscadaida/693C2E50.png"
        transform="translate(6018.214 2284.188) scale(.9376)"
      />
      <path
        className="st1"
        d="M6076.1 2293.7H6033c-3.5 0-6.3 2.8-6.3 6.2V2402.3c0 3.5 2.8 6.3 6.2 6.3H6084.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.2V2300c0-3.5-2.8-6.3-6.2-6.3h-82.6z"
      />
      <path
        className="st2"
        d="M6026.8 2301.1h138.1v99.8h-138.1z"
      />
      <text
        transform="translate(6073.64 2348.74)"
        className="st3 st5">
        {"Presi\xF3n  "}
      </text>
      <text
        transform="translate(6067.54 2364.34)"
        className="st3 st5">
        {"Permeado"}
      </text>
      <path
        className="st3"
        d="M6041.9 2374.9c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-2 1.3-2.5 2.3z"
      />
      <path
        className="st3"
        d="M6040.2 2373.9c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.6-2.9 1.7-3.7 3.1zM6051.5 2372.6c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.8-2.5-2.3z"
      />
      <path
        className="st3"
        d="M6052.1 2370.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-.9-1.4-2.2-2.5-3.7-3.1zM6053 2379.9v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM6048 2387.4c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z"
      />
      <text
        transform="translate(6079.78 2386.051)"
        className="st6 st7">
        {"0.00"}
      </text>
      <text
        transform="translate(6132.13 2385.661)"
        className="st6 st5">
        {"bar"}
      </text>
      <text
        transform="translate(6079.08 2327.891)"
        className="st6 st8">
        {"PT020"}
      </text>
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={166}
        height={149}
        xlinkHref="solicitudscadaida/693C2E51.png"
        transform="translate(5859.248 2284.188) scale(.9376)"
      />
      <path
        className="st1"
        d="M5917.1 2293.7H5874c-3.5 0-6.3 2.8-6.3 6.2V2402.3c0 3.5 2.8 6.3 6.2 6.3H5925.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.2V2300c0-3.5-2.8-6.3-6.2-6.3h-82.6z"
      />
      <path
        className="st2"
        d="M5867.8 2301.1h138.1v99.8h-138.1z"
      />
      <text
        transform="translate(5898.574 2345.34)"
        className="st3 st5">
        {"Recuperaci\xF3n"}
      </text>
      <path
        className="st3"
        d="M5882.9 2374.9c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-2 1.3-2.5 2.3z"
      />
      <path
        className="st3"
        d="M5881.2 2373.9c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.6-2.9 1.7-3.7 3.1zM5892.5 2372.6c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.8-2.5-2.3z"
      />
      <path
        className="st3"
        d="M5893.1 2370.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-.9-1.4-2.2-2.5-3.7-3.1zM5894 2379.9v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM5889 2387.4c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z"
      />
      <text
        transform="translate(5920.814 2386.051)"
        className="st6 st7">
        {"0.00"}
      </text>
      <text
        transform="translate(5973.164 2385.661)"
        className="st6 st5">
        {"%"}
      </text>
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={166}
        height={149}
        xlinkHref="solicitudscadaida/693C2E52.png"
        transform="translate(6177.18 2283.946) scale(.9376)"
      />
      <path
        className="st1"
        d="M6236.1 2293.7H6193c-3.5 0-6.3 2.8-6.3 6.2V2402.3c0 3.5 2.8 6.3 6.2 6.3H6244.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.2V2300c0-3.5-2.8-6.3-6.2-6.3h-82.6z"
      />
      <path
        className="st2"
        d="M6186.8 2301.1h138.1v99.8h-138.1z"
      />
      <text
        transform="translate(6246.616 2345.738)"
        className="st3 st5">
        {"pH  "}
      </text>
      <text
        transform="translate(6226.716 2361.338)"
        className="st3 st5">
        {"Permeado"}
      </text>
      <path
        className="st3"
        d="M6202.9 2375.9c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-2 1.3-2.5 2.3z"
      />
      <path
        className="st3"
        d="M6201.2 2374.9c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.6-2.9 1.7-3.7 3.1zM6212.5 2373.6c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.8-2.5-2.3z"
      />
      <path
        className="st3"
        d="M6213.1 2371.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-.9-1.4-2.2-2.5-3.7-3.1zM6214 2380.9v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM6209 2388.4c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z"
      />
      <text
        transform="translate(6239.765 2386.051)"
        className="st6 st7">
        {"0.00"}
      </text>
      <text
        transform="translate(6295.115 2385.661)"
        className="st6 st5">
        {"pH"}
      </text>
      <text
        transform="translate(6240.805 2327.891)"
        className="st6 st8">
        {"AE2"}
      </text>
      <text
        transform="translate(6261.595 2327.891)"
        className="st6 st8">
        {"1"}
      </text>
      <text
        transform="translate(6266.895 2327.891)"
        className="st6 st8">
        {"1"}
      </text>
      <circle
        className="st32"
        cx={6173}
        cy={2441.1}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={166}
        height={149}
        xlinkHref="solicitudscadaida/693C2E53.png"
        transform="matrix(.9376 0 0 -.9376 6096.315 2600.905)"
      />
      <path
        className="st1"
        d="M6192 2591.5h45.1c3.5 0 6.3-2.8 6.3-6.2V2482.9c0-3.5-2.8-6.3-6.2-6.3H6183.4c-1.3 0-2.5-.4-3.5-1.3-6.4-6.7-6.4-6.7-12.9-.2l-.4.3c-1 .8-2.2 1.2-3.4 1.2h-51.7c-3.5 0-6.3 2.8-6.3 6.2V2585.2c0 3.5 2.8 6.3 6.2 6.3h80.6z"
      />
      <path
        className="st2"
        d="M6105.3 2484.3h138.1v99.8h-138.1z"
      />
      <text
        transform="translate(6164.033 2530.907)"
        className="st3 st5">
        {"E.C  "}
      </text>
      <text
        transform="translate(6146.733 2546.507)"
        className="st3 st5">
        {"Permeado"}
      </text>
      <path
        className="st3"
        d="M6121.4 2557.3c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-2 1.3-2.5 2.3z"
      />
      <path
        className="st3"
        d="M6119.7 2556.3c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.6-2.9 1.7-3.7 3.1zM6131 2555c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.8-2.5-2.3z"
      />
      <path
        className="st3"
        d="M6131.6 2553.2c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-.9-1.4-2.2-2.5-3.7-3.1zM6132.5 2562.3v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM6127.5 2569.8c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z"
      />
      <text
        transform="translate(6148.35 2568.391)"
        className="st6 st7">
        {"000.0"}
      </text>
      <text
        transform="translate(6158.529 2510.22)"
        className="st6 st8">
        {"AE207"}
      </text>
      <text
        transform="translate(6193.189 2568.331)"
        className="st6 st5">
        {"\xB5S/cm"}
      </text>
      <path
        className="st0"
        d="M6302.8 2439.7h140.5c4.7 0 8.5 3.8 8.5 8.5v38.3"
      />
      <circle
        className="st34"
        cx={5224.8}
        cy={2466.9}
        r={9.2}
      />
      <path
        className="st1"
        d="M5243.7 2619.1h45.1c3.5 0 6.3-2.8 6.3-6.2V2510.5c0-3.5-2.8-6.3-6.2-6.3H5235.1c-1.3 0-2.5-.4-3.5-1.3-6.4-6.7-6.4-6.7-12.9-.2l-.4.3c-1 .8-2.2 1.2-3.4 1.2h-51.7c-3.5 0-6.3 2.8-6.3 6.2V2612.8c0 3.5 2.8 6.3 6.2 6.3h80.6z"
      />
      <path
        className="st2"
        d="M5157 2511.9h138.1v99.8H5157z"
      />
      <text
        transform="translate(5202.29 2555.742)"
        className="st3 st5">
        {"Presi\xF3n"}
      </text>
      <text
        transform="translate(5194.719 2572.542)"
        className="st3 st5">
        {"Pre Filtros"}
      </text>
      <path
        className="st3"
        d="M5172.1 2585.9c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-2 1.3-2.5 2.3z"
      />
      <path
        className="st3"
        d="M5170.4 2584.9c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.6-2.9 1.7-3.7 3.1zM5181.7 2583.6c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.8-2.5-2.3z"
      />
      <path
        className="st3"
        d="M5182.3 2581.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-.9-1.4-2.2-2.5-3.7-3.1zM5183.2 2590.9v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM5178.2 2598.4c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z"
      />
      <text
        transform="translate(5209.019 2597.051)"
        className="st6 st7">
        {"0.00"}
      </text>
      <text
        transform="translate(5262.29 2596.661)"
        className="st6 st5">
        {"bar"}
      </text>
      <text
        transform="translate(5208.129 2535.894)"
        className="st6 st8">
        {"PT008"}
      </text>
      <circle
        className="st32"
        cx={6412.7}
        cy={2440}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={162}
        height={144}
        xlinkHref="solicitudscadaida/693C2E54.png"
        transform="translate(6335.445 2283.412) scale(.9694)"
      />
      <path
        className="st1"
        d="M6394.6 2293.7h-43.1c-3.5 0-6.3 2.8-6.3 6.2V2402.3c0 3.5 2.8 6.3 6.2 6.3H6403.2c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.2V2300c0-3.5-2.8-6.3-6.2-6.3h-82.6z"
      />
      <path
        className="st2"
        d="M6345.3 2301.1h138.1v99.8h-138.1z"
      />
      <text
        transform="translate(6385.6 2362.741)"
        className="st3 st5">
        {"Permeado"}
      </text>
      <path
        className="st3"
        d="M6361.4 2375.9c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-2 1.3-2.5 2.3z"
      />
      <path
        className="st3"
        d="M6359.7 2374.9c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.6-2.9 1.7-3.7 3.1zM6371 2373.6c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.8-2.5-2.3z"
      />
      <path
        className="st3"
        d="M6371.6 2371.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-.9-1.4-2.2-2.5-3.7-3.1zM6372.5 2380.9v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM6367.5 2388.4c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z"
      />
      <text
        transform="translate(6398.269 2386.051)"
        className="st6 st7">
        {"0.00"}
      </text>
      <text
        transform="translate(6443.619 2385.661)"
        className="st6 st5">
        {"m"}
      </text>
      <text
        transform="translate(6454.449 2381.332)"
        className="st6 st4"
        style={{
          fontSize: "7.579px"
        }}>
        {"3"}
      </text>
      <text
        transform="translate(6458.663 2385.661)"
        className="st6 st5">
        {"/h"}
      </text>
      <text
        transform="translate(6398.169 2327.891)"
        className="st6 st8">
        {"FIT003"}
      </text>
      <text
        transform="translate(6385.959 2346.741)"
        className="st3 st5">
        {"Caudal de"}
      </text>
      <path
        className="st0"
        d="M6077.8 2716.1h40c5.5 0 10 4.5 10 10v97"
      />
      <circle
        className="st35"
        cx={6127.2}
        cy={2771.5}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.2,
          enableBackground: "new"
        }}
        width={183}
        height={124}
        xlinkHref="solicitudscadaida/693C2E55.png"
        transform="translate(6144.745 2711.558) scale(.9793)"
      />
      <path
        className="st1"
        d="M6208.9 2720.3h100.4c3.5 0 6.3 2.8 6.3 6.2V2817.9c0 3.5-2.8 6.3-6.3 6.3h-142.5c-3.5 0-6.3-2.8-6.3-6.3V2781c0-.9-.3-1.7-.9-2.4l-5.1-5.5c-1.1-1.3-1.2-3.2-.1-4.6l5.3-6.5c.5-.6.8-1.4.8-2.2v-33.2c0-3.5 2.8-6.3 6.3-6.3h42.1z"
      />
      <path
        className="st2"
        d="M6165.5 2720.3h143.8v103.9h-143.8z"
      />
      <text
        transform="translate(6207.398 2764.103)"
        className="st3 st5">
        {"Caudal de"}
      </text>
      <text
        transform="translate(6211.018 2780.903)"
        className="st3 st5">
        {"Rechazo"}
      </text>
      <path
        className="st17"
        d="M6182.1 2798.7c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
      />
      <path
        className="st17"
        d="M6180.4 2797.7c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM6191.7 2796.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
      />
      <path
        className="st17"
        d="M6192.3 2794.5c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM6193.1 2803.7v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM6188.1 2811.1c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
      />
      <text
        transform="translate(6217.59 2808.88)"
        className="st6 st4"
        style={{
          fontSize: 18
        }}>
        {"00.0"}
      </text>
      <text
        transform="translate(6263.19 2808.481)"
        className="st6 st5">
        {"m"}
      </text>
      <text
        transform="translate(6274.019 2804.151)"
        className="st6 st4"
        style={{
          fontSize: "7.579px"
        }}>
        {"3"}
      </text>
      <text
        transform="translate(6278.234 2808.481)"
        className="st6 st5">
        {"/h"}
      </text>
      <text
        transform="translate(6221.249 2742.6)"
        className="st6 st8">
        {"FIT002"}
      </text>
      <text
        transform="translate(5316.58 2530.951)"
        className="st6 st8">
        {"F-006"}
      </text>
      <path
        className="st27"
        d="M503.9 533.4c0-6.7-7.8-12.1-17.5-12.1s-17.5 5.5-17.5 12.1h.1c-.1.4-.1.7-.1 1.1v37.6c0 3.5 3.4 6.4 7.6 6.8v6.2h5.2V579h9v6.1h5.2v-6.2c4.5-.2 8-3.2 8-6.8v-37.6c0-.3-.1-.7 0-1.1z"
      />
      <path
        className="st12"
        d="m5612 2213.2-4.5-4.5-.1-.1c-.6-.8-.6-1.9.1-2.6l4.5-4.5c.8-.7 2-.7 2.7.1.3.4.5.8.5 1.3v9c0 1-.9 1.9-1.9 1.9-.5 0-1 0-1.3-.6z"
      />
      <path
        className="st1"
        d="M5613.3 2202.1c.5 0 .9.4.9.9v9.1c0 .5-.4.9-.9.9-.2 0-.4-.1-.6-.3l-4.5-4.5c-.3-.4-.3-.9 0-1.3l4.5-4.5c.2-.2.4-.3.6-.3m0-2c-.8 0-1.5.3-2 .9l-4.5 4.5c-1.1 1.1-1.1 2.7-.2 3.9l.1.1.1.1 4.5 4.5c.5.5 1.3.8 2 .8 1.6 0 2.9-1.3 2.9-2.9v-9c0-1.6-1.3-2.9-2.9-2.9z"
      />
      <path
        className="st12"
        d="m5162.8 2336.3-4.5 4.5-.1.1c-.8.6-1.9.6-2.6-.1l-4.5-4.5c-.7-.8-.7-2 .1-2.7.4-.3.8-.5 1.3-.5h9c1 0 1.9.9 1.9 1.9 0 .5 0 1-.6 1.3z"
      />
      <path
        className="st1"
        d="M5151.7 2335c0-.5.4-.9.9-.9h9.1c.5 0 .9.4.9.9 0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6m-2 0c0 .8.3 1.5.9 2l4.5 4.5c1.1 1.1 2.7 1.1 3.9.2l.1-.1.1-.1 4.5-4.5c.5-.5.8-1.3.8-2 0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={164}
        height={147}
        xlinkHref="data:image/png;base64,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"
        transform="matrix(0 .6468 -1.2856 0 1334.8 531.851)"
      />
      <path
        className="st1"
        d="M1321 566v-22.1c0-3.5-2.8-6.3-6.2-6.3h-140.9c-3.5 0-6.3 2.8-6.3 6.2v30.8c0 1.2-.4 2.4-1.2 3.4l-.3.4c-6.5 6.5-6.5 6.5.2 12.9.9 1 1.3 2.2 1.3 3.5v33.7c0 3.5 2.8 6.3 6.2 6.3h140.9c3.5 0 6.3-2.8 6.3-6.2V566z"
      />

      {/* pH Limpieza UF */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(14, "pH Limpieza UF", false)}>
        <path
          className={getTarjetaClass(14, selected)}
          d="M1175.3 537.6h138.3v97.1h-138.3z"
        />
        <text
          transform="translate(1235.869 574.989)"
          className="st3 st5">
          {"pH "}
        </text>
        <text
          transform="translate(1209.469 590.589)"
          className="st3 st5">
          {"Limpieza UF"}
        </text>
        <text
          transform="translate(1227.404 620.134)"
          className="st6 st7">
          {getScaledValue(datosScada.d14, 1)}
        </text>
        <text
          transform="translate(1275.024 618.151)"
          className="st6 st5">
          {"pH"}
        </text>
        <text
          transform="translate(1227.405 555.359)"
          className="st6 st8">
          {"AE004"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(14, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(14, "pH Limpieza UF");
        }}>
        <path d="M1189.9 614c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9.1-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.3z" />
        <path d="M1188.2 613c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-2.9 1.6-3.7 3.1zM1199.5 611.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.8-2.5-2.3z" />
        <path d="M1200.1 609.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-.9-1.4-2.2-2.5-3.7-3.1zM1201 619v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1196 626.5c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.6 1.6 1.7z" />
      </g>

      {/* Fin pH Limpieza UF */}

      <circle
        className="st32"
        cx={359.7}
        cy={556.3}
        r={9.2}
      />
      <circle
        className="st32"
        cx={498.2}
        cy={787.4}
        r={9.2}
      />
      <path
        className="st0"
        d="M519 557.2h253.8"
      />
      <circle
        className="st32"
        cx={603.1}
        cy={556.3}
        r={9.2}
      />
      <circle
        className="st32"
        cx={721}
        cy={556.3}
        r={9.2}
      />
      <path
        className="st0"
        d="M5833.4 2440.7h20.4"
      />
      <circle
        className="st32"
        cx={5778.7}
        cy={2442.8}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={162}
        height={144}
        xlinkHref="solicitudscadaida/693C2E71.png"
        transform="translate(5699.58 2284.442) scale(.9694)"
      />
      <path
        className="st1"
        d="M5759.8 2294.5h-43.1c-3.5 0-6.3 2.8-6.3 6.2V2403.1c0 3.5 2.8 6.3 6.2 6.3H5768.4c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.2V2300.8c0-3.5-2.8-6.3-6.2-6.3h-82.6z"
      />
      <path
        className="st2"
        d="M5710.5 2301.9h138.1v99.8h-138.1z"
      />
      <text
        transform="translate(5748.37 2345.57)"
        className="st3 st5">
        {"Caudal de"}
      </text>
      <path
        className="st3"
        d="M5726.6 2375.7c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-2 1.3-2.5 2.3z"
      />
      <path
        className="st3"
        d="M5724.9 2374.7c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.6-2.9 1.7-3.7 3.1zM5736.2 2373.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.3z"
      />
      <path
        className="st3"
        d="M5736.8 2371.6c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-.9-1.3-2.2-2.4-3.7-3.1zM5737.7 2380.7v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM5732.7 2388.2c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z"
      />
      <text
        transform="translate(5763.48 2386.891)"
        className="st6 st7">
        {"0.00"}
      </text>
      <text
        transform="translate(5808.83 2386.501)"
        className="st6 st5">
        {"m"}
      </text>
      <text
        transform="translate(5819.659 2382.172)"
        className="st6 st4"
        style={{
          fontSize: "7.579px"
        }}>
        {"3"}
      </text>
      <text
        transform="translate(5823.873 2386.501)"
        className="st6 st5">
        {"/h"}
      </text>
      <text
        transform="translate(5736.89 2325.731)"
        className="st6 st8">
        {"FIT002 + FIT003"}
      </text>
      <text
        transform="translate(5740.8 2361.571)"
        className="st3 st5">
        {"Alimentaci\xF3n"}
      </text>
      <path
        className="st27"
        d="M1211.1 426.4h-14.8c-.9 0-1.6-.7-1.6-1.6V410c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM1195.9 430.3l7.9 4.6c.4.2.5.7.3 1l-.3.3-7.9 4.6c-.4.2-.9.1-1.1-.3-.1-.1-.1-.2-.1-.4v-9.2c.1-.4.5-.8.9-.7.1 0 .2 0 .3.1z"
      />
      <path
        className="st27"
        d="m1211.5 440.9-7.9-4.6c-.4-.2-.5-.7-.3-1l.3-.3 7.9-4.6c.4-.2.9-.1 1.1.3.1.1.1.2.1.4v9.2c-.1.4-.5.8-.9.7-.1 0-.2 0-.3-.1z"
      />
      <path
        className="st28"
        d="M1203.7 425.4v10"
      />
      <path
        className="st29"
        d="M1194.7 417.4h18M1203.7 418.4v8"
      />
      <text
        transform="translate(6382.85 2622.821)"
        className="st6 st8">
        {"TK002 PRODUCTO"}
      </text>
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={161}
        height={143}
        xlinkHref="solicitudscadaida/693C2E72.png"
        transform="rotate(180 2508.64 678.434) scale(.9762)"
      />
      <path
        className="st1"
        d="M4956.4 1347.7h45.1c3.5 0 6.3-2.8 6.3-6.2V1239.1c0-3.5-2.8-6.3-6.2-6.3H4947.8c-1.3 0-2.5-.4-3.5-1.3-6.4-6.7-6.4-6.7-12.9-.2l-.4.3c-1 .8-2.2 1.2-3.4 1.2h-51.7c-3.5 0-6.3 2.8-6.3 6.2V1341.4c0 3.5 2.8 6.3 6.2 6.3h80.6z"
      />
      <path
        className="st2"
        d="M4869.7 1240.5h138.1v99.8h-138.1z"
      />
      <text
        transform="translate(4917.162 1286.883)"
        className="st3 st5">
        {"Presi\xF3n  "}
      </text>
      <text
        transform="translate(4908.362 1302.484)"
        className="st3 st5">
        {"Post Filtros"}
      </text>
      <path
        className="st3"
        d="M4886.7 1317.2c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5s1.1-1.3 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
      />
      <path
        className="st3"
        d="M4885 1316.2c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-2.9 1.6-3.7 3zM4896.3 1314.9c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-.9-1.5-1.7-2.5-2.2z"
      />
      <path
        className="st3"
        d="M4896.9 1313.1c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.2.5 2.3 1.4 3 2.5.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM4897.8 1322.2v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM4892.8 1329.7c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z"
      />
      <text
        transform="translate(4924.014 1327.785)"
        className="st6 st7">
        {"00.0"}
      </text>
      <text
        transform="translate(4975.734 1326.985)"
        className="st6 st5">
        {"bar"}
      </text>
      <text
        transform="translate(4924.344 1268.135)"
        className="st6 st8">
        {"PT008"}
      </text>
      <circle
        className="st36"
        cx={6367}
        cy={2561.6}
        r={9.2}
      />
      <path
        className="st3"
        d="M1275.9 735.8h124.8v97.7h-124.8z"
      />
      <path
        className="st26"
        d="M1400.5 719.5v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1V719.5"
      />
      <text
        transform="translate(1291.857 857.47)"
        className="st6 st8">
        {"TK002 PRODUCTO"}
      </text>
      <text
        transform="translate(499.35 996.22)"
        className="st6 st8">
        {"Alimentaci\xF3n Valvulas."}
      </text>
      <path
        d="M5542.6 1054.3V844.4c0-5.9 4.8-10.6 10.6-10.6h577.2c5.9 0 10.7 4.8 10.7 10.6l1 204.3"
        style={{
          fill: "none",
          stroke: "#35ace8",
          strokeWidth: 4.2696,
          strokeMiterlimit: 10
        }}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={161}
        height={143}
        xlinkHref="solicitudscadaida/693C2E5A.png"
        transform="rotate(180 3248.67 605.956) scale(.9762)"
      />
      <path
        className="st1"
        d="M6436.4 1202.7h45.1c3.5 0 6.3-2.8 6.3-6.2V1094.1c0-3.5-2.8-6.3-6.2-6.3H6427.8c-1.3 0-2.5-.4-3.5-1.3-6.4-6.7-6.4-6.7-12.9-.2l-.4.3c-1 .8-2.2 1.2-3.4 1.2h-51.7c-3.5 0-6.3 2.8-6.3 6.2V1196.4c0 3.5 2.8 6.3 6.2 6.3h80.6z"
      />
      <path
        className="st2"
        d="M6349.7 1095.5h138.1v99.8h-138.1z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={161}
        height={143}
        xlinkHref="solicitudscadaida/693C2E5E.png"
        transform="rotate(180 2770.387 913.292) scale(.9762)"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={161}
        height={143}
        xlinkHref="solicitudscadaida/693C2E5C.png"
        transform="rotate(180 2665.92 913.206) scale(.9762)"
      />
      <path
        className="st14"
        d="M5252 1664.2v-28.1c0-5.5 4.5-10 10-10h190.7c5.5 0 10 4.5 10 10v29.3"
      />
      <path
        className="st0"
        d="M5184 924.6h57.5c4.7 0 8.5 3.8 8.5 8.5v38.3"
      />
      <path
        className="st3"
        d="M5213 986h124.8v97.7H5213z"
      />
      <path
        className="st26"
        d="M5337.6 969.7v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1V969.7"
      />
      <path
        className="st12"
        d="M5381.3 1085.4c-1 0-1.9-.9-1.9-1.9v-9c0-1.1.9-1.9 1.9-1.9.5 0 .9.2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.4-.8.6-1.3.6z"
      />
      <path
        className="st1"
        d="M5381.3 1073.7c.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.5.3-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.7 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.8-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <text
        transform="translate(5216.196 1108.199)"
        className="st6 st8">
        {"TK001 ALIMENTACI\xD3N"}
      </text>
      <path
        className="st0"
        d="M5344.9 1078.5h33.5"
      />
      <path
        className="st12"
        d="M5243.4 974.5c0-1 .9-1.9 1.9-1.9h9c1.1 0 1.9.9 1.9 1.9 0 .5-.2.9-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.4-.3-.6-.8-.6-1.3z"
      />
      <path
        className="st1"
        d="M5255.1 974.5c0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.5.4-.9.9-.9h9c.5 0 1 .3 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .7.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.8.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <path
        className="st0"
        d="M1225.8 436h116.6c4.7 0 8.5 3.8 8.5 8.5v263.7"
      />
      <path
        className="st12"
        d="M1344.3 711.4c0-1 .9-1.9 1.9-1.9h9c1.1 0 1.9.9 1.9 1.9 0 .5-.2.9-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.4-.3-.6-.8-.6-1.3z"
      />
      <path
        className="st1"
        d="M1356 711.4c0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.5.4-.9.9-.9h9c.5 0 1 .3 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .7.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.8.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <path
        className="st0"
        d="M1338.8 885.2v318.9c0 4.7-3.8 8.5-8.5 8.5h-50.1"
      />
      <path
        className="st12"
        d="M1277.2 1206c1 0 1.9.9 1.9 1.9v9c0 1.1-.9 1.9-1.9 1.9-.5 0-.9-.2-1.3-.5l-4.5-4.5c-.7-.7-.7-1.8-.1-2.6l.1-.1 4.5-4.5c.3-.4.8-.6 1.3-.6z"
      />
      <path
        className="st1"
        d="M1277.2 1217.7c-.2 0-.4-.1-.6-.3l-4.5-4.5c-.3-.4-.3-.9 0-1.3l4.5-4.5c.2-.2.4-.3.6-.3.5 0 .9.4.9.9v9c0 .5-.3 1-.9 1m0 2c1.6 0 2.9-1.3 2.9-2.9v-9c0-1.6-1.3-2.9-2.9-2.9-.7 0-1.5.3-2 .8l-4.5 4.5-.1.1-.1.1c-.9 1.2-.9 2.8.2 3.9l4.5 4.5c.5.6 1.2.9 2 .9z"
      />
      <path
        className="st9"
        d="M1058 1211.7h64.4M531.5 1211.7h440.2M106.7 1696.2h-52c-4.7 0-8.5-3.8-8.5-8.5v-467.5c0-4.7 3.8-8.5 8.5-8.5H433.6"
      />
      <path
        className="st12"
        d="m111.1 1690.2 4.5 4.5.1.1c.6.8.6 1.9-.1 2.6l-4.5 4.5c-.4.3-.8.5-1.3.5-1 0-1.9-.8-1.9-1.9v-9c0-1 .9-1.9 1.9-1.9.5 0 1 .2 1.3.6z"
      />
      <path
        className="st1"
        d="M109.8 1701.3c-.6 0-.9-.5-.9-1v-9c0-.5.4-.9.9-.9.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3m0 2c.8 0 1.5-.3 2-.9l4.5-4.5c1.1-1.1 1.1-2.7.2-3.9l-.1-.1-.1-.1-4.5-4.5c-.5-.5-1.3-.8-2-.8-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9z"
      />
      <path
        className="st0"
        d="M975.9 433.2h210.6"
      />
      <path
        className="st33"
        d="M5427.9 1051.4h-17.4c-1.1-.3-2.3-.4-3.4-.4-8 0-14.6 6.5-14.6 14.5v.1c0 3.9 1.5 7.6 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.7-2.7 4.2-6.4 4.2-10.3 0-1.4-.2-2.8-.6-4.2h6.8c1.5 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        width={45}
        height={46}
        xlinkHref="solicitudscadaida/693C2E5D.png"
        transform="translate(5389.793 1048.343) scale(.7479)"
      />
      <circle
        className="st1"
        cx={5407.1}
        cy={1065.9}
        r={10.9}
      />
      <circle
        className="st2"
        cx={5407.1}
        cy={1065.7}
        r={8}
      />
      <text
        transform="translate(5392.486 1105.609)"
        className="st6 st8">
        {"P-001"}
      </text>
      <text
        transform="translate(6381.656 1141.279)"
        className="st3 st5">
        {"T"}
      </text>
      <text
        transform="translate(6388.156 1141.279)"
        className="st3 st5">
        {"emperatura"}
      </text>
      <path
        className="st3"
        d="M6365.4 1168.5c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-2 1.3-2.5 2.3z"
      />
      <path
        className="st3"
        d="M6363.7 1167.5c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.6-2.9 1.7-3.7 3.1zM6375 1166.2c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.8-2.5-2.3z"
      />
      <path
        className="st3"
        d="M6375.6 1164.4c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6s.9 2.6.7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-.9-1.3-2.2-2.4-3.7-3.1zM6376.5 1173.5v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM6371.5 1181c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z"
      />
      <text
        transform="translate(6397.686 1178.599)"
        className="st6 st7">
        {"000.0"}
      </text>
      <text
        transform="translate(6459.576 1178.209)"
        className="st6 st5">
        {"\xB0C"}
      </text>
      <text
        transform="translate(6405.056 1119.439)"
        className="st6 st8">
        {"TT206"}
      </text>
      <path
        className="st27"
        d="M5862.2 1021.9c12.5-4.9 17.1-3.9 17.1-18V942c.1-7.1-5.6-12.9-12.7-13h-30c-7.1.1-12.9 5.9-13 13v61.9c0 14.1 4.7 13.1 17.1 18v3.9c0 2.2 2.2 4.3 4.9 4.3h12.3c2.3-.2 4.1-2 4.3-4.3v-3.9z"
      />
      <path
        className="st3"
        d="M5823.6 944.9h55.7v59.9h-55.7z"
      />
      <path
        className="st27"
        d="M5975.2 1021.9c12.5-4.9 17.1-3.9 17.1-18V942c.1-7.1-5.6-12.9-12.7-13h-30c-7.1.1-12.9 5.9-13 13v61.9c0 14.1 4.7 13.1 17.1 18v3.9c0 2.2 2.2 4.3 4.9 4.3h12.3c2.3-.2 4.1-2 4.3-4.3v-3.9z"
      />
      <path
        className="st3"
        d="M5936.6 944.9h55.7v59.9h-55.7z"
      />
      <path
        className="st0"
        d="M5435.3 1056.3h210c5.5 0 10-4.5 10-10v-144c0-5.5 4.5-10 10-10h224.1c5.5 0 10 4.5 10 10v26.9c0 5.5 4.5 10 10 10h10"
      />
      <path
        className="st12"
        d="M5922.6 945.1c-1 0-1.9-.9-1.9-1.9v-9c0-1.1.9-1.9 1.9-1.9.5 0 .9.2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.4-.8.6-1.3.6z"
      />
      <path
        className="st1"
        d="M5922.6 933.4c.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.5.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.7 0 1.5-.3 2-.8l4.5-3.5.1-.1.1-.1c.9-1.2.9-2.8-.2-3.9l-4.5-5.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st0"
        d="M5810.7 940.8h-6c-11 .4-10.3-9-10.3-9s-.1-18.7 0-29.3v-9"
      />
      <path
        className="st12"
        d="M5813.6 947.5c-1 0-1.9-.9-1.9-1.9v-9c0-1.1.9-1.9 1.9-1.9.5 0 .9.2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.4-.8.6-1.3.6z"
      />
      <path
        className="st1"
        d="M5813.6 935.8c.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.5.3-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.7 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.8-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st0"
        d="M5695.6 940.8h-6c-11 .4-10.3-9-10.3-9s-.1-18.7 0-29.3v-11"
      />
      <path
        className="st12"
        d="M5698.6 947.5c-1 0-1.9-.9-1.9-1.9v-9c0-1.1.9-1.9 1.9-1.9.5 0 .9.2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.4-.8.6-1.3.6z"
      />
      <path
        className="st1"
        d="M5698.6 935.8c.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.5.3-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.7 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.8-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st0"
        d="M5789.8 1040v-84c.4-11-9-10.3-9-10.3h-16.3M5904.5 1040v-84c.4-11-9-10.3-9-10.3h-16.3M6017.5 1040v-84c.4-11-9-10.3-9-10.3h-16.3"
      />
      <path
        className="st12"
        d="M5783.7 1043c0-1 .9-1.9 1.9-1.9h9c1.1 0 1.9.9 1.9 1.9 0 .5-.2.9-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.4-.3-.6-.8-.6-1.3zM5898.4 1043c0-1 .9-1.9 1.9-1.9h9c1.1 0 1.9.9 1.9 1.9 0 .5-.2.9-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.4-.3-.6-.8-.6-1.3z"
      />
      <path
        className="st1"
        d="M5910.1 1043c0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.5.4-.9.9-.9h9c.5 0 1 .3 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .7.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.8.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <path
        className="st12"
        d="M6011.2 1043.2c0-1 .9-1.9 1.9-1.9h9c1.1 0 1.9.9 1.9 1.9 0 .5-.2.9-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.4-.3-.6-.8-.6-1.3z"
      />
      <path
        className="st1"
        d="M6022.9 1043.2c0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.5.4-.9.9-.9h9c.5 0 1 .3 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .7.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.8.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <path
        className="st0"
        d="M5789.5 1043.1v10.5c0 2.2 1.8 4.1 4.1 4.1H6045"
      />
      <text
        transform="translate(5835.486 1046.339)"
        className="st6 st8">
        {"FIS-02"}
      </text>
      <text
        transform="translate(5948.986 1046.339)"
        className="st6 st8">
        {"FIS-03"}
      </text>
      <path
        className="st27"
        d="M6067.7 1048.2h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM6052.5 1052.1l7.9 4.6c.4.2.5.7.3 1l-.3.3-7.9 4.6c-.4.2-.9.1-1.1-.3-.1-.1-.1-.2-.1-.4v-9.2c.1-.4.5-.8.9-.7.1 0 .2 0 .3.1z"
      />
      <path
        className="st27"
        d="m6068.1 1062.7-7.9-4.6c-.4-.2-.5-.7-.3-1l.3-.3 7.9-4.6c.4-.2.9-.1 1.1.3.1.1.1.2.1.4v9.2c-.1.4-.5.8-.9.7-.1 0-.2 0-.3-.1z"
      />
      <path
        className="st28"
        d="M6060.3 1047.2v10"
      />
      <path
        className="st29"
        d="M6051.3 1039.2h18M6060.3 1040.2v8"
      />
      <path
        className="st10"
        d="M5475.3 1044.9v-63"
      />
      <path
        className="st11"
        d="M5470.5 1040.6c0-.9.7-1.6 1.6-1.6h6.3c.9 0 1.6.7 1.6 1.6 0 .4-.2.8-.5 1.1l-3.1 3.1c-.6.6-1.5.6-2.2.1l-3.2-3.2c-.3-.3-.5-.7-.5-1.1z"
      />
      <path
        className="st1"
        d="M5479.1 1040.6c0 .2-.1.3-.2.4l-3.1 3.1c-.3.2-.6.2-.9 0l-3.1-3.1c-.1-.1-.2-.2-.2-.4 0-.3.2-.6.6-.6h6.3c.3 0 .6.3.6.6m2 0c0-1.4-1.2-2.6-2.6-2.6h-6.3c-1.4 0-2.6 1.2-2.6 2.6 0 .7.3 1.3.8 1.8l3.1 3.1.1.1.1.1c1 .9 2.6.8 3.5-.2l3.1-3.1c.5-.5.8-1.1.8-1.8z"
      />
      <path
        className="st11"
        d="m6365.7 1048.6-3.2 3.2c-.7.5-1.6.5-2.2-.1l-3.1-3.1c-.3-.3-.5-.7-.5-1.1 0-.9.7-1.6 1.6-1.6h6.3c.9 0 1.6.7 1.6 1.6 0 .4-.2.8-.5 1.1z"
      />
      <text
        transform="translate(5455.804 968.519)"
        className="st6 st8">
        {"CLORO"}
      </text>
      <path
        className="st26"
        d="M5496.1 884.8h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
      />
      <path
        className="st33"
        d="M5485.6 893.8h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
      />
      <path
        className="st38"
        d="M5455.6 905.5h38.8v40h-38.8z"
      />
      <path
        className="st26"
        d="M5494.4 898.8V944c0 .7-.4 1.3-.8 1.3h-37.1c-.5 0-.8-.6-.8-1.3v-45.2"
      />
      <path
        className="st10"
        d="M6206.7 1001v9.2c0 5.1 4.5 9.2 10 9.2l134.6-.2c5.5 0 10 4.5 10 10v16.5"
      />
      <path
        className="st9"
        d="M6075 1057.7h433c5.9-.1 9.7 4.7 9.8 10.6l-.6 327.3c0 5.7-4.6 10.3-10.3 10.3H5194.4c-5.5 0-10 4.5-10 10v238.6c0 5.4 4.4 9.8 9.8 9.8H5334"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={166}
        height={149}
        xlinkHref="solicitudscadaida/693C2F59.png"
        transform="translate(5383.765 1249.975) scale(.9376)"
      />
      <path
        className="st1"
        d="M5442.1 1259.3H5399c-3.5 0-6.3 2.8-6.3 6.2V1367.9c0 3.5 2.8 6.3 6.2 6.3H5450.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.2V1265.6c0-3.5-2.8-6.3-6.2-6.3h-82.6z"
      />
      <path
        className="st2"
        d="M5392.8 1266.7h138.1v99.8h-138.1z"
      />
      <text
        transform="translate(5439.988 1306.259)"
        className="st3 st5">
        {"E.C. de"}
      </text>
      <text
        transform="translate(5426.268 1323.059)"
        className="st3 st5">
        {"Alimentaci\xF3n"}
      </text>
      <path
        className="st3"
        d="M5408.9 1340.5c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-2 1.3-2.5 2.3z"
      />
      <path
        className="st3"
        d="M5407.2 1339.5c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.6-2.9 1.7-3.7 3.1zM5418.5 1338.2c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.8-2.5-2.3z"
      />
      <path
        className="st3"
        d="M5419.1 1336.4c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6s.9 2.6.7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-.9-1.4-2.2-2.5-3.7-3.1zM5420 1345.5v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM5415 1353c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z"
      />
      <text
        transform="translate(5433.798 1351.569)"
        className="st6 st7">
        {"00.00"}
      </text>
      <text
        transform="translate(5480.07 1351.179)"
        className="st6 st5">
        {"\xB5S/cm"}
      </text>
      <text
        transform="translate(5446.968 1286.41)"
        className="st6 st8">
        {"AE201"}
      </text>
      <circle
        className="st32"
        cx={5460.6}
        cy={1406.2}
        r={9.2}
      />
      <circle
        className="st32"
        cx={6419.2}
        cy={1057.2}
        r={9.2}
      />
      <circle
        className="st32"
        cx={5251.8}
        cy={1407.2}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={162}
        height={145}
        xlinkHref="solicitudscadaida/693C2F5A.png"
        transform="translate(5174.913 1247.43) scale(.9664)"
      />
      <path
        className="st1"
        d="M5233.7 1257h-43.1c-3.5 0-6.3 2.8-6.3 6.2V1365.6c0 3.5 2.8 6.3 6.2 6.3H5242.3c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.2V1263.3c0-3.5-2.8-6.3-6.2-6.3h-82.6z"
      />
      <path
        className="st2"
        d="M5184.4 1264.4h138.1v99.8h-138.1z"
      />
      <text
        transform="translate(5240.247 1306.909)"
        className="st3 st5">
        {"OR"}
      </text>
      <text
        transform="translate(5259.747 1306.909)"
        className="st3 st5">
        {"P"}
      </text>
      <text
        transform="translate(5217.017 1323.709)"
        className="st3 st5">
        {"Alimentaci\xF3n"}
      </text>
      <path
        className="st3"
        d="M5200.8 1339.2c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-2 1.3-2.5 2.3z"
      />
      <path
        className="st3"
        d="M5199.1 1338.2c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.6-2.9 1.7-3.7 3.1zM5210.3 1336.9c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.5-1-1.4-1.8-2.5-2.3z"
      />
      <path
        className="st3"
        d="M5210.9 1335.1c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6s.9 2.6.7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-.9-1.4-2.1-2.4-3.7-3.1zM5211.9 1344.2v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.6 1.6-1.5v-.2c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM5206.9 1351.7c.9 0 1.7-.8 1.7-1.7h-3.3c-.1.9.6 1.7 1.6 1.7z"
      />
      <text
        transform="translate(5232.637 1351.228)"
        className="st6 st7">
        {"000.0"}
      </text>
      <text
        transform="translate(5288.897 1349.839)"
        className="st6 st5">
        {"mV"}
      </text>
      <text
        transform="translate(5237.717 1287.07)"
        className="st6 st8">
        {"AE202"}
      </text>
      <path
        className="st27"
        d="M5375.5 1658.6c0-6.7-7.8-12.1-17.5-12.1s-17.5 5.5-17.5 12.1h.1c-.1.4-.1.7-.1 1.1v37.6c0 3.5 3.4 6.4 7.6 6.8v6.2h5.2v-6.1h9v6.1h5.2v-6.2c4.5-.2 8-3.2 8-6.8v-37.6c0-.3-.1-.7 0-1.1z"
      />
      <circle
        className="st32"
        cx={5357.4}
        cy={1627.1}
        r={9.2}
      />
      <path
        className="st1"
        d="M5480.9 1817.2h45.1c3.5 0 6.3-2.8 6.3-6.2V1708.6c0-3.5-2.8-6.3-6.2-6.3H5472.3c-1.3 0-2.5-.4-3.5-1.3-6.4-6.7-6.4-6.7-12.9-.2l-.4.3c-1 .8-2.2 1.2-3.4 1.2h-51.7c-3.5 0-6.3 2.8-6.3 6.2V1810.9c0 3.5 2.8 6.3 6.2 6.3h80.6z"
      />
      <path
        className="st2"
        d="M5394.2 1710h138.1v99.8h-138.1z"
      />
      <text
        transform="translate(5440.256 1753.76)"
        className="st3 st5">
        {"Presi\xF3n"}
      </text>
      <text
        transform="translate(5429.786 1770.56)"
        className="st3 st5">
        {"Post Filtros"}
      </text>
      <path
        className="st3"
        d="M5410.3 1785c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-2 1.3-2.5 2.3z"
      />
      <path
        className="st3"
        d="M5408.6 1784c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.6-2.9 1.7-3.7 3.1zM5419.9 1782.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.8-2.5-2.3z"
      />
      <path
        className="st3"
        d="M5420.5 1780.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6s.9 2.6.7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-.9-1.4-2.2-2.5-3.7-3.1zM5421.4 1790v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM5416.4 1797.5c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z"
      />
      <text
        transform="translate(5446.156 1796.069)"
        className="st6 st7">
        {"0.00"}
      </text>
      <text
        transform="translate(5499.426 1794.679)"
        className="st6 st5">
        {"bar"}
      </text>
      <text
        transform="translate(5446.496 1733.911)"
        className="st6 st8">
        {"PT0"}
      </text>
      <text
        transform="translate(5466.666 1733.911)"
        className="st6 st8">
        {"1"}
      </text>
      <text
        transform="translate(5471.976 1733.911)"
        className="st6 st8">
        {"1"}
      </text>
      <image
        style={{
          overflow: "visible",
          opacity: 0.2,
          enableBackground: "new"
        }}
        width={175}
        height={142}
        xlinkHref="solicitudscadaida/693C2F5B.png"
        transform="translate(5271.701 1468.682) scale(.9805)"
      />
      <path
        className="st1"
        d="M5338.1 1477.8H5287c-3.5 0-6.3 2.8-6.3 6.2V1586.4c0 3.5 2.8 6.3 6.2 6.3H5346.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h61.7c3.5 0 6.3-2.8 6.3-6.2V1484.1c0-3.5-2.8-6.3-6.2-6.3h-90.6z"
      />
      <path
        className="st2"
        d="M5280.8 1485.2h154.1v99.8h-154.1z"
      />
      <text
        transform="translate(5294.496 1523.759)"
        className="st3 st5">
        {"Diferencial de Presi\xF3n"}
      </text>
      <path
        className="st3"
        d="M5304.9 1559c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-2 1.3-2.5 2.3z"
      />
      <path
        className="st3"
        d="M5303.2 1558c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.6-2.9 1.7-3.7 3.1zM5314.5 1556.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.8-2.5-2.3z"
      />
      <path
        className="st3"
        d="M5315.1 1554.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6s.9 2.6.7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-.9-1.4-2.2-2.5-3.7-3.1zM5316 1564v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM5311 1571.5c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z"
      />
      <text
        transform="translate(5340.816 1570.069)"
        className="st6 st7">
        {"0.00"}
      </text>
      <text
        transform="translate(5394.086 1569.679)"
        className="st6 st5">
        {"bar"}
      </text>
      <text
        transform="translate(5336.876 1504.909)"
        className="st6 st8">
        {"DPP012"}
      </text>
      <text
        transform="translate(5308.236 1541.759)"
        className="st3 st5">
        {"Filtros Cartuchos"}
      </text>
      <path
        className="st9"
        d="M5381.2 1664.7h162.3"
      />
      <circle
        className="st32"
        cx={5462.9}
        cy={1664.1}
        r={9.2}
      />
      <path
        className="st33"
        d="M5593.8 1634.1h-17.4c-1.1-.3-2.3-.4-3.4-.4-8 0-14.6 6.5-14.6 14.5v.1c0 3.9 1.5 7.6 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.7-2.7 4.2-6.4 4.2-10.3 0-1.4-.2-2.8-.6-4.2h6.8c1.5 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        width={45}
        height={48}
        xlinkHref="solicitudscadaida/693C2F58.png"
        transform="translate(5556.063 1630.679) scale(.7315)"
      />
      <circle
        className="st1"
        cx={5573}
        cy={1648.6}
        r={10.9}
      />
      <circle
        className="st2"
        cx={5573}
        cy={1648.4}
        r={8}
      />
      <text
        transform="translate(5558.386 1688.299)"
        className="st6 st8">
        {"P-002"}
      </text>
      <path
        className="st12"
        d="M5546 1671.1c-1 0-1.9-.9-1.9-1.9v-9c0-1.1.9-1.9 1.9-1.9.5 0 .9.2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.6-.8.6-1.3.6z"
      />
      <path
        className="st1"
        d="M5546 1659.4c.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.5.3-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.7 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.8-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st0"
        d="M6033.8 1637.8H6330"
      />
      <path
        className="st33"
        d="M6024.3 1651.7h-132c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.8 3.8-6 3.8z"
      />
      <path
        className="st3"
        d="M6025.6 1651.7h-133c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.9-.2.9z"
      />
      <path
        className="st33"
        d="M6024.3 1676.8h-132c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.8 3.8-6 3.8z"
      />
      <path
        className="st3"
        d="M6025.6 1676.8h-133c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.9-.2.9z"
      />
      <path
        className="st33"
        d="M6024.3 1701.9h-132c-3.3 0-6-1.7-6-3.8V1685c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.2-2.8 3.8-6 3.8z"
      />
      <path
        className="st3"
        d="M6025.6 1701.9h-133c-3.4 0-6.3-1.7-6.3-3.8V1685c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.9-.2.9z"
      />
      <path
        className="st33"
        d="M6024.3 1727h-132c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.2c0 2.1-2.8 3.7-6 3.7z"
      />
      <path
        className="st3"
        d="M6025.6 1727h-133c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.1 20c.7.1.6.7-.1.7z"
      />
      <path
        className="st33"
        d="M6024.3 1752.1h-132c-3.3 0-6-1.7-6-3.8v-13c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.8 3.7-6 3.7z"
      />
      <path
        className="st3"
        d="M6025.6 1752.1h-133c-3.4 0-6.3-1.7-6.3-3.8v-13c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.8-.2.8z"
      />
      <path
        className="st0"
        d="M5882.5 1742.8h-16.3c-2.8 0-5-2.2-5-5v-99H5602M5862.1 1666.3h20.4M5861.8 1691.3h20.4M6033.8 1743.4h16.4c2.8 0 5-2.2 5-5v-99M6054.2 1666.3h-20.4M6054.5 1691.3h-20.4M5861.8 1717.3h20.4M6054.5 1717.3h-20.4"
      />
      <circle
        className="st32"
        cx={5645.9}
        cy={1640.9}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={163}
        height={144}
        xlinkHref="solicitudscadaida/693C2F54.png"
        transform="translate(5567.539 1483.609) scale(.9661)"
      />
      <path
        className="st1"
        d="M5626.8 1492.6h-43.1c-3.5 0-6.3 2.8-6.3 6.2V1601.2c0 3.5 2.8 6.3 6.2 6.3H5635.4c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.2V1498.9c0-3.5-2.8-6.3-6.2-6.3h-82.6z"
      />
      <path
        className="st2"
        d="M5577.5 1500h138.1v99.8h-138.1z"
      />
      <text
        transform="translate(5623.123 1546.587)"
        className="st3 st5">
        {"Presi\xF3n  "}
      </text>
      <text
        transform="translate(5621.723 1562.187)"
        className="st3 st5">
        {"Osmosis"}
      </text>
      <path
        className="st3"
        d="M5593.6 1573.8c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-2 1.3-2.5 2.3z"
      />
      <path
        className="st3"
        d="M5591.9 1572.8c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.6-2.9 1.7-3.7 3.1zM5603.2 1571.5c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.3z"
      />
      <path
        className="st3"
        d="M5603.8 1569.7c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6s.9 2.6.7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-.9-1.3-2.2-2.4-3.7-3.1zM5604.7 1578.8v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM5599.7 1586.3c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z"
      />
      <text
        transform="translate(5630.406 1584.909)"
        className="st6 st7">
        {"0.00"}
      </text>
      <text
        transform="translate(5684.766 1583.519)"
        className="st6 st5">
        {"bar"}
      </text>
      <text
        transform="translate(5630.856 1525.748)"
        className="st6 st8">
        {"PT017"}
      </text>
      <circle
        className="st32"
        cx={6121.9}
        cy={1638.1}
        r={9.2}
      />
      <circle
        className="st32"
        cx={6281.9}
        cy={1638.1}
        r={9.2}
      />
      <path
        className="st3"
        d="M6394 1699.2h124.8v97.7H6394z"
      />
      <path
        className="st26"
        d="M6518.6 1682.9v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1v-111.2"
      />
      <path
        className="st12"
        d="M6472.4 1687.7c0-1 .9-1.9 1.9-1.9h9c1.1 0 1.9.9 1.9 1.9 0 .5-.2.9-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.4-.3-.6-.8-.6-1.3z"
      />
      <path
        className="st1"
        d="M6484.1 1687.7c0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.5.4-.9.9-.9h9c.5 0 1 .3 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .7.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.8.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <path
        className="st0"
        d="M6043 1744.7v160c0 5.5 4.5 10 10 10h22"
      />
      <path
        className="st27"
        d="M6097.7 1906.2h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM6082.5 1910.1l7.9 4.6c.4.2.5.7.3 1l-.3.3-7.9 4.6c-.4.2-.9.1-1.1-.3-.1-.1-.1-.2-.1-.4v-9.2c.1-.4.5-.8.9-.7.1 0 .2 0 .3.1z"
      />
      <path
        className="st27"
        d="m6098.1 1920.7-7.9-4.6c-.4-.2-.5-.7-.3-1l.3-.3 7.9-4.6c.4-.2.9-.1 1.1.3.1.1.1.2.1.4v9.2c-.1.4-.5.8-.9.7-.1 0-.2 0-.3-.1z"
      />
      <path
        className="st28"
        d="M6090.3 1905.2v10"
      />
      <path
        className="st29"
        d="M6081.3 1897.2h18M6090.3 1898.2v8"
      />
      <path
        className="st27"
        d="M6152.7 2042.2h3.7v11h-3.7z"
      />
      <path
        className="st27"
        d="M6161.7 2036.2c.7.8.7 2 0 2.8l-5.6 5.6c-.8.7-2 .7-2.8 0l-5.6-5.6c-.7-.8-.7-2 0-2.8"
      />
      <path
        className="st12"
        d="m6160.5 2026.4-4.5 4.5-.1.1c-.8.6-1.9.6-2.6-.1l-4.5-4.5c-.7-.8-.7-2 .1-2.7.4-.3.8-.5 1.3-.5h9c1 0 1.9.9 1.9 1.9 0 .5-.2 1-.6 1.3z"
      />
      <path
        className="st1"
        d="M6149.4 2025.1c0-.5.4-.9.9-.9h9.1c.5 0 .9.4.9.9 0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6m-2 0c0 .8.3 1.5.9 2l4.5 4.5c1.1 1.1 2.7 1.1 3.9.2l.1-.1.1-.1 4.5-4.5c.5-.5.8-1.3.8-2 0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9z"
      />
      <circle
        className="st32"
        cx={6042.4}
        cy={1834.6}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.2,
          enableBackground: "new"
        }}
        width={184}
        height={125}
        xlinkHref="solicitudscadaida/693C2F57.png"
        transform="translate(5848.719 1772.808) scale(.9758)"
      />
      <path
        className="st1"
        d="M5964.4 1781.9h42.1c3.5 0 6.3 2.8 6.3 6.3v33.2c0 .8.3 1.6.8 2.2l5.3 6.5c1.1 1.4 1 3.3-.1 4.6l-5.1 5.5c-.6.7-.9 1.5-.9 2.4v36.9c0 3.5-2.8 6.3-6.3 6.3H5864c-3.5 0-6.3-2.8-6.3-6.3v-91.3c0-3.5 2.8-6.3 6.2-6.3h100.5z"
      />
      <path
        className="st2"
        d="M5864 1781.9h143.8v103.9H5864z"
      />
      <text
        transform="translate(5903.096 1826.621)"
        className="st3 st5">
        {"Presi\xF3n de"}
      </text>
      <text
        transform="translate(5908.516 1844.422)"
        className="st3 st5">
        {"Rechazo"}
      </text>
      <path
        className="st17"
        d="M5880.8 1860.3c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
      />
      <path
        className="st17"
        d="M5879.1 1859.3c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM5890.4 1858c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
      />
      <path
        className="st17"
        d="M5891 1856.1c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM5891.8 1865.3v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM5886.8 1872.7c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
      />
      <text
        transform="translate(5918.236 1871.399)"
        className="st6 st7">
        {"00.0"}
      </text>
      <text
        transform="translate(5971.826 1869.999)"
        className="st6 st5">
        {"bar"}
      </text>
      <text
        transform="translate(5917.966 1807.623)"
        className="st6 st8">
        {"PT025"}
      </text>
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={166}
        height={148}
        xlinkHref="solicitudscadaida/693C2F6D.png"
        transform="translate(6045.118 1482.466) scale(.9404)"
      />
      <path
        className="st1"
        d="M6103.3 1491.8h-43.1c-3.5 0-6.3 2.8-6.3 6.2V1600.4c0 3.5 2.8 6.3 6.2 6.3H6111.9c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.2V1498.1c0-3.5-2.8-6.3-6.2-6.3h-82.6z"
      />
      <path
        className="st2"
        d="M6054 1499.2h138.1v99.8H6054z"
      />
      <text
        transform="translate(6100.776 1546.758)"
        className="st3 st5">
        {"Presi\xF3n  "}
      </text>
      <text
        transform="translate(6094.677 1562.358)"
        className="st3 st5">
        {"Permeado"}
      </text>
      <path
        className="st3"
        d="M6069.1 1573c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-2 1.3-2.5 2.3z"
      />
      <path
        className="st3"
        d="M6067.4 1572c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.6-2.9 1.7-3.7 3.1zM6078.7 1570.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.8-2.5-2.3z"
      />
      <path
        className="st3"
        d="M6079.3 1568.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6s.9 2.6.7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-.9-1.4-2.2-2.5-3.7-3.1zM6080.2 1578v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM6075.2 1585.5c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z"
      />
      <text
        transform="translate(6106.917 1584.069)"
        className="st6 st7">
        {"0.00"}
      </text>
      <text
        transform="translate(6159.267 1583.679)"
        className="st6 st5">
        {"bar"}
      </text>
      <text
        transform="translate(6106.217 1525.909)"
        className="st6 st8">
        {"PT020"}
      </text>
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={166}
        height={148}
        xlinkHref="solicitudscadaida/693C2F70.png"
        transform="translate(5886.151 1482.466) scale(.9404)"
      />
      <path
        className="st1"
        d="M5944.3 1491.8h-43.1c-3.5 0-6.3 2.8-6.3 6.2V1600.4c0 3.5 2.8 6.3 6.2 6.3H5952.9c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.2V1498.1c0-3.5-2.8-6.3-6.2-6.3h-82.6z"
      />
      <path
        className="st2"
        d="M5895 1499.2h138.1v99.8H5895z"
      />
      <text
        transform="translate(5925.71 1543.358)"
        className="st3 st5">
        {"Recuperaci\xF3n"}
      </text>
      <path
        className="st3"
        d="M5910.1 1573c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-2 1.3-2.5 2.3z"
      />
      <path
        className="st3"
        d="M5908.4 1572c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.6-2.9 1.7-3.7 3.1zM5919.7 1570.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.8-2.5-2.3z"
      />
      <path
        className="st3"
        d="M5920.3 1568.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6s.9 2.6.7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-.9-1.4-2.2-2.5-3.7-3.1zM5921.2 1578v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM5916.2 1585.5c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z"
      />
      <text
        transform="translate(5947.951 1584.069)"
        className="st6 st7">
        {"0.00"}
      </text>
      <text
        transform="translate(6000.301 1583.679)"
        className="st6 st5">
        {"%"}
      </text>
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={166}
        height={149}
        xlinkHref="solicitudscadaida/693C2F71.png"
        transform="translate(6204.317 1481.963) scale(.9376)"
      />
      <path
        className="st1"
        d="M6263.3 1491.8h-43.1c-3.5 0-6.3 2.8-6.3 6.2V1600.4c0 3.5 2.8 6.3 6.2 6.3H6271.9c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.2V1498.1c0-3.5-2.8-6.3-6.2-6.3h-82.6z"
      />
      <path
        className="st2"
        d="M6214 1499.2h138.1v99.8H6214z"
      />
      <text
        transform="translate(6273.753 1543.756)"
        className="st3 st5">
        {"pH  "}
      </text>
      <text
        transform="translate(6253.853 1559.356)"
        className="st3 st5">
        {"Permeado"}
      </text>
      <path
        className="st3"
        d="M6230.1 1574c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-2 1.3-2.5 2.3z"
      />
      <path
        className="st3"
        d="M6228.4 1573c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.6-2.9 1.7-3.7 3.1zM6239.7 1571.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.8-2.5-2.3z"
      />
      <path
        className="st3"
        d="M6240.3 1569.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6s.9 2.6.7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-.9-1.4-2.2-2.5-3.7-3.1zM6241.2 1579v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM6236.2 1586.5c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z"
      />
      <text
        transform="translate(6266.902 1584.069)"
        className="st6 st7">
        {"0.00"}
      </text>
      <text
        transform="translate(6322.252 1583.679)"
        className="st6 st5">
        {"pH"}
      </text>
      <text
        transform="translate(6267.942 1525.909)"
        className="st6 st8">
        {"AE2"}
      </text>
      <text
        transform="translate(6288.732 1525.909)"
        className="st6 st8">
        {"1"}
      </text>
      <text
        transform="translate(6294.032 1525.909)"
        className="st6 st8">
        {"1"}
      </text>
      <circle
        className="st32"
        cx={6200.2}
        cy={1639.2}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={166}
        height={149}
        xlinkHref="solicitudscadaida/693C2F72.png"
        transform="matrix(.9376 0 0 -.9376 6123.453 1798.923)"
      />
      <path
        className="st1"
        d="M6219.2 1789.6h45.1c3.5 0 6.3-2.8 6.3-6.2V1681c0-3.5-2.8-6.3-6.2-6.3H6210.6c-1.3 0-2.5-.4-3.5-1.3-6.4-6.7-6.4-6.7-12.9-.2l-.4.3c-1 .8-2.2 1.2-3.4 1.2h-51.7c-3.5 0-6.3 2.8-6.3 6.2V1783.3c0 3.5 2.8 6.3 6.2 6.3h80.6z"
      />
      <path
        className="st2"
        d="M6132.5 1682.4h138.1v99.8h-138.1z"
      />
      <text
        transform="translate(6191.17 1728.925)"
        className="st3 st5">
        {"E.C  "}
      </text>
      <text
        transform="translate(6173.87 1744.525)"
        className="st3 st5">
        {"Permeado"}
      </text>
      <path
        className="st3"
        d="M6148.6 1755.4c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-2 1.3-2.5 2.3z"
      />
      <path
        className="st3"
        d="M6146.9 1754.4c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.6-2.9 1.7-3.7 3.1zM6158.2 1753.1c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.8-2.5-2.3z"
      />
      <path
        className="st3"
        d="M6158.8 1751.3c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6s.9 2.6.7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-.9-1.4-2.2-2.5-3.7-3.1zM6159.7 1760.4v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM6154.7 1767.9c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z"
      />
      <text
        transform="translate(6175.486 1766.409)"
        className="st6 st7">
        {"000.0"}
      </text>
      <text
        transform="translate(6185.666 1708.237)"
        className="st6 st8">
        {"AE207"}
      </text>
      <text
        transform="translate(6220.326 1766.349)"
        className="st6 st5">
        {"\xB5S/cm"}
      </text>
      <path
        className="st0"
        d="M6330 1637.8h140.5c4.7 0 8.5 3.8 8.5 8.5v38.3"
      />
      <circle
        className="st39"
        cx={6142}
        cy={1057.4}
        r={9.2}
      />
      <text
        transform="translate(6181.096 992.519)"
        className="st6 st8">
        {"BISULFI"}
      </text>
      <text
        transform="translate(6222.666 992.519)"
        className="st6 st8">
        {"T"}
      </text>
      <text
        transform="translate(6229.186 992.519)"
        className="st6 st8">
        {"O"}
      </text>
      <path
        className="st26"
        d="M6230.4 910.8h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
      />
      <path
        className="st33"
        d="M6219.9 919.8h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
      />
      <path
        className="st38"
        d="M6189.9 931.5h38.8v40h-38.8z"
      />
      <path
        className="st26"
        d="M6228.7 924.8V970c0 .7-.4 1.3-.8 1.3h-37.1c-.5 0-.8-.6-.8-1.3v-45.2"
      />
      <text
        transform="translate(1053.44 919.427)"
        className="st6 st8">
        {"BOMBA "}
      </text>
      <text
        transform="translate(1053.44 932.627)"
        className="st6 st8">
        {"DOSIFICADORA"}
      </text>
      <text
        transform="translate(1053.44 945.827)"
        className="st6 st8">
        {"DE CLORO"}
      </text>
      <path
        className="st26"
        d="M1099.8 822.4h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
      />
      <path
        className="st33"
        d="M1089.3 831.4h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
      />
      <path
        className="st38"
        d="M1059.3 843.1h38.8v40h-38.8z"
      />
      <path
        className="st26"
        d="M1098.1 836.4v45.2c0 .7-.4 1.3-.8 1.3h-37.1c-.5 0-.8-.6-.8-1.3v-45.2"
      />
      <circle
        className="st34"
        cx={5251.9}
        cy={1665}
        r={9.2}
      />
      <path
        className="st1"
        d="M5270.9 1817.2h45.1c3.5 0 6.3-2.8 6.3-6.2V1708.6c0-3.5-2.8-6.3-6.2-6.3H5262.3c-1.3 0-2.5-.4-3.5-1.3-6.4-6.7-6.4-6.7-12.9-.2l-.4.3c-1 .8-2.2 1.2-3.4 1.2h-51.7c-3.5 0-6.3 2.8-6.3 6.2V1810.9c0 3.5 2.8 6.3 6.2 6.3h80.6z"
      />
      <path
        className="st2"
        d="M5184.2 1710h138.1v99.8h-138.1z"
      />
      <text
        transform="translate(5229.426 1753.76)"
        className="st3 st5">
        {"Presi\xF3n"}
      </text>
      <text
        transform="translate(5221.856 1770.56)"
        className="st3 st5">
        {"Pre Filtros"}
      </text>
      <path
        className="st3"
        d="M5199.3 1784c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-2 1.3-2.5 2.3z"
      />
      <path
        className="st3"
        d="M5197.6 1783c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.6-2.9 1.7-3.7 3.1zM5208.9 1781.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.8-2.5-2.3z"
      />
      <path
        className="st3"
        d="M5209.5 1779.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6s.9 2.6.7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-.9-1.4-2.2-2.5-3.7-3.1zM5210.4 1789v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM5205.4 1796.5c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z"
      />
      <text
        transform="translate(5236.156 1795.069)"
        className="st6 st7">
        {"0.00"}
      </text>
      <text
        transform="translate(5289.426 1794.679)"
        className="st6 st5">
        {"bar"}
      </text>
      <text
        transform="translate(5235.266 1733.911)"
        className="st6 st8">
        {"PT008"}
      </text>
      <circle
        className="st32"
        cx={6439.9}
        cy={1638.1}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={162}
        height={144}
        xlinkHref="solicitudscadaida/693C2F6C.png"
        transform="translate(6362.582 1481.43) scale(.9694)"
      />
      <path
        className="st1"
        d="M6421.8 1491.8h-43.1c-3.5 0-6.3 2.8-6.3 6.2V1600.4c0 3.5 2.8 6.3 6.2 6.3H6430.4c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.2V1498.1c0-3.5-2.8-6.3-6.2-6.3h-82.6z"
      />
      <path
        className="st2"
        d="M6372.5 1499.2h138.1v99.8h-138.1z"
      />
      <text
        transform="translate(6412.736 1560.759)"
        className="st3 st5">
        {"Permeado"}
      </text>
      <path
        className="st3"
        d="M6388.6 1574c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-2 1.3-2.5 2.3z"
      />
      <path
        className="st3"
        d="M6386.9 1573c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.6-2.9 1.7-3.7 3.1zM6398.2 1571.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.8-2.5-2.3z"
      />
      <path
        className="st3"
        d="M6398.8 1569.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6s.9 2.6.7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-.9-1.4-2.2-2.5-3.7-3.1zM6399.7 1579v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM6394.7 1586.5c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z"
      />
      <text
        transform="translate(6425.406 1584.069)"
        className="st6 st7">
        {"0.00"}
      </text>
      <text
        transform="translate(6470.756 1583.679)"
        className="st6 st5">
        {"m"}
      </text>
      <text
        transform="translate(6481.585 1579.35)"
        className="st6 st4"
        style={{
          fontSize: "7.579px"
        }}>
        {"3"}
      </text>
      <text
        transform="translate(6485.8 1583.679)"
        className="st6 st5">
        {"/h"}
      </text>
      <text
        transform="translate(6425.306 1525.909)"
        className="st6 st8">
        {"FIT003"}
      </text>
      <text
        transform="translate(6413.096 1544.759)"
        className="st3 st5">
        {"Caudal de"}
      </text>
      <path
        className="st0"
        d="M6105 1914.2h40c5.5 0 10 4.5 10 10v97"
      />
      <circle
        className="st35"
        cx={6154.4}
        cy={1969.6}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.2,
          enableBackground: "new"
        }}
        width={184}
        height={124}
        xlinkHref="solicitudscadaida/693C2F68.png"
        transform="translate(6171.729 1909.802) scale(.9757)"
      />
      <path
        className="st1"
        d="M6236.1 1918.4h100.4c3.5 0 6.3 2.8 6.3 6.2V2016c0 3.5-2.8 6.3-6.3 6.3H6194c-3.5 0-6.3-2.8-6.3-6.3v-36.9c0-.9-.3-1.7-.9-2.4l-5.1-5.5c-1.1-1.3-1.2-3.2-.1-4.6l5.3-6.5c.5-.6.8-1.4.8-2.2v-33.2c0-3.5 2.8-6.3 6.3-6.3h42.1z"
      />
      <path
        className="st2"
        d="M6192.7 1918.4h143.8v103.9h-143.8z"
      />
      <text
        transform="translate(6234.535 1962.12)"
        className="st3 st5">
        {"Caudal de"}
      </text>
      <text
        transform="translate(6238.155 1978.92)"
        className="st3 st5">
        {"Rechazo"}
      </text>
      <path
        className="st17"
        d="M6209.3 1996.8c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
      />
      <path
        className="st17"
        d="M6207.6 1995.8c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM6218.9 1994.5c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
      />
      <path
        className="st17"
        d="M6219.5 1992.6c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM6220.3 2001.8v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM6215.3 2009.2c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
      />
      <text
        transform="translate(6244.727 2006.899)"
        className="st6 st4"
        style={{
          fontSize: 18
        }}>
        {"00.0"}
      </text>
      <text
        transform="translate(6290.327 2006.499)"
        className="st6 st5">
        {"m"}
      </text>
      <text
        transform="translate(6301.156 2002.17)"
        className="st6 st4"
        style={{
          fontSize: "7.579px"
        }}>
        {"3"}
      </text>
      <text
        transform="translate(6305.371 2006.499)"
        className="st6 st5">
        {"/h"}
      </text>
      <text
        transform="translate(6248.386 1940.619)"
        className="st6 st8">
        {"FIT002"}
      </text>
      <text
        transform="translate(5343.716 1728.969)"
        className="st6 st8">
        {"F-006"}
      </text>
      <path
        className="st12"
        d="m5639.2 1411.3-4.5-4.5-.1-.1c-.6-.8-.6-1.9.1-2.6l4.5-4.5c.8-.7 2-.7 2.7.1.3.4.5.8.5 1.3v9c0 1-.9 1.9-1.9 1.9-.5 0-1 0-1.3-.6z"
      />
      <path
        className="st1"
        d="M5640.5 1400.2c.5 0 .9.4.9.9v9.1c0 .5-.4.9-.9.9-.2 0-.4-.1-.6-.3l-4.5-4.5c-.3-.4-.3-.9 0-1.3l4.5-4.5c.2-.2.4-.3.6-.3m0-2c-.8 0-1.5.3-2 .9l-4.5 4.5c-1.1 1.1-1.1 2.7-.2 3.9l.1.1.1.1 4.5 4.5c.5.5 1.3.8 2 .8 1.6 0 2.9-1.3 2.9-2.9v-9c0-1.6-1.3-2.9-2.9-2.9z"
      />
      <path
        className="st12"
        d="m5190 1534.4-4.5 4.5-.1.1c-.8.6-1.9.6-2.6-.1l-4.5-4.5c-.7-.8-.7-2 .1-2.7.4-.3.8-.5 1.3-.5h9c1 0 1.9.9 1.9 1.9 0 .5 0 1-.6 1.3z"
      />
      <path
        className="st1"
        d="M5178.9 1533.1c0-.5.4-.9.9-.9h9.1c.5 0 .9.4.9.9 0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6m-2 0c0 .8.3 1.5.9 2l4.5 4.5c1.1 1.1 2.7 1.1 3.9.2l.1-.1.1-.1 4.5-4.5c.5-.5.8-1.3.8-2 0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9z"
      />
      <path
        className="st12"
        d="m6524.5 1216-4.5 4.5-.1.1c-.8.6-1.9.6-2.6-.1l-4.5-4.5c-.7-.8-.7-2 .1-2.7.3-.3.8-.5 1.3-.5h9c1 0 1.9.9 1.9 1.9 0 .5 0 1-.6 1.3z"
      />
      <path
        className="st1"
        d="M6512.4 1214.7c0-.5.4-.9.9-.9h9.1c.5 0 .9.4.9.9 0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6m-2 0c0 .8.3 1.5.9 2l4.5 4.5c1.1 1.1 2.7 1.1 3.9.2l.1-.1.1-.1 4.5-4.5c.5-.5.8-1.3.8-2 0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={165}
        height={149}
        xlinkHref="solicitudscadaida/693C2F78.png"
        transform="translate(5765.25 674.731) scale(.9407)"
      />
      <path
        className="st1"
        d="M5824.3 684.8h-43.1c-3.5 0-6.3 2.8-6.3 6.2V793.4c0 3.5 2.8 6.3 6.2 6.3H5832.9c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.2V691.1c0-3.5-2.8-6.3-6.2-6.3h-82.6z"
      />
      <path
        className="st2"
        d="M5775 692.2h138.1V792H5775z"
      />
      <text
        transform="translate(5806.002 738.764)"
        className="st3 st5">
        {"Diferencial de"}
      </text>
      <text
        transform="translate(5803.952 754.365)"
        className="st3 st5">
        {"Presi\xF3n Filtros"}
      </text>
      <path
        className="st3"
        d="M5791.7 767c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9.1-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.3z"
      />
      <path
        className="st3"
        d="M5790 766c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-2.9 1.6-3.7 3.1zM5801.3 764.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.8-2.5-2.3z"
      />
      <path
        className="st3"
        d="M5801.9 762.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-.9-1.4-2.2-2.5-3.7-3.1zM5802.8 772v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM5797.8 779.5c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.6 1.6 1.7z"
      />
      <text
        transform="translate(5829.192 777.08)"
        className="st6 st7">
        {"00.0"}
      </text>
      <text
        transform="translate(5876.813 776.68)"
        className="st6 st5">
        {"bar"}
      </text>
      <text
        transform="translate(5825.662 718.915)"
        className="st6 st8">
        {"DPP0"}
      </text>
      <text
        transform="translate(5854.402 718.915)"
        className="st6 st8">
        {"1"}
      </text>
      <text
        transform="translate(5859.702 718.915)"
        className="st6 st8">
        {"1"}
      </text>
      <circle
        className="st32"
        cx={5543.7}
        cy={1055.4}
        r={9.2}
      />
      <path
        className="st0"
        d="M5860.6 1638.8h20.4"
      />
      <circle
        className="st32"
        cx={5805.9}
        cy={1640.9}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={162}
        height={144}
        xlinkHref="solicitudscadaida/693C2F79.png"
        transform="translate(5726.718 1482.46) scale(.9694)"
      />
      <path
        className="st1"
        d="M5787 1492.6h-43.1c-3.5 0-6.3 2.8-6.3 6.2V1601.2c0 3.5 2.8 6.3 6.2 6.3H5795.6c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.2V1498.9c0-3.5-2.8-6.3-6.2-6.3H5787z"
      />
      <path
        className="st2"
        d="M5737.7 1500h138.1v99.8h-138.1z"
      />
      <text
        transform="translate(5775.506 1543.589)"
        className="st3 st5">
        {"Caudal de"}
      </text>
      <path
        className="st3"
        d="M5753.8 1573.8c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-2 1.3-2.5 2.3z"
      />
      <path
        className="st3"
        d="M5752.1 1572.8c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.6-2.9 1.7-3.7 3.1zM5763.4 1571.5c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.3z"
      />
      <path
        className="st3"
        d="M5764 1569.7c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6s.9 2.6.7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-.9-1.3-2.2-2.4-3.7-3.1zM5764.9 1578.8v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM5759.9 1586.3c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z"
      />
      <text
        transform="translate(5790.616 1584.909)"
        className="st6 st7">
        {"0.00"}
      </text>
      <text
        transform="translate(5835.966 1584.519)"
        className="st6 st5">
        {"m"}
      </text>
      <text
        transform="translate(5846.795 1580.19)"
        className="st6 st4"
        style={{
          fontSize: "7.579px"
        }}>
        {"3"}
      </text>
      <text
        transform="translate(5851.01 1584.519)"
        className="st6 st5">
        {"/h"}
      </text>
      <text
        transform="translate(5764.026 1523.749)"
        className="st6 st8">
        {"FIT002 + FIT003"}
      </text>
      <text
        transform="translate(5767.936 1559.589)"
        className="st3 st5">
        {"Alimentaci\xF3n"}
      </text>
      <circle
        className="st36"
        cx={6187.7}
        cy={949.2}
        r={9.2}
      />
      <path
        className="st10"
        d="M6309 1020.4v-20"
      />
      <text
        transform="translate(6263.576 992.519)"
        className="st6 st8">
        {"ANTI INCRUS"}
      </text>
      <text
        transform="translate(6333.856 992.519)"
        className="st6 st8">
        {"T"}
      </text>
      <text
        transform="translate(6339.756 992.519)"
        className="st6 st8">
        {"ANTE"}
      </text>
      <path
        className="st26"
        d="M6334.9 910.8h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
      />
      <path
        className="st33"
        d="M6324.4 919.8h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
      />
      <path
        className="st38"
        d="M6294.4 931.5h38.8v40h-38.8z"
      />
      <path
        className="st26"
        d="M6333.2 924.8V970c0 .7-.4 1.3-.8 1.3h-37.1c-.5 0-.8-.6-.8-1.3v-45.2"
      />
      <circle
        className="st36"
        cx={6294.7}
        cy={949.2}
        r={9.2}
      />
      <text
        transform="translate(6409.986 1820.839)"
        className="st6 st8">
        {"TK002 PRODUCTO"}
      </text>
      <path
        className="st1"
        d="M5795.4 1043c0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.5.4-.9.9-.9h9c.5 0 1 .3 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .7.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.8.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2zM6357.6 1047.5c0-.3.3-.6.6-.6h6.3c.4 0 .6.3.6.6 0 .2-.1.3-.2.4l-3.1 3.1c-.3.2-.6.2-.9 0l-3.1-3.1c-.1-.1-.2-.2-.2-.4m-2 0c0 .7.3 1.3.8 1.8l3.1 3.1c.9 1 2.5 1.1 3.5.2l.1-.1.1-.1 3.1-3.1c.5-.5.8-1.1.8-1.8 0-1.4-1.2-2.6-2.6-2.6h-6.3c-1.4 0-2.6 1.2-2.6 2.6z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={161}
        height={143}
        xlinkHref="solicitudscadaida/693C2F7A.png"
        transform="rotate(180 3111.17 604.456) scale(.9762)"
      />
      <path
        className="st1"
        d="M6161.4 1199.7h45.1c3.5 0 6.3-2.8 6.3-6.2V1091.1c0-3.5-2.8-6.3-6.2-6.3H6152.8c-1.3 0-2.5-.4-3.5-1.3-6.4-6.7-6.4-6.7-12.9-.2l-.4.3c-1 .8-2.2 1.2-3.4 1.2h-51.7c-3.5 0-6.3 2.8-6.3 6.2V1193.4c0 3.5 2.8 6.3 6.2 6.3h80.6z"
      />
      <path
        className="st2"
        d="M6074.7 1092.5h138.1v99.8h-138.1z"
      />
      <text
        transform="translate(6122.223 1138.927)"
        className="st3 st5">
        {"Presi\xF3n  "}
      </text>
      <text
        transform="translate(6113.423 1154.527)"
        className="st3 st5">
        {"Post Filtros"}
      </text>
      <path
        className="st3"
        d="M6091.7 1169.2c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5s1.1-1.3 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
      />
      <path
        className="st3"
        d="M6090 1168.2c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-2.9 1.6-3.7 3zM6101.3 1166.9c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-.9-1.5-1.7-2.5-2.2z"
      />
      <path
        className="st3"
        d="M6101.9 1165.1c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.2.5 2.3 1.4 3 2.5.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM6102.8 1174.2v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM6097.8 1181.7c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z"
      />
      <text
        transform="translate(6129.075 1179.829)"
        className="st6 st7">
        {"00.0"}
      </text>
      <text
        transform="translate(6180.795 1179.029)"
        className="st6 st5">
        {"bar"}
      </text>
      <text
        transform="translate(6129.405 1120.179)"
        className="st6 st8">
        {"PT008"}
      </text>
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={161}
        height={143}
        xlinkHref="solicitudscadaida/693C2F7B.png"
        transform="rotate(180 2810.93 609.206) scale(.9762)"
      />
      <path
        className="st1"
        d="M5560.9 1209.2h45.1c3.5 0 6.3-2.8 6.3-6.2V1100.6c0-3.5-2.8-6.3-6.2-6.3H5552.3c-1.3 0-2.5-.4-3.5-1.3-6.4-6.7-6.4-6.7-12.9-.2l-.4.3c-1 .8-2.2 1.2-3.4 1.2h-51.7c-3.5 0-6.3 2.8-6.3 6.2V1202.9c0 3.5 2.8 6.3 6.2 6.3h80.6z"
      />
      <path
        className="st2"
        d="M5474.2 1102h138.1v99.8h-138.1z"
      />
      <text
        transform="translate(5520.972 1145.918)"
        className="st3 st5">
        {"Presi\xF3n  "}
      </text>
      <text
        transform="translate(5512.172 1161.518)"
        className="st3 st5">
        {"Pre Filtros"}
      </text>
      <path
        className="st3"
        d="M5490.4 1176.2c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5s1.1-1.3 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
      />
      <path
        className="st3"
        d="M5488.7 1175.2c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-2.9 1.6-3.7 3zM5500 1173.9c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-.9-1.5-1.7-2.5-2.2z"
      />
      <path
        className="st3"
        d="M5500.6 1172.1c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.2.5 2.3 1.4 3 2.5.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM5501.5 1181.2v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM5496.5 1188.7c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z"
      />
      <text
        transform="translate(5527.825 1186.82)"
        className="st6 st7">
        {"00.0"}
      </text>
      <text
        transform="translate(5579.544 1186.02)"
        className="st6 st5">
        {"bar"}
      </text>
      <text
        transform="translate(5528.155 1127.17)"
        className="st6 st8">
        {"PT004"}
      </text>
      <circle
        className="st32"
        cx={5841.2}
        cy={834.7}
        r={9.2}
      />
      <circle
        className="st36"
        cx={6394.2}
        cy={1759.7}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          enableBackground: "new"
        }}
        width={1007}
        height={610}
        xlinkHref="solicitudscadaida/693C2F7C.png"
        transform="matrix(1.3574 0 0 1.3565 -33.243 -1111.097)"
      />
      <image
        style={{
          overflow: "visible",
          enableBackground: "new"
        }}
        width={1020}
        height={617}
        xlinkHref="solicitudscadaida/693C2F7D.png"
        transform="matrix(1.3612 0 0 1.348 1420.502 -1113.219)"
      />
      <text
        transform="translate(85.225 326.14)"
        className="st6 st8">
        {"COAGULANTE"}
      </text>
      <text
        transform="translate(916.732 585.1)"
        className="st6 st8">
        {"UF01"}
      </text>
      <path
        className="st26"
        d="M144.5 246.5h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
      />
      <path
        className="st33"
        d="M134 255.5h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
      />
      <path
        className="st38"
        d="M104 267.2h38.8v40H104z"
      />
      <path
        className="st26"
        d="M142.8 260.5v45.2c0 .7-.4 1.3-.8 1.3h-37.1c-.5 0-.8-.6-.8-1.3v-45.2"
      />
      <path
        className="st33"
        d="M882.1 459.7v83.8c0 3.1-2 5.6-4.5 5.6h-15.4c-2.3 0-4.5-2.5-4.5-5.6v-83.8c0-3.1 2-5.6 4.5-5.6h15.4c2.5 0 4.5 2.6 4.5 5.6z"
      />
      <path
        className="st3"
        d="M882.1 458.5v84.7c0 3.2-2 5.9-4.5 5.9h-15.4c-2.3 0-4.5-2.6-4.5-5.9l23.2-84.9c.5-.5 1.2-.4 1.2.2z"
      />
      <path
        className="st33"
        d="M911.6 459.7v83.8c0 3.1-2 5.6-4.5 5.6h-15.4c-2.3 0-4.5-2.5-4.5-5.6v-83.8c0-3.1 2-5.6 4.5-5.6h15.4c2.5 0 4.5 2.6 4.5 5.6z"
      />
      <path
        className="st3"
        d="M911.6 458.5v84.7c0 3.2-2 5.9-4.5 5.9h-15.4c-2.3 0-4.5-2.6-4.5-5.9l23.2-84.9c.5-.5 1.2-.4 1.2.2z"
      />
      <path
        className="st33"
        d="M941 459.7v83.8c0 3.1-2 5.6-4.5 5.6h-15.4c-2.3 0-4.5-2.5-4.5-5.6v-83.8c0-3.1 2-5.6 4.5-5.6h15.4c2.7 0 4.5 2.6 4.5 5.6z"
      />
      <path
        className="st3"
        d="M941 458.5v84.7c0 3.2-2 5.9-4.5 5.9h-15.4c-2.3 0-4.5-2.6-4.5-5.9l23.2-84.9c.5-.5 1.2-.4 1.2.2z"
      />
      <path
        className="st33"
        d="M970.5 459.7v83.8c0 3.1-2 5.6-4.5 5.6h-15.4c-2.3 0-4.5-2.5-4.5-5.6v-83.8c0-3.1 2-5.6 4.5-5.6h15.5c2.5 0 4.4 2.6 4.4 5.6z"
      />
      <path
        className="st3"
        d="M970.5 458.5v84.7c0 3.2-2 5.9-4.5 5.9h-15.4c-2.3 0-4.5-2.6-4.5-5.9l23.5-84.8c.2-.6.9-.5.9.1z"
      />
      <path
        className="st33"
        d="M1000 459.7v83.8c0 3.1-2 5.6-4.5 5.6h-15.3c-2.3 0-4.5-2.5-4.5-5.6v-83.8c0-3.1 2-5.6 4.5-5.6h15.4c2.5 0 4.4 2.6 4.4 5.6z"
      />
      <path
        className="st3"
        d="M1000 458.5v84.7c0 3.2-2 5.9-4.5 5.9h-15.3c-2.3 0-4.5-2.6-4.5-5.9l23.2-84.9c.5-.5 1.1-.4 1.1.2z"
      />
      <path
        className="st0"
        d="M994.7 1696.2H520.5"
      />
      <path
        className="st33"
        d="M379.7 1707.7v-13.1c0-2.1 2.7-3.8 6-3.8h104c3.3 0 6 1.8 6 3.8v13.1c0 2.1-2.7 3.8-6 3.8h-104c-3.2 0-6-1.7-6-3.8z"
      />
      <path
        className="st3"
        d="m384.2 1710.6 105.2-19.8c3.5 0 6.3 1.8 6.3 3.8v13.1c0 2.1-2.9 3.8-6.3 3.8h-105c-.7 0-.8-.6-.2-.9z"
      />
      <path
        className="st33"
        d="M379.7 1732.8v-13.1c0-2.1 2.7-3.8 6-3.8h104c3.3 0 6 1.8 6 3.8v13.1c0 2.1-2.7 3.8-6 3.8h-104c-3.2 0-6-1.7-6-3.8z"
      />
      <path
        className="st3"
        d="m384.2 1735.7 105.2-19.8c3.5 0 6.3 1.8 6.3 3.8v13.1c0 2.1-2.9 3.8-6.3 3.8h-105c-.7 0-.8-.6-.2-.9z"
      />
      <path
        className="st33"
        d="M379.7 1757.9v-13.1c0-2.1 2.7-3.8 6-3.8h104c3.3 0 6 1.8 6 3.8v13.1c0 2.1-2.7 3.8-6 3.8h-104c-3.2 0-6-1.6-6-3.8z"
      />
      <path
        className="st3"
        d="m384.2 1760.8 105.2-19.8c3.5 0 6.3 1.8 6.3 3.8v13.1c0 2.1-2.9 3.8-6.3 3.8h-105c-.7 0-.8-.6-.2-.9z"
      />
      <path
        className="st33"
        d="M379.7 1783.1v-13.2c0-2.1 2.7-3.8 6-3.8h104c3.3 0 6 1.8 6 3.8v13.1c0 2.1-2.7 3.8-6 3.8h-104c-3.2 0-6-1.6-6-3.7z"
      />
      <path
        className="st3"
        d="m384.3 1786.1 105.1-20c3.5 0 6.3 1.8 6.3 3.8v13.1c0 2.1-2.9 3.8-6.3 3.8h-105c-.7 0-.8-.6-.1-.7z"
      />
      <path
        className="st33"
        d="M379.7 1808.2v-13.1c0-2.1 2.7-3.8 6-3.8h104c3.3 0 6 1.8 6 3.8v13c0 2.1-2.7 3.8-6 3.8h-104c-3.2 0-6-1.6-6-3.7z"
      />
      <path
        className="st3"
        d="m384.2 1811.1 105.2-19.8c3.5 0 6.3 1.8 6.3 3.8v13c0 2.1-2.9 3.8-6.3 3.8h-105c-.7 0-.8-.5-.2-.8z"
      />
      <path
        className="st0"
        d="M520.8 1694.4v103.2c0 2.8-2.2 5-5 5h-16.3M499.5 1726.1h20.4M499.8 1751.1h20.4M354.8 1695.2v103c0 2.8 2.2 5 5 5h16.4M376.2 1726.1h-20.4M375.9 1751.1h-20.4M499.8 1777.1h20.4M375.9 1777.1h-20.4"
      />
      <circle
        className="st39"
        cx={1091.4}
        cy={433.1}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={165}
        height={149}
        xlinkHref="data:image/png;base64,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"
        transform="translate(1240.294 281.334) scale(.9575)"
      />
      <path
        className="st1"
        d="M1301.8 293.3h-43.1c-3.5 0-6.3 2.8-6.3 6.2V401.9c0 3.5 2.8 6.3 6.2 6.3H1310.4c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.2V299.6c0-3.5-2.8-6.3-6.2-6.3h-82.6z"
      />

      {/* Caudal Producto UF */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(4, "Caudal Producto UF", false)}>
        <path
          className={getTarjetaClass(4, selected)}
          d="M1252.5 300.7h138.1v99.8h-138.1z"
        />
        <text
          transform="translate(1302.45 344.514)"
          className="st3 st5">
          {"Caudal "}
        </text>
        <text
          transform="translate(1288.35 360.114)"
          className="st3 st5">
          {"Producto UF"}
        </text>
        <text
          transform="translate(1302.45 386.824)"
          className="st6 st7">
          {getScaledValue(datosScada.d4, 1)}
        </text>
        <text
          transform="translate(1307.412 325.665)"
          className="st6 st8">
          {"FIT001"}
        </text>
        <text
          transform="translate(1348.87 387.38)"
          className="st6 st5">
          {"m3/h"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(4, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(4, "Caudal Producto UF");
        }}>
        <path d="M1264.6 377.1c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-2 1.3-2.5 2.3z" />
        <path d="M1262.9 376.1c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.6-2.9 1.7-3.7 3.1zM1274.2 374.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.8-2.5-2.3z" />
        <path d="M1274.8 373c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6s.9 2.6.7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-.9-1.4-2.2-2.5-3.7-3.1zM1275.7 382.1v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM1270.7 389.6c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Caudal Producto UF */}

      <circle
        className="st39"
        cx={1321}
        cy={436}
        r={9.2}
      />
      <path
        className="st27"
        d="M324.6 778.3h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM309.4 782.2l7.9 4.6c.4.2.5.7.3 1l-.3.3-7.9 4.6c-.4.2-.9.1-1.1-.3-.1-.1-.1-.2-.1-.4v-9.2c.1-.4.5-.8.9-.7.1 0 .2 0 .3.1z"
      />
      <path
        className="st27"
        d="m325 792.8-7.9-4.6c-.4-.2-.5-.7-.3-1l.3-.3 7.9-4.6c.4-.2.9-.1 1.1.3.1.1.1.2.1.4v9.2c-.1.4-.5.8-.9.7-.1 0-.2 0-.3-.1z"
      />
      <path
        className="st28"
        d="M317.2 777.3v10"
      />
      <path
        className="st29"
        d="M308.2 769.3h18M317.2 770.3v8"
      />
      <path
        className="st27"
        d="M766 778.3h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6H766c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM750.8 782.2l7.9 4.6c.4.2.5.7.3 1l-.3.3-7.9 4.6c-.4.2-.9.1-1.1-.3-.1-.1-.1-.2-.1-.4v-9.2c.1-.4.5-.8.9-.7.1 0 .2 0 .3.1z"
      />
      <path
        className="st27"
        d="m766.4 792.8-7.9-4.6c-.4-.2-.5-.7-.3-1l.3-.3 7.9-4.6c.4-.2.9-.1 1.1.3.1.1.1.2.1.4v9.2c-.1.4-.5.8-.9.7-.1 0-.2 0-.3-.1z"
      />
      <path
        className="st28"
        d="M758.6 777.3v10"
      />
      <path
        className="st29"
        d="M749.6 769.3h18M758.6 770.3v8"
      />
      <path
        className="st30"
        d="M266.6 917.9V994h31.9"
      />
      <path
        className="st27"
        d="M324.6 984.6h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6V983c0 .9-.7 1.6-1.6 1.6zM309.4 988.5l7.9 4.6c.4.2.5.7.3 1l-.3.3-7.9 4.6c-.4.2-.9.1-1.1-.3-.1-.1-.1-.2-.1-.4v-9.2c.1-.4.5-.8.9-.7.1 0 .2 0 .3.1z"
      />
      <path
        className="st27"
        d="m325 999.1-7.9-4.6c-.4-.2-.5-.7-.3-1l.3-.3 7.9-4.6c.4-.2.9-.1 1.1.3.1.1.1.2.1.4v9.2c-.1.4-.5.8-.9.7-.1 0-.2 0-.3-.1z"
      />
      <path
        className="st28"
        d="M317.2 983.6v10"
      />
      <path
        className="st29"
        d="M308.2 975.6h18M317.2 976.6v8"
      />
      <text
        transform="translate(1122.335 1236.868)"
        className="st6 st8">
        {"VN111"}
      </text>
      <path
        className="st27"
        d="M1146 1202.5h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM1130.8 1206.4l7.9 4.6c.4.2.5.7.3 1l-.3.3-7.9 4.6c-.4.2-.9.1-1.1-.3-.1-.1-.1-.2-.1-.4v-9.2c.1-.4.5-.8.9-.7.1 0 .2 0 .3.1z"
      />
      <path
        className="st27"
        d="m1146.4 1217-7.9-4.6c-.4-.2-.5-.7-.3-1l.3-.3 7.9-4.6c.4-.2.9-.1 1.1.3.1.1.1.2.1.4v9.2c-.1.4-.5.8-.9.7-.1 0-.2 0-.3-.1z"
      />
      <path
        className="st28"
        d="M1138.6 1201.5v10"
      />
      <path
        className="st29"
        d="M1129.6 1193.5h18M1138.6 1194.5v8"
      />
      <text
        transform="translate(1056.085 1761.696)"
        className="st6 st8">
        {"VN108"}
      </text>
      <path
        className="st27"
        d="M1079.8 1727.4H1065c-.9 0-1.6-.7-1.6-1.6V1711c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c-.1.9-.8 1.6-1.6 1.6zM1064.6 1731.3l7.9 4.6c.4.2.5.7.3 1l-.3.3-7.9 4.6c-.4.2-.9.1-1.1-.3-.1-.1-.1-.2-.1-.4v-9.2c.1-.4.5-.8.9-.7 0 0 .1 0 .3.1z"
      />
      <path
        className="st27"
        d="m1080.1 1741.9-7.9-4.6c-.4-.2-.5-.7-.3-1l.3-.3 7.9-4.6c.4-.2.9-.1 1.1.3.1.1.1.2.1.4v9.2c-.1.4-.5.8-.9.7-.1 0-.2 0-.3-.1z"
      />
      <path
        className="st28"
        d="M1072.3 1726.4v10"
      />
      <path
        className="st29"
        d="M1063.3 1718.4h18M1072.3 1719.4v8"
      />
      <text
        transform="rotate(90 234.91 886.496)"
        className="st6 st8">
        {"VN105"}
      </text>
      <path
        className="st27"
        d="M1155.7 675.2v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6h-14.8c-.9 0-1.6-.7-1.6-1.6zM1151.8 660l-4.6 7.9c-.2.4-.7.5-1 .3l-.3-.3-4.6-7.9c-.2-.4-.1-.9.3-1.1.1-.1.2-.1.4-.1h9.2c.4.1.8.5.7.9 0 .1 0 .2-.1.3z"
      />
      <path
        className="st27"
        d="m1141.2 675.6 4.6-7.9c.2-.4.7-.5 1-.3l.3.3 4.6 7.9c.2.4.1.9-.3 1.1-.1.1-.2.1-.4.1h-9.2c-.4-.1-.8-.5-.7-.9 0-.1 0-.2.1-.3z"
      />
      <path
        className="st28"
        d="M1156.7 667.8h-10"
      />
      <path
        className="st29"
        d="M1164.7 658.8v18M1163.7 667.8h-8"
      />
      <text
        transform="rotate(90 279.592 786.642)"
        className="st6 st8">
        {"VN106"}
      </text>
      <text
        transform="translate(1186.572 457.55)"
        className="st6 st8">
        {"VN113"}
      </text>
      <path
        className="st27"
        d="M1099.8 530.3v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6h-14.8c-.9 0-1.6-.7-1.6-1.6zM1095.9 515.1l-4.6 7.9c-.2.4-.7.5-1 .3l-.3-.3-4.6-7.9c-.2-.4-.1-.9.3-1.1.1-.1.2-.1.4-.1h9.2c.4.1.8.5.7.9 0 .1 0 .2-.1.3z"
      />
      <path
        className="st27"
        d="m1085.3 530.7 4.6-7.9c.2-.4.7-.5 1-.3l.3.3 4.6 7.9c.2.4.1.9-.3 1.1-.1.1-.2.1-.4.1h-9.2c-.4-.1-.8-.5-.7-.9 0-.1 0-.2.1-.3z"
      />
      <path
        className="st28"
        d="M1100.8 522.9h-10"
      />
      <path
        className="st29"
        d="M1108.8 513.9v18M1107.8 522.9h-8"
      />
      <text
        transform="translate(1044.832 654.376)"
        className="st6 st8">
        {"VN104"}
      </text>
      <path
        className="st27"
        d="M1069.6 620.3h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM1054.4 624.2l7.9 4.6c.4.2.5.7.3 1l-.3.3-7.9 4.6c-.4.2-.9.1-1.1-.3-.1-.1-.1-.2-.1-.4v-9.2c.1-.4.5-.8.9-.7.1 0 .2 0 .3.1z"
      />
      <path
        className="st27"
        d="m1070 634.8-7.9-4.6c-.4-.2-.5-.7-.3-1l.3-.3 7.9-4.6c.4-.2.9-.1 1.1.3.1.1.1.2.1.4v9.2c-.1.4-.5.8-.9.7-.1 0-.2 0-.3-.1z"
      />
      <path
        className="st28"
        d="M1062.2 619.3v10"
      />
      <path
        className="st29"
        d="M1053.2 611.3h18M1062.2 612.3v8"
      />
      <path
        className="st10"
        d="M925.5 1239.9v107.3h19.8-9.9l35.8.2c5.5 0 10-4.1 10-9.2v-9.2"
      />
      <text
        transform="translate(927.138 1394.305)"
        className="st6 st8">
        {"METABISULFITO"}
      </text>
      <path
        className="st26"
        d="M960.1 1341.4v-39.2c0-1-.8-1.8-1.8-1.8h-15.2"
      />
      <path
        className="st33"
        d="M955.1 1307.9v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5h14c.8 0 1.5-.7 1.5-1.5z"
      />
      <path
        className="st38"
        d="M944.8 1321.1h38.8v40h-38.8z"
      />
      <path
        className="st26"
        d="M983.5 1314.4v45.2c0 .7-.3 1.3-.8 1.3h-37.1c-.4 0-.8-.6-.8-1.3v-45.2"
      />
      <path
        className="st0"
        d="M1146.3 643.8V450.5"
      />
      <circle
        className="st32"
        cx={1145.8}
        cy={584.5}
        r={9.2}
      />
      <path
        className="st11"
        d="M142.7 892c0-11.3-17-20.5-38.1-20.5s-38.1 9.2-38.1 20.5h.3c-.2.6-.3 1.1-.3 1.8v53.1c0 5.9 7.3 10.8 16.5 11.5v6h11.3v-5.9h19.5v5.9h11.3v-6c9.7-.3 17.4-5.4 17.4-11.5v-53.1c0-.6-.2-1.3-.3-1.8h.5z"
      />
      <path
        className="st12"
        d="M1152.6 451.1c0 1-.9 1.9-1.9 1.9h-9c-1.1 0-1.9-.9-1.9-1.9 0-.5.2-.9.5-1.3l4.5-4.5c.7-.7 1.8-.7 2.6-.1l.1.1 4.5 4.5c.4.3.6.8.6 1.3z"
      />
      <path
        className="st1"
        d="M1140.9 451.1c0-.2.1-.4.3-.6l4.5-4.5c.4-.3.9-.3 1.3 0l4.5 4.5c.2.2.3.4.3.6 0 .5-.4.9-.9.9h-9c-.5 0-1-.3-1-.9m-2 0c0 1.6 1.3 2.9 2.9 2.9h9c1.6 0 2.9-1.3 2.9-2.9 0-.7-.3-1.5-.8-2l-4.5-4.5-.1-.1-.1-.1c-1.2-.9-2.8-.9-3.9.2l-4.5 4.5c-.6.5-.9 1.2-.9 2z"
      />
      <path
        className="st0"
        d="M1090.3 547.1v152.5M1077.2 629.6h13.1"
      />
      <path
        className="st9"
        d="M1204.9 1211.7h-52"
      />
      <circle
        className="st32"
        cx={826.1}
        cy={1212.5}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={162}
        height={145}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ0AAACMCAYAAABmrKvoAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABtBJREFUeNrsmwlz2lYURrVhsI1b e7pM///fa+o4MTsIVercN/5y50kC7KSROGfmDouxiODoLu85SQLwg0l/kmPAsKh+lDBpx+8h3vUK V50rY3GGbGkkEO66xatcnCRfcYJwTWRyq+EFhOsQLsTRRXiuU7y0R7ggVy5RWOROPsrt9ZTTIFlZ x8GilFAJT850qZNtUseNC5Uv7en5YBzShQynsu1c7O3nSZt4RY9whQk2q+NWonk8NRkLV2ph3GX1 aLI1cm3r2NSxltiYfEmbeEVHD5ebcI1k93U8SNzb8zcmXiizZLpxZ7pQNvcmViPZso5Xi1y+ez9g VF2ZLpOSOjPBHut4sngU8UK2y1t6OxiXfKGPC1kuCPdiLuTutVqOo5lOJ1HNcg8m2x91/F7Hbybe 3KScuL4O8cY9sQbpmjK6MOFm4lIpPV+4r9kvWl6zFuka4f4y+Z5MulsnHaV13CVWpVubdHfmQGKi bSV25tOxq7wG6Qon3aNluEa4P026B8l0DBLXNUiETKfCheeWFivzaO+9KFqGCJ1a70W8J4m5pNWM THc1mS5MrxvxZ2+SfTVfZsnbspompN7yWlhzGKbXucWD3NcDM7lezwR7EHcOJtxcVjWmybcbCGnX kokvsWFReJq8rdXNxOQbOTBcB0f5vmfOi2nytoxWtK1oFC47pZFsN4mE7kbkZLerIhV3uvzII73+ fyW2iBwsdfL5vde2TX+4HrwDMT9if41UJT1l0YsX+7MmIOulHa60GntKKuXv5+DDHMkusDoh28F7 fMhOPCDAezLfxZkO4MOmEACkA6QDQDpAOgCkA6QDQDpAOkA6AKQDpANAOkA6AKQDpAOkA0A6QDoA pAOkA0A6QDoApAOkA6QDQDpAOgCkA6QDQDpAOgCkA6QDpANAOkA6AKQDpANAOkA6QDoApAOkA0A6 QDoApAOkA0A6QDpAOgCkA6QDQDpAOgCkA6QDpANAOkA6AKQDpANAOkA6AKQDpAOkA0A6QDoApAOk A0A6QDpAOgCkA6QDQDpAOgCkA6QDQDpAOkA6AKQDpANAOkA6AKQDpAOkA/i/passErkFOIUq4tDF ma465YBwVXJd5EN2gbXIBu9yJDvB5KNF5QLAO+FdiVJ0GKsHKSWOLtIRfpjpB2aAMYrmHYj5UbVl v0KeSJ1szQEOdewjcbDIRjYFp++QsOooO2NC3ejyo4xkvcpnOm9yOOCujm0dmzrWdruR3y2cdOnA pfPRJ1/VUSnG0opUTrqDebFxXmzt+SDeMXb+RYtwweStHXBZx8LiTn5vJtKlA5ZOJcvkfPR+7Py6 epq2MjP0YSFItzEfXsWNpfmyjWS71p6uipi8tAO/mHATe/3BpJtEvpihlVMVLLco5DaT6OpvDnLB xnqcIZdb9WNvbjRefLZ4scdL+9nOZbuqL9MF6dYi3EyEa950VcetPZcPNNOl0pNm9nlMLG4swuPC ZcXwQfredyclRsvMccDS6QVT2nmtLbs1wv1dxz8i3joi3UnlVaWbymuDcHMRMe/og4ZQVkOGC7LN 7IK6tfsze76Qc1XhfH+zlqt939JUD3VppJRMtzDRGuE+mYAq3UnlVW0O0oVyk0gt/1rHvckYpMsG Wl5TKaNBuDu7qEKEViJcfEG6gwxZ2vcu7MLUMlMOvLfThLS389bW63OLdFVfeU3cgTciUilvdG9Z 4EZ6uiFOsF66qQj3UMejiBPkC+d7dGWmuRC/SIkJ4m0HLp2fXI/SRqxFvFfX02mG751eE1diNfsF 6WaS5YqBDxKplNYgXSPcr24a25p4U5FuK8I1V/mz3X6xLyBItx9JpvPLaVvXUmhb0dpSdK3TxYaL rX2Qob8pXD839Ex3I9K9SonUfm1mry/dBPdsvc2zZLvVCMprFRFPF4d3LvZucu9dp4uJV7k+T2XL Wnq5IWU8XSoJPV0oEyu5etcm461ItxbpPpl0IdMtIlf9ceALw36ZSOUrO5aJTpJOD67SZWayXzQd 6i6ELploX6cr7FuZ1H6JSPfVMtuzW69aRRZJh7xOF5tk/R5slZy54d9leWlf0DEi2tC3vRK3bKJb OTsn3TxSXhciXshwsWZ6THuxfVt+nedYnPEGen/I5bRvvU7LxN6tSd1ZCc6l3Vi5pZK1CHcY+Prc qeU2OeeCKi58s8p9YWP4QNMk/ic7Bze1T+Sc90l803uswp0l10dI913+AT/ZB5lG+hXdEtTdF12d 91tf5YiF+7CeBuKlVgeMPPl250VX6Es3MCAc0r1rqlUB/fJQ1TK9JQiHdO/Neql77JcPkoT/P4J0 3/lzSnumOAAAuGr+FWAA5BIVc/nlyWQAAAAASUVORK5CYII="
        transform="translate(744.799 1044.906) scale(.9669)"
      />
      <path
        className="st1"
        d="M805.5 1054.5h-45.1c-3.5 0-6.3 2.8-6.3 6.2V1163.1c0 3.5 2.8 6.3 6.2 6.3H814.1c1.3 0 2.5.4 3.5 1.3 6.4 6.7 6.4 6.7 12.9.2l.4-.3c1-.8 2.2-1.2 3.4-1.2H886c3.5 0 6.3-2.8 6.3-6.2V1060.8c0-3.5-2.8-6.3-6.2-6.3h-80.6z"
      />

      {/* ORP Alimentación OR */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(17, "ORP Alimentación OR", false)}>
        <path
          className={getTarjetaClass(17, selected)}
          d="M754.1 1061.9h138.1v99.8H754.1z"
        />
        <text
          transform="translate(809.094 1105.308)"
          className="st3 st5">
          {"ORP "}
        </text>
        <text
          transform="translate(776.194 1120.908)"
          className="st3 st5">
          {"Alimentaci\xF3n OR"}
        </text>
        <text
          transform="translate(809.383 1147.21)"
          className="st6 st7">
          {getScaledValue(datosScada.d17, 1)}
        </text>
        <text
          transform="translate(808.448 1087.56)"
          className="st6 st8">
          {"AE007"}
        </text>
        <text
          transform="translate(860.79 1147.21)"
          className="st6 st5">
          {"mv"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(17, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(17, "ORP Alimentación OR");
        }}>
        <path d="M770.2 1137.6c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5s1.1-1.3 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
        <path d="M768.5 1136.6c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-2.9 1.6-3.7 3zM779.8 1135.3c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-.9-1.5-1.7-2.5-2.2z" />
        <path d="M780.4 1133.5c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.2.5 2.3 1.4 3 2.5.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM781.3 1142.6v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM776.3 1150.1c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin ORP Alimentación OR */}

      <circle
        className="st32"
        cx={621.3}
        cy={1212.5}
        r={9.2}
      />
      <circle
        className="st32"
        cx={280}
        cy={1212.5}
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
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ0AAACMCAYAAABmrKvoAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABtBJREFUeNrsmwlz2lYURrVhsI1b e7pM///fa+o4MTsIVercN/5y50kC7KSROGfmDouxiODoLu85SQLwg0l/kmPAsKh+lDBpx+8h3vUK V50rY3GGbGkkEO66xatcnCRfcYJwTWRyq+EFhOsQLsTRRXiuU7y0R7ggVy5RWOROPsrt9ZTTIFlZ x8GilFAJT850qZNtUseNC5Uv7en5YBzShQynsu1c7O3nSZt4RY9whQk2q+NWonk8NRkLV2ph3GX1 aLI1cm3r2NSxltiYfEmbeEVHD5ebcI1k93U8SNzb8zcmXiizZLpxZ7pQNvcmViPZso5Xi1y+ez9g VF2ZLpOSOjPBHut4sngU8UK2y1t6OxiXfKGPC1kuCPdiLuTutVqOo5lOJ1HNcg8m2x91/F7Hbybe 3KScuL4O8cY9sQbpmjK6MOFm4lIpPV+4r9kvWl6zFuka4f4y+Z5MulsnHaV13CVWpVubdHfmQGKi bSV25tOxq7wG6Qon3aNluEa4P026B8l0DBLXNUiETKfCheeWFivzaO+9KFqGCJ1a70W8J4m5pNWM THc1mS5MrxvxZ2+SfTVfZsnbspompN7yWlhzGKbXucWD3NcDM7lezwR7EHcOJtxcVjWmybcbCGnX kokvsWFReJq8rdXNxOQbOTBcB0f5vmfOi2nytoxWtK1oFC47pZFsN4mE7kbkZLerIhV3uvzII73+ fyW2iBwsdfL5vde2TX+4HrwDMT9if41UJT1l0YsX+7MmIOulHa60GntKKuXv5+DDHMkusDoh28F7 fMhOPCDAezLfxZkO4MOmEACkA6QDQDpAOgCkA6QDQDpAOkA6AKQDpANAOkA6AKQDpAOkA0A6QDoA pAOkA0A6QDoApAOkA6QDQDpAOgCkA6QDQDpAOgCkA6QDpANAOkA6AKQDpANAOkA6QDoApAOkA0A6 QDoApAOkA0A6QDpAOgCkA6QDQDpAOgCkA6QDpANAOkA6AKQDpANAOkA6AKQDpAOkA0A6QDoApAOk A0A6QDpAOgCkA6QDQDpAOgCkA6QDQDpAOkA6AKQDpANAOkA6AKQDpAOkA/i/passErkFOIUq4tDF ma465YBwVXJd5EN2gbXIBu9yJDvB5KNF5QLAO+FdiVJ0GKsHKSWOLtIRfpjpB2aAMYrmHYj5UbVl v0KeSJ1szQEOdewjcbDIRjYFp++QsOooO2NC3ejyo4xkvcpnOm9yOOCujm0dmzrWdruR3y2cdOnA pfPRJ1/VUSnG0opUTrqDebFxXmzt+SDeMXb+RYtwweStHXBZx8LiTn5vJtKlA5ZOJcvkfPR+7Py6 epq2MjP0YSFItzEfXsWNpfmyjWS71p6uipi8tAO/mHATe/3BpJtEvpihlVMVLLco5DaT6OpvDnLB xnqcIZdb9WNvbjRefLZ4scdL+9nOZbuqL9MF6dYi3EyEa950VcetPZcPNNOl0pNm9nlMLG4swuPC ZcXwQfredyclRsvMccDS6QVT2nmtLbs1wv1dxz8i3joi3UnlVaWbymuDcHMRMe/og4ZQVkOGC7LN 7IK6tfsze76Qc1XhfH+zlqt939JUD3VppJRMtzDRGuE+mYAq3UnlVW0O0oVyk0gt/1rHvckYpMsG Wl5TKaNBuDu7qEKEViJcfEG6gwxZ2vcu7MLUMlMOvLfThLS389bW63OLdFVfeU3cgTciUilvdG9Z 4EZ6uiFOsF66qQj3UMejiBPkC+d7dGWmuRC/SIkJ4m0HLp2fXI/SRqxFvFfX02mG751eE1diNfsF 6WaS5YqBDxKplNYgXSPcr24a25p4U5FuK8I1V/mz3X6xLyBItx9JpvPLaVvXUmhb0dpSdK3TxYaL rX2Qob8pXD839Ex3I9K9SonUfm1mry/dBPdsvc2zZLvVCMprFRFPF4d3LvZucu9dp4uJV7k+T2XL Wnq5IWU8XSoJPV0oEyu5etcm461ItxbpPpl0IdMtIlf9ceALw36ZSOUrO5aJTpJOD67SZWayXzQd 6i6ELploX6cr7FuZ1H6JSPfVMtuzW69aRRZJh7xOF5tk/R5slZy54d9leWlf0DEi2tC3vRK3bKJb OTsn3TxSXhciXshwsWZ6THuxfVt+nedYnPEGen/I5bRvvU7LxN6tSd1ZCc6l3Vi5pZK1CHcY+Prc qeU2OeeCKi58s8p9YWP4QNMk/ic7Bze1T+Sc90l803uswp0l10dI913+AT/ZB5lG+hXdEtTdF12d 91tf5YiF+7CeBuKlVgeMPPl250VX6Es3MCAc0r1rqlUB/fJQ1TK9JQiHdO/Neql77JcPkoT/P4J0 3/lzSnumOAAAuGr+FWAA5BIVc/nlyWQAAAAASUVORK5CYII="
        transform="translate(156.365 1538.006) scale(.9762)"
      />
      <path
        className="st1"
        d="M217.3 1547.3h-45.1c-3.5 0-6.3 2.8-6.3 6.2V1655.9c0 3.5 2.8 6.3 6.2 6.3H225.9c1.3 0 2.5.4 3.5 1.3 6.4 6.7 6.4 6.7 12.9.2l.4-.3c1-.8 2.2-1.2 3.4-1.2h51.7c3.5 0 6.3-2.8 6.3-6.2V1553.6c0-3.5-2.8-6.3-6.2-6.3h-80.6z"
      />

      {/* Presión Ósmosis */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(5, "Presión Ósmosis", false)}>
        <path
          className={getTarjetaClass(5, selected)}
          d="M165.9 1554.7H304v99.8H165.9z"
        />
        <text
          transform="translate(214.91 1597.732)"
          className="st3 st5">
          {"Presi\xF3n"}
        </text>
        <text
          transform="translate(209.91 1613.332)"
          className="st3 st5">
          {"Osmosis "}
        </text>
        <text
          transform="translate(218.019 1640.63)"
          className="st6 st7">
          {getScaledValue(datosScada.d5, 1)}
        </text>
        <text
          transform="translate(220.744 1579.513)"
          className="st6 st8">
          {"PT008"}
        </text>
        <text
          transform="translate(271.844 1641.082)"
          className="st6 st5">
          {"bar"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(5, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(5, "Presión Ósmosis");
        }}>
        <path d="M182.1 1631c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5s1.1-1.3 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
        <path d="M180.4 1630c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-2.9 1.6-3.7 3zM191.7 1628.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-.9-1.5-1.7-2.5-2.2z" />
        <path d="M192.3 1626.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.2.5 2.3 1.4 3 2.5.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM193.2 1636v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM188.2 1643.5c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presión Ósmosis */}

      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={161}
        height={143}
        xlinkHref="data:image/png;base64,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"
        transform="translate(365.904 1538.12) scale(.9762)"
      />
      <path
        className="st1"
        d="M426.8 1547.4h-45.1c-3.5 0-6.3 2.8-6.3 6.2V1656c0 3.5 2.8 6.3 6.2 6.3H435.4c1.3 0 2.5.4 3.5 1.3 6.4 6.7 6.4 6.7 12.9.2l.4-.3c1-.8 2.2-1.2 3.4-1.2h51.7c3.5 0 6.3-2.8 6.3-6.2V1553.7c0-3.5-2.8-6.3-6.2-6.3h-80.6z"
      />

      {/* Recuperación */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(0, "Recuperación", false)}>
        <path
          className={getTarjetaClass(0, selected)}
          d="M375.4 1554.8h138.1v99.8H375.4z"
        />
        <text
          transform="translate(404.456 1608.639)"
          className="st3 st5">
          {"Recuperaci\xF3n"}
        </text>
        <text
          transform="translate(428.993 1641.277)"
          className="st6 st7">
          {getScaledValue(datosScada.d0, 1)}
        </text>
        <text
          transform="translate(487.97 1640.737)"
          className="st6 st5">
          {"%"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(0, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(0, "Recuperación");
        }}>
        <path d="M391.6 1630.9c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5s1.1-1.3 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
        <path d="M389.9 1629.9c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-2.9 1.6-3.7 3zM401.2 1628.6c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-.9-1.5-1.7-2.5-2.2z" />
        <path d="M401.8 1626.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.2.5 2.3 1.4 3 2.5.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM402.7 1635.9v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM397.7 1643.4c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Recuperación */}

      <circle
        className="st32"
        cx={235}
        cy={1696}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={162}
        height={145}
        xlinkHref="data:image/png;base64,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"
        transform="translate(544.138 1043.844) scale(.9669)"
      />
      <path
        className="st1"
        d="M604.9 1053.4h-45.1c-3.5 0-6.3 2.8-6.3 6.2V1162c0 3.5 2.8 6.3 6.2 6.3H613.5c1.3 0 2.5.4 3.5 1.3 6.4 6.7 6.4 6.7 12.9.2l.4-.3c1-.8 2.2-1.2 3.4-1.2h51.7c3.5 0 6.3-2.8 6.3-6.2V1059.7c0-3.5-2.8-6.3-6.2-6.3h-80.6z"
      />

      {/* Caudal de Alimentación */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(7, "Caudal de Alimentación", false)}>
        <path
          className={getTarjetaClass(7, selected)}
          d="M553.5 1060.8h138.1v99.8H553.5z"
        />
        <text
          transform="translate(594.38 1104.247)"
          className="st3 st5">
          {"Caudal de"}
        </text>
        <text
          transform="translate(586.812 1119.846)"
          className="st3 st5">
          {"Alimentaci\xF3n"}
        </text>
        <text
          transform="translate(608.444 1147.148)"
          className="st6 st7">
          {getScaledValue(datosScada.d7, 1)}
        </text>
        <text
          transform="translate(606.59 1086.498)"
          className="st6 st8">
          {"FIT002"}
        </text>
        <text
          transform="translate(650.258 1147.149)"
          className="st6 st5">
          {"m3/h"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(7, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(7, "Caudal de Alimentación");
        }}>
        <path d="M569.6 1137.5c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5s1.1-1.3 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
        <path d="M567.9 1136.5c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-2.9 1.6-3.7 3zM579.2 1135.2c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-.9-1.5-1.7-2.5-2.2z" />
        <path d="M579.8 1133.4c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.2.5 2.3 1.4 3 2.5.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM580.7 1142.5v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM575.7 1150c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Caudal de Alimentación */}

      <path
        className="st27"
        d="M508.5 1182.2c0-10.8-12.6-19.6-28.3-19.6-15.7 0-28.3 8.9-28.3 19.6h.2c-.2.5-.2 1.1-.2 1.8v60.8c0 5.7 5.5 10.4 12.3 11v10h8.4v-9.9h14.6v9.9h8.4v-10c7.3-.3 12.9-5.2 12.9-11V1184c0-.5-.2-1.1-.2-1.8h.2z"
      />
      <path
        className="st11"
        d="m921.2 1238.1 3.2-3.2c.7-.5 1.6-.5 2.2.1l3.1 3.1c.3.3.5.7.5 1.1 0 .9-.7 1.6-1.6 1.6h-6.3c-.9 0-1.6-.7-1.6-1.6 0-.4.2-.8.5-1.1z"
      />
      <path
        className="st1"
        d="M929.3 1239.2c0 .3-.3.6-.6.6h-6.3c-.4 0-.6-.3-.6-.6 0-.2.1-.3.2-.4l3.1-3.1c.3-.2.6-.2.9 0l3.1 3.1c.1.1.2.2.2.4m2 0c0-.7-.3-1.3-.8-1.8l-3.1-3.1c-.9-1-2.5-1.1-3.5-.2l-.1.1-.1.1-3.1 3.1c-.5.5-.8 1.1-.8 1.8 0 1.4 1.2 2.6 2.6 2.6h6.3c1.4 0 2.6-1.2 2.6-2.6z"
      />
      <path
        className="st10"
        d="M680.4 1239.9v107.3h25.3l48.6.2c5.5 0 10-4.1 10-9.2v-9.2"
      />
      <text
        transform="translate(704.15 1395.672)"
        className="st6 st8">
        {"ANTIINCRUSTANTE"}
      </text>
      <g className="st40">
        <path
          className="st6"
          d="M898.6 1929.6v-10.2l-8.9-14.1h22.8l-8.9 14.1v10.2h-5z"
        />
      </g>
      <path
        className="st26"
        d="M743.3 1341.4v-39.2c0-1-.8-1.8-1.8-1.8h-15.2"
      />
      <path
        className="st33"
        d="M738.3 1307.9v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5h14c.8 0 1.5-.7 1.5-1.5z"
      />
      <path
        className="st38"
        d="M728 1321.1h38.8v40H728z"
      />
      <path
        className="st26"
        d="M766.7 1314.4v45.2c0 .7-.3 1.3-.8 1.3h-37.1c-.4 0-.8-.6-.8-1.3v-45.2"
      />
      <path
        className="st11"
        d="m676.1 1238.1 3.2-3.2c.7-.5 1.6-.5 2.2.1l3.1 3.1c.3.3.5.7.5 1.1 0 .9-.7 1.6-1.6 1.6h-6.3c-.9 0-1.6-.7-1.6-1.6 0-.4.2-.8.5-1.1z"
      />
      <path
        className="st1"
        d="M684.2 1239.2c0 .3-.3.6-.6.6h-6.3c-.4 0-.6-.3-.6-.6 0-.2.1-.3.2-.4l3.1-3.1c.3-.2.6-.2.9 0l3.1 3.1c.1.1.2.2.2.4m2 0c0-.7-.3-1.3-.8-1.8l-3.1-3.1c-.9-1-2.5-1.1-3.5-.2l-.1.1-.1.1-3.1 3.1c-.5.5-.8 1.1-.8 1.8 0 1.4 1.2 2.6 2.6 2.6h6.3c1.4 0 2.6-1.2 2.6-2.6z"
      />
      <circle
        className="st32"
        cx={662.3}
        cy={1696.2}
        r={9.2}
      />
      <circle
        className="st32"
        cx={863.1}
        cy={1696.2}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={162}
        height={144}
        xlinkHref="data:image/png;base64,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"
        transform="translate(782.146 1538.39) scale(.9698)"
      />
      <path
        className="st1"
        d="M843.1 1547.6H798c-3.5 0-6.3 2.8-6.3 6.2V1656.2c0 3.5 2.8 6.3 6.2 6.3H851.7c1.3 0 2.5.4 3.5 1.3 6.4 6.7 6.4 6.7 12.9.2l.4-.3c1-.8 2.2-1.2 3.4-1.2h51.7c3.5 0 6.3-2.8 6.3-6.2V1553.9c0-3.5-2.8-6.3-6.2-6.3h-80.6z"
      />

      {/* Caudal de Permeado */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(8, "Caudal de Permeado", false)}>
        <path
          className={getTarjetaClass(8, selected)}
          d="M791.7 1555h138.1v99.8H791.7z"
        />
        <text
          transform="translate(832.61 1598.938)"
          className="st3 st5">
          {"Caudal de"}
        </text>
        <text
          transform="translate(832.255 1614.538)"
          className="st3 st5">
          {"Permeado"}
        </text>
        <text
          transform="translate(845.25 1640.84)"
          className="st6 st7">
          {getScaledValue(datosScada.d8, 1)}
        </text>
        <text
          transform="translate(844.82 1580.19)"
          className="st6 st8">
          {"FIT014"}
        </text>
        <text
          transform="translate(887.686 1640.92)"
          className="st6 st5">
          {"m3/h"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(8, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(8, "Caudal de Permeado");
        }}>
        <path d="M807.8 1631.6c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5s1.1-1.3 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
        <path d="M806.1 1630.6c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-2.9 1.6-3.7 3zM817.4 1629.3c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-.9-1.5-1.7-2.5-2.2z" />
        <path d="M818 1627.5c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.2.5 2.3 1.4 3 2.5.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM818.9 1636.6v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM813.9 1644.1c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Caudal de Permeado */}

      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={162}
        height={144}
        xlinkHref="data:image/png;base64,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"
        transform="rotate(180 370.389 928.332) scale(.9698)"
      />
      <path
        className="st1"
        d="M679.8 1847.4h45.1c3.5 0 6.3-2.8 6.3-6.2V1738.8c0-3.5-2.8-6.3-6.2-6.3H671.2c-1.3 0-2.5-.4-3.5-1.3-6.4-6.7-6.4-6.7-12.9-.2l-.4.3c-1 .8-2.2 1.2-3.4 1.2h-51.7c-3.5 0-6.3 2.8-6.3 6.2V1841.1c0 3.5 2.8 6.3 6.2 6.3h80.6z"
      />

      {/* pH Permeado */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(11, "pH Permeado", false)}>
        <path
          className={getTarjetaClass(11, selected)}
          d="M593.1 1740.2h138.1v99.8H593.1z"
        />
        <text
          transform="translate(654.113 1784.146)"
          className="st3 st5">
          {"pH"}
        </text>
        <text
          transform="translate(632.432 1799.746)"
          className="st3 st5">
          {"Permeado"}
        </text>
        <text
          transform="translate(646.774 1825.048)"
          className="st6 st7">
          {getScaledValue(datosScada.d11, 1)}
        </text>
        <text
          transform="translate(647.104 1765.398)"
          className="st6 st8">
          {"AE006"}
        </text>
        <text
          transform="translate(702.383 1825.048)"
          className="st6 st5">
          {"pH"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(11, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(11, "pH Permeado");
        }}>
        <path d="M609.3 1814.4c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5s1.1-1.3 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
        <path d="M607.6 1813.4c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-2.9 1.6-3.7 3zM618.9 1812.1c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-.9-1.5-1.7-2.5-2.2z" />
        <path d="M619.5 1810.3c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.2.5 2.3 1.4 3 2.5.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM620.4 1819.4v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM615.4 1826.9c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin pH Permeado */}

      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={161}
        height={143}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ0AAACMCAYAAABmrKvoAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABtBJREFUeNrsmwlz2lYURrVhsI1b e7pM///fa+o4MTsIVercN/5y50kC7KSROGfmDouxiODoLu85SQLwg0l/kmPAsKh+lDBpx+8h3vUK V50rY3GGbGkkEO66xatcnCRfcYJwTWRyq+EFhOsQLsTRRXiuU7y0R7ggVy5RWOROPsrt9ZTTIFlZ x8GilFAJT850qZNtUseNC5Uv7en5YBzShQynsu1c7O3nSZt4RY9whQk2q+NWonk8NRkLV2ph3GX1 aLI1cm3r2NSxltiYfEmbeEVHD5ebcI1k93U8SNzb8zcmXiizZLpxZ7pQNvcmViPZso5Xi1y+ez9g VF2ZLpOSOjPBHut4sngU8UK2y1t6OxiXfKGPC1kuCPdiLuTutVqOo5lOJ1HNcg8m2x91/F7Hbybe 3KScuL4O8cY9sQbpmjK6MOFm4lIpPV+4r9kvWl6zFuka4f4y+Z5MulsnHaV13CVWpVubdHfmQGKi bSV25tOxq7wG6Qon3aNluEa4P026B8l0DBLXNUiETKfCheeWFivzaO+9KFqGCJ1a70W8J4m5pNWM THc1mS5MrxvxZ2+SfTVfZsnbspompN7yWlhzGKbXucWD3NcDM7lezwR7EHcOJtxcVjWmybcbCGnX kokvsWFReJq8rdXNxOQbOTBcB0f5vmfOi2nytoxWtK1oFC47pZFsN4mE7kbkZLerIhV3uvzII73+ fyW2iBwsdfL5vde2TX+4HrwDMT9if41UJT1l0YsX+7MmIOulHa60GntKKuXv5+DDHMkusDoh28F7 fMhOPCDAezLfxZkO4MOmEACkA6QDQDpAOgCkA6QDQDpAOkA6AKQDpANAOkA6AKQDpAOkA0A6QDoA pAOkA0A6QDoApAOkA6QDQDpAOgCkA6QDQDpAOgCkA6QDpANAOkA6AKQDpANAOkA6QDoApAOkA0A6 QDoApAOkA0A6QDpAOgCkA6QDQDpAOgCkA6QDpANAOkA6AKQDpANAOkA6AKQDpAOkA0A6QDoApAOk A0A6QDpAOgCkA6QDQDpAOgCkA6QDQDpAOkA6AKQDpANAOkA6AKQDpAOkA/i/passErkFOIUq4tDF ma465YBwVXJd5EN2gbXIBu9yJDvB5KNF5QLAO+FdiVJ0GKsHKSWOLtIRfpjpB2aAMYrmHYj5UbVl v0KeSJ1szQEOdewjcbDIRjYFp++QsOooO2NC3ejyo4xkvcpnOm9yOOCujm0dmzrWdruR3y2cdOnA pfPRJ1/VUSnG0opUTrqDebFxXmzt+SDeMXb+RYtwweStHXBZx8LiTn5vJtKlA5ZOJcvkfPR+7Py6 epq2MjP0YSFItzEfXsWNpfmyjWS71p6uipi8tAO/mHATe/3BpJtEvpihlVMVLLco5DaT6OpvDnLB xnqcIZdb9WNvbjRefLZ4scdL+9nOZbuqL9MF6dYi3EyEa950VcetPZcPNNOl0pNm9nlMLG4swuPC ZcXwQfredyclRsvMccDS6QVT2nmtLbs1wv1dxz8i3joi3UnlVaWbymuDcHMRMe/og4ZQVkOGC7LN 7IK6tfsze76Qc1XhfH+zlqt939JUD3VppJRMtzDRGuE+mYAq3UnlVW0O0oVyk0gt/1rHvckYpMsG Wl5TKaNBuDu7qEKEViJcfEG6gwxZ2vcu7MLUMlMOvLfThLS389bW63OLdFVfeU3cgTciUilvdG9Z 4EZ6uiFOsF66qQj3UMejiBPkC+d7dGWmuRC/SIkJ4m0HLp2fXI/SRqxFvFfX02mG751eE1diNfsF 6WaS5YqBDxKplNYgXSPcr24a25p4U5FuK8I1V/mz3X6xLyBItx9JpvPLaVvXUmhb0dpSdK3TxYaL rX2Qob8pXD839Ex3I9K9SonUfm1mry/dBPdsvc2zZLvVCMprFRFPF4d3LvZucu9dp4uJV7k+T2XL Wnq5IWU8XSoJPV0oEyu5etcm461ItxbpPpl0IdMtIlf9ceALw36ZSOUrO5aJTpJOD67SZWayXzQd 6i6ELploX6cr7FuZ1H6JSPfVMtuzW69aRRZJh7xOF5tk/R5slZy54d9leWlf0DEi2tC3vRK3bKJb OTsn3TxSXhciXshwsWZ6THuxfVt+nedYnPEGen/I5bRvvU7LxN6tSd1ZCc6l3Vi5pZK1CHcY+Prc qeU2OeeCKi58s8p9YWP4QNMk/ic7Bze1T+Sc90l803uswp0l10dI913+AT/ZB5lG+hXdEtTdF12d 91tf5YiF+7CeBuKlVgeMPPl250VX6Es3MCAc0r1rqlUB/fJQ1TK9JQiHdO/Neql77JcPkoT/P4J0 3/lzSnumOAAAuGr+FWAA5BIVc/nlyWQAAAAASUVORK5CYII="
        transform="rotate(180 179.252 684.229) scale(.9762)"
      />
      <path
        className="st1"
        d="M297.5 1359.2h45.1c3.5 0 6.3-2.8 6.3-6.2V1250.6c0-3.5-2.8-6.3-6.2-6.3H288.9c-1.3 0-2.5-.4-3.5-1.3-6.4-6.7-6.4-6.7-12.9-.2l-.4.3c-1 .8-2.2 1.2-3.4 1.2H217c-3.5 0-6.3 2.8-6.3 6.2V1352.9c0 3.5 2.8 6.3 6.2 6.3h80.6z"
      />

      {/* E.C. de Alimentación */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(9, "E.C. de Alimentación", false)}>
        <path
          className={getTarjetaClass(9, selected)}
          d="M210.8 1252h138.1v99.8H210.8z"
        />
        <text
          transform="translate(259.159 1296.883)"
          className="st3 st5">
          {"E.C de"}
        </text>
        <text
          transform="translate(241.827 1312.483)"
          className="st3 st5">
          {"Alimentaci\xF3n"}
        </text>
        <text
          transform="translate(261.538 1336.866)"
          className="st6 st7">
          {getScaledValue(datosScada.d9, 0)}
        </text>
        <text
          transform="translate(262.525 1277.215)"
          className="st6 st8">
          {"AE002"}
        </text>
        <text
          transform="translate(299.565 1336.866)"
          className="st6 st5">
          {"uS/cm"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(9, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(9, "E.C. de Alimentación");
        }}>
        <path d="M227 1326.2c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5s1.1-1.3 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
        <path d="M225.3 1325.2c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-2.9 1.6-3.7 3zM236.6 1323.9c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-.9-1.5-1.7-2.5-2.2z" />
        <path d="M237.2 1322.1c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.2.5 2.3 1.4 3 2.5.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM238.1 1331.2v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM233.1 1338.7c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin E.C. de Alimentación */}

      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={162}
        height={144}
        xlinkHref="data:image/png;base64,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"
        transform="rotate(180 325.327 1038.362) scale(.9698)"
      />
      <path
        className="st1"
        d="M589.7 2067.5h45.1c3.5 0 6.3-2.8 6.3-6.2V1958.9c0-3.5-2.8-6.3-6.2-6.3H581.1c-1.3 0-2.5-.4-3.5-1.3-6.4-6.7-6.4-6.7-12.9-.2l-.4.3c-1 .8-2.2 1.2-3.4 1.2h-51.7c-3.5 0-6.3 2.8-6.3 6.2V2061.2c0 3.5 2.8 6.3 6.2 6.3h80.6z"
      />

      {/* Presión de Concentrado */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(6, "Presión de Concentrado", false)}>
        <path
          className={getTarjetaClass(6, selected)}
          d="M503 1960.3h138.1v99.8H503z"
        />
        <text
          transform="translate(543.477 2004.205)"
          className="st40">
          <tspan
            x={0}
            y={0}
            className="st3 st5">
            {"Presi\xF3n de "}
          </tspan>
          <tspan
            x={-4.3}
            y={15.6}
            className="st3 st5">
            {"Concentrado"}
          </tspan>
        </text>
        <text
          transform="translate(560.154 2045.107)"
          className="st6 st7">
          {getScaledValue(datosScada.d6, 1)}
        </text>
        <text
          transform="translate(560.154 1985.457)"
          className="st6 st8">
          {"PT012"}
        </text>
        <text
          transform="translate(608.444 2045.108)"
          className="st6 st5">
          {"bar"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(6, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(6, "Presión de Concentrado");
        }}>
        <path d="M519.2 2034.5c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5s1.1-1.3 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
        <path d="M517.5 2033.5c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-2.9 1.6-3.7 3zM528.8 2032.2c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-.9-1.5-1.7-2.5-2.2z" />
        <path d="M529.4 2030.4c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.2.5 2.3 1.4 3 2.5.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM530.3 2039.5v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM525.3 2047c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presión de Concentrado */}

      <path
        className="st9"
        d="M1059.2 1735.4h-59.5c-2.8 0-5-2.3-5-5v-267.1c0-2.7 2.2-5 5-5H1198.3M707.7 1965.2h-33.4c-2.7 0-5-2.2-5-5v-47.5M778.8 1913.2v47c0 2.8-2.3 5-5 5h-37.5M745.2 1911.9h135.5M572.1 1911.9h-46.3c-2.8 0-5-2.3-5-5v-117.8"
      />
      <path
        className="st3"
        d="M1199.6 1423.9h124.8v97.7h-124.8z"
      />
      <path
        className="st26"
        d="M1324.2 1407.6v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1v-111.2"
      />
      <text
        transform="translate(1248.154 1545.605)"
        className="st6 st8">
        {"TK003"}
      </text>
      <text
        transform="translate(1262 2071.388)"
        className="st6 st8">
        {"TK- CIP"}
      </text>
      <path
        className="st3"
        d="M1212.6 1950.8h124.8v97.7h-124.8z"
      />
      <path
        className="st26"
        d="M1337.2 1934.5v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1v-111.2"
      />
      <path
        className="st9"
        d="M529.3 1911.9h167.6"
      />
      <text
        transform="translate(706.613 1937.84)"
        className="st6 st8">
        {"VN001"}
      </text>
      <path
        className="st27"
        d="M730.3 1903.5h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM715.1 1907.4l7.9 4.6c.4.2.5.7.3 1l-.3.3-7.9 4.6c-.4.2-.9.1-1.1-.3-.1-.1-.1-.2-.1-.4v-9.2c.1-.4.5-.8.9-.7.1 0 .2 0 .3.1z"
      />
      <path
        className="st27"
        d="m730.7 1918-7.9-4.6c-.4-.2-.5-.7-.3-1l.3-.3 7.9-4.6c.4-.2.9-.1 1.1.3.1.1.1.2.1.4v9.2c-.1.4-.5.8-.9.7-.1 0-.2 0-.3-.1zM715.1 1959.9l7.9 4.6c.4.2.5.7.3 1l-.3.3-7.9 4.6c-.4.2-.9.1-1.1-.3-.1-.1-.1-.2-.1-.4v-9.2c.1-.4.5-.8.9-.7.1 0 .2 0 .3.1z"
      />
      <path
        className="st27"
        d="m730.7 1970.5-7.9-4.6c-.4-.2-.5-.7-.3-1l.3-.3 7.9-4.6c.4-.2.9-.1 1.1.3.1.1.1.2.1.4v9.2c-.1.4-.5.8-.9.7-.1 0-.2 0-.3-.1z"
      />
      <path
        className="st28"
        d="M722.9 1902.5v10"
      />
      <path
        className="st29"
        d="M713.9 1894.5h18M722.9 1895.5v8"
      />
      <text
        transform="translate(445.736 2214.987)"
        className="st6 st8">
        {"VN107"}
      </text>
      <path
        className="st27"
        d="M469.4 2180.6h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM454.2 2184.5l7.9 4.6c.4.2.5.7.3 1l-.3.3-7.9 4.6c-.4.2-.9.1-1.1-.3-.1-.1-.1-.2-.1-.4v-9.2c.1-.4.5-.8.9-.7.1 0 .2 0 .3.1z"
      />
      <path
        className="st27"
        d="m469.8 2195.1-7.9-4.6c-.4-.2-.5-.7-.3-1l.3-.3 7.9-4.6c.4-.2.9-.1 1.1.3.1.1.1.2.1.4v9.2c-.1.4-.5.8-.9.7-.1 0-.2 0-.3-.1z"
      />
      <path
        className="st28"
        d="M462 2179.6v10"
      />
      <path
        className="st29"
        d="M453 2171.6h18M462 2172.6v8"
      />
      <circle
        className="st32"
        cx={573.3}
        cy={1911.9}
        r={9.2}
      />
      <path
        className="st9"
        d="M1084.6 1735.4H1286.4c2.7 0 5 2.2 5 5v167.9M439.7 2189.7H306c-2.8 0-5-2.3-5-5v-488.6"
      />
      <path
        className="st12"
        d="M1285.3 1906.1c0-1 .9-1.9 1.9-1.9h9c1.1 0 1.9.9 1.9 1.9 0 .5-.2.9-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.4-.3-.6-.8-.6-1.3z"
      />
      <path
        className="st1"
        d="M1297 1906.1c0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.5.4-.9.9-.9h9c.5 0 1 .3 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .7.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.8.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <path
        className="st9"
        d="M1295.5 2091.3v95.5c0 2.7-2.2 5-5 5h-245.4"
      />
      <path
        className="st12"
        d="M1047.3 2185.5c1 0 1.9.9 1.9 1.9v9c0 1.1-.9 1.9-1.9 1.9-.5 0-.9-.2-1.3-.5l-4.5-4.5c-.7-.7-.7-1.8-.1-2.6l.1-.1 4.5-4.5c.3-.4.8-.6 1.3-.6z"
      />
      <path
        className="st1"
        d="M1047.3 2197.2c-.2 0-.4-.1-.6-.3l-4.5-4.5c-.3-.4-.3-.9 0-1.3l4.5-4.5c.2-.2.4-.3.6-.3.5 0 .9.4.9.9v9c0 .5-.3 1-.9 1m0 2c1.6 0 2.9-1.3 2.9-2.9v-9c0-2.1-2.3-3.7-4.6-2.4l-4.8 4.8-.1.1-.1.1c-.9 1.2-.9 2.8.2 3.9l4.5 4.5c.5.6 1.3.9 2 .9z"
      />
      <path
        className="st9"
        d="M691 2189.7H485.3M971.5 2189.7H759.8"
      />
      <path
        className="st27"
        d="M753.6 2159.7c0-10.8-12.6-19.6-28.3-19.6s-28.3 8.9-28.3 19.6h.2c-.2.5-.2 1.1-.2 1.8v60.8c0 5.7 5.5 10.4 12.3 11v10h8.4v-9.9h14.6v9.9h8.4v-10c7.3-.3 12.9-5.2 12.9-11v-60.8c0-.5-.2-1.1-.2-1.8h.2z"
      />
      <path
        className="st12"
        d="M307.3 1805.4c0 1-.9 1.9-1.9 1.9h-9c-1.1 0-1.9-.9-1.9-1.9 0-.5.2-.9.5-1.3l4.5-4.5c.7-.7 1.8-.7 2.6-.1l.1.1 4.5 4.5c.4.3.6.8.6 1.3z"
      />
      <path
        className="st1"
        d="M295.6 1805.4c0-.2.1-.4.3-.6l4.5-4.5c.4-.3.9-.3 1.3 0l4.5 4.5c.2.2.3.4.3.6 0 .5-.4.9-.9.9h-9c-.5 0-1-.3-1-.9m-2 0c0 1.6 1.3 2.9 2.9 2.9h9c1.6 0 2.9-1.3 2.9-2.9 0-.7-.3-1.5-.8-2l-4.5-4.5-.1-.1-.1-.1c-1.2-.9-2.8-.9-3.9.2l-4.5 4.5c-.6.5-.9 1.2-.9 2z"
      />
      <path
        className="st12"
        d="M307.3 2106.1c0 1-.9 1.9-1.9 1.9h-9c-1.1 0-1.9-.9-1.9-1.9 0-.5.2-.9.5-1.3l4.5-4.5c.7-.7 1.8-.7 2.6-.1l.1.1 4.5 4.5c.4.3.6.8.6 1.3z"
      />
      <path
        className="st1"
        d="M295.6 2106.1c0-.2.1-.4.3-.6l4.5-4.5c.4-.3.9-.3 1.3 0l4.5 4.5c.2.2.3.4.3.6 0 .5-.4.9-.9.9h-9c-.5 0-1-.3-1-.9m-2 0c0 1.6 1.3 2.9 2.9 2.9h9c1.6 0 2.9-1.3 2.9-2.9 0-.7-.3-1.5-.8-2l-4.5-4.5-.1-.1-.1-.1c-1.2-.9-2.8-.9-3.9.2l-4.5 4.5c-.6.5-.9 1.2-.9 2z"
      />
      <path
        className="st12"
        d="M639.2 1918.2c-1 0-1.9-.9-1.9-1.9v-9c0-1.1.9-1.9 1.9-1.9.5 0 .9.2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.4-.8.6-1.3.6z"
      />
      <path
        className="st1"
        d="M639.2 1906.5c.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.5.3-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.7 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.8-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st12"
        d="M576.3 1702.4c-1 0-1.9-.9-1.9-1.9v-9c0-1.1.9-1.9 1.9-1.9.5 0 .9.2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.4-.8.6-1.3.6z"
      />
      <path
        className="st1"
        d="M576.3 1690.7c.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.5.3-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.7 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.8-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st12"
        d="M1001.8 1570.1c0 1-.9 1.9-1.9 1.9h-9c-1.1 0-1.9-.9-1.9-1.9 0-.5.2-.9.5-1.3l4.5-4.5c.7-.7 1.8-.7 2.6-.1l.1.1 4.5 4.5c.4.3.6.8.6 1.3z"
      />
      <path
        className="st1"
        d="M990.1 1570.1c0-.2.1-.4.3-.6l4.5-4.5c.4-.3.9-.3 1.3 0l4.5 4.5c.2.2.3.4.3.6 0 .5-.4.9-.9.9h-9c-.5 0-1-.3-1-.9m-2 0c0 1.6 1.3 2.9 2.9 2.9h9c1.6 0 2.9-1.3 2.9-2.9 0-.7-.3-1.5-.8-2l-4.5-4.5-.1-.1-.1-.1c-1.2-.9-2.8-.9-3.9.2l-4.5 4.5c-.6.5-.9 1.2-.9 2z"
      />
      <path
        className="st12"
        d="M1148.1 1464.6c-1 0-1.9-.9-1.9-1.9v-9c0-1.1.9-1.9 1.9-1.9.5 0 .9.2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.4-.8.6-1.3.6z"
      />
      <path
        className="st1"
        d="M1148.1 1452.9c.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.5.3-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.7 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.8-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st12"
        d="M360.8 1205.4c1 0 1.9.9 1.9 1.9v9c0 1.1-.9 1.9-1.9 1.9-.5 0-.9-.2-1.3-.5l-4.5-4.5c-.7-.7-.7-1.8-.1-2.6l.1-.1 4.5-4.5c.3-.4.8-.6 1.3-.6z"
      />
      <path
        className="st1"
        d="M360.8 1217.1c-.2 0-.4-.1-.6-.3l-4.5-4.5c-.3-.4-.3-.9 0-1.3l4.5-4.5c.2-.2.4-.3.6-.3.5 0 .9.4.9.9v9c0 .5-.3 1-.9 1m0 2c1.6 0 2.9-1.3 2.9-2.9v-9c0-1.6-1.3-2.9-2.9-2.9-.7 0-1.5.3-2 .8l-4.5 4.5-.1.1-.1.1c-.9 1.2-.9 2.8.2 3.9l4.5 4.5c.5.6 1.2.9 2 .9z"
      />
      <path
        className="st12"
        d="M736.3 1205.4c1 0 1.9.9 1.9 1.9v9c0 1.1-.9 1.9-1.9 1.9-.5 0-.9-.2-1.3-.5l-4.5-4.5c-.7-.7-.7-1.8-.1-2.6l.1-.1 4.5-4.5c.3-.4.8-.6 1.3-.6z"
      />
      <path
        className="st1"
        d="M736.3 1217.1c-.2 0-.4-.1-.6-.3l-4.5-4.5c-.3-.4-.3-.9 0-1.3l4.5-4.5c.2-.2.4-.3.6-.3.5 0 .9.4.9.9v9c0 .5-.3 1-.9 1m0 2c1.6 0 2.9-1.3 2.9-2.9v-9c0-1.6-1.3-2.9-2.9-2.9-.7 0-1.5.3-2 .8l-4.5 4.5-.1.1-.1.1c-.9 1.2-.9 2.8.2 3.9l4.5 4.5c.5.6 1.2.9 2 .9z"
      />
      <path
        className="st12"
        d="M1332.5 1124.6c0-1 .9-1.9 1.9-1.9h9c1.1 0 1.9.9 1.9 1.9 0 .5-.2.9-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.4-.3-.6-.8-.6-1.3z"
      />
      <path
        className="st1"
        d="M1344.2 1124.6c0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.5.4-.9.9-.9h9c.5 0 1 .3 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .7.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.8.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <path
        className="st12"
        d="M1332.5 953.7c0-1 .9-1.9 1.9-1.9h9c1.1 0 1.9.9 1.9 1.9 0 .5-.2.9-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.4-.3-.6-.8-.6-1.3z"
      />
      <path
        className="st1"
        d="M1344.2 953.7c0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.5.4-.9.9-.9h9c.5 0 1 .3 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .7.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.8.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <path
        className="st12"
        d="M1152.7 806.8c0 1-.9 1.9-1.9 1.9h-9c-1.1 0-1.9-.9-1.9-1.9 0-.5.2-.9.5-1.3l4.5-4.5c.7-.7 1.8-.7 2.6-.1l.1.1 4.5 4.5c.4.3.6.8.6 1.3z"
      />
      <path
        className="st1"
        d="M1141 806.8c0-.2.1-.4.3-.6l4.5-4.5c.4-.3.9-.3 1.3 0l4.5 4.5c.2.2.3.4.3.6 0 .5-.4.9-.9.9h-9c-.5 0-1-.3-1-.9m-2 0c0 1.6 1.3 2.9 2.9 2.9h9c1.6 0 2.9-1.3 2.9-2.9 0-.7-.3-1.5-.8-2l-4.5-4.5-.1-.1-.1-.1c-1.2-.9-2.8-.9-3.9.2l-4.5 4.5c-.6.5-.9 1.2-.9 2z"
      />
      <path
        className="st12"
        d="M39.9 1373.9c0-1 .9-1.9 1.9-1.9h9c1.1 0 1.9.9 1.9 1.9 0 .5-.2.9-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.4-.3-.6-.8-.6-1.3z"
      />
      <path
        className="st1"
        d="M51.6 1373.9c0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.5.4-.9.9-.9h9c.5 0 1 .3 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .7.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.8.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <path
        className="st12"
        d="M829.6 1918.2c-1 0-1.9-.9-1.9-1.9v-9c0-1.1.9-1.9 1.9-1.9.5 0 .9.2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.4-.8.6-1.3.6z"
      />
      <path
        className="st1"
        d="M829.6 1906.5c.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.5.3-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.7 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.8-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st12"
        d="M1026.9 1741c-1 0-1.9-.9-1.9-1.9v-9c0-1.1.9-1.9 1.9-1.9.5 0 .9.2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.4-.8.6-1.3.6z"
      />
      <path
        className="st1"
        d="M1026.9 1729.3c.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c.1-.5.3-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.7 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.8-.2-3.9l-4.5-4.5c-.5-.6-1.1-.9-2-.9z"
      />
      <path
        className="st12"
        d="M1240.2 1741c-1 0-1.9-.9-1.9-1.9v-9c0-1.1.9-1.9 1.9-1.9.5 0 .9.2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.4-.8.6-1.3.6z"
      />
      <path
        className="st1"
        d="M1240.2 1729.3c.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.5.3-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.7 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.8-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st9"
        d="M579.6 472H598c2.7 0 5 2.2 5 5v58.8"
      />
      <path
        className="st9"
        d="M355.2 535.3V477c0-2.8 2.3-5 5-5h231.6"
      />
      <circle
        className="st32"
        cx={479.1}
        cy={472}
        r={9.2}
      />
      <path
        className="st30"
        d="M338.8 993.6H489"
      />
      <path
        className="st33"
        d="M1225 901.3c-1.5 0-2.7 1.2-2.7 2.7v4.6c0 1.5 1.1 2.7 2.6 2.7h6.8c-.4 1.4-.6 2.8-.6 4.2 0 3.9 1.5 7.6 4.2 10.3l-4.1 9.1c-.3.7 0 1.6.6 1.6h27.7c.6 0 1-.9.7-1.6l-4.1-9c2.8-2.8 4.3-6.5 4.3-10.4v-.1c0-8-6.6-14.5-14.6-14.5-1.1 0-2.3.1-3.4.4H1225z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        width={45}
        height={46}
        xlinkHref="solicitudscadaida/693C2E5D.png"
        transform="matrix(-.7479 0 0 .7479 1263.094 898.229)"
      />
      <circle
        className="st1"
        cx={1245.8}
        cy={915.8}
        r={10.9}
      />
      <circle
        className="st2"
        cx={1245.8}
        cy={915.6}
        r={8}
      />
      <path
        className="st33"
        d="M1225 1205.6c-1.5 0-2.7 1.2-2.7 2.7v4.6c0 1.5 1.1 2.7 2.6 2.7h6.8c-.4 1.4-.6 2.8-.6 4.2 0 3.9 1.5 7.6 4.2 10.3l-4.1 9.1c-.3.7 0 1.6.6 1.6h27.7c.6 0 1-.9.7-1.6l-4.1-9c2.8-2.8 4.3-6.5 4.3-10.4v-.1c0-8-6.6-14.5-14.6-14.5-1.1 0-2.3.1-3.4.4H1225z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        width={45}
        height={46}
        xlinkHref="solicitudscadaida/693C2E5D.png"
        transform="matrix(-.7479 0 0 .7479 1263.094 1202.571)"
      />
      <circle
        className="st1"
        cx={1245.8}
        cy={1220.1}
        r={10.9}
      />
      <circle
        className="st2"
        cx={1245.8}
        cy={1219.9}
        r={8}
      />
      <path
        className="st33"
        d="M991.2 2185.8c-1.5 0-2.7 1.2-2.7 2.7v4.6c0 1.5 1.1 2.7 2.6 2.7h6.8c-.4 1.4-.6 2.8-.6 4.2 0 3.9 1.5 7.6 4.2 10.3l-4.1 9.1c-.3.7 0 1.6.6 1.6h27.7c.6 0 1-.9.7-1.6l-4.1-9c2.8-2.8 4.3-6.5 4.3-10.4v-.1c0-8-6.6-14.5-14.6-14.5-1.1 0-2.3.1-3.4.4h-17.4z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        width={45}
        height={46}
        xlinkHref="solicitudscadaida/693C2E5D.png"
        transform="matrix(-.7479 0 0 .7479 1029.274 2182.777)"
      />
      <circle
        className="st1"
        cx={1012}
        cy={2200.3}
        r={10.9}
      />
      <circle
        className="st2"
        cx={1012}
        cy={2200.1}
        r={8}
      />
      <path
        className="st33"
        d="M275.8 555.4h-17.4c-1.1-.3-2.3-.4-3.4-.4-8 0-14.6 6.5-14.6 14.5v.1c0 3.9 1.5 7.6 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6H269c.6 0 .9-.9.6-1.6l-4.1-9.1c2.7-2.7 4.2-6.4 4.2-10.3 0-1.4-.2-2.8-.6-4.2h6.8c1.5 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        width={45}
        height={46}
        xlinkHref="solicitudscadaida/693C2E5D.png"
        transform="translate(237.73 552.331) scale(.7479)"
      />
      <circle
        className="st1"
        cx={255}
        cy={569.9}
        r={10.9}
      />
      <circle
        className="st2"
        cx={255}
        cy={569.7}
        r={8}
      />
      <path
        className="st33"
        d="M161.3 1692h-17.4c-1.1-.3-2.3-.4-3.4-.4-8 0-14.6 6.5-14.6 14.5v.1c0 3.9 1.5 7.6 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.7-2.7 4.2-6.4 4.2-10.3 0-1.4-.2-2.8-.6-4.2h6.8c1.5 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        width={45}
        height={46}
        xlinkHref="solicitudscadaida/693C2E5D.png"
        transform="translate(123.195 1688.973) scale(.7479)"
      />
      <circle
        className="st1"
        cx={140.5}
        cy={1706.5}
        r={10.9}
      />
      <circle
        className="st2"
        cx={140.5}
        cy={1706.3}
        r={8}
      />
      <image
        style={{
          overflow: "visible",
          enableBackground: "new"
        }}
        width={320}
        height={240}
        xlinkHref="valvulS ida.jpg"
        transform="matrix(.375 0 0 .375 1781.857 1537.514)"
      />
      <g className="st40">
        <path
          className="st6"
          d="M1088.9 732.3v-10.2L1080 708h22.8l-8.9 14.1v10.2h-5z"
        />
      </g>
      <path
        className="st0"
        d="M869.9 549.1v9.5M899.4 549.1v9.5M928.9 549.1v9.5M958.4 549.1v9.5M987.9 549.1v9.5"
      />

      {/* Estado UV */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(18, "Estado UV", true)}>
        <path
          className="st27"
          d="M1046 1182.2c0-10.8-12.6-19.6-28.3-19.6s-28.3 8.9-28.3 19.6h.2c-.2.5-.2 1.1-.2 1.8v60.8c0 5.7 5.5 10.4 12.3 11v10h8.4v-9.9h14.6v9.9h8.4v-10c7.3-.3 12.9-5.2 12.9-11V1184c0-.5-.2-1.1-.2-1.8h.2z"
        />
        <text
          transform="translate(971.7 1281.29)"
          className="st6 st8">
          {"SISTEMA UV 001"}
        </text>
        <circle
          transform="rotate(-80.781 1017.721 1162.585)"
          className="st1"
          cx={1017.7}
          cy={1162.6}
          r={12.1}
        />
        <circle
          transform="rotate(-80.781 1017.72 1162.485)"
          fill={getColor(datosScada.d18)}
          cx={1017.7}
          cy={1162.5}
          r={8.9}
        />
      </g>

      {/* Fin Estado UV */}
    </svg>
  );
};

export default ScadaKoAndinaAntofagasta;

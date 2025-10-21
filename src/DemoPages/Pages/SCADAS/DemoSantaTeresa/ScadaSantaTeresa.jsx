import * as React from "react";

function ScadaSantaTeresa(props) {
  const {
    PT203,
    PT239,
    PT219,
    PT223,
    PT234,
    FIT215,
    FIT227,
    AE217,
    AE228,
    AE235,
    RPRO,
    TE230,
    DP0,
    DP1,
    LSL302,
    P002,
    P003,
    P004,
    datosAlarmas,
    loading,
    selected,
    umbrales,
    con,
    loadgraphs,
    notificacion
  } = props;

  const getColor = (x) => {
    const colors = [
      "#B4002B", //detenida id => 0
      "#00CD98", //funcionando id => 1
      "#3574E0", //moviendose id => 2
      "#FBCE19", // falla id => 3
      "#FF6B00", // bloqueada id => 4
      "#b7b7b7" // ??
    ];
    try {
      return colors[Number(x)];
    } catch (err) {
      console.error(err);
      return "#3574e0";
    }
  };

  const getTarjetaClass = (id) => {
    if (selected === id) {
      return "tarjetaSeleccionada";
    } else {
      return "tarjeta";
    }
  };

  const getTemaAlarma = (id) => {
    if (loading) {
      return "campanaDesconectada";
    } else {
      for (let i = 0; i < datosAlarmas.length; i++) {
        if (id === datosAlarmas[i].id) {
          if (datosAlarmas[i].min !== datosAlarmas[i].max) {
            return "campana";
          } else {
            return "campanaVacia";
          }
        }
      }
    }
  };

  return (
    <svg
      id="prefix__Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x={0}
      y={0}
      viewBox="0 0 1429.5 1623.9"
      xmlSpace="preserve"
      {...props}>
      <style>
        {
          ".prefix__st0{fill:#fff}.prefix__st3{fill:#3574e0}.prefix__st6{fill:#666}.prefix__st7{font-family:&apos;ArialMT&apos;}.prefix__st8{font-size:14px}.prefix__st9{fill:#606060}.prefix__st10{font-family:&apos;Arial-BoldMT&apos;}.prefix__st11{font-size:17px}.prefix__st12{fill:#00e098}.prefix__st13{opacity:.5;fill:none;stroke:#b3b3b3;stroke-width:.5;stroke-miterlimit:10;enable-background:new}.prefix__st14{fill:#f2f2f2}.prefix__st15{font-size:11px}.prefix__st16{fill:none;stroke:#323e48;stroke-width:4;stroke-miterlimit:10}.prefix__st17{fill:#323e48}.prefix__st18{fill:#00a19b}.prefix__st19{opacity:.6;stroke:#ccc;stroke-width:2;enable-background:new}.prefix__st19,.prefix__st20,.prefix__st21{fill:none;stroke-miterlimit:10}.prefix__st20{stroke:#35ace8;stroke-width:4}.prefix__st21{stroke:#323e48}.prefix__st24{opacity:.15;fill:#3574e0;enable-background:new}.prefix__st25{fill:#35ace8}.prefix__st26{enable-background:new}.prefix__st27{font-family:&apos;PTSans-Regular&apos;}.prefix__st28{font-size:15px}.prefix__st29{fill:#fff;stroke:#35ace8;stroke-width:4;stroke-miterlimit:10}.prefix__st30{fill:#ccc}.prefix__st32{fill:#fbb03b}.prefix__st33{fill:#f15a24}.prefix__st34{fill:none;stroke:#3574e0;stroke-width:2;stroke-miterlimit:10}.prefix__st36{fill:#8db6fc}.tarjeta{fill:#ffffff}.tarjetaSeleccionada{fill:#3574e0;opacity:.15}.cursorPointer{cursor:pointer}.campana{fill:#3474E0;}.campana:hover{fill:#7c7c7c;}.campanaVacia{fill:#c2c2c1;}.campanaVacia:hover{fill:#7c7c7c;}.campanaDesconectada{fill:#c2c2c1;}"
        }
      </style>
      <image
        width={289}
        height={178}
        xlinkHref="data:image/png;base64,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 gg=="
        transform="translate(1101.812 37.638) scale(.9944)"
        overflow="visible"
        opacity={0.2}
      />
      <path
        className="prefix__st0"
        d="M1376.2 207.4H1113c-3.4 0-6.1-2.8-6.1-6.1V49.7c0-3.4 2.8-6.1 6.1-6.1h263.2c3.4 0 6.1 2.8 6.1 6.1v151.5c0 3.4-2.7 6.2-6.1 6.2z"
      />
      <image
        width={234}
        height={122}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAAB8CAYAAABqtVxXAAAACXBIWXMAAAs6AAALOgFkf1cNAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABKhJREFUeNrs2mtPG0cUgOGxvRgK 5EJpm6qRqv7/39VWVUhDIdyMYd3Z9kwYtraxwSSK+jzSkSHYfHtzZpdNCfhqDD7z54D7Zs8V3qB6 FSxsLtjZqvEOVgy1P8NewMD6W7XE2lZfz5aF+1BswyrQUW+Gti08Won0tjdtL+KVgq03aRMzjtmO 1yZ+PrRpYe3N2gV5E3NdzTT+rcTb1r+gWRBrCXErAv0mz26e/Tx78f12Fa1YYb1r1tsIdJLnIs95 vF7GlHhTHW2zZLNuVZG+jjmI1xd5duI9I9ezsPZ16zSi7EI9y3MScxyvZ/H+aX1d2yy4bm1ii77K 812eH/K8iddv87yMn/eDBVa7fu2OvVexVU/zfMhzlOddXHIOe9ey/7w2C7brOI6+XZw/5fk5z9s8 P+Y5jK1bgnUkhvU2bVsdibtgP0awB3GqHVZR1zeiZvOOxKO4Pn0R27UL9ZeI9k0ciXfT3Y0nd4ph /Q1bgpzEsfgglmQTkU7iWvYqjsXd+wfNguNwCfYwturb2LTfx3bdSXc3nFy7wvpbttx4ukl3N3JL rOWYfBIxT+J9n65h64ciRtWR+FUciw+ra9fd3lFYrLB+sKmKttwLamOrHsf17FF8XZZjO+9IXP85 p/5Tzm66uzPcCBUebdA71Q4i1v1Ykq9jOe6l+888DObddKqjHVdT/hewWWGz6t7KMw/lWYd7N3aH C+ovD04sehRRrLC5bVt66z9V2KTen00XBfvQAJsPd96yvHeiHa74S0QKny/afnNLNyzw5cNN8xal YOErIlgQLCBYECwgWECwIFhAsIBgQbCAYAHBgmABwQKCBcECggUEC4IFBAsIFgQLCBYQLAgWECwg WBAsIFhAsCBYQLCAYEGwgGABwYJgAcECggXBAoIFBAuCBQQLCBYECwgWECwIFhAsIFgQLCBYQLAg WECwgGBBsIBgAcGCYAHBAoIFwQKCBQQLggUECwgWBAsIFhAsCBYQLCBYECwgWECwIFhAsIBgQbCA YAHBgmABwQKCBcECgoX/h1nv9cFgZwsGeN5Qy7Tz2hs+8KHb+GArXHjWUNvo7SbPNF5veu2lZsmH ywevY6ZVwIMYYHOxlt4mea6qcNvy5mbOZi2xdh+6zHMR0329E1u5df0LGwu27u0sz8c85/H9dbUo /7NhyzH4OiI9zXOc50Oe/Tyj+PlWfG3LwtO36zR6O4nWuvkrwp3UR+Om+uCg9wsue8HuxVbtPrwd wSbRwqNjTdVR+Dw6+zNeTyLismFndbD9a9eriPV9hLoVP+t+wcsqWMdieFq05UTbbdOjPL/m+T3a O40WS7BLj8TlF4zi3y+j/BcRbJPcfIKnxFr3dhbb9Y88v0WwZ3EkXrhhU+9MXTboNAJ+Fxt3XF3D ChaefiSur2HfxzXsRfysXbZhy7E4ReFtVN4Fu5v+vVPcRMwD17Hw6FhTuv9XmYt0d5f4otqun4Jd FNogghzF9es4jsHjiNV2hc0di0u05ZmHSbr/3EObVtiMJdoS7qj6fmizwsY2bf3wxG1vq7b9KNMD 0c4bscLmo03pgceAV4lOoPDlAl472Ke8H1g/1oX+FmAAN+xcPURU2mQAAAAASUVORK5CYII="
        transform="translate(36.959 37.638) scale(.9918)"
        overflow="visible"
        opacity={0.2}
      />
      <path
        className="prefix__st0"
        d="M256.2 151.5H47.4c-3.4 0-6.1-2.8-6.1-6.1V49.7c0-3.4 2.8-6.1 6.1-6.1h208.7c3.4 0 6.1 2.8 6.1 6.1v95.6c.1 3.4-2.7 6.2-6 6.2z"
      />
      <circle
        cx={1143}
        cy={178.8}
        r={8}
        fill="#B4002B"
      />
      <circle
        cx={1143}
        cy={101.2}
        r={8}
        fill="#00cd98"
      />
      <circle
        className="prefix__st3"
        cx={1143}
        cy={120.6}
        r={8}
      />
      <circle
        cx={1143}
        cy={140}
        r={8}
        fill="#fbc43b"
      />
      <circle
        cx={1143}
        cy={159.5}
        r={8}
        fill="#ff6200"
      />
      <text
        transform="translate(1160.93 105.915)"
        className="prefix__st6 prefix__st7 prefix__st8">
        {"Funcionando"}
      </text>
      <text
        transform="translate(1160.93 125.915)"
        className="prefix__st6 prefix__st7 prefix__st8">
        {"Movi\xE9ndose"}
      </text>
      <text
        transform="translate(1160.93 145.915)"
        className="prefix__st6 prefix__st7 prefix__st8">
        {"Falla"}
      </text>
      <text
        transform="translate(1160.93 165.915)"
        className="prefix__st6 prefix__st7 prefix__st8">
        {"Bloqueada"}
      </text>
      <text
        transform="translate(1160.93 185.915)"
        className="prefix__st6 prefix__st7 prefix__st8">
        {"Detenida"}
      </text>
      <g>
        <text
          transform="translate(75.498 77.731)"
          className="prefix__st9 prefix__st10 prefix__st8">
          {"Conectividad de Planta"}
        </text>
      </g>
      {/* Conectividad de Planta */}
      {/* Label */}
      <text
        transform="translate(109.29 128.21)"
        className="prefix__st9 prefix__st10 prefix__st11">
        {Number(props.con) === 1
          ? "EN LINEA"
          : Number(props.con) === 0
            ? "DESCONECTADO"
            : "CONSULTANDO"}
      </text>
      <g>
        <image
          width={37}
          height={38}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAnCAYAAACIVoEIAAAACXBIWXMAAArrAAAK6wGCiw1aAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7VJREFUeNrsmIlu2kAURT2eMVsg oaFtklaV+v+/1YW2KVkAsxnsjqv7osurV6JGqlSkK4yxx8dvt4Pg/+cf/pi/vE720lCm5LsIKmsD aJ4BE2Lb0LYGypUqqKzOiuZEGJFVCumCOcyBlJICgv3j41oAMUx+XkcpIosJUOK1gxLoQGBZkWub WKoIpuc1gIZefa8u/jcEtPFaQyt8b732CvDIaq4hkFUw59AYGmE/Q20BsSA9es3x34YAj9zpalwm botgjRzk0mvi9drrDX7n+89wHEOtAPHgde/102vmFWP/EuBHieAaxFAEK1x4vfW69rqBGGqgoHZk qXvAvIK7H+Fuo+LqUGUpsZKDy4awzHuvD9AN9o1hJY6pDDHD1poAPrf4HW5AZ+jvrHUVQJbcNoaV cqiPgLrG/iHAOfsylX3niLs+jhvhuB3AdxT4gauJpQ4umpv9yusdwMRKIwKylM3iji4u1sNaFv/3 sH8JrSjoS2NK0r+PC18ifq5gsQlirK8sZAoquiO3BoAJEW+SAI8Ayy12cDVW0lAT5bJOCVCggjii tB9jO0bw3yLG5gBNXEU8SZCPqB4xkKMMbdKaHNx5RnBjWPxozaqYiqhYDqEBZZlt2BE0GBfhEXWE jkCFBTBGtZUuTuoroLBFQ9d1T8B6WPcoe8OaRSwF6ikwVXAOIBwGJqiJhyKXvsgnrBhjM+rgPBNl z7iebin7onXDihPlJKm6WzVutBlxGSahFsTr7mXdsODEgKB2GDFW0EYt0AYopTlK5qwYksK511B6 jN3jLmKah2TUSBq6U99kAoAlqvgDimYM0H1ZQw7orja0wD0WuUAKW5okwhooCQOZGGSUucP2knpf amsaskwKXaonHUplQ+2kyOLsshg3dYth76vXJ3zPCOxga9KfW05E31Ydl5ZkK89UApRDfPf67PUF 29KQkzJL6equf5uSx6hEZZYkiEyeP7ymsM4UcFO48MlK+bq2wdOvoQrs1CiiEyOhErKmWVzm828A 0dPBhjPaVQQox4OYX4I6pSTQ06dV43AM98wI6gGQCyozT7XP1WRNijvngJasXOBCY+r00lQZirN3 BhjZtyC3NXrEyqhAblWt2cDs5/TM11NQXOeWOH5O1llRNT+qd6ZFZ7c0yvRonJEZq6PGXrmBNUGs yV3cGVpD6ZGDS4TUrEgV0br3CRk/Up3yLqGoqIZUw6x638BQWcmbl6zs5cYp76fK6pZWVtCMgzqY 577JK3p7ZypenAVt3uj9EmAAVGPAlKf0B2IAAAAASUVORK5CYII="
          transform="translate(66.583 102.711) scale(1.0206)"
          overflow="visible"
          opacity={0.15}
        />
        <circle
          className="prefix__st0"
          cx={85.5}
          cy={122.2}
          r={12.1}
        />
        {/* Estado */}
        <circle
          fill={
            Number(props.con) === 1
              ? getColor(1)
              : Number(props.con) === 0
                ? getColor(0)
                : getColor(5)
          }
          cx={85.5}
          cy={122.1}
          r={8.9}
        />
      </g>
      {/* Fin Conectividad de Planta */}
      <g>
        <text
          transform="translate(1134.966 77.731)"
          className="prefix__st9 prefix__st10 prefix__st8">
          {"Funcionamiento de dispositivos"}
        </text>
      </g>
      <path
        className="prefix__st13"
        d="M59.9 96.2h185.8"
      />
      <g>
        <path
          className="prefix__st19"
          d="M364.7 1279.3v-50c0-2.8-2.1-5-4.6-5h-72.7c-2.6 0-4.6 2.2-4.6 5v50M323.8 1149.3v75"
        />
        <path
          className="prefix__st20"
          d="M727 1114.2h498c4.8 0 8.6 3.9 8.6 8.6v21.4M438.9 1136.4h95.7"
        />
        <path
          className="prefix__st3"
          d="M175.4 330.9h192v97.7h-192z"
        />
        <path
          className="prefix__st16"
          d="M367.2 314.5v111.2c0 1.7-.9 3.1-1.9 3.1H177.5c-1.1 0-1.9-1.4-1.9-3.1V314.5"
        />
        <path
          className="prefix__st21"
          d="M737.7 679.1h.5"
        />
        <path
          fill="none"
          stroke="#323e48"
          strokeMiterlimit={10}
          strokeDasharray="1.0018,2.0037"
          d="M740.2 679.1h134.2"
        />
        <path
          className="prefix__st21"
          d="M875.4 679.1h.5M851.7 878.9h.5"
        />
        <path
          fill="none"
          stroke="#323e48"
          strokeMiterlimit={10}
          strokeDasharray="1.011,2.0219"
          d="M854.2 878.9h20.2"
        />
        <path
          className="prefix__st21"
          d="M875.4 878.9h.5"
        />

        <text
          transform="translate(213.297 446.403)"
          className="prefix__st9 prefix__st7 prefix__st15">
          {"Estanque Alimentaci\xF3n"}
        </text>
        <path
          className="prefix__st17"
          d="M625.2 393.6h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
        />
        <image
          width={38}
          height={37}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAlCAYAAAAuqZsAAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2JJREFUeNrsmHtT01AQxZtXy5sK VmHUUfT7fyaVcVAQKG0pUJImbpizzul6m3tT+hdjZs6Elvbml7OPu2mn8/94IUe0pu/61qnMee1g EZ1dWgalKunvtYExQCxKRCmU4L3IAVTDzEUFNA8BjFq6FAOkK+pBG3idQBGB1RC56FH0AD1CDNga zLrUBci2aFe0h783CS4mMIWaiiaiMc53eD8HXGkvnAY6luDCW6J90aFoIHotegXIDQqrhrC+8L1o JLoU/cb5GoARADsWLg1wq3YggzM1xJHoHXQEuB0Ci+lCOdy5EZ2LfmIddXdEzi7ApQFQKZzqi45F H0Unog8AOwBY15FjOfJqDJf7AMsIhHMt0pxLA0LYw4UHgPks+iJ6D7f2jFuu5N9HuDcBxfn3iGpd qFQfmLpVh/AtwD6RW326WLKkh81xcxnA6/dmolvk2RSu5vjs0lByn+rC+j7AjgE0oLB0CSpygHGP U6emyLshwjyFc5pjZZNjGsZt5FEN8wa5smdaROTJVc6pGVJggHUvsNaUKvRvBTXl1zZy5AAu7RBU 3GL34AjoegeOm3SC2WrUxO9Du8g520xDeiHvGptYdxegPXL+SbFnkR5AdiC7yCoTSUI7iG5nmd1v faHMzH6oLSHurHZEtKfaASD2OebaI+0XV4VqWnfhiBtmKB5XcsfIsupRhcxkTWBzlO89SvnO1QhX ACpDZrS44cs5es4UTVAb4Yzg2jpXAsTOZwUBPzHEnjDq1jFCp2a4wjVHeVKDb3ZCs5muV4WEsiCw a5qlbmjQKwLCWjnWG2KtK9z0PQ2NT59PAsdp7Ttb1KWzgCZbmfFnhBv8Ifom+o4ZbYibLXxgttlq w83obDdnTmpObC2gMVw6A9RXAF7gfwvp4XOsqR9x9RY0X82gB6podeoMLtVQp6JfSA0NpXceq6iK 9GHiiraiOS48wbSho7XrYUTz6hJhOwXcOeXrPw8laUAladJOzOgyAezhkocRO1pf0dx/jte39ChX tX1KqsjmktwaIz/2zcCYOBzTXjg0w+GMoKpVHnjtVKsVqupRQbhmfs23O9pB+KG3fO5PBLZCM5o6 EkdhMBzLdvq1/Khip4OEXjdt2HO77Tz3twtfy4g8a1Vtpop1/D7WZp2q81KOPwIMANCcdXDyL+92 AAAAAElFTkSuQmCC"
          transform="rotate(-.756 29599.424 -43691.43) scale(.91928)"
          overflow="visible"
          opacity={0.15}
        />
        <circle
          transform="rotate(-.769 604.026 408.38) scale(.99999)"
          className="prefix__st0"
          cx={604.1}
          cy={408.3}
          r={10.9}
        />
        <circle
          className="prefix__st24"
          cx={604.1}
          cy={408.1}
          r={8}
        />
        <text
          transform="translate(584.963 446.404)"
          className="prefix__st9 prefix__st7 prefix__st15">
          {"Bomba 1"}
        </text>

        <path
          className="prefix__st20"
          d="M369.8 324.7h170.1c4.8 0 8.6 3.9 8.6 8.6v89.3c0 1.6 1.3 2.8 2.8 2.8h26.6"
        />
        <path
          className="prefix__st25"
          d="M575.7 431.4c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        />
        <path
          className="prefix__st0"
          d="M575.7 419.7c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c1-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        />
        <path
          className="prefix__st17"
          d="M625.2 319.4h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
        />
        <image
          width={38}
          height={37}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAlCAYAAAAuqZsAAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2JJREFUeNrsmHtT01AQxZtXy5sK VmHUUfT7fyaVcVAQKG0pUJImbpizzul6m3tT+hdjZs6Elvbml7OPu2mn8/94IUe0pu/61qnMee1g EZ1dWgalKunvtYExQCxKRCmU4L3IAVTDzEUFNA8BjFq6FAOkK+pBG3idQBGB1RC56FH0AD1CDNga zLrUBci2aFe0h783CS4mMIWaiiaiMc53eD8HXGkvnAY6luDCW6J90aFoIHotegXIDQqrhrC+8L1o JLoU/cb5GoARADsWLg1wq3YggzM1xJHoHXQEuB0Ci+lCOdy5EZ2LfmIddXdEzi7ApQFQKZzqi45F H0Unog8AOwBY15FjOfJqDJf7AMsIhHMt0pxLA0LYw4UHgPks+iJ6D7f2jFuu5N9HuDcBxfn3iGpd qFQfmLpVh/AtwD6RW326WLKkh81xcxnA6/dmolvk2RSu5vjs0lByn+rC+j7AjgE0oLB0CSpygHGP U6emyLshwjyFc5pjZZNjGsZt5FEN8wa5smdaROTJVc6pGVJggHUvsNaUKvRvBTXl1zZy5AAu7RBU 3GL34AjoegeOm3SC2WrUxO9Du8g520xDeiHvGptYdxegPXL+SbFnkR5AdiC7yCoTSUI7iG5nmd1v faHMzH6oLSHurHZEtKfaASD2OebaI+0XV4VqWnfhiBtmKB5XcsfIsupRhcxkTWBzlO89SvnO1QhX ACpDZrS44cs5es4UTVAb4Yzg2jpXAsTOZwUBPzHEnjDq1jFCp2a4wjVHeVKDb3ZCs5muV4WEsiCw a5qlbmjQKwLCWjnWG2KtK9z0PQ2NT59PAsdp7Ttb1KWzgCZbmfFnhBv8Ifom+o4ZbYibLXxgttlq w83obDdnTmpObC2gMVw6A9RXAF7gfwvp4XOsqR9x9RY0X82gB6podeoMLtVQp6JfSA0NpXceq6iK 9GHiiraiOS48wbSho7XrYUTz6hJhOwXcOeXrPw8laUAladJOzOgyAezhkocRO1pf0dx/jte39ChX tX1KqsjmktwaIz/2zcCYOBzTXjg0w+GMoKpVHnjtVKsVqupRQbhmfs23O9pB+KG3fO5PBLZCM5o6 EkdhMBzLdvq1/Khip4OEXjdt2HO77Tz3twtfy4g8a1Vtpop1/D7WZp2q81KOPwIMANCcdXDyL+92 AAAAAElFTkSuQmCC"
          transform="rotate(-.756 24037.642 -43727.672) scale(.91928)"
          overflow="visible"
          opacity={0.15}
        />
        <circle
          transform="rotate(-.769 604.032 334.096) scale(.99999)"
          className="prefix__st0"
          cx={604.1}
          cy={334.1}
          r={10.9}
        />
        <circle
          className="prefix__st24"
          cx={604.1}
          cy={333.9}
          r={8}
        />
        <text
          transform="translate(584.963 372.122)"
          className="prefix__st9 prefix__st7 prefix__st15">
          {"Bomba 2"}
        </text>
        <path
          className="prefix__st20"
          d="M1099.5 1098.8v-255c0-5.3-4.3-9.6-9.6-9.6H944.4c-4.9 0-8.9-4-8.9-8.9V338.2c0-6.8-5.5-12.3-12.3-12.3H633.9M548.5 340.1h29.4"
        />

        {/* Temperatura Agua */}
        <image
          width={151}
          height={121}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAB5CAYAAAA00bOLAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABXpJREFUeNrsmm1z2kYURpG0NtiG xG7SNNN0+qX//z+1TZs4bmJsMO8Iupo+m7ksEhCXzhTpnJk7wrLEDOuzdx8tTlqHk7QA/mF9DGES c0yQDKnMcb1PtGTP+VSvU1MJgjVWrKJWpsLPpZK5CrGCUE51pmOmQrBmipWrlr4WOi6rBHMVYmUS quPrwlRb99DBmtmxCpFmviamphItjwVzFWIVEl366vm6Vr3QubauSclgjclYK8lTiDX2NfD1oBrq 3CwWLO5chTDnkujG1xtfP6huJFvHdC9oBqFrTSVT39cn1Z0Rygr2VS6bsdqSqBDrZ9U7X6+RC7kk 12etZG39PmSv3Cyh63hZdMpWxTL4VmL94usnX698dfWGKXI1Tq6VOtOT/Ojod3Mti1O9XlZ1rjPJ FZbEdxLrR527iAI9NCd7he7VNR1rqvxVLJOPkmxuO1e89XCh5e9GS+Erk7faZisCmidYbhrSTIE+ uBE3nsRFYT5krivd0JOpZdsQ0Dy5EpOxusaRq8iPrWXRdq9zrakdvXZm+4Gs1UyCWNkORzb2P9Po 5nhn3krFpilYR7LIky1H0pKb7UUJyyBUSLbXk3SPoUgFh3SyUk/IT/CfgVyAXIBcAMgFyAXIBYBc gFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBcgFyAXADIBcgFgFyAXIBcAMgF yAXIBYBcgFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBcgFyAXADIBcgFgFyA XIBcAMgFyAXIBYBcgFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBccMJyrU0B tJ7jSVpy8Sq6aYVk8BxP0hILi4uWpvLojYBOtZIX1pMtR1yFWHNfU9XcSJbo+qSGA5ccafDr3q3y HY5sCObMzUGsma+Rr6HqyVfXXJvVTC47YZ4zedbRBK2rZGuJVfgxkRfBkZHOB8G+dq64a010Q9/X Z1/Xvtq6fql70poIFoRKTSUmLiQHSLUy47eqaYSI/Sjc+CI/+vJlEncvF928MDff+Xrhq6NrZupg bfOHqINYmaoYizMd3R7ByvLpwsSHvGaChUkzU8cqxPrD15/ypC9vFjbYu2jAgpkPvm59net3U53r STZ34nLZjuU0YS5MtSVaVtKlbfZYmGUi1Kwq4J64XEt5MFTHKsT6XZ48mM5VGuht5hrKyNCxBr5u aiJXYp6UM02gK322IgK81OtLSRZ/VjtOY43VowY45I+5ecquQwaL5So61SfVnc7Fk2qjc4U3mZs/ wFID2NcSGQY8OzCX/J+xXaunyfO9rze+XuvnrplMienuUy0PIZcWA/yXyR9b4faEs1bLdOowoQaa TGFCjeXNxud1JW8U3sTa+miWCxvoTznUx3J95+utBm5q5FiZnBnnjltljw96fV8zucryZRwDpooH edU+V5lga9PJxro2M1sRp/60GB5KwrJ4rZn4pAFcmLB+qc8fOnkh1kdljt8k2J3uH5lZXAe5rGC5 2eey41OaL92OVpibZWAeParXZRsi5K6Bae9WrBDYewr4C11XZI33vn6VYB8lXBDTfqvRqplg8ZZL Za50B6y14VjH3fkg2EwTaBGJFQLsSyPXo5bA96oPEmsYLad13UhttQ7cMHbf8GZ1/conj2ZjCK9z LXFf9DAT5BoovN+qg91HYuU1eUI8xIuduGO/4QkOUhKFUbuHNdLT4JXJXCN1r36U0eq2t/WvcQzB xr+NWMGCXPcK/ZnpaGPVpLX9pS3UMD8dO+THXwfZfa746x7EQq6Dx6Tsy+xkxxMTYiHXN49L2RPy uuIIyHWUMUKoA/hbgAEAGrEmYbv27m4AAAAASUVORK5CYII="
          transform="translate(384.51 189.9)"
          overflow="visible"
          opacity={0.2}
        />
        <path
          className="prefix__st0"
          d="M438.3 194.6h-43.1c-3.5 0-6.3 2.8-6.3 6.3v89.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3v-89.3c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
        />

        {/* Tarjeta */}
        <g
          className={"cursorPointer"}
          onClick={() => {
            loadgraphs(13, "Temperatura Agua");
          }}>
          <path
            className={getTarjetaClass(13)}
            d="M389 202h138.1v86.8H389z"
          />
          <text
            transform="translate(418.112 228.552)"
            className="prefix__st26">
            <tspan
              x={0}
              y={0}
              className="prefix__st3 prefix__st7 prefix__st8">
              {"Temperatura"}
            </tspan>
            <tspan
              x={23.7}
              y={16.8}
              className="prefix__st3 prefix__st7 prefix__st8">
              {"Agua"}
            </tspan>
          </text>

          <text
            transform="translate(439.837 273.87)"
            className="prefix__st9 prefix__st7 prefix__st11">
            {props.te230}
          </text>
          <text
            transform="translate(478.962 273.475)"
            className="prefix__st9 prefix__st27 prefix__st28">
            {"C\xB0"}
          </text>
        </g>

        {/* Campana */}
        <g
          onClick={() => {
            notificacion(13, "Temperatura Agua");
          }}
          className={getTemaAlarma(13)}>
          <path d="M413.9 262.8c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
          <path d="M412.2 261.8c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM423.5 260.5c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
          <path d="M424.1 258.7c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM425 267.8v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM420 275.3c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
        </g>
        {/* Fin Temperatura Agua */}

        <path
          className="prefix__st25"
          d="M575.7 346.4c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        />
        <path
          className="prefix__st0"
          d="M575.7 334.7c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c1-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        />
        <circle
          className="prefix__st29"
          cx={458}
          cy={325.3}
          r={9.2}
        />

        {/*Presion Mezcla */}
        <image
          width={152}
          height={121}
          xlinkHref="data:image/png;base64,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 4IsAAwC9akwXJIdvJgAAAABJRU5ErkJggg=="
          transform="translate(651.51 189.9)"
          overflow="visible"
          opacity={0.2}
        />
        <path
          className="prefix__st0"
          d="M705.8 194.6h-43.1c-3.5 0-6.3 2.8-6.3 6.3v89.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3v-89.3c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
        />
        {/* Tarjeta */}
        <g
          className={"cursorPointer"}
          onClick={() => {
            loadgraphs(3, "Presión Mezcla");
          }}>
          <path
            className={getTarjetaClass(3)}
            d="M656.5 202h138.1v86.8H656.5z"
          />
          <text
            transform="translate(701.964 228.552)"
            className="prefix__st26">
            <tspan
              x={0}
              y={0}
              className="prefix__st3 prefix__st7 prefix__st8">
              {"Presi\xF3n"}
            </tspan>
            <tspan
              x={1.6}
              y={16.8}
              className="prefix__st3 prefix__st7 prefix__st8">
              {"Mezcla"}
            </tspan>
          </text>
          <text
            transform="translate(707.35 273.87)"
            className="prefix__st9 prefix__st7 prefix__st11">
            {props.pt239}
          </text>
          <text
            transform="translate(746.476 273.475)"
            className="prefix__st9 prefix__st27 prefix__st28">
            {"Bar"}
          </text>
        </g>

        {/* Campana */}
        <g
          onClick={() => {
            notificacion(3, "Presión Mezcla");
          }}
          className={getTemaAlarma(3)}>
          <path d="M681.4 262.8c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
          <path d="M679.7 261.8c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM691 260.5c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
          <path d="M691.6 258.7c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM692.5 267.8v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM687.5 275.3c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
        </g>
        {/* Fin Presion Mezcla */}

        <circle
          className="prefix__st29"
          cx={725.5}
          cy={325.3}
          r={9.2}
        />

        {/* Presión Alimentación */}
        <image
          width={151}
          height={122}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAB6CAYAAACyRcElAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABZRJREFUeNrsmQ1v2lYUhjFcIJA2 CWm6da007f//qq1bl61LE/IFIWC84+m96eHGJqTLNGGeR3pl8ylx8/ic45us9TyyFuw6xUvKkrlj hmQ7L1WRnH+TXJlL2x3biWiwG2KVWSqFOxZ1kmVrnosidSzB0tUxINjOirVQ5jrmTrhHlSzUVKso Vc/St+xZBjr2EWxnxZpZ7ixTHcvH906yFcFCjVhdiTS0vLYcWA51PpR0Hb2XGazZM9ZS8pQSTSzX lkvLlc4nEm2eCpZWrijWQEIdW04sby1vLEeWV0n1gmbjq9aNZWz5YvnLcmY5d8VlLhFXKpdvhX2J 9Z3lveWD5Qc9Hln2VdU6yLUzcuWqTreWC8tnFZqhc+jRsJ+2xaCqVX7wneUn5YOq16Fe77mBH5ov 11JtcaqWOFIH67rXZk9Vrq5sHEmuHyXXe7XIfYkVGOZ3bqhfSKI4d0ex4hx2LfnmvnKlg/xAFepE rfB7nR+oHfo7RdgdwZYambr6++eawc7UJgfutX+cCskw35FA+5LpSMdX7sMdxNpZwaI4S1Wp6Efl HB6SbYi4YRr3tmJiK2SI310yJ1kv8aPv/HgYl9rJh2N7jDvyXScUMxakm+zRkcpN9XbFh/2bMsSC NYJVedKqkyv9AoSCTUSr9IT5Cf4zkAuQC5ALALkAuQC5AJALkAuQCwC5ALkAuQCQC5ALkAsAuQC5 ALkAkAuQC5ALALkAuQC5AJALkAuQCwC5ALkAkAuQC5ALALkAuQC5AJALkAuQCwC5ALkAuQCQC5AL kAsAuQC5ALkAkAuQC5ALALkAuQC5AJALkAuQCwC5ALkAkAuQC5ALALkAuQC5AJALkAuQCwC5ALkA uQCQC5ALkAsAuQC5ALkAkAuQC5ALALkAuQC5AJALkAuQa5WiIgDP9qRd84GlC5JBnVRVnjwQasRa WOYuC/clTW2l2QstfJNZPuHHimAhESu33FvuLBPLrWVqmVm6rtplDZQqS86fK1SRnDexYi0l00xe 3MqTO3mT+3UIiZULvfHaMracW0aWvt7T12eyBomV6YLx2VSwqvawbOgYUciPUqwry4X8GMuXO1fB HipXkVg50Qc+W44sA713pvNucpVvu1gdrUNXCXpuXYUukmq/SFpE3jDB4m+Zq2KVYv1uOZUnY3kz 9xdXqCh5Exk5tPT0evmFx5Z9/QG2vTV6scrfs6ffO9QF1HMVOr2Q0tl05saIiR7PGyaY9+NWfpRi /azjeYVclW1xKhM7ev5ej4+0+NsuV+ZmxyCxXuv3jXTc1/Oh5o4610KWUt1ofcpc6nHaIooGyeU7 26kyljeP2qL/8XGgv3GPyy/7oj9AuuDbLFhbF8pQQr21vNPvP9Yi7SUXU1zkey3mpdbmTy32mZ6b JHdQ2y7Wupl8LF/WDvS+1PsBLrbJuNCdBsxcqVwjiXXr2tpCF9TACVa4q/dSQpWzx686+vmjKXKl uwnzZAyYSqxHvzfUlL+F+7KZzAwNEcvPXEHyHOpqnGrhZsoby4HeE7Q2d7pbKkX6zfKL8kmV68q1 xSYO9XU3MI8upLCmv6ZDa7shYnnBOhreJ4lUU7fPd6IK1tMixoH2k6Qqh9qPao3+rilv6HbExlsv 4Yk+G438ls3Fbale963V3eaZE+talSju9eV6Llatj2qJf+j2vHL2aKBgrdYGm8Zhwy/JWs0kc1df LPdxWL9xA/uxZk4v16mbsy7cvJY3aNbaRLJawkt90ZaXeV/qF656XUmuQyfXjdrimY6Xbn9rV8Ta iMASrMyY/o5opmo0bn3dPC5U1a6V+L/XOWJVtwVYncHara879z3NWvF/qoW7FZ+5W/Amz1jI9cLr Ee8kfdruJievkAqxkOtZ6+K3X7KaNtpCLOT6t5Ws6uYGqQD+D/4WYACQayq1slqL6AAAAABJRU5E rkJggg=="
          transform="translate(384.51 383.9)"
          overflow="visible"
          opacity={0.2}
        />
        <path
          className="prefix__st0"
          d="M438.3 388.7h-43.1c-3.5 0-6.3 2.8-6.3 6.3v89.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V395c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
        />
        {/* Tarjeta */}
        <g
          className={"cursorPointer"}
          onClick={() => {
            loadgraphs(2, "Presión Alimentación");
          }}>
          <path
            className={getTarjetaClass(2)}
            d="M389 396.1h138.1v86.8H389z"
          />
          <text
            transform="translate(434.45 422.685)"
            className="prefix__st26">
            <tspan
              x={0}
              y={0}
              className="prefix__st3 prefix__st7 prefix__st8">
              {"Presi\xF3n"}
            </tspan>
            <tspan
              x={-16.3}
              y={16.8}
              className="prefix__st3 prefix__st7 prefix__st8">
              {"Alimentaci\xF3n"}
            </tspan>
          </text>
          <text
            transform="translate(439.837 468.004)"
            className="prefix__st9 prefix__st7 prefix__st11">
            {props.pt203}
          </text>
          <text
            transform="translate(478.962 467.609)"
            className="prefix__st9 prefix__st27 prefix__st28">
            {"Bar"}
          </text>
        </g>
        {/* Campana */}
        <g
          onClick={() => {
            notificacion(2, "Presión Alimentación");
          }}
          className={getTemaAlarma(2)}>
          <path d="M413.9 453.9c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
          <path d="M412.2 452.9c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM423.5 451.6c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
          <path d="M424.1 449.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM425 458.9v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM420 466.4c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
        </g>
        {/* Fin Presión Alimentación */}

        {/* Diferencial P Pre-Tratamiento */}
        <image
          width={151}
          height={122}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAB6CAYAAACyRcElAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABadJREFUeNrsmQ1P21YUhmPHaUJa RmBru3XTpv7/H7UPtaNqA00bEsiXvWPpveVwsUOgdGrs55Fe2YE4Ui6Pzzm+JJ37kXSg7RSPKUvi jgmStV6qIjp/kFzhd6nOU5cEwVonVplcKdyxqJMs2SJWECpTejp2FQRrn1hrZaXjxgl3q5JlNWKl EqgUqm85cOnrOipY+8RaWK4slzqWr5dOshuCZTViZZJoaDm0HFlGOn9qeSL5Umawxs9YueQpJZpb ppZPls86n0u0VSxYViPWwPLMcmx5bnmh47EE89ULmo2vWheWieXM8sEytpy74rKSiDcqV2hvXVWl sjr9aHll+c3yq+VnywlytVKujarTzPLR8l6dbOgcujXs+8oVqtaBLixl+sPy2vK75aV+Htpiilyt kStXW7xUSzxWZ+u53y22Va5Ubx6qQv0iqV6rev2kDxy4eYtZqz1D/VoSHcqRIFaYw6aSb+UrV1Ih 10hz1itJ9kJD/YHeg1jtEyzXOBT+/hvNYGO1ydiNpKotDmTnSBVs5GwNT4k8IbZTsCBOripVuvGD RqVBtINQO9APJNOwc3Nvi83T9pI4yYIjIZV+pNHFfjui5+JnLMRqt2DxJnuvU7Opnm65OP4/IlJB 7EhS8bpTJ1cnugCpYBfRKh1hnwq+GcgFyAXIBYBcgFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyA XIBcAMgFyAXIBYBcgFyAXADIBcgFyAWAXIBcAMgFyAXIBYBcgFyAXADIBcgFyAWAXIBcgFwAyAXI BcgFgFyAXIBcAMgFyAXIBYBcgFyAXADIBcgFyAWAXIBcAMgFyAXIBYBcgFyAXADIBcgFyAWAXIBc gFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBcgFyAXADIBcgFyHWToiIA9/Ykrbkgd0EyqJOqypMvZDVi rS0rl7X7kCa20uSRF7+p5Hf4cUOwLBJrY1larixzy8xyaVlYeq7aJQ2TKonOHypUEZ03rWLlkmkh L2by5ErebPwaZJGVa71xaplYzi3Hlr7e09c1SUPESnSzpO6mSe8hWeHW7s420QC51hLrs+Wj/JjI lytXwb5UriKycq4L3ltGlgO9d6HzXnSn77NYXSXT98qUXQSLx4i1axGb+C5uyJy1UsUqxfrXcipP JvJm5W+srKLkzWXk0PJEvy8/8MTyVH+EfW6NvmJlqsYHLn19x+6W7xnWaxO1iUs3RqwbVMG8HzP5 UYr1l47nFXJVtsVLmdjVz5d6PZJw+yxX4ubGrm6e8oY51Pc70vkwGgFCimitFlrUsi18ci1i5maQ vAEzWF1nO1Um8uZWW/RfPAz0F+51+WFnWvTBPdrG94yvWoeaK5+7lK+fVXzfIppNL9QixlrsD3o9 jarXvletbTP5ROuwdaD3C+cHuNAmB65d7PvMFctVtvyXGlSvdIeGquMFK6IFLm+6d5Y3mkHeaa2a JFe8m7ByuwlzVaxlNAbc2ueKBQsftpCZWUPE6rinw9AWj3QHzpxcYTgPFayrNQnrMVZL+Ft544bb 0BbzhsgVC7aO1mgTi1UllxesiGaLtCFiddxA31W1mrr9moXEWCgnEqyn9Zir9ZVi/WP5U8dTVbIL XVe54A0RLN9l2yW7o8+GBfqaDcbvXbAgU7gTl9Em4VTDfl/rMdVs9dZVrVNVsni/p4m79TtvGGc7 fkjSwEVK3M2Tu3K/lmDhKfBj53ojeaNKF+R6qznrLBJr04AnxF0lqyV7rA/a08WJBcvdE3OQa1xR uc4k2FjyXVRUrNb/oz9r+fcvnGTraD8nbDWcd643j/NoXyvMaouGt8IHtwa4XovwL6FMT5LlU2LY tQ9Pi0vNY2H4XzV0eEeubyRY6vbCsmify89mtEHketCaeMn8v3/irZoOYiHX10i27UkagBvx/+Y/ AQYAvhExwaOti9kAAAAASUVORK5CYII="
          transform="translate(806.51 545.9)"
          overflow="visible"
          opacity={0.2}
        />
        <path
          className="prefix__st0"
          d="M860.3 550.8h-43.1c-3.5 0-6.3 2.8-6.3 6.3v89.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3v-89.3c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
        />
        {/* Tarjeta */}
        <g
          className={"cursorPointer"}
          onClick={() => {
            loadgraphs(0, "Pre-Tratamiento");
          }}>
          <path
            className={getTarjetaClass(0)}
            d="M811 558.2h138.1V645H811z"
          />
          <path
            className="prefix__st34"
            d="M863.7 583.5l4.8-8.4 4.7 8.4z"
          />
          <text
            transform="translate(875.546 584.779)"
            className="prefix__st26">
            <tspan
              x={0}
              y={0}
              className="prefix__st3 prefix__st7 prefix__st8">
              {"P"}
            </tspan>
            <tspan
              x={-43.6}
              y={16.8}
              className="prefix__st3 prefix__st7 prefix__st8">
              {"Pre-tratamiento"}
            </tspan>
          </text>
          <text
            transform="translate(861.867 630.097)"
            className="prefix__st9 prefix__st7 prefix__st11">
            {props.dp0}
          </text>
          <text
            transform="translate(900.993 629.702)"
            className="prefix__st9 prefix__st27 prefix__st28">
            {"Bar"}
          </text>
        </g>
        {/* Campana */}
        <g
          onClick={() => {
            notificacion(0, "Pre-Tratamiento");
          }}
          className={getTemaAlarma(0)}>
          <path d="M835.9 616c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
          <path d="M834.2 615c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM845.5 613.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
          <path d="M846.1 611.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM847 621v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM842 628.5c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
        </g>
        {/* Fin Diferencial P Pre-Tratamiento */}

        {/* Caudal Entrada */}
        <image
          width={165}
          height={97}
          xlinkHref="data:image/png;base64,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 bsxfAgwA+o068bvH1aQAAAAASUVORK5CYII="
          transform="translate(106.51 910.9)"
          overflow="visible"
          opacity={0.2}
        />
        <path
          className="prefix__st0"
          d="M207.8 915.4h42.1c3.4 0 6.3 2.8 6.3 6.3v23.2c0 .8.3 1.6.8 2.2l5.3 6.5c1.1 1.3 1 3.3-.1 4.6l-5.1 5.5c-.6.6-.9 1.5-.9 2.4V993c0 3.4-2.8 6.3-6.3 6.3H117.4c-3.4 0-6.3-2.8-6.3-6.3v-71.3c0-3.5 2.8-6.3 6.3-6.3h90.4z"
        />

        {/* Tarjeta */}
        <g
          className={"cursorPointer"}
          onClick={() => {
            loadgraphs(7, "Caudal Entrada");
          }}>
          <path
            className={getTarjetaClass(7)}
            d="M117.4 915.4h133.8v83.9H117.4z"
          />
          <g>
            <text
              transform="translate(134.056 946.553)"
              className="prefix__st3 prefix__st7 prefix__st8">
              {"Caudal Entrada"}
            </text>
          </g>

          <g>
            <text
              transform="translate(156.165 978.871)"
              className="prefix__st9 prefix__st7 prefix__st11">
              {props.fit215}
            </text>
          </g>
          <text
            transform="translate(206.29 978.476)"
            className="prefix__st9 prefix__st27 prefix__st28">
            {"m\xB3/hr"}
          </text>
        </g>
        {/* Campana */}
        <g
          onClick={() => {
            notificacion(7, "Caudal Entrada");
          }}
          className={getTemaAlarma(7)}>
          <path d="M131.2 967.8c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.1-2.5 2.2z" />
          <path d="M129.5 966.8c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-2.9 1.5-3.7 3zM140.8 965.5c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.7-2.5-2.2z" />
          <path d="M141.4 963.6c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.3-2.3-2.4-3.7-3zM142.2 972.8v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.7-.9-1.3-.9-2.1zM137.2 980.2c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.8 1.7 1.6 1.7z" />
        </g>

        {/* Fin Caudal Entrada */}

        {/* E.C. Entrada */}
        <g>
          <image
            width={165}
            height={97}
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAABhCAYAAAC3UmF4AAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABfVJREFUeNrsnQ1PG0cQhvfOl9hQ oNA0aZtWrfL/f1STtgokDSF8xF/YOLvJO/Xe+q7cHZwbleeRRjbGNhJ6NDuz9s1mrh2ZA6hndR9v krV4TpbcB0hlXCVidpK0aCBjrvt5FBliQiJiiJsoOstZ/IuQJmKheKTbgQIxIZZx6WORhAnaSsyi Rshc4gURhz52ohjqdWRMhDQhg4BzHzMfU8VMj11L2MZiFjVCFpJv18e+j299HOr+Nz4eS9qcGvPB 15ALiTfx8dHHpY8LxZUen7cRs6gRcuRjz8eRj6c+nun2SGLG2RIeLrZsh6w4lpBnPt75+Fu3Z1FW XbbJlLYMD5QFQzZ84uO5j198/OzjRx/fISVUSDmXlCE7nvo4VqmX6/fLqPm5uS1bxpnSsuSOluog 4W8+Xvj41ccPetyW7xwpWcajBmeq5fpUq+xAj0/0u7l+bpUpczU2u8qIP0nGF8qW3+uPjaJ6kloS KU3MUFceyJ+BJLTl/FyZdN40U2YVUh6qjnwuOZ+p2dnRcxASUjEXciOTfOdKbgfyJt2xWbVZvkeq Gw/1ptZ170ZdNx03pGKacEv5chDt1rTqQeoanZEk3HXlvUk2zaEK88H2ts2hke632tfOkzeOt4Ue RTFwbJbD7WJa8ztw608CW3/Qkle8cd3n3MgIbeTMEp8a+5PXvGmGjHAPcnbyh31G+OpASkBKAKQE pARASkBKAKQEpARASgCkBKQEQEpASgCkBKQEQEr4H9Hpi75ICX3J2PmSCKSEvrJjPEbSLh5rdAEZ UkKfQtqltkPXYlIfUkIffUo8SjKM+omHEtgl20gJW8+SIUOGKRlhfKRNWtlz68EWtct4wf8Semhw bCZVmD8VBqOFiX0f3JehqjbZ1yYAbwy8QkroQ8x4pGQYjnYpIaeSMpYxngqMlNBbprSaMtSST93m HPSFKw9SLY2eRkroq9mxJfxI2fHarYf1z115SH9p9DRSQh/Z0qnDHqq5saGqQciJYhwt55Y1P2dL pIS+l/FR1NTMVFuGMdQXSZ1p89PJlNCrmJkrD+J9IhHDlN/36sgvlTn/aX7Yp4RtZsx91Zhhm8hG T4/cemT559cgJWwjW9qEXzufaV+3u6o7SxOikRK2nTVtyq+d9bnxJQ2khG0Qn7djW0NzV72JjpTQ u4xp532hRse675lb71WukBK2IWTIjFN12aHjfuPjxH05uzF032O33hJydN+wjQw5VVYMh4e+9vGH jz8l5lkiJZkSehPSasiwNNt5jUHIVz5eSsw3ypTxHiU1JfSGLdtjZcMTifi7pHwtUa/c+ixwakrY SmNzqdrxL8n4SkK+0+9mruI7lUgJfYhpRyqH5fmtRAxiHkdCTtNaEimh7447LN3nkvBEcp5GQlZ+ 6xwpoY8GJ+26Q01pX764qluykRL6bnKsphxLRLscYubKX+x1SAnbzpZzV74MovRlXqSE/0rMRbRc b3zOjZSw7YZnlUi6avJipIRtZM1VmxchJXx1ICUgJQBSAlICICUgJQBSAlICICUAUgJSAiAlICUA UgJSAiAlICUAUgJ0k7LTtRUAfUh5p6vQACqS2p0uHKu7XnfpGl6vC8iYeHTTxZ2iRkibbDB15QMe bYJ/xv8fEm4if66jWLQVs0jeNB6YfqkIs2D2oucOkBJqyr74/MXg0DhKbMumYhYVWXIiGcO0rDDG LZzZPNTzF6589gmASWkJLZ20lo7+a7V8m+kTvWmYJ2jHlDn9wT0Jmju2k6Bc+sXuhCGpx3IoPQHi 1mxZVNhuE1jDoMvH+t1Uj+1L0gIpoSKhfVSGDEK+1O37CilbZcp4VvXbKEOGlHyElHCLlGO3Hil9 rKg8AaJpprRmZx7Viwu3nvAflvL4gMecThwhkybZDnH64MrTe1s1OlnFz+mpoztRDF3NIY/w4GvK pVufLjZWTNzmGYyurZSxmHZOc3zi6MAlx+ACJGLG+5Tphy+uq5Tx43kkaE6GhAZi3rg7fJrTpB7M kuxJDQlNasxVct/dp5RdnwvI2ZlPAgwALiMvs2IOCJUAAAAASUVORK5CYII="
            transform="translate(106.51 1009.9)"
            overflow="visible"
            opacity={0.2}
          />
          <path
            className="prefix__st0"
            d="M207.8 1014.7h42.1c3.4 0 6.3 2.8 6.3 6.3v23.2c0 .8.3 1.6.8 2.2l5.3 6.5c1.1 1.3 1 3.3-.1 4.6l-5.1 5.5c-.6.6-.9 1.5-.9 2.4v26.9c0 3.4-2.8 6.3-6.3 6.3H117.4c-3.4 0-6.3-2.8-6.3-6.3V1021c0-3.5 2.8-6.3 6.3-6.3h90.4z"
          />
        </g>
        {/* Tarjeta */}
        <g
          className={"cursorPointer"}
          onClick={() => {
            loadgraphs(9, "E.C. Entrada");
          }}>
          <path
            className={getTarjetaClass(9)}
            d="M117.4 1014.7h133.8v83.9H117.4z"
          />
          <g>
            <text
              transform="translate(143.056 1045.91)"
              className="prefix__st3 prefix__st7 prefix__st8">
              {"E.C. Entrada"}
            </text>
          </g>
          <g>
            <text
              transform="translate(161.165 1078.228)"
              className="prefix__st9 prefix__st7 prefix__st11">
              {props.ae217}
            </text>
          </g>
          <text
            transform="translate(202.29 1077.832)"
            className="prefix__st9 prefix__st27 prefix__st28">
            {"\xB5S/cm"}
          </text>
        </g>
        {/* Campana */}
        <g
          onClick={() => {
            notificacion(9, "E.C. Entrada");
          }}
          className={getTemaAlarma(9)}>
          <path d="M131.2 1067.2c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.1-2.5 2.2z" />
          <path d="M129.5 1066.2c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-2.9 1.5-3.7 3zM140.8 1064.9c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.7-2.5-2.2z" />
          <path d="M141.4 1063c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.3-2.3-2.4-3.7-3zM142.2 1072.2v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.7-.9-1.3-.9-2.1zM137.2 1079.6c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.8 1.7 1.6 1.7z" />
        </g>
        {/* Fin E.C. Entrada */}

        {/* Diferencial P Filtro de Cartucho */}
        <image
          width={151}
          height={122}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAB6CAYAAACyRcElAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABbpJREFUeNrsmgtv40QURv1K06bv wvISCIn//59YYGFL2+27aV52mEHfsHendpuWLiLjc6RPsdPEkr1n7tyZbJ49jzyDvrN8LVny6DhH st5LtYyOny1XHglVmOSRaNAPsXwak3DeKVnVIZYVqopSRpJBP8SqlYXLXK+LxwTLO8TyAg1cNlyG LpvKUO9VCNa7iuVFmrrcm0wlWm2q2aM9VSmBtlx2XPaUXZdtvT+QYPRg6fdYjeSZudy53Lhculzp eCzJFrFg8bRYSJyRy6HLly5v9HoowUaqYGF6hLSxVcvLdOFy6nKi1wsVl0ksWGUqT+ivNlWpvnL5 XvnW5Qu9P1JlQ65+ynXucqxCM5QDSyPVPyvJKpoWK017By7fuPzo8pPLd5JrR/KFxp7psB9yNWZa 9FPivjwpjXwL03vVbZVrYOQKlesHyXVg+q2SZr5XvVcQZtcUmFLvTdR3Pei9qmjrIVQuP/0dqdey /dbQNPKI1T/BNlRcCok1ViX7oOnyVoL97UcVNfOVBNqWTHumid80F0as/sll9zcbbUUcaUbbNe1S Ea8W4+q1kX3c29owU2FBE99LciNYKEBbKjoj48kn7VLc0FvB4h15KhaChRkubLKHtG6qFy0XiH8/ RCrIWopQ12/OWZdcbRcAeMqRVlfon+CzgVyAXIBcAMgFyAXIBYBcgFyAXADIBcgFyAWAXIBcgFwA yAXIBcgFgFyAXIBcAMgFyAXIBYBcgFyAXADIBcgFgFyAXIBcAMgFyAXIBYBcgFyAXADIBcgFyAWA XIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBcgFyAXADIBcgFgFyAXIBcAMgFyAXIBYBcgFyAXADI BcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBcgFyQOEuTleRatgQgdqSJHGliV4oOsRoT JIMuPxYmTexJ1fFF/+G5ycJcMMWpNH/Fh5+6XLV8mLlMXSY6fiBYFYlV64P+C2OXO5d7XWRgql2e mFR5dPwSoZbRcapTYfDDu3HjcitXpkawB5UrVKyJvnTpcu5y6DLUZ4b6Tp6IWLkGS2EGTbGiZEvz 3LpaiZRoVHy8H9dy44PLhc4ncfWqoulwLgu9WCcuBy5buvhUx4NopK+zWKVS6b4q5SnB4hZiYdqH WklJsHAvwQ8v1XvlVL6M9fembVq0cnkrRy4b+rufGo9ctvWPsM5To61YlarxlslQ91h23OfSjOK5 Bt29ybSrwU1gSpxrOjxz+d3lN5c/Xa5074uuhj6MwnuZWOr9mc4PJNw6y5WbvrHU4PEDZlf3t6/j UdQC5C3PaaqBeKOHe6njOz2z2vQfy4TkGmsq9FL9oRnuumVQfVK5MtPQ35rzUAb9Q99ccdr4v2Or 1q76yjcm/nyn5X5tX3qrh3ymB3yq85u25nbNxYrv/dr05PGUmHVtRYQLhPOFmSY3zXSx7j1XLJef 8r82jencVB5bwWqz4PED7tjlnUbwsZ5TanLFuwnzaDdhovutH9vnigULF5tqlFaJiJWZ1WGYFvc1 Au+MXKFB35FgedRzeKF+dXkrwU7MNWZm5ZglKFi8D2pXyVmXXFawZdRfFImIlZmGvlS1utFIDKMw bBBOzUKm0PmlVkm/uPys1/eqZLdmFDcJbke0/YLTuXCpnphnw0N66QbjOggWZAqjcGZWgGGjcE/P aqKq9U4V660q2Jk+F+/1pMjKm8bVihfJE3xIuRk8jSn34aeNsBI810rSyhWW4W1i1YmsEFeVrJPq tS60pg8nFqwxK+axpswzVa6BKlpYhp9oKmyrWPzI/wy5Uh59QbJFtJ8TthvO1XNVej/sa12ZHmue +FT44qkBPj6L8JNQpZWk337Z0nFpVs9hN37Wgx4LuV5ZsMLshVVmn8v+7FMnvCpErs/8TPLs4f+U yKJtGvor5PrXkj22kgZgIP7X/CXAAJ1RLhL3fr2WAAAAAElFTkSuQmCC"
          transform="translate(342.51 948.9)"
          overflow="visible"
          opacity={0.2}
        />
        <path
          className="prefix__st0"
          d="M396.1 953.7H353c-3.5 0-6.3 2.8-6.3 6.3v89.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V960c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
        />
        {/* Tarjeta */}
        <g
          className={"cursorPointer"}
          onClick={() => {
            loadgraphs(14, "F. Cartucho");
          }}>
          <path
            className={getTarjetaClass(14)}
            d="M346.8 961.1h138.1v86.8H346.8z"
          />
          <text
            transform="translate(412.34 987.717)"
            className="prefix__st26">
            <tspan
              x={0}
              y={0}
              className="prefix__st3 prefix__st7 prefix__st8">
              {"P"}
            </tspan>
            <tspan
              x={-51}
              y={16.8}
              className="prefix__st3 prefix__st7 prefix__st8">
              {"Filtro de Cartucho"}
            </tspan>
          </text>
          <g>
            <text
              transform="translate(397.662 1033.035)"
              className="prefix__st9 prefix__st7 prefix__st11">
              {props.dp1}
            </text>
          </g>
          <text
            transform="translate(436.787 1032.64)"
            className="prefix__st9 prefix__st27 prefix__st28">
            {"Bar"}
          </text>

          <path
            className="prefix__st34"
            d="M396.8 981.4l4.8-8.4 4.7 8.4z"
          />
        </g>
        {/* Campana */}
        <g
          onClick={() => {
            notificacion(14, "F. Cartucho");
          }}
          className={getTemaAlarma(14)}>
          <path d="M371.7 1018.9c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
          <path d="M370 1017.9c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM381.3 1016.6c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
          <path d="M381.9 1014.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM382.8 1023.9v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM377.8 1031.4c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
        </g>
        {/* Fin Diferencial P Filtro de Cartucho */}

        {/* Presión Entrada Bomba */}
        <image
          width={151}
          height={122}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAB6CAYAAACyRcElAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABchJREFUeNrsmo1S20YURiVZBNsQ fhJC27TTTt7/odp00kIDhICNMcKyc9X5NrmsJTAM7cTSOTPfSLaRZ7w+unt3TZo8jjSBrrN4TllS d0yRrPNSLSLBGmXLV5Aq03nmkiJY58QKmbvcK1l+j1hBqFzZ0LGnIFi3xKpkKi2zKEG0JcHyBrEy CVQJtWkZuGzqOipYt8SqRCosN5apcqPnbiXeHcHyBrFySTS0vLTsWvZ0vmV5IfkyerBO9FgzCXRt ubKMLJfKWM8XsWB5g1h9y7Zl3/LGcqjjvgTz1QvaTZgOqyo1kVjnllPLiY7nrsqVceUK01tPVamq Tq8tby2/WH62/Gh5hVydlauQXFW1OrMcqU3K9Hrpmvx/j75yhao10BRYyfSb5Z3lV8sPej5Mixly dWZ6DI38VNPgmWa2np6/1muFHi9VrkwN/FAV6idJ9U7V60Bv2Hf9Fr1Wd5r6Un3XjhzpSaYwTV6o shW+cqU1cu2pz3oryQ7V1A/0N4jVTcFm+v5TSXShQrQjN+7sItRNi331VXu6MKwSh26VyAqxm4IF cUo5seN2EJb68KaGvi+ZhsndvS02T7tL+M7D/mfwpK/zpb3PLLrYb0dsuPQSNk3h7s+AveTbrze1 m+pZzcVNvyMiFcSSpZEzdxzJGi5MkQpWlKzREfap4D8DuQC5ALkAkAuQC5ALALkAuQC5AJALkAuQ CwC5ALkAuQCQC5ALkAsAuQC5ALkAkAuQC5ALALkAuQC5AJALkAsAuQC5ALkAkAuQC5ALALkAuQC5 AJALkAuQCwC5ALkAuQCQC5ALkAsAuQC5ALkAkAuQC5ALALkAuQC5AJALkAsAuQC5ALkAkAuQC5AL ALkAuQC5AJALkAuQCwC5ALkAuQCQC5ALkAsAuQC5ALkAkAuQC5ALALlgjeVauAA8i1yVTPNIrjmS wQMFqLYQZTV/XMk0c5lHwgFSeVca/cgbxCosU8uNzqvnSsnYVsHSZxz8tjJ3jty6zOoEy6MLZxJq YhlbRpYry7ZlQ19A9oxfxPckVRqdP0WoRXTetoo1l0yVI9dyY6JCVKgAfR2DvKZqVX94aTm3nFle WQaSqrq416JVZupuGJ9VBVu4G/PBaaIFcoXiE/z4ZPmsIjR1FWxpWgxWTnTBieVIVaun14augqUt EauncdhQcifZfZ+zrke9dS1E2SLBwue4VcWqxPpbfnyULxO9/vXGymvMrC6+sPyjipWr5FW2bukL WPep0YtVfZ5Nfdahji/0uXsNVSxIVUbTRMhNUx/SginxShWrEusPHT/VyLVUuXzZ29Dglip7+65y rbNcqVspV5+/r5tm17Kn47aef9HQBsT96Ug35GfXp4YeZN6CHqxuZvsosY70+LppWvSDFt4grAyn MnNHA54/si/5XgULcg0k1GvLoeWN+sxdSbcZCeZ707GmiFMN9okej6Lqte5VK/7cIwkVeq5xU0Mf v0mpgUncNHkusUI1W/eeK5arqlgHGqyRbq4wWNtOsDA+YYCrBc+x5YN6kGP3Hm2Ry/dcoQ2Yaowm 8qOI2oDayrVwgzHVmxUyM2+JWL7nyiXOS4kS7sKJk2PmtmISDW4Qq5oS3isfXHMbpsV5S+SKBZtF e1xlUvNLTn7P/LqIlp9ZS8TygoWV4khSjd3deKPBK1TZ+u6mO1eV+tPyu45HEm6sa2sHvCWCzVfZ dskfmGfDAD11c3Fd9rgKCTF154Vr2A+0mEn0uOqx/pJU7yXWac1+Txt361feMM5XfJM0aSdBsPj3 1Fu3p3MpubZ0zZVEOpJgx6pYXqyyBSvEVSVrJH+uN1rjAUprSn3p5LrQNsxA11y7FeKpzsc1Favz P/LnCSyibZj4p7ALt2JMNFWG311HUfPPvydF0wIsb1H4nfvN5Nv+XuKku3FNf4lYyPXYRj+sJv3G se/PSqZB5HrquPjtlzRaJfk9QcRCriePT3rPShoA/m++CDAAuBgqj9aRCc8AAAAASUVORK5CYII="
          transform="translate(497.51 948.9)"
          overflow="visible"
          opacity={0.2}
        />
        <path
          className="prefix__st0"
          d="M551.4 953.7h-43.1c-3.5 0-6.3 2.8-6.3 6.3v89.3c0 3.5 2.8 6.3 6.3 6.3H560c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V960c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
        />
        {/* Tarjeta */}
        <g
          className={"cursorPointer"}
          onClick={() => {
            loadgraphs(4, "Presión Entrada Bomba");
          }}>
          <path
            className={getTarjetaClass(4)}
            d="M502.1 961.1h138.1v86.8H502.1z"
          />
          <text
            transform="translate(548.582 987.717)"
            className="prefix__st26">
            <tspan
              x={0}
              y={0}
              className="prefix__st3 prefix__st7 prefix__st8">
              {"Presi\xF3n"}
            </tspan>
            <tspan
              x={-24.9}
              y={16.8}
              className="prefix__st3 prefix__st7 prefix__st8">
              {"Entrada Bomba"}
            </tspan>
          </text>
          <g>
            <text
              transform="translate(552.968 1033.035)"
              className="prefix__st9 prefix__st7 prefix__st11">
              {props.pt219}
            </text>
          </g>
          <text
            transform="translate(592.094 1032.64)"
            className="prefix__st9 prefix__st27 prefix__st28">
            {"Bar"}
          </text>
        </g>

        {/* Campana */}
        <g
          onClick={() => {
            notificacion(4, "Presión Entrada Bomba");
          }}
          className={getTemaAlarma(4)}>
          <path d="M527 1018.9c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
          <path d="M525.3 1017.9c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM536.6 1016.6c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
          <path d="M537.2 1014.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM538.1 1023.9v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM533.1 1031.4c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
        </g>
        {/* Fin Presión Entrada Bomba */}

        {/* Recuperación RO */}
        <image
          width={151}
          height={122}
          xlinkHref="data:image/png;base64,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 8I8AAwBnXT4t9pZyLQAAAABJRU5ErkJggg=="
          transform="translate(764.012 948.9)"
          overflow="visible"
          opacity={0.2}
        />
        <path
          className="prefix__st0"
          d="M817.9 953.7h-43.1c-3.5 0-6.3 2.8-6.3 6.3v89.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V960c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
        />

        {/* Tarjeta */}
        <g
          className={"cursorPointer"}
          onClick={() => {
            loadgraphs(12, "Recuperación RO");
          }}>
          <path
            className={getTarjetaClass(12)}
            d="M768.6 961.1h138.1v86.8H768.6z"
          />
          <text
            transform="translate(795.626 987.717)"
            className="prefix__st26">
            <tspan
              x={0}
              y={0}
              className="prefix__st3 prefix__st7 prefix__st8">
              {"Recuperaci\xF3n"}
            </tspan>
            <tspan
              x={32.7}
              y={16.8}
              className="prefix__st3 prefix__st7 prefix__st8">
              {"RO"}
            </tspan>
          </text>
          <g>
            <text
              transform="translate(819.47 1033.035)"
              className="prefix__st9 prefix__st7 prefix__st11">
              {props.rpro}
            </text>
          </g>
          <text
            transform="translate(858.596 1032.64)"
            className="prefix__st9 prefix__st27 prefix__st28">
            {"%"}
          </text>
        </g>

        {/* Campana */}
        <g
          onClick={() => {
            notificacion(12, "Recuperación RO");
          }}
          className={getTemaAlarma(12)}>
          <path d="M793.5 1018.9c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
          <path d="M791.8 1017.9c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM803.1 1016.6c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
          <path d="M803.7 1014.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM804.6 1023.9v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM799.6 1031.4c.9 0 1.7-.8 1.7-1.7H798c0 .9.7 1.7 1.6 1.7z" />
        </g>
        {/* Fin Recuperación RO */}

        <g>
          <image
            width={160}
            height={230}
            xlinkHref="data:image/png;base64,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 CjAAuZxXYnkeiOwAAAAASUVORK5CYII="
            transform="translate(932.51 861.9)"
            overflow="visible"
            opacity={0.2}
          />
          <path
            className="prefix__st0"
            d="M986.9 865.9h-43.1c-3.5 0-6.3 2.8-6.3 6.3v198.3c0 3.5 2.8 6.3 6.3 6.3h51.6c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.1 1-.9 2.2-1.4 3.5-1.4h61.7c3.4 0 6.3-2.8 6.3-6.3V872.2c0-3.4-2.8-6.3-6.3-6.3h-90.4z"
          />

          {/* Caudal de Producción */}

          {/* Tarjeta */}
          <g
            className={"cursorPointer"}
            onClick={() => {
              loadgraphs(20, "Caudal de Producción");
            }}>
            <path
              className={getTarjetaClass(20)}
              d="M937.5 874.2h146.4v97.9H937.5z"
            />
            <text
              transform="translate(978.685 902.88)"
              className="prefix__st26">
              <tspan
                x={0}
                y={0}
                className="prefix__st3 prefix__st7 prefix__st8">
                {"Caudal de"}
              </tspan>
              <tspan
                x={-3.1}
                y={16.8}
                className="prefix__st3 prefix__st7 prefix__st8">
                {"Producci\xF3n"}
              </tspan>
            </text>
          </g>
          <g>
            <text
              transform="translate(993.002 951.198)"
              className="prefix__st9 prefix__st7 prefix__st11">
              {props.fit215 - props.fit227 === 0
                ? 0
                : (props.fit215 - props.fit227).toFixed(1)}
            </text>
          </g>
          <text
            transform="translate(1034.267 950.802)"
            className="prefix__st9 prefix__st27 prefix__st28">
            {"m\xB3/hr"}
          </text>

          {/* Campana */}
          <g
            onClick={() => {
              notificacion(20, "Caudal de Producción");
            }}
            className={getTemaAlarma(20)}>
            <path d="M957.1 940.1c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
            <path d="M955.4 939.1c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM966.7 937.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
            <path d="M967.3 936c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM968.2 945.1v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM963.2 952.6c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
          </g>
          {/* Fin Caudal de Producción */}

          <path
            className="prefix__st13"
            d="M948.6 971.9h124"
          />

          {/* E.C Producción */}

          {/* Tarjeta */}
          <g
            className={"cursorPointer"}
            onClick={() => {
              loadgraphs(10, "E.C. Producción");
            }}>
            <path
              className={getTarjetaClass(10)}
              d="M937.5 971.8h146.4v97.9H937.5z"
            />

            <text
              transform="translate(997.647 1001.88)"
              className="prefix__st26">
              <tspan
                x={0}
                y={0}
                className="prefix__st3 prefix__st7 prefix__st8">
                {"E.C."}
              </tspan>
              <tspan
                x={-21.4}
                y={16.8}
                className="prefix__st3 prefix__st7 prefix__st8">
                {"Producci\xF3n"}
              </tspan>
            </text>

            <text
              transform="translate(993.002 1049.198)"
              className="prefix__st9 prefix__st7 prefix__st11">
              {props.ae228}
            </text>
            <text
              transform="translate(1033.127 1048.802)"
              className="prefix__st9 prefix__st27 prefix__st28">
              {"\xB5S/cm"}
            </text>
          </g>
          {/* Campana */}
          <g
            onClick={() => {
              notificacion(10, "E.C. Producción");
            }}
            className={getTemaAlarma(10)}>
            <path d="M957.1 1039.1c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-1.9 1.1-2.5 2.2z" />
            <path d="M955.4 1038.1c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9.7-1.3 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM966.7 1036.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.7-2.5-2.2z" />
            <path d="M967.3 1035c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.3-2.4-3.7-3zM968.2 1044.1v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM963.2 1051.6c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
          </g>
          {/* Fin E.C Producción */}
        </g>

        {/* E.C. Mezcla */}
        <g>
          <image
            width={151}
            height={122}
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAB6CAYAAACyRcElAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABbFJREFUeNrsmgtvGkcURtllMDZ+ u01falWp//9PpXUS1287mIeBpTPRN+3NsGub1I3K7DnSJxYMKzE5e+/dIUVnPYoOtJ3la8lSJMcF krVeqmVyvLZcRSJUaVIkokE7xAqpTOLzRslcg1hWKJekm0gG7RBrocx9ZnqcPyVY0SBWEKjns+XT 99lW+nrNIVjrKlYQaeozNplKtIWpZk/OVF0JtOOz53Og7Pvs6vWeBGMGy3/GqiTPo8+Dz0efW587 HY8k2TwVLG2LpcQZ+Bz7fOvzRo/HEmygChbbI+SNrVpBphufC59zPd6ouExSwZypPHG+2lal+s7n Z+VHn2/0+kCVDbnaKde1z5kKTV8OLI1Uf99JuqQtOrW9I58ffH71+c3nJ8m1J/niYE87bIdclWmL oSUeypOukW9uZq9FXeXqGbli5fpFch2ZeavLMN+q2SsKs28KTFevTTR3rcxeLtl6iJUrtL8TzVp2 3uqbQR6x2ifYlopLKbFGqmRXapdDCfbJD5cM804C7UqmAzPEb5sTI1b75LL7m5W2Ik7U0fbNuFSm d4tp9drq/LO3tWVaYckQ30oKI1gsQDsqOgPjyWfjUjrQW8HSHXkqFoLFDhc32WNqN9XLmhOkvx8i FXRqilDTb86dJrnqTgDwnCO1rjA/wX8GcgFyAXIBIBcgFyAXAHIBcgFyASAXIBcgFwByAXIBcgEg FyAXIBcAcgFyAXIBIBcgFyAXAHIBcgFyASAXIBcAcgFyAXIBIBcgFyAXAHIBcgFyASAXIBcgFwBy AXIBcgEgFyAXIBcAcgFyAXIBIBcgFyAXAHIBcgFyASAXIBcAcgFyAXIBIBcgFyAXAHIBcgFyASAX IBcgFwByAXIBcgEgFyAXIBcAcgFyAXIBIBcgFyAXAHIBckHmLE1eJNeyJgCpI1XiSJW6UjaIVZkg GTT5MTepUk9cwwfDm2cmc3PCHFtp8YqLn7tcC/nw6DP1meh4RTCXiLXQG8MHRj4PPmOdpGeqXZGZ VEVy/CVCLZPjXFth9CO48dFnKFemRrCVyhUr1kQfuvW59jn26es9fX2myESsQhdLaS6acg3J6saI KtMxolLxCX7cy40rnxs9n6TVyyULNJOFQaxznyOfHZ18quNecqVvslhdxel7OeU5wepmDztCLDIT LH6X6EeQ6oNyIV9G+ntV1xatXMHKgc+W/h5a44nPrv4RNrk12orlVI13TPr6jt2G77msmT3GWrc4 QswyE8z6Edrhpc87nz98/vS503efNw308Qocy8SuXn/U8yMJt8lyFWZu7OriCRfMvr7foY4HyQhQ 1LSHOHsMtbi3enxIWkQOM1hafG4k1Xt1uPtk5lqpXB2zaEPzPJbBsOjbL2wb/3ds1drXXPnGJDzf q/m+UaypJLpTlb/QIl8lV3GViVjpTH5vZvK0JXaatiLiCeLzuWmT26ZdbPrMlcoVWv73ZjCNba1K KlgUa6g1CUKdqUWcqV3cZiZXOgrMkt2EidZk8dQ+VyrYMllMl4lYHXN3GNvioaR4MHLF4XxPghV6 HsUKw+yp5o5TtYlr3WlPzRrmNtQvOqv7oFXdheSe6K9WtKmZs3LZhohz172EGJmrMG4QTs2NTKnn t6pSv/u81eOZWuK9qVqLDLcj1tp6cc/02dgavnSDcRMEizLFqzCKNTYbhQdaq4la36nEeqsKdqn3 xd3qXPe6rBvPbhq7F56kyHCRCnPxVKbcx+2FkYS51p2kleudBHtvKtYk0z2u5/xoxL3WiTZ0cVLB 7DbDSNJcqnL1VNHibfi5mbEmyQYiP/KvIVfOV9/SDOt2P2dihvddrdVMMt0pw5r9HcTKcIZ6jbWI Pwk53UmG7ZcdHXfN3fNYecxsywG5voJgpdkLc2afqzJ7PQvTUhELudZak6Kz+j8lOsk2DW0Quf61 ZE/dSQNwIX5t/hJgANv6NBJ4bETHAAAAAElFTkSuQmCC"
            transform="translate(1108.51 969.9)"
            overflow="visible"
            opacity={0.2}
          />
          <path
            className="prefix__st0"
            d="M1162.2 974.7h-43.1c-3.5 0-6.3 2.8-6.3 6.3v89.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V981c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
          />

          {/* Tarjeta */}
          <g
            className={"cursorPointer"}
            onClick={() => {
              loadgraphs(11, "E.C. Mezcla");
            }}>
            <path
              className={getTarjetaClass(11)}
              d="M1112.9 982.1H1251v86.8h-138.1z"
            />
            <text
              transform="translate(1169.461 1008.717)"
              className="prefix__st26">
              <tspan
                x={0}
                y={0}
                className="prefix__st3 prefix__st7 prefix__st8">
                {"E.C."}
              </tspan>
              <tspan
                x={-8.6}
                y={16.8}
                className="prefix__st3 prefix__st7 prefix__st8">
                {"Mezcla"}
              </tspan>
            </text>
            <g>
              <text
                transform="translate(1163.727 1054.035)"
                className="prefix__st9 prefix__st7 prefix__st11">
                {props.ae235}
              </text>
            </g>
            <text
              transform="translate(1202.852 1053.64)"
              className="prefix__st9 prefix__st27 prefix__st28">
              {"\xB5S/cm"}
            </text>
          </g>
          {/* Campana */}
          <g
            onClick={() => {
              notificacion(11, "E.C. Mezcla");
            }}
            className={getTemaAlarma(11)}>
            <path d="M1137.8 1039.9c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
            <path d="M1136.1 1038.9c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM1147.4 1037.6c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
            <path d="M1148 1035.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM1148.9 1044.9v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1143.9 1052.4c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
          </g>
        </g>
        {/* Fin E.C. Mezcla */}

        {/* Presión Osmosis */}
        <g>
          <image
            width={152}
            height={121}
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAAB5CAYAAADF2ugGAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABbhJREFUeNrsmuFS20YURiVZNhgw BCgJZUjb6fu/VGfaSZqQYCBgGyy7V9NvO5f1ysYk/WH5nJlvhBzkGS1Hd++ukmewDnl0PmdI1hsw aB6j+DhvOIKjZAhWilXo58L9HISauSAZFWytcQlSlVEK/U5lmVqedKwkGpIh2MoxqSXqWLqWHUtf 2ZFkc4k1sjzo+CjRkAzBVspVSqY9y8BypBxYepKolurGcq3jN8skkmzrRSsRMinXrmQ6tvxkeavj kcSbSagry0dJV1e8O8vYTZl5SyWb/0jB8qgvaaNo4d68XKeWc8ul5cLyzvJG/17Lc2v527LvBAsL gXFLp0u/Yn7R6rl8xSqqiGRri2AdiRLk+tnyi+VXSVZXsUP9TqUKdqTerKux7CphumxT4z9PrJzn q1bQ5RqrqDCIHaUtkvnq1VeVqqvVe8tvkqyW7UTVqtSgPqiaeblC3za03Kvx99sYmy5XlVg9T5dJ Vq65ivIrqbZUsnC/XclxoqnxvXKhijbQvRcayJ2EXAcS9Kv6sUn0B9j0yjXVPY1cJpItWa3LJY1u TwN+qKngjQY57jk2vSeLBavv80xV652EG6hala5x9z1X6N0OJeN1SwQLsswk0KMq852q9I160Qfd axZLViamitCLDLSKOtNAn+l8EFWxNmzTeEkGkuxYx4NE1Z5Hvam/9lR/gDBFVtnm7/T76nWnB+iT 0nUeTOLmP65g4Une1wBfaJq4dH1ImwSLH6yuRNlT+nrYvFyZk6yMHspQAUct2xOLBfsiP/Z175nr z0K1e1bB4g3GgSpWLdfvanbP3Zf23PSQtUwyvxos3VSYN0ytvmcNkk3dgLdhwzUsVMIUearK3nWf j1MVO54iw0rqSNPipVtJvXW9SNOgt0GyYo0tmfB5x41fL1rGt2WLIlSxgR6isJoeqQ+7dW3BNJ4i mxrdcyX0X3tuzm3jrv5rNpV9H5e5VWaWtW+TtXKzV5Cr7sc+Z/++1Rjqs6dQxcrEnldYDR2rFB7r fM+tHvOs/a+NvkfOtr4eKtwD9KRCdOIWQ7vxYqiMGnz/kvfAbUvsruhH4PsF3YR7Cg9OWAzty5Hg ycIeaZHoP0IfsasLQtXahsoF6y2GUivujnekaGhy4/9gVyAXNEjWc4Vo4Q1PsWTpnUfnACnJ4uRN FSz1BYgF2QscyZucKRgn+IGiLYBg8L+CYIBggGAACAYIBggGgGCAYIBgAAgGCAYIBoBggGAACAYI BggGgGCAYIBgAAgGCAYIBoBggGAACAYIBggGgGCAYIBgAAgGCAYIBoBggGCAYAAIBggGgGCAYIBg AAgGCAYIBoBggGCAYAAIBggGgGCAYIBgAAgGCAYIBoBggGCAYAAIBggGCAaAYIBgAAgGCAYIBoBg gGCAYAAIBggGCAaAYIBgAAgGCAYIBoBggGCwwcxdXizY0osAIkfmTc4Ur7kIkEupEnnmS/GaiwC5 5MXU8miZ6Fifz7wvRXTRrOEiJIOUXGPLgzKSL5X3pIwurvRLI3dh/SVP+sIgZM5Yb61gXq57y51y r6L0rIqVieo1cRfe6nho6UqsDqvPrZVrpmJTF6BvlhvLV8tQ5+NIsP8qmBdsLKmuLVeWU8u+5Kok WkEV29rqFfz4Yvlk+SzJbiPBFqZIL9it5PpoGahqPernHlVsa3uvUL3q4vPB8qeOV5JusqoHC1Pk nczsO7luNFXu6joE287p8UHVqxbrD8tfOr+PmvyFKTJUsUcJFnquJ52fqIIhGIINNT1+0Cx3rc+f TY9xBcuiJu7azblDVa89y040RdKLtV+uLNGjD6MGf6F6peTI3UqxK5n6Equv89I1+ci1XT1YpQKU 2v96tnrMllSfIE4hmUrJVkq8DnJtvWRTiRb2R6uUXMumt/B54WQrqFxI5voxn8a3PKtEyaOqRs8F 80i2LFvyCnEdWRALUqIt5R8BBgAUnNB7lUhumgAAAABJRU5ErkJggg=="
            transform="translate(614.51 1199.9)"
            overflow="visible"
            opacity={0.2}
          />
          <path
            className="prefix__st0"
            d="M708.1 1312.6h43.1c3.5 0 6.3-2.8 6.3-6.3V1217c0-3.5-2.8-6.3-6.3-6.3h-51.7c-1.2 0-2.4-.4-3.4-1.2l-.4-.3c-6.5-6.5-6.5-6.5-12.9.2-1 .9-2.2 1.3-3.5 1.3h-53.7c-3.5 0-6.3 2.8-6.3 6.3v89.3c0 3.5 2.8 6.3 6.3 6.3h82.5z"
          />
          {/* Tarjeta */}
          <g
            className={"cursorPointer"}
            onClick={() => {
              loadgraphs(5, "Presión Ósmosis");
            }}>
            <path
              className={getTarjetaClass(5)}
              d="M619.4 1217.7h138.1v86.8H619.4z"
            />
            <text
              transform="translate(665.873 1244.302)"
              className="prefix__st26">
              <tspan
                x={0}
                y={0}
                className="prefix__st3 prefix__st7 prefix__st8">
                {"Presi\xF3n"}
              </tspan>
              <tspan
                x={-3.5}
                y={16.8}
                className="prefix__st3 prefix__st7 prefix__st8">
                {"\xD3smosis"}
              </tspan>
            </text>
            <g>
              <text
                transform="translate(670.26 1289.621)"
                className="prefix__st9 prefix__st7 prefix__st11">
                {props.pt223}
              </text>
            </g>
            <text
              transform="translate(709.385 1289.226)"
              className="prefix__st9 prefix__st27 prefix__st28">
              {"Bar"}
            </text>
          </g>
          {/* Campana */}
          <g
            onClick={() => {
              notificacion(5, "Presión Ósmosis");
            }}
            className={getTemaAlarma(5)}>
            <path d="M644.3 1275.5c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
            <path d="M642.6 1274.5c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM653.9 1273.2c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
            <path d="M654.5 1271.4c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM655.4 1280.5v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM650.4 1288c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
          </g>
        </g>
        {/* Fin Presión Osmosis */}

        {/* Presión Rechazo */}
        <g>
          <image
            width={165}
            height={97}
            xlinkHref="data:image/png;base64,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"
            transform="translate(878.51 1211.9)"
            overflow="visible"
            opacity={0.2}
          />
          <path
            className="prefix__st0"
            d="M938 1300.4h-42.1c-3.4 0-6.3-2.8-6.3-6.3v-23.2c0-.8-.3-1.6-.8-2.2l-5.3-6.5c-1.1-1.3-1-3.3.1-4.6l5.1-5.5c.6-.6.9-1.5.9-2.4v-26.9c0-3.4 2.8-6.3 6.3-6.3h132.5c3.4 0 6.3 2.8 6.3 6.3v71.3c0 3.5-2.8 6.3-6.3 6.3H938z"
          />
        </g>
        {/* Tarjeta */}
        <g
          className={"cursorPointer"}
          onClick={() => {
            loadgraphs(6, "Presión Rechazo");
          }}>
          <path
            className={getTarjetaClass(6)}
            d="M895 1216.5h133.8v83.9H895z"
          />
          <g>
            <text
              transform="translate(911.652 1247.698)"
              className="prefix__st3 prefix__st7 prefix__st8">
              {"Presi\xF3n Rechazo"}
            </text>
          </g>
          <g>
            <text
              transform="translate(938.761 1280.016)"
              className="prefix__st9 prefix__st7 prefix__st11">
              {props.pt234}
            </text>
          </g>
          <text
            transform="translate(979.886 1279.62)"
            className="prefix__st9 prefix__st27 prefix__st28">
            {"Bar"}
          </text>
        </g>
        {/* Campana */}
        <g
          onClick={() => {
            notificacion(6, "Presión Rechazo");
          }}
          className={getTemaAlarma(6)}>
          <path d="M908.8 1269c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.1-2.5 2.2z" />
          <path d="M907.1 1268c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-2.9 1.5-3.7 3zM918.4 1266.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.7-2.5-2.2z" />
          <path d="M919 1264.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.3-2.3-2.4-3.7-3zM919.8 1274v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.7-.9-1.3-.9-2.1zM914.8 1281.4c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.8 1.7 1.6 1.7z" />
        </g>
        {/* Fin Presión Rechazo */}

        {/* Caudal Rechazo */}
        <g>
          <image
            width={151}
            height={121}
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAB5CAYAAAA00bOLAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABYpJREFUeNrsmm1T21YQRiVZtsFA YqAlJWma6f//V53pNIXEMW8GI1vqqvPczuYivxH6AemcmWeQFYuM7hzv7pVJE9iWNHpdsSS7LRg0 r0+6Qq4K0ZDrueuS6Thzx0GmUgnHSBaRswSNYgWh8iiZ3lPLtIiCYFSujetRC9Sz9C1Dy74y1Lma wjK33CtznVu6asZisgSNYtUijSxHlreWseVQ5xPJdGu5Um4sM51fINjucqUdEuvAcmz52XKmn2NV sJoHSXVpubB8sXyTcA8dEGyr+8q3FCqNjts4Y9ViDVSharF+sXywfLSc69xI19StcGr5bHlj2XMz WeYEq1omWLXLTjnfcbeUrdiWv3a5wow1UoV6Z/nN8kk/z6PKNVfl8u2y7wb/uoI9agarWiSW3yWX mzYx+Za7pbBwPaUtgoX7yFV96ir0kyrWJ+WD2uKRm7kKvR5FYoVNwFTVrS3VK9zDUvdUKIt1m5h8 h91S2DHlLapg/kMUqlY9Y71XO3wfzVthvZZai0Ek1p6km2jAL1owe3mxCrX8mXKvCt04Y+Ybdktv 3G7pSIPuQO/JWjCDxXK9VeU6U2s81RqMJE/PPefquVEhzGv1+05UudogV+XudyGxbnR/E/28W7WJ yRta4dANtWcuxzrvh9c27JQz1xYP3Ydp7O6378YBv15xpT+QnDfRgievXLBSH5SZhLrQBynXGlRN Q76vXJkr7WMNsR/dbunUzR1tkCveKfZdxR5pHVaNAWmDYEGuE4lVuIH+tbdFL9dEfuzpvkvd59Id P6lc8QLV88bvyrnOhbaYtUSuWLAwO/kNTLpivvQtNXXjxKEbdNs0zBeascIjmZ7uca743fG/7TFv +PSN9Aveaaf0q575xM9z2vY4In7kss2mJY0e1+QSrGzZM67KibTvxLrXCHCrqhaG+6SpLeZux3Os VniqMuiH+TY+rX/uA+PwnjDgt/HPcEI16rtWGL6l+KpMnWD/Va64NQwk2EglPp4/0qT9XwX9iJht /soncy1yrFHpeEVXS/MVrcHPHv1o282X3S8v52uh5zZ9B+pwoQA92ehlW8weKVJB9OgmdLihRBs0 7aqzNcNt2oEWCD+28Yn/kPI7XzLWC54pWZY8fdb3XSFCLniJStbY3ZAL/jeQC5ALkAsAuQC5ALkA kAuQC5ALALkAuQC5AJALkAuQCwC5ALkAuQCQC5ALkAsAuQC5ALkAkAuQC5ALALkAuQCQC5ALkAsA uQC5ALkAkAuQC5ALALkAuQC5AJALkAuQCwC5ALkAuQCQC5ALkAsAuQC5ALkAkAuQC5ALALkAuQCQ C5ALkAsAuQC5ALkAkAuQC5ALALkAuQC5AJALkAuQCwC5ALkAuQCQC5ALkAsAuQC5ALkAdqJyQS54 ManKSK4ylizbYONKK6Hz1aqWaaEsI9ka5fIXlg12AmIFqR4tc5dFLFi+xsjCZeFko5V2V6ylE+ve cme5tcwiwRIvV+Uuri980AV3+iX1hX1X7VLWupOtcCE3ai+uLN8sU8uNzi98p/OVq3QX3+iiieXY MtR7hhISubrZDh9VqWovLi0Xlq+WaxWhwg/2edQOC1WsqS4cW/b1H8x13JdcCNYdSnW1B4n0t+VP y1+WL6piD+vaoperNnNkGejfaytPLAeSi9bYPbkW8uBKcv0hwS7V6eYSsHGg97+grlw9nX/U67GE Q65uy3WtavVZmaggPSbRsy5fuRI30N+61zP11SPLnq4JO0YEa/+s5dvivGGYv1ZLXK6SK36Gkbjd QWiTe6paPWauTu4Uw9g0VwWbuScJhZ+1kjWVJ1Vl6km+vpIjVucFWyr++Wfj0/l1bS11kvkgFoLF 396UUQvdKJf/tzQ6BmawKjpeK9AmkAqaJFvLPwIMAKJur93lba7UAAAAAElFTkSuQmCC"
            transform="translate(937.51 1359.9)"
            overflow="visible"
            opacity={0.2}
          />
          <path
            className="prefix__st0"
            d="M1030.4 1472.4h43.1c3.5 0 6.3-2.8 6.3-6.3v-89.3c0-3.5-2.8-6.3-6.3-6.3h-51.7c-1.2 0-2.4-.4-3.4-1.2l-.4-.3c-6.5-6.5-6.5-6.5-12.9.2-1 .9-2.2 1.3-3.5 1.3h-53.7c-3.5 0-6.3 2.8-6.3 6.3v89.3c0 3.5 2.8 6.3 6.3 6.3h82.5z"
          />
          {/* Tarjeta */}
          <g
            className={"cursorPointer"}
            onClick={() => {
              loadgraphs(8, "Caudal de Rechazo");
            }}>
            <path
              className={getTarjetaClass(8)}
              d="M941.7 1377.6h138.1v86.8H941.7z"
            />
            <text
              transform="translate(989.682 1404.134)"
              className="prefix__st26">
              <tspan
                x={0}
                y={0}
                className="prefix__st3 prefix__st7 prefix__st8">
                {"Caudal"}
              </tspan>
              <tspan
                x={-5.4}
                y={16.8}
                className="prefix__st3 prefix__st7 prefix__st8">
                {"Rechazo"}
              </tspan>
            </text>
            <g>
              <text
                transform="translate(992.516 1449.453)"
                className="prefix__st9 prefix__st7 prefix__st11">
                {props.fit227}
              </text>
            </g>
            <text
              transform="translate(1031.642 1449.057)"
              className="prefix__st9 prefix__st27 prefix__st28">
              {"m\xB3/hr"}
            </text>
          </g>
          {/* Campana */}
          <g
            onClick={() => {
              notificacion(8, "Caudal de Rechazo");
            }}
            className={getTemaAlarma(8)}>
            <path d="M966.6 1435.4c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
            <path d="M964.9 1434.4c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM976.2 1433.1c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
            <path d="M976.8 1431.3c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM977.7 1440.4v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM972.7 1447.9c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
          </g>
        </g>
        {/* Fin Caudal Rechazo */}

        <path
          className="prefix__st14"
          d="M306.9 663.2H204.6c-6 0-11-4.8-11-10.8V550.2c0-5.9 4.9-10.8 11-10.8H307c6 0 11 4.8 11 10.8v102.2c-.1 6-5 10.8-11.1 10.8z"
        />
        {/* Hipoclorito Superior */}
        <g
        /*  className = "cursorPointer" */
        /* onClick={() => {
            loadgraphs(8, "Caudal de Rechazo");
          }} */
        >
          <image
            width={39}
            height={39}
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA61JREFUeNrsWGlT2zAUtGzZIQc0 oVAovf7/7+oxpU0h5GhMEseVO/uY7UOO5QSmX/DMjhzHfl69S2tF0cvxcvzfwzyjzWosgf9O0BCi HQRbEz6UYKzIxYpoqbBVv5+NIBNKaLSKpJAqCFtCI1Gzp9eEUIXUIQNSIIHtisTGYQ2sMG6ARqJm T3IWhDoOXYe+Qw/nHZCMQaIide/w22EJ5Li29hD957B7kKtefgRCxw6vCANcz4hgDnIzYIpxjutC NPKRtHuSq4gNHc4czjGOQLIPLxoQrDy2AKlbhxvCBNeX8PQjkrZlWDsgd+pw4XDl8Bbnr0GwpwhK eKcgNXa4Vp6W4xFJ26JaM3hnCEIfHD46vHO4hAeP4eGUXrRGmOfw9Cnu6+I+s6sN2UByKQyeIKRX IPcJ5+fwXhcTSagPFvDMCTCg+2L8vyFIK/pLPMSDCYz14KU38Np7jBe4LqFNKGzilQ48e0RVbqiI pLqlYB48aQMbcQczF4KXIHaGkA9wj1U5FVGoLSDeXYPUHPk5xfmSWo9pCrEUh1TuCMVwhnFIVZvS KsJrb0SNW/4r4K05KnsM3MLOalcVG0/+HcFLQyT5CPnUVZ4zNQtBSZ5le5KXx5QiljrHNg7IPymQ AQyxwYxyzgRKsIRWImn4nJucw8YG9MAUD/dAsg+DmVp32+hEXscFVpOLahLaVyQpVWKnheeaJp8Q Yp+ujGuI6RnHSsXE6tlQkvq+MmQWdYcWmoUaD5LypGAKZXOnWNDyXAyIlhOZtKJeJUZDvKgnzFpx owRtGeJBWUtlwV8A3PWLFt4slYjNPfqw4OjFAWHgjn8HzEjL8cxDQioiVmTYnFaQlbZlAz0oamSC bj8hcWA9X3Mh0ZiRvTvYz9Va/LAuNimaRMl83Vj5I6muwITcAsR+OHxz+ILxJ4jmnN9JAzGfaLWq 4xsVQv0VJ8SWFAUm99XhO8TsHPcWoR6MPOGLVV4VlIf6Cy6nXBNFfU3kPuN8jP+XqjsESf4t6bYp TarAtRlCM1JKOcFLNqRcqvt+EUkO7ZImWoYWSURkVvAEV7fk0w0R7JNaLmlyMyI4BrExnl9QR2j1 0VQqL3JFCmF5KaucVBG8pzBPVLuqJdd2DdXiIUM4e/Th3vMo6w3lo272uVqVtofsLGgha6n1ZNR2 tATj4lkp6P2ag7c+dikcW6N0fBtIOwXCU+1uRZ5tt9izgRl5vnmDdraeYn/Q1BCuUzGtNzGfcgvY NAjTvfTjHwEGAOqksIB6QsGmAAAAAElFTkSuQmCC"
            transform="translate(250.8 537.427) scale(.8974)"
            overflow="visible"
            opacity={0.15}
          />

          <path
            className="prefix__st16"
            d="M271.8 578.7h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
          />
          <circle
            className="prefix__st0"
            cx={268.7}
            cy={555.2}
            r={10.9}
          />

          {/* Estado */}
          <circle /* className="prefix__st12" */
            fill={props.p002 === 1 ? "#00cd98" : "#B4002B"}
            cx={268.7}
            cy={555}
            r={8}
          />

          <text
            transform="translate(228.483 655.354)"
            className="prefix__st9 prefix__st7 prefix__st15">
            {"Hipoclorito"}
          </text>

          <path
            className="prefix__st17"
            d="M261.3 587.7h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
          />
          <path
            className="prefix__st18"
            d="M235.3 599.4h38.8v40h-38.8z"
          />
          <path
            className="prefix__st16"
            d="M274.1 592.7v45.2c0 .7-.4 1.3-.8 1.3h-37.1c-.5 0-.8-.6-.8-1.3v-45.2"
          />
        </g>
        {/* Fin Hipoclorito Superior*/}

        <path
          className="prefix__st14"
          d="M416.5 1378.3H233.2c-6 0-11-5.2-11-11.5V1257c0-6.4 4.9-11.5 11-11.5h183.4c6 0 11 5.2 11 11.5v109.7c-.1 6.4-5 11.6-11.1 11.6z"
        />

        {/* Antiincrustante */}
        <g
        /* className = "cursorPointer" */
        /* onClick={() => {
            loadgraphs(8, "Caudal de Rechazo");
          }} */
        >
          <path
            className="prefix__st16"
            d="M381.4 1286.5h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
          />
          <image
            width={39}
            height={39}
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA8pJREFUeNrsmHlv2kAQxb1rGwIh CQltmvSQ+v2/Vs80bcjBEWzs7bp6E72MFnxA80dVpBFgzPjnt3N5o+j/6x9/mRfy6bo6S/YMZQKA bhfgZA9g2mwAxhFU2QbU7KiYVRbDWMmSrKDPjmDdPhVkpQQo9daDvxTHRMkKag3L6HNBwBsVTTrC xfhvBdX3NiDr43iMC1YwK9jS2yOsgs0J1oUgk45wAnbobeTtGHaEYwfw7QBWAc29PXib4X1OwLlS 07UF1HADwIy9vfI28XaG70f4nQEXALvzduvtxtsU3+8BulJJ5JoCMlwKdY4B9cbbpbcLb6+9nQLw AOeWWMolACu4X96uvf2ASbw6nOvaAOqE6GNJJwD7AHsLwBMscT8Qg3OodQOlR3ReRJntsNzVdV1T BS2WdgiVzgH2Ee+XWGJWz1ApyQE5xk2MKAwiymjO7FpALr4J7vaI1HsPuHdQ7xg3kFItZEVylely 7ZwyW7JbstokDdVL4fgESXGhYm8MuJ6qgRJLCdXIhJY1pwSSDF/ieLkN0ASSYwjACaDOsayinKii +7FTXUd+XwNG4vIn3ntQcl2XJLq0HALmDJCn+D6gLmJr2mlM0OJvrMpTj9ulrVliS/E3hMMTCvSD QGtr04UG8DtUsSlqN3LKxVk6h3SLbcrVxbXEpLTGHsWn+DO2wQgVk6MBxRsrZ1rAhepronwZXsI2 hTohi1sqV5eMG2Os7sUDZ6kqftdR3qlZsSC/z4YFW+OEHeQoohnNdeUOkOyXx65noHaLYhF1gQy1 aUFj0iowJjVRrqQhNqNZcUWgT5C2wdIWNDI9YESSea4tpACuaYCdo4MscIwBa4eFkhSc0zw3RcEe UTZH1EmiQDfhniw3fA9/ctML1YufHG/KLl23+qh/g0AdtCoedXIx3Axt7crbF2+fvX3HrDgD5J/4 j1uUA35ASqnx2wAUJxeDPUIphvuE9ysoueTnlLhBjYoCatrAY2WhgDgJlhQiGq5S7xuOz3D+U0wn DWpVRHE4I+UiQEjyTNCrD1XDl4F1ifNuMfJ/rYFr/EwSqYvw8+4KF51iTuQhIqH/ZpQUU3omucKY dUdzYNHmqU6rmGOpXGCeu4aCAsgKZqS0VIEpPnPJ0oW6VZPn+Espo2XCGdGzRmiJH2mZZ1T7eMwv dGcyHRu7paGhR7B9NdMZVUulI0nnyDa0uM6bRyawccTlJ9YDZ6C9relzQb+7fe1umcAOl1G7XGZD i3Ntd7d22WE1WzYvTc3Y5v72/uAmH6ZhRWg8osXRy706zY2/BRgAUS2lBKuTz+YAAAAASUVORK5C YII="
            transform="translate(360.938 1245.094) scale(.8974)"
            overflow="visible"
            opacity={0.15}
          />
          <circle
            className="prefix__st0"
            cx={378.8}
            cy={1262.9}
            r={10.9}
          />
          {/* Estado */}
          <circle /* className="prefix__st12" */
            fill={props.p004 === 1 ? "#00cd98" : "#B4002B"}
            cx={378.8}
            cy={1262.7}
            r={8}
          />

          <text
            transform="translate(338.084 1366.18)"
            className="prefix__st9 prefix__st7 prefix__st15">
            {"Antiincrustante"}
          </text>
          <path
            className="prefix__st17"
            d="M370.9 1295.5h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
          />
          <path
            className="prefix__st18"
            d="M344.9 1307.2h38.8v40h-38.8z"
          />
          <path
            className="prefix__st16"
            d="M383.7 1300.5v45.2c0 .7-.4 1.3-.8 1.3h-37.1c-.5 0-.8-.6-.8-1.3v-45.2"
          />
        </g>
        {/* Fin Antiincrustante Inferior */}

        {/* Metabisulfito */}
        <g
        /* className = "cursorPointer" */
        /* onClick={() => {
            loadgraphs(8, "Caudal de Rechazo");
          }} */
        >
          <path
            className="prefix__st16"
            d="M300.4 1286.5h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
          />
          <image
            width={39}
            height={39}
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7BJREFUeNrsmOtS2zAQhS3bwcFA CVBKmXba93+u0nZKaAm5kIsjqwpzduawlRPZlPzoNDNnCIkjf15pd4+UJP9f//jL7Glc13Wg/BWg jAIMwbl9AhpS2gDoCKpuA2r+AlhKyqCUrqkBYvHe0mf1LtCugBqqpySgErE1tKL3a3xXbwPNXwC3 +e0B1Pcq8bePz2RsC7CF0tKrAqhtgsw7wm2iVADq2OsNdOJ15HWIaxJAbIBmXlNogv8f8d2KIvoM Mu8I1wfYwOuCNABkiSgmuPkcQA/QL697r5HXGKAS0WeQeYdp7QPi3Oud17XXe7w/QyTLhggK3NDr liKd0r0qSqIoQMnWDFEpAbKB+gh9IMBjPASvwSWiOEbkzvCQcp2hUiRwT5/lLUpJD3CnXpeA+uz1 CVF8q6KX0U0rQJ5CJxQ9Q5luVRlysRGUjD3C1F4BUKJ3hfVXUgYbWks1IEuA9WlqOcuXKmFMHhm9 jNbeBYCuIZ7aggq1UZ0kB1ROD7DG1EtmTylhbOwUy/QeYgrPMcWXgD1FZAu14I0qGalqhRZRm2Bd /oRknGpbBE0gOQTwDGDntOZkWtNAdzKqGvQAXeL3A1qXMpbMgs0jopdRgkhR1gPmuM5E9H3uQtKB pLgXlGBPD5tGJElGgx2pbsGRa2My5MG5XR5ouBhAE3hizsJcra027skoBxQcK92x/oxyLTkpawEW 4yWD7mpbBF3AcDqyR+4lVp6smNazcdMGMKeKrCU/t1I2qStoTR2kgqyCdLsiKE5YGv6jskkVVf0Y SB5zHeggf4yXRgxYk2WaouGPAboIPPmu8RhujoedYrw5jRfVizmCjwAbQQ8oOQXVQF1ydLurFdyU POIE9+Be7LIWmSalpqByw+3NBCy7U+tYXM0M7W3jCb95fcHfO4BKL66zCLBQce1RHcwaIlWTfeL1 JnBDQN1AP2BmZ7jWtolgyN0YtQw0UEURE7AxOWqB20TvO6I3xrXrWDejE2Wm7BI7kjF6tNguWY+y 7ha05u4A9RWgQwVXx26anNrbLgEjLniJm44QmUGDW66QFBNce4f1dwu4ESWIbbsnYchKTeuCAIfK zvNeo1JZe692dTMVPdflZMGorSfbpWNSqZw170nmtDcW9zynIl2rs5vWjT5kHnpUeopA6eFauqKk 4f2HDcF1PZsxgYwOOR1DgDrD9Q6usQt1tUqm4YRr1xGcdi2vdroVAg35u6ThnNDt43xwm1NOdpyq RtuzLNnfq5O5/S3AAFxfqwWBYna5AAAAAElFTkSuQmCC"
            transform="translate(279.373 1245.094) scale(.8974)"
            overflow="visible"
            opacity={0.15}
          />
          <circle
            className="prefix__st0"
            cx={297.2}
            cy={1262.9}
            r={10.9}
          />
          {/* Estado */}
          <circle /* className="prefix__st12" */
            fill={props.p003 === 1 ? "#00cd98" : "#B4002B"}
            cx={297.2}
            cy={1262.7}
            r={8}
          />

          <text
            transform="translate(253.055 1366.18)"
            className="prefix__st9 prefix__st7 prefix__st15">
            {"Metabisulfito"}
          </text>
          <path
            className="prefix__st17"
            d="M289.9 1295.5h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
          />
          <path
            className="prefix__st18"
            d="M263.9 1307.2h38.8v40h-38.8z"
          />
          <path
            className="prefix__st16"
            d="M302.7 1300.5v45.2c0 .7-.4 1.3-.8 1.3h-37.1c-.5 0-.8-.6-.8-1.3v-45.2"
          />
        </g>
        {/* Fin Metabisulfito */}

        <path
          className="prefix__st30"
          d="M328.6 1147.6c0 .9-.7 1.6-1.6 1.6h-6.3c-.9 0-1.6-.7-1.6-1.6 0-.4.2-.8.5-1.1l3.1-3.1c.6-.6 1.5-.6 2.2-.1l3.2 3.2c.3.3.5.7.5 1.1z"
        />
        <path
          className="prefix__st0"
          d="M320 1147.6c0-.2.1-.3.2-.4l3.1-3.1c.2-.2.6-.2.9 0l3.1 3.1c.1.1.2.3.2.4 0 .3-.2.6-.6.6h-6.3c-.3 0-.6-.3-.6-.6m-2 0c0 1.4 1.2 2.6 2.6 2.6h6.3c1.4 0 2.6-1.2 2.6-2.6 0-.7-.3-1.3-.8-1.8l-3.1-3.1-.1-.1-.1-.1c-1.1-.9-2.6-.8-3.5.2l-3.1 3.1c-.5.5-.8 1.1-.8 1.8z"
        />
        <path
          className="prefix__st20"
          d="M377.1 1136.5h-75.3c-9 0-16.3-7.3-16.3-16.3V748.1c0-4.3-2.8-7.7-6.2-7.7h-16.7"
        />
        <path
          className="prefix__st17"
          d="M246.7 836.2h-25.9c-.7 0-1.2-.8-.8-1.4l5.2-8.3c.2-.2.5-.4.8-.4h15.5c.3 0 .6.2.8.4l5.2 8.3c.4.6-.1 1.4-.8 1.4z"
        />
        <path
          className="prefix__st17"
          d="M244.5 828.6h-21.7c-11.3 0-20.4-9.1-20.4-20.4v-66.6c0-11.3 9.1-20.4 20.4-20.4h21.7c11.3 0 20.4 9.1 20.4 20.4v66.6c0 11.3-9.1 20.4-20.4 20.4z"
        />
        <path
          className="prefix__st3"
          d="M202.5 739H265v72h-62.5z"
        />
        <path
          className="prefix__st20"
          d="M193 741h-14.7c-3.4 0-6.2-3.4-6.2-7.7V529c0-5.1 4.1-9.3 9.3-9.3h476.3c10.8 0 16.3-4.9 16.3-13.3v-99.1c0-4.5-3.7-8.2-8.2-8.2l-30-.3"
        />
        <path
          className="prefix__st25"
          d="M193.7 746.7c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        />
        <path
          className="prefix__st0"
          d="M193.7 735c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c1-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        />
        <text
          transform="translate(209.297 854.018)"
          className="prefix__st9 prefix__st7 prefix__st15">
          {"AG Plus 1"}
        </text>
        <path
          className="prefix__st20"
          d="M427 863.5V748.1c0-4.3-2.8-7.7-6.2-7.7h-16.7"
        />
        <path
          className="prefix__st17"
          d="M388.2 836.2h-25.9c-.7 0-1.2-.8-.8-1.4l5.2-8.3c.2-.2.5-.4.8-.4H383c.3 0 .6.2.8.4l5.2 8.3c.4.6-.1 1.4-.8 1.4z"
        />
        <path
          className="prefix__st17"
          d="M386.1 828.6h-21.7c-11.3 0-20.4-9.1-20.4-20.4v-66.6c0-11.3 9.1-20.4 20.4-20.4h21.7c11.3 0 20.4 9.1 20.4 20.4v66.6c0 11.3-9.2 20.4-20.4 20.4z"
        />
        <path
          className="prefix__st3"
          d="M344 739h62.5v72H344z"
        />
        <path
          className="prefix__st20"
          d="M313.6 680.9v52.4c0 4.3 2.8 7.7 6.2 7.7h14.7"
        />
        <path
          className="prefix__st25"
          d="M335.2 746.7c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        />
        <path
          className="prefix__st0"
          d="M335.2 735c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c1-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        />
        <g>
          <path
            className="prefix__st25"
            d="M420.7 863.4c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
          />
          <path
            className="prefix__st0"
            d="M432.4 863.4c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.5.4-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2 1 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
          />
        </g>
        <g>
          <text
            transform="translate(350.816 854.018)"
            className="prefix__st9 prefix__st7 prefix__st15">
            {"AG Plus 2"}
          </text>
        </g>
        <g>
          <path
            className="prefix__st20"
            d="M568.5 863.5V748.1c0-4.3-2.8-7.7-6.2-7.7h-16.7"
          />
          <path
            className="prefix__st17"
            d="M529.7 836.2h-25.9c-.7 0-1.2-.8-.8-1.4l5.2-8.3c.2-.2.5-.4.8-.4h15.5c.3 0 .6.2.8.4l5.2 8.3c.4.6-.1 1.4-.8 1.4z"
          />
          <path
            className="prefix__st17"
            d="M527.6 828.6h-21.7c-11.3 0-20.4-9.1-20.4-20.4v-66.6c0-11.3 9.1-20.4 20.4-20.4h21.7c11.3 0 20.4 9.1 20.4 20.4v66.6c0 11.3-9.1 20.4-20.4 20.4z"
          />
          <path
            className="prefix__st3"
            d="M485.5 739H548v72h-62.5z"
          />
          <path
            className="prefix__st20"
            d="M455.1 680.9v52.4c0 4.3 2.8 7.7 6.2 7.7H476"
          />
          <path
            className="prefix__st25"
            d="M476.8 746.7c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
          />
          <path
            className="prefix__st0"
            d="M476.8 735c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c1-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
          />
          <g>
            <path
              className="prefix__st25"
              d="M562.2 863.4c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
            />
            <path
              className="prefix__st0"
              d="M573.9 863.4c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.5.4-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2 1 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
            />
          </g>
          <g>
            <text
              transform="translate(492.335 854.018)"
              className="prefix__st9 prefix__st7 prefix__st15">
              {"AG Plus 3"}
            </text>
          </g>
        </g>
        <g>
          <path
            className="prefix__st20"
            d="M710.1 863.5V748.1c0-4.3-2.8-7.7-6.2-7.7h-16.7"
          />
          <path
            className="prefix__st17"
            d="M671.2 836.2h-25.9c-.7 0-1.2-.8-.8-1.4l5.2-8.3c.2-.2.5-.4.8-.4H666c.3 0 .6.2.8.4l5.2 8.3c.4.6-.1 1.4-.8 1.4z"
          />
          <path
            className="prefix__st17"
            d="M669.1 828.6h-21.7c-11.3 0-20.4-9.1-20.4-20.4v-66.6c0-11.3 9.1-20.4 20.4-20.4h21.7c11.3 0 20.4 9.1 20.4 20.4v66.6c0 11.3-9.1 20.4-20.4 20.4z"
          />
          <path
            className="prefix__st3"
            d="M627 739h62.5v72H627z"
          />
          <path
            className="prefix__st20"
            d="M596.7 680.9v52.4c0 4.3 2.8 7.7 6.2 7.7h14.7"
          />
          <path
            className="prefix__st25"
            d="M618.3 746.7c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
          />
          <path
            className="prefix__st0"
            d="M618.3 735c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c1-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
          />
          <g>
            <path
              className="prefix__st25"
              d="M703.8 863.4c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
            />
            <path
              className="prefix__st0"
              d="M715.5 863.4c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.5.4-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2 1 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
            />
          </g>
          <g>
            <text
              transform="translate(633.855 854.018)"
              className="prefix__st9 prefix__st7 prefix__st15">
              {"AG Plus 4"}
            </text>
          </g>
        </g>
        <path
          className="prefix__st20"
          d="M285.7 878.9h554.4c6.3 0 11.5-5.1 11.5-11.5V748.1c0-4.3-2.8-7.7-6.2-7.7h-16.7"
        />
        <g>
          <path
            className="prefix__st17"
            d="M812.7 836.2h-25.9c-.7 0-1.2-.8-.8-1.4l5.2-8.3c.2-.2.5-.4.8-.4h15.5c.3 0 .6.2.8.4l5.2 8.3c.4.6 0 1.4-.8 1.4z"
          />
          <path
            className="prefix__st17"
            d="M810.6 828.6h-21.7c-11.3 0-20.4-9.1-20.4-20.4v-66.6c0-11.3 9.1-20.4 20.4-20.4h21.7c11.3 0 20.4 9.1 20.4 20.4v66.6c0 11.3-9.1 20.4-20.4 20.4z"
          />
          <path
            className="prefix__st3"
            d="M768.5 739H831v72h-62.5z"
          />
        </g>
        <path
          className="prefix__st20"
          d="M759.1 741h-14.7c-3.4 0-6.2-3.4-6.2-7.7v-42.7c0-6.4-5.2-11.5-11.5-11.5H172.1"
        />
        <g>
          <path
            className="prefix__st25"
            d="M759.8 746.7c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
          />
          <path
            className="prefix__st0"
            d="M759.8 735c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c1-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
          />
        </g>
        <g>
          <text
            transform="translate(775.374 854.018)"
            className="prefix__st9 prefix__st7 prefix__st15">
            {"AG Plus 5"}
          </text>
        </g>
        <circle
          className="prefix__st29"
          cx={458}
          cy={518.4}
          r={9.2}
        />
        <linearGradient
          id="prefix__SVGID_1_"
          gradientUnits="userSpaceOnUse"
          x1={880.026}
          y1={1108.002}
          x2={880.026}
          y2={1293.624}
          gradientTransform="matrix(1 0 0 -1 0 1980)">
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
          fill="url(#prefix__SVGID_1_)"
          d="M876 686.4h8V872h-8z"
        />
        <path
          className="prefix__st32"
          d="M886.5 873.9l-5.7 5.7c-.4.4-1.1.4-1.6 0l-5.7-5.7c-.7-.7-.2-1.9.8-1.9h11.4c1 0 1.5 1.2.8 1.9z"
        />
        <path
          className="prefix__st33"
          d="M873.5 684.7l5.7-5.7c.4-.4 1.1-.4 1.6 0l5.7 5.7c.7.7.2 1.9-.8 1.9h-11.4c-1 0-1.5-1.2-.8-1.9z"
        />

        <circle
          className="prefix__st29"
          cx={285}
          cy={956.6}
          r={9.2}
        />
        <circle
          className="prefix__st29"
          cx={285}
          cy={1056}
          r={9.2}
        />

        <path
          className="prefix__st17"
          d="M441.8 1109.4c0-9.9-11.6-18-26-18s-26 8.1-26 18h.2c-.1.5-.2 1-.2 1.6v50.1c0 5.2 5 9.5 11.3 10.1v9.2h7.7v-9.1h13.3v9.1h7.7v-9.2c6.6-.3 11.9-4.7 11.9-10.1V1111c0-.5-.1-1.1-.2-1.6h.3z"
        />
        <g>
          <linearGradient
            id="prefix__SVGID_2_"
            gradientUnits="userSpaceOnUse"
            x1={-4424.702}
            y1={-5364.918}
            x2={-4424.702}
            y2={-5312.918}
            gradientTransform="matrix(0 -1 -1 0 -4923.597 -3346.384)">
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
            fill="url(#prefix__SVGID_2_)"
            d="M389.3 1074.3h52v8h-52z"
          />
          <path
            className="prefix__st32"
            d="M443.1 1071.8l5.7 5.7c.4.4.4 1.1 0 1.6l-5.7 5.7c-.7.7-1.9.2-1.9-.8v-11.4c0-1 1.2-1.5 1.9-.8z"
          />
          <path
            className="prefix__st33"
            d="M388.5 1084.8l-5.7-5.7c-.4-.4-.4-1.1 0-1.6l5.7-5.7c.7-.7 1.9-.2 1.9.8v11.4c0 1-1.2 1.5-1.9.8z"
          />
        </g>
        <g>
          <path
            className="prefix__st25"
            d="M373.6 1142.8c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
          />
          <path
            className="prefix__st0"
            d="M373.6 1131.1c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c1-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
          />
        </g>
        <g>
          <text
            transform="translate(396.683 1199.456)"
            className="prefix__st26">
            <tspan
              x={0}
              y={0}
              className="prefix__st9 prefix__st7 prefix__st15">
              {"Filtro de"}
            </tspan>
            <tspan
              x={-2.4}
              y={13}
              className="prefix__st9 prefix__st7 prefix__st15">
              {"Cartucho"}
            </tspan>
          </text>
        </g>
        <g>
          <path
            className="prefix__st17"
            d="M651.3 1142.2h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
          />
          {/* <image
            width={38}
            height={37}
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAlCAYAAAAuqZsAAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2JJREFUeNrsmHtT01AQxZtXy5sK VmHUUfT7fyaVcVAQKG0pUJImbpizzul6m3tT+hdjZs6Elvbml7OPu2mn8/94IUe0pu/61qnMee1g EZ1dWgalKunvtYExQCxKRCmU4L3IAVTDzEUFNA8BjFq6FAOkK+pBG3idQBGB1RC56FH0AD1CDNga zLrUBci2aFe0h783CS4mMIWaiiaiMc53eD8HXGkvnAY6luDCW6J90aFoIHotegXIDQqrhrC+8L1o JLoU/cb5GoARADsWLg1wq3YggzM1xJHoHXQEuB0Ci+lCOdy5EZ2LfmIddXdEzi7ApQFQKZzqi45F H0Unog8AOwBY15FjOfJqDJf7AMsIhHMt0pxLA0LYw4UHgPks+iJ6D7f2jFuu5N9HuDcBxfn3iGpd qFQfmLpVh/AtwD6RW326WLKkh81xcxnA6/dmolvk2RSu5vjs0lByn+rC+j7AjgE0oLB0CSpygHGP U6emyLshwjyFc5pjZZNjGsZt5FEN8wa5smdaROTJVc6pGVJggHUvsNaUKvRvBTXl1zZy5AAu7RBU 3GL34AjoegeOm3SC2WrUxO9Du8g520xDeiHvGptYdxegPXL+SbFnkR5AdiC7yCoTSUI7iG5nmd1v faHMzH6oLSHurHZEtKfaASD2OebaI+0XV4VqWnfhiBtmKB5XcsfIsupRhcxkTWBzlO89SvnO1QhX ACpDZrS44cs5es4UTVAb4Yzg2jpXAsTOZwUBPzHEnjDq1jFCp2a4wjVHeVKDb3ZCs5muV4WEsiCw a5qlbmjQKwLCWjnWG2KtK9z0PQ2NT59PAsdp7Ttb1KWzgCZbmfFnhBv8Ifom+o4ZbYibLXxgttlq w83obDdnTmpObC2gMVw6A9RXAF7gfwvp4XOsqR9x9RY0X82gB6podeoMLtVQp6JfSA0NpXceq6iK 9GHiiraiOS48wbSho7XrYUTz6hJhOwXcOeXrPw8laUAladJOzOgyAezhkocRO1pf0dx/jte39ChX tX1KqsjmktwaIz/2zcCYOBzTXjg0w+GMoKpVHnjtVKsVqupRQbhmfs23O9pB+KG3fO5PBLZCM5o6 EkdhMBzLdvq1/Khip4OEXjdt2HO77Tz3twtfy4g8a1Vtpop1/D7WZp2q81KOPwIMANCcdXDyL+92 AAAAAElFTkSuQmCC"
            transform="rotate(-.769 630.07 1156.936) scale(.99999)"
            overflow="visible"
            opacity={0.15}
          /> */}
          <circle
            transform="rotate(-.769 630.07 1156.936) scale(.99999)"
            className="prefix__st0"
            cx={630.1}
            cy={1156.9}
            r={10.9}
          />
          <circle
            className="prefix__st24"
            cx={630.2}
            cy={1156.7}
            r={8}
          />
        </g>
        <g>
          <text
            transform="translate(611.051 1194.966)"
            className="prefix__st9 prefix__st7 prefix__st15">
            {"Bomba 1"}
          </text>
        </g>
        <g>
          <path
            className="prefix__st17"
            d="M651.3 1076.9h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
          />
          {/* <image
            width={38}
            height={37}
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAlCAYAAAAuqZsAAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2JJREFUeNrsmHtT01AQxZtXy5sK VmHUUfT7fyaVcVAQKG0pUJImbpizzul6m3tT+hdjZs6Elvbml7OPu2mn8/94IUe0pu/61qnMee1g EZ1dWgalKunvtYExQCxKRCmU4L3IAVTDzEUFNA8BjFq6FAOkK+pBG3idQBGB1RC56FH0AD1CDNga zLrUBci2aFe0h783CS4mMIWaiiaiMc53eD8HXGkvnAY6luDCW6J90aFoIHotegXIDQqrhrC+8L1o JLoU/cb5GoARADsWLg1wq3YggzM1xJHoHXQEuB0Ci+lCOdy5EZ2LfmIddXdEzi7ApQFQKZzqi45F H0Unog8AOwBY15FjOfJqDJf7AMsIhHMt0pxLA0LYw4UHgPks+iJ6D7f2jFuu5N9HuDcBxfn3iGpd qFQfmLpVh/AtwD6RW326WLKkh81xcxnA6/dmolvk2RSu5vjs0lByn+rC+j7AjgE0oLB0CSpygHGP U6emyLshwjyFc5pjZZNjGsZt5FEN8wa5smdaROTJVc6pGVJggHUvsNaUKvRvBTXl1zZy5AAu7RBU 3GL34AjoegeOm3SC2WrUxO9Du8g520xDeiHvGptYdxegPXL+SbFnkR5AdiC7yCoTSUI7iG5nmd1v faHMzH6oLSHurHZEtKfaASD2OebaI+0XV4VqWnfhiBtmKB5XcsfIsupRhcxkTWBzlO89SvnO1QhX ACpDZrS44cs5es4UTVAb4Yzg2jpXAsTOZwUBPzHEnjDq1jFCp2a4wjVHeVKDb3ZCs5muV4WEsiCw a5qlbmjQKwLCWjnWG2KtK9z0PQ2NT59PAsdp7Ttb1KWzgCZbmfFnhBv8Ifom+o4ZbYibLXxgttlq w83obDdnTmpObC2gMVw6A9RXAF7gfwvp4XOsqR9x9RY0X82gB6podeoMLtVQp6JfSA0NpXceq6iK 9GHiiraiOS48wbSho7XrYUTz6hJhOwXcOeXrPw8laUAladJOzOgyAezhkocRO1pf0dx/jte39ChX tX1KqsjmktwaIz/2zcCYOBzTXjg0w+GMoKpVHnjtVKsVqupRQbhmfs23O9pB+KG3fO5PBLZCM5o6 EkdhMBzLdvq1/Khip4OEXjdt2HO77Tz3twtfy4g8a1Vtpop1/D7WZp2q81KOPwIMANCcdXDyL+92 AAAAAElFTkSuQmCC"
            transform="rotate(-.769 630.075 1091.652) scale(.99999)"
            overflow="visible"
            opacity={0.15}
          /> */}
          <circle
            transform="rotate(-.769 630.075 1091.652) scale(.99999)"
            className="prefix__st0"
            cx={630.1}
            cy={1091.6}
            r={10.9}
          />
          <circle
            className="prefix__st24"
            cx={630.2}
            cy={1091.4}
            r={8}
          />
        </g>
        <g>
          <text
            transform="translate(611.05 1129.684)"
            className="prefix__st9 prefix__st7 prefix__st15">
            {"Bomba 2"}
          </text>
        </g>

        <g>
          <path
            className="prefix__st19"
            d="M254.8 574v-38.8"
          />
          <path
            className="prefix__st30"
            d="M259.6 532.8c0 .9-.7 1.6-1.6 1.6h-6.3c-.9 0-1.6-.7-1.6-1.6 0-.4.2-.8.5-1.1l3.1-3.1c.6-.6 1.5-.6 2.2-.1l3.2 3.2c.3.3.5.7.5 1.1z"
          />
          <path
            className="prefix__st0"
            d="M251 532.8c0-.2.1-.3.2-.4l3.1-3.1c.2-.2.6-.2.9 0l3.1 3.1c.1.1.2.3.2.4 0 .3-.2.6-.6.6h-6.3c-.3 0-.6-.3-.6-.6m-2 0c0 1.4 1.2 2.6 2.6 2.6h6.3c1.4 0 2.6-1.2 2.6-2.6 0-.7-.3-1.3-.8-1.8l-3.1-3.1-.1-.1-.1-.1c-1.1-.9-2.6-.8-3.5.2l-3.1 3.1c-.5.5-.8 1.1-.8 1.8z"
          />
        </g>
        <path
          className="prefix__st20"
          d="M602.7 1167.8h-62.8c-3.2 0-5.8-2.9-5.8-6.5v-49c0-3.6 2.6-6.5 5.8-6.5h62.8"
        />
        <g>
          <path
            className="prefix__st25"
            d="M603 1174.2c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
          />
          <path
            className="prefix__st0"
            d="M603 1162.5c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
          />
        </g>
        <g>
          <path
            className="prefix__st25"
            d="M603 1112.2c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
          />
          <path
            className="prefix__st0"
            d="M603 1100.5c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
          />
        </g>
        <circle
          className="prefix__st29"
          cx={571.1}
          cy={1106.8}
          r={9.2}
        />
        <path
          className="prefix__st20"
          d="M657.2 1082.3H720c3.2 0 5.8 2.9 5.8 6.5v49c0 3.6-2.6 6.5-5.8 6.5h-62.8"
        />
        <g>
          <path
            className="prefix__st25"
            d="M1227.4 1141.9c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
          />
          <path
            className="prefix__st0"
            d="M1239.1 1141.9c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
          />
        </g>
        <circle
          className="prefix__st29"
          cx={688.5}
          cy={1143.9}
          r={9.2}
        />
        <path
          className="prefix__st20"
          d="M811.9 1168.1h-22.4c-4.3 0-7.7-2.8-7.7-6.2v-29.7M947.8 1167.1h22.4c4.3 0 7.7-2.8 7.7-6.2V1114"
        />
        <path
          className="prefix__st17"
          d="M928.7 1133.2H774.9c-3.8 0-7-3.1-7-7v-24.3c0-3.8 3.1-7 7-7h153.8c3.8 0 7 3.1 7 7v24.3c0 3.9-3.2 7-7 7z"
        />
        <path
          className="prefix__st3"
          d="M930.2 1133.2h-155c-4 0-7.3-3.1-7.3-7v-24.3c0-3.8 3.3-7 7.3-7l155.2 36.9c.8.3.6 1.4-.2 1.4z"
        />
        <path
          className="prefix__st17"
          d="M957.7 1182.8H803.9c-3.8 0-7-3.1-7-7v-24.3c0-3.8 3.1-7 7-7h153.8c3.8 0 7 3.1 7 7v24.3c0 3.9-3.2 7-7 7z"
        />
        <path
          className="prefix__st3"
          d="M959.2 1182.8h-155c-4 0-7.3-3.1-7.3-7v-24.3c0-3.8 3.3-7 7.3-7l155.2 36.9c.8.3.6 1.4-.2 1.4z"
        />

        <circle
          className="prefix__st29"
          cx={1010.7}
          cy={1112.1}
          r={9.2}
        />
        <circle
          className="prefix__st29"
          cx={1182.1}
          cy={1112.1}
          r={9.2}
        />
        <path
          className="prefix__st20"
          d="M860.4 1342.4H1225c4.8 0 8.6 3.9 8.6 8.6v21.4M860.4 1451.4v-267"
        />
        <g>
          <path
            className="prefix__st24"
            d="M1164.8 1157.2H1311v8.2h-146.2zM1164.8 1167.9H1311v8.2h-146.2z"
          />
          <path
            className="prefix__st36"
            d="M1164.8 1178.5H1311v8.2h-146.2zM1164.8 1189.2H1311v8.2h-146.2zM1164.8 1199.9H1311v8.2h-146.2z"
          />
          <path
            className="prefix__st3"
            d="M1164.8 1210.6H1311v8.2h-146.2zM1164.8 1221.3H1311v8.2h-146.2zM1164.8 1231.9H1311v8.2h-146.2z"
          />
          <path
            className="prefix__st17"
            d="M1164.8 1242.6H1311v8.2h-146.2zM1164.8 1253.3H1311v8.2h-146.2z"
          />
          <path
            className="prefix__st17"
            d="M1314.6 1280.4h-151.2c-3.3 0-6-2.7-6-6v-130.2c0-3.2 4.2-4.4 5.9-1.6l69.4 118c1.3 2.1 3.6 3.5 6 3.5h75.9c2.1 0 3.8 1.7 3.8 3.8v8.8c0 2-1.7 3.7-3.8 3.7z"
          />
        </g>
        <path
          className="prefix__st17"
          d="M857.6 1459.4h6v17.7h-6z"
        />
        <path
          className="prefix__st17"
          d="M872 1449.7c1.2 1.2 1.2 3.3 0 4.5l-9.1 9.1c-1.2 1.2-3.3 1.2-4.5 0l-9.1-9.1c-1.2-1.2-1.2-3.3 0-4.5"
        />
        <g>
          <path
            className="prefix__st24"
            d="M1164.8 1394.2H1311v8.2h-146.2zM1164.8 1404.9H1311v8.2h-146.2z"
          />
          <path
            className="prefix__st36"
            d="M1164.8 1415.5H1311v8.2h-146.2zM1164.8 1426.2H1311v8.2h-146.2zM1164.8 1436.9H1311v8.2h-146.2z"
          />
          <path
            className="prefix__st3"
            d="M1164.8 1447.6H1311v8.2h-146.2zM1164.8 1458.3H1311v8.2h-146.2zM1164.8 1468.9H1311v8.2h-146.2z"
          />
          <path
            className="prefix__st17"
            d="M1164.8 1479.6H1311v8.2h-146.2zM1164.8 1490.3H1311v8.2h-146.2z"
          />
          <path
            className="prefix__st17"
            d="M1314.6 1517.4h-151.2c-3.3 0-6-2.7-6-6v-130.2c0-3.2 4.2-4.4 5.9-1.6l69.4 118c1.3 2.1 3.6 3.5 6 3.5h75.9c2.1 0 3.8 1.7 3.8 3.8v8.8c0 2-1.7 3.7-3.8 3.7z"
          />
        </g>
        <circle
          className="prefix__st29"
          cx={860.4}
          cy={1257.4}
          r={9.2}
        />
        <circle
          className="prefix__st29"
          cx={1010.7}
          cy={1342.4}
          r={9.2}
        />
        <g>
          <text
            transform="translate(1195.156 1303.532)"
            className="prefix__st9 prefix__st7 prefix__st15">
            {"Tranque Permeado"}
          </text>
        </g>
        <g>
          <text
            transform="translate(1195.156 1538.545)"
            className="prefix__st9 prefix__st7 prefix__st15">
            {"Tranque Decantador"}
          </text>
        </g>
        <g>
          <path
            className="prefix__st25"
            d="M1227.4 1370.7c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
          />
          <path
            className="prefix__st0"
            d="M1239.1 1370.7c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
          />
        </g>
        <g>
          <path
            className="prefix__st25"
            d="M1093.2 1100.7c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
          />
          <path
            className="prefix__st0"
            d="M1104.9 1100.7c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
          />
        </g>
      </g>
    </svg>
  );
}

export default ScadaSantaTeresa;

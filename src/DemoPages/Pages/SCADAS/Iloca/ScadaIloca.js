import * as React from "react";
import { getColorConexion, getConexion } from "../../../../commons/scada/scada";

const ScadaIloca = (props) => {
  const {
    datosScada,
    datosAlarmas,
    loading,
    selected,
    loadGrafico,
    onClickAlarma
  } = props;

  const getScaledValue = (value, decimals, mult) => {
    if (!isNaN(value)) {
      return (value * (mult ? mult : 0.1)).toFixed(decimals ? decimals : 0);
    } else {
      return value;
    }
  };

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

  const getEstadoNivelBajo = (id) => {
    switch (Number(id)) {
      case 0:
        return "OFF";
      case 1:
        return "ON";
      case 2:
        return "OFF";
      default:
        return "-";
    }
  };

  const getColorNivelBajo = (id) => {
    switch (Number(id)) {
      case 0:
        return "#B4002B";
      case 1:
        return "#00CD98";
      case 2:
        return "#FBCE19";
      default:
        return "#b7b7b7";
    }
  };

  const getEstadoNivelAlto = (id) => {
    switch (Number(id)) {
      case 0:
        return "ON";
      case 1:
        return "OFF";
      default:
        return "-";
    }
  };

  const getColorNivelAlto = (id) => {
    switch (Number(id)) {
      case 0:
        return "#00CD98";
      case 1:
        return "#B4002B";
      default:
        return "#b7b7b7";
    }
  };

  const getTemaAlarma = (id) => {
    if (loading) {
      return "campanaDesconectada";
    } else {
      for (let i = 0; i < datosAlarmas.length; i++) {
        if (Number(id) === Number(datosAlarmas[i].id)) {
          if (Number(datosAlarmas[i].min) !== Number(datosAlarmas[i].max)) {
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
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x={0}
      y={0}
      viewBox="0 0 1429.5 1543"
      style={{
        enableBackground: "new 0 0 1429.5 1543"
      }}
      xmlSpace="preserve"
      {...props}>
      <style>
        {
          ".st0{fill:none;stroke:#35ace8;stroke-width:4;stroke-miterlimit:10}.st1{fill:#fff}.st4{fill:#3574e0}.st7{fill:#666}.st9{font-size:14px}.st10{fill:#606060}.st12{font-size:17px}.st13{fill:#00e098}.st15{fill:none;stroke:#00aeed;stroke-width:4;stroke-miterlimit:10}.st16{fill:#0e76e7}.st17{fill:none;stroke:#2f3e49;stroke-width:4;stroke-miterlimit:10}.st18{fill:#2f3e49}.st19{opacity:.15;fill:#0e76e7;enable-background:new}.st20{fill:#00aeed}.st21{font-size:11px}.st22{opacity:.6;fill:none;stroke:#cbcbcb;stroke-width:2;stroke-miterlimit:10;enable-background:new}.st23{fill:#cbcbcb}.st24{enable-background:new}.st26{font-size:15px}.st27{fill:#00a39b}.st28,.st29{fill:#fff;stroke:#35ace8;stroke-width:4;stroke-miterlimit:10}.st29{opacity:.5;fill:none;stroke:#b2b2b2;stroke-width:.5;enable-background:new}.st30{fill:#323e48}.st31,.st32,.st34{fill:none;stroke:#323e48;stroke-width:4;stroke-miterlimit:10}.st32,.st34{stroke:#fff;stroke-width:2}.st34{stroke:#323e48;stroke-width:3;stroke-linecap:round}.tarjeta{fill:#ffffff}.tarjetaSeleccionada{fill:#3574e0;opacity:.15}.cursorPointer{cursor:pointer}.cursorNormal{cursor:default}.campana{fill:#3474E0;}.campana:hover{fill:#7c7c7c;}.campanaVacia{fill:#c2c2c1;}.campanaVacia:hover{fill:#7c7c7c;}.campanaDesconectada{fill:#c2c2c1;}"
        }
      </style>
      <path
        className="st0"
        d="M564.1 965.4h158.2"
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
        className="st1"
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
        transform="translate(1160.93 105.915)"
        className="st7 st9">
        {"Funcionando"}
      </text>
      <text
        transform="translate(1160.93 125.915)"
        className="st7 st9">
        {"Movi\xE9ndose"}
      </text>
      <text
        transform="translate(1160.93 145.915)"
        className="st7 st9">
        {"Falla"}
      </text>
      <text
        transform="translate(1160.93 165.915)"
        className="st7 st9">
        {"Bloqueada"}
      </text>
      <text
        transform="translate(1160.93 185.915)"
        className="st7 st9">
        {"Detenida"}
      </text>
      <text
        transform="translate(75.498 77.731)"
        className="st10 st9">
        {"Conectividad de Planta"}
      </text>
      <text
        transform="translate(109.29 128.21)"
        className="st10 st12">
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
        className="st1"
        cx={85.5}
        cy={122.2}
        r={12.1}
      />

      {/* Cirulo conexion */}
      <circle
        fill={getColorConexion(datosScada.conexion)}
        cx={85.5}
        cy={122.1}
        r={8.9}
      />

      <text
        transform="translate(1134.967 77.731)"
        className="st10 st9">
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
        className="st15"
        d="M259.2 471.3h-16.4c-2.8 0-5-2.3-5-5v-51.9c0-2.8 2.3-5 5-5h16.4M57.9 337.1h44.2c4.7 0 8.5 3.8 8.5 8.5v58.3"
      />
      <path
        className="st16"
        d="M57.6 418.6h124.8v97.7H57.6z"
      />
      <path
        className="st17"
        d="M182.2 402.3v111.2c0 1.7-.6 3.1-1.2 3.1H59c-.7 0-1.2-1.4-1.2-3.1V402.3"
      />
      <path
        className="st18"
        d="M308 444h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        width={38}
        height={37}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAlCAYAAAAuqZsAAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2JJREFUeNrsmHtT01AQxZtXy5sK VmHUUfT7fyaVcVAQKG0pUJImbpizzul6m3tT+hdjZs6Elvbml7OPu2mn8/94IUe0pu/61qnMee1g EZ1dWgalKunvtYExQCxKRCmU4L3IAVTDzEUFNA8BjFq6FAOkK+pBG3idQBGB1RC56FH0AD1CDNga zLrUBci2aFe0h783CS4mMIWaiiaiMc53eD8HXGkvnAY6luDCW6J90aFoIHotegXIDQqrhrC+8L1o JLoU/cb5GoARADsWLg1wq3YggzM1xJHoHXQEuB0Ci+lCOdy5EZ2LfmIddXdEzi7ApQFQKZzqi45F H0Unog8AOwBY15FjOfJqDJf7AMsIhHMt0pxLA0LYw4UHgPks+iJ6D7f2jFuu5N9HuDcBxfn3iGpd qFQfmLpVh/AtwD6RW326WLKkh81xcxnA6/dmolvk2RSu5vjs0lByn+rC+j7AjgE0oLB0CSpygHGP U6emyLshwjyFc5pjZZNjGsZt5FEN8wa5smdaROTJVc6pGVJggHUvsNaUKvRvBTXl1zZy5AAu7RBU 3GL34AjoegeOm3SC2WrUxO9Du8g520xDeiHvGptYdxegPXL+SbFnkR5AdiC7yCoTSUI7iG5nmd1v faHMzH6oLSHurHZEtKfaASD2OebaI+0XV4VqWnfhiBtmKB5XcsfIsupRhcxkTWBzlO89SvnO1QhX ACpDZrS44cs5es4UTVAb4Yzg2jpXAsTOZwUBPzHEnjDq1jFCp2a4wjVHeVKDb3ZCs5muV4WEsiCw a5qlbmjQKwLCWjnWG2KtK9z0PQ2NT59PAsdp7Ttb1KWzgCZbmfFnhBv8Ifom+o4ZbYibLXxgttlq w83obDdnTmpObC2gMVw6A9RXAF7gfwvp4XOsqR9x9RY0X82gB6podeoMLtVQp6JfSA0NpXceq6iK 9GHiiraiOS48wbSho7XrYUTz6hJhOwXcOeXrPw8laUAladJOzOgyAezhkocRO1pf0dx/jte39ChX tX1KqsjmktwaIz/2zcCYOBzTXjg0w+GMoKpVHnjtVKsVqupRQbhmfs23O9pB+KG3fO5PBLZCM5o6 EkdhMBzLdvq1/Khip4OEXjdt2HO77Tz3twtfy4g8a1Vtpop1/D7WZp2q81KOPwIMANCcdXDyL+92 AAAAAElFTkSuQmCC"
        transform="rotate(-.756 33216.858 -19919.263) scale(.91928)"
      />
      <circle
        transform="rotate(-.769 286.864 458.734) scale(.99999)"
        className="st1"
        cx={286.9}
        cy={458.7}
        r={10.9}
      />
      <circle
        className="st19"
        cx={286.9}
        cy={458.5}
        r={8}
      />
      <path
        className="st18"
        d="M308 378.7h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        width={38}
        height={37}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAlCAYAAAAuqZsAAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2JJREFUeNrsmHtT01AQxZtXy5sK VmHUUfT7fyaVcVAQKG0pUJImbpizzul6m3tT+hdjZs6Elvbml7OPu2mn8/94IUe0pu/61qnMee1g EZ1dWgalKunvtYExQCxKRCmU4L3IAVTDzEUFNA8BjFq6FAOkK+pBG3idQBGB1RC56FH0AD1CDNga zLrUBci2aFe0h783CS4mMIWaiiaiMc53eD8HXGkvnAY6luDCW6J90aFoIHotegXIDQqrhrC+8L1o JLoU/cb5GoARADsWLg1wq3YggzM1xJHoHXQEuB0Ci+lCOdy5EZ2LfmIddXdEzi7ApQFQKZzqi45F H0Unog8AOwBY15FjOfJqDJf7AMsIhHMt0pxLA0LYw4UHgPks+iJ6D7f2jFuu5N9HuDcBxfn3iGpd qFQfmLpVh/AtwD6RW326WLKkh81xcxnA6/dmolvk2RSu5vjs0lByn+rC+j7AjgE0oLB0CSpygHGP U6emyLshwjyFc5pjZZNjGsZt5FEN8wa5smdaROTJVc6pGVJggHUvsNaUKvRvBTXl1zZy5AAu7RBU 3GL34AjoegeOm3SC2WrUxO9Du8g520xDeiHvGptYdxegPXL+SbFnkR5AdiC7yCoTSUI7iG5nmd1v faHMzH6oLSHurHZEtKfaASD2OebaI+0XV4VqWnfhiBtmKB5XcsfIsupRhcxkTWBzlO89SvnO1QhX ACpDZrS44cs5es4UTVAb4Yzg2jpXAsTOZwUBPzHEnjDq1jFCp2a4wjVHeVKDb3ZCs5muV4WEsiCw a5qlbmjQKwLCWjnWG2KtK9z0PQ2NT59PAsdp7Ttb1KWzgCZbmfFnhBv8Ifom+o4ZbYibLXxgttlq w83obDdnTmpObC2gMVw6A9RXAF7gfwvp4XOsqR9x9RY0X82gB6podeoMLtVQp6JfSA0NpXceq6iK 9GHiiraiOS48wbSho7XrYUTz6hJhOwXcOeXrPw8laUAladJOzOgyAezhkocRO1pf0dx/jte39ChX tX1KqsjmktwaIz/2zcCYOBzTXjg0w+GMoKpVHnjtVKsVqupRQbhmfs23O9pB+KG3fO5PBLZCM5o6 EkdhMBzLdvq1/Khip4OEXjdt2HO77Tz3twtfy4g8a1Vtpop1/D7WZp2q81KOPwIMANCcdXDyL+92 AAAAAElFTkSuQmCC"
        transform="rotate(-.756 28328.948 -19951.114) scale(.91928)"
      />
      <circle
        transform="rotate(-.769 286.863 393.458) scale(.99999)"
        className="st1"
        cx={286.9}
        cy={393.4}
        r={10.9}
      />
      <circle
        className="st19"
        cx={286.9}
        cy={393.2}
        r={8}
      />
      <path
        className="st20"
        d="M259.7 416c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st1"
        d="M259.7 404.3c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st15"
        d="M313.9 384.1h16.4c2.8 0 5 2.3 5 5V441c0 2.8-2.3 5-5 5h-16.4"
      />
      <text
        transform="translate(104.121 539.404)"
        className="st10 st21">
        {"TK-001"}
      </text>
      <path
        className="st20"
        d="M259.7 477.4c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st1"
        d="M259.7 465.7c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st15"
        d="M187.9 438.1h48.5M488 1020.8h-16.4c-2.8 0-5-2.3-5-5v-51.9c0-2.8 2.3-5 5-5H488"
      />
      <path
        className="st18"
        d="M536.8 993.5h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6H530c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
      />

      <circle
        transform="rotate(-.769 515.628 1008.247) scale(.99999)"
        className="st1"
        cx={515.7}
        cy={1008.2}
        r={10.9}
      />
      <circle
        className="st19"
        cx={515.7}
        cy={1008}
        r={8}
      />
      <path
        className="st18"
        d="M536.8 928.3h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6H530c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7V931c0-1.5-1.2-2.7-2.7-2.7z"
      />

      <circle
        transform="rotate(-.769 515.634 942.97) scale(.99999)"
        className="st1"
        cx={515.7}
        cy={942.9}
        r={10.9}
      />
      <circle
        className="st19"
        cx={515.7}
        cy={942.8}
        r={8}
      />
      <path
        className="st20"
        d="M488.5 965.5c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st1"
        d="M488.5 953.8c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st15"
        d="M542.7 933.4h16.4c2.8 0 5 2.3 5 5v51.9c0 2.8-2.3 5-5 5h-16.4"
      />
      <path
        className="st20"
        d="M488.5 1026.9c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st1"
        d="M488.5 1015.2c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st15"
        d="M484.4 758H461"
      />
      <path
        className="st18"
        d="M529.2 730.7h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        width={38}
        height={37}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAlCAYAAAAuqZsAAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2JJREFUeNrsmHtT01AQxZtXy5sK VmHUUfT7fyaVcVAQKG0pUJImbpizzul6m3tT+hdjZs6Elvbml7OPu2mn8/94IUe0pu/61qnMee1g EZ1dWgalKunvtYExQCxKRCmU4L3IAVTDzEUFNA8BjFq6FAOkK+pBG3idQBGB1RC56FH0AD1CDNga zLrUBci2aFe0h783CS4mMIWaiiaiMc53eD8HXGkvnAY6luDCW6J90aFoIHotegXIDQqrhrC+8L1o JLoU/cb5GoARADsWLg1wq3YggzM1xJHoHXQEuB0Ci+lCOdy5EZ2LfmIddXdEzi7ApQFQKZzqi45F H0Unog8AOwBY15FjOfJqDJf7AMsIhHMt0pxLA0LYw4UHgPks+iJ6D7f2jFuu5N9HuDcBxfn3iGpd qFQfmLpVh/AtwD6RW326WLKkh81xcxnA6/dmolvk2RSu5vjs0lByn+rC+j7AjgE0oLB0CSpygHGP U6emyLshwjyFc5pjZZNjGsZt5FEN8wa5smdaROTJVc6pGVJggHUvsNaUKvRvBTXl1zZy5AAu7RBU 3GL34AjoegeOm3SC2WrUxO9Du8g520xDeiHvGptYdxegPXL+SbFnkR5AdiC7yCoTSUI7iG5nmd1v faHMzH6oLSHurHZEtKfaASD2OebaI+0XV4VqWnfhiBtmKB5XcsfIsupRhcxkTWBzlO89SvnO1QhX ACpDZrS44cs5es4UTVAb4Yzg2jpXAsTOZwUBPzHEnjDq1jFCp2a4wjVHeVKDb3ZCs5muV4WEsiCw a5qlbmjQKwLCWjnWG2KtK9z0PQ2NT59PAsdp7Ttb1KWzgCZbmfFnhBv8Ifom+o4ZbYibLXxgttlq w83obDdnTmpObC2gMVw6A9RXAF7gfwvp4XOsqR9x9RY0X82gB6podeoMLtVQp6JfSA0NpXceq6iK 9GHiiraiOS48wbSho7XrYUTz6hJhOwXcOeXrPw8laUAladJOzOgyAezhkocRO1pf0dx/jte39ChX tX1KqsjmktwaIz/2zcCYOBzTXjg0w+GMoKpVHnjtVKsVqupRQbhmfs23O9pB+KG3fO5PBLZCM5o6 EkdhMBzLdvq1/Khip4OEXjdt2HO77Tz3twtfy4g8a1Vtpop1/D7WZp2q81KOPwIMANCcdXDyL+92 AAAAAElFTkSuQmCC"
        transform="rotate(-.756 54791.007 -36339.716) scale(.91928)"
      />
      <circle
        transform="rotate(-.769 508.017 745.45) scale(.99999)"
        className="st1"
        cx={508.1}
        cy={745.4}
        r={10.9}
      />
      <circle
        className="st19"
        cx={508.1}
        cy={745.2}
        r={8}
      />
      <path
        className="st20"
        d="M484.9 764.1c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st1"
        d="M484.9 752.4c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st18"
        d="M936 1172.2h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        width={38}
        height={37}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAlCAYAAAAuqZsAAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2JJREFUeNrsmHtT01AQxZtXy5sK VmHUUfT7fyaVcVAQKG0pUJImbpizzul6m3tT+hdjZs6Elvbml7OPu2mn8/94IUe0pu/61qnMee1g EZ1dWgalKunvtYExQCxKRCmU4L3IAVTDzEUFNA8BjFq6FAOkK+pBG3idQBGB1RC56FH0AD1CDNga zLrUBci2aFe0h783CS4mMIWaiiaiMc53eD8HXGkvnAY6luDCW6J90aFoIHotegXIDQqrhrC+8L1o JLoU/cb5GoARADsWLg1wq3YggzM1xJHoHXQEuB0Ci+lCOdy5EZ2LfmIddXdEzi7ApQFQKZzqi45F H0Unog8AOwBY15FjOfJqDJf7AMsIhHMt0pxLA0LYw4UHgPks+iJ6D7f2jFuu5N9HuDcBxfn3iGpd qFQfmLpVh/AtwD6RW326WLKkh81xcxnA6/dmolvk2RSu5vjs0lByn+rC+j7AjgE0oLB0CSpygHGP U6emyLshwjyFc5pjZZNjGsZt5FEN8wa5smdaROTJVc6pGVJggHUvsNaUKvRvBTXl1zZy5AAu7RBU 3GL34AjoegeOm3SC2WrUxO9Du8g520xDeiHvGptYdxegPXL+SbFnkR5AdiC7yCoTSUI7iG5nmd1v faHMzH6oLSHurHZEtKfaASD2OebaI+0XV4VqWnfhiBtmKB5XcsfIsupRhcxkTWBzlO89SvnO1QhX ACpDZrS44cs5es4UTVAb4Yzg2jpXAsTOZwUBPzHEnjDq1jFCp2a4wjVHeVKDb3ZCs5muV4WEsiCw a5qlbmjQKwLCWjnWG2KtK9z0PQ2NT59PAsdp7Ttb1KWzgCZbmfFnhBv8Ifom+o4ZbYibLXxgttlq w83obDdnTmpObC2gMVw6A9RXAF7gfwvp4XOsqR9x9RY0X82gB6podeoMLtVQp6JfSA0NpXceq6iK 9GHiiraiOS48wbSho7XrYUTz6hJhOwXcOeXrPw8laUAladJOzOgyAezhkocRO1pf0dx/jte39ChX tX1KqsjmktwaIz/2zcCYOBzTXjg0w+GMoKpVHnjtVKsVqupRQbhmfs23O9pB+KG3fO5PBLZCM5o6 EkdhMBzLdvq1/Khip4OEXjdt2HO77Tz3twtfy4g8a1Vtpop1/D7WZp2q81KOPwIMANCcdXDyL+92 AAAAAElFTkSuQmCC"
        transform="rotate(-.756 88043.178 -66583.848) scale(.91928)"
      />
      <circle
        transform="rotate(-.769 914.8 1186.925) scale(.99999)"
        className="st1"
        cx={914.9}
        cy={1186.9}
        r={10.9}
      />
      <circle
        className="st19"
        cx={914.9}
        cy={1186.7}
        r={8}
      />
      <path
        className="st22"
        d="M515.7 453.7v-10c0-2.8-2.1-5-4.6-5h-32.7c-2.6 0-4.6 2.2-4.6 5v10M494.7 421.7v17"
      />
      <path
        className="st23"
        d="M499.6 427c0 .9-.7 1.6-1.6 1.6h-6.3c-.9 0-1.6-.7-1.6-1.6 0-.4.2-.8.5-1.1l3.1-3.1c.6-.6 1.5-.6 2.2-.1l3.2 3.2c.3.3.5.7.5 1.1z"
      />
      <path
        className="st1"
        d="M491 427c0-.2.1-.3.2-.4l3.1-3.1c.2-.2.6-.2.9 0l3.1 3.1c.1.1.2.3.2.4 0 .3-.2.6-.6.6h-6.3c-.3 0-.6-.3-.6-.6m-2 0c0 1.4 1.2 2.6 2.6 2.6h6.3c1.4 0 2.6-1.2 2.6-2.6 0-.7-.3-1.3-.8-1.8l-3.1-3.1-.1-.1-.1-.1c-1.1-.9-2.6-.8-3.5.2l-3.1 3.1c-.5.5-.8 1.1-.8 1.8z"
      />
      <path
        className="st20"
        d="M104.1 407.1c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
      />
      <path
        className="st1"
        d="M115.8 407.1c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <path
        className="st15"
        d="m864 279.4.2-11c.1-3.7-3-6.8-6.7-6.7l-314.2.6c-3.6 0-6.6 2.9-6.6 6.6l-2.1 138.5c-.1 3.6-3 6.6-6.7 6.6H336.3"
      />
      <path
        className="st18"
        d="M590.7 294.6c0-6.7-7.8-12.1-17.5-12.1s-17.5 5.5-17.5 12.1h.1c-.1.3-.1.7-.1 1.1v57.6c0 3.5 3.4 6.4 7.6 6.8v6.2h5.2v-6.1h9v6.1h5.2V360c4.5-.2 8-3.2 8-6.8v-57.6c0-.3-.1-.7-.1-1.1h.1z"
      />
      <text
        transform="translate(555.378 386.085)"
        className="st10 st21">
        {"FIS001"}
      </text>
      <path
        className="st15"
        d="M574.1 261.6v17.8M955.6 444.3h336.6c6.2 0 11.1 5 11.1 11.1V576c0 6.2-5 11.1-11.1 11.1H65.9c-6.2 0-11.1 5-11.1 11.1v376.2c0 6.9 5.6 12.5 12.5 12.5h169.9M595 300h9c2.3 0 4.2 1.9 4.2 4.1l.3 104.3c0 3.3 2.7 5.9 5.9 5.9h311.1"
      />
      <path
        className="st18"
        d="M662.5 294.6c0-6.7-7.8-12.1-17.5-12.1s-17.5 5.5-17.5 12.1h.1c-.1.3-.1.7-.1 1.1v57.6c0 3.5 3.4 6.4 7.6 6.8v6.2h5.2v-6.1h9v6.1h5.2V360c4.5-.2 8-3.2 8-6.8v-57.6c0-.3-.1-.7-.1-1.1h.1z"
      />
      <text
        transform="translate(627.24 386.085)"
        className="st10 st21">
        {"FIS002"}
      </text>
      <path
        className="st15"
        d="M646 261.6v17.8M666.9 299.5h8.7c2.5 0 4.5 2 4.5 4.5l.4 110"
      />
      <path
        className="st18"
        d="M736 294.6c0-6.7-7.8-12.1-17.5-12.1S701 288 701 294.6h.1c-.1.3-.1.7-.1 1.1v57.6c0 3.5 3.4 6.4 7.6 6.8v6.2h5.2v-6.1h9v6.1h5.2V360c4.5-.2 8-3.2 8-6.8v-57.6c0-.3-.1-.7-.1-1.1h.1z"
      />
      <text
        transform="translate(700.749 386.085)"
        className="st10 st21">
        {"FIS003"}
      </text>
      <path
        className="st15"
        d="M740.4 299.5h8.5c2.6 0 4.7 2.1 4.7 4.7L754 414"
      />
      <path
        className="st18"
        d="M808.2 294.6c0-6.7-7.8-12.1-17.5-12.1s-17.5 5.5-17.5 12.1h.1c-.1.3-.1.7-.1 1.1v57.6c0 3.5 3.4 6.4 7.6 6.8v6.2h5.2v-6.1h9v6.1h5.2V360c4.5-.2 8-3.2 8-6.8v-57.6c0-.3-.1-.7-.1-1.1h.1z"
      />
      <text
        transform="translate(772.934 386.085)"
        className="st10 st21">
        {"FIS004"}
      </text>
      <path
        className="st15"
        d="M791.7 261.6v17.8M812.6 299.5h8.7c2.5 0 4.5 2 4.5 4.5l.4 110"
      />
      <path
        className="st18"
        d="M881.7 294.6c0-6.7-7.8-12.1-17.5-12.1s-17.5 5.5-17.5 12.1h.1c-.1.3-.1.7-.1 1.1v57.6c0 3.5 3.4 6.4 7.6 6.8v6.2h5.2v-6.1h9v6.1h5.2V360c4.5-.2 8-3.2 8-6.8v-57.6c0-.3-.1-.7-.1-1.1h.1z"
      />
      <text
        transform="translate(846.443 386.085)"
        className="st10 st21">
        {"FIS005"}
      </text>
      <path
        className="st15"
        d="M886.1 299.5h8.5c2.6 0 4.7 2.1 4.7 4.7l.4 109.8"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={157}
        height={140}
        xlinkHref="data:image/png;base64,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 BwAAjn8EGAD3ax0Egfa5VwAAAABJRU5ErkJggg=="
        transform="translate(343.09 264.504)"
      />
      <path
        className="st1"
        d="M402.1 274.1H359c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V280.4c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Presion Bombas de Impulsion */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(20, "Presión Bombas de Impulsión", false)}>
        <path
          className={getTarjetaClass(20)}
          d="M352.8 281.5h138.1v99.8H352.8z"
        />
        <text
          transform="translate(371.669 321.096)"
          className="st24">
          <tspan
            x={0}
            y={0}
            className="st16 st9">
            {"Presi\xF3n Bombas"}
          </tspan>
          <tspan
            x={11.7}
            y={16.8}
            className="st16 st9">
            {"de Impulsi\xF3n"}
          </tspan>
        </text>
        <text
          transform="translate(403.68 366.415)"
          className="st10 st12">
          {getScaledValue(datosScada.PT004, 1)}
        </text>
        <text
          transform="translate(442.805 366.02)"
          className="st10 st26">
          {"Bar"}
        </text>
        <text
          transform="translate(404.992 301.456)"
          className="st10 st21">
          {"PT-004"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(20)} cursorPointer`}
        onClick={() => {
          onClickAlarma(20, "Presión Bombas de Impulsión");
        }}>
        <path d="M377.7 352.3c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M376 351.3c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM387.3 350c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M387.9 348.2c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM388.8 357.3v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM383.8 364.8c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>
      {/* Fin Presion Bombas de Impulsion */}

      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={158}
        height={141}
        xlinkHref="data:image/png;base64,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"
        transform="translate(309.51 834.9)"
      />
      <path
        className="st1"
        d="M368.8 844.9h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V851.2c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Presion de Salida Highflow */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(17, "Presión de Salida Highflow", false)}>
        <path
          className={getTarjetaClass(17)}
          d="M319.5 852.2h138.1V952H319.5z"
        />
        <text
          transform="translate(354.31 891.852)"
          className="st24">
          <tspan
            x={0}
            y={0}
            className="st16 st9">
            {"Presi\xF3n de "}
          </tspan>
          <tspan
            x={-12.8}
            y={16.8}
            className="st16 st9">
            {"Salida Highflow"}
          </tspan>
        </text>
        <text
          transform="translate(370.373 937.17)"
          className="st10 st12">
          {getScaledValue(datosScada.PT024, 1)}
        </text>
        <text
          transform="translate(409.498 936.775)"
          className="st10 st26">
          {"Bar"}
        </text>
        <text
          transform="translate(371.686 872.212)"
          className="st10 st21">
          {"PT-024"}
        </text>
      </g>
      {/* Campana */}
      <g
        className={`${getTemaAlarma(17)} cursorPointer`}
        onClick={() => {
          onClickAlarma(17, "Presión de Salida Highflow");
        }}>
        <path d="M344.4 923.1c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M342.7 922.1c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM354 920.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M354.6 919c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM355.5 928.1v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM350.5 935.6c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presion de Salida Highflow */}

      <path
        className="st15"
        d="M719.5 261.6v17.8"
      />
      <text
        transform="translate(479.472 539.404)"
        className="st10 st21">
        {"Cloro"}
      </text>
      <path
        className="st17"
        d="M515.8 459.7h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
      />
      <path
        className="st18"
        d="M505.3 468.7h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
      />
      <path
        className="st17"
        d="M473.7 459.4h15.2c1 0 1.8.8 1.8 1.8v39.2"
      />
      <path
        className="st18"
        d="M484.2 468.4h-14c-.8 0-1.5-.7-1.5-1.5v-14c0-.8.7-1.5 1.5-1.5h14c.8 0 1.5.7 1.5 1.5v14c0 .8-.7 1.5-1.5 1.5z"
      />
      <path
        className="st27"
        d="M475.3 480.4h38.8v40h-38.8z"
      />
      <path
        className="st17"
        d="M514.1 473.7v45.2c0 .7-.4 1.3-.8 1.3h-37.1c-.5 0-.8-.6-.8-1.3v-45.2"
      />
      <circle
        className="st28"
        cx={420.8}
        cy={413.5}
        r={9.2}
      />
      <path
        className="st22"
        d="M111.7 1035.2v-10c0-2.8-2.1-5-4.6-5H74.4c-2.6 0-4.6 2.2-4.6 5v10M90.7 1003.2v17"
      />
      <path
        className="st23"
        d="M95.6 1008.5c0 .9-.7 1.6-1.6 1.6h-6.3c-.9 0-1.6-.7-1.6-1.6 0-.4.2-.8.5-1.1l3.1-3.1c.6-.6 1.5-.6 2.2-.1l3.2 3.2c.3.3.5.7.5 1.1z"
      />
      <path
        className="st1"
        d="M87 1008.5c0-.2.1-.3.2-.4l3.1-3.1c.2-.2.6-.2.9 0l3.1 3.1c.1.1.2.3.2.4 0 .3-.2.6-.6.6h-6.3c-.3 0-.6-.3-.6-.6m-2 0c0 1.4 1.2 2.6 2.6 2.6h6.3c1.4 0 2.6-1.2 2.6-2.6 0-.7-.3-1.3-.8-1.8l-3.1-3.1-.1-.1-.1-.1c-1.1-.9-2.6-.8-3.5.2l-3.1 3.1c-.5.5-.8 1.1-.8 1.8z"
      />
      <text
        transform="translate(72.439 1120.912)"
        className="st10 st21">
        {"Bisulfito"}
      </text>
      <path
        className="st17"
        d="M111.8 1041.2H96.6c-1 0-1.8.8-1.8 1.8v39.2"
      />
      <path
        className="st18"
        d="M101.3 1050.2h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
      />
      <path
        className="st17"
        d="M69.6 1040.9h15.2c1 0 1.8.8 1.8 1.8v39.2"
      />
      <path
        className="st18"
        d="M80.1 1049.9h-14c-.8 0-1.5-.7-1.5-1.5v-14c0-.8.7-1.5 1.5-1.5h14c.8 0 1.5.7 1.5 1.5v14c0 .8-.7 1.5-1.5 1.5z"
      />
      <path
        className="st27"
        d="M71.3 1061.9h38.8v40H71.3z"
      />
      <path
        className="st17"
        d="M110.1 1055.2v45.2c0 .7-.4 1.3-.8 1.3H72.2c-.5 0-.8-.6-.8-1.3v-45.2"
      />
      <path
        className="st22"
        d="M226.6 1035.2v-10c0-2.8-2.1-5-4.6-5h-32.7c-2.6 0-4.6 2.2-4.6 5v10M205.6 1003.2v17"
      />
      <path
        className="st23"
        d="M210.5 1008.5c0 .9-.7 1.6-1.6 1.6h-6.3c-.9 0-1.6-.7-1.6-1.6 0-.4.2-.8.5-1.1l3.1-3.1c.6-.6 1.5-.6 2.2-.1l3.2 3.2c.3.3.5.7.5 1.1z"
      />
      <path
        className="st1"
        d="M201.9 1008.5c0-.2.1-.3.2-.4l3.1-3.1c.2-.2.6-.2.9 0l3.1 3.1c.1.1.2.3.2.4 0 .3-.2.6-.6.6h-6.3c-.3 0-.6-.3-.6-.6m-2 0c0 1.4 1.2 2.6 2.6 2.6h6.3c1.4 0 2.6-1.2 2.6-2.6 0-.7-.3-1.3-.8-1.8l-3.1-3.1-.1-.1-.1-.1c-1.1-.9-2.6-.8-3.5.2l-3.1 3.1c-.5.5-.8 1.1-.8 1.8z"
      />
      <text
        transform="translate(167.378 1120.912)"
        className="st10 st21">
        {"Antiincrustante"}
      </text>
      <path
        className="st17"
        d="M226.7 1041.2h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
      />
      <path
        className="st18"
        d="M216.2 1050.2h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
      />
      <path
        className="st17"
        d="M184.6 1040.9h15.2c1 0 1.8.8 1.8 1.8v39.2"
      />
      <path
        className="st18"
        d="M195.1 1049.9h-14c-.8 0-1.5-.7-1.5-1.5v-14c0-.8.7-1.5 1.5-1.5h14c.8 0 1.5.7 1.5 1.5v14c0 .8-.7 1.5-1.5 1.5z"
      />
      <path
        className="st27"
        d="M186.2 1061.9H225v40h-38.8z"
      />
      <path
        className="st17"
        d="M225 1055.2v45.2c0 .7-.4 1.3-.8 1.3h-37.1c-.5 0-.8-.6-.8-1.3v-45.2"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={165}
        height={251}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAAD7CAYAAAALr1RdAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACBBJREFUeNrs24lS28gWgGHJFhCW zGTmbu//fpkkBENYjHXlW6dnzu1IxpBJgu3vrzolkI0o2r/P0jJNA7wy2ld6Lewm/c8Sqd3w88Qk 5Nj3/feQsh055iAksnx9Fc3IcZJuSyFLzNJxVp1riXnwQpZYpeOqOvekmO0Wj81SzCO69PWsklQ5 P9xyvUrxGLFMX+fHJ+XstsiORcJ1HA1xHMcSXZKzfaLnxH5KmTNkEfEhxX0clxEby3m3QciSGYt8 b0bieAsxcRhluxZyLeLtSMzi8cepjLkpUxYhT4Y4HeI84iKOZ3G+iFnKuUx5mJmylOgi5Jchboa4 HmIRx3mcr4XemClzhuxCyCLiryl+iXNn8ZzjeL5MediZchlC3oWQaxk/D3EZUappLWQegkalLFny OEr0Wr7fhvh9iH/E8V2IeZbKeFcNO8Q8rC2gLOVtSLkW8lNU1KMkZD30tFNS5l6yC9HW0r0NKf81 xH+G+GeImaU80lPKlKl8ZynPo5rO4nnLauh5jPN/irmpfI9J+e+ILOVJNejIkoeZLfOgU8r3WXg0 i8cfqqHnLj22cdDJmfI09ZO/RZbMmfI0Td9tkpKYhzfsrKpMWAt5F8POVfSaueWbHHTGyncZdN6m IeddHC+idHdp6jZ5H/YE3qdsWRJVEXIRw875huF4Y/nOYr6JjHiWtoLydlDXuM2Iv6TMSaoImbcQ 68H4qzuBXZXVpjbOT6ooJXsqS+KwxSzlfMqdqcH4f9mymyi3dcas73fPRy5KSuS5pHYlezSWISfL d9Ns/lRQ/eELQqIZSWztE95sTGazLX5JS0B8o6jPcmj2ggs35MQznGmem9BmW14Q+F4l/sWZEvih UxJASoCUICVASpASICVICZASICVICZASpARICVICpAQpAVICpAQpAVKClAApQUqAlAApQUqAlCAl QEqQEiAlSAmQEiAlSAmQEqQESAlSAqQESAlSAqQEKQFSgpQAKUFKgJQAKUFKgJQgJUBKkBIgJUBK kBIgJUgJkBKkBEgJUgKkBEgJUgKkBCkBUoKUACkBUoKUAClBSoCUICVASpASICVASpASICVICZAS pARICZASpARICVICpAQpAVKClAApAVKClAApQUqAlCAlQEqQ0hKAlAApQUqAlCAlQEqQEiAlQEqQ EiAlSAmQEqQESAlSAqQESAlSAqQEKQFSgpQAKQFSgpQAKUFKgJQgJUBKkBIgJUBKkBIgJUgJkBKk BEgJkBKkBEgJUgKkBCkBUoKUACkBUoKUAClBSoCUICVASoCUICVASpASICVICZASpARICZASpARI CVICpAQpAVICpAQpAVKClAApQUqAlCAlQEqAlCAlQEqQEiAlSAmQEiAlSAmQEqQESAlSAj9Tyj6i SUfg1WXKWlSy4iU86dDsBRcgI16axLZyZ7bFRVcR/XMvDox486Q/3YasmIV8TLGqot2zRWz/5hfk kCVcjUQ/kuRGpezjxcgXWwu4HOIhHR/S9+vH5/Fz7R7L2H6DhIfY8vRVEluORBb0q7XrJi5apFwL eD/EXcRtHNfnjuL589QGtDsuZR3bytlvqDaH0u70lZTZm7vkTUlsj1XG/PMa3RZCrkW8GWIRcZ6E XMY1dlnKLOEsov663fD39RMla6of33cpiz9rCa+r+BI+3W/ImF/1lGUhS7m+jYtdDXEZQp7Ei7N+ zpskZbuDMjaVgPOILh1nKfLP9tUbeZXW7jEdH0cWv99jMcsaFCk/DvFpiM/h0XXKmsuRbLkxU96H 2Yu46OkQx/GCPET2rKVsd1DKIlwXFeAo/s7j9H03sltRZ4bcd99XpSpnhX2Vsp+Qcu3O+yH+iK8X 4VWWcnL6rk0vUl5FdjxKGXIt5EU6v6tStilDFhnfxBswH4ug9WA31urcxrrlUjXVQx2ClJ9DyPeR Na/Cn/tqTZ7cEsqZsmSKNs7fxi86Cym7HZeylOki5Fm0KRcR53FuVYnZJyHvYq2uU++9iMXPPdTj AUmZk9qnEPJjuHMTa7ZV+a7f/bepZK3iF13HC1UySLfFMLALUp4kIX8Z4tf4+0v5PasqRp8ywk0s /ufovT/F94vqBdhXKetdh3omWaT1WaR1HV2PbsMEtUwvXF9NVFnI+Q4POm0q3UXKdXZ8l6bF3B+e xd89izV6SDsTJRt8iLhMpepu04uwh4POqtpO/BLrcJO2FZfblO+p3rIZ6ROOUimrhdzVTHmcpLxK UuZ9ttJHz1PlWISAH1Lv9CFly5sDKN/9xLC8TG/q+/TmzGvRPDXo1NlyrE/oqq2SdkelbKqtoNJT XlR7anl4eRvDT5HyNqT8mIR8nzLlIvWUj9UEvs9S9tUW2dg22ZO3GTf1CPW2x6wSctdEHNsSyn3l l5Qhs5TX0WuexnOLlFdJyj9Slvw80k/u85bQmDub7n03z8mUYxmzrS7WNrt/z7vePJ+nTd37kZ7o KmXKrsqUl6mfvAwhr6uG/hA2z8em8albr5N0z7j4VIne9Q9j5P3KXGaWI1JeRIkv5TtP3pdpuryu Jvd93p/cppw3z3kzdt/4i9o9Wei2Ki/5Ey4PzV93tk6jxM/iefmzAfX93UMV8lkCfquUf+svfoUL 2DbjnyN9SBkx38HqUza9bf7/E1QPIw09fpCU+/jOntp1qLfB+ubre97Lkf03Qr6w2cf4VF72Medp GMq7DlOfzPdvI6T8rgNQHoTqXYecUfsDnLBJ+ZPlbEaO/tuTlK96rcgIAPhB/FeAAQC+3kUcDpqf 7gAAAABJRU5ErkJggg=="
        transform="translate(68.51 724.9)"
      />
      <path
        className="st1"
        d="M127.5 734.9H84.4c-3.5 0-6.3 2.8-6.3 6.3v212.3c0 3.5 2.8 6.3 6.3 6.3H136c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.1 1-.9 2.2-1.4 3.5-1.4h61.7c3.4 0 6.3-2.8 6.3-6.3V741.2c0-3.4-2.8-6.3-6.3-6.3h-90.4z"
      />

      {/* ORP de Alimentacion */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(2, "ORP de Alimentación", false)}>
        <path
          className={getTarjetaClass(2)}
          d="M 78.1 849 h 146.4 v 103.8 H 78.1 z"
        />
        <text
          transform="translate(133.62 868.093)"
          className="st10 st21">
          {"AE-018"}
        </text>
        <text
          transform="translate(126.979 886.84)"
          className="st24">
          <tspan
            x={0}
            y={0}
            className="st16 st9">
            {"ORP de"}
          </tspan>
          <tspan
            x={-15.2}
            y={16.8}
            className="st16 st9">
            {"Alimentaci\xF3n"}
          </tspan>
        </text>

        <text
          transform="translate(142.62 934.16)"
          className="st10 st12">
          {getScaledValue(datosScada.AE018)}
        </text>
        <text
          transform="translate(170.886 933.764)"
          className="st10 st26">
          {"mV"}
        </text>
      </g>
      {/* Campana */}
      <g
        className={`${getTemaAlarma(2)} cursorPointer`}
        onClick={() => {
          onClickAlarma(2, "ORP de Alimentación");
        }}>
        <path d="M97.7 924.1c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-1.9 1.1-2.5 2.2z" />
        <path d="M96 923.1c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.5c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM107.3 921.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.7-2.5-2.2z" />
        <path d="M107.9 920c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.3-2.4-3.7-3zM108.8 929.1v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM103.8 936.6c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin ORP de Alimentacion */}

      {/* Presion de Entrada Highflow */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(16, "Presión de Entrada Highflow", false)}>
        <path
          className={getTarjetaClass(16)}
          d="M 78.1 849 z M 224.5 846.9 H 78.1 V 743 h 146.4"
        />
        <text
          transform="translate(131.62 764.994)"
          className="st10 st21">
          {"PT-021"}
        </text>
        <text
          transform="translate(117.751 783.84)"
          className="st24">
          <tspan
            x={0}
            y={0}
            className="st16 st9">
            {"Presi\xF3n de"}
          </tspan>
          <tspan
            x={-19.8}
            y={16.8}
            className="st16 st9">
            {"Entrada Highflow"}
          </tspan>
        </text>

        <text
          transform="translate(133.62 832.16)"
          className="st10 st12">
          {getScaledValue(datosScada.PT021, 1)}
        </text>
        <text
          transform="translate(174.886 831.764)"
          className="st10 st26">
          {"Bar"}
        </text>
      </g>
      {/* Campana */}
      <g
        className={`${getTemaAlarma(16)} cursorPointer`}
        onClick={() => {
          onClickAlarma(16, "Presión de Entrada Highflow");
        }}>
        <path d="M97.7 821.1c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M96 820.1c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM107.3 818.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M107.9 817c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM108.8 826.1v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM103.8 833.6c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presion de Entrada Highflow */}

      <path
        className="st29"
        d="M89.2 847.9h124"
      />

      <circle
        className="st28"
        cx={147.2}
        cy={987.5}
        r={9.2}
      />
      <path
        className="st30"
        d="M308.7 978.7h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM293.5 982.6l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st30"
        d="m309.1 993.2-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st31"
        d="M301.3 977.7v10"
      />
      <path
        className="st32"
        d="M292.3 969.7h18M301.3 970.7v8"
      />
      <path
        className="st30"
        d="M276.2 951.9c0-6.7-7.8-12.1-17.5-12.1s-17.5 5.5-17.5 12.1h.1c-.1.3-.1.7-.1 1.1v37.6c0 3.5 3.4 6.4 7.6 6.8v6.2h5.2v-6.1h9v6.1h5.2v-6.2c4.5-.2 8-3.2 8-6.8V953c0-.3-.1-.7-.1-1.1h.1z"
      />
      <path
        className="st0"
        d="M279.4 988h9.9M313.7 988h152.9"
      />
      <circle
        className="st28"
        cx={388.7}
        cy={987.5}
        r={9.2}
      />
      <path
        className="st30"
        d="M858.7 978.9H738.9c-3 0-5.5-2.2-5.5-4.9v-17.1c0-2.7 2.4-4.9 5.5-4.9h119.8c3 0 5.5 2.2 5.5 4.9V974c-.1 2.7-2.6 4.9-5.5 4.9z"
      />
      <path
        className="st4"
        d="M859.8 978.9H739.1c-3.1 0-5.7-2.2-5.7-4.9v-17.1c0-2.7 2.6-4.9 5.7-4.9L860 977.9c.6.2.5 1-.2 1z"
      />
      <path
        className="st30"
        d="M858.7 1009.7H738.9c-3 0-5.5-2.2-5.5-4.9v-17.1c0-2.7 2.4-4.9 5.5-4.9h119.8c3 0 5.5 2.2 5.5 4.9v17.1c-.1 2.8-2.6 4.9-5.5 4.9z"
      />
      <path
        className="st4"
        d="M859.8 1009.7H739.1c-3.1 0-5.7-2.2-5.7-4.9v-17.1c0-2.7 2.6-4.9 5.7-4.9l120.9 25.9c.6.3.5 1-.2 1z"
      />
      <path
        className="st0"
        d="M729 996.9h-57.4c-2.8 0-5-2.3-5-5v-26M867.9 996.9h16.4c2.8 0 5-2.3 5-5v-17"
      />
      <path
        d="M723.2 970.9c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        style={{
          fill: "#35ace8"
        }}
      />
      <path
        className="st1"
        d="M723.2 959.2c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />

      {/* Estado de las Bombas de Impulsion */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(18, "Estado Bombas de Impulsión", true)}>
        <image
          style={{
            overflow: "visible",
            opacity: 0.15,
            enableBackground: "new"
          }}
          width={39}
          height={39}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA69JREFUeNrsmOty2jAQhW1ZBmIg zbVN7+//XG1n0qQpDcRAMEaVO2czJxsZbJdefsQzZwzGrD5ptauVouj5er46X/F/Y0TZ4ruD5HL/ AjCuUUSArub7HwUUEBNQrEZto+TovndADZZ4Wa8Ud0uQArJWKgPAewEUOIbqeQ2gPr6ngBS4e6+V 15I+Fwo26HrbES4FTOY19BpD1ecD/Jag8Qpm4ZUrzQlWQJ8Eku0A1wPEyOuF1wl0jO9DjKYALgEz 85p6/fCaeN3iWQ7QKARpO4xcBXcIqFekU68jgNcBVnA3XtfQDRhm1N4jSNsiICwaHgHmtdc7r7f4 fEYj2CPAAi6+I0B5rw/bOgVtmgJGyrVDuPLC673XR9wv8HyMTliK4hIuXOAdGeUDan+D9zhgfv3f Nhy9FA1Xrj3HiFVgHzCCZ/jtAO8mgTQzhDLYStHOGoGyooB5iOomLhbADL0XwDe4n+N5RnBGJeqU UpLkS0fuzzEFJGAEMrYNli9x7wgg1Wi9hE4wchnesQpOLk7qknsFboqolsgWyHgbYKSCow/3SFo5 xXwKwenk76ij7PYxOnysol+8sI5qels3/wTwCBqrOWdqViYuHgytQAOal5zgH3XU7JiDPIIZejmm ZLwLrq4c46WyT0uk1fbMDkM8BweAzGAw3eLWtus5FxnMFJsdvZWJnVAkpiqVtIULDYJRtmJ2Yehq UgX/Ti3pAnVisE2zw8iGsnxBkurD7QGwDNSJD++ZLX+OaBVYITfNoaUqk1wLsE3Ari67HkbUNOjl GkA5qo4Zsv6iJaRTS5+sz7rTjQF5Eb8H4C0qEqnlmkI6KhwK8sYMtqbo9BK/N1qLdW/vYOy71zcq DhK1izOBIBK3FoAQWxPYm1CHC+5s0jAtGEo1PZINADoFVdJ8E7gK6Mrri9dn3K8BveCKJmmZs3jR N2pzvqH5I1FZENgcrqxG7CugPuF+iedSKJRNClYdyUs00KP/rdHjGYqIEZVdhv6/UpXLFQFe4llO QeLaVNSOdmc5NVwS9AQVzqEq+SMVZFPak1xiJK/ItYVO2rYBXEQTPFKjMqdGjwlQNk0uADjB+xIc U9h5kmLaLFd6ge9RuTSiffFIVdZRYG88pXya02a+DKWqLlWICYAOqJ7rq8qaU5Uk54U6YSjrjkC6 Hn3ENZVOqGzipa3Yckbj9nl41OR0K1bHbpwX+Xu0z8OjbaBxoMSPAptyfV74Vw4w65J7qEJqddK6 zyPgXfY61Y4/BRgAuOqtItEH4vQAAAAASUVORK5CYII="
          transform="translate(269.055 411.061) scale(.8974)"
        />
        <circle
          className="st1"
          cx={286.9}
          cy={428.8}
          r={10.9}
        />

        {/* Color estado */}
        <circle
          fill={getColor(datosScada.bombasImpulsion)}
          cx={286.9}
          cy={428.6}
          r={8}
        />
      </g>

      {/* Estado de las Bombas de Alta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(19, "Estado Bombas de Alta", true)}>
        <image
          style={{
            overflow: "visible",
            opacity: 0.15,
            enableBackground: "new"
          }}
          width={39}
          height={39}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA5lJREFUeNrsmHtT00AUxbvJpqFY WkFFUcfv/73EF88CfaSkSdw45zLHO7d0Ux76B5k5Q0mT7S/3sXs2vd7L8XL828M907jN/wDo6K8F 2GwD7B4JjJXcA2jpyQAZiJUSpANEDVX0uY4BdQ+AE5hWPigjeYIUsFVQCa2gahOo3xJOwFqYftBO 0ABqP+cE2ULcBi2DCtIS5wW2turTbQnnAdYCDYP2gkbQq6BdfO/w4y3MPGiqNCPYlUp95wgyXA6Q cdBB0BtonyBzAiwAcx10FXQZdBE0wbkprinxW3eQfoua6wOghXkXdBT0Ieg9YMf4vo97BHAOmBbs LOg06ISuk2yWFMHGd4TLkL7XQYdBn0kCuIdrMopGW2sLRGqC60YokYzguFnqGECe3zwaYA/p/Bj0 BfoEYI5eqrp4CcgxxpAySFSnryjFzneoPU7tIQAlekc4P1Qd3KNoDBBZ6fQ+wUmXc2dXmwA5ehbg EcSp3UHKEpU2SbUnJRTZNvU3kHT2KjbFiUqvNEert6jHoYqKMwD1UlgDboa6vKDOzhDJykdGLwPA EEAHqmNzXJMacyv/n9LyN8ADj6ERSkBKpL12lURGMKNJeUQDboJb53b4oXcxDtemjBXVJAKYY7Ah Ddg3ai7GnCRqDe/TWCkDJpFuxRtrbk5wySMZDu2EzIGdYT55mfPGYF3WdXfP75npiz0amkDrWMMZ OeZaf+jX3KQHYD8nk2lp+DkXCSV/LZ/4F2gS+YQlLVVzqJC5SlukyDH5ga1VpI5JMQPKYn9NFmmh vFzTEa4gnzjHePLQTcxKwmkoyI2Ixuhor6YQ3Ti83FXK3YhHvKJlrtzkZjgSNT3tDcDOlDlgY+CN eVFqagU48YatcT2HJmRc7zKSRpoFa3LNjBVEd3pFGbiltfcaD/kz6Bj6AdAprvtTh+kDt5rWtlJ3 5pL2JJKBUwB9hb7j3ASplxmiibX8UtgL1EpGXo6jImkf0GTOqZ3h/jZSv4K+QSc4v+D6i9mTcC3K 7syRXSoRmStYpX1yJWK9GqPJzmlPcoJ7p9aM4DtMrDX9EO81JCpnsGK8J0no4Qrq2ktognt5V1dx YFzH+kuUecjJLg2hXeWsG7Unmal9scylDLcVoG4S7ugc2iHrxN2tO7kwlszKWt+3eTfjjG6+z+k0 FMVKvZfRYM1jvjxaB5sYFqox5sgnfbtlgVqT+7p3hL3neD+4bhwXabWijt8CDADbu7Hn+XztjQAA AABJRU5ErkJggg=="
          transform="translate(498.203 959.643) scale(.8974)"
        />
        <circle
          className="st1"
          cx={516.1}
          cy={977.4}
          r={10.9}
        />

        {/* Color estado */}
        <circle
          fill={getColor(datosScada.bombasAlta)}
          cx={516.1}
          cy={977.2}
          r={8}
        />
      </g>

      <path
        className="st0"
        d="M888.3 1199.9H758.9c-2.8 0-5-2.3-5-5v-180"
      />
      <circle
        className="st28"
        cx={835.9}
        cy={1199.6}
        r={9.2}
      />
      <circle
        className="st28"
        cx={669.6}
        cy={996.9}
        r={9.2}
      />
      <path
        className="st0"
        d="M942.7 1177h85.9"
      />
      <path
        className="st20"
        d="M1031.5 1183c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st1"
        d="M1031.5 1171.3c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st30"
        d="M1166.2 1189.4h-119.8c-3 0-5.5-2.2-5.5-4.9v-17.1c0-2.7 2.4-4.9 5.5-4.9h119.8c3 0 5.5 2.2 5.5 4.9v17.1c0 2.7-2.5 4.9-5.5 4.9z"
      />
      <path
        className="st4"
        d="M1167.4 1189.4h-120.7c-3.1 0-5.7-2.2-5.7-4.9v-17.1c0-2.7 2.6-4.9 5.7-4.9l120.9 25.9c.6.2.4 1-.2 1z"
      />
      <circle
        className="st28"
        cx={989.1}
        cy={1177}
        r={9.2}
      />
      <path
        className="st0"
        d="M1077.5 1193.1v38.2c0 2.5 2.1 4.6 4.6 4.6H1187M1182 1290.9h-9.3c-2.8 0-5-2.3-5-5v-49.4M1230.4 1236.5v49.4c0 2.8-2.3 5-5 5h-8.5"
      />
      <path
        className="st30"
        d="M1206.3 1227h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM1191.1 1230.9l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st30"
        d="m1206.7 1241.5-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st31"
        d="M1198.9 1226v10"
      />
      <path
        className="st32"
        d="M1189.9 1218h18M1198.9 1219v8"
      />
      <path
        className="st30"
        d="M1212.8 1297.2H1186c-1.2 0-2.2-1-2.2-2.2v-9.7c0-1.2 1-2.2 2.2-2.2h26.7c1.2 0 2.2 1 2.2 2.2v9.7c0 1.2-.9 2.2-2.1 2.2z"
      />
      <path
        className="st34"
        d="M1199.4 1272.2v10.9M1190.7 1272.2h17.6"
      />
      <path
        className="st0"
        d="M1310.7 1266.7v-26.1c0-2.3-1.8-4.1-4.1-4.1H1210"
      />
      <path
        className="st16"
        d="M1253 1282.3h124.8v97.7H1253z"
      />
      <path
        className="st17"
        d="M1377.7 1266v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1V1266"
      />
      <text
        transform="translate(1297.367 1403.105)"
        className="st24">
        <tspan
          x={0}
          y={0}
          className="st10 st21">
          {"TK-003"}
        </tspan>
        <tspan
          x={-3.7}
          y={13.2}
          className="st10 st21">
          {"Rechazo"}
        </tspan>
      </text>
      <path
        className="st16"
        d="M1252.3 1012.4h124.8v97.7h-124.8z"
      />
      <path
        className="st17"
        d="M1376.9 996.1v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1V996.1"
      />
      <text
        transform="translate(1298.76 1133.253)"
        className="st24">
        <tspan
          x={0}
          y={0}
          className="st10 st21">
          {"TK-002"}
        </tspan>
        <tspan
          x={0.6}
          y={13.2}
          className="st10 st21">
          {"Mezcla"}
        </tspan>
      </text>
      <path
        className="st20"
        d="M1304.4 1264.5c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
      />
      <path
        className="st1"
        d="M1316.1 1264.5c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <path
        className="st0"
        d="M1045.4 978.4v149.3c0 4.3 3.4 7.7 7.7 7.7h135c4.1 0 7.3 3.3 7.3 7.3v30.6c0 2.3-1.8 4.1-4.1 4.1h-16.6"
      />
      <path
        className="st20"
        d="M1039.2 978.4c0 1 .8 1.9 1.9 1.9h9c1 0 1.9-.8 1.9-1.9 0-.5-.2-1-.5-1.3l-4.5-4.5c-.7-.7-1.8-.7-2.6-.1l-.1.1-4.5 4.5c-.5.4-.6.8-.6 1.3z"
      />
      <path
        className="st1"
        d="M1050.9 978.4c0 .5-.4.9-1 .9h-9c-.6 0-.9-.5-.9-.9 0-.2.1-.4.3-.6l4.5-4.5c.4-.3 1-.3 1.3 0l4.5 4.5c.2.2.3.4.3.6m2 0c0-.8-.3-1.5-.9-2l-4.5-4.5c-1-1.1-2.7-1.1-3.9-.2l-.1.1-.1.1-4.5 4.5c-.5.5-.8 1.2-.8 2 0 1.6 1.3 2.9 2.9 2.9h9c1.6 0 2.9-1.3 2.9-2.9z"
      />
      <circle
        className="st28"
        cx={1077.4}
        cy={1214.2}
        r={9.2}
      />
      <path
        className="st20"
        d="M888.7 1205.6c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st1"
        d="M888.7 1193.9c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st0"
        d="M1309.1 995.8v-26.1c0-2.3-1.8-4.1-4.1-4.1H867.9"
      />
      <path
        className="st20"
        d="M1302.8 993.6c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
      />
      <path
        className="st1"
        d="M1314.5 993.6c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <path
        className="st22"
        d="M1235.3 1005.9v-10c0-2.8-2.1-5-4.6-5H1198c-2.6 0-4.6 2.2-4.6 5v10M1214.3 973.9v17"
      />
      <path
        className="st23"
        d="M1219.2 979.1c0 .9-.7 1.6-1.6 1.6h-6.3c-.9 0-1.6-.7-1.6-1.6 0-.4.2-.8.5-1.1l3.1-3.1c.6-.6 1.5-.6 2.2-.1l3.2 3.2c.3.3.5.7.5 1.1z"
      />
      <path
        className="st1"
        d="M1210.6 979.1c0-.2.1-.3.2-.4l3.1-3.1c.2-.2.6-.2.9 0l3.1 3.1c.1.1.2.3.2.4 0 .3-.2.6-.6.6h-6.3c-.3 0-.6-.3-.6-.6m-2 0c0 1.4 1.2 2.6 2.6 2.6h6.3c1.4 0 2.6-1.2 2.6-2.6 0-.7-.3-1.3-.8-1.8l-3.1-3.1-.1-.1-.1-.1c-1.1-.9-2.6-.8-3.5.2l-3.1 3.1c-.5.5-.8 1.1-.8 1.8z"
      />
      <text
        transform="translate(1201.055 1091.586)"
        className="st10 st21">
        {"Soda"}
      </text>
      <path
        className="st17"
        d="M1235.4 1011.9h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
      />
      <path
        className="st18"
        d="M1224.9 1020.9h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
      />
      <path
        className="st17"
        d="M1193.3 1011.6h15.2c1 0 1.8.8 1.8 1.8v39.2"
      />
      <path
        className="st18"
        d="M1203.8 1020.6h-14c-.8 0-1.5-.7-1.5-1.5v-14c0-.8.7-1.5 1.5-1.5h14c.8 0 1.5.7 1.5 1.5v14c0 .8-.7 1.5-1.5 1.5z"
      />
      <path
        className="st27"
        d="M1194.9 1032.6h38.8v40h-38.8z"
      />
      <path
        className="st17"
        d="M1233.7 1025.9v45.2c0 .7-.4 1.3-.8 1.3h-37.1c-.5 0-.8-.6-.8-1.3v-45.2"
      />
      <circle
        className="st28"
        cx={1083.3}
        cy={965.9}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={165}
        height={250}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAAD6CAYAAAArxDz7AAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB75JREFUeNrs2gtzGssRhmEWgZAl X5Kck+T//7/EF90FQpulqqfSGc8COvZxBDxvVdfKYC3F6uWb7lkmE+AN0r2Rc+A46X+FVN2W3yMn tknZv1bW7hX/p2sUKbFLzj7J2DceazLbQ8pS03TM1ZETI2n50qg+jlsTdLaHlBv5zqqaRWVBLe1k zD8XEddDPVfHdZK0Kedsh5RZxPlQ56nmlaAdMYlZJeVGxNVQy6pWSdBmcs72kHIj4GKod6kuos7j HGcNOXGa5KQsIj4OdR/1EK4sQ8b1Pkt5V/WR8xDwcqj3Q32Ieh+PLULOWkyCnm5i9mnZfgoRb6Ou w5WuGoDWdWqOJeY0njuPhNzI+Neovwz1KeR8l1Kz1Wvi9OQsabkKMe+G+jbU1wi6adWDvlT95ndi 1hN4ScurEPG3oX6P2gj6MaXmzISOhpibtLyJEFuEI6X3fE7D0HeD0FhiloFnkcT821D/GOqfIenH eC6LaRknZi3mdQRckXIZSfoYx2UKtH5bjzlNQ89FJeYmLf8ex08pMQ0/yMNPFvMi/HhJS/ttPH6f es69hp88jZfB52PqM/NSnocfiSkxS2qu0vK9joS8qWaT+ViotZbyaRp+6qn8fZrKywvMK+uJaTIv YmYpr8KjdyHsfNtKO7bBnpfzsrG+mPx3//IibRXNLeNoLOddHBepzpNTeSen/v5FP2tM5F2j12xV uetzZpsIDerb17OGM6PebLvzkzfa63vlvsSBbdT+jFU35s90j5N3IyciI14r6t7uTPc86YSM+BVC vkbMbS8E/BFZJ7s8mu4h4ISE+NWYpkFMgJggJkBMEBMgJkBMEBMgJogJEBPEBIgJEBPEBIgJYgLE BDEBYgLEBDEBYoKYADEBYoKYADFBTICYICZATICYICZATBATICaICRATICaICRATxASICWICxASI CWICxAQxAWICxAQxAWKCmAAxQUyAmAAxQUyAmCAmQEwQEyAmQEwQEyAmiAkQEyAmiAkQE8QEiAli AsQEiAliAsQEMQFigpgAMQFigpgAMUFMgJggJkBMgJggJkBMEBMgJkBMEBMgJogJEBPEBIgJEBPE BIgJYgLEBDEBYgLEBDEBYoKYADFBTICYADFBTICYICZATICYICZATBATICaICRATICaICRATxASI CWICxASICWICxAQxAWICxAQxAWKCmAAxQUyAmAAxQUyAmCAmQEwQEyAmQEwQEyAmiAkQE8QEiAkQ E8QEiAliAsQEiAliAsQEMQFigpgAMQFigpgAMUFMgJggJkBMgJggJkBMEBMgJojpEoCYADFBTICY ICZATICYICZATBATICaICbxdMftUk3QE3mRi9g1pgdc6NNnl0fQPnAj404NsuudJX6IkJn5U0r1a w+meQpZaR700ZAV2JWYr4JrMtqz7RcRVqudUxy5m9xP7qVMUshVodbCNCjobOXE52XMI+RT1GMdl PD6LP+DZ5Hi2nrofELXf0p+fmpTPyZ9WrUfaw35MzJd04mWI+DDUXarLoc7jj9UnMbufmDb/TzFb 1W95X/2WledUWp383tcp0B5T5VDLck52JWafTlzELFLeDHU91PuhFiFiEXgW/54esJi1iNNGtdJz rIc6tYGxr1bbjTv3Q92GO7dR9yHpqmoJd4qZe8vHJOXXSMos5ebF3w01b6TmoS3dXWpLSs2iztL7 m1aCtXqp50ZPdQo3LLI/TyHht6G+RF0nOZ9San73oZ2NnDxH8V2cfBHLd5Fy89yHEPM8peahJWbX kHIedZ5qHu+xXtLrfmpZLVd1P3WsYvbV9SjubGT891D/GupzuHSXUrO+Nt+J2Tea12L9dRKvJOXt iJjdgYo5TVJuPoQX8d4u4+dF4wPYVwNi6aUeop7SkrU+8iW93+LOl4aYT9V1meyTmPnk0yTcS1zo h3jBqyTmWaMXOyQxy9JdpLyKfvpDHC/j/Ze2patanvu44KWXuqvkXE+Of9+3Hpwf4lp8i1bwSyMx m9tGsx0N7KqaSssL3iUpF5WYhzaZZzHnIeVlyPgp9UNleb5I22Q5Gcpw+DWON+kPsDxyMftGj7lM 16YMQGUIeojnn1vL+LZ9zHq6avUO9fJ2yMNPEfM8ifmxatSf0rB3Hr/7HBf5JpLgc6TC19ToPzb+ CKcw/JQQq9ubvIqM3qSZbbF/UvVFdUTngaAl5aEn5sdqOS4X9yrt4a6qyfNzNPpfKjFXJ5KYdStY D4TLqudeT15556feDukb0/pZtX85HdmGOaThp0zil0nKIuR9amEW8btZzCLl55SY91WT/3LkE3lr C+25sX2280M627Nv6KpPwqoS8tAm8V1T+X2SMot5M5KY12mv7ktjGV9X0+ex3wka+xJQP3nllzj2 jeg+Tefd5HhuQU6qyTwvO8tq6+NypMe8juS8jmS9T71lvWSd2i3K1t2vrddg9soXyT93B7p0bxO0 teysKjEvIlXrqTzfcntIYh/7/uU+S3u/5bkfEnPXC3RHcNHztlhrunwIKc9H9jFbX1Q4RSlfJeCu ZQz/K2e+PTlLQ1HehZhUzX2+Dfl84lL+tP4KbTnrL3XUd7dyso5NnKQk5p8yEHVp56G1A9GPTJ0T UhLzVwm6zxeFpSQx39x1IiQA4BfzHwEGADR3H0nm/xGLAAAAAElFTkSuQmCC"
        transform="translate(1198.926 703.9)"
      />
      <path
        className="st1"
        d="M1258 713.2h-43.1c-3.5 0-6.3 2.8-6.3 6.3v212.3c0 3.5 2.8 6.3 6.3 6.3h51.6c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.1 1-.9 2.2-1.4 3.5-1.4h61.7c3.4 0 6.3-2.8 6.3-6.3V719.5c0-3.4-2.8-6.3-6.3-6.3H1258z"
      />

      {/* pH de Mezcla */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(15, "pH de Mezcla", false)}>
        <path
          className={getTarjetaClass(15)}
          d="M 1208.6 827.4 H 1355 v 103.8 h -146.4 z"
        />
        <text
          transform="translate(1264.133 846.463)"
          className="st10 st21">
          {"AE-032"}
        </text>
        <text
          transform="translate(1263.713 865.211)"
          className="st24">
          <tspan
            x={0}
            y={0}
            className="st16 st9">
            {"pH de"}
          </tspan>
          <tspan
            x={-3.5}
            y={16.8}
            className="st16 st9">
            {"Mezcla"}
          </tspan>
        </text>

        <text
          transform="translate(1264.133 912.53)"
          className="st10 st12">
          {getScaledValue(datosScada.AE032)}
        </text>
        <text
          transform="translate(1305.4 912.135)"
          className="st10 st26">
          {"pH"}
        </text>
      </g>
      {/* Campana */}
      <g
        className={`${getTemaAlarma(15)} cursorPointer`}
        onClick={() => {
          onClickAlarma(15, "pH de Mezcla");
        }}>
        <path d="M1228.2 902.4c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-1.9 1.1-2.5 2.2z" />
        <path d="M1226.5 901.4c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9.7-1.3 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM1237.8 900.1c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.7-2.5-2.2z" />
        <path d="M1238.4 898.3c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.3-2.4-3.7-3zM1239.3 907.4v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1234.3 914.9c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* pH de Mezcla */}

      {/* Conductividad de Mezla */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(14, "Conductividad Mezcla", false)}>
        <path
          className={getTarjetaClass(14)}
          d="M 1211 824 z M 1355 825.2 h -146.4 V 721.4 H 1355"
        />
        <text
          transform="translate(1262.133 743.365)"
          className="st10 st21">
          {"AE-031"}
        </text>
        <text
          transform="translate(1227.637 762.211)"
          className="st24">
          <tspan
            x={0}
            y={0}
            className="st16 st9">
            {"Conductividad de"}
          </tspan>
          <tspan
            x={31.9}
            y={16.8}
            className="st16 st9">
            {"Mezcla"}
          </tspan>
        </text>

        <text
          transform="translate(1271.133 810.53)"
          className="st10 st12">
          {getScaledValue(datosScada.AE031)}
        </text>
        <text
          transform="translate(1302.4 810.135)"
          className="st10 st26">
          {"\xB5S/cm"}
        </text>
      </g>
      {/* Campana */}
      <g
        className={`${getTemaAlarma(14)} cursorPointer`}
        onClick={() => {
          onClickAlarma(14, "Conductividad Mezcla");
        }}>
        <path d="M1228.2 799.4c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M1226.5 798.4c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9.7-1.3 1.8-2.2 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM1237.8 797.1c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M1238.4 795.3c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM1239.3 804.4v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1234.3 811.9c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Conductividad Mezcla */}

      <path
        className="st29"
        d="M1219.7 826.2h124"
      />

      <circle
        className="st28"
        cx={1277.7}
        cy={965.9}
        r={9.2}
      />
      <path
        className="st20"
        d="M882.7 978.4c0 1 .8 1.9 1.9 1.9h9c1 0 1.9-.8 1.9-1.9 0-.5-.2-1-.5-1.3l-4.5-4.5c-.7-.7-1.8-.7-2.6-.1l-.1.1-4.5 4.5c-.5.4-.6.8-.6 1.3z"
      />
      <path
        className="st1"
        d="M894.4 978.4c0 .5-.4.9-1 .9h-9c-.6 0-.9-.5-.9-.9 0-.2.1-.4.3-.6l4.5-4.5c.4-.3 1-.3 1.3 0l4.5 4.5c.2.2.3.4.3.6m2 0c0-.8-.3-1.5-.9-2l-4.5-4.5c-1-1.1-2.7-1.1-3.9-.2l-.1.1-.1.1-4.5 4.5c-.5.5-.8 1.2-.8 2 0 1.6 1.3 2.9 2.9 2.9h9c1.6 0 2.9-1.3 2.9-2.9z"
      />
      <path
        className="st16"
        d="M330.3 672.4h124.8v97.7H330.3z"
      />
      <path
        className="st17"
        d="M455 656.1v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1V656.1"
      />
      <text
        transform="translate(376.845 793.211)"
        className="st24">
        <tspan
          x={0}
          y={0}
          className="st10 st21">
          {"TK-004"}
        </tspan>
        <tspan
          x={8.9}
          y={13.2}
          className="st10 st21">
          {"CIP"}
        </tspan>
      </text>
      <path
        className="st0"
        d="M535.1 736.2h35.5"
      />
      <path
        className="st30"
        d="M590 727h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6H590c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM574.8 730.9l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st30"
        d="m590.4 741.5-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st31"
        d="M582.6 726v10"
      />
      <path
        className="st32"
        d="M573.6 718h18M582.6 719v8"
      />
      <path
        className="st15"
        d="M594.6 736.2h2.2c4.7 0 8.5 3.8 8.5 8.5V949"
      />
      <path
        className="st20"
        d="M598.8 952.1c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
      />
      <path
        className="st1"
        d="M610.5 952.1c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <path
        className="st15"
        d="M431.2 663.8v-16.4c0-2.8 2.3-5 5-5h111.9c2.8 0 5 2.3 5 5V736"
      />
      <path
        className="st20"
        d="M424.9 661.6c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
      />
      <path
        className="st1"
        d="M436.6 661.6c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <path
        className="st15"
        d="M687.2 629.4h442.1c5.7 0 10.3 4.6 10.3 10.3v325.1M402.7 663.8v-24.1c0-5.7 4.6-10.3 10.3-10.3h252.2"
      />
      <path
        className="st20"
        d="M396.4 661.6c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
      />
      <path
        className="st1"
        d="M408.1 661.6c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <path
        className="st20"
        d="M1176.5 952.1c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
      />
      <path
        className="st1"
        d="M1188.2 952.1c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <circle
        className="st28"
        cx={993.4}
        cy={444.9}
        r={9.2}
      />
      <circle
        className="st28"
        cx={1237.9}
        cy={444.9}
        r={9.2}
      />
      <path
        className="st22"
        d="M1127.9 485.2v-10c0-2.8-2.1-5-4.6-5h-32.7c-2.6 0-4.6 2.2-4.6 5v10M1107 453.2v17"
      />
      <path
        className="st23"
        d="M1111.8 458.5c0 .9-.7 1.6-1.6 1.6h-6.3c-.9 0-1.6-.7-1.6-1.6 0-.4.2-.8.5-1.1l3.1-3.1c.6-.6 1.5-.6 2.2-.1l3.2 3.2c.3.3.5.7.5 1.1z"
      />
      <path
        className="st1"
        d="M1103.2 458.5c0-.2.1-.3.2-.4l3.1-3.1c.2-.2.6-.2.9 0l3.1 3.1c.1.1.2.3.2.4 0 .3-.2.6-.6.6h-6.3c-.3 0-.6-.3-.6-.6m-2 0c0 1.4 1.2 2.6 2.6 2.6h6.3c1.4 0 2.6-1.2 2.6-2.6 0-.7-.3-1.3-.8-1.8l-3.1-3.1-.1-.1-.1-.1c-1.1-.9-2.6-.8-3.5.2l-3.1 3.1c-.5.5-.8 1.1-.8 1.8z"
      />
      <text
        transform="translate(1093.706 570.895)"
        className="st10 st21">
        {"Soda"}
      </text>
      <path
        className="st17"
        d="M1128 491.2h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
      />
      <path
        className="st18"
        d="M1117.5 500.2h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
      />
      <path
        className="st17"
        d="M1085.9 490.9h15.2c1 0 1.8.8 1.8 1.8v39.2"
      />
      <path
        className="st18"
        d="M1096.4 499.9h-14c-.8 0-1.5-.7-1.5-1.5v-14c0-.8.7-1.5 1.5-1.5h14c.8 0 1.5.7 1.5 1.5v14c0 .8-.7 1.5-1.5 1.5z"
      />
      <path
        className="st27"
        d="M1087.5 511.9h38.8v40h-38.8z"
      />
      <path
        className="st17"
        d="M1126.3 505.2v45.2c0 .7-.4 1.3-.8 1.3h-37.1c-.5 0-.8-.6-.8-1.3v-45.2"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={165}
        height={250}
        xlinkHref="data:image/png;base64,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 4R8BBgB81qHhwO1wdAAAAABJRU5ErkJggg=="
        transform="translate(905.51 453.9)"
      />
      <path
        className="st1"
        d="M1011.4 694.2h43.1c3.5 0 6.3-2.8 6.3-6.3V475.6c0-3.5-2.8-6.3-6.3-6.3h-51.6c-1.2 0-2.4-.4-3.4-1.2l-.4-.3c-6.5-6.5-6.5-6.5-12.9.1-1 .9-2.2 1.4-3.5 1.4H921c-3.4 0-6.3 2.8-6.3 6.3v212.3c0 3.4 2.8 6.3 6.3 6.3h90.4z"
      />

      {/* Caudal de Alimentacion */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(7, "Caudal de Alimentación", false)}>
        <path
          className={getTarjetaClass(7)}
          d="M 914.7 584.1 h 146.4 v 98.9 H 914.7 z M 1061 584"
        />
        <text
          transform="translate(970.207 603.16)"
          className="st10 st21">
          {"FIT-016"}
        </text>
        <text
          transform="translate(956.553 621.908)"
          className="st24">
          <tspan
            x={0}
            y={0}
            className="st16 st9">
            {"Caudal de"}
          </tspan>
          <tspan
            x={-8.2}
            y={16.8}
            className="st16 st9">
            {"Alimentaci\xF3n"}
          </tspan>
        </text>
        <text
          transform="translate(970.207 669.226)"
          className="st10 st12">
          {getScaledValue(datosScada.FIT016)}
        </text>
        <text
          transform="translate(1011.473 668.83)"
          className="st10 st26">
          {"l/s"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(7)} cursorPointer`}
        onClick={() => {
          onClickAlarma(7, "Caudal de Alimentación");
        }}>
        <path d="M934.3 659.1c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-1.9 1.1-2.5 2.2z" />
        <path d="M932.6 658.1c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.5c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM943.9 656.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.7-2.5-2.2z" />
        <path d="M944.5 655c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.3-2.4-3.7-3zM945.4 664.1v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM940.4 671.6c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Caudal de Alimentacion */}

      {/* E.C Alimentacion */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(9, "E.C de Alimentación", false)}>
        <path
          className={getTarjetaClass(9)}
          d="M 914.7 584.1 z M 1061.1 581.9 H 914.7 V 478.1 h 146.4"
        />
        <text
          transform="translate(968.207 500.061)"
          className="st10 st21">
          {"AE-020"}
        </text>
        <text
          transform="translate(964.46 518.908)"
          className="st24">
          <tspan
            x={0}
            y={0}
            className="st16 st9">
            {"E.C. de"}
          </tspan>
          <tspan
            x={-16.7}
            y={16.8}
            className="st16 st9">
            {"Alimentaci\xF3n"}
          </tspan>
        </text>
        <text
          transform="translate(958.207 567.226)"
          className="st10 st12">
          {getScaledValue(datosScada.AE020, 0, 1)}
        </text>
        <text
          transform="translate(1007.473 566.83)"
          className="st10 st26">
          {"\xB5S/cm"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(9)} cursorPointer`}
        onClick={() => {
          onClickAlarma(9, "E.C de Alimentación");
        }}>
        <path d="M934.3 556.1c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M932.6 555.1c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM943.9 553.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M944.5 552c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM945.4 561.1v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM940.4 568.6c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin E.C de Alimentacion */}

      <path
        className="st29"
        d="M925.8 582.9h124"
      />

      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={165}
        height={250}
        xlinkHref="data:image/png;base64,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 4R8BBgB81qHhwO1wdAAAAABJRU5ErkJggg=="
        transform="translate(1150.51 453.9)"
      />
      <path
        className="st1"
        d="M1256.4 694.2h43.1c3.5 0 6.3-2.8 6.3-6.3V475.6c0-3.5-2.8-6.3-6.3-6.3h-51.6c-1.2 0-2.4-.4-3.4-1.2l-.4-.3c-6.5-6.5-6.5-6.5-12.9.1-1 .9-2.2 1.4-3.5 1.4H1166c-3.4 0-6.3 2.8-6.3 6.3v212.3c0 3.4 2.8 6.3 6.3 6.3h90.4z"
      />

      {/* pH de Alimentacion */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(0, "pH de Alimentación", false)}>
        <path
          className={getTarjetaClass(0)}
          d="M 1159.7 584.1 h 146.4 v 103.8 h -146.4 z"
        />
        <text
          transform="translate(1215.233 603.16)"
          className="st10 st21">
          {"AE-016"}
        </text>
        <text
          transform="translate(1214.813 621.908)"
          className="st24">
          <tspan
            x={0}
            y={0}
            className="st16 st9">
            {"pH de"}
          </tspan>
          <tspan
            x={-21.4}
            y={16.8}
            className="st16 st9">
            {"Alimentaci\xF3n"}
          </tspan>
        </text>

        <text
          transform="translate(1215.233 669.226)"
          className="st10 st12">
          {getScaledValue(datosScada.AE016)}
        </text>
        <text
          transform="translate(1256.5 668.83)"
          className="st10 st26">
          {"pH"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(0)} cursorPointer`}
        onClick={() => {
          onClickAlarma(0, "pH de Alimentación");
        }}>
        <path d="M1179.3 659.1c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-1.9 1.1-2.5 2.2z" />
        <path d="M1177.6 658.1c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9.7-1.3 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM1188.9 656.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.7-2.5-2.2z" />
        <path d="M1189.5 655c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.3-2.4-3.7-3zM1190.4 664.1v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1185.4 671.6c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin pH de Alimentacion */}

      {/* Temperatura de Alimentacion */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(13, "Temperatura de Alimentación", false)}>
        <path
          className={getTarjetaClass(13)}
          d="M 1159.7 584.1 z M 1306.1 581.9 h -146.4 V 478.1 h 146.4"
        />
        <text
          transform="translate(1213.233 500.061)"
          className="st10 st21">
          {"TT-019"}
        </text>
        <text
          transform="translate(1192.757 518.908)"
          className="st24">
          <tspan
            x={0}
            y={0}
            className="st16 st9">
            {"Temperatura"}
          </tspan>
          <tspan
            x={-9.7}
            y={16.8}
            className="st16 st9">
            {"de Alimentaci\xF3n"}
          </tspan>
        </text>
        <text
          transform="translate(1215.233 567.226)"
          className="st10 st12">
          {getScaledValue(datosScada.TT019)}
        </text>
        <text
          transform="translate(1256.5 566.83)"
          className="st10 st26">
          {"\xB0C"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(13)} cursorPointer`}
        onClick={() => {
          onClickAlarma(13, "Temperatura de Alimentación");
        }}>
        <path d="M1179.3 556.1c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M1177.6 555.1c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9.7-1.3 1.8-2.2 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM1188.9 553.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M1189.5 552c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM1190.4 561.1v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1185.4 568.6c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>
      {/* Fin Temperatura de Alimentacion */}

      <path
        className="st29"
        d="M1170.8 582.9h124"
      />

      <path
        className="st30"
        d="M683.7 620h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM668.5 623.9l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st30"
        d="m684.1 634.5-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st31"
        d="M676.3 619v10"
      />
      <path
        className="st32"
        d="M667.3 611h18M676.3 612v8"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={165}
        height={250}
        xlinkHref="data:image/png;base64,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 +L8AAwBxFxWIT7bHlgAAAABJRU5ErkJggg=="
        transform="translate(1004.51 703.9)"
      />
      <path
        className="st1"
        d="M1063.6 713.5h-43.1c-3.5 0-6.3 2.8-6.3 6.3v212.3c0 3.5 2.8 6.3 6.3 6.3h51.6c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.1 1-.9 2.2-1.4 3.5-1.4h61.7c3.4 0 6.3-2.8 6.3-6.3V719.8c0-3.4-2.8-6.3-6.3-6.3h-90.4z"
      />

      {/* Caudal de Permeado */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(12, "Caudal de Permeado", false)}>
        <path
          className={getTarjetaClass(12)}
          d="M 1014.2 827.6 h 146.4 v 103.8 h -146.4 z"
        />
        <text
          transform="translate(1069.717 846.679)"
          className="st10 st21">
          {"FIT-029"}
        </text>
        <text
          transform="translate(1056.062 865.427)"
          className="st24">
          <tspan
            x={0}
            y={0}
            className="st16 st9">
            {"Caudal de"}
          </tspan>
          <tspan
            x={-0.4}
            y={16.8}
            className="st16 st9">
            {"Permeado"}
          </tspan>
        </text>

        <text
          transform="translate(1069.717 912.746)"
          className="st10 st12">
          {getScaledValue(datosScada.FIT029)}
        </text>
        <text
          transform="translate(1112.983 912.35)"
          className="st10 st26">
          {"l/s"}
        </text>
      </g>
      {/* Campana */}
      <g
        className={`${getTemaAlarma(12)} cursorPointer`}
        onClick={() => {
          onClickAlarma(12, "Caudal de Permeado");
        }}>
        <path d="M1033.8 902.7c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-1.9 1.1-2.5 2.2z" />
        <path d="M1032.1 901.7c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9.7-1.3 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM1043.4 900.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.7-2.5-2.2z" />
        <path d="M1044 898.6c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.3-2.4-3.7-3zM1044.9 907.7v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1039.9 915.2c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* E.C de Producto */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(10, "E.C de Producto", false)}>
        <path
          className={getTarjetaClass(10)}
          d="M 1014.2 827.6 z M 1160.6 825.5 h -146.4 V 721.6 h 146.4"
        />
        <text
          transform="translate(1067.717 743.58)"
          className="st10 st21">
          {"AE-030"}
        </text>
        <text
          transform="translate(1063.969 762.427)"
          className="st24">
          <tspan
            x={0}
            y={0}
            className="st16 st9">
            {"E.C. de"}
          </tspan>
          <tspan
            x={-4.7}
            y={16.8}
            className="st16 st9">
            {"Producto"}
          </tspan>
        </text>

        <text
          transform="translate(1065.717 810.746)"
          className="st10 st12">
          {getScaledValue(datosScada.AE030, 0, 1)}
        </text>
        <text
          transform="translate(1106.983 810.35)"
          className="st10 st26">
          {"\xB5S/cm"}
        </text>
      </g>
      {/* Campana */}
      <g
        className={`${getTemaAlarma(10)} cursorPointer`}
        onClick={() => {
          onClickAlarma(10, "E.C de Producto");
        }}>
        <path d="M1033.8 799.7c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M1032.1 798.7c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9.7-1.3 1.8-2.2 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM1043.4 797.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M1044 795.6c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM1044.9 804.7v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1039.9 812.2c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin E.C de Producto */}

      <path
        className="st29"
        d="M1025.3 826.5h124"
      />

      <path
        className="st15"
        d="M945.5 444.8h-16.4c-2.8 0-5-2.3-5-5v-51.9c0-2.8 2.3-5 5-5h16.4"
      />
      <path
        className="st20"
        d="M946 389.5c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st1"
        d="M946 377.8c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st20"
        d="M946 450.9c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st1"
        d="M946 439.2c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st0"
        d="M1087.7 383.7h237.7c11.3 0 20.5 9.2 20.5 20.5v290.1c0 5-4 9-9 9H1191c-5.1 0-9.2 4.1-9.2 9.2v244.3M955.6 383.7h105.8"
      />
      <path
        className="st30"
        d="M1082.3 374.2h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM1067.1 378.1l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st30"
        d="m1082.7 388.7-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st31"
        d="M1074.9 373.2v10"
      />
      <path
        className="st32"
        d="M1065.9 365.2h18M1074.9 366.2v8"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={166}
        height={145}
        xlinkHref="data:image/png;base64,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"
        transform="translate(581.51 1004.9)"
      />
      <path
        className="st1"
        d="M688.1 1140.7h43.1c3.5 0 6.3-2.8 6.3-6.3v-107.3c0-3.5-2.8-6.3-6.3-6.3h-51.6c-1.2 0-2.4-.4-3.4-1.2l-.4-.3c-6.5-6.5-6.5-6.5-12.9.1-1 .9-2.2 1.4-3.5 1.4h-61.7c-3.4 0-6.3 2.8-6.3 6.3v107.3c0 3.4 2.8 6.3 6.3 6.3h90.4z"
      />

      {/* Presión de Rechazo */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(6, "Presión de Rechazo", false)}>
        <path
          className={getTarjetaClass(6)}
          d="M737.8 1132.5H591.4v-103.9h146.4"
        />
        <text
          transform="translate(640.822 1069.427)"
          className="st24">
          <tspan
            x={0}
            y={0}
            className="st16 st9">
            {"Presi\xF3n"}
          </tspan>
          <tspan
            x={-13.6}
            y={16.8}
            className="st16 st9">
            {"de Rechazo"}
          </tspan>
        </text>
        <text
          transform="translate(646.96 1117.746)"
          className="st10 st12">
          {getScaledValue(datosScada.PT033, 1)}
        </text>
        <text
          transform="translate(688.226 1117.35)"
          className="st10 st26">
          {"Bar"}
        </text>
        <text
          transform="translate(644.96 1050.58)"
          className="st10 st21">
          {"PT-033"}
        </text>
      </g>
      {/* Campana */}
      <g
        className={`${getTemaAlarma(6)} cursorPointer`}
        onClick={() => {
          onClickAlarma(6, "Presión de Rechazo");
        }}>
        <path d="M611 1106.7c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M609.3 1105.7c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9.7-1.3 1.8-2.2 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM620.6 1104.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M621.2 1102.6c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM622.1 1111.7v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM617.1 1119.2c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presión de Rechazo */}

      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={165}
        height={251}
        xlinkHref="data:image/png;base64,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 AAAAAElFTkSuQmCC"
        transform="translate(991.29 1232.3)"
      />
      <path
        className="st1"
        d="M1097.4 1473.5h43.1c3.5 0 6.3-2.8 6.3-6.3v-212.3c0-3.5-2.8-6.3-6.3-6.3h-51.6c-1.2 0-2.4-.4-3.4-1.2l-.4-.3c-6.5-6.5-6.5-6.5-12.9.1-1 .9-2.2 1.4-3.5 1.4H1007c-3.4 0-6.3 2.8-6.3 6.3v212.3c0 3.4 2.8 6.3 6.3 6.3h90.4z"
      />

      {/* Caudal de Rechazo */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(8, "Caudal de Rechazo", false)}>
        <path
          className={getTarjetaClass(8)}
          d="M 1000.7 1362.4 h 146.4 v 103.8 h -146.4 z"
        />
        <text
          transform="translate(1042.598 1400.175)"
          className="st24">
          <tspan
            x={0}
            y={0}
            className="st16 st9">
            {"Caudal de"}
          </tspan>
          <tspan
            x={4.3}
            y={16.8}
            className="st16 st9">
            {"Rechazo"}
          </tspan>
        </text>
        <text
          transform="translate(1056.253 1447.494)"
          className="st10 st12">
          {getScaledValue(datosScada.caudalRechazo)}
        </text>
        <text
          transform="translate(1093.52 1447.099)"
          className="st10 st26">
          {"Bar"}
        </text>
      </g>
      {/* Campana */}
      <g
        className={`${getTemaAlarma(8)} cursorPointer`}
        onClick={() => {
          onClickAlarma(8, "Caudal de Rechazo");
        }}>
        <path d="M1020.3 1437.4c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-1.9 1.1-2.5 2.2z" />
        <path d="M1018.6 1436.4c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9.7-1.3 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM1029.9 1435.1c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.7-2.5-2.2z" />
        <path d="M1030.5 1433.3c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.3-2.4-3.7-3zM1031.4 1442.4v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1026.4 1449.9c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Caudal de Rechazo */}

      {/* Presion Conc. 3ra Etapa */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(11, "Presión Conc. 3ra Etapa", false)}>
        <path
          className={getTarjetaClass(11)}
          d="M 1000.7 1362.4 z M 1147.1 1360.2 h -146.4 v -103.9 h 146.4"
        />
        <text
          transform="translate(1054.253 1278.329)"
          className="st10 st21">
          {"PT-040"}
        </text>
        <text
          transform="translate(1029.884 1297.175)"
          className="st24">
          <tspan
            x={0}
            y={0}
            className="st16 st9">
            {"Presi\xF3n Conc."}
          </tspan>
          <tspan
            x={13.6}
            y={16.8}
            className="st16 st9">
            {"3ra Etapa"}
          </tspan>
        </text>

        <text
          transform="translate(1056.253 1345.494)"
          className="st10 st12">
          {getScaledValue(datosScada.PT040, 1)}
        </text>
        <text
          transform="translate(1097.52 1345.099)"
          className="st10 st26">
          {"Bar"}
        </text>
      </g>
      {/* Campana */}
      <g
        className={`${getTemaAlarma(11)} cursorPointer`}
        onClick={() => {
          onClickAlarma(11, "Presión Conc. 3ra Etapa");
        }}>
        <path d="M1020.3 1334.4c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M1018.6 1333.4c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9.7-1.3 1.8-2.2 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM1029.9 1332.1c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M1030.5 1330.3c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM1031.4 1339.4v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1026.4 1346.9c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presion Conc. 3ra Etapa */}

      <path
        className="st29"
        d="M1011.8 1361.2h124"
      />

      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={157}
        height={141}
        xlinkHref="data:image/png;base64,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 CTAAmgQkrkQQpqUAAAAASUVORK5CYII="
        transform="translate(758.51 1047.9)"
      />
      <path
        className="st1"
        d="M817.4 1057.7h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3H826c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V1064c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Presion Conc. 2da Etapa */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(3, "Presión Conc. 2da etapa", false)}>
        <path
          className={getTarjetaClass(3)}
          d="M768.1 1065.1h138.1v99.8H768.1z"
        />
        <text
          transform="translate(794.305 1104.717)"
          className="st24">
          <tspan
            x={0}
            y={0}
            className="st16 st9">
            {"Presi\xF3n Conc."}
          </tspan>
          <tspan
            x={12}
            y={16.8}
            className="st16 st9">
            {"2da Etapa"}
          </tspan>
        </text>
        <text
          transform="translate(818.923 1150.036)"
          className="st10 st12">
          {getScaledValue(datosScada.PT035, 1)}
        </text>
        <text
          transform="translate(858.048 1149.64)"
          className="st10 st26">
          {"Bar"}
        </text>
        <text
          transform="translate(820.236 1085.077)"
          className="st10 st21">
          {"PT-035"}
        </text>
      </g>
      {/* Campana */}
      <g
        className={`${getTemaAlarma(3)} cursorPointer`}
        onClick={() => {
          onClickAlarma(3, "Presión Conc. 2da etapa");
        }}>
        <path d="M793 1135.9c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M791.3 1134.9c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM802.6 1133.6c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M803.2 1131.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM804.1 1140.9v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM799.1 1148.4c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presion Conc. 2da Etapa */}

      <circle
        className="st28"
        cx={639}
        cy={965.5}
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
        transform="translate(561.51 813.9)"
      />
      <path
        className="st1"
        d="M620.3 823.5h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V829.8c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Presion Osmosis */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(5, "Presión Osmosis", false)}>
        <path
          className={getTarjetaClass(5)}
          d="M571 830.8h138.1v99.8H571z"
        />
        <text
          transform="translate(617.447 870.438)"
          className="st24">
          <tspan
            x={0}
            y={0}
            className="st16 st9">
            {"Presi\xF3n"}
          </tspan>
          <tspan
            x={-3.5}
            y={16.8}
            className="st16 st9">
            {"Osm\xF3sis"}
          </tspan>
        </text>
        <text
          transform="translate(621.833 915.757)"
          className="st10 st12">
          {getScaledValue(datosScada.PT026, 1)}
        </text>
        <text
          transform="translate(660.959 915.361)"
          className="st10 st26">
          {"Bar"}
        </text>
        <text
          transform="translate(623.146 850.798)"
          className="st10 st21">
          {"PT-026"}
        </text>
      </g>
      {/* Campana */}
      <g
        className={`${getTemaAlarma(5)} cursorPointer`}
        onClick={() => {
          onClickAlarma(5, "Presión Osmosis");
        }}>
        <path d="M595.9 901.7c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M594.2 900.7c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM605.5 899.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M606.1 897.6c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM607 906.7v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM602 914.2c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presion Osmosis */}

      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={157}
        height={141}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ0AAACNCAYAAACt8HhNAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABupJREFUeNrsmwlv2loQRr0lZCFt X/WW////umQh7OBnnmb0vk6uwRBUxeYcaQQpyUXYx7Nc0ywD+M3kH2wd+PjUv1uWfM/fIt7lCVef ImN1pGx5IhDuMsWrQ3SWr+ogmwtV2PMiRBQQhi2cxzaE/9tB+aoOwqlgu98v5bEM8lFuh19OXbJN E+vwuBEBW8WrDghXSlw1cW3hz1W+/EDPB/2WzjOcy7WyWEqsgnxJ8aoOwrloNxa3FiMRsAylFoZZ Vrci3MJiJjE3+ZykeNWeklqKbHdN3Dfx0MTYnt/aa57xvMyS6YaZ6bysrk22nWDTJl6beGliIskn ytop03k5HZlgn5r43MQXC5fPM161p7eDYcjn0nmWm5poz+bBtZz/ONVqn/eLdDHLXdliYxPtT4uv Ip5KVzLJDn5i9aHBs9xOuEereJUIFyfbvE26TKSrzNw7y3I70f5q4h8R78Fevw7SUVqHWWJVuoWV 1Wdz4MrO+VYGjJVMtbWK1yZdaRns1uTyTPe3xR8mo6dVBonLGSTWNixMJenkJpf3eh4L82Lb1tPl iUx3az2d93NfJR4srV4ltkwQb5iZrjbpVnLucym5r9bnvYQB8+AgUYRB4s76uk8SPkiMEqUV6S5j gq0kw81NtLH5MgrS5YfKq0+vnu1G2f/7c3cWul1SMrVe3BRb2s9eUlNetO5oVCEzxQk23onQOxL7 7kbAcKXz86xejCSusvYbBv9luypREvMsfRusCj9zw/9yKUJiqrJf78unMlxrec1aBgv9hkmetX/F CYZNKjEVHTx5Y+wxb8KQAG3JqXMSKk5YPCO7QYsPnZwoOi4IcGoJflemAzjbFAKAdIB0AEgHSAeA dIB0AEgHSAdIB4B0gHQASAdIB4B0gHSAdABIB0gHgHSAdABIB0gHgHSAdIB0AEgHSAeAdIB0AEgH SAeAdIB0gHQASAdIB4B0gHQASAdIB0gHgHSAdABIB0gHgHSAdABIB0gHSAeAdIB0AEgHSAeAdIB0 gHQASAdIB4B0gHQASAdIB4B0gHSAdABIB0gHgHSAdABIB0gHSAeAdIB0AEgHSAeAdIB0AEgHSAdI B4B0gHQASAdIB4B0gHSAdABIB32llsf6GOnq8McAhxzp7Elx5Buc9CZwcZmtfo90dUsApPzYWuz1 pDqw0DYstk0sPDQJ8zNngCGKFl3YSLT5Uaekq1sWXifC36A484n6iLLlJ0o21J64FtF2Lqwk1vK4 SWS9WqWr7eDWYVFfbNnEIoT/7VZOTN5z6WJ0ka9u6W2GVglqOd8bc8K9mIsXS3NGpdtbXmOGW9qC syZeJa7s93e/U/Y846lkhUV83nZR1eG41QNuQ1S6tQk2CTE1X/aKVyV6ORVuYZK9NPHcxL0It1t0 ZGsUPRRORXLBSotKHguJtv439jXrRJ8zhHKrfsxNtEeLJ/Pk1V7zMvtmsEgNEirdTBa+DcLdJ6TL eyidC1XZ59vFtYX/XIWsqMdK+96lXOXL0N/0PePVLdL9bOJbEz/Mk4l5s+yS6WKTuLR0+WJyqXCv A5Eulwznst3YBaaP15L9CjlWm1AVvBWZS5+zbLvieyzdSsrrLsN9N/F+mi+zxOfuVF4XJp0fbBdu t+CDnZDrAUjnZdSFu7MLamxxb5/VL7wy0dvMpd+dyPNZl8a6p5luIUnpcU+mqw+V11qu4JUdTL+y N2L3vZ0gLz15DyfYKN1IhPvUxGdpir18juTzbkIL8mzxZI8v0lj3Xbo4meuQ6T2/9/2TxGfuNL36 SVmEq9rr+Eh6nqLHg0QupdWl22W3L5KpFnYAx9LX5mGCe7LS4vFoJ0Cnub5nutQene5uTMPnbW0p qj2LbxK9y1yabO1x8hM2Uz9ieXXpXoJ0XkLv7fdcupnJ9VP6mh9BuoUMFHXPM112YB93mZhas0OZ Lu7HxC0B3xSuWvax+rZXp1sl3tONRbi5xMxeG9lnXJlUTybaN5HuKTTUq54PEnVLbxfvWOk2Ueu0 XnWo4ZlIV4To850I3TLRvm4mGU6Fm9gANbK/8SnepftuEUtr7OeGskm87578dt+eZNVhcb/NFfu9 POv/ba8sbJssEnttOqWNLRtqpntO9HKviV5uO4DN4dTQ2Xb7r5XqiMXbSmjfb/brft1a+td1Qjrv 6Qrp6SYytU6CcHFjOBuQcIeev0u6fYvnAzmYeSgPejtrJXLdyCCxESGnJpuW1KEKd5Rg75XurG/8 AQ9gnmiSdb9yKlO7S7oKvV+c3oZWUs/a18DbXlVv/us92FKk022Dfd8jA6TrPNWqfIUIlycyYupb s4B0J2e9PEvvSdbZ2/1MyinSnU2+uM1y9P+CAqQ757FCNgAAEP4VYAAP5SN3CA9yiQAAAABJRU5E rkJggg=="
        transform="translate(910.51 1024.9)"
      />
      <path
        className="st1"
        d="M969.2 1034.7h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V1041c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Presion Entrada 3ra Etapa */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(4, "Presión Entrada 3ra Etapa", false)}>
        <path
          className={getTarjetaClass(4)}
          d="M919.9 1042.1H1058v99.8H919.9z"
        />
        <text
          transform="translate(939.923 1081.717)"
          className="st24">
          <tspan
            x={0}
            y={0}
            className="st16 st9">
            {"Presi\xF3n Entrada"}
          </tspan>
          <tspan
            x={19.8}
            y={16.8}
            className="st16 st9">
            {"3ra Etapa"}
          </tspan>
        </text>

        <text
          transform="translate(970.77 1127.036)"
          className="st10 st12">
          {getScaledValue(datosScada.PT039, 1)}
        </text>
        <text
          transform="translate(1009.896 1126.64)"
          className="st10 st26">
          {"Bar"}
        </text>
        <text
          transform="translate(972.084 1062.077)"
          className="st10 st21">
          {"PT-039"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(4)} cursorPointer`}
        onClick={() => {
          onClickAlarma(4, "Presión Entrada 3ra Etapa");
        }}>
        <path d="M944.8 1112.9c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M943.1 1111.9c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM954.4 1110.6c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M955 1108.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM955.9 1117.9v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM950.9 1125.4c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presion Entrada 3ra Etapa */}
    </svg>
  );
};

export default ScadaIloca;

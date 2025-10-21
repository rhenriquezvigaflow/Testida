import * as React from "react";
import {
  getColor,
  getColorConexion,
  getConexion,
  getScaledValue,
  getTarjetaClass,
  getTemaAlarma
} from "../../../../commons/scada/scada";

const ScadaNanoConcon = (props) => {
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
      viewBox="0 0 1429.5 1898.8"
      style={{
        enableBackground: "new 0 0 1429.5 1898.8"
      }}
      xmlSpace="preserve"
      {...props}>
      <style>
        {
          ".st0{opacity:.6;fill:none;stroke:#cbcbcb;stroke-width:2;stroke-miterlimit:10;enable-background:new}.st1{fill:#cbcbcb}.st2{fill:#fff}.st3{fill:none;stroke:#35ace8;stroke-width:4;stroke-miterlimit:10}.st5{fill:#00cd98}.st6{fill:#3574e0}.st9{fill:#666}.st11{font-size:14px}.st12{fill:#606060}.st17{fill:none;stroke:#00aeed;stroke-width:4;stroke-miterlimit:10}.st18{fill:#0e76e7}.st19{fill:none;stroke:#2f3e49;stroke-width:4;stroke-miterlimit:10}.st20{fill:#2f3e49}.st21{fill:#00aeed}.st22{opacity:.15;fill:#0e76e7;enable-background:new}.st23{font-size:11px}.st24,.st25{fill:#fff;stroke:#35ace8;stroke-width:4;stroke-miterlimit:10}.st25{opacity:.5;fill:none;stroke:#b2b2b2;stroke-width:.5;enable-background:new}.st26{fill:#00a39b}.st27{fill:#323e48}.st28,.st29{fill:none;stroke:#323e48;stroke-width:4;stroke-miterlimit:10}.st29{stroke:#fff;stroke-width:2}.st31{enable-background:new}.st32{font-size:13px}.st33{font-size:16px}.tarjeta{fill:#ffffff}.tarjetaSeleccionada{fill:#3574e0;opacity:.15}.cursorPointer{cursor:pointer}.cursorNormal{cursor:default}.campana{fill:#3474E0;}.campana:hover{fill:#7c7c7c;}.campanaVacia{fill:#c2c2c1;}.campanaVacia:hover{fill:#7c7c7c;}.campanaDesconectada{fill:#c2c2c1;}"
        }
      </style>
      <path
        className="st0"
        d="M244.5 1463v-161.5c0-3.7-3-6.8-6.8-6.8h-68.6c-3.6 0-6.6-3-6.6-6.6V976.5c0-3.7 3-6.8 6.8-6.8h33.2c3.7 0 6.7 3 6.7 6.7v16.7"
      />
      <path
        className="st1"
        d="M239.7 1457.8c0-.9.7-1.6 1.6-1.6h6.3c.9 0 1.6.7 1.6 1.6 0 .4-.2.8-.5 1.1l-3.1 3.1c-.6.6-1.5.6-2.2.1l-3.2-3.2c-.3-.3-.5-.7-.5-1.1z"
      />
      <path
        className="st2"
        d="M248.3 1457.8c0 .2-.1.3-.2.4l-3.1 3.1c-.2.2-.6.2-.9 0l-3.1-3.1c-.1-.1-.2-.3-.2-.4 0-.3.2-.6.6-.6h6.3c.3 0 .6.3.6.6m2 0c0-1.4-1.2-2.6-2.6-2.6h-6.3c-1.4 0-2.6 1.2-2.6 2.6 0 .7.3 1.3.8 1.8l3.1 3.1.1.1.1.1c1.1.9 2.6.8 3.5-.2l3.1-3.1c.5-.5.8-1.1.8-1.8z"
      />
      <path
        className="st3"
        d="M350.3 1153.3H86c-5.5 0-10-4.5-10-10V615.2c0-5.5 4.5-9.9 9.9-9.9h1165.6c6 0 10.8-4.8 10.8-10.8V473.8c0-5.8-4.7-10.5-10.5-10.5H345.4"
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
          fill: "rgb(180, 0, 43)"
        }}
      />
      <circle
        className="st5"
        cx={1143}
        cy={101.2}
        r={8}
      />
      <circle
        className="st6"
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
        className="st9 st10 st11">
        {"Funcionando"}
      </text>
      <text
        transform="translate(1160.93 125.915)"
        className="st9 st10 st11">
        {"Movi\xE9ndose"}
      </text>
      <text
        transform="translate(1160.93 145.915)"
        className="st9 st10 st11">
        {"Falla"}
      </text>
      <text
        transform="translate(1160.93 165.915)"
        className="st9 st10 st11">
        {"Bloqueada"}
      </text>
      <text
        transform="translate(1160.93 185.915)"
        className="st9 st10 st11">
        {"Detenida"}
      </text>
      <text
        transform="translate(75.498 77.731)"
        className="st12 st13 st11">
        {"Conectividad de Planta"}
      </text>
      <text
        transform="translate(109.29 128.21)"
        className="st12 st13"
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
        fill={getColorConexion(datosScada.con)}
        cx={85.5}
        cy={122.1}
        r={8.9}
      />
      <text
        transform="translate(1134.967 77.731)"
        className="st12 st13 st11">
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
        className="st17"
        d="M56 334.3h86.5c4.7 0 8.5 3.8 8.5 8.5v38.3"
      />
      <path
        className="st18"
        d="M118 395.7h124.8v97.7H118z"
      />
      <path
        className="st19"
        d="M242.6 379.4v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1V379.4"
      />
      <path
        className="st20"
        d="M338.9 458.1h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
      />
      <path
        className="st21"
        d="M291.3 495.1c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st2"
        d="M291.3 483.4c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st17"
        d="M249.9 488.2h38.5"
      />
      <path
        className="st21"
        d="M144.4 384.2c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
      />
      <path
        className="st2"
        d="M156.1 384.2c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        width={39}
        height={39}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA5lJREFUeNrsmHtT00AUxbvJpqFY WkFFUcfv/73EF88CfaSkSdw45zLHO7d0Ux76B5k5Q0mT7S/3sXs2vd7L8XL828M907jN/wDo6K8F 2GwD7B4JjJXcA2jpyQAZiJUSpANEDVX0uY4BdQ+AE5hWPigjeYIUsFVQCa2gahOo3xJOwFqYftBO 0ABqP+cE2ULcBi2DCtIS5wW2turTbQnnAdYCDYP2gkbQq6BdfO/w4y3MPGiqNCPYlUp95wgyXA6Q cdBB0BtonyBzAiwAcx10FXQZdBE0wbkprinxW3eQfoua6wOghXkXdBT0Ieg9YMf4vo97BHAOmBbs LOg06ISuk2yWFMHGd4TLkL7XQYdBn0kCuIdrMopGW2sLRGqC60YokYzguFnqGECe3zwaYA/p/Bj0 BfoEYI5eqrp4CcgxxpAySFSnryjFzneoPU7tIQAlekc4P1Qd3KNoDBBZ6fQ+wUmXc2dXmwA5ehbg EcSp3UHKEpU2SbUnJRTZNvU3kHT2KjbFiUqvNEert6jHoYqKMwD1UlgDboa6vKDOzhDJykdGLwPA EEAHqmNzXJMacyv/n9LyN8ADj6ERSkBKpL12lURGMKNJeUQDboJb53b4oXcxDtemjBXVJAKYY7Ah Ddg3ai7GnCRqDe/TWCkDJpFuxRtrbk5wySMZDu2EzIGdYT55mfPGYF3WdXfP75npiz0amkDrWMMZ OeZaf+jX3KQHYD8nk2lp+DkXCSV/LZ/4F2gS+YQlLVVzqJC5SlukyDH5ga1VpI5JMQPKYn9NFmmh vFzTEa4gnzjHePLQTcxKwmkoyI2Ixuhor6YQ3Ti83FXK3YhHvKJlrtzkZjgSNT3tDcDOlDlgY+CN eVFqagU48YatcT2HJmRc7zKSRpoFa3LNjBVEd3pFGbiltfcaD/kz6Bj6AdAprvtTh+kDt5rWtlJ3 5pL2JJKBUwB9hb7j3ASplxmiibX8UtgL1EpGXo6jImkf0GTOqZ3h/jZSv4K+QSc4v+D6i9mTcC3K 7syRXSoRmStYpX1yJWK9GqPJzmlPcoJ7p9aM4DtMrDX9EO81JCpnsGK8J0no4Qrq2ktognt5V1dx YFzH+kuUecjJLg2hXeWsG7Unmal9scylDLcVoG4S7ugc2iHrxN2tO7kwlszKWt+3eTfjjG6+z+k0 FMVKvZfRYM1jvjxaB5sYFqox5sgnfbtlgVqT+7p3hL3neD+4bhwXabWijt8CDADbu7Hn+XztjQAA AABJRU5ErkJggg=="
        transform="translate(300.204 454.817) scale(.8974)"
      />
      <circle
        className="st2"
        cx={318.1}
        cy={472.6}
        r={10.9}
      />
      <circle
        className="st22"
        cx={318.1}
        cy={472.4}
        r={8}
      />
      <text
        transform="translate(303.487 512.307)"
        className="st12 st10 st23">
        {"P-000"}
      </text>
      <circle
        className="st24"
        cx={483}
        cy={462.1}
        r={9.2}
      />
      <path
        className="st0"
        d="M244.5 806.6v186.5"
      />
      <path
        className="st1"
        d="M249.4 811.8c0 .9-.7 1.6-1.6 1.6h-6.3c-.9 0-1.6-.7-1.6-1.6 0-.4.2-.8.5-1.1l3.1-3.1c.6-.6 1.5-.6 2.2-.1l3.2 3.2c.3.3.5.7.5 1.1z"
      />
      <path
        className="st2"
        d="M240.8 811.8c0-.2.1-.3.2-.4l3.1-3.1c.2-.2.6-.2.9 0l3.1 3.1c.1.1.2.3.2.4 0 .3-.2.6-.6.6h-6.3c-.3 0-.6-.3-.6-.6m-2 0c0 1.4 1.2 2.6 2.6 2.6h6.3c1.4 0 2.6-1.2 2.6-2.6 0-.7-.3-1.3-.8-1.8l-3.1-3.1-.1-.1-.1-.1c-1.1-.9-2.6-.8-3.5.2l-3.1 3.1c-.5.5-.8 1.1-.8 1.8z"
      />
      <text
        transform="translate(174.364 1083.29)"
        className="st12 st10 st23">
        {"ANTI INCRUSTANTE"}
      </text>
      <path
        className="st19"
        d="M205.7 1003.6h15.2c1 0 1.8.8 1.8 1.8v39.2"
      />
      <path
        className="st20"
        d="M216.2 1012.6h-14c-.8 0-1.5-.7-1.5-1.5v-14c0-.8.7-1.5 1.5-1.5h14c.8 0 1.5.7 1.5 1.5v14c0 .8-.7 1.5-1.5 1.5z"
      />
      <path
        className="st19"
        d="M247.7 1003.6h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
      />
      <path
        className="st20"
        d="M237.2 1012.6h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
      />
      <path
        className="st26"
        d="M207.2 1024.3H246v40h-38.8z"
      />
      <path
        className="st19"
        d="M246 1017.6v45.2c0 .7-.4 1.3-.8 1.3h-37.1c-.5 0-.8-.6-.8-1.3v-45.2"
      />
      <text
        transform="translate(140.92 516.535)"
        className="st31">
        <tspan
          x={0}
          y={0}
          className="st12 st10 st23">
          {"ESTANQUE DE"}
        </tspan>
        <tspan
          x={-1.8}
          y={13.2}
          className="st12 st10 st23">
          {"ALIMENTACI\xD3N"}
        </tspan>
      </text>
      <path
        className="st27"
        d="M423.7 729.1c0-6.7-7.8-12.1-17.5-12.1s-17.5 5.5-17.5 12.1h.1c-.1.3-.1.7-.1 1.1v37.6c0 3.5 3.4 6.4 7.6 6.8v6.2h5.2v-6.1h9v6.1h5.2v-6.2c4.5-.2 8-3.2 8-6.8v-37.6c0-.3-.1-.7-.1-1.1h.1zM423.7 817.4c0-6.7-7.8-12.1-17.5-12.1s-17.5 5.5-17.5 12.1h.1c-.1.3-.1.7-.1 1.1V856c0 3.5 3.4 6.4 7.6 6.8v6.2h5.2v-6.1h9v6.1h5.2v-6.2c4.5-.2 8-3.2 8-6.8v-37.6c0-.3-.1-.7-.1-1.1h.1z"
      />
      <path
        className="st3"
        d="M380.9 838.6h-14.3c-2.8 0-5-2.3-5-5v-68.4c0-3.5 2.8-6.3 6.3-6.3h13M427.6 838.6h15.3c2.8 0 5-2.3 5-5v-68.4c0-3.5-2.8-6.3-6.3-6.3h-14"
      />
      <path
        className="st17"
        d="M447.9 799.2h83.7"
      />
      <path
        className="st27"
        d="M181.8 789.3H167c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM166.6 793.2l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st27"
        d="m182.2 803.8-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st28"
        d="M174.4 788.3v10"
      />
      <path
        className="st29"
        d="M165.4 780.3h18M174.4 781.3v8"
      />
      <path
        className="st17"
        d="M187.5 799.2H361"
      />
      <path
        className="st3"
        d="M160.3 1468.4H125c-2.8 0-5-2.3-5-5V805c0-3.5 2.8-6.3 6.3-6.3h34"
      />
      <circle
        className="st24"
        cx={271.4}
        cy={797.9}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={178}
        height={140}
        xlinkHref="data:image/png;base64,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 AAAwAv4TYAB41wxn1WQzWgAAAABJRU5ErkJggg=="
        transform="translate(185.387 643.402)"
      />
      <path
        className="st2"
        d="M251 652.8h-50.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h64.7c3.5 0 6.3-2.8 6.3-6.3V659.1c0-3.5-2.8-6.3-6.3-6.3H251z"
      />

      {/* Caudal de Alimentación Nano 02 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() =>
          loadGrafico(14, "Caudal de Alimentación Nano 02", false)
        }>
        <path
          className={getTarjetaClass(14, selected)}
          d="M194.7 660.2h159.1V760H194.7z"
        />
        <text
          transform="translate(206.356 699.808)"
          className="st31">
          <tspan
            x={0}
            y={0}
            className="st18 st10 st32">
            {"Caudal de Alimentaci\xF3n"}
          </tspan>
          <tspan
            x={44.1}
            y={15.6}
            className="st18 st10 st32">
            {"Nano 02"}
          </tspan>
        </text>

        <text
          transform="translate(249.735 745.127)"
          className="st12 st10 st33">
          {getScaledValue(datosScada.d14, 1)}
        </text>
        <text
          transform="translate(304 744.731)"
          className="st12 st34 st32">
          {"m\xB3/hr"}
        </text>
        <text
          transform="translate(258.057 677.962)"
          className="st12 st10 st23">
          {"FIT-003"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(14, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(14, "Caudal de Alimentación Nano 02");
        }}>
        <path d="M214.8 734c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M213.1 733c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM224.4 731.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M225 729.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM225.9 739v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM220.9 746.5c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Caudal de Alimentación Nano 02 */}

      <text
        transform="translate(155.588 822.446)"
        className="st12 st10 st23">
        {"VX-101"}
      </text>
      <path
        className="st27"
        d="M375.6 1143.8h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM360.4 1147.7l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st27"
        d="m376 1158.3-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st28"
        d="M368.2 1142.8v10"
      />
      <path
        className="st29"
        d="M359.2 1134.8h18M368.2 1135.8v8"
      />
      <text
        transform="translate(349.351 1176.924)"
        className="st12 st10 st23">
        {"VX-102"}
      </text>
      <circle
        className="st24"
        cx={489.5}
        cy={797.9}
        r={9.2}
      />
      <text
        transform="translate(467.665 822.446)"
        className="st12 st10 st23">
        {"PSL-002"}
      </text>
      <text
        transform="translate(393.635 797.231)"
        className="st12 st10 st23">
        {"F001"}
      </text>
      <text
        transform="translate(393.635 885.21)"
        className="st12 st10 st23">
        {"F002"}
      </text>

      {/* Estado Bomba Alta Nano 02 */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(3, "Estado Bomba Alta Nano 02", true)}>
        <path
          className="st20"
          d="M597 730.4h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
        />
        <image
          style={{
            overflow: "visible",
            opacity: 0.15,
            enableBackground: "new"
          }}
          width={39}
          height={39}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA6hJREFUeNrsmOty2jAQhSVfSAiQ 5k5v077/c7WdZFqShgTwjaDKM2c7pzsy2E5o/oSZMwYsy59Wu6uVjHn7vH1e92P32KdcHfSqgFaJ PxqwE7B9AbCIwCL6rYFqbdTV7QtQA9VKvGK68hQ/QWtcN0ruJQGtgqo18DqABgRpAFB5lUoVgTda 1PaEq1+eAmjodeQ19hrh+wHuG1it8Mq8ll4rKMP/JdoErZn0hBsQ1DuvU68TfJ/gngBWgFl4PXo9 eN3j+gjYHO2MhkyeAVfDnHtdeU29LrzOvI5xf4BnSwKce/32mkF3UARQoyGTjj6XYkpra116ffD6 BE1hyWO0YQsWmN45gH5SuwR9G0A6hkw65LcEvjWB5T56ffH6CsBLgI/QLqaUwtN8hnZjamdUVFd4 p2trQZnaEaxUW+sz4GrI93hxDX9IVnGUZsYkGURCgVSRZIpt0tJ6sbLeFBb8hGm+wJQdYmolD3KS HlA6GpCFC4psCRjJlzZp6X/iexNYagqrXVFgDOnFoeUuJkWwkvimRPYcbpDLDCQtrSeAxwA6h05o Wgf0cg2n12mH5zK4zBmywohyaLkrikOAE0CdKkdPG+B0VSPB5vDcCH1O0NdQ9WWjDgEyRCcTSsYH gbW3zbIa0RJ5CMlAE0prJmrpg9LRkVrOZN21HZZNqxK/rOdpYLA2alHbxWrtFbBUlVp9ilkGtYH7 rSzYBN4FzAQCR9eKoftbAbnI3FA9t1ZlknkGpAv0+0/1HW150CiwAvlJxGWS6wglA19TrVipgtZ1 sWAJqCVKpAWyPheemw6QT1REZFCO39zfzrWYO1sFMv6KUo3d4TYuALdEP1IbZhj0U9tyiy2YoZMa 8BbZf0wryLYA03A51Yd3qBHnAC7YdeIO6SHesv+I1IphVICJv/FAa7Abr+/QNQa+ICtu4pbVjGlI rnqLyRGvgyAnN7lVcD9QxN6jjfhhawuG4HU0rikSS0xVoYKrnspfBPcN1xtAyxT/Dbq2exKByOAr EVW+S9prcHWTqnY5Qc4Ada2mNtepK2mZ8Q1GVdD/khvlpVx+ya5OLC1ZQNreQjP8fsDg1312dZy0 DaAcAS/gOzPUi6NA2S97EvHBOa4PtEcudZLuunG3gR1eChjZvA8Dxasjv8wJdEUb96pp497nZMEG jj9SqnBSqoBMYFljrXed0fQ9m2k6QIoDJ1yuIQXt7fCoCbTNGWFIez/AtFsK0qYq6b8dYHbpr9cx 8B8BBgBdeanXWqiMcwAAAABJRU5ErkJggg=="
          transform="translate(558.278 727.117) scale(.8974)"
        />
        <circle
          className="st2"
          cx={576.1}
          cy={744.9}
          r={10.9}
        />

        {/* Indicador color */}
        <circle
          fill={getColor(datosScada.d3)}
          cx={576.1}
          cy={744.7}
          r={8}
        />

        <text
          transform="translate(561.56 784.606)"
          className="st12 st10 st23">
          {"P-004"}
        </text>

        <path
          className="st20"
          d="M597 811.3h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7V814c0-1.5-1.2-2.7-2.7-2.7z"
        />
        <image
          style={{
            overflow: "visible",
            opacity: 0.15,
            enableBackground: "new"
          }}
          width={39}
          height={39}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7lJREFUeNrsmOty2jAQhS1bhgBJ IKSd3tv3f6522qZJ0xDCzQa7UuYsc7qVg0xo8yeeOWNg7OXTrna1UpI8X8/Xoy7z5AYC9oz6XkNy 1f8b0ATEtmsFWQeg/xmgfz9tUKKAKqUoUHMgMOuU4+6VEaSH2TitSRtIwx4E0BCUgB1BXagDyAQg pdNKqSDgRo/aPeFyqOfUdzp2OoH6gM3xjsDNne6cZpD/vgBogYH8lUh2T7guQE6dzpzG0IggGXAO qFunidMN5L9PYbugsG8h7R5h9eEbAOal02unV/g8BnQPzyX44yW85+F+OV06XeGe4/cZPF23BRS4 DMb6gPNQ75zeO73F9zN4sEe21xRi77FrPHeKqWBVvazhyfvfbIsaZ/HH3vALwH1y+ghA78EhBsBJ UiHMS3hpBBsDPJcSlGgLG+tBi3k3QBjFex7uA8I8QrJ08XyqPNLH+wOaAhkNQJKlpLlobIT3JLxd hG8MIO+1N4A9B9wRwemVJAdUTs9U5FnJ8AUljLEtMlfCe45wSmKcEVxHwXHZSKmAC9wKYDdIHsns BeZuY4iN8qAAngDoHJ4cImRdPJM1wOl1usZ7Q0wNSZq+miKbNCLEUloEcKgm+kNwSaCByGhO9+D9 Y9g6Ilv3kUgjQ9whYye469GaCFtycdni5THX9mIA9Yj7lIWWPGdaFH1OPhtoMrYeTyP6OzaUN4y0 DZy+m4Adw65uuuqGDrg+QLvGtkMtVx0DyAaknyuhtar6+0LqXnGjWy/7wOjYiLRMC2qTlspoTKhr BSYryIpWEe4Pozy4wcsLFNUpNAdkqUa+66oAIV3OnLSiQd8PJjbEJQCnqpeTFikGUntOWjDpEacE ue0LbUsP3mJJ+klLXIcikTeUHQmteE5arxu0X9eqJ1zLO1nLusWlpkMdiQnsgXkHt1at/y0a1m9O X6DvAJ1Rs/AgYGgTzru4UMdSBTKzoASTxuBSwX3FbxM8V8p0yZL9rzpQfgqaX0tqpWb4c++hC4L7 jPsFps4f3muzJ5H5syDPVTA2o72GbJpk0U8bkuwKUD6sPyi0K51sNrLiJ5Qs7L2lCtuIGomcBsKA EyQZJ8dU1dVW285a1bCCgGXST+AV3hfzZogTZErbzTsq+qXadrZeS01DRnfpZKGn+sNU1T5JFoEq 6ISh0nD7LPac2Wmg08kDbVNoPV+rY48g3GPOZpIAaOh0ywTqIidBteuE6zHHb029nWnYl+izwagz wkMdYO76nDT1e09xBBxTDaKv3wIMAJadtz/91gOpAAAAAElFTkSuQmCC"
          transform="translate(558.278 807.986) scale(.8974)"
        />
        <circle
          className="st2"
          cx={576.1}
          cy={825.8}
          r={10.9}
        />

        {/* Indicador color */}
        <circle
          fill={getColor(datosScada.d3)}
          cx={576.1}
          cy={825.6}
          r={8}
        />
        <text
          transform="translate(561.56 865.476)"
          className="st12 st10 st23">
          {"P-003"}
        </text>
      </g>

      {/* Fin Estado Bomba Alta Nano 02 */}

      <path
        className="st3"
        d="M551 837.2h-14.3c-2.8 0-5-2.3-5-5v-68.4c0-3.5 2.8-6.3 6.3-6.3h13"
      />
      <path
        className="st21"
        d="M377.4 765.2c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st2"
        d="M377.4 753.5c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st21"
        d="M377.4 843.4c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st2"
        d="M377.4 831.7c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st21"
        d="M549.7 765.2c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st2"
        d="M549.7 753.5c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st21"
        d="M549.7 843.4c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st2"
        d="M549.7 831.7c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st3"
        d="M604 734.2h14.3c2.8 0 5 2.3 5 5v68.4c0 3.5-2.8 6.3-6.3 6.3h-13"
      />
      <path
        className="st17"
        d="M623.4 772.3h236.1"
      />
      <path
        className="st20"
        d="M1009.6 784.2h-132c-3.3 0-6-2.1-6-4.8v-16.6c0-2.6 2.7-4.8 6-4.8h132c3.3 0 6 2.1 6 4.8v16.6c0 2.7-2.7 4.8-6 4.8z"
      />
      <path
        className="st18"
        d="M1010.9 784.2h-133c-3.4 0-6.3-2.1-6.3-4.8v-16.6c0-2.6 2.8-4.8 6.3-4.8l133.2 25.3c.7.1.5.9-.2.9z"
      />
      <path
        className="st20"
        d="M1009.6 821.3h-132c-3.3 0-6-2.1-6-4.8v-16.6c0-2.6 2.7-4.8 6-4.8h132c3.3 0 6 2.1 6 4.8v16.6c0 2.7-2.7 4.8-6 4.8z"
      />
      <path
        className="st18"
        d="M1010.9 821.3h-133c-3.4 0-6.3-2.1-6.3-4.8v-16.6c0-2.6 2.8-4.8 6.3-4.8l133.2 25.3c.7.1.5.9-.2.9z"
      />
      <path
        className="st20"
        d="M1009.6 858.4h-132c-3.3 0-6-2.1-6-4.8V837c0-2.6 2.7-4.8 6-4.8h132c3.3 0 6 2.1 6 4.8v16.6c0 2.6-2.7 4.8-6 4.8z"
      />
      <path
        className="st18"
        d="M1010.9 858.4h-133c-3.4 0-6.3-2.1-6.3-4.8V837c0-2.6 2.8-4.8 6.3-4.8l133.2 25.3c.7.1.5.9-.2.9z"
      />
      <path
        className="st20"
        d="M1009.6 895.4h-132c-3.3 0-6-2.1-6-4.8V874c0-2.6 2.7-4.8 6-4.8h132c3.3 0 6 2.1 6 4.8v16.6c0 2.7-2.7 4.8-6 4.8z"
      />
      <path
        className="st18"
        d="M1010.9 895.4h-133c-3.4 0-6.3-2.1-6.3-4.8V874c0-2.6 2.8-4.8 6.3-4.8l133.2 25.3c.7.2.5.9-.2.9z"
      />
      <path
        className="st20"
        d="M1009.6 932.5h-132c-3.3 0-6-2.1-6-4.8v-16.6c0-2.6 2.7-4.8 6-4.8h132c3.3 0 6 2.1 6 4.8v16.6c0 2.7-2.7 4.8-6 4.8z"
      />
      <path
        className="st18"
        d="M1010.9 932.5h-133c-3.4 0-6.3-2.1-6.3-4.8v-16.6c0-2.6 2.8-4.8 6.3-4.8l133.2 25.3c.7.2.5.9-.2.9z"
      />
      <path
        className="st17"
        d="M867.9 919.5h-16.4c-2.8 0-5-3.2-5-7.1V773.7M847.5 811.4h20.4M847.1 847.8h20.4M847.1 883.4h20.4"
      />
      <path
        className="st21"
        d="M863.1 778.7c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st2"
        d="M863.1 767c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={178}
        height={140}
        xlinkHref="data:image/png;base64,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"
        transform="translate(646.73 619.399)"
      />
      <path
        className="st2"
        d="M712.4 628.8h-50.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3H724c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h64.7c3.5 0 6.3-2.8 6.3-6.3V635.1c0-3.5-2.8-6.3-6.3-6.3h-96.5z"
      />

      {/* Presión Ósmosis Nano 02 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(11, "Presión Ósmosis Nano 02", false)}>
        <path
          className={getTarjetaClass(11, selected)}
          d="M656.1 636.2h159.1V736H656.1z"
        />
        <text
          transform="translate(687.227 675.805)"
          className="st31">
          <tspan
            x={0}
            y={0}
            className="st18 st10 st32">
            {"Presi\xF3n Osmosis"}
          </tspan>
          <tspan
            x={24.5}
            y={15.6}
            className="st18 st10 st32">
            {"Nano 02"}
          </tspan>
        </text>

        <text
          transform="translate(711.077 721.124)"
          className="st12 st10 st33">
          {getScaledValue(datosScada.d11, 1)}
        </text>
        <text
          transform="translate(770.343 720.728)"
          className="st12 st34 st32">
          {"bar"}
        </text>
        <text
          transform="translate(719.4 653.959)"
          className="st12 st10 st23">
          {"PT-002"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(11, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(11, "Presión Ósmosis Nano 02");
        }}>
        <path d="M681.1 710c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M679.4 709c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM690.7 707.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M691.3 705.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM692.2 715v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM687.2 722.5c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presión Ósmosis Nano 02 */}

      <circle
        className="st24"
        cx={846.5}
        cy={848.2}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.2
        }}
        width={184}
        height={117}
        xlinkHref="data:image/png;base64,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"
        transform="translate(648.51 791.9)"
      />
      <path
        className="st2"
        d="M749.2 796.7h62.1c3.4 0 6.3 2.8 6.3 6.3v33.2c0 .8.3 1.6.8 2.2l5.3 6.5c1.1 1.3 1 3.3-.1 4.6l-5.1 5.5c-.6.6-.9 1.5-.9 2.4v36.9c0 3.4-2.8 6.3-6.3 6.3H658.8c-3.4 0-6.3-2.8-6.3-6.3V803c0-3.5 2.8-6.3 6.3-6.3h90.4z"
      />

      {/* Presión Interetapa Nano 02 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(18, "Presión Interetapa Nano 02", false)}>
        <path
          className={getTarjetaClass(18, selected)}
          d="M658.8 796.7h153.8v103.9H658.8z"
        />
        <text
          transform="translate(683.242 837.415)"
          className="st31">
          <tspan
            x={0}
            y={0}
            className="st18 st10 st32">
            {"Presi\xF3n Interetapa"}
          </tspan>
          <tspan
            x={28.5}
            y={15.6}
            className="st18 st10 st32">
            {"Nano 02"}
          </tspan>
        </text>

        <text
          transform="translate(714.078 883.187)"
          className="st12 st10 st33">
          {getScaledValue(datosScada.d18, 1)}
        </text>
        <text
          transform="translate(772.771 882.792)"
          className="st12 st34 st32">
          {"bar"}
        </text>
        <text
          transform="translate(722.4 815.414)"
          className="st12 st10 st23">
          {"PT-005"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(18, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(18, "Presión Interetapa Nano 02");
        }}>
        <path d="M676.7 872.1c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.1-2.5 2.2z" />
        <path d="M675 871.1c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-2.9 1.5-3.7 3zM686.3 869.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.7-2.5-2.2z" />
        <path d="M686.9 867.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.3-2.3-2.4-3.7-3zM687.7 877.1v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.7-.9-1.3-.9-2.1zM682.7 884.5c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.8 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presión Interetapa Nano 02 */}

      <path
        className="st17"
        d="M1018.6 919.2h16.4c2.8 0 5-3.2 5-7.1V773.4M1039 811.1h-20.4M1039.4 847.5H1019M1039.4 883.1H1019"
      />
      <path
        className="st3"
        d="M1078.4 1060.6h-33.3c-2.8 0-5-2.3-5-5V909.2"
      />
      <path
        className="st27"
        d="M1098.8 1052H1084c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM1083.6 1055.9l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st27"
        d="m1099.2 1066.5-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st28"
        d="M1091.4 1051v10"
      />
      <path
        className="st29"
        d="M1082.4 1043h18M1091.4 1044v8"
      />
      <path
        className="st27"
        d="M1098.8 1097.5H1084c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM1083.6 1101.4l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st27"
        d="m1099.2 1112-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st28"
        d="M1091.4 1096.5v10"
      />
      <path
        className="st29"
        d="M1082.4 1088.5h18M1091.4 1089.5v8"
      />
      <path
        className="st3"
        d="M1078.7 1105.2h-9.3c-2.8 0-5-2.3-5-5v-38.4M1104.3 1105.2h9.3c2.8 0 5-2.3 5-5v-38.4"
      />
      <circle
        className="st24"
        cx={1042.3}
        cy={1008.9}
        r={9.2}
      />
      <text
        transform="translate(1073.486 1125.753)"
        className="st12 st10 st23">
        {"VX-104"}
      </text>
      <image
        style={{
          overflow: "visible",
          opacity: 0.2
        }}
        width={185}
        height={117}
        xlinkHref="data:image/png;base64,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"
        transform="translate(843.043 952.564)"
      />
      <path
        className="st2"
        d="M944.1 956.7h62.1c3.4 0 6.3 2.8 6.3 6.3v33.2c0 .8.3 1.6.8 2.2l5.3 6.5c1.1 1.3 1 3.3-.1 4.6l-5.1 5.5c-.6.6-.9 1.5-.9 2.4v36.9c0 3.4-2.8 6.3-6.3 6.3H853.7c-3.4 0-6.3-2.8-6.3-6.3V963c0-3.5 2.8-6.3 6.3-6.3h90.4z"
      />

      {/* Presión de Rechazo Nano 02 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(12, "Presión de Rechazo Nano 02", false)}>
        <path
          className={getTarjetaClass(12, selected)}
          d="M853.7 956.7h153.8v103.9H853.7z"
        />
        <text
          transform="translate(872.69 997.486)"
          className="st31">
          <tspan
            x={0}
            y={0}
            className="st18 st10 st32">
            {"Presi\xF3n de Rechazo"}
          </tspan>
          <tspan
            x={34}
            y={15.6}
            className="st18 st10 st32">
            {"Nano 02"}
          </tspan>
        </text>

        <text
          transform="translate(908.944 1043.258)"
          className="st12 st10 st33">
          {getScaledValue(datosScada.d12, 1)}
        </text>
        <text
          transform="translate(967.637 1042.863)"
          className="st12 st34 st32">
          {"bar"}
        </text>
        <text
          transform="translate(917.265 975.486)"
          className="st12 st10 st23">
          {"PT-007"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(12, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(12, "Presión de Rechazo Nano 02");
        }}>
        <path d="M871.5 1032.2c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.1-2.5 2.2z" />
        <path d="M869.8 1031.2c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-2.9 1.5-3.7 3zM881.1 1029.9c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.7-2.5-2.2z" />
        <path d="M881.7 1028c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.3-2.3-2.4-3.7-3zM882.5 1037.2v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.7-.9-1.3-.9-2.1zM877.5 1044.6c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.8 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presión de Rechazo Nano 02 */}

      <path
        className="st17"
        d="M1262.6 819v-38.3c0-4.7-3.8-8.7-8.5-8.7H1019"
      />
      <path
        className="st18"
        d="M1219.6 833.7h124.8v97.7h-124.8z"
      />
      <path
        className="st19"
        d="M1344.2 817.4v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1V817.4"
      />
      <path
        className="st21"
        d="M1256.1 822.2c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
      />
      <path
        className="st2"
        d="M1267.8 822.2c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <text
        transform="translate(1251.716 954.498)"
        className="st31">
        <tspan
          x={0}
          y={0}
          className="st12 st10 st23">
          {"ESTANQUE"}
        </tspan>
        <tspan
          x={-1.2}
          y={13.2}
          className="st12 st10 st23">
          {"PRODUCTO"}
        </tspan>
      </text>
      <circle
        className="st24"
        cx={732.7}
        cy={772.9}
        r={9.2}
      />
      <circle
        className="st24"
        cx={1106.7}
        cy={772.9}
        r={9.2}
      />
      <path
        className="st3"
        d="M1197.7 1153.3H383.9"
      />
      <path
        className="st27"
        d="M423.7 1399.5c0-6.7-7.8-12.1-17.5-12.1s-17.5 5.5-17.5 12.1h.1c-.1.3-.1.7-.1 1.1v37.6c0 3.5 3.4 6.4 7.6 6.8v6.2h5.2v-6.1h9v6.1h5.2v-6.2c4.5-.2 8-3.2 8-6.8v-37.6c0-.3-.1-.7-.1-1.1h.1zM423.7 1487.8c0-6.7-7.8-12.1-17.5-12.1s-17.5 5.5-17.5 12.1h.1c-.1.3-.1.7-.1 1.1v37.6c0 3.5 3.4 6.4 7.6 6.8v6.2h5.2v-6.1h9v6.1h5.2v-6.2c4.5-.2 8-3.2 8-6.8v-37.6c0-.3-.1-.7-.1-1.1h.1z"
      />
      <path
        className="st3"
        d="M380.9 1509h-14.3c-2.8 0-5-2.3-5-5v-68.4c0-3.5 2.8-6.3 6.3-6.3h13M427.6 1509h15.3c2.8 0 5-2.3 5-5v-68.4c0-3.5-2.8-6.3-6.3-6.3h-14"
      />
      <path
        className="st17"
        d="M447.9 1469.5h83.7"
      />
      <path
        className="st27"
        d="M181.8 1459.7H167c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM166.6 1463.6l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st27"
        d="m182.2 1474.2-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st28"
        d="M174.4 1458.7v10"
      />
      <path
        className="st29"
        d="M165.4 1450.7h18M174.4 1451.7v8"
      />
      <path
        className="st17"
        d="M187.5 1469.5H361"
      />
      <circle
        className="st24"
        cx={271.4}
        cy={1468.3}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={178}
        height={140}
        xlinkHref="data:image/png;base64,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"
        transform="translate(185.387 1313.777)"
      />
      <path
        className="st2"
        d="M251 1323.2h-50.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h64.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3H251z"
      />

      {/* Caudal de Alimentación Nano 01 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(7, "Caudal de Alimentación Nano 01", false)}>
        <path
          className={getTarjetaClass(7, selected)}
          d="M194.7 1330.6h159.1v99.8H194.7z"
        />
        <text
          transform="translate(206.356 1370.184)"
          className="st31">
          <tspan
            x={0}
            y={0}
            className="st18 st10 st32">
            {"Caudal de Alimentaci\xF3n"}
          </tspan>
          <tspan
            x={44.1}
            y={15.6}
            className="st18 st10 st32">
            {"Nano 01"}
          </tspan>
        </text>

        <text
          transform="translate(249.735 1415.502)"
          className="st12 st10 st33">
          {getScaledValue(datosScada.d7, 1)}
        </text>
        <text
          transform="translate(305 1415.107)"
          className="st12 st34 st32">
          {"m\xB3/hr"}
        </text>
        <text
          transform="translate(258.057 1348.337)"
          className="st12 st10 st23">
          {"FIT-001"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(7, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(7, "Caudal de Alimentación Nano 01");
        }}>
        <path d="M213.8 1404.4c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M212.1 1403.4c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9.7-1.3 1.8-2.2 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM223.4 1402.1c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M224 1400.3c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM224.9 1409.4v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM219.9 1416.9c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Caudal de Alimentación Nano 01 */}

      <text
        transform="translate(155.588 1492.822)"
        className="st12 st10 st23">
        {"VX-103"}
      </text>
      <circle
        className="st24"
        cx={489.5}
        cy={1468.3}
        r={9.2}
      />
      <text
        transform="translate(467.665 1492.822)"
        className="st12 st10 st23">
        {"PSL-001"}
      </text>
      <text
        transform="translate(393.635 1467.607)"
        className="st12 st10 st23">
        {"F003"}
      </text>
      <text
        transform="translate(393.635 1555.586)"
        className="st12 st10 st23">
        {"F004"}
      </text>

      {/* Estado bomba alta Nano 01 */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(2, "Estado Bomba Alta Nano 01", true)}>
        <path
          className="st20"
          d="M597 1400.8h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
        />
        <image
          style={{
            overflow: "visible",
            opacity: 0.15,
            enableBackground: "new"
          }}
          width={39}
          height={39}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA6hJREFUeNrsmOty2jAQhSVfSAiQ 5k5v077/c7WdZFqShgTwjaDKM2c7pzsy2E5o/oSZMwYsy59Wu6uVjHn7vH1e92P32KdcHfSqgFaJ PxqwE7B9AbCIwCL6rYFqbdTV7QtQA9VKvGK68hQ/QWtcN0ruJQGtgqo18DqABgRpAFB5lUoVgTda 1PaEq1+eAmjodeQ19hrh+wHuG1it8Mq8ll4rKMP/JdoErZn0hBsQ1DuvU68TfJ/gngBWgFl4PXo9 eN3j+gjYHO2MhkyeAVfDnHtdeU29LrzOvI5xf4BnSwKce/32mkF3UARQoyGTjj6XYkpra116ffD6 BE1hyWO0YQsWmN45gH5SuwR9G0A6hkw65LcEvjWB5T56ffH6CsBLgI/QLqaUwtN8hnZjamdUVFd4 p2trQZnaEaxUW+sz4GrI93hxDX9IVnGUZsYkGURCgVSRZIpt0tJ6sbLeFBb8hGm+wJQdYmolD3KS HlA6GpCFC4psCRjJlzZp6X/iexNYagqrXVFgDOnFoeUuJkWwkvimRPYcbpDLDCQtrSeAxwA6h05o Wgf0cg2n12mH5zK4zBmywohyaLkrikOAE0CdKkdPG+B0VSPB5vDcCH1O0NdQ9WWjDgEyRCcTSsYH gbW3zbIa0RJ5CMlAE0prJmrpg9LRkVrOZN21HZZNqxK/rOdpYLA2alHbxWrtFbBUlVp9ilkGtYH7 rSzYBN4FzAQCR9eKoftbAbnI3FA9t1ZlknkGpAv0+0/1HW150CiwAvlJxGWS6wglA19TrVipgtZ1 sWAJqCVKpAWyPheemw6QT1REZFCO39zfzrWYO1sFMv6KUo3d4TYuALdEP1IbZhj0U9tyiy2YoZMa 8BbZf0wryLYA03A51Yd3qBHnAC7YdeIO6SHesv+I1IphVICJv/FAa7Abr+/QNQa+ICtu4pbVjGlI rnqLyRGvgyAnN7lVcD9QxN6jjfhhawuG4HU0rikSS0xVoYKrnspfBPcN1xtAyxT/Dbq2exKByOAr EVW+S9prcHWTqnY5Qc4Ada2mNtepK2mZ8Q1GVdD/khvlpVx+ya5OLC1ZQNreQjP8fsDg1312dZy0 DaAcAS/gOzPUi6NA2S97EvHBOa4PtEcudZLuunG3gR1eChjZvA8Dxasjv8wJdEUb96pp497nZMEG jj9SqnBSqoBMYFljrXed0fQ9m2k6QIoDJ1yuIQXt7fCoCbTNGWFIez/AtFsK0qYq6b8dYHbpr9cx 8B8BBgBdeanXWqiMcwAAAABJRU5ErkJggg=="
          transform="translate(558.278 1397.492) scale(.8974)"
        />
        <circle
          className="st2"
          cx={576.1}
          cy={1415.3}
          r={10.9}
        />

        {/* Indicador color */}
        <circle
          fill={getColor(datosScada.d2)}
          cx={576.1}
          cy={1415.1}
          r={8}
        />

        <text
          transform="translate(561.56 1454.982)"
          className="st12 st10 st23">
          {"P-002"}
        </text>
        <path
          className="st20"
          d="M597 1481.6h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
        />
        <image
          style={{
            overflow: "visible",
            opacity: 0.15,
            enableBackground: "new"
          }}
          width={39}
          height={39}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7lJREFUeNrsmOty2jAQhS1bhgBJ IKSd3tv3f6522qZJ0xDCzQa7UuYsc7qVg0xo8yeeOWNg7OXTrna1UpI8X8/Xoy7z5AYC9oz6XkNy 1f8b0ATEtmsFWQeg/xmgfz9tUKKAKqUoUHMgMOuU4+6VEaSH2TitSRtIwx4E0BCUgB1BXagDyAQg pdNKqSDgRo/aPeFyqOfUdzp2OoH6gM3xjsDNne6cZpD/vgBogYH8lUh2T7guQE6dzpzG0IggGXAO qFunidMN5L9PYbugsG8h7R5h9eEbAOal02unV/g8BnQPzyX44yW85+F+OV06XeGe4/cZPF23BRS4 DMb6gPNQ75zeO73F9zN4sEe21xRi77FrPHeKqWBVvazhyfvfbIsaZ/HH3vALwH1y+ghA78EhBsBJ UiHMS3hpBBsDPJcSlGgLG+tBi3k3QBjFex7uA8I8QrJ08XyqPNLH+wOaAhkNQJKlpLlobIT3JLxd hG8MIO+1N4A9B9wRwemVJAdUTs9U5FnJ8AUljLEtMlfCe45wSmKcEVxHwXHZSKmAC9wKYDdIHsns BeZuY4iN8qAAngDoHJ4cImRdPJM1wOl1usZ7Q0wNSZq+miKbNCLEUloEcKgm+kNwSaCByGhO9+D9 Y9g6Ilv3kUgjQ9whYye469GaCFtycdni5THX9mIA9Yj7lIWWPGdaFH1OPhtoMrYeTyP6OzaUN4y0 DZy+m4Adw65uuuqGDrg+QLvGtkMtVx0DyAaknyuhtar6+0LqXnGjWy/7wOjYiLRMC2qTlspoTKhr BSYryIpWEe4Pozy4wcsLFNUpNAdkqUa+66oAIV3OnLSiQd8PJjbEJQCnqpeTFikGUntOWjDpEacE ue0LbUsP3mJJ+klLXIcikTeUHQmteE5arxu0X9eqJ1zLO1nLusWlpkMdiQnsgXkHt1at/y0a1m9O X6DvAJ1Rs/AgYGgTzru4UMdSBTKzoASTxuBSwX3FbxM8V8p0yZL9rzpQfgqaX0tqpWb4c++hC4L7 jPsFps4f3muzJ5H5syDPVTA2o72GbJpk0U8bkuwKUD6sPyi0K51sNrLiJ5Qs7L2lCtuIGomcBsKA EyQZJ8dU1dVW285a1bCCgGXST+AV3hfzZogTZErbzTsq+qXadrZeS01DRnfpZKGn+sNU1T5JFoEq 6ISh0nD7LPac2Wmg08kDbVNoPV+rY48g3GPOZpIAaOh0ywTqIidBteuE6zHHb029nWnYl+izwagz wkMdYO76nDT1e09xBBxTDaKv3wIMAJadtz/91gOpAAAAAElFTkSuQmCC"
          transform="translate(558.278 1478.362) scale(.8974)"
        />
        <circle
          className="st2"
          cx={576.1}
          cy={1496.1}
          r={10.9}
        />
        {/* Indicador color */}
        <circle
          fill={getColor(datosScada.d2)}
          cx={576.1}
          cy={1495.9}
          r={8}
        />
        <text
          transform="translate(561.56 1535.852)"
          className="st12 st10 st23">
          {"P-001"}
        </text>
      </g>

      {/* Fin Estado bomba alta Nano 01 */}

      <path
        className="st3"
        d="M551 1507.6h-14.3c-2.8 0-5-2.3-5-5v-68.4c0-3.5 2.8-6.3 6.3-6.3h13"
      />
      <path
        className="st21"
        d="M377.4 1435.5c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st2"
        d="M377.4 1423.8c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st21"
        d="M377.4 1513.8c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st2"
        d="M377.4 1502.1c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st21"
        d="M549.7 1435.5c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st2"
        d="M549.7 1423.8c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st21"
        d="M549.7 1513.8c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st2"
        d="M549.7 1502.1c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st3"
        d="M604 1404.6h14.3c2.8 0 5 2.3 5 5v68.4c0 3.5-2.8 6.3-6.3 6.3h-13"
      />
      <path
        className="st17"
        d="M623.4 1442.7h236.1"
      />
      <path
        className="st20"
        d="M1009.6 1454.6h-132c-3.3 0-6-2.1-6-4.8v-16.6c0-2.6 2.7-4.8 6-4.8h132c3.3 0 6 2.1 6 4.8v16.6c0 2.7-2.7 4.8-6 4.8z"
      />
      <path
        className="st18"
        d="M1010.9 1454.6h-133c-3.4 0-6.3-2.1-6.3-4.8v-16.6c0-2.6 2.8-4.8 6.3-4.8l133.2 25.3c.7.1.5.9-.2.9z"
      />
      <path
        className="st20"
        d="M1009.6 1491.7h-132c-3.3 0-6-2.1-6-4.8v-16.6c0-2.6 2.7-4.8 6-4.8h132c3.3 0 6 2.1 6 4.8v16.6c0 2.6-2.7 4.8-6 4.8z"
      />
      <path
        className="st18"
        d="M1010.9 1491.7h-133c-3.4 0-6.3-2.1-6.3-4.8v-16.6c0-2.6 2.8-4.8 6.3-4.8l133.2 25.3c.7.1.5.9-.2.9z"
      />
      <path
        className="st20"
        d="M1009.6 1528.7h-132c-3.3 0-6-2.1-6-4.8v-16.6c0-2.6 2.7-4.8 6-4.8h132c3.3 0 6 2.1 6 4.8v16.6c0 2.7-2.7 4.8-6 4.8z"
      />
      <path
        className="st18"
        d="M1010.9 1528.7h-133c-3.4 0-6.3-2.1-6.3-4.8v-16.6c0-2.6 2.8-4.8 6.3-4.8l133.2 25.3c.7.2.5.9-.2.9z"
      />
      <path
        className="st20"
        d="M1009.6 1565.8h-132c-3.3 0-6-2.1-6-4.8v-16.6c0-2.6 2.7-4.8 6-4.8h132c3.3 0 6 2.1 6 4.8v16.6c0 2.7-2.7 4.8-6 4.8z"
      />
      <path
        className="st18"
        d="M1010.9 1565.8h-133c-3.4 0-6.3-2.1-6.3-4.8v-16.6c0-2.6 2.8-4.8 6.3-4.8l133.2 25.3c.7.2.5.9-.2.9z"
      />
      <path
        className="st20"
        d="M1009.6 1602.9h-132c-3.3 0-6-2.1-6-4.8v-16.6c0-2.6 2.7-4.8 6-4.8h132c3.3 0 6 2.1 6 4.8v16.6c0 2.7-2.7 4.8-6 4.8z"
      />
      <path
        className="st18"
        d="M1010.9 1602.9h-133c-3.4 0-6.3-2.1-6.3-4.8v-16.6c0-2.6 2.8-4.8 6.3-4.8l133.2 25.3c.7.1.5.9-.2.9z"
      />
      <path
        className="st17"
        d="M867.9 1589.9h-16.4c-2.8 0-5-3.2-5-7.1V1444M847.5 1481.8h20.4M847.1 1518.2h20.4M847.1 1553.7h20.4"
      />
      <path
        className="st21"
        d="M863.1 1449.1c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st2"
        d="M863.1 1437.4c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={178}
        height={140}
        xlinkHref="data:image/png;base64,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"
        transform="translate(646.73 1289.774)"
      />
      <path
        className="st2"
        d="M712.4 1299.2h-50.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3H724c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h64.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-96.5z"
      />

      {/* Presión Ósmosis Nano 01 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(5, "Presión Ósmosis Nano 01", false)}>
        <path
          className={getTarjetaClass(5, selected)}
          d="M656.1 1306.6h159.1v99.8H656.1z"
        />
        <text
          transform="translate(687.227 1346.18)"
          className="st31">
          <tspan
            x={0}
            y={0}
            className="st18 st10 st32">
            {"Presi\xF3n Osmosis"}
          </tspan>
          <tspan
            x={24.5}
            y={15.6}
            className="st18 st10 st32">
            {"Nano 01"}
          </tspan>
        </text>

        <text
          transform="translate(711.077 1391.5)"
          className="st12 st10 st33">
          {getScaledValue(datosScada.d5, 1)}
        </text>
        <text
          transform="translate(770.343 1391.104)"
          className="st12 st34 st32">
          {"bar"}
        </text>
        <text
          transform="translate(719.4 1324.334)"
          className="st12 st10 st23">
          {"PT-003"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(5, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(5, "Presión Ósmosis Nano 01");
        }}>
        <path d="M681.1 1380.4c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M679.4 1379.4c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9.7-1.3 1.8-2.2 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM690.7 1378.1c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M691.3 1376.3c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM692.2 1385.4v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM687.2 1392.9c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presión Ósmosis Nano 01 */}

      <circle
        className="st24"
        cx={846.5}
        cy={1518.6}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.2
        }}
        width={184}
        height={117}
        xlinkHref="data:image/png;base64,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 vuy2AAAAAElFTkSuQmCC"
        transform="translate(648.51 1462.276)"
      />
      <path
        className="st2"
        d="M749.2 1467.1h62.1c3.4 0 6.3 2.8 6.3 6.3v33.2c0 .8.3 1.6.8 2.2l5.3 6.5c1.1 1.3 1 3.3-.1 4.6l-5.1 5.5c-.6.6-.9 1.5-.9 2.4v36.9c0 3.4-2.8 6.3-6.3 6.3H658.8c-3.4 0-6.3-2.8-6.3-6.3v-91.3c0-3.5 2.8-6.3 6.3-6.3h90.4z"
      />

      {/* Presión Interetapa Nano 01 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(17, "Presión Interetapa Nano 01", false)}>
        <path
          className={getTarjetaClass(17, selected)}
          d="M658.8 1467.1h153.8V1571H658.8z"
        />
        <text
          transform="translate(683.242 1507.79)"
          className="st31">
          <tspan
            x={0}
            y={0}
            className="st18 st10 st32">
            {"Presi\xF3n Interetapa"}
          </tspan>
          <tspan
            x={28.5}
            y={15.6}
            className="st18 st10 st32">
            {"Nano 01"}
          </tspan>
        </text>

        <text
          transform="translate(714.078 1553.563)"
          className="st12 st10 st33">
          {getScaledValue(datosScada.d17, 1)}
        </text>
        <text
          transform="translate(772.771 1553.167)"
          className="st12 st34 st32">
          {"bar"}
        </text>
        <text
          transform="translate(722.4 1485.79)"
          className="st12 st10 st23">
          {"PT-004"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(17, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(17, "Presión Interetapa Nano 01");
        }}>
        <path d="M676.7 1542.5c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.1-2.5 2.2z" />
        <path d="M675 1541.5c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-2.9 1.5-3.7 3zM686.3 1540.2c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.7-2.5-2.2z" />
        <path d="M686.9 1538.3c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.3-2.3-2.4-3.7-3zM687.7 1547.5v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.7-.9-1.3-.9-2.1zM682.7 1554.9c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.8 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presión Interetapa Nano 01 */}

      <path
        className="st17"
        d="M1018.6 1589.6h16.4c2.8 0 5-3.2 5-7.1v-138.8M1039 1481.5h-20.4M1039.4 1517.9H1019M1039.4 1553.4H1019"
      />
      <path
        className="st3"
        d="M1078.4 1731h-33.3c-2.8 0-5-2.3-5-5v-146.4"
      />
      <path
        className="st27"
        d="M1098.8 1722.4H1084c-.9 0-1.6-.7-1.6-1.6V1706c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM1083.6 1726.3l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st27"
        d="m1099.2 1736.9-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st28"
        d="M1091.4 1721.4v10"
      />
      <path
        className="st29"
        d="M1082.4 1713.4h18M1091.4 1714.4v8"
      />
      <path
        className="st27"
        d="M1098.8 1767.9H1084c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM1083.6 1771.8l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st27"
        d="m1099.2 1782.4-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st28"
        d="M1091.4 1766.9v10"
      />
      <path
        className="st29"
        d="M1082.4 1758.9h18M1091.4 1759.9v8"
      />
      <path
        className="st17"
        d="M1104.6 1731.8h115.3c5.6 0 10.2-4.6 10.2-10.2v-650.1c0-5.5-4.5-10-10-10h-115.5"
      />
      <path
        className="st3"
        d="M1078.7 1775.6h-9.3c-2.8 0-5-2.3-5-5v-38.4M1104.3 1775.6h9.3c2.8 0 5-2.3 5-5v-38.4"
      />
      <circle
        className="st24"
        cx={1042.3}
        cy={1679.3}
        r={9.2}
      />
      <text
        transform="translate(1073.486 1796.128)"
        className="st12 st10 st23">
        {"VX-104"}
      </text>
      <image
        style={{
          overflow: "visible",
          opacity: 0.2
        }}
        width={185}
        height={117}
        xlinkHref="data:image/png;base64,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"
        transform="translate(843.043 1622.94)"
      />
      <path
        className="st2"
        d="M944.1 1627.1h62.1c3.4 0 6.3 2.8 6.3 6.3v33.2c0 .8.3 1.6.8 2.2l5.3 6.5c1.1 1.3 1 3.3-.1 4.6l-5.1 5.5c-.6.6-.9 1.5-.9 2.4v36.9c0 3.4-2.8 6.3-6.3 6.3H853.7c-3.4 0-6.3-2.8-6.3-6.3v-91.3c0-3.5 2.8-6.3 6.3-6.3h90.4z"
      />

      {/* Presión de Rechazo Nano 01 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(6, "Presión de Rechazo Nano 01", false)}>
        <path
          className={getTarjetaClass(6, selected)}
          d="M853.7 1627.1h153.8V1731H853.7z"
        />
        <text
          transform="translate(872.69 1667.862)"
          className="st31">
          <tspan
            x={0}
            y={0}
            className="st18 st10 st32">
            {"Presi\xF3n de Rechazo"}
          </tspan>
          <tspan
            x={34}
            y={15.6}
            className="st18 st10 st32">
            {"Nano 01"}
          </tspan>
        </text>

        <text
          transform="translate(908.944 1713.634)"
          className="st12 st10 st33">
          {getScaledValue(datosScada.d6, 1)}
        </text>
        <text
          transform="translate(967.637 1713.238)"
          className="st12 st34 st32">
          {"bar"}
        </text>
        <text
          transform="translate(917.265 1645.861)"
          className="st12 st10 st23">
          {"PT-006"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(6, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(6, "Presión de Rechazo Nano 01");
        }}>
        <path d="M871.5 1702.6c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.1-2.5 2.2z" />
        <path d="M869.8 1701.6c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-2.9 1.5-3.7 3zM881.1 1700.3c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.7-2.5-2.2z" />
        <path d="M881.7 1698.4c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.3-2.3-2.4-3.7-3zM882.5 1707.6v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.7-.9-1.3-.9-2.1zM877.5 1715c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.8 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presión de Rechazo Nano 01 */}

      <path
        className="st17"
        d="M1019 1442.4h170c5.6 0 10.1-4.5 10.1-10.1V772.9"
      />
      <circle
        className="st24"
        cx={732.7}
        cy={1443.3}
        r={9.2}
      />
      <circle
        className="st24"
        cx={1106.3}
        cy={1443.3}
        r={9.2}
      />
      <path
        className="st0"
        d="M787.3 472.4v17"
      />
      <path
        className="st1"
        d="M792.1 477.6c0 .9-.7 1.6-1.6 1.6h-6.3c-.9 0-1.6-.7-1.6-1.6 0-.4.2-.8.5-1.1l3.1-3.1c.6-.6 1.5-.6 2.2-.1l3.2 3.2c.3.3.5.7.5 1.1z"
      />
      <path
        className="st2"
        d="M783.5 477.6c0-.2.1-.3.2-.4l3.1-3.1c.2-.2.6-.2.9 0l3.1 3.1c.1.1.2.3.2.4 0 .3-.2.6-.6.6h-6.3c-.3 0-.6-.3-.6-.6m-2 0c0 1.4 1.2 2.6 2.6 2.6h6.3c1.4 0 2.6-1.2 2.6-2.6 0-.7-.3-1.3-.8-1.8l-3.1-3.1-.1-.1-.1-.1c-1.1-.9-2.6-.8-3.5.2l-3.1 3.1c-.5.5-.8 1.1-.8 1.8z"
      />
      <text
        transform="translate(727.018 578.06)"
        className="st12 st10 st23">
        {"METABISULFITO"}
      </text>
      <path
        className="st19"
        d="M790.3 498.4h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
      />
      <path
        className="st20"
        d="M779.8 507.4h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
      />
      <path
        className="st26"
        d="M749.8 519.1h38.8v40h-38.8z"
      />
      <path
        className="st19"
        d="M788.6 512.4v45.2c0 .7-.4 1.3-.8 1.3h-37.1c-.5 0-.8-.6-.8-1.3v-45.2"
      />
      <circle
        className="st24"
        cx={489.1}
        cy={1153.4}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={178}
        height={140}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALMAAACNCAYAAAD8ZEsuAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAByRJREFUeNrsm4ly20YQBXFRPCRZ Thwn//9/8SFLvEkgQNVM/LjGSUqyTXRXTYGESaAENGdnZ+EoAgCAX4v4Bb8bcznhTIqO968icyzf QWZ4bZmLIWLHAyXWSFrEBjhX6Gqbi8hFX6njARInQaQidILQcKHIuWyPttXolDruEFllzRoiaZAZ uWFIWeHSHhoiD6T/gaxDZI9JGTcWU4sb25/aceJAYGSGPjJ7tj1YRt6XsStja7Gz2AciF31k1rIi NWFnZcwtFvLaBc8kOyMxDJG6kIzs4q7LWFmsxa19W3ZuysyakSuRb8u4K+O+jHe2vbV/8wydUDvD mbVyLhl5U8ZzGU9lfLNtHMhf2L6iTWYtLzIrJxYm8Psy/ijjzzIeTOiFfQaZ4RKZj5aZq7JiaQJ/ MbfSGvHzuslgU5mRWsadWUau5P1Qxt9l/GVSv5PsnNl3YkoNGFhiFFIrby0rP4pXkci+t/Bux0l2 zlpqZZW5ysofy/jHhP5QIzM1M1xSM++lxFiImwfb77G1fXFXzaxtuBub5N1LefFRZH6wkzIBhJeS eWvOTWz/3iaBzxLuWtRXZu9izC0zvxOhPbxm9vZcEhwHoEtkR7sZ7uTO6mf3bGauhYmzs8zIotOW nHcytJtxJycIJ37IDENlzs07z8i3FnPxbNJWAdRl5lgyswq9iL73mGfR94WTjC4GXIh2KMKFuRvJ yHVNhv+zc1M3IwmErlv5m1ArwwvhJaqvJmdSHbjEaVS/yvxDmREHmTksNybBSdJAYmSGS4kHRuMv oknouqfleh8c4IXF7pXez/mlALyWxNE5riU9Dl53EoC3ljzqkju58FcD8MvNIrvEBfhtZQZAZgBk BkBmAGQGZAZAZgBkBkBmQGYAZAZAZgBkBkBmQGYAZAZAZgBkBmQGQGYAZAZAZgBkBmQGQGYAZAZA ZkBmAGQGQGYAZAZAZkBmAGQGQGYAZAZkBkBmAGQGQGYAZAZkBkBmAGQGQGZAZgBkBkBmAGQGQGZA ZgBkBkBmAGQGZAZAZgBkBkBmAGQGZAZAZgBkBkBmQGYAZAZAZgBkBkBmQGYAZAZAZgBkBkBmQGYA ZAZAZgBkBmQGQGYAZAZAZgBkBmQGQGYAZAZAZkBmAGQGQGaAV5K5sIhkC3A1mblokB3gt5C5qNki Mbw1vfxLOg5QRS6ByPDa0obi9nYuabG/imND5MHnkBxeQ+pBjmXy5TjIxqHAh5p9qX1vrMQvePPG Lm/e4N0xqAwaxc5aDuwC78rYBtsqJiaz39R4hBKHf3d8hrx0jk6rgMq5vcQhSKRFUxLIeoq8LmMl MRORJ8FNjUcicyJ/d1+pi5ZhdIxzkiKQuXJtE4Qn0H1NiXsidNZQpxzty1uTd1nGN4u5CVyY8JPg xo4hE7vMXmalcg2SBqFDaXPJNMeGYbQYidC5yFy59myxNP/W9m+H4FpFfTKzp/qNHfCxjPsyFiZv ZL+WuZQbY5HZJU7t+mmkdg3TlqFUR75DzTCaj1Tmg8j8xeKrJdClZOhDTXbuLDN29ot4Npnn8vmd nUBlTq64zNBsnNh1qP7umzKmFv5+EogfycX3EW8nI58Oo4eayc4YuhahzJVv/5bxyYR+NhdV5tYJ oHc06mS+kc/uLfXfWe18E2Tma5dZRZ7baDWXyOUHXojMWrqtJVZyo/ZtmWckMq8sG382masM/WT7 t0PLDM0gG5PZM8zR9j3ZTZwFmfmay4xYSgsV+c5KsHspF6Yyl3CZdQ7ybNfwyV6vgsxzHKnMO/Hr 0bKylxqrc8qM8OCr4IZUw8CtiTy1YyTR6QJMfOUyT01kl/i93QTPrgv7TCpJwEUOb9RTkHnGInPR kkBXMhF8stcb6WgUfTJz3cF18uK18kzqw+zKS4xQ5kkg84NcbO3Hz6R+1lHuqw2dPoQ+BjLvR5SZ wwS6lxFsI2VYOPnLh8jsBfYhkNvr6InM3tPo/MWD31Hm1H7ILrOLqH3RtUyOXeZ1UAt+stcq8y46 XRwYQ2YOGw9HGeH2Mlodoo5efNbRLolqZN7KTU2uvFaumwCm0sXwXuhaZF6bnLeBzMsamb/YvmfJ PscRTQDrsrO2LtueB+otswodi8yJnaRt9etaZY6C1ty0prTwvvxDdNqT9w6Q18qfbetZWRcF8iCR jEVmda6oaVF2XpNswElU6jEuX0fRaa95J3VcKPNjQ5nhPfvH6PtiwFJq5bAeHOPydhHVP7vS+6m5 IbVNncBje8gokeFQJy4u80Lac1FNW24pk8ZN35pwJNm57fXFMnedIB7ZDYijH//Tgtd4PvmbWl2t fWZ9aMvLE53c8Gz4hX/7mJ9FfqkJYSLdHW9X+nuVWR9t3Mn7MS1fv0ktCOcLHT585Asrdc9mDJ6h AzL/jC5HmK3jhu7QoBk6IPPPzNJN1/asGTog869wPbtkBgAAuHL+E2AAxBMh4m4stkAAAAAASUVO RK5CYII="
        transform="translate(402.607 998.619)"
      />
      <path
        className="st2"
        d="M468.8 1008.3h-50.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h64.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-96.5z"
      />

      {/* Caudal de Mezcla */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(4, "Caudal de Mezcla", false)}>
        <path
          className={getTarjetaClass(4, selected)}
          d="M412.5 1015.7h159.1v99.8H412.5z"
        />
        <text
          transform="translate(463.088 1055.316)"
          className="st31">
          <tspan
            x={0}
            y={0}
            className="st18 st10 st32">
            {"Caudal de"}
          </tspan>
          <tspan
            x={9}
            y={15.6}
            className="st18 st10 st32">
            {"Mezcla"}
          </tspan>
        </text>

        <text
          transform="translate(467.448 1100.635)"
          className="st12 st10 st33">
          {getScaledValue(datosScada.d4, 1)}
        </text>
        <text
          transform="translate(522.714 1100.24)"
          className="st12 st34 st32">
          {"m\xB3/hr"}
        </text>
        <text
          transform="translate(475.77 1033.47)"
          className="st12 st10 st23">
          {"FIT-004"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(4, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(4, "Caudal de Mezcla");
        }}>
        <path d="M431.5 1089.5c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M429.8 1088.5c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9.7-1.3 1.8-2.2 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM441.1 1087.2c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M441.7 1085.4c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM442.6 1094.5v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM437.6 1102c.9 0 1.7-.8 1.7-1.7H436c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Caudal de Mezcla */}

      <path
        className="st18"
        d="M1250.1 1460.2h124.8v97.7h-124.8z"
      />
      <path
        className="st19"
        d="M1374.7 1443.9v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1v-111.2"
      />
      <text
        transform="translate(1282.218 1581)"
        className="st31">
        <tspan
          x={0}
          y={0}
          className="st12 st10 st23">
          {"ESTANQUE"}
        </tspan>
        <tspan
          x={13.5}
          y={13.2}
          className="st12 st10 st23">
          {"ORWT"}
        </tspan>
      </text>
      <path
        className="st17"
        d="M1293.2 1442.2v-38.3c0-4.7-3.8-8.7-8.5-8.7h-53"
      />
      <path
        className="st21"
        d="M1286.7 1445.4c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
      />
      <path
        className="st2"
        d="M1298.4 1445.4c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={178}
        height={140}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALMAAACNCAYAAAD8ZEsuAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABwdJREFUeNrsm4ty00gQRSVZdhIb Auxu8f8fuBAgtuO3Vq7qrr00o4cfFYJ1TlWX4pBIMDq66hmJLAMAgLdFfsXfzRlOOJOq4/PVZc4b togM1xa6atheLHMeBC7kezkiw5WF1joEoVulLnsmcRFqJF8jNVxT4oPVXr72ak3pvCONc5G3TJRK Tf8Ml/TJKvGurq1td/Y9lbvqm8x5SOPjz4zrmtR1J9ux1SgkNELDqf2xJ7LLu6lrHbYud9YkdNmS zC7yUd77uh7qmlo92PcmIjTtBlzSXuxN2KO4L1ZLqxfxatc0MSxbUtlFPor7rq73Vo/2eSpJ3ZTO AH1k9vbiKPLKBH6u64eFZdHQW/8kdNmRykdZZybwJ6u/6vpgQns6l8gMF8q8s5bimMLzur6ZX6U5 VYWeuWpL5tSE795kPsr7d12fbfvJBH8w4Uu5ehAaThE5CzIvLZGnFpS5/PlWJoTqWdXWZoykVz4m 8EeR+bOl86McMMoMcMpEMMo8E5F30n6s7GeKlGdNbcbIepV7E9bbjKPQ/9jWZR7LrYBUhnMngC7t MoisPfQ8+3kF7dDWM8c2wyeAM5v8fbCU/ihthq5mkMxwTjJXMgEcB5GfrX/2BYe4etaZzJrOd5LQ UxN7lv2/RFeG2EdmOFdmv8PvTWT17C6kctHUZsR3LYpEQt+FmkiLUSAxXCh1ISK3uTZKidyUzI4K HR9nj8IVUnA+4AJ0VcIdG4dSkVMvulVtbUZ8wSgP2/iiEcClQqf8Khp8y1Pp2+cgvPIJryl1KlA7 /SsuOAhSw2uJ3WthoeghLisU8DuTuTdM3OBPmiC2So7McDMgMyAzADIDIDMAMgMyAyAzADIDIDMA MgMyAyAzADIDIDMgMwAyAyAzADIDIDMgMwAyAyAzADIDMgMgMwAyAyAzADIDMgMgMwAyAyAzIDMA MgMgMwAyAyAzIDMAMgMgMwAyAzIDIDMAMgMgMwAyAzIDIDMAMgMgMyAzADIDIDMAMgMgMyAzADID IDMAMgMyAyAzADIDIDMAMgMyAyAzADIDIDMgMwAyAyAzADIDIDMgMwAyAyAzADIDMgMgMwAyAyAz ADIDMgMgMwAyAyAzADIDMgMgM8Ary1xJZbIF+B1UDV5elMxV1w4BriDuWY4VZ1wVAK8tdq/uoDhh R72iHuCKydzmYS+Zq/D1IVTqakFsuFZPrNKm3MuanCtbduY72LeU/8yQV0XyK5xEZD7Nt2SXUHbs eGe1CbW18t8fXXhS/1SBcxuvvKfcVUcaDVnmvbnmbkXn3MVUSmddMu9F5HVdq7pe6lrWNa1rbCdu kpA5H4DMTdU0Bqlb6JBXh6qEzJvg2Yt9XovQ+74y60C7yL7j57p+1DUzgXPbsctc3LjIeRC5COVj kCeSO9UH7mVbJW6fQxL6IDIvzbNn2brYG0nnXwKgbEnlrV0RLvJ3E/lORF7Z57IhnW5RZpW3DDUS qYuO1i3WfoAprf/enfh2dO1rXU/2tQu9Ni+T6Vy29C9bk3VhO7yXRN7ZlTITmW85mVMij60mNgYT q3FDSGhPuJbyOcgQhdZkdpkXlshf6vrXpP5u31+JzK1thu74IIO+kJPkIq/sgNMgc37DMnt5Ik/s An+wmtrWxfYxiW3bylJmKbfPtQh9GJjMVZDZO4EnE1pl9nFKLRO3JrNLO5IJnvc1C0vlB+mZRwNo Mwobs7FJO7VxeG/1TqQe25hkNm4+iZ7byfJaBKH9RA2pzdiLWy+Szt+sfpjkq3AH65wAauzn0j54 Wr+EVB6Hyc8ttho66RtJKrvIH+r6aIP9aON0L+O7FZH9JMV+MN5CqwGI3DZPW9h4zeWCP2kC2BT9 VZD5WUQeSy95y6kck/nBZH60AV/KMtJa0tll9lm63j6fQupsBiRzanK8FaFXoTZdbVjZcIBD4rOu A45lotO0LHeL6ayTv3uReSFroiuZHLvMG5lIf5F6ariFHgYgcNPyXHxwspU71r6tDStbDnhoSOpN kPiWJ35NMvsEcCoia82tf56IzHNrL76KzN5meM88tAlgqhtQqVVgXY/PTpXZhc7DlVPYlZLfeJ/c 1TePs5+fUK3DbHwWZPZkfpJ6Tiw5HbLhPg3Uh0dxxaJzXMqeBzrICT1k3Y9ub1XmTO5GpdwC/Za4 lt54muiZ/amWP9ma9+0HByS0JvVJ7zOXZx4oJfBQXjTyCzm+0eUtmL+7oqsZvsyps/RlEHmfDfdl o6qHb9m1ZO46SD6wE5Fnv75rq++y+IMTXWfehFm6PigZ2gpGH6FPpnwrf5E/cODz0IZ5Oq9lpUfX 6HehLdlm6Xd04cI+EC5b4fDH3Pqi0SgIr7PyfZjsITIyv6keOr4amgeZUzN0REbmNy91amz5D8HI fHNjisQAADAQ/hNgAOpLGIDiqB4mAAAAAElFTkSuQmCC"
        transform="translate(394.07 305.7)"
      />
      <path
        className="st2"
        d="M459.8 315.2h-50.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h64.7c3.5 0 6.3-2.8 6.3-6.3V321.5c0-3.5-2.8-6.3-6.3-6.3h-96.5z"
      />

      {/* E.C. de Alimentcaión Nano 01 y 02 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() =>
          loadGrafico(9, "E.C. de Alimentcaión Nano 01 y 02", false)
        }>
        <path
          className={getTarjetaClass(9, selected)}
          d="M403.5 322.6h159.1v99.8H403.5z"
        />
        <text
          transform="translate(423.029 362.134)"
          className="st31">
          <tspan
            x={0}
            y={0}
            className="st18 st10 st32">
            {"E.C. de Alimentaci\xF3n"}
          </tspan>
          <tspan
            x={22}
            y={15.6}
            className="st18 st10 st32">
            {"Nano 01 y 02"}
          </tspan>
        </text>

        <text
          transform="translate(458.45 407.452)"
          className="st12 st10 st33">
          {getScaledValue(datosScada.d9, 1)}
        </text>
        <text
          transform="translate(511.717 407.057)"
          className="st12 st34 st32">
          {"\xB5S/cm"}
        </text>
        <text
          transform="translate(466.773 340.287)"
          className="st12 st10 st23">
          {"AE-001"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(9, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(9, "E.C. de Alimentcaión Nano 01 y 02");
        }}>
        <path d="M424.5 396.4c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M422.8 395.4c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM434.1 394.1c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M434.7 392.3c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM435.6 401.4v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM430.6 408.9c.9 0 1.7-.8 1.7-1.7H429c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin E.C. de Alimentcaión Nano 01 y 02 */}

      <circle
        className="st24"
        cx={661.2}
        cy={462.1}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={178}
        height={140}
        xlinkHref="data:image/png;base64,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 SUVORK5CYII="
        transform="translate(572.309 305.7)"
      />
      <path
        className="st2"
        d="M638 315.2h-50.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h64.7c3.5 0 6.3-2.8 6.3-6.3V321.5c0-3.5-2.8-6.3-6.3-6.3H638z"
      />

      {/* Temperatura Nano 01 y 02 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(13, "Temperatura Nano 01 y 02", false)}>
        <path
          className={getTarjetaClass(13, selected)}
          d="M581.7 322.6h159.1v99.8H581.7z"
        />
        <text
          transform="translate(624.755 362.134)"
          className="st31">
          <tspan
            x={0}
            y={0}
            className="st18 st10 st32">
            {"Temperatura"}
          </tspan>
          <tspan
            x={-1.5}
            y={15.6}
            className="st18 st10 st32">
            {"Nano 01 y 02"}
          </tspan>
        </text>

        <text
          transform="translate(643.69 407.452)"
          className="st12 st10 st33">
          {getScaledValue(datosScada.d13, 1)}
        </text>
        <text
          transform="translate(703.957 407.057)"
          className="st12 st34 st32">
          {"\xB0C"}
        </text>
        <text
          transform="translate(645.013 340.287)"
          className="st12 st10 st23">
          {"TT-001"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(13, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(13, "Temperatura Nano 01 y 02");
        }}>
        <path d="M602.8 396.4c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M601.1 395.4c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM612.4 394.1c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M613 392.3c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM613.9 401.4v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM608.9 408.9c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Temperatura Nano 01 y 02 */}

      <circle
        className="st24"
        cx={930.9}
        cy={462.1}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={178}
        height={140}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALMAAACNCAYAAAD8ZEsuAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABwdJREFUeNrsm4ty00gQRSVZdhIb Auxu8f8fuBAgtuO3Vq7qrr00o4cfFYJ1TlWX4pBIMDq66hmJLAMAgLdFfsXfzRlOOJOq4/PVZc4b togM1xa6atheLHMeBC7kezkiw5WF1joEoVulLnsmcRFqJF8jNVxT4oPVXr72ak3pvCONc5G3TJRK Tf8Ml/TJKvGurq1td/Y9lbvqm8x5SOPjz4zrmtR1J9ux1SgkNELDqf2xJ7LLu6lrHbYud9YkdNmS zC7yUd77uh7qmlo92PcmIjTtBlzSXuxN2KO4L1ZLqxfxatc0MSxbUtlFPor7rq73Vo/2eSpJ3ZTO AH1k9vbiKPLKBH6u64eFZdHQW/8kdNmRykdZZybwJ6u/6vpgQns6l8gMF8q8s5bimMLzur6ZX6U5 VYWeuWpL5tSE795kPsr7d12fbfvJBH8w4Uu5ehAaThE5CzIvLZGnFpS5/PlWJoTqWdXWZoykVz4m 8EeR+bOl86McMMoMcMpEMMo8E5F30n6s7GeKlGdNbcbIepV7E9bbjKPQ/9jWZR7LrYBUhnMngC7t MoisPfQ8+3kF7dDWM8c2wyeAM5v8fbCU/ihthq5mkMxwTjJXMgEcB5GfrX/2BYe4etaZzJrOd5LQ UxN7lv2/RFeG2EdmOFdmv8PvTWT17C6kctHUZsR3LYpEQt+FmkiLUSAxXCh1ISK3uTZKidyUzI4K HR9nj8IVUnA+4AJ0VcIdG4dSkVMvulVtbUZ8wSgP2/iiEcClQqf8Khp8y1Pp2+cgvPIJryl1KlA7 /SsuOAhSw2uJ3WthoeghLisU8DuTuTdM3OBPmiC2So7McDMgMyAzADIDIDMAMgMyAyAzADIDIDMA MgMyAyAzADIDIDMgMwAyAyAzADIDIDMgMwAyAyAzADIDMgMgMwAyAyAzADIDMgMgMwAyAyAzIDMA MgMgMwAyAyAzIDMAMgMgMwAyAzIDIDMAMgMgMwAyAzIDIDMAMgMgMyAzADIDIDMAMgMgMyAzADID IDMAMgMyAyAzADIDIDMAMgMyAyAzADIDIDMgMwAyAyAzADIDIDMgMwAyAyAzADIDMgMgMwAyAyAz ADIDMgMgMwAyAyAzADIDMgMgM8Ary1xJZbIF+B1UDV5elMxV1w4BriDuWY4VZ1wVAK8tdq/uoDhh R72iHuCKydzmYS+Zq/D1IVTqakFsuFZPrNKm3MuanCtbduY72LeU/8yQV0XyK5xEZD7Nt2SXUHbs eGe1CbW18t8fXXhS/1SBcxuvvKfcVUcaDVnmvbnmbkXn3MVUSmddMu9F5HVdq7pe6lrWNa1rbCdu kpA5H4DMTdU0Bqlb6JBXh6qEzJvg2Yt9XovQ+74y60C7yL7j57p+1DUzgXPbsctc3LjIeRC5COVj kCeSO9UH7mVbJW6fQxL6IDIvzbNn2brYG0nnXwKgbEnlrV0RLvJ3E/lORF7Z57IhnW5RZpW3DDUS qYuO1i3WfoAprf/enfh2dO1rXU/2tQu9Ni+T6Vy29C9bk3VhO7yXRN7ZlTITmW85mVMij60mNgYT q3FDSGhPuJbyOcgQhdZkdpkXlshf6vrXpP5u31+JzK1thu74IIO+kJPkIq/sgNMgc37DMnt5Ik/s An+wmtrWxfYxiW3bylJmKbfPtQh9GJjMVZDZO4EnE1pl9nFKLRO3JrNLO5IJnvc1C0vlB+mZRwNo Mwobs7FJO7VxeG/1TqQe25hkNm4+iZ7byfJaBKH9RA2pzdiLWy+Szt+sfpjkq3AH65wAauzn0j54 Wr+EVB6Hyc8ttho66RtJKrvIH+r6aIP9aON0L+O7FZH9JMV+MN5CqwGI3DZPW9h4zeWCP2kC2BT9 VZD5WUQeSy95y6kck/nBZH60AV/KMtJa0tll9lm63j6fQupsBiRzanK8FaFXoTZdbVjZcIBD4rOu A45lotO0LHeL6ayTv3uReSFroiuZHLvMG5lIf5F6ariFHgYgcNPyXHxwspU71r6tDStbDnhoSOpN kPiWJ35NMvsEcCoia82tf56IzHNrL76KzN5meM88tAlgqhtQqVVgXY/PTpXZhc7DlVPYlZLfeJ/c 1TePs5+fUK3DbHwWZPZkfpJ6Tiw5HbLhPg3Uh0dxxaJzXMqeBzrICT1k3Y9ub1XmTO5GpdwC/Za4 lt54muiZ/amWP9ma9+0HByS0JvVJ7zOXZx4oJfBQXjTyCzm+0eUtmL+7oqsZvsyps/RlEHmfDfdl o6qHb9m1ZO46SD6wE5Fnv75rq++y+IMTXWfehFm6PigZ2gpGH6FPpnwrf5E/cODz0IZ5Oq9lpUfX 6HehLdlm6Xd04cI+EC5b4fDH3Pqi0SgIr7PyfZjsITIyv6keOr4amgeZUzN0REbmNy91amz5D8HI fHNjisQAADAQ/hNgAOpLGIDiqB4mAAAAAElFTkSuQmCC"
        transform="translate(841.984 305.7)"
      />
      <path
        className="st2"
        d="M907.7 315.2h-50.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h64.7c3.5 0 6.3-2.8 6.3-6.3V321.5c0-3.5-2.8-6.3-6.3-6.3h-96.5z"
      />

      {/* ORP */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(19, "ORP", false)}>
        <path
          className={getTarjetaClass(19, selected)}
          d="M851.4 322.6h159.1v99.8H851.4z"
        />
        <text
          transform="translate(917.555 372.134)"
          className="st18 st10 st32">
          {"ORP"}
        </text>

        <text
          transform="translate(906.366 407.452)"
          className="st12 st10 st33">
          {getScaledValue(datosScada.d19, 1)}
        </text>
        <text
          transform="translate(959.632 407.057)"
          className="st12 st34 st32">
          {"mV"}
        </text>
        <text
          transform="translate(914.688 340.287)"
          className="st12 st10 st23">
          {"AE-002"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(19, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(19, "ORP");
        }}>
        <path d="M872.4 396.4c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M870.7 395.4c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM882 394.1c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M882.6 392.3c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM883.5 401.4v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM878.5 408.9c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin ORP */}

      <circle
        className="st24"
        cx={1106.7}
        cy={462.1}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={178}
        height={140}
        xlinkHref="data:image/png;base64,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 AOl+GexMFKBJAAAAAElFTkSuQmCC"
        transform="translate(1019.51 305.9)"
      />
      <path
        className="st2"
        d="M1085 315.2h-50.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h64.7c3.5 0 6.3-2.8 6.3-6.3V321.5c0-3.5-2.8-6.3-6.3-6.3H1085z"
      />

      {/* Presión de Alimentación */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(20, "Presión de Alimentación", false)}>
        <path
          className={getTarjetaClass(20, selected)}
          d="M1028.7 322.6h159.1v99.8h-159.1z"
        />
        <text
          transform="translate(1077.93 362.134)"
          className="st31">
          <tspan
            x={0}
            y={0}
            className="st18 st10 st32">
            {"Presi\xF3n de"}
          </tspan>
          <tspan
            x={-6.1}
            y={15.6}
            className="st18 st10 st32">
            {"Alimentaci\xF3n"}
          </tspan>
        </text>

        <text
          transform="translate(1090.731 407.452)"
          className="st12 st10 st33">
          {getScaledValue(datosScada.d20, 1)}
        </text>
        <text
          transform="translate(1150.997 407.057)"
          className="st12 st34 st32">
          {"bar"}
        </text>
        <text
          transform="translate(1092.054 340.287)"
          className="st12 st10 st23">
          {"PT-001"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(20, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(20, "Presión de Alimentación");
        }}>
        <path d="M1049.8 396.4c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M1048.1 395.4c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9.7-1.3 1.8-2.2 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM1059.4 394.1c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M1060 392.3c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM1060.9 401.4v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1055.9 408.9c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presión de Alimentación */}

      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={178}
        height={251}
        xlinkHref="data:image/png;base64,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 RK5CYII="
        transform="translate(1019.51 508.9)"
      />
      <path
        className="st2"
        d="M1085 518.8h-50.1c-3.5 0-6.3 2.8-6.3 6.3v212.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h64.7c3.5 0 6.3-2.8 6.3-6.3V525.1c0-3.5-2.8-6.3-6.3-6.3H1085z"
      />

      <path
        className="st25"
        d="M1046.1 631.8h124"
      />

      {/* E.C. de Producto Nano 02 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(16, "E.C. de Producto Nano 02", false)}>
        <path
          className={getTarjetaClass(16, selected)}
          d="M 1028.6 632.9 z M 1028.6 526.9 h 159.2 v 103.9 h -159.2 z"
        />
        <text
          transform="translate(1059.332 570.936)"
          className="st31">
          <tspan
            x={0}
            y={0}
            className="st18 st10 st32">
            {"E.C. de Producto"}
          </tspan>
          <tspan
            x={24.9}
            y={15.6}
            className="st18 st10 st32">
            {"Nano 02"}
          </tspan>
        </text>

        <text
          transform="translate(1083.958 615.61)"
          className="st12 st10 st33">
          {getScaledValue(datosScada.d16, 1)}
        </text>
        <text
          transform="translate(1141.839 615.214)"
          className="st12 st34 st32">
          {"\xB5S/cm"}
        </text>
        <text
          transform="translate(1090.573 549.543)"
          className="st12 st10 st23">
          {"AE-005"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(16, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(16, "E.C. de Producto Nano 02");
        }}>
        <path d="M1041.6 605.5c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-1.9 1.1-2.5 2.2z" />
        <path d="M1039.9 604.5c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9.7-1.3 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM1051.2 603.2c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.7-2.5-2.2z" />
        <path d="M1051.8 601.4c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.3-2.4-3.7-3zM1052.7 610.5V609c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1047.7 618c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin E.C. de Producto Nano 02 */}

      {/* Caudal de Permeado Nano 02 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(15, "Caudal de Permeado Nano 02", false)}>
        <path
          className={getTarjetaClass(15, selected)}
          d="M 1028.6 632.9 h 159.2 v 103.8 h -159.2 z z M 1028.6 632.9 h 159.2 v 103.8 h -159.2 z h 159.2 v 103.9 h -159.2 z"
        />
        <text
          transform="translate(1047.263 677.805)"
          className="st31">
          <tspan
            x={0}
            y={0}
            className="st18 st10 st32">
            {"Caudal de Permeado"}
          </tspan>
          <tspan
            x={36.9}
            y={15.6}
            className="st18 st10 st32">
            {"Nano 02"}
          </tspan>
        </text>

        <text
          transform="translate(1083.959 721.124)"
          className="st12 st10 st33">
          {getScaledValue(datosScada.d15, 1)}
        </text>
        <text
          transform="translate(1145.114 720.728)"
          className="st12 st34 st32">
          {"m\xB3/hr"}
        </text>
        <text
          transform="translate(1090.657 656.165)"
          className="st12 st10 st23">
          {"FIT-005"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(15, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(15, "Caudal de Permeado Nano 02");
        }}>
        <path d="M1041.6 707c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M1039.9 706c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM1051.2 704.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M1051.8 702.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM1052.7 712v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1047.7 719.5c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Caudal de Permeado Nano 02 */}

      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={178}
        height={250}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALIAAAD6CAYAAAAFgR1pAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB91JREFUeNrs2gtTG8kVgNEZacAY bMdbu5vK//95ScXLGrAAIU2kqtvJdXtmEI/Ya805VV08DKIsfdPqbqlp4Ai0P/j3oei/V4jtAZ/D a0TcPzXw7sCA82gGvobXirmvxkFBdwfMwIv4fDEwWrMyrxRxGdtqlO9NxtweMAsvY3TpY1fFbKnB S5cSJdzNbjzE2KSRwz5oRm7TDFzCPdmNN7txmkYJeyFkXhBymYlzwPfVWMe/N2MxdxMz8jIFfLYb 5zHepqhPBpYZ8NQlxTYC3gd7txu3u7FK4zaCbsZi7gYCzjPxm4j33W582I338flFxH0SP9daL/PM GbksGdYR6z7cm924irFMTdWbwH4q5Dwbn0W4v6TxMYJ+m5YYC6cYPDPosi4us3GJ+DIm0mX1s3kp Mjgj57Vxno0/RMB/343fduPX+N5F/IyQeelJRQl5v4S4jojPUp+btIYun+dZenJpcRohv4+Q9xH/ Iz5+FDKvtLzIIa8i5PNYETQR710a99Hbdmpp0aQZ+TSWD+8i3F8j4t8j7KGQ4bmbvTIj54jL925i fIne1nVvU0uL0wj1ImblDxH0L9WMXI7gbPR47oxcTi1uU5PrCPdzOlwY2pNNLi1yzGcxM18MjNNq Vylknnty8ZB6fIiIywnZ2/TsP/TaxX9/sR2YlcvJxUmanfMo58hLAfNC2/SsfpYmz7OqtdFlbL20 GJuZ67FMw/qYl2pTj12aQPOoZ+M8+fZTL1G3zeNvGPIuOF5L3Vc9WS6a4Xdh9k2azqeulFa0fOfZ uZ5MHz3eXTzjxhtB852WGge/9WHxSLhOIvgRs/GTJ8uF+46fdIYWMse5UwQhg5BByCBkhAxCBiGD kBEyCBmEDEJGyCBkEDIIGSGDkEHIIGQQMkIGIYOQQcgIGYQMQgYhI2QQMggZhIyQQcggZBAyCBkh g5BByCBkhAxCBiGDkBEyCBmEDEJGyCBkEDIIGSGDkEHIIGQQMkIGIYOQQcgIGYQMQgYhI2QQMggZ hIyQQcggZBAyCBkhg5BByCBkhAxCBiGDkBEyCBmEDEJGyCBkEDIIGSG7CxAyCBmEDEJGyCBkEDII GSGDkEHIIGSEDEIGIYOQETIIGYQMQgYhI2QQMggZhIyQQcggZBAyQgYhg5BByAgZhAxCBiGDkBEy CBmEDEJGyCBkEDIIGSGDkEHIIGSEDEIGIYOQETIIGYQMQgYhI2QQMggZhIyQQcggZBAyQgYhg5BB yAgZhAxCBiGDkBEyCBmEDEJGyCBkEDIIGSGDkEHIIGSEDEIGIYOQQcgIGYQMQgYhI2QQMggZhIyQ QcggZBAyQoa/oD597IXMzxDso9E+JeT6BuFHz8D9aywt+pdcLfCMWbmMbYzJ5hZPvFEB8/8Md5vG JsZ2IOZvZunugBuu/8D20KtkBtpXegoV8tcBP6SxjvGQwv4m5m7kTu0HbnRd/YFyxfQz3DS2zwy7 n1gLzjnkbRXt3W7cxth/fh/fzyF/pUs31lZXR4n4Pm4s3/hZ+t1lFXI7k5Dr8VjQveXa4AVdZuJ1 tPUlxk2ML/H9yZi7kauj3PB9uvHrGOfp99bx+SI9eO1MAl6k/3f+vL4f+pGn0Km135xOJcqkuY7O Pu/Gn/HxczRXYi6rgm+Wtd3IWuUhXSH7q+Iqbnwf8Un83P7f38TXi5GZ6diWEjnaZYwufVykMTZB PFRLts3ALNPPJObc210Eu+/s3zH+iK/3Ma9iYj1oRm7SDd/HL+8jvkzLiT7+6E187yQeyGOekdt0 yrOI++EkxmmM8nU3cD/US7U8pjYyc5iRy/1SJs3PEfE/U8xXKeSHpywt8hVyFQ/UMv79Pv7guzQj LyfWi8e0pCgzcQl4fyG/jXEW4zTN0vnByku1VXq6vE0P0GZGIfcTIf8REf8rJtHrdD9thpZiY0uL TfzSl7SZK8uJVfyx8wi5Sz9zzEuLNi0hSsTncUGXsY6oy/3SDkwMZal2ndZ/d1NPm0d+WrFNJxVl L/ZnxHyZlha31WaveWxGzjPIbYqzPBj7G71Is8/JwLqwPfKQ36SI3+/Gx7ivPqSYT1PI99WDdJk2 NDePPW3O5MSiPljIF/sq2nsYW36NLS3qXXc+HrmuIu5mstlr07KihLyP+G8pxnJMeRE/s4hJoTxt XsZM8ynNOGMP1Nw2e/XSa9V8fZY8ed90E39kM7GzPElr4+VAxMc+I5+mkK+q9e4qvn8WIZf13+cI t+zIP1Uhz3FGziuAsgpYj2yGJ19N7ib+0HYg5PvqyGkxsjY+xpk5H7uVNfJV879D+1XaxOWQN2nT /ClGPlq6qc5I+xmFXK+VN9Xx5GbgNOfJM/LY7nLRfPsCwLG/mpeP3/I6eZWe+u7S0quekfMxZpmJ L9Nmb26nFmMnGEMvFB10vt4deOVs0saljncuL0k31RFcfg9AeRm/BFuvkVfpaKls8q7SiUW9G5/r S9ZjL90/en90z1jTNDNZSkytlRfpaS+v7cqMnE8tNinym/j3vDlcz2yTd8hSo3nqBd098w/21YM7 pwegHXgKzIf6182358j5HV2rZvwdXXN9F1z/Gg8KL5uZl83XL1efpM1wucgfqh15fp+F93W/4tqP l8Vcv4kov0CUXy3dPGUnjpB/xGnG2Ns5m4Ed+Nze6Sbkn2x2njrJefJOHCH/le9PAQNwxP4jwAC9 Ixq74UmLYwAAAABJRU5ErkJggg=="
        transform="translate(1019.51 1179.9)"
      />
      <path
        className="st2"
        d="M1085 1189.2h-50.1c-3.5 0-6.3 2.8-6.3 6.3v212.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h64.7c3.5 0 6.3-2.8 6.3-6.3v-212.3c0-3.5-2.8-6.3-6.3-6.3H1085z"
      />

      <path
        className="st25"
        d="M1046.1 1302.2h124"
      />

      {/* E.C. de Producto Nano 01 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(10, "E.C. de Producto Nano 01", false)}>
        <path
          className={getTarjetaClass(10, selected)}
          d="M 1028.6 1303.3 z M 1028.6 1197.3 h 159.2 v 103.9 h -159.2 z"
        />
        <text
          transform="translate(1059.332 1241.306)"
          className="st31">
          <tspan
            x={0}
            y={0}
            className="st18 st10 st32">
            {"E.C. de Producto"}
          </tspan>
          <tspan
            x={24.9}
            y={15.6}
            className="st18 st10 st32">
            {"Nano 01"}
          </tspan>
        </text>

        <text
          transform="translate(1083.958 1285.98)"
          className="st12 st10 st33">
          {getScaledValue(datosScada.d10, 1)}
        </text>
        <text
          transform="translate(1141.839 1285.584)"
          className="st12 st34 st32">
          {"\xB5S/cm"}
        </text>
        <text
          transform="translate(1090.573 1219.913)"
          className="st12 st10 st23">
          {"AE-003"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(10, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(10, "E.C. de Producto Nano 01");
        }}>
        <path d="M1041.6 1275.9c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-1.9 1.1-2.5 2.2z" />
        <path d="M1039.9 1274.9c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9.7-1.3 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM1051.2 1273.6c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.7-2.5-2.2z" />
        <path d="M1051.8 1271.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.3-2.4-3.7-3zM1052.7 1280.9v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1047.7 1288.4c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin E.C. de Producto Nano 01 */}

      {/* Caudal de Permeado Nano 01 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(8, "Caudal de Permeado Nano 01", false)}>
        <path
          className={getTarjetaClass(8, selected)}
          d="M 1028.6 1303.3 h 159.2 v 103.8 h -159.2 z v 103.9 z"
        />
        <text
          transform="translate(1047.263 1348.175)"
          className="st31">
          <tspan
            x={0}
            y={0}
            className="st18 st10 st32">
            {"Caudal de Permeado"}
          </tspan>
          <tspan
            x={36.9}
            y={15.6}
            className="st18 st10 st32">
            {"Nano 01"}
          </tspan>
        </text>
        <text
          transform="translate(1083.959 1391.493)"
          className="st12 st10 st33">
          {getScaledValue(datosScada.d8, 1)}
        </text>
        <text
          transform="translate(1145.114 1391.098)"
          className="st12 st34 st32">
          {"m\xB3/hr"}
        </text>
        <text
          transform="translate(1090.657 1326.534)"
          className="st12 st10 st23">
          {"FIT-002"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(8, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(8, "Caudal de Permeado Nano 01");
        }}>
        <path d="M1041.6 1377.4c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M1039.9 1376.4c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM1051.2 1375.1c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M1051.8 1373.3c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM1052.7 1382.4v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1047.7 1389.9c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Caudal de Permeado Nano 01 */}
    </svg>
  );
};

export default ScadaNanoConcon;

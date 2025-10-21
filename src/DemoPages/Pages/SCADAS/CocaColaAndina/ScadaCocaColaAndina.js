import * as React from "react";
import {
  getColorConexion,
  getConexion,
  getScaledValue,
  getTarjetaClass,
  getTemaAlarma
} from "../../../../commons/scada/scada";

const ScadaCocaColaAndina = (props) => {
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
      viewBox="0 0 1429.5 1798"
      style={{
        enableBackground: "new 0 0 1429.5 1798"
      }}
      xmlSpace="preserve"
      {...props}>
      <style>
        {
          ".st0{fill:#0e76e7}.st1{fill:none;stroke:#2f3e49;stroke-width:4;stroke-miterlimit:10}.st2{enable-background:new}.st3{fill:#606060}.st5{font-size:11px}.st6{fill:none;stroke:#35ace8;stroke-width:4;stroke-miterlimit:10}.st7{fill:#00aeed}.st8{fill:#fff}.st11{fill:#3574e0}.st14{fill:#666}.st15{font-size:14px}.st17{font-size:17px}.st20{fill:none;stroke:#00aeed;stroke-width:4;stroke-miterlimit:10}.st21{fill:#2f3e49}.st22{opacity:.15;fill:#0e76e7;enable-background:new}.st23{fill:#fff;stroke:#35ace8;stroke-width:4;stroke-miterlimit:10}.st25{font-size:15px}.st26{font-size:13px}.st27,.st28{opacity:.5;fill:none;stroke:#b2b2b2;stroke-width:.5;stroke-miterlimit:10;enable-background:new}.st28{opacity:.6;stroke:#cbcbcb;stroke-width:2}.st29{fill:#cbcbcb}.st30{fill:#00a39b}.st31{fill:#323e48}.st32,.st33{fill:none;stroke:#323e48;stroke-width:4;stroke-miterlimit:10}.st33{stroke:#fff;stroke-width:2}.st34{fill:#f2f2f2;enable-background:new}.tarjeta{fill:#ffffff}.tarjetaSeleccionada{fill:#3574e0;opacity:.15}.cursorPointer{cursor:pointer}.cursorNormal{cursor:default}.campana{fill:#3474E0;}.campana:hover{fill:#7c7c7c;}.campanaVacia{fill:#c2c2c1;}.campanaVacia:hover{fill:#7c7c7c;}.campanaDesconectada{fill:#c2c2c1;}"
        }
      </style>
      <path
        className="st0"
        d="M1200.4 1592.8h124.8v97.7h-124.8z"
      />
      <path
        className="st1"
        d="M1325 1576.4v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1v-111.2"
      />
      <text
        transform="translate(1234.955 1713.573)"
        className="st2">
        <tspan
          x={0}
          y={0}
          className="st3 st4 st5">
          {"TK - AGUA"}
        </tspan>
        <tspan
          x={-4}
          y={13.2}
          className="st3 st4 st5">
          {"PRODUCTO"}
        </tspan>
      </text>
      <path
        className="st6"
        d="M944.9 1330.2h283.3c2.8 0 5 2.3 5 5v239.9"
      />
      <path
        className="st7"
        d="M308.7 1317.1c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
      />
      <path
        className="st8"
        d="M320.4 1317.1c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <path
        className="st6"
        d="M314.7 1277.8v36.4"
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
        className="st8"
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
        className="st8"
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
        className="st11"
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
        className="st14 st4 st15">
        {"Funcionando"}
      </text>
      <text
        transform="translate(1160.93 125.915)"
        className="st14 st4 st15">
        {"Movi\xE9ndose"}
      </text>
      <text
        transform="translate(1160.93 145.915)"
        className="st14 st4 st15">
        {"Falla"}
      </text>
      <text
        transform="translate(1160.93 165.915)"
        className="st14 st4 st15">
        {"Bloqueada"}
      </text>
      <text
        transform="translate(1160.93 185.915)"
        className="st14 st4 st15">
        {"Detenida"}
      </text>
      <text
        transform="translate(75.498 77.731)"
        className="st3 st16 st15">
        {"Conectividad de Planta"}
      </text>

      {/* Label Conectividad Planta */}
      <text
        transform="translate(109.29 128.21)"
        className="st3 st16 st17">
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
        className="st8"
        cx={85.5}
        cy={122.2}
        r={12.1}
      />

      {/* Color Conectividad Planta */}
      <circle
        cx={85.5}
        cy={122.1}
        r={8.9}
        fill={getColorConexion(datosScada.conexion)}
      />

      <text
        transform="translate(1134.967 77.731)"
        className="st3 st16 st15">
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
        className="st20"
        d="M51 334.3h86.5c4.7 0 8.5 3.8 8.5 8.5v38.3"
      />
      <path
        className="st0"
        d="M113 395.7h124.8v97.7H113z"
      />
      <path
        className="st1"
        d="M237.6 379.4v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1V379.4"
      />
      <path
        className="st21"
        d="M333.9 458.1h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
      />
      <path
        className="st7"
        d="M286.3 495.1c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st8"
        d="M286.3 483.4c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <text
        transform="translate(147.995 516.535)"
        className="st2">
        <tspan
          x={0}
          y={0}
          className="st3 st4 st5">
          {"TK - AGUA"}
        </tspan>
        <tspan
          x={-13.8}
          y={13.2}
          className="st3 st4 st5">
          {"ALIMENTACI\xD3N"}
        </tspan>
      </text>
      <path
        className="st20"
        d="M244.9 488.2h38.5M340.4 463.2h570.1"
      />
      <path
        className="st7"
        d="M139.4 384.2c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
      />
      <path
        className="st8"
        d="M151.1 384.2c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        width={39}
        height={39}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA8RJREFUeNrsmHlv2kAQxb1rG8KR hIQ2TXpI/f5fq2eaNuTgtLG36+pN9DJasA20/SdII8CY8c9v5/JG0cvr5fV/X+Yf+XS7OksODGUC gG4f4OQAYNpsAMYRVNkG1OypmFUWw1jJkqygz45g3SEVZKUEKPXWgb8Ux0TJCmoNy+hzQcAbFU12 hIvx3wqq661H1sXxGBesYFawhbclrILNCdaFIJMd4QRs4G3o7QR2jGNH8O0AVgHNvD16m+J9RsC5 UtO1BdRwPcCMvL3yNvZ2ju/H+J0B5wC793bn7dbbBN8fALpSSeSaAjJcCnVOAPXG25W3S2+vvZ0B 8AjnlljKBQAruF/ebrz9gEm8Opzr2gDqhOhiSccA+wB7C8BTLHE3EIMzqHULpYd0XkSZ7bDc1XVd UwUtlrYPlS4A9hHvV1hiVs9QKckBOcJNDCkMIspozuxaQC6+Ce72mNR7D7h3UO8EN5BSLWRFcpXp cu2cMluyW7LaJA3VS+H4FElxqWJvBLiOqoESSwnVyISWNacEkgxf4Hi5DdAEkqMPwDGgLrCsopyo ovuxU11Hfl8DRuLyJ947UHJdlyS6tAwAcw7IM3zvURexNe00JmjxN1LlqcPt0tYssaX468PhKQX6 UaC1telCPfjtq9gUtRs55eIsnUO6xTbl6uJaYlJaY4fiU/wZ22CEislRj+KNlTMt4EL1NVG+DC9h m0KdkMUtlatLxo0xVvfigbNUFX/XUd6pWbEgv8+GBVvjhB3kKKIZzXXlHpDsl8euZ6B2i2IRdYEM tWlOY9IqMCY1Ua6kITajWXFFoE+QtsHSFjQyPWJEknmuLaQArmmAnaGDzHGMAWuHhZIUnNE8N0HB HlI2R9RJokA34Z4sN/wAf3LTc9WLnxxvyi5dt7qof71AHbQqHnVyMdwUbe3a2xdvn719x6w4BeSf +I9blAN+QEqp8dsAFCcXgy2hFMN9wvs1lFzwc0rcoEZFATVt4LGyUECcBAsKEQ1XqfcNx6c4/ymm kwa1KqI4nJJyESAkecbo1QPV8GVgXeC8O4z8X2vgGj+TROoi/Ly7wkUnmBN5iEjovxklxYSeSa4x Zt3THFi0earTKuZYKheY526goACyghkpLVVggs9csnShbtXkOf5SymiZcIb0rBFa4iUt85RqH4/5 he5MZsfGbmlo6BBsV810RtVS6UjSObINLW7nzSMT2Dji8hPrgTPQ3tb0uaDf3aF2t0xgh8uoXS6z ocW5trtb++ywmi2bl6ZmbHN/e39wkw/TsCI0HtF+CzAA78akAr65l7cAAAAASUVORK5CYII="
        transform="translate(295.204 454.817) scale(.8974)"
      />
      <circle
        className="st8"
        cx={313.1}
        cy={472.6}
        r={10.9}
      />
      <circle
        className="st22"
        cx={313.1}
        cy={472.4}
        r={8}
      />
      <text
        transform="translate(298.487 512.307)"
        className="st3 st4 st5">
        {"P-001"}
      </text>
      <path
        className="st21"
        d="M1083.9 433.1h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
      />
      <path
        className="st7"
        d="M1036.4 470.1c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st8"
        d="M1036.4 458.4c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        width={39}
        height={39}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7RJREFUeNrsmA1v2jAQhuPEgQJt oe2mfW///3dt2ta160opXwkks6v30LubAw5lmzQ10qsASo7Hd77z2UnydD1d//dl/rmBgD2jvteQ XPXfBjQBse1aQdYB6D8G6N9PG5QooEopCtQcCMw65bh7ZQTpYdZOK9Ia0rAHATQEJWBHUBfqADIB SOm0VCoIuNGjdk+4HOo59Z2OnU6gPmBzvCNwM6d7pynkv88BWmAgvyWS3ROuC5BTpzOnc2hEkAw4 A9Sd09jpFvLfJ7BdUNg3kHaPsPrwDQDz3Oml0wt8Pgd0D88l+OMFvOfhfjhdOV3jnuP3KTxdtwUU uAzG+oDzUG+c3jq9xvczeLBHtlcUYu+xGzx3iqlgVb2s4cmH32yLGmfxx97wM8B9cHoPQO/BIQbA SVIhzAt4aQQbAzyXEpRoAxvrQYt5N0AYxXse7h3CPEKydPF8qjzSx/sDmgIZDUCSpaS5aGyE9yS8 XYTvHEDea68AewG4I4LTK0kOqJyeqcizkuFzShhjW2SuhPcC4ZTEOCO4joLjspFSARe4JcBukTyS 2XPM3cYQG+VBATwB0AU8OUTIungma4DT63SN94aYGpI0fTVF1mlEiKW0COBQTfRtcEmggchoTvfg /WPYOiJbD5FII0PcIWMnuOvRmghbcnHZ4uUx1/ZiAPWI+5SFljxnWhR9Tj4baDI2Hk8j+js2lDeM tA2cvpuAHcOubrrqhg64PkC7xrZDLVcdA8gGpJ8roZWq+vtC6l5xrVsvu2V0bERapjm1SQtlNCbU tQKTFWRJqwj3h1EeXOPlOYrqBJoBslQj33VVgJAuZ0Za0qAfBhMb4hKAE9XLSYsUA6k9Jy2Y9IgT gtz0hbalB++wJH2nJa5Dkcgbyo6EVjwnrdct2q8b1ROu5J2sZd3iUtOhjsQE9sC8g1up1v8ODesX p0/QV4BOqVnYChjahPMuLtSxVIHMLCjBpDG4UnCf8dsYz5UyXbJk/6sOlJ+C5teCWqkp/tx76JLg PuJ+ianzi/fa7Elk/szJcxWMTWmvIZsmWfTThiS7BpQP6zcK7VInm42s+AklC3tvocI2okYip4Ew 4BhJxskxUXW11bazVjWsIGCZ9GN4hffFvBniBJnQdvOein6ptp2t11LTkNFdOlnoqf4wVbVPkkWg CjphqDTcPos9Z3Ya6HTyQNsUWs9X6tgjCPeYs5kkABo63TKBushJUO064XrM8VtTb2ca9iX6bDDq jPBQB5i7PidN/d6u66cAAwC9xrY+UiNUVAAAAABJRU5ErkJggg=="
        transform="translate(1045.241 429.817) scale(.8974)"
      />
      <circle
        className="st8"
        cx={1063.1}
        cy={447.6}
        r={10.9}
      />
      <circle
        className="st22"
        cx={1063.1}
        cy={447.4}
        r={8}
      />
      <text
        transform="translate(1048.524 487.307)"
        className="st3 st4 st5">
        {"P-002"}
      </text>
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={157}
        height={141}
        xlinkHref="data:image/png;base64,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 YAB89TVx+rkHDQAAAABJRU5ErkJggg=="
        transform="translate(360.51 306.9)"
      />
      <path
        className="st8"
        d="M419.4 316.8h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3H428c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V323.1c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Presion Impulsion P-001 */}

      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(18, "Presión Impulsión P-001", false)}>
        <path
          className={getTarjetaClass(18, selected)}
          d="M370.1 324.2h138.1V424H370.1z"
        />
        <circle
          className="st23"
          cx={440}
          cy={462.1}
          r={9.2}
        />
        <text
          transform="translate(417.916 360.795)"
          className="st2">
          <tspan
            x={0}
            y={0}
            className="st0 st4 st15">
            {"Presi\xF3n"}
          </tspan>
          <tspan
            x={-26.8}
            y={16.8}
            className="st0 st4 st15">
            {"Impulsi\xF3n P-001"}
          </tspan>
        </text>
        <text
          transform="translate(425.053 409.114)"
          className="st3 st4 st17">
          {getScaledValue(datosScada.d18, 1)}
        </text>
        <text
          transform="translate(469.32 408.719)"
          className="st3 st24 st25">
          {"Bar"}
        </text>
        <text
          transform="translate(422.053 341.95)"
          className="st3 st4 st5">
          {"PT-004"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(18, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(18, "Presión Impulsión P-001");
        }}>
        <path d="M388.1 398c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M386.4 397c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM397.7 395.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M398.3 393.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM399.2 403v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM394.2 410.5c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presion Impulsion P-001 */}

      <circle
        className="st23"
        cx={815.9}
        cy={462.1}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={165}
        height={251}
        xlinkHref="data:image/png;base64,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 GQEAP5H/CjAA49oq7Ndjhi4AAAAASUVORK5CYII="
        transform="translate(738.51 196.9)"
      />
      <path
        className="st8"
        d="M797.1 206.8H754c-3.5 0-6.3 2.8-6.3 6.3v212.3c0 3.5 2.8 6.3 6.3 6.3h51.6c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.1 1-.9 2.2-1.4 3.5-1.4h61.7c3.4 0 6.3-2.8 6.3-6.3V213.1c0-3.4-2.8-6.3-6.3-6.3h-90.4z"
      />

      {/* Temperatura Aliment. Osmosis OR1 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() =>
          loadGrafico(13, "Temperatura Aliment. Ósmosis OR1", false)
        }>
        <path
          className={getTarjetaClass(13, selected)}
          d="M 748 318 z M 894.1 318.8 H 747.7 V 214.9 h 146.4"
        />
        <text
          transform="translate(758.157 256.784)"
          className="st2">
          <tspan
            x={0}
            y={0}
            className="st0 st4 st26">
            {"Temperatura"}
          </tspan>
          <tspan
            x={74.4}
            y={0}
            className="st0 st4 st15"
          />
          <tspan
            x={78.3}
            y={0}
            className="st0 st4 st26">
            {"Aliment."}
          </tspan>
          <tspan
            x={24.7}
            y={15.6}
            className="st0 st4 st26">
            {"\xD3smosis OR1"}
          </tspan>
        </text>

        <text
          transform="translate(804.195 304.103)"
          className="st3 st4 st17">
          {getScaledValue(datosScada.d13, 1)}
        </text>
        <text
          transform="translate(848.461 303.707)"
          className="st3 st24 st25">
          {"\xB0C"}
        </text>
        <text
          transform="translate(801.195 236.938)"
          className="st3 st4 st5">
          {"TI-204"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(13, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(13, "Temperatura Aliment. Ósmosis OR1");
        }}>
        <path d="M767.3 293c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M765.6 292c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM776.9 290.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M777.5 288.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM778.4 298v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM773.4 305.5c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Temperatura Aliment. Osmosis OR1 */}

      <path
        className="st27"
        d="M758.8 319.8h124"
      />

      {/* pH Alimentacion Osmosis OR1 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(15, "pH Alimentación Ósmosis OR1", false)}>
        <path
          className={getTarjetaClass(15, selected)}
          d="M 747.7 321 h 146.4 v 103.8 H 747.7 z H 747.7"
        />
        <text
          transform="translate(774.126 358.784)"
          className="st2">
          <tspan
            x={0}
            y={0}
            className="st0 st4 st26">
            {"pH Alimentaci\xF3n"}
          </tspan>
          <tspan
            x={9.4}
            y={15.6}
            className="st0 st4 st26">
            {"\xD3smosis OR1"}
          </tspan>
        </text>

        <text
          transform="translate(803.195 406.103)"
          className="st3 st4 st17">
          {getScaledValue(datosScada.d15, 1)}
        </text>
        <text
          transform="translate(844.461 405.707)"
          className="st3 st24 st25">
          {"pH"}
        </text>
        <text
          transform="translate(803.195 340.036)"
          className="st3 st4 st5">
          {"AE-212"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(15, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(15, "pH Alimentación Ósmosis OR1");
        }}>
        <path d="M767.3 396c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-1.9 1.1-2.5 2.2z" />
        <path d="M765.6 395c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.5c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM776.9 393.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.7-2.5-2.2z" />
        <path d="M777.5 391.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.3-2.4-3.7-3zM778.4 401v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM773.4 408.5c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin pH Alimentacion Osmosis OR1 */}

      <circle
        className="st23"
        cx={592.7}
        cy={462.1}
        r={9.2}
      />
      <path
        className="st28"
        d="M715.4 472.5v17"
      />
      <path
        className="st29"
        d="M720.2 477.8c0 .9-.7 1.6-1.6 1.6h-6.3c-.9 0-1.6-.7-1.6-1.6 0-.4.2-.8.5-1.1l3.1-3.1c.6-.6 1.5-.6 2.2-.1l3.2 3.2c.3.3.5.7.5 1.1z"
      />
      <path
        className="st8"
        d="M711.6 477.8c0-.2.1-.3.2-.4l3.1-3.1c.2-.2.6-.2.9 0l3.1 3.1c.1.1.2.3.2.4 0 .3-.2.6-.6.6h-6.3c-.3 0-.6-.3-.6-.6m-2 0c0 1.4 1.2 2.6 2.6 2.6h6.3c1.4 0 2.6-1.2 2.6-2.6 0-.7-.3-1.3-.8-1.8l-3.1-3.1-.1-.1-.1-.1c-1.1-.9-2.6-.8-3.5.2l-3.1 3.1c-.5.5-.8 1.1-.8 1.8z"
      />
      <text
        transform="translate(662.085 578.22)"
        className="st3 st4 st5">
        {"Anti Incrustante"}
      </text>
      <path
        className="st1"
        d="M718.4 498.5h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
      />
      <path
        className="st21"
        d="M707.9 507.5h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
      />
      <path
        className="st30"
        d="M677.9 519.2h38.8v40h-38.8z"
      />
      <path
        className="st1"
        d="M716.7 512.5v45.2c0 .7-.4 1.3-.8 1.3h-37.1c-.5 0-.8-.6-.8-1.3v-45.2"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={166}
        height={251}
        xlinkHref="data:image/png;base64,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"
        transform="translate(514.51 196.9)"
      />

      <path
        className="st8"
        d="M573.9 206.8h-43.1c-3.5 0-6.3 2.8-6.3 6.3v212.3c0 3.5 2.8 6.3 6.3 6.3h51.6c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.1 1-.9 2.2-1.4 3.5-1.4h61.7c3.4 0 6.3-2.8 6.3-6.3V213.1c0-3.4-2.8-6.3-6.3-6.3h-90.4z"
      />

      {/* Caudal Alimentacion Osmosis OR1 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() =>
          loadGrafico(3, "Caudal Alimentación Ósmosis OR1", false)
        }>
        <path
          className={getTarjetaClass(3, selected)}
          d="M 524 319 z M 670.9 318.8 H 524 V 214.9 h 146.4"
        />
        <text
          transform="translate(538.653 255.927)"
          className="st2">
          <tspan
            x={0}
            y={0}
            className="st0 st4 st26">
            {"Caudal Alimentaci\xF3n"}
          </tspan>
          <tspan
            x={21.7}
            y={15.6}
            className="st0 st4 st26">
            {"\xD3smosis OR1"}
          </tspan>
        </text>

        <text
          transform="translate(580.012 303.6)"
          className="st3 st4 st17">
          {getScaledValue(datosScada.d3, 1)}
        </text>
        <text
          transform="translate(621.278 303.205)"
          className="st3 st24 st25">
          {"m\xB3/hr"}
        </text>
        <text
          transform="translate(580.012 237.533)"
          className="st3 st4 st5">
          {"FIT-202"}
        </text>
      </g>
      {/* Campana */}
      <g
        className={`${getTemaAlarma(3, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(3, "Caudal Alimentación Ósmosis OR1");
        }}>
        <path d="M544.1 293.5c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-1.9 1.1-2.5 2.2z" />
        <path d="M542.4 292.5c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.5c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM553.7 291.2c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.7-2.5-2.2z" />
        <path d="M554.3 289.4c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.3-2.4-3.7-3zM555.2 298.5V297c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM550.2 306c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Caudal Alimentacion Osmosis OR1 */}

      <path
        className="st27"
        d="M535.6 319.8h124"
      />

      {/* Conductividad Aliment. Osmosis OR1 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() =>
          loadGrafico(2, "Conductividad Aliment. Ósmosis OR1", false)
        }>
        <path
          className={getTarjetaClass(2, selected)}
          d="M 524.5 321 h 146.4 v 103.8 H 524.5 z"
        />
        <text
          transform="translate(535.652 363.796)"
          className="st2">
          <tspan
            x={0}
            y={0}
            className="st0 st4 st26"
            style={{ fontSize: "12px" }}>
            {"Conductividad Aliment."}
          </tspan>
          <tspan
            x={28.5}
            y={15.6}
            className="st0 st4 st26"
            style={{ fontSize: "12px" }}>
            {"\xD3smosis OR1"}
          </tspan>
        </text>

        <text
          transform="translate(576.783 409.114)"
          className="st3 st4 st17">
          {getScaledValue(datosScada.d2, 0)}
        </text>
        <text
          transform="translate(620.909 408.719)"
          className="st3 st24 st25">
          {"\xB5S/cm"}
        </text>
        <text
          transform="translate(580.096 344.155)"
          className="st3 st4 st5">
          {"AE-203"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(2, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(2, "Conductividad Aliment. Ósmosis OR1");
        }}>
        <path d="M552.8 395c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M551.1 394c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM562.4 392.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M563 390.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM563.9 400v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM558.9 407.5c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Conductividad Aliment. Osmosis OR1 */}

      <path
        className="st31"
        d="M968.7 403.2c0-6.7-7.8-12.1-17.5-12.1s-17.5 5.5-17.5 12.1h.1c-.1.3-.1.7-.1 1.1v37.6c0 3.5 3.4 6.4 7.6 6.8v6.2h5.2v-6.1h9v6.1h5.2v-6.2c4.5-.2 8-3.2 8-6.8v-37.6c0-.3-.1-.7-.1-1.1h.1zM968.7 481.4c0-6.7-7.8-12.1-17.5-12.1s-17.5 5.5-17.5 12.1h.1c-.1.3-.1.7-.1 1.1v37.6c0 3.5 3.4 6.4 7.6 6.8v6.2h5.2V527h9v6.1h5.2v-6.2c4.5-.2 8-3.2 8-6.8v-37.6c0-.3-.1-.7-.1-1.1h.1z"
      />
      <path
        className="st6"
        d="M929.9 502.6h-14.3c-2.8 0-5-2.3-5-5v-68.4c0-3.5 2.8-6.3 6.3-6.3h13M972.6 502.6h15.3c2.8 0 5-2.3 5-5v-68.4c0-3.5-2.8-6.3-6.3-6.3h-14"
      />
      <path
        className="st20"
        d="M992.9 463.2h40.6"
      />
      <path
        className="st31"
        d="M1147.2 426.4h-14.8c-.9 0-1.6-.7-1.6-1.6V410c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM1132 430.3l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st31"
        d="m1147.6 440.9-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st32"
        d="M1139.8 425.4v10"
      />
      <path
        className="st33"
        d="M1130.8 417.4h18M1139.8 418.4v8"
      />
      <path
        className="st20"
        d="M1090.3 436.7h36.5"
      />
      <path
        className="st31"
        d="M1147.2 426.4h-14.8c-.9 0-1.6-.7-1.6-1.6V410c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM1132 430.3l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st31"
        d="m1147.6 440.9-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st32"
        d="M1139.8 425.4v10"
      />
      <path
        className="st33"
        d="M1130.8 417.4h18M1139.8 418.4v8"
      />
      <path
        className="st31"
        d="M1147.2 426.4h-14.8c-.9 0-1.6-.7-1.6-1.6V410c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM1132 430.3l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st31"
        d="m1147.6 440.9-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st32"
        d="M1139.8 425.4v10"
      />
      <path
        className="st33"
        d="M1130.8 417.4h18M1139.8 418.4v8"
      />
      <path
        className="st31"
        d="M1147.2 426.4h-14.8c-.9 0-1.6-.7-1.6-1.6V410c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM1132 430.3l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st31"
        d="m1147.6 440.9-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st32"
        d="M1139.8 425.4v10"
      />
      <path
        className="st33"
        d="M1130.8 417.4h18M1139.8 418.4v8"
      />
      <path
        className="st31"
        d="M1147.2 426.4h-14.8c-.9 0-1.6-.7-1.6-1.6V410c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM1132 430.3l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st31"
        d="m1147.6 440.9-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st32"
        d="M1139.8 425.4v10"
      />
      <path
        className="st33"
        d="M1130.8 417.4h18M1139.8 418.4v8"
      />
      <path
        className="st20"
        d="M113 1330.2h387.1M659.7 1330.2h130.7"
      />
      <path
        className="st21"
        d="M650.2 1344h-132c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.8 3.8-6 3.8z"
      />
      <path
        className="st0"
        d="M651.5 1344h-133c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.9-.2.9z"
      />
      <path
        className="st21"
        d="M650.2 1369.1h-132c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.8 3.8-6 3.8z"
      />
      <path
        className="st0"
        d="M651.5 1369.1h-133c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.9-.2.9z"
      />
      <path
        className="st21"
        d="M650.2 1394.2h-132c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.8 3.8-6 3.8z"
      />
      <path
        className="st0"
        d="M651.5 1394.2h-133c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.9-.2.9z"
      />
      <path
        className="st21"
        d="M650.2 1419.3h-132c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.8 3.8-6 3.8z"
      />
      <path
        className="st0"
        d="M651.5 1419.3h-133c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.9-.2.9z"
      />
      <path
        className="st21"
        d="M650.2 1444.4h-132c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.2-2.8 3.8-6 3.8z"
      />
      <path
        className="st0"
        d="M651.5 1444.4h-133c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.9-.2.9z"
      />
      <path
        className="st20"
        d="M508.4 1435.6H492c-2.8 0-5-2.3-5-5v-99M488 1358.6h20.4M487.7 1383.6h20.4M659.7 1435.6H676c2.8 0 5-2.3 5-5v-99M680.1 1358.6h-20.4M680.4 1383.6H660M487.7 1409.5h20.4M680.4 1409.5H660"
      />
      <path
        className="st7"
        d="M503.6 1336.6c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st8"
        d="M503.6 1324.9c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <text
        transform="translate(572.63 1464.558)"
        className="st3 st4 st5">
        {"RO-02"}
      </text>
      <circle
        className="st23"
        cx={189.9}
        cy={1330.3}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={157}
        height={140}
        xlinkHref="data:image/png;base64,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 AC7DH1fJoWN0AAAAAElFTkSuQmCC"
        transform="translate(111.51 1175.9)"
      />
      <path
        className="st8"
        d="M170.3 1185.1h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Presion Entrada Osmosis OR2 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(5, "Presión Entrada Ósmosis OR2", false)}>
        <path
          className={getTarjetaClass(5, selected)}
          d="M121 1192.5h138.1v99.8H121z"
        />
        <text
          transform="translate(142.362 1232.026)"
          className="st2">
          <tspan
            x={0}
            y={0}
            className="st0 st4 st15">
            {"Presi\xF3n Entrada"}
          </tspan>
          <tspan
            x={9.3}
            y={16.8}
            className="st0 st4 st15">
            {"\xD3smosis OR2"}
          </tspan>
        </text>

        <text
          transform="translate(175.962 1277.345)"
          className="st3 st4 st17">
          {getScaledValue(datosScada.d5, 1)}
        </text>
        <text
          transform="translate(220.228 1276.95)"
          className="st3 st24 st25">
          {"Bar"}
        </text>
        <text
          transform="translate(173.962 1210.18)"
          className="st3 st4 st5">
          {"PT-016"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(5, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(5, "Presión Entrada Ósmosis OR2");
        }}>
        <path d="M139 1266.3c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M137.3 1265.3c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9.7-1.3 1.8-2.2 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM148.6 1264c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M149.2 1262.2c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM150.1 1271.3v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM145.1 1278.8c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presion Entrada Osmosis OR2 */}

      <circle
        className="st23"
        cx={438.2}
        cy={1330.3}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={157}
        height={140}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ0AAACMCAYAAABmrKvoAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABupJREFUeNrsmolym0gQQDlGkuPY ufb6//9LsrHuA4kdtro3nfaAsOP1LvBeVRc6bGyhRx8DWQbwyuT/8e/DcKlfQ5q8x2OYpnD1U2QM PWWzkSWewzTFq93jXvKFHpmtkMdFInKy3aSFa+KSiLpLvNAju5UmggkrHuV2euW0kessUbntWd5P ihc6hCuMaLMY8xgL2c4kSpfxkG780mmGU8lOMY4xDrI9Sah8j8TrynSFvN+IdhPjVuKNPJ/L+ynx YNxlVYVS2XYxtrLdiQtHkxF/EC90ZLkgYjWS3cV4F+Ne4q0TL6e/m0ym07J6EuEa2dYxVjGW4o7v +65mOi2rMxGrEe5DjI8xPsnje8l6C9PfMc1OQ76LKas7Ee5BXCmdmOfUYBE6hgeb5RrRfpP4JcZ7 eX0hciLdtCbWypTVpSSgmfzc2fR5VUK8ZHn1pfVestyvMf4Q8T6KdDdkusmVWM10jVQbabXm8l4j 215k3IuYj/r9NulSme6TiPd7h3QwjfJ6FqGscEfp71YS80RCai2vhVkmuZEd30tJ/WDizvV0DBHT yXQ6uVrhNuLErWm7SuNGr0yna3O6XHLnQi0vkW5S0umSSTDCvZWq+Cb7vpary2n5tfLaJt4i+75e pzudG+mQbVryaZKpjA+a3TTDlYle/+8SG1yGarsaEcwOZ9mPi8L0c9Mts6nLo6XLcD8Il+rp/NJJ YQQsnWgFU+tk8X74m0I6nSiesOPULU4APlld7e2Ll94hTC7bZU9NRMVr/BGYfObrJR2ZDf41Cg4B IB0gHQDSAdIBIB0gHQDSAdIB0gEgHSAdANIB0gEgHSAdANIB0gHSASAdIB0A0gHSASAdIB0gHQDS AdIBIB0gHQDSAdIBIB0gHSAdANIB0gEgHSAdANIB0gHSASAdIB0A0gHSASAdIB0A0gHSAdIBIB0g HQDSAdIBIB0gHSAdANIB0gEgHSAdANIB0gEgHSAdIB0A0gHSASAdIB0A0gHSAdIBIB0gHQDSAdIB IB0gHQDSAdIB0gEgHSAdANIB0gEgHSAdIB3A/0C6WiIzW4BXz3ReRGSENk86HSmesQNkg59KQkWP nV4kahcAz0pMRccvW+HOJi4tIsL0BLOepBJUkmB2krudNIJVMU5mq4+tgPlID3D+Al/OWEuq9+Sc SEx1W/YLLTvWnTWSHWMcXDSvzSRT1rLNRyJg/gwJ646MMEbpzi4RqSealKqEfP8cj9BDuH2MbYyN iUWMUn7nIo+9dPmApUtF3fKZ2krOWNqOOuFHJcmncWMnsZc4GPkuqWMQWgYHtXgvkq1iPMS4i3Ej ktXyc3N5XrgeMR+wbEUi/AlVtwxcY+t57f+un+skcq3FDY2NCHhIZLusrbzaTHeUHaxFuLciXJCf UykX8lpppMsHJltmZCslgvlcIXFS1e6LqEzZqRL9zZDLrf2sWgV3ItqfMb7G+BZjKeLtxZ8qNVi0 SVc56f40Ga2W97ZGxJmRLh+gdFa4IJ9n7sKeWP5L0ONl49TR2wy1l/MJSaX7HOOLiLeW945tJTa0 9CZ+xyEh3NJINzfZIB9YtlPpVLi5ZO83Jm7ktZnpX21Dbfubrelvjka8oUrnvahcpnuQTPdZBFzK MTj2La8+hR4kXeaupDY238e4lS/DSze0TKdZzgp356Iy7UVhetqDGbRWcmzW8tqh6+APdGo9mwFz I5I9SJb7JsdgZz533ae8Zm5CsWXXZr/bRAYoBzjBqnSa5W4kg7+L8T7GB/ncd3LSaZtxcWf80hz4 pWmqj12T3ACHCJuQdvI51yY2ZoLVky27lul8b5cquWuRTYULA+/prHSa5d6b/mRv1ih1cNKTUAct bai/yvOVm+TGkOn8RYPUsklqyeRqebXZrk6s3em63ayHcEPKdKWTzi4BaNzL+zrB782g9cVEr4Z6 gGt0KfFOieGpcstGvTOd39qpdu9kS61lDUk6HSRmprxu5OTamZ7tnbQVMzkeBzPBfZFm+quU17Uc J/0i6oFLlyXWI89ueehs+rjWkyz0XJup3XqUlaxwC6tDI3cldpE9XmXX3kWHJ810Kt03t161SiyS juEKRddF/t53IoUnjsy1+6LyAS6RtC0Oa4k9mqnzaBrmlZRdW16PboLTXm5rspxtpsd0WSwlWK8T KzzjD+VOvqGV02u9nb2icHLD060ZJGozvW7M5LZ1ZfWSjefCf32l5+tF+Mk/XLsvrR64dL5c2Clt a9Yk9XKY7XG1HB8Ta3NjutukfokDDY/7u9ysO85c2MVhO1zZ23zGKtyL9jOQ7vGsfGX2+G6atpsY uaMa6X4666Umdb92Zae5DOGQ7qXkSx2z1DQHSPcqxwrZAABA+EuAAQDk3R9ykkfVvwAAAABJRU5E rkJggg=="
        transform="translate(359.51 1175.9)"
      />
      <path
        className="st8"
        d="M418.6 1185.1h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Caudal Alimentacion Osmosis OR2 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() =>
          loadGrafico(7, "Caudal Alimentación Ósmosis OR2", false)
        }>
        <path
          className={getTarjetaClass(7, selected)}
          d="M369.3 1192.5h138.1v99.8H369.3z"
        />
        <text
          transform="translate(374.667 1232.026)"
          className="st2">
          <tspan
            x={0}
            y={0}
            className="st0 st4 st15">
            {"Caudal Alimentaci\xF3n"}
          </tspan>
          <tspan
            x={23.4}
            y={16.8}
            className="st0 st4 st15">
            {"\xD3smosis OR2"}
          </tspan>
        </text>

        <text
          transform="translate(424.274 1277.345)"
          className="st3 st4 st17">
          {getScaledValue(datosScada.d7, 1)}
        </text>
        <text
          transform="translate(463.54 1276.95)"
          className="st3 st24 st25">
          {"m\xB3/hr"}
        </text>
        <text
          transform="translate(410.274 1210.18)"
          className="st3 st4 st5">
          {"FIT-251+253"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(7, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(7, "Caudal Alimentación Ósmosis OR2");
        }}>
        <path d="M387.3 1266.3c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M385.6 1265.3c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9.7-1.3 1.8-2.2 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM396.9 1264c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M397.5 1262.2c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM398.4 1271.3v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM393.4 1278.8c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Caudal Alimentacion Osmosis OR2 */}

      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={157}
        height={140}
        xlinkHref="data:image/png;base64,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"
        transform="translate(639.51 1175.9)"
      />
      <circle
        className="st23"
        cx={717.7}
        cy={1330.3}
        r={9.2}
      />

      <path
        className="st8"
        d="M698.1 1185.1H655c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Caudal Permeado Osmosis OR2 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(11, "Caudal Permeado Ósmosis OR2", false)}>
        <path
          className={getTarjetaClass(11, selected)}
          d="M648.8 1192.5h138.1v99.8H648.8z"
        />
        <text
          transform="translate(661.921 1232.026)"
          className="st2">
          <tspan
            x={0}
            y={0}
            className="st0 st4 st15">
            {"Caudal Permeado"}
          </tspan>
          <tspan
            x={15.6}
            y={16.8}
            className="st0 st4 st15">
            {"\xD3smosis OR2"}
          </tspan>
        </text>

        <text
          transform="translate(703.748 1277.345)"
          className="st3 st4 st17">
          {getScaledValue(datosScada.d11, 1)}
        </text>
        <text
          transform="translate(743.014 1276.95)"
          className="st3 st24 st25">
          {"m\xB3/hr"}
        </text>
        <text
          transform="translate(704.748 1210.18)"
          className="st3 st4 st5">
          {"FIT-251"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(11, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(11, "Caudal Permeado Ósmosis OR2");
        }}>
        <path d="M666.8 1266.3c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M665.1 1265.3c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9.7-1.3 1.8-2.2 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM676.4 1264c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M677 1262.2c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM677.9 1271.3v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM672.9 1278.8c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Caudal Permeado Osmosis OR2 */}

      <path
        className="st31"
        d="M107.4 1320.5H92.6c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM92.2 1324.4l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st31"
        d="m107.8 1335-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st32"
        d="M100 1319.5v10"
      />
      <path
        className="st33"
        d="M91 1311.5h18M100 1312.5v8"
      />
      <path
        className="st31"
        d="M810.8 1320.5H796c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM795.6 1324.4l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st31"
        d="m811.2 1335-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st32"
        d="M803.4 1319.5v10"
      />
      <path
        className="st33"
        d="M794.4 1311.5h18M803.4 1312.5v8"
      />
      <path
        className="st31"
        d="M940 1320.5h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6H940c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM924.8 1324.4l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st31"
        d="m940.4 1335-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st32"
        d="M932.6 1319.5v10"
      />
      <path
        className="st33"
        d="M923.6 1311.5h18M932.6 1312.5v8"
      />
      <path
        className="st20"
        d="M919.4 1330.2H816.1"
      />
      <path
        className="st6"
        d="M96.4 680.8H56.1c-2.8 0-5-2.3-5-5v-71.9c0-5.5 4.5-10 10-10h1317.1c5.7 0 10.3-4.6 10.3-10.3l-1.4-136.3c-.1-5.9-4.9-10.7-10.8-10.6l-222.4.3"
      />
      <path
        className="st34"
        d="M627.4 1047.5h-73.2c-2.4 0-4.3-1.9-4.3-4.3v-32.1c0-2.4 1.9-4.3 4.3-4.3h73.2c2.4 0 4.3 1.9 4.3 4.3v32.1c0 2.4-2 4.3-4.3 4.3zM313.4 1047.5h-73.2c-2.4 0-4.3-1.9-4.3-4.3v-32.1c0-2.4 1.9-4.3 4.3-4.3h73.2c2.4 0 4.3 1.9 4.3 4.3v32.1c-.1 2.4-2 4.3-4.3 4.3z"
      />
      <path
        className="st0"
        d="M648.6 975.7h124.8v97.7H648.6z"
      />
      <path
        className="st1"
        d="M773.3 959.4v111.2c0 1.7-.6 3.1-1.2 3.1H650c-.7 0-1.2-1.4-1.2-3.1V959.4"
      />
      <text
        transform="translate(683.21 1096.51)"
        className="st2">
        <tspan
          x={0}
          y={0}
          className="st3 st4 st5">
          {"TK - AGUA"}
        </tspan>
        <tspan
          x={0.6}
          y={13.2}
          className="st3 st4 st5">
          {"RECHAZO"}
        </tspan>
      </text>
      <path
        className="st21"
        d="M872.5 1038h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
      />
      <path
        className="st7"
        d="M824.9 1075c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st8"
        d="M824.9 1063.3c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        width={39}
        height={39}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7lJREFUeNrsmA1v0zAQhuPEadd2 o90G4hv+/+8CAWNjrOv6lbQJ9vTe9PZwvrqCEFqkV2mr5Pr4znc+O4qerqfr/73MP2OEbBn1vYTk Kv82oAmI7ZYKsgxA/zFA/25coUgBFUqtQc0BwKxTirtXQpAeZuu0IW0hDXsQQENQAnYE9aEeICOA 5E5rpYyAaz1q94BLoYHT0OnY6QQaAjbFOwK3cLpzmkP++xKgGQYSTCS7B1wfIM+cTp3OoAlBMuAC ULdOU6cbyH+fwXZGYd+BtB3D6sM3AswLp1dOL/H5DNADPBfhj1fwnof76XTpdIV7it/n8HTZFVDg EhgbAs5DvXV65/QG30/hwQHZ3VCIvceu8dwzTAWr6mUJT8pvtYBc2yz+2Bt+DriPTh8A6D04xgA4 SQqEeQUvTWBjhOdighLtJEwbD1rMuxHCKN7zcO8R5gmSpY/nY+WRId4f0RRIaACSLDnNxXsv2gbv SXj7CN8ZgLzXXgP2HHBHBKdXkhRQKT1TkGclw5eUMLWAOnMlvOcIpyTGKcH1FByXjZgKuMCtAXaD 5JHMXmLu+veMbZh7DHgCoHN4coyQ9fFMUgGn1+kS740xNSRphmqK3NfGuCHEUloEcKwmeh1cFGgg EprTA3j/GLaOyNZDJOIWIe6RsRPc9WhNhzWfyxYvj2nIXhOgHvGQstCS50yHFYmTzwaajJ2WLW7o 79hQWjHSLnD6bgJ2duxVebCs6IDLA/SSbDvUcpVtANmA9HM5tFFVf19I3StuQ62XrfFQSZV+jfok bdJKGW0T6lKByQqyplWE+8NWHtzi5SWK6gxaADJXI2+6CkBIl7MgrWnQDx5sE+IcgDPVy0mL1AZS e05aMOkRZwS50xfaDh68xZL0g5a4Hg0yrSg74g3xnLReN2i/rlVPuGEPJh3qFpeaHnUkJrAH5h3c RrX+t2hYvzp9hr4BdE7NQi1gaBPOu7hQx1IEMjOjBJPG4FLBfcFvUzyX83RJHlEmdPnJaH6tqJWa 48+9hy4I7hPuF5g6v3mv7Z5E5s+SPFfA2Jz2GrJpkkU/rkiyK0D5sH6n0K5DyWZbVPyIkoW9t1Jh m1AjkdJAGHCKJOPkmKm62mnbWaoalhGwTPopvML7Yt4McYLMaLt5R0U/V+Wl83pqKjK6TycLA9Uf xqr2SbIIVEYnDEUIruuCz5kdBzqdNNA2hdbzjTr2qITb92wmCoCGTrdMoC5yEjQeHD2mZarq7UzF vkSfDbY+IzzEAWbT56iu32u6fgkwAJ5fuTyiXic2AAAAAElFTkSuQmCC"
        transform="translate(833.762 1034.702) scale(.8974)"
      />
      <circle
        className="st8"
        cx={851.6}
        cy={1052.5}
        r={10.9}
      />
      <circle
        className="st22"
        cx={851.6}
        cy={1052.3}
        r={8}
      />
      <text
        transform="translate(837.045 1092.191)"
        className="st3 st4 st5">
        {"P-003"}
      </text>
      <path
        className="st20"
        d="M781.5 1069.1H822"
      />
      <path
        className="st21"
        d="M1339.2 1012.6h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
      />
      <path
        className="st7"
        d="M1291.6 1047.6c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st8"
        d="M1291.6 1035.9c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        width={39}
        height={39}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7RJREFUeNrsmAtP2zAUhWPHfRfa 8RADse3//66xaWMDCiWQpkk9Rzp3OrpL2iRQNE2LdJS+4n6+1/dhR9H/6x+/zBuN6/8GQEP3KkDf Bdi8EpiWrQGs0t4A5VlLiukusAJSBG3o7unuXxvQKKhSvaB+kMPrmABLqDxoDeWQwNaCmhfAMdQg aAQN8V4gN4BaBaVKGcEy6O/LvQCuD6BJ0EHQIe6lxoC0+NMS7jnokbQMesLnK0wi0pCuI9wAECXU u6DjoBO8ngVNYckYbkwBU0LdB90F3QYt8P4RoJmGdB0tNwZICfU+6DzoDO/nABwQoFhwCbiboGto QOs10pCuRRqxmNAQbjwNugj6EHQJyGNYdYKJWFqDKSx1D8CZ+l1UETC+jQXFtaV1jmC5j0GfAHgG F4v1nIriDJBzmoRYjyOdI9u4htaTiB1h5qew2CV0AfdO8RuHZyKVB3WkO3zHUS4BU7RxsQXgGBYQ wHNY8gTgI/zOkts8uU9ypKMUtKIAKpUAtITcuIZrT9w7AeAJIE/h1gNYpa+qCANycjdkuSdalzcI oj7AC9fCerL+ZliDRxSxDGe3FAN53cMzMt6cgmZIFja2ZfROsMBnasBeDVxd7eYqNMLSGeO1lEu7 C5AHdlTOptBYwZkODYYj7/TV+jTbAE1N3R1CI4rCmNZV17IZV4xlooYu0Z2Lo8HijmBVS6myedkG 6Lc0nDv7uIaXp6T8RxXZBcgDFNAaFSGjvm7TEtRXjM19YsGQdssgnGBzKvgJ9Ez9nJSnpheDrUiZ gmxkQU+ACbL9Awr/Ez7nhrOpR9ZURR4xth6vUanbUE+XIOsvkPHnSDc9NVm96H2F5WS8B4wpfWHa phZ75eIEcD9RSQ6pMZXfO1WLq9wqveECjauUuCW+W4sF45bbypiSa59Sjq2I9g1B5eRSgSuhvgVd QV+DfsCiqbg5bpGz9L6Xk/NGRXtOUJlaawuC+xL0GffvsGKCZ4pd3YxOCTlmtqTyJh2JrKUj2jT1 yPUFdS4PcOs1rHYF2Dt8n3XZk3j1J4agn/GndwCc1XTLKwqyW7hT9iU3mHiq05ZrkVgjPMxrTfdz c7UnYQtymlrQrm5BKSvjHNjWgpy0GTCltTUFHHfWRu1JEtobc+7L1LFIp5MFHSSOWrEB7TV08yoT ywh0RfuP2pOFrkcfuq/jLsfRjs6qtFOoc5l8H2czVZWC046t6A+9Skd7P92qA93W2+kzwb2fD+7a GO3Kq42uOHq7q1Nz+0uAAQDLqbir+cq8HwAAAABJRU5ErkJggg=="
        transform="translate(1300.484 1009.307) scale(.8974)"
      />
      <circle
        className="st8"
        cx={1318.3}
        cy={1027.1}
        r={10.9}
      />
      <circle
        className="st22"
        cx={1318.3}
        cy={1026.9}
        r={8}
      />
      <text
        transform="translate(1303.766 1066.797)"
        className="st3 st4 st5">
        {"P-004"}
      </text>
      <path
        className="st20"
        d="M1193.2 1041.6h97.5M878.8 1041.6H1150M253.8 681h258.3"
      />
      <path
        className="st21"
        d="M244.3 694.4h-132c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.8 3.8-6 3.8z"
      />
      <path
        className="st0"
        d="M245.6 694.4h-133c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.9-.2.9z"
      />
      <path
        className="st21"
        d="M244.3 719.5h-132c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.8 3.8-6 3.8z"
      />
      <path
        className="st0"
        d="M245.6 719.5h-133c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.9-.2.9z"
      />
      <path
        className="st21"
        d="M244.3 744.6h-132c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.2-2.8 3.8-6 3.8z"
      />
      <path
        className="st0"
        d="M245.6 744.6h-133c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.9-.2.9z"
      />
      <path
        className="st21"
        d="M244.3 769.7h-132c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8V766c0 2.1-2.8 3.7-6 3.7z"
      />
      <path
        className="st0"
        d="M245.6 769.7h-133c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.1 20c.7.1.6.7-.1.7z"
      />
      <path
        className="st21"
        d="M244.3 794.8h-132c-3.3 0-6-1.7-6-3.8v-13c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.8 3.7-6 3.7z"
      />
      <path
        className="st0"
        d="M245.6 794.8h-133c-3.4 0-6.3-1.7-6.3-3.8v-13c0-2 2.8-3.8 6.3-3.8L245.8 794c.6.3.5.8-.2.8z"
      />
      <path
        className="st20"
        d="M102.5 786.1H86.2c-2.8 0-5-2.3-5-5v-99M82.1 709h20.4M81.8 734h20.4M253.8 786.1h16.4c2.8 0 5-2.3 5-5v-99M274.2 709h-20.4M274.5 734h-20.4M81.8 760h20.4M274.5 760h-20.4"
      />
      <path
        className="st7"
        d="M97.7 687c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st8"
        d="M97.7 675.3c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <text
        transform="translate(166.723 814.98)"
        className="st3 st4 st5">
        {"RO-01"}
      </text>
      <circle
        className="st23"
        cx={371}
        cy={680.8}
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
        transform="translate(291.51 525.9)"
      />
      <path
        className="st8"
        d="M350.4 535.5h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3H359c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V541.8c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Caudal Permeado Ósmosis OR1 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(14, "Caudal Permeado Ósmosis OR1", false)}>
        <path
          className={getTarjetaClass(14, selected)}
          d="M301.1 542.9h138.1v99.8H301.1z"
        />
        <text
          transform="translate(316.226 582.447)"
          className="st2">
          <tspan
            x={0}
            y={0}
            className="st0 st4 st15">
            {"Caudal Permeado"}
          </tspan>
          <tspan
            x={15.6}
            y={16.8}
            className="st0 st4 st15">
            {"\xD3smosis OR1"}
          </tspan>
        </text>

        <text
          transform="translate(356.053 627.766)"
          className="st3 st4 st17">
          {getScaledValue(datosScada.d14, 1)}
        </text>
        <text
          transform="translate(392.32 627.37)"
          className="st3 st24 st25">
          {"m\xB3/hr"}
        </text>
        <text
          transform="translate(353.053 560.601)"
          className="st3 st4 st5">
          {"FIT-250"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(14, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(14, "Caudal Permeado Ósmosis OR1");
        }}>
        <path d="M319.1 616.7c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M317.4 615.7c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM328.7 614.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M329.3 612.6c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM330.2 621.7v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM325.2 629.2c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Caudal PermeadoÓsmosis OR1 */}

      <path
        className="st31"
        d="M532.6 671.3h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM517.4 675.2l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st31"
        d="m533 685.8-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st32"
        d="M525.2 670.3v10"
      />
      <path
        className="st33"
        d="M516.2 662.3h18M525.2 663.3v8"
      />
      <path
        className="st6"
        d="M270.3 934.9H237c-2.8 0-5-2.3-5-5V801.5"
      />
      <path
        className="st31"
        d="M291.4 925.4h-14.8c-.9 0-1.6-.7-1.6-1.6V909c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM276.2 929.3l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st31"
        d="m291.8 939.9-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st32"
        d="M284 924.4v10"
      />
      <path
        className="st33"
        d="M275 916.4h18M284 917.4v8"
      />
      <path
        className="st31"
        d="M532.4 925.4h-14.8c-.9 0-1.6-.7-1.6-1.6V909c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM517.2 929.3l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st31"
        d="m532.8 939.9-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st32"
        d="M525 924.4v10"
      />
      <path
        className="st33"
        d="M516 916.4h18M525 917.4v8"
      />
      <path
        className="st31"
        d="M291.4 970.9h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM276.2 974.8l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st31"
        d="m291.8 985.4-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st32"
        d="M284 969.9v10"
      />
      <path
        className="st33"
        d="M275 961.9h18M284 962.9v8"
      />
      <path
        className="st20"
        d="M297.2 934.9h214.5"
      />
      <path
        className="st31"
        d="M379.2 1018.2h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM364 1022.1l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st31"
        d="m379.6 1032.7-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st32"
        d="M371.8 1017.2v10"
      />
      <path
        className="st33"
        d="M362.8 1009.2h18M371.8 1010.2v8"
      />
      <path
        className="st31"
        d="M503.6 1018.2h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM488.4 1022.1l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st31"
        d="m504 1032.7-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st32"
        d="M496.2 1017.2v10"
      />
      <path
        className="st33"
        d="M487.2 1009.2h18M496.2 1010.2v8"
      />
      <path
        className="st20"
        d="M385 1027.7h98M537.3 934.9h132.2c2.6 0 4.7 2.1 4.7 4.7v17.3"
      />
      <circle
        className="st23"
        cx={373.1}
        cy={934.5}
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
        transform="translate(293.51 779.9)"
      />
      <path
        className="st8"
        d="M352.5 789.2h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3H435c3.5 0 6.3-2.8 6.3-6.3V795.5c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Caudal Rechazo Osmosis OR1 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(12, "Caudal Rechazo Ósmosis OR1", false)}>
        <path
          className={getTarjetaClass(12, selected)}
          d="M303.2 796.6h138.1v99.8H303.2z"
        />
        <text
          transform="translate(323.071 836.21)"
          className="st2">
          <tspan
            x={0}
            y={0}
            className="st0 st4 st15">
            {"Caudal Rechazo"}
          </tspan>
          <tspan
            x={10.9}
            y={16.8}
            className="st0 st4 st15">
            {"\xD3smosis OR1"}
          </tspan>
        </text>

        <text
          transform="translate(358.23 881.529)"
          className="st3 st4 st17">
          {getScaledValue(datosScada.d12, 1)}
        </text>
        <text
          transform="translate(394.495 881.133)"
          className="st3 st24 st25">
          {"m\xB3/hr"}
        </text>
        <text
          transform="translate(355.23 814.364)"
          className="st3 st4 st5">
          {"FIT-252"}
        </text>
      </g>
      {/* Campana */}
      <g
        className={`${getTemaAlarma(12, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(12, "Caudal Rechazo Ósmosis OR1");
        }}>
        <path d="M321.3 870.4c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M319.6 869.4c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM330.9 868.1c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M331.5 866.3c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM332.4 875.4v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM327.4 882.9c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Caudal Rechazo Osmosis OR1 */}

      <circle
        className="st23"
        cx={1076.4}
        cy={1040.4}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={158}
        height={140}
        xlinkHref="data:image/png;base64,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 AET4R4ABAL5vMl60A1ZsAAAAAElFTkSuQmCC"
        transform="translate(997.51 885.9)"
      />
      <path
        className="st8"
        d="M1056.8 895.2h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V901.5c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={158}
        height={140}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAACMCAYAAABiWXvVAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABwhJREFUeNrsm4ly2lgQRSUhjMFx lkpm/v//ZiaOjc0OGlHVXbnuPElgO4vQOVVdbEYK6KiXJ5JlAL+J/A/ZBvSP6leKk7e8DwGHLV71 EinLM6TLE4F4wxawCvfPkrA8QbxjFHKrEUWEYYnncUhEp4B5x2sq2siitPDHBWV4kGX2GHuLXbjd i4TVuZkvD9KN67gKoRIWHT0hXI58mu2Osm0t1nVsLLYmYNYmYNkhXimyTeuY2e11HRORcET5HVS5 PZhcLt1SYmHubOR9SQHLlj7PM97EpLut430d7+q4secm9jdegsl8w8h8Lt7GhHuqY27hlTC+9wcB y5YBw7PezKT7ZPGxjg8m4NT+ZiTZDy4/87l8KxPvoY5v5kIhsmn/11l2NeuVltluTLbPdfxlt59M yKn9zShMv3DZE67Ld8x6jybetXlQyfCxE/mqtsyXh55vbBtU+f62+GzyzULmo+RefumN8s3Ng7G9 vgsDiAqYq4Blw7AxkiHD5Ttmuy+W/b4k5CsQb1ADh8s3NfEqKcXeBy7tsVbFqm3gKGQZxcvurQn4 UXq/96Hn44rHcDKfyzcRhzQT3osbY8mAWVvZzUPZvbLSO7Mp91biRqwvkG9Q8lUmU2nHe2/i3Zon s+z7cpxXxSKW3rZpV5dark20qQwZus5HyR1e6fWpdi8Jyv24zp5fiEj60bbIrJfSrrLnVznGFmVi XQeGIZ/7o15oUupMTGVi0o2X1vSa7iikUX7dMlyarvmXLa5kpyy15IkSrBsqsvTPq+DyyRvatKLD kSxOvEXHTvKMn07BaUJGETt9KU60PJUVAbKGanmSI8WZO2h7DMOV7kVOFCfIhmTwVnK+OPMBvPm4 DIB8gHwAyAfIB4B8gHwAyAfIB4B8gHwAyAfIB4B8gHwAyAfIB8gHgHyAfADIB8gHgHyAfADIB8gH gHyAfADIB8gHgHyAfIB8AMgHyAeAfIB8AMgHyAeAfIB8AMgHyAeAfIB8AMgHyAeAfIB8gHwAyAfI B4B8gHwAyAfIB4B8gHwAyAfIB4B8gHwAyAfIB4B8gHyAfADIB8gHgHyAfADIB8gHgHyAfADIB8gH gHyAfADIB8gHyAeAfIB8AMgHyAeAfIB8AD9XvircApxL1eZP8YoNISW8yonihI3HnVSIBw0SxnhV 2T3GweKsDcNg5Yu+nCRf1WCxb2xvcWgQEoaZ5Q7BkTY/nrlSypN52OBxQzuLrdzfBRHzC52a8zc4 SJcs3yHhibuivqiIzygbNu5vOG5kU8e6jpWE72D0hgfrT5cuP1O2S10tcPlUtI24sbbHG0lQye+g bNjwXjZ83OCyjkUdT3a7sPd6thyF7Jf3XL4YbRJWHW1LdSHCxeS0NdEW4ob7sTL5tpL9WjNfLLkq 3mMdDxazOsZ2EA6SAUdyYPKeS1dYxPv5GT3QWc13T+SLyenox7yOe/FjbhIuTcBdyIBVW9mN8j3Z Rr8F8fZm/sSeG7UcoD6UWRWtsM9Thtsi0d+qZDvpgVIDWp/LcBVK7sYEO7rxtY7/6rgzEef22vrU zJc1ZL5HE28ipdbFO742FfmKHma+XCZ/l25scWXhj8uQ4VP9z1Z6nm2i6a56nvn8JPOSOzf5/qnj X7v/YK9F+aq2sptJWt1I5tPMthcpbxLy5T2UT7OeSzexz3aMa4srETAL4q2lTVlK37MJGbDqedZL yXcnAt5J5tucKl8W5PMdPElGO9gGF5Zeb+wgXQX5sp7KV4p4M/t87yz8RJvIieg971J6Y4+FHIBt 1+TXsyWWrZRdnwfurELe23Mp+TrLrp7RmsXUeM9616Hn6+PEm5LPxbut44PF2iScJvreJzvbvTd+ EAFXPZevadKNA+k8nHj+uRvbjfKEtZy4Uy+5Kl7Z84EjDyV3ZqK9l7PY17A82+f2/Szti/8m5ede +p7VKWtePRw4ooDLsNa37epzyxbTfTrbhVrv6XYsGS9Vcvuc+aYm3wcpnx63duK5fE8y8Xnchab7 kjJfHErjkLUJQ9bhHPmigFVCPl1+aOr1+pQBdYnFe74bKSEu4KJBvntZbvgalhs2Wcdlph7JlxKw bXmpdbovz1hY1B0WicXXvl7ViEstnv201K6l3WjKfHfSdD+09Ht9v+LR9sMCXVzvXNMsz7B+LxNe FK7vl9OyxHKLlpG1NNZNPd+DZDxd4ddMkGWXdbmt6VLiSZ+xPHNner/PZbar99tL7MKgFa/yrLLv 1zYfw5DR53J7ThnOXnJila/YcRUO3CV8uXmijHhj7YuqqXW+VfbjwvIlivciyd5Kvp/6j/lDvtQ8 S/9mzSVrusKxkclvf8HivXm/A80lWK/56nSfhSGs6ZfegHyvmoKbflrV9n8XEA/53iwLNk32qckP kO+XfldIBwAAHfwvwADDYzxLXXwWFwAAAABJRU5ErkJggg=="
        transform="translate(838.773 885.9)"
      />
      <path
        className="st8"
        d="M898.1 895.2H855c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V901.5c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Conductividad Aliment. Osmosis OR2 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() =>
          loadGrafico(9, "Conductividad Alimentación Ósmosis OR2", false)
        }>
        <path
          className={getTarjetaClass(9, selected)}
          d="M848.8 902.6h138.1v99.8H848.8z"
        />
        <text
          transform="translate(856.735 942.122)"
          className="st2">
          <tspan
            x={0}
            y={0}
            className="st0 st4 st26"
            style={{ fontSize: "12px" }}>
            {"Conductividad Aliment."}
          </tspan>
          <tspan
            x={28.5}
            y={15.6}
            className="st0 st4 st26"
            style={{ fontSize: "12px" }}>
            {"\xD3smosis OR2"}
          </tspan>
        </text>

        <text
          transform="translate(898.866 987.44)"
          className="st3 st4 st17">
          {getScaledValue(datosScada.d9, 0)}
        </text>
        <text
          transform="translate(937.992 987.045)"
          className="st3 st24 st25">
          {"\xB5S/cm"}
        </text>
        <text
          transform="translate(900.18 922.482)"
          className="st3 st4 st5">
          {"AE-213"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(9, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(9, "Conductividad Alimentación Ósmosis OR2");
        }}>
        <path d="M872.9 973.4c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M871.2 972.4c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM882.5 971.1c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M883.1 969.3c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM884 978.4v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM879 985.9c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Conductividad Aliment. Osmosis OR2 */}

      {/* pH Alimentacion Osmosis OR2 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(16, "pH Alimentación Ósmosis OR2", false)}>
        <path
          className={getTarjetaClass(16, selected)}
          d="M1007.5 902.6h138.1v99.8h-138.1z"
        />
        <text
          transform="translate(1028.118 942.122)"
          className="st2">
          <tspan
            x={0}
            y={0}
            className="st0 st4 st15">
            {"pH Alimentaci\xF3n"}
          </tspan>
          <tspan
            x={10.1}
            y={16.8}
            className="st0 st4 st15">
            {"\xD3smosis OR2"}
          </tspan>
        </text>

        <text
          transform="translate(1062.49 987.44)"
          className="st3 st4 st17">
          {getScaledValue(datosScada.d16, 1)}
        </text>
        <text
          transform="translate(1106.756 987.045)"
          className="st3 st24 st25">
          {"pH"}
        </text>
        <text
          transform="translate(1059.49 920.276)"
          className="st3 st4 st5">
          {"AE-207"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(16, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(16, "pH Alimentación Ósmosis OR2");
        }}>
        <path d="M1025.6 976.4c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M1023.9 975.4c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9.7-1.3 1.8-2.2 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM1035.2 974.1c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M1035.8 972.3c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM1036.7 981.4v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1031.7 988.9c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin pH Alimentacion Osmosis OR2  */}

      <circle
        className="st23"
        cx={1234.4}
        cy={1040.4}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={158}
        height={140}
        xlinkHref="data:image/png;base64,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"
        transform="translate(1155.51 885.9)"
      />
      <path
        className="st8"
        d="M1214.8 895.2h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V901.5c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Presion Salida F-004 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(20, "Presión Salida F-004", false)}>
        <path
          className={getTarjetaClass(20)}
          d="M1165.5 902.6h138.1v99.8h-138.1z"
        />
        <text
          transform="translate(1191.951 942.122)"
          className="st2">
          <tspan
            x={0}
            y={0}
            className="st0 st4 st15">
            {"Presi\xF3n Salida"}
          </tspan>
          <tspan
            x={26.9}
            y={16.8}
            className="st0 st4 st15">
            {"F-004"}
          </tspan>
        </text>

        <text
          transform="translate(1220.493 987.44)"
          className="st3 st4 st17">
          {getScaledValue(datosScada.d20, 1)}
        </text>
        <text
          transform="translate(1264.759 987.045)"
          className="st3 st24 st25">
          {"Bar"}
        </text>
        <text
          transform="translate(1217.493 920.276)"
          className="st3 st4 st5">
          {"PT-013"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(20, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(20, "Presión Salida F-004");
        }}>
        <path d="M1183.6 976.4c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M1181.9 975.4c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9.7-1.3 1.8-2.2 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM1193.2 974.1c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M1193.8 972.3c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM1194.7 981.4v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1189.7 988.9c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presion Salida F-004 */}

      <path
        className="st6"
        d="M271.3 978.6H262c-2.8 0-5-2.3-5-5v-38.4M296.9 978.6h9.3c2.8 0 5-2.3 5-5v-38.4"
      />
      <path
        className="st20"
        d="M433.9 935.2v92.5"
      />
      <text
        transform="translate(574.446 1024.652)"
        className="st2">
        <tspan
          x={0}
          y={0}
          className="st3 st4 st5">
          {"HACIA"}
        </tspan>
        <tspan
          x={-0.9}
          y={13.2}
          className="st3 st4 st5">
          {"TK CIP"}
        </tspan>
      </text>
      <text
        transform="translate(259.939 1024.652)"
        className="st2">
        <tspan
          x={0}
          y={0}
          className="st3 st4 st5">
          {"HACIA"}
        </tspan>
        <tspan
          x={-10.1}
          y={13.2}
          className="st3 st4 st5">
          {"DESAG\xDCE"}
        </tspan>
      </text>
      <path
        className="st7"
        d="M540.8 1034c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st8"
        d="M540.8 1022.3c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st20"
        d="M508.8 1027.7h29.1"
      />
      <path
        className="st7"
        d="M327.2 1034c1 0 1.9-.8 1.9-1.9v-9c0-1-.8-1.9-1.9-1.9-.5 0-1 .2-1.3.5l-4.5 4.5c-.7.7-.7 1.8-.1 2.6l.1.1 4.5 4.5c.4.5.8.6 1.3.6z"
      />
      <path
        className="st8"
        d="M327.2 1022.3c.5 0 .9.4.9 1v9c0 .6-.5.9-.9.9-.2 0-.4-.1-.6-.3l-4.5-4.5c-.3-.4-.3-1 0-1.3l4.5-4.5c.2-.2.4-.3.6-.3m0-2c-.8 0-1.5.3-2 .9l-4.5 4.5c-1.1 1-1.1 2.7-.2 3.9l.1.1.1.1 4.5 4.5c.5.5 1.2.8 2 .8 1.6 0 2.9-1.3 2.9-2.9v-9c0-1.6-1.3-2.9-2.9-2.9z"
      />
      <path
        className="st20"
        d="M359.2 1027.7h-29.1"
      />
      <path
        className="st7"
        d="M667.9 954.7c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
      />
      <path
        className="st8"
        d="M679.6 954.7c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <circle
        className="st23"
        cx={917.8}
        cy={1040.4}
        r={9.2}
      />

      <path
        className="st28"
        d="M987.3 1045.7v17"
      />
      <path
        className="st29"
        d="M992.1 1051c0 .9-.7 1.6-1.6 1.6h-6.3c-.9 0-1.6-.7-1.6-1.6 0-.4.2-.8.5-1.1l3.1-3.1c.6-.6 1.5-.6 2.2-.1l3.2 3.2c.3.3.5.7.5 1.1z"
      />
      <path
        className="st8"
        d="M983.5 1051c0-.2.1-.3.2-.4l3.1-3.1c.2-.2.6-.2.9 0l3.1 3.1c.1.1.2.3.2.4 0 .3-.2.6-.6.6h-6.3c-.3 0-.6-.3-.6-.6m-2 0c0 1.4 1.2 2.6 2.6 2.6h6.3c1.4 0 2.6-1.2 2.6-2.6 0-.7-.3-1.3-.8-1.8l-3.1-3.1-.1-.1-.1-.1c-1.1-.9-2.6-.8-3.5.2l-3.1 3.1c-.5.5-.8 1.1-.8 1.8z"
      />
      <text
        transform="translate(955.01 1151.415)"
        className="st3 st4 st5">
        {"\xC1cido"}
      </text>
      <path
        className="st1"
        d="M990.3 1071.7h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
      />
      <path
        className="st21"
        d="M979.8 1080.7h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
      />
      <path
        className="st30"
        d="M949.8 1092.4h38.8v40h-38.8z"
      />
      <path
        className="st1"
        d="M988.6 1085.7v45.2c0 .7-.4 1.3-.8 1.3h-37.1c-.5 0-.8-.6-.8-1.3v-45.2"
      />
      <path
        className="st31"
        d="M1189.5 1030.8c0-6.7-7.8-12.1-17.5-12.1s-17.5 5.5-17.5 12.1h.1c-.1.3-.1.7-.1 1.1v37.6c0 3.5 3.4 6.4 7.6 6.8v6.2h5.2v-6.1h9v6.1h5.2v-6.2c4.5-.2 8-3.2 8-6.8v-37.6c0-.3-.1-.7-.1-1.1h.1z"
      />
      <path
        className="st34"
        d="M709.3 1703h-69.8c-2.4 0-4.3-1.9-4.3-4.3v-32.1c0-2.4 1.9-4.3 4.3-4.3h69.8c2.4 0 4.3 1.9 4.3 4.3v32.1c0 2.3-1.9 4.3-4.3 4.3z"
      />
      <path
        className="st6"
        d="M680.4 1590.3H647c-2.8 0-5-2.3-5-5v-136.4"
      />
      <path
        className="st31"
        d="M701.4 1580.9h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM686.2 1584.8l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st31"
        d="m701.8 1595.4-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st32"
        d="M694 1579.9v10"
      />
      <path
        className="st33"
        d="M685 1571.9h18M694 1572.9v8"
      />
      <path
        className="st31"
        d="M886.2 1580.9h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM871 1584.8l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st31"
        d="m886.6 1595.4-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st32"
        d="M878.8 1579.9v10"
      />
      <path
        className="st33"
        d="M869.8 1571.9h18M878.8 1572.9v8"
      />
      <path
        className="st31"
        d="M701.4 1626.4h-14.8c-.9 0-1.6-.7-1.6-1.6V1610c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM686.2 1630.3l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st31"
        d="m701.8 1640.9-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st32"
        d="M694 1625.4v10"
      />
      <path
        className="st33"
        d="M685 1617.4h18M694 1618.4v8"
      />
      <path
        className="st20"
        d="M707.2 1590.3h158.5"
      />
      <path
        className="st31"
        d="M776.2 1673.7h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM761 1677.6l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st31"
        d="m776.6 1688.2-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st32"
        d="M768.8 1672.7v10"
      />
      <path
        className="st33"
        d="M759.8 1664.7h18M768.8 1665.7v8"
      />
      <circle
        className="st23"
        cx={783.2}
        cy={1590}
        r={9.2}
      />
      <path
        className="st6"
        d="M681.4 1634.1H672c-2.8 0-5-2.3-5-5v-38.4"
      />
      <path
        className="st31"
        d="M911.2 1376.9h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM896 1380.8l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st31"
        d="m911.6 1391.4-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st32"
        d="M903.8 1375.9v10"
      />
      <path
        className="st33"
        d="M894.8 1367.9h18M903.8 1368.9v8"
      />
      <path
        className="st6"
        d="M891.1 1384.6h-9.3c-2.8 0-5-2.3-5-5v-47.4M707 1634.1h9.3c2.8 0 5-2.3 5-5v-38.4"
      />
      <path
        className="st20"
        d="M831 1590.7v85.4c0 3.9-3.2 7.1-7.1 7.1H782"
      />
      <text
        transform="translate(657.457 1680.119)"
        className="st2">
        <tspan
          x={0}
          y={0}
          className="st3 st4 st5">
          {"HACIA"}
        </tspan>
        <tspan
          x={-0.9}
          y={13.2}
          className="st3 st4 st5">
          {"TK CIP"}
        </tspan>
      </text>
      <path
        className="st7"
        d="M724.3 1689.4c1 0 1.9-.8 1.9-1.9v-9c0-1-.8-1.9-1.9-1.9-.5 0-1 .2-1.3.5l-4.5 4.5c-.7.7-.7 1.8-.1 2.6l.1.1 4.5 4.5c.4.5.8.6 1.3.6z"
      />
      <path
        className="st8"
        d="M724.3 1677.7c.5 0 .9.4.9 1v9c0 .6-.5.9-.9.9-.2 0-.4-.1-.6-.3l-4.5-4.5c-.3-.4-.3-1 0-1.3l4.5-4.5c.2-.2.4-.3.6-.3m0-2c-.8 0-1.5.3-2 .9l-4.5 4.5c-1.1 1-1.1 2.7-.2 3.9l.1.1.1.1 4.5 4.5c.5.5 1.2.8 2 .8 1.6 0 2.9-1.3 2.9-2.9v-9c0-1.6-1.3-2.9-2.9-2.9z"
      />
      <path
        className="st20"
        d="M756.2 1683.1h-29"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={157}
        height={140}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ0AAACMCAYAAABmrKvoAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABs9JREFUeNrsm4ly4lYQRSXxwHhL 7MpS+f/vm4nHGwaxKCLVndzpeQIxu8Q5VV1gbEQhHfXyJBcFwHem/Em2AcOi+V7ClAfeh3jnK1xz qozpBNnKTCDceYvXhOglX+oh3D4qedSIAsJ5COexC+GvHZQvHRHO5ZpIJItJkI9yez7l1CXbtrEJ j1sRMCteOiKcizZtYxZC5SuP9HwwDuk8w7lca4taYm0C7iTrNcekU+GSCTZv41Ji//OFyZhCqYVx l9WdSeWyLdt4k1iaB5tMr5eVrgzSzUyy6zZuJa7t9ZmJ52WWTDfuTOfZS4V7beOljWdxoQzv1XKb zXSVlNS5CXbXxr3FnYjn2W7S0dvBuOTTPm7VxsJk+2AupEzftzMvstLpJKpZ7tZk+6ON39v4zcS7 MSmnoa9DvHFPrN7LrSzDPZonUzv2KqYPF42Klw70c1G6vXB/mXz3Jt1lkI7SOu4Sq9ItTbprc6W0 39Um5Mqeb8IySqd0KUh3ZxluL9yfJt2tZDoGifMaJDzTeYvlg4P3eB4p9Pqd5bUKU+u1iHcv4eU1 hX4O8cad6Xx6raWkrq2/ezJf5h0rG0fLazKLfXq9sbiV57OMzUg3/gl2a1IVJuDCfLgy4eKqRnmo vMYS64vCF8X/a3Vz2fBMJlc4D3Z2zF049+HCwhPRJNN2/ZvtUshOZSbbTTOhVyMmZLezQlc4kkT0 Ima4bHnN3U2Su/baddEfzku8qiPK4sjNIFUPo3N3lCAZFJkk1cuPqscGi4L756BbtuLUZFR94YcA 9ElUvaQjs8E3g6UOQDpAOgCkA6QDQDpAOgCkA6QDpANAOkA6AKQDpANAOkA6AKQDpAOkA0A6QDoA pAOkA0A6QDpAOgCkA6QDQDpAOgCkA6QDQDpAOkA6AKQDpANAOkA6AKQDpAOkA0A6QDoApAOkA0A6 QDoApAOkA6QDQDpAOgCkA6QDQDpAOkA6AKQDpANAOkA6AKQDpANAOkA6QDoApAOkA0A6QDoApAOk A6QDQDpAOgCkA6QDQDpAOgCkA6QDpANAOkA6AKQDpANAOkA6QDoApIOzlK6xKOQR4LtnuigiMkKX JwcdqT5jA8gGXUmolxtVj43uLJpTNw5nJV9vP9KBrKbCbSV2IcoR7sjyKx2MsUu2y0STSVJZ6Rrb 0bqxvWCbNtaZ2FhUI5uCyy+QsDnQmoxNOk1Cm0yogJ/sn9Sx0Z0IV7examPZxps9LuW9KUhXDly6 GH3kaz631Ax0QNiKFxq1JKZtyHj/bSN1COcGr0y01zZeLK7kfXORrhywdCpZJd9Hn+e+X9PR/+46 euExSOd+rMwLDU9K9YGM90lPp1mutg3sN/bcxgcTbmp/vzHpppkDM7RyqoJNLJI8VhJdlcH3m5ac bTjjh15u1Q+X7sHceDJPXiXrbTLZrjPTuXRvItxchNunz0Ubl/baZKCZrpSetLL9MbWYWfjPKWTF XGWoQ6xFvt3AM17TId3ejXdtvLfnL+aNStc5vcadqNJdyN+6cDci4uRAHzSEsuoZzmWb2wl1ac/n 9rpnvyqUmnXoexfS+9Yi3hilezLh3lnWe7bvX2ey/MElE5XOy42X1KV90LXJOJUDMcTyWkoZdeGu 7KTy2JiAM2kniiDcQloR738XUmqyB2DA0sVK+GDxJN+7V3mNZ+9SRNLm8TpzEIY4wUbpLkS42zbu JFut5TsnOTlduP3Of7TwHuc1U2qagQqn4m3EDx8yn+07v9jr667sno5MKHXIfi7dXLJcGvggUUpp den2wv0q0ni2usm0GksR7m+Lh9DfrAYuXW5o0uU0bym8rVhletmizzpd18SykLM9hX5u6JluJtI9 h97M+zUfnhrb8d7XPFhv897E62qqh5zpjg1PqzA8Zb9rOmK0plTPfCk01NUJi6g/I7pU4j2dj/4L WXt6k3VKl662v3sM0j3Ya69SajYDHiSajt5uF5aHdJno6GWwQ+KpdJXtwLhoOtSrELpkon3dm5SJ lfQuvxQfL4575n+URlpL62JE02uuvzt07bU4NdPFD9jaAdplRBv6Za8iLJvo5Ry9BPhiZfdSBgmd 4HyIeJLSvCo+viRUFOO6LNZ1e1Pvu0z6ptZi4OX02HqdXsxey7DgpXVucjbyu4Usk+jwsR7JANHH id4nVPoKH1SOZIeWmVKxDQuhvkhcybplLT3fW8iUY7gS0ceHk0g/8sN/wp1YdjTKXkZ1iagJE9xa +rfNyIX7Kj0N5EutDhgTiTIMWHFyG9PdJUj3A6ZaFTAuD+Vu6R/LHSVI94OzXhl+zi0f8M9LSPdN 91PZIReyAQBAyz8CDADKxwqk08V4PQAAAABJRU5ErkJggg=="
        transform="translate(704.51 1436.9)"
      />
      <path
        className="st8"
        d="M763.5 1446.5h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3H846c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Caudal Rechazo Osmosis OR2 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(8, "Caudal Rechazo Ósmosis OR2", false)}>
        <path
          className={getTarjetaClass(8, selected)}
          d="M714.2 1453.9h138.1v99.8H714.2z"
        />
        <text
          transform="translate(732.037 1493.518)"
          className="st2">
          <tspan
            x={0}
            y={0}
            className="st0 st4 st15">
            {"Caudal Rechazo"}
          </tspan>
          <tspan
            x={10.9}
            y={16.8}
            className="st0 st4 st15">
            {"\xD3smosis OR2"}
          </tspan>
        </text>

        <text
          transform="translate(769.195 1538.837)"
          className="st3 st4 st17">
          {getScaledValue(datosScada.d8, 1)}
        </text>
        <text
          transform="translate(807.462 1538.441)"
          className="st3 st24 st25">
          {"m\xB3/hr"}
        </text>
        <text
          transform="translate(770.195 1471.672)"
          className="st3 st4 st5">
          {"FIT-253"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(8, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(8, "Caudal Rechazo Ósmosis OR2");
        }}>
        <path d="M732.3 1527.7c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M730.6 1526.7c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9.7-1.3 1.8-2.2 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM741.9 1525.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M742.5 1523.6c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM743.4 1532.7v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM738.4 1540.2c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Caudal Rechazo Osmosis OR2 */}

      <image
        style={{
          overflow: "visible",
          opacity: 0.2
        }}
        width={165}
        height={117}
        xlinkHref="data:image/png;base64,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"
        transform="translate(467.51 1482.9)"
      />
      <path
        className="st8"
        d="M568.7 1487.3h42.1c3.4 0 6.3 2.8 6.3 6.3v33.2c0 .8.3 1.6.8 2.2l5.3 6.5c1.1 1.3 1 3.3-.1 4.6l-5.1 5.5c-.6.6-.9 1.5-.9 2.4v36.9c0 3.4-2.8 6.3-6.3 6.3H478.3c-3.4 0-6.3-2.8-6.3-6.3v-91.3c0-3.5 2.8-6.3 6.3-6.3h90.4z"
      />

      {/* Presion Rechazo Osmosis OR2 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(6, "Presión Rechazo Ósmosis OR2", false)}>
        <path
          className={getTarjetaClass(6, selected)}
          d="M478.3 1487.3h133.8v103.9H478.3z"
        />
        <text
          transform="translate(493.574 1528.034)"
          className="st2">
          <tspan
            x={0}
            y={0}
            className="st0 st4 st15">
            {"Presi\xF3n Rechazo"}
          </tspan>
          <tspan
            x={12.5}
            y={16.8}
            className="st0 st4 st15">
            {"\xD3smosis OR2"}
          </tspan>
        </text>

        <text
          transform="translate(522.028 1573.806)"
          className="st3 st4 st17">
          {getScaledValue(datosScada.d6, 1)}
        </text>
        <text
          transform="translate(563.153 1573.41)"
          className="st3 st24 st25">
          {"Bar"}
        </text>
        <text
          transform="translate(529.147 1506.033)"
          className="st3 st4 st5">
          {"PT-018"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(6, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(6, "Presión Rechazo Ósmosis OR2");
        }}>
        <path d="M492.1 1562.7c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.1-2.5 2.2z" />
        <path d="M490.4 1561.7c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-2.9 1.5-3.7 3zM501.7 1560.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.7-2.5-2.2z" />
        <path d="M502.3 1558.5c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.3-2.3-2.4-3.7-3zM503.1 1567.7v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.7-.9-1.3-.9-2.1zM498.1 1575.1c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.8 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presion Rechazo Osmosis OR2 */}

      <circle
        className="st23"
        cx={642}
        cy={1537.8}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.2
        }}
        width={175}
        height={117}
        xlinkHref="data:image/png;base64,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"
        transform="translate(1048.51 1342.9)"
      />
      <path
        className="st8"
        d="M1159.4 1347.6h42.1c3.4 0 6.3 2.8 6.3 6.3v33.2c0 .8.3 1.6.8 2.2l5.3 6.5c1.1 1.3 1 3.3-.1 4.6l-5.1 5.5c-.6.6-.9 1.5-.9 2.4v36.9c0 3.4-2.8 6.3-6.3 6.3H1059c-3.4 0-6.3-2.8-6.3-6.3v-91.3c0-3.5 2.8-6.3 6.3-6.3h100.4z"
      />

      {/* Conductividad Perm. Osmosis OR1+OR2 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() =>
          loadGrafico(10, "Conductividad Perm. Ósmosis OR1+OR2", false)
        }>
        <path
          className={getTarjetaClass(10, selected)}
          d="M1059 1347.6h143.8v103.9H1059z"
        />
        <text
          transform="translate(1066.586 1388.325)"
          className="st2">
          <tspan
            x={0}
            y={0}
            className="st0 st4 st15">
            {"Conductividad Perm."}
          </tspan>
          <tspan
            x={8.4}
            y={16.8}
            className="st0 st4 st15">
            {"\xD3smosis OR1+OR2"}
          </tspan>
        </text>

        <text
          transform="translate(1098.71 1434.097)"
          className="st3 st4 st17">
          {getScaledValue(datosScada.d10, 1)}
        </text>
        <text
          transform="translate(1151.834 1433.701)"
          className="st3 st24 st25">
          {"\xB5S/cm"}
        </text>
        <text
          transform="translate(1113.829 1366.324)"
          className="st3 st4 st5">
          {"AE-208"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(10, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(10, "Conductividad Perm. Ósmosis OR1+OR2");
        }}>
        <path d="M1076.8 1423c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.1-2.5 2.2z" />
        <path d="M1075.1 1422c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-2.9 1.5-3.7 3zM1086.4 1420.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.7-2.5-2.2z" />
        <path d="M1087 1418.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.3-2.3-2.4-3.7-3zM1087.8 1428v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.7-.9-1.3-.9-2.1zM1082.8 1435.4c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.8 1.7 1.6 1.7z" />
      </g>

      {/* Fin Conductividad Perm. Osmosis OR1+OR2 */}

      <circle
        className="st23"
        cx={1232.7}
        cy={1398}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.2
        }}
        width={175}
        height={117}
        xlinkHref="data:image/png;base64,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"
        transform="translate(1048.51 1457.9)"
      />
      <path
        className="st8"
        d="M1159.4 1462.6h42.1c3.4 0 6.3 2.8 6.3 6.3v33.2c0 .8.3 1.6.8 2.2l5.3 6.5c1.1 1.3 1 3.3-.1 4.6l-5.1 5.5c-.6.6-.9 1.5-.9 2.4v36.9c0 3.4-2.8 6.3-6.3 6.3H1059c-3.4 0-6.3-2.8-6.3-6.3v-91.3c0-3.5 2.8-6.3 6.3-6.3h100.4z"
      />

      {/* pH Permeado OR1+OR2 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(17, "pH Permeado OR1+OR2", false)}>
        <path
          className={getTarjetaClass(17)}
          d="M1059 1462.6h143.8v103.9H1059z"
        />
        <text
          transform="translate(1094.372 1503.295)"
          className="st2">
          <tspan
            x={0}
            y={0}
            className="st0 st4 st15">
            {"pH Permeado"}
          </tspan>
          <tspan
            x={15.7}
            y={16.8}
            className="st0 st4 st15">
            {"OR1+OR2"}
          </tspan>
        </text>

        <text
          transform="translate(1112.71 1549.068)"
          className="st3 st4 st17">
          {getScaledValue(datosScada.d17, 1)}
        </text>
        <text
          transform="translate(1153.834 1548.672)"
          className="st3 st24 st25">
          {"pH"}
        </text>
        <text
          transform="translate(1119.829 1481.295)"
          className="st3 st4 st5">
          {"AE-209"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(17, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(17, "pH Permeado OR1+OR2");
        }}>
        <path d="M1082.8 1538c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.1-2.5 2.2z" />
        <path d="M1081.1 1537c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-2.9 1.5-3.7 3zM1092.4 1535.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.7-2.5-2.2z" />
        <path d="M1093 1533.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.3-2.3-2.4-3.7-3zM1093.8 1543v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.7-.9-1.3-.9-2.1zM1088.8 1550.4c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.8 1.7 1.6 1.7z" />
      </g>

      {/* Fin pH Permeado OR1+OR2 */}

      <circle
        className="st23"
        cx={1232.7}
        cy={1513}
        r={9.2}
      />
      <path
        className="st6"
        d="M891.3 1590.3h9.3c2.8 0 5 2.3 5 5v38.4"
      />
      <path
        className="st31"
        d="M903.7 1642.9h3.7v11h-3.7z"
      />
      <path
        className="st31"
        d="M912.7 1636.9c.7.7.7 2 0 2.8l-5.6 5.6c-.7.7-2 .7-2.8 0l-5.6-5.6c-.7-.7-.7-2 0-2.8"
      />
      <path
        className="st34"
        d="M1034.9 1404.9h-73.2c-2.4 0-4.3-1.9-4.3-4.3v-32.1c0-2.4 1.9-4.3 4.3-4.3h73.2c2.4 0 4.3 1.9 4.3 4.3v32.1c0 2.4-2 4.3-4.3 4.3z"
      />
      <text
        transform="translate(981.952 1382.032)"
        className="st2">
        <tspan
          x={0}
          y={0}
          className="st3 st4 st5">
          {"HACIA"}
        </tspan>
        <tspan
          x={-0.9}
          y={13.2}
          className="st3 st4 st5">
          {"TK CIP"}
        </tspan>
      </text>
      <path
        className="st7"
        d="M948.3 1391.3c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st8"
        d="M948.3 1379.6c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st20"
        d="M916.3 1385h29.1"
      />
      <path
        className="st7"
        d="M1226.4 1574.6c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
      />
      <path
        className="st8"
        d="M1238.1 1574.6c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <path
        className="st6"
        d="M86.1 1330.2H58.8c-2.8 0-5-2.3-5-5v-151.4c0-5.5 4.5-10 10-10h1297.5c5.7 0 10.3-4.6 10.3-10.3l-1.4-126.3c-.1-5.9-3.9-10.7-9.8-10.6l-14.7.3"
      />
      <path
        className="st34"
        d="M350.7 1281.4h-73.2c-2.4 0-4.3-1.9-4.3-4.3V1245c0-2.4 1.9-4.3 4.3-4.3h73.2c2.4 0 4.3 1.9 4.3 4.3v32.1c0 2.4-1.9 4.3-4.3 4.3z"
      />
      <text
        transform="translate(295.183 1257.885)"
        className="st2">
        <tspan
          x={0}
          y={0}
          className="st3 st4 st5">
          {"DESDE"}
        </tspan>
        <tspan
          x={1.2}
          y={13.2}
          className="st3 st4 st5">
          {"TK CIP"}
        </tspan>
      </text>
      <path
        className="st6"
        d="M843.2 1313.5V1230c0-5.5 4.5-10 10-10h523.9c5.7 0 10.3-4.6 10.3-10.3l-2.8-518.5c-.1-5.9-4.9-10.7-10.8-10.6l-835.7.3"
      />
      <path
        className="st7"
        d="M836.9 1317.2c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
      />
      <path
        className="st8"
        d="M848.6 1317.2c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <circle
        className="st23"
        cx={1238}
        cy={436.1}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={157}
        height={141}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ0AAACNCAYAAACt8HhNAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABvRJREFUeNrsmwlv2loQRn3BQEKS tq99y///f90IhMQE8DPSTPt1cs2SpFVszpFGpgSMjI9nuaZFAfCHSW9sP/D2qf+0LGnPexHv/ISr nyNjeaJsKRMId57i1SGOli+dINtAthpRQOi3cB7bEP5ckRHx6EynMu3kGlqUYavyUW77X05dso3F WrYqYWvWKw8Ip7KNmhhLjCz87+lAzwfdls6zl8q2auLRtv54I5EVrzxCOJftoolLiYnFSDIeZbbf ZdUznItWNXFv8WDhAhZt4u3LdC6cy3ZtcdPEVRNT+9vE9uNllkzXz0znZdMz3IPJdtfEoom5ebC0 168yfV5WOs1wpQk1NdE+SLwzAaeS7dp6O+iHfCqdZziX7btVw9LOf71nus1K51luLBnuryY+NfG3 bV08z3Zl6OsQr58T6yZI58JdWuJJYcjYyGT7I9uVLb1cKdLdmHT/NPGfbT+adFdSXocF63Z9LrF1 GCCWJt3UXEmSCb3nW2fE21tex7bDd5bZdlnuXxPvo2S6sfR0ZLnzGCRWlun8/A/sec+AS9tWuZYr N0jETHdt0nmJ/WTS3UhaLQvuUJxDpqtletWSupYe79b+lktGR5VXHySuLbO9t/BB4oLJ9awmWC2x 7s7aJtl5ZrgcBi/2llcVz5dMphKXslwyZGo9KwH1ZoCX1OjEODNcPpEuZbKdr9ONip8Lwb7DcbH/ bgT0V7ok7sS7VNGLQabtqsuWkhgznq/blWGH3PA/TwbFr7dIh8GN3PJZtqeLvV3ulyUpIxrCnQ9t P3HLeZL2GXvoQxAMThHx4CA5OGHHqeUD4Hxle5YPgyN3CPCSzPesTAfwqlMIANIB0gEgHSAdANIB 0gEgHSAdIB0A0gHSASAdIB0A0gHSAdIBIB0gHQDSAdIBIB0gHQDSAdIB0gEgHSAdANIB0gEgHSAd ANIB0gHSASAdIB0A0gHSASAdIB0gHQDSAdIBIB0gHQDSAdIBIB0gHSAdANIB0gEgHSAdANIB0gHS ASAdIB0A0gHSASAdIB0A0gHSAdIBIB0gHQDSAdIBIB0gHSAdANIB0gEgHSAdANIB0gEgHSAdIB0A 0gHSASAdIB0A0gHSAdIBIB2cnXS1RSFbgGOoMw49K9PVGRGREbnqFj9eVF7rlgB4tiPlgZ1sZRuj rxKm31Bq+ipZmxd7/ShbviDd4ToTG4vBbzhRb0229ALJ+tgX13L+Ny1+qIBPvptSnkjB4N0OHy1W TVQh/L1bOTGp49LFOFa+uqWJ7lM1qIN0OSdW4swmZLwf+ygzO9YMt9vJQxP3TdxJjOz1u9cMO57x VLKBRXyc9shXt5ScumetSC1JZmOS3YW4N19WezLek/JaB+F8x/Mmbpu4EuF2Nk9sH4MOCqfZ2QUb WpTyeBgE1KpQZHqbtZSdjVzx2x6UW/XD3fjWxHfzY27PVUG8OldeFZVuZ+7CdnoZhLvKSJc6KJ0L VVqM7TjH8ljlSy1X/jq0I1pq9KrvqnR1i3Q7Nz438cUeL8wblW7v9Kr93O5NS7N3EoS764l0STKc i3ZhcSmPVb5B6H83ItqDtCNaatp6nD5Id2vCfbasNzdvVuGYjyqvlb3ZS40Lt/syb+ykjHsg3VAy 3E6wqV1Q17a9smOd2GuGcpwuXCV970JiGXqcTY+k80o4twz3zeLWjrs6trzGq/dBhgRvHhd2Ii7s 6i+DcKmj0k1Mrmu7qN5bVPbvqX0HI/tO6nBxet87s5MwF/GqjksXp/K1+OEXmh//wp5/bDvetvLq J6UKfd6D7XQiJWfQ4UEiSWl16Vy4mKlWJt7E3lNn+t7dlf7VYialptp3Ejo4SGzDUtq9Had/X3qR bQ9JFxcA9bFLN5ayOswI19VMNzapruWKXUqfVtnfLuz1tfQ1MxPNe5uvku2WPSivdUvfv5YLciUX lx5rcWiQiFNZXCyuZMo7dh3rLaNLJd7TXZlwdybMvcQ7y4Yq3cIynAv3WTLdQjLlJkywXZYud8cq LhMddRusrYbrssAgRJfvROiSifZ1yzB96uL4e1k62mak+yJZ7jbTz3V5ySTnxr57r8UpmS6X8VKm 30tF9297FWHZpMqESjezEhwz3Uz6uZkJdxca6j4sDueGzrZbf62UJ+y8rYR2/Wa/rtetM4u8lQwL safTtcyZ9IIq3Lrj63PHlNvilIupfOEHpZ58kSmUCP0FxaMMDHF69WWDZfH0/mNfhTtJsJdK96of /Aa/wJRpknVCWxY/78wMi19/baETrt6B2BT88LW1r4Gnw4UOGCOJsvj1joSW43VmfQrhkO7kPk9/ fRLXJWM5jrIhHNI9SzwVME7tuZ/187/okO5Vl1biumTuf8chG9L9se8K2QAAwPhfgAEAFwQtnaPA B7AAAAAASUVORK5CYII="
        transform="translate(1158.51 280.9)"
      />
      <path
        className="st8"
        d="M1217.4 290.8h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V297.1c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Presion Entrada Membranas Os. OR1 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() =>
          loadGrafico(4, "Presión Entrada Membranas Ósmosis OR1", false)
        }>
        <path
          className={getTarjetaClass(4, selected)}
          d="M1168.1 298.2h138.1V398h-138.1z"
        />
        <text
          transform="translate(1189.475 336.795)"
          className="st2">
          <tspan
            x={0}
            y={0}
            className="st0 st4 st15">
            {"Presi\xF3n Entrada"}
          </tspan>
          <tspan
            x={-13.2}
            y={16.8}
            className="st0 st4 st15">
            {"Membranas \xD3s. OR1"}
          </tspan>
        </text>

        <text
          transform="translate(1223.074 383.114)"
          className="st3 st4 st17">
          {getScaledValue(datosScada.d4, 1)}
        </text>
        <text
          transform="translate(1267.34 382.719)"
          className="st3 st24 st25">
          {"Bar"}
        </text>
        <text
          transform="translate(1220.074 315.95)"
          className="st3 st4 st5">
          {"PT-010"}
        </text>
      </g>
      {/* Campana */}
      <g
        className={`${getTemaAlarma(4, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(4, "Presión Entrada Membranas Ósmosis OR1");
        }}>
        <path d="M1186.1 372c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M1184.4 371c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9.7-1.3 1.8-2.2 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM1195.7 369.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M1196.3 367.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM1197.2 377v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1192.2 384.5c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presion Entrada Membranas Os. OR1 */}

      <image
        style={{
          overflow: "visible",
          opacity: 0.2
        }}
        width={175}
        height={117}
        xlinkHref="data:image/png;base64,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"
        transform="translate(48.325 828.05)"
      />
      <path
        className="st8"
        d="M160 832.6h42.1c3.4 0 6.3 2.8 6.3 6.3v33.2c0 .8.3 1.6.8 2.2l5.3 6.5c1.1 1.3 1 3.3-.1 4.6l-5.1 5.5c-.6.6-.9 1.5-.9 2.4v36.9c0 3.4-2.8 6.3-6.3 6.3H59.6c-3.4 0-6.3-2.8-6.3-6.3v-91.3c0-3.5 2.8-6.3 6.3-6.3H160z"
      />

      {/* Presion Rechazo Osmosis OR1 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(19, "Presión Rechazo Ósmosis OR1", false)}>
        <path
          className={getTarjetaClass(99, selected)}
          d="M59.6 832.6h143.8v103.9H59.6z"
        />
        <text
          transform="translate(78.894 873.342)"
          className="st2">
          <tspan
            x={0}
            y={0}
            className="st0 st4 st15">
            {"Presi\xF3n Rechazo"}
          </tspan>
          <tspan
            x={12.5}
            y={16.8}
            className="st0 st4 st15">
            {"\xD3smosis OR1"}
          </tspan>
        </text>

        <text
          transform="translate(107.349 919.114)"
          className="st3 st4 st17">
          {getScaledValue(datosScada.d19, 1)}
        </text>
        <text
          transform="translate(158.474 918.719)"
          className="st3 st24 st25">
          {"Bar"}
        </text>
        <text
          transform="translate(114.468 851.342)"
          className="st3 st4 st5">
          {"PT-026"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(19, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(19, "Presión Rechazo Ósmosis OR1");
        }}>
        <path d="M77.4 908.1c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.1-2.5 2.2z" />
        <path d="M75.7 907.1c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-2.9 1.5-3.7 3zM87 905.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.7-2.5-2.2z" />
        <path d="M87.6 903.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.3-2.3-2.4-3.7-3zM88.4 913.1v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6H88c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.7-.9-1.3-.9-2.1zM83.4 920.5c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.8 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presion Rechazo Osmosis OR1 */}
      <circle
        className="st23"
        cx={233.3}
        cy={884.1}
        r={9.2}
      />
    </svg>
  );
};

export default ScadaCocaColaAndina;

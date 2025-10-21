import * as React from "react";
import {
  getColor,
  getColorConexion,
  getConexion,
  getScaledValue,
  getTarjetaClass,
  getTemaAlarma
} from "../../../../commons/scada/scada";

const ScadaAquaChileRH_ORVF8156 = (props) => {
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
      id="Layer_1"
      x={0}
      y={0}
      style={{
        enableBackground: "new 0 0 1915.9 1798"
      }}
      viewBox="0 0 1915.9 1798"
      {...props}>
      <style>
        {
          ".st0{fill:#323e48}.st1{fill:#fff}.st2{}.st3{font-size:11px}.st4,.st5,.st6{fill:none;stroke:#35ace8;stroke-width:4;stroke-miterlimit:10}.st5,.st6{stroke:#00aeed;stroke-width:3.3831}.st6{stroke:#cbcbcb;stroke-width:2;stroke-opacity:.6}.st7{fill:#cbcbcb;fill-opacity:.6}.st8{fill:none;stroke:#00aeed;stroke-width:4;stroke-miterlimit:10}.st11{fill:#3574e0}.st14{fill:#666}.st15{font-size:14px}.st16{fill:#606060}.st17{font-size:17px}.st18{fill:#00e098}.st20{fill:#0e76e7}.st21{fill:none;stroke:#2f3e49;stroke-width:4;stroke-miterlimit:10}.st22{fill:#2f3e49}.st23{fill:#00aeed}.st24{opacity:.15;fill:#0e76e7;enable-background:new}.st25,.st26,.st27{fill:#fff;stroke:#35ace8;stroke-width:4;stroke-miterlimit:10}.st26,.st27{fill:none;stroke:#323e48}.st27{stroke:#fff;stroke-width:2}.st28{fill:#cbcbcb}.st29{fill:#00a39b}.st31{font-size:13.9709px}.st34{font-size:14.2214px}.st40{fill:#fff;stroke:#35ace8;stroke-width:3.9998;stroke-miterlimit:9.9995}.st42{font-size:12px}.tarjeta{fill:#ffffff}.tarjetaSeleccionada{fill:#3574e0;opacity:.15}.cursorPointer{cursor:pointer}.cursorNormal{cursor:default}.campana{fill:#3474E0;}.campana:hover{fill:#7c7c7c;}.campanaVacia{fill:#c2c2c1;}.campanaVacia:hover{fill:#7c7c7c;}.campanaDesconectada{fill:#c2c2c1;}"
        }
      </style>
      <path
        id="path2053_1_"
        d="M1509.1 1433.8c0-6.7-7.8-12.1-17.5-12.1s-17.5 5.5-17.5 12.1h.1c-.1.3-.1.7-.1 1.1v37.6c0 3.5 3.4 6.4 7.6 6.8v6.2h5.2v-6.1h9v6.1h5.2v-6.2c4.5-.2 8-3.2 8-6.8v-37.6c0-.3-.1-.7-.1-1.1h.1z"
        className="st0"
      />
      <text
        className="st1 st2 st3"
        transform="translate(1476.505 1457.424)">
        {"ZM-01"}
      </text>
      <path
        id="path2105_2_"
        d="M1889.2 947.5v291.7c0 13.1-10.6 23.8-23.8 23.8h-339.1c-4.4 0-6.2 2.6-6.2 6.9v100.4c0 3.3-2.7 6-6 6h-7.5c-.3 0-2-.1-2.3-.1-1.4-.1-6.7-.1-6.8 9.1v41.7c0 2.9-2.4 5.2-5.2 5.2-2.9 0-5.2-2.4-5.2-5.2v-42c-.6-8.1-5.1-8.7-7.1-8.8h-7.2c-5.6 0-10.2-4.6-10.1-10.3l.1-41.6v-55.5c0-3.3-2.7-5.9-5.9-5.9h-252.4"
        className="st4"
      />
      <path
        d="M877.4 1248.3v95.7c0 4.7 3.8 8.5 8.5 8.5h120.7M1046.4 1353.7h342.2c10 0 18.2 8.1 18.2 18.2V1674c0 10 8.1 18.2 18.2 18.2h37.5"
        className="st5"
      />
      <path
        id="polyline2061"
        d="M1553.9 597.9h26.7v-72.7h-20.7"
        className="st6"
      />
      <path
        id="polygon2063"
        d="M1547.2 592.3h-8.6v10.6h8.6l4.6-2.6 4.5-2.7-4.5-2.6z"
        className="st7"
      />
      <path
        id="polyline2061_3_"
        d="M776.8 1160.3v-45h-23.9"
        className="st6"
      />
      <path
        id="polygon2063_1_"
        d="m752.9 1118.2 4.5-2.6-4.5-2.7-4.6-2.6h-8.6v10.6h8.6z"
        className="st7"
      />
      <path
        id="path1597_2_"
        d="M793.3 574.5V564c0-5.3 4.3-9.6 9.6-9.6h278.4s8.8-.8 8.7 8.7c-.1 10.7 0 29.3 0 29.3s-.7 9.4 10.3 9h6"
        className="st8"
      />
      <path
        id="path1597_4_"
        d="m1220 539.9.1 190.6c-.1 5.3-4.4 9.6-9.7 9.5l-10.5-.1"
        className="st8"
      />
      <g id="g1485">
        <g id="g1425">
          <image
            xlinkHref="data:image/png;base64,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 gg=="
            id="image1419"
            width={286}
            height={178}
            style={{
              overflow: "visible",
              opacity: 0.2,
              enableBackground: "new"
            }}
            transform="translate(1602.882 37.415) scale(.9969)"
          />
          <g id="g1423">
            <path
              id="path1421"
              d="M1876.1 207.4h-263.2c-3.4 0-6.1-2.8-6.1-6.1V49.7c0-3.4 2.8-6.1 6.1-6.1h263.2c3.4 0 6.1 2.8 6.1 6.1v151.5c0 3.4-2.7 6.2-6.1 6.2z"
              className="st1"
            />
          </g>
        </g>
        <g id="g1433">
          <image
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAAB8CAYAAABqtVxXAAAACXBIWXMAAAs6AAALOgFkf1cNAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABKhJREFUeNrs2mtPG0cUgOGxvRgK 5EJpm6qRqv7/39VWVUhDIdyMYd3Z9kwYtraxwSSK+jzSkSHYfHtzZpdNCfhqDD7z54D7Zs8V3qB6 FSxsLtjZqvEOVgy1P8NewMD6W7XE2lZfz5aF+1BswyrQUW+Gti08Won0tjdtL+KVgq03aRMzjtmO 1yZ+PrRpYe3N2gV5E3NdzTT+rcTb1r+gWRBrCXErAv0mz26e/Tx78f12Fa1YYb1r1tsIdJLnIs95 vF7GlHhTHW2zZLNuVZG+jjmI1xd5duI9I9ezsPZ16zSi7EI9y3MScxyvZ/H+aX1d2yy4bm1ii77K 812eH/K8iddv87yMn/eDBVa7fu2OvVexVU/zfMhzlOddXHIOe9ey/7w2C7brOI6+XZw/5fk5z9s8 P+Y5jK1bgnUkhvU2bVsdibtgP0awB3GqHVZR1zeiZvOOxKO4Pn0R27UL9ZeI9k0ciXfT3Y0nd4ph /Q1bgpzEsfgglmQTkU7iWvYqjsXd+wfNguNwCfYwturb2LTfx3bdSXc3nFy7wvpbttx4ukl3N3JL rOWYfBIxT+J9n65h64ciRtWR+FUciw+ra9fd3lFYrLB+sKmKttwLamOrHsf17FF8XZZjO+9IXP85 p/5Tzm66uzPcCBUebdA71Q4i1v1Ykq9jOe6l+888DObddKqjHVdT/hewWWGz6t7KMw/lWYd7N3aH C+ovD04sehRRrLC5bVt66z9V2KTen00XBfvQAJsPd96yvHeiHa74S0QKny/afnNLNyzw5cNN8xal YOErIlgQLCBYECwgWECwIFhAsIBgQbCAYAHBgmABwQKCBcECggUEC4IFBAsIFgQLCBYQLAgWECwg WBAsIFhAsCBYQLCAYEGwgGABwYJgAcECggXBAoIFBAuCBQQLCBYECwgWECwIFhAsIFgQLCBYQLAg WECwgGBBsIBgAcGCYAHBAoIFwQKCBQQLggUECwgWBAsIFhAsCBYQLCBYECwgWECwIFhAsIBgQbCA YAHBgmABwQKCBcECgoX/h1nv9cFgZwsGeN5Qy7Tz2hs+8KHb+GArXHjWUNvo7SbPNF5veu2lZsmH ywevY6ZVwIMYYHOxlt4mea6qcNvy5mbOZi2xdh+6zHMR0329E1u5df0LGwu27u0sz8c85/H9dbUo /7NhyzH4OiI9zXOc50Oe/Tyj+PlWfG3LwtO36zR6O4nWuvkrwp3UR+Om+uCg9wsue8HuxVbtPrwd wSbRwqNjTdVR+Dw6+zNeTyLismFndbD9a9eriPV9hLoVP+t+wcsqWMdieFq05UTbbdOjPL/m+T3a O40WS7BLj8TlF4zi3y+j/BcRbJPcfIKnxFr3dhbb9Y88v0WwZ3EkXrhhU+9MXTboNAJ+Fxt3XF3D ChaefiSur2HfxzXsRfysXbZhy7E4ReFtVN4Fu5v+vVPcRMwD17Hw6FhTuv9XmYt0d5f4otqun4Jd FNogghzF9es4jsHjiNV2hc0di0u05ZmHSbr/3EObVtiMJdoS7qj6fmizwsY2bf3wxG1vq7b9KNMD 0c4bscLmo03pgceAV4lOoPDlAl472Ke8H1g/1oX+FmAAN+xcPURU2mQAAAAASUVORK5CYII="
            id="image1427"
            width={237}
            height={125}
            style={{
              overflow: "visible",
              opacity: 0.2,
              enableBackground: "new"
            }}
            transform="translate(67.221 37.463) scale(.9708)"
          />
          <g id="g1431">
            <path
              id="path1429"
              d="M285.5 151.5H76.7c-3.4 0-6.1-2.8-6.1-6.1V49.7c0-3.4 2.8-6.1 6.1-6.1h208.7c3.4 0 6.1 2.8 6.1 6.1v95.6c.1 3.4-2.7 6.2-6 6.2z"
              className="st1"
            />
          </g>
        </g>
        <circle
          id="circle1435"
          cx={1642.9}
          cy={178.8}
          r={8}
          style={{
            fill: "#B4002B"
          }}
        />
        <circle
          id="circle1437"
          cx={1642.9}
          cy={101.2}
          r={8}
          style={{
            fill: "#00cd98"
          }}
        />
        <circle
          id="circle1439"
          cx={1642.9}
          cy={120.6}
          r={8}
          className="st11"
        />
        <g id="g1443">
          <circle
            id="circle1441"
            cx={1642.9}
            cy={140}
            r={8}
            style={{
              fill: "#fbc43b"
            }}
          />
        </g>
        <g id="g1447">
          <circle
            id="circle1445"
            cx={1642.9}
            cy={159.5}
            r={8}
            style={{
              fill: "#ff6200"
            }}
          />
        </g>
        <g id="g1459">
          <text
            id="text1449"
            className="st14 st2 st15"
            transform="translate(1660.867 105.915)">
            {"Funcionando"}
          </text>
          <text
            id="text1451"
            className="st14 st2 st15"
            transform="translate(1660.867 125.915)">
            {"Movi\xE9ndose"}
          </text>
          <text
            id="text1453"
            className="st14 st2 st15"
            transform="translate(1660.867 145.915)">
            {"Falla"}
          </text>
          <text
            id="text1455"
            className="st14 st2 st15"
            transform="translate(1660.867 165.915)">
            {"Bloqueada"}
          </text>
          <text
            id="text1457"
            className="st14 st2 st15"
            transform="translate(1660.867 185.915)">
            {"Detenida"}
          </text>
        </g>
        <g id="g1463">
          <text
            id="text1461"
            className="st16 st2 st15"
            transform="translate(104.759 77.731)">
            {"Conectividad de Planta"}
          </text>
        </g>
        <text
          id="text1465"
          className="st16 st2 st17"
          transform="translate(138.552 128.21)">
          {getConexion(datosScada.con)}
        </text>
        <g id="g1477">
          <g id="g1473">
            {/* <image
              xlinkHref="8AD863DF.png"
              id="image1467"
              width={39}
              height={42}
              style={{
                overflow: "visible",
                opacity: 0.15,
                enableBackground: "new",
              }}
              transform="translate(96.77 102.766) scale(.9207)"
            /> */}
            <g id="g1471">
              <circle
                id="circle1469"
                cx={114.8}
                cy={122.2}
                r={12.1}
                className="st1"
              />
            </g>
          </g>
          <circle
            id="circle1475"
            cx={114.8}
            cy={122.1}
            r={8.9}
            fill={getColorConexion(datosScada.con)}
          />
        </g>
        <g id="g1481">
          <text
            id="text1479"
            className="st16 st2 st15"
            transform="translate(1634.904 77.731)">
            {"Funcionamiento de dispositivos"}
          </text>
        </g>
        <path
          id="line1483"
          d="M89.2 96.2H275"
          style={{
            opacity: 0.5,
            fill: "none",
            stroke: "#b3b3b3",
            strokeWidth: 0.5,
            strokeMiterlimit: 10,
            enableBackground: "new"
          }}
        />
      </g>
      <path
        id="path1487"
        d="M55.9 393.3h86.5c4.7 0 8.5 3.8 8.5 8.5v38.3"
        className="st8"
      />
      <path
        id="rect1489"
        d="M113.9 454.7h124.8v97.7H113.9z"
        className="st20"
      />
      <path
        id="path1491"
        d="M238.5 438.4v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1V438.4"
        className="st21"
      />
      <g id="g1495">
        <path
          id="path1493"
          d="M390.4 517.1H373c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
          className="st22"
        />
      </g>
      <g id="g1501">
        <path
          id="path1497"
          d="M339.8 554.1c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
          className="st23"
        />
        <path
          id="path1499"
          d="M339.8 542.4c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
          className="st1"
        />
      </g>
      <g id="g1505">
        <text
          className="st16 st2 st3"
          transform="translate(145.613 574.535)">
          {"ESTANQUE"}
        </text>
        <text
          className="st16 st2 st3"
          transform="translate(125.413 587.735)">
          {"DE ALIMENTACI\xD3N"}
        </text>
      </g>
      <path
        id="line1507"
        d="M245.8 547.2h91.1"
        className="st8"
      />
      <g id="g1513">
        <path
          id="path1509"
          d="M144.3 443.2c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
          className="st23"
        />
        <path
          id="path1511"
          d="M156 443.2c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
          className="st1"
        />
      </g>
      <g id="g1525">
        <g id="g1521">
          <image
            xlinkHref="8AD863D1.png"
            id="image1515"
            width={43}
            height={43}
            style={{
              overflow: "visible",
              opacity: 0.15,
              enableBackground: "new"
            }}
            transform="matrix(.814 0 0 .814 351.662 513.817)"
          />
          <g id="g1519">
            <circle
              id="circle1517"
              cx={369.6}
              cy={531.6}
              r={10.9}
              className="st1"
            />
          </g>
        </g>
        <circle
          id="circle1523"
          cx={369.6}
          cy={531.4}
          r={8}
          className="st24"
        />
      </g>
      <g id="g1529">
        <text
          id="text1527"
          className="st16 st2 st3"
          transform="translate(354.945 581.307)">
          {"P-001"}
        </text>
      </g>
      <g id="g1577">
        <g id="g1541">
          <image
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAB5CAYAAAA00bOLAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABXpJREFUeNrsmm1z2kYURpG0NtiG xG7SNNN0+qX//z+1TZs4bmJsMO8Iupo+m7ksEhCXzhTpnJk7wrLEDOuzdx8tTlqHk7QA/mF9DGES c0yQDKnMcb1PtGTP+VSvU1MJgjVWrKJWpsLPpZK5CrGCUE51pmOmQrBmipWrlr4WOi6rBHMVYmUS quPrwlRb99DBmtmxCpFmviamphItjwVzFWIVEl366vm6Vr3QubauSclgjclYK8lTiDX2NfD1oBrq 3CwWLO5chTDnkujG1xtfP6huJFvHdC9oBqFrTSVT39cn1Z0Rygr2VS6bsdqSqBDrZ9U7X6+RC7kk 12etZG39PmSv3Cyh63hZdMpWxTL4VmL94usnX698dfWGKXI1Tq6VOtOT/Ojod3Mti1O9XlZ1rjPJ FZbEdxLrR527iAI9NCd7he7VNR1rqvxVLJOPkmxuO1e89XCh5e9GS+Erk7faZisCmidYbhrSTIE+ uBE3nsRFYT5krivd0JOpZdsQ0Dy5EpOxusaRq8iPrWXRdq9zrakdvXZm+4Gs1UyCWNkORzb2P9Po 5nhn3krFpilYR7LIky1H0pKb7UUJyyBUSLbXk3SPoUgFh3SyUk/IT/CfgVyAXIBcAMgFyAXIBYBc gFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBcgFyAXADIBcgFgFyAXIBcAMgF yAXIBYBcgFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBcgFyAXADIBcgFgFyA XIBcAMgFyAXIBYBcgFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBccMJyrU0B tJ7jSVpy8Sq6aYVk8BxP0hILi4uWpvLojYBOtZIX1pMtR1yFWHNfU9XcSJbo+qSGA5ccafDr3q3y HY5sCObMzUGsma+Rr6HqyVfXXJvVTC47YZ4zedbRBK2rZGuJVfgxkRfBkZHOB8G+dq64a010Q9/X Z1/Xvtq6fql70poIFoRKTSUmLiQHSLUy47eqaYSI/Sjc+CI/+vJlEncvF928MDff+Xrhq6NrZupg bfOHqINYmaoYizMd3R7ByvLpwsSHvGaChUkzU8cqxPrD15/ypC9vFjbYu2jAgpkPvm59net3U53r STZ34nLZjuU0YS5MtSVaVtKlbfZYmGUi1Kwq4J64XEt5MFTHKsT6XZ48mM5VGuht5hrKyNCxBr5u aiJXYp6UM02gK322IgK81OtLSRZ/VjtOY43VowY45I+5ecquQwaL5So61SfVnc7Fk2qjc4U3mZs/ wFID2NcSGQY8OzCX/J+xXaunyfO9rze+XuvnrplMienuUy0PIZcWA/yXyR9b4faEs1bLdOowoQaa TGFCjeXNxud1JW8U3sTa+miWCxvoTznUx3J95+utBm5q5FiZnBnnjltljw96fV8zucryZRwDpooH edU+V5lga9PJxro2M1sRp/60GB5KwrJ4rZn4pAFcmLB+qc8fOnkh1kdljt8k2J3uH5lZXAe5rGC5 2eey41OaL92OVpibZWAeParXZRsi5K6Bae9WrBDYewr4C11XZI33vn6VYB8lXBDTfqvRqplg8ZZL Za50B6y14VjH3fkg2EwTaBGJFQLsSyPXo5bA96oPEmsYLad13UhttQ7cMHbf8GZ1/conj2ZjCK9z LXFf9DAT5BoovN+qg91HYuU1eUI8xIuduGO/4QkOUhKFUbuHNdLT4JXJXCN1r36U0eq2t/WvcQzB xr+NWMGCXPcK/ZnpaGPVpLX9pS3UMD8dO+THXwfZfa746x7EQq6Dx6Tsy+xkxxMTYiHXN49L2RPy uuIIyHWUMUKoA/hbgAEAGrEmYbv27m4AAAAASUVORK5CYII="
            id="image1531"
            width={158}
            height={160}
            style={{
              overflow: "visible",
              opacity: 0.3,
              enableBackground: "new"
            }}
            transform="translate(1442.17 372.173) scale(.9663)"
          />
          <g id="g1539">
            <g id="g1537">
              <g id="g1535">
                <path
                  id="path1533"
                  d="M1501.2 381.5h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V387.8c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
                  className="st1"
                />
              </g>
            </g>
          </g>
        </g>

        {/* Presión Pre-filtros  */}
        {/* Tarjeta */}
        <g
          className="cursorPointer"
          onClick={() => loadGrafico(16, "Presión Pre-filtros", false)}>
          <path
            id="rect1543"
            d="M1451.9 388.9H1590v99.8h-138.1z"
            className={getTarjetaClass(16, selected)}
          />
          <g id="g1547">
            <text
              className="st20 st2 st15"
              transform="translate(1495.494 431.455)">
              {"Presi\xF3n"}
            </text>
            <text
              className="st20 st2 st15"
              transform="translate(1487.335 448.955)">
              {"Pre Filtros"}
            </text>
          </g>

          <g id="g1569">
            <text
              id="text1567"
              className="st16 st2 st17"
              transform="translate(1505.536 473.774)">
              {getScaledValue(datosScada.d16, 1)}
            </text>
          </g>
          <text
            id="text1571"
            className="st16 st2 st15"
            transform="translate(1555.178 473.378)">
            {"bar"}
          </text>
          <g id="g1575">
            <text
              id="text1573"
              className="st16 st2 st3"
              transform="translate(1503.513 411.609)">
              {"PT210"}
            </text>
          </g>
        </g>

        {/* Campana */}
        <g
          className={`${getTemaAlarma(16, loading, datosAlarmas)} cursorPointer`}
          onClick={() => {
            onClickAlarma(16, "Presión Pre-filtros");
          }}>
          <g id="g1565">
            <g id="g1563">
              <g id="g1561">
                <path
                  id="path1549"
                  d="M1467 462.7c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z"
                />
                <path
                  id="path1551"
                  d="M1465.3 461.7c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1z"
                />
                <path
                  id="path1553"
                  d="M1476.6 460.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z"
                />
                <path
                  id="path1555"
                  d="M1477.2 458.6c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1z"
                />
                <path
                  id="path1557"
                  d="M1478.1 467.7v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1z"
                />
                <path
                  id="path1559"
                  d="M1473.1 475.2c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z"
                />
              </g>
            </g>
          </g>
        </g>
      </g>

      {/* Fin Presión Pre-filtros  */}

      <g id="g1583">
        <path
          id="path1579"
          d="M808.9 479.6c12.5-4.9 17.1-3.9 17.1-18v-61.9c0-7-5.4-13-13-13h-29.7c-7 0-13 6-13 13v61.9c0 14.1 4.7 13.1 17.1 18v3.9c0 2.2 2.2 4.3 4.9 4.3h12.3c2.2 0 4.3-2.2 4.3-4.3v-3.9z"
          className="st0"
        />
        <path
          id="rect1581"
          d="M770.3 402.6H826v59.9h-55.7z"
          className="st20"
        />
      </g>
      <g id="g1589">
        <path
          id="path1585"
          d="M923.9 479.6c12.5-4.9 17.1-3.9 17.1-18v-61.9c0-7-5.4-13-13-13h-29.7c-7 0-13 6-13 13v61.9c0 14.1 4.7 13.1 17.1 18v3.9c0 2.2 2.2 4.3 4.9 4.3h12.3c2.2 0 4.3-2.2 4.3-4.3v-3.9z"
          className="st0"
        />
        <path
          id="rect1587"
          d="M885.3 402.6H941v59.9h-55.7z"
          className="st20"
        />
      </g>
      <g id="g1595">
        <path
          id="path1591"
          d="M1042.9 479.6c12.5-4.9 17.1-3.9 17.1-18v-61.9c0-7-5.4-13-13-13h-29.7c-7 0-13 6-13 13v61.9c0 14.1 4.7 13.1 17.1 18v3.9c0 2.2 2.2 4.3 4.9 4.3h12.3c2.2 0 4.3-2.2 4.3-4.3v-3.9z"
          className="st0"
        />
        <path
          id="rect1593"
          d="M1004.3 402.6h55.7v59.9h-55.7z"
          className="st20"
        />
      </g>
      <path
        id="path1597"
        d="M397.8 523h262.6c5.3 0 9.6-4.3 9.6-9.6V369.6c0-5.3 4.3-9.6 9.6-9.6h286.5s8.8-.8 8.7 8.7c-.1 10.7 0 29.3 0 29.3s-.7 9.4 10.3 9h6"
        className="st8"
      />
      <g id="g1603">
        <path
          id="path1599"
          d="M995 413.8c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
          className="st23"
        />
        <path
          id="path1601"
          d="M995 402.1c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-3.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9L997 401c-.5-.6-1.2-.9-2-.9z"
          className="st1"
        />
      </g>
      <g id="g1603_1_">
        <path
          id="path1599_1_"
          d="M1106.7 413.8c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
          className="st23"
        />
        <path
          id="path1601_1_"
          d="M1106.7 402.1c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-3.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-5.5c-.5-.6-1.2-.9-2-.9z"
          className="st1"
        />
      </g>
      <g id="g1613">
        <path
          id="path1605"
          d="M872.4 408.5h-6c-11 .4-10.3-9-10.3-9s-.1-18.7 0-29.3v-9"
          className="st8"
        />
        <g id="g1611">
          <path
            id="path1607"
            d="M875.3 415.2c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
            className="st23"
          />
          <path
            id="path1609"
            d="M875.3 403.5c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
            className="st1"
          />
        </g>
      </g>
      <g id="g1623">
        <path
          id="path1615"
          d="M757.3 408.5h-6c-11 .4-10.3-9-10.3-9s-.1-18.7 0-29.3v-11"
          className="st8"
        />
        <g id="g1621">
          <path
            id="path1617"
            d="M760.3 415.2c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
            className="st23"
          />
          <path
            id="path1619"
            d="M760.3 403.5c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
            className="st1"
          />
        </g>
      </g>
      <g id="g1623_1_">
        <path
          id="path1615_1_"
          d="M757.3 644.5h-6c-11 .4-10.3-9-10.3-9s-.1-18.7 0-29.3V386.7"
          className="st8"
        />
        <g id="g1621_1_">
          <path
            id="path1617_1_"
            d="M760.3 651.2c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
            className="st23"
          />
          <path
            id="path1619_1_"
            d="M760.3 639.5c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v8.8c0 1.7 1.4 3.3 3.2 3.1.7-.1 1.3-.3 1.7-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
            className="st1"
          />
        </g>
      </g>
      <path
        id="path1627"
        d="M964.2 507.7v-94c.4-11-9-10.3-9-10.3h-11.3"
        className="st8"
      />
      <path
        id="path1629"
        d="M1082.2 507.7v-94c.4-11-9-10.3-9-10.3h-9.3"
        className="st8"
      />
      <circle
        id="circle1631"
        cx={560.4}
        cy={523.4}
        r={9.2}
        className="st25"
      />
      <g id="g1649">
        <path
          id="path1645"
          d="M1186.2 510.9c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
          className="st23"
        />
        <path
          id="path1647"
          d="M1197.9 510.9c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
          className="st1"
        />
      </g>
      <g id="g1649_00000146496113347373318680000017488138838135667107_">
        <path
          id="path1645_00000168800245442042712540000014789816319450812600_"
          d="M957.9 510.9c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
          className="st23"
        />
        <path
          id="path1647_00000001652377289234721080000003508833518123290805_"
          d="M969.6 510.9c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
          className="st1"
        />
      </g>
      <path
        id="path1627_1_"
        d="M964.2 722.8v-94c.4-11-9-10.3-9-10.3h-11.3"
        className="st8"
      />
      <g id="g1649_1_">
        <path
          id="path1645_1_"
          d="M957.9 726c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
          className="st23"
        />
        <path
          id="path1647_1_"
          d="M969.6 726c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
          className="st1"
        />
      </g>
      <path
        id="path1627_2_"
        d="M1084.2 722.8v-94c.4-11-9-10.3-9-10.3h-11.3"
        className="st8"
      />
      <g id="g1649_2_">
        <path
          id="path1645_2_"
          d="M1077.9 726c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
          className="st23"
        />
        <path
          id="path1647_2_"
          d="M1089.6 726c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
          className="st1"
        />
      </g>
      <path
        id="path1627_3_"
        d="M1193.4 722.8v-94c.4-11-9-10.3-9-10.3h-11.3"
        className="st8"
      />
      <g id="g1649_3_">
        <path
          id="path1645_3_"
          d="M1187.1 726c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
          className="st23"
        />
        <path
          id="path1647_3_"
          d="M1198.8 726c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
          className="st1"
        />
      </g>
      <path
        id="line1651"
        d="M1366.9 525.4H851c-3.6 0-6.5-2.9-6.5-6.5V413.7c.4-11-9-10.3-9-10.3h-6.3"
        className="st8"
      />
      <path
        id="line1651_1_"
        d="M1202.4 740H851c-3.6 0-6.5-2.9-6.5-6.5V628.3c.4-11-9-10.3-9-10.3h-6.3"
        className="st8"
      />
      <text
        id="text1653"
        className="st16 st2 st3"
        transform="translate(781.92 506.035)">
        {"FIS04"}
      </text>
      <text
        id="text1653_2_"
        className="st16 st2 st3"
        transform="translate(897.324 506.035)">
        {"FIS03"}
      </text>
      <text
        id="text1653_1_"
        className="st16 st2 st3"
        transform="translate(1015.76 506.035)">
        {"FIS02"}
      </text>
      <text
        id="text1653_3_"
        className="st16 st2 st3"
        transform="translate(1126.339 506.035)">
        {"FIS01"}
      </text>
      <text
        id="text1653_7_"
        className="st16 st2 st3"
        transform="translate(781.92 701.057)">
        {"FIS08"}
      </text>
      <text
        id="text1653_6_"
        className="st16 st2 st3"
        transform="translate(897.324 701.057)">
        {"FIS07"}
      </text>
      <text
        id="text1653_5_"
        className="st16 st2 st3"
        transform="translate(1015.76 701.057)">
        {"FIS06"}
      </text>
      <text
        id="text1653_4_"
        className="st16 st2 st3"
        transform="translate(1126.339 701.057)">
        {"FIS05"}
      </text>
      <g id="g1595_1_">
        <path
          id="path1591_1_"
          d="M1153.1 479.6c12.5-4.9 17.1-3.9 17.1-18v-61.9c0-7-5.4-13-13-13h-29.7c-7 0-13 6-13 13v61.9c0 14.1 4.7 13.1 17.1 18v3.9c0 2.2 2.2 4.3 4.9 4.3h12.3c2.2 0 4.3-2.2 4.3-4.3v-3.9z"
          className="st0"
        />
        <path
          id="rect1593_1_"
          d="M1114.5 402.6h55.7v59.9h-55.7z"
          className="st20"
        />
      </g>
      <path
        id="path1629_1_"
        d="M1192.4 507.7v-94c.4-11-9-10.3-9-10.3h-9.3"
        className="st8"
      />
      <g id="g1583_1_">
        <path
          id="path1579_1_"
          d="M808.9 670.8c12.5-4.9 17.1-3.9 17.1-18v-61.9c0-7-5.4-13-13-13h-29.6c-7.2 0-13.1 5.9-13.1 13.1v61.8c0 14.1 4.7 13.1 17 18l.1.1v3.8c0 2.2 2.2 4.3 4.9 4.3h12.3c2.2 0 4.3-2.2 4.3-4.3v-3.9z"
          className="st0"
        />
        <path
          id="rect1581_1_"
          d="M770.4 593.8h55.5c.1 0 .1 0 .1.1v59.7c0 .1 0 .1-.1.1h-55.5c-.1 0-.1 0-.1-.1l.1-59.8c-.1.1-.1 0 0 0z"
          className="st20"
        />
      </g>
      <g id="g1589_1_">
        <path
          id="path1585_1_"
          d="M923.9 670.8c12.5-4.9 17.1-3.9 17.1-18v-61.9c0-7-5.4-13-13-13h-29.6c-7.2 0-13.1 5.9-13.1 13.1v61.8c0 14.1 4.7 13.1 17 18l.1.1v3.8c0 2.2 2.2 4.3 4.9 4.3h12.3c2.2 0 4.3-2.2 4.3-4.3v-3.9z"
          className="st0"
        />
        <path
          id="rect1587_1_"
          d="M885.4 593.8h55.5c.1 0 .1 0 .1.1v59.7c0 .1 0 .1-.1.1h-55.5c-.1 0-.1 0-.1-.1l.1-59.8c-.1.1-.1 0 0 0z"
          className="st20"
        />
      </g>
      <g id="g1595_3_">
        <path
          id="path1591_3_"
          d="M1042.9 670.8c12.5-4.9 17.1-3.9 17.1-18v-61.9c0-7-5.4-13-13-13h-29.6c-7.2 0-13.1 5.9-13.1 13.1v61.8c0 14.1 4.7 13.1 17 18l.1.1v3.8c0 2.2 2.2 4.3 4.9 4.3h12.3c2.2 0 4.3-2.2 4.3-4.3v-3.9z"
          className="st0"
        />
        <path
          id="rect1593_3_"
          d="M1004.4 593.8h55.5c.1 0 .1 0 .1.1v59.7c0 .1 0 .1-.1.1h-55.5c-.1 0-.1 0-.1-.1l.1-59.8c-.1.1-.1 0 0 0z"
          className="st20"
        />
      </g>
      <g id="g1595_2_">
        <path
          id="path1591_2_"
          d="M1153.1 670.8c12.5-4.9 17.1-3.9 17.1-18v-61.9c0-7-5.4-13-13-13h-29.6c-7.2 0-13.1 5.9-13.1 13.1v61.8c0 14.1 4.7 13.1 17 18l.1.1v3.8c0 2.2 2.2 4.3 4.9 4.3h12.3c2.2 0 4.3-2.2 4.3-4.3v-3.9z"
          className="st0"
        />
        <path
          id="rect1593_2_"
          d="M1114.7 593.8h55.5c.1 0 .1 0 .1.1v59.7c0 .1 0 .1-.1.1h-55.5c-.1 0-.1 0-.1-.1l.1-59.8c-.2.1-.1 0 0 0z"
          className="st20"
        />
      </g>
      <g id="g1673">
        <path
          id="path1659"
          d="M1388.5 515.9h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6z"
          className="st0"
        />
        <g id="g1665">
          <path
            id="path1661"
            d="m1373.3 519.8 7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
            className="st0"
          />
          <path
            id="path1663"
            d="m1388.9 530.4-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
            className="st0"
          />
        </g>
        <path
          id="line1667"
          d="M1381.1 514.9v10"
          className="st26"
        />
        <path
          id="line1669"
          d="M1372.1 506.9h18"
          className="st27"
        />
        <path
          id="line1671"
          d="M1381.1 507.9v8"
          className="st27"
        />
      </g>
      <g id="g1673_1_">
        <path
          id="path1659_1_"
          d="M1488.6 1681.3h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6z"
          className="st0"
        />
        <g id="g1665_1_">
          <path
            id="path1661_1_"
            d="m1473.4 1685.2 7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
            className="st0"
          />
          <path
            id="path1663_1_"
            d="m1489 1695.8-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
            className="st0"
          />
        </g>
        <path
          id="line1667_1_"
          d="M1481.2 1680.3v10"
          className="st26"
        />
        <path
          id="line1669_1_"
          d="M1472.2 1672.3h18"
          className="st27"
        />
        <path
          id="line1671_1_"
          d="M1481.2 1673.3v8"
          className="st27"
        />
      </g>
      <g id="g1681">
        <path
          id="path1677"
          d="M511.3 533.8c0 .9-.7 1.6-1.6 1.6h-6.3c-.9 0-1.6-.7-1.6-1.6 0-.4.2-.8.5-1.1l3.1-3.1c.6-.6 1.5-.6 2.2-.1l3.2 3.2c.3.3.5.7.5 1.1z"
          className="st28"
        />
        <path
          id="path1679"
          d="M502.7 533.8c0-.2.1-.3.2-.4l3.1-3.1c.2-.2.6-.2.9 0l3.1 3.1c.1.1.2.3.2.4 0 .3-.2.6-.6.6h-6.3c-.3 0-.6-.3-.6-.6m-2 0c0 1.4 1.2 2.6 2.6 2.6h6.3c1.4 0 2.6-1.2 2.6-2.6 0-.7-.3-1.3-.8-1.8l-3.1-3.1-.1-.1-.1-.1c-1.1-.9-2.6-.8-3.5.2l-3.1 3.1c-.5.5-.8 1.1-.8 1.8z"
          className="st1"
        />
      </g>
      <g
        id="g1687"
        transform="translate(0 50)">
        <text
          id="text1685"
          className="st16 st2 st3"
          transform="translate(446.654 625.894)">
          {"HIPOCLORITO"}
        </text>
      </g>
      <g
        id="g1699"
        transform="translate(0 50)">
        <g id="g1693">
          <path
            id="path1689"
            d="M509.5 546.2h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
            className="st21"
          />
          <path
            id="path1691"
            d="M499 555.2h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
            className="st22"
          />
        </g>
        <path
          id="rect1695"
          d="M469 566.9h38.8v40H469z"
          className="st29"
        />
        <path
          id="path1697"
          d="M507.8 560.2v45.2c0 .7-.4 1.3-.8 1.3h-37.1c-.5 0-.8-.6-.8-1.3v-45.2"
          className="st21"
        />
      </g>
      <g
        id="g1801_1_"
        transform="translate(-44.189 196.18)">
        <g id="g1767_1_">
          <image
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAB5CAYAAAA00bOLAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABXpJREFUeNrsmm1z2kYURpG0NtiG xG7SNNN0+qX//z+1TZs4bmJsMO8Iupo+m7ksEhCXzhTpnJk7wrLEDOuzdx8tTlqHk7QA/mF9DGES c0yQDKnMcb1PtGTP+VSvU1MJgjVWrKJWpsLPpZK5CrGCUE51pmOmQrBmipWrlr4WOi6rBHMVYmUS quPrwlRb99DBmtmxCpFmviamphItjwVzFWIVEl366vm6Vr3QubauSclgjclYK8lTiDX2NfD1oBrq 3CwWLO5chTDnkujG1xtfP6huJFvHdC9oBqFrTSVT39cn1Z0Rygr2VS6bsdqSqBDrZ9U7X6+RC7kk 12etZG39PmSv3Cyh63hZdMpWxTL4VmL94usnX698dfWGKXI1Tq6VOtOT/Ojod3Mti1O9XlZ1rjPJ FZbEdxLrR527iAI9NCd7he7VNR1rqvxVLJOPkmxuO1e89XCh5e9GS+Erk7faZisCmidYbhrSTIE+ uBE3nsRFYT5krivd0JOpZdsQ0Dy5EpOxusaRq8iPrWXRdq9zrakdvXZm+4Gs1UyCWNkORzb2P9Po 5nhn3krFpilYR7LIky1H0pKb7UUJyyBUSLbXk3SPoUgFh3SyUk/IT/CfgVyAXIBcAMgFyAXIBYBc gFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBcgFyAXADIBcgFgFyAXIBcAMgF yAXIBYBcgFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBcgFyAXADIBcgFgFyA XIBcAMgFyAXIBYBcgFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBccMJyrU0B tJ7jSVpy8Sq6aYVk8BxP0hILi4uWpvLojYBOtZIX1pMtR1yFWHNfU9XcSJbo+qSGA5ccafDr3q3y HY5sCObMzUGsma+Rr6HqyVfXXJvVTC47YZ4zedbRBK2rZGuJVfgxkRfBkZHOB8G+dq64a010Q9/X Z1/Xvtq6fql70poIFoRKTSUmLiQHSLUy47eqaYSI/Sjc+CI/+vJlEncvF928MDff+Xrhq6NrZupg bfOHqINYmaoYizMd3R7ByvLpwsSHvGaChUkzU8cqxPrD15/ypC9vFjbYu2jAgpkPvm59net3U53r STZ34nLZjuU0YS5MtSVaVtKlbfZYmGUi1Kwq4J64XEt5MFTHKsT6XZ48mM5VGuht5hrKyNCxBr5u aiJXYp6UM02gK322IgK81OtLSRZ/VjtOY43VowY45I+5ecquQwaL5So61SfVnc7Fk2qjc4U3mZs/ wFID2NcSGQY8OzCX/J+xXaunyfO9rze+XuvnrplMienuUy0PIZcWA/yXyR9b4faEs1bLdOowoQaa TGFCjeXNxud1JW8U3sTa+miWCxvoTznUx3J95+utBm5q5FiZnBnnjltljw96fV8zucryZRwDpooH edU+V5lga9PJxro2M1sRp/60GB5KwrJ4rZn4pAFcmLB+qc8fOnkh1kdljt8k2J3uH5lZXAe5rGC5 2eey41OaL92OVpibZWAeParXZRsi5K6Bae9WrBDYewr4C11XZI33vn6VYB8lXBDTfqvRqplg8ZZL Za50B6y14VjH3fkg2EwTaBGJFQLsSyPXo5bA96oPEmsYLad13UhttQ7cMHbf8GZ1/conj2ZjCK9z LXFf9DAT5BoovN+qg91HYuU1eUI8xIuduGO/4QkOUhKFUbuHNdLT4JXJXCN1r36U0eq2t/WvcQzB xr+NWMGCXPcK/ZnpaGPVpLX9pS3UMD8dO+THXwfZfa746x7EQq6Dx6Tsy+xkxxMTYiHXN49L2RPy uuIIyHWUMUKoA/hbgAEAGrEmYbv27m4AAAAASUVORK5CYII="
            id="image1757_1_"
            width={158}
            height={160}
            style={{
              overflow: "visible",
              opacity: 0.3,
              enableBackground: "new"
            }}
            transform="translate(1649.547 175.888) scale(.9663)"
          />
          <g id="g1765_1_">
            <g id="g1763_1_">
              <g id="g1761_1_">
                <path
                  id="path1759_1_"
                  d="M1708.6 185.2h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V191.5c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
                  className="st1"
                />
              </g>
            </g>
          </g>
        </g>

        {/* Caudal de Alimentación */}
        {/* Tarjeta */}
        <g
          className="cursorPointer"
          onClick={() => loadGrafico(7, "Caudal de Alimentación", false)}>
          <path
            id="rect1769_1_"
            d="M1659.3 192.6h138.1v99.8h-138.1z"
            className={getTarjetaClass(7, selected)}
          />
          <text
            className="st20 st2 st15"
            transform="translate(1701.042 233.97)">
            {"Caudal de"}
          </text>
          <text
            className="st20 st2 st15"
            transform="translate(1689.296 250.47)">
            {"Alimentaci\xF3n"}
          </text>

          <g id="g1793_1_">
            <text
              id="text1791_1_"
              className="st16 st2 st17"
              transform="translate(1710.784 277.49)">
              {getScaledValue(datosScada.d7, 1)}
            </text>
          </g>
          <text
            id="text1795_1_"
            className="st16 st2"
            style={{
              fontSize: 13
            }}
            transform="translate(1756.013 277.094)">
            {"m3/h"}
          </text>
          <g id="g1799_1_">
            <text
              id="text1797_1_"
              className="st16 st2 st3"
              transform="translate(1689.53 215.216)">
              {"FIT212 + FIT 219"}
            </text>
          </g>
        </g>

        {/* Campana */}
        <g
          className={`${getTemaAlarma(7, loading, datosAlarmas)} cursorPointer`}
          onClick={() => {
            onClickAlarma(7, "Caudal de Alimentación");
          }}>
          <path
            id="path1773_1_"
            d="M1672.4 266.4c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z"
          />
          <path
            id="path1775_1_"
            d="M1670.7 265.4c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1z"
          />
          <path
            id="path1777_1_"
            d="M1682 264.1c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z"
          />
          <path
            id="path1779_1_"
            d="M1682.6 262.3c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1z"
          />
          <path
            id="path1781_1_"
            d="M1683.5 271.4v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1z"
          />
          <path
            id="path1783_1_"
            d="M1678.5 278.9c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z"
          />
        </g>

        {/* Fin Caudal de Alimentación */}
      </g>
      <path
        id="path1803_2_"
        d="M1346.4 969.5H1008c-5.5 0-10 4.5-10 10v258.7c0 2.7 2.2 5 5 5H1152.7"
        className="st4"
      />
      <path
        id="path1803_1_"
        d="M1833.3 524.1h45.7c5.9-.1 9.7 4.7 9.8 10.6l.4 422.3c0 5.7-4.6 10.3-10.3 10.3h-476.1"
        className="st4"
      />
      <path
        id="line1805"
        d="M1402 524.4h477"
        className="st4"
      />
      <g
        id="g1801-8"
        transform="translate(-198.054 196.072)">
        <g id="g1767-2">
          <image
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAB5CAYAAAA00bOLAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABXpJREFUeNrsmm1z2kYURpG0NtiG xG7SNNN0+qX//z+1TZs4bmJsMO8Iupo+m7ksEhCXzhTpnJk7wrLEDOuzdx8tTlqHk7QA/mF9DGES c0yQDKnMcb1PtGTP+VSvU1MJgjVWrKJWpsLPpZK5CrGCUE51pmOmQrBmipWrlr4WOi6rBHMVYmUS quPrwlRb99DBmtmxCpFmviamphItjwVzFWIVEl366vm6Vr3QubauSclgjclYK8lTiDX2NfD1oBrq 3CwWLO5chTDnkujG1xtfP6huJFvHdC9oBqFrTSVT39cn1Z0Rygr2VS6bsdqSqBDrZ9U7X6+RC7kk 12etZG39PmSv3Cyh63hZdMpWxTL4VmL94usnX698dfWGKXI1Tq6VOtOT/Ojod3Mti1O9XlZ1rjPJ FZbEdxLrR527iAI9NCd7he7VNR1rqvxVLJOPkmxuO1e89XCh5e9GS+Erk7faZisCmidYbhrSTIE+ uBE3nsRFYT5krivd0JOpZdsQ0Dy5EpOxusaRq8iPrWXRdq9zrakdvXZm+4Gs1UyCWNkORzb2P9Po 5nhn3krFpilYR7LIky1H0pKb7UUJyyBUSLbXk3SPoUgFh3SyUk/IT/CfgVyAXIBcAMgFyAXIBYBc gFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBcgFyAXADIBcgFgFyAXIBcAMgF yAXIBYBcgFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBcgFyAXADIBcgFgFyA XIBcAMgFyAXIBYBcgFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBccMJyrU0B tJ7jSVpy8Sq6aYVk8BxP0hILi4uWpvLojYBOtZIX1pMtR1yFWHNfU9XcSJbo+qSGA5ccafDr3q3y HY5sCObMzUGsma+Rr6HqyVfXXJvVTC47YZ4zedbRBK2rZGuJVfgxkRfBkZHOB8G+dq64a010Q9/X Z1/Xvtq6fql70poIFoRKTSUmLiQHSLUy47eqaYSI/Sjc+CI/+vJlEncvF928MDff+Xrhq6NrZupg bfOHqINYmaoYizMd3R7ByvLpwsSHvGaChUkzU8cqxPrD15/ypC9vFjbYu2jAgpkPvm59net3U53r STZ34nLZjuU0YS5MtSVaVtKlbfZYmGUi1Kwq4J64XEt5MFTHKsT6XZ48mM5VGuht5hrKyNCxBr5u aiJXYp6UM02gK322IgK81OtLSRZ/VjtOY43VowY45I+5ecquQwaL5So61SfVnc7Fk2qjc4U3mZs/ wFID2NcSGQY8OzCX/J+xXaunyfO9rze+XuvnrplMienuUy0PIZcWA/yXyR9b4faEs1bLdOowoQaa TGFCjeXNxud1JW8U3sTa+miWCxvoTznUx3J95+utBm5q5FiZnBnnjltljw96fV8zucryZRwDpooH edU+V5lga9PJxro2M1sRp/60GB5KwrJ4rZn4pAFcmLB+qc8fOnkh1kdljt8k2J3uH5lZXAe5rGC5 2eey41OaL92OVpibZWAeParXZRsi5K6Bae9WrBDYewr4C11XZI33vn6VYB8lXBDTfqvRqplg8ZZL Za50B6y14VjH3fkg2EwTaBGJFQLsSyPXo5bA96oPEmsYLad13UhttQ7cMHbf8GZ1/conj2ZjCK9z LXFf9DAT5BoovN+qg91HYuU1eUI8xIuduGO/4QkOUhKFUbuHNdLT4JXJXCN1r36U0eq2t/WvcQzB xr+NWMGCXPcK/ZnpaGPVpLX9pS3UMD8dO+THXwfZfa746x7EQq6Dx6Tsy+xkxxMTYiHXN49L2RPy uuIIyHWUMUKoA/hbgAEAGrEmYbv27m4AAAAASUVORK5CYII="
            id="image1757-0"
            width={158}
            height={160}
            style={{
              overflow: "visible",
              opacity: 0.3,
              enableBackground: "new"
            }}
            transform="translate(1666.928 620.632) scale(.9696)"
          />
          <g id="g1765-7">
            <g id="g1763-4">
              <g id="g1761-8">
                <path
                  id="path1759-5"
                  d="M1725.8 630.2h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V636.5c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
                  className="st1"
                />
              </g>
            </g>
          </g>
        </g>

        {/* Temperatura */}
        {/* Tarjeta */}
        <g
          className="cursorPointer"
          onClick={() => loadGrafico(13, "Temperatura", false)}>
          <path
            id="rect1769-8"
            d="M1676.5 637.6h138.1v99.8h-138.1z"
            className={getTarjetaClass(13, selected)}
          />
          <text
            id="text1771-3"
            className="st20 st2 st15"
            transform="translate(1706.935 679.722)">
            {"Temperatura"}
          </text>

          <g
            id="g1793-5"
            transform="translate(6)">
            <text
              id="text1791-2"
              className="st16 st2 st17"
              transform="translate(1723.454 722.473)">
              {getScaledValue(datosScada.d13, 1)}
            </text>
          </g>
          <text
            id="text1795-1"
            className="st16 st2 st15"
            transform="translate(1790.298 721.133)">
            {"\xB0C"}
          </text>
        </g>

        {/* Campana */}
        <g
          className={`${getTemaAlarma(13, loading, datosAlarmas)} cursorPointer`}
          onClick={() => {
            onClickAlarma(13, "Temperatura");
          }}>
          <path
            id="path1773-2"
            d="M1690.6 711.4c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z"
          />
          <path
            id="path1775-5"
            d="M1688.9 710.4c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1z"
          />
          <path
            id="path1777-2"
            d="M1700.2 709.1c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z"
          />
          <path
            id="path1779-2"
            d="M1700.8 707.3c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1z"
          />
          <path
            id="path1781-7"
            d="M1701.7 716.4v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1z"
          />
          <path
            id="path1783-1"
            d="M1696.7 723.9c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z"
          />
        </g>

        {/* Fin Temperatura */}
      </g>
      <circle
        id="circle1807-1"
        cx={1545.2}
        cy={968}
        r={9.2}
        className="st25"
      />
      <path
        id="path1809_1_"
        d="M778.3 1149.8s0-.1-1-.1v98.6c0 2.7 2.2 5 5 5h18.3"
        className="st8"
      />
      <g id="g1827_1_">
        <g id="g1813_1_">
          <path
            id="path1811_1_"
            d="M1354.2 965v4.6c0 1.5 1.2 2.7 2.6 2.7h6.8c-.4 1.3-.6 2.7-.6 4.2 0 4 1.6 7.7 4.2 10.3l-4.1 9.1c-.3.7 0 1.6.6 1.6h27.7c.6 0 1-.9.7-1.6l-4.1-9c2.6-2.6 4.3-6.3 4.3-10.4 0-8.1-6.5-14.6-14.6-14.6-1.2 0-2.3.1-3.4.4h-17.4c-1.5 0-2.7 1.2-2.7 2.7z"
            className="st22"
          />
        </g>
        <g id="g1825_1_">
          <g id="g1821_1_">
            <image
              xlinkHref="8AD863D0.png"
              id="image1815_1_"
              width={42}
              height={42}
              style={{
                overflow: "visible",
                opacity: 0.15,
                enableBackground: "new"
              }}
              transform="matrix(-.8334 0 0 .8334 1395.644 959.003)"
            />
            <g id="g1819_1_">
              <circle
                id="circle1817_1_"
                cx={1377.7}
                cy={976.8}
                r={10.9}
                className="st1"
              />
            </g>
          </g>
          <circle
            id="circle1823_1_"
            cx={1377.7}
            cy={976.6}
            r={8}
            className="st24"
          />
        </g>
      </g>
      <g id="g1831_1_">
        <text
          id="text1829_1_"
          className="st16 st2 st3"
          transform="translate(1363.457 1016.492)">
          {"P-005"}
        </text>
      </g>
      <g id="g1827_2_">
        <g id="g1813_2_">
          <path
            id="path1811_2_"
            d="M1157.7 1240.3v4.6c0 1.5 1.2 2.7 2.6 2.7h6.8c-.4 1.3-.6 2.7-.6 4.2 0 4 1.6 7.7 4.2 10.3l-4.1 9.1c-.3.7 0 1.6.6 1.6h27.7c.6 0 1-.9.7-1.6l-4.1-9c2.6-2.6 4.3-6.3 4.3-10.4 0-8.1-6.5-14.6-14.6-14.6-1.2 0-2.3.1-3.4.4h-17.4c-1.5 0-2.7 1.2-2.7 2.7z"
            className="st22"
          />
        </g>
        <g id="g1825_2_">
          <g id="g1821_2_">
            <image
              xlinkHref="8AD863CE.png"
              id="image1815_2_"
              width={42}
              height={42}
              style={{
                overflow: "visible",
                opacity: 0.15,
                enableBackground: "new"
              }}
              transform="matrix(-.8334 0 0 .8334 1199.053 1234.362)"
            />
            <g id="g1819_2_">
              <circle
                id="circle1817_2_"
                cx={1181.2}
                cy={1252.1}
                r={10.9}
                className="st1"
              />
            </g>
          </g>
          <circle
            id="circle1823_2_"
            cx={1181.2}
            cy={1251.9}
            r={8}
            className="st24"
          />
        </g>
      </g>
      <g id="g1831_2_">
        <text
          id="text1829_2_"
          className="st16 st2 st3"
          transform="translate(1166.867 1291.852)">
          {"P-006"}
        </text>
      </g>
      <g id="g1869">
        <g id="g1843">
          <path
            id="path1839"
            d="M943.4 1161.6h-132c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.8 3.8-6 3.8z"
            className="st22"
          />
          <path
            id="path1841"
            d="M944.7 1161.6h-133c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.9-.2.9z"
            className="st20"
          />
        </g>
        <g id="g1849">
          <path
            id="path1845"
            d="M943.4 1186.7h-132c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.8 3.8-6 3.8z"
            className="st22"
          />
          <path
            id="path1847"
            d="M944.7 1186.7h-133c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.9-.2.9z"
            className="st20"
          />
        </g>
        <g id="g1855">
          <path
            id="path1851"
            d="M943.4 1211.8h-132c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.2-2.8 3.8-6 3.8z"
            className="st22"
          />
          <path
            id="path1853"
            d="M944.7 1211.8h-133c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.9-.2.9z"
            className="st20"
          />
        </g>
        <g id="g1861">
          <path
            id="path1857"
            d="M943.4 1236.9h-132c-3.3 0-6-1.7-6-3.8V1220c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.2c0 2.1-2.8 3.7-6 3.7z"
            className="st22"
          />
          <path
            id="path1859"
            d="M944.7 1236.9h-133c-3.4 0-6.3-1.7-6.3-3.8V1220c0-2 2.8-3.8 6.3-3.8l133.1 20c.7.1.6.7-.1.7z"
            className="st20"
          />
        </g>
        <g id="g1867">
          <path
            id="path1863"
            d="M943.4 1262h-132c-3.3 0-6-1.7-6-3.8v-13c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.8 3.7-6 3.7z"
            className="st22"
          />
          <path
            id="path1865"
            d="M944.7 1262h-133c-3.4 0-6.3-1.7-6.3-3.8v-13c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.8-.2.8z"
            className="st20"
          />
        </g>
      </g>
      <path
        id="line1871"
        d="M777.7 1176.2h22.9"
        className="st8"
      />
      <path
        id="line1873"
        d="M777.3 1228.2h23.3"
        className="st8"
      />
      <path
        id="line1877"
        d="M973.3 1176.2h-20.4"
        className="st8"
      />
      <path
        id="line1881"
        d="M777.3 1201.2h23.3"
        className="st8"
      />
      <path
        id="line1883"
        d="M973.6 1201.2h-20.4"
        className="st8"
      />
      <g
        id="g2051"
        transform="translate(6)">
        <g id="g2043">
          <path
            id="path2039"
            d="m1010 1348.2 7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
            className="st0"
          />
          <path
            id="path2041"
            d="m1025.6 1358.8-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
            className="st0"
          />
        </g>
      </g>
      <g
        id="g2051_1_"
        transform="translate(6)">
        <g id="g2043_1_">
          <path
            id="path2039_1_"
            d="m1748.1 1503.7 7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
            className="st0"
          />
          <path
            id="path2041_1_"
            d="m1763.7 1514.3-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
            className="st0"
          />
        </g>
      </g>
      <path
        id="path2053"
        d="M1827.8 493.3c0-6.7-7.8-12.1-17.5-12.1s-17.5 5.5-17.5 12.1h.1c-.1.3-.1.7-.1 1.1V532c0 3.5 3.4 6.4 7.6 6.8v6.2h5.2v-6.1h9v6.1h5.2v-6.2c4.5-.2 8-3.2 8-6.8v-37.6c0-.3-.1-.7-.1-1.1h.1z"
        className="st0"
      />
      <g
        id="g1933-7_1_"
        transform="translate(-185.765 -155.23)">
        <g id="g1895-9_1_">
          <image
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAB5CAYAAAA00bOLAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABXpJREFUeNrsmm1z2kYURpG0NtiG xG7SNNN0+qX//z+1TZs4bmJsMO8Iupo+m7ksEhCXzhTpnJk7wrLEDOuzdx8tTlqHk7QA/mF9DGES c0yQDKnMcb1PtGTP+VSvU1MJgjVWrKJWpsLPpZK5CrGCUE51pmOmQrBmipWrlr4WOi6rBHMVYmUS quPrwlRb99DBmtmxCpFmviamphItjwVzFWIVEl366vm6Vr3QubauSclgjclYK8lTiDX2NfD1oBrq 3CwWLO5chTDnkujG1xtfP6huJFvHdC9oBqFrTSVT39cn1Z0Rygr2VS6bsdqSqBDrZ9U7X6+RC7kk 12etZG39PmSv3Cyh63hZdMpWxTL4VmL94usnX698dfWGKXI1Tq6VOtOT/Ojod3Mti1O9XlZ1rjPJ FZbEdxLrR527iAI9NCd7he7VNR1rqvxVLJOPkmxuO1e89XCh5e9GS+Erk7faZisCmidYbhrSTIE+ uBE3nsRFYT5krivd0JOpZdsQ0Dy5EpOxusaRq8iPrWXRdq9zrakdvXZm+4Gs1UyCWNkORzb2P9Po 5nhn3krFpilYR7LIky1H0pKb7UUJyyBUSLbXk3SPoUgFh3SyUk/IT/CfgVyAXIBcAMgFyAXIBYBc gFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBcgFyAXADIBcgFgFyAXIBcAMgF yAXIBYBcgFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBcgFyAXADIBcgFgFyA XIBcAMgFyAXIBYBcgFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBccMJyrU0B tJ7jSVpy8Sq6aYVk8BxP0hILi4uWpvLojYBOtZIX1pMtR1yFWHNfU9XcSJbo+qSGA5ccafDr3q3y HY5sCObMzUGsma+Rr6HqyVfXXJvVTC47YZ4zedbRBK2rZGuJVfgxkRfBkZHOB8G+dq64a010Q9/X Z1/Xvtq6fql70poIFoRKTSUmLiQHSLUy47eqaYSI/Sjc+CI/+vJlEncvF928MDff+Xrhq6NrZupg bfOHqINYmaoYizMd3R7ByvLpwsSHvGaChUkzU8cqxPrD15/ypC9vFjbYu2jAgpkPvm59net3U53r STZ34nLZjuU0YS5MtSVaVtKlbfZYmGUi1Kwq4J64XEt5MFTHKsT6XZ48mM5VGuht5hrKyNCxBr5u aiJXYp6UM02gK322IgK81OtLSRZ/VjtOY43VowY45I+5ecquQwaL5So61SfVnc7Fk2qjc4U3mZs/ wFID2NcSGQY8OzCX/J+xXaunyfO9rze+XuvnrplMienuUy0PIZcWA/yXyR9b4faEs1bLdOowoQaa TGFCjeXNxud1JW8U3sTa+miWCxvoTznUx3J95+utBm5q5FiZnBnnjltljw96fV8zucryZRwDpooH edU+V5lga9PJxro2M1sRp/60GB5KwrJ4rZn4pAFcmLB+qc8fOnkh1kdljt8k2J3uH5lZXAe5rGC5 2eey41OaL92OVpibZWAeParXZRsi5K6Bae9WrBDYewr4C11XZI33vn6VYB8lXBDTfqvRqplg8ZZL Za50B6y14VjH3fkg2EwTaBGJFQLsSyPXo5bA96oPEmsYLad13UhttQ7cMHbf8GZ1/conj2ZjCK9z LXFf9DAT5BoovN+qg91HYuU1eUI8xIuduGO/4QkOUhKFUbuHNdLT4JXJXCN1r36U0eq2t/WvcQzB xr+NWMGCXPcK/ZnpaGPVpLX9pS3UMD8dO+THXwfZfa746x7EQq6Dx6Tsy+xkxxMTYiHXN49L2RPy uuIIyHWUMUKoA/hbgAEAGrEmYbv27m4AAAAASUVORK5CYII="
            id="image1885-3_1_"
            width={158}
            height={160}
            style={{
              overflow: "visible",
              opacity: 0.3,
              enableBackground: "new"
            }}
            transform="translate(1264.943 973.62) scale(.9677)"
          />
          <g id="g1893-8_1_">
            <g id="g1891-0_1_">
              <g id="g1889-2_1_">
                <path
                  id="path1887-4_1_"
                  d="M1323.6 983.2h-43c-3.5 0-6.3 2.8-6.3 6.3v102.1c0 3.5 2.8 6.3 6.3 6.3h51.6c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.6c3.5 0 6.3-2.8 6.3-6.3V989.5c0-3.5-2.8-6.3-6.3-6.3h-82.4z"
                  className="st1"
                />
              </g>
            </g>
          </g>
        </g>

        {/* Presión Ósmosis */}
        {/* Tarjeta */}
        <g
          className="cursorPointer"
          onClick={() => loadGrafico(5, "Presión Ósmosis", false)}>
          <path
            id="rect1897-8_1_"
            d="M1274.4 990.6h137.8v99.6h-137.8z"
            className={getTarjetaClass(5, selected)}
          />
          <g
            id="g1903-3_1_"
            transform="translate(1.905)">
            <g id="g1901-9_1_">
              <text
                className="st20 st2 st31"
                transform="translate(1320.3 1031.023)">
                {"Presi\xF3n"}
              </text>
              <text
                className="st20 st2 st31"
                transform="translate(1316.467 1047.488)">
                {"Osmosis"}
              </text>
            </g>
          </g>

          <g id="g1925-9_1_">
            <text
              id="text1923-7_1_"
              className="st16 st2"
              style={{
                fontSize: "16.9646px"
              }}
              transform="translate(1325.257 1075.249)">
              {getScaledValue(datosScada.d5, 1)}
            </text>
          </g>
          <text
            id="text1927-0_1_"
            className="st16 st2 st31"
            transform="translate(1383.193 1074.854)">
            {"bar"}
          </text>
          <g id="g1931-3_1_">
            <text
              id="text1929-9_1_"
              className="st16 st2"
              style={{
                fontSize: "10.9771px"
              }}
              transform="translate(1327.314 1011.218)">
              {"PT217"}
            </text>
          </g>
        </g>

        {/* Campana */}
        <g
          className={`${getTemaAlarma(5, loading, datosAlarmas)} cursorPointer`}
          onClick={() => {
            onClickAlarma(5, "Presión Ósmosis");
          }}>
          <path
            id="path1905-7_1_"
            d="M1289.5 1064.3c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z"
          />
          <path
            id="path1907-9_1_"
            d="M1287.8 1063.3c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1z"
          />
          <path
            id="path1909-0_1_"
            d="M1299.1 1062c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z"
          />
          <path
            id="path1911-2_1_"
            d="M1299.7 1060.2c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1z"
          />
          <path
            id="path1913-3_1_"
            d="M1300.6 1069.3v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1z"
          />
          <path
            id="path1915-9_1_"
            d="M1295.6 1076.8c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z"
          />
        </g>

        {/* Fin Presión Ósmosis */}
      </g>
      <circle
        id="circle2205-8_1_"
        cx={1157.5}
        cy={968.2}
        r={9.2}
        className="st25"
      />
      <g
        id="g1933-7_2_"
        transform="translate(-185.765 -155.23)">
        <g id="g1895-9_2_">
          <image
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAB5CAYAAAA00bOLAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABXpJREFUeNrsmm1z2kYURpG0NtiG xG7SNNN0+qX//z+1TZs4bmJsMO8Iupo+m7ksEhCXzhTpnJk7wrLEDOuzdx8tTlqHk7QA/mF9DGES c0yQDKnMcb1PtGTP+VSvU1MJgjVWrKJWpsLPpZK5CrGCUE51pmOmQrBmipWrlr4WOi6rBHMVYmUS quPrwlRb99DBmtmxCpFmviamphItjwVzFWIVEl366vm6Vr3QubauSclgjclYK8lTiDX2NfD1oBrq 3CwWLO5chTDnkujG1xtfP6huJFvHdC9oBqFrTSVT39cn1Z0Rygr2VS6bsdqSqBDrZ9U7X6+RC7kk 12etZG39PmSv3Cyh63hZdMpWxTL4VmL94usnX698dfWGKXI1Tq6VOtOT/Ojod3Mti1O9XlZ1rjPJ FZbEdxLrR527iAI9NCd7he7VNR1rqvxVLJOPkmxuO1e89XCh5e9GS+Erk7faZisCmidYbhrSTIE+ uBE3nsRFYT5krivd0JOpZdsQ0Dy5EpOxusaRq8iPrWXRdq9zrakdvXZm+4Gs1UyCWNkORzb2P9Po 5nhn3krFpilYR7LIky1H0pKb7UUJyyBUSLbXk3SPoUgFh3SyUk/IT/CfgVyAXIBcAMgFyAXIBYBc gFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBcgFyAXADIBcgFgFyAXIBcAMgF yAXIBYBcgFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBcgFyAXADIBcgFgFyA XIBcAMgFyAXIBYBcgFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBccMJyrU0B tJ7jSVpy8Sq6aYVk8BxP0hILi4uWpvLojYBOtZIX1pMtR1yFWHNfU9XcSJbo+qSGA5ccafDr3q3y HY5sCObMzUGsma+Rr6HqyVfXXJvVTC47YZ4zedbRBK2rZGuJVfgxkRfBkZHOB8G+dq64a010Q9/X Z1/Xvtq6fql70poIFoRKTSUmLiQHSLUy47eqaYSI/Sjc+CI/+vJlEncvF928MDff+Xrhq6NrZupg bfOHqINYmaoYizMd3R7ByvLpwsSHvGaChUkzU8cqxPrD15/ypC9vFjbYu2jAgpkPvm59net3U53r STZ34nLZjuU0YS5MtSVaVtKlbfZYmGUi1Kwq4J64XEt5MFTHKsT6XZ48mM5VGuht5hrKyNCxBr5u aiJXYp6UM02gK322IgK81OtLSRZ/VjtOY43VowY45I+5ecquQwaL5So61SfVnc7Fk2qjc4U3mZs/ wFID2NcSGQY8OzCX/J+xXaunyfO9rze+XuvnrplMienuUy0PIZcWA/yXyR9b4faEs1bLdOowoQaa TGFCjeXNxud1JW8U3sTa+miWCxvoTznUx3J95+utBm5q5FiZnBnnjltljw96fV8zucryZRwDpooH edU+V5lga9PJxro2M1sRp/60GB5KwrJ4rZn4pAFcmLB+qc8fOnkh1kdljt8k2J3uH5lZXAe5rGC5 2eey41OaL92OVpibZWAeParXZRsi5K6Bae9WrBDYewr4C11XZI33vn6VYB8lXBDTfqvRqplg8ZZL Za50B6y14VjH3fkg2EwTaBGJFQLsSyPXo5bA96oPEmsYLad13UhttQ7cMHbf8GZ1/conj2ZjCK9z LXFf9DAT5BoovN+qg91HYuU1eUI8xIuduGO/4QkOUhKFUbuHNdLT4JXJXCN1r36U0eq2t/WvcQzB xr+NWMGCXPcK/ZnpaGPVpLX9pS3UMD8dO+THXwfZfa746x7EQq6Dx6Tsy+xkxxMTYiHXN49L2RPy uuIIyHWUMUKoA/hbgAEAGrEmYbv27m4AAAAASUVORK5CYII="
            id="image1885-3_2_"
            width={158}
            height={160}
            style={{
              overflow: "visible",
              opacity: 0.3,
              enableBackground: "new"
            }}
            transform="translate(1195.064 1231.006) scale(.9663)"
          />
          <g id="g1893-8_2_">
            <g id="g1891-0_2_">
              <g id="g1889-2_2_">
                <path
                  id="path1887-4_2_"
                  d="M1254.1 1240.4H1211c-3.5 0-6.3 2.8-6.3 6.3V1349c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
                  className="st1"
                />
              </g>
            </g>
          </g>
        </g>

        {/* Presión después P006 */}
        {/* Tarjeta */}
        <g
          className="cursorPointer"
          onClick={() => loadGrafico(15, "Presión después P006", false)}>
          <path
            id="rect1897-8_2_"
            d="M1204.8 1247.8h138.1v99.8h-138.1z"
            className={getTarjetaClass(15, selected)}
          />
          <g
            id="g1903-3_2_"
            transform="translate(1.905)">
            <g id="g1901-9_2_">
              <text
                className="st20 st2 st15"
                transform="translate(1250.754 1288.288)">
                {"Presi\xF3n"}
              </text>
              <text
                className="st20 st2 st15"
                transform="translate(1230.225 1304.788)">
                {"Despu\xE9s P006"}
              </text>
            </g>
          </g>

          <g id="g1925-9_2_">
            <text
              id="text1923-7_2_"
              className="st16 st2 st17"
              transform="translate(1255.718 1332.607)">
              {getScaledValue(datosScada.d15, 1)}
            </text>
          </g>
          <text
            id="text1927-0_2_"
            className="st16 st2 st15"
            transform="translate(1311.606 1332.212)">
            {"bar"}
          </text>
          <g id="g1931-3_2_">
            <text
              id="text1929-9_2_"
              className="st16 st2 st3"
              transform="translate(1257.778 1268.442)">
              {"PT226"}
            </text>
          </g>
        </g>

        {/* Campana */}
        <g
          className={`${getTemaAlarma(15, loading, datosAlarmas)} cursorPointer`}
          onClick={() => {
            onClickAlarma(15, "Presión después P006");
          }}>
          <path
            id="path1905-7_2_"
            d="M1219.9 1321.6c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z"
          />
          <path
            id="path1907-9_2_"
            d="M1218.2 1320.6c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1z"
          />
          <path
            id="path1909-0_2_"
            d="M1229.5 1319.3c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z"
          />
          <path
            id="path1911-2_2_"
            d="M1230.1 1317.5c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1z"
          />
          <path
            id="path1913-3_2_"
            d="M1231 1326.6v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1z"
          />
          <path
            id="path1915-9_2_"
            d="M1226 1334.1c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z"
          />
        </g>

        {/* Fin Presión después P006 */}
      </g>
      <circle
        id="circle2205-8_2_"
        cx={1088}
        cy={1243}
        r={9.2}
        className="st25"
      />
      <g id="g2275_1_">
        <g id="g2241_1_">
          <image
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAB5CAYAAAA00bOLAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABXpJREFUeNrsmm1z2kYURpG0NtiG xG7SNNN0+qX//z+1TZs4bmJsMO8Iupo+m7ksEhCXzhTpnJk7wrLEDOuzdx8tTlqHk7QA/mF9DGES c0yQDKnMcb1PtGTP+VSvU1MJgjVWrKJWpsLPpZK5CrGCUE51pmOmQrBmipWrlr4WOi6rBHMVYmUS quPrwlRb99DBmtmxCpFmviamphItjwVzFWIVEl366vm6Vr3QubauSclgjclYK8lTiDX2NfD1oBrq 3CwWLO5chTDnkujG1xtfP6huJFvHdC9oBqFrTSVT39cn1Z0Rygr2VS6bsdqSqBDrZ9U7X6+RC7kk 12etZG39PmSv3Cyh63hZdMpWxTL4VmL94usnX698dfWGKXI1Tq6VOtOT/Ojod3Mti1O9XlZ1rjPJ FZbEdxLrR527iAI9NCd7he7VNR1rqvxVLJOPkmxuO1e89XCh5e9GS+Erk7faZisCmidYbhrSTIE+ uBE3nsRFYT5krivd0JOpZdsQ0Dy5EpOxusaRq8iPrWXRdq9zrakdvXZm+4Gs1UyCWNkORzb2P9Po 5nhn3krFpilYR7LIky1H0pKb7UUJyyBUSLbXk3SPoUgFh3SyUk/IT/CfgVyAXIBcAMgFyAXIBYBc gFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBcgFyAXADIBcgFgFyAXIBcAMgF yAXIBYBcgFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBcgFyAXADIBcgFgFyA XIBcAMgFyAXIBYBcgFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBccMJyrU0B tJ7jSVpy8Sq6aYVk8BxP0hILi4uWpvLojYBOtZIX1pMtR1yFWHNfU9XcSJbo+qSGA5ccafDr3q3y HY5sCObMzUGsma+Rr6HqyVfXXJvVTC47YZ4zedbRBK2rZGuJVfgxkRfBkZHOB8G+dq64a010Q9/X Z1/Xvtq6fql70poIFoRKTSUmLiQHSLUy47eqaYSI/Sjc+CI/+vJlEncvF928MDff+Xrhq6NrZupg bfOHqINYmaoYizMd3R7ByvLpwsSHvGaChUkzU8cqxPrD15/ypC9vFjbYu2jAgpkPvm59net3U53r STZ34nLZjuU0YS5MtSVaVtKlbfZYmGUi1Kwq4J64XEt5MFTHKsT6XZ48mM5VGuht5hrKyNCxBr5u aiJXYp6UM02gK322IgK81OtLSRZ/VjtOY43VowY45I+5ecquQwaL5So61SfVnc7Fk2qjc4U3mZs/ wFID2NcSGQY8OzCX/J+xXaunyfO9rze+XuvnrplMienuUy0PIZcWA/yXyR9b4faEs1bLdOowoQaa TGFCjeXNxud1JW8U3sTa+miWCxvoTznUx3J95+utBm5q5FiZnBnnjltljw96fV8zucryZRwDpooH edU+V5lga9PJxro2M1sRp/60GB5KwrJ4rZn4pAFcmLB+qc8fOnkh1kdljt8k2J3uH5lZXAe5rGC5 2eey41OaL92OVpibZWAeParXZRsi5K6Bae9WrBDYewr4C11XZI33vn6VYB8lXBDTfqvRqplg8ZZL Za50B6y14VjH3fkg2EwTaBGJFQLsSyPXo5bA96oPEmsYLad13UhttQ7cMHbf8GZ1/conj2ZjCK9z LXFf9DAT5BoovN+qg91HYuU1eUI8xIuduGO/4QkOUhKFUbuHNdLT4JXJXCN1r36U0eq2t/WvcQzB xr+NWMGCXPcK/ZnpaGPVpLX9pS3UMD8dO+THXwfZfa746x7EQq6Dx6Tsy+xkxxMTYiHXN49L2RPy uuIIyHWUMUKoA/hbgAEAGrEmYbv27m4AAAAASUVORK5CYII="
            id="image2231_1_"
            width={158}
            height={160}
            style={{
              overflow: "visible",
              opacity: 0.3,
              enableBackground: "new"
            }}
            transform="matrix(.9663 0 0 -.9663 1539.133 1421.582)"
          />
          <g id="g2239_1_">
            <g id="g2237_1_">
              <g id="g2235_1_">
                <path
                  id="path2233_1_"
                  d="M1635.1 1412.2h45.1c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-53.7c-1.3 0-2.5-.4-3.5-1.3-6.4-6.7-6.4-6.7-12.9-.2l-.4.3c-1 .8-2.2 1.2-3.4 1.2h-51.7c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h80.5z"
                  className="st1"
                />
              </g>
            </g>
          </g>
        </g>

        {/* Presión Post-filtros hacia ZM-01 */}
        {/* Tarjeta */}
        <g
          className="cursorPointer"
          onClick={() =>
            loadGrafico(18, "Presión Post-filtros hacia ZM-01", false)
          }>
          <path
            id="rect2243_1_"
            d="M1548.4 1305h138.1v99.8h-138.1z"
            className={getTarjetaClass(18, selected)}
          />
          <text
            id="text2245_1_"
            className="st20 st2 st15"
            transform="translate(1576.26 1344.047)">
            {"Presi\xF3n Post"}
          </text>

          <g id="g2267_1_">
            <text
              id="text2265_1_"
              className="st16 st2 st17"
              transform="translate(1598.388 1391.066)">
              {getScaledValue(datosScada.d18, 1)}
            </text>
          </g>
          <text
            id="text2269_1_"
            className="st16 st2 st3"
            transform="translate(1600.841 1324.4)">
            {"PT221"}
          </text>
          <text
            id="text2271_1_"
            className="st16 st2 st15"
            transform="translate(1653.35 1392.004)">
            {"bar"}
          </text>
          <text
            id="text2273_1_"
            className="st20 st2 st15"
            transform="translate(1559.56 1363.047)">
            {"Filtros hacia ZM-01"}
          </text>
        </g>

        {/* Campana */}
        <g
          className={`${getTemaAlarma(18, loading, datosAlarmas)} cursorPointer`}
          onClick={() => {
            onClickAlarma(18, "Presión Post-filtros hacia ZM-01");
          }}>
          <path
            id="path2247_1_"
            d="M1563.5 1381c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z"
          />
          <path
            id="path2249_1_"
            d="M1561.8 1380c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1z"
          />
          <path
            id="path2251_1_"
            d="M1573.1 1378.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z"
          />
          <path
            id="path2253_1_"
            d="M1573.7 1376.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1z"
          />
          <path
            id="path2255_1_"
            d="M1574.6 1386v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1z"
          />
          <path
            id="path2257_1_"
            d="M1569.6 1393.5c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z"
          />
        </g>

        {/* Fin Presión Post-filtros hacia ZM-01 */}
      </g>
      <path
        id="line2585"
        d="M952.9 1150.7h14.8c3.7 0 6.6 3 6.6 6.6v91c0 2.7-2.2 5-5 5h-16.4"
        className="st5"
      />
      <path
        id="rect2621_1_"
        d="M43.8 1177.6h124.8v97.7H43.8z"
        className="st20"
      />
      <path
        id="path2623_1_"
        d="M168.4 1161.3v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1v-111.2"
        className="st21"
      />
      <g id="g2627_1_">
        <text
          className="st16 st2 st3"
          transform="translate(77.516 1295.453)">
          {"ESTANQUE"}
        </text>
        <text
          className="st16 st2 st3"
          transform="translate(67.116 1308.652)">
          {"DE PRODUCTO"}
        </text>
      </g>
      <g
        id="g2779_1_"
        transform="translate(42 44)">
        <g id="g2741_1_">
          <image
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAB5CAYAAAA00bOLAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABXpJREFUeNrsmm1z2kYURpG0NtiG xG7SNNN0+qX//z+1TZs4bmJsMO8Iupo+m7ksEhCXzhTpnJk7wrLEDOuzdx8tTlqHk7QA/mF9DGES c0yQDKnMcb1PtGTP+VSvU1MJgjVWrKJWpsLPpZK5CrGCUE51pmOmQrBmipWrlr4WOi6rBHMVYmUS quPrwlRb99DBmtmxCpFmviamphItjwVzFWIVEl366vm6Vr3QubauSclgjclYK8lTiDX2NfD1oBrq 3CwWLO5chTDnkujG1xtfP6huJFvHdC9oBqFrTSVT39cn1Z0Rygr2VS6bsdqSqBDrZ9U7X6+RC7kk 12etZG39PmSv3Cyh63hZdMpWxTL4VmL94usnX698dfWGKXI1Tq6VOtOT/Ojod3Mti1O9XlZ1rjPJ FZbEdxLrR527iAI9NCd7he7VNR1rqvxVLJOPkmxuO1e89XCh5e9GS+Erk7faZisCmidYbhrSTIE+ uBE3nsRFYT5krivd0JOpZdsQ0Dy5EpOxusaRq8iPrWXRdq9zrakdvXZm+4Gs1UyCWNkORzb2P9Po 5nhn3krFpilYR7LIky1H0pKb7UUJyyBUSLbXk3SPoUgFh3SyUk/IT/CfgVyAXIBcAMgFyAXIBYBc gFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBcgFyAXADIBcgFgFyAXIBcAMgF yAXIBYBcgFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBcgFyAXADIBcgFgFyA XIBcAMgFyAXIBYBcgFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBccMJyrU0B tJ7jSVpy8Sq6aYVk8BxP0hILi4uWpvLojYBOtZIX1pMtR1yFWHNfU9XcSJbo+qSGA5ccafDr3q3y HY5sCObMzUGsma+Rr6HqyVfXXJvVTC47YZ4zedbRBK2rZGuJVfgxkRfBkZHOB8G+dq64a010Q9/X Z1/Xvtq6fql70poIFoRKTSUmLiQHSLUy47eqaYSI/Sjc+CI/+vJlEncvF928MDff+Xrhq6NrZupg bfOHqINYmaoYizMd3R7ByvLpwsSHvGaChUkzU8cqxPrD15/ypC9vFjbYu2jAgpkPvm59net3U53r STZ34nLZjuU0YS5MtSVaVtKlbfZYmGUi1Kwq4J64XEt5MFTHKsT6XZ48mM5VGuht5hrKyNCxBr5u aiJXYp6UM02gK322IgK81OtLSRZ/VjtOY43VowY45I+5ecquQwaL5So61SfVnc7Fk2qjc4U3mZs/ wFID2NcSGQY8OzCX/J+xXaunyfO9rze+XuvnrplMienuUy0PIZcWA/yXyR9b4faEs1bLdOowoQaa TGFCjeXNxud1JW8U3sTa+miWCxvoTznUx3J95+utBm5q5FiZnBnnjltljw96fV8zucryZRwDpooH edU+V5lga9PJxro2M1sRp/60GB5KwrJ4rZn4pAFcmLB+qc8fOnkh1kdljt8k2J3uH5lZXAe5rGC5 2eey41OaL92OVpibZWAeParXZRsi5K6Bae9WrBDYewr4C11XZI33vn6VYB8lXBDTfqvRqplg8ZZL Za50B6y14VjH3fkg2EwTaBGJFQLsSyPXo5bA96oPEmsYLad13UhttQ7cMHbf8GZ1/conj2ZjCK9z LXFf9DAT5BoovN+qg91HYuU1eUI8xIuduGO/4QkOUhKFUbuHNdLT4JXJXCN1r36U0eq2t/WvcQzB xr+NWMGCXPcK/ZnpaGPVpLX9pS3UMD8dO+THXwfZfa746x7EQq6Dx6Tsy+xkxxMTYiHXN49L2RPy uuIIyHWUMUKoA/hbgAEAGrEmYbv27m4AAAAASUVORK5CYII="
            id="image2731_1_"
            width={158}
            height={160}
            style={{
              overflow: "visible",
              opacity: 0.3,
              enableBackground: "new"
            }}
            transform="translate(1306.283 1033.061) scale(.9663)"
          />
          <g id="g2739_1_">
            <g id="g2737_1_">
              <g id="g2735_1_">
                <path
                  id="path2733_1_"
                  d="M1365.4 1042.5h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
                  className="st1"
                />
              </g>
            </g>
          </g>
        </g>

        {/* Caudal después ZM-01 */}
        {/* Tarjeta */}
        <g
          className="cursorPointer"
          onClick={() => loadGrafico(20, "Caudal después ZM-01", false)}>
          <path
            id="rect2743_1_"
            d="M1316.1 1049.9h138.1v99.8h-138.1z"
            className={getTarjetaClass(20, selected)}
          />
          <g
            id="g2749_1_"
            transform="translate(0 2)">
            <g id="g2747_1_">
              <text
                className="st20 st2 st15"
                transform="translate(1364.772 1089.343)">
                {"Caudal"}
              </text>
              <text
                className="st20 st2 st34"
                transform="translate(1342.038 1106.843)">
                {"Despu\xE9s ZM-01"}
              </text>
            </g>
          </g>

          <g id="g2771_1_">
            <text
              id="text2769_1_"
              className="st16 st2 st17"
              transform="translate(1368.937 1134.662)">
              {getScaledValue(datosScada.d20, 1)}
            </text>
          </g>
          <text
            id="text2773_1_"
            className="st16 st2 st15"
            transform="translate(1413.406 1134.267)">
            {"m3/h"}
          </text>
          <g id="g2777_1_">
            <text
              id="text2775_1_"
              className="st16 st2 st3"
              transform="translate(1368.242 1071.497)">
              {"FIT222"}
            </text>
          </g>
        </g>

        {/* Campana */}
        <g
          className={`${getTemaAlarma(20, loading, datosAlarmas)} cursorPointer`}
          onClick={() => {
            onClickAlarma(20, "Caudal después ZM-01");
          }}>
          <path
            id="path2751_1_"
            d="M1331.2 1123.7c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z"
          />
          <path
            id="path2753_1_"
            d="M1329.5 1122.7c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1z"
          />
          <path
            id="path2755_1_"
            d="M1340.8 1121.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z"
          />
          <path
            id="path2757_1_"
            d="M1341.4 1119.6c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1z"
          />
          <path
            id="path2759_1_"
            d="M1342.3 1128.7v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1z"
          />
          <path
            id="path2761_1_"
            d="M1337.3 1136.2c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z"
          />
        </g>

        {/* Fin Caudal después ZM-01 */}
      </g>
      <g id="g2275_2_">
        <g id="g2241_2_">
          <image
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAB5CAYAAAA00bOLAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABXpJREFUeNrsmm1z2kYURpG0NtiG xG7SNNN0+qX//z+1TZs4bmJsMO8Iupo+m7ksEhCXzhTpnJk7wrLEDOuzdx8tTlqHk7QA/mF9DGES c0yQDKnMcb1PtGTP+VSvU1MJgjVWrKJWpsLPpZK5CrGCUE51pmOmQrBmipWrlr4WOi6rBHMVYmUS quPrwlRb99DBmtmxCpFmviamphItjwVzFWIVEl366vm6Vr3QubauSclgjclYK8lTiDX2NfD1oBrq 3CwWLO5chTDnkujG1xtfP6huJFvHdC9oBqFrTSVT39cn1Z0Rygr2VS6bsdqSqBDrZ9U7X6+RC7kk 12etZG39PmSv3Cyh63hZdMpWxTL4VmL94usnX698dfWGKXI1Tq6VOtOT/Ojod3Mti1O9XlZ1rjPJ FZbEdxLrR527iAI9NCd7he7VNR1rqvxVLJOPkmxuO1e89XCh5e9GS+Erk7faZisCmidYbhrSTIE+ uBE3nsRFYT5krivd0JOpZdsQ0Dy5EpOxusaRq8iPrWXRdq9zrakdvXZm+4Gs1UyCWNkORzb2P9Po 5nhn3krFpilYR7LIky1H0pKb7UUJyyBUSLbXk3SPoUgFh3SyUk/IT/CfgVyAXIBcAMgFyAXIBYBc gFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBcgFyAXADIBcgFgFyAXIBcAMgF yAXIBYBcgFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBcgFyAXADIBcgFgFyA XIBcAMgFyAXIBYBcgFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBccMJyrU0B tJ7jSVpy8Sq6aYVk8BxP0hILi4uWpvLojYBOtZIX1pMtR1yFWHNfU9XcSJbo+qSGA5ccafDr3q3y HY5sCObMzUGsma+Rr6HqyVfXXJvVTC47YZ4zedbRBK2rZGuJVfgxkRfBkZHOB8G+dq64a010Q9/X Z1/Xvtq6fql70poIFoRKTSUmLiQHSLUy47eqaYSI/Sjc+CI/+vJlEncvF928MDff+Xrhq6NrZupg bfOHqINYmaoYizMd3R7ByvLpwsSHvGaChUkzU8cqxPrD15/ypC9vFjbYu2jAgpkPvm59net3U53r STZ34nLZjuU0YS5MtSVaVtKlbfZYmGUi1Kwq4J64XEt5MFTHKsT6XZ48mM5VGuht5hrKyNCxBr5u aiJXYp6UM02gK322IgK81OtLSRZ/VjtOY43VowY45I+5ecquQwaL5So61SfVnc7Fk2qjc4U3mZs/ wFID2NcSGQY8OzCX/J+xXaunyfO9rze+XuvnrplMienuUy0PIZcWA/yXyR9b4faEs1bLdOowoQaa TGFCjeXNxud1JW8U3sTa+miWCxvoTznUx3J95+utBm5q5FiZnBnnjltljw96fV8zucryZRwDpooH edU+V5lga9PJxro2M1sRp/60GB5KwrJ4rZn4pAFcmLB+qc8fOnkh1kdljt8k2J3uH5lZXAe5rGC5 2eey41OaL92OVpibZWAeParXZRsi5K6Bae9WrBDYewr4C11XZI33vn6VYB8lXBDTfqvRqplg8ZZL Za50B6y14VjH3fkg2EwTaBGJFQLsSyPXo5bA96oPEmsYLad13UhttQ7cMHbf8GZ1/conj2ZjCK9z LXFf9DAT5BoovN+qg91HYuU1eUI8xIuduGO/4QkOUhKFUbuHNdLT4JXJXCN1r36U0eq2t/WvcQzB xr+NWMGCXPcK/ZnpaGPVpLX9pS3UMD8dO+THXwfZfa746x7EQq6Dx6Tsy+xkxxMTYiHXN49L2RPy uuIIyHWUMUKoA/hbgAEAGrEmYbv27m4AAAAASUVORK5CYII="
            id="image2231_2_"
            width={158}
            height={160}
            style={{
              overflow: "visible",
              opacity: 0.3,
              enableBackground: "new"
            }}
            transform="matrix(.9663 0 0 -.9663 1707.128 1421.582)"
          />
          <g id="g2239_2_">
            <g id="g2237_2_">
              <g id="g2235_2_">
                <path
                  id="path2233_2_"
                  d="M1803.1 1412.2h45.1c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-53.7c-1.3 0-2.5-.4-3.5-1.3-6.4-6.7-6.4-6.7-12.9-.2l-.4.3c-1 .8-2.2 1.2-3.4 1.2h-51.7c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h80.5z"
                  className="st1"
                />
              </g>
            </g>
          </g>
        </g>

        {/* Caudal de ZM-01 */}
        {/* Tarjeta */}
        <g
          className="cursorPointer"
          onClick={() => loadGrafico(4, "Caudal de ZM-01", false)}>
          <path
            id="rect2243_2_"
            d="M1716.4 1305h138.1v99.8h-138.1z"
            className={getTarjetaClass(4, selected)}
          />
          <text
            id="text2245_2_"
            className="st20 st2 st15"
            transform="translate(1763.414 1344.047)">
            {"Caudal"}
          </text>

          <g id="g2267_2_">
            <text
              id="text2265_2_"
              className="st16 st2 st17"
              transform="translate(1766.382 1391.066)">
              {getScaledValue(datosScada.d4, 1)}
            </text>
          </g>
          <text
            id="text2269_2_"
            className="st16 st2 st3"
            transform="translate(1768.836 1324.4)">
            {"FIT219"}
          </text>
          <text
            id="text2271_2_"
            className="st16 st2 st15"
            transform="translate(1812.214 1392.004)">
            {"m3/h"}
          </text>
          <text
            id="text2273_2_"
            className="st20 st2 st15"
            transform="translate(1763.413 1363.047)">
            {"a ZM-01"}
          </text>
        </g>

        {/* Campana */}
        <g
          className={`${getTemaAlarma(4, loading, datosAlarmas)} cursorPointer`}
          onClick={() => {
            onClickAlarma(4, "Caudal de ZM-01");
          }}>
          <path
            id="path2247_2_"
            d="M1731.5 1381c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z"
          />
          <path
            id="path2249_2_"
            d="M1729.8 1380c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1z"
          />
          <path
            id="path2251_2_"
            d="M1741.1 1378.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z"
          />
          <path
            id="path2253_2_"
            d="M1741.7 1376.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1z"
          />
          <path
            id="path2255_2_"
            d="M1742.6 1386v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1z"
          />
          <path
            id="path2257_2_"
            d="M1737.6 1393.5c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z"
          />
        </g>

        {/* Fin Caudal de ZM-01 */}
      </g>
      <g
        id="g2779-1_1_"
        transform="translate(-112.449 43.491)">
        <g id="g2741-0_1_">
          <image
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAB5CAYAAAA00bOLAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABXpJREFUeNrsmm1z2kYURpG0NtiG xG7SNNN0+qX//z+1TZs4bmJsMO8Iupo+m7ksEhCXzhTpnJk7wrLEDOuzdx8tTlqHk7QA/mF9DGES c0yQDKnMcb1PtGTP+VSvU1MJgjVWrKJWpsLPpZK5CrGCUE51pmOmQrBmipWrlr4WOi6rBHMVYmUS quPrwlRb99DBmtmxCpFmviamphItjwVzFWIVEl366vm6Vr3QubauSclgjclYK8lTiDX2NfD1oBrq 3CwWLO5chTDnkujG1xtfP6huJFvHdC9oBqFrTSVT39cn1Z0Rygr2VS6bsdqSqBDrZ9U7X6+RC7kk 12etZG39PmSv3Cyh63hZdMpWxTL4VmL94usnX698dfWGKXI1Tq6VOtOT/Ojod3Mti1O9XlZ1rjPJ FZbEdxLrR527iAI9NCd7he7VNR1rqvxVLJOPkmxuO1e89XCh5e9GS+Erk7faZisCmidYbhrSTIE+ uBE3nsRFYT5krivd0JOpZdsQ0Dy5EpOxusaRq8iPrWXRdq9zrakdvXZm+4Gs1UyCWNkORzb2P9Po 5nhn3krFpilYR7LIky1H0pKb7UUJyyBUSLbXk3SPoUgFh3SyUk/IT/CfgVyAXIBcAMgFyAXIBYBc gFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBcgFyAXADIBcgFgFyAXIBcAMgF yAXIBYBcgFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBcgFyAXADIBcgFgFyA XIBcAMgFyAXIBYBcgFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBccMJyrU0B tJ7jSVpy8Sq6aYVk8BxP0hILi4uWpvLojYBOtZIX1pMtR1yFWHNfU9XcSJbo+qSGA5ccafDr3q3y HY5sCObMzUGsma+Rr6HqyVfXXJvVTC47YZ4zedbRBK2rZGuJVfgxkRfBkZHOB8G+dq64a010Q9/X Z1/Xvtq6fql70poIFoRKTSUmLiQHSLUy47eqaYSI/Sjc+CI/+vJlEncvF928MDff+Xrhq6NrZupg bfOHqINYmaoYizMd3R7ByvLpwsSHvGaChUkzU8cqxPrD15/ypC9vFjbYu2jAgpkPvm59net3U53r STZ34nLZjuU0YS5MtSVaVtKlbfZYmGUi1Kwq4J64XEt5MFTHKsT6XZ48mM5VGuht5hrKyNCxBr5u aiJXYp6UM02gK322IgK81OtLSRZ/VjtOY43VowY45I+5ecquQwaL5So61SfVnc7Fk2qjc4U3mZs/ wFID2NcSGQY8OzCX/J+xXaunyfO9rze+XuvnrplMienuUy0PIZcWA/yXyR9b4faEs1bLdOowoQaa TGFCjeXNxud1JW8U3sTa+miWCxvoTznUx3J95+utBm5q5FiZnBnnjltljw96fV8zucryZRwDpooH edU+V5lga9PJxro2M1sRp/60GB5KwrJ4rZn4pAFcmLB+qc8fOnkh1kdljt8k2J3uH5lZXAe5rGC5 2eey41OaL92OVpibZWAeParXZRsi5K6Bae9WrBDYewr4C11XZI33vn6VYB8lXBDTfqvRqplg8ZZL Za50B6y14VjH3fkg2EwTaBGJFQLsSyPXo5bA96oPEmsYLad13UhttQ7cMHbf8GZ1/conj2ZjCK9z LXFf9DAT5BoovN+qg91HYuU1eUI8xIuduGO/4QkOUhKFUbuHNdLT4JXJXCN1r36U0eq2t/WvcQzB xr+NWMGCXPcK/ZnpaGPVpLX9pS3UMD8dO+THXwfZfa746x7EQq6Dx6Tsy+xkxxMTYiHXN49L2RPy uuIIyHWUMUKoA/hbgAEAGrEmYbv27m4AAAAASUVORK5CYII="
            id="image2731-3_1_"
            width={158}
            height={160}
            style={{
              overflow: "visible",
              opacity: 0.3,
              enableBackground: "new"
            }}
            transform="translate(1306.229 1031.805) scale(.9945)"
          />
          <g id="g2739-0_1_">
            <g id="g2737-0_1_">
              <g id="g2735-3_1_">
                <path
                  id="path2733-8_1_"
                  d="M1366.3 1041.3h-43.8c-3.6 0-6.4 2.8-6.4 6.4v103.9c0 3.6 2.8 6.4 6.4 6.4h52.5c1.2 0 2.4.4 3.5 1.2l.4.3c6.6 6.6 6.6 6.6 13.1-.2 1-.9 2.2-1.3 3.6-1.3h54.5c3.6 0 6.4-2.8 6.4-6.4v-103.9c0-3.6-2.8-6.4-6.4-6.4h-83.8z"
                  className="st1"
                />
              </g>
            </g>
          </g>
        </g>

        {/* Presión después ZM-01 */}
        {/* Tarjeta */}
        <g
          className="cursorPointer"
          onClick={() => loadGrafico(14, "Presión después ZM-01", false)}>
          <path
            id="rect2743-3_1_"
            d="M1316.2 1048.8h140.3v101.4h-140.3z"
            className={getTarjetaClass(14, selected)}
          />
          <g
            id="g2749-6_1_"
            transform="translate(0 2)">
            <g id="g2747-0_1_">
              <text
                className="st20 st2 st34"
                transform="translate(1364.7 1088.948)">
                {"Presi\xF3n"}
              </text>
              <text
                className="st20 st2 st34"
                transform="translate(1334.713 1106.725)">
                {"Despu\xE9s ZM-01"}
              </text>
            </g>
          </g>

          <g
            id="g2771-9_1_"
            transform="translate(-4)">
            <text
              id="text2769-3_1_"
              className="st16 st2"
              style={{
                fontSize: "17.2688px"
              }}
              transform="translate(1368.701 1134.951)">
              {getScaledValue(datosScada.d14, 1)}
            </text>
          </g>
          <text
            id="text2773-0_1_"
            className="st16 st2"
            style={{
              fontSize: "13.2056px"
            }}
            transform="translate(1422.475 1134.55)">
            {"bar"}
          </text>
          <g id="g2777-0_1_">
            <text
              id="text2775-3_1_"
              className="st16 st2"
              style={{
                fontSize: "11.1739px"
              }}
              transform="translate(1369.224 1070.789)">
              {"PT224"}
            </text>
          </g>
        </g>

        {/* Campana */}
        <g
          className={`${getTemaAlarma(14, loading, datosAlarmas)} cursorPointer`}
          onClick={() => {
            onClickAlarma(14, "Presión después ZM-01");
          }}>
          <path
            id="path2751-4_1_"
            d="M1331.6 1123.8c-.6 1.1-.8 2.3-.6 3.4 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-1.9 1.1-2.5 2.2z"
          />
          <path
            id="path2753-9_1_"
            d="M1329.8 1122.8c-.9 1.5-1.1 3.1-.8 4.8 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-4 .7-1.3 1.8-2.2 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.4.5-2.8 1.5-3.7 3.1z"
          />
          <path
            id="path2755-2_1_"
            d="M1341.3 1121.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.4-.7-.9-1.5-1.6-2.5-2.2z"
          />
          <path
            id="path2757-9_1_"
            d="M1341.9 1119.6c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.3-.8-4.8s-2.3-2.5-3.7-3.1z"
          />
          <path
            id="path2759-1_1_"
            d="M1342.8 1128.9v-1.5c0-2.4-1.6-4.4-3.9-4.9v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.4-3.9 4.9v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.5-.6-.8-1.3-.8-2.1z"
          />
          <path
            id="path2761-0_1_"
            d="M1337.8 1136.5c.9 0 1.7-.8 1.7-1.7h-3.4c0 .9.7 1.7 1.7 1.7z"
          />
        </g>

        {/* Fin Presión después ZM-01 */}
      </g>
      <g
        id="g1723"
        transform="translate(0 6)">
        <g id="g1721">
          <g id="g1707">
            <text
              id="text1705"
              className="st16 st2 st3"
              transform="translate(1322.305 796.881)">
              {"BISULFITO"}
            </text>
          </g>
          <g id="g1719">
            <g id="g1713">
              <path
                id="path1709"
                d="M1371.6 717.2h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
                className="st21"
              />
              <path
                id="path1711"
                d="M1361.1 726.2h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
                className="st22"
              />
            </g>
            <path
              id="rect1715"
              d="M1331.1 737.9h38.8v40h-38.8z"
              className="st29"
            />
            <path
              id="path1717"
              d="M1369.9 731.2v45.2c0 .7-.4 1.3-.8 1.3H1332c-.5 0-.8-.6-.8-1.3v-45.2"
              className="st21"
            />
          </g>
        </g>
      </g>
      <g
        id="g1743"
        transform="translate(0 6)">
        <g id="g1741">
          <g id="g1727">
            <text
              id="text1725"
              className="st16 st2 st3"
              transform="translate(1389.83 796.881)">
              {"ANTI INCRUSTANTE"}
            </text>
          </g>
          <g id="g1739">
            <g id="g1733">
              <path
                id="path1729"
                d="M1461.1 717.2h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
                className="st21"
              />
              <path
                id="path1731"
                d="M1450.6 726.2h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
                className="st22"
              />
            </g>
            <path
              id="rect1735"
              d="M1420.6 737.9h38.8v40h-38.8z"
              className="st29"
            />
            <path
              id="path1737"
              d="M1459.4 731.2v45.2c0 .7-.4 1.3-.8 1.3h-37.1c-.5 0-.8-.6-.8-1.3v-45.2"
              className="st21"
            />
          </g>
        </g>
      </g>
      <path
        id="polyline1747"
        d="M1289.4 533.2v168h166.9V712"
        className="st6"
      />
      <path
        id="line1749"
        d="M1368.1 712.4v-10.5"
        className="st6"
      />
      <g
        id="g5071"
        transform="translate(-281.047 -651.426)">
        <ellipse
          id="ellipse5057"
          cx={1757.1}
          cy={1375.6}
          className="st0"
          rx={14.9}
          ry={15.4}
        />
        <g id="g5069">
          <g id="g5065">
            <image
              xlinkHref="114664BE.png"
              id="image5059"
              width={37}
              height={36}
              style={{
                overflow: "visible",
                opacity: 0.15,
                enableBackground: "new"
              }}
              transform="translate(1739.776 1358.556) scale(.9448)"
            />
            <g id="g5063">
              <circle
                id="circle5061"
                cx={1757.1}
                cy={1375.6}
                r={10.9}
                className="st1"
              />
            </g>
          </g>
          <circle
            id="circle5067"
            cx={1757.1}
            cy={1375.5}
            r={8}
            className="st18"
          />
        </g>
      </g>
      <g
        id="g1681-3"
        transform="translate(464.327 16.027)">
        <path
          id="path1677-3"
          d="M829.9 520.8c0 .9-.7 1.6-1.6 1.6H822c-.9 0-1.6-.7-1.6-1.6 0-.4.2-.8.5-1.1l3.1-3.1c.6-.6 1.5-.6 2.2-.1l3.2 3.2c.3.3.5.7.5 1.1z"
          className="st28"
        />
        <path
          id="path1679-2"
          d="M821.3 520.8c0-.2.1-.3.2-.4l3.1-3.1c.2-.2.6-.2.9 0l3.1 3.1c.1.1.2.3.2.4 0 .3-.2.6-.6.6h-6.3c-.3 0-.6-.3-.6-.6m-2 0c0 1.4 1.2 2.6 2.6 2.6h6.3c1.4 0 2.6-1.2 2.6-2.6 0-.7-.3-1.3-.8-1.8l-3.1-3.1-.1-.1-.1-.1c-1.1-.9-2.6-.8-3.5.2l-3.1 3.1c-.5.5-.8 1.1-.8 1.8z"
          className="st1"
        />
      </g>
      <path
        id="path6752"
        d="M506.4 535.8v50.6"
        style={{
          fill: "#cbcbcb",
          fillOpacity: 0.6,
          stroke: "#cbcbcb",
          strokeWidth: 2,
          strokeOpacity: 0.6
        }}
      />
      <g id="g1989_00000095299782055984095350000014363518916934025397_">
        <g id="g1953_00000139294854079911947410000002652731546503533995_">
          <image
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAB5CAYAAAA00bOLAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABXpJREFUeNrsmm1z2kYURpG0NtiG xG7SNNN0+qX//z+1TZs4bmJsMO8Iupo+m7ksEhCXzhTpnJk7wrLEDOuzdx8tTlqHk7QA/mF9DGES c0yQDKnMcb1PtGTP+VSvU1MJgjVWrKJWpsLPpZK5CrGCUE51pmOmQrBmipWrlr4WOi6rBHMVYmUS quPrwlRb99DBmtmxCpFmviamphItjwVzFWIVEl366vm6Vr3QubauSclgjclYK8lTiDX2NfD1oBrq 3CwWLO5chTDnkujG1xtfP6huJFvHdC9oBqFrTSVT39cn1Z0Rygr2VS6bsdqSqBDrZ9U7X6+RC7kk 12etZG39PmSv3Cyh63hZdMpWxTL4VmL94usnX698dfWGKXI1Tq6VOtOT/Ojod3Mti1O9XlZ1rjPJ FZbEdxLrR527iAI9NCd7he7VNR1rqvxVLJOPkmxuO1e89XCh5e9GS+Erk7faZisCmidYbhrSTIE+ uBE3nsRFYT5krivd0JOpZdsQ0Dy5EpOxusaRq8iPrWXRdq9zrakdvXZm+4Gs1UyCWNkORzb2P9Po 5nhn3krFpilYR7LIky1H0pKb7UUJyyBUSLbXk3SPoUgFh3SyUk/IT/CfgVyAXIBcAMgFyAXIBYBc gFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBcgFyAXADIBcgFgFyAXIBcAMgF yAXIBYBcgFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBcgFyAXADIBcgFgFyA XIBcAMgFyAXIBYBcgFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBccMJyrU0B tJ7jSVpy8Sq6aYVk8BxP0hILi4uWpvLojYBOtZIX1pMtR1yFWHNfU9XcSJbo+qSGA5ccafDr3q3y HY5sCObMzUGsma+Rr6HqyVfXXJvVTC47YZ4zedbRBK2rZGuJVfgxkRfBkZHOB8G+dq64a010Q9/X Z1/Xvtq6fql70poIFoRKTSUmLiQHSLUy47eqaYSI/Sjc+CI/+vJlEncvF928MDff+Xrhq6NrZupg bfOHqINYmaoYizMd3R7ByvLpwsSHvGaChUkzU8cqxPrD15/ypC9vFjbYu2jAgpkPvm59net3U53r STZ34nLZjuU0YS5MtSVaVtKlbfZYmGUi1Kwq4J64XEt5MFTHKsT6XZ48mM5VGuht5hrKyNCxBr5u aiJXYp6UM02gK322IgK81OtLSRZ/VjtOY43VowY45I+5ecquQwaL5So61SfVnc7Fk2qjc4U3mZs/ wFID2NcSGQY8OzCX/J+xXaunyfO9rze+XuvnrplMienuUy0PIZcWA/yXyR9b4faEs1bLdOowoQaa TGFCjeXNxud1JW8U3sTa+miWCxvoTznUx3J95+utBm5q5FiZnBnnjltljw96fV8zucryZRwDpooH edU+V5lga9PJxro2M1sRp/60GB5KwrJ4rZn4pAFcmLB+qc8fOnkh1kdljt8k2J3uH5lZXAe5rGC5 2eey41OaL92OVpibZWAeParXZRsi5K6Bae9WrBDYewr4C11XZI33vn6VYB8lXBDTfqvRqplg8ZZL Za50B6y14VjH3fkg2EwTaBGJFQLsSyPXo5bA96oPEmsYLad13UhttQ7cMHbf8GZ1/conj2ZjCK9z LXFf9DAT5BoovN+qg91HYuU1eUI8xIuduGO/4QkOUhKFUbuHNdLT4JXJXCN1r36U0eq2t/WvcQzB xr+NWMGCXPcK/ZnpaGPVpLX9pS3UMD8dO+THXwfZfa746x7EQq6Dx6Tsy+xkxxMTYiHXN49L2RPy uuIIyHWUMUKoA/hbgAEAGrEmYbv27m4AAAAASUVORK5CYII="
            id="image1943_00000012473339319223535380000005702574294878813619_"
            width={158}
            height={160}
            style={{
              overflow: "visible",
              opacity: 0.3,
              enableBackground: "new"
            }}
            transform="translate(483.475 371.922) scale(.9663)"
          />
          <g id="g1951_00000063595217566531072860000011831952184233852310_">
            <g id="g1949_00000026851716431637895780000012526391166060820356_">
              <g id="g1947_00000067951153229299384770000014758366317218945951_">
                <path
                  id="path1945_00000044881557954918386660000001143381387115462800_"
                  d="M542.5 381.3h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3H625c3.5 0 6.3-2.8 6.3-6.3V387.6c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
                  className="st1"
                />
              </g>
            </g>
          </g>
        </g>

        {/* Presion entrada Pre-tratamiento */}
        {/* Tarjeta */}
        <g
          className="cursorPointer"
          onClick={() =>
            loadGrafico(2, "Presion entrada Pre-tratamiento", false)
          }>
          <path
            id="rect1955_00000093137254502062516850000000602810435388073903_"
            d="M493.2 388.7h138.1v99.8H493.2z"
            className={getTarjetaClass(2, selected)}
          />
          <g id="g1959_00000132777312365605928110000004345131057402470548_">
            <text
              className="st20 st2 st15"
              transform="translate(511.748 430.3)">
              {"Presi\xF3n entrada"}
            </text>
            <text
              className="st20 st2 st15"
              transform="translate(512.948 447.1)">
              {"Pre-tratamiento"}
            </text>
          </g>

          <g
            id="g1981_00000048460854824542526050000015357200376536235914_"
            transform="translate(-4)">
            <text
              id="text1979_00000093163210651272055780000017196672231032798608_"
              className="st16 st2 st17"
              transform="translate(552.586 473.523)">
              {getScaledValue(datosScada.d2, 1)}
            </text>
          </g>
          <text
            id="text1983_00000048496891993090940740000006780503406500711578_"
            className="st16 st2 st15"
            transform="translate(598.482 473.128)">
            {"bar"}
          </text>
          <g id="g1987_00000036956569712592069100000008450621683651107004_">
            <text
              id="text1985_00000160151707636328934510000012651823934774552229_"
              className="st16 st2 st3"
              transform="translate(545.961 411.358)">
              {"PT203"}
            </text>
          </g>
        </g>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(2, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(2, "Presion entrada Pre-tratamiento");
        }}>
        <path d="M508.3 462.5c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M506.6 461.5c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1z" />
        <path d="M517.9 460.2c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M518.5 458.4c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1z" />
        <path d="M519.4 467.5V466c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1z" />
        <path d="M514.4 475c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presion entrada Pre-tratamiento */}

      <text
        className="st16 st2 st3"
        transform="translate(1790.446 564.078)">
        {"FILTRO"}
      </text>
      <path
        id="line1883_00000164508267906304489650000006931718293363447452_"
        d="M973.3 1227.2h-20.4"
        className="st8"
      />
      <g id="g1933_00000094594528990577873370000004503638956699542945_">
        <g id="g1895_00000100374119617017116310000002226703225007846068_">
          <image
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAB5CAYAAAA00bOLAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABXpJREFUeNrsmm1z2kYURpG0NtiG xG7SNNN0+qX//z+1TZs4bmJsMO8Iupo+m7ksEhCXzhTpnJk7wrLEDOuzdx8tTlqHk7QA/mF9DGES c0yQDKnMcb1PtGTP+VSvU1MJgjVWrKJWpsLPpZK5CrGCUE51pmOmQrBmipWrlr4WOi6rBHMVYmUS quPrwlRb99DBmtmxCpFmviamphItjwVzFWIVEl366vm6Vr3QubauSclgjclYK8lTiDX2NfD1oBrq 3CwWLO5chTDnkujG1xtfP6huJFvHdC9oBqFrTSVT39cn1Z0Rygr2VS6bsdqSqBDrZ9U7X6+RC7kk 12etZG39PmSv3Cyh63hZdMpWxTL4VmL94usnX698dfWGKXI1Tq6VOtOT/Ojod3Mti1O9XlZ1rjPJ FZbEdxLrR527iAI9NCd7he7VNR1rqvxVLJOPkmxuO1e89XCh5e9GS+Erk7faZisCmidYbhrSTIE+ uBE3nsRFYT5krivd0JOpZdsQ0Dy5EpOxusaRq8iPrWXRdq9zrakdvXZm+4Gs1UyCWNkORzb2P9Po 5nhn3krFpilYR7LIky1H0pKb7UUJyyBUSLbXk3SPoUgFh3SyUk/IT/CfgVyAXIBcAMgFyAXIBYBc gFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBcgFyAXADIBcgFgFyAXIBcAMgF yAXIBYBcgFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBcgFyAXADIBcgFgFyA XIBcAMgFyAXIBYBcgFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBccMJyrU0B tJ7jSVpy8Sq6aYVk8BxP0hILi4uWpvLojYBOtZIX1pMtR1yFWHNfU9XcSJbo+qSGA5ccafDr3q3y HY5sCObMzUGsma+Rr6HqyVfXXJvVTC47YZ4zedbRBK2rZGuJVfgxkRfBkZHOB8G+dq64a010Q9/X Z1/Xvtq6fql70poIFoRKTSUmLiQHSLUy47eqaYSI/Sjc+CI/+vJlEncvF928MDff+Xrhq6NrZupg bfOHqINYmaoYizMd3R7ByvLpwsSHvGaChUkzU8cqxPrD15/ypC9vFjbYu2jAgpkPvm59net3U53r STZ34nLZjuU0YS5MtSVaVtKlbfZYmGUi1Kwq4J64XEt5MFTHKsT6XZ48mM5VGuht5hrKyNCxBr5u aiJXYp6UM02gK322IgK81OtLSRZ/VjtOY43VowY45I+5ecquQwaL5So61SfVnc7Fk2qjc4U3mZs/ wFID2NcSGQY8OzCX/J+xXaunyfO9rze+XuvnrplMienuUy0PIZcWA/yXyR9b4faEs1bLdOowoQaa TGFCjeXNxud1JW8U3sTa+miWCxvoTznUx3J95+utBm5q5FiZnBnnjltljw96fV8zucryZRwDpooH edU+V5lga9PJxro2M1sRp/60GB5KwrJ4rZn4pAFcmLB+qc8fOnkh1kdljt8k2J3uH5lZXAe5rGC5 2eey41OaL92OVpibZWAeParXZRsi5K6Bae9WrBDYewr4C11XZI33vn6VYB8lXBDTfqvRqplg8ZZL Za50B6y14VjH3fkg2EwTaBGJFQLsSyPXo5bA96oPEmsYLad13UhttQ7cMHbf8GZ1/conj2ZjCK9z LXFf9DAT5BoovN+qg91HYuU1eUI8xIuduGO/4QkOUhKFUbuHNdLT4JXJXCN1r36U0eq2t/WvcQzB xr+NWMGCXPcK/ZnpaGPVpLX9pS3UMD8dO+THXwfZfa746x7EQq6Dx6Tsy+xkxxMTYiHXN49L2RPy uuIIyHWUMUKoA/hbgAEAGrEmYbv27m4AAAAASUVORK5CYII="
            id="image1885_00000170985213629123029590000002522767092729023371_"
            width={158}
            height={160}
            style={{
              overflow: "visible",
              opacity: 0.3,
              enableBackground: "new"
            }}
            transform="translate(796.82 1002.192) scale(.9696)"
          />
          <g id="g1893_00000034081578110397718000000000574188013609692310_">
            <g id="g1891_00000007427910937113701930000016794767738451847347_">
              <g id="g1889_00000143588498675701428930000017635516887716244414_">
                <path
                  id="path1887_00000023252487704790628630000017163154414519470242_"
                  d="M855.6 1011.8h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
                  className="st1"
                />
              </g>
            </g>
          </g>
        </g>

        {/* Recuperación RO */}
        {/* Tarjeta */}
        <g
        /* className="cursorPointer" */
        /* onClick={()=>loadGrafico(0,"Recuperación RO",false)} */
        >
          <path
            id="rect1897_00000135679673109601532640000003234489464007284354_"
            d="M806.3 1019.2h138.1v99.8H806.3z"
            className={getTarjetaClass(0, selected)}
            style={{ pointerEvents: "none" }}
          />
          <g
            id="g1903_00000049220250777583778500000014497997455870869173_"
            transform="translate(1.905)">
            <g id="g1901_00000027575035993739749680000002725363438089067163_">
              <text
                className="st20 st2 st15"
                transform="translate(828.696 1052.714)">
                {"Recuperaci\xF3n"}
              </text>
              <text
                className="st20 st2 st15"
                transform="translate(861.396 1069.514)">
                {"RO"}
              </text>
            </g>
          </g>

          <g id="g1925_00000021804240327105534740000014607813675058659734_">
            <text
              id="text1923_00000067217772053073705070000013290812443635351184_"
              className="st16 st2 st17"
              transform="translate(859.26 1101.033)">
              {getScaledValue((datosScada.d8 / datosScada.d7 || 0) * 100, 1)}
            </text>
          </g>
          <text
            id="text1927_00000076572359553148817060000006623739634913091259_"
            className="st16 st2 st15"
            transform="translate(914.612 1100.638)">
            {"%"}
          </text>
        </g>

        {/* Campana */}
        {/*  <g
          className = {`${getTemaAlarma(0,loading,datosAlarmas)} cursorPointer`}
          onClick={() => {onClickAlarma(0,"Recuperación RO")}}
        >
          <path
            id="path1905_00000098919568740604497430000014384763246401109395_"
            d="M821.4 1090c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z"
          />
          <path
            id="path1907_00000106830086184471956870000012941633390593341350_"
            d="M819.7 1089c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1z"
          />
          <path
            id="path1909_00000109738035138719466030000007477856703970282407_"
            d="M831 1087.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z"

          />
          <path
            id="path1911_00000181055166163363307090000010071992457624865937_"
            d="M831.6 1085.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1z"

          />
          <path
            id="path1913_00000141423766068537282860000010803836579375155367_"
            d="M832.5 1095v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1z"

          />
          <path
            id="path1915_00000074401387027481593860000002137743290965511358_"
            d="M827.5 1102.5c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z"
          />
        </g> */}

        {/* Fin Recuperación RO */}
      </g>
      <path
        id="path1597_1_"
        d="M966.1 360.4h114.2s8.8-.8 8.7 8.7c-.1 10.7 0 29.3 0 29.3s-.7 9.4 10.3 9h6"
        className="st8"
      />
      <circle
        id="circle1745"
        cx={1520.9}
        cy={526.1}
        r={9.2}
        className="st25"
      />
      <circle
        id="circle1745_1_"
        cx={1684.1}
        cy={526.1}
        r={9.2}
        className="st25"
      />
      <path
        d="M782.3 1253.3H234.5c-4.6 0-8.4-3.8-8.4-8.4v-134c0-4.6-3.8-8.4-8.4-8.4H114.6c-4.6 0-8.4 3.8-8.4 8.4v31.6"
        style={{
          fill: "none",
          stroke: "#00aeed",
          strokeWidth: 4,
          strokeLinejoin: "round",
          strokeMiterlimit: 10
        }}
      />
      <path
        d="M777.3 1149.7h28.1"
        className="st8"
      />
      <circle
        id="circle1935"
        cx={660.8}
        cy={1252.8}
        r={9.2}
        className="st40"
      />
      <g id="g1933_00000136387165318336823500000001872316249767063948_">
        <g id="g1895_00000018195044261647510890000008098614572372558729_">
          <image
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAB5CAYAAAA00bOLAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABXpJREFUeNrsmm1z2kYURpG0NtiG xG7SNNN0+qX//z+1TZs4bmJsMO8Iupo+m7ksEhCXzhTpnJk7wrLEDOuzdx8tTlqHk7QA/mF9DGES c0yQDKnMcb1PtGTP+VSvU1MJgjVWrKJWpsLPpZK5CrGCUE51pmOmQrBmipWrlr4WOi6rBHMVYmUS quPrwlRb99DBmtmxCpFmviamphItjwVzFWIVEl366vm6Vr3QubauSclgjclYK8lTiDX2NfD1oBrq 3CwWLO5chTDnkujG1xtfP6huJFvHdC9oBqFrTSVT39cn1Z0Rygr2VS6bsdqSqBDrZ9U7X6+RC7kk 12etZG39PmSv3Cyh63hZdMpWxTL4VmL94usnX698dfWGKXI1Tq6VOtOT/Ojod3Mti1O9XlZ1rjPJ FZbEdxLrR527iAI9NCd7he7VNR1rqvxVLJOPkmxuO1e89XCh5e9GS+Erk7faZisCmidYbhrSTIE+ uBE3nsRFYT5krivd0JOpZdsQ0Dy5EpOxusaRq8iPrWXRdq9zrakdvXZm+4Gs1UyCWNkORzb2P9Po 5nhn3krFpilYR7LIky1H0pKb7UUJyyBUSLbXk3SPoUgFh3SyUk/IT/CfgVyAXIBcAMgFyAXIBYBc gFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBcgFyAXADIBcgFgFyAXIBcAMgF yAXIBYBcgFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBcgFyAXADIBcgFgFyA XIBcAMgFyAXIBYBcgFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBccMJyrU0B tJ7jSVpy8Sq6aYVk8BxP0hILi4uWpvLojYBOtZIX1pMtR1yFWHNfU9XcSJbo+qSGA5ccafDr3q3y HY5sCObMzUGsma+Rr6HqyVfXXJvVTC47YZ4zedbRBK2rZGuJVfgxkRfBkZHOB8G+dq64a010Q9/X Z1/Xvtq6fql70poIFoRKTSUmLiQHSLUy47eqaYSI/Sjc+CI/+vJlEncvF928MDff+Xrhq6NrZupg bfOHqINYmaoYizMd3R7ByvLpwsSHvGaChUkzU8cqxPrD15/ypC9vFjbYu2jAgpkPvm59net3U53r STZ34nLZjuU0YS5MtSVaVtKlbfZYmGUi1Kwq4J64XEt5MFTHKsT6XZ48mM5VGuht5hrKyNCxBr5u aiJXYp6UM02gK322IgK81OtLSRZ/VjtOY43VowY45I+5ecquQwaL5So61SfVnc7Fk2qjc4U3mZs/ wFID2NcSGQY8OzCX/J+xXaunyfO9rze+XuvnrplMienuUy0PIZcWA/yXyR9b4faEs1bLdOowoQaa TGFCjeXNxud1JW8U3sTa+miWCxvoTznUx3J95+utBm5q5FiZnBnnjltljw96fV8zucryZRwDpooH edU+V5lga9PJxro2M1sRp/60GB5KwrJ4rZn4pAFcmLB+qc8fOnkh1kdljt8k2J3uH5lZXAe5rGC5 2eey41OaL92OVpibZWAeParXZRsi5K6Bae9WrBDYewr4C11XZI33vn6VYB8lXBDTfqvRqplg8ZZL Za50B6y14VjH3fkg2EwTaBGJFQLsSyPXo5bA96oPEmsYLad13UhttQ7cMHbf8GZ1/conj2ZjCK9z LXFf9DAT5BoovN+qg91HYuU1eUI8xIuduGO/4QkOUhKFUbuHNdLT4JXJXCN1r36U0eq2t/WvcQzB xr+NWMGCXPcK/ZnpaGPVpLX9pS3UMD8dO+THXwfZfa746x7EQq6Dx6Tsy+xkxxMTYiHXN49L2RPy uuIIyHWUMUKoA/hbgAEAGrEmYbv27m4AAAAASUVORK5CYII="
            id="image1885_00000152974769367013840750000018149626290982583682_"
            width={158}
            height={160}
            style={{
              overflow: "visible",
              opacity: 0.3,
              enableBackground: "new"
            }}
            transform="translate(582.112 1101.77) scale(.9663)"
          />
          <g id="g1893_00000037668645509889145960000010079926227884288664_">
            <g id="g1891_00000160192599697316411010000007864852973048446633_">
              <g id="g1889_00000074423439180208215860000011488278676575642772_">
                <path
                  id="path1887_00000017494433664653263810000010631849634486853045_"
                  d="M641.2 1111.2h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
                  className="st1"
                />
              </g>
            </g>
          </g>
        </g>

        {/* Caudal de Permeado */}
        {/* Tarjeta */}
        <g
          className="cursorPointer"
          onClick={() => loadGrafico(8, "Caudal de Permeado", false)}>
          <path
            id="rect1897_00000013891443363135330210000011559357514046931331_"
            d="M591.9 1118.6H730v99.8H591.9z"
            className={getTarjetaClass(8, selected)}
          />
          <g
            id="g1903_00000097491012583839968560000009566109001389786042_"
            transform="translate(1.905)">
            <g id="g1901_00000148663199652235504730000012409506070977180294_">
              <text
                className="st20 st2 st15"
                transform="translate(626.226 1162.052)">
                {"Caudal de"}
              </text>
              <text
                className="st20 st2 st15"
                transform="translate(626.226 1178.852)">
                {"Permeado"}
              </text>
            </g>
          </g>

          <g id="g1925_00000168076699009080944850000014362890201187628450_">
            <text
              id="text1923_00000155827711586203748260000016262030309999382460_"
              className="st16 st2 st17"
              transform="translate(644.766 1203.37)">
              {getScaledValue(datosScada.d8, 1)}
            </text>
          </g>
          <text
            id="text1927_00000116935076154250363600000000482324027527380643_"
            className="st16 st2 st15"
            transform="translate(691.256 1201.112)">
            {"m3/h"}
          </text>
          <g id="g1931_00000008126355344850084030000008144729588934913435_">
            <text
              id="text1929_00000111152640574005183260000013887551564105939360_"
              className="st16 st2 st3"
              transform="translate(645.106 1142.206)">
              {"FIT232"}
            </text>
          </g>
        </g>

        {/* Campana */}
        <g
          className={`${getTemaAlarma(8, loading, datosAlarmas)} cursorPointer`}
          onClick={() => {
            onClickAlarma(8, "Caudal de Permeado");
          }}>
          <path
            id="path1905_00000158747511886444416420000018266901555342709168_"
            d="M607 1192.4c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z"
          />
          <path
            id="path1907_00000181050729118808146850000001181559958006388123_"
            d="M605.3 1191.4c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1z"
          />
          <path
            id="path1909_00000138564996983814961550000018060758122987232191_"
            d="M616.6 1190.1c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z"
          />
          <path
            id="path1911_00000093176419729505210070000018222449888496609693_"
            d="M617.2 1188.3c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1z"
          />
          <path
            id="path1913_00000152960743011397172440000011465823291935840173_"
            d="M618.1 1197.4v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1z"
          />
          <path
            id="path1915_00000017486657115329934960000010972705964873272510_"
            d="M613.1 1204.9c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z"
          />
        </g>

        {/* Fin Caudal de Permeado */}
      </g>
      <circle
        id="circle1935_1_"
        cx={509.7}
        cy={1252.8}
        r={9.2}
        className="st40"
      />
      <g id="g1933_1_">
        <g id="g1895_1_">
          <image
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAB5CAYAAAA00bOLAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABXpJREFUeNrsmm1z2kYURpG0NtiG xG7SNNN0+qX//z+1TZs4bmJsMO8Iupo+m7ksEhCXzhTpnJk7wrLEDOuzdx8tTlqHk7QA/mF9DGES c0yQDKnMcb1PtGTP+VSvU1MJgjVWrKJWpsLPpZK5CrGCUE51pmOmQrBmipWrlr4WOi6rBHMVYmUS quPrwlRb99DBmtmxCpFmviamphItjwVzFWIVEl366vm6Vr3QubauSclgjclYK8lTiDX2NfD1oBrq 3CwWLO5chTDnkujG1xtfP6huJFvHdC9oBqFrTSVT39cn1Z0Rygr2VS6bsdqSqBDrZ9U7X6+RC7kk 12etZG39PmSv3Cyh63hZdMpWxTL4VmL94usnX698dfWGKXI1Tq6VOtOT/Ojod3Mti1O9XlZ1rjPJ FZbEdxLrR527iAI9NCd7he7VNR1rqvxVLJOPkmxuO1e89XCh5e9GS+Erk7faZisCmidYbhrSTIE+ uBE3nsRFYT5krivd0JOpZdsQ0Dy5EpOxusaRq8iPrWXRdq9zrakdvXZm+4Gs1UyCWNkORzb2P9Po 5nhn3krFpilYR7LIky1H0pKb7UUJyyBUSLbXk3SPoUgFh3SyUk/IT/CfgVyAXIBcAMgFyAXIBYBc gFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBcgFyAXADIBcgFgFyAXIBcAMgF yAXIBYBcgFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBcgFyAXADIBcgFgFyA XIBcAMgFyAXIBYBcgFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBccMJyrU0B tJ7jSVpy8Sq6aYVk8BxP0hILi4uWpvLojYBOtZIX1pMtR1yFWHNfU9XcSJbo+qSGA5ccafDr3q3y HY5sCObMzUGsma+Rr6HqyVfXXJvVTC47YZ4zedbRBK2rZGuJVfgxkRfBkZHOB8G+dq64a010Q9/X Z1/Xvtq6fql70poIFoRKTSUmLiQHSLUy47eqaYSI/Sjc+CI/+vJlEncvF928MDff+Xrhq6NrZupg bfOHqINYmaoYizMd3R7ByvLpwsSHvGaChUkzU8cqxPrD15/ypC9vFjbYu2jAgpkPvm59net3U53r STZ34nLZjuU0YS5MtSVaVtKlbfZYmGUi1Kwq4J64XEt5MFTHKsT6XZ48mM5VGuht5hrKyNCxBr5u aiJXYp6UM02gK322IgK81OtLSRZ/VjtOY43VowY45I+5ecquQwaL5So61SfVnc7Fk2qjc4U3mZs/ wFID2NcSGQY8OzCX/J+xXaunyfO9rze+XuvnrplMienuUy0PIZcWA/yXyR9b4faEs1bLdOowoQaa TGFCjeXNxud1JW8U3sTa+miWCxvoTznUx3J95+utBm5q5FiZnBnnjltljw96fV8zucryZRwDpooH edU+V5lga9PJxro2M1sRp/60GB5KwrJ4rZn4pAFcmLB+qc8fOnkh1kdljt8k2J3uH5lZXAe5rGC5 2eey41OaL92OVpibZWAeParXZRsi5K6Bae9WrBDYewr4C11XZI33vn6VYB8lXBDTfqvRqplg8ZZL Za50B6y14VjH3fkg2EwTaBGJFQLsSyPXo5bA96oPEmsYLad13UhttQ7cMHbf8GZ1/conj2ZjCK9z LXFf9DAT5BoovN+qg91HYuU1eUI8xIuduGO/4QkOUhKFUbuHNdLT4JXJXCN1r36U0eq2t/WvcQzB xr+NWMGCXPcK/ZnpaGPVpLX9pS3UMD8dO+THXwfZfa746x7EQq6Dx6Tsy+xkxxMTYiHXN49L2RPy uuIIyHWUMUKoA/hbgAEAGrEmYbv27m4AAAAASUVORK5CYII="
            id="image1885_1_"
            width={158}
            height={160}
            style={{
              overflow: "visible",
              opacity: 0.3,
              enableBackground: "new"
            }}
            transform="translate(430.993 1101.77) scale(.9663)"
          />
          <g id="g1893_1_">
            <g id="g1891_1_">
              <g id="g1889_1_">
                <path
                  id="path1887_1_"
                  d="M490 1111.2h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3H490z"
                  className="st1"
                />
              </g>
            </g>
          </g>
        </g>

        {/* E.C. de Producto */}
        {/* Tarjeta */}
        <g
          className="cursorPointer"
          onClick={() => loadGrafico(10, "E.C. de Producto", false)}>
          <path
            id="rect1897_1_"
            d="M440.7 1118.6h138.1v99.8H440.7z"
            className={getTarjetaClass(10, selected)}
          />
          <g
            id="g1903_1_"
            transform="translate(1.905)">
            <g id="g1901_1_">
              <text
                className="st20 st2 st15"
                transform="translate(498.602 1162.052)">
                {"E.C"}
              </text>
              <text
                className="st20 st2 st15"
                transform="translate(471.783 1178.852)">
                {"de Producto"}
              </text>
            </g>
          </g>

          <g id="g1925_1_">
            <text
              id="text1923_1_"
              className="st16 st2 st17"
              transform="translate(493.647 1203.37)">
              {getScaledValue(datosScada.d10, 1)}
            </text>
          </g>
          <text
            id="text1927_1_"
            className="st16 st2 st15"
            transform="translate(532.826 1201.112)">
            {"uS/cm"}
          </text>
          <g id="g1931_1_">
            <text
              id="text1929_1_"
              className="st16 st2 st3"
              transform="translate(497.31 1142.206)">
              {"AI233"}
            </text>
          </g>
        </g>

        {/* Campana */}
        <g
          className={`${getTemaAlarma(10, loading, datosAlarmas)} cursorPointer`}
          onClick={() => {
            onClickAlarma(10, "E.C. de Producto");
          }}>
          <path
            id="path1905_1_"
            d="M455.8 1192.4c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z"
          />
          <path
            id="path1907_1_"
            d="M454.1 1191.4c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1z"
          />
          <path
            id="path1909_1_"
            d="M465.4 1190.1c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z"
          />
          <path
            id="path1911_1_"
            d="M466 1188.3c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1z"
          />
          <path
            id="path1913_1_"
            d="M466.9 1197.4v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1z"
          />
          <path
            id="path1915_1_"
            d="M461.9 1204.9c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z"
          />
        </g>

        {/* Fin E.C. de Producto */}
      </g>
      <circle
        id="circle1935_2_"
        cx={337}
        cy={1252.8}
        r={9.2}
        className="st40"
      />
      <g id="g1933_2_">
        <g id="g1895_2_">
          <image
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAB5CAYAAAA00bOLAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABXpJREFUeNrsmm1z2kYURpG0NtiG xG7SNNN0+qX//z+1TZs4bmJsMO8Iupo+m7ksEhCXzhTpnJk7wrLEDOuzdx8tTlqHk7QA/mF9DGES c0yQDKnMcb1PtGTP+VSvU1MJgjVWrKJWpsLPpZK5CrGCUE51pmOmQrBmipWrlr4WOi6rBHMVYmUS quPrwlRb99DBmtmxCpFmviamphItjwVzFWIVEl366vm6Vr3QubauSclgjclYK8lTiDX2NfD1oBrq 3CwWLO5chTDnkujG1xtfP6huJFvHdC9oBqFrTSVT39cn1Z0Rygr2VS6bsdqSqBDrZ9U7X6+RC7kk 12etZG39PmSv3Cyh63hZdMpWxTL4VmL94usnX698dfWGKXI1Tq6VOtOT/Ojod3Mti1O9XlZ1rjPJ FZbEdxLrR527iAI9NCd7he7VNR1rqvxVLJOPkmxuO1e89XCh5e9GS+Erk7faZisCmidYbhrSTIE+ uBE3nsRFYT5krivd0JOpZdsQ0Dy5EpOxusaRq8iPrWXRdq9zrakdvXZm+4Gs1UyCWNkORzb2P9Po 5nhn3krFpilYR7LIky1H0pKb7UUJyyBUSLbXk3SPoUgFh3SyUk/IT/CfgVyAXIBcAMgFyAXIBYBc gFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBcgFyAXADIBcgFgFyAXIBcAMgF yAXIBYBcgFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBcgFyAXADIBcgFgFyA XIBcAMgFyAXIBYBcgFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBccMJyrU0B tJ7jSVpy8Sq6aYVk8BxP0hILi4uWpvLojYBOtZIX1pMtR1yFWHNfU9XcSJbo+qSGA5ccafDr3q3y HY5sCObMzUGsma+Rr6HqyVfXXJvVTC47YZ4zedbRBK2rZGuJVfgxkRfBkZHOB8G+dq64a010Q9/X Z1/Xvtq6fql70poIFoRKTSUmLiQHSLUy47eqaYSI/Sjc+CI/+vJlEncvF928MDff+Xrhq6NrZupg bfOHqINYmaoYizMd3R7ByvLpwsSHvGaChUkzU8cqxPrD15/ypC9vFjbYu2jAgpkPvm59net3U53r STZ34nLZjuU0YS5MtSVaVtKlbfZYmGUi1Kwq4J64XEt5MFTHKsT6XZ48mM5VGuht5hrKyNCxBr5u aiJXYp6UM02gK322IgK81OtLSRZ/VjtOY43VowY45I+5ecquQwaL5So61SfVnc7Fk2qjc4U3mZs/ wFID2NcSGQY8OzCX/J+xXaunyfO9rze+XuvnrplMienuUy0PIZcWA/yXyR9b4faEs1bLdOowoQaa TGFCjeXNxud1JW8U3sTa+miWCxvoTznUx3J95+utBm5q5FiZnBnnjltljw96fV8zucryZRwDpooH edU+V5lga9PJxro2M1sRp/60GB5KwrJ4rZn4pAFcmLB+qc8fOnkh1kdljt8k2J3uH5lZXAe5rGC5 2eey41OaL92OVpibZWAeParXZRsi5K6Bae9WrBDYewr4C11XZI33vn6VYB8lXBDTfqvRqplg8ZZL Za50B6y14VjH3fkg2EwTaBGJFQLsSyPXo5bA96oPEmsYLad13UhttQ7cMHbf8GZ1/conj2ZjCK9z LXFf9DAT5BoovN+qg91HYuU1eUI8xIuduGO/4QkOUhKFUbuHNdLT4JXJXCN1r36U0eq2t/WvcQzB xr+NWMGCXPcK/ZnpaGPVpLX9pS3UMD8dO+THXwfZfa746x7EQq6Dx6Tsy+xkxxMTYiHXN49L2RPy uuIIyHWUMUKoA/hbgAEAGrEmYbv27m4AAAAASUVORK5CYII="
            id="image1885_2_"
            width={158}
            height={160}
            style={{
              overflow: "visible",
              opacity: 0.3,
              enableBackground: "new"
            }}
            transform="translate(258.326 1101.77) scale(.9663)"
          />
          <g id="g1893_2_">
            <g id="g1891_2_">
              <g id="g1889_2_">
                <path
                  id="path1887_2_"
                  d="M317.4 1111.2h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3H326c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
                  className="st1"
                />
              </g>
            </g>
          </g>
        </g>

        {/* pH de Producto */}
        {/* Tarjeta */}
        <g
          className="cursorPointer"
          onClick={() => loadGrafico(12, "pH de Producto", false)}>
          <path
            id="rect1897_2_"
            d="M268.1 1118.6h138.1v99.8H268.1z"
            className={getTarjetaClass(12, selected)}
          />
          <g
            id="g1903_2_"
            transform="translate(1.905)">
            <g id="g1901_2_">
              <text
                className="st20 st2 st15"
                transform="translate(325.935 1162.052)">
                {"pH"}
              </text>
              <text
                className="st20 st2 st15"
                transform="translate(299.116 1178.852)">
                {"de Producto"}
              </text>
            </g>
          </g>

          <g id="g1925_2_">
            <text
              id="text1923_2_"
              className="st16 st2 st17"
              transform="translate(320.98 1203.37)">
              {getScaledValue(datosScada.d12, 1)}
            </text>
          </g>
          <text
            id="text1927_2_"
            className="st16 st2 st15"
            transform="translate(375.994 1201.112)">
            {"pH"}
          </text>
          <g id="g1931_2_">
            <text
              id="text1929_2_"
              className="st16 st2 st3"
              transform="translate(324.643 1142.206)">
              {"AI234"}
            </text>
          </g>
        </g>

        {/* Campana */}
        <g
          className={`${getTemaAlarma(12, loading, datosAlarmas)} cursorPointer`}
          onClick={() => {
            onClickAlarma(12, "pH de Producto");
          }}>
          <path
            id="path1905_2_"
            d="M283.2 1192.4c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z"
          />
          <path
            id="path1907_2_"
            d="M281.5 1191.4c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1z"
          />
          <path
            id="path1909_2_"
            d="M292.8 1190.1c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z"
          />
          <path
            id="path1911_2_"
            d="M293.4 1188.3c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1z"
          />
          <path
            id="path1913_2_"
            d="M294.3 1197.4v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1z"
          />
          <path
            id="path1915_2_"
            d="M289.3 1204.9c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z"
          />
        </g>

        {/* Fin pH de Producto */}
      </g>
      <g
        id="g2633_1_"
        transform="translate(34 44)">
        <path
          id="path2629_1_"
          d="M65.9 1098.3c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
          className="st23"
        />
        <path
          id="path2631_1_"
          d="M77.6 1098.3c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
          className="st1"
        />
      </g>
      <g id="g1649_4_">
        <path
          id="path1645_4_"
          d="M1226.4 543.4c0 1-.8 1.9-1.9 1.9h-9c-1 0-1.9-.8-1.9-1.9 0-.5.2-1 .5-1.3l4.5-4.5c.7-.7 1.8-.7 2.6-.1l.1.1 4.5 4.5c.5.4.6.8.6 1.3z"
          className="st23"
        />
        <path
          id="path1647_4_"
          d="M1214.7 543.4c0-.2.1-.4.3-.6l4.5-4.5c.3-.3.9-.3 1.3 0l4.5 4.5c.2.2.3.4.3.6 0 .4-.3.9-.9.9h-9c-.6 0-1-.4-1-.9m-2 0c0 1.6 1.3 2.9 2.9 2.9h9c1.6 0 2.9-1.3 2.9-2.9 0-.8-.3-1.5-.8-2l-4.5-4.5-.1-.1-.1-.1c-1.2-.9-2.9-.9-3.9.2l-4.5 4.5c-.6.5-.9 1.2-.9 2z"
          className="st1"
        />
      </g>
      <path
        d="M974.3 1189V979.7c0-5.6 4.6-10.2 10.2-10.2h31.2"
        className="st5"
      />
      <circle
        id="circle2729_1_"
        cx={1429.7}
        cy={1263.3}
        r={9.3}
        className="st25"
      />
      <circle
        id="circle2729_2_"
        cx={1614.9}
        cy={1263.3}
        r={9.3}
        className="st25"
      />
      <circle
        id="circle2729_3_"
        cx={1780.2}
        cy={1263.3}
        r={9.3}
        className="st25"
      />
      <circle
        id="circle2729-0_1_"
        cx={1272.9}
        cy={1262.8}
        r={9.3}
        className="st25"
      />
      <circle
        id="circle2209"
        cx={1215.3}
        cy={1353.7}
        r={9.2}
        className="st25"
      />
      <g id="g2275">
        <g id="g2241">
          <image
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAB5CAYAAAA00bOLAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABXpJREFUeNrsmm1z2kYURpG0NtiG xG7SNNN0+qX//z+1TZs4bmJsMO8Iupo+m7ksEhCXzhTpnJk7wrLEDOuzdx8tTlqHk7QA/mF9DGES c0yQDKnMcb1PtGTP+VSvU1MJgjVWrKJWpsLPpZK5CrGCUE51pmOmQrBmipWrlr4WOi6rBHMVYmUS quPrwlRb99DBmtmxCpFmviamphItjwVzFWIVEl366vm6Vr3QubauSclgjclYK8lTiDX2NfD1oBrq 3CwWLO5chTDnkujG1xtfP6huJFvHdC9oBqFrTSVT39cn1Z0Rygr2VS6bsdqSqBDrZ9U7X6+RC7kk 12etZG39PmSv3Cyh63hZdMpWxTL4VmL94usnX698dfWGKXI1Tq6VOtOT/Ojod3Mti1O9XlZ1rjPJ FZbEdxLrR527iAI9NCd7he7VNR1rqvxVLJOPkmxuO1e89XCh5e9GS+Erk7faZisCmidYbhrSTIE+ uBE3nsRFYT5krivd0JOpZdsQ0Dy5EpOxusaRq8iPrWXRdq9zrakdvXZm+4Gs1UyCWNkORzb2P9Po 5nhn3krFpilYR7LIky1H0pKb7UUJyyBUSLbXk3SPoUgFh3SyUk/IT/CfgVyAXIBcAMgFyAXIBYBc gFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBcgFyAXADIBcgFgFyAXIBcAMgF yAXIBYBcgFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBcgFyAXADIBcgFgFyA XIBcAMgFyAXIBYBcgFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBccMJyrU0B tJ7jSVpy8Sq6aYVk8BxP0hILi4uWpvLojYBOtZIX1pMtR1yFWHNfU9XcSJbo+qSGA5ccafDr3q3y HY5sCObMzUGsma+Rr6HqyVfXXJvVTC47YZ4zedbRBK2rZGuJVfgxkRfBkZHOB8G+dq64a010Q9/X Z1/Xvtq6fql70poIFoRKTSUmLiQHSLUy47eqaYSI/Sjc+CI/+vJlEncvF928MDff+Xrhq6NrZupg bfOHqINYmaoYizMd3R7ByvLpwsSHvGaChUkzU8cqxPrD15/ypC9vFjbYu2jAgpkPvm59net3U53r STZ34nLZjuU0YS5MtSVaVtKlbfZYmGUi1Kwq4J64XEt5MFTHKsT6XZ48mM5VGuht5hrKyNCxBr5u aiJXYp6UM02gK322IgK81OtLSRZ/VjtOY43VowY45I+5ecquQwaL5So61SfVnc7Fk2qjc4U3mZs/ wFID2NcSGQY8OzCX/J+xXaunyfO9rze+XuvnrplMienuUy0PIZcWA/yXyR9b4faEs1bLdOowoQaa TGFCjeXNxud1JW8U3sTa+miWCxvoTznUx3J95+utBm5q5FiZnBnnjltljw96fV8zucryZRwDpooH edU+V5lga9PJxro2M1sRp/60GB5KwrJ4rZn4pAFcmLB+qc8fOnkh1kdljt8k2J3uH5lZXAe5rGC5 2eey41OaL92OVpibZWAeParXZRsi5K6Bae9WrBDYewr4C11XZI33vn6VYB8lXBDTfqvRqplg8ZZL Za50B6y14VjH3fkg2EwTaBGJFQLsSyPXo5bA96oPEmsYLad13UhttQ7cMHbf8GZ1/conj2ZjCK9z LXFf9DAT5BoovN+qg91HYuU1eUI8xIuduGO/4QkOUhKFUbuHNdLT4JXJXCN1r36U0eq2t/WvcQzB xr+NWMGCXPcK/ZnpaGPVpLX9pS3UMD8dO+THXwfZfa746x7EQq6Dx6Tsy+xkxxMTYiHXN49L2RPy uuIIyHWUMUKoA/hbgAEAGrEmYbv27m4AAAAASUVORK5CYII="
            id="image2231"
            width={158}
            height={160}
            style={{
              overflow: "visible",
              opacity: 0.3,
              enableBackground: "new"
            }}
            transform="matrix(.9663 0 0 -.9663 1138.174 1502.035)"
          />
          <g id="g2239">
            <g id="g2237">
              <g id="g2235">
                <path
                  id="path2233"
                  d="M1234.1 1492.6h45.1c3.5 0 6.3-2.8 6.3-6.3V1384c0-3.5-2.8-6.3-6.3-6.3h-53.7c-1.3 0-2.5-.4-3.5-1.3-6.4-6.7-6.4-6.7-12.9-.2l-.4.3c-1 .8-2.2 1.2-3.4 1.2h-51.7c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h80.5z"
                  className="st1"
                />
              </g>
            </g>
          </g>
        </g>

        {/* Presión de Rechazo */}
        {/* Tarjeta */}
        <g
          className="cursorPointer"
          onClick={() => loadGrafico(6, "Presión de Rechazo", false)}>
          <path
            id="rect2243"
            d="M1147.4 1385.4h138.1v99.8h-138.1z"
            className={getTarjetaClass(6, selected)}
          />
          <text
            id="text2245"
            className="st20 st2 st15"
            transform="translate(1183.461 1424.5)">
            {"Presi\xF3n de "}
          </text>

          <g id="g2267">
            <text
              id="text2265"
              className="st16 st2 st17"
              transform="translate(1197.428 1471.518)">
              {getScaledValue(datosScada.d6, 1)}
            </text>
          </g>
          <text
            id="text2269"
            className="st16 st2 st3"
            transform="translate(1199.882 1404.853)">
            {"PT228"}
          </text>
          <text
            id="text2271"
            className="st16 st2 st15"
            transform="translate(1243.26 1472.456)">
            {"bar"}
          </text>
          <text
            id="text2273"
            className="st20 st2 st15"
            transform="translate(1191.647 1443.5)">
            {"Rechazo"}
          </text>
        </g>

        {/* Campana */}
        <g
          className={`${getTemaAlarma(6, loading, datosAlarmas)} cursorPointer`}
          onClick={() => {
            onClickAlarma(6, "Presión de Rechazo");
          }}>
          <path
            id="path2247"
            d="M1162.5 1461.4c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z"
          />
          <path
            id="path2249"
            d="M1160.8 1460.4c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1z"
          />
          <path
            id="path2251"
            d="M1172.1 1459.1c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z"
          />
          <path
            id="path2253"
            d="M1172.7 1457.3c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1z"
          />
          <path
            id="path2255"
            d="M1173.6 1466.4v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1z"
          />
          <path
            id="path2257"
            d="M1168.6 1473.9c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z"
          />
        </g>

        {/* Fin Presión de Rechazo */}
      </g>
      <path
        d="M1744.3 1508.9h-234.4c-6.2 0-11.2.3-11.6-5.9v-3.3l-1.3-27.8s.3-5.9-5.4-5.9c-7 0-7.2 6.5-7.2 6.5v29.3c0 4-3.2 7.2-7.2 7.2h-70.5M1780.8 1508.8h49.5c6.2 0 11.2 5 11.2 11.2v161c0 6.2-5 11.2-11.2 11.2h-331.2"
        className="st5"
      />
      <circle
        id="circle2209_1_"
        cx={1659.7}
        cy={1508.5}
        r={9.2}
        className="st25"
      />
      <g id="g2275_3_">
        <g id="g2241_3_">
          <image
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAB5CAYAAAA00bOLAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABXpJREFUeNrsmm1z2kYURpG0NtiG xG7SNNN0+qX//z+1TZs4bmJsMO8Iupo+m7ksEhCXzhTpnJk7wrLEDOuzdx8tTlqHk7QA/mF9DGES c0yQDKnMcb1PtGTP+VSvU1MJgjVWrKJWpsLPpZK5CrGCUE51pmOmQrBmipWrlr4WOi6rBHMVYmUS quPrwlRb99DBmtmxCpFmviamphItjwVzFWIVEl366vm6Vr3QubauSclgjclYK8lTiDX2NfD1oBrq 3CwWLO5chTDnkujG1xtfP6huJFvHdC9oBqFrTSVT39cn1Z0Rygr2VS6bsdqSqBDrZ9U7X6+RC7kk 12etZG39PmSv3Cyh63hZdMpWxTL4VmL94usnX698dfWGKXI1Tq6VOtOT/Ojod3Mti1O9XlZ1rjPJ FZbEdxLrR527iAI9NCd7he7VNR1rqvxVLJOPkmxuO1e89XCh5e9GS+Erk7faZisCmidYbhrSTIE+ uBE3nsRFYT5krivd0JOpZdsQ0Dy5EpOxusaRq8iPrWXRdq9zrakdvXZm+4Gs1UyCWNkORzb2P9Po 5nhn3krFpilYR7LIky1H0pKb7UUJyyBUSLbXk3SPoUgFh3SyUk/IT/CfgVyAXIBcAMgFyAXIBYBc gFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBcgFyAXADIBcgFgFyAXIBcAMgF yAXIBYBcgFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBcgFyAXADIBcgFgFyA XIBcAMgFyAXIBYBcgFyAXADIBcgFyAWAXIBcgFwAyAXIBcgFgFyAXIBcAMgFyAXIBYBccMJyrU0B tJ7jSVpy8Sq6aYVk8BxP0hILi4uWpvLojYBOtZIX1pMtR1yFWHNfU9XcSJbo+qSGA5ccafDr3q3y HY5sCObMzUGsma+Rr6HqyVfXXJvVTC47YZ4zedbRBK2rZGuJVfgxkRfBkZHOB8G+dq64a010Q9/X Z1/Xvtq6fql70poIFoRKTSUmLiQHSLUy47eqaYSI/Sjc+CI/+vJlEncvF928MDff+Xrhq6NrZupg bfOHqINYmaoYizMd3R7ByvLpwsSHvGaChUkzU8cqxPrD15/ypC9vFjbYu2jAgpkPvm59net3U53r STZ34nLZjuU0YS5MtSVaVtKlbfZYmGUi1Kwq4J64XEt5MFTHKsT6XZ48mM5VGuht5hrKyNCxBr5u aiJXYp6UM02gK322IgK81OtLSRZ/VjtOY43VowY45I+5ecquQwaL5So61SfVnc7Fk2qjc4U3mZs/ wFID2NcSGQY8OzCX/J+xXaunyfO9rze+XuvnrplMienuUy0PIZcWA/yXyR9b4faEs1bLdOowoQaa TGFCjeXNxud1JW8U3sTa+miWCxvoTznUx3J95+utBm5q5FiZnBnnjltljw96fV8zucryZRwDpooH edU+V5lga9PJxro2M1sRp/60GB5KwrJ4rZn4pAFcmLB+qc8fOnkh1kdljt8k2J3uH5lZXAe5rGC5 2eey41OaL92OVpibZWAeParXZRsi5K6Bae9WrBDYewr4C11XZI33vn6VYB8lXBDTfqvRqplg8ZZL Za50B6y14VjH3fkg2EwTaBGJFQLsSyPXo5bA96oPEmsYLad13UhttQ7cMHbf8GZ1/conj2ZjCK9z LXFf9DAT5BoovN+qg91HYuU1eUI8xIuduGO/4QkOUhKFUbuHNdLT4JXJXCN1r36U0eq2t/WvcQzB xr+NWMGCXPcK/ZnpaGPVpLX9pS3UMD8dO+THXwfZfa746x7EQq6Dx6Tsy+xkxxMTYiHXN49L2RPy uuIIyHWUMUKoA/hbgAEAGrEmYbv27m4AAAAASUVORK5CYII="
            id="image2231_3_"
            width={158}
            height={160}
            style={{
              overflow: "visible",
              opacity: 0.3,
              enableBackground: "new"
            }}
            transform="matrix(.9696 0 0 -.9696 1582.813 1657.043)"
          />
          <g id="g2239_3_">
            <g id="g2237_3_">
              <g id="g2235_3_">
                <path
                  id="path2233_3_"
                  d="M1678.5 1647.4h45.1c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-53.7c-1.3 0-2.5-.4-3.5-1.3-6.4-6.7-6.4-6.7-12.9-.2l-.4.3c-1 .8-2.2 1.2-3.4 1.2H1598c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h80.5z"
                  className="st1"
                />
              </g>
            </g>
          </g>
        </g>

        {/* Presión Salida concentrado recuperador de energía */}
        {/* Tarjeta */}
        <g
          className="cursorPointer"
          onClick={() =>
            loadGrafico(
              19,
              "P. Salida concentrado recuperador de energía",
              false
            )
          }>
          <path
            id="rect2243_3_"
            d="M1591.8 1540.2h138.1v99.8h-138.1z"
            className={getTarjetaClass(19, selected)}
          />

          <g id="g2267_3_">
            <text
              id="text2265_3_"
              className="st16 st2 st17"
              transform="translate(1641.85 1626.286)">
              {getScaledValue(datosScada.d19, 1)}
            </text>
          </g>
          <text
            id="text2269_3_"
            className="st16 st2 st3"
            transform="translate(1644.305 1559.621)">
            {"PT229"}
          </text>
          <text
            id="text2271_3_"
            className="st16 st2 st15"
            transform="translate(1700.21 1627.224)">
            {"bar"}
          </text>
        </g>
        <path
          d="M1599.9 1567.2h121.9v38.8h-121.9z"
          style={{
            fill: "none"
          }}
        />
        <text
          className="st20 st2 st42"
          transform="translate(1622.21 1575.785)">
          {"Presi\xF3n Salida "}
        </text>
        <text
          className="st20 st2 st42"
          transform="translate(1627.91 1588.785)">
          {"concentrado "}
        </text>
        <text
          className="st20 st2 st42"
          transform="translate(1599.21 1601.785)">
          {"recuperador de energ\xEDa"}
        </text>

        {/* Campana */}
        <g
          className={`${getTemaAlarma(19, loading, datosAlarmas)} cursorPointer`}
          onClick={() => {
            onClickAlarma(19, "P. Salida concentrado recuperador de energía");
          }}>
          <path
            id="path2247_3_"
            d="M1606.9 1616.2c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z"
          />
          <path
            id="path2249_3_"
            d="M1605.2 1615.2c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1z"
          />
          <path
            id="path2251_3_"
            d="M1616.5 1613.9c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z"
          />
          <path
            id="path2253_3_"
            d="M1617.1 1612.1c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1z"
          />
          <path
            id="path2255_3_"
            d="M1618 1621.2v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1z"
          />
          <path
            id="path2257_3_"
            d="M1613 1628.7c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z"
          />
        </g>

        {/* Fin Presión Salida concentrado recuperador de energía */}
      </g>

      <path
        d="M1841.5 1681v45.9"
        className="st5"
      />
      <path
        d="M1832.1 1732.5v8.6l4.8 4.6 3.1 3.1v26.5h3v-26.5l3.3-3.1 4.6-4.6v-8.6z"
        className="st28"
      />
      <circle
        id="circle2157"
        cx={1887.5}
        cy={638}
        r={9.2}
        className="st25"
      />
      <g id="g2203">
        <g id="g2167">
          <image
            xlinkHref="data:image/png;base64,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"
            id="image2159"
            width={179}
            height={140}
            style={{
              overflow: "visible",
              opacity: 0.2,
              enableBackground: "new"
            }}
            transform="translate(1705.084 696.414) scale(.9687)"
          />
          <g id="g2165">
            <g id="g2163">
              <path
                id="path2161"
                d="M1814.7 701.2h42.1c3.4 0 6.3 2.8 6.3 6.3v33.2c0 .8.3 1.6.8 2.2l5.3 6.5c1.1 1.3 1 3.3-.1 4.6l-5.1 5.5c-.6.6-.9 1.5-.9 2.4v36.9c0 3.4-2.8 6.3-6.3 6.3h-142.5c-3.4 0-6.3-2.8-6.3-6.3v-91.3c0-3.5 2.8-6.3 6.3-6.3h100.4z"
                className="st1"
              />
            </g>
          </g>
        </g>

        {/* E.C. de Alimentación */}
        {/* Tarjeta */}
        <g
          className="cursorPointer"
          onClick={() => loadGrafico(9, "E.C. de Alimentación", false)}>
          <path
            id="rect2169"
            d="M1714.3 701.2h143.8v103.9h-143.8z"
            className={getTarjetaClass(9, selected)}
          />
          <text
            id="text2171"
            className="st20 st2 st15"
            transform="translate(1780.8 742.916)">
            {"E.C"}
          </text>

          <g id="g2193">
            <text
              id="text2191"
              className="st16 st2 st17"
              transform="translate(1770.52 787.688)">
              {getScaledValue(datosScada.d9, 1)}
            </text>
          </g>
          <text
            id="text2195"
            className="st16 st2 st15"
            transform="translate(1810.3 788.293)">
            {"mS/cm"}
          </text>
          <g id="g2199">
            <text
              id="text2197"
              className="st16 st2 st3"
              transform="translate(1780.8 722.915)">
              {"AI208"}
            </text>
          </g>
          <text
            id="text2201"
            className="st20 st2 st15"
            transform="translate(1740.892 760.25)">
            {"de Alimentaci\xF3n"}
          </text>
        </g>

        {/* Campana */}
        <g
          className={`${getTemaAlarma(9, loading, datosAlarmas)} cursorPointer`}
          onClick={() => {
            onClickAlarma(9, "E.C. de Alimentación");
          }}>
          <path
            id="path2173"
            d="M1728.1 777.6c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.1-2.5 2.2z"
          />
          <path
            id="path2175"
            d="M1726.4 776.6c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9s1.8-2.2 3-2.5c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-2.9 1.5-3.7 3z"
          />
          <path
            id="path2177"
            d="M1737.7 775.3c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.7-2.5-2.2z"
          />
          <path
            id="path2179"
            d="M1738.3 773.4c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.3-2.3-2.4-3.7-3z"
          />
          <path
            id="path2181"
            d="M1739.1 782.6v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.7-.9-1.3-.9-2.1z"
          />
          <path
            id="path2183"
            d="M1734.1 790c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.8 1.7 1.6 1.7z"
          />
        </g>

        {/* Fin E.C. de Alimentación */}
      </g>
      <circle
        id="circle2157_1_"
        cx={1887.5}
        cy={755}
        r={9.2}
        className="st25"
      />
      <g id="g2203_1_">
        <g id="g2167_1_">
          <image
            xlinkHref="data:image/png;base64,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"
            id="image2159_1_"
            width={179}
            height={140}
            style={{
              overflow: "visible",
              opacity: 0.2,
              enableBackground: "new"
            }}
            transform="matrix(.965 0 0 .965 1706.435 581.57)"
          />
          <g id="g2165_1_">
            <g id="g2163_1_">
              <path
                id="path2161_1_"
                d="M1816.2 586.1h42.1c3.4 0 6.3 2.8 6.3 6.3v33.2c0 .8.3 1.6.8 2.2l5.3 6.5c1.1 1.3 1 3.3-.1 4.6l-5.1 5.5c-.6.6-.9 1.5-.9 2.4v36.9c0 3.4-2.8 6.3-6.3 6.3h-142.5c-3.4 0-6.3-2.8-6.3-6.3v-91.3c0-3.5 2.8-6.3 6.3-6.3h100.4z"
                className="st1"
              />
            </g>
          </g>
        </g>

        {/* ORP Entrada Membranas */}
        {/* Tarjeta */}
        <g
          className="cursorPointer"
          onClick={() => loadGrafico(3, "ORP Entrada Membranas", false)}>
          <path
            id="rect2169_1_"
            d="M1715.8 586.1h143.8V690h-143.8z"
            className={getTarjetaClass(3, selected)}
          />
          <text
            id="text2171_1_"
            className="st20 st2 st15"
            transform="translate(1777.53 627.848)">
            {"ORP"}
          </text>

          <g id="g2193_1_">
            <text
              id="text2191_1_"
              className="st16 st2 st17"
              transform="translate(1773.023 672.62)">
              {getScaledValue(datosScada.d3, 1)}
            </text>
          </g>
          <text
            id="text2195_1_"
            className="st16 st2 st15"
            transform="translate(1819.627 673.225)">
            {"mv"}
          </text>
          <g id="g2199_1_">
            <text
              id="text2197_1_"
              className="st16 st2 st3"
              transform="translate(1777.53 607.847)">
              {"AI207"}
            </text>
          </g>
          <text
            id="text2201_1_"
            className="st20 st2 st15"
            transform="translate(1728.925 645.181)">
            {"Entrada Menbranas"}
          </text>
        </g>

        {/* Campana */}
        <g
          className={`${getTemaAlarma(3, loading, datosAlarmas)} cursorPointer`}
          onClick={() => {
            onClickAlarma(3, "ORP Entrada Membranas");
          }}>
          <path
            id="path2173_1_"
            d="M1729.6 662.5c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.1-2.5 2.2z"
          />
          <path
            id="path2175_1_"
            d="M1727.9 661.5c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9s1.8-2.2 3-2.5c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-2.9 1.5-3.7 3z"
          />
          <path
            id="path2177_1_"
            d="M1739.2 660.2c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.7-2.5-2.2z"
          />
          <path
            id="path2179_1_"
            d="M1739.8 658.3c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.3-2.3-2.4-3.7-3z"
          />
          <path
            id="path2181_1_"
            d="M1740.6 667.5V666c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.7-.9-1.3-.9-2.1z"
          />
          <path
            id="path2183_1_"
            d="M1735.6 674.9c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.8 1.7 1.6 1.7z"
          />
        </g>

        {/* Fin ORP Entrada Membranas */}
      </g>
    </svg>
  );
};
export default ScadaAquaChileRH_ORVF8156;

import * as React from "react";
import {
  getColor,
  getColorConexion,
  getConexion,
  getScaledValue,
  getTarjetaClass,
  getTemaAlarma
} from "../../../../commons/scada/scada";

const ScadaSealand2 = (props) => {
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
      viewBox="0 0 1429.5 2208.8"
      style={{
        enableBackground: "new 0 0 1429.5 2208.8"
      }}
      xmlSpace="preserve"
      {...props}>
      <style>
        {
          ".st0,.st1{fill:none;stroke:#00aeed;stroke-width:4;stroke-miterlimit:10}.st1{stroke:#35ace8}.st2{fill:#323e48}.st3,.st4{fill:none;stroke:#323e48;stroke-width:4;stroke-miterlimit:10}.st4{stroke:#fff;stroke-width:2}.st5{fill:#606060}.st7{font-size:11px}.st8{opacity:7.000000e-02;fill:#323e48}.st9{fill:#fff}.st15{fill:#666}.st16{font-size:14px}.st18{font-size:17px}.st21{fill:#2f3e49}.st22{fill:#00aeed}.st23,.st24{opacity:.15;fill:#0e76e7;enable-background:new}.st24{opacity:.6;fill:none;stroke:#cbcbcb;stroke-width:2;stroke-miterlimit:10}.st25{fill:#cbcbcb}.st26{fill:none;stroke:#2f3e49;stroke-width:4;stroke-miterlimit:10}.st27{fill:#00a39b}.st28{fill:#0e76e7}.st29{fill:none;stroke:#b3b3b3;stroke-width:2;stroke-miterlimit:10}.st29,.st30{enable-background:new}.st31{fill:#ccc}.st33{font-size:15px}.st34{font-size:13px}.st35{fill:#fff;stroke:#35ace8;stroke-width:4;stroke-miterlimit:10}.st38{fill:#e6e6e6}.tarjeta{fill:#ffffff}.tarjetaSeleccionada{fill:#3574e0;opacity:.15}.cursorPointer{cursor:pointer}.cursorNormal{cursor:default}.campana{fill:#3474E0;}.campana:hover{fill:#7c7c7c;}.campanaVacia{fill:#c2c2c1;}.campanaVacia:hover{fill:#7c7c7c;}.campanaDesconectada{fill:#c2c2c1;}"
        }
      </style>
      <path
        className="st0"
        d="M1174.3 1257.9H1342c6.5 0 11.7 5.2 11.7 11.7v412.3c0 6.5-5.2 11.7-11.7 11.7H83.9c-4.2 0-7.6 3.4-7.6 7.6v99.7c0 4.2 3.4 7.6 7.6 7.6h217.2c2.8 0 5.1 2.3 5.1 5.1v36.3"
      />
      <path
        className="st1"
        d="M760.4 1545.5c0 3.5-2.8 6.3-6.3 6.3h-13M760.4 1497.5c0 3.5-2.8 6.3-6.3 6.3h-13"
      />
      <path
        className="st0"
        d="M760.4 1326.1v220.3"
      />
      <path
        className="st1"
        d="M1210.9 1380.2c0 3.5-2.8 6.3-6.3 6.3h-30.4"
      />
      <path
        className="st0"
        d="M1210.9 1259.9v121.2"
      />
      <path
        className="st1"
        d="M693.2 1545.5c0 3.5 2.8 6.3 6.3 6.3h13"
      />
      <path
        className="st0"
        d="M693.2 1503.8v42.6"
      />
      <path
        className="st2"
        d="M734.2 1493.6h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM719 1497.5l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st2"
        d="m734.6 1508.1-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st3"
        d="M726.8 1492.6v10"
      />
      <path
        className="st4"
        d="M717.8 1484.6h18M726.8 1485.6v8"
      />
      <path
        className="st2"
        d="m719 1545.9 7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st2"
        d="m734.6 1556.5-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <text
        transform="translate(706.988 1522.844)"
        className="st5 st7">
        {"VE-145"}
      </text>
      <path
        className="st2"
        d="M1168.3 1249h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM1153.1 1252.9l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st2"
        d="m1168.7 1263.5-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st3"
        d="M1160.9 1248v10"
      />
      <path
        className="st4"
        d="M1151.9 1240h18M1160.9 1241v8"
      />
      <text
        transform="translate(1141.11 1278.153)"
        className="st5 st7">
        {"VE-140"}
      </text>
      <path
        className="st2"
        d="M1168.3 1377.3h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM1153.1 1381.2l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st2"
        d="m1168.7 1391.8-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st3"
        d="M1160.9 1376.3v10"
      />
      <path
        className="st4"
        d="M1151.9 1368.3h18M1160.9 1369.3v8"
      />
      <text
        transform="translate(1141.11 1406.542)"
        className="st5 st7">
        {"VE-209"}
      </text>
      <path
        className="st2"
        d="m896.5 1380.7 7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st2"
        d="m912.1 1391.3-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st0"
        d="M570.1 1533.1v-23c0-3.5 2.9-6.4 6.4-6.4h136.1M1061 1490v-97.5c0-3.5 2.9-6.4 6.4-6.4h79.5"
      />
      <path
        className="st8"
        d="M831.8 476.7c0-27.5-41.4-50-92.8-50s-92.8 22.5-92.8 50h.7c-.4 1.4-.7 2.8-.7 4.4v129.3c0 14.4 17.9 26.4 40.3 28.1v14.6H714v-14.3h47.5v14.3H789v-14.6c23.6-.8 42.5-13.1 42.5-28.1V481.1c0-1.4-.4-3.1-.7-4.4h1z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.2,
          enableBackground: "new"
        }}
        width={289}
        height={178}
        xlinkHref="data:image/png;base64,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"
        transform="translate(1101.812 37.638) scale(.9944)"
      />
      <path
        className="st9"
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
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAAB8CAYAAABqtVxXAAAACXBIWXMAAAs6AAALOgFkf1cNAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABJxJREFUeNrs2mtPG0cUgOG1vTaX EKA0ShRVVfv/f1f7oblAuISLr52VzsCwrMHEJk2q55GODDbrD4lezYy9VQX8NHrf6Rqg2+Il4usV j4KFzQa7WDXe3gqvd03fagsbiXQeUz6/+JZgc5jN46BjrLawXrCz1uR4l4bbe2JVrWOGabbSjGKG Ea2VFp4fag5zkmZcTPP7NGZRxHurXhJrP15rIt1O86qY3XiuLlZgwcLzgm3ivElzleZrmsuYq3h+ EtfMngo2x7qTZi/NfppfYg7j912rLDw71vw4jRX1MmI9jTlJ8yXNRbw2KQJ/EGy5DW5W0Ndpfk3z Ns27eHyT5iCCHcXfChVWN49VMwd7HpF+TPMhdrWD1jn29jxbP7K6Nivq+zS/x7yPYPfj9VH8fd// ATw72GmxwjYr61HsaAfFKjyt7j6MWnRtifsR4l68QRPpn2n+iJ+P4hy71TrDAqtvjXO0+Qx7FDva Ubw2juevY1t8+8lx3VpdB3HRq1hhm63wbzHvYnXdjvOrD5zg24JtR5s/E5pHqGexTT6P3/NKW9Wt 8+sgLtyJOI+KOYiQR5XvYWFT0Q6LbXAT72lxnv0cr4+jtUXXp8T565zdCHQvHvO5tXZuhbX0iiNo v7q7iaJZFA/jca+6+/r09t6Irk+J8wdPw6r7RgnnVthsvMOYfM/DbnH0HJS99TsuLs+zbkWEl421 fRwdFotk3fqbzq1t183+lWDhxaPtFbvYfkeDj55FeyKF/yzczv58eAQ/brgPCBZ+IoIFwQKCBcEC ggUEC4IFBAsIFgQLCBYQLAgWECwgWBAsIFhAsCBYQLCAYEGwgGABwYJgAcECggXBAoIFBAuCBQQL CBYECwgWECwIFhAsIFgQLCBYQLAgWECwgGBBsIBgAcGCYAHBAoIFwQKCBQQLggUECwgWBAsIFhAs CBYQLCBYECwgWECwIFhAsIBgQbCAYAHBgmABwQKCBcECggUEC4IFBAsIFgQLCBYQLAgWECwgWBAs IFj4/1sUs3Kwi6cuBF4s1KX99R+5cN4a8cLLhdo0NksziZnG7/e6qzsuLi8cx+Q3GKbp2UrDRoPN vd3EXBfd3Vss647Sp3HRVZrLNF/j5900gyLann9rWDvWeRFp09p5motobxw9dq6wufRpBNpceBJz EKE2bz6K6wQL65lHb02sp2mO03xO8yXNWTw/LVfZuog1v8Ek/vA8Lmze4HVE2gS9VQQrWljv7DqJ BfIkgj2O7i5i5Z1Fl/dW2PJDpnEszU2oexFoL970MM2OYGGjwebe/o75ECvuVbzeeYatouYc7HFs g6t4rql+vwi2L1hY+/w6ifNq09s/af5K8zF2uNfLVtjyDfIZNsc4jYA/FSuuFRY2E+wsejuLaD/F ansRMc+qRz4lrlrVt5fs7Vh1B0WsooXnx5of8672MiI9j5/zB0737n1Y9j1sucfOK+6oiNV2GDa7 yuZ7Hm6qu69zHtywtCy6vN3tR6CDVqi2w7CZYBfFSltO562Jj0VXRtlv/S5W2Pz2uGuHW60abPt1 kcL3ibeqlty3P/BvBD9ksJ3+FWAASiNgV8COhu0AAAAASUVORK5CYII="
        transform="translate(36.959 37.638) scale(.9918)"
      />
      <path
        className="st9"
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
        className="st15 st16">
        {"Funcionando"}
      </text>
      <text
        transform="translate(1160.93 125.915)"
        className="st15 st16">
        {"Movi\xE9ndose"}
      </text>
      <text
        transform="translate(1160.93 145.915)"
        className="st15 st16">
        {"Falla"}
      </text>
      <text
        transform="translate(1160.93 165.915)"
        className="st15 st16">
        {"Bloqueada"}
      </text>
      <text
        transform="translate(1160.93 185.915)"
        className="st15 st16">
        {"Detenida"}
      </text>
      <text
        transform="translate(75.497 77.731)"
        className="st5 st16">
        {"Conectividad de Planta"}
      </text>
      <text
        transform="translate(109.29 128.21)"
        className="st5 st18">
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
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAnCAYAAABjYToLAAAACXBIWXMAAArrAAAK6wGCiw1aAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA59JREFUeNrsmItv0zAQxmPXfe5Z 2IAxAf///7XB0LqNtOsjTVZjo8/Tx+E4yR5CQkT6lK7NLj/fnc9nZ9n/6x+51CvbsX8DTNXcY2C2 K6R6JpDGPXyWUEE7AdnoTfUMIK9eRAz1QNqRGDh6mQ5QEmhAGjr18b0iqBLaQiVBPqTCrFpCSSAP MoH2cR/iN4UXe4jCaU1a4btSQO6k90wHKAY6cDp0Oob85z0BtgXMvdMCmkP++w1BhmvXBkyRfJhG AJo6vXU6cTrF5yN4bhgB80A/nO6cbqAFaYVnLaVBI5gWUB7kg9MZ9I7Agsc0hTJ4zIPdOl07fSNI HZnBSbDgqZBT/qVvAPPZ6ZPTOUCn8NYI9jSMV8JrdxiAT4UZns8iM/dXSE2DtwwMHALio9MX6Ayw B3hmIGbljpL8EM9NaKCGJkiYtY9wpqE09GHsmMDOcT+FB8ZUKmRohnh5mLHhfQMALBHqFSZDlQLL KIxDhGkKkPfQCWAnwlMqUvl7FOIML1fw0Bz5lwOwCHCmRdIz2Anl1BjgMaiMQmphK8CW8MoaeXeN iZDTDFUmEUb22BE8NEWuhPDpyBpZV8ANvDuBV45JByIlqlQoDRXUfUreUSSn2qyxYbAhEmPYZe8/ DtYkiqqmUY4hCaU6NgBsc0SAf0RAt1i0DanXInxd1t0+TYzf7OqO3cVLdbyNl060xNwzcWXu3I1G 7IZuoqqz2wRWUXUOFbp6AqBN2IzZrW2HM2r0uJda47tKtMtNUBl5nvu0JcR9mn/G6oSr5SK8oOUj jLDJa9zfy45jjqIaqv6aim/tIh5GV2BEOar0HQrimGaToV6/Dk4OMkcbdAObC6yVwWNJgzpSd7gQ mkQt4wTnlMjR8szQl104XWJZymkht71EacgiNadfU/V5i8azmPNpDqAr6BJgV/DaEl7d1YHVbWa1 qGdyi1aSCoyeO1j20lfSTITSNoVStVgBJFzIpYJm8j210t/hoVmkq3ickV6moe7I/AhhtABYIkSh OxjQ7wFyhWduCewGcDlsbwmqcZe0o8augPGMZus9Xha2bwwW/m9DYLxLmoutXMXearOvtLQV48q9 QV7cwlt7BKbJ24XYWzJM2FtuJdRTduKydIypRxsg1Io8XuLlG8q5DR0XSE91ApOz0ojyMaC61hNt dUW5VtI9dsBin3PaEztc0Yk+TXYmDxEY+5LnY02yNTtsCWNf60RRJf6OHTG1OrTz108BBgCmMNDM 7Ja0OAAAAABJRU5ErkJggg=="
        transform="translate(66.583 102.711) scale(1.0206)"
      />
      <circle
        className="st9"
        cx={85.5}
        cy={122.2}
        r={12.1}
      />

      <circle
        cx={85.5}
        cy={122.1}
        r={8.9}
        fill={getColorConexion(datosScada.con)}
      />

      <text
        transform="translate(1134.966 77.731)"
        className="st5 st16">
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
        className="st21"
        d="M502.5 570.8h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
      />
      <path
        className="st22"
        d="M431.6 567.3c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st9"
        d="M431.6 555.6c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st0"
        d="M370.1 560.4h58.6"
      />
      <path
        className="st22"
        d="M222 567.3c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st9"
        d="M222 555.6c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st0"
        d="M76.3 560.4h142.8M337.8 1014.1h529.1"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        width={39}
        height={39}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7xJREFUeNrsWNlS20AQ9OqwTGyC OUICuf7/u3JDuGzjS0ab2aoeqmu8tmQlJHlAVV0Sshi1emdme7fTeT6ej9aH+2+CmFh89oAe/m8T ZDIBibnvDUkfIf1kBJVQQtcpkdWjMvB09k9B0BlCAZkgxzkl0oHAg2BlUOF+LVHXUjUmVQh6QEFE E5AoBUvBQjDH9RL3V3hm49BnLcl1QeiFoC/YB8Lfe/jd4eWB2EwwEdwTZvitJFXXCilrQa4AkUBo KDgCwvVL/Fbgf1ZQLRAaC+4Et8Ad7k3xbBkjmbVQLhA4EJwIXgOnIHkARWMER4IbwZXgEugi7gTv WiOZ7VAQOYYvqPRKcC54J3greAOCqmBOQ7zEcI6g3CU916XWpDmoeVmroIsM7UBwLDgTfBB8BMGg 4CGpl1GLWSHXDoEDxOkhrjdVXbGKTYY4oaEdgkwg9R44A+kBFM6MKkqyD2iOKjmu8tK0oY0Kukju 9aHAKUidY2hPoEoPQ5uamaSDl+WIkyNuBWJT5OiEKlvVrM3BBM/0ULVHyL9TnI9wf48S3m2Iw7OO krtHNd8AIxAutdFnW9Tj4uhhCLWtHENNHdacZhB7eMRi8n2oznnZx3sy+pCtCurwavUOEGhoEn0b OTtbJTQD9UBqYBo8E3RNhlinMw22T4leR26T88koJ4tIrEfDkTRo0BkC7NGXFpGCaGM2MkJqCHZi BF0EbA66xgy4iL1q6p5i74oO4b9y49YX+iZmwUcCVOTp1CY9kE3iSm1CqmNmjxVNb2uEkwZfWNJ8 qpgT0aqFavzBi8gs8vghTQnOyDKNyc8tjemsI+fJxKpPnNJHL42SjRRUyzQhLzcCyWjQGuWUHHtE jbcgy7XRbnmz4ClBZAxywc/9RD8szPpjrU1ElJtRrGvgFgLMzTD7tKZX2X6YU+O27cYuK6uIalOQ Cx/5XfBF8FnwFfdGeO5xCZC2WPemNPFbhWxl8mJpguFkcp9wvoCKUyo+X0fQ1eTnA6lTRlZvc7JS 6lguDLmg3jeQHlv16syCj7jiMeXbCvmkLz80lj+l57jIrojoDyI3j7SZWj/IJJemIhfmpUMUTp/W GpbgHRXGNXWEmR3aXVZ1niQv6W9eDF3D6bAF0xxdUYFMoNYI19O6VuV2nHsT4xO7tKugLkc9nSO7 X5rc5EV7afZtfnvrw5FDTolsTtYpMdtvWtml2aOp3Z9pu3lkW08S2d1yJoerDTtd/im335r6Or8B f2WH1W3ZZbUEd95l/ZNbwNvi+bYBfwkwAI+Ouyyh31L4AAAAAElFTkSuQmCC"
        transform="translate(463.851 567.512) scale(.8974)"
      />
      <circle
        className="st9"
        cx={481.7}
        cy={585.3}
        r={10.9}
      />
      <circle
        className="st23"
        cx={481.7}
        cy={585.1}
        r={8}
      />
      <text
        transform="translate(466.524 625.001)"
        className="st5 st7">
        {"P-01B"}
      </text>
      <path
        className="st21"
        d="M502.5 492.3h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7V495c0-1.5-1.2-2.7-2.7-2.7z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        width={39}
        height={39}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA6lJREFUeNrsmAtT2zAQhCNbjgkN SaEtLW2n//9/9c0zQB4Oju1Knb3McsiJnALT6dQzOwTHVj6f7k4r93r/j3/8MM8wZvM3ABr6GwJs dgU2jwDGSjYAhvRkgAzESgnSAKKGKvpcx4KaHeEExss6ZSRLkAK2ciqhFVTFgNod4ATMw/Sd9pwG kP+cE6SHuHNaOhWkJc4LbN2Wn2YHOAswDzR0OnAaQS+c9vG9wY97mLnTVGlGsCs19Z0jyHA5QMZO R06voEOCzAmwAMyN07XTldOl0wTnprimxG/dg7Qdc64PAA/zxunE6Z3TW8CO8X0f9wjgHDAe7Nzp zOmUrpOZLAmuiQFkuAzT99Lp2OkjSQAPcE1G0fC5tkCkJrhuhBTJCI6LpY4B5P5mUQAHmM73Tp+g DwDm6KWqipeAHGMMSYNEVfqK4H63KRuZezy1xwCU6J3g/FBVcI+iMUBkpdL7BCdVzpVdbQPk6IUA TyCe2j1MWaKmTabakhKKrJ/6W0gqeyVRtBH5x9MrxeH1Gvk4VFExAUC9FNaAmyEvL6myM0SyastB Hb0MAEMAHamKzXFNGuir/H9Ky98ADzyGRkgBSZEUUVznyqYIZtSURzTgNrg2t8MPvY9xODdTDtK2 IhHAHIMNacB+IOdi1v1EreF9GitVgK0RNCoH9ZqbE1zySIYjDeTwg8FNwHzyMmcDg3VZ082G32ud wpiDu3vdxXBGjLnRH9oN+4cm4OekmZYBP2cioeRvyCc+AE0inrCkpWoOFdSr6g7RlDH5gUOryNof xgLKYn9DFmmhvFzTEa4gnzjHePLQTYxZ4GkoyI2Ixqhoq1qILhxe7irlbsQjXtMyV25zMxyJmp72 FmDnyhywMbCBvijRWAFOvKE3rhfQhIzrvVxMI8xCqLlmgRVEV3pFM3BHa+8NHvKH0xfoO0CnuG6d h+kfbDVD20pdmUvak8gMnAHoM/QN5yaY+pLyMMryS2IvkCsZeTmOikz7gJo5T+0M9/tI/XT6Cp3i /ELnX0yRyCG7M0N2qURkrmGVDsmViPVqAkV2QXuSU9w7besINrKx1vRDvNeQqJzDivGeJKGHK6hq r6AJ7uVdXaXblem4uLN5yMkuDaF95awbtSeZqX2x9NJS979dN+4mUNE5tEfWiatbV3IRWDKrtvW9 67sZE6jmTU6noShW6r2MBmse8+VRG2wSsFBNoEc+6dutEGioube9I+w9x/vBtjFMpNWKPtLe8xw7 m9tfAgwAxQS250ONARgAAAAASUVORK5CYII="
        transform="translate(463.851 489.032) scale(.8974)"
      />
      <circle
        className="st9"
        cx={481.7}
        cy={506.8}
        r={10.9}
      />
      <circle
        className="st23"
        cx={481.7}
        cy={506.6}
        r={8}
      />
      <text
        transform="translate(466.524 546.522)"
        className="st5 st7">
        {"P-01A"}
      </text>
      <path
        className="st24"
        d="M602.6 550.4v32"
      />
      <path
        className="st25"
        d="M607.4 555.6c0 .9-.7 1.6-1.6 1.6h-6.3c-.9 0-1.6-.7-1.6-1.6 0-.4.2-.8.5-1.1l3.1-3.1c.6-.6 1.5-.6 2.2-.1l3.2 3.2c.3.3.5.7.5 1.1z"
      />
      <path
        className="st9"
        d="M598.8 555.6c0-.2.1-.3.2-.4l3.1-3.1c.2-.2.6-.2.9 0l3.1 3.1c.1.1.2.3.2.4 0 .3-.2.6-.6.6h-6.3c-.3 0-.6-.3-.6-.6m-2 0c0 1.4 1.2 2.6 2.6 2.6h6.3c1.4 0 2.6-1.2 2.6-2.6 0-.7-.3-1.3-.8-1.8l-3.1-3.1-.1-.1-.1-.1c-1.1-.9-2.6-.8-3.5.2l-3.1 3.1c-.5.5-.8 1.1-.8 1.8z"
      />
      <text
        transform="translate(571.298 675.072)"
        className="st5 st7">
        {"Cloro"}
      </text>
      <path
        className="st26"
        d="M605.6 593.4h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
      />
      <path
        className="st21"
        d="M595.1 602.4h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
      />
      <path
        className="st27"
        d="M565.1 614.1h38.8v40h-38.8z"
      />
      <path
        className="st26"
        d="M603.9 607.4v45.2c0 .7-.4 1.3-.8 1.3H566c-.5 0-.8-.6-.8-1.3v-45.2"
      />
      <path
        className="st24"
        d="M134.1 1019.5v32"
      />
      <path
        className="st25"
        d="M138.9 1024.8c0 .9-.7 1.6-1.6 1.6H131c-.9 0-1.6-.7-1.6-1.6 0-.4.2-.8.5-1.1l3.1-3.1c.6-.6 1.5-.6 2.2-.1l3.2 3.2c.3.3.5.7.5 1.1z"
      />
      <path
        className="st9"
        d="M130.3 1024.8c0-.2.1-.3.2-.4l3.1-3.1c.2-.2.6-.2.9 0l3.1 3.1c.1.1.2.3.2.4 0 .3-.2.6-.6.6h-6.3c-.3 0-.6-.3-.6-.6m-2 0c0 1.4 1.2 2.6 2.6 2.6h6.3c1.4 0 2.6-1.2 2.6-2.6 0-.7-.3-1.3-.8-1.8l-3.1-3.1-.1-.1-.1-.1c-1.1-.9-2.6-.8-3.5.2l-3.1 3.1c-.5.5-.8 1.1-.8 1.8z"
      />
      <text
        transform="translate(96.798 1144.21)"
        className="st5 st7">
        {"Bisulfito"}
      </text>
      <path
        className="st26"
        d="M137.1 1062.5h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
      />
      <path
        className="st21"
        d="M126.6 1071.5h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
      />
      <path
        className="st27"
        d="M96.6 1083.2h38.8v40H96.6z"
      />
      <path
        className="st26"
        d="M135.4 1076.5v45.2c0 .7-.4 1.3-.8 1.3H97.5c-.5 0-.8-.6-.8-1.3v-45.2"
      />
      <path
        className="st24"
        d="M216.4 1019.5v32"
      />
      <path
        className="st25"
        d="M221.3 1024.8c0 .9-.7 1.6-1.6 1.6h-6.3c-.9 0-1.6-.7-1.6-1.6 0-.4.2-.8.5-1.1l3.1-3.1c.6-.6 1.5-.6 2.2-.1l3.2 3.2c.3.3.5.7.5 1.1z"
      />
      <path
        className="st9"
        d="M212.7 1024.8c0-.2.1-.3.2-.4l3.1-3.1c.2-.2.6-.2.9 0l3.1 3.1c.1.1.2.3.2.4 0 .3-.2.6-.6.6h-6.3c-.3 0-.6-.3-.6-.6m-2 0c0 1.4 1.2 2.6 2.6 2.6h6.3c1.4 0 2.6-1.2 2.6-2.6 0-.7-.3-1.3-.8-1.8l-3.1-3.1-.1-.1-.1-.1c-1.1-.9-2.6-.8-3.5.2l-3.1 3.1c-.5.5-.8 1.1-.8 1.8z"
      />
      <text
        transform="translate(162.145 1144.21)"
        className="st5 st7">
        {"Antiincrustante"}
      </text>
      <path
        className="st26"
        d="M219.5 1062.5h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
      />
      <path
        className="st21"
        d="M209 1071.5h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
      />
      <path
        className="st27"
        d="M179 1083.2h38.8v40H179z"
      />
      <path
        className="st26"
        d="M217.8 1076.5v45.2c0 .7-.4 1.3-.8 1.3h-37.1c-.5 0-.8-.6-.8-1.3v-45.2"
      />
      <path
        className="st1"
        d="M460.5 600.5h-14.3c-2.8 0-5-2.3-5-5v-68.4c0-3.5 2.8-6.3 6.3-6.3h13M512.5 496.6h14.3c2.8 0 5 2.3 5 5V570c0 3.5-2.8 6.3-6.3 6.3h-13"
      />
      <path
        className="st22"
        d="M656.2 548.6c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st9"
        d="M656.2 536.9c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st0"
        d="M533.1 541.7h120.2"
      />
      <path
        className="st28"
        d="M236 488.4h124.8v97.7H236z"
      />
      <path
        className="st26"
        d="M360.7 472.1v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1V472.1"
      />
      <text
        transform="translate(238.562 609.204)"
        className="st5 st7">
        {"TK-001 ALIMENTACI\xD3N"}
      </text>
      <path
        className="st2"
        d="M710.1 494.6h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6V493c0 .9-.7 1.6-1.6 1.6zM694.9 498.5l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st2"
        d="m710.5 509.1-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st3"
        d="M702.7 493.6v10"
      />
      <path
        className="st4"
        d="M693.7 485.6h18M702.7 486.6v8"
      />
      <path
        className="st1"
        d="M717.7 503.8h47.2M764.9 704.8h-18.8c-2.8 0-5-2.3-5-5v-95.4M687.1 602.8h-13.3c-2.8 0-5-2.3-5-5V497.4"
      />
      <text
        transform="translate(684.401 524.641)"
        className="st5 st7">
        {"VE-108"}
      </text>
      <path
        className="st2"
        d="M788.2 494.6h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6V493c0 .9-.7 1.6-1.6 1.6zM773 498.5l7.9 4.6c.5.3.5 1 0 1.3L773 509c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st2"
        d="m788.6 509.1-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st3"
        d="M780.8 493.6v10"
      />
      <path
        className="st4"
        d="M771.8 485.6h18M780.8 486.6v8"
      />
      <text
        transform="translate(762.45 524.641)"
        className="st5 st7">
        {"VE-109"}
      </text>
      <path
        className="st2"
        d="M710.1 593.8h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM694.9 597.7l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st2"
        d="m710.5 608.3-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st3"
        d="M702.7 592.8v10"
      />
      <path
        className="st4"
        d="M693.7 584.8h18M702.7 585.8v8"
      />
      <path
        className="st1"
        d="M717.7 603h47.2"
      />
      <text
        transform="translate(684.401 623.857)"
        className="st5 st7">
        {"VE-110"}
      </text>
      <path
        className="st2"
        d="M788.2 593.8h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM773 597.7l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st2"
        d="m788.6 608.3-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st3"
        d="M780.8 592.8v10"
      />
      <path
        className="st4"
        d="M771.8 584.8h18M780.8 585.8v8"
      />
      <text
        transform="translate(762.45 623.857)"
        className="st5 st7">
        {"VE-111"}
      </text>
      <path
        className="st2"
        d="M788.2 695.5h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM773 699.4l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7V700c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st2"
        d="m788.6 710-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st3"
        d="M780.8 694.5v10"
      />
      <path
        className="st4"
        d="M771.8 686.5h18M780.8 687.5v8"
      />
      <text
        transform="translate(762.45 725.621)"
        className="st5 st7">
        {"VE-112"}
      </text>
      <path
        className="st29"
        d="M795.2 601.3h13.3c2.8 0 5 2.3 5 5v46.4"
      />
      <path
        className="st29"
        d="M795.2 502.9h13.3c2.8 0 5 2.3 5 5v100.4"
      />
      <g className="st30">
        <path
          className="st31"
          d="M811.6 649.9h3.7v11h-3.7z"
        />
        <path
          className="st31"
          d="M820.6 643.9c.7.7.7 2 0 2.8l-5.6 5.6c-.7.7-2 .7-2.8 0l-5.6-5.6c-.7-.7-.7-2 0-2.8"
        />
      </g>
      <path
        className="st0"
        d="M396.7 1013.6v89.9"
      />
      <path
        className="st2"
        d="M394.8 1114.4h3.7v11h-3.7z"
      />
      <path
        className="st2"
        d="M403.8 1108.4c.7.7.7 2 0 2.8l-5.6 5.6c-.7.7-2 .7-2.8 0l-5.6-5.6c-.7-.7-.7-2 0-2.8"
      />
      <path
        className="st1"
        d="M795.6 704.8H823c4.1 0 7.4 3.3 7.4 7.4v36.6c0 4.9 4 8.9 8.9 8.9h272.1"
      />
      <path
        className="st8"
        d="M1057.5 476.7c0-27.5-41.4-50-92.8-50s-92.8 22.5-92.8 50h.7c-.4 1.4-.7 2.8-.7 4.4v129.3c0 14.4 17.9 26.4 40.3 28.1v14.6h27.5v-14.3h47.5v14.3h27.5v-14.6c23.6-.8 42.5-13.1 42.5-28.1V481.1c0-1.4-.4-3.1-.7-4.4h1z"
      />
      <path
        className="st2"
        d="M935.9 494.6h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6V493c0 .9-.7 1.6-1.6 1.6zM920.7 498.5l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st2"
        d="m936.3 509.1-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st3"
        d="M928.5 493.6v10"
      />
      <path
        className="st4"
        d="M919.5 485.6h18M928.5 486.6v8"
      />
      <path
        className="st1"
        d="M912.8 504.4h-13.3c-2.8 0-5-2.3-5-5v-91M943.5 503.8h47.2M990.7 704.8h-18.8c-2.8 0-5-2.3-5-5v-95.4"
      />
      <path
        className="st1"
        d="M912.8 602.8h-13.3c-2.8 0-5-2.3-5-5V497.4"
      />
      <text
        transform="translate(910.165 524.641)"
        className="st5 st7">
        {"VE-113"}
      </text>
      <path
        className="st2"
        d="M1014 494.6h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6V493c0 .9-.7 1.6-1.6 1.6zM998.8 498.5l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st2"
        d="m1014.4 509.1-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st3"
        d="M1006.6 493.6v10"
      />
      <path
        className="st4"
        d="M997.6 485.6h18M1006.6 486.6v8"
      />
      <text
        transform="translate(988.215 524.641)"
        className="st5 st7">
        {"VE-114"}
      </text>
      <path
        className="st2"
        d="M935.9 593.8h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM920.7 597.7l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st2"
        d="m936.3 608.3-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st3"
        d="M928.5 592.8v10"
      />
      <path
        className="st4"
        d="M919.5 584.8h18M928.5 585.8v8"
      />
      <path
        className="st1"
        d="M943.5 603h47.2"
      />
      <text
        transform="translate(910.165 623.857)"
        className="st5 st7">
        {"VE-115"}
      </text>
      <path
        className="st2"
        d="M1014 593.8h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM998.8 597.7l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st2"
        d="m1014.4 608.3-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st3"
        d="M1006.6 592.8v10"
      />
      <path
        className="st4"
        d="M997.6 584.8h18M1006.6 585.8v8"
      />
      <text
        transform="translate(988.215 623.857)"
        className="st5 st7">
        {"VE-116"}
      </text>
      <path
        className="st2"
        d="M1014 695.5h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM998.8 699.4l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7V700c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st2"
        d="m1014.4 710-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st3"
        d="M1006.6 694.5v10"
      />
      <path
        className="st4"
        d="M997.6 686.5h18M1006.6 687.5v8"
      />
      <text
        transform="translate(988.215 725.621)"
        className="st5 st7">
        {"VE-117"}
      </text>
      <path
        className="st29"
        d="M1021 601.3h13.3c2.8 0 5 2.3 5 5v46.4"
      />
      <path
        className="st29"
        d="M1021 502.9h13.3c2.8 0 5 2.3 5 5v100.4"
      />
      <g className="st30">
        <path
          className="st31"
          d="M1037.4 649.9h3.7v11h-3.7z"
        />
        <path
          className="st31"
          d="M1046.3 643.9c.7.7.7 2 0 2.8l-5.6 5.6c-.7.7-2 .7-2.8 0l-5.6-5.6c-.7-.7-.7-2 0-2.8"
        />
      </g>
      <path
        className="st1"
        d="M1025.4 704.8h27.4c4.1 0 7.4 3.3 7.4 7.4v36.6c0 4.9 4 8.9 8.9 8.9h224.6"
      />
      <path
        className="st8"
        d="M1282.3 476.7c0-27.5-41.4-50-92.8-50s-92.8 22.5-92.8 50h.7c-.4 1.4-.7 2.8-.7 4.4v129.3c0 14.4 17.9 26.4 40.3 28.1v14.6h27.5v-14.3h47.5v14.3h27.5v-14.6c23.6-.8 42.5-13.1 42.5-28.1V481.1c0-1.4-.4-3.1-.7-4.4h1z"
      />
      <path
        className="st2"
        d="M1160.7 494.6h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6V493c0 .9-.7 1.6-1.6 1.6zM1145.5 498.5l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st2"
        d="m1161.1 509.1-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st3"
        d="M1153.3 493.6v10"
      />
      <path
        className="st4"
        d="M1144.3 485.6h18M1153.3 486.6v8"
      />
      <path
        className="st1"
        d="M1137.9 504.4h-17.4c-.5 0-1-.4-1-1v-90.6c0-2.5-2-4.4-4.4-4.4h-68.5l-371.2 1c-3.7 0-6.7 3-6.7 6.7v83.2c0 2.8 2.3 5 5 5H687M1168.3 503.8h47.1M1215.4 704.8h-18.8c-2.8 0-5-2.3-5-5v-95.4"
      />
      <path
        className="st1"
        d="M1137.6 602.8h-13.3c-2.8 0-5-2.3-5-5V497.4"
      />
      <text
        transform="translate(1134.928 524.641)"
        className="st5 st7">
        {"VE-118"}
      </text>
      <path
        className="st2"
        d="M1238.7 494.6h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6V493c0 .9-.7 1.6-1.6 1.6zM1223.5 498.5l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st2"
        d="m1239.1 509.1-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st3"
        d="M1231.3 493.6v10"
      />
      <path
        className="st4"
        d="M1222.3 485.6h18M1231.3 486.6v8"
      />
      <text
        transform="translate(1212.978 524.641)"
        className="st5 st7">
        {"VE-119"}
      </text>
      <path
        className="st2"
        d="M1160.7 593.8h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM1145.5 597.7l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st2"
        d="m1161.1 608.3-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st3"
        d="M1153.3 592.8v10"
      />
      <path
        className="st4"
        d="M1144.3 584.8h18M1153.3 585.8v8"
      />
      <path
        className="st1"
        d="M1168.3 603h47.1"
      />
      <text
        transform="translate(1134.928 623.857)"
        className="st5 st7">
        {"VE-120"}
      </text>
      <path
        className="st2"
        d="M1238.7 593.8h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM1223.5 597.7l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st2"
        d="m1239.1 608.3-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st3"
        d="M1231.3 592.8v10"
      />
      <path
        className="st4"
        d="M1222.3 584.8h18M1231.3 585.8v8"
      />
      <text
        transform="translate(1212.978 623.857)"
        className="st5 st7">
        {"VE-1"}
      </text>
      <path
        className="st2"
        d="M1238.7 695.5h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM1223.5 699.4l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7V700c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st2"
        d="m1239.1 710-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st3"
        d="M1231.3 694.5v10"
      />
      <path
        className="st4"
        d="M1222.3 686.5h18M1231.3 687.5v8"
      />
      <text
        transform="translate(1212.978 725.621)"
        className="st5 st7">
        {"VE-122"}
      </text>
      <path
        className="st29"
        d="M1245.7 601.3h13.3c2.8 0 5 2.3 5 5v46.4"
      />
      <path
        className="st29"
        d="M1245.7 502.9h13.3c2.8 0 5 2.3 5 5v100.4"
      />
      <g className="st30">
        <path
          className="st31"
          d="M1262.2 649.9h3.7v11h-3.7z"
        />
        <path
          className="st31"
          d="M1271.1 643.9c.7.7.7 2 0 2.8l-5.6 5.6c-.7.7-2 .7-2.8 0l-5.6-5.6c-.7-.7-.7-2 0-2.8"
        />
      </g>
      <path
        className="st1"
        d="M1244.9 704.8h27.4c4.1 0 7.4 3.3 7.4 7.4v36.6c0 4.9 4 8.9 8.9 8.9h56.9c4.4 0 8.1 3.6 8.1 8.1v52.6c0 4.4-3.6 8.1-8.1 8.1H84.1c-4.3 0-7.8 3.5-7.8 7.8v171.2c0 4.3 3.5 7.8 7.8 7.8h212.3"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={158}
        height={140}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAACMCAYAAACNmxDrAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABwVJREFUeNrsmotyo0YQRQEhyc9d Z5NU/v/7shvbsqyHLSCQ6kndtAeEVvGugXOqupCwPCrQobtnIEkAfgLpT/5/GDbVjxAn7fEapild daqMac/PaCSR9zBd+SqRrYrsO1m88LfMXmeRSMl6k852zbaMRNjfmgHzHlluJpFbhPdZJPMh4TRK a5CrsDhYhPde0F7iJSJd85mFxdK2c4uZy3yINx3xgnSvFi917G37Yp8rTsl4oazOTK5GtEuLK3m9 kOyXIdykBCwlyzWSbS02tvVVsPQC5i0lVsVrJLup45NF8/pa5JvR702yrytEuuc61nWszAf9XBUr uV0Zb26ltZHscx1fLO7quLX9SxsjY5Y7qVlsadlub9I91fFgzqT2mSIy4ejMeLFs18j2Wx2/2/az 7b+wzyHe9MRr+rqdZbpHS0KZSPkqEw6f+f4jXuomFXMTK4j3ax1/mHxfEA/xRLxLc6a08ruzEryz 9wdxqzqW8cKk4tp6uy8mXxDvNiIeTGdyEcRT6bT0rm2ysRM/qmOlNnc93q3Jd2fxi2S80OMxsZjO BCOU0539/kG6tev/524OkLSV2tSV2qXJdWWD3cis9spNLhBveuJlti9kuuDFhYg3c251llqf9S4s pV7IoEu3nALToZTf/CBeXDrp8uTt7dWjyykzkW8hEQbUW2lkumkRfu8+jkT7/zwyo9Ws13WP1s9k kW865fZcT6qsZTnF38FoezIF6aab7bx8mRMxS+KP0/1DduQLYgFwti/ZCXYnyAdHpEv6VsHsxMET BIQOD3o7kZ1gMMD39oFnZTyA/w3EA8QDxANAPEA8AMQDxANAPEA8AMQDxAPEA0A8QDwAxAPEA0A8 QDwAxAPEA0A8QDxAPADEA8QDQDxAPADEA8QDQDxAPADEA8QDxANAPEA8AMQDxANAPEA8AMQDxANA PEA8QDwAxAPEA0A8QDwAxAPEA0A8QDwAxAPEA8QDQDxAPADEA8QDQDxAPADEA8QDQDxAPEA8AMQD xANAPEA8AMQDxANAPEA8AMQDxAPEA0A8QDwAxAPEA0A8QDwAxAPEA0A8+FDiVRaJbAH6UkU8+u6M V7WICdMWrGpx5KxSW/U1GBCwxZmTxataAuBsX7KOutxEWUdhWx/0gfRvVYsbhXPkjSe57EgjgxUW B4vCiVi5/x0D6Tv9UGPMbqd68u/5yFsGLWWg1zpeJF7d4KdOUj66cJWTLz1DtGqkAnrZuhwpY8ee t0hXyoD7OnZ1bG27s325jJG9U7b40eKlcgxp5HjSE2b8Vcv7MZTZ4Mde/FBH9iJfGZMvbzlhhZNu U8dzHes6rutY2o9QjkC8VLJ2alt9nbqMnnbM6Eq5eCt30ssRZD4v3k68WNvrjZOviF18bRlPs10z 2FMdqzoeTLrMPnNRx1x+oCFnueYYZi5y2X9ssV2bam1Fio5me6jylebHztx4sFjZ++dI1qv6lNrC avXWBmkG/EukK+xvXrx0oJkuE9FyO6aFbUMEGVPXD1Yi16uE9joH12wPNfNVEfHW5sY3267Mma2d g6JPqU1dqQ0DP9gPodLdjEC8EDMRbmnRHNulvF+IgCpeIaKFnkd7nb1rtoec9drEe6zjq8n3YPt2 rtQmfUptOJlbO9mh5JR2IlfS6+UDFy9ku7kId2XHpxGu3LmU3dL1ws8uYv1OORLxDq4Ve7CMF8Tb Ro65tdT6Gp7ZwCETvtr7a8sGC+l/0oFNMFQ8zXZXls1v6/hUx2c77hu5KMN5O1im29jJXtnVH3qd tf0t1u9UA5Suqx0Lx79yPV7v5ZQkkvUSe7+3LwjS5RHxkgGLF7LdrQl3ZxlL+7XQXiSuwW6Eu5er /tH2b6TsHAae8bx4B5Fva8e6bcl2vTOeT696dWvDnZ254PoRJhea8S5NvDu7ckOpDIuj1068Z5Ms NNjfRL4n+xF8xksGnPFiLZn2uOE8nbSA7L+okNdBvFxmeLHebmh9XibyLUy8J5mZ7eRk7qzkLu3/ 9zL5aoT7U8R7lF7npWsxdaDiqXyx22VF13HmPep54lJr5hZZh75wHJtgbCRT7UW6TYt49ybcV5Pu XsrsvqXJHsNCcttDAkcXzPMeg5cyuSgjSxFDJraWt5eeTstImLXeWGZMbP9aZnT3It2zZMsxrOF1 zXJjtwc7jzE/YfC2cpqO4ATqROMQiRdZs7py4m1kNvsYkW4ME4o+pTc55aLKz/yisT0OVUbKh19M j81qw3KCrt29uF5nrI9HfRf5z/riD3oS05bmWe9bh7XLRNayYk9mFAOfTLwrOacgupTkexVdLNWn cUopxdoTDv0OxQ9rriHe86XJ2ydWYvdqi8gyAtIh3tkzXv+cXqwkj+m5O8T7YNkvds7G+KQx4g3o XCEcAABE+FuAAQC340aI9lZC6gAAAABJRU5ErkJggg=="
        transform="translate(67.7 405.9)"
      />
      <path
        className="st9"
        d="M127 414.9H83.9c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V421.2c0-3.5-2.8-6.3-6.3-6.3H127z"
      />

      {/* Turbidez a Tanque TK-001 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(15, "Turbidez a Tanque TK-001", false)}>
        <path
          className={getTarjetaClass(15, selected)}
          d="M77.7 422.3h138.1v99.8H77.7z"
        />

        <text
          transform="translate(128.584 507.23)"
          className="st5 st18">
          {getScaledValue(datosScada.d15, 1)}
        </text>
        <text
          transform="translate(167.71 506.834)"
          className="st5 st33">
          {" NTU"}
        </text>
        <text
          transform="translate(129.897 442.27)"
          className="st5 st7">
          {"AE-311"}
        </text>
        <text
          transform="translate(115.567 462.75)"
          className="st30">
          <tspan
            x={0}
            y={0}
            className="st28 st34">
            {"Turbidez a"}
          </tspan>
          <tspan
            x={-14.5}
            y={15.6}
            className="st28 st34">
            {"Tanque TK-001"}
          </tspan>
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(15, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(15, "Turbidez a Tanque TK-001");
        }}>
        <path d="M101.6 495.1c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M99.9 494.1c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM111.2 492.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M111.8 491c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM112.7 500.1v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM107.7 507.6c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Turbidez a Tanque TK-001 */}

      <circle
        className="st35"
        cx={146.3}
        cy={560.1}
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
        transform="translate(394.7 670.9)"
      />
      <path
        className="st9"
        d="M453.1 680.5H410c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V686.8c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Conductividad Entrada a Planta */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(9, "Conductividad Entrada", false)}>
        <path
          className={getTarjetaClass(9, selected)}
          d="M403.8 687.9h138.1v99.8H403.8z"
        />
        <text
          transform="translate(454.651 772.802)"
          className="st5 st18">
          {getScaledValue(datosScada.d9, 0)}
        </text>
        <text
          transform="translate(499.776 772.407)"
          className="st5 st33">
          {" uS"}
        </text>
        <text
          transform="translate(455.964 707.843)"
          className="st5 st7">
          {"AE-106"}
        </text>
        <text
          transform="translate(431.15 728.323)"
          className="st30">
          <tspan
            x={0}
            y={0}
            className="st28 st34">
            {"Conductividad"}
          </tspan>
          <tspan
            x={-7.2}
            y={15.6}
            className="st28 st34">
            {"Entrada a Planta"}
          </tspan>
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(9, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(9, "Conductividad Entrada");
        }}>
        <path d="M427.7 760.7c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M426 759.7c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM437.3 758.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M437.9 756.6c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM438.8 765.7v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM433.8 773.2c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin COnductividad Entrada a Planta */}

      <circle
        className="st35"
        cx={472.3}
        cy={825.6}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={157}
        height={141}
        xlinkHref="data:image/png;base64,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 rkJggg=="
        transform="translate(697.7 858.9)"
      />
      <path
        className="st9"
        d="M756.2 868.8h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V875.1c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Presión Succión Bombas Alta Presión */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() =>
          loadGrafico(3, "Presión Succión Bombas Alta Presión", false)
        }>
        <path
          className={getTarjetaClass(3, selected)}
          d="M706.9 876.2H845V976H706.9z"
        />
        <text
          transform="translate(757.692 961.081)"
          className="st5 st18">
          {getScaledValue(datosScada.d3, 1)}
        </text>
        <text
          transform="translate(796.817 960.686)"
          className="st5 st33">
          {" Bar"}
        </text>
        <text
          transform="translate(759.005 896.122)"
          className="st5 st7">
          {"PT-114"}
        </text>
        <text
          transform="translate(728.415 916.602)"
          className="st30">
          <tspan
            x={0}
            y={0}
            className="st28 st34">
            {"Presion Succion"}
          </tspan>
          <tspan
            x={-13.7}
            y={15.6}
            className="st28 st34">
            {"Bombas Alta Presion"}
          </tspan>
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(3, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(3, "Presión Succión Bombas Alta Presión");
        }}>
        <path d="M730.8 949c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M729.1 948c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM740.4 946.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M741 944.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM741.9 954v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM736.9 961.5c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presión Succión Bombas Alta Presión */}

      <circle
        className="st35"
        cx={775.4}
        cy={1013.9}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={157}
        height={140}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAACMCAYAAACNmxDrAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABuRJREFUeNrsmglvo0gQRmmMYyfO nHv9//83RzKJb2MWpGrNp0qDsTc7E/B7UonEBxbwqKPtLAP4DYQ3sg8YFtWvlCZ0vA/5rlO66lIZ wxmvCYlAuuuVrxLZqsRjF4unYuWy1fASwnVku2Z7TER8/GQGLDqkCyLbxKJwWxWQ0nsdpVWlO1iU svWC9hYvuOzWvGZax43E1CIKGU70gDAe8Y4i2i4RwZ7vzHxdGS9mtka0eR23EnMRsHBlF8YrYMx0 e5NsW8e6jpVtc3ss0ipfkRAuF+lmJtq9xTvbLpx8MTuS8cbd11WW6RrxNibccx0/6nhKtF1V34wX JNtNTa5GtI8Wn2zbCHhnYmq/h3DjnmJjmY2ZrpHuwTyZ2vWvEgPHi6xXtPR2E8tmjVzvTbi/6viz js91fDAhZ9LrMeFeh3gHE29lmW5hHuROzlLEK/uW2lhm7yy7fTbx/jH5Ppp4cyceZXbc4lVOvEdz YCLPxSFjL5Nu8FkvNVzkMlTcmniNaH+YfH+LeDPp8ch21zFclCbWyqQr7LnY960tNva6gyu5naW2 kB5vYfJ9sJL7ScS7cVMtGW/8A0YUbyaZLor4ZOW3SVjLrt6/rdTm2c+1u7mV3HsXC3t+wkR7VeId pb2KmW5ls8C9DJ2ppbYXpTa0DBix5M4s5haz7Odisl9KgfGX23i9DybawrZ34se0b8YLicwX5SvE 4EKWUFhGuT7xgrgzlcQ0lwQ1PeVG11dmXT8O4EcC141+nVokkpNPSlpRq6xHiQxZ+8+h4PpoS0oq WltSCt7ccz8wQ0BoSUx51nNpLT+xQ6ZU6CPf2c4wjcJ/zXYXVUDEg1+RAREP3s5YDIB4gHgAiAeI B4B4gHgAiAeIB4B4gHiAeACIB4gHgHiAeACIB4gHgHiAeACIB4gHiAeAeIB4AIgHiAeAeIB4AIgH iAeAeIB4gHgAiAeIB4B4gHgAiAeIB4B4gHgAiAeIB4gHgHiAeACIB4gHgHiAeACIB4gHgHiAeIB4 AIgHiAeAeIB4AIgHiAeAeIB4AIgHiAeIB4B4gHgAiAeIB4B4gHgAiAeIB4jHKQDEA8QDQDxAPADE A8QDQDxAPADEA8QDxANAPEA8gEuoZFshHvwfgvWS7Bzx/E4Bzslw1aXitYl4seEw6qwX42hx0o/8 zB0jHKKlZCstjgn5klmwOLHzozO5a8djIrxS+RmreCpbEwcXKmJSvqLlZKlsh44d5690od66cOFM 0cbaH6t0jQf7OnYWW4udPa7ivaCQHYaE0XvZ+dZFfO9RLkwYgXipqDqOrbqCtqRy4h3MgU0d6zpW tl3bYztJUEn5ihaj4853svOlxNRe37xmMoLMp5LliQiJ7Fclys9Y2xE91piQGiee6vhh2yae7fGY +cq2YaNoqd8HyXJL+YCFSNd8+Mz2kQ9UOs3Uud1EEzumQv5WAbtakrKjzxl66a1EvJ1lucaJ73V8 q+PBPFmafHs7D70yXubEW5vFzU5vnXSLhHhhoJkuF8maY7xxUUhmDy39zs7FPlFuqoFnvGNCvEa6 LyJfzHq7S0qt7vzJBFPpliMTL0rXSDa3uLObrZTj17ZC+2Df72wSvc7QxYuhSemHyfbFImY9Pfbq 3FK7tZMY7/ZMavs7uyg3IxAvZrsbE6wR7t7ind1gXr4o3l6Ee5Y+59nO3fbUnT/QiTb2/s1xPppw 3+zvpT23lzYk65PxtIHcyB1e2ol8tosxtwtROOnCAMWL2e7Wju19HR/dnXtn8k3sfQdXFeIFeLBM sJSScxiweJVrwzTLr9wMEG84vdmyc0ptvChb1/dFy2d2oaYtk98QxZuZePcmnYoTY+4m+o30wN8k Hu1ixAnvMJKMV8nQFIfPtVtS6ZXli44PKd3f8UR3NdxjyHj3cuduXP8Wp/pgd71Odk2P89XCN9lj yXiV80HXeONAtRc5q3PE0wnGLyhvZakhb+nthiZekGl2bnKtZDF0Y//HFuPGifdoWe6rTHex7Gxk uq1GIJ7v9Uq3jFT2neKLHguGWtvbFlaHvnCsU+1aMl0sJbGPiX1eLLVRvO9SZh8SZXboU23bhHvx onnRc+0mJPq/kI3jK7JMJtupW4dT8R5lko/DxVoGi0fp7XSy62yyBy6fF7H3Qnlxxoe0ldMx/EAg 9nr+Fxdx2WBp2W4uPV7pyvCz6w33Ixkq+pTe7Nwbq7jwAyu5YNVIxPPlwy8bzGWoipVgJ33g2k3B Y/jGoq98F5caSH99VsiykU7yQZaY9q4870cu3av2OPCyd/U/GpiIdMGtafmpjl9rI97F5yTI5N62 dFQlJrqxDRKI9xsFbPtKsG26A8R79XMUekx3AAAAxr8CDABCGBs0Ti9WEQAAAABJRU5ErkJggg=="
        transform="translate(238.753 670.9)"
      />
      <path
        className="st9"
        d="M297.2 680.5h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V686.8c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Temperatura */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(13, "Temperatura Entrada", false)}>
        <path
          className={getTarjetaClass(13, selected)}
          d="M247.9 687.9H386v99.8H247.9z"
        />
        <text
          transform="translate(298.704 772.802)"
          className="st5 st18">
          {getScaledValue(datosScada.d13, 1)}
        </text>
        <text
          transform="translate(337.829 772.407)"
          className="st5 st33">
          {" \xB0C"}
        </text>
        <text
          transform="translate(300.016 707.843)"
          className="st5 st7">
          {"TT-106"}
        </text>
        <text
          transform="translate(279.186 728.323)"
          className="st30">
          <tspan
            x={0}
            y={0}
            className="st28 st34">
            {"Temperatura"}
          </tspan>
          <tspan
            x={-11.2}
            y={15.6}
            className="st28 st34">
            {"Entrada a Planta"}
          </tspan>
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(13, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(13, "Temperatura Entrada");
        }}>
        <path d="M271.8 760.7c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M270.1 759.7c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM281.4 758.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M282 756.6c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM282.9 765.7v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM277.9 773.2c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Temperatura */}

      <circle
        className="st35"
        cx={316.4}
        cy={825.6}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={157}
        height={140}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAACMCAYAAACNmxDrAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABudJREFUeNrsmglz2kgQRjVCGGyc zbHX//9/OezY3MesVNVT+dKWhCDeJAzvVXXJ5hAl6amPgaIA+AWE32w/cDnEnylM6Hkv8l2ndPEc GcOJrwstgXTXK18U2WLLY2eLp2KVstXwEsJ1ZLtme2iJ9HhvBqyOSBdEtpFF5bYqIKX3OkqrSrez 2MvWCzpYvOCyW/O6cR03EmOLJGQ40gNCPuIdRLRNSwR7vjPzHct4KbM1ok3ruJWYioCVK7uQr4Ap 021NsnUdyzoWti3tsUSrfFWHcKVINzHR7i3e2Hbm5EvZkYyXd18XLdM14q1MuOc6vtbx1NJ2xaEZ L0i2G5tcjWjvLN7bthHwzsTUfg/h8p5iU5lNma6R7sE8Gdv1jy0Dx3dZr+rp7UaWzRq5/jDh/q7j rzo+1PHWhJxIr8eEex3i7Uy8hWW6mXlQOjn3It5+aKlNZfbOstsHE+9fk++diTd14lFm8xYvOvEe zYGRPJeGjK1MukGzXtdwUcpQcWviNaL9afL9I+JNpMcj213HcLE3sRYmXWXPpb5vabGy1+1cye0t tZX0eDOT762V3Pci3o2basl4+Q8YSbyJZLok4pOV3yZhzbt6/75SWxbf1u6mVnLvXczs+RET7VWJ d5D2KmW6hc0C9zJ0ti21vSi1oWPASCV3YjG1mBTfFpP9UgrkX27T9d6ZaDPb3okf46EZL7RkviRf JQZXsoTCMsr1iRfEn7EkpqkkqHGfG8e+Muv7cQA/Erhu9OvUqiU5+aSkFTUOKY+h6P45FFwfXUlJ RetKSkGtPecDCwSEjsRUFgOW1soBO2RKhSHyneQMkyi8RrY7uQIiHvysDIh48HuMxACIB4gHgHiA eACIB4gHgHiAeACIB4gHiAeAeIB4AIgHiAeAeIB4AIgHiAeAeIB4gHgAiAeIB4B4gHgAiAeIB4B4 gHgAiAeIB4gHgHiAeACIB4gHgHiAeACIB4gHgHiAeIB4AIgHiAeAeIB4AIgHiAeAeIB4AIgHiAeI B4B4gHgAiAeIB4B4gHgAiAeIB4B4gHiAeACIB4gHgHiAeACIB4gHgHiAeIB4nAJAPEA8AMQDxANA PEA8AMQDxANAPEA8QDwAxAPEAziXKNuIePB/CHZUslPF8zsFOCXDxdcqtfFHDIfss16Kg0WvH+UZ O0Y4RGuTbW9xaJHvRRasBuz84Ezu23FOhFcqP7mKp7I1sXOhIr6Qr+o5WSrbrmfH5StdqN9duHCi aLn2xypd48G2jo3F2mJjj6t431G5HYYWo7ey87WL9P6DXJiQgXhtEXuOLV5BWxKdeDtzYFXHso6F bZf22EYS1Av5qh6j0843svO5xNhe37xmlEHmU8nKlggt2S+2lJ9c2xE91pSQGiee6vhq2yae7fGU +drKbWupjU66tYmWPmAm0jUfPrH9lBcqnWbq0m6ikR1TJX+rgH0tyb6nz7n00htFvI1lucaJL3V8 ruPBPJmbfFs7D4MyXuHEW5rFzU5vnXSzFvHChWa6UiRrjvHGRSWZPXT0OxsX25ZyEy884x1axGuk +yjypay3OafU6s6fTDCVbp6ZeEm6RrKpxZ3dbHs5fm0rtA/2/c6qpde5dPFSaFL6arJ9tEhZT489 nlpq13YS091eSG1/YxflJgPxUra7McEa4e4t3tgN5uVL4m1FuGfpc57t3K377vwLnmhT798c56MJ 99n+nttzW2lDiiEZTxvIldzhezuRz3YxpnYhKidduEDxUra7tWP7o4537s69M/lG9r6dqwrpAjxY JphLydldsHjRtWGa5RduBkg3nN5sxSmlNl2Utev7kuUTu1DjjsnvEsWbmHj3Jp2Kk2LqJvqV9MCf JR7tYqQJb5dJxosyNKXhc+mWVI5m+erIh+zd3+lE9zXcOWS8e7lzV65/S1N9sLteJ7umx/lk4Zvs XDJedD7oGm8aqLYiZzxFPJ1g/ILyWpYayo7e7tLECzLNTk2uhSyGruz/1GLcOPEeLct9kukulZ2V TLcxA/F8r7d3y0j7IVN8NeDD/BjdtbB66QvHOtUuJdOlUpL6mNTnpVKbxPsiZfahpcxe+lTbNeGe tWhenbB2E1r6v1Dk8RVZIZPt2K3DqXiPMsmn4WIpg8Wj9HY62XU22RnI50UctFBenfghXeU0hx8I pF7P/+IiLRvMLdtNpcfbuzL87HrDbSZDxZDSW5xyY1U/8IFRLljMRDxfPvyywVSGqlQJNtIHLt0U nMM3FkPlO6vMwPftg359VsmykU7yQZaYtq48bzOX7tX6G3gpX9uPBkYiXXBrWn6q49faiHf2eQky uXctHcWWiS63QQLxfqGAXV8Jdk13gHivfp7CgOkOAACg5j8BBgDaSRs0z+quogAAAABJRU5ErkJg gg=="
        transform="translate(81.6 670.9)"
      />
      <path
        className="st9"
        d="M140 680.5H96.9c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V686.8c0-3.5-2.8-6.3-6.3-6.3H140z"
      />

      {/* Caudal de Alimentacion  */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(7, "Caudal de Alimentacion", false)}>
        <path
          className={getTarjetaClass(7, selected)}
          d="M90.7 687.9h138.1v99.8H90.7z"
        />

        <text
          transform="translate(141.55 772.802)"
          className="st5 st18">
          {getScaledValue(datosScada.d7, 0)}
        </text>
        <text
          transform="translate(177.676 772.407)"
          className="st5 st33">
          {" m\xB3/hr"}
        </text>
        <text
          transform="translate(115.863 707.843)"
          className="st5 st7">
          {"FIT-107 + FIT-133"}
        </text>
        <text
          transform="translate(129.61 728.323)"
          className="st30">
          <tspan
            x={0}
            y={0}
            className="st28 st34">
            {"Caudal de"}
          </tspan>
          <tspan
            x={-7.6}
            y={15.6}
            className="st28 st34">
            {"Alimentaci\xF3n"}
          </tspan>
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(7, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(7, "Caudal de Alimentacion");
        }}>
        <path d="M114.6 760.7c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M112.9 759.7c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM124.2 758.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M124.8 756.6c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM125.7 765.7v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM120.7 773.2c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Caudal de Alimentacion */}

      <circle
        className="st35"
        cx={159.2}
        cy={825.6}
        r={9.2}
      />
      <path
        className="st0"
        d="M76.3 383.9h173.8c2.8 0 5.1 2.3 5.1 5.1v76.3"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={158}
        height={140}
        xlinkHref="data:image/png;base64,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 AAH/CDAAyRs+QgJ5XdkAAAAASUVORK5CYII="
        transform="translate(67.7 228.9)"
      />
      <path
        className="st9"
        d="M127 238.5H83.9c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V244.8c0-3.5-2.8-6.3-6.3-6.3H127z"
      />

      {/* Conductividad Mezcla */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(16, "Conductividad Mezcla", false)}>
        <path
          className={getTarjetaClass(16, selected)}
          d="M77.7 245.9h138.1v99.8H77.7z"
        />

        <text
          transform="translate(128.584 330.742)"
          className="st5 st18">
          {getScaledValue(datosScada.d16, 1)}
        </text>
        <text
          transform="translate(167.71 330.347)"
          className="st5 st33">
          {" mS"}
        </text>
        <text
          transform="translate(119.897 265.783)"
          className="st5 st7">
          {"AE-MEZCLA"}
        </text>
        <text
          transform="translate(105.084 286.263)"
          className="st30">
          <tspan
            x={0}
            y={0}
            className="st28 st34">
            {"Conductividad"}
          </tspan>
          <tspan
            x={20.6}
            y={15.6}
            className="st28 st34">
            {"Mezcla"}
          </tspan>
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(16, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(16, "Conductividad Mezcla");
        }}>
        <path d="M101.6 318.7c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M99.9 317.7c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM111.2 316.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M111.8 314.6c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM112.7 323.7v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM107.7 331.2c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Conductividad Mezcla */}

      <circle
        className="st35"
        cx={146.3}
        cy={383.6}
        r={9.2}
      />
      <path
        className="st22"
        d="M249 465.7c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
      />
      <path
        className="st9"
        d="M260.7 465.7c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <text
        transform="translate(724.568 459.401)"
        className="st5 st7">
        {"FIS-01"}
      </text>
      <text
        transform="translate(950.581 459.401)"
        className="st5 st7">
        {"FIS-02"}
      </text>
      <text
        transform="translate(1175.345 459.401)"
        className="st5 st7">
        {"FIS-03"}
      </text>
      <path
        className="st1"
        d="M296.3 1091.4H280c-4.6 0-8.3-3.6-8.3-8.1V944.9c0-5 4.1-9.1 9.3-9.1h15.4M337.6 1091.4h16.3c4.6 0 8.3-3.6 8.3-8.1V944.9c0-5-4.1-9.1-9.3-9.1h-15.4"
      />
      <path
        className="st21"
        d="M333.5 916.4c0-8-7.4-14.5-16.6-14.5s-16.6 6.5-16.6 14.5h.2c-.1.4-.2.8-.2 1.3v36.5c0 4.2 3.2 7.7 7.2 8.1v7.4h4.9v-7.4h8.5v7.4h4.9v-7.4c4.3-.3 7.6-3.8 7.6-8.2v-36.5c0-.4-.1-.9-.2-1.3l.3.1zM333.5 994.7c0-8-7.4-14.5-16.6-14.5s-16.6 6.5-16.6 14.5h.2c-.1.4-.2.8-.2 1.3v36.5c0 4.2 3.2 7.7 7.2 8.1v7.4h4.9v-7.4h8.5v7.4h4.9v-7.4c4.3-.3 7.6-3.8 7.6-8.2v-36.5c0-.4-.1-.9-.2-1.3h.3v.1zM333.5 1072c0-8-7.4-14.5-16.6-14.5s-16.6 6.5-16.6 14.5h.2c-.1.4-.2.8-.2 1.3v36.5c0 4.2 3.2 7.7 7.2 8.1v7.4h4.9v-7.4h8.5v7.4h4.9v-7.4c4.3-.3 7.6-3.8 7.6-8.2v-36.5c0-.4-.1-.9-.2-1.3l.3.1zM292.8 1560.8c0-8-7.4-14.5-16.6-14.5s-16.6 6.5-16.6 14.5h.2c-.1.4-.2.8-.2 1.3v36.5c0 4.2 3.2 7.7 7.2 8.1v7.4h4.9v-7.4h8.5v7.4h4.9v-7.4c4.3-.3 7.6-3.8 7.6-8.2V1562c0-.4-.1-.9-.2-1.3h.3v.1zM937.9 1024.3h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
      />
      <path
        className="st22"
        d="M866.9 1020.8c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st9"
        d="M866.9 1009.1c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        width={39}
        height={39}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7BJREFUeNrsmOtS2zAQhS3bwcFA CVBKmXba93+u0nZKaAm5kIsjqwpzduawlRPZlPzoNDNnCIkjf15pd4+UJP9f//jL7Glc13Wg/BWg jAIMwbl9AhpS2gDoCKpuA2r+AlhKyqCUrqkBYvHe0mf1LtCugBqqpySgErE1tKL3a3xXbwPNXwC3 +e0B1Pcq8bePz2RsC7CF0tKrAqhtgsw7wm2iVADq2OsNdOJ15HWIaxJAbIBmXlNogv8f8d2KIvoM Mu8I1wfYwOuCNABkiSgmuPkcQA/QL697r5HXGKAS0WeQeYdp7QPi3Oud17XXe7w/QyTLhggK3NDr liKd0r0qSqIoQMnWDFEpAbKB+gh9IMBjPASvwSWiOEbkzvCQcp2hUiRwT5/lLUpJD3CnXpeA+uz1 CVF8q6KX0U0rQJ5CJxQ9Q5luVRlysRGUjD3C1F4BUKJ3hfVXUgYbWks1IEuA9WlqOcuXKmFMHhm9 jNbeBYCuIZ7aggq1UZ0kB1ROD7DG1EtmTylhbOwUy/QeYgrPMcWXgD1FZAu14I0qGalqhRZRm2Bd /oRknGpbBE0gOQTwDGDntOZkWtNAdzKqGvQAXeL3A1qXMpbMgs0jopdRgkhR1gPmuM5E9H3uQtKB pLgXlGBPD5tGJElGgx2pbsGRa2My5MG5XR5ouBhAE3hizsJcra027skoBxQcK92x/oxyLTkpawEW 4yWD7mpbBF3AcDqyR+4lVp6smNazcdMGMKeKrCU/t1I2qStoTR2kgqyCdLsiKE5YGv6jskkVVf0Y SB5zHeggf4yXRgxYk2WaouGPAboIPPmu8RhujoedYrw5jRfVizmCjwAbQQ8oOQXVQF1ydLurFdyU POIE9+Be7LIWmSalpqByw+3NBCy7U+tYXM0M7W3jCb95fcHfO4BKL66zCLBQce1RHcwaIlWTfeL1 JnBDQN1AP2BmZ7jWtolgyN0YtQw0UEURE7AxOWqB20TvO6I3xrXrWDejE2Wm7BI7kjF6tNguWY+y 7ha05u4A9RWgQwVXx26anNrbLgEjLniJm44QmUGDW66QFBNce4f1dwu4ESWIbbsnYchKTeuCAIfK zvNeo1JZe692dTMVPdflZMGorSfbpWNSqZw170nmtDcW9zynIl2rs5vWjT5kHnpUeopA6eFauqKk 4f2HDcF1PZsxgYwOOR1DgDrD9Q6usQt1tUqm4YRr1xGcdi2vdroVAg35u6ThnNDt43xwm1NOdpyq RtuzLNnfq5O5/S3AAFxfqwWBYna5AAAAAElFTkSuQmCC"
        transform="translate(899.221 1021.017) scale(.8974)"
      />
      <circle
        className="st9"
        cx={917.1}
        cy={1038.8}
        r={10.9}
      />
      <circle
        className="st23"
        cx={917.1}
        cy={1038.6}
        r={8}
      />
      <text
        transform="translate(901.894 1078.507)"
        className="st5 st7">
        {"P-02B"}
      </text>
      <path
        className="st21"
        d="M937.9 945.8h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        width={39}
        height={39}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA6tJREFUeNrsmOtS2zAQhSNbwcGE JkApZdpp3/+5epuStIRcyMWxVYU5O3PYyolsCv1DZs4QEkf+vNLuHqnTeX29vv7vy7zQuK7tQPYZ oIwCDMG5lwQ0pKQG0BFU1QTU/AOwhJRCCV1TAaTE+5I+qw6BtgXUUF0lAZWIbaENvd/iu2ofqH0C 3O63R1DPK8ffHj6TsUuArZTWXgVAyzpI2xJuF6UMUH2vN9Cp14nXMa7pAGIHtPCaQzP8f4/vNhTR R5C2JVwPYEOvC9IQkDmi2MHNlwC6g3573XpNvKYAlYg+grQtprUHiHOvd17XXu/x/gyRzGsiKHAj rxuKdEL3KiiJogAlW1NEJQfIDuoj9IEA+3gIXoNrRHGKyJ3hIeU6Q6VI4B4+sw1KSRdwA69LQH32 +oQovlXRS+mmBSAH0ClFz1Cml6oMudgISsaeYGqvACjRu8L6yymDDa2lCpA5wHo0tZzla5UwxkZG L6W1dwGga4inNqNCbVQnsYCy9ABbTL1k9pwSpoydYpneY0zhOab4ErADRDZTC96okpGoVlgiajOs y1+QjFPsi6AJJIcAngHsnNacTGsS6E5GVYMuoHP8fkjrUsaSWShtRPRSShApynpAi+tMRN/nLiQd SIp7Rgn28LBJRJKkNNiJ6hYcuSYmQx6c2+WRhosBNIEn5iy0am01cU9GOaDgWMmB9WeUa7GktAFY jJcMuqt9EXQBw+nIHrmnWHmyYlqPxk1qwJwqsiX5uY2ySW1BK+ogBVQqSHcoguKEpeHfK5tUUNWP geQxt4EO8td4ScSAFVmmORr+FKCrwJMfGo/hlnjYOcZb0nhRvZgjeA+wCXSHkpNRDdQlR7e7SsHN ySPOcA/uxS5tkGlSajIqN9zeTMCyO7WOxdUs0N52nvC71xf8HQNUenGVRoCFimuX6mBaE6mK7BOv N4EbAeor9BNmdoFryyYRDLkbo5aBBiooYgI2JUctcLvo/UD0prh2G+tmdKIslF1iRzJFjxbbJetR 1t2K1twYUN8AOlJwVeymyam97Row4oLXuOkEkRnWuOUCSTHDtWOsvxvATShByqZ7EoYs1LSuCHCk 7DzvNQqVtbdqV7dQ0XNtThaM2nqyXeqTcuWseU+ypL2xuOclFelKnd00bvQh89Cl0pMFSg/X0g0l De8/yhBc27MZE8jokNMxBKgzXO/gartQW6tkak64Dh3BadfybKdbIdCQv+vUnBO6lzgf3OeUOwdO VaPt2R8BBgA0KqoDzBFWgwAAAABJRU5ErkJggg=="
        transform="translate(899.221 942.538) scale(.8974)"
      />
      <circle
        className="st9"
        cx={917.1}
        cy={960.3}
        r={10.9}
      />
      <circle
        className="st23"
        cx={917.1}
        cy={960.1}
        r={8}
      />
      <text
        transform="translate(901.894 1000.028)"
        className="st5 st7">
        {"P-02A"}
      </text>
      <path
        className="st1"
        d="M895.9 1054h-14.3c-2.8 0-5-2.3-5-5v-68.4c0-3.5 2.8-6.3 6.3-6.3h13"
      />
      <path
        className="st21"
        d="M547.9 1885.4h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        width={39}
        height={39}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7JJREFUeNrsmAtP2zAUhePE9AFt gQGq2PP//66xsfFsgTahTZM507nV4dZpnVI0bVqko4TQup+vfa+PHUX/r3/8Mm/YptxL6I8CGg9Y HWAjYLMjMFEMGQ9QQc9lKKjZAVgFlCgxZAEtSIUHeGeAHCkLoBZpD+9jitzMKcddnnOCrQW1W8Il AGlD+04HuHcAavGDc6dnp9RpinsGzRRopCHtlnAVQNep5zRwOnI6xPMBIAVwBrCJ0yM0dnrCu5RA VyDtlnD7AHrndAadOB0DuosIF4jeFEAV2L3TLTTCuwkiugJpG865PcBVETt1eg+dA7J63wegpfmX AXAEsCt87ic6bShqOc3LjYCcrRZD1wfcB6fPTp8AeUZD3KYkyWmYHxDpI3yuhc9FBCX339ChEZSh PcAwDgH2BZBDvO8DTmdxjqEeqE5Y6sScsnuZ1TYgejFFb4DonSOCH/F8CrgOpkFMwyZq4/9tdDah JMoou2eU1cYGzj+ZewI4BNgQQzbAvGsRHM+rEkCWirnMzwmGfoz7FNE26wD1SsGZe4L5dkrD2qGo xKqd0rMkSjKkAKsS5xpD/4CO5JuShIeXAY9RXo5QUurgfKtVgrvU0b6alzJFpK0ibpAg+6rBHhXk OjgfKK9EHYB2PR01UWCjCSZ2F73sAbZNvTVbrkgJrd8tere0bHGAheKGOBOtx7k0MbPG44BiNU+D Isgria+xba5yg3ktQwC1sSyUn3uVla9pd8V9x2u+KM8LVPkZ6lOG+7ym0Siw0wWtIHNaSV50flME pXcz1KwJFn3xdbrRUMiF8okpdfoFZBzYGC/2UvEnBLkIgCw9cGLDnjztBbkZafCZACs/d0fejx2J XTMqbAoy8ocjtPnoASyTBhskSza/o6y9Xnv1fFuQ7UoBU3Xy0ukC+oF3Ex6VJNALRqrM7FEdZLjC k5kctSngbgH0zemr03esxSN0YDkPk4YFNqIaGNXA5JT1bKUeMZTXcNIXgNPRY7sVZPl1otyRGZ3j 3RjuZkDzUoZewKcEeUURvPTABW+aSrLjYo/kWuDvB/zADdxOj/Ykkcf33eOzNwC9w/sMHS5o4xQc QQ0pGZmpqBwqO8+AqdrZjWlHl+qhbbrtLNV20Fd+ZOPeJWdi8D0uylzs9aq0UkubLvaGTEKijj3a nqMP33LJmnvOanZyNmNqLFOi6mLk2e/yUcdi0wHSa47ffEdvvr1HWbPvDTqC28UB5rrDy3UuqWxa gN/i+Dfa9mT1r7l+CTAAx/zEE/bTwWkAAAAASUVORK5CYII="
        transform="translate(509.245 1882.11) scale(.8974)"
      />
      <circle
        className="st9"
        cx={527.1}
        cy={1899.9}
        r={10.9}
      />
      <circle
        className="st23"
        cx={527.1}
        cy={1899.7}
        r={8}
      />
      <text
        transform="translate(509.469 1939.599)"
        className="st5 st7">
        {"P-1002"}
      </text>
      <path
        className="st21"
        d="M547.9 1806.9h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        width={39}
        height={39}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7FJREFUeNrsmHtT4jAUxZs28lBA XXUY9/n9P9e6665PUKEVSrvpzrnM8ZJCijj+Y2fOtFYIv9zk3pwkij6uj+t9L/OGbcq9hN4V0HjA 6gAbAZsdgYliyHiACnouQ0HNDsAqoESJIQtoQSo8wDsD5EhZALVIe3gfU+RmTjnu8pwTbC2o3RIu AUgb2nc6wL0DUIsfnDs9O6VOU9wzaKZAIw1pt4SrALpOPaeB05HTIZ4PACmAM4BNnB6hsdMT3qUE ugJpt4TbB9AnpzPoxOkY0F1EuED0pgCqwO6dbqER3k0Q0RVI23DO7QGuitip02foHJDV+z4ALc2/ DIAjgF3hc3/RaUNRy2lebgTkbLUYuj7gvjh9d/oGyDMa4jYlSU7D/IBIH+FzLXwuIii5/4cOjaAM 7QGGcQiwH4Ac4n0fcDqLcwz1QHXCUifmlN3LrLYB0YspegNE7xwR/IrnU8B1MA1iGjZRG/9vo7MJ JVFG2T2jrDY2cP7J3BPAIcCGGLIB5l2L4HhelQCyVMxlfk4w9GPcp4i2WQeoVwrO3BPMt1Ma1g5F JVbtlJ4lUZIhBViVONcY+gd0JN+UJDy8DHiM8nKEklIH51utEtyljvbVvJQpIm0VcYME2VcN9qgg 18H5QHkl6gC06+moiQIbTTCxu+hlD7Bt6q3ZckVKaP1u0bulZYsDLBQ3xJloPc6liZk1HgcUq3ka FEFeSXyNbXOVG8xrGQKojWWh/NyrrHxNuyvuO17zRXleoMrPUJ8y3Oc1jUaBnS5oBZnTSvKi85si KL2boWZNsOiLr9ONhkIulE9MqdMvIOPAxnixl4o/IchFAGTpgRMb9uRpL8jNSIPPBFj5uTvyfuxI 7JpRYVOQkT8coc1HD2CZNNggWbL5HWXt9dqr59uCbFcKmKqTl04X0B+8m/CoJIFeMFJlZo/qIMMV nszkqE0BdwugX04/nX5jLR6hA8t5mDQssBHVwKgGJqesZyv1iKG8hpO+AJyOHtutIMuvE+WOzOgc 78ZwNwOalzL0Aj4lyCuK4KUHLnjTVJIdF3sk1wJ/P+AHbuB2erQniTy+7x6fvQHoHd5n6HBBG6fg CGpIychMReVQ2XkGTNXObkw7ulQPbdNtZ6m2g77yIxv3LjkTg+9xUeZir1ellVradLE3ZBISdezR 9hx9+JZL1txzVrOTsxlTY5kSVRcjz36XjzoWmw6QXnP85jt68+09ypp9b9AR3C4OMNcdXq5zSWXT AvwWx7/Rtiercv0TYABxdcQTRlLUHwAAAABJRU5ErkJggg=="
        transform="translate(509.245 1803.63) scale(.8974)"
      />
      <circle
        className="st9"
        cx={527.1}
        cy={1821.4}
        r={10.9}
      />
      <circle
        className="st23"
        cx={527.1}
        cy={1821.2}
        r={8}
      />
      <text
        transform="translate(509.469 1861.12)"
        className="st5 st7">
        {"P-1001"}
      </text>
      <path
        className="st1"
        d="M505.9 1915.1h-14.3c-2.8 0-5-2.3-5-5v-68.4c0-3.5 2.8-6.3 6.3-6.3h13M556.5 1810.5h14.3c2.8 0 5 2.3 5 5v68.4c0 3.5-2.8 6.3-6.3 6.3h-13"
      />
      <path
        className="st1"
        d="M575.8 1879.8v88.4c0 3.5-2.8 6.3-6.3 6.3h-13"
      />
      <path
        className="st21"
        d="M547.9 2048.7h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        width={39}
        height={39}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA8pJREFUeNrsWGlP20AU9LEJhsRc pbRUtOr//1uFtqKFkJs48bpraV40PK2TtaF8wtLIcY6X2XfObhS9X+9X5ysGXmzkNQn57hUQ0fOb EowbECmCVcPzfyMoRBK610gbCJbqHkS0K0EhleK1cejhbhRJ67BRKAG7j2jckRyTqpEBB0APJCsQ KoAnhxU9C+GKyD67TEdyNYG+w6HDwCEHhngvg+2KiM0JM4clUH++Jm9XXQkyuQzEThzOgTOHUyIp BGuPLUBqDIxwn4Dwsomk6RDWDCRqUpcOnx0+OVyAZE4ELTwkBB8dHhz+APdAjO9EmqRpUa0pwjoA uZrYNfDF4SN5MMP3pUAkxGMQkoVkVHDeNmRatJI6tEcI6yWIfXf45nDl8IG818dvpK2sEUZJg2N8 rwf7lir7WRsygeE1qM4cRGrvfQW5axA+gXel3cSqBx7h8wGRS/BZoSrbSphNoPcMjB4j164Q1iuQ O8cfH1BvjFW4pPJ5ASU8OwPmSIe1/H9IiBMYlvBegJQUximRE69EnnmcEJjcFMUzwn0GkptdBNl7 qSJ4hjCfU1j7RE43/8ozo6UTnBJyCr2BF20SEGJDBHMyeIz3ejvIadkl3aAHjw9AdAhbB8pWnASE OMUPDz0Tg/MpDrAVqbzu0Xjs04jc2gslKNPjUFXhLs9FgenDIiNR9rwe1LrOJw6MWmncgpy+s2TT nwd5MArIrbYXTw3rEQlVCEFusiXKfg2wput6WWV7QxpxyyHZQYyNFFAlSwz1JZ5Lj9EoYNGWRuCK NOJGCdlgD4oimUIizfC8alj5rqskESsL5kVveB6bgBWXpOkm6PaPIJuTMIj3pA2nS0EjbgKVMyNd WIaqGas8OIae+4tmfUR9UEiknsKqSHqtMHMnGG/3sDnGfxS8V0lb6kGZKv2Gxqrz1xIxkf4LRKAW rD8dfjjcONyB8ELGXI20xcmA7okJaT5OfN7FranAJIdHIHcLYjV+ISoTLGKb0+kL+hjn1JoghJ6Q U3OS+3U4f8NzN/DeLbz3SDkong/ek1j8cEFFIMUzg1cuoG6GmK2s+dZUZCMQuoPnhBznnw3dNFWq PazofdlrTGgjdEKz2tDiCnhySp58oOKYKzVdtd24+/RhhioeksrJSTaltN/gvbH00iltOVc6tF1O FprEQ0ZKJ6PwMsGNmkZLEC6o71lfs2877LXSSUky9Yh0QrlaeSqbz2ksfedVzmZiD1k+1UpVi6oo h63C3hOulx6/+SR93LAv6XRG+FoHmCH6URN88yPgffaqLgb/CTAAyGGm5kxDxZgAAAAASUVORK5C YII="
        transform="translate(509.245 2045.413) scale(.8974)"
      />
      <circle
        className="st9"
        cx={527.1}
        cy={2063.2}
        r={10.9}
      />
      <circle
        className="st23"
        cx={527.1}
        cy={2063}
        r={8}
      />
      <text
        transform="translate(509.469 2102.903)"
        className="st5 st7">
        {"P-1004"}
      </text>
      <path
        className="st21"
        d="M547.9 1970.2h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        width={39}
        height={39}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA8pJREFUeNrsmHlv2kAQxb1rGwIh CQltmvSQ+v2/Vs80bcjBEWzs7bp6E72MFnxA80dVpBFgzPjnt3N5o+j/6x9/mRfy6bo6S/YMZQKA bhfgZA9g2mwAxhFU2QbU7KiYVRbDWMmSrKDPjmDdPhVkpQQo9daDvxTHRMkKag3L6HNBwBsVTTrC xfhvBdX3NiDr43iMC1YwK9jS2yOsgs0J1oUgk45wAnbobeTtGHaEYwfw7QBWAc29PXib4X1OwLlS 07UF1HADwIy9vfI28XaG70f4nQEXALvzduvtxtsU3+8BulJJ5JoCMlwKdY4B9cbbpbcLb6+9nQLw AOeWWMolACu4X96uvf2ASbw6nOvaAOqE6GNJJwD7AHsLwBMscT8Qg3OodQOlR3ReRJntsNzVdV1T BS2WdgiVzgH2Ee+XWGJWz1ApyQE5xk2MKAwiymjO7FpALr4J7vaI1HsPuHdQ7xg3kFItZEVylely 7ZwyW7JbstokDdVL4fgESXGhYm8MuJ6qgRJLCdXIhJY1pwSSDF/ieLkN0ASSYwjACaDOsayinKii +7FTXUd+XwNG4vIn3ntQcl2XJLq0HALmDJCn+D6gLmJr2mlM0OJvrMpTj9ulrVliS/E3hMMTCvSD QGtr04UG8DtUsSlqN3LKxVk6h3SLbcrVxbXEpLTGHsWn+DO2wQgVk6MBxRsrZ1rAhepronwZXsI2 hTohi1sqV5eMG2Os7sUDZ6kqftdR3qlZsSC/z4YFW+OEHeQoohnNdeUOkOyXx65noHaLYhF1gQy1 aUFj0iowJjVRrqQhNqNZcUWgT5C2wdIWNDI9YESSea4tpACuaYCdo4MscIwBa4eFkhSc0zw3RcEe UTZH1EmiQDfhniw3fA9/ctML1YufHG/KLl23+qh/g0AdtCoedXIx3Axt7crbF2+fvX3HrDgD5J/4 j1uUA35ASqnx2wAUJxeDPUIphvuE9ysoueTnlLhBjYoCatrAY2WhgDgJlhQiGq5S7xuOz3D+U0wn DWpVRHE4I+UiQEjyTNCrD1XDl4F1ifNuMfJ/rYFr/EwSqYvw8+4KF51iTuQhIqH/ZpQUU3omucKY dUdzYNHmqU6rmGOpXGCeu4aCAsgKZqS0VIEpPnPJ0oW6VZPn+Espo2XCGdGzRmiJH2mZZ1T7eMwv dGcyHRu7paGhR7B9NdMZVUulI0nnyDa0uM6bRyawccTlJ9YDZ6C9relzQb+7fe1umcAOl1G7XGZD i3Ntd7d22WE1WzYvTc3Y5v72/uAmH6ZhRWg8osXRy706zY2/BRgAUS2lBKuTz+YAAAAASUVORK5C YII="
        transform="translate(509.245 1966.934) scale(.8974)"
      />
      <circle
        className="st9"
        cx={527.1}
        cy={1984.7}
        r={10.9}
      />
      <circle
        className="st23"
        cx={527.1}
        cy={1984.5}
        r={8}
      />
      <text
        transform="translate(509.469 2024.423)"
        className="st5 st7">
        {"P-1003"}
      </text>
      <text
        transform="translate(939.508 2034.423)"
        className="st5 st7">
        {"VE-1116"}
      </text>
      <path
        className="st1"
        d="M505.9 2078.4h-14.3c-2.8 0-5-2.3-5-5V2005c0-3.5 2.8-6.3 6.3-6.3h13M947.9 950.1h14.3c2.8 0 5 2.3 5 5v68.4c0 3.5-2.8 6.3-6.3 6.3h-13"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={157}
        height={141}
        xlinkHref="data:image/png;base64,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"
        transform="translate(384.7 858.9)"
      />
      <path
        className="st9"
        d="M443.3 868.8h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V875.1c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* ORP Entrada Planta */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(0, "ORP Entrada Planta", false)}>
        <path
          className={getTarjetaClass(0, selected)}
          d="M394 876.2h138.1V976H394z"
        />
        <text
          transform="translate(444.83 961.081)"
          className="st5 st18">
          {getScaledValue(datosScada.d0, 0)}
        </text>
        <text
          transform="translate(483.956 960.686)"
          className="st5 st33">
          {" mV"}
        </text>
        <text
          transform="translate(446.143 896.122)"
          className="st5 st7">
          {"AE-109"}
        </text>
        <text
          transform="translate(423.866 916.602)"
          className="st30">
          <tspan
            x={0}
            y={0}
            className="st28 st34">
            {"ORP Entrada"}
          </tspan>
          <tspan
            x={20.2}
            y={15.6}
            className="st28 st34">
            {"Planta"}
          </tspan>
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(0, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(0, "ORP Entrada Planta");
        }}>
        <path d="M417.9 949c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M416.2 948c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM427.5 946.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M428.1 944.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM429 954v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM424 961.5c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin ORP Entrada Planta */}

      <circle
        className="st35"
        cx={462.5}
        cy={1013.9}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={157}
        height={141}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAACNCAYAAABGx8NOAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABwFJREFUeNrsmwtz2lYQRiUhDH7E TZNM//8PTJ34BUaAVNHZbb9uroRIySQS58zsIGMsjcRhH1c4ywB+Avkvui/4tWl+hix5z98j3+VJ 13yPkOWJwuVhOz4HlyVfE2KwgOUJwh2ikMjlMUoI05bOow7hzx0V8Jh4KtgsRGmPRRCQ0jv90nqQ a2+xC4+5SNgpX3lEOo/S4spiLuECprIe4k1LvCjd1qKS2Nrvasl+zVDxVLq5ybZoY9nGtcVSJOyT D6ZVYj27HQTbtPHWxtrizaKy12Rd8pU9PZ1LtzDRbtu4k7ix512+mZRcMt40M14tmc6le23jpY1n e1QHtrY9KOPlUl7nltkOov3WxnuLw/Y7k2+ZEA/hpimgi1eZeK8m3KMlqNIc0Ay5FR+aLvHyMEws TK77Nj608cnid3vuTsQrg+3IN70yqxlvbeI9miNXIp32gXViuaVXvNLEu7UMdxDvD4uPlvnurNzO 6fEuotymxPPkM5MecCt93l6m3X/21Vdq55Lx3lmW+2jifRLxlkE8st30hwvv8V7MEZduFwaOjQlY xKxX9pRZXz7xweLe5PsgGe9WhgsGi+lnvEYyWBWkO8i4kkHj2X723n8/dLiYhax3Z5nvXZhsr2w/ rOFd1mQ7l0zm0t1L+9U1dHaWWpdGs56v4cV1vGXIdsh2GRLuRaKdJaDb7N8lNvci9v6DMp7esfCl lXjXYsZQcdHZzzPfUmIR2q8i5UWqx8uyb78YMEtEfA3l9XLwEqv37TVB+XZqbffvTFkcOUD8Vkre EUh3OXR9W2mWpb80knSkOPFAlFQ45kcxpOcvvuMgqdIMiJedUgGLgTsEOGsiKrh28AOFzBEPfrmx GADxAPEAEA8QDwDxAPEAEA8QDwDxAPEA8QAQDxAPAPEA8QAQDxAPAPEA8QAQDxAPEA8A8QDxABAP EA8A8QDxABAPEA8A8QDxAPEAEA8QDwDxAPEAEA8QDwDxAPEAEA8QDxAPAPEA8QAQDxAPAPEA8QAQ DxAPAPEA8QDxABAPEA8A8QDxABAPEA8A8QDxABAPEA8QDwDxAPEAEA8QDwDxAPEAEA8QDxCPSwCI B4gHgHiAeACIB4gHgHiAeACIB4gHiAeAeIB4AIgHo6IJjyeJ1/T9IUDw4yRfihMO0PyfA8Gk5Ws6 tv+XeE1HAKT8qC16PSkH7KwOO4w7nqKE+Q8oRVOiTsReou5IVE1KvFTK9J3uEuEHKSzyCQuXf6do zUQFjF5sJaIjdUq+sifb1WGnVRubEDMp2fmZs8XPEi/GEAGbxOMUWxM/D086lcWbhXtRmTNaHY+W 2kZS5852dNjpqo1Xi2v728Nrr0zAMYvnkmn21u285/yacN2m3JaoeFvz4kXi4MbanveEtU+de9nT 16l0h50+t/Fo0s3sdZWJV3ZkiLGU1kJiZlHKY9EziPk124fYhZ6nnkjpbUS8tXnx1dx4tJ9XIl+q 3HZmvL2U15Xt7EsbS8l0h9/dJMTLR5zpDucxt3O6sm2PMmRA7Xf20tdUUmoq6XumkPmaDvEe2vhs jjxa5ovinVRqNybeUxuLIN3LRMTTTOfCLS2zX9v20q7JPPSzsSXxCrGWvsdF3A9ZZhiReN7becb7 0+KruZHKeJ3iRaPfpOQUtoPKjL6zN2Y+AfFmkumu7QN1J7Gz512+XHodl25t10X7nZXI19tsjzTj bew8n0y4h5DxqtDjNcfEa6RsrOVC78TyG8uCcxkuxjZgRPGWIt19G+9lStubfL6E1ISq8GJvwKM9 PtlzK3vN2MWLQ1T8wD1bPIl4OxHvaKnVery1N8cPpnV9If1PMeLhQsusi+fSreWT6x9E7XP1ejxa j/NFep1nEa+aQMbLwiC1C+3FKgwWu66+thyQUivpZfxCX0mJnSWkG2vGW4h4L6FU+jrmTeh1X02y B+lzHoJ4Vd/SwsgyXpRvK2W3CgNV57n2iVd3LLF431d2rHONUTyfaL3Hc+nWiaHhVq6bLzV5c/1Z xHuSJrtKTLZjF69JTPRxCalzii8HHKgOBykSi6tTWDjWPu8tfIK1l7m112UdU91Dosxus4E3z0fa 76UWzOu+Ncty4BSjfV4e3rSx3yLLwpKK3vLZBvGeQ8bbWFbz/u5BhotUb1dPYAG5axiNP/eeY3ni AbrK6di/IKAlN9592Ib1zGu5bpVMdD7JxoFiN6FM11d6s1M+VOUZDpZP5ILWslZZh/7Fl5V0IT2T tc5XWbfT8jpV6U6S7BzinfXgIykbexFP1y0zWcfbhL5QV+ynVl7PQsklSE7zUTwvt3rPNsu+vUer WW7Kme5szTV0T7v6jZVZ9t97tfFbKTXSId45J948S69Zdv2LAKUV8c52jVJrlif/dxUg3rmvFcIB AECCvwQYAEWCONOfCQo+AAAAAElFTkSuQmCC"
        transform="translate(541.458 858.9)"
      />
      <path
        className="st9"
        d="M600 868.8h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V875.1c0-3.5-2.8-6.3-6.3-6.3H600z"
      />

      {/* pH Entrada Planta */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(4, "pH Entrada Planta", false)}>
        <path
          className={getTarjetaClass(4, selected)}
          d="M550.7 876.2h138.1V976H550.7z"
        />
        <text
          transform="translate(601.588 961.081)"
          className="st5 st18">
          {getScaledValue(datosScada.d4, 1)}
        </text>
        <text
          transform="translate(640.713 960.686)"
          className="st5 st33">
          {" pH"}
        </text>
        <text
          transform="translate(602.9 896.122)"
          className="st5 st7">
          {"AE-108"}
        </text>
        <text
          transform="translate(586.4 916.602)"
          className="st30">
          <tspan
            x={0}
            y={0}
            className="st28 st34">
            {"pH Entrada"}
          </tspan>
          <tspan
            x={14.5}
            y={15.6}
            className="st28 st34">
            {"Planta"}
          </tspan>
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(4, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(4, "pH Entrada Planta");
        }}>
        <path d="M574.6 949c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M572.9 948c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM584.2 946.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M584.8 944.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM585.7 954v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM580.7 961.5c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin pH Entrada Planta */}

      <circle
        className="st35"
        cx={619.3}
        cy={1013.9}
        r={9.2}
      />
      <path
        className="st0"
        d="M968.5 995.2h376c5 0 9.1 4.1 9.1 9.1v177c0 5-4.1 9.1-9.1 9.1H84.1c-4.3 0-7.8 3.5-7.8 7.8v52c0 4.3 3.5 7.8 7.8 7.8h106.1M878.3 1610.8h43.3"
      />
      <path
        className="st21"
        d="M341.3 1268.6h-132c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.2-2.7 3.8-6 3.8z"
      />
      <path
        className="st28"
        d="M342.6 1268.6h-133c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.7.4.5.9-.2.9z"
      />
      <path
        className="st0"
        d="M522.9 1329.4H277.3c-2.8 0-5-2.3-5-5v-49"
      />
      <path
        className="st22"
        d="M193.8 1264.3c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st9"
        d="M193.8 1252.6c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st0"
        d="M421.6 1953.2h44.6"
      />
      <path
        className="st22"
        d="M469.8 1959.5c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st9"
        d="M469.8 1947.8c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st0"
        d="M553.3 2052.2h564.2"
      />
      <path
        className="st22"
        d="M1117.5 2058.6c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st9"
        d="M1117.5 2046.9c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st0"
        d="M570.8 1810.5h472.1"
      />
      <path
        className="st22"
        d="M1117.5 1816.8c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st9"
        d="M1117.5 1805.1c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st0"
        d="M561.5 1974.5h481.4"
      />
      <path
        className="st22"
        d="M1117.5 1980.8c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st9"
        d="M1117.5 1969.1c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st0"
        d="M571.9 1304h102.8"
      />
      <path
        className="st21"
        d="M824.8 1317.8h-132c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.7 3.8-6 3.8z"
      />
      <path
        className="st28"
        d="M826.1 1317.8h-133c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.7.3.5.9-.2.9z"
      />
      <path
        className="st22"
        d="M678.3 1310.4c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st9"
        d="M678.3 1298.7c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st2"
        d="M167.4 1339.3h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM152.2 1343.2l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st2"
        d="m167.8 1353.8-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st3"
        d="M160 1338.3v10"
      />
      <path
        className="st4"
        d="M151 1330.3h18M160 1331.3v8"
      />
      <path
        className="st0"
        d="M146.1 1348.6h-16.4c-2.8 0-5-2.3-5-5l.4-85.1M352.4 1257.9h795.5M834.3 1304h16.4c2.8 0 5-2.3 5-5l-.4-39.1"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={157}
        height={141}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAACOCAYAAADAU7HgAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABv5JREFUeNrsmwtzm1YQRgFdSVZk u0nTx///fa0bO3pYbwoze6df1xeBHCcx6JyZHWRHhgGO9nFRsgzgJ5C/s/1APyh/tDD5mb9FvuuU rnyNkOEC2XSrgXTXK1/porOAoYN0GoVsC/c75Lse6eo4uShl2ypg6JDlomQjF0H+LQald/ilVWU7 VHGUbYzSZcVO4vkMFyUbS0xsG5yAOeINWryY1aJs+yp2EnuLo72vMfOdK7WFCFeLdmMxs+3Ufn9O PhiWgCpdLdq2ik0VzxYbc2An2S8pX2jIdrGcjk2yD1XMq7i1mIuAUb6RK7cIOLxBIooXpatlW1Wx rGJh2+jAzv7meEmpLUy6qUl3X8UvVXy07b3IN7X3jsh4g+bkxIvS1cI9SgLKE9PuyWe9kMh2hZTZ G8twtXCfq/itil/t5zuT0otHthv2JHsQ8WrpniwBje3+N028nUvtxIlXS/dnFb9X8cmynopHjzf8 cpsS79ZcKdy/x0HjYL/PdV9Npdb3d/eW6Wr5/rDXKl7IWM+7puFib+LN7f5H6bT329jrfarPCw39 XVxCiT3erYn2yaT7bD/PGvo75BtuxotZbeYyXS3ZWgaNlQk4kveUXYaLcGaq1clWyywT7fVMtsFJ t7S+fy5SxtWOF5UwuN4uNWD4dTyNiYiHbNcz3R5let2ZbHO30jHJ/r++27qcEilc2fVPL0KWXr+D YZOLdDEpTbP/HipMxY9GN7o8MmsL+rrrlE+rYioxjdzAqeW2LC4wPD8ztSLd9WW8Inv5BZJUUko6 U7zigDnLJtAyG7Q6UnTYIRkNLpGwky8MBfCWGa8ziAffQ8asTUjEg58C4gHiAeIBIB4gHgDiAeIB IB4gHgDiAeIB4gEgHiAeAOIB4gEgHiAeAOIB4gEgHiAeIB4A4gHiASAeIB4A4gHiASAeIB4A4gHi AeIBIB4gHgDiAeIBIB4gHgDiAeIBIB4gHiAeAOIB4gEgHiAeAOIB4gEgHiAeAOIB4gHiASAeIB4A 4gHiASAeIB4A4gHiASAeIB4gHgDiAeIBIB4gHgDiAeIBIB4gHgDiAeIB4gEgHiAeAOIB4gEgHiAe AOIB4gEgHiAeIB4A4kGvKGVbys+dxPN/VHI9ocWTixwpftSB4Gok7JSoio47zJANOiSik0Vrcgod d6o7PF1ygB6Sf4d+Z4jCqQdHF61+hA7C1Ts6uNCD5AMXLv8G0YbaI6tse4nox14ELFMtWjgziah0 9Y52VWxlO7FSXUrJznsuno+uApZnruOQKoK6EZ2IPmjsJUGdupbauOMoXL2jTRXPVayrWFVxU8XI 3jc28fKeiudlK+R89HWTfG0tyZAEjOcQM13tw1JiZZ7EBHWQ69BJvJjpdiZdvcNFFV+rmJl0R3s9 lhvUx9Kqwo0kgrwuzpxjqtc5JHqeoSxPxfPcmXi1E48WX03AtYh3TH3oQovRKt2jZLqj/duNiTfq YcZT8aJ0Y4mJxdiuU0hkPa0OB1d+tPdR+fosXtkg3oPFF/t5bX6kzr1RvJPU8Cjek/R0R0untwMQ L0bMcPW5TC2Tz+z8bux3pb2ncJ/+g/Q5G2lLnhP9Tt9Lbkq8hQn3t8n3ZM5sRbzOU61mvKW9L7eD bu1gc7shQcpRH3s7zXZRurl9sGLET+1EPmSl3IBNS7+zbyi5fRZvb+cXE9MXyXgruyaHpmWVkJjM dJrdyoWOWXBlN2ZmNyJ0aMD7IN7Eslt9bndV3Ffx0WWt2NNG8fTiL+wGxF5nITdgNwDxykRi2tr5 L2UGWLge79Q142kJyd2neytT7UTKbNHDiVbFCyLerUinGSvG1P7mZBd3ZRe8/rT/Y6GN9iZxE/o+ XKRWPdYWnbJ8OLMAGneeSbbb2s4n0nB76fqa8cZOvKVcRF2/9APW0qR7kD7Hl5whZbyUfLqe5weq 7JJ1vMxdJD3IyPV1xQULre9RvkLOqc5mH2RJYOMWRtduOWkj2a6W7i8T79FNd4em6a6n4pVuCenQ soTUudTqG4/uAIVbWO3r0wrtSUfS56lw+kl+tv7lg4j37MR7sFL7VTLmTm7GUB6hlYk1TL94fvZc Q4edl9LnnRILr9kAxIvybRM93U6y3Z1lvCAZbyET3RfLdlqmU4uoQ3uE1vSoMLuk1J5Lr6lS2vcv CUTxUuVC1+jiNK+PC7cyXDy5TOfXsYb2LZ6yw+tXi9e243wgFzOXJaNTon+J0+vM+sCRTLXPsoa3 vhLpLpLsW8R78wO/wwvoWwcdqmKp1QXzUkrxxvWFh2wYC8bfjcAlaJ3mdbE0LiHp2uYhe/lcduiZ 7s0abHhZdnM38Y6yl1+TSn0D94R0iPdWE2/htn6q67yMAIj3GgGzhHhZxn8FRbyfeJ0QDgAAAN4L /wowANX4N9I4sF89AAAAAElFTkSuQmCC"
        transform="translate(369.312 1173.977)"
      />
      <path
        className="st9"
        d="M427.8 1183.9h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Presión Rechazo */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(6, "Presión Rechazo", false)}>
        <path
          className={getTarjetaClass(6, selected)}
          d="M378.5 1191.3h138.1v99.8H378.5z"
        />
        <text
          transform="translate(429.304 1276.158)"
          className="st5 st18">
          {getScaledValue(datosScada.d6, 1)}
        </text>
        <text
          transform="translate(468.429 1275.763)"
          className="st5 st33">
          {" Bar"}
        </text>
        <text
          transform="translate(430.616 1211.2)"
          className="st5 st7">
          {"PT-123"}
        </text>
        <text
          transform="translate(424.957 1231.68)"
          className="st30">
          <tspan
            x={0}
            y={0}
            className="st28 st34">
            {"Presion"}
          </tspan>
          <tspan
            x={-3.6}
            y={15.6}
            className="st28 st34">
            {"Rechazo"}
          </tspan>
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(6, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(6, "Presión Rechazo");
        }}>
        <path d="M402.4 1264.1c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M400.7 1263.1c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM412 1261.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M412.6 1260c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM413.5 1269.1v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM408.5 1276.6c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presión Rechazo */}

      <circle
        className="st35"
        cx={447}
        cy={1329}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={157}
        height={141}
        xlinkHref="data:image/png;base64,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 AABJRU5ErkJggg=="
        transform="translate(559.647 1147.977)"
      />
      <path
        className="st9"
        d="M618.1 1157.9H575c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Presion Descarga Booster */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(2, "Presión Descarga Booster", false)}>
        <path
          className={getTarjetaClass(2, selected)}
          d="M568.8 1165.3h138.1v99.8H568.8z"
        />
        <text
          transform="translate(619.639 1250.158)"
          className="st5 st18">
          {getScaledValue(datosScada.d2, 1)}
        </text>
        <text
          transform="translate(658.764 1249.763)"
          className="st5 st33">
          {" Bar"}
        </text>
        <text
          transform="translate(620.951 1185.2)"
          className="st5 st7">
          {"PT-125"}
        </text>
        <text
          transform="translate(615.292 1205.68)"
          className="st30">
          <tspan
            x={0}
            y={0}
            className="st28 st34">
            {"Presion"}
          </tspan>
          <tspan
            x={-30}
            y={15.6}
            className="st28 st34">
            {"Descarga Booster"}
          </tspan>
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(2, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(2, "Presión Descarga Booster");
        }}>
        <path d="M592.7 1238.1c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M591 1237.1c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM602.3 1235.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M602.9 1234c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM603.8 1243.1v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM598.8 1250.6c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presion Descarga Booster */}

      <circle
        className="st35"
        cx={637.3}
        cy={1303}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={158}
        height={140}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAACMCAYAAACNmxDrAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABx1JREFUeNrsmolu20gQBUmROnwm mz3+/wM36ziWdUuzFNCDvG3PUFSctU2qCmgwEmIalEuve4YsCoB3oPwg54B+Et5CmrLl55DvsqUL 58pYnvF/ykQhHfIFkS0k3vsp8aJgIzlqeQnhstLueDwkKr6fTcD6hHRRsEqqtqqcgLTey2qtKt1O am/lBe0knkp3/D/jpiauVMDyxAwIwxPvYIJtrTZNre24NQf2ueSrT7TX2iSbNXVldW2vpyZk7dou DF/AKN3ORFs1tWxqYbXKzIAnxYvtdWKy3TR1J3Vj709d2yXxLmOuC06656aerGIHDJnFR1I8n3ZT S7j7pn6Tujf5ZpZ6VWbWg2GuYuNct7aEOwr3zYIqBpBfbOy7JF5lQk1NsE9N/dHUn039bvLdWupN 3JyHfJch3tbEmzf1aCFUSRpu3YKj1NTLJV4Ub2aCfW7qS1N/WX2xlnvtEo82e1mJtzLxrs2lIEKu ZLGxk+R7kXilm++ieDfWWr9Y2sXUu7fEG2dWtjDsxUUUL4ZPMMmWJuPc2nByDEu1Wi/etaWbn/Pu RDw9MfINf4ERxZtJ0q1tkfHdzf9+16NTq53IFsqtqxv5xYh3eeLtxZ+tSXdb/Nhum7QtPNtabdzD mxY/9vBixX28uJFMm708Afci3VScmJ6Srst2it6xmBbpuxaj4r97eHA5i4xKPBlLax07P/xDJaFt A3mUOXFVpO/TkniXhX9gpMq48UK6IrEFUrrU8yfMCYd0l0uZ8abVi9RtrtRJ9GQ8DgUp+YrijOc0 R2eYjGiQc+Tszjc6w2TaKrwmAc8SL3UyBIRfsjLpEqEAbyIeAOIB4gEgHiAeAOIB4gEgHiAeIB4A 4gHiASAeIB4A4gHiASAeIB4A4gHiAeIBIB4gHgDiAeIBIB4gHgDiAeIBIB4gHiAeAOIB4gEgHiAe AOIB4gEgHiAeAOIB4gHiASAeIB4A4gHiASAeIB4A4gHiASAeIB4gHgDiAeIBIB4gHgDiAeIBIB4g HgDiAeIB4gEgHiAeAOIB4gEgHiAeAOIB4gEgHiAeIB4A4gHiASAeIB4A4gHiASAeIB4A4gHiAeIF q0KOAO+SeCEjJsAvFy8kjggHxRnehHPFC5kCyI1knf0YtVh6rIOrIEdEhLaEC13Ea5Nu70olpP1C yHjT6kWdOZFKt2tqa7XLyDek1W/5PybCkGTz3TAXTskUrDP2HkS4jasoYfwl566OP7pwwclXvlK0 IX45QyaYtvJaQ+qFfHVGOj3huqlVU0up66bG9kepRbyy5+KVcg1l4nrKM2QLmRFmCLNcdCSGUXRk bbWRcDqkrjuXeFG8eMJFU89Nze04M9kOIl7ZU/FKSe3Sjvrv0iV6eWKwTs06euxz8ql40Y+5q4U5 0ypfasaLNse0W9gJvzf12NRVU5X9n5klX9Vj6UqRq3JVy/un7vJot9CusXfv9z39dBRbmRvfrI5+ PFk4raTlvlhs1JkPMIq3spMcpXsw0aJ0S5Nw3NPE06QbiWi1XdPEjmP5clWJ6/TD9dbNx/H1zg3j fUy+kBHv6MbfTf1jAs7Nj03XxAsu8aJ4R5On9sEf7P1bE6/O/EH6lHaVCDe1mtn1xdeTRLoHJ9xG 5pyVtJyNG7j7mnoq3lZa7dGPrybfg6VeFG/XtdX6Ez9Lqh3sZHNbYMx6POP5FjsW4Y7XduMqfnPH 0nbjNz8Kt5R5eGG1bBm4+554cRR7sqTLJV5oa7W5xUWUKth7S5n1xk68Pq1sVTxNu2tL87um7pv6 ZMLcSjeIn1tc2S1l8fVko0mcdZ7dsL3rqXh+ERW/cLErPsm1z2XG28tocTLxgnyopXy7N7KqnUqb HfVwcZESL6bdnQn3OSFNXFAVbs6Ji68HOz7KLkBMvV2Pxcvt4W1ku23hVrXZa21rtf69vUSrDtyj X7Dh+t6LC028KxPvs6TVWma1G9nD3Njn8d1azFdrNw+ywsttLxQ9TbzUWkDn21SyF10Sz8tWJKK1 ctL1UbzC7dvVtoC4kja5dAuEuKia2s9v3HAd60Fajs54ezfzFD0WT/cqd1L7xHWGruKFzE71Tv5Q fZzrUomXWmDoomAt0i0y4n0T6XTAfpaf3xXpByz6vJGcumfbabO87nDygywuDomtiD6T2svTdqFt JA7Rt5aMPvEeTLpHSzs/6+wHIl2R2fv1r1uvrz7j5Ll2Wg7gA9SFxi5RG1lEXIt4W1nRPWbmur7v 3XVtvcU5X6j6lb+oLIb1ONQh0T50M32eWNUuZdsk3qtMtdeiGObjUT9F/V6/+IN+iGVieNb71s+W dpXbx1u5hcj2AqR7FTUfQXIryc8qulGsj4HpnQudCft8d+JNh2tIz3xl8fKJldy92tzTt4B4P73i 9c/plZn9rCE8c4d4HzD9Up/Z0J4yRryefVYIBwAACf4VYAB7xFevxKfnDAAAAABJRU5ErkJggg=="
        transform="translate(558.7 1349.9)"
      />
      <path
        className="st9"
        d="M618.1 1359H575c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Caudal de Rechazo */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(14, "Caudal de Rechazo", false)}>
        <path
          className={getTarjetaClass(14, selected)}
          d="M568.8 1366.4h138.1v99.8H568.8z"
        />
        <text
          transform="translate(619.639 1451.281)"
          className="st5 st18">
          {getScaledValue(datosScada.d14, 1)}
        </text>
        <text
          transform="translate(658.764 1450.886)"
          className="st5 st33">
          {" m\xB3/hr"}
        </text>
        <text
          transform="translate(620.951 1386.322)"
          className="st5 st7">
          {"FIT-133"}
        </text>
        <text
          transform="translate(616.733 1406.802)"
          className="st30">
          <tspan
            x={0}
            y={0}
            className="st28 st34">
            {"Caudal"}
          </tspan>
          <tspan
            x={-14.1}
            y={15.6}
            className="st28 st34">
            {"de Rechazo"}
          </tspan>
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(14, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(14, "Caudal de Rechazo");
        }}>
        <path d="M592.7 1439.2c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M591 1438.2c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM602.3 1436.9c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M602.9 1435.1c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM603.8 1444.2v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM598.8 1451.7c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Caudal de Rechazo */}

      <circle
        className="st35"
        cx={637.3}
        cy={1504.1}
        r={9.2}
      />
      <path
        className="st21"
        d="M563.1 1300.7h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        width={39}
        height={39}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA69JREFUeNrsmOty2jAQhW1ZBmIg zbVN7+//XG1n0qQpDcRAMEaVO2czJxsZbJdefsQzZwzGrD5ptauVouj5er46X/F/Y0TZ4ruD5HL/ AjCuUUSArub7HwUUEBNQrEZto+TovndADZZ4Wa8Ud0uQArJWKgPAewEUOIbqeQ2gPr6ngBS4e6+V 15I+Fwo26HrbES4FTOY19BpD1ecD/Jag8Qpm4ZUrzQlWQJ8Eku0A1wPEyOuF1wl0jO9DjKYALgEz 85p6/fCaeN3iWQ7QKARpO4xcBXcIqFekU68jgNcBVnA3XtfQDRhm1N4jSNsiICwaHgHmtdc7r7f4 fEYj2CPAAi6+I0B5rw/bOgVtmgJGyrVDuPLC673XR9wv8HyMTliK4hIuXOAdGeUDan+D9zhgfv3f Nhy9FA1Xrj3HiFVgHzCCZ/jtAO8mgTQzhDLYStHOGoGyooB5iOomLhbADL0XwDe4n+N5RnBGJeqU UpLkS0fuzzEFJGAEMrYNli9x7wgg1Wi9hE4wchnesQpOLk7qknsFboqolsgWyHgbYKSCow/3SFo5 xXwKwenk76ij7PYxOnysol+8sI5qels3/wTwCBqrOWdqViYuHgytQAOal5zgH3XU7JiDPIIZejmm ZLwLrq4c46WyT0uk1fbMDkM8BweAzGAw3eLWtus5FxnMFJsdvZWJnVAkpiqVtIULDYJRtmJ2Yehq UgX/Ti3pAnVisE2zw8iGsnxBkurD7QGwDNSJD++ZLX+OaBVYITfNoaUqk1wLsE3Ari67HkbUNOjl GkA5qo4Zsv6iJaRTS5+sz7rTjQF5Eb8H4C0qEqnlmkI6KhwK8sYMtqbo9BK/N1qLdW/vYOy71zcq DhK1izOBIBK3FoAQWxPYm1CHC+5s0jAtGEo1PZINADoFVdJ8E7gK6Mrri9dn3K8BveCKJmmZs3jR N2pzvqH5I1FZENgcrqxG7CugPuF+iedSKJRNClYdyUs00KP/rdHjGYqIEZVdhv6/UpXLFQFe4llO QeLaVNSOdmc5NVwS9AQVzqEq+SMVZFPak1xiJK/ItYVO2rYBXEQTPFKjMqdGjwlQNk0uADjB+xIc U9h5kmLaLFd6ge9RuTSiffFIVdZRYG88pXya02a+DKWqLlWICYAOqJ7rq8qaU5Uk54U6YSjrjkC6 Hn3ENZVOqGzipa3Yckbj9nl41OR0K1bHbpwX+Xu0z8OjbaBxoMSPAptyfV74Vw4w65J7qEJqddK6 zyPgXfY61Y4/BRgAuOqtItEH4vQAAAAASUVORK5CYII="
        transform="translate(524.375 1297.454) scale(.8974)"
      />
      <circle
        className="st9"
        cx={542.2}
        cy={1315.2}
        r={10.9}
      />
      <circle
        className="st23"
        cx={542.2}
        cy={1315}
        r={8}
      />
      <text
        transform="translate(527.658 1354.943)"
        className="st5 st7">
        {"P-003"}
      </text>
      <path
        className="st2"
        d="M568.1 1533.9h3.7v11h-3.7z"
      />
      <path
        className="st2"
        d="M577.1 1527.9c.7.7.7 2 0 2.8l-5.6 5.6c-.7.7-2 .7-2.8 0l-5.6-5.6c-.7-.7-.7-2 0-2.8"
      />
      <path
        className="st1"
        d="M173.1 1347.8h17.4c4.1 0 7.4 3.3 7.4 7.4V1574c0 4.8 3.9 8.7 8.7 8.7h48"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={157}
        height={141}
        xlinkHref="data:image/png;base64,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"
        transform="translate(826.462 1103.222)"
      />
      <path
        className="st9"
        d="M885.1 1113.1H842c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Cloro Libre Producto */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(11, "Cloro Libre Producto", false)}>
        <path
          className={getTarjetaClass(11, selected)}
          d="M835.8 1120.5h138.1v99.8H835.8z"
        />
        <text
          transform="translate(886.592 1205.403)"
          className="st5 st18">
          {getScaledValue(datosScada.d11, 1)}
        </text>
        <text
          transform="translate(925.717 1205.008)"
          className="st5 st33">
          {" ppm"}
        </text>
        <text
          transform="translate(887.904 1140.444)"
          className="st5 st7">
          {"AE-130"}
        </text>
        <text
          transform="translate(872.492 1160.924)"
          className="st30">
          <tspan
            x={0}
            y={0}
            className="st28 st34">
            {"Cloro Libre"}
          </tspan>
          <tspan
            x={5.8}
            y={15.6}
            className="st28 st34">
            {"Producto"}
          </tspan>
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(11, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(11, "Cloro Libre Producto");
        }}>
        <path d="M859.7 1193.3c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M858 1192.3c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM869.3 1191c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M869.9 1189.2c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM870.8 1198.3v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM865.8 1205.8c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Cloro Libre Producto */}

      <circle
        className="st35"
        cx={904.3}
        cy={1258.2}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={157}
        height={141}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAACOCAYAAADAU7HgAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAByFJREFUeNrsmolu21YQRUmKWiy7 Sdog6P9/X+vGixxtXEoC84qLyeMi14ZD6hxgQFm2KUg8um/mSUkC8AGkv+i54Nel/ihZ0p7/R77r kq5+rZD5hcKl7naKdFctXy11kYDpBcKFyqz05xT5rkq69ljJsRIBqzECDiVe5mRbuMoiIsK8xVPZ yqYKO5YR6erXiKdS5VZLV7kTcKgHhGkvq4kTrq1zUyc7nu2aly4VR4unCdf+zcpqI7W2+7x8yDZf CUPSFSZbWwepo9XZ5Eu65Mt7erqQdK1gN01tm7pt6s5ub518Gf3eVfR1pYl1NNlerHZ2DP6c7H/S 2LKbD0i3Mula2T5bfbK6s9+tXerR6827tysk6X409dzUowRQGpl4RyfeQtJua8L90dRXO34x+W5F vLyjz4N5ire3lHu0AFra9fcDSBUbNvKOtMvsRBtJu1a6P5v6ZvJ9duIt6PFmv9x68Z7Nj7Vd/1oG j7NMvNXQUquJF8S7lcT7ZvJ97RCP/m7eiRfECuLdmSNBusINHGHazXzqxXq8TMQLS+2dLa+/m3RB vK3YzmBxHYlXyXChSXc2GcOg8cN+XpiQyaXDRUi932SwCBXW9jzhI7S5S5dI4pXmRkiyk4n21NSD ebEyNzSU6qGlNnMDxka2VELd2P1LptmrW3ILka6wZLu12poXus32kxt94vlPLFaulhGjEe86xAvX eeWCST9YWPYNnLlbYtOIfAsZHsJRT5ixjXJ16Of2Yz5KTYd6vCTSp2WRSjtkhXmTRnY/Yl8eiUmn rtTZwIOkPbeR7rrlSyMDadaRcmksMi95IASDWDilA2GVvEa8rgdCQuhbIQebxLEmA7xZEGW8dvCO PWCnkIgHHwLiAeIB4gEgHiAeAOIB4gEgHiAeAOIB4gHiASAeIB4A4gHiASAeIB4A4gHiASAeIB4g HgDiAeIBIB4gHgDiAeIBIB4gHgDiAeIB4gEgHiAeAOIB4gEgHiAeAOIB4gEgHiAeIB4A4gHiASAe IB4A4gHiASAeIB4A4gHiAeIBIB4gHgDiAeIBIB4gHgDiAeIBIB4gHiAeAOIB4gEgHiAeAOIB4gEg HiAeAOIB4gHiASAeIB4A4gHiASAeIB4A4gHiASAeIB4gHsBrqeVYy8+jxPP/VPN6woAnFzmS/Y8H QUaI+TEqqDKEgzdMvMpq0JV84GSVO1l16QNMkPQd+p05CldFHKkizkT9yHtOricumyrcMdyfvsMF m6qI9RWIp7IVVmerQqqMyPefhHnHJKInDic9NXW0Y6jMLdnpDARLpcYKWA9MdPWMpKudG8GLo/hx FvGqS5faUk58aGrf1A+rm6YW9neFiZdOVDwVLus49qV67VaIuqM9mYOA3g11ItReBCy65Ms7YjQs qSc70UtTz009NbW1/6vtwZcm4RTF89Jl9lx8qYh9FyO8dlrhvjnIp8/1ZKK1TjxaPZsrexGvjPV5 XYkXjD7aydsTPljS5fZiHu3n1UTF89It7Lnl9mZa2THct4iknl4I3+/4vmcOOwMx8Vrh7pv6xxx5 tvuP9vwrl/qdiafiHczg9uRrSbr2QXcd4k1NvpB0KtxGam21dOkXWx2O9podIj1P9AJMdOtEV8M2 8b439ZfJ92jOHKTX651qtVdR8Xb2d5n97mQnvrUL4y/IlKQLFVJtbW+mrT2/UKV7rqlLuqP0Oy9W od85SPJVM0i8ShIv+PFg8t2biCHxiq5tlbzn5OEFXUhvU9iDhV5v5S7GlCbb1C2zIena53XX1Kem PrspbePehCrdzl6XJ1tuRvc7E5KurxV7kj5PxRtMPJ96hVwcv67fWDqs5EKkE008Fe/GEq6V7otM aGfp39Yu/ff2Yj/KO//BLsROzjF18XwrVkZ2PDTpe1M+H4jUwi2/QbyVSBcbLKaUetrfbSTtdm5r IPRwG3vOYcDamXRhqbm324/2u8PQu39Caec3kM9uy01fq6JrD69vqY3tS6nhuSRdNlHp/ES7tDTb ynJxcJuje9nDLO33zyZa21j/LeI9SZN9Sn7eyZ+DfKX0uTrBly7dR39kFtuJr2SaWYh0ycQ3j1PZ rwvL7d4Jd5A+TreUdKq7l22F0Ov4ZXbKU61fbhNJPr9fqZvG9djE60q+yk2CXRuqU948XrotEF1i g2QqXhi0Hky47x17WeWYizFBuj6LHUz1/ALDu/q4qX85QN9ERaTC9PZi/d+N9Hi6zxmb6k4z2UYZ syomlzzH/MIHqjt6uTl8MyV1yVS5bYMX6//WIt5JprmdTHVHN9VVybyoO26PJv/IB/8FxYt9F7GQ /Sr9BKMWKcNG8eEKltc37XMgvrcXpvewUb6Uad5/g+ckKTf1CRbxPlA+L+DCTfOxLQVNOaRDvDeZ eGNfjer67h3SId6bpJ9PwtiWU4JwiPeeCThmWwEAAADgI/lXgAEARYVDD00S20wAAAAASUVORK5C YII="
        transform="translate(983.22 1103.222)"
      />
      <path
        className="st9"
        d="M1041.8 1113.1h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* pH Salida Producto */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(12, "pH Salida Producto", false)}>
        <path
          className={getTarjetaClass(12, selected)}
          d="M992.5 1120.5h138.1v99.8H992.5z"
        />
        <text
          transform="translate(1043.35 1205.403)"
          className="st5 st18">
          {getScaledValue(datosScada.d12, 1)}
        </text>
        <text
          transform="translate(1082.474 1205.008)"
          className="st5 st33">
          {" pH"}
        </text>
        <text
          transform="translate(1044.662 1140.444)"
          className="st5 st7">
          {"AE-131"}
        </text>
        <text
          transform="translate(1032.858 1160.924)"
          className="st30">
          <tspan
            x={0}
            y={0}
            className="st28 st34">
            {"pH Salida"}
          </tspan>
          <tspan
            x={2.2}
            y={15.6}
            className="st28 st34">
            {"Producto"}
          </tspan>
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(12, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(12, "pH Salida Producto");
        }}>
        <path d="M1016.4 1193.3c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M1014.7 1192.3c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM1026 1191c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M1026.6 1189.2c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM1027.5 1198.3v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1022.5 1205.8c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin pH Salida Producto */}

      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={157}
        height={141}
        xlinkHref="data:image/png;base64,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"
        transform="translate(1186.468 1103.222)"
      />
      <path
        className="st9"
        d="M1245.1 1113.1H1202c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Caudal de Producto */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(8, "Caudal de Producto", false)}>
        <path
          className={getTarjetaClass(8, selected)}
          d="M1195.8 1120.5h138.1v99.8h-138.1z"
        />
        <text
          transform="translate(1246.597 1205.403)"
          className="st5 st18">
          {getScaledValue(datosScada.d8, 1)}
        </text>
        <text
          transform="translate(1284.722 1205.008)"
          className="st5 st33">
          {" m\xB3/hr"}
        </text>
        <text
          transform="translate(1247.91 1140.444)"
          className="st5 st7">
          {"FIT-107"}
        </text>
        <text
          transform="translate(1234.656 1160.924)"
          className="st30">
          <tspan
            x={0}
            y={0}
            className="st28 st34">
            {"Caudal de"}
          </tspan>
          <tspan
            x={3.6}
            y={15.6}
            className="st28 st34">
            {"Producto"}
          </tspan>
        </text>
      </g>
      {/* Campana */}

      <g
        className={`${getTemaAlarma(8, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(8, "Caudal de Producto");
        }}>
        <path d="M1219.7 1193.3c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M1218 1192.3c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM1229.3 1191c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M1229.9 1189.2c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM1230.8 1198.3v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1225.8 1205.8c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Caudal de Producto */}

      <circle
        className="st35"
        cx={1061}
        cy={1258.2}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={157}
        height={140}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAACNCAYAAABGx8NOAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABu9JREFUeNrsmw1z2kYQhnVCYPyd pEn//w9s7dg42GCJq5jZ7by9nkC4qR1JzzOzI8zHKYJHe3srpSgAPoDwi40DwyG+pzDhwGeRb5rC xbcIWZ0oXJAoMluYnoBRoreAVU/p9lEmj8tEROSblnQeO4so23hMwKqHdC7ZTLaV/K0SwnSkc+Ga TPhrnfJVPaSbWcwlFrZVAcORGhDGUdepdLXFq8XWtrUImJWv6iFdZaItkzgTAV0+hJtOtqtFtpck NomAvaZareMqE2wv2mUbVxLn9vzC3leS8SaR8Xx6Vel+WDyZC+ns16TjVAeyXWXZbGmi3bbxyeLG nruQrEetN51s5+JtTLhVGw/mwiyRVBcfnRkvJNPsmcm1F+1LG1/b+K2Nz/bcpb1HxSPbTUe8Z8ty DzYDzu23j/YerfW0/XI04y0S8b618bsJeGviLUU82irjn25dvK2JtzIPXDrNhr7YSOXrzHgzqe/2 4l1blvtq4n2zKdfFqxBvcuJ5xvNZz6Xb13xri2dZaBR9p9q5DXhu9dyNyffF4pPstGKanYx4UcTz Gj/Y32vLgI9Sgs1ytX+VWYVqjTeXrHdlme/G4trEWyTtFOQbv3jeTpnbc7VJ5wvOpSSktM97tMbT Hp63VM6TSK2GaQi4k9VrnXFiIdLlru/HPn08v1KRhl+50B3ANMQrpaabZ6LqmmIP1Xia9dLLZjOp 58qi+3IZjJdgGS8U/76Gn16/L3PZrjhQl/njsmOgsuCWqKnLlwqVu4up04+y506KgqsScFjAk2a9 8oQd/KcdweRkPDgblj0HAPip0AIBxAPEA0A8QDwAxAPEA0A8QDwAxAPEA8QDQDxAPADEA8QDQDxA PADEA8QDQDxAPEA8AMQDxANAPEA8AMQDxANAPEA8AMQDxAPEA0A8QDwAxAPEA0A8QDwAxAPEA0A8 QDxAPADEA8QDQDxAPADEA8QDQDxAPADEA8QDxANAPEA8AMQDxANAPEA8AMQDxANAPEA8QDwAxAPE A0A8QDwAxAPEA0A8QDwAxAPEA8QDQDxAPADEA8QDQDxAPADEA8QDQDxAPEA8AMQDxAN4F/EiXxG8 gXjMn/JE6SJiws/woew5eFcApD7EPhKWJwy66zsoTFa+XV9PqsyHc8JpNMkO9tvZCGUM/8NUNCbR dj2iKxv+Q7ycvY3Fq0Rt0di2HOEKOWSkCW8QLY5YukYcqDOONBkB//5Oqo7B/QM+4NZi08aLbTeW 6Xyc8JOzxUdKp5GKGHqs4mJH/TOWhYQLp064F+7Kq8gXD021OaNfZeAfEufy2TMTsBy4dCpbaaF/ BxEwHFl87ZLtGASMiR97N54TL/axNl+2Jucud+zVgYWEG+2Dr9p4aOOijbl9pjbxquTHGWItp8KV djJp6GvxQL3TJKGvDXn6jcls6G48tvHd3Ng/frLnN0nWO1rjabbTwS8t07l0bvzSxpkNMOPlpKss 5knkjtFP1Fyts03q4aHLpxmvTty4a+OPNu5FvlzW65xq04y3sdS5EsFcurXJeGY/TJmpjYY0xXqW m9sxndkxeyzstSjHujtQ77zIWV93nfkDbZk0It7KhNuL96dlPxfPM148Jl7RIZ6e7bXt8MHEW4h4 5UCnWpeusuNZWkmxP74re3xhMi7ku4jJzLBO6p3nRL7dwGu9XSLei0n2aPLdZcTLtVWyGa9IBl+L TI0sNC6TTFAOONuFJNtdmHA3Eq/2/FJW8Y2UHP4DeKxEvq3UfLEY9lSrbnhierLj9WP/kWS8XZ9V bSF1S7DBdW53y89lmp0NfHHhGW9hx7Q/qa7buG3js9QrW1lcBTkRn6TIvk9qnWdpLww94+lC6lXk 82y/Tla1TZ9VbZfZ6RL6xX6gRVJ0h4H28nL1nYu3ki/Sw+vaIGWHS3dndc69lSIq3pCn2phMtzFZ TG2kh5era+MpGa9Ipgat+1S4XG0XBpjxfEV7Ztn8WqZKl+7ZpuAze78vsh6lwL4T8XJTzm7gzeMi 0zrKXdHadUl3SLw088VMm6XMNFqH3DjWrLdMhHuROu7KXveMtzbJ7kU6L7DXdqIe/SEGuLrN9S9z 12mLU8VLeze+oyD1Xxhghuvq4wVpFuuln43UMSvJeCqeN9e/yxSby3Zjursn9ojireKlX1KU/lXo +BGHnPVcvlpim/SsLmQVX8sq31d2T1IXjqWNcmzqjaeeVNUbdtZ1sTyM4AsNmemjlkXVU6ad4v2s tck5tt5dH+lOpvrof8AvKF7uXjNtpnv7SFtM2yJ/Z0ZTcLf2wRoH8tOuXtGokpV8SMTUVV0zwkyH eO+86EjvWNHWkd4kcOjOW0C8N2e/3A2i/EcoxHsXAXP1YG5lBwAAAPCR/CXAAPl/ILeUC4O1AAAA AElFTkSuQmCC"
        transform="translate(592.353 1654.225)"
      />
      <path
        className="st9"
        d="M651.2 1663.7h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V1670c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Conductividad Agua Reconstituida Sala 1 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() =>
          loadGrafico(17, "Conductividad Agua Reconstituida Sala 1", false)
        }>
        <path
          className={getTarjetaClass(17, selected)}
          d="M601.9 1671.1H740v99.8H601.9z"
        />
        <text
          transform="translate(652.774 1755.992)"
          className="st5 st18">
          {getScaledValue(datosScada.d17, 0)}
        </text>
        <text
          transform="translate(691.9 1755.597)"
          className="st5 st33">
          {" uS"}
        </text>
        <text
          transform="translate(654.087 1691.033)"
          className="st5 st7">
          {"AE-309"}
        </text>
        <text
          transform="translate(612.287 1711.513)"
          className="st30">
          <tspan
            x={0}
            y={0}
            className="st28 st34">
            {"Conductividad Agua"}
          </tspan>
          <tspan
            x={-1.4}
            y={15.6}
            className="st28 st34">
            {"Reconstituida Sala 1"}
          </tspan>
        </text>
      </g>
      {/* Campana */}
      <g
        className={`${getTemaAlarma(17, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(17, "Conductividad Agua Reconstituida Sala 1");
        }}>
        <path d="M625.8 1743.9c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M624.1 1742.9c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM635.4 1741.6c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M636 1739.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM636.9 1748.9v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM631.9 1756.4c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Conductividad Agua Reconstituida Sala 1 */}

      <circle
        className="st35"
        cx={670.5}
        cy={1808.8}
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
        transform="translate(110.621 1654.225)"
      />
      <path
        className="st9"
        d="M169.5 1663.7h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3H252c3.5 0 6.3-2.8 6.3-6.3V1670c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Conductividad de Salida OR */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(10, "Conductividad de Salida OR", false)}>
        <path
          className={getTarjetaClass(10, selected)}
          d="M120.2 1671.1h138.1v99.8H120.2z"
        />
        <text
          transform="translate(171.043 1755.992)"
          className="st5 st18">
          {getScaledValue(datosScada.d10, 0)}
        </text>
        <text
          transform="translate(210.168 1755.597)"
          className="st5 st33">
          {" uS"}
        </text>
        <text
          transform="translate(172.356 1691.033)"
          className="st5 st7">
          {"AE-129"}
        </text>
        <text
          transform="translate(138.507 1711.513)"
          className="st30">
          <tspan
            x={0}
            y={0}
            className="st28 st34">
            {"Conductividad de"}
          </tspan>
          <tspan
            x={20.6}
            y={15.6}
            className="st28 st34">
            {"Salida OR"}
          </tspan>
        </text>
      </g>
      {/* Campana */}
      <g
        className={`${getTemaAlarma(10, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(10, "Conductividad de Salida OR");
        }}>
        <path d="M144.1 1743.9c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M142.4 1742.9c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM153.7 1741.6c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M154.3 1739.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM155.2 1748.9v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM150.2 1756.4c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Conductividad de Salida OR */}

      <circle
        className="st35"
        cx={188.7}
        cy={1808.8}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={157}
        height={140}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAACNCAYAAABGx8NOAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABwJJREFUeNrsmgtz2lYQRiUhHgY7 rtNM//8PrJ3E2IBBoIrObudjc8UjjzoS58zsAMbIlnTYx5WyDOAdyH+z7UB3qP9PYfIjn0W+6xSu /h4hywuFyyWyxCNcn4C1xNkClhcIV4h0RXidI9/VSeexs6jlsT4lX3lCOhVtYI+lPR+IgAXiXZ10 Ltw2Ef5eq3zlCekKkW2YiFIEzE/0gNCPvq4OwlVNrJvYyGNl53/bJt+xjOdZbv87oyYmIcYioMuH cNeT7Vy4faxCvJmAWZt8ZUu280w3NOlumpg1cWsxs5+N7f0yUW4RsJ8Zz7OdZ7hlE69NvFioByrq wXaOiefldS/YXRP3Fn808cEEvAni0etdR7bbmnRvJt1zE1/NhSKU5OTUWx7p7UrLaDMT7WMTf1o8 2M+m9seGIh7Z7nrEW1qW+2LtVylZ0cuxP9csmBSvCOJNRby/LD5a9ptJr1ewrHIV5VbFWzQxt8rn Lmnvt7bXWym3R4eLgckUM94nE+9TEK9EvKsUb2mJaSjSrUzIhb0/EC/qc0utDxa3Jt+DlNx7KbUl ZfZqxKtluFiKdP56bj3fxNwYpHr/MjGF+jLKwD7o5XZmQ8YHe7wT23U5Bfn6L97ORCtFukVY8fCE FNd562NTrV6t8CUVX7+7sZiE/q7g3FyNgDs535X5MM0Ol9has11bqc0SmW8oAupVizJLr+FBv8Ur pN8bimgjcaTtqta/Wa9skS5ep9VrtfE1NwlcF7lkPE1OMYpjA2dxZOO6vJInntPPXbd8qeRUZOk7 l75xpfiBP0aWgzZHTiak4mdsBMh8lyYjJlH4VUIeTViIB+8C4gHiAeIBIB4gHgDiAeIBIB4gHgDi AeIB4gEgHiAeAOIB4gEgHiAeAOIB4gEgHiAeIB4A4gHiASAeIB4A4gHiASAeIB4A4gHiAeIBIB4g HgDiAeIBIB4gHgDiAeIBIB4gHiAeAOIB4gEgHiAeAOIB4gEgHiAeAOIB4gHiASAeIB4A4gHiASAe IB4A4gHiASAeIB4gHgDiAeIBIB4gHgDiAeIBIB4gHgDiAeIB4gEgHiAeAOIB4gEgHiAeAOIB4gEg HiAeIB4A4gHiAZxDHR4vFq/mGMIFfpztS3HmRmsJxITsiBv1OW4UF1hdJwJA3dhZnJSvPEM23dgu vPbIeyhi/pPLUN9E250RbdnwQLy6Rbh9bJuoLLbyemtZs+7ZoJL6IuUXilb3XLpt8GIj4W5EAf87 LuWJtLm1Da0l3izG8vlBODF5x6XTiCLmZ7QjWQ9bEt0PF859WFm8iScbka8+p9SqeC7dfqOLJl4t buSzIxOv6Lh0Klthoa9zETBvEW6XaE/6ImCshns3luKEx8J8WZucu9T+ly3TiRrt0s2b+NrE1D5X 2x8f2esiZImu9XIqXGFfJg19r27pd2IbouWm6+XX/3ffn7WJ99zEF3Nj//zFfv4Wsl5rj5cljNaN zyTT1fbeQkruoIMZLyVdaTEMkdrHOvTAGykzGznw2x5kPs14VXDjqYm/m/gs8qWy3slS6wdyZelz bDEQ6V5NxpGdmCLRG3WpxHqWG8r+TiR8P3WQqqUP9t53GXqe2Ot0WTz9orl4cxNuL96jZT8XbxO+ dK3i6cYrO3Cv8m338rows6eh1BYdLbUuXWn7M7F923+xbu351GQcSebbiXTe77xIv7MMjXbXe71d EG9l+/ts8j0lxEstq5wUz63OJcX6H5vZCRomMl4XBwrNdlMT7oPExn4+seOW2wlw6V6sz/FwAX3S a53wOtjjbWWiXdi+zk3AZ9vvVaLHO1lqdSklNcnM7QSM7WQNOj5ceMYb2T7tv1R3Tdw38SD9ytrk G4p4Kp1/6z/LCVj2RLw4SG1EvqUJuAhT7facqTZldhUm3Y1tdCQ9z0DW8bq4lpfq71y8uRxIj5n9 Tm7HZyGl5tHiyUR08TbhWHZ5DW8n1a8K/e1a+trq0nW8aHeq7yul70v1dnkHM55PtGOb3u9EHJdu aSV4bL/v/e5Xk+0xTHdecqoeiZcllo822eGVrSr79rrtWeLp6JwH8eKaVldL7LGpdhKEW0lJvbX3 NeO5eE+hwfb1rKoHU21qvTdeVk1dp80uES/L0rdF+R+IsnVZuiwMGIPs8NKPLpPMJeOpeL64rgup i5YGu0+X0E5F9j3itQmY20HMW05il7Oey1dJrMOa1VSmeF3r9MnuJUx1VQ+GilOlN3kHyo+Klyq/ Wc/E031I3ZWzkWWkuJyilxWXUl7X2eFViz5LdzHle/8Dv6F4qXvNKlmz8kk+yw4vH8U7M/rU1/2y HgfSZVevaMRJPg9ixvsVkQ7xfmjoiHes6NKRrnHGLJkhHeL9jOyXukH0uyY6QLxLBUz1g6nJDgAA AOA9+UeAAQD06RW6M0+V+AAAAABJRU5ErkJggg=="
        transform="translate(749.353 1654.225)"
      />
      <path
        className="st9"
        d="M808 1663.7h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V1670c0-3.5-2.8-6.3-6.3-6.3H808z"
      />

      {/* pH Agua Reconstituida Sala 1 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(19, "pH Agua Reconstituida Sala 1", false)}>
        <path
          className={getTarjetaClass(19, selected)}
          d="M758.7 1671.1h138.1v99.8H758.7z"
        />
        <text
          transform="translate(809.532 1755.992)"
          className="st5 st18">
          {getScaledValue(datosScada.d19, 1)}
        </text>
        <text
          transform="translate(848.657 1755.597)"
          className="st5 st33">
          {" pH"}
        </text>
        <text
          transform="translate(810.844 1691.033)"
          className="st5 st7">
          {"AE-313"}
        </text>
        <text
          transform="translate(801.929 1711.513)"
          className="st30">
          <tspan
            x={0}
            y={0}
            className="st28 st34">
            {"pH Agua"}
          </tspan>
          <tspan
            x={-34.3}
            y={15.6}
            className="st28 st34">
            {"Reconstituida Sala 1"}
          </tspan>
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(19, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(19, "pH Agua Reconstituida Sala 1");
        }}>
        <path d="M782.6 1743.9c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M780.9 1742.9c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM792.2 1741.6c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M792.8 1739.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM793.7 1748.9v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM788.7 1756.4c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin pH Agua Reconstituida Sala 1 */}

      <circle
        className="st35"
        cx={827.2}
        cy={1808.8}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={157}
        height={140}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAACNCAYAAABGx8NOAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABvBJREFUeNrsm4tym0gQRXlJtvxK Npvd///AXTuxHVkPYBaqerauO4OEXC4noHOquiCKGAV01NM9kCwD+AXkv9k4MC3CRwmTHzgW+c5T uPAWGasThcslssQWzk/AILKFsQJWI6Xro3D7hRMR+c4v4/Xb1sLvHxSwGiFdlKyUbSV/VgnhvLJc H41FLfutbQflq0ZIV1osJJa2VQHzIzUgzKeua0WuXrh9FzvZ1vK+pHzVCOkqE+3SxYUIGOVDuPMQ UKXrRdt28SKxNQ/2LvMdFE/ruMoE60W77uJGYmWvL+19BRnvrOq6mOk2XfyweBIX9JjGZ73qQLar LJtdmmifuvhscWevXUnWo9Y7D/FaEa/PbGsT7ru5ULr3pRqOn8TL3TR7YXL1on3p4msXf3bxh712 be9R8ch2828sGst2vXjPJt1KfEo1G6+WXI5lvKUT768u/jYBP5l4lyIeyyrnI15t0+yTebCw92jd t7V9L99gxiulvuvFu7Us99XE+8um3ChehXhnJV4r9V0stzJ77UVqvrXJtz/WXOhUuzDxVlbP3Zl8 Xyw+y1RbMc2eVZ2nGS9mup3J9uhKsDJV+1eJLlRrvIVkvRvLfHcWt/YBS7ecgnzzz3jBxFtIpltL w6mrHX6d92iNp2t4cUll5cJbDedBK9/3Pnu9thudiNKl7u+HMet48U6Fjzi4fgCcR9bLRcBKXPBO DC6vpWo8zXr+tlkp9VyRDd8ug/mSS8bLs9f38P39+yKV7bIDdVncLwYGKjIeiTp3+fw29RTToB/F CR/CXQkYKstOfjSueIPhPIMHY2Q8OBsWIwcAeFdYAgHEA8QDQDxAPADEA8QDQDxAPADEA8QDxANA PEA8AMQDxANAPEA8AMQDxANAPEA8QDwAxAPEA0A8QDwAxAPEA0A8QDwAxAPEA8QDQDxAPADEA8QD QDxAPADEA8QDQDxAPEA8AMQDxANAPEA8AMQDxANAPEA8AMQDxAPEA0A8QDwAxAPEA0A8QDwAxAPE A0A8QDxAPADEA8QDQDxAPADEA8QDQDxAPADEA8QDxANAPEA8AMQDxANAPEA8AMQDxANAPEA8QDwA xAPEA/gQ8QKXCN5AOOZPcaJ0ATHhPXwoRg4+FADehzBGwuKEQduxg8LZyteO9aRKHJwSTqNxH9Bv y5nKmL/zVDQn0doRMZQNX4mXsrex2EvUFo1ti5l2yHlCnPxE0cKMpWvEgTrhSJMQ8P9rUg0MHg+I A+4stl1sbLu1TBfHyd8xU/wO0mmoiPmILi4M1D9zaSSicOpE9CK6shf5wqGpNmX0Xgb+IbGSYy9M wGIG0qlshYXfD+48U01X67ZzEDA4P3o3XpwXfazNl53J2abOvTrQSESj4+BPXXzv4qqLhR1Tm3iV fDH5RIXLnGSlnVcpoecYBuqdxoX+3ZSn3+Bmw+jGYxffzI1+/9le37qsd7TG02yng19bpovSReMv 5QuaYsbz0kXh+vNc2jZGJWLqjzVV6+xcPTx1+fSHVjs37rv4p4sHkS+V9QanWp/xtpY6n0SwKN3a ZLywL6VI1EVTm2JLEe7Cznll23jxKtvPnXS+3tnIr74e+uVPdMmkEfGeTLhevH8t+0XxYsYLx8TL BsTTjFbbB3438ZYiXjHhqTZOp1G6Kzu/G4sru4hLuW7BzQxrV++8OPnaidd6rRNvY5I9mnz3CfFS yyrJjJe5wdciUyONxrVlgmUi400x2xWS7VYm210Xn6RLq+2cF3ZMIyVH/AJiPIl8O6n5QjbtqVbd iInp2c43nvsPl/HaMV1tJlNIboPr3B4tX8k0W068uShEvJjtbk067dJ2kuVz+SE+S5H94GqdFxF3 6hlPG6m9yBez/dpdr2ZMVztktm+hN3bhl1Jwlwnp8ollvdhUqHhRnI27yJd2TO06u3urcx6sFFHx pjzVBjfdBtdMbWUNL1XXhlMyXuamBq37VLhUbTc16eJUW8lU+yy/3q1Id2tyFtJkPUqBfS/ipaac duKLx1li6Sh1R6sdku6QeD7zhcQyS+Gkm/rCcSFd7WUi021MshuX8dYm2YNI903E3Y75IibY3abW L1P3abNTxfNrN0GWEZrs59tJU5bOd7Zbqcu0a3028S6ceHFx/ZtMsalsN6ene8KIyN4qnr9I8V5l m5BtLvdnS5k26oR4V9LF19Llx85Op+i5LKMcm3rDqT+q6g0fFgZEy2dwQfMs/RjYXrrXuJCeu/Ws tck5t7W7MdKdTPWr/wG/adYL2fBdnLh8pEtMuyz9ZEaT8bT2wfoGfpbP37utXCev2bF2XV0zw0yH eB/ccGj3XrqlI31I4NCTt4B4b85+qYdD+Y9QiPchAvrXwkBnBwAAAPAr+U+AAQDeICBITtI7YgAA AABJRU5ErkJggg=="
        transform="translate(592.353 1819.225)"
      />
      <path
        className="st9"
        d="M651.2 1828.6h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Conductividad Agua Reconstituida Sala 2 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() =>
          loadGrafico(18, "Conductividad Agua Reconstituida Sala 2", false)
        }>
        <path
          className={getTarjetaClass(18, selected)}
          d="M601.9 1836H740v99.8H601.9z"
        />
        <text
          transform="translate(652.774 1920.915)"
          className="st5 st18">
          {getScaledValue(datosScada.d18, 0)}
        </text>
        <text
          transform="translate(691.9 1920.52)"
          className="st5 st33">
          {" uS"}
        </text>
        <text
          transform="translate(654.087 1855.956)"
          className="st5 st7">
          {"AE-310"}
        </text>
        <text
          transform="translate(612.287 1876.436)"
          className="st30">
          <tspan
            x={0}
            y={0}
            className="st28 st34">
            {"Conductividad Agua"}
          </tspan>
          <tspan
            x={-1.4}
            y={15.6}
            className="st28 st34">
            {"Reconstituida Sala 2"}
          </tspan>
        </text>
      </g>
      {/* Campana */}
      <g
        className={`${getTemaAlarma(18, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(18, "Conductividad Agua Reconstituida Sala 2");
        }}>
        <path d="M625.8 1908.8c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M624.1 1907.8c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM635.4 1906.5c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M636 1904.7c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM636.9 1913.8v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM631.9 1921.3c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Conductividad Agua Reconstituida Sala 2 */}

      <circle
        className="st35"
        cx={670.5}
        cy={1973.7}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={157}
        height={140}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAACNCAYAAABGx8NOAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABv5JREFUeNrsmwlz2kgQRiUxHLGd O7v//wfmso25LKEVVd21nycjIRznkPReVZcwhGEFT30MbJYB/AHyv2QNGB7175Qm73EbpiVc/Rwh wwXC5SJYHt0P0xWwlugtYOgh3InCbuuxaJERpiGdx9GilmN9Tr7QM8vNEhEiGRFvWtK5cFUi/LFW +cIZ6QqRbN7EIjrOouxHzzf+vq6OhCubODTxKMfSHKja5OvKeC7dSbBlE6smXlksLea2BllvetnO hTvFLoq9CZi1yRdasp1nsbkId9PEaztei4BBMh8Zb/wZz7OdZ7htEw9NrC20+qmoT9bpEi+IeCfh 3km8MQFXUckl600j21Um3d6ku2vi1lqwIirJyak3dPR2wcS6NtE+NPGpiY9NvDcZr+zFQmLLBcYv 3tay3HdzJUhW9HLstzULJsUrRLyliffWxPvX4qPJqOIVSDeJcqvibZq4t7bLXdLe72B/V1JuO4cL HSquLLu9N+H+scz31h5bRqUWpiPe1hyYi3Q7E3Jjj8+kEtZ9S+3CUuiNZbh3JuAHEW8RLQ7jFq+W 4WIr0vnf99bzrcSNH5JSSEyivo2iWe+VSaaT7Y3YPsv4BmNK4h1NtCDSbaIdj0W04/Ek67VNtfFk u8j+38vT8L08yuy0BDzK9FpKYvIttkVXtmsrtZlkvvibC42QMBqmIV4h/d5cRPOYt2Q7d6wOLdLl UeYrsqdfj8U/EqC/mw65ZDxty+JI/ZDkSVZrW1y3V/Ks/QcBCDdN+VLJqS0p/eBK8RMvRpaDNkfO JqTiJRYBMt+lyajgvYNfJGRnwkI8+CMgHiAeIB4A4gHiASAeIB4A4gHiASAeIB4gHgDiAeIBIB4g HgDiAeIBIB4gHgDiAeIB4gEgHiAeAOIB4gEgHiAeAOIB4gEgHiAeIB4A4gHiASAeIB4A4gHiASAe IB4A4gHiAeIBIB4gHgDiAeIBIB4gHgDiAeIBIB4gHiAeAOIB4gEgHiAeAOIB4gEgHiAeAOIB4gHi ASAeIB4A4gHiASAeIB4A4gHiASAeIB4gHgDiAeIBIB4gHgDiAeIBIB4gHgDiAeIB4gEgHkxPvJq3 CJ5Bfc6f4kLpasSEl/Ch6Ll4WwDEPtR9JCwuWPTYd1GYpGzuSC9PQmKxlHAaVfQCp+NshDLmL1yG xiif+6Ch97VlwyfiZQl7fYFHidKismMxwgk5T4iTXyhaPVLZssgN98H9ONjfxyhBPZEvtLyAP6GU xU6xb2Jnx71lOl8nf8Fs8ael04hFzM9McXVLORrTpHo0L/bixE7cOEiSOqbeh3AmhT7Kwg8Sr+S5 SxOwGLh0KlthoX/nImDeItwx0euMRUA9V3dj28Ra4uTGRgQspeSe7fFqyXYHW/y04H0Tt01cNTG3 55QmXog+nCH2cipcYReThj5WJy7UuPxUUT889PKrZdbdOEl218TXJr6ZH2u7f29yVqnzDy1ltpIS u7XFry3TuXRu/MrWmQ0w46WkCxbzKFLnqNVB2xLtidsa7aGLtzfBbk28z3Z0+XaReJ2lNs54vvi9 CObSbUzGpX0wRaI3GlKJ9Sw3t3Na2jl7LOyxWtqKOmpJ9nYxar8Tv/lDFi/lxp1lu88W38yXrV2E 1aU9ni6uV3tpi96aeAsRrxhoqXXpgp3PylqK0/nd2O0rk3Eh74U22d6SrKUX3koGrEYonvd4tybc KeN9t3PfdV104cy47HXcZapk0LiOMkEx4GyXR9nuyoR7I/Fo969kiq8SH8CtlJsHmfKSJWegE20l bdjGzvXOItXjdQ4X8QtV9ubu5b7SxFtbv+dldjbw4cIz3sLO6XRRvW7ibRPv7Zx9S8mHKxcvddV/ sw/hISo5x2zYA4buzekM4AJupNU4dLUYoccmYbx3s7MPaBE13flA9/JS/Z2Ldy/bAx7e1+Z2IWqf 88XCm2wXz/e06hFkPC23pezv7uXi7NzDO5fxsqgv0dquwqV6u3yAGc8n2qVl89cijku3tRK8tH// GE12X6TBvpNepxyJeG3bR6lvtDqHqdBzfK4T2yxFYqN1yBvHmvVWkXA7Kak39rhmPBfvqzTYa3vO vs8HMbABQ9sxlTC1eZ5dKl5bis2l/8sHmOHa9vFy2SzWsqHbJPeS8VQ831z/bsc7KdGtm6gDJ/WL pd4XV+j5Ano7FwGzgZbXc9NtGfUwBxHvSqb4Uqb8tT2+jrYTyhEMFeecyC7N5uEZL9b2ZXk+gjc0 z378CVgpQ9U6sZ1ysMc2MuHpFko1AekuJrzQf8BYSkiepX+DqJvpvn2kW0yHS6e6qZPzFnSWXf1G I0STfB6JqVNdhXSI97NDR/yLFd06qhPT3Vh+jYJ4f0n2S/1AlP8RCvF+i4CpfjB7zlQHAAAA8Av5 T4ABAAZOGkCn72reAAAAAElFTkSuQmCC"
        transform="translate(749.353 1819.225)"
      />
      <path
        className="st9"
        d="M808 1828.6h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3H808z"
      />

      {/* pH Agua Reconstituida Sala 2 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(20, "pH Agua Reconstituida Sala 2", false)}>
        <path
          className={getTarjetaClass(20, selected)}
          d="M758.7 1836h138.1v99.8H758.7z"
        />
        <text
          transform="translate(809.532 1920.915)"
          className="st5 st18">
          {getScaledValue(datosScada.d20, 1)}
        </text>
        <text
          transform="translate(848.657 1920.52)"
          className="st5 st33">
          {" pH"}
        </text>
        <text
          transform="translate(810.844 1855.956)"
          className="st5 st7">
          {"AE-312"}
        </text>
        <text
          transform="translate(801.929 1876.436)"
          className="st30">
          <tspan
            x={0}
            y={0}
            className="st28 st34">
            {"pH Agua"}
          </tspan>
          <tspan
            x={-34.3}
            y={15.6}
            className="st28 st34">
            {"Reconstituida Sala 2"}
          </tspan>
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(20, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(20, "pH Agua Reconstituida Sala 2");
        }}>
        <path d="M782.6 1908.8c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M780.9 1907.8c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM792.2 1906.5c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M792.8 1904.7c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM793.7 1913.8v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM788.7 1921.3c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin pH Agua Reconstituida Sala 2  */}

      <circle
        className="st35"
        cx={827.2}
        cy={1973.7}
        r={9.2}
      />
      <circle
        className="st35"
        cx={1263.8}
        cy={1257.9}
        r={9.2}
      />
      <path
        className="st28"
        d="M287 1870.9h124.8v97.7H287z"
      />
      <path
        className="st26"
        d="M411.7 1854.6v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1v-111.2"
      />
      <text
        transform="translate(299.577 1991.692)"
        className="st5 st7">
        {"TK-005 PRODUCTO"}
      </text>
      <path
        className="st22"
        d="M300 1848.1c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
      />
      <path
        className="st9"
        d="M311.7 1848.1c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <path
        className="st21"
        d="M838.2 1579.1h17.4c1.1-.3 2.2-.4 3.4-.4 8.1 0 14.6 6.5 14.6 14.6 0 4.1-1.7 7.8-4.3 10.4l4.1 9c.3.7-.1 1.6-.7 1.6H845c-.6 0-.9-.9-.6-1.6l4.1-9.1c-2.6-2.6-4.2-6.3-4.2-10.3 0-1.5.2-2.9.6-4.2h-6.8c-1.4 0-2.6-1.2-2.6-2.7v-4.6c0-1.5 1.2-2.7 2.7-2.7z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        width={39}
        height={39}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA8BJREFUeNrsmAtTm0AUhVkgL2PU qG3tw/r//1bbsdWm1RgTSELYLplzOyd3IAtkbGc6zcwZUGD59t69jyUI/v/+wZ95ofHkaKG/BmeU +KfhGsGaA6FCggrpbw2Tq2MtSHOApQQmcorpyIAFzAbKcMxJeyFNS2sJSKEe1IUE1AJm5bR2WtL5 mqArLRm3ACue6Tj1nQZOQ6djHAcAjfGyFaAWTnMcC6X4/xoWzWkZNIZjsOLlR04jpzOnMY6ngBwQ nIA9Oz1Bjzg+49qSXL4DGLcAGwLm0umN02ucjwE8gGVzBVdA/XSaQMX5A64leNcOYNxgjXVgsTGA 3kPv8PcZ4PoYN4fbUoL74XRH90V4h8V9HNF74Th3xbDIidMrpw9ON04fAXeJa0cIilAFRGGZmdM5 3D9U9+kI3gLXsZy4s1hPF05XTteAu4Zrz3BdotVQBGYAPIZkAhFZd62Cw+6DM2qt9WGZwkJvyaVX AD6mKA0VnKQYSTcd3JPDlQvSkgBNXGO9yVo7pSC4gnvHAOvTS8tKmKxbSdwbWotTrMcp0s0S10vh eK1FmK3AnQPwglzZA1hUAWbUNQsvLDDeuVqvMVwcxDXSRxcL+ASWGqtFXQWmu5OQoriPiY2gobL+ 1u2hx60RLDOggUZqlmGNMmjUmDLpPsTW/z1eHbgu4I6oAvgs5ktPEeXOmMbi8Uzo6c14EC7wsWqX 2jSi3NWYkutey5UBm4ZQQUmQBHu6EeuDsypzSz+me7LgAEA9bq675nBPWy0PSy+WogylyPibkgF9 QJbKmlSOFVWHnTF9ltsALEHCnCFRJhg0o4axzi/HM2uaLE94p3yFnplK4Z6rTP5MgJsagFZ5IsWY M+rtEuqQvV1JTpZbYJAHtD1jJM6Osn5Y0v7rBkA6lEfq6Z7wjhW37lHDfq5bklKMKvSBaoHEWisA TNFs3jp9gb4Bco57t89GnmQZlOQkzuTabVbttgQqpaXBYJ9x/h3WS3lPETVInrpWslUy6slkUyOB NMeLCxfeO30F1CcA3sFqC7Za3T2EACwwiMHDK2q/L2mD0yN387OyZu/hxlvlTk5P3g0OR18Gkwe0 uBOyyEXJ7iugScwJboKgmmBiM9Vk2iabal1ne7RfHQHqBBrieqQsnNCamwJ0RnvYtbZa0LBo68jt AFI6lgH1ZAyXUYWRdjyhLwBZVTls0+7oTxIdaqF0JFsVuWWbmco63eZbSdXHnLL2x1JQ5S/9Iadu O1VV8O1LfwLz5UCzp5EI/tTHwyZjtfr0+kuAAQD8xKsEKGHyXgAAAABJRU5ErkJggg=="
        transform="matrix(-.8974 0 0 .8974 876.91 1575.784)"
      />
      <circle
        className="st9"
        cx={859}
        cy={1593.5}
        r={10.9}
      />
      <circle
        className="st23"
        cx={859}
        cy={1593.3}
        r={8}
      />
      <text
        transform="translate(843.8 1633.274)"
        className="st5 st7">
        {"P-004"}
      </text>
      <path
        className="st8"
        d="M1104.6 1621.9H958.9c-26.8 0-48.8-21.9-48.8-48.8v-23.4c0-26.8 21.9-48.8 48.8-48.8h145.7c26.8 0 48.8 21.9 48.8 48.8v23.4c0 26.9-21.9 48.8-48.8 48.8z"
      />
      <text
        transform="translate(1005.785 1541.095)"
        className="st5 st7">
        {"LSH-202"}
      </text>
      <path
        className="st22"
        d="M1054.7 1487.8c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
      />
      <path
        className="st9"
        d="M1066.4 1487.8c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <path
        className="st0"
        d="M1004.5 1490v-97.5c0-3.5-2.9-6.4-6.4-6.4h-80.5M804.1 1582.6v-190.1c0-3.5 2.9-6.4 6.4-6.4H891"
      />
      <path
        className="st22"
        d="M998.3 1487.8c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
      />
      <path
        className="st9"
        d="M1010 1487.8c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <path
        className="st22"
        d="M883.4 1604.5c1 0 1.9.8 1.9 1.9v9c0 1-.8 1.9-1.9 1.9-.5 0-1-.2-1.3-.5l-4.5-4.5c-.7-.7-.7-1.8-.1-2.6l.1-.1 4.5-4.5c.4-.5.8-.6 1.3-.6z"
      />
      <path
        className="st9"
        d="M883.4 1616.2c-.2 0-.4-.1-.6-.3l-4.5-4.5c-.3-.3-.3-.9 0-1.3l4.5-4.5c.2-.2.4-.3.6-.3.4 0 .9.3.9.9v9c0 .6-.4 1-.9 1m0 2c1.6 0 2.9-1.3 2.9-2.9v-9c0-1.6-1.3-2.9-2.9-2.9-.8 0-1.5.3-2 .8l-4.5 4.5-.1.1-.1.1c-.9 1.2-.9 2.9.2 3.9l4.5 4.5c.5.6 1.2.9 2 .9z"
      />
      <path
        className="st0"
        d="M697.8 1583.6h133.8M297.8 1583.6h373.1"
      />
      <path
        className="st2"
        d="m676.6 1578.3 7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st2"
        d="m692.2 1588.9-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st0"
        d="M486.6 1901.6v113.9"
      />
      <path
        className="st2"
        d="M968.8 2005.1H954c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM953.6 2009l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st2"
        d="m969.2 2019.6-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st3"
        d="M961.4 2004.1v10"
      />
      <path
        className="st4"
        d="M952.4 1996.1h18M961.4 1997.1v8"
      />
      <path
        className="st0"
        d="M947.5 2014.4h-16.4c-2.8 0-5-2.3-5-5l.4-35.9M975 2014.4h16.4c2.8 0 5-2.3 5-5l-.4-35.9M996.4 1977.5v67.4"
      />
      <path
        className="st22"
        d="M990.1 2042.7c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
      />
      <path
        className="st9"
        d="M1001.8 2042.7c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <text
        transform="translate(939.508 1873.038)"
        className="st5 st7">
        {"VE-1114"}
      </text>
      <path
        className="st2"
        d="M968.8 1843.7H954c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM953.6 1847.6l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st2"
        d="m969.2 1858.2-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st3"
        d="M961.4 1842.7v10"
      />
      <path
        className="st4"
        d="M952.4 1834.7h18M961.4 1835.7v8"
      />
      <path
        className="st0"
        d="M947.5 1853h-16.4c-2.8 0-5-2.3-5-5l.4-35.9M975 1853h16.4c2.8 0 5-2.3 5-5l-.4-35.9M996.4 1812.1v154.2"
      />
      <path
        className="st22"
        d="M990.1 1964.1c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
      />
      <path
        className="st9"
        d="M1001.8 1964.1c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <text
        transform="translate(1034.752 1995.172)"
        className="st5 st7">
        {"VE-1117"}
      </text>
      <path
        className="st2"
        d="M1064.1 1965.8h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM1048.9 1969.7l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st2"
        d="m1064.5 1980.3-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st3"
        d="M1056.7 1964.8v10"
      />
      <path
        className="st4"
        d="M1047.7 1956.8h18M1056.7 1957.8v8"
      />
      <path
        className="st0"
        d="M1069.7 1974.5h44.9"
      />
      <text
        transform="translate(1034.752 1830.806)"
        className="st5 st7">
        {"VE-1115"}
      </text>
      <path
        className="st2"
        d="M1064.1 1801.5h-14.8c-.9 0-1.6-.7-1.6-1.6l.3-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6l-.3 14.8c0 .9-.7 1.6-1.6 1.6zM1048.9 1805.4l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st2"
        d="m1064.5 1816-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st3"
        d="M1056.7 1800.5v10"
      />
      <path
        className="st4"
        d="M1047.7 1792.5h18M1056.7 1793.5v8"
      />
      <path
        className="st0"
        d="M1069.7 1810.1h44.9"
      />
      <path
        className="st38"
        d="M1241 1826.3h-101.5c-2.6 0-4.6-2.1-4.6-4.6v-23.2c0-2.6 2.1-4.6 4.6-4.6H1241c2.6 0 4.6 2.1 4.6 4.6v23.2c.1 2.5-2 4.6-4.6 4.6z"
      />
      <text
        transform="translate(1159.886 1815.021)"
        className="st5 st7">
        {"SEALAND 1"}
      </text>
      <path
        className="st38"
        d="M1241 1990h-101.5c-2.6 0-4.6-2.1-4.6-4.6v-23.2c0-2.6 2.1-4.6 4.6-4.6H1241c2.6 0 4.6 2.1 4.6 4.6v23.2c.1 2.5-2 4.6-4.6 4.6z"
      />
      <text
        transform="translate(1159.886 1978.73)"
        className="st5 st7">
        {"SEALAND 2"}
      </text>
      <path
        className="st38"
        d="M1241 2068.4h-101.5c-2.6 0-4.6-2.1-4.6-4.6v-23.2c0-2.6 2.1-4.6 4.6-4.6H1241c2.6 0 4.6 2.1 4.6 4.6v23.2c.1 2.5-2 4.6-4.6 4.6z"
      />
      <text
        transform="translate(1162.886 2057.11)"
        className="st5 st7">
        {"DESAG\xDCE"}
      </text>
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={157}
        height={140}
        xlinkHref="data:image/png;base64,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"
        transform="translate(1082.7 840.9)"
      />
      <path
        className="st9"
        d="M1141.7 850.3h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V856.6c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Presión Ósmosis */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(5, "Presión Ósmosis", false)}>
        <path
          className={getTarjetaClass(5, selected)}
          d="M1092.4 857.7h138.1v99.8h-138.1z"
        />
        <text
          transform="translate(1143.245 942.551)"
          className="st5 st18">
          {getScaledValue(datosScada.d5, 1)}
        </text>
        <text
          transform="translate(1182.37 942.156)"
          className="st5 st33">
          {" Bar"}
        </text>
        <text
          transform="translate(1144.558 877.592)"
          className="st5 st7">
          {"PT-118"}
        </text>
        <text
          transform="translate(1138.899 898.072)"
          className="st30">
          <tspan
            x={0}
            y={0}
            className="st28 st34">
            {"Presion"}
          </tspan>
          <tspan
            x={-3.2}
            y={15.6}
            className="st28 st34">
            {"\xD3smosis"}
          </tspan>
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(5, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(5, "Presión Ósmosis");
        }}>
        <path d="M1116.3 930.5c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M1114.6 929.5c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM1125.9 928.2c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M1126.5 926.4c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM1127.4 935.5V934c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1122.4 943c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presión Ósmosis */}

      <circle
        className="st35"
        cx={1160.9}
        cy={995.4}
        r={9.2}
      />
    </svg>
  );
};

export default ScadaSealand2;

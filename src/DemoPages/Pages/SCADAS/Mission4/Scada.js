import React from "react";
import {
  getColorConexion,
  getConexion,
  getScaledValue,
  getTarjetaClass,
  getTemaAlarma
} from "../../../../commons/scada/scada";
export const Scada = (props) => {
  const {
    datosScada,
    datosAlarmas,
    loading,
    selected,
    loadGrafico,
    onClickAlarma
  } = props;

  const estadoConexion = datosScada !== null && getConexion(datosScada.con);
  const ORP = datosScada !== null && getScaledValue(datosScada.d0, 1);
  const recuperacionRO =
    datosScada !== null && getScaledValue(datosScada.d2, 1);
  const diferencialPrimeraEtapa =
    datosScada !== null && getScaledValue(datosScada.d3, 1);
  const diferencialSegundaEtapa =
    datosScada !== null && getScaledValue(datosScada.d4, 1);
  const presionOsmosis =
    datosScada !== null && getScaledValue(datosScada.d5, 1);
  const presionRechazo =
    datosScada !== null && getScaledValue(datosScada.d6, 1);
  const caudalAlimentacion =
    datosScada !== null && getScaledValue(datosScada.d7, 1);
  const caudalPermeado =
    datosScada !== null && getScaledValue(datosScada.d8, 1);
  const conductividadAlimentacion =
    datosScada !== null && getScaledValue(datosScada.d9, 1);
  const conductividadPermeado =
    datosScada !== null && getScaledValue(datosScada.d10, 1);
  const diferencialFiltroF300 =
    datosScada !== null && getScaledValue(datosScada.d11, 1);
  const diferencialFiltroF301 =
    datosScada !== null && getScaledValue(datosScada.d12, 1);
  const temperaturaAlimentacion =
    datosScada !== null && getScaledValue(datosScada.d13, 1);
  const diferencialFiltroF302 =
    datosScada !== null && getScaledValue(datosScada.d14, 1);
  const diferencialFiltroF303 =
    datosScada !== null && getScaledValue(datosScada.d15, 1);
  const pHAlimentacion =
    datosScada !== null && getScaledValue(datosScada.d16, 1);
  const diferencialFiltrosHighFlow =
    datosScada !== null && getScaledValue(datosScada.d17, 1);
  const phMezcla = datosScada !== null && getScaledValue(datosScada.d18, 1);
  const conductividadMezcla =
    datosScada !== null && getScaledValue(datosScada.d19, 1);
  const caudalMezcla = datosScada !== null && getScaledValue(datosScada.d20, 1);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      id="Capa_1"
      x={0}
      y={0}
      style={{
        enableBackground: "new 0 0 1429.5 2137.7"
      }}
      viewBox="0 0 1429.5 2137.7"
      {...props}>
      <style>
        {
          '.st0,.st1{fill:none;stroke:#008ba3;stroke-width:4;stroke-miterlimit:10}.st1{stroke:#00aeed}.st2{fill:#fff}.st5{fill:#3574e0}.st8{fill:#666}.st9{font-family:"ArialMT"}.st10{font-size:14px}.st11{fill:#606060}.st12{font-family:"Arial-BoldMT"}.st13{font-size:17px}.st16{opacity:7.000000e-02;fill:#323e48;enable-background:new}.st17{fill:#2f3e49}.st18{fill:#00aeed}.st19{opacity:.15;fill:#0e76e7;enable-background:new}.st20{font-size:11px}.st21{opacity:.6;fill:none;stroke:#cbcbcb;stroke-width:2;stroke-miterlimit:10;enable-background:new}.st22{fill:#cbcbcb}.st23{fill:none;stroke:#2f3e49;stroke-width:4;stroke-miterlimit:10}.st24{fill:#00a39b}.st25{fill:none;stroke:#35ace8;stroke-width:4;stroke-miterlimit:10}.st26{fill:#0e76e7}.st27{fill:#323e48}.st28,.st29{fill:none;stroke:#323e48;stroke-width:4;stroke-miterlimit:10}.st29{stroke:#fff;stroke-width:2}.st30{fill:#7c7c7c}.st31{font-size:9px}.st32{fill:none;stroke:#2f3e49;stroke-width:3;stroke-miterlimit:10}.st33{font-size:16px}.st34{font-size:13px}.st37,.st39{fill:#fff;stroke:#35ace8;stroke-width:4;stroke-miterlimit:10}.st39{stroke:#008ba3}.tarjeta{fill:#fff;}.tarjetaSeleccionada{fill:#3574e0;opacity:.15;}.campana{fill:#3474E0;}.campana:hover{fill:#7c7c7c;}.campanaVacia{fill:#c2c2c1;}.campanaVacia:hover{fill:#7c7c7c;}.campanaDesconectada{fill:#c2c2c1;}'
        }
      </style>
      <path
        d="M291.4 1469.9v94c0 5.5 4.5 10 10 10h88.1c5.5 0 10.1 4.4 10.1 9.9v77"
        className="st0"
      />
      <path
        d="M1018.4 1049.6h88.6c6.4 0 11.6 5.2 11.6 11.6v213.3c0 6-4.9 10.9-10.9 10.9h-985c-6.7 0-12.2 5.5-12.2 12.2v163.1c0 5.4 4.3 9.7 9.7 9.7h232.9"
        className="st1"
      />
      <image
        xlinkHref="data:image/png;base64,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"
        width={289}
        height={179}
        style={{
          overflow: "visible",
          opacity: 0.2,
          enableBackground: "new"
        }}
        transform="translate(1102.81 37.758) scale(.9831)"
      />
      <path
        d="M1376.2 207.4H1113c-3.4 0-6.1-2.7-6.1-6.1V49.7c0-3.4 2.7-6.1 6.1-6.1h263.2c3.4 0 6.1 2.7 6.1 6.1v151.5c0 3.4-2.7 6.2-6.1 6.2z"
        className="st2"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAACACAYAAAA1d+RTAAAACXBIWXMAAAuIAAALiAHljilJAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABMtJREFUeNrs2wtv02YUgGEnddIW KOvGbgLt//8zNDbouPbeeJ+n88HBS8F2WolpzyMdJW3Bmia9OZ+T0jQAAAAAAHBfFt/49eD/pJv6 F9o7jHYhYLizeLv7DngxiHbb18C4cLv0fDM25nbHcPtZDmZhG8OkgPNsBtN9KeLFzHj7UPdi2sHs 2cIwOeA+1puY6zJX8XizJeZZAdd4a7SrMusyB2X243Ed37eJYdrRuUbbz3mZszIXMdcp7m7OETrH u4pgH8Q8KnNU5mF8vY4/txQwjN6+VxFrH+6HMu9i3sf3LtOf7eYEXDfvQUT7XZnvy/wQj4/j+/uD LewoDbdv4Hp0rpu3xvsq5mXqpxveE7cj460B78em7YP9ucyv8fhjmeMI+DCuawPDvIDflHkRrS0G 98hdPkqPDXiZAj6KYJ+V+a3M0zI/xUauG7gGbPvC1++B6xtXFxHw29TSVfP5m1r1Da1/wm5HxNtE jKvYro8j4KcR8LP4+nH8fJXugQUMX78Hzm9inccReh0NfYh74NP42WXawN2UDdymgJ/E1u2P0L/E ffBD2xdmb+F6RO4DPYjv91+fxJH6dYR9FqEvpt4Dt/Gq8CAiPk5zlO59fQ4M0wLOEdeGrmPjPkmN HaQF2ce9aEeEm++BV3GRw+bTx0b1c2BHZ9gt5PzJTf2Itn66c9h8/hFtM3YD55iHv8SxSq8Yy8F/ ADC+r/xYT7t1WR6m29O91OOnkkdePG/jpXDhXmJeDpblasvtaTM24OFxOoe87V8jAbtbNp//m4Ot v1exnPHqsO0RuJ8j9XCauQEvRAzf3poGBAwIGBAwCBgQMCBgQMAgYEDAgIBBwICAAQEDAgYBAwIG BAwIGAQMCBgQMAgYEDAgYEDAIGBAwICAAQGDgAEBAwIGAQMCBgQMCBgEDAgYEDAIGBAwIGBAwCBg QMCAgAEBg4ABAQMCBgEDAgYEDAgYBAwIGBAwIGAQMCBgQMAgYEDAgIABAYOAAQEDAgYB+18AAgYE DAgYBAwIGBAwIGAQMCBgQMAgYEDAgIABAYOAAQEDAgZ2DLjzvw3+ewF3Kd7hc+D+dXMD7m6Zjc0M 9xJq7esmzeyAmy0XvE7PN4OtDMyPt3Z2VeYyJrf2UTthbXfpohdpLiPmvfhzixhgerx1OV5GX+cx F2lpflyW7YxXhP5ip2Xex/TP1+kFQcCwW8B9rB+ir7fx/DRt4s2YDZyPw5v0qnAaF30d8yCO4v3P V7GJBQzz7nuvY0n2jf0V8yYirlu4m3qErgGflXkXF31Z5lFc4zqer1PAIobp9771lNv39SIeT2Ib nzeD95zaGRfuXxn+LHMQm/cqou4D3h8ELGIYv31rZ2cR7vMyv5d5FQFP3sDd4Ah9HrG26djcr/bj Mg/TBl6KFyYH3KWAT2JRPk8b+LIZfOLTTrj4TVzgfYr6Is7nR2UOB/fAAobxAedFedF8ep/pj2js NOKeHHC9cBMXaFLQ9Uh9ENu3HWxfEcO4eGtnN2kL1zeMh+9Af/w7UwNbxuzFtl3HrAbx2sAw/z44 /xLHeTy/ST+fHXCTIt1LU7+3tHnhTu6F869QbppbfttxbmiLW7atozPsfpzuvjDNXQTcfOGYLF7Y /X5422b+l78FGABWwnWve6eZ5QAAAABJRU5ErkJggg=="
        width={240}
        height={127}
        style={{
          overflow: "visible",
          opacity: 0.2,
          enableBackground: "new"
        }}
        transform="translate(38.766 37.688) scale(.9543)"
      />
      <path
        d="M256.2 151.5H47.4c-3.4 0-6.1-2.7-6.1-6.1V49.7c0-3.4 2.7-6.1 6.1-6.1h208.7c3.4 0 6.1 2.7 6.1 6.1v95.6c.1 3.3-2.6 6.1-6 6.2.1 0 0 0 0 0z"
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
        style={{
          fill: "#00cd98"
        }}
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
        transform="translate(1160.929 105.91)">
        {"Funcionando"}
      </text>
      <text
        className="st8 st9 st10"
        transform="translate(1160.929 125.91)">
        {"Movi\xE9ndose"}
      </text>
      <text
        className="st8 st9 st10"
        transform="translate(1160.929 145.91)">
        {"Falla"}
      </text>
      <text
        className="st8 st9 st10"
        transform="translate(1160.929 165.91)">
        {"Bloqueada"}
      </text>
      <text
        className="st8 st9 st10"
        transform="translate(1160.929 185.91)">
        {"Detenida"}
      </text>
      <text
        className="st11 st12 st10"
        transform="translate(75.5 77.73)">
        {"Conectividad de Planta"}
      </text>
      <text
        className="st11 st12 st13"
        transform="translate(109.29 128.21)">
        {estadoConexion}
      </text>

      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAArCAYAAADlqKH9AAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA6lJREFUeNrsmH1zmkAQxjk8JQa1 qY2ddKbt9/9ibZLmTaMmCgg9Ms92nuwcepA0f3kzz4CELD/2dm/3iKLjOI7jOI7j2DfMB9usuhi0 /wEs9MWrj4I0dDSe3wzEagVs3wkuhvS5IbBSSQNX7wlpPHA92KrVx++YIHdQAclvhm6EtR0BBawH qIHTCZTgt4DWADm0hTIoJ+AdAVZdIbXn+gAaOqVOIygFbJ8ga7CN0xNpjWsCzB5+BWo7THEPnjoF 1CfoM44TgGrIGmzl9Oi0dJrjvL7+DOAtxe8/UNvSiwKYAmjqNHM6h6a4nuI+DSlwtW6d7gAq0itA MCTHYR/TOwHcN+jC6SsgJ/AyezKDt2pPLpzu8TIjnCd4Fmf9ThLPtvRiAsNTwP10+o7zGT04gQNi PDAHqHjzDPdJPFtP9pehkIe8+AO6QEyOKGl6agkq8PcxwBLcd4L7Msr+nLM9FJJj8Qzxd0FTPQP8 iVonI5rGEmAJhYIBQ45QWOK4IVATMt081Sk8do4YnFEcpsqDRtmoaG01KoufEasPSCpZnswhT/JU W3hpBE9+ARzH1qABMCIo/pss8gW8x/YWeOEsFFKmRDw5prVRAPu00B+yF5G9U4BMYG9MxUASz9jA zLbwlGRjigckDTF4KHwqAh3CltgdqrLaaFi3XTE1DwnedEBvG7dsoH3llZPKss24Q1NhKQHawu2D tSqxDN8UOrwl642jUv2mtzGOAw2VqiLkVBmqDsBsc0etnNjlxrgVZEE1+JkqQ8EGW9grqcfceOwe hNTTwIBrEleGEFD2YK66I6k2T7hehHiyUka5QVigtVoBPDvg0Up1N7nqiuaoNgu8/Jbt2cDpKfCP a2q17qleix3pfpp2iwK4AeAcdu6gOa4z5Eu6t9l0WVqEB2qtNA3bV96EScgsAfcH+u30y+kaHhVv viRmKKRe07RMQ9buqJeUPc4jQGq4S6crHC/RrT9SrJchkL6vE7ywx3u2rrlKjjUB3hLYNXRDXsw4 cdpA+r5WcEejwTa0GiypFbsBlHjxBtAPuG/D8Ri6x5Fs5ay09II7GJZtwZg6I7lHwGW3eA+wW+oh GfBVkWgDyUvRirI+g7fmANT9ZUWQ7NU5jitaH3NfFbMtqkSkNu6lB/IU4n4wUpn9pMC29JHAWxTa djC85+FPLAl9Zhl4unSd5Qymd4hvhmz6HtSjPtCqNs6oBiVvACubmpWuvaDxyPf5L/LsGEtarkK+ XUZ/BRgAeaXSHoSja7EAAAAASUVORK5CYII="
        width={40}
        height={43}
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        transform="translate(67.53 102.82) scale(.8973)"
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
        transform="translate(1134.969 77.73)">
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
        d="M577.8 367.2c0-27.5-28.1-50-79.5-50s-79.8 22.5-79.8 50V500.9c0 14.4 17.9 26.4 40.3 28.1v14.6h17.5v-14.3h41.5v14.3h17.5V529c23.6-.8 42.5-13.1 42.5-28.1V367.2z"
        className="st16"
      />
      <path
        d="M332 461.3h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7V464c0-1.5-1.2-2.7-2.7-2.7z"
        className="st17"
      />
      <path
        d="M261 457.8c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        className="st18"
      />
      <path
        d="M261 446.1c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9L263 445c-.5-.6-1.2-.9-2-.9z"
        className="st2"
      />
      <path
        d="M229.5 450.9h28.6"
        className="st1"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAAACXBIWXMAAAycAAAMnAGTj5aaAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7hJREFUeNrsmOty0zAQheVrmuZC 7wHKwPs/FzDtQFuatont2ImRmbPMYZETy2nhTz1zxkksK59W2otkzOv1er1e3lfwgn3KvYb+O2Sg xJeG9IYOngEuJLiQvmuoRht1r18SUkM1iq0iuvN0r6EK941S/dyQgQJrlFoNoJRADSBKq5VSSfBb LRv0BGwAEkANrQ6txlYjfB7guYH1CqvMamG1hDL8vkKbVqvGPQFTAntjdWx1hM8TPBPIEkBPVo9W D1b3uD8COEc74wKN9wBsgE6tLqxmVmdWJ1ZTPE/x7oog51Y/rG6gOygErHGBxp5rMMH0NlY7t3pn dQnNYNEp2rAlC0z1HFDfqF2Mvg1Aaw0ae8S/GGttAgu+t/po9QmQ54AfoV1E4Yan/ATtxtTO0Jpc 472gK6SAyjSPYK3Gah8A2IC+xZ83Azgg69QUgsYkGUhMzlWS1TcMGne0YqSsOIMlLzHlZ5i+A0xz RJYQpRSqUrJ0QR6/xLKQsLQTktejrMUJLDaD9S7IWYb0567UGJFCQMhaFY+f416wkeKOVhTIKaBO oSOa4pQANKDO6zXey7B8ThAteBmUXbzbBTkB2LFa/EkLoK6GxAFrvDdCnxP0NaRsFWLanZ22Oc0Q HU0oYA8cubpLCg4pnR5AMthYFylhxzUpnR2q1Cd5OvBIsYFKDpL/NeDvPsMOtWGkcrXAJarDPgUx wwaO550t2QbvA2cczqRrTdfznZBcqG6oHqxUiWX2AK0d/eoBOCFrlT/XVG7lJC6xak8wGXxFtWap SjZvS64AtkB59YTswMXrxgN0TSkwg3J8/6u/2KPDpcoMAjogD9828NoBuEA/UltmeOZVqrElM3TU QN4iS4wp02xzOg2YU315hxpzDmi9jOrII3REW/YzocosRjmdrD8ebAN3bfUFusLgH2nKf/UVdayC TEsA1ttXjgTaMXJaMrcK8CsK4XtY8w+HjHqGj8DhpRV56AprrlAO10zrdwL8jPs1wBd4Z+27fTAE kmHthFRxL2jvwlVRotrlBHoDsCua5ie0qXSAjztmBoPRFfS7xE75Yy7dZLcoFpfoIG1voRt8f4AB KlcGij1SmMStgjy1gAXu8YdTFCB6CyF7HFmTc9wfaA++UgcFvQ4HAsfOMQGQHBAMHQVwTes0J9gl HQ6U2w4H+pxgBApYl1oJRQEORWvlXJXj5OJZjll0meU6uApb4uamRTtP1/Y5+tOwpsMZ5a4S7cUO UYMtRW1bdfVPD1F9+ut9JP1TgAEAAsmq18TAAsMAAAAASUVORK5CYII="
        width={40}
        height={40}
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        transform="matrix(.875 0 0 .875 293.273 457.98)"
      />
      <circle
        cx={311.1}
        cy={475.7}
        r={10.9}
        className="st2"
      />
      <circle
        cx={311.1}
        cy={475.5}
        r={8}
        className="st19"
      />
      <text
        className="st11 st9 st20"
        transform="translate(296.555 515.47)">
        {"P-301"}
      </text>
      <path
        d="M332 382.8h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
        className="st17"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAAACXBIWXMAAAycAAAMnAGTj5aaAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA8dJREFUeNrsmOlS2zAUhWNb2SHs he7v/1wtnZZQSMkeO1GlzrnM4VaO5STDLzxzxsbYyqeru1mNxtvxdrwdtY/klca0+wxoDgyWBCDt vtDJAeC00gCQVdebOrDJnpZLIf93huuM7jUIymtN1xuCtoeGZItlkHebJsmQRT1MAeVQAWCGLrWs 2RFQ4FpQx6nn1MV1k8b2ICunpdPcaQEtFXApqNkR0ADGQx05DaBjpz7uN/FeDqiZ0wQa4zzD/1Zk 2Z0hQ4Ae6MTpwunS6dzpFLA9BTkH1JPTyOnB6dHpD+5NYdkGuUgtSPZBBvRQ75zeQ1e4N4AlW3h/ BWtNAeUBh053OBuVEawGNTWDpIXl9DA3Tp+cPjt9BPApJtDB2JZ8cgareQue0XMZfsPS85buRVsy xfJ1scRXAPvq9MXpA5b9hKyY0g8XWM4TSFxCnpP0JBngRWoykYnaz7aNIPFWvAbkZ1hTrNjDc5mC 3AC+S1mgibFlAku4xZyi/Z81Y5db++I1/PAGVj3DBNolPmZx36j0VFBQjUk5QLdCaivKUgvkFax3 AQv2AdhU1YYDISVJ/lwAyvvpbwRVS61EYiLTjkAOYLVznAe0xCFAXdUynNt4bwAflYATPzUItufZ VS03Qx6R8x9TPjQlgGX1XsaUStWjyRpl8SjIlEpfH6B9iuIYwNCYAtoiGUpJzxNLI9ovGaxNEdop GbRu35lSFctorBd9aRoZ3VwSDQ2aNvY/kqpJxvyIVfkuug+sGJN7zTWN+1/3nlYMxM1qjogT5WVd S+Shq4z0nBs1iSCkbvfX1G7NUYOlxcpLrFC1KjzxJSkPgFZaUgaUdmuMTmaMrkZ6waIGqHTqK4w5 Vb1lrprgygaDuxiBHFEvOKBanaiSmJRMWGr1jCYtfeVMuZGNqd3aktJqDakcNqmtkrSUBCDZglOM 9UDlcASLrhTkc5mK/TKU9NOiSsO5zQYCbk1w0vyOMNEfTt+dbp1+AXaigzKLzF+hb+skkEbWKmJz asHYencA/AZIf32P/y/Ixyt9koOAu+sRLbF0MhNqenXLZgl2gvc90E9Y8LYE0Nb9ELMElChw+eFL 6ma6ylc5OzwCaoglHuLeTPljo050szU19JIi/p4s2Q1Yckb++EjnJ0pnRaiSmRoljEHFD5f0gfWA aA99QhRUDKaB7+5lYJNgp22WpKR7aQGqg7NEPn8FhqrLoqQc2kPuBSWBjSpTsmHVICuxxdbb4A6x 9ZdsSU1JAHKj8mh0J3WInV6dT7ft9trA9atvR8dC1jr+CjAAphWuxrXCynUAAAAASUVORK5CYII="
        width={40}
        height={40}
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        transform="matrix(.875 0 0 .875 293.273 379.5)"
      />
      <circle
        cx={311.1}
        cy={397.3}
        r={10.9}
        className="st2"
      />
      <circle
        cx={311.1}
        cy={397.1}
        r={8}
        className="st19"
      />
      <text
        className="st11 st9 st20"
        transform="translate(296.555 436.99)">
        {"P-300"}
      </text>
      <path
        d="M381 440.8v92"
        className="st21"
      />
      <path
        d="M385.8 446.1c0 .9-.7 1.6-1.6 1.6h-6.3c-.9 0-1.6-.7-1.6-1.6 0-.4.2-.8.5-1.1l3.1-3.1c.6-.6 1.5-.6 2.2-.1l3.2 3.2c.3.3.5.7.5 1.1z"
        className="st22"
      />
      <path
        d="M377.2 446.1c0-.2.1-.3.2-.4l3.1-3.1c.2-.2.6-.2.9 0l3.1 3.1c.1.1.2.3.2.4 0 .3-.2.6-.6.6h-6.3c-.3 0-.6-.3-.6-.6m-2 0c0 1.4 1.2 2.6 2.6 2.6h6.3c1.4 0 2.6-1.2 2.6-2.6 0-.7-.3-1.3-.8-1.8l-3.1-3.1-.1-.1-.1-.1c-1.1-.9-2.6-.8-3.5.2l-3.1 3.1c-.5.5-.8 1.1-.8 1.8z"
        className="st2"
      />
      <path
        d="M384 543.9h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
        className="st23"
      />
      <path
        d="M373.5 552.9h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
        className="st17"
      />
      <path
        d="M343.5 564.6h38.8v40h-38.8z"
        className="st24"
      />
      <path
        d="M382.3 557.9v45.2c0 .7-.4 1.3-.8 1.3h-37.1c-.5 0-.8-.6-.8-1.3v-45.2"
        className="st23"
      />
      <path
        d="M289.9 491h-14.3c-2.8 0-5-2.3-5-5v-68.4c0-3.5 2.8-6.3 6.3-6.3h13M341.9 387.1h14.3c2.8 0 5 2.3 5 5v68.4c0 3.5-2.8 6.3-6.3 6.3h-13"
        className="st25"
      />
      <path
        d="M418.6 439.1c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        className="st18"
      />
      <path
        d="M418.6 427.4c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st2"
      />
      <path
        d="M362.5 432.2h53.2"
        className="st1"
      />
      <path
        d="M99.4 378.9h124.8v97.7H99.4z"
        className="st26"
      />
      <path
        d="M224.1 362.5v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1V362.5"
        className="st23"
      />
      <text
        className="st11 st9 st20"
        transform="translate(101.984 499.673)">
        {"TK-001 ALIMENTACI\xD3N"}
      </text>
      <path
        d="M472.6 385h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM457.4 388.9l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st27"
      />
      <path
        d="m473 399.5-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st27"
      />
      <path
        d="M465.2 384v10"
        className="st28"
      />
      <path
        d="M456.2 376h18M465.2 377v8"
        className="st29"
      />
      <path
        d="M480.2 394.3h41.1M516.3 595.3h-10.8c-2.8 0-5-2.3-5-5v-95.4M449.5 493.3h-13.3c-2.8 0-5-2.3-5-5V387.9"
        className="st25"
      />
      <text
        className="st30 st9 st31"
        transform="translate(449.813 414.11)">
        {"VX-307"}
      </text>
      <path
        d="M544.6 385h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM529.4 388.9l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st27"
      />
      <path
        d="m545 399.5-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st27"
      />
      <path
        d="M537.2 384v10"
        className="st28"
      />
      <path
        d="M528.2 376h18M537.2 377v8"
        className="st29"
      />
      <text
        className="st30 st9 st31"
        transform="translate(521.863 414.11)">
        {"VX-308"}
      </text>
      <path
        d="M472.6 484.2h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM457.4 488.1l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st27"
      />
      <path
        d="m473 498.7-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st27"
      />
      <path
        d="M465.2 483.2v10"
        className="st28"
      />
      <path
        d="M456.2 475.2h18M465.2 476.2v8"
        className="st29"
      />
      <path
        d="M480.2 493.5h41.1"
        className="st25"
      />
      <text
        className="st30 st9 st31"
        transform="translate(449.813 513.326)">
        {"VX-309"}
      </text>
      <path
        d="M544.6 484.2h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM529.4 488.1l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st27"
      />
      <path
        d="m545 498.7-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st27"
      />
      <path
        d="M537.2 483.2v10"
        className="st28"
      />
      <path
        d="M528.2 475.2h18M537.2 476.2v8"
        className="st29"
      />
      <text
        className="st30 st9 st31"
        transform="translate(521.863 513.326)">
        {"VX-310"}
      </text>
      <path
        d="M536.6 586h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM521.4 589.9l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st27"
      />
      <path
        d="m537 600.5-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st27"
      />
      <path
        d="M529.2 585v10"
        className="st28"
      />
      <path
        d="M520.2 577h18M529.2 578v8"
        className="st29"
      />
      <text
        className="st30 st9 st31"
        transform="translate(513.863 615.09)">
        {"VX-311"}
      </text>
      <path
        d="M551.6 491.8h13.3c2.8 0 5 2.3 5 5v53.1c0 4 6.2 7.2 10.2 7.2h583.7"
        className="st32"
      />
      <path
        d="M551.6 393.3h13.3c2.8 0 5 2.3 5 5v100.4"
        className="st32"
      />
      <path
        d="M760.6 367.2c0-27.5-28.1-50-79.5-50s-79.8 22.5-79.8 50V500.9c0 14.4 17.9 26.4 40.3 28.1v14.6h17.5v-14.3h41.5v14.3h17.5V529c23.6-.8 42.5-13.1 42.5-28.1V367.2z"
        className="st16"
      />
      <path
        d="M655.3 385h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM640.1 388.9l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st27"
      />
      <path
        d="m655.7 399.5-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st27"
      />
      <path
        d="M647.9 384v10"
        className="st28"
      />
      <path
        d="M638.9 376h18M647.9 377v8"
        className="st29"
      />
      <path
        d="M632.3 394.8H619c-2.8 0-5-2.3-5-5v-91M662.9 394.3h41.2M697.1 595.3h-8.8c-2.8 0-5-2.3-5-5v-95.4"
        className="st25"
      />
      <path
        d="M632.3 493.3H619c-2.8 0-5-2.3-5-5V387.9"
        className="st25"
      />
      <text
        className="st30 st9 st31"
        transform="translate(632.577 414.11)">
        {"VX-312"}
      </text>
      <path
        d="M727.4 385h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM712.2 388.9l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st27"
      />
      <path
        d="m727.8 399.5-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st27"
      />
      <path
        d="M720 384v10"
        className="st28"
      />
      <path
        d="M711 376h18M720 377v8"
        className="st29"
      />
      <text
        className="st30 st9 st31"
        transform="translate(704.626 414.11)">
        {"VX-313"}
      </text>
      <path
        d="M655.3 484.2h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM640.1 488.1l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st27"
      />
      <path
        d="m655.7 498.7-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st27"
      />
      <path
        d="M647.9 483.2v10"
        className="st28"
      />
      <path
        d="M638.9 475.2h18M647.9 476.2v8"
        className="st29"
      />
      <path
        d="M662.9 493.5h41.2"
        className="st25"
      />
      <text
        className="st30 st9 st31"
        transform="translate(632.577 513.326)">
        {"VX-314"}
      </text>
      <path
        d="M727.4 484.2h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM712.2 488.1l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st27"
      />
      <path
        d="m727.8 498.7-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st27"
      />
      <path
        d="M720 483.2v10"
        className="st28"
      />
      <path
        d="M711 475.2h18M720 476.2v8"
        className="st29"
      />
      <text
        className="st30 st9 st31"
        transform="translate(704.626 513.326)">
        {"VX-315"}
      </text>
      <path
        d="M718.4 586h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM703.2 589.9l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st27"
      />
      <path
        d="m718.8 600.5-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st27"
      />
      <path
        d="M711 585v10"
        className="st28"
      />
      <path
        d="M702 577h18M711 578v8"
        className="st29"
      />
      <text
        className="st30 st9 st31"
        transform="translate(695.626 615.09)">
        {"VX-316"}
      </text>
      <path
        d="M734.4 491.8h13.3c2.8 0 5 2.3 5 5v59.4"
        className="st32"
      />
      <path
        d="M734.4 393.3h13.3c2.8 0 5 2.3 5 5v100.4"
        className="st32"
      />
      <path
        d="M723.8 595.3h7.4c4.1 0 7.4 3.3 7.4 7.4v50.6"
        className="st25"
      />
      <path
        d="M939.4 367.2c0-27.5-28.1-50-79.5-50s-79.8 22.5-79.8 50V500.9c0 14.4 17.9 26.4 40.3 28.1v14.6h17.5v-14.3h41.5v14.3h17.5V529c23.6-.8 42.5-13.1 42.5-28.1V367.2z"
        className="st16"
      />
      <path
        d="M834.1 385h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM818.9 388.9l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st27"
      />
      <path
        d="m834.5 399.5-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st27"
      />
      <path
        d="M826.7 384v10"
        className="st28"
      />
      <path
        d="M817.7 376h18M826.7 377v8"
        className="st29"
      />
      <path
        d="M811.4 394.8H794c-.5 0-1-.4-1-1v-95.6M841.7 394.3h41.1M875.8 595.3H867c-2.8 0-5-2.3-5-5v-95.4"
        className="st25"
      />
      <path
        d="M811 493.3h-13.3c-2.8 0-4.7-2.3-4.7-5v-98.4"
        className="st25"
      />
      <text
        className="st30 st9 st31"
        transform="translate(811.34 414.11)">
        {"VX-317"}
      </text>
      <path
        d="M906.1 385h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM890.9 388.9l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st27"
      />
      <path
        d="m906.5 399.5-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st27"
      />
      <path
        d="M898.7 384v10"
        className="st28"
      />
      <path
        d="M889.7 376h18M898.7 377v8"
        className="st29"
      />
      <text
        className="st30 st9 st31"
        transform="translate(883.39 414.11)">
        {"VX-318"}
      </text>
      <path
        d="M834.1 484.2h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM818.9 488.1l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st27"
      />
      <path
        d="m834.5 498.7-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st27"
      />
      <path
        d="M826.7 483.2v10"
        className="st28"
      />
      <path
        d="M817.7 475.2h18M826.7 476.2v8"
        className="st29"
      />
      <path
        d="M841.7 493.5h41.1"
        className="st25"
      />
      <text
        className="st30 st9 st31"
        transform="translate(811.34 513.326)">
        {"VX-319"}
      </text>
      <path
        d="M906.1 484.2h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM890.9 488.1l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st27"
      />
      <path
        d="m906.5 498.7-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st27"
      />
      <path
        d="M898.7 483.2v10"
        className="st28"
      />
      <path
        d="M889.7 475.2h18M898.7 476.2v8"
        className="st29"
      />
      <text
        className="st30 st9 st31"
        transform="translate(883.39 513.326)">
        {"VX-320"}
      </text>
      <path
        d="M897.1 586h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM881.9 589.9l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st27"
      />
      <path
        d="m897.5 600.5-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st27"
      />
      <path
        d="M889.7 585v10"
        className="st28"
      />
      <path
        d="M880.7 577h18M889.7 578v8"
        className="st29"
      />
      <text
        className="st30 st9 st31"
        transform="translate(874.39 615.09)">
        {"VX-321"}
      </text>
      <path
        d="M913.1 491.8h13.3c2.8 0 5 2.3 5 5v59.4"
        className="st32"
      />
      <path
        d="M913.1 393.3h13.3c2.8 0 5 2.3 5 5v100.4"
        className="st32"
      />
      <path
        d="M902.4 595.3h8.4c4.1 0 7.4 3.3 7.4 7.4v50.6"
        className="st25"
      />
      <text
        className="st11 st9 st20"
        transform="translate(486.128 349.87)">
        {"F-300"}
      </text>
      <text
        className="st11 st9 st20"
        transform="translate(669.141 349.87)">
        {"F-301"}
      </text>
      <path
        d="M1116.1 367.2c0-27.5-28.1-50-79.5-50s-79.8 22.5-79.8 50V500.9c0 14.4 17.9 26.4 40.3 28.1v14.6h17.5v-14.3h41.5v14.3h17.5V529c23.6-.8 42.5-13.1 42.5-28.1V367.2z"
        className="st16"
      />
      <path
        d="M1010.9 385h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM995.7 388.9l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st27"
      />
      <path
        d="m1011.3 399.5-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st27"
      />
      <path
        d="M1003.5 384v10"
        className="st28"
      />
      <path
        d="M994.5 376h18M1003.5 377v8"
        className="st29"
      />
      <path
        d="M987.8 394.8h-13.3c-2.8 0-5-2.3-5-5l1.3-79.7c.1-6.2-4.9-11.3-14.1-11.3H744.1l-306.2 1c-3.7 0-6.7 3-6.7 6.7v83.2c0 2.8 2.3 5 5 5h13.3M1018.5 394.3h41.1M1052.6 595.3h-8.8c-2.8 0-5-2.3-5-5v-95.4"
        className="st25"
      />
      <path
        d="M987.8 493.3h-13.3c-2.8 0-5-2.3-5-5V387.9"
        className="st25"
      />
      <text
        className="st30 st9 st31"
        transform="translate(988.106 414.11)">
        {"VX-322"}
      </text>
      <path
        d="M1082.9 385h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM1067.7 388.9l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st27"
      />
      <path
        d="m1083.3 399.5-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st27"
      />
      <path
        d="M1075.5 384v10"
        className="st28"
      />
      <path
        d="M1066.5 376h18M1075.5 377v8"
        className="st29"
      />
      <text
        className="st30 st9 st31"
        transform="translate(1060.155 414.11)">
        {"VX-323"}
      </text>
      <path
        d="M1010.9 484.2h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM995.7 488.1l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st27"
      />
      <path
        d="m1011.3 498.7-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st27"
      />
      <path
        d="M1003.5 483.2v10"
        className="st28"
      />
      <path
        d="M994.5 475.2h18M1003.5 476.2v8"
        className="st29"
      />
      <path
        d="M1018.5 493.5h41.1"
        className="st25"
      />
      <text
        className="st30 st9 st31"
        transform="translate(988.106 513.326)">
        {"VX-324"}
      </text>
      <path
        d="M1082.9 484.2h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM1067.7 488.1l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st27"
      />
      <path
        d="m1083.3 498.7-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st27"
      />
      <path
        d="M1075.5 483.2v10"
        className="st28"
      />
      <path
        d="M1066.5 475.2h18M1075.5 476.2v8"
        className="st29"
      />
      <text
        className="st30 st9 st31"
        transform="translate(1060.155 513.326)">
        {"VX-325"}
      </text>
      <path
        d="M1072.9 586h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM1057.7 589.9l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st27"
      />
      <path
        d="m1073.3 600.5-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st27"
      />
      <path
        d="M1065.5 585v10"
        className="st28"
      />
      <path
        d="M1056.5 577h18M1065.5 578v8"
        className="st29"
      />
      <text
        className="st30 st9 st31"
        transform="translate(1050.155 615.09)">
        {"VX-326"}
      </text>
      <path
        d="M1089.9 491.8h13.3c2.8 0 5 2.3 5 5v59.4"
        className="st32"
      />
      <path
        d="M1089.9 393.3h13.3c2.8 0 5 2.3 5 5v100.4"
        className="st32"
      />
      <path
        d="M1078.3 595.3h9.4c4.1 0 7.4 3.3 7.4 7.4v50.6"
        className="st25"
      />
      <text
        className="st11 st9 st20"
        transform="translate(1024.67 349.87)">
        {"F-303"}
      </text>
      <text
        className="st11 st9 st20"
        transform="translate(847.905 349.87)">
        {"F-302"}
      </text>
      <image
        xlinkHref="data:image/png;base64,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 seQAAAAASUVORK5CYII="
        width={177}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        transform="translate(471.242 667.395) scale(.9944)"
      />

      {/* Diferencial Filtro F300 */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(10, "Diferencial Filtro F300", false)}>
        <path
          d="M578.5 797.6h53.1c3.5 0 6.3-2.8 6.3-6.3V689c0-3.5-2.8-6.3-6.3-6.3h-61.7c-1.2 0-2.4-.4-3.4-1.2l-.4-.3c-6.5-6.5-6.5-6.5-12.9.2-1 .9-2.2 1.3-3.5 1.3H487c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h91.5z"
          className="st2"
        />
        <path
          d="M480.8 689.8h157.1v99.8H480.8z"
          className={getTarjetaClass(10, selected)}
        />
        <text
          className="st26 st9 st10"
          transform="translate(527.558 734.47)">
          {"Diferencial"}
        </text>
        <text
          className="st26 st9 st10"
          transform="translate(527.558 751.27)">
          {"Filtro F300"}
        </text>
        g-{/* Alarma Diferencial Filtro F300 */}
        <g
          className={getTemaAlarma(10, loading, datosAlarmas)}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(10, "Diferencial Filtro F300");
          }}>
          <path
            d="M503.2 766.1c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st5"
          />
          <path
            d="M501.5 765.1c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM512.8 763.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st5"
          />
          <path
            d="M513.4 761.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM514.2 771.1v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM509.2 778.5c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st5"
          />
        </g>
        <text
          className="st11 st9 st33"
          transform="translate(540.442 777.248)">
          {diferencialFiltroF300}
        </text>
        <text
          className="st11 st9 st34"
          transform="translate(601.21 776.848)">
          {"bar"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(523.716 709.473)">
          {"PT302 - PT303"}
        </text>
      </g>
      <image
        xlinkHref="data:image/png;base64,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 YII="
        width={177}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        transform="translate(650.242 667.395) scale(.9944)"
      />
      {/* Diferencial Filtro F301 */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(11, "Diferencial Filtro F301", false)}>
        <path
          d="M757.7 797.6h53.1c3.5 0 6.3-2.8 6.3-6.3V689c0-3.5-2.8-6.3-6.3-6.3h-61.7c-1.2 0-2.4-.4-3.4-1.2l-.4-.3c-6.5-6.5-6.5-6.5-12.9.2-1 .9-2.2 1.3-3.5 1.3h-62.7c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h91.5z"
          className="st2"
        />
        <path
          d="M660 689.8h157.1v99.8H660z"
          className={getTarjetaClass(10, selected)}
        />
        <text
          className="st26 st9 st10"
          transform="translate(706.783 734.47)">
          {"Diferencial"}
        </text>
        <text
          className="st26 st9 st10"
          transform="translate(706.783 751.27)">
          {"Filtro F301"}
        </text>
        {/* Alarma Diferencial Filtro F301 */}
        <g
          className={getTemaAlarma(11, loading, datosAlarmas)}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(11, "Diferencial Filtro F301");
          }}>
          <path
            d="M682.4 766.1c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st5"
          />
          <path
            d="M680.7 765.1c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM692 763.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st5"
          />
          <path
            d="M692.6 761.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM693.4 771.1v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM688.4 778.5c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st5"
          />
        </g>
        <text
          className="st11 st9 st33"
          transform="translate(719.668 777.248)">
          {diferencialFiltroF301}
        </text>
        <text
          className="st11 st9 st34"
          transform="translate(780.435 776.848)">
          {"bar"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(702.941 709.473)">
          {"PT302 - PT305"}
        </text>
      </g>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALIAAACMCAYAAADY+vO1AAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB1lJREFUeNrsmwtz2lYQRq8evBzb Sdy0/f+/r48k2MY8pUrTvdPPG0kIDBNXOmdmRyCwGC5Hy+4KhwAAAABwMRKW4Gpr2rW2pQUg8rsW 2EcQceO2QGhEfs8Cpy7i/ihtIRIXCI3I72X9vMB5FZls4/4o7r6Kg2wPInRA6PPIWYKLSBzFrWNS xayKqd3ORORa2m0VO9vG2yo0Mv+kjJyMNMt7iacm8LyKG9vOTeYoci3tpooXi7XdV6GLEYlcHrl/ 1Yzsa0Ik/lfihQl8W8VdFR/s/tSeV5iwtcDPVTxZrGxfOkKZ20QuTxU7P+PD64oxNXaZRZS4Fve+ io8W9yb13J53sOxbi7u0mNt2Yvt9Zh5DmaHSli3Nb3kJkfXD0248a+nOkxHIHN9/rIejxJ+q+FzF g92+E5ELE7nOwt+r+GaPzSRe7Dl7+TDLgUus05sYBzfROSp03uNDS1wGyhtChR5yqaETCi0pbk3c B4nPJvKiQeR7k39ujy8sM6+sbo4TjSGK7MVUefcN4dehPFXkxGUf35FrZx6FTpzMQ8zOWhvPrA6+ E5F/kYx8a8/JReRnk3ghdXWsrZ9N5O1ARS4bsnGc2OgkZ9PSBLdm5rynxBPpyHXxF7Z/It15OvDy Ir7HiYh8K2XFZ7sds+7Mnl/YhxIlnrsGcdkg8lCbPi0pDjLNWVt5tXKTna1l5+LcjJy6zBM78nvp zFXmTDLyULNxIiJraXEnjZ6ujY7f9q4unsvfxwnGZmQi7+39ru39P0pk4fUl/jL8eMm/VeSkQeKF fH1q1rmTWm/aUSsPsbTIpMS6sXW4tbiRNcll8ffh9YWTqaytZuPdgGtkXxtHkVfSCH+VBBAaphm9 S4umrvyj1X6/WjzYPs08mZtgDFXkRNZn6rLrXL6hcskqpayr9hxxdBfrQj9LHmKz5zPyRrJxHFlG N7UR9JOMsk3kpOHrc24Hr6X9UsXvVfxmtz/aYypyn58x/p8lDi1N8FR6hYmb5vj6Wv82ZuVdeH25 esjjt/ie4nvV+fpCvNxL/byVSUZxSmmRi8iakb+IyJ+koZm4D27IGVllVikziaZvpqSlkR7bD4h8 sxeveMZL+lFibf7i5fx4cSnpysihYZGjyPci84OUFjcmcuYmFmO4MOJ/+Za0TG60QUmc5JmM58ow ngshvmzQcmJnAj9ZubGUfiOVKVDoKi2aauRYx925qcVtQ30cRiJyk9BJQ9YOLWuiv1PORiKw/5bR OjlzmfixpXH2V5HLvlMLlVnnxwt5gckImrw+5UboeSInkp2TgZcRfaYXqdTM6tmNa56z0HKd4tjU Qn+eGDvzuTtDtMkbq8iXkD8ZqciaWSfOs+jdNLz+R4VOkZMezUzuDpiF8f0CDq7TOCeuWc5dA512 9WDpkQP7kZFvapAYrtFntP3fY2hpoo9egUuONDMA1yy5eifK9A1nDTLDNbPySa6lZ5wlY29Q4Oc0 w52+pWcKDPAexD6rtAB4tyAyIDIAIgMgMgAiAyIDIDIAIgMgMiAyACIDIDIAIgMiAyAyACIDIDIg MgAiAyAyACIDIDIgMgAiAyAyACIDIgMgMgAiAyAyIDIAIgMgMgAiAyIDIDIAIgMgMgAiAyIDIDIA IgMgMiAyACIDIDIAIgMiAyAyACIDIDIgMgAiAyAyACIDIrMEgMgAiAyAyACIDIgMgMgAiAyAyIDI AIgMgMgAiAyIDIDIAIgMgMiAyACIDIDIAIgMgMiAyACIDIDIAIgMiAyAyACIDIDIgMgAiAzwzkQu 3RbgZ1F2eZi+8WAIDtcS9SS30p4v4F+oRGK4stA+3lxa1FFYnHRwgDeK7L3rLXLZclbEAx4sinPO GoAe2VddK1qS6A9VQe4OmrgDHiT2LlTqhAkIvEFknyi7XCuakmbe8QLxj3ZVbKvYWGwtdhaZ/F3C ZwNniBzl3Ylf3rd9m8RtIjcdfF3Fi8XKtvW+iWXiUjIzQsOpA4S9Sbu2WIlvaxF53zcjlw3ZOL7A cxVPVTxW8aGKqQlb2O1MygtEhr4iF5Isa7+W5tij3V/ZY5uG8qI8VloULhtHib+ZxDMTt7CzZSYi IzGcWh/vLPvW8n6t4m9zbWnuvUg5e+hbI2ujpyJ/r2LhJN44sTMyMpyYkQ8NIv9ZxV92+9Gy8jb8 ODHrLC30BbaS8qdSExey/8ZEziUjIzL0ycZe5PitX0v8h4m8tMc29rxeIvusHIvwlYhamuBNWTpD YjhjYqHf/EuT+attn6S0OIQTxm86T9azRfetpembSbPHKA76lhW+tNiaZ8/S7D3afW30GjmWkYO9 gM/SL5KJNRvT7ME5zV6UeRP+G7vFUW+cJe/DmRdEgpPZd5gzq5nzFokRGvpkZE2QOxF66yYVrWVF H9li45ZaZCJuLpm4qTZGZDgmsq+V40U43XZemj5FtqRBaI2ESQVcaIKhF+OafjAU3iKyPi9pEBeJ 4VIyN4kdQo9fVp4qYFcNjMxwqVIj9BX40vIhMVxSZoBx8o8AAwAPGck5TBmoaAAAAABJRU5ErkJg gg=="
        width={178}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        transform="translate(828.242 667.393) scale(.9944)"
      />
      {/* Diferencial Filtro F302 */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(14, "Diferencial Filtro F302", false)}>
        <path
          d="M935.9 797.6H989c3.5 0 6.3-2.8 6.3-6.3V689c0-3.5-2.8-6.3-6.3-6.3h-61.7c-1.2 0-2.4-.4-3.4-1.2l-.4-.3c-6.5-6.5-6.5-6.5-12.9.2-1 .9-2.2 1.3-3.5 1.3h-62.7c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h91.5z"
          className="st2"
        />
        <path
          d="M838.2 689.8h157.1v99.8H838.2z"
          className={getTarjetaClass(14, selected)}
        />
        <text
          className="st26 st9 st10"
          transform="translate(885.009 734.47)">
          {"Diferencial"}
        </text>
        <text
          className="st26 st9 st10"
          transform="translate(885.009 751.27)">
          {"Filtro F302"}
        </text>
        {/* Alarma Diferencial Filtro F302 */}
        <g
          className={getTemaAlarma(14, loading, datosAlarmas)}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(14, "Diferencial Filtro F302");
          }}>
          <path
            d="M860.6 766.1c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st5"
          />
          <path
            d="M858.9 765.1c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM870.2 763.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st5"
          />
          <path
            d="M870.8 761.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM871.6 771.1v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM866.6 778.5c.9 0 1.7-.8 1.7-1.7H865c.1.9.7 1.6 1.6 1.7z"
            className="st5"
          />
        </g>
        <text
          className="st11 st9 st33"
          transform="translate(897.893 777.248)">
          {diferencialFiltroF302}
        </text>
        <text
          className="st11 st9 st34"
          transform="translate(958.66 776.848)">
          {"bar"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(880.167 709.473)">
          {"PT302 - PT307"}
        </text>
      </g>
      <image
        xlinkHref="data:image/png;base64,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"
        width={177}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        transform="translate(1007.242 667.395) scale(.9944)"
      />
      {/* Diferencial Filtro F303 */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(15, "Diferencial Filtro F303", false)}>
        <path
          d="M1114.2 797.6h53.1c3.5 0 6.3-2.8 6.3-6.3V689c0-3.5-2.8-6.3-6.3-6.3h-61.7c-1.2 0-2.4-.4-3.4-1.2l-.4-.3c-6.5-6.5-6.5-6.5-12.9.2-1 .9-2.2 1.3-3.5 1.3h-62.7c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h91.5z"
          className="st2"
        />
        <path
          d="M1016.5 689.8h157.1v99.8h-157.1z"
          className={getTarjetaClass(15, selected)}
        />
        <text
          className="st26 st9 st10"
          transform="translate(1063.234 734.47)">
          {"Diferencial"}
        </text>
        <text
          className="st26 st9 st10"
          transform="translate(1063.234 751.27)">
          {"Filtro F303"}
        </text>
        {/* Alarma Diferencial Filtro F303 */}
        <g
          className={getTemaAlarma(15, loading, datosAlarmas)}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(15, "Diferencial Filtro F303");
          }}>
          <path
            d="M1038.9 766.1c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st5"
          />
          <path
            d="M1037.2 765.1c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM1048.5 763.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st5"
          />
          <path
            d="M1049.1 761.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM1049.9 771.1v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1044.9 778.5c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st5"
          />
        </g>
        <text
          className="st11 st9 st33"
          transform="translate(1076.118 777.248)">
          {diferencialFiltroF303}
        </text>
        <text
          className="st11 st9 st34"
          transform="translate(1136.885 776.848)">
          {"bar"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(1055.392 709.473)">
          {"PT302- PT309"}
        </text>
        <path
          d="M1252.8 572.3H1173c-2.6 0-4.6-2.1-4.6-4.6v-23.2c0-2.6 2.1-4.6 4.6-4.6h79.8c2.6 0 4.6 2.1 4.6 4.6v23.2c.1 2.5-2 4.6-4.6 4.6z"
          className="st27"
        />
        <text
          className="st9"
          style={{
            fontSize: 10,
            fill: "#c6c6c6"
          }}
          transform="translate(1188.154 560.01)">
          {"A TK-006"}
        </text>
      </g>
      <path
        d="M1157.4 563.3c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        className="st17"
      />
      <path
        d="M1157.4 551.6c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st2"
      />
      <path
        d="M543 595.3h7.4c4.1 0 7.4 3.3 7.4 7.4v43.6c0 4.9 4 8.9 8.9 8.9h619.5c6.8 0 12.2 5.5 12.2 12.2v157.2c0 6.7-5.4 12.1-12.1 12.1H121.6c-6.1 0-11.1 5-11.1 11.1V1058c0 6.1 4.9 11 11 11h257.9"
        className="st1"
      />
      <image
        xlinkHref="data:image/png;base64,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"
        width={177}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        transform="translate(125.242 904.395) scale(.9944)"
      />
      {/* ORP */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(0, "ORP", false)}>
        <path
          d="M194 913.6h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3V919.9c0-3.5-2.8-6.3-6.3-6.3H194z"
          className="st2"
        />
        <path
          d="M134.7 921h157.1v99.8H134.7z"
          className={getTarjetaClass(0, selected)}
        />
        <text
          className="st26 st9 st10"
          transform="translate(200.255 971.638)">
          {"ORP"}
        </text>
        {/* Alarma ORP */}
        <g
          className={getTemaAlarma(0, loading, datosAlarmas)}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(0, "ORP");
          }}>
          <path
            d="M157 997.3c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st5"
          />
          <path
            d="M155.3 996.3c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM166.6 995c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st5"
          />
          <path
            d="M167.2 993.1c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM168 1002.3v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM163 1009.7c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st5"
          />
        </g>
        <text
          className="st11 st9 st33"
          transform="translate(194.308 1008.416)">
          {ORP}
        </text>
        <text
          className="st11 st9 st34"
          transform="translate(256.075 1008.016)">
          {"mV"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(199.582 940.64)">
          {"AE301"}
        </text>
        <circle
          cx={213.6}
          cy={1069}
          r={9.2}
          className="st37"
        />
      </g>
      <image
        xlinkHref="data:image/png;base64,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"
        width={177}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        transform="translate(125.242 671.448) scale(.9944)"
      />
      {/* ph Alimentacion */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(16, "pH de Alimentación", false)}>
        <path
          d="M194 680.7h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3V687c0-3.5-2.8-6.3-6.3-6.3H194z"
          className="st2"
        />
        <path
          d="M134.7 688.1h157.1v99.8H134.7z"
          className={getTarjetaClass(16, selected)}
        />
        <text
          style={{
            enableBackground: "new"
          }}
          transform="translate(203.306 729.69)">
          <tspan
            x={0}
            y={0}
            className="st26 st9 st10">
            {"pH "}
          </tspan>
          <tspan
            x={-40.9}
            y={16.8}
            className="st26 st9 st10">
            {"de Alimentaci\xF3n"}
          </tspan>
        </text>
        {/* Alarma ph de Alimentación */}
        <g
          className={getTemaAlarma(16, loading, datosAlarmas)}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(16, "ph de Alimentación");
          }}>
          <path
            d="M157 764.4c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st5"
          />
          <path
            d="M155.3 763.4c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM166.6 762.1c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st5"
          />
          <path
            d="M167.2 760.2c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM168 769.4v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM163 776.8c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st5"
          />

          <text
            className="st11 st9 st33"
            transform="translate(194.308 775.468)">
            {pHAlimentacion}
          </text>
          <text
            className="st11 st9 st34"
            transform="translate(256.075 775.068)">
            pH
          </text>
          <text
            className="st11 st9 st20"
            transform="translate(199.582 707.692)">
            {"AE306"}
          </text>
        </g>
        <circle
          cx={213.6}
          cy={836.1}
          r={9.2}
          className="st37"
        />
      </g>
      <image
        xlinkHref="data:image/png;base64,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 848AAwCr7CSWLp8UTQAAAABJRU5ErkJggg=="
        width={177}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        transform="translate(518.242 904.395) scale(.9944)"
      />
      {/* Conductividad de Alimentación */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(9, "Conductividad de Alimentación", false)}>
        <path
          d="M587.3 913.6h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3V919.9c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
          className="st2"
        />
        <path
          d="M528 921h157.1v99.8H528z"
          className={getTarjetaClass(9, selected)}
        />
        <text
          className="st26 st9 st10"
          transform="translate(564.38 965.638)">
          {"Conductividad"}
        </text>
        <text
          className="st26 st9 st10"
          transform="translate(558.98 982.438)">
          {"de Alimentaci\xF3n"}
        </text>
        {/* Alarma Conductividad de Alimentación */}
        <g
          className={getTemaAlarma(9, loading, datosAlarmas)}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(9, "Conductividad de Alimentación");
          }}>
          <path
            d="M550.4 997.3c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st5"
          />
          <path
            d="M548.7 996.3c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM560 995c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st5"
          />
          <path
            d="M560.6 993.1c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM561.4 1002.3v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM556.4 1009.7c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st5"
          />
        </g>
        <text
          className="st11 st9 st33"
          transform="translate(587.625 1008.416)">
          {conductividadAlimentacion}
        </text>
        <text
          className="st11 st9 st34"
          transform="translate(643.393 1008.016)">
          {"dS/m"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(592.9 940.64)">
          {"AE300"}
        </text>
      </g>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALIAAACMCAYAAADY+vO1AAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB11JREFUeNrsmwlz2kgQRnWBIbZz 7W72//++3cTxBcYc2qGqZ/PRHgkJ24kjvVfVhQFbKkZPre4WzjIAAHgb5C+8jZwlhZ7UDT+/usi5 /B0Sw2uJXPcROz9B4H0U8lqBxPACMh+LVqoeshcuSnnME9kaoK/A2xA7eYxxtPSoOkici7yVxMQe S3mfUgP6lhMq7CbE2h5jRKnrNpmrjhKXJu40xJnEVIQuWupngKY6OGbgvbSPIVYSjxZbi8bMXHWU OAo8D/EuxLk9zuz1icvMAF2E1ky8F/YhxDLEfYiFRW7vZSbzSRk5ZuIzk/cixHuJc5N76rIyGRm6 ZOWYjdeWgffi3oa4sdD+yzd+9TGRU9l4bhJ/CvHZ4mOIS8nMlewYiaFrk7e1jLvPxHchrs23iXlU JxrAzqVFkcjGH0L8EeIvi8/22oWUF6mmD6BJ5J0T+UZ8KuR3YuO3a2r8qoZsHDPyRLJxFPlLiL9D /GlZ+VwyckFGhp4yb0TkS/OtdO/Fxk+F7lxaxBHbTDLyJxP4ixP5TJo9RIa+zd7aRJ6JxPG12PQt TejSsnjelpGz7OnIbWZ18KXIHOODvRebPRo96NvwxWZv6iReSNN34wYKRXZ4oyRZWvgaOTZ75yZz jAuZWkyyp3f4AI5JHCcXk0Qmjo7FYcI0Ub7+n5WPTS0q28DMhI1z5Hn2Y4Y8pT6GZ5YX8d7DRjyb O4knrnztNLXQ8qLKDu/qTbPDO3plxtgNTkOdiRVAnJR511pvuFWJssJ/vyLKrFFmT79jgchwSkb2 rpUJ58pjw4SioUbOE0I3BRLDczJyyreyg2cHzhU9dlRQB8NPlrtzoix6bjgjA8NPqJlTkT1X5JTU Tc8BnpuJ29zKTxWZuTC8VdGflZEB3iSIDIgMgMgAiAyAyIDIAIgMgMgAiAyIDIDIAIgMgMiAyACI DIDIAIgMiAyAyACIDIDIAIgMiAyAyACIDIDIgMgAiAyAyACIDIgMgMgAiAyAyIDIAIgMgMgAiAyA yIDIAIgMgMgAiAyIDIDIAIgMgMiAyACIDIDIAIgMiAyAyACIDIDIgMgsASAyACIDIDIAIgMiAyAy ACIDIDIgMgAiAyAyACIDIgMgMgAiAyAyIDIAIgMgMgAiAyAyIDIAIgMgMgAiAyIDIDIAIgMgMiAy wJBErt0jwCAycn3kOcBrUbf5VvSQt3YbRGJ4TVF7+VV03HiNwPCThe7lXNGSfTW2IXaJQG54TZG9 Z51E9hLHjWwtNhbxOZkaXjr77px3bUnzwLmqZQc7J/Cjxdoivl7ZCTFmkfMXOKBjFnmX8G0jnm2d 2E/Wqzqy8a1tbC/wKsSDxcpeizvMX+iADkXgvKe4Yx1zaum6Sbi2cq7tmtaoOlKfxOy73+gyxEJi /3wq2biUUiUfkcipqFvWoKaRfrIGaxN2aXEvnkWh120yN5UWmuYfbIN3IW5D3IQ4D3EmEk9N5HIk Ikdhi0Tk7vPnR3qQMTbPtSth1ybwnfkV49akfpCsvE01gFVLfbyRM2VhG/0uEpdyNp3ZtsqBS5xL k1zIyVvJ56/clalu6T18E+1rwHrgMtdSvi5N3m8W3+35nb236pORa1n8nYh8bxudh5jZ39V2ltzL a2UiIw1NZJW4squRxq5hLWo3AXp0oZfOTiOngUwrtvb5VeR/Qvwb4soS6CJRJ9ddm72t1McL28lE MnGU+MIy8mREIpf2ead2Es8lZvb6xF2htnLQVq7veGhoasYg8kZEvjV5v5rMKvKqr8j+EhgzsjZz G5H7XaK0GKrIMRtXIvE7O5n3cWlrM7e1m8iaRYl9z3EnzU3Mzru2Dn3AGXm/DtdWVlyJyMtjk4vq SCG+sQPx4A7Iyg7AdztoU6kNhzyKiyLHbBwlfh/io8uqc5nqxJNfy7R4wK7t+UKamu2ARa4brvwr afhupT4+mo27ZOTMdqLTDD0gZ66sKAbe7KnIZybypUmsIj5KyVVJU7yUpvmbhDY1Qxc5S0xv1okR 3EKavLgmjeVW1WFncUd6BkWRp1JSlA1jp6Fn5Etbi2X244ZRrH/nssaPcun8Zs3MV/v52o2ZxpCR fVbWGyK+Cd4eK7eqDjvcubMnZmQdObXNT4fY7MUaeS6Xv6Vr4N6b6CrynUn7VeLKMvJ99mPwvx1w s1c31Mo7N4r0t6Zb16PquFM/wC5swYsR1MVtUwsVeCWN3L2JPLffi6VFFPlKyoprV1aMYWrRVC+f fJOo6rGzXXY4Y86yw9uyYyB3Mq/cJVAblgtXWqxl0nMtTZ6Ol9ZyALNsXLesU99s63wyVyfsrKl8 GNMXhuKVyH/FVUWeS7MXpxYPlq3v3Nht5WrBMX15qO7w84uK3LazfISLn/oK4qPIOpNpTiZNsjaD OuUYwx29Lk6dfKmE59XLert6IhONSXY4W0915mtXTvAPCoj8y2tm/yUiP83R/7bRrpx/GUPkN7WG hZM61QjXiY58bI0dIv8ma+kFzhO1dUYWRuTfbU3zhoyLwAAAMED+E2AAVEBRFDGkPccAAAAASUVO RK5CYII="
        width={178}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        transform="translate(688.242 904.393) scale(.9944)"
      />
      {/* Temperatura de Alimentación */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(13, "Temperatura de Alimentación", false)}>
        <path
          d="M757.6 913.6h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3V919.9c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
          className="st2"
        />
        <path
          d="M698.3 921h157.1v99.8H698.3z"
          className={getTarjetaClass(13, selected)}
        />
        <text
          className="st26 st9 st10"
          transform="translate(738.965 965.638)">
          {"Temperatura"}
        </text>
        <text
          className="st26 st9 st10"
          transform="translate(729.265 982.438)">
          {"de Alimentaci\xF3n"}
        </text>
        {/* Alarma Temperatura de Alimentación */}
        <g
          className={getTemaAlarma(13, loading, datosAlarmas)}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(13, "Temperatura de Alimentación");
          }}>
          <path
            d="M720.7 997.3c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st5"
          />
          <path
            d="M719 996.3c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM730.3 995c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st5"
          />
          <path
            d="M730.9 993.1c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM731.7 1002.3v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM726.7 1009.7c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st5"
          />
        </g>
        <text
          className="st11 st9 st33"
          transform="translate(757.92 1008.416)">
          {temperaturaAlimentacion}
        </text>
        <text
          className="st11 st9 st34"
          transform="translate(824.688 1008.016)">
          {"\xB0C"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(763.195 940.64)">
          {"TT202"}
        </text>
      </g>
      <path
        d="M167.6 1082.5v52"
        className="st21"
      />
      <path
        d="M172.5 1087.8c0 .9-.7 1.6-1.6 1.6h-6.3c-.9 0-1.6-.7-1.6-1.6 0-.4.2-.8.5-1.1l3.1-3.1c.6-.6 1.5-.6 2.2-.1l3.2 3.2c.3.3.5.7.5 1.1z"
        className="st22"
      />
      <path
        d="M163.9 1087.8c0-.2.1-.3.2-.4l3.1-3.1c.2-.2.6-.2.9 0l3.1 3.1c.1.1.2.3.2.4 0 .3-.2.6-.6.6h-6.3c-.3 0-.6-.3-.6-.6m-2 0c0 1.4 1.2 2.6 2.6 2.6h6.3c1.4 0 2.6-1.2 2.6-2.6 0-.7-.3-1.3-.8-1.8l-3.1-3.1-.1-.1-.1-.1c-1.1-.9-2.6-.8-3.5.2l-3.1 3.1c-.5.5-.8 1.1-.8 1.8z"
        className="st2"
      />
      <path
        d="M170.7 1145.6h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
        className="st23"
      />
      <path
        d="M160.2 1154.6h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
        className="st17"
      />
      <path
        d="M130.2 1166.3H169v40h-38.8z"
        className="st24"
      />
      <path
        d="M169 1159.6v45.2c0 .7-.4 1.3-.8 1.3h-37.1c-.5 0-.8-.6-.8-1.3v-45.2"
        className="st23"
      />
      <path
        d="M252.5 1082.5v52"
        className="st21"
      />
      <path
        d="M247.7 1087.8c0 .9.7 1.6 1.6 1.6h6.3c.9 0 1.6-.7 1.6-1.6 0-.4-.2-.8-.5-1.1l-3.1-3.1c-.6-.6-1.5-.6-2.2-.1l-3.2 3.2c-.3.3-.5.7-.5 1.1z"
        className="st22"
      />
      <path
        d="M256.3 1087.8c0 .3-.3.6-.6.6h-6.3c-.4 0-.6-.3-.6-.6 0-.1.1-.3.2-.4l3.1-3.1c.3-.2.7-.2.9 0l3.1 3.1c.1.1.2.2.2.4m2 0c0-.7-.3-1.3-.8-1.8l-3.1-3.1c-.9-1-2.4-1.1-3.5-.2l-.1.1-.1.1-3.1 3.1c-.5.5-.8 1.1-.8 1.8 0 1.4 1.2 2.6 2.6 2.6h6.3c1.4 0 2.6-1.2 2.6-2.6z"
        className="st2"
      />
      <path
        d="M249.5 1145.6h15.2c1 0 1.8.8 1.8 1.8v39.2"
        className="st23"
      />
      <path
        d="M260 1154.6h-14c-.8 0-1.5-.7-1.5-1.5v-14c0-.8.7-1.5 1.5-1.5h14c.8 0 1.5.7 1.5 1.5v14c0 .8-.7 1.5-1.5 1.5z"
        className="st17"
      />
      <path
        d="M251.2 1166.3H290v40h-38.8z"
        className="st24"
      />
      <path
        d="M251.2 1159.6v45.2c0 .7.4 1.3.8 1.3h37.1c.5 0 .8-.6.8-1.3v-45.2"
        className="st23"
      />
      <path
        d="M420.4 1050.3c0-6.7-7.8-12.1-17.5-12.1s-17.5 5.5-17.5 12.1h.1c-.1.4-.1.7-.1 1.1v37.6c0 3.5 3.4 6.4 7.6 6.8v6.2h5.2v-6.1h9v6.1h5.2v-6.2c4.5-.2 8-3.2 8-6.8v-37.6c0-.3-.1-.7 0-1.1zM505.9 1059.8h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM490.7 1063.7l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st27"
      />
      <path
        d="m506.3 1074.3-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st27"
      />
      <path
        d="M498.5 1058.8v10"
        className="st28"
      />
      <path
        d="M489.5 1050.8h18M498.5 1051.8v8"
        className="st29"
      />
      <path
        d="M425.7 1069h59.2M511.5 1069.6h403"
        className="st1"
      />
      <circle
        cx={777.3}
        cy={1069}
        r={9.2}
        className="st37"
      />
      <path
        d="M987.9 1083.1h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
        className="st17"
      />
      <path
        d="M913.9 1076.6c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        className="st18"
      />
      <path
        d="M913.9 1064.9c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st2"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAAACXBIWXMAAAycAAAMnAGTj5aaAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA8VJREFUeNrsmItT2kAQxnPJgYAP 8NWXdvr//122dmxVUARMQpLeOd92Pren5JC+ZszMN3kAyy+7e7ubJMnr9rr9W5v5A3b9cQP9dUhD +1WQUdBmQ3AMlgauCVStzlvBmg14TqD8PlN7hvSAldq3gjUb8J4FVAfy510CTQisJC1xLQT8aLMv AEwJyKtP6uGa2F8C7F4pdyoImNNhbUgG9BBbTgOnbaeh0y60A9AOvl8AaOZ0B01xPgOwwP4Cal8A 2AOMhzt0OnI6cBo57cGjXfy2AIiHu3WaOI2hCa7NcCOlBrVrhngLHtt3euP03ukdjvcDkBJqD3Lj dO30HerDZkpgEv7WnuRFkuGPtwHjwU6dPjp9IMht/HkGGxW8tECYx/jeLm7YUj3lhfSwjwl3ihwb IMTHTidOnwjySHmRV/cS3hxR/vYpbyt8J8fxz7pqI8LMXjyA107gyVOcj/B5l7yTkIf65GVZWCnB yeIq8X3/WW0jvGhheA+QbykXjxG+HQpfGih3lmopl6cFrfxrnBeSl7ZlLkqo+wR5DB3Bg1J2BDBV vTqhvDYU4hx56uGukE7cDFp5MqWyM6BVfQjYPVzfou5jnmmhDC72RtCuagTemyZtmZMZdRWpjZL8 fOfZilbLsBnV2wHlKqeLSQJ585Rh6c09GBPxXWeRjSEju13qYB2VEk960qj5kPt0j8KrPWhaAuoo ZQE7pq0njcrLjFamJcPrbE1gUQUnszTCUPPM8Jq8AJRt1srmw3G64sd6YC2x4go1YsXANoFpnefM ioBbe5IBcyq8c7S5kkasGFBplTLGybhWqhtv0giDBQ0ItzQPLpQHmhbhrWkQXuCGebZ8NATblpDi ybmaBydUgGUBdZ6JEIe3gL072Jngxrklrpwn2SPak2PMgkMaKPjRVT+I6RDngLuhdngN0LmCbLKW HUdPQ1IzO7o7UMLXlM9L8t49ec/f6Bfos9MFYOecm7FdgmFTVddqevqraEGVFAVJFw/yzenc6QyA /vgS3s35ecdGrMaK8mhCv63hnSkmoiG1TJ64eSSbIMRf4cVznN8qwCZm4ejp2qhcvaM/lrmSp+6a IKf47iXCfYHjsQ5z7NMig5bKu7nKsVHgkbahciMLZkxVYorr96GaayNbWB2odwXl2hUAB4EHLInC gp69Z1Rri5AX133NYgIDh4xZPez1ANyotpoH3mAsdTvcxLugEHBG4KE6WQUUGiw2+upPwxp1zO8n EwVTt339t6mXqOaJYXnVdNXEGP+dr6KTdd/w/lfbDwEGADwKtLJYhw5GAAAAAElFTkSuQmCC"
        width={40}
        height={40}
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        transform="matrix(.875 0 0 .875 949.199 1079.837)"
      />
      <circle
        cx={967.1}
        cy={1097.6}
        r={10.9}
        className="st2"
      />
      <circle
        cx={967.1}
        cy={1097.4}
        r={8}
        className="st19"
      />
      <text
        className="st11 st9 st20"
        transform="translate(952.48 1137.327)">
        {"P-303"}
      </text>
      <path
        d="M987.9 1004.6h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
        className="st17"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAAACXBIWXMAAAycAAAMnAGTj5aaAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA8JJREFUeNrsWGlT2zAUlGI5TmLK 1QI9p///dxV6UBooBIgdH1U6+5jljUzkBGg/4JkdJ44jr9+5T8a8HC/H/3XYZ1h3+bkF/jlJS+dV JHuRfiySAyJn8Z3Xb1fgSUkyqSRwZss1QE2fmxiydkPrManUY4hziutCtAYWQEWoV5F1GxJMidyY MMI1Wb8CublC4VEqskYTdRsQHAITjy2PbcIEZFP8RwjeeFx5zIBroACqEFG3AcGltXKPXY/XhF0Q HeM+A2vdgtBv4By48LhE6BV4oXtE3RoEl//JYL19j0OPdx5v8Xmvg+ScSC7J/QRGsLhUiIas2Iuk ZHGCB+cgsyT2EXjvcQRLvsLDOSZLcvc53ZfRfS3ubRGjf2us61lmUsTbjseBxwePzx6fQPKNsqLU ywYPL0B0B56YYE2r7qk5210PV4ubc7j5CCTFkkd4eE6ZzcW8VhUgIzfXKiRKynbrehbrDJYSkhKL B3B/DjcnFGNC0gFStuQlaiTVFRJoCmuX8vxYd4urx4ijfRA7hIt3QZCtYwL9W17WEsECBKdAju9z saaLsKKlsiMk90B0j+riUGWpUW3RUuikuDbBejuUSGPqWNYE3riLqFMkt7HwqwiCWhlZinGut7la 6y5kBmu4Owe5nLLYBSRajM5MqK0OKVYTvjeWZKLefExF2Cmp1qfuclI6EiX8e6clbQC8mFNv3Jdg SCR3rrHKkm2HaG02HQnU2rWSbPfuGUQu1pAeLIFFQGL1PRqlNasA4c6Oo99GFpG2do3zHNdr6rU2 4qXZeiVJtUJ1G9PXkiK3ZugMlyB7SwvXkSFQU58WCTcjbVnxeOEiSYolpX1dkBZkxWMDg5m2YEOq SNYTjXmJaywy7g1Lqwqwpd6bURkaBTLdBBKuUWEzI1351eOLxzePU/x25/ZkjalQCwXdaRoVdw3N OKJ0ZvDCkuCJxzHwnQSGxLpJIsk9NMJypjaUoUysIBkmovcUFjwmK57B7XPOcBdZywwlzw2skJKS mZPU2kacDqkbNXSfWPEXiJ2A7Bn+X+jsdj2Lb4UHWcrSkmaXqRofUiKpE+8M7v6Bz+fKzW2fGUdb c6FKSaFiTEaDsRoNFsriUzUtXuP3SneePjsYHI+WsnxEs/cWEcyoLLWqLs5o/r6hjYJFqNb23WbR YsCROsqIdEZliWOyoiTiDrNQe0Qb7wWF6mdCcGrGsYFayT26VqLl0TasuuTWQJ15vtG7a0zcPNWu WohsyNIPyT7zHPuTXWNBTKWI1qKJed5jLZH8R4ABADdIpAiTHIl0AAAAAElFTkSuQmCC"
        width={40}
        height={40}
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        transform="matrix(.875 0 0 .875 949.199 1001.358)"
      />
      <circle
        cx={967.1}
        cy={1019.1}
        r={10.9}
        className="st2"
      />
      <circle
        cx={967.1}
        cy={1018.9}
        r={8}
        className="st19"
      />
      <text
        className="st11 st9 st20"
        transform="translate(952.48 1058.847)">
        {"P-302"}
      </text>
      <path
        d="M945.9 1112.8h-14.3c-2.8 0-5-2.3-5-5v-68.4c0-3.5 2.8-6.3 6.3-6.3h13M997.8 1009h14.3c2.8 0 5 2.3 5 5v68.4c0 3.5-2.8 6.3-6.3 6.3h-13"
        className="st25"
      />
      <path
        d="M515 1470.8h679.9"
        className="st1"
      />
      <image
        xlinkHref="data:image/png;base64,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"
        width={177}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        transform="translate(203.242 1306.396) scale(.9944)"
      />
      {/* Presión de Osmosis */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(5, "Presión de Osmosis", false)}>
        <path
          d="M271.7 1315.4h-53.1c-3.5 0-6.3 2.8-6.3 6.3V1424c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
          className="st2"
        />
        <path
          d="M212.4 1322.8h157.1v99.8H212.4z"
          className={getTarjetaClass(5, selected)}
        />
        <text
          className="st26 st9 st10"
          transform="translate(269.375 1367.462)">
          {"Presi\xF3n"}
        </text>
        <text
          className="st26 st9 st10"
          transform="translate(256.175 1384.263)">
          {"de Osmosis"}
        </text>
        {/* Alarma Presión de Osmosis */}
        <g
          className={getTemaAlarma(5, loading, datosAlarmas)}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(5, "Presión de Osmosis");
          }}>
          <path
            d="M234.7 1399.1c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st5"
          />
          <path
            d="M233 1398.1c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM244.3 1396.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st5"
          />
          <path
            d="M244.9 1394.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM245.7 1404.1v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM240.7 1411.5c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st5"
          />
        </g>
        <text
          className="st11 st9 st33"
          transform="translate(271.994 1410.24)">
          {presionOsmosis}
        </text>
        <text
          className="st11 st9 st34"
          transform="translate(332.761 1409.84)">
          {"bar"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(278.268 1342.464)">
          {"PT319"}
        </text>
      </g>
      <image
        xlinkHref="data:image/png;base64,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"
        width={177}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        transform="translate(372.242 1306.396) scale(.9944)"
      />
      {/* Recuperación RO */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(2, "Recuperación RO", false)}>
        <path
          d="M441.1 1315.4H388c-3.5 0-6.3 2.8-6.3 6.3V1424c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
          className="st2"
        />
        <path
          d="M381.8 1322.8h157.1v99.8H381.8z"
          className={getTarjetaClass(2, selected)}
        />
        <text
          className="st26 st9 st10"
          transform="translate(419.322 1361.462)">
          {"Recuperaci\xF3n"}
        </text>
        <text
          className="st26 st9 st10"
          transform="translate(452.022 1378.262)">
          {"RO"}
        </text>
        {/* Alarma Recuperación RO */}
        <g
          className={getTemaAlarma(2, loading, datosAlarmas)}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(2, "Recuperación RO");
          }}>
          <path
            d="M404.1 1399.1c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st5"
          />
          <path
            d="M402.4 1398.1c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM413.7 1396.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st5"
          />
          <path
            d="M414.3 1394.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM415.1 1404.1v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM410.1 1411.5c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st5"
          />
        </g>
        <text
          className="st11 st9 st33"
          transform="translate(441.4 1410.24)">
          {recuperacionRO}
        </text>
        <text
          className="st11 st9 st34"
          transform="translate(506.167 1409.84)">
          {"%"}
        </text>
      </g>
      <circle
        cx={291.3}
        cy={1470.9}
        r={9.2}
        className="st37"
      />
      <path
        d="M505.2 1481.3h-142c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h142c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.8 3.8-6 3.8z"
        className="st17"
      />
      <path
        d="M506.5 1481.3h-143c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l143.2 19.8c.6.3.5.9-.2.9z"
        className="st26"
      />
      <path
        d="M505.2 1506.4h-142c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h142c3.3 0 6 1.7 6 3.8v13.1c0 2.2-2.8 3.8-6 3.8z"
        className="st17"
      />
      <path
        d="M506.5 1506.4h-143c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l143.2 19.8c.6.3.5.9-.2.9z"
        className="st26"
      />
      <path
        d="M505.2 1531.5h-142c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h142c3.3 0 6 1.7 6 3.8v13.2c0 2.1-2.8 3.7-6 3.7z"
        className="st17"
      />
      <path
        d="M506.5 1531.5h-143c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l143.1 20c.7.1.6.7-.1.7z"
        className="st26"
      />
      <path
        d="M505.2 1556.6h-142c-3.3 0-6-1.7-6-3.8v-13c0-2 2.7-3.8 6-3.8h142c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.8 3.7-6 3.7z"
        className="st17"
      />
      <path
        d="M506.5 1556.6h-143c-3.4 0-6.3-1.7-6.3-3.8v-13c0-2 2.8-3.8 6.3-3.8l143.2 19.8c.6.3.5.8-.2.8z"
        className="st26"
      />
      <path
        d="M353.4 1547.3h-16.3c-2.8 0-5-2.2-5-5v-71.5M332.7 1495.8h20.4M514.7 1547.9h16.4c2.8 0 5-2.2 5-5v-70.7M535.4 1495.8H515M332.7 1521.8h20.4M535.4 1521.8H515M506.5 1717.4v52.1"
        className="st1"
      />
      <path
        d="M611.1 1644.3h-132c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.8 3.8-6 3.8z"
        className="st17"
      />
      <path
        d="M612.4 1644.3h-133c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.9-.2.9z"
        className="st26"
      />
      <path
        d="M611.1 1669.4h-132c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.2-2.8 3.8-6 3.8z"
        className="st17"
      />
      <path
        d="M612.4 1669.4h-133c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.9-.2.9z"
        className="st26"
      />
      <path
        d="M611.1 1694.5h-132c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.2c0 2.1-2.8 3.7-6 3.7z"
        className="st17"
      />
      <path
        d="M612.4 1694.5h-133c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.1 20c.7.1.6.7-.1.7z"
        className="st26"
      />
      <path
        d="M611.1 1719.6h-132c-3.3 0-6-1.7-6-3.8v-13c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.8 3.7-6 3.7z"
        className="st17"
      />
      <path
        d="M612.4 1719.6h-133c-3.4 0-6.3-1.7-6.3-3.8v-13c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.8-.2.8z"
        className="st26"
      />
      <path
        d="M469.3 1710.3H453c-2.8 0-5-2.2-5-5v-72.5M448.6 1658.8H469M620.6 1710.9H637c2.8 0 5-2.2 5-5v-67.7c0-2.5-2-4.4-4.4-4.4h-17M641.3 1658.8h-20.4M448.6 1684.8H469M641.3 1684.8h-20.4M642 1636.3v-165.4"
        className="st1"
      />
      <path
        d="M683.4 1761.5h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM668.2 1765.4l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st27"
      />
      <path
        d="m683.8 1776-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st27"
      />
      <path
        d="M676 1760.5v10"
        className="st28"
      />
      <path
        d="M667 1752.5h18M676 1753.5v8"
        className="st29"
      />
      <path
        d="M683.4 1816.7h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM668.2 1820.6l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        className="st27"
      />
      <path
        d="m683.8 1831.2-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        className="st27"
      />
      <path
        d="M676 1815.7v10"
        className="st28"
      />
      <path
        d="M667 1807.7h18M676 1808.7v8"
        className="st29"
      />
      <path
        d="M723.8 1886.6h124.8v97.7H723.8z"
        className="st26"
      />
      <path
        d="M848.5 1870.3v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1v-111.2"
        className="st23"
      />
      <text
        className="st11 st9 st20"
        transform="translate(766.381 2007.45)">
        {"TK-006"}
      </text>
      <path
        d="M642.3 1771.9v47.2c0 3.8 3.1 6.8 6.8 6.8h13.7M687.9 1770.7h14.3c3.5 0 6.3 2.8 6.3 6.3v48.9h-20.6"
        className="st1"
      />
      <path
        d="M703.3 1825.7h54c5.3 0 9.6 4.3 9.6 9.6v29"
        className="st1"
      />
      <path
        d="M760.1 1865.2c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
        className="st18"
      />
      <path
        d="M771.8 1865.2c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
        className="st2"
      />
      <path
        d="M1108.2 1886.6H1233v97.7h-124.8z"
        className="st26"
      />
      <path
        d="M1232.8 1870.3v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1v-111.2"
        className="st23"
      />
      <text
        className="st11 st9 st20"
        transform="translate(1150.745 2007.45)">
        {"TK-005"}
      </text>
      <circle
        cx={293.1}
        cy={1544.6}
        r={9.2}
        className="st39"
      />
      <path
        d="M512.4 1770.7h150.9"
        className="st1"
      />
      <path
        d="M399.7 1658.7v102c0 5.5 4.5 10 10 10h89.7"
        className="st0"
      />
      <circle
        cx={401.4}
        cy={1707.4}
        r={9.2}
        className="st39"
      />
      <image
        xlinkHref="data:image/png;base64,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"
        width={178}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        transform="translate(621.242 1306.393) scale(.9944)"
      />
      {/* Caudal de Permeado */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(8, "Caudal de Permeado", false)}>
        <path
          d="M690.5 1315.6h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3H782c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
          className="st2"
        />
        <path
          d="M631.2 1323h157.1v99.8H631.2z"
          className={getTarjetaClass(8, selected)}
        />
        <text
          className="st26 st9 st10"
          transform="translate(689.8 1367.639)">
          {"Caudal"}
        </text>
        <text
          className="st26 st9 st10"
          transform="translate(670 1384.44)">
          {"de Permeado"}
        </text>
        {/* Alarma Caudal de Permeado */}
        <g
          className={getTemaAlarma(8, loading, datosAlarmas)}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(8, "Caudal de Permeado");
          }}>
          <path
            d="M653.6 1399.3c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st5"
          />
          <path
            d="M651.9 1398.3c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM663.2 1397c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st5"
          />
          <path
            d="M663.8 1395.1c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM664.6 1404.3v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM659.6 1411.7c.9 0 1.7-.8 1.7-1.7H658c.1.9.7 1.6 1.6 1.7z"
            className="st5"
          />
        </g>
        <text
          className="st11 st9 st33"
          transform="translate(690.867 1410.416)">
          {caudalPermeado}
        </text>
        <text
          className="st11 st9 st34"
          transform="translate(758.634 1410.016)">
          {"l/s"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(689.14 1342.64)">
          {"FE-PERM"}
        </text>
      </g>
      <circle
        cx={710.2}
        cy={1471}
        r={9.2}
        className="st37"
      />
      <image
        xlinkHref="data:image/png;base64,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 AACAX5x/BRgA8HcWiVlRnTkAAAAASUVORK5CYII="
        width={177}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        transform="translate(791.242 1306.396) scale(.9944)"
      />
      {/* Conductividad de Permeado */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(10, "Conductividad de Permeado", false)}>
        <path
          d="M859.8 1315.6h-53.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
          className="st2"
        />
        <path
          d="M800.5 1323h157.1v99.8H800.5z"
          className={getTarjetaClass(10, selected)}
        />
        <text
          className="st26 st9 st10"
          transform="translate(836.938 1367.639)">
          {"Conductividad"}
        </text>
        <text
          className="st26 st9 st10"
          transform="translate(839.239 1384.44)">
          {"de Permeado"}
        </text>
        {/* Alarma Conductividad de Permeado */}
        <g
          className={getTemaAlarma(10, loading, datosAlarmas)}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(10, "Conductividad de Permeado");
          }}>
          <path
            d="M822.9 1399.3c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st5"
          />
          <path
            d="M821.2 1398.3c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM832.5 1397c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st5"
          />
          <path
            d="M833.1 1395.1c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM833.9 1404.3v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM828.9 1411.7c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st5"
          />
        </g>
        <text
          className="st11 st9 st33"
          transform="translate(860.184 1410.416)">
          {conductividadPermeado}
        </text>
        <text
          className="st11 st9 st34"
          transform="translate(917.952 1410.016)">
          {"dS/m"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(864.458 1342.64)">
          {"AE303"}
        </text>
      </g>
      <circle
        cx={879.5}
        cy={1471}
        r={9.2}
        className="st37"
      />
      <circle
        cx={558.3}
        cy={627.1}
        r={9.2}
        className="st37"
      />
      <circle
        cx={738.6}
        cy={627.1}
        r={9.2}
        className="st37"
      />
      <circle
        cx={918.3}
        cy={627.1}
        r={9.2}
        className="st37"
      />
      <circle
        cx={1095}
        cy={627.1}
        r={9.2}
        className="st37"
      />
      <circle
        cx={607}
        cy={1069}
        r={9.2}
        className="st37"
      />
      <path
        d="m1195.4 1248.4 3 618.2M1198.4 824.3v395.5"
        className="st1"
      />
      <path
        d="M1192.1 1864.2c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
        className="st18"
      />
      <path
        d="M1203.8 1864.2c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
        className="st2"
      />
      <path
        d="M1184.2 1148c0-2.2 1.8-4.2 4.2-4.2h19.8c2.2 0 4.2 1.8 4.2 4.2 0 1.1-.4 2.2-1.1 2.9l-9.9 9.9c-1.5 1.5-4 1.5-5.7.2l-.2-.2-9.9-9.9c-1.2-.9-1.4-1.8-1.4-2.9z"
        style={{
          fill: "#00aeed",
          stroke: "#fff",
          strokeWidth: 4,
          strokeMiterlimit: 10
        }}
      />
      <path
        d="M1207.6 1241.4v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6h-14.8c-.9 0-1.6-.7-1.6-1.6zM1203.7 1226.2l-4.6 7.9c-.3.5-1 .5-1.3 0l-4.6-7.9c-.3-.5.1-1.2.7-1.2h9.2c.5 0 .9.7.6 1.2z"
        className="st27"
      />
      <path
        d="m1193.1 1241.8 4.6-7.9c.3-.5 1-.5 1.3 0l4.6 7.9c.3.5-.1 1.2-.7 1.2h-9.2c-.5 0-.9-.7-.6-1.2z"
        className="st27"
      />
      <path
        d="M1208.6 1234h-10"
        className="st28"
      />
      <path
        d="M1216.6 1225v18M1215.6 1234h-8"
        className="st29"
      />
      <text
        className="st30 st9 st31"
        transform="translate(331.983 623.756)">
        {"HIPOCLORITO"}
      </text>
      <text
        className="st30 st9 st31"
        transform="translate(113.802 1225.967)">
        {"METABISULFITO"}
      </text>
      <text
        className="st30 st9 st31"
        transform="translate(228.332 1225.967)">
        {"ANTIINCRUSTANTE"}
      </text>
      <path
        d="M362.1 1069.3v-43c0-4.5 3.6-8.1 8.1-8.1h62.2c4.5 0 8.1 3.6 8.1 8.1v43"
        className="st1"
      />
      <image
        xlinkHref="data:image/png;base64,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 ANo5UUruV2v5AAAAAElFTkSuQmCC"
        width={177}
        height={142}
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        transform="matrix(.993 0 0 .993 313.18 857.882)"
      />
      {/* Diferencial Filtros High Flow */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(17, "Diferencial Filtros High Flow", false)}>
        <path
          d="M382.1 867.7H329c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h61.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h62.7c3.5 0 6.3-2.8 6.3-6.3V874c0-3.5-2.8-6.3-6.3-6.3h-91.5z"
          className="st2"
        />
        <path
          d="M322.8 875.1h157.1v99.8H322.8z"
          className={getTarjetaClass(17, selected)}
        />
        <text
          className="st26 st9 st10"
          transform="translate(370.514 919.771)">
          {"Diferencial"}
        </text>
        <text
          className="st26 st9 st10"
          transform="translate(351.414 936.571)">
          {"Filtros High Flow"}
        </text>
        {/* Alarma Diferencial Filtros High Flow */}
        <g
          className={getTemaAlarma(17, loading, datosAlarmas)}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(17, "Diferencial Filtros High Flow");
          }}>
          <path
            d="M345.2 951.4c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st5"
          />
          <path
            d="M343.5 950.4c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM354.8 949.1c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st5"
          />
          <path
            d="M355.4 947.2c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM356.2 956.4v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM351.2 963.8c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st5"
          />
        </g>
        <text
          className="st11 st9 st33"
          transform="translate(382.467 962.548)">
          {diferencialFiltrosHighFlow}
        </text>
        <text
          className="st11 st9 st34"
          transform="translate(443.234 962.149)">
          {"bar"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(365.74 894.773)">
          {"PT312- PT316"}
        </text>
      </g>
      <circle
        cx={401.8}
        cy={1017.2}
        r={9.2}
        className="st37"
      />
      <image
        xlinkHref="data:image/png;base64,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 YII="
        width={181}
        height={123}
        style={{
          overflow: "visible",
          opacity: 0.2,
          enableBackground: "new"
        }}
        transform="translate(100.966 1484.51) scale(.9919)"
      />
      {/* Diferencial Primera Etapa */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(3, "Diferencial Primera Etapa", false)}>
        <path
          d="M216.3 1493.8h42.1c3.5 0 6.3 2.8 6.3 6.3v33.2c0 .8.3 1.6.8 2.2l5.3 6.5c1.1 1.4 1 3.3-.1 4.6l-5.1 5.5c-.6.7-.9 1.5-.9 2.4v36.9c0 3.5-2.8 6.3-6.3 6.3H115.9c-3.5 0-6.3-2.8-6.3-6.3v-91.3c0-3.5 2.8-6.3 6.2-6.3h100.5z"
          className="st2"
        />
        <path
          d="M115.6 1493.8h143.8v103.9H115.6z"
          className={getTarjetaClass(3, selected)}
        />
        <text
          className="st26 st9 st10"
          transform="translate(153.625 1541.562)">
          {"Diferencial"}
        </text>
        <text
          className="st26 st9 st10"
          transform="translate(141.925 1558.362)">
          {"Primera Etapa"}
        </text>
        {/* Alarma Diferencial Primera Etapa */}
        <g
          className={getTemaAlarma(3, loading, datosAlarmas)}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(3, "Diferencial Primera Etapa");
          }}>
          <path
            d="M129.7 1572.2c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st5"
          />
          <path
            d="M128 1571.2c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM139.3 1569.9c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st5"
          />
          <path
            d="M139.9 1568c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM140.7 1577.2v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM135.7 1584.6c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st5"
          />
        </g>
        <text
          className="st11 st9 st33"
          transform="translate(167.504 1583.34)">
          {diferencialPrimeraEtapa}
        </text>
        <text
          className="st11 st9 st34"
          transform="translate(223.709 1582.94)">
          {"bar"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(148.016 1517.564)">
          {"PT319 - PT322"}
        </text>
      </g>
      <image
        xlinkHref="data:image/png;base64,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 gAEApSBZt2o4Lm0AAAAASUVORK5CYII="
        width={181}
        height={123}
        style={{
          overflow: "visible",
          opacity: 0.2,
          enableBackground: "new"
        }}
        transform="translate(208.552 1658.67) scale(.9919)"
      />
      {/* Diferencial Segunda Etapa */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(4, "Diferencial Segunda Etapa", false)}>
        <path
          d="M324.5 1667.6h42.1c3.5 0 6.3 2.8 6.3 6.3v33.2c0 .8.3 1.6.8 2.2l5.3 6.5c1.1 1.4 1 3.3-.1 4.6l-5.1 5.5c-.6.7-.9 1.5-.9 2.4v36.9c0 3.5-2.8 6.3-6.3 6.3H224.1c-3.5 0-6.3-2.8-6.3-6.3v-91.3c0-3.5 2.8-6.3 6.2-6.3h100.5z"
          className="st2"
        />
        <path
          d="M223.8 1667.6h143.8v103.9H223.8z"
          className={getTarjetaClass(4, selected)}
        />
        <text
          className="st26 st9 st10"
          transform="translate(261.82 1715.294)">
          {"Diferencial"}
        </text>
        <text
          className="st26 st9 st10"
          transform="translate(246.62 1732.094)">
          {"Segunda Etapa"}
        </text>
        {/* Alarma Diferencial Segunda Etapa */}
        <g
          className={getTemaAlarma(4, loading, datosAlarmas)}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(4, "Diferencial Segunda Etapa");
          }}>
          <path
            d="M237.9 1746c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st5"
          />
          <path
            d="M236.2 1745c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM247.5 1743.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st5"
          />
          <path
            d="M248.1 1741.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM248.9 1751v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM243.9 1758.4c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st5"
          />
        </g>
        <text
          className="st11 st9 st33"
          transform="translate(275.698 1757.072)">
          {diferencialSegundaEtapa}
        </text>
        <text
          className="st11 st9 st34"
          transform="translate(331.903 1756.671)">
          {"bar"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(256.21 1691.296)">
          {"PT322 - PT324"}
        </text>
      </g>
      <circle
        cx={507.5}
        cy={1769.4}
        r={9.2}
        className="st37"
      />
      <path
        d="M407.3 1556v66.8c0 6.1 4.9 11.1 11.1 11.1l50.7.1"
        className="st1"
      />
      <circle
        cx={403.2}
        cy={1600.6}
        r={9.2}
        className="st37"
      />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALEAAACMCAYAAAAzzUi2AAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABvlJREFUeNrsmwtT21YQRvUyfgEJ 6eP//8C2KQkY/JIqzexOv2yubdlAQqRzZnaMhSOm0tH62ys1ywAAAABeRM4heJNjmie2NfK+Ce8B id+VvKlScVMFSPwujmH3WkiV9hol3rdVh8qQ+XIqDsGrdV8Xt5JSkV3YndRepEZkJP6pAru8V1LT tib2Oxe0E3fT1tpeu9radkT+SRLnI44nUeBO2llb87YW9jqTY1ybtM9trdp6svJO7V15TBI3J96/ icT5iQl8zAJ30i7burG6NpknImkn8GNbD219tX/rEm8ldjQjl7g5R+rqzJN2agIf0xBXWrnAnbS3 bX1s64PVtf0+t8iwMnnvQ9yoTPDtCDNyEwbfOrFq07xU4vzI5F1IJxmLzDrETSwyLE3gu7Y+Wd2Z xLMg8b11aJfYs/STZeXdgRM5VIGbsFITV29OduWq5wkrZNr2yXsi3cg/M/R4oRe0yze3+NB13t+k 7mz71D6/NYmvJS9fSSd/tG7sKxdDlTh2WJV3J4Nu79WbqmfHcWmncuC1k1Ty+aFn5JiFFyard2GX +KN16NiJF7ZtGrL0o3Xj7YAlTt21VHk3snrjKzg69CZFrnoK7JP3QmouUk9CtBgy/t85CRJ/kBjh XXhpx8dPRBTYj+mtSLyR7jPUOKExYm8Cr2XFZiW1Dl37O5GrE1+ZpZ2EmQwut2H6dpFL6cRD7sK5 SHwVhjof6G6kC+vqxFUoz9MPJvF6hBJ7B/aVmy+ycnPoln2vTpwaXD6EoeVWBperI9l4qHGilGi1 sGN0LRe3HxddJ67CTOHNQbuwr1A0A5e4DhI/mrx+8ZeJzyYHverIUloRDnSX8X5v6w979a/MeZB4 6KsUukY8EZFnMrBNRWD/fCPylxJHltaF1mGJbciDXezEa5P43o6hexmHveQ3VNXjJKnE3cDyp9Un 68bzcMKGHicODb0+G0xk4NVvpiaxujGx47cVgffZ8J9wa4KkHiX85lAm25/DRa5N4ajEuoSkefhO unGUuBhBJk6JrDKXYdkxz76/yxnXmeNS0hhudGgn3pmgcxF4a/HK7256g9iEJbeDcSJm4mliePlo dSN/vBhBJz4WvYrEz/rZRn4fb1vX2bieMW5kTtibxJUI7DeFluGbPt5Ya/qsTmg39uEl1lS6UDYi iVMy54lunR34WXPymB6Qj2vFO3FnZx14KQOe3p5PLuH2WSeeZN8+XjgLw8skXCVjJO+5LXblfATR 4Ri1RFBdO5+Kc6n54qDEeaITl4nhRXesD3/nGf+nyKXSj/niz7Nvlx1TnpXBsW+OV3FkaNF8HB/6 yRP5BIHhNeJYkaUfLjsYz4oz/0A+8s4BP+4bqneDLF5wxSAyvFU3Psuz4oIrhCwH72lQ7hUnAN6j 1BfFCYB3CRIDEgMgMQASAxIDIDEAEgMgMSAxABIDIDEAEgMSAyAxABIDIDEgMQASAyAxABIDEgMg MQASAyAxIDEAEgMgMQASAxIDIDEAEgMgMSAxABIDIDEAEgMSAyAxABIDIDEgMQASAyAxABIDEgMg MQASAyAxIDEAEgMgMQASAxIDIDEAEgMgMSAxABIDIDEAEgMSAyAxABIDIDEgMQASAyAxABIDEgMg MQASAyAxIDEAEgMgMQASAxIDIDEAEgMgMSAxABIDIDEAEgMSAyAxABIDIDEgMcAvKXETXgF++U7c BKGRG34EzTHXip47iDtqEBjeUNLmHMeKnjuvrZpz/wDABTKf5Vl1ouuqxHupOlTOkAivIG30qkk0 z6MSNyZjFHdntQ3l20vOBbxAYm2Qu0TFFPBd/Kh67LwTdtPWuq3ntp6s5m1NTPzKPu/knB/oOWfV 5tg61CY0zPpQN66OtHi/MjYm7aqtx7YerK5M1r3JXIq8SAx9Jd6bY+6X18qa5to83IvIJzNx7MLP tsOvbf3b1rKtqQi8NqFdYgSGc/LwTiTu/Prc1r359hBETubjQ3Gilp0/287uLUJ4B95Zh16IxAWd GM4c6FTizrG/rT6byCuJFvtz4kQtWcUlnkoGdoFvRGyXmG4Ml0rcSftPW3+ZxF9s+/rcOKFZxSUu JS54hHiwaDETiUsEhgsk3lpT9G/8zxIrHs1B7cTNqU4cJdbOWofWv5AOrXGCSAF9hjr1bG1ePVhH 9noy53bZgfXiqsfk6CI3QeKZCXxl+2Gwg0u6scdWF9mXcFf2upYu7DH3ZCbWXJzJFVDLcsiTyFuF PEwnhj6dOHZjjxWb7P/7Et6BkzGir2h+O9nLc6/KmxIYieEcib1J7kRaf9WB7iKJM4kIRUJqXY1A WnhpPq6z9PMTRx8E6iteHoSO4iIwvNZqRXzf9JUzO1PmjPgAbxQvUj+/qsRvvR9AZIDx8Z8AAwBd 1n1GsaXgBwAAAABJRU5ErkJggg=="
        width={177}
        height={140}
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        transform="translate(418.242 1785.396) scale(.9944)"
      />
      {/* Presión de Rechazo */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(6, "Presión de Rechazo", false)}>
        <path
          d="M525.5 1915.6h53.1c3.5 0 6.3-2.8 6.3-6.3V1807c0-3.5-2.8-6.3-6.3-6.3h-61.7c-1.2 0-2.4-.4-3.4-1.2l-.4-.3c-6.5-6.5-6.5-6.5-12.9.2-1 .9-2.2 1.3-3.5 1.3H434c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h91.5z"
          className="st2"
        />
        <path
          d="M427.8 1807.8h157.1v99.8H427.8z"
          className={getTarjetaClass(6, selected)}
        />
        <text
          className="st26 st9 st10"
          transform="translate(484.784 1852.452)">
          {"Presi\xF3n"}
        </text>
        <text
          className="st26 st9 st10"
          transform="translate(471.184 1869.252)">
          {"de Rechazo"}
        </text>
        {/* Alarma Presión de Rechazo */}
        <g
          className={getTemaAlarma(6, loading, datosAlarmas)}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(6, "Presión de Rechazo");
          }}>
          <path
            d="M450.1 1884.1c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st5"
          />
          <path
            d="M448.4 1883.1c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM459.7 1881.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st5"
          />
          <path
            d="M460.3 1879.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM461.1 1889.1v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM456.1 1896.5c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st5"
          />
        </g>
        <text
          className="st11 st9 st33"
          transform="translate(487.403 1895.23)">
          {presionRechazo}
        </text>
        <text
          className="st11 st9 st34"
          transform="translate(548.17 1894.83)">
          {"bar"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(493.676 1827.454)">
          {"PT324"}
        </text>
      </g>
      <image
        xlinkHref="data:image/png;base64,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 AElFTkSuQmCC"
        width={181}
        height={123}
        style={{
          overflow: "visible",
          opacity: 0.2,
          enableBackground: "new"
        }}
        transform="translate(1008.974 1489.496) scale(.9919)"
      />
      {/* ph de Mezcla */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(18, "ph de Mezcla", false)}>
        <path
          d="M1124.5 1498.4h42.1c3.5 0 6.3 2.8 6.3 6.3v33.2c0 .8.3 1.6.8 2.2l5.3 6.5c1.1 1.4 1 3.3-.1 4.6l-5.1 5.5c-.6.7-.9 1.5-.9 2.4v36.9c0 3.5-2.8 6.3-6.3 6.3h-142.5c-3.5 0-6.3-2.8-6.3-6.3v-91.3c0-3.5 2.8-6.3 6.2-6.3h100.5z"
          className="st2"
        />
        <path
          d="M1023.8 1498.4h143.8v103.9h-143.8z"
          className={getTarjetaClass(18, selected)}
        />
        <text
          className="st26 st9 st10"
          transform="translate(1085.046 1546.083)">
          {"pH"}
        </text>
        <text
          className="st26 st9 st10"
          transform="translate(1062.046 1562.883)">
          {"de Mezcla"}
        </text>
        {/* Alarma ph de Mezcla */}
        <g
          className={getTemaAlarma(18, loading, datosAlarmas)}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(18, "ph de Mezcla");
          }}>
          <path
            d="M1037.9 1576.8c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st5"
          />
          <path
            d="M1036.2 1575.8c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM1047.5 1574.5c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st5"
          />
          <path
            d="M1048.1 1572.6c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM1048.9 1581.8v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1043.9 1589.2c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st5"
          />
        </g>
        <text
          className="st11 st9 st33"
          transform="translate(1073.975 1587.86)">
          {phMezcla}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(1079.79 1522.085)">
          {"AE305"}
        </text>
        <text
          className="st11 st9 st34"
          transform="translate(1140.613 1587.86)">
          {"pH"}
        </text>
      </g>
      <circle
        cx={1198.5}
        cy={1549.2}
        r={9.2}
        className="st37"
      />
      <image
        xlinkHref="data:image/png;base64,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"
        width={181}
        height={123}
        style={{
          overflow: "visible",
          opacity: 0.2,
          enableBackground: "new"
        }}
        transform="translate(1008.974 1605.496) scale(.9919)"
      />
      {/* Conductividad de Mezcla */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(19, "Conductividad de Mezcla", false)}>
        <path
          d="M1124.5 1614.3h42.1c3.5 0 6.3 2.8 6.3 6.3v33.2c0 .8.3 1.6.8 2.2l5.3 6.5c1.1 1.4 1 3.3-.1 4.6l-5.1 5.5c-.6.7-.9 1.5-.9 2.4v36.9c0 3.5-2.8 6.3-6.3 6.3h-142.5c-3.5 0-6.3-2.8-6.3-6.3v-91.3c0-3.5 2.8-6.3 6.2-6.3h100.5z"
          className="st2"
        />
        <path
          d="M1023.8 1614.3h143.8v103.9h-143.8z"
          className={getTarjetaClass(19, selected)}
        />
        <text
          className="st26 st9 st10"
          transform="translate(1051.343 1662.04)">
          {"Conductividad"}
        </text>
        <text
          className="st26 st9 st10"
          transform="translate(1063.843 1678.84)">
          {"de Mezcla"}
        </text>
        {/* Alarma Conductividad de Mezcla */}
        <g
          className={getTemaAlarma(19, loading, datosAlarmas)}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(19, "Conductividad de Mezcla");
          }}>
          <path
            d="M1037.9 1692.7c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st5"
          />
          <path
            d="M1036.2 1691.7c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM1047.5 1690.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st5"
          />
          <path
            d="M1048.1 1688.5c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM1048.9 1697.7v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1043.9 1705.1c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st5"
          />
        </g>
        <text
          className="st11 st9 st33"
          transform="translate(1075.685 1703.817)">
          {conductividadMezcla}
        </text>
        <text
          className="st11 st9 st34"
          transform="translate(1126.89 1703.417)">
          {"dS/m"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(1079.368 1638.041)">
          {"AE304"}
        </text>
      </g>
      <circle
        cx={1198.5}
        cy={1665.2}
        r={9.2}
        className="st37"
      />
      <image
        xlinkHref="data:image/png;base64,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 RU5ErkJggg=="
        width={181}
        height={123}
        style={{
          overflow: "visible",
          opacity: 0.2,
          enableBackground: "new"
        }}
        transform="translate(1008.974 1720.496) scale(.9919)"
      />
      {/* Caudal de Mezcla */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(20, "Caudal de Mezcla", false)}>
        <path
          d="M1124.5 1729.7h42.1c3.5 0 6.3 2.8 6.3 6.3v33.2c0 .8.3 1.6.8 2.2l5.3 6.5c1.1 1.4 1 3.3-.1 4.6l-5.1 5.5c-.6.7-.9 1.5-.9 2.4v36.9c0 3.5-2.8 6.3-6.3 6.3h-142.5c-3.5 0-6.3-2.8-6.3-6.3V1736c0-3.5 2.8-6.3 6.2-6.3h100.5z"
          className="st2"
        />
        <path
          d="M1023.8 1729.7h143.8v103.9h-143.8z"
          className={getTarjetaClass(20, selected)}
        />
        <text
          className="st26 st9 st10"
          transform="translate(1072.692 1777.39)">
          {"Caudal"}
        </text>
        <text
          className="st26 st9 st10"
          transform="translate(1062.992 1794.19)">
          {"de Mezcla"}
        </text>
        {/* Alarma Caudal de Mezcla */}
        <g
          className={getTemaAlarma(20, loading, datosAlarmas)}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(20, "Caudal de Mezcla");
          }}>
          <path
            d="M1037.9 1808.1c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st5"
          />
          <path
            d="M1036.2 1807.1c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM1047.5 1805.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st5"
          />
          <path
            d="M1048.1 1803.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM1048.9 1813.1v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1043.9 1820.5c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st5"
          />
        </g>
        <text
          className="st11 st9 st33"
          transform="translate(1075.685 1819.167)">
          {caudalMezcla}
        </text>
        <text
          className="st11 st9 st34"
          transform="translate(1144.232 1818.767)">
          {"l/s"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(1078.197 1753.391)">
          {"FE203"}
        </text>
      </g>
      <circle
        cx={1198.5}
        cy={1781.5}
        r={9.2}
        className="st37"
      />
      <path
        d="M1168.5 1477.2c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        className="st18"
      />
      <path
        d="M1168.5 1465.5c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st2"
      />
      <path
        d="M670.3 1477.5c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        className="st18"
      />
      <path
        d="M670.3 1465.8c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st2"
      />
      <path
        d="M1136.4 830.3c1 0 1.9.8 1.9 1.9v9c0 1-.8 1.9-1.9 1.9-.5 0-1-.2-1.3-.5l-4.5-4.5c-.7-.7-.7-1.8-.1-2.6l.1-.1 4.5-4.5c.4-.5.8-.6 1.3-.6z"
        className="st18"
      />
      <path
        d="M1136.4 842c-.2 0-.4-.1-.6-.3l-4.5-4.5c-.3-.3-.3-.9 0-1.3l4.5-4.5c.2-.2.4-.3.6-.3.4 0 .9.3.9.9v9c0 .6-.4 1-.9 1m0 2c1.6 0 2.9-1.3 2.9-2.9v-9c0-1.6-1.3-2.9-2.9-2.9-.8 0-1.5.3-2 .8l-4.5 4.5-.1.1-.1.1c-.9 1.2-.9 2.9.2 3.9l4.5 4.5c.5.6 1.2.9 2 .9z"
        className="st2"
      />
      <path
        d="M720 830.3c1 0 1.9.8 1.9 1.9v9c0 1-.8 1.9-1.9 1.9-.5 0-1-.2-1.3-.5l-4.5-4.5c-.7-.7-.7-1.8-.1-2.6l.1-.1 4.5-4.5c.4-.5.8-.6 1.3-.6z"
        className="st18"
      />
      <path
        d="M720 842c-.2 0-.4-.1-.6-.3l-4.5-4.5c-.3-.3-.3-.9 0-1.3l4.5-4.5c.2-.2.4-.3.6-.3.4 0 .9.3.9.9v9c0 .6-.4 1-.9 1m0 2c1.6 0 2.9-1.3 2.9-2.9v-9c0-1.6-1.3-2.9-2.9-2.9-.8 0-1.5.3-2 .8l-4.5 4.5-.1.1-.1.1c-.9 1.2-.9 2.9.2 3.9l4.5 4.5c.5.6 1.2.9 2 .9z"
        className="st2"
      />
      <path
        d="M302.9 1075c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        className="st18"
      />
      <path
        d="M302.9 1063.3c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        className="st2"
      />
      <path
        d="M632 1279c1 0 1.9.8 1.9 1.9v9c0 1-.8 1.9-1.9 1.9-.5 0-1-.2-1.3-.5l-4.5-4.5c-.7-.7-.7-1.8-.1-2.6l.1-.1 4.5-4.5c.4-.5.8-.6 1.3-.6z"
        className="st18"
      />
      <path
        d="M632 1290.7c-.2 0-.4-.1-.6-.3l-4.5-4.5c-.3-.3-.3-.9 0-1.3l4.5-4.5c.2-.2.4-.3.6-.3.4 0 .9.3.9.9v9c0 .6-.4 1-.9 1m0 2c1.6 0 2.9-1.3 2.9-2.9v-9c0-1.6-1.3-2.9-2.9-2.9-.8 0-1.5.3-2 .8l-4.5 4.5-.1.1-.1.1c-.9 1.2-.9 2.9.2 3.9l4.5 4.5c.5.6 1.2.9 2 .9z"
        className="st2"
      />
      <image
        xlinkHref="data:image/png;base64,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"
        width={181}
        height={123}
        style={{
          overflow: "visible",
          opacity: 0.2,
          enableBackground: "new"
        }}
        transform="translate(1208.974 679.496) scale(.9919)"
      />
      {/* Caudal de Alimentación */}
      <g
        style={{ cursor: "pointer" }}
        onClick={() => loadGrafico(7, "Caudal de Alimentación", false)}>
        <path
          d="M1272.9 792.4h-42.1c-3.5 0-6.3-2.8-6.3-6.3v-33.2c0-.8-.3-1.6-.8-2.2l-5.3-6.5c-1.1-1.4-1-3.3.1-4.6l5.1-5.5c.6-.7.9-1.5.9-2.4v-36.9c0-3.5 2.8-6.3 6.3-6.3h142.5c3.5 0 6.3 2.8 6.3 6.3v91.3c0 3.5-2.8 6.3-6.2 6.3h-100.5z"
          className="st2"
        />
        <path
          d="M1230.7 688.5h143.8v103.9h-143.8z"
          className={getTarjetaClass(7, selected)}
        />
        <text
          className="st26 st9 st10"
          transform="translate(1281.572 736.244)">
          {"Caudal"}
        </text>
        <text
          className="st26 st9 st10"
          transform="translate(1253.972 753.043)">
          {"de Alimentaci\xF3n"}
        </text>
        {/* Alarma Caudal de Alimentación */}
        <g
          className={getTemaAlarma(7, loading, datosAlarmas)}
          onClick={(e) => {
            e.stopPropagation();
            onClickAlarma(7, "Caudal de Alimentación");
          }}>
          <path
            d="M1244.7 766.9c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z"
            className="st5"
          />
          <path
            d="M1243 765.9c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM1254.3 764.6c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z"
            className="st5"
          />
          <path
            d="M1254.9 762.7c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM1255.7 771.9v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1250.7 779.3c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z"
            className="st5"
          />
        </g>
        <text
          className="st11 st9 st33"
          transform="translate(1282.564 778.02)">
          {caudalAlimentacion}
        </text>
        <text
          className="st11 st9 st34"
          transform="translate(1344.77 777.62)">
          {"l/s"}
        </text>
        <text
          className="st11 st9 st20"
          transform="translate(1286.077 712.245)">
          {"FE200"}
        </text>
      </g>
      <circle
        cx={1198.4}
        cy={740.5}
        r={9.2}
        className="st37"
      />
    </svg>
  );
};

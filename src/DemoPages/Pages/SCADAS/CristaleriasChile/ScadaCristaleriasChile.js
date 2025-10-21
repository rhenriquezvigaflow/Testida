import * as React from "react";

function ScadaCristaleriasChile(props) {
  const {
    datosScada,
    datosAlarmas,
    loading,
    selected,
    loadGrafico,
    onClickAlarma
  } = props;

  // Estandarizable
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

  // Estandarizable
  const getTarjetaClass = (id) => {
    if (selected === id) {
      return "tarjetaSeleccionada";
    } else {
      return "tarjeta";
    }
  };

  // Estandarizable
  const getConexion = (id) => {
    switch (Number(id)) {
      case 0:
        return "DESCONECTADO";
      case 1:
        return "EN LINEA";
      default:
        return "CONSULTANDO";
    }
  };

  // Estandarizable
  const getColorConexion = (id) => {
    switch (Number(id)) {
      case 0:
        return "#B4002B";
      case 1:
        return "#00CD98";
      default:
        return "#b7b7b7";
    }
  };

  // Estandarizable
  const getEstadoDispositivo = (id) => {
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

  const getColorDispositivo = (id) => {
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

  // Estandarizable
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
      viewBox="0 0 1429.5 1431.2"
      xmlSpace="preserve"
      {...props}>
      <style>
        {
          ".prefix__st0{fill:none;stroke:#35ace8;stroke-width:4;stroke-miterlimit:10}.prefix__st1{fill:#323e48}.prefix__st2,.prefix__st3{fill:none;stroke:#323e48;stroke-width:4;stroke-miterlimit:10}.prefix__st3{stroke:#fff;stroke-width:2}.prefix__st4{fill:#fff}.prefix__st5{opacity:.15;fill:#3574e0}.prefix__st5,.prefix__st6{enable-background:new}.prefix__st7{fill:#3574e0}.prefix__st8{font-family:&apos;ArialMT&apos;}.prefix__st9{font-size:14px}.prefix__st10{fill:#606060}.prefix__st11{font-size:17px}.prefix__st12{font-family:&apos;PTSans-Regular&apos;}.prefix__st13{font-size:15px}.prefix__st14{opacity:.6;fill:none;stroke:#ccc;stroke-width:2;stroke-miterlimit:10;enable-background:new}.prefix__st19{fill:#666}.prefix__st20{font-family:&apos;Arial-BoldMT&apos;}.prefix__st21{fill:#00e098}.prefix__st22{opacity:.5;fill:none;stroke:#b3b3b3;stroke-width:.5;stroke-miterlimit:10;enable-background:new}.prefix__st23{font-size:11px}.prefix__st24{fill:#35ace8}.prefix__st25{fill:#00a19b}.prefix__st26{fill:#ccc}.prefix__st27,.prefix__st28{fill:#fff;stroke:#35ace8;stroke-width:4;stroke-miterlimit:10}.prefix__st28{fill:none;stroke:#323e48;stroke-width:3;stroke-linecap:round}.prefix__st30{font-family:&apos;Sarabun-Regular&apos;}.prefix__st31{font-size:12px}.tarjeta{fill:#ffffff}.tarjetaSeleccionada{fill:#3574e0;opacity:.15}.cursorPointer{cursor:pointer}.campana{fill:#3474E0;}.campana:hover{fill:#7c7c7c;}.campanaVacia{fill:#c2c2c1;}.campanaVacia:hover{fill:#7c7c7c;}.campanaDesconectada{fill:#c2c2c1;}"
        }
      </style>
      <path
        className="prefix__st0"
        d="M1095.9 717.7H1336c6.7 0 12.2 5.5 12.2 12.2v217.9c0 6.7-5.5 12.2-12.2 12.2H121.8c-6.7 0-12.2 5.5-12.2 12.2v94.1c0 6.7 5.5 12.2 12.2 12.2h163.8c5.2 0 9.4 4.2 9.4 9.4v17.2M782.8 422.5h554.3c6.2 0 11.1 5 11.1 11.1v180.5c0 6.2-5 11.1-11.1 11.1H120.7c-6.2 0-11.1 5-11.1 11.1v96.2c0 6.2 5 11.1 11.1 11.1h273.2M160.8 345.8H205c4.7 0 8.5 3.8 8.5 8.5v58.3"
      />
      <path
        className="prefix__st1"
        d="M155.3 336.7h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM140.1 340.6l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="prefix__st1"
        d="M155.7 351.2l-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="prefix__st2"
        d="M147.9 335.7v10"
      />
      <path
        className="prefix__st3"
        d="M138.9 327.7h18M147.9 328.7v8"
      />

      <path
        className="prefix__st14"
        d="M782.8 429.4H814c2.8 0 5 2.3 5 5v91.9"
      />
      <path
        className="prefix__st0"
        d="M513.6 422.6v-68.3c0-4.7 3.8-8.5 8.5-8.5h617.3c4.7 0 8.5 3.8 8.5 8.5v68.3M392.7 547.8h-16.4c-2.8 0-5-2.3-5-5v-192c0-2.8 2.3-5 5-5h16.4"
      />
      <image
        width={289}
        height={178}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAACyCAYAAADiWhJ8AAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABZFJREFUeNrs22tPG0cUgOHdtYmB NBdy6UWN2v7/35VWVUhDQkwC2NntrHoGhukaCFUatX4e6chgbH/gw6sza7tpAL6S9l9+HvD/NXzJ kLTFrQABUwEaPidG7S0fU05XRUiMwNaT49MXPw83hai94W9dcTurJt8PbLccnU/V9FWUbh2grojO PM1OmnvFzGM6mxBs/eYzBmYdc17MKu7LMerrF5lfE58cnb2Y/TT343YRf5s1rgnBNkcobz5jcM7S fEhzErcfY3KMmjpC8w3HrjE+u2m+SfMozUHcPor77keAdhrXg2Cbt58h4nIe4VmmeRdzFLfLePyq qa4LzSfiM4sN52Gap2m+S/NtmudpnsT9+xGofAwDtlM+fp3G1nOc5k2awzSvYlHpmqvXgi6uCU0F 6F5sOOPW80Oan9K8SPN9BOhBBCgfwTqbD2ztJtQXR7AxQO8jQAfRia6IVHlh+kqA8jFqFmEZj1nP 0vyY5pc0P0eAHkecFsX2YwOC7d6AcmDO4hh2EJ2YR3TG+z/GlrSKx4+9GeoNaPx9L45Zz2IDehHz PLaffPRyARooL0SvIzx7RXzysexdxOksHtfUG1AXv+9GgJ5EdMbrP09j+xlXqp0iPo0AwdYHqCki lPvQx9YzXog+jDkqTk593oDaKkD5GtDDiE5+52u3ufwMkOgA9QKSrwf3zeU76I+jJfeLflx8m2Lq IvRYsEVz+dmfvebyLffOsQu4Rv0ZwtyQRdWQiwfXNZsVm1D9qWfveAHXbUNdcZqqOzKr+9FVT66/ 99XZeoA7hKiMUdmT9qYNqH4R8QHuGqF2oivNpgDVDxIe4J+GaGNLfIgQ+GoECBAgQIAABAgQIAAB AgQIQIAAAQIQIECAAAQIECAAAQIECECAAAECBAhAgAABAhAgQIAABAgQIAABAgQIQIAAAQIQIECA AAQIECAAAQIECBAgAAECBAhAgAABAhAgQIAABAgQIAABAgQIQIAAAQIQIECAAAECECBAgAAECBAg AAECBAhAgAABAhAgQIAABAgQIAABAgQIQIAAAQIECECAAAECECBAgAAECBAgAAECBAhAgAABAhAg QIAABAgQIECAAAQIECAAAQIECECAAAECECBAgAAECBAgAAECBAhAgAABAhAgQIAAAQIQIECAAAQI ECAAAQIECECAAAECECBAgAAECBAgAAECBAgQIP8CQIAAAQIQIECAAAQIECAAAQIECECAAAECECBA gAAECBAgAAECBAgQIAABAgQIQIAAAQIQIECAAAQIECAAAQIECECAgP9egIZimuIW4IsFaAxNH/Op mEGEgM8wbFhmNgZoKMKzLqaMEMBt4jNUS8yn6MtwU4DG6JylOY05K0LU24aAa8LTFx0Z5zxmPRWh +USxxgd/SLOMOYkQ7UawhsbFa2A6QGNDVrG4fIj5GL+vpgKUf8nHr/zE4zRHad6meZRmJx433s7i 59b/HCiWmHX04yQa8jZuT4pN6CJC8+oF8vFrGfE5THOQZj/+Pr7AIp7XChBQHb/yCep1mldx+yYi dBqNubgwXQaoL45gy3jS7xGfNtaocRPaiwB1AgQUQckBeh/Ly8s0v0WEygD15RGsqSK0inXpjzT3 4v7T4ii2F8cwAQLKdvTFCep1xOfX+HkZHbnyjnp5EboM0LhC5es8q3jyWLQHzV8Xo+fF3xshgq3e fqaOYEcRnsM4TZ00Vy9CD1MbUL4OlOWL0sfxQuP2s4j4dOIDVAvMOjadZXQjX4D+2/ZTB6j8w7p4 wfN4gUUcyVz/ATaFKH+QufwsYf3u13Dd0al8d2s2MV3jHTBgOkD1Nyry7eRXMjZFpK1i1FZbj/gA 1x3Hyk9FN82Gb1DcFJJ2w2YEcJttqA7TZwXoro8FuPE7o38KMADxPmTepvjv6gAAAABJRU5ErkJg gg=="
        transform="translate(1101.812 37.638) scale(.9944)"
        overflow="visible"
        opacity={0.2}
      />
      <path
        className="prefix__st4"
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
        className="prefix__st4"
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
        className="prefix__st7"
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
        className="prefix__st19 prefix__st8 prefix__st9">
        {"Funcionando"}
      </text>
      <text
        transform="translate(1160.93 125.915)"
        className="prefix__st19 prefix__st8 prefix__st9">
        {"Movi\xE9ndose"}
      </text>
      <text
        transform="translate(1160.93 145.915)"
        className="prefix__st19 prefix__st8 prefix__st9">
        {"Falla"}
      </text>
      <text
        transform="translate(1160.93 165.915)"
        className="prefix__st19 prefix__st8 prefix__st9">
        {"Bloqueada"}
      </text>
      <text
        transform="translate(1160.93 185.915)"
        className="prefix__st19 prefix__st8 prefix__st9">
        {"Detenida"}
      </text>
      <text
        transform="translate(75.498 77.731)"
        className="prefix__st10 prefix__st20 prefix__st9">
        {"Conectividad de Planta"}
      </text>
      <text
        transform="translate(109.29 128.21)"
        className="prefix__st10 prefix__st20 prefix__st11">
        {getConexion(datosScada.conexion)}
      </text>
      <image
        width={37}
        height={38}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAnCAYAAACIVoEIAAAACXBIWXMAAArrAAAK6wGCiw1aAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7VJREFUeNrsmIlu2kAURT2eMVsg oaFtklaV+v+/1YW2KVkAsxnsjqv7osurV6JGqlSkK4yxx8dvt4Pg/+cf/pi/vE720lCm5LsIKmsD aJ4BE2Lb0LYGypUqqKzOiuZEGJFVCumCOcyBlJICgv3j41oAMUx+XkcpIosJUOK1gxLoQGBZkWub WKoIpuc1gIZefa8u/jcEtPFaQyt8b732CvDIaq4hkFUw59AYGmE/Q20BsSA9es3x34YAj9zpalwm botgjRzk0mvi9drrDX7n+89wHEOtAPHgde/102vmFWP/EuBHieAaxFAEK1x4vfW69rqBGGqgoHZk qXvAvIK7H+Fuo+LqUGUpsZKDy4awzHuvD9AN9o1hJY6pDDHD1poAPrf4HW5AZ+jvrHUVQJbcNoaV cqiPgLrG/iHAOfsylX3niLs+jhvhuB3AdxT4gauJpQ4umpv9yusdwMRKIwKylM3iji4u1sNaFv/3 sH8JrSjoS2NK0r+PC18ifq5gsQlirK8sZAoquiO3BoAJEW+SAI8Ayy12cDVW0lAT5bJOCVCggjii tB9jO0bw3yLG5gBNXEU8SZCPqB4xkKMMbdKaHNx5RnBjWPxozaqYiqhYDqEBZZlt2BE0GBfhEXWE jkCFBTBGtZUuTuoroLBFQ9d1T8B6WPcoe8OaRSwF6ikwVXAOIBwGJqiJhyKXvsgnrBhjM+rgPBNl z7iebin7onXDihPlJKm6WzVutBlxGSahFsTr7mXdsODEgKB2GDFW0EYt0AYopTlK5qwYksK511B6 jN3jLmKah2TUSBq6U99kAoAlqvgDimYM0H1ZQw7orja0wD0WuUAKW5okwhooCQOZGGSUucP2knpf amsaskwKXaonHUplQ+2kyOLsshg3dYth76vXJ3zPCOxga9KfW05E31Ydl5ZkK89UApRDfPf67PUF 29KQkzJL6equf5uSx6hEZZYkiEyeP7ymsM4UcFO48MlK+bq2wdOvoQrs1CiiEyOhErKmWVzm828A 0dPBhjPaVQQox4OYX4I6pSTQ06dV43AM98wI6gGQCyozT7XP1WRNijvngJasXOBCY+r00lQZirN3 BhjZtyC3NXrEyqhAblWt2cDs5/TM11NQXOeWOH5O1llRNT+qd6ZFZ7c0yvRonJEZq6PGXrmBNUGs yV3cGVpD6ZGDS4TUrEgV0br3CRk/Up3yLqGoqIZUw6x638BQWcmbl6zs5cYp76fK6pZWVtCMgzqY 577JK3p7ZypenAVt3uj9EmAAVGPAlKf0B2IAAAAASUVORK5CYII="
        transform="translate(66.583 102.711) scale(1.0206)"
        overflow="visible"
        opacity={0.15}
      />
      <circle
        className="prefix__st4"
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
        transform="translate(1134.966 77.731)"
        className="prefix__st10 prefix__st20 prefix__st9">
        {"Funcionamiento de dispositivos"}
      </text>
      <path
        className="prefix__st22"
        d="M59.9 96.2h185.8"
      />
      <path
        className="prefix__st7"
        d="M192.5 427.3h124.8V525H192.5z"
      />
      <path
        className="prefix__st2"
        d="M317.1 410.9v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1V410.9"
      />
      <path
        className="prefix__st1"
        d="M442.9 382.7h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
      />
      <image
        width={38}
        height={37}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAlCAYAAAAuqZsAAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2JJREFUeNrsmHtT01AQxZtXy5sK VmHUUfT7fyaVcVAQKG0pUJImbpizzul6m3tT+hdjZs6Elvbml7OPu2mn8/94IUe0pu/61qnMee1g EZ1dWgalKunvtYExQCxKRCmU4L3IAVTDzEUFNA8BjFq6FAOkK+pBG3idQBGB1RC56FH0AD1CDNga zLrUBci2aFe0h783CS4mMIWaiiaiMc53eD8HXGkvnAY6luDCW6J90aFoIHotegXIDQqrhrC+8L1o JLoU/cb5GoARADsWLg1wq3YggzM1xJHoHXQEuB0Ci+lCOdy5EZ2LfmIddXdEzi7ApQFQKZzqi45F H0Unog8AOwBY15FjOfJqDJf7AMsIhHMt0pxLA0LYw4UHgPks+iJ6D7f2jFuu5N9HuDcBxfn3iGpd qFQfmLpVh/AtwD6RW326WLKkh81xcxnA6/dmolvk2RSu5vjs0lByn+rC+j7AjgE0oLB0CSpygHGP U6emyLshwjyFc5pjZZNjGsZt5FEN8wa5smdaROTJVc6pGVJggHUvsNaUKvRvBTXl1zZy5AAu7RBU 3GL34AjoegeOm3SC2WrUxO9Du8g520xDeiHvGptYdxegPXL+SbFnkR5AdiC7yCoTSUI7iG5nmd1v faHMzH6oLSHurHZEtKfaASD2OebaI+0XV4VqWnfhiBtmKB5XcsfIsupRhcxkTWBzlO89SvnO1QhX ACpDZrS44cs5es4UTVAb4Yzg2jpXAsTOZwUBPzHEnjDq1jFCp2a4wjVHeVKDb3ZCs5muV4WEsiCw a5qlbmjQKwLCWjnWG2KtK9z0PQ2NT59PAsdp7Ttb1KWzgCZbmfFnhBv8Ifom+o4ZbYibLXxgttlq w83obDdnTmpObC2gMVw6A9RXAF7gfwvp4XOsqR9x9RY0X82gB6podeoMLtVQp6JfSA0NpXceq6iK 9GHiiraiOS48wbSho7XrYUTz6hJhOwXcOeXrPw8laUAladJOzOgyAezhkocRO1pf0dx/jte39ChX tX1KqsjmktwaIz/2zcCYOBzTXjg0w+GMoKpVHnjtVKsVqupRQbhmfs23O9pB+KG3fO5PBLZCM5o6 EkdhMBzLdvq1/Khip4OEXjdt2HO77Tz3twtfy4g8a1Vtpop1/D7WZp2q81KOPwIMANCcdXDyL+92 AAAAAElFTkSuQmCC"
        transform="rotate(-.756 28690.816 -30047.478) scale(.91928)"
        overflow="visible"
        opacity={0.15}
      />
      <circle
        transform="rotate(-.769 421.732 397.422) scale(.99999)"
        className="prefix__st4"
        cx={421.8}
        cy={397.4}
        r={10.9}
      />
      <circle
        className="prefix__st5"
        cx={421.8}
        cy={397.2}
        r={8}
      />
      <path
        className="prefix__st1"
        d="M442.9 317.4h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
      />
      <image
        width={38}
        height={37}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAlCAYAAAAuqZsAAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2JJREFUeNrsmHtT01AQxZtXy5sK VmHUUfT7fyaVcVAQKG0pUJImbpizzul6m3tT+hdjZs6Elvbml7OPu2mn8/94IUe0pu/61qnMee1g EZ1dWgalKunvtYExQCxKRCmU4L3IAVTDzEUFNA8BjFq6FAOkK+pBG3idQBGB1RC56FH0AD1CDNga zLrUBci2aFe0h783CS4mMIWaiiaiMc53eD8HXGkvnAY6luDCW6J90aFoIHotegXIDQqrhrC+8L1o JLoU/cb5GoARADsWLg1wq3YggzM1xJHoHXQEuB0Ci+lCOdy5EZ2LfmIddXdEzi7ApQFQKZzqi45F H0Unog8AOwBY15FjOfJqDJf7AMsIhHMt0pxLA0LYw4UHgPks+iJ6D7f2jFuu5N9HuDcBxfn3iGpd qFQfmLpVh/AtwD6RW326WLKkh81xcxnA6/dmolvk2RSu5vjs0lByn+rC+j7AjgE0oLB0CSpygHGP U6emyLshwjyFc5pjZZNjGsZt5FEN8wa5smdaROTJVc6pGVJggHUvsNaUKvRvBTXl1zZy5AAu7RBU 3GL34AjoegeOm3SC2WrUxO9Du8g520xDeiHvGptYdxegPXL+SbFnkR5AdiC7yCoTSUI7iG5nmd1v faHMzH6oLSHurHZEtKfaASD2OebaI+0XV4VqWnfhiBtmKB5XcsfIsupRhcxkTWBzlO89SvnO1QhX ACpDZrS44cs5es4UTVAb4Yzg2jpXAsTOZwUBPzHEnjDq1jFCp2a4wjVHeVKDb3ZCs5muV4WEsiCw a5qlbmjQKwLCWjnWG2KtK9z0PQ2NT59PAsdp7Ttb1KWzgCZbmfFnhBv8Ifom+o4ZbYibLXxgttlq w83obDdnTmpObC2gMVw6A9RXAF7gfwvp4XOsqR9x9RY0X82gB6podeoMLtVQp6JfSA0NpXceq6iK 9GHiiraiOS48wbSho7XrYUTz6hJhOwXcOeXrPw8laUAladJOzOgyAezhkocRO1pf0dx/jte39ChX tX1KqsjmktwaIz/2zcCYOBzTXjg0w+GMoKpVHnjtVKsVqupRQbhmfs23O9pB+KG3fO5PBLZCM5o6 EkdhMBzLdvq1/Khip4OEXjdt2HO77Tz3twtfy4g8a1Vtpop1/D7WZp2q81KOPwIMANCcdXDyL+92 AAAAAElFTkSuQmCC"
        transform="rotate(-.756 23802.907 -30079.329) scale(.91928)"
        overflow="visible"
        opacity={0.15}
      />
      <circle
        transform="rotate(-.769 421.738 332.138) scale(.99999)"
        className="prefix__st4"
        cx={421.8}
        cy={332.1}
        r={10.9}
      />
      <circle
        className="prefix__st5"
        cx={421.8}
        cy={331.9}
        r={8}
      />
      <text
        transform="translate(403.666 370.174)"
        className="prefix__st10 prefix__st8 prefix__st23">
        {"P-001A"}
      </text>
      <text
        transform="translate(403.666 434.55)"
        className="prefix__st10 prefix__st8 prefix__st23">
        {"P-001B"}
      </text>
      <path
        className="prefix__st24"
        d="M394.6 414.7c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="prefix__st4"
        d="M394.6 403c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="prefix__st24"
        d="M394.6 352.7c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="prefix__st4"
        d="M394.6 341c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="prefix__st1"
        d="M442.9 521.5h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
      />
      <image
        width={38}
        height={37}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAlCAYAAAAuqZsAAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2JJREFUeNrsmHtT01AQxZtXy5sK VmHUUfT7fyaVcVAQKG0pUJImbpizzul6m3tT+hdjZs6Elvbml7OPu2mn8/94IUe0pu/61qnMee1g EZ1dWgalKunvtYExQCxKRCmU4L3IAVTDzEUFNA8BjFq6FAOkK+pBG3idQBGB1RC56FH0AD1CDNga zLrUBci2aFe0h783CS4mMIWaiiaiMc53eD8HXGkvnAY6luDCW6J90aFoIHotegXIDQqrhrC+8L1o JLoU/cb5GoARADsWLg1wq3YggzM1xJHoHXQEuB0Ci+lCOdy5EZ2LfmIddXdEzi7ApQFQKZzqi45F H0Unog8AOwBY15FjOfJqDJf7AMsIhHMt0pxLA0LYw4UHgPks+iJ6D7f2jFuu5N9HuDcBxfn3iGpd qFQfmLpVh/AtwD6RW326WLKkh81xcxnA6/dmolvk2RSu5vjs0lByn+rC+j7AjgE0oLB0CSpygHGP U6emyLshwjyFc5pjZZNjGsZt5FEN8wa5smdaROTJVc6pGVJggHUvsNaUKvRvBTXl1zZy5AAu7RBU 3GL34AjoegeOm3SC2WrUxO9Du8g520xDeiHvGptYdxegPXL+SbFnkR5AdiC7yCoTSUI7iG5nmd1v faHMzH6oLSHurHZEtKfaASD2OebaI+0XV4VqWnfhiBtmKB5XcsfIsupRhcxkTWBzlO89SvnO1QhX ACpDZrS44cs5es4UTVAb4Yzg2jpXAsTOZwUBPzHEnjDq1jFCp2a4wjVHeVKDb3ZCs5muV4WEsiCw a5qlbmjQKwLCWjnWG2KtK9z0PQ2NT59PAsdp7Ttb1KWzgCZbmfFnhBv8Ifom+o4ZbYibLXxgttlq w83obDdnTmpObC2gMVw6A9RXAF7gfwvp4XOsqR9x9RY0X82gB6podeoMLtVQp6JfSA0NpXceq6iK 9GHiiraiOS48wbSho7XrYUTz6hJhOwXcOeXrPw8laUAladJOzOgyAezhkocRO1pf0dx/jte39ChX tX1KqsjmktwaIz/2zcCYOBzTXjg0w+GMoKpVHnjtVKsVqupRQbhmfs23O9pB+KG3fO5PBLZCM5o6 EkdhMBzLdvq1/Khip4OEXjdt2HO77Tz3twtfy4g8a1Vtpop1/D7WZp2q81KOPwIMANCcdXDyL+92 AAAAAElFTkSuQmCC"
        transform="rotate(-.756 39082.938 -29979.762) scale(.91928)"
        overflow="visible"
        opacity={0.15}
      />
      <circle
        transform="rotate(-.769 421.728 536.212) scale(.99999)"
        className="prefix__st4"
        cx={421.8}
        cy={536.2}
        r={10.9}
      />
      <circle
        className="prefix__st5"
        cx={421.8}
        cy={536}
        r={8}
      />
      <path
        className="prefix__st1"
        d="M442.9 456.2h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
      />
      <image
        width={38}
        height={37}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAlCAYAAAAuqZsAAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2JJREFUeNrsmHtT01AQxZtXy5sK VmHUUfT7fyaVcVAQKG0pUJImbpizzul6m3tT+hdjZs6Elvbml7OPu2mn8/94IUe0pu/61qnMee1g EZ1dWgalKunvtYExQCxKRCmU4L3IAVTDzEUFNA8BjFq6FAOkK+pBG3idQBGB1RC56FH0AD1CDNga zLrUBci2aFe0h783CS4mMIWaiiaiMc53eD8HXGkvnAY6luDCW6J90aFoIHotegXIDQqrhrC+8L1o JLoU/cb5GoARADsWLg1wq3YggzM1xJHoHXQEuB0Ci+lCOdy5EZ2LfmIddXdEzi7ApQFQKZzqi45F H0Unog8AOwBY15FjOfJqDJf7AMsIhHMt0pxLA0LYw4UHgPks+iJ6D7f2jFuu5N9HuDcBxfn3iGpd qFQfmLpVh/AtwD6RW326WLKkh81xcxnA6/dmolvk2RSu5vjs0lByn+rC+j7AjgE0oLB0CSpygHGP U6emyLshwjyFc5pjZZNjGsZt5FEN8wa5smdaROTJVc6pGVJggHUvsNaUKvRvBTXl1zZy5AAu7RBU 3GL34AjoegeOm3SC2WrUxO9Du8g520xDeiHvGptYdxegPXL+SbFnkR5AdiC7yCoTSUI7iG5nmd1v faHMzH6oLSHurHZEtKfaASD2OebaI+0XV4VqWnfhiBtmKB5XcsfIsupRhcxkTWBzlO89SvnO1QhX ACpDZrS44cs5es4UTVAb4Yzg2jpXAsTOZwUBPzHEnjDq1jFCp2a4wjVHeVKDb3ZCs5muV4WEsiCw a5qlbmjQKwLCWjnWG2KtK9z0PQ2NT59PAsdp7Ttb1KWzgCZbmfFnhBv8Ifom+o4ZbYibLXxgttlq w83obDdnTmpObC2gMVw6A9RXAF7gfwvp4XOsqR9x9RY0X82gB6podeoMLtVQp6JfSA0NpXceq6iK 9GHiiraiOS48wbSho7XrYUTz6hJhOwXcOeXrPw8laUAladJOzOgyAezhkocRO1pf0dx/jte39ChX tX1KqsjmktwaIz/2zcCYOBzTXjg0w+GMoKpVHnjtVKsVqupRQbhmfs23O9pB+KG3fO5PBLZCM5o6 EkdhMBzLdvq1/Khip4OEXjdt2HO77Tz3twtfy4g8a1Vtpop1/D7WZp2q81KOPwIMANCcdXDyL+92 AAAAAElFTkSuQmCC"
        transform="rotate(-.756 34195.028 -30011.612) scale(.91928)"
        overflow="visible"
        opacity={0.15}
      />
      <circle
        transform="rotate(-.769 421.733 470.93) scale(.99999)"
        className="prefix__st4"
        cx={421.8}
        cy={470.9}
        r={10.9}
      />
      <circle
        className="prefix__st5"
        cx={421.8}
        cy={470.7}
        r={8}
      />
      <text
        transform="translate(403.666 508.97)"
        className="prefix__st10 prefix__st8 prefix__st23">
        {"P-002A"}
      </text>
      <text
        transform="translate(403.666 573.346)"
        className="prefix__st10 prefix__st8 prefix__st23">
        {"P-002B"}
      </text>
      <path
        className="prefix__st0"
        d="M448.8 461.6h16.4c2.8 0 5 2.3 5 5v51.9c0 2.8-2.3 5-5 5h-16.4M448.8 322.8h16.4c2.8 0 5 2.3 5 5v51.9c0 2.8-2.3 5-5 5h-16.4"
      />
      <path
        className="prefix__st1"
        d="M725 748.5h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
      />
      {/* <image
        width={38}
        height={37}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAlCAYAAAAuqZsAAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2JJREFUeNrsmHtT01AQxZtXy5sK VmHUUfT7fyaVcVAQKG0pUJImbpizzul6m3tT+hdjZs6Elvbml7OPu2mn8/94IUe0pu/61qnMee1g EZ1dWgalKunvtYExQCxKRCmU4L3IAVTDzEUFNA8BjFq6FAOkK+pBG3idQBGB1RC56FH0AD1CDNga zLrUBci2aFe0h783CS4mMIWaiiaiMc53eD8HXGkvnAY6luDCW6J90aFoIHotegXIDQqrhrC+8L1o JLoU/cb5GoARADsWLg1wq3YggzM1xJHoHXQEuB0Ci+lCOdy5EZ2LfmIddXdEzi7ApQFQKZzqi45F H0Unog8AOwBY15FjOfJqDJf7AMsIhHMt0pxLA0LYw4UHgPks+iJ6D7f2jFuu5N9HuDcBxfn3iGpd qFQfmLpVh/AtwD6RW326WLKkh81xcxnA6/dmolvk2RSu5vjs0lByn+rC+j7AjgE0oLB0CSpygHGP U6emyLshwjyFc5pjZZNjGsZt5FEN8wa5smdaROTJVc6pGVJggHUvsNaUKvRvBTXl1zZy5AAu7RBU 3GL34AjoegeOm3SC2WrUxO9Du8g520xDeiHvGptYdxegPXL+SbFnkR5AdiC7yCoTSUI7iG5nmd1v faHMzH6oLSHurHZEtKfaASD2OebaI+0XV4VqWnfhiBtmKB5XcsfIsupRhcxkTWBzlO89SvnO1QhX ACpDZrS44cs5es4UTVAb4Yzg2jpXAsTOZwUBPzHEnjDq1jFCp2a4wjVHeVKDb3ZCs5muV4WEsiCw a5qlbmjQKwLCWjnWG2KtK9z0PQ2NT59PAsdp7Ttb1KWzgCZbmfFnhBv8Ifom+o4ZbYibLXxgttlq w83obDdnTmpObC2gMVw6A9RXAF7gfwvp4XOsqR9x9RY0X82gB6podeoMLtVQp6JfSA0NpXceq6iK 9GHiiraiOS48wbSho7XrYUTz6hJhOwXcOeXrPw8laUAladJOzOgyAezhkocRO1pf0dx/jte39ChX tX1KqsjmktwaIz/2zcCYOBzTXjg0w+GMoKpVHnjtVKsVqupRQbhmfs23O9pB+KG3fO5PBLZCM5o6 EkdhMBzLdvq1/Khip4OEXjdt2HO77Tz3twtfy4g8a1Vtpop1/D7WZp2q81KOPwIMANCcdXDyL+92 AAAAAElFTkSuQmCC"
        transform="rotate(-.756 56217.085 -50996.385) scale(.91928)"
        overflow="visible"
        opacity={0.15}
      /> */}
      <circle
        transform="rotate(-.769 703.883 763.225) scale(.99999)"
        className="prefix__st4"
        cx={703.9}
        cy={763.2}
        r={10.9}
      />

      {/* P-009B color*/}
      <circle
        onClick={() => {
          loadGrafico(12, "Estado P-00B", true);
        }}
        className="cursorPointer"
        fill={getColor(datosScada.P009B)}
        cx={703.9}
        cy={763}
        r={8}
      />

      <path
        className="prefix__st1"
        d="M725 683.2h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
      />
      {/* <image
        width={38}
        height={37}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAlCAYAAAAuqZsAAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2JJREFUeNrsmHtT01AQxZtXy5sK VmHUUfT7fyaVcVAQKG0pUJImbpizzul6m3tT+hdjZs6Elvbml7OPu2mn8/94IUe0pu/61qnMee1g EZ1dWgalKunvtYExQCxKRCmU4L3IAVTDzEUFNA8BjFq6FAOkK+pBG3idQBGB1RC56FH0AD1CDNga zLrUBci2aFe0h783CS4mMIWaiiaiMc53eD8HXGkvnAY6luDCW6J90aFoIHotegXIDQqrhrC+8L1o JLoU/cb5GoARADsWLg1wq3YggzM1xJHoHXQEuB0Ci+lCOdy5EZ2LfmIddXdEzi7ApQFQKZzqi45F H0Unog8AOwBY15FjOfJqDJf7AMsIhHMt0pxLA0LYw4UHgPks+iJ6D7f2jFuu5N9HuDcBxfn3iGpd qFQfmLpVh/AtwD6RW326WLKkh81xcxnA6/dmolvk2RSu5vjs0lByn+rC+j7AjgE0oLB0CSpygHGP U6emyLshwjyFc5pjZZNjGsZt5FEN8wa5smdaROTJVc6pGVJggHUvsNaUKvRvBTXl1zZy5AAu7RBU 3GL34AjoegeOm3SC2WrUxO9Du8g520xDeiHvGptYdxegPXL+SbFnkR5AdiC7yCoTSUI7iG5nmd1v faHMzH6oLSHurHZEtKfaASD2OebaI+0XV4VqWnfhiBtmKB5XcsfIsupRhcxkTWBzlO89SvnO1QhX ACpDZrS44cs5es4UTVAb4Yzg2jpXAsTOZwUBPzHEnjDq1jFCp2a4wjVHeVKDb3ZCs5muV4WEsiCw a5qlbmjQKwLCWjnWG2KtK9z0PQ2NT59PAsdp7Ttb1KWzgCZbmfFnhBv8Ifom+o4ZbYibLXxgttlq w83obDdnTmpObC2gMVw6A9RXAF7gfwvp4XOsqR9x9RY0X82gB6podeoMLtVQp6JfSA0NpXceq6iK 9GHiiraiOS48wbSho7XrYUTz6hJhOwXcOeXrPw8laUAladJOzOgyAezhkocRO1pf0dx/jte39ChX tX1KqsjmktwaIz/2zcCYOBzTXjg0w+GMoKpVHnjtVKsVqupRQbhmfs23O9pB+KG3fO5PBLZCM5o6 EkdhMBzLdvq1/Khip4OEXjdt2HO77Tz3twtfy4g8a1Vtpop1/D7WZp2q81KOPwIMANCcdXDyL+92 AAAAAElFTkSuQmCC"
        transform="rotate(-.756 51329.175 -51028.235) scale(.91928)"
        overflow="visible"
        opacity={0.15}
      /> */}
      <circle
        transform="rotate(-.769 703.889 697.949) scale(.99999)"
        className="prefix__st4"
        cx={703.9}
        cy={697.9}
        r={10.9}
      />

      {/* P-009A color */}
      <circle
        className="cursorPointer"
        onClick={() => {
          loadGrafico(11, "Estado P-009A", true);
        }}
        fill={getColor(datosScada.P009A)}
        cx={703.9}
        cy={697.7}
        r={8}
      />

      <text
        transform="translate(685.839 735.97)"
        className="prefix__st10 prefix__st8 prefix__st23">
        {"P-009A"}
      </text>
      <text
        transform="translate(685.839 800.347)"
        className="prefix__st10 prefix__st8 prefix__st23">
        {"P-009B"}
      </text>
      <path
        className="prefix__st24"
        d="M676.8 780.5c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="prefix__st4"
        d="M676.8 768.8c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="prefix__st24"
        d="M676.8 718.5c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="prefix__st4"
        d="M676.8 706.8c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="prefix__st0"
        d="M731 688.6h16.4c2.8 0 5 2.3 5 5v51.9c0 2.8-2.3 5-5 5H731"
      />
      <text
        transform="translate(229.992 551.076)"
        className="prefix__st10 prefix__st8 prefix__st23">
        {"TK-001"}
      </text>
      <path
        className="prefix__st7"
        d="M276 1125h124.8v97.7H276z"
      />
      <path
        className="prefix__st2"
        d="M400.1 1108.7v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1v-111.2"
      />
      <text
        transform="translate(320.33 1245.855)"
        className="prefix__st10 prefix__st8 prefix__st23">
        {"TK-002"}
      </text>
      <text
        transform="translate(581.644 573.346)"
        className="prefix__st10 prefix__st8 prefix__st23">
        {"Hipoclorito"}
      </text>
      <path
        className="prefix__st2"
        d="M629 493.7h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
      />
      <path
        className="prefix__st1"
        d="M618.5 502.7h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
      />
      <path
        className="prefix__st2"
        d="M586.8 493.4H602c1 0 1.8.8 1.8 1.8v39.2"
      />
      <path
        className="prefix__st1"
        d="M597.3 502.4h-14c-.8 0-1.5-.7-1.5-1.5v-14c0-.8.7-1.5 1.5-1.5h14c.8 0 1.5.7 1.5 1.5v14c0 .8-.7 1.5-1.5 1.5z"
      />
      <path
        className="prefix__st25"
        d="M588.5 514.4h38.8v40h-38.8z"
      />
      <path
        className="prefix__st2"
        d="M627.3 507.7v45.2c0 .7-.4 1.3-.8 1.3h-37.1c-.5 0-.8-.6-.8-1.3v-45.2"
      />
      <text
        transform="translate(877.004 573.346)"
        className="prefix__st10 prefix__st8 prefix__st23">
        {"Metabisulfito"}
      </text>
      <path
        className="prefix__st2"
        d="M928.3 493.7h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
      />
      <path
        className="prefix__st1"
        d="M917.8 502.7h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
      />
      <path
        className="prefix__st2"
        d="M886.2 493.4h15.2c1 0 1.8.8 1.8 1.8v39.2"
      />
      <path
        className="prefix__st1"
        d="M896.7 502.4h-14c-.8 0-1.5-.7-1.5-1.5v-14c0-.8.7-1.5 1.5-1.5h14c.8 0 1.5.7 1.5 1.5v14c0 .8-.7 1.5-1.5 1.5z"
      />
      <path
        className="prefix__st25"
        d="M887.8 514.4h38.8v40h-38.8z"
      />
      <path
        className="prefix__st2"
        d="M926.6 507.7v45.2c0 .7-.4 1.3-.8 1.3h-37.1c-.5 0-.8-.6-.8-1.3v-45.2"
      />
      <text
        transform="translate(1018.957 573.346)"
        className="prefix__st10 prefix__st8 prefix__st23">
        {"Antiincrustante"}
      </text>
      <path
        className="prefix__st2"
        d="M1076.3 493.7h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
      />
      <path
        className="prefix__st1"
        d="M1065.8 502.7h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
      />
      <path
        className="prefix__st2"
        d="M1034.2 493.4h15.2c1 0 1.8.8 1.8 1.8v39.2"
      />
      <path
        className="prefix__st1"
        d="M1044.7 502.4h-14c-.8 0-1.5-.7-1.5-1.5v-14c0-.8.7-1.5 1.5-1.5h14c.8 0 1.5.7 1.5 1.5v14c0 .8-.7 1.5-1.5 1.5z"
      />
      <path
        className="prefix__st25"
        d="M1035.8 514.4h38.8v40h-38.8z"
      />
      <path
        className="prefix__st2"
        d="M1074.6 507.7v45.2c0 .7-.4 1.3-.8 1.3h-37.1c-.5 0-.8-.6-.8-1.3v-45.2"
      />

      <path
        className="prefix__st0"
        d="M470.2 351h16.4c2.8 0 5 2.3 5 5v130c0 2.8-2.3 5-5 5h-16.4M371.3 408.4h20.4"
      />
      <g>
        <path
          className="prefix__st24"
          d="M394.6 488.1c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        />
        <path
          className="prefix__st4"
          d="M394.6 476.4c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        />
      </g>
      <g>
        <path
          className="prefix__st24"
          d="M394.6 554.1c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        />
        <path
          className="prefix__st4"
          d="M394.6 542.4c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        />
      </g>
      <path
        className="prefix__st0"
        d="M371.3 481.8h20.4"
      />
      <g>
        <path
          className="prefix__st1"
          d="M579.9 1197.6h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
        />
        {/* <image
          width={38}
          height={37}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAlCAYAAAAuqZsAAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2JJREFUeNrsmHtT01AQxZtXy5sK VmHUUfT7fyaVcVAQKG0pUJImbpizzul6m3tT+hdjZs6Elvbml7OPu2mn8/94IUe0pu/61qnMee1g EZ1dWgalKunvtYExQCxKRCmU4L3IAVTDzEUFNA8BjFq6FAOkK+pBG3idQBGB1RC56FH0AD1CDNga zLrUBci2aFe0h783CS4mMIWaiiaiMc53eD8HXGkvnAY6luDCW6J90aFoIHotegXIDQqrhrC+8L1o JLoU/cb5GoARADsWLg1wq3YggzM1xJHoHXQEuB0Ci+lCOdy5EZ2LfmIddXdEzi7ApQFQKZzqi45F H0Unog8AOwBY15FjOfJqDJf7AMsIhHMt0pxLA0LYw4UHgPks+iJ6D7f2jFuu5N9HuDcBxfn3iGpd qFQfmLpVh/AtwD6RW326WLKkh81xcxnA6/dmolvk2RSu5vjs0lByn+rC+j7AjgE0oLB0CSpygHGP U6emyLshwjyFc5pjZZNjGsZt5FEN8wa5smdaROTJVc6pGVJggHUvsNaUKvRvBTXl1zZy5AAu7RBU 3GL34AjoegeOm3SC2WrUxO9Du8g520xDeiHvGptYdxegPXL+SbFnkR5AdiC7yCoTSUI7iG5nmd1v faHMzH6oLSHurHZEtKfaASD2OebaI+0XV4VqWnfhiBtmKB5XcsfIsupRhcxkTWBzlO89SvnO1QhX ACpDZrS44cs5es4UTVAb4Yzg2jpXAsTOZwUBPzHEnjDq1jFCp2a4wjVHeVKDb3ZCs5muV4WEsiCw a5qlbmjQKwLCWjnWG2KtK9z0PQ2NT59PAsdp7Ttb1KWzgCZbmfFnhBv8Ifom+o4ZbYibLXxgttlq w83obDdnTmpObC2gMVw6A9RXAF7gfwvp4XOsqR9x9RY0X82gB6podeoMLtVQp6JfSA0NpXceq6iK 9GHiiraiOS48wbSho7XrYUTz6hJhOwXcOeXrPw8laUAladJOzOgyAezhkocRO1pf0dx/jte39ChX tX1KqsjmktwaIz/2zcCYOBzTXjg0w+GMoKpVHnjtVKsVqupRQbhmfs23O9pB+KG3fO5PBLZCM5o6 EkdhMBzLdvq1/Khip4OEXjdt2HO77Tz3twtfy4g8a1Vtpop1/D7WZp2q81KOPwIMANCcdXDyL+92 AAAAAElFTkSuQmCC"
          transform="rotate(-.756 89774.378 -39907) scale(.91928)"
          overflow="visible"
          opacity={0.15}
        /> */}
        <circle
          transform="rotate(-.769 558.677 1212.34) scale(.99999)"
          className="prefix__st4"
          cx={558.8}
          cy={1212.3}
          r={10.9}
        />
        <circle
          className="prefix__st5"
          cx={558.8}
          cy={1212.1}
          r={8}
        />
      </g>
      <g>
        <path
          className="prefix__st1"
          d="M579.9 1132.3h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
        />
        {/* <image
          width={38}
          height={37}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAlCAYAAAAuqZsAAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2JJREFUeNrsmHtT01AQxZtXy5sK VmHUUfT7fyaVcVAQKG0pUJImbpizzul6m3tT+hdjZs6Elvbml7OPu2mn8/94IUe0pu/61qnMee1g EZ1dWgalKunvtYExQCxKRCmU4L3IAVTDzEUFNA8BjFq6FAOkK+pBG3idQBGB1RC56FH0AD1CDNga zLrUBci2aFe0h783CS4mMIWaiiaiMc53eD8HXGkvnAY6luDCW6J90aFoIHotegXIDQqrhrC+8L1o JLoU/cb5GoARADsWLg1wq3YggzM1xJHoHXQEuB0Ci+lCOdy5EZ2LfmIddXdEzi7ApQFQKZzqi45F H0Unog8AOwBY15FjOfJqDJf7AMsIhHMt0pxLA0LYw4UHgPks+iJ6D7f2jFuu5N9HuDcBxfn3iGpd qFQfmLpVh/AtwD6RW326WLKkh81xcxnA6/dmolvk2RSu5vjs0lByn+rC+j7AjgE0oLB0CSpygHGP U6emyLshwjyFc5pjZZNjGsZt5FEN8wa5smdaROTJVc6pGVJggHUvsNaUKvRvBTXl1zZy5AAu7RBU 3GL34AjoegeOm3SC2WrUxO9Du8g520xDeiHvGptYdxegPXL+SbFnkR5AdiC7yCoTSUI7iG5nmd1v faHMzH6oLSHurHZEtKfaASD2OebaI+0XV4VqWnfhiBtmKB5XcsfIsupRhcxkTWBzlO89SvnO1QhX ACpDZrS44cs5es4UTVAb4Yzg2jpXAsTOZwUBPzHEnjDq1jFCp2a4wjVHeVKDb3ZCs5muV4WEsiCw a5qlbmjQKwLCWjnWG2KtK9z0PQ2NT59PAsdp7Ttb1KWzgCZbmfFnhBv8Ifom+o4ZbYibLXxgttlq w83obDdnTmpObC2gMVw6A9RXAF7gfwvp4XOsqR9x9RY0X82gB6podeoMLtVQp6JfSA0NpXceq6iK 9GHiiraiOS48wbSho7XrYUTz6hJhOwXcOeXrPw8laUAladJOzOgyAezhkocRO1pf0dx/jte39ChX tX1KqsjmktwaIz/2zcCYOBzTXjg0w+GMoKpVHnjtVKsVqupRQbhmfs23O9pB+KG3fO5PBLZCM5o6 EkdhMBzLdvq1/Khip4OEXjdt2HO77Tz3twtfy4g8a1Vtpop1/D7WZp2q81KOPwIMANCcdXDyL+92 AAAAAElFTkSuQmCC"
          transform="rotate(-.756 84886.468 -39938.85) scale(.91928)"
          overflow="visible"
          opacity={0.15}
        /> */}
        <circle
          transform="rotate(-.769 558.683 1147.065) scale(.99999)"
          className="prefix__st4"
          cx={558.8}
          cy={1147}
          r={10.9}
        />
        <circle
          className="prefix__st5"
          cx={558.8}
          cy={1146.8}
          r={8}
        />
      </g>
      <g>
        <text
          transform="translate(540.658 1185.101)"
          className="prefix__st10 prefix__st8 prefix__st23">
          {"P-012A"}
        </text>
      </g>
      <g>
        <text
          transform="translate(540.658 1249.477)"
          className="prefix__st10 prefix__st8 prefix__st23">
          {"P-012B"}
        </text>
      </g>
      <g>
        <path
          className="prefix__st24"
          d="M531.6 1229.7c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        />
        <path
          className="prefix__st4"
          d="M531.6 1218c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        />
      </g>
      <g>
        <path
          className="prefix__st24"
          d="M531.6 1167.6c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        />
        <path
          className="prefix__st4"
          d="M531.6 1155.9c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        />
      </g>
      <path
        className="prefix__st0"
        d="M585.8 1137.7h16.4c2.8 0 5 2.3 5 5v51.9c0 2.8-2.3 5-5 5h-16.4M406.8 1193.4h101.4"
      />
      <g>
        <path
          className="prefix__st1"
          d="M999.9 1246.4h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
        />
        {/* <image
          width={38}
          height={37}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAlCAYAAAAuqZsAAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2JJREFUeNrsmHtT01AQxZtXy5sK VmHUUfT7fyaVcVAQKG0pUJImbpizzul6m3tT+hdjZs6Elvbml7OPu2mn8/94IUe0pu/61qnMee1g EZ1dWgalKunvtYExQCxKRCmU4L3IAVTDzEUFNA8BjFq6FAOkK+pBG3idQBGB1RC56FH0AD1CDNga zLrUBci2aFe0h783CS4mMIWaiiaiMc53eD8HXGkvnAY6luDCW6J90aFoIHotegXIDQqrhrC+8L1o JLoU/cb5GoARADsWLg1wq3YggzM1xJHoHXQEuB0Ci+lCOdy5EZ2LfmIddXdEzi7ApQFQKZzqi45F H0Unog8AOwBY15FjOfJqDJf7AMsIhHMt0pxLA0LYw4UHgPks+iJ6D7f2jFuu5N9HuDcBxfn3iGpd qFQfmLpVh/AtwD6RW326WLKkh81xcxnA6/dmolvk2RSu5vjs0lByn+rC+j7AjgE0oLB0CSpygHGP U6emyLshwjyFc5pjZZNjGsZt5FEN8wa5smdaROTJVc6pGVJggHUvsNaUKvRvBTXl1zZy5AAu7RBU 3GL34AjoegeOm3SC2WrUxO9Du8g520xDeiHvGptYdxegPXL+SbFnkR5AdiC7yCoTSUI7iG5nmd1v faHMzH6oLSHurHZEtKfaASD2OebaI+0XV4VqWnfhiBtmKB5XcsfIsupRhcxkTWBzlO89SvnO1QhX ACpDZrS44cs5es4UTVAb4Yzg2jpXAsTOZwUBPzHEnjDq1jFCp2a4wjVHeVKDb3ZCs5muV4WEsiCw a5qlbmjQKwLCWjnWG2KtK9z0PQ2NT59PAsdp7Ttb1KWzgCZbmfFnhBv8Ifom+o4ZbYibLXxgttlq w83obDdnTmpObC2gMVw6A9RXAF7gfwvp4XOsqR9x9RY0X82gB6podeoMLtVQp6JfSA0NpXceq6iK 9GHiiraiOS48wbSho7XrYUTz6hJhOwXcOeXrPw8laUAladJOzOgyAezhkocRO1pf0dx/jte39ChX tX1KqsjmktwaIz/2zcCYOBzTXjg0w+GMoKpVHnjtVKsVqupRQbhmfs23O9pB+KG3fO5PBLZCM5o6 EkdhMBzLdvq1/Khip4OEXjdt2HO77Tz3twtfy4g8a1Vtpop1/D7WZp2q81KOPwIMANCcdXDyL+92 AAAAAElFTkSuQmCC"
          transform="rotate(-.756 93627.398 -71330.802) scale(.91928)"
          overflow="visible"
          opacity={0.15}
        /> */}
        <circle
          transform="rotate(-.769 978.673 1261.092) scale(.99999)"
          className="prefix__st4"
          cx={978.8}
          cy={1261}
          r={10.9}
        />
        <circle
          className="prefix__st5"
          cx={978.8}
          cy={1260.9}
          r={8}
        />
      </g>
      <g>
        <path
          className="prefix__st1"
          d="M999.9 1181.1h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
        />
        {/* <image
          width={38}
          height={37}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAlCAYAAAAuqZsAAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2JJREFUeNrsmHtT01AQxZtXy5sK VmHUUfT7fyaVcVAQKG0pUJImbpizzul6m3tT+hdjZs6Elvbml7OPu2mn8/94IUe0pu/61qnMee1g EZ1dWgalKunvtYExQCxKRCmU4L3IAVTDzEUFNA8BjFq6FAOkK+pBG3idQBGB1RC56FH0AD1CDNga zLrUBci2aFe0h783CS4mMIWaiiaiMc53eD8HXGkvnAY6luDCW6J90aFoIHotegXIDQqrhrC+8L1o JLoU/cb5GoARADsWLg1wq3YggzM1xJHoHXQEuB0Ci+lCOdy5EZ2LfmIddXdEzi7ApQFQKZzqi45F H0Unog8AOwBY15FjOfJqDJf7AMsIhHMt0pxLA0LYw4UHgPks+iJ6D7f2jFuu5N9HuDcBxfn3iGpd qFQfmLpVh/AtwD6RW326WLKkh81xcxnA6/dmolvk2RSu5vjs0lByn+rC+j7AjgE0oLB0CSpygHGP U6emyLshwjyFc5pjZZNjGsZt5FEN8wa5smdaROTJVc6pGVJggHUvsNaUKvRvBTXl1zZy5AAu7RBU 3GL34AjoegeOm3SC2WrUxO9Du8g520xDeiHvGptYdxegPXL+SbFnkR5AdiC7yCoTSUI7iG5nmd1v faHMzH6oLSHurHZEtKfaASD2OebaI+0XV4VqWnfhiBtmKB5XcsfIsupRhcxkTWBzlO89SvnO1QhX ACpDZrS44cs5es4UTVAb4Yzg2jpXAsTOZwUBPzHEnjDq1jFCp2a4wjVHeVKDb3ZCs5muV4WEsiCw a5qlbmjQKwLCWjnWG2KtK9z0PQ2NT59PAsdp7Ttb1KWzgCZbmfFnhBv8Ifom+o4ZbYibLXxgttlq w83obDdnTmpObC2gMVw6A9RXAF7gfwvp4XOsqR9x9RY0X82gB6podeoMLtVQp6JfSA0NpXceq6iK 9GHiiraiOS48wbSho7XrYUTz6hJhOwXcOeXrPw8laUAladJOzOgyAezhkocRO1pf0dx/jte39ChX tX1KqsjmktwaIz/2zcCYOBzTXjg0w+GMoKpVHnjtVKsVqupRQbhmfs23O9pB+KG3fO5PBLZCM5o6 EkdhMBzLdvq1/Khip4OEXjdt2HO77Tz3twtfy4g8a1Vtpop1/D7WZp2q81KOPwIMANCcdXDyL+92 AAAAAElFTkSuQmCC"
          transform="rotate(-.756 88739.488 -71362.652) scale(.91928)"
          overflow="visible"
          opacity={0.15}
        /> */}
        <circle
          transform="rotate(-.769 978.679 1195.809) scale(.99999)"
          className="prefix__st4"
          cx={978.8}
          cy={1195.8}
          r={10.9}
        />
        <circle
          className="prefix__st5"
          cx={978.8}
          cy={1195.6}
          r={8}
        />
      </g>
      <g>
        <text
          transform="translate(960.665 1233.824)"
          className="prefix__st10 prefix__st8 prefix__st23">
          {"P-013A"}
        </text>
      </g>
      <g>
        <text
          transform="translate(960.665 1298.2)"
          className="prefix__st10 prefix__st8 prefix__st23">
          {"P-013B"}
        </text>
      </g>
      <g>
        <path
          className="prefix__st24"
          d="M951.6 1278.4c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        />
        <path
          className="prefix__st4"
          d="M951.6 1266.7c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        />
      </g>
      <g>
        <path
          className="prefix__st24"
          d="M951.6 1216.4c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        />
        <path
          className="prefix__st4"
          d="M951.6 1204.7c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        />
      </g>
      <g>
        <path
          className="prefix__st24"
          d="M1229.2 1257.2c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        />
        <path
          className="prefix__st4"
          d="M1229.2 1245.5c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        />
      </g>
      <path
        className="prefix__st0"
        d="M928.3 1272.1h20.4"
      />
      <g>
        <path
          className="prefix__st1"
          d="M999.9 1308.2h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
        />
        {/* <image
          width={38}
          height={37}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAlCAYAAAAuqZsAAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2JJREFUeNrsmHtT01AQxZtXy5sK VmHUUfT7fyaVcVAQKG0pUJImbpizzul6m3tT+hdjZs6Elvbml7OPu2mn8/94IUe0pu/61qnMee1g EZ1dWgalKunvtYExQCxKRCmU4L3IAVTDzEUFNA8BjFq6FAOkK+pBG3idQBGB1RC56FH0AD1CDNga zLrUBci2aFe0h783CS4mMIWaiiaiMc53eD8HXGkvnAY6luDCW6J90aFoIHotegXIDQqrhrC+8L1o JLoU/cb5GoARADsWLg1wq3YggzM1xJHoHXQEuB0Ci+lCOdy5EZ2LfmIddXdEzi7ApQFQKZzqi45F H0Unog8AOwBY15FjOfJqDJf7AMsIhHMt0pxLA0LYw4UHgPks+iJ6D7f2jFuu5N9HuDcBxfn3iGpd qFQfmLpVh/AtwD6RW326WLKkh81xcxnA6/dmolvk2RSu5vjs0lByn+rC+j7AjgE0oLB0CSpygHGP U6emyLshwjyFc5pjZZNjGsZt5FEN8wa5smdaROTJVc6pGVJggHUvsNaUKvRvBTXl1zZy5AAu7RBU 3GL34AjoegeOm3SC2WrUxO9Du8g520xDeiHvGptYdxegPXL+SbFnkR5AdiC7yCoTSUI7iG5nmd1v faHMzH6oLSHurHZEtKfaASD2OebaI+0XV4VqWnfhiBtmKB5XcsfIsupRhcxkTWBzlO89SvnO1QhX ACpDZrS44cs5es4UTVAb4Yzg2jpXAsTOZwUBPzHEnjDq1jFCp2a4wjVHeVKDb3ZCs5muV4WEsiCw a5qlbmjQKwLCWjnWG2KtK9z0PQ2NT59PAsdp7Ttb1KWzgCZbmfFnhBv8Ifom+o4ZbYibLXxgttlq w83obDdnTmpObC2gMVw6A9RXAF7gfwvp4XOsqR9x9RY0X82gB6podeoMLtVQp6JfSA0NpXceq6iK 9GHiiraiOS48wbSho7XrYUTz6hJhOwXcOeXrPw8laUAladJOzOgyAezhkocRO1pf0dx/jte39ChX tX1KqsjmktwaIz/2zcCYOBzTXjg0w+GMoKpVHnjtVKsVqupRQbhmfs23O9pB+KG3fO5PBLZCM5o6 EkdhMBzLdvq1/Khip4OEXjdt2HO77Tz3twtfy4g8a1Vtpop1/D7WZp2q81KOPwIMANCcdXDyL+92 AAAAAElFTkSuQmCC"
          transform="rotate(-.756 98260.849 -71300.61) scale(.91928)"
          overflow="visible"
          opacity={0.15}
        /> */}
        <circle
          transform="rotate(-.769 978.668 1322.976) scale(.99999)"
          className="prefix__st4"
          cx={978.8}
          cy={1322.9}
          r={10.9}
        />
        <circle
          className="prefix__st5"
          cx={978.8}
          cy={1322.7}
          r={8}
        />
      </g>
      <g>
        <text
          transform="translate(960.665 1360.084)"
          className="prefix__st10 prefix__st8 prefix__st23">
          {"P-013C"}
        </text>
      </g>
      <g>
        <path
          className="prefix__st24"
          d="M951.6 1340.3c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        />
        <path
          className="prefix__st4"
          d="M951.6 1328.6c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        />
      </g>
      <path
        className="prefix__st0"
        d="M322.8 446.8h48.5"
      />
      <g>
        <path
          className="prefix__st14"
          d="M628.9 483.4v-20c0-2.8-2.1-5-4.6-5h-32.7c-2.6 0-4.6 2.2-4.6 5v20M607.9 433.4v25"
        />
        <path
          className="prefix__st26"
          d="M612.8 438.6c0 .9-.7 1.6-1.6 1.6h-6.3c-.9 0-1.6-.7-1.6-1.6 0-.4.2-.8.5-1.1l3.1-3.1c.6-.6 1.5-.6 2.2-.1l3.2 3.2c.3.3.5.7.5 1.1z"
        />
        <path
          className="prefix__st4"
          d="M604.2 438.6c0-.2.1-.3.2-.4l3.1-3.1c.2-.2.6-.2.9 0l3.1 3.1c.1.1.2.3.2.4 0 .3-.2.6-.6.6h-6.3c-.3 0-.6-.3-.6-.6m-2 0c0 1.4 1.2 2.6 2.6 2.6h6.3c1.4 0 2.6-1.2 2.6-2.6 0-.7-.3-1.3-.8-1.8l-3.1-3.1-.1-.1-.1-.1c-1.1-.9-2.6-.8-3.5.2l-3.1 3.1c-.5.5-.8 1.1-.8 1.8z"
        />
      </g>
      <g>
        <text
          transform="translate(289.969 891.717)"
          className="prefix__st6">
          <tspan
            x={0}
            y={0}
            className="prefix__st10 prefix__st8 prefix__st23">
            {"Hidr\xF3xido"}
          </tspan>
          <tspan
            x={1.5}
            y={13.2}
            className="prefix__st10 prefix__st8 prefix__st23">
            {"de Sodio"}
          </tspan>
        </text>
        <path
          className="prefix__st2"
          d="M333.5 812h-15.2c-1 0-1.8.8-1.8 1.8V853"
        />
        <path
          className="prefix__st1"
          d="M323 821h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
        />
        <path
          className="prefix__st2"
          d="M291.4 811.8h15.2c1 0 1.8.8 1.8 1.8v39.2"
        />
        <path
          className="prefix__st1"
          d="M301.9 820.8h-14c-.8 0-1.5-.7-1.5-1.5v-14c0-.8.7-1.5 1.5-1.5h14c.8 0 1.5.7 1.5 1.5v14c0 .8-.7 1.5-1.5 1.5z"
        />
        <path
          className="prefix__st25"
          d="M293 832.7h38.8v40H293z"
        />
        <path
          className="prefix__st2"
          d="M331.8 826v45.2c0 .7-.4 1.3-.8 1.3h-37.1c-.5 0-.8-.6-.8-1.3V826"
        />
      </g>
      <g>
        <path
          className="prefix__st14"
          d="M333.4 801.7v-20c0-2.8-2.1-5-4.6-5h-32.7c-2.6 0-4.6 2.2-4.6 5v20M312.5 751.7v25"
        />
        <path
          className="prefix__st26"
          d="M317.3 757c0 .9-.7 1.6-1.6 1.6h-6.3c-.9 0-1.6-.7-1.6-1.6 0-.4.2-.8.5-1.1l3.1-3.1c.6-.6 1.5-.6 2.2-.1l3.2 3.2c.3.3.5.7.5 1.1z"
        />
        <path
          className="prefix__st4"
          d="M308.7 757c0-.2.1-.3.2-.4l3.1-3.1c.2-.2.6-.2.9 0l3.1 3.1c.1.1.2.3.2.4 0 .3-.2.6-.6.6h-6.3c-.3 0-.6-.3-.6-.6m-2 0c0 1.4 1.2 2.6 2.6 2.6h6.3c1.4 0 2.6-1.2 2.6-2.6 0-.7-.3-1.3-.8-1.8l-3.1-3.1-.1-.1-.1-.1c-1.1-.9-2.6-.8-3.5.2l-3.1 3.1c-.5.5-.8 1.1-.8 1.8z"
        />
      </g>
      <g>
        <path
          className="prefix__st14"
          d="M928.2 483.4v-20c0-2.8-2.1-5-4.6-5h-32.7c-2.6 0-4.6 2.2-4.6 5v20M907.3 433.4v25"
        />
        <path
          className="prefix__st26"
          d="M912.1 438.6c0 .9-.7 1.6-1.6 1.6h-6.3c-.9 0-1.6-.7-1.6-1.6 0-.4.2-.8.5-1.1l3.1-3.1c.6-.6 1.5-.6 2.2-.1l3.2 3.2c.3.3.5.7.5 1.1z"
        />
        <path
          className="prefix__st4"
          d="M903.5 438.6c0-.2.1-.3.2-.4l3.1-3.1c.2-.2.6-.2.9 0l3.1 3.1c.1.1.2.3.2.4 0 .3-.2.6-.6.6h-6.3c-.3 0-.6-.3-.6-.6m-2 0c0 1.4 1.2 2.6 2.6 2.6h6.3c1.4 0 2.6-1.2 2.6-2.6 0-.7-.3-1.3-.8-1.8l-3.1-3.1-.1-.1-.1-.1c-1.1-.9-2.6-.8-3.5.2l-3.1 3.1c-.5.5-.8 1.1-.8 1.8z"
        />
      </g>
      <g>
        <path
          className="prefix__st14"
          d="M1076.1 483.4v-20c0-2.8-2.1-5-4.6-5h-32.7c-2.6 0-4.6 2.2-4.6 5v20M1055.1 433.4v25"
        />
        <path
          className="prefix__st26"
          d="M1060 438.6c0 .9-.7 1.6-1.6 1.6h-6.3c-.9 0-1.6-.7-1.6-1.6 0-.4.2-.8.5-1.1l3.1-3.1c.6-.6 1.5-.6 2.2-.1l3.2 3.2c.3.3.5.7.5 1.1z"
        />
        <path
          className="prefix__st4"
          d="M1051.4 438.6c0-.2.1-.3.2-.4l3.1-3.1c.2-.2.6-.2.9 0l3.1 3.1c.1.1.2.3.2.4 0 .3-.2.6-.6.6h-6.3c-.3 0-.6-.3-.6-.6m-2 0c0 1.4 1.2 2.6 2.6 2.6h6.3c1.4 0 2.6-1.2 2.6-2.6 0-.7-.3-1.3-.8-1.8l-3.1-3.1-.1-.1-.1-.1c-1.1-.9-2.6-.8-3.5.2l-3.1 3.1c-.5.5-.8 1.1-.8 1.8z"
        />
      </g>
      <path
        className="prefix__st1"
        d="M767.7 556.7h-23.1c-8.5 0-15.4-6.9-15.4-15.4v-88.7c0-8.5 6.9-15.4 15.4-15.4h23.1c8.5 0 15.4 6.9 15.4 15.4v88.7c0 8.4-6.9 15.4-15.4 15.4zM774.1 433.4h-35.3c-2.6 0-4.7-2.1-4.7-4.7V416c0-2.6 2.1-4.7 4.7-4.7h35.3c2.6 0 4.7 2.1 4.7 4.7v12.6c0 2.7-2.1 4.8-4.7 4.8z"
      />
      <g>
        <text
          transform="translate(743.178 573.346)"
          className="prefix__st10 prefix__st8 prefix__st23">
          {"F-001"}
        </text>
      </g>
      <g>
        <image
          width={165}
          height={250}
          xlinkHref="data:image/png;base64,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"
          transform="translate(1121.51 431.9)"
          overflow="visible"
          opacity={0.3}
        />
        <path
          className="prefix__st4"
          d="M1227.8 672.3h43.1c3.5 0 6.3-2.8 6.3-6.3V453.7c0-3.5-2.8-6.3-6.3-6.3h-51.6c-1.2 0-2.4-.4-3.4-1.2l-.4-.3c-6.5-6.5-6.5-6.5-12.9.1-1 .9-2.2 1.4-3.5 1.4h-61.7c-3.4 0-6.3 2.8-6.3 6.3V666c0 3.4 2.8 6.3 6.3 6.3h90.4z"
        />

        <path
          className="prefix__st22"
          d="M1142.2 560.1h124"
        />
      </g>
      <circle
        className="prefix__st27"
        cx={1207.3}
        cy={422.5}
        r={9.2}
      />
      <circle
        className="prefix__st27"
        cx={164.2}
        cy={743.9}
        r={9.2}
      />
      <g>
        <text
          transform="translate(1105.603 1282.91)"
          className="prefix__st10 prefix__st8 prefix__st23">
          {"PSH-017"}
        </text>
      </g>
      <circle
        className="prefix__st27"
        cx={164.2}
        cy={1078.5}
        r={9.2}
      />
      <g>
        <image
          width={39}
          height={39}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA6RJREFUeNrsmOtS2zAQhSNbjgkN SaEtLW2n7/9epTeuAXJxcGxX6pxlDoucyCnQ/sAzZwiOrXxe7a6O3Ou9HC/Hvz3MM4zZ/A+Ahv6G AJttgc0jgLGSNYAhPRkgA7FSgjSAqKGKPtexoGZLOIHxsk4ZyRKkgK2cSmgFVTGgdgs4AfMwfacd pwHkP+cE6SFunZZOBWmJ8wJbt+Wn2QLOAswDDZ32nEbQK6ddfG/w4x5m7jRVmhHsSk195wgyXA6Q sdOB0xtonyBzAiwAc+105XTpdOE0wbkprinxW/cgbcec6wPAw7xzOnL64PQesGN838c9AjgHjAc7 czp1OqHrZCZLgmtiABkuw/S9djp0+kwSwD1ck1E0fK4tEKkJrhshRTKC42KpYwC5v1kUwB6m86PT F+gTgDl6qariJSDHGEPSIFGVviK4P23KRuYeT+0hACV6Rzg/VBXco2gMEFmp9D7BSZVzZVebADl6 IcAjiKd2B1OWqGmTqbakhCLrp/4GkspeSRRtRP7x9EpxeL1FPg5VVEwAUC+FNeBmyMsLquwMkaza clBHLwPAEEAHqmJzXJMG+ir/n9LyN8ADj6ERUkBSJEUU73JlXQQzasojGnATXJvb4YfexTicmykH aVORCGCOwYY0YD+QczHrfqLW8D6NlSrA1ggalYN6zc0JLnkkw5EGcvjB4CZgPnmZs4HBuqzpZs3v tU5hzMHdve5iOCPGXOsP7Zr9QxPwc9JMy4CfM5FQ8jfkEx+AJhFPWNJSNYcK6lV1h2jKmPzAoVXk zh/GAspif00WaaG8XNMRriCfOMd48tBNjFngaSjIjYjGqGirWoguHF7uKuVuxCNe0TJXbnIzHIma nvYGYGfKHLAxsIG+KNFYAU68oTeu59CEjOu9XEwjzEKouWaBFURXekUzcEtr7zUe8qfTMfQDoFNc d5eH6V9sNUPbSl2ZS9qTyAycAugr9B3nJpj6kvIwyvJLYi+QKxl5OY6KTPuAmjlP7Qz3+0j9cvoG neD8QudfTJHIIbszQ3apRGSuYJX2yZWI9WoCRXZOe5IT3Dtt6wg2srHW9EO815ConMGK8Z4koYcr qGovoQnu5V1dpduV6bi4s3nIyS4NoV3lrBu1J5mpfbH00lL3v2037iZQ0Tm0Q9aJq1tXchFYMqu2 9b3ruxkTqOZ1TqehKFbqvYwGax7z5VEbbBKwUE2gRz7p260QaKi5t70j7D3H+8G2MUyk1Yo+fgsw AB9IteUeJvRmAAAAAElFTkSuQmCC"
          transform="translate(738.654 403.576) scale(.8974)"
          overflow="visible"
          opacity={0.15}
        />
        <circle
          className="prefix__st4"
          cx={756.5}
          cy={421.3}
          r={10.9}
        />

        {/* F-001 color */}
        <circle
          className="cursorPointer"
          onClick={() => {
            loadGrafico(4, "Estado F-001", true);
          }}
          fill={getColor(datosScada.F001)}
          cx={756.5}
          cy={421.1}
          r={8}
        />
      </g>
      <g>
        <path
          className="prefix__st1"
          d="M816 539h6v17.7h-6z"
        />
        <path
          className="prefix__st1"
          d="M830.4 529.3c1.2 1.2 1.2 3.3 0 4.5l-9.1 9.1c-1.2 1.2-3.3 1.2-4.5 0l-9.1-9.1c-1.2-1.2-1.2-3.3 0-4.5"
        />
      </g>
      <g>
        <path
          className="prefix__st24"
          d="M206.9 415.8c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
        />
        <path
          className="prefix__st4"
          d="M218.6 415.8c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
        />
      </g>
      <path
        className="prefix__st0"
        d="M114.2 345.8h20.4"
      />
      <g>
        <path
          className="prefix__st24"
          d="M111.2 352c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        />
        <path
          className="prefix__st4"
          d="M111.2 340.3c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        />
      </g>
      <path
        className="prefix__st0"
        d="M729.4 422.5H491.6"
      />
      <path
        className="prefix__st1"
        d="M435.3 732.5c0-6.7-7.8-12.1-17.5-12.1s-17.5 5.5-17.5 12.1h.1c-.1.3-.1.7-.1 1.1v67.6c0 3.5 3.4 6.4 7.6 6.8v6.2h5.2V808h9v6.1h5.2v-6.2c4.5-.2 8-3.2 8-6.8v-67.6c0-.3-.1-.7-.1-1.1h.1zM476 732.5c0-6.7-7.8-12.1-17.5-12.1s-17.5 5.5-17.5 12.1h.1c-.1.3-.1.7-.1 1.1v67.6c0 3.5 3.4 6.4 7.6 6.8v6.2h5.2V808h9v6.1h5.2v-6.2c4.5-.2 8-3.2 8-6.8v-67.6c0-.3-.1-.7-.1-1.1h.1z"
      />
      <path
        className="prefix__st0"
        d="M480.1 743.9H500M526.3 743.9h73.4M577.7 743.9h73.4M752.4 717.7H952"
      />
      <g>
        <text
          transform="translate(403.42 834.019)"
          className="prefix__st10 prefix__st8 prefix__st23">
          {"F-008"}
        </text>
      </g>
      <g>
        <text
          transform="translate(444.079 834.019)"
          className="prefix__st10 prefix__st8 prefix__st23">
          {"F-009"}
        </text>
      </g>
      <g>
        <text
          transform="translate(130.018 368.696)"
          className="prefix__st10 prefix__st8 prefix__st23">
          {"VX-001"}
        </text>
      </g>
      <g>
        <path
          className="prefix__st1"
          d="M520.4 734.9h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM505.2 738.8l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        />
        <path
          className="prefix__st1"
          d="M520.8 749.4l-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        />
        <path
          className="prefix__st2"
          d="M513 733.9v10"
        />
        <path
          className="prefix__st3"
          d="M504 725.9h18M513 726.9v8"
        />
      </g>
      <g>
        <text
          transform="translate(495.09 766.89)"
          className="prefix__st10 prefix__st8 prefix__st23">
          {"VX-112"}
        </text>
      </g>
      <path
        className="prefix__st0"
        d="M673.7 774.9h-16.4c-2.8 0-5-2.3-5-5V718c0-2.8 2.3-5 5-5h16.4"
      />

      <circle
        className="prefix__st27"
        cx={842.7}
        cy={717.4}
        r={9.2}
      />
      <g>
        <path
          className="prefix__st1"
          d="M1088.2 731.5H968.4c-3 0-5.5-2.2-5.5-4.9v-17.1c0-2.7 2.4-4.9 5.5-4.9h119.8c3 0 5.5 2.2 5.5 4.9v17.1c-.1 2.8-2.6 4.9-5.5 4.9z"
        />
        <path
          className="prefix__st7"
          d="M1089.4 731.5H968.6c-3.1 0-5.7-2.2-5.7-4.9v-17.1c0-2.7 2.6-4.9 5.7-4.9l120.9 25.9c.6.3.5 1-.1 1z"
        />
        <path
          className="prefix__st1"
          d="M1088.2 762.3H968.4c-3 0-5.5-2.2-5.5-4.9v-17.1c0-2.7 2.4-4.9 5.5-4.9h119.8c3 0 5.5 2.2 5.5 4.9v17.1c-.1 2.8-2.6 4.9-5.5 4.9z"
        />
        <path
          className="prefix__st7"
          d="M1089.4 762.3H968.6c-3.1 0-5.7-2.2-5.7-4.9v-17.1c0-2.7 2.6-4.9 5.7-4.9l120.9 25.9c.6.3.5 1-.1 1z"
        />
        <path
          className="prefix__st1"
          d="M1088.2 793.2H968.4c-3 0-5.5-2.2-5.5-4.9v-17.1c0-2.7 2.4-4.9 5.5-4.9h119.8c3 0 5.5 2.2 5.5 4.9v17.1c-.1 2.7-2.6 4.9-5.5 4.9z"
        />
        <path
          className="prefix__st7"
          d="M1089.4 793.2H968.6c-3.1 0-5.7-2.2-5.7-4.9v-17.1c0-2.7 2.6-4.9 5.7-4.9l120.9 25.9c.6.2.5 1-.1 1z"
        />
        <path
          className="prefix__st1"
          d="M1088.2 824H968.4c-3 0-5.5-2.2-5.5-4.9V802c0-2.7 2.4-4.9 5.5-4.9h119.8c3 0 5.5 2.2 5.5 4.9v17.1c-.1 2.7-2.6 4.9-5.5 4.9z"
        />
        <path
          className="prefix__st7"
          d="M1089.4 824H968.6c-3.1 0-5.7-2.2-5.7-4.9V802c0-2.7 2.6-4.9 5.7-4.9l120.9 25.9c.6.2.5 1-.1 1z"
        />
      </g>
      <path
        className="prefix__st0"
        d="M958.6 813.6h-16.4c-2.8 0-5-2.3-5-5v-90M937.7 748.7h20.4M937.2 779.7h20.4M1095.4 813.6h16.4c2.8 0 5-2.3 5-5v-90M1116.3 748.7h-20.4M1116.8 779.7h-20.4"
      />
      <g>
        <path
          className="prefix__st24"
          d="M952.8 723.5c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        />
        <path
          className="prefix__st4"
          d="M952.8 711.8c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        />
      </g>
      <g>
        <image
          width={165}
          height={250}
          xlinkHref="data:image/png;base64,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 AAMAqNkco9ZzyU8AAAAASUVORK5CYII="
          transform="translate(85.51 811.9)"
          overflow="visible"
          opacity={0.3}
        />
        <path
          className="prefix__st4"
          d="M144.5 821.2h-43.1c-3.5 0-6.3 2.8-6.3 6.3v212.3c0 3.5 2.8 6.3 6.3 6.3H153c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.1 1-.9 2.2-1.4 3.5-1.4h61.7c3.4 0 6.3-2.8 6.3-6.3V827.5c0-3.4-2.8-6.3-6.3-6.3h-90.4z"
        />

        <path
          className="prefix__st22"
          d="M106.2 934.2h124"
        />
      </g>
      <g>
        <path
          className="prefix__st24"
          d="M288.8 1107.9c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
        />
        <path
          className="prefix__st4"
          d="M300.5 1107.9c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
        />
      </g>

      <circle
        className="prefix__st27"
        cx={570.7}
        cy={743.9}
        r={9.2}
      />

      <g>
        <path
          className="prefix__st14"
          d="M1095.4 821.3h156.4M1247 876.2h-9.3c-2.8 0-5-2.3-5-5v-49.4M1295.4 821.8v49.4c0 2.8-2.3 5-5 5h-8.5"
        />
        <path
          className="prefix__st1"
          d="M1271.2 812.3h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM1256 816.2l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
        />
        <path
          className="prefix__st1"
          d="M1271.6 826.8l-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
        />
        <path
          className="prefix__st2"
          d="M1263.8 811.3v10"
        />
        <path
          className="prefix__st3"
          d="M1254.8 803.3h18M1263.8 804.3v8"
        />
        <g>
          <text
            transform="translate(1245.963 842.261)"
            className="prefix__st10 prefix__st8 prefix__st23">
            {"VX-120"}
          </text>
        </g>
        <g>
          <text
            transform="translate(1245.963 899.179)"
            className="prefix__st10 prefix__st8 prefix__st23">
            {"VA-121"}
          </text>
        </g>
        <g>
          <path
            className="prefix__st1"
            d="M1277.7 882.4H1251c-1.2 0-2.2-1-2.2-2.2v-9.7c0-1.2 1-2.2 2.2-2.2h26.7c1.2 0 2.2 1 2.2 2.2v9.7c-.1 1.3-1 2.2-2.2 2.2z"
          />
          <path
            className="prefix__st28"
            d="M1264.3 857.5v10.9M1255.6 857.5h17.7"
          />
        </g>
        <path
          className="prefix__st14"
          d="M1324.7 852v-26.1c0-2.3-1.8-4.1-4.1-4.1H1275"
        />
        <g>
          <path
            className="prefix__st1"
            d="M1321.6 864.4h6v17.7h-6z"
          />
          <path
            className="prefix__st1"
            d="M1336 854.7c1.2 1.2 1.2 3.3 0 4.5l-9.1 9.1c-1.2 1.2-3.3 1.2-4.5 0l-9.1-9.1c-1.2-1.2-1.2-3.3 0-4.5"
          />
        </g>
      </g>
      <circle
        cx={1150.3}
        cy={820.8}
        r={9.2}
        fill="#fff"
        stroke="#323e48"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
      <g>
        <image
          width={165}
          height={251}
          xlinkHref="data:image/png;base64,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 AEGzwGrOQiwWAAAAAElFTkSuQmCC"
          transform="translate(1063.51 831.9)"
          overflow="visible"
          opacity={0.3}
        />
        <path
          className="prefix__st4"
          d="M1169.3 1072.9h43.1c3.5 0 6.3-2.8 6.3-6.3V854.3c0-3.5-2.8-6.3-6.3-6.3h-51.6c-1.2 0-2.4-.4-3.4-1.2l-.4-.3c-6.5-6.5-6.5-6.5-12.9.1-1 .9-2.2 1.4-3.5 1.4h-61.7c-3.4 0-6.3 2.8-6.3 6.3v212.3c0 3.4 2.8 6.3 6.3 6.3h90.4z"
        />

        <path
          className="prefix__st22"
          d="M1083.7 960.6h124"
        />
      </g>
      <path
        className="prefix__st0"
        d="M378.3 1108.4v-21.1c0-5.7 4.6-10.3 10.3-10.3h467.8c5.1 0 9.2 4.1 9.2 9.2v73.2c0 5.1-4.1 9.2-9.2 9.2h-55.8"
      />
      <g>
        <text
          transform="translate(737.908 1199.055)"
          className="prefix__st10 prefix__st30 prefix__st31">
          {"UV-001"}
        </text>
      </g>
      <path
        d="M1341.4 1273.3h-87.7c-3.8 0-7-3.1-7-7v-30.9c0-3.9 3.2-7 7-7h87.7c3.8 0 7 3.1 7 7v30.9c0 3.9-3.1 7-7 7z"
        fill="#f2f2f2"
      />
      <g>
        <text transform="translate(1273.491 1248.119)">
          <tspan
            x={0}
            y={0}
            className="prefix__st10 prefix__st30 prefix__st31">
            {"Consumo"}
          </tspan>
          <tspan
            x={6.5}
            y={14.4}
            className="prefix__st10 prefix__st30 prefix__st31">
            {"Cliente"}
          </tspan>
        </text>
      </g>
      <g>
        <path
          className="prefix__st1"
          d="M792.7 1182.5h-72.4c-1.2 0-2.2-1-2.2-2.2v-22.1c0-1.2 1-2.2 2.2-2.2h72.4c1.2 0 2.2 1 2.2 2.2v22.1c0 1.2-1 2.2-2.2 2.2z"
        />
        <path
          className="prefix__st28"
          d="M718.1 1187.4v-36.3M794.9 1187.4v-36.3"
        />
      </g>
      <g>
        <image
          width={39}
          height={39}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7FJREFUeNrsmHtT4jAUxZs28lBA XXUY9/n9P9e6665PUKEVSrvpzrnM8ZJCijj+Y2fOtFYIv9zk3pwkij6uj+t9L/OGbcq9hN4V0HjA 6gAbAZsdgYliyHiACnouQ0HNDsAqoESJIQtoQSo8wDsD5EhZALVIe3gfU+RmTjnu8pwTbC2o3RIu AUgb2nc6wL0DUIsfnDs9O6VOU9wzaKZAIw1pt4SrALpOPaeB05HTIZ4PACmAM4BNnB6hsdMT3qUE ugJpt4TbB9AnpzPoxOkY0F1EuED0pgCqwO6dbqER3k0Q0RVI23DO7QGuitip02foHJDV+z4ALc2/ DIAjgF3hc3/RaUNRy2lebgTkbLUYuj7gvjh9d/oGyDMa4jYlSU7D/IBIH+FzLXwuIii5/4cOjaAM 7QGGcQiwH4Ac4n0fcDqLcwz1QHXCUifmlN3LrLYB0YspegNE7xwR/IrnU8B1MA1iGjZRG/9vo7MJ JVFG2T2jrDY2cP7J3BPAIcCGGLIB5l2L4HhelQCyVMxlfk4w9GPcp4i2WQeoVwrO3BPMt1Ma1g5F JVbtlJ4lUZIhBViVONcY+gd0JN+UJDy8DHiM8nKEklIH51utEtyljvbVvJQpIm0VcYME2VcN9qgg 18H5QHkl6gC06+moiQIbTTCxu+hlD7Bt6q3ZckVKaP1u0bulZYsDLBQ3xJloPc6liZk1HgcUq3ka FEFeSXyNbXOVG8xrGQKojWWh/NyrrHxNuyvuO17zRXleoMrPUJ8y3Oc1jUaBnS5oBZnTSvKi85si KL2boWZNsOiLr9ONhkIulE9MqdMvIOPAxnixl4o/IchFAGTpgRMb9uRpL8jNSIPPBFj5uTvyfuxI 7JpRYVOQkT8coc1HD2CZNNggWbL5HWXt9dqr59uCbFcKmKqTl04X0B+8m/CoJIFeMFJlZo/qIMMV nszkqE0BdwugX04/nX5jLR6hA8t5mDQssBHVwKgGJqesZyv1iKG8hpO+AJyOHtutIMuvE+WOzOgc 78ZwNwOalzL0Aj4lyCuK4KUHLnjTVJIdF3sk1wJ/P+AHbuB2erQniTy+7x6fvQHoHd5n6HBBG6fg CGpIychMReVQ2XkGTNXObkw7ulQPbdNtZ6m2g77yIxv3LjkTg+9xUeZir1ellVradLE3ZBISdezR 9hx9+JZL1txzVrOTsxlTY5kSVRcjz36XjzoWmw6QXnP85jt68+09ypp9b9AR3C4OMNcdXq5zSWXT AvwWx7/Rtiercv0TYABxdcQTRlLUHwAAAABJRU5ErkJggg=="
          transform="translate(739.015 1151.13) scale(.8974)"
          overflow="visible"
          opacity={0.15}
        />
        <circle
          className="prefix__st4"
          cx={756.9}
          cy={1168.9}
          r={10.9}
        />

        {/* UV-001 color*/}
        <circle
          onClick={() => {
            loadGrafico(14, "Estado UV-001", true);
          }}
          className="cursorPointer"
          fill={getColor(datosScada.UV001)}
          cx={756.9}
          cy={1168.7}
          r={8}
        />
      </g>
      <path
        className="prefix__st0"
        d="M607.2 1168.6h105.6"
      />

      <path
        className="prefix__st0"
        d="M529.2 1224.4h-16.4c-2.8 0-5-2.3-5-5v-51.9c0-2.8 2.3-5 5-5h16.4M949.2 1333.7h-16.4c-2.8 0-5-2.3-5-5v-112.9c0-2.8 2.3-5 5-5h16.4"
      />
      <g>
        <path
          className="prefix__st24"
          d="M706.6 1174.9c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        />
        <path
          className="prefix__st4"
          d="M706.6 1163.2c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        />
      </g>
      <g>
        <path
          className="prefix__st24"
          d="M372 1107.9c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
        />
        <path
          className="prefix__st4"
          d="M383.7 1107.9c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
        />
      </g>
      <path
        className="prefix__st0"
        d="M928.3 1272.2H243.5c-3.6 0-6.5-2.9-6.5-6.5v-63c0-5.1 4.1-9.2 9.2-9.2h23.2M1231.4 1250.7h-224.1M1006.8 1186.5h17.1c2.9 0 5.3 2.4 5.3 5.3v117.8c0 2.9-2.4 5.3-5.3 5.3h-17.1"
      />
      <g>
        <ellipse
          className="prefix__st1"
          cx={1127.9}
          cy={1250.9}
          rx={14.9}
          ry={15.4}
        />
        <image
          width={35}
          height={34}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAiCAYAAADVhWD8AAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAzpJREFUeNq0WIlu2kAUxGuDKYEm hJY2bVq1//9TvaJUScoRzgC281zNk4aXNbaJQBqtr92dnX3XEjTq/4KK32WnGjigNijpm1Gb1SEW 1CDhDAJPfyWQEvS+lFRUQkQR4tsmEOEZE1IiCbATbNHuqhAKSog4TBwL2oIOEINUaMikmPhJsCI8 gVhCalUiw2o0QaIruADOcd8GUYd+KSbbCBaCmWAimOJ6CVK7IkLRAUWaUCGffCD4IBgK3uFZx5DJ SJV88rHgXnAneMD9jFR6QSgqUEYVOQeBz4IvaIdQqIzMSPBX0MNYuqWP9O0eocijSv6shUFyRa4F 3wXfcJ0r85a2Sfup9+g2TbCYM9gYb2fqc32rjNpJPkBfcCX4SmQ+4nnngAEnINsjYw/J09TDEvp+ Txm1kxCdu1DgCttzjesB3sUe12ZCMdTVbcxAYg1DVg9L2OXtNkVkK+8Fn4DceC/N/ruCoBeawKj2 sYK9qIctsKU7u03Wgy6gzBCk+rT3UQGRBk0e0nUPk+ZG/Q/edQ9SK/KsPQN0pEwPhC6NER4i0vDk L/XKM4zXR2vj1H/ijgbhaNtBhy4ZYRUilhQvsINF9goWF7iC8N/CABz23REVAee1fKw3QBtzsDe+ mIC9iuFqlhxFCjUJoUnGtVd70p/zuGZKZUBiY8ERc3A23xISisJZw+QV7rRBgLKpvy6JjGobLivW mCPhBbIyXIvkUXIOlKb+Copo5J0BC8+YmfOosqZaZETRsiohLjs1BWjiHKOd4/neeGGBJ2mw8rmi q1CMJ7SwR0TcG8FPwW+UFhMitEcmMLFGU0OLiPjiTWaQUmbWXPRARHL8wbM52U3DKuM7kjgKWr5y IaVyYIvB1eamRpEfgl9QZQqyB7ep6JxjXV4nVq9bY/AlVXl3UEGJ5O0t3s3JS71lpxLYUZbVbUnI sEeUxdsmQ/vKzhvgFll7btw6O1QDayEUQE69X8IbBpR5Y8r8dQryXZWCPKOYs6Ht0bp2jMG1pGwZ ZV51VKlyiAsxaUzu3vaUACc5xNl3zniVHm999U3Z8TY75nhbdOZ2Jhb5CvKjD/516pOqf4uc7C+R 1/SrXW48CzAA0DKLkY9qDjQAAAAASUVORK5CYII="
          transform="translate(1110.51 1233.9)"
          overflow="visible"
          opacity={0.15}
        />
        <circle
          className="prefix__st4"
          cx={1127.9}
          cy={1250.9}
          r={10.9}
        />

        {/* PSH-017 color */}
        <circle
          className="cursorPointer"
          onClick={() => {
            loadGrafico(15, "Estado PSH-017", true);
          }}
          fill={getColor(datosScada.PSH017)}
          cx={1127.9}
          cy={1250.8}
          r={8}
        />
      </g>

      <g>
        <image
          width={39}
          height={39}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7FJREFUeNrsmHtT4jAUxZs28lBA XXUY9/n9P9e6665PUKEVSrvpzrnM8ZJCijj+Y2fOtFYIv9zk3pwkij6uj+t9L/OGbcq9hN4V0HjA 6gAbAZsdgYliyHiACnouQ0HNDsAqoESJIQtoQSo8wDsD5EhZALVIe3gfU+RmTjnu8pwTbC2o3RIu AUgb2nc6wL0DUIsfnDs9O6VOU9wzaKZAIw1pt4SrALpOPaeB05HTIZ4PACmAM4BNnB6hsdMT3qUE ugJpt4TbB9AnpzPoxOkY0F1EuED0pgCqwO6dbqER3k0Q0RVI23DO7QGuitip02foHJDV+z4ALc2/ DIAjgF3hc3/RaUNRy2lebgTkbLUYuj7gvjh9d/oGyDMa4jYlSU7D/IBIH+FzLXwuIii5/4cOjaAM 7QGGcQiwH4Ac4n0fcDqLcwz1QHXCUifmlN3LrLYB0YspegNE7xwR/IrnU8B1MA1iGjZRG/9vo7MJ JVFG2T2jrDY2cP7J3BPAIcCGGLIB5l2L4HhelQCyVMxlfk4w9GPcp4i2WQeoVwrO3BPMt1Ma1g5F JVbtlJ4lUZIhBViVONcY+gd0JN+UJDy8DHiM8nKEklIH51utEtyljvbVvJQpIm0VcYME2VcN9qgg 18H5QHkl6gC06+moiQIbTTCxu+hlD7Bt6q3ZckVKaP1u0bulZYsDLBQ3xJloPc6liZk1HgcUq3ka FEFeSXyNbXOVG8xrGQKojWWh/NyrrHxNuyvuO17zRXleoMrPUJ8y3Oc1jUaBnS5oBZnTSvKi85si KL2boWZNsOiLr9ONhkIulE9MqdMvIOPAxnixl4o/IchFAGTpgRMb9uRpL8jNSIPPBFj5uTvyfuxI 7JpRYVOQkT8coc1HD2CZNNggWbL5HWXt9dqr59uCbFcKmKqTl04X0B+8m/CoJIFeMFJlZo/qIMMV nszkqE0BdwugX04/nX5jLR6hA8t5mDQssBHVwKgGJqesZyv1iKG8hpO+AJyOHtutIMuvE+WOzOgc 78ZwNwOalzL0Aj4lyCuK4KUHLnjTVJIdF3sk1wJ/P+AHbuB2erQniTy+7x6fvQHoHd5n6HBBG6fg CGpIychMReVQ2XkGTNXObkw7ulQPbdNtZ6m2g77yIxv3LjkTg+9xUeZir1ellVradLE3ZBISdezR 9hx9+JZL1txzVrOTsxlTY5kSVRcjz36XjzoWmw6QXnP85jt68+09ypp9b9AR3C4OMNcdXq5zSWXT AvwWx7/Rtiercv0TYABxdcQTRlLUHwAAAABJRU5ErkJggg=="
          transform="translate(569.876 518.498) scale(.8974)"
          overflow="visible"
          opacity={0.15}
        />
        <circle
          className="prefix__st4"
          cx={587.7}
          cy={536.3}
          r={10.9}
        />

        {/* Hipoclorito color */}
        <circle
          fill={getColorDispositivo(datosScada.LSL001)}
          cx={587.7}
          cy={536.1}
          r={8}
        />
      </g>
      <g>
        <image
          width={39}
          height={39}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7FJREFUeNrsmHtT4jAUxZs28lBA XXUY9/n9P9e6665PUKEVSrvpzrnM8ZJCijj+Y2fOtFYIv9zk3pwkij6uj+t9L/OGbcq9hN4V0HjA 6gAbAZsdgYliyHiACnouQ0HNDsAqoESJIQtoQSo8wDsD5EhZALVIe3gfU+RmTjnu8pwTbC2o3RIu AUgb2nc6wL0DUIsfnDs9O6VOU9wzaKZAIw1pt4SrALpOPaeB05HTIZ4PACmAM4BNnB6hsdMT3qUE ugJpt4TbB9AnpzPoxOkY0F1EuED0pgCqwO6dbqER3k0Q0RVI23DO7QGuitip02foHJDV+z4ALc2/ DIAjgF3hc3/RaUNRy2lebgTkbLUYuj7gvjh9d/oGyDMa4jYlSU7D/IBIH+FzLXwuIii5/4cOjaAM 7QGGcQiwH4Ac4n0fcDqLcwz1QHXCUifmlN3LrLYB0YspegNE7xwR/IrnU8B1MA1iGjZRG/9vo7MJ JVFG2T2jrDY2cP7J3BPAIcCGGLIB5l2L4HhelQCyVMxlfk4w9GPcp4i2WQeoVwrO3BPMt1Ma1g5F JVbtlJ4lUZIhBViVONcY+gd0JN+UJDy8DHiM8nKEklIH51utEtyljvbVvJQpIm0VcYME2VcN9qgg 18H5QHkl6gC06+moiQIbTTCxu+hlD7Bt6q3ZckVKaP1u0bulZYsDLBQ3xJloPc6liZk1HgcUq3ka FEFeSXyNbXOVG8xrGQKojWWh/NyrrHxNuyvuO17zRXleoMrPUJ8y3Oc1jUaBnS5oBZnTSvKi85si KL2boWZNsOiLr9ONhkIulE9MqdMvIOPAxnixl4o/IchFAGTpgRMb9uRpL8jNSIPPBFj5uTvyfuxI 7JpRYVOQkT8coc1HD2CZNNggWbL5HWXt9dqr59uCbFcKmKqTl04X0B+8m/CoJIFeMFJlZo/qIMMV nszkqE0BdwugX04/nX5jLR6hA8t5mDQssBHVwKgGJqesZyv1iKG8hpO+AJyOHtutIMuvE+WOzOgc 78ZwNwOalzL0Aj4lyCuK4KUHLnjTVJIdF3sk1wJ/P+AHbuB2erQniTy+7x6fvQHoHd5n6HBBG6fg CGpIychMReVQ2XkGTNXObkw7ulQPbdNtZ6m2g77yIxv3LjkTg+9xUeZir1ellVradLE3ZBISdezR 9hx9+JZL1txzVrOTsxlTY5kSVRcjz36XjzoWmw6QXnP85jt68+09ypp9b9AR3C4OMNcdXq5zSWXT AvwWx7/Rtiercv0TYABxdcQTRlLUHwAAAABJRU5ErkJggg=="
          transform="translate(870.422 518.498) scale(.8974)"
          overflow="visible"
          opacity={0.15}
        />
        <circle
          className="prefix__st4"
          cx={888.3}
          cy={536.3}
          r={10.9}
        />

        {/* Metabisulfito color */}
        <circle
          fill={getColorDispositivo(datosScada.LSL002)}
          cx={888.3}
          cy={536.1}
          r={8}
        />
      </g>
      <g>
        <image
          width={39}
          height={39}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA6ZJREFUeNrsWGlz2jAUtGzZhCMp pEmTptf//109pmlpQjiKAxhXntmX2byRsQVk+iWe2ZEx5rF6l1aKotfr9fq/l3lhu9VYAv+doCFE OwgGET4GwViRixXRUmGrPr8YQSaU0GgVSSFVELaEnUTNAV4TQhVShwxIgQT2KxIbhzWwwrgBdhI1 B5CzINRx6Dr0HXq474BkDBIVqUeHvw5LIMeztYfo02X3JFf9+QkInTq8IQzwPCOCOcjNgCnGOZ4L 0UiTtAeQq4gNHS4cLjGOQLIPLxoQrDy2AKl7hzvCBM+X8PQzknaPsHZA7tzhyuHG4T3u34JgTxGU 8E5Bauxwqzwt1zOSNrBaM3hnCEKfHD47fHC4hgdP4eGU/miNMM/h6XO818V7pq4N2QByKQyeIaQ3 IPcF95fwXhcTSagPFvDMGTCg92J8vyFIKzJtPZjAWA9eegevfcR4hecS2oTCJl7pwLMnVOWGikiq WwqmMcS6EXcwcyF4DWIXCPkA71iVUxGF2gLi3TVIzZGfU9wvpfW0CbEUh1TuCMVwgXFIVZvSKsJr b0SNW74r4K05KnsM3MPOalcVG0/+ncBLQyT5CPnUVZ4zNYtBSZ5le5KXp5QiYiuOW+afFMgAhthg RjlnWkqwhFYiaficm085bFv2wBQ/7oFkHwYzte6G6ERexwVWFZiJA4okpUrsBHiuafIJQUs3b7UZ NVMulljJq3gP4aHfK5tmsOvSQrNQ495SnlrPVunEskksaHkuBkTLiUxakUwSo228qCfMWnGjBG3Z xoOylsqCvwC46xcB3iyViM09+lDsNRLkxV46/gMwIy3HM28TUhGxIsPmtIKs2JYN8KCokQm6/YTE gfXs5tpEY0b2HmA/57U4CZBbiZL5urHyJqmuwITcAsR+Ofxw+IbxN4jmkt9JC2I+0WpVxzcqhHoX J8SWFAUm993hJ8TsHO8WbT0YecIXq7wqKA/1Di6nXBNFfUvkvuJ+jO+X3B1sQL8S3TYluVTg2Qyh GSmlnCDEG1Iu1Xt/iCSHdkkTLdsWSURkVvAEV7fk0x0R7JNaLmlyMyI4BrExfr+gjhC0aSqVF7ki hbD8KaucVBF8pDBPVLvykgvduPvEQ4Zw9mjj3vMo6w3lo272uVqVtoecLGgha6n1ZNR2tATj4lkp 6POag48+dikcW6N0fAdItQLhmKdbkefYLfYcYEaePW/jydaxzgdNDeE6FRN0iHnsI2DTIEyD9eM/ AQYApFerhLtt+hwAAAAASUVORK5CYII="
          transform="translate(1018.374 518.498) scale(.8974)"
          overflow="visible"
          opacity={0.15}
        />
        <circle
          className="prefix__st4"
          cx={1036.2}
          cy={536.3}
          r={10.9}
        />

        {/* Antiincrustante color */}
        <circle
          fill={getColorDispositivo(datosScada.LSL003)}
          cx={1036.2}
          cy={536.1}
          r={8}
        />
      </g>
      <g>
        <image
          width={39}
          height={39}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7xJREFUeNrsmHlT2zAQxS1buY9y FXpQvv/3aulBKQRCghM7dmXmLfPYkRPZwPAPmXnjALb4aXe1enIUvX/eP2/7Ma88ZvW9hN4U0NB1 F2AjYPMCYKxY/cxABX0vQ0HNMyMWkxIluaeANqTCA/1igBwtC5gu1MHV4u8CmDtlTmtcM/xOgGsj alvCJXi2Bw1JA/xOxs4Bdq+UEnCOiUQa0raEq6LUdxo5TZz2nD44TZ3GgOzg/jVgFk5z6BbXO8Cu KKJPIG1LuAHA9p0+Qof4eYpIdvGsRO8OYNdOV07/8H2Gv6W4/wmkbZHWPiAqoE9OX5w+O50Q4ACA JSIjEbwB3AXdx/UaEWQQoFGAPaTwAFBnTt+cvjodI9UjTCKhf8ZRvMZ9E6pVU9eOQlOcoKaGGLyC OQXgGWAPEZU+7uVVvEGdTQE2xn28kDK1YIpdgNxOdPROkNpTXI+xSCS1iWrUBZ4fAIwjl6EEUlrZ eQhgRM1Y194J1d0R4EYEp2uqpBqWRl4CZkkr+xa1mgLS2IDai5GyAQD3AXWEaPKqtbTdMZzeCiNa PHNM+hLq4f9VkS1sQPSktQyptRzgOqG0+uB87sYifQOUzBQZGKsSeRgrbtj7ZEDdkJMauDrHI4tO 6lLX5uNYcUCbkRTLzjFCNCUVNmAc35hS2x21h/NkvRE0ntlaNeOeJ3ImEM7XIZIaqxbFDQdjaxU3 jJxe1T7zavReHAcMwt6tUH6utZVXO4f2iY/3xFseZLMpnX5FetJQW0ROwDKPR3wcMw6Y4YYs0xL7 6UJ1/Q35uV0fAcsx0ZQsl550GQfMuMDsluj0N7iKl1vXpGdbStnELjCWjJfxhG0AILuROfzbFZq1 OJJENXezZSwplQX5w2va5sS8PkwoaegHpdX0oS45l9gTLR21jLa3CuqP07nTD6dfMLFzgiySALDI 07OkQVsVLd+K5wV2XwN3DhM7QylJ2QRFsK4n6tQJTE6HoTXAZHHNECWB+w5x9FI+RIUa1g0tFEt2 KUdUbuFu9pQZjSm99wRZuZbfgPxZA1eGLpKI7NEKA0kaV2TjL+Fwxtir5VQnXYAXmVirCyw4SW3G 55HQCJbqAJ5SWlOKyl+yTX0CLAlQDk4zXG/w/JIXBgM2ebOg3yh0yYYNyemwPzRUCis63S0AJQf4 rG5XavrqQxuHhKxSj6DZ03Gz54WzppTWNvq272YiD2hC1sxn+zceFbuMx3Nev2lQ37nDeFyR71Xc q77ANDWNfZtLCrZqL/0K2GwZu5V//C/AAAUfr8l67FWnAAAAAElFTkSuQmCC"
          transform="translate(273.907 836.166) scale(.8974)"
          overflow="visible"
          opacity={0.15}
        />
        <circle
          className="prefix__st4"
          cx={291.8}
          cy={853.9}
          r={10.9}
        />

        {/* Hidroxido de Sodio color */}
        <circle
          fill={getColorDispositivo(datosScada.LSL004)}
          cx={291.8}
          cy={853.7}
          r={8}
        />
      </g>

      {/* Tarjetas y alarmas */}

      {/* Nivel Estanque Alimentacion */}
      <image
        width={157}
        height={141}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ0AAACNCAYAAACt8HhNAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABuhJREFUeNrsmglv4kgQRt2OgZxz 7fX/f9/OzOaEEDBeW6qSvqm4uSaKYvOeVOIYaCb4uY42RQHwzqQPtg58fJr3liVteS/inZ5wzTEy VgfIlsL9+ByclnhNiL3lq/aUzaOUSHKbEO9khPPYhPDndspX7RDOpToLUdltlJByO/5y6pLVbazD bS0CZsWrdghX2mu6mLQxtZhYqHxpR88Hw5bOM5zLtbJ4kVgF+XrFq3YI53LN2jhv48Li3J7bJR6M q6xuRLilxULi2eRzesWrMj2cZ7ipCXbVxrXElcnn4mmpJdONM9N5WV2bbJ1g8zae2nho41E8iLLu zHSlvdkzXCfY5za+WHT3P9nz5yam93pkuvHK59J5lpubaPeWgKZS7eJUq33eL9LpFHpmi3SL3bTx tY0/Lb6ZeDf271pi2UIZ98TqQ4NnuU64W0s+lQgXJ9uUk077OZfu0rJaJ91fbfxj4n0V6ab0dCdR YlW6pZXVe3NkYsd9IwPGSqbaRsXLSVdJpru2svqHifd3kG4SajnSjXuQWNuwMDfhpnbMa+n1PJbm xSbX020bIj6ZeN8krmWQYIg4jUzXmHQrc8MznJfcJ+vzHsyfKnixs7xWJtWFiXcj4RPsTBZmj+60 JthKMtyziXZt2W8WpEvbymsssbpHF/fpdHKllzutKfbMHntJvbS4EC+qInO1qgqZKfVkO70aMSn2 uxoB45XOj7NeoZpJTEKfH38Y0lQ9JTH1yBejDK+hpJ4WZXCjkiSUy3Bby2vfYJH7VQn7cqdFLjHt 8uSVsYd8CIJBLjmlYs+fuZVHLF7Qw0GR/2HvXrV5nwUBji3Bv5XpAN5sCgFAOkA6AKQDpANAOkA6 AKQDpAOkA0A6QDoApAOkA0A6QDpAOgCkA6QDQDpAOgCkA6QDQDpAOkA6AKQDpANAOkA6AKQDpANA OkA6QDoApAOkA0A6QDoApAOkA6QDQDpAOgCkA6QDQDpAOgCkA6QDpANAOkA6AKQDpANAOkA6QDoA pAOkA0A6QDoApAOkA0A6QDpAOgCkA6QDQDpAOgCkA6QDpANAOkA6AKQDpANAOkA6AKQDpAOkA0A6 QDoApAOkA0A6QDpAOgCkg6HSyG1ziHRNeDPALkf29qQ88AOO+hA4uczW/I50TSYA+vzYWGz1pNqx 0CYstulZeGwSpjfOAGMULbpQS+T8aPqkazILr3vCP6B84wP1EWVLR0o21p7YJXMXVj2xFgFfiVfJ gxQyXC2LvLSxDFHJfyKNQL7UE/vI12R6mzFVgiZItzYnni0Wdru05128Td/fX21Jnbpwt+iTxMRe 373mbOAZTyUrLeL93Em1racZUxvSBD/W5sVjGw92+2huLEy+mO2KXHltgnBLW6hb+L6NKxGus3lm a5QDFE5FcsHOLCq5LSV29TdrKT19Pc6Qy636sTLpOi/+s7i1x0/2by8h2zXbBgmVbmEGdwteBOGu eqRLA5TOhars7+tiauGPq5AV9SDUobd5kRKjZWYzYOn0hPG2y93ohPu3jR8i3qJHup3ltbY3zW2R WRDuaSTSJclwLtu5nWB6O5XsV8rJuRHRtL9ZyNm+yjTVQ90aqSXTeULqhPtuAqp0B5fXpUnnX3Yh ht/YAZmOQDovoy7cpZ1Q1xZX9rf6iVeGirCUnvdRYh7KTD3w3i4OmNp63UqZjdI1u8prn83+Jdf2 QY92IM6l9KQBTrBRupkI96mNz0Gatb3mzN6nLYj3vHdSYly85cCli5OrZveFiPcQejrN8HtNr35Q luGs9pQ6k56nHPAgkaS0unRddvsSJrEXye5+kmmJubOz/KfFnR0Al241kkynldCznbYU2lZkW4pq ywfU4b5LN+3pcdIRm6kfsby6dA9BOo9Le522Gi6c9zU/JdvNR1Bem0wlXEu2fwkDVJ3r53LSNZLd 4maxbwpXmX2soe3V6VaJ93TXItxCzuS5DE86UN2ZaN9FujvLgPGs3wx8YzhuE6l89ZZtomLfTBcF rMOeVVkM+0qEbploX7eQDOcT6Vx62ZmUV5Xuh2S5+55+bshbJrlJtu96/FEX/PsyXurp91Ix/Mte Rdg2WYZSsRTpHky6qUg3N8FuMxukq54yM6bLYrlLflv/xuoAs3MldOgX+3W/Tq8orKRZdukupKfT wepepre5CLce+P7cvuW2OOSEqo78sEYO2Bi+zBRKRC3y6ZWZmUyvtezRzS0WIxfuILneQro3//AP 9iWmnl5F9yufil8vicWrEX3TGz963dLXwOteVS/+T3q2iDahFK97tgoQDukOnmqTiObDRspsHYz9 F9VI985ZL/fjziazTYBwSPdmWytpy9YBsiHdu31XiAYAAIH/BRgAS2YnGsR+D40AAAAASUVORK5C YII="
        transform="translate(176.51 268.9)"
        overflow="visible"
        opacity={0.3}
      />
      <path
        className="prefix__st4"
        d="M235.1 278.7H192c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V285c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />
      {/* Tarjeta */}
      <g
        className={"cursorPointer"}
        onClick={() => {
          loadGrafico(2, "Nivel Estanque Alimentación", false);
        }}>
        <path
          className={getTarjetaClass(2)}
          d="M185.8 286.1h138.1v99.8H185.8z"
        />
        <text
          transform="translate(237.992 306.026)"
          className="prefix__st10 prefix__st8 prefix__st23">
          {"LT-001"}
        </text>
        <text
          transform="translate(208.945 325.666)"
          className="prefix__st6">
          <tspan
            x={0}
            y={0}
            className="prefix__st7 prefix__st8 prefix__st9">
            {"Nivel Estanque"}
          </tspan>
          <tspan
            x={7}
            y={16.8}
            className="prefix__st7 prefix__st8 prefix__st9">
            {"Alimentaci\xF3n"}
          </tspan>
        </text>
        <text
          transform="translate(236.68 370.985)"
          className="prefix__st10 prefix__st8 prefix__st11">
          {datosScada.LT001}
        </text>
        <text
          transform="translate(275.805 370.59)"
          className="prefix__st10 prefix__st12 prefix__st13">
          {"%"}
        </text>
      </g>
      {/* Alarma */}
      <g
        className={`${getTemaAlarma(2)} cursorPointer`}
        onClick={() => {
          onClickAlarma(2, "Nivel Estanque Alimentación");
        }}>
        <path d="M210.7 356.9c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M209 355.9c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM220.3 354.6c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M220.9 352.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM221.8 361.9v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM216.8 369.4c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>
      {/* Fin Nivel Estanque Alimentacion */}

      {/* Hipoclorito */}
      <image
        width={157}
        height={141}
        xlinkHref="data:image/png;base64,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 bAAAIPwjwACqsSHQQ8mCiwAAAABJRU5ErkJggg=="
        transform="translate(528.51 268.9)"
        overflow="visible"
        opacity={0.3}
      />
      <path
        className="prefix__st4"
        d="M587.3 278.7h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V285c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Tarjeta */}
      <g
        className={"cursorPointer"}
        onClick={() => {
          loadGrafico(16, "Hipoclorito", true);
        }}>
        <path
          className={getTarjetaClass(16)}
          d="M538 286.1h138.1v99.8H538z"
        />
        <text
          transform="translate(588.56 306.026)"
          className="prefix__st10 prefix__st8 prefix__st23">
          {"LSL-001"}
        </text>
        <text
          transform="translate(586.427 325.666)"
          className="prefix__st6">
          <tspan
            x={0}
            y={0}
            className="prefix__st7 prefix__st8 prefix__st9">
            {"Estado"}
          </tspan>
          <tspan
            x={-11.3}
            y={16.8}
            className="prefix__st7 prefix__st8 prefix__st9">
            {"Hipoclorito"}
          </tspan>
        </text>

        <text
          transform="translate(598.872 370.985)"
          className="prefix__st10 prefix__st12 prefix__st13">
          {getEstadoDispositivo(datosScada.LSL001)}
        </text>
      </g>
      {/* Alarma */}
      <g
        className={`${getTemaAlarma(16)} cursorPointer`}
        onClick={() => {
          onClickAlarma(16, "Hipoclorito");
        }}>
        <path d="M562.9 356.9c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M561.2 355.9c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM572.5 354.6c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M573.1 352.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM574 361.9v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM569 369.4c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>
      {/* Fin Hipoclorito */}

      {/* Metabisulfito */}
      <image
        width={157}
        height={141}
        xlinkHref="data:image/png;base64,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 AABJRU5ErkJggg=="
        transform="translate(828.51 268.9)"
        overflow="visible"
        opacity={0.3}
      />
      <path
        className="prefix__st4"
        d="M887.5 278.7h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3H970c3.5 0 6.3-2.8 6.3-6.3V285c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />
      {/* Tarjeta */}
      <g
        className={"cursorPointer"}
        onClick={() => {
          loadGrafico(17, "Metabisulfito", true);
        }}>
        <path
          className={getTarjetaClass(17)}
          d="M838.2 286.1h138.1v99.8H838.2z"
        />
        <text
          transform="translate(887.92 306.026)"
          className="prefix__st10 prefix__st8 prefix__st23">
          {"LSL-002"}
        </text>
        <text
          transform="translate(886.558 325.666)"
          className="prefix__st6">
          <tspan
            x={0}
            y={0}
            className="prefix__st7 prefix__st8 prefix__st9">
            {"Estado"}
          </tspan>
          <tspan
            x={-17.5}
            y={16.8}
            className="prefix__st7 prefix__st8 prefix__st9">
            {"Metabisulfito"}
          </tspan>
        </text>
        <text
          transform="translate(897.521 370.175)"
          className="prefix__st10 prefix__st12 prefix__st13">
          {getEstadoDispositivo(datosScada.LSL002)}
        </text>
      </g>
      {/* Alarma */}
      <g
        className={`${getTemaAlarma(17)} cursorPointer`}
        onClick={() => {
          onClickAlarma(17, "Metabisulfito");
        }}>
        <path d="M863.1 356.9c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M861.4 355.9c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM872.7 354.6c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M873.3 352.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM874.2 361.9v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM869.2 369.4c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>
      {/* Fin Metabisulfito*/}

      {/* Antiincrustante */}
      <image
        width={157}
        height={141}
        xlinkHref="data:image/png;base64,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 gAEAce4dhP870cAAAAAASUVORK5CYII="
        transform="translate(976.51 268.9)"
        overflow="visible"
        opacity={0.3}
      />
      <path
        className="prefix__st4"
        d="M1035.4 278.7h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V285c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />
      {/* Tarjeta */}
      <g
        className={"cursorPointer"}
        onClick={() => {
          loadGrafico(18, "Antiincrustante", true);
        }}>
        <path
          className={getTarjetaClass(18)}
          d="M986.1 286.1h138.1v99.8H986.1z"
        />
        <text
          transform="translate(1034.842 325.666)"
          className="prefix__st6">
          <tspan
            x={0}
            y={0}
            className="prefix__st7 prefix__st8 prefix__st9">
            {"Estado"}
          </tspan>
          <tspan
            x={-24.5}
            y={16.8}
            className="prefix__st7 prefix__st8 prefix__st9">
            {"Antiincrustante"}
          </tspan>
        </text>
        <text
          transform="translate(1035.83 306.026)"
          className="prefix__st10 prefix__st8 prefix__st23">
          {"LSL-003"}
        </text>
        <text
          transform="translate(1046.162 370.59)"
          className="prefix__st10 prefix__st12 prefix__st13">
          {getEstadoDispositivo(datosScada.LSL003)}
        </text>
      </g>
      {/* Alarma */}
      <g
        className={`${getTemaAlarma(18)} cursorPointer`}
        onClick={() => {
          onClickAlarma(18, "Antiincrustante");
        }}>
        <path d="M1011 356.9c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M1009.3 355.9c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM1020.6 354.6c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M1021.2 352.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM1022.1 361.9v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1017.1 369.4c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>
      {/* Fin Antiincrustante*/}

      {/* pH Entrada */}
      <image
        width={157}
        height={140}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ0AAACMCAYAAABmrKvoAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABuNJREFUeNrsmglTo1gURh+ELBqX 7p7t//8/u1uTmB0YqLpv5vP5QOLYTgHnVN1KJEqEHO7yiHMAn0zyP/899JfyM6RJOjyH8QlXXipi 0vF3NFzkZxineKWIVka2XSydfy2152kkErLdaLNc/VhEwm9vzHxZh+w2kcgkVDzK7bjKqQp3tsjl MZTzTekSyWxetGkVsyrm9ji1mAQZD+nGIV0hkh0lDlWczIG8KeO1ZbrUXq9FW1RxbXFlP8/s9Zh4 MFz5fIY7iWi7KrYWe9vmmvq7rCXLZSZWLdlNFXdV3FosA/ES+rvR9HGlZbiTCfZcxaaKtbRdoXCF yhfLdL6sTk2sWrgvVXyt4ps9v7WsN5c3Ypodx7RaSFndmWyP5sJEJMslKyZN0oXDg2a5WrQ/LH6r 4t62z01OpBufdAfLcivzZGq/lwfDRW5/9494WUsv56W7tSz3exV/mXhfTboFmW700i1FuJNt30tv l8pA4dqki2W6bybeny3SwTgGCZVOhdtZf7eRfj9tGyTCIcL3dEvLdvcmn4+boKdjiBjHMOH7tUMg 3LMMmfNAuqRLefWDxEyWS26CWNrrE6Qb3QSbizsnc2HpXi+npbEq2LQ4HIo3d/+u13mLZyIdso1L Pp9kzuJG240DXU4rsyBDNd2NyGRn/udJk8kwmjIb3hrNWjJctLzGvkGSioCTQLSUqXW0hH6EPqSu 5ZtI6QU7ThxfaYJmTzr7kXbYoXPc5oJm2dylySj9j28C0CVRdZKOzAa/jJRTAEgHSAeAdIB0AEgH SAeAdIB0gHQASAdIB4B0gHQASAdIB4B0gHSAdABIB0gHgHSAdABIB0gHSAeAdIB0AEgHSAeAdIB0 AEgHSAdIB4B0gHQASAdIB4B0gHSAdABIB0gHgHSAdABIB0gHgHSAdIB0AEgHSAeAdIB0AEgHSAdI B4B0gHQASAdIB4B0gHQASAdIB0gHgHSAdABIB0gHgHSAdIB0AEgHSAeAdIB0AEgHSAeAdIB0gHQA SAdIB4B0gHQASAdIB0gHgHQwRulKCyePAF0oIw69K9OVERGREbne5UN6gWwlskHHzFZeKp3KVchj EWxDRARr86TRiSyyQxfs4FxFbo/+eS6vJwM9wckHfDhDLakqWx6JoqEleyFdaSc53NnJ4iBxtJhK pkwHJF/yDgnLlowwROl8EjpJHO1Rk1MREy+L7FQzXL2jfRW7KrYS8yomIm4alOqk59LFomw4rnLg /W+sAp4tAXk3dvZ8b9u9fEXsHGQRi1W4g0m2qWJVxVMVCxOutN+b2n4S+VCSnsuWRiIJfreMnLcw hiCf/u/+uHz1q71YSzybgIdItotKpzv20u1sx49VLE24zHZSv/F1FTPJdkkPhdMLJbULamLHlMlz la+8sPfte7ktxQ3fdu1MtJ9V/DBHVibe3vw5xwaLpvKa2x9tbUcLKamlvLa07f7D6WOmSwLhMsve syD8MabBBZrLRapxault+trLqRsq3UMV3028jb12bCqxb5VXv2M/NPgMVwt3Z5luEUiX9FQ6L9zM jmlhx3dlJ3pm52Ei2S6P9Ddb6W+OIl5fpdMsrQOEd+PJMt2DCbiyc3DsWl51OjlGSsrZTmb9Zjf2 ocxFyj5OsZrlZnY813Z8ddxaRr+2E+hLrTbUWysra7vSN7bt0Hbyezq15jJgPkuv/2ixlkyXx/ra pvLqP4yDCFdI9ltJlpv3fIL10vksd2WS1Zn8XjKW9rCpNNR+0NITv5Km+tg2yfVwiMhlkNjZcW4k nmWCzcWn1kFCU2nYu3jprky2uZScPg8SXrq5HVud4b5IU3yQad5P74VMcL7E+HiSK/7QY+maerqz iBcum8SWTN6cXnVScZGpxafVqQg3iQjX50x3IyVyLyf3TnrYXFqNn9ZIf7+koe7hGl1MvFNkeDoH y0adM51zr++p+QFjEkxzsV6uT9IlMrUurLxu5er1A8LaSqzPdHsrpV66B8t0K5NuLx9E2XPpXGQ9 Mg+Wh3Lp4xovsqzj1BLe/ggXTftYVtum112Q4XzvcmuZMBPp1pbZfsh61TqySDqEOxRtN/ljXwRx l0oXmp7bh1NEROv7bS8nE+w0KBdevI1lwKugp/MT3KP0clvJctpMD+m2WEywThdWduEb6fO+ltO3 ejstE3r/eSMDlC6S74LJbRuU1cIN58Z/2cEL91HSvfUmyQBObPgtm3B54DlYkyzd64XhvWTJIdyJ 6CLeu0sLvOzv9JaY7/P8tJ6513ckju7l13yGKtyH9jPwWrzwCwAT93I90rnXN/tz17AKD0jX9bwk Ipk+xtaudJpzCId0HyFf07JQbJoDpPuU84RsAABg/C3AADESE7TCX+BsAAAAAElFTkSuQmCC"
        transform="translate(85.51 590.9)"
        overflow="visible"
        opacity={0.3}
      />
      <path
        className="prefix__st4"
        d="M144.5 600.1h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3H227c3.5 0 6.3-2.8 6.3-6.3V606.4c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />
      {/* Tarjeta */}
      <g
        className={"cursorPointer"}
        onClick={() => {
          loadGrafico(1, "pH Entrada", false);
        }}>
        <path
          className={getTarjetaClass(1)}
          d="M95.2 607.5h138.1v99.8H95.2z"
        />
        <text
          transform="translate(156.433 647.068)"
          className="prefix__st6">
          <tspan
            x={0}
            y={0}
            className="prefix__st7 prefix__st8 prefix__st9">
            {"pH"}
          </tspan>
          <tspan
            x={-15.6}
            y={16.8}
            className="prefix__st7 prefix__st8 prefix__st9">
            {"Entrada"}
          </tspan>
        </text>
        <g>
          <text
            transform="translate(146.033 692.387)"
            className="prefix__st10 prefix__st8 prefix__st11">
            {datosScada.AE016}
          </text>
        </g>
        <text
          transform="translate(185.159 691.991)"
          className="prefix__st10 prefix__st12 prefix__st13">
          {"pH"}
        </text>
        <g>
          <text
            transform="translate(147.346 627.428)"
            className="prefix__st10 prefix__st8 prefix__st23">
            {"AE-016"}
          </text>
        </g>
      </g>
      {/* Alarma */}
      <g
        className={`${getTemaAlarma(1)} cursorPointer`}
        onClick={() => {
          onClickAlarma(1, "pH Entrada");
        }}>
        <path d="M120.1 678.3c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M118.4 677.3c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM129.7 676c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M130.3 674.2c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM131.2 683.3v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM126.2 690.8c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>
      {/* Fin */}

      {/* Hidróxido de Sodio */}
      <image
        width={157}
        height={140}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ0AAACMCAYAAABmrKvoAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABuVJREFUeNrsmwtz2kYURldCPPxs Mmk7/f9/r0mKY8wbtmLmbvvlegWy27Et6ZyZOxAsRBFH97FSQwB4Y4p3fj90l/gW0hQtnsPwhIsv FbFouY1GyPwbhileFNFi5rUXS5f+VtrzMhMF2W6wWe70eMxEer0x81UtstvIopLHyolHuR1WOVXh 9hIHCy/nRekKyWxJsnEd0zomEknCEukGJ93R5NpZbOvY2OPOHDg0ZbxzmW4kss3quLa4EgHHmVIL /ZYvCbc3ydZ1rOpYWqwber5G6XyGm5pot3Xc13Fnz29MxLFtV9DfDaaPi064pzoeLUb2+8eGQaNR Os1yM5Pss8Qnk+9KymzJNDuYaTX1cRvLbCfZ5uZCadv6weLQlOm0l9Msd2+y/V7Hr3V8sddubBuk G550O5NuUceDJaeRZMGdGy4KzXbnyuvEpLsz6U7C/WGPn5Bu8JlubdJdmwNRZFzLYLGXjNc4SKRM N7ESemuSfTHhfjMJc9LBMAaJJN21tWHRBFuZiAsrvbnVjbPldWJS3Vi2uzf5PrtMN5Jajnj9HyaS dDPJcBsbKH5khkytgmfLq4o3s4x3k4mJTCxINxzpDuLOzoS7tcw3C/8up53NdEUm26UJdixZT0N3 jGzDku8gwqV13JwX2bbLl9emjOdjJEE/N8yBQq9WjaWcjsPzq1Wa1OK5y2BFuHyxn7tNhol3wSeh MuTvTIpBBoAmioYAyPnRdBPIM2NfuvOAfJBpy1pfCi0vSMZECqGlI609KTl28AaZD+ng/acQAKQD pANAOkA6AKQDpANAOkA6QDoApAOkA0A6QDoApAOkA6QDQDpAOgCkA6QDQDpAOgCkA6QDpANAOkA6 AKQDpANAOkA6AKQDpAOkA0A6QDoApAOkA0A6QDpAOgCkA6QDQDpAOgCkA6QDQDpAOkA6AKQDpANA OkA6AKQDpAOkA0A6QDoApAOkA0A6QDoApAOkA6QDQDpAOgCkA6QDQDpAOkA6AKQDpANAOkA6AKQD pANAOkA6QDoApAOkA0A6QDoApAOkA6QDeG/pokWQR4A2xIxDr850sc0OYVByeR9aOVG+wlpkg5x8 sa18ZYudHS2iPEZERDDnxDlPfqI6k9XSmw+ZOLptih4e4OI//jh9lu7o3NhbpOcq4LNjUskLRUa2 tLNdHVt7TLGXTFn0SLziFRLGM21J36RLbiQnTrGRSH745PTP8ajO7DjJdtrR2mJlMatjZNtWJl/x P2WJjyBdLmLD94qv7W06No0GyWB78WEpsbLXt2cy3jPpfJbb2I6e6ni0uKpjbNvv7Xnp+sOi47KV mfAnVWwoOUd3sLsun/+eKRmtzIcHix91LEy+jRMv5sqrP3h7e9PahDvtcG7CVbbdVgQcuVLbxXKa ZBtZVBYjyeZlRjg9+31/c3BneuyweN6NpXnxvY5vdfxljixMSJUutMl0accr28ncSqoKtzTpJiJd 0VHpVLjKTqSJi8qdXMFVha2Lnch37HDG0xNGK+CTSPdnHV/Nkx/mxjZz0l0sr2rzWHq4rX3gnWS6 9IMUHcx2Sbok3MROsFNc23c8HY+p+57RNdTa46xdb3PouHTRSbcWN+aW6b5atnvMZLqz5VWNTpku nd3RDnD6sBv7YSZSkrqa6VKWm5hcJ9luLe7su6p4pVSEjR2T1PcuMr1N9ozv4NR6lOFyad8ziTfP lNfsyZabXnUk1gb6IGn1wTLA1PV0XRwmknQpy12ZZPd1fJJlgL3JOBbptnLwH+ygp6b6qeGM78Pk upFs50+2lf19/5LyGmTnhVi+k8FiJsJVPejpknRTk+6U3X6RUqm92tS2P8jxmFtp+Z5pqDcdli43 SBwk221kGU2XS3aS5cKlQUJTabA354aLcQvhupzpbqU3WbszO61Rpt5G+5pvJl7TFNflTKd93UEW gf3wdLg0PFUXangSTw1fO9ly61hdk66QqXVm0i1FuHRG39vfU6Zbmpzf3dLBg2XAtZTm2HHpfG93 cMtEOdlaZzr/ATqpeclKt6jaRfz0OnWlQtcr70S6vSyQziXDzWWQ6MP02jTJ5hbCW61JVi0/JP0w x/D88lAI3b/sFWSC3YSfrzMn6RY2YGhPt5L1qjRAPMrkqtcgQ+jXZbGmS34Xv2P1QsN1Nb6r5fRS b+fvqNmJdGkxvJBpPom3kIlVJ95j6M+F/3ih52tF9R8+NLofLPZAOn+PmE5qT7JOV7g1q7XItg3N d1n0UbwXU32U/5APcjCLkL+fME3t/orE3pXhfejHpa836Wfg+WCRhgu9AUAXwJtucu3L3SVI947D ReEmdj1mfmrrwx0lSPeBsl7T8eL/F0G6dztOyAYAAMbfAgwAxkErniCvF/AAAAAASUVORK5CYII="
        transform="translate(233.51 590.9)"
        overflow="visible"
        opacity={0.3}
      />
      <path
        className="prefix__st4"
        d="M292.1 600.1H249c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V606.4c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />
      {/* Tarjeta */}
      <g
        className={"cursorPointer"}
        onClick={() => {
          loadGrafico(19, "Hidróxido de Sodio", true);
        }}>
        <path
          className={getTarjetaClass(19)}
          d="M242.8 607.5h138.1v99.8H242.8z"
        />
        <text
          transform="translate(259.722 647.068)"
          className="prefix__st6">
          <tspan
            x={0}
            y={0}
            className="prefix__st7 prefix__st8 prefix__st9">
            {"Estado Hidr\xF3xido"}
          </tspan>
          <tspan
            x={25.7}
            y={16.8}
            className="prefix__st7 prefix__st8 prefix__st9">
            {"de Sodio"}
          </tspan>
        </text>
        <text
          transform="translate(302.806 690.991)"
          className="prefix__st10 prefix__st12 prefix__st13">
          {getEstadoDispositivo(datosScada.LSL004)}
        </text>
        <g>
          <text
            transform="translate(294.993 627.428)"
            className="prefix__st10 prefix__st8 prefix__st23">
            {"LSL-004"}
          </text>
        </g>
      </g>
      {/* Alarma */}
      <g
        className={`${getTemaAlarma(19)} cursorPointer`}
        onClick={() => {
          onClickAlarma(19, "Hidróxido de Sodio");
        }}>
        <path d="M267.7 678.3c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M266 677.3c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM277.3 676c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M277.9 674.2c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM278.8 683.3v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM273.8 690.8c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>
      {/* Fin Hidróxido de Sodio*/}

      {/* Temperatura */}
      <g>
        <image
          width={157}
          height={140}
          xlinkHref="data:image/png;base64,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 AABJRU5ErkJggg=="
          transform="translate(492.51 590.9)"
          overflow="visible"
          opacity={0.3}
        />
        <path
          className="prefix__st4"
          d="M551 600.1h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V606.4c0-3.5-2.8-6.3-6.3-6.3H551z"
        />
        {/* Tarjeta */}
        <g
          className={"cursorPointer"}
          onClick={() => {
            loadGrafico(13, "Temperatura", false);
          }}>
          <path
            className={getTarjetaClass(13)}
            d="M501.7 607.5h138.1v99.8H501.7z"
          />
          <g>
            <text
              transform="translate(554.856 637.428)"
              className="prefix__st10 prefix__st8 prefix__st23">
              {"TT-001"}
            </text>
          </g>
          <text
            transform="translate(531.819 657.068)"
            className="prefix__st7 prefix__st8 prefix__st9">
            {"Temperatura"}
          </text>
          <g>
            <text
              transform="translate(552.543 692.387)"
              className="prefix__st10 prefix__st8 prefix__st11">
              {datosScada.TT01}
            </text>
          </g>
          <text
            transform="translate(591.669 691.991)"
            className="prefix__st10 prefix__st12 prefix__st13">
            {"\xB0C"}
          </text>
        </g>
        {/* Alarma */}
        <g
          className={`${getTemaAlarma(13)} cursorPointer`}
          onClick={() => {
            onClickAlarma(13, "Temperatura");
          }}>
          <path d="M526.6 678.3c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
          <path d="M524.9 677.3c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM536.2 676c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
          <path d="M536.8 674.2c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM537.7 683.3v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM532.7 690.8c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
        </g>
      </g>
      {/* Fin Temperatura*/}

      {/* Caudal de Alimentacion */}
      {/* Tarjeta */}
      <g
        className={"cursorPointer"}
        onClick={() => {
          loadGrafico(7, "Caudal de Alimentación", false);
        }}>
        <path
          className={getTarjetaClass(7)} /* "prefix__st5" */
          d="M 1135 558 z M 1277 554 h -147 V 455.2 h 146.4"
        />
        <text
          transform="translate(1172.322 496.038)"
          className="prefix__st6">
          <tspan
            x={0}
            y={0}
            className="prefix__st7 prefix__st8 prefix__st9">
            {"Caudal de"}
          </tspan>
          <tspan
            x={-8.2}
            y={16.8}
            className="prefix__st7 prefix__st8 prefix__st9">
            {"Alimentaci\xF3n"}
          </tspan>
        </text>
        <g>
          <text
            transform="translate(1186.639 544.356)"
            className="prefix__st10 prefix__st8 prefix__st11">
            {datosScada.FIT006}
          </text>
        </g>
        <text
          transform="translate(1227.904 543.96)"
          className="prefix__st10 prefix__st12 prefix__st13">
          {"m\xB3/hr"}
        </text>
        <g>
          <text
            transform="translate(1186.639 477.191)"
            className="prefix__st10 prefix__st8 prefix__st23">
            {"FIT-006"}
          </text>
        </g>
      </g>
      {/* Alarma */}
      <g
        className={`${getTemaAlarma(7)} cursorPointer`}
        onClick={() => {
          onClickAlarma(7, "Caudal de Alimentación");
        }}>
        <g>
          <path d="M1150.7 533.3c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
          <path d="M1149 532.3c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9.7-1.3 1.8-2.2 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM1160.3 531c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
          <path d="M1160.9 529.2c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM1161.8 538.3v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1156.8 545.8c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
        </g>
      </g>
      {/* Fin Caudal de Alimentacion*/}

      {/* E.C. de Alimentacion */}
      {/* Tarjeta */}
      <g
        className={"cursorPointer"}
        onClick={() => {
          loadGrafico(9, "E.C. de Alimentacion", false);
        }}>
        <path
          className={getTarjetaClass(9)}
          d="M 1131 567 h 146.4 V 665 h -146.4 z"
        />
        <g>
          <text
            transform="translate(1186.639 580.29)"
            className="prefix__st10 prefix__st8 prefix__st23">
            {"AE-005"}
          </text>
        </g>
        <text
          transform="translate(1181.553 599.037)"
          className="prefix__st6">
          <tspan
            x={0}
            y={0}
            className="prefix__st7 prefix__st8 prefix__st9">
            {"E.C. de"}
          </tspan>
          <tspan
            x={-16.7}
            y={16.8}
            className="prefix__st7 prefix__st8 prefix__st9">
            {"Alimentaci\xF3n"}
          </tspan>
        </text>
        <text
          transform="translate(1186.639 646.356)"
          className="prefix__st10 prefix__st8 prefix__st11">
          {datosScada.AE005}
        </text>
        <text
          transform="translate(1226.764 645.96)"
          className="prefix__st10 prefix__st12 prefix__st13">
          {"\xB5S/cm"}
        </text>
      </g>
      {/* Alarma */}
      <g
        className={`${getTemaAlarma(9)} cursorPointer`}
        onClick={() => {
          onClickAlarma(9, "E.C. de Alimentación");
        }}>
        <path d="M1150.7 636.3c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-1.9 1.1-2.5 2.2z" />
        <path d="M1149 635.3c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9.7-1.3 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM1160.3 634c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.7-2.5-2.2z" />
        <path d="M1160.9 632.2c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.3-2.4-3.7-3zM1161.8 641.3v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1156.8 648.8c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>
      {/* Fin E.C. de Alimentacion*/}

      {/* Caudal de Permeado */}
      {/* Tarjeta */}
      <g
        className={"cursorPointer"}
        onClick={() => {
          loadGrafico(8, "Caudal de Permeado", false);
        }}>
        <path
          className={getTarjetaClass(8)}
          d="M 95 926 z M 242 926 H 95 V 829.4 h 146.4"
        />
        <text
          transform="translate(150.619 851.373)"
          className="prefix__st10 prefix__st8 prefix__st23">
          {"FIT-015"}
        </text>
        <text
          transform="translate(136.302 870.22)"
          className="prefix__st6">
          <tspan
            x={0}
            y={0}
            className="prefix__st7 prefix__st8 prefix__st9">
            {"Caudal de"}
          </tspan>
          <tspan
            x={-0.4}
            y={16.8}
            className="prefix__st7 prefix__st8 prefix__st9">
            {"Permeado"}
          </tspan>
        </text>
        <g>
          <text
            transform="translate(150.619 918.538)"
            className="prefix__st10 prefix__st8 prefix__st11">
            {datosScada.FIT015}
          </text>
        </g>
        <text
          transform="translate(191.884 918.143)"
          className="prefix__st10 prefix__st12 prefix__st13">
          {"m\xB3/hr"}
        </text>
      </g>
      {/* Alarma */}
      <g
        className={`${getTemaAlarma(8)} cursorPointer`}
        onClick={() => {
          onClickAlarma(8, "Caudal de Permeado");
        }}>
        <path d="M114.7 907.4c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M113 906.4c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM124.3 905.1c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M124.9 903.3c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM125.8 912.4v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM120.8 919.9c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>
      {/* Fin Caudal de Permeado*/}

      {/* E.C. de Producto */}
      {/* Tarjeta */}
      <g
        className={"cursorPointer"}
        onClick={() => {
          loadGrafico(10, "E.C. de Producto", false);
        }}>
        <path
          className={getTarjetaClass(10)}
          d="M 95.1 940.4 h 146.4 v 98.6 H 95.1 z"
        />
        <text
          transform="translate(150.619 954.472)"
          className="prefix__st10 prefix__st8 prefix__st23">
          {"AE-012"}
        </text>
        <text
          transform="translate(145.532 973.22)"
          className="prefix__st6">
          <tspan
            x={0}
            y={0}
            className="prefix__st7 prefix__st8 prefix__st9">
            {"E.C. de"}
          </tspan>
          <tspan
            x={-4.7}
            y={16.8}
            className="prefix__st7 prefix__st8 prefix__st9">
            {"Producto"}
          </tspan>
        </text>
        <text
          transform="translate(150.619 1020.538)"
          className="prefix__st10 prefix__st8 prefix__st11">
          {datosScada.AE012}
        </text>
        <text
          transform="translate(190.744 1020.143)"
          className="prefix__st10 prefix__st12 prefix__st13">
          {"\xB5S/cm"}
        </text>
      </g>
      {/* Alarma */}
      <g
        className={`${getTemaAlarma(10)} cursorPointer`}
        onClick={() => {
          onClickAlarma(10, "E.C. de Producto");
        }}>
        <path d="M114.7 1010.4c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-1.9 1.1-2.5 2.2z" />
        <path d="M113 1009.4c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.5c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM124.3 1008.1c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.7-2.5-2.2z" />
        <path d="M124.9 1006.3c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.3-2.4-3.7-3zM125.8 1015.4v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM120.8 1022.9c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>
      {/* Fin E.C. de Producto*/}

      {/* Nivel Estanque Permeado */}
      <image
        width={157}
        height={141}
        xlinkHref="data:image/png;base64,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 GgAACP8KMACNmCCmxUJLzgAAAABJRU5ErkJggg=="
        transform="translate(259.51 924.9)"
        overflow="visible"
        opacity={0.3}
      />
      <path
        className="prefix__st4"
        d="M318.7 934.8h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V941.1c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* Tarjeta */}
      <g
        className={"cursorPointer"}
        onClick={() => {
          loadGrafico(3, "Nivel Estanque Permeado", false);
        }}>
        <path
          className={getTarjetaClass(3)}
          d="M269.4 942.2h138.1v99.8H269.4z"
        />
        <text
          transform="translate(292.472 981.814)"
          className="prefix__st6">
          <tspan
            x={0}
            y={0}
            className="prefix__st7 prefix__st8 prefix__st9">
            {"Nivel Estanque"}
          </tspan>
          <tspan
            x={14.8}
            y={16.8}
            className="prefix__st7 prefix__st8 prefix__st9">
            {"Permeado"}
          </tspan>
        </text>

        <g>
          <text
            transform="translate(320.207 1027.133)"
            className="prefix__st10 prefix__st8 prefix__st11">
            {datosScada.LT002}
          </text>
        </g>
        <text
          transform="translate(359.332 1026.737)"
          className="prefix__st10 prefix__st12 prefix__st13">
          {"%"}
        </text>

        <text
          transform="translate(321.671 962.174)"
          className="prefix__st10 prefix__st8 prefix__st23">
          {"LT-002"}
        </text>
      </g>
      {/* Alarma */}
      <g
        className={`${getTemaAlarma(3)} cursorPointer`}
        onClick={() => {
          onClickAlarma(3, "Nivel Estanque Permeado");
        }}>
        <path d="M294.3 1013c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M292.6 1012c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM303.9 1010.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M304.5 1008.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM305.4 1018v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM300.4 1025.5c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>
      {/* Fin Nivel Estanque Permeado*/}

      {/* Presion Osmosis */}
      <image
        width={157}
        height={140}
        xlinkHref="data:image/png;base64,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"
        transform="translate(764.51 726.9)"
        overflow="visible"
        opacity={0.3}
      />
      <path
        className="prefix__st4"
        d="M862.4 857.2h43.1c3.5 0 6.3-2.8 6.3-6.3V748.6c0-3.5-2.8-6.3-6.3-6.3h-51.7c-1.2 0-2.4-.4-3.4-1.2l-.4-.3c-6.5-6.5-6.5-6.5-12.9.2-1 .9-2.2 1.3-3.5 1.3h-53.7c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h82.5z"
      />
      {/* Tarjeta */}
      <g
        className={"cursorPointer"}
        onClick={() => {
          loadGrafico(5, "Presion Osmosis", false);
        }}>
        <path
          className={getTarjetaClass(5)}
          d="M773.7 749.3h138.1v99.8H773.7z"
        />
        <text
          transform="translate(820.175 788.91)"
          className="prefix__st6">
          <tspan
            x={0}
            y={0}
            className="prefix__st7 prefix__st8 prefix__st9">
            {"Presi\xF3n"}
          </tspan>
          <tspan
            x={-3.5}
            y={16.8}
            className="prefix__st7 prefix__st8 prefix__st9">
            {"Osmosis"}
          </tspan>
        </text>
        <g>
          <text
            transform="translate(824.562 834.229)"
            className="prefix__st10 prefix__st8 prefix__st11">
            {datosScada.PT010}
          </text>
        </g>
        <text
          transform="translate(863.687 833.833)"
          className="prefix__st10 prefix__st12 prefix__st13">
          {"mbar"}
        </text>
        <text
          transform="translate(825.875 769.27)"
          className="prefix__st10 prefix__st8 prefix__st23">
          {"PT-010"}
        </text>
      </g>
      {/* Alarma */}
      <g
        className={`${getTemaAlarma(5)} cursorPointer`}
        onClick={() => {
          onClickAlarma(5, "Presión Ósmosis");
        }}>
        <path d="M798.6 820.1c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
        <path d="M796.9 819.1c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM808.2 817.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
        <path d="M808.8 816c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM809.7 825.1v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM804.7 832.6c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>
      {/* Fin Presion Osmosis*/}

      {/* Caudal de Rechazo */}
      {/* Tarjeta */}
      <g
        className={"cursorPointer"}
        onClick={() => {
          loadGrafico(20, "Caudal de Rechazo", false);
        }}>
        <path
          className={getTarjetaClass(20)}
          d="M 1072.6 960.8 z M 1219 954 h -146.4 V 855.8 H 1219"
        />
        <text
          transform="translate(1138.127 877.767)"
          className="prefix__st10 prefix__st8 prefix__st23">
          {"FIT"}
        </text>
        <text
          transform="translate(1113.81 896.614)"
          className="prefix__st6">
          <tspan
            x={0}
            y={0}
            className="prefix__st7 prefix__st8 prefix__st9">
            {"Caudal de"}
          </tspan>
          <tspan
            x={4.3}
            y={16.8}
            className="prefix__st7 prefix__st8 prefix__st9">
            {"Rechazo"}
          </tspan>
        </text>
        <g>
          <text
            transform="translate(1128.127 944.932)"
            className="prefix__st10 prefix__st8 prefix__st11">
            {datosScada.FIT006 - datosScada.FIT015}
          </text>
        </g>
        <text
          transform="translate(1169.392 944.537)"
          className="prefix__st10 prefix__st12 prefix__st13">
          {"m\xB3/hr"}
        </text>
      </g>
      {/* Alarma */}
      <g
        className={`${getTemaAlarma(20)} cursorPointer`}
        onClick={() => {
          onClickAlarma(20, "Caudal de Rechazo");
        }}>
        <path d="M1092.2 933.8c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
        <path d="M1090.5 932.8c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9.7-1.3 1.8-2.2 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM1101.8 931.5c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M1102.4 929.7c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM1103.3 938.8v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1098.3 946.3c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>
      {/* Fin Caudal de Rechazo*/}

      {/* Presión de Rechazo */}
      {/* Tarjeta */}
      <g
        className={"cursorPointer"}
        onClick={() => {
          loadGrafico(6, "Presión de Rechazo", false);
        }}>
        <path
          className={getTarjetaClass(6)}
          d="M 1072.6 965.8 H 1219 v 99.2 h -146.4 z"
        />
        <text
          transform="translate(1128.127 980.866)"
          className="prefix__st10 prefix__st8 prefix__st23">
          {"PT-013"}
        </text>

        <text
          transform="translate(1112.92 999.613)"
          className="prefix__st6">
          <tspan
            x={0}
            y={0}
            className="prefix__st7 prefix__st8 prefix__st9">
            {"Presi\xF3n de"}
          </tspan>
          <tspan
            x={5.8}
            y={16.8}
            className="prefix__st7 prefix__st8 prefix__st9">
            {"Rechazo"}
          </tspan>
        </text>
        <text
          transform="translate(1128.127 1046.932)"
          className="prefix__st10 prefix__st8 prefix__st11">
          {datosScada.PT013}
        </text>
        <text
          transform="translate(1168.252 1046.537)"
          className="prefix__st10 prefix__st12 prefix__st13">
          {"mbar"}
        </text>
      </g>
      {/* Alarma */}
      <g
        className={`${getTemaAlarma(6)} cursorPointer`}
        onClick={() => {
          onClickAlarma(6, "Presión de Rechazo");
        }}>
        <path d="M1092.2 1036.8c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-1.9 1.1-2.5 2.2z" />
        <path d="M1090.5 1035.8c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9.7-1.3 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM1101.8 1034.5c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.7-2.5-2.2z" />
        <path d="M1102.4 1032.7c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.3-2.4-3.7-3zM1103.3 1041.8v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1098.3 1049.3c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>
      {/* Fin Presion de Rechazo*/}

      {/* Fin Presión de Rechazo */}
    </svg>
  );
}

export default ScadaCristaleriasChile;

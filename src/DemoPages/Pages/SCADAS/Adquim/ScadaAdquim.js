import * as React from "react";

const ScadaAdquim = (props) => {
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

  // Estandarizable
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
      viewBox="0 0 1429.5 1346.5"
      style={{
        enableBackground: "new 0 0 1429.5 1346.5"
      }}
      xmlSpace="preserve"
      {...props}>
      <style>
        {
          ".st0,.st2{fill:none;stroke-miterlimit:10}.st0{opacity:.6;stroke:#ccc;stroke-width:2;enable-background:new}.st2{stroke:#35ace8;stroke-width:4}.st3{fill:#fff}.st6{fill:#3574e0}.st9{fill:#666}.st11{font-size:14px}.st12{fill:#606060}.st14{font-size:17px}.st15{fill:#00e098}.st16,.st17{fill:none;stroke-miterlimit:10}.st16{opacity:.5;stroke:#b3b3b3;stroke-width:.5;enable-background:new}.st17{stroke:#323e48;stroke-width:4}.st18{fill:#323e48}.st19{font-size:11px}.st20{fill:#35ace8}.st21{fill:#00a19b}.st22{opacity:.15;fill:#3574e0;enable-background:new}.st23{fill:#ccc}.st24,.st25{fill:#fff;stroke:#35ace8;stroke-width:4;stroke-miterlimit:10}.st25{fill:none;stroke:#fff;stroke-width:2}.st33{enable-background:new}.st35{font-size:15px}.tarjeta{fill:#ffffff}.tarjetaSeleccionada{fill:#3574e0;opacity:.15}.cursorPointer{cursor:pointer}.cursorNormal{cursor:default}.campana{fill:#3474E0;}.campana:hover{fill:#7c7c7c;}.campanaVacia{fill:#c2c2c1;}.campanaVacia:hover{fill:#7c7c7c;}.campanaDesconectada{fill:#c2c2c1;}"
        }
      </style>
      <path
        className="st0"
        d="M750.3 944.8H85.8c-2.8 0-5-2.3-5-5V451.1c0-2.1 1.7-3.9 3.9-3.9h18"
      />
      <path
        d="M522 1276.8H87c-3.4 0-6.2-2.8-6.2-6.2V979.3c0-3.4 2.8-6.2 6.2-6.2h435c3.4 0 6.2 2.8 6.2 6.2v291.2c0 3.5-2.8 6.3-6.2 6.3z"
        style={{
          opacity: 0.6,
          fill: "#ebebeb",
          enableBackground: "new"
        }}
      />
      <path
        className="st2"
        d="M1007.7 762.9h61.6M234.7 636.6h250.2M319.1 415.5h-16.4c-2.8 0-5-2.3-5-5v-51.9c0-2.8 2.3-5 5-5h16.4M85.8 281.4H130c4.7 0 8.5 3.8 8.5 8.5v58.3"
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
        className="st3"
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
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAAB8CAYAAABqtVxXAAAACXBIWXMAAAs6AAALOgFkf1cNAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABKdJREFUeNrs2mlvG1UUgOHxeMvS NlBUENsH/v/P4gMq3ZI2i5N4bO7AuenNeOzWjlMoeh7pyHWbKRLo5dwZu6qAr8bgC10DrFo+VnyD 4lWwsL9gl9vEO/iMP+9O3QkY2H6r5lgXxa+Xnwp3U3B1EecwzSjej4pwgd226iKmSTMv3i82hTvY sFVzpO1M0kzjdVLEa9PCdps1R9lGepvmJuY2Zh4R56jvGfXEWkes4zQHaQ7THKd5kuYo3k/iZ2qx wlbR5ljbSGdprtJcpLmMmRXhrmza0ZpYJxHnszTfxHyb5iTCPbBlYaf71kUEOYtAP6Q5S3Oa5l2a 9xFw9x53bbDjiLUN9EWaH2JexO89LYId+m8BW2/YHOx5BPomzavobhwtdh9CLctgy/vWaUTZBvpr zM9pvo9g84Z1JIbdj8TXsWHb7fo6Tq/T6Ck/iMoPo5p1G3YYMZ4Uwf6W5pd4f1Lcw+anyMDnB7uM AG8j2vO45TyKnuaxfWfx50318eHTctRzHD6Ie9c20B8j1p/SfFf98/DJAyd42L3sojgaH0dzdby/ iGNyvpe9qT4+gLr7TLV84HQQx962+ucx5b3ruLr/RQpg+y27jJZyg/MI9G3cz7ZzGsfmOm/ZviNx 3rJHEW7+OGda/AOA3ZRLLt9SHsZCPIl5Gs3l0+zdcuz7HDZHOylm7BgMjxJv7m0a4ebvOkyr1Y9O 7z006h6NR51IHYFh/8Hm3spFOe7EetdevWFd933xH9hvsOWirIuA674Tbf2Jc7ZI4cvHu3ZR+hwV /pvR9hIsfEUEC4IFBAuCBQQLCBYECwgWECwIFhAsIFgQLCBYQLAgWECwgGBBsIBgAcGCYAHBAoIF wQKCBQQLggUECwgWBAsIFhAsCBYQLCBYECwgWECwIFhAsIBgQbCAYAHBgmABwQKCBcECggUEC4IF BAsIFgQLCBYQLAgWECwgWBAsIFhAsCBYQLCAYEGwgGABwYJgAcECggXBAoIFBAuCBQQLCBYECwgW ECwIFhAsIFgQLCBYQLAgWECw8P+2LGarYJedV+BxLYpYF8UsNwVbXtBsuhDYy0YtG5unuY3Xpm/b jnpibYoLb2LyXzCMnx34dw17C3YenV0Xk8O9d0wedf6CJn6wveAyzUW8ztJMItShYGFvx+B59HaV 5jzNh+juKlpsyi076lzcROnthWdp3sUcRqTzuKYWLTx4u5a9tZ29jTmLaG+KW9O/t+yos3KbYrue xcVv0hxEoDexaWtHY3hQrGWw74vWTuP9xg1bnqVnEeufaY7iZ+bxf4EnEaxjMTz8ONxEb22gL9P8 nuaPiPc8lufaI/GyE+w4wmxiPT9Pc9wJVrSw+4bN969tsK8i1hxsPhKXH/esbNiqOFMP4veuI+Bn sXFzyI7EsJ8j8UUchdsj8evobRZBL8oLR2uqz5pi47YPnqbVx4dOlWhhp1j7bkMvYlG2c9m3XdfF VscM4/hbTvmEWKiwny1bfg7bvuaHTStfWFoXXY4yh5un/DhHsPDwTVt+06mp7n/DcOXbhZuiGxTT /RhHrLDf43HfVNsEK1D49wKudgl2158Fdot1o78EGABTqVxhyT69IAAAAABJRU5ErkJggg=="
        transform="translate(36.959 37.638) scale(.9918)"
      />
      <path
        className="st3"
        d="M256.2 151.5H47.4c-3.4 0-6.1-2.8-6.1-6.1V49.7c0-3.4 2.8-6.1 6.1-6.1h208.7c3.4 0 6.1 2.8 6.1 6.1v95.6c.1 3.4-2.7 6.2-6 6.2z"
      />
      <circle
        cx={1143}
        cy={178.8}
        r={8}
        style={{
          fill: "#b4002b"
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
          fill: "#ff6101"
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
        className="st12 st11">
        {"Conectividad de Planta"}
      </text>
      <text
        transform="translate(109.291 128.21)"
        className="st12 st14">
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
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAnCAYAAABjYToLAAAACXBIWXMAAArrAAAK6wGCiw1aAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA65JREFUeNrsmOtO20AQhbP2OiEk 0EDTIoRa9f2fC3qBQCA3Ypx4u0Zn0Olo1xeo+FHV0pETcMafZ3dmz7rX+3/8I4d5hzjuvcFM5BwD c10gzRuBEpzlcwiqJCgXgA0e9g1AolRJriuhPalUoFE40wFKA/UDSvE/ydTO6wkqoF0E0nXNWAzo EBpBA0jAKoDca+v16LXBeQvQnYL8I3u2A1RGQGOvY68PXhOcK7gDAisAsfZaQguvB0BuAf5EQ/0C Z1sMn8F1AwBVIKdeU69PXh/xtyOApQRWZWgFmHuvW+iBYAXSceZsi2wxVAVx5nUOnRHYOACWI2MV yJ3Xjdcvrxm+W9VKXFPGeLJnGL4JQL56ffG6wPdTZGuIa1PE2GOYJGv8AGPETFTllm3BdLbOAfUN YFPMtSGuS6mfcVUeQ1Ikcn2JrOZUsWVsKI0axiEm9xRgF5StCW7Wpz6mm+sAQzxAPIlrMLdWGO4t FULtHEtxwxGBfQZQ9fkEmeRMmUDntwRkVOOtoOYojBXgnrNmW0z6ETIzhU4xLIcqCyYSS3rTAJ+P cPMCRTFDpQpc9ZA7WzOMKfWtY8CdEFS/JlOhB+3hN0NqvtIDj3TMpCZYqhrqmJpo1hJKP3CK30oB jAAlRSFxja1pqjKcGWCGOPcbhi92JDTnMiqKA1Ucz/dPWjZYUUpL1Gu9HE+VLJB904t4qKbl6V2O pMESh/xUJycaiesQTzsM1wTGUDvqzk8Bq9L24P5VIBbHLRgwiTyNBCoCfiqnpaN8RZYK8mkbdH1x GAIXBeMnk0WYbYqsbWWLYXXK0YrjEG8mFuiRs2Zr0s7uYIHOPEfnH6GaElq+6nZJe8q++LM5Ov4c 8Te8VqYtbI9F72JX0OdmGNmmlWSxGeoWy1Dlyy69rryu8eAbmSZpDZTuOZb6jlV9x6nNxV5N8i2G 6xZAP6BLnGeAzttmzARWA6OytKfqLWhXlKuhq6B+IkNXAPqObMk+oGgC01u7RHV/S95LF4uuOga7 BtwNNMMQrqkV1TpY3hjscJOFmlcFbrxUjsOStS6oeOaAEbC7CJRrMopO7Q+N8vJrBJ4o28xgOcCW apd0T9s5rsZGz89tg7PmFNicoNhPGdVu1gSyCGx+96/ZiZeR7r3BTYbURri3cbYflXIqluAa3NVP 8UsUS68LMioIbiG6Wgu1G4q+u+hqY4zyY6nyaNqnucjbnijQW9+PmUgjNoGVoAzstBvfj/3tN4qm xq20emEnx28BBgAsF9AjogOwwgAAAABJRU5ErkJggg=="
        transform="translate(66.583 102.711) scale(1.0206)"
      />
      <circle
        className="st3"
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
        className="st12 st11">
        {"Funcionamiento de dispositivos"}
      </text>
      <path
        className="st16"
        d="M59.9 96.2h185.8"
      />
      <path
        className="st6"
        d="M117.5 362.8h124.8v97.7H117.5z"
      />
      <path
        className="st17"
        d="M242.1 346.5v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1V346.5"
      />
      <path
        className="st18"
        d="M367.9 388.3h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7V391c0-1.5-1.2-2.7-2.7-2.7z"
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
        transform="rotate(-.756 29071.707 -24429.216) scale(.91928)"
      />
      <circle
        transform="rotate(-.769 346.737 402.99) scale(.99999)"
        className="st3"
        cx={346.8}
        cy={403}
        r={10.9}
      />
      <circle
        className="cursorPointer"
        onClick={() => loadGrafico(19, "Estado P-001B", true)}
        fill={getColor(datosScada.P001B)}
        cx={346.8}
        cy={402.8}
        r={8}
      />
      <path
        className="st18"
        d="M367.9 323h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
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
        transform="rotate(-.756 24183.797 -24461.067) scale(.91928)"
      />
      <circle
        transform="rotate(-.769 346.742 337.705) scale(.99999)"
        className="st3"
        cx={346.8}
        cy={337.7}
        r={10.9}
      />
      <circle
        className="cursorPointer"
        fill={getColor(datosScada.P001A)}
        cx={346.8}
        cy={337.5}
        r={8}
        onClick={() => loadGrafico(18, "Estado P-001A", true)}
      />
      <text
        transform="translate(328.666 375.75)"
        className="st12 st10 st19">
        {"P-001A"}
      </text>
      <text
        transform="translate(328.666 440.127)"
        className="st12 st10 st19">
        {"P-001B"}
      </text>
      <path
        className="st20"
        d="M319.6 360.3c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st3"
        d="M319.6 348.6c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st2"
        d="M373.8 328.4h16.4c2.8 0 5 2.3 5 5v51.9c0 2.8-2.3 5-5 5h-16.4"
      />
      <path
        className="st18"
        d="M228.1 631.8h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
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
        transform="rotate(-.756 47238.681 -13848.407) scale(.91928)"
      />
      <circle
        transform="rotate(-.769 206.993 646.524) scale(.99999)"
        className="st3"
        cx={207}
        cy={646.5}
        r={10.9}
      />
      <circle
        className="cursorPointer"
        onClick={() => loadGrafico(20, "Estado P-005", true)}
        fill={getColor(datosScada.P005)}
        cx={207}
        cy={646.3}
        r={8}
      />
      <text
        transform="translate(192.938 684.577)"
        className="st12 st10 st19">
        {"P-005"}
      </text>
      <text
        transform="translate(163.992 483.652)"
        className="st12 st10 st19">
        {"TK-001"}
      </text>
      <path
        className="st6"
        d="M142.2 1135.6H267v97.7H142.2z"
      />
      <path
        className="st17"
        d="M266.8 1119.2v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1v-111.2"
      />
      <text
        transform="translate(188.736 1256.364)"
        className="st12 st10 st19">
        {"TK-CIP"}
      </text>
      <path
        className="st6"
        d="M876.1 674.1h124.8v97.7H876.1z"
      />
      <path
        className="st17"
        d="M1000.7 657.8V769c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1V657.8"
      />
      <text
        transform="translate(922.625 794.903)"
        className="st12 st10 st19">
        {"TK-002"}
      </text>
      <text
        transform="translate(464.343 508.921)"
        className="st12 st10 st19">
        {"Hipoclorito"}
      </text>
      <path
        className="st17"
        d="M511.7 429.3h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
      />
      <path
        className="st18"
        d="M501.2 438.3h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
      />
      <path
        className="st17"
        d="M469.5 429h15.2c1 0 1.8.8 1.8 1.8V470"
      />
      <path
        className="st18"
        d="M480 438h-14c-.8 0-1.5-.7-1.5-1.5v-14c0-.8.7-1.5 1.5-1.5h14c.8 0 1.5.7 1.5 1.5v14c0 .8-.7 1.5-1.5 1.5z"
      />
      <path
        className="st21"
        d="M471.2 450H510v40h-38.8z"
      />
      <path
        className="st17"
        d="M510 443.3v45.2c0 .7-.4 1.3-.8 1.3h-37.1c-.5 0-.8-.6-.8-1.3v-45.2"
      />
      <path
        className="st20"
        d="M319.6 421.7c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st3"
        d="M319.6 410c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st2"
        d="M247.8 382.4h48.5"
      />
      <path
        className="st0"
        d="M511.6 418.9v-20c0-2.8-2.1-5-4.6-5h-32.7c-2.6 0-4.6 2.2-4.6 5v20M490.6 368.9v25"
      />
      <path
        className="st23"
        d="M495.5 374.2c0 .9-.7 1.6-1.6 1.6h-6.3c-.9 0-1.6-.7-1.6-1.6 0-.4.2-.8.5-1.1l3.1-3.1c.6-.6 1.5-.6 2.2-.1l3.2 3.2c.3.3.5.7.5 1.1z"
      />
      <path
        className="st3"
        d="M486.9 374.2c0-.2.1-.3.2-.4l3.1-3.1c.2-.2.6-.2.9 0l3.1 3.1c.1.1.2.3.2.4 0 .3-.2.6-.6.6h-6.3c-.3 0-.6-.3-.6-.6m-2 0c0 1.4 1.2 2.6 2.6 2.6h6.3c1.4 0 2.6-1.2 2.6-2.6 0-.7-.3-1.3-.8-1.8l-3.1-3.1-.1-.1-.1-.1c-1.1-.9-2.6-.8-3.5.2l-3.1 3.1c-.5.5-.8 1.1-.8 1.8z"
      />
      <circle
        className="st24"
        cx={345}
        cy={638.3}
        r={9.2}
      />
      <path
        className="st2"
        d="M644.5 636.6h258c2.4 0 4.4 2 4.4 4.4v18.4"
      />
      <circle
        className="st24"
        cx={757.1}
        cy={638.3}
        r={9.2}
      />
      <path
        className="st20"
        d="M131.9 351.4c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
      />
      <path
        className="st3"
        d="M143.6 351.4c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0L133 352c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <path
        className="st2"
        d="m778.2 223.7.2-11c.1-3.7-3-6.8-6.7-6.7l-168.5.6c-3.6 0-6.6 2.9-6.6 6.6l-2.1 138.5c-.1 3.6-3 6.6-6.7 6.6H396.2"
      />
      <path
        className="st18"
        d="M635 650H503c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.2-2.7 3.8-6 3.8z"
      />
      <path
        className="st6"
        d="M636.3 650h-133c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.9-.2.9z"
      />
      <path
        className="st18"
        d="M635 677H503c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.7 3.8-6 3.8z"
      />
      <path
        className="st6"
        d="M636.3 677h-133c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.9-.2.9z"
      />
      <path
        className="st18"
        d="M635 703.9H503c-3.3 0-6-1.7-6-3.8V687c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.2-2.7 3.8-6 3.8z"
      />
      <path
        className="st6"
        d="M636.3 703.9h-133c-3.4 0-6.3-1.7-6.3-3.8V687c0-2 2.8-3.8 6.3-3.8L636.5 703c.6.3.5.9-.2.9z"
      />
      <path
        className="st18"
        d="M635 730.9H503c-3.3 0-6-1.7-6-3.8V714c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.7 3.8-6 3.8z"
      />
      <path
        className="st6"
        d="M636.3 730.9h-133c-3.4 0-6.3-1.7-6.3-3.8V714c0-2 2.8-3.8 6.3-3.8L636.5 730c.6.3.5.9-.2.9z"
      />
      <path
        className="st2"
        d="M493.3 721.7h-16.4c-2.8 0-5-2.3-5-5v-80M472.9 666.7h20.4M472.5 693.6h20.4M644.5 721.7h16.4c2.8 0 5-2.3 5-5v-80M664.9 666.7h-20.4M665.2 693.6h-20.4"
      />
      <path
        className="st20"
        d="M488.5 642.6c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st3"
        d="M488.5 630.9c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st0"
        d="M411.1 789.1h156.4M566.6 844.1h-13.3c-2.8 0-5-2.3-5-5v-49.4M611 789.7V839c0 2.8-2.3 5-5 5h-14.5"
      />
      <path
        className="st18"
        d="m571.7 784 7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st18"
        d="m587.3 794.6-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6zM586.9 835.1h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM571.7 839l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st18"
        d="m587.3 849.6-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st17"
        d="M579.5 834.1v10"
      />
      <path
        className="st25"
        d="M570.5 826.1h18M579.5 827.1v8"
      />
      <path
        className="st0"
        d="M640.3 819.9v-26.1c0-2.3-1.8-4.1-4.1-4.1h-45.6"
      />
      <path
        className="st18"
        d="M637.3 832.2h6v17.7h-6z"
      />
      <path
        className="st18"
        d="M651.7 822.5c1.2 1.2 1.2 3.3 0 4.5l-9.1 9.1c-1.2 1.2-3.3 1.2-4.5 0L629 827c-1.2-1.2-1.2-3.3 0-4.5"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        width={39}
        height={39}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA6RJREFUeNrsmOty2jAQhW3ZBmIg zbVNr3n/52o7kyZNaSBcgrFVOXM2c7qRQQba/IlnzhiMkT5ptRcpil6v12unK37xBhra47uF5LIv ARg3KCJA2/D9nwIKiPEoVrNWKVm67x1QgyVOqVOGe0qQArJSKj3AewEUOIbqOPWgLr5ngBS4B6el 04I+Fwr2menTHeAywOROfachVH8+wG8JOq9h5k5TpRnBCuhfjpRuCdcBxMDpjdMJdIzvfcymAC4A M3EaO/12Gjnd4dkUoJGGTLecuRruEFDvSKdORwBvAqzhbp1uoFtwTKi/J8i0pUOk6HgAmPdOn5w+ 4vMZzWCHAAuY+J4A5b0u2tYhqAoFjJRp+zDlhdNnp0vcL/B8iEGk5MUlTDjHOzLLB2TFCu+xw8Rp i9nL0HFt2nPMWA32BTN4ht8O8G7iCTN9KEdbGfpZwVGW5DBVGxMLYI7RC+AH3M/xPCc4owJ1RiFJ 4qUl80+xBMRhHiHTwPQl5h0ApJ6tt9AJZi7HO6mCk4uDusRfgRvDq8WzBTLIxOIcXZhHwsop1pMP TicASwNlsw8x4GPl/WKFlWm5/gTwCBqqNWcashMXD4YyUI/WJQf4p4GagDXIM5hjlEMKxpvgmsox TpVdSpEpt2cCGuI12ANkjgazNWZtm8+5yDA8O5tGKws7IU/MVChpC+ebBKPaijcBhlTBu9ST1lMn PuvTBDRSUZQvSFJ92D0Alp46ca2JuS6rKNI/IOnPUAAstwDlQXO7uux6nFETOMoVgKaoOiaI+vOW kFalPsnPetDBgJzEHwB4h4pEarlQSEuFQ0HWmKCtMQa9wO9BuViP9h6N/XL6ScVBonZxxuNEYtYC ENLWCO2NaMCFDDZpERYMhZoOKfUAWgVV0noTuBro2um70zfcbwA9l2Ih2SJmcdI3anNe0foRrywI bAZT1jP2A1Bfcb/CcykUylATsycv0EGHCs0VRjxBETGgssvQ/5eqcrkmwCs8m5KT2DYVtaXd2ZQ6 Lgl6hArnUJX8kXKyMe1JrjCT12TagoN2GggX0QKP1KzMqNNjApRNk/UAjvC+OMcY7SxVyb9Tgu9Q uTSgffFAVdaRZ288png6pc18qUNV21zKiV2D9qie66rKmkOVBOe5OmEofUcguxx9xA2Vjq9s4tRW rDmjsfs8PAo53YrVsRvHRf4e7fPwaB1o7CnxI8+mXJ8X/pcDzKbg7quQgk9a930EvKnN1rXjHwEG AOX1qCQy1KZUAAAAAElFTkSuQmCC"
        transform="translate(452.574 454.074) scale(.8974)"
      />
      <circle
        className="st3"
        cx={470.4}
        cy={471.8}
        r={10.9}
      />
      <circle
        className="cursorPointer"
        onClick={() => loadGrafico(11, "Nivel Hipoclorito", true)}
        fill={getColor(datosScada.P002)}
        cx={470.4}
        cy={471.6}
        r={8}
      />
      <text
        transform="translate(882.454 508.921)"
        className="st12 st10 st19">
        {"Metabisulfito"}
      </text>
      <path
        className="st17"
        d="M933.8 429.3h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
      />
      <path
        className="st18"
        d="M923.3 438.3h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
      />
      <path
        className="st17"
        d="M891.7 429h15.2c1 0 1.8.8 1.8 1.8V470"
      />
      <path
        className="st18"
        d="M902.2 438h-14c-.8 0-1.5-.7-1.5-1.5v-14c0-.8.7-1.5 1.5-1.5h14c.8 0 1.5.7 1.5 1.5v14c0 .8-.7 1.5-1.5 1.5z"
      />
      <path
        className="st21"
        d="M893.3 450h38.8v40h-38.8z"
      />
      <path
        className="st17"
        d="M932.1 443.3v45.2c0 .7-.4 1.3-.8 1.3h-37.1c-.5 0-.8-.6-.8-1.3v-45.2"
      />
      <path
        className="st0"
        d="M933.7 418.9v-20c0-2.8-2.1-5-4.6-5h-32.7c-2.6 0-4.6 2.2-4.6 5v20M912.7 368.9v25"
      />
      <path
        className="st23"
        d="M917.6 374.2c0 .9-.7 1.6-1.6 1.6h-6.3c-.9 0-1.6-.7-1.6-1.6 0-.4.2-.8.5-1.1l3.1-3.1c.6-.6 1.5-.6 2.2-.1l3.2 3.2c.3.3.5.7.5 1.1z"
      />
      <path
        className="st3"
        d="M909 374.2c0-.2.1-.3.2-.4l3.1-3.1c.2-.2.6-.2.9 0l3.1 3.1c.1.1.2.3.2.4 0 .3-.2.6-.6.6h-6.3c-.3 0-.6-.3-.6-.6m-2 0c0 1.4 1.2 2.6 2.6 2.6h6.3c1.4 0 2.6-1.2 2.6-2.6 0-.7-.3-1.3-.8-1.8l-3.1-3.1-.1-.1-.1-.1c-1.1-.9-2.6-.8-3.5.2l-3.1 3.1c-.5.5-.8 1.1-.8 1.8z"
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
        transform="translate(875.872 454.074) scale(.8974)"
      />
      <circle
        className="st3"
        cx={893.7}
        cy={471.8}
        r={10.9}
      />
      <circle
        className="cursorPointer"
        onClick={() => loadGrafico(12, "Nivel Metabisulfito", true)}
        fill={getColor(datosScada.P003)}
        cx={893.7}
        cy={471.6}
        r={8}
      />
      <path
        className="st18"
        d="M650.5 238.8c0-6.7-7.8-12.1-17.5-12.1s-17.5 5.5-17.5 12.1h.1c-.1.3-.1.7-.1 1.1v57.6c0 3.5 3.4 6.4 7.6 6.8v6.2h5.2v-6.1h9v6.1h5.2v-6.2c4.5-.2 8-3.2 8-6.8v-57.6c0-.3-.1-.7-.1-1.1h.1z"
      />
      <text
        transform="translate(620.144 330.333)"
        className="st12 st10 st19">
        {"FI-01"}
      </text>
      <path
        className="st2"
        d="M633 205.9v17.8M654.9 243.8h9c2.3 0 4.2 1.9 4.2 4.1l.3 104.3c0 3.3 2.7 5.9 5.9 5.9H1332c6.2 0 11.1 5 11.1 11.1v150.5c0 6.2-5 11.1-11.1 11.1H125.7c-6.2 0-11.1 5-11.1 11.1v106.2c0 6.2 5 11.1 11.1 11.1H181"
      />
      <path
        className="st18"
        d="M722.4 238.8c0-6.7-7.8-12.1-17.5-12.1s-17.5 5.5-17.5 12.1h.1c-.1.3-.1.7-.1 1.1v57.6c0 3.5 3.4 6.4 7.6 6.8v6.2h5.2v-6.1h9v6.1h5.2v-6.2c4.5-.2 8-3.2 8-6.8v-57.6c0-.3-.1-.7-.1-1.1h.1z"
      />
      <text
        transform="translate(692.006 330.333)"
        className="st12 st10 st19">
        {"FI-02"}
      </text>
      <path
        className="st2"
        d="M704.8 205.9v17.8M726.7 243.8h8.7c2.5 0 4.5 2 4.5 4.5l.4 110"
      />
      <path
        className="st18"
        d="M795.9 238.8c0-6.7-7.8-12.1-17.5-12.1s-17.5 5.5-17.5 12.1h.1c-.1.3-.1.7-.1 1.1v57.6c0 3.5 3.4 6.4 7.6 6.8v6.2h5.2v-6.1h9v6.1h5.2v-6.2c4.5-.2 8-3.2 8-6.8v-57.6c0-.3-.1-.7-.1-1.1h.1z"
      />
      <text
        transform="translate(765.515 330.333)"
        className="st12 st10 st19">
        {"FI-03"}
      </text>
      <path
        className="st2"
        d="M800.3 243.8h8.5c2.6 0 4.7 2.1 4.7 4.7l.4 109.8"
      />
      <circle
        className="st24"
        cx={1099.4}
        cy={358.2}
        r={9.2}
      />
      <path
        className="st18"
        d="M1221.1 349.2h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM1205.9 353.1l7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st18"
        d="m1221.5 363.7-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st17"
        d="M1213.7 348.2v10"
      />
      <path
        className="st25"
        d="M1204.7 340.2h18M1213.7 341.2v8"
      />
      <text
        transform="translate(1195.83 379.182)"
        className="st12 st10 st19">
        {"VX-106"}
      </text>
      <path
        className="st18"
        d="M1294.3 353.8c0-6.7-7.8-12.1-17.5-12.1s-17.5 5.5-17.5 12.1h.1c-.1.3-.1.7-.1 1.1v37.6c0 3.5 3.4 6.4 7.6 6.8v6.2h5.2v-6.1h9v6.1h5.2v-6.2c4.5-.2 8-3.2 8-6.8v-37.6c0-.3-.1-.7-.1-1.1h.1z"
      />
      <text
        transform="translate(1262.407 425.287)"
        className="st12 st10 st19">
        {"F-004"}
      </text>
      <path
        className="st20"
        d="M177.8 665.8c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st3"
        d="M177.8 654.1c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={157}
        height={140}
        xlinkHref="data:image/png;base64,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"
        transform="translate(266.783 487.9)"
      />
      <path
        className="st3"
        d="M325.3 497.1h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V503.4c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* PT-017 */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(5, "Presión Osmosis", false)}>
        <path
          className={getTarjetaClass(5)}
          d="M276 504.5h138.1v99.8H276z"
        />
        <text
          transform="translate(322.472 544.09)"
          className="st33">
          <tspan
            x={0}
            y={0}
            className="st6 st10 st11">
            {"Presi\xF3n"}
          </tspan>
          <tspan
            x={-3.5}
            y={16.8}
            className="st6 st10 st11">
            {"Osmosis"}
          </tspan>
        </text>

        {/* Campana */}
        <g
          className={`${getTemaAlarma(5)} cursorPointer`}
          onClick={() => {
            onClickAlarma(5, "Presión Osmosis");
          }}>
          <path d="M300.9 575.3c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
          <path d="M299.2 574.3c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM310.5 573c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
          <path d="M311.1 571.2c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM312 580.3v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM307 587.8c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
        </g>

        <text
          transform="translate(326.859 589.408)"
          className="st12 st10 st14">
          {datosScada.PT017 / 10}
        </text>
        <text
          transform="translate(365.984 589.013)"
          className="st12 st34 st35">
          {"Bar"}
        </text>
        <text
          transform="translate(328.172 524.449)"
          className="st12 st10 st19">
          {"PT-017"}
        </text>
      </g>
      {/* Fin PT-017 */}

      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={158}
        height={140}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAACMCAYAAACNmxDrAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABx1JREFUeNrsmolym0gURQGhxY7j ZNb8//fNJPGmXaIHqt6r3HQatMRJBjin6pVsyW4V6HD7daMsA/gF5P+TMaB/hJ8pTX7GzzAu6cI1 MuYX/J1WlvgdxidfENlC4rmrxfPXC/u5SFRO6o0y7ZrHKlH+fGcClmem3MSqlMcyko+pdzxTq0p3 sDrKYyzo2eLlknAu2ixRLmKBeKMSrxLRdonK7fXW5CvPkG5a17yuG6tbe5ybfNPEtAvDFdCTbm+S beta17WyKuy5rKvf60o8l25hst3V9baue/v51l6b2jg5/d4o+rpgSdeIt6lrWddLXc/mwiTxf1Us YHki7WaWbo1wv1m9t7qT5Ju09HowvFWsT7OedI1wjxZCpYimi41v+r1U4hVR2t2ZaH/U9Vddf5qA 95Z6c1loIN44xDuYeCuT7o35kouYWp2JF69iPe1cvEa4D3X9bRK+i8RjX298ibc0P+YWPN77bWWh cUgkX3KqLWQV69OsJt6HSLxZy8oWhru4OEriqXS60FhbD+jyuV+hSzxNvDc2rTby/S51b6+7eCws xrHAcPH2kXQ7S8Cm53uSxUZpf5u3JV4eJZ5vo/iK9l7qrT23kO0UxBvPytb38Ar7fWcpl9rxSM6G XYnn4vl2yq2ln+/jLRIrWhiHgBOR7iB+3IofMxFP+//QtqpNyTcX0WYSoZNoYBiHeP5ZH6OASjlS dCVenphu9f6sD6IV36dFvHGRZ1/ft59mX26lajAlZ8MiGijeVtFvoUyigZBuvMLFNYkkVFfi/d08 Fq/tDVLJhmiQCicNqVQw5anEaxs8y7gPC9clYasrxRUDZ6QenHDjZEAVFwwE0OXJRa4UnDv4QUJ2 zoyIB78ExAPEA8QDQDxAPADEA8QDQDxAPADEA8QDxANAPEA8AMQDxANAPEA8AMQDxANAPEA8QDwA xAPEA0A8QDwAxAPEA0A8QDwAxAPEA8QDQDxAPADEA8QDQDxAPADEA8QDQDxAPEA8AMQDxANAPEA8 AMQDxANAPEA8AMQDxAPEA0A8QDwAxAPEA0A8QDwAxAPEA0A8QDxAPADEA8QDQDxAPADEA8QDQDxA PADEA8QDxANAPEA8AMQDxANAPEA8AMQDxANAPPgRBHkMl4gXon8GOOXJRa4UV75JQEg4EVThe8QL JCBcKF9cF4vn/1hZnTUgjE60KlHHhDNfhVbRkW4hMZgOWCEiyRa5cbBSV6qUfKX8kncMtpdBvXzQ fKAnOH+FD2joSRc7srPai4BV6lyULQP7oM0AW6uNPerAE0nOfODC5ReKNtSe2P1Q2dyPjfiyjwIq dImXkq4ZbGW1tMeF/O80Ei8fgHipCh3HFq5psHsmm6N+bMSLpfixEfmOqXNRtkToQcRrBnqp68nq 1mTLbdCZJV/fxVPJikTlifQLZzTaQxAwJIJpZ264F4/2+GzPx6l3duI1A6/N4mbAB5NuJtJtRby+ Trd6wRR2LBM7N6X8rAKGxDmrpK9JNdl9n3rjYNqaG41wH+v6VNdnc+XF3Nm19Xllx/zt4jUG39j0 6kl3sDhtRJzbOJoYfUy6QiSb2gWlVSYuML1QD9JcdzXZoeeJp23Y0gKpEe8fk+/BxNtEU23WNdXq 4C7ei5x4T7qNCaniFT0Xz6Wb2UW2sOO7kZZiKufBz5U22Rs7ZytptnciX5/FCy3iPVrS/WsCPtrz Kt7JxEs1j3qVV/KGd/ahzKO/6aN4nnYzO55bO76m3tb1xp7zKbWQc6W98NIuyBerlewEtG4t9Gw1 e5SpdmXH6/I9iHje4521nRIi+XZRX+MyvtgHsYhSoI8LDBfP0+7GRLuv652k1l4S3reRjtEC7FFO /pN9AGtJvT6KF69oqyjhl3KhPUfH3NpilB1vdkzYvpdpdi7TT9HzxYWLNzfxmqR7L1PGVvo2v9iy 6EJ8sKv+k1z93mRveyxe166HthdrOdZtduUGstvdJl5Xwz2ExLuTqVI3Rdf2uoq3tnT7bD3Ox6jJ HlLiaZ/n7di+ZUHVeazliTerWpbRZWKLoc/i5bKaXdhUuzJpdMHwbK+peL7d9Mnqo0kYN9mHni4u Qkuvp/3esWX7qPV4yzOX0Nr3tW2s9n3jWFe1a0m6jexn3neI9yBJ9yCJOYRVbdsKN7VZftaeZXmm 7ZUsMKroAxvCLbJMVrbTaNrYSh93l325c+Pi6Z2dtt37o5y3Id1Ca7s9ePIYywstb5tOh/AFAe/1 jtnX37rYJVbyft58I30lq7ulNNln9TsDmHqzSy+q8jveNMgHFgYiXkj0MLpZ6ita3U7xBddGhNsl Nk+H9C2V8BonG77t9/T2WSnbRlNZVGXR1sJe+rnDgKV71f4GvpUv/tKAlt4yOyaKb2cj3nedl1xW 7vFjFq3iLlrVcYLhXAG7VvAXr+o4sfCa5wnhAAAg4j8BBgCJYT+LScKS1gAAAABJRU5ErkJggg=="
        transform="translate(411.783 211.9)"
      />

      {/* PT-009 */}
      <path
        className="st3"
        d="M471 221.4h-43.1c-3.5 0-6.3 2.8-6.3 6.3V330c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V227.7c0-3.5-2.8-6.3-6.3-6.3H471z"
      />
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(2, "P. entrada Pre-tratamiento", false)}>
        <path
          className={getTarjetaClass(2)}
          d="M421.7 228.8h138.1v99.8H421.7z"
        />
        <text
          transform="translate(442.478 268.344)"
          className="st33">
          <tspan
            x={0}
            y={0}
            className="st6 st10 st11">
            {"Presi\xF3n entrada"}
          </tspan>
          <tspan
            x={1.2}
            y={16.8}
            className="st6 st10 st11">
            {"Pre-tratamiento"}
          </tspan>
        </text>

        {/* Campana */}
        <g
          className={getTemaAlarma(2)}
          onClick={() => onClickAlarma(2, "P. entrada Pre-tratamiento")}>
          <path d="M446.6 299.6c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
          <path d="M444.9 298.6c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM456.2 297.3c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
          <path d="M456.8 295.5c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM457.7 304.6v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM452.7 312.1c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
        </g>

        <text
          transform="translate(472.55 313.663)"
          className="st12 st10 st14">
          {datosScada.PT009 / 10}
        </text>
        <text
          transform="translate(511.676 313.267)"
          className="st12 st34 st35">
          {"Bar"}
        </text>
        <text
          transform="translate(473.863 248.704)"
          className="st12 st10 st19">
          {"PT-009"}
        </text>
      </g>
      {/* Fin PT-009 */}

      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={165}
        height={250}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAAD6CAYAAADA84f4AAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB81JREFUeNrs24tuGkkWgGEaGttJ 7J1Es7va93++nYwnvptLbyOd2pzUFBh7Mk4w3y8dGRB0RPfPuVR1JhPgJ6P7SY6Bt8fwGkJ1Oz5H TGwTcniuqN0z3tM1gpDYJeaQRBwar71IyiLfNP3NUQsKZAnXjSivb82c/RNCFvlmKfqIWSWnck7E nBGLhMuIVfpby7uXlF0l43yMkyqynN0TPSeOS8p1kvAxxcMYi/BjtS1j9k8I2YeAZ2O8S7F5fhqy 9lUpx3HLWTLkIol4N8ZtxH28NtnWX/Y7eshZCLmR8MMYFyk+xOsnIWYp4zKlPnKIDLkIAW/GuB7j KiWwWsh1lrOVKaepZJ+FgB/H+BTxMYlZsuVsS2+J45u216ls34WMl+HKLEm4Slm12yZlnqRzlrwI Gf81xj/H+DXEPA9p51VfSUxSLqNEb7Lkl/BoHu9bVcPPKj73fzH7Hf1kLeVGyP+EnJ9CyneVlEo3 KWspPyQhF/H6feotp2ngmeySsq+k/BgZciPkv0PKi5QpDTqYbJEyC3kX/eV1WsGZ7hp0uoaUZ2nI yX3lp1S++6qfJOZxDzulX3yohLypZpGTxsrNk+W7jw+X6fs84iI9btlOShP4Krm1CH/Kis1Z5c2f BuRd65T95Oui+enk61rlWTrwSZq8gSJl8WEZ7pym7DhvrNjkKjv0VXbrGtly3oi8mzOTHbGljOdt 6RytDNks3627gVp739tuygBa80nLl50380yfceBuYi0SLxd0b3+mexxwMnH/JF4u4+S5yWz6F/8R 4CWy7nRouqeAwKthKQekBEgJUgKkBCkBUoKUACkBUoKUAClBSoCUICVASpASICVASpASICVICZAS pARICZASpARICVICpAQpAVKClAApAVKClAApQUqAlCAlQEqAlCAlQEqQEiAlSAmQEqQESAmQEqQE SAlSAqQEKQFSAqQEKQFSgpQAKUFKgJQgJUBKgJQgJUBKkBIgJUgJkBIgJUgJkBKkBEgJUgKkBCkB UgKkBCkBUoKUAClBSoCUAClBSoCUICVASpASICVICZASICVICZASpARICVICpARICVICpAQpAVKC lAApQUqAlAApQUqAlCAlQEqQEiAlQEqQEiAlSAmQEqQESAlSAqQESAlSAqQEKQFSgpQAKUFKpwCk BEgJUgKkBCkBUoKUACkBUoKUAClBSoCUICVASpASICVASpASICVICZASpARICZASpARICVICpAQp AVKClAApAVKClAApQUqAlCAlQEqAlCAlQEqQEiAlSAmQEqQESAmQEqQESAlSAqQEKQFSAqQEKQFS gpQAKUFK4EdLOURM0l/gp8uUtahkxQ+RcpA58Z15MrFN98iM64ihCuC5lXUvb6Y7DM5CbmIVsd4i KjDskHPvpNanD3aVjBsBl2MsIpYpspzdGz3B3d9wgY5FzPUesVXQfsdBVyHj4xgPY9xHPCRRpynj dm9cxu6ZEh5jD14kW6UEtqgSW664Q+v89XsIuRHxdoybiM3jszFm8Zl1SDn9jlnmR0vZimHL9xp2 tD/H0NoMW/zJiSwntMeq2v5piO63DDbF8CLk9RhfIt6lz20OPA9Bc7bsDlzGaSO66r27evDhiPru /L3WyZ+HSGJX4c91PL8LMRdbMubOTPkYB9gc7I8xPlRCLkPa03htmi7qIZbrIuMsoo+Ype83faJ/ WqbSVQ+Gb7mcD0nKVUpoG3cux/gcDl0lMRdbsuVWKZdJyqso16eVkHch6lm6eIeYKbtKyD6y/0kV faoIQyMzLFLL81j1UeV9b1nKOqFlKX8b47/x+Dply2U6L81MmX/J9YHnqYcsQv5ji5TdgUpZhDyJ H+C7FOVHOU/fs/4Bl77pLuJ+S5ka3miWbCW0m2j5PoeYn+P5bZT35T7lu5WCc9lapV7hfIz36WJN D3QKz1kyC3lexTL9AEu2zBfgNvVO1/H8vmrshyPIlMtqQL4KES8jvqRMuXf5nlTNapdeK6JehZBn cSHnBzyBFylLljyLCrCpBL+M8TFO4Hl8/5MQeIjnpe++ir7pMjX3OSO8RSnryXuVElqZvsuqTWvY aZ6T/okF0DLMlOd1n1mEPPRBJ0tZsuQvqf8pyxkPqbce4vltknFTnn5PTX2RcnFEmTJvupRzdpda m4dqzXKv8p2zZb0gukgXYp56rFlDyEPLlLNKyjwplrhIKxBFyjxhlr7pMkn5eESZcttuYB78Fimj Ns9Fv8eI3+oXZtU02uolD0nKMujMU/kuGwWlX7yJkv4+3rcOKa/ShPlbypTXqadcVRP4W5SytURW L4/V9040VyP6PaeqevuoXlQ+xLLdWhLqozznCfo+TZIXIWUrU/4ecVmV7lym3uqS0KThSmsTYa/N hP4Zv4RVXLx1Q8RD31acpBJe9vof0+PSR59X5ftx8nXX4o+UIW9C5tauxbFsO7a2Wvc6B/0z/6H8 +FDL9VO9Zb4TajH5dmfrfTXoLFIWvakGo0W1DncMN2YMe3jzJP1f+EeH6oIOb0DK1rZhHu5OYxgq S195Ta5eMD82IZ8t31OlC9/2l11aVZhXkRfP8/BXT5fHKOR37afQ7jGznLNqtWEy+faO/NYNGIQk 5d+WNafV365q5usJc0JIUr6WnK1z9qL/HAVSvsa5IiMA4JX4nwADAKvcGNM/xyDKAAAAAElFTkSu QmCC"
        transform="translate(679.783 377.9)"
      />
      <path
        className="st3"
        d="M739 387.1h-43.1c-3.5 0-6.3 2.8-6.3 6.3v212.3c0 3.5 2.8 6.3 6.3 6.3h51.6c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.1 1-.9 2.2-1.4 3.5-1.4h61.7c3.4 0 6.3-2.8 6.3-6.3V393.4c0-3.4-2.8-6.3-6.3-6.3H739z"
      />

      {/* FE-008 */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(8, "Caudal de Permeado", false)}>
        <path
          className={getTarjetaClass(8)}
          d="M 689.6 501.3 H 836 v 103.8 H 689.6 z"
        />

        <text
          transform="translate(731.446 539.078)"
          className="st33">
          <tspan
            x={0}
            y={0}
            className="st6 st10 st11">
            {"Caudal de"}
          </tspan>
          <tspan
            x={-0.4}
            y={16.8}
            className="st6 st10 st11">
            {"Permeado"}
          </tspan>
        </text>

        <g
          className={getTemaAlarma(8)}
          onClick={() => onClickAlarma(8, "Caudal de Permeado")}>
          <path d="M709.2 576.3c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-1.9 1.1-2.5 2.2z" />
          <path d="M707.5 575.3c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.5c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM718.8 574c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.7-2.5-2.2z" />
          <path d="M719.4 572.2c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.3-2.4-3.7-3zM720.3 581.3v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM715.3 588.8c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
        </g>

        <text
          transform="translate(745.1 586.397)"
          className="st12 st10 st14">
          {datosScada.FE008 / 10}
        </text>
        <text
          transform="translate(786.367 586.002)"
          className="st12 st34 st35">
          {"m\xB3/hr"}
        </text>
      </g>
      {/* Fin FE-008 */}

      {/* AE-007 */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(10, "E.C. Producto", false)}>
        {" "}
        <text
          transform="translate(745.1 417.232)"
          className="st12 st10 st19">
          {"AE-007"}
        </text>
        <path
          className={getTarjetaClass(10)}
          d="M 690 499 z M 836 499.1 H 689.6 V 395.2 H 836"
        />
        <text
          transform="translate(739.352 436.078)"
          className="st33">
          <tspan
            x={0}
            y={0}
            className="st6 st10 st11">
            {"E.C. de"}
          </tspan>
          <tspan
            x={-4.7}
            y={16.8}
            className="st6 st10 st11">
            {"Producto"}
          </tspan>
        </text>
        <text
          transform="translate(745.1 417.232)"
          className="st12 st10 st19">
          {"AE-007"}
        </text>
        {/* Campana */}
        <g
          className={getTemaAlarma(10)}
          onClick={() => onClickAlarma(10, "E.C. Producto")}>
          <path d="M709.2 473.3c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
          <path d="M707.5 472.3c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM718.8 471c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
          <path d="M719.4 469.2c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM720.3 478.3v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM715.3 485.8c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
        </g>
        <text
          transform="translate(745.1 484.397)"
          className="st12 st10 st14">
          {datosScada.AE007 / 10}
        </text>
        <text
          transform="translate(786.367 484.002)"
          className="st12 st34 st35">
          {"\xB5S/cm"}
        </text>
      </g>
      {/* Fin AE-007 */}
      <path
        className="st16"
        d="M700.7 500.1h124"
      />
      <text
        transform="translate(747.1 520.33)"
        className="st12 st10 st19">
        {"FE-008"}
      </text>

      <path
        className="st2"
        d="M228 788.6h-72.9c-2.8 0-5-2.3-5-5V674.5M512.1 737.2v46.4c0 2.8-2.3 5-5 5h-255"
      />
      <path
        className="st20"
        d="M245.4 1119c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
      />
      <path
        className="st3"
        d="M257.1 1119c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <path
        className="st18"
        d="M760.1 955.1h132c3.3 0 6-1.7 6-3.8v-13.1c0-2-2.7-3.8-6-3.8h-132c-3.3 0-6 1.7-6 3.8v13.1c0 2.1 2.7 3.8 6 3.8z"
      />
      <path
        className="st6"
        d="M758.8 955.1h133c3.4 0 6.3-1.7 6.3-3.8v-13.1c0-2-2.8-3.8-6.3-3.8l-133.2 19.8c-.7.3-.5.9.2.9z"
      />
      <path
        className="st18"
        d="M760.1 982h132c3.3 0 6-1.7 6-3.8v-13.1c0-2-2.7-3.8-6-3.8h-132c-3.3 0-6 1.7-6 3.8v13.1c0 2.2 2.7 3.8 6 3.8z"
      />
      <path
        className="st6"
        d="M758.8 982h133c3.4 0 6.3-1.7 6.3-3.8v-13.1c0-2-2.8-3.8-6.3-3.8l-133.2 19.8c-.7.3-.5.9.2.9z"
      />
      <path
        className="st18"
        d="M760.1 1009h132c3.3 0 6-1.7 6-3.8v-13.1c0-2-2.7-3.8-6-3.8h-132c-3.3 0-6 1.7-6 3.8v13.1c0 2.1 2.7 3.8 6 3.8z"
      />
      <path
        className="st6"
        d="M758.8 1009h133c3.4 0 6.3-1.7 6.3-3.8v-13.1c0-2-2.8-3.8-6.3-3.8l-133.2 19.8c-.7.3-.5.9.2.9z"
      />
      <path
        className="st18"
        d="M760.1 1035.9h132c3.3 0 6-1.7 6-3.8V1019c0-2-2.7-3.8-6-3.8h-132c-3.3 0-6 1.7-6 3.8v13.1c0 2.2 2.7 3.8 6 3.8z"
      />
      <path
        className="st6"
        d="M758.8 1035.9h133c3.4 0 6.3-1.7 6.3-3.8V1019c0-2-2.8-3.8-6.3-3.8L758.6 1035c-.7.3-.5.9.2.9z"
      />
      <path
        className="st2"
        d="M901.8 1026.7h16.4c2.8 0 5-2.3 5-5v-80M922.2 971.7h-20.4M922.6 998.7h-20.4M750.6 1026.7h-16.4c-2.8 0-5-2.3-5-5v-70.8c0-3.6 3-6.6 6.6-6.6h14.8M730.2 971.7h20.4M729.8 998.7h20.4"
      />
      <path
        className="st20"
        d="M906.6 947.7c1 0 1.9-.8 1.9-1.9v-9c0-1-.8-1.9-1.9-1.9-.5 0-1 .2-1.3.5l-4.5 4.5c-.7.7-.7 1.8-.1 2.6l.1.1 4.5 4.5c.4.5.8.6 1.3.6z"
      />
      <path
        className="st3"
        d="M906.6 936c.5 0 .9.4.9 1v9c0 .6-.5.9-.9.9-.2 0-.4-.1-.6-.3l-4.5-4.5c-.3-.4-.3-1 0-1.3l4.5-4.5c.2-.2.4-.3.6-.3m0-2c-.8 0-1.5.3-2 .9l-4.5 4.5c-1.1 1-1.1 2.7-.2 3.9l.1.1.1.1 4.5 4.5c.5.5 1.2.8 2 .8 1.6 0 2.9-1.3 2.9-2.9v-9c0-1.6-1.3-2.9-2.9-2.9z"
      />
      <path
        className="st20"
        d="M156.4 673.1c0 1-.8 1.9-1.9 1.9h-9c-1 0-1.9-.8-1.9-1.9 0-.5.2-1 .5-1.3l4.5-4.5c.7-.7 1.8-.7 2.6-.1l.1.1 4.5 4.5c.5.4.6.8.6 1.3z"
      />
      <path
        className="st3"
        d="M144.7 673.1c0-.2.1-.4.3-.6l4.5-4.5c.3-.3.9-.3 1.3 0l4.5 4.5c.2.2.3.4.3.6 0 .4-.3.9-.9.9h-9c-.6 0-1-.4-1-.9m-2 0c0 1.6 1.3 2.9 2.9 2.9h9c1.6 0 2.9-1.3 2.9-2.9 0-.8-.3-1.5-.8-2l-4.5-4.5-.1-.1-.1-.1c-1.2-.9-2.9-.9-3.9.2l-4.5 4.5c-.6.5-.9 1.2-.9 2z"
      />
      <circle
        className="st24"
        cx={512.2}
        cy={765.2}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={164}
        height={236}
        xlinkHref="data:image/png;base64,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 77Gx43gAAAAASUVORK5CYII="
        transform="translate(336.783 692.9)"
      />
      <path
        className="st3"
        d="M346.6 782.2v131.2c0 3.5 2.8 6.3 6.3 6.3h125.3c3.5 0 6.3-2.8 6.3-6.3V773.6c0-1.2.4-2.4 1.2-3.4l.3-.4c6.5-6.5 6.5-6.5-.2-12.9-.9-1-1.3-2.2-1.3-3.5v-44.7c0-3.5-2.8-6.3-6.3-6.3H352.9c-3.5 0-6.3 2.8-6.3 6.3v73.5z"
      />

      {/* PT-021 */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(6, "Presión de Rechazo", false)}>
        <path
          className={getTarjetaClass(6)}
          d="M346.2 709.3h138.1v99.8H346.2z"
        />
        <text
          transform="translate(382.93 748.835)"
          className="st33">
          <tspan
            x={0}
            y={0}
            className="st6 st10 st11">
            {"Presi\xF3n de"}
          </tspan>
          <tspan
            x={5.8}
            y={16.8}
            className="st6 st10 st11">
            {"Rechazo"}
          </tspan>
        </text>

        {/* Campana */}
        <g
          className={getTemaAlarma(6)}
          onClick={() => onClickAlarma(6, "Presión de Rechazo")}>
          <path d="M371.1 780.1c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
          <path d="M369.4 779.1c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM380.7 777.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
          <path d="M381.3 776c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM382.2 785.1v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM377.2 792.6c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
        </g>

        <text
          transform="translate(397.048 794.153)"
          className="st12 st10 st14">
          {datosScada.PT021 / 10}
        </text>
        <text
          transform="translate(436.174 793.758)"
          className="st12 st34 st35">
          {"Bar"}
        </text>
        <text
          transform="translate(398.361 729.194)"
          className="st12 st10 st19">
          {"PT-021"}
        </text>
      </g>
      {/* Fin PT-021 */}

      {/* Caudal de Rechazo */}

      <g
        className="cursorNormal"
        /* onClick={()=>loadGrafico(0,"Caudal de Rechazo",false)} */
      >
        <path
          className={getTarjetaClass(0)}
          d="M346.2 812.4h138.1v99.8H346.2z"
        />
        <text
          transform="translate(384.483 851.986)"
          className="st33">
          <tspan
            x={0}
            y={0}
            className="st6 st10 st11">
            {"Caudal de"}
          </tspan>
          <tspan
            x={4.3}
            y={16.8}
            className="st6 st10 st11">
            {"Rechazo"}
          </tspan>
        </text>
        <g
          /* onClick={()=>onClickAlarma(0)} */
          className="campanaVacia"
        >
          <path d="M371.1 883.2c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
          <path d="M369.4 882.2c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM380.7 880.9c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
          <path d="M381.3 879.1c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM382.2 888.2v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM377.2 895.7c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
        </g>
        <text
          transform="translate(397.048 897.305)"
          className="st12 st10 st14">
          {datosScada.caudalRechazo}
        </text>
        <text
          transform="translate(436.174 896.91)"
          className="st12 st34 st35">
          {"m\xB3/hr"}
        </text>
        <text
          transform="translate(376.361 832.346)"
          className="st12 st10 st19">
          {"FE-006 - FE-008"}
        </text>
      </g>

      {/* Fin Caudal de Rechazo */}
      <path
        className="st16"
        d="M353.7 810.1h124"
      />
      <path
        className="st18"
        d="m232.5 783.3 7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
      />
      <path
        className="st18"
        d="m248.1 793.9-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
      />
      <path
        className="st20"
        d="M900.6 657.2c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
      />
      <path
        className="st3"
        d="M912.3 657.2c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <path
        className="st18"
        d="M1112.1 736.1h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
      />

      <circle
        transform="rotate(-.769 1090.91 750.866) scale(.99999)"
        className="st3"
        cx={1091}
        cy={750.8}
        r={10.9}
      />
      <circle
        className="st22"
        cx={1091}
        cy={750.6}
        r={8}
      />
      <text
        transform="translate(1077.21 787.844)"
        className="st12 st10 st19">
        {"P-006"}
      </text>
      <path
        className="st20"
        d="M1067 769.2c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        className="st3"
        d="M1067 757.5c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st2"
        d="M1118.9 741.2H1331c6.7 0 12.2 5.5 12.2 12.2v175.9c0 6.7-5.5 12.2-12.2 12.2l-361.6.2H910.1"
      />
      <circle
        className="st24"
        cx={1217.8}
        cy={740.7}
        r={9.2}
      />
      <text
        transform="translate(1194.888 768.276)"
        className="st12 st10 st19">
        {"PSH-009"}
      </text>
      <circle
        className="st24"
        cx={1217.8}
        cy={941.3}
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
        transform="translate(1140.783 786.9)"
      />
      <path
        className="st3"
        d="M1200.1 796.1H1157c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V802.4c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* AE-009 */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(14, "Conductividad hacia RO-02", false)}>
        <path
          className={getTarjetaClass(14)}
          d="M1150.8 803.5h138.1v99.8h-138.1z"
        />
        <text
          transform="translate(1176.602 843.056)"
          className="st33">
          <tspan
            x={0}
            y={0}
            className="st6 st10 st11">
            {"Conductividad"}
          </tspan>
          <tspan
            x={5.1}
            y={16.8}
            className="st6 st10 st11">
            {"hacia RO-02"}
          </tspan>
        </text>

        {/* Campana */}
        <g
          className={getTemaAlarma(14)}
          onClick={() => onClickAlarma(14, "Conductividad hacia RO-02")}>
          <path d="M1169.7 874.3c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
          <path d="M1168 873.3c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM1179.3 872c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
          <path d="M1179.9 870.2c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM1180.8 879.3v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1175.8 886.8c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
        </g>

        <text
          transform="translate(1195.616 888.375)"
          className="st12 st10 st14">
          {datosScada.AE009 / 10}
        </text>
        <text
          transform="translate(1236.741 887.98)"
          className="st12 st34 st35">
          {"\xB5S/cm"}
        </text>
        <text
          transform="translate(1202.929 823.416)"
          className="st12 st10 st19">
          {"AE-009"}
        </text>
      </g>
      {/* Fin AE-009 */}

      <text
        transform="translate(999.284 1085.421)"
        className="st33">
        <tspan
          x={0}
          y={0}
          className="st12 st10 st19">
          {"Hidr\xF3xido"}
        </tspan>
        <tspan
          x={1.5}
          y={13.2}
          className="st12 st10 st19">
          {"de Sodio"}
        </tspan>
      </text>
      <path
        className="st17"
        d="M1042.8 1005.8h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
      />
      <path
        className="st18"
        d="M1032.3 1014.8h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
      />
      <path
        className="st17"
        d="M1000.7 1005.5h15.2c1 0 1.8.8 1.8 1.8v39.2"
      />
      <path
        className="st18"
        d="M1011.2 1014.5h-14c-.8 0-1.5-.7-1.5-1.5v-14c0-.8.7-1.5 1.5-1.5h14c.8 0 1.5.7 1.5 1.5v14c0 .8-.7 1.5-1.5 1.5z"
      />
      <path
        className="st21"
        d="M1002.3 1026.5h38.8v40h-38.8z"
      />
      <path
        className="st17"
        d="M1041.1 1019.8v45.2c0 .7-.4 1.3-.8 1.3h-37.1c-.5 0-.8-.6-.8-1.3v-45.2"
      />
      <path
        className="st0"
        d="M1042.7 995.4v-20c0-2.8-2.1-5-4.6-5h-32.7c-2.6 0-4.6 2.2-4.6 5v20M1021.8 945.4v25"
      />
      <path
        className="st23"
        d="M1026.6 950.7c0 .9-.7 1.6-1.6 1.6h-6.3c-.9 0-1.6-.7-1.6-1.6 0-.4.2-.8.5-1.1l3.1-3.1c.6-.6 1.5-.6 2.2-.1l3.2 3.2c.3.3.5.7.5 1.1z"
      />
      <path
        className="st3"
        d="M1018 950.7c0-.2.1-.3.2-.4l3.1-3.1c.2-.2.6-.2.9 0l3.1 3.1c.1.1.2.3.2.4 0 .3-.2.6-.6.6h-6.3c-.3 0-.6-.3-.6-.6m-2 0c0 1.4 1.2 2.6 2.6 2.6h6.3c1.4 0 2.6-1.2 2.6-2.6 0-.7-.3-1.3-.8-1.8l-3.1-3.1-.1-.1-.1-.1c-1.1-.9-2.6-.8-3.5.2l-3.1 3.1c-.5.5-.8 1.1-.8 1.8z"
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
        transform="translate(983.222 1029.87) scale(.8974)"
      />
      <circle
        className="st3"
        cx={1001.1}
        cy={1047.6}
        r={10.9}
      />
      <circle
        className="cursorPointer"
        onClick={() => loadGrafico(17, "Nivel Hidróxido de Sodio", true)}
        fill={getColor(datosScada.P007)}
        cx={1001.1}
        cy={1047.4}
        r={8}
      />
      <path
        className="st18"
        d="M366.9 1201.2h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
      />

      <circle
        transform="rotate(-.769 345.684 1215.945) scale(.99999)"
        className="st3"
        cx={345.8}
        cy={1215.9}
        r={10.9}
      />
      <circle
        className="st22"
        cx={345.8}
        cy={1215.7}
        r={8}
      />
      <text
        transform="translate(334.667 1253.089)"
        className="st12 st10 st19">
        {"P-08"}
      </text>
      <path
        className="st2"
        d="M251.9 1115.8v-21.1c0-5.7 4.6-10.3 10.3-10.3H460c5.1 0 9.2 4.1 9.2 9.2v103.2c0 5.1-4.1 9.2-9.2 9.2h-75.8M323.8 1224H274"
      />
      <path
        className="st20"
        d="M321.5 1217.7c-1 0-1.9.8-1.9 1.9v9c0 1 .8 1.9 1.9 1.9.5 0 1-.2 1.3-.5l4.5-4.5c.7-.7.7-1.8.1-2.6l-.1-.1-4.5-4.5c-.4-.5-.8-.6-1.3-.6z"
      />
      <path
        className="st3"
        d="M321.5 1229.4c-.5 0-.9-.4-.9-1v-9c0-.6.5-.9.9-.9.2 0 .4.1.6.3l4.5 4.5c.3.4.3 1 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3m0 2c.8 0 1.5-.3 2-.9l4.5-4.5c1.1-1 1.1-2.7.2-3.9l-.1-.1-.1-.1-4.5-4.5c-.5-.5-1.2-.8-2-.8-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9z"
      />
      <circle
        className="st24"
        cx={417.9}
        cy={1205.7}
        r={9.2}
      />
      <path
        className="st2"
        d="M500.1 1206h-49.8"
      />
      <path
        className="st20"
        d="M497.8 1199.7c-1 0-1.9.8-1.9 1.9v9c0 1 .8 1.9 1.9 1.9.5 0 1-.2 1.3-.5l4.5-4.5c.7-.7.7-1.8.1-2.6l-.1-.1-4.5-4.5c-.4-.5-.8-.6-1.3-.6z"
      />
      <path
        className="st3"
        d="M497.8 1211.4c-.5 0-.9-.4-.9-1v-9c0-.6.5-.9.9-.9.2 0 .4.1.6.3l4.5 4.5c.3.4.3 1 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3m0 2c.8 0 1.5-.3 2-.9l4.5-4.5c1.1-1 1.1-2.7.2-3.9l-.1-.1-.1-.1-4.5-4.5c-.5-.5-1.2-.8-2-.8-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9z"
      />
      <text
        transform="translate(812.858 1055.435)"
        className="st12 st10 st19">
        {"RO-02"}
      </text>
      <text
        transform="translate(557.438 750.614)"
        className="st12 st10 st19">
        {"RO-01"}
      </text>
      <text
        transform="translate(119.81 1044.485)"
        className="st33">
        <tspan
          x={0}
          y={0}
          className="st12 st10 st19">
          {"RetornoRechazo"}
        </tspan>
        <tspan
          x={4.3}
          y={13.2}
          className="st12 st10 st19">
          {"RO-01 / RO-02"}
        </tspan>
      </text>
      <text
        transform="translate(177.903 1000.55)"
        className="st33">
        <tspan
          x={0}
          y={0}
          className="st12 st10 st19">
          {"Retorno Permeado"}
        </tspan>
        <tspan
          x={9.5}
          y={13.2}
          className="st12 st10 st19">
          {"RO-01 / RO-02"}
        </tspan>
      </text>
      <path
        className="st23"
        d="M105 452c-.9 0-1.6-.7-1.6-1.6v-6.3c0-.9.7-1.6 1.6-1.6.4 0 .8.2 1.1.5l3.1 3.1c.6.6.6 1.5.1 2.2l-3.2 3.2c-.3.3-.7.5-1.1.5z"
      />
      <path
        className="st3"
        d="M105 443.4c.2 0 .3.1.4.2l3.1 3.1c.2.2.2.6 0 .9l-3.1 3.1c-.1.1-.3.2-.4.2-.3 0-.6-.2-.6-.6V444c0-.3.3-.6.6-.6m0-2c-1.4 0-2.6 1.2-2.6 2.6v6.3c0 1.4 1.2 2.6 2.6 2.6.7 0 1.3-.3 1.8-.8l3.1-3.1.1-.1.1-.1c.9-1.1.8-2.6-.2-3.5l-3.1-3.1c-.5-.5-1.1-.8-1.8-.8z"
      />
      <path
        className="st0"
        d="M163.8 1125.9V1072"
      />
      <path
        className="st23"
        d="M159 1120.6c0-.9.7-1.6 1.6-1.6h6.3c.9 0 1.6.7 1.6 1.6 0 .4-.2.8-.5 1.1l-3.1 3.1c-.6.6-1.5.6-2.2.1l-3.2-3.2c-.3-.3-.5-.7-.5-1.1z"
      />
      <path
        className="st3"
        d="M167.6 1120.6c0 .2-.1.3-.2.4l-3.1 3.1c-.2.2-.6.2-.9 0l-3.1-3.1c-.1-.1-.2-.3-.2-.4 0-.3.2-.6.6-.6h6.3c.3 0 .6.3.6.6m2 0c0-1.4-1.2-2.6-2.6-2.6h-6.3c-1.4 0-2.6 1.2-2.6 2.6 0 .7.3 1.3.8 1.8l3.1 3.1.1.1.1.1c1.1.9 2.6.8 3.5-.2l3.1-3.1c.5-.5.8-1.1.8-1.8z"
      />
      <path
        className="st0"
        d="M224.5 1125.9v-95.2"
      />
      <path
        className="st23"
        d="M219.6 1120.6c0-.9.7-1.6 1.6-1.6h6.3c.9 0 1.6.7 1.6 1.6 0 .4-.2.8-.5 1.1l-3.1 3.1c-.6.6-1.5.6-2.2.1l-3.2-3.2c-.3-.3-.5-.7-.5-1.1z"
      />
      <path
        className="st3"
        d="M228.2 1120.6c0 .2-.1.3-.2.4l-3.1 3.1c-.2.2-.6.2-.9 0l-3.1-3.1c-.1-.1-.2-.3-.2-.4 0-.3.2-.6.6-.6h6.3c.3 0 .6.3.6.6m2 0c0-1.4-1.2-2.6-2.6-2.6h-6.3c-1.4 0-2.6 1.2-2.6 2.6 0 .7.3 1.3.8 1.8l3.1 3.1.1.1.1.1c1.1.9 2.6.8 3.5-.2l3.1-3.1c.5-.5.8-1.1.8-1.8z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        width={39}
        height={39}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7FJREFUeNrsmAtP2zAUheMkfVEK LbCNPdj+/9/aJjYYG5TSJjRpPGc6tzq6chUnZUxCi3SUQFLn8335OlH0/3jhh/nL48rZQv8U0Cjx oQGDgc0TgcUEFtPfGqhS50ZQ8wQWE6DEKaUzQ9ZAG6jEuSLtBDV7Wk1gag2gPiSwFkBrp8Lpka4L AvdaNN0Drv5tz2noNHIaOx3iPAJsiheuAbZyWuJcK8f/C1i2opDoBMhwNcCB08Rp6jTD+RigIwIU uAene+gO5wfceyT3byHTPeDGADpzeuP0GtczQI9g4UoB1mC/nG6g+voW9zK8awuZdoi5Hiw3A9R7 6B3+ngJwiMlUcGFOgD+drui5BO+weG6b6WnL+pbCMkdOr5w+OH1y+gjAM9w7QKLEKklqCy2cThAK Y/WczmzTxoLi2jq+Tp3OnS4AeAE3T3FfsthQZpaAPIRkEglZuVAJ02hBo2JvCAvVlnpL7j0H9CFl b6wApfxIKerhmQpuXZEkYaq0RfxJ7B1TYpzD1TPADenFvuVO4liK+4Zic474nKMU1ZCbNDD2Esxa AE8AeUpuHQAu2QFn1D0Lb6ww3omK35qtSFuUlj6C+ggWm6lA3wWnu5qYsnuIyU2gsfJCHAe6OIGF RjTYRM02Dlg6jRpTJj6E2At/xmsD2AfgAa0UTZZrCp+EamtKY23HiwN7Ox6Im4JUtVpdmlnuhoy+ H7cccJe6HFb1itZ3Pw4YhCu89HO6p4v2gNTjVgwbN4Bxsym9XI4lK8fKsNGDBk7aEtiaekSevA21 4AZwGYrqAsU0w8AlNZ0hR4XfFDRhnnQZChipxX6pKv4DQW4CIK3ySI4xF9QbZtRpB3UzFVlwhYFu 0TLNUFx7Klxiz5ZCNw3S2dxRT3iPd8iEbdKxH+x7yo1RzUGk2iex2hoQczSsl05foe8AXeLZKgks qJGnZnHF1y60ahcnYDmFCcN9wfUPWDGXOExaVn/f2srWKamnk42SJNcSL6/dee30DWCfAXkF663E eqHtVkT7hAID3AKyAoi08me0aRqQ6/m3EsPXcOmlci2XrqBNE2dlCfNHFPAZWebUs6uLaCJLArxB ot1gcgtuVOW9+yzwA9oPTwB2BI1xP1GWzigG54Bd0B65YOt1+bJgPBndA6h0OiPq6RiwpJVIWvuM vjSUvqWzy0JvPKAplZ+eJ8OtymjfBsm7ru/zbWbXByRf62Qp0arn+HgU2ortahLsc3x+a6qRpqFL erYPmG3GtNFLO34LMAAGUKQKzuqZNQAAAABJRU5ErkJggg=="
        transform="translate(120.69 422.92) scale(.8974)"
      />
      <circle
        className="st3"
        cx={138.5}
        cy={440.7}
        r={10.9}
      />
      <circle
        className="cursorPointer"
        onClick={() => loadGrafico(4, "Nivel TK-001", true)}
        fill={getColor(datosScada.tkAlimentacion)}
        cx={138.5}
        cy={440.5}
        r={8}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        width={39}
        height={39}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA79JREFUeNrsmHtTm0AUxVkgL2PU RNvah/X7f622Y6u11RgTSELYLs65neOdxSyk1X9k5gxRYPntfe1douj1eD1e9jD/cUw5W+hFAY0S HxqwEbD5B2AxgcX0twYq1TkI1OxoMQFKnFI6M2QFtIEKnEvSk6BmB6sJTKUe1IUE1gJo5bR2WtLv NYHXWjRtCVc913HqOw2chk77OA8Am+KFK4AtnOY4V8rx/zUsW1JItAJkuApgz2nkdOQ0xvkQoAMC FLh7pzvoFud7XFuS+x9Bpi3hhgA6cXrn9Ba/x4AewMKlAqzAfjtdQ9XvG1zL8K5HkGnDmOvAcmNA fYQ+4O8jAPYxdgkX5gT4y+mS7kvwDov7ONO3AnJtS2GZA6c3Tp+czp0+A/AE1/aQKLFKkspCM6cJ QmGo7tOZ/QAdakFxbRVfx06nTmcAPIObj3BdsthQZhaA3IdkEglZea0Sxm4DNCr2+rBQZan35N5T QO9T9sYKUMqPlKIO7inh1gVpSZAmDYw/ib1DSoxTuHoMuD692LfcSRxLcd9QbE4Rn1OUoiWu1wJy 7CWYtQBOAHlMbu0BLqmBM+qahTcWGG+i4jeFu6M0sLR0EdQHsNhYBXodnO5qYsruPiY3gobKCw8h EAe4OIGFBjTYSM02Dlg2jRpTJt6H2At/xwsF7AJwj1aKbZbblnwJ1daUxuLxTBzQ2/FA3BSkqtVq 08xyN2Q814Ms6IM2DcEiT+JET3QxNgTQqgov/Zzu6aIdIPW4pe6+4yfAuNmUXi7HkpVjZdh4Bo0C Jm0JbEU9YqHHDLHgBnAZiuoMxTTDwAU1nSFHiWfWNGGe9KOlLg6YsSz2c1Xx7wlyEwBplUdyjDmj 3jCjTjuomynJggsMdIOWaYzi2lGeiD3bCd00SGdzSz3hHd6x4m1A0qIf7HrKjVHNQaTaJ7HaChBT NKwXTt+gHwCd496HZ5OAghp5ahZXfO1Cq3ZxApZTmDDcV/z+CSvmvEdJGhZYvbaydQrq6WSjJMk1 x8srd145fQfYF0BewnoLtl6TPYlALDCQwQArauVPaNPUI9fzsxLDV3DphXItl66gTRNnZQHzRxTw GVnm2LOri2gicwK8RqJdY3Iz1ajapht3vS73aD88AtgBNMT1RFk6oxicAnZGe+S1tl7TLwvGk9Ed gEqnM6CejgELWomktc/oS0NRt3Q2XeyNBzSl8tPxZLhVGe3bINWu622/zdR9QPK1TpYSrXyOj0eh rVhdk2Cf4/PbthpptnRJz/YBs8l4rT4D/xFgANTNqwTLNER5AAAAAElFTkSuQmCC"
        transform="translate(879.569 733.336) scale(.8974)"
      />
      <circle
        className="st3"
        cx={897.4}
        cy={751.1}
        r={10.9}
      />
      <circle
        className="cursorPointer"
        onClick={() => loadGrafico(15, "Nivel TK-002 (bajo)", true)}
        fill={getColorNivelBajo(datosScada.tkProductoBajo)}
        cx={897.4}
        cy={750.9}
        r={8}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        width={39}
        height={39}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAnCAYAAAB9qAq4AAAACXBIWXMAAAxNAAAMTQHSzq1OAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA8NJREFUeNrsmHlv2kAQxb1rG8KR hIQ2TXpI/f5fq2eaNuTgtLG36+hN9DJasA20f1RFGgHGjH9+O5c3iv6//vGX+Us+3a7OkgNDmQCg 2wc4OQCYNhuAcQRVtgE1eypmlcUwVrIkK+izI1h3SAVZKQFKvXXgL8UxUbKCWsMy+lwQ8EZFkx3h Yvy3gup665F1cTzGBSuYFWzhbQmrYHOCdSHIZEc4ARt4G3o7gR3j2BF8O4BVQDNvj96meJ8RcK7U dG0BNVwPMCNvr7yNvZ3j+zF+Z8A5wO693Xm79TbB9weArlQSuaaADJdCnRNAvfF25e3S22tvZwA8 wrkllnIBwArul7cbbz9gEq8O57o2gDohuljSMcA+wN4C8BRL3A3E4Axq3ULpIZ0XUWY7LHd1XddU QYul7UOlC4B9xPsVlpjVM1RKckCOcBNDCoOIMpozuxaQi2+Cuz0m9d4D7h3UO8ENpFQLWZFcZbpc O6fMluyWrDZJQ/VSOD5FUlyq2BsBrqNqoMRSQjUyoWXNKYEkwxc4Xm4DNIHk6ANwDKgLLKsoJ6ro fuxU15Hf14CRuPyJ9w6UXNcliS4tA8CcA/IM33vURWxNO40JWvyNVHnqcLu0NUtsKf76cHhKgX4U aG1tulAPfvsqNkXtRk65OEvnkG6xTbm6uJaYlNbYofgUf8Y2GKFictSjeGPlTAu4UH1NlC/DS9im UCdkcUvl6pJxY4zVvXjgLFXF33WUd2pWLMjvi2HB1jhhBzmKaEZzXbkHJPvlsesFqN2iWERdIENt mtOYtAqMSU2UK2mIzWhWXBHoM6RtsLQFjUyPGJFknmsLKYBrGmBn6CBzHGPA2mGhJAVnNM9NULCH lM0RdZIo0E24J8sNP8Cf3PRc9eJnx5uyS9etLupfL1AHrYpHnVwMN0Vbu/b2xdtnb98xK04B+RT/ cYtywA9IKTV+G4Di5GKwJZRiuE94v4aSC35OiRvUqCigpg08VhYKiJNgQSGi4Sr1vuH4FOc/x3TS oFZFFIdTUi4ChCTPGL16oBq+DKwLnHeHkf9rDVzjZ5JIXYSfd1e46ARzIg8RCf03o6SY0DPJNcas e5oDizZPdVrFHEvlAvPcDRQUQFYwI6WlCkzwmUuWLtStmjzHX0oZLRPOkJ41Qku8pGWeUu3jMb/Q ncns2NgtDQ0dgu2qmc6oWiodSTpHtqHF7bx5ZAIbR1x+Yj1wBtrbmj4X9Ls71O6WCexwGbXLZTa0 ONd2d2ufHVazZfPS1Ixt7k/vD27yYRpWhMYj2m8BBgDvJaQCzNnwUwAAAABJRU5ErkJggg=="
        transform="translate(879.569 678.902) scale(.8974)"
      />
      <circle
        className="st3"
        cx={897.4}
        cy={696.7}
        r={10.9}
      />
      <circle
        className="cursorPointer"
        onClick={() => loadGrafico(16, "Nivel TK-002 (alto)", true)}
        fill={getColorNivelAlto(datosScada.tkProductoAlto)}
        cx={897.4}
        cy={696.5}
        r={8}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={158}
        height={140}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAACMCAYAAACNmxDrAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABw5JREFUeNrsmoty2kgQRTVCPGI7 3uwz//97u5vYxAbMQ9JKWz1VN+MZIRwqiaRzqrrAkIgSHG5Pj8gygB+A+0mOAcOj/p7SuB73YVrS 1W+R0V3w77SyyN8wPflqka2OPPZm8fzzud3PI+VIvUmmXXtbRco/3pmARc+Um1kVclsE8tF6p9Na VbqTVSm3oaC9xXOScF60RaS8iDniTUq8SkQ7RMrZ88nkK3pIN29q2dQ7qxu7XZp880jbhfEK6JPu aJLtm9o1tbXb3B7zROXrSjwv3cpku2vqfVP3dv/GnpvbcRzrvUms62pLula8FxPuuakvTT1FAqju k3hh2i0s3VrhfrX6YHUnyTdLrPVgfFOsb7M+6VrpHiWEXGTweLXeiyVeHqTdnYn2e1N/NvWHCXhv qbeUQQPxpiHeycTbWtLdmgd5IGcp4pWpxAunWJ92XrxWuI9N/WUS/hKIx77eNMSrA/HWFlAzec4P GUeZdJ2mXqzV5jLF+jarifcxEG+RmGxhvMNFaWJtTbrCnvPrvp3Vi/27U9Byk+Jp4t1aW23l+03q 3p734jFYTGfA8OItJem8iE/Wfls3NqlQKhKDRSHbKH6ivZd6b4+tZDsF8aYjXmWf+0ySbhvseCxl x0PX//W5xPPi+e2UG0s/v4+3iky0MJ12m9vfp8CNG3Fj3ifxuuRbysEWYvJM2iziTUc8J/7MzQl1 pFM6Fc9F2q1en/WiaYXXaRFvWuSyLNMKQyncZvu/3eZB0oXbKvorlPBASDdNQj9cxI9UKDm19twL xA6CaBATMeZLMi7PHTTLuA4LV/Ykf4PZGakH3+pE3vOAAN+agG9OPICrjsQAiAeIB4B4gHgAiAeI B4B4gHgAiAeIB4gHgHiAeACIB4gHgHiAeACIB4gHgHiAeIB4AIgHiAeAeIB4AIgHiAeAeIB4AIgH iAeIB4B4gHgAiAeIB4B4gHgAiAeIB4B4gHiAeACIB4gHgHiAeACIB4gHgHiAeACIB4gHiAeAeIB4 AIgHiAeAeIB4AIgHiAeAeIB4gHgAiAeIB4B4gHgAiAeIB4B4gHiAeLwFgHiAeACIB4gHgHiAeACI B4gHgHiAeIB4AD+NeLVVJrcAPyTx6oSYAClXkp7kFxwA4eBcZ+ztRt7joGEB9Em4uq94dUS4qqnS bsNCRIgFVC8/8oR0lUjX1smqFBFJQkSrIq7EwulVChaJA1ci3LGpg9UxEHCWjXdLxl2p/YxVvCrw 5CS+qCdVTL4iIV0lB9lbvVjtTcKFSefkdszCuQtFG+t2VB34cUz4cQzE+4oiEaFlcMBtUxuplfzf KpJ8buDixaruOK965AOZnoMPpqO4oX5s7fFO+YozNu/tQE9NfWlq3dRNU3P7EEpLvlmQem7gwuWR cpEvVmpt3LXOGfrUWkkwbcWLL1bPIp9vua+GjaJjfdcau7MDtQd8MOkWIl0r5tKOk8sHN8TW6oWb WRVWMzm/XNIvtTzpGsaG3HrrIJh8KLXSfbJ6sL+fzZ1Dn8Sr5U0tJUrbgzxae/XSney5WxNvbh/Q EBPPBdIVdj6LoIpIsoeD2CGorkX2UBOvlM9/Y6HUSve3yPck4p0uabUq3sbeeG2vXsiYeG6g4nnp FvYlW1nCv7Nz1vPMZb0Trod30mpe5M0vBy5e3SHeg0n3j4XUs5x7GVtudG2n+DdzI99y34I3st5b JtJgSOL5tFvY+bTndWf13r5goXxZsMj2y5Inu/VrnX1XyxngNFsF6/9nc+HBpFuLeDpcZOcSLwvW eTrVedOf7MNYSRrmA51svXg+7d7Zud039SFILf9Fm8mS4yAD2Nre/EdLgs25ljPgifYgU234hduZ mKfUEqMr8UJ5fEvx32yVbujDhRdvaeLdmXQqjq+VnXMmX0S/Dv4stZa1zn7A4qWGC5VvZ6V7eZ3n W5x5oTLS233EzqXtzCLSDTnx7oJtAV2/3cp6V7cU2lbzr0x4j8F0N4bEUxdK2UCODVSd12yLMy9W RUw/yEJ8ltjnGpp4TqbZlcm1Db7FWxmoFoF4a0u5TybfZ9nT0v2seuDihWu9MthCSl3LvzjxUhNN uLE6xBbbNdXuJOn29vfGWqdf5/lWu5XFtW+zj5E2O+SpNjXhxjbLe+1ZFhfYXtoHVEVkG/olskwm 23nQNlS8tbVi3c/cyWCxlrXdJjHZjekSWury4NlzLC58Ib0/1NZ6bq1XZl//HOwge1Y3MlzonuZW JrquS0bZiKTrciO7lnjnXsSN4I11WfwnP7pn5Sd5/YHEQdaBu2AKHvoVi77yvbnNwNfrPb18Vsi2 kV46c5GthYNMemOV7qrrG3gtX+xHA+HWUR1pzWWWuEwEiNf3fdEfuYZTfGx7QSe7DOkQ7xoCpqb4 OjHlAeJd/X1yPSY8AACAhv8EGAD/HEULHgipaQAAAABJRU5ErkJggg=="
        transform="translate(833.783 211.9)"
      />
      <path
        className="st3"
        d="M893.1 221.4H850c-3.5 0-6.3 2.8-6.3 6.3V330c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V227.7c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
      />

      {/* ORP-016 */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(3, "ORP entrada Osmosis", false)}>
        <path
          className={getTarjetaClass(3)}
          d="M843.8 228.8h138.1v99.8H843.8z"
        />
        <text
          transform="translate(873.155 268.344)"
          className="st33">
          <tspan
            x={0}
            y={0}
            className="st6 st10 st11">
            {"ORP entrada"}
          </tspan>
          <tspan
            x={13.6}
            y={16.8}
            className="st6 st10 st11">
            {"Osmosis"}
          </tspan>
        </text>

        {/* Campana */}
        <g
          className={getTemaAlarma(3)}
          onClick={() => onClickAlarma(3, "ORP entrada Osmosis")}>
          <path d="M868.7 299.6c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z" />
          <path d="M867 298.6c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM878.3 297.3c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.7-2.5-2.2z" />
          <path d="M878.9 295.5c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.2-2.4-3.7-3zM879.8 304.6v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM874.8 312.1c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
        </g>

        <text
          transform="translate(894.662 313.663)"
          className="st12 st10 st14">
          {datosScada.AE016 / 10}
        </text>
        <text
          transform="translate(933.788 313.267)"
          className="st12 st34 st35">
          {"mV"}
        </text>
        <text
          transform="translate(895.975 248.704)"
          className="st12 st10 st19">
          {"ORP-016"}
        </text>
      </g>
      {/* Fin ORP-016 */}

      <image
        style={{
          overflow: "visible",
          opacity: 0.3
        }}
        width={165}
        height={250}
        xlinkHref="data:image/png;base64,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 IQd3ZAAAAABJRU5ErkJggg=="
        transform="translate(1016.783 371.9)"
      />
      <path
        className="st3"
        d="M1122.9 612.4h43.1c3.5 0 6.3-2.8 6.3-6.3V393.8c0-3.5-2.8-6.3-6.3-6.3h-57.6c-1.2 0-2.4-.4-3.4-1.2l-.4-.3c-6.5-6.5-6.5-6.5-12.9.1-1 .9-2.2 1.4-3.5 1.4h-55.7c-3.4 0-6.3 2.8-6.3 6.3v212.3c0 3.4 2.8 6.3 6.3 6.3h90.4z"
      />

      {/* Caudal de Alimentación */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(7, "Caudal de Alimentación", false)}>
        <path
          className={getTarjetaClass(7)}
          d="M 1026.2 501.3 h 146.4 v 103.8 h -146.4 z"
        />

        <text
          transform="translate(1068.105 539.124)"
          className="st33">
          <tspan
            x={0}
            y={0}
            className="st6 st10 st11">
            {"Caudal de"}
          </tspan>
          <tspan
            x={-8.2}
            y={16.8}
            className="st6 st10 st11">
            {"Alimentaci\xF3n"}
          </tspan>
        </text>

        <g
          className={getTemaAlarma(7)}
          onClick={() => onClickAlarma(7, "Caudal de Alimentación")}>
          <path d="M1045.8 576.4c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-1.9 1.1-2.5 2.2z" />
          <path d="M1044.1 575.4c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9.7-1.3 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.5-2.9 1.5-3.7 3zM1055.4 574.1c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.7-2.5-2.2z" />
          <path d="M1056 572.3c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.3-2.4-3.7-3zM1056.9 581.4v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1051.9 588.9c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
        </g>

        <text
          transform="translate(1081.76 586.443)"
          className="st12 st10 st14">
          {datosScada.FE006 / 10}
        </text>
        <text
          transform="translate(1123.026 586.047)"
          className="st12 st34 st35">
          {"m\xB3/hr"}
        </text>
      </g>
      {/* Fin Caudal de Alimentación */}

      {/* AE-005 */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(9, "E.C. de Alimentación", false)}>
        <path
          className={getTarjetaClass(9)}
          d="M 1026 499 z M 1172.6 499.2 h -146.4 V 395.3 h 146.4"
        />
        <text
          transform="translate(1076.012 436.124)"
          className="st33">
          <tspan
            x={0}
            y={0}
            className="st6 st10 st11">
            {"E.C. de"}
          </tspan>
          <tspan
            x={-16.7}
            y={16.8}
            className="st6 st10 st11">
            {"Alimentaci\xF3n"}
          </tspan>
        </text>
        <g
          className={getTemaAlarma(9)}
          onClick={() => onClickAlarma(9, "E.C. de Alimentación")}>
          <path d="M1045.8 473.4c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
          <path d="M1044.1 472.4c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9.7-1.3 1.8-2.2 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM1055.4 471.1c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
          <path d="M1056 469.3c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1zM1056.9 478.4v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1051.9 485.9c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
        </g>
        <text
          transform="translate(1081.76 484.443)"
          className="st12 st10 st14">
          {(datosScada.AE005 / 10).toFixed()}
        </text>
        <text
          transform="translate(1123.026 484.048)"
          className="st12 st34 st35">
          {"\xB5S/cm"}
        </text>
      </g>
      {/* Fin AE-005 */}

      <path
        className="st16"
        d="M1037.3 500.2h124"
      />
      <text
        transform="translate(1083.76 520.376)"
        className="st12 st10 st19">
        {"FE-006"}
      </text>
      <text
        transform="translate(1081.76 417.278)"
        className="st12 st10 st19">
        {"AE-005"}
      </text>
    </svg>
  );
};

export default ScadaAdquim;

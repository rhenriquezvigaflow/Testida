import React, { useState, useEffect } from "react";
function Scada(props) {
  const {
    data,
    data1,
    data2,
    mult,
    mult1,
    mult2,
    selected,
    datosAlarmas,
    loading
  } = props;

  const getColor = (x) => {
    const color = [
      "#B4002B", //detenida id => 0
      "#00CD98", //funcionando id => 1
      "#3574E0", //moviendose id => 2
      "#FBCE19", // falla id => 3
      "#FF6B00", // bloqueada id => 4
      "#b7b7b7" // ??
    ];
    return color[x];
  };
  const getcd510 = (x) => {
    const dc = [
      "NN",
      "Detenido",
      "Iniciar sit. lubricación",
      "Aumento vel  vfd",
      "Inicio contactor y",
      "Inicio vfd",
      "Inicio Y",
      "Cerrar transicion",
      "Inicio contactor d",
      "Temporiz. ret. fuera de linea",
      "fuera de linea",
      "en espera",
      "Relleno",
      "Inicio produccion",
      "Inicio produccion",
      "Produccion",
      "Produccion",
      "Vel max enjuague",
      "Descarga de enjuague",
      "Descarga",
      "Repuesto",
      "Inicio inv. de enjuague a vel.baja 1",
      "INV de enjuague a vel. baja 1",
      "Enjuague a vel durante descarga 1",
      "Inicio avance de enjuague a vel baja",
      "Avance de enjuague a vel baja",
      "enjuague a vel, baja durante escarga 2",
      "Inicio inv. de enjuague a vel baja 2",
      "inv de enjuague a vel baja 2",
      "enjuague a vel baja durante descarga 3"
    ];

    try {
      return dc[x];
    } catch (err) {
      return "NN";
    }
  };

  // estados de colores
  const [connection, setconnection] = useState("CARGANDO");
  const [con, setcon] = useState(getColor(5));
  const [p1a2, setp1a2] = useState(getColor(5));
  const [p1b2, setp1b2] = useState(getColor(5));
  const [p02a, setp02a] = useState(getColor(5));
  const [p02b, setp02b] = useState(getColor(5));
  const [p03a, setp03a] = useState(getColor(5));
  const [p03b, setp03b] = useState(getColor(5));
  const [p04a, setp04a] = useState(getColor(5));
  const [p05a, setp05a] = useState(getColor(5));
  const [p06, setp06] = useState(getColor(5));

  const [dp6101a, setdp6101a] = useState(getColor(5));
  const [dp6101b, setdp6101b] = useState(getColor(5));
  const [dp6111a, setdp6111a] = useState(getColor(5));
  const [dp6111b, setdp6111b] = useState(getColor(5));
  const [dp6071a, setdp6071a] = useState(getColor(5));
  const [dp6071b, setdp6071b] = useState(getColor(5));
  const [dp6080a, setdp6080a] = useState(getColor(5));
  const [dp6080b, setdp6080b] = useState(getColor(5));
  const [dp6090a, setdp6090a] = useState(getColor(5));
  const [dp6090b, setdp6090b] = useState(getColor(5));
  const [mx028, setmx028] = useState(getColor(5));

  const [vm1194, setvm1194] = useState(getColor(5));
  const [vm1195, setvm1195] = useState(getColor(5));
  const [vm1196, setvm1196] = useState(getColor(5));
  const [vm1197, setvm1197] = useState(getColor(5));

  const [bw001, setbw001] = useState(getColor(5));
  const [bw002, setbw002] = useState(getColor(5));
  const [bw003, setbw003] = useState(getColor(5));
  const [bw004, setbw004] = useState(getColor(5));

  const [vk1139, setvk1139] = useState(getColor(5));
  const [vk1142, setvk1142] = useState(getColor(5));

  const [vm1201, setvm1201] = useState(getColor(5));
  const [vm1202, setvm1202] = useState(getColor(5));

  //estados numericos
  const [mbrtot, setmbrtot] = useState("-");
  const [ait001, setait001] = useState("-");
  const [lit004, setlit004] = useState("-");
  const [ait013, setait013] = useState("-");
  const [fit003, setfit003] = useState("-");
  const [lit061, setlit061] = useState("-");
  const [lit062, setlit062] = useState("-");
  const [lit029, setlit029] = useState("-");
  const [ait003, setait003] = useState("-");
  const [tmpcalc, settmpcalc] = useState("-");
  const [lit006, setlit006] = useState("-");
  const [ait005, setait005] = useState("-");
  const [pt008, setpt008] = useState("-");
  const [pt007, setpt007] = useState("-");
  const [fit032, setfit032] = useState("-");
  const [ait012, setait012] = useState("-");
  const [fit011, setfit011] = useState("-");
  const [ti012, setti012] = useState("-");
  const [ait016, setait016] = useState("-");
  const [fit026, setfit026] = useState("-");
  const [lit510, setlit510] = useState("-");
  const [pt030, setpt030] = useState("-");
  const [pt061, setpt061] = useState("-");
  const [fit020, setfit020] = useState("-");
  const [cd510, setcd510] = useState("-");

  const is = (id) => {
    return id === selected ? "stb pointer" : "stw";
  };

  const isc = (id) => {
    return id === selected ? "sts" : "st1";
  };

  const wc = (id) => {
    return id === selected ? "st1" : "st10b";
  };

  const isd = (id) => {
    return id === selected ? "sts" : "st10b";
  };

  const isdd = (id) => {
    return id === selected ? "st27" : "st26";
  };

  const select = (id) => {
    try {
      props.clickscada(Number(id));
    } catch (error) {
      console.error(error);
    }
  };

  const selectc = (id) => {
    try {
      props.clickscada(Number(id));
    } catch (error) {
      console.error(error);
    }
  };

  const sAlarm = (id) => {
    try {
      props.selectAlarm(Number(id));
    } catch (error) {
      console.error(error);
    }
  };

  const update = () => {
    if (
      data === 0 ||
      data1 === 0 ||
      data2 === 0 ||
      data === undefined ||
      data1 === undefined ||
      data2 === undefined ||
      mult === 0 ||
      mult === undefined ||
      mult1 === 0 ||
      mult1 === undefined ||
      mult2 === 0 ||
      mult2 === undefined
    )
      return 0;
    try {
      //setear estados de numeros
      setmbrtot((data2.d15 * mult2.d15).toFixed(1));
      setait001((data2.d6 * mult2.d6).toFixed(1));
      setlit004((data1.d17 * mult1.d17).toFixed(0));
      setait012((data2.d9 * mult2.d9).toFixed(1));
      setait013((data2.d10 * mult2.d10).toFixed(0));
      setfit003((data2.d2 * mult2.d2).toFixed(2));
      setlit061((data2.d12 * mult2.d12).toFixed(0));
      setlit062((data2.d13 * mult2.d13).toFixed(0));
      setlit029((data1.d19 * mult1.d19).toFixed(0));
      setait003((data2.d7 * mult2.d7).toFixed(2));
      settmpcalc((data2.d16 * mult2.d16).toFixed(1));
      setlit006((data1.d18 * mult1.d18).toFixed(0));
      setait005((data2.d8 * mult1.d8).toFixed(0));
      setpt008((data1.d13 * mult1.d13).toFixed(0));
      setpt007((data1.d12 * mult1.d12).toFixed(0));
      setfit032((data2.d5 * mult2.d5).toFixed(1));
      setfit011((data2.d3 * mult2.d3).toFixed(2));
      setti012((data2.d1 * mult2.d1).toFixed(1));
      setait016((data2.d11 * mult2.d11).toFixed(0));
      setfit026((data2.d4 * mult2.d4).toFixed(1));
      setlit510((data2.d0 * mult2.d0).toFixed(0));
      setpt030((data1.d14 * mult1.d14).toFixed(1));
      setpt061((data1.d16 * mult1.d16).toFixed(1));
      setfit020((data2.d14 * mult2.d14).toFixed(1));
      //setear estados de color
      setp1a2(getColor(data.d0));
      setp1b2(getColor(data.d1));
      setp02a(getColor(data.d2));
      setp02b(getColor(data.d3));
      setp03a(getColor(data.d4));
      setp03b(getColor(data.d5));
      setp04a(getColor(data.d6));
      setp05a(getColor(data.d7));
      setp06(getColor(data.d8));
      setdp6101a(getColor(data.d16));
      setdp6101b(getColor(data.d17));
      setdp6111a(getColor(data.d18));
      setdp6111b(getColor(data.d19));
      setdp6071a(getColor(data.d10));
      setdp6071b(getColor(data.d11));
      setdp6080a(getColor(data.d12));
      setdp6080b(getColor(data.d13));
      setdp6090a(getColor(data.d14));
      setdp6090b(getColor(data.d15));
      setmx028(getColor(data1.d0));
      setvm1194(getColor(data1.d6));
      setvm1195(getColor(data1.d7));
      setvm1196(getColor(data1.d8));
      setvm1197(getColor(data1.d9));
      setbw001(getColor(data1.d2));
      setbw002(getColor(data1.d3));
      setbw003(getColor(data1.d4));
      setbw004(getColor(data1.d5));
      setvk1139(getColor(data1.d10));
      setvk1142(getColor(data1.d11));
      setvm1201(getColor(data2.d19));
      setvm1202(getColor(data2.d18));
      //setear estado decantador
      setcd510(getcd510(data2.d20));
      // conexion
      setcon(getColor(data.con));
      setconnection(Number(data.con) === 1 ? "EN LINEA" : "DESCONECTADO");
    } catch (error) {
      console.error(error);
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

  useEffect(() => {
    update();
  });

  return (
    <svg
      id="Capa_1"
      x="0px"
      y="0px"
      viewBox="0 0 1429.5 1997.2"
      xmlSpace="preserve">
      <style>
        {`.vm1197{fill:${vm1197}}.dp6080a{fill:${dp6080a}}.dp6080b{fill:${dp6080b}}.vm1196{fill:${vm1196}}.vm1195{fill:${vm1195}}.vm1194{fill:${vm1194}}.bw002{fill:${bw002}}.bw001{fill:${bw001}}.bw004{fill:${bw004}}.bw003{fill:${bw003}}.vk1142{fill:${vk1142}}.vk1139{fill:${vk1139}}.mx028{fill:${mx028}}.dp6090b{fill:${dp6090b}}.dp6090a{fill:${dp6090a}}.dp6071b{fill:${dp6071b}}.dp6071a{fill:${dp6071a}}.dp6111b{fill:${dp6111b}}.dp6111a{fill:${dp6111a}}.dp6101b{fill:${dp6101b}}.dp6101a{fill:${dp6101a}}.p06{fill:${p06}}.p05a{fill:${p05a}}.p04a{fill:${p04a}}.p03b{fill:${p03b}}.p03a{fill:${p03a}}.p02b{fill:${p02b}}.p02a{fill:${p02a}}.p1b2{fill:${p1b2}}.p1a2{fill:${p1a2}}.vm1201{fill:${vm1201}}.con{fill:${con}}.vm1202{fill:${vm1202}}.stw{opacity:.0;fill:#3574e0;enable-background:new;cursor: pointer;}.pointer{cursor: pointer; hover {fill: #DA4567;}}.stb{opacity:.15;fill:#3574e0;enable-background:new;cursor: pointer;}.st0{fill:none;stroke:#35ace8;stroke-width:4;stroke-miterlimit:10}.sts{fill:#adc7f5;cursor: pointer;}.st1{fill:#fff}.st2{fill:#3574e0}.st4{fill:#00e098}.st6{fill:#35ace8}.st10{fill:#323e48}.st10b{fill:#323e48;cursor: pointer;}.st11{fill:#00a19b}.st26{fill:none;stroke:#323e48;stroke-width:4;stroke-miterlimit:10}.st27{fill:none;stroke:#e1eafa;stroke-width:4;stroke-miterlimit:10}.st38{fill:none;stroke:#323e48;stroke-width:4;stroke-miterlimit:10}.st38{opacity:.6;stroke:#ccc;stroke-width:2}.st39{fill:#f2f2f2}.st45{fill:#a2a8ad}.st46{fill:none;stroke:#fff;stroke-width:2;stroke-miterlimit:10}.st47{fill:#ccc}.st48,.st59{stroke-miterlimit:10}.st48{opacity:.5;fill:none;stroke:#b3b3b3;stroke-width:.5}.st59{fill:#fff;stroke:#35ace8;stroke-width:4}.st63{font-family:&apos;Sarabun-Regular&apos;}.st64{font-size:11px}.st65{font-size:14px}.st66{fill:#606060}.st67{font-size:17px}.st68{font-family:&apos;PTSans-Regular&apos;}.campana{fill:#3474E0;}.campana:hover{fill:#7c7c7c;}.campanaVacia{fill:#c2c2c1;}.campanaVacia:hover{fill:#7c7c7c;}.campanaDesconectada{fill:#c2c2c1;}`}
      </style>

      <g>
        <image
          width={289}
          height={177}
          xlinkHref="data:image/png;base64,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"
          transform="translate(1101 37.638)"
          overflow="visible"
          opacity={0.2}
        />
        <path
          className="st1"
          d="M1376.2 207.4H1113c-3.4 0-6.1-2.8-6.1-6.1V49.7c0-3.4 2.8-6.1 6.1-6.1h263.2c3.4 0 6.1 2.8 6.1 6.1v151.5c0 3.4-2.7 6.2-6.1 6.2z"
        />
      </g>
      <g>
        <text
          transform="translate(1125.966 77.731)"
          className="st66 st63 st67">
          {"Funcionamiento de dispositivos"}
        </text>
      </g>

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
        fill="#00CD98"
      />
      <circle
        fill="#3574E0"
        cx={1143}
        cy={120.6}
        r={8}
      />
      <g>
        <circle
          cx={1143}
          cy={140}
          r={8}
          fill="#FBCE19"
        />
      </g>
      <g>
        <circle
          cx={1143}
          cy={159.5}
          r={8}
          fill="#FF6B00"
        />
      </g>
      <g>
        <text transform="translate(1160.93 105.915)">
          <tspan
            x={0}
            y={0}
            className="st32 st8 st10">
            {"Funcionando"}
          </tspan>
          <tspan
            x={0}
            y={20}
            className="st32 st8 st10">
            {"Movi\xE9ndose"}
          </tspan>
          <tspan
            x={0}
            y={40}
            className="st32 st8 st10">
            {"Falla"}
          </tspan>
          <tspan
            x={0}
            y={60}
            className="st32 st8 st10">
            {"Bloqueada"}
          </tspan>
          <tspan
            x={0}
            y={80}
            className="st32 st8 st10">
            {"Detenida"}
          </tspan>
        </text>
      </g>

      <g>
        <image
          width={234}
          height={121}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOoAAAB5CAYAAAA3Zr2jAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABHhJREFUeNrs2nlPG0cYwOFdHxhD IJCkVyJV/f5fq0qqpjlIQsDGV2eld8Kw2PjAqKr0PNIr23jtP5B+mtn11tV26grYh8W+w6uLx1qw sJdAF61YHwy3tybQPJ3isdOKFtg80jzzYtYG23tgBc1RduO4fjz2xAo7R9qEOUszLWYWM18Va71i Fc2BHqQZpDlMM4zHgVhh50ibMG/SjNOMYsbxt2kR7GLVilpG2o8oj9KcpDlN8zyeH0XA3TjWOSts dk7ahDhJc53me5pvxVzG38dx/J1Y21vfHOkw4nyR5lWan9K8THOW5llrVQXWy1veJsSriPMizcc0 H2Iu4thxK/AfoZbb3UFE+nOa12nepPktXp+nOY7VtitU2DrUmyLUT2nep3kXu9ROdfci02zV1rcX q2mzcv6a5o+YN7GqPo/385cKFTbfAueLSKPY+l7E4jeMlnLIk3iez2sX7RW1H+eg5xHq7xHq69gG H0ekvcqFJNg21Hasp0Wkk1hpL+MxX1z6saK2LyINY+V8FdvdX+L5aWx5yyu+wG6xDqK3OiJtAv0c 56xfiljvrKhVcY56GCvnaWyBm8dnEXA/jhEp7B5rt+ioCbG52vsydrLLFsS63PrW1e3NDfm30zx5 u+sCEjxOXd1e0e1Ha83CeBIL4lG15FeVTusL8hY434nUL+J0Tgr7i7VcGMsbiw6qJTcUdZZ8QXlA LVJ40lg7xeK48hbdzpovESc8fbCrFsdqXajAf7PCLl0chQr/A0IFoQJCBaECQgWECkIFhAoIFYQK CBWECggVECoIFRAqIFQQKiBUQKggVECoIFRAqIBQQaiAUAGhglABoYJQAaECQgWhAkIFhApCBYQK CBWECggVhAoIFRAqCBUQKiBUECogVBAqIFRAqCBUQKiAUEGogFABoYJQAaGCUAGhAkIFoQJCBYQK QgWECkIFhAoIFYQKCBUQKggVECogVBAqIFQQKiBUQKggVECogFBBqIBQQaiAUIGHLYrZKNTFkgGe LtB5q7d5u7vOikjnxQgWnm4FzZ1Ni5m3m+ut+GBz8KSYafGFtsuwn1Bn0dZNmnGaUTy/F2uvFeks Dmw+cJXme5rr+JJ+sQrX/s/w6O1ubq3p7Fuay+huXMR6b0XNK+koPnSR5lOa8zSDOGYQnxEq7G4e i2LT2tfo7GOaz/F61F5Ve60t7ySKbiJ9n+YszTC+fBzP+xGqWGH3c9PcWhPoXzH/RHtX8f582da3 DLUp/CjNQbzfbH9fpDmOUG1/4XHb3klseT+keZvmzzR/p/kSvU2rFReT8tb3Oqruxt9v4vVZxCtU 2E+oV7HdbQJ9F7vYr61z1HsralXdXky6LF7n5fkkzWF8Jl/5FStsF2m5KOZz1Hw9qL3trZatqOVP M/n1tNgKH8Zq2nWOCo8+R51FkOUvLKNYTWdV63fUZbHVsWJ2I+R+TE+ksPdY2/cslDcaVdWarWtd BFuOSGG/sc6r5XcCVpuEWr5Xt54D+z1nXbSeV9uEustxwO7BrvSvAAMAH9xIixJpzQQAAAAASUVO RK5CYII="
          transform="translate(36 37.638)"
          overflow="visible"
          opacity={0.2}
        />
        <path
          className="st1"
          d="M256.2 151.5H47.4c-3.4 0-6.1-2.8-6.1-6.1V49.7c0-3.4 2.8-6.1 6.1-6.1h208.7c3.4 0 6.1 2.8 6.1 6.1v95.6c.1 3.4-2.7 6.2-6 6.2z"
        />
        <g>
          <text
            transform="translate(65.498 77.731)"
            className="st66 st63 st67">
            {"Conectividad de Planta"}
          </text>
        </g>
        <text
          transform="translate(109.29 128.21)"
          className="st66 st63 st67">
          {connection}
        </text>
      </g>
      <path
        className="st48"
        d="M59.9 96.2L245.7 96.2"
      />
      <g>
        <image
          width={37}
          height={37}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAACXBIWXMAAAqcAAAKnAH00t8SAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA51JREFUeNrMmAtT2kAUhbObRKD4 oFrty3b6/39Wa20tiFoeiSGPLjPndo7X3RBg7NSZM2CAu1/u3tcmiv7DP/OCNpp/DWUCrz6oZltA sweMxau810A1AW0FaHaEiT0SsBqqSLWCrNsWSzoCCYzFbw6gHl5TgEUEUkArknzW6jXTAUjD9J1e OQ2dDp0GgEvxmxIwuVPmtITW/z8CrgSc12tJB6BYwRw7nTiNoCNcZ6gcIDPot9MD3udQQWBNFyje sgN4Yw1zBr1xOnc6BeDQA7UAyL3T1GnidEuQC3iOk2IjVIyFBlj4wuk9SaCOyVMGUI/w1HrxOwCN AD+F7cajIBRvWw9xs/bMR6fPTp+cPuCaLNTD9w3uugCYeOsU2ywh0FBcVSozW6G0ly6dvgDsHYAO KcgtQVUI6GNIgBJ8fwXoggK/DkFxtqVYdH2Xb+GpS3jpTC0UUybLHVcA6CMuLa5beHAOZYD7662Q pxIYOwLUBcAuAHSCz1NV2bmix7CT4LOGMu4BsXYHsJy9lWzYOoE6Rwy9Rgzx3RtPvRMI9l6F369g a31zY2TnnIBNEigDCUGNYGxEQAlt86bWJFncRzg8kj3J3ANso2mLKQnIIcCkQPpiqEvPZJsDwB1R 5qZk09hA05W7EyPSShhom2Zulc2+svvEpg1UcvZYQjB2zxmM4VKy+cSu3WGge/Fh0jec8cxTeSrv Ln/aph5lmjYonhql6uquXm053moYtpmriv4MikdWmYkyVN8FVd5Kd/WOHpJGnaEuzaiir9iu9Rio yMBCzUJLXO8C1tB4LPbmqprPPG3mWZ3iu8rxI5mHpih2PRp9E/K22RAGc9i6xSgzBeCSPNVEZDxq qew91VhTdVDweUbH0AwQP6GvTldOvwCWce+LA0C6ruh6ZZQ3apWtK4ofBvrm9B2vP3Cd+17U5im9 Hb6tKQmiUJmVUfxMAHQFD10DbIx4zfU8FXcomDxjWZoAJPZKmjTlwDDHgjKb3wDmGjATxJfE08YZ nY89BTLQUmbmWPAW3V6OWTLK1FROJFEE7AZZN4Vdb4lJNtSXkq6JZzJsyxjDXhuULgH3NHXmodLS du6r6cjUKCjx1BAjTY9OMw3F11KNvkva6jLUHUzH/ug7svc9x3ZDR3cBYxWhE8wu3duqgI9VidB1 q1aJUKq+2ezzLCE0a+ms5Gt60uBa1ulx0D7Pp3yw+gleHWj4L/okL+rwJG/rx41/BBgAenK7ODSx b6MAAAAASUVORK5CYII="
          transform="translate(66.073 102.711) scale(1.0482)"
          overflow="visible"
          opacity={0.15}
        />
        <circle
          className="st1"
          cx={85.5}
          cy={122.2}
          r={12.1}
        />
        <circle
          className="con"
          cx={85.5}
          cy={122.1}
          r={8.9}
        />
      </g>

      <path
        className="st0"
        d="M1162.12 986.73L832.81 986.73"
      />
      <path
        className="st0"
        d="M478.05 1015.73L634.5 1015.73"
      />
      <path
        className="st0"
        d="M771.5 448.17L724.28 448.17"
      />
      <path
        className="st39"
        d="M616.5 1004.17h-112c-6.6 0-12-5.4-12-12v-114c0-6.6 5.4-12 12-12h112c6.6 0 12 5.4 12 12v114c0 6.6-5.4 12-12 12z"
      />
      <path
        className="st0"
        d="M203.07 299.17L250.5 299.17"
      />
      <path
        className="st0"
        d="M286.12 342.17h-27.81c-3.21 0-5.81-2.91-5.81-6.5v-68c0-3.59 2.6-6.5 5.81-6.5h27.81"
      />
      <path
        className="st6"
        d="M284.38 348.64c-1.04 0-1.88-.84-1.88-1.88v-8.96c0-1.04.85-1.88 1.88-1.88.49 0 .96.19 1.31.55l4.48 4.48c.68.68.71 1.79.07 2.59l-.07.08-4.48 4.48c-.34.35-.81.54-1.31.54z"
      />
      <path
        className="st1"
        d="M284.38 336.91c.21 0 .43.08.61.26l4.48 4.48c.31.31.31.86 0 1.26l-4.48 4.48c-.18.18-.39.26-.61.26-.45 0-.88-.35-.88-.88v-8.96c0-.54.43-.9.88-.9m0-2a2.88 2.88 0 00-2.88 2.88v8.96a2.88 2.88 0 002.88 2.88c.76 0 1.48-.3 2.02-.84l4.48-4.48.08-.08.07-.09c.96-1.2.89-2.88-.15-3.92l-4.48-4.48a2.86 2.86 0 00-2.02-.83z"
      />
      <path
        className="st2"
        d="M532.46 400.18H724.46V497.91H532.46z"
      />
      <path
        className="st26"
        d="M724.28 383.17v111.16c0 1.7-.86 3.13-1.94 3.13H534.58c-1.08 0-1.94-1.43-1.94-3.13V383.17"
      />

      <path
        className="st6"
        d="M284.38 267.64c-1.04 0-1.88-.84-1.88-1.88v-8.96c0-1.04.85-1.88 1.88-1.88.49 0 .96.19 1.31.55l4.48 4.48c.68.68.71 1.79.07 2.59l-.07.08-4.48 4.48c-.34.35-.81.54-1.31.54z"
      />
      <path
        className="st1"
        d="M284.38 255.91c.21 0 .43.08.61.26l4.48 4.48c.31.31.31.86 0 1.26l-4.48 4.48c-.18.18-.39.26-.61.26-.45 0-.88-.35-.88-.88v-8.96c0-.54.43-.9.88-.9m0-2a2.88 2.88 0 00-2.88 2.88v8.96a2.88 2.88 0 002.88 2.88c.76 0 1.48-.3 2.02-.84l4.48-4.48.08-.08.07-.09c.96-1.2.89-2.88-.15-3.92l-4.48-4.48a2.86 2.86 0 00-2.02-.83z"
      />
      <path
        className="st0"
        d="M341.08 234.38h34.26c3.95 0 7.16 2.91 7.16 6.5v68c0 3.59-3.2 6.5-7.16 6.5h-34.26"
      />
      <path
        className="st0"
        d="M383.51 277.28L514.5 277.28"
      />
      <path
        className="st6"
        d="M514.38 283.64c-1.04 0-1.88-.84-1.88-1.88v-8.96c0-1.04.85-1.88 1.88-1.88.49 0 .96.19 1.31.55l4.48 4.48c.68.68.71 1.79.07 2.59l-.07.08-4.48 4.48c-.34.35-.81.54-1.31.54z"
      />
      <path
        className="st1"
        d="M514.38 271.91c.21 0 .43.08.61.26l4.48 4.48c.31.31.31.86 0 1.26l-4.48 4.48c-.18.18-.39.26-.61.26-.45 0-.88-.35-.88-.88v-8.96c0-.54.43-.9.88-.9m0-2a2.88 2.88 0 00-2.88 2.88v8.96a2.88 2.88 0 002.88 2.88c.76 0 1.48-.3 2.02-.84l4.48-4.48.08-.08.07-.09c.96-1.2.89-2.88-.15-3.92l-4.48-4.48a2.86 2.86 0 00-2.02-.83z"
      />
      <path
        className="st0"
        d="M559.31 347.17L559.31 388.17"
      />
      <path
        className="st6"
        d="M559.34 394.17c-.46 0-.92-.16-1.28-.45l-.08-.08-4.48-4.48c-.54-.54-.7-1.34-.41-2.04.29-.71.97-1.16 1.74-1.16h8.96c.77 0 1.45.46 1.74 1.16.29.7.13 1.5-.41 2.04l-4.48 4.48c-.33.35-.8.53-1.3.53z"
      />
      <path
        className="st1"
        d="M563.79 386.97c.79 0 1.18.94.63 1.49l-4.48 4.48c-.16.16-.37.24-.6.24s-.46-.08-.66-.24l-4.48-4.48c-.55-.55-.16-1.49.63-1.49h8.96m0-2h-8.96c-1.17 0-2.22.7-2.66 1.78-.45 1.08-.2 2.3.62 3.13l4.48 4.48.08.08.09.07c.54.43 1.22.67 1.91.67.77 0 1.48-.29 2.01-.82l4.48-4.48c.82-.82 1.07-2.05.62-3.13a2.888 2.888 0 00-2.67-1.78z"
      />
      <path
        className="st10"
        d="M568.78 325.75l-7.03 9.8c-.37.51-.96.82-1.59.82h-4.12c-.7 0-1.34-.37-1.69-.97l-27.56-47.28c-.18-.3-.27-.65-.27-1l.07-8.98c.01-1.08.88-1.94 1.96-1.94h12.99c.71 0 1.37.39 1.72 1.01l25.66 46.47c.35.64.3 1.45-.14 2.07z"
      />
      <path
        className="st26"
        d="M533.05 292.17L533.05 344.7"
      />
      <path
        className="st26"
        d="M559.31 315.5L559.31 344.7"
      />
      <path
        className="st26"
        d="M533.05 336.36L560.17 336.36"
      />
      <g
        onClick={() => {
          selectc(20);
        }}>
        <text
          transform="translate(548.793 466.832)"
          className="st1 st63 st64">
          {"MX-028"}
        </text>
        <path
          className={wc(20)}
          d="M578.82 445.57h-28.65a2.68 2.68 0 01-2.68-2.68v-8.65c0-1.48 1.2-2.68 2.68-2.68h28.65c1.48 0 2.68 1.2 2.68 2.68v8.65c0 1.48-1.2 2.68-2.68 2.68zM594.5 450.57h-5c-1.66 0-3-1.34-3-3v-18c0-1.66 1.34-3 3-3h5c1.66 0 3 1.34 3 3v18c0 1.66-1.34 3-3 3z"
        />
        <path
          className={isdd(20)}
          d="M576.05 438.57L589.5 438.57"
        />
      </g>
      <image
        width={163}
        height={350}
        xlinkHref="data:image/png;base64,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 CTAAxhYYsVOWvT0AAAAASUVORK5CYII="
        transform="translate(572.75 34.998)"
        overflow="visible"
        opacity={0.3}
      />
      <path
        className="st1"
        d="M633.68 43.29h-45.07c-3.45 0-7.28 2.82-7.28 6.28v312.26c0 3.45 2.82 6.28 6.28 6.28h54.6c1.23 0 2.42.42 3.36 1.2l.37.3c6.45 6.52 6.45 6.52 12.9-.15.97-.87 2.23-1.35 3.54-1.35h56.73c3.45 0 6.28-2.82 6.28-6.28V49.56c0-3.45-2.82-6.28-6.28-6.28h-85.43z"
      />
      <text transform="translate(605.927 299.234)">
        <tspan
          x={0}
          y={0}
          className="st2 st63 st65">
          {"Nivel Estanque"}
        </tspan>
        <tspan
          x={-3.58}
          y={17}
          className="st2 st63 st65">
          {"Acondicionador"}
        </tspan>
      </text>

      <text
        transform="translate(640.847 347.553)"
        className="st66 st63 st67">
        {lit004}
      </text>
      <text
        transform="translate(684.525 347.157)"
        className="st66 st68 st65">
        {"%"}
      </text>
      <text transform="translate(612.594 195.234)">
        <tspan
          x={0}
          y={0}
          className="st2 st63 st65">
          {"pH Estanque"}
        </tspan>
        <tspan
          x={-10.25}
          y={17}
          className="st2 st63 st65">
          {"Acondicionador"}
        </tspan>
      </text>

      <text
        transform="translate(643.2 240.553)"
        className="st66 st63 st67">
        {ait001}
      </text>
      <text
        transform="translate(684.525 240.157)"
        className="st66 st68 st65">
        {"pH"}
      </text>
      <path
        className="st48"
        d="M592.5 257.3L712.5 257.3"
      />
      <text transform="translate(598.959 89.124)">
        <tspan
          x={0}
          y={0}
          className="st2 st63 st65">
          {"Volumen Ingreso"}
        </tspan>
        <tspan
          x={-0.06}
          y={17}
          className="st2 st63 st65">
          {"Agua Planta MBR"}
        </tspan>
      </text>
      <text
        transform="translate(643.2 135.443)"
        className="st66 st63 st67">
        {mbrtot}
      </text>
      <text
        transform="translate(689.525 135.048)"
        className="st66 st68 st65">
        {"m³"}
      </text>
      <path
        className="st48"
        d="M592.5 152.19L712.5 152.19"
      />
      <image
        width={165}
        height={263}
        xlinkHref="data:image/png;base64,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 AElFTkSuQmCC"
        transform="translate(918.75 151.998)"
        overflow="visible"
        opacity={0.3}
      />
      <path
        className="st1"
        d="M976.89 160.29h-43.07c-3.45 0-6.28 2.82-6.28 6.28v225.26c0 3.45 2.82 6.28 6.28 6.28h51.6c1.23 0 2.42.42 3.36 1.2l.37.3c6.45 6.52 6.45 6.52 12.9-.15.97-.87 2.23-1.35 3.54-1.35h61.73c3.45 0 6.28-2.82 6.28-6.28V166.56c0-3.45-2.82-6.28-6.28-6.28h-90.43z"
      />
      <text transform="translate(969.284 327.234)">
        <tspan
          x={0}
          y={0}
          className="st2 st63 st65">
          {"Caudal de"}
        </tspan>
        <tspan
          x={0.07}
          y={17}
          className="st2 st63 st65">
          {"Impulsi\xF3n"}
        </tspan>
      </text>
      <text
        transform="translate(984.026 374.553)"
        className="st66 st63 st67">
        {fit003}
      </text>
      <text
        transform="translate(1027.15 374.157)"
        className="st66 st68 st65">
        {"m³/h"}
      </text>
      <text transform="translate(954.622 212.234)">
        <tspan
          x={0}
          y={0}
          className="st2 st63 st65">
          {"DQO Estanque"}
        </tspan>
        <tspan
          x={-4.07}
          y={17}
          className="st2 st63 st65">
          {"Acondicionador"}
        </tspan>
      </text>

      <text
        transform="translate(975.026 260.553)"
        className="st66 st63 st67">
        {ait013}
      </text>
      <text
        transform="translate(1031.291 260.157)"
        className="st66 st68 st65">
        {"mg/l"}
      </text>
      <path
        className="st48"
        d="M938.57 281.3L1062.57 281.3"
      />
      <path
        className="st0"
        d="M805.12 490.17h-27.81c-3.21 0-5.81-2.91-5.81-6.5v-68c0-3.59 2.6-6.5 5.81-6.5h27.81"
      />
      <path
        className="st6"
        d="M803.38 496.64c-1.04 0-1.88-.84-1.88-1.88v-8.96c0-1.04.85-1.88 1.88-1.88.49 0 .96.19 1.31.55l4.48 4.48c.68.68.71 1.79.07 2.59l-.07.08-4.48 4.48c-.34.35-.81.54-1.31.54z"
      />
      <path
        className="st1"
        d="M803.38 484.91c.21 0 .43.08.61.26l4.48 4.48c.31.31.31.86 0 1.26l-4.48 4.48c-.18.18-.39.26-.61.26-.45 0-.88-.35-.88-.88v-8.96c0-.54.43-.9.88-.9m0-2a2.88 2.88 0 00-2.88 2.88v8.96a2.88 2.88 0 002.88 2.88c.76 0 1.48-.3 2.02-.84l4.48-4.48.08-.08.07-.09c.96-1.2.89-2.88-.15-3.92l-4.48-4.48a2.86 2.86 0 00-2.02-.83z"
      />

      <path
        className="st6"
        d="M803.38 415.64c-1.04 0-1.88-.84-1.88-1.88v-8.96c0-1.04.85-1.88 1.88-1.88.49 0 .96.19 1.31.55l4.48 4.48c.68.68.71 1.79.07 2.59l-.07.08-4.48 4.48c-.34.35-.81.54-1.31.54z"
      />
      <path
        className="st1"
        d="M803.38 403.91c.21 0 .43.08.61.26l4.48 4.48c.31.31.31.86 0 1.26l-4.48 4.48c-.18.18-.39.26-.61.26-.45 0-.88-.35-.88-.88v-8.96c0-.54.43-.9.88-.9m0-2a2.88 2.88 0 00-2.88 2.88v8.96a2.88 2.88 0 002.88 2.88c.76 0 1.48-.3 2.02-.84l4.48-4.48.08-.08.07-.09c.96-1.2.89-2.88-.15-3.92l-4.48-4.48a2.86 2.86 0 00-2.02-.83z"
      />
      <path
        className="st0"
        d="M860.08 382.38h34.26c3.95 0 7.16 2.91 7.16 6.5v68c0 3.59-3.2 6.5-7.16 6.5h-34.26"
      />
      <path
        className="st0"
        d="M381.48 911.17V540.68c0-3.04 2.47-5.51 5.51-5.51h680.1c3.63 0 6.57-2.94 6.58-6.57l.31-98.18c.01-2.9-2.34-5.26-5.24-5.26H902.5"
      />
      <path
        className="st6"
        d="M381.34 915.38c-.46 0-.92-.16-1.28-.46l-.08-.07-4.48-4.48a1.872 1.872 0 011.33-3.2h8.96c.76 0 1.45.46 1.74 1.16.29.7.13 1.5-.41 2.04l-4.48 4.48c-.33.34-.8.53-1.3.53z"
      />
      <path
        className="st1"
        d="M385.79 908.17c.79 0 1.18.94.63 1.49l-4.48 4.48c-.16.16-.37.24-.6.24s-.46-.08-.66-.24l-4.48-4.48c-.55-.55-.16-1.49.63-1.49h8.96m0-2h-8.96c-1.17 0-2.22.7-2.66 1.78-.45 1.08-.2 2.3.62 3.13l4.48 4.48.08.08.09.07c.54.43 1.22.67 1.91.67.77 0 1.48-.29 2.01-.82l4.48-4.48c.82-.82 1.07-2.05.62-3.13a2.888 2.888 0 00-2.67-1.78z"
      />
      <circle
        className="st59"
        cx={1003.2}
        cy={424.34}
        r={9.21}
      />
      <g opacity={0.6}>
        <path
          d="M168.12 498.57l.09-14.41a5.625 5.625 0 015.62-5.59h340.92"
          fill="none"
          stroke="#ccc"
          strokeWidth={2}
          strokeMiterlimit={10}
        />
        <path
          className="st47"
          d="M513.59 482.56L520.49 478.57 513.59 474.58z"
        />
      </g>
      <path
        className="st2"
        d="M285.46 933.18H477.46V1030.9099999999999H285.46z"
      />
      <path
        className="st26"
        d="M477.28 916.17v111.16c0 1.7-.86 3.13-1.94 3.13H287.58c-1.08 0-1.94-1.43-1.94-3.13V916.17"
      />
      <path
        className="st1"
        d="M328.85 991.87c1.29 0 2.35-1.05 2.35-2.35s-1.05-2.35-2.35-2.35-2.35 1.05-2.35 2.35 1.05 2.35 2.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8s-.8-.36-.8-.8a.79.79 0 01.8-.8zM328.85 998.23c1.29 0 2.35-1.05 2.35-2.35s-1.05-2.35-2.35-2.35-2.35 1.05-2.35 2.35 1.05 2.35 2.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8s-.8-.36-.8-.8a.79.79 0 01.8-.8zM328.85 1004.6c1.29 0 2.35-1.05 2.35-2.35s-1.05-2.35-2.35-2.35-2.35 1.05-2.35 2.35 1.05 2.35 2.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8s-.8-.36-.8-.8a.79.79 0 01.8-.8zM328.85 1010.97c1.29 0 2.35-1.05 2.35-2.35s-1.05-2.35-2.35-2.35-2.35 1.05-2.35 2.35 1.05 2.35 2.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8s-.8-.36-.8-.8a.79.79 0 01.8-.8zM328.85 1017.33c1.29 0 2.35-1.05 2.35-2.35 0-1.29-1.05-2.35-2.35-2.35s-2.35 1.05-2.35 2.35 1.05 2.35 2.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8s-.8-.36-.8-.8a.79.79 0 01.8-.8zM355.8 991.87c1.29 0 2.35-1.05 2.35-2.35s-1.05-2.35-2.35-2.35-2.35 1.05-2.35 2.35 1.06 2.35 2.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8s-.8-.36-.8-.8c0-.44.36-.8.8-.8zM355.8 998.23c1.29 0 2.35-1.05 2.35-2.35s-1.05-2.35-2.35-2.35-2.35 1.05-2.35 2.35 1.06 2.35 2.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8s-.8-.36-.8-.8c0-.44.36-.8.8-.8zM355.8 1004.6c1.29 0 2.35-1.05 2.35-2.35s-1.05-2.35-2.35-2.35-2.35 1.05-2.35 2.35 1.06 2.35 2.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8s-.8-.36-.8-.8c0-.44.36-.8.8-.8zM355.8 1010.97c1.29 0 2.35-1.05 2.35-2.35s-1.05-2.35-2.35-2.35-2.35 1.05-2.35 2.35 1.06 2.35 2.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8s-.8-.36-.8-.8c0-.44.36-.8.8-.8zM355.8 1017.33c1.29 0 2.35-1.05 2.35-2.35 0-1.29-1.05-2.35-2.35-2.35s-2.35 1.05-2.35 2.35a2.36 2.36 0 002.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8s-.8-.36-.8-.8c0-.44.36-.8.8-.8zM382.76 991.87c1.29 0 2.35-1.05 2.35-2.35s-1.05-2.35-2.35-2.35c-1.29 0-2.35 1.05-2.35 2.35s1.06 2.35 2.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8zM382.76 998.23c1.29 0 2.35-1.05 2.35-2.35s-1.05-2.35-2.35-2.35c-1.29 0-2.35 1.05-2.35 2.35s1.06 2.35 2.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8zM382.76 1004.6c1.29 0 2.35-1.05 2.35-2.35s-1.05-2.35-2.35-2.35c-1.29 0-2.35 1.05-2.35 2.35s1.06 2.35 2.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8zM382.76 1010.97c1.29 0 2.35-1.05 2.35-2.35s-1.05-2.35-2.35-2.35c-1.29 0-2.35 1.05-2.35 2.35s1.06 2.35 2.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8zM382.76 1017.33c1.29 0 2.35-1.05 2.35-2.35 0-1.29-1.05-2.35-2.35-2.35-1.29 0-2.35 1.05-2.35 2.35a2.36 2.36 0 002.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8zM409.72 991.87c1.29 0 2.35-1.05 2.35-2.35s-1.05-2.35-2.35-2.35c-1.29 0-2.35 1.05-2.35 2.35s1.06 2.35 2.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8s-.8-.36-.8-.8c0-.44.36-.8.8-.8zM409.72 998.23c1.29 0 2.35-1.05 2.35-2.35s-1.05-2.35-2.35-2.35c-1.29 0-2.35 1.05-2.35 2.35s1.06 2.35 2.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8s-.8-.36-.8-.8c0-.44.36-.8.8-.8zM409.72 1004.6c1.29 0 2.35-1.05 2.35-2.35s-1.05-2.35-2.35-2.35c-1.29 0-2.35 1.05-2.35 2.35s1.06 2.35 2.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8s-.8-.36-.8-.8c0-.44.36-.8.8-.8zM409.72 1010.97c1.29 0 2.35-1.05 2.35-2.35s-1.05-2.35-2.35-2.35c-1.29 0-2.35 1.05-2.35 2.35s1.06 2.35 2.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8s-.8-.36-.8-.8c0-.44.36-.8.8-.8zM409.72 1017.33c1.29 0 2.35-1.05 2.35-2.35 0-1.29-1.05-2.35-2.35-2.35-1.29 0-2.35 1.05-2.35 2.35s1.06 2.35 2.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8s-.8-.36-.8-.8c0-.44.36-.8.8-.8zM436.68 991.87c1.29 0 2.35-1.05 2.35-2.35s-1.05-2.35-2.35-2.35-2.35 1.05-2.35 2.35 1.05 2.35 2.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8s-.8-.36-.8-.8a.79.79 0 01.8-.8zM436.68 998.23c1.29 0 2.35-1.05 2.35-2.35s-1.05-2.35-2.35-2.35-2.35 1.05-2.35 2.35 1.05 2.35 2.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8s-.8-.36-.8-.8a.79.79 0 01.8-.8zM436.68 1004.6c1.29 0 2.35-1.05 2.35-2.35s-1.05-2.35-2.35-2.35-2.35 1.05-2.35 2.35 1.05 2.35 2.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8s-.8-.36-.8-.8a.79.79 0 01.8-.8zM436.68 1010.97c1.29 0 2.35-1.05 2.35-2.35s-1.05-2.35-2.35-2.35-2.35 1.05-2.35 2.35 1.05 2.35 2.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8s-.8-.36-.8-.8a.79.79 0 01.8-.8zM436.68 1017.33c1.29 0 2.35-1.05 2.35-2.35 0-1.29-1.05-2.35-2.35-2.35s-2.35 1.05-2.35 2.35 1.05 2.35 2.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8s-.8-.36-.8-.8a.79.79 0 01.8-.8z"
      />
      <path
        className="st26"
        d="M313.5 1022.17L450.5 1022.17"
      />
      <path
        className="st45"
        d="M298.5 901.17H304.5V1023.17H298.5z"
      />
      <path
        className="st45"
        d="M296.18 903.17a5.54 5.54 0 1111.08 0h-11.08z"
      />
      <path
        className="st45"
        d="M459.5 901.17H465.5V1023.17H459.5z"
      />
      <path
        className="st45"
        d="M457.18 903.17a5.54 5.54 0 1111.08 0h-11.08z"
      />
      <path
        className="st2"
        d="M641.46 933.18H833.46V1030.9099999999999H641.46z"
      />
      <path
        className="st26"
        d="M833.28 916.17v111.16c0 1.7-.86 3.13-1.94 3.13H643.58c-1.08 0-1.94-1.43-1.94-3.13V916.17"
      />
      <path
        className="st1"
        d="M684.85 991.87c1.29 0 2.35-1.05 2.35-2.35s-1.05-2.35-2.35-2.35c-1.29 0-2.35 1.05-2.35 2.35s1.05 2.35 2.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8-.44 0-.8-.36-.8-.8a.79.79 0 01.8-.8zM684.85 998.23c1.29 0 2.35-1.05 2.35-2.35s-1.05-2.35-2.35-2.35c-1.29 0-2.35 1.05-2.35 2.35s1.05 2.35 2.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8-.44 0-.8-.36-.8-.8a.79.79 0 01.8-.8zM684.85 1004.6c1.29 0 2.35-1.05 2.35-2.35s-1.05-2.35-2.35-2.35c-1.29 0-2.35 1.05-2.35 2.35s1.05 2.35 2.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8-.44 0-.8-.36-.8-.8a.79.79 0 01.8-.8zM684.85 1010.97c1.29 0 2.35-1.05 2.35-2.35s-1.05-2.35-2.35-2.35c-1.29 0-2.35 1.05-2.35 2.35s1.05 2.35 2.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8-.44 0-.8-.36-.8-.8a.79.79 0 01.8-.8zM684.85 1017.33c1.29 0 2.35-1.05 2.35-2.35 0-1.29-1.05-2.35-2.35-2.35-1.29 0-2.35 1.05-2.35 2.35s1.05 2.35 2.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8-.44 0-.8-.36-.8-.8a.79.79 0 01.8-.8zM711.8 991.87c1.29 0 2.35-1.05 2.35-2.35s-1.05-2.35-2.35-2.35c-1.29 0-2.35 1.05-2.35 2.35s1.06 2.35 2.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8zM711.8 998.23c1.29 0 2.35-1.05 2.35-2.35s-1.05-2.35-2.35-2.35c-1.29 0-2.35 1.05-2.35 2.35s1.06 2.35 2.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8zM711.8 1004.6c1.29 0 2.35-1.05 2.35-2.35s-1.05-2.35-2.35-2.35c-1.29 0-2.35 1.05-2.35 2.35s1.06 2.35 2.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8zM711.8 1010.97c1.29 0 2.35-1.05 2.35-2.35s-1.05-2.35-2.35-2.35c-1.29 0-2.35 1.05-2.35 2.35s1.06 2.35 2.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8zM711.8 1017.33c1.29 0 2.35-1.05 2.35-2.35 0-1.29-1.05-2.35-2.35-2.35-1.29 0-2.35 1.05-2.35 2.35a2.36 2.36 0 002.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8zM738.76 991.87c1.29 0 2.35-1.05 2.35-2.35s-1.05-2.35-2.35-2.35-2.35 1.05-2.35 2.35 1.06 2.35 2.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8zM738.76 998.23c1.29 0 2.35-1.05 2.35-2.35s-1.05-2.35-2.35-2.35-2.35 1.05-2.35 2.35 1.06 2.35 2.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8zM738.76 1004.6c1.29 0 2.35-1.05 2.35-2.35s-1.05-2.35-2.35-2.35-2.35 1.05-2.35 2.35 1.06 2.35 2.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8zM738.76 1010.97c1.29 0 2.35-1.05 2.35-2.35s-1.05-2.35-2.35-2.35-2.35 1.05-2.35 2.35 1.06 2.35 2.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8zM738.76 1017.33c1.29 0 2.35-1.05 2.35-2.35 0-1.29-1.05-2.35-2.35-2.35s-2.35 1.05-2.35 2.35a2.36 2.36 0 002.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8zM765.72 991.87c1.29 0 2.35-1.05 2.35-2.35s-1.05-2.35-2.35-2.35-2.35 1.05-2.35 2.35 1.06 2.35 2.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8zM765.72 998.23c1.29 0 2.35-1.05 2.35-2.35s-1.05-2.35-2.35-2.35-2.35 1.05-2.35 2.35 1.06 2.35 2.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8zM765.72 1004.6c1.29 0 2.35-1.05 2.35-2.35s-1.05-2.35-2.35-2.35-2.35 1.05-2.35 2.35 1.06 2.35 2.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8zM765.72 1010.97c1.29 0 2.35-1.05 2.35-2.35s-1.05-2.35-2.35-2.35-2.35 1.05-2.35 2.35 1.06 2.35 2.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8zM765.72 1017.33c1.29 0 2.35-1.05 2.35-2.35 0-1.29-1.05-2.35-2.35-2.35s-2.35 1.05-2.35 2.35 1.06 2.35 2.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8zM792.68 991.87c1.29 0 2.35-1.05 2.35-2.35s-1.05-2.35-2.35-2.35-2.35 1.05-2.35 2.35 1.05 2.35 2.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8s-.8-.36-.8-.8a.79.79 0 01.8-.8zM792.68 998.23c1.29 0 2.35-1.05 2.35-2.35s-1.05-2.35-2.35-2.35-2.35 1.05-2.35 2.35 1.05 2.35 2.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8s-.8-.36-.8-.8a.79.79 0 01.8-.8zM792.68 1004.6c1.29 0 2.35-1.05 2.35-2.35s-1.05-2.35-2.35-2.35-2.35 1.05-2.35 2.35 1.05 2.35 2.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8s-.8-.36-.8-.8a.79.79 0 01.8-.8zM792.68 1010.97c1.29 0 2.35-1.05 2.35-2.35s-1.05-2.35-2.35-2.35-2.35 1.05-2.35 2.35 1.05 2.35 2.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8s-.8-.36-.8-.8a.79.79 0 01.8-.8zM792.68 1017.33c1.29 0 2.35-1.05 2.35-2.35 0-1.29-1.05-2.35-2.35-2.35s-2.35 1.05-2.35 2.35 1.05 2.35 2.35 2.35zm0-3.15c.44 0 .8.36.8.8 0 .44-.36.8-.8.8s-.8-.36-.8-.8a.79.79 0 01.8-.8z"
      />
      <path
        className="st26"
        d="M669.5 1022.17L806.5 1022.17"
      />
      <path
        className="st45"
        d="M654.5 901.17H660.5V1023.17H654.5z"
      />
      <path
        className="st45"
        d="M652.18 903.17a5.54 5.54 0 1111.08 0h-11.08z"
      />
      <path
        className="st45"
        d="M815.5 901.17H821.5V1023.17H815.5z"
      />
      <path
        className="st45"
        d="M813.18 903.17a5.54 5.54 0 1111.08 0h-11.08z"
      />
      <path
        className="st38"
        d="M362 886.17L362 897.17"
      />
      <path
        className="st38"
        d="M361.66 886.17L351.34 896.49"
      />
      <path
        className="st38"
        d="M362.34 886.17L372.66 896.49"
      />
      <path
        className="st26"
        d="M348 887.17L376 887.17"
      />
      <path
        className="st38"
        d="M400.5 886.17L400.5 897.17"
      />
      <path
        className="st38"
        d="M400.16 886.17L389.84 896.49"
      />
      <path
        className="st38"
        d="M400.84 886.17L411.16 896.49"
      />
      <path
        className="st26"
        d="M386.5 887.17L414.5 887.17"
      />
      <path
        className="st38"
        d="M718 886.17L718 897.17"
      />
      <path
        className="st38"
        d="M717.66 886.17L707.34 896.49"
      />
      <path
        className="st38"
        d="M718.34 886.17L728.66 896.49"
      />
      <path
        className="st26"
        d="M704 887.17L732 887.17"
      />
      <path
        className="st38"
        d="M756.5 886.17L756.5 897.17"
      />
      <path
        className="st38"
        d="M756.16 886.17L745.84 896.49"
      />
      <path
        className="st38"
        d="M756.84 886.17L767.16 896.49"
      />
      <path
        className="st26"
        d="M742.5 887.17L770.5 887.17"
      />
      <text
        transform="translate(530.984 989.832)"
        className="st66 st63 st64">
        {"Antiespuma"}
      </text>
      <path
        className="st26"
        d="M546.27 911.17h15.25c.97 0 1.75.78 1.75 1.75v39.25"
      />
      <path
        className="st10"
        d="M556.77 920.17h-14c-.83 0-1.5-.67-1.5-1.5v-14c0-.83.67-1.5 1.5-1.5h14c.83 0 1.5.67 1.5 1.5v14c0 .83-.67 1.5-1.5 1.5z"
      />
      <path
        className="st11"
        d="M542.85 931.87H581.7V971.92H542.85z"
      />
      <path
        className="st26"
        d="M581.62 925.17v45.24c0 .71-.36 1.31-.81 1.31h-37.08c-.45 0-.81-.6-.81-1.31v-45.24"
      />
      <path
        className="st6"
        d="M628.38 1022.09c-1.04 0-1.88-.84-1.88-1.88v-8.96c0-1.04.84-1.88 1.88-1.88.49 0 .96.2 1.32.55l4.48 4.48c.68.68.71 1.79.07 2.59l-.07.08-4.48 4.48c-.35.34-.82.54-1.32.54z"
      />
      <path
        className="st1"
        d="M628.38 1010.36c.21 0 .43.08.61.26l4.48 4.48c.31.31.31.86 0 1.26l-4.48 4.48c-.18.18-.39.26-.61.26-.45 0-.88-.35-.88-.88v-8.96c0-.55.43-.9.88-.9m0-2c-1.59 0-2.88 1.29-2.88 2.89v8.96a2.88 2.88 0 002.88 2.88c.76 0 1.48-.3 2.02-.84l4.48-4.48.08-.08.07-.09c.95-1.19.89-2.88-.15-3.92l-4.48-4.48c-.54-.54-1.25-.84-2.02-.84z"
      />
      <path
        className="st38"
        d="M501.5 884.17L617.5 884.17"
      />
      <path
        className="st38"
        d="M562.5 903.17L562.5 884.17"
      />
      <path
        className="st47"
        d="M615.98 888.76c-.89 0-1.62-.73-1.62-1.62v-6.27c0-.89.73-1.62 1.62-1.62.43 0 .83.17 1.13.47l3.13 3.13c.58.58.62 1.53.07 2.21l-.03.04-3.17 3.17c-.3.32-.7.49-1.13.49z"
      />
      <path
        className="st1"
        d="M615.98 880.25c.15 0 .3.06.43.18l3.13 3.13c.22.22.22.6 0 .88l-3.13 3.13a.615.615 0 01-1.05-.44v-6.27c0-.37.31-.61.62-.61m0-2c-1.44 0-2.62 1.18-2.62 2.62v6.27c0 1.44 1.17 2.62 2.62 2.62.69 0 1.35-.27 1.84-.77l3.13-3.13.08-.08.07-.09c.86-1.08.8-2.6-.15-3.55l-3.13-3.13c-.49-.49-1.15-.76-1.84-.76z"
      />
      <path
        className="st47"
        d="M505.23 888.76c-.43 0-.83-.17-1.13-.47l-3.13-3.13c-.58-.58-.62-1.53-.07-2.21l.03-.04 3.17-3.17c.3-.3.71-.47 1.13-.47.89 0 1.62.73 1.62 1.62v6.27c-.01.87-.73 1.6-1.62 1.6z"
      />
      <path
        className="st1"
        d="M505.23 880.25c.32 0 .62.25.62.62v6.27c0 .37-.3.62-.62.62-.15 0-.3-.06-.43-.18l-3.13-3.13c-.22-.22-.22-.6 0-.88l3.13-3.13a.55.55 0 01.43-.19m0-2c-.69 0-1.35.27-1.84.77l-3.13 3.13-.08.08-.07.09c-.86 1.08-.8 2.6.15 3.55l3.13 3.13c.49.49 1.15.77 1.84.77 1.44 0 2.62-1.18 2.62-2.62v-6.27c-.01-1.46-1.18-2.63-2.62-2.63z"
      />
      <path
        className="st10"
        d="M162.32 293.78c-24.83 0-45.1-6.7-46.62-15.24h-.15v76.33c0 8.99 20.87 16.3 46.77 16.3s46.77-7.31 46.77-16.3v-76.33h-.15c-1.52 8.53-21.79 15.24-46.62 15.24z"
      />
      <path
        className="st2"
        d="M162.32 293.78c24.83 0 45.1-6.7 46.62-15.24.15-.3.15-.76.15-1.07 0-8.99-20.87-16.3-46.77-16.3s-46.77 7.31-46.77 16.3c0 .3 0 .76.15 1.07 1.52 8.53 21.79 15.24 46.62 15.24z"
      />
      <image
        width={35}
        height={34}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAjCAYAAAD8BaggAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAx9JREFUeNrsmAtP20AQhGPHOAmJ CZTyEK36UP//XypCoi1RgZAQ521f19IcGpY72yFN1Uq1NDIKyt13s3t7e2k0/j/lT7DFd+p816j3 bwNiiFC9Aw9IoRwypK2B7KRNKBLt4R0SGMMUEJloLVpBWR2wqAZIQBBtUQdq47MmoOyTA2Qpmomm orloQWDeMAYVMCFgism7oj50IOoRFANlmLiAGYseoAnglgDOXVBlDoWYrAOAY9EZdCI6AmQMlwJM kMGRR9GdaCC6Ef0UDfF5wwcVedxhZwpHzkXvRR/wPhUdivYpbA0CWmLiW9EbUYKFRY7Efxa+qCSB W3DmFCBfRJ9F7+BQAmBXDq0Qnrdw8gBAISV8Rn+XOmRDtY/BLgBSAH2CW31yR+8yO0mCPOsgrAFA 59CKwvbkkssh604CJ4oQfYRLFwhBl0Ll2hg5xuBwrpDYRYKPRCl2XsYuRSXhSpDI59AJ8qanEtm3 Idg5m+gjJPo9duAMoE/JHZaEqw+IM+SCTuKqomo3RguOHmIcO5bdoc8qfujYXbzVj1RSxjVheEwL 1QPIMQG18P+AV6HDFWPyBC4lcKa1IYwuITHG6TmK6gsgTmjrUA/OdPHlyLGjNoXaw8JiX+hDzy6z K4rVefWadoWh7NiRyp3AB7TLvqtMXocMtQ1LaEVV1bwSyFTICWTUST1BrUhRQ9ZbQBnVH63VIo0G MupgnOFwHOE9paq6KVBOC51jrBnmyaocylUvM4TGZYPUgFkAZIxFeseLHAPYk3qEHmaAYpaoQlZV k3JyPMXC7Hh3cP6F682KTjGmtrVNlTqsSNpc9UUFwHfRpeir6Bq90qN2qVmzube1w9X7ZEprypcJ DtIfoivAXKGDfKDNUuqQ727FEDlNvIDmlLQpQn5LMJfQNRxL1W3EmUOG2oUFki+kTm+BVQ89LSw3 +VO4MABEAfUNjqUUqsom35ADtocxlJz3NZp8VyLfwJmxSubKJl/vOF0OhkhQ3zUoVzlkr0K1imyw o4siF8IZxH209wa7y6t07jgqsqqr9J/4scGo8Jh/6ueYv+75JcAA3xVe1CNdpv0AAAAASUVORK5C YII="
        transform="translate(295.333 226.899)"
        overflow="visible"
        opacity={0.15}
      />
      {/* P1A2*/}
      <image
        width={158}
        height={132}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAACECAYAAABhyJKGAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABvJJREFUeNrsmw9z2kYQR3WSAOM/ adJp+v0/YGo7NsYCDKqY2Wt/Wd8JwcSTCN6b2REmICzpsbu3VooCAOBSCD/pvYFTeVG0mccfIl7o kQ3xkC9u258lXhgQcLny7US2ncjXnipekG0pUckWAS9TNs1wWxMubjWypbgekOWiZLXExLYqJGX3 skrrToR762Jj2xihT776QMYrRbRpF7Muruzx1J6PGZCe7zLEa0W8KNy6i5VFYz5spPy+k68+kO0q k2tucWMxFwEnkvUQ7vzRTLcR2ZZdvJgzTaY0Dyq1Ubq9YNddfHJxLfJVUm6R7/wzXsx2+0z32sWi i2dxISQWGboIeSdecCV2atntrosvXfxp8dmeu7bX1CwyLmphodlun+meuniQ6tcmFhyhTzzf280k 2+3F+9rF3ybfH1Z2p7LQQLzLGJ/sTLzGst2juVK63i8uOLb23v/ky2W8yol358T7alnvxl5T0eNd VMZT8Z6t5apMsLU9/2pRpbxIZbwyU2o/m3x/WSAe4jUi3c5+fjEZn1z/H3LihUyPd2WC3Vl51Uj1 eHD+C4xYTmeS6RqT7daS1az4cd5b9JVa7fHiqnYmK9sbiWuLiUunyHcZK9s36eka8eFKpKtyi87c OKV08sUBchwi6wB5kqvjcNblNv5lIuVEXfz4l63gElPbN0CO4lWyM91pJfW75HpcDDqjqyRyXoTE e5M9XqrfS90kUMq/U2IvU0DvSEhkuWTvXx65c/o46HMkDHWkPHHHrGAhJddgL8ojdpr7IICcJ+HU jIdY8CGwGgXEA8QDQDxAPADEA8QDQDxAPADEA8QDxANAPEA8AMQDxANAPEA8AMQDxANAPEA8QDwA xAPEA0A8QDwAxAPEA0A8QDwAxAPEA8QDQDxAPADEA8QDQDxAPADEA8QDQDxAPEA8AMQDxANAPEA8 AMQDxANAPEA8AMQDxAPEA0A8QDwAxAPEA0A8QDwAxAPEA0A8QDxAPADEA8QDQDxAPADEA8QDQDxA PADEA8QDxANAPEA8AMSDsxWvtQD4ZRmvdTK2iAkDfTlZvPjmHaJBpioenYzKhGBeNh+tkxAZyWht oj3r9aLu2aFKtpV4S8gYzuikhg+6SOeW5dSP6IhPUG0mob0Tz+94L9lGYu22E7lQ4UyEy21PuTi5 SjJ2ohs+NvJ46wTszXiFszjubNVFY/Fq26suKntdJWV7rAKW9rurcKWdjyEStgf6nnNYjOlxvJkX 6sZKklJOvtaL58usSreX7aWLZwuVbmr7CSOUTn/nsifCAflaVyl2Pf3xmAVsXcbbu7EwN/axNFdW Il8y69UHyuzadrTf+VMXj13M7X2t/ftMMt5YxYuC1XYslT3Wn0u3GAsZ4bau3LxJfzx2+bwfjQn3 YG48WWJamnya9Xp7vLjjrRi9tJ09iGQ7+9Abe64emXi+nJYi2sSyuMZEZCwT0kWxtBdeS9nxpWc3 0p4v/r5bJ95eum9d3Jt8C0tYa5f1BvV4MeMtbWfx5MdMt9/5tVyYMLJyq9muEuFm1krMLa4spnbs 2s/6c+V74dgPRwmjoGPNeprxNpKYnky6byahirc9pdSu3De9tQ/cW35rF2bqSu3YxIulNEo3t0x+ Y8d4a+dibuclfgELabLXJtjSTnrsexb2XCPZ71zE01bsWVqxBzvuRo53d8yqNpaORqTbSkM5tws1 cVlgLCtbX2anltn2Wfyui08WKzcmiMccm+y1lJz9Bfhu8WQRm+61uxBjE69NjFM06y3cl67pO976 QB3XDKYN5cJJV40w2xUZ8W5MvM9dfJGRwdqej2U32DlqpNzEb/y9Pf4uZWc1cvFy6wCdfLxKq6H9 XTEk4+kHbF0WjBlwYlG7kcPYMl6RKLUx42mZbKSHu3HixVLzaML9Y9t7E+9F+p1NrucZWcZrEyv4 1GIqu4qvB8xr1PC4Yqtkdje23q5vlBJ7vCjdUr7FsaTc2uuCnVxd9X8T8R7s+VTZGfsNF7kR0nbo 6KgeYLi/YeDtiMHqmEYqcWV75WRbSylZJMR7lVXdvUj3XZrsdd9Ma+TytcX7G0h27jVHlVovXZCf g8saY8X3elWiZOiK9VlmlypeLLWPMkj1vZ3PdOfwd1v/p7DcXStHi+c/INfHncMNAjHz+TtxNOM9 Ww84cYuLFxkpaHlNLSiKMxHumJ9PFi/XYBYuE45dvl2md9mIeDMnXpxlLSV0breTBcW5cfIx1b/y w3/DkxgSzbPKtSj+H5iH4sdBu45ddJQw5tHJh/c4kC67esNAHB/FGweioP5+tO2hUQIg3iH5VMBS Ml2ZyYzboas6TjAMHbeEIn0jhL8VfPD/O+DkwlABw4E+F+EQ75ecK4QDAADHvwIMAMe4M/Ec+AHH AAAAAElFTkSuQmCC"
        transform="translate(525.79 1367.95) scale(.9932)"
        overflow="visible"
        opacity={0.3}
      />
      <path
        className="st1"
        d="M583.8 1376.2h-43.1c-3.5 0-6.3 2.8-6.3 6.3v93.3c0 3.4 2.8 6.3 6.3 6.3h51.6c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3v-93.3c0-3.4-2.8-6.3-6.3-6.3h-82.4z"
      />
      <path
        className="st1"
        d="M583.8 1376.2h-43.1c-3.5 0-6.3 2.8-6.3 6.3v93.3c0 3.4 2.8 6.3 6.3 6.3h51.6c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3v-93.3c0-3.4-2.8-6.3-6.3-6.3h-82.4z"
      />
      <image
        width={158}
        height={132}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAACECAYAAABhyJKGAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABvJJREFUeNrsmw9z2kYQR3WSAOM/ adJp+v0/YGo7NsYCDKqY2Wt/Wd8JwcSTCN6b2REmICzpsbu3VooCAOBSCD/pvYFTeVG0mccfIl7o kQ3xkC9u258lXhgQcLny7US2ncjXnipekG0pUckWAS9TNs1wWxMubjWypbgekOWiZLXExLYqJGX3 skrrToR762Jj2xihT776QMYrRbRpF7Muruzx1J6PGZCe7zLEa0W8KNy6i5VFYz5spPy+k68+kO0q k2tucWMxFwEnkvUQ7vzRTLcR2ZZdvJgzTaY0Dyq1Ubq9YNddfHJxLfJVUm6R7/wzXsx2+0z32sWi i2dxISQWGboIeSdecCV2atntrosvXfxp8dmeu7bX1CwyLmphodlun+meuniQ6tcmFhyhTzzf280k 2+3F+9rF3ybfH1Z2p7LQQLzLGJ/sTLzGst2juVK63i8uOLb23v/ky2W8yol358T7alnvxl5T0eNd VMZT8Z6t5apMsLU9/2pRpbxIZbwyU2o/m3x/WSAe4jUi3c5+fjEZn1z/H3LihUyPd2WC3Vl51Uj1 eHD+C4xYTmeS6RqT7daS1az4cd5b9JVa7fHiqnYmK9sbiWuLiUunyHcZK9s36eka8eFKpKtyi87c OKV08sUBchwi6wB5kqvjcNblNv5lIuVEXfz4l63gElPbN0CO4lWyM91pJfW75HpcDDqjqyRyXoTE e5M9XqrfS90kUMq/U2IvU0DvSEhkuWTvXx65c/o46HMkDHWkPHHHrGAhJddgL8ojdpr7IICcJ+HU jIdY8CGwGgXEA8QDQDxAPADEA8QDQDxAPADEA8QDxANAPEA8AMQDxANAPEA8AMQDxANAPEA8QDwA xAPEA0A8QDwAxAPEA0A8QDwAxAPEA8QDQDxAPADEA8QDQDxAPADEA8QDQDxAPEA8AMQDxANAPEA8 AMQDxANAPEA8AMQDxAPEA0A8QDwAxAPEA0A8QDwAxAPEA0A8QDxAPADEA8QDQDxAPADEA8QDQDxA PADEA8QDxANAPEA8AMSDsxWvtQD4ZRmvdTK2iAkDfTlZvPjmHaJBpioenYzKhGBeNh+tkxAZyWht oj3r9aLu2aFKtpV4S8gYzuikhg+6SOeW5dSP6IhPUG0mob0Tz+94L9lGYu22E7lQ4UyEy21PuTi5 SjJ2ohs+NvJ46wTszXiFszjubNVFY/Fq26suKntdJWV7rAKW9rurcKWdjyEStgf6nnNYjOlxvJkX 6sZKklJOvtaL58usSreX7aWLZwuVbmr7CSOUTn/nsifCAflaVyl2Pf3xmAVsXcbbu7EwN/axNFdW Il8y69UHyuzadrTf+VMXj13M7X2t/ftMMt5YxYuC1XYslT3Wn0u3GAsZ4bau3LxJfzx2+bwfjQn3 YG48WWJamnya9Xp7vLjjrRi9tJ09iGQ7+9Abe64emXi+nJYi2sSyuMZEZCwT0kWxtBdeS9nxpWc3 0p4v/r5bJ95eum9d3Jt8C0tYa5f1BvV4MeMtbWfx5MdMt9/5tVyYMLJyq9muEuFm1krMLa4spnbs 2s/6c+V74dgPRwmjoGPNeprxNpKYnky6byahirc9pdSu3De9tQ/cW35rF2bqSu3YxIulNEo3t0x+ Y8d4a+dibuclfgELabLXJtjSTnrsexb2XCPZ71zE01bsWVqxBzvuRo53d8yqNpaORqTbSkM5tws1 cVlgLCtbX2anltn2Wfyui08WKzcmiMccm+y1lJz9Bfhu8WQRm+61uxBjE69NjFM06y3cl67pO976 QB3XDKYN5cJJV40w2xUZ8W5MvM9dfJGRwdqej2U32DlqpNzEb/y9Pf4uZWc1cvFy6wCdfLxKq6H9 XTEk4+kHbF0WjBlwYlG7kcPYMl6RKLUx42mZbKSHu3HixVLzaML9Y9t7E+9F+p1NrucZWcZrEyv4 1GIqu4qvB8xr1PC4Yqtkdje23q5vlBJ7vCjdUr7FsaTc2uuCnVxd9X8T8R7s+VTZGfsNF7kR0nbo 6KgeYLi/YeDtiMHqmEYqcWV75WRbSylZJMR7lVXdvUj3XZrsdd9Ma+TytcX7G0h27jVHlVovXZCf g8saY8X3elWiZOiK9VlmlypeLLWPMkj1vZ3PdOfwd1v/p7DcXStHi+c/INfHncMNAjHz+TtxNOM9 Ww84cYuLFxkpaHlNLSiKMxHumJ9PFi/XYBYuE45dvl2md9mIeDMnXpxlLSV0breTBcW5cfIx1b/y w3/DkxgSzbPKtSj+H5iH4sdBu45ddJQw5tHJh/c4kC67esNAHB/FGweioP5+tO2hUQIg3iH5VMBS Ml2ZyYzboas6TjAMHbeEIn0jhL8VfPD/O+DkwlABw4E+F+EQ75ecK4QDAADHvwIMAMe4M/Ec+AHH AAAAAElFTkSuQmCC"
        transform="translate(818.79 1367.95) scale(.9932)"
        overflow="visible"
        opacity={0.3}
      />
      <path
        className="st1"
        d="M876.8 1376.2h-43.1c-3.5 0-6.3 2.8-6.3 6.3v93.3c0 3.4 2.8 6.3 6.3 6.3h51.6c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3v-93.3c0-3.4-2.8-6.3-6.3-6.3h-82.4z"
      />
      <path
        className="st0"
        d="M830 1740.2L830 1673.3"
      />
      <g
        onClick={() => {
          selectc(0);
        }}>
        <path
          className={isd(0)}
          d="M333.8,229.7h-17.4c-1.1-0.3-2.2-0.4-3.4-0.4c-8.1,0-14.6,6.6-14.6,14.6c0,4.1,1.7,7.8,4.4,10.4l-4.1,9 c-0.3,0.7,0.1,1.6,0.7,1.6H327c0.6,0,0.9-0.9,0.6-1.6l-4.1-9.1c2.6-2.6,4.2-6.3,4.2-10.3c0-1.5-0.2-2.9-0.6-4.2h6.8 c1.4,0,2.6-1.2,2.6-2.7v-4.6C336.5,230.9,335.3,229.7,333.8,229.7z"
        />
        <circle
          className="st1"
          cx={313.15}
          cy={243.98}
          r={10.92}
        />
        <circle
          className="p1a2"
          cx={313.15}
          cy={243.84}
          r={8.02}
        />
      </g>
      <g
        onClick={() => {
          selectc(1);
        }}>
        <image
          width={35}
          height={34}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAjCAYAAAD8BaggAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAx9JREFUeNrsmAtP20AQhGPHOAmJ CZTyEK36UP//XypCoi1RgZAQ521f19IcGpY72yFN1Uq1NDIKyt13s3t7e2k0/rIn2OI7db5r1Pu3 ATFEqN6BB6RQDhnS1kB20iYUifbwDgmMYQqITLQWraCsDlhUAyQgiLaoA7XxWRNQ9skBshTNRFPR XLQgMG8YgwqYEDDF5F1RHzoQ9QiKgTJMXMCMRQ/QBHBLAOcuqDKHQkzWAcCx6Aw6ER0BMoZLASbI 4Mij6E40EN2IfoqG+Lzhg4o87rAzhSPnoveiD3ifig5F+xS2BgEtMfGt6I0owcIiR+I/C19UksAt OHMKkC+iz6J3cCgBsCuHVgjPWzh5AKCQEj6jv0sdsqHax2AXACmAPsGtPrmjd5mdJEGedRDWAKBz aEVhe3LJ5ZB1J4ETRYg+wqULhKBLoXJtjBxjcDhXSOwiwUeiFDsvY5eiknAlSORz6AR501OJ7NsQ 7JxN9BES/R47cAbQp+QOS8LVB8QZckEncVVRtRujBUcPMY4dy+7QZxU/dOwu3upHKinjmjA8poXq AeSYgFr4f8Cr0OGKMXkClxI409oQRpeQGOP0HEX1BRAntHWoB2e6+HLk2FGbQu1hYbEv9KFnl9kV xeq8ek27wlB27EjlTuAD2mXfVSavQ4bahiW0oqpqXglkKuQEMuqknqBWpKgh6y2gjOqP1mqRRgMZ dTDOcDiO8J5SVd0UKKeFzjHWDPNkVQ7lqpcZQuOyQWrALAAyxiK940WOAexJPUIPM0AxS1Qhq6pJ OTmeYmF2vDs4/8L1ZkWnGFPb2qZKHVYkba76ogLgu+hS9FV0jV7pUbvUrNnc29rh6n0ypTXlywQH 6Q/RFWCu0EE+0GYpdch3t2KInCZeQHNK2hQhvyWYS+gajqXqNuLMIUPtwgLJF1Knt8Cqh54Wlpv8 KVwYAKKA+gbHUgpVZZNvyAHbwxhKzvsaTb4rkW/gzFglc2WTr3ecLgdDJKjvGpSrHLJXoVpFNtjR RZEL4QziPtp7g93lVTp3HBVZ1VX6T/zYYFR4zD/1c8z/p+r5JcAAl8Je1J4lIAQAAAAASUVORK5C YII="
          transform="translate(295.333 308.065)"
          overflow="visible"
          opacity={0.15}
        />
        <path
          className={isd(1)}
          d="M333.8,310.7h-17.4c-1.1-0.3-2.2-0.4-3.4-0.4c-8.1,0-14.6,6.5-14.6,14.6c0,4.1,1.7,7.8,4.4,10.4l-4.1,9 c-0.3,0.7,0.1,1.6,0.7,1.6H327c0.6,0,0.9-0.9,0.6-1.6l-4.1-9.1c2.6-2.6,4.2-6.3,4.2-10.3c0-1.5-0.2-2.9-0.6-4.2h6.8 c1.4,0,2.6-1.2,2.6-2.7v-4.6C336.5,311.9,335.3,310.7,333.8,310.7z"
        />
        <circle
          className="st1"
          cx={313.15}
          cy={325.14}
          r={10.92}
        />
        <circle
          className="p1b2"
          cx={313.15}
          cy={325.01}
          r={8.02}
        />
      </g>

      <g
        onClick={() => {
          selectc(2);
        }}>
        <image
          width={35}
          height={34}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAjCAYAAAD8BaggAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA0RJREFUeNrcmAlv2kAQhbHXmIRw tbRUjSK1qvr//1HVQ0rTtClQbjBmM5beSo/J+oJUqor0tFye/Xg7Ozum0fjHHsGZ1xRdb9X4rEAB jU5hQQxLOtDzZwFiACOKIIP3AorDEJn2pEpgQYXPHEhTdCFq0RgpKEsgO9FGtBZtRYkCqwXErkSY /ErUFfUwtkUxPmegFDAZyEz0RzQXrQCYkINPHlGBQyFcuQTAUPQaGgLsEt9xLjl3NoD4LboXPeD5 DGBJ3vJFOe44Z7IJB6KR6AZ6C6g+lq5JCW4JKJv8p+iF6BYuG3xvSW7aIiBnvcFkXcC8E33AeC16 JerQJHrJspxZ4HsDxGmRiynlUlrmkFuqNpbmBjAfATSCO265AuUQL1sPcRxMAtgdJfhRkvsccu70 aKnekzsvMUmT3NE16IAYMX0ngWszjGu8l+YB6dzpI1euoRFgOmoivVtdshpyLkUyT0VjjHO4tecE Dz3LFcMBl8xvKBfaBKOLov5hhmL1EWOEsU8uhxwj9ATiIEO44rZ4rH55WdHl0tFDrCEBxbTzjoB4 dzHQQCWmqXkgB6rKu8LawetIu6wdigioC13lXVzDJQfVglst2hRHh3SYk9QxIC7Uhae0K3weGopn VPfgdUi3F+GZII2SmIGPXNcPV0mTqid0hYdVJaHQSr6IT+oltMF76YlQlmKn+IGpOj6eAFkFtFKt w8ZXVSvCsOMbkrdpy3NoBZgJxoUnSB1ntog5R7ylitfwVWr3axxQBvMLGgNqWxFKO75EvAdoivd2 OpYp6BRdMWtTYfSVAFvizBwQ30WfoVs0bAzlBfI19U0S99C8Kw+UsHtqMxZw94foq+gTxnss3Vrn pSnpsa2nPulE3WFypw1tisyFO0CwO2O4k+jeOsrZFQmCGjoyDqoT7NEy+pr8FbnzTfQFyzZRMLas Y2SoJU3kXo+pp/Y1+alarnu4dIcNovugSncdrlnX5WCBBB1QT63zSteyCTSlTjGtc9fBO2ev+uQ1 ArfJHZNzo+hqz4rqzjavQte9lTZqx8UemMBzTOzoTEyKnDnlzwY+rQ29Dgr+aEjVncVZ9/ZFYI2c Bj/vdLd1Jvhb/y/Zxv/weBRgAHB2dNZm0sjDAAAAAElFTkSuQmCC"
          transform="translate(813.908 375.29)"
          overflow="visible"
          opacity={0.15}
        />
        <path
          className={isd(2)}
          d="M852.8,377.7h-17.4c-1.1-0.3-2.2-0.4-3.4-0.4c-8.1,0-14.6,6.5-14.6,14.6c0,4.1,1.7,7.8,4.3,10.4l-4.1,9 c-0.3,0.7,0.1,1.6,0.7,1.6H846c0.6,0,0.9-0.9,0.6-1.6l-4.1-9.1c2.6-2.6,4.2-6.3,4.2-10.3c0-1.5-0.2-2.9-0.6-4.2h6.8 c1.4,0,2.6-1.2,2.6-2.7v-4.6C855.5,378.9,854.3,377.7,852.8,377.7z"
        />
        <circle
          className="st1"
          cx={831.72}
          cy={392.37}
          r={10.92}
        />
        <circle
          className="p02a"
          cx={831.72}
          cy={392.23}
          r={8.02}
        />
      </g>

      <g
        onClick={() => {
          selectc(3);
        }}>
        <image
          width={35}
          height={34}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAjCAYAAAD8BaggAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA1xJREFUeNrMmIdS20AQhn0nGVzA hlBCenv/V0oZpxCaAXfUspr5N7MsK/lkJkUz/8hRVL7bfrRa/9nh/uDzxd8AcuIZV/OOQpyLJnCu IYiHIvFvZ8CUyqEM5yAwFwgTQW1oC+dIwDoBkkF3QkFgcYBVGKRD6gl1DagCH05IK9KMNCUtSEtc T+tizK2BiWGNEmBI2of2SDukbdzjBVAqYK5Jlzjf4toK9+QWVFwDFOOD5YefkJ6SnuF8BEC2EgPl +FhpjRvSOekH6ZR0hvv4SCxLxRUwHh/qkw5IL0hvSK/x+5A0AHBbWJTjZwWLnMOiu3C5FxB8by2Q hOnBNc9J70gfSG9JJ7BYX8UQHxxDM8AMxL1swVTA3Atyy0IR4mYHrnkJoPekV7DOLqwTqdQvRGD3 sSiOsxyunCPI76xY0kBcYzpY2TGA2FXHiJ2OCGadHOyOtrgnF3E1xpkDPKtymXbXEBY6AcgBILsq s+qKKGdeAsuMEVcXgFrg/35byRtAnOb7ADpCzFhpHlLDOFP34O5DLLaHb917lzcqsq47Q7ywEwij FyjLx1AEes9KCm+siIEGeAGnrJVRIYdXBbYvrBPpJl1loS4e7ANma0MYpyzVFrUrVm2nVRVDXjXS Jm4KnRRkuXDanC1jdpHjQ77psGX0TLduYd6oHymK1lJ06OwRYNYCK8cQDcQwZc2YQDOApU2nP/He DM8nokKnFpg3Sj4D3YixYS6qatEQRlqd56O5GtpaVmHkhyVQOctcAWphvCQEJsGzEyxwjN8PqjQ3 Up0NcjDrVKS/zjpnDPjspjlAypnoMzRCC5mKRT4A0unPNWkbMNuqdmhL5GqwT4SlfwLiI4C+A3Iu rFQJZPUjKT1gJSpo5TzNU+NX0icAjdBcJ9o6VfNQLlZ3KdzUEtcPRbONjF0Hx80Y1vkCoG8CZhUy MUr/L4Xr+NoCqz4Sc1FbZStn6hQJcQoLjfCbx47USo54TaouBMwdVnahZiM95GfCZWPcfwbXXeN6 UlVC6vZlbPpCzclXmAC4Y8fGvowXM8UibsX+LKmrZy6g/3i1WdRZ5yt2roloPytYOFm3e3UNu3UE iLiiYxeq6mdihxHUD92G3dpVDPh1k0PQn2g2mXFcw78PPXZ0+bfHLwEGAOmzaubXT7ghAAAAAElF TkSuQmCC"
          transform="translate(813.908 455.675)"
          overflow="visible"
          opacity={0.15}
        />

        <path
          className={isd(3)}
          d="M852.8,458.7h-17.4c-1.1-0.3-2.2-0.4-3.4-0.4c-8.1,0-14.6,6.5-14.6,14.6c0,4.1,1.7,7.8,4.3,10.4l-4.1,9 c-0.3,0.7,0.1,1.6,0.7,1.6H846c0.6,0,0.9-0.9,0.6-1.6l-4.1-9.1c2.6-2.6,4.2-6.3,4.2-10.3c0-1.5-0.2-2.9-0.6-4.2h6.8 c1.4,0,2.6-1.2,2.6-2.7v-4.6C855.5,459.9,854.3,458.7,852.8,458.7z"
        />

        <circle
          className="st1"
          cx={831.72}
          cy={472.75}
          r={10.92}
        />
        <circle
          className="p02b"
          cx={831.72}
          cy={472.62}
          r={8.02}
        />
      </g>
      <g
        onClick={() => {
          selectc(20);
        }}>
        <image
          width={35}
          height={34}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAjCAYAAAD8BaggAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA1xJREFUeNrMmAtz0kAQx7k8gEJa oLVWfNQZ/f7fyLHjVK1VBAVaQkIS92b+O7MulyPQ+mDmPwkhd/ndvm5Jq/WffcwfHFv9DSAjxhjP +EoAVfvANQUKcAxxznJBMUBJKnAsm4KZhhYJoTYpxjFSYC0FsiGtSRkpxzX+vfYT7YAJBEiX1CP1 cexifKiANgBISUvSHWkFuHyXG80OGPvADiCGpBE0xLW2cGMLq98ImBnpO+kHaS7A2IqNLcQw1grH pCekZ6Qx6QLfj4WVJJC1wj0gvpI+k25xPsV96zr3RTUwASyTkJ6SXpFeky4BdYbfOJaMw0IW6Jw0 wL2xeIYM8soHxK5qI07sg1+S3pDeAugCLjvCQ4wjqNcYO4Ile3BtKWKsEGBeoBDWOYF1LgFk9YJ0 igd0HKkvsywR0CFAVgjyVGVeVQfEsdODFcZwl4V6DhckgAk9dagUIAbfbVz9RKDP8T3TVoo87hrB QmMcR4DpemBk7dKBvkTG2eCeACqF5bYqsHZXAgDOqKEI4nDHtiGhYiwggavPEVsncGekCmstUF/U nIGoOVEDGB/UUAS6TIotC7kK4QAr6WPCeA8YHQaxmDcR821ZW1sogiWOMFAODh7QHTAUg8V11g5q BkdiUHiAZVxQcm8M1HUnkKt92KuXaQhl6mA0UKXahlQVsPIBQJXoi0rVI9UClQLmDkWMC9haVNVD YAqxZWQ4L1weCJSbNJDVAiU/OwCKYWR/tMR8uWs+l8sYaIaKOgMUu69sCMXzZQCYY64ZoLhK/2al 0NOY8RbCm2TH0ZC1dvTUORY3RV90BX3EtXvc4wXSUF2oLcoA31t5AjYDjO2LvpA+kN7heIvrqXZb 2LDBD5RldDO/EUGbqxbWPvya9B76hE32XoSAt2Pk1dkJvwk3VWLVp9gGYkeTXwhX2QffwCpXcNsU v2VNGrRKpP9KtRHcK89ET91RLazM1AWS4gYWusYCF74yEnmKWCauFXDDHP3MmQIKHLVsAQtN4LYJ ysgK95RNgTSUTF92I7cP7RqXcaovoLlIdW/pMA33n1j0NR2Vda5/rhtApWIbykWKV4cA6drEmRY5 /kYbRw0qRfYVvv3rkJcNxlGnmrz9KB1vQh79/ZDZ8/3QY7Qv/+7zS4ABAKFxY9GiTWggAAAAAElF TkSuQmCC"
          transform="translate(546.861 420.85)"
          overflow="visible"
          opacity={0.15}
        />
        <circle
          className="st1"
          cx={564.68}
          cy={437.93}
          r={10.92}
        />
        <circle
          className="mx028"
          cx={564.68}
          cy={437.79}
          r={8.02}
        />
      </g>
      <image
        width={155}
        height={242}
        xlinkHref="data:image/png;base64,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 TkSuQmCC"
        transform="translate(304.75 640.998)"
        overflow="visible"
        opacity={0.3}
      />
      <path
        className="st1"
        d="M362.33 649.51h-43.07c-3.45 0-6.28 2.82-6.28 6.28v204.26c0 3.45 2.82 6.28 6.28 6.28h51.6c1.23 0 2.42.42 3.36 1.2l.37.3c6.45 6.52 6.45 6.52 12.9-.15.97-.87 2.23-1.35 3.54-1.35h51.73c3.45 0 6.28-2.82 6.28-6.28V655.79c0-3.45-2.82-6.28-6.28-6.28h-80.43z"
      />
      <text transform="translate(327.588 796.46)">
        <tspan
          x={0}
          y={0}
          className="st2 st63 st65">
          {"Oxigeno disuelto"}
        </tspan>
        <tspan
          x={14.17}
          y={17}
          className="st2 st63 st65">
          {"Est. Aireador"}
        </tspan>
      </text>

      <text
        transform="translate(367.79 843.779)"
        className="st66 st63 st67">
        {ait003}
      </text>
      <text
        transform="translate(405.967 843.383)"
        className="st66 st68 st65">
        {"ppm"}
      </text>
      <text transform="translate(334.57 695.46)">
        <tspan
          x={0}
          y={0}
          className="st2 st63 st65">
          {"Nivel Estanque"}
        </tspan>
        <tspan
          x={19.48}
          y={17}
          className="st2 st63 st65">
          {"Aireador"}
        </tspan>
      </text>

      <text
        transform="translate(388.322 741.779)"
        className="st66 st63 st67">
        {lit029}
      </text>
      <text
        transform="translate(412.167 741.383)"
        className="st66 st68 st65">
        {"%"}
      </text>
      <path
        className="st48"
        d="M325.14 754.53L437.14 754.53"
      />
      <text
        transform="translate(363.275 674.398)"
        className="st66 st63 st64">
        {"LIT-029"}
      </text>
      <text
        transform="translate(362.435 776.832)"
        className="st66 st63 st64">
        {"AIT-003"}
      </text>
      <path
        className="st39"
        d="M449.5 1230.42h-140c-6.6 0-12-5.4-12-12v-102.8c0-6.6 5.4-12 12-12h140c6.6 0 12 5.4 12 12v102.8c0 6.6-5.4 12-12 12z"
      />
      <g
        onClick={() => {
          selectc(24);
        }}>
        <path
          className={isd(24)}
          d="M363.5 1178.17h-21c-.83 0-1.5-.67-1.5-1.5v-4c0-.83.67-1.5 1.5-1.5h21c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5zM364.81 1166.8h-25.12c-.79 0-1.44-.64-1.44-1.44v-16.62c0-.79.64-1.44 1.44-1.44h25.12c.79 0 1.44.64 1.44 1.44v16.62c0 .8-.64 1.44-1.44 1.44z"
        />
        <path
          className="st46"
          d="M341.75 1152.05L362.75 1152.05"
        />
        <path
          className="st46"
          d="M341.75 1157.05L362.75 1157.05"
        />
        <path
          className="st46"
          d="M341.75 1162.05L362.75 1162.05"
        />
        <path
          className={isd(24)}
          d="M328.5 1169.67v-26.5c0-.83.67-1.5 1.5-1.5h9c.83 0 1.5.67 1.5 1.5v26.5c0 .83-.67 1.5-1.5 1.5h-9c-.83 0-1.5-.67-1.5-1.5z"
        />
        <path
          className={isd(24)}
          d="M361 1173.17L345 1173.17 347 1166.17 359 1166.17z"
        />
      </g>
      <g
        onClick={() => {
          selectc(25);
        }}>
        <path
          className={isd(25)}
          d="M429.5 1178.17h-21c-.83 0-1.5-.67-1.5-1.5v-4c0-.83.67-1.5 1.5-1.5h21c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5zM430.81 1166.8h-25.12c-.79 0-1.44-.64-1.44-1.44v-16.62c0-.79.64-1.44 1.44-1.44h25.12c.79 0 1.44.64 1.44 1.44v16.62c0 .8-.64 1.44-1.44 1.44z"
        />
        <path
          className="st46"
          d="M407.75 1152.05L428.75 1152.05"
        />
        <path
          className="st46"
          d="M407.75 1157.05L428.75 1157.05"
        />
        <path
          className="st46"
          d="M407.75 1162.05L428.75 1162.05"
        />
        <path
          className={isd(25)}
          d="M394.5 1169.67v-26.5c0-.83.67-1.5 1.5-1.5h9c.83 0 1.5.67 1.5 1.5v26.5c0 .83-.67 1.5-1.5 1.5h-9c-.83 0-1.5-.67-1.5-1.5z"
        />
        <path
          className={isd(25)}
          d="M427 1173.17L411 1173.17 413 1166.17 425 1166.17z"
        />
      </g>
      <path
        className="st38"
        d="M299.14 1068.17v13.32c0 2.58 2.1 4.68 4.68 4.68h152.64c2.58 0 4.68-2.1 4.68-4.68v-13.32M417.5 1144.17v-17.03c0-2.75-2.07-4.97-4.63-4.97h-57.74c-2.56 0-4.63 2.23-4.63 4.97v17.03"
      />
      <path
        className="st38"
        d="M383.64 1087.17L383.64 1122.17"
      />
      <path
        className="st47"
        d="M458.08 1070.24a1.612 1.612 0 01-1.15-2.75l3.13-3.13c.29-.29.69-.46 1.13-.46.39 0 .78.14 1.09.39l.08.07 3.13 3.13a1.612 1.612 0 01-1.15 2.75h-6.26z"
      />
      <path
        className="st1"
        d="M461.19 1064.9c.16 0 .32.06.46.17l3.13 3.13c.39.39.11 1.04-.44 1.04h-6.27c-.55 0-.82-.66-.44-1.04l3.13-3.13c.12-.12.27-.17.43-.17m0-2c-.7 0-1.35.27-1.83.75l-3.14 3.14c-.75.75-.97 1.87-.56 2.84.41.98 1.36 1.61 2.42 1.61h6.27c1.06 0 2.01-.63 2.42-1.62.41-.98.18-2.1-.57-2.84l-3.13-3.13-.08-.08-.09-.07a2.74 2.74 0 00-1.71-.6z"
      />
      <path
        className="st47"
        d="M296.08 1070.24a1.612 1.612 0 01-1.15-2.75l3.13-3.13c.29-.29.69-.46 1.13-.46.39 0 .78.14 1.09.39l.08.07 3.13 3.13a1.612 1.612 0 01-1.15 2.75h-6.26z"
      />
      <path
        className="st1"
        d="M299.19 1064.9c.16 0 .32.06.46.17l3.13 3.13c.39.39.11 1.04-.44 1.04h-6.27c-.55 0-.82-.66-.44-1.04l3.13-3.13c.12-.12.27-.17.43-.17m0-2c-.7 0-1.35.27-1.83.75l-3.14 3.14c-.75.75-.97 1.87-.56 2.84.41.98 1.36 1.61 2.42 1.61h6.27c1.06 0 2.01-.63 2.42-1.62.41-.98.18-2.1-.57-2.84l-3.13-3.13-.08-.08-.09-.07a2.74 2.74 0 00-1.71-.6z"
      />
      <path
        className="st47"
        d="M793.46 1070.24a1.612 1.612 0 01-1.15-2.75l3.13-3.13c.29-.29.69-.46 1.13-.46.39 0 .78.14 1.09.39l.08.07 3.13 3.13a1.612 1.612 0 01-1.15 2.75h-6.26z"
      />
      <path
        className="st1"
        d="M796.57 1064.9c.16 0 .32.06.46.17l3.13 3.13c.39.39.11 1.04-.44 1.04h-6.27c-.55 0-.82-.66-.44-1.04l3.13-3.13a.62.62 0 01.43-.17m0-2c-.7 0-1.35.27-1.83.75l-3.14 3.14c-.75.75-.97 1.87-.56 2.84.41.98 1.36 1.61 2.42 1.61h6.27c1.06 0 2.01-.63 2.42-1.62.41-.98.18-2.1-.57-2.84l-3.13-3.13-.08-.08-.09-.07a2.72 2.72 0 00-1.71-.6z"
      />
      <path
        className="st39"
        d="M250.34 1305.43h-169c-6.6 0-12-5.4-12-12V462.57c0-6.6 5.4-12 12-12h169c6.6 0 12 5.4 12 12v830.86c0 6.6-5.4 12-12 12z"
      />
      <path
        className="st26"
        d="M146.57 629.12h15.25c.97 0 1.75.78 1.75 1.75v39.25"
      />
      <path
        onClick={() => {
          selectc(16);
        }}
        className={isd(16)}
        d="M157.07 638.12h-14c-.83 0-1.5-.67-1.5-1.5v-14c0-.83.67-1.5 1.5-1.5h14c.83 0 1.5.67 1.5 1.5v14c0 .83-.67 1.5-1.5 1.5z"
      />
      <path
        className="st26"
        d="M186.57 629.12h-15.25c-.97 0-1.75.78-1.75 1.75v39.25"
      />
      <path
        className={isd(17)}
        onClick={() => {
          selectc(17);
        }}
        d="M176.07 638.12h14c.83 0 1.5-.67 1.5-1.5v-14c0-.83-.67-1.5-1.5-1.5h-14c-.83 0-1.5.67-1.5 1.5v14c0 .83.67 1.5 1.5 1.5z"
      />
      <path
        className="st11"
        d="M143.15 649.81H190V689.8599999999999H143.15z"
      />
      <path
        className="st26"
        d="M189.92 643.12v45.24c0 .71-.36 1.31-.81 1.31h-45.08c-.45 0-.81-.6-.81-1.31v-45.24M146.57 890.21h15.25c.97 0 1.75.78 1.75 1.75v39.25"
      />
      <path
        onClick={() => {
          selectc(18);
        }}
        className={isd(18)}
        d="M157.07 899.21h-14c-.83 0-1.5-.67-1.5-1.5v-14c0-.83.67-1.5 1.5-1.5h14c.83 0 1.5.67 1.5 1.5v14c0 .83-.67 1.5-1.5 1.5z"
      />
      <path
        className="st26"
        d="M186.57 890.21h-15.25c-.97 0-1.75.78-1.75 1.75v39.25"
      />
      <path
        onClick={() => {
          selectc(19);
        }}
        className={isd(19)}
        d="M176.07 899.21h14c.83 0 1.5-.67 1.5-1.5v-14c0-.83-.67-1.5-1.5-1.5h-14c-.83 0-1.5.67-1.5 1.5v14c0 .83.67 1.5 1.5 1.5z"
      />
      <path
        className="st11"
        d="M143.15 910.91H190V950.9599999999999H143.15z"
      />
      <path
        className="st26"
        d="M189.92 904.21v45.24c0 .71-.36 1.31-.81 1.31h-45.08c-.45 0-.81-.6-.81-1.31v-45.24"
      />
      <path
        className="st0"
        d="M782.1 967.17L782.1 920.17"
      />
      <path
        className="st6"
        d="M777.62 924.33c-.77 0-1.45-.46-1.74-1.16-.29-.7-.13-1.5.41-2.04l4.48-4.48c.34-.34.81-.53 1.31-.53.46 0 .92.16 1.28.45l.04.03 4.52 4.52a1.872 1.872 0 01-1.33 3.2h-8.97z"
      />
      <path
        className="st1"
        d="M782.07 917.12c.23 0 .46.08.66.24l4.48 4.48c.55.55.16 1.49-.63 1.49h-8.96c-.79 0-1.18-.94-.63-1.49l4.48-4.48c.16-.16.38-.24.6-.24m0-2c-.77 0-1.48.29-2.01.82l-4.48 4.48c-.82.82-1.07 2.05-.62 3.13a2.874 2.874 0 002.66 1.78h8.96c1.17 0 2.22-.7 2.66-1.78.45-1.08.2-2.3-.62-3.13l-4.48-4.48-.08-.08-.09-.07c-.53-.43-1.21-.67-1.9-.67z"
      />
      <path
        className="st0"
        d="M739.1 967.17L739.1 920.17"
      />
      <path
        className="st6"
        d="M734.62 924.33c-.77 0-1.45-.46-1.74-1.16-.29-.7-.13-1.5.41-2.04l4.48-4.48c.34-.34.81-.53 1.31-.53.46 0 .92.16 1.28.45l.04.03 4.52 4.52a1.872 1.872 0 01-1.33 3.2h-8.97z"
      />
      <path
        className="st1"
        d="M739.07 917.12c.23 0 .46.08.66.24l4.48 4.48c.55.55.16 1.49-.63 1.49h-8.96c-.79 0-1.18-.94-.63-1.49l4.48-4.48c.16-.16.38-.24.6-.24m0-2c-.77 0-1.48.29-2.01.82l-4.48 4.48c-.82.82-1.07 2.05-.62 3.13a2.874 2.874 0 002.66 1.78h8.96c1.17 0 2.22-.7 2.66-1.78.45-1.08.2-2.3-.62-3.13l-4.48-4.48-.08-.08-.09-.07c-.53-.43-1.21-.67-1.9-.67z"
      />
      <path
        className="st0"
        d="M696.1 967.17L696.1 922.33"
      />
      <path
        className="st6"
        d="M691.62 924.33c-.77 0-1.45-.46-1.74-1.16-.29-.7-.13-1.5.41-2.04l4.48-4.48c.34-.34.81-.53 1.31-.53.46 0 .92.16 1.28.45l.04.03 4.52 4.52a1.872 1.872 0 01-1.33 3.2h-8.97z"
      />
      <path
        className="st1"
        d="M696.07 917.12c.23 0 .46.08.66.24l4.48 4.48c.55.55.16 1.49-.63 1.49h-8.96c-.79 0-1.18-.94-.63-1.49l4.48-4.48c.16-.16.38-.24.6-.24m0-2c-.77 0-1.48.29-2.01.82l-4.48 4.48c-.82.82-1.07 2.05-.62 3.13a2.874 2.874 0 002.66 1.78h8.96c1.17 0 2.22-.7 2.66-1.78.45-1.08.2-2.3-.62-3.13l-4.48-4.48-.08-.08-.09-.07c-.53-.43-1.21-.67-1.9-.67z"
      />
      <path
        className="st47"
        d="M654.29 1070.24a1.612 1.612 0 01-1.15-2.75l3.13-3.13c.29-.29.69-.46 1.13-.46.39 0 .78.14 1.09.39l.08.07 3.13 3.13a1.612 1.612 0 01-1.15 2.75h-6.26z"
      />
      <path
        className="st1"
        d="M657.4 1064.9c.16 0 .32.06.46.17l3.13 3.13c.39.39.11 1.04-.44 1.04h-6.27c-.55 0-.82-.66-.44-1.04l3.13-3.13c.12-.12.28-.17.43-.17m0-2c-.7 0-1.35.27-1.83.75l-3.14 3.14c-.75.75-.97 1.87-.56 2.84.41.98 1.36 1.61 2.42 1.61h6.27c1.06 0 2.01-.63 2.42-1.62.41-.98.18-2.1-.57-2.84l-3.13-3.13-.08-.08-.09-.07a2.72 2.72 0 00-1.71-.6z"
      />
      <path
        className="st6"
        d="M1160.38 993.64c-1.04 0-1.88-.84-1.88-1.88v-8.96c0-1.04.85-1.88 1.88-1.88.49 0 .96.19 1.31.55l4.48 4.48c.68.68.71 1.79.07 2.59l-.07.08-4.48 4.48c-.34.35-.81.54-1.31.54z"
      />
      <path
        className="st1"
        d="M1160.38 981.91c.21 0 .43.08.61.26l4.48 4.48c.31.31.31.86 0 1.26l-4.48 4.48c-.18.18-.39.26-.61.26-.45 0-.88-.35-.88-.88v-8.96c0-.54.43-.9.88-.9m0-2a2.88 2.88 0 00-2.88 2.88v8.96a2.88 2.88 0 002.88 2.88c.76 0 1.48-.3 2.02-.84l4.48-4.48.08-.08.07-.09c.95-1.19.89-2.88-.15-3.92l-4.48-4.48a2.86 2.86 0 00-2.02-.83z"
      />
      <path
        className={isd(6)}
        onClick={() => {
          selectc(6);
        }}
        d="M1206.83 956.74h-17.37c-1.1-.27-2.25-.42-3.44-.42-8.08 0-14.64 6.55-14.64 14.64 0 4.07 1.66 7.75 4.35 10.4l-4.09 8.97c-.34.68.08 1.61.68 1.61h27.66c.59 0 .93-.93.59-1.61l-4.14-9.09a14.604 14.604 0 003.6-14.52h6.8c1.44 0 2.62-1.18 2.62-2.71v-4.65c0-1.44-1.18-2.62-2.62-2.62z"
      />
      <g
        onClick={() => {
          selectc(30);
        }}>
        <path
          className="st0"
          d="M1213.08 961.38h14.26c3.95 0 7.16 2.91 7.16 6.5v41M1179.5 1082.17h-66.67c-3.5 0-6.33-2.84-6.33-6.33v-11.33a7.66 7.66 0 00-7.66-7.66H515.09a4.3 4.3 0 01-4.3-4.3v-18.51a4.3 4.3 0 00-4.3-4.3h-14.04"
        />
        <path
          className="st0"
          d="M1264.5 1082.17L1205.5 1082.17"
        />
        <path
          className={isd(30)}
          d="M1200.88 1073.42h-14.75c-.9 0-1.62-.73-1.62-1.62v-14.75c0-.9.73-1.62 1.62-1.62h14.75c.9 0 1.62.73 1.62 1.62v14.75c0 .89-.73 1.62-1.62 1.62zM1185.67 1077.3l7.89 4.62c.51.3.51 1.04 0 1.34l-7.89 4.62a.778.778 0 01-1.17-.67v-9.25c0-.59.65-.97 1.17-.66z"
        />
        <path
          className={isd(30)}
          d="M1201.33 1087.89l-7.89-4.62a.778.778 0 010-1.34l7.89-4.62c.52-.3 1.17.07 1.17.67v9.25c0 .59-.65.97-1.17.66z"
        />
        <path
          className={isd(30)}
          d="M1193.5 1072.42L1193.5 1082.42"
        />
      </g>
      <path
        className="st46"
        d="M1184.5 1064.42L1202.5 1064.42"
      />
      <path
        className="st46"
        d="M1193.5 1065.42L1193.5 1073.42"
      />
      <g
        onClick={() => {
          selectc(31);
        }}>
        <path
          className={isd(31)}
          d="M1271.13 1073.42h14.75c.9 0 1.62-.73 1.62-1.62v-14.75c0-.9-.73-1.62-1.62-1.62h-14.75c-.9 0-1.62.73-1.62 1.62v14.75c-.01.89.72 1.62 1.62 1.62zM1286.33 1077.3l-7.89 4.62a.778.778 0 000 1.34l7.89 4.62c.52.3 1.17-.07 1.17-.67v-9.25c0-.59-.65-.97-1.17-.66z"
        />
        <path
          className={isd(31)}
          d="M1270.67 1087.89l7.89-4.62c.51-.3.51-1.04 0-1.34l-7.89-4.62a.778.778 0 00-1.17.67v9.25c0 .59.66.97 1.17.66z"
        />
        <path
          className={isdd(31)}
          d="M1278.5 1072.42L1278.5 1082.42"
        />
        <path
          className="st46"
          d="M1287.5 1064.42L1269.5 1064.42"
        />
        <path
          className="st46"
          d="M1278.5 1065.42L1278.5 1073.42"
        />
      </g>
      <g>
        <path
          className="st6"
          d="M489.74 1036.1c-.49 0-.96-.19-1.32-.55l-4.48-4.48c-.68-.68-.71-1.79-.07-2.59l.07-.08 4.48-4.48c.35-.35.82-.55 1.32-.55 1.04 0 1.88.85 1.88 1.88v8.96c0 1.04-.84 1.89-1.88 1.89z"
        />
        <path
          className="st1"
          d="M489.74 1024.37c.45 0 .88.35.88.88v8.96c0 .53-.43.89-.88.89-.21 0-.43-.08-.61-.26l-4.48-4.48c-.31-.31-.31-.86 0-1.26l4.48-4.48c.17-.17.39-.25.61-.25m0-2c-.76 0-1.48.3-2.02.84l-4.48 4.48-.08.08-.07.09c-.95 1.19-.89 2.88.15 3.92l4.48 4.48c.54.54 1.26.84 2.02.84 1.59 0 2.88-1.29 2.88-2.89v-8.96c0-1.58-1.29-2.88-2.88-2.88z"
        />
      </g>
      <g>
        <path
          className="st0"
          d="M474 1347.17v-21.49c0-3.04 2.47-5.51 5.51-5.51h838.1c3.63 0 6.57-2.94 6.58-6.57l.31-23.18V1088.87c0-3.59-3.2-6.5-7.16-6.5h-27.26"
        />
        <path
          className="st6"
          d="M473.86 1357.38c-.46 0-.92-.16-1.28-.46l-.08-.07-4.48-4.48c-.54-.54-.7-1.34-.4-2.04.29-.71.98-1.16 1.74-1.16h8.96c.76 0 1.45.46 1.74 1.16.29.7.13 1.5-.4 2.04l-4.48 4.48c-.36.34-.82.53-1.32.53z"
        />
        <path
          className="st1"
          d="M478.31 1350.17c.79 0 1.18.94.63 1.49l-4.48 4.48a.83.83 0 01-.6.24c-.23 0-.46-.08-.66-.24l-4.48-4.48c-.55-.55-.16-1.49.63-1.49h8.96m0-2h-8.96c-1.17 0-2.22.7-2.66 1.78-.45 1.08-.2 2.3.62 3.13l4.48 4.48.08.08.09.07c.54.43 1.22.67 1.91.67.77 0 1.48-.29 2.01-.82l4.48-4.48c.82-.82 1.07-2.05.62-3.13a2.898 2.898 0 00-2.67-1.78z"
        />
      </g>
      <g>
        <image
          width={161}
          height={126}
          xlinkHref="data:image/png;base64,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 AAAASUVORK5CYII="
          transform="translate(281.75 1325.998)"
          overflow="visible"
          opacity={0.3}
        />
        <path
          className="st1"
          d="M377.11 1441.97h42.07c3.45 0 6.28-2.82 6.28-6.28v-28.24c0-.8.28-1.58.78-2.2l5.32-6.53a3.492 3.492 0 00-.13-4.56l-5.05-5.51c-.59-.64-.92-1.48-.92-2.36v-45.87c0-3.45-2.82-6.28-6.28-6.28H296.67c-3.45 0-6.28 2.82-6.28 6.28v95.26c0 3.45 2.82 6.28 6.28 6.28h80.44z"
        />
      </g>
      <g>
        <text transform="translate(311.97 1379.106)">
          <tspan
            x={0}
            y={0}
            className="st2 st63 st65">
            {"Nivel Estanque"}
          </tspan>
          <tspan
            x={27.47}
            y={17}
            className="st2 st63 st65">
            {"Lodos"}
          </tspan>
        </text>
      </g>
      <g>
        <path
          className="st2"
          d="M313.28 1411.41c-.59 1.08-.78 2.26-.59 3.34 0 .1.2.2.29.2l.59-.1c.1 0 .2-.2.2-.29-.1-.78 0-1.77.49-2.55.49-.78 1.08-1.37 1.86-1.67.1-.1.2-.2.2-.29l-.2-.59c0-.2-.2-.2-.39-.2-.97.38-1.86 1.07-2.45 2.15z"
        />
        <path
          className="st2"
          d="M311.62 1410.42c-.88 1.47-1.08 3.14-.78 4.71 0 .1.2.2.29.2l.59-.1c.1 0 .2-.2.2-.29-.2-1.28 0-2.65.69-3.92.69-1.28 1.77-2.16 3.04-2.55.1-.1.2-.2.2-.29l-.2-.59c0-.1-.2-.2-.29-.2-1.58.48-2.96 1.56-3.74 3.03zM322.9 1409.15c-.1-.1-.29 0-.39.2l-.2.59c-.1.1 0 .29.2.29.78.29 1.47.88 1.86 1.67.49.78.59 1.67.49 2.55 0 .1.1.29.2.29l.59.1c.1 0 .29-.1.29-.2.2-1.08 0-2.26-.59-3.34-.59-.97-1.47-1.66-2.45-2.15z"
        />
        <path
          className="st2"
          d="M323.49 1407.28c-.1-.1-.29 0-.29.2l-.2.59c-.1.1 0 .29.2.29 1.28.49 2.35 1.37 3.04 2.55.69 1.28.88 2.65.69 3.92 0 .1.1.29.2.29l.59.1c.1 0 .29-.1.29-.2.29-1.57.1-3.24-.78-4.71-.99-1.36-2.27-2.44-3.74-3.03zM324.37 1416.41v-1.47c0-2.45-1.57-4.32-3.83-4.81v-.59c0-.49-.39-.88-.88-.88h-.49c-.49 0-.88.39-.88.88v.59c-2.35.49-3.83 2.35-3.83 4.81v1.47c0 .78-.29 1.47-.69 2.06-.2.29-.29.49-.29.88v.1c0 .88.69 1.57 1.57 1.57h8.93c.88 0 1.57-.69 1.57-1.57v-.1c0-.29-.1-.59-.29-.88-.59-.59-.89-1.28-.89-2.06zM319.37 1423.86c.88 0 1.67-.78 1.67-1.67h-3.34c.1.89.78 1.67 1.67 1.67z"
        />
      </g>
      <g>
        <text
          transform="translate(367.792 1421.465)"
          className="st66 st63 st67">
          {lit510}
        </text>
      </g>
      <text
        transform="translate(395.637 1421.07)"
        className="st66 st68 st65">
        {"%"}
      </text>

      <path
        className="st39"
        d="M1340.5 798.17h-57c-3.85 0-7-3.15-7-7v-32c0-3.85 3.15-7 7-7h57c3.85 0 7 3.15 7 7v32c0 3.85-3.15 7-7 7z"
      />
      <path
        className="st0"
        d="M1264.5 772.17L1213.5 772.17"
      />
      <path
        className="st0"
        d="M1037.12 830.17h-27.81c-3.21 0-5.81-2.91-5.81-6.5v-49c0-3.59 2.6-6.5 5.81-6.5h27.81"
      />
      <g>
        <path
          className="st6"
          d="M1035.38 836.64c-1.04 0-1.88-.84-1.88-1.88v-8.96c0-1.04.85-1.88 1.88-1.88.49 0 .96.19 1.31.55l4.48 4.48c.68.68.71 1.79.07 2.59l-.07.08-4.48 4.48c-.34.35-.81.54-1.31.54z"
        />
        <path
          className="st1"
          d="M1035.38 824.91c.21 0 .43.08.61.26l4.48 4.48c.31.31.31.86 0 1.26l-4.48 4.48c-.18.18-.39.26-.61.26-.45 0-.88-.35-.88-.88v-8.96c0-.54.43-.9.88-.9m0-2a2.88 2.88 0 00-2.88 2.88v8.96a2.88 2.88 0 002.88 2.88c.76 0 1.48-.3 2.02-.84l4.48-4.48.08-.08.07-.09c.95-1.19.89-2.88-.15-3.92l-4.48-4.48a2.86 2.86 0 00-2.02-.83z"
        />
      </g>
      <g>
        <path
          className="st6"
          d="M1035.38 774.64c-1.04 0-1.88-.84-1.88-1.88v-8.96c0-1.04.85-1.88 1.88-1.88.49 0 .96.19 1.31.55l4.48 4.48c.68.68.71 1.79.07 2.59l-.07.08-4.48 4.48c-.34.35-.81.54-1.31.54z"
        />
        <path
          className="st1"
          d="M1035.38 762.91c.21 0 .43.08.61.26l4.48 4.48c.31.31.31.86 0 1.26l-4.48 4.48c-.18.18-.39.26-.61.26-.45 0-.88-.35-.88-.88v-8.96c0-.54.43-.9.88-.9m0-2a2.88 2.88 0 00-2.88 2.88v8.96a2.88 2.88 0 002.88 2.88c.76 0 1.48-.3 2.02-.84l4.48-4.48.08-.08.07-.09c.95-1.19.89-2.88-.15-3.92l-4.48-4.48a2.86 2.86 0 00-2.02-.83z"
        />
      </g>
      <path
        className="st0"
        d="M916.5 798.17h-77.78c-2.92 0-5.28 2.37-5.28 5.28v100.79c0 2.76-2.24 5.01-5.01 5.01H700.58c-2.4 0-4.35 1.95-4.35 4.35v7.58M1091.08 740.38h34.26c3.95 0 7.16 2.91 7.16 6.5v49c0 3.59-3.2 6.5-7.16 6.5h-34.26"
      />
      <path
        className="st0"
        d="M1200.5 772.17L1132.5 772.17"
      />
      <g>
        <text transform="translate(1289.32 771.832)">
          <tspan
            x={0}
            y={0}
            className="st66 st63 st64">
            {"Camara"}
          </tspan>
          <tspan
            x={0}
            y={14.4}
            className="st66 st63 st64">
            {"Desag\xFCe"}
          </tspan>
        </text>
      </g>
      <g>
        <path
          className="st6"
          d="M1265.38 778.64c-1.04 0-1.88-.84-1.88-1.88v-8.96c0-1.04.85-1.88 1.88-1.88.49 0 .96.19 1.31.55l4.48 4.48c.68.68.71 1.79.07 2.59l-.07.08-4.48 4.48c-.34.35-.81.54-1.31.54z"
        />
        <path
          className="st1"
          d="M1265.38 766.91c.21 0 .43.08.61.26l4.48 4.48c.31.31.31.86 0 1.26l-4.48 4.48c-.18.18-.39.26-.61.26-.45 0-.88-.35-.88-.88v-8.96c0-.54.43-.9.88-.9m0-2a2.88 2.88 0 00-2.88 2.88v8.96a2.88 2.88 0 002.88 2.88c.76 0 1.48-.3 2.02-.84l4.48-4.48.08-.08.07-.09c.95-1.19.89-2.88-.15-3.92l-4.48-4.48a2.86 2.86 0 00-2.02-.83z"
        />
      </g>
      <g>
        <image
          width={167}
          height={337}
          xlinkHref="data:image/png;base64,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 JuU6JgHtAAAAAElFTkSuQmCC"
          transform="translate(1132.75 420.998)"
          overflow="visible"
          opacity={0.3}
        />
        <path
          className="st1"
          d="M1194.68 429.16h-47.07c-3.45 0-6.28 2.82-6.28 6.28V734.7c0 3.45 2.82 6.28 6.28 6.28h55.6c1.23 0 2.42.42 3.36 1.2l.37.3c6.45 6.52 6.45 6.52 12.9-.15.97-.87 2.23-1.35 3.54-1.35h59.73c3.45 0 6.28-2.82 6.28-6.28V435.44c0-3.45-2.82-6.28-6.28-6.28h-88.43z"
        />
      </g>
      <g>
        <text transform="translate(1191.662 574.107)">
          <tspan
            x={0}
            y={0}
            className="st2 st63 st65">
            {"Caudal"}
          </tspan>
          <tspan
            x={-10.46}
            y={17}
            className="st2 st63 st65">
            {"Permeado"}
          </tspan>
        </text>
      </g>
      <g>
        <text
          transform="translate(1197.2 619.426)"
          className="st66 st63 st67">
          {fit011}
        </text>
      </g>
      <text
        transform="translate(1242.324 619.03)"
        className="st66 st68 st65">
        {"m³/h"}
      </text>
      <g>
        <text transform="translate(1173.46 478.107)">
          <tspan
            x={0}
            y={0}
            className="st2 st63 st65">
            {"Medici\xF3n pH"}
          </tspan>
          <tspan
            x={7.74}
            y={17}
            className="st2 st63 st65">
            {"Permeado"}
          </tspan>
        </text>
      </g>

      <g>
        <text
          transform="translate(1197.2 522.426)"
          className="st66 st63 st67">
          {ait012}
        </text>
      </g>
      <text
        transform="translate(1242.324 522.03)"
        className="st66 st68 st65">
        {"pH"}
      </text>
      <path
        className="st48"
        d="M1157.5 536.17L1269.5 536.17"
      />
      <g>
        <text transform="translate(1172.86 671.714)">
          <tspan
            x={0}
            y={0}
            className="st2 st63 st65">
            {"Temperatura"}
          </tspan>
          <tspan
            x={8.34}
            y={17}
            className="st2 st63 st65">
            {"Permeado"}
          </tspan>
        </text>
      </g>
      <g>
        <text
          transform="translate(1197.2 717.033)"
          className="st66 st63 st67">
          {ti012}
        </text>
      </g>
      <text
        transform="translate(1242.324 716.637)"
        className="st66 st68 st65">
        {"\xB0C"}
      </text>
      <path
        className="st48"
        d="M1157.5 633.78L1269.5 633.78"
      />
      <g>
        <image
          width={165}
          height={142}
          xlinkHref="data:image/png;base64,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 AAAASUVORK5CYII="
          transform="translate(835.75 642.998)"
          overflow="visible"
          opacity={0.3}
        />
        <path
          className="st1"
          d="M897.68 651.16h-47.07c-3.45 0-6.28 2.82-6.28 6.28V761.7c0 3.45 2.82 6.28 6.28 6.28h55.6c1.23 0 2.42.42 3.36 1.2l.37.3c6.45 6.52 6.45 6.52 12.9-.15.97-.87 2.23-1.35 3.54-1.35h57.73c3.45 0 6.28-2.82 6.28-6.28V657.44c0-3.45-2.82-6.28-6.28-6.28h-86.43z"
        />
        <text transform="translate(867.994 694.107)">
          <tspan
            x={0}
            y={0}
            className="st2 st63 st65">
            {"Presi\xF3n Succi\xF3n"}
          </tspan>
          <tspan
            x={-9.67}
            y={17}
            className="st2 st63 st65">
            {"Bombas Permeado"}
          </tspan>
        </text>
        <g>
          <text
            transform="translate(897.2 742.426)"
            className="st66 st63 st67">
            {pt008}
          </text>
        </g>
        <text
          transform="translate(940.324 742.03)"
          className="st66 st68 st65">
          {"mbar"}
        </text>
      </g>
      <path
        className="st0"
        d="M918.5 798.17L1002.5 798.17"
      />
      <circle
        className="st59"
        cx={1234.49}
        cy={997.34}
        r={9.21}
      />
      <path
        className="st0"
        d="M1234.5 1082.17L1234.5 1006.55"
      />
      <circle
        className="st59"
        cx={1067.12}
        cy={1055.96}
        r={9.21}
      />
      <g>
        <image
          width={157}
          height={139}
          xlinkHref="data:image/png;base64,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 AP2AC3Gp8ExNAAAAAElFTkSuQmCC"
          transform="translate(990.75 905.998)"
          overflow="visible"
          opacity={0.3}
        />
        <path
          className="st1"
          d="M1048.43 914.6h-43.07c-3.45 0-6.28 2.82-6.28 6.28v101.26c0 3.45 2.82 6.28 6.28 6.28h51.6c1.23 0 2.42.42 3.36 1.2l.37.3c6.45 6.52 6.45 6.52 12.9-.15.97-.87 2.23-1.35 3.54-1.35h53.73c3.45 0 6.28-2.82 6.28-6.28V920.88c0-3.45-2.82-6.28-6.28-6.28h-82.43z"
        />
        <text transform="translate(1025.838 959.545)">
          <tspan
            x={0}
            y={0}
            className="st2 st63 st65">
            {"Caudal Lodos"}
          </tspan>
          <tspan
            x={-7.12}
            y={17}
            className="st2 st63 st65">
            {"Recircul. TK-002"}
          </tspan>
        </text>
        <g>
          <text
            transform="translate(1048.94 1007.864)"
            className="st66 st63 st67">
            {fit032}
          </text>
        </g>
        <text
          transform="translate(1089.066 1007.468)"
          className="st66 st68 st65">
          {"m³/h"}
        </text>
      </g>
      <circle
        className="st59"
        cx={916.12}
        cy={986.34}
        r={9.21}
      />
      <g>
        <image
          width={157}
          height={137}
          xlinkHref="data:image/png;base64,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 Zecoo+rLsFYAAAAASUVORK5CYII="
          transform="translate(839.75 843.998)"
          overflow="visible"
          opacity={0.3}
        />
        <path
          className="st1"
          d="M897.43 852.09h-43.07c-3.45 0-6.28 2.82-6.28 6.28v99.26c0 3.45 2.82 6.28 6.28 6.28h51.6c1.23 0 2.42.42 3.36 1.2l.37.3c6.45 6.52 6.45 6.52 12.9-.15.97-.87 2.23-1.35 3.54-1.35h53.73c3.45 0 6.28-2.82 6.28-6.28v-99.26c0-3.45-2.82-6.28-6.28-6.28h-82.43z"
        />
        <text transform="translate(863.289 896.033)">
          <tspan
            x={0}
            y={0}
            className="st2 st63 st65">
            {"Presi\xF3n Estanque"}
          </tspan>
          <tspan
            x={14.29}
            y={17}
            className="st2 st63 st65">
            {"Reactor MBR"}
          </tspan>
        </text>

        <g>
          <text
            transform="translate(901.94 943.351)"
            className="st66 st63 st67">
            {pt007}
          </text>
        </g>
        <text
          transform="translate(938.066 942.956)"
          className="st66 st68 st65">
          {"mbar"}
        </text>
      </g>
      <g>
        <image
          width={161}
          height={103}
          xlinkHref="data:image/png;base64,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"
          transform="translate(1243.75 947.998)"
          overflow="visible"
          opacity={0.3}
        />
        <path
          className="st1"
          d="M1307.89 956.93h-42.07c-3.45 0-6.28 2.82-6.28 6.28v23.24c0 .8-.28 1.58-.78 2.2l-5.32 6.53a3.492 3.492 0 00.13 4.56l5.05 5.51c.59.64.92 1.48.92 2.36v26.87c0 3.45 2.82 6.28 6.28 6.28H1388.33c3.45 0 6.28-2.82 6.28-6.28V963.2c0-3.45-2.82-6.28-6.28-6.28h-80.44z"
        />
      </g>
      <g>
        <text
          transform="translate(1279.71 995.603)"
          className="st2 st63 st65">
          {"Medici\xF3n MLSS"}
        </text>
      </g>
      <g>
        <text
          transform="translate(1302.818 1022.921)"
          className="st66 st63 st67">
          {ait016}
        </text>
      </g>
      <text
        transform="translate(1349.943 1022.526)"
        className="st66 st68 st65">
        {"mg/l"}
      </text>
      <g>
        <image
          width={168}
          height={336}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAAFQCAYAAAAr/TV0AAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACI1JREFUeNrs2wtz28YVgFGAAvXy o076mP7/39c4tvUkRRIFZ+5Or9cASbmy60LnzOxIkSM6oj7dxYJK08AvrP1FHoP56n9WXO2BzxMp p8TZPzfc7hlhttVqqvfhUKR9tU4KtTshzrIWI6sVKUfiLGtXrfKxg6F2J8S5D/EsVhfrLK2FLZ8D W3oJcjusTfV2m2IdjbQ7EOcixbkc1nm1linW9sg1Kq8v0DI5S4hPsdZpPUWsuzRN+2OB5snZRYwX w7qKdT2sy/jYeZqktnrqOHcRYAnzcVgPaT1GM5uRa9ODgebJuY/xzbDeDuv9sN7FP19FpMu01Zug wizKVMxx3g3rdlg30U2+POzT5/VTgZYpWMe5D/O3tN7Hxy/TFF0Ik+ras1xvroZ1H2F+isHWjVyn 7qKhg4HW0/NtRPm3Yf093n6ISXqVrkWd6KlP7uXacxWT83Nqpq0iLgenPkfaTdxSOovJeB0h/hZx /jPe/p4CPa+2eIEKtKkCfYxA30QvbfzZOuJdxfub6tbT5AQth6OrCHE/Mf8acf4j3s8T1CGJqUNS maBvYmsvh6JyTVpWV51jJg9JOdB8DfohJunv8fZd/Hm+1WSC0lfXlpuYjmVbf4rr0S/pHLNMgbbH tvj6GvQqHuhdtcqD1wckgQo0n+S30VITsd7HueY6HbLLif6bg/bUFl+maIm0hHodb+v7oLZ3xuyi jxLnZWqn9NNVQy4Pur6rpl49RUuk9atI9Uue4mRMPnR3aS2rhurJObnFj03SY6/Bm54ci3TRTP+y 0cGOFgeqb0cepH4wYfI9E/XkhhYnPmDjEMQLhNk8d7gtvqP8xvTkBcM92NPiGZMTfrqFpwCBgkAR KAgUBIpAQaAIFAQKAkWgIFAECgIFgSJQECgCBYGCQBEoCBSBgkBBoAgUBAoCRaAgUAQKAgWBIlAQ KAIFgYJAESgIFIGCQEGgCBQEikBBoCBQBAoCBYEiUBAoAgWBgkARKAgUgYJAQaAIFASKQEGgIFAE CgJFoCBQECgCBYGCQBEoCBSBgkBBoAgUBIpAQaAgUAQKAkWgIFAQKAIFgSJQECgIFIGCQEGgCBQE ikBBoCBQBAoCRaAgUBAoAgWBIlAQKAgUgYJAESgIFASKQEGgIFAECgJFoCBQECgCBYEiUBAoCBSB gkARKAgUBIpAQaAIFAQKAkWgIFAQKAIFgSJQECgIFIGCQBEoCBQEikBBoAgUBAoCRaAgUAQKAgWB IlAQKAgUgYJAESgIFASKQEGgCBQECgJFoCBQBAoCBYEiUBAoAgWBgkARKAgUBIpAQaAIFAQKAkWg IFAECgIFgSJQECgCBYGCQBEoCBSBgkBBoAgUBAoCRaAgUAQKAgWBIlAQKAIFgYJAESgIFIGCQEGg CBQEikBBoCBQBAoCBYEiUBAoAgWBgkARKAgUgYJAQaAIFASKQEGgIFAECgJFoCBQECgCBYEiUE8B AgWBIlAQKAgUgYJAESgIFASKQEGgCBQECgJFoCBQBAoCBYEiUBAoAgWBgkARKAgUjgbax2rSW/il J2gdrXD5nwfam6j8QEcH3uKEibmL1VcL/pvd96SGFgdqznHu1zbWbiJaODXUk4ddlz6xrcLcx7gZ 1lOsTVo51PaVPcntC3yTXluQu4nVHxt03cSDlkD3Ya6HtRrWY6xVinaRJnH7SsNsnxnka7qW31XD bpOGXj3s+rHnrDshzn2U98O6i7V//3JYZ+k/YlFdLrQzDXRs9RNfb3/g0mnOl0V9Feh2Ysit4uN1 pF89b93EOC6Vlzhvh/Ul1lX6vP0DLyPWPEXbmYa5GFntyA9mP3Et37+C6/e+GnabCPG2WvfR1zpa 241M0oMTdP+JD/Fgn4f1popzE3/BRXxskb6Rc9rSS5hnsbpYZ+nrXqRp2oxcd23SNlcfNue45ecf zKeYlvuOPg3rz+jpJnbkx7Tl11N0MtBNCvQmtvSLKs6HiPYyfcPmNEHbKs4udovzanVpB8nPY33I XKdpkb8hu5kF2lfPQdmJS6D/GtYf8f5NdLROz8fkIal+4HV64GW65ixxvp8ItJ1ZoCXO8/ha9+s6 dpNt/OAuq+1+m37Iy3XXQ6y8rY1de83pVtK2mqD7yfkxIv0Ygd7Hn29O2eKb6pD0WB2AtvFg+9H8 Nr5R+Rs0p9N8np7n8XVex9e9X+/ibY60bPObdCi4O3DtVbb8uV2L1rcqV/F136Rt/lOcae7judie usU3aZtfpeB2Kdqb+GZdxjdvOcOTfAm0TM+r2DH2O8eH6nbbdfw7i/Q8PaTD5ee0pd1WU2NOgfYj t5jy3aDyw3qTfmAf027SnzJB62vRx/TP9XVpiXOuh6QS6EUEup+af6mmYFmXKdBVivPP2M7y4eA+ BT7XCVrfEVpXlzoPIzvJSVt8nqLNxPXEfYS5TKfbduKWy5wm6Nt0Yf+Y7u89xJ+fxfNUdpkS5x/x 9lMKdD3zCZq72Y4cFtcjp/fm0CFpKtJ+5HR/Vp1ex6495xBom07vlxFomZ6rFOf7KtCHFGg5tZYJ epvi3lYn+TkFWt9u2x643faslzrHTvV9deukvlE9p6196hR/UU3O/CrbWKBfYmJ+TIeCm5Hrz7nd Zpo60R96Hb557gQd+4nYxjdsNxLlXF/abNJJPr80l19pK3c0Lqst/jZFWibnXXUomOuN+mOD7uTf L+6e+Zfk9+e2pR+7Ft2mVQdaTvEl0HXzn5eIy3pojrxqMuM4D3XUvESgx/6CdsZPdP1riH11f+8u pme+D1rifUxhrl5ZnM8K8aUC/SH/Ef8HT3A7cj2Vf19hme5k5Dse9cub21cW54tdZ3H6oaltvv7F kbPm69/mygFvm29/wVucAv0pB6e2mf61u37ixNqIU6A/e5o2zbe32b77fxJDoD/y+WuPnFwB4Cf5 twADAFUFJU2FRTacAAAAAElFTkSuQmCC"
          transform="translate(653.75 546.998)"
          overflow="visible"
          opacity={0.3}
        />
        <path
          className="st1"
          d="M717.81 555.51h-49.07c-3.45 0-6.28 2.82-6.28 6.28v298.26c0 3.45 2.82 6.28 6.28 6.28h57.6c1.23 0 2.42.42 3.36 1.2l.37.3c6.45 6.52 6.45 6.52 12.9-.15.97-.87 2.23-1.35 3.54-1.35h58.73c3.45 0 6.28-2.82 6.28-6.28V561.79c0-3.45-2.82-6.28-6.28-6.28h-87.43z"
        />
        <text transform="translate(683.07 796.46)">
          <tspan
            x={0}
            y={0}
            className="st2 st63 st65">
            {"Oxigeno disuelto"}
          </tspan>
          <tspan
            x={1.6}
            y={17}
            className="st2 st63 st65">
            {"Est. Reactor MBR"}
          </tspan>
        </text>

        <text
          transform="translate(722.326 843.779)"
          className="st66 st63 st67">
          {ait005}
        </text>
        <text
          transform="translate(766.45 843.383)"
          className="st66 st68 st65">
          {"ppm"}
        </text>
        <text transform="translate(690.053 694.46)">
          <tspan
            x={0}
            y={0}
            className="st2 st63 st65">
            {"Nivel Estanque"}
          </tspan>
          <tspan
            x={6.91}
            y={17}
            className="st2 st63 st65">
            {"Reactor MBR"}
          </tspan>
        </text>

        <g>
          <text
            transform="translate(740.973 740.779)"
            className="st66 st63 st67">
            {lit006}
          </text>
        </g>
        <text
          transform="translate(767.651 740.383)"
          className="st66 st68 st65">
          {"%"}
        </text>
        <path
          className="st48"
          d="M674.63 756.53L798.87 756.53"
        />
        <g>
          <text
            transform="translate(690.203 605.107)"
            className="st2 st63 st65">
            {"TMP Calculado"}
          </text>
        </g>

        <g>
          <text
            transform="translate(714.326 637.426)"
            className="st66 st63 st67">
            {tmpcalc}
          </text>
        </g>
        <text
          transform="translate(767.651 637.03)"
          className="st66 st68 st65">
          {"mbar"}
        </text>
        <path
          className="st48"
          d="M674.63 653.17L798.87 653.17"
        />
        <g>
          <text
            transform="translate(711.276 585.107)"
            className="st66 st63 st64">
            {"TMP-CALC"}
          </text>
        </g>
        <g>
          <text
            transform="translate(717.732 675.065)"
            className="st66 st63 st64">
            {"LIT-006"}
          </text>
        </g>
        <g>
          <text
            transform="translate(719.239 777.64)"
            className="st66 st63 st64">
            {"AIT-005"}
          </text>
        </g>
      </g>

      <g
        onClick={() => {
          selectc(4);
        }}>
        <image
          width={35}
          height={34}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAjCAYAAAD8BaggAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2VJREFUeNrMmAtT01AQhZtXizbU iojoqIyO//8fOYL4KkILRUofaeJm5mznsL23SQo+OnOmz9x82d27e9JW6z97BH/w+OJvAQUk3xoF PRdN4IItIEIocsAxUE5a4rl4CCA9YQmQkNr4jMEKgikhFqI5lNUBC2qAaDQ6oh1RV/QYKj+L8RsG ygBxK/oluhFNRTMCc0LFFUAholGCpKK+6CnUA1SboqTRWQDmWjSELgF3i+81WrWAGOaR6InouehQ 9FJ0INoDZAdAIQHNcfKR6Ifou2gg+om1J76CjytqZgcwJcgb0RGeDxGlTRGaAOgZ1ujS+QqqpTs1 5QPSmtlFZEqID6L3otf4rAdgrSHeYRlqZg8wKX4bIFUZlNso+YA0VX1E4wgw7/C+j+gkVNABAelJ uwDR32nkJihwrSWN7hoQ104XV/hK9JZStY/vErPlW6YZ5uY3GerqErpGgWdc3C6gGOlKAfSCQPqA 0UJ2tQ59H9LrJSIyFl2guIcAnOH7ZcvkXqMTI8y7KMgDU5jJBhhXLSZIbw/r7GNDpFSDqyiHnggp UB/qUc1EDbs8t49d6mXcMlZrbYpQiqj0KE2xSUWdR0iR0k7PxR5tipAe2EFEUseI2NZVRDQD21hv bVOEnoke4YCEtmzTyPicQkRaWzN0bFe7dfNtfE3FIPe9XktBQbZhZiZ0viWQHpMbOS/SAinMFD1i TA1svsk2VDxy6t4L44/uQLlSlhFQ2VGv8Hq6RaSsWbP+SKFWkQwdByuQepkLTO2mUAWVwAwQV1jr kqDu+KJog0vk7d+l7e+aYYHH4GeAKS/mXPRF9El0IvoGMJ1nhQvI1WHbaGId6h+hZ5jmJtIKMwTA seij6BTzbGxrM2rgqSPjDAtTrBl5afbTQzjGz4jOMd6PkLJFlR/SvE9xBQNqjjnVQx/zKXGYfK2b a6TqK0BOYGlH5K3zukALnJhPNqerVk/dNgMyp9ZRFvEZInKKGjrHujPaYZUmX6EUQAt0gkIcYGJ3 PSZftzj7nzNcyJh2Vy2Tb71xyxSppjFFymJj8vm+bIK0aYO9qer8Qc3ByDtObxjZPoSOO9fMjJ+p 436sMZBtAxE5gchzf+/bgUvXXcZ9/v2wXtn3R4MdqIXDSTz4/0NBw/+H7mNb/u3jtwADAKIUdX99 LWqIAAAAAElFTkSuQmCC"
          transform="translate(1046.45 733.759)"
          overflow="visible"
          opacity={0.15}
        />
        <path
          className={isd(4)}
          d="M1084.8,736.7h-17.4c-1.1-0.3-2.2-0.4-3.4-0.4c-8.1,0-14.6,6.5-14.6,14.6c0,4.1,1.7,7.8,4.3,10.4l-4.1,9 c-0.3,0.7,0.1,1.6,0.7,1.6h27.7c0.6,0,0.9-0.9,0.6-1.6l-4.1-9.1c2.6-2.6,4.2-6.3,4.2-10.3c0-1.5-0.2-2.9-0.6-4.2h6.8 c1.4,0,2.6-1.2,2.6-2.7v-4.7C1087.4,737.9,1086.3,736.7,1084.8,736.7z"
        />

        <circle
          className="st1"
          cx={1064.27}
          cy={750.84}
          r={10.92}
        />
        <circle
          className="p03a"
          cx={1064.27}
          cy={750.7}
          r={8.02}
        />
      </g>
      <g
        onClick={() => {
          selectc(5);
        }}>
        <image
          width={35}
          height={34}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAjCAYAAAD8BaggAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVJREFUeNrsmAtPE0EUhbuPPpSu xYpgVDDB//+TFMUgIIqlD9ptdzveSc4lh2F2um0h0cRNTpotzM639965c6aNxv8rfEVbjls13jif jwoUkWLnPvKAqJaQqQNWFyiGElEKNXHvQilECS2gsg5YVANYYVrQM1ILcAykMHNRLrqF5hCDrQWk MCkm3hG9EPWgDFBNSqEC2YjMRGPRABoCzEIWlMp7V1oDpiPqil6J9kVvRK9xb79vU5QaFB0L81t0 KboQ/RD9Eo1EU0BHbqRCQAkmywDyXnSETwvVR9RaVEsNqpuJ6BrgNrLPEc2I6qhw05dWFHCCiWwE 9kSHomPoEIC7iF7TU0MFUmbHviSg1Cn6B0VeFaEEk/UQjQ+ijwB6i0k0OrFnlWmUugDRtJZI19Sp pbvUpRWp0iLuA+AIUO9QP10nVb4+VNIqjHFv03gDjRHFgos7BNQF0AGg9nHfRfSqYNzepWnMsdJs Xf3EyptQKzANGuBbWRkK8gBR0TS1a8Dw81pIWw81tee82L0+FnsewkB9qOdZUVHNDp84UPrMjIBi HhDqPT2sEI2M2wTr7oEpdfkMz3abqjdCMf5JgTIKbXNDdxARVBNg+nKp+4Jxxb6lg9uUptjzApu4 BN2gE1+0N5lgG+9VJS8Qe5cCjS13dujlFkAmoMoIuTv1iBrYYh3n5wEp8aIF+aMyBGScfWiMjjpE A8vxoOWaYAyj/ki3jgfeKPYMVqARuuo1wNyuataAWQBiTFvHhKDunpcEOqwu/x3qGx1aIauMvnGs iPVCZ6Ivoq+i7/BLUy6HEFBCUB2yrG5zNBXGnmHsxOcA+YTPS5QDR8kL5ANLSbEnCixeoRNsonby b6IT6ByloF7bsO9Z5bON556N/Bw1p5piIq1Ba19PAfIZYFf4e17HMWqvUV+sHdpQCgYBC8utYwgv fYY0nTowZV1PranIMVhX3y2lIGTydVUN4H3U6F/hu2lVCwkBcU/SFM2wZC9WHINKqqEbj0tcVLWO pzgo8nLPyUPPUAZF6AT7VEdp4xylC+dwuPFR+rF+bDC0WMw/9XPMX3f9EWAAtY1d3w+GZeoAAAAA SUVORK5CYII="
          transform="translate(1046.45 795.952)"
          overflow="visible"
          opacity={0.15}
        />
        <path
          className={isd(5)}
          d="M1084.8,798.7h-17.4c-1.1-0.3-2.2-0.4-3.4-0.4c-8.1,0-14.6,6.5-14.6,14.6c0,4.1,1.7,7.8,4.3,10.4l-4.1,9 c-0.3,0.7,0.1,1.6,0.7,1.6h27.7c0.6,0,0.9-0.9,0.6-1.6l-4.1-9.1c2.6-2.6,4.2-6.3,4.2-10.3c0-1.5-0.2-2.9-0.6-4.2h6.8 c1.4,0,2.6-1.2,2.6-2.7v-4.7C1087.4,799.9,1086.3,798.7,1084.8,798.7z"
        />
        <circle
          className="st1"
          cx={1064.27}
          cy={813.03}
          r={10.92}
        />
        <circle
          className="p03b"
          cx={1064.27}
          cy={812.89}
          r={8.02}
        />
      </g>
      <g
        onClick={() => {
          selectc(6);
        }}>
        <image
          width={35}
          height={35}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2pJREFUeNrsmFtv2kAQhe1luYTc oAn0XrVV//9fqlqqJmnTFEoCwcF2x9KZ6GhYX4A89KFIR1jGO/48MzszJor+sU+857qy9XnJ8ZMC 6bUOx6wQTIbjnM7VwvktYAqQFuTpmMH05gVMKlpDKc7VQsUNQBSmLeqIuqIe1AaUo5tlgFiJ7un7 oQmYbwDjceMD0THpCOfUW3qTAiYRLURz0R983wFuXQXlG8B0cfOB6Ew0Fp2LhqJD/K6hy+CJJUB+ iX5CNzi3xDVBqCoghTkGwAvRG9Fr0XPRM4B2AkBFiGYAuYANBl9QCGs9FGNhBzc8B8R70QfRW3hp gJC1TQ6lCM0t1hbX9SnfIrP7MvZSCEgTuI+wvATIJ3y/wvkj89QxGdewHSGsHYJJKbkzWxJ8AEa9 U7h5BI8UIB8RshGFwAdqkXqph2sszAM8mFAupWUe0twpjJ0gVwqId/DMGOd7uM6Z8qFP2yI5guHd Z3fdhoe03njkxikl8xhJfGxg4pqWElPVTgAxFV1j182xAdZaWF0AiGvOECADypkymFAucj7qA45Q PvjhYl4USmgGOqV60xTG5qTaPIS9E0B2TVgjV1EM+/BK3yTwLpOBQmnbOUCyb+ShC3Ry3mkdGPL0 JLtC6cN6sunsLnUlCRnXjBj7zE6Vdp2pHzkVrNQUMTvbNP3kgcps7W4A5aaoaT9aUhFLd4CJAnYT aE028zIP6Sxzj140Q61YGqhtwDLzkHcQz0iPNkNA2ocKkN8oZPO6saHCM9bmFHZv4f20qrmWzTNn NGo46k95zaCvnlmQvWsC0ir96KFWxfzsTe3oBkbWsiGfw6Tt4lL0RfRZ9FX0Ax5LuLm2Gs7TLVOL Ihrqs5LhXmeiwhtXom+AKfQdkDqo5U2AooqtngXeLNaUuBqiG3hmQjATpIF6p3ZA09jfw6ij4Us7 9oxG2AMKZU5Quiku4J2JCdUqVEp8zc5Y0DlNdp2Vz03jbWPdCutmSOJLhOgK66awsw4VRt9guy7M 7tMEHdLrUI+AOGRTQN3g+NaUj3ybF0Wb1LrbDiENV894KDEFcE6FcGUq9E7v9rEZIfgNtk1jhKfQ JqSVaRVZVVGNt+jY7DFn3u+1HOSmKadVjfSp/o4JjSbO/NmQ7zoh7DPnVP1PtMuY8v/T6PNXgAEA AsF7quTPhpIAAAAASUVORK5CYII="
          transform="translate(1168.5 954.174)"
          overflow="visible"
          opacity={0.15}
        />
        <circle
          className="st1"
          cx={1186.12}
          cy={971.27}
          r={10.92}
        />
        <circle
          className="p04a"
          cx={1186.12}
          cy={971.13}
          r={8.02}
        />
      </g>
      <g
        onClick={() => {
          selectc(31);
        }}>
        <image
          width={35}
          height={35}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA5VJREFUeNrMWIlS2zAU9KHcgQBp KbT0+v+vote0oZwJxDkc8dzZx2wfsuOQdKae2bEJsrxePa1WjqL/7Ii3uK/qXg/8U0JMIqHr2BBh Qt78thNCMSEBUrqOA8qsgBznEMHg4WqSSdC2IWji3MBvSsoTiaVgQVgSuUq14jVkVI3i4W1BR9AT dHHdBCklpERmgikhE8zxP1atNiFWpQkC+4KB4FBwINgDKVVpBUIFmQfBWHAnuMX1GOTmaBck5daQ aQn6IPFKcCx4IxiCVBfqsULFQ+9B5ErwW3CBF7sRTIjIM1KuYpiUzJHgRHAmeCd4C3KDEkIzInQp +Il+mtTOo92zGehKCliHqVDmVPBB8AnnU5Dso664hnLUSYYhGmKoO+jXU9Hn9HelQg4PGmCICmU+ A8X1a3qIM1N/RaT2QFrbrYjszBT4k0rOqJNCnR7UKYbqPZQ5Q/1w7aSBiaGk1B604HUoxzhnILVi leyQKaE+5D6hujkGmR7apCVLiNZgSsO0wMy7RWHforgzmnF/VEpNMTch9RBEirr5CEJDKk5nnHod IqiQgdgkoJKPTIdsgj3UyQF5TtsMU11TZR87AlTpFr1c6ZA10LCLm3qGTLLBGsh+pqT2yVQbRpQn ZrEpbF2zWi8gUqVUG8TaRp2YC7BsMeUVvSxu1D20P0eLtDMvGocIVeWZXRx+DZ4IebO+qJuqo+ab Bq2AN2kSmJuV/6+XTgx7vXGOKVnmqpsoklOfU0z7Kfpdmj59Yt5cbV9XbOsXlVkmQEbVnpP/jHHW KJJbH+IhyynPFG56TZEhMznGb0jmDv1do+8HIhRc7T11MAGRS+SZQ/iRRg1dOrwxSS7QUBS5QH9K aGEJpYH0aA2yTb7RMBnakuAJoWRukIm+Cc4FXwW/8PvUpse0wtDKfCMOTFcb7jOofIWHK5kvgh9Q a0JDFoUUsqZntz921jAWNDNtWlQy57ge4f/TULZ2JcWoceGaEiFHiCECXI9SY0SZeox7R1DkOzBC cWeBKV9JSKOCjQ53ePMjSgEa1iKQvke7KxTxCNBivoeawdnqKqbsEiQ8XSuhAdAvITQm22DrCHpP 3Y1iUrJR7FAs6ZohW1AIU2NlZ17QNnujjaKND4mZcRpNmhRPInL6GTCn7XRex1S3+djgTESJzEcG 3s+v6uzrX/I5Jgrk6CSwsvuAGjv7HBPV8Kqqj1X+pZ3v6ivcVoHuUYABAN7dsBYlfmeBAAAAAElF TkSuQmCC"
          transform="translate(1238.34 1062.798)"
          overflow="visible"
          opacity={0.15}
        />
        <circle
          className={isc(31)}
          cx={1255.69}
          cy={1080.09}
          r={10.92}
        />
        <circle
          className="vk1142"
          cx={1255.69}
          cy={1079.96}
          r={8.02}
        />
      </g>
      <g
        onClick={() => {
          selectc(30);
        }}>
        <image
          width={34}
          height={35}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAkCAYAAAAD3IPhAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA1BJREFUeNrUmAlv00AQhX3lbtOE 0lJxVC3i//8kQCAoJQ1tmjt1bMbSm+gxrJ1NIhBEenLjJLvfzszOPjcI/qFX+Id+m/8NmJCuLIZg 7QQW7vC9QpFRjKuOk0Fr+luVHwqjn+vEiaguquFaJ6Ackz6JVtATlBJQvg+MRkMhGqKWqE1qEVCO iZeimdHCAeUNwyB1THos6on6ohOouNcErEZlKhqJHkX3oge8nwKqFCipgFGQDgDORBeiF6LnBGVh JgD4Ifou+ia6FQ0x7rwMKCkBiQjkFBCX0CuAFSBHJk0pJnsETAHSBXBMmZgDvBJGQWpITR8g16K3 oivRS9EzgDTxXS3gNQp3ikWcoLZqGDs3Oy2gqxMmRrF2EYFLgLwTvcG9LqUnNls7RUSPsCCGTamQ U9uTkoqo9Cg9VwC5wH2OSEirzs22T+izFdIzxQ5bUpRyV2QUpkMpeo3UnDnCHjl2Zk5NMaDC5lp6 QKEvEaHN5K7CbSMC54A4RWo47JFHW2ggXX3swHOMxS1hc6RUpekYg/QcxerbuWNaXJfG6wCU622z utDRX1rUZRs7gNjF6XhNGrPhqDlnmnSAGhVhvCOIrcOIzrXSMaOKFSlU7IjgPpbDnvihi7qsAK1f OcSIeYfQ5dIOMkkOx5f7+JsymIy66drHi1S8eCz1Onbc32AsxApNaYlBsj1g2HCpz5kT0C+LjBzh TPHDom2PcdUB1nyweURkTcfAGL5GvY0eB7nroNRVrLCCETzIEM2qQx0zcJhxW3MMosfAHa5jMlqb yMQejapJ9jLZ0m8syAxur/A1n0XvRZ9gusY2OnHFto5Lmp+dODNPBU9Y9QQgtwD5CH1FdKZUi4EL puoRJaCCW0MpPQEsATFDWor03iASHwBSQA3weWXNBCbEE+RYgZe4Nyo5xfW3GpUhpacA+oIoOUHK PLDuqAUmDvB+Bh8yIEPecTyqaMEOMPkNoIYYb0b+1wsmI3Otk+gOu4MNUKNlYRYoznvUhkJMyIhn rhax7SFOT9sadlUb0eiQJ0kchlzt5cT0qbQMxPfx1mUrGmaHsQdOqaD5MXfrM7fPSRw6elBs/EhY cqRkVKiZ70SH/jskNEfKXif+vh4l9Dwk/9/XTwEGAOehbf3pegNVAAAAAElFTkSuQmCC"
          transform="translate(1153.438 1062.43)"
          overflow="visible"
          opacity={0.15}
        />
        <circle
          className={isc(30)}
          cx={1170.38}
          cy={1080.09}
          r={10.92}
        />
        <circle
          className="vk1139"
          cx={1170.38}
          cy={1079.96}
          r={8.02}
        />
      </g>
      <path
        className="st39"
        d="M770.1 1291.99H508.21c-6.6 0-12-5.4-12-12v-162.84c0-6.6 5.4-12 12-12H770.1c6.6 0 12 5.4 12 12v162.84c0 6.6-5.4 12-12 12z"
      />
      <g>
        <path
          className="st38"
          d="M593.38 1155.08l-.01-10.8a4.2 4.2 0 014.2-4.2l128.2-.04c1.84 0 3.33 1.49 3.33 3.33l.01 19.67M602.33 1167.08v-8.22a2.78 2.78 0 00-2.78-2.78h-14.08c-1.83 0-3.31 1.48-3.3 3.31v7.69"
        />
      </g>
      <g>
        <path
          className="st10"
          d="M729.93 1189.59c-17.16 0-31.16-4.63-32.21-10.53h-.11v52.74c0 6.21 14.42 11.26 32.32 11.26s32.32-5.05 32.32-11.26v-52.74h-.11c-1.05 5.89-15.05 10.53-32.21 10.53z"
        />
        <path
          className="st2"
          d="M729.93 1189.59c17.16 0 31.16-4.63 32.21-10.53.11-.21.11-.53.11-.74 0-6.21-14.42-11.26-32.32-11.26-17.89 0-32.32 5.05-32.32 11.26 0 .21 0 .53.11.74 1.05 5.89 15.05 10.53 32.21 10.53z"
        />
      </g>
      <g>
        <path
          className="st47"
          d="M729.3 1162.41c-.39 0-.78-.14-1.09-.38l-.08-.07-3.13-3.13a1.612 1.612 0 011.15-2.75h6.27a1.612 1.612 0 011.15 2.75l-3.13 3.13c-.31.28-.71.45-1.14.45z"
        />
        <path
          className="st1"
          d="M732.41 1157.06c.55 0 .82.66.44 1.04l-3.13 3.13c-.11.11-.26.17-.42.17s-.32-.06-.46-.17l-3.13-3.13c-.39-.39-.11-1.04.44-1.04h6.26m0-2h-6.27c-1.06 0-2.01.63-2.42 1.62-.41.98-.18 2.1.57 2.84l3.13 3.13.08.08.09.07c.49.39 1.09.6 1.71.6.7 0 1.35-.27 1.83-.75l3.14-3.14c.75-.75.97-1.87.56-2.84a2.615 2.615 0 00-2.42-1.61z"
        />
      </g>
      <path
        className="st38"
        d="M691.1 1222.81L629.1 1222.81"
      />
      <g>
        <path
          className="st47"
          d="M628.58 1227.64c-.43 0-.83-.17-1.13-.47l-3.13-3.13c-.58-.58-.62-1.54-.07-2.21l.07-.08 3.13-3.13c.3-.3.71-.47 1.13-.47.89 0 1.62.73 1.62 1.62v6.27c0 .88-.73 1.6-1.62 1.6z"
        />
        <path
          className="st1"
          d="M628.58 1219.13c.32 0 .62.25.62.62v6.27c0 .37-.3.62-.62.62-.15 0-.3-.06-.43-.18l-3.13-3.13c-.22-.22-.22-.6 0-.88l3.13-3.13c.13-.13.28-.19.43-.19m0-2c-.69 0-1.35.27-1.84.77l-3.13 3.13-.08.08-.07.09c-.86 1.08-.8 2.6.15 3.55l3.13 3.13c.49.49 1.15.77 1.84.77 1.44 0 2.62-1.18 2.62-2.62v-6.27c0-1.45-1.17-2.63-2.62-2.63z"
        />
      </g>
      <g>
        <path
          className="st26"
          d="M571.87 1179.06h15.25c.97 0 1.75.78 1.75 1.75v39.25"
        />
        <path
          onClick={() => {
            selectc(12);
          }}
          className={isd(12)}
          d="M582.37 1188.06h-14c-.83 0-1.5-.67-1.5-1.5v-14c0-.83.67-1.5 1.5-1.5h14c.83 0 1.5.67 1.5 1.5v14c0 .83-.67 1.5-1.5 1.5z"
        />
        <path
          className="st26"
          d="M611.87 1179.06h-15.25c-.97 0-1.75.78-1.75 1.75v39.25"
        />
        <path
          onClick={() => {
            selectc(13);
          }}
          className={isd(13)}
          d="M601.37 1188.06h14c.83 0 1.5-.67 1.5-1.5v-14c0-.83-.67-1.5-1.5-1.5h-14c-.83 0-1.5.67-1.5 1.5v14c0 .83.68 1.5 1.5 1.5z"
        />
        <path
          className="st11"
          d="M568.45 1199.75H615.3000000000001V1239.8H568.45z"
        />
        <path
          className="st26"
          d="M615.22 1193.06v45.24c0 .71-.36 1.31-.81 1.31h-45.08c-.45 0-.81-.6-.81-1.31v-45.24"
        />
      </g>
      <g
        className="pointer"
        onClick={() => {
          selectc(13);
        }}>
        <image
          width={35}
          height={35}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA29JREFUeNrcmIlO20AURT0ZZyFA mlBQKSotXf7/j7qhlhZoIWQhcRzbfSPdkS6PsWODqKpGunJIJjPHbzdR9I+9zBPtUfxNIENXlgdh NQY0DUGcWrhavPdXf3AuyujqP6sFZhqCxFBbKcZad3AKrdX7rA5YXBPGQ/REW6I+rj2og3Xu4ES0 hBaiW1w9XFYFZWrCdEXbooFoCLn3u/i8Bwu6A+fQTHQjGuM6B1hC1irqWohh3GE7oj3RIfRC9BxQ fazxFrolmN+iC+iX6BrrEqy9B1UF5C3jrLAvOhK9Eb0WvQTQLlynXeagJoD4QeDtQEbecV9cAmNx yA4OfiV6K3oHKGehEWC6WG8oqJdw0T7WDeDauCQTKy3Uwp30sZmzxonoA4COALkD6DiQ9ikgBhRj bXyXQGko8+IAjLeOc8eB6BjWOYGlDvBdl2oQJ0eO33ehNtYUCGrnyincmlBJCFqIA3kA1xxDR3DB AN+HYDhzW8qVK4BcQTeAWnFw20DsdAnGxct7XA+R7lvkJlORob6YsjtTCvgJAQUtZCh+tuCWEdJ9 iJjhADY1u4Cl0jFE/O1h/x4YDMdMKKAZ6BkCs7vBMmVQLVVcd6kMdFQvvAOkK3Mfd9UnmIdOBx6q o9oNZ6iJ9B/kc59pHWqetqF1QnFlqS/yfqbMQqE5x0SPG+RMjTkqCgEVVNh8Bc1UIyweMA3qoS0P 7HsPiHtKRuXfd+cVDVsPefl9VxAXxDs3qS2UY+GSOvYUYKvQBjVAcmq6C+w7xxmp3jMElOKHU4wL Y4JKG4yjGsbf4BX2nQEqq+r2DDTBPHOpmmmL6kdR8dTB1vY35+aic4wlE3y3ZgvZDXWjjRrUo0Zp A+UilBgM4wC+iT5Dp/hspluHrTncW1WLooqnjBSHLOCiS4L5KPoq+olQWJCFNgJFFanuD18TQEKZ OceBDuY7YD6JvojOEEcz3enLBjSfokv4uaVGiDnufKT6EXf0hEbYM1jlFOOsd1Vad6bmbLtVB7Eb 9gITQB5Ydw6QC1hmSnWo9lOHhuKDxoiBQcBCOs3HyK5rWGwOK6/L6plpENQ+27YB0lcjia70/iHR K1gIH/MobdXjs7eMDTzacLbxE+vG9tNk0NJjqS3p2gUFa0bNulbLecxsYyqKo74+yb9jmvy+iP6X 1x8BBgBAFn5/GEe6agAAAABJRU5ErkJggg=="
          transform="translate(591.56 1139.174)"
          overflow="visible"
          opacity={0.15}
        />
        <circle
          className={isc(13)}
          cx={609.2}
          cy={1157.06}
          r={10.92}
        />
        <circle
          className="dp6080b"
          cx={609.2}
          cy={1156.92}
          r={8.02}
        />
      </g>
      <g
        onClick={() => {
          selectc(12);
        }}>
        <image
          width={35}
          height={35}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3VJREFUeNrUmItT00AQxvPsAyil rfhWfPz/f5OKqICALQVa0ibnnvMd87Fe0mtHGc3MN+kjyf1ud293L1H0jx3xX3qGeWigmMTfjdLa gPEG8Akppc8OqBKVODsxYCNctgaMA7DKRS06Z7jGDr6AlnReEmQjVBzomoQG74i2SF1RG9fZgQvR nHQjusXnxSqwLAAmA4wduCfaFfVFezj38F+KAS3ANXRJmuK3W4B7oVYBZZj9NgD2occ4DwC0BSsu AXQDiB+iM9F36BxgM7JWkIVizNi6aEc0Ej0XvRS9ED0DUB+wHQJy7rEDj0Wnom8Ab+G5EQV6xVbK GmByDDYExFvoNSw0BGyHgtpg5gWsMMVk+uTWSK3Ce6uvCaiDeHkiOhC9F70D3Ihg8pplXwBkBy7N Caag1Vix67Ka5Z3jIUO4xwK9Eb2CdXYRWxngY5UEDf5vU1qIADCrCXBTB8SxY4P2KeLHgj0i82dk GV/p4AQaUcBPEOgXAJvjv18WTmpWVgdBOILLXMz0KGaShjzGibQFa/cxoX08t6fi764M6Icw0BA3 D1QAJ4FlJ6EF0sUi6cPlW3BpyhxJTSLsAGCPAnNdGN+qbeM5XYqthKuGdpm70QHtUiZueQJ43e4g o8zPk/O6rG427Q0t4+sSYtUdxPqZPpfpolp785qHCfh8D4gbq5Lah4Unq64LYlTSLClb1wK5LLpA wrI544raB67Qm0CVVFYK6pHudZfaQhUunANmgqrtzaqBR0Uwc2pNuD+6g0o8M1mqaj0G1I1qGUyg ZSpVMsZoS64wyTLUQlP0L6c4TzCzECijLOP6o3OUDQfkysadhdKGDJsh93SpVW1Rdfe1wEZNrMAk LMCx6JPog+gQE53impITYdMWh5v6XLUakWeXwYHr4tDCnIiORB8B9BWuc2FgVgGZFfswnRoK6hRn 1E+fwTKHBPMZ7ayzzsqO0Q12i5tSAud4GMCVui1d0r0XGPwLdESu+i2gm4BcTpojmPn7JQZxLWyb ahyvKA7iE5zd4pjVpZAsYLnyzGfw/TG1EGyhiix0jcEnlDquaWV581kcuElMqdhu0yaxrVoIo5Kg 2xLNAFlQ2TCb7u1j1QXktItNVUtiFBSrDKmJodU79nQAaU0XwHutsuaFwx99HeN7FeNbFEZZ7UFe WMUBvc//ffwUYAAk1H1Hc4NW0wAAAABJRU5ErkJggg=="
          transform="translate(557.56 1139.174)"
          overflow="visible"
          opacity={0.15}
        />
        <circle
          className={isc(12)}
          cx={575.37}
          cy={1157.06}
          r={10.92}
        />
        <circle
          className="dp6080a"
          cx={575.37}
          cy={1156.92}
          r={8.02}
        />
      </g>
      <circle
        className="st59"
        cx={917.49}
        cy={796.34}
        r={9.21}
      />
      <circle
        className="st59"
        cx={1211.49}
        cy={771.34}
        r={9.21}
      />
      <g
        onClick={() => {
          selectc(19);
        }}
        className="pointer">
        <image
          width={35}
          height={35}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2BJREFUeNrsWGlv00AU9Nqu06ZN 2iZQqoI4xP//S9yCAD3S3EnjLM9oFg2P5yMp/YKwNNrKtb2z846dTRT9v6ovd4936t71avyrhJhE rEZnECmwUWMjcmlDMgUSoHhnD2NMxCIiUGAtuMOYA7WkXAMijkjsCw6AfdxLFKEcRBaCObAgcp7Q WCFHYUkx+aHgGOgKjohUjPc2RGYiGAlugSnur/GcqVZVyGJMdgACfcET4LHgFCQzqBRBnRUmvxF8 F3wVfBNcgdgcpE1SaYk6rEyhyLngmeA5xjPBiaBNYYsoXDPBEEQ+EfGQbzM8l9cpxAncgjJnIPJa 8ErwFAp1QDhRIcsRmrGgR8/tqVzzRhWaCoVQtRGWCxApCL2EWsekjlVld8ixNsiEigyEQ+X90RIs hYI6HShRhOgFVLrAqg+NCuM+lBFSPONBdAkFV5TguaWQMwj1ocg5yJ1g5VkJGVaZe5TH5KH6xkbV mQpxuI5BoqiqR0YS1/WwkOhtIjNGtYWqG+N+EMPHRnVxqZ8CXdzLGpDRpHiBPSyuB6VbFNJfiuhw ZZi8A1W6+GBrCzIWqdBcOxj3jaKIYuPlDAS6wKGqlG0dAve1DAtrlYU+NnIoUftW6x5kNKmwOafK LZQq5FSFxEbFPOgVl/iYMvgd5+Hv5qop/rbz65BtDPuw1L1iBzJsS5ZA2Mt8lUJht55hZx6iV8zp A5sdCPEiZ/jeylpobKwiEBrBQtzg7xnZhqZKseJzLG6Ixc4wV162ufLGGOzDJbrqqWEh6pI8fK9q gUzoJ6mkxM46KtHQOzLlpZ3xridl1kTmWjAQfBC8h0e6wn624jRIGpwymFxC/scZxx1dFBNF5o3g neALlJqTzzYJOaM6uCxdzQljhUkmyJMi5J+JzFuoc0nq5FUGzdMEC3w0qBHuL/GxPrnBlCzsAv8f ISwDkChIfYTPnuhQ1Zl8Tm7dEqZI+GBJglmL6J1bZfIHGK9AdFHW29KKIzCTYoM1QuX1UH0dJHwE wmPqYdcgNqw4CjVSSJPSCl3DzxxhA2aF5nhmitBMsahGh0XXYJd2ytdkyJsWRutctkCurYA72sN8 VWPd5scGthCJshJceWt1ns+3+cFhF7OlYR2DfEnbeJDfh8o6u169j/6F64cAAwDOJX3ev6k3GQAA AABJRU5ErkJggg=="
          transform="translate(165.34 850.894)"
          overflow="visible"
          opacity={0.15}
        />
        <circle
          className={isc(19)}
          cx={183.07}
          cy={868.14}
          r={10.92}
        />
        <circle
          className="dp6111b"
          cx={183.07}
          cy={868.01}
          r={8.02}
        />
      </g>
      <g>
        <image
          width={157}
          height={130}
          xlinkHref="data:image/png;base64,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 vCKS0m8AAAAASUVORK5CYII="
          transform="translate(89.75 727.998)"
          overflow="visible"
          opacity={0.3}
        />
        <path
          className="st1"
          d="M147.35 736.39h-43.07c-3.45 0-6.28 2.82-6.28 6.28v92.26c0 3.45 2.82 6.28 6.28 6.28h51.6c1.23 0 2.42.42 3.36 1.2l.37.3c6.45 6.52 6.45 6.52 12.9-.15.97-.87 2.23-1.35 3.54-1.35h53.73c3.45 0 6.28-2.82 6.28-6.28v-92.26c0-3.45-2.82-6.28-6.28-6.28h-82.43z"
        />
        <text transform="translate(120.589 775.336)">
          <tspan
            x={0}
            y={0}
            className="st2 st63 st65">
            {"Nivel Estanque"}
          </tspan>
          <tspan
            x={-5.11}
            y={17}
            className="st2 st63 st65">
            {"Hidrox. de Sodio"}
          </tspan>
        </text>
        <g>
          <text
            transform="translate(174.342 821.655)"
            className="st66 st63 st67">
            {lit062}
          </text>
        </g>
        <text
          transform="translate(203.986 821.26)"
          className="st66 st68 st65">
          {"%"}
        </text>
      </g>
      <g
        onClick={() => {
          selectc(16);
        }}>
        <image
          width={35}
          height={35}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2JJREFUeNrMmAtz0lAQhclNoAUb qG21rVVnqv//L/nqKNZaWkt5hEDiZuasc1xuQog4ysyZdKDs/XJ2994NrdZ/9gp28F1fjNxc/xpQ UCGGKdPOgHRRJwqhCFcH6SuDVqIlrit6v/IV1YBxBNIWdUR7on383cbnAVwoFk1FiWiOa4L3Wpvc Cmq4EhJEV3QAxaIe3o8IaAmAiWgsesB1Klrg86wMKqiAcViog4X7okPRsegIGgCyg//PsGix+L3o VnQD3YkeRbMqqKgCKMLdx1j8uehUdIbrMSB7SJs6tMCiBcA30RfRE0CHiF8KFZXUjKapSM2J6EL0 WvRKdA64Q3zuS9kcqToBdJdqTetojrqqBArInSLIU9EL0RvRWwCdwrEDFLavqBdI54FJaV7SdVmV QyHuWt15KbqELpCqGP/TLmn7fU8XqnsLkqZNb2YNyBFQDKBzgGiq+lgsImdaFDQ0UljuvkcUfkJu rTmkndWGzQMAnQHkCJBdD4ztWkfp1zQpTFHs36nrEnbIeRxSoD61uC1gt8Uetocu0y3jGdUgN0Rg HXIGKEaQAQLWhbFuKVQPMfvkdNvGc54v80bYN90UNjyM9djR3V7jRWVAdnfWO+p5YJpOCBq7TfHW 3HY1T/TQM2a0GoLxOmszlSsZqhrPM1u8vDFtl+kck2LjSuqc0DUX5zlpRfF+A3OeL6U4/HR0mODc aQqV015kb3Jl47mSL00BU4wQPwCVNICyA9sMsUrjlTk0BcgtxLvqqmZN+Rwv4oxwoxMT79e+4+sC u2/Y9nem63xDvr25a9GV6IPoE2alsYUKa25oHdrIQk8z5GbA54P0nmDeA+gznJoAOvM5VOdJg13J jBvcnZqiEcG8A9AV3Hkgd1p1gPKSdl1CKWlBRfsIV4oTfSj6SDBFqr6ilmY0MeabZuoMC4zNrKzd N8LJPaB52QF4btwZYq4ewpm7bWfqnHKaAEALVOeZaxpLYhS8As2oQ28AcQtAfRxKbao2OZRTcdqO eUA6YkhHE0eD2BhQqjFNiKmpv60epbnb9BlN5+UutEePQQo+B8AUji3w/saNdZtne0cjBI8REXVg brotpSMiq7OhNpltnAG08zN3ZlYX5E9/HwpMSvmpw44WeZPAu/zha9dz0799/RRgACFwfBgyRrIe AAAAAElFTkSuQmCC"
          transform="translate(132.34 589.133)"
          overflow="visible"
          opacity={0.15}
        />
        <circle
          className={isc(16)}
          cx={150.07}
          cy={606.44}
          r={10.92}
        />
        <circle
          className="dp6101a"
          cx={150.07}
          cy={606.31}
          r={8.02}
        />
      </g>
      <g
        onClick={() => {
          selectc(17);
        }}>
        <image
          width={35}
          height={35}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2JJREFUeNrMmAtz0lAQhclNoAUb qG21rVVnqv//L/nqKNZaWkt5hEDiZuasc1xuQog4ysyZdKDs/XJ2994NrdZ/9gp28F1fjNxc/xpQ UCGGKdPOgHRRJwqhCFcH6SuDVqIlrit6v/IV1YBxBNIWdUR7on383cbnAVwoFk1FiWiOa4L3Wpvc Cmq4EhJEV3QAxaIe3o8IaAmAiWgsesB1Klrg86wMKqiAcViog4X7okPRsegIGgCyg//PsGix+L3o VnQD3YkeRbMqqKgCKMLdx1j8uehUdIbrMSB7SJs6tMCiBcA30RfRE0CHiF8KFZXUjKapSM2J6EL0 WvRKdA64Q3zuS9kcqToBdJdqTetojrqqBArInSLIU9EL0RvRWwCdwrEDFLavqBdI54FJaV7SdVmV QyHuWt15KbqELpCqGP/TLmn7fU8XqnsLkqZNb2YNyBFQDKBzgGiq+lgsImdaFDQ0UljuvkcUfkJu rTmkndWGzQMAnQHkCJBdD4ztWkfp1zQpTFHs36nrEnbIeRxSoD61uC1gt8Uetocu0y3jGdUgN0Rg HXIGKEaQAQLWhbFuKVQPMfvkdNvGc54v80bYN90UNjyM9djR3V7jRWVAdnfWO+p5YJpOCBq7TfHW 3HY1T/TQM2a0GoLxOmszlSsZqhrPM1u8vDFtl+kck2LjSuqc0DUX5zlpRfF+A3OeL6U4/HR0mODc aQqV015kb3Jl47mSL00BU4wQPwCVNICyA9sMsUrjlTk0BcgtxLvqqmZN+Rwv4oxwoxMT79e+4+sC u2/Y9nem63xDvr25a9GV6IPoE2alsYUKa25oHdrIQk8z5GbA54P0nmDeA+gznJoAOvM5VOdJg13J jBvcnZqiEcG8A9AV3Hkgd1p1gPKSdl1CKWlBRfsIV4oTfSj6SDBFqr6ilmY0MeabZuoMC4zNrKzd N8LJPaB52QF4btwZYq4ewpm7bWfqnHKaAEALVOeZaxpLYhS8As2oQ28AcQtAfRxKbao2OZRTcdqO eUA6YkhHE0eD2BhQqjFNiKmpv60epbnb9BlN5+UutEePQQo+B8AUji3w/saNdZtne0cjBI8REXVg brotpSMiq7OhNpltnAG08zN3ZlYX5E9/HwpMSvmpw44WeZPAu/zha9dz0799/RRgACFwfBgyRrIe AAAAAElFTkSuQmCC"
          transform="translate(165.34 589.133)"
          overflow="visible"
          opacity={0.15}
        />
        <circle
          className={isc(17)}
          cx={183.07}
          cy={606.44}
          r={10.92}
        />
        <circle
          className="dp6101b"
          cx={183.07}
          cy={606.31}
          r={8.02}
        />
      </g>
      <g>
        <image
          width={157}
          height={131}
          xlinkHref="data:image/png;base64,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 lwAAAABJRU5ErkJggg=="
          transform="translate(88.75 466.998)"
          overflow="visible"
          opacity={0.3}
        />
        <path
          className="st1"
          d="M146.88 475.69h-43.07c-3.45 0-6.28 2.82-6.28 6.28v93.26c0 3.45 2.82 6.28 6.28 6.28h51.6c1.23 0 2.42.42 3.36 1.2l.37.3c6.45 6.52 6.45 6.52 12.9-.15.97-.87 2.23-1.35 3.54-1.35h53.73c3.45 0 6.28-2.82 6.28-6.28v-92.26c0-3.45-2.82-7.28-6.28-7.28h-82.43z"
        />
        <text transform="translate(120.126 515.638)">
          <tspan
            x={0}
            y={0}
            className="st2 st63 st65">
            {"Nivel Estanque"}
          </tspan>
          <tspan
            x={7.75}
            y={17}
            className="st2 st63 st65">
            {"Ac. Sulf\xFArico"}
          </tspan>
        </text>
        <g>
          <text
            transform="translate(173.878 561.957)"
            className="st66 st63 st67">
            {lit061}
          </text>
        </g>
        <text
          transform="translate(203.523 561.562)"
          className="st66 st68 st65">
          {"%"}
        </text>
      </g>
      <g>
        <text
          transform="translate(681.413 1049.513)"
          className="st66 st63 st64">
          {"Estanque MBR - TK003"}
        </text>
      </g>
      <g>
        <text
          transform="translate(314.772 1049.513)"
          className="st66 st63 st64">
          {"Estanque Aireador - TK002"}
        </text>
      </g>
      <g>
        <path
          className="st26"
          d="M146.57 1182.05h15.25c.97 0 1.75.78 1.75 1.75v39.25"
        />
        <path
          onClick={() => {
            selectc(14);
          }}
          className={isd(14)}
          d="M157.07 1191.05h-14c-.83 0-1.5-.67-1.5-1.5v-14c0-.83.67-1.5 1.5-1.5h14c.83 0 1.5.67 1.5 1.5v14c0 .83-.67 1.5-1.5 1.5z"
        />
        <path
          className="st26"
          d="M186.57 1182.05h-15.25c-.97 0-1.75.78-1.75 1.75v39.25"
        />
        <path
          onClick={() => {
            selectc(15);
          }}
          className={isd(15)}
          d="M176.07 1191.05h14c.83 0 1.5-.67 1.5-1.5v-14c0-.83-.67-1.5-1.5-1.5h-14c-.83 0-1.5.67-1.5 1.5v14c0 .83.67 1.5 1.5 1.5z"
        />
        <path
          className="st26"
          d="M137.5 1206.06h15.25c.97 0 1.75.78 1.75 1.75v39.25"
        />
        <path
          className="st10"
          d="M146 1211.06h-10c-.83 0-1.5-.67-1.5-1.5v-7c0-.83.67-1.5 1.5-1.5h10c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5z"
        />
        <path
          className="st11"
          d="M143.15 1222.74H190V1262.79H143.15z"
        />
        <path
          className="st26"
          d="M189.92 1216.05v45.24c0 .71-.36 1.31-.81 1.31h-45.08c-.45 0-.81-.6-.81-1.31v-45.24"
        />
        <g
          onClick={() => {
            selectc(14);
          }}>
          <image
            width={35}
            height={35}
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA19JREFUeNrMmOlO20AUhTO2iSEh gbIUVCr6o+//SrSVUEsToDT7Ynt6XZ1Bpzczjh1BRaQjI2OPv9xtjtNqvbGPeYU17P8GMnQ06pyl o90F0DS8tlSkZBRQqULJ1gUzDUFiUSLaE7VxjPG/Fh6ei9aiFY4ZztUCMzVgHEj58FR0IOpA+wCL cX0OkIVoBs0VXFEFZbbAuIikAOiJjkTHOPYAleCeDDBj0W/SGHBLgAWjlWyJTIKI9EUnojPRe9G5 6BRgHUSvhYfNAPEgGooG+PuRwNaI5kbRJxUwe4A5AsSV6KPog+gCQP1AhEYA+Cn6IfqOtQZYf4Y0 ZnUjFKM2DhGNa9Fn0SeAnQOmE6ihGa45Q2T7AEoAZD1d6AXSqXonugSIA7rAeQeTqC7LUFtOh5RW Q9e4zltz6pJAIadY7BQpuqZ0lee6BKPnUBv3p0hnSs/JUdhzKvCc6ukfoKrauUKkTgCaAtwEtg6e We66nDrwCce56rqNCDHQMYAuUQ/HFBkehqFByrAuMmN03J3oHt0YI4V/aysKRKiDCJ1Se9eBqerW HmrvhNbjSD9HhL+V664OOsMNwC7VQtRw/4vUlO961tsACn2jPm7e993ccFOOqeDbqr5aPqCW2rf0 zbvA6C/r1o+VUwhGyFeUJtBNL2HsNtaMVLtashA5DbC8iacJfKxS4TNxGshN0SXZh0XVZtgAxK29 pvU2rEikHsJ70QiaeKCawjjT5qb0IuSPOEIF7S1zmqjl8Jpisa0GKwDjIj7Gl/ROaV+XMdCIfMwT IlUXSsNMsYbzSI9qvef6jCtmxh7mj8+u+kaAIciC0j8BQOmJvom+iG6xdYx1KcQ1fXRKht6ohzOE pe7kvauE+Sq6AVRp2n4hExlHO67w2L45pI0Vj4cMEeGmuMfDHYyLzgMit9Lpj7cYf35wpl5vVvSG 4d4yptQMQxUZTtVI1WOlhXUXuPw7l7ekQmdPzW7Q4r45UjIA1C2OznIsdKq2eWpLBtx6zPsdbMQR NuI26q6glHFXDQE4obrxdqppuEsfwCMfwg10yEYYgl9S+kb0+rPaNjbqbJhRwAXs0+t0pIreTeUF juyf7a5vrlXv9+yXo8DE15tzoQv4JX6OqWNNbIVe9QcrU7HGTr8NvcnPHwEGAMHCfcAJQXnCAAAA AElFTkSuQmCC"
            transform="translate(132.34 1142.648)"
            overflow="visible"
            opacity={0.15}
          />
          <circle
            className={isc(14)}
            cx={150.07}
            cy={1160.24}
            r={10.92}
          />
          <circle
            className="dp6090a"
            cx={150.07}
            cy={1160.1}
            r={8.02}
          />
        </g>
        <g
          onClick={() => {
            selectc(15);
          }}>
          <image
            width={35}
            height={35}
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA19JREFUeNrMmOlO20AUhTO2iSEh gbIUVCr6o+//SrSVUEsToDT7Ynt6XZ1Bpzczjh1BRaQjI2OPv9xtjtNqvbGPeYU17P8GMnQ06pyl o90F0DS8tlSkZBRQqULJ1gUzDUFiUSLaE7VxjPG/Fh6ei9aiFY4ZztUCMzVgHEj58FR0IOpA+wCL cX0OkIVoBs0VXFEFZbbAuIikAOiJjkTHOPYAleCeDDBj0W/SGHBLgAWjlWyJTIKI9EUnojPRe9G5 6BRgHUSvhYfNAPEgGooG+PuRwNaI5kbRJxUwe4A5AsSV6KPog+gCQP1AhEYA+Cn6IfqOtQZYf4Y0 ZnUjFKM2DhGNa9Fn0SeAnQOmE6ihGa45Q2T7AEoAZD1d6AXSqXonugSIA7rAeQeTqC7LUFtOh5RW Q9e4zltz6pJAIadY7BQpuqZ0lee6BKPnUBv3p0hnSs/JUdhzKvCc6ukfoKrauUKkTgCaAtwEtg6e We66nDrwCce56rqNCDHQMYAuUQ/HFBkehqFByrAuMmN03J3oHt0YI4V/aysKRKiDCJ1Se9eBqerW HmrvhNbjSD9HhL+V664OOsMNwC7VQtRw/4vUlO961tsACn2jPm7e993ccFOOqeDbqr5aPqCW2rf0 zbvA6C/r1o+VUwhGyFeUJtBNL2HsNtaMVLtashA5DbC8iacJfKxS4TNxGshN0SXZh0XVZtgAxK29 pvU2rEikHsJ70QiaeKCawjjT5qb0IuSPOEIF7S1zmqjl8Jpisa0GKwDjIj7Gl/ROaV+XMdCIfMwT IlUXSsNMsYbzSI9qvef6jCtmxh7mj8+u+kaAIciC0j8BQOmJvom+iG6xdYx1KcQ1fXRKht6ohzOE pe7kvauE+Sq6AVRp2n4hExlHO67w2L45pI0Vj4cMEeGmuMfDHYyLzgMit9Lpj7cYf35wpl5vVvSG 4d4yptQMQxUZTtVI1WOlhXUXuPw7l7ekQmdPzW7Q4r45UjIA1C2OznIsdKq2eWpLBtx6zPsdbMQR NuI26q6glHFXDQE4obrxdqppuEsfwCMfwg10yEYYgl9S+kb0+rPaNjbqbJhRwAXs0+t0pIreTeUF juyf7a5vrlXv9+yXo8DE15tzoQv4JX6OqWNNbIVe9QcrU7HGTr8NvcnPHwEGAMHCfcAJQXnCAAAA AElFTkSuQmCC"
            transform="translate(165.34 1142.648)"
            overflow="visible"
            opacity={0.15}
          />
          <circle
            className={isc(15)}
            cx={183.07}
            cy={1160.24}
            r={10.92}
          />
          <circle
            className="dp6090b"
            cx={183.07}
            cy={1160.1}
            r={8.02}
          />
        </g>
        <g>
          <text
            transform="translate(145.522 1281.255)"
            className="st66 st63 st64">
            {"Est. Urea"}
          </text>
        </g>
      </g>
      <g>
        <path
          className="st26"
          d="M146.57 1034.46h15.25c.97 0 1.75.78 1.75 1.75v39.25"
        />
        <path
          className={isd(10)}
          onClick={() => {
            selectc(10);
          }}
          d="M157.07 1043.46h-14c-.83 0-1.5-.67-1.5-1.5v-14c0-.83.67-1.5 1.5-1.5h14c.83 0 1.5.67 1.5 1.5v14c0 .82-.67 1.5-1.5 1.5z"
        />
        <path
          className="st26"
          d="M186.57 1034.46h-15.25c-.97 0-1.75.78-1.75 1.75v39.25"
        />
        <path
          className={isd(11)}
          onClick={() => {
            selectc(11);
          }}
          d="M176.07 1043.46h14c.83 0 1.5-.67 1.5-1.5v-14c0-.83-.67-1.5-1.5-1.5h-14c-.83 0-1.5.67-1.5 1.5v14c0 .82.67 1.5 1.5 1.5z"
        />
        <path
          className="st11"
          d="M143.15 1055.15H190V1095.2H143.15z"
        />
        <path
          className="st26"
          d="M189.92 1048.46v45.24c0 .71-.36 1.31-.81 1.31h-45.08c-.45 0-.81-.6-.81-1.31v-45.24"
        />
        <g
          onClick={() => {
            selectc(10);
          }}>
          <image
            width={35}
            height={35}
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4JJREFUeNrMWIlS2zAUtHyQhJQG WlqgF/T4/08qPdNSjgZyO7HV586qs7zIQSHQITM79ji2vNr33urJUfTAfuaenrf/k5Ah+MawnqO9 a0JMIgYSDzlHoMSxwHkZSsysQKYikBE2cC2hcSwRmQlyHGe4VtxEygQQcWo0BE1BW7AJVNdS3BMp MmPBiDAhYrVqpQFkMhB5JNgW7ACPQcopFSE0c8FUMBD0BL+BK8EQqs3rkn8ZIUememlHsCvYFxwI nguegGSDwlaSOpeCU8GJ4IfgF+7r4x1eUmkAmW0QeSU4xHEfKmmFLAhNociZ4CnCzPdFRCqIUIIw VWHZE7wRvBe8BaFd/NdckkNDkN7CfRnus1SJC9WXLlGnjdm9FLwTfIBCewjhJr3E5Zx7UYHnW5T4 hnJshmOpbMJLKCV1qlx5LTiCSgeYdRtkEuVDlpI7w1gpKeMS3lVdTl61oJBTJ8XMOiBUKfQC5ztI ZM4H47ERo+DITJDUPVV1zqOuJRmr00HiHiFclUrPkA+NGjI3ObvLrzFIaRv4q25ckz8tvHwHVbaF axk9YwIc3inegLId2IVTuqmc3ksoJSPsEJkNT85EK5JqYdw2Vd61MWNP7BNyZ1cltyHjs5INwFXe wphxzSKa0gKa3gEZ41kbE7KMyEeoLi/Mms1cXX/kXWBj9aBV5laoniZag5Srsjmt+gtOHXsMraD1 aOwxMHsLMs6hc4w3oXIvmYNPoRkeGGDF7sNZ85AGawmZKXzHedDI59Q6hwrcNISbnmLF7uHaVA8Q GKYJ9UfnggsQm+gVP6nxDVei3CE2qfzjG5Kd83ACRarJfRMcC76gT7rC//+UT5ZUVazKn72D/UtX D+ehW7sqlbuCT4KPIHYO1XJWPFmhp0496ljVQpTU3I+QgxWZ71ClUucz1LmkkEUhhHR7aZQKM9Xb 5FSZfeRJ1bZ+hTLHOHbx3xDPlssatEjF3lB4Csy6j6bdLZCb1AGUIDagouiCVBe99ZkiE9Tkl9S/ XFI/M6Lm3e08HClHyCXxBe77iRCdYSIDqlYb0lNHKiwRnY8w8xN0AVtEKFNVxVugHoiMlXXYVXeu 2gZcC9GmbqBFIbPUoo4QmiGI5CEbxVW20jH1yHpLnXn65pwwV4Zq7+LrBxMzZAG8v9cLcxlKZN3P Mb4+x3haC7vq96J1P1jdy0erB/X7I8AAsb96OVpi488AAAAASUVORK5CYII="
            transform="translate(132.5 994.8)"
            overflow="visible"
            opacity={0.15}
          />
          <circle
            className={isc(10)}
            cx={150.07}
            cy={1011.96}
            r={10.92}
          />
          <circle
            className="dp6071a"
            cx={150.07}
            cy={1011.82}
            r={8.02}
          />
        </g>
        <g
          onClick={() => {
            selectc(11);
          }}>
          <image
            width={35}
            height={35}
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4JJREFUeNrMWIlS2zAUtHyQhJQG WlqgF/T4/08qPdNSjgZyO7HV586qs7zIQSHQITM79ji2vNr33urJUfTAfuaenrf/k5Ah+MawnqO9 a0JMIgYSDzlHoMSxwHkZSsysQKYikBE2cC2hcSwRmQlyHGe4VtxEygQQcWo0BE1BW7AJVNdS3BMp MmPBiDAhYrVqpQFkMhB5JNgW7ACPQcopFSE0c8FUMBD0BL+BK8EQqs3rkn8ZIUememlHsCvYFxwI nguegGSDwlaSOpeCU8GJ4IfgF+7r4x1eUmkAmW0QeSU4xHEfKmmFLAhNociZ4CnCzPdFRCqIUIIw VWHZE7wRvBe8BaFd/NdckkNDkN7CfRnus1SJC9WXLlGnjdm9FLwTfIBCewjhJr3E5Zx7UYHnW5T4 hnJshmOpbMJLKCV1qlx5LTiCSgeYdRtkEuVDlpI7w1gpKeMS3lVdTl61oJBTJ8XMOiBUKfQC5ztI ZM4H47ERo+DITJDUPVV1zqOuJRmr00HiHiFclUrPkA+NGjI3ObvLrzFIaRv4q25ckz8tvHwHVbaF axk9YwIc3inegLId2IVTuqmc3ksoJSPsEJkNT85EK5JqYdw2Vd61MWNP7BNyZ1cltyHjs5INwFXe wphxzSKa0gKa3gEZ41kbE7KMyEeoLi/Mms1cXX/kXWBj9aBV5laoniZag5Srsjmt+gtOHXsMraD1 aOwxMHsLMs6hc4w3oXIvmYNPoRkeGGDF7sNZ85AGawmZKXzHedDI59Q6hwrcNISbnmLF7uHaVA8Q GKYJ9UfnggsQm+gVP6nxDVei3CE2qfzjG5Kd83ACRarJfRMcC76gT7rC//+UT5ZUVazKn72D/UtX D+ehW7sqlbuCT4KPIHYO1XJWPFmhp0496ljVQpTU3I+QgxWZ71ClUucz1LmkkEUhhHR7aZQKM9Xb 5FSZfeRJ1bZ+hTLHOHbx3xDPlssatEjF3lB4Csy6j6bdLZCb1AGUIDagouiCVBe99ZkiE9Tkl9S/ XFI/M6Lm3e08HClHyCXxBe77iRCdYSIDqlYb0lNHKiwRnY8w8xN0AVtEKFNVxVugHoiMlXXYVXeu 2gZcC9GmbqBFIbPUoo4QmiGI5CEbxVW20jH1yHpLnXn65pwwV4Zq7+LrBxMzZAG8v9cLcxlKZN3P Mb4+x3haC7vq96J1P1jdy0erB/X7I8AAsb96OVpi488AAAAASUVORK5CYII="
            transform="translate(165.5 994.8)"
            overflow="visible"
            opacity={0.15}
          />
          <circle
            className={isc(11)}
            cx={183.07}
            cy={1011.96}
            r={10.92}
          />
          <circle
            className="dp6071b"
            cx={183.07}
            cy={1011.82}
            r={8.02}
          />
        </g>
        <g>
          <text transform="translate(142.762 1114.048)">
            <tspan
              x={0}
              y={0}
              className="st66 st63 st64">
              {"Est. \xC1cido"}
            </tspan>
            <tspan
              x={1.34}
              y={13}
              className="st66 st63 st64">
              {"Fosf\xF3rico"}
            </tspan>
          </text>
        </g>
      </g>
      <g>
        <text transform="translate(103.79 391.368)">
          <tspan
            x={0}
            y={0}
            className="st66 st63 st64">
            {"Estanque Acumulaci\xF3n"}
          </tspan>
          <tspan
            x={41.03}
            y={13}
            className="st66 st63 st64">
            {"TK-310"}
          </tspan>
        </text>
      </g>
      <g>
        <text
          transform="translate(544.354 515.753)"
          className="st66 st63 st64">
          {"Estanque Acondicionador - TK-001"}
        </text>
      </g>
      <path
        className="st39"
        d="M1160.5 1117.15v162.84c0 6.6-5.4 12-12 12H805.26c-6.6 0-12-5.4-12-12v-162.84c0-6.6 5.4-12 12-12h343.24c6.6 0 12 5.4 12 12z"
      />
      <path
        className="st38"
        d="M964.53 1158.55L824.52 1158.55"
      />
      <g>
        <path
          className="st38"
          d="M891.25 1120.55h-60.9a5.82 5.82 0 00-5.82 5.82v101.2c0 2.75 2.3 4.97 3.89 4.97h133.21c1.6 0 3.89-2.23 3.89-4.97v-101.2a5.82 5.82 0 00-5.82-5.82h-68.45z"
        />
      </g>
      <g
        onClick={() => {
          selectc(28);
        }}>
        <path
          className={isd(28)}
          d="M876.68 1148.55h-14.75c-.9 0-1.62-.73-1.62-1.62v-14.75c0-.9.73-1.62 1.62-1.62h14.75c.9 0 1.62.73 1.62 1.62v14.75c.01.89-.72 1.62-1.62 1.62zM861.48 1152.43l7.89 4.62c.51.3.51 1.04 0 1.34l-7.89 4.62a.778.778 0 01-1.17-.67v-9.25c0-.59.65-.96 1.17-.66z"
        />
        <path
          className={isd(28)}
          d="M877.14 1163.03l-7.89-4.62a.778.778 0 010-1.34l7.89-4.62c.52-.3 1.17.07 1.17.67v9.25c0 .59-.65.96-1.17.66z"
        />
        <path
          className={isdd(28)}
          d="M869.31 1147.55L869.31 1157.55"
        />
        <path
          className="st46"
          d="M860.31 1139.55L878.31 1139.55"
        />
        <path
          className="st46"
          d="M869.31 1140.55L869.31 1148.55"
        />
      </g>
      <g
        onClick={() => {
          selectc(26);
        }}>
        <path
          className={isd(26)}
          d="M876.68 1222.55h-14.75c-.9 0-1.62-.73-1.62-1.62v-14.75c0-.9.73-1.62 1.62-1.62h14.75c.9 0 1.62.73 1.62 1.62v14.75c.01.89-.72 1.62-1.62 1.62zM861.48 1226.43l7.89 4.62c.51.3.51 1.04 0 1.34l-7.89 4.62a.778.778 0 01-1.17-.67v-9.25c0-.59.65-.96 1.17-.66z"
        />
        <path
          className={isd(26)}
          d="M877.14 1237.03l-7.89-4.62a.778.778 0 010-1.34l7.89-4.62c.52-.3 1.17.07 1.17.67v9.25c0 .59-.65.96-1.17.66z"
        />
        <path
          className={isdd(26)}
          d="M869.31 1221.55L869.31 1231.55"
        />
        <path
          className="st46"
          d="M860.31 1213.55L878.31 1213.55"
        />
        <path
          className="st46"
          d="M869.31 1214.55L869.31 1222.55"
        />
      </g>
      <g
        onClick={() => {
          selectc(27);
        }}>
        <path
          className={isd(27)}
          d="M942.68 1222.55h-14.75c-.9 0-1.62-.73-1.62-1.62v-14.75c0-.9.73-1.62 1.62-1.62h14.75c.9 0 1.62.73 1.62 1.62v14.75c.01.89-.72 1.62-1.62 1.62zM927.48 1226.43l7.89 4.62c.51.3.51 1.04 0 1.34l-7.89 4.62a.778.778 0 01-1.17-.67v-9.25c0-.59.65-.96 1.17-.66z"
        />
        <path
          className={isd(27)}
          d="M943.14 1237.03l-7.89-4.62a.778.778 0 010-1.34l7.89-4.62c.52-.3 1.17.07 1.17.67v9.25c0 .59-.65.96-1.17.66z"
        />
        <path
          className={isdd(27)}
          d="M935.31 1221.55L935.31 1231.55"
        />
        <path
          className="st46"
          d="M926.31 1213.55L944.31 1213.55"
        />
        <path
          className="st46"
          d="M935.31 1214.55L935.31 1222.55"
        />
      </g>
      <path
        className="st38"
        d="M1069.21 1133.99L1069.21 1144.09"
      />
      <path
        className="st38"
        d="M892.04 1232.55L892.04 1247.31"
      />
      <path
        className="st38"
        d="M837.31 1158.55L856.31 1158.55"
      />
      <g
        onClick={() => {
          selectc(29);
        }}>
        <path
          className={isd(29)}
          d="M927.94 1148.55h14.75c.9 0 1.62-.73 1.62-1.62v-14.75c0-.9-.73-1.62-1.62-1.62h-14.75c-.9 0-1.62.73-1.62 1.62v14.75c-.01.89.72 1.62 1.62 1.62zM943.14 1152.43l-7.89 4.62a.778.778 0 000 1.34l7.89 4.62c.52.3 1.17-.07 1.17-.67v-9.25c0-.59-.65-.96-1.17-.66z"
        />
        <path
          className={isd(29)}
          d="M927.48 1163.03l7.89-4.62c.51-.3.51-1.04 0-1.34l-7.89-4.62a.778.778 0 00-1.17.67v9.25c0 .59.65.96 1.17.66z"
        />
        <path
          className={isdd(29)}
          d="M935.31 1147.55L935.31 1157.55"
        />
        <path
          className="st46"
          d="M944.31 1139.55L926.31 1139.55"
        />
        <path
          className="st46"
          d="M935.31 1140.55L935.31 1148.55"
        />
      </g>
      <path
        className="st38"
        d="M892.31 1157.55L892.31 1121.55"
      />
      <g
        onClick={() => {
          selectc(22);
        }}>
        <path
          className={isd(22)}
          d="M1049.48 1225.36h-21c-.83 0-1.5-.67-1.5-1.5v-4c0-.83.67-1.5 1.5-1.5h21c.83 0 1.5.67 1.5 1.5v4c0 .83-.68 1.5-1.5 1.5zM1050.79 1213.98h-25.12c-.79 0-1.44-.64-1.44-1.44v-16.62c0-.79.64-1.44 1.44-1.44h25.12c.79 0 1.44.64 1.44 1.44v16.62c0 .8-.65 1.44-1.44 1.44z"
        />
        <path
          className="st46"
          d="M1027.73 1199.23L1048.73 1199.23"
        />
        <path
          className="st46"
          d="M1027.73 1204.23L1048.73 1204.23"
        />
        <path
          className="st46"
          d="M1027.73 1209.23L1048.73 1209.23"
        />
        <g>
          <path
            className={isd(22)}
            d="M1014.48 1216.86v-26.5c0-.83.67-1.5 1.5-1.5h9c.83 0 1.5.67 1.5 1.5v26.5c0 .83-.67 1.5-1.5 1.5h-9c-.83 0-1.5-.67-1.5-1.5z"
          />
        </g>
        <path
          className={isd(22)}
          d="M1046.98 1220.36L1030.98 1220.36 1032.98 1213.36 1044.98 1213.36z"
        />
      </g>
      <g
        onClick={() => {
          selectc(23);
        }}>
        <path
          className={isd(23)}
          d="M1122.48 1225.36h-21c-.83 0-1.5-.67-1.5-1.5v-4c0-.83.67-1.5 1.5-1.5h21c.83 0 1.5.67 1.5 1.5v4c0 .83-.68 1.5-1.5 1.5zM1123.79 1213.98h-25.12c-.79 0-1.44-.64-1.44-1.44v-16.62c0-.79.64-1.44 1.44-1.44h25.12c.79 0 1.44.64 1.44 1.44v16.62c0 .8-.65 1.44-1.44 1.44z"
        />
        <path
          className="st46"
          d="M1100.73 1199.23L1121.73 1199.23"
        />
        <path
          className="st46"
          d="M1100.73 1204.23L1121.73 1204.23"
        />
        <path
          className="st46"
          d="M1100.73 1209.23L1121.73 1209.23"
        />
        <g>
          <path
            className={isd(23)}
            d="M1087.48 1216.86v-26.5c0-.83.67-1.5 1.5-1.5h9c.83 0 1.5.67 1.5 1.5v26.5c0 .83-.67 1.5-1.5 1.5h-9c-.83 0-1.5-.67-1.5-1.5z"
          />
        </g>
        <path
          className={isd(23)}
          d="M1119.98 1220.36L1103.98 1220.36 1105.98 1213.36 1117.98 1213.36z"
        />
      </g>
      <path
        className="st38"
        d="M1069.21 1162.51L1069.21 1173.36"
      />
      <g
        onClick={() => {
          selectc(29);
        }}>
        <image
          width={35}
          height={35}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3RJREFUeNrMWIlu00AU9JnDCWkb EqBAQfz/T3GpVJCWpkma2+6zNM+aPtaOnRZEpJFjJ94dzzt21p73n338Z7jfjpEB/4QQE/APEGJi 2XMT8g0CQYijnuefFJPnxz2dZ3WVixoQUQIRENN3JrQDtsAe56lRsTEhVkMJtIGOoItji8bJJ14L VoIlsAaUXGUYowoyGhYl0gNeEHogFuO+fNJ7wVwwE9wBcyLHamV1CDGZ/OkTwUBwJhgC+fcTkErw v/yzAaGcxG/BRHAN3ILYCsSdpKKKMLWgQD75WPAGeCV4KTgV9EsUygndCH4Kroh0SIXkJOVSSHOm AxVyAh8EF4J3gtdQaYCJ2phIcyhXYAFF9H9djOmXVKBTIatOH0q8FXwUfBK8F4xANKGE5irbgtTA oaD+vjOkCpWiEnW6GHAEQhfAOUJoyfg0oVahVmCM3/fIsSUIbxykCkJWnQQ5MgaJc4RuiKduUwi4 W2sIItM496iwOfJrhlzTqitUsiELKZmV0BhKneJ6x4TJN2NkhqSGSfNKq26Ka6pUESIbrjYRGpoE bpkn9yvaRoBwdaHqGXJSK9RVeY8G9mmQBD1mAPQoTEHNNTAwFdvHWLZ/hSyMK2TamRPqxFaZJou3 7fZ9Cn1MCvmeyQPfDBBTlUT2xoYugUl1cHRV6aMc8krsRVNVDq2NoaMK/1DI2oKswscc4wYz8kl6 dHqlwGE7U/Iw3FHTJ5BJySOtUepbWvkzV8j4xg15Gu6qtZ2fcY66nMyBBc4toSwwYdKbl+RptKtu HM6vToh2RGYKWzKlTs0PWpR9RoS0xXNXPUH5cxMLDph8Xmhnxh+pN9oYF1nYBt9UQ4SybJWUqa08 m5xM5g5ELgVfgR8guCBflDGhqp1FZBA4FtPMFIOGfQZFlMwXwXfBL4RtVabQoZJ2reqWwBYhWJNr nECNb4LPIHUFde6tOnbp0IucR6ExX+qZR8YJ2m3QsiRUlWRcBo3jvzTXd/Tk17Rix6T0nnz1LSl0 CTIThHHtMmdlnjolE+4ZdaxXriKkRl8r6wZkVmXqVO3LUkc70Imm2E24zFpqjP6M9mUL2jCmZf3s 0KIZODaMHWoFselNTF53sCuzc02rmqvfYKW2bSC05sqshUeth095+1GnUzd++3HM+yGvplH7q++H jrn3qLdoDwIMAMA1lH6b93nIAAAAAElFTkSuQmCC"
          transform="translate(894.34 1140.798)"
          overflow="visible"
          opacity={0.15}
        />
        <circle
          className={isc(29)}
          cx={911.73}
          cy={1158.55}
          r={10.92}
        />
        <circle
          className="vm1197"
          cx={911.73}
          cy={1158.42}
          r={8.02}
        />
      </g>
      <g
        onClick={() => {
          selectc(28);
        }}>
        <image
          width={35}
          height={35}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4VJREFUeNrMmAlv2kAQhb2LuUJO SumRnv//V/VI2yRtCRAug3FnqzfVy2gNNoqiWnoyh1l/OzOefUuS/GeHe4Tf2zEK6EmAnAHZBVQc AuhqRkLlRQ2c9X04trh5OOf0vqgK5mrAKEQqakIpxEAbaE2vFXAvWFoBRkECQEvUEXWh8LpN44Sb Z6KlaIHzCloTXFIG5SrApAAJACfQmehUdCw6AmyCmwaQmWhKCu/nAFybdFYCYpgQgZ7oXDQQPcf5 AmBHAE4QnTkgxqKR6Dd0J5rg+4yiVexLGaepjSj0RS9Fr6EXomcEZCN0D4BfohvRtegHrvP4vjAP QhSIC7iFm4VIvBK9E70XvQHcBWA7NE6OepkjGiOAnyLlTdMKVqY9lEYoxY1CBIaA+Cj6ILpEyvgm 9inLkOJzXKdpdfTEbWK1lEai08CPNVUanaC3SNcZYFqA8TRLvWGHnsQmxtYILkyB/4tSWhIdWzuX qJ0hZt0DTMN0a01FSq1Cr9kAZIp0TqnAc5syZ56sLkI9QESGeH1GMGlk6XA0W9vBV4AIT9yt6CfA FjyGTZnOSoH6KMq+qZlGyTrGrURhtIcdm7rq0VheG6Y3g3kDpAOcUM3wGlany3cB0UORt83kEgvk qaB1Ric414Upa7JNgLQikXYJDe4i3bmLmXRpvTrErji6T4PkY2n3O2aT0oruzcCPYeqi4/jIZ4Xx NVvbTWse1qxtSVGgItLU1mQbMuqqde0pj50bnxQzcA86rAKt0UVnWARnka5aB8pOcglFV3xvZpPT iq0WYmKgthWhbMSXmKBOchFbOmJAmVmt1cvMKIX7IsUwMY80xmcrO1Zqcr2lNWcCP3OLTn1s7ENZ xy5KJsdLxgiRykyE/g5YtrNgH92iBdNHFlN+cnJTh2OYtCvRZ9EX0XcAzk0ZPAAq23d5grBbnJx2 FmzwNUUjwHwTfQLQFSI1wbX5LsdoC/uOvAzbhwE5Ru7iBa5bko29BVCIzFeCWcVqMS3pGzkGdcZY 3WPWg4gDUKA11aDWzTV0g98vbKp2mfyCintJs2Y/0zcuIAY0RYR01zGiXceybNexa13yxgF0Ii7g iEy+TdkcEZ3izPuyTd19WczTNMg+tAFibQTXYLZj57o9ZOcaawdsH1LjBJxpAxtas/Kqe3t3oG3Y Z0esY3jUfz/2/UdU1XY82T9o+6xHreOPAAMAJUqjwGjo1OoAAAAASUVORK5CYII="
          transform="translate(826.34 1140.798)"
          overflow="visible"
          opacity={0.15}
        />
        <circle
          className={isc(28)}
          cx={844.22}
          cy={1158.55}
          r={10.92}
        />
        <circle
          className="vm1196"
          cx={844.22}
          cy={1158.42}
          r={8.02}
        />
      </g>
      <g
        onClick={() => {
          selectc(27);
        }}>
        <image
          width={35}
          height={35}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3RJREFUeNrMWIlu00AU9JnDCWkb EqBAQfz/T3GpVJCWpkma2+6zNM+aPtaOnRZEpJFjJ94dzzt21p73n338Z7jfjpEB/4QQE/APEGJi 2XMT8g0CQYijnuefFJPnxz2dZ3WVixoQUQIRENN3JrQDtsAe56lRsTEhVkMJtIGOoItji8bJJ14L VoIlsAaUXGUYowoyGhYl0gNeEHogFuO+fNJ7wVwwE9wBcyLHamV1CDGZ/OkTwUBwJhgC+fcTkErw v/yzAaGcxG/BRHAN3ILYCsSdpKKKMLWgQD75WPAGeCV4KTgV9EsUygndCH4Kroh0SIXkJOVSSHOm AxVyAh8EF4J3gtdQaYCJ2phIcyhXYAFF9H9djOmXVKBTIatOH0q8FXwUfBK8F4xANKGE5irbgtTA oaD+vjOkCpWiEnW6GHAEQhfAOUJoyfg0oVahVmCM3/fIsSUIbxykCkJWnQQ5MgaJc4RuiKduUwi4 W2sIItM496iwOfJrhlzTqitUsiELKZmV0BhKneJ6x4TJN2NkhqSGSfNKq26Ka6pUESIbrjYRGpoE bpkn9yvaRoBwdaHqGXJSK9RVeY8G9mmQBD1mAPQoTEHNNTAwFdvHWLZ/hSyMK2TamRPqxFaZJou3 7fZ9Cn1MCvmeyQPfDBBTlUT2xoYugUl1cHRV6aMc8krsRVNVDq2NoaMK/1DI2oKswscc4wYz8kl6 dHqlwGE7U/Iw3FHTJ5BJySOtUepbWvkzV8j4xg15Gu6qtZ2fcY66nMyBBc4toSwwYdKbl+RptKtu HM6vToh2RGYKWzKlTs0PWpR9RoS0xXNXPUH5cxMLDph8Xmhnxh+pN9oYF1nYBt9UQ4SybJWUqa08 m5xM5g5ELgVfgR8guCBflDGhqp1FZBA4FtPMFIOGfQZFlMwXwXfBL4RtVabQoZJ2reqWwBYhWJNr nECNb4LPIHUFde6tOnbp0IucR6ExX+qZR8YJ2m3QsiRUlWRcBo3jvzTXd/Tk17Rix6T0nnz1LSl0 CTIThHHtMmdlnjolE+4ZdaxXriKkRl8r6wZkVmXqVO3LUkc70Imm2E24zFpqjP6M9mUL2jCmZf3s 0KIZODaMHWoFselNTF53sCuzc02rmqvfYKW2bSC05sqshUeth095+1GnUzd++3HM+yGvplH7q++H jrn3qLdoDwIMAMA1lH6b93nIAAAAAElFTkSuQmCC"
          transform="translate(894.34 1212.798)"
          overflow="visible"
          opacity={0.15}
        />
        <circle
          className={isc(27)}
          cx={911.73}
          cy={1230.55}
          r={10.92}
        />
        <circle
          className="vm1195"
          cx={911.73}
          cy={1230.42}
          r={8.02}
        />
      </g>
      <g
        onClick={() => {
          selectc(26);
        }}>
        <image
          width={35}
          height={35}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4VJREFUeNrMmAlv2kAQhb2LuUJO SumRnv//V/VI2yRtCRAug3FnqzfVy2gNNoqiWnoyh1l/OzOefUuS/GeHe4Tf2zEK6EmAnAHZBVQc AuhqRkLlRQ2c9X04trh5OOf0vqgK5mrAKEQqakIpxEAbaE2vFXAvWFoBRkECQEvUEXWh8LpN44Sb Z6KlaIHzCloTXFIG5SrApAAJACfQmehUdCw6AmyCmwaQmWhKCu/nAFybdFYCYpgQgZ7oXDQQPcf5 AmBHAE4QnTkgxqKR6Dd0J5rg+4yiVexLGaepjSj0RS9Fr6EXomcEZCN0D4BfohvRtegHrvP4vjAP QhSIC7iFm4VIvBK9E70XvQHcBWA7NE6OepkjGiOAnyLlTdMKVqY9lEYoxY1CBIaA+Cj6ILpEyvgm 9inLkOJzXKdpdfTEbWK1lEai08CPNVUanaC3SNcZYFqA8TRLvWGHnsQmxtYILkyB/4tSWhIdWzuX qJ0hZt0DTMN0a01FSq1Cr9kAZIp0TqnAc5syZ56sLkI9QESGeH1GMGlk6XA0W9vBV4AIT9yt6CfA FjyGTZnOSoH6KMq+qZlGyTrGrURhtIcdm7rq0VheG6Y3g3kDpAOcUM3wGlany3cB0UORt83kEgvk qaB1Ric414Upa7JNgLQikXYJDe4i3bmLmXRpvTrErji6T4PkY2n3O2aT0oruzcCPYeqi4/jIZ4Xx NVvbTWse1qxtSVGgItLU1mQbMuqqde0pj50bnxQzcA86rAKt0UVnWARnka5aB8pOcglFV3xvZpPT iq0WYmKgthWhbMSXmKBOchFbOmJAmVmt1cvMKIX7IsUwMY80xmcrO1Zqcr2lNWcCP3OLTn1s7ENZ xy5KJsdLxgiRykyE/g5YtrNgH92iBdNHFlN+cnJTh2OYtCvRZ9EX0XcAzk0ZPAAq23d5grBbnJx2 FmzwNUUjwHwTfQLQFSI1wbX5LsdoC/uOvAzbhwE5Ru7iBa5bko29BVCIzFeCWcVqMS3pGzkGdcZY 3WPWg4gDUKA11aDWzTV0g98vbKp2mfyCintJs2Y/0zcuIAY0RYR01zGiXceybNexa13yxgF0Ii7g iEy+TdkcEZ3izPuyTd19WczTNMg+tAFibQTXYLZj57o9ZOcaawdsH1LjBJxpAxtas/Kqe3t3oG3Y Z0esY3jUfz/2/UdU1XY82T9o+6xHreOPAAMAJUqjwGjo1OoAAAAASUVORK5CYII="
          transform="translate(826.34 1212.798)"
          overflow="visible"
          opacity={0.15}
        />
        <circle
          className={isc(26)}
          cx={844.22}
          cy={1230.55}
          r={10.92}
        />
        <circle
          className="vm1194"
          cx={844.22}
          cy={1230.42}
          r={8.02}
        />
      </g>
      <g>
        <path
          className="st38"
          d="M1102.85 1190.36v-12.03c0-2.75-2.07-4.97-4.63-4.97h-57.74c-2.56 0-4.63 2.23-4.63 4.97v12.03"
        />
      </g>
      <g>
        <path
          className="st38"
          d="M657.31 1069.06L657.31 1139.55"
        />
      </g>
      <g>
        <path
          className="st10"
          d="M474.33 1383.7c-17.16 0-31.16-4.63-32.21-10.53h-.11v52.74c0 3.8 12.09 10.9 21.48 15.85a23.262 23.262 0 0021.67 0c9.39-4.95 21.48-12.05 21.48-15.85v-52.74h-.11c-1.04 5.9-15.04 10.53-32.2 10.53z"
        />
        <path
          className="st2"
          d="M474.33 1383.7c17.16 0 31.16-4.63 32.21-10.53.11-.21.11-.53.11-.74 0-6.21-14.42-11.26-32.32-11.26-17.89 0-32.32 5.05-32.32 11.26 0 .21 0 .53.11.74 1.05 5.9 15.05 10.53 32.21 10.53z"
        />
      </g>
      <g>
        <path
          className="st38"
          d="M796.52 1068.17v13.32c0 2.58 2.1 4.68 4.68 4.68h86.84a4.2 4.2 0 014.2 4.2v31.18"
        />
      </g>
      <g>
        <text transform="translate(138.964 971.216)">
          <tspan
            x={0}
            y={0}
            className="st66 st63 st64">
            {"Est. Hidrox."}
          </tspan>
          <tspan
            x={6.05}
            y={13}
            className="st66 st63 st64">
            {"de Sodio"}
          </tspan>
        </text>
      </g>
      <g>
        <text transform="translate(152.745 708.39)">
          <tspan
            x={0}
            y={0}
            className="st66 st63 st64">
            {"\xC1cido"}
          </tspan>
          <tspan
            x={-7.88}
            y={13}
            className="st66 st63 st64">
            {"Sulf\xFArico"}
          </tspan>
        </text>
      </g>
      <g
        onClick={() => {
          selectc(24);
        }}>
        <image
          width={34}
          height={35}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAkCAYAAAAD3IPhAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA15JREFUeNrUmAtv0zAUhWMny9qu K7DS8RigCf7/XwIECNjYurKtjzWpw7V0jM6unEc7TYJKR83axv5878318ZLkH3qZR7yvekwYQ++s 8FlFEKzOYFlHiKBUZHGfhYyCcKINyXWNVltkLMkD5NC+aA+fGYqMn7wUrUV3eC8IyjUBmZZopJjQ T94XHZD6AErxWwcQDzEnLUQrQJVNQFkDTIiEn/RQ9ER0JHomeioainoAMlj9GpP/Fs1EU9GV6Bpg KwBtYkBZTWpSgAwx+UR0LHqJ67FoVAMzB8CF6Aw6F10Cckm1VTXBGMDkSIWPxInoregNricAPED6 OE0FJrvG5BNEcUBzhUIvusBkWLEf5JXoVPRB9A5/HyFtoYgtwXCqjpDaIX6bUIFvKDJVDMZQeg6Q iteAeY/ITADSU8XLKy5x/wD1luP7O0RtieuSFhCFCU/OCBOfAMJDvUC0eioiRvWRDN/v0fg+Jbei G6TwVgFVDGOol/QR3mOkxRftc3w2IJBYazA0VviNw1N0jcL+hfc5UrrRMLpewlM0phrREWnr2Ami PMBCxlBYVK7HspEV7VFvOcSN+x1B6lpEaJiH9BRmam/7C8OpSjHxfqTt77IRWzVeXrO33YPR+1FK MpFiTbbYZC1tLbYuwrZhhzYPgOhiPVphqgbt+qoaxm6ESZQn0dt+tSOIU/7GtcEwRPAka2pMbseo 6DFr/Y2NuLQC3XGB1r2i5uS2iI4eb0ljrpWNqGKR2ZA5mpEXWagBqi1AVmj/YbwbABV6cVlkk1vh hkv4kDE6ck7wac2WoCPMduIcmtHi7sGkDT0h1vh0f9CnAke1scDE3lx9FX2GfsABLvHbKEysN9jI xserd5TejUrLlEA+ij7h+hyRv9P2M23pC06pJBWkNSDmsJYXiMAXAvHXP8l6lm1Oz5ERuqEIlQj7 FSwFu7geFuWo3qaY2AN9E31HlK4wTtHFAyeqkAPgWoV+DKM1In/rsOIZCvaMinZKESnqWoRp2W35 uDKkI8sI1yN8lykTFY4ps4ZjSmeY2EEuR0r6pGCSUgwenqJwgOOmWVIZVLse/C1BpfSY58qbVFTY Wx9tt/kvhImcvS01P0Oh14f+zpvsru4t5k9iVmGrnf4hpqnp/ir5319/BBgAaj18N53OcB0AAAAA SUVORK5CYII="
          transform="translate(335.966 1176.547)"
          overflow="visible"
          opacity={0.15}
        />
        <circle
          className={isc(24)}
          cx={353}
          cy={1193.81}
          r={10.92}
        />
        <circle
          className="bw003"
          cx={353}
          cy={1193.67}
          r={8.02}
        />
      </g>
      <g
        onClick={() => {
          selectc(25);
        }}>
        <image
          width={34}
          height={35}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAkCAYAAAAD3IPhAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA15JREFUeNrUmAtv0zAUhWMny9qu K7DS8RigCf7/XwIECNjYurKtjzWpw7V0jM6unEc7TYJKR83axv5878318ZLkH3qZR7yvekwYQ++s 8FlFEKzOYFlHiKBUZHGfhYyCcKINyXWNVltkLMkD5NC+aA+fGYqMn7wUrUV3eC8IyjUBmZZopJjQ T94XHZD6AErxWwcQDzEnLUQrQJVNQFkDTIiEn/RQ9ER0JHomeioainoAMlj9GpP/Fs1EU9GV6Bpg KwBtYkBZTWpSgAwx+UR0LHqJ67FoVAMzB8CF6Aw6F10Cckm1VTXBGMDkSIWPxInoregNricAPED6 OE0FJrvG5BNEcUBzhUIvusBkWLEf5JXoVPRB9A5/HyFtoYgtwXCqjpDaIX6bUIFvKDJVDMZQeg6Q iteAeY/ITADSU8XLKy5x/wD1luP7O0RtieuSFhCFCU/OCBOfAMJDvUC0eioiRvWRDN/v0fg+Jbei G6TwVgFVDGOol/QR3mOkxRftc3w2IJBYazA0VviNw1N0jcL+hfc5UrrRMLpewlM0phrREWnr2Ami PMBCxlBYVK7HspEV7VFvOcSN+x1B6lpEaJiH9BRmam/7C8OpSjHxfqTt77IRWzVeXrO33YPR+1FK MpFiTbbYZC1tLbYuwrZhhzYPgOhiPVphqgbt+qoaxm6ESZQn0dt+tSOIU/7GtcEwRPAka2pMbseo 6DFr/Y2NuLQC3XGB1r2i5uS2iI4eb0ljrpWNqGKR2ZA5mpEXWagBqi1AVmj/YbwbABV6cVlkk1vh hkv4kDE6ck7wac2WoCPMduIcmtHi7sGkDT0h1vh0f9CnAke1scDE3lx9FX2GfsABLvHbKEysN9jI xserd5TejUrLlEA+ij7h+hyRv9P2M23pC06pJBWkNSDmsJYXiMAXAvHXP8l6lm1Oz5ERuqEIlQj7 FSwFu7geFuWo3qaY2AN9E31HlK4wTtHFAyeqkAPgWoV+DKM1In/rsOIZCvaMinZKESnqWoRp2W35 uDKkI8sI1yN8lykTFY4ps4ZjSmeY2EEuR0r6pGCSUgwenqJwgOOmWVIZVLse/C1BpfSY58qbVFTY Wx9tt/kvhImcvS01P0Oh14f+zpvsru4t5k9iVmGrnf4hpqnp/ir5319/BBgAaj18N53OcB0AAAAA SUVORK5CYII="
          transform="translate(401.966 1176.547)"
          overflow="visible"
          opacity={0.15}
        />
        <circle
          className={isc(25)}
          cx={419}
          cy={1193.81}
          r={10.92}
        />
        <circle
          className="bw004"
          cx={419}
          cy={1193.67}
          r={8.02}
        />
      </g>
      <g
        onClick={() => {
          selectc(22);
        }}>
        <image
          width={35}
          height={35}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA6VJREFUeNq0mItzmkAQxjkE4yNa jTZtOn1M//9/qk0fmSbxkSYqgkKWzreZz+udgrbMfHMJwvK73b29BROcdhjHueJfG6xzj+/+4ljA 6AgQQwotKH14jr9rg5maICHUIOk5BShhtiSGKw6BRRVgGKS8vgmdiWKca+BBJcBGlIoyjBtIAfd6 yxyAsUFaoo6oKzoXtQEW4SElxFq0gpYYE4JUr+V1PGQoNApSAvREA9EQYw+/xQBKAbAQ/bb0BMA1 PBa4oKI9YVKY0huvRCPRWPQaY/l/Hx5jD5VAj6K5aCaaiO4xzvFbgmv/yikfUAOz7sIbl6J30BWg LgDUIjsZeehBNBXdiW4AHsN+QcmeM1TkCVWEB/Xx8I+iT6IPABqTd5qYQID8SOGBJ3jkgkJrKPG3 rpXnA2LvXAHoM8ZLhLCDhNalH9CSzwDRR+6d4ZoNcmhNK3BLXtsB4kQ+g8ERgN5DV4DswjMRwQQE 1aTFEJNnVvAcJzh7ygkUYzn3EZo3orfwzBCg7Bm7dOikIgpljoc/ItGnyLEllYI/XvIBdRAWXVUj ChN7xngWRYGxSQVzCHtj5NUE5WAFW3lA7uaK3CSgIW6uCuMqHTFC1yN7A+SWrlC9/iVkbEBXWBdG zimBq8DYuwBDqc2eZ4ImdBjRbaJNau7Jmap7YYxJqU1N+B2boeNm9lREyVkXxrcnxvtshv+hgTvp CK0GqrDaiI3V0xxzFLS7b7DMvXZDx81baiMSjNmRYNy02a2JbrA7NkPHjVrel9gkFzCQ2VW1IoxO MIGtR2hJ28dLVxl6ZqItxAP0hHNpRSg79IlVpeewmeB359bBs1mhimo/M0Y94p29Ya1Mbk3Z2wxz D81wbk2p8GLUV2Ej1I0WRu2hGw6IwhH2jGDKSf0UfRVd4+8pvLSTRw0HDDdpdj0KLZCctCWQlLw8 QYNWgnwRfRfdIhU4ZF4P8QbpqkX8mqMAGfU5S2ph7+CNa/LODbyzcK2yyFMzNI/mVjeoIRhjg+zS Hmc8OfhL9EP0DTAzwPACCfYBcSu6IG9lmP0c7ciAXoW4CVvTW8cMXrqFtOVY++patKeybqzVp4BT wPThIbsrTClsD5jAnF6FnAWxzositw9ttA2qNnWPhsKdAIqV0DuZ90XR1NipFSymnjm2WtWC9sCU lFkg+akfG8yBjw3GWoWuDw55lW2nanthPF9CjKdIBo6vHpU+ydTtd8wB0OLUj1anNmBVvqDVOp4F GACNkJ9sHM8WNAAAAABJRU5ErkJggg=="
          transform="translate(1021.508 1223.605)"
          overflow="visible"
          opacity={0.15}
        />
        <circle
          className={isc(22)}
          cx={1038.98}
          cy={1241.23}
          r={10.92}
        />
        <circle
          className="bw001"
          cx={1038.98}
          cy={1241.1}
          r={8.02}
        />
      </g>
      <g
        onClick={() => {
          selectc(23);
        }}>
        <image
          width={35}
          height={35}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4VJREFUeNq0mAlz2kAMhVkfHCGk JaFp0+kx/f9/qnfLNAdJ3IDB2BWdp8xD7BoDiWferDms/azVSrJd67DDBb6vntpg02ucGSsPVPVc QDy5KqJznbxOTwLEIBEUG7GdpajEuKTPjcBcAxgGSURtqCNKoZg8VIgWolw0hxYEVtZBuS0wFqQr OhL1Rcc47+B3h0lXk09Ff0lTAFqwjSPZAhMTyApgIHopGmIcAColoBkgbkU3ognOM9EDfi8wT9kE SJdJYVbeeCE6E41ErzCuPp/g9zauKTBhBphL6A/GG/xvBm9txFQIKMZd9+GNc9Fb6AJQpwDqGQ/l 8NAEEGN4sktLW1EsrcVUEliqBAZOMPkH0UfRewCNjHd0p5W48xk8OIR3+4g1hS4wbuy8EBB75wJA nzCeYxIN6BjXtOiOF4i5PsFEAMlpByqYem0NiAO5AzefAegddAFI9UxCyZETY4rfU1rOArstowDP jae8QCni4gRL81r0Bp4ZApQ940sdkfldd989AvsaO++BUsF/L0UBoCMsi+6qM1om9UxsSoctKbox uriJIeyNsCEGniV/PGFDbQIa4mILEzVIqi4AdYocdmx2nuMlYwO6w/owYjNytGMNZCi1OQjcoIs8 RrRM9EjtLTHTpBamuCm12cV3azYjz8XsqcQTL/v0T1wT0zqb0TM0cAcdkenwVJpNC9PP7HtUlDRr 7UaeC5fUz8w8bUO1I0hJILknU6/ZjAJ3kCNpcT+zsFl1ByC1qZlabc5tTfMBaYN1j2yqvYzPQNMl 0g7gDvbu8Dm3nk8CyzXFRas0f4Xsekzbv0UV3nmeOixMBpArlI0Jvstp2R6NhjJsgrzRxdih/rnu SYNjRuvXCuSX6Jvoq+gHeqWMvL4B5MwTRuzJR7ayl6Ql7c55AOYzxjG89GADO6555KkCuchOvoDm BKI99aWB+SL6CcjMxKS3QbOBPSFobiFGKJB9WkpHccje+S36DihdqntfQIeAdPI57lQnWsDFE7Qj WrF71ORXFDt3ABoDagyYW2ryyyZNPu8Q3n0KeA0Y7al7VCQrE8wT/J931pRgyn0eFLl96KFtUPVM W8LwmlgzAsnrYJo+SkcGLKXHaa7cjoK+oCDPA4/TB71scDUvG7iNrTwvHAo6P/hlQ+g9kPP0062a RNlqWgN37XfcFtCDX1od2oC5LQV25+OfAAMA85WTU9KGnJYAAAAASUVORK5CYII="
          transform="translate(1095.508 1223.605)"
          overflow="visible"
          opacity={0.15}
        />
        <circle
          className={isc(23)}
          cx={1113.02}
          cy={1241.23}
          r={10.92}
        />
        <circle
          className="bw002"
          cx={1113.02}
          cy={1241.1}
          r={8.02}
        />
      </g>

      <g>
        <image
          width={169}
          height={119}
          xlinkHref="data:image/png;base64,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 AQApXKk2/IMtgAAAAABJRU5ErkJggg=="
          transform="translate(1121.75 1103.998)"
          overflow="visible"
          opacity={0.3}
        />
        <path
          className="st1"
          d="M1185.75 1112.39h-42.07c-3.45 0-6.28 2.82-6.28 6.28v30.24c0 .8-.28 1.58-.78 2.2l-5.32 6.53a3.492 3.492 0 00.13 4.56l5.05 5.51c.59.64.92 1.48.92 2.36v35.87c0 3.45 2.82 6.28 6.28 6.28h130.51c3.45 0 6.28-2.82 6.28-6.28v-87.26c0-3.45-2.82-6.28-6.28-6.28h-88.44z"
        />
      </g>
      <g>
        <text transform="translate(1154.312 1152.07)">
          <tspan
            x={0}
            y={0}
            className="st2 st63 st65">
            {"Caudal Aireaci\xF3n"}
          </tspan>
          <tspan
            x={13.33}
            y={17}
            className="st2 st63 st65">
            {"Reactor MBR"}
          </tspan>
        </text>
      </g>
      <g>
        <text
          transform="translate(1176.682 1196.388)"
          className="st66 st63 st67">
          {fit026}
        </text>
      </g>
      <text
        transform="translate(1222.807 1195.993)"
        className="st66 st68 st65">
        {"Nm³/h"}
      </text>
      <g>
        <text
          transform="translate(683.855 1258.628)"
          className="st66 st63 st64">
          {"Estanque - TK005"}
        </text>
      </g>
      <g>
        <text
          transform="translate(559.519 1258.628)"
          className="st66 st63 st64">
          {"Qu\xEDmicos CIP"}
        </text>
      </g>
      <g>
        <path
          className="st38"
          d="M891.91 1247.38v25.32c0 2.58 2.1 4.68 4.68 4.68h76.69c3.02 0 5.46-2.44 5.46-5.46V1125.8c0-2.57 2.09-4.66 4.66-4.66h81.2c2.42 0 4.37 1.96 4.37 4.37v10.39"
        />
      </g>
      <g>
        <text
          transform="translate(292.46 363.507)"
          className="st66 st63 st64">
          {"P-001B2"}
        </text>
      </g>
      <g>
        <text
          transform="translate(292.04 281.64)"
          className="st66 st63 st64">
          {"P-001A2"}
        </text>
      </g>
      <g>
        <text
          transform="translate(814.988 512.283)"
          className="st66 st63 st64">
          {"P-002B"}
        </text>
      </g>
      <g>
        <text
          transform="translate(814.568 430.416)"
          className="st66 st63 st64">
          {"P-002A"}
        </text>
      </g>
      <g>
        <text
          transform="translate(1046.284 849.353)"
          className="st66 st63 st64">
          {"P-003B"}
        </text>
      </g>
      <g>
        <text
          transform="translate(1045.864 785.98)"
          className="st66 st63 st64">
          {"P-003A"}
        </text>
      </g>
      <g>
        <text
          transform="translate(85.448 894.81)"
          className="st66 st63 st64">
          {"DP-6111A"}
        </text>
      </g>
      <g>
        <text
          transform="translate(197.138 894.81)"
          className="st66 st63 st64">
          {"DP-6111B"}
        </text>
      </g>
      <g>
        <text
          transform="translate(85.448 632.825)"
          className="st66 st63 st64">
          {"DP-6101A"}
        </text>
      </g>
      <g>
        <text
          transform="translate(197.138 632.825)"
          className="st66 st63 st64">
          {"DP-6101B"}
        </text>
      </g>
      <g>
        <text
          transform="translate(82.448 1038.1)"
          className="st66 st63 st64">
          {"DP-6071A"}
        </text>
      </g>
      <g>
        <text
          transform="translate(197.138 1038.1)"
          className="st66 st63 st64">
          {"DP-6071B"}
        </text>
      </g>
      <g>
        <text
          transform="translate(80.448 1185.44)"
          className="st66 st63 st64">
          {"DP-6090A"}
        </text>
      </g>
      <g>
        <text
          transform="translate(197.138 1185.44)"
          className="st66 st63 st64">
          {"DP-6090B"}
        </text>
      </g>
      <g>
        <text
          transform="translate(628.555 68.82)"
          className="st66 st63 st64">
          {"MBR-TOT"}
        </text>
      </g>
      <g>
        <text
          transform="translate(632.635 174.011)"
          className="st66 st63 st64">
          {"AIT-001"}
        </text>
      </g>
      <g>
        <text
          transform="translate(633.475 278.292)"
          className="st66 st63 st64">
          {"LIT-004"}
        </text>
      </g>
      <g>
        <text
          transform="translate(980.99 189.88)"
          className="st66 st63 st64">
          {"AIT-013"}
        </text>
      </g>
      <g>
        <text
          transform="translate(981.741 304.316)"
          className="st66 st63 st64">
          {"FIT-003"}
        </text>
      </g>
      <g>
        <text
          transform="translate(148.291 497.076)"
          className="st66 st63 st64">
          {"LIT-061"}
        </text>
      </g>
      <g>
        <text
          transform="translate(148.291 756.383)"
          className="st66 st63 st64">
          {"LIT-062"}
        </text>
      </g>
      <g>
        <text
          transform="translate(898.263 673.714)"
          className="st66 st63 st64">
          {"PT-008"}
        </text>
      </g>
      <g>
        <text
          transform="translate(1195.85 456.322)"
          className="st66 st63 st64">
          {"AIT-012"}
        </text>
      </g>
      <g>
        <text
          transform="translate(1196.6 555.957)"
          className="st66 st63 st64">
          {"FIT-011"}
        </text>
      </g>
      <g>
        <text
          transform="translate(1197.293 653.161)"
          className="st66 st63 st64">
          {"TI-012"}
        </text>
      </g>
      <g>
        <text
          transform="translate(900.95 875.698)"
          className="st66 st63 st64">
          {"PT-007"}
        </text>
      </g>
      <g>
        <text
          transform="translate(1053.517 938.216)"
          className="st66 st63 st64">
          {"FIT-032"}
        </text>
      </g>
      <g>
        <text
          transform="translate(1307.847 978.172)"
          className="st66 st63 st64">
          {"AIT-016"}
        </text>
      </g>
      <g>
        <text
          transform="translate(1165.986 1010.362)"
          className="st66 st63 st64">
          {"P-004A"}
        </text>
      </g>
      <g>
        <text
          transform="translate(1174.351 1104.308)"
          className="st66 st63 st64">
          {"VK-1139"}
        </text>
      </g>
      <g>
        <text
          transform="translate(1254.595 1104.308)"
          className="st66 st63 st64">
          {"VK-1142"}
        </text>
      </g>
      <g>
        <text
          transform="translate(841.122 1182.954)"
          className="st66 st63 st64">
          {"VM-1196"}
        </text>
      </g>
      <g>
        <text
          transform="translate(841.123 1255.357)"
          className="st66 st63 st64">
          {"VM-1194"}
        </text>
      </g>
      <g>
        <text
          transform="translate(911.122 1255.357)"
          className="st66 st63 st64">
          {"VM-1195"}
        </text>
      </g>
      <g>
        <text
          transform="translate(911.123 1182.954)"
          className="st66 st63 st64">
          {"VM-1197"}
        </text>
      </g>
      <g>
        <text
          transform="translate(1020.447 1267.197)"
          className="st66 st63 st64">
          {"BW-001"}
        </text>
      </g>
      <g>
        <text
          transform="translate(1094.24 1267.329)"
          className="st66 st63 st64">
          {"BW-002"}
        </text>
      </g>
      <circle
        cx={1069.21}
        cy={1152.3}
        r={9.21}
        fill="#f2f2f2"
        stroke="#323e48"
        strokeWidth={3}
        strokeMiterlimit={10}
      />
      <g>
        <text
          transform="translate(1188.765 1132.928)"
          className="st66 st63 st64">
          {"FIT-026"}
        </text>
      </g>
      <g>
        <text
          transform="translate(331.096 1214.777)"
          className="st66 st63 st64">
          {"BW-003"}
        </text>
      </g>
      <g>
        <text
          transform="translate(399.596 1216.338)"
          className="st66 st63 st64">
          {"BW-004"}
        </text>
      </g>
      <g>
        <text
          transform="translate(504.67 1160.406)"
          className="st66 st63 st64">
          {"DP-6080A"}
        </text>
      </g>
      <g>
        <text
          transform="translate(625.266 1160.406)"
          className="st66 st63 st64">
          {"DP-6080B"}
        </text>
      </g>
      <g
        onClick={() => {
          selectc(18);
        }}>
        <image
          width={35}
          height={35}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2BJREFUeNrsWGlv00AU9Nqu06ZN 2iZQqoI4xP//S9yCAD3S3EnjLM9oFg2P5yMp/YKwNNrKtb2z846dTRT9v6ovd4936t71avyrhJhE rEZnECmwUWMjcmlDMgUSoHhnD2NMxCIiUGAtuMOYA7WkXAMijkjsCw6AfdxLFKEcRBaCObAgcp7Q WCFHYUkx+aHgGOgKjohUjPc2RGYiGAlugSnur/GcqVZVyGJMdgACfcET4LHgFCQzqBRBnRUmvxF8 F3wVfBNcgdgcpE1SaYk6rEyhyLngmeA5xjPBiaBNYYsoXDPBEEQ+EfGQbzM8l9cpxAncgjJnIPJa 8ErwFAp1QDhRIcsRmrGgR8/tqVzzRhWaCoVQtRGWCxApCL2EWsekjlVld8ixNsiEigyEQ+X90RIs hYI6HShRhOgFVLrAqg+NCuM+lBFSPONBdAkFV5TguaWQMwj1ocg5yJ1g5VkJGVaZe5TH5KH6xkbV mQpxuI5BoqiqR0YS1/WwkOhtIjNGtYWqG+N+EMPHRnVxqZ8CXdzLGpDRpHiBPSyuB6VbFNJfiuhw ZZi8A1W6+GBrCzIWqdBcOxj3jaKIYuPlDAS6wKGqlG0dAve1DAtrlYU+NnIoUftW6x5kNKmwOafK LZQq5FSFxEbFPOgVl/iYMvgd5+Hv5qop/rbz65BtDPuw1L1iBzJsS5ZA2Mt8lUJht55hZx6iV8zp A5sdCPEiZ/jeylpobKwiEBrBQtzg7xnZhqZKseJzLG6Ixc4wV162ufLGGOzDJbrqqWEh6pI8fK9q gUzoJ6mkxM46KtHQOzLlpZ3xridl1kTmWjAQfBC8h0e6wn624jRIGpwymFxC/scZxx1dFBNF5o3g neALlJqTzzYJOaM6uCxdzQljhUkmyJMi5J+JzFuoc0nq5FUGzdMEC3w0qBHuL/GxPrnBlCzsAv8f ISwDkChIfYTPnuhQ1Zl8Tm7dEqZI+GBJglmL6J1bZfIHGK9AdFHW29KKIzCTYoM1QuX1UH0dJHwE wmPqYdcgNqw4CjVSSJPSCl3DzxxhA2aF5nhmitBMsahGh0XXYJd2ytdkyJsWRutctkCurYA72sN8 VWPd5scGthCJshJceWt1ns+3+cFhF7OlYR2DfEnbeJDfh8o6u169j/6F64cAAwDOJX3ev6k3GQAA AABJRU5ErkJggg=="
          transform="translate(132.34 850.894)"
          overflow="visible"
          opacity={0.15}
        />
        <circle
          className={isc(18)}
          cx={150.07}
          cy={868.14}
          r={10.92}
        />
        <circle
          className="dp6111a"
          cx={150.07}
          cy={868.01}
          r={8.02}
        />
      </g>
      {/*sobrepuesto*/}
      <path
        className="st1"
        d="M583.8 1376.2h-43.1c-3.5 0-6.3 2.8-6.3 6.3v93.3c0 3.4 2.8 6.3 6.3 6.3h51.6c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3v-93.3c0-3.4-2.8-6.3-6.3-6.3h-82.4z"
      />
      <image
        width={158}
        height={132}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAACECAYAAABhyJKGAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABvJJREFUeNrsmw9z2kYQR3WSAOM/ adJp+v0/YGo7NsYCDKqY2Wt/Wd8JwcSTCN6b2REmICzpsbu3VooCAOBSCD/pvYFTeVG0mccfIl7o kQ3xkC9u258lXhgQcLny7US2ncjXnipekG0pUckWAS9TNs1wWxMubjWypbgekOWiZLXExLYqJGX3 skrrToR762Jj2xihT776QMYrRbRpF7Muruzx1J6PGZCe7zLEa0W8KNy6i5VFYz5spPy+k68+kO0q k2tucWMxFwEnkvUQ7vzRTLcR2ZZdvJgzTaY0Dyq1Ubq9YNddfHJxLfJVUm6R7/wzXsx2+0z32sWi i2dxISQWGboIeSdecCV2atntrosvXfxp8dmeu7bX1CwyLmphodlun+meuniQ6tcmFhyhTzzf280k 2+3F+9rF3ybfH1Z2p7LQQLzLGJ/sTLzGst2juVK63i8uOLb23v/ky2W8yol358T7alnvxl5T0eNd VMZT8Z6t5apMsLU9/2pRpbxIZbwyU2o/m3x/WSAe4jUi3c5+fjEZn1z/H3LihUyPd2WC3Vl51Uj1 eHD+C4xYTmeS6RqT7daS1az4cd5b9JVa7fHiqnYmK9sbiWuLiUunyHcZK9s36eka8eFKpKtyi87c OKV08sUBchwi6wB5kqvjcNblNv5lIuVEXfz4l63gElPbN0CO4lWyM91pJfW75HpcDDqjqyRyXoTE e5M9XqrfS90kUMq/U2IvU0DvSEhkuWTvXx65c/o46HMkDHWkPHHHrGAhJddgL8ojdpr7IICcJ+HU jIdY8CGwGgXEA8QDQDxAPADEA8QDQDxAPADEA8QDxANAPEA8AMQDxANAPEA8AMQDxANAPEA8QDwA xAPEA0A8QDwAxAPEA0A8QDwAxAPEA8QDQDxAPADEA8QDQDxAPADEA8QDQDxAPEA8AMQDxANAPEA8 AMQDxANAPEA8AMQDxAPEA0A8QDwAxAPEA0A8QDwAxAPEA0A8QDxAPADEA8QDQDxAPADEA8QDQDxA PADEA8QDxANAPEA8AMSDsxWvtQD4ZRmvdTK2iAkDfTlZvPjmHaJBpioenYzKhGBeNh+tkxAZyWht oj3r9aLu2aFKtpV4S8gYzuikhg+6SOeW5dSP6IhPUG0mob0Tz+94L9lGYu22E7lQ4UyEy21PuTi5 SjJ2ohs+NvJ46wTszXiFszjubNVFY/Fq26suKntdJWV7rAKW9rurcKWdjyEStgf6nnNYjOlxvJkX 6sZKklJOvtaL58usSreX7aWLZwuVbmr7CSOUTn/nsifCAflaVyl2Pf3xmAVsXcbbu7EwN/axNFdW Il8y69UHyuzadrTf+VMXj13M7X2t/ftMMt5YxYuC1XYslT3Wn0u3GAsZ4bau3LxJfzx2+bwfjQn3 YG48WWJamnya9Xp7vLjjrRi9tJ09iGQ7+9Abe64emXi+nJYi2sSyuMZEZCwT0kWxtBdeS9nxpWc3 0p4v/r5bJ95eum9d3Jt8C0tYa5f1BvV4MeMtbWfx5MdMt9/5tVyYMLJyq9muEuFm1krMLa4spnbs 2s/6c+V74dgPRwmjoGPNeprxNpKYnky6byahirc9pdSu3De9tQ/cW35rF2bqSu3YxIulNEo3t0x+ Y8d4a+dibuclfgELabLXJtjSTnrsexb2XCPZ71zE01bsWVqxBzvuRo53d8yqNpaORqTbSkM5tws1 cVlgLCtbX2anltn2Wfyui08WKzcmiMccm+y1lJz9Bfhu8WQRm+61uxBjE69NjFM06y3cl67pO976 QB3XDKYN5cJJV40w2xUZ8W5MvM9dfJGRwdqej2U32DlqpNzEb/y9Pf4uZWc1cvFy6wCdfLxKq6H9 XTEk4+kHbF0WjBlwYlG7kcPYMl6RKLUx42mZbKSHu3HixVLzaML9Y9t7E+9F+p1NrucZWcZrEyv4 1GIqu4qvB8xr1PC4Yqtkdje23q5vlBJ7vCjdUr7FsaTc2uuCnVxd9X8T8R7s+VTZGfsNF7kR0nbo 6KgeYLi/YeDtiMHqmEYqcWV75WRbSylZJMR7lVXdvUj3XZrsdd9Ma+TytcX7G0h27jVHlVovXZCf g8saY8X3elWiZOiK9VlmlypeLLWPMkj1vZ3PdOfwd1v/p7DcXStHi+c/INfHncMNAjHz+TtxNOM9 Ww84cYuLFxkpaHlNLSiKMxHumJ9PFi/XYBYuE45dvl2md9mIeDMnXpxlLSV0breTBcW5cfIx1b/y w3/DkxgSzbPKtSj+H5iH4sdBu45ddJQw5tHJh/c4kC67esNAHB/FGweioP5+tO2hUQIg3iH5VMBS Ml2ZyYzboas6TjAMHbeEIn0jhL8VfPD/O+DkwlABw4E+F+EQ75ecK4QDAADHvwIMAMe4M/Ec+AHH AAAAAElFTkSuQmCC"
        transform="translate(818.79 1367.95) scale(.9932)"
        overflow="visible"
        opacity={0.3}
      />
      <path
        className="st1"
        d="M876.8 1376.2h-43.1c-3.5 0-6.3 2.8-6.3 6.3v93.3c0 3.4 2.8 6.3 6.3 6.3h51.6c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3v-93.3c0-3.4-2.8-6.3-6.3-6.3h-82.4z"
      />

      <image
        width={164}
        height={124}
        xlinkHref="data:image/png;base64,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"
        transform="translate(657.105 1609.513) scale(.9783)"
        overflow="visible"
        opacity={0.3}
      />
      <path
        className="st1"
        d="M752.4 1720.5h42.1c3.5 0 6.3-2.8 6.3-6.3V1686c0-.8.3-1.6.8-2.2l5.3-6.5c1.1-1.3 1-3.3-.1-4.6l-5-5.5c-.6-.6-.9-1.5-.9-2.4v-39.9c0-3.4-2.8-6.3-6.3-6.3H672c-3.5 0-6.3 2.8-6.3 6.3v89.3c0 3.4 2.8 6.3 6.3 6.3h80.4z"
      />

      <path
        className="st6"
        d="M473.9 1357.4c-.5 0-.9-.2-1.3-.5l-.1-.1-4.5-4.5c-.5-.5-.7-1.3-.4-2 .3-.7 1-1.2 1.7-1.2h9c.8 0 1.5.5 1.7 1.2.3.7.1 1.5-.4 2l-4.5 4.5c-.3.4-.7.6-1.2.6z"
      />
      <path
        className="st1"
        d="M478.3 1350.2c.8 0 1.2.9.6 1.5l-4.5 4.5c-.2.2-.4.2-.6.2s-.5-.1-.7-.2l-4.5-4.5c-.5-.6-.2-1.5.6-1.5h9.1m0-2h-9c-1.2 0-2.2.7-2.7 1.8s-.2 2.3.6 3.1l4.5 4.5.1.1.1.1c.5.4 1.2.7 1.9.7.8 0 1.5-.3 2-.8l4.5-4.5c.8-.8 1.1-2.1.6-3.1-.4-1.2-1.4-1.9-2.6-1.9z"
      />
      <text
        transform="translate(693.465 1658.64)"
        className="st2 st63 st65">
        {"Caudal Lodos"}
      </text>
      <text
        transform="translate(693.755 1675.64)"
        className="st2 st63 st65">
        {"a Decantador"}
      </text>
      <text
        transform="translate(714.636 1703.958)"
        className="st66 st63 st67">
        {fit020}
      </text>
      <text
        transform="translate(752.962 1703.563)"
        className="st66 st68 st65">
        {"m³/h"}
      </text>
      <path
        className="st0"
        d="M594.1 1523.5H480.7c-3.4 0-6.1-2.7-6.1-6.1v-32.2"
      />
      <circle
        className="st59"
        cx={602.5}
        cy={1523.3}
        r={9.2}
      />
      <text
        transform="translate(559.927 1421.106)"
        className="st2 st63 st65">
        {"Nivel Estanque"}
      </text>
      <text
        transform="translate(587.396 1438.106)"
        className="st2 st63 st65">
        {"Lodos"}
      </text>
      <text
        transform="translate(593.68 1461.425)"
        className="st66 st63 st67">
        {pt030}
      </text>
      <text
        transform="translate(624.324 1461.03)"
        className="st66 st68 st65">
        {"bar"}
      </text>

      <g>
        <path
          className="st6"
          d="M780 1462.7c.5 0 .9.2 1.3.5l.1.1 4.5 4.5c.5.5.7 1.3.4 2s-1 1.2-1.7 1.2h-9c-.8 0-1.5-.5-1.7-1.2-.3-.7-.1-1.5.4-2l4.5-4.5c.2-.4.7-.6 1.2-.6z"
        />
        <path
          className="st1"
          d="M775.5 1469.9c-.8 0-1.2-.9-.6-1.5l4.5-4.5c.2-.2.4-.2.6-.2s.5.1.7.2l4.5 4.5c.5.6.2 1.5-.6 1.5h-9.1m0 2h9c1.2 0 2.2-.7 2.7-1.8s.2-2.3-.6-3.1l-4.5-4.5-.1-.1-.1-.1c-.5-.4-1.2-.7-1.9-.7-.8 0-1.5.3-2 .8l-4.5 4.5c-.8.8-1.1 2.1-.6 3.1.4 1.2 1.5 1.9 2.6 1.9z"
        />
      </g>
      <g>
        <text
          transform="translate(427.05 1460.39)"
          className="st66 st63 st64">
          {"Estanque de lodos"}
        </text>
        <text
          transform="translate(456.45 1473.59)"
          className="st66 st63 st64">
          {"TK510"}
        </text>
      </g>
      <g>
        <path
          className="st10"
          d="M1104.3 1519.7c-17.2 0-31.2-4.6-32.2-10.5h-.1v52.7c0 6.2 14.4 11.3 32.3 11.3s32.3-5.1 32.3-11.3v-52.7h-.1c-1 5.8-15 10.5-32.2 10.5z"
        />
        <path
          className="st2"
          d="M1104.3 1519.7c17.2 0 31.2-4.6 32.2-10.5.1-.2.1-.5.1-.7 0-6.2-14.4-11.3-32.3-11.3s-32.3 5.1-32.3 11.3c0 .2 0 .5.1.7 1.1 5.8 15.1 10.5 32.2 10.5z"
        />
      </g>
      <g>
        <text
          transform="translate(852.854 1421.106)"
          className="st2 st63 st65">
          {"Presi\xF3n Lavado"}
        </text>
        <text
          transform="translate(863.584 1438.106)"
          className="st2 st63 st65">
          {"Decantador"}
        </text>
      </g>
      <g>
        <text
          transform="translate(888.2 1463.425)"
          className="st66 st63 st67">
          {pt061}
        </text>
      </g>
      <text
        transform="translate(925.324 1463.03)"
        className="st66 st68 st65">
        {"bar"}
      </text>
      <circle
        className="st59"
        cx={896.5}
        cy={1504.3}
        r={9.2}
      />
      <circle
        className="st59"
        cx={830}
        cy={1673.3}
        r={9.2}
      />
      <path
        className="st0"
        d="M830 1551.4L830 1505.7"
      />
      <path
        className="st0"
        d="M830 1665.2L830 1588.5"
      />
      <path
        className="st0"
        d="M779.8 1503.2L779.8 1464.8"
      />
      <path
        className="st0"
        d="M780.2 1407v-68.9c0-1.5-1.2-2.8-2.8-2.8h-285c-1.5 0-2.8 1.2-2.8 2.8v9"
      />
      <g>
        <path
          className="st6"
          d="M830 1558.6c-.5 0-.9-.2-1.3-.5l-.1-.1-4.5-4.5c-.5-.5-.7-1.3-.4-2s1-1.2 1.7-1.2h9c.8 0 1.5.5 1.7 1.2.3.7.1 1.5-.4 2l-4.5 4.5c-.2.4-.7.6-1.2.6z"
        />
        <path
          className="st1"
          d="M834.4 1551.4c.8 0 1.2.9.6 1.5l-4.5 4.5c-.2.2-.4.2-.6.2s-.5-.1-.7-.2l-4.5-4.5c-.5-.6-.2-1.5.6-1.5h9.1m0-2h-9c-1.2 0-2.2.7-2.7 1.8s-.2 2.3.6 3.1l4.5 4.5.1.1.1.1c.5.4 1.2.7 1.9.7.8 0 1.5-.3 2-.8l4.5-4.5c.8-.8 1.1-2.1.6-3.1-.3-1.2-1.4-1.9-2.6-1.9z"
        />
      </g>
      <g>
        <path
          className="st6"
          d="M830 1746.4c-.5 0-.9-.2-1.3-.5l-.1-.1-4.5-4.5c-.5-.5-.7-1.3-.4-2s1-1.2 1.7-1.2h9c.8 0 1.5.5 1.7 1.2.3.7.1 1.5-.4 2l-4.5 4.5c-.2.4-.7.6-1.2.6z"
        />
        <path
          className="st1"
          d="M834.4 1739.2c.8 0 1.2.9.6 1.5l-4.5 4.5c-.2.2-.4.2-.6.2s-.5-.1-.7-.2l-4.5-4.5c-.5-.6-.2-1.5.6-1.5h9.1m0-2h-9c-1.2 0-2.2.7-2.7 1.8s-.2 2.3.6 3.1l4.5 4.5.1.1.1.1c.5.4 1.2.7 1.9.7.8 0 1.5-.3 2-.8l4.5-4.5c.8-.8 1.1-2.1.6-3.1-.3-1.2-1.4-1.9-2.6-1.9z"
        />
      </g>
      <g
        onClick={() => {
          selectc(7);
        }}>
        <path
          className={isd(7)}
          d="M723.4 1499.3H706c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.6-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.7c-.1-1.4-1.3-2.6-2.7-2.6z"
        />
        <image
          width={37}
          height={37}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAACXBIWXMAAAthAAALYQFbeSumAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4pJREFUeNrsWGtT00AUzaZJXxSK VVQYVNT//5scH6BoebdpoU3Wm5lzZw7LbpoE8JOdOdNQkpuz5z53o+j/p97HPNPz9l+SMp5rEyBk 2xI0De+Lca3fxrFhiUQB2KYEk5qEYqCDZxJcdzyklMwayIGiLjFTU52SRFfQE/SBHn6P6d4CBFaC JeEOvxV1yCUVhFShFCS2BNuCHXwPQTRxSJUvXwhmghvBNa4z/G+9yZ3JBkLlSweCsWAi2BO8wvUO yKpaEVS6FcwFl4IzwR/BFH/PcN+6DSklVKqxK3gtOBAcCvZBbAxSKSnFpC4Ep4JjLCyF3WsiZnzE koBKKSn0VvBecCT4AFITuNB1X07uu6L7+nSfdfBAMR+pDl62DXe9E3wWfML1HsgOKAv5ZapW6d6R Q6igjCycsuElxYE9gNv2oc5HUmmXgjx2apWWBF+GWhC6RTbekbJRHVJbkP4A6hzCjRP8r+vUKOMU T65lSoiz0s3Ge7GVeFzXg+wTBPgbuGzXIRRXZK7F4iJSaIkScU7ZmEG5wkfKeEiVJF5S+g83EPIV 3hQvK+29oJKiIZDCXs4Px4EgHyKYxwh4Tum4Qb80WDgX3zFIss173SX2KKUVfEQP11UoVPN0sX0s uEcquU39gVIxEetSHWpDyGc3gW22+aD/VgWrbzR5iqFyo93YMwtpp+fRwz5imrQe296i6ZLiwUwL 3MIzdtiWpNTuCra1PnnJuUrlILGgsWMOQ+sWxKyz0IwK521ojGFS/LCOHhdorLOWxHw2L7HgRcgD ieN3baYzEJpiHtIG3KHaE2/YzXAlZ3tTLFTbTO4+3AlkB5eFPtWVxGnCtsJlK2otU8xVXwRfBScg qWrZECl9iXE2C7Fno2ACOxbNWI3LaxA6AZmS1DeofwOv5FWkokDHd4cxd7eydjJLJ4FLvPyYCJXf v6BSRjG6cRzWDJyTq9xOv4cmrVODjsSqUoa4Ubf9EHwnt2VVSZMEdrca8JxFSvScRhm3Wa8osEul fgt+YlY/xbM3NODV3jjwDBR5svIMYwh3+x5I3RGpK5A4gzpa85ZU1W2TzagJTA5DuGyE6wF+75JS WiQzqKLFckkKVda6OjtkQxmY0k65S/HEMbWiGXzpzOO1+qhp2NndM4UOgbftuecc4UnOEqqOgIxz +hJ7Jo2CiDY6EmozK5mAkqEzqWc7n2piwz7W4F8BBgDB8n7C36CvBwAAAABJRU5ErkJggg=="
          transform="translate(685.043 1496.725) scale(.9459)"
          overflow="visible"
          opacity={0.15}
        />
        <circle
          className="st1"
          cx={702.7}
          cy={1513.8}
          r={10.9}
        />
        <circle
          className="p05a"
          cx={702.7}
          cy={1513.7}
          r={8}
        />
      </g>
      <g>
        <text
          transform="translate(344.426 1358.277)"
          className="st66 st63 st64">
          {"LIT-510"}
        </text>
      </g>
      <g>
        <text
          transform="translate(591.952 1400.277)"
          className="st66 st63 st64">
          {"PT-030"}
        </text>
      </g>
      <g>
        <text
          transform="translate(879.236 1400.277)"
          className="st66 st63 st64">
          {"PT-061"}
        </text>
      </g>
      <g>
        <text
          transform="translate(718.268 1639.128)"
          className="st66 st63 st64">
          {"FIT-020"}
        </text>
      </g>
      <g
        onClick={() => {
          selectc(59);
        }}>
        <path
          className={isd(59)}
          d="M771.5 1413.3v14.8c0 .9-.7 1.6-1.6 1.6h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.8-.1 1.6.7 1.6 1.6zM775.4 1428.5l4.6-7.9c.3-.5 1-.5 1.3 0l4.6 7.9c.3.5-.1 1.2-.7 1.2H776c-.6-.1-.9-.7-.6-1.2z"
        />
        <path
          className={isd(59)}
          d="M786 1412.8l-4.6 7.9c-.3.5-1 .5-1.3 0l-4.6-7.9c-.3-.5.1-1.2.7-1.2h9.2c.5 0 .9.7.6 1.2z"
        />
        <path
          className={isdd(59)}
          d="M770.5 1420.6L780.5 1420.6"
        />
        <path
          className="st46"
          d="M762.5 1429.6L762.5 1411.6"
        />
        <path
          className="st46"
          d="M763.5 1420.6L771.5 1420.6"
        />
      </g>
      <g
        onClick={() => {
          selectc(59);
        }}>
        <image
          width={37}
          height={37}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAACXBIWXMAAAthAAALYQFbeSumAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA5JJREFUeNrMmAtP2zAUhRvHKS1t WVkZYxvT+P8/i2kP8SrPJm2aeLZ0jA4XOw8Y0yYdJWWO/eX6vpzB4D/8l7zhHOZfQiXiPgnMY0i9 IfULYBhEQQzmYWqoN5zuAcQgKaTpXmGsA6mgLa41qRVO9wBSGO80tNqBhlCK8Q6itNpYrXHdANBD miYw3RHILZgBYmw1sZriuou/+bncwoVVbvUArfB7TYB1DEx3BHKWGFnNrOZW+1bvrd5Z7QEsw3Ml IO6tbq1uSHeAXGNcFQLTHYHGADiw+ggdElgM6trqyuqCtATsgLb7CZju4EMjLOwgvlgd43oEqBmg M7F9D7COgzqz+kXjQpH6CNZkqRQ+5BZdWH22OrH6BrBDwE6Eo9fwmwLWWmDLp5gvJZAqlDZ0g5Uy bMscVvkKIAf2CX7lF9KBlLDF/88APiKgUkRlzRGpW6w0xRZ5qGMAHWCxEQGFtsRHbIY5vRVXFJmF BNORBKkp2haAOoKDLxBxIywWy+gp+aW34oZ8bQndIxq3Tdvnc9IYizuID7CO37IRvX0ScQH+bbCl c8zno5b97PE5Fdg+JaD2oXnAh9oKuqL5duBbe9CUopHL1DMoaakZJcgJ+YeKvFAskpVIwmNch+IF n1hKVv0MD01I0ocGPYu5oiKeCQsl0rwhk3trDcUbpZH+qW/ro5qsrTq8nWzk/ka3GmoCG6GMSICy 5TCvhKhIdWg+JYqhB9oid+RIdEUk+/YB8vOW1MKUoVKjIg+XVLvuoJySXB8w+aIr0V89m08FJqio FNyi/bjGfd7TYrV4yRVe8BbXFearmmqfoXY2x8Ou9bjEdYZITKgixFKEIb8sRH91iXvf8D3x17RD P7Uj+vEQiBGqyeIFrHKFnurU6rvVD8DdY1wdg0oiJxcdyFNGnFI4Wr0zP5C1fwPGQ53BWjnGt1oq VFgZYisA/MmFI9b747kAOoXFLgG9kf6pW6Ilp3Odof77hrqGGZWghMb5bVsCzIH8DABVbZ0n56yK +h//e03+sQDUnui9jQiUJSDOcXC4okguQ1GsW3KLb8wM5RkfRRfUPfhzX0Jjc/Kpa3HEKmJW6lLH ZOfg+6JdEhdshtpQbvLiw2i0bCUdqzvDcesxxJXThCwpvpyUlHTrpjrateKH2o5UXLn1HYgjVCVg Gj9w9G1DYp+DmsqMbFNM10Ve++Fs0OFrXufOIn3jz5cv+sT4R4ABAPOjoKPPxZv4AAAAAElFTkSu QmCC"
          transform="translate(761.75 1428.565) scale(.9459)"
          overflow="visible"
          opacity={0.15}
        />
        <circle
          className={isc(59)}
          cx={779.6}
          cy={1446.3}
          r={10.9}
        />
        <circle
          className="vm1201"
          cx={779.6}
          cy={1446.2}
          r={8}
        />
      </g>
      <g>
        <text
          transform="translate(700.92 1424.255)"
          className="st66 st63 st64">
          {"VM-1201"}
        </text>
      </g>
      <g
        onClick={() => {
          selectc(58);
        }}>
        <path
          className={isd(58)}
          d="M820.9 1565.6v14.8c0 .9-.7 1.6-1.6 1.6h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6zM824.8 1580.8l4.6-7.9c.3-.5 1-.5 1.3 0l4.6 7.9c.3.5-.1 1.2-.7 1.2h-9.2c-.6 0-.9-.6-.6-1.2z"
        />
        <path
          className={isd(58)}
          d="M835.4 1565.2l-4.6 7.9c-.3.5-1 .5-1.3 0l-4.6-7.9c-.3-.5.1-1.2.7-1.2h9.2c.5 0 .9.7.6 1.2z"
        />
        <path
          className={isdd(58)}
          d="M819.9 1573L829.9 1573"
        />
        <path
          className="st46"
          d="M811.9 1582L811.9 1564"
        />
        <path
          className="st46"
          d="M812.9 1573L820.9 1573"
        />
      </g>
      <g
        onClick={() => {
          selectc(58);
        }}>
        <image
          width={37}
          height={37}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAACXBIWXMAAAthAAALYQFbeSumAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA5VJREFUeNrsmOtS20AMheP1hlwg SVtomUIv0/d/q5ZeoEMg9ziJ7cozR8ypWDuOm/ZXM3Nm42C038paSetW6/+n3ic6kg1rJ4f+GVRk YKqg8iaQUQOPFHJQTNdqKwNAiu+ZgcyPBWVBvKgNeUhtFTA7aIsxJci9cL4GEMOcQF1RD+ritxgT FRCJaC1aYSyuN4BUuFYZWFQTqI2J+6KBaCga4fsZwDwmKSZfihaiGWkJJYDjR1vbUwzUxeQvRRei 16JzXA/hMYVKADQVTUQPojE0AeAK8K0QmN8D5AE0BMRb0RXGN6JX+FvIUzMA3YtuSRp/HFe/gfmK XVbESAceKoCuRR+ga0C9EJ3iPhtTC3hmDI8OCJ7TxIbCKK+C0sfWh8FL0XvRJ9FHeOqc4qkd2H0J oDX2erhPPaM7NEOMlXrKemmAya/IS+8QUzyRM6tNAcvSuRR4hVFTxlOi9RVe6iFeLuCZa4wXWH3f ADFUTPnL06PleCs2whxwW44rH/ASP7oRvHJJO25IQHGgzGgQW9gUOWuKOPuJcYbfg7tPDXjKSSPs MN3+nJPikrrH+S/G2IHnB4E4U1tOPeUCxmIDpUbOYORkD1AoHNRmD7v1FN87gZh8BuUoyPsAGcBI lwy4A+umLlYrQwejN485Yqgo8M9c33qUiw5tdyKzkJjkQh53JatyphOIzd+O1RhGZeUk9MmpYGZU 1VsNOspQwxeyWwqlN6bIKQlV9V1ZVa8Jpna3ps961gC6wGoUaI36tQi0HIe0t3lgoeuqxbqAgZ3J vBMkvEUDMAu0Qhafw946AJW7EgNc5R+gKUA3NcFyU5wXtMhH2NO+ih/jU8YN5RTNV13krC6ufWD3 2FNLRn25hkFRUn6Ivog+i76j15rb2hdXHJ84E/MhgXNO2Y7SQ8MKQIWn70Q3ALpBw/dIBbnUU61A ceXkZx9zRrtoZw4NCyq+twRU6Bt5abOv88xpIg32Md23xW9TFGntPLkeZuSlGXnpKx6dBUptbPqK ZLcDQETN2RoTjdFX2c5BoXRBEwDcwVt3aFkmtPPyugeHnFa8JO9pP3QPoNEeqCniRk8zj3TcSswB tda5LzKnmhPaiWd05rPFWhejcTUHiE3CaVmFqFPx+YQcU+vRoXaGeyIuJ0nFCTlrekIO7UJuPXwg b+UmcR78LiFq2HI4M0YVcZnXhfnTl2ZRxQuzspdnf+X9VBMbjd7m/RJgALoMpK9HRbmxAAAAAElF TkSuQmCC"
          transform="translate(811.165 1580.933) scale(.9459)"
          overflow="visible"
          opacity={0.15}
        />
        <circle
          className={isc(58)}
          cx={829}
          cy={1598.7}
          r={10.9}
        />
        <circle
          className="vm1202"
          cx={829}
          cy={1598.6}
          r={8}
        />
      </g>
      <g>
        <text
          transform="translate(750.335 1576.624)"
          className="st66 st63 st64">
          {"VM-1202"}
        </text>
      </g>
      <g>
        <text
          transform="translate(975.9 1551.16)"
          className="st66 st63 st64">
          {"P-006"}
        </text>
      </g>
      <g>
        <text
          transform="translate(682.517 1551.16)"
          className="st66 st63 st64">
          {"P-005-A"}
        </text>
      </g>
      <g>
        <text
          transform="translate(1061.22 1590.798)"
          className="st66 st63 st64">
          {"Estanque - TK004"}
        </text>
      </g>
      <path
        className="st0"
        d="M918.5 798.2L1002.5 798.2"
      />
      <path
        className="st0"
        d="M676.5 1523.5L612.5 1523.5"
      />
      <g>
        <path
          className="st6"
          d="M676.4 1529.6c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.6l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.3-.8.5-1.3.5z"
        />
        <path
          className="st1"
          d="M676.4 1517.9c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c1-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        />
      </g>
      <path
        className="st0"
        d="M1015.1 1523.5L1075 1523.5"
      />
      <g>
        <path
          className="st6"
          d="M1015.2 1529.6c-.5 0-1-.2-1.3-.6l-4.5-4.5c-.6-.8-.6-1.9.1-2.6l4.5-4.5c.3-.3.8-.6 1.3-.6 1 0 1.9.8 1.9 1.9v9c0 .5-.2 1-.6 1.4-.4.4-.9.5-1.4.5z"
        />
        <path
          className="st1"
          d="M1015.2 1517.9c.5 0 .9.3.9.9v9c0 .5-.4.9-.9.9-.2 0-.4-.1-.6-.3l-4.5-4.5c-.3-.4-.3-.9 0-1.3l4.5-4.5c.2-.1.4-.2.6-.2m0-2c-.8 0-1.5.3-2 .8l-4.5 4.5c-1 1-1.1 2.7-.2 3.9l.1.1.1.1 4.5 4.5c.5.5 1.3.8 2 .8 1.6 0 2.9-1.3 2.9-2.9v-9c0-1.5-1.3-2.8-2.9-2.8z"
        />
      </g>
      <path
        className="st0"
        d="M964 1504.2L906.5 1504.2"
      />
      <path
        className="st0"
        d="M887.5 1504.2L726 1504.2"
      />
      <g
        onClick={() => {
          selectc(8);
        }}>
        <path
          className={isd(8)}
          d="M967.1 1501.9v4.7c0 1.5 1.2 2.7 2.6 2.7h6.8c-.4 1.3-.6 2.8-.6 4.2 0 4 1.6 7.6 4.2 10.3l-4.1 9.1c-.3.7 0 1.6.6 1.6h27.7c.6 0 1-.9.7-1.6l-4.1-9c2.7-2.7 4.3-6.3 4.3-10.4 0-8.1-6.5-14.6-14.6-14.6-1.2 0-2.3.2-3.4.4h-17.4c-1.5 0-2.7 1.2-2.7 2.6z"
        />
        <image
          width={37}
          height={37}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAACXBIWXMAAAthAAALYQFbeSumAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2pJREFUeNrsWGlP20AU9LHkMHeh BSp6//+/1BNESikEComNg91naR4aVt71Ok0/VGqkke1k/Tx+52yi6P/nH/7EK7rftlM7zv8aqdgD JdGGYIJmCTIJkFpI6MGVYCF4ACocg7xnenqmefgaMAQGuE6xRgndCwqgOS+JpJec6eGdNRAYC9YF G0AmGOH3GA9tiMwFd4JbHGeCHAQffCE1gYSUTENiR7AneIbzbXw/wPoFCP0STAVXgkvgBgQLrGv1 mAkklOHhzwVHgpeCAxBrI5WDQEPoQnAGfKfci7C2l6eY0C5IvBK8wfEQ32/Ci4bCdw+PXAt+wKMZ hTjyVaZxeElzaAyDhyDzDjiG17awZoBEV+MlQqQh3kBRpFSdWpWKR2IuUgZGNvHwhsR7wQeQO0DY Mqq8tpbARZDgN65MrcjS5yn1krG89FrwFscjhC2DhxIrT5SYAZiw5ptW5ZyqsfKFT0PHuXRMyb2L luAi1Nb1a6sqm0r8iZybgdhjriUd+dTkzD5CuE8hG1geiDy5aRDCTeTYPrBj2YrZK65GOYahbSp7 zo84cBoklKMZbG7B3rjNXuIxwt07g9E+hFw2R7A7tMZTFEqK55shQn3VRWzZNhah2OcpO0kTi8if 6K+YbCUO2eMkVdM0X5AEqZcRbJbd2vObkxR32xKlek/kqiWJ8Uip6KWf9KcuUtp1c6BYgccqetHC appPbCaOm3WozkkP5TQW6p5k1PPaze9gu2iLQOJw8QI33EGCXKMTK7HQMPILzkhjXVI3L+0QpgF9 JUOvWidFYFoabxehRltNBF8FXwQn0Fq3WPP4oqlny5SQJh9aPSv1tIe6g9AnwWdcTxHGBXsr7XC/ EtNmZ1ruYU2kbUT11C1CNYF3PoLUKXmpsDYTzvB15Ull9TGuqhzeuYESOIOHlNA3wTlyKidJ7FWe 3BZy3Kz5UyL5G7e/wNTXQZ2SHNZ1V9DlJ/DUKa6nRKgK3ThwX5nRdYEKuoCc2SNJbG+xNHTnCN8E 97GGqvpu2+0N6AgVqHJmhyTI0No4lBRC3WZNSW2WbU0zNH/s6a6VOEarYA2eWq2gADHFnEZW5ZsM oUItbmkTDLtF8KgqgYU1Vlbyr0vsINimsaqWrVQdOjeX1Ue2DnL9P1UHyJaV/2kWdXT2pT6/BRgA DNxqQ0quNboAAAAASUVORK5CYII="
          transform="translate(972.5 1496.174) scale(.9459)"
          overflow="visible"
          opacity={0.15}
        />
        <circle
          className="st1"
          cx={990.4}
          cy={1513.8}
          r={10.9}
        />
        <circle
          className="p06"
          cx={990.4}
          cy={1513.7}
          r={8}
        />
      </g>

      <g>
        <path
          className="st1"
          d="M494.2 1350.2c.8 0 1.2.9.6 1.5l-4.5 4.5c-.2.2-.4.2-.6.2s-.5-.1-.7-.2l-4.5-4.5c-.5-.6-.2-1.5.6-1.5h9.1m0-2h-9c-1.2 0-2.2.7-2.7 1.8s-.2 2.3.6 3.1l4.5 4.5.1.1.1.1c.5.4 1.2.7 1.9.7.8 0 1.5-.3 2-.8l4.5-4.5c.8-.8 1.1-2.1.6-3.1-.4-1.2-1.4-1.9-2.6-1.9z"
        />
        <path
          className="st2"
          d="M830 1740.2L830 1673.3"
        />
      </g>

      <path
        xmlns="http://www.w3.org/2000/svg"
        className="st10"
        d="M901.5 1792.2h-141c-2.3 0-4.2-1.5-4.2-3.2v-32.5c0-1.8 1.9-3.2 4.2-3.2h141c2.3 0 4.2 1.5 4.2 3.2v32.5c0 1.7-1.9 3.2-4.2 3.2z"
      />
      <g xmlns="http://www.w3.org/2000/svg">
        <path
          className="st10"
          d="M782.1 1809.1h-8.6c-.7 0-1.2-.5-1.2-1.2v-23c0-.7.5-1.2 1.2-1.2h8.6c.7 0 1.2.5 1.2 1.2v23c0 .7-.6 1.2-1.2 1.2zM888.7 1809.1H880c-.7 0-1.2-.5-1.2-1.2v-23c0-.7.5-1.2 1.2-1.2h8.6c.7 0 1.2.5 1.2 1.2v23c.1.7-.5 1.2-1.1 1.2z"
        />
      </g>
      <path
        xmlns="http://www.w3.org/2000/svg"
        className="st"
        d="M939.3 1729H1061.2V1830.8H939.3z"
      />
      <g xmlns="http://www.w3.org/2000/svg">
        <image
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width={162}
          height={122}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAAB6CAYAAAA8n4hZAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB2BJREFUeNrsnYtS4lgQQG9CVFDH dded2v//QB/jEzGPTWq7i7ZNQl44SzinqivAILHkTPe9l3A7BAAA+I9oD68R8WedDcWO+79VxMj9 HCIep4jFlGJGA+SLGgIJ5y1j0RCTSNlFnNgJt5BjbCJyz4P5SFhFbo65uZ85KfOhJ0o6ZEEVLJHb icioR40mERHzsEuxCpaZSM0xl+Oo7Jh0kFClO5E4ldD7iZEy7jCGhMMQ0UuYSnxIbCQ+5H1P5efy IRObNhFVwkq2M4llGSuJpTymci5cqUbAeZRkFVGley9jXcabxFrCvt/5FCLWSXhexkUZlybORcgz ETHZUaLhMEXUbLgRCSv5Xst4NhG797uQ+8VQEX1JPhXhrsr4o4xrOVb3f8i/LU2pRsR5iqileC0S PpXxSyIx73XhJjODRQymvGo2vBDxbsr4W47X8thFi4iMDw9/ucaLWGXDlzIeJQmdmsyXmTFkJj/b OSs2ZUQtyyspw9ci4D9l/CzjL8mMVsTESIyE85AxN7NiFfFZnDiT9zoz2XIt5Tvt+/4nNbNbW5aX TsSfIuONEfHMjQ8RcX4ialZciw9LM1N+N2PGF5OQRi3f+InKypTmPyUT3khcmclKwtLN7JdwdMas 5fjDjBd1rlA3TxhVmhM3Y76UycmViR+mLC8axoWIePgiamY8NROTVCS8CNulPDtP6D1ZTVpmzCem PK/MEs6FW7pJmKAcxcQlk9tZ2K4p27XkxElofSj6iOhlTGpktObXnRzmhUoUGV+S8PVTtSYPBpdm P060Jz1xv4C/GAIR5y+lv/6gzoFBLvgZrn+xhRHSXuSAhMclYJOQkzkQ15wwarB/8pPDwWbFMLUD ccdUjHjQJWsOdiTucYKAjLAv4gHWIyR8m4h8DwX+txkRABEBEQEQERARABEBEQEQERARABEBEQEQ EQARAREBEBEQEQARAREBEBEQEQARAREBEBEQEQARAREBEBG+m6hjICJ8i4xxQwzeMRZgqICL8LVd cm8hERHGiKjdJ3TTf7vBfy8ZERH6jgtVsCRse3fbVhe+L2MnGRERhmRD24dHe/Bo2DYoSVcZE/62 0FFAmxVtr0btTKYdyaqefFXPvqpRpHYpVRobiiMiDMmIicmGKuG1SFi1Rqt69tl2uUX43L+5QESY sjTbNsra2f5NsmElYioyWhEzMiJMJaN2JNM2yu/hc7/mTY2MNjt+KdGICEPGibERUbvWb8yxLtKa MSMiwiTjxFzKc2aE1Oz4ZmJtRLUyFogIY7JiMONELbWZyKYd7V9k8qKd7d9MZowozbAPGXMR7FKE s83ldV2xtak4C9owRsgofG0yrw3mz52EvsE8IsKkExcrpO/vbdsrt7ZWpjTDFCV61zWIO69RJCPC UOwnJTpZ0dmzjcxE4X4eEWG0hHpUyXTpxi/b6AK3lbEgI8KUMmoG1LXDF4kniep202fPiAiTlGTN cLp2WEn3WMavMh7k+CiPr8P2476cMSJMJWHhyrGV8LaMuzLujYhvpjwXdeUZEWEImg11TPgsEt6J iLdOxDWlGaYml/DZ8N5kQ5sRX8P2c+acyQrsoyyvnYh3DWX5o23GjIgwREb9XNmL+CACPhgJfTbM ERGmnjFvRMRXEc+GlTBtExARYYiEOka0M+bX8Pmyr7a1wwIRYQoJ7bWHqcuK+n2VuotgCzIi7KM0 23GifhXAf1cl7yohIsJQCXMno42sr4SICGNnz3n4fOVN5h4vur4gIsKYzOiF7C0gIsJUk5emXRwK RITvzIxtMiIiHBaICIgIgIiAiACICIgIgIiAiACICIgIgIiAiACICLMScdQlPQD7zIhFg6gAexex 7qpbBIQ2T4qpRaz71hYSItxeklLcYrXdjNGH7ziJoGTAUQ4k5kUilwW9fGnNY9rABeYvXtNXR31y GiVi3UntthLv4eu3+bWTUAg7WhfALET0SUm/XJ82VMpeWTLpKKH24tVYGglPnIgIOc8SbPfL1s3b bWLybSx6yZjUDET9/si605NuObYK22aAqdyOyYqzL8sqYuWDNnvUxKRypmHHhpx9M6LfiLHaH7lq 8Hcu4gX5pVZhR7M/mJWImpgewrZzgLax8NvQhSlEVPvtRt0r8/yNnNyKGFOaZ1uaczNUew3b7gG3 cvtZXNGs2GsDprrSHDWIeGqe+yG/zKWMFU9dRkTEeYlYmGGYOmE3b7+XrPhqxoq9Z9BJw4ntZt3P Jttl8tiTlOmly4hION/SnDon7L7Zj+FzY/DJRPSpWNPzh5TkC5HwLGz78NrFcYScT1kObiVFV1G0 1dmzKc29doltE7EuK/rp+4spydqTl7I8//Jsh2x2y+J1+Lxd8aCF7bYF7SD/A/xO8m9GwEXDjBkh 55UR/Ue+ujvsxpTjwdlwlzCRGfctzDgwcfcZGx7fMo4O3ep2ih107UHU4d9txE4+SvJxzqDrrsoa dQFM1OM5UcttOC4ZQ5j4Cpxo4HOjEa8Dhz9mrBtDjmIKgZDweGUEmBf/CjAA9ylbIhid2HMAAAAA SUVORK5CYII="
          transform="rotate(180 538.418 919.888) scale(.9918)"
          overflow="visible"
          opacity={0.3}
        />
        <path
          className="st1"
          d="M981.4 1729h-42.1c-3.5 0-6.3 2.8-6.3 6.3v28.2c0 .8-.3 1.6-.8 2.2l-5.3 6.5c-1.1 1.3-1 3.3.1 4.6l5 5.5c.6.6.9 1.5.9 2.4v39.9c0 3.4 2.8 6.3 6.3 6.3h122.5c3.4 0 6.3-2.8 6.3-6.3v-89.3c0-3.4-2.8-6.3-6.3-6.3H981.4z"
        />
      </g>

      <g xmlns="http://www.w3.org/2000/svg">
        <text
          transform="translate(980.979 1774.748)"
          className="st2 st63 st65">
          {"Estado"}
        </text>
        <text
          transform="translate(966.872 1791.748)"
          className="st2 st63 st65">
          {"Decantador"}
        </text>
      </g>
      <g xmlns="http://www.w3.org/2000/svg">
        <text
          transform="translate(981.443 1755.236)"
          className="st63 st66 st64">
          {"CD-510"}
        </text>
      </g>
      <g xmlns="http://www.w3.org/2000/svg">
        <text
          transform="translate(959.622 1813.066)"
          className="st63 st66 st64">
          {cd510}
        </text>
      </g>
      <g xmlns="http://www.w3.org/2000/svg">
        <text
          transform="translate(782.55 1830.126)"
          className="st63 st66 st64">
          {"Decantador CD-510"}
        </text>
      </g>
      {/*cuadros selectivos*/}
      {/*LIT510*/}
      <path
        onClick={() => {
          select(40);
        }}
        className={is(40)}
        d="M297.6 1334.1H419V1442H297.6z"
      />
      {/*FIT020*/}
      <path
        onClick={() => {
          select(54);
        }}
        className={is(54)}
        d="M672.5 1618.6H794.6V1720.6999999999998H672.5z"
      />
      {/*PT-061*/}
      <path
        onClick={() => {
          select(36);
        }}
        className={is(36)}
        d="M827.2 1382.7H965.5V1476H827.2z"
      />
      {/*PT-030*/}
      <path
        onClick={() => {
          select(34);
        }}
        className={is(34)}
        d="M534.3 1382.7H672.5999999999999V1476H534.3z"
      />
      {/*TMPCALC*/}
      <path
        onClick={() => {
          select(56);
        }}
        className={is(56)}
        d="M662.5 562.4H811.6V653.1999999999999H662.5z"
      />
      {/*LIT006*/}
      <path
        onClick={() => {
          select(38);
        }}
        className={is(38)}
        d="M662.5 653.3H811.6V756.4H662.5z"
      />
      {/*AIT-005*/}
      <path
        onClick={() => {
          select(48);
        }}
        className={is(48)}
        d="M662.5 756.4H811.6V859.5H662.5z"
      />
      {/*AIT-012*/}
      <path
        onClick={() => {
          select(49);
        }}
        className={is(49)}
        d="M1141.3 436.1H1289.3999999999999V536.1H1141.3z"
      />
      {/*FIT-011*/}
      <path
        onClick={() => {
          select(43);
        }}
        className={is(43)}
        d="M1141.3 535.5H1289.3999999999999V633.7H1141.3z"
      />
      {/*TI-012*/}
      <path
        onClick={() => {
          select(41);
        }}
        className={is(41)}
        d="M1141.3 633.8H1289.3999999999999V734.6999999999999H1141.3z"
      />
      {/*PT-008*/}
      <path
        onClick={() => {
          select(33);
        }}
        className={is(33)}
        d="M844.3 657.9H990.6999999999999V761.6999999999999H844.3z"
      />
      {/*PT-007*/}
      <path
        onClick={() => {
          select(32);
        }}
        className={is(32)}
        d="M848.1 859.5H986.2V956.3H848.1z"
      />
      {/*MBR-TOT*/}
      <path
        onClick={() => {
          select(55);
        }}
        className={is(55)}
        d="M581.3 49.2H725.4V152.2H581.3z"
      />
      {/*AIT-013*/}
      <path
        onClick={() => {
          select(50);
        }}
        className={is(50)}
        d="M927.5 166H1073.9V281.6H927.5z"
      />
      {/*FIT-003*/}
      <path
        onClick={() => {
          select(42);
        }}
        className={is(42)}
        d="M927.5 281.6H1073.9V392.1H927.5z"
      />
      {/*AIT-001*/}
      <path
        onClick={() => {
          select(46);
        }}
        className={is(46)}
        d="M581.3 152.2H725.4V257.29999999999995H581.3z"
      />
      {/*LIT-004*/}
      <path
        onClick={() => {
          select(37);
        }}
        className={is(37)}
        d="M581.3 257.8H725.4V362.9H581.3z"
      />
      {/*LIT-029*/}
      <path
        onClick={() => {
          select(39);
        }}
        className={is(39)}
        d="M312.4 656.4H449.09999999999997V754.5H312.4z"
      />
      {/*AIT-003*/}
      <path
        onClick={() => {
          select(47);
        }}
        className={is(47)}
        d="M312.4 754.5H449.09999999999997V859.7H312.4z"
      />
      {/*LIT-061*/}
      <path
        onClick={() => {
          select(52);
        }}
        className={is(52)}
        d="M97.5 482.7H236V574.1H97.5z"
      />
      {/*LIT-062*/}
      <path
        onClick={() => {
          select(53);
        }}
        className={is(53)}
        d="M98.2 743.4H236.7V834.8H98.2z"
      />
      {/*FIT-032*/}
      <path
        onClick={() => {
          select(45);
        }}
        className={is(45)}
        d="M999.1 922.3H1137.2V1021.0999999999999H999.1z"
      />
      {/*AIT-016*/}
      <path
        onClick={() => {
          select(51);
        }}
        className={is(51)}
        d="M1265.5 956.9H1389.3V1040.8H1265.5z"
      />
      {/*FIT-026*/}
      <path
        onClick={() => {
          select(44);
        }}
        className={is(44)}
        d="M1144.3 1122.4H1273.3V1222.2H1144.3z"
        transform="translate(0 -10)"
      />
      {/*CD-510*/}
      <path
        onClick={() => {
          select(60);
        }}
        className={is(60)}
        d="M939.3 1729H1061.2V1830.8H939.3z"
      />

      {/*elementos de campanitas*/}
      {/*c mbrtot*/}
      <g
        onClick={() => {
          sAlarm(55);
        }}
        className={getTemaAlarma(55)}>
        <path d="M606.24 124.38c-.59 1.08-.78 2.26-.59 3.34 0 .1.2.2.29.2l.59-.1c.1 0 .2-.2.2-.29-.1-.78 0-1.77.49-2.55.49-.78 1.08-1.37 1.86-1.67.1-.1.2-.2.2-.29l-.2-.59c0-.2-.2-.2-.39-.2-.98.39-1.86 1.07-2.45 2.15z" />
        <path d="M604.57 123.4c-.88 1.47-1.08 3.14-.78 4.71 0 .1.2.2.29.2l.59-.1c.1 0 .2-.2.2-.29-.2-1.28 0-2.65.69-3.92.69-1.28 1.77-2.16 3.04-2.55.1-.1.2-.2.2-.29l-.2-.59c0-.1-.2-.2-.29-.2-1.58.48-2.95 1.56-3.74 3.03zM615.86 122.13c-.1-.1-.29 0-.39.2l-.2.59c-.1.1 0 .29.2.29.78.29 1.47.88 1.86 1.67.49.78.59 1.67.49 2.55 0 .1.1.29.2.29l.59.1c.1 0 .29-.1.29-.2.2-1.08 0-2.26-.59-3.34-.59-.98-1.47-1.66-2.45-2.15z" />
        <path d="M616.45 120.26c-.1-.1-.29 0-.29.2l-.2.59c-.1.1 0 .29.2.29 1.28.49 2.35 1.37 3.04 2.55.69 1.28.88 2.65.69 3.92 0 .1.1.29.2.29l.59.1c.1 0 .29-.1.29-.2.29-1.57.1-3.24-.78-4.71-1-1.36-2.27-2.44-3.74-3.03zM617.33 129.39v-1.47c0-2.45-1.57-4.32-3.83-4.81v-.59c0-.49-.39-.88-.88-.88h-.49c-.49 0-.88.39-.88.88v.59c-2.35.49-3.83 2.35-3.83 4.81v1.47c0 .78-.29 1.47-.69 2.06-.2.29-.29.49-.29.88v.1c0 .88.69 1.57 1.57 1.57h8.93c.88 0 1.57-.69 1.57-1.57v-.1c0-.29-.1-.59-.29-.88-.6-.59-.89-1.28-.89-2.06zM612.32 136.84c.88 0 1.67-.78 1.67-1.67h-3.34c.1.89.79 1.67 1.67 1.67z" />
      </g>
      {/*ait-001*/}
      <g
        onClick={() => {
          sAlarm(46);
        }}
        className={getTemaAlarma(46)}>
        <path d="M606.24 229.49c-.59 1.08-.78 2.26-.59 3.34 0 .1.2.2.29.2l.59-.1c.1 0 .2-.2.2-.29-.1-.78 0-1.77.49-2.55.49-.78 1.08-1.37 1.86-1.67.1-.1.2-.2.2-.29l-.2-.59c0-.2-.2-.2-.39-.2-.98.39-1.86 1.07-2.45 2.15z" />
        <path d="M604.57 228.51c-.88 1.47-1.08 3.14-.78 4.71 0 .1.2.2.29.2l.59-.1c.1 0 .2-.2.2-.29-.2-1.28 0-2.65.69-3.92s1.77-2.16 3.04-2.55c.1-.1.2-.2.2-.29l-.2-.59c0-.1-.2-.2-.29-.2-1.58.48-2.95 1.56-3.74 3.03zM615.86 227.24c-.1-.1-.29 0-.39.2l-.2.59c-.1.1 0 .29.2.29.78.29 1.47.88 1.86 1.67.49.78.59 1.67.49 2.55 0 .1.1.29.2.29l.59.1c.1 0 .29-.1.29-.2.2-1.08 0-2.26-.59-3.34-.59-.98-1.47-1.66-2.45-2.15z" />
        <path d="M616.45 225.37c-.1-.1-.29 0-.29.2l-.2.59c-.1.1 0 .29.2.29 1.28.49 2.35 1.37 3.04 2.55.69 1.28.88 2.65.69 3.92 0 .1.1.29.2.29l.59.1c.1 0 .29-.1.29-.2.29-1.57.1-3.24-.78-4.71-1-1.36-2.27-2.44-3.74-3.03zM617.33 234.5v-1.47c0-2.45-1.57-4.32-3.83-4.81v-.59c0-.49-.39-.88-.88-.88h-.49c-.49 0-.88.39-.88.88v.59c-2.35.49-3.83 2.35-3.83 4.81v1.47c0 .78-.29 1.47-.69 2.06-.2.29-.29.49-.29.88v.1c0 .88.69 1.57 1.57 1.57h8.93c.88 0 1.57-.69 1.57-1.57v-.1c0-.29-.1-.59-.29-.88-.6-.59-.89-1.28-.89-2.06zM612.32 241.95c.88 0 1.67-.78 1.67-1.67h-3.34c.1.89.79 1.67 1.67 1.67z" />
      </g>
      {/*lit-004*/}
      <g
        onClick={() => {
          sAlarm(37);
        }}
        className={getTemaAlarma(37)}>
        <path d="M606.24 337.49c-.59 1.08-.78 2.26-.59 3.34 0 .1.2.2.29.2l.59-.1c.1 0 .2-.2.2-.29-.1-.78 0-1.77.49-2.55.49-.78 1.08-1.37 1.86-1.67.1-.1.2-.2.2-.29l-.2-.59c0-.2-.2-.2-.39-.2-.98.39-1.86 1.07-2.45 2.15z" />
        <path d="M604.57 336.51c-.88 1.47-1.08 3.14-.78 4.71 0 .1.2.2.29.2l.59-.1c.1 0 .2-.2.2-.29-.2-1.28 0-2.65.69-3.92s1.77-2.16 3.04-2.55c.1-.1.2-.2.2-.29l-.2-.59c0-.1-.2-.2-.29-.2-1.58.48-2.95 1.56-3.74 3.03zM615.86 335.24c-.1-.1-.29 0-.39.2l-.2.59c-.1.1 0 .29.2.29.78.29 1.47.88 1.86 1.67.49.78.59 1.67.49 2.55 0 .1.1.29.2.29l.59.1c.1 0 .29-.1.29-.2.2-1.08 0-2.26-.59-3.34-.59-.98-1.47-1.66-2.45-2.15z" />
        <path d="M616.45 333.37c-.1-.1-.29 0-.29.2l-.2.59c-.1.1 0 .29.2.29 1.28.49 2.35 1.37 3.04 2.55.69 1.28.88 2.65.69 3.92 0 .1.1.29.2.29l.59.1c.1 0 .29-.1.29-.2.29-1.57.1-3.24-.78-4.71-1-1.36-2.27-2.44-3.74-3.03zM617.33 342.5v-1.47c0-2.45-1.57-4.32-3.83-4.81v-.59c0-.49-.39-.88-.88-.88h-.49c-.49 0-.88.39-.88.88v.59c-2.35.49-3.83 2.35-3.83 4.81v1.47c0 .78-.29 1.47-.69 2.06-.2.29-.29.49-.29.88v.1c0 .88.69 1.57 1.57 1.57h8.93c.88 0 1.57-.69 1.57-1.57v-.1c0-.29-.1-.59-.29-.88-.6-.59-.89-1.28-.89-2.06zM612.32 349.95c.88 0 1.67-.78 1.67-1.67h-3.34c.1.89.79 1.67 1.67 1.67z" />
      </g>
      {/*ait-013*/}
      <g
        onClick={() => {
          sAlarm(50);
        }}
        className={getTemaAlarma(50)}>
        <path d="M951.07 249.49c-.59 1.08-.78 2.26-.59 3.34 0 .1.2.2.29.2l.59-.1c.1 0 .2-.2.2-.29-.1-.78 0-1.77.49-2.55.49-.78 1.08-1.37 1.86-1.67.1-.1.2-.2.2-.29l-.2-.59c0-.2-.2-.2-.39-.2-.98.39-1.86 1.07-2.45 2.15z" />
        <path d="M949.4 248.51c-.88 1.47-1.08 3.14-.78 4.71 0 .1.2.2.29.2l.59-.1c.1 0 .2-.2.2-.29-.2-1.28 0-2.65.69-3.92s1.77-2.16 3.04-2.55c.1-.1.2-.2.2-.29l-.2-.59c0-.1-.2-.2-.29-.2-1.58.48-2.95 1.56-3.74 3.03zM960.68 247.24c-.1-.1-.29 0-.39.2l-.2.59c-.1.1 0 .29.2.29.78.29 1.47.88 1.86 1.67.49.78.59 1.67.49 2.55 0 .1.1.29.2.29l.59.1c.1 0 .29-.1.29-.2.2-1.08 0-2.26-.59-3.34-.58-.98-1.47-1.66-2.45-2.15z" />
        <path d="M961.27 245.37c-.1-.1-.29 0-.29.2l-.2.59c-.1.1 0 .29.2.29 1.28.49 2.35 1.37 3.04 2.55.69 1.28.88 2.65.69 3.92 0 .1.1.29.2.29l.59.1c.1 0 .29-.1.29-.2.29-1.57.1-3.24-.78-4.71-.99-1.36-2.27-2.44-3.74-3.03zM962.15 254.5v-1.47c0-2.45-1.57-4.32-3.83-4.81v-.59c0-.49-.39-.88-.88-.88h-.49c-.49 0-.88.39-.88.88v.59c-2.35.49-3.83 2.35-3.83 4.81v1.47c0 .78-.29 1.47-.69 2.06-.2.29-.29.49-.29.88v.1c0 .88.69 1.57 1.57 1.57h8.93c.88 0 1.57-.69 1.57-1.57v-.1c0-.29-.1-.59-.29-.88-.59-.59-.89-1.28-.89-2.06zM957.15 261.95c.88 0 1.67-.78 1.67-1.67h-3.34c.1.89.79 1.67 1.67 1.67z" />
      </g>
      {/*fit-003*/}

      <g
        onClick={() => {
          sAlarm(42);
        }}
        className={getTemaAlarma(42)}>
        <path d="M951.07 364.49c-.59 1.08-.78 2.26-.59 3.34 0 .1.2.2.29.2l.59-.1c.1 0 .2-.2.2-.29-.1-.78 0-1.77.49-2.55.49-.78 1.08-1.37 1.86-1.67.1-.1.2-.2.2-.29l-.2-.59c0-.2-.2-.2-.39-.2-.98.39-1.86 1.07-2.45 2.15z" />
        <path d="M949.4 363.51c-.88 1.47-1.08 3.14-.78 4.71 0 .1.2.2.29.2l.59-.1c.1 0 .2-.2.2-.29-.2-1.28 0-2.65.69-3.92s1.77-2.16 3.04-2.55c.1-.1.2-.2.2-.29l-.2-.59c0-.1-.2-.2-.29-.2-1.58.48-2.95 1.56-3.74 3.03zM960.68 362.24c-.1-.1-.29 0-.39.2l-.2.59c-.1.1 0 .29.2.29.78.29 1.47.88 1.86 1.67.49.78.59 1.67.49 2.55 0 .1.1.29.2.29l.59.1c.1 0 .29-.1.29-.2.2-1.08 0-2.26-.59-3.34-.58-.98-1.47-1.66-2.45-2.15z" />
        <path d="M961.27 360.37c-.1-.1-.29 0-.29.2l-.2.59c-.1.1 0 .29.2.29 1.28.49 2.35 1.37 3.04 2.55.69 1.28.88 2.65.69 3.92 0 .1.1.29.2.29l.59.1c.1 0 .29-.1.29-.2.29-1.57.1-3.24-.78-4.71-.99-1.36-2.27-2.44-3.74-3.03zM962.15 369.5v-1.47c0-2.45-1.57-4.32-3.83-4.81v-.59c0-.49-.39-.88-.88-.88h-.49c-.49 0-.88.39-.88.88v.59c-2.35.49-3.83 2.35-3.83 4.81v1.47c0 .78-.29 1.47-.69 2.06-.2.29-.29.49-.29.88v.1c0 .88.69 1.57 1.57 1.57h8.93c.88 0 1.57-.69 1.57-1.57v-.1c0-.29-.1-.59-.29-.88-.59-.59-.89-1.28-.89-2.06zM957.15 376.95c.88 0 1.67-.78 1.67-1.67h-3.34c.1.89.79 1.67 1.67 1.67z" />
      </g>
      {/*lit-061*/}
      <g
        onClick={() => {
          sAlarm(52);
        }}
        className={getTemaAlarma(52)}>
        <path d="M122.44 550.9c-.59 1.08-.78 2.26-.59 3.34 0 .1.2.2.29.2l.59-.1c.1 0 .2-.2.2-.29-.1-.78 0-1.77.49-2.55.49-.78 1.08-1.37 1.86-1.67.1-.1.2-.2.2-.29l-.2-.59c0-.2-.2-.2-.39-.2-.98.38-1.86 1.07-2.45 2.15z" />
        <path d="M120.77 549.92c-.88 1.47-1.08 3.14-.78 4.71 0 .1.2.2.29.2l.59-.1c.1 0 .2-.2.2-.29-.2-1.28 0-2.65.69-3.92.69-1.28 1.77-2.16 3.04-2.55.1-.1.2-.2.2-.29l-.2-.59c0-.1-.2-.2-.29-.2-1.58.48-2.95 1.55-3.74 3.03zM132.05 548.64c-.1-.1-.29 0-.39.2l-.2.59c-.1.1 0 .29.2.29.78.29 1.47.88 1.86 1.67.49.78.59 1.67.49 2.55 0 .1.1.29.2.29l.59.1c.1 0 .29-.1.29-.2.2-1.08 0-2.26-.59-3.34-.58-.97-1.46-1.66-2.45-2.15z" />
        <path d="M132.64 546.78c-.1-.1-.29 0-.29.2l-.2.59c-.1.1 0 .29.2.29 1.28.49 2.35 1.37 3.04 2.55.69 1.28.88 2.65.69 3.92 0 .1.1.29.2.29l.59.1c.1 0 .29-.1.29-.2.29-1.57.1-3.24-.78-4.71-.99-1.37-2.27-2.44-3.74-3.03zM133.53 555.9v-1.47c0-2.45-1.57-4.32-3.83-4.81v-.59c0-.49-.39-.88-.88-.88h-.49c-.49 0-.88.39-.88.88v.59c-2.35.49-3.83 2.35-3.83 4.81v1.47c0 .78-.29 1.47-.69 2.06-.2.29-.29.49-.29.88v.1c0 .88.69 1.57 1.57 1.57h8.93c.88 0 1.57-.69 1.57-1.57v-.1c0-.29-.1-.59-.29-.88-.6-.59-.89-1.27-.89-2.06zM128.52 563.36c.88 0 1.67-.78 1.67-1.67h-3.34c.1.88.79 1.67 1.67 1.67z" />
      </g>
      {/*lit062*/}
      <g
        onClick={() => {
          sAlarm(53);
        }}
        className={getTemaAlarma(53)}>
        <path d="M122.9 810.59c-.59 1.08-.78 2.26-.59 3.34 0 .1.2.2.29.2l.59-.1c.1 0 .2-.2.2-.29-.1-.78 0-1.77.49-2.55.49-.78 1.08-1.37 1.86-1.67.1-.1.2-.2.2-.29l-.2-.59c0-.2-.2-.2-.39-.2-.98.39-1.86 1.08-2.45 2.15z" />
        <path d="M121.24 809.61c-.88 1.47-1.08 3.14-.78 4.71 0 .1.2.2.29.2l.59-.1c.1 0 .2-.2.2-.29-.2-1.28 0-2.65.69-3.92.69-1.28 1.77-2.16 3.04-2.55.1-.1.2-.2.2-.29l-.2-.59c0-.1-.2-.2-.29-.2-1.59.48-2.96 1.56-3.74 3.03zM132.52 808.34c-.1-.1-.29 0-.39.2l-.2.59c-.1.1 0 .29.2.29.78.29 1.47.88 1.86 1.67.49.78.59 1.67.49 2.55 0 .1.1.29.2.29l.59.1c.1 0 .29-.1.29-.2.2-1.08 0-2.26-.59-3.34-.59-.97-1.47-1.66-2.45-2.15z" />
        <path d="M133.11 806.47c-.1-.1-.29 0-.29.2l-.2.59c-.1.1 0 .29.2.29 1.28.49 2.35 1.37 3.04 2.55.69 1.28.88 2.65.69 3.92 0 .1.1.29.2.29l.59.1c.1 0 .29-.1.29-.2.29-1.57.1-3.24-.78-4.71-1-1.36-2.27-2.44-3.74-3.03zM133.99 815.6v-1.47c0-2.45-1.57-4.32-3.83-4.81v-.59c0-.49-.39-.88-.88-.88h-.49c-.49 0-.88.39-.88.88v.59c-2.35.49-3.83 2.35-3.83 4.81v1.47c0 .78-.29 1.47-.69 2.06-.2.29-.29.49-.29.88v.1c0 .88.69 1.57 1.57 1.57h8.93c.88 0 1.57-.69 1.57-1.57v-.1c0-.29-.1-.59-.29-.88-.6-.59-.89-1.28-.89-2.06zM128.99 823.05c.88 0 1.67-.78 1.67-1.67h-3.34c.1.89.78 1.67 1.67 1.67z" />
      </g>
      {/*lit029*/}
      <g
        onClick={() => {
          sAlarm(39);
        }}
        className={getTemaAlarma(39)}>
        <path d="M336.88 730.72c-.59 1.08-.78 2.26-.59 3.34 0 .1.2.2.29.2l.59-.1c.1 0 .2-.2.2-.29-.1-.78 0-1.77.49-2.55.49-.78 1.08-1.37 1.86-1.67.1-.1.2-.2.2-.29l-.2-.59c0-.2-.2-.2-.39-.2-.97.38-1.86 1.07-2.45 2.15z" />
        <path d="M335.22 729.74c-.88 1.47-1.08 3.14-.78 4.71 0 .1.2.2.29.2l.59-.1c.1 0 .2-.2.2-.29-.2-1.28 0-2.65.69-3.92s1.77-2.16 3.04-2.55c.1-.1.2-.2.2-.29l-.2-.59c0-.1-.2-.2-.29-.2-1.59.48-2.96 1.56-3.74 3.03zM346.5 728.46c-.1-.1-.29 0-.39.2l-.2.59c-.1.1 0 .29.2.29.78.29 1.47.88 1.86 1.67.49.78.59 1.67.49 2.55 0 .1.1.29.2.29l.59.1c.1 0 .29-.1.29-.2.2-1.08 0-2.26-.59-3.34-.59-.97-1.47-1.66-2.45-2.15z" />
        <path d="M347.09 726.6c-.1-.1-.29 0-.29.2l-.2.59c-.1.1 0 .29.2.29 1.28.49 2.35 1.37 3.04 2.55.69 1.28.88 2.65.69 3.92 0 .1.1.29.2.29l.59.1c.1 0 .29-.1.29-.2.29-1.57.1-3.24-.78-4.71-1-1.36-2.27-2.44-3.74-3.03zM347.97 735.72v-1.47c0-2.45-1.57-4.32-3.83-4.81v-.59c0-.49-.39-.88-.88-.88h-.49c-.49 0-.88.39-.88.88v.59c-2.35.49-3.83 2.35-3.83 4.81v1.47c0 .78-.29 1.47-.69 2.06-.2.29-.29.49-.29.88v.1c0 .88.69 1.57 1.57 1.57h8.93c.88 0 1.57-.69 1.57-1.57v-.1c0-.29-.1-.59-.29-.88-.6-.59-.89-1.27-.89-2.06zM342.97 743.18c.88 0 1.67-.78 1.67-1.67h-3.34c.1.88.78 1.67 1.67 1.67z" />
      </g>
      {/*ait-003*/}
      <g
        onClick={() => {
          sAlarm(47);
        }}
        className={getTemaAlarma(47)}>
        <path d="M336.88 833.72c-.59 1.08-.78 2.26-.59 3.34 0 .1.2.2.29.2l.59-.1c.1 0 .2-.2.2-.29-.1-.78 0-1.77.49-2.55.49-.78 1.08-1.37 1.86-1.67.1-.1.2-.2.2-.29l-.2-.59c0-.2-.2-.2-.39-.2-.97.38-1.86 1.07-2.45 2.15z" />
        <path d="M335.22 832.74c-.88 1.47-1.08 3.14-.78 4.71 0 .1.2.2.29.2l.59-.1c.1 0 .2-.2.2-.29-.2-1.28 0-2.65.69-3.92s1.77-2.16 3.04-2.55c.1-.1.2-.2.2-.29l-.2-.59c0-.1-.2-.2-.29-.2-1.59.48-2.96 1.56-3.74 3.03zM346.5 831.46c-.1-.1-.29 0-.39.2l-.2.59c-.1.1 0 .29.2.29.78.29 1.47.88 1.86 1.67.49.78.59 1.67.49 2.55 0 .1.1.29.2.29l.59.1c.1 0 .29-.1.29-.2.2-1.08 0-2.26-.59-3.34-.59-.97-1.47-1.66-2.45-2.15z" />
        <path d="M347.09 829.6c-.1-.1-.29 0-.29.2l-.2.59c-.1.1 0 .29.2.29 1.28.49 2.35 1.37 3.04 2.55.69 1.28.88 2.65.69 3.92 0 .1.1.29.2.29l.59.1c.1 0 .29-.1.29-.2.29-1.57.1-3.24-.78-4.71-1-1.36-2.27-2.44-3.74-3.03zM347.97 838.72v-1.47c0-2.45-1.57-4.32-3.83-4.81v-.59c0-.49-.39-.88-.88-.88h-.49c-.49 0-.88.39-.88.88v.59c-2.35.49-3.83 2.35-3.83 4.81v1.47c0 .78-.29 1.47-.69 2.06-.2.29-.29.49-.29.88v.1c0 .88.69 1.57 1.57 1.57h8.93c.88 0 1.57-.69 1.57-1.57v-.1c0-.29-.1-.59-.29-.88-.6-.59-.89-1.27-.89-2.06zM342.97 846.18c.88 0 1.67-.78 1.67-1.67h-3.34c.1.88.78 1.67 1.67 1.67z" />
      </g>
      {/*tmpcalc*/}
      <g
        onClick={() => {
          sAlarm(56);
        }}
        className={getTemaAlarma(56)}>
        <path d="M688.37 626.37c-.59 1.08-.78 2.26-.59 3.34 0 .1.2.2.29.2l.59-.1c.1 0 .2-.2.2-.29-.1-.78 0-1.77.49-2.55.49-.78 1.08-1.37 1.86-1.67.1-.1.2-.2.2-.29l-.2-.59c0-.2-.2-.2-.39-.2-.98.38-1.86 1.07-2.45 2.15z" />
        <path d="M686.7 625.38c-.88 1.47-1.08 3.14-.78 4.71 0 .1.2.2.29.2l.59-.1c.1 0 .2-.2.2-.29-.2-1.28 0-2.65.69-3.92s1.77-2.16 3.04-2.55c.1-.1.2-.2.2-.29l-.2-.59c0-.1-.2-.2-.29-.2-1.58.48-2.95 1.56-3.74 3.03zM697.98 624.11c-.1-.1-.29 0-.39.2l-.2.59c-.1.1 0 .29.2.29.78.29 1.47.88 1.86 1.67.49.78.59 1.67.49 2.55 0 .1.1.29.2.29l.59.1c.1 0 .29-.1.29-.2.2-1.08 0-2.26-.59-3.34-.58-.97-1.47-1.66-2.45-2.15z" />
        <path d="M698.57 622.24c-.1-.1-.29 0-.29.2l-.2.59c-.1.1 0 .29.2.29 1.28.49 2.35 1.37 3.04 2.55.69 1.28.88 2.65.69 3.92 0 .1.1.29.2.29l.59.1c.1 0 .29-.1.29-.2.29-1.57.1-3.24-.78-4.71-.99-1.36-2.27-2.44-3.74-3.03zM699.45 631.37v-1.47c0-2.45-1.57-4.32-3.83-4.81v-.59c0-.49-.39-.88-.88-.88h-.49c-.49 0-.88.39-.88.88v.59c-2.35.49-3.83 2.35-3.83 4.81v1.47c0 .78-.29 1.47-.69 2.06-.2.29-.29.49-.29.88v.1c0 .88.69 1.57 1.57 1.57h8.93c.88 0 1.57-.69 1.57-1.57v-.1c0-.29-.1-.59-.29-.88-.59-.59-.89-1.28-.89-2.06zM694.45 638.83c.88 0 1.67-.78 1.67-1.67h-3.34c.1.88.79 1.67 1.67 1.67z" />
      </g>
      {/*lit006*/}
      <g
        onClick={() => {
          sAlarm(38);
        }}
        className={getTemaAlarma(38)}>
        <path d="M688.37 729.72c-.59 1.08-.78 2.26-.59 3.34 0 .1.2.2.29.2l.59-.1c.1 0 .2-.2.2-.29-.1-.78 0-1.77.49-2.55.49-.78 1.08-1.37 1.86-1.67.1-.1.2-.2.2-.29l-.2-.59c0-.2-.2-.2-.39-.2-.98.38-1.86 1.07-2.45 2.15z" />
        <path d="M686.7 728.74c-.88 1.47-1.08 3.14-.78 4.71 0 .1.2.2.29.2l.59-.1c.1 0 .2-.2.2-.29-.2-1.28 0-2.65.69-3.92s1.77-2.16 3.04-2.55c.1-.1.2-.2.2-.29l-.2-.59c0-.1-.2-.2-.29-.2-1.58.48-2.95 1.56-3.74 3.03zM697.98 727.46c-.1-.1-.29 0-.39.2l-.2.59c-.1.1 0 .29.2.29.78.29 1.47.88 1.86 1.67.49.78.59 1.67.49 2.55 0 .1.1.29.2.29l.59.1c.1 0 .29-.1.29-.2.2-1.08 0-2.26-.59-3.34-.58-.97-1.47-1.66-2.45-2.15z" />
        <path d="M698.57 725.6c-.1-.1-.29 0-.29.2l-.2.59c-.1.1 0 .29.2.29 1.28.49 2.35 1.37 3.04 2.55.69 1.28.88 2.65.69 3.92 0 .1.1.29.2.29l.59.1c.1 0 .29-.1.29-.2.29-1.57.1-3.24-.78-4.71-.99-1.36-2.27-2.44-3.74-3.03zM699.45 734.72v-1.47c0-2.45-1.57-4.32-3.83-4.81v-.59c0-.49-.39-.88-.88-.88h-.49c-.49 0-.88.39-.88.88v.59c-2.35.49-3.83 2.35-3.83 4.81v1.47c0 .78-.29 1.47-.69 2.06-.2.29-.29.49-.29.88v.1c0 .88.69 1.57 1.57 1.57h8.93c.88 0 1.57-.69 1.57-1.57v-.1c0-.29-.1-.59-.29-.88-.59-.59-.89-1.27-.89-2.06zM694.45 742.18c.88 0 1.67-.78 1.67-1.67h-3.34c.1.88.79 1.67 1.67 1.67z" />
      </g>
      {/*ait005*/}
      <g
        onClick={() => {
          sAlarm(48);
        }}
        className={getTemaAlarma(48)}>
        <path d="M688.37 833.72c-.59 1.08-.78 2.26-.59 3.34 0 .1.2.2.29.2l.59-.1c.1 0 .2-.2.2-.29-.1-.78 0-1.77.49-2.55.49-.78 1.08-1.37 1.86-1.67.1-.1.2-.2.2-.29l-.2-.59c0-.2-.2-.2-.39-.2-.98.38-1.86 1.07-2.45 2.15z" />
        <path d="M686.7 832.74c-.88 1.47-1.08 3.14-.78 4.71 0 .1.2.2.29.2l.59-.1c.1 0 .2-.2.2-.29-.2-1.28 0-2.65.69-3.92s1.77-2.16 3.04-2.55c.1-.1.2-.2.2-.29l-.2-.59c0-.1-.2-.2-.29-.2-1.58.48-2.95 1.56-3.74 3.03zM697.98 831.46c-.1-.1-.29 0-.39.2l-.2.59c-.1.1 0 .29.2.29.78.29 1.47.88 1.86 1.67.49.78.59 1.67.49 2.55 0 .1.1.29.2.29l.59.1c.1 0 .29-.1.29-.2.2-1.08 0-2.26-.59-3.34-.58-.97-1.47-1.66-2.45-2.15z" />
        <path d="M698.57 829.6c-.1-.1-.29 0-.29.2l-.2.59c-.1.1 0 .29.2.29 1.28.49 2.35 1.37 3.04 2.55.69 1.28.88 2.65.69 3.92 0 .1.1.29.2.29l.59.1c.1 0 .29-.1.29-.2.29-1.57.1-3.24-.78-4.71-.99-1.36-2.27-2.44-3.74-3.03zM699.45 838.72v-1.47c0-2.45-1.57-4.32-3.83-4.81v-.59c0-.49-.39-.88-.88-.88h-.49c-.49 0-.88.39-.88.88v.59c-2.35.49-3.83 2.35-3.83 4.81v1.47c0 .78-.29 1.47-.69 2.06-.2.29-.29.49-.29.88v.1c0 .88.69 1.57 1.57 1.57h8.93c.88 0 1.57-.69 1.57-1.57v-.1c0-.29-.1-.59-.29-.88-.59-.59-.89-1.27-.89-2.06zM694.45 846.18c.88 0 1.67-.78 1.67-1.67h-3.34c.1.88.79 1.67 1.67 1.67z" />
      </g>
      {/*pt008*/}
      <g
        onClick={() => {
          sAlarm(33);
        }}
        className={getTemaAlarma(33)}>
        <path d="M867.24 731.37c-.59 1.08-.78 2.26-.59 3.34 0 .1.2.2.29.2l.59-.1c.1 0 .2-.2.2-.29-.1-.78 0-1.77.49-2.55.49-.78 1.08-1.37 1.86-1.67.1-.1.2-.2.2-.29l-.2-.59c0-.2-.2-.2-.39-.2-.98.38-1.86 1.07-2.45 2.15z" />
        <path d="M865.57 730.38c-.88 1.47-1.08 3.14-.78 4.71 0 .1.2.2.29.2l.59-.1c.1 0 .2-.2.2-.29-.2-1.28 0-2.65.69-3.92s1.77-2.16 3.04-2.55c.1-.1.2-.2.2-.29l-.2-.59c0-.1-.2-.2-.29-.2-1.58.48-2.95 1.56-3.74 3.03zM876.86 729.11c-.1-.1-.29 0-.39.2l-.2.59c-.1.1 0 .29.2.29.78.29 1.47.88 1.86 1.67.49.78.59 1.67.49 2.55 0 .1.1.29.2.29l.59.1c.1 0 .29-.1.29-.2.2-1.08 0-2.26-.59-3.34-.59-.97-1.47-1.66-2.45-2.15z" />
        <path d="M877.45 727.24c-.1-.1-.29 0-.29.2l-.2.59c-.1.1 0 .29.2.29 1.28.49 2.35 1.37 3.04 2.55.69 1.28.88 2.65.69 3.92 0 .1.1.29.2.29l.59.1c.1 0 .29-.1.29-.2.29-1.57.1-3.24-.78-4.71-1-1.36-2.27-2.44-3.74-3.03zM878.33 736.37v-1.47c0-2.45-1.57-4.32-3.83-4.81v-.59c0-.49-.39-.88-.88-.88h-.49c-.49 0-.88.39-.88.88v.59c-2.35.49-3.83 2.35-3.83 4.81v1.47c0 .78-.29 1.47-.69 2.06-.2.29-.29.49-.29.88v.1c0 .88.69 1.57 1.57 1.57h8.93c.88 0 1.57-.69 1.57-1.57v-.1c0-.29-.1-.59-.29-.88-.6-.59-.89-1.28-.89-2.06zM873.32 743.82c.88 0 1.67-.78 1.67-1.67h-3.34c.1.89.79 1.67 1.67 1.67z" />
      </g>
      {/*ait012*/}
      <g
        onClick={() => {
          sAlarm(49);
        }}
        className={getTemaAlarma(49)}>
        <path d="M1159.24 511.37c-.59 1.08-.78 2.26-.59 3.34 0 .1.2.2.29.2l.59-.1c.1 0 .2-.2.2-.29-.1-.78 0-1.77.49-2.55.49-.78 1.08-1.37 1.86-1.67.1-.1.2-.2.2-.29l-.2-.59c0-.2-.2-.2-.39-.2-.98.38-1.86 1.07-2.45 2.15z" />
        <path d="M1157.57 510.38c-.88 1.47-1.08 3.14-.78 4.71 0 .1.2.2.29.2l.59-.1c.1 0 .2-.2.2-.29-.2-1.28 0-2.65.69-3.92.69-1.28 1.77-2.16 3.04-2.55.1-.1.2-.2.2-.29l-.2-.59c0-.1-.2-.2-.29-.2-1.58.48-2.95 1.56-3.74 3.03zM1168.86 509.11c-.1-.1-.29 0-.39.2l-.2.59c-.1.1 0 .29.2.29.78.29 1.47.88 1.86 1.67.49.78.59 1.67.49 2.55 0 .1.1.29.2.29l.59.1c.1 0 .29-.1.29-.2.2-1.08 0-2.26-.59-3.34-.59-.97-1.47-1.66-2.45-2.15z" />
        <path d="M1169.45 507.24c-.1-.1-.29 0-.29.2l-.2.59c-.1.1 0 .29.2.29 1.28.49 2.35 1.37 3.04 2.55.69 1.28.88 2.65.69 3.92 0 .1.1.29.2.29l.59.1c.1 0 .29-.1.29-.2.29-1.57.1-3.24-.78-4.71-1-1.36-2.27-2.44-3.74-3.03zM1170.33 516.37v-1.47c0-2.45-1.57-4.32-3.83-4.81v-.59c0-.49-.39-.88-.88-.88h-.49c-.49 0-.88.39-.88.88v.59c-2.35.49-3.83 2.35-3.83 4.81v1.47c0 .78-.29 1.47-.69 2.06-.2.29-.29.49-.29.88v.1c0 .88.69 1.57 1.57 1.57h8.93c.88 0 1.57-.69 1.57-1.57v-.1c0-.29-.1-.59-.29-.88-.6-.59-.89-1.28-.89-2.06zM1165.32 523.82c.88 0 1.67-.78 1.67-1.67h-3.34c.1.89.79 1.67 1.67 1.67z" />
      </g>
      {/*fit011*/}
      <g
        onClick={() => {
          sAlarm(43);
        }}
        className={getTemaAlarma(43)}>
        <path d="M1159.24 609.37c-.59 1.08-.78 2.26-.59 3.34 0 .1.2.2.29.2l.59-.1c.1 0 .2-.2.2-.29-.1-.78 0-1.77.49-2.55.49-.78 1.08-1.37 1.86-1.67.1-.1.2-.2.2-.29l-.2-.59c0-.2-.2-.2-.39-.2-.98.38-1.86 1.07-2.45 2.15z" />
        <path d="M1157.57 608.38c-.88 1.47-1.08 3.14-.78 4.71 0 .1.2.2.29.2l.59-.1c.1 0 .2-.2.2-.29-.2-1.28 0-2.65.69-3.92s1.77-2.16 3.04-2.55c.1-.1.2-.2.2-.29l-.2-.59c0-.1-.2-.2-.29-.2-1.58.48-2.95 1.56-3.74 3.03zM1168.86 607.11c-.1-.1-.29 0-.39.2l-.2.59c-.1.1 0 .29.2.29.78.29 1.47.88 1.86 1.67.49.78.59 1.67.49 2.55 0 .1.1.29.2.29l.59.1c.1 0 .29-.1.29-.2.2-1.08 0-2.26-.59-3.34-.59-.97-1.47-1.66-2.45-2.15z" />
        <path d="M1169.45 605.24c-.1-.1-.29 0-.29.2l-.2.59c-.1.1 0 .29.2.29 1.28.49 2.35 1.37 3.04 2.55.69 1.28.88 2.65.69 3.92 0 .1.1.29.2.29l.59.1c.1 0 .29-.1.29-.2.29-1.57.1-3.24-.78-4.71-1-1.36-2.27-2.44-3.74-3.03zM1170.33 614.37v-1.47c0-2.45-1.57-4.32-3.83-4.81v-.59c0-.49-.39-.88-.88-.88h-.49c-.49 0-.88.39-.88.88v.59c-2.35.49-3.83 2.35-3.83 4.81v1.47c0 .78-.29 1.47-.69 2.06-.2.29-.29.49-.29.88v.1c0 .88.69 1.57 1.57 1.57h8.93c.88 0 1.57-.69 1.57-1.57v-.1c0-.29-.1-.59-.29-.88-.6-.59-.89-1.28-.89-2.06zM1165.32 621.82c.88 0 1.67-.78 1.67-1.67h-3.34c.1.89.79 1.67 1.67 1.67z" />
      </g>
      {/*ti012*/}
      <g
        onClick={() => {
          sAlarm(41);
        }}
        className={getTemaAlarma(41)}>
        <path d="M1159.24 706.97c-.59 1.08-.78 2.26-.59 3.34 0 .1.2.2.29.2l.59-.1c.1 0 .2-.2.2-.29-.1-.78 0-1.77.49-2.55.49-.78 1.08-1.37 1.86-1.67.1-.1.2-.2.2-.29l-.2-.59c0-.2-.2-.2-.39-.2-.98.39-1.86 1.07-2.45 2.15z" />
        <path d="M1157.57 705.99c-.88 1.47-1.08 3.14-.78 4.71 0 .1.2.2.29.2l.59-.1c.1 0 .2-.2.2-.29-.2-1.28 0-2.65.69-3.92s1.77-2.16 3.04-2.55c.1-.1.2-.2.2-.29l-.2-.59c0-.1-.2-.2-.29-.2-1.58.48-2.95 1.56-3.74 3.03zM1168.86 704.72c-.1-.1-.29 0-.39.2l-.2.59c-.1.1 0 .29.2.29.78.29 1.47.88 1.86 1.67.49.78.59 1.67.49 2.55 0 .1.1.29.2.29l.59.1c.1 0 .29-.1.29-.2.2-1.08 0-2.26-.59-3.34-.59-.98-1.47-1.66-2.45-2.15z" />
        <path d="M1169.45 702.85c-.1-.1-.29 0-.29.2l-.2.59c-.1.1 0 .29.2.29 1.28.49 2.35 1.37 3.04 2.55.69 1.28.88 2.65.69 3.92 0 .1.1.29.2.29l.59.1c.1 0 .29-.1.29-.2.29-1.57.1-3.24-.78-4.71-1-1.36-2.27-2.44-3.74-3.03zM1170.33 711.98v-1.47c0-2.45-1.57-4.32-3.83-4.81v-.59c0-.49-.39-.88-.88-.88h-.49c-.49 0-.88.39-.88.88v.59c-2.35.49-3.83 2.35-3.83 4.81v1.47c0 .78-.29 1.47-.69 2.06-.2.29-.29.49-.29.88v.1c0 .88.69 1.57 1.57 1.57h8.93c.88 0 1.57-.69 1.57-1.57v-.1c0-.29-.1-.59-.29-.88-.6-.59-.89-1.28-.89-2.06zM1165.32 719.43c.88 0 1.67-.78 1.67-1.67h-3.34c.1.89.79 1.67 1.67 1.67z" />
      </g>
      {/*pt007*/}
      <g
        onClick={() => {
          sAlarm(32);
        }}
        className={getTemaAlarma(32)}>
        <path d="M872.98 932.29c-.59 1.08-.78 2.26-.59 3.34 0 .1.2.2.29.2l.59-.1c.1 0 .2-.2.2-.29-.1-.78 0-1.77.49-2.55.49-.78 1.08-1.37 1.86-1.67.1-.1.2-.2.2-.29l-.2-.59c0-.2-.2-.2-.39-.2-.97.39-1.86 1.07-2.45 2.15z" />
        <path d="M871.32 931.31c-.88 1.47-1.08 3.14-.78 4.71 0 .1.2.2.29.2l.59-.1c.1 0 .2-.2.2-.29-.2-1.28 0-2.65.69-3.92s1.77-2.16 3.04-2.55c.1-.1.2-.2.2-.29l-.2-.59c0-.1-.2-.2-.29-.2-1.59.48-2.96 1.56-3.74 3.03zM882.6 930.03c-.1-.1-.29 0-.39.2l-.2.59c-.1.1 0 .29.2.29.78.29 1.47.88 1.86 1.67.49.78.59 1.67.49 2.55 0 .1.1.29.2.29l.59.1c.1 0 .29-.1.29-.2.2-1.08 0-2.26-.59-3.34-.59-.97-1.47-1.65-2.45-2.15z" />
        <path d="M883.19 928.17c-.1-.1-.29 0-.29.2l-.2.59c-.1.1 0 .29.2.29 1.28.49 2.35 1.37 3.04 2.55.69 1.28.88 2.65.69 3.92 0 .1.1.29.2.29l.59.1c.1 0 .29-.1.29-.2.29-1.57.1-3.24-.78-4.71-1-1.36-2.27-2.44-3.74-3.03zM884.07 937.29v-1.47c0-2.45-1.57-4.32-3.83-4.81v-.59c0-.49-.39-.88-.88-.88h-.49c-.49 0-.88.39-.88.88v.59c-2.35.49-3.83 2.35-3.83 4.81v1.47c0 .78-.29 1.47-.69 2.06-.2.29-.29.49-.29.88v.1c0 .88.69 1.57 1.57 1.57h8.93c.88 0 1.57-.69 1.57-1.57v-.1c0-.29-.1-.59-.29-.88-.6-.58-.89-1.27-.89-2.06zM879.07 944.75c.88 0 1.67-.78 1.67-1.67h-3.34c.1.89.78 1.67 1.67 1.67z" />
      </g>
      {/*fit032*/}
      <g
        onClick={() => {
          sAlarm(45);
        }}
        className={getTemaAlarma(45)}>
        <path d="M1023.98 996.8c-.59 1.08-.78 2.26-.59 3.34 0 .1.2.2.29.2l.59-.1c.1 0 .2-.2.2-.29-.1-.78 0-1.77.49-2.55.49-.78 1.08-1.37 1.86-1.67.1-.1.2-.2.2-.29l-.2-.59c0-.2-.2-.2-.39-.2-.98.39-1.86 1.08-2.45 2.15z" />
        <path d="M1022.32 995.82c-.88 1.47-1.08 3.14-.78 4.71 0 .1.2.2.29.2l.59-.1c.1 0 .2-.2.2-.29-.2-1.28 0-2.65.69-3.92s1.77-2.16 3.04-2.55c.1-.1.2-.2.2-.29l-.2-.59c0-.1-.2-.2-.29-.2-1.59.48-2.96 1.56-3.74 3.03zM1033.6 994.55c-.1-.1-.29 0-.39.2l-.2.59c-.1.1 0 .29.2.29.78.29 1.47.88 1.86 1.67.49.78.59 1.67.49 2.55 0 .1.1.29.2.29l.59.1c.1 0 .29-.1.29-.2.2-1.08 0-2.26-.59-3.34-.59-.97-1.47-1.66-2.45-2.15z" />
        <path d="M1034.19 992.68c-.1-.1-.29 0-.29.2l-.2.59c-.1.1 0 .29.2.29 1.28.49 2.35 1.37 3.04 2.55.69 1.28.88 2.65.69 3.92 0 .1.1.29.2.29l.59.1c.1 0 .29-.1.29-.2.29-1.57.1-3.24-.78-4.71-1-1.36-2.27-2.44-3.74-3.03zM1035.07 1001.81v-1.47c0-2.45-1.57-4.32-3.83-4.81v-.59c0-.49-.39-.88-.88-.88h-.49c-.49 0-.88.39-.88.88v.59c-2.35.49-3.83 2.35-3.83 4.81v1.47c0 .78-.29 1.47-.69 2.06-.2.29-.29.49-.29.88v.1c0 .88.69 1.57 1.57 1.57h8.93c.88 0 1.57-.69 1.57-1.57v-.1c0-.29-.1-.59-.29-.88-.6-.59-.89-1.28-.89-2.06zM1030.07 1009.26c.88 0 1.67-.78 1.67-1.67h-3.34c.1.89.78 1.67 1.67 1.67z" />
      </g>
      {/*ait016*/}
      <g
        onClick={() => {
          sAlarm(51);
        }}
        className={getTemaAlarma(51)}>
        <path d="M1279.86 1011.86c-.59 1.08-.78 2.26-.59 3.34 0 .1.2.2.29.2l.59-.1c.1 0 .2-.2.2-.29-.1-.78 0-1.77.49-2.55.49-.78 1.08-1.37 1.86-1.67.1-.1.2-.2.2-.29l-.2-.59c0-.2-.2-.2-.39-.2-.98.39-1.86 1.07-2.45 2.15z" />
        <path d="M1278.19 1010.88c-.88 1.47-1.08 3.14-.78 4.71 0 .1.2.2.29.2l.59-.1c.1 0 .2-.2.2-.29-.2-1.28 0-2.65.69-3.92s1.77-2.16 3.04-2.55c.1-.1.2-.2.2-.29l-.2-.59c0-.1-.2-.2-.29-.2-1.58.48-2.95 1.56-3.74 3.03zM1289.48 1009.61c-.1-.1-.29 0-.39.2l-.2.59c-.1.1 0 .29.2.29.78.29 1.47.88 1.86 1.67.49.78.59 1.67.49 2.55 0 .1.1.29.2.29l.59.1c.1 0 .29-.1.29-.2.2-1.08 0-2.26-.59-3.34-.59-.98-1.47-1.66-2.45-2.15z" />
        <path d="M1290.06 1007.74c-.1-.1-.29 0-.29.2l-.2.59c-.1.1 0 .29.2.29 1.28.49 2.35 1.37 3.04 2.55.69 1.28.88 2.65.69 3.92 0 .1.1.29.2.29l.59.1c.1 0 .29-.1.29-.2.29-1.57.1-3.24-.78-4.71-.99-1.36-2.26-2.44-3.74-3.03zM1290.95 1016.87v-1.47c0-2.45-1.57-4.32-3.83-4.81v-.59c0-.49-.39-.88-.88-.88h-.49c-.49 0-.88.39-.88.88v.59c-2.35.49-3.83 2.35-3.83 4.81v1.47c0 .78-.29 1.47-.69 2.06-.2.29-.29.49-.29.88v.1c0 .88.69 1.57 1.57 1.57h8.93c.88 0 1.57-.69 1.57-1.57v-.1c0-.29-.1-.59-.29-.88-.6-.59-.89-1.28-.89-2.06zM1285.94 1024.32c.88 0 1.67-.78 1.67-1.67h-3.34c.1.89.79 1.67 1.67 1.67z" />
      </g>
      {/*fit026*/}
      <g
        onClick={() => {
          sAlarm(44);
        }}
        className={getTemaAlarma(44)}>
        <path d="M1152.72 1185.33c-.59 1.08-.78 2.26-.59 3.34 0 .1.2.2.29.2l.59-.1c.1 0 .2-.2.2-.29-.1-.78 0-1.77.49-2.55.49-.78 1.08-1.37 1.86-1.67.1-.1.2-.2.2-.29l-.2-.59c0-.2-.2-.2-.39-.2-.97.38-1.86 1.07-2.45 2.15z" />
        <path d="M1151.06 1184.35c-.88 1.47-1.08 3.14-.78 4.71 0 .1.2.2.29.2l.59-.1c.1 0 .2-.2.2-.29-.2-1.28 0-2.65.69-3.92.69-1.28 1.77-2.16 3.04-2.55.1-.1.2-.2.2-.29l-.2-.59c0-.1-.2-.2-.29-.2-1.58.48-2.96 1.56-3.74 3.03zM1162.34 1183.07c-.1-.1-.29 0-.39.2l-.2.59c-.1.1 0 .29.2.29.78.29 1.47.88 1.86 1.67.49.78.59 1.67.49 2.55 0 .1.1.29.2.29l.59.1c.1 0 .29-.1.29-.2.2-1.08 0-2.26-.59-3.34-.59-.97-1.47-1.66-2.45-2.15z" />
        <path d="M1162.93 1181.21c-.1-.1-.29 0-.29.2l-.2.59c-.1.1 0 .29.2.29 1.28.49 2.35 1.37 3.04 2.55.69 1.28.88 2.65.69 3.92 0 .1.1.29.2.29l.59.1c.1 0 .29-.1.29-.2.29-1.57.1-3.24-.78-4.71-1-1.36-2.27-2.44-3.74-3.03zM1163.81 1190.33v-1.47c0-2.45-1.57-4.32-3.83-4.81v-.59c0-.49-.39-.88-.88-.88h-.49c-.49 0-.88.39-.88.88v.59c-2.35.49-3.83 2.35-3.83 4.81v1.47c0 .78-.29 1.47-.69 2.06-.2.29-.29.49-.29.88v.1c0 .88.69 1.57 1.57 1.57h8.93c.88 0 1.57-.69 1.57-1.57v-.1c0-.29-.1-.59-.29-.88-.59-.59-.89-1.27-.89-2.06zM1158.81 1197.79c.88 0 1.67-.78 1.67-1.67h-3.34c.1.88.78 1.67 1.67 1.67z" />
      </g>
      {/*lit510*/}
      <g
        onClick={() => {
          sAlarm(40);
        }}
        className={getTemaAlarma(40)}>
        <path d="M313.3 1411.4c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .5-1.9 1.2-2.5 2.3z" />
        <path d="M311.6 1410.4c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.3 1.8-2.2 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM322.9 1409.2c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-1.2-1.5-1.9-2.5-2.3z" />
        <path d="M323.5 1407.3c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.4 1.4 3 2.6.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.2-2.5-3.7-3.1zM324.4 1416.4v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.4.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM319.4 1423.9c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>
      {/*pt030*/}
      <g
        onClick={() => {
          sAlarm(34);
        }}
        className={getTemaAlarma(34)}>
        <path d="M559.2 1450.4c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .5-1.9 1.2-2.5 2.3z" />
        <path d="M557.6 1449.4c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.3 1.8-2.2 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-2.9 1.6-3.7 3.1zM568.9 1448.1c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.6-1.8-2.5-2.3z" />
        <path d="M569.5 1446.2c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.3-2.5-3.7-3.1zM570.3 1455.4v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.7-.9-1.3-.9-2.1zM565.3 1462.8c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.7 1.6 1.7z" />
      </g>
      {/*pt061*/}
      <g
        onClick={() => {
          sAlarm(36);
        }}
        className={getTemaAlarma(36)}>
        <path d="M852.2 1452.4c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .5-1.9 1.2-2.5 2.3z" />
        <path d="M850.6 1451.4c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.3 1.8-2.2 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-2.9 1.6-3.7 3.1zM861.9 1450.1c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.6-1.8-2.5-2.3z" />
        <path d="M862.5 1448.2c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.4-2.3-2.5-3.7-3.1zM863.3 1457.4v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.7-.9-1.3-.9-2.1zM858.3 1464.8c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.7 1.6 1.7z" />
      </g>
      {/*fit020*/}
      <g
        onClick={() => {
          sAlarm(54);
        }}
        className={getTemaAlarma(54)}>
        <path d="M682.6 1693.9c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .5-1.9 1.2-2.5 2.3z" />
        <path d="M680.9 1692.9c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.3 1.8-2.2 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1zM692.2 1691.6c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-1.1-1.5-1.8-2.5-2.3z" />
        <path d="M692.8 1689.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7s-2.2-2.5-3.7-3.1zM693.7 1698.9v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM688.7 1706.4c.9 0 1.7-.8 1.7-1.7H687c.1.9.8 1.7 1.7 1.7z" />
      </g>
    </svg>
  );
}

export default Scada;

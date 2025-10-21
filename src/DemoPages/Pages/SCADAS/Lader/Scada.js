import React, { useState, useEffect } from "react";

function Scada(props) {
  const [recirculacionColour, setRecirculacionColour] = useState("#00e098");
  const [recirculacionText, setrecirculacionText] = useState("");

  const [uVColour, setUVColour] = useState("#00e098");
  const [uVText, setUVText] = useState("");

  const [presostatoColour, setPresostatoColour] = useState("#00e098");
  const [presostatoText, setPresostatoText] = useState("");

  const getColor = (x) => {
    const colors = ["#ff2f3e", "#00E098", "#535BD5"];
    try {
      return colors[Number(x)];
    } catch (err) {
      console.error(err);
      return "#3574e0";
    }
  };

  const getText = (x) => {
    const texts = ["Detenido", "Funcionando", "Moviendose", "Falla"];
    try {
      return texts[Number(x)];
    } catch (err) {
      console.error(err);
      return "";
    }
  };

  const update = () => {
    setRecirculacionColour(getColor(props.d1));
    setrecirculacionText(getText(props.d1));
    setUVColour(getColor(props.d1));
    setUVText(getText(props.d1));

    switch (props.d3) {
      case 0:
        setPresostatoColour("#ff2f3e");
        setPresostatoText("OFF");
        break;
      case 1:
        setPresostatoColour("#00E098");
        setPresostatoText("ON");
        break;
      case 2:
        setPresostatoColour("#FBC43B");
        setPresostatoText("Falla");
        break;
      default:
        setPresostatoColour("#3574e0");
        setPresostatoText("");
        break;
    }
  };

  const select = (x) => {
    props.select(x);
  };

  const notificacion = (x) => {
    props.notificacion(x, "");
  };

  useEffect(() => {
    update();
  });

  return (
    <svg
      id="Capa_1"
      x="0px"
      y="0px"
      viewBox="0 0 1400 857.4"
      xmlSpace="preserve">
      <style>
        {`.st0{fill:#fff}.st1{fill:none;stroke:#35ace8;stroke-width:4;stroke-miterlimit:10}.st2{fill:#3574e0}.st3{fill:none;stroke:#323e48;stroke-width:3;stroke-miterlimit:10}.st4{fill:#606060}.st5{font-family:&apos;Sarabun-Regular&apos;}.st6{font-size:9px}.st7{fill:${recirculacionColour}}.st8{fill:${uVColour}}.st9{fill:#35ace8}.st10{fill:none;stroke:#535bd5;stroke-width:2;stroke-miterlimit:10}.st17{font-size:15px}.st18{fill:#f2f2f2}`}
      </style>
      <image
        width={205}
        height={180}
        xlinkHref="data:image/png;base64,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 wMak+nyRAAAAAElFTkSuQmCC"
        transform="translate(1020 328)"
        overflow="visible"
        opacity={0.3}
      />
      <path
        onClick={() => {
          select(2);
        }}
        className={props.selected === 2 ? "st18" : "st0"}
        d="M1114 497.7h-69.2c-5.4 0-9.7-4.4-9.7-9.7v-45.1c0-1.2-.4-2.4-1.1-3.4l-4.5-6.4c-.9-1.3-.9-3 0-4.2l4.4-6.3c.7-1 1.1-2.3 1.1-3.5v-44.8c0-5.4 4.4-9.7 9.7-9.7h51.1c.2-15.8 13.1-28.6 29-28.6s28.8 12.7 29 28.6h51.1c5.4 0 9.7 4.4 9.7 9.7v113.6c0 5.4-4.4 9.7-9.7 9.7H1114z"
      />
      <path
        className="st1"
        d="M885.4 489.7L885.4 445"
      />
      <path
        className="st1"
        d="M462.8 311v-45c0-4 3.2-7.2 7.2-7.2h524.1c5.1 0 9.3 4.2 9.3 9.3v154.5M638 564H455.3c-5.2 0-9.3-4.2-9.3-9.3V496M307 284.8h112.2c4.6 0 8.3 3.7 8.4 8.3l.4 18.9"
      />
      <path
        className="st1"
        d="M926 258.8h-12.2c-4.6 0-8.3 3.7-8.4 8.3L905 311"
      />
      <path
        className="st2"
        d="M390 353H502V440.7H390z"
      />
      <path
        className="st3"
        d="M501.7 336v101.2c0 1.7-.9 3.1-1.9 3.1H392c-1.1 0-1.9-1.4-1.9-3.1V336"
      />
      <text
        transform="translate(431.752 343.659)"
        className="st4 st5 st6">
        {"TK-001"}
      </text>
      <path
        className="st2"
        d="M830 356.4H942V440.79999999999995H830z"
      />
      <path
        className="st3"
        d="M941.7 340v97.3c0 1.6-.9 3-1.9 3H832c-1.1 0-1.9-1.4-1.9-3V340"
      />
      <text
        transform="translate(871.752 347.367)"
        className="st4 st5 st6">
        {"TK-002"}
      </text>
      <path
        className="st7"
        d="M683.7 535.6h-17.4c-1.1-.3-2.3-.4-3.4-.4-8.1 0-14.6 6.6-14.6 14.6 0 4.1 1.7 7.7 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.7c-.1-1.5-1.3-2.6-2.7-2.6zM662.9 560c-5.7 0-10.2-4.6-10.2-10.2 0-5.7 4.6-10.2 10.2-10.2s10.2 4.6 10.2 10.2-4.6 10.2-10.2 10.2z"
      />
      <text
        transform="translate(622.43 585.613)"
        className="st4 st5 st6">
        {"Bomba Recirculaci\xF3n"}
      </text>
      <path
        className="st8"
        d="M1015 401.6L1015 403.6 990.6 403.6 990.6 401.6 1015 401.6"
      />
      <path
        className="st8"
        d="M995.3 398.8L1010.3 398.8 1010.3 401.6 995.3 401.6 995.3 398.8"
      />
      <path
        className="st8"
        d="M999 475.2L999 469.1 993.6 454.1 993.6 403.6 1012.7 403.6 1012.7 454.1 1007.3 469.1 1007.3 475.2z"
      />
      <path
        className="st8"
        d="M1012.7 475.2L1012.7 478.4 992.9 478.4 992.9 475.2 1012.7 475.2"
      />
      <text
        transform="translate(962.26 468.645)"
        className="st4 st5 st6">
        {"UV-001"}
      </text>
      <path
        className="st9"
        d="M635.9 570c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.4-.8.6-1.3.6z"
      />
      <path
        className="st0"
        d="M635.9 558.3c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.7.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c1-1.2.9-2.9-.1-3.9l-4.5-4.5c-.6-.6-1.4-.9-2.1-.9z"
      />
      <path
        className="st9"
        d="M885.1 493.2c-.5 0-.9-.2-1.3-.5l-.1-.1-4.5-4.5c-.5-.5-.7-1.3-.4-2 .3-.7 1-1.2 1.7-1.2h9c.8 0 1.4.5 1.7 1.2.3.7.1 1.5-.4 2l-4.5 4.5c-.2.4-.7.6-1.2.6z"
      />
      <path
        className="st0"
        d="M889.6 486c.8 0 1.2.9.6 1.5l-4.5 4.5c-.2.2-.4.2-.6.2s-.5-.1-.7-.2l-4.5-4.5c-.5-.5-.2-1.5.6-1.5h9.1m0-2h-9c-1.2 0-2.2.7-2.7 1.8-.4 1.1-.2 2.3.6 3.1l4.5 4.5.1.1.1.1c.5.4 1.2.7 1.9.7.8 0 1.5-.3 2-.8l4.5-4.5c.8-.8 1.1-2.1.6-3.1-.4-1.2-1.4-1.9-2.6-1.9z"
      />
      <path
        className="st1"
        d="M446.4 503L446.4 445"
      />
      <path
        className="st1"
        d="M1003.4 541L1003.4 489"
      />
      <path
        className="st10"
        d="M887 315.1L887 314.1"
      />
      <path
        fill="none"
        stroke="#535bd5"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeDasharray="2.0309,2.0309"
        d="M887 312.1L887 240"
      />
      <path
        className="st10"
        d="M887 239L887 238"
      />
      <path
        d="M890 315c0 1.7-1.3 3-3 3s-3-1.3-3-3 1.3-3 3-3 3 1.3 3 3z"
        fill="#535bd5"
      />
      <path
        className="st9"
        d="M446.1 493.2c-.5 0-.9-.2-1.3-.5l-.1-.1-4.5-4.5c-.5-.5-.7-1.3-.4-2 .3-.7 1-1.2 1.7-1.2h9c.8 0 1.4.5 1.7 1.2.3.7.1 1.5-.4 2l-4.5 4.5c-.2.4-.7.6-1.2.6z"
      />
      <path
        className="st0"
        d="M450.6 486c.8 0 1.2.9.6 1.5l-4.5 4.5c-.2.2-.4.2-.6.2s-.5-.1-.7-.2l-4.5-4.5c-.5-.5-.2-1.5.6-1.5h9.1m0-2h-9c-1.2 0-2.2.7-2.7 1.8-.4 1.1-.2 2.3.6 3.1l4.5 4.5.1.1.1.1c.5.4 1.2.7 1.9.7.8 0 1.5-.3 2-.8l4.5-4.5c.8-.8 1.1-2.1.6-3.1-.4-1.2-1.4-1.9-2.6-1.9z"
      />
      <path
        className="st9"
        d="M998.6 491c-.8 0-1.4-.5-1.7-1.2-.3-.7-.1-1.5.4-2l4.5-4.5c.3-.3.8-.5 1.3-.5s.9.2 1.3.5l.1.1 4.5 4.5c.5.5.7 1.3.4 2-.3.7-1 1.2-1.7 1.2h-9.1z"
      />
      <path
        className="st0"
        d="M1003.1 483.8c.2 0 .5.1.7.2l4.5 4.5c.5.5.2 1.5-.6 1.5h-9c-.8 0-1.2-.9-.6-1.5l4.5-4.5c0-.1.2-.2.5-.2m0-2c-.8 0-1.5.3-2 .8l-4.5 4.5c-.8.8-1.1 2.1-.6 3.1.4 1.1 1.5 1.8 2.7 1.8h9c1.2 0 2.2-.7 2.7-1.8.4-1.1.2-2.3-.6-3.1l-4.5-4.5-.1-.1-.1-.1c-.7-.4-1.3-.6-2-.6z"
      />
      <image
        width={205}
        height={180}
        xlinkHref="data:image/png;base64,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"
        transform="translate(145 328)"
        overflow="visible"
        opacity={0.3}
      />
      <path
        onClick={() => {
          select(3);
        }}
        className={props.selected === 3 ? "st18" : "st0"}
        d="M254.6 497.7h69.2c5.4 0 9.7-4.4 9.7-9.7v-45.1c0-1.2.4-2.4 1.1-3.4l4.5-6.4c.9-1.3.9-3 0-4.2l-4.4-6.3c-.7-1-1.1-2.3-1.1-3.5v-44.8c0-5.4-4.4-9.7-9.7-9.7h-51.1c-.2-15.8-13.1-28.6-29-28.6s-28.8 12.7-29 28.6h-51.1c-5.4 0-9.7 4.4-9.7 9.7v113.6c0 5.4 4.4 9.7 9.7 9.7h90.9z"
      />
      <text
        transform="translate(227.466 447.857)"
        className="st4 st5 st17">
        {presostatoText}
      </text>
      <text transform="translate(184.746 408.113)">
        <tspan
          x={0}
          y={0}
          className="st2 st5 st17">
          {"Estado Presostato"}
        </tspan>
        <tspan
          x={-7.6}
          y={18}
          className="st2 st5 st17">
          {"de Bomba Impulsi\xF3n"}
        </tspan>
      </text>
      <g
        onClick={() => {
          notificacion(3);
        }}>
        <path
          className="st2"
          d="M236 468.9c-.7 1.3-1 2.8-.7 4.2 0 .1.2.2.4.2l.7-.1c.1 0 .2-.2.2-.4-.1-1 0-2.2.6-3.2s1.3-1.7 2.3-2.1c.1-.1.2-.2.2-.4l-.2-.7c0-.2-.2-.2-.5-.2-1.2.5-2.3 1.3-3 2.7z"
        />
        <path
          className="st2"
          d="M233.9 467.6c-1.1 1.8-1.3 3.9-1 5.9 0 .1.2.2.4.2l.7-.1c.1 0 .2-.2.2-.4-.2-1.6 0-3.3.9-4.9.9-1.6 2.2-2.7 3.8-3.2.1-.1.2-.2.2-.4l-.2-.7c0-.1-.2-.2-.4-.2-1.9.7-3.6 2-4.6 3.8zM248 466c-.1-.1-.4 0-.5.2l-.2.7c-.1.1 0 .4.2.4 1 .4 1.8 1.1 2.3 2.1.6 1 .7 2.1.6 3.2 0 .1.1.4.2.4l.7.1c.1 0 .4-.1.4-.2.2-1.3 0-2.8-.7-4.2-.7-1.2-1.8-2-3-2.7z"
        />
        <path
          className="st2"
          d="M248.8 463.7c-.1-.1-.4 0-.4.2l-.2.7c-.1.1 0 .4.2.4 1.6.6 2.9 1.7 3.8 3.2.9 1.6 1.1 3.3.9 4.9 0 .1.1.4.2.4l.7.1c.1 0 .4-.1.4-.2.4-2 .1-4-1-5.9-1.2-1.7-2.8-3-4.6-3.8zM249.9 475.1v-1.8c0-3.1-2-5.4-4.8-6v-.7c0-.6-.5-1.1-1.1-1.1h-.6c-.6 0-1.1.5-1.1 1.1v.7c-2.9.6-4.8 2.9-4.8 6v1.8c0 1-.4 1.8-.9 2.6-.2.4-.4.6-.4 1.1v.1c0 1.1.9 2 2 2h11.2c1.1 0 2-.9 2-2v-.1c0-.4-.1-.7-.4-1.1-.8-.7-1.1-1.6-1.1-2.6zM243.6 484.4c1.1 0 2.1-1 2.1-2.1h-4.2c.1 1.2 1 2.1 2.1 2.1z"
        />
      </g>
      <circle
        cx={243.7}
        cy={365}
        r={21}
        fill={presostatoColour}
      />
      <text
        transform="translate(1085.198 447.857)"
        className="st4 st5 st17">
        {uVText}
      </text>
      <text transform="translate(1103.48 408.113)">
        <tspan
          x={0}
          y={0}
          className="st2 st5 st17">
          {"Estado "}
        </tspan>
        <tspan
          x={-11.5}
          y={18}
          className="st2 st5 st17">
          {"Equipo UV"}
        </tspan>
      </text>
      <g
        onClick={() => {
          notificacion(2);
        }}>
        <path
          className="st2"
          d="M1118 468.9c-.7 1.3-1 2.8-.7 4.2 0 .1.2.2.4.2l.7-.1c.1 0 .2-.2.2-.4-.1-1 0-2.2.6-3.2s1.3-1.7 2.3-2.1c.1-.1.2-.2.2-.4l-.2-.7c0-.2-.2-.2-.5-.2-1.2.5-2.3 1.3-3 2.7z"
        />
        <path
          className="st2"
          d="M1115.9 467.6c-1.1 1.8-1.3 3.9-1 5.9 0 .1.2.2.4.2l.7-.1c.1 0 .2-.2.2-.4-.2-1.6 0-3.3.9-4.9.9-1.6 2.2-2.7 3.8-3.2.1-.1.2-.2.2-.4l-.2-.7c0-.1-.2-.2-.4-.2-1.9.7-3.6 2-4.6 3.8zM1130 466c-.1-.1-.4 0-.5.2l-.2.7c-.1.1 0 .4.2.4 1 .4 1.8 1.1 2.3 2.1.6 1 .7 2.1.6 3.2 0 .1.1.4.2.4l.7.1c.1 0 .4-.1.4-.2.2-1.3 0-2.8-.7-4.2-.7-1.2-1.8-2-3-2.7z"
        />
        <path
          className="st2"
          d="M1130.8 463.7c-.1-.1-.4 0-.4.2l-.2.7c-.1.1 0 .4.2.4 1.6.6 2.9 1.7 3.8 3.2.9 1.6 1.1 3.3.9 4.9 0 .1.1.4.2.4l.7.1c.1 0 .4-.1.4-.2.4-2 .1-4-1-5.9-1.2-1.7-2.8-3-4.6-3.8zM1131.9 475.1v-1.8c0-3.1-2-5.4-4.8-6v-.7c0-.6-.5-1.1-1.1-1.1h-.6c-.6 0-1.1.5-1.1 1.1v.7c-2.9.6-4.8 2.9-4.8 6v1.8c0 1-.4 1.8-.9 2.6-.2.4-.4.6-.4 1.1v.1c0 1.1.9 2 2 2h11.2c1.1 0 2-.9 2-2v-.1c0-.4-.1-.7-.4-1.1-.8-.7-1.1-1.6-1.1-2.6zM1125.6 484.4c1.1 0 2.1-1 2.1-2.1h-4.2c.1 1.2 1 2.1 2.1 2.1z"
        />
      </g>
      <circle
        className="st8"
        cx={1125.7}
        cy={365}
        r={21}
      />
      <g>
        <circle
          cx={363.9}
          cy={430.2}
          r={10.8}
          fill="#fff"
          stroke={presostatoColour}
          strokeWidth={4}
          strokeMiterlimit={10}
        />
        <text
          transform="translate(350.248 454.645)"
          className="st4 st5 st6">
          {"PT 201"}
        </text>
      </g>
      <g>
        <path
          className="st9"
          d="M304.9 291c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.4-.8.6-1.3.6z"
        />
        <path
          className="st0"
          d="M304.9 279.3c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.7.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c1-1.2.9-2.9-.1-3.9l-4.5-4.5c-.6-.6-1.4-.9-2.1-.9z"
        />
      </g>
      <g>
        <path
          className="st9"
          d="M428.1 319.2c-.5 0-.9-.2-1.3-.5l-.1-.1-4.5-4.5c-.5-.5-.7-1.3-.4-2 .3-.7 1-1.2 1.7-1.2h9c.8 0 1.4.5 1.7 1.2.3.7.1 1.5-.4 2l-4.5 4.5c-.2.4-.7.6-1.2.6z"
        />
        <path
          className="st0"
          d="M432.6 312c.8 0 1.2.9.6 1.5l-4.5 4.5c-.2.2-.4.2-.6.2s-.5-.1-.7-.2l-4.5-4.5c-.6-.5-.2-1.5.6-1.5h9.1m0-2h-9c-1.2 0-2.2.7-2.7 1.8-.4 1.1-.2 2.3.6 3.1l4.5 4.5.1.1.1.1c.5.4 1.2.7 1.9.7.8 0 1.5-.3 2-.8l4.5-4.5c.8-.8 1.1-2.1.6-3.1-.4-1.2-1.4-1.9-2.6-1.9z"
        />
      </g>
      <g>
        <path
          className="st9"
          d="M463.1 319.2c-.5 0-.9-.2-1.3-.5l-.1-.1-4.5-4.5c-.5-.5-.7-1.3-.4-2 .3-.7 1-1.2 1.7-1.2h9c.8 0 1.4.5 1.7 1.2.3.7.1 1.5-.4 2l-4.5 4.5c-.2.4-.7.6-1.2.6z"
        />
        <path
          className="st0"
          d="M467.6 312c.8 0 1.2.9.6 1.5l-4.5 4.5c-.2.2-.4.2-.6.2s-.5-.1-.7-.2l-4.5-4.5c-.6-.5-.2-1.5.6-1.5h9.1m0-2h-9c-1.2 0-2.2.7-2.7 1.8-.4 1.1-.2 2.3.6 3.1l4.5 4.5.1.1.1.1c.5.4 1.2.7 1.9.7.8 0 1.5-.3 2-.8l4.5-4.5c.8-.8 1.1-2.1.6-3.1-.4-1.2-1.4-1.9-2.6-1.9z"
        />
      </g>
      <path
        className="st1"
        d="M407 284.8h454.6c4.7 0 8.5 3.7 8.7 8.4l.7 18.8M545 550v-28.3c0-4.8 3.9-8.7 8.7-8.7h322c5.2 0 9.3-4.2 9.3-9.3V495"
      />
      <g>
        <path
          className="st9"
          d="M545.1 558.2c-.5 0-.9-.2-1.3-.5l-.1-.1-4.5-4.5c-.5-.5-.7-1.3-.4-2 .3-.7 1-1.2 1.7-1.2h9c.8 0 1.4.5 1.7 1.2.3.7.1 1.5-.4 2l-4.5 4.5c-.2.4-.7.6-1.2.6z"
        />
        <path
          className="st0"
          d="M549.6 551c.8 0 1.2.9.6 1.5l-4.5 4.5c-.2.2-.4.2-.6.2s-.5-.1-.7-.2l-4.5-4.5c-.5-.5-.2-1.5.6-1.5h9.1m0-2h-9c-1.2 0-2.2.7-2.7 1.8-.4 1.1-.2 2.3.6 3.1l4.5 4.5.1.1.1.1c.5.4 1.2.7 1.9.7.8 0 1.5-.3 2-.8l4.5-4.5c.8-.8 1.1-2.1.6-3.1-.4-1.2-1.4-1.9-2.6-1.9z"
        />
      </g>
      <path
        className="st1"
        d="M689 540L1053.6 540"
      />
      <g>
        <path
          className="st9"
          d="M746.9 546.5c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.4-.8.6-1.3.6z"
        />
        <path
          className="st0"
          d="M746.9 534.7c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c1-1.2.9-2.9-.1-3.9l-4.5-4.5c-.6-.6-1.4-.9-2.1-.9z"
        />
      </g>
      <g>
        <path
          className="st9"
          d="M1051.9 546.5c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.4-.8.6-1.3.6z"
        />
        <path
          className="st0"
          d="M1051.9 534.7c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c1-1.2.9-2.9-.1-3.9l-4.5-4.5c-.6-.6-1.4-.9-2.1-.9z"
        />
      </g>
      <ellipse
        cx={885.5}
        cy={540.2}
        rx={10.5}
        ry={10.8}
        fill="#fff"
        stroke="#00e098"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
      <g>
        <text
          transform="translate(873.1 564.645)"
          className="st4 st5 st6">
          {"PI 202"}
        </text>
      </g>
      <g>
        <path
          className="st9"
          d="M871.1 319.2c-.5 0-.9-.2-1.3-.5l-.1-.1-4.5-4.5c-.5-.5-.7-1.3-.4-2 .3-.7 1-1.2 1.7-1.2h9c.8 0 1.4.5 1.7 1.2.3.7.1 1.5-.4 2l-4.5 4.5c-.2.4-.7.6-1.2.6z"
        />
        <path
          className="st0"
          d="M875.6 312c.8 0 1.2.9.6 1.5l-4.5 4.5c-.2.2-.4.2-.6.2s-.5-.1-.7-.2l-4.5-4.5c-.6-.5-.2-1.5.6-1.5h9.1m0-2h-9c-1.2 0-2.2.7-2.7 1.8-.4 1.1-.2 2.3.6 3.1l4.5 4.5.1.1.1.1c.5.4 1.2.7 1.9.7.8 0 1.5-.3 2-.8l4.5-4.5c.8-.8 1.1-2.1.6-3.1-.4-1.2-1.4-1.9-2.6-1.9z"
        />
      </g>
      <g>
        <path
          className="st9"
          d="M905.1 319.2c-.5 0-.9-.2-1.3-.5l-.1-.1-4.5-4.5c-.5-.5-.7-1.3-.4-2 .3-.7 1-1.2 1.7-1.2h9c.8 0 1.4.5 1.7 1.2.3.7.1 1.5-.4 2l-4.5 4.5c-.2.4-.7.6-1.2.6z"
        />
        <path
          className="st0"
          d="M909.6 312c.8 0 1.2.9.6 1.5l-4.5 4.5c-.2.2-.4.2-.6.2s-.5-.1-.7-.2l-4.5-4.5c-.6-.5-.2-1.5.6-1.5h9.1m0-2h-9c-1.2 0-2.2.7-2.7 1.8-.4 1.1-.2 2.3.6 3.1l4.5 4.5.1.1.1.1c.5.4 1.2.7 1.9.7.8 0 1.5-.3 2-.8l4.5-4.5c.8-.8 1.1-2.1.6-3.1-.4-1.2-1.4-1.9-2.6-1.9z"
        />
      </g>
      <path
        className="st0"
        d="M997.6 408H1008.6V455H997.6z"
      />
      <g>
        <image
          width={199}
          height={159}
          xlinkHref="data:image/png;base64,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 AAAASUVORK5CYII="
          transform="translate(789 91)"
          overflow="visible"
          opacity={0.3}
        />
        <path
          onClick={() => {
            select(0);
          }}
          className={props.selected === 0 ? "st18" : "st0"}
          d="M967.4 232.7h-69.2c-2 0-4 .7-5.5 2.1-5.8 5.8-5.8 5.8-10.7.2l-.6-.5c-1.5-1.2-3.3-1.9-5.2-1.9h-69c-5.4 0-9.7-4.4-9.7-9.7V109.3c0-5.4 4.4-9.7 9.7-9.7h160.2c5.4 0 9.7 4.4 9.7 9.7v113.6c.1 5.4-4.3 9.8-9.7 9.8z"
        />
        <text
          transform="translate(858.554 178.857)"
          className="st5"
          fontSize="20px"
          fill="gray">
          {`${props.d0} %`}
        </text>
        <text transform="translate(870.697 129.113)">
          <tspan
            x={0}
            y={0}
            className="st2 st5 st17">
            {"Nivel"}
          </tspan>
          <tspan
            x={-57.7}
            y={18}
            className="st2 st5 st17">
            {"Estanque Acumulaci\xF3n"}
          </tspan>
        </text>
        <g
          onClick={() => {
            notificacion(0);
          }}>
          <path
            className="st2"
            d="M879.6 203.9c-.7 1.3-1 2.8-.7 4.2 0 .1.2.2.4.2l.7-.1c.1 0 .2-.2.2-.4-.1-1 0-2.2.6-3.2s1.3-1.7 2.3-2.1c.1-.1.2-.2.2-.4l-.2-.7c0-.2-.2-.2-.5-.2-1.1.5-2.2 1.3-3 2.7z"
          />
          <path
            className="st2"
            d="M877.6 202.6c-1.1 1.8-1.3 3.9-1 5.9 0 .1.2.2.4.2l.7-.1c.1 0 .2-.2.2-.4-.2-1.6 0-3.3.9-4.9s2.2-2.7 3.8-3.2c.1-.1.2-.2.2-.4l-.2-.7c0-.1-.2-.2-.4-.2-1.9.7-3.7 2-4.6 3.8zM891.7 201c-.1-.1-.4 0-.5.2l-.2.7c-.1.1 0 .4.2.4 1 .4 1.8 1.1 2.3 2.1.6 1 .7 2.1.6 3.2 0 .1.1.4.2.4l.7.1c.1 0 .4-.1.4-.2.2-1.3 0-2.8-.7-4.2-.7-1.2-1.8-2-3-2.7z"
          />
          <path
            className="st2"
            d="M892.4 198.7c-.1-.1-.4 0-.4.2l-.2.7c-.1.1 0 .4.2.4 1.6.6 2.9 1.7 3.8 3.2.9 1.6 1.1 3.3.9 4.9 0 .1.1.4.2.4l.7.1c.1 0 .4-.1.4-.2.4-2 .1-4-1-5.9-1.2-1.7-2.8-3-4.6-3.8zM893.5 210.1v-1.8c0-3.1-2-5.4-4.8-6v-.7c0-.6-.5-1.1-1.1-1.1h-.6c-.6 0-1.1.5-1.1 1.1v.7c-2.9.6-4.8 2.9-4.8 6v1.8c0 1-.4 1.8-.9 2.6-.2.4-.4.6-.4 1.1v.1c0 1.1.9 2 2 2H893c1.1 0 2-.9 2-2v-.1c0-.4-.1-.7-.4-1.1-.7-.7-1.1-1.6-1.1-2.6zM887.2 219.4c1.1 0 2.1-1 2.1-2.1h-4.2c.2 1.2 1 2.1 2.1 2.1z"
          />
        </g>
      </g>
      <g>
        <image
          width={199}
          height={187}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMcAAAC7CAYAAADR5Yp8AAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAADVlJREFUeNrsnYl24kgSRVNCBry2 q7p6+f/Pm6XbXS5jjA0aNBMxfgQpIVOuNoL7zokDVNnCpPJmLLmQEkIoq4ImGET71zQVcJxCOxdv vAd1x2ugAY5Bt22ReV7s6TnqYCnziN5JFU3wQ4FwK80KeYygdIGhthLTf8Ob4DkOHooyADEKVgbr A4cCscxYhKUGEuA4NCgUiCrYmVkVQOnyHuoZHITnYC9iS4FkhSchrPpIMHIe4kxsbDYx89cOTNkB SAyjXgyGhdl8bU9m/m/PAkkBIHiOj2qz6CUUhqnYeXhUQByoLs/hHuPFAGhgeBSbyfN5BpIVkOA5 /k5vUWSgcAAau1zbRXj0/3MPcibeY5fnUK8xNyAezL6JzcwiJAoGgADHDw2jHAyHwgG4Mrs289cO SRccXcl4Do4Ghnuzv9b2VV4/CCT+dy/xIMDxo8FwbzERL9GAcLO2n8RuBBCHY2q/p4l5H88Rwyr3 HPcGxZ3YucHi7/Fov+NeBECA44eBod7iykC4XdsnsVuBI4LhXkPLuqkFjhQS8hfr6Oo9vmbeaxLy GvVOnsMACHC8OxjqLRoIPq/tZ7FP4jmuJBFXjxErVTHZrzOhlZZyHZBrscuecDwLJAACHO8Oxk8G wRezX+zxs/37TaajtoVSfeDQku5S8o+LjE175DVxZh1AgGMvQHzuYipgfDYgfjVzOD4Fj5EbwWOO 0XfhoQLiFTKfP5kKFDkY2yYayUGAYy8otCo1sVH52gBoYPhtbb8LHB5OKRieW7Ql3m9deFja8zgD Hycez0JeUwSPkTMEHHuHU1eWY3wxIH43+8VyDQVjnOmc+4LhP1unzQnIVWpfqjLqAGOVthcvpvAc AUeryo5w6ksmnLrNgLFPCLULENUoba/pKjPhW0zqX9LmosW2JfDAQRNkwyn1GhdSmfrZgPhFPMat /f+F5BexcxY/4O+sJcyKHq/oACMuVlQPsqQLAMeukKrLa3yRypSHUhfBY/Tdq/G9f6t6uraJRK1w 6cJF1mABx3flGu41vHSrcxk3HaFUSn/fos7onc464PDlJ26+olcBwXsAR2tHU6+hIZXPYeSqUtUH gZELsxSQuPSkAcJX8vpqXl2kyPqrkNShzXDKq1Netm1CKC/b/iZ5hsORq0p91GfoevSwyT3IU9rc DxIT9AQcSD3GKL3OadyYt/jVoND5jFwC/pFgpBaPFWfFlwEODa10YSKAiBsGjs2QygHx5ec3kmP4 Eg33GMWBgJHLncq0vYL4Ruw6fJ5DAp2c48A6U8w34t6MXEcqD/QzpfCZJi2f6TK97lDctb8Ez3Gi gOhejamMtFcCxnnanstIB9yZFPpx8CBtn2uE5wCOnOeopBP57r7L0IEOJQHv+7l0S2/cuXgpnmOS dm/AIqx6x4RwSF4jdqDz9LoMPLfCthjg5/Pwapo2l7nHhZJDhqP+aDi+5+zXIYKRi8mLgXy+trBx Kp8vbshqKldDnO+o03aFbm9oqu9o7NyRlkMbaYrMiDoNYLR5jSGNrNF7xEEgAvKSNtduDQ2QlNqX 5NfvDUfXcZdx9WkxQDjGIVHtyjWGGm7k9sHHo4QaezKvMRJI6gGB0Xam8JuPS616Nmosd45kFM3t chtKmKVwNB0jnhzSlawOCYq23MP3qfhcTjMpuLSfeUqby0mGkF/E7cR6IF48V3inF6l6ghE31YzF dNdZbmQdEhxNB2lbWFgN2EPm8iud92gGhJl1otI+82JgcLg3UCB8NYA+xlXI9T5wxBKnN+hE3PG5 /NsQKx2ac/h6Kl+aHjcwDdFr5O5nnBRsBoHHAMYsbS9EHEI4FVcg+xKZuBJZT4JsBaTqCUacGIuH lbVNjg3Bc+gSCz1ZxNdQ5TxHGjAgZdreq+JgTOz1o4yw9YFDkaST6+mQvgJZj019sMFhHq6TBaTL c+S2iuqpfrdp+6SNs9T/eycOLdQYhxhcl6VrMj5UKFImrLpMryeyj+31Y3rd4zGUfeXxNPqFgOGn Qv4lEUDumKKtHKTq6DBtI+rPFnp8FkAuQtI6lLi8CKNpnEGO0A8132irWF1IP5javXwKXqMeABjx 0O0ngaOB4s/0uiauzABV5waCakc4pXsb9OSNXyVxvW6BIw0Ejjii6ndqjI8k32grQujAcJ62dwWm gcCRQjLunuNb6J8jCaPiN2P5BGLdx3Oo6/W9Dc1+Bt/040nrdUvSOqQJsvglNF3H3BxDaJUrSCzT 9oELQ5vf0IT8yTyHl+O9ry9D9aq18FB1xOC7TvnzHXGXoVo11Bnz3MRm/JLLY1AhgOhgsOpT3jxw zxFDK93GnNLmQdyPoXq15S2rzMiibndqSelN2jxgwPOOXdWcIc4FdC2LKY4AjDoDyJBPP2w7dHsi 0YyDEb/bxL/wpzJAOsOqXPnWa+G3Yl6lumxJxIfceXY9PwbPkQMmDSTH6BteVTIALCXMaqC4S5ub vLI5ZZ+wyis3cfdY2zLnY+1Ex6biSD93HfriyvKLuG6ua5l+NqyKs6hercqt/c99/wPbKxkIDunz 1Kl9Zcc0tX+HyVblIial+mWQk5Q/3r4EDHSgYMS1ZNqXu06ib4Wj66IKxVD2UKPTBaTte+L7lOmL lOncuy6YW3kLGGgokOjWirZ9SEXOcxRvuCChFBoqJEXfPly+4YLAgI4lF+kV9ZRvuGACEDRgr/Hm /lvuQR6QoGP1JL3gIOFGJy9OPEQIOBACDoSAAyHgQAg4EAIOhIADIeBACDgQAg6EgAMhBBwIAQdC wIEQcCAEHAgBB0LAgRBwIAQcCAEHQsCBEAIOhIADIeBACDgQAg6EgAMh4EAIOBACDoSAAyHgQAgB B0LAgRBwIAQcCAEHQsCBEHAgBBwIAQdCwIEQcCCEgAMh4EAIOBACDoSAAyHgQAg4EAIOhIADIeBA CDgQAg6EEHAgBBwIAQdCwIEQcCAEHAgBB0LAgRBwIAQcCAEHQgg4EAIOhIADIeBACDgQAg6EgAMh 4EAIOBACDoSAAyEEHAgBB0LAgRBwIAQcCAEHQsCBEHAgBBwIAQdCwIEQAg6EgAMh4EAIOBACDoSA AyHgQAg4EAIOhIADIeBACLXCUZsleUQIODqAycGD0EnCUWcegQIdg3b26XLHL+cMoaFBsNfgXnaQ 1NhqbUt7VAMWdAyeou4DR/xFBaGB48VsGQAhYUdD8h6xf3cO8GXLhSIUz2YREgBBQ4HC+/RyRxRU t8GhF3IoFmt7EnsGEDQgKJZhoH8JfXiZ8SL/faxawPCLNWDMzR7l+cLeoPn9wn6/4J50qnjnm4+6 20c9RW6Q9z4cB/n/q+q46LNdpIHiweybPV6s7WxtI7vptXmhAkhaoahD2xR7wlADSS+voX3YB/eZ 9d9Hs6cuQHbBMbcLNlB8Nbta21S8xkpAKb+jAxwzHEXwsH3bKFdBzL0GiM3n7jGepP/eW/+9t9ez kCZsJegxrCoy1D3YRe/WdmlgnNnP+s9N7FplpiMAxf+sDNYFSVtZvS2RrIEj6zXmBsKfa/vDHpt+ /Jd4kMX3eA6H49wgUDA8J5lkvEdxwlCkDBCVtc9Inre1Vd2SA2pyGUE59TArFpMW1vnvDYx/mv3b ALkXOF76wKGAPItb+mqdvxIw3KtcGThjufmn7Dn8MysUlbXfmbXTmbRnhCQHxbMklbGs7oCcMhx1 CKleQt/908D4h8DxLXiOuius0jdZCQCjcANXdsGZ0XcpXiWGVqcKh3sN9xJja59psLFAUgocsZQ+ D/YkI16uFHmqXiPC8WB99M6gaOxfElbNQ0KednmOlAmt9Ma9SCx3J3CM5SaXJx5WFTKoOBjnVuW7 NG97YTYVr6s530IKIjOpFM6k0rKQUOvUcw/Ny7TS+s1guJN8497acdE1uFQdLmolNynetMfgNaZh BCxPuGKlcLjXmBoI12Y3ZgspcoylnReS791LpfBebuw8eI9ThaMOg3rMOWbSjjrAaBk3227VDgq7 vMk3u6kTCQ9IyPNwnBsEDRg/re1TGP0vrR1La+dYJbyzuNlHvYeQTOI5tnM19x7uQdx0ErszJK16 uKnU8qazEDNrMn7Kcx2ac3giPhU4bmX08vxhbj8zsjaeGwRegnS7EzjmqaNGf6KeIy4Z0ULGIkCx M1eresZxOSoViFFHrnGqSbkn5GeSc1yHvGEu4dOFwOFVlj8kkVTPsXN290ThiLmHlsDb1lK1tlv1 hjdfZQDJTWqd+qx4LOWOJO+YZcDw/K0LDvUamm/oCtOUmAyMlavcxGnveaHqjW9YCChFyi+NSMCx lXs8pc0SrJuHp9cZOO4l17gLucZzS64BHJvt0LaTtVc7VXu+qT4njOrOPeJ+mGcxnUiNOUdcD/QQ KlTsyOwfZqV9Bo/qHf6AOnQIblQ+xMrtrlxICBWrVVqGnKXNiT9CqbcBspeqQ/yjjuwmFWl7eYLm bY/pdW2aw6FlSC09AsYHjGzo7wuzdFnJmVicIX8O4RjLRIDjZABxSPSxSNunvsRDLQADOE4iD1FY 4n6OOL9EGAUcJ9f2sRT+5vOVEHCc4j0ACoQQQmgw+o8AAwBrYUDEA0nqVQAAAABJRU5ErkJggg=="
          transform="translate(567 350)"
          overflow="visible"
          opacity={0.3}
        />
        <path
          onClick={() => {
            select(1);
          }}
          className={props.selected === 1 ? "st18" : "st0"}
          d="M745.8 386.6h-51.1c-.2-15.8-13.1-28.6-29-28.6s-28.8 12.7-29 28.6h-51.1c-5.4 0-9.7 4.4-9.7 9.7v113.6c0 5.4 4.4 9.7 9.7 9.7h69c1.9 0 3.7.7 5.2 1.9l.6.5c5 5.6 5 5.6 10.7-.2 1.5-1.4 3.5-2.1 5.5-2.1h69.2c5.4 0 9.7-4.4 9.7-9.7V396.3c0-5.4-4.4-9.7-9.7-9.7z"
        />
      </g>
      <text
        transform="translate(623.388 469.857)"
        className="st4 st5 st17">
        {recirculacionText}
      </text>
      <g>
        <text transform="translate(618.85 430.113)">
          <tspan
            x={0}
            y={0}
            className="st2 st5 st17">
            {"Estado Bomba"}
          </tspan>
          <tspan
            x={3.2}
            y={18}
            className="st2 st5 st17">
            {"Recirculaci\xF3n"}
          </tspan>
        </text>
      </g>
      <g
        onClick={() => {
          notificacion(1);
        }}>
        <path
          className="st2"
          d="M658 490.9c-.7 1.3-1 2.8-.7 4.2 0 .1.2.2.4.2l.7-.1c.1 0 .2-.2.2-.4-.1-1 0-2.2.6-3.2s1.3-1.7 2.3-2.1c.1-.1.2-.2.2-.4l-.2-.7c0-.2-.2-.2-.5-.2-1.2.5-2.3 1.3-3 2.7z"
        />
        <path
          className="st2"
          d="M655.9 489.6c-1.1 1.8-1.3 3.9-1 5.9 0 .1.2.2.4.2l.7-.1c.1 0 .2-.2.2-.4-.2-1.6 0-3.3.9-4.9.9-1.6 2.2-2.7 3.8-3.2.1-.1.2-.2.2-.4l-.2-.7c0-.1-.2-.2-.4-.2-1.9.7-3.6 2-4.6 3.8zM670 488c-.1-.1-.4 0-.5.2l-.2.7c-.1.1 0 .4.2.4 1 .4 1.8 1.1 2.3 2.1.6 1 .7 2.1.6 3.2 0 .1.1.4.2.4l.7.1c.1 0 .4-.1.4-.2.2-1.3 0-2.8-.7-4.2-.7-1.2-1.8-2-3-2.7z"
        />
        <path
          className="st2"
          d="M670.8 485.7c-.1-.1-.4 0-.4.2l-.2.7c-.1.1 0 .4.2.4 1.6.6 2.9 1.7 3.8 3.2.9 1.6 1.1 3.3.9 4.9 0 .1.1.4.2.4l.7.1c.1 0 .4-.1.4-.2.4-2 .1-4-1-5.9-1.2-1.7-2.8-3-4.6-3.8zM671.9 497.1v-1.8c0-3.1-2-5.4-4.8-6v-.7c0-.6-.5-1.1-1.1-1.1h-.6c-.6 0-1.1.5-1.1 1.1v.7c-2.9.6-4.8 2.9-4.8 6v1.8c0 1-.4 1.8-.9 2.6-.2.4-.4.6-.4 1.1v.1c0 1.1.9 2 2 2h11.2c1.1 0 2-.9 2-2v-.1c0-.4-.1-.7-.4-1.1-.8-.7-1.1-1.6-1.1-2.6zM665.6 506.4c1.1 0 2.1-1 2.1-2.1h-4.2c.1 1.2 1 2.1 2.1 2.1z"
        />
      </g>
      <circle
        className="st7"
        cx={665.7}
        cy={387}
        r={21}
      />
    </svg>
  );
}

export default Scada;

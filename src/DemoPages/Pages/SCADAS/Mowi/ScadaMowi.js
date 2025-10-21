import * as React from "react";
import {
  getColor,
  getColorConexion,
  getConexion,
  getScaledValue,
  getTarjetaClass,
  getTemaAlarma
} from "../../../../commons/scada/scada";

const ScadaMowi = (props) => {
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
      viewBox="0 0 1429.5 1605.8"
      style={{
        enableBackground: "new 0 0 1429.5 1605.8"
      }}
      xmlSpace="preserve"
      {...props}>
      <style>
        {
          ".st1{fill:#fff}.st2{opacity:.15;fill:#0e76e7;enable-background:new}.st6{fill:#3574e0}.st9{fill:#666}.st11{font-size:14px}.st12{fill:#606060}.st14{font-size:17px}.st17{fill:none;stroke:#00aeed;stroke-width:4;stroke-miterlimit:10}.st18{fill:#0e76e7}.st19{fill:none;stroke:#2f3e49;stroke-width:4;stroke-miterlimit:10}.st20{fill:#2f3e49}.st21{fill:#00aeed}.st22{font-size:11px}.st23{font-size:13px}.st24{font-size:16px}.st25{fill:#323e48}.st26,.st27,.st28{fill:none;stroke:#323e48;stroke-width:4;stroke-miterlimit:10}.st27,.st28{stroke:#fff;stroke-width:2}.st28{stroke:#cbcbcb}.st29{fill:#cbcbcb}.st30{fill:#00a39b}.st31,.st32{fill:none;stroke:#35ace8;stroke-width:4;stroke-miterlimit:10}.st32{fill:#fff}.st34{font-size:7.579px}.st37{fill:#02cd98;stroke:#fff;stroke-width:3;stroke-miterlimit:10}.tarjeta{fill:#ffffff}.tarjetaSeleccionada{fill:#3574e0;opacity:.15}.cursorPointer{cursor:pointer}.cursorNormal{cursor:default}.campana{fill:#3474E0;}.campana:hover{fill:#7c7c7c;}.campanaVacia{fill:#c2c2c1;}.campanaVacia:hover{fill:#7c7c7c;}.campanaDesconectada{fill:#c2c2c1;}"
        }
      </style>
      <path
        d="M414.6 532V322.1c0-5.9 4.8-10.6 10.6-10.6h577.2c5.9 0 10.7 4.8 10.7 10.6l1 204.3"
        style={{
          fill: "none",
          stroke: "#35ace8",
          strokeWidth: 4.2696,
          strokeMiterlimit: 10
        }}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={161}
        height={143}
        xlinkHref="data:image/png;base64,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 QmCC"
        transform="rotate(180 684.673 344.806) scale(.9762)"
      />
      <path
        className="st1"
        d="M1308.4 680.4h45.1c3.5 0 6.3-2.8 6.3-6.2V571.8c0-3.5-2.8-6.3-6.2-6.3H1299.8c-1.3 0-2.5-.4-3.5-1.3-6.4-6.7-6.4-6.7-12.9-.2l-.4.3c-1 .8-2.2 1.2-3.4 1.2h-51.7c-3.5 0-6.3 2.8-6.3 6.2V674.1c0 3.5 2.8 6.3 6.2 6.3h80.6z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={161}
        height={143}
        xlinkHref="data:image/png;base64,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 QmCC"
        transform="rotate(180 206.389 652.143) scale(.9762)"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={161}
        height={143}
        xlinkHref="data:image/png;base64,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 QmCC"
        transform="rotate(180 101.923 652.056) scale(.9762)"
      />
      <path
        d="M124 1141.9v-28.1c0-5.5 4.5-10 10-10h190.7c5.5 0 10 4.5 10 10v29.3"
        style={{
          fill: "none",
          stroke: "#35ace8",
          strokeWidth: 4.14,
          strokeMiterlimit: 10
        }}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.2,
          enableBackground: "new"
        }}
        width={289}
        height={179}
        xlinkHref="data:image/png;base64,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 QmCC"
        transform="translate(1102.81 37.758) scale(.9831)"
      />
      <path
        className="st1"
        d="M1376.2 207.4H1113c-3.4 0-6.1-2.7-6.1-6.1V49.7c0-3.4 2.7-6.1 6.1-6.1h263.2c3.4 0 6.1 2.7 6.1 6.1v151.5c0 3.4-2.7 6.2-6.1 6.2z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.2,
          enableBackground: "new"
        }}
        width={240}
        height={127}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAAB/CAYAAADRs0+fAAAACXBIWXMAAAuIAAALiAHljilJAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABMpJREFUeNrs2wtvG1UQgNHd+NUm TWihVDyE+P8/DErVR2hTp7iObe7C3GbiGLx+UFXiHGnkKphFQvoyd9du0wAAAADAF6498rVa/0th b6uYzxZwjlbAcLyAe8XcHhhunZMNMQP9w83RdrPsE3N7QLiDCHf91SaG/TZvN4uI9yZelxuC/mS4 Y7wnKdbu3x2VGceM4mcihv02703MvMzHmHlE3aSQdw44x9uFOinzoMzDMqcxDyLkGrGjNPQPeJGi /RAzjddZhHwT71/uEnCOdxyhPipzXuarmIsyZ/HPRun9Iob+23eWwr0q86bM2zLv42f37ol3CXgU gXaxfl3maZlvy3xT5kkEfRrvGwgXeke8TAFfR7yXZV6UeVnmVXr/LN8TD3vE26Ttexbxfl/mh5hn 8bPzOFIPm9sHWkD/gOvx+V1s33qqbeOIXefTQ68+G7g+tJrE0bkG/HOZnyLgJ/EfmzR3H2QB2y0j zHls2PfRVH2mVOOexWt9Ut0Ot2zfenweRpzncWT+rsyPMc/S9l0/PosYtm/h1VrE9Xa0iZ9NI+qr OGLPalt974FrwN2WfRwRP42p23e8dnQWL/Q/RueI6+adx5H6Mo7Ur5u/H2pdx1Zu+9wDrz/EOovf EBdxpD6NuEfihYM3cV6CF7EgnzS3n/RM0nsWwy3hNingQfxmmKSpvyl8gQMOkx8YN9HWw4j2Ufy5 xvvpNvWkx0XzFs7fwspPm1vxwtFCrp2N1pbmvU94Tna88Ka/vCBcOH7Ebdq269PuGnC7IeK28TeQ 4L+OOJ9+7zV2cmC8wOcLea+AgS+UgEHAgIABAYOAAQEDAgYEDAIGBAwIGAQMCBgQMCBgEDAgYEDA gIBBwICAAQGDgAEBAwIGBAwCBgQMCBgQMAgYEDAgYBAwIGBAwICAQcCAgAEBg4ABAQMCBgQMAgYE DAgYEDAIGBAwIGAQMCBgQMCAgEHAgIABAQMCBgEDAgYEDAIGBAwIGBAwCBgQMCBgQMAgYEDAgIBB wICAAQEDAgYBAwIGBAwCBgQMCBgQMAgYEDAgYEDA8P8MeBXTpFfgCw94tSHi9QGOr2truTZ7beB8 oUWapZDh6NGuUms3ZeYxubm/DHcMeBEX+hhzky7apgH2k8PtGpuV+SNe5/HzZd+A8+a9iYt8KHNd ZhqvDyLaYWx0AcNhAdfWur7ex0yjvXk+Tg+33Pe28edF/DboLnBV5m3MeZlRXGxcZiBgOPiedx7x do1dlvk9uruODhe10T4beJXW+TQu+rrM49i+Tfy2mMT12hQ/sNu9b71N7bbuy5jXEfHOAecz+Swu 2l3sLIJdxVa+iJgHze2DMQHDfgHX1n4t80uZF7GJp2sBr4ZbLtisXfQqjszDFO9lHKUn6T5YwLDf 8XmZAu7C/a3M8zJvIuB6D9z0PUIv0z3wdQp0HkG/jI08ThtYvLDfBq73wNOItptXZd41dx9ibd3A 6xHXJ2PrG/k0js91++bPloUM/Rrb1Fp9Ap0fYOXvXuwUWI1zENt2HOGOI976BNpnwXD4MbqLuH7+ +zHd++4dcH1/jXiQtq544XibOH/rMX9Z6k68+x5x23Sf224IV8BwnOP0qrn/deVVc4R71H8LVsBw eMD/FPQdfwowAECzbKmRR44bAAAAAElFTkSuQmCC"
        transform="translate(38.766 37.688) scale(.9543)"
      />

      <path
        className="st1"
        d="M256.2 151.5H47.4c-3.4 0-6.1-2.7-6.1-6.1V49.7c0-3.4 2.7-6.1 6.1-6.1h208.7c3.4 0 6.1 2.7 6.1 6.1v95.6c.1 3.3-2.6 6.1-6 6.2.1 0 0 0 0 0z"
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
          fill: "#ff6200"
        }}
      />
      <text
        transform="translate(1160.93 105.91)"
        className="st9 st10 st11">
        {"Funcionando"}
      </text>
      <text
        transform="translate(1160.93 125.91)"
        className="st9 st10 st11">
        {"Movi\xE9ndose"}
      </text>
      <text
        transform="translate(1160.93 145.91)"
        className="st9 st10 st11">
        {"Falla"}
      </text>
      <text
        transform="translate(1160.93 165.91)"
        className="st9 st10 st11">
        {"Bloqueada"}
      </text>
      <text
        transform="translate(1160.93 185.91)"
        className="st9 st10 st11">
        {"Detenida"}
      </text>
      <text
        transform="translate(75.5 77.73)"
        className="st12 st13 st11">
        {"Conectividad de Planta"}
      </text>
      <text
        transform="translate(109.29 128.21)"
        className="st12 st13 st14">
        {getConexion(datosScada.con)}
      </text>
      <image
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        width={40}
        height={43}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAArCAYAAAAKasrDAAAACXBIWXMAAAv+AAAL/gFBkBnlAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA8JJREFUeNrsmOlymzAUhUGAsZ3E Wdx0ybTv/2bN3tgGx9gEqMic2zm9IzCQ5ZeZOeNNFh9305U873AdrsN1uD708j9xzmrIZOEHQHV5 6OqzAH0C8h2fBYbVCzZ8BzDjkK8ASiUNW71nDBoFFuBBWQHmFrjC6oUk35U0xgkaDrAag0VWI6vY aozXEeY1uGENlFvtrLbQDt8JuN8E2RdQg02splbH0BG+izCuAkhm9Wy1sVrTe4Fly5YMGfZwq8CN YK0aaGZ1anUGnQIyJsAdgGqwlVVitcR7gc0AmxNc1RWQXRvBQjXYudUXq0u8zgF4jAfQgCnAFlaP 0AKgK5XxZV9Ag7H1jU8A9M3qyuq71VcCFAsa5eI1AJ9g7XqeB4Aale2VJFnYI+5i3PwMQL+gK1jx HDcdw9KS7S+w4gZWlHFTaAQgSRjO7s6AbL05rPaTAOf4bYIbBsoqAnlCITCiUHhBDGYYV3QBbIo9 ce8P6BJWnSo4qbHithiKVNIViNEE2lBme2EP904BMoeLa7ALSozYAeeRJQP63SM3bpEkT0iaFJas Y9fv4uKQ4u8UUBeIpRnAYyrOruahUstjSfH2rBJngYR6dX3Ywb1S+6aYYEZWmzS4tW3tDqjI72i+ GcXnvyTbB+jTyjGmVeOI4MI9cK51PKQkkdVI5mRv+Kbn8har9TboAde2ZI4pgf57YLPHetrVwRvA 2kADlUQy914L6sayrfEcclUtev3ddJyA+7ncUfH7Qkk/WFARd85rOjwVT5KRdqpF6mOx0jHnhuqf QHqmg+kL/GlLXcnzAEj9wDxfouaVOfeuxeKKHS1HK+rruPfzHTXPU/2dwGXUHy5QqJdqFSnb6qC2 oADKkvSI4irds/wncqwm7FbxBLde0hs+4aEZsAo6NAu6bkVUsyJVcioFVDpiuLbSH6t7q1ura6vf VjcATai7LoMe3bSv6pXs4Hza9DRl6BZJkMCl9wC7ger3d/htwy1XF0CvpWhzkjFUTu6UjVJC7b5A 3UJ3sGqq9iZ7AV2diWtjztaS7lnAUhW7d4C7hiUfALdCnOd99iS8qfYRQwllbQmgFNY5ofZLxnBJ YVABk43TRtXAzpsmnc0+uTTHjZfULk2pmfAcNW9Ju7sUWmNMMXRfXNLNvIbyI5sg3rh7NC6j/XHq 2LzntBcZfDbjOvaQdmlMn3V2czZnCopPFSq9Ig09PDKOFiyiVixQhbpUjQY3BUXDidebTlhNQ+kx DZnORbtyHMM1tnBvbTibDi9Ny9LpOU6yGlu2vwIMAIHy2w8IMlsgAAAAAElFTkSuQmCC"
        transform="translate(67.53 102.82) scale(.8973)"
      />
      <circle
        className="st1"
        cx={85.5}
        cy={122.2}
        r={12.1}
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
        transform="translate(1134.97 77.73)"
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
        d="M56 402.3h57.5c4.7 0 8.5 3.8 8.5 8.5v38.3"
      />
      <path
        className="st18"
        d="M85 463.7h124.8v97.7H85z"
      />
      <path
        className="st19"
        d="M209.6 447.4v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1V447.4"
      />
      <path
        className="st20"
        d="M299.9 529.1h-17.4c-1.1-.3-2.3-.4-3.4-.4-8 0-14.6 6.5-14.6 14.5v.1c0 3.9 1.5 7.6 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.7-2.7 4.2-6.4 4.2-10.3 0-1.4-.2-2.8-.6-4.2h6.8c1.5 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
      />
      <path
        className="st21"
        d="M253.3 563.1c-1 0-1.9-.9-1.9-1.9v-9c0-1.1.9-1.9 1.9-1.9.5 0 .9.2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.4-.8.6-1.3.6z"
      />
      <path
        className="st1"
        d="M253.3 551.4c.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.5.3-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.7 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.8-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <text
        transform="translate(88.2 585.9)"
        className="st12 st10 st22">
        {"TK001 ALIMENTACI\xD3N"}
      </text>
      <path
        className="st17"
        d="M216.9 556.2h33.5"
      />
      <path
        className="st21"
        d="M115.4 452.2c0-1 .9-1.9 1.9-1.9h9c1.1 0 1.9.9 1.9 1.9 0 .5-.2.9-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.4-.3-.6-.8-.6-1.3z"
      />
      <path
        className="st1"
        d="M127.1 452.2c0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.5.4-.9.9-.9h9c.5 0 1 .3 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .7.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.8.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        width={44}
        height={46}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAuCAYAAABTTPsKAAAACXBIWXMAAA3+AAAN/gEmzVBtAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA9RJREFUeNrsWYty0zAQtGzl1bRp Skt5Ff7/wwoMFPrI201iIXf2OsuNEmzFoQwTz+yYiVV5fVrd7YkkOVyH63Adrv/qMi/0Dhc7mf0L JKsExb0UYRO4G0XaEWoTt3sgykgBfl6SKhTxQpF1+yTMEUwJGebPAEOE1yC5JhSEjcRtQ2SNItlW sES6JLTyWAKPwApYq4i7pghrsi2Q63ocEXoeHTw3IFQSzD3mHjPc50R+qaLtdiWsybZBqu8xAE6B Poi3MbaM4gIEx4SRxxQfsADxRJO2DZEto3jsMfS4AM49XoF8H+MMEZ6B6B1wC9xj3iRE2jYgA4ls Se7S473HW483+O2UZJFAEiKHEcj+8LihlcjonTnreRdJZJi8JHsGglceHz0+gPwZIt8lDRfQ6BwS eMDKnGCcpahKRpHUZ+wO0bV4wQASeAeynxDlC4puW2UJ2Xhz/P0JossbUzJJTqSNbSC6Q5LCFUli iOcdjE9VpVvhY3o0JsHvOWWOGT6uVoR1BctIu+Wyv4YkLvHvIUmBczATtqqwiL7LDTmBVEbYhHM8 S2xkdFsgcwLCFyB6TqmsS6lMmyEh3aIgFIjkhDbiMQJjJTfHaJj1ewyCQ2BAMmgFyOq5hHSC+foI Auua9f+sq5gIS+4dBF5gt5DdNmeHdM0VUvaASWtENgnk3yNEhSWgNVvF5aW0cuI/WjTXM8+0ZnR1 RMQ7dGnp0oAHrjo/O70s9OHpDpXOKDuZ1pBB9FWXsFMIedmYfs1RddM++bfuJI0kuyYvm5O7Wqtu os7cBc0rWBHpp3FpDaKJIpujCk3J0+aBl1SZW0z9Iz5+QUFgU1+rcPDkbF5GqEpjEO9RWquyimtV jqeYa6LKsot1awV52glK5x3up1SODTKH29I5y8eLP5ZSfE+GXlbtacWyiEaTU5ul1Nah/Jkqs5ME umR2Y1KOS0/81eMa9xuQX4gssogIaxMkxFvKyDi1mfSmEp2OA2Q/e3xDBzLG+Kd9kUUQ3ZaXE5Xu ViqSOfVzYt5vFVmO7gPGSlPqbESuZB1Lm8PmnO2hdBw9koqjTTbDuJ8e30H0C5zaCPOvOL/HtkiO uoYp/bakyJ2DMHcTTHhBY0USNyB/h2ePunjYyIqks4UjPzujpRZv3CONO9XqS1q8p/Q4xfMl5+Bd jltDJz7isvgQRc4kOrQheXUWVHz0mcQyVO53MSpmQ2P6p6Mq7un4qIqPrIqQj2jiQNsETi61RUwD NjFkniqZqCas4LYz4U3e2AWw8QBwX/9lYLacvpsKpqrSgfY+zLaJTJOH65+4fgkwADIvruvM36By AAAAAElFTkSuQmCC"
        transform="translate(261.992 525.856) scale(.7561)"
      />
      <circle
        className="st1"
        cx={279.1}
        cy={543.6}
        r={10.9}
      />
      <circle
        className="st2"
        cx={279.1}
        cy={543.4}
        r={8}
      />
      <text
        transform="translate(264.49 583.31)"
        className="st12 st10 st22">
        {"P-001"}
      </text>

      {/* Temperatura */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(13, "Temperatura", false)}>
        <path
          className={getTarjetaClass(13, selected)}
          d="M1221.7 573.2h138.1V673h-138.1z"
        />
        <text
          transform="translate(1253.66 618.98)"
          className="st18 st10 st23">
          {"T"}
        </text>
        <text
          transform="translate(1260.16 618.98)"
          className="st18 st10 st23">
          {"emperatura"}
        </text>
        <text
          transform="translate(1269.69 656.3)"
          className="st12 st10 st24">
          {getScaledValue(datosScada.d13, 1)}
        </text>
        <text
          transform="translate(1331.58 655.91)"
          className="st12 st10 st23">
          {"\xB0C"}
        </text>
        <text
          transform="translate(1277.06 597.14)"
          className="st12 st10 st22">
          {"TT206"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(13, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(13, "Temperatura");
        }}>
        <path d="M1237.4 646.2c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-2 1.3-2.5 2.3z" />
        <path d="M1235.7 645.2c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.6-2.9 1.7-3.7 3.1zM1247 643.9c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.8-2.5-2.3z" />
        <path d="M1247.6 642.1c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6s.9 2.6.7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-.9-1.3-2.2-2.4-3.7-3.1zM1248.5 651.2v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM1243.5 658.7c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Temperatura */}

      <path
        className="st25"
        d="M619.2 499.6c12.5-4.9 17.1-3.9 17.1-18v-61.9c.1-7.1-5.6-12.9-12.7-13h-30c-7.1.1-12.9 5.9-13 13v61.9c0 14.1 4.7 13.1 17.1 18v3.9c0 2.2 2.2 4.3 4.9 4.3h12.3c2.3-.2 4.1-2 4.3-4.3v-3.9z"
      />
      <path
        className="st18"
        d="M580.6 422.6h55.7v59.9h-55.7z"
      />
      <path
        className="st25"
        d="M734.2 499.6c12.5-4.9 17.1-3.9 17.1-18v-61.9c.1-7.1-5.6-12.9-12.7-13h-30c-7.1.1-12.9 5.9-13 13v61.9c0 14.1 4.7 13.1 17.1 18v3.9c0 2.2 2.2 4.3 4.9 4.3h12.3c2.3-.2 4.1-2 4.3-4.3v-3.9z"
      />
      <path
        className="st18"
        d="M695.6 422.6h55.7v59.9h-55.7z"
      />
      <path
        className="st25"
        d="M847.2 499.6c12.5-4.9 17.1-3.9 17.1-18v-61.9c.1-7.1-5.6-12.9-12.7-13h-30c-7.1.1-12.9 5.9-13 13v61.9c0 14.1 4.7 13.1 17.1 18v3.9c0 2.2 2.2 4.3 4.9 4.3h12.3c2.3-.2 4.1-2 4.3-4.3v-3.9z"
      />
      <path
        className="st18"
        d="M808.6 422.6h55.7v59.9h-55.7z"
      />
      <path
        className="st17"
        d="M307.3 534h210c5.5 0 10-4.5 10-10V380c0-5.5 4.5-10 10-10h224.1c5.5 0 10 4.5 10 10v26.9c0 5.5 4.5 10 10 10h10"
      />
      <path
        className="st21"
        d="M794.6 422.8c-1 0-1.9-.9-1.9-1.9v-9c0-1.1.9-1.9 1.9-1.9.5 0 .9.2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.4-.8.6-1.3.6z"
      />
      <path
        className="st1"
        d="M794.6 411.1c.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.5.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.7 0 1.5-.3 2-.8l4.5-3.5.1-.1.1-.1c.9-1.2.9-2.8-.2-3.9l-4.5-5.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st17"
        d="M682.7 418.5h-6c-11 .4-10.3-9-10.3-9s-.1-18.7 0-29.3v-9"
      />
      <path
        className="st21"
        d="M685.6 425.2c-1 0-1.9-.9-1.9-1.9v-9c0-1.1.9-1.9 1.9-1.9.5 0 .9.2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.4-.8.6-1.3.6z"
      />
      <path
        className="st1"
        d="M685.6 413.5c.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.5.3-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.7 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.8-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st17"
        d="M567.6 418.5h-6c-11 .4-10.3-9-10.3-9s-.1-18.7 0-29.3v-11"
      />
      <path
        className="st21"
        d="M570.6 425.2c-1 0-1.9-.9-1.9-1.9v-9c0-1.1.9-1.9 1.9-1.9.5 0 .9.2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.4-.8.6-1.3.6z"
      />
      <path
        className="st1"
        d="M570.6 413.5c.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.5.3-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.7 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.8-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st17"
        d="M661.8 517.7v-84c.4-11-9-10.3-9-10.3h-16.3M776.5 517.7v-84c.4-11-9-10.3-9-10.3h-16.3M889.5 517.7v-84c.4-11-9-10.3-9-10.3h-16.3"
      />
      <path
        className="st21"
        d="M655.7 520.7c0-1 .9-1.9 1.9-1.9h9c1.1 0 1.9.9 1.9 1.9 0 .5-.2.9-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.4-.3-.6-.8-.6-1.3zM770.4 520.7c0-1 .9-1.9 1.9-1.9h9c1.1 0 1.9.9 1.9 1.9 0 .5-.2.9-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.4-.3-.6-.8-.6-1.3z"
      />
      <path
        className="st1"
        d="M782.1 520.7c0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.5.4-.9.9-.9h9c.5 0 1 .3 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .7.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.8.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <path
        className="st21"
        d="M883.2 520.9c0-1 .9-1.9 1.9-1.9h9c1.1 0 1.9.9 1.9 1.9 0 .5-.2.9-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.4-.3-.6-.8-.6-1.3z"
      />
      <path
        className="st1"
        d="M894.9 520.9c0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.5.4-.9.9-.9h9c.5 0 1 .3 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .7.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.8.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <path
        className="st17"
        d="M661.5 520.8v10.5c0 2.2 1.8 4.1 4.1 4.1H917"
      />
      <text
        transform="translate(591.99 524.04)"
        className="st12 st10 st22">
        {"FIS-01"}
      </text>
      <text
        transform="translate(707.49 524.04)"
        className="st12 st10 st22">
        {"FIS-02"}
      </text>
      <text
        transform="translate(820.99 524.04)"
        className="st12 st10 st22">
        {"FIS-03"}
      </text>
      <path
        className="st25"
        d="M939.7 525.9h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM924.5 529.8l7.9 4.6c.4.2.5.7.3 1l-.3.3-7.9 4.6c-.4.2-.9.1-1.1-.3-.1-.1-.1-.2-.1-.4v-9.2c.1-.4.5-.8.9-.7.1 0 .2 0 .3.1z"
      />
      <path
        className="st25"
        d="m940.1 540.4-7.9-4.6c-.4-.2-.5-.7-.3-1l.3-.3 7.9-4.6c.4-.2.9-.1 1.1.3.1.1.1.2.1.4v9.2c-.1.4-.5.8-.9.7-.1 0-.2 0-.3-.1z"
      />
      <path
        className="st26"
        d="M932.3 524.9v10"
      />
      <path
        className="st27"
        d="M923.3 516.9h18M932.3 517.9v8"
      />
      <path
        className="st28"
        d="M347.3 522.6v-63"
      />
      <path
        className="st29"
        d="M342.5 518.3c0-.9.7-1.6 1.6-1.6h6.3c.9 0 1.6.7 1.6 1.6 0 .4-.2.8-.5 1.1l-3.1 3.1c-.6.6-1.5.6-2.2.1l-3.2-3.2c-.3-.3-.5-.7-.5-1.1z"
      />
      <path
        className="st1"
        d="M351.1 518.3c0 .2-.1.3-.2.4l-3.1 3.1c-.3.2-.6.2-.9 0l-3.1-3.1c-.1-.1-.2-.2-.2-.4 0-.3.2-.6.6-.6h6.3c.3 0 .6.3.6.6m2 0c0-1.4-1.2-2.6-2.6-2.6h-6.3c-1.4 0-2.6 1.2-2.6 2.6 0 .7.3 1.3.8 1.8l3.1 3.1.1.1.1.1c1 .9 2.6.8 3.5-.2l3.1-3.1c.5-.5.8-1.1.8-1.8z"
      />
      <path
        className="st29"
        d="m1237.7 526.3-3.2 3.2c-.7.5-1.6.5-2.2-.1l-3.1-3.1c-.3-.3-.5-.7-.5-1.1 0-.9.7-1.6 1.6-1.6h6.3c.9 0 1.6.7 1.6 1.6 0 .4-.2.8-.5 1.1z"
      />
      <text
        transform="translate(327.809 446.22)"
        className="st12 st10 st22">
        {"CLORO"}
      </text>
      <path
        className="st19"
        d="M368.1 362.5h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
      />
      <path
        className="st20"
        d="M357.6 371.5h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
      />
      <path
        className="st30"
        d="M327.6 383.2h38.8v40h-38.8z"
      />
      <path
        className="st19"
        d="M366.4 376.5v45.2c0 .7-.4 1.3-.8 1.3h-37.1c-.5 0-.8-.6-.8-1.3v-45.2"
      />
      <path
        className="st28"
        d="M1078.7 478.7v9.2c0 5.1 4.5 9.2 10 9.2l134.6-.2c5.5 0 10 4.5 10 10v16.5"
      />
      <path
        className="st31"
        d="M947 535.4h433c5.9-.1 9.7 4.7 9.8 10.6l-.6 327.3c0 5.7-4.6 10.3-10.3 10.3H66.4c-5.5 0-10 4.5-10 10v238.6c0 5.4 4.4 9.8 9.8 9.8H206"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={164}
        height={147}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAACTCAYAAAAAyrJUAAAACXBIWXMAAAuIAAALiAHljilJAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB65JREFUeNrsmw1T4mYURpMQVPxY 7bad/v/f1+l2F1RQSNIwc+/s4/UNBMWtIefM3DELSiA5uR9v2CwDAACAAZAP5DVhGDTvfYHyA8RD SHizqPk7RMx3vA5SIl2T2N4rZvkGGfOwXXQ8B+MUspHteo+o7xIyDxJ6TOSxPIgJ4xLSw0WsbNtj r5TlgTK6hKWJWIbtImRMGFd2dPE2JuMmbKuYzVuFVBldvLNETO15MuW4M+NWvnUbzyFykzLbJWV5 oIxb6c7buGjjso2ZxUWHlGTK8fSNUcZVG0uLR3PiSf42KWXfDOll+txEvGrjRuJSpCylr0TI8Qjp Zdll3Eq4sJhIK9eE6J0hU9nxwmS8a+M3i9s2rk3Kc8mSlOxxlWzPjk8m430bP8yJiWTFSoaeV8tB fUp2zI43JuIfbfwpUl6ZsFP6yNH2j2vLjg8m40xkrCSL6vTdq2THJR4VcivfV5PxrzZ+t4x5jZAI aULemytnkhm9t3yyn5vgR9MnQ8Zy7RnyzkT0LKlClnJVION4+kjPfiuR0SdrL+MPNuSsTNAqe7k+ 2auH1On60sT7YhJ+tZJ9JyW7TGRHxDztgcbDhZzaOa8kY87Nn/vEnNH0FVLXHjVLupQ6ac+kgWXZ Z7zLPn7+K8uMX2To9ZauTHiyt4eMQ82ZCTeT8LXIC9lZckdw8mK6kJ7x1I+ZJCxfGoxJa28PuesO zUX2+i5NGXbEQDOuwUbL7zT4ob7E7JjHoaUrO6ak1PvXU3lsEnZChhwPeTjv0QlNVpMdMuZdQqbK dhSzCNu7vhsJ4xEzNX+kXOkceIseMsarQL/1k/o+JEKOV0g9/0XClbxj4M33CbmvhLOsA32c6fKl 05niSDtFSjiKF8UBO9mVGZER9kmZ92nrCo4dfCYO7SEBPmIqJ0PCcDMkAEICQgIgJABCAkICICQg JABCAkICICQgJABCAkICICQAQgJCAiAkICQAQgJCAiAkICQAQgJCAiAkAEICQgIgJCAkAEICQgIg JCAkAEICQgIgJABCAkICICQgJABCAkICICQgJABCAiAkICQAQgJCAiAkICQAQgJCAiAkICQAQgIg JCAkAEICQgIgJCAkAEICQgIgJCAkAEICICQgJABCAkICICQgJABCAkICICQgJABCAiAkICQAQgJC AiAkICTA/yJkw2GCz5whERSOQfMeIRuJ+O8GSeFYiYweEj5Kvl0JqzlGD0k2hGOJ+u4MGW2vLSjb sK80d2XL3j1kV6+4FbCSqBNiMvQgYkxadUcCOzhDpl54K+ImxC45YZw9Y0xeqUSWSnxZ2XNHKuKz xDqIWYjo27/LT+ig50fMIqeaGavgyjrEZoeU2T4ho+3bF3yyWEqs2riw1/KTVtt2fkIidv3se7Ky E21rmpC41pKwVuKJu7MWKV8dh7KnjBvZwWMbD23cW1y2MbUTVNt2ceCJ++wiehSy3YTn9/Xhdd/G fqDZsTZPnswR9+PB4tGee7bfq1NS9inZtVi/tBdftDFv46qNcztR29+bmZCTxAkdopAuYQz9fLE9 aaRKNIke+1R67SZRrteWtLYifrf4Yb48mD/PkiVfDTllzzSs5i9sR9vMeGYnpLLnZ/ZYGTLLUDOj yzexz1TKBVeIjEWQq5aMUSV67ViymoFL6Z540to68m8b/7TxzXyZm5Sr0EtmfTNkEw6sCzm3rDgN Mj6IpKUMOEMs3SqjSzi1z31un9GlnIqcKuNaKov2T7G5bwYqYqwGmyDkdxPyb5NyLmV73bUMVPbY eRRyKsI18vi1ZMhpIkPmA5LRhXQZz+yzeVxKxqxEyiy0ON5z6xCoqxNDLd2pdWpt6+6tVGuWVCE3 oWQfPGVv7ICvpH/yN+FXxJVN26mSPbTsmEt2PBMJtxfdjR1Uv/BmljUn9veVrET48Lewn48iZedJ GejaYxx8FyblD+kjH+WCPHjZJws1fh0mTO8ZHm2HMynlkzCRDk1GFfI8yHjXxq1cfNe2PZXj5I39 3I7N9yBlKksMWco6LPksZdLWKXtlzx+87JPaqe8wkzfgQp6LjNOEjEPsHwvpGy9NxluZFv0CXEnv nMkxmZuI38K0GfuoU+gjm0TfvAqxc7p+i5Beupsg5FJELKWkp2QcipgqpJfsm7B8cWmZcWntigr5 IDJ+s17KhVyGslUPVMSUlL4is85236XprAjlgW+i7ngDzyJjkRBviGW7kB4yrp/VMuBs7Pl9Qs6t hK3C4nAz8AwZV2UqkU9/9lp/PVTIeAO9sJOki8ancIcmVbb9NumT/ZxZhrzvKNk+ZfYp16d2xyZ1 E6DXumv5xiuiyn7eKswHvMTTJWQWsqTf8nqWdUXvmxfZz9unPtT4lDm3WEhTH5d8suw07m3v+u8t vT9n+Y4d63aXiEMXM89e3mHRbzx5f7nomLIfs933cZsTEzElZnboBVce6Y002csvHJyCkPoZ9Pug lQhZmnBnYR1Sv+mid2l0qedUaHo+9uFCfugb+4QlPDbtPsAts5e3SvU22jp7uQg+5GWeX3qwYf9x 8oFtIktbRfh3lr38oqpGg4wI+RE9ZZ69/GZ8apmryQ78vySAkMcQMzXQdU2bgJC/5NjlO3pqRAQA AAAA+GD+E2AAvS9tIC3Ngg0AAAAASUVORK5CYII="
        transform="translate(255.72 727.73) scale(.9496)"
      />
      <path
        className="st1"
        d="M314.1 737H271c-3.5 0-6.3 2.8-6.3 6.2V845.6c0 3.5 2.8 6.3 6.2 6.3H322.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.2V743.3c0-3.5-2.8-6.3-6.2-6.3h-82.6z"
      />

      {/* E.C. de Alimentación */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(9, "E.C. de Alimentación", false)}>
        <path
          className={getTarjetaClass(9, selected)}
          d="M264.8 744.4h138.1v99.8H264.8z"
        />
        <text
          transform="translate(311.992 783.96)"
          className="st18 st10 st23">
          {"E.C. de"}
        </text>
        <text
          transform="translate(298.272 800.76)"
          className="st18 st10 st23">
          {"Alimentaci\xF3n"}
        </text>
        <text
          transform="translate(305.802 829.27)"
          className="st12 st10 st24">
          {getScaledValue(datosScada.d9, 0)}
        </text>
        <text
          transform="translate(352.074 828.88)"
          className="st12 st10 st23">
          {"\xB5S/cm"}
        </text>
        <text
          transform="translate(318.972 764.111)"
          className="st12 st10 st22">
          {"AE201"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(9, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(9, "E.C. de Alimentación");
        }}>
        <path d="M280.9 818.2c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-2 1.3-2.5 2.3z" />
        <path d="M279.2 817.2c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.6-2.9 1.7-3.7 3.1zM290.5 815.9c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.8-2.5-2.3z" />
        <path d="M291.1 814.1c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-.9-1.4-2.2-2.5-3.7-3.1zM292 823.2v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM287 830.7c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin E.C. de Alimentación */}

      <circle
        className="st32"
        cx={332.6}
        cy={883.9}
        r={9.2}
      />
      <circle
        className="st32"
        cx={1291.2}
        cy={534.9}
        r={9.2}
      />
      <circle
        className="st32"
        cx={123.8}
        cy={884.9}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={162}
        height={144}
        xlinkHref="data:image/png;base64,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"
        transform="translate(46.677 725.4) scale(.9694)"
      />
      <path
        className="st1"
        d="M105.7 734.7H62.6c-3.5 0-6.3 2.8-6.3 6.2V843.3c0 3.5 2.8 6.3 6.2 6.3H114.3c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.2V741c0-3.5-2.8-6.3-6.2-6.3h-82.6z"
      />

      {/* ORP Alimentación */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(14, "ORP Alimentación", false)}>
        <path
          className={getTarjetaClass(14, selected)}
          d="M56.4 742.1h138.1v99.8H56.4z"
        />
        <text
          transform="translate(112.251 784.61)"
          className="st18 st10 st23">
          {"OR"}
        </text>
        <text
          transform="translate(131.751 784.61)"
          className="st18 st10 st23">
          {"P"}
        </text>
        <text
          transform="translate(89.021 801.41)"
          className="st18 st10 st23">
          {"Alimentaci\xF3n"}
        </text>
        <text
          transform="translate(104.641 828.93)"
          className="st12 st10 st24">
          {getScaledValue(datosScada.d14, 1)}
        </text>
        <text
          transform="translate(160.901 827.54)"
          className="st12 st10 st23">
          {"mV"}
        </text>
        <text
          transform="translate(109.721 764.771)"
          className="st12 st10 st22">
          {"AE202"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(14, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(14, "ORP Alimentación");
        }}>
        <path d="M72.8 816.9c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-2 1.3-2.5 2.3z" />
        <path d="M71.1 815.9c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.6-2.9 1.7-3.7 3.1zM82.3 814.6c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.5-1-1.4-1.8-2.5-2.3z" />
        <path d="M82.9 812.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-.9-1.4-2.1-2.4-3.7-3.1zM83.9 821.9v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.6 1.6-1.5v-.2c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM78.9 829.4c.9 0 1.7-.8 1.7-1.7h-3.3c-.1.9.6 1.7 1.6 1.7z" />
      </g>

      {/* Fin ORP Alimentación */}

      <path
        className="st25"
        d="M247.5 1136.3c0-6.7-7.8-12.1-17.5-12.1s-17.5 5.5-17.5 12.1h.1c-.1.4-.1.7-.1 1.1v37.6c0 3.5 3.4 6.4 7.6 6.8v6.2h5.2v-6.1h9v6.1h5.2v-6.2c4.5-.2 8-3.2 8-6.8v-37.6c0-.3-.1-.7-.1-1.1h.1z"
      />
      <circle
        className="st32"
        cx={229.4}
        cy={1104.8}
        r={9.2}
      />
      <path
        className="st1"
        d="M352.9 1294.9H398c3.5 0 6.3-2.8 6.3-6.2V1186.3c0-3.5-2.8-6.3-6.2-6.3H344.3c-1.3 0-2.5-.4-3.5-1.3-6.4-6.7-6.4-6.7-12.9-.2l-.4.3c-1 .8-2.2 1.2-3.4 1.2h-51.7c-3.5 0-6.3 2.8-6.3 6.2V1288.6c0 3.5 2.8 6.3 6.2 6.3h80.6z"
      />

      {/* Presión Post Filtros Cartucho */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(4, "Presión Post Filtros Cartucho", false)}>
        <path
          className={getTarjetaClass(4, selected)}
          d="M266.2 1187.7h138.1v99.8H266.2z"
        />
        <text
          transform="translate(312.26 1231.461)"
          className="st18 st10 st23">
          {"Presi\xF3n"}
        </text>
        <text
          transform="translate(301.79 1248.261)"
          className="st18 st10 st23">
          {"Post Filtros"}
        </text>
        <text
          transform="translate(318.16 1273.77)"
          className="st12 st10 st24">
          {getScaledValue(datosScada.d4, 1)}
        </text>
        <text
          transform="translate(371.43 1272.38)"
          className="st12 st10 st23">
          {"bar"}
        </text>
        <text
          transform="translate(318.5 1211.612)"
          className="st12 st10 st22">
          {"PT0"}
        </text>
        <text
          transform="translate(338.67 1211.612)"
          className="st12 st10 st22">
          {"1"}
        </text>
        <text
          transform="translate(343.98 1211.612)"
          className="st12 st10 st22">
          {"1"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(4, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(4, "Presión Post Filtros Cartucho");
        }}>
        <path d="M282.3 1262.7c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-2 1.3-2.5 2.3z" />
        <path d="M280.6 1261.7c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.6-2.9 1.7-3.7 3.1zM291.9 1260.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.8-2.5-2.3z" />
        <path d="M292.5 1258.6c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6s.9 2.6.7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-.9-1.4-2.2-2.5-3.7-3.1zM293.4 1267.7v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM288.4 1275.2c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presión Post Filtros Cartucho */}

      <image
        style={{
          overflow: "visible",
          opacity: 0.2,
          enableBackground: "new"
        }}
        width={173}
        height={140}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK0AAACMCAYAAAAOXynQAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABy1JREFUeNrsmwtvm0gURsEQO443 fexW2v//+1bNJqkdv5kF6Y765XbAkCbbBs6RrrBjh8j4cOebgWQZwDsj/032AdMjvPQXy1eQE2nh fxU5H/Ae3eZIC68kaGobfkba3NXMbXPEhZ/oppVI6h+3dt6yh7Azq0IqPo+vExlgyLCvcjZ1lqpa OvBFab2szfuupEqrQqQlMkAfaVXYRtJTXUepk/lzbuu45YUOG2VdWF1bLUTegpwLA6WNwjaSHura 17Wz2jt/fhC37BC2MDEbSW/qWkndmLhz6bY5skIPeYN02IOJ+lTXuq6Nlb439O20scsuTNDbuj7V 9bGuD/Z8aa9rt6XTwqWVgiBdNgr7aM3xytwJLdIGL62uEhQSC1Ym7F9Wf5q8K4kJBZ0Wesobo0HT ZbfWYe/NpUKk9pOz0NVpfTRYmaSNsH/X9aWuz3X9Ya/PXTxAXOiKBkGiwda67FKEja8dZGJ2Fq9C W6b10n6wDvvFxP0sEeHKxQOkha6IoJ32yeJnaa9rZNja47iKVXVNxGYtmfajyfrZuu6t5BCkhSG5 Nkobm14Qib9Z901Fz9A1EdO12YXtfGWR4FYqSjtDWhgo7VH8O9iqwYN5FmOnXgvIL60eqLjz7Pk6 7TL7vl57be+ZISsMnIwV9vxoTsWKS6lXKWFVWj+J8pduY9eNO/NXxmZ8FzCAuBrgL17NnbDJVam2 Tuszrr/noBCxubAAQztt7hpikT2/NaB0jmlj7eyQec8ix8IQUg7N3OjeeVvArOcfyeim8MYCZx1N MRsqbddZAvDaAl8cuWcDzgCAt44KvWDWD7+jyFmXzEgL7w6kBaQFQFoApAWkBUBaAKQFpAVAWgCk BaQFQFoApAWkBUBaAKQFpAVAWgCkBUBaQFoApAVAWkBaAKQFQFpAWgCkBUBaQFoApAVAWkBaAKQF QFoApAWkBUBaAKQFpAVAWgCkBaQFQFoApAWkBUBaAKQFpAVAWgCkBaQFQFoApAVAWkBaAKQFQFpA WgCkBUBaQFoApAVAWkBaAKQFQFpAWgCkBUBaAKQFpAVAWgCkBaQFQFoApAWkBUBaAKQFpAVAWgCk BaQFQFoApAVAWkBaAKSFqRFkG+T5RWn9LwSOJbyRoK1yvlanfdEfARjg1sUmOeu5swxR4Y07baop hqHShp5FfICfGa2bqqTOCWGf+VV2dNZMdni28o9jzSYibu62rzHhmOJJH8Sjk2xP7mfRr2eyl4kI kDnr406OdR1sG6uQjp1PSNj8hRKnRqepjVaxEZ7Eq73VQRw7t3Td1k4bRNaD7HRX19a2V/b+Kydt PmJpc/ms+jg4mbtkrRJD4xTmC8F12aO55GvvxK36Snt2Z0Gzs01d67q+1TW39x5N2mLE0uZO0kK2 hYg7S3z+4LpLcDGrcl/MmOX10jZiPtX1KLU2z3b2+iklbtnSumP73tuOG1Ef6roRYZudLkcubS7x J0pa2mfWbdEysQ2JYxqbwcnluLPLb2OVtkpI+7Wuf+u6N9eezL1jKiKUHdHgaMZvbMdLiQQH+/m1 STxzHWmMkSBK2nzehau5HbfCRSWdGxxd1DrINso75qigI0mMnVtz666uf2z7KN325CZjrfGgSkj7 IO892pmwsi9MO+0Yhc3t80Vhr23EubFjsLRaJEadys0LYm57stomhsIwcnG1024tEtxbt70z1zYt nTZ4aVNBeW87iMPeSc6O+EWV7osaU0TwXfZaZP1Q161VFG4hE9PUiLW20vwWh0LfbceaZ/1xiRHh werRHZPeEzHNtNo19tJ547BYuHgwxmhQ2GddmrCNqJ+s9pJRb+SYxJNcI1b8Yu5tG/PbLjFbHnNE 0JWpKG48iTfWGA9tkam8EJaP8nOdmC3cJCSfSKddSpddyxLNUTLrtb0/SJT6ZqLeWemkY9Mi7Rg7 rY8ImvN3VvuEsFmfTqt5LLhstrXfK6XLZiOXNmbahUmrHXKXPV/HjhPW4EamO8ttMbtFabddM+WR SqvinrLnF6xOiaWui/HAryv6M0PXKfMsff/CmKTNZalrbh32ycm6lxhw46RdS5f9Kss7MdfuXGep Rrzc1bYUeM5+vFWgdUJa9lxXU3HzRIYd81WwzHVbHcJ0CWtrnTNKWyU67Z0TVtcjq5Gv06YE9o1R H7ceh3LArC+3nY01v3ZJG09UP4xpJtvYBG0pmfaQmISlhPVZdgr3IXTdg9H5+cuBZ0bqeT6BA5zL SXvOfrxoEKVdyTJgnIhtZalrLbPj1DLXlO72Cj1/9iJpswmd/V2fPXfDWOWWbp6y71cIC7fiEi8q 6MTtNIElrjfxqfyVf/ydipvJqore/LE1YUuR1i/raLSYsrCvktlgeFTwN9GU8lwvyOgNzqc+s2NA 2rcUN8rrK8/S/0pS9ZkdA9L+HysLqRr8D3uAtL9CXv1Z6n/AkBVp382xRFaAKfOfAAMAnNZCTbol +wAAAAAASUVORK5CYII="
        transform="translate(143.614 946.496) scale(.9929)"
      />
      <path
        className="st1"
        d="M210.1 955.5H159c-3.5 0-6.3 2.8-6.3 6.2V1064.1c0 3.5 2.8 6.3 6.2 6.3H218.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h61.7c3.5 0 6.3-2.8 6.3-6.2V961.8c0-3.5-2.8-6.3-6.2-6.3h-90.6z"
      />

      {/* Diferencial de Presión Filtros Cartuchos */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() =>
          loadGrafico(16, "Diferencial de Presión Filtros Cartuchos", false)
        }>
        <path
          className={getTarjetaClass(16, selected)}
          d="M152.8 962.9h154.1v99.8H152.8z"
        />
        <text
          transform="translate(166.5 1001.46)"
          className="st18 st10 st23">
          {"Diferencial de Presi\xF3n"}
        </text>
        <text
          transform="translate(212.82 1047.77)"
          className="st12 st10 st24">
          {getScaledValue(datosScada.d16, 0)}
        </text>
        <text
          transform="translate(266.09 1047.38)"
          className="st12 st10 st23">
          {"bar"}
        </text>
        <text
          transform="translate(208.88 982.61)"
          className="st12 st10 st22">
          {"DPP012"}
        </text>
        <text
          transform="translate(180.24 1019.46)"
          className="st18 st10 st23">
          {"Filtros Cartuchos"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(16, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(16, "Diferencial de Presión Filtros Cartuchos");
        }}>
        <path d="M176.9 1036.7c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-2 1.3-2.5 2.3z" />
        <path d="M175.2 1035.7c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.6-2.9 1.7-3.7 3.1zM186.5 1034.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.8-2.5-2.3z" />
        <path d="M187.1 1032.6c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6s.9 2.6.7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-.9-1.4-2.2-2.5-3.7-3.1zM188 1041.7v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM183 1049.2c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Diferencial de Presión Filtros Cartuchos */}

      <path
        className="st31"
        d="M253.2 1142.4h162.3"
      />
      <circle
        className="st32"
        cx={334.9}
        cy={1141.8}
        r={9.2}
      />
      <path
        className="st20"
        d="M465.8 1111.8h-17.4c-1.1-.3-2.3-.4-3.4-.4-8 0-14.6 6.5-14.6 14.5v.1c0 3.9 1.5 7.6 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6H459c.6 0 .9-.9.6-1.6l-4.1-9.1c2.7-2.7 4.2-6.4 4.2-10.3 0-1.4-.2-2.8-.6-4.2h6.8c1.5 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.15,
          enableBackground: "new"
        }}
        width={44}
        height={46}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAuCAYAAABTTPsKAAAACXBIWXMAAA3+AAAN/gEmzVBtAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA9ZJREFUeNrsmQtv2jAUheM44bVS Sru+9vz//2vrpm5doYVSCCSzq3Onw5VTSEJbacLSUSgN5vPJ9fW1iaJ927d927d9e8tm3uA7iiad Ja8AucmU4i2BDV1ZGrAIwBavGRIMGtM1pr+l5YDjax4YzIs5zE5aACYkS9ACuHJaQit6L9/keLIj WIZsObVJKd6PAeEhF9CcXssAtOM7Cwl2NQFcx6nndOD0DupgEBYgHu7R6QGa4vpI8CsCL3bhMMOm gPJwh05HTkOnAf4W6BgAHmzmNHG6cxpD93jvAc4vVczXBtbOepg+IN87nTmdOp0A/gDuWzg3B5QH HDn9cbpx+o3XFv37gWUUBUUdYI5ZCxAPdOx07vTB6aPTBeAHCBEGzuCwAHvYazwJuS+iCbrmcl2H LeKyBxe9q5+cvuB6AYf9YLoIG0OTjl0e4gl1wWNUJpFU9/T5pIG7HcSoB7t0+uz0FS6fUfy2Aq4J dB/3dHGfAeiCJqdMwMrAvDC08CUDxOslQuESoTGkRywpjReGnNJfi57AkjLIFE8gA/STy0lNd1sA OkKsnkOngD3AE0gCK51AW7WoLFVs32ISzgCdVwFmaMm5AnwC6GOEQQ+waQA2oljmFbJACEwBOqTs kiJ8KqU1vaJJdjhE50cE2y5xNrRgxbQ6dtFnH9dgX1VjmIF76LxP2WAb2DLoFJ/v4gm11VMyEU2G KpVYQh33IJnl28I+txClqv5Y6y+u0GmkJl5aUuBUhdUhp8tSUwc4tIswGwr1Kq1QGSSkSsD6w6Ga dtVwv5ZTP6X9xRVdyKkemCPJP+J1FijCtzWC+5VVLlPgxbbAeg/GtcAEmlJ1tazgNi/VC+p3Rv2t mVDHYVk+p6hjR6hrJ/giLsCLDX0xrNTI9xDXxbWqNV24TAAs9eyAKi7ZDiWBSVmUDP4Oq9wtTLjH /xi4sDU2miaQ7LmIsWrJ1Y4KaEawHvCX05XTN6fvqJFHGtpWnMkmkOyt2h1rwJXKKJmaA7cK1usn ntoE9/6bE7ZmHo5KChqd7hYEOCdHJZxkt8GwVxjAGINqFMNylSJ7Qs6uKLZHqOL6gSKe93VjOHwN V3/g9ZjKylXTTag4malYlb2aTMQh7TraAeApAd+QRoFQqA3MaUpc5gE80Gw/pDKxRbWBAM8oNO4g TmeZOlRpdJDyXMboUCWny8SIBjen7dCMVsxF4ARopyc/+lwtpaKcz9eMmgOSMTK1QuZlsLs4vTTP lIhWlYqh+iEvgcxf8rjVlFzjDWVnHjiK2njcusufDEzF0/ei5Prqv3GYBpnn/2t/BRgAKOW1VtP4 brwAAAAASUVORK5CYII="
        transform="translate(427.892 1108.546) scale(.7561)"
      />
      <circle
        className="st1"
        cx={445}
        cy={1126.3}
        r={10.9}
      />
      <circle
        className="st2"
        cx={445}
        cy={1126.1}
        r={8}
      />
      <text
        transform="translate(430.39 1166)"
        className="st12 st10 st22">
        {"P-002"}
      </text>
      <path
        className="st21"
        d="M418 1148.8c-1 0-1.9-.9-1.9-1.9v-9c0-1.1.9-1.9 1.9-1.9.5 0 .9.2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.6-.8.6-1.3.6z"
      />
      <path
        className="st1"
        d="M418 1137.1c.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.5.3-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.7 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.8-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <path
        className="st17"
        d="M905.8 1115.5H1202"
      />
      <path
        className="st20"
        d="M896.3 1129.4h-132c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.8 3.8-6 3.8z"
      />
      <path
        className="st18"
        d="M897.6 1129.4h-133c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.9-.2.9z"
      />
      <path
        className="st20"
        d="M896.3 1154.5h-132c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.8 3.8-6 3.8z"
      />
      <path
        className="st18"
        d="M897.6 1154.5h-133c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.9-.2.9z"
      />
      <path
        className="st20"
        d="M896.3 1179.6h-132c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.2-2.8 3.8-6 3.8z"
      />
      <path
        className="st18"
        d="M897.6 1179.6h-133c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.9-.2.9z"
      />
      <path
        className="st20"
        d="M896.3 1204.7h-132c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.2c0 2.1-2.8 3.7-6 3.7z"
      />
      <path
        className="st18"
        d="M897.6 1204.7h-133c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.1 20c.7.1.6.7-.1.7z"
      />
      <path
        className="st20"
        d="M896.3 1229.8h-132c-3.3 0-6-1.7-6-3.8v-13c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.8 3.7-6 3.7z"
      />
      <path
        className="st18"
        d="M897.6 1229.8h-133c-3.4 0-6.3-1.7-6.3-3.8v-13c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.8-.2.8z"
      />
      <path
        className="st17"
        d="M754.5 1220.5h-16.3c-2.8 0-5-2.2-5-5v-99H474M734.1 1144h20.4M733.8 1169h20.4M905.8 1221.1h16.4c2.8 0 5-2.2 5-5v-99M926.2 1144h-20.4M926.5 1169h-20.4M733.8 1195h20.4M926.5 1195h-20.4"
      />
      <circle
        className="st32"
        cx={517.9}
        cy={1118.6}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={162}
        height={144}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAACQCAYAAACLQLC9AAAACXBIWXMAAAthAAALYQFbeSumAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB0ZJREFUeNrsmglzo0YQRhmEZNl7 ZpNU/v/vS7K7tmXdgkCqJ/ttZ0Ag72HEe1VdkpGNjPToYyDLAAAA4AURRrZfeNlUP0uY0LIfRJy2 hNVQQYtnCBhaRAyIOGkR2x47hbxExNyJmFv412B6IsYoW563ylhcIGGMmTzq84CMk5bwZPKdXJRd mTFcKOHcJJ5LFE5KesVpSViKgMc6DhJHi5PLkoMzombBRrpFHTd1LC1ubNuiQ0SkvN7hRCVsxNvX satja7GTKnlKlek+IgYnYSPdbR2vJO5s20IyY0DEyQwnlWTCRsJNHes6nupYiQ8+g/63n6EiLky4 N3W8s2ievzUhb0zWmQwuiDgNEWM53pqAj3U8iA+pgaZ3aQ6uL7wx4RrxPtTxax2/iJC3Up5nCDip /lCzYZMF782HQsq3Di+5ZsU+IgYpy0sT8b1J+IfI+NZKdCzPTM/TyYhRsr2V5AdzYW6/4weYOLj0 yoihpSy/FhF/t/iAiJRmETF6EGT71rLlVmQsh5bmwna8NBHfWBZsBPxNRNTS3HblBa53WNmLA7lt 25qcj1ay17ZtphP0kIw4tze5kwElDizvbduyZWpGxOuWUZdu5k7CR+sXX5kfsWJ+NcwOyYhzKc93 snTzWpZvljKoMDFPKyueRLDm+S77enlvKasqhQzBZdew4rOZlzEuZN/azuOCtl+6QcDpiBi/81Kc WGZfX/RoW9rL+k7NsTz7y3p6ea9ISIiI100wCeP3PBMX5pK41JEi5UhfEb2MxRn5kHBaMqaSlkZK QM2KIe/5RiFL3/qVEg8JpyvkOU/yVFnOsi83J3T1iOfejOkYUkNpm4zZEBH7Wp8hIQxIVq3VMh+4 867+AKBvtrxYRIDvCiICIgIgIiAiACICIgIgIiAiACICIgIgIiAiACICIgIgIiAiACICIgIgIiAi ACICIgIgIiAiACICIgIgIiAiACICIgIgIiAiACICICIgIgAiAiICICIgIgAiAiICICIgIgAiAiIC ICIgIgAiAiICICIgIgAiAiICICIgIgAiAiICICIgIgAiAiICICIgIgAiAiICICIAIgIiAiAiICIA IgIiAiAiICIAIgIiAiAiICIAIgIiAiAiICIAIgIiAiAiICIAIgIiArwcESs+LvjZIlaICi+pNFcu Mvcc4KIElV+40woB4YJk1epMfmZnqZ2XiR1XlGdo8ajsk7TygXY3Oz256BITpiudf162uPIvxYBU G8U71nGQOCaEDFcoY/iRPdOIS3LpXDmKI6c2IYuelpdOwL2ESjmzLyxcoYTVhXJWExBRBTyKK/uE K0cRMTuXEX36jG/Q7Gxbx8bFbR1zK/XxnwrfIZv8LAlDy/FUHceX6puvrZ/WY+lypPl55ypoLxFT ph9sZ82On+p4tHhVx8KyYWVvNLMYs4TBRZ7Y1pUtq5Ye+5oGvPi/a8Vs/Fi5eLLtUUZfojtF1A9P TY8SfjYJb0TCg/w8VhGDEzG3iMeUOynzxDGqdKXrj07u9THL6B1pRFvX8VDHJ4t78yXKuE9lxT7D imbEaPu9leOl7CO+fmPbxtgvpiSc2fEU1n7E5ypo7sp12TLcHaVHOl1BZlQRD5KoGhH/tvhoSWtl r+9TfWKfjBjrf8yIK5NtYX8fM+FaMuR8xCJqRAkXFjcSMUNGOUPixD1If7STpt2vNIxZRB1SVMQm G/5Zx18i4saV5sFTs/aIT5LxVMIHEbFIZIqxyRhFiwI2FeDOIg5nc3fiZYl+ei2x6Wjaxy5iPOnW VorvLRt+dCLGE3HQsJIlegDNckfJkrFcL64gI8ayW5hoSzvJ3li8FkHv5OTLXK+0kqHON+3HxJra WEtzapiNTjxIj7i13/vfcffJiLHcZGZzkElRRYw940KyyZhL80wy3q0J+LaO9/YYt+8kQ2aul36w bPDZvpRVYnqsrkTEONDuJDM+ycm3dWU5uzQjxrKzS6TjJylRbWU5jEjGvEPElckYS/XGsuXc/nbv +iQ/Pa5FxHLEIlYt5fnghIy9sV/MHnyJL7Uk4cv1XMqxLnGMTcKsZVC5tXL8Tvq9WxNwLWupMSOu XI/0qaVPOo1cQl1ZSV1ZOWbtl4EH94i+RAd3FuSJ5YwxX+YLiay4dCVGRXyUnjGTjHjvJHxwfdJp 5P1hanWlbFk3Lc+tEBQXvGFwMgZ7s9RVhzFKmMqKugQTB5GlleZHe1wkVhE+S8P+ZNv3XSVqxDK2 Vc1ed2UVzzgDVLprubYcWoYWf3PH1sRbmohxWIkD3EYm5tQlrrMZYsQyZtkFd/AXz3zjyn152RXI 6I/B33+pffEi+7LA75dvNrJ2uBWZxz4pn+sXLzq5wg/ILmMX0a8r6jrp3P2cOVn9xHjMru/m4W9y HMVL/wdfCKnVApWzkFUCnR4P8nzsi9c/pCeC/n2jv/um66aHtlvkARGfXaZDy1ATEg06AiLidxfy 3OeHgIj4Ij4/BAQAgAv4R4ABAESPVaGI76cOAAAAAElFTkSuQmCC"
        transform="translate(439.756 961.07) scale(.9694)"
      />
      <path
        className="st1"
        d="M498.8 970.3h-43.1c-3.5 0-6.3 2.8-6.3 6.2V1078.9c0 3.5 2.8 6.3 6.2 6.3H507.4c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.2V976.6c0-3.5-2.8-6.3-6.2-6.3h-82.6z"
      />

      {/* Presión Ósmosis */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(5, "Presión Ósmosis", false)}>
        <path
          className={getTarjetaClass(5, selected)}
          d="M449.5 977.7h138.1v99.8H449.5z"
        />
        <text
          transform="translate(495.127 1024.288)"
          className="st18 st10 st23">
          {"Presi\xF3n  "}
        </text>
        <text
          transform="translate(493.727 1039.888)"
          className="st18 st10 st23">
          {"Osmosis"}
        </text>
        <text
          transform="translate(502.41 1062.61)"
          className="st12 st10 st24">
          {getScaledValue(datosScada.d5, 1)}
        </text>
        <text
          transform="translate(556.77 1061.22)"
          className="st12 st10 st23">
          {"bar"}
        </text>
        <text
          transform="translate(502.86 1003.45)"
          className="st12 st10 st22">
          {"PT017"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(5, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(5, "Presión Ósmosis");
        }}>
        <path d="M465.6 1051.5c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-2 1.3-2.5 2.3z" />
        <path d="M463.9 1050.5c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.6-2.9 1.7-3.7 3.1zM475.2 1049.2c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.3z" />
        <path d="M475.8 1047.4c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6s.9 2.6.7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-.9-1.3-2.2-2.4-3.7-3.1zM476.7 1056.5v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM471.7 1064c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presión Ósmosis */}

      <circle
        className="st32"
        cx={993.9}
        cy={1115.8}
        r={9.2}
      />
      <circle
        className="st32"
        cx={1153.9}
        cy={1115.8}
        r={9.2}
      />

      {/* Estado Estanque TK-002 */}

      <g
        className="cursorPointer"
        onClick={() => loadGrafico(20, "Estado Estanque TK-002", true)}>
        <path
          className="st18"
          d="M1266 1176.9h124.8v97.7H1266z"
        />
        <path
          className="st19"
          d="M1390.6 1160.6v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1v-111.2"
        />
        <circle
          className="st37"
          style={{ fill: getColor(datosScada.d20) }}
          cx={1266.2}
          cy={1237.4}
          r={9.2}
        />
      </g>

      {/* Fin Estado Estanque TK-002 */}

      <path
        className="st21"
        d="M1344.4 1165.4c0-1 .9-1.9 1.9-1.9h9c1.1 0 1.9.9 1.9 1.9 0 .5-.2.9-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.4-.3-.6-.8-.6-1.3z"
      />
      <path
        className="st1"
        d="M1356.1 1165.4c0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.5.4-.9.9-.9h9c.5 0 1 .3 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .7.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.8.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
      />
      <path
        className="st17"
        d="M915 1222.4v160c0 5.5 4.5 10 10 10h22"
      />
      <path
        className="st25"
        d="M969.7 1383.9h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6zM954.5 1387.8l7.9 4.6c.4.2.5.7.3 1l-.3.3-7.9 4.6c-.4.2-.9.1-1.1-.3-.1-.1-.1-.2-.1-.4v-9.2c.1-.4.5-.8.9-.7.1 0 .2 0 .3.1z"
      />
      <path
        className="st25"
        d="m970.1 1398.4-7.9-4.6c-.4-.2-.5-.7-.3-1l.3-.3 7.9-4.6c.4-.2.9-.1 1.1.3.1.1.1.2.1.4v9.2c-.1.4-.5.8-.9.7-.1 0-.2 0-.3-.1z"
      />
      <path
        className="st26"
        d="M962.3 1382.9v10"
      />
      <path
        className="st27"
        d="M953.3 1374.9h18M962.3 1375.9v8"
      />
      <path
        className="st25"
        d="M1024.7 1519.9h3.7v11h-3.7z"
      />
      <path
        className="st25"
        d="M1033.7 1513.9c.7.8.7 2 0 2.8l-5.6 5.6c-.8.7-2 .7-2.8 0l-5.6-5.6c-.7-.8-.7-2 0-2.8"
      />
      <path
        className="st21"
        d="m1032.5 1504.1-4.5 4.5-.1.1c-.8.6-1.9.6-2.6-.1l-4.5-4.5c-.7-.8-.7-2 .1-2.7.4-.3.8-.5 1.3-.5h9c1 0 1.9.9 1.9 1.9 0 .5-.2 1-.6 1.3z"
      />
      <path
        className="st1"
        d="M1021.4 1502.8c0-.5.4-.9.9-.9h9.1c.5 0 .9.4.9.9 0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6m-2 0c0 .8.3 1.5.9 2l4.5 4.5c1.1 1.1 2.7 1.1 3.9.2l.1-.1.1-.1 4.5-4.5c.5-.5.8-1.3.8-2 0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9z"
      />
      <circle
        className="st32"
        cx={914.4}
        cy={1312.3}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.2,
          enableBackground: "new"
        }}
        width={181}
        height={123}
        xlinkHref="data:image/png;base64,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"
        transform="translate(720.732 1250.496) scale(.9919)"
      />
      <path
        className="st1"
        d="M836.4 1259.6h42.1c3.5 0 6.3 2.8 6.3 6.3v33.2c0 .8.3 1.6.8 2.2l5.3 6.5c1.1 1.4 1 3.3-.1 4.6l-5.1 5.5c-.6.7-.9 1.5-.9 2.4v36.9c0 3.5-2.8 6.3-6.3 6.3H736c-3.5 0-6.3-2.8-6.3-6.3v-91.3c0-3.5 2.8-6.3 6.2-6.3h100.5z"
      />

      {/* Presión de Rechazo */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(6, "Presión de Rechazo", false)}>
        <path
          className={getTarjetaClass(6, selected)}
          d="M736 1259.6h143.8v103.9H736z"
        />
        <text
          transform="translate(775.1 1304.322)"
          className="st18 st10 st23">
          {"Presi\xF3n de"}
        </text>
        <text
          transform="translate(780.52 1322.123)"
          className="st18 st10 st23">
          {"Rechazo"}
        </text>
        <text
          transform="translate(790.24 1349.1)"
          className="st12 st10 st24">
          {getScaledValue(datosScada.d6, 1)}
        </text>
        <text
          transform="translate(843.83 1347.7)"
          className="st12 st10 st23">
          {"bar"}
        </text>
        <text
          transform="translate(789.97 1285.324)"
          className="st12 st10 st22">
          {"PT025"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(6, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(6, "Presión de Rechazo");
        }}>
        <path d="M752.8 1338c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
        <path d="M751.1 1337c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM762.4 1335.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z" />
        <path d="M763 1333.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM763.8 1343v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM758.8 1350.4c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z" />
      </g>

      {/* Fin Presión de Rechazo */}

      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={164}
        height={147}
        xlinkHref="data:image/png;base64,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"
        transform="translate(917.307 959.96) scale(.9496)"
      />
      <path
        className="st1"
        d="M975.3 969.5h-43.1c-3.5 0-6.3 2.8-6.3 6.2V1078.1c0 3.5 2.8 6.3 6.2 6.3H983.9c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.2V975.8c0-3.5-2.8-6.3-6.2-6.3h-82.6z"
      />

      {/* Presión Permeado */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(11, "Presión Permeado", false)}>
        <path
          className={getTarjetaClass(11, selected)}
          d="M926 976.9h138.1v99.8H926z"
        />
        <text
          transform="translate(972.78 1024.459)"
          className="st18 st10 st23">
          {"Presi\xF3n  "}
        </text>
        <text
          transform="translate(966.68 1040.059)"
          className="st18 st10 st23">
          {"Permeado"}
        </text>
        <text
          transform="translate(978.921 1061.77)"
          className="st12 st10 st24">
          {getScaledValue(datosScada.d11, 1)}
        </text>
        <text
          transform="translate(1031.272 1061.38)"
          className="st12 st10 st23">
          {"bar"}
        </text>
        <text
          transform="translate(978.221 1003.61)"
          className="st12 st10 st22">
          {"PT020"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(11, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(11, "Presión Permeado");
        }}>
        <path d="M941.1 1050.7c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-2 1.3-2.5 2.3z" />
        <path d="M939.4 1049.7c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.6-2.9 1.7-3.7 3.1zM950.7 1048.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.8-2.5-2.3z" />
        <path d="M951.3 1046.6c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6s.9 2.6.7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-.9-1.4-2.2-2.5-3.7-3.1zM952.2 1055.7v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM947.2 1063.2c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presión Permeado */}

      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={164}
        height={147}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAACTCAYAAAAAyrJUAAAACXBIWXMAAAuIAAALiAHljilJAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB4FJREFUeNrsmwlvo0gQRgHj2Dln Z1c7////7THJ2I5vWJCqtV8qjYEkcwDvSSXsYIHdPFdXNU6SAAAAAAD0Ix3IMWEYlD9TnvTCcZBy 2iKWbxU1f4eIqXuMiFA2bDuLmb9Bxjoyt/UB05TRR+Get0rZR8jMxcwiky1SImNhcbLt2aLokinT njIGCWuR5xK5RRYREjnHXzeqjCcT8FjFwbYnEVQz55sypMpYy3dVxcJiaXFl+zRTIuO0smMh4tUi 7qrY23ZnLpwkU0alzHvKWEt4XcWtxLWFSomQ0xMyZMU6tlU8V7GpYi1OpLa/tMe9hNQGJjfhavHu q3io4pNt703MpUzf1JLTqx1PJtvORFxV8U2SVOIyY1TKLkKGmnFh4tUi/l7FH1V8tuf3kiURcrpC Hiw71lnxyZwIPoQG5ySNT2chU5ch53bwOxOwlvFLFX+alA8IOenGJsh2sKm6zow34lfYF5qc0Hmn Xsq2GlKzYxDyNxHyi2XLB3sDXkiYhpCaIZ/FhVRk3Eqjc7BEV3StITU7zqR+vDP5Psu0rULOEXKy Qoam5tl8yexvWlNubH9ur+2VIcOLc9dha1PzyTLmne2jy0bI3Mm4Mj9uzKF58nLNujVD+uyoSz43 FmHJ507+Fk6WkSEnKebZNTB7a250eTCsWetdvhfNTVsNqV12bFE8PA5rkHNknKyQqch4avAkT17f POlUQ/pMmSUvbxeqgLmciB9ZTFvIRFzIxZMr58msyZEuGbLpRxW5/C32yx+YDuF6e0dicbGkyy5k xtS9zh80ixwcGSHWg2QXZHzxPOt48FjW9N8ORIQ2h1oTVtbzoOmFEwHEfOlVxmXvPBkywoeSMQSA kAAICQgJgJCAkAAICQgJgJCAkAAICYCQgJAACAkICYCQgJAACAkICYCQgJAACAmAkICQAAgJCAmA kICQAAgJCAmAkICQAAgJgJCAkAAICQgJgJCAkAAICQgJgJCAkAAICYCQgJAACAkICYCQgJAACAkI CYCQgJAACAmAkICQAAgJCAmAkICQAAgJCAmAkICQAAgJgJCAkAAICQgJgJCAkAAICQgJgJCAkAAI CYCQgJAACAkICYCQgJAACAkICYCQgJAMASAkAEICQgL8ICFLC4CfIqQKWCIn/CoZsmyREyDmzIcI WUYkLBv2Iye0Ja6yy2yadZieQxQNEXs9QNlHxK5TthfyXMXJ4hyR801pGkYzLccS11lcOUsSi/Yg eQcZvYhHt9WTFCZ5OkIp0x9dTw0ML6E60pTEXo1H3mEACzn4wWJXxV6eX1Uxk4uWftAFHLqk5QSE LCOeqCvqSRC0aBqLvMM0rTLWIj67WFYxl6yYSZYcg3A+VMSyQcyypTEsRyjk2TypHdlaqCc7cyhk yrJvhtT0exQZ11WsqvhWxY3JmIm8M4tk4FKm8sWKbVXYsuVLrSXNmMQsxZWzCbc1PzQ29vd9JEt2 qiHV+pNkx42d4NFkXJh8hb1mYccccpZMnZAz2c7cF24WaQx17LSe0gK/lCawHIGMpcyiz5as/rV4 tOdrk/LgxqF3DakZshbyyaZplXFvbyQImQ+0jozJGD7P3GrlXEqUQqRMXRN4dvXUMVLclyOQUhPX ToT8p4q/REoV8tQ0S7RlSBVyawe9sguiMtai3pqQc5ch04EJmTohryyWEgt7TRB0JkL6WSU0gNtI YT/0LFk4R/YuQ9ZS/m1Crmwsjg3LP52WfcKgHUW8kBFKG+CQNccgZJByJtmxlu7aSpRbi2v7fEtX phQi49bGZmMXaSNyni5liYEu9aiQK3OiFvGrPd64KbvokyH9lO2L/NJlzXCRNHsOVUafHZcm410V Dxa3tl8/dya19NY1f6GG0m6z8aIMuMPWXmNtn3sln33vuuykb4ZMZFo5ujpJ68qlZEdtaobYaWci 5MI+Wy3efRWfbGDvbf+DiRrq6bMNergYj5Il1pIlYp3mUIUs3PLgXpZ+dMlHp+vyLcs+fh0ttPWF qxk2IuPMFfnJwKSMZciFSXcvhfmD7Q8DvxQhd5YVvlqEov5Jpu3jwDNk7NbfyXmhN1GObbVjVyH9 N6GpA99LcR+rHYfW2AQh5yZkqP3OMi3n8vjaCflNZNSlj42sxbVenIEJGbvFfEzit5jLt0zZsZOf 3cmPbp1u6DKqkJk0NWs39axM1jB9x4R8NBlDUb9yyx7FSISMSdn0o4qkbUbI3/AG/E301Ik45PvY TeuQoRHZS42YW8a7k647CLmWLvNJ6se9lD1Drx+blgmLhsed1lzzd3wrwqCmI8iKsfetyz9HWc4J dyMyt/6aSZ0d7mitpO6MNTNJMp772rH79knfz5m/48T+eXrh4g5VzrNMxYXURzsT8Nmyo97PP0qH GUTcJ69vmY1NxK7PP1zIricaw4CnbmkjFO1727dN/r9bk0q3qdP7wTUxRTLu30WW7x1waF8G8jVl WPjPk9e3Douk+YepY/z52XermeCylIl035nrxrPIcljhsmKCjAj5PbrvSz/a9T/J4t+GEfKHiRnr yps6S0REyF9i3BARAAAAxsh/AgwAnT5joj6xLbUAAAAASUVORK5CYII="
        transform="translate(758.34 959.96) scale(.9496)"
      />
      <path
        className="st1"
        d="M816.3 969.5h-43.1c-3.5 0-6.3 2.8-6.3 6.2V1078.1c0 3.5 2.8 6.3 6.2 6.3H824.9c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.2V975.8c0-3.5-2.8-6.3-6.2-6.3h-82.6z"
      />

      {/* Recuperación */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(0, "Recuperación", false)}>
        <path
          className={getTarjetaClass(0, selected)}
          d="M767 976.9h138.1v99.8H767z"
        />
        <text
          transform="translate(797.715 1021.059)"
          className="st18 st10 st23">
          {"Recuperaci\xF3n"}
        </text>
        <text
          transform="translate(819.955 1061.77)"
          className="st12 st10 st24">
          {getScaledValue(datosScada.d0, 1)}
        </text>
        <text
          transform="translate(872.305 1061.38)"
          className="st12 st10 st23">
          {"%"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(0, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(0, "Recuperación");
        }}>
        <path d="M782.1 1050.7c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-2 1.3-2.5 2.3z" />
        <path d="M780.4 1049.7c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.6-2.9 1.7-3.7 3.1zM791.7 1048.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.8-2.5-2.3z" />
        <path d="M792.3 1046.6c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6s.9 2.6.7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-.9-1.4-2.2-2.5-3.7-3.1zM793.2 1055.7v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM788.2 1063.2c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Recuperación */}

      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={164}
        height={147}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAACTCAYAAAAAyrJUAAAACXBIWXMAAAuIAAALiAHljilJAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABzxJREFUeNrsmouSm0YQRQGh175s J3H+//+S+KHV6i0IVPVUbtqDBIplBzinqosV6xUWHN3pGUgSAAAAAIBupHd6n5RTOzrKK6/vLmQq f4+Q0CRk2UXS/D+I6MtLCuMVs3Q/l23FzG+QMZOtrxQpR09hwhWRKhuS8yYhVcKJVe62oRByvMlY i3e2OlmFn4OYjUmZ3yBj/TdTq3lVM6upiElSjrN/LETAY1UHq729PtrvVMyyq5BexpmJuKzqwbYL q5lLSYQcVzqGJDyahFurjW1TE7RxstNFyCBjLd5jVU9VPVs9mZxzSckMIUeVjqWTsZbwrapXGz21 lduLwJ2G7FSEnJiQtXgvVb2v6oNt35mUcyuEHJ+UYbiuE3BX1bqqlY2gU/NBe8wy1k92EXIq6VgL +GtVH2373iRdumE7QcpRCrmxZPxiAZVJIp5dH3lum5CxdFxYEtYC/lbV71a/mJAPIiQJOc7ZdRBy Zb5MnKx7meScfUq26SG1f1yakO9Mwo9OyCVCjjohVciFeVOafDvbHyY4B5M0bTupSSMTmqUN2c/S Q34wIZ+ckMyyxzepCULORUZNzJWsxuSx0GrTQ4YheyrLPTrDfrHXT3YwP6OCcRASMlz/kIxbE/Ex +WeJsHEUza+koyakpmSsFjLDRshxJuVZZDzZMO0dCemoQqZdZ9lp8u87NDNXYX/OcD36oTsRV4If YTnQy/gNXZZ9wtCtYk4lEf3DFQg5LlIRU59ryCM1SRoeyMlaHsgvAWXu5xQZIeJA5uTMrgVXduWN L4kZe9wMESHtUN+Q3XCwhBSE7yBp8j2E9CnIMA1dU/IiWccDANyVjFMACAmAkICQAAgJCAmAkICQ AAgJCAmAkAAICQgJgJCAkAAICQgJgJCAkAAICQgJgJAACAkICYCQgJAACAkICYCQgJAACAkICYCQ AAgJCAmAkICQAAgJCAmAkICQAAgJCAmAkAAICQgJgJCAkAAICQgJgJCAkAAICQgJgJAACAkICYCQ gJAACAkICYCQgJAACAkICYCQAAgJCAmAkICQAAgJCAmAkICQAAgJCAmAkAAICQgJgJCAkAAICQgJ gJCAkAAICQjJKQCEBEBIQEiAOwlZWl37NwA/NCHLBkGREX7akF1eEBMgFlBlpDoJWTa8aWFVytYL CtAk4VU/so5vWrg6OzFJTbjkzFU5s5YHCPLVdarqaNuT7A8Hpa9ERB9YZ1dNo2uZtzxI4WQ8VLW3 n49OzCwZ7nJS+p17q6H1jD64TubKscEVP7omeYseUmUMIu6strat983kgk3s53RAIqZ2TtIOksZ6 6yG2NBpcRwmtmCcHc6mInYc2CRmEDAep33xT1VpqbhKW9m9zl5Jpz0UMlbn9TWLGeuqbmvwepuPR HHmzWtt2Y/sPkpKtEzKJ9AJHs7x+89eqVlV9rWop73MSOScXLl7fZMykJrb1sjYlRqyn0v1DkDF8 lpOl4Nb8+GKOrMyZjTnUmJJ5i4MWMlwH8+uDPFa1cDLuTMi8x8N2KluVcGKfK5fPp6KmLSeC54iY Zc+l1OF6b47UEv5l9dler11KdhJShxVNyLWJOHcybk3Sev80ImTaMylVtqn1yKH0S5e7ESHW5hyk f/JDVtFjIWOO7CW0ahH/qOpPS0sVMjrb7tJDHmTInsoFCMn4KkLmbmjrs5BTkbBuTx6spvY5g6QT mfic5OJspe/eusb+PBAhC0nInX3WVxPyk6VkTMjyliHb9wcTae7P8o14sgs1iyRk32RMZaiemowP 9oV7ts+6sN8t7fcz+xt/YdZ2cbS5D0tmsfXbvk9o9tLahXnGVxmyd659aT2piR3wIHIVko5ru2AL uzB97yGDkCEBF/b5Xqze2eu5SfrohNxLSoTmfmXV1Nj3PSX90uDmyiw7+iXskpB+n595z1069nm4 jgn5aDK+t5MbJnXPdqIX9rnP8iUNfdRnkfJtoEKGgIqtV+9kVDgl8Ts1rYWMDd2lm31vpKfS2aeX sS9i6oTGJ+SbTOCW9volIuRKZPwkM01NyKLHQ3Z5YYkw9NC+Gu/QdBWybEhLbWbzhnW6vq4/ZpKS c5NIl222JmSYOauQW9fUh4R8lR7y1HMhm9wo5Dz57dWlrlsSMo2ss/n1uD4O1TEpw3LOTJItVEjI lQ3bSyfk2iRsGq7PTTPNgUipjpSXhulbhdR+IXViNt21GMItw4ks1eiDJWF2/ST9ZJjU6B2trzLL 3sr79H0NsklIvz7Z6VZp/h/+A+WVNOz7gxVeypPrjcINgLXJGdYiC7f08SbJqMs9Q7qfHespY9vk XkJ6MYcopEpZRJr2MIl7EzkztxymM8yDW3sc0hM/5ZXXnU44tJ/kxO5n526pyz+u558DHML967ue bOg+fOtKgr7W1Qd9sKIY6DCNkP+Dc6VLQkny7dM+sUf5S2REyB+RlknS/DxkgogI+bMSs82kDwAA AAAA7sDfAgwAZThSbKCI+aQAAAAASUVORK5CYII="
        transform="translate(1076.273 959.718) scale(.9496)"
      />
      <path
        className="st1"
        d="M1135.3 969.5h-43.1c-3.5 0-6.3 2.8-6.3 6.2V1078.1c0 3.5 2.8 6.3 6.2 6.3H1143.9c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.2V975.8c0-3.5-2.8-6.3-6.2-6.3h-82.6z"
      />

      {/* pH Permeado */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(12, "pH Permeado", false)}>
        <path
          className={getTarjetaClass(12, selected)}
          d="M1086 976.9h138.1v99.8H1086z"
        />
        <text
          transform="translate(1145.757 1021.457)"
          className="st18 st10 st23">
          {"pH  "}
        </text>
        <text
          transform="translate(1125.857 1037.057)"
          className="st18 st10 st23">
          {"Permeado"}
        </text>
        <text
          transform="translate(1138.906 1061.77)"
          className="st12 st10 st24">
          {getScaledValue(datosScada.d12, 1)}
        </text>
        <text
          transform="translate(1194.256 1061.38)"
          className="st12 st10 st23">
          {"pH"}
        </text>
        <text
          transform="translate(1139.946 1003.61)"
          className="st12 st10 st22">
          {"AE2"}
        </text>
        <text
          transform="translate(1160.736 1003.61)"
          className="st12 st10 st22">
          {"1"}
        </text>
        <text
          transform="translate(1166.036 1003.61)"
          className="st12 st10 st22">
          {"1"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(12, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(12, "pH Permeado");
        }}>
        <path d="M1102.1 1051.7c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-2 1.3-2.5 2.3z" />
        <path d="M1100.4 1050.7c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.6-2.9 1.7-3.7 3.1zM1111.7 1049.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.8-2.5-2.3z" />
        <path d="M1112.3 1047.6c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6s.9 2.6.7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-.9-1.4-2.2-2.5-3.7-3.1zM1113.2 1056.7v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM1108.2 1064.2c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin pH Permeado */}

      <circle
        className="st32"
        cx={1072.2}
        cy={1116.9}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={164}
        height={147}
        xlinkHref="data:image/png;base64,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 rkJggg=="
        transform="matrix(.9496 0 0 -.9496 995.408 1276.57)"
      />
      <path
        className="st1"
        d="M1091.2 1267.3h45.1c3.5 0 6.3-2.8 6.3-6.2V1158.7c0-3.5-2.8-6.3-6.2-6.3H1082.6c-1.3 0-2.5-.4-3.5-1.3-6.4-6.7-6.4-6.7-12.9-.2l-.4.3c-1 .8-2.2 1.2-3.4 1.2h-51.7c-3.5 0-6.3 2.8-6.3 6.2V1261c0 3.5 2.8 6.3 6.2 6.3h80.6z"
      />

      {/* E.C. de Permeado */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(10, "E.C. de Permeado", false)}>
        <path
          className={getTarjetaClass(10, selected)}
          d="M1004.5 1160.1h138.1v99.8h-138.1z"
        />
        <text
          transform="translate(1063.174 1206.626)"
          className="st18 st10 st23">
          {"E.C.  "}
        </text>
        <text
          transform="translate(1045.874 1222.226)"
          className="st18 st10 st23">
          {"Permeado"}
        </text>
        <text
          transform="translate(1047.49 1244.11)"
          className="st12 st10 st24">
          {getScaledValue(datosScada.d10, 0)}
        </text>
        <text
          transform="translate(1057.67 1185.939)"
          className="st12 st10 st22">
          {"AE207"}
        </text>
        <text
          transform="translate(1092.33 1244.05)"
          className="st12 st10 st23">
          {"\xB5S/cm"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(10, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(10, "E.C.de Permeado");
        }}>
        <path d="M1020.6 1233.1c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-2 1.3-2.5 2.3z" />
        <path d="M1018.9 1232.1c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.6-2.9 1.7-3.7 3.1zM1030.2 1230.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.8-2.5-2.3z" />
        <path d="M1030.8 1229c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6s.9 2.6.7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-.9-1.4-2.2-2.5-3.7-3.1zM1031.7 1238.1v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM1026.7 1245.6c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin E.C. Permeado */}

      <path
        className="st17"
        d="M1202 1115.5h140.5c4.7 0 8.5 3.8 8.5 8.5v38.3"
      />
      <circle
        transform="rotate(-80.781 1014.01 535.084)"
        className="st32"
        cx={1014}
        cy={535.1}
        r={9.2}
      />

      <circle
        transform="rotate(-86.818 123.847 1142.77) scale(1.00004)"
        cx={123.8}
        cy={1142.8}
        style={{
          fill: "#fff",
          stroke: "#35ace8",
          strokeWidth: 3.9999,
          strokeMiterlimit: 9.9997
        }}
        r={9.2}
      />
      <path
        className="st1"
        d="M142.9 1294.9H188c3.5 0 6.3-2.8 6.3-6.2V1186.3c0-3.5-2.8-6.3-6.2-6.3H134.3c-1.3 0-2.5-.4-3.5-1.3-6.4-6.7-6.4-6.7-12.9-.2l-.4.3c-1 .8-2.2 1.2-3.4 1.2H62.4c-3.5 0-6.3 2.8-6.3 6.2V1288.6c0 3.5 2.8 6.3 6.2 6.3h80.6z"
      />

      {/* Presión Pre Filtros Cartucho */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(3, "Presión Pre Filtros Cartucho", false)}>
        <path
          className={getTarjetaClass(3, selected)}
          d="M56.2 1187.7h138.1v99.8H56.2z"
        />
        <text
          transform="translate(101.43 1231.461)"
          className="st18 st10 st23">
          {"Presi\xF3n"}
        </text>
        <text
          transform="translate(93.86 1248.261)"
          className="st18 st10 st23">
          {"Pre Filtros"}
        </text>
        <text
          transform="translate(108.16 1272.77)"
          className="st12 st10 st24">
          {getScaledValue(datosScada.d3, 1)}
        </text>
        <text
          transform="translate(161.43 1272.38)"
          className="st12 st10 st23">
          {"bar"}
        </text>
        <text
          transform="translate(107.27 1211.612)"
          className="st12 st10 st22">
          {"PT008"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(3, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(3, "Presión Pre Filtros Cartucho");
        }}>
        <path d="M71.3 1261.7c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-2 1.3-2.5 2.3z" />
        <path d="M69.6 1260.7c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.6-2.9 1.7-3.7 3.1zM80.9 1259.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.8-2.5-2.3z" />
        <path d="M81.5 1257.6c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6s.9 2.6.7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-.9-1.4-2.2-2.5-3.7-3.1zM82.4 1266.7v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6H82c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM77.4 1274.2c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>
      {/* Fin Presión Pre Filtros Cartucho */}

      <circle
        className="st32"
        cx={1311.9}
        cy={1115.8}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={162}
        height={144}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAACQCAYAAACLQLC9AAAACXBIWXMAAAthAAALYQFbeSumAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB1pJREFUeNrsm4lym0gQQBlAl494 k93s///f7ia+JFsSx6JUd6XdHhCSK7GB96q6ULADQXrqYyBJAgAAAB+IMJBjwjCo30Oa0HIMRETC +lRB8zcImEbEC4g4eRHbtp1C5mdIqJG6rd0P0xRRo2p53SpjfqKEVr5ctplEaoKsOE0JK4nSRGW2 rZkxP1FCjZn83cN2Lq9zJyQyTk9Cla9oYm+ikKiMkPWpItqSm4l8C4mlxEKEnLWIiJTjHk4qI+Ah thLPEltxoDC//+IYfUVUCeci3aqJyyauZHshQs5NqUbE6QwnKuLeCLg2cfDhyWXQF8fJe0gY5EC5 iHaQ7rqJGxNXsn/hsiIiTkfEQ7bbiXAH+R6auDOzROKGl/KU0hxcX7iUDHiQ70+JL018Ehk1K9In Tqs/LE1JfhIJbyUxaXVUWUvXK/44Tt5zqUbL8kqy4ecmvjbxt8j4WfavRNgsYU1xKhmxMpJtJRve S1LKjKg7icJN0ydlxNz0hiriXyLiV0SkNDsRL8SDxJVsHVx0kg59RIz1hyspwTci3xdTnq+MiLYs I+N0hpWtZEKVcG8Gl0fZbpKfy3xVn2EluIw4N9PytfSFf0jowLIwzSkiTqs8F+bzDyKh9ouapOzK StpnWAmR0qzDykpS76WLlTsJIk5LxNz4VEom9Mt7eiPkVevWt0fMjIzaK66c5XPTHzIxT2tqtqsk ZfLzhofe9FgYR3L3++HY1BwrzyqjD3+Lj0FlGoTk5QJ1dsSTLCJhr2EltoyTuxP6AyPh9GQMpkSn roraJNX2LEJIj0joRbRP36QR8RAQKUPy+iGZcKxSpmeeBPmgKzOGlgTWFmc9xNp5QIAWITtJz7Ad oK+EveGxfniP/hER4WOCiICIAIgIiAiAiICIAIgIiAiAiICIAIgIiAiAiICIAIgIiAiAiICIAIgI iAiAiICIAIgIiAiAiICIAIgIiAiAiICIAIgIiAiAiACICIgIgIiAiACICIgIgIiAiACICIgIgIiA iACICIgIgIiAiACICIgIgIiAiACICIgIgIiAiACICIgIgIiAiACICIgIgIiAiACICICIgIgAiAiI CICIgIgAiAiICICIgIgAiAiICICIgIgAiAiICICIgIgAiAiICICIgIg/qHm74A3UJs4Wse6xD1Hh t5XmmNU1EsJbE1J6hoRH0ywgYyTOErFNukNUHSdCTOiS8eweMSZh6aJCSOiQrjLRKmbe8wQqYNHE 3kQh4U8URihjeK/+aUAiVs6Vwry2iavyc0Z+wsGthLsmtrLVfTPJsCEZ3/pk2xcrnChePWIJy0iy 2jlHikgVTboyok+dpTnwcxNPLpZyLP3AUvchhYFLGFqup265vliLMsbWRa+jMo5sWxzZys/LSAVN +mZEtfxwgk0Tj008SKxMNqzkmJnJimEEAqaRP3dlS98zV5FhbwxC+tlha/xQRx5ln5fxxbXnPU6i 6XYnBzsc+L6J2yYum5gbCS/kz0MWMZht6iIzr+3Pu1qaKtIfVSNZAvOObMWPuya+iyN3IuQmkhXr PiL6jGhFvBXpFvLhVPJzFVGz4tBEjEmYyfXkkvlz04Zk7ktnM2BhylXheqRyJDL61u3JiPhvE/+J kIfEtZaKujMDbn1KRtQTqYgPIqDNhFs5kYo4c+VsqOU4lWuZyzUv3LXPzJcuuDJle+qtG+5iKw1D npRLc60q4rcm/hEZb2X/k1z/q6Wc/MwT5UbCnUj4yWXENDK0DEVG/bfncj1L6YUvpB1ZinwLVwHs l3Yrb/xG3p+NkXLfNj0OuD9UP9aSrL5LfBMxNSPaa+/VIyaRiejZ9UWF7Duc+Eo+oNkIMqJe41xC Bbw2X7iZyLkyfXFtJse1G+oejIy7SFYcekbcm2FlLeVYQ699Z9qTkxa0/Xi+M2L5cr00ImYjEnHh JNzI65nsvzLLV1ohNvKe3EtWuJPXWp7GKGJhKsHGVYLOiblvRtSTBTmZ7rNLOto3+p5piGuJaYeI N/LG3sjPruX6V3LddWRy/GYa9jGJaJOUzYp70xNr9ve98ashLT/hxFrT95GRPXeZMEuGu6Ad3LS8 kFJ8bUR6lP2f5Ft/aUTUL+atSOhF1A9nyD1i3bJUZW/t2dWCoysF+Rn2BzP5aDrO3Drb0Epy27CS mWFlLRJqQz43vd+FE1GXuGyzbnvEwq0pDhm/uuLXTsukx0J+fsYJg1mqCHIif+dhyBLGJueFKzcq 4r1kxVhpvncLumuzfFGOoD9sS1THHhmMkr/hG2CFLJNx3FsOkfXEzJUZXbidmYHEDiv75OVt0Eez dLF12TBJxnffOUniz7N2kr/xxLX78JIRyOgHlyrSAz2LoMuO5ZuNKcVjWrLpEjBJzryPHn5Ddhky ITK86NqiXWfUBfzaLOEcu5uSjFTEycryO0S0ZVqFDOZ15kQs3cQ4VgnJWu/YN/qnbzLXL8eevBn6 PWVE/MDZMWlZJWj7z2aAiL9EyK73j/9ui4gf4v1DQAAAOJP/BRgA5aJOf98nI1IAAAAASUVORK5C YII="
        transform="translate(1234.586 959.131) scale(.9694)"
      />
      <path
        className="st1"
        d="M1293.8 969.5h-43.1c-3.5 0-6.3 2.8-6.3 6.2V1078.1c0 3.5 2.8 6.3 6.2 6.3H1302.4c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.2V975.8c0-3.5-2.8-6.3-6.2-6.3h-82.6z"
      />

      {/* Caudal de Permeado */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(8, "Caudal de Permeado", false)}>
        <path
          className={getTarjetaClass(8, selected)}
          d="M1244.5 976.9h138.1v99.8h-138.1z"
        />
        <text
          transform="translate(1284.74 1038.46)"
          className="st18 st10 st23">
          {"Permeado"}
        </text>
        <text
          transform="translate(1297.41 1061.77)"
          className="st12 st10 st24">
          {getScaledValue(datosScada.d8, 1)}
        </text>
        <text
          transform="translate(1342.76 1061.38)"
          className="st12 st10 st23">
          {"m"}
        </text>
        <text
          transform="translate(1353.59 1057.05)"
          className="st12 st10 st34">
          {"3"}
        </text>
        <text
          transform="translate(1357.804 1061.38)"
          className="st12 st10 st23">
          {"/h"}
        </text>
        <text
          transform="translate(1297.31 1003.61)"
          className="st12 st10 st22">
          {"FIT003"}
        </text>
        <text
          transform="translate(1285.1 1022.46)"
          className="st18 st10 st23">
          {"Caudal de"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(8, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(8, "Caudal de Permeado");
        }}>
        <path d="M1260.6 1051.7c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-2 1.3-2.5 2.3z" />
        <path d="M1258.9 1050.7c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.6-2.9 1.7-3.7 3.1zM1270.2 1049.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.8-2.5-2.3z" />
        <path d="M1270.8 1047.6c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6s.9 2.6.7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-.9-1.4-2.2-2.5-3.7-3.1zM1271.7 1056.7v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM1266.7 1064.2c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Caudal de Permeado */}

      <path
        className="st17"
        d="M977 1391.9h40c5.5 0 10 4.5 10 10v97"
      />
      <circle
        transform="rotate(-67.5 1026.373 1447.3)"
        cx={1026.4}
        cy={1447.3}
        style={{
          fill: "#fff",
          stroke: "#35ace8",
          strokeWidth: 4.0001,
          strokeMiterlimit: 10.0003
        }}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.2,
          enableBackground: "new"
        }}
        width={181}
        height={122}
        xlinkHref="data:image/png;base64,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 salG5lQWAAAAAElFTkSuQmCC"
        transform="translate(1043.738 1387.496) scale(.9918)"
      />
      <path
        className="st1"
        d="M1108.1 1396.1h100.4c3.5 0 6.3 2.8 6.3 6.2V1493.7c0 3.5-2.8 6.3-6.3 6.3H1066c-3.5 0-6.3-2.8-6.3-6.3v-36.9c0-.9-.3-1.7-.9-2.4l-5.1-5.5c-1.1-1.3-1.2-3.2-.1-4.6l5.3-6.5c.5-.6.8-1.4.8-2.2v-33.2c0-3.5 2.8-6.3 6.3-6.3h42.1z"
      />

      {/* Caudal de Rechazo */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(17, "Caudal de Rechazo", false)}>
        <path
          className={getTarjetaClass(17, selected)}
          d="M1064.7 1396.1h143.8V1500h-143.8z"
        />
        <text
          transform="translate(1106.539 1439.822)"
          className="st18 st10 st23">
          {"Caudal de"}
        </text>
        <text
          transform="translate(1110.159 1456.622)"
          className="st18 st10 st23">
          {"Rechazo"}
        </text>
        <text
          transform="translate(1116.731 1484.6)"
          className="st12 st10"
          style={{
            fontSize: 18
          }}>
          {getScaledValue(datosScada.d17, 1)}
        </text>
        <text
          transform="translate(1162.331 1484.2)"
          className="st12 st10 st23">
          {"m"}
        </text>
        <text
          transform="translate(1173.16 1479.87)"
          className="st12 st10 st34">
          {"3"}
        </text>
        <text
          transform="translate(1177.375 1484.2)"
          className="st12 st10 st23">
          {"/h"}
        </text>
        <text
          transform="translate(1120.39 1418.32)"
          className="st12 st10 st22">
          {"FIT002"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(17, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(17, "Caudal de Rechazo");
        }}>
        <path d="M1081.3 1474.5c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
        <path d="M1079.6 1473.5c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-3 1.5-3.7 3zM1090.9 1472.2c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.2z" />
        <path d="M1091.5 1470.3c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 2.6 1 4.2 3.7 3.7 6.4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM1092.3 1479.5v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.4-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM1087.3 1486.9c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.7 1.6 1.6 1.7z" />
      </g>

      {/* Fin Caudal de Rechazo */}

      <text
        transform="translate(215.72 1206.67)"
        className="st12 st10 st22">
        {"F-006"}
      </text>
      <path
        className="st21"
        d="m511.2 889-4.5-4.5-.1-.1c-.6-.8-.6-1.9.1-2.6l4.5-4.5c.8-.7 2-.7 2.7.1.3.4.5.8.5 1.3v9c0 1-.9 1.9-1.9 1.9-.5 0-1 0-1.3-.6z"
      />
      <path
        className="st1"
        d="M512.5 877.9c.5 0 .9.4.9.9v9.1c0 .5-.4.9-.9.9-.2 0-.4-.1-.6-.3l-4.5-4.5c-.3-.4-.3-.9 0-1.3l4.5-4.5c.2-.2.4-.3.6-.3m0-2c-.8 0-1.5.3-2 .9l-4.5 4.5c-1.1 1.1-1.1 2.7-.2 3.9l.1.1.1.1 4.5 4.5c.5.5 1.3.8 2 .8 1.6 0 2.9-1.3 2.9-2.9v-9c0-1.6-1.3-2.9-2.9-2.9z"
      />
      <path
        className="st21"
        d="m62 1012.1-4.5 4.5-.1.1c-.8.6-1.9.6-2.6-.1l-4.5-4.5c-.7-.8-.7-2 .1-2.7.4-.3.8-.5 1.3-.5h9c1 0 1.9.9 1.9 1.9 0 .5 0 1-.6 1.3z"
      />
      <path
        className="st1"
        d="M50.9 1010.8c0-.5.4-.9.9-.9h9.1c.5 0 .9.4.9.9 0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6m-2 0c0 .8.3 1.5.9 2l4.5 4.5c1.1 1.1 2.7 1.1 3.9.2l.1-.1.1-.1 4.5-4.5c.5-.5.8-1.3.8-2 0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9z"
      />
      <path
        className="st21"
        d="m1396.5 693.7-4.5 4.5-.1.1c-.8.6-1.9.6-2.6-.1l-4.5-4.5c-.7-.8-.7-2 .1-2.7.3-.3.8-.5 1.3-.5h9c1 0 1.9.9 1.9 1.9 0 .5 0 1-.6 1.3z"
      />
      <path
        className="st1"
        d="M1384.4 692.4c0-.5.4-.9.9-.9h9.1c.5 0 .9.4.9.9 0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6m-2 0c0 .8.3 1.5.9 2l4.5 4.5c1.1 1.1 2.7 1.1 3.9.2l.1-.1.1-.1 4.5-4.5c.5-.5.8-1.3.8-2 0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={162}
        height={145}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAACTCAYAAAAAyrJUAAAACXBIWXMAAAuIAAALiAHljilJAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB5pJREFUeNrsnAlv20YQRpcSZR0+ kiZB////a5s41n2yFDALfBotZVFSnFB8DxjocEOa0vMcu0RDAAAAAAAAaDDZnZwDfj/FnyZLVnFM hGynkMUlomY3lBAhEfKUkGcJmt9IxE5CSkRst5wxdu69kyU+v1DGKGFVIGS72SVi60RNSplfIWPX /n2MroSKCe3LjFHAjUR8vZOseSRlXlPGjsjYK+PBRc+iS6ZsrZBbkW9lsbTHvRNryaJHUuY1ZIxC 5iZdv4xBGcMyRvY4MDFzkZLBpl09o8q4KGNuMbPXmf0sSnlRhvRlei/jYxlPFs/2OLKfRSkp2+2a sGOpjjLuJZyWMRYfvMCZHiM/U0bNjg8m3l7Az2X8ZY8vJuZQyjdlu32949qEnJuIb5akVMidZMei bsmOQsXsODAh9wJ+KeNbGV9NzBfLnH0p2xllu5VCTk3GH5agOvbzjf03sdfcaZbMz5QxDjM9Kdef TMi/Lb7Ye1VCQnsGmqUJ+WQuRBljKdchJzp2dskObpgZmHQvlhW/Wpb8lhCSHrKdyz1Lq6IxM26l jE9l0OlKljyrZGeuZPekZD+bgLGPjCV7lOgZkLIdUqqQD+ZMYa9nVsIfrbeMg+9Gs2T+jox+wo4l e2gHfrZ4kedD+WUYaNpFFDIOtIVlxomV70fzox+O16trZ0i/BjkMh2uQcR2yL78QJbt9GbLrBhi/ Tt2XhOU3ULI6PWQ3HO/Q9CXiLo1uIyJju9CK2JPkpeE3Tg4cqbPsU7WHnct7qX1spGwPHZmY9d6G U/c8hDol24upd/R0EwfPwul7I+H+M6R3pVsRyU2TzpnpN/U8SwgYkBEqXOlU+HLgW+edA4YTsmWJ 0pwxWUNFQjrLjc4VjSt3h8MlroRbCpld+DOAUy3hVRkS4JeO6QAICYCQgJAACAkICYCQgJAACAkI CYCQgJB8BICQAAgJCAmAkICQAAgJCAmAkICQAAgJgJCAkAAICQgJgJCAkAAICQgJgJCAkAAICYCQ gJAACAkICYCQgJAACAkICYCQgJAACAmAkICQAAgJCAmAkICQAAgJCAmAkICQAAgJgJCAkAAICQgJ gJCAkAAICQgJgJCAkAAICYCQgJAACAkICYCQgJAACAkICYCQgJAACAmAkICQAAgJCAmAkICQAAgJ CAmAkICQAAgJcAshCz4y+NMyZCEREo8AdTy6aclGRviQDFmceJ6KUPEekAFredE5M6X6g+4SQQmH 98T0rlzcQ+pBtxYbeb51J0NK5POJa1uRxA6SXl7jJFsn47qMlT1unKB70TOLe5Iyu+EXd69C7hKu +FA5Dz6P/IITRRH3sZSIcuaSebMbfol/goxF4nqymgLec/WIksWEtU44snJSHnwO+RkfZOFOtD/g oox5GTOJURkPJuP+33QlU4aGi6nX4P/YihPXl+rDw50Nf4UTciuOzMyTqTxfipRHPWX+zomyRHZc 2oEnZYzLeCvjsYy+SVjYyXJXurMGy5iJjB25rs47Mmp18U397k6k9Ne5MUdm4sfYYipSrl2WPKuH 9MPM2p3sZxlPZQxExrW9zhNZsolZUSXsuvByZu5L8k39JjEE7hpewlVIdWRifvyw+Glyzix7RiFr lWyfitd2sKkdfCiZcWepeG5C9hpetn1WzO2aNHInaicxCG4SQ+A6UbKaLKRPWnMR8nsZ/5qUb/b+ oiJDhksz5NT6xQfJjCuz/8lE9UJmDc2OUbZ4vQOJKGUuFSFzMsbhbyGhqxPbO+gpdxVCvpmI/5Tx nwk6rRDy7AxZJPqDrnwBsWdcWBl/dF9WFpp1V5EfYLp2LX27rpFdY+ybeyZqXzKmflYLaeq1uV9J 9ryHLJmqouNE2Z66HrKokyFDomHVMhZkqppKduxXlOwm9o5RyCjj/hpfyni2a43ZUquCzxRjafAn iT5q1/AsWTX4TiVT+qFmc8myj2/Q4xe2lPc2rq/sW8bQEta0oSZzQsZS/Wgifi7jk70e2uNI+umt tDZvlhleLcZStlZ3JKSWbJVSlwcXImOyVamTIXWSCq5PipN3X0p1Vf/YFDlTQo4sO06kIsSsqasN W/vwJ1aqXq25fzVBp7Iet21wyS4qqqgOcVWL4snrzS9Mzf69rZw8l0GgqTJmiR5yYH90+qHGP8T4 gQ9kxWFu2TD2T99dhqxai2uqkLoa41cXdHt5E07cAZRfcPIiMeisE2tzVdN1E6WMg8vQRIs7VbFn frbwGXJsEv5wyx5e7F3D1yCDW3ct3Hpr6gaccKsMGWSY0WbWS9j03ZnUpL2QEjSXHvJNSnacshfS 0L9KYz87sezR5F2bqoRVJHrkyuvMrzy5Djq7Bpfoc6btdTi+aWBqfXMcbB6kZOuO1sRN1yvJGvd0 s0Vx4vGsliS/4S+QheodmSaLGbP/1sXaBHuQNcqeZMi4HjeTaXMZjhfEwx2J+J6YZ2eBX5Vd7kFI P3X7LUTdxfE7NTplprYMw50LebU4cHrA0Z4y7lZ13PNOOLyhwt/A3PQ1xw/pk6D+oOPv9NFlriIc 3z397oQJCHlttsxOrCqkJk1ERMgPETP1WVb9DxUAIT+slJ+aNAEAAK7gfwEGAPqJViJnGLWnAAAA AElFTkSuQmCC"
        transform="translate(636.884 152.72) scale(.9627)"
      />
      <path
        className="st1"
        d="M696.3 162.5h-43.1c-3.5 0-6.3 2.8-6.3 6.2V271.1c0 3.5 2.8 6.3 6.2 6.3H704.9c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.2V168.8c0-3.5-2.8-6.3-6.2-6.3h-82.6z"
      />

      {/* Diferencial de Presión Filtros */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() =>
          loadGrafico(15, "Diferencial de Presión Filtros", false)
        }>
        <path
          className={getTarjetaClass(15, selected)}
          d="M647 169.9h138.1v99.8H647z"
        />
        <text
          transform="translate(678.006 216.466)"
          className="st18 st10 st23">
          {"Diferencial de"}
        </text>
        <text
          transform="translate(675.957 232.066)"
          className="st18 st10 st23">
          {"Presi\xF3n Filtros"}
        </text>

        <text
          transform="translate(701.197 254.781)"
          className="st12 st10 st24">
          {getScaledValue(datosScada.d15, 1)}
        </text>
        <text
          transform="translate(748.817 254.381)"
          className="st12 st10 st23">
          {"bar"}
        </text>
        <text
          transform="translate(697.667 196.616)"
          className="st12 st10 st22">
          {"DPP0"}
        </text>
        <text
          transform="translate(726.407 196.616)"
          className="st12 st10 st22">
          {"1"}
        </text>
        <text
          transform="translate(731.707 196.616)"
          className="st12 st10 st22">
          {"1"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(15, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(15, "Diferencial de Presión Filtros");
        }}>
        <path d="M663.7 244.7c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9.1-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.3z" />
        <path d="M662 243.7c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-2.9 1.6-3.7 3.1zM673.3 242.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.8-2.5-2.3z" />
        <path d="M673.9 240.6c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6s.9 2.6.7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-.9-1.4-2.2-2.5-3.7-3.1zM674.8 249.7v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1zM669.8 257.2c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.6 1.6 1.7z" />
      </g>

      {/* Fin Diferencial de Presión Filtros */}

      <circle
        className="st32"
        cx={415.7}
        cy={533.1}
        r={9.2}
      />
      <path
        className="st17"
        d="M732.6 1116.5H753"
      />
      <circle
        className="st32"
        cx={677.9}
        cy={1118.6}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={162}
        height={144}
        xlinkHref="data:image/png;base64,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 AAMAcvFNUOgj+4AAAAAASUVORK5CYII="
        transform="translate(598.722 960.16) scale(.9694)"
      />
      <path
        className="st1"
        d="M659 970.3h-43.1c-3.5 0-6.3 2.8-6.3 6.2V1078.9c0 3.5 2.8 6.3 6.2 6.3H667.6c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.2V976.6c0-3.5-2.8-6.3-6.2-6.3H659z"
      />

      {/* Caudal de Alimentación */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(7, "Caudal de Alimentación", false)}>
        <path
          className={getTarjetaClass(7, selected)}
          d="M609.7 977.7h138.1v99.8H609.7z"
        />
        <text
          transform="translate(647.51 1021.29)"
          className="st18 st10 st23">
          {"Caudal de"}
        </text>
        <text
          transform="translate(662.62 1062.61)"
          className="st12 st10 st24">
          {getScaledValue(datosScada.d7, 1)}
        </text>
        <text
          transform="translate(707.97 1062.22)"
          className="st12 st10 st23">
          {"m"}
        </text>
        <text
          transform="translate(718.8 1057.89)"
          className="st12 st10 st34">
          {"3"}
        </text>
        <text
          transform="translate(723.014 1062.22)"
          className="st12 st10 st23">
          {"/h"}
        </text>
        <text
          transform="translate(636.03 1001.45)"
          className="st12 st10 st22">
          {"FIT002 + FIT003"}
        </text>
        <text
          transform="translate(639.94 1037.29)"
          className="st18 st10 st23">
          {"Alimentaci\xF3n"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(7, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(7, "Caudal de Alimentación");
        }}>
        <path d="M625.8 1051.5c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-2 1.3-2.5 2.3z" />
        <path d="M624.1 1050.5c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.6-2.9 1.7-3.7 3.1zM635.4 1049.2c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.6-.9-1.5-1.7-2.5-2.3z" />
        <path d="M636 1047.4c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6s.9 2.6.7 3.9c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-.9-1.3-2.2-2.4-3.7-3.1zM636.9 1056.5v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM631.9 1064c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Caudal de Alimentación */}

      {/* Estado Bisulfito */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(19, "Estado Bisulfito", true)}>
        <text
          transform="translate(1053.1 470.22)"
          className="st12 st10 st22">
          {"BISULFITO"}
        </text>
        <path
          className="st19"
          d="M1102.4 388.5h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
        />
        <path
          className="st20"
          d="M1091.9 397.5h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
        />
        <path
          className="st30"
          d="M1061.9 409.2h38.8v40h-38.8z"
        />
        <path
          className="st19"
          d="M1100.7 402.5v45.2c0 .7-.4 1.3-.8 1.3h-37.1c-.5 0-.8-.6-.8-1.3v-45.2"
        />
        <circle
          className="st37"
          style={{ fill: getColor(datosScada.d19) }}
          cx={1059.7}
          cy={426.9}
          r={9.2}
        />
      </g>
      {/* Fin Estado Bisulfito */}

      <path
        className="st28"
        d="M1181 498.1v-20"
      />

      {/* Estado Antiincrustante */}

      <g
        className="cursorPointer"
        onClick={() => loadGrafico(18, "Estado Antiincrustante", true)}>
        <text
          transform="translate(1135.58 470.22)"
          className="st12 st10 st22">
          {"ANTIINCRUSTANTE"}
        </text>
        <path
          className="st19"
          d="M1206.9 388.5h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
        />
        <path
          className="st20"
          d="M1196.4 397.5h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
        />
        <path
          className="st30"
          d="M1166.4 409.2h38.8v40h-38.8z"
        />

        <path
          className="st19"
          d="M1205.2 402.5v45.2c0 .7-.4 1.3-.8 1.3h-37.1c-.5 0-.8-.6-.8-1.3v-45.2"
        />

        <circle
          className="st37"
          style={{ fill: getColor(datosScada.d18) }}
          cx={1166.7}
          cy={426.9}
          r={9.2}
        />
      </g>

      {/* Fin Estado Antiincrustante */}

      <text
        transform="translate(1281.99 1298.54)"
        className="st12 st10 st22">
        {"TK002 PRODUCTO"}
      </text>
      <path
        className="st1"
        d="M667.4 520.7c0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.5.4-.9.9-.9h9c.5 0 1 .3 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .7.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.8.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2zM1229.6 525.2c0-.3.3-.6.6-.6h6.3c.4 0 .6.3.6.6 0 .2-.1.3-.2.4l-3.1 3.1c-.3.2-.6.2-.9 0l-3.1-3.1c-.1-.1-.2-.2-.2-.4m-2 0c0 .7.3 1.3.8 1.8l3.1 3.1c.9 1 2.5 1.1 3.5.2l.1-.1.1-.1 3.1-3.1c.5-.5.8-1.1.8-1.8 0-1.4-1.2-2.6-2.6-2.6h-6.3c-1.4 0-2.6 1.2-2.6 2.6z"
      />
      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={161}
        height={143}
        xlinkHref="data:image/png;base64,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 QmCC"
        transform="rotate(180 547.173 343.306) scale(.9762)"
      />
      <path
        className="st1"
        d="M1033.4 677.4h45.1c3.5 0 6.3-2.8 6.3-6.2V568.8c0-3.5-2.8-6.3-6.2-6.3H1024.8c-1.3 0-2.5-.4-3.5-1.3-6.4-6.7-6.4-6.7-12.9-.2l-.4.3c-1 .8-2.2 1.2-3.4 1.2h-51.7c-3.5 0-6.3 2.8-6.3 6.2V671.1c0 3.5 2.8 6.3 6.2 6.3h80.6z"
      />

      {/* Presión Post Filtros */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(3, "Presión Post Filtros", false)}>
        <path
          className={getTarjetaClass(3, selected)}
          d="M946.7 570.2h138.1V670H946.7z"
        />
        <text
          transform="translate(994.227 616.628)"
          className="st18 st10 st23">
          {"Presi\xF3n  "}
        </text>
        <text
          transform="translate(985.427 632.228)"
          className="st18 st10 st23">
          {"Post Filtros"}
        </text>
        <text
          transform="translate(1001.08 657.53)"
          className="st12 st10 st24">
          {getScaledValue(datosScada.d3, 1)}
        </text>
        <text
          transform="translate(1052.8 656.73)"
          className="st12 st10 st23">
          {"bar"}
        </text>
        <text
          transform="translate(1001.41 597.88)"
          className="st12 st10 st22">
          {"PT008"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(3, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(3, "Presión Post Filtros");
        }}>
        <path d="M963.7 646.9c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5s1.1-1.3 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
        <path d="M962 645.9c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-2.9 1.6-3.7 3zM973.3 644.6c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-.9-1.5-1.7-2.5-2.2z" />
        <path d="M973.9 642.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.2.5 2.3 1.4 3 2.5.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM974.8 651.9v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM969.8 659.4c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presión Post Filtros */}

      <image
        style={{
          overflow: "visible",
          opacity: 0.3,
          enableBackground: "new"
        }}
        width={161}
        height={143}
        xlinkHref="data:image/png;base64,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 QmCC"
        transform="rotate(180 246.933 348.057) scale(.9762)"
      />
      <path
        className="st1"
        d="M432.9 686.9H478c3.5 0 6.3-2.8 6.3-6.2V578.3c0-3.5-2.8-6.3-6.2-6.3H424.3c-1.3 0-2.5-.4-3.5-1.3-6.4-6.7-6.4-6.7-12.9-.2l-.4.3c-1 .8-2.2 1.2-3.4 1.2h-51.7c-3.5 0-6.3 2.8-6.3 6.2V680.6c0 3.5 2.8 6.3 6.2 6.3h80.6z"
      />

      {/* Presión Pre Filtros */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(2, "Presión Pre Filtros", false)}>
        <path
          className={getTarjetaClass(2, selected)}
          d="M346.2 579.7h138.1v99.8H346.2z"
        />
        <text
          transform="translate(392.976 623.619)"
          className="st18 st10 st23">
          {"Presi\xF3n  "}
        </text>
        <text
          transform="translate(384.176 639.219)"
          className="st18 st10 st23">
          {"Pre Filtros"}
        </text>
        <text
          transform="translate(399.829 664.52)"
          className="st12 st10 st24">
          {getScaledValue(datosScada.d2, 1)}
        </text>
        <text
          transform="translate(451.549 663.72)"
          className="st12 st10 st23">
          {"bar"}
        </text>
        <text
          transform="translate(400.159 604.87)"
          className="st12 st10 st22">
          {"PT004"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(2, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(2, "Presión Pre Filtros");
        }}>
        <path d="M362.4 653.9c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.5s1.1-1.3 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.2z" />
        <path d="M360.7 652.9c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-2.9 1.6-3.7 3zM372 651.6c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.6.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-.9-1.5-1.7-2.5-2.2z" />
        <path d="M372.6 649.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.2.5 2.3 1.4 3 2.5.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.3-2.2-2.3-3.7-3zM373.5 658.9v-1.5c.1-2.3-1.5-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1zM368.5 666.4c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
      </g>

      {/* Fin Presión Pre Filtros */}

      <circle
        className="st32"
        cx={713.2}
        cy={312.4}
        r={9.2}
      />
    </svg>
  );
};

export default ScadaMowi;

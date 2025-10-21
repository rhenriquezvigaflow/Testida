import * as React from "react";
import {
  getColor,
  getColorConexion,
  getConexion,
  getScaledValue,
  getTarjetaClass,
  getTemaAlarma
} from "../../../../commons/scada/scada";

const ScadaEmbonorTalca = (props) => {
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
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x={0}
      y={0}
      viewBox="-20 0 1581.7 1514.9"
      style={{
        enableBackground: "new 0 0 1581.7 1514.9"
      }}
      xmlSpace="preserve"
      {...props}>
      <style>
        {
          ".st0{fill:none;stroke:#00aeed;stroke-width:4;stroke-linejoin:round;stroke-miterlimit:10}.st2{fill:#606060}.st4{font-size:11px}.st5{fill:none;stroke:#2f3e49;stroke-width:4;stroke-miterlimit:10}.st6{fill:#2f3e49}.st9{fill:#fff}.st10,.st12{opacity:.3;enable-background:new}.st12{opacity:.15}.st13{fill:#0e76e7}.st14{enable-background:new}.st16{font-size:13px}.st18{font-size:16px}.st19{opacity:.2;enable-background:new}.st23{font-size:14px}.st25{font-size:17px}.st36{fill:#666}.st45{fill:#323e48}.st46{fill:none;stroke:#323e48;stroke-width:4;stroke-miterlimit:10}.st47{fill:none;stroke:#fff;stroke-width:2}.st47,.st91,.st92,.st93{stroke-miterlimit:10}.st91{fill:#fff;stroke:#35ace8;stroke-width:4}.st92,.st93{fill:none}.st92{stroke:#323e48;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.st93{stroke:#00aeed;stroke-width:4}.st99{fill:#00aeed}.tarjeta{fill:#ffffff}.tarjetaSeleccionada{fill:#3574e0;opacity:.15}.cursorPointer{cursor:pointer}.cursorNormal{cursor:default}.campana{fill:#3474E0;}.campana:hover{fill:#7c7c7c;}.campanaVacia{fill:#c2c2c1;}.campanaVacia:hover{fill:#7c7c7c;}.campanaDesconectada{fill:#c2c2c1;}"
        }
      </style>
      <path
        className="st0"
        d="m1227.2 581.8 244.7.7 5.6 678.4"
      />
      <path
        d="M386.3 617.5v237h25.3l48.6.2c5.5 0 10-4.1 10-9.2v-9.2"
        style={{
          fill: "none",
          stroke: "#cbcbcb",
          strokeWidth: 2,
          strokeMiterlimit: 10
        }}
      />

      {/* Antiincrustante */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(19, "Estado Anttincrustante", true)}>
        <text
          transform="translate(410.035 892.449)"
          className="st2 st4">
          {"ANTIINCRUSTANTE"}
        </text>
        <path
          className="st5"
          d="M449.2 848.7v-39.2c0-1-.8-1.8-1.8-1.8h-15.2"
        />
        <path
          className="st6"
          d="M444.2 815.2v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5h14c.8 0 1.5-.7 1.5-1.5z"
        />
        <path
          style={{
            fill: "#00a39b"
          }}
          d="M433.9 828.4h38.8v40h-38.8z"
        />
        <path
          className="st5"
          d="M472.6 821.7v45.2c0 .7-.3 1.3-.8 1.3h-37.1c-.4 0-.8-.6-.8-1.3v-45.2"
        />
        <path
          className="st9"
          d="M424.8 796.6c6 0 10.9 4.9 10.9 10.9s-4.9 10.9-10.9 10.9-10.9-4.9-10.9-10.9 4.9-10.9 10.9-10.9"
        />
        {/* Color estado */}
        <path
          d="M424.8 799.3c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8"
          style={{ fill: getColor(datosScada.d19) }}
        />
      </g>
      {/* Fin Antiincrustante */}

      <path
        d="m382 615.7 3.2-3.2c.7-.5 1.6-.5 2.2.1l3.1 3.1c.3.3.5.7.5 1.1 0 .9-.7 1.6-1.6 1.6h-6.3c-.9 0-1.6-.7-1.6-1.6 0-.4.2-.8.5-1.1z"
        style={{
          fill: "#cbcbcb"
        }}
      />
      <path
        className="st9"
        d="M390.1 616.8c0 .3-.3.6-.6.6h-6.3c-.4 0-.6-.3-.6-.6 0-.2.1-.3.2-.4l3.1-3.1c.3-.2.6-.2.9 0l3.1 3.1c.1.1.2.2.2.4m2 0c0-.7-.3-1.3-.8-1.8l-3.1-3.1c-.9-1-2.5-1.1-3.5-.2l-.1.1-.1.1-3.1 3.1c-.5.5-.8 1.1-.8 1.8 0 1.4 1.2 2.6 2.6 2.6h6.3c1.4 0 2.6-1.2 2.6-2.6z"
      />
      <g className="st10">
        <defs>
          <path
            id="SVGID_1_"
            d="M1250.2 704.2h158V873h-158z"
          />
        </defs>
        <clipPath id="SVGID_2_">
          <use
            xlinkHref="#SVGID_1_"
            style={{
              overflow: "visible"
            }}
          />
        </clipPath>
        <g
          style={{
            clipPath: "url(#SVGID_2_)"
          }}>
          <defs>
            <path
              id="SVGID_3_"
              d="M1250.2 704.2h158v142.7h-158z"
            />
          </defs>
          <clipPath id="SVGID_4_">
            <use
              xlinkHref="#SVGID_3_"
              style={{
                overflow: "visible"
              }}
            />
          </clipPath>
          <g
            style={{
              clipPath: "url(#SVGID_4_)"
            }}>
            <image
              style={{
                overflow: "visible"
              }}
              width={165}
              height={149}
              xlinkHref="data:image/png;base64,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 RU5ErkJggg=="
              transform="rotate(180 704.112 422.442) scale(.9575)"
            />
          </g>
        </g>
      </g>
      <path
        className="st9"
        d="M1346.7 834.9h43.1c3.5 0 6.3-2.8 6.3-6.2V726.3c0-3.5-2.8-6.3-6.2-6.3H1338.1c-1.2 0-2.4-.4-3.4-1.2l-.4-.3c-6.5-6.5-6.5-6.5-12.9.2-1 .9-2.2 1.3-3.5 1.3h-53.7c-3.5 0-6.3 2.8-6.3 6.2V828.6c0 3.5 2.8 6.3 6.2 6.3h82.6z"
      />

      {/* pH Permeado */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(16, "pH Permeado", false)}>
        <g>
          <path
            className={getTarjetaClass(16, selected)}
            d="M1257.9 726.6H1396v101h-138.1z"
          />
        </g>
        <g className="st14">
          <defs>
            <path
              id="SVGID_5_"
              d="M1293.7 756.2h79.5v15.4h-79.5z"
            />
          </defs>
          <clipPath id="SVGID_6_">
            <use
              xlinkHref="#SVGID_5_"
              style={{
                overflow: "visible"
              }}
            />
          </clipPath>
          <text
            transform="translate(1325.626 767.402)"
            className="st13 st16">
            {"pH"}
          </text>
        </g>
        <g className="st14">
          <defs>
            <path
              id="SVGID_7_"
              d="M1292.6 771.8h81.6v15.4h-81.6z"
            />
          </defs>
          <clipPath id="SVGID_8_">
            <use
              xlinkHref="#SVGID_7_"
              style={{
                overflow: "visible"
              }}
            />
          </clipPath>
          <text
            transform="translate(1302.863 783.001)"
            className="st13 st16">
            {"Permeado"}
          </text>
        </g>
        <g className="st14">
          <text
            transform="translate(1313.373 812.282)"
            className="st2 st18">
            {getScaledValue(datosScada.d16, 1)}
          </text>
        </g>
        <g className="st14">
          <text
            transform="translate(1318.588 749.552)"
            className="st2 st4">
            {"AE012"}
          </text>
        </g>
        <g className="st14">
          <text
            transform="translate(1367.673 812.282)"
            className="st2 st16">
            {"ph"}
          </text>
        </g>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(16, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(16, "pH Permeado");
        }}>
        <path d="M1274.4 802.4c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .5-2 1.3-2.5 2.3" />
        <path d="M1272.7 801.4c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.8 1.7-3.7 3.1M1284.1 800.1c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.8-2.5-2.3" />
        <path d="M1284.7 798.3c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.4-2.2-2.5-3.7-3.1M1285.6 807.4v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1M1280.6 814.9c.9 0 1.7-.8 1.7-1.7h-3.3c-.1.9.7 1.7 1.6 1.7" />
      </g>

      {/* Fin  pH Permeado */}

      <g className="st19">
        <defs>
          <path
            id="SVGID_9_"
            d="M38.8 37.7h229v121.2h-229z"
          />
        </defs>
        <clipPath id="SVGID_10_">
          <use
            xlinkHref="#SVGID_9_"
            style={{
              overflow: "visible"
            }}
          />
        </clipPath>
        <g
          style={{
            clipPath: "url(#SVGID_10_)"
          }}>
          <defs>
            <path
              id="SVGID_11_"
              d="M38.8 37.7h229v121.2h-229z"
            />
          </defs>
          <clipPath id="SVGID_12_">
            <use
              xlinkHref="#SVGID_11_"
              style={{
                overflow: "visible"
              }}
            />
          </clipPath>
          <g
            style={{
              clipPath: "url(#SVGID_12_)"
            }}>
            <image
              style={{
                overflow: "visible"
              }}
              width={240}
              height={127}
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO4AAAB9CAYAAAClHF/PAAAACXBIWXMAAAthAAALYQFbeSumAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABMFJREFUeNrs2mlPG1cUgOGxPewJ LU2bLmqr/v//1appw05Yzbh30nPDZTB4vEBa5XmkIweD+RDp5dyxp6oAgOc3+Myvhy/d5KXCGxSP woXVhDuZJ+LBnMEOOuEObV9YetNOHpmlwx0W0Q6LGRXxChfmj7edppjb4rlHA54VWzfWNtS1NHU8 rhXxChcWi7aNdZzmJh7zlEHfU/fctDnUjTSbabZiNjvx2rzQ/5o2R3sdc1nMVTw3jp9v+oZbbtkc 6+uY3ZidiLnubF3xwuzr2tvYsm2k52nO0pzGYzsfioDvxVs/cUTO4bZhvkrzdZo3xXwTEZdbV7jQ L958BG6jvIhIj9McpjlIsx9NnXaudyd9Nu56mu00e2l+SPNjzPdFuFtTwgVmH5Xzxr2MDXuU5n2a d7Ewh8XPNcXxelLP2LbrcRxuI/0pzW9pfo6I9+J7m/EHwOe6MF/ATVzD5qPycXS1HYuwKa5/x+Xm feqoPIrq2636bWzaX9L8muZtXOOW29YRGeYLt3uduxvR1vH8RXGtexk/18Y7eCrcOjbu6/gr8F0c kd/GNe5OfL92bQsLh1vGu1Fs2vPimve4unuj6nbaNW55d9Qwtmm7Vds3p76q/n2Darc4Iq9V9++e AuYPuK7uPplpYru+iYWZt3BubTBr4w6qu5ss8sdBm/FXYb16+BEQML/ytNpEYzuxLF9FtPkj109v ANdPRDuo7t98kaee8jPA8gGPikvUfLPTeifaj70NZ/yiPgOsJtx8w9OoOD5Pva142XCB54u4nEHf cB+LGHjeaGd+SuMdYfhvBzx1YQoX/oeEC8IFhAsIF4QLCBcQLggXEC4gXBAuIFxAuIBwQbiAcAHh gnAB4QLCBeECwgWEC8IFhAsIFxAuCBcQLiBcEC4gXEC4IFxAuIBwQbiAcAHhAsIF4QLCBYQLwgWE CwgXhAsIFxAuCNd/AQgXEC4gXBAuIFxAuCBcQLiAcEG4gHAB4QLCBeECwgWEC8IFhAsIF4QLCBcQ LggXEC4gXEC4IFxAuIBwQbiAcAHhgnAB4QLCBeECwgWEC1+gSWfmCnfyyAAvE+zU7oY9f0EjYHiR aNvWbmPG8dgU3/+o7hFu+8KbYsadkIHlNUW0bWfXxeSAnwy33KjjeOFlmouY9t9bsa0b18mwErfR 2lV09iHmIp67Kbdv/cS2HccLztIcpXmfZi+iHaTZSbOWZhRfA4tv29tYiidp9tP8Hc0dRoPX5dat pwQ7KM7aN1H8SfyCgwh2GGFvRLiVeGGp69pxhHsUnR3Ev0/j+ZvyErXu8YtOovy8YdvvnafZLcJ1 XIbljsnj6KpdkH+m+T0eD+PInMOtZh2V85n7NNb2KJ6/iL8GryPcOratjQuLbdwc7kVs2ba3P9K8 i6/P+27cqjgqnxcb9SZC/is28HpxjStcWPyonK9xTyPW/ViQ+ag8ropPcuoe5+4qLo7br6/iF22n 2YzXD4toxQvzRds94V7G0fisuntXOW/bZla43Xjzv69jA6/Ha21bWO3WzZ/mlJ/hPrjpqU9wg9iq wwh1VHw9tGlhZZu3vGuq6WzZphtl1TPeaSNaWP2xuaoe3mZcLRJuJVT4rCEvHO4qXgf0j/ZR/wgw ALcpbVpEqm2tAAAAAElFTkSuQmCC"
              transform="translate(38.766 37.688) scale(.9543)"
            />
          </g>
        </g>
      </g>
      <path
        className="st9"
        d="M256.2 151.5H47.4c-3.4 0-6.1-2.7-6.1-6.1V49.7c0-3.4 2.7-6.1 6.1-6.1h208.7c3.4 0 6.1 2.7 6.1 6.1v95.6c.1 3.3-2.6 6.1-6 6.2.1 0 0 0 0 0"
      />
      <g className="st14">
        <text
          transform="translate(75.5 77.73)"
          className="st2 st23"
          style={{
            clipPath: "url(#SVGID_14_)"
          }}>
          {"Conectividad de Planta"}
        </text>
      </g>
      <g className="st14">
        <text
          transform="translate(109.29 128.21)"
          className="st2 st25">
          {getConexion(datosScada.con)}
        </text>
      </g>

      <g className="st12">
        <defs>
          <path
            id="SVGID_19_"
            d="M67.5 102.8h35.9v38.6H67.5z"
          />
        </defs>
        <clipPath id="SVGID_20_">
          <use
            xlinkHref="#SVGID_19_"
            style={{
              overflow: "visible"
            }}
          />
        </clipPath>
        <g
          style={{
            clipPath: "url(#SVGID_20_)"
          }}>
          <defs>
            <path
              id="SVGID_21_"
              d="M67.5 102.8h35.9v38.6H67.5z"
            />
          </defs>
          <clipPath id="SVGID_22_">
            <use
              xlinkHref="#SVGID_21_"
              style={{
                overflow: "visible"
              }}
            />
          </clipPath>
          <g
            style={{
              clipPath: "url(#SVGID_22_)"
            }}>
            <image
              style={{
                overflow: "visible"
              }}
              width={40}
              height={43}
              transform="translate(67.53 102.82) scale(.8973)"
            />
          </g>
        </g>
      </g>
      <path
        className="st9"
        d="M85.5 110.1c6.7 0 12.1 5.4 12.1 12.1 0 6.7-5.4 12.1-12.1 12.1-6.7 0-12.1-5.4-12.1-12.1 0-6.7 5.4-12.1 12.1-12.1"
      />
      <path
        d="M85.5 113.2c4.9 0 8.9 4 8.9 8.9s-4 8.9-8.9 8.9-8.9-4-8.9-8.9 4-8.9 8.9-8.9"
        style={{
          fill: getColorConexion(datosScada.con)
        }}
      />
      <g className="st19">
        <defs>
          <path
            id="SVGID_23_"
            d="M1225.6 37.8h284.1v176h-284.1z"
          />
        </defs>
        <clipPath id="SVGID_24_">
          <use
            xlinkHref="#SVGID_23_"
            style={{
              overflow: "visible"
            }}
          />
        </clipPath>
        <g
          style={{
            clipPath: "url(#SVGID_24_)"
          }}>
          <defs>
            <path
              id="SVGID_25_"
              d="M1225.6 37.8h284.1v176h-284.1z"
            />
          </defs>
          <clipPath id="SVGID_26_">
            <use
              xlinkHref="#SVGID_25_"
              style={{
                overflow: "visible"
              }}
            />
          </clipPath>
          <g
            style={{
              clipPath: "url(#SVGID_26_)"
            }}>
            <image
              style={{
                overflow: "visible"
              }}
              width={289}
              height={179}
              xlinkHref="data:image/png;base64,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"
              transform="translate(1225.613 37.758) scale(.9831)"
            />
          </g>
        </g>
      </g>
      <path
        className="st9"
        d="M1499 207.4h-263.2c-3.4 0-6.1-2.7-6.1-6.1V49.7c0-3.4 2.7-6.1 6.1-6.1H1499c3.4 0 6.1 2.7 6.1 6.1v151.5c0 3.4-2.7 6.2-6.1 6.2"
      />
      <path
        d="M1265.8 170.8c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8"
        style={{
          fill: "#b4002b"
        }}
      />
      <path
        d="M1265.8 93.2c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8"
        style={{
          fill: "#00cd98"
        }}
      />
      <path
        d="M1265.8 112.6c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8"
        style={{
          fill: "#3574e0"
        }}
      />
      <path
        d="M1265.8 132c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8"
        style={{
          fill: "#fbc43b"
        }}
      />
      <path
        d="M1265.8 151.5c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8"
        style={{
          fill: "#ff6200"
        }}
      />
      <g className="st14">
        <text
          transform="translate(1283.733 105.91)"
          className="st36 st23"
          style={{
            clipPath: "url(#SVGID_28_)"
          }}>
          {"Funcionando"}
        </text>
      </g>
      <g className="st14">
        <text
          transform="translate(1283.733 125.91)"
          className="st36 st23"
          style={{
            clipPath: "url(#SVGID_30_)"
          }}>
          {"Movi\xE9ndose"}
        </text>
      </g>
      <g className="st14">
        <text
          transform="translate(1283.733 145.91)"
          className="st36 st23"
          style={{
            clipPath: "url(#SVGID_32_)"
          }}>
          {"Falla"}
        </text>
      </g>
      <g className="st14">
        <text
          transform="translate(1283.733 165.91)"
          className="st36 st23"
          style={{
            clipPath: "url(#SVGID_34_)"
          }}>
          {"Bloqueada"}
        </text>
      </g>
      <g className="st14">
        <text
          transform="translate(1283.733 185.91)"
          className="st36 st23"
          style={{
            clipPath: "url(#SVGID_36_)"
          }}>
          {"Detenida"}
        </text>
      </g>
      <g className="st14">
        <text
          transform="translate(1257.773 77.73)"
          className="st2 st23"
          style={{
            clipPath: "url(#SVGID_38_)"
          }}>
          {"Funcionamiento de dispositivos"}
        </text>
      </g>
      <g
        style={{
          opacity: 0.5,
          enableBackground: "new"
        }}>
        <defs>
          <path
            id="SVGID_39_"
            d="M59.9 95.9h185.8v.5H59.9z"
          />
        </defs>
        <clipPath id="SVGID_40_">
          <use
            xlinkHref="#SVGID_39_"
            style={{
              overflow: "visible"
            }}
          />
        </clipPath>
        <path
          style={{
            clipPath: "url(#SVGID_40_)",
            fill: "none",
            stroke: "#b3b3b3",
            strokeWidth: 0.5,
            strokeMiterlimit: 10
          }}
          d="M59.9 96.2h185.8"
        />
      </g>
      <g className="st14">
        <defs>
          <path
            id="SVGID_41_"
            d="M876.6 622H906v13h-29.4z"
          />
        </defs>
        <clipPath id="SVGID_42_">
          <use
            xlinkHref="#SVGID_41_"
            style={{
              overflow: "visible"
            }}
          />
        </clipPath>
        <text
          transform="translate(876.637 631.43)"
          className="st2 st4"
          style={{
            clipPath: "url(#SVGID_42_)"
          }}>
          {"P-002"}
        </text>
      </g>
      <g className="st14">
        <text
          transform="translate(1197.634 911.837)"
          className="st2 st4">
          {"VX 002"}
        </text>
      </g>
      <path
        className="st45"
        d="M1220.3 872.1h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6M1205.1 876l7.9 4.6c.4.2.5.7.3 1l-.3.3-7.9 4.6c-.4.2-.9.1-1.1-.3-.1-.1-.1-.2-.1-.4v-9.2c.1-.4.5-.8.9-.7.1 0 .2 0 .3.1"
      />
      <path
        className="st45"
        d="m1220.7 886.6-7.9-4.6c-.4-.2-.5-.7-.3-1l.3-.3 7.9-4.6c.4-.2.9-.1 1.1.3.1.1.1.2.1.4v9.2c-.1.4-.5.8-.9.7-.1 0-.2 0-.3-.1"
      />
      <path
        className="st46"
        d="M1212.9 871.1v10"
      />
      <path
        className="st47"
        d="M1203.9 863.1h18M1212.9 864.1v8"
      />
      <g className="st14">
        <text
          transform="translate(379.8 1209.236)"
          className="st2 st4">
          {"VX 003"}
        </text>
      </g>
      <path
        className="st45"
        d="M403.6 1169.5h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6M388.4 1173.4l7.9 4.6c.4.2.5.7.3 1l-.3.3-7.9 4.6c-.4.2-.9.1-1.1-.3-.1-.1-.1-.2-.1-.4v-9.2c.1-.4.5-.8.9-.7.1 0 .2 0 .3.1"
      />
      <path
        className="st45"
        d="m404 1184-7.9-4.6c-.4-.2-.5-.7-.3-1l.3-.3 7.9-4.6c.4-.2.9-.1 1.1.3.1.1.1.2.1.4v9.2c-.1.4-.5.8-.9.7-.1 0-.2 0-.3-.1"
      />
      <path
        className="st46"
        d="M396.2 1168.5v10"
      />
      <path
        className="st47"
        d="M387.2 1160.5h18M396.2 1161.5v8"
      />
      <g className="st14">
        <text
          transform="translate(202.724 630.007)"
          className="st2 st4">
          {"VX 001"}
        </text>
      </g>
      <path
        className="st45"
        d="M229.6 590.2h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6M214.4 594.1l7.9 4.6c.4.2.5.7.3 1l-.3.3-7.9 4.6c-.4.2-.9.1-1.1-.3-.1-.1-.1-.2-.1-.4v-9.2c.1-.4.5-.8.9-.7.1 0 .2 0 .3.1"
      />
      <path
        className="st45"
        d="m230 604.7-7.9-4.6c-.4-.2-.5-.7-.3-1l.3-.3 7.9-4.6c.4-.2.9-.1 1.1.3.1.1.1.2.1.4v9.2c-.1.4-.5.8-.9.7-.1 0-.2 0-.3-.1"
      />
      <path
        className="st46"
        d="M222.2 589.2v10"
      />
      <path
        className="st47"
        d="M213.2 581.2h18M222.2 582.2v8"
      />
      <g className="st10">
        <defs>
          <path
            id="SVGID_43_"
            d="M356.9 324.2h158v142.7h-158z"
          />
        </defs>
        <clipPath id="SVGID_44_">
          <use
            xlinkHref="#SVGID_43_"
            style={{
              overflow: "visible"
            }}
          />
        </clipPath>
        <g
          style={{
            clipPath: "url(#SVGID_44_)"
          }}>
          <image
            style={{
              overflow: "visible"
            }}
            width={165}
            height={149}
            xlinkHref="data:image/png;base64,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 RU5ErkJggg=="
            transform="translate(356.932 324.15) scale(.9575)"
          />
        </g>
      </g>
      <path
        className="st9"
        d="M418.4 336.1h-43.1c-3.5 0-6.3 2.8-6.3 6.2V444.7c0 3.5 2.8 6.3 6.2 6.3H427c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.2V342.4c0-3.5-2.8-6.3-6.2-6.3h-82.6z"
      />

      {/* Diferencial e Presión F-001 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(4, "Diferencial e Presión F-001", false)}>
        <path
          d="M369.1 343.5h138.1v99.8H369.1z"
          className={getTarjetaClass(4, selected)}
        />

        <g className="st14">
          <text
            transform="translate(400.344 387.33)"
            className="st13 st16"
            style={{
              clipPath: "url(#SVGID_48_)"
            }}>
            {"Diferencial de"}
          </text>
        </g>
        <g className="st14">
          <text
            transform="translate(399.262 402.93)"
            className="st13 st16"
            style={{
              clipPath: "url(#SVGID_50_)"
            }}>
            {"Presi\xF3n F-001"}
          </text>
        </g>
        <g className="st14">
          <defs>
            <path
              id="SVGID_51_"
              d="M420.1 414.9h40v18.9h-40z"
            />
          </defs>
          <clipPath id="SVGID_52_">
            <use
              xlinkHref="#SVGID_51_"
              style={{
                overflow: "visible"
              }}
            />
          </clipPath>
          <text
            transform="translate(420.068 428.64)"
            className="st2 st18">
            {getScaledValue(datosScada.d4, 1)}
          </text>
        </g>
        <g className="st14">
          <text
            transform="translate(408.66 369.48)"
            className="st2 st4">
            {"PT001-PT007"}
          </text>
        </g>
        <g className="st14">
          <defs>
            <path
              id="SVGID_53_"
              d="M474.4 418.1h19v15.4h-19z"
            />
          </defs>
          <clipPath id="SVGID_54_">
            <use
              xlinkHref="#SVGID_53_"
              style={{
                overflow: "visible"
              }}
            />
          </clipPath>
          <text
            transform="translate(474.367 429.25)"
            className="st2 st16">
            {"bar"}
          </text>
        </g>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(4, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(4, "Diferencial e Presión F-001");
        }}>
        <path d="M381.1 419.5c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .5-2 1.3-2.5 2.3" />
        <path d="M379.4 418.5c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.8 1.7-3.7 3.1M390.8 417.2c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.8-2.5-2.3" />
        <path d="M391.4 415.4c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.4-2.2-2.5-3.7-3.1M392.3 424.5V423c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1M387.3 432c.9 0 1.7-.8 1.7-1.7h-3.3c-.1.9.7 1.7 1.6 1.7" />
      </g>

      {/* Fin Diferencial e Presión F-001 */}

      <g className="st10">
        <defs>
          <path
            id="SVGID_55_"
            d="M1250.2 589.3h158V732h-158z"
          />
        </defs>
        <clipPath id="SVGID_56_">
          <use
            xlinkHref="#SVGID_55_"
            style={{
              overflow: "visible"
            }}
          />
        </clipPath>
        <g
          style={{
            clipPath: "url(#SVGID_56_)"
          }}>
          <defs>
            <path
              id="SVGID_57_"
              d="M1250.2 589.3h158V732h-158z"
            />
          </defs>
          <clipPath id="SVGID_58_">
            <use
              xlinkHref="#SVGID_57_"
              style={{
                overflow: "visible"
              }}
            />
          </clipPath>
          <g
            style={{
              clipPath: "url(#SVGID_58_)"
            }}>
            <image
              style={{
                overflow: "visible"
              }}
              width={165}
              height={149}
              xlinkHref="data:image/png;base64,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 RU5ErkJggg=="
              transform="rotate(180 704.112 365.961) scale(.9575)"
            />
          </g>
        </g>
      </g>
      <path
        className="st9"
        d="M1346.7 720h43.1c3.5 0 6.3-2.8 6.3-6.2V611.4c0-3.5-2.8-6.3-6.2-6.3H1338.1c-1.2 0-2.4-.4-3.4-1.2l-.4-.3c-6.5-6.5-6.5-6.5-12.9.2-1 .9-2.2 1.3-3.5 1.3h-53.7c-3.5 0-6.3 2.8-6.3 6.2V713.7c0 3.5 2.8 6.3 6.2 6.3h82.6z"
      />

      {/* E.C. Permeado */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(10, "E.C. Permeado", false)}>
        <g>
          <path
            d="M1257.9 612.8H1396v99.8h-138.1z"
            className={getTarjetaClass(10, selected)}
          />
        </g>
        <g className="st14">
          <defs>
            <path
              id="SVGID_61_"
              d="M1293.7 641.3h79.5v15.4h-79.5z"
            />
          </defs>
          <clipPath id="SVGID_62_">
            <use
              xlinkHref="#SVGID_61_"
              style={{
                overflow: "visible"
              }}
            />
          </clipPath>
          <text
            transform="translate(1318.938 652.441)"
            className="st13 st16">
            {"E.C"}
          </text>
        </g>
        <g className="st14">
          <defs>
            <path
              id="SVGID_63_"
              d="M1292.6 656.9h81.6v15.4h-81.6z"
            />
          </defs>
          <clipPath id="SVGID_64_">
            <use
              xlinkHref="#SVGID_63_"
              style={{
                overflow: "visible"
              }}
            />
          </clipPath>
          <text
            transform="translate(1298.701 668.041)"
            className="st13 st16">
            {"Permeado"}
          </text>
        </g>
        <g className="st14">
          <text
            transform="translate(1309.212 698.264)"
            className="st2 st18">
            {getScaledValue(datosScada.d10, 1)}
          </text>
        </g>
        <g className="st14">
          <text
            transform="translate(1314.427 634.592)"
            className="st2 st4">
            {"AE011"}
          </text>
        </g>
        <g className="st14">
          <text
            transform="translate(1347.673 698.264)"
            className="st2 st16">
            {"uS/cm"}
          </text>
        </g>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(10, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(10, "E.C. Permeado");
        }}>
        <path d="M1274.4 688.6c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .5-2 1.3-2.5 2.3" />
        <path d="M1272.7 687.6c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.8 1.7-3.7 3.1M1284.1 686.3c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.8-2.5-2.3" />
        <path d="M1284.7 684.5c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.4-2.2-2.5-3.7-3.1M1285.6 693.6v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1M1280.6 701.1c.9 0 1.7-.8 1.7-1.7h-3.3c-.1.9.7 1.7 1.6 1.7" />
      </g>

      {/* Fin E.C. Permeado */}

      <g className="st10">
        <defs>
          <path
            id="SVGID_65_"
            d="M750.8 629.6h158v142.7h-158z"
          />
        </defs>
        <clipPath id="SVGID_66_">
          <use
            xlinkHref="#SVGID_65_"
            style={{
              overflow: "visible"
            }}
          />
        </clipPath>
        <g
          style={{
            clipPath: "url(#SVGID_66_)"
          }}>
          <defs>
            <path
              id="SVGID_67_"
              d="M750.8 629.6h158v142.7h-158z"
            />
          </defs>
          <clipPath id="SVGID_68_">
            <use
              xlinkHref="#SVGID_67_"
              style={{
                overflow: "visible"
              }}
            />
          </clipPath>
          <g
            style={{
              clipPath: "url(#SVGID_68_)"
            }}>
            <defs>
              <path
                id="SVGID_69_"
                d="M750.8 629.6h158v142.7h-158z"
              />
            </defs>
            <clipPath id="SVGID_70_">
              <use
                xlinkHref="#SVGID_69_"
                style={{
                  overflow: "visible"
                }}
              />
            </clipPath>
            <g
              style={{
                clipPath: "url(#SVGID_70_)"
              }}>
              <image
                style={{
                  overflow: "visible"
                }}
                width={165}
                height={149}
                xlinkHref="data:image/png;base64,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 RU5ErkJggg=="
                transform="rotate(180 454.4 386.12) scale(.9575)"
              />
            </g>
          </g>
        </g>
      </g>
      <path
        className="st9"
        d="M848.7 760.8h43.1c3.5 0 6.3-2.8 6.3-6.2V652.2c0-3.5-2.8-6.3-6.2-6.3H840.1c-1.2 0-2.4-.4-3.4-1.2l-.4-.3c-6.5-6.5-6.5-6.5-12.9.2-1 .9-2.2 1.3-3.5 1.3h-53.7c-3.5 0-6.3 2.8-6.3 6.2V754.5c0 3.5 2.8 6.3 6.2 6.3h82.6z"
      />

      {/* ORP Alimentación */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(14, "ORP Alimentación", false)}>
        <g>
          <path
            className={getTarjetaClass(14, selected)}
            d="M759.9 653.5H898v99.8H759.9z"
          />
        </g>
        <g className="st14">
          <g className="st14">
            <text
              transform="translate(819.604 698.264)"
              className="st13 st16">
              {"ORP"}
            </text>
          </g>
          <g className="st14">
            <text
              transform="translate(794.584 711.13)"
              className="st13 st16">
              {"Alimentaci\xF3n"}
            </text>
          </g>
        </g>
        <g className="st14">
          <text
            transform="translate(808.622 738.947)"
            className="st2 st18">
            {getScaledValue(datosScada.d14, 1)}
          </text>
        </g>
        <g className="st14">
          <text
            transform="translate(818.399 678.258)"
            className="st2 st4">
            {"AE004"}
          </text>
        </g>
        <g className="st14">
          <text
            transform="translate(865.25 738.948)"
            className="st2 st16">
            {"mV"}
          </text>
        </g>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(14, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(14, "ORP Alimentación");
        }}>
        <path d="M772 729.7c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .5-2 1.3-2.5 2.3" />
        <path d="M770.3 728.7c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.8 1.7-3.7 3.1M781.7 727.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.8-2.5-2.3" />
        <path d="M782.3 725.6c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.4-2.2-2.5-3.7-3.1M783.2 734.7v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1M778.2 742.2c.9 0 1.7-.8 1.7-1.7h-3.3c-.1.9.7 1.7 1.6 1.7" />
      </g>

      {/* Fin ORP Alimentación */}

      <g className="st10">
        <defs>
          <path
            id="SVGID_71_"
            d="M954.7 663.9h189V770h-189z"
          />
        </defs>
        <clipPath id="SVGID_72_">
          <use
            xlinkHref="#SVGID_71_"
            style={{
              overflow: "visible"
            }}
          />
        </clipPath>
        <g
          style={{
            clipPath: "url(#SVGID_72_)"
          }}>
          <defs>
            <path
              id="SVGID_73_"
              d="M954.7 663.9h189V770h-189z"
            />
          </defs>
          <clipPath id="SVGID_74_">
            <use
              xlinkHref="#SVGID_73_"
              style={{
                overflow: "visible"
              }}
            />
          </clipPath>
          <g
            style={{
              clipPath: "url(#SVGID_74_)"
            }}>
            <defs>
              <path
                id="SVGID_75_"
                d="M954.7 663.9h189V770h-189z"
              />
            </defs>
            <clipPath id="SVGID_76_">
              <use
                xlinkHref="#SVGID_75_"
                style={{
                  overflow: "visible"
                }}
              />
            </clipPath>
            <g
              style={{
                clipPath: "url(#SVGID_76_)"
              }}>
              <image
                style={{
                  overflow: "visible"
                }}
                width={164}
                height={147}
                xlinkHref="data:image/png;base64,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 RU5ErkJggg=="
                transform="matrix(0 -.7 1.2856 0 954.667 775.702)"
              />
            </g>
          </g>
        </g>
      </g>
      <path
        className="st9"
        d="M968.5 735.9V758c0 3.5 2.8 6.3 6.2 6.3h140.9c3.5 0 6.3-2.8 6.3-6.2v-30.8c0-1.2.4-2.4 1.2-3.4l.3-.4c6.5-6.5 6.5-6.5-.2-12.9-.9-1-1.3-2.2-1.3-3.5v-33.7c0-3.5-2.8-6.3-6.2-6.3H974.8c-3.5 0-6.3 2.8-6.3 6.2v62.6z"
      />

      {/* Presión de Rechazo */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(6, "Presión de Rechazo", false)}>
        <g>
          <path
            d="M975.9 667.2h138.3v97.1H975.9z"
            className={getTarjetaClass(6, selected)}
          />
        </g>
        <g className="st14">
          <text
            transform="translate(1030.371 708.268)"
            className="st13 st16">
            {"Presi\xF3n "}
          </text>
        </g>
        <g className="st14">
          <text
            transform="translate(1019.896 723.867)"
            className="st13 st16">
            {"de Rechazo"}
          </text>
        </g>

        <g className="st14">
          <defs>
            <path
              id="SVGID_79_"
              d="M1038.6 737.7h31.1v18.9h-31.1z"
            />
          </defs>
          <clipPath id="SVGID_80_">
            <use
              xlinkHref="#SVGID_79_"
              style={{
                overflow: "visible"
              }}
            />
          </clipPath>
          <text
            transform="translate(1038.65 751.474)"
            className="st2 st18">
            {getScaledValue(datosScada.d6, 1)}
          </text>
        </g>
        <g className="st14">
          <text
            transform="translate(1090.701 750.227)"
            className="st2 st16">
            {"bar"}
          </text>
        </g>

        <g className="st14">
          <text
            transform="translate(1037.71 686.699)"
            className="st2 st4">
            {"PT015"}
          </text>
        </g>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(6, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(6, "Presión de Rechazo");
        }}>
        <path d="M995.6 741.8c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9.1-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.2-2.5 2.3" />
        <path d="M993.9 740.8c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-2.9 1.6-3.7 3.1M1005.2 739.5c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3s-1.5-1.8-2.5-2.3" />
        <path d="M1005.8 737.7c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-.9-1.4-2.2-2.5-3.7-3.1M1006.7 746.8v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1M1001.7 754.3c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.6 1.6 1.7" />
      </g>

      {/* Fin Presión de Rechazo */}

      {/* TK Permeado */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(18, "Estado TK Permeado", true)}>
        <path
          className="st13"
          d="M1411 1310.9h124.8v141.4H1411z"
        />
        <path
          className="st5"
          d="M1535.6 1294.6v154.9c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1v-154.9"
        />
        <g className="st14">
          <text
            transform="translate(1432.875 1476.234)"
            className="st2 st4">
            {"TK PERMEADO"}
          </text>
        </g>

        <path
          className="st9"
          d="M1260.8 575.7c.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.5.3-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.7 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.8-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9M1411 1362.7c6 0 10.9 4.9 10.9 10.9s-4.9 10.9-10.9 10.9-10.9-4.9-10.9-10.9 4.9-10.9 10.9-10.9"
        />

        {/* Color estado */}
        <path
          d="M1411 1365.4c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8"
          style={{ fill: getColor(datosScada.d18) }}
        />
      </g>
      {/* Fin TK Permeado */}

      <path
        d="M508.1 600V485.2c0-2.8-2.3-5-5-5H362.2c-2.7 0-5 2.2-5 5v108.9"
        style={{
          fill: "none",
          stroke: "#35ace8",
          strokeWidth: 4,
          strokeMiterlimit: 10
        }}
      />
      <g className="st10">
        <defs>
          <path
            id="SVGID_83_"
            d="M1337.3 415.7h158v142.7h-158z"
          />
        </defs>
        <clipPath id="SVGID_84_">
          <use
            xlinkHref="#SVGID_83_"
            style={{
              overflow: "visible"
            }}
          />
        </clipPath>
        <g
          style={{
            clipPath: "url(#SVGID_84_)"
          }}>
          <defs>
            <path
              id="SVGID_85_"
              d="M1337.3 415.8h158v142.7h-158z"
            />
          </defs>
          <clipPath id="SVGID_86_">
            <use
              xlinkHref="#SVGID_85_"
              style={{
                overflow: "visible"
              }}
            />
          </clipPath>
          <g
            style={{
              clipPath: "url(#SVGID_86_)"
            }}>
            <image
              style={{
                overflow: "visible"
              }}
              width={165}
              height={149}
              xlinkHref="data:image/png;base64,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 RU5ErkJggg=="
              transform="translate(1337.333 415.753) scale(.9575)"
            />
          </g>
        </g>
      </g>
      <path
        className="st9"
        d="M1398.8 427.7h-43.1c-3.5 0-6.3 2.8-6.3 6.2V536.3c0 3.5 2.8 6.3 6.2 6.3H1407.4c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.2V434c0-3.5-2.8-6.3-6.2-6.3h-82.6z"
      />

      {/* Caudal de Permeado */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(11, "Caudal de Permeado", false)}>
        <path
          d="M1349.5 435.1h138.1v99.8h-138.1z"
          className={getTarjetaClass(11, selected)}
        />
        <g className="st14">
          <text
            transform="translate(1393.21 479.933)"
            className="st13 st16"
            style={{
              clipPath: "url(#SVGID_90_)"
            }}>
            {"Caudal de"}
          </text>
        </g>
        <g className="st14">
          <text
            transform="translate(1392.128 495.532)"
            className="st13 st16"
            style={{
              clipPath: "url(#SVGID_92_)"
            }}>
            {"Permeado"}
          </text>
        </g>
        <g className="st14">
          <defs>
            <path
              id="SVGID_93_"
              d="M1400.5 506.5h40v18.9h-40z"
            />
          </defs>
          <clipPath id="SVGID_94_">
            <use
              xlinkHref="#SVGID_93_"
              style={{
                overflow: "visible"
              }}
            />
          </clipPath>
          <text
            transform="translate(1400.469 520.242)"
            className="st2 st18">
            {getScaledValue(datosScada.d11, 1)}
          </text>
        </g>
        <g className="st14">
          <text
            transform="translate(1389.06 461.083)"
            className="st2 st4">
            {"FT001-FT016"}
          </text>
        </g>
        <g className="st14">
          <defs>
            <path
              id="SVGID_95_"
              d="M1454.8 509.7h19v15.4h-19z"
            />
          </defs>
          <clipPath id="SVGID_96_">
            <use
              xlinkHref="#SVGID_95_"
              style={{
                overflow: "visible"
              }}
            />
          </clipPath>
          <text
            transform="translate(1454.768 520.852)"
            className="st2 st16">
            {"bar"}
          </text>
        </g>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(11, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(11, "Caudal de Permeado");
        }}>
        <path d="M1361.5 511.1c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .5-2 1.3-2.5 2.3" />
        <path d="M1359.8 510.1c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.8 1.7-3.7 3.1M1371.2 508.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.8-2.5-2.3" />
        <path d="M1371.8 507c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.4-2.2-2.5-3.7-3.1M1372.7 516.1v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1M1367.7 523.6c.9 0 1.7-.8 1.7-1.7h-3.3c-.1.9.7 1.7 1.6 1.7" />
      </g>

      {/* Fin Caudal de Permeado */}

      <path
        className="st6"
        d="M911.2 577.5h-17.4c-1.1-.3-2.3-.4-3.4-.4-8 0-14.6 6.5-14.6 14.5v.1c0 3.9 1.5 7.6 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.7-2.7 4.2-6.4 4.2-10.3 0-1.4-.2-2.8-.6-4.2h6.8c1.5 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7"
      />
      <g className="st12">
        <defs>
          <path
            id="SVGID_97_"
            d="M873.1 574.4h33.7v34.4h-33.7z"
          />
        </defs>
        <clipPath id="SVGID_98_">
          <use
            xlinkHref="#SVGID_97_"
            style={{
              overflow: "visible"
            }}
          />
        </clipPath>
        <g
          style={{
            clipPath: "url(#SVGID_98_)"
          }}>
          <image
            style={{
              overflow: "visible"
            }}
            width={45}
            height={46}
            xlinkHref="2CC25DAC.png"
            transform="translate(873.061 574.444) scale(.7479)"
          />
        </g>
      </g>
      <path
        className="st9"
        d="M890.4 581.1c6 0 10.9 4.9 10.9 10.9s-4.9 10.9-10.9 10.9-10.9-4.9-10.9-10.9 4.8-10.9 10.9-10.9"
      />
      <g className="st12">
        <path
          className="st13"
          d="M890.4 583.8c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.5-8 8-8"
        />
      </g>

      <g className="st10">
        <defs>
          <path
            id="SVGID_99_"
            d="M585.2 629.5h158v142.7h-158z"
          />
        </defs>
        <clipPath id="SVGID_100_">
          <use
            xlinkHref="#SVGID_99_"
            style={{
              overflow: "visible"
            }}
          />
        </clipPath>
        <g
          style={{
            clipPath: "url(#SVGID_100_)"
          }}>
          <defs>
            <path
              id="SVGID_101_"
              d="M585.2 629.5h158v142.7h-158z"
            />
          </defs>
          <clipPath id="SVGID_102_">
            <use
              xlinkHref="#SVGID_101_"
              style={{
                overflow: "visible"
              }}
            />
          </clipPath>
          <g
            style={{
              clipPath: "url(#SVGID_102_)"
            }}>
            <defs>
              <path
                id="SVGID_103_"
                d="M585.2 629.5h158v142.7h-158z"
              />
            </defs>
            <clipPath id="SVGID_104_">
              <use
                xlinkHref="#SVGID_103_"
                style={{
                  overflow: "visible"
                }}
              />
            </clipPath>
            <g
              style={{
                clipPath: "url(#SVGID_104_)"
              }}>
              <image
                style={{
                  overflow: "visible"
                }}
                width={165}
                height={149}
                xlinkHref="data:image/png;base64,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 RU5ErkJggg=="
                transform="rotate(180 371.571 386.065) scale(.9575)"
              />
            </g>
          </g>
        </g>
      </g>
      <path
        className="st9"
        d="M683 760.7h43.1c3.5 0 6.3-2.8 6.3-6.2V652.1c0-3.5-2.8-6.3-6.2-6.3H674.4c-1.2 0-2.4-.4-3.4-1.2l-.4-.3c-6.5-6.5-6.5-6.5-12.9.2-1 .9-2.2 1.3-3.5 1.3h-53.7c-3.5 0-6.3 2.8-6.3 6.2V754.4c0 3.5 2.8 6.3 6.2 6.3H683z"
      />

      {/* E.C. de Alimentación */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(9, "E.C. de Alimentación", false)}>
        <g>
          <path
            d="M594.2 653.5h138.1v99.8H594.2z"
            className={getTarjetaClass(9, selected)}
          />
        </g>
        <g className="st14">
          <g className="st14">
            <text
              transform="translate(650.255 696.996)"
              className="st13 st16">
              {"E.C de"}
            </text>
          </g>
          <g className="st14">
            <text
              transform="translate(630.91 710.24)"
              className="st13 st16">
              {"Alimentaci\xF3n"}
            </text>
          </g>
        </g>
        <g className="st14">
          <text
            transform="translate(640.269 739.321)"
            className="st2 st18">
            {getScaledValue(datosScada.d9, 1)}
          </text>
        </g>
        <g className="st14">
          <text
            transform="translate(650.255 678.793)"
            className="st2 st4">
            {"AE006"}
          </text>
        </g>
        <g className="st14">
          <text
            transform="translate(686.48 738.948)"
            className="st2 st16">
            {"uS/cm"}
          </text>
        </g>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(9, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(9, "E.C. de Alimentación");
        }}>
        <path d="M606.3 729.7c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .5-2 1.3-2.5 2.3" />
        <path d="M604.6 728.7c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.8 1.7-3.7 3.1M616 727.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.8-2.5-2.3" />
        <path d="M616.6 725.6c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.4-2.2-2.5-3.7-3.1M617.5 734.7v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1M612.5 742.2c.9 0 1.7-.8 1.7-1.7h-3.3c-.1.9.7 1.7 1.6 1.7" />
      </g>

      {/* Fin E.C. de Alimentación */}

      <path
        className="st45"
        d="M449.5 578.3c0-6.7-7.8-12.1-17.5-12.1s-17.5 5.5-17.5 12.1h.1c-.1.4-.1.7-.1 1.1V617c0 3.5 3.4 6.4 7.6 6.8v6.2h5.2v-6.1h9v6.1h5.2v-6.2c4.5-.2 8-3.2 8-6.8v-37.6c0-.3-.1-.7 0-1.1"
      />
      <g className="st10">
        <defs>
          <path
            id="SVGID_107_"
            d="M274 629.6h158v142.7H274z"
          />
        </defs>
        <clipPath id="SVGID_108_">
          <use
            xlinkHref="#SVGID_107_"
            style={{
              overflow: "visible"
            }}
          />
        </clipPath>
        <g
          style={{
            clipPath: "url(#SVGID_108_)"
          }}>
          <defs>
            <path
              id="SVGID_109_"
              d="M274 629.6h158v142.7H274z"
            />
          </defs>
          <clipPath id="SVGID_110_">
            <use
              xlinkHref="#SVGID_109_"
              style={{
                overflow: "visible"
              }}
            />
          </clipPath>
          <g
            style={{
              clipPath: "url(#SVGID_110_)"
            }}>
            <defs>
              <path
                id="SVGID_111_"
                d="M274 629.6h158v142.7H274z"
              />
            </defs>
            <clipPath id="SVGID_112_">
              <use
                xlinkHref="#SVGID_111_"
                style={{
                  overflow: "visible"
                }}
              />
            </clipPath>
            <g
              style={{
                clipPath: "url(#SVGID_112_)"
              }}>
              <image
                style={{
                  overflow: "visible"
                }}
                width={165}
                height={149}
                xlinkHref="data:image/png;base64,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 RU5ErkJggg=="
                transform="rotate(180 217.08 386.119) scale(.9575)"
              />
            </g>
          </g>
        </g>
      </g>
      <path
        className="st9"
        d="M371.9 760.9H415c3.5 0 6.3-2.8 6.3-6.2V652.3c0-3.5-2.8-6.3-6.2-6.3H363.3c-1.2 0-2.4-.4-3.4-1.2l-.4-.3c-6.5-6.5-6.5-6.5-12.9.2-1 .9-2.2 1.3-3.5 1.3h-53.7c-3.5 0-6.3 2.8-6.3 6.2V754.6c0 3.5 2.8 6.3 6.2 6.3h82.6z"
      />

      {/* Presión Pre Filtros F-001 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(2, "Presión Pre Filtros F-001", false)}>
        <path
          d="M283.1 653.7h138.1v99.8H283.1z"
          className={getTarjetaClass(2, selected)}
        />

        <g className="st14">
          <g className="st14">
            <text
              transform="translate(325.826 697.534)"
              className="st13 st16">
              {"Presi\xF3n"}
            </text>
          </g>
          <g className="st14">
            <text
              transform="translate(306.48 712.78)"
              className="st13 st16">
              {"Pre filtros F-001"}
            </text>
          </g>
        </g>
        <g className="st14">
          <text
            transform="translate(327.15 738.948)"
            className="st2 st18">
            {getScaledValue(datosScada.d2, 1)}
          </text>
        </g>
        <g className="st14">
          <text
            transform="translate(336.512 679.08)"
            className="st2 st4">
            {"PT001"}
          </text>
        </g>
        <g className="st14">
          <text
            transform="translate(391.685 739.271)"
            className="st2 st16">
            {"bar"}
          </text>
        </g>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(2, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(2, "Presión Pre Filtros F-001");
        }}>
        <path d="M291.6 729.6c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .5-2 1.3-2.5 2.3" />
        <path d="M289.9 728.6c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.8 1.7-3.7 3.1M301.3 727.3c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.8-2.5-2.3" />
        <path d="M301.9 725.5c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.4-2.2-2.5-3.7-3.1M302.8 734.6v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1M297.8 742.1c.9 0 1.7-.8 1.7-1.7h-3.3c-.1.9.7 1.7 1.6 1.7" />
      </g>

      {/* Fin Presión Pre Filtros F-001 */}

      <g className="st10">
        <defs>
          <path
            id="SVGID_115_"
            d="M429.8 619.2h158v152.2h-158z"
          />
        </defs>
        <clipPath id="SVGID_116_">
          <use
            xlinkHref="#SVGID_115_"
            style={{
              overflow: "visible"
            }}
          />
        </clipPath>
        <g
          style={{
            clipPath: "url(#SVGID_116_)"
          }}>
          <defs>
            <path
              id="SVGID_117_"
              d="M429.8 628.7h158v142.7h-158z"
            />
          </defs>
          <clipPath id="SVGID_118_">
            <use
              xlinkHref="#SVGID_117_"
              style={{
                overflow: "visible"
              }}
            />
          </clipPath>
          <g
            style={{
              clipPath: "url(#SVGID_118_)"
            }}>
            <image
              style={{
                overflow: "visible"
              }}
              width={165}
              height={149}
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAACPCAYAAACS97vwAAAACXBIWXMAAAs6AAALOgFkf1cNAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB19JREFUeNrsm4ly20YQBRcHKVKW ryTO/39gYkXiJV5AwKrZqqfxAgQlxjHA7qop0rIMmGLjzewSCgEA4NbJftFjwXCo33uA8oqyISG8 Sc7yDfJlCekQENnaxKuvJWGWqFyeI+LtCli751VCvPq9EkbhfBXyPGuREDHH3WJVvFhH9+ezIpYX CFi6mpiIpXwfbfq22q6Kd6p9Uwd7PEp1ilj2EDCKNrW6k5qIjFkiEZFw3CJWIt+ptlI7q3BOxLKn gCfhZk3du7ozMSeSmMh3GyJqAp5ke2lq7UpD6XhpEqqEJ8nmTX1o6pPVx6Ye7GsxEUuS8GYE9CkY BVw2tWjqSQJJFyt1Kg3LjpVwLil4b/J9bep3e4wyzkzUsqUlwzhl1BTcmIBPFljRhTqxWOnVjn0K zizxvjT1R1N/OhHnJmrh2jEijrsV17YIiRI+S2fM7Hvi3+9FxB/SsGxJwUxWwHNLvC8m3zcR8ZOl 5NQtTmjF4xZRt2V21oofLLBy16ZfRMRD35kwNQ8+mHC/WRp+s+dRwtRMiITjngk1CWMQ5dKi44y4 tqTcmoi5Wy23JqFuy8SZ8JSGny0Rv1g71pmQT1BuryVXJlYcxyqTbWXzoS5cC6ujzItn23Fh//hO VscPVqnVsd+eQcLxCqiLk1JmwJ0JGN2I64W4cM2dH7WXMEu0Y03DmdXcHuPBpy3bMzB+IePecGzN 6sfMCeg/0Ki7ZsIQXn8+HBcoU6mJzIGFa8WIeDuLk0w8Kp0j04QjeZtsqYVJkJZchB8/Ny7D65sZ EPC20Luo/A0t3hMvYNZHwuCE8idLSYeAtyujvv95wpP83DohbxHPL1LaBEQ+yBK+tN1zmnQt73GC rOU5QGjZEbkooPILT8IWDFySiL18yfnZwU8UFAnh1wQJAQkBkBCQEAAJAQkBkBCQEAAJAQkBkBCQ EAAJAQkBkBCQEAAJAQkBkBCQEAAJAQkBkBCQEAAJAQkBkBCQEAAJAQkBkBCQEAAJAQkBkBCQEAAJ AQkBkBCQEAAJAQkBkBCQEAAJAQkBkBCQEAAJAQkBkBCQEAAJAQkBkBCQEAAJAQkBkBCQEAAJAQkB kBCQEAAJAQkBkBCQEAAJAQkBkBCQEAAJAQkBkBCQEAAJAQkBkBCQEAAJAQkBkBCQEAAJAQkBkBCQ EAAJYTAS1lLBPQfo68+bJPTiBeSDMyGVqt5JmEq6U1VW/nnvk8BNyRjeI2HqQFG6o1Qlj8gIdUto +cBqbc9lx4HjQQ5We6ljQsRIxvtyk/JFJw5S6knVFlRlh4B60J2rvZwoN/Hykc2M2RUuqjHP0eqJ hlTKk2NXxyzPxGo86LapTVNrezzVvKmJvEmFPc9GJmB2gZR1x2w0NipxZCuOnOrFamv+HFzn7J2E BznB6cCrppZNLZr60NTUxItRXEgaXiNF/m8Jc5FQn9eJi61rZViNSMQ6kYJ782MpfizMl41LxCp1 YZYtfT6eYCcCng78ZALeiYB7E3Iib85QJVTptAr32Hbh1m7hdkwM6mOR8CiOrM2Nx6b+sYoiru17 LkrCIEm4s1hd2oHnJmApAm7saxOXGEOT0AtY2OucuMdCRo+QeFN0Pjq4VjT0VPQSxk4ZJfy7qb9E xoX5s0skYeibhAc7yMpOogkYr4BTMs5EwjwxTw2pBUcBJ5bwd65UxtT4spN5aCvt6OwqcWArYpXw 5MdzU99NwijiUlryxTNhLVFb2EkK14I3Zvq9S8J8oAKqhFHAmb2+e7vY5va1qbTm2nWNuICLrehF RBxDW/bzYEzCZwuq71ZPJqEmYXK3oEvCeHVv3Rx0EPsf7I2ZJiQc2r5hlDC23pnI98nqQZJ/at9f yUW5ksH82Ynoh/OhtuLgOqUuXJ9drey1X7w6DonIzeTrezvwQpIhtqg8sUIeWhIWJthcBFyYTJ/t h66Ls6NclAubhR7dG+Fb0tCTsA6v95C3MratpfTi67VPmIrcIG05yFUfTxgTcOL2CYeehLEVRwm/ uv2vj/b3pczNKuB3EXHVMpwPOQl1IXYUEbfyWndy4XUuxsqextctKyId0vOWVfHQJIyLkjuTMKbg xs17c0nCjQn3KDNRlFAT4TgiCf0CtmtXoHPTvjxz4ko2aP1AWoh8XYuRoUmoabgSAWMKrk1Mn4RR wkcZzBfSig8DXx3XZ3ZS2vZHw3uS0J9cD+w/RRjyBnXbCnkq4ulHl0tpxzEJYzt+spb8LCkYt2nG sE+YkjCE1xv1qTurOl9vecEJMzlRZo9j+ZhO/++5rHqr8OPnwDH5UguTKN+yZRas+rwpA0vGrnsI e73O8g0nDR0nGcvNC3l4fUvSwW3Mzt0WjX68uXb7g0Nvw5c6cfFFVl7xxNmIfsiVCJb6LH0qW1K6 n6oVh/SxJWB4q2zXlPA//Q/9YvOOzjy6M1DKlpTuGhzC63vojoE7z3vPQXB+saJ30uiWVNuvQfCr D0h4dRFT9ximtiuqtwznSAiXyuh/dqnfx0Y+JPwpP7PsvStDAACAEP4VYAC5XmJrUAKFXwAAAABJ RU5ErkJggg=="
              transform="rotate(180 293.91 385.674) scale(.9575)"
            />
          </g>
        </g>
      </g>
      <path
        className="st9"
        d="M526.4 760.9h43.1c3.5 0 6.3-2.8 6.3-6.2V652.3c0-3.5-2.8-6.3-6.2-6.3H517.8c-1.2 0-2.4-.4-3.4-1.2l-.4-.3c-6.5-6.5-6.5-6.5-12.9.2-1 .9-2.2 1.3-3.5 1.3h-53.7c-3.5 0-6.3 2.8-6.3 6.2V754.6c0 3.5 2.8 6.3 6.2 6.3h82.6z"
      />

      {/* Presión Post Filtros F-001 */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(3, "Presión Post Filtros F-001", false)}>
        <g>
          <path
            d="M437.6 653.7h138.1v99.8H437.6z"
            className={getTarjetaClass(3, selected)}
          />
        </g>
        <g className="st14">
          <text
            transform="translate(489.286 698.073)"
            className="st13 st16">
            {"Presi\xF3n"}
          </text>
        </g>
        <g className="st14">
          <text
            transform="translate(460.033 712.118)"
            className="st13 st16">
            {"Post Filtros F-001"}
          </text>
        </g>
        <g className="st14">
          <text
            transform="translate(486.021 742.17)"
            className="st2 st18">
            {getScaledValue(datosScada.d3, 1)}
          </text>
        </g>
        <g className="st14">
          <text
            transform="translate(493.884 678.84)"
            className="st2 st4">
            {"PT007"}
          </text>
        </g>
        <g className="st14">
          <text
            transform="translate(539.563 740.99)"
            className="st2 st16">
            {"bar"}
          </text>
        </g>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(3, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(3, "Presión Post Filtros F-001");
        }}>
        <path d="M453.9 729.5c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .5-2 1.3-2.5 2.3" />
        <path d="M452.2 728.5c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.8 1.7-3.7 3.1M463.6 727.2c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.8-2.5-2.3" />
        <path d="M464.2 725.4c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.4-2.2-2.5-3.7-3.1M465.1 734.5V733c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1M460.1 742c.9 0 1.7-.8 1.7-1.7h-3.3c-.1.9.7 1.7 1.6 1.7" />
      </g>

      {/* Fin Presión Post Filtros F-001 */}

      <g className="st10">
        <defs>
          <path
            id="SVGID_121_"
            d="M871.2 416h158v152.2h-158z"
          />
        </defs>
        <clipPath id="SVGID_122_">
          <use
            xlinkHref="#SVGID_121_"
            style={{
              overflow: "visible"
            }}
          />
        </clipPath>
        <g
          style={{
            clipPath: "url(#SVGID_122_)"
          }}>
          <defs>
            <path
              id="SVGID_123_"
              d="M871.2 416h158v142.7h-158z"
            />
          </defs>
          <clipPath id="SVGID_124_">
            <use
              xlinkHref="#SVGID_123_"
              style={{
                overflow: "visible"
              }}
            />
          </clipPath>
          <g
            style={{
              clipPath: "url(#SVGID_124_)"
            }}>
            <image
              style={{
                overflow: "visible"
              }}
              width={165}
              height={149}
              xlinkHref="data:image/png;base64,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 RU5ErkJggg=="
              transform="translate(871.242 415.977) scale(.9575)"
            />
          </g>
        </g>
      </g>
      <path
        className="st9"
        d="M932.7 426.5h-43.1c-3.5 0-6.3 2.8-6.3 6.2V535.1c0 3.5 2.8 6.3 6.2 6.3H941.3c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.2V432.8c0-3.5-2.8-6.3-6.2-6.3h-82.6z"
      />

      {/* Presión Ósmosis */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(5, "Presión Ósmosis", false)}>
        <path
          className={getTarjetaClass(5, selected)}
          d="M883.4 433.9h138.1v99.8H883.4z"
        />
        <g className="st14">
          <text
            transform="translate(932.543 478.015)"
            className="st13 st16">
            {"Presi\xF3n"}
          </text>
        </g>
        <g className="st14">
          <text
            transform="translate(929.107 492.06)"
            className="st13 st16">
            {"Osmosis"}
          </text>
        </g>
        <g className="st14">
          <text
            transform="translate(932.542 519.439)"
            className="st2 st18">
            {getScaledValue(datosScada.d5, 1)}
          </text>
        </g>
        <g className="st14">
          <text
            transform="translate(937.14 458.782)"
            className="st2 st4">
            {"PT009"}
          </text>
        </g>
        <g className="st14">
          <text
            transform="translate(989.75 519.438)"
            className="st2 st16">
            {"bar"}
          </text>
        </g>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(5, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(5, "Presión Ósmosis");
        }}>
        <path d="M901.2 509.7c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .5-2 1.3-2.5 2.3" />
        <path d="M899.5 508.7c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.8 1.7-3.7 3.1M910.9 507.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.8-2.5-2.3" />
        <path d="M911.5 505.6c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.4-2.2-2.5-3.7-3.1M912.4 514.7v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1M907.4 522.2c.9 0 1.7-.8 1.7-1.7h-3.3c-.1.9.7 1.7 1.6 1.7" />
      </g>

      {/* Fin Presión Ósmosis */}

      <g className="st10">
        <defs>
          <path
            id="SVGID_127_"
            d="M1089.4 415h158v152.2h-158z"
          />
        </defs>
        <clipPath id="SVGID_128_">
          <use
            xlinkHref="#SVGID_127_"
            style={{
              overflow: "visible"
            }}
          />
        </clipPath>
        <g
          style={{
            clipPath: "url(#SVGID_128_)"
          }}>
          <defs>
            <path
              id="SVGID_129_"
              d="M1089.4 415h158v142.7h-158z"
            />
          </defs>
          <clipPath id="SVGID_130_">
            <use
              xlinkHref="#SVGID_129_"
              style={{
                overflow: "visible"
              }}
            />
          </clipPath>
          <g
            style={{
              clipPath: "url(#SVGID_130_)"
            }}>
            <image
              style={{
                overflow: "visible"
              }}
              width={165}
              height={149}
              xlinkHref="data:image/png;base64,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 RU5ErkJggg=="
              transform="translate(1089.374 414.98) scale(.9575)"
            />
          </g>
        </g>
      </g>
      <path
        className="st9"
        d="M1150.8 425.5h-43.1c-3.5 0-6.3 2.8-6.3 6.2V534.1c0 3.5 2.8 6.3 6.2 6.3H1159.4c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.2V431.8c0-3.5-2.8-6.3-6.2-6.3h-82.6z"
      />

      {/* Recuperación */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(0, "Recuperación", false)}>
        <path
          d="M1101.5 432.9h138.1v99.8h-138.1z"
          className={getTarjetaClass(0, selected)}
        />
        <g className="st14">
          <text
            transform="translate(1134.202 482.762)"
            className="st13 st16">
            {"Recuperaci\xF3n"}
          </text>
        </g>
        <g className="st14">
          <text
            transform="translate(1150.675 518.709)"
            className="st2 st18">
            {getScaledValue(datosScada.d0, 1)}
          </text>
        </g>
        <g className="st14">
          <text
            transform="translate(1207.216 518.709)"
            className="st2 st16">
            {"%"}
          </text>
        </g>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(0, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(0, "Recuperación");
        }}>
        <path d="M1119.4 508.7c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .5-2 1.3-2.5 2.3" />
        <path d="M1117.7 507.7c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.8 1.7-3.7 3.1M1129.1 506.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.8-2.5-2.3" />
        <path d="M1129.7 504.6c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.4-2.2-2.5-3.7-3.1M1130.6 513.7v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1M1125.6 521.2c.9 0 1.7-.8 1.7-1.7h-3.3c-.1.9.7 1.7 1.6 1.7" />
      </g>

      {/* Fin Recuperación */}

      <g className="st10">
        <defs>
          <path
            id="SVGID_133_"
            d="M1226 955.4h158v142.7h-158z"
          />
        </defs>
        <clipPath id="SVGID_134_">
          <use
            xlinkHref="#SVGID_133_"
            style={{
              overflow: "visible"
            }}
          />
        </clipPath>
        <g
          style={{
            clipPath: "url(#SVGID_134_)"
          }}>
          <defs>
            <path
              id="SVGID_135_"
              d="M1226 955.4h158v142.7h-158z"
            />
          </defs>
          <clipPath id="SVGID_136_">
            <use
              xlinkHref="#SVGID_135_"
              style={{
                overflow: "visible"
              }}
            />
          </clipPath>
          <g
            style={{
              clipPath: "url(#SVGID_136_)"
            }}>
            <image
              style={{
                overflow: "visible"
              }}
              width={165}
              height={149}
              xlinkHref="data:image/png;base64,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 RU5ErkJggg=="
              transform="matrix(-.9905 0 0 -.9754 1387.158 1100.78)"
            />
          </g>
        </g>
      </g>
      <path
        className="st9"
        d="M1322 1089.9h43.1c3.5 0 6.3-2.8 6.3-6.2V981.3c0-3.5-2.8-6.3-6.2-6.3H1313.4c-1.2 0-2.4-.4-3.4-1.2l-.4-.3c-6.5-6.5-6.5-6.5-12.9.2-1 .9-2.2 1.3-3.5 1.3h-53.7c-3.5 0-6.3 2.8-6.3 6.2V1083.6c0 3.5 2.8 6.3 6.2 6.3h82.6z"
      />

      {/* Caudal de Concentrado */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(8, "Caudal de Concentrado", false)}>
        <g>
          <path
            d="M1233.2 982.7h138.1v99.8h-138.1z"
            className={getTarjetaClass(8, selected)}
          />
        </g>
        <g className="st14">
          <text
            transform="translate(1282.836 1068.67)"
            className="st2 st18">
            {getScaledValue(datosScada.d8, 1)}
          </text>
        </g>
        <g className="st14">
          <text
            transform="translate(1285.32 1002.72)"
            className="st2 st4">
            {"FIT016"}
          </text>
        </g>
        <g className="st14">
          <text
            transform="translate(1337.387 1068.67)"
            className="st2 st16">
            {"m3/h"}
          </text>
        </g>
        <text
          transform="translate(1272.191 1024.754)"
          className="st13 st16">
          {"Caudal de"}
        </text>
        <text
          transform="translate(1264.605 1040.354)"
          className="st13 st16">
          {"Concentrado"}
        </text>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(8, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(8, "Caudal de Concentrado");
        }}>
        <path d="M1249.7 1059.6c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .5-2 1.3-2.5 2.3" />
        <path d="M1248 1058.6c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.8 1.7-3.7 3.1M1259.4 1057.3c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.8-2.5-2.3" />
        <path d="M1260 1055.5c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.4-2.2-2.5-3.7-3.1M1260.9 1064.6v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1M1255.9 1072.1c.9 0 1.7-.8 1.7-1.7h-3.3c-.1.9.7 1.7 1.6 1.7" />
      </g>

      {/* Fin Caudal de Concentrado */}

      <path
        className="st0"
        d="M1432.6 973.3v-29.6h-151.8v-65h-45M1163.4 652.1v229.2h30.9M1155.8 943.7h-80.5v-116h88.1"
      />
      <g className="st10">
        <defs>
          <path
            id="SVGID_139_"
            d="M507.1 442.8h158V595h-158z"
          />
        </defs>
        <clipPath id="SVGID_140_">
          <use
            xlinkHref="#SVGID_139_"
            style={{
              overflow: "visible"
            }}
          />
        </clipPath>
        <g
          style={{
            clipPath: "url(#SVGID_140_)"
          }}>
          <defs>
            <path
              id="SVGID_141_"
              d="M507.1 442.8h158v142.7h-158z"
            />
          </defs>
          <clipPath id="SVGID_142_">
            <use
              xlinkHref="#SVGID_141_"
              style={{
                overflow: "visible"
              }}
            />
          </clipPath>
          <g
            style={{
              clipPath: "url(#SVGID_142_)"
            }}>
            <image
              style={{
                overflow: "visible"
              }}
              width={165}
              height={149}
              xlinkHref="data:image/png;base64,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 RU5ErkJggg=="
              transform="translate(507.058 442.818) scale(.9575)"
            />
          </g>
        </g>
      </g>
      <path
        className="st9"
        d="M568.5 453.3h-43.1c-3.5 0-6.3 2.8-6.3 6.2V561.9c0 3.5 2.8 6.3 6.2 6.3H577.1c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3H651c3.5 0 6.3-2.8 6.3-6.2V459.6c0-3.5-2.8-6.3-6.2-6.3h-82.6z"
      />

      {/* pH Alimentación */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(12, "pH Alimentación", false)}>
        <path
          d="M519.2 460.7h138.1v99.8H519.2z"
          className={getTarjetaClass(12, selected)}
        />
        <g className="st14">
          <text
            transform="translate(580.655 503.495)"
            className="st13 st16">
            {"pH"}
          </text>
        </g>
        <g className="st14">
          <text
            transform="translate(551.761 520.295)"
            className="st13 st16">
            {"Alimentaci\xF3n"}
          </text>
        </g>
        <g className="st14">
          <defs>
            <path
              id="SVGID_145_"
              d="M568.2 533.1h40V552h-40z"
            />
          </defs>
          <clipPath id="SVGID_146_">
            <use
              xlinkHref="#SVGID_145_"
              style={{
                overflow: "visible"
              }}
            />
          </clipPath>
          <text
            transform="translate(568.245 546.805)"
            className="st2 st18">
            {getScaledValue(datosScada.d12, 1)}
          </text>
        </g>
        <g className="st14">
          <text
            transform="translate(571.54 484.647)"
            className="st2 st4">
            {"FIT005"}
          </text>
        </g>
        <g className="st14">
          <text
            transform="translate(624.314 546.415)"
            className="st2 st16">
            {"ph"}
          </text>
        </g>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(12, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(12, "pH Alimentación");
        }}>
        <path d="M533.9 537.1c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .5-2 1.3-2.5 2.3" />
        <path d="M532.2 536.1c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.8 1.7-3.7 3.1M543.6 534.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.8-2.5-2.3" />
        <path d="M544.2 533c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.4-2.2-2.5-3.7-3.1M545.1 542.1v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1M540.1 549.6c.9 0 1.7-.8 1.7-1.7h-3.3c-.1.9.7 1.7 1.6 1.7" />
      </g>

      {/* Fin pH Alimentación */}

      <g className="st10">
        <defs>
          <path
            id="SVGID_147_"
            d="M667.1 442.8h158V595h-158z"
          />
        </defs>
        <clipPath id="SVGID_148_">
          <use
            xlinkHref="#SVGID_147_"
            style={{
              overflow: "visible"
            }}
          />
        </clipPath>
        <g
          style={{
            clipPath: "url(#SVGID_148_)"
          }}>
          <defs>
            <path
              id="SVGID_149_"
              d="M667.1 442.8h158v142.7h-158z"
            />
          </defs>
          <clipPath id="SVGID_150_">
            <use
              xlinkHref="#SVGID_149_"
              style={{
                overflow: "visible"
              }}
            />
          </clipPath>
          <g
            style={{
              clipPath: "url(#SVGID_150_)"
            }}>
            <image
              style={{
                overflow: "visible"
              }}
              width={165}
              height={149}
              xlinkHref="data:image/png;base64,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 RU5ErkJggg=="
              transform="translate(667.15 442.818) scale(.9575)"
            />
          </g>
        </g>
      </g>
      <path
        className="st9"
        d="M728.6 453.3h-43.1c-3.5 0-6.3 2.8-6.3 6.2V561.9c0 3.5 2.8 6.3 6.2 6.3H737.2c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.2V459.6c0-3.5-2.8-6.3-6.2-6.3h-82.6z"
      />

      {/* Temperatura */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(13, "Temperatura", false)}>
        <path
          className={getTarjetaClass(13, selected)}
          d="M679.3 460.7h138.1v99.8H679.3z"
        />
        <g className="st14">
          <text
            transform="translate(711.853 503.495)"
            className="st13 st16">
            {"Temperatura"}
          </text>
        </g>
        <g className="st14">
          <defs>
            <path
              id="SVGID_153_"
              d="M728.3 533.1h40V552h-40z"
            />
          </defs>
          <clipPath id="SVGID_154_">
            <use
              xlinkHref="#SVGID_153_"
              style={{
                overflow: "visible"
              }}
            />
          </clipPath>
          <text
            transform="translate(728.336 546.805)"
            className="st2 st18">
            {getScaledValue(datosScada.d13, 1)}
          </text>
        </g>
        <g className="st14">
          <text
            transform="translate(788.799 546.415)"
            className="st2 st16">
            {"\xB0C"}
          </text>
        </g>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(13, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(13, "Temperatura");
        }}>
        <path d="M693.8 537.2c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .5-2 1.3-2.5 2.3" />
        <path d="M692.1 536.2c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.8 1.7-3.7 3.1M703.5 534.9c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.8-2.5-2.3" />
        <path d="M704.1 533.1c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.4-2.2-2.5-3.7-3.1M705 542.2v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1M700 549.7c.9 0 1.7-.8 1.7-1.7h-3.3c-.1.9.7 1.7 1.6 1.7" />
      </g>

      {/* Fin Temperatura */}

      <circle
        transform="rotate(-22.5 1163.306 716.933)"
        className="st91"
        cx={1163.4}
        cy={717}
        r={9.2}
      />
      <path
        className="st45"
        d="m1162.5 938.4 7.9 4.6c.4.2.5.7.3 1l-.3.3-7.9 4.6c-.4.2-.9.1-1.1-.3-.1-.1-.1-.2-.1-.4V939c.1-.4.5-.8.9-.7.1 0 .2 0 .3.1"
      />
      <path
        className="st45"
        d="m1178.1 949-7.9-4.6c-.4-.2-.5-.7-.3-1l.3-.3 7.9-4.6c.4-.2.9-.1 1.1.3.1.1.1.2.1.4v9.2c-.1.4-.5.8-.9.7-.1 0-.2 0-.3-.1"
      />
      <path
        className="st0"
        d="M1185.9 943.8h110.4"
      />
      <path
        className="st92"
        d="M1170.5 943v-8.7M1159.6 934.3h20.4"
      />
      <circle
        transform="rotate(-22.5 1302.218 942.978)"
        className="st91"
        cx={1302.3}
        cy={943}
        r={9.2}
      />
      <g className="st14">
        <path
          className="st2"
          d="M1429.2 1004.7v-10.2l-8.9-14.1h22.8l-8.9 14.1v10.2h-5z"
        />
      </g>
      <path
        className="st0"
        d="M419 1182.2h1058.5"
      />
      <path
        className="st93"
        d="M186 600v582.2h188.1"
      />
      <circle
        transform="rotate(-22.5 280.688 1182.913)"
        className="st91"
        cx={280.7}
        cy={1183}
        r={9.2}
      />
      <g className="st10">
        <defs>
          <path
            id="SVGID_155_"
            d="M202.5 1211.4h158v142.7h-158z"
          />
        </defs>
        <clipPath id="SVGID_156_">
          <use
            xlinkHref="#SVGID_155_"
            style={{
              overflow: "visible"
            }}
          />
        </clipPath>
        <g
          style={{
            clipPath: "url(#SVGID_156_)"
          }}>
          <defs>
            <path
              id="SVGID_157_"
              d="M202.5 1211.4h158v142.7h-158z"
            />
          </defs>
          <clipPath id="SVGID_158_">
            <use
              xlinkHref="#SVGID_157_"
              style={{
                overflow: "visible"
              }}
            />
          </clipPath>
          <g
            style={{
              clipPath: "url(#SVGID_158_)"
            }}>
            <defs>
              <path
                id="SVGID_159_"
                d="M202.5 1211.4h158v142.7h-158z"
              />
            </defs>
            <clipPath id="SVGID_160_">
              <use
                xlinkHref="#SVGID_159_"
                style={{
                  overflow: "visible"
                }}
              />
            </clipPath>
            <g
              style={{
                clipPath: "url(#SVGID_160_)"
              }}>
              <image
                style={{
                  overflow: "visible"
                }}
                width={165}
                height={149}
                xlinkHref="data:image/png;base64,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 RU5ErkJggg=="
                transform="rotate(180 180.251 677.047) scale(.9575)"
              />
            </g>
          </g>
        </g>
      </g>
      <path
        className="st9"
        d="M300.4 1342.7h43.1c3.5 0 6.3-2.8 6.3-6.2V1234.1c0-3.5-2.8-6.3-6.2-6.3H291.8c-1.2 0-2.4-.4-3.4-1.2l-.4-.3c-6.5-6.5-6.5-6.5-12.9.2-1 .9-2.2 1.3-3.5 1.3h-53.7c-3.5 0-6.3 2.8-6.3 6.2V1336.4c0 3.5 2.8 6.3 6.2 6.3h82.6z"
      />

      {/* Caudal de Mezcla */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(15, "Caudal de Mezcla", false)}>
        <g>
          <path
            d="M211.6 1235.5h138.1v99.8H211.6z"
            className={getTarjetaClass(15, selected)}
          />
        </g>
        <g className="st14">
          <g className="st14">
            <text
              transform="translate(254.318 1279.345)"
              className="st13 st16">
              {"Caudal de"}
            </text>
          </g>
          <g className="st14">
            <text
              transform="translate(265.004 1294.59)"
              className="st13 st16">
              {"Mezcla"}
            </text>
          </g>
        </g>
        <g className="st14">
          <text
            transform="translate(255.642 1322.183)"
            className="st2 st18">
            {getScaledValue(datosScada.d15, 1)}
          </text>
        </g>
        <g className="st14">
          <text
            transform="translate(265.004 1260.89)"
            className="st2 st4">
            {"FIT002"}
          </text>
        </g>
        <g className="st14">
          <text
            transform="translate(311.938 1321.083)"
            className="st2 st16">
            {"m3/h"}
          </text>
        </g>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(15, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(15, "Caudal de Mezcla");
        }}>
        <path d="M220.1 1311.4c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .5-2 1.3-2.5 2.3" />
        <path d="M218.4 1310.4c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.8 1.7-3.7 3.1M229.8 1309.1c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.8-2.5-2.3" />
        <path d="M230.4 1307.3c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.4-2.2-2.5-3.7-3.1M231.3 1316.4v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1M226.3 1323.9c.9 0 1.7-.8 1.7-1.7h-3.3c-.1.9.7 1.7 1.6 1.7" />
      </g>

      {/* Fin Caudal de Mezcla */}

      <path
        className="st93"
        d="M112.8 600h89.9M245.7 600h154.6M871.3 600H470.2"
      />
      <circle
        transform="rotate(-22.5 508.797 601.085)"
        className="st91"
        cx={508.8}
        cy={601.1}
        r={9.2}
      />
      <circle
        transform="rotate(-22.5 357.177 601.084)"
        className="st91"
        cx={357.2}
        cy={601.1}
        r={9.2}
      />
      <circle
        transform="rotate(-22.5 588.238 601.086)"
        className="st91"
        cx={588.3}
        cy={601.1}
        r={9.2}
      />
      <circle
        transform="rotate(-22.5 435.247 480.21)"
        className="st91"
        cx={435.3}
        cy={480.2}
        r={9.2}
      />
      <circle
        transform="rotate(-22.5 666.42 601.201)"
        className="st91"
        cx={666.5}
        cy={601.2}
        r={9.2}
      />
      <circle
        transform="rotate(-22.5 827.447 601.092)"
        className="st91"
        cx={827.5}
        cy={601.1}
        r={9.2}
      />
      <circle
        transform="rotate(-22.5 748.427 601.086)"
        className="st91"
        cx={748.5}
        cy={601.1}
        r={9.2}
      />
      <path
        className="st0"
        d="m919 581.1 182.4.7v31h13.3"
      />
      <circle
        transform="rotate(-22.5 952.352 579.55)"
        className="st91"
        cx={952.4}
        cy={579.6}
        r={9.2}
      />
      <circle
        transform="rotate(-22.5 1329.156 579.552)"
        className="st91"
        cx={1329.2}
        cy={579.6}
        r={9.2}
      />
      <circle
        transform="rotate(-22.5 1416.247 579.552)"
        className="st91"
        cx={1416.3}
        cy={579.6}
        r={9.2}
      />
      <image
        style={{
          overflow: "visible"
        }}
        width={165}
        height={149}
        xlinkHref="data:image/png;base64,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 RU5ErkJggg=="
        transform="translate(-5.433 522.889) scale(.9575)"
        className="st10"
      />
      <path
        className="st9"
        d="M56 533.4H12.9c-3.5 0-6.3 2.8-6.3 6.2V642c0 3.5 2.8 6.3 6.2 6.3H64.6c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.2V539.7c0-3.5-2.8-6.3-6.2-6.3H56z"
      />

      {/* Caudal de Alimentación */}
      {/* Tarjeta */}
      <g
        className="cursorPointer"
        onClick={() => loadGrafico(7, "Caudal de Alimentación", false)}>
        <path
          className={getTarjetaClass(7, selected)}
          d="M6.7 540.8h138.1v99.8H6.7z"
        />

        <g className="st14">
          <text
            transform="translate(51.407 583.567)"
            className="st13 st16">
            {"Caudal de"}
          </text>
        </g>
        <g className="st14">
          <text
            transform="translate(43.837 600.366)"
            className="st13 st16">
            {"Alimentaci\xF3n"}
          </text>
        </g>
        <g className="st14">
          <defs>
            <path
              id="SVGID_165_"
              d="M55.8 613.1h40V632h-40z"
            />
          </defs>
          <clipPath id="SVGID_166_">
            <use
              xlinkHref="#SVGID_165_"
              style={{
                overflow: "visible"
              }}
            />
          </clipPath>
          <text
            transform="translate(55.754 626.876)"
            className="st2 st18">
            {getScaledValue(datosScada.d7, 1)}
          </text>
        </g>
        <g className="st14">
          <text
            transform="translate(63.617 564.718)"
            className="st2 st4">
            {"FIT001"}
          </text>
        </g>
        <g className="st14">
          <text
            transform="translate(104.013 626.487)"
            className="st2 st16">
            {"m3/h"}
          </text>
        </g>
      </g>

      {/* Campana */}
      <g
        className={`${getTemaAlarma(7, loading, datosAlarmas)} cursorPointer`}
        onClick={() => {
          onClickAlarma(7, "Caudal de Alimentación");
        }}>
        <path d="M13.4 618.4c-.6 1-.8 2.2-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.9 0-1.8.5-2.6.4-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .5-2 1.3-2.5 2.3" />
        <path d="M11.7 617.4c-.8 1.4-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.6-1.2 1.7-2.1 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.8 1.7-3.7 3.1M23.1 616.1c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.8-2.5-2.3" />
        <path d="M23.7 614.3c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.2.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6 0-3.3-.8-4.7-1-1.4-2.2-2.5-3.7-3.1M24.6 623.4v-1.5c0-2.3-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.9 2.5-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.6-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.5-.9-1.3-.9-2.1M19.6 630.9c.9 0 1.7-.8 1.7-1.7H18c-.1.9.7 1.7 1.6 1.7" />
      </g>

      {/* Fin Caudal de Alimentación */}

      <path
        className="st99"
        d="M169.6 605.8c-1 0-1.9-.9-1.9-1.9v-9c0-1.1.9-1.9 1.9-1.9.5 0 .9.2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.4-.8.6-1.3.6"
      />
      <path
        className="st9"
        d="M169.6 594.1c.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.5.3-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.7 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.8-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9"
      />
      <path
        className="st99"
        d="M179.7 762.6c0-1 .9-1.9 1.9-1.9h9c1.1 0 1.9.9 1.9 1.9 0 .5-.2.9-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.4-.3-.6-.8-.6-1.3"
      />
      <path
        className="st9"
        d="M191.4 762.6c0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.5.4-.9.9-.9h9c.5 0 1 .3 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .7.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.8.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2"
      />
      <path
        className="st99"
        d="M179.7 1056.5c0-1 .9-1.9 1.9-1.9h9c1.1 0 1.9.9 1.9 1.9 0 .5-.2.9-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.4-.3-.6-.8-.6-1.3"
      />
      <path
        className="st9"
        d="M191.4 1056.5c0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.5.4-.9.9-.9h9c.5 0 1 .3 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .7.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.8.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2"
      />
      <path
        className="st99"
        d="M1069 859.2c0-1 .9-1.9 1.9-1.9h9c1.1 0 1.9.9 1.9 1.9 0 .5-.2.9-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.4-.3-.6-.8-.6-1.3"
      />
      <path
        className="st9"
        d="M1080.7 859.2c0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.5.4-.9.9-.9h9c.5 0 1 .3 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .7.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.8.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2"
      />
      <path
        className="st99"
        d="M1471.2 722.9c0-1 .9-1.9 1.9-1.9h9c1.1 0 1.9.9 1.9 1.9 0 .5-.2.9-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.4-.3-.6-.8-.6-1.3"
      />
      <path
        className="st9"
        d="M1482.9 722.9c0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.5.4-.9.9-.9h9c.4 0 1 .3 1 .9m2-.1c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .7.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.8.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2"
      />
      <path
        className="st99"
        d="M1471.2 1130.4c0-1 .9-1.9 1.9-1.9h9c1.1 0 1.9.9 1.9 1.9 0 .5-.2.9-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.4-.3-.6-.8-.6-1.3"
      />
      <path
        className="st9"
        d="M1482.9 1130.3c0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.5.4-.9.9-.9h9c.4 0 1 .3 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .7.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.8.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2"
      />
      <path
        className="st99"
        d="M826.8 1188.5c-1 0-1.9-.9-1.9-1.9v-9c0-1.1.9-1.9 1.9-1.9.5 0 .9.2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.4-.8.6-1.3.6"
      />
      <path
        className="st9"
        d="M826.8 1176.8c.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.5.3-1 .9-1m-.1-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.7 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.8-.2-3.9l-4.5-4.5c-.5-.7-1.2-.9-2-.9"
      />
      <path
        className="st99"
        d="M1157.1 808.7c0-1 .9-1.9 1.9-1.9h9c1.1 0 1.9.9 1.9 1.9 0 .5-.2.9-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.4-.3-.6-.8-.6-1.3"
      />
      <path
        className="st9"
        d="M1168.8 808.7c0 .2-.1.4-.3.6l-4.5 4.5c-.4.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.5.4-.9.9-.9h9c.5 0 1 .3 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .7.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.8.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2"
      />
      <path
        className="st99"
        d="M1042.3 585.9c-1 0-1.9-.9-1.9-1.9v-9c0-1.1.9-1.9 1.9-1.9.5 0 .9.2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.4-.8.6-1.3.6"
      />
      <path
        className="st9"
        d="M1042.2 574.2c.2 0 .4.1.6.3l4.5 4.5c.3.4.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.5 0-.9-.4-.9-.9v-9c0-.5.3-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.7 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.8-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9"
      />
      <path
        className="st99"
        d="M1260.9 587.4c-1 0-1.9-.9-1.9-1.9v-9c0-1.1.9-1.9 1.9-1.9.5 0 .9.2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.3.4-.8.6-1.3.6"
      />

      <path
        className="st6"
        d="M1118.7 643.9v-13.1c0-2.1 2.7-3.8 6-3.8h89c3.3 0 6 1.8 6 3.8v13.1c0 2.1-2.7 3.8-6 3.8h-89c-3.2 0-6-1.7-6-3.8"
      />
      <path
        className="st13"
        d="m1123.2 646.8 90.2-19.8c3.5 0 6.3 1.8 6.3 3.8v13.1c0 2.1-2.9 3.8-6.3 3.8h-90c-.7 0-.8-.6-.2-.9"
      />
      <path
        className="st6"
        d="M1118.7 620.1V607c0-2.1 2.7-3.8 6-3.8h89c3.3 0 6 1.8 6 3.8v13.1c0 2.1-2.7 3.8-6 3.8h-89c-3.2 0-6-1.7-6-3.8"
      />
      <path
        className="st13"
        d="m1123.2 623 90.2-19.8c3.5 0 6.3 1.8 6.3 3.8v13.1c0 2.1-2.9 3.8-6.3 3.8h-90c-.7 0-.8-.6-.2-.9"
      />
      <path
        className="st6"
        d="M1118.7 594.7v-13.1c0-2.1 2.7-3.8 6-3.8h89c3.3 0 6 1.8 6 3.8v13.1c0 2.1-2.7 3.8-6 3.8h-89c-3.2 0-6-1.7-6-3.8"
      />
      <path
        className="st13"
        d="m1123.2 597.6 90.2-19.8c3.5 0 6.3 1.8 6.3 3.8v13.1c0 2.1-2.9 3.8-6.3 3.8h-90c-.7 0-.8-.6-.2-.9"
      />
      <path
        className="st0"
        d="M1101.4 612.8v24.6h14M1239.9 581.7v30.9h-13.3M1239.9 612.6v24.6h-14M1115.4 581.8h-21.6M1241.4 581.8h-18.8"
      />
    </svg>
  );
};
export default ScadaEmbonorTalca;

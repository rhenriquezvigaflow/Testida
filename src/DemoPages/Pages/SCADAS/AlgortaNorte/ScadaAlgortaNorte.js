import * as React from "react";
import {
  getColor,
  getColorConexion,
  getConexion,
  getScaledValue,
  getTarjetaClass,
  getTemaAlarma
} from "../../../../commons/scada/scada";
const ScadaAlgortaNorte = (props) => {
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
          ".st0{fill:#323e48}.st1,.st2,.st3{fill:none;stroke:#323e48;stroke-width:4;stroke-miterlimit:10}.st2,.st3{stroke:#fff;stroke-width:2}.st3{stroke:#cbcbcb;stroke-opacity:.6}.st4{fill:#fff}.st7{fill:#3574e0}.st10{fill:#666}.st12{font-size:14px}.st13{fill:#606060}.st14{font-size:17px}.st15{fill:#00e098}.st17{fill:none;stroke:#00aeed;stroke-width:4;stroke-miterlimit:10}.st18{fill:#0e76e7}.st19{fill:none;stroke:#2f3e49;stroke-width:4;stroke-miterlimit:10}.st20{fill:#2f3e49}.st21{fill:#00aeed}.st22{enable-background:new}.st23{font-size:11px}.st24{opacity:.15;fill:#0e76e7;enable-background:new}.st25{fill:#fff;stroke:#35ace8;stroke-width:4;stroke-miterlimit:10}.st26{fill:#cbcbcb}.st27{fill:#00a39b}.st28{font-size:13px}.st29{fill:none;stroke:#35ace8;stroke-width:4;stroke-miterlimit:10}.tarjeta{fill:#ffffff}.tarjetaSeleccionada{fill:#3574e0;opacity:.15}.cursorPointer{cursor:pointer}.cursorNormal{cursor:default}.campana{fill:#3474E0;}.campana:hover{fill:#7c7c7c;}.campanaVacia{fill:#c2c2c1;}.campanaVacia:hover{fill:#7c7c7c;}.campanaDesconectada{fill:#c2c2c1;}"
        }
      </style>
      <g
        id="g2617"
        transform="translate(-68 44)">
        <path
          id="path2603"
          className="st0"
          d="M1170 956h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6z"
        />
        <g id="g2609">
          <path
            id="path2605"
            className="st0"
            d="m1154.8 959.9 7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
          />
          <path
            id="path2607"
            className="st0"
            d="m1170.4 970.5-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
          />
        </g>
        <path
          id="line2611"
          className="st1"
          d="M1162.6 955v10"
        />
        <path
          id="line2613"
          className="st2"
          d="M1153.6 947h18"
        />
        <path
          id="line2615"
          className="st2"
          d="M1162.6 948v8"
        />
      </g>
      <path
        id="polyline1417"
        className="st3"
        d="M1166 512.4v-72h45"
      />
      <g id="g1485">
        <g id="g1425">
          <image
            style={{
              overflow: "visible",
              opacity: 0.2,
              enableBackground: "new"
            }}
            width={287}
            height={178}
            id="image1419"
            xlinkHref="data:image/png;base64,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"
            transform="translate(1102.806 37.638) scale(.9944)"
          />
          <g id="g1423">
            <path
              id="path1421"
              className="st4"
              d="M1376.2 207.4H1113c-3.4 0-6.1-2.8-6.1-6.1V49.7c0-3.4 2.8-6.1 6.1-6.1h263.2c3.4 0 6.1 2.8 6.1 6.1v151.5c0 3.4-2.7 6.2-6.1 6.2z"
            />
          </g>
        </g>
        <g id="g1433">
          <image
            style={{
              overflow: "visible",
              opacity: 0.2,
              enableBackground: "new"
            }}
            width={238}
            height={125}
            id="image1427"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO4AAAB9CAYAAAClHF/PAAAACXBIWXMAAAthAAALYQFbeSumAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABMFJREFUeNrs2mlPG1cUgOGxPewJ LU2bLmqr/v//1appw05Yzbh30nPDZTB4vEBa5XmkIweD+RDp5dyxp6oAgOc3+Myvhy/d5KXCGxSP woXVhDuZJ+LBnMEOOuEObV9YetNOHpmlwx0W0Q6LGRXxChfmj7edppjb4rlHA54VWzfWNtS1NHU8 rhXxChcWi7aNdZzmJh7zlEHfU/fctDnUjTSbabZiNjvx2rzQ/5o2R3sdc1nMVTw3jp9v+oZbbtkc 6+uY3ZidiLnubF3xwuzr2tvYsm2k52nO0pzGYzsfioDvxVs/cUTO4bZhvkrzdZo3xXwTEZdbV7jQ L958BG6jvIhIj9McpjlIsx9NnXaudyd9Nu56mu00e2l+SPNjzPdFuFtTwgVmH5Xzxr2MDXuU5n2a d7Ewh8XPNcXxelLP2LbrcRxuI/0pzW9pfo6I9+J7m/EHwOe6MF/ATVzD5qPycXS1HYuwKa5/x+Xm feqoPIrq2636bWzaX9L8muZtXOOW29YRGeYLt3uduxvR1vH8RXGtexk/18Y7eCrcOjbu6/gr8F0c kd/GNe5OfL92bQsLh1vGu1Fs2vPimve4unuj6nbaNW55d9Qwtmm7Vds3p76q/n2Darc4Iq9V9++e AuYPuK7uPplpYru+iYWZt3BubTBr4w6qu5ss8sdBm/FXYb16+BEQML/ytNpEYzuxLF9FtPkj109v ANdPRDuo7t98kaee8jPA8gGPikvUfLPTeifaj70NZ/yiPgOsJtx8w9OoOD5Pva142XCB54u4nEHf cB+LGHjeaGd+SuMdYfhvBzx1YQoX/oeEC8IFhAsIF4QLCBcQLggXEC4gXBAuIFxAuIBwQbiAcAHh gnAB4QLCBeECwgWEC8IFhAsIFxAuCBcQLiBcEC4gXEC4IFxAuIBwQbiAcAHhAsIF4QLCBYQLwgWE CwgXhAsIFxAuCNd/AQgXEC4gXBAuIFxAuCBcQLiAcEG4gHAB4QLCBeECwgWEC8IFhAsIF4QLCBcQ LggXEC4gXEC4IFxAuIBwQbiAcAHhgnAB4QLCBeECwgWEC1+gSWfmCnfyyAAvE+zU7oY9f0EjYHiR aNvWbmPG8dgU3/+o7hFu+8KbYsadkIHlNUW0bWfXxeSAnwy33KjjeOFlmouY9t9bsa0b18mwErfR 2lV09iHmIp67Kbdv/cS2HccLztIcpXmfZi+iHaTZSbOWZhRfA4tv29tYiidp9tP8Hc0dRoPX5dat pwQ7KM7aN1H8SfyCgwh2GGFvRLiVeGGp69pxhHsUnR3Ev0/j+ZvyErXu8YtOovy8YdvvnafZLcJ1 XIbljsnj6KpdkH+m+T0eD+PInMOtZh2V85n7NNb2KJ6/iL8GryPcOratjQuLbdwc7kVs2ba3P9K8 i6/P+27cqjgqnxcb9SZC/is28HpxjStcWPyonK9xTyPW/ViQ+ag8ropPcuoe5+4qLo7br6/iF22n 2YzXD4toxQvzRds94V7G0fisuntXOW/bZla43Xjzv69jA6/Ha21bWO3WzZ/mlJ/hPrjpqU9wg9iq wwh1VHw9tGlhZZu3vGuq6WzZphtl1TPeaSNaWP2xuaoe3mZcLRJuJVT4rCEvHO4qXgf0j/ZR/wgw ALcpbVpEqm2tAAAAAElFTkSuQmCC"
            transform="translate(37.855 37.662) scale(.9676)"
          />
          <g id="g1431">
            <path
              id="path1429"
              className="st4"
              d="M256.2 151.5H47.4c-3.4 0-6.1-2.8-6.1-6.1V49.7c0-3.4 2.8-6.1 6.1-6.1h208.7c3.4 0 6.1 2.8 6.1 6.1v95.6c.1 3.4-2.7 6.2-6 6.2z"
            />
          </g>
        </g>
        <circle
          id="circle1435"
          cx={1143}
          cy={178.8}
          r={8}
          style={{
            fill: "rgb(180, 0, 43)"
          }}
        />
        <circle
          id="circle1437"
          cx={1143}
          cy={101.2}
          r={8}
          style={{
            fill: "#00cd98"
          }}
        />
        <circle
          id="circle1439"
          className="st7"
          cx={1143}
          cy={120.6}
          r={8}
        />
        <g id="g1443">
          <circle
            id="circle1441"
            cx={1143}
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
            cx={1143}
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
            transform="translate(1160.93 105.915)"
            className="st10 st11 st12">
            {"Funcionando"}
          </text>
          <text
            id="text1451"
            transform="translate(1160.93 125.915)"
            className="st10 st11 st12">
            {"Movi\xE9ndose"}
          </text>
          <text
            id="text1453"
            transform="translate(1160.93 145.915)"
            className="st10 st11 st12">
            {"Falla"}
          </text>
          <text
            id="text1455"
            transform="translate(1160.93 165.915)"
            className="st10 st11 st12">
            {"Bloqueada"}
          </text>
          <text
            id="text1457"
            transform="translate(1160.93 185.915)"
            className="st10 st11 st12">
            {"Detenida"}
          </text>
        </g>
        <g id="g1463">
          <text
            id="text1461"
            transform="translate(75.498 77.731)"
            className="st13 st11 st12">
            {"Conectividad de Planta"}
          </text>
        </g>
        <text
          id="text1465"
          transform="translate(109.29 128.21)"
          className="st13 st11 st14">
          {getConexion(datosScada.con)}
        </text>
        <g id="g1477">
          <g id="g1473">
            <image
              style={{
                overflow: "visible",
                opacity: 0.15,
                enableBackground: "new"
              }}
              width={37}
              height={40}
              id="image1467"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAApCAYAAABZa1t7AAAACXBIWXMAAAthAAALYQFbeSumAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7NJREFUeNrsmOtS2zAQhW3ZuUAC SSi0DO30/V+sXFqgEJKY+Fo5c5Y5LLItA8Of4pkzZkyy/rRarY4SBJ/X5/WfXuEHxao+GixsuLug qj6Q4TsAGdxZDCUq+0CGbwQSRZAh0AAwtQqoJEAN++yKe0JxhmJoYDXEfUCAFWByq4yUQyXiMGjv jIUqOzFgxlZ7VvvQiOAqgGytHqEE99QB+Sx7YU8oAaphJlZTq0OrmdUBng0JLAXM2moFPeD+COit Aqx8ppKnL0ZGJoBZWB1ZfcF9DtCRAtsA5B66tfoLQAFOKFs7uNgzWxEyMQHQidU36CvgBGzsyNgD oGqgP5AARo4V3ArG2Rpg+mYA+W71w+oMcEfI4j4GYBBDaqzO2hIgMwxABhFSjZW+YDyFUwCcWv2E zpC9GbI5wucFrEDWtvjMIT4ni2YAmIwWxK6txJ61NUbQY4BJxk4xtVOCilQfG+OF+/hbFscAn3tE rW1oIRQ+GRsi6Ay1JLV1QlM4dkBJ3XC/k/9LoedUf0sA1nBpV8Z4Jc4BdqyKXabENGxJPMiAGm8B iDurGyyGJRaLiTumkVejtIiFo6aihp4ozwRaamqCmpoj3hx98GmQXVMZUUOd4ssHqsubHnus1NYI MSaOmLvFYzwyJoH2VAHHjk27T7PmLW1PxQ2Nh79iQL1Rv8adMFzcFNd4BGFH0ea9+sIFjlhP8UyH Ha7IT/G9clkVz6tSnb5Qfm0X13R4dPliRk6AO3QfOD3QnHYFiSsO40XG+CUlbRdb9JeN7tCecBoq Q8ffoKmuEV/ilqYlSEXuU7YN8VIbPOPMdZ2QKto7E8RZUtdfUczGTZxHl5I7uINDWJApNNSj2gZa KBt0h27P/iwBWBl5rMiIGq30s5HqZWFDhnQ9JchQvQX9trqy+mV1Do8mW1IWebaLiLz+gHqQoU3Z tYJz5ckEqga6tLoA2BWyJpt4HvXsNYamjJ1C6YDJ6ACyVpk6B9QloK45W21TGbSAuc6ODJTSyYj9 /i0AJFNXmL5r1NsG3y26HGxFLlRGv8ILJFs5FTNb65j+r6211NYNdI8YKbcfH7CSindFHj2nulko hxApsLVaiTfUJh4w6F7HN4bL6JmArvGyAzKNQwdYQnBLOrrxAfhZs4577G2Bo3sneJHYoZFys4Xa ORJqziktkuI1J3GXZWHbElNdsUcLWn6/cP3IUr711x6XFYoaVqzub4UCaXQpr/VTuteZhucvTtgO vfsviqHH3y7X4mWV/gkwABZRzDnE0Eg9AAAAAElFTkSuQmCC"
              transform="translate(67.527 102.711) scale(.9695)"
            />
            <g id="g1471">
              <circle
                id="circle1469"
                className="st4"
                cx={85.5}
                cy={122.2}
                r={12.1}
              />
            </g>
          </g>
          <circle
            fill={getColorConexion(datosScada.con)}
            cx={85.5}
            cy={122.1}
            r={8.9}
          />
        </g>
        <g id="g1481">
          <text
            id="text1479"
            transform="translate(1134.967 77.731)"
            className="st13 st11 st12">
            {"Funcionamiento de dispositivos"}
          </text>
        </g>
        <path
          id="line1483"
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
      </g>
      <path
        id="path1487"
        className="st17"
        d="M55 393.3h86.5c4.7 0 8.5 3.8 8.5 8.5v38.3"
      />
      <path
        id="rect1489"
        className="st18"
        d="M113 454.7h124.8v97.7H113z"
      />
      <path
        id="path1491"
        className="st19"
        d="M237.6 438.4v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1V438.4"
      />
      <g id="g1495">
        <path
          id="path1493"
          className="st20"
          d="M336.9 517.1h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6h27.7c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
        />
      </g>
      <g id="g1501">
        <path
          id="path1497"
          className="st21"
          d="M286.3 554.1c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        />
        <path
          id="path1499"
          className="st4"
          d="M286.3 542.4c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
        />
      </g>
      <g id="g1505">
        <text
          id="text1503"
          transform="translate(144.74 574.535)"
          className="st22">
          <tspan
            x={0}
            y={0}
            className="st13 st11 st23">
            {"ESTANQUE"}
          </tspan>
          <tspan
            x={-20.2}
            y={13.2}
            className="st13 st11 st23">
            {"DE ALIMENTACI\xD3N"}
          </tspan>
        </text>
      </g>
      <path
        id="line1507"
        className="st17"
        d="M244.9 547.2h38.5"
      />
      <g id="g1513">
        <path
          id="path1509"
          className="st21"
          d="M143.4 443.2c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
        />
        <path
          id="path1511"
          className="st4"
          d="M155.1 443.2c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
        />
      </g>
      <g id="g1525">
        <g id="g1521">
          <image
            style={{
              overflow: "visible",
              opacity: 0.15,
              enableBackground: "new"
            }}
            width={41}
            height={41}
            id="image1515"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAzrAAAM6wHl1kTSAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7lJREFUeNrsmOtu2kAQhb1rG0IJ gSRt2qat+v6vlV4ipU1IuMVg7O24OiOdrBawDa3yA0tHdgxZPs/uzJx1FB2P43E8jserPMx/HNe9 FlBD512grin4oUCtB2oDY1dgpQdaG9gcIIoMFuM6ps8MQYZUC9gcIIoKlohSOsf0nQpiLSpEuXfN 0BvXcrIHJAN2RF1RT3SC6xQyBLUSLUUZndcEvhE22QNSASuwN6JT0QDnPu53ALoG5LNoIZqJ5qIJ YDOKdBA22SOSHQBVYOfQhWgE4D6+YwGQAW4KwEfRvegJ4As8VB6CTRomDkNWURyK3oquRO9F7wA7 xOcMuqQoKqQulRTfmwMubwtqKJopfmAIsI+iT1AFfImI9gAaIUI69VOA/gZkDxx+dSjoXi1Q40Wz C5Aqch9EX0RfRdcAHWHauzR+SVFdYJkMqUIoUEHJ9aJsNY0oT/kV4CrQz4jsBR6Cp5OLfU7J1sN9 S58tqRpoFfj7EEnDaGoCndO0XyOy1Vo9oym3HqjD/Q6VLs3yJVWDKbTmhpA0iGaC6Twl0CtKoDNK oGRLv7fUDFbQHNn/AD0Cfq3BSmpEk0FPADoC3CWuTymS6Y6uF9Oa7GMZjSB92JS+FzVJJs72AQbU gRUy3RJJv2XreNrN+l6jaAWqUUipCw2oqAcHrmkHuf12qfXGvguzNZPJBFpmLzBw1LKBJFBM69f6 LXEbYCjz2SUl9NSmAazZ8Bsbx7DR/kdbq8geNGSkXVNQR11DO0fu2TO3Byx3I7Z7L8y03QHnqKsU qHkZivMzat2KHsI1ACzpoVc0Vh6CrTv12uLYqk1xnXmwdSELapvqUxdU6Mum7on79DPa3BO6xxMK di+QWLYGpI43gWa4t6IZck1B1fzOyE+qCekSWIfKDCebo72TQlZwY7TNMf6eB0BdvMeGzgbqne8n /QRcUhQrsJ+i76Ib0TfRLQIwo4R1ET11VKOehhyV9Qxv4WVxToCahFNA/gKk6hZmeoKH4c3ezql3 gYTSKdOOVHrbDDYpum61DKmdm2C6q0j+oEhOyYsWbfdM/GMzimROPz6GBRyQC7K0NpeUjA+AvEMk x4H1GTXN+sjbUmTeXkijeY8qMPAMtPN2ohPA3iExNeMz2oW22i7zPxVehHMvQfrkqkJTr7BaPbh5 +C8iWvdps8WkdLfYtYiSbEUdTmvm2t96HMJQmMCbO0u1k10VVwXnlawi0NvLQzsfEzjbQNkyAf9Q evX2n7/NCwFHG96N+mu98fvRPwIMANmrrtS+a8FcAAAAAElFTkSuQmCC"
            transform="translate(298.204 513.817) scale(.8537)"
          />
          <g id="g1519">
            <circle
              id="circle1517"
              className="st4"
              cx={316.1}
              cy={531.6}
              r={10.9}
            />
          </g>
        </g>
        <circle
          id="circle1523"
          className="st24"
          cx={316.1}
          cy={531.4}
          r={8}
        />
      </g>
      <g id="g1529">
        <text
          id="text1527"
          transform="translate(301.487 581.307)"
          className="st13 st11 st23">
          {"P-001"}
        </text>
      </g>
      <g id="g1577">
        <g id="g1541">
          <image
            style={{
              overflow: "visible",
              opacity: 0.3,
              enableBackground: "new"
            }}
            width={159}
            height={141}
            id="image1531"
            xlinkHref="data:image/png;base64,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 AAAAAElFTkSuQmCC"
            transform="translate(930.907 372.233) scale(.9929)"
          />
          <g id="g1539">
            <g id="g1537">
              <g id="g1535">
                <path
                  id="path1533"
                  className="st4"
                  d="M990.1 381.5H947c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V387.8c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
                />
              </g>
            </g>
          </g>
        </g>

        {/* Presión Pre Filtros */}
        {/* Tarjeta */}
        <g
          className="cursorPointer"
          onClick={() => loadGrafico(16, "Presión Pre Filtros", false)}>
          <path
            className={getTarjetaClass(16, selected)}
            d="M940.8 388.9h138.1v99.8H940.8z"
          />
          <g id="g1547">
            <text
              transform="translate(984.408 431.455)"
              className="st18 st11 st12">
              {"Presi\xF3n"}
            </text>
            <text
              transform="translate(976.25 448.955)"
              className="st18 st11 st12">
              {"Pre Filtros"}
            </text>
          </g>

          <g id="g1569">
            <text
              id="text1567"
              transform="translate(994.45 473.774)"
              className="st13 st11 st14">
              {getScaledValue(datosScada.d16, 1)}
            </text>
          </g>
          <text
            id="text1571"
            transform="translate(1044.092 473.378)"
            className="st13 st11 st12">
            {"bar"}
          </text>
          <g id="g1575">
            <text
              id="text1573"
              transform="translate(992.427 411.609)"
              className="st13 st11 st23">
              {"PT409"}
            </text>
          </g>
        </g>

        {/* Campana */}
        <g
          className={`${getTemaAlarma(16, loading, datosAlarmas)} cursorPointer`}
          onClick={() => {
            onClickAlarma(16, "Presión Pre Filtros");
          }}>
          <path d="M955.9 462.7c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
          <path d="M954.2 461.7c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1z" />
          <path d="M965.5 460.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
          <path d="M966.1 458.6c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1z" />
          <path d="M967 467.7v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1z" />
          <path d="M962 475.2c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
        </g>

        {/* Fin Presión Pre Filtros */}
      </g>
      <g id="g1583">
        <path
          id="path1579"
          className="st0"
          d="M633.2 479.6c12.5-4.9 17.1-3.9 17.1-18v-61.9c0-7-5.4-13-13-13h-29.7c-7 0-13 6-13 13v61.9c0 14.1 4.7 13.1 17.1 18v3.9c0 2.2 2.2 4.3 4.9 4.3h12.3c2.2 0 4.3-2.2 4.3-4.3v-3.9z"
        />
        <path
          id="rect1581"
          className="st18"
          d="M594.6 402.6h55.7v59.9h-55.7z"
        />
      </g>
      <g id="g1589">
        <path
          id="path1585"
          className="st0"
          d="M748.2 479.6c12.5-4.9 17.1-3.9 17.1-18v-61.9c0-7-5.4-13-13-13h-29.7c-7 0-13 6-13 13v61.9c0 14.1 4.7 13.1 17.1 18v3.9c0 2.2 2.2 4.3 4.9 4.3h12.3c2.2 0 4.3-2.2 4.3-4.3v-3.9z"
        />
        <path
          id="rect1587"
          className="st18"
          d="M709.6 402.6h55.7v59.9h-55.7z"
        />
      </g>
      <g id="g1595">
        <path
          id="path1591"
          className="st0"
          d="M867.2 479.6c12.5-4.9 17.1-3.9 17.1-18v-61.9c0-7-5.4-13-13-13h-29.7c-7 0-13 6-13 13v61.9c0 14.1 4.7 13.1 17.1 18v3.9c0 2.2 2.2 4.3 4.9 4.3h12.3c2.2 0 4.3-2.2 4.3-4.3v-3.9z"
        />
        <path
          id="rect1593"
          className="st18"
          d="M828.6 402.6h55.7v59.9h-55.7z"
        />
      </g>
      <path
        id="path1597"
        className="st17"
        d="M344.3 523h178.4c5.3 0 9.6-4.3 9.6-9.6V369.6c0-5.3 4.3-9.6 9.6-9.6h248.5s8.8-.8 8.7 8.7c-.1 10.7 0 29.3 0 29.3s-.7 9.4 10.3 9h6"
      />
      <g id="g1603">
        <path
          id="path1599"
          className="st21"
          d="M819.3 413.8c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
        />
        <path
          id="path1601"
          className="st4"
          d="M819.3 402.1c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-3.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-5.5c-.5-.6-1.2-.9-2-.9z"
        />
      </g>
      <g id="g1613">
        <path
          id="path1605"
          className="st17"
          d="M696.7 408.5h-6c-11 .4-10.3-9-10.3-9s-.1-18.7 0-29.3v-9"
        />
        <g id="g1611">
          <path
            id="path1607"
            className="st21"
            d="M699.6 415.2c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
          />
          <path
            id="path1609"
            className="st4"
            d="M699.6 403.5c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
          />
        </g>
      </g>
      <g id="g1623">
        <path
          id="path1615"
          className="st17"
          d="M581.6 408.5h-6c-11 .4-10.3-9-10.3-9s-.1-18.7 0-29.3v-11"
        />
        <g id="g1621">
          <path
            id="path1617"
            className="st21"
            d="M584.6 415.2c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
          />
          <path
            id="path1619"
            className="st4"
            d="M584.6 403.5c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
          />
        </g>
      </g>
      <path
        id="path1627"
        className="st17"
        d="M788.5 507.7v-94c.4-11-9-10.3-9-10.3h-11.3"
      />
      <path
        id="path1629"
        className="st17"
        d="M906.5 507.7v-94c.4-11-9-10.3-9-10.3h-9.3"
      />
      <circle
        id="circle1631"
        className="st25"
        cx={440.7}
        cy={523.4}
        r={9.2}
      />
      <g id="g1649">
        <path
          id="path1645"
          className="st21"
          d="M900.2 510.9c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
        />
        <path
          id="path1647"
          className="st4"
          d="M911.9 510.9c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
        />
      </g>
      <g id="g1649_00000146496113347373318680000017488138838135667107_">
        <path
          id="path1645_00000168800245442042712540000014789816319450812600_"
          className="st21"
          d="M782.2 510.9c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
        />
        <path
          id="path1647_00000001652377289234721080000003508833518123290805_"
          className="st4"
          d="M793.9 510.9c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
        />
      </g>
      <path
        id="line1651"
        className="st17"
        d="M1098 525.4H675.3c-3.6 0-6.5-2.9-6.5-6.5V413.7c.4-11-9-10.3-9-10.3h-6.3"
      />
      <text
        id="text1653"
        transform="translate(592.995 506.035)"
        className="st13 st11 st23">
        {"AG-PLUS 1"}
      </text>
      <text
        id="text1655"
        transform="translate(709.495 506.035)"
        className="st13 st11 st23">
        {"AG-PLUS 2"}
      </text>
      <text
        id="text1657"
        transform="translate(828.995 506.035)"
        className="st13 st11 st23">
        {"AG-PLUS 3"}
      </text>
      <g id="g1673">
        <path
          id="path1659"
          className="st0"
          d="M1120.7 515.9h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6z"
        />
        <g id="g1665">
          <path
            id="path1661"
            className="st0"
            d="m1105.5 519.8 7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
          />
          <path
            id="path1663"
            className="st0"
            d="m1121.1 530.4-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
          />
        </g>
        <path
          id="line1667"
          className="st1"
          d="M1113.3 514.9v10"
        />
        <path
          id="line1669"
          className="st2"
          d="M1104.3 506.9h18"
        />
        <path
          id="line1671"
          className="st2"
          d="M1113.3 507.9v8"
        />
      </g>
      <g id="g1681">
        <path
          id="path1677"
          className="st26"
          d="M404.2 533.8c0 .9-.7 1.6-1.6 1.6h-6.3c-.9 0-1.6-.7-1.6-1.6 0-.4.2-.8.5-1.1l3.1-3.1c.6-.6 1.5-.6 2.2-.1l3.2 3.2c.3.3.5.7.5 1.1z"
        />
        <path
          id="path1679"
          className="st4"
          d="M395.6 533.8c0-.2.1-.3.2-.4l3.1-3.1c.2-.2.6-.2.9 0l3.1 3.1c.1.1.2.3.2.4 0 .3-.2.6-.6.6h-6.3c-.3 0-.6-.3-.6-.6m-2 0c0 1.4 1.2 2.6 2.6 2.6h6.3c1.4 0 2.6-1.2 2.6-2.6 0-.7-.3-1.3-.8-1.8l-3.1-3.1-.1-.1-.1-.1c-1.1-.9-2.6-.8-3.5.2l-3.1 3.1c-.5.5-.8 1.1-.8 1.8z"
        />
      </g>
      <g
        id="g1687"
        transform="translate(0 50)">
        <text
          id="text1685"
          transform="translate(362.096 627.219)"
          className="st13 st11 st23">
          {"CLORO"}
        </text>
      </g>
      <g
        id="g1699"
        transform="translate(0 50)">
        <g id="g1693">
          <path
            id="path1689"
            className="st19"
            d="M402.4 547.5h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
          />
          <path
            id="path1691"
            className="st20"
            d="M391.9 556.5h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
          />
        </g>
        <path
          id="rect1695"
          className="st27"
          d="M361.9 568.2h38.8v40h-38.8z"
        />
        <path
          id="path1697"
          className="st19"
          d="M400.7 561.5v45.2c0 .7-.4 1.3-.8 1.3h-37.1c-.5 0-.8-.6-.8-1.3v-45.2"
        />
      </g>
      <g
        id="g1723"
        transform="translate(0 6)">
        <g id="g1721">
          <g id="g1707">
            <text
              id="text1705"
              transform="translate(672.096 671.219)"
              className="st13 st11 st23">
              {"BISULFITO"}
            </text>
          </g>
          <g id="g1719">
            <g id="g1713">
              <path
                id="path1709"
                className="st19"
                d="M721.4 591.5h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
              />
              <path
                id="path1711"
                className="st20"
                d="M710.9 600.5h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
              />
            </g>
            <path
              id="rect1715"
              className="st27"
              d="M680.9 612.2h38.8v40h-38.8z"
            />
            <path
              id="path1717"
              className="st19"
              d="M719.7 605.5v45.2c0 .7-.4 1.3-.8 1.3h-37.1c-.5 0-.8-.6-.8-1.3v-45.2"
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
              transform="translate(760.585 671.219)"
              className="st13 st11 st23">
              {"ANTI INCRUSTANTE"}
            </text>
          </g>
          <g id="g1739">
            <g id="g1733">
              <path
                id="path1729"
                className="st19"
                d="M831.9 591.5h-15.2c-1 0-1.8.8-1.8 1.8v39.2"
              />
              <path
                id="path1731"
                className="st20"
                d="M821.4 600.5h14c.8 0 1.5-.7 1.5-1.5v-14c0-.8-.7-1.5-1.5-1.5h-14c-.8 0-1.5.7-1.5 1.5v14c0 .8.7 1.5 1.5 1.5z"
              />
            </g>
            <path
              id="rect1735"
              className="st27"
              d="M791.4 612.2h38.8v40h-38.8z"
            />
            <path
              id="path1737"
              className="st19"
              d="M830.2 605.5v45.2c0 .7-.4 1.3-.8 1.3h-37.1c-.5 0-.8-.6-.8-1.3v-45.2"
            />
          </g>
        </g>
      </g>
      <circle
        id="circle1745"
        className="st25"
        cx={1010}
        cy={526.1}
        r={9.2}
      />
      <path
        id="polyline1747"
        className="st3"
        d="M946.7 530.2v44H719.9V585"
      />
      <path
        id="line1749"
        className="st3"
        d="M829 585.4v-10.5"
      />
      <g
        id="g1801"
        transform="translate(-44.189 196.18)">
        <g id="g1767">
          <image
            style={{
              overflow: "visible",
              opacity: 0.3,
              enableBackground: "new"
            }}
            width={159}
            height={141}
            id="image1757"
            xlinkHref="data:image/png;base64,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 ukq2L1Ro5AAAAABJRU5ErkJggg=="
            transform="translate(1234.573 413.233) scale(.9929)"
          />
          <g id="g1765">
            <g id="g1763">
              <g id="g1761">
                <path
                  id="path1759"
                  className="st4"
                  d="M1293.8 422.5h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V428.8c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
                />
              </g>
            </g>
          </g>
        </g>

        {/* E.C. de Alimentación */}
        {/* Tarjeta */}
        <g
          className="cursorPointer"
          onClick={() => loadGrafico(9, "E.C. de Alimentación", false)}>
          <path
            className={getTarjetaClass(9, selected)}
            d="M1244.5 429.9h138.1v99.8h-138.1z"
          />
          <text
            transform="translate(1291.232 471.255)"
            className="st18 st11 st12">
            {"E.C. de"}
          </text>
          <text
            transform="translate(1274.502 487.755)"
            className="st18 st11 st12">
            {"Alimentaci\xF3n"}
          </text>

          <g id="g1793">
            <text
              id="text1791"
              transform="translate(1286.493 514.774)"
              className="st13 st11 st14">
              {getScaledValue(datosScada.d9, 1)}
            </text>
          </g>
          <text
            id="text1795"
            transform="translate(1336.759 514.379)"
            className="st13 st11 st28">
            {"\u03BCS/cm"}
          </text>
          <g id="g1799">
            <text
              id="text1797"
              transform="translate(1298.533 452.5)"
              className="st13 st11 st23">
              {"CE410"}
            </text>
          </g>
        </g>

        {/* Campana */}
        <g
          className={`${getTemaAlarma(9, loading, datosAlarmas)} cursorPointer`}
          onClick={() => {
            onClickAlarma(9, "E.C. de Alimentación");
          }}>
          <path d="M1257.6 503.7c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
          <path d="M1255.9 502.7c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1z" />
          <path d="M1267.2 501.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
          <path d="M1267.8 499.6c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1z" />
          <path d="M1268.7 508.7v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1z" />
          <path d="M1263.7 516.2c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
        </g>

        {/* Fin E.C. de Alimentación */}
      </g>
      <path
        id="path1803"
        className="st29"
        d="M1290 524.4h90c5.9-.1 9.7 4.7 9.8 10.6l.4 214.3c0 5.7-4.6 10.3-10.3 10.3H66.4c-5.5 0-10 4.5-10 10V926c0 2.7 2.2 5 5 5H326"
      />
      <path
        id="line1805"
        className="st29"
        d="M1128 524.4h116"
      />
      <circle
        id="circle1807"
        className="st25"
        cx={1268.1}
        cy={760.6}
        r={9.2}
      />
      <g
        id="g1801-8"
        transform="translate(-198.054 196.072)">
        <g id="g1767-2">
          <image
            style={{
              overflow: "visible",
              opacity: 0.3,
              enableBackground: "new"
            }}
            width={159}
            height={141}
            id="image1757-0"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAACPCAYAAACS97vwAAAACXBIWXMAAAs6AAALOgFkf1cNAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB0ZJREFUeNrsm4tym0gQRQGhh+V4 k32k9v+/b3cT24reglmo6tm67gwSsp3KIs6p6kKKJDDoqKd7hmQZAMDYyd/58zmXdFSEC89/mIS5 fA4JkTD1PFwjZP4K+VKBgIgYzsS7SFiIcBN7roGICFi7qETC+txOyp4CxpjYZ0p5PLHIkXCUEgYT ro2TbOPjKGD9Wgm9fNMmZk3MbTu1KMmIoxWwNuGOFocm9rY92mvZORHLngJG+RZNLJu4s+3cohQR kXA8EtaS9fYWmya2tt0lXKj7ShiH1sLeMzPpPjTxILE0MWdkw1FnwYMJ14q3stCkpE1K7puVS5kw ZsGFCfixiV8tPomIc6kPqQ3HVQueJAO28j1aUiok88UIfTOhZsGJZMFWuN+a+NzEH/a4lfLeJJwi 4SglPJqE6yaerFSbmgM6XJ/see46685MGOvBqQnWSviLZcBWwj9NxI+WIRf23gIJRzccH20o/mYJ aWbf/0malL29rzJHqnOZME/UgwvbeZTwdxPxsw3J9/aeEglHWxPuZETM5d+20qjsEn6ES5lwIpnw zjLeL1ITxrpw6STMaExGIWHmJJw5Adv68Nnc0XLtYibUbDiRzvhO6sIHk/HBxFxKd0xnPL5seJIE VNnQ+02a1jvxQ3uG0LcxKV029LGgKRm9hIU0IYeEI9GPznLt3DzhuZWSGHHnZfb9DQ0wDgljVps6 N+bOkUn2ch65l4QpEadupxNnNxKOk0J86HKls2ktOzrjLOu+bavoEA8Bx0V+Zlblkh8vOuSi5wFS t275JgQBxytinhhBU7f6JT0pehwkP/MY8eDSSJpdcqV4hfGIB32F7DVCFm80HiHhzV4UV6ZXgNfW jJ1yFlwn+NkgISAhABICEgIgISAhABICEgIgISAhABICEgIgISAhABICEgIgISAhABICEgIgISAh ABICEgIgISAhABICEgIgISAhABICEgIgISAhABICEgIgISAhABICEgIgISAhABICEgIgISAhABIC EgIgISAhABICEgIgISAhABICEgIgISAhABICEgIgISAhABICEgIgISAhABICEgIgISAhABICEgIg ISAhABICEgIgISAhABICEgIgISAhABICEgIgISAhABLC/1rCIJHJFuCnZ8LgJAXo60p4i4ShYwuQ Gjmv8qPoseNaIsiWTAiXvOnlSNHD6ihgZeGlREQIiYRVJ1y5KGHokK+NUyKqvgeBUQzBPllVicSV TFrlhZ1XIt2hib1tj07GVubcIpPtLZC/wxd169lPPTm6OHWI+J+Q5YUxvbId7S12TWwt2sdz2UeQ zJrfkHxd22ubuHCjEkbxDs6RnUtaVdeIWV4wPGbAdoebJtZNfLNYNjE18WqXEYcsov79MTTTB5f1 /XXz1/DW5luDS1TRkY24sbbYmDsHe99VEmoWPJjZ7c6fm3hq4t6yYBTwzvY1SXyJQ5QwiudjIq8F Ob94YWspY7qK83AjGVDLtZ358WjxZK6szZ2DG5ZD35owHmBvRq/sAEsRsLLXWwln8iUNUUD98UTh JnaNSsv68XkQETMRsJaL7etm/wWEgWdCTVRb8+NrE/9YPJqIMRseu36IZY9UqxIuTDYVcC0Slom6 MB+YiIXINrWYW8zk3wo51yjg0dVH+44CPQw8C6qEOhRHCf9q4otlxLVch+ra7ljH+2h6KUPwwQ7w 4CTMB9op6zAcBZzZucVY2g+xEhEzEVDr562EzigMeVj2Ep5cufZkIv5tEsZMuE+ce7gkYSrdTqQw P4mY95IlvIRDy4K5ZMGZiPfBfmx7O987O+eJfTaOCltp3la23STqonAD2bB2U3drO+cniVXHufdq TDK5uEd7XEitGLPgs2TBIdeEeULCuRPwUxMf7YJ/sIw4tc8fpTiPzdujE3GfkHDI2VBdiNlw09Ed H8+dd9mjDa/ki/J1wEoELLNhT1prRzwVCR9MvrXMf+3stZl9Nl6PZ5Pvi3SJK5HwmA1/hSl0ZMOD XJudTM101oJ9hmOtDeOFVgm3Il+cnikS3eaQZFQJ43D8YCKtXZ137yRci4BfrDbyQ5JKONSuONUh 66ra8UwzdtWyXWpY9vOHEyff0CeqU43JQoaXmAVj3dcl4VeRMM6V7W6kMemqDVXG1Jpxdu6cyyvs r52IhV3Y3Ak4VAn9kBzrwl32ctky1j2p4fhJJmyfE/XgLd3s4afzUrf99VopKq84WOoXMNROuEvA zGXD1MJ7LEeWrjGJNfKzxcoV5n7Z6lbWkkNHZH0zfvmKg+n6aVfWywcuY569XO04JeZMU93xxnWG ++z7ddNbkq8rM171IyvfcPBwoxJmbjZA75GLHeBapqQy99o2e7lacrrUHd6YhFdT/oA/5laGmtzV PJXLhrpEWbvu0C/Yc9NvjwsN5xuVOIntQ0VN3VEcEBAJ37NG9Ld3pe4nPNcdAhK+q4x5YsjOsjf8 t0ckhNfIeG4GAQAAAGBI/CvAAAjjUEdkwFcWAAAAAElFTkSuQmCC"
            transform="translate(1234.573 413.233) scale(.9929)"
          />
          <g id="g1765-7">
            <g id="g1763-4">
              <g id="g1761-8">
                <path
                  id="path1759-5"
                  className="st4"
                  d="M1293.8 422.5h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V428.8c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
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
            className={getTarjetaClass(13, selected)}
            d="M1244.5 429.9h138.1v99.8h-138.1z"
          />
          <text
            id="text1771-3"
            transform="translate(1274.973 480.255)"
            className="st18 st11 st12">
            {"Temperatura"}
          </text>

          <g
            id="g1793-5"
            transform="translate(6)">
            <text
              id="text1791-2"
              transform="translate(1291.493 514.774)"
              className="st13 st11 st14">
              {getScaledValue(datosScada.d13, 1)}
            </text>
          </g>
          <text
            id="text1795-1"
            transform="translate(1348.759 514.379)"
            className="st13 st11 st12">
            {"\xB0C"}
          </text>
          <g id="g1799-1">
            <text
              id="text1797-0"
              transform="translate(1298.533 452.609)"
              className="st13 st11 st23">
              {"CE410"}
            </text>
          </g>
        </g>

        {/* Campana */}
        <g
          className={`${getTemaAlarma(13, loading, datosAlarmas)} cursorPointer`}
          onClick={() => {
            onClickAlarma(13, "Temperatura");
          }}>
          <path d="M1258.6 503.7c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
          <path d="M1256.9 502.7c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1z" />
          <path d="M1268.2 501.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
          <path d="M1268.8 499.6c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1z" />
          <path d="M1269.7 508.7v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1z" />
          <path d="M1264.7 516.2c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
        </g>

        {/* Fin Temperatura */}
      </g>
      <circle
        id="circle1807-1"
        className="st25"
        cx={1114.2}
        cy={760.5}
        r={9.2}
      />
      <path
        id="path1809"
        className="st17"
        d="M373.2 906.4h394.3s12.1-.1 11.1-.1v98.6c0 2.7 2.2 5 5 5h18.3"
      />
      <g id="g1827">
        <g id="g1813">
          <path
            id="path1811"
            className="st20"
            d="M365.8 902.1h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6H359c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
          />
        </g>
        <g id="g1825">
          <g id="g1821">
            <image
              style={{
                overflow: "visible",
                opacity: 0.15,
                enableBackground: "new"
              }}
              width={41}
              height={41}
              id="image1815"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAzrAAAM6wHl1kTSAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7VJREFUeNrsmHtT2kAUxdk8IIgI xdZqa/v9v1Y7ttOpLYoIRvLYbmbOnTlzTcgmqP/UzJzhEdj8ct+bweDteDvejv/rMK+4pj1k0egF 4EwNrD0UPHomQFMjDWUJznaFNc8EGNRIzlUwJb2W6rP1ATY9IVkhFMNDIgGuIAood8rwKt8J+F4L RwdAhvh/BTiCEmhIsBZwO6dHpR1B74U1B0DGgDpymjhNnY7xfgzwAAAVUOq0ge7pfYrzhQqLXhbV kEPAVGBzp4XTO+gEsAl+W8B6W6e1053TLbTE5y1gM1zvCWx0AOQMgGdOH/F6CvBjWJRBHwB64/TX 6Q/Wkthe43o78rT1BTUqsyMATAF17vQZusB3M4QDuz4DaOXyFSDngIwpliXxnli1i+tDXPwYLq6s +MXpq9MlPi9wPgGAlKcclhKrznCzsq6ASWUoVXnbC6qtKclTXeA9LHgJ2E9OHxCfY/w2VHU0R+xO YPGEoLgipPje+oJqa8a4wBxQ5wC8QHyyy0PcHHemUsVkSBn/QFVgDeCCrRp1KOojWGMOi54BeEGZ PqL6aRSo7lwDrLNB3N5ACapATrXVy6KcRBPK9lMqR2LJWFmy6cYlJqc1ZW1EYWMYog1SOlCCRJmR pjUx2RZGAXW0MTWMCa0VabbA06LSJo8AO6WiHje428dLMbXdEd1w4GNR0xCjsuiYWmQfSKOSNFTD TK1nAs+FA1ooJoUN82fX+SFoWyfwvPuXOmzDXGq7gpaqYGdKhe/g2wDJc2pOJcn69HpbAyuQMlw8 qHmypE7iA1hSy+TZNKOuZLtYlK3Jo9oaA0ZaA+sLmuH/KdaV2TSj2dR7KGHQFHAyT64AfKQKfdgQ 35YGFPHOBuvdYa0tDdGd51G2qLS7JWbKE5SsSHWcoMZbpbLkPbXOJd7f4zq5TrCw51ZE7zYtxVxJ ScIbuh3NpJVHrp2+OX2HfmJOXQGWN33eoEbV1EAVed4G56pCCOCWICtv/ALgFSCvcW5LG77OgzPH 6ZqK/QAwkmSLmv4/wEV5cK5c/RsW/QHIFc7nfWKUfywX25C7Cyx+h1jjkW+oQDl5lnDzFSCXDfHZ KZms2io80mexplx8TgNLHahY/hY3dk0Zn6om0mu7bFUI1JWtW9rXJ1SyDHkjpViVrE/bIPv0cs56 flIypCclo5qZsqQNngA/EmDe1o6f49lTQNNVSArU/lyXrULFY/kaT/M0tPGYlMqax5EvNsaZBvC2 se7Vno+2PXFuK3Wdx8J/AgwAeWGj0iWyIcwAAAAASUVORK5CYII="
              transform="translate(327.104 898.842) scale(.8537)"
            />
            <g id="g1819">
              <circle
                id="circle1817"
                className="st4"
                cx={345}
                cy={916.6}
                r={10.9}
              />
            </g>
          </g>
          <circle
            id="circle1823"
            className="st24"
            cx={345}
            cy={916.4}
            r={8}
          />
        </g>
      </g>
      <g id="g1831">
        <text
          id="text1829"
          transform="translate(330.387 956.332)"
          className="st13 st11 st23">
          {"P-005"}
        </text>
      </g>
      <g id="g1869">
        <g id="g1843">
          <path
            id="path1839"
            className="st20"
            d="M944.7 918.2h-132c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.8 3.8-6 3.8z"
          />
          <path
            id="path1841"
            className="st18"
            d="M946 918.2H813c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.9-.2.9z"
          />
        </g>
        <g id="g1849">
          <path
            id="path1845"
            className="st20"
            d="M944.7 943.3h-132c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.8 3.8-6 3.8z"
          />
          <path
            id="path1847"
            className="st18"
            d="M946 943.3H813c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.9-.2.9z"
          />
        </g>
        <g id="g1855">
          <path
            id="path1851"
            className="st20"
            d="M944.7 968.4h-132c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.2-2.8 3.8-6 3.8z"
          />
          <path
            id="path1853"
            className="st18"
            d="M946 968.4H813c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.9-.2.9z"
          />
        </g>
        <g id="g1861">
          <path
            id="path1857"
            className="st20"
            d="M944.7 993.5h-132c-3.3 0-6-1.7-6-3.8v-13.1c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.2c0 2.1-2.8 3.7-6 3.7z"
          />
          <path
            id="path1859"
            className="st18"
            d="M946 993.5H813c-3.4 0-6.3-1.7-6.3-3.8v-13.1c0-2 2.8-3.8 6.3-3.8l133.1 20c.7.1.6.7-.1.7z"
          />
        </g>
        <g id="g1867">
          <path
            id="path1863"
            className="st20"
            d="M944.7 1018.6h-132c-3.3 0-6-1.7-6-3.8v-13c0-2 2.7-3.8 6-3.8h132c3.3 0 6 1.7 6 3.8v13.1c0 2.1-2.8 3.7-6 3.7z"
          />
          <path
            id="path1865"
            className="st18"
            d="M946 1018.6H813c-3.4 0-6.3-1.7-6.3-3.8v-13c0-2 2.8-3.8 6.3-3.8l133.2 19.8c.6.3.5.8-.2.8z"
          />
        </g>
      </g>
      <path
        id="line1871"
        className="st17"
        d="M779 932.8h22.9"
      />
      <path
        id="line1873"
        className="st17"
        d="M778.6 984.8h23.3"
      />
      <path
        id="line1877"
        className="st17"
        d="M974.6 932.8h-20.4"
      />
      <path
        id="line1879"
        style={{
          fill: "none",
          stroke: "#00aeed",
          strokeWidth: 4.0691,
          strokeMiterlimit: 10
        }}
        d="M1081.4 1009.8H954.5"
      />
      <path
        id="line1881"
        className="st17"
        d="M778.6 957.8h23.3"
      />
      <path
        id="line1883"
        className="st17"
        d="M974.9 957.8h-20.4"
      />
      <g id="g1933">
        <g id="g1895">
          <image
            style={{
              overflow: "visible",
              opacity: 0.3,
              enableBackground: "new"
            }}
            width={159}
            height={141}
            id="image1885"
            xlinkHref="data:image/png;base64,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"
            transform="translate(363.101 759.052) scale(.9929)"
          />
          <g id="g1893">
            <g id="g1891">
              <g id="g1889">
                <path
                  id="path1887"
                  className="st4"
                  d="M422.3 768.4h-43.1c-3.5 0-6.3 2.8-6.3 6.3V877c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V774.7c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
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
            className={getTarjetaClass(5, selected)}
            d="M373 775.8h138.1v99.8H373z"
          />
          <g
            id="g1903"
            transform="translate(1.905)">
            <g id="g1901">
              <text
                transform="translate(406.563 819.274)"
                className="st18 st11 st12">
                {"Presi\xF3n de"}
              </text>
              <text
                transform="translate(412.804 835.774)"
                className="st18 st11 st12">
                {"Osmosis"}
              </text>
            </g>
          </g>

          <g id="g1925">
            <text
              id="text1923"
              transform="translate(425.934 860.593)"
              className="st13 st11 st14">
              {getScaledValue(datosScada.d5, 1)}
            </text>
          </g>
          <text
            id="text1927"
            transform="translate(477.286 861.197)"
            className="st13 st11 st12">
            {"bar"}
          </text>
          <g id="g1931">
            <text
              id="text1929"
              transform="translate(426.273 798.428)"
              className="st13 st11 st23">
              {"PT416"}
            </text>
          </g>
        </g>

        {/* Campana */}
        <g
          className={`${getTemaAlarma(5, loading, datosAlarmas)} cursorPointer`}
          onClick={() => {
            onClickAlarma(5, "Presión Ósmosis");
          }}>
          <path d="M388.1 849.6c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
          <path d="M386.4 848.6c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9.7-1.3 1.8-2.2 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1z" />
          <path d="M397.7 847.3c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
          <path d="M398.3 845.5c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1z" />
          <path d="M399.2 854.6v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1z" />
          <path d="M394.2 862.1c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
        </g>

        {/* Fin Presión Ósmosis */}
      </g>
      <g
        id="g1933-7"
        transform="translate(-185.765 -155.23)">
        <g id="g1895-9">
          <image
            style={{
              overflow: "visible",
              opacity: 0.3,
              enableBackground: "new"
            }}
            width={159}
            height={141}
            id="image1885-3"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAACPCAYAAACS97vwAAAACXBIWXMAAAs6AAALOgFkf1cNAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAByhJREFUeNrsm4lyo0YURQGhzcs4 M9n+//dSiXfJ1gaBqteZO88NQh47JeCcqleSkY1G4nBfd8MkCQDA2EnPbD/QP8r/W5605W8Rcdzy le+VMz9RvlQqcdtgvDKWkeedZcw7Chgqk8fMvYaI4xWwrsJKn3cSMe8oYC3cpKFUSBifgEG4Q1V7 ewzVScS8g4BBtqn9/swq/Jy7VGSMOI5xYOnkq2trtbPau1QsT5FQBcxNuHlVi6qWVnOrqSQl8o0r BYOAtXCbql6qepXH1F5P2kRskzATAWvpLqq6krqw7TP7vQlJOKokLJyA66pWVT1HfCgbJi2NEvo2 PDfhvlT1i9WN/Xxhr88YG45yLBha8IvJ91jVvQzR/ISljKVh3pKCmcm1tOSr5fvN6puJeG0teirm M1Mel4QhBYOAMxFQJysqY2sSqkS5SFjL9rWq36v600T8atuXTkJa8ThacpgBb6wNP1ggBQH9RGXv AqrskoS5tVqV8FcT8Y8WCRFwHElYShKuTMDctu9sYrKWSco2smzTmoQTScIwIfli4n2TunLtmBQc TxJq2s1FwK3J92Qt+jn5vpy3Mz/KLhJmIuHCRLw2EW9kYnIp/4CMdjwqCcMa4UwCaGcCXpsbYSkv hFR04ppHllT88sxclmi0liborO0NYLCEicZEUvHFORL8mCZvL/V2GhN6EX1NJWYZD44vDYMniXkw EzcWyfelu/xYSLWtE2YyNsxFuqlsnyRvb2SA4ZPKMk0mLuQSTP6yrr+0+18aZpGdaxqqjHoTQ+wO GgQcn4ixO6smzpeYgD+QRQT0MqZJ8+1bTEIQscmTrMWTtEnCNtu5QwbeK+XRLpl13HFbASQ/40bW wepj2wDSE7eflIRIB58paed2DPCpICEgIQASAhICICEgIQASAhICICEgIQASAhICICEgIQASAhIC ICEgIQASAhICICEgIQASAhICICEgIQASAhICICEgIQASAhICICEgIQASAhICICEgIQASAhICICEg IQASAhICICEgIQASAhICICEgIQASAhICICEgIQASAhICICEgIQASAhICICEgIQASAhICICEgIQAS AhICICEgIQASAhICICEgIQASAhICICEgIQASAhICICEgIQASAhICICEgIQASwllLWFoBnFUSlkgK 7/Cl/FkJSycc8sGHhlN2goDIB11ciT3vLGFsJ3UVDYWY0BZY3pOTklB3cLDaS4VtBSmJdJGgUj+a HPnBlbzlDQoRcFfV1monMoY3Sgf6RacfcKCGLGFbWO1ccBVNIuYdBKzF21i9WgUhp3agtIYsX3qi dOWAZSzNkZ3Uq9RGQktT8Q15S08/iID1TtdVraTmVU1E2ok7SGnPJWw7udIjsg11QqefoxBHgh/B kfrxxbYHQQ9N30UsCX0bfrUdP1o9VLWUvz1YIk7cAUt7Ll9m5Z+nJw7KOw/QeyRhKS14a348WAVP np2Ih6bvIW/4MguTcGNWP9mO70zAqf1+/TsXVc1sX31ty3riZFIT+1z6mEUmdCrbXk5iP0gvBtCe S9eKNybcfVX/VHVrzx9NTi9h0iUJE/kyt2bzkwk4FwF39lqQcCpp0bckTGW1IMg3tZrJ55uKjKk7 KHs3PvITuSEkYum6ZXBgJRL+ZY/3JmcsCZOuSXiQdvwsaacCPjVImPZQQk3BIN/ckr+uhdVMREyc gGH8/CKtKMh4ODZA71EKxiR8sBSsBfzbfl7Jd3BoGiPnR+J2G2lBe4ngaztA4cBkLg37KGEuAtYn 2GVVV1aX9nnnkoaFHIwX+15ChQH69lga9HBpRieuKwukB+uY2o43MjQ5OjtuGxemkS/80Q7SQlpV 6sZLaY8lDALWJ9qN1cZkXMrnPbgD8SgHIYj4OgAJYzNjTf+Vfd4ne1zJCbhvWyloGxMm0nq17Wxl srJwY6U+T0xS14ovTLgvbqa3MTnn9jd7GZrcWxLcykxx7VrSEJKwdCsosWHIa0TA5JSJiX8zv4Ad zvypLM/EljD6nIRLk/BG2mqoazsBg4RhCetW6k4k3AwsCdWHQ2Qy5ocfrROyYxIWkfWvYL5ftuiy qHvO6NJMGBNeSksNIq4bJNSBeUjCJ9eSioFIGBPRL011vtEl7/jGsTTMIrPhvl4l8Us0IQ21BW9k paApCe/cwHzdZbG25205dqdV6U621s+bn3AGFPIYE6/vl+mSyDKNtpeNzH6bxoSPkoA6MNdkSJLh XcZrukzZ6XPmJ75h6t6gz+332Ngwlli6OqCzYz87DK3bL08M9Tpy8h753iNhEnmToUmYyFKUv0dO r6MvZDVAL+L7Rer9QGbEXQR8N/k5/WPOUER/TTjIpleH9LXYPZfc9NtxLATtrXmSvL2ZIZXhSdPs EAGR8MNE9HfX+EuTTf8HJ0FAJPwMGf2KwNBvZEXCM5WxbYyMfAAAANA3/hVgAFdRRzmCVgYBAAAA AElFTkSuQmCC"
            transform="translate(363.101 763.052) scale(.9929)"
          />
          <g id="g1893-8">
            <g id="g1891-0">
              <g id="g1889-2">
                <path
                  id="path1887-4"
                  className="st4"
                  d="M422.3 772.4h-43.1c-3.5 0-6.3 2.8-6.3 6.3V881c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V778.7c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
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
            className={getTarjetaClass(7, selected)}
            d="M373 779.8h138.1v99.8H373z"
          />
          <g
            id="g1903-3"
            transform="translate(1.905)">
            <g id="g1901-9">
              <text
                transform="translate(408.114 820.274)"
                className="st18 st11 st12">
                {"Caudal de"}
              </text>
              <text
                transform="translate(399.952 836.774)"
                className="st18 st11 st12">
                {"Alimentaci\xF3n"}
              </text>
            </g>
          </g>

          <g id="g1925-9">
            <text
              id="text1923-7"
              transform="translate(423.934 864.593)"
              className="st13 st11 st14">
              {getScaledValue(datosScada.d7, 1)}
            </text>
          </g>
          <text
            id="text1927-0"
            transform="translate(468.286 864.197)"
            className="st13 st11 st12">
            {"m3/h"}
          </text>
          <g id="g1931-3">
            <text
              id="text1929-9"
              transform="translate(402.273 800.428)"
              className="st13 st11 st23">
              {"FIT420 + FIT411"}
            </text>
          </g>
        </g>

        {/* Campana */}
        <g
          className={`${getTemaAlarma(7, loading, datosAlarmas)} cursorPointer`}
          onClick={() => {
            onClickAlarma(7, "Caudal de Alimentación");
          }}>
          <path d="M388.1 853.6c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
          <path d="M386.4 852.6c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9.7-1.3 1.8-2.2 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1z" />
          <path d="M397.7 851.3c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
          <path d="M398.3 849.5c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1z" />
          <path d="M399.2 858.6v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1z" />
          <path d="M394.2 866.1c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
        </g>

        {/* Fin Caudal de Alimentación */}
      </g>
      <circle
        id="circle1935"
        transform="scale(.99995) rotate(-88.093 265.825 930.444)"
        className="st25"
        cx={265.8}
        cy={930.4}
        r={9.2}
      />
      <path
        id="rect1937"
        className="st0"
        d="M99.9 1375.9h3.7v11h-3.7z"
      />
      <path
        id="path1939"
        className="st0"
        d="M108.9 1369.9c.7.7.7 2 0 2.8l-5.6 5.6c-.7.7-2 .7-2.8 0l-5.6-5.6c-.7-.7-.7-2 0-2.8"
      />
      <circle
        id="circle1941"
        className="st25"
        cx={532.1}
        cy={362.9}
        r={9.2}
      />
      <g id="g1989">
        <g id="g1953">
          <image
            style={{
              overflow: "visible",
              opacity: 0.3,
              enableBackground: "new"
            }}
            width={159}
            height={141}
            id="image1943"
            xlinkHref="data:image/png;base64,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"
            transform="translate(452.907 212.567) scale(.9929)"
          />
          <g id="g1951">
            <g id="g1949">
              <g id="g1947">
                <path
                  id="path1945"
                  className="st4"
                  d="M512.1 221.9H469c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V228.2c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
                />
              </g>
            </g>
          </g>
        </g>

        {/* ORP de Entrada */}

        {/* Tarjeta */}
        <g
          className="cursorPointer"
          onClick={() => loadGrafico(0, "ORP Entrada", false)}>
          <path
            className={getTarjetaClass(0, selected)}
            d="M462.8 229.3h138.1v99.8H462.8z"
          />
          <g id="g1959">
            <text
              transform="translate(508.778 270.884)"
              className="st18 st11 st12">
              {"ORP de"}
            </text>
            <text
              transform="translate(509.035 288.384)"
              className="st18 st11 st12">
              {"Entrada"}
            </text>
          </g>

          <g
            id="g1981"
            transform="translate(-4)">
            <text
              id="text1979"
              transform="translate(522.196 314.107)"
              className="st13 st11 st14">
              {getScaledValue(datosScada.d0, 1)}
            </text>
          </g>
          <text
            id="text1983"
            transform="translate(567.092 313.712)"
            className="st13 st11 st12">
            {"mV"}
          </text>
          <g id="g1987">
            <text
              id="text1985"
              transform="translate(515.57 250.942)"
              className="st13 st11 st23">
              {"AE403"}
            </text>
          </g>
        </g>

        {/* Campana */}
        <g
          className={`${getTemaAlarma(0, loading, datosAlarmas)} cursorPointer`}
          onClick={() => {
            onClickAlarma(0, "ORP Entrada");
          }}>
          <path d="M477.9 303.1c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
          <path d="M476.2 302.1c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1z" />
          <path d="M487.5 300.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
          <path d="M488.1 299c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1z" />
          <path d="M489 308.1v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1z" />
          <path d="M484 315.6c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
        </g>
      </g>

      {/* Fin ORP de Entrada */}

      <g
        id="g2051"
        transform="translate(6)">
        <path
          id="path2037"
          className="st0"
          d="M1224.4 431.4h-14.8c-.9 0-1.6-.7-1.6-1.6V415c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6z"
        />
        <g id="g2043">
          <path
            id="path2039"
            className="st0"
            d="m1209.2 435.3 7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
          />
          <path
            id="path2041"
            className="st0"
            d="m1224.8 445.9-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
          />
        </g>
        <path
          id="line2045"
          className="st1"
          d="M1217 430.4v10"
        />
        <path
          id="line2047"
          className="st2"
          d="M1208 422.4h18"
        />
        <path
          id="line2049"
          className="st2"
          d="M1217 423.4v8"
        />
      </g>
      <path
        id="path2053"
        className="st0"
        d="M1284.5 493.3c0-6.7-7.8-12.1-17.5-12.1s-17.5 5.5-17.5 12.1h.1c-.1.3-.1.7-.1 1.1V532c0 3.5 3.4 6.4 7.6 6.8v6.2h5.2v-6.1h9v6.1h5.2v-6.2c4.5-.2 8-3.2 8-6.8v-37.6c0-.3-.1-.7-.1-1.1h.1z"
      />
      <path
        id="polyline2061"
        className="st3"
        d="M1234 440.8h20.7v-72.7H1228"
      />
      <path
        id="polygon2063"
        style={{
          fill: "#cbcbcb",
          fillOpacity: 0.6
        }}
        d="M1221.3 362.8h-8.6v10.6h8.6l4.6-2.6 4.5-2.7-4.5-2.6z"
      />
      <path
        id="path2067"
        className="st0"
        d="M309.9 1252.2s17.3-12.3 17.2-12.5v-47c0-5.4-4.8-9.9-11.7-9.9H295c-6.4 0-11.7 4.5-11.7 9.9v47l17.7 12.5c0-.1 4.5 2.8 8.9 0z"
      />
      <path
        id="path2069"
        className="st29"
        d="M547 1143.4H319s-8.4-1.3-8.5 9v39.5c0 3-2.5 5.5-5.5 5.5s-5.5-2.5-5.5-5.5v-39.5c-.1-10.3-8.5-9-8.5-9h-51.8c-3.4 0-6.2-2.8-6.2-6.2V932.4"
      />
      <path
        id="path2071"
        d="M593 1114.4h164.2s7 .3 6.8-7.5V907.4"
        style={{
          fill: "none",
          stroke: "#35ace8",
          strokeWidth: 4,
          strokeLinejoin: "round",
          strokeMiterlimit: 10
        }}
      />
      <path
        id="path2073"
        className="st21"
        d="M621.1 1121.2c-1 0-1.9-.8-1.9-1.9v-9c0-1 .8-1.9 1.9-1.9.5 0 1 .2 1.3.5l4.5 4.5c.7.7.7 1.8.1 2.6l-.1.1-4.5 4.5c-.4.5-.8.6-1.3.6z"
      />
      <path
        id="path2075"
        className="st4"
        d="M621.1 1109.5c.2 0 .4.1.6.3l4.5 4.5c.3.3.3.9 0 1.3l-4.5 4.5c-.2.2-.4.3-.6.3-.4 0-.9-.3-.9-.9v-9c0-.6.4-1 .9-1m0-2c-1.6 0-2.9 1.3-2.9 2.9v9c0 1.6 1.3 2.9 2.9 2.9.8 0 1.5-.3 2-.8l4.5-4.5.1-.1.1-.1c.9-1.2.9-2.9-.2-3.9l-4.5-4.5c-.5-.6-1.2-.9-2-.9z"
      />
      <g id="g2083">
        <path
          id="path2079"
          className="st21"
          d="M606.8 1265.3c1 0 1.9.8 1.9 1.9v9c0 1-.8 1.9-1.9 1.9-.5 0-1-.2-1.3-.5l-4.5-4.5c-.7-.7-.7-1.8-.1-2.6l.1-.1 4.5-4.5c.4-.6.8-.6 1.3-.6z"
        />
        <path
          id="path2081"
          className="st4"
          d="M606.8 1276.9c-.2 0-.4-.1-.6-.3l-4.5-4.5c-.3-.3-.3-.9 0-1.3l4.5-4.5c.2-.2.4-.3.6-.3.4 0 .9.3.9.9v9c0 .6-.4 1-.9 1m0 2c1.6 0 2.9-1.3 2.9-2.9v-9c0-1.6-1.3-2.9-2.9-2.9-.8 0-1.5.3-2 .8l-4.5 4.5-.1.1-.1.1c-.9 1.2-.9 2.9.2 3.9l4.5 4.5c.5.6 1.2.9 2 .9z"
        />
      </g>
      <g id="g2099">
        <path
          id="path2085"
          className="st0"
          d="M316 1467.4h-14.8c-.9 0-1.6-.7-1.6-1.6V1451c0-.9.7-1.6 1.6-1.6H316c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6z"
        />
        <g id="g2091">
          <path
            id="path2087"
            className="st0"
            d="m300.8 1471.3 7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
          />
          <path
            id="path2089"
            className="st0"
            d="m316.4 1481.9-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
          />
        </g>
        <path
          id="line2093"
          className="st1"
          d="M308.6 1466.4v10"
        />
        <path
          id="line2095"
          className="st2"
          d="M299.6 1458.4h18"
        />
        <path
          id="line2097"
          className="st2"
          d="M308.6 1459.4v8"
        />
      </g>
      <g id="g2103">
        <path
          id="path2101"
          className="st29"
          d="M573 1325.9v142c0 4.7-3.8 8.5-8.5 8.5H323"
        />
      </g>
      <path
        id="path2105"
        className="st29"
        d="M101.5 1364.4v-33.1c0-3.5 2.9-6.4 6.4-6.4h183.6s8.4 1.3 8.5-9v-72.6c0-2.9 2.4-5.2 5.2-5.2 2.9 0 5.2 2.4 5.2 5.2v72.6c.1 10.3 8.5 9 8.5 9h254v-44.7s-1.1-7.6 6.8-8.8H812s9 .8 9-8.4v-238"
      />
      <g id="g2109">
        <path
          id="path2107"
          className="st29"
          d="M294 1476.4h-6.8c-3.8 0-6.8-3.8-6.8-8.5v-67c0-4.7-3.8-8.5-8.5-8.5H169.5c-4.7 0-8.5-3.8-8.5-8.5v-58"
        />
      </g>
      <circle
        id="circle2157"
        className="st25"
        cx={233.9}
        cy={1119.8}
        r={9.2}
      />
      <g id="g2203">
        <g id="g2167">
          <image
            style={{
              overflow: "visible",
              opacity: 0.2,
              enableBackground: "new"
            }}
            width={176}
            height={118}
            id="image2159"
            xlinkHref="data:image/png;base64,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"
            transform="translate(50.428 1063.23) scale(.9915)"
          />
          <g id="g2165">
            <g id="g2163">
              <path
                id="path2161"
                className="st4"
                d="M161.1 1067.9h42.1c3.4 0 6.3 2.8 6.3 6.3v33.2c0 .8.3 1.6.8 2.2l5.3 6.5c1.1 1.3 1 3.3-.1 4.6l-5.1 5.5c-.6.6-.9 1.5-.9 2.4v36.9c0 3.4-2.8 6.3-6.3 6.3H60.7c-3.4 0-6.3-2.8-6.3-6.3v-91.3c0-3.5 2.8-6.3 6.3-6.3h100.4z"
              />
            </g>
          </g>
        </g>

        {/* Caudal a ZM-01 */}
        {/* Tarjeta */}
        <g
          className="cursorPointer"
          onClick={() => loadGrafico(4, "Caudal a ZM-01", false)}>
          <path
            className={getTarjetaClass(4, selected)}
            d="M60.7 1067.9h143.8v103.9H60.7z"
          />
          <text
            id="text2171"
            transform="translate(107.188 1109.626)"
            className="st18 st11 st12">
            {"Caudal a"}
          </text>

          <g id="g2193">
            <text
              id="text2191"
              transform="translate(117.903 1154.398)"
              className="st13 st11 st14">
              {getScaledValue(datosScada.d4, 1)}
            </text>
          </g>
          <text
            id="text2195"
            transform="translate(164.507 1155.003)"
            className="st13 st11 st12">
            {"m3/h"}
          </text>
          <g id="g2199">
            <text
              id="text2197"
              transform="translate(117.785 1089.626)"
              className="st13 st11 st23">
              {"FIT420"}
            </text>
          </g>
          <text
            id="text2201"
            transform="translate(114.985 1126.96)"
            className="st18 st11 st12">
            {"ZM-01"}
          </text>
        </g>

        {/* Campana */}
        <g
          className={`${getTemaAlarma(4, loading, datosAlarmas)} cursorPointer`}
          onClick={() => {
            onClickAlarma(4, "Caudal a ZM-01");
          }}>
          <path d="M74.5 1144.3c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.1-2.5 2.2z" />
          <path d="M72.8 1143.3c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9.7-1.2 1.8-2.2 3-2.5.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-2.9 1.5-3.7 3z" />
          <path d="M84.1 1142c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.7-2.5-2.2z" />
          <path d="M84.7 1140.1c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.3-2.3-2.4-3.7-3z" />
          <path d="M85.5 1149.3v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.7-.9-1.3-.9-2.1z" />
          <path d="M80.5 1156.7c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.8 1.7 1.6 1.7z" />
        </g>

        {/* Fin Caudal a ZM-01 */}
      </g>
      <circle
        id="circle2205"
        className="st25"
        cx={440.9}
        cy={905.8}
        r={9.2}
      />
      <circle
        id="circle2205-8"
        className="st25"
        cx={256.2}
        cy={757.6}
        r={9.2}
      />
      <text
        id="text2207"
        transform="translate(290.387 1219.665)"
        className="st4 st11 st23">
        {"ZM-01"}
      </text>
      <circle
        id="circle2209"
        className="st25"
        cx={421.9}
        cy={1141.8}
        r={9.2}
      />
      <g id="g2213">
        <path
          id="path2211"
          className="st20"
          d="M586.8 1110.6h-17.4c-1.1-.3-2.2-.4-3.4-.4-8.1 0-14.6 6.5-14.6 14.6 0 4.1 1.7 7.8 4.3 10.4l-4.1 9c-.3.7.1 1.6.7 1.6H580c.6 0 .9-.9.6-1.6l-4.1-9.1c2.6-2.6 4.2-6.3 4.2-10.3 0-1.5-.2-2.9-.6-4.2h6.8c1.4 0 2.6-1.2 2.6-2.7v-4.6c0-1.5-1.2-2.7-2.7-2.7z"
        />
      </g>
      <g id="g2225">
        <g id="g2221">
          <image
            style={{
              overflow: "visible",
              opacity: 0.15,
              enableBackground: "new"
            }}
            width={41}
            height={41}
            id="image2215"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAzrAAAM6wHl1kTSAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA79JREFUeNrsmG1v0zAUhWPHbbJ1 a8s22HgR//9P8QHEEIKtrO269S0JDjoXHS7OGodO+8AiHaVVU+eJfV+OkyTPx/PxfPxfh3nEcWXs Sp2fHNQoQAZlyE7gZo+AVsEaBVcq8CrwEI2H2xOgKIUsgQtkrUKdy8BM7xXUKLB6nJ5SSqA12NZr Q9pCrYDdP0AKXN8r9zqA6s8ZfrOAqIFW0L3XksTA1b5ABVIAa7CB15HXEKo/H+L3FLO5BuDC6xaa Q/d4gC2uNSFY13Em+wA89jrxOsX5hdcIsBmB1iB3AJx6/YCu8P0W16xxr1LDuo6QhwA68zr3usC5 Bh7jIbLAjM4BOPH6jrEknmcPVQMXASmgB1jil15vvN7hfAHwIa7pqxhdYuZqoGtc5yBdHf6CdRFF 3CFRjrDM54B8j/MrLP0A1zmV9WuCHeK6BA+jK0Ohl99FJlCOm9Qz99rrLc3oKWI2p+VMKOa2CBmp DH3K9hVVgftQFXAtZzOl2Bxj2c8BK7E5oiWXos+dSMqZLHdKcAuqAjMqW6YNaCiJjgB6CtgzhIHE ZUZLrk2JVUrwX6kE10gyGWODWf0F61rMpqX4HGDmTqAx4GUpHUGE/AR3qxyhMoKGWLGMVuT3f22L GBXQjGrniBIiUy1zlwEyFAY54Dh2g2PFLH1GnWiAwXMVk6bFeAnFvYRUph7YagdmI5KpR7B5w8Bd nFeqZEJj2R3uPFTwOWtt08ARHrjJcO8EDR3Vrs7R8eAxy4cclG05UAGJl1yrDlJ2BNQ+VXek6iFQ bQxK1QIXcEJLdJRNJCy7/Q35VHFP25B7si2fXkzFHXWPOb6v1Gy0CSGBXJL9W6B9dur1lXLo4n5u oDHKVE9lflNyFQpSutIU4y7IREfbPAZdAPAaTmlITkmu1QXbqBDaKG8qrZMNdKETK41IAEtF2lHL dA1b4zKQMOL0xZN+9rrE+SuAZ4jVP+LeRSTACrPAW+ICSziHQRkrP2rp/xtKxnpVvnl98PoE2CuM s4qN0aph+W8JoqSQmMGoHKvNXUJVQ+zcBKAfvb4Achbwop02dyVuZijuthh8hniTzd0gACoPNKWN 3SVC4EbFZ/SeqQpk7UptLyTmJoDUM2rUTnQOWEnKOWV7Y01u26NNwKSIoxKrNiDLllPJSlRxl/29 hMGSCn1jLY59SWYanE+PXkr0AiVKZ/+awAtVJfb2Ns8EpO2aVV0vVLKKUL3c92tHE7CEoVePTQ6s CryKfNT3o6bh3DR2pZxRFXujp3jFHuVlfwowAODJpnrKQiTcAAAAAElFTkSuQmCC"
            transform="translate(548.09 1107.332) scale(.8537)"
          />
          <g id="g2219">
            <circle
              id="circle2217"
              className="st4"
              cx={566}
              cy={1125.1}
              r={10.9}
            />
          </g>
        </g>
        <circle
          id="circle2223"
          className="st24"
          cx={566}
          cy={1124.9}
          r={8}
        />
      </g>
      <text
        id="text2227"
        transform="translate(551.373 1164.821)"
        className="st13 st11 st23">
        {"P-006"}
      </text>
      <circle
        id="circle2229"
        className="st25"
        cx={470.9}
        cy={1141.8}
        r={9.2}
      />
      <g id="g2275">
        <g id="g2241">
          <image
            style={{
              overflow: "visible",
              opacity: 0.3,
              enableBackground: "new"
            }}
            width={159}
            height={141}
            id="image2231"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACPCAYAAAB9NdDOAAAACXBIWXMAAAs6AAALOgFkf1cNAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABy5JREFUeNrsmwlz4kYQRiUhLtvr jXNV/v/fS/bA5jCXFJH6urZ3dnTg2IklvVfVJcAwWOjRPT0SSQIAMFbSdzYO9I/yvxQnbXgtEiJf ea2Y+ZXipUEkwW0Yp4RlcLuziHlH+S6RRSImJIxPvksUkSjbJMw7yGeyTRR5sJ3UCIiQ4yi5Zxen YGsi1kqYd5DPJJtWMVPMdX+qMbKIhAg4bAEt65lwxyr2VRwUR0XSJGHeQb7cSXdTxdKFiTipkRCG K2LhMt9esVNstU0lY62EeUvZNfkust1W8cHFrR6fOQnJgOPJgCbfQfJtFE9BVUwCCVsFNCwDziXb xyoeFD9Vca/HF4GAiDcOEX3220m8lXwwF3ymLFxiKrtkwInLfneS7tcqfqviF92/099DAZFw+J1v obnfXiV3pYQ00/G3v5+CpqQxA/oll6my31LZ7kHy/aHtg0rxMlKCEXD4ZdhnwI2S0ULuFGpAfENi EqZ+nCYBLQPeSLQHZb5LFvw9IiBNyDibEBNwLgd8Wd4oOz67RrXsUoL9sos1IPcquz+7ueCdmwNm ZMBRZcDCNSGzQL6LeI/y5in5tlx31HOiJTg842ENyEJZ8M51wPeuE55rnBQBRyWgNSJTl9kOrhxb gzp3z/FVsmxrQnK3DLNIvq393ei+DT6jAx6tiJlrOI7OD3Nl4bJf1JG2hWgT0Bai5+6+H5j533gz YZJ8OysWcyXMfkmbgHXnf31MnHgZyy+jxUpvmyexJPVPGc4ic8AkECoLhKy7Egb5xkXs+GctyemH HiHr+CZcegUvFbLRl6zjwEldDQdokLF1RSS7YsCEsgtXZL9ObmQdLQZ4qZjJvy3BAG/aRgMgICAg AAICAgIgICAgAAICAgIgICAgAAICAgIgICAgAAICAgIgICAgAAICAgIgICAgAAICAgIgICAgAAIC AgIgICAgAAICAgICAiAgICAAAgICAiAgICAAAgICAiAgICAAAgICAiAgICAAAgICAiAgICAAAgIC AiAgICAAAgICAiAgICAAAgICAiAgICAgIAACAgICICAgIAACAgICICAgIAACAgICICAgIAACAgIC ICAgIAACAgICICAgIAACAgICICD0WcBSAfC/Z8AyskVQuNabFwlYdh0MRi1aLK7KgGXkdqGwAYvI 4AgJTdO38poSHCuxF+nOiiII5EO00JWYI7VJK2sY9OziFMTZDV4wHxy9fIVz4hzcLpocyRsGtgGO VRyq2CuOgYxZMtzlnPSVJuFDla8IEtXRxcG5EpOwDAX0f4jJ96zYabusYurky17hgL038eq2XYQr I/OhoQkYc8T82EckbM2Asey316CbKtaK2ypmkq7UOJMgE6Y9F9AiCwRMI/tWtnSDQ5EwlqQukm2d H7bdSsRDZNpWtglo876DBrkM+lTFqoq7KhYSrpSkM92vO0B9y3pZQ8T2sWkSXlt+ei6gld29/Fgp vlbxKF9MwmMgYOscsHACbjXYZeCbiHw3EjAPDlDf5Zton3xMXKYv9Xz/pS0iDdspEHEIAtq+HCXY WvL9VcWnKr5Iwk0gYNkmoC8XJuBOAl7Em+s1hZPTBJxGylXfBDT5cu3PTDF3t8Pphv/C+vnQwcUp kgHKngtoUzSbnn2VfH9q+1ViWhk+uy9gpwx4diV4rQPiM99OlscETHsoYBpkvrm+dEvt41Ixc59F GlQLa9S2il2wctD39dNYj2B+PCrzfVKsGjJg2SRgEnkDv9Ry0mNPmg8ugxLcx27YC2jZbyHxLvv4 QXHQY1YJUlcNdm66stZ24yQ81c2Deipg4bK97fejMt/KleD9NV1wmGbtm526x3xZXrrylLuD2LdO OBRwrn27dPv3VXzUPt87Cad6zdk1ao8vmYj3rPwmkWW650gnvKnZ79YmxJfhVAP4ibYXcK4DMe15 F2z/s5XfmQT8IOnWwfrWrfY9c9ORJ5WgS3yOZIFDXRnqcRY8BRL62AfyRclb3qyoWXh8duL5SXko X9/mgdblzlSC75T9tk7AncT0Am4l3GcXX1wG3Dd1gj3MgL4Mn5yI4RmQMPOV1wjoS7G3/hhZkujr 3M/j92MqwdZOvp3r+LoIuHKZ03eBQ7iII5wLniNRRBLY1RkwtsKfJt+fA06Tfi9Ah+uAPgv6cmJn hNY1AtoE3CKW/fq+Dli3ZOe/WLGMV760BIcvPjvRikC6vp96S5LvF6JjV/34ta+5+zLuXBe4Cjrg Q01GSAYiYSjjVWd88he8mb+d1hzIPotoEoaXo/k1r1gX7LvA8DzoEK+fLDv4kbymgG1vlA7kA06T H8/j+gsztsp+fiH6mHx/Jchh4PJdLdprCvhm/8w7+lDTmom2iWZNmD3/FHSAx4E1HW8+94Hmcuwv UPDdf5LEL8zkZwsI+KqfTxbI6Juvum6Qnykg4Ktnw7qOn99LI+C7+LwQDwAAAPrA3wIMADCySor6 vQ2QAAAAAElFTkSuQmCC"
            transform="matrix(.9929 0 0 -.9929 344.083 1290.034)"
          />
          <g id="g2239">
            <g id="g2237">
              <g id="g2235">
                <path
                  id="path2233"
                  className="st4"
                  d="M440.7 1280.7h45.1c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-53.7c-1.3 0-2.5-.4-3.5-1.3-6.4-6.7-6.4-6.7-12.9-.2l-.4.3c-1 .8-2.2 1.2-3.4 1.2h-51.7c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h80.5z"
                />
              </g>
            </g>
          </g>
        </g>

        {/* Caudal después de ZM-01 */}
        {/* Tarjeta */}
        <g
          className="cursorPointer"
          onClick={() => loadGrafico(20, "Caudal después de ZM-01", false)}>
          <path
            className={getTarjetaClass(20, selected)}
            d="M354 1173.5h138.1v99.8H354z"
          />
          <text
            id="text2245"
            transform="translate(373.287 1212.556)"
            className="st18 st11 st12">
            {"Caudal despu\xE9s"}
          </text>

          <g id="g2267">
            <text
              id="text2265"
              transform="translate(404.002 1259.575)"
              className="st13 st11 st14">
              {getScaledValue(datosScada.d20, 1)}
            </text>
          </g>
          <text
            id="text2269"
            transform="translate(406.456 1192.91)"
            className="st13 st11 st23">
            {"FIT421"}
          </text>
          <text
            id="text2271"
            transform="translate(449.834 1260.513)"
            className="st13 st11 st12">
            {"m3/h"}
          </text>
          <text
            id="text2273"
            transform="translate(390.035 1231.556)"
            className="st18 st11 st12">
            {"de ZM-01"}
          </text>
        </g>

        {/* Campana */}
        <g
          className={`${getTemaAlarma(20, loading, datosAlarmas)} cursorPointer`}
          onClick={() => {
            onClickAlarma(20, "Caudal después de ZM-01");
          }}>
          <path d="M369.1 1249.5c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
          <path d="M367.4 1248.5c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1z" />
          <path d="M378.7 1247.2c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
          <path d="M379.3 1245.4c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1z" />
          <path d="M380.2 1254.5v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1z" />
          <path d="M375.2 1262c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
        </g>

        {/* Fin Caudal después de ZM-01 */}
      </g>
      <g id="g2327">
        <g id="g2287">
          <image
            style={{
              overflow: "visible",
              opacity: 0.3,
              enableBackground: "new"
            }}
            width={159}
            height={141}
            id="image2277"
            xlinkHref="data:image/png;base64,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 RU5ErkJggg=="
            transform="translate(393.267 989.552) scale(.9929)"
          />
          <g id="g2285">
            <g id="g2283">
              <g id="g2281">
                <path
                  id="path2279"
                  className="st4"
                  d="M452.5 998.9h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3H535c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
                />
              </g>
            </g>
          </g>
        </g>

        {/* Presión después de ZM-01 */}
        {/* Tarjeta */}
        <g
          className="cursorPointer"
          onClick={() => loadGrafico(14, "Presión después de ZM-01", false)}>
          <path
            className={getTarjetaClass(14, selected)}
            d="M403.2 1006.3h138.1v99.8H403.2z"
          />
          <g id="g2295">
            <g id="g2293">
              <text
                id="text2291"
                transform="translate(419.741 1048.774)"
                className="st18 st11 st12">
                {"Presi\xF3n despu\xE9s"}
              </text>
            </g>
          </g>

          <g id="g2317">
            <text
              id="text2315"
              transform="translate(456.1 1091.093)"
              className="st13 st11 st14">
              {getScaledValue(datosScada.d14, 1)}
            </text>
          </g>
          <text
            id="text2319"
            transform="translate(507.453 1091.697)"
            className="st13 st11 st12">
            {"bar"}
          </text>
          <g id="g2323">
            <text
              id="text2321"
              transform="translate(456.44 1027.928)"
              className="st13 st11 st23">
              {"PT423"}
            </text>
          </g>
          <text
            id="text2325"
            transform="translate(440.535 1066.056)"
            className="st18 st11 st12">
            {"de ZM-01"}
          </text>
        </g>

        {/* Campana */}
        <g
          className={`${getTemaAlarma(14, loading, datosAlarmas)} cursorPointer`}
          onClick={() => {
            onClickAlarma(14, "Presión después de ZM-01");
          }}>
          <path d="M418.3 1080.1c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
          <path d="M416.6 1079.1c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1z" />
          <path d="M427.9 1077.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
          <path d="M428.5 1076c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1z" />
          <path d="M429.4 1085.1v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1z" />
          <path d="M424.4 1092.6c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
        </g>

        {/* Fin Presión después de ZM-01 */}
      </g>
      <circle
        id="circle2329"
        className="st25"
        cx={679.9}
        cy={1113.4}
        r={9.2}
      />
      <g id="g2381">
        <g id="g2341">
          <image
            style={{
              overflow: "visible",
              opacity: 0.3,
              enableBackground: "new"
            }}
            width={159}
            height={141}
            id="image2331"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAACPCAYAAACS97vwAAAACXBIWXMAAAs6AAALOgFkf1cNAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB1hJREFUeNrsm41S20YURiVZxhgS SJN2+v7P1yYhYIyxLW3lzt3Jl+vVj4G0kXzOzB0ZFaTYPvp270rNMgCAcyf/RY8F4yG89gDlG8qG hPAiOcsXyKfbHAmRzb0Op8pYniBglKyw14XszxNSwvkIGFzVsu0VMT9BwMLVTKpokRAppz/EqniV VS1brRcloRewtJpLlSIjQ/R5Db2ZCLi32knFfZH6VAlVwJkJd2F1abWw8iIi4fnM/4KTbyO1tdp1 idgnoRfwyupaKsroh2Y4j7lgZZIdZHuyemxq1dS65e/rIRJqozETAd83ddPUrdU7E3Fhv+MlRMbp J+FeEvAg30NT9xZcMydeLV6FoRLO7HeihAcBPzb1yba3JubSSVjwfU1eRpUwpuAh/e7MhyhgJXPD 2DX3SqgpFlNwaan3oanfm/rTtr+ZmFeJJCQFpy1g5iRcWwJeWQrG9NMmJXbPg+aEOh+MEr43CQ8p +IeJ+DEhIWuG5zMfjHPCKOG1eZDL/tikPIuMtaZh2dMVx+WYpZ3gxtLvkwzJN4nhmPngeUm4Mwfm 9r3vZY64kiZl40bKcEoSLqQxuZX6YMP0UiaiNCXnJWEccktzpjLZVtIvLLLva8pHqydlR1esSbiw gy1lieadLNnoWiHynV9zEr/32obdlTly5ST0PcO/aTgkCUtJw8vsx4XquHg9z1gjPPcmpU54skik YG8SphJx5mSM0s1FvrbbdjD9YTkTP+auLrLvt3pnbSPlkDsm/mGFmbO6oCM+S/IWV4qEeJ03MU55 lCv1CFdGE4KI2fEzpnkipNr+5ujORtvjWHrgjOSDHiG76uhvihNO4A+EiHCqK0mKgXb3pSVAly+d FC88MMCbwdMugIQASAhICICEgIQASAhICICEgIQASAhICICEgIQASAhICICEgIQASAhICICEgIQA SAhICICEgIQASAhICICEgIQASAhICICEgIQASAhICICEgIQASAhICICEgIQASAhICICEgIQASAhI CICEgIQASAhICICEgIQASAhICICEgIQASAhICICEgIQASAhICICEgIQASAhICICEgIQASAhICICE gIQASAhICICEgIQASAhICICEgIQASAhICICEgIQASAhICDBEwsDHBP+nhAEp4VcZjoOU/xkp4VWh VbTI1rYP8eCUwAodXg1KQj1A3VRl2yD76iEngbOUr62OHCt6BKylKqu9VSUyIiDihRZfqpawCkOS UA8Yxds2tZOf9/I7CHm+AupIWTk/VMaQmieWAw6+N/EOAj43tbFtFHJnMueynQK5bPNXflFTXVUI LqR25oZW9KRyU7hWCYN94MFZfTjQk9VaamnHiH8zS3xp+chFzN176pIyTLyZC4kLrBb5vCNPFlpe xB8uzK4krEXAeIJVUw9N3Td11dSFpV9tr0tJxDELqOIVkvC5e50PmB/511OQUHuGSkLqQfw4bB9t /7NM444uyrInZvUEj3bgu4SAh99Z2PGKRHKMjUJq5qpw5QWs5AKu3by5Hnkqho6gejT5vjT11Ty5 FxG3rqEdJGH8QHcWqSs78KUJOLN/xMHya9s/70iKMSVgFKy0mtt7nltFIUOikdvLXHknH/5+AiKG jqE4Svi5qb9se2fBFYfkKjUilD3LM17CCxEwyMmvLQnnbl44NhHjvzdKNrf3dSm1kKnHTObDlZu+ bKR0OBq7hN6Pvb3HtSTh3ybhV/NGk3DwcOwljLKVbghey/xwIUlYjDgJi4SAh/f3zi62K5FRPw9t 4Nb2ea3stYpYjbxZCYmR8tne5+H9fpMh+Zvt27Q0Jr0SZvLhPotU8eTPdoJr65L1SylG2iHnMgzP nYA3UlHGubsode78zS5QFdGn4dg740qmHE8i4r00KWtzZd/WoJU9J6zti9mJSMF+jt3QUlKwnMCc MEp4YRIeBHzf1K3IdGsf7MJSUy/Ke5sLxSR4kDTYjljClBu1Wx/cyNLM2nXGVWqNsC8J48kq227F /q2dcCETdp0jFSNdJ0wlYZRwJeteG9t3ab8b50Vx9eCL1Z2J+DjRJNS5cEzEOCfetqwPhlMk9MNy qi3fiHxdDcmYRPRzwisbgtduMfbGRoGYhE+Sgp9FwnsZkjoTYWQSqheVDM2pW3adt3TLF9hf2xcV RSx6mpExdsc6JC9dAmonqBJuREJNQd8djrU7Dh1Nin9wIbUu2vp+yxecvHYy+jskU7hNFy+qXXb8 xFAty1aXTsLYkMQE1BTcZtNYsG5bMwwu8Y5uz71GwlQi5q5xGWPqtUmYOQl1iImTb10b1cYkLss8 uK54mx3fwJ/qveQsO/GhjfIVJ039PKUnaIrsx8eQdPIdH97QJZqdDNXaGXoBp/Q0TThx/5tImE3o Ku57f7UIlrqXrg9s6H/zneHY75L8dA/yDIYkor+XXGbtt+1SD/zysC8SvmmzEpdwdDXAP0Ezladm kPAX/JxOeZ6Q/zMRCX+6jFlCwlSnCEj4n39uyAcAACfyjwADABTsWbhpgphxAAAAAElFTkSuQmCC"
            transform="translate(600.934 961.552) scale(.9929)"
          />
          <g id="g2339">
            <g id="g2337">
              <g id="g2335">
                <path
                  id="path2333"
                  className="st4"
                  d="M660.2 970.9h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V977.2c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
                />
              </g>
            </g>
          </g>
        </g>

        {/* Presión después de P-006 */}
        {/* Tarjeta */}
        <g
          className="cursorPointer"
          onClick={() => loadGrafico(15, "Presión después de P-006", false)}>
          <path
            className={getTarjetaClass(15, selected)}
            d="M610.9 978.3H749v99.8H610.9z"
          />
          <g id="g2349">
            <g id="g2347">
              <text
                id="text2345"
                transform="translate(627.408 1019.774)"
                className="st18 st11 st12">
                {"Presi\xF3n despu\xE9s"}
              </text>
            </g>
          </g>

          <g id="g2371">
            <text
              id="text2369"
              transform="translate(663.768 1063.093)"
              className="st13 st11 st14">
              {getScaledValue(datosScada.d15, 1)}
            </text>
          </g>
          <text
            id="text2373"
            transform="translate(715.12 1063.697)"
            className="st13 st11 st12">
            {"bar"}
          </text>
          <g id="g2377">
            <text
              id="text2375"
              transform="translate(664.107 999.928)"
              className="st13 st11 st23">
              {"PT426"}
            </text>
          </g>
          <text
            id="text2379"
            transform="translate(648.202 1038.056)"
            className="st18 st11 st12">
            {"de P-006"}
          </text>
        </g>

        {/* Campana */}
        <g
          className={`${getTemaAlarma(15, loading, datosAlarmas)} cursorPointer`}
          onClick={() => {
            onClickAlarma(15, "Presión después de P-006");
          }}>
          <path d="M626 1052.1c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
          <path d="M624.3 1051.1c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9.7-1.3 1.8-2.2 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1z" />
          <path d="M635.6 1049.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
          <path d="M636.2 1048c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1z" />
          <path d="M637.1 1057.1v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1z" />
          <path d="M632.1 1064.6c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
        </g>

        {/* Fin Presión después de P-006 */}
      </g>
      <circle
        id="circle2433"
        className="st25"
        cx={232.1}
        cy={1006.8}
        r={9.2}
      />
      <g id="g2479">
        <g id="g2443">
          <image
            style={{
              overflow: "visible",
              opacity: 0.2,
              enableBackground: "new"
            }}
            width={176}
            height={118}
            id="image2435"
            xlinkHref="data:image/png;base64,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"
            transform="translate(49.428 949.564) scale(.9915)"
          />
          <g id="g2441">
            <g id="g2439">
              <path
                id="path2437"
                className="st4"
                d="M160.1 954.3h42.1c3.4 0 6.3 2.8 6.3 6.3v33.2c0 .8.3 1.6.8 2.2l5.3 6.5c1.1 1.3 1 3.3-.1 4.6l-5.1 5.5c-.6.6-.9 1.5-.9 2.4v36.9c0 3.4-2.8 6.3-6.3 6.3H59.7c-3.4 0-6.3-2.8-6.3-6.3v-91.3c0-3.5 2.8-6.3 6.3-6.3h100.4z"
              />
            </g>
          </g>
        </g>

        {/* Presión post filtros hacia ZM-01 */}
        {/* Tarjeta */}
        <g
          className="cursorPointer"
          onClick={() =>
            loadGrafico(18, "Presión post filtros hacia ZM-01", false)
          }>
          <path
            className={getTarjetaClass(18, selected)}
            d="M59.7 954.3h143.8v103.9H59.7z"
          />
          <text
            id="text2447"
            transform="translate(76.303 995.96)"
            className="st18 st11 st12">
            {"Presi\xF3n post filtros"}
          </text>

          <g id="g2469">
            <text
              id="text2467"
              transform="translate(116.903 1040.731)"
              className="st13 st11 st14">
              {getScaledValue(datosScada.d18, 1)}
            </text>
          </g>
          <text
            id="text2471"
            transform="translate(169.507 1041.336)"
            className="st13 st11 st12">
            {"bar"}
          </text>
          <g id="g2475">
            <text
              id="text2473"
              transform="translate(117.677 975.959)"
              className="st13 st11 st23">
              {"PT419"}
            </text>
          </g>
          <text
            id="text2477"
            transform="translate(94.979 1013.293)"
            className="st18 st11 st12">
            {"hacia ZM-01"}
          </text>
        </g>

        {/* Campana */}
        <g
          className={`${getTemaAlarma(18, loading, datosAlarmas)} cursorPointer`}
          onClick={() => {
            onClickAlarma(18, "Presión post filtros hacia ZM-01");
          }}>
          <path d="M73.5 1030.7c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.5.5-.8 1.1-1.4 1.9-1.7.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.4-2 1.1-2.5 2.2z" />
          <path d="M71.8 1029.7c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-3.9s1.8-2.2 3-2.5c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.4-2.9 1.5-3.7 3z" />
          <path d="M83.1 1028.4c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.5 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1-1.5-1.7-2.5-2.2z" />
          <path d="M83.7 1026.5c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.5.7 1.3.9 2.7.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.3-2.3-2.4-3.7-3z" />
          <path d="M84.5 1035.7v-1.5c0-2.5-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.3-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.7-.9-1.3-.9-2.1z" />
          <path d="M79.5 1043.1c.9 0 1.7-.8 1.7-1.7h-3.3c.1.9.8 1.7 1.6 1.7z" />
        </g>

        {/* Fin Presión post filtros hacia ZM-01 */}
      </g>
      <path
        id="line2481"
        className="st17"
        d="M771.3 906.3h30.6"
      />
      <circle
        id="circle2483"
        className="st25"
        cx={189.9}
        cy={1325.8}
        r={9.2}
      />
      <g id="g2535">
        <g id="g2495">
          <image
            style={{
              overflow: "visible",
              opacity: 0.3,
              enableBackground: "new"
            }}
            width={159}
            height={141}
            id="image2485"
            xlinkHref="data:image/png;base64,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 vQAAAABJRU5ErkJggg=="
            transform="translate(111.267 1178.552) scale(.9929)"
          />
          <g id="g2493">
            <g id="g2491">
              <g id="g2489">
                <path
                  id="path2487"
                  className="st4"
                  d="M170.5 1187.9h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3H253c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
                />
              </g>
            </g>
          </g>
        </g>

        {/* Presión salida conc. recup. de energía */}
        {/* Tarjeta */}
        <g
          className="cursorPointer"
          onClick={() =>
            loadGrafico(19, "P. salida conc. recup. de energía", false)
          }>
          <path
            className={getTarjetaClass(19, selected)}
            d="M121.2 1195.3h138.1v99.8H121.2z"
          />
          <text
            transform="translate(128.025 1234.536)"
            className="st18 st11 st12">
            {"Presi\xF3n salida conc. "}
          </text>
          <text
            transform="translate(137.743 1252.036)"
            className="st18 st11 st12">
            {"recup. de energ\xEDa"}
          </text>

          <g id="g2527">
            <text
              id="text2525"
              transform="translate(174.1 1280.093)"
              className="st13 st11 st14">
              {getScaledValue(datosScada.d19, 1)}
            </text>
          </g>
          <text
            id="text2529"
            transform="translate(224.453 1280.697)"
            className="st13 st11 st12">
            {"bar"}
          </text>
          <g id="g2533">
            <text
              id="text2531"
              transform="translate(174.988 1212.928)"
              className="st13 st11 st23">
              {"PT435"}
            </text>
          </g>
        </g>

        {/* Campana */}
        <g
          className={`${getTemaAlarma(19, loading, datosAlarmas)} cursorPointer`}
          onClick={() => {
            onClickAlarma(19, "P. salida conc. recup. de energía");
          }}>
          <path d="M136.3 1269.1c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
          <path d="M134.6 1268.1c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1z" />
          <path d="M145.9 1266.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
          <path d="M146.5 1265c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1z" />
          <path d="M147.4 1274.1v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1z" />
          <path d="M142.4 1281.6c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
        </g>

        {/* Fin Presión salida conc. recup. de energía */}
      </g>
      <g id="g2581">
        <g id="g2547">
          <image
            style={{
              overflow: "visible",
              opacity: 0.3,
              enableBackground: "new"
            }}
            width={159}
            height={141}
            id="image2537"
            xlinkHref="data:image/png;base64,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 AgwAL6dYQm1q9m0AAAAASUVORK5CYII="
            transform="matrix(.9929 0 0 -.9929 378.083 1470.368)"
          />
          <g id="g2545">
            <g id="g2543">
              <g id="g2541">
                <path
                  id="path2539"
                  className="st4"
                  d="M474.7 1461.1h45.1c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-53.7c-1.3 0-2.5-.4-3.5-1.3-6.4-6.7-6.4-6.7-12.9-.2l-.4.3c-1 .8-2.2 1.2-3.4 1.2h-51.7c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h80.5z"
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
            className={getTarjetaClass(6, selected)}
            d="M388 1353.9h138.1v99.8H388z"
          />
          <text
            id="text2551"
            transform="translate(423.38 1394.89)"
            className="st18 st11 st12">
            {"Presi\xF3n de"}
          </text>

          <g id="g2573">
            <text
              id="text2571"
              transform="translate(441.002 1439.908)"
              className="st13 st11 st14">
              {getScaledValue(datosScada.d6, 1)}
            </text>
          </g>
          <text
            id="text2575"
            transform="translate(440.456 1373.243)"
            className="st13 st11 st23">
            {"PT433"}
          </text>
          <text
            id="text2577"
            transform="translate(492.834 1440.846)"
            className="st13 st11 st12">
            {"bar"}
          </text>
          <text
            id="text2579"
            transform="translate(431.942 1411.89)"
            className="st18 st11 st12">
            {"Rechazo"}
          </text>
        </g>

        {/* Campana */}
        <g
          className={`${getTemaAlarma(6, loading, datosAlarmas)} cursorPointer`}
          onClick={() => {
            onClickAlarma(6, "Presión de Rechazo");
          }}>
          <path d="M403.1 1429.9c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
          <path d="M401.4 1428.9c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1z" />
          <path d="M412.7 1427.6c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
          <path d="M413.3 1425.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1z" />
          <path d="M414.2 1434.9v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1z" />
          <path d="M409.2 1442.4c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
        </g>

        {/* Fin Presión de Rechazo */}
      </g>
      <circle
        id="circle2583"
        className="st25"
        cx={455.9}
        cy={1325.1}
        r={9.2}
      />
      <path
        id="line2585"
        d="M954.2 907.3H969c3.7 0 6.6 3 6.6 6.6v91c0 2.7-2.2 5-5 5h-16.4"
        style={{
          fill: "none",
          stroke: "#00aeed",
          strokeWidth: 3.3831,
          strokeMiterlimit: 10
        }}
      />
      <g
        id="g2601"
        transform="translate(10 -14)">
        <path
          id="path2587"
          className="st0"
          d="M974.5 1203h-14.8c-.9 0-1.6-.7-1.6-1.6v-14.8c0-.9.7-1.6 1.6-1.6h14.8c.9 0 1.6.7 1.6 1.6v14.8c0 .9-.7 1.6-1.6 1.6z"
        />
        <g id="g2593">
          <path
            id="path2589"
            className="st0"
            d="m959.3 1206.9 7.9 4.6c.5.3.5 1 0 1.3l-7.9 4.6c-.5.3-1.2-.1-1.2-.7v-9.2c0-.5.7-.9 1.2-.6z"
          />
          <path
            id="path2591"
            className="st0"
            d="m974.9 1217.5-7.9-4.6c-.5-.3-.5-1 0-1.3l7.9-4.6c.5-.3 1.2.1 1.2.7v9.2c0 .5-.7.9-1.2.6z"
          />
        </g>
        <path
          id="line2595"
          className="st1"
          d="M967.1 1202v10"
        />
        <path
          id="line2597"
          className="st2"
          d="M958.1 1194h18"
        />
        <path
          id="line2599"
          className="st2"
          d="M967.1 1195v8"
        />
      </g>
      <path
        id="path2619"
        className="st17"
        d="M1109 1009.3h245.5c4.7 0 8.5 3.8 8.5 8.5v38.3"
      />
      <path
        id="rect2621"
        className="st18"
        d="M1260 1070.7h124.8v97.7H1260z"
      />
      <path
        id="path2623"
        className="st19"
        d="M1384.6 1054.4v111.2c0 1.7-.6 3.1-1.2 3.1h-122c-.7 0-1.2-1.4-1.2-3.1v-111.2"
      />
      <g
        id="g2627"
        transform="translate(0 44)">
        <text
          id="text2625"
          transform="translate(1293.73 1144.523)"
          className="st22">
          <tspan
            x={0}
            y={0}
            className="st13 st11 st23">
            {"ESTANQUE"}
          </tspan>
          <tspan
            x={-10.4}
            y={13.2}
            className="st13 st11 st23">
            {"DE PRODUCTO"}
          </tspan>
        </text>
      </g>
      <g
        id="g2633"
        transform="translate(34 44)">
        <path
          id="path2629"
          className="st21"
          d="M1322.4 1015.2c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
        />
        <path
          id="path2631"
          className="st4"
          d="M1334.1 1015.2c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
        />
      </g>
      <circle
        id="circle2637"
        transform="rotate(-80.781 1018.918 1009.385)"
        className="st25"
        cx={1018.9}
        cy={1009.4}
        r={9.2}
      />
      <g
        id="g2687"
        transform="translate(-54 -14)">
        <path
          id="path2685"
          className="st17"
          d="M1109 1025.4v179.5c0 4.7-3.8 8.5-8.5 8.5H1043"
        />
      </g>
      <g
        id="g2691"
        transform="translate(10 -14)">
        <path
          id="path2689"
          d="M953 1213.4h-20.5c-4.7 0-8.5 3.8-8.5 8.5v14.5"
          style={{
            fill: "none",
            stroke: "#00aeed",
            strokeWidth: 4,
            strokeLinecap: "square",
            strokeLinejoin: "round",
            strokeMiterlimit: 10
          }}
        />
      </g>
      <g
        id="g2697"
        transform="translate(10 -14)">
        <path
          id="path2693"
          className="st21"
          d="M917.4 1238.9c0-1 .8-1.9 1.9-1.9h9c1 0 1.9.8 1.9 1.9 0 .5-.2 1-.5 1.3l-4.5 4.5c-.7.7-1.8.7-2.6.1l-.1-.1-4.5-4.5c-.5-.4-.6-.8-.6-1.3z"
        />
        <path
          id="path2695"
          className="st4"
          d="M929.1 1238.9c0 .2-.1.4-.3.6l-4.5 4.5c-.3.3-.9.3-1.3 0l-4.5-4.5c-.2-.2-.3-.4-.3-.6 0-.4.3-.9.9-.9h9c.6 0 1 .4 1 .9m2 0c0-1.6-1.3-2.9-2.9-2.9h-9c-1.6 0-2.9 1.3-2.9 2.9 0 .8.3 1.5.8 2l4.5 4.5.1.1.1.1c1.2.9 2.9.9 3.9-.2l4.5-4.5c.6-.5.9-1.2.9-2z"
        />
      </g>
      <g
        id="g2709"
        transform="translate(10 -14)"
        className="st22">
        <g id="g2707">
          <defs>
            <path
              id="SVGID_1_"
              d="M884.3 1249h78.3v40.6h-78.3z"
            />
          </defs>
          <clipPath id="SVGID_00000156549746277643643650000000685516997805649853_">
            <use
              xlinkHref="#SVGID_1_"
              style={{
                overflow: "visible"
              }}
            />
          </clipPath>
          <path
            id="path2705"
            style={{
              clipPath:
                "url(#SVGID_00000156549746277643643650000000685516997805649853_)",
              fill: "#f2f2f2"
            }}
            d="M958.3 1289.6h-69.8c-2.4 0-4.3-1.9-4.3-4.3v-32.1c0-2.4 1.9-4.3 4.3-4.3h69.8c2.4 0 4.3 1.9 4.3 4.3v32.1c0 2.4-1.9 4.3-4.3 4.3"
          />
        </g>
      </g>
      <g
        id="g2727"
        transform="translate(10 -14)"
        className="st22">
        <g id="g2725">
          <defs>
            <path
              id="SVGID_00000182490387734893345860000012225026250755195799_"
              d="M905.6 1257.3h35.3v26.2h-35.3z"
            />
          </defs>
          <clipPath id="SVGID_00000116931811952448727480000018284892982176641190_">
            <use
              xlinkHref="#SVGID_00000182490387734893345860000012225026250755195799_"
              style={{
                overflow: "visible"
              }}
            />
          </clipPath>
          <g
            id="g2719"
            style={{
              clipPath:
                "url(#SVGID_00000116931811952448727480000018284892982176641190_)"
            }}>
            <text
              id="text2717"
              transform="translate(906.76 1266.783)"
              className="st13 st11 st23">
              {"HACIA"}
            </text>
          </g>
          <defs>
            <path
              id="SVGID_00000167388265447442382080000005359400636414708361_"
              d="M905.6 1257.3h35.3v26.2h-35.3z"
            />
          </defs>
          <clipPath id="SVGID_00000005229877659218412180000007510086086564740781_">
            <use
              xlinkHref="#SVGID_00000167388265447442382080000005359400636414708361_"
              style={{
                overflow: "visible"
              }}
            />
          </clipPath>
          <g
            id="g2723"
            style={{
              clipPath:
                "url(#SVGID_00000005229877659218412180000007510086086564740781_)"
            }}>
            <text
              id="text2721"
              transform="translate(905.638 1279.983)"
              className="st13 st11 st23">
              {"TK CIP"}
            </text>
          </g>
        </g>
      </g>
      <circle
        id="circle2729"
        className="st25"
        cx={1319.9}
        cy={1008.4}
        r={9.2}
      />
      <g
        id="g2779"
        transform="translate(42 44)">
        <g id="g2741">
          <image
            style={{
              overflow: "visible",
              opacity: 0.3,
              enableBackground: "new"
            }}
            width={159}
            height={141}
            id="image2731"
            xlinkHref="data:image/png;base64,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"
            transform="translate(1199.934 807.552) scale(.9929)"
          />
          <g id="g2739">
            <g id="g2737">
              <g id="g2735">
                <path
                  id="path2733"
                  className="st4"
                  d="M1259.2 816.9h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V823.2c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
                />
              </g>
            </g>
          </g>
        </g>

        {/* pH Producto */}
        {/* Tarjeta */}
        <g
          className="cursorPointer"
          onClick={() => loadGrafico(12, "pH Producto", false)}>
          <path
            className={getTarjetaClass(12, selected)}
            d="M1209.9 824.3H1348v99.8h-138.1z"
          />
          <g
            id="g2749"
            transform="translate(0 2)">
            <g id="g2747">
              <text
                transform="translate(1270.014 863.774)"
                className="st18 st11 st12">
                {"pH"}
              </text>
              <text
                transform="translate(1251.722 881.274)"
                className="st18 st11 st12">
                {"Producto"}
              </text>
            </g>
          </g>

          <g id="g2771">
            <text
              id="text2769"
              transform="translate(1262.768 909.093)"
              className="st13 st11 st14">
              {getScaledValue(datosScada.d12, 1)}
            </text>
          </g>
          <text
            id="text2773"
            transform="translate(1314.12 908.697)"
            className="st13 st11 st12">
            {"pH"}
          </text>
          <g id="g2777">
            <text
              id="text2775"
              transform="translate(1262.072 845.928)"
              className="st13 st11 st23">
              {"AE430"}
            </text>
          </g>
        </g>

        {/* Campana */}
        <g
          className={`${getTemaAlarma(12, loading, datosAlarmas)} cursorPointer`}
          onClick={() => {
            onClickAlarma(12, "pH Producto");
          }}>
          <path d="M1225 898.1c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
          <path d="M1223.3 897.1c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9.7-1.3 1.8-2.2 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1z" />
          <path d="M1234.6 895.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
          <path d="M1235.2 894c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1z" />
          <path d="M1236.1 903.1v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1z" />
          <path d="M1231.1 910.6c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
        </g>

        {/* Fin pH Producto */}
      </g>
      <circle
        id="circle2729-0"
        className="st25"
        cx={1165.5}
        cy={1007.9}
        r={9.2}
      />
      <g
        id="g2779-1"
        transform="translate(-112.449 43.491)">
        <g id="g2741-0">
          <image
            style={{
              overflow: "visible",
              opacity: 0.3,
              enableBackground: "new"
            }}
            width={159}
            height={141}
            id="image2731-3"
            xlinkHref="data:image/png;base64,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 rkJggg=="
            transform="translate(1199.934 807.552) scale(.9929)"
          />
          <g id="g2739-0">
            <g id="g2737-0">
              <g id="g2735-3">
                <path
                  id="path2733-8"
                  className="st4"
                  d="M1259.2 816.9h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V823.2c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
                />
              </g>
            </g>
          </g>
        </g>

        {/* E.C. Producto */}
        {/* Tarjeta */}
        <g
          className="cursorPointer"
          onClick={() => loadGrafico(10, "E.C. Producto", false)}>
          <path
            className={getTarjetaClass(10, selected)}
            d="M1209.9 824.3H1348v99.8h-138.1z"
          />
          <g
            id="g2749-6"
            transform="translate(0 2)">
            <g id="g2747-0">
              <text
                transform="translate(1265.349 863.774)"
                className="st18 st11 st12">
                {"E.C."}
              </text>
              <text
                transform="translate(1251.722 881.274)"
                className="st18 st11 st12">
                {"Producto"}
              </text>
            </g>
          </g>

          <g
            id="g2771-9"
            transform="translate(-4)">
            <text
              id="text2769-3"
              transform="translate(1256.768 909.093)"
              className="st13 st11 st14">
              {getScaledValue(datosScada.d10, 1)}
            </text>
          </g>
          <text
            id="text2773-0"
            transform="translate(1302.12 908.697)"
            className="st13 st11 st28">
            {"\u03BCS/cm"}
          </text>
          <g id="g2777-0">
            <text
              id="text2775-3"
              transform="translate(1262.072 845.928)"
              className="st13 st11 st23">
              {"CE429"}
            </text>
          </g>
        </g>

        {/* Campana */}
        <g
          className={`${getTemaAlarma(10, loading, datosAlarmas)} cursorPointer`}
          onClick={() => {
            onClickAlarma(10, "E.C. Producto");
          }}>
          <path d="M1225 898.1c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
          <path d="M1223.3 897.1c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9.7-1.3 1.8-2.2 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1z" />
          <path d="M1234.6 895.8c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
          <path d="M1235.2 894c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1z" />
          <path d="M1236.1 903.1v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1z" />
          <path d="M1231.1 910.6c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
        </g>

        {/* Fin E.C. Producto */}
      </g>
      <g
        id="g2683"
        transform="translate(6 -14)">
        <g id="g2649">
          <image
            style={{
              overflow: "visible",
              opacity: 0.3,
              enableBackground: "new"
            }}
            width={159}
            height={141}
            id="image2639"
            xlinkHref="data:image/png;base64,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 dAAAAABJRU5ErkJggg=="
            transform="matrix(.9929 0 0 -.9929 936.083 1176.034)"
          />
          <g id="g2647">
            <g id="g2645">
              <g id="g2643">
                <path
                  id="path2641"
                  className="st4"
                  d="M1032.7 1166.7h45.1c3.5 0 6.3-2.8 6.3-6.3v-102.3c0-3.5-2.8-6.3-6.3-6.3h-53.7c-1.3 0-2.5-.4-3.5-1.3-6.4-6.7-6.4-6.7-12.9-.2l-.4.3c-1 .8-2.2 1.2-3.4 1.2h-51.7c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h80.5z"
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
            className={getTarjetaClass(8, selected)}
            d="M946 1059.5h138.1v99.8H946z"
          />
          <text
            id="text2653"
            transform="translate(981.965 1100.556)"
            className="st18 st11 st12">
            {"Caudal de"}
          </text>

          <g id="g2675">
            <text
              id="text2673"
              transform="translate(998.002 1145.575)"
              className="st13 st11 st14">
              {getScaledValue(datosScada.d8, 1)}
            </text>
          </g>
          <text
            id="text2677"
            transform="translate(996.455 1078.91)"
            className="st13 st11 st23">
            {"FIT428"}
          </text>
          <text
            id="text2679"
            transform="translate(1042.834 1145.513)"
            className="st13 st11 st12">
            {"m3/h"}
          </text>
          <text
            id="text2681"
            transform="translate(982.358 1117.556)"
            className="st18 st11 st12">
            {"Permeado"}
          </text>
        </g>

        {/* Campana */}
        <g
          className={`${getTemaAlarma(8, loading, datosAlarmas)} cursorPointer`}
          onClick={() => {
            onClickAlarma(8, "Caudal de Permeado");
          }}>
          <path d="M961.1 1135.5c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
          <path d="M959.4 1134.5c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1z" />
          <path d="M970.7 1133.2c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
          <path d="M971.3 1131.4c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1z" />
          <path d="M972.2 1140.5v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1z" />
          <path d="M967.2 1148c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
        </g>

        {/* Fin Caudal de Permeado */}
      </g>
      {/* <g id="g5071" transform="translate(-281.047 -651.426)">
        <ellipse
          id="ellipse5057"
          className="st0"
          cx={1127.9}
          cy={1249.9}
          rx={14.9}
          ry={15.4}
        />
        <g id="g5069">
          <g id="g5065">
            <image
              style={{
                overflow: "visible",
                opacity: 0.15,
                enableBackground: "new",
              }}
              width={35}
              height={34}
              id="image5059"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAjCAYAAAD8BaggAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3JJREFUeNq0WItu2kAQtM/mDQkN Kn23Uv//o/pM05SmIUAgELicpdlo2O6B7SiRRnawfTf7uNm9S5N6f2mJd/xzDazfTY9874370uTy ikQKOLqPERLsIgRrE+KJM0IOYo7ek8l2wFZhV4ZUWoKMA4Em0Ma1AXKOvhEy9wHrgDtgjd+2htdK EUrJAw2Q6AX0Awa4b+OZIw+JZwoStwFzYBGwVMR82ZCxZwpPdEHiLGCE6xCkWvCSECom2mDyWcC/ gL+4TkFuhXlMUnmETAbru5j8ZcDrgDcBr0BqoAglRKjwznXAJOB3wAWME28uY6RiHsoRkhOQeR/w MeADSJ0hfE3loR156CbgT8ApDGsQcY93/luJueEdSeA+Ji4IfAr4DEJjTNKhxOaklhxawCAJrVN5 tiV5eFx92kOyojqYdKy889bwjlM6I6usSysywzNefZLgQnDPQ5w7ksgvkC8FiXfIoRGsbpEWJSoU Hp7LVTgllHMk/ALE9jRKh0wIyaoag8gYBAewOleKrZWYn8nqWyGvroApkn/Nwpor3clgfQ+rawQM EaaWsvyQrkludeCdIcmGJLqE8z5RliRGyAb48AT/t5RnkpIqL8Lax1inGLtLi+LR085Q5xyTd4B2 RTIxtW+BRI8SvqG8nTqjiDoSRl2zqrQrlqFNEGtR4u/loTvg6libkdYgxIZmkfFTixD3MTvV29Tt BL0hiNb4ngl548MNluSmTNtwhJDVkmzw257BMZW9g4gtoR93pKq+IhGpb9KSLHBdkbGP5cOpWrKF FbdQ0ynE7LYiKa+K7QoKfYMxZxhzo2tarqzhwniNXmZCxTSnpD6k1Lo3mtN4WqX3WpDMaOS1drSp SFoq7SPJy21IYdTPgG/AOYgt8N5OE4oJWg406J5rlDea+nsKu5A5B5GvAT/QJ90glHsLJiux79Kh 8WryDa3IlQrRJXnmC64XaGkXlENmxyiuFwvnyitSsWfUwnZUG2J1jL/gle+4l1CtjSbNbGGlkZJ2 wWEiIXkFQieqQB7rqS+R1DMrVDFCngZOqBlnghO0EgNVIJMKu47oVig9Un8yVf17hC7tOpzRU9fa l6UVimKDpKBJMuBUwj/LzlU/d4TMqNqJsZ229vb+KXv72KGDhWOnH6WPZer0NsfOiJ50PlSnAyz7 ba0TtAcBBgAty5JxVRyvrgAAAABJRU5ErkJggg=="
              transform="translate(1110.51 1232.9)"
            />
            <g id="g5063">
              <circle
                id="circle5061"
                className="st4"
                cx={1127.9}
                cy={1249.9}
                r={10.9}
              />
            </g>
          </g>
          <circle
            id="circle5067"
            className="st15"
            cx={1127.9}
            cy={1249.8}
            r={8}
          />
        </g>
      </g> */}
      <g
        id="g1681-3"
        transform="translate(464.327 16.027)">
        <path
          id="path1677-3"
          className="st26"
          d="M487.2 517.8c0 .9-.7 1.6-1.6 1.6h-6.3c-.9 0-1.6-.7-1.6-1.6 0-.4.2-.8.5-1.1l3.1-3.1c.6-.6 1.5-.6 2.2-.1l3.2 3.2c.3.3.5.7.5 1.1z"
        />
        <path
          id="path1679-2"
          className="st4"
          d="M478.6 517.8c0-.2.1-.3.2-.4l3.1-3.1c.2-.2.6-.2.9 0l3.1 3.1c.1.1.2.3.2.4 0 .3-.2.6-.6.6h-6.3c-.3 0-.6-.3-.6-.6m-2 0c0 1.4 1.2 2.6 2.6 2.6h6.3c1.4 0 2.6-1.2 2.6-2.6 0-.7-.3-1.3-.8-1.8l-3.1-3.1-.1-.1-.1-.1c-1.1-.9-2.6-.8-3.5.2l-3.1 3.1c-.5.5-.8 1.1-.8 1.8z"
        />
      </g>
      <g
        id="g1681-3-1"
        transform="rotate(180 810.765 526.009)">
        <path
          id="path1677-3-3"
          className="st26"
          d="M460.2 537.8c0 .9-.7 1.6-1.6 1.6h-6.3c-.9 0-1.6-.7-1.6-1.6 0-.4.2-.8.5-1.1l3.1-3.1c.6-.6 1.5-.6 2.2-.1l3.2 3.2c.3.3.5.7.5 1.1z"
        />
        <path
          id="path1679-2-8"
          className="st4"
          d="M451.6 537.8c0-.2.1-.3.2-.4l3.1-3.1c.2-.2.6-.2.9 0l3.1 3.1c.1.1.2.3.2.4 0 .3-.2.6-.6.6h-6.3c-.3 0-.6-.3-.6-.6m-2 0c0 1.4 1.2 2.6 2.6 2.6h6.3c1.4 0 2.6-1.2 2.6-2.6 0-.7-.3-1.3-.8-1.8l-3.1-3.1-.1-.1-.1-.1c-1.1-.9-2.6-.8-3.5.2l-3.1 3.1c-.5.5-.8 1.1-.8 1.8z"
        />
      </g>
      <path
        id="path6752"
        d="M399.3 535.8v50.6"
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
            style={{
              overflow: "visible",
              opacity: 0.3,
              enableBackground: "new"
            }}
            width={159}
            height={141}
            id="image1943_00000012473339319223535380000005702574294878813619_"
            xlinkHref="data:image/png;base64,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"
            transform="translate(363.646 371.983) scale(.9929)"
          />
          <g id="g1951_00000063595217566531072860000011831952184233852310_">
            <g id="g1949_00000026851716431637895780000012526391166060820356_">
              <g id="g1947_00000067951153229299384770000014758366317218945951_">
                <path
                  id="path1945_00000044881557954918386660000001143381387115462800_"
                  className="st4"
                  d="M422.8 381.3h-43.1c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V387.6c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
                />
              </g>
            </g>
          </g>
        </g>

        {/* Presión Entrada Pre-tratamiento */}
        {/* Tarjeta */}
        <g
          className="cursorPointer"
          onClick={() =>
            loadGrafico(2, "Presión Entrada Pre-tratamiento", false)
          }>
          <path
            className={getTarjetaClass(2, selected)}
            d="M373.5 388.7h138.1v99.8H373.5z"
          />
          <text
            transform="translate(392.098 430.3)"
            className="st22"
            id="g1959_00000132777312365605928110000004345131057402470548_">
            <tspan
              x={0}
              y={0}
              className="st18 st11 st12">
              {"Presi\xF3n entrada"}
            </tspan>
            <tspan
              x={1.2}
              y={16.8}
              className="st18 st11 st12">
              {"Pre-tratamiento"}
            </tspan>
          </text>

          <g
            id="g1981_00000048460854824542526050000015357200376536235914_"
            transform="translate(-4)">
            <text
              id="text1979_00000093163210651272055780000017196672231032798608_"
              transform="translate(432.936 473.523)"
              className="st13 st11 st14">
              {getScaledValue(datosScada.d2, 1)}
            </text>
          </g>
          <text
            id="text1983_00000048496891993090940740000006780503406500711578_"
            transform="translate(478.832 473.128)"
            className="st13 st11 st12">
            {"bar"}
          </text>
          <g id="g1987_00000036956569712592069100000008450621683651107004_">
            <text
              id="text1985_00000160151707636328934510000012651823934774552229_"
              transform="translate(426.31 411.358)"
              className="st13 st11 st23">
              {"PT401"}
            </text>
          </g>
        </g>

        {/* Campana */}
        <g
          className={`${getTemaAlarma(2, loading, datosAlarmas)} cursorPointer`}
          onClick={() => {
            onClickAlarma(2, "Presión Entrada Pre-tratamiento");
          }}>
          <path d="M388.6 462.5c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
          <path d="M386.9 461.5c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9s1.8-2.2 3-2.6c.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1z" />
          <path d="M398.2 460.2c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
          <path d="M398.8 458.4c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1z" />
          <path d="M399.7 467.5V466c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1z" />
          <path d="M394.7 475c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
        </g>

        {/* Fin Presión Entrada Pre-tratamiento */}
      </g>
      <text
        id="text1657_00000013150718639242127430000007129215448005080979_"
        transform="translate(1247.115 564.078)"
        className="st22">
        <tspan
          x={0}
          y={0}
          className="st13 st11 st23">
          {"FILTRO"}
        </tspan>
        <tspan
          x={-24.4}
          y={13.2}
          className="st13 st11 st23">
          {"DE CARTUCHOS"}
        </tspan>
      </text>
      <g id="g1933_00000136387165318336823500000001872316249767063948_">
        <g id="g1895_00000018195044261647510890000008098614572372558729_">
          <image
            style={{
              overflow: "visible",
              opacity: 0.3,
              enableBackground: "new"
            }}
            width={159}
            height={141}
            id="image1885_00000152974769367013840750000018149626290982583682_"
            xlinkHref="data:image/png;base64,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 XFWIVRcAAAAASUVORK5CYII="
            transform="translate(186.875 779.46) scale(.9929)"
          />
          <g id="g1893_00000037668645509889145960000010079926227884288664_">
            <g id="g1891_00000160192599697316411010000007864852973048446633_">
              <g id="g1889_00000074423439180208215860000011488278676575642772_">
                <path
                  id="path1887_00000017494433664653263810000010631849634486853045_"
                  className="st4"
                  d="M246.1 788.8H203c-3.5 0-6.3 2.8-6.3 6.3v102.3c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V795.1c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
                />
              </g>
            </g>
          </g>
        </g>

        {/* Presión antes de P-005 */}
        {/* Tarjeta */}
        <g
          className="cursorPointer"
          onClick={() => loadGrafico(11, "Presión antes de P-005", false)}>
          <path
            className={getTarjetaClass(11, selected)}
            d="M196.8 796.2h138.1V896H196.8z"
          />
          <g
            id="g1903_00000097491012583839968560000009566109001389786042_"
            transform="translate(1.905)">
            <text
              transform="translate(220.534 839.683)"
              className="st22"
              id="g1901_00000148663199652235504730000012409506070977180294_">
              <tspan
                x={0}
                y={0}
                className="st18 st11 st12">
                {"Presi\xF3n antes"}
              </tspan>
              <tspan
                x={14.4}
                y={16.8}
                className="st18 st11 st12">
                {"de P-005"}
              </tspan>
            </text>
          </g>

          <g id="g1925_00000168076699009080944850000014362890201187628450_">
            <text
              id="text1923_00000155827711586203748260000016262030309999382460_"
              transform="translate(249.709 881.001)"
              className="st13 st11 st14">
              {getScaledValue(datosScada.d11, 1)}
            </text>
          </g>
          <text
            id="text1927_00000116935076154250363600000000482324027527380643_"
            transform="translate(299.06 881.606)"
            className="st13 st11 st12">
            {"bar"}
          </text>
          <g id="g1931_00000008126355344850084030000008144729588934913435_">
            <text
              id="text1929_00000111152640574005183260000013887551564105939360_"
              transform="translate(250.048 819.836)"
              className="st13 st11 st23">
              {"PT413"}
            </text>
          </g>
        </g>

        {/* Campana */}
        <g
          className={`${getTemaAlarma(11, loading, datosAlarmas)} cursorPointer`}
          onClick={() => {
            onClickAlarma(11, "Presión antes de P-005");
          }}>
          <path d="M211.9 870c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
          <path d="M210.2 869c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9.7-1.3 1.8-2.2 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1z" />
          <path d="M221.5 867.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
          <path d="M222.1 865.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1z" />
          <path d="M223 875v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1z" />
          <path d="M218 882.5c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
        </g>

        {/* Fin Presión antes de P-005*/}
      </g>
      <path
        id="line1883_00000164508267906304489650000006931718293363447452_"
        className="st17"
        d="M974.6 983.8h-20.4"
      />
      <g id="g1933_00000094594528990577873370000004503638956699542945_">
        <g id="g1895_00000100374119617017116310000002226703225007846068_">
          <image
            style={{
              overflow: "visible",
              opacity: 0.3,
              enableBackground: "new"
            }}
            width={159}
            height={141}
            id="image1885_00000170985213629123029590000002522767092729023371_"
            xlinkHref="data:image/png;base64,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"
            transform="translate(797.703 759.052) scale(.9929)"
          />
          <g id="g1893_00000034081578110397718000000000574188013609692310_">
            <g id="g1891_00000007427910937113701930000016794767738451847347_">
              <g id="g1889_00000143588498675701428930000017635516887716244414_">
                <path
                  id="path1887_00000023252487704790628630000017163154414519470242_"
                  className="st4"
                  d="M856.9 768.4h-43.1c-3.5 0-6.3 2.8-6.3 6.3V877c0 3.5 2.8 6.3 6.3 6.3h51.7c1.2 0 2.4.4 3.4 1.2l.4.3c6.5 6.5 6.5 6.5 12.9-.2 1-.9 2.2-1.3 3.5-1.3h53.7c3.5 0 6.3-2.8 6.3-6.3V774.7c0-3.5-2.8-6.3-6.3-6.3h-82.5z"
                />
              </g>
            </g>
          </g>
        </g>

        {/* Recuperación RO */}
        {/* Tarjeta */}
        <g
          className="cursorPointer"
          onClick={() => loadGrafico(3, "Recuperación RO", false)}>
          <path
            className={getTarjetaClass(3, selected)}
            d="M807.6 775.8h138.1v99.8H807.6z"
          />
          <g
            id="g1903_00000049220250777583778500000014497997455870869173_"
            transform="translate(1.905)">
            <text
              transform="translate(829.972 809.274)"
              className="st22"
              id="g1901_00000027575035993739749680000002725363438089067163_">
              <tspan
                x={0}
                y={0}
                className="st18 st11 st12">
                {"Recuperaci\xF3n"}
              </tspan>
              <tspan
                x={32.7}
                y={16.8}
                className="st18 st11 st12">
                {"RO"}
              </tspan>
            </text>
          </g>

          <g id="g1925_00000021804240327105534740000014607813675058659734_">
            <text
              id="text1923_00000067217772053073705070000013290812443635351184_"
              transform="translate(860.536 857.593)"
              className="st13 st11 st14">
              {getScaledValue(datosScada.d3, 1)}
            </text>
          </g>
          <text
            id="text1927_00000076572359553148817060000006623739634913091259_"
            transform="translate(915.888 857.198)"
            className="st13 st11 st12">
            {"%"}
          </text>
        </g>

        {/* Campana */}
        <g
          className={`${getTemaAlarma(3, loading, datosAlarmas)} cursorPointer`}
          onClick={() => {
            onClickAlarma(3, "Recuperación RO");
          }}>
          <path d="M822.7 846.6c-.6 1.1-.8 2.3-.6 3.3 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1.1.5-1.9 1.2-2.5 2.3z" />
          <path d="M821 845.6c-.9 1.5-1.1 3.1-.8 4.7 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.6.7-3.9.7-1.3 1.8-2.2 3-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.5.6-2.9 1.6-3.7 3.1z" />
          <path d="M832.3 844.3c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.3-.7-1.1-1.5-1.8-2.5-2.3z" />
          <path d="M832.9 842.5c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.3 1.4 3 2.6.7 1.3.9 2.6.7 3.9 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.2-.8-4.7-1-1.5-2.3-2.5-3.7-3.1z" />
          <path d="M833.8 851.6v-1.5c0-2.4-1.6-4.3-3.8-4.8v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.3.5-3.8 2.4-3.8 4.8v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h8.9c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1z" />
          <path d="M828.8 859.1c.9 0 1.7-.8 1.7-1.7h-3.3c0 .9.7 1.7 1.6 1.7z" />
        </g>

        {/* Fin Recuperación RO */}
      </g>
    </svg>
  );
};

export default ScadaAlgortaNorte;

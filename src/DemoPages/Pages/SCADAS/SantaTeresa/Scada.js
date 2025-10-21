import React from "react";
const Scada2 = (props) => {
  const loadgraphs = (id, text) => {
    props.loadgraphs(id, text);
  };

  const notificacion = (id, text) => {
    props.notificacion(id, text);
  };

  return (
    <svg
      xmlSpace="preserve"
      viewBox="0 0 1438 1510.6"
      y="0px"
      x="0px"
      id="Capa_1">
      <style
        id="style833"
        type="text/css">
        {
          ".st0{fill:none;stroke:#666;stroke-width:3;stroke-miterlimit:10}.st1{fill:#f2f2f2}.st2{fill:#fff}.st3{fill:none}.st4{fill:#3a4f8f}.st5{font-family:&apos;Montserrat-Bold&apos;}.st6{font-size:13px}.st7{fill:#666}.st8{font-family:&apos;Montserrat-Regular&apos;}.st9{font-size:14px}.st10{fill:#3574e0}.st11{fill:none;stroke:#f15a24;stroke-width:3;stroke-miterlimit:10}.st12{fill:none;stroke-miterlimit:10}.st11{stroke:gray;stroke-width:6}.st12{stroke:#ccc}.st13{font-family:&apos;Montserrat-Medium&apos;}.st14{font-size:12px}.st15{fill:none;stroke:#35ace8;stroke-width:6;stroke-miterlimit:10}.st16{fill:#35ace8}.st17{fill:gray}.st18{fill:#b8bfd4}.st19{fill:#fff;stroke:#dcdede;stroke-width:.25;stroke-miterlimit:10}.st20{fill:#4d4d4d}.st21{stroke:gray;stroke-width:2}.st21,.st22,.st23{fill:none;stroke-miterlimit:10}.st22{stroke:gray;stroke-width:2;stroke-dasharray:2.0084,3.0126}.st23{stroke:#93a0c2;stroke-width:4}.st24{fill:#93a0c2}.st26{fill:#fbb03b}.st27{fill:#f15a24}.st28{fill:none;stroke:#3a4f8f;stroke-width:2;stroke-miterlimit:10}.st29{fill:#afe1ff}.st30{fill:#84a4fb}.st31{fill:#2a64d1}.st32{fill:#08007f}.st33{fill:#f2f2f2;stroke:#f15a24;stroke-width:3;stroke-miterlimit:10}.st34{fill:#a8a8a8}"
        }
      </style>
      <path
        className="st0"
        id="line529-9"
        fill="none"
        stroke="#666"
        strokeWidth={3}
        strokeMiterlimit={10}
        d="M786.51294 962.34778L786.51294 994.34778"
      />
      <g id="g1969">
        <path
          id="line835"
          className="st0"
          d="M913 274.5L913 306.5"
        />
        <g id="g843">
          <image
            id="image837"
            transform="translate(829 285)"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAABmCAYAAABIi0q5AAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABepJREFUeNrsmotu40YMRWdk+ZF3 tgu0//+BbYM4jh+xrMoop7hhZmQnm20b6RyAkO1Ewmb2iBxSDgEAAP4msgQ/dR1bluY8apbgUwT0 xxYhyYj/1rqltavkvYqY4uA+AzLip0pYSUxEyCACNnY8OCGBjPjDa6Xy1RJJxiAS7iUahCQjflYW jCLgtItZF3M7Tu1nwaR76WLXxdaOLyakSoiMP5gR44glTAIuurjo4tKOM7mx9ybfuotnO25EyMbt I4fIu/6u+p3SxRHKGKUUTy0DHsW76uK6ixs7LuznwWQ7ivfUxdKOtQlZiYyHAYrY9kwQ2o+I6DvD kOkOx7In9BIexbvt4r6LO3t9aVkxWOY7ZsJH+3xu56f95NbJOLQy3WamB71C1u/oDCvpDKsRZEVd gzoj4bcufrHjvWVIFXHVxYOIOLN4ssy4tRJ+GFiJ9qMrH9n9cd1TilImKHWHceCl2u8LFyabSvjd jiURr03EhYuVlW6/XxzCXlBHV7nJQZM7tz6RBaZyJ/vucDICEdPNOJNseCcSfjcpb01E3SOu7LPU zFzI3jJlxd0A9optQcK9rcNWJgc7mSr0ZkS/MdfOMC2o7neGXKL1hkwi3piIWpbv7HPfrFzZOQtZ x5RRlyLifiBNS8rqOrpKU4MUIbNnbL2IfnOui39rcSN7ntplxThwEbU030mjci1ronPEhVSSuTt/ JeOcIYjYumy4NQmfrGFLnvmnTcXSXLnFv7SF073QjczNJgPuon1p1mYljW2uXFesT1amEknkVNrX Uq6GMsZJcuno6kGqRCrVabAfTzUr2iUmEY8S/mpC6sa8Dq+fsQ61WamdjBdSdueyb1YRJxJp9JMy 4lay4VdvVnxZ3sroaiZblY2ENrvZ0lzaF92bhL/ZvigNcMcgoj5X1uZtJjej/9KD/0KErqc+7msG Mr5J//69ifhkfugEYelu2HiqWYnuLr4UGb+ZkKk8D11EX6InboxVu/mqX0cdhaX11DFGca72hUXc 2N8Z7PUyvH4Empu2tHVh0U890rq1z6Zh+MPtnFR+wJ/7Ymx0P0/iHlwWHMIgOzUqe9kTbmWGOs9k w2JG9Jbq3T8Lrx/0X4xIxJyQsSBgaS2TlG0Y3pcdWtkXv8iecO4EnBRu3LbUrMTM/sg/XZm6WeKY nj33SZc7pw1vv70dwvCeLR+kO/ZP4apT05X6HZmg6omxfS3sM34/DkzEkJEuniPhOSLGQlnKZU/4 OSJ/xYpxauvyhupEFixdBPngIzdZ0ZuKtYP/A4gIiAiAiICIAIgIiAiAiICIAIgIiAiAiICIAIgI iAiAiICIAIgIiAiAiICIAIgIiAiAiICIAIgIiAiAiICIAIgIiAiAiICIAIgIgIiAiACICIgIgIiA iACICIgIgIiAiACICIgIgIiAiACICIgIgIiAiACICIgIgIiAiACICIgI8B+K2FoEOZZ+DnDKi/aU N/UZF9YL+AshJIQeL04ltLNF1IseCnEk8n8xehFLfpyVrOoe8dLFG4u9xIucWyHj6CUM5sqLhbqS /DkUquobEX1qVfl2Fpsu1l1M7ff2iIiITsS1xUa8USnbnHO1fBBdim3swlu78KqLpy7mdk7KihUS IqM5szdXlubKyt5vzZfGlex/ZKwLZVklfLYLP4iEx88XiAgZETcm4Z/mzNIcUhnflOe60JSkcrwW CWci4ZW9R0QIGW9W5szvIuNayvSbJibXrKQLpmz4KHvCndl+YSJOTEJERMRUSX0C+8McSllxL9OW Ytd8cGY/m2xpT3h8f2kluhYRaVZoVrTB1S3do4ioGfHQV5qjNCo76Ygbu3hqVqZSlpEQWldNtcl9 tkiluREJi6W5dR2ztuUbK8dTy4QTJyAyjltCzYrJn50JmcY42jm/alZy8kTLdJUIV0tMpEFBRGgL Da9/CNIUxje98kQnpEakJMMZJbr02C/7ZKVPJM14lfsMAeGcLlrFDKHnufM5QsUzXgOUSnXu9YdE /MzzYHwyAnwd/hJgAJKkHOPsWEChAAAAAElFTkSuQmCC"
            height={102}
            width={162}
            overflow="visible"
            opacity={0.4}
          />
          <g
            id="g841"
            onClick={() => {
              loadgraphs(3, "Presión Mezcla");
            }}>
            <path
              id="path839"
              d="M839.7 301.3h65.6l7.6-6.8 8.3 6.8h59.2c.8 0 1.5.7 1.5 1.5V376c0 .8-.7 1.5-1.5 1.5H839.7c-.8 0-1.5-.7-1.5-1.5v-73.1c0-.9.7-1.6 1.5-1.6z"
              className={
                (props.pt239 <= Number(props.umbrales.ma3) &&
                Number(props.pt239) >= Number(props.umbrales.mi3)
                  ? " st1"
                  : " st33") + (props.selected === 3 ? " st34" : "")
              }
            />
            {/* Presion mezcla */}
          </g>
        </g>
        <path
          id="path845"
          d="M902.3 365.5h-48.7c-1.5 0-2.7-1.2-2.7-2.7v-11.7c0-1.5 1.2-2.7 2.7-2.7h48.7c1.5 0 2.7 1.2 2.7 2.7v11.7c0 1.5-1.2 2.7-2.7 2.7z"
          className="st2"
        />
        <g id="g855">
          <path
            id="rect847"
            className="st3"
            d="M844.1 311.6H976.1V341.5H844.1z"
          />
          <text
            id="text853"
            transform="translate(883.274 321.27)">
            <tspan
              id="tspan849"
              className="st4 st5 st6"
              y={0}
              x={0}>
              {"Presi\xF3n"}
            </tspan>
            <tspan
              id="tspan851"
              className="st4 st5 st6"
              y={15}
              x={2.3}>
              {"Mezcla"}
            </tspan>
          </text>
        </g>
        <path
          id="rect857"
          className="st3"
          d="M855 351.5H902V366.5H855z"
        />
        <text
          id="text859"
          className="st7 st8 st9"
          transform="translate(855 361.888)">
          {props.pt239}
        </text>
        <path
          id="rect861"
          className="st3"
          d="M911.6 351.5H943V366.5H911.6z"
        />
        <text
          id="text863"
          className="st7 st8 st9"
          transform="translate(911.633 361.888)">
          {"bar"}
        </text>
        <g
          id="g879"
          onClick={() => {
            notificacion(3, "Presión Mezcla");
          }}>
          <g id="g877">
            <path
              id="path865"
              d="M957.3 353c-.6 1.1-.8 2.3-.6 3.4 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z"
              className="st4"
            />
            <path
              id="path867"
              d="M955.6 352c-.9 1.5-1.1 3.2-.8 4.8 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-4 .7-1.3 1.8-2.2 3.1-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-3 1.6-3.8 3.1z"
              className="st4"
            />
            <path
              id="path869"
              d="M967.1 350.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7s.6 1.7.5 2.6c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.4-.5-1-1.4-1.7-2.5-2.2z"
              className="st4"
            />
            <path
              id="path871"
              d="M967.7 348.9c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.4 1.4 3.1 2.6s.9 2.7.7 4c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.3-.8-4.8s-2.3-2.6-3.8-3.1z"
              className="st4"
            />
            <path
              id="path873"
              d="M968.7 358.1v-1.5c0-2.5-1.6-4.4-3.9-4.9v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.4.5-3.9 2.4-3.9 4.9v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h9.1c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.7-.5-.9-1.3-.9-2.1z"
              className="st4"
              onClick={() => {
                loadgraphs(3, "Presión Mezcla");
              }}
            />

            <path
              id="path875"
              d="M963.6 365.7c.9 0 1.7-.8 1.7-1.7h-3.4c0 .9.7 1.7 1.7 1.7z"
              className="st4"
            />
          </g>
        </g>
        <path
          id="line881"
          className="st0"
          d="M495 372L495 404"
        />
        <path
          id="rect883"
          className="st10"
          d="M121 222H313V320H121z"
        />
        <g id="g889">
          <path
            id="rect885"
            className="st3"
            d="M150.1 333.5H276.5V355.4H150.1z"
          />
        </g>
        <path
          id="path891"
          d="M312.5 203v113c0 1.9-1.5 3.5-3.3 3.5H124.5c-1.8 0-3.3-1.6-3.3-3.5V203"
          className="st11"
        />
        <path
          id="line893"
          className="st12"
          d="M138 237.9L150.9 237.9"
        />
        <path
          id="line895"
          className="st12"
          d="M138 247.4L150.9 247.4"
        />
        <path
          id="line897"
          className="st12"
          d="M138 236.9L150.9 236.9"
        />
        <path
          id="line899"
          className="st12"
          d="M138 246.4L150.9 246.4"
        />
        <path
          id="line901"
          className="st12"
          d="M137.9 255.9L150.9 255.9"
        />
        <path
          id="line903"
          className="st12"
          d="M137.9 265.4L150.9 265.4"
        />
        <path
          id="line905"
          className="st12"
          d="M137.9 274.9L150.9 274.9"
        />
        <path
          id="line907"
          className="st12"
          d="M138 284.4L150.9 284.4"
        />
        <path
          id="line909"
          className="st12"
          d="M138 295.9L151 295.9"
        />
        <path
          id="line911"
          className="st12"
          d="M138 305.4L151 305.4"
        />
        <g id="g919">
          <image
            id="image913"
            transform="translate(411 383)"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAABlCAYAAADOHzgXAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABd1JREFUeNrsmgtz2lYQRnWFwBjj 2G067f//ge3k4WCeUkX7afqxkYScOpNYOmdmBwwCj66PdveunGUAAPAviSX47mtYsUSI+L3XLtka pg4BKwtAxFdfs1zPc3uegnylonlOhuygYAm+OQvOWsJFPIVIyIiIrylhLunmFgutZa5jz8Id69jX cbDIkPF1RUwTl3ChWNZxq8eF3suUAc8Sbut41mMuGY9WrscqY/U9REwDnk9BxFzrNZd4qzru6ljr can3Msl2FvCL4ikIOWYZq9CiDJKzGJAFMis5cac4pY3JLEh4X8eD4p1eW+j4gwT8XMdHK+EzyXhQ 1izD7npMMvpFVmotOy+8YkApipGCmFMoyTOt1Y1K8VnCxzp+reMXPV+biHtlwY86/kbvnWXc1LFT VjyNrGd08Xxq4NF6rkVPGcptN1hYzFrGFWOVsjlHL8lrZcCzhL+ZjGsJ5yLem4g3+vyTsuLeRCxH 0g/62Oqki+1oF52fb9UnYmrph5rG3K/qOK4Ys4jNWiwk1VoZ8L3FY4eId7ahaXrKz8qKe/sDveVe MYrYCHfQOe70uLfN2lftSNGx8N4PNYu4sqt7HsYVYy3RLqKX5QdlwiYbPkiyuT6z18+3YQ3vTcSd 9YpvfdNShbHVQef3rHPdmCueNVtFjI35whb+neJeC3pjZTpNLCPeaS0eFc26xF3zrZXj5nMPypSx TxxDRqysHO90jueL7pONtcpQnpsNzFcZMQ8Lv9JCv9fV/2h9z8JEHHtGnFl7slIZXmst7mzHXNgc sWljGhnvTMLtiEqzZ7lmfvosCT/YxdmU66YK5Hrs3Kx4KVpZY/679UN32eXdhDGL6LvmZoi9tFZl adL5nZWZ9dk3Vpq31i+dRjJPrLLLu0lfJKGPs3Y696Yl6dw1p45SdG/N+R+2Q1xOSMQ8iLUIEduU Kru8B72wrHjILu+wjGF84yJulfl947bRazF5dZZmzwDxSn6UhO+tPE9BxFiiZ2GUVfSMs2I27Rtj jEXEZ5NwJwFXtsltbeeKjgXPg4xNs722zcttKEdjHm6n7PqQP7W0OH58KRnLUI7f+iDbd8wH6wl3 NjlwCfOQvP7JikXHHDCFKz/e5L+dmIhtQl77x9jMSk8exBvTPWYXsbCecBlal9i+ZH2lue3qb7u7 Mg+zxKnde04dr/e9llrGHdmIZCxtdBXvxMW7calvszKkYc97StOUSK9wbBqZiNkL2pbspSKmjpLU lj3h9SV+q+c1tHW5aKj7smBf2UE+GOpFuuZNztrBzwAiAiICICIgIgAiAiICICIgIgAiAiICICIg IgAiAiICICIgIgAiAiICICIgIgAiAiICICIgIgAiAiICICIgIgAiAiICICIgIgAiAiAiICIAIgIi AiAiICIAIgIiAiAiICIAIgIiAiAiICIAIgIiAiAiICIAIgIiAiAiICIAIgIiAvxAEStFHxXLBy90 otOr4gVfXoUYKixMQ8BrnvRSDPwFZfjy0uJM4m8xeRHdiarDnW8SMUp3quNocQjlHRmnXY5LOeGO nFrkvCpi1SLgSXH+BTvFto65jj1KRCRExlI+PMuRxpeDeVR2leyiJwu6gOcv3tTxVMeNjj3o8wkR EVFxlCuf5crGpDx0yHghYmUyVVaG9zL8/KWf6ljqmJ2ERESIIu7kywc58ySH9lauq1iJi44U22TD Z/vShY45G76SiDNEBBPxJBE3kvBPudPIGLNiZ4/otd6/sOkJ90q7S72WZwzF4b/NSrNh2VoC+0sO beTUsa08Fz1NZyNiYT3hlzpuLRvmZERo2VvsQkvXJWI2RMS9PpyFJnShbEhZhq7yfLD9xcZiP0RE nwed9KEspNu5PjNrGdsg5HQFbNtjHLPLsd9ecRpSmn3XnAXDtxKwTUJERMQ2GeNNkFPLrrlTnmSR t0SiJMOAEh1v+7Xd/ruaxVKLlCm8DnAtS1bZwH+CuCZUXw+IjDC0VHe9979kQkD4FiEBfn7+FmAA BI8kGS+haocAAAAASUVORK5CYII="
            height={101}
            width={162}
            overflow="visible"
            opacity={0.4}
          />
          <g
            id="g917"
            onClick={() => {
              loadgraphs(2, "Presión Alimentación");
            }}>
            <path
              id="path915"
              d="M421.7 398.8h65.6l7.6-6.8 8.3 6.8h59.2c.8 0 1.5.7 1.5 1.5v73.1c0 .8-.7 1.5-1.5 1.5H421.7c-.8 0-1.5-.7-1.5-1.5v-73.1c0-.8.7-1.5 1.5-1.5z"
              className={
                (Number(props.pt203) <= Number(props.umbrales.ma2) &&
                Number(props.pt203) >= Number(props.umbrales.mi2)
                  ? " st1"
                  : " st33") + (props.selected === 2 ? " st34" : "")
              }
            />
            {/* Presion alimentacion */}
          </g>
        </g>
        <path
          id="path921"
          d="M484.3 463h-48.7c-1.5 0-2.7-1.2-2.7-2.7v-11.7c0-1.5 1.2-2.7 2.7-2.7h48.7c1.5 0 2.7 1.2 2.7 2.7v11.7c0 1.5-1.2 2.7-2.7 2.7z"
          className="st2"
        />
        <g id="g931">
          <path
            id="rect923"
            className="st3"
            d="M426.1 409.1H558.1V439H426.1z"
          />
          <text
            id="text929"
            transform="translate(465.274 418.77)">
            <tspan
              id="tspan925"
              className="st4 st5 st6"
              y={0}
              x={0}>
              {"Presi\xF3n"}
            </tspan>
            <tspan
              id="tspan927"
              className="st4 st5 st6"
              y={15}
              x={-20.7}>
              {"Alimentaci\xF3n"}
            </tspan>
          </text>
        </g>
        <path
          id="rect933"
          className="st3"
          d="M437 449H484V464H437z"
        />
        <text
          id="text935"
          className="st7 st8 st9"
          transform="translate(437 459.388)">
          {props.pt203}
        </text>
        <path
          id="rect937"
          className="st3"
          d="M493.6 449H525V464H493.6z"
        />
        <text
          id="text939"
          className="st7 st8 st9"
          transform="translate(493.633 459.388)">
          {"bar"}
        </text>
        <path
          id="line941"
          className="st0"
          d="M231.6 414.6L231.6 369.9"
        />
        <g id="g947">
          <path
            id="rect943"
            className="st3"
            d="M153.8 475.1H287.20000000000005V489.3H153.8z"
          />
          <text
            id="text945"
            className="st7 st13 st14"
            transform="translate(176.69 484.042)">
            {"Hipoclorito"}
          </text>
        </g>
        <g id="g957">
          <path
            id="rect949"
            className="st3"
            d="M121 162H295.6V213H121z"
          />
          <text
            id="text955"
            transform="translate(121 171.645)">
            <tspan
              id="tspan951"
              className="st4 st5 st6"
              y={0}
              x={0}>
              {"Estanque"}
            </tspan>
            <tspan
              id="tspan953"
              className="st4 st5 st6"
              y={15}
              x={0}>
              {"Alimentaci\xF3n"}
            </tspan>
          </text>
        </g>
        <path
          id="path959"
          d="M476.7 189.6v87.8c0 1.6 1.3 2.8 2.8 2.8h46.6"
          className="st15"
        />
        <path
          id="path961"
          d="M523.9 273.6l5.7 5.7c.4.4.4 1.1 0 1.6l-5.7 5.7c-.7.7-1.9.2-1.9-.8v-11.4c0-1 1.2-1.5 1.9-.8z"
          className="st16"
        />
        <path
          id="path963"
          d="M295.2 317.2v-122c0-4.3 3.9-7.7 8.7-7.7H649c4.8 0 8.6 3.9 8.6 8.6v81.3c0 1.6 1.3 2.8 2.8 2.8H707"
          className="st15"
        />
        <path
          id="path965"
          d="M704.9 273.6l5.7 5.7c.4.4.4 1.1 0 1.6l-5.7 5.7c-.7.7-1.9.2-1.9-.8v-11.4c0-1 1.2-1.5 1.9-.8z"
          className="st16"
        />
        <g id="g971">
          <path
            id="rect967"
            className="st3"
            d="M522.7 336.5H595.9000000000001V353H522.7z"
          />
          <text
            id="text969"
            className="st4 st5 st6"
            transform="translate(495.402 346.153)">
            {"Bomba \n Alimentación"}
          </text>
        </g>
        <g id="g977">
          <path
            id="rect973"
            className="st3"
            d="M702.1 336.5H776.5V353H702.1z"
          />
          <text
            id="text975"
            className="st4 st5 st6"
            transform="translate(690.115 346.153)">
            {"Bomba Mezcla"}
          </text>

          <text
            id="text1434"
            transform="translate(570.115 1180.153)">
            <tspan
              id="tspan1830"
              className="st4 st5 st6"
              y={0}
              x={0}>
              {"Bomba"}
            </tspan>
            <tspan
              id="tspan1832"
              className="st4 st5 st6"
              y={15}
              x={-2.9}>
              {"Alta Presión"}
            </tspan>
          </text>

          <text
            id="text1934"
            transform="translate(570.115 1330.153)">
            <tspan
              id="tspan1930"
              className="st4 st5 st6"
              y={0}
              x={0}>
              {"Bomba"}
            </tspan>
            <tspan
              id="tspan1932"
              className="st4 st5 st6"
              y={15}
              x={-2.9}>
              {"Alta Presión"}
            </tspan>
          </text>
        </g>
        <g id="g987">
          <path
            id="path979"
            d="M762.3 328.6h-45.8c-1 0-1.6-1.5-1.1-2.7l7.4-16.1c.2-.5.7-.8 1.1-.8H755c.4 0 .9.3 1.1.8l7.4 16.1c.4 1.2-.2 2.7-1.2 2.7z"
            className="st17"
          />
          <path
            id="path981"
            d="M774.9 286.7h-37.3v-16.5h37.3c1.7 0 3.1 1.4 3.1 3.1v10.3c0 1.7-1.4 3.1-3.1 3.1z"
            className="st17"
          />
          <circle
            id="circle983"
            r={24.3}
            cy={293.8}
            cx={739.2}
            className="st18"
          />
          <circle
            id="circle985"
            r={17}
            cy={293.8}
            cx={739.2}
            className="st19"
          />
        </g>
        <g id="g997">
          <path
            id="path989"
            d="M237.7 463.3H203c-1.1 0-2-.9-2-2v-57.1c0-1.1.9-2 2-2h34.7c1.1 0 2 .9 2 2v57.1c0 1.1-.9 2-2 2z"
            className="st20"
          />
          <g id="g995">
            <path
              id="path991"
              d="M236.9 394.5v8.7c0 .6-.5 1.1-1.1 1.1h-8.3c-.6 0-1.1-.5-1.1-1.1v-8.7c0-.6.5-1.1 1.1-1.1h8.3c.6 0 1.1.5 1.1 1.1z"
              className="st18"
            />
            <path
              id="path993"
              d="M241.7 402.4v3.7c0 .6-.5 1.1-1.1 1.1h-40.9c-.6 0-1.1-.5-1.1-1.1v-3.7c0-.6.5-1.1 1.1-1.1h40.9c.6 0 1.1.5 1.1 1.1z"
              className="st18"
            />
          </g>
        </g>
        <g
          id="g1013"
          onClick={() => {
            notificacion(2, "Presión Alimentación");
          }}>
          <g id="g1011">
            <path
              id="path999"
              d="M539.3 450.5c-.6 1.1-.8 2.3-.6 3.4 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z"
              className="st4"
            />
            <path
              id="path1001"
              d="M537.6 449.5c-.9 1.5-1.1 3.2-.8 4.8 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-4 .7-1.3 1.8-2.2 3.1-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-3 1.6-3.8 3.1z"
              className="st4"
            />
            <path
              id="path1003"
              d="M549.1 448.2c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7s.6 1.7.5 2.6c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.4-.5-1-1.4-1.7-2.5-2.2z"
              className="st4"
            />
            <path
              id="path1005"
              d="M549.7 446.4c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.4 1.4 3.1 2.6s.9 2.7.7 4c0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.3-.8-4.8s-2.3-2.6-3.8-3.1z"
              className="st4"
            />
            <path
              id="path1007"
              d="M550.7 455.6v-1.5c0-2.5-1.6-4.4-3.9-4.9v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.4.5-3.9 2.4-3.9 4.9v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h9.1c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.7-.5-.9-1.3-.9-2.1z"
              className="st4"
            />
            <path
              id="path1009"
              d="M545.6 463.2c.9 0 1.7-.8 1.7-1.7h-3.4c0 .9.7 1.7 1.7 1.7z"
              className="st4"
            />
          </g>
        </g>
        <path
          id="line1015"
          className="st0"
          d="M342.5 153L342.5 185"
        />
        <g
          id="g1023"
          onClick={() => {
            loadgraphs(13, "Temperatura Agua");
          }}>
          <image
            id="image1017"
            transform="translate(264 70)"
            xlinkHref="data:image/png;base64,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"
            height={101}
            width={162}
            overflow="visible"
            opacity={0.4}
          />
          <g id="g1021">
            <path
              id="path1019"
              d="M415.4 155.2h-65.6l-7.6 6.8-8.3-6.8h-59.2c-.8 0-1.5-.7-1.5-1.5V80.5c0-.8.7-1.5 1.5-1.5h140.7c.8 0 1.5.7 1.5 1.5v73.1c0 .9-.7 1.6-1.5 1.6z"
              className={
                (Number(props.te230) <= Number(props.umbrales.ma13) &&
                Number(props.te230) >= Number(props.umbrales.mi13)
                  ? " st1"
                  : " st33") + (props.selected === 13 ? " st34" : "")
              }
            />
          </g>
        </g>
        <path
          id="path1025"
          d="M337.3 145h-48.7c-1.5 0-2.7-1.2-2.7-2.7v-11.7c0-1.5 1.2-2.7 2.7-2.7h48.7c1.5 0 2.7 1.2 2.7 2.7v11.7c0 1.5-1.2 2.7-2.7 2.7z"
          className="st2"
        />
        <g id="g1035">
          <path
            id="rect1027"
            className="st3"
            d="M279.1 93.1H411.1V123H279.1z"
          />
          <text
            id="text1033"
            transform="translate(299.002 102.77)">
            <tspan
              id="tspan1029"
              className="st4 st5 st6"
              y={0}
              x={0}>
              {"Temperatura"}
            </tspan>
            <tspan
              id="tspan1031"
              className="st4 st5 st6"
              y={15}
              x={27.6}>
              {"Agua"}
            </tspan>
          </text>
        </g>
        <path
          id="rect1037"
          className="st3"
          d="M290 131H337V146H290z"
        />
        <text
          id="text1039"
          className="st7 st8 st9"
          transform="translate(290 141.388)">
          {props.te230}
        </text>
        <path
          id="rect1041"
          className="st3"
          d="M346.6 131H378V146H346.6z"
        />
        <text
          id="text1043"
          className="st7 st8 st9"
          transform="translate(346.633 141.388)">
          {"C\xB0"}
        </text>
        <g id="g1059">
          <g id="g1057">
            <path
              id="path1045"
              d="M392.3 132.5c-.6 1.1-.8 2.3-.6 3.4 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z"
              className="st4"
            />
            <path
              id="path1047"
              d="M390.6 131.5c-.9 1.5-1.1 3.2-.8 4.8 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-4 .7-1.3 1.8-2.2 3.1-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-3 1.6-3.8 3.1z"
              className="st4"
            />
            <path
              id="path1049"
              d="M402.1 130.2c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.4-.5-1-1.4-1.7-2.5-2.2z"
              className="st4"
            />
            <path
              id="path1051"
              d="M402.7 128.4c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.4 1.4 3.1 2.6.7 1.3.9 2.7.7 4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.3-.8-4.8s-2.3-2.6-3.8-3.1z"
              className="st4"
            />
            <path
              id="path1053"
              d="M403.7 137.6v-1.5c0-2.5-1.6-4.4-3.9-4.9v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.4.5-3.9 2.4-3.9 4.9v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h9.1c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.7-.5-.9-1.3-.9-2.1z"
              className="st4"
              onClick={() => {
                notificacion(13, "Temperatura Agua");
              }}
            />

            <path
              id="path1055"
              d="M398.6 145.2c.9 0 1.7-.8 1.7-1.7h-3.4c0 .9.7 1.7 1.7 1.7z"
              className="st4"
            />
          </g>
        </g>
        <g id="g1069">
          <g id="g1067">
            <path
              id="line1061"
              className="st21"
              d="M850 498.5L851 498.5"
            />
            <path
              id="line1063"
              className="st22"
              d="M854 498.5L1088.5 498.5"
            />
            <path
              id="line1065"
              className="st21"
              d="M1090 498.5L1091 498.5"
            />
          </g>
        </g>
        <g id="g1079">
          <g id="g1077">
            <path
              id="line1071"
              className="st21"
              d="M850 773.5L851 773.5"
            />
            <path
              id="line1073"
              className="st22"
              d="M854 773.5L1088.5 773.5"
            />
            <path
              id="line1075"
              className="st21"
              d="M1090 773.5L1091 773.5"
            />
          </g>
        </g>
        <g id="g1085">
          <path
            id="rect1081"
            className="st3"
            d="M134.1 734.5H248V751H134.1z"
          />
          <text
            id="text1083"
            className="st4 st5 st6"
            transform="translate(155.59 744.153)">
            {"Ag Plus 1"}
          </text>
        </g>
        <path
          id="path1087"
          d="M258 679.9V565.5c0-4.3-2.8-7.7-6.2-7.7h-36.7"
          className="st23"
        />
        <path
          id="line1089"
          className="st11"
          d="M258.2 724.8L258.2 700"
        />
        <path
          id="path1091"
          d="M269.6 690.3c1.2 1.2 1.2 3.3 0 4.5l-9.1 9.1c-1.2 1.2-3.3 1.2-4.5 0l-9.1-9.1c-1.2-1.2-1.2-3.3 0-4.5"
          className="st17"
        />
        <path
          id="path1093"
          d="M203.5 725.7h-32.4c-.9 0-1.5-1-1-1.8l6.5-10.4c.2-.3.6-.5 1-.5H197c.4 0 .8.2 1 .5l6.5 10.4c.5.8-.1 1.8-1 1.8z"
          className="st17"
        />
        <path
          id="path1095"
          d="M187.2 716c-21.7 0-39.5-13.3-39.5-34.9v-60.7c0-21.6 17.8-34.9 39.5-34.9s39.5 13.3 39.5 34.9v60.7c0 21.6-17.8 34.9-39.5 34.9z"
          className="st18"
        />
        <path
          id="rect1097"
          className="st10"
          d="M147.8 621.1H226.60000000000002V681.8000000000001H147.8z"
        />
        <path
          id="path1099"
          d="M264.5 677.9l-5.7 5.7c-.4.4-1.1.4-1.6 0l-5.7-5.7c-.7-.7-.2-1.9.8-1.9h11.4c1 0 1.5 1.2.8 1.9z"
          className="st24"
        />
        <g id="g1105">
          <path
            id="rect1101"
            className="st3"
            d="M327.1 734.5H441V751H327.1z"
          />
          <text
            id="text1103"
            className="st4 st5 st6"
            transform="translate(347.303 744.153)">
            {"Ag Plus 2"}
          </text>
        </g>
        <path
          id="path1107"
          d="M452 679.9V565.5c0-4.3-2.8-7.7-6.2-7.7h-36.7"
          className="st23"
        />
        <path
          id="line1109"
          className="st11"
          d="M452.2 724.8L452.2 700"
        />
        <path
          id="path1111"
          d="M463.6 690.3c1.2 1.2 1.2 3.3 0 4.5l-9.1 9.1c-1.2 1.2-3.3 1.2-4.5 0l-9.1-9.1c-1.2-1.2-1.2-3.3 0-4.5"
          className="st17"
        />
        <path
          id="path1113"
          d="M397.5 725.7h-32.4c-.9 0-1.5-1-1-1.8l6.5-10.4c.2-.3.6-.5 1-.5H391c.4 0 .8.2 1 .5l6.5 10.4c.5.8-.1 1.8-1 1.8z"
          className="st17"
        />
        <path
          id="path1115"
          d="M381.2 716c-21.7 0-39.5-13.3-39.5-34.9v-60.7c0-21.6 17.8-34.9 39.5-34.9s39.5 13.3 39.5 34.9v60.7c0 21.6-17.8 34.9-39.5 34.9z"
          className="st18"
        />
        <path
          id="rect1117"
          className="st10"
          d="M341.8 621.1H420.6V681.8000000000001H341.8z"
        />
        <path
          id="path1119"
          d="M458.5 677.9l-5.7 5.7c-.4.4-1.1.4-1.6 0l-5.7-5.7c-.7-.7-.2-1.9.8-1.9h11.4c1 0 1.5 1.2.8 1.9z"
          className="st24"
        />
        <g id="g1125">
          <path
            id="rect1121"
            className="st3"
            d="M524.1 734.5H638V751H524.1z"
          />
          <text
            id="text1123"
            className="st4 st5 st6"
            transform="translate(544.29 744.153)">
            {"Ag Plus 3"}
          </text>
        </g>
        <path
          id="path1127"
          d="M649 679.9V565.5c0-4.3-2.8-7.7-6.2-7.7h-36.7"
          className="st23"
        />
        <path
          id="line1129"
          className="st11"
          d="M649.2 724.8L649.2 700"
        />
        <path
          id="path1131"
          d="M660.6 690.3c1.2 1.2 1.2 3.3 0 4.5l-9.1 9.1c-1.2 1.2-3.3 1.2-4.5 0l-9.1-9.1c-1.2-1.2-1.2-3.3 0-4.5"
          className="st17"
        />
        <path
          id="path1133"
          d="M594.5 725.7h-32.4c-.9 0-1.5-1-1-1.8l6.5-10.4c.2-.3.6-.5 1-.5H588c.4 0 .8.2 1 .5l6.5 10.4c.5.8-.1 1.8-1 1.8z"
          className="st17"
        />
        <path
          id="path1135"
          d="M578.2 716c-21.7 0-39.5-13.3-39.5-34.9v-60.7c0-21.6 17.8-34.9 39.5-34.9s39.5 13.3 39.5 34.9v60.7c0 21.6-17.8 34.9-39.5 34.9z"
          className="st18"
        />
        <path
          id="rect1137"
          className="st10"
          d="M538.8 621.1H617.5999999999999V681.8000000000001H538.8z"
        />
        <path
          id="path1139"
          d="M655.5 677.9l-5.7 5.7c-.4.4-1.1.4-1.6 0l-5.7-5.7c-.7-.7-.2-1.9.8-1.9h11.4c1 0 1.5 1.2.8 1.9z"
          className="st24"
        />
        <g id="g1145">
          <path
            id="rect1141"
            className="st3"
            d="M716.1 734.5H830V751H716.1z"
          />
          <text
            id="text1143"
            className="st4 st5 st6"
            transform="translate(735.66 744.153)">
            {"Ag Plus 4"}
          </text>
        </g>
        <path
          id="path1147"
          d="M841 679.9V565.5c0-4.3-2.8-7.7-6.2-7.7h-36.7"
          className="st23"
        />
        <path
          id="line1149"
          className="st11"
          d="M841.2 724.8L841.2 700"
        />
        <path
          id="path1151"
          d="M852.6 690.3c1.2 1.2 1.2 3.3 0 4.5l-9.1 9.1c-1.2 1.2-3.3 1.2-4.5 0l-9.1-9.1c-1.2-1.2-1.2-3.3 0-4.5"
          className="st17"
        />
        <path
          id="path1153"
          d="M786.5 725.7h-32.4c-.9 0-1.5-1-1-1.8l6.5-10.4c.2-.3.6-.5 1-.5H780c.4 0 .8.2 1 .5l6.5 10.4c.5.8-.1 1.8-1 1.8z"
          className="st17"
        />
        <path
          id="path1155"
          d="M770.2 716c-21.7 0-39.5-13.3-39.5-34.9v-60.7c0-21.6 17.8-34.9 39.5-34.9s39.5 13.3 39.5 34.9v60.7c0 21.6-17.8 34.9-39.5 34.9z"
          className="st18"
        />
        <path
          id="rect1157"
          className="st10"
          d="M730.8 621.1H809.5999999999999V681.8000000000001H730.8z"
        />
        <path
          id="path1159"
          d="M847.5 677.9l-5.7 5.7c-.4.4-1.1.4-1.6 0l-5.7-5.7c-.7-.7-.2-1.9.8-1.9h11.4c1 0 1.5 1.2.8 1.9z"
          className="st24"
        />
        <g id="g1165">
          <path
            id="rect1161"
            className="st3"
            d="M904.1 734.5H1018V751H904.1z"
          />
          <text
            id="text1163"
            className="st4 st5 st6"
            transform="translate(924.27 744.153)">
            {"Ag Plus 5"}
          </text>
        </g>
        <path
          id="path1167"
          d="M1029 679.9V565.5c0-4.3-2.8-7.7-6.2-7.7h-36.7"
          className="st23"
        />
        <path
          id="line1169"
          className="st11"
          d="M1029.2 724.8L1029.2 700"
        />
        <path
          id="path1171"
          d="M1040.6 690.3c1.2 1.2 1.2 3.3 0 4.5l-9.1 9.1c-1.2 1.2-3.3 1.2-4.5 0l-9.1-9.1c-1.2-1.2-1.2-3.3 0-4.5"
          className="st17"
        />
        <path
          id="path1173"
          d="M974.5 725.7h-32.4c-.9 0-1.5-1-1-1.8l6.5-10.4c.2-.3.6-.5 1-.5H968c.4 0 .8.2 1 .5l6.5 10.4c.5.8-.1 1.8-1 1.8z"
          className="st17"
        />
        <path
          id="path1175"
          d="M958.2 716c-21.7 0-39.5-13.3-39.5-34.9v-60.7c0-21.6 17.8-34.9 39.5-34.9s39.5 13.3 39.5 34.9v60.7c0 21.6-17.8 34.9-39.5 34.9z"
          className="st18"
        />
        <path
          id="rect1177"
          className="st10"
          d="M918.8 621.1H997.5999999999999V681.8000000000001H918.8z"
        />
        <path
          id="path1179"
          d="M1035.5 677.9l-5.7 5.7c-.4.4-1.1.4-1.6 0l-5.7-5.7c-.7-.7-.2-1.9.8-1.9h11.4c1 0 1.5 1.2.8 1.9z"
          className="st24"
        />
        <g id="g1187">
          <image
            id="image1181"
            transform="translate(155 529)"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAA3CAYAAAC4u5yaAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA5hJREFUeNrsm31P2zAQxp0XKK+D sfftr2nf/yMNgbZBBZRCKdAmTTKbPice3IQmRS0KOkuP0jmL4/v57uwpN2O0PbRgTn/wxuwtvGsl iIAUQsEbAFJAOVSQZkCI8ZFVbLWOa0RA2grBGZ9ZTawSXDOC8mAog4gAYMtqB1cB0kbPkFUXAHdW Q1wT9orYC4kYxu9bfbZ6DyDrgNRGEBmMdgD6Vme4J17ibCrYI8QbnOFfrH5Zfbc6sNomr2gbCOcN t1aXViewgUMkn+cRDsJPq69Wu4DURhDO4BurLvp68IwB2V1U5YgdeIKD8MNqD/1hy0DkAHGNP19X hXpcsmu4vg7CYRcQ9tHXRhBj/B7Apg5sDKtAGO/84O6tgV6nxSAMbFgjADPHgfiZkyVDYbWthXUO h200bGm0tCkIBaEgFISCUBAKQkEoCAWhIBSEglAQCkJBKAgFoSAUhIJQEApCQbSo+Z/8uNYoI0nt UdP2kqK0ysKvBi2vsKXwx41LIHCt0RgaNfQgvygtoGeDGgCeLfxqCGJEdnD91JMxfRDuL6RW92b6 Gd3VE/Rx330NjxpAkMI0+Qo9rzCNAUxoMbKyiddsGQD0YcsAtqU05hMQXHQ1wgPnZlob4dpNQxBc Z7FJks/z/pdp9sYEc3AFX7cwZGbiDUE4CCewaYDxJ6akmEzcKMXLXXnNH/S7B3dNvfoIMY6r894B 6B5+C5CoxBvHeP8VVrGPRRj7E28QGmOMcQabenhHynmPPYJBXJAn/LXawErWKTEUb9iA4R/NtELP lSF9MtNKvW3PwwTCEBM9tfqHa79s4jWTbYHnxMt7sI3HK6pyhCTGCUBsAkLd8sKAwmIHIL558fnB PNYyGfQNMUkH4Ahyvy8RJukCO5ef924x1qgqR/heIdc7SnJBAxAh4G1hFa4wiRHGdToA5AD9Uv53 aPUbILp4lmPaLOAVshOmlG/yKhCGbuaUuALTrOqW80THW4WEkuEQoRPgvovhY0A4hDdIPCf+xBeA UbYlVx6o/AezBQ9DAiMhpRSvUgC6B++5w+ofU0hcIDQTWsGXtGcPaPEST3YBrUBeckbpAkSEvnMk x1N4wtCL5cIsscVLHLugpMsHJdnOutg9Qqz6gA4+cn5YCYRF/w2waJhIAl1Hktwwj9W8GbzinnLJ yiCsCoS/m0Tm8f+E8DlmQspXCWHVIPh9obcbcVZfKYDXAjHv3YXR9rrtvwADAIDmfLqP69/eAAAA AElFTkSuQmCC"
            height={55}
            width={66}
            overflow="visible"
            opacity={0.4}
          />
          <g id="g1185">
            <path
              id="path1183"
              d="M213.4 571.2h-18.6l-7.6 6.8-8.3-6.8h-16.2c-.8 0-1.5-.7-1.5-1.5v-33.1c0-.8.7-1.5 1.5-1.5h50.7c.8 0 1.5.7 1.5 1.5v33.1c0 .8-.7 1.5-1.5 1.5z"
              className="st17"
            />
          </g>
        </g>
        <path
          id="path1189"
          d="M205.3 564h-33.7c-1.5 0-2.7-1.2-2.7-2.7v-15.7c0-1.5 1.2-2.7 2.7-2.7h33.7c1.5 0 2.7 1.2 2.7 2.7v15.7c0 1.5-1.2 2.7-2.7 2.7z"
          className="st2"
        />
        <path
          id="path1191"
          d="M151.9 546.6l5.7 5.7c.4.4.4 1.1 0 1.6l-5.7 5.7c-.7.7-1.9.2-1.9-.8v-11.4c0-1 1.2-1.5 1.9-.8z"
          className="st16"
        />
        <path
          id="path1193"
          d="M482 759.9V554.5c0-4.3-2.8-7.7-6.2-7.7h-66.7"
          className="st15"
        />
        <path
          id="path1195"
          d="M488.5 760.9l-5.7 5.7c-.4.4-1.1.4-1.6 0l-5.7-5.7c-.7-.7-.2-1.9.8-1.9h11.4c1 0 1.5 1.2.8 1.9z"
          className="st16"
        />
        <path
          id="path1197"
          d="M313.1 497.8v47.4c0 4.3 2.8 7.7 6.2 7.7H348"
          className="st15"
        />
        <g id="g1205">
          <image
            id="image1199"
            transform="translate(349 529)"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAA3CAYAAAC4u5yaAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA5hJREFUeNrsm31P2zAQxp0XKK+D sfftr2nf/yMNgbZBBZRCKdAmTTKbPice3IQmRS0KOkuP0jmL4/v57uwpN2O0PbRgTn/wxuwtvGsl iIAUQsEbAFJAOVSQZkCI8ZFVbLWOa0RA2grBGZ9ZTawSXDOC8mAog4gAYMtqB1cB0kbPkFUXAHdW Q1wT9orYC4kYxu9bfbZ6DyDrgNRGEBmMdgD6Vme4J17ibCrYI8QbnOFfrH5Zfbc6sNomr2gbCOcN t1aXViewgUMkn+cRDsJPq69Wu4DURhDO4BurLvp68IwB2V1U5YgdeIKD8MNqD/1hy0DkAHGNP19X hXpcsmu4vg7CYRcQ9tHXRhBj/B7Apg5sDKtAGO/84O6tgV6nxSAMbFgjADPHgfiZkyVDYbWthXUO h200bGm0tCkIBaEgFISCUBAKQkEoCAWhIBSEglAQCkJBKAgFoSAUhIJQEApCQbSo+Z/8uNYoI0nt UdP2kqK0ysKvBi2vsKXwx41LIHCt0RgaNfQgvygtoGeDGgCeLfxqCGJEdnD91JMxfRDuL6RW92b6 Gd3VE/Rx330NjxpAkMI0+Qo9rzCNAUxoMbKyiddsGQD0YcsAtqU05hMQXHQ1wgPnZlob4dpNQxBc Z7FJks/z/pdp9sYEc3AFX7cwZGbiDUE4CCewaYDxJ6akmEzcKMXLXXnNH/S7B3dNvfoIMY6r894B 6B5+C5CoxBvHeP8VVrGPRRj7E28QGmOMcQabenhHynmPPYJBXJAn/LXawErWKTEUb9iA4R/NtELP lSF9MtNKvW3PwwTCEBM9tfqHa79s4jWTbYHnxMt7sI3HK6pyhCTGCUBsAkLd8sKAwmIHIL558fnB PNYyGfQNMUkH4Ahyvy8RJukCO5ef924x1qgqR/heIdc7SnJBAxAh4G1hFa4wiRHGdToA5AD9Uv53 aPUbILp4lmPaLOAVshOmlG/yKhCGbuaUuALTrOqW80THW4WEkuEQoRPgvovhY0A4hDdIPCf+xBeA UbYlVx6o/AezBQ9DAiMhpRSvUgC6B++5w+ofU0hcIDQTWsGXtGcPaPEST3YBrUBeckbpAkSEvnMk x1N4wtCL5cIsscVLHLugpMsHJdnOutg9Qqz6gA4+cn5YCYRF/w2waJhIAl1Hktwwj9W8GbzinnLJ yiCsCoS/m0Tm8f+E8DlmQspXCWHVIPh9obcbcVZfKYDXAjHv3YXR9rrtvwADAIDmfLqP69/eAAAA AElFTkSuQmCC"
            height={55}
            width={66}
            overflow="visible"
            opacity={0.4}
          />
          <g id="g1203">
            <path
              id="path1201"
              d="M407.4 571.2h-18.6l-7.6 6.8-8.3-6.8h-16.2c-.8 0-1.5-.7-1.5-1.5v-33.1c0-.8.7-1.5 1.5-1.5h50.7c.8 0 1.5.7 1.5 1.5v33.1c0 .8-.7 1.5-1.5 1.5z"
              className="st17"
            />
          </g>
        </g>
        <path
          id="path1207"
          d="M399.3 564h-33.7c-1.5 0-2.7-1.2-2.7-2.7v-15.7c0-1.5 1.2-2.7 2.7-2.7h33.7c1.5 0 2.7 1.2 2.7 2.7v15.7c0 1.5-1.2 2.7-2.7 2.7z"
          className="st2"
        />
        <path
          id="path1209"
          d="M345.9 546.6l5.7 5.7c.4.4.4 1.1 0 1.6l-5.7 5.7c-.7.7-1.9.2-1.9-.8v-11.4c0-1 1.2-1.5 1.9-.8z"
          className="st16"
        />
        <path
          id="path1211"
          d="M679 759.9V554.5c0-4.3-2.8-7.7-6.2-7.7h-66.7"
          className="st15"
        />
        <path
          id="path1213"
          d="M685.5 760.9l-5.7 5.7c-.4.4-1.1.4-1.6 0l-5.7-5.7c-.7-.7-.2-1.9.8-1.9h11.4c1 0 1.5 1.2.8 1.9z"
          className="st16"
        />
        <path
          id="path1215"
          d="M510.1 497.8v47.4c0 4.3 2.8 7.7 6.2 7.7H545"
          className="st15"
        />
        <g id="g1223">
          <image
            id="image1217"
            transform="translate(546 529)"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAA3CAYAAAC4u5yaAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA5hJREFUeNrsm31P2zAQxp0XKK+D sfftr2nf/yMNgbZBBZRCKdAmTTKbPice3IQmRS0KOkuP0jmL4/v57uwpN2O0PbRgTn/wxuwtvGsl iIAUQsEbAFJAOVSQZkCI8ZFVbLWOa0RA2grBGZ9ZTawSXDOC8mAog4gAYMtqB1cB0kbPkFUXAHdW Q1wT9orYC4kYxu9bfbZ6DyDrgNRGEBmMdgD6Vme4J17ibCrYI8QbnOFfrH5Zfbc6sNomr2gbCOcN t1aXViewgUMkn+cRDsJPq69Wu4DURhDO4BurLvp68IwB2V1U5YgdeIKD8MNqD/1hy0DkAHGNP19X hXpcsmu4vg7CYRcQ9tHXRhBj/B7Apg5sDKtAGO/84O6tgV6nxSAMbFgjADPHgfiZkyVDYbWthXUO h200bGm0tCkIBaEgFISCUBAKQkEoCAWhIBSEglAQCkJBKAgFoSAUhIJQEApCQbSo+Z/8uNYoI0nt UdP2kqK0ysKvBi2vsKXwx41LIHCt0RgaNfQgvygtoGeDGgCeLfxqCGJEdnD91JMxfRDuL6RW92b6 Gd3VE/Rx330NjxpAkMI0+Qo9rzCNAUxoMbKyiddsGQD0YcsAtqU05hMQXHQ1wgPnZlob4dpNQxBc Z7FJks/z/pdp9sYEc3AFX7cwZGbiDUE4CCewaYDxJ6akmEzcKMXLXXnNH/S7B3dNvfoIMY6r894B 6B5+C5CoxBvHeP8VVrGPRRj7E28QGmOMcQabenhHynmPPYJBXJAn/LXawErWKTEUb9iA4R/NtELP lSF9MtNKvW3PwwTCEBM9tfqHa79s4jWTbYHnxMt7sI3HK6pyhCTGCUBsAkLd8sKAwmIHIL558fnB PNYyGfQNMUkH4Ahyvy8RJukCO5ef924x1qgqR/heIdc7SnJBAxAh4G1hFa4wiRHGdToA5AD9Uv53 aPUbILp4lmPaLOAVshOmlG/yKhCGbuaUuALTrOqW80THW4WEkuEQoRPgvovhY0A4hDdIPCf+xBeA UbYlVx6o/AezBQ9DAiMhpRSvUgC6B++5w+ofU0hcIDQTWsGXtGcPaPEST3YBrUBeckbpAkSEvnMk x1N4wtCL5cIsscVLHLugpMsHJdnOutg9Qqz6gA4+cn5YCYRF/w2waJhIAl1Hktwwj9W8GbzinnLJ yiCsCoS/m0Tm8f+E8DlmQspXCWHVIPh9obcbcVZfKYDXAjHv3YXR9rrtvwADAIDmfLqP69/eAAAA AElFTkSuQmCC"
            height={55}
            width={66}
            overflow="visible"
            opacity={0.4}
          />
          <g id="g1221">
            <path
              id="path1219"
              d="M604.4 571.2h-18.6l-7.6 6.8-8.3-6.8h-16.2c-.8 0-1.5-.7-1.5-1.5v-33.1c0-.8.7-1.5 1.5-1.5h50.7c.8 0 1.5.7 1.5 1.5v33.1c0 .8-.7 1.5-1.5 1.5z"
              className="st17"
            />
          </g>
        </g>
        <path
          id="path1225"
          d="M596.3 564h-33.7c-1.5 0-2.7-1.2-2.7-2.7v-15.7c0-1.5 1.2-2.7 2.7-2.7h33.7c1.5 0 2.7 1.2 2.7 2.7v15.7c0 1.5-1.2 2.7-2.7 2.7z"
          className="st2"
        />
        <path
          id="path1227"
          d="M542.9 546.6l5.7 5.7c.4.4.4 1.1 0 1.6l-5.7 5.7c-.7.7-1.9.2-1.9-.8v-11.4c0-1 1.2-1.5 1.9-.8z"
          className="st16"
        />
        <path
          id="path1229"
          d="M873 759.9V554.5c0-4.3-2.8-7.7-6.2-7.7h-66.7"
          className="st15"
        />
        <path
          id="path1231"
          d="M879.5 760.9l-5.7 5.7c-.4.4-1.1.4-1.6 0l-5.7-5.7c-.7-.7-.2-1.9.8-1.9h11.4c1 0 1.5 1.2.8 1.9z"
          className="st16"
        />
        <path
          id="path1233"
          d="M704.1 497.8v47.4c0 4.3 2.8 7.7 6.2 7.7H739"
          className="st15"
        />
        <g id="g1241">
          <image
            id="image1235"
            transform="translate(740 529)"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAA3CAYAAAC4u5yaAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA5hJREFUeNrsm31P2zAQxp0XKK+D sfftr2nf/yMNgbZBBZRCKdAmTTKbPice3IQmRS0KOkuP0jmL4/v57uwpN2O0PbRgTn/wxuwtvGsl iIAUQsEbAFJAOVSQZkCI8ZFVbLWOa0RA2grBGZ9ZTawSXDOC8mAog4gAYMtqB1cB0kbPkFUXAHdW Q1wT9orYC4kYxu9bfbZ6DyDrgNRGEBmMdgD6Vme4J17ibCrYI8QbnOFfrH5Zfbc6sNomr2gbCOcN t1aXViewgUMkn+cRDsJPq69Wu4DURhDO4BurLvp68IwB2V1U5YgdeIKD8MNqD/1hy0DkAHGNP19X hXpcsmu4vg7CYRcQ9tHXRhBj/B7Apg5sDKtAGO/84O6tgV6nxSAMbFgjADPHgfiZkyVDYbWthXUO h200bGm0tCkIBaEgFISCUBAKQkEoCAWhIBSEglAQCkJBKAgFoSAUhIJQEApCQbSo+Z/8uNYoI0nt UdP2kqK0ysKvBi2vsKXwx41LIHCt0RgaNfQgvygtoGeDGgCeLfxqCGJEdnD91JMxfRDuL6RW92b6 Gd3VE/Rx330NjxpAkMI0+Qo9rzCNAUxoMbKyiddsGQD0YcsAtqU05hMQXHQ1wgPnZlob4dpNQxBc Z7FJks/z/pdp9sYEc3AFX7cwZGbiDUE4CCewaYDxJ6akmEzcKMXLXXnNH/S7B3dNvfoIMY6r894B 6B5+C5CoxBvHeP8VVrGPRRj7E28QGmOMcQabenhHynmPPYJBXJAn/LXawErWKTEUb9iA4R/NtELP lSF9MtNKvW3PwwTCEBM9tfqHa79s4jWTbYHnxMt7sI3HK6pyhCTGCUBsAkLd8sKAwmIHIL558fnB PNYyGfQNMUkH4Ahyvy8RJukCO5ef924x1qgqR/heIdc7SnJBAxAh4G1hFa4wiRHGdToA5AD9Uv53 aPUbILp4lmPaLOAVshOmlG/yKhCGbuaUuALTrOqW80THW4WEkuEQoRPgvovhY0A4hDdIPCf+xBeA UbYlVx6o/AezBQ9DAiMhpRSvUgC6B++5w+ofU0hcIDQTWsGXtGcPaPEST3YBrUBeckbpAkSEvnMk x1N4wtCL5cIsscVLHLugpMsHJdnOutg9Qqz6gA4+cn5YCYRF/w2waJhIAl1Hktwwj9W8GbzinnLJ yiCsCoS/m0Tm8f+E8DlmQspXCWHVIPh9obcbcVZfKYDXAjHv3YXR9rrtvwADAIDmfLqP69/eAAAA AElFTkSuQmCC"
            height={55}
            width={66}
            overflow="visible"
            opacity={0.4}
          />
          <g id="g1239">
            <path
              id="path1237"
              d="M798.4 571.2h-18.6l-7.6 6.8-8.3-6.8h-16.2c-.8 0-1.5-.7-1.5-1.5v-33.1c0-.8.7-1.5 1.5-1.5h50.7c.8 0 1.5.7 1.5 1.5v33.1c0 .8-.7 1.5-1.5 1.5z"
              className="st17"
            />
          </g>
        </g>
        <path
          id="path1243"
          d="M790.3 564h-33.7c-1.5 0-2.7-1.2-2.7-2.7v-15.7c0-1.5 1.2-2.7 2.7-2.7h33.7c1.5 0 2.7 1.2 2.7 2.7v15.7c0 1.5-1.2 2.7-2.7 2.7z"
          className="st2"
        />
        <path
          id="path1245"
          d="M736.9 546.6l5.7 5.7c.4.4.4 1.1 0 1.6l-5.7 5.7c-.7.7-1.9.2-1.9-.8v-11.4c0-1 1.2-1.5 1.9-.8z"
          className="st16"
        />
        <linearGradient
          y2={507}
          x2={1091}
          y1={766}
          x1={1091}
          gradientUnits="userSpaceOnUse"
          id="SVGID_1_">
          <stop
            id="stop1247"
            offset={0}
            stopColor="#fbb03b"
          />
          <stop
            id="stop1249"
            offset={1}
            stopColor="#f15a24"
          />
        </linearGradient>
        <path
          id="rect1252"
          fill="url(#SVGID_1_)"
          d="M1087 507H1095V766H1087z"
        />
        <path
          id="path1254"
          d="M1097.5 767.9l-5.7 5.7c-.4.4-1.1.4-1.6 0l-5.7-5.7c-.7-.7-.2-1.9.8-1.9h11.4c1 0 1.5 1.2.8 1.9z"
          className="st26"
        />
        <path
          id="path1256"
          d="M1084.5 505.3l5.7-5.7c.4-.4 1.1-.4 1.6 0l5.7 5.7c.7.7.2 1.9-.8 1.9h-11.4c-1 0-1.5-1.2-.8-1.9z"
          className="st27"
        />
        <g id="g1264">
          <image
            id="image1258"
            transform="translate(926 529)"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAA3CAYAAAC4u5yaAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA5hJREFUeNrsm31P2zAQxp0XKK+D sfftr2nf/yMNgbZBBZRCKdAmTTKbPice3IQmRS0KOkuP0jmL4/v57uwpN2O0PbRgTn/wxuwtvGsl iIAUQsEbAFJAOVSQZkCI8ZFVbLWOa0RA2grBGZ9ZTawSXDOC8mAog4gAYMtqB1cB0kbPkFUXAHdW Q1wT9orYC4kYxu9bfbZ6DyDrgNRGEBmMdgD6Vme4J17ibCrYI8QbnOFfrH5Zfbc6sNomr2gbCOcN t1aXViewgUMkn+cRDsJPq69Wu4DURhDO4BurLvp68IwB2V1U5YgdeIKD8MNqD/1hy0DkAHGNP19X hXpcsmu4vg7CYRcQ9tHXRhBj/B7Apg5sDKtAGO/84O6tgV6nxSAMbFgjADPHgfiZkyVDYbWthXUO h200bGm0tCkIBaEgFISCUBAKQkEoCAWhIBSEglAQCkJBKAgFoSAUhIJQEApCQbSo+Z/8uNYoI0nt UdP2kqK0ysKvBi2vsKXwx41LIHCt0RgaNfQgvygtoGeDGgCeLfxqCGJEdnD91JMxfRDuL6RW92b6 Gd3VE/Rx330NjxpAkMI0+Qo9rzCNAUxoMbKyiddsGQD0YcsAtqU05hMQXHQ1wgPnZlob4dpNQxBc Z7FJks/z/pdp9sYEc3AFX7cwZGbiDUE4CCewaYDxJ6akmEzcKMXLXXnNH/S7B3dNvfoIMY6r894B 6B5+C5CoxBvHeP8VVrGPRRj7E28QGmOMcQabenhHynmPPYJBXJAn/LXawErWKTEUb9iA4R/NtELP lSF9MtNKvW3PwwTCEBM9tfqHa79s4jWTbYHnxMt7sI3HK6pyhCTGCUBsAkLd8sKAwmIHIL558fnB PNYyGfQNMUkH4Ahyvy8RJukCO5ef924x1qgqR/heIdc7SnJBAxAh4G1hFa4wiRHGdToA5AD9Uv53 aPUbILp4lmPaLOAVshOmlG/yKhCGbuaUuALTrOqW80THW4WEkuEQoRPgvovhY0A4hDdIPCf+xBeA UbYlVx6o/AezBQ9DAiMhpRSvUgC6B++5w+ofU0hcIDQTWsGXtGcPaPEST3YBrUBeckbpAkSEvnMk x1N4wtCL5cIsscVLHLugpMsHJdnOutg9Qqz6gA4+cn5YCYRF/w2waJhIAl1Hktwwj9W8GbzinnLJ yiCsCoS/m0Tm8f+E8DlmQspXCWHVIPh9obcbcVZfKYDXAjHv3YXR9rrtvwADAIDmfLqP69/eAAAA AElFTkSuQmCC"
            height={55}
            width={66}
            overflow="visible"
            opacity={0.4}
          />
          <g id="g1262">
            <path
              id="path1260"
              d="M984.4 571.2h-18.6l-7.6 6.8-8.3-6.8h-16.2c-.8 0-1.5-.7-1.5-1.5v-33.1c0-.8.7-1.5 1.5-1.5h50.7c.8 0 1.5.7 1.5 1.5v33.1c0 .8-.7 1.5-1.5 1.5z"
              className="st17"
            />
          </g>
        </g>
        <path
          id="path1266"
          d="M976.3 564h-33.7c-1.5 0-2.7-1.2-2.7-2.7v-15.7c0-1.5 1.2-2.7 2.7-2.7h33.7c1.5 0 2.7 1.2 2.7 2.7v15.7c0 1.5-1.2 2.7-2.7 2.7z"
          className="st2"
        />
        <path
          id="path1268"
          d="M922.9 546.6l5.7 5.7c.4.4.4 1.1 0 1.6l-5.7 5.7c-.7.7-1.9.2-1.9-.8v-11.4c0-1 1.2-1.5 1.9-.8z"
          className="st16"
        />
        <path
          id="path1270"
          d="M154 552.9h-26.3c-4.6 0-8.3-3.7-8.3-8.3V378.4c0-5.1 4.1-9.3 9.3-9.3H615c10.8 0 16.3-4.9 16.3-13.3v-69.1c0-4.5-3.7-8.2-8.2-8.2l-30-.3"
          className="st15"
        />
        <path
          id="path1272"
          d="M925 552.9h-28.7c-3.4 0-6.2-3.4-6.2-7.7v-29.4l-.1 6.8v-9.2c0-6.8-4.9-14.3-13.3-14.3H119.9"
          className="st15"
        />
        <path
          id="path1274"
          d="M215.1 546.8h66.7c3.4 0 6.2 3.4 6.2 7.7l-.4 205.4V774h766.1c2.9 0 5.3-2.4 5.3-5.3V554.5c0-4.3-2.8-7.7-6.2-7.7h-66.7"
          className="st15"
        />
        <g id="g1282">
          <image
            id="image1276"
            transform="translate(1093 581)"
            xlinkHref="data:image/png;base64,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"
            height={93}
            width={175}
            overflow="visible"
            opacity={0.4}
          />
          <g
            id="g1280"
            onClick={() => {
              loadgraphs(0, "Pre-Tratamiento");
            }}>
            <path
              id="path1278"
              d="M1109.4 662.8v-26.6l-6.8-7.6 6.8-8.3v-28.2c0-.8.7-1.5 1.5-1.5H1257c.8 0 1.5.7 1.5 1.5v70.7c0 .8-.7 1.5-1.5 1.5h-146.1c-.8 0-1.5-.6-1.5-1.5z"
              className={
                (Number(props.dp0) <= Number(props.umbrales.ma0) &&
                Number(props.dp0) >= Number(props.umbrales.mi0)
                  ? " st1"
                  : " st33") + (props.selected === 0 ? " st34" : "")
              }
            />
          </g>
        </g>
        <path
          id="path1284"
          d="M1172.3 655h-48.7c-1.5 0-2.7-1.2-2.7-2.7v-11.7c0-1.5 1.2-2.7 2.7-2.7h48.7c1.5 0 2.7 1.2 2.7 2.7v11.7c0 1.5-1.2 2.7-2.7 2.7z"
          className="st2"
        />
        <path
          id="rect1286"
          className="st3"
          d="M1125 641H1172V656H1125z"
        />
        <text
          id="text1288"
          className="st7 st8 st9"
          transform="translate(1125 651.388)">
          {props.dp0}
        </text>
        <path
          id="rect1290"
          className="st3"
          d="M1181.6 641H1213V656H1181.6z"
        />
        <text
          id="text1292"
          className="st7 st8 st9"
          transform="translate(1181.633 651.388)">
          {"bar"}
        </text>
        <g id="g1306">
          <g id="g1302">
            <path
              id="rect1294"
              className="st3"
              d="M1122 600H1246V634.4H1122z"
            />
            <text
              id="text1300"
              transform="translate(1182.238 609.659)">
              <tspan
                id="tspan1296"
                className="st4 st5 st6"
                y={0}
                x={0}>
                {"P"}
              </tspan>
              <tspan
                id="tspan1298"
                className="st4 st5 st6"
                y={16}
                x={-48.6}>
                {"Pre-tratamiento"}
              </tspan>
            </text>
          </g>
          <path
            id="polygon1304"
            className="st28"
            d="M1171.3 609L1176.1 600.6 1180.8 609z"
          />
        </g>
        <g
          id="g1322"
          onClick={() => {
            notificacion(0, "Pre-tratamiento");
          }}>
          <g id="g1320">
            <path
              id="path1308"
              d="M1235 642c-.6 1.1-.8 2.3-.6 3.4 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z"
              className="st4"
            />
            <path
              id="path1310"
              d="M1233.3 641c-.9 1.5-1.1 3.2-.8 4.8 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-4 .7-1.3 1.8-2.2 3.1-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-3 1.6-3.8 3.1z"
              className="st4"
            />
            <path
              id="path1312"
              d="M1244.8 639.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.4s-1.5-1.7-2.5-2.2z"
              className="st4"
            />
            <path
              id="path1314"
              d="M1245.4 637.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.4 1.4 3.1 2.6.7 1.3.9 2.7.7 4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.3-.8-4.8-1-1.4-2.3-2.5-3.8-3.1z"
              className="st4"
            />
            <path
              id="path1316"
              d="M1246.3 647.1v-1.5c0-2.5-1.6-4.4-3.9-4.9v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.4.5-3.9 2.4-3.9 4.9v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h9.1c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1z"
              className="st4"
            />
            <path
              id="path1318"
              d="M1241.2 654.7c.9 0 1.7-.8 1.7-1.7h-3.4c.1.9.8 1.7 1.7 1.7z"
              className="st4"
            />
          </g>
        </g>
        <g id="g1332">
          <path
            id="path1324"
            d="M582.3 328.6h-45.8c-1 0-1.6-1.5-1.1-2.7l7.4-16.1c.2-.5.7-.8 1.1-.8H575c.4 0 .9.3 1.1.8l7.4 16.1c.4 1.2-.2 2.7-1.2 2.7z"
            className="st17"
          />
          <path
            id="path1326"
            d="M594.9 286.7h-37.3v-16.5h37.3c1.7 0 3.1 1.4 3.1 3.1v10.3c0 1.7-1.4 3.1-3.1 3.1z"
            className="st17"
          />
          <circle
            id="circle1328"
            r={24.3}
            cy={293.8}
            cx={559.2}
            className="st18"
          />
          <circle
            id="circle1330"
            r={17}
            cy={293.8}
            cx={559.2}
            className="st19"
          />
        </g>
        <path
          id="path1334"
          d="M522 1170h-25c-3.5 0-6.4-2.9-6.4-6.4v-45.1"
          className="st0"
        />
        <path
          id="path1336"
          d="M239.4 1238.6v-100.4c0-4.3-2.8-7.7-6.2-7.7h-24.8"
          className="st0"
        />
        <path
          id="path1338"
          d="M264.9 1272h20.4c4.3 0 7.7-2.8 7.7-6.2V1241"
          className="st0"
        />
        <path
          id="path1340"
          d="M865 1237h364.6c4.8 0 8.6 3.9 8.6 8.6v21.4"
          className="st15"
        />
        <path
          id="line1342"
          className="st0"
          d="M1005.5 885L1005.5 1003"
        />
        <path
          id="line1344"
          className="st0"
          d="M1198.5 971L1198.5 1003"
        />
        <g id="g1354">
          <path
            id="rect1346"
            className="st3"
            d="M1189 1188.1H1304V1223.1H1189z"
          />
          <text
            id="text1352"
            transform="translate(1211.53 1197.784)">
            <tspan
              id="tspan1348"
              className="st4 st5 st6"
              y={0}
              x={0}>
              {"Tranque"}
            </tspan>
            <tspan
              id="tspan1350"
              className="st4 st5 st6"
              y={17.3}
              x={-6.5}>
              {"Permeado"}
            </tspan>
          </text>
        </g>
        <path
          id="path1356"
          d="M664.9 1179.9h17.4c4.3 0 7.7-2.8 7.7-6.2v-163c0-2.6 2.1-4.7 4.7-4.7h535c4.8 0 8.6 3.9 8.6 8.6v21.4"
          className="st15"
        />
        <path
          id="path1358"
          d="M865 1346v-267"
          className="st15"
        />
        <path
          id="path1360"
          d="M509 1241H137.8c-4.9 0-8.8-4-8.8-8.8V883.1c0-5.4 4.3-9.8 9.7-9.9l137.2-.2c6.7-.1 12.1-5.7 12.1-12.4l-.4-31.5V760"
          className="st15"
        />
        <path
          id="path1362"
          d="M1107 989.2V883.1c0-5.4 4.3-9.8 9.7-9.9l171.2-.2c6.7-.1 12.1-5.7 12.1-12.4l-.4-30.5V289.3c0-6.8-5.5-12.3-12.3-12.3H778"
          className="st15"
        />
        <path
          id="path1364"
          d="M639.9 1259.9h17.4c4.3 0 7.7-2.8 7.7-6.2v-136.2c0-4.7-3.8-8.5-8.5-8.5h-16.6"
          className="st15"
        />
        <path
          id="path1366"
          d="M587 1150h-57.4c-4.3 0-7.7 2.8-7.7 6.2v136.2c0 4.7 3.8 8.5 8.5 8.5H587"
          className="st15"
        />
        <path
          id="path1368"
          d="M781 1059.9h-22.4c-4.3 0-7.7-2.8-7.7-6.2V1024"
          className="st15"
        />
        <path
          id="path1370"
          d="M916.9 1058.9h22.4c4.3 0 7.7-2.8 7.7-6.2v-46.9"
          className="st15"
        />
        <path
          id="path1372"
          d="M1113.6 990.9l-5.7 5.7c-.4.4-1.1.4-1.6 0l-5.7-5.7c-.7-.7-.2-1.9.8-1.9h11.4c1 0 1.5 1.2.8 1.9z"
          className="st16"
        />
        <g id="g1396">
          <path
            id="rect1374"
            className="st29"
            d="M1169.4 1051.8H1315.6000000000001V1060H1169.4z"
          />
          <path
            id="rect1376"
            className="st29"
            d="M1169.4 1062.5H1315.6000000000001V1070.7H1169.4z"
          />
          <path
            id="rect1378"
            className="st29"
            d="M1169.4 1073.1H1315.6000000000001V1081.3H1169.4z"
          />
          <path
            id="rect1380"
            className="st29"
            d="M1169.4 1083.8H1315.6000000000001V1092H1169.4z"
          />
          <path
            id="rect1382"
            className="st30"
            d="M1169.4 1094.5H1315.6000000000001V1102.7H1169.4z"
          />
          <path
            id="rect1384"
            className="st30"
            d="M1169.4 1105.2H1315.6000000000001V1113.4H1169.4z"
          />
          <path
            id="rect1386"
            className="st30"
            d="M1169.4 1115.9H1315.6000000000001V1124.1000000000001H1169.4z"
          />
          <path
            id="rect1388"
            className="st31"
            d="M1169.4 1126.5H1315.6000000000001V1134.7H1169.4z"
          />
          <path
            id="rect1390"
            className="st31"
            d="M1169.4 1137.2H1315.6000000000001V1145.4H1169.4z"
          />
          <path
            id="rect1392"
            className="st32"
            d="M1169.4 1147.9H1315.6000000000001V1156.1000000000001H1169.4z"
          />
          <path
            id="path1394"
            d="M1319.2 1175H1168c-3.3 0-6-2.7-6-6v-130.2c0-3.2 4.2-4.4 5.9-1.6l69.4 118c1.3 2.1 3.6 3.5 6 3.5h75.9c2.1 0 3.8 1.7 3.8 3.8v8.8c0 2-1.7 3.7-3.8 3.7z"
            className="st18"
          />
        </g>
        <path
          id="path1398"
          d="M1244.6 1035.9l-5.7 5.7c-.4.4-1.1.4-1.6 0l-5.7-5.7c-.7-.7-.2-1.9.8-1.9h11.4c1 0 1.5 1.2.8 1.9z"
          className="st16"
        />
        <path
          id="line1400"
          className="st0"
          d="M667.5 1228L711 1228"
        />
        <g id="g1410">
          <path
            id="path1402"
            d="M624.3 1159.6h-45.8c-1 0-1.6-1.5-1.1-2.7l7.4-16.1c.2-.5.7-.8 1.1-.8H617c.4 0 .9.3 1.1.8l7.4 16.1c.4 1.2-.2 2.7-1.2 2.7z"
            className="st17"
          />
          <path
            id="path1404"
            d="M636.9 1117.7h-37.3v-16.5h37.3c1.7 0 3.1 1.4 3.1 3.1v10.3c0 1.7-1.4 3.1-3.1 3.1z"
            className="st17"
          />
          <circle
            id="circle1406"
            r={24.3}
            cy={1124.8}
            cx={601.2}
            className="st18"
          />
          <circle
            id="circle1408"
            r={17}
            cy={1124.8}
            cx={601.2}
            className="st19"
          />
        </g>
        <g id="g1420">
          <path
            id="path1412"
            d="M624.3 1310.6h-45.8c-1 0-1.6-1.5-1.1-2.7l7.4-16.1c.2-.5.7-.8 1.1-.8H617c.4 0 .9.3 1.1.8l7.4 16.1c.4 1.2-.2 2.7-1.2 2.7z"
            className="st17"
          />
          <path
            id="path1414"
            d="M636.9 1268.7h-37.3v-16.5h37.3c1.7 0 3.1 1.4 3.1 3.1v10.3c0 1.7-1.4 3.1-3.1 3.1z"
            className="st17"
          />
          <circle
            id="circle1416"
            r={24.3}
            cy={1275.8}
            cx={601.2}
            className="st18"
          />
          <circle
            id="circle1418"
            r={17}
            cy={1275.8}
            cx={601.2}
            className="st19"
          />
        </g>
        <path
          id="path1422"
          d="M510.9 1234.6l5.7 5.7c.4.4.4 1.1 0 1.6l-5.7 5.7c-.7.7-1.9.2-1.9-.8v-11.4c0-1 1.2-1.5 1.9-.8z"
          className="st16"
        />
        <path
          id="line1424"
          className="st0"
          d="M130.9 1021.6L151 1021.6"
        />
        <path
          id="line1426"
          className="st0"
          d="M130.9 941.6L151 941.6"
        />
        <g id="g1436">
          <path
            id="rect1428"
            className="st3"
            d="M369 1147.6H471V1175.1H369z"
          />
          <text
            id="text1434"
            transform="translate(390.308 1157.23)">
            <tspan
              id="tspan1430"
              className="st4 st5 st6"
              y={0}
              x={0}>
              {"Filtro de"}
            </tspan>
            <tspan
              id="tspan1432"
              className="st4 st5 st6"
              y={15}
              x={-2.9}>
              {"Cartucho"}
            </tspan>
          </text>
        </g>
        <path
          id="line1438"
          className="st0"
          d="M1059.3 1240.3L1059.3 1265"
        />
        <path
          id="rect1440"
          className="st3"
          d="M139 1106.5H251V1115.5H139z"
        />
        <text
          id="text1442"
          className="st7 st13 st14"
          transform="translate(144.667 1115.404)">
          {"Metabisulfito"}
        </text>
        <path
          id="path1444"
          d="M217.6 1213h-44.3c-1.1 0-2-.9-2-2v-72.3c0-1.1.9-2 2-2h44.3c1.1 0 2 .9 2 2v72.3c0 1.1-.9 2-2 2z"
          className="st20"
        />
        <g id="g1450">
          <path
            id="path1446"
            d="M216.1 1126.8v11.4c0 .6-.5 1.1-1.1 1.1h-11c-.6 0-1.1-.5-1.1-1.1v-11.4c0-.6.5-1.1 1.1-1.1h11c.6-.1 1.1.4 1.1 1.1z"
            className="st18"
          />
          <path
            id="path1448"
            d="M222.1 1136.7v5.2c0 .6-.5 1.1-1.1 1.1h-51.7c-.6 0-1.1-.5-1.1-1.1v-5.2c0-.6.5-1.1 1.1-1.1H221c.6 0 1.1.5 1.1 1.1z"
            className="st18"
          />
        </g>
        <path
          id="rect1452"
          className="st3"
          d="M194.1 1370H319.3V1382H194.1z"
        />
        <text
          id="text1454"
          className="st7 st13 st14"
          transform="translate(197.873 1378.904)">
          {"Antiincrustante"}
        </text>
        <path
          id="path1456"
          d="M279.6 1357h-44.3c-1.1 0-2-.9-2-2v-72.3c0-1.1.9-2 2-2h44.3c1.1 0 2 .9 2 2v72.3c0 1.1-.9 2-2 2z"
          className="st20"
        />
        <g id="g1462">
          <path
            id="path1458"
            d="M278.1 1268.8v11.4c0 .6-.5 1.1-1.1 1.1h-11c-.6 0-1.1-.5-1.1-1.1v-11.4c0-.6.5-1.1 1.1-1.1h11c.6-.1 1.1.4 1.1 1.1z"
            className="st18"
          />
          <path
            id="path1460"
            d="M284.1 1280.7v5.2c0 .6-.5 1.1-1.1 1.1h-51.7c-.6 0-1.1-.5-1.1-1.1v-5.2c0-.6.5-1.1 1.1-1.1H283c.6 0 1.1.5 1.1 1.1z"
            className="st18"
          />
        </g>
        <path
          id="path1464"
          d="M446 1199c0-9.9-11.6-18-26-18s-26 8.1-26 18h.2c-.1.5-.2 1-.2 1.6v50.1c0 5.2 5 9.5 11.3 10.1v9.2h7.7v-9.1h13.3v9.1h7.7v-9.2c6.6-.3 11.9-4.7 11.9-10.1v-50.1c0-.5-.1-1.1-.2-1.6h.3z"
          className="st18"
        />
        <path
          id="line1466"
          className="st11"
          d="M865.2 1378.8L865.2 1354"
        />
        <path
          id="path1468"
          d="M876.6 1344.3c1.2 1.2 1.2 3.3 0 4.5l-9.1 9.1c-1.2 1.2-3.3 1.2-4.5 0l-9.1-9.1c-1.2-1.2-1.2-3.3 0-4.5"
          className="st17"
        />
        <g id="g1478">
          <path
            id="rect1470"
            className="st3"
            d="M1189 1425.1H1304V1460.1H1189z"
          />
          <text
            id="text1476"
            transform="translate(1211.53 1434.784)">
            <tspan
              id="tspan1472"
              className="st4 st5 st6"
              y={0}
              x={0}>
              {"Tranque"}
            </tspan>
            <tspan
              id="tspan1474"
              className="st4 st5 st6"
              y={17.3}
              x={-15.8}>
              {"Decantador"}
            </tspan>
          </text>
        </g>
        <g id="g1502">
          <path
            id="rect1480"
            className="st29"
            d="M1169.4 1288.8H1315.6000000000001V1297H1169.4z"
          />
          <path
            id="rect1482"
            className="st29"
            d="M1169.4 1299.5H1315.6000000000001V1307.7H1169.4z"
          />
          <path
            id="rect1484"
            className="st29"
            d="M1169.4 1310.1H1315.6000000000001V1318.3H1169.4z"
          />
          <path
            id="rect1486"
            className="st29"
            d="M1169.4 1320.8H1315.6000000000001V1329H1169.4z"
          />
          <path
            id="rect1488"
            className="st30"
            d="M1169.4 1331.5H1315.6000000000001V1339.7H1169.4z"
          />
          <path
            id="rect1490"
            className="st30"
            d="M1169.4 1342.2H1315.6000000000001V1350.4H1169.4z"
          />
          <path
            id="rect1492"
            className="st30"
            d="M1169.4 1352.9H1315.6000000000001V1361.1000000000001H1169.4z"
          />
          <path
            id="rect1494"
            className="st31"
            d="M1169.4 1363.5H1315.6000000000001V1371.7H1169.4z"
          />
          <path
            id="rect1496"
            className="st31"
            d="M1169.4 1374.2H1315.6000000000001V1382.4H1169.4z"
          />
          <path
            id="rect1498"
            className="st32"
            d="M1169.4 1384.9H1315.6000000000001V1393.1000000000001H1169.4z"
          />
          <path
            id="path1500"
            d="M1319.2 1412H1168c-3.3 0-6-2.7-6-6v-130.2c0-3.2 4.2-4.4 5.9-1.6l69.4 118c1.3 2.1 3.6 3.5 6 3.5h75.9c2.1 0 3.8 1.7 3.8 3.8v8.8c0 2-1.7 3.7-3.8 3.7z"
            className="st18"
          />
        </g>
        <path
          id="path1504"
          d="M1244.6 1268.9l-5.7 5.7c-.4.4-1.1.4-1.6 0l-5.7-5.7c-.7-.7-.2-1.9.8-1.9h11.4c1 0 1.5 1.2.8 1.9z"
          className="st16"
        />
        <g id="g1517">
          <linearGradient
            gradientTransform="rotate(-90 -1560.5 1328.606)"
            y2={3283.1062}
            x2={-1516.9988}
            y1={3335.1062}
            x1={-1516.9988}
            gradientUnits="userSpaceOnUse"
            id="SVGID_2_">
            <stop
              id="stop1506"
              offset={0}
              stopColor="#fbb03b"
            />
            <stop
              id="stop1508"
              offset={1}
              stopColor="#f15a24"
            />
          </linearGradient>
          <path
            id="rect1511"
            fill="url(#SVGID_2_)"
            d="M394 1281.1H446V1289.1H394z"
          />
          <path
            id="path1513"
            d="M447.8 1278.6l5.7 5.7c.4.4.4 1.1 0 1.6l-5.7 5.7c-.7.7-1.9.2-1.9-.8v-11.4c0-1 1.2-1.5 1.9-.8z"
            className="st26"
          />
          <path
            id="path1515"
            d="M393.2 1291.6l-5.7-5.7c-.4-.4-.4-1.1 0-1.6l5.7-5.7c.7-.7 1.9-.2 1.9.8v11.4c0 1-1.2 1.5-1.9.8z"
            className="st27"
          />
        </g>
        <g id="g1525">
          <image
            id="image1519"
            transform="translate(335 1288)"
            xlinkHref="data:image/png;base64,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"
            height={101}
            width={168}
            overflow="visible"
            opacity={0.4}
          />
          <g
            id="g1523"
            onClick={() => {
              loadgraphs(14, "F. Cartucho");
            }}>
            <path
              id="path1521"
              d="M344.4 1307.2c0-.8.7-1.5 1.5-1.5h66.3l8.4-8 8.7 8H492c.8 0 1.5.7 1.5 1.5v70.7c0 .8-.7 1.5-1.5 1.5H345.9c-.8 0-1.5-.7-1.5-1.5v-70.7z"
              className={
                (Number(props.dp1) <= Number(props.umbrales.ma14) &&
                Number(props.dp1) >= Number(props.umbrales.mi14)
                  ? " st1"
                  : " st33") + (props.selected === 14 ? " st34" : "")
              }
            />
          </g>
        </g>
        <path
          id="path1527"
          d="M407.3 1370h-48.7c-1.5 0-2.7-1.2-2.7-2.7v-11.7c0-1.5 1.2-2.7 2.7-2.7h48.7c1.5 0 2.7 1.2 2.7 2.7v11.7c0 1.5-1.2 2.7-2.7 2.7z"
          className="st2"
        />
        <path
          id="rect1529"
          className="st3"
          d="M360 1356H407V1371H360z"
        />
        <text
          id="text1531"
          className="st7 st8 st9"
          transform="translate(360 1366.388)">
          {props.dp1}
        </text>
        <path
          id="rect1533"
          className="st3"
          d="M416.6 1356H448V1371H416.6z"
        />
        <text
          id="text1535"
          className="st7 st8 st9"
          transform="translate(416.633 1366.388)">
          {"bar"}
        </text>
        <g id="g1549">
          <g id="g1545">
            <path
              id="rect1537"
              className="st3"
              d="M357 1318H481V1352.4H357z"
            />
            <text
              id="text1543"
              transform="translate(418.238 1327.659)">
              <tspan
                id="tspan1539"
                className="st4 st5 st6"
                y={0}
                x={0}>
                {"P"}
              </tspan>
              <tspan
                id="tspan1541"
                className="st4 st5 st6"
                y={16}
                x={-32}>
                {"F. Cartucho"}
              </tspan>
            </text>
          </g>
          <path
            id="polygon1547"
            className="st28"
            d="M406.3 1327L411.1 1318.6 415.8 1327z"
          />
        </g>
        <g
          id="g1565"
          onClick={() => {
            notificacion(14, "F. Cartucho");
          }}>
          <g id="g1563">
            <path
              id="path1551"
              d="M470 1357c-.6 1.1-.8 2.3-.6 3.4 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z"
              className="st4"
            />
            <path
              id="path1553"
              d="M468.3 1356c-.9 1.5-1.1 3.2-.8 4.8 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-4 .7-1.3 1.8-2.2 3.1-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-3 1.6-3.8 3.1z"
              className="st4"
            />
            <path
              id="path1555"
              d="M479.8 1354.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.4s-1.5-1.7-2.5-2.2z"
              className="st4"
            />
            <path
              id="path1557"
              d="M480.4 1352.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.4 1.4 3.1 2.6.7 1.3.9 2.7.7 4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.3-.8-4.8-1-1.4-2.3-2.5-3.8-3.1z"
              className="st4"
            />
            <path
              id="path1559"
              d="M481.3 1362.1v-1.5c0-2.5-1.6-4.4-3.9-4.9v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.4.5-3.9 2.4-3.9 4.9v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h9.1c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1z"
              className="st4"
            />
            <path
              id="path1561"
              d="M476.2 1369.7c.9 0 1.7-.8 1.7-1.7h-3.4c.1.9.8 1.7 1.7 1.7z"
              className="st4"
            />
          </g>
        </g>
        <g id="g1573">
          <image
            id="image1567"
            transform="translate(408 1027)"
            xlinkHref="data:image/png;base64,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"
            height={101}
            width={168}
            overflow="visible"
            opacity={0.4}
          />
          <g
            id="g1571"
            onClick={() => {
              loadgraphs(4, "Presión Entrada Bomba");
            }}>
            <path
              id="path1569"
              d="M566.6 1108.8c0 .8-.7 1.5-1.5 1.5h-66.3l-8.4 8-8.7-8H419c-.8 0-1.5-.7-1.5-1.5v-70.7c0-.8.7-1.5 1.5-1.5h146.1c.8 0 1.5.7 1.5 1.5v70.7z"
              className={
                (Number(props.pt219) <= Number(props.umbrales.ma4) &&
                Number(props.pt219) >= Number(props.umbrales.mi4)
                  ? " st1"
                  : " st33") + (props.selected === 4 ? " st34" : "")
              }
            />
          </g>
        </g>
        <path
          id="path1575"
          d="M480.3 1100h-48.7c-1.5 0-2.7-1.2-2.7-2.7v-11.7c0-1.5 1.2-2.7 2.7-2.7h48.7c1.5 0 2.7 1.2 2.7 2.7v11.7c0 1.5-1.2 2.7-2.7 2.7z"
          className="st2"
        />
        <path
          id="rect1577"
          className="st3"
          d="M433 1086H480V1101H433z"
        />
        <text
          id="text1579"
          className="st7 st8 st9"
          transform="translate(433 1096.388)">
          {props.pt219}
        </text>
        <path
          id="rect1581"
          className="st3"
          d="M489.6 1086H521V1101H489.6z"
        />
        <text
          id="text1583"
          className="st7 st8 st9"
          transform="translate(489.633 1096.388)">
          {"bar"}
        </text>
        <g id="g1595">
          <g id="g1593">
            <path
              id="rect1585"
              className="st3"
              d="M430 1047H554V1081.4H430z"
            />
            <text
              id="text1591"
              transform="translate(465.207 1056.659)">
              <tspan
                id="tspan1587"
                className="st4 st5 st6"
                y={0}
                x={0}>
                {"Presi\xF3n"}
              </tspan>
              <tspan
                id="tspan1589"
                className="st4 st5 st6"
                y={15}
                x={-28.5}>
                {"Entrada Bomba"}
              </tspan>
            </text>
          </g>
        </g>
        <g
          id="g1611"
          onClick={() => {
            notificacion(4, "Presión Entrada Bomba");
          }}>
          <g id="g1609">
            <path
              id="path1597"
              d="M533 1087c-.6 1.1-.8 2.3-.6 3.4 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z"
              className="st4"
            />
            <path
              id="path1599"
              d="M531.3 1086c-.9 1.5-1.1 3.2-.8 4.8 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-4 .7-1.3 1.8-2.2 3.1-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-3 1.6-3.8 3.1z"
              className="st4"
            />
            <path
              id="path1601"
              d="M542.8 1084.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.4-.6-1-1.5-1.7-2.5-2.2z"
              className="st4"
            />
            <path
              id="path1603"
              d="M543.4 1082.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.4 1.4 3.1 2.6.7 1.3.9 2.7.7 4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.3-.8-4.8-1-1.4-2.3-2.5-3.8-3.1z"
              className="st4"
            />
            <path
              id="path1605"
              d="M544.3 1092.1v-1.5c0-2.5-1.6-4.4-3.9-4.9v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.4.5-3.9 2.4-3.9 4.9v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h9.1c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1z"
              className="st4"
            />
            <path
              id="path1607"
              d="M539.2 1099.7c.9 0 1.7-.8 1.7-1.7h-3.4c.1.9.8 1.7 1.7 1.7z"
              className="st4"
            />
          </g>
        </g>
        <g id="g1619">
          <image
            id="image1613"
            transform="translate(975 1253)"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKwAAABlCAYAAADQ1gikAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABfFJREFUeNrsmg1v4kYURW3jACFk k22q9v//wFa7myzh067d3lFvJmNjSKKs8DnSEwQMEcPx850ZsgwAAD6GnCH48DGsGSKE/VXGLrcx zDtEra0AYT9tzArdL+x+HklaqcJ9Ou4bKRmCs7vqJFEu7CGqHGkR9jNkLSTnldVUY1no2FbMfVPb pnZWGdJ+jrD5yGWdquZNXet2qucyddRW1nVTz7otJO3eYsLYpa0/Qth8wP0xCFtovK4k6KKpm6aW up3ruUxStqL+VD1F4iLtf587T4hbnytsHk0wUjPjMU2wJpGst03dqb7osamO30nUx6a+W3SYSNqd unAVrSaMUVo/aSuNeeeJXA64BMaVRwKPIQpMNFYzRYBW1vumfmvqq+4vTdituup3HT/Tc620q6Y2 6rKHkWZaF9RXU7ySY1L2XP4Km/2WVpPEMs6lyhs+o0eBpTpqK+vvJu1SYrqwtybsTK9/UpfdmrDV yPKqL/sddPLu7ST2can7hM0TeS1MMLxLxMs4lyxsGIup5Fuqoz5Y3XcIe2MTs5B5H9Vlt/YFjSHL xsIGMXcai41utzY5fRWXyo4vyPNaGOyFdYuraBnnUqOBC+tx4E6dNXTXO8l4pdds9fd1NIa3JuzG suxYJl8eBfb6/BtNSFeqItGFk8LGE4ypfUFfVLca+JnFg3xkHfZGY3GvCuMSrxJcWwwIr7tT541z 7Jg6bG0xYKOxaE/iH9n/y4JVFAvCROxVhy2iL2ihL+RB3eTectnUhL30DjuxWLTQ5X+psbixFYIw ngeLT0HaG5N1PcJI4F0zrFM/S9ZvdrKHmBCuPoVuOyddfglc2ATjD8trN9nL3Z1LFtZXCcJmwdwi 0tzk9J2uic0DZhYJ1pbTfGlrLML6LuBPyerLgRuNUYhMnasEeccl8NYmGX/ajHg+ImGLSMBpVHE8 qrOXvzGYWpfdZS93vMa0rOXCrnXF8YnqSo/FzbAzEnhHiTvDvWR9sFgwBmHjaDCJlvjKnmW+uDv3 LduMTdhnk3UjURc2qU/GzbLjiykiacOkYWmTsOvoMnjJmwh5dnwzJU9EKz++krRVFAPGsmHgKwQ7 y6wbW1FxWYuoGf7bZVOrBFnUGcrs9Y89rkcmbErcYz/gzuxSVkSCjvE3BC5saZl1HkWrOF5lfZEg 1U1Su11hb/zSI0FfRMg6TvbsyDFj/+1AZUt/8Q5qvIua9026hkw8ip5L4pjI3+HYfKTCZifEquxU YfOOS2GqG8P7y37pn39otHoxMejrqn2XOySFt84FjjXIwcIC/JIgLCAsAMICICwgLADCAiAsICwA wgIgLCAsAMICICwgLADCAiAsICwAwgIgLCAsAMICICwgLADCAiAsICwAwgIgLCAsAMICICwgLADC AiAsICwAwgIgLCAsAMICICwgLADCAiAsICwAwgIgLCAsAMICICwgLADCAiAsICwAwgIgLCAsAMIC vLuwtaqPmuGDMxniVvKY8oQ3r6MaKjZASsQun3opB/6DKnrzyqol57uAgcK6O3WHY2cJG8t5aGpv tYtiBdLCkCt1JXfcpUNC4qPC1glRD6r2H2xU66audOxewiIrnNJhW2+e5VLwame+VV1Roezpqi5q +8arpp6amunYnV6fIyycmGH3cupRTq1M3l2HtC+ErU262i7/W50J7Zv+aGquYzYSF2HhXGE38uqb 3HqSa1uLCXWcAMqOlh2667O96VTHtGfCQsJOEBbOEPYgYVeS9S85FqSNu2xnhvWM4W8YMutWbXyu x4qMzQc4jcomXmtriH/LtZXc26diQdkTioOwpWXWn01dW3ct6LBwRoetrMt65OwSNhsi7FYvzqKQ PFV3JQ7AW2PBzuZJK6vtEGF9neygF2VR+77Sa7y7BhAXjomamiuFNf2wvLVVHYZEAl8lyKIzYS1R U7IiLJwibCxtvCl1SKwSdEqWWxWJyokC8I7RIN6uTW3bHu2KeULePHoc4L26bp0N/DHMMfH6MirS wntHhK7n3iQdosJHigtwOfwjwAD6LiQZq9HuSAAAAABJRU5ErkJggg=="
            height={101}
            width={172}
            overflow="visible"
            opacity={0.4}
          />
          <g
            id="g1617"
            onClick={() => {
              loadgraphs(8, "Caudal de Rechazo");
            }}>
            <path
              id="path1615"
              d="M985.7 1268.8h65.6l7.6-6.8 8.3 6.8h69.2c.8 0 1.5.7 1.5 1.5v73.1c0 .8-.7 1.5-1.5 1.5H985.7c-.8 0-1.5-.7-1.5-1.5v-73.1c0-.8.7-1.5 1.5-1.5z"
              className={
                (Number(props.fit227) <= Number(props.umbrales.ma8) &&
                Number(props.fit227) >= Number(props.umbrales.mi8)
                  ? " st1"
                  : " st33") + (props.selected === 8 ? " st34" : "")
              }
            />
          </g>
        </g>
        <path
          id="path1621"
          d="M1051.3 1334h-55.7c-1.5 0-2.7-1.2-2.7-2.7v-11.7c0-1.5 1.2-2.7 2.7-2.7h55.7c1.5 0 2.7 1.2 2.7 2.7v11.7c0 1.5-1.2 2.7-2.7 2.7z"
          className="st2"
        />
        <path
          id="rect1623"
          className="st3"
          d="M1002.6 1320H1054V1335H1002.6z"
        />
        <text
          id="text1625"
          className="st7 st8 st9"
          transform="translate(1002.633 1330.388)">
          {props.fit227}
        </text>
        <path
          id="rect1627"
          className="st3"
          d="M1058.6 1320H1102V1335H1058.6z"
        />
        <text
          id="text1629"
          className="st7 st8 st9"
          transform="translate(1058.633 1330.388)">
          {"m³/hr"}
        </text>
        <g id="g1639">
          <path
            id="rect1631"
            className="st3"
            d="M986 1280.4H1136V1308.5H986z"
          />
          <text
            id="text1637"
            transform="translate(1036.482 1290.083)">
            <tspan
              id="tspan1633"
              className="st4 st5 st6"
              y={0}
              x={0}>
              {"Caudal"}
            </tspan>
            <tspan
              id="tspan1635"
              className="st4 st5 st6"
              y={15}
              x={-16.4}>
              {"de Rechazo"}
            </tspan>
          </text>
        </g>
        <g
          id="g1655"
          onClick={() => {
            notificacion(8, "Caudal de Rechazo");
          }}>
          <g id="g1653">
            <path
              id="path1641"
              d="M1113 1322c-.6 1.1-.8 2.3-.6 3.4 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z"
              className="st4"
            />
            <path
              id="path1643"
              d="M1111.3 1321c-.9 1.5-1.1 3.2-.8 4.8 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-4 .7-1.3 1.8-2.2 3.1-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-3 1.6-3.8 3.1z"
              className="st4"
            />
            <path
              id="path1645"
              d="M1122.8 1319.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.4s-1.5-1.7-2.5-2.2z"
              className="st4"
            />
            <path
              id="path1647"
              d="M1123.4 1317.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.4 1.4 3.1 2.6.7 1.3.9 2.7.7 4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.3-.8-4.8-1-1.4-2.3-2.5-3.8-3.1z"
              className="st4"
            />
            <path
              id="path1649"
              d="M1124.3 1327.1v-1.5c0-2.5-1.6-4.4-3.9-4.9v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.4.5-3.9 2.4-3.9 4.9v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h9.1c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1z"
              className="st4"
            />
            <path
              id="path1651"
              d="M1119.2 1334.7c.9 0 1.7-.8 1.7-1.7h-3.4c.1.9.8 1.7 1.7 1.7z"
              className="st4"
            />
          </g>
        </g>
        <g id="g1663">
          <image
            id="image1657"
            transform="translate(1111 900)"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKwAAABaCAYAAAAl+r3cAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABbtJREFUeNrsmwtz4jYURiVjAmSz aaad2f//A7vNi5cB49ozV91vFdkYkrYbdM7MHcBgMxHHV/fKjnMAnwj/H+0D0EfzkfL5gc8iLnyk qM0YicsTovpEICt8tLRNFL3ilj2yhigSEcsLcKmsIY6JaFLSlgOyTixKibCtoESADygBOjFri4NE 2PZm374MG0S9sZhZTEXc4kSNCzBUox5F1H0blcXOwtn7vRlWy4CJiTpv41ZiYdun9hlKA7i0FKhN 1E7OTRtrCZeoaZu+kqCQ7NpJei9xZ9LOoiyLtHCOrCG7Vibrso0X8TG8H9ezg8LORNg/2vi9jQeT dm5ZNjRiAGMJEnbZdWuyPplPTkqEvT33Y0qCWNhO1m8m7r1tn1EWwDvKgcqm/xebzZ1IHEJn8MGS YGLGLyyjPpis3yTLzmx/hIVzhT2YsEubrZ3Vsqs2XqVHKvoyrB9YJQjS3ou4X+2LEBYuFXZrSc/Z 81dp6kuZvdXLpm8dVrPsTFYL7kzWr3bw0qXXZAH6hD2asKFmrcytufuxdNrb0Mc1bEpaFTfIu4ga L4e0MEJWJw1XqFlnkagpWXtr2L5sW7i3V72mZFi4MMOG1QC9glq4Ecuk5YkvUGmH7jFAWDgnyxY9 Tp3sh8oRX9J355Zz3AgD53PKp0GKE5l1zBcDXCqtO9c/rlLBpwJhAWEBEBYAYQFhARAWAGEBYQEQ FgBhAWEBEBYAYQFhARAWAGEBYQEQFgBhAWEBEBYAYQFhARAWAGEBYQEQFgBhAWEBEBYAYQFhARAW AGEBYQEQFgBhAWEBEBYAYQFhARAWAGEBYQEQFgBhIT9hGwsnj33vA5xLM+DVoF/liAPrAeIDIa5z /p0/XM6iprwaHJPyjC859sR7f7RrE9WfIWiTmbhDHo1KfuWAoOHgtcVBYi/7FplK6xMxJG7fbJXL LBX+xqP5s4+cCp4dh8al7Dn7m0jSncW2jU0bU/vcIUNhVdDCIn7uz5ypchA3FnZjsRW/VN4m5WYp G3w0oLUduLIDr9pYtjGzfUKWLTKR1ctjkHNiUcrzibyfkvUQJYM4s1xziaBj0Dn1ak6t7HVlXtXR yfzPmJQ9WUBlXduBn0TWbvs8U2GDjKXNNF3cWITXQVyfmLF2UexF3NG13BUIuzVZH82tV3NNpX0z FuVAFtjJWfBkP0iQ9Yu9zk1YL5k1iNqduAt5nEVjo9OgllVre76V6bDOSNidZdbOre8i7UbG480J nGq6wgFDdn2RmnVnZ8XCfpTJQM12rcKGEiDIemsn8J3FF9sexseZiFpahalwKVlllygNrnVZq04k xL/MtTAeB1mF6l0lOEZnwFoGfW+vby2LlNG05zMTdiay3rfxm2XLysSdy/iGmm1pP8qTxYvUb3FW udamS8sjLTlfRFgdi+NQSeCl4drJlBYyRGi6ptGUl1uGnYqwnZwPNjYbmeZvpYzayWz1aNmki2eZ BqsrFzZeKThETf3aYhPNNm6oJGiiFQKtv7bSWMRNRY4Z9kaEfRVh15Zt7yJhVzL1/WmPT7JfLhlW s2wttX0VNaLJ8qg8cQbEKwalLNv4zIR10XJWqGHvTMa1CLu07bOEsN8tQs22tGSwlzHPQVhNjqcu ILihpquJPqwZVxfJc5E0tayldawugG9k6g8Z1ouwz1YSPEZdcZXJKkEqMZ66mOJOCRsf8BgJ6l3e 9w7o0lYl01ll0gZhtYY9RM3Fs6w7bqMp0Lm87i1oIt+cu/BurUYasTqRUXOUVk/awv18b8U+WqqZ W73v3Y+F8rVl2lUk67U3W2NKBDfmZC0vPLB3ed9W6BNTWC3N6UpWUrysulTu54sFO5fHFa4xbp01 zcH7Mm2oafVybWhQtYk9uPwux/4rdRm8T1oVN3UDTHyrZh01WMiKsP9bM6aPPtFcaGfskBVhfwVx 48vVqf9VQlSE/RRjiqgAAPAL8rcAAwAppZBHgrEQYgAAAABJRU5ErkJggg=="
            height={90}
            width={172}
            overflow="visible"
            opacity={0.4}
          />
          <g
            id="g1661"
            onClick={() => {
              loadgraphs(11, "E.C. Mezcla");
            }}>
            <path
              id="path1659"
              d="M1272.4 974.2h-65.6l-7.6 6.8-8.3-6.8h-69.2c-.8 0-1.5-.7-1.5-1.5v-62.1c0-.8.7-1.5 1.5-1.5h150.7c.8 0 1.5.7 1.5 1.5v62.1c0 .8-.7 1.5-1.5 1.5z"
              className={
                (Number(props.ae235) <= Number(props.umbrales.ma11) &&
                Number(props.ae235) >= Number(props.umbrales.mi11)
                  ? " st1"
                  : " st33") + (props.selected === 11 ? " st34" : "")
              }
            />
          </g>
        </g>
        <path
          id="path1665"
          d="M1187.3 963h-55.7c-1.5 0-2.7-1.2-2.7-2.7v-11.7c0-1.5 1.2-2.7 2.7-2.7h55.7c1.5 0 2.7 1.2 2.7 2.7v11.7c0 1.5-1.2 2.7-2.7 2.7z"
          className="st2"
        />
        <path
          id="rect1667"
          className="st3"
          d="M1138.6 949H1190V964H1138.6z"
        />
        <text
          id="text1669"
          className="st7 st8 st9"
          transform="translate(1138.633 959.388)">
          {props.ae235}
        </text>
        <path
          id="rect1671"
          className="st3"
          d="M1194.6 949H1238V964H1194.6z"
        />
        <text
          id="text1673"
          className="st7 st8 st9"
          transform="translate(1194.633 959.388)">
          {"µS/cm"}
        </text>
        <g id="g1679">
          <path
            id="rect1675"
            className="st3"
            d="M1122 923.4H1272V951.5H1122z"
          />
          <text
            id="text1677"
            className="st4 st5 st6"
            transform="translate(1157.357 933.083)">
            {"E.C. Mezcla"}
          </text>
        </g>
        <g
          id="g1695"
          onClick={() => {
            notificacion(11, "E.C. Mezcla");
          }}>
          <g id="g1693">
            <path
              id="path1681"
              d="M1249 951c-.6 1.1-.8 2.3-.6 3.4 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z"
              className="st4"
            />
            <path
              id="path1683"
              d="M1247.3 950c-.9 1.5-1.1 3.2-.8 4.8 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-4 .7-1.3 1.8-2.2 3.1-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-3 1.6-3.8 3.1z"
              className="st4"
            />
            <path
              id="path1685"
              d="M1258.8 948.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.4s-1.5-1.7-2.5-2.2z"
              className="st4"
            />
            <path
              id="path1687"
              d="M1259.4 946.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.4 1.4 3.1 2.6.7 1.3.9 2.7.7 4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.3-.8-4.8-1-1.4-2.3-2.5-3.8-3.1z"
              className="st4"
            />
            <path
              id="path1689"
              d="M1260.3 956.1v-1.5c0-2.5-1.6-4.4-3.9-4.9v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.4.5-3.9 2.4-3.9 4.9v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h9.1c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1z"
              className="st4"
            />
            <path
              id="path1691"
              d="M1255.2 963.7c.9 0 1.7-.8 1.7-1.7h-3.4c.1.9.8 1.7 1.7 1.7z"
              className="st4"
            />
          </g>
        </g>
        <g id="g1703">
          <image
            id="image1697"
            transform="translate(908 900)"
            xlinkHref="data:image/png;base64,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 LpBHWzNVNgAAAABJRU5ErkJggg=="
            height={90}
            width={192}
            overflow="visible"
            opacity={0.4}
          />
          <g
            id="g1701"
            onClick={() => {
              loadgraphs(10, "E.C. Producción");
            }}>
            <path
              id="path1699"
              d="M1089.4 974.2h-75.6l-7.6 6.8-8.3-6.8h-79.2c-.8 0-1.5-.7-1.5-1.5v-62.1c0-.8.7-1.5 1.5-1.5h170.7c.8 0 1.5.7 1.5 1.5v62.1c0 .8-.7 1.5-1.5 1.5z"
              className={
                (Number(props.ae228) <= Number(props.umbrales.ma10) &&
                Number(props.ae228) >= Number(props.umbrales.mi10)
                  ? " st1"
                  : " st33") + (props.selected === 10 ? " st34" : "")
              }
            />
          </g>
        </g>
        <path
          id="path1705"
          d="M991.3 963h-55.7c-1.5 0-2.7-1.2-2.7-2.7v-11.7c0-1.5 1.2-2.7 2.7-2.7h55.7c1.5 0 2.7 1.2 2.7 2.7v11.7c0 1.5-1.2 2.7-2.7 2.7z"
          className="st2"
        />
        <path
          id="rect1707"
          className="st3"
          d="M942.6 949H994V964H942.6z"
        />
        <text
          id="text1709"
          className="st7 st8 st9"
          transform="translate(942.633 959.388)">
          {props.ae228}
        </text>
        <path
          id="rect1711"
          className="st3"
          d="M998.6 949H1042V964H998.6z"
        />
        <text
          id="text1713"
          className="st7 st8 st9"
          transform="translate(998.633 959.388)">
          {"µS/cm"}
        </text>
        <g id="g1719">
          <path
            id="rect1715"
            className="st3"
            d="M929.8 923.4H1079.8V951.5H929.8z"
          />
          <text
            id="text1717"
            className="st4 st5 st6"
            transform="translate(948.935 933.083)">
            {"E.C. Producto"}
          </text>
        </g>
        <g
          id="g1735"
          onClick={() => {
            notificacion(10, "E.C. Producción");
          }}>
          <g id="g1733">
            <path
              id="path1721"
              d="M1062 951c-.6 1.1-.8 2.3-.6 3.4 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z"
              className="st4"
            />
            <path
              id="path1723"
              d="M1060.3 950c-.9 1.5-1.1 3.2-.8 4.8 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-4 .7-1.3 1.8-2.2 3.1-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-3 1.6-3.8 3.1z"
              className="st4"
            />
            <path
              id="path1725"
              d="M1071.8 948.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.4s-1.5-1.7-2.5-2.2z"
              className="st4"
            />
            <path
              id="path1727"
              d="M1072.4 946.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.4 1.4 3.1 2.6.7 1.3.9 2.7.7 4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.3-.8-4.8-1-1.4-2.3-2.5-3.8-3.1z"
              className="st4"
            />
            <path
              id="path1729"
              d="M1073.3 956.1v-1.5c0-2.5-1.6-4.4-3.9-4.9v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.4.5-3.9 2.4-3.9 4.9v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h9.1c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1z"
              className="st4"
            />
            <path
              id="path1731"
              d="M1068.2 963.7c.9 0 1.7-.8 1.7-1.7h-3.4c.1.9.8 1.7 1.7 1.7z"
              className="st4"
            />
          </g>
        </g>
        <g
          id="g1743"
          onClick={() => {
            loadgraphs(20, "Caudal de producción");
          }}>
          <image
            id="image1737"
            transform="translate(908 811)"
            xlinkHref="data:image/png;base64,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 LpBHWzNVNgAAAABJRU5ErkJggg=="
            height={90}
            width={192}
            overflow="visible"
            opacity={0.4}
          />
          <g id="g1741">
            <path
              id="path1739"
              d="M1089.4 885.2h-75.6l-7.6 6.8-8.3-6.8h-79.2c-.8 0-1.5-.7-1.5-1.5v-62.1c0-.8.7-1.5 1.5-1.5h170.7c.8 0 1.5.7 1.5 1.5v62.1c0 .8-.7 1.5-1.5 1.5z"
              className={
                (Number((props.fit215 - props.fit227).toFixed(1)) <=
                  Number(props.umbrales.ma20) &&
                Number((props.fit215 - props.fit227).toFixed(1)) >=
                  Number(props.umbrales.mi20)
                  ? " st1"
                  : " st33") + (props.selected === 20 ? " st34" : "")
              }
            />
          </g>
        </g>

        <path
          id="path1745"
          d="M991.3 874h-55.7c-1.5 0-2.7-1.2-2.7-2.7v-11.7c0-1.5 1.2-2.7 2.7-2.7h55.7c1.5 0 2.7 1.2 2.7 2.7v11.7c0 1.5-1.2 2.7-2.7 2.7z"
          className="st2"
        />
        <path
          id="rect1747"
          className="st3"
          d="M942.6 860H994V875H942.6z"
        />
        <text
          id="text1749"
          className="st7 st8 st9"
          transform="translate(942.633 870.388)">
          {props.fit215 - props.fit227 === 0
            ? 0
            : (props.fit215 - props.fit227).toFixed(1)}
        </text>
        <path
          id="rect1751"
          className="st3"
          d="M998.6 860H1042V875H998.6z"
        />
        <text
          id="text1753"
          className="st7 st8 st9"
          transform="translate(998.633 870.388)">
          {"m³/hr"}
        </text>
        <g id="g1759">
          <path
            id="rect1755"
            className="st3"
            d="M923.3 834.4H1086.3V862.5H923.3z"
          />
          <text
            id="text1757"
            className="st4 st5 st6"
            transform="translate(926.51 844.083)">
            {"Caudal de Producto"}
          </text>
        </g>
        <g
          id="g1775"
          onClick={() => {
            notificacion(20, "Caudal de Producción");
          }}>
          <g id="g1773">
            <path
              id="path1761"
              d="M1062 862c-.6 1.1-.8 2.3-.6 3.4 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z"
              className="st4"
            />
            <path
              id="path1763"
              d="M1060.3 861c-.9 1.5-1.1 3.2-.8 4.8 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-4 .7-1.3 1.8-2.2 3.1-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-3 1.6-3.8 3.1z"
              className="st4"
            />
            <path
              id="path1765"
              d="M1071.8 859.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.4s-1.5-1.7-2.5-2.2z"
              className="st4"
            />
            <path
              id="path1767"
              d="M1072.4 857.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.4 1.4 3.1 2.6.7 1.3.9 2.7.7 4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.3-.8-4.8-1-1.4-2.3-2.5-3.8-3.1z"
              className="st4"
            />
            <path
              id="path1769"
              d="M1073.3 867.1v-1.5c0-2.5-1.6-4.4-3.9-4.9v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.4.5-3.9 2.4-3.9 4.9v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h9.1c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1z"
              className="st4"
            />
            <path
              id="path1771"
              d="M1068.2 874.7c.9 0 1.7-.8 1.7-1.7h-3.4c.1.9.8 1.7 1.7 1.7z"
              className="st4"
            />
          </g>
        </g>
        <g id="g1819">
          <g id="g1783">
            <image
              id="image1777"
              transform="translate(678 1186)"
              xlinkHref="data:image/png;base64,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 AAAASUVORK5CYII="
              height={83}
              width={179}
              overflow="visible"
              opacity={0.4}
            />
            <g
              id="g1781"
              onClick={() => {
                loadgraphs(5, "Presión Ósmosis");
              }}>
              <path
                id="path1779"
                d="M694.4 1257.8v-21.6l-6.8-7.6 6.8-8.3v-23.2c0-.8.7-1.5 1.5-1.5H846c.8 0 1.5.7 1.5 1.5v60.7c0 .8-1.7 1.5-2.5 1.5H695.9c-.8 0-1.5-.6-1.5-1.5z"
                className={
                  (Number(props.pt223) <= Number(props.umbrales.ma5) &&
                  Number(props.pt223) >= Number(props.umbrales.mi5)
                    ? " st1"
                    : " st33") + (props.selected === 5 ? " st34" : "")
                }
              />
            </g>
          </g>
          <path
            id="path1785"
            d="M757.3 1249h-48.7c-1.5 0-2.7-1.2-2.7-2.7v-11.7c0-1.5 1.2-2.7 2.7-2.7h48.7c1.5 0 2.7 1.2 2.7 2.7v11.7c0 1.5-1.2 2.7-2.7 2.7z"
            className="st2"
          />
          <path
            id="rect1787"
            className="st3"
            d="M710 1235H757V1250H710z"
          />
          <text
            id="text1789"
            className="st7 st8 st9"
            transform="translate(710 1245.388)">
            {props.pt223}
          </text>
          <path
            id="rect1791"
            className="st3"
            d="M766.6 1235H798V1250H766.6z"
          />
          <text
            id="text1793"
            className="st7 st8 st9"
            transform="translate(766.633 1245.388)">
            {"bar"}
          </text>
          <g id="g1801">
            <g id="g1799">
              <path
                id="rect1795"
                className="st3"
                d="M709 1208H833V1225H709z"
              />
              <text
                id="text1797"
                className="st4 st5 st6"
                transform="translate(712.195 1217.659)">
                {"Presi\xF3n \xD3smosis"}
              </text>
            </g>
          </g>
          <g
            id="g1817"
            onClick={() => {
              notificacion(5, "Presion Ósmosis");
            }}>
            <g id="g1815">
              <path
                id="path1803"
                d="M820 1238c-.6 1.1-.8 2.3-.6 3.4 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z"
                className="st4"
              />
              <path
                id="path1805"
                d="M818.3 1237c-.9 1.5-1.1 3.2-.8 4.8 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-4 .7-1.3 1.8-2.2 3.1-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-3 1.6-3.8 3.1z"
                className="st4"
              />
              <path
                id="path1807"
                d="M829.8 1235.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.4-.6-1-1.5-1.7-2.5-2.2z"
                className="st4"
              />
              <path
                id="path1809"
                d="M830.4 1233.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.4 1.4 3.1 2.6.7 1.3.9 2.7.7 4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.3-.8-4.8-1-1.4-2.3-2.5-3.8-3.1z"
                className="st4"
              />
              <path
                id="path1811"
                d="M831.3 1243.1v-1.5c0-2.5-1.6-4.4-3.9-4.9v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.4.5-3.9 2.4-3.9 4.9v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h9.1c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1z"
                className="st4"
              />
              <path
                id="path1813"
                d="M826.2 1250.7c.9 0 1.7-.8 1.7-1.7h-3.4c.1.9.8 1.7 1.7 1.7z"
                className="st4"
              />
            </g>
          </g>
        </g>
        <path
          id="line1821"
          className="st0"
          d="M865.5 1139L909 1139"
        />
        <g id="g1865">
          <g id="g1829">
            <image
              id="image1823"
              transform="translate(876 1097)"
              xlinkHref="data:image/png;base64,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 AAAASUVORK5CYII="
              height={83}
              width={179}
              overflow="visible"
              opacity={0.4}
            />
            <g
              id="g1827"
              onClick={() => {
                loadgraphs(6, "Presión Rechazo");
              }}>
              <path
                id="path1825"
                d="M892.4 1168.8v-21.6l-6.8-7.6 6.8-8.3v-23.2c0-.8.7-1.5 1.5-1.5H1044c.8 0 1.5.7 1.5 1.5v60.7c0 .8-1.7 1.5-2.5 1.5H893.9c-.8 0-1.5-.6-1.5-1.5z"
                className={
                  (Number(props.pt234) <= Number(props.umbrales.ma6) &&
                  Number(props.pt234) >= Number(props.umbrales.mi6)
                    ? " st1"
                    : " st33") + (props.selected === 6 ? " st34" : "")
                }
              />
            </g>
          </g>
          <path
            id="path1831"
            d="M955.3 1160h-48.7c-1.5 0-2.7-1.2-2.7-2.7v-11.7c0-1.5 1.2-2.7 2.7-2.7h48.7c1.5 0 2.7 1.2 2.7 2.7v11.7c0 1.5-1.2 2.7-2.7 2.7z"
            className="st2"
          />
          <path
            id="rect1833"
            className="st3"
            d="M908 1146H955V1161H908z"
          />
          <text
            id="text1835"
            className="st7 st8 st9"
            transform="translate(908 1156.388)">
            {props.pt234}
          </text>
          <path
            id="rect1837"
            className="st3"
            d="M964.6 1146H996V1161H964.6z"
          />
          <text
            id="text1839"
            className="st7 st8 st9"
            transform="translate(964.633 1156.388)">
            {"bar"}
          </text>
          <g id="g1847">
            <g id="g1845">
              <path
                id="rect1841"
                className="st3"
                d="M907 1119H1031V1136H907z"
              />
              <text
                id="text1843"
                className="st4 st5 st6"
                transform="translate(910.059 1128.659)">
                {"Presi\xF3n Rechazo"}
              </text>
            </g>
          </g>
          <g
            id="g1863"
            onClick={() => {
              notificacion(6, "Presión Rechazo");
            }}>
            <g id="g1861">
              <path
                id="path1849"
                d="M1018 1149c-.6 1.1-.8 2.3-.6 3.4 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z"
                className="st4"
              />
              <path
                id="path1851"
                d="M1016.3 1148c-.9 1.5-1.1 3.2-.8 4.8 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-4 .7-1.3 1.8-2.2 3.1-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-3 1.6-3.8 3.1z"
                className="st4"
              />
              <path
                id="path1853"
                d="M1027.8 1146.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.4s-1.5-1.7-2.5-2.2z"
                className="st4"
              />
              <path
                id="path1855"
                d="M1028.4 1144.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.4 1.4 3.1 2.6.7 1.3.9 2.7.7 4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.3-.8-4.8-1-1.4-2.3-2.5-3.8-3.1z"
                className="st4"
              />
              <path
                id="path1857"
                d="M1029.3 1154.1v-1.5c0-2.5-1.6-4.4-3.9-4.9v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.4.5-3.9 2.4-3.9 4.9v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h9.1c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1z"
                className="st4"
              />
              <path
                id="path1859"
                d="M1024.2 1161.7c.9 0 1.7-.8 1.7-1.7h-3.4c.1.9.8 1.7 1.7 1.7z"
                className="st4"
              />
            </g>
          </g>
        </g>
        <g id="g1875">
          <path
            id="path1867"
            d="M742.7 987h155.1c4 0 7.3 3.1 7.3 7v24.3c0 3.8-3.3 7-7.3 7l-155.2-36.9c-.9-.3-.7-1.4.1-1.4z"
            className="st2"
          />
          <path
            id="path1869"
            d="M899.3 1025h-155c-4 0-7.3-3.1-7.3-7v-24.3c0-3.8 3.3-7 7.3-7l155.2 36.9c.8.3.6 1.4-.2 1.4z"
            className="st18"
          />
          <path
            id="path1871"
            d="M897.8 1025H744c-3.8 0-7-3.1-7-7v-24.3c0-3.8 3.1-7 7-7h153.8c3.8 0 7 3.1 7 7v24.3c0 3.9-3.2 7-7 7z"
            className="st21"
          />
          <path
            id="line1873"
            className="st21"
            d="M743 987L901 1024"
          />
        </g>
        <g id="g1885">
          <path
            id="path1877"
            d="M774.7 1040h155.1c4 0 7.3 3.1 7.3 7v24.3c0 3.8-3.3 7-7.3 7l-155.2-36.9c-.9-.3-.7-1.4.1-1.4z"
            className="st2"
          />
          <path
            id="path1879"
            d="M931.3 1078h-155c-4 0-7.3-3.1-7.3-7v-24.3c0-3.8 3.3-7 7.3-7l155.2 36.9c.8.3.6 1.4-.2 1.4z"
            className="st18"
          />
          <path
            id="path1881"
            d="M929.8 1078H776c-3.8 0-7-3.1-7-7v-24.3c0-3.8 3.1-7 7-7h153.8c3.8 0 7 3.1 7 7v24.3c0 3.9-3.2 7-7 7z"
            className="st21"
          />
          <path
            id="line1883"
            className="st21"
            d="M775 1040L933 1077"
          />
        </g>
        <g id="g1967">
          <g id="g1893">
            <image
              id="image1887"
              transform="translate(141 898)"
              xlinkHref="data:image/png;base64,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"
              height={83}
              width={194}
              overflow="visible"
              opacity={0.4}
            />
            <g
              id="g1891"
              onClick={() => {
                loadgraphs(7, "Caudal alimentación");
              }}>
              <path
                id="path1889"
                d="M157.4 969.8v-21.6l-6.8-7.6 6.8-8.3v-23.2c0-.8.7-1.5 1.5-1.5H324c.8 0 1.5.7 1.5 1.5v60.7c0 .8-1.7 1.5-2.5 1.5H158.9c-.8 0-1.5-.6-1.5-1.5z"
                className={
                  (Number(props.fit215) <= Number(props.umbrales.ma7) &&
                  Number(props.fit215) >= Number(props.umbrales.mi7)
                    ? " st1"
                    : " st33") + (props.selected === 7 ? " st34" : "")
                }
              />
            </g>
          </g>
          <g id="g1901">
            <image
              id="image1895"
              transform="translate(141 979)"
              xlinkHref="data:image/png;base64,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"
              height={83}
              width={194}
              overflow="visible"
              opacity={0.4}
            />
            <g
              id="g1899"
              onClick={() => {
                loadgraphs(9, "E.C. Alimentación");
              }}>
              <path
                id="path1897"
                d="M157.4 1050.8v-21.6l-6.8-7.6 6.8-8.3v-23.2c0-.8.7-1.5 1.5-1.5H324c.8 0 1.5.7 1.5 1.5v60.7c0 .8-1.7 1.5-2.5 1.5H158.9c-.8 0-1.5-.6-1.5-1.5z"
                className={
                  (Number(props.ae217) <= Number(props.umbrales.ma9) &&
                  Number(props.ae217) >= Number(props.umbrales.mi9)
                    ? " st1"
                    : " st33") + (props.selected === 9 ? " st34" : "")
                }
              />
            </g>
          </g>
          <path
            id="path1903"
            d="M229.3 1044h-55.7c-1.5 0-2.7-1.2-2.7-2.7v-11.7c0-1.5 1.2-2.7 2.7-2.7h55.7c1.5 0 2.7 1.2 2.7 2.7v11.7c0 1.5-1.2 2.7-2.7 2.7z"
            className="st2"
          />
          <path
            id="rect1905"
            className="st3"
            d="M179.6 1030H231V1045H179.6z"
          />
          <text
            id="text1907"
            className="st7 st8 st9"
            transform="translate(179.633 1040.388)">
            {props.ae217}
          </text>
          <path
            id="rect1909"
            className="st3"
            d="M240.6 1029H266V1044H240.6z"
          />
          <text
            id="text1911"
            className="st7 st8 st9"
            transform="translate(240.633 1039.388)">
            {"µS/cm"}
          </text>
          <path
            id="rect1913"
            className="st3"
            d="M235 948H291V963H235z"
          />
          <text
            id="text1915"
            className="st7 st8 st9"
            transform="translate(235 958.388)">
            {"m³/hr"}
          </text>
          <g id="g1921">
            <path
              id="rect1917"
              className="st3"
              d="M192 1002.4H286V1012.4H192z"
            />
            <text
              id="text1919"
              className="st4 st5 st6"
              transform="translate(195.84 1012.083)">
              {"E.C. Alimentación"}
            </text>
          </g>
          <path
            id="path1923"
            d="M226.3 963h-55.7c-1.5 0-2.7-1.2-2.7-2.7v-11.7c0-1.5 1.2-2.7 2.7-2.7h55.7c1.5 0 2.7 1.2 2.7 2.7v11.7c0 1.5-1.2 2.7-2.7 2.7z"
            className="st2"
          />
          <path
            id="rect1925"
            className="st3"
            d="M177.6 949H229V964H177.6z"
          />
          <text
            id="text1927"
            className="st7 st8 st9"
            transform="translate(177.633 959.388)">
            {props.fit215}
          </text>
          <g id="g1933">
            <path
              id="rect1929"
              className="st3"
              d="M168 921.4H318V949.5H168z"
            />
            <text
              id="text1931"
              className="st4 st5 st6"
              transform="translate(177.416 931.083)">
              {"Caudal Alimentación"}
            </text>
          </g>
          <g
            id="g1949"
            onClick={() => {
              notificacion(7, "Caudal Alimentación");
            }}>
            <g id="g1947">
              <path
                id="path1935"
                d="M297 950c-.6 1.1-.8 2.3-.6 3.4 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z"
                className="st4"
              />
              <path
                id="path1937"
                d="M295.3 949c-.9 1.5-1.1 3.2-.8 4.8 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-4 .7-1.3 1.8-2.2 3.1-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-3 1.6-3.8 3.1z"
                className="st4"
              />
              <path
                id="path1939"
                d="M306.8 947.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.4s-1.5-1.7-2.5-2.2z"
                className="st4"
              />
              <path
                id="path1941"
                d="M307.4 945.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.4 1.4 3.1 2.6.7 1.3.9 2.7.7 4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.3-.8-4.8-1-1.4-2.3-2.5-3.8-3.1z"
                className="st4"
              />
              <path
                id="path1943"
                d="M308.3 955.1v-1.5c0-2.5-1.6-4.4-3.9-4.9v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.4.5-3.9 2.4-3.9 4.9v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h9.1c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1z"
                className="st4"
              />
              <path
                id="path1945"
                d="M303.2 962.7c.9 0 1.7-.8 1.7-1.7h-3.4c.1.9.8 1.7 1.7 1.7z"
                className="st4"
              />
            </g>
          </g>
          <g
            id="g1965"
            onClick={() => {
              notificacion(9, "E. C. Alimentación");
            }}>
            <g id="g1963">
              <path
                id="path1951"
                d="M290 1031c-.6 1.1-.8 2.3-.6 3.4 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z"
                className="st4"
              />
              <path
                id="path1953"
                d="M288.3 1030c-.9 1.5-1.1 3.2-.8 4.8 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-4 .7-1.3 1.8-2.2 3.1-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-3 1.6-3.8 3.1z"
                className="st4"
              />
              <path
                id="path1955"
                d="M299.8 1028.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.4s-1.5-1.7-2.5-2.2z"
                className="st4"
              />
              <path
                id="path1957"
                d="M300.4 1026.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.4 1.4 3.1 2.6.7 1.3.9 2.7.7 4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.3-.8-4.8-1-1.4-2.3-2.5-3.8-3.1z"
                className="st4"
              />
              <path
                id="path1959"
                d="M301.3 1036.1v-1.5c0-2.5-1.6-4.4-3.9-4.9v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.4.5-3.9 2.4-3.9 4.9v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h9.1c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1z"
                className="st4"
              />
              <path
                id="path1961"
                d="M296.2 1043.7c.9 0 1.7-.8 1.7-1.7h-3.4c.1.9.8 1.7 1.7 1.7z"
                className="st4"
              />
            </g>
          </g>
        </g>
      </g>

      <g
        transform="translate(-412.573 -7.185)"
        id="g856-2"
        onClick={() => {
          loadgraphs(12, "Recuperación RO");
        }}>
        <image
          width={176}
          height={94}
          xlinkHref="data:image/png;base64,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 AABfnH8EGABxPKn+He59OAAAAABJRU5ErkJggg=="
          transform="translate(1109 898)"
          id="image848-3"
          overflow="visible"
          opacity={0.4}
        />
        <g id="g854-6">
          <path
            className={
              (Number(props.rpro) <= Number(props.umbrales.ma12) &&
              Number(props.rpro) >= Number(props.umbrales.mi12)
                ? " st1"
                : " st33") + (props.selected === 12 ? " st34" : "")
            }
            d="M1272.4 974.2h-65.6l-7.6 6.8-8.3-6.8h-69.2c-.8 0-1.5-.7-1.5-1.5v-62.1c0-.8.7-1.5 1.5-1.5h150.7c.8 0 1.5.7 1.5 1.5v62.1c0 .8-.7 1.5-1.5 1.5z"
            id="path850-5"
          />
        </g>
      </g>
      <path
        className="st3"
        d="M775.521 956.417h-55.7c-1.5 0-2.7-1.2-2.7-2.7v-11.7c0-1.5 1.2-2.7 2.7-2.7h55.7c1.5 0 2.7 1.2 2.7 2.7v11.7c0 1.5-1.2 2.7-2.7 2.7z"
        id="path858-8"
        fill="#fff"
      />

      <g
        transform="translate(-411.779 -6.583)"
        id="g872-3">
        <text
          transform="translate(1157.357 933.083)"
          className="st4 st5 st6"
          id="text870-4">
          {"Recuperación RO"}
        </text>
      </g>
      <path
        className="st2"
        id="rect860-1"
        fill="none"
        d="M726.82141 942.4173H778.221412V957.4173H726.82141z"
      />
      <text
        y={953.80499}
        x={730.85425}
        className="st7 st8 st9"
        id="text862-4">
        {props.rpro}
      </text>

      <text
        y={952.80499}
        x={782.85425}
        className="st7 st8 st9"
        id="text866-1">
        {"%"}
      </text>

      <g
        transform="translate(-421.079 -7.583)"
        id="g888-8"
        onClick={() => {
          notificacion(12, "Recuperación RO");
        }}>
        <g id="g886-0">
          <path
            className="st4"
            d="M1249 951c-.6 1.1-.8 2.3-.6 3.4 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.1-.8 0-1.8.5-2.6s1.1-1.4 1.9-1.7c.1-.1.2-.2.2-.3l-.2-.6c0-.2-.2-.2-.4-.2-1 .4-1.9 1.1-2.5 2.2z"
            id="path874-4"
          />
          <path
            className="st4"
            d="M1247.3 950c-.9 1.5-1.1 3.2-.8 4.8 0 .1.2.2.3.2l.6-.1c.1 0 .2-.2.2-.3-.2-1.3 0-2.7.7-4 .7-1.3 1.8-2.2 3.1-2.6.1-.1.2-.2.2-.3l-.2-.6c0-.1-.2-.2-.3-.2-1.6.5-3 1.6-3.8 3.1z"
            id="path876-6"
          />
          <path
            className="st4"
            d="M1258.8 948.7c-.1-.1-.3 0-.4.2l-.2.6c-.1.1 0 .3.2.3.8.3 1.5.9 1.9 1.7.5.8.6 1.7.5 2.6 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.2-1.1 0-2.3-.6-3.4s-1.5-1.7-2.5-2.2z"
            id="path878-0"
          />
          <path
            className="st4"
            d="M1259.4 946.8c-.1-.1-.3 0-.3.2l-.2.6c-.1.1 0 .3.2.3 1.3.5 2.4 1.4 3.1 2.6.7 1.3.9 2.7.7 4 0 .1.1.3.2.3l.6.1c.1 0 .3-.1.3-.2.3-1.6.1-3.3-.8-4.8-1-1.4-2.3-2.5-3.8-3.1z"
            id="path880-3"
          />
          <path
            className="st4"
            d="M1260.3 956.1v-1.5c0-2.5-1.6-4.4-3.9-4.9v-.6c0-.5-.4-.9-.9-.9h-.5c-.5 0-.9.4-.9.9v.6c-2.4.5-3.9 2.4-3.9 4.9v1.5c0 .8-.3 1.5-.7 2.1-.2.3-.3.5-.3.9v.1c0 .9.7 1.6 1.6 1.6h9.1c.9 0 1.6-.7 1.6-1.6v-.1c0-.3-.1-.6-.3-.9-.6-.6-.9-1.3-.9-2.1z"
            id="path882-2"
          />
          <path
            className="st5"
            d="M1255.2 963.7c.9 0 1.7-.8 1.7-1.7h-3.4c.1.9.8 1.7 1.7 1.7z"
            id="path884-6"
          />
        </g>
      </g>

      <text
        id="text1757"
        className="st4 st5 st6"
        transform="translate(320 250)">
        {"Nivel:"}
      </text>
      {props.lsl302 === 1 ? (
        <path
          id="path4182-1"
          d="M329.436 238.052c-4.7 0-8.6 3.8-8.6 8.6 0 4.7 3.8 8.6 8.6 8.6s8.6-3.8 8.6-8.6c-.1-4.8-3.9-8.6-8.6-8.6zm-1.1 12l-3.5-3.5 1.2-1.2 2.2 2.2 4.3-4.4 1.4 1.4z"
          fill="#00a99d"
          transform="translate(35)"
          strokeWidth={1}
        />
      ) : (
        <path
          id="path4180-0"
          d="M330.57 269.805c-4.7 0-8.6 3.8-8.6 8.6s3.8 8.6 8.6 8.6 8.6-3.8 8.6-8.6-3.8-8.6-8.6-8.6zm3.7 10.9l-1.2 1.2-2.4-2.4-2.4 2.4-1.2-1.2 2.4-2.4-2.4-2.4 1.2-1.2 2.4 2.4 2.4-2.4 1.2 1.2-2.4 2.4z"
          fill="#f15a24"
          transform="translate(35 -32)"
          strokeWidth={1}
        />
      )}
      <text
        id="text1757"
        className="st4 st5 st6"
        transform="translate(245 425)">
        {"Nivel:"}
      </text>

      {props.p002 === 1 ? (
        <path
          d="M253.709 413.75c-4.7 0-8.6 3.8-8.6 8.6 0 4.7 3.8 8.6 8.6 8.6s8.6-3.8 8.6-8.6c-.1-4.8-3.9-8.6-8.6-8.6zm-1.1 12l-3.5-3.5 1.2-1.2 2.2 2.2 4.3-4.4 1.4 1.4z"
          id="path4182-1-8"
          fill="#00a99d"
          transform="translate(35)"
          strokeWidth={1}
        />
      ) : (
        <path
          d="M255.201 437.629c-4.7 0-8.6 3.8-8.6 8.6s3.8 8.6 8.6 8.6 8.6-3.8 8.6-8.6-3.8-8.6-8.6-8.6zm3.7 10.9l-1.2 1.2-2.4-2.4-2.4 2.4-1.2-1.2 2.4-2.4-2.4-2.4 1.2-1.2 2.4 2.4 2.4-2.4 1.2 1.2-2.4 2.4z"
          id="path4180-0-3"
          transform="translate(35 -25)"
          fill="#f15a24"
          strokeWidth={1}
        />
      )}
      <text
        id="text1757"
        className="st4 st5 st6"
        transform="translate(172 1228)">
        {"Nivel:"}
      </text>

      {props.p003 === 1 ? (
        <path
          d="M161.678 1149.42c-4.7 0-8.6 3.8-8.6 8.6 0 4.7 3.8 8.6 8.6 8.6s8.6-3.8 8.6-8.6c-.1-4.8-3.9-8.6-8.6-8.6zm-1.1 12l-3.5-3.5 1.2-1.2 2.2 2.2 4.3-4.4 1.4 1.4z"
          id="path4182-1-9"
          fill="#00a99d"
          strokeWidth={1}
          transform="translate(55 65)"
        />
      ) : (
        <path
          d="M159.657 1175.693c-4.7 0-8.6 3.8-8.6 8.6s3.8 8.6 8.6 8.6 8.6-3.8 8.6-8.6-3.8-8.6-8.6-8.6zm3.7 10.9l-1.2 1.2-2.4-2.4-2.4 2.4-1.2-1.2 2.4-2.4-2.4-2.4 1.2-1.2 2.4 2.4 2.4-2.4 1.2 1.2-2.4 2.4z"
          id="path4180-0-0"
          fill="#f15a24"
          strokeWidth={1}
          transform="translate(57 40)"
        />
      )}
      <text
        id="text1757"
        className="st4 st5 st6"
        transform="translate(177 1327)">
        {"Nivel:"}
      </text>

      {props.p004 === 1 ? (
        <path
          d="M295.063 1292.91c-4.7 0-8.6 3.8-8.6 8.6 0 4.7 3.8 8.6 8.6 8.6s8.6-3.8 8.6-8.6c-.1-4.8-3.9-8.6-8.6-8.6zm-1.1 12l-3.5-3.5 1.2-1.2 2.2 2.2 4.3-4.4 1.4 1.4z"
          id="path4182-1-5"
          fill="#00a99d"
          strokeWidth={1}
          transform="translate(-74 20)"
        />
      ) : (
        <path
          id="path4180-0-0-3"
          d="M293.627 1318.442c-4.7 0-8.6 3.8-8.6 8.6s3.8 8.6 8.6 8.6 8.6-3.8 8.6-8.6-3.8-8.6-8.6-8.6zm3.7 10.9l-1.2 1.2-2.4-2.4-2.4 2.4-1.2-1.2 2.4-2.4-2.4-2.4 1.2-1.2 2.4 2.4 2.4-2.4 1.2 1.2-2.4 2.4z"
          fill="#f15a24"
          strokeWidth={1}
          transform="translate(-74 -5)"
        />
      )}
      {props.LSL306 === 1 ? (
        <text
          id="text1476"
          transform="translate(1320.53 1124.784)">
          <tspan
            id="tspan1472"
            className="st4 st5 st6"
            y={0}
            x={0}>
            {"Lleno"}
          </tspan>
        </text>
      ) : (
        ""
      )}
    </svg>
  );
};

export default Scada2;

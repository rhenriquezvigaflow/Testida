import React from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const styleButton = {
  float: "left",
  width: "2vw"
};

const textStyle = {
  fontSize: "0.8vw"
};

function Fullscreen({ children }) {
  const handle = useFullScreenHandle();

  return (
    <div>
      <button onClick={handle.enter}>Ver en Pantalla completa</button>

      <FullScreen handle={handle}>
        {handle.active ? (
          <div>
            <div style={styleButton}>
              <button onClick={handle.exit}>
                <div style={textStyle}>x</div>
              </button>
            </div>
            {children}
          </div>
        ) : (
          ""
        )}
      </FullScreen>
    </div>
  );
}

export default Fullscreen;

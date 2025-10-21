import React from "react";
import Loader from "react-loaders";

const LoaderFallback = ({ loaderType }) => (
  <div className="loader-container">
    <div className="loader-container-inner">
      <div className="text-center">
        <Loader type={loaderType || "ball-pulse-rise"} />
      </div>
      <h6 className="mt-5">
        Un momento por favor.
        <small />
      </h6>
    </div>
  </div>
);

export default LoaderFallback;

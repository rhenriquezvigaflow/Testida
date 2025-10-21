import React, { forwardRef } from "react";
import "./Label.css";

const Label = forwardRef(({ htmlFor, className, styles, ...props }, ref) => (
  <label
    htmlFor={htmlFor}
    ref={ref}
    className={`custom__label ${className}`}
    style={{ ...styles }}
    {...props}
  />
));

Label.displayName = "Label";

export { Label };

import React, { forwardRef } from "react";
import "./checkbox.css";

const Checkbox = forwardRef(({ className, styles, ...props }, ref) => (
  <input
    type="checkbox"
    ref={ref}
    className={`custom__checkbox ${className}`}
    style={{ ...styles }}
    {...props}
  />
));

Checkbox.displayName = "Checkbox";

export { Checkbox };

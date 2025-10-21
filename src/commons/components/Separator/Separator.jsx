import React, { forwardRef } from "react";
import "./Separator.css";

const Separator = forwardRef(
  ({ className, style, orientation = "horizontal", ...props }, ref) => (
    <div
      ref={ref}
      className={`custom__separator ${orientation} ${className}`}
      style={style}
      {...props}
    />
  )
);

Separator.displayName = "Separator";

export { Separator };

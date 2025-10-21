import React, { forwardRef } from "react";
import "./Input.css";

const Input = forwardRef(
  ({ value, type, className, styles, ...props }, ref) => {
    return (
      <input
        value={value}
        type={type}
        ref={ref}
        className={`custom__input ${className}`}
        style={{ ...styles }}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };

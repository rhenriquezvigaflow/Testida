import React, { forwardRef } from "react";
import "./Button.css";

const Button = forwardRef(
  ({ disabled, className, style, type, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`custom__button ${className}`}
        style={style}
        type={type}
        disabled={disabled}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };

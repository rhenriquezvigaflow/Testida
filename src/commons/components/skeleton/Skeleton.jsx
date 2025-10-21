import React from "react";
import "./Skeleton.css";

function Skeleton({ ...props }) {
  return (
    <div
      className="animate-pulse rounded-md bg-muted"
      {...props}
    />
  );
}

export { Skeleton };

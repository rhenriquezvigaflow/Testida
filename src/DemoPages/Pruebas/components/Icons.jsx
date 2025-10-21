import React from "react";

export function ArrowUpDownIcon({ className }) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      className={className}
      viewBox="0 0 24 24">
      <path d="m3 16 4 4 4-4M7 20V4M21 8l-4-4-4 4M17 4v16" />
    </svg>
  );
}

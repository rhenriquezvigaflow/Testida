import React from "react";

const SearchIcon = ({ className, styles, ...props }) => (
  <svg
    title="search"
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    className={className}
    style={styles}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    {...props}>
    <circle
      cx={11}
      cy={11}
      r={8}
    />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const EyeIcon = ({ className, styles, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    {...props}>
    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
    <circle
      cx={12}
      cy={12}
      r={3}
    />
  </svg>
);

const EyeOffIcon = ({ className, styles, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    {...props}>
    <path d="m15 18-.722-3.25M2 8a10.645 10.645 0 0 0 20 0M20 15l-1.726-2.05M4 15l1.726-2.05M9 18l.722-3.25" />
  </svg>
);

const ChevronDownIcon = ({ className, styles, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className={className}
    style={styles}
    viewBox="0 0 24 24"
    {...props}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export { SearchIcon, EyeIcon, EyeOffIcon, ChevronDownIcon };

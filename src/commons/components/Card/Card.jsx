import React from "react";
import { forwardRef } from "react";
import "./Card.css";

const Card = forwardRef(({ className, styles, ...props }, ref) => (
  <section
    ref={ref}
    className={`custom__card ${className}`}
    style={{ ...styles }}
    {...props}
  />
));

Card.displayName = "Card";

const CardHeader = forwardRef(({ className, styles, ...props }, ref) => (
  <section
    ref={ref}
    className={`custom__card--header ${className}`}
    style={{ ...styles }}
    {...props}
  />
));

CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef(({ className, styles, ...props }, ref) => (
  <section
    ref={ref}
    className={`custom__card--title ${className}`}
    style={{ ...styles }}
    {...props}
  />
));

CardTitle.displayName = "CardTitle";

const CardDescription = forwardRef(({ className, styles, ...props }, ref) => (
  <section
    ref={ref}
    className={`custom__card--description ${className}`}
    style={{ ...styles }}
    {...props}
  />
));

CardDescription.displayName = "CardDescription";

const CardContent = forwardRef(({ className, styles, ...props }, ref) => (
  <section
    ref={ref}
    className={`custom__card--content ${className}`}
    style={{ ...styles }}
    {...props}
  />
));

CardContent.displayName = "CardContent";

const CardFooter = forwardRef(({ className, styles, ...props }, ref) => (
  <section
    ref={ref}
    className={`custom__card--footer ${className}`}
    style={{ ...styles }}
    {...props}
  />
));

CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
};

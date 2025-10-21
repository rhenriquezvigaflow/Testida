import React, { useState } from "react";

import { Popover } from "@material-ui/core";
import { Button } from "../../../../../commons/components/Button/Buttons";
import { ChevronDownIcon } from "../../../../../commons/components/Icons";

import { PopoverInputs } from "./PopoverInputs.jsx";

import "./EscalaEjeY.css";
import { PopoverInputsProvider } from "../context/PopoverInputs.jsx";

export function EscalaEjeY({ storageKey, onConfigChange }) {
  const [open, setOpen] = useState(null);

  function handleOpen(event) {
    setOpen(event.currentTarget);
  }

  function handleClose() {
    setOpen(null);
  }

  return (
    <section>
      <Button
        className="button-eje-y"
        onClick={handleOpen}>
        Rangos Eje Y
        <ChevronDownIcon
          data-open={Boolean(open)}
          className="chevron-down-icon"
        />
      </Button>
      <Popover
        className="wrapper-popover-inputs"
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}>
        <PopoverInputsProvider
          handleClose={handleClose}
          storageKey={storageKey}
          onConfigChange={onConfigChange}>
          <PopoverInputs />
        </PopoverInputsProvider>
      </Popover>
    </section>
  );
}

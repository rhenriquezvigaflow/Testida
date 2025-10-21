import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { useState } from "react";

export default function SnackbarResetVibot() {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={handleClose}
        style={{ top: "68px" }}>
        <Alert
          severity="info"
          variant="filled"
          sx={{ width: "100%" }}
          onClose={handleClose}>
          Los datos están en proceso de actualización. Por favor, intente
          nuevamente en unos minutos.
        </Alert>
      </Snackbar>
    </>
  );
}

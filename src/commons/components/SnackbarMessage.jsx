import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React from "react";

export default function SnackbarMessage({ message, open, setOpen }) {
  const handleClose = () => setOpen(false);

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      onClose={handleClose}
      style={{ top: "68px" }}
      autoHideDuration={3000}>
      <Alert
        severity="info"
        variant="filled"
        sx={{ width: "100%" }}
        onClose={handleClose}>
        {message}
      </Alert>
    </Snackbar>
  );
}

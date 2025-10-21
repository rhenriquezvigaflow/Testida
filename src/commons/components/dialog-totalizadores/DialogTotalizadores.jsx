import { Dialog, DialogTitle, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { Button } from "reactstrap";
import { FormTotalizadores } from "./FormTotalizadores";

const useStyles = makeStyles({
  title: {
    padding: 0,
    "& h2": {
      fontSize: ".9rem",
      fontWeight: 700
    }
  }
});

export function DialogTotalizadores({ idPlanta }) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  return (
    <section>
      <Button
        style={{ marginBlockEnd: "4px" }}
        color="info"
        onClick={() => setOpen(true)}>
        Exportar Totalizadores
      </Button>
      <Dialog
        onClose={() => setOpen(false)}
        open={open}
        fullWidth
        scroll="body"
        maxWidth="sm"
        PaperProps={{
          style: {
            overflow: "visible" // Permitir que los elementos se muestren fuera del contenedor del Dialog
          }
        }}>
        <div
          style={{
            padding: "9px",
            borderBottom: "1px solid #DFDFDF"
          }}>
          <section
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
            <DialogTitle
              id="simple-dialog-title"
              className={classes.title}>
              Descarga de Totalizadores
            </DialogTitle>
            <Button
              color="info"
              onClick={() => setOpen(false)}
              style={{ padding: "5px 9.5px" }}>
              X
            </Button>
          </section>
        </div>
        <section>
          <FormTotalizadores idPlanta={idPlanta} />
        </section>
      </Dialog>
    </section>
  );
}

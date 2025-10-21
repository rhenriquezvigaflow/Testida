import { Dialog, DialogTitle, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { Button } from "reactstrap";
import { AverageChartMenu } from "./AverageChartMenu";

const useStyles = makeStyles({
  title: {
    padding: 0,
    "& h2": {
      fontSize: ".9rem",
      fontWeight: 700
    }
  }
});

export function AverageDialogChart({ idPlanta }) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  return (
    <section>
      <Button
        color="info"
        onClick={() => setOpen(true)}>
        Promedio
      </Button>
      <Dialog
        onClose={() => setOpen(false)}
        open={open}
        fullWidth
        scroll="body"
        maxWidth="lg"
        style={{
          overflow: "hidden"
        }}>
        <div
          style={{
            padding: "13px",
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
              Promedio Caudal Mezcla
            </DialogTitle>
            <Button
              color="info"
              onClick={() => setOpen(false)}
              style={{ padding: "5px 9.5px" }}>
              X
            </Button>
          </section>
        </div>
        <AverageChartMenu idPlanta={idPlanta} />
      </Dialog>
    </section>
  );
}

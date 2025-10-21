import { makeStyles } from "@material-ui/core";
import React from "react";
import { DatePicker } from "./DatePicker";

const useStyles = makeStyles({
  formControl: {
    paddingBlockEnd: "1.2rem",
    marginBlockEnd: "1.2rem",
    "& h3": {
      fontSize: ".9rem",
      fontWeight: 700
    }
  }
});

export function AverageChartMenu({ idPlanta }) {
  const classes = useStyles();

  return (
    <section style={{ padding: "13px", width: "100%" }}>
      <section
        id="form-control"
        className={classes.formControl}>
        <section id="date-ranges-picker">
          <DatePicker idPlanta={idPlanta} />
        </section>
      </section>
    </section>
  );
}

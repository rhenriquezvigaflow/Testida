import { zodResolver } from "@hookform/resolvers/zod";
import { makeStyles } from "@material-ui/core";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import DatePicker2 from "react-widgets/DatePicker";
import { z } from "zod";
import { useDownloadExcel } from "../../hooks/useDownloadExcel";
import { EXPORT_TOTALIZADORES_API_URL } from "../../lib/constants";
import { formatDateToISO } from "../../lib/utils";

// Función para crear el esquema dinámico según la planta
const getDatesSchema = (idPlanta) => {
  const minDate =
    idPlanta === 70 ? new Date("2024-10-24") : new Date("2023-08-09");

  return z
    .object({
      startDate: z.date().refine((date) => date >= minDate, {
        message: `La fecha debe ser mayor o igual a ${minDate.toLocaleDateString()}`
      }),
      endDate: z.date()
    })
    .superRefine((data, ctx) => {
      if (data.startDate > data.endDate) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "La fecha de inicio no puede ser mayor que la fecha de fin",
          path: ["startDate"]
        });

        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "La fecha de fin debe ser mayor o igual a la fecha de inicio",
          path: ["endDate"]
        });
      }
    });
};

const useStyles = makeStyles({
  formTotalizadores: {
    padding: ".5rem",
    display: "grid",
    gap: ".5rem",
    "& label": {
      fontSize: ".8rem",
      fontWeight: 500,
      padding: 0
    }
  },
  datesPickerSection: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: ".5rem"
  },
  submitButton: {
    padding: ".5rem",
    backgroundColor: "#24272B",
    color: "white",
    border: "none",
    borderRadius: "4px"
  }
});

// funcion para setear la fecha inicial
function setInitialStartDate(idPlanta) {
  // Si la planta es 70, y el mes y año actual es octubre del 2024
  // entonces la fecha se setea al dia 23 de octubre del 2024
  // si no se setea el primer dia del mes actual
  // para el caso de otras id simplemente se setea el primer dia del mes actual
  if (
    idPlanta === 70 &&
    new Date().getMonth() === 9 &&
    new Date().getFullYear() === 2024
  ) {
    return new Date("2024-10-24");
  }

  return new Date(new Date().setDate(1));
}

export function FormTotalizadores({ idPlanta }) {
  const classes = useStyles();
  const { loading, download } = useDownloadExcel();

  // Crear esquema dinámico basado en idPlanta
  const datesSchema = getDatesSchema(idPlanta);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    resolver: zodResolver(datesSchema),
    defaultValues: {
      startDate: setInitialStartDate(idPlanta),
      endDate: new Date()
    },
    mode: "onChange"
  });

  const onSubmit = async (data) => {
    if (!isValid) {
      return;
    }

    const startDate = formatDateToISO(data.startDate);
    const endDate = formatDateToISO(data.endDate);

    const requestParams = {
      idPlant: idPlanta,
      startDate,
      endDate
    };

    await download({ apiUrl: EXPORT_TOTALIZADORES_API_URL, requestParams });
  };

  return (
    <section>
      <form
        className={classes.formTotalizadores}
        onSubmit={handleSubmit(onSubmit)}>
        <section className={classes.datesPickerSection}>
          <section>
            <label>Fecha Inicio</label>
            <Controller
              name="startDate"
              control={control}
              render={({ field }) => (
                <DatePicker2
                  {...field}
                  value={field.value}
                  onChange={field.onChange}
                  valueFormat={{
                    month: "numeric",
                    year: "numeric",
                    day: "numeric"
                  }}
                  calendarProps={{
                    min:
                      idPlanta === 70
                        ? new Date("2024-10-24")
                        : new Date("2023-08-09"),
                    max: new Date(),
                    views: ["month"]
                  }}
                  messages={{
                    dateButton: "Seleccionar fecha",
                    moveBack: "",
                    moveForward: "",
                    moveToday: "Hoy"
                  }}
                />
              )}
            />
            {errors.startDate && <p>{errors.startDate.message}</p>}
          </section>
          <section>
            <label>Fecha Fin</label>
            <Controller
              name="endDate"
              control={control}
              render={({ field }) => (
                <DatePicker2
                  {...field}
                  value={field.value}
                  onChange={field.onChange}
                  valueFormat={{
                    month: "numeric",
                    year: "numeric",
                    day: "numeric"
                  }}
                  calendarProps={{
                    min:
                      idPlanta === 70
                        ? new Date("2024-10-24")
                        : new Date("2023-08-09"),
                    max: new Date(),
                    views: ["month"]
                  }}
                  messages={{
                    dateButton: "Seleccionar fecha",
                    moveBack: "",
                    moveForward: "",
                    moveToday: "Hoy"
                  }}
                />
              )}
            />
            {errors.endDate && <p>{errors.endDate.message}</p>}
          </section>
        </section>
        <button
          disabled={loading || !isValid}
          className={classes.submitButton}
          type="submit">
          {loading ? "Descargando..." : "Descargar"}
        </button>
      </form>
    </section>
  );
}

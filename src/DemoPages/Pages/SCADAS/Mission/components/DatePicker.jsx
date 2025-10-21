import { zodResolver } from "@hookform/resolvers/zod";
import { makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import DatePicker2 from "react-widgets/DatePicker";
import { z } from "zod";
import { DownloadExcel } from "../../../../../commons/components/DownloadExcel";
import { Skeleton } from "../../../../../commons/components/skeleton/Skeleton";
import { useGetAverageValues } from "../hooks/useGetAverageValues";
import { AverageChart } from "./AverageChart";
import { LimitsForm } from "./LimitsForm";

const dateSchema = z
  .object({
    startDate: z.date().refine((date) => date >= new Date("2023-07-10"), {
      message: "La fecha debe ser mayor o igual a 10/07/2023"
    }),
    endDate: z.date()
  })
  .superRefine((data, ctx) => {
    if (data.endDate < data.startDate) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "La fecha de fin debe ser mayor o igual a la fecha de inicio",
        path: ["endDate"]
      });
    }
  });

const useStyles = makeStyles({
  average: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr auto 1fr",
    gridTemplateRows: "auto auto",
    gridGap: "1.5rem"
  },
  chart: {
    gridColumnStart: 1,
    gridColumnEnd: 6,
    gridRowStart: 2
  },
  datePickerForm: {
    display: "grid",
    gridColumnStart: 2,
    gridColumnEnd: 3,
    gridTemplateColumns: "1fr 1fr",
    gap: ".5rem",
    "& label": {
      fontSize: ".8rem",
      fontWeight: 500
    }
  },
  submitButton: {
    gridRowStart: 2,
    gridColumnStart: 1,
    gridColumnEnd: 3,
    padding: ".5rem",
    backgroundColor: "#24272B",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color .3s",
    "&:hover": {
      backgroundColor: "#171819"
    }
  },
  btnSection: {
    position: "absolute",
    right: 56,
    top: 13.5
  },
  excelBtn: {
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#24272B",
    color: "white",
    padding: ".5rem",
    cursor: "pointer",
    transition: "background-color .3s",
    "&:hover": {
      backgroundColor: "#171819"
    }
  }
});

export function DatePicker({ idPlanta }) {
  const classes = useStyles();
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(dateSchema),
    defaultValues: {
      startDate: new Date(new Date().setDate(1)),
      endDate: new Date()
    }
  });

  const { data, error, loading, fetchData } = useGetAverageValues();

  const handleFetchData = async () => {
    await fetchData(idPlanta, new Date(new Date().setDate(1)), new Date());
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  const onSubmit = async (data) => {
    try {
      await fetchData(idPlanta, data.startDate, data.endDate);
    } catch (err) {
      console.error("Error updating data:", err);
    }
  };

  return (
    <section className={classes.average}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={classes.datePickerForm}>
        <section>
          <label htmlFor="startDate">Fecha Inicio</label>
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
                  min: new Date("2023-07-10 00:00:00"),
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
          <label htmlFor="endDate">Fecha Fin</label>
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
                  min: new Date("2023-07-10 00:00:00"),
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
        <button
          className={classes.submitButton}
          type="submit">
          Buscar Datos
        </button>
      </form>
      <LimitsForm
        idPlanta={idPlanta}
        limits={data.limits}
        loading={loading}
        refreshData={handleFetchData}
      />
      <section className={classes.btnSection}>
        <DownloadExcel
          data={data.averageValues}
          fileName="promedios_diarios"
          classes={classes.excelBtn}
        />
      </section>
      <section className={classes.chart}>
        {loading && <Skeleton style={{ width: "100%", height: "350px" }} />}
        {error && <p>Hubo un error al cargar los datos</p>}
        {!data && !loading && !error && <p>No hay datos para mostrar</p>}
        {data && !loading && !error && (
          <AverageChart
            data={data}
            storageKey={idPlanta}
          />
        )}
      </section>
    </section>
  );
}

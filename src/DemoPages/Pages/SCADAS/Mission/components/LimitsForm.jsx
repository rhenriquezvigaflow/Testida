import { zodResolver } from "@hookform/resolvers/zod";
import { makeStyles } from "@material-ui/core";
import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import SnackbarMessage from "../../../../../commons/components/SnackbarMessage";
import { useSetAverageLimits } from "../hooks/useSetAverageLimits";

const useStyles = makeStyles({
  limitsForm: {
    display: "grid",
    gridColumnStart: 3,
    gridColumnEnd: 4,
    gridTemplateColumns: "110px 110px 110px",
    width: "100%",
    gap: ".5rem",
    "& label": {
      fontSize: ".8rem",
      fontWeight: 500
    },
    "& input": {
      padding: "6px"
    },
    "& button": {
      gridRowStart: 2,
      gridColumnStart: 1,
      gridColumnEnd: 4,
      padding: ".5rem",
      backgroundColor: "#24272B",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color .3s",
      "&:hover": {
        backgroundColor: "#171819"
      },
      "&:disabled": {
        backgroundColor: "#5A5A5A",
        cursor: "not-allowed"
      }
    }
  },
  field: {
    display: "flex",
    flexDirection: "column",
    rowGap: "1.5px",
    width: "100%",
    "& label": {
      fontSize: ".8rem",
      fontWeight: 500
    }
  }
});

const limitsSchema = z
  .object({
    lower: z
      .string()
      .min(1, { message: "El límite inferior es requerido" })
      .refine((val) => !Number.isNaN(Number(val)), {
        message: "Debe ser un número válido"
      })
      .refine((val) => Number(val) >= 0, {
        message: "Debe ser mayor o igual a 0"
      })
      .transform((val) => Number(val)),
    middle: z
      .string()
      .min(1, { message: "El límite intermedio es requerido" })
      .refine((val) => !Number.isNaN(Number(val)), {
        message: "Debe ser un número válido"
      })
      .refine((val) => Number(val) >= 0, {
        message: "Debe ser mayor o igual a 0"
      })
      .transform((val) => Number(val)),
    upper: z
      .string()
      .min(1, { message: "El límite superior es requerido" })
      .refine((val) => !Number.isNaN(Number(val)), {
        message: "Debe ser un número válido"
      })
      .refine((val) => Number(val) >= 0, {
        message: "Debe ser mayor o igual a 0"
      })
      .transform((val) => Number(val))
  })
  .superRefine((data, ctx) => {
    const { lower, middle, upper } = data;

    if (middle <= lower) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["middle"],
        message: "El límite intermedio debe ser mayor que el límite inferior"
      });
    }

    if (middle >= upper) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["middle"],
        message: "El límite intermedio debe ser menor que el límite superior"
      });
    }

    if (lower >= upper) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["lower"],
        message: "El límite inferior debe ser menor que el límite superior"
      });
    }
  });

export function LimitsForm({ idPlanta, limits, loading, refreshData }) {
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(limitsSchema),
    defaultValues: {
      lower: loading || !limits || limits.length === 0 ? "" : limits[0].lower,
      middle: loading || !limits || limits.length === 0 ? "" : limits[0].middle,
      upper: loading || !limits || limits.length === 0 ? "" : limits[0].upper
    }
  });

  const lowerLimit = watch("lower");
  const middleLimit = watch("middle");
  const upperLimit = watch("upper");

  const hasChanged = useMemo(() => {
    if (!limits || limits.length === 0) {
      return false;
    }
    return (
      lowerLimit !== limits[0].lower ||
      upperLimit !== limits[0].upper ||
      middleLimit !== limits[0].middle
    );
  }, [lowerLimit, upperLimit, limits, middleLimit]);

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    if (!loading && limits && limits.length > 0) {
      setValue("lower", limits[0].lower);
      setValue("middle", limits[0].middle);
      setValue("upper", limits[0].upper);
    }
  }, [loading, limits, setValue]);

  const { message, loadingLimits, updateLimits } = useSetAverageLimits();

  useEffect(() => {
    if (message.message) {
      setSnackbarOpen(true);
    }
  }, [message]);

  const onSubmit = async (data) => {
    const limits = {
      lower: String(data.lower),
      middle: String(data.middle),
      upper: String(data.upper)
    };
    try {
      await updateLimits(idPlanta, limits);

      await refreshData();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      className={classes.limitsForm}
      onSubmit={handleSubmit(onSubmit)}>
      {message.message && (
        <SnackbarMessage
          key={message.message + new Date().toISOString()}
          message={message.message}
          open={snackbarOpen}
          setOpen={setSnackbarOpen}
        />
      )}
      <section className={classes.field}>
        <label htmlFor="lower">Limite Inferior</label>
        <input
          disabled={loading || loadingLimits}
          type="text"
          name="lower"
          {...register("lower", {
            required: "El límite inferior es requerido"
          })}
          placeholder="30"
        />
        {errors.lower && <span>{errors.lower.message}</span>}
      </section>
      <section className={classes.field}>
        <label htmlFor="middle">Limite Intermedio</label>
        <input
          disabled={loading || loadingLimits}
          type="text"
          name="middle"
          {...register("middle", {
            required: "El límite intermedio es requerido"
          })}
          placeholder="35"
        />
        {errors.middle && <span>{errors.middle.message}</span>}
      </section>
      <section className={classes.field}>
        <label htmlFor="upper">Limite Superior</label>
        <input
          disabled={loading || loadingLimits}
          type="text"
          name="upper"
          {...register("upper", {
            required: "El límite superior es requerido"
          })}
          placeholder="50"
        />
        {errors.upper && <span>{errors.upper.message}</span>}
      </section>
      <button
        disabled={loading || loadingLimits || !hasChanged}
        type="submit">
        Actualizar Límites
      </button>
    </form>
  );
}

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

const numericRegex = /^\d*\.?\d+$/;

const popoverInputsSchema = z
  .object({
    max: z
      .string()
      .min(1, { message: "El máximo es requerido" })
      .regex(numericRegex, { message: "El máximo debe ser un número válido" })
      .refine((val) => Number.parseFloat(val) >= 0, {
        message: "El máximo no puede ser menor que 0"
      }),
    min: z
      .string()
      .min(1, { message: "Mínimo es requerido" })
      .regex(numericRegex, { message: "Mínimo debe ser un número válido" })
      .refine((val) => Number.parseFloat(val) >= 0, {
        message: "El mínimo no puede ser menor que 0"
      }),
    ticks: z
      .string()
      .min(1, { message: "Ticks es requerido" })
      .regex(numericRegex, { message: "Ticks debe ser un número válido" })
      .refine((val) => Number.parseFloat(val) >= 3, {
        message: "Ticks no puede ser menor que 3"
      })
  })
  .refine(
    (data) => Number.parseFloat(data.max) >= Number.parseFloat(data.min),
    {
      message: "Máximo no puede ser menor que Mínimo",
      path: ["max"]
    }
  );

const loadFromLocalStorage = (key) => {
  const value = localStorage.getItem(key);

  return value;
};

export function PopoverInputsProvider({
  storageKey,
  onConfigChange,
  handleClose,
  children
}) {
  const methods = useForm({
    resolver: zodResolver(popoverInputsSchema),
    mode: "onChange",
    defaultValues: {
      max: loadFromLocalStorage(`${storageKey}_max`) || "75",
      min: loadFromLocalStorage(`${storageKey}_min`) || "0",
      ticks: loadFromLocalStorage(`${storageKey}_ticks`) || "6"
    }
  });

  const onSubmit = methods.handleSubmit((data) => {
    localStorage.setItem(`${storageKey}_max`, data.max);
    localStorage.setItem(`${storageKey}_min`, data.min);
    localStorage.setItem(`${storageKey}_ticks`, data.ticks);

    onConfigChange();
    handleClose();
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </FormProvider>
  );
}

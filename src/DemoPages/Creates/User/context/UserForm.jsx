import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

const userSchema = z
  .object({
    nombres: z
      .string({
        required_error: "Los nombres son obligatorios"
      })
      .min(1, { message: "Debes escribir al menos un nombre" }),
    apellidos: z
      .string({
        required_error: "Los apellidos son obligatorios"
      })
      .min(1, { message: "Debes escribir al menos un apellido" }),
    email: z.preprocess(
      (val) => (val === "" || val === undefined ? undefined : val),
      z
        .string({
          required_error: "El email es obligatorio"
        })
        .min(1, { message: "Debes escribir un email" })
        .email({
          message: "El email es inválido"
        })
    ),
    password: z
      .string()
      .min(8, { message: "La contraseña debe tener al menos 8 caracteres" })
      .refine((value) => /[A-Z]/.test(value), {
        message: "La contraseña debe contener al menos una letra mayúscula"
      })
      .refine((value) => /\d/.test(value), {
        message: "La contraseña debe contener al menos un número"
      })
      .refine((value) => /[\p{P}\p{S}]/u.test(value), {
        message: "La contraseña debe contener al menos un carácter especial"
      }),
    perfil: z.preprocess(
      (val) => (val === "" ? undefined : val),
      z.enum(["1", "2", "3", "5"], {
        required_error: "El perfil es obligatorio"
      })
    ),
    plantas: z
      .array(
        z.object({
          id_planta: z.number(),
          id_empresa: z.number()
        })
      )
      .optional()
  })
  .refine(
    (data) => {
      if (["2", "3"].includes(data.perfil)) {
        return data.plantas && data.plantas.length > 0;
      }
      return true;
    },
    {
      message: "Debes seleccionar al menos una planta para este perfil",
      path: ["plantas"]
    }
  );

export function UserForm({ children }) {
  const methods = useForm({
    resolver: zodResolver(userSchema),
    mode: "onChange"
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
}

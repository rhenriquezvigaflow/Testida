import React, { useState } from "react";

import { useFormContext } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "../../../commons/components/Card/Card";
import { Input } from "../../../commons/components/Input/Input";
import { Label } from "../../../commons/components/Label/Label";
import { EmpresaPlantaSelector } from "./components/empresa-planta-selector";
import "./CreateUser.css";
import { Button } from "../../../commons/components/Button/Buttons";
import { PasswordInput } from "./components/password-input";
import { SelectorTipoPerfil } from "./components/selector-tipo-perfil";

export function CreateUser() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useFormContext();

  const [tipoPerfil, setTipoPerfil] = useState("");

  function handleTipoPerfil(event) {
    const { value } = event.target;

    setTipoPerfil(value);
  }

  const showSelectorEmpresas = tipoPerfil === "2" || tipoPerfil === "3";

  async function onSubmit(data) {
    try {
      const response = await fetch(
        "https://izqb2sb0sl.execute-api.us-east-1.amazonaws.com/default/usuarios/create-user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": process.env.REACT_APP_API_KEY
          },
          body: JSON.stringify(data)
        }
      );

      const json = await response.json();
    } catch (error) {
      console.log(error);
    } finally {
      reset();
      setTipoPerfil("");
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle styles={{ fontSize: "22px" }}>Crear Usuario</CardTitle>
        <CardDescription>
          Completa el formulario para crear un usuario
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="wrapper__inputs">
          <section className="wrapper__texts-inputs">
            <section className="wrapper__text-input">
              <Label htmlFor="nombres">Nombre</Label>
              <Input
                disabled={isSubmitting}
                {...register("nombres")}
                type="text"
                id="nombres"
              />
              {errors.nombres && <small>{errors.nombres.message}</small>}
            </section>
            <section className="wrapper__text-input">
              <Label htmlFor="apellidos">Apellidos</Label>
              <Input
                disabled={isSubmitting}
                {...register("apellidos")}
                type="text"
                id="apellidos"
              />
              {errors.apellidos && <small>{errors.apellidos.message}</small>}
            </section>
            <section className="wrapper__text-input">
              <Label htmlFor="email">Email</Label>
              <Input
                disabled={isSubmitting}
                {...register("email")}
                type="text"
                id="email"
              />
              {errors.email && <small>{errors.email.message}</small>}
            </section>
            <PasswordInput />
            <section className="wrapper-select">
              <Label htmlFor="perfil">Tipo de perfil</Label>
              <SelectorTipoPerfil
                tipoPerfil={tipoPerfil}
                handleTipoPerfil={handleTipoPerfil}
              />
            </section>
          </section>
          {showSelectorEmpresas && (
            <section>
              <Label htmlFor="empresaPlanta">
                Selección de Empresa y Planta(s)
              </Label>
              <EmpresaPlantaSelector />
            </section>
          )}
        </CardContent>
        <CardFooter>
          <Button
            disabled={isSubmitting}
            type="submit">
            Crear Usuario
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}

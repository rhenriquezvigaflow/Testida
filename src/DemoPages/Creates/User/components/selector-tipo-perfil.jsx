import React from "react";
import "./selector-tipo-perfil.css";
import { useFormContext } from "react-hook-form";

const perfiles = [
  { id: 5, nombre: "Administrador Viga" },
  { id: 1, nombre: "Espectador Vigaflow" },
  { id: 2, nombre: "Cliente" },
  { id: 3, nombre: "Espectador Cliente" }
];

export function SelectorTipoPerfil({ tipoPerfil, handleTipoPerfil }) {
  const {
    register,
    setValue,
    trigger,
    formState: { errors, isSubmitting }
  } = useFormContext();

  const handleChange = (event) => {
    const { value } = event.target;
    setValue("perfil", value);
    trigger("perfil");
    handleTipoPerfil(event);
  };

  return (
    <section className="wrapper__select">
      <select
        disabled={isSubmitting}
        {...register("perfil")}
        value={tipoPerfil}
        onChange={handleChange}
        className="custom__select"
        name="perfil"
        id="perfil">
        <option value="">Selecciona un tipo de perfil</option>
        {perfiles.map((perfil) => (
          <option
            key={perfil.id}
            value={perfil.id}>
            {perfil.nombre}
          </option>
        ))}
      </select>
      {errors.perfil && <small>{errors.perfil.message}</small>}
    </section>
  );
}

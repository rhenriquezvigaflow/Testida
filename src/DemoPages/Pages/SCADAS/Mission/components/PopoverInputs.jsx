import React from "react";
import { useFormContext } from "react-hook-form";
import { Button } from "../../../../../commons/components/Button/Buttons";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "../../../../../commons/components/Card/Card";
import { Input } from "../../../../../commons/components/Input/Input";
import { Label } from "../../../../../commons/components/Label/Label";

export function PopoverInputs() {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Configurar Rango</CardTitle>
      </CardHeader>
      <CardContent className="wrapper-popover-inputs">
        <section>
          <Label htmlFor="max">Máximo</Label>
          <Input
            id="max"
            type="text"
            placeholder="100"
            {...register("max")}
          />
          {errors.max && <small>{errors.max.message}</small>}
        </section>
        <section>
          <Label htmlFor="min">Mínimo</Label>
          <Input
            id="min"
            type="text"
            placeholder="0"
            {...register("min")}
          />
          {errors.min && <small>{errors.min.message}</small>}
        </section>
        <section>
          <Label htmlFor="step">Ticks</Label>
          <Input
            id="ticks"
            type="text"
            placeholder="10"
            {...register("ticks")}
          />
          {errors.ticks && <small>{errors.ticks.message}</small>}
        </section>
        <Button
          className="button-eje-y"
          type="submit">
          Guardar
        </Button>
      </CardContent>
    </Card>
  );
}

import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Button } from "../../../../commons/components/Button/Buttons";
import { EyeIcon, EyeOffIcon } from "../../../../commons/components/Icons";
import { Input } from "../../../../commons/components/Input/Input";
import { Label } from "../../../../commons/components/Label/Label";

export function PasswordInput() {
  const {
    register,
    formState: { errors, isSubmitting }
  } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="wrapper__text-input">
      <Label htmlFor="password">Contraseña</Label>
      <Input
        disabled={isSubmitting}
        {...register("password")}
        type={showPassword ? "text" : "password"}
        id="password"
      />
      <Button
        type="button"
        onClick={togglePasswordVisibility}
        className="toggle-password-btn">
        {showPassword ? <EyeOffIcon /> : <EyeIcon />}
      </Button>
      {errors.password && <small>{errors.password.message}</small>}
    </section>
  );
}

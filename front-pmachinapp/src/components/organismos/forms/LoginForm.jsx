import { InputForm, useAuth } from "../../../index";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";

export const LoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const handleOnSubmit = async (data) => {
    const res = await login(data);

    if (res.status !== 401) {
      reset();
      navigate("/home");
      return;
    }

    const newError = res.data.detail;
    setError(newError);
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <InputForm
          errors={errors}
          register={register}
          name={"email"}
          label={"Correo Electronico"}
          tipo={"email"}
        />
        <InputForm
          errors={errors}
          register={register}
          name={"password"}
          label={"Contraseña"}
          tipo={"password"}
        />
        {error && <>{error}</>}
        <Button
          type="submit
        "
        >
          LogIn
        </Button>
        <Link to={"reset-password"}>¿Olvidaste tu Contraseña?</Link>
      </form>
    </>
  );
};

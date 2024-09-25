import { InputForm, Select, useRegistroUsuario } from "../../../index";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const UserForm = () => {
  const [errores, setError] = useState({});

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const registroUsuario = useRegistroUsuario();

  const handleOnSubmitDataUser = async (data) => {
    try {
      await registroUsuario.mutateAsync(data);
      reset();
    } catch (error) {
      console.error(error.response.data);
      setError(error.response.data);
    }
  };

  return (
    <>
      <form
        className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md"
        onSubmit={handleSubmit(handleOnSubmitDataUser)}
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
          <div className="flex flex-col">
            <InputForm
              errors={errors}
              register={register}
              name={"first_name"}
              label={"Nombre Completo"}
            />
          </div>

          <div className="flex flex-col">
            <InputForm
              errors={errors}
              register={register}
              name={"last_name"}
              label={"Apellidos"}
            />
          </div>

          <div className="flex flex-col">
            <InputForm
              errors={errors}
              register={register}
              name={"username"}
              label={"Nombre de Usuario"}
            />
            {errores.username && (
              <>
                <p className="error">{errores.username[0]}</p>
              </>
            )}
          </div>
        </div>

        <div className="flex flex-col">
          <InputForm
            tipo={"email"}
            errors={errors}
            register={register}
            name={"email"}
            label={"Correo Electronico"}
          />
          {errores.email && (
            <>
              <p className="error">{errores.email[0]}</p>
            </>
          )}
        </div>

        <div className="flex flex-col "></div>

        <div className="flex flex-row w-3/4 justify-between">
          <InputForm
            errors={errors}
            register={register}
            name={"numero_documento"}
            label={"Numero de Documento"}
          />
          {errores.numero_documento && (
            <>
              <p className="error">{errores.numero_documento[0]}</p>
            </>
          )}

          <div>
            <Select
              options={[{ name: "cedula", pantalla: "Cedula de Ciudadania" }]}
              name="tipo_documento"
              placeholder="Elija un Rol"
              valueKey="name"
              textKey="name"
              register={register}
              label="hola"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          <div className="flex flex-col">
            <InputForm
              errors={errors}
              register={register}
              name={"password"}
              label={"Contraseña"}
            />
          </div>

          <div className="flex flex-col w-full  justify-center">
            {" "}
            <Select
              options={[{ roles: "Roles" }]}
              name="rol"
              placeholder="Elija un Rol"
              valueKey="roles"
              textKey="roles"
              register={register}
              label="Roles"
            />{" "}
          </div>
        </div>

        <input type="hidden" {...register("username")} value={"hola"} />

        <Button color={"primary"} type={"submit"}>
          {" "}
          Registrar{" "}
        </Button>
      </form>
    </>
  );
};

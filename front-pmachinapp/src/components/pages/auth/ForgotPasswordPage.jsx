import { Button } from "@nextui-org/react";
import { LoginLayout, InputForm, axiosClient } from "../../../index";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";

export const ResetpasswordPage = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState({});

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const handleOnSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await axiosClient.post("user/recuperar/", data);
      toast.success(res.data.mensaje);
      reset();
    } catch (error) {
      if (error.response && error.response.data.mensaje) {
        setError({
          mensaje: error.response.data.mensaje,
          status: error.response.status,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <LoginLayout>
        <div className="h-5/6 w-full flex items-center ">
          <form onSubmit={handleSubmit(handleOnSubmit)} className="w-1/2">
            <label className="flex flex-col gap-4">
              <span> Ingrese su numero de documento </span>
              <InputForm
                errors={errors}
                label={"Documento de identidad"}
                register={register}
                tipo={"text"}
                name={"numero_documento"}
              />
            </label>

            <Button color="primary" type="submit" isLoading={isLoading}>
              {isLoading ? " " : <> Enviar</>}
            </Button>
            {error.mensaje && (
              <>
                <p className="text-red-400 font-bold">{error.mensaje}</p>
              </>
            )}
          </form>
        </div>
      </LoginLayout>
    </>
  );
};

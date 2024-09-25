import { InputForm, Select, axiosClient } from "../../../index";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Input } from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";

// eslint-disable-next-line react/prop-types
export const UserUpdateForm = ({ userData }) => {
  // asignamos
  const Usuario = userData;

  const [localUser, setLocalUser] = useState({ imagen: "" });

  // carga del componente
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const mutation = useMutation({
    mutationFn: async (dataUsuario) => {
      // http://127.0.0.1:8000/api/user/{id}/
      const res = await axiosClient.put(
        `user/user/${Usuario.id}/`,
        dataUsuario
      );
      console.log(res.data);
      return res;
    },
  });

  // tomar la informacion del usuario y enviarla a la api
  const handleEditUsuario = async (data) => {
    if (data.password) data;
    else delete data.password;

    data.username = data.numero_documento;

    console.log(data);
    try {
      await mutation.mutateAsync(data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  // poder tomar la imagen que se ingrese en el campo

  const handleFileUpload = (evento) => {
    const imagen = evento.target.files[0];

    setLocalUser((prevState) => ({
      ...prevState,
      imagen: imagen,
    }));
  };

  useEffect(() => {
    if (Usuario) {
      setIsLoading(true);
      reset({
        first_name: Usuario.first_name,
        last_name: Usuario.last_name,
        numero_documento: Usuario.numero_documento,
        email: Usuario.email,
        tipo_documento: Usuario.tipo_documento,
      });
    }
  }, [Usuario, reset]);

  return (
    <>
      <form
        onSubmit={handleSubmit(handleEditUsuario)}
        className="grid grid-cols-5 gap-8"
      >
        <div className="col-span-5 xl:col-span-2 flex flex-col gap-10">
          <div
            className={`rounded-sm border border-stroke shadow-default dark:border-strokedark dark:bg-boxdark`}
          >
            <div
              className={`border-b border-stroke py-3 px-5 dark:border-strokedark `}
            >
              <span className="font-medium text-black dark:text-white"></span>
            </div>
            <div className="p-7">
              <div
                id="FileUpload"
                className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                />
                <div className="flex flex-col items-center justify-center space-y-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z"
                        fill="#3C50E0"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z"
                        fill="#3C50E0"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2.00004V10C8.66634 10.3682 8.36786 10.6667 7.99967 10.6667C7.63148 10.6667 7.33301 10.3682 7.33301 10V2.00004C7.33301 1.63185 7.63148 1.33337 7.99967 1.33337Z"
                        fill="#3C50E0"
                      />
                    </svg>
                  </span>
                  <p>
                    <span className="text-primary">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="mt-1.5">SVG, PNG, JPG or GIF</p>
                  <p>(max, 800 X 800px)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-80 w-full border items-center">
            <div
              className={`border-b border-stroke py-3 px-5 dark:border-strokedark `}
            >
              <span className="font-medium text-black dark:text-white"></span>
            </div>
            <div className="p-10">
              <label className="mb-3 block text-green-500 dark:text-gray-400text-sm font-medium ">
                Nueva Contraseña
              </label>
              <Input
                variant="bordered"
                label="Nueva contraseña"
                color="success"
                autoComplete="off"
                {...register("password")}
              />
            </div>
          </div>
        </div>
        <div className="col-span-5 xl:col-span-3 border">
          <div className={`border-b border-stroke py-3 px-7  `}>
            <h3 className="font-medium text-black dark:text-white">
              {/*   {t("informacion_personal")} */} infomracion personal
            </h3>
          </div>
          <div className="p-7">
            <div className="mb-5.5 flex flex-col gap-10 sm:flex-row">
              <div className="w-full sm:w-1/2">
                {" "}
                <InputForm
                  errors={errors}
                  register={register}
                  label={"Nombre"}
                  tipo={"text"}
                  name={"first_name"}
                />
              </div>

              <div className="w-full sm:w-1/2">
                <InputForm
                  errors={errors}
                  register={register}
                  label={"Nombre"}
                  tipo={"text"}
                  name={"last_name"}
                />
              </div>
            </div>

            <div className="w-full sm:w-1/2">
              <InputForm
                errors={errors}
                register={register}
                label={"Nombre"}
                tipo={"text"}
                name={"numero_documento"}
              />
            </div>

            <div className="w-full sm:w-1/2">
              <InputForm
                errors={errors}
                register={register}
                label={"Nombre"}
                tipo={"text"}
                name={"email"}
              />
            </div>

            <Select
              options={[
                { name: "cedula", pantalla: "Cedula de Ciudadania" },
                { name: "tarjeta_identidad", pantalla: "Tarjeta de idendidad" },
              ]}
              name="tipo_documento"
              placeholder="Elija un tipo de documento"
              valueKey="name"
              textKey="pantalla"
              register={register}
              label="Tipo de documento"
            />

            <div className="mb-5 flex flex-col gap-10 sm:flex-row"></div>
          </div>
          <Button type="submit" color="primary">
            Actualizar
          </Button>
        </div>
      </form>
    </>
  );
};

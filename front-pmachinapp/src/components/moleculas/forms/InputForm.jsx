import { Input } from "@nextui-org/react";


// eslint-disable-next-line react/prop-types
export const InputForm = ({ register, errors, name, tipo, label, disabled }) => {
    return (
        <>
          <div className="relative z-0 w-3/4 mb-5 group">
            <Input
              type={tipo}
              label={label}
              name={name}
              autoComplete="off"
              variant="bordered"
              disabled={disabled}
              color="success"
              radius="sm"
              id={name}
              {...register(name, {
                required: {
                  value: true,
                  message: `${name} es obligatorio`,
                },
              })}
            />
    
            {/* eslint-disable-next-line react/prop-types */}
            {errors[name]?.type === "required" && (
              /*   // eslint-disable-next-line react/prop-types */
              <p>Campo Requerido </p>
              /*  <Alert descripcion={errors[name].message} /> */
            )}
          </div>
        </>
      );
};

export const Select = ({
  /*  eslint-disable-next-line react/prop-types */
  options,
  /*  eslint-disable-next-line react/prop-types */
  name,
  /*  eslint-disable-next-line react/prop-types */
  register,
  /*  eslint-disable-next-line react/prop-types */
  placeholder,
  /*  eslint-disable-next-line react/prop-types */
  label,
  /*  eslint-disable-next-line react/prop-types */
  onChange,
  /*  eslint-disable-next-line react/prop-types */
  value = true,
  /*  eslint-disable-next-line react/prop-types */
  errors,
  ...restProps
}) => {
  const props = { ...restProps };
  return (
    <>
      <div className="w-full max-w-md mx-auto">
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          {label}
        </label>
        <div className="relative">
          <select
            id={name}
            name={name}
            onChange={onChange}
            {...register(name, {
              required: {
                value: value,
                message: `${name} es requerido`,
              },
            })}
            className="block w-full px-4 py-2 pr-8 leading-tight text-gray-700 bg-white border border-gray-300 rounded-lg appearance-none dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">{placeholder}</option>

            {/*  eslint-disable-next-line react/prop-types */}
            {options.map((item, index) => (
              /*  eslint-disable-next-line react/prop-types */
              <option key={index} value={item[props.valueKey]}>
                {/*  eslint-disable-next-line react/prop-types */}
                {item[props.textKey]}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {/*   eslint-disable-next-line react/prop-types  */}
          {errors[name]?.type === "required" && (
            /*   // eslint-disable-next-line react/prop-types */
            <p>Campo Requerido </p>
            /*  <Alert descripcion={errors[name].message} /> */
          )}
        </div>
      </div>
    </>
  );
};

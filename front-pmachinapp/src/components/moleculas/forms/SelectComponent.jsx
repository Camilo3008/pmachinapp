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
  ...restProps
}) => {
  const props = { ...restProps };
  return (
    <>
      <div className="max-w-sm mx-auto flex items-center justify-evenly">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {label}
        </label>
        <select
          id="countries"
          name={name}
          onChange={onChange}
          {...register(name, {
            required: {
              value: value,
              message: `${name} es requerido`,
            },
          })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value=""> {placeholder}</option>
          {/*  eslint-disable-next-line react/prop-types */}
          {options.map((item, index) => (
            /*  eslint-disable-next-line react/prop-types */
            <option key={index} value={item[props.valueKey]}>
              {/*  eslint-disable-next-line react/prop-types */}
              {item[props.textKey]}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

import { Input } from "@nextui-org/react";
import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
export const Search = ({ buscar, label, placeholder }) => {
  const [elemento, setElemento] = useState("");

  useEffect(() => {
    const tiempoEspera = setTimeout(() => {
      buscar(elemento);
    }, 300);

    return () => clearTimeout(tiempoEspera);
  }, [buscar, elemento]);

  const handleTomarElemento = (evento) => {
    setElemento(evento.target.value);
  };

  return (
    <>
      <label className="flex flex-col w-3/5 ">
        <span className="text-sm font-medium text-green-500">{label}</span>
        <Input
          type="text"
          radius="sm"
          color="success"
          variant="bordered"
          value={elemento}
          onChange={handleTomarElemento}
          placeholder={placeholder}
          size="lg"
          /* startContent={<Icons name="search" />} */ // Icono dinámico usando el componente Icons
          className="mt-1 h-full"
          aria-label="buscar elementos en un array" // Asegura accesibilidad
        />
      </label>
    </>
  );
};

import {
  Table as TableNext,
  TableHeader,
  TableCell,
  TableColumn,
  TableBody,
  TableRow,
} from "@nextui-org/react";

import { useState } from "react";
import { Paginacion } from "../../../index";

// eslint-disable-next-line react/prop-types
export const Table = ({ columnas, filas, elementosPorPagina = 7 }) => {
  // iniciando paginacion

  const [elementosActuales, setelementosActuales] = useState(1);

  // eslint-disable-next-line react/prop-types
  const totalElementos = filas.length;

  const lastIndex = elementosActuales * elementosPorPagina; // 1 * 8 = 8
  const firsIndex = lastIndex - elementosPorPagina; // 8 - 8 = 0

  return (
    <>
      <div className="flex flex-col w-full">
        <TableNext aria-label="tabla con paginacion">
          <TableHeader>
            {/* eslint-disable-next-line react/prop-types */}
            {columnas.map((columna, indice) => (
              <TableColumn key={indice} className="px-2 sm:px-4">
                {columna}
              </TableColumn>
            ))}
          </TableHeader>
          <TableBody className="flex gap-36">
            {filas
              // eslint-disable-next-line react/prop-types
              .map((fila, indice) => (
                <TableRow
                  key={indice}
                  className="hover:bg-slate-300 hover:text-white border-t-2 h-16 "
                >
                  {Object.values(fila).map((celda, indiceCelda) => (
                    <TableCell key={indiceCelda}>{celda}</TableCell>
                  ))}
                </TableRow>
              ))
              .slice(firsIndex, lastIndex)}
          </TableBody>
        </TableNext>

        <Paginacion
          elementosActuales={elementosActuales}
          setElementosPagina={setelementosActuales}
          total={totalElementos}
          elementosPorPagina={elementosPorPagina}
        />
      </div>
    </>
  );
};

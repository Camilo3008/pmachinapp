import { Button, Pagination } from "@nextui-org/react";

export const Paginacion = ({
  // eslint-disable-next-line react/prop-types
  elementosPorPagina,
  // eslint-disable-next-line react/prop-types
  elementosActuales,
  // eslint-disable-next-line react/prop-types
  setElementosPagina,
  // eslint-disable-next-line react/prop-types
  total,
}) => {
  const numeroPaginas = Math.ceil(total / elementosPorPagina);

  const paginaSiguiente = () => {
    setElementosPagina(elementosActuales + 1);
  };

  const paginaAnterios = () => {
    setElementosPagina(elementosActuales - 1);
  };

  return (
    <>
      <div className="flex justify-between items-center mt-4">
        <Pagination
          radius="sm"
          color="primary"
          onChange={(numeroPaginas) => setElementosPagina(numeroPaginas)}
          total={numeroPaginas}
        />

        <div className="flex gap-2">
          <Button
            size="sm"
            color="primary"
            isDisabled={elementosActuales === 1 ? true : false}
            onClick={paginaAnterios}
          >
            Previous
          </Button>
          <Button
            size="sm"
            color="primary"
            onClick={paginaSiguiente}
            isDisabled={elementosActuales >= numeroPaginas ? true : false}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

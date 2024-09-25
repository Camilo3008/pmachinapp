import { Table, Search, Modal, useFetchDataUser, UserForm } from "../../../index";
import { useState } from "react";
import { Button, useDisclosure } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export const TableUser = () => {
  const [filtrarUsuario, setfiltrarUsuario] = useState([]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [cambiarDatosTabla, setcambiarDatosTabla] = useState(true);

  const navigate = useNavigate();

  const { usuarios, isLoading } = useFetchDataUser();
  if (!usuarios) {
    return <div>No hay usuario autenticado</div>;
  }

  // para navegar a paginas

  // prueba para roles

  const pruebaRoles = [
    {
      nombre: "2",
      apellidos: "Admin",
      correo: "El mejor del sena",
    },
  ];

  const informacionMa = usuarios.map((usuario) => ({
    nombre: usuario.first_name,
    apellidos: usuario.last_name,
    email: usuario.email,
    numero_identificacion: usuario.numero_documento,
    tipo_identificacion: usuario.tipo_documento,
    Rol: usuario.fk_rol,
  }));

  const buscarUsuario = (buscar) => {
    const filtrar = informacionMa.filter((usuario) => {
      return usuario.nombre.toLowerCase().includes(buscar.toLowerCase());
    });

    setfiltrarUsuario(filtrar);
  };

  // columnas para usuarios
  /* const columnasUsuarios = [
      "Nombre",
      "Apellidos",
      "Correo",
      "Identificacion",
      "Tipo",
    ]; */

  const columnasUsuarios = [
    "Nombre",
    "Apellidos",
    "Correo",
    "Identificacion",
    "Tipo de documento",
    "rol",
    "acciones",
  ];

  // columnas para roles
  const columnasRoles = ["id", "Rol", "Descripcion"];

  // tomar el id del usuario para poder editarlo
  const handleEdit = (numero_identificacion) => {
    const resultadoUsuario = usuarios.find(
      (persona) => persona.numero_documento === numero_identificacion
    );
    console.log(resultadoUsuario);
    navigate("/panel-control/edit", { state: { resultadoUsuario } });
  };

  //poder cambiar a de usuarios a roles y visiversa
  const handleUsuarios = () => {
    setcambiarDatosTabla(true);
  };

  const handleRoles = () => {
    setcambiarDatosTabla(false);
  };

  if (isLoading) {
    <>cargando</>;
  }

  return (
    <>
      <div className="flex flex-row w-full justify-between items-end">
        <Search
          label={"Nombre, Apellidos, correo, numero de documento"}
          buscar={buscarUsuario}
          placeholder={"Buscar"}
        />
        <div className="">
          <Button color="success" variant="bordered" onClick={handleUsuarios}>
            Usuarios
          </Button>
        </div>
        <div className="">
          <Button color="success" variant="bordered" onClick={handleRoles}>
            Roles
          </Button>
        </div>
        <Button onPress={onOpen} color="primary">
          Nuevo usuario
        </Button>
      </div>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        titulo={"Registrar Usuario"}
        className="rounded-lg shadow-lg bg-white p-6 max-w-lg mx-auto"
      >
         <UserForm />
      </Modal>

      <Table
        columnas={cambiarDatosTabla ? columnasUsuarios : columnasRoles}
        filas={
          cambiarDatosTabla
            ? filtrarUsuario.map((fila) => ({
                ...fila,
                acciones: (
                  <>
                    <Button
                      color="warning"
                      variant="bordered"
                      onClick={() => handleEdit(fila.numero_identificacion)}
                    >
                      Editar
                    </Button>
                  </>
                ),
              }))
            : pruebaRoles
        }
        elementosPorPagina={6}
      />
    </>
  );
};

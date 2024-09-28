import {
  Table,
  Search,
  Modal,
  useFetchDataUser,
  UserForm,
  useRolQuery,
} from "../../../index";
import { useState } from "react";
import { Button, useDisclosure, Spinner } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export const TableUser = () => {
  const [filtrarUsuario, setfiltrarUsuario] = useState([]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [cambiarDatosTabla, setcambiarDatosTabla] = useState(true);

  const { isLoading: loadinRol, rolCache } = useRolQuery();

  const navigate = useNavigate();

  const { usuarios, isLoading } = useFetchDataUser();
  if (!usuarios) {
    return <Spinner />;
  }

  if (loadinRol) {
    return <Spinner />;
  }

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
    return <>cargando</>;
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

      {/*  <UserForm /> */}

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
            : rolCache
        }
        elementosPorPagina={10}
      />
    </>
  );
};

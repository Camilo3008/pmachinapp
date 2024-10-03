import { useEffect } from "react";
import { Layout, UserUpdateForm } from "../../../index";

import { useLocation, useNavigate } from "react-router-dom";

export const EditUserAdmin = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // obtenemos al usuario
  const resultadoUsuario = location.state?.resultadoUsuario;

  useEffect(() => {
    // con este condicional verificamos que si llego la informacion de usuario,
    //de lo contrario retornamos al panel de control de admin
    if (!resultadoUsuario) {
      navigate("/panel-control");
    }
  }, [resultadoUsuario, navigate]);

  if (!resultadoUsuario) {
    return <div>Cargando...</div>;
  }
  return (
    <>
      <Layout>
        <UserUpdateForm userData={resultadoUsuario} />
      </Layout>
    </>
  );
};

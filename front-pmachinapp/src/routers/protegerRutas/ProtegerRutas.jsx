import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../index";

export const ProtectedRuter = () => {
  // nos devuelve un boleano, pues para poder verificar si tenemos permiso para
  // consultar la api
  const { shouldFetch } = useAuth();

  // debemos obtener el token de el almacenamiento local
  const token = localStorage.getItem("token");

  try {
    if (!shouldFetch) {
      return <>Cargando aqui</>;
    }

    if (!token || !shouldFetch) {
      return <Navigate to={"/"} />;
    }

    return <Outlet />;
  } catch (error) {
    console.error(error);
  }

  return <Outlet />;
};

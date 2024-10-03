import { useEffect, useState } from "react";
import { useAuth } from "../../index";
import { Outlet, Navigate } from "react-router-dom";

export const IsAdminRouter = () => {
  const { usuarioRol } = useAuth();

  const [isAuthorized, setIsAuthorized] = useState(null);

  useEffect(() => {
    // Verifica si el rol está disponible y si es el rol correcto
    if (usuarioRol) {
      setIsAuthorized(
        usuarioRol.trim().toLowerCase().startsWith("administrador")
      );
    }
  }, [usuarioRol]);

  // Si la autorización está en proceso, muestra un spinner o mensaje de carga
  if (isAuthorized === null) {
    return <div>Loading... aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa </div>;
  }

  // Redirige si el usuario no está autorizado
  if (!isAuthorized) {
    return <Navigate to="/home" />;
  }

  return <Outlet />;
};

export const IsAdminAndInstructor = () => {
  const { usuarioRol } = useAuth();
  const [isAuthorized, setIsAuthorized] = useState(null);

  useEffect(() => {
    // Verifica si el rol está disponible y si es el rol correcto
    if (usuarioRol) {
      setIsAuthorized(
        usuarioRol.trim().toLowerCase().startsWith("administrador") ||
          usuarioRol.trim().toLowerCase().startsWith("instructor")
      );
    }
  }, [usuarioRol]);

  // Si la autorización está en proceso, muestra un spinner o mensaje de carga
  if (isAuthorized === null) {
    return <div>Loading.. </div>;
  }

  // Redirige si el usuario no está autorizado
  if (!isAuthorized) {
    return <Navigate to="/home" />;
  }

  return <Outlet />;
};

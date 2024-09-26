import {
  Layout,
  useFetchDataUser,
  v,
  CardState,
  useAuth,
  useQueryAmbientes,
} from "../../../index";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const HomePage = () => {
  const { usuarios, isLoading } = useFetchDataUser();
  const { usuarioRol, isLoading: userLoading } = useAuth();
  const { ambientesCache, isLoading: ambientesLoading } = useQueryAmbientes();

  // mostrar cargando en pantalla
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    setCargando(isLoading || userLoading || ambientesLoading);
  }, [isLoading, userLoading, ambientesLoading]);

  if (isLoading) {
    return <div>No hay usuario autenticado</div>;
  }

  if (ambientesLoading) {
    return <div>No hay usuario autenticado</div>;
  }

  const rolUsuario = usuarioRol;

  const contenidoCard = [
    {
      title: "Total de usuarios",
      total: usuarios.length,
      icon: v.UsersIcon,
      link: "/panel-control",
      admin: "admin",
    },
    {
      title: "Total de ambientes",
      total: ambientesCache.length,
      icon: v.UsersIcon,
      link: "/panel-control",
      admin: "admini",
    },
  ];

  return (
    <>
      <Layout>
        {cargando && <>Cargando</>}
        {userLoading && <>Cargando</>}
        <div className="p-5">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {contenidoCard.map((value, index) => (
              <CardState
                key={index}
                total={value.total}
                icon={value.icon}
                title={value.title}
                link={
                  <>
                    {rolUsuario
                      .trim()
                      .toLowerCase()
                      .startsWith("administrador") ? (
                      <Link to={value.link}>ir</Link>
                    ) : (
                      " "
                    )}
                  </>
                }
              />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

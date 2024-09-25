import { Layout, useAuth, UserUpdateForm } from "../../../index";

export const PerfilSettingsPage = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    <>cargando</>;
  }

  if (!user) {
    return <div>No hay usuario autenticado</div>;
  }

  return (
    <>
      <Layout pagina={"Administrar Perfíl de usuario"}>
        <UserUpdateForm userData={user} />
      </Layout>
    </>
  );
};

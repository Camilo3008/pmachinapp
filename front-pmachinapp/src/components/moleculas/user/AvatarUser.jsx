import { DropDown, useAuth } from "../../../index";
import { User, Spinner } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const AvatarUser = () => {
  const { user, isLoading, logout } = useAuth();

  const navigate = useNavigate();

  const handleLoguot = async () => {
    logout();
    navigate("/");
  };
  if (isLoading) {
    return <Spinner />;
  }

  if (!user) {
    return <div>No hay usuario autenticado</div>;
  }

  const items = [
    <>
      <p className="font-bold">{user.first_name}</p>
      <p className="font-bold">{user.email}</p>
    </>,
    <>
      <p className="h-full">
        <Link to={"/perfil"}>Administrar Perfil</Link>
      </p>
    </>,

    <>
      <div className="h-full" onClick={handleLoguot}>
        salir
      </div>
    </>,
  ];

  return (
    <>
      <DropDown
        DropdownTriggerElement={<User name={`${user.first_name}`} />}
        dropdown={items}
      />
    </>
  );
};

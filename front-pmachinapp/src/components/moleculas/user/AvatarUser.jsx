import { DropDown, useAuth } from "../../../index";
import { User } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const AvatarUser = () => {
  const { user, isLoading, logout } = useAuth();

  const navigate = useNavigate();

  const handleLoguot = async () => {
    logout();
    navigate("/");
  };

  /*   useEffect(() => {
      console.log(user);
    }, [user]); */

  if (isLoading) {
    <>cargando</>;
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
        <Link to={"/perfil"}>administrar perfil</Link>
      </p>
    </>,

    <>
      <div onClick={handleLoguot}> salir </div>
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

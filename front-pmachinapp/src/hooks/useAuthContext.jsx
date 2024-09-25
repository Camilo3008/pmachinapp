import { useContext } from "react";
import { AuthContext } from "../context/AutContext";

export const useAuth = () => {
  return useContext(AuthContext);
};

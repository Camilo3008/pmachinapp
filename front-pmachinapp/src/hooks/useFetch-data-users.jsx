import { axiosClient } from "../index";
import { useQuery } from "@tanstack/react-query";

export const useFetchDataUser = () => {
  const {
    data: usuarios,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["usuarios-cache"],
    queryFn: async () => {
      // http://127.0.0.1:8000/api/user/user/
      const response = await axiosClient.get("user/user/");
      /*   console.log(response.data); */
      return response.data;
    },
    retry: 1,
    refetchOnMount: false, // Evita la recarga al montar el componente de nuevo
    refetchOnWindowFocus: false, // Evita la recarga cuando cambias de pestaña o ventanas
    refetchOnReconnect: false,
  });

  /*  console.log(usuarios); */

  return {
    usuarios,
    error,
    isLoading,
  };
};

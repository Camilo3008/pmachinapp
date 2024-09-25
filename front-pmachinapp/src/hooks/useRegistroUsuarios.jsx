import { axiosClient } from "../service/axiosClient";
import { useMutation } from "@tanstack/react-query";

export const useRegistroUsuario = () => {
  return useMutation({
    /* http://127.0.0.1:8000/api/user/registro/ */
    mutationFn: async (dataUsuario) => {
      //  console.log(dataUsuario, "hola como estas");

      // ['id', 'username', 'first_name', 'last_name', 'email', 'numero_documento', 'tipo_documento','password', 'fk_rol',]

      /*  console.log(dataUsuario); */

      /* http://127.0.0.1:8000/api/user/user/ */
      return await axiosClient.post("user/user/", dataUsuario);
    },

    onSuccess: (response) => {
      return response.data;
    },
    onError: (error) => {
      //console.error(error.response.data)
      return error.response?.data || { message: "Error desconocido" };
    },
  });
};

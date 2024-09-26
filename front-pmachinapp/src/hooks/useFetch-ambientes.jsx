import { axiosClient } from "../index";
import { useQuery } from "@tanstack/react-query";

export const useQueryAmbientes = () => {
  const {
    data: ambientesCache,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["ambientes-cache"],
    queryFn: async () => {
      const res = await axiosClient.get("ambiente/");
      console.log(res.data.length);
      return res.data;
    },
    retry: 1,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return {
    ambientesCache,
    isError,
    isLoading,
    error,
  };
};

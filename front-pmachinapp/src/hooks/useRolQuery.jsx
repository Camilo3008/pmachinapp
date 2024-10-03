import { axiosClient } from "../index";
import { useQuery } from "@tanstack/react-query";

export const useRolQuery = () => {
  const {
    data: rolCache,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["rol-cache"],
    queryFn: async () => {
      // http://127.0.0.1:8000/api/rol/
      const res = await axiosClient.get("/rol/");
      return res.data;
    },
    retry: 1,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return {
    rolCache,
    isLoading,
    isError,
    error,
  };
};

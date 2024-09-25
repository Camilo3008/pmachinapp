import { createContext, useEffect, useState } from "react";
import { axiosClient } from "../index";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const queryClient = useQueryClient();

  const [shouldFetch, setShouldFetch] = useState(false);

  const {
    data: user,
    status,
    error,
    isLoading,
    isError,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["userlogged"],
    queryFn: async () => {
      const response = await axiosClient.get("user/me/");
      /*   console.log(response.data); */
      return response.data;
    },
    retry: false,
    enabled: shouldFetch, // logout => false
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  const loginMutation = useMutation({
    mutationFn: (credential) =>
      axiosClient.post("user/login/", credential).then((res) => {
        setShouldFetch(true);
        return res.data;
      }),
    onError: (error) => {
      if (error.response) {
        return error.response;
      }
    },
  });

  const login = async (data) => {
    try {
      const response = await loginMutation.mutateAsync(data);
      localStorage.setItem("token", response.access);
      return response; // {acces, refresh}
    } catch (error) {
      return error.response;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    queryClient.setQueryData(["userlogged"], null);
    queryClient.invalidateQueries({ queryKey: ["userlogged"] });
    setShouldFetch(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      queryClient.setQueryData(["userlogged"], null);
      return;
    }
    setShouldFetch(true);
  }, [queryClient]);

  const value = {
    login,
    logout,
    user,
    status,
    error,
    isLoading,
    isError,
    isFetching,
    refetch,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

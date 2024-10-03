import { AuthProvider } from "../index";

// eslint-disable-next-line react/prop-types
export const ProviderContexts = ({ children }) => {
  return (
    <>
      <AuthProvider>{children}</AuthProvider>
    </>
  );
};

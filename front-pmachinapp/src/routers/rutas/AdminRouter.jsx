import { UserManagementPage } from "../../index";
import { Route, Routes } from "react-router-dom";

export const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<UserManagementPage />} />
      {/*      
      <Route path="/settings" element={<>hola como estan</>} />
      <Route path="/edit" element={<EditUserAdmin />} /> */}
    </Routes>
  );
};

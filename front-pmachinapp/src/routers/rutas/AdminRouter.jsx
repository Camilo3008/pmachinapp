import { UserManagementPage, EditUserAdmin } from "../../index";
import { Route, Routes } from "react-router-dom";

export const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<UserManagementPage />} />
      <Route path="/edit" element={<EditUserAdmin />} />
    </Routes>
  );
};

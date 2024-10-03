import { UserManagementPage, EditUserAdmin, IsAdminRouter } from "../../index";
import { Route, Routes } from "react-router-dom";

export const AdminRouter = () => {
  return (
    <Routes>
      <Route element={<IsAdminRouter />}>
        <Route path="/" element={<UserManagementPage />} />
      </Route>
      <Route path="/edit" element={<EditUserAdmin />} />
    </Routes>
  );
};

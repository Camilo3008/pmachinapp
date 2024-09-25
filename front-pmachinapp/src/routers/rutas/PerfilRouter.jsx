import { PerfilPage, PerfilSettingsPage } from "../../index";
import { Route, Routes } from "react-router-dom";

export const PerfilRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PerfilPage />} />
        <Route path="settings" element={<PerfilSettingsPage />} />
      </Routes>
    </>
  );
};

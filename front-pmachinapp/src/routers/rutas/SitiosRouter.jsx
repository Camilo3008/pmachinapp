import { AmbientesPage } from "../../index";
import { Route, Routes } from "react-router-dom";

export const SitiosRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/ambientes" element={<AmbientesPage />} />
      </Routes>
    </>
  );
};

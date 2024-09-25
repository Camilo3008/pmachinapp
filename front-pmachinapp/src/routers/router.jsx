import { LoginPage, HomePage, ResetpasswordPage } from "../index";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AdminRouter } from "./rutas/AdminRouter";
import { PerfilRoute } from "./rutas/PerfilRouter";

export const AppRouter = () => {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>

          <Route path="/reset-password" element={<ResetpasswordPage />}></Route>
          <Route path="/panel-control/*" element={<AdminRouter />}></Route>
          <Route path="/perfil/*" element={<PerfilRoute/>} />
        </Routes>
      </Suspense>
    </>
  );
};

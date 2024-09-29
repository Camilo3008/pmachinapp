import {
  LoginPage,
  HomePage,
  ResetpasswordPage,
  AdminRouter,
  PerfilRoute,
  SitiosRouter,
  ProtectedRuter,
} from "../index";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/reset-password" element={<ResetpasswordPage />}></Route>

          <Route element={<ProtectedRuter />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/panel-control/*" element={<AdminRouter />} />
            <Route path="/perfil/*" element={<PerfilRoute />} />
            <Route path="/sitios/*" element={<SitiosRouter />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

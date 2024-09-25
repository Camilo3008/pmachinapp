import { LoginPage, HomePage, ResetpasswordPage } from "../index";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AdminRouter } from "./rutas/AdminRouter";

export const AppRouter = () => {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>

          <Route path="/reset-password" element={<ResetpasswordPage />}></Route>
          <Route path="/panel-control/*" element={<AdminRouter />}></Route>
        </Routes>
      </Suspense>
    </>
  );
};

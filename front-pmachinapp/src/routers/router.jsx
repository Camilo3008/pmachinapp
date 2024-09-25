import { LoginPage, HomePage, ResetpasswordPage } from "../index";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>

          <Route path="/reset-password" element={<ResetpasswordPage />}></Route>
        </Routes>
      </Suspense>
    </>
  );
};

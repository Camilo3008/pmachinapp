import { LoginPage, HomePage } from "../index";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
        </Routes>
      </Suspense>
    </>
  );
};

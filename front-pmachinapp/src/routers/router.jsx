import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<>hola mundo</>}></Route>
        </Routes>
      </Suspense>
    </>
  );
};

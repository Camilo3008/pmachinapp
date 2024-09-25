import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Header, Footer, AvatarUser, SideBar, Breadcrumb } from "../../index";

// eslint-disable-next-line react/prop-types
export const Layout = ({ children, pagina }) => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-100 overflow-hidden">
        {/*  <Header color="bg-white shadow-sm" contenido={<AvatarCom />} /> */}

        <Header contenido={<AvatarUser />} />

        <main className="flex flex-grow overflow-hidden">
          <aside className="hidden lg:block ">
            <SideBar />
          </aside>

          <section className="flex-grow p-2 lg:p-8 overflow-auto">
            <Suspense
              fallback={
                <div className="flex justify-center items-center h-full">
                  <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                </div>
              }
            >
              <div className={`bg-white  shadow-lg h-full p-4 `}>
                <div className="lg:hidden mb-1 ">{/*  <MenuMobile /> */}</div>
                <Breadcrumb pageName={pagina} />
                {children}
              </div>
              <Outlet />
            </Suspense>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

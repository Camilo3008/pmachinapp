import { LoginLayout } from "../../../index";

export const LoginPage = () => {
  return (
    <>
      <LoginLayout>
        <div className="relative overflow-hidden ">
          <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
            <div className=" mx-auto max-w-7xl  px-4 sm:static sm:px-6 lg:px-8">
              <div className="sm:max-w-lg ">
                <h1 className="text-2xl font-bold tracking-tight text-green-600 sm:text-4xl">
                  {/*  {t("description_welcome")} */} Lorem ipsum dolor sit,
                  amet consectetur adipisicing elit. Velit quos nulla optio
                  accusantium reprehenderit impedit o
                </h1>
                <p className="mt-4 text-xl text-custom-blue">
                  {/* {t("welcome")} */} Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Molestiae minus qui molestias, iure ipsum,
                  animi a, nesciunt explicabo nulla recusandae reprehenderit
                  accusamus voluptatum aperiam modi eum odit cumque quasi!
                  Minus?
                </p>
              </div>

              {/*  <!-- Decorative image grid --> */}
              <div className="pointer-events-none h-svh lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                <div className="absolute transform  sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8 ">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 ">
                      <div className="h-64 w-44 overflow-hidden  rounded-lg sm:opacity-0 lg:opacity-100 bg-black">
                        <img
                          src="def_LOGOTIC.jpg"
                          className="h-full w-full object-cover z-20 object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg ">
                        <img
                          src="def_LOGOTIC.jpg"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg ">
                        <img
                          src="def_LOGOTIC.jpg"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg bg-black">
                        <img
                          src="def_LOGOTIC.jpg"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg bg-black">
                        <img
                          src="def_LOGOTIC.jpg"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg bg-black">
                        <img
                          src="def_LOGOTIC.jpg"
                          className="h-full w-full object-cover object-center"
                        />
                        ho
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="def_LOGOTIC.jpg"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LoginLayout>
    </>
  );
};

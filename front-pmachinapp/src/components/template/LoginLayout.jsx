import { Header, Footer, Modal, LoginForm } from "../../index";
import { Button, useDisclosure } from "@nextui-org/react";

// eslint-disable-next-line react/prop-types
export const LoginLayout = ({ children }) => {
  //para el modal
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Header
          contenido={
            <Button onPress={onOpen} color="primary">
              Iniciar Sesion
            </Button>
          }
          className="bg-white shadow-md"
        />
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          titulo={"Login"}
          className="rounded-lg shadow-lg bg-white p-6 max-w-lg mx-auto"
        >
          <LoginForm />
        </Modal>
        <main className="flex-grow h-full px-4 py-6 sm:px-6 lg:px-8 bg-gray-50 overflow-auto">
          {children}
        </main>
        <Footer className="bg-gray-800 text-white py-4 text-center" />
      </div>
    </>
  );
};

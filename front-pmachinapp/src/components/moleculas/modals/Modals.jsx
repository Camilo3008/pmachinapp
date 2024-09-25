import {
    ModalHeader,
    Modal as ModalNext,
    ModalBody,
    ModalContent,
    ModalFooter,
    Button,
  } from "@nextui-org/react";
  
  /* // eslint-disable-next-line react/prop-types
  { contenido, titulo } */
  // eslint-disable-next-line react/prop-types
  export const Modal = ({ isOpen, onOpenChange, titulo, children }) => {
    /*  const { onOpen, onOpenChange } = useDisclosure(); */
  
    return (
      <>
        <ModalNext
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          /* scrollBehavior="inside" */
          size=""
          classNames={{
            body: "py-6",
            header: "border-b-[1px] border-[#ccc]",
            footer: "border-t-[1px] border-[#ccc]",
            closeButton: "hover:bg-white/5 active:bg-white/10",
          }}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader>{titulo}</ModalHeader>
                <ModalBody>{children}</ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </ModalNext>
      </>
    );
  };
  
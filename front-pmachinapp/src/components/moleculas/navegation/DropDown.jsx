import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
// eslint-disable-next-line react/prop-types
export const DropDown = ({ DropdownTriggerElement, dropdown, onClick }) => {
  return (
    <>
      <Dropdown radius="sm">
        <DropdownTrigger className="cursor-pointer">
          {DropdownTriggerElement}
        </DropdownTrigger>
        <DropdownMenu variant="flat" className="p-7">
          {/*  eslint-disable-next-line react/prop-types */}
          {dropdown.map((item, index) => (
            <DropdownItem
              key={index}
              textValue={`item ${index}`}
              onClick={onClick}
              className="cursor-pointer flex text-center"
            >
              {item}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

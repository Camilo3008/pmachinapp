import { v } from "../index";
export const menus = [
  { name: "Inicio", link: "/home", icon: v.HomeIcon },
  {
    name: "Sitios",
    link: "#",
    icon: v.MapIcon,
    submenu: true,
    submenus: [
      { name: "Sedes", link: "/Sedes", logo: v.BuildingLibraryIcon },
      { name: "Areas", link: "/Areas", logo: v.MapIcon },
      { name: "Ambientes", link: "/sitios/ambientes", logo: v.MapIcon },
    ],
  },
  {
    name: "Mantenimientos",
    link: "#",
    icon: v.DocumentTextIcon,
    submenu: true,
    submenus: [
      {
        name: "Registrar_solicitud",
        link: "/solicitud/registrar",
        logo: v.PencilSquareIcon,
      },
      {
        name: "Registrar_mantenimiento",
        link: "/crear_ficha_mantenimiento",
        logo: v.WrenchIcon,
      },
      { name: "Solicitudes", link: "/solicitud", logo: v.DocumentIcon },
    ],
  },
  { name: "Equipo_maquinaria", link: "/Maquinas", icon: v.ServerIcon },
  { name: "Historial", link: "/Historial", icon: v.ClockIcon },
  {
    name: "Panel_control",
    link: "/panel-control",
    icon: v.UserGroupIcon,
  },
];

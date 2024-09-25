export const menus = [
    { name: "inicio", link: "/home", icon: "V.HomeIcon" },
    {
      name: "sitios",
      link: "#",
      icon: "V.MapIcon",
      submenu: true,
      submenus: [
        { name: "sedes", link: "/Sedes", logo: "V.BuildingLibraryIcon" },
        { name: "areas", link: "/Areas", logo: "V.MapIcon" },
        { name: "ambientes", link: "/Ambientes", logo: "V.MapIcon" },
      ],
    },
    {
      name: "mantenimientos",
      link: "#",
      icon: "V.DocumentTextIcon",
      submenu: true,
      submenus: [
        {
          name: "registrar_solicitud",
          link: "/solicitud/registrar",
          logo: "V.PencilSquareIcon",
        },
        {
          name: "registrar_mantenimiento",
          link: "/crear_ficha_mantenimiento",
          logo: "V.WrenchIcon",
        },
        { name: "solicitudes", link: "/solicitud", logo: "V.DocumentIcon" },
      ],
    },
    { name: "equipo_maquinaria", link: "/Maquinas", icon: "V.ServerIcon" },
    { name: "historial", link: "/Historial", icon: "V.ClockIcon" },
    {
      name: "panel_control",
      link: "/panel-control",
      icon: "FaUserGear",
    },
  ];
  
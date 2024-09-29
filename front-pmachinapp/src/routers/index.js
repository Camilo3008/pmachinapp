// ruta general
export { AppRouter } from "./router";

/* rutas */

// admin
export { AdminRouter } from "./rutas/AdminRouter";

// perfil
export { PerfilRoute } from "./rutas/PerfilRouter";

// sitios
export { SitiosRouter } from "./rutas/SitiosRouter";

// fichas

// mantenimientos

// las rutas protegidas
export { ProtectedRuter } from "./protegerRutas/ProtegerRutas";
export { IsAdminRouter, IsAdminAndInstructor } from "./protegerRutas/IsAdminRouter";

const nextRoutes = require("next-routes");
const routes = (module.exports = nextRoutes());

const APP_ROUTES = [
  {
    page: "create-password",
    pattern: "/"
  },
  {
    page: "create-password",
    pattern: "/create-password"
  }
];

APP_ROUTES.forEach(route => routes.add(route));

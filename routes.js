const nextRoutes = require("next-routes");
const routes = (module.exports = nextRoutes());

const APP_ROUTES = [
  {
    page: "index",
    pattern: "/"
  },
  {
    page: "create-password",
    pattern: "/create-password"
  }
];

APP_ROUTES.forEach(route => routes.add(route));

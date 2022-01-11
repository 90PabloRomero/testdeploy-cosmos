const expressJwt = require("express-jwt");
const util = require("util");
import getConfig from "next/config";
import cors from "cors";

const { serverRuntimeConfig } = getConfig();

export { jwtMiddleware };

jwtMiddleware.use(cors());

function jwtMiddleware(req, res) {
  const middleware = expressJwt({
    secret: serverRuntimeConfig.secret,
    algorithms: ["HS256"],
  }).unless({
    path: [
      // public routes that don't require authentication
      "/api/users/register",
      "/api/users/register-lead",
      "/api/users/authenticate",
    ],
  });

  return util.promisify(middleware)(req, res);
}

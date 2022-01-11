const bcrypt = require("bcryptjs");

import { apiHandler, usersRepo } from "helpers/api";
import Cors from "cors";
import initMiddleware from "../../lib/init-middleware";

export default apiHandler({
  post: register,
});

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["GET", "POST", "OPTIONS"],
  })
);
async function register(req, res) {
  await cors(req, res);
  // split out password from user details
  const { password, ...user } = req.body;

  // validate
  if (usersRepo.find((x) => x.username === user.username))
    throw `Usuario "${user.username}" existente`;

  // hash password
  user.hash = bcrypt.hashSync(password, 10);

  usersRepo.create(user);
  return res.status(200).json({});
}

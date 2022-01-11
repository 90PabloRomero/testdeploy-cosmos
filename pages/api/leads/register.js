const bcrypt = require("bcryptjs");

import { apiHandler, leadsRepo } from "helpers/api";

import Cors from "cors";
import initMiddleware from "../../../lib/init-middleware";

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["GET", "POST", "OPTIONS"],
  })
);
export default apiHandler({
  post: register,
});

async function register(req, res) {
  await cors(req, res);
  // split out password from user details
  const { password, ...lead } = req.body;

  // validate
  if (leadsRepo.find((x) => x.username === lead.username))
    throw `Usuario "${lead.username}" existente`;

  // hash password
  lead.hash = bcrypt.hashSync(password, 10);

  leadsRepo.create(lead);
  return res.status(200).json({});
}

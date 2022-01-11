const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
import getConfig from "next/config";

import { apiHandler, leadsRepo } from "helpers/api";

const { serverRuntimeConfig } = getConfig();

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
  post: authenticate,
});

async function authenticate(req, res) {
  await cors(req, res);
  const { username, password } = req.body;
  const lead = leadsRepo.find((u) => u.username === username);

  // validate
  if (!(lead && bcrypt.compareSync(password, lead.hash))) {
    throw "Datos de ingreso inválidos";
  }

  // create a jwt token that is valid for 7 days
  const token = jwt.sign({ sub: lead.id }, serverRuntimeConfig.secret, {
    expiresIn: "7d",
  });

  // return basic user details and token
  return res.status(200).json({
    id: lead.id,
    username: lead.username,
    firstName: lead.firstName,
    lastName: lead.lastName,
    token,
  });
}

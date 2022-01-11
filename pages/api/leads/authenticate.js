const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
import getConfig from "next/config";

import { apiHandler, leadsRepo } from "helpers/api";

const { serverRuntimeConfig } = getConfig();

export default apiHandler({
  post: authenticate,
});

function authenticate(req, res) {
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

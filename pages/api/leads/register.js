const bcrypt = require("bcryptjs");

import { apiHandler, leadsRepo } from "helpers/api";

export default apiHandler({
  post: register,
});

function register(req, res) {
  // // split out password from user details
  const { ...lead } = req.body;

  // // validate
  // if (leadsRepo.find((x) => x.username === lead.username))
  //   throw `Usuario "${lead.username}" existente`;

  // // hash password
  // lead.hash = bcrypt.hashSync(password, 10);

  leadsRepo.create(lead);
  return res.status(200).json({});
}

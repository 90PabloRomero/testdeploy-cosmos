const bcrypt = require("bcryptjs");

import { apiHandler, usersRepo } from "helpers/api";

export default apiHandler({
  post: register,
});

function register(req, res) {
  const { currentQuotes, ...user } = req.body;

  // validate
  if (usersRepo.find((x) => x.askedForQuote === true))
    throw `Usted ya tiene una cotizacion pendiente`;

  usersRepo.apply(user);
  return res.status(200).json({});
}

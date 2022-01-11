const bcrypt = require("bcryptjs");

import { apiHandler } from "helpers/api";
import { usersRepo, omit } from "helpers/api";
import Cors from "cors";
import initMiddleware from "../../../lib/init-middleware";
export default apiHandler({
  get: getById,
  put: update,
  delete: _delete,
});

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["GET", "POST", "OPTIONS"],
  })
);

async function getById(req, res) {
  await cors(req, res);
  const user = usersRepo.getById(req.query.id);

  if (!user) throw "Usuario no encontrado";

  return res.status(200).json(omit(user, "hash"));
}

async function update(req, res) {
  await cors(req, res);
  const user = usersRepo.getById(req.query.id);

  if (!user) throw "Usuario no encontrado";

  // split out password from user details
  const { password, ...params } = req.body;

  // validate
  if (
    user.username !== params.username &&
    usersRepo.find((x) => x.username === params.username)
  )
    throw `El usuario con el nombre "${params.username}" ya existe.`;

  // only update hashed password if entered
  if (password) {
    user.hash = bcrypt.hashSync(password, 10);
  }

  usersRepo.update(req.query.id, params);
  return res.status(200).json({});
}

async function _delete(req, res) {
  await cors(req, res);
  usersRepo.delete(req.query.id);
  return res.status(200).json({});
}

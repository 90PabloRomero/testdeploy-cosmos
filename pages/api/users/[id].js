const bcrypt = require("bcryptjs");

import { apiHandler } from "helpers/api";
import { usersRepo, omit } from "helpers/api";

export default apiHandler({
  get: getById,
  put: update,
  delete: _delete,
});

function getById(req, res) {
  const user = usersRepo.getById(req.query.id);

  if (!user) throw "Usuario no encontrado";

  return res.status(200).json(omit(user, "hash"));
}

function update(req, res) {
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

function _delete(req, res) {
  usersRepo.delete(req.query.id);
  return res.status(200).json({});
}

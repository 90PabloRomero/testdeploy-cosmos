const bcrypt = require("bcryptjs");

import { apiHandler } from "helpers/api";
import { leadsRepo, omit } from "helpers/api";

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
  get: getById,
  put: update,
  delete: _delete,
});

async function getById(req, res) {
  await cors(req, res);
  const lead = leadsRepo.getById(req.query.id);

  if (!lead) throw "Usuario no encontrado";

  return res.status(200).json(omit(lead, "hash"));
}

async function update(req, res) {
  await cors(req, res);
  const lead = leadsRepo.getById(req.query.id);

  if (!lead) throw "Usuario no encontrado";

  // split out password from user details
  const { password, ...params } = req.body;

  // validate
  if (
    lead.username !== params.username &&
    leadsRepo.find((x) => x.username === params.username)
  )
    throw `El usuario con el nombre "${params.username}" ya existe.`;

  // only update hashed password if entered
  if (password) {
    lead.hash = bcrypt.hashSync(password, 10);
  }

  leadsRepo.update(req.query.id, params);
  return res.status(200).json({});
}

async function _delete(req, res) {
  await cors(req, res);
  leadsRepo.delete(req.query.id);
  return res.status(200).json({});
}

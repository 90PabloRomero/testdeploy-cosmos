import { apiHandler, leadsRepo, omit } from "../../../helpers/api";

export default apiHandler({
  get: getLeads,
});

function getLeads(req, res) {
  // return leads without hashed passwords in the response
  const response = leadsRepo.getAll().map((x) => omit(x, "hash"));
  return res.status(200).json(response);
}

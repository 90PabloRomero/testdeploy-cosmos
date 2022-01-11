import { apiHandler, leadsRepo, omit } from "../../../helpers/api";
import Cors from "cors";
import initMiddleware from "../../../lib/init-middleware";

export default apiHandler({
  get: getLeads,
});

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["GET", "POST", "OPTIONS"],
  })
);

async function getLeads(req, res) {
  await cors(req, res);
  // return leads without hashed passwords in the response
  const response = leadsRepo.getAll().map((x) => omit(x, "hash"));
  return res.status(200).json(response);
}

import { apiHandler, usersRepo, omit } from "helpers/api";
import Cors from "cors";
import initMiddleware from "../../lib/init-middleware";

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["GET", "POST", "OPTIONS"],
  })
);
export default apiHandler({
  get: getUsers,
});

async function getUsers(req, res) {
  await cors(req, res);
  // return users without hashed passwords in the response
  const response = usersRepo.getAll().map((x) => omit(x, "hash"));
  return res.status(200).json(response);
}

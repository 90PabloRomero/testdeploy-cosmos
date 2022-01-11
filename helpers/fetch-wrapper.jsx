import getConfig from "next/config";

import { userService, leadService } from "../services";

const { publicRuntimeConfig } = getConfig();

export const fetchWrapper = {
  get,
  post,
  put,
  delete: _delete,
};
// from connecting cors to vercel
// async headers() {
//     return [
//       {
//         // matching all API routes
//         source: "/api/users/authenticate",
//         headers: [
//           { key: "Access-Control-Allow-Credentials", value: "true" },
//           { key: "Access-Control-Allow-Origin", value: "*" },
//           {
//             key: "Access-Control-Allow-Methods",
//             value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
//           },
//           {
//             key: "Access-Control-Allow-Headers",
//             value:
//               "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, Authorization, X-Api-Version, X-HTTP-Method-Override",
//           },
//         ],
//       },
//     ];
async function get(url) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(url),
    mode: "cors",
  };
  return await fetch(url, requestOptions).then(handleResponse);
}

async function post(url, body) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", ...authHeader(url) },
    credentials: "include",
    body: JSON.stringify(body),
    mode: "cors",
  };
  return await fetch(url, requestOptions).then(handleResponse);
}

async function put(url, body) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json", ...authHeader(url) },
    body: JSON.stringify(body),
    mode: "cors",
  };
  return await fetch(url, requestOptions).then(handleResponse);
}

// prefixed with underscored because delete is a reserved word in javascript
async function _delete(url) {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader(url),
    mode: "cors",
  };
  return await fetch(url, requestOptions).then(handleResponse);
}

// helper functions

function authHeader(url) {
  // return auth header with jwt if user is logged in and request is to the api url
  const user = userService.userValue;
  const isLoggedIn = user && user.token;
  const isApiUrl = url.startsWith(publicRuntimeConfig.apiUrl);
  if (isLoggedIn && isApiUrl) {
    return { Authorization: `Bearer ${user.token}` };
  } else {
    return {};
  }
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      if ([401, 403].includes(response.status) && userService.userValue) {
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        userService.logout();
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

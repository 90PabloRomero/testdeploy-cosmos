import { BehaviorSubject } from "rxjs";
import getConfig from "next/config";
import Router from "next/router";

import { fetchWrapper } from "../helpers";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/leads`;
const leadSubject = new BehaviorSubject(
  process.browser && JSON.parse(localStorage.getItem("lead"))
);

function login(username, password) {
  return fetchWrapper
    .post(`${baseUrl}/authenticate`, { username, password })
    .then((lead) => {
      // publish lead to subscribers and store in local storage to stay logged in between page refreshes
      leadSubject.next(lead);
      localStorage.setItem("lead", JSON.stringify(lead));

      return lead;
    });
}

function logout() {
  // remove user from local storage, publish null to user subscribers and redirect to login page
  localStorage.removeItem("lead");
  leadSubject.next(null);
  Router.push("/account/login");
}

function register(lead) {
  return fetchWrapper.post(`${baseUrl}/register`, lead);
}

function getAll() {
  return fetchWrapper.get(baseUrl);
}

function getById(id) {
  return fetchWrapper.get(`${baseUrl}/${id}`);
}

function update(id, params) {
  return fetchWrapper.put(`${baseUrl}/${id}`, params).then((x) => {

    return x;
  });
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(id) {
  return fetchWrapper.delete(`${baseUrl}/${id}`);
}
export const leadService = {
  lead: leadSubject.asObservable(),
  get leadValue() {
    return leadSubject.value;
  },
  login,
  logout,
  register,
  getAll,
  getById,
  update,
  delete: _delete,
};

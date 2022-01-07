const fs = require("fs");

// leads in JSON file for simplicity, store in a db for production applications
let leads = require("data/leads.json");

export const leadsRepo = {
  getAll: () => leads,
  getById: (id) => leads.find((x) => x.id.toString() === id.toString()),
  find: (x) => leads.find(x),
  create,
  update,
  delete: _delete,
};

function create(lead) {
  // generate new lead id
  lead.id = leads.length ? Math.max(...leads.map((x) => x.id)) + 1 : 1;

  // set date created and updated
  lead.dateCreated = new Date().toISOString();
  lead.dateUpdated = new Date().toISOString();

  // add and save lead
  leads.push(lead);
  saveData();
}

function update(id, params) {
  const lead = leads.find((x) => x.id.toString() === id.toString());

  // set date updated
  lead.dateUpdated = new Date().toISOString();

  // update and save
  Object.assign(lead, params);
  saveData();
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
function _delete(id) {
  // filter out deleted lead and save
  leads = leads.filter((x) => x.id.toString() !== id.toString());
  saveData();
}

// private helper functions

function saveData() {
  fs.writeFileSync("data/leads.json", JSON.stringify(leads, null, 4));
}

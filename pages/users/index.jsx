import { useState, useEffect } from "react";

import { Link, Spinner } from "components";
import { Layout } from "components/users";
import { userService, leadService } from "services";
import Head from "next/head";

export default Index;

function Index() {
  const [users, setUsers] = useState(null);
  const [leads, setLeads] = useState(null);

  useEffect(() => {
    userService.getAll().then((x) => setUsers(x));
  }, []);
  useEffect(() => {
    leadService.getAll().then((x) => setLeads(x));
  }, []);

  function deleteUser(id) {
    setUsers(
      users.map((x) => {
        if (x.id === id) {
          x.isDeleting = true;
        }
        return x;
      })
    );
    userService.delete(id).then(() => {
      setUsers((users) => users.filter((x) => x.id !== id));
    });
  }
  function deleteLead(id) {
    setLeads(
      leads.map((x) => {
        if (x.id === id) {
          x.isDeleting = true;
        }
        return x;
      })
    );
    leadService.delete(id).then(() => {
      setLeads((leads) => leads.filter((x) => x.id !== id));
    });
  }

  return (
    <Layout>
      <Head>
        <title>Area de administracion</title>
      </Head>
      <h1>Users</h1>
      <Link href="/users/add" className="btn btn-sm btn-success mb-2">
        Add User
      </Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th style={{ width: "30%" }}>First Name</th>
            <th style={{ width: "30%" }}>Last Name</th>
            <th style={{ width: "30%" }}>Username</th>
            <th style={{ width: "10%" }}></th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.username}</td>
                <td style={{ whiteSpace: "nowrap" }}>
                  <Link
                    href={`/users/edit/${user.id}`}
                    className="btn btn-sm btn-primary mr-1"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="btn btn-sm btn-danger btn-delete-user"
                    disabled={user.isDeleting}
                  >
                    {user.isDeleting ? (
                      <span className="spinner-border spinner-border-sm"></span>
                    ) : (
                      <span>Delete</span>
                    )}
                  </button>
                </td>
              </tr>
            ))}
          {!users && (
            <tr>
              <td data-colspan="4">
                <Spinner />
              </td>
            </tr>
          )}
          {users && !users.length && (
            <tr>
              <td data-colspan="4" className="text-center">
                <div className="p-2">No Users To Display</div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <hr />
      <h1>Leads</h1>
      <Link href="/leads/add" className="btn btn-sm btn-success mb-2">
        Add Lead User
      </Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th style={{ width: "30%" }}>Nombre</th>
            <th style={{ width: "30%" }}>Apellido</th>
            <th style={{ width: "30%" }}>Username</th>
            <th style={{ width: "30%" }}>Correo</th>
            <th style={{ width: "30%" }}>Telefono</th>
            <th style={{ width: "30%" }}>Pais de residencia</th>
            <th style={{ width: "10%" }}>Aseguradora elegida</th>
            <th style={{ width: "30%" }}> </th>
          </tr>
        </thead>
        <tbody>
          {leads &&
            leads.map((lead) => (
              <tr key={lead.id}>
                <td>
                  {lead.firstName}
                  <div className="">
                    <small className="pill">familiares:</small>
                    {lead.family &&
                      lead.family.map((fam) => (
                        <>
                          <tr className="">
                            <td>{fam.relationship}</td>
                            <td>
                              {fam.firstName} {fam.lastName}
                            </td>
                            <td>{fam.gender}</td>
                          </tr>
                        </>
                      ))}
                  </div>
                </td>
                <td>{lead.lastName}</td>
                <td>{lead.username}</td>
                <td>{lead.email}</td>
                <td>{lead.phone}</td>
                <td>{lead.country}</td>
                <td>{lead.insurance}</td>

                <td style={{ whiteSpace: "nowrap" }}>
                  <Link
                    href={`/leads/edit-lead/${lead.id}`}
                    className="btn btn-sm btn-primary mr-1"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteLead(lead.id)}
                    className="btn btn-sm btn-danger btn-delete-user"
                    disabled={lead.isDeleting}
                  >
                    {lead.isDeleting ? (
                      <span className="spinner-border spinner-border-sm"></span>
                    ) : (
                      <span>Delete</span>
                    )}
                  </button>
                </td>
              </tr>
            ))}
          {!leads && (
            <tr>
              <td data-colSpan="4">
                <Spinner />
              </td>
            </tr>
          )}
          {leads && !leads.length && (
            <tr>
              <td data-colSpan="4" className="text-center">
                <div className="p-2">No Users To Display</div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </Layout>
  );
}

import { useState, useEffect } from "react";

import { Layout, AddEdit } from "components/leads";
import { Spinner } from "components";
import { leadService, alertService } from "services";

export default Edit;

function Edit({ id }) {
  const [lead, setLead] = useState(null);

  useEffect(() => {
    // fetch user and set default form values if in edit mode
    leadService
      .getById(id)
      .then((x) => setLead(x))
      .catch(alertService.error);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <h1>Edit User(Lead)</h1>
      {lead ? <AddEdit lead={lead} /> : <Spinner />}
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  return {
    props: { id: params.id },
  };
}

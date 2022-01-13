import { useState, useEffect } from "react";

import { Layout, SendConfirmationStepThree } from "components/leads";
import { Spinner } from "components";
import { leadService, alertService } from "services";

export default ViewToSendConfirmation;

function ViewToSendConfirmation({ id }) {
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
      {lead ? <SendConfirmationStepThree lead={lead} /> : <Spinner />}
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  return {
    props: { id: params.id },
  };
}

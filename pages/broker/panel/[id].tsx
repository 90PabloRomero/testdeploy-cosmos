import { useState, useEffect } from "react";

import { Layout, SendConfirmationBroker } from "components/leads";
import { Spinner } from "components";
import { leadService, alertService } from "services";
import { SendConfirmationStepThree } from "components/leads/SendConfirmationStepThree";

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
      {lead ? <SendConfirmationBroker lead={lead} /> : <Spinner />}
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  return {
    props: { id: params.id },
  };
}

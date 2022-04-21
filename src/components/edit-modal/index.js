import React from 'react';
import { useFederatedComponent } from 'ab-federation-helpers';

const EditModal = (props) => {
  const { candidateNewModal, current, handleCandidateNewModal } = props;
  const system = {
    module: './editmodal',
    scope: 'editmodal',
    url: `${process.env.BLOX_ENV_URL_edit_modal}/remoteEntry.js`,
  };

  const { Component: FederatedComponent, errorLoading } = useFederatedComponent(
    system?.url,
    system?.scope,
    system?.module,
    React
  );

  console.log(FederatedComponent);

  return (
    <React.Suspense fallback={''}>
      {errorLoading
        ? `Error loading module "${module}"`
        : FederatedComponent &&
          props && (
            <FederatedComponent
    candidateNewModal={candidateNewModal}
    current={current}
    handleCandidateNewModal={handleCandidateNewModal}
            />
          )}
    </React.Suspense>
  );
};

export default EditModal;

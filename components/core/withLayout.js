import React from 'react';
import AppLayout from '../Layout';

export default ComposedComponent => props => (
  <AppLayout>
    <ComposedComponent {...props} />
  </AppLayout>
);

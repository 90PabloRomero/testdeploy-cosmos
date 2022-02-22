import React, {Component} from 'react';
import {getCookie} from '../../util/session';
import redirect from '../../util/redirect';

export default ComposedComponent =>
  class WithData extends Component {
    static async getInitialProps(context) {  
      const isLoggedIn = getCookie('user_id', context.req);
      const isUserRole = getCookie('user_role', context.req);
      if (!isLoggedIn) {
        switch (isUserRole) {
          case isUserRole == 'client':
            redirect(context, '/clientes/login');
          case isUserRole == 'broker':
            redirect(context, '/broker/login');
          case isUserRole == 'aseguradoras':
            redirect(context, '/aseguradoras/login');
        }
        
      }
      return {isLoggedIn};
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  };

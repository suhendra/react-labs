import React, { Component } from 'react';
import {Router, useRouterHistory} from 'react-router';
import AppRoutes from './AppRoutes';
import {createHashHistory} from 'history';

export default class Main extends Component {
  render(){
    return(
          <Router
            history={useRouterHistory(createHashHistory)({queryKey: false})}
            onUpdate={() => window.scrollTo(0, 0)}
          >
            {AppRoutes}
          </Router>
      );
  }
}

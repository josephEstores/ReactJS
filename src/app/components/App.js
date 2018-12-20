import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import { history } from '../helpers'

import './app.scss';
import Library from './containers/Library';
import Place from './containers/Place';

class AppComponent extends Component {

  render() {
    return (
      <div className="app-main-wrapper">
        <Router history={history}>
          <div className="app-main-container">
            <Route exact path='/' component={Library} />
            <Route path='/Place' component={Place} />
          
          </div>
        </Router>
      </div>
    )
  };
}

export default AppComponent;

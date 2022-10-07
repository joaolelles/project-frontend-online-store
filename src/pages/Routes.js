import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Search from './Search';

class Routes extends React.Component {
  render() {
    return (

      <Switch>
        <Route exact path="/" component={ Search } />
      </Switch>

    );
  }
}

export default Routes;

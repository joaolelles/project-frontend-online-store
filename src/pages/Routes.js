import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Search from './Search';
import ShoppingCart from './ShoppingCart';
import Details from './Details';

class Routes extends React.Component {
  render() {
    return (

      <Switch>
        <Route exact path="/" component={ Search } />
        <Route path="/ShoppingCart" component={ ShoppingCart } />
        <Route path="/Details/:id" component={ Details } />
      </Switch>

    );
  }
}

export default Routes;

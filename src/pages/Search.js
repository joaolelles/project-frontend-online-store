import React from 'react';
import { Link } from 'react-router-dom';
// import { Route } from 'react-router-dom';

class Search extends React.Component {
  // constructor() {
  // super();
  // this.state ={
  // message:
  // }
  // }

  render() {
    return (
      <div>
        <input type="text" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link data-testid="shopping-cart-button" to="/ShoppingCart">Comprar</Link>
        {/* <button>Comprar</button> */}
      </div>
    );
  }
}
export default Search;

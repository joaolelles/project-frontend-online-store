import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Category from '../components/Category';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      list: {},
      valor: false,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState(
      { [name]: value },
    );
  };

  handleClick = async () => {
    const { search } = this.state;
    const api = await getProductsFromCategoryAndQuery(false, search);
    if (!api) {
      this.setState({
        valor: false,
      });
    }
    this.setState({
      list: api,
      valor: true,
    });
  };

  render() {
    const { search, valor, list } = this.state;
    return (
      <div>
        <input
          type="text"
          name="search"
          data-testid="query-input"
          onChange={ this.handleChange }
          value={ search }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleClick }
        >
          Pesquisar
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link data-testid="shopping-cart-button" to="/ShoppingCart">Comprar</Link>
        <div>
          <Category />
        </div>
        <h3>
          { valor ? list.results.map((result, index) => (
            <div key={ index } data-testid="product">
              <p>{result.title}</p>
              <img src={ result.thumbnail } alt="imagem do produto" />
              <p>{result.price}</p>
            </div>)) : <p>Nenhum produto foi encontrado</p> }
        </h3>
      </div>
    );
  }
}
export default Search;

import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class Category extends React.Component {
  constructor() {
    super();
    this.state = {
      results: [],
      list: [],
      cartArray: [],
    };
  }

  async componentDidMount() {
    const info = await getCategories();
    this.setState({
      results: info,
    });
  }

  getCategories = async ({ target }) => {
    const api = await getProductsFromCategoryAndQuery(target.id);
    this.setState({
      list: api.results,
    });
  };

  addToCart = (valor) => {
    const { cartArray } = this.state;
    this.setState(({
      cartArray: [...cartArray, valor],
    }), () => this.save());
  };

  save = () => {
    const { cartArray } = this.state;
    localStorage.setItem('arraykey', JSON.stringify(cartArray));
  };

  render() {
    const { results, list } = this.state;
    return (
      <>
        <div>
          {results.map((result, index) => (
            <div key={ index }>
              <button
                type="button"
                data-testid="category"
                id={ result.id }
                onClick={ this.getCategories }
              >
                {result.name}

              </button>
            </div>
          ))}
        </div>
        <div>

          {list.map((result) => (
            <div key={ result.id }>
              <Link
                to={ `/Details/${result.id}` }
                data-testid="product-detail-link"
              >
                <div data-testid="product">
                  <p>{result.title}</p>
                  <img src={ result.thumbnail } alt="imagem do produto" />
                  <p>{result.price}</p>
                </div>
              </Link>
              <button
                type="button"
                data-testid="product-add-to-cart"
                onClick={ () => this.addToCart(result) }
              >
                Add

              </button>

            </div>
          ))}

        </div>

      </>

    );
  }
}

export default Category;

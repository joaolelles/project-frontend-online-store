import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class Category extends React.Component {
  constructor() {
    super();
    this.state = {
      results: [],
      list: [],
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
          <h3>
            {list.map((result, index) => (
              <Link
                to={ `/Details/${result.id}` }
                key={ result.id }
                data-testid="product-detail-link"
              >
                <div key={ index } data-testid="product">
                  <p>{result.title}</p>
                  <img src={ result.thumbnail } alt="imagem do produto" />
                  <p>{result.price}</p>
                </div>
              </Link>
            ))}
          </h3>
        </div>

      </>

    );
  }
}

export default Category;

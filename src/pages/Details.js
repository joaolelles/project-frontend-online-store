import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';
import Validate from '../components/Validate';

class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      productDetail: [],
      cartArray: [],
    };
  }

  componentDidMount() {
    this.handleDetails();
  }

  handleDetails = async () => {
    const { match } = this.props;
    const { id } = match.params;
    const getFetchId = await getProductById(id);
    this.setState({
      productDetail: getFetchId,
    });
  };

  addToCart = (valor) => {
    const { cartArray } = this.state;
    this.setState(({
      cartArray: [...cartArray, valor],
    }), () => this.save()); // setstate assincrono: ESTUDAR
  };

  save = () => {
    const { cartArray } = this.state; // segunda desestruturação MTO IMPORTANTE
    localStorage.setItem('arraykey', JSON.stringify(cartArray));
  };

  render() {
    const { productDetail } = this.state;
    return (
      <div data-testid="product">
        <img
          src={ productDetail.thumbnail }
          alt={ productDetail.title }
          data-testid="product-detail-image"
        />
        <p data-testid="product-detail-name">{productDetail.title}</p>
        <p data-testid="product-detail-price">{productDetail.price}</p>
        <Link to="/ShoppingCart">

          <button
            type="button"
            data-testid="shopping-cart-button"
          >
            Adicionar ao carrinho
          </button>

        </Link>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => this.addToCart(productDetail) }
        >
          Ir
        </button>
        {!productDetail.id ? null : (
          <Validate
            productId={ productDetail.id }
          />
        )}
      </div>
    );
  }
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Details;

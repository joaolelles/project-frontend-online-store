import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';

class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      productDetail: [],
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

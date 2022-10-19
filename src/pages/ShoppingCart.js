import React, { Component } from 'react';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      // numeroDeCliques: 0,
    };
  }

  render() {
    const stored = localStorage.getItem('arraykey');
    const arrayCart = JSON.parse(stored);
    return (
      arrayCart < 1
        ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p> : (
          arrayCart.map((e, i) => (
            <div key={ i } data-testid="product">
              <p data-testid="shopping-cart-product-name">{e.title}</p>
              <img src={ e.thumbnail } alt="imagem do produto" />
              <p>{e.price}</p>
              <p data-testid="shopping-cart-product-quantity">1</p>
            </div>
          ))
        )
    );
  }
}
export default ShoppingCart;

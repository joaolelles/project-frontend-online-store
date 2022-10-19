import React from 'react';
import PropType from 'prop-types';

class Validate extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      nota: '',
      texto: '',
      isValid: true,
      listaDeNotas: [],
    };
  }

  componentDidMount() {
    // const { listaDeNotas } = this.state;
    this.getEvaluation();
  }

  onInputChange = ({ target }) => {
    const valor = target.type === 'radio' ? target.id : target.value;
    this.setState(({
      [target.name]: valor,
    }));
  };

  validate = () => {
    const { nota } = this.state;
    if (this.isEmailValid() && nota) {
      this.setState(({
        isValid: true,
      }));
    } else {
      this.setState(({
        isValid: false,
      }));
    }
  };

  isEmailValid = () => {
    const { email } = this.state;
    const regex = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
    return regex.test(email);
  };

  handleSubmit = async () => {
    this.validate();
    const { listaDeNotas } = this.state;
    const { email, texto, nota } = this.state;
    const saveNota = {
      email,
      texto,
      rating: nota,
    };
    if (this.isEmailValid() && nota) {
      this.setState(({
        listaDeNotas: [...listaDeNotas, saveNota],
      }), () => {
        this.saveLocalStorage();
        this.setState(({
          email: '',
          nota: '',
          texto: '',
        }));
      });
    }
  };

  getEvaluation = () => {
    const { productId } = this.props;
    console.log(productId);
    const data = localStorage.getItem(productId) || [];
    console.log(data.length);
    console.log(data);
    if (data.length) {
      const listaDeNotas = JSON.parse(data);
      console.log(listaDeNotas);
      this.setState(({ listaDeNotas }));
    } else {
      this.setState(({ listaDeNotas: [] }));
    }
  };

  saveLocalStorage() {
    const { productId } = this.props;
    const { listaDeNotas } = this.state;
    localStorage.setItem(productId, JSON.stringify(listaDeNotas));
  }

  render() {
    const { email, nota, texto, isValid } = this.state;
    const { listaDeNotas } = this.state || []; //
    return (
      <form>
        <input
          data-testid="product-detail-email"
          type="texto"
          name="email"
          onChange={ this.onInputChange }
          value={ email }
        />
        <label htmlFor="1">
          <input
            data-testid="1-rating"
            name="nota"
            type="radio"
            onChange={ this.onInputChange }
            id="1"
            value={ nota }
          />
          1

        </label>
        <label htmlFor="2">
          <input
            data-testid="2-rating"
            name="nota"
            type="radio"
            onChange={ this.onInputChange }
            id="2"
            value={ nota }
          />
          2

        </label>
        <label htmlFor="3">
          <input
            data-testid="3-rating"
            name="nota"
            type="radio"
            id="3"
            onChange={ this.onInputChange }
            value={ nota }
          />
          3

        </label>
        <label htmlFor="4">
          <input
            data-testid="4-rating"
            name="nota"
            type="radio"
            id="4"
            onChange={ this.onInputChange }
            value={ nota }
          />
          4

        </label>
        <label htmlFor="5">
          <input
            data-testid="5-rating"
            name="nota"
            type="radio"
            id="5"
            onChange={ this.onInputChange }
            value={ nota }
          />
          5

        </label>
        <textarea
          data-testid="product-detail-evaluation"
          onChange={ this.onInputChange }
          value={ texto }
          name="texto"
        />
        <button
          type="button"
          data-testid="submit-review-btn"
          onClick={ this.handleSubmit }
        //   disabled={ !valid }
        >
          Avaliar
        </button>
        {!isValid && <p data-testid="error-msg">Campos inválidos</p>}

        { !listaDeNotas.length ? null : (listaDeNotas.map((avaliacao, index) => (
          <div key={ index }>
            <p data-testid="review-card-email">{ avaliacao.email }</p>
            <p data-testid="review-card-rating">{ avaliacao.rating }</p>
            <p data-testid="review-card-evaluation">{ avaliacao.texto }</p>
          </div>
        ))) }
      </form>
    );
  }
}

export default Validate;

Validate.propTypes = {
  productId: PropType.string.isRequired,
};

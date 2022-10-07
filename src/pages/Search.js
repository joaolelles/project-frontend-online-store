import React from 'react';
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
      </div>
    );
  }
}
export default Search;

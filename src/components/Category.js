import React from 'react';
import { getCategories } from '../services/api';

class Category extends React.Component {
  constructor() {
    super();
    this.state = {
      results: [],
    };
  }

  async componentDidMount() {
    const info = await getCategories();
    this.setState({
      results: info,
    });
  }

  render() {
    const { results } = this.state;
    return (
      <div>
        {results.map((result, index) => (
          <div key={ index }>
            <button type="button" data-testid="category">{result.name}</button>
          </div>
        ))}
      </div>
    );
  }
}

export default Category;

// import React from "react";

export async function getCategories() {
  const endpoint = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(endpoint);
  const categories = await response.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // const endpointQuery = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  // const endpointCategoryId = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  // const responseQuery = await fetch(endpointQuery);
  // const responseCategory = await fetch(endpointCategoryId);
  if (categoryId) {
    const endpointCategoryId = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
    const responseCategory = await fetch(endpointCategoryId);
    const dataCataegory = await responseCategory.json();
    return dataCataegory;
  }
  if (query) {
    const endpointQuery = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
    const responseQuery = await fetch(endpointQuery);
    const dataQuery = await responseQuery.json();
    return dataQuery;
  }

  if (categoryId && query) {
    const endpointCategoryIdEQuery = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`;
    const responseCategory = await fetch(endpointCategoryIdEQuery);
    const dataCataegoryEQuery = await responseCategory.json();
    return dataCataegoryEQuery;
  }
}

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}

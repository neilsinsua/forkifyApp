import {base} from './base'

export const getQuery = () => {
  const query = base.searchField.value
  return query;
}

//function to render all
export const renderAll = (results) => {
  results.forEach(renderOne);
};

//function to render one result
const renderOne = (result) => {
  //replace html text with 1.result.image_url 2.result.recipe_id 3.result.title 4.result.publisher
  let insert = `
  <a class="results__link results__link--active" href=${result.recipe_id}>
  <figure class="results__fig">
      <img src=${result.image_url} alt=${result.title}>
  </figure>
  <div class="results__data">
      <h4 class="results__name">${result.title}</h4>
      <p class="results__author">${result.publisher}</p>
  </div>
</a>
  `;
  //inject html
  base.results.insertAdjacentHTML('beforeend', insert);
};
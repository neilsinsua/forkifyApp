import {base} from './base'

//Get search query
export const getQuery = () => {
  const query = base.searchField.value
  return query;
};

//Clear search field
export const clearField = () => {
  base.searchField.value = '';
}

//Clear UI
export const clearResults = () => {
  base.results.innerHTML = '';
}

//Shorten title
const shortenRecipeTitle = (title, limit) => {
  const arrTitle = title.split(/[\s-]+/);
  const newTitle = [];
  for(let i = 0; i < limit; i++) {
    newTitle.push(arrTitle[i]);
  }
  console.log(`${newTitle.join(' ')}...${arrTitle[arrTitle.length - 1]}`);
}

//Render all results
export const renderAll = (results) => {
  results.forEach(renderOne);
};

//Render one result
const renderOne = (result) => {
  /*
  1.result.image_url 
  2.result.recipe_id 
  3.result.title 
  4.result.publisher*/
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
  //Inject into UI
  base.results.insertAdjacentHTML('beforeend', insert);
};
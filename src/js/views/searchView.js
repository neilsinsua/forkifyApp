import {domElements} from './base'
import {loader} from './base'

//Render Loader
export const renderLoader = parent => {
  parent.insertAdjacentHTML('afterbegin',loader);
}

//Clear Loader
export const clearLoader = parent => {
  parent.innerHTML = '';
}

//Get search query
export const getQuery = () => {
  const query = domElements.searchField.value
  return query;
};

//Clear search field
export const clearField = () => {
  domElements.searchField.value = '';
}

//Clear UI
export const clearResults = () => {
  domElements.resultList.innerHTML = '';
}

//Shorten title
const shortenRecipeTitle = (title, limit = 3) => {
  const arrTitle = title.split(/[\s]+/);
  const newTitle = [];
  for(let i = 0; i < limit; i++) {
    newTitle.push(arrTitle[i]);
  }
  return `${newTitle.join(' ')} ...${arrTitle[arrTitle.length - 1]}`;
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
  <li>
    <a class="results__link" href=${result.recipe_id}>
      <figure class="results__fig">
        <img src=${result.image_url} alt=${result.title}>
      </figure>
      <div class="results__data">
        <h4 class="results__name">${shortenRecipeTitle(result.title)}</h4>
        <p class="results__author">${result.publisher}</p>
      </div>
    </a>
 </li>
  `;
  //Inject into UI
  domElements.resultList.insertAdjacentHTML('beforeend', insert);
};
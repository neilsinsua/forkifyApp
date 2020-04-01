import {SearchResult} from './models/Search';
import * as searchView from './views/searchView';
import {domElements} from './views/base';
import {Recipe} from './models/Recipe';

//create an object to hold states
const state = {};

//clear Hash
window.location.hash = '';

//****SEARCH CONTROLLER:

//Actual controller
const controlSearch = async (event) => {
  event.preventDefault();
  //Get query from form field
  const query = searchView.getQuery(); //some function in view()
  //Clear field
  searchView.clearField();
  //Clear UI results
  searchView.clearResults();
  //Render Loader
  searchView.renderLoader(domElements.resultList);
  

  if(query) {
    //Create new search object and store in state
    state.search = new SearchResult(query);
    //Call search method
    await state.search.getFood();
    //Clear Loader
    searchView.clearLoader(domElements.resultList);
    
  };
  //Render each result to UI
  searchView.renderAll(state.search.result);
  

};

//Add event listener
domElements.searchForm.addEventListener('submit', controlSearch);


domElements.resultPages.addEventListener('click', (e) => {
  //When user clicks button
  const btn = e.target.closest('.btn-inline');
  if(btn) {
    //Clear UI results
    searchView.clearResults();
    //Set page number to btn data
    //Render results to UI
    searchView.renderAll(state.search.result, Number(btn.dataset.goto));
  }
})

//****RECIPE CONTROLLER:

//Actual controller
const controlRecipe = async () => {
  //Get recipe id stored in hash
  const id = window.location.hash.replace('#', '');

  if(id) {
    //Create new Recipe
    state.recipe = new Recipe(id);
    //Get recipe data
    await state.recipe.getRecipe();
    //Call calc time
    state.recipe.calcTime();
    //Call calc servings
    state.recipe.calcServings();
  }
};

//Add event listener
window.addEventListener('hashchange', controlRecipe);

state.recipe = new Recipe(47746);




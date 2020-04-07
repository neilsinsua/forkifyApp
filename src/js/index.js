import {SearchResult} from './models/Search';
import * as searchView from './views/searchView';
import {domElements, renderLoader, clearLoader} from './views/base';
import {Recipe} from './models/Recipe';
import * as recipeView from './views/recipeView';

//create an object to hold states
const state = {};

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
  renderLoader(domElements.resultList);
  

  if(query) {
    //Create new search object and store in state
    state.search = new SearchResult(query);

    try {
      //Call search method
      await state.search.getFood();
      //Clear Loader
      clearLoader(domElements.resultList);
    } catch(error) {
      console.log('Search Error')
    };
    
  };

  //Render each result to UI
  searchView.renderAll(state.search.result);
  

};

//When user submits search execute controlSearch
domElements.searchForm.addEventListener('submit', controlSearch);

//When user clicks page button go to next page
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
    //Render loader
    renderLoader(domElements.recipe);

    //Create new Recipe
    state.recipe = new Recipe(id);
    try {
      //Clear Recipe UI
      recipeView.clearFigure();
      //Get recipe data
      await state.recipe.getRecipe();
      //Call calc time
      state.recipe.calcTime();
      //Call calc servings
      state.recipe.calcServings();
      //Parse ingredient
      state.recipe.parseIngredients();
      console.log(state.recipe);
      //Render recipe to UI
      recipeView.renderRecipe(state.recipe);

    } catch(error) {
      alert(error);
    }
  }


};

//When user clicks a recipe execute controlRecipe
['hashchange', 'load'].forEach( el => window.addEventListener(el, controlRecipe));






import {SearchResult} from './models/Search'
import * as searchView from './views/searchView'
import {domElements} from './views/base'

//create an object to hold states
const state = {};

//When user clicks search button:
domElements.searchForm.addEventListener('submit', async (event) => {
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
    //Execute search method and store results in object
    const results = await state.search.search();
    state.search.result = results.data.recipes;
    console.log(state);
    //Clear Loader
    searchView.clearLoader(domElements.resultList);
    
  };
  //Render each result to UI
  searchView.renderAll(state.search.result);
  

});


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

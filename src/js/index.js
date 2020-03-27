import {SearchResult} from './models/Search'
import * as searchView from './views/searchView'
import {base} from './views/base'

//create an object to hold states
const state = {};

//When user licks search button trigger:
base.searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  //Get query from form field
  const query = searchView.getQuery(); //some function in view()

  //Clear field
  searchView.clearField();
  //Clear UI results
  searchView.clearResults();
  

  if(query) {
    //Create new search object and store in state
    state.search = new SearchResult(query);
    //Execute search method and store results in object
    const results = await state.search.search();
    state.search.result = results.data.recipes;
    console.log(state);
    //Render each result to UI
    searchView.renderAll(state.search.result);
  };

  

});

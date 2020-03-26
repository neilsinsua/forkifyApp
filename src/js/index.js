import {SearchResult} from './models/Search'
import * as searchView from './views/searchView'
import {base} from './views/base'

//create an object to hold states
const state = {};

//when user clicks search button trigger:
//1.add event listener to search button
base.searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();
//2. get input query from search bar
  const query = searchView.getQuery(); //some function in view()
  console.log(query);
//3. if there is a query feed value into search model
  // create a new search object from search model with this.query set to query
  // use search method await then store in state
  if(query) {
    state.search = new SearchResult(query);
    //execute search method
    const results = await state.search.search();
    state.search.result = results.data.recipes;
    console.log(state);
  };

//display search results to html
  //call some view function(state.search.result)
  //render each result to html
  searchView.renderAll(state.search.result);

});

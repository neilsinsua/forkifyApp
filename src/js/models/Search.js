//GET method axios
import axios from 'axios';
 
//Search class
export class SearchResult {
  //Search query
  constructor(query) {
    this.query = query;
  }

  //search method, input is this.query, output is recipe is array
  async getFood() {
   try {
     //Get data from api
     let res = await axios(`https://forkify-api.herokuapp.com/api/search?q=${this.query}`);
     res = res.data.recipes;
     //Store results in object
     this.result = res;
     return res;
   } catch(error) {
     alert(error);
   };
 };
};
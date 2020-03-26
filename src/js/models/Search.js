import axios from 'axios';
 
//search class
export class SearchResult {
  constructor(query) {
    this.query = query;
  }

  //search method, input is this.query, output is recipe is array
  async search() {
   try {
     const res = await axios(`https://forkify-api.herokuapp.com/api/search?q=${this.query}`);
     return res;
   } catch(error) {
     alert(error);
   };
 };
};
import axios from 'axios'

export class Recipe {
  //Recipe id
  constructor(id) {
    this.id = id;
  }

  //get Recipes, store recipe info in object
  async getRecipe() {
    try {
      let res = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
      res = res.data.recipe;
      this.publisher = res.publisher;
      this.url = res.source_url;
      this.image = res.image_url;
      this.title = res.title;
      this.ingredients = res.ingredients;
      console.log(res);
      return
    } catch (error) {
      alert(error);
    }
  }

  //Time to cook in minutes 15 min for every 3 ingredients
  calcTime() {
    //Time in minutes
    this.time = Math.ceil(this.ingredients.length / 3) * 15;
  }

  calcServings() {
    //Regex to find ouce amount in ingredient string
    let re = /(?<=\()(.*)(?= ounce)/;
    //iterate ingredient array to sum ounces
    let oz = 0;
    this.ingredients.forEach(el => {
      if(re.exec(el)) {
        oz += parseFloat(re.exec(el)[0]);
      }
    });
    //store ounces in object
    this.oz = oz;
    console.log(`${this.oz} ounces`);
  }
}
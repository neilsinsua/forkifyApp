import axios from 'axios';

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
    this.servings = 4;
  }

  ingredientSplitter (ingredient) {
    //List of units
    const unitShort = ['tbsp', 'tbsp', 'tsp', 'tsp', 'oz', 'oz', 'cup', 'cup', 'lb', 'lb'];
    //Convert ingredient into array
    const ingredientArr = ingredient.split(' ');
    //Find index of unit in array
    const unitIndex = ingredientArr.findIndex(el => {
      return unitShort.includes(el)
    });
    //Scenario1: yes amount, yes unit 
    if(unitIndex > -1) {
      return {
      amount: eval(ingredientArr.slice(0, unitIndex).join('+')).toFixed(1),
      unit: ingredientArr[unitIndex],
      ingredient: ingredientArr.slice(unitIndex + 1).join(' ')
      };
    //Scenario2: yes amount, no unit
    } else if(parseInt(ingredientArr[0], 10)) {
      return {
      amount: parseInt(ingredientArr[0], 10),
      unit: '',
      ingredient: ingredientArr.slice(1).join(' ')
      };
    //Scenario2: no amount, no unit 
    } else if(unitIndex === -1) {
      return {
      amount: 1,
      unit: '',
      ingredient: ingredient
      };
    };
  }

  parseIngredients() {
    const unitLong = ['tablespoons', 'tablespoon', 'teaspoons', 'teaspoon', 'ounces', 'ounce', 'cups', 'cup', 'pounds', 'pound'];
    const unitShort = ['tbsp', 'tbsp', 'tsp', 'tsp', 'oz', 'oz', 'cup', 'cup', 'lb', 'lb'];
    //Create new array of standardized ingredients
    let stdIngredient = this.ingredients.map(el => {

      //Shorten unit spelling
      let ingredient = el.toLowerCase();
      unitLong.forEach((el, i) => {
        ingredient = ingredient.replace(el, unitShort[i]);
      });

      //Remove parentheses with spaces: 1 cup (20 ounces) flour
      ingredient = ingredient.replace(/ \((.*?)\) /g, ' ');
      //Remove parentheses without: flour(20 ounces)
      ingredient = ingredient.replace(/\((.*?)\)/g,'');

      //Object of parsed ingredients into amount, unit, name
      ingredient = this.ingredientSplitter(ingredient);

      return ingredient;
    });
    this.stdIngredients = stdIngredient;
  }
}
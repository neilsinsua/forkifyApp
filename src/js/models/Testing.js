
//Scenario1: no amount, no unit (unitIndex === -1 && parseInt(ingredientArr[0], 10) === NaN)
const ingredient3 = '4 1/2 cup unbleached high-gluten, bread, or all-purpose flour';
//Scenario2: yes amount, no unit (unitIndex === -1 && parseInt(ingredientArr[0], 10))
const ingredient2 = '3 peeled onions';
//Scenario3: yes amount, yes unit (unitIndex > -1)
const ingredient1 = '2 oz of flour';

const ingredientParser = (ingredient) => {
  //list of units
  const unitShort = ['tbsp', 'tbsp', 'tsp', 'tsp', 'oz', 'oz', 'cup', 'cup', 'lb', 'lb'];
  //convert ingredient into array
  const ingredientArr = ingredient.split(' ')
  console.log(ingredientArr)
  //find index of unit in array
  const unitIndex = ingredientArr.findIndex(el => {
    return unitShort.includes(el)
  });
  console.log(unitIndex);
  console.log(parseInt(ingredientArr[0], 10))
  console.log(ingredient)
  console.log(eval(ingredientArr.slice(0, unitIndex).join('+')))
  //Scenario1: yes amount, yes unit 
  if(unitIndex > -1) {
    return ingredientObj = {
      amount: eval(ingredientArr.slice(0, unitIndex).join('+')),
      unit: ingredientArr[unitIndex],
      ingredient: ingredientArr.slice(unitIndex + 1).join(' ')
    };
    //Scenario2: yes amount, no unit
  } else if(parseInt(ingredientArr[0], 10)) {
    return ingredientObj = {
      amount: parseInt(ingredientArr[0], 10),
      unit: '',
      ingredient: ingredientArr.slice(1).join(' ')
    };
    //Scenario2: no amount, no unit 
  } else if(unitIndex === -1) {
    return ingredientObj = {
      amount: '1',
      unit: '',
      ingredient: ingredient
    };
    
  }
}

console.log(ingredientParser(ingredient3));


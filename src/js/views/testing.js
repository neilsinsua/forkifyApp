var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango", 'Watermelon', 'Papaya', 'Strawberry', 'Kiwi'];

const paging = (arr, page = 2, resPerPage = 4) => {
  console.log(arr.slice((page - 1) * (resPerPage), (page) * (resPerPage)));
};

paging(fruits)


//1st page
//slice(0, resPerPage - 1)
//2nd page
//slice(respPerPage - 1, resPerPage * 2 - 1)
//3rd page
//slice(resperPage * 2, )

//(1 - 1) * (resPerPage - 1), 1 * (resPerPage - 1)
//(2 - 1) * (resPerPage - 1), 2 * (resPerPage - 1)
//(page - 1) * (resPerPage - 1), (page) * (resPerPage - 1);
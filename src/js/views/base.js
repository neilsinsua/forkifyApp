
//Module to hold all DOM components
export const domElements = {
  searchField: document.querySelector('.search__field'),
  searchForm: document.querySelector('.search'),
  searchButton: document.querySelector('.btn search__btn'),
  resultList: document.querySelector('.results__list'),
  results: document.querySelector('.results'),
  titleLength: document.querySelector('.title__length'),
  resultPages: document.querySelector('.results__pages'),
};

//Loading Spinner
export const loader = `
  <div class="loader">
    <svg>
      <use href="./img/icons.svg#icon-cw"></use>
    </svg>
  </div>
`;

//Pagination Buttons
export const pageButton = (page, type) => {
  return `
  <button class="btn-inline results__btn--${type}" data-goto="${type == 'next' ? page + 1 : page - 1}">
    <span>Page ${type == 'next' ? page + 1 : page - 1}</span>
    <svg class="search__icon">
      <use href="img/icons.svg#icon-triangle-${type == 'next' ? 'right' : 'left'}"></use>
    </svg>
  </button>
 `
};
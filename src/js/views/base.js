
//Module to hold all DOM components
export const domElements = {
  searchField: document.querySelector('.search__field'),
  searchForm: document.querySelector('.search'),
  searchButton: document.querySelector('.btn search__btn'),
  resultList: document.querySelector('.results__list'),
  results: document.querySelector('.results'),
  titleLength: document.querySelector('.title__length'),
};

//Loading Spinner
export const loader = `
  <div class="loader">
    <svg>
      <use href="./img/icons.svg#icon-cw"></use>
    </svg>
  </div>
`
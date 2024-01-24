import { getRecipes } from "./functions/getRecipes.js";
import { searchInput } from "./functions/searchInput.js";

const inputSearch = document.getElementById('search__input');
const searchBtn = document.querySelector('.search__btn');

inputSearch.addEventListener('input', () => {
    searchInput(inputSearch.value);
});

function init () {
    getRecipes();
}

init();
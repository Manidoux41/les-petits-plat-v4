import { getRecipes } from "./functions/getRecipes.js";
import { searchInput } from "./functions/searchInput.js";

const inputSearch = document.getElementById('search__input');

inputSearch.addEventListener('input', (e) => {
    searchInput(e.target.value);
});



function init () {
    getRecipes();
}

init();
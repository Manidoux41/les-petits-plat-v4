import { getRecipes } from "./functions/getRecipes.js";
import { searchInput, searchInputFilterCategories } from "./functions/searchInput.js";

const inputSearch = document.getElementById('search__input');

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('filter-selected__itemList')) {
        console.log(event.target.textContent);

        const filterSelected = document.querySelector('.filter-selected');
        console.log(filterSelected);
        const newItem = document.createElement('div');
        newItem.classList.add('filter-selected__item');
        newItem.innerHTML = `
            <span class="item__name">${event.target.textContent}</span>
            <span class="item__close__icon">
                <i class="fa-solid fa-xmark"></i>
            </span>
        `;
        filterSelected.appendChild(newItem);
    }
});









inputSearch.addEventListener('input', (e) => {
    searchInput(e.target.value);
});





function init () {
    getRecipes();
}

init();
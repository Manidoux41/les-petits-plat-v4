import { getRecipes } from "./functions/getRecipes.js";
import { searchInput } from "./functions/searchInput.js";

const inputSearch = document.getElementById('search__input');

document.addEventListener('click', function(e) {
    if(e.target && e.target.classList.contains('filter-selected__itemList')) {
        console.log(e.target.textContent);
        let filterSelected = document.querySelector('.filter-selected');
        filterSelected.style.display = "block";
        let newItem = document.createElement('div');
        newItem.classList.add('filter-selected__item');
        newItem.innerHTML = `
            <span class="item__name">${e.target.textContent}</span>
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
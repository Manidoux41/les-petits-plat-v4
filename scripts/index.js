import { getCategories } from "./functions/getCategories.js";
import { getRecipes } from "./functions/getRecipes.js"; 
import { searchInput} from "./functions/searchInput.js";

const inputSearch = document.getElementById('search__input');

/* document.addEventListener('click', function (event) {
    if (event.target.classList.contains('filter-selected__itemList')) {
        console.log(event.target.textContent);
        

        if (!event.target.classList.contains('active')) {
            event.target.classList.add('active');
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
            searchInputFilterCategories(event.target.textContent);
        } else {
            event.target.classList.remove('active');
            const filterItems = document.querySelectorAll('.filter-selected__item');
            filterItems.forEach(item => {
                if (item.querySelector('.item__name').textContent === event.target.textContent) {
                    item.remove();
                }
            });
        }


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
       
    }
});

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('item__close__icon') || event.target.classList.contains('fa-xmark')) {
        const itemToRemove = event.target.closest('.filter-selected__item');
        itemToRemove.remove();
    }
}); */

inputSearch.addEventListener('input', (e) => {
    searchInput(e.target.value);
});




function init () {
    getRecipes();
    getCategories();
}

init();
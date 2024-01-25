
export function createCategoriesTemplate (categories) {

    
    const filtersCategories = document.querySelector('.filters-categories'); // select the filtersCategories


    for (const category in categories) { // for each category in categories
        const newDiv = document.createElement('div'); // create a new div
        newDiv.classList.add('filters-categories__' + category); // add the class to the new div
        newDiv.innerHTML = `
            <h2 class="filter__title ${category}">${category}</h2>
            <span class="down-chevron">
                <i class="fa-solid fa-chevron-up"></i>
            </span>
        `;
        filtersCategories.appendChild(newDiv); // append the new div to the filtersCategories

        const newUl = document.createElement('ul'); // create a new ul
        newUl.classList.add('filter__list'); // add the class to the new ul
        newDiv.appendChild(newUl); // append the new ul to the new div

        categories[category].forEach(item => { // for each item in the category
            const newItem = document.createElement('li'); // create a new li
            newItem.classList.add('filter-selected__itemList'); // add the class to the new li
            newItem.innerHTML = `${item}`; // add the item to the new li
            newUl.appendChild(newItem); // append the new li to the new ul
        });

    }
}

export function createCategoriesTemplate(categories) {


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


       newDiv.querySelector('.down-chevron').addEventListener('click', function() {
            this.parentElement.classList.toggle('active');
            if (this.parentElement.classList.contains('active')) {
                let categoryList = categories[category];
                let uniqueCategoryList = [...new Set(categoryList)].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
                let listContainer = document.createElement('ul');
                uniqueCategoryList.forEach(item => {
                    let listItem = document.createElement('li');
                    listItem.textContent = item;
                    listContainer.appendChild(listItem);
                });
                this.parentElement.appendChild(listContainer);
            } else {
                let listContainer = this.parentElement.querySelector('ul');
                if (listContainer) {
                    this.parentElement.removeChild(listContainer);
                }
            }
        });
    };
}



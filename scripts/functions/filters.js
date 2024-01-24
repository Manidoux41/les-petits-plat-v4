import { getCategories } from "../functions/getCategories.js";
import { recipes } from "../datas/recipes.js";

    const chevron = document.querySelectorAll('.down-chevron');

    for (let i = 0; i < chevron.length; i++) {
        chevron[i].addEventListener('click', () => {
            const parentElement = chevron[i].parentElement;
            parentElement.classList.toggle('active');
            //console.log(parentElement);

            if (parentElement.classList.contains('active')) {
                let newDiv = document.createElement('div');
                newDiv.classList.add('newDiv')
                newDiv.innerHTML = `
                    <div class="input-search-categories">
                        <input type="text" aria-label="search">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <ul>
                        ${getCategories(recipes)[parentElement.querySelector('.filter__title').classList[1]].map(item => `<li class="filter-selected__itemList">${item}</li>`).join('')}
                    </ul>
                `;
                parentElement.appendChild(newDiv);
            } else {
                let newDiv = parentElement.querySelector('.newDiv');
                if (newDiv) parentElement.removeChild(newDiv);
            }
        });
    }



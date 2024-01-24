import { getRecipes } from "./getRecipes.js";

/**
 * Searches for input value within articles and displays the matching results.
 *
 * @param {string} value - the input value to search for
 * @return {void} 
 */
export function searchInput(value) {
    if (value !== '') {
        const articles = document.querySelectorAll('.card');
        const results = document.querySelector('#results');
        results.innerHTML = '';
        articles.forEach(article => {
            if (article.querySelector('.card__title').textContent.toLowerCase().includes(value.toLowerCase())) {
                results.appendChild(article);
            }
        });
    } else {
        const results = document.querySelector('#results');
        results.innerHTML = '';
        getRecipes();
    }
}   

export function searchInputFilterCategories(value) {
    
}
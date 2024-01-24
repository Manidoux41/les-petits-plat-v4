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

/**
 * Filters categories based on the input value.
 *
 * @param {string} value - the input value to filter categories
 * @return {array} filtered categories based on the input value
 */
export function searchInputFilterCategories(value) {
    
}
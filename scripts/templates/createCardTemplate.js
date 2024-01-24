/**
 * Creates a card template for the given recipe and appends it to the results element.
 *
 * @param {Object} recipe - The recipe object containing name, time, image, ingredients, and description
 * @return {void} 
 */
export function createCardTemplate(recipe) {

    const { name, time, image, ingredients, description } = recipe;

    const results = document.querySelector('#results');
    const card = document.createElement('article');
    card.classList.add('card');
    card.innerHTML = `
    <div class="card__image-container">
        <img src="../assets/images/${image}" alt="${name}" class="card__image" loading="lazy">
        <div class="card__image-gradient">${time} min</div>
    </div>
    <div class="card__info-container">
        <h3 class="card__title">${name}</h3>
        <div class="recette">
            <h4>Recette</h4>
            <p class="card__description">
                ${description}
            </p>
        </div>
        <div class="ingredients">
            <h4>Ingredients</h4>
            <ul>
                ${ingredients.map((ingredient) => {
                    return `
                    <li>
                        <span class="ingredient__name">${ingredient.ingredient}</span>
                        <span class="ingredient__quantity">${ingredient.quantity}</span>
                    </li>
                    `
                }).join('')}
            </ul>
        </div>
    </div>
    `;

    results.appendChild(card);
}
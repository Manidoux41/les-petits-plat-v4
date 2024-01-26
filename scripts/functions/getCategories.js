import { createCategoriesTemplate } from "../templates/createCategoriesTemplate.js";
import {recipes} from "../datas/recipes.js"
/**
 * Retrieves unique categories from the given list of recipes.
 *
 * @param {Array} recipes - The list of recipes to extract categories from.
 * @return {Object} An object containing sorted lists of ingredients, appliances, and ustensils.
 */
export function getCategories() {
    
        let ingredients = [];
        let appliances = [];
        let ustensils = [];

        recipes.forEach(recipe => {
            recipe.ingredients.forEach(item => {
                if (!ingredients.includes(item.ingredient)) {
                    ingredients.push(item.ingredient);
                }
            });
    
            if (!appliances.includes(recipe.appliance)) {
                appliances.push(recipe.appliance);
            }
    
            recipe.ustensils.forEach(ustensil => {
                if (!ustensils.includes(ustensil)) {
                    ustensils.push(ustensil);
                }
            });
        });

       
            const categories = {
                ingredients: ingredients.sort(),
                appliances: appliances.sort(),
                ustensils: ustensils.sort()
            }
       
        const categoriesArray = Object.keys(categories).map(key => {
            return { [key]: categories[key] };
        });
    
        categoriesArray.forEach(category => {
            createCategoriesTemplate(category);
        });
}

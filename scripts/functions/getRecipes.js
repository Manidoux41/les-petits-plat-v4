import { recipes } from "../datas/recipes.js";
import { createCardTemplate } from "../templates/createCardTemplate.js";

/**
 * Retrieves the recipes and processes some data for display.
 *
 * @return {void} 
 */
export function getRecipes () {
    const dataRecipes = recipes;
    dataRecipes.forEach(recipe => {
        createCardTemplate(recipe);
    });
    
}
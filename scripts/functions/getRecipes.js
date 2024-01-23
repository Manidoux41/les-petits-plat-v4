import { recipes } from "../datas/recipes.js";
import { createCardTemplate } from "../templates/createCardTemplate.js";

export function getRecipes () {
    const dataRecipes = recipes;
    for(const recipe of dataRecipes) {
        createCardTemplate(recipe);
    }
}
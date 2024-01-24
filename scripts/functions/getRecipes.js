import { recipes } from "../datas/recipes.js";
import { createCardTemplate } from "../templates/createCardTemplate.js";

export function getRecipes () {
    const dataRecipes = recipes;
    dataRecipes.forEach(recipe => {
        createCardTemplate(recipe);
        /* return {
            name: recipe.name,
            time: recipe.time,
            image: recipe.image,
            ingredients: recipe.ingredients,
            description: recipe.description,
            appliance: recipe.appliance,
            ustensils: recipe.ustensils
        }
        if (ustensils) {
            ustensils.forEach(ustensil => {
                if (!ustensils.includes(ustensil)) {
                    ustensils.push(ustensil);
                }
            });
        }

        if (ingredients) {
            ingredients.forEach(ingredient => {
                if (!ingredients.includes(ingredient.ingredient)) {
                    ingredients.push(ingredient.ingredient);
                }
            });
        }

        if (appliances) {
            if (!appliances.includes(recipe.appliance)) {
                appliances.push(recipe.appliance);
            }
        } */


    });
    
}
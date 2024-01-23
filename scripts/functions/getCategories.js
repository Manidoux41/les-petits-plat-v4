export function getCategories(recipes) {
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

    return {
        ingredients: ingredients.sort(),
        appliances: appliances.sort(),
        ustensils: ustensils.sort()
    };
}

import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a test',
      'https://www.maxpixel.net/static/photo/1x/Mushrooms-Recipe-Kitchen-French-Dish-2459679.jpg'
    ),
  ];

  getRecipes() {
    //   Returns a new copy of the original array.
    return this.recipes.slice();
  }
}

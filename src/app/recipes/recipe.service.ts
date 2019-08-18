import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Soup',
      'A tasty soup',
      'https://www.maxpixel.net/static/photo/1x/Mushrooms-Recipe-Kitchen-French-Dish-2459679.jpg',
      [new Ingredient('Tomatoes', 5), new Ingredient('Carrots', 4), new Ingredient('Onions', 5)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    //   Returns a new copy of the original array.
    return this.recipes.slice();
  }
  addIngredientsToSL(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}

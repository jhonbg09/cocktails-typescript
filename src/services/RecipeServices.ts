import axios from "axios";
import { CategoriesAPIResponseSchema, DrinksAPIResponse, RecipeAPIResponseSchema } from "../utils/recipes-schema";
import { Drink, SearchFilter } from "../types";

export async function getCategories() {
  //Manera correcta con https
  const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
  //Manera incorrecta sin https
  // const url = 'www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

  const { data } = await axios.get(url);
  // console.log(data);
  // De esta manera valida que la data que viene de la api venga con la estructuraa correcta y validar la informacion
  const result = CategoriesAPIResponseSchema.safeParse(data);

  if (result.success) {
    return result.data;
  }
}

export async function getRecipes(filters: SearchFilter) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`;
  const { data } = await axios.get(url);
  /* console.log(data); */
  const result = DrinksAPIResponse.safeParse(data)
  console.log(result)
  if(result.success){
    return result.data;
  }
}

export async function getRecipeById(id: Drink["idDrink"]) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  const {data} = await axios.get(url);
  const result = RecipeAPIResponseSchema.safeParse(data.drinks[0]);
  if(result.success){
    return result.data;
  }
} 
import { StateCreator } from "zustand"
import { getCategories, getRecipes } from "../services/RecipeServices"
import type { Categories, Drinks, SearchFilter } from "../types"


export type RecipesSliceType = {
    categories: Categories
    drinks: Drinks
    fecthCategories: () => Promise<void>
    searchRecipes: (searchFilter:SearchFilter) => Promise<void>
    
}
export const createRecipesSlice: StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    drinks: {
        drinks: []
    },
    fecthCategories: async () => {
        const categories = await getCategories();
        set({
            categories
        })
    },

    searchRecipes: async (filters) => {
       const drinks =  await getRecipes(filters);
       set({
        drinks
       })
     }
})